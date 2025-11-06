import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      
      {/* Placeholder for other sections */}
      <section id="valores" className="min-h-screen flex items-center justify-center">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-4">Mais seções em breve...</h2>
          <p className="text-muted-foreground">Valores, Estilos, Professores, Horários, Planos e muito mais!</p>
        </div>
      </section>
    </div>
  );
}
