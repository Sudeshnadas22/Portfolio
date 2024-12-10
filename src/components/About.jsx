import { motion } from "framer-motion";
const About = () => {
  return (
    <div className="flex pb-20 items-center justify-center border-b border-neutral-900">
      <div className="text-center">
        <h2 className="mb-6 text-5xl my-20 sm:text-4xl">
          About <span className="text-neutral-500">Me</span>
        </h2>
        <motion.div 
         whileInView={{opacity:1, x:0}}
         initial={{opacity:0, x:100}}
         transition={{duration:0.5}}
         className="max-w-lg mx-auto">
          <p className="text-lg sm:text-base mx-4 sm:mx-2 text-pink-200">
            As a passionate Full-Stack Developer, I specialize in frontend and backend development with expertise in languages like Java, Python, C++, and C. I have hands-on experience developing robust web applications using Django for backend and modern frontend technologies. I am involved in the technical domain at the Entrepreneurship Cell of VSSUT, Burla, where I actively contribute to innovative tech solutions. I'm driven by a deep interest in AI/ML and continuously exploring these fields to enhance my skills and contribute to cutting-edge technologies.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
