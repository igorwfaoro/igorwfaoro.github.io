import Heading from '../../../components/Heading/Heading';

interface AboutMeProps {}

export default function AboutMe({}: AboutMeProps) {
  return (
    <section>
      <Heading.H2>About Me</Heading.H2>

      <p>
        I am a full-stack developer with experience in various technologies,
        including Node.js, Angular, React, .Net, and Java. With strong skills in
        both backend and frontend development, I have the ability to create
        robust and scalable solutions to meet clients' needs. I have a
        problem-solving mindset and am always seeking to learn new technologies
        and improve my skills.
      </p>
    </section>
  );
}
