import AboutMe from './components/AboutMe/AboutMe';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Projects from './components/Projects/Projects';

export default async function Home() {
  return (
    <main className="p-6 flex justify-center">
      <div className="w-full max-w-[600px] space-y-6">
        <Header />
        <AboutMe />
        <Contact />
        <Projects />
        <Footer />
      </div>
    </main>
  );
}
