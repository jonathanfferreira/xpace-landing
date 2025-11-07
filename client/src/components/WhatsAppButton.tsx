import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { XPACE_INFO } from '@/lib/constants';

export default function WhatsAppButton() {
  const whatsappLink = `https://wa.me/${XPACE_INFO.contact.whatsapp}?text=Olá!%20Quero%20informações%20sobre%20matrículas%20na%20XPACE.`;

  return (
    <motion.a
      href={whatsappLink}
      target="_blank"
      rel="noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:shadow-xl transition-shadow"
      aria-label="Fale conosco no WhatsApp"
    >
      <MessageCircle size={28} />
      
      {/* Pulse animation */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-75" />
    </motion.a>
  );
}
