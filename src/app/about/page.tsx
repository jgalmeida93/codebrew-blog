import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/me.jpeg"
                alt="Founder"
                width={500}
                height={400}
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          <div className="order-1 md:order-2">
            <h1 className="text-3xl font-bold text-accent-primary mb-6">
              Front-end Developer &{" "}
              <span className="text-accent-secondary">Coffee Enthusiast</span>
            </h1>
            <h2 className="text-2xl font-medium text-text-secondary-light dark:text-text-secondary-dark mb-6">
              Founder of CodeBrew Labs
            </h2>
            <div className="space-y-4 text-lg">
              <p className="text-text-secondary-light dark:text-text-secondary-dark mb-4">
                Na CodeBrew Labs, uni minhas duas maiores paixões: café e
                código. Como desenvolvedor front-end, crio experiências digitais
                únicas enquanto saboreio as melhores xícaras de café.
              </p>
              <p className="text-text-secondary-light dark:text-text-secondary-dark mb-4">
                Especializado em React, Next.js e TypeScript, transformo ideias
                em interfaces modernas e intuitivas. Assim como um barista
                extrai o melhor de cada grão, extraio o máximo de cada linha de
                código para entregar produtos excepcionais.
              </p>
              <p className="text-text-secondary-light dark:text-text-secondary-dark mb-4">
                Na CodeBrew Labs, cada projeto é preparado com a mesma dedicação
                de um café especial: atenção aos detalhes, processo refinado e
                resultado extraordinário.
              </p>
            </div>

            <div className="mt-8 flex gap-4">
              <a
                href="https://github.com/jgalmeida93"
                className="px-6 py-3 bg-accent-primary text-white rounded-lg hover:bg-accent-secondary transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/jgalmeida93"
                className="px-6 py-3 border border-accent-primary text-accent-primary rounded-lg hover:bg-accent-primary hover:text-white transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
