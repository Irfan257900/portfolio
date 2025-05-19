import React from 'react';

type Skill = {
  name: string;
  level: number;
};

type SkillCardProps = {
  category: string;
  skills: Skill[];
};

const SkillCard: React.FC<SkillCardProps> = ({ category, skills }) => {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md hover:shadow-lg transition-shadow p-6">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
        {category}
      </h3>
      <div className="space-y-4">
        {skills.map((skill, index) => (
          <div key={index}>
            <div className="flex justify-between items-center mb-1">
              <span className="text-gray-800 dark:text-gray-200">{skill.name}</span>
              <span className="text-sm text-gray-600 dark:text-gray-400">
                {skill.level}%
              </span>
            </div>
            <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillCard;