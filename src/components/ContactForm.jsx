import { motion, useInView } from 'framer-motion'
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';

export default function ContactForm() {

    const ref = useRef()
    const formRef = useRef()
    const [error, setError] = useState(false)
    const [success, setSuccess] = useState(false)

    const isInView = useInView(ref, { once: true });

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_r0z566f', 'template_2mbyonq', formRef.current, 'GI36kBvEaOGDQJs-F')
            .then((result) => {
                console.log(result.text);
                setSuccess(true)
                setError(false)
            }, (error) => {
                console.log(error.text);
                setError(true)
                setSuccess(false)
            });
    };



    return (
        <div className='relative'>
            <motion.div
                className="flex justify-center items-center"
                ref={ref}
                initial={{ opacity: 1 }}
                whileInView={{ opacity: 0 }}
                transition={{ delay: 3, duration: 1 }}
            >
                <svg width="420px" height="420px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <motion.path
                        initial={{ pathLength: 0 }}
                        animate={isInView && { pathLength: 1 }}
                        transition={{ duration: 3 }}
                        d="M15 3C16.5315 3.17014 17.9097 3.91107 19 5C20.0903 6.08893 20.8279 7.46869 21 9M14.5 6.5C15.2372 6.64382 15.9689 6.96892 16.5 7.5C17.0311 8.03108 17.3562 8.76284 17.5 9.5M8.20049 15.799C1.3025 8.90022 2.28338 5.74115 3.01055 4.72316C3.10396 4.55862 5.40647 1.11188 7.87459 3.13407C14.0008 8.17945 6.5 8 11.3894 12.6113C16.2788 17.2226 15.8214 9.99995 20.8659 16.1249C22.8882 18.594 19.4413 20.8964 19.2778 20.9888C18.2598 21.717 15.0995 22.6978 8.20049 15.799Z" stroke="#fff" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round">
                    </motion.path
                    >
                </svg>
            </motion.div>
            <motion.form
                ref={formRef}
                onSubmit={sendEmail}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 4, duration: 1 }}
                className='absolute top-0 left-0 w-full h-full '
            >
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium" htmlFor="name">Nome</label>
                        <input className="border bg-gray-900 border-gray-700 rounded-md px-3 py-2" type="text" name="name" id="name" placeholder="João da Silva" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="email" className="text-sm font-medium" >Email</label>
                        <input
                            placeholder="email@gmail.com"
                            className="border bg-gray-900 border-gray-700 rounded-md px-3 py-2" type="email" name="email" id="email" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium" htmlFor="message">Mensagem</label>
                        <textarea placeholder="Apenas dizendo oi..." className="border  bg-gray-900 border-gray-700 rounded-md px-3 py-2" name="message" id="message" cols={30} rows={3}></textarea>
                    </div>
                    <button className="bg-purple-500 mt-2 text-white font-bold py-2 px-4 rounded-md hover:bg-purple-700 transition duration-300">Enviar Menssagem</button>
                    {error && <p className="text-red-500">Ocorreu um erro ao enviar a mensagem, tente novamente mais tarde.</p>}
                    {success && <p className="text-white py-2 font-medium text-center bg-green-500">Mensagem enviada com sucesso!</p>}
                </div>
            </motion.form>
        </div>
    )
}
