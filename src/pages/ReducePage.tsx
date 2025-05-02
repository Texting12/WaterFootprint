import React from 'react';
import { Droplet, Home, ShoppingBag, Utensils, Leaf, Check } from 'lucide-react';

interface TipCategory {
  id: string;
  title: string;
  icon: React.ReactNode;
  tips: Array<{
    id: string;
    title: string;
    description: string;
    impact: 'high' | 'medium' | 'low';
    waterSaved: string;
  }>;
}

const ReducePage: React.FC = () => {
  const tipCategories: TipCategory[] = [
    {
      id: 'home',
      title: 'Home & Garden',
      icon: <Home className="text-blue-500" />,
      tips: [
        {
          id: 'showers',
          title: 'Take Shorter Showers',
          description: 'Reducing your shower time by just 2 minutes can save a significant amount of water. Install a water-efficient showerhead for even greater savings.',
          impact: 'high',
          waterSaved: '20 liters per minute'
        },
        {
          id: 'leaks',
          title: 'Fix Leaky Faucets',
          description: 'A dripping faucet can waste thousands of liters per year. Regularly check for and repair leaks throughout your home.',
          impact: 'medium',
          waterSaved: '30+ liters per day per leak'
        },
        {
          id: 'toilets',
          title: 'Install Efficient Toilets',
          description: 'Consider low-flush or dual-flush toilets, which use significantly less water than standard models. A simple toilet displacement device can also reduce water used per flush.',
          impact: 'high',
          waterSaved: '5-10 liters per flush'
        },
        {
          id: 'rainwater',
          title: 'Collect Rainwater',
          description: 'Use rain barrels to collect water for garden irrigation. This reduces the need for tap water while providing plants with natural, chemical-free water.',
          impact: 'medium',
          waterSaved: 'Up to 600 liters per barrel during rainfall'
        }
      ]
    },
    {
      id: 'food',
      title: 'Food & Diet',
      icon: <Utensils className="text-green-500" />,
      tips: [
        {
          id: 'meatless',
          title: 'Eat Less Meat',
          description: 'Animal products have much larger water footprints than plant-based foods. Even reducing meat consumption by one day per week can make a significant difference.',
          impact: 'high',
          waterSaved: '1,500+ liters per meatless day'
        },
        {
          id: 'foodwaste',
          title: 'Reduce Food Waste',
          description: 'Plan meals, store food properly, and use leftovers creatively to minimize waste. When food is wasted, all the water used to produce it is wasted too.',
          impact: 'high',
          waterSaved: '100-1,000 liters per kg of food saved'
        },
        {
          id: 'local',
          title: 'Buy Local, Seasonal Produce',
          description: 'Locally grown, seasonal fruits and vegetables typically require less irrigation and have a lower water footprint related to transportation.',
          impact: 'medium',
          waterSaved: 'Varies by food type'
        },
        {
          id: 'coffee',
          title: 'Rethink Your Beverages',
          description: 'Coffee and alcohol have surprisingly high water footprints. Consider reducing consumption or choosing more water-efficient alternatives.',
          impact: 'medium',
          waterSaved: '140 liters per cup of coffee avoided'
        }
      ]
    },
    {
      id: 'consumer',
      title: 'Consumer Choices',
      icon: <ShoppingBag className="text-purple-500" />,
      tips: [
        {
          id: 'clothes',
          title: 'Buy Fewer New Clothes',
          description: 'The textile industry is extremely water-intensive. Consider second-hand shopping, clothing swaps, or simply buying fewer new items.',
          impact: 'high',
          waterSaved: '2,700+ liters per t-shirt not purchased'
        },
        {
          id: 'laundry',
          title: 'Wash Clothes Efficiently',
          description: 'Only run full loads of laundry, use cold water when possible, and consider wearing items multiple times before washing (especially jeans).',
          impact: 'medium',
          waterSaved: '50-150 liters per load'
        },
        {
          id: 'paper',
          title: 'Reduce Paper Usage',
          description: 'Paper production is water-intensive. Go digital where possible, print double-sided, and recycle paper products.',
          impact: 'low',
          waterSaved: '10 liters per sheet of paper'
        },
        {
          id: 'electronics',
          title: 'Extend Electronics Lifespan',
          description: 'Manufacturing electronics requires significant water. By keeping devices longer, you reduce the frequency of this water-intensive production.',
          impact: 'medium',
          waterSaved: '13,000+ liters per smartphone life extended'
        }
      ]
    },
    {
      id: 'outdoor',
      title: 'Outdoor & Gardening',
      icon: <Leaf className="text-green-600" />,
      tips: [
        {
          id: 'drip',
          title: 'Use Drip Irrigation',
          description: 'Drip irrigation delivers water directly to plant roots, minimizing evaporation and runoff compared to sprinkler systems.',
          impact: 'high',
          waterSaved: 'Up to 60% compared to sprinklers'
        },
        {
          id: 'native',
          title: 'Plant Native Species',
          description: 'Native plants are adapted to local rainfall patterns and typically require less additional watering than non-native ornamentals.',
          impact: 'medium',
          waterSaved: 'Varies by region and plant type'
        },
        {
          id: 'mulch',
          title: 'Apply Mulch in Gardens',
          description: 'Mulch reduces evaporation from soil, helps control weeds, and improves soil health, all contributing to water conservation.',
          impact: 'medium',
          waterSaved: 'Up to 30% of irrigation water'
        },
        {
          id: 'timing',
          title: 'Water at Optimal Times',
          description: 'Watering early morning or evening reduces evaporation loss. Avoid watering during windy conditions or midday heat.',
          impact: 'medium',
          waterSaved: '20-30% of irrigation water'
        }
      ]
    }
  ];

  const [activeCategory, setActiveCategory] = React.useState(tipCategories[0].id);

  const getImpactColor = (impact: 'high' | 'medium' | 'low') => {
    switch (impact) {
      case 'high': return 'bg-green-100 text-green-800';
      case 'medium': return 'bg-blue-100 text-blue-800';
      case 'low': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-800 to-teal-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Reduce Your Water Footprint</h1>
            <p className="text-xl text-blue-100">
              Simple, practical steps to reduce your water consumption and make a positive impact on our planet's most precious resource.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Impact Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Quick Impact Changes</h2>
            <p className="text-lg text-gray-600">
              These high-impact actions can significantly reduce your water footprint with minimal effort.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-blue-50 rounded-xl p-6 border border-blue-100 transition-transform hover:scale-105">
              <div className="bg-blue-500 text-white w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Droplet size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Fix Household Leaks</h3>
              <p className="text-gray-600 mb-4">
                A dripping faucet can waste over 11,000 liters per year. Check for and repair leaks in faucets, toilets, and pipes.
              </p>
              <p className="font-medium text-blue-600">Saves 30+ liters/day</p>
            </div>

            <div className="bg-green-50 rounded-xl p-6 border border-green-100 transition-transform hover:scale-105">
              <div className="bg-green-500 text-white w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Utensils size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">One Meatless Day</h3>
              <p className="text-gray-600 mb-4">
                Having just one meatless day per week can save more water than not showering for an entire month.
              </p>
              <p className="font-medium text-green-600">Saves 1,500+ liters/week</p>
            </div>

            <div className="bg-purple-50 rounded-xl p-6 border border-purple-100 transition-transform hover:scale-105">
              <div className="bg-purple-500 text-white w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <ShoppingBag size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Buy Less, Choose Well</h3>
              <p className="text-gray-600 mb-4">
                By purchasing one fewer new t-shirt, you can save more water than a person drinks in three years.
              </p>
              <p className="font-medium text-purple-600">Saves 2,700+ liters/item</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tips By Category Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Comprehensive Water-Saving Tips</h2>
            <p className="text-lg text-gray-600">
              Explore our collection of practical tips across different areas of your life to make water-wise choices every day.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {tipCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center px-6 py-3 rounded-full font-medium transition-colors ${
                  activeCategory === category.id
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.title}
              </button>
            ))}
          </div>

          {/* Tips Content */}
          <div className="max-w-5xl mx-auto">
            {tipCategories.map((category) => (
              <div
                key={category.id}
                className={activeCategory === category.id ? 'block' : 'hidden'}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {category.tips.map((tip) => (
                    <div key={tip.id} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="flex-shrink-0 mt-1">
                          <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                            <Check size={20} className="text-blue-600" />
                          </div>
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-gray-800 mb-1">{tip.title}</h3>
                          <p className="text-gray-600 mb-4">{tip.description}</p>
                          <div className="flex items-center justify-between">
                            <span className={`px-3 py-1 rounded-full text-sm font-medium ${getImpactColor(tip.impact)}`}>
                              {tip.impact.charAt(0).toUpperCase() + tip.impact.slice(1)} Impact
                            </span>
                            <span className="text-blue-600 font-medium">
                              <Droplet size={16} className="inline -mt-1 mr-1" />
                              Saves: {tip.waterSaved}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-12 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Make a Water-Saving Commitment</h2>
            <p className="text-xl mb-8 text-blue-100">
              Small changes add up. Select the actions you're willing to commit to, and see the potential impact you can make.
            </p>
            <div className="inline-flex space-x-4">
              <a
                href="/calculator"
                className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                Calculate Your Footprint
              </a>
              <a
                href="/resources"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                Explore Resources
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReducePage;