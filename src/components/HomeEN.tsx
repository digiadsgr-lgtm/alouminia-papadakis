"use client"
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ShieldCheck, Zap, Factory, CheckCircle2, ChevronRight, PhoneCall, MapPin, Mail } from 'lucide-react'

export default function HomeEN() {
  return (
    <div className="flex flex-col w-full bg-offwhite">
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/hero_aluminum_villa_1776110912532.png" 
            alt="Premium Aluminum Windows Crete" 
            fill 
            className="object-cover scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/80 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red/10 border border-red/20 text-white mb-6">
              <span className="w-2 h-2 rounded-full bg-red animate-pulse"></span>
              <span className="text-sm font-bold tracking-wide uppercase">Certified Alumil Manufacturer</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight text-white tracking-tight">
              Architectural Aluminum <br />
              <span className="text-red">Systems</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed">
              Elevate your property's value and living standards. Premium energy-efficient windows, bioclimatic pergolas, and heavy ironworks based in Rethymno, Crete.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#services" className="bg-red text-white px-8 py-4 rounded-full font-bold text-center hover:bg-red-700 transition-colors shadow-xl shadow-red/25 active:scale-95">
                Our Services
              </a>
              <a href="tel:2831023897" className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-full font-bold text-center hover:bg-white/20 transition-colors flex items-center justify-center gap-2 active:scale-95">
                <PhoneCall size={20} /> Free Site Analysis
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-navy border-t border-b border-navy-800 py-12 relative z-20 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
            <div className="flex flex-col items-center p-4">
              <Zap className="text-red mb-4" size={40} />
              <h3 className="text-white font-bold text-xl mb-2">A+ Energy Class</h3>
              <p className="text-gray-400 text-sm">Dramatically reduce heating and cooling costs with thermal break systems.</p>
            </div>
            <div className="flex flex-col items-center p-4">
              <ShieldCheck className="text-red mb-4" size={40} />
              <h3 className="text-white font-bold text-xl mb-2">Anti-Burglary Security</h3>
              <p className="text-gray-400 text-sm">Perimeter locking mechanisms and shatterproof heavy-duty crystals.</p>
            </div>
            <div className="flex flex-col items-center p-4">
              <CheckCircle2 className="text-red mb-4" size={40} />
              <h3 className="text-white font-bold text-xl mb-2">CE Certifications</h3>
              <p className="text-gray-400 text-sm">All our structures follow the strictest European durability standards.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-24 bg-offwhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16 max-w-3xl mx-auto">
             <h2 className="text-navy font-black text-4xl md:text-5xl mb-6 tracking-tight">Our Expertise</h2>
             <div className="w-24 h-1.5 bg-red mx-auto rounded-full mb-6"></div>
             <p className="text-gray-600 text-lg">
               Leave outdated solutions behind. We study, design and install architectural systems that perform flawlessly against Crete's extreme weather conditions.
             </p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
             <Link href="/en/services/koufomata-alouminiou-rethymno" className="md:col-span-2 glass-panel p-10 relative overflow-hidden group hover:border-red/30 transition-all block text-navy">
               <div className="relative z-10">
                 <h3 className="text-3xl font-black mb-4 group-hover:text-red transition-colors">Energy Efficient Windows</h3>
                 <p className="text-gray-600 mb-8 max-w-md text-lg leading-relaxed">Absolute sound and thermal insulation with minimal design. As certified Alumil fabricators, we install the advanced SMARTIA & SUPREME systems.</p>
                 <span className="text-red font-bold flex items-center gap-2 group-hover:gap-4 transition-all">Learn More <ChevronRight size={20} strokeWidth={3}/></span>
               </div>
               <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110">
                 <Factory size={150} />
               </div>
             </Link>

             <Link href="/en/services/pergoles-rethymno-kriti" className="glass-panel p-10 hover:border-red/30 transition-all block group text-navy flex flex-col justify-between">
               <div>
                 <h3 className="text-2xl font-black mb-4 group-hover:text-red transition-colors">Pergolas & Shading</h3>
                 <p className="text-gray-600 mb-8 text-lg">Bioclimatic pergolas, modern shutters, and insect screens for smart natural light control.</p>
               </div>
               <span className="text-red font-bold flex items-center gap-2 group-hover:gap-4 transition-all">Learn More <ChevronRight size={20} strokeWidth={3}/></span>
             </Link>

             <Link href="/en/services/sidiros-kataskeves-rethymno" className="glass-panel p-10 hover:border-red/30 transition-all block group text-navy flex flex-col justify-between">
               <div>
                 <h3 className="text-2xl font-black mb-4 group-hover:text-red transition-colors">Security Gates & Fences</h3>
                 <p className="text-gray-600 mb-8 text-lg">Inox structures and electrostatic coatings that prevent oxidation and elevate aesthetics.</p>
               </div>
               <span className="text-red font-bold flex items-center gap-2 group-hover:gap-4 transition-all">Learn More <ChevronRight size={20} strokeWidth={3}/></span>
             </Link>

             <Link href="/en/services/sidiros-kataskeves-rethymno" className="md:col-span-2 glass-panel p-10 hover:border-red/30 transition-all block group text-navy">
               <h3 className="text-3xl font-black mb-4 group-hover:text-red transition-colors">Industrial Ironworks</h3>
               <p className="text-gray-600 mb-8 max-w-xl text-lg leading-relaxed">Metal buildings, warehouses, and high-durability stairs. Absolute precision welding using industrial CAD design.</p>
               <span className="text-red font-bold flex items-center gap-2 group-hover:gap-4 transition-all">Learn More <ChevronRight size={20} strokeWidth={3}/></span>
             </Link>
           </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-navy text-white relative border-b-8 border-red shadow-inner">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-black mb-8 tracking-tight">Request a Quote & Project Study</h2>
          <p className="text-xl text-gray-300 mb-12">Whether it's a home renovation or a new hotel project, we are committed to providing the solution you deserve, promptly and responsibly.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl flex items-start gap-4 hover:border-red/50 transition-colors">
               <PhoneCall className="text-red mt-1" size={24} />
               <div>
                 <p className="text-gray-400 text-sm mb-1">Call Us</p>
                 <a href="tel:2831023897" className="font-bold text-lg hover:text-red transition-colors">+30 28310 23897</a>
               </div>
            </div>
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl flex items-start gap-4 hover:border-red/50 transition-colors">
               <MapPin className="text-red mt-1" size={24} />
               <div>
                 <p className="text-gray-400 text-sm mb-1">Factory Address</p>
                 <p className="font-bold text-lg">Drouliskou 8, Rethymno</p>
               </div>
            </div>
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl flex items-start gap-4 hover:border-red/50 transition-colors">
               <Mail className="text-red mt-1" size={24} />
               <div>
                 <p className="text-gray-400 text-sm mb-1">Email inquiries</p>
                 <a href="mailto:gpapadakisret@gmail.com" className="font-bold text-[15px] hover:text-red transition-colors">gpapadakisret@gmail.com</a>
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
