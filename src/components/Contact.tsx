import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import { LinkedInIcon, InstagramIcon } from './BrandIcons';

export const Contact: React.FC = () => {
  const contactItems = [
    { icon: Mail, label: 'Email', href: 'mailto:shofiya641@gmail.com', value: 'shofiya641@gmail.com' },
    { icon: Phone, label: 'Phone', href: 'tel:8610994381', value: '+91 8610994381' },
    { icon: MapPin, label: 'Location', href: '#', value: 'Erode, Tamil Nadu, India' },
    { icon: LinkedInIcon, label: 'LinkedIn', href: 'https://www.linkedin.com/in/shofiya-fathima-a350332a0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app', value: 'Shofiya Fathima' },
  ];

  return (
    <section
      id="contact"
      className="py-24 relative overflow-hidden px-6 md:px-12 bg-zinc-950/10"
    >
      {/* Background soft ambient gradient */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-white/[0.005] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto z-10 relative">

        {/* Section Title */}
        <div className="flex flex-col items-start text-left mb-16">
          <span className="text-[10px] font-mono tracking-[0.4em] uppercase text-white/40 mb-2">07 / Connection</span>
          <h2 className="text-4xl md:text-5xl font-serif text-white tracking-normal font-light">
            Get In <span className="serif-italic">Touch</span>
          </h2>
          <div className="h-[1px] w-20 bg-white/20 mt-4" />
        </div>

        {/* Contact cards — horizontal row */}
        <div className="w-full">
          <h3 className="text-xs uppercase tracking-[0.3em] font-mono text-white/40 mb-6">Contact Channels</h3>

          <div className="flex flex-row flex-wrap gap-4 mb-10">
            {contactItems.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.a
                  key={idx}
                  href={item.href}
                  target={item.href !== '#' ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="clickable group flex-1 min-w-[180px] flex flex-col items-start gap-3 p-5 glass-panel border border-white/[0.06] hover:border-white/20 rounded-2xl transition-all duration-300 cursor-pointer"
                  whileHover={{ y: -4 }}
                >
                  <div className="p-2.5 bg-white/5 rounded-xl border border-white/10 text-white/60 group-hover:text-white group-hover:bg-white/10 transition-colors duration-300">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[9px] font-mono tracking-wider text-white/40 uppercase block mb-1">{item.label}</span>
                    <span className="text-sm font-sans text-white/80 group-hover:text-white transition-colors leading-snug">{item.value}</span>
                  </div>
                </motion.a>
              );
            })}
          </div>

          {/* Social Icons row */}
          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com/in/shofiya-fathima-a350332a0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
              target="_blank"
              rel="noopener noreferrer"
              className="clickable group p-3 border border-white/10 bg-white/[0.02] hover:bg-white text-white hover:text-black rounded-full transition-all duration-500"
            >
              <LinkedInIcon className="w-4 h-4 group-hover:scale-110 transition-transform" />
            </a>
            <a
              href="https://www.instagram.com/only.shofiya/"
              target="_blank"
              rel="noopener noreferrer"
              className="clickable group p-3 border border-white/10 bg-white/[0.02] hover:bg-white text-white hover:text-black rounded-full transition-all duration-500"
            >
              <InstagramIcon className="w-4 h-4 group-hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
