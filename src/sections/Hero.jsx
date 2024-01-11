import { TypeAnimation } from "react-type-animation";
import MaxWidthWrapper from "../components/MaxWidthWrapper";
import { motion } from "framer-motion";
import AnimatedNumbers from "react-animated-numbers";

const variants = {
    initial: {
        opacity: 0,
        scale: 0.5
    },
    animate: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.5
        }
    }
}

export default function Hero() {
    return (
        <div className='py-12 sm:py-16 md:py-24'>
            <MaxWidthWrapper>
                <div className="flex flex-col sm:flex-row justify-between gap-10">
                    <motion.div
                        variants={variants}
                        initial="initial"
                        animate="animate"
                        className="flex flex-col gap-5 md:gap-10 text-center sm:text-start ">
                        <h1 className="text-4xl md:text-8xl leading-normal font-bold text-transparent  bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-pink-500">
                            Olá, eu sou
                            <br />
                            <span className="text-white">
                                <TypeAnimation
                                    sequence={[
                                        "Guilherme",
                                        1000,
                                        "Desenvolvedor",
                                        1000,
                                        "Next.js Entusiasta",
                                        1000,
                                        "UI/UX Designer",
                                        1000,
                                    ]}
                                    wrapper="span"
                                    speed={50}
                                    repeat={Infinity}
                                />
                            </span>
                        </h1>
                        <p className="text-gray-400 sm:text-xl">
                            Desenvolvedor web full stack apaixonado por criar aplicações interativas e reponsivas
                        </p>
                        <div>
                            <a
                                href="/#contato"
                                className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-purple-500 via-pink-500 to-pink-600 hover:bg-slate-200 text-white"
                            >
                                Contato
                            </a>
                            <a
                                href="https://drive.google.com/file/d/1B6iD6Wo5u3ep3UsKslZLj3mw8OjEKUU_/view?usp=sharing"
                                className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-pink-600 hover:bg-slate-800 text-white mt-3"
                            >
                                <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                                    Baixar CV
                                </span>
                            </a>
                        </div>
                    </motion.div>
                    <motion.div
                        variants={variants}
                        initial="initial"
                        animate="animate"
                        className="col-span-4 place-self-center mt-4 lg:mt-0"
                    >
                        <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
                            <img
                                src="/hero.png"
                                alt="hero image"
                                className="absolute -mt-6 transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                                width={300}
                                height={300}
                            />
                        </div>
                    </motion.div>
                </div>
                <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 lg:py-24">
                    <div className="sm:border-[#33353F] sm:border rounded-md py-8 px-16 flex flex-col gap-10 sm:flex-row items-center justify-between">
                        <div className="flex flex-col gap-2 text-center">
                            <h1 className="font-bold flex justify-center text-4xl">
                                <AnimatedNumbers
                                    includeComma
                                    transitions={(index) => ({
                                        type: "spring",
                                        mass: 1,
                                        friction: 100,
                                        tensions: 140 * (index + 1),
                                    })}
                                    animateToNumber={10}
                                />
                                +
                            </h1>
                            <p className="text-gray-400 text-base">
                                Projetos
                            </p>
                        </div>
                        <div className="flex flex-col gap-2 text-center">
                            <h1 className="font-bold flex justify-center text-4xl">
                                <AnimatedNumbers
                                    includeComma
                                    transitions={(index) => ({
                                        type: "spring",
                                        mass: 1,
                                        friction: 100,
                                        tensions: 140 * (index + 1),
                                    })}
                                    animateToNumber={3}
                                />
                            </h1>
                            <p className="text-gray-400 text-base">
                                Clientes
                            </p>
                        </div>
                        <div className="flex flex-col gap-2 text-center">
                            <h1 className="font-bold flex justify-center text-4xl">
                                <AnimatedNumbers
                                    includeComma
                                    transitions={(index) => ({
                                        type: "spring",
                                        mass: 1,
                                        friction: 100,
                                        tensions: 140 * (index + 1),
                                    })}
                                    animateToNumber={3}
                                />
                            </h1>
                            <p className="text-gray-400 text-base">
                                Apresentações
                            </p>
                        </div>
                        <div className="flex flex-col gap-2 text-center">
                            <h1 className="font-bold flex justify-center text-4xl">
                                <AnimatedNumbers
                                    includeComma
                                    transitions={(index) => ({
                                        type: "spring",
                                        mass: 1,
                                        friction: 100,
                                        tensions: 140 * (index + 1),
                                    })}
                                    animateToNumber={4}
                                />
                            </h1>
                            <p className="text-gray-400 text-base">
                                Anos
                            </p>
                        </div>
                    </div>
                </div>
            </MaxWidthWrapper>
        </div>
    )
}
