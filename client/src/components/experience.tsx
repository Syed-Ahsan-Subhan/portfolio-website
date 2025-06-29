import { motion } from "framer-motion";
import { Code, Laptop, GraduationCap } from "lucide-react";

const experiences = [
  {
    title: "Senior Full Stack Developer",
    company: "TechCorp Solutions",
    period: "Jan 2022 - Present",
    description: "Lead development of enterprise web applications using React, Node.js, and AWS. Managed a team of 4 developers and improved system performance by 40%.",
    skills: ["React", "Node.js", "AWS", "Team Leadership"],
    icon: Code,
    color: "bg-blue-600",
    textColor: "text-blue-600",
    bgColor: "bg-blue-100"
  },
  {
    title: "Full Stack Developer",
    company: "StartupXYZ",
    period: "Mar 2020 - Dec 2021",
    description: "Developed and maintained multiple client projects using modern JavaScript frameworks. Collaborated with design team to create responsive, user-friendly interfaces.",
    skills: ["Vue.js", "Python", "PostgreSQL", "Docker"],
    icon: Laptop,
    color: "bg-cyan-500",
    textColor: "text-cyan-500",
    bgColor: "bg-cyan-100"
  },
  {
    title: "Junior Developer",
    company: "WebDev Agency",
    period: "Jun 2019 - Feb 2020",
    description: "Started my professional journey building WordPress sites and learning modern web development. Quickly progressed to working with React and building custom solutions.",
    skills: ["HTML/CSS", "JavaScript", "WordPress", "PHP"],
    icon: GraduationCap,
    color: "bg-emerald-500",
    textColor: "text-emerald-500",
    bgColor: "bg-emerald-100"
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">Work Experience</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            My professional journey and the impact I've made at each organization
          </p>
        </motion.div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-cyan-500 transform -translate-x-1/2"></div>
          <div className="md:hidden absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-cyan-500"></div>
          
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`mb-12 flex flex-col md:flex-row items-center ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'} mb-4 md:mb-0`}>
                <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 ${experience.color} rounded-lg flex items-center justify-center mr-4`}>
                      <experience.icon className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800">{experience.title}</h3>
                      <p className={`${experience.textColor} font-medium`}>{experience.company}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">{experience.period}</p>
                  <p className="text-gray-700 mb-4">{experience.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {experience.skills.map((skill) => (
                      <span
                        key={skill}
                        className={`${experience.bgColor} ${experience.textColor} px-3 py-1 rounded-full text-xs font-medium`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Timeline dot */}
              <div className="relative">
                <div className={`w-6 h-6 ${experience.color} rounded-full border-4 border-white shadow-lg`}></div>
              </div>
              
              <div className={`flex-1 ${index % 2 === 0 ? 'md:pl-8' : 'md:pr-8'}`}></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
