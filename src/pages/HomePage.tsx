import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Droplet, 
  BarChart3, 
  Calculator, 
  Info, 
  ChevronRight, 
  ArrowRight,
  Globe
} from 'lucide-react';
import WaterFactsSection from '../components/home/WaterFactsSection';
import WaterUsageComparison from '../components/home/WaterUsageComparison';

const HomePage: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-blue-900 opacity-70"></div>
        <div 
          className="relative bg-cover bg-center h-[80vh] flex items-center"
          style={{ backgroundImage: "url('https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')" }}
        >
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Understand Your <span className="text-blue-300">Water Footprint</span><br/> <span className="text-red-400">(Made by Ishaan and Abhay) </span>
              </h1>
              <p className="text-xl text-white mb-8 max-w-2xl">
                Discover the hidden water costs behind everyday choices and learn how to make water-wise decisions for a sustainable future.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/calculator"
                  className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-300 flex items-center gap-2"
                >
                  <Calculator size={18} />
                  Calculate Your Footprint
                </Link>
                <Link
                  to="/about"
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-800 font-semibold px-6 py-3 rounded-lg transition-colors duration-300 flex items-center gap-2"
                >
                  <Info size={18} />
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">What is a Water Footprint?</h2>
            <p className="text-lg text-gray-600">
              Your water footprint is the total volume of freshwater used to produce the goods and services you consume, including water you directly use and the "virtual water" embedded in everything you eat, wear, and buy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-blue-50 rounded-xl p-8 transition-transform hover:transform hover:scale-105 shadow-sm hover:shadow-md">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Droplet size={28} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Blue Water</h3>
              <p className="text-gray-600">
                Surface and groundwater resources consumed during production - like irrigation water drawn from lakes, rivers, and aquifers.
              </p>
            </div>

            <div className="bg-green-50 rounded-xl p-8 transition-transform hover:transform hover:scale-105 shadow-sm hover:shadow-md">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Droplet size={28} className="text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Green Water</h3>
              <p className="text-gray-600">
                Rainwater consumed by plants during growth - crucial for agriculture and forestry products, stored in soil and evaporated by crops.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 transition-transform hover:transform hover:scale-105 shadow-sm hover:shadow-md">
              <div className="bg-gray-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Droplet size={28} className="text-gray-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Grey Water</h3>
              <p className="text-gray-600">
                Volume of freshwater needed to dilute pollutants to meet water quality standards - representing the environmental impact of contamination.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link 
              to="/about" 
              className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors"
            >
              Learn more about water footprints
              <ChevronRight size={18} className="ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Water Facts Section */}
      <WaterFactsSection />

      {/* Water Usage Comparison */}
      <WaterUsageComparison />

      {/* Take Action Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-teal-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Take Action Today</h2>
            <p className="text-lg text-gray-600">
              Simple changes in your daily habits can make a significant difference in your water footprint and help preserve our planet's most precious resource.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all">
              <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
                <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center mr-2">1</span>
                Calculate
              </h3>
              <p className="text-gray-600 mb-4">
                Understand your current water footprint using our interactive calculator.
              </p>
              <Link
                to="/calculator"
                className="text-blue-600 inline-flex items-center font-medium hover:text-blue-800 transition-colors"
              >
                Start calculating
                <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all">
              <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
                <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center mr-2">2</span>
                Learn
              </h3>
              <p className="text-gray-600 mb-4">
                Discover the water footprint of different products and activities.
              </p>
              <Link
                to="/about"
                className="text-blue-600 inline-flex items-center font-medium hover:text-blue-800 transition-colors"
              >
                Explore facts
                <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all">
              <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
                <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center mr-2">3</span>
                Reduce
              </h3>
              <p className="text-gray-600 mb-4">
                Implement practical strategies to reduce your daily water consumption.
              </p>
              <Link
                to="/reduce"
                className="text-blue-600 inline-flex items-center font-medium hover:text-blue-800 transition-colors"
              >
                Get tips
                <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all">
              <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
                <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center mr-2">4</span>
                Share
              </h3>
              <p className="text-gray-600 mb-4">
                Spread awareness about water footprints to friends, family, and colleagues.
              </p>
              <Link
                to="/resources"
                className="text-blue-600 inline-flex items-center font-medium hover:text-blue-800 transition-colors"
              >
                Access resources
                <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Global Impact Banner */}
      <section className="py-12 bg-blue-600 text-white">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold mb-2 flex items-center">
              <Globe className="mr-2" size={24} />
              Make a Global Impact
            </h2>
            <p className="text-blue-100 max-w-xl">
              By reducing your water footprint, you're contributing to global water conservation and sustainability efforts.
            </p>
          </div>
          <Link
            to="/calculator"
            className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-6 py-3 rounded-lg transition-colors duration-300"
          >
            Calculate Your Impact Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
