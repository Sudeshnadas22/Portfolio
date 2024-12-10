import { RiHtml5Line } from "react-icons/ri"
import { RiCss3Line } from "react-icons/ri"
import { RiReactjsLine } from "react-icons/ri"
import { RiJavaLine } from "react-icons/ri"
import { RiBootstrapLine } from "react-icons/ri"
import { FaNodeJs } from "react-icons/fa"
import { animate, motion } from "framer-motion"

const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse"
        }
    },
});

function Technologies() {
    return (
        <div
            className="border-b border-neutral-800 pb-24">
            <motion.h2
            whileInView={{opacity:1, y:0}}
            initial={{opacity:0, y:-100}}
            transition={{duration:1.5}}
            className="my-20 text-center text-4xl">Technical Skills</motion.h2>
            <motion.div 
            whileInView={{opacity:1, x:0}}
            initial={{opacity:0, x:-100}}
            transition={{duration: 1.5}}
            className="flex flex-wrap items-center justify-center gap-4">
                <motion.div
                    variants={iconVariants(2.5)}
                    initial="initial"
                    animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiHtml5Line className="text-8xl text-orange-700" />
                </motion.div>
                <motion.div
                variants={iconVariants(3)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiCss3Line className="text-8xl text-blue-800" />
                </motion.div>
                <motion.div
                variants={iconVariants(5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiReactjsLine className="text-8xl text-cyan-400" />
                </motion.div>
                <motion.div
                variants={iconVariants(6)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiBootstrapLine className="text-8xl text-pink-400" />
                </motion.div>
                <motion.div
                variants={iconVariants(3)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiJavaLine className="text-8xl text-blue-900" />
                </motion.div>
                <motion.div
                variants={iconVariants(5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaNodeJs className="text-8xl text-green-500" />
                </motion.div>
                <motion.div
                variants={iconVariants(6)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <img className="text-6xl text-cyan-400" src="https://img.icons8.com/?size=100&id=13441&format=png&color=000000"></img>
                </motion.div>
                <motion.div
                variants={iconVariants(4)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <img className="text-6xl text-cyan-400" src="https://img.icons8.com/?size=100&id=FnTmHRua3mU3&format=png&color=000000"></img>
                </motion.div>

            </motion.div>
        </div>
    )
}

export default Technologies
