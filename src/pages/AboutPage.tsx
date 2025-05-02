import React from 'react';
import { Droplet, Globe, Leaf, Info, AlertTriangle, Lightbulb } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">About Water Footprint</h1>
            <p className="text-xl mb-8">
              Understanding the concept of water footprint and why it's crucial for our planet's future.
            </p>
          </div>
        </div>
      </section>

      {/* Definition Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <div className="bg-blue-50 p-10 rounded-2xl shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                  <Droplet size={128} className="text-blue-500" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                  <Info size={24} className="text-blue-500" />
                  What Is Water Footprint?
                </h2>
                <p className="text-lg text-gray-600 mb-4">
                  A water footprint measures the amount of water used to produce goods and services that we consume, including both direct water use (like the water we drink) and indirect water use (like the water used to produce our food).
                </p>
                <p className="text-lg text-gray-600">
                  It provides a comprehensive look at our water consumption and helps us understand the hidden water costs behind everyday products and activities.
                </p>
              </div>
            </div>
            <div className="md:w-1/2">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">The Three Components</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 rounded-full w-12 h-12 flex-shrink-0 flex items-center justify-center mt-1">
                    <Droplet size={24} className="text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-medium text-gray-800 mb-2">Blue Water Footprint</h4>
                    <p className="text-gray-600">
                      Refers to consumption of surface and groundwater resources (rivers, lakes, aquifers). This water is typically withdrawn for irrigation, industrial processes, or domestic use.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-green-100 rounded-full w-12 h-12 flex-shrink-0 flex items-center justify-center mt-1">
                    <Leaf size={24} className="text-green-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-medium text-gray-800 mb-2">Green Water Footprint</h4>
                    <p className="text-gray-600">
                      Refers to consumption of rainwater stored in soil and evaporated during crop growth. This is particularly relevant for agricultural and forestry products.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-gray-100 rounded-full w-12 h-12 flex-shrink-0 flex items-center justify-center mt-1">
                    <AlertTriangle size={24} className="text-gray-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-medium text-gray-800 mb-2">Grey Water Footprint</h4>
                    <p className="text-gray-600">
                      Refers to the volume of freshwater required to dilute pollutants to meet water quality standards. It's an indicator of water pollution associated with products or processes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why It Matters Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Water Footprint Matters</h2>
            <p className="text-lg text-gray-600">
              Understanding and reducing your water footprint is essential for addressing global water scarcity and promoting sustainable water management.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="bg-red-50 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <AlertTriangle size={28} className="text-red-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Water Scarcity Crisis</h3>
              <p className="text-gray-600">
                Over 2 billion people live in countries experiencing high water stress, and by 2025, two-thirds of the world's population may face water shortages. Freshwater is a finite resource, comprising only 2.5% of the Earth's water.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Globe size={28} className="text-blue-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Global Trade Impact</h3>
              <p className="text-gray-600">
                Through global trade, we consume products from regions that may be water-scarce. This means our consumption choices can either exacerbate or help alleviate water stress in vulnerable communities around the world.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="bg-green-50 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Leaf size={28} className="text-green-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Environmental Protection</h3>
              <p className="text-gray-600">
                Water pollution and overuse threaten ecosystems, biodiversity, and natural habitats. By reducing our water footprint, we help preserve these critical environmental resources for future generations.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="bg-yellow-50 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Lightbulb size={28} className="text-yellow-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Informed Decisions</h3>
              <p className="text-gray-600">
                Understanding water footprints empowers consumers, businesses, and policymakers to make more sustainable choices, driving innovation and conservation efforts across global supply chains.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It's Calculated Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">How Water Footprint Is Calculated</h2>
            
            <div className="bg-gray-50 rounded-xl p-8 mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Product Water Footprint</h3>
              <p className="text-gray-600 mb-4">
                The water footprint of a product is calculated by analyzing its entire supply chain and measuring:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Water used in growing raw materials (for agricultural products)</li>
                <li>Water used in manufacturing and processing</li>
                <li>Water used in packaging and transportation</li>
                <li>Water pollution generated at each stage</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Individual Water Footprint</h3>
              <p className="text-gray-600 mb-4">
                An individual's water footprint includes:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Direct water consumption (drinking, cooking, washing)</li>
                <li>Indirect water consumption through products and services</li>
                <li>Diet choices (meat vs. plant-based foods)</li>
                <li>Lifestyle and consumption patterns</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Business Water Footprint</h3>
              <p className="text-gray-600 mb-4">
                A business water footprint includes:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Operational water use (direct water consumption in operations)</li>
                <li>Supply chain water use (water embedded in purchased materials)</li>
                <li>Water used by consumers when using the company's products</li>
                <li>Water pollution generated throughout all processes</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Global Context Section */}
      <section className="py-16 bg-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Water Footprint in Global Context</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-10">
              <div className="bg-blue-700 bg-opacity-50 rounded-xl p-6 text-center">
                <p className="text-4xl font-bold mb-2">70%</p>
                <p className="text-blue-200">Of global freshwater withdrawal is used for agriculture</p>
              </div>
              
              <div className="bg-blue-700 bg-opacity-50 rounded-xl p-6 text-center">
                <p className="text-4xl font-bold mb-2">3,800</p>
                <p className="text-blue-200">Liters of water to produce one kilogram of pork</p>
              </div>
              
              <div className="bg-blue-700 bg-opacity-50 rounded-xl p-6 text-center">
                <p className="text-4xl font-bold mb-2">10,000</p>
                <p className="text-blue-200">Liters of water to produce one pair of jeans</p>
              </div>
              
              <div className="bg-blue-700 bg-opacity-50 rounded-xl p-6 text-center">
                <p className="text-4xl font-bold mb-2">4,000</p>
                <p className="text-blue-200">Average daily water footprint per person in the United States (liters)</p>
              </div>
            </div>
            
            <p className="text-center text-blue-100 mb-8">
              Understanding these global impacts helps us recognize how our personal choices contribute to either sustainable or unsustainable water use patterns worldwide.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;