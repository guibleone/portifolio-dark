import React from 'react'
import { motion } from 'framer-motion'

export default function Drawer() {

    const [isOpen, setIsOpen] = React.useState(false)

    const toggleDrawer = () => {
        setIsOpen(!isOpen)
    }

    const links = [
        {
            label: 'Sobre',
            href: '#sobre'
        },
        {
            label: 'Projetos',
            href: '#projetos'
        },
        {
            label: 'Contato',
            href: '#contato'
        }
    ]

    const variants = {
        initial: {
            opacity: 0,
            y: -40
        },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                staggerChildren: 0.3
            }
        }
    }


    return (
        <div onClick={toggleDrawer} className='relative'>
            {isOpen ? (
                <button onClick={toggleDrawer} className="text-white border border-white rounded-md p-1">
                    <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>
            ) : (
                <button onClick={toggleDrawer} className="text-white border border-white rounded-md p-1">
                    <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </button>
            )}

            {isOpen && (
                <div onClick={toggleDrawer} className="fixed inset-0 border-b border-gray-700 h-[225px] z-20">
                    <motion.div className="absolute inset-x-0 top-12 w-full bg-[#101010]">
                        <motion.div className="flex flex-col justify-between items-center text-center h-full">
                            <motion.div 
                            variants={variants}
                            initial="initial"
                            animate="animate"
                            className="flex flex-col gap-5 py-8">
                                {links.map((link) => (
                                    <motion.a
                                    variants={variants}
                                        className="text-md text-gray-400"
                                        key={link.label}
                                        href={link.href}
                 
                                    >
                                        {link.label}
                                    </motion.a>
                                ))}
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            )}
        </div>
    )
}
