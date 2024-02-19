import { Github, Linkedin } from "lucide-react";
import MaxWidthWrapper from "../components/MaxWidthWrapper";
import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <section id="contato" className="py-10 md:py-20">
      <MaxWidthWrapper>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          <div className="flex flex-col gap-4">
            <h1 className="text-xl font-bold">Vamos conversar?</h1>
            <p className="text-gray-500">
              Estou atualmente em busca de novas oportunidades de trabalho,
              então se você gostou do meu trabalho, não hesite em me enviar uma
              mensagem.
            </p>
            <div className="flex gap-2">
              <a href="https://github.com/guibleone">
                <Github size={32} />
              </a>
              <a href="https://www.linkedin.com/in/guibleone/">
                <Linkedin size={32} />
              </a>
            </div>
          </div>
          <ContactForm />
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
