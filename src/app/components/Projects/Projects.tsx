import projects from '../../../../projects.json';
import Button from '../../../components/Button/Button';
import Card from '../../../components/Card/Card';
import Heading from '../../../components/Heading/Heading';

interface ProjectsProps {}

export default function Projects({}: ProjectsProps) {
  return (
    <section className="space-y-4">
      <p className="text-sm italic">
        This{' '}
        <a
          href="https://github.com/igorwfaoro/igorwfaoro.github.io"
          target="_blank"
          className="underline text-blue-500"
        >
          portfolio project
        </a>{' '}
        was built using Next.js with Static Export, chosen to streamline and
        simplify the development process. The project was deployed on GitHub
        Pages, and the entire deployment process is automated using GitHub
        Actions, ensuring a smooth and continuous delivery pipeline.
      </p>

      <Heading.H2>Main Projects</Heading.H2>

      <div className="space-y-4">
        {projects.map((project) => (
          <Card key={project.title} className="p-4 space-y-4">
            <Heading.H3>{project.title}</Heading.H3>

            <img
              src={project.image}
              alt={`Image ${project.title}`}
              className="rounded-lg"
            />

            <p>{project.description}</p>

            {project.linkLive && (
              <Button href={project.linkLive} target="_blank">
                Live
              </Button>
            )}

            {project.linkGithub && (
              <Button href={project.linkGithub} target="_blank">
                Github
              </Button>
            )}

            {project.linkProject && (
              <Button href={project.linkProject} target="_blank">
                Project
              </Button>
            )}
          </Card>
        ))}
      </div>
    </section>
  );
}
