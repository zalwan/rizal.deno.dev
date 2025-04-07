import Image from "next/image";

export default async function Page() {
  return (
    <div className="wrapper px-4 py-8 md:py-12">
      <section className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-3xl font-bold md:text-4xl">About Me</h1>
          <p className="text-muted-foreground mx-auto max-w-2xl">
            The slightly handsome man behind this website.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="flex items-center justify-center">
            <div className="relative h-fit w-fit">
              <Image
                src="/img/rizal-img.png"
                alt="Rizal S"
                width={500}
                height={500}
                className="rounded-md object-cover shadow-lg"
                loading="lazy"
              />
              <div className="absolute bottom-0 left-0 flex w-full rounded-b-md bg-black/50 backdrop-blur-sm">
                <div className="w-full px-6 py-3 text-center text-white">
                  <h2 className="text-xl font-semibold">Rizal Suryawan</h2>
                  <p className="text-sm italic">Orang ganteng & intelek</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4 text-justify">
            <p>
              {
                "I started coding out of curiosity (and possibly too much coffee). What began as tweaking static HTML pages has evolved into building web and mobile apps that are not only functional, but also fun to use."
              }
            </p>
            <p>
              {
                "I focus on frontend development using React, Svelte, and Next.js. But I’m no stranger to the backend—Express.js and Golang are part of my toolkit. I also enjoy building cross-platform apps with Flutter because writing once and deploying everywhere feels like cheating, in a good way."
              }
            </p>
            <p>
              {
                "I’m a long-time Linux user—currently rolling with Debian. I love customizing my development environment almost as much as writing actual code. Terminal configs, dotfiles, the whole shebang."
              }
            </p>
            <p>
              {
                "Recently, I’ve been diving into AI—experimenting with prompt engineering, building small assistants, and finding clever ways to integrate AI into projects. It’s like having a very smart intern who never sleeps (but occasionally hallucinates)."
              }
            </p>
            <p>
              {
                "Outside of work, I enjoy customizing my ThinkPad and creating YouTube videos about tools, workflows, or whatever tech rabbit hole I’m currently exploring. I'm also a sucker for productivity content I’ll never fully implement and always down to hunt for the best iced coffee spot—as long as the Wi-Fi holds up."
              }
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
