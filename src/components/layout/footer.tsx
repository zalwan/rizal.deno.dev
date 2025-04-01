import { Button } from "../ui/button";
import data from "@/data";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { socialMediaLinks } = data.hero;

  return (
    <footer className="bg-background smooth-transition flex w-full flex-col items-center justify-center border-t">
      <div className="text-muted-foreground py-6 text-center text-sm">
        <div className="flex justify-center gap-2 pb-3 lg:hidden">
          {socialMediaLinks.map(({ icon: Icon, url }, index) => (
            <Button key={index} asChild variant="outline" className="w-auto">
              <a href={url} target="_blank" rel="noopener noreferrer">
                <Icon className="size-4" />
              </a>
            </Button>
          ))}
        </div>
        <p>Copyright © 2022 - {currentYear} All right reserved</p>
        <strong className="leading-relaxed">&lt; Rizal Suryawan /&gt;</strong>
      </div>
    </footer>
  );
}
