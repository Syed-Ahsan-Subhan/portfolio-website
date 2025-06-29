import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const technicalSkills = [
  { name: "JavaScript / TypeScript", category: "Frontend" },
  { name: "React / Next.js", category: "Frontend" },
  { name: "Node.js / Express", category: "Backend" },
  { name: "Python / Django", category: "Backend" },
  { name: "AWS / Cloud Services", category: "Cloud" },
  { name: "PostgreSQL / MongoDB", category: "Database" },
  { name: "Docker / Kubernetes", category: "DevOps" },
  { name: "GraphQL / REST APIs", category: "APIs" },
];

const skillCategories = {
  "Frontend": { skills: ["React / Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"], color: "blue" },
  "Backend": { skills: ["Node.js / Express", "Python / Django", "PostgreSQL", "GraphQL"], color: "emerald" },
  "Cloud & DevOps": { skills: ["AWS / GCP", "Docker / Kubernetes", "CI/CD Pipelines", "Monitoring"], color: "purple" },
};

export default function SkillsRedesigned() {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">Technical Expertise</h2>
          <div className="text-lg text-gray-600 mb-8">
            <div className="text-xl font-medium text-gray-700">Alex Chen</div>
            <div className="text-lg text-gray-600">Full Stack Developer</div>
            <div className="text-base text-gray-500">Modern Web Technologies</div>
          </div>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-12">
          {Object.entries(skillCategories).map(([category, data], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-lg font-semibold text-gray-800 mb-6">{category}</h3>
              <div className="space-y-4">
                {data.skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`bg-${data.color}-50 text-${data.color}-700 px-4 py-3 rounded-lg text-sm font-medium hover:bg-${data.color}-100 transition-colors cursor-pointer`}
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}