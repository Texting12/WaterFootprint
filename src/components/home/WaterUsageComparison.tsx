import React, { useState } from 'react';
import { BarChart3 } from 'lucide-react';

type ProductType = 'food' | 'clothing' | 'electronics';

type ProductData = {
  name: string;
  waterLiters: number;
  iconUrl: string;
};

const WaterUsageComparison: React.FC = () => {
  const [productType, setProductType] = useState<ProductType>('food');

  const productData: Record<ProductType, ProductData[]> = {
    food: [
      { name: 'Beef (1kg)', waterLiters: 15400, iconUrl: '🥩' },
      { name: 'Chicken (1kg)', waterLiters: 4325, iconUrl: '🍗' },
      { name: 'Rice (1kg)', waterLiters: 2500, iconUrl: '🍚' },
      { name: 'Apples (1kg)', waterLiters: 822, iconUrl: '🍎' },
      { name: 'Potatoes (1kg)', waterLiters: 287, iconUrl: '🥔' },
    ],
    clothing: [
      { name: 'Jeans', waterLiters: 8000, iconUrl: '👖' },
      { name: 'Cotton T-shirt', waterLiters: 2700, iconUrl: '👕' },
      { name: 'Leather Shoes', waterLiters: 8000, iconUrl: '👞' },
      { name: 'Synthetic Shirt', waterLiters: 1100, iconUrl: '🧥' },
      { name: 'Linen Shirt', waterLiters: 1250, iconUrl: '👔' }
    ],
    electronics: [
      { name: 'Smartphone', waterLiters: 13000, iconUrl: '📱' },
      { name: 'Laptop', waterLiters: 20000, iconUrl: '💻' },
      { name: 'Desktop PC', waterLiters: 1500, iconUrl: '🖥️' },
      { name: 'TV (32 inch)', waterLiters: 2000, iconUrl: '📺' },
      { name: 'Microwave', waterLiters: 900, iconUrl: '🔌' }
    ]
  };

  // Find the maximum water usage for scaling
  const maxWaterUsage = Math.max(...productData[productType].map(item => item.waterLiters));

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-gray-800 flex items-center justify-center gap-2 mb-4">
            <BarChart3 className="text-blue-500" />
            Compare Water Footprints
          </h2>
          <p className="text-lg text-gray-600">
            Explore and compare the water footprint of different products to make more informed choices.
          </p>
        </div>

        <div className="mb-8 flex justify-center">
          <div className="inline-flex bg-gray-100 rounded-lg p-1">
            <button
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                productType === 'food' ? 'bg-blue-500 text-white' : 'text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setProductType('food')}
            >
              Food
            </button>
            <button
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                productType === 'clothing' ? 'bg-blue-500 text-white' : 'text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setProductType('clothing')}
            >
              Clothing
            </button>
            <button
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                productType === 'electronics' ? 'bg-blue-500 text-white' : 'text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setProductType('electronics')}
            >
              Electronics
            </button>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          {productData[productType].map((product, index) => (
            <div key={index} className="mb-6 last:mb-0">
              <div className="flex items-center mb-1">
                <span className="text-2xl mr-2">{product.iconUrl}</span>
                <span className="font-medium text-gray-800">{product.name}</span>
                <span className="ml-auto font-semibold">{product.waterLiters.toLocaleString()} liters</span>
              </div>
              <div className="h-6 bg-gray-100 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-blue-400 to-blue-600 rounded-full transition-all duration-500 ease-out"
                  style={{ width: `${(product.waterLiters / maxWaterUsage) * 100}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-gray-600 max-w-2xl mx-auto">
            The water footprint varies dramatically between products, even within the same category. Making small changes in consumption habits can lead to significant water savings.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WaterUsageComparison;