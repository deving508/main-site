import { ArrowUp } from "lucide-react"

export const Footer = () => {
    return(
        <footer className="py-12 px-4 bg-card/50 relative border-t border-border mt-12 pt-8 flex flex-wrap justify-between items-center">
            <p className="text-sm"> &copy; {new Date().getFullYear()} JohnDoe.co. All rights reserved.</p>

            <a href="#hero" className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 cursor-pointer hover:text-primary transition-colors">
                <ArrowUp size={20}/>
            </a>
        </footer>
    )
}