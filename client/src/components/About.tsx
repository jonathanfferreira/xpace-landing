import { motion } from 'framer-motion';
import { Check, Heart, Zap, Users, Sparkles } from 'lucide-react';

const MANIFESTO = "Somos uma escola de dança com um espaço cheio de novas experiências da dança. Nosso universo se encontra com o digital, e cada movimento se torna uma linguagem capaz de conectar corações e mentes. Com o propósito de celebrar a mobilidade corporal e combater o isolamento causado pelo uso excessivo de telas, resgatamos o ritmo e despertamos novas formas de socializar e se conectar culturalmente. Aqui, a dança, a moda e a tecnologia se unem para criar um ambiente único e transformador.";

const VALORES = [
  {
    icon: Heart,
    title: "Acolhimento e Família",
    description: "Presamos sempre pelo outro, pela família, pela união e pelo respeito a cada um. Criando um espaço acolhedor.",
  },
  {
    icon: Users,
    title: "União e Socialização",
    description: "Incentivamos a socialização e o fortalecimento de uma cultura de movimento e conexão, quebrando barreiras através da dança.",
  },
  {
    icon: Zap,
    title: "Inovação e Tecnologia",
    description: "Integramos dança, moda, tecnologia e entretenimento, oferecendo uma experiência inovadora e completa que desafia o comum.",
  },
  {
    icon: Sparkles,
    title: "Expressão e Criatividade",
    description: "Transformamos movimentos em uma linguagem de conexão, incentivando a criatividade e a expressão artística.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function About() {
  return (
    <section id="sobre" className="py-24 relative overflow-hidden">
      <div className="container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4">
            Nossa{' '}
            <span className="gradient-xpace-text">
              Essência
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Conheça o propósito que move a XPACE e a experiência única que oferecemos.
          </p>
        </motion.div>

        {/* Manifesto Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-card border border-border rounded-3xl p-8 md:p-12 max-w-5xl mx-auto shadow-xl shadow-primary/10 mb-20"
        >
          <h3 className="text-3xl font-bold mb-6 text-primary">Manifesto XPACE</h3>
          <p className="text-xl leading-relaxed text-foreground">
            {MANIFESTO}
          </p>
        </motion.div>

        {/* Valores Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto"
        >
          {VALORES.map((valor, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex flex-col items-center text-center p-6 bg-card border border-border rounded-2xl shadow-lg hover:shadow-primary/20 transition-shadow duration-300 h-full"
            >
              <valor.icon className="w-10 h-10 text-primary mb-4" />
              <h4 className="text-xl font-bold mb-2">{valor.title}</h4>
              <p className="text-sm text-muted-foreground">{valor.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
