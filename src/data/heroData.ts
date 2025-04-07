import { Github, Linkedin, Youtube } from "lucide-react";
import rizalHero from "@/assets/images/hero/hero-img.png";
import { StaticImageData } from "next/image";

export interface ProfileData {
  badge: string;
  heading: string;
  fullName: string;
  description: string;
  image: {
    src: StaticImageData | string;
    alt: string;
  };
}

export interface ContactWA {
  text: string;
  url: string;
}

export interface SocialMediaLink {
  icon: React.ElementType;
  url: string;
}

export const profileData: ProfileData = {
  badge: "✨ Software Developer",
  heading: "Hello! I'm",
  fullName: "Rizal Suryawan",
  description:
    "Passionate about mobile development, cloud computing, AI, and open-source. Also into Linux, custom PCs, and exploring the latest tech innovations.",
  image: {
    src: rizalHero,
    alt: "Hero image",
  },
};

export const contactWA: ContactWA[] = [
  {
    text: "Chat on WhatsApp 📩",
    url: "https://wa.me/6285813095235?text=Hi%20Rizal,%20I%20found%20your%20web%20and%20would%20like%20to%20connect!",
  },
];

export const socialMediaLinks: SocialMediaLink[] = [
  { icon: Github, url: "https://github.com/zalwan" },
  { icon: Linkedin, url: "https://linkedin.com/in/rizal-suryawan" },
  { icon: Youtube, url: "https://youtube.com/@rizalsuryawan86" },
];
