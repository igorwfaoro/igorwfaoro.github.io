import Button from '../../../components/Button/Button';
import Card from '../../../components/Card/Card';
import Heading from '../../../components/Heading/Heading';

interface ProjectsProps {}

interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
}

const projects: Project[] = [
  {
    title: 'Estasiare: Event Management Platform',
    description:
      'Estasiare is an innovative platform designed to simplify event organization across various celebrations like weddings and birthdays. It offers tools for planning, guest management, and creating personalized event websites, helping users transform their vision into memorable experiences effortlessly.',
    image: 'https://www.estasiare.com.br/images/print-screen-home.jpg',
    link: 'https://www.estasiare.com.br'
  },
  {
    title: 'Cartão Natal',
    description:
      'Cartão Natal is an innovative platform that allows users to create personalized Christmas cards. With customizable themes, messages, and even music options, Cartão Natal makes it easy to share festive sentiments in a unique and creative way.',
    image: 'https://cartaonatal.com/images/print-screen-home.jpg',
    link: 'https://cartaonatal.com'
  },
  {
    title: 'Repy: Delivery Management System',
    description:
      'Repy is a dynamic delivery management system designed to put complete control over deliveries, orders, and inventory at your fingertips. With features including a dedicated courier app and customer tracking links, Repy streamlines the entire delivery process, ensuring efficient and transparent operations. This platform is an ideal solution for businesses looking to enhance their delivery services and customer satisfaction.',
    image:
      'https://mir-s3-cdn-cf.behance.net/project_modules/fs/ac583a145158807.6298fc01cfe59.png',
    link: 'https://www.behance.net/gallery/145158807/Repy'
  },
  {
    title: 'Gasapp: Cooking Gas Delivery App',
    description:
      'Gasapp revolutionizes the way you order cooking gas with a user-friendly app for customers and a comprehensive panel for gas distributors. This platform allows distributors to manage service areas, products, and receive orders seamlessly. Gasapp makes ordering cooking gas convenient and efficient, ensuring that customers can easily access their cooking fuel needs with just a few taps.',
    image:
      'https://mir-s3-cdn-cf.behance.net/project_modules/fs/cb0471145165987.6299155aaa627.png',
    link: 'https://www.behance.net/gallery/145165987/Gasapp'
  },
  {
    title: 'Medintime: Health Professional Networking App',
    description:
      'Medintime is a social networking app tailored for connecting users with healthcare professionals like doctors and dentists. Beyond facilitating these connections, the app features practical tools such as medication reminders, enhancing user convenience and health management. Medintime is designed to integrate seamlessly into your lifestyle, ensuring that your health needs are met promptly and professionally.',
    image:
      'https://mir-s3-cdn-cf.behance.net/project_modules/fs/c20fee145092223.6298fb8a26e0e.png',
    link: 'https://www.behance.net/gallery/145092223/Medintime'
  }
];

export default function Projects({}: ProjectsProps) {
  return (
    <section className="space-y-4">
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

            <Button href={project.link} target="_blank">
              Go to project
            </Button>
          </Card>
        ))}
      </div>
    </section>
  );
}
