/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Phone, 
  MapPin, 
  CheckCircle2, 
  Menu,
  X,
  ChevronRight,
  ArrowRight,
  Instagram,
  Facebook,
  Youtube,
  Globe,
  Users,
  Car,
  ShieldCheck,
  Clock
} from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CAB_SERVICES, CONTACT_INFO } from "../constants";

const WhatsAppIcon = ({ size = 24 }: { size?: number }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

export default function CabsPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-zinc-50 selection:bg-emerald-100 selection:text-emerald-900">
      {/* Navbar */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "glass-nav py-3 shadow-sm" : "bg-zinc-900/80 backdrop-blur-md py-6"}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">N</div>
            <span className="font-serif text-xl font-bold tracking-tight text-white">
              NYRAV <span className="text-emerald-500">TOURS AND TRAVELS</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 font-medium text-white/90">
            <Link to="/" className="hover:text-emerald-500 transition-colors">Home</Link>
            <Link to="/cabs" className="text-emerald-500 transition-colors">Cabs</Link>
            <Link to="/destinations" className="hover:text-emerald-500 transition-colors">Destinations</Link>
            <Link to="/itinerary" className="hover:text-emerald-500 transition-colors">Itinerary</Link>
            <Link to="/query" className="hover:text-emerald-500 transition-colors">Enquiry</Link>
            <Link to="/#services" className="hover:text-emerald-500 transition-colors">Services</Link>
            <Link to="/#packages" className="hover:text-emerald-500 transition-colors">Packages</Link>
            <Link to="/#contact" className="hover:text-emerald-500 transition-colors">Contact</Link>
            <a href={`tel:${CONTACT_INFO.phones[0]}`} className="flex items-center gap-2 text-emerald-500 hover:text-emerald-400 transition-colors">
              <Phone size={18} />
              <span>{CONTACT_INFO.phones[0]}</span>
            </a>
          </div>

          <div className="hidden md:block">
            <Link to="/query">
              <Button 
                className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-full px-6"
              >
                Book a Cab
              </Button>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="text-white" /> : <Menu className="text-white" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-full left-0 w-full bg-white shadow-xl py-6 px-6 flex flex-col gap-4 md:hidden"
          >
            <Link to="/" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-zinc-900">Home</Link>
            <Link to="/cabs" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-emerald-600">Cabs</Link>
            <Link to="/destinations" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-zinc-900">Destinations</Link>
            <Link to="/query" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-zinc-900">Enquiry</Link>
            <Link to="/#services" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-zinc-900">Services</Link>
            <Link to="/#packages" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-zinc-900">Packages</Link>
            <Link to="/#contact" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-zinc-900">Contact</Link>
            <a href={`tel:${CONTACT_INFO.phones[0]}`} className="flex items-center gap-3 text-emerald-600 font-bold text-lg py-2">
              <Phone size={20} />
              <span>{CONTACT_INFO.phones[0]}</span>
            </a>
            <Link to="/query" onClick={() => setMobileMenuOpen(false)}>
              <Button 
                className="bg-emerald-600 w-full mt-2"
              >
                Book a Cab
              </Button>
            </Link>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-48 pb-24 bg-zinc-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=2070" 
            alt="Cab Service" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/30 mb-6 py-1.5 px-4 text-sm">
              24/7 Reliable & Affordable
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Guwahati Taxi Service</h1>
            <p className="text-lg text-zinc-400 max-w-2xl mx-auto mb-10">
              Your trusted partner for 24/7 reliable taxi services in Guwahati. From airport transfers to local sightseeing and outstation trips across Northeast India.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: ShieldCheck, title: "Safe & Secure", desc: "Verified drivers and well-maintained vehicles for your safety." },
              { icon: Clock, title: "24/7 Availability", desc: "Round-the-clock service for airport drops and emergency travel." },
              { icon: Users, title: "Experienced Drivers", desc: "Professional drivers with deep knowledge of local routes." },
              { icon: Car, title: "Wide Fleet", desc: "Choose from Sedans, SUVs, and Tempo Travellers." }
            ].map((feature, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 shrink-0">
                  <feature.icon size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-zinc-900 mb-1">{feature.title}</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge className="bg-emerald-100 text-emerald-600 border-none mb-4 px-4 py-1">Our Fleet</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Choose Your Ride</h2>
          <p className="text-zinc-500 max-w-2xl mx-auto">We have a wide range of vehicles to suit your travel needs and budget.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {CAB_SERVICES.map((cab, index) => (
            <motion.div
              key={cab.type}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full overflow-hidden border-none shadow-xl hover:shadow-2xl transition-all duration-300 group">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={cab.image} 
                    alt={cab.type} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-emerald-600 text-white border-none px-4 py-1.5 text-sm shadow-lg">
                      {cab.capacity}
                    </Badge>
                  </div>
                </div>
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-3xl font-bold">{cab.type}</CardTitle>
                    <div className="text-right">
                      <div className="text-emerald-600 font-bold text-2xl">{cab.price}</div>
                      <div className="text-zinc-400 text-xs font-medium uppercase tracking-wider">Per Day</div>
                    </div>
                  </div>
                  <p className="text-zinc-500 text-sm font-medium">{cab.models}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-zinc-600 mb-6 leading-relaxed">{cab.description}</p>
                  <div className="space-y-3 mb-8">
                    {cab.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3 text-sm text-zinc-600">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <Button 
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white rounded-full py-6 text-lg group"
                    onClick={() => window.location.href = CONTACT_INFO.whatsapp}
                  >
                    Book {cab.type} <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Popular Routes */}
      <section className="py-24 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="bg-emerald-100 text-emerald-600 border-none mb-6 px-4 py-1">Popular Routes</Badge>
              <h2 className="text-4xl font-bold mb-8 leading-tight">Fixed Rate <br /> Airport & City Transfers</h2>
              <div className="space-y-4">
                {[
                  { route: "Guwahati Airport to Shillong", price: "₹2,500" },
                  { route: "Shillong to Guwahati Airport", price: "₹2,500" },
                  { route: "Guwahati City to Shillong", price: "₹2,500" },
                  { route: "Shillong to Mawlynnong", price: "₹3,800" },
                  { route: "Shillong to Cherrapunji", price: "₹3,200" }
                ].map((item, i) => (
                  <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-zinc-100 flex justify-between items-center group hover:border-emerald-200 transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-600">
                        <MapPin size={20} />
                      </div>
                      <span className="font-bold text-zinc-900">{item.route}</span>
                    </div>
                    <div className="text-emerald-600 font-bold text-lg">{item.price}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1518481612222-68bbe828ecd1?auto=format&fit=crop&q=80&w=2070" 
                  alt="Meghalaya Road Trip" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -top-10 -left-10 bg-white p-8 rounded-3xl shadow-xl hidden md:block max-w-xs border border-zinc-100">
                <div className="text-3xl font-bold text-emerald-600 mb-2">100%</div>
                <div className="font-bold text-zinc-900 mb-2">Punctuality Rate</div>
                <p className="text-zinc-500 text-sm">We value your time. Our drivers are always on time for pickups and drops.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="bg-emerald-600 rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -ml-32 -mt-32 blur-3xl" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-black/10 rounded-full -mr-32 -mb-32 blur-3xl" />
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to Book Your Ride?</h2>
            <p className="text-xl text-emerald-50 mb-12 max-w-2xl mx-auto">
              Contact us now for the best rates and customized travel plans. We are available 24/7 to assist you.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button 
                size="lg" 
                className="bg-white text-emerald-600 hover:bg-emerald-50 rounded-full px-10 py-8 text-xl font-bold shadow-xl"
                onClick={() => window.location.href = `tel:${CONTACT_INFO.phones[0]}`}
              >
                <Phone className="mr-3" /> Call Now
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-transparent border-white text-white hover:bg-white/10 rounded-full px-10 py-8 text-xl font-bold"
                onClick={() => window.location.href = CONTACT_INFO.whatsapp}
              >
                <WhatsAppIcon size={24} /> WhatsApp Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-12 px-6 border-t border-zinc-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-emerald-600 rounded flex items-center justify-center text-white font-bold text-lg">N</div>
            <span className="font-serif text-lg font-bold tracking-tight text-zinc-900">
              NYRAV <span className="text-emerald-500">TOURS AND TRAVELS</span>
            </span>
          </div>
          
          <div className="flex gap-8 text-sm font-medium text-zinc-500">
            <Link to="/" className="hover:text-emerald-600 transition-colors">Home</Link>
            <Link to="/cabs" className="hover:text-emerald-600 transition-colors">Cabs</Link>
            <Link to="/destinations" className="hover:text-emerald-600 transition-colors">Destinations</Link>
            <Link to="/query" className="hover:text-emerald-600 transition-colors">Enquiry</Link>
            <a href={CONTACT_INFO.website} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-600 transition-colors">Official Website</a>
            <a href={CONTACT_INFO.hPanel} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-600 transition-colors opacity-30 hover:opacity-100 text-[10px] uppercase font-bold self-center">hPanel Login</a>
          </div>

          <p className="text-zinc-400 text-sm">
            © 2026 NYRAV TOURS AND TRAVELS. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
