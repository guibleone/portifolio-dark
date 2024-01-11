import Drawer from "../components/Drawer";
import MaxWidthWrapper from "../components/MaxWidthWrapper";

export default function Navbar() {

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

    return (
        <nav className="py-3 bg-[#101010] border-b border-gray-700 fixed mx-auto w-full z-40">
            <MaxWidthWrapper>
                <div className="flex justify-between items-center  ">
                    <h1 className="text-2xl sm:text-5xl font-bold ">
                        <a href="#">
                            G. Leone
                        </a>
                    </h1>

                    <div className="gap-8 hidden sm:flex">
                        {links.map((link) => (
                            <a
                                className="text-xl text-gray-400 hover:text-white"
                                key={link.label}
                                href={link.href}
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>

                    <div className="sm:hidden">
                        <Drawer />
                    </div>

                    

                </div>
            </MaxWidthWrapper>
        </nav>

    )
}
