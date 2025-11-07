import { motion } from 'framer-motion';
import { Instagram, Youtube, MapPin, Mail, Phone } from 'lucide-react';
import { XPACE_INFO } from '@/lib/constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'Instagram',
      icon: Instagram,
      url: XPACE_INFO.social.instagram,
      color: 'hover:text-xpace-purple'
    },
    {
      name: 'TikTok',
      icon: () => (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
        </svg>
      ),
      url: XPACE_INFO.social.tiktok,
      color: 'hover:text-xpace-orange'
    },
    {
      name: 'YouTube',
      icon: Youtube,
      url: XPACE_INFO.social.youtube,
      color: 'hover:text-xpace-orange'
    }
  ];

  const quickLinks = [
    { name: 'Horários', href: '#horarios' },
    { name: 'Professores', href: '#professores' },
    { name: 'Planos', href: '#planos' },
    { name: 'Contato', href: '#contato' }
  ];

  return (
    <footer className="relative bg-card border-t border-border overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-xpace-purple/5 to-transparent pointer-events-none" />
      
      <div className="container relative z-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <img src="/01b.png" alt="XPACE Escola de Dança" className="h-12 w-auto" />
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                XPACE
              </span>
            </div>
            <p className="text-sm text-muted-foreground mb-6">
              {XPACE_INFO.tagline}
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  className={`p-2 rounded-full bg-muted/50 text-muted-foreground transition-all duration-300 ${social.color} hover:scale-110`}
                  aria-label={social.name}
                >
                  <social.icon />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-lg font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-lg font-bold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`https://wa.me/${XPACE_INFO.contact.whatsapp}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-start gap-3 text-sm text-muted-foreground hover:text-primary transition-colors group"
                >
                  <Phone className="w-5 h-5 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <span>{XPACE_INFO.contact.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${XPACE_INFO.contact.email}`}
                  className="flex items-start gap-3 text-sm text-muted-foreground hover:text-primary transition-colors group"
                >
                  <Mail className="w-5 h-5 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <span className="break-all">{XPACE_INFO.contact.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(XPACE_INFO.location.fullAddress)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-start gap-3 text-sm text-muted-foreground hover:text-primary transition-colors group"
                >
                  <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <span>{XPACE_INFO.location.fullAddress}</span>
                </a>
              </li>
            </ul>
          </motion.div>

          {/* CTA Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-lg font-bold mb-4">Comece Agora</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Agende sua aula experimental gratuita e faça parte da família XPACE!
            </p>
            <a
              href={XPACE_INFO.integrations.nextfit.trial}
              target="_blank"
              rel="noreferrer"
              className="inline-block px-6 py-3 bg-gradient-to-r from-primary to-secondary rounded-full font-bold text-background text-sm hover:opacity-90 transition-opacity shadow-lg shadow-primary/30"
            >
              Agendar Aula Grátis
            </a>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="pt-8 border-t border-border"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>
              © {currentYear} {XPACE_INFO.name}. Todos os direitos reservados. | Desenvolvido por Manus AI
            </p>
            <p>
              CNPJ: {XPACE_INFO.contact.cnpj}
            </p>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2 pointer-events-none" />
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 pointer-events-none" />
    </footer>
  );
}
