import { ArrowRight } from 'lucide-react';
import Button from '../ui/Button';

const Hero = () => {
  const handleScrollToFeatures = (e: React.MouseEvent) => {
    e.preventDefault();
    const featuresSection = document.querySelector('#features');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="pt-20 md:pt-32 pb-16 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          {/* Text content */}
          <div className="md:w-1/2 mb-12 md:mb-0 md:pr-8">
            <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-800 dark:text-blue-300 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-5">
              Modern UI Components
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
              Responsive Design <span className="text-blue-600 dark:text-blue-400">Showcase</span>
            </h1>
            <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-2xl">
              A beautiful collection of responsive, adaptive UI components built with React and Tailwind CSS. 
              Perfect for any modern web application.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button 
                size="lg" 
                icon={<ArrowRight size={18} />}
                onClick={handleScrollToFeatures}
                className="group"
              >
                Explore Components 
                <span className="inline-block transition-transform group-hover:translate-x-1 ml-1">→</span>
              </Button>
            </div>
          </div>
          
          {/* Hero image/illustration */}
          <div className="md:w-1/2 transform transition-all duration-500 hover:scale-[1.02]">
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-30 dark:opacity-40 animate-pulse"></div>
              <div className="relative bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Responsive UI designs on multiple devices" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;