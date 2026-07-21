import AboutCompany from '@/app/components/AboutCompany';
import HowICanHelp from '@/app/components/HowICanHelp';
import TranslationProvider from '@/translation/contexts/TranslationContext';
import AboutMe from './components/AboutMe';
import Footer from './components/Footer';
import Header from './components/Header';
import Divider from '@/components/Divider/Divider';

function Home() {
  return (
    <main className="site-background relative flex min-h-screen justify-center p-6">
      <div className="relative w-full max-w-[600px] space-y-6">
        <Header />
        <AboutMe />
        <AboutCompany />
        <HowICanHelp />
        <Divider />
        <Footer />
      </div>
    </main>
  );
}

export default function WithTranslation() {
  return (
    <TranslationProvider>
      <Home />
    </TranslationProvider>
  );
}
