import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { TAGLINE, WHATSAPP_NUMBER, BUSINESS_NAME } from '../constants';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-peach/20 -z-10 rounded-l-[100px] hidden lg:block" />
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-cream/50 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block px-4 py-1.5 bg-maroon/10 text-maroon rounded-full text-xs font-bold uppercase tracking-widest mb-6">
              Nagpur's Premium Boutique
            </span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-gray-900 leading-[1.1] mb-6">
              {TAGLINE.split(',').map((part, i) => (
                <span key={i} className="block">
                  {part.trim()}
                  {i === 0 && <span className="text-maroon">,</span>}
                </span>
              ))}
            </h1>
            <p className="text-lg text-gray-600 mb-10 max-w-lg leading-relaxed">
              Family-run boutique with decades of experienced craftsmanship. We bring your dream designs to life with precision and love.
              <span className="block mt-2 font-semibold text-maroon">✨ Free Home Delivery across Nagpur!</span>
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#gallery"
                className="bg-maroon text-white px-8 py-4 rounded-full font-medium flex items-center gap-2 hover:bg-opacity-90 transition-all shadow-lg hover:shadow-maroon/20"
              >
                View Designs <ArrowRight size={18} />
              </a>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hi ${BUSINESS_NAME}, I'd like to inquire about your stitching services.`)}`}
                target="_blank"
                rel="noreferrer"
                className="bg-white text-gray-900 border border-gray-200 px-8 py-4 rounded-full font-medium flex items-center gap-2 hover:bg-gray-50 transition-all shadow-sm"
              >
                <MessageCircle size={18} className="text-green-500" /> Chat on WhatsApp
              </a>
            </div>

            <div className="mt-12 flex items-center gap-8">
              <div>
                <p className="text-3xl font-serif font-bold text-maroon">20+</p>
                <p className="text-sm text-gray-500">Years Experience</p>
              </div>
              <div className="w-px h-10 bg-gray-200" />
              <div>
                <p className="text-3xl font-serif font-bold text-maroon">5k+</p>
                <p className="text-sm text-gray-500">Happy Clients</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative z-10 rounded-[40px] overflow-hidden shadow-2xl border-8 border-white">
              <img
                src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=1000"
                alt="Elegant Ethnic Wear"
                className="w-full h-[600px] object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gold rounded-full -z-10 opacity-20 blur-xl" />
            <div className="absolute -top-6 -left-6 w-48 h-48 bg-peach rounded-full -z-10 opacity-30 blur-2xl" />

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-8 top-1/4 bg-white p-4 rounded-2xl shadow-xl z-20 hidden md:block"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-cream rounded-full flex items-center justify-center">
                  <Scissors className="text-maroon w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-900">Custom Fitting</p>
                  <p className="text-[10px] text-gray-500">Guaranteed Satisfaction</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

import { Scissors } from 'lucide-react';
