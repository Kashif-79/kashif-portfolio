const Home = () => {
  return (
    <div className="mb-4">
      <h2 className="text-2xl font-bold mb-3 text-gray-700">About Me</h2>
      <p className="md:text-lg text-base text-gray-700 leading-relaxed">
        Hello! I’m <span className="font-semibold">Kashifur Rahman Reza</span>,
        an undergraduate student of{" "}
        <span className="font-medium">
          Statistics at Shahjalal University of Science and Technology
        </span>
        , with a growing passion for{" "}
        <span className="font-medium">full-stack web development</span>.
        <br />
        <br />I specialize in building modern, responsive, and efficient web
        applications using{" "}
        <span className="font-medium">
          TypeScript, JavaScript, React.js, Redux, Node.js, Express.js,
        </span>{" "}
        and <span className="font-medium">MongoDB</span>. My development journey
        started out of curiosity about how websites are built and has evolved
        into a mission to create meaningful digital experiences.
        <br />
        <br />
        Recently, I developed a{" "}
        <span className="font-medium">
          complete full-stack consultancy website
        </span>
        , featuring both{" "}
        <span className="font-semibold">
          public and protected (admin) layouts
        </span>
        . The platform was designed to help students explore study opportunities
        while enabling admins to securely manage data. It includes robust{" "}
        <span className="font-medium">authentication</span>,{" "}
        <span className="font-medium">authorization</span>, and{" "}
        <span className="font-medium">error handling</span> throughout the
        backend. In the admin dashboard, authorized users can perform full CRUD
        operations on{" "}
        <span className="font-medium">
          universities, countries, and services
        </span>
        , while the public side dynamically displays this information to
        visitors. This project strengthened my expertise in{" "}
        <span className="font-medium">backend architecture</span>,{" "}
        <span className="font-medium">frontend state management</span>, and{" "}
        <span className="font-medium">API integration</span>. You can check my{" "}
        <a
          href="https://www.linkedin.com/in/kashifur-rahman-reza/"
          className="text-blue-600 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn profile
        </a>{" "}
        for more about my journey and projects.
        <br />
        <br />
        <p className="md:text-lg text-base text-gray-700 leading-relaxed mt-3">
          Beyond coding, I enjoy{" "}
          <span className="italic">experimenting in the kitchen</span>,{" "}
          <span className="italic">playing cricket and football</span>,{" "}
          <span className="italic">watching football matches</span>, and{" "}
          <span className="italic">following Formula 1 races</span>. I’m always
          learning from every project I take on — whether it succeeds or fails.
        </p>
        <br />
        I’m currently seeking an{" "}
        <span className="font-medium">
          entry-level web developer position
        </span>{" "}
        where I can apply my skills, contribute to impactful projects, and grow
        within a dynamic team. Feel free to reach out to me at{" "}
        <span className="font-medium text-gray-800">+8801877273449</span> or
        check out my{" "}
        <a
          href="https://docs.google.com/document/d/1_PNT6ZgRlj07oFk555sx4nz03VTisYeJNTO60bC7U3k/edit?usp=sharing"
          className="text-blue-600 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>
        .
      </p>
    </div>
  );
};

export default Home;
