
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Calendar, Ticket } from 'lucide-react';

export default function Xpaceflix() {
  const ticketUrl = "https://www.blueticket.com.br/evento/39053";

  return (
    <section id="xpaceflix" className="relative py-24 sm:py-32 bg-black overflow-hidden">
      {/* Background radial gradient */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black"></div>
        <div 
          className="absolute top-1/2 left-1/2 w-[80rem] h-[80rem] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle_at_center,_rgba(220,38,38,0.5)_0%,_rgba(220,38,38,0)_50%)]"
        ></div>
      </div>
      
      <div className="container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >

          {/* Subtitle with Date */}
          <div className="flex items-center justify-center gap-4 mb-10">
            <Calendar className="w-6 h-6 text-red-500" />
            <p className="text-2xl font-bold text-white tracking-wider">
              07 DE DEZEMBRO
            </p>
          </div>

          <p className="max-w-2xl mx-auto text-lg text-neutral-300 mb-12">
            Prepare-se para o maior espetáculo de dança do ano. Uma produção XPACE que vai te transportar para o universo do streaming, com performances incríveis e emocionantes.
          </p>

          {/* CTA Button */}
          <Button 
            size="lg" 
            asChild
            className="bg-red-600 hover:bg-red-700 text-white font-bold text-lg px-10 py-6 rounded-lg transition-transform duration-300 hover:scale-105 shadow-[0_0_20px_rgba(220,38,38,0.5)]"
          >
            <a href={ticketUrl} target="_blank" rel="noopener noreferrer">
              <Ticket className="w-6 h-6 mr-3" />
              Garanta seu Ingresso!
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
