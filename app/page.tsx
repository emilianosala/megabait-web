import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import Productos from "@/components/Productos/Productos";
import Waitlist from "@/components/Waitlist/Waitlist";
import Contacto from "@/components/Contacto/Contacto";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Productos />
        <Waitlist />
        <Contacto />
      </main>
      <Footer />
    </>
  );
}
