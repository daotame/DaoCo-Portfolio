import { RevealOnScroll } from "../RevealOnScroll"

export const Home = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative">
            <RevealOnScroll>
            <div className="text-center z-10 px-4">
                <h1 className="text-5xl md:text-7x1 font-bold mb-6 bg-gradient-to-r from-purple-500 to-red-400  bg-clip-text text-transparent leading-right">
                    Hi, I'm Brendan Dao
                </h1>

                <p className="text-gray-400 text-lg mb-8 max-w-lg max-auto">
                    I'm a software developer... Well not your regular software developer.
                </p>
                <div className="flex justify-center space-x-4">
                    <a 
                        href="#projects" 
                        className="bg-purple-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 138, 246, 0.4)]"
                    >
                        View Projects
                    </a>

                    <a 
                        href="#projects" 
                        className="border border-purple-500/50 text-purple-500 py-3 px-6 rounded font-medium transition-all duration-200 
                            hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 138, 246, 0.2)] hover:bg-purple-500/10"
                    >
                        Contact Me
                    </a>
                </div>
            </div>
            </RevealOnScroll>
        </section>
    )
}