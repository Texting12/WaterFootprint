import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FileText, 
  Link2, 
  Download, 
  ExternalLink, 
  BarChart3, 
  Book, 
  Video, 
  Globe 
} from 'lucide-react';

interface Resource {
  id: string;
  title: string;
  description: string;
  url: string;
  icon: React.ReactNode;
  type: 'website' | 'pdf' | 'video' | 'tool';
}

const ResourcesPage: React.FC = () => {
  const resources: Resource[] = [
    {
      id: 'wfn',
      title: 'Water Footprint Network',
      description: 'The leading global network on water footprint assessment, providing research, tools, and databases.',
      url: 'https://waterfootprint.org/',
      icon: <Globe size={20} />,
      type: 'website'
    },
    {
      id: 'unwater',
      title: 'UN Water',
      description: 'United Nations inter-agency coordination mechanism for water-related issues, including freshwater and sanitation.',
      url: 'https://www.unwater.org/',
      icon: <Globe size={20} />,
      type: 'website'
    },
    {
      id: 'wri',
      title: 'World Resources Institute - Aqueduct',
      description: 'Tools for measuring and mapping water risks worldwide.',
      url: 'https://www.wri.org/aqueduct',
      icon: <BarChart3 size={20} />,
      type: 'tool'
    },
    {
      id: 'epa',
      title: 'EPA WaterSense',
      description: 'U.S. Environmental Protection Agency program that promotes water efficiency and labeling for products.',
      url: 'https://www.epa.gov/watersense',
      icon: <Globe size={20} />,
      type: 'website'
    },
    {
      id: 'wwf',
      title: 'World Wildlife Fund - Freshwater',
      description: 'Conservation efforts focused on protecting freshwater ecosystems and resources.',
      url: 'https://www.worldwildlife.org/initiatives/fresh-water',
      icon: <Globe size={20} />,
      type: 'website'
    },
    {
      id: 'wateraid',
      title: 'WaterAid',
      description: 'International organization working to provide clean water, sanitation and hygiene worldwide.',
      url: 'https://www.wateraid.org/',
      icon: <Globe size={20} />,
      type: 'website'
    },
    {
      id: 'report',
      title: 'The Water Footprint Assessment Manual',
      description: 'Comprehensive guide to water footprint assessment methodology by Hoekstra et al.',
      url: 'https://waterfootprint.org/media/downloads/TheWaterFootprintAssessmentManual_2.pdf',
      icon: <FileText size={20} />,
      type: 'pdf'
    },
    {
      id: 'video1',
      title: 'The Hidden Water We Use - National Geographic',
      description: 'Visual exploration of the concept of virtual water and water footprints of everyday products.',
      url: 'https://www.youtube.com/watch?v=b1f-G6v3voA',
      icon: <Video size={20} />,
      type: 'video'
    },
    {
      id: 'book1',
      title: 'Water Footprint Book by Arjen Y. Hoekstra',
      description: '"The Water Footprint of Modern Consumer Society" - foundational book on water footprint concepts.',
      url: 'https://www.routledge.com/The-Water-Footprint-of-Modern-Consumer-Society/Hoekstra/p/book/9781138354784',
      icon: <Book size={20} />,
      type: 'website'
    },
    {
      id: 'waterproj',
      title: 'The Water Project',
      description: 'Organization providing clean, safe water to communities around the world.',
      url: 'https://thewaterproject.org/',
      icon: <Globe size={20} />,
      type: 'website'
    },
    {
      id: 'watercalc',
      title: 'Product Water Footprint Calculator',
      description: 'Interactive tool to explore water footprints of various consumer products.',
      url: 'https://www.watercalculator.org/footprint/water-footprints-of-products/',
      icon: <BarChart3 size={20} />,
      type: 'tool'
    },
    {
      id: 'infograph',
      title: 'Water Footprint Infographics',
      description: 'Collection of visual resources explaining water footprint concepts.',
      url: 'https://waterfootprint.org/en/resources/interactive-tools/product-gallery/',
      icon: <BarChart3 size={20} />,
      type: 'website'
    }
  ];

  // Group resources by type
  const websites = resources.filter(r => r.type === 'website');
  const tools = resources.filter(r => r.type === 'tool');
  const documents = resources.filter(r => r.type === 'pdf');
  const videos = resources.filter(r => r.type === 'video');

  const getResourceTypeIcon = (type: 'website' | 'pdf' | 'video' | 'tool') => {
    switch (type) {
      case 'website': return <Link2 className="text-blue-500" />;
      case 'pdf': return <FileText className="text-red-500" />;
      case 'video': return <Video className="text-purple-500" />;
      case 'tool': return <BarChart3 className="text-green-500" />;
    }
  };

  const getResourceTypeLabel = (type: 'website' | 'pdf' | 'video' | 'tool') => {
    switch (type) {
      case 'website': return 'Website';
      case 'pdf': return 'PDF Document';
      case 'video': return 'Video';
      case 'tool': return 'Interactive Tool';
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-800 to-teal-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Water Footprint Resources</h1>
            <p className="text-xl text-blue-100">
              Explore our curated collection of reliable resources to deepen your understanding of water footprints and water conservation.
            </p>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-gray-800 mb-8 flex items-center">
                <Globe className="mr-2 text-blue-500" size={24} />
                Organizations & Websites
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {websites.map(resource => (
                  <div key={resource.id} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{resource.title}</h3>
                    <p className="text-gray-600 mb-4">{resource.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500 flex items-center">
                        {getResourceTypeIcon(resource.type)}
                        <span className="ml-1">{getResourceTypeLabel(resource.type)}</span>
                      </span>
                      <a 
                        href={resource.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 font-medium flex items-center"
                      >
                        Visit Resource
                        <ExternalLink size={16} className="ml-1" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-2xl font-bold text-gray-800 mb-8 flex items-center">
                <BarChart3 className="mr-2 text-green-500" size={24} />
                Interactive Tools
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {tools.map(resource => (
                  <div key={resource.id} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{resource.title}</h3>
                    <p className="text-gray-600 mb-4">{resource.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500 flex items-center">
                        {getResourceTypeIcon(resource.type)}
                        <span className="ml-1">{getResourceTypeLabel(resource.type)}</span>
                      </span>
                      <a 
                        href={resource.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 font-medium flex items-center"
                      >
                        Use Tool
                        <ExternalLink size={16} className="ml-1" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-2xl font-bold text-gray-800 mb-8 flex items-center">
                <FileText className="mr-2 text-red-500" size={24} />
                Documents & Publications
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[...documents, ...resources.filter(r => r.icon === Book)].map(resource => (
                  <div key={resource.id} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{resource.title}</h3>
                    <p className="text-gray-600 mb-4">{resource.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500 flex items-center">
                        {resource.type === 'pdf' ? 
                          <Download size={16} className="text-red-500 mr-1" /> : 
                          <Book size={16} className="text-blue-500 mr-1" />
                        }
                        {resource.type === 'pdf' ? 'PDF Document' : 'Book'}
                      </span>
                      <a 
                        href={resource.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 font-medium flex items-center"
                      >
                        {resource.type === 'pdf' ? 'Download' : 'View'}
                        <ExternalLink size={16} className="ml-1" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-8 flex items-center">
                <Video className="mr-2 text-purple-500" size={24} />
                Videos
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {videos.map(resource => (
                  <div key={resource.id} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{resource.title}</h3>
                    <p className="text-gray-600 mb-4">{resource.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500 flex items-center">
                        {getResourceTypeIcon(resource.type)}
                        <span className="ml-1">{getResourceTypeLabel(resource.type)}</span>
                      </span>
                      <a 
                        href={resource.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 font-medium flex items-center"
                      >
                        Watch Video
                        <ExternalLink size={16} className="ml-1" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Action Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Ready to Take Action?</h2>
            <p className="text-center text-gray-600 mb-8">
              Now that you've explored these resources, you're ready to measure and reduce your own water footprint.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/calculator"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors text-center"
              >
                Calculate Your Footprint
              </Link>
              <Link
                to="/reduce"
                className="bg-teal-600 hover:bg-teal-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors text-center"
              >
                Learn How to Reduce
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResourcesPage;