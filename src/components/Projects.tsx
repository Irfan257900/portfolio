import React, { useState } from 'react';
import ProjectCard from './ui/ProjectCard';

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl: string;
  codeUrl: string;
};

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description:
        'A full-featured e-commerce platform with user authentication, product management, cart functionality, and payment processing.',
      image:
        'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tags: ['react', 'node', 'mongodb'],
      demoUrl: '#',
      codeUrl: '#',
    },
    {
      id: 2,
      title: 'Task Management App',
      description:
        'A productivity tool for teams to manage tasks, track progress, and collaborate efficiently on projects.',
      image:
        'https://images.pexels.com/photos/6694543/pexels-photo-6694543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tags: ['react', 'firebase', 'typescript'],
      demoUrl: '#',
      codeUrl: '#',
    },
    {
      id: 3,
      title: 'Blog Platform',
      description:
        'A modern blogging platform with a rich text editor, user profiles, commenting system, and analytics.',
      image:
        'https://images.pexels.com/photos/261579/pexels-photo-261579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tags: ['node', 'express', 'postgresql'],
      demoUrl: '#',
      codeUrl: '#',
    },
    {
      id: 4,
      title: 'Finance Dashboard',
      description:
        'An interactive dashboard for visualizing financial data with charts, graphs, and customizable widgets.',
      image:
        'https://images.pexels.com/photos/186461/pexels-photo-186461.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tags: ['react', 'typescript', 'd3'],
      demoUrl: '#',
      codeUrl: '#',
    },
    {
      id: 5,
      title: 'Social Media App',
      description:
        'A social networking application with real-time chat, post sharing, and user connections.',
      image:
        'https://images.pexels.com/photos/6476582/pexels-photo-6476582.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tags: ['react', 'node', 'socket.io'],
      demoUrl: '#',
      codeUrl: '#',
    },
    {
      id: 6,
      title: 'Weather Forecast App',
      description:
        'A weather application that provides real-time forecasts, location-based updates, and interactive maps.',
      image:
        'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tags: ['javascript', 'api', 'css'],
      demoUrl: '#',
      codeUrl: '#',
    },
  ];

  const filters = [
    { value: 'all', label: 'All Projects' },
    { value: 'react', label: 'React' },
    { value: 'node', label: 'Node.js' },
    { value: 'typescript', label: 'TypeScript' },
    { value: 'api', label: 'API' },
  ];

  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter((project) => project.tags.includes(activeFilter));

  return (
    <section
      id="projects"
      className="py-24 bg-white dark:bg-gray-900 transition-colors"
    >
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My Portfolio
          </h2>
          <div className="h-1 w-20 bg-blue-600 dark:bg-blue-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Browse through a selection of my latest projects. Each one represents
            a unique challenge and showcases different skills and technologies.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                activeFilter === filter.value
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;