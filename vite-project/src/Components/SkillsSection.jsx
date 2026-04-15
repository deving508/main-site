import { useState } from "react";
import { cn } from "@/lib/utils"

const skills = [
    {name: "HTML/CSS", level: 95, category: "frontend"},
    {name: "JavaScript", level: 90, category: "frontend"},
    {name: "React", level: 90, category: "frontend"},
    {name: "TypeScript", level: 80, category: "frontend"},
    {name: "Tailwind CSS", level: 95, category: "frontend"},
    {name: "Next.js", level: 80, category: "frontend"},

    {name: "Node.js", level: 95, category: "backend"},
    {name: "Express", level: 90, category: "backend"},
    {name: "MongoDB", level: 80, category: "backend"},
    {name: "PostgreSQL", level: 60, category: "backend"},
    {name: "GraphQL", level: 65, category: "backend"},

    {name: "Git/Github", level: 90, category: "tools"},
    {name: "Docker", level: 80, category: "tools"},
    {name: "Figma", level: 80, category: "tools"},
    {name: "VS code", level: 95, category: "tools"},

];

const categories = ["All", "frontend", "backend", "tools"]

export const SkillsSection = () => {

    const [activeCategory, setActiveCategory] = useState("frontend")

    const filteredSkills = skills.filter((skill) => activeCategory === "All" || skill.category === activeCategory)

    return(
        <section id="skills" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-[1.8rem] md:text-4xl font-bold mb-12 text-center">
                    My <span className="text-primary">Skills</span>
                </h2>

                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category, key) => {
                        return(
                        <button key={key} onClick={() => setActiveCategory(category)} className={cn("px-5 py-2 rounded-full transition-colors duration-300 capitalize cursor-pointer", activeCategory === category ? "bg-primary text-primary-foreground" : "text-foreground")}>
                            {category}
                        </button>
                        )
                    })}
                </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredSkills.map((skill, key) => {
                    return(
                    <div key={key} className="bg-card p-5 rounded-lg shadow-xs pop-up">
                        <div className="text-left mb-4">
                            <h3 className="font-semibold text-sm md:text-lg ">{skill.name}</h3>
                        </div>
                        <div className="w-full h-2 rounded-full overflow-hidden"> 
                            <div className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out" style={{width: skill.level + '%'}}>
                                
                            </div>
                        </div>

                        <div className="text-right mt-1">
                            <span className="text-sm text-muted-foreground">{skill.level}%</span>
                        </div>
                    </div>
                    )
                })}
            </div>
            </div>
        </section>
    )
}