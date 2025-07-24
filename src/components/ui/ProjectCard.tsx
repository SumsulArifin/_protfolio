interface ProjectCardProps {
  title: string
  description: string
}

const ProjectCard = ({ title, description }: ProjectCardProps) => (
  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">{title}</h3>
    <p className="text-gray-700 dark:text-gray-300">{description}</p>
  </div>
)

export default ProjectCard
