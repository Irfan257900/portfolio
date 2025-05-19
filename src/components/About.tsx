import React from 'react';

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="py-24 bg-white dark:bg-gray-900 transition-colors"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-5/12">
            <div className="relative">
              <div className="w-full aspect-square rounded-2xl overflow-hidden">
                <img
                  src="/profile.jpg"
                  alt="Mohammad Irfan"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-blue-100 dark:bg-blue-900 rounded-full -z-10"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-purple-100 dark:bg-purple-900 rounded-full -z-10"></div>
            </div>
          </div>

          <div className="w-full md:w-7/12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              About Me
            </h2>
            <div className="h-1 w-20 bg-blue-600 dark:bg-blue-500 mb-8"></div>

            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              I am a passionate technologist with a strong foundation in Python programming, SQL database management, and machine learning. I enjoy turning complex data into actionable insights and building intelligent solutions that solve real-world problems.
            </p>

            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
              With hands-on experience in data analysis, predictive modeling, and automation, I am always eager to learn new technologies and take on challenging projects. My goal is to leverage my analytical skills and technical expertise to contribute to innovative teams and drive impactful results.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Name:
                </h3>
                <p className="text-gray-700 dark:text-gray-300">Mohammad Irfan</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Email:
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  irfanmd40351@gmail.com
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Location:
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Hyderabad, Telangana
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Phone:
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  +91 9392662883
                </p>
              </div>
            </div>

            <button className="px-8 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors duration-300">
              Download Resume
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;