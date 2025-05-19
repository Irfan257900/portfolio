import React from 'react';
import SkillCard from './ui/SkillCard';

const Skills: React.FC = () => {
  const skills = [
    {
      category: 'Data Analysis',
      items: [
        { name: 'Python', level: 90 },
        { name: 'SQL', level: 85 },
        { name: 'Data Visualization', level: 85 },
        { name: 'Statistical Analysis', level: 80 },
        { name: 'Pandas/NumPy', level: 85 },
      ],
    },
    {
      category: 'Machine Learning',
      items: [
        { name: 'Scikit-learn', level: 80 },
        { name: 'TensorFlow', level: 75 },
        { name: 'Predictive Modeling', level: 80 },
        { name: 'Feature Engineering', level: 75 },
        { name: 'Model Evaluation', level: 80 },
      ],
    },
    {
      category: 'Tools & Technologies',
      items: [
        { name: 'Jupyter Notebook', level: 90 },
        { name: 'Git', level: 80 },
        { name: 'Power BI', level: 75 },
        { name: 'Excel', level: 85 },
        { name: 'Database Management', level: 80 },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="py-24 bg-gray-50 dark:bg-gray-800 transition-colors"
    >
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My Skills & Expertise
          </h2>
          <div className="h-1 w-20 bg-blue-600 dark:bg-blue-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            I've developed a strong skill set in data analysis, machine learning, and various technical tools. Here's a detailed overview of my expertise and proficiency levels.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillGroup, index) => (
            <SkillCard key={index} category={skillGroup.category} skills={skillGroup.items} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;