import { Description } from "@radix-ui/react-toast"
import { ArrowRight, ExternalLink, Github } from "lucide-react"

const projects = [
    {
        id: 1,
        title: "Best dating site",
        description: "A fun dating website for my budddies.",
        image: "/projects/Screenshot (93).png",
        tags: ["react", "tailwind", "gsap"],
        demoUrl: "https://findyourmatch-demo.netlify.app/",
        githubUrl: "https://github.com/account"
    },
    {
        id: 2,
        title: "Bipsync AI",
        description: "A website to help investors",
        image: "/projects/Screenshot (92).png",
        tags: ["react", "tailwind"],
        demoUrl: "https://bipsync.netlify.app/",
        githubUrl: "https://github.com/account"
    },
    {
        id: 3,
        title: "Energy drink Spylt",
        description: "A advertisement website for Spylt",
        image: "/projects/Screenshot (94).png",
        tags: ["react", "tailwind", "gsap"],
        demoUrl: "https://awardss.netlify.app/",
        githubUrl: "https://github.com/account"
    }
]

export const ProjectsSection = () => {
    return(
        <section id="project" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-[1.8rem] md:text-4xl font-bold mb-4 text-center">
                    Featured <span className="text-primary">Projects</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    These are some of my recent projects, there really isn't much better.
                </p>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, key) => (  
            <div key={key} className="bg-card rounded-lg overflow-hidden shadow-xs pop-up">
                <div className="w-full h-35 overflow-hidden">
                    <img src={project.image} alt={project.title} className="object-cover transition-transform duration-500" />
                </div>

            <div className="p-5">
                <div className="flex flex-wrap gap-2 mb-2">
                    {project.tags.map((tag) => (
                        <span className="px-2 border text-sm font-medium bg-primary/20 rounded-full capitalize">
                            {tag}
                        </span>
                    ))}
                </div>

            <h3 className="text-md lg:text-lg font-semibold mb-1 rounded-full">
                {project.title}
            </h3>

            <p className="text-sm mb-4">
                {project.description}
            </p>

            <div className="flex justify-between items-center">
                <div className="flex space-x-3">
                    <a href={project.demoUrl} target="_blank" className="hover:text-primary transition-colors duration-300"><ExternalLink size={20}/></a>
                    <a href={project.githubUrl} target="_blank" className="hover:text-primary transition-colors duration-300"><Github size={20}/></a>
                </div>
                </div>
            </div>
        </div>
            
        ))}
    </div>

    <div className="text-center mt-12">
        <a href="https://github.com/deving508/My-Websites" target="_blank" className="cosmic-button w-fit flex items-center mx-auto gap-2">Check My Github <ArrowRight size={16}/></a>
    </div>
</div>
</section>
    )
}