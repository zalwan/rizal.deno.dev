import Image from "next/image";
import data from "@/data";

export default function AboutSection() {
  const { aboutData } = data.about;
  return (
    <section className="wrapper px-4 py-8 md:py-12">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-3xl font-bold md:text-4xl">
            {aboutData.title}
          </h1>
          <p className="text-muted-foreground mx-auto max-w-2xl">
            {aboutData.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="flex items-center justify-center">
            <div className="relative h-fit w-fit">
              <Image
                src={aboutData.image.src}
                alt={aboutData.image.alt}
                width={500}
                height={500}
                className="rounded-md object-cover shadow-lg"
                placeholder="blur"
                loading="lazy"
              />
              <div className="absolute bottom-0 left-0 flex w-full rounded-b-md bg-black/50 backdrop-blur-sm">
                <div className="w-full px-6 py-3 text-center text-white">
                  <h2 className="text-xl font-semibold">
                    {aboutData.image.name}
                  </h2>
                  <p className="text-sm italic">{aboutData.image.caption}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4 text-justify">
            {aboutData.paragraphs.map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
