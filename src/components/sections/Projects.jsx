import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20 px-4 sm:px-6"
    >
      <RevealOnScroll>
        <div className="max-w-5xl w-full mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                title: <a
                href="https://social-media-website-blue-chi.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className=" hover:text-blue-300"
              >
                Fullstack Social Media App with Authentication
              </a>,
                desc: "a fully featured community forum and Q&A site using modern web technologies. We’ll cover everything from real-time interactions and GitHub authentication to stunning glassy UI elements with glowing gradient effects. This project is perfect for developers who want to dive into building dynamic, interactive, and beautifully designed web applications.",
                tech: ["React", "Vite", "Typescript", "Supabase", "Tailwindcss"],
                view_project:  <div className="text-center sm:text-left">
                <a
                  href="https://social-media-website-blue-chi.vercel.app/"
                  className="text-blue-400 hover:text-blue-300 transition-colors text-sm sm:text-base"
                >
                  View Project →
                </a>
              </div>
              },
              {
                title: <a
                href="https://anuanuha.github.io/Shopping_Cart/"
                target="_blank"
                rel="noopener noreferrer"
                className=" hover:text-blue-300"
              >
                🛒 Shopping Cart App
              </a>,
                desc: "A simple and responsive shopping cart application where users can browse products, add or remove items from the cart, adjust quantities, and view a live subtotal. Includes separate views for the shop and cart with smooth navigation and real-time updates. This project showcases front-end state management, user interaction handling, and clean UI design—perfect for e-commerce applications.",
                tech: ["React","Typescript", "TailwindCSS"],
                view_project: <div className="text-center sm:text-left">
                <a
                  href="https://anuanuha.github.io/Shopping_Cart/"
                  className="text-blue-400 hover:text-blue-300 transition-colors text-sm sm:text-base"
                >
                  View Project →
                </a>
              </div>
              },
              {
                title: "E-Commerce Web App",
                desc: "Full-stack e-commerce with modern UI, secure payment integration, and customizable product inventory.",
                tech: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
                view_project: "",
              },
            ].map((project, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur rounded-xl p-5 sm:p-6 flex flex-col justify-between border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all"
              >
                <div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2 text-center sm:text-left">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 text-sm sm:text-base text-center sm:text-left">
                    {project.desc}
                  </p>
                  <div className="flex flex-wrap justify-center sm:justify-start gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 transition"
                      >
                        {tech}
                      </span>
                      
                    ))}
                  </div>
                  {project.view_project}
                </div>
                
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
