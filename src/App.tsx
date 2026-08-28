import { Preloader } from '@/components/Preloader';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/sections/Hero';
import { Experience } from '@/components/sections/Experience';
import { WhyTelrah } from '@/components/sections/WhyTelrah';
import { Collection } from '@/components/sections/Collection';
import { Voices } from '@/components/sections/Voices';
import { TelrahStandard } from '@/components/sections/TelrahStandard';
import { Partnership } from '@/components/sections/Partnership';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/sections/Footer';

function App() {
  return (
    <>
      <Preloader />
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <WhyTelrah />
        <Collection />
        <Voices />
        <TelrahStandard />
        <Partnership />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
