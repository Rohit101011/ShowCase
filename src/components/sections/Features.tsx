import { Monitor, Smartphone, Palette, Zap, Layout, Shield } from 'lucide-react';
import Card from '../ui/Card';

type FeatureItem = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const Features = () => {
  const features: FeatureItem[] = [
    {
      icon: <Monitor className="h-8 w-8 text-blue-600 dark:text-blue-400" />,
      title: 'Responsive Design',
      description: 'Layouts that adapt perfectly to any screen size, from mobile to desktop.'
    },
    {
      icon: <Palette className="h-8 w-8 text-purple-600 dark:text-purple-400" />,
      title: 'Customizable Themes',
      description: 'Switch between light and dark modes with a beautiful color system.'
    },
    {
      icon: <Zap className="h-8 w-8 text-amber-600 dark:text-amber-400" />,
      title: 'Fast Performance',
      description: 'Optimized components that load quickly and run smoothly on all devices.'
    },
    {
      icon: <Layout className="h-8 w-8 text-green-600 dark:text-green-400" />,
      title: 'Modular Components',
      description: 'Reusable UI components that can be combined to create complex interfaces.'
    },
    {
      icon: <Smartphone className="h-8 w-8 text-red-600 dark:text-red-400" />,
      title: 'Mobile First',
      description: 'Designed for mobile experiences first, then enhanced for larger screens.'
    },
    {
      icon: <Shield className="h-8 w-8 text-teal-600 dark:text-teal-400" />,
      title: 'Accessibility',
      description: 'Built with a11y best practices for an inclusive user experience.'
    }
  ];

  return (
    <section id="features" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Powerful UI Features
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Modern, responsive components designed for the next generation of web applications
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group h-full"
            >
              <Card.Content>
                <div className="mb-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg inline-block transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                  {feature.icon}
                </div>
                <Card.Title>{feature.title}</Card.Title>
                <Card.Description>{feature.description}</Card.Description>
              </Card.Content>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;