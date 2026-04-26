import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Scissors, Heart, RefreshCw, CheckCircle2 } from 'lucide-react';
import { SERVICES, WHATSAPP_NUMBER, BUSINESS_NAME } from '../constants';

const iconMap: any = {
  Scissors: Scissors,
  Heart: Heart,
  RefreshCw: RefreshCw,
};

export default function Services() {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    setTimeout(() => setFormStatus('success'), 1500);
  };

  return (
    <section id="services" className="py-24 bg-boutique-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">Our Services</h2>
          <div className="w-24 h-1 bg-maroon mx-auto mb-6 rounded-full" />
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer a wide range of tailoring services with a focus on quality, precision, and customer satisfaction.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {SERVICES.map((service, i) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-10 rounded-[32px] shadow-sm hover:shadow-xl transition-all border border-gray-100 group"
              >
                <div className="w-16 h-16 bg-peach/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-maroon group-hover:text-white transition-all duration-300">
                  <Icon className="text-maroon group-hover:text-white" size={32} />
                </div>
                <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Before & After Section */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-serif font-bold text-gray-900 mb-2">The Transformation</h3>
            <p className="text-gray-500">See how we bring life to simple fabrics</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative group rounded-3xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1589363460779-cd717d2ed8fa?auto=format&fit=crop&q=80&w=800"
                alt="Before"
                className="w-full h-80 object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-md text-white px-4 py-1 rounded-full text-xs font-bold uppercase">Fabric</div>
            </div>
            <div className="relative group rounded-3xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=800"
                alt="After"
                className="w-full h-80 object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4 bg-maroon text-white px-4 py-1 rounded-full text-xs font-bold uppercase">Finished Masterpiece</div>
            </div>
          </div>
        </div>

        {/* Custom Stitching Form */}
        <div id="booking" className="bg-white rounded-[40px] shadow-2xl overflow-hidden grid lg:grid-cols-2">
          <div className="p-8 md:p-16 bg-maroon text-white flex flex-col justify-center">
            <h3 className="text-4xl font-serif font-bold mb-6">Book Your Appointment</h3>
            <p className="text-maroon-100 mb-8 text-lg leading-relaxed">
              Ready for your perfect fit? Fill out the form or reach out via WhatsApp for a quick consultation.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <CheckCircle2 className="text-gold" size={20} />
                <span>Expert Measurements at Home</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="text-gold" size={20} />
                <span>Fabric Consultation</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="text-gold" size={20} />
                <span>Free Home Delivery in Nagpur</span>
              </li>
            </ul>
          </div>

          <div className="p-8 md:p-16">
            {formStatus === 'success' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center"
              >
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 size={40} />
                </div>
                <h4 className="text-2xl font-serif font-bold text-gray-900 mb-2">Appointment Requested!</h4>
                <p className="text-gray-600 mb-8">We will contact you shortly to confirm your slot.</p>
                <button
                  onClick={() => setFormStatus('idle')}
                  className="text-maroon font-bold underline"
                >
                  Book another appointment
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Full Name</label>
                    <input
                      required
                      type="text"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-maroon focus:ring-1 focus:ring-maroon outline-none transition-all"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Phone Number</label>
                    <input
                      required
                      type="tel"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-maroon focus:ring-1 focus:ring-maroon outline-none transition-all"
                      placeholder="Your Phone"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Service Required</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-maroon focus:ring-1 focus:ring-maroon outline-none transition-all">
                    <option>Blouse Stitching</option>
                    <option>Lehenga Stitching</option>
                    <option>Kurti / Suit</option>
                    <option>Bridal Package</option>
                    <option>Alterations</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Preferred Date & Time</label>
                  <input
                    required
                    type="datetime-local"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-maroon focus:ring-1 focus:ring-maroon outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Additional Details (Optional)</label>
                  <textarea
                    rows={3}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-maroon focus:ring-1 focus:ring-maroon outline-none transition-all"
                    placeholder="Any specific design or measurement details..."
                  ></textarea>
                </div>
                <div className="flex flex-col gap-4">
                  <button
                    disabled={formStatus === 'submitting'}
                    type="submit"
                    className="w-full bg-maroon text-white py-4 rounded-xl font-bold hover:bg-opacity-90 transition-all shadow-lg disabled:opacity-50"
                  >
                    {formStatus === 'submitting' ? 'Processing...' : 'Confirm Appointment'}
                  </button>
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hi ${BUSINESS_NAME}, I'd like to book an appointment for stitching.`)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full bg-[#25D366] text-white py-4 rounded-xl font-bold hover:bg-opacity-90 transition-all shadow-lg text-center flex items-center justify-center gap-2"
                  >
                    Quick Booking via WhatsApp
                  </a>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
