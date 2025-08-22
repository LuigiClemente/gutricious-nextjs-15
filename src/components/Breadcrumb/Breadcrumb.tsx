"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { HiChevronRight } from 'react-icons/hi';

interface BreadcrumbProps {
  items?: Array<{
    name: string;
    path: string;
  }>;
  locale: string;
  className?: string;
}

export default function Breadcrumb({ items, locale, className = '' }: BreadcrumbProps) {
  const pathname = usePathname();
  
  // If no items are provided, generate breadcrumbs from the current path
  const breadcrumbItems = items || generateBreadcrumbsFromPath(pathname, locale);
  
  return (
    <nav aria-label="Breadcrumb" className={`flex items-center py-4 ${className}`}>
      <ol className="flex flex-wrap items-center space-x-1 md:space-x-2">
        <li className="flex items-center">
          <Link 
            href={`/${locale}`} 
            className="text-sm md:text-base text-gray-500 hover:text-[#2ae8d3] transition-colors"
          >
            Home
          </Link>
        </li>
        
        {breadcrumbItems.map((item, index) => (
          <li key={item.path} className="flex items-center">
            <HiChevronRight className="mx-1 h-4 w-4 text-gray-400" aria-hidden="true" />
            {index === breadcrumbItems.length - 1 ? (
              <span className="text-sm md:text-base font-medium text-gray-900">
                {item.name}
              </span>
            ) : (
              <Link
                href={item.path.startsWith('/') ? item.path : `/${locale}/${item.path}`}
                className="text-sm md:text-base text-gray-500 hover:text-[#2ae8d3] transition-colors"
              >
                {item.name}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

// Helper function to generate breadcrumb items from URL path
function generateBreadcrumbsFromPath(path: string, locale: string) {
  // Remove locale prefix and leading/trailing slashes
  const cleanPath = path.replace(new RegExp(`^/${locale}`), '').replace(/^\/|\/$/g, '');
  
  // If path is empty (home page), return empty array
  if (!cleanPath) {
    return [];
  }
  
  // Split path into segments
  const segments = cleanPath.split('/');
  const breadcrumbs = [];
  
  // Generate breadcrumb for each segment
  let currentPath = '';
  
  for (let i = 0; i < segments.length; i++) {
    const segment = segments[i];
    currentPath += `/${segment}`;
    
    // Format the name to be more readable (capitalize, replace hyphens with spaces)
    const name = segment
      .replace(/-/g, ' ')
      .replace(/\b\w/g, (char) => char.toUpperCase())
      .replace(/([a-z])([A-Z])/g, '$1 $2'); // Add space between camelCase
    
    breadcrumbs.push({
      name,
      path: `/${locale}${currentPath}`,
    });
  }
  
  return breadcrumbs;
}
