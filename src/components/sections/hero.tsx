import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import data from "@/data";

export default function Hero() {
  const { profileData, contactWA, socialMediaLinks } = data.hero;

  return (
    <section className="flex w-full flex-col items-center justify-center py-12">
      <div className="grid items-center gap-8 lg:grid-cols-2">
        <div className="order-last flex flex-col items-center text-center lg:order-first lg:items-start lg:text-left">
          <Badge variant="outline" className="text-md border-0 capitalize">
            {profileData.badge}
            <ArrowUpRight className="ml-2 size-4" />
          </Badge>
          <h1 className="mt-6 text-4xl font-bold text-pretty capitalize lg:text-6xl">
            {profileData.heading}
          </h1>
          <h1 className="mb-6 text-4xl font-bold text-amber-600 capitalize lg:text-6xl">
            {profileData.fullName}
          </h1>
          <p className="text-muted-foreground mb-8 max-w-xl capitalize lg:text-xl">
            {profileData.description}
          </p>
          <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
            {contactWA.map((contact, index) => (
              <Button
                key={index}
                asChild
                variant="outline"
                className="w-full sm:w-auto"
              >
                <a href={contact.url} target="_blank" rel="noopener noreferrer">
                  {contact.text}
                </a>
              </Button>
            ))}
            {socialMediaLinks.map(({ icon: Icon, url }, index) => (
              <Button
                key={index}
                asChild
                variant="outline"
                className="bg hidden w-full sm:w-auto lg:block"
              >
                <a href={url} target="_blank" rel="noopener noreferrer">
                  <Icon className="size-4" />
                </a>
              </Button>
            ))}
          </div>
        </div>
        <div className="relative mx-auto max-h-96 max-w-96 overflow-hidden rounded-full border-4 border-amber-700/40 bg-amber-600 shadow-2xl shadow-amber-700">
          <Image
            src={profileData.image.src}
            alt={profileData.image.alt}
            width={600}
            height={400}
            className="max-h-96 w-full object-contain"
          />

          <svg className="pointer-events-none absolute top-0 left-0 h-full w-full opacity-30">
            <defs>
              <linearGradient id="shimmer" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0">
                  <animate
                    attributeName="offset"
                    values="-1; 2"
                    dur="3s"
                    repeatCount="indefinite"
                  />
                </stop>
                <stop offset="25%" stopColor="#ffffff" stopOpacity="0.5">
                  <animate
                    attributeName="offset"
                    values="-0.75; 2.25"
                    dur="3s"
                    repeatCount="indefinite"
                  />
                </stop>
                <stop offset="50%" stopColor="#ffffff" stopOpacity="0">
                  <animate
                    attributeName="offset"
                    values="-0.5; 2.5"
                    dur="3s"
                    repeatCount="indefinite"
                  />
                </stop>
              </linearGradient>
            </defs>
            <rect width="600" height="400" fill="url(#shimmer)" />
          </svg>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center py-14">
        <h3 className="text-primary/50 mb-10 text-3xl font-bold capitalize">
          powered by
        </h3>
        <div className="flex flex-col items-center justify-center gap-20 lg:flex-row">
          <Image
            className="dark:invert"
            src="/tailwind.svg"
            alt="tailwind logo"
            width={70}
            height={10}
            priority
          />
          <Image
            className="dark:invert"
            src="/next.svg"
            alt="Next.js logo"
            width={180}
            height={38}
            priority
          />
          <Image
            className="dark:invert"
            src="/shadcn.svg"
            alt="tailwind logo"
            width={60}
            height={5}
            priority
          />
        </div>
      </div>
    </section>
  );
}
