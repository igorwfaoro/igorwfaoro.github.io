import AboutMe from './components/AboutMe/AboutMe';
import Contact from './components/Contact/Contact';
import Header from './components/Header/Header';

export default async function Home() {
  return (
    <main className="p-6 flex justify-center">
      <div className="w-full max-w-[600px] space-y-6">
        <Header />
        <AboutMe />
        <Contact />
      </div>
    </main>
  );
}
