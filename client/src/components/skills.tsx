import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { FaGitAlt, FaDocker, FaDatabase, FaAws } from "react-icons/fa";

const technicalSkills = [
  { name: "JavaScript / TypeScript", level: 90, category: "Frontend" },
  { name: "React / Next.js", level: 85, category: "Frontend" },
  { name: "Node.js / Express", level: 88, category: "Backend" },
  { name: "Python / Django", level: 82, category: "Backend" },
  { name: "AWS / Cloud Services", level: 75, category: "Cloud" },
  { name: "PostgreSQL / MongoDB", level: 80, category: "Database" },
  { name: "Docker / Kubernetes", level: 70, category: "DevOps" },
  { name: "GraphQL / REST APIs", level: 85, category: "APIs" },
];

const tools = [
  { icon: FaGitAlt, name: "Git & GitHub", color: "text-orange-500" },
  { icon: FaDocker, name: "Docker", color: "text-blue-500" },
  { icon: FaDatabase, name: "MongoDB", color: "text-green-500" },
  { icon: FaAws, name: "AWS", color: "text-yellow-500" },
];

const softSkills = [
  "Problem Solving",
  "Team Leadership", 
  "Communication",
  "Agile/Scrum",
  "Mentoring"
];

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="py-20 bg-gray-50">
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
          {/* Frontend & UI */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-lg font-semibold text-gray-800 mb-6">Frontend & UI</h3>
            <div className="space-y-4">
              {['React / Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'].map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-blue-50 text-blue-700 px-4 py-3 rounded-lg text-sm font-medium hover:bg-blue-100 transition-colors cursor-pointer"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Backend & Cloud */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-lg font-semibold text-gray-800 mb-6">Backend & Cloud</h3>
            <div className="space-y-4">
              {['Node.js / Express', 'Python / Django', 'PostgreSQL', 'AWS / GCP'].map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-emerald-50 text-emerald-700 px-4 py-3 rounded-lg text-sm font-medium hover:bg-emerald-100 transition-colors cursor-pointer"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* DevOps & Tools */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-lg font-semibold text-gray-800 mb-6">DevOps & Tools</h3>
            <div className="space-y-4">
              {['Docker / Kubernetes', 'CI/CD Pipelines', 'Git / GitHub', 'Monitoring & Logging'].map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-purple-50 text-purple-700 px-4 py-3 rounded-lg text-sm font-medium hover:bg-purple-100 transition-colors cursor-pointer"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
