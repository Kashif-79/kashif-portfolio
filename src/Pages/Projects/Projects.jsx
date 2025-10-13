const Projects = () => {
  return (
    <div className="max-w-5xl mx-auto flex flex-col gap-6">
      {/* Project Screenshot on top */}
      <div className="w-full">
        <div className="relative w-full h-[260px] sm:h-[350px] md:h-[420px] rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
          <img
            src="https://i.ibb.co.com/RGhkFjjJ/projects.jpg"
            alt="Consultancy website screenshot"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Project Details below */}
      <div className="p-6 bg-white rounded-xl shadow-md text-gray-700">
        {/* Project Title */}
        <div className="mb-4">
          <h2 className="text-3xl font-bold text-gray-800 tracking-wide text-center">
            LB Consultancy
          </h2>
          <p className="mt-2 text-gray-600 text-center max-w-3xl mx-auto">
            A full-stack multi-layout platform connecting students with
            international universities and study services.
          </p>
        </div>

        {/* Detailed Description */}
        <div className="mb-4">
          <p className="leading-relaxed">
            This consultancy website features{" "}
            <strong>public-facing pages</strong> for students and a{" "}
            <strong>protected admin dashboard</strong>. Admins can securely log
            in to manage universities, countries, and services with full CRUD
            functionality. All data is dynamic, ensuring the website&apos;s
            content is always current. Students can explore services,
            universities, and countries efficiently through a modern and
            responsive interface.
          </p>
        </div>

        {/* Technologies */}
        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-2">Technologies:</h3>
          <div className="flex flex-wrap gap-2">
            {[
              "React.js",
              "Redux",
              "TypeScript",
              "Node.js",
              "Express.js",
              "MongoDB",
              "Tailwind CSS",
            ].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Key Features */}
        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-2">Key Features:</h3>
          <ol className="list-disc ml-6 space-y-1">
            <li>Multi-layout architecture: Public & Admin dashboards</li>
            <li>
              Dynamic content management for universities, countries, and
              services
            </li>
            <li>
              Secure authentication and role-based authorization for admins
            </li>
            <li>Full CRUD functionality for backend management</li>
            <li>Responsive and user-friendly interface for students</li>
            <li>Comprehensive error handling and stable backend integration</li>
          </ol>
        </div>

        {/* Visit Site Button */}
        <div className="mt-5 text-center">
          <a
            href="https://lb-consultancy-frontend.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex items-center justify-center px-4 py-2.5 text-sm font-semibold text-blue-700
               border-2 border-blue-500 rounded-md overflow-hidden group transition-all duration-300"
          >
            <span
              className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-700 opacity-0 
                 group-hover:opacity-100 transition-opacity duration-300"
            ></span>
            <span className="relative z-10 group-hover:text-white transition-colors duration-300">
              Visit Site
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
