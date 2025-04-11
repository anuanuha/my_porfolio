import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = ["ReactJS", "NextJS", "Javascript", "TailwindCSS"];
  const backendSkills = [ "MongoDB", "GraphQL"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-5 px-4"
    >
      <RevealOnScroll>
        <div className="w-full max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>

          <div className="p-4 md:p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all bg-[#1a1a1a] shadow-md">
            <p className="text-gray-300 lg:mb-6 mb:0 text-sm md:text-base text-center md:text-left">
            passionate frontend developer with 1.5 years of experience
             in building dynamic, responsive, 
            and user-friendly web applications using Reactjs.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-4 md:p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-lg md:text-xl font-bold mb-4 text-center md:text-left">Frontend</h3>
                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-4 md:p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-lg md:text-xl font-bold mb-4 text-center md:text-left">Backend</h3>
                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="p-4 md:p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all bg-[#1a1a1a] shadow-md">
              <h3 className="text-lg md:text-xl font-bold mb-4 text-center md:text-left">🏫 Education</h3>
              <div className="space-y-6 text-gray-300 text-sm md:text-base">
              <ul className="text-gray-300 space-y-4 text-sm md:text-base">
  <li className="flex flex-col">
    <div className="pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-gray-300">
      <strong>Electronic and Communication Engineering – 8 CGPA</strong>
    </div>
    <div className="pl-4"> <a
                href="https://www.acharya.ac.in/"
                target="_blank"
                rel="noopener noreferrer"
                className=" hover:text-blue-300"
              >Acharya Institute Of Technology, Bangalore 🔗</a></div>
    <div className="pl-4">(2019–2023)</div>
  </li>
  <li className="flex flex-col">
    <div className="pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-gray-300">
      <strong> <a
                href="https://jssonline.org/our-institutions/general-education/pre-university-colleges/jss-independent-pu-college-sakaleshpur/"
                target="_blank"
                rel="noopener noreferrer"
                className=" hover:text-blue-300"
              >J S S Women Independent PU College,Sakaleshapura – PCMB: 86% 🔗</a></strong>
    </div>
    <div className="pl-4">(2017–2019)</div>
  </li>
</ul>
{/* Publication */}
<div className="p-4 md:p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all bg-[#1a1a1a] shadow-md">
<a
                href="https://drive.google.com/file/d/1XwaF4Gr6g1EcSTEp1NG5McqKvX4ANHL7/view"
                target="_blank"
                rel="noopener noreferrer"
                className=" hover:text-blue-300"
              >
                <h3 className="text-lg md:text-xl font-bold mb-4 text-center md:text-left text-white">📝 Publication</h3>
              </a>    
  
  <div className="text-gray-300 text-sm md:text-base flex flex-col gap-2">
    <div className="flex items-start">
      <span className="mr-2 text-blue-400">•</span>
      <div>
        <strong>IEEE Paper:</strong> 
        <a
                href="https://drive.google.com/file/d/1XwaF4Gr6g1EcSTEp1NG5McqKvX4ANHL7/view"
                target="_blank"
                rel="noopener noreferrer"
                className=" hover:text-blue-300"
              >
               Deep Learning Approach To Enhance Accuracy For Early Detection Of Glaucoma
        <p className="mt-1">
          Presented at 3rd International Conference on Intelligent Technology (CONIT 2023) 🔗
        </p>
              </a>
      </div>
    </div>
  </div>
</div>

{/* Certifications */}
<div className="p-4 md:p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all bg-[#1a1a1a] shadow-md">
  <h3 className="text-lg md:text-xl font-bold mb-4 text-center md:text-left text-white">
    🎓 Certifications
  </h3>
  <div className="text-gray-300 text-sm md:text-base flex flex-col gap-2">
    <div className="flex items-start">
      <span className="mr-2 text-blue-400">•</span>
      <span>    <a
                href="https://drive.google.com/file/d/1PvkyDsrA10JLhcxxrhOCfJQwmnyLQGvl/view"
                target="_blank"
                rel="noopener noreferrer"
                className=" hover:text-blue-300 "
              >Crownpeak Developer Training and Certification 🔗</a></span>
    </div>
    <div className="flex items-start">
      <span className="mr-2 text-blue-400">•</span>
      <span> <a
                href="https://courses.cognitiveclass.ai/certificates/0858d1b2bd344c029183d83c436f57b3"
                target="_blank"
                rel="noopener noreferrer"
                className=" hover:text-blue-300 "
              >Java Full Stack Development - JSpiders 🔗</a></span>
    </div>
    <div className="flex items-start">
      <span className="mr-2 text-blue-400">•</span>
      <span><a
                href="https://courses.cognitiveclass.ai/certificates/0858d1b2bd344c029183d83c436f57b3"
                target="_blank"
                rel="noopener noreferrer"
                className=" hover:text-blue-300"
              >SQL and Relational Database - IBM Developer Skills Network 🔗</a></span>
    </div>
  </div>
</div>
{/* Social Media Section */}
<div className="p-4 md:p-6 mt-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all bg-[#1a1a1a] shadow-md">
  <h3 className="text-lg md:text-xl font-bold mb-4 text-center md:text-left text-white">
    🌐 Social Media
  </h3>
  <div className="text-gray-300 text-sm md:text-base flex flex-col gap-3">
    <div className="flex items-center gap-2">
      <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
        <path
          d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.38 7.86 10.89.58.11.79-.25.79-.56v-2.08c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.27-1.68-1.27-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.25 3.33.96.1-.74.4-1.25.73-1.54-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.18 1.18a11.1 11.1 0 015.8 0c2.2-1.49 3.18-1.18 3.18-1.18.62 1.58.23 2.75.12 3.04.74.81 1.18 1.84 1.18 3.1 0 4.43-2.71 5.41-5.29 5.69.41.35.78 1.03.78 2.07v3.06c0 .31.2.67.79.56A10.5 10.5 0 0023.5 12C23.5 5.73 18.27.5 12 .5z"
        />
      </svg>
      <a
        href="https://github.com/anuanuha"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-blue-300 text-blue-300"
      >
        GitHub
      </a>
    </div>
    <div className="flex items-center gap-2">
      <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
        <path
          d="M20.447 20.452h-3.554v-5.568c0-1.328-.025-3.037-1.849-3.037-1.851 0-2.134 1.445-2.134 2.939v5.666h-3.554v-11.5h3.414v1.572h.049c.476-.9 1.637-1.848 3.368-1.848 3.6 0 4.267 2.368 4.267 5.451v6.325zM5.337 7.433c-1.144 0-2.068-.925-2.068-2.067s.924-2.067 2.068-2.067c1.142 0 2.067.925 2.067 2.067s-.925 2.067-2.067 2.067zm1.777 13.019H3.56v-11.5h3.554v11.5zM22.225 0H1.771C.792 0 0 .771 0 1.729v20.542C0 23.229.792 24 1.771 24h20.451c.978 0 1.771-.771 1.771-1.729V1.729C24 .771 23.207 0 22.225 0z"
        />
      </svg>
      <a
        href="https://www.linkedin.com/in/anu-h-a-355206242/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-blue-300 text-blue-300"
      >
        LinkedIn
      </a>
    </div>
  </div>
</div>
</div>
 </div>
 <div className="p-4 md:p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all bg-[#1a1a1a] shadow-md">
  <h3 className="text-lg md:text-xl font-bold mb-4 text-center md:text-left text-white">
    💼 Work Experience
  </h3>

  <div className="space-y-4 text-gray-300 text-sm md:text-base">

    {/* Job Details */}
    <div className="space-y-2">
      <h4 className="font-semibold text-white">
        UI Developer at Coforge IT Company – Bangalore <span className="text-gray-400">(05/02/24 to Present)</span>
      </h4>

      <p>
        <span className="font-medium">Project:</span>{" "}
        <a
          href="https://franchise-portal.nblydev.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-300"
        >
          NEIGHBOURLYCENTRAL.COM 🔗
        </a>
      </p>

      <p>
        A communication and navigation portal integrating Neighborly brands. Allows franchise performance monitoring, actionable recommendations, and AWS QuickSight reports access for FB owners.
      </p>
    </div>

    {/* Key Responsibilities */}
    <div>
      <h5 className="font-semibold text-white mt-4 mb-2">🛠️ Key Responsibilities</h5>

      <div className="flex flex-col gap-2">
        <p className="flex items-start">
          <span className="mr-2 text-blue-400">•</span>
          <span>Implemented responsive UI using <strong>Tailwind CSS</strong></span>
        </p>
        <p className="flex items-start">
          <span className="mr-2 text-blue-400">•</span>
          <span>Managed state with <strong>React Context API</strong> and API calls via <strong>Axios</strong></span>
        </p>
        <p className="flex items-start">
          <span className="mr-2 text-blue-400">•</span>
          <span>Handled authentication with <strong>Azure AD B2C</strong></span>
        </p>
        <p className="flex items-start">
          <span className="mr-2 text-blue-400">•</span>
          <span>Achieved test coverage with <strong>Jest</strong> and <strong>React Testing Library</strong></span>
        </p>
        <p className="flex items-start">
          <span className="mr-2 text-blue-400">•</span>
          <span>Built custom reusable UI components</span>
        </p>
        <p className="flex items-start">
          <span className="mr-2 text-blue-400">•</span>
          <span>Optimized performance using lazy loading and memoization</span>
        </p>
        <p className="flex items-start">
          <span className="mr-2 text-blue-400">•</span>
          <span>Applied <strong>i18next</strong> for multi-language support</span>
        </p>
        <p className="flex items-start">
          <span className="mr-2 text-blue-400">•</span>
          <span>Followed <strong>Agile/Scrum</strong> practices for team collaboration</span>
        </p>
      </div>
    </div>
  </div>
</div>
    </div>
          </div>
      </RevealOnScroll>
    </section>
  );
};
