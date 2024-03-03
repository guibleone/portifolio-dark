import { motion } from "framer-motion";
import { useState } from "react";

let tabs = [
    {
        id: 1,
        label: "Habilidades",
        desc:
            <div className="list-disc">
                <li>JavaScript</li>
                <li>React</li>
                <li>Node.Js</li>
                <li>NextJS</li>
                <li>Express</li>
                <li>MongoDb</li>
            </div>,
    },
    {
        id: 2,
        label: "Educação",
        desc: <div>
            <li>Cursando Análise e Desenvolvimento de Sistemas | Unicamp</li>
            <li>Técnico de Informártica | IFSP - Campus Campinas</li>
        </div>
        ,
    },
    {
        id: 3,
        label: "Extras",
        desc: <div className="list-disc">
            <li>
                Apresentação BRAGANTEC 2023
            </li>
            <li>
                Apresentação em congresso CONICT 2023
            </li>
        </div>,
    },
];

function AnimatedTabs() {
    let [activeTab, setActiveTab] = useState(tabs[0].id);


    return (

        <div>
            <div className="flex space-x-1">
                {tabs.map((tab) => (
                    <div key={tab.id}>
                        <button
                            onClick={() => setActiveTab(tab.id)}
                            className={`${activeTab === tab.id ? "" : "hover:text-white/60"
                                } relative rounded-full px-3 py-1.5 text-sm font-medium text-white outline-sky-400 transition focus-visible:outline-2`}
                            style={{
                                WebkitTapHighlightColor: "transparent",
                            }}
                        >
                            {activeTab === tab.id && (
                                <motion.span
                                    layoutId="bubble"
                                    className="absolute inset-0 z-10 bg-white mix-blend-difference"
                                    style={{ borderRadius: 9999 }}
                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                />
                            )}
                            {tab.label}
                        </button>
                    </div>
                ))}
            </div>


            <div className="mt-4">
                <p>
                    {tabs.find((tab) => tab.id === activeTab).desc}
                </p>
            </div>
        </div>
    )
}

export default AnimatedTabs;