import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GALLERY_IMAGES, WHATSAPP_NUMBER, BUSINESS_NAME } from '../constants';
import { ChevronLeft, ChevronRight, MessageCircle, Phone, X } from 'lucide-react';

export default function Gallery() {
  const [filter, setFilter] = useState('All');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedInquiry, setSelectedInquiry] = useState<any>(null);
  const categories = ['All', 'Blouse', 'Lehenga', 'Kurti'];

  const filteredImages = filter === 'All'
    ? GALLERY_IMAGES
    : GALLERY_IMAGES.filter(img => img.category === filter);

  // Reset index when filter changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [filter]);

  const next = () => {
    if (filteredImages.length <= 3) return;
    setCurrentIndex((prev) => (prev + 3) % filteredImages.length);
  };

  const prev = () => {
    if (filteredImages.length <= 3) return;
    setCurrentIndex((prev) => (prev - 3 + filteredImages.length) % filteredImages.length);
  };

  const getDisplayedImages = () => {
    if (filteredImages.length <= 3) return filteredImages;
    
    const items = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % filteredImages.length;
      items.push(filteredImages[index]);
    }
    return items;
  };

  const displayedImages = getDisplayedImages();
  const trendingImages = GALLERY_IMAGES.filter(img => img.trending);

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">Design Gallery</h2>
          <div className="w-24 h-1 bg-maroon mx-auto mb-6 rounded-full" />
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our latest collections and bespoke designs crafted for elegance and comfort.
          </p>
        </div>

        {/* Filters */}
        <div className="flex justify-center gap-2 md:gap-4 mb-12 px-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-3 md:px-6 py-2 rounded-full text-xs md:text-sm font-medium transition-all ${
                filter === cat
                  ? 'bg-maroon text-white shadow-md'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Carousel */}
        <div className="relative group">
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout" initial={false}>
              {displayedImages.map((item) => (
                <motion.div
                  key={`${item.id}-${filter}`}
                  layout
                  initial={{ opacity: 0, scale: 0.9, x: 20 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.9, x: -20 }}
                  transition={{ duration: 0.4 }}
                  className="group relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
                >
                  <div className="aspect-[3/4] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                    <p className="text-peach text-xs font-bold uppercase tracking-widest mb-2">{item.category}</p>
                    <h3 className="text-white text-xl font-serif font-bold">{item.title}</h3>
                    <button 
                      onClick={() => setSelectedInquiry(item)}
                      className="mt-4 inline-block text-white text-sm font-medium underline underline-offset-4 hover:text-peach transition-colors text-left"
                    >
                      Inquire Now
                    </button>
                  </div>
                  {item.trending && (
                    <div className="absolute top-4 right-4 bg-gold text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-lg uppercase tracking-tighter">
                      Trending 2026
                    </div>
                  )}
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredImages.length > 3 && (
            <>
              <button
                onClick={prev}
                className="absolute left-2 lg:-translate-x-12 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-xl text-maroon hover:bg-maroon hover:text-white transition-all z-20 opacity-100 lg:opacity-0 lg:group-hover:opacity-100"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={next}
                className="absolute right-2 lg:translate-x-12 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-xl text-maroon hover:bg-maroon hover:text-white transition-all z-20 opacity-100 lg:opacity-0 lg:group-hover:opacity-100"
              >
                <ChevronRight size={24} />
              </button>
            </>
          )}
        </div>

        {/* Trending Section */}
        <div className="mt-24 bg-boutique-bg rounded-[40px] p-8 md:p-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-peach/10 rounded-full blur-3xl -z-10" />
          <div className="relative z-10">
            <h3 className="text-3xl font-serif font-bold text-gray-900 mb-8">Trending Designs 2026</h3>
            <div className="flex overflow-x-auto gap-6 pb-4 no-scrollbar">
              {trendingImages.map((item) => (
                <div key={item.id} className="min-w-[280px] bg-white rounded-2xl p-4 shadow-sm">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover rounded-xl mb-4"
                    referrerPolicy="no-referrer"
                  />
                  <p className="text-maroon text-xs font-bold mb-1">{item.category}</p>
                  <h4 className="font-serif font-bold text-gray-900">{item.title}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Inquiry Modal */}
      <AnimatePresence>
        {selectedInquiry && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedInquiry(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative bg-white w-full max-w-sm rounded-[32px] overflow-hidden shadow-2xl"
            >
              <div className="p-8">
                <button 
                  onClick={() => setSelectedInquiry(null)}
                  className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X size={20} />
                </button>
                
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-peach/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <MessageCircle className="text-maroon" size={32} />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-gray-900 mb-2">Inquire Now</h3>
                  <p className="text-gray-500 text-sm">How would you like to connect with us for this {selectedInquiry.category}?</p>
                </div>

                <div className="space-y-3">
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hi ${BUSINESS_NAME}, I'm interested in this ${selectedInquiry.category} design: ${selectedInquiry.title}`)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-3 w-full bg-[#25D366] text-white py-4 rounded-2xl font-bold hover:opacity-90 transition-all shadow-lg"
                  >
                    <MessageCircle size={20} />
                    WhatsApp Message
                  </a>
                  <a
                    href="tel:+919860529070"
                    className="flex items-center justify-center gap-3 w-full bg-maroon text-white py-4 rounded-2xl font-bold hover:opacity-90 transition-all shadow-lg"
                  >
                    <Phone size={20} />
                    Call Directly
                  </a>
                  <button
                    onClick={() => setSelectedInquiry(null)}
                    className="w-full text-gray-500 text-sm font-medium py-2 hover:text-gray-700 transition-colors"
                  >
                    Maybe Later
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
