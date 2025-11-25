
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import WordRotate from '@/components/ui/word-rotate';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

      {/* Content */}
      <div className="container relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column (Text Content) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-center md:text-left"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6">
              <span className="block">A escola de dança</span>
              <WordRotate
                className="gradient-xpace-text"
                words={[
                  "que inspira.",
                  "que conecta.",
                  "que transforma.",
                  "que multiplica.",
                ]}
              />
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-lg mx-auto md:mx-0 mb-10">
              Do iniciante ao profissional, encontre seu ritmo e sua paixão em um ambiente vibrante e acolhedor.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button asChild size="lg" className="group">
                <a href="#horarios">
                  Ver Horários
                  <ChevronRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="#planos">Explorar Planos</a>
              </Button>
            </div>
          </motion.div>

          {/* Right Column (Image/Logo) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            className="relative flex items-center justify-center"
          >
            <img 
              src="/images/poster.png" 
              alt="Cartaz do espetáculo Xpaceflix - 7 de Dezembro no Teatro Juarez Machado"
              className="w-full max-w-md h-auto rounded-lg shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
