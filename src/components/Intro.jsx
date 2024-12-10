import profilePic from "../assets/profile.jpg";
import { motion } from "framer-motion";
const container = (delay) => ({
    hidden: {x: -100, opacity: 0},
    visible: {
        x:0,
        opacity: 1,
        transition: {duration: 0.5, delay: delay}
    }
})

const Intro = () => {
    return (
        <div className="border-b border-neutral-900 ml-6 mr-6 pb-4 lg:mb-25">
            <div className="flex flex-wrap">
                {/* Text Section */}
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        <motion.h1
                          variants={container(0)}
                          initial="hidden"
                          animate= "visible"
                         className="ml-6 pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">
                            Sudeshna Das
                        </motion.h1>
                        <motion.span
                              variants={container(0.5)}
                              initial="hidden"
                              animate= "visible"
                            className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent ml-6">
                            Web Developer
                        </motion.span>
                        <motion.p
                            variants={container(1)}
                            initial="hidden"
                            animate= "visible"
                        className="my-2 max-w-xl py-6 font-light tracking-tighter">
                            I am a passionate Web Developer with a strong background in creating dynamic and responsive web applications. With a keen eye for design and a love for coding, I strive to bridge the gap between aesthetics and functionality.

                        </motion.p>
                    </div>
                </div>

                {/* Image Section */}
                <div className="w-full lg:w-1/2 p-8">
                    <div className="flex justify-center">
                        <motion.img
                            initial={{x:100, opacity:0}}
                            animate={{x:0, opacity:1}}
                            transition={{duration: 1, delay:1.2}}
                            className="h-64 w-64 rounded-full object-cover lg:mt-16"
                            src={profilePic}
                            alt="Sudeshna Das"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Intro;
