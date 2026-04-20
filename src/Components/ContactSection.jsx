import { Instagram, Linkedin, Mail, MapPin, Phone, Send, Twitch, Twitter } from "lucide-react"
import { cn } from "@/lib/utils"
import { useState } from "react"

export const ContactSection = () => {

    const [click, setClick] = useState(false)

    const handleClick = () => {
        setClick(!click)
    }

    return(
        <section id="contact" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
            <h2 className="text-[1.8rem] md:text-4xl font-bold text-center mb-4">Get In <span className="text-primary">Touch</span>
            </h2>

            <p className="text-center mb-12 max-w-2xl mx-auto">
                Have a project in mind or want to collaborate? feel free to reach out. I'm always open to discussing new opportunities.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-8">
                    <h3 className="text-2xl mb-6 font-semibold">Contact Information</h3>
                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Mail className="h-6 w-6 text-primary"/>
                            </div>
                            <div>
                                <h4 className="font-medium">Email</h4>
                                <a href="mailto:hello@gmail.com" className="hover:text-primary transition-colors">hello@gmail.com</a>
                            </div>
                        </div>
                         <div className="space-y-6">
                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Phone className="h-6 w-6 text-primary"/>
                            </div>
                            <div>
                                <h4 className="font-medium">Phone</h4>
                                <a href="tel:+11234567890" className="hover:text-primary transition-colors">+1 (123) 456-7890</a>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <MapPin className="h-6 w-6 text-primary"/>
                            </div>
                            <div>
                                <h4 className="font-medium">Location</h4>
                                <a className="hover:text-primary transition-colors cursor-pointer">
                                    Slovenia
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="pt-8">
                        <h4 className="font-medium mb-4">
                            Connect With Me
                        </h4>
                        <div className="flex space-x-4 justify-center">
                            <a href="" target="_blank" className="hover:text-primary transition-colors">
                                <Linkedin/>
                            </a>
                            <a href="" target="_blank" className="hover:text-primary transition-colors">
                                <Instagram/>
                            </a>
                            <a href="" target="_blank" className="hover:text-primary transition-colors">
                                <Twitter/>
                            </a>
                            <a href="" target="_blank" className="hover:text-primary transition-colors">
                                <Twitch/>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="bg-card p-8 rounded-lg shadow-xs">
                    <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
                    
                    <form className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-md font-medium mb-4">
                                Your Name
                            </label>
                            <input type="text" id="name" name="name" required placeholder="John Doe"
                             className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-primary"/>
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-md font-medium mb-4">
                                Your Email
                            </label>
                            <input type="email" id="email" name="email" required placeholder="JohnDoe@gmail.com"
                             className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-primary"/>
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-md font-medium mb-4">
                                Your Message
                            </label>
                            <textarea id="message" name="message" required placeholder="Hello, I'd like to talk about..."
                             className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-primary resize-none"/>
                        </div>

                        <button onClick={handleClick} type="submit" className={cn("cosmic-button cursor-pointer w-full flex items-center justify-center gap-2",

                        )}>
                            {click ? "Message Sent" : "Send Message"}
                            {<Send size={16}/>}
                        </button>
                    </form>
                </div>
            </div>
            </div>
        </section>
    )
}