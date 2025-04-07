import rizalAbout from "@/assets/images/about/rizal-img.png";
import { StaticImageData } from "next/image";

export interface AboutSectionData {
  title: string;
  subtitle: string;
  image: {
    src: StaticImageData | string;
    alt: string;
    name: string;
    caption: string;
  };
  paragraphs: string[];
}

export const aboutData: AboutSectionData = {
  title: "About Me",
  subtitle: "The slightly handsome man behind this website.",
  image: {
    src: rizalAbout,
    alt: "Rizal S",
    name: "Rizal Suryawan",
    caption: "Orang ganteng & intelek",
  },
  paragraphs: [
    "I started coding out of curiosity (and possibly too much coffee). What began as tweaking static HTML pages has evolved into building web and mobile apps that are not only functional, but also fun to use.",
    "I focus on frontend development using React, Svelte, and Next.js. But I’m no stranger to the backend—Express.js and Golang are part of my toolkit. I also enjoy building cross-platform apps with Flutter because writing once and deploying everywhere feels like cheating, in a good way.",
    "I’m a long-time Linux user—currently rolling with Debian. I love customizing my development environment almost as much as writing actual code. Terminal configs, dotfiles, the whole shebang.",
    "Recently, I’ve been diving into AI—experimenting with prompt engineering, building small assistants, and finding clever ways to integrate AI into projects. It’s like having a very smart intern who never sleeps (but occasionally hallucinates).",
    "Outside of work, I enjoy customizing my ThinkPad and creating YouTube videos about tools, workflows, or whatever tech rabbit hole I’m currently exploring. I'm also a sucker for productivity content I’ll never fully implement and always down to hunt for the best iced coffee spot—as long as the Wi-Fi holds up.",
  ],
};
