import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

const Card = ({ children, className = '', hoverEffect = true }: CardProps) => {
  return (
    <div 
      className={`
        bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md
        ${hoverEffect ? 'transition-all duration-300 hover:shadow-xl hover:-translate-y-1' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export interface CardImageProps {
  src: string;
  alt: string;
  className?: string;
}

export const CardImage = ({ src, alt, className = '' }: CardImageProps) => {
  return (
    <div className="relative overflow-hidden">
      <img 
        src={src} 
        alt={alt} 
        className={`w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105 ${className}`} 
      />
    </div>
  );
};

export interface CardContentProps {
  children: ReactNode;
  className?: string;
}

export const CardContent = ({ children, className = '' }: CardContentProps) => {
  return (
    <div className={`p-5 ${className}`}>
      {children}
    </div>
  );
};

export interface CardTitleProps {
  children: ReactNode;
  className?: string;
}

export const CardTitle = ({ children, className = '' }: CardTitleProps) => {
  return (
    <h3 className={`font-semibold text-lg text-gray-900 dark:text-white mb-2 ${className}`}>
      {children}
    </h3>
  );
};

export interface CardDescriptionProps {
  children: ReactNode;
  className?: string;
}

export const CardDescription = ({ children, className = '' }: CardDescriptionProps) => {
  return (
    <p className={`text-gray-600 dark:text-gray-300 ${className}`}>
      {children}
    </p>
  );
};

export interface CardFooterProps {
  children: ReactNode;
  className?: string;
}

export const CardFooter = ({ children, className = '' }: CardFooterProps) => {
  return (
    <div className={`px-5 py-4 bg-gray-50 dark:bg-gray-700/50 ${className}`}>
      {children}
    </div>
  );
};

export default Object.assign(Card, {
  Image: CardImage,
  Content: CardContent,
  Title: CardTitle,
  Description: CardDescription,
  Footer: CardFooter
});