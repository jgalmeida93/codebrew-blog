import { useTranslations } from "next-intl";
import Image from "next/image";

export default function AboutPage() {
  const t = useTranslations("about");
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
              {t("title")}{" "}
              <span className="text-accent-secondary">
                {t("titleHighlight")}
              </span>
            </h1>
            <h2 className="text-2xl font-medium text-text-secondary-light dark:text-text-secondary-dark mb-6">
              {t("subtitle")}
            </h2>
            <div className="space-y-4 text-lg">
              <p className="text-text-secondary-light dark:text-text-secondary-dark mb-4">
                {t("description1")}
              </p>
              <p className="text-text-secondary-light dark:text-text-secondary-dark mb-4">
                {t("description2")}
              </p>
              <p className="text-text-secondary-light dark:text-text-secondary-dark mb-4">
                {t("description3")}
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
