import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";

const educationData = [
  {
    degree: "Bachelor of Computer Science",
    institution: "National University of Computer & Emerging Sciences - FAST",
    period: "2002 - 2006",
    description: "Graduated with a focus on Software Engineering and Web Technologies. Completed honors thesis on \"Integrated Variable DBMS - File Based Encrypted Database System.\"",
    coursework: "Data Structures, Algorithms, Database Systems, Web Development",
    icon: GraduationCap,
    color: "bg-blue-600"
  },
  {
    degree: "Masters' in Software Engineering",
    institution: "University of Bradford, UK",
    period: "2008 - 2009",
    description: "Graduated with a Distinction. Key focus on Software Engineering and Information Security. Completed honors thesis on \"Packet Loss in High Speed NIDS\"",
    coursework: "Data Structures, Algorithms, Database Systems, Web Development",
    icon: GraduationCap,
    color: "bg-blue-600"
  }
{
    degree: "AWS Solutions Architect",
    institution: "Amazon Web Services",
    period: "2021",
    description: "Certified AWS Solutions Architect with expertise in designing and deploying scalable, highly available systems on Amazon Web Services.",
    skills: ["EC2", "Lambda", "RDS", "S3"],
    icon: Award,
    color: "bg-cyan-500"
  }
];

export default function Education() {
  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">Education</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto"></div>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-6">
                <div className={`w-16 h-16 ${edu.color}/10 rounded-lg flex items-center justify-center mr-4`}>
                  <edu.icon className={`${edu.color.replace('bg-', 'text-')} text-2xl`} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">{edu.degree}</h3>
                  <p className={`${edu.color.replace('bg-', 'text-')} font-medium`}>{edu.institution}</p>
                  <p className="text-gray-600 text-sm">{edu.period}</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">{edu.description}</p>
              
              {edu.gpa && (
                <div className="text-sm text-gray-600 mb-2">
                  <p><strong>GPA:</strong> {edu.gpa}</p>
                  <p><strong>Relevant Coursework:</strong> {edu.coursework}</p>
                </div>
              )}
              
              {edu.skills && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {edu.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`${edu.color.replace('bg-', 'bg-')}/10 ${edu.color.replace('bg-', 'text-')} px-3 py-1 rounded-full text-xs font-medium`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
