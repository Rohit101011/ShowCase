import { useState } from 'react';
import Card from '../ui/Card';
import Button from '../ui/Button';

type Project = {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
};

type Category = 'all' | 'mobile' | 'web' | 'desktop';

const Showcase = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('all');
  
  const projects: Project[] = [
    {
      id: 1,
      title: 'Mobile App Dashboard',
      category: 'mobile',
      image: 'https://images.pexels.com/photos/3585088/pexels-photo-3585088.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'A clean, minimalist dashboard UI design for mobile applications.'
    },
    {
      id: 2,
      title: 'E-commerce Platform',
      category: 'web',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Responsive shopping experience with modern UI components.'
    },
    {
      id: 3,
      title: 'Analytics Dashboard',
      category: 'desktop',
      image: 'https://images.pexels.com/photos/7964639/pexels-photo-7964639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Data visualization dashboard with dark mode support.'
    },
    {
      id: 4,
      title: 'Travel Booking App',
      category: 'mobile',
      image: 'https://images.pexels.com/photos/2007647/pexels-photo-2007647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Mobile-first travel booking experience with gesture controls.'
    },
    {
      id: 5,
      title: 'Content Management System',
      category: 'web',
      image: 'https://images.pexels.com/photos/7103/writing-notes-idea-conference.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Modern CMS interface with intuitive content editing.'
    },
    {
      id: 6,
      title: 'Desktop Media Player',
      category: 'desktop',
      image: 'https://images.pexels.com/photos/3944311/pexels-photo-3944311.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Sleek media player design for desktop applications.'
    }
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const categories: { value: Category; label: string }[] = [
    { value: 'all', label: 'All Projects' },
    { value: 'mobile', label: 'Mobile' },
    { value: 'web', label: 'Web' },
    { value: 'desktop', label: 'Desktop' }
  ];

  return (
    <section id="showcase" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Design Showcase
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Explore our collection of responsive UI designs across different platforms
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.value}
              variant={activeCategory === category.value ? 'primary' : 'ghost'}
              size="sm"
              onClick={() => setActiveCategory(category.value)}
              className="min-w-24"
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="group h-full flex flex-col">
              <Card.Image 
                src={project.image} 
                alt={project.title} 
                className="h-48 sm:h-64 object-cover"
              />
              <Card.Content className="flex-1">
                <div className="flex justify-between items-start mb-2">
                  <Card.Title>{project.title}</Card.Title>
                  <span className="text-xs font-medium px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full">
                    {project.category}
                  </span>
                </div>
                <Card.Description>{project.description}</Card.Description>
              </Card.Content>
              <Card.Footer className="flex justify-between items-center">
                <Button variant="ghost" size="sm">
                  Details
                </Button>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  UI Design
                </span>
              </Card.Footer>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Showcase;