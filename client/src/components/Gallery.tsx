import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Play } from 'lucide-react';

interface GalleryItem {
    type: 'image' | 'video';
    src: string;
    thumbnail?: string;
    alt: string;
    category: string;
}

// Galeria de momentos XPACE - adicione mais itens conforme necessário
const GALLERY_ITEMS: GalleryItem[] = [
    { type: 'image', src: '/images/teachers/jhonney.jpg', alt: 'Professor Jhonney em apresentação', category: 'professores' },
    { type: 'image', src: '/images/teachers/dil.jpg', alt: 'Professora Dil', category: 'professores' },
    { type: 'image', src: '/images/teachers/bianca.jpg', alt: 'Professora Bianca em aula', category: 'professores' },
    { type: 'image', src: '/images/teachers/eduarda.jpg', alt: 'Professora Eduarda', category: 'professores' },
    { type: 'image', src: '/images/teachers/loren.jpg', alt: 'Professora Lóren', category: 'professores' },
    { type: 'image', src: '/images/teachers/lucasmaciel.jpg', alt: 'Professor Lucas Maciel', category: 'professores' },
    { type: 'image', src: '/images/teachers/marcelinho.jpg', alt: 'Professor Marcelinho', category: 'professores' },
    { type: 'image', src: '/images/teachers/isis.jpg', alt: 'Professora Isis', category: 'professores' },
    { type: 'video', src: 'https://www.youtube.com/embed/cyFQmBLISr4', thumbnail: '/images/poster.png', alt: 'Mini Crew XPACE no FIH2', category: 'competições' },
    { type: 'video', src: 'https://www.youtube.com/embed/TipBGmO_PzY', thumbnail: '/images/poster.png', alt: 'XPACE no FIH2 2025', category: 'competições' },
];

const CATEGORIES = ['todos', 'professores', 'competições'];

export default function Gallery() {
    const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
    const [activeCategory, setActiveCategory] = useState('todos');
    const [currentIndex, setCurrentIndex] = useState(0);

    const filteredItems = activeCategory === 'todos'
        ? GALLERY_ITEMS
        : GALLERY_ITEMS.filter(item => item.category === activeCategory);

    const openLightbox = (item: GalleryItem, index: number) => {
        setSelectedItem(item);
        setCurrentIndex(index);
    };

    const closeLightbox = () => setSelectedItem(null);

    const navigateLightbox = (direction: 'prev' | 'next') => {
        const newIndex = direction === 'prev'
            ? (currentIndex - 1 + filteredItems.length) % filteredItems.length
            : (currentIndex + 1) % filteredItems.length;
        setCurrentIndex(newIndex);
        setSelectedItem(filteredItems[newIndex]);
    };

    return (
        <section id="galeria" className="py-24 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-background via-xpace-purple/5 to-background pointer-events-none" />

            <div className="container relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4">
                        Nossa{' '}
                        <span className="gradient-xpace-text">Galeria</span>
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Momentos especiais, apresentações e bastidores da família XPACE
                    </p>
                </motion.div>

                {/* Category Filters */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    className="flex flex-wrap justify-center gap-3 mb-12"
                >
                    {CATEGORIES.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-6 py-2 rounded-full font-medium capitalize transition-all duration-300 ${activeCategory === category
                                    ? 'gradient-xpace text-white'
                                    : 'bg-card border border-border text-muted-foreground hover:text-foreground hover:border-xpace-purple/50'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </motion.div>

                {/* Gallery Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredItems.map((item, index) => (
                            <motion.div
                                key={item.src}
                                layout
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.3 }}
                                whileHover={{ scale: 1.05 }}
                                onClick={() => openLightbox(item, index)}
                                className="relative aspect-square rounded-xl overflow-hidden cursor-pointer group"
                            >
                                <img
                                    src={item.type === 'video' ? item.thumbnail : item.src}
                                    alt={item.alt}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    loading="lazy"
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                {/* Play button for videos */}
                                {item.type === 'video' && (
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                                            <Play className="w-8 h-8 text-white fill-white" />
                                        </div>
                                    </div>
                                )}

                                {/* Caption */}
                                <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <p className="text-white text-sm font-medium truncate">{item.alt}</p>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedItem && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
                        onClick={closeLightbox}
                    >
                        {/* Close Button */}
                        <button
                            onClick={closeLightbox}
                            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-10"
                        >
                            <X className="w-6 h-6 text-white" />
                        </button>

                        {/* Navigation Buttons */}
                        <button
                            onClick={(e) => { e.stopPropagation(); navigateLightbox('prev'); }}
                            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-10"
                        >
                            <ChevronLeft className="w-8 h-8 text-white" />
                        </button>
                        <button
                            onClick={(e) => { e.stopPropagation(); navigateLightbox('next'); }}
                            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-10"
                        >
                            <ChevronRight className="w-8 h-8 text-white" />
                        </button>

                        {/* Content */}
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            onClick={(e) => e.stopPropagation()}
                            className="max-w-4xl max-h-[80vh] w-full"
                        >
                            {selectedItem.type === 'video' ? (
                                <div className="aspect-video rounded-xl overflow-hidden">
                                    <iframe
                                        src={selectedItem.src}
                                        title={selectedItem.alt}
                                        className="w-full h-full"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    />
                                </div>
                            ) : (
                                <img
                                    src={selectedItem.src}
                                    alt={selectedItem.alt}
                                    className="w-full h-auto max-h-[80vh] object-contain rounded-xl"
                                />
                            )}
                            <p className="text-white text-center mt-4 text-lg">{selectedItem.alt}</p>
                        </motion.div>

                        {/* Counter */}
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/70 text-sm">
                            {currentIndex + 1} / {filteredItems.length}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
