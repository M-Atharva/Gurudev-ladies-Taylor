import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote, MapPin, Phone, Clock, Mail, Instagram, Facebook } from 'lucide-react';
import { TESTIMONIALS, BUSINESS_NAME, LOCATION } from '../constants';

export default function Info() {
  return (
    <>
      {/* Testimonials */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">Customer Stories</h2>
            <div className="w-24 h-1 bg-maroon mx-auto mb-6 rounded-full" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, i) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-boutique-bg p-8 rounded-[32px] relative"
              >
                <Quote className="absolute top-6 right-8 text-maroon/10 w-12 h-12" />
                <div className="flex gap-1 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-gold text-gold" />
                  ))}
                </div>
                <p className="text-gray-700 italic mb-6 leading-relaxed">"{t.review}"</p>
                <p className="font-bold text-gray-900">— {t.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-boutique-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-8">Visit Our Boutique</h2>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm shrink-0">
                    <MapPin className="text-maroon" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 mb-1">Our Location</p>
                    <p className="text-gray-600">Hudkeshwar road, Nagpur, Maharashtra 440034</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm shrink-0">
                    <Phone className="text-maroon" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 mb-1">Call Us</p>
                    <p className="text-gray-600">+91 98605 29070</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm shrink-0">
                    <Clock className="text-maroon" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 mb-1">Business Hours</p>
                    <p className="text-gray-600">Mon - Sat: Any time before 11:00 PM</p>
                    <p className="text-gray-600">Sunday: Closed</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 flex gap-4">
                <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm hover:bg-maroon hover:text-white transition-all">
                  <Instagram size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm hover:bg-maroon hover:text-white transition-all">
                  <Facebook size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm hover:bg-maroon hover:text-white transition-all">
                  <Mail size={20} />
                </a>
              </div>
            </div>

            <div className="rounded-[40px] overflow-hidden shadow-2xl h-[400px] relative">
              {/* Map Placeholder */}
              <div className="absolute inset-0 bg-gray-200 flex flex-col items-center justify-center text-gray-500">
                <MapPin size={48} className="mb-4 opacity-20" />
                <p className="font-medium">Interactive Map Placeholder</p>
                <p className="text-sm">Gurudev Ladies Tailor, Nagpur</p>
              </div>
              <iframe
                title="Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119066.52982230407!2d79.002467!3d21.1458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c0a5a31faf13%3A0x19b37d06d0bb3e2b!2sNagpur%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1712810000000!5m2!1sen!2sin"
                className="w-full h-full border-0 grayscale opacity-50 contrast-125"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-serif font-bold text-peach mb-2">{BUSINESS_NAME}</h2>
              <p className="text-gray-400 text-sm">Perfect Fit, Perfect Style since 2004.</p>
            </div>
            <div className="flex gap-8 text-sm font-medium text-gray-400">
              <a href="#" className="hover:text-peach transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-peach transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-peach transition-colors">Refund Policy</a>
            </div>
            <p className="text-gray-500 text-xs">
              © 2026 {BUSINESS_NAME}. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
