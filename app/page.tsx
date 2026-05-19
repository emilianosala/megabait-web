import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import Productos from "@/components/Productos/Productos";
import Medida from "@/components/Medida/Medida";
import Contacto from "@/components/Contacto/Contacto";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Productos />
        <Medida />
        <Contacto />
      </main>
      <Footer />
    </>
  );
}
