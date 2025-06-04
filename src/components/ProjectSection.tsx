import ProjectCard from "./ProjectCard";
import cardImg from "../assets/registerPage.png";

export default function ProjectSection() {
  return (
    <section className="mt-10 box-border px-7 max-w-screen-xl mr-2 py-6 w-full">
      <div className="flex items-center justify-between gap-4">
        <div className="flex w-full gap-x-4 items-center">
          <div className="text-[#C778DD] text-xl font-semibold select-none">
            #<span className="text-white ml-1">projects</span>
          </div>
          <div className="w-[40%] h-[0.5px] bg-[#C778DD] opacity-50"></div>
        </div>

        {/* View all link */}
        <a
          href="#"
          className="w-28 text-[#C778DD] text-sm font-medium hover:underline whitespace-nowrap text-right"
          aria-label="View all projects"
        >
          view all &rarr;
        </a>
      </div>

      {/* Projects grid */}
      <div className="w-full grid grid-cols-[repeat(auto-fill,minmax(15rem,1fr))] gap-6 mt-10">
        <ProjectCard
          image={cardImg}
          title="ChertNodes"
          techStack="HTML SCSS Python Flask"
          description="Minecraft servers hosting"
          liveLink="https://chertnodes.live"
          codeLink="https://github.com/user/chertnodes"
        />
        <ProjectCard
          image={cardImg}
          title="ChertNodes"
          techStack="HTML SCSS Python Flask"
          description="Minecraft servers hosting"
          liveLink="https://chertnodes.live"
          codeLink="https://github.com/user/chertnodes"
        />
        <ProjectCard
          image={cardImg}
          title="ChertNodes"
          techStack="HTML SCSS Python Flask"
          description="Minecraft servers hosting"
          liveLink="https://chertnodes.live"
          codeLink="https://github.com/user/chertnodes"
        />
        <ProjectCard
          image={cardImg}
          title="ChertNodes"
          techStack="HTML SCSS Python Flask"
          description="Minecraft servers hosting"
          liveLink="https://chertnodes.live"
          codeLink="https://github.com/user/chertnodes"
        />
      </div>
    </section>
  );
}
