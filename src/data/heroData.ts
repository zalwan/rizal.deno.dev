import { Github, Linkedin, Youtube } from "lucide-react";

export interface ProfileData {
  badge: string;
  heading: string;
  fullName: string;
  description: string;
  image: {
    src: string,
    alt: string,
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
    src: "https://images.unsplash.com/photo-1742800073948-fccfaccf46e1?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Profile section demo image showing interface components",
  },
};

export const contactWA: ContactWA[] = [
  {
    text: "Chat on WhatsApp",
    url: "https://wa.me/6285813095235?text=Hi%20Rizal,%20I%20found%20your%20portfolio%20and%20would%20like%20to%20connect!",
  },
];

export const socialMediaLinks: SocialMediaLink[] = [
  { icon: Github, url: "https://github.com/rizalsuryawan" },
  { icon: Linkedin, url: "https://linkedin.com/in/rizalsuryawan" },
  { icon: Youtube, url: "https://youtube.com/@rizalsuryawan" },
];
