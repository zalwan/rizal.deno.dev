import Image from "next/image";
import data from "@/data";

export default function Logos() {
  const { logoData } = data.logo;

  return (
    <div className="flex flex-col items-center justify-center pt-24 pb-14">
      <h3 className="text-primary/60 mb-20 animate-pulse text-xl font-bold uppercase lg:mb-6">
        powered by
      </h3>
      <div className="flex flex-col items-center gap-10 lg:flex-row">
        {logoData.map((logo, index) => (
          <div key={index}>
            <Image
              className="dark:invert"
              src={logo.src}
              alt={logo.alt}
              width={logo.width}
              height={logo.height}
              loading="eager"
              priority
            />
          </div>
        ))}
      </div>
    </div>
  );
}
