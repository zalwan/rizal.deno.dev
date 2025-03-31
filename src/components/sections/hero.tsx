import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import data from "@/data";

export default function Hero() {
  const { profileData, contactWA, socialMediaLinks } = data.hero;

  return (
    <section className="py-24">
      <div className="container">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <Badge variant="outline" className="capitalize text-md border-0">
              {profileData.badge}
              <ArrowUpRight className="ml-2 size-4" />
            </Badge>
            <h1 className="mt-6 text-4xl font-bold text-pretty lg:text-6xl capitalize">
              {profileData.heading}
            </h1>
            <h1 className="mb-6 text-4xl font-bold text-amber-600 lg:text-6xl capitalize">
              {profileData.fullName}
            </h1>
            <p className="mb-8 max-w-xl text-muted-foreground lg:text-xl capitalize">
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
                  <a
                    href={contact.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {contact.text}
                    <ArrowRight className="size-4" />
                  </a>
                </Button>
              ))}
              {socialMediaLinks.map(({ icon: Icon, url }, index) => (
                <Button
                  key={index}
                  asChild
                  variant="outline"
                  className="w-full sm:w-auto"
                >
                  <a href={url} target="_blank" rel="noopener noreferrer">
                    <Icon className="size-4" />
                  </a>
                </Button>
              ))}
            </div>
          </div>
          <Image
            src={profileData.image.src}
            alt={profileData.image.alt}
            width={600}
            height={400}
            className="max-h-96 w-full rounded-md object-cover"
          />
        </div>
      </div>
    </section>
  );
}
