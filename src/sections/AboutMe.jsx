import AnimatedTabs from "../components/Tabs";

export default function AboutMe() {
    return (
        <section className='py-0 sm:py-10 pb-10 '>
            <div className='max-w-screen-xl mx-auto px-8'>
                <div className='grid gap-10 grid-cols-1 sm:grid-cols-2 '>
                    <div>
                        <img className='aspect-square' width={400} src="https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    </div>
                    <div className='flex flex-col gap-5'>
                        <h2 className="text-2xl sm:text-4xl font-bold">
                            Sobre Mim
                        </h2>
                        <p className=" text-md sm:text-xl text-base">
                            Sou um desenvolvedor web full stack apaixonado por criar aplicações interativas e responsivas. Tenho experiência sólida com JavaScript, React, Redux, Node.js, Express, PostgreSQL, HTML, CSS e Git. Sou um aprendiz ágil, sempre buscando ampliar meu conhecimento e aprimorar minhas habilidades. Com uma mentalidade colaborativa, estou entusiasmado para trabalhar em equipe e contribuir para a criação de aplicações incríveis.
                        </p>
                        <AnimatedTabs />
                    </div>
                </div>
            </div>
        </section>
    )
}
