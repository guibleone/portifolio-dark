import { useEffect, useRef, useState } from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import clsx from "clsx";
import { motion, useInView } from "framer-motion";
import { Code2, Eye } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "APCCAP",
        desc: "Construído usando MERN Stack, o projeto é desenvolvido para a Associação dos Produtores de Cachaça do Circuito das Águas Paulistas (APCCAP).",
        img: "/projects/apccap.png",
        category: "React",
        gitUrl: "https://github.com/guibleone/apccap-website",
        liveUrl: "https://apccap.com.br/",
    },
    {
        id: 2,
        title: "Prato Digital",
        desc: "Construído com as avançadas tecnologias Next.js, Next Auth e Framer Motion, este projeto colabora receitas, onde os usuários compartilham suas deliciosas criações culinárias.",
        img: "/projects/prato-digital.png",
        category: "Next",
        gitUrl: "https://github.com/guibleone/prato-digital",
        liveUrl: "https://prato-digital.vercel.app/",
    },
    {
        id: 3,
        title: "Universe Blog",
        desc: "Desenvolvido com as mais recentes tecnologias do Next.js 14, este projeto consiste em um blog de notícias que abrange diversos temas do universo em questão.",
        img: "/projects/universe-blog.png",
        category: "Next",
        gitUrl: "https://github.com/guibleone/universe-blog",
        liveUrl: "https://universe-blog-zeta.vercel.app/",
    },
]

const categories = [
    "",
    "React",
    "Next",
]


export default function Projects() {

    const [activeTab, setActiveTab] = useState("")
    const [filteredProjects, setFilteredProjects] = useState([])

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const cardVariants = {
        initial: { y: 50, opacity: 0 },
        animate: { y: 0, opacity: 1 },
    };


    useEffect(() => {
        setFilteredProjects(projects.filter(project => project.category === activeTab || activeTab === ""))
    }
        , [activeTab])

    const handleProject = (category) => {
        setActiveTab(category)
        setFilteredProjects([])
    }

    return (
        <section id="projetos" >
            <MaxWidthWrapper>
                <div  className="flex flex-col items-center py-10">
                    <h1 className="text-2xl sm:text-4xl font-bold">
                        Meus Projetos
                    </h1>

                    <div  className="flex flex-row gap-3 mt-10 sm:mt-20">
                        {categories.map(category => (
                            <button
                                key={category}
                                onClick={() => handleProject(category)}
                                className={
                                    clsx('rounded-full border-2 px-5 py-3 text-lg sm:text-xl font-medium',
                                        category == activeTab ? 'border-purple-500' :
                                            'border-gray-500 text-gray-500 hover:border-white')}
                            >
                                {category === "" ? "Todos" : category}
                            </button>
                        ))}
                    </div>

                    <div
                        ref={ref}
                        className="grid mt-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
                        {filteredProjects.map((project, index) => (
                            <motion.div
                                variants={cardVariants}
                                initial="initial"
                                animate={isInView ? "animate" : "initial"}
                                transition={{ duration: 0.3, delay: index * 0.4 }}
                                key={project.id}>
                                <div className="relative group hover:cursor-pointer">
                                    <img
                                        className="aspect-video rounded-t-xl group-hover:opacity-10  transition"
                                        src={project.img} alt="" />
                                    <div className="absolute top-0 left-0 w-full h-full hidden group-hover:flex justify-center items-center gap-2">
                                        <button
                                            onClick={() => window.open(project.gitUrl)}
                                            className="rounded-full bg-transparent border-4 border-gray-400 hover:border-white text-white px-2 py-2">
                                            <Code2 size={45} />
                                        </button>
                                        <button
                                            onClick={() => window.open(project.liveUrl)}
                                            className="rounded-full bg-transparent border-4 border-gray-400 hover:border-white text-white px-2 py-2">
                                            <Eye size={45} />
                                        </button>
                                    </div>
                                </div>
                                <div className="mx-4 flex flex-col gap-3 mt-3">
                                    <h1 className="font-bold text-xl sm:text-2xl">{project.title}</h1>
                                    <p className="text-gray-500">{project.desc}</p>
                                </div>

                            </motion.div>
                        ))}
                    </div>
                </div>
            </MaxWidthWrapper>
        </section>
    )
}
