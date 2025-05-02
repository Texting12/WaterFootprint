import React, { useState, useEffect } from 'react';
import { Calculator, Droplet, ArrowRight, Check, HelpCircle } from 'lucide-react';

interface Question {
  id: string;
  text: string;
  tooltip?: string;
  options: Array<{
    text: string;
    value: number;
    icon?: string;
  }>;
}

interface Category {
  id: string;
  title: string;
  questions: Question[];
}

const CalculatorPage: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [totalWaterFootprint, setTotalWaterFootprint] = useState<number | null>(null);
  const [breakdown, setBreakdown] = useState<Record<string, number>>({
    food: 0,
    household: 0,
    lifestyle: 0
  });
  const [showTooltip, setShowTooltip] = useState<string | null>(null);

  const categories: Category[] = [
    {
      id: 'food',
      title: 'Food & Diet',
      questions: [
        {
          id: 'meatConsumption',
          text: 'How often do you eat meat?',
          tooltip: 'Meat production requires significant water for animal feed, drinking water, and processing.',
          options: [
            { text: 'Daily (most meals)', value: 1500, icon: '🥩' },
            { text: 'Few times a week', value: 1000, icon: '🍗' },
            { text: 'Once a week', value: 500, icon: '🥦' },
            { text: 'Vegetarian/Vegan', value: 300, icon: '🥗' }
          ]
        },
        {
          id: 'dairyConsumption',
          text: 'How much dairy do you consume?',
          tooltip: 'Dairy production requires water for animals, feed production, and processing.',
          options: [
            { text: 'Multiple servings daily', value: 400, icon: '🧀' },
            { text: 'Once daily', value: 300, icon: '🥛' },
            { text: 'Few times a week', value: 200, icon: '🍦' },
            { text: 'Rarely/Never', value: 0, icon: '🌱' }
          ]
        },
        {
          id: 'foodWaste',
          text: 'How much food do you typically waste?',
          tooltip: 'Wasted food means wasted water that was used to produce it.',
          options: [
            { text: 'Significant amount', value: 300, icon: '🗑️' },
            { text: 'Moderate amount', value: 200, icon: '🍽️' },
            { text: 'Small amount', value: 100, icon: '📝' },
            { text: 'Almost none', value: 50, icon: '♻️' }
          ]
        }
      ]
    },
    {
      id: 'household',
      title: 'Household Usage',
      questions: [
        {
          id: 'showerLength',
          text: 'How long are your showers?',
          tooltip: 'A standard shower uses about 10 liters of water per minute.',
          options: [
            { text: 'Over 15 minutes', value: 500, icon: '🚿' },
            { text: '10-15 minutes', value: 350, icon: '⏱️' },
            { text: '5-10 minutes', value: 250, icon: '💧' },
            { text: 'Under 5 minutes', value: 150, icon: '✅' }
          ]
        },
        {
          id: 'laundryFrequency',
          text: 'How frequently do you do laundry?',
          tooltip: 'Each load of laundry uses between 50-150 liters of water.',
          options: [
            { text: 'Multiple loads daily', value: 300, icon: '👕' },
            { text: 'One load daily', value: 200, icon: '🧦' },
            { text: '2-3 loads per week', value: 100, icon: '👖' },
            { text: 'Once a week or less', value: 50, icon: '🧺' }
          ]
        },
        {
          id: 'waterSavingDevices',
          text: 'Do you use water-saving devices?',
          tooltip: 'Low-flow fixtures can reduce water usage by 30-50%.',
          options: [
            { text: 'None', value: 200, icon: '❌' },
            { text: 'Some basic ones', value: 150, icon: '🔧' },
            { text: 'Several efficient fixtures', value: 100, icon: '💧' },
            { text: 'Comprehensive water-saving setup', value: 50, icon: '♻️' }
          ]
        }
      ]
    },
    {
      id: 'lifestyle',
      title: 'Lifestyle & Consumption',
      questions: [
        {
          id: 'clothingPurchases',
          text: 'How often do you buy new clothes?',
          tooltip: 'Textile production is water-intensive; cotton uses about 10,000 liters per kg.',
          options: [
            { text: 'Weekly', value: 400, icon: '🛍️' },
            { text: 'Monthly', value: 300, icon: '👚' },
            { text: 'Seasonally', value: 200, icon: '🧥' },
            { text: 'Rarely', value: 100, icon: '♻️' }
          ]
        },
        {
          id: 'electronicPurchases',
          text: 'How often do you replace electronics?',
          tooltip: 'Manufacturing electronics requires significant water; a smartphone uses ~13,000 liters.',
          options: [
            { text: 'As soon as new models come out', value: 300, icon: '📱' },
            { text: 'Every 1-2 years', value: 200, icon: '💻' },
            { text: 'Every 3-5 years', value: 100, icon: '⌚' },
            { text: 'Only when necessary', value: 50, icon: '🔋' }
          ]
        },
        {
          id: 'paperConsumption',
          text: 'How would you describe your paper consumption?',
          tooltip: 'Paper production uses about 10 liters of water per sheet.',
          options: [
            { text: 'High (lots of printed material)', value: 200, icon: '📄' },
            { text: 'Medium (moderate printing)', value: 150, icon: '📑' },
            { text: 'Low (minimal printing)', value: 100, icon: '📝' },
            { text: 'Very low (digital substitution)', value: 50, icon: '💻' }
          ]
        }
      ]
    }
  ];

  const totalSteps = categories.length;
  const currentCategory = categories[currentStep - 1];

  useEffect(() => {
    if (Object.keys(answers).length === categories.flatMap(cat => cat.questions).length) {
      calculateWaterFootprint();
    }
  }, [answers]);

  const handleOptionSelect = (questionId: string, value: number) => {
    setAnswers({ ...answers, [questionId]: value });
  };

  const calculateWaterFootprint = () => {
    const foodQuestions = categories.find(cat => cat.id === 'food')?.questions || [];
    const householdQuestions = categories.find(cat => cat.id === 'household')?.questions || [];
    const lifestyleQuestions = categories.find(cat => cat.id === 'lifestyle')?.questions || [];

    const foodTotal = foodQuestions.reduce((sum, q) => sum + (answers[q.id] || 0), 0);
    const householdTotal = householdQuestions.reduce((sum, q) => sum + (answers[q.id] || 0), 0);
    const lifestyleTotal = lifestyleQuestions.reduce((sum, q) => sum + (answers[q.id] || 0), 0);

    const total = foodTotal + householdTotal + lifestyleTotal;

    setBreakdown({
      food: foodTotal,
      household: householdTotal,
      lifestyle: lifestyleTotal
    });

    setTotalWaterFootprint(total);
  };

  const handleNext = () => {
    const categoryQuestions = currentCategory.questions;
    const allAnswered = categoryQuestions.every(q => answers[q.id] !== undefined);
    
    if (allAnswered) {
      if (currentStep < totalSteps) {
        setCurrentStep(currentStep + 1);
      } else {
        calculateWaterFootprint();
      }
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const resetCalculator = () => {
    setAnswers({});
    setTotalWaterFootprint(null);
    setCurrentStep(1);
  };

  const renderFootprintResult = () => {
    if (totalWaterFootprint === null) return null;

    const total = totalWaterFootprint;
    let message = '';
    let messageColor = '';

    if (total < 1500) {
      message = 'Excellent! Your water footprint is well below average.';
      messageColor = 'text-green-600';
    } else if (total < 2500) {
      message = 'Good! Your water footprint is better than average.';
      messageColor = 'text-blue-600';
    } else if (total < 3500) {
      message = 'Your water footprint is about average.';
      messageColor = 'text-yellow-600';
    } else {
      message = 'Your water footprint is above average. Consider some changes.';
      messageColor = 'text-red-600';
    }

    const foodPercent = Math.round((breakdown.food / total) * 100);
    const householdPercent = Math.round((breakdown.household / total) * 100);
    const lifestylePercent = Math.round((breakdown.lifestyle / total) * 100);

    return (
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Your Water Footprint Results</h2>
        
        <div className="bg-blue-50 rounded-lg p-6 mb-8 text-center">
          <p className="text-lg text-gray-600 mb-3">Your estimated daily water footprint:</p>
          <p className="text-5xl font-bold text-blue-600 mb-3">{total.toLocaleString()} Liters</p>
          <p className={`${messageColor} font-medium text-lg`}>{message}</p>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Breakdown by Category</h3>
          
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="font-medium">Food & Diet</span>
                <span>{foodPercent}% ({breakdown.food.toLocaleString()} liters)</span>
              </div>
              <div className="h-4 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-green-500 rounded-full"
                  style={{ width: `${foodPercent}%` }}
                ></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="font-medium">Household Usage</span>
                <span>{householdPercent}% ({breakdown.household.toLocaleString()} liters)</span>
              </div>
              <div className="h-4 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-blue-500 rounded-full"
                  style={{ width: `${householdPercent}%` }}
                ></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="font-medium">Lifestyle & Consumption</span>
                <span>{lifestylePercent}% ({breakdown.lifestyle.toLocaleString()} liters)</span>
              </div>
              <div className="h-4 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-purple-500 rounded-full"
                  style={{ width: `${lifestylePercent}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Improvement Suggestions</h3>
          
          {breakdown.food > 1000 && (
            <div className="bg-green-50 p-4 rounded-lg">
              <p className="font-medium text-green-800">Food & Diet</p>
              <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
                <li>Consider reducing meat consumption by having one meat-free day per week</li>
                <li>Focus on reducing food waste by planning meals and proper storage</li>
                <li>Choose locally grown produce when possible</li>
              </ul>
            </div>
          )}
          
          {breakdown.household > 500 && (
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="font-medium text-blue-800">Household Usage</p>
              <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
                <li>Reduce shower time by just 2 minutes to save about 20 liters per shower</li>
                <li>Install low-flow showerheads and faucet aerators</li>
                <li>Only run full loads of laundry and use the eco setting</li>
              </ul>
            </div>
          )}
          
          {breakdown.lifestyle > 400 && (
            <div className="bg-purple-50 p-4 rounded-lg">
              <p className="font-medium text-purple-800">Lifestyle & Consumption</p>
              <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
                <li>Buy fewer new clothes and consider second-hand options</li>
                <li>Extend the life of your electronics instead of frequent upgrades</li>
                <li>Opt for digital documents over printing when possible</li>
              </ul>
            </div>
          )}
        </div>

        <div className="mt-8 text-center">
          <button
            onClick={resetCalculator}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            Calculate Again
          </button>
        </div>
      </div>
    );
  };

  if (totalWaterFootprint !== null) {
    return (
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          {renderFootprintResult()}
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-500 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <Calculator size={32} className="mr-2" />
              <h1 className="text-3xl font-bold">Water Footprint Calculator</h1>
            </div>
            <p className="text-xl text-blue-100">
              Answer a few questions to estimate your daily water footprint and receive personalized suggestions for reducing it.
            </p>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md p-8">
            {/* Progress Steps */}
            <div className="flex justify-between mb-8 relative">
              {categories.map((category, index) => (
                <div 
                  key={category.id} 
                  className="flex flex-col items-center relative z-10"
                >
                  <div 
                    className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      currentStep > index + 1 
                        ? 'bg-green-500 text-white' 
                        : currentStep === index + 1 
                          ? 'bg-blue-500 text-white' 
                          : 'bg-gray-200 text-gray-500'
                    }`}
                  >
                    {currentStep > index + 1 ? (
                      <Check size={18} />
                    ) : (
                      <span>{index + 1}</span>
                    )}
                  </div>
                  <span className="text-sm font-medium text-gray-600 mt-2">
                    {category.title}
                  </span>
                </div>
              ))}
              
              {/* Progress Line */}
              <div className="absolute top-5 left-0 right-0 h-0.5 bg-gray-200 -z-10" />
              <div 
                className="absolute top-5 left-0 h-0.5 bg-blue-500 -z-10 transition-all duration-300" 
                style={{ width: `${((currentStep - 1) / (categories.length - 1)) * 100}%` }}
              />
            </div>

            {/* Questions */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                {currentCategory.title}
              </h2>
              
              <div className="space-y-10">
                {currentCategory.questions.map((question) => (
                  <div key={question.id} className="border-b border-gray-100 pb-8 last:border-0">
                    <div className="flex items-center mb-4">
                      <h3 className="text-lg font-medium text-gray-700 mr-2">
                        {question.text}
                      </h3>
                      {question.tooltip && (
                        <div className="relative">
                          <button
                            onMouseEnter={() => setShowTooltip(question.id)}
                            onMouseLeave={() => setShowTooltip(null)}
                            className="text-gray-400 hover:text-gray-600"
                          >
                            <HelpCircle size={16} />
                          </button>
                          
                          {showTooltip === question.id && (
                            <div className="absolute z-10 w-64 p-3 bg-gray-800 text-white text-sm rounded-md shadow-lg -left-32 -bottom-20">
                              {question.tooltip}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                      {question.options.map((option) => (
                        <button
                          key={option.text}
                          onClick={() => handleOptionSelect(question.id, option.value)}
                          className={`border rounded-lg p-4 text-left transition-all ${
                            answers[question.id] === option.value
                              ? 'border-blue-500 bg-blue-50 shadow-sm'
                              : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                          }`}
                        >
                          <div className="flex items-center mb-2">
                            <span className="text-2xl mr-2">{option.icon}</span>
                            <span className="font-medium text-gray-800">{option.text}</span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8">
              <button
                onClick={handlePrev}
                className={`px-5 py-2 rounded-lg font-medium transition-colors ${
                  currentStep === 1
                    ? 'text-gray-400 cursor-not-allowed'
                    : 'text-gray-600 hover:text-gray-800'
                }`}
                disabled={currentStep === 1}
              >
                Previous
              </button>
              
              <button
                onClick={handleNext}
                className={`px-6 py-3 rounded-lg font-semibold flex items-center transition-colors ${
                  currentCategory.questions.every(q => answers[q.id] !== undefined)
                    ? 'bg-blue-500 hover:bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                }`}
                disabled={!currentCategory.questions.every(q => answers[q.id] !== undefined)}
              >
                {currentStep < totalSteps ? (
                  <>
                    Next Step
                    <ArrowRight size={18} className="ml-1" />
                  </>
                ) : (
                  <>
                    Calculate Results
                    <Calculator size={18} className="ml-1" />
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CalculatorPage;