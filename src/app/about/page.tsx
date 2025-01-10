import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/me.jpg"
                alt="Jonas"
                width={500}
                height={400}
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          <div className="order-1 md:order-2">
            <h1 className="text-5xl font-bold text-accent-primary mb-6">
              Olá, Me chamo <span className="text-accent-secondary">Jonas</span>
            </h1>
            <h2 className="text-2xl font-medium text-text-secondary-light dark:text-text-secondary-dark mb-6">
              Front end Developer
            </h2>
            <div className="space-y-4 text-lg">
              <p className="text-text-secondary-light dark:text-text-secondary-dark mb-4">
                Eu crio experiências web modernas usando tecnologias de ponta.
                Especializado no ecossistema React, Next.js e TypeScript.
              </p>
              <p className="text-text-secondary-light dark:text-text-secondary-dark mb-4">
                Fora do código, sou apaixonado por explorar novas tecnologias e
                tendências, sempre em busca de aprender e inovar.
              </p>
            </div>

            <div className="mt-8 flex gap-4">
              <a
                href="https://github.com/yourusername"
                className="px-6 py-3 bg-accent-primary text-white rounded-lg hover:bg-accent-secondary transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
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
