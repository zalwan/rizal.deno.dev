import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import data from "@/data";
import Logos from "./logos";
import imgHero from "@/assets/images/hero/hero-img.png";

export default function Hero() {
  const { profileData, contactWA, socialMediaLinks } = data.hero;

  return (
    <section className="flex w-full flex-col items-center justify-center py-12">
      <div className="grid items-center gap-8 lg:grid-cols-2">
        <div className="order-last flex flex-col items-center text-center lg:order-first lg:items-start lg:text-left">
          <div className="hidden lg:block">
            <Badge variant="outline" className="text-md border-0 capitalize">
              {profileData.badge}
              <ArrowUpRight className="ml-2 size-4" />
            </Badge>
          </div>
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

        <div className="flex justify-center lg:hidden">
          <Badge variant="outline" className="text-md border-0 capitalize">
            {profileData.badge}
            <ArrowUpRight className="ml-2 size-4" />
          </Badge>
        </div>
        <div className="relative mx-auto max-h-72 overflow-hidden rounded-full border-4 border-amber-700/40 bg-amber-600 shadow-2xl shadow-amber-700 lg:max-h-96">
          <Image
            className="max-h-72 w-full object-contain lg:max-h-96"
            src={imgHero}
            alt={profileData.image.alt}
            width={600}
            height={400}
            placeholder="blur"
            priority
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
      <Logos />
    </section>
  );
}
