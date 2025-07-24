import ProjectCard from "@/components/ui/ProjectCard"


const Projects = () => {
  const projects = [
    {
      title: "Library Management System",
      description: "React, RTK Query, TypeScript, Node.js, MongoDB",
      link: "https://github.com/SumsulArifin/library-management",
    },
    {
      title: "ERP Web App",
      description: "Java, Spring Boot, MySQL",
      link: "https://github.com/SumsulArifin/erp-web-app",
    },
    {
      title: "Magazine Website",
      description: "HTML, Tailwind, WordPress",
      link: "https://github.com/SumsulArifin/magazine-website",
    },
  ]

  return (
    <section className="py-16 px-6 bg-gray-50 dark:bg-gray-900" id="projects">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-gray-100">
        Projects
      </h2>
      <div className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map(({ title, description, link }, idx) => (
          <a
            key={idx}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline"
          >
            <ProjectCard title={title} description={description} />
          </a>
        ))}
      </div>
    </section>
  )
}

export default Projects
