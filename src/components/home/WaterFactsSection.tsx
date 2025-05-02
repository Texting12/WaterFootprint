import React from 'react';
import { Droplet, Coffee, Shirt as Tshirt } from 'lucide-react';

const WaterFactsSection: React.FC = () => {
  return (
    <section className="py-16 bg-blue-800 text-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
        <Droplet size={400} className="absolute -top-20 -right-20 text-blue-200" />
        <Droplet size={200} className="absolute bottom-10 right-20 text-blue-200" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4">Surprising Water Footprint Facts</h2>
          <p className="text-xl text-blue-200">
            Many everyday products require significantly more water than you might expect.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-blue-700 bg-opacity-50 rounded-xl p-8 backdrop-blur-sm transform transition-transform hover:scale-105">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-600 mb-6">
              <Coffee size={28} className="text-white" />
            </div>
            <h3 className="text-2xl font-semibold mb-2">140 Liters</h3>
            <p className="text-blue-200">
              A single cup of coffee requires about 140 liters of water to produce, mainly for growing coffee beans.
            </p>
          </div>

          <div className="bg-blue-700 bg-opacity-50 rounded-xl p-8 backdrop-blur-sm transform transition-transform hover:scale-105">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-600 mb-6">
              <Tshirt size={28} className="text-white" />
            </div>
            <h3 className="text-2xl font-semibold mb-2">2,700 Liters</h3>
            <p className="text-blue-200">
              A cotton t-shirt requires about 2,700 liters of water throughout its production process, from cotton farming to textile manufacturing.
            </p>
          </div>

          <div className="bg-blue-700 bg-opacity-50 rounded-xl p-8 backdrop-blur-sm transform transition-transform hover:scale-105">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-600 mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                <path d="M8 3v4h9l-5.37 10H8"></path>
              </svg>
            </div>
            <h3 className="text-2xl font-semibold mb-2">15,400 Liters</h3>
            <p className="text-blue-200">
              Producing 1 kg of beef requires approximately 15,400 liters of water, including water for feed crops, drinking water for cattle, and service water.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-blue-200 max-w-2xl mx-auto mb-6">
            These hidden water costs, known as "virtual water," make up the largest part of your water footprint. Understanding them is the first step toward making more sustainable choices.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WaterFactsSection;