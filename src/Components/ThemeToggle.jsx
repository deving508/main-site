import { Moon, Sun } from "lucide-react"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

export const ThemeToggle = () => {

    const [isDarkmode, setIsdarkmode] = useState(false)

    useEffect(() => {
        const StoredTheme = localStorage.getItem("theme")
        if (StoredTheme === "dark") {
            setIsdarkmode(true)
            document.documentElement.classList.add("dark");
        } else {
            setIsdarkmode(false);
            document.documentElement.classList.remove("dark");
        }
    }, [])

    const toggleTheme = () => {
        if (isDarkmode) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light")
            setIsdarkmode(false);
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark")
            setIsdarkmode(true);
            document.documentElement.classList.add("dark-theme-animation")

            setTimeout(() => {
            document.documentElement.classList.remove("dark-theme-animation")
            }, 300)
        }
    }

    return(
        <button onClick={toggleTheme}
         className="theme-button theme-btn fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300 focus:outline-hidden cursor-pointer">
        {isDarkmode ? <Sun className="h-6 w-6 text-yellow-300 animate-fade-in"/> : <Moon className="w-6 h-6 text-blue-900 animate-fade-in"/>}</button>
    )
}