import { Code, User, Briefcase } from "lucide-react"

export const AboutSection = () => {
    return(
<section id="about" className="py-24 px-4 relative">
<div className="container mx-auto max-w-5xl">
    <h2 className="text-[1.8rem] md:text-4xl mb-12 text-center font-bold">
        About <span className="text-primary"> Me</span>
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
            <h3 className="text-[1.5rem] font-semibold">Passionate Web Developer & Tech Creator</h3>

            <p className="text-muted-foreground">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi blanditiis unde doloribus ea id vitae dicta aut perspiciatis nesciunt, alias culpa amet et dolorem quaerat odio at tempora magnam neque!
            </p>

            <p className="text-muted-foreground">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet ullam sequi porro voluptatem nemo minus. Quaerat iure fuga error id non, ut repellat maiores temporibus laboriosam possimus, inventore harum hic.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                <a href="#contact" className="cosmic-button">Get In Touch</a>

                <a href="#contact" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/20 transition-colors duration-300">Download CV</a>
            </div>
        </div>

        <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6">
                <div className="flex items-start gap-4 pop-up">
                    <div className="p-3 rounded-full bg-primary/10">
                        <Code className="h-6 w-6 text-primary"/>
                    </div>
                    <div className="text-left">
                        <h4 className="font-semibold text-lg">   
                            Web Development
                        </h4>
                        <p className="text-muted-foreground">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum necessitatibus autem
                        </p>
                    </div>
                </div>
            </div>
            <div className="gradient-border p-6">
                <div className="flex items-start gap-4 pop-up">
                    <div className="p-3 rounded-full bg-primary/10">
                        <User className="h-6 w-6 text-primary"/>
                    </div>
                    <div className="text-left">
                        <h4 className="font-semibold text-lg">   
                            Web Development
                        </h4>
                        <p className="text-muted-foreground">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum necessitatibus autem
                        </p>
                    </div>
                </div>
            </div>
            <div className="gradient-border p-6">
                <div className="flex items-start gap-4 pop-up">
                    <div className="p-3 rounded-full bg-primary/10">
                        <Briefcase className="h-6 w-6 text-primary"/>
                    </div>
                    <div className="text-left">
                        <h4 className="font-semibold text-lg">   
                            Web Development
                        </h4>
                        <p className="text-muted-foreground">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum necessitatibus autem
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</section>
)
}