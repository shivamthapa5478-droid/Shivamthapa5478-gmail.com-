/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Palmtree, 
  Bus, 
  Hotel, 
  Ticket, 
  FileText, 
  Phone, 
  Mail, 
  MapPin, 
  CheckCircle2, 
  MessageCircle,
  Menu,
  X,
  ChevronRight,
  ArrowRight,
  Instagram,
  Facebook,
  Twitter,
  Youtube,
  ExternalLink,
  ChevronDown,
  Globe,
  Play,
  Star,
  Calendar,
  Clock,
  Car,
  Send,
  Search
} from "lucide-react";
import { useState, useEffect, FormEvent } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { SERVICES, DESTINATIONS, PACKAGES, GALLERY_IMAGES, VIDEOS, REVIEWS, CONTACT_INFO, TEAM_PHOTO } from "../constants";
import promoImage from "../assets/images/regenerated_image_1777778625824.png";
import packageImage1 from "../assets/images/regenerated_image_1777780523170.png";
import packageImage12 from "../assets/images/regenerated_image_1777794915339.jpg";
import packageImage2 from "../assets/images/regenerated_image_1777780711853.png";
import destImageCherrapunji from "../assets/images/regenerated_image_1777896247600.png";

const iconMap: Record<string, any> = {
  Palmtree,
  Bus,
  Hotel,
  Ticket,
  FileText
};

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

export default function HomePage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleQuickEnquiry = async (e: FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...data,
          mobile: "N/A (Quick Form)",
          email: "N/A (Quick Form)",
          source: "Home Page Quick Form"
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 5000);
        (e.target as HTMLFormElement).reset();
      }
    } catch (error) {
      console.error("Error submitting quick form:", error);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-zinc-50 selection:bg-emerald-100 selection:text-emerald-900">
      {/* Navbar */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "glass-nav py-3 shadow-sm" : "bg-transparent py-6"}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">N</div>
            <div className="flex flex-col group">
              <span className={`font-serif text-xl font-bold tracking-tight leading-tight ${isScrolled ? "text-zinc-900" : "text-white"}`}>
                NYRAV <span className="text-emerald-500">TOURS AND TRAVELS</span>
              </span>
              <div className="flex items-center gap-1.5 mt-0.5">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={10} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className={`text-[10px] font-bold tracking-wider uppercase ${isScrolled ? "text-zinc-400" : "text-white/60"}`}>4.9 Google Rating</span>
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className={`hidden md:flex items-center gap-8 font-medium ${isScrolled ? "text-zinc-600" : "text-white/90"}`}>
            <a href="#home" className="hover:text-emerald-500 transition-colors">Home</a>
            <Link to="/cabs" className="hover:text-emerald-500 transition-colors">Cabs</Link>
            <Link to="/destinations" className="hover:text-emerald-500 transition-colors">Destinations</Link>
            <Link to="/itinerary" className="hover:text-emerald-500 transition-colors text-emerald-500 font-bold border-b-2 border-emerald-500">Itinerary</Link>
            <Link to="/query" className="hover:text-emerald-500 transition-colors">Enquiry</Link>
            <a href={CONTACT_INFO.website} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-emerald-500 transition-colors group">
              <Globe size={16} className="text-emerald-500 group-hover:animate-pulse" />
              <span className="hidden lg:inline">{CONTACT_INFO.website.replace('https://', '')}</span>
            </a>
            <a href="#services" className="hover:text-emerald-500 transition-colors">Services</a>
            <a href="#packages" className="hover:text-emerald-500 transition-colors">Packages</a>
            <a href="#gallery" className="hover:text-emerald-500 transition-colors">Gallery</a>
            <a href="#about" className="hover:text-emerald-500 transition-colors">About</a>
            <a href="#contact" className="hover:text-emerald-500 transition-colors">Contact</a>
            <a href={`tel:${CONTACT_INFO.phones[0]}`} className="flex items-center gap-2 text-emerald-500 hover:text-emerald-400 transition-colors">
              <Phone size={18} />
              <span>{CONTACT_INFO.phones[0]}</span>
            </a>
          </div>

          <div className="hidden md:block">
            <Button 
              className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-full px-6"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Book Now
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className={isScrolled ? "text-zinc-900" : "text-white"} /> : <Menu className={isScrolled ? "text-zinc-900" : "text-white"} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-full left-0 w-full bg-white shadow-xl py-6 px-6 flex flex-col gap-4 md:hidden"
          >
            <a href="#home" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-zinc-900">Home</a>
            <Link to="/cabs" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-zinc-900">Cabs</Link>
            <Link to="/destinations" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-zinc-900">Destinations</Link>
            <Link to="/query" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-zinc-900">Enquiry</Link>
            <a href={CONTACT_INFO.website} target="_blank" rel="noopener noreferrer" className="text-lg font-medium text-emerald-600 flex items-center gap-2">
              <Globe size={20} />
              <span>Official Website</span>
            </a>
            <a href="#services" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-zinc-900">Services</a>
            <a href="#packages" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-zinc-900">Packages</a>
            <a href="#gallery" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-zinc-900">Gallery</a>
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-zinc-900">About</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-zinc-900">Contact</a>
            <a href={`tel:${CONTACT_INFO.phones[0]}`} className="flex items-center gap-3 text-emerald-600 font-bold text-lg py-2">
              <Phone size={20} />
              <span>{CONTACT_INFO.phones[0]}</span>
            </a>
            <Button 
              className="bg-emerald-600 w-full mt-2"
              onClick={() => {
                setMobileMenuOpen(false);
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Book Now
            </Button>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=2070" 
            alt="Misty Mountains" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 hero-gradient" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/30 mb-6 py-1.5 px-4 text-sm backdrop-blur-sm">
              Explore the Unexplored
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              24/7 <span className="text-emerald-500">Guwahati Taxi Service</span> <br /> & Tours with NYRAV
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
              Leading provider of 24/7 reliable Guwahati taxi services and customized Northeast India tour packages. Comfortable rides, professional drivers.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/query">
                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-full px-8 py-6 text-lg group shadow-lg shadow-emerald-600/20">
                  Plan Your Trip <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <a href={CONTACT_INFO.website} target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white/30 rounded-full px-8 py-6 text-lg backdrop-blur-sm flex items-center gap-2">
                  <Globe size={20} className="text-emerald-500" />
                  Visit Website
                </Button>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 flex flex-col items-center gap-2 cursor-pointer"
          onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/30 mb-1">Scroll</span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1 relative">
            <motion.div 
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-2 bg-emerald-500 rounded-full" 
            />
          </div>
          <ChevronDown size={14} className="text-emerald-500/50 mt-1" />
        </motion.div>
      </section>

      {/* Travel Details / Quick Enquiry Section */}
      <section className="relative z-20 -mt-16 px-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className="border-none shadow-2xl overflow-hidden rounded-[2rem] bg-white">
            <div className="p-8 md:p-10">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
                <div>
                  <h2 className="text-2xl font-bold text-zinc-900">Travel Details</h2>
                  <p className="text-zinc-500">Quickly plan your journey with us</p>
                </div>
                <div className="flex items-center gap-4">
                  <Badge className="bg-emerald-100 text-emerald-600 border-none px-4 py-1.5 text-sm">
                    24/7 Service
                  </Badge>
                </div>
              </div>

              <form onSubmit={handleQuickEnquiry} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-end">
                <div className="space-y-2">
                  <Label className="text-sm font-bold text-zinc-700 flex items-center gap-2">
                    <MapPin size={14} className="text-emerald-500" /> Pickup Location
                  </Label>
                  <Input name="pickup" placeholder="e.g. Guwahati Airport" required className="rounded-xl border-zinc-200 h-12 focus:border-emerald-500 focus:ring-emerald-500" />
                </div>
                <div className="space-y-2">
                  <Label className="text-sm font-bold text-zinc-700 flex items-center gap-2">
                    <MapPin size={14} className="text-emerald-500" /> Drop Location
                  </Label>
                  <Input name="drop" placeholder="e.g. Shillong" required className="rounded-xl border-zinc-200 h-12 focus:border-emerald-500 focus:ring-emerald-500" />
                </div>
                <div className="space-y-2">
                  <Label className="text-sm font-bold text-zinc-700 flex items-center gap-2">
                    <Calendar size={14} className="text-emerald-500" /> Travel Date
                  </Label>
                  <Input name="date" type="date" required className="rounded-xl border-zinc-200 h-12 focus:border-emerald-500 focus:ring-emerald-500" />
                </div>
                <div>
                  <Button type="submit" disabled={submitted} className={`w-full ${submitted ? 'bg-emerald-100 text-emerald-600' : 'bg-emerald-600 hover:bg-emerald-700 text-white'} rounded-xl h-12 font-bold shadow-lg shadow-emerald-200 group transition-all`}>
                    {submitted ? 'Submitted!' : 'Check Availability'} {!submitted && <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />}
                  </Button>
                </div>
              </form>
            </div>
          </Card>
        </motion.div>
      </section>

      {/* Featured Itinerary Promo */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 lg:gap-12 items-stretch bg-zinc-950 rounded-[3rem] overflow-hidden">
          <div className="lg:col-span-5 relative min-h-[400px]">
            <img 
              src={promoImage} 
              alt="Meghalaya Landscape"
              className="absolute inset-0 w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-emerald-950/20" />
            <div className="absolute top-8 left-8">
              <Badge className="bg-emerald-500 text-white border-none py-1.5 px-4 font-bold text-sm shadow-xl">
                Best Selling Tour
              </Badge>
            </div>
          </div>
          <div className="lg:col-span-7 p-8 md:p-16 text-white flex flex-col justify-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              🌄 Meghalaya 5 Night 6 Day <br />
              <span className="text-emerald-500">Ultimate Adventure</span>
            </h2>
            <p className="text-xl text-zinc-400 mb-8 max-w-xl leading-relaxed">
              Explore Shillong, Cherranpunjee, and Mawlynnong with our most detailed 6-day itinerary. Experience the magic of the Northeast.
            </p>
            <div className="grid grid-cols-2 gap-6 mb-12">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center shrink-0">
                  <Calendar className="text-emerald-500 w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">6 Full Days</h4>
                  <p className="text-zinc-500 text-sm">Action packed</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center shrink-0">
                  <Car className="text-emerald-500 w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">₹4,500/day</h4>
                  <p className="text-zinc-500 text-sm">Tour Price</p>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link to="/itinerary">
                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-full px-8 h-14 text-lg font-bold group">
                  View Detailed Itinerary <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/query">
                <Button size="lg" variant="outline" className="border-white/20 hover:bg-white/10 text-white rounded-full px-8 h-14 text-lg">
                  Send Enquiry
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Guwahati Specific Taxi Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="bg-emerald-100 text-emerald-600 border-none mb-4 px-4 py-1">Local & Airport Service</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Guwahati City Taxi Services</h2>
            <p className="text-zinc-500 max-w-2xl mx-auto">Providing round-the-clock transportation within Guwahati city and for all your outstation needs.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {[
              {
                title: "Airport Transfer",
                desc: "Fixed rate taxi from Guwahati Airport to City, Shillong, or Kaziranga. 24/7 pickup.",
                features: ["On-time Pickup", "Uniformed Drivers", "Luggage Support"],
                price: "₹600"
              },
              {
                title: "Railway Station Taxi",
                desc: "Reliable cabs from Guwahati Railway Station to any part of the city or Northeast.",
                features: ["Platform Pickup", "24/7 Availability", "Fair Pricing"],
                price: "₹300"
              },
              {
                title: "Local Sightseeing",
                desc: "Explore Kamakhya Temple, Umananda, and local markets with our expert drivers.",
                features: ["Daily Rental", "Expert Local Guide", "AC Comfort"],
                price: "₹2,000"
              },
              {
                title: "Guwahati to Shillong",
                desc: "Most popular route. Comfortable hatchbacks, sedans, and SUVs for your hill journey.",
                features: ["Scenic Stopovers", "Hill Experts", "Doorstep Drop"],
                price: "₹2,500"
              },
              {
                title: "Outstation Trips",
                desc: "Long distance taxis from Guwahati to Tawang, Cherranpunji, or Bhutan border.",
                features: ["Wide Vehicle Choice", "Interstate Permits", "Safety First"],
                price: "₹2,800"
              }
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-zinc-50 p-8 rounded-[2rem] border border-zinc-100 hover:border-emerald-200 transition-all group"
              >
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-emerald-600 mb-6 shadow-sm group-hover:bg-emerald-600 group-hover:text-white transition-all">
                  <Car size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-zinc-500 text-sm mb-6 leading-relaxed">{service.desc}</p>
                <div className="space-y-3 mb-8">
                  {service.features.map((f, j) => (
                    <div key={j} className="flex items-center gap-2 text-xs font-bold text-zinc-400 uppercase tracking-wider">
                      <CheckCircle2 size={14} className="text-emerald-500" /> {f}
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between pt-6 border-t border-zinc-200/60">
                  <span className="text-2xl font-bold text-emerald-600">{service.price}</span>
                  <Link to="/query">
                    <Button variant="ghost" className="text-emerald-600 hover:text-emerald-700 p-0 font-bold group/btn">
                      Book Taxi <ChevronRight size={18} className="translate-x-0 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tour Packages Section */}
      {PACKAGES.length > 0 && (
        <section id="packages" className="py-24 px-6 max-w-7xl mx-auto bg-zinc-50 rounded-3xl my-12">
          <div className="text-center mb-16">
            <Badge className="bg-emerald-100 text-emerald-600 border-none mb-4 px-4 py-1">Featured Packages</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Top Tour Packages</h2>
            <p className="text-zinc-500 max-w-2xl mx-auto">Discover our handpicked tour packages designed for the best travel experiences.</p>
          </div>

          <div className="relative px-12">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-4 md:-ml-8">
                {PACKAGES.map((pkg, index) => (
                  <CarouselItem key={pkg.title} className="pl-4 md:pl-8 md:basis-1/2 lg:basis-1/3">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 }}
                      className="bg-white rounded-3xl overflow-hidden shadow-lg border border-zinc-100 flex flex-col h-full"
                    >
                      <div className="relative h-64">
                        <img 
                          src={index === 0 ? packageImage1 : index === 1 ? packageImage2 : index === 11 ? packageImage12 : pkg.image} 
                          alt={pkg.title} 
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full font-bold text-emerald-600 shadow-sm">
                          <span className="text-zinc-400 line-through text-sm mr-2 font-normal">₹{pkg.originalPrice}</span>
                          ₹{pkg.bestPrice}
                        </div>
                      </div>
                      <div className="p-8 flex-1 flex flex-col">
                        <h3 className="text-2xl font-bold mb-4">{pkg.title}</h3>
                        <div className="mb-6 flex-1">
                          <h4 className="font-semibold text-zinc-900 mb-3 flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-emerald-500" /> Top Attractions:
                          </h4>
                          <ul className="space-y-2">
                            {pkg.attractions.map((attr, i) => (
                              <li key={i} className="flex items-start gap-2 text-zinc-600 text-sm">
                                <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                                <span>{attr}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <Link to="/query">
                          <Button 
                            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white rounded-full py-6 text-lg"
                          >
                            Book Now
                          </Button>
                        </Link>
                      </div>
                    </motion.div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex -left-4 md:-left-12 bg-white text-emerald-600 border-none hover:bg-emerald-50 hover:text-emerald-700 shadow-xl h-14 w-14" />
              <CarouselNext className="hidden md:flex -right-4 md:-right-12 bg-white text-emerald-600 border-none hover:bg-emerald-50 hover:text-emerald-700 shadow-xl h-14 w-14" />
            </Carousel>
          </div>
        </section>
      )}

      {/* Services Section */}
      <section id="services" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Premium Services</h2>
          <p className="text-zinc-500 max-w-2xl mx-auto">Everything you need for a perfect journey, handled with care by our expert team.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full border-none shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-50 rounded-bl-full -mr-12 -mt-12 transition-all group-hover:bg-emerald-100" />
                  <CardHeader>
                    <div className="w-14 h-14 bg-emerald-600 rounded-2xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                      <Icon size={28} />
                    </div>
                    <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                    <p className="text-zinc-500 text-sm leading-relaxed">{service.description}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {service.items.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-sm text-zinc-600">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    {service.title === "Holiday Packages" && (
                      <Button 
                        variant="outline" 
                        className="w-full border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white rounded-full"
                        onClick={() => document.getElementById('packages')?.scrollIntoView({ behavior: 'smooth' })}
                      >
                        View All Packages
                      </Button>
                    )}
                    {service.title === "Transportation" && (
                      <Link to="/cabs">
                        <Button 
                          variant="outline" 
                          className="w-full border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white rounded-full"
                        >
                          View Cab Options
                        </Button>
                      </Link>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Destinations Section */}
      <section id="destinations" className="py-24 bg-zinc-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Explore Northeast India</h2>
              <p className="text-zinc-400 max-w-xl">Discover the hidden gems of Meghalaya, Assam, and Arunachal Pradesh with our curated destinations.</p>
            </div>
            <Link to="/destinations">
              <Button variant="link" className="text-emerald-500 p-0 h-auto text-lg hover:text-emerald-400">
                Explore All Destinations <ChevronRight className="ml-1 w-5 h-5" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {DESTINATIONS.slice(0, 6).map((dest, index) => (
              <motion.div
                key={dest.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative group cursor-pointer rounded-3xl overflow-hidden aspect-[4/5]"
                onClick={() => window.location.href = '/destinations'}
              >
                <img 
                  src={dest.name === "Cherrapunji" ? destImageCherrapunji : dest.image} 
                  alt={dest.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <h3 className="text-3xl font-bold mb-4">{dest.name}</h3>
                  <div className="flex flex-wrap gap-2">
                    {dest.locations.map(loc => (
                      <Badge key={loc} variant="outline" className="bg-white/10 border-white/20 text-white/90 backdrop-blur-sm">
                        {loc}
                      </Badge>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge className="bg-emerald-100 text-emerald-600 border-none mb-4 px-4 py-1">Our Gallery</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Memories from Our Tours</h2>
          <p className="text-zinc-500 max-w-2xl mx-auto">Take a look at some of the beautiful moments captured during our recent trips.</p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {GALLERY_IMAGES.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group overflow-hidden rounded-3xl break-inside-avoid"
            >
              <img 
                src={index === 10 ? packageImage2 : image.url} 
                alt={image.title} 
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <p className="text-white font-bold text-xl">{image.title}</p>
              </div>
            </motion.div>
          ))}
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative group overflow-hidden rounded-3xl break-inside-avoid bg-emerald-600 p-8 flex flex-col items-center justify-center text-center gap-4 aspect-square"
          >
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-white">
              <Instagram size={32} />
            </div>
            <h3 className="text-xl font-bold text-white">Share Your Trip</h3>
            <p className="text-emerald-100 text-sm">Upload your favorite tour memories and get featured on our website!</p>
            <Link to="/query">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-emerald-600 rounded-full">
                Upload Photo
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src={TEAM_PHOTO} 
                alt="NYRAV Team" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 bg-white p-8 rounded-3xl shadow-xl hidden md:block max-w-xs border border-zinc-100">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">
                  <CheckCircle2 size={24} />
                </div>
                <div className="font-bold text-zinc-900">Trusted Agency</div>
              </div>
              <p className="text-zinc-500 text-sm">Dedicated to delivering seamless and safe travel experiences across the globe.</p>
            </div>
          </div>

          <div>
            <Badge className="bg-emerald-100 text-emerald-600 border-none mb-6 px-4 py-1">About Us</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              Your Journey, <br /> Our Responsibility
            </h2>
            <p className="text-zinc-600 text-lg mb-8 leading-relaxed">
              NYRAV TOURS AND TRAVELS is Guwahati's premier taxi service and tour provider, dedicated to delivering safe and seamless travel experiences. From reliable airport transfers to curated Northeast India tours, we specialize in making every journey memorable.
            </p>
            <p className="text-zinc-600 text-lg mb-10 leading-relaxed">
              We believe travel is not just about reaching a destination — it's about experiencing the journey. We ensure comfort, safety, and memorable moments for every traveler.
            </p>
            
            <div className="grid grid-cols-2 gap-8">
              <div>
                <div className="text-4xl font-bold text-emerald-600 mb-2">10+</div>
                <div className="text-zinc-500 font-medium">Years Experience</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-emerald-600 mb-2">5k+</div>
                <div className="text-zinc-500 font-medium">Happy Travelers</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-emerald-600 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose NYRAV?</h2>
            <p className="text-emerald-100 max-w-2xl mx-auto">We go the extra mile to ensure your trip is nothing short of extraordinary.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Affordable Pricing", desc: "Best value for your money without compromising quality." },
              { title: "Customized Packages", desc: "Tours tailored exactly to your preferences and needs." },
              { title: "24/7 Support", desc: "We are always here for you, anytime, anywhere." },
              { title: "Trusted Team", desc: "Experienced professionals who know travel inside out." }
            ].map((item, i) => (
              <motion.div 
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/20"
              >
                <div className="w-12 h-12 bg-white text-emerald-600 rounded-xl flex items-center justify-center mb-6 font-bold text-xl">
                  {i + 1}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-emerald-50/80 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="bg-emerald-100 text-emerald-600 border-none mb-4 px-4 py-1">Testimonials</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">What Our Travelers Say</h2>
            <p className="text-zinc-500 max-w-2xl mx-auto mb-8">Real stories from real people who explored the world with NYRAV.</p>
            <a 
              href={CONTACT_INFO.googleReview} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white border border-zinc-200 px-6 py-3 rounded-full shadow-sm hover:shadow-md transition-all group"
            >
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="font-bold text-zinc-900">4.9 on Google</span>
              <span className="text-zinc-400">|</span>
              <span className="text-emerald-600 font-medium group-hover:underline">Write a review</span>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {REVIEWS.map((review, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-[2rem] shadow-xl border border-zinc-100 flex flex-col"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} size={18} className="fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" alt="Google" className="h-4 opacity-50" />
                </div>
                <p className="text-zinc-600 italic mb-8 flex-1">"{review.text}"</p>
                <div className="flex items-center gap-4">
                  <img 
                    src={review.avatar} 
                    alt={review.name} 
                    className="w-12 h-12 rounded-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <div className="font-bold text-zinc-900">{review.name}</div>
                    <div className="text-zinc-400 text-sm">{review.location}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Google My Business Section */}
      <section className="py-24 bg-white border-t border-zinc-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center">
                  <Globe className="text-emerald-600 w-6 h-6" />
                </div>
                <Badge variant="outline" className="text-emerald-600 border-emerald-200">Google Verified Business</Badge>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Verified on Google</h2>
              <p className="text-zinc-600 text-lg mb-8 leading-relaxed">
                NYRAV TOURS AND TRAVELS is a verified Google business across Northeast India. We pride ourselves on transparency, customer trust, and 100% reliable service delivery.
              </p>
              <div className="space-y-4 mb-10">
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-zinc-50 border border-zinc-100">
                  <div className="w-10 h-10 bg-amber-50 rounded-full flex items-center justify-center text-amber-500 font-bold">4.9</div>
                  <div>
                    <div className="font-bold">Average Rating</div>
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-zinc-50 border border-zinc-100">
                  <div className="w-10 h-10 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-500 font-bold">24/7</div>
                  <div>
                    <div className="font-bold">Active Support</div>
                    <div className="text-zinc-500 text-sm">Response on Google Maps</div>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <a href={CONTACT_INFO.googleMaps} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-full px-8 h-14">
                    View on Google Maps
                  </Button>
                </a>
                <a href={CONTACT_INFO.googleReview} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="outline" className="border-zinc-200 text-zinc-900 rounded-full px-8 h-14 hover:bg-zinc-50">
                    See All Reviews
                  </Button>
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="bg-zinc-100 p-2 rounded-[2.5rem] shadow-2xl border border-zinc-200 overflow-hidden aspect-video lg:aspect-square">
                   <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14324.05972618!2d91.7447!3d26.175!2m3!1f0!2f0!3f0!3m2!i1024!2i768!4f13.1!3m3!1m2!1s0x375a597a1f1f1f1f%3A0x1f1f1f1f1f1f1f1f!2sNYRAV%20TOURS%20AND%20TRAVELS!5e0!3m2!1sen!2sin!4v1713080000000!5m2!1sen!2sin" 
                      width="100%" 
                      height="100%" 
                      style={{ border: 0 }} 
                      allowFullScreen={true} 
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade"
                      className="rounded-[2rem]"
                    ></iframe>
              </div>
              {/* Floating review badge */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-6 -left-6 bg-white p-6 rounded-3xl shadow-xl border border-zinc-100 max-w-[240px] hidden md:block"
              >
                 <div className="flex items-center gap-2 mb-2">
                   <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" alt="Google" className="h-4" />
                   <span className="text-xs font-bold text-zinc-400">Business Profile</span>
                 </div>
                 <div className="font-bold text-zinc-900 mb-1">Excellent Service!</div>
                 <p className="text-xs text-zinc-500 mb-3 line-clamp-2">"Nyrav Travels provided the best car booking service for our Shillong tour. The driver was very friendly..."</p>
                 <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={10} className="fill-amber-400 text-amber-400" />
                    ))}
                 </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="bg-zinc-900 rounded-[3rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row">
          <div className="p-12 lg:p-20 lg:w-1/2">
            <h2 className="text-4xl font-bold text-white mb-8">Get In Touch</h2>
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-emerald-600 rounded-2xl flex items-center justify-center text-white shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <div className="text-zinc-400 text-sm mb-1">Call or WhatsApp</div>
                  {CONTACT_INFO.phones.map((phone, idx) => (
                    <a 
                      key={idx} 
                      href={`tel:${phone}`} 
                      className="block text-white text-xl font-medium hover:text-emerald-400 transition-colors"
                    >
                      {phone}
                    </a>
                  ))}
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-emerald-600 rounded-2xl flex items-center justify-center text-white shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <div className="text-zinc-400 text-sm mb-1">Email Us</div>
                  {CONTACT_INFO.emails.map((email, idx) => (
                    <a 
                      key={idx} 
                      href={`mailto:${email}`}
                      className="block text-white text-xl font-medium hover:text-emerald-400 transition-colors"
                    >
                      {email}
                    </a>
                  ))}
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-emerald-600 rounded-2xl flex items-center justify-center text-white shrink-0">
                  <Globe size={24} />
                </div>
                <div>
                  <div className="text-zinc-400 text-sm mb-1">Official Website</div>
                  <a 
                    href={CONTACT_INFO.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-xl font-medium hover:text-emerald-400 transition-colors"
                  >
                    {CONTACT_INFO.website.replace('https://', '')}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-emerald-600 rounded-2xl flex items-center justify-center text-white shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <div className="text-zinc-400 text-sm mb-1">Our Location</div>
                  <div className="text-white text-lg font-medium leading-relaxed">{CONTACT_INFO.address}</div>
                  <a 
                    href={CONTACT_INFO.googleMaps} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-emerald-500 hover:text-emerald-400 mt-4 font-medium transition-colors"
                  >
                    View on Google Maps <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-12 flex flex-wrap gap-4">
              <a href="https://www.facebook.com/share/1BfcaueaRa/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-emerald-600 transition-colors" title="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://www.instagram.com/nyrav_tours_and_travels_?igsh=NHZ2NXJoYzNoZ2Vv" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-emerald-600 transition-colors" title="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://youtube.com/@nyravtoursandtravels?si=y1pg-xyA5AJ8aBgw" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-emerald-600 transition-colors" title="YouTube">
                <Youtube size={20} />
              </a>
              <a href={CONTACT_INFO.googleSearch} target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-emerald-600 transition-colors" title="Search us on Google">
                <Search size={20} />
              </a>
              <a href={CONTACT_INFO.googleMaps} target="_blank" rel="noopener noreferrer" className="px-6 h-12 bg-emerald-600/20 border border-emerald-600/30 rounded-full flex items-center justify-center gap-2 text-emerald-400 hover:bg-emerald-600 hover:text-white transition-all transform hover:scale-105" title="Our Google Business Page">
                <Globe size={18} />
                <span className="text-sm font-bold">Google My Business</span>
              </a>
            </div>
          </div>

          <div className="bg-zinc-800 p-4 lg:p-8 lg:w-1/2">
            <div className="w-full h-full min-h-[400px] rounded-2xl overflow-hidden shadow-inner">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3581.0264157585!2d91.7447!3d26.175!2m3!1f0!2f0!3f0!3m2!i1024!2i768!4f13.1!3m3!1m2!1s0x375a597a1f1f1f1f%3A0x1f1f1f1f1f1f1f1f!2sRehabari%2C%20Guwahati%2C%20Assam%20781008!5e0!3m2!1sen!2sin!4v1713080000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      
      {/* Search Keywords Section */}
      <section className="bg-zinc-50 py-12 px-6 border-t border-zinc-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-sm">
            <div>
              <h4 className="font-bold text-zinc-900 mb-4 opacity-50 uppercase tracking-wider text-xs">Popular Search Keywords</h4>
              <ul className="text-zinc-400 space-y-2">
                <li>Best Taxi Service in Guwahati</li>
                <li>Guwahati to Shillong Taxi</li>
                <li>Shillong Local Sightseeing</li>
                <li>Outstation Taxi Guwahati</li>
                <li>Reliable Guwahati Cab Service</li>
                <li>24/7 Taxi Service Guwahati</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-zinc-900 mb-4 opacity-50 uppercase tracking-wider text-xs">Tour Packages</h4>
              <ul className="text-zinc-400 space-y-2">
                <li>Tawang Arunachal Pradesh Tours</li>
                <li>Mawlynnong Village Tour</li>
                <li>Cherrapunji Adventure Trips</li>
                <li>Majuli Island Cultural Tour</li>
                <li>Nagaland Hornbill Festival</li>
                <li>Manas National Park Tour</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-zinc-900 mb-4 opacity-50 uppercase tracking-wider text-xs">Our Fleet Services</h4>
              <ul className="text-zinc-400 space-y-2">
                <li>Guwahati Taxi Service</li>
                <li>Innova Crysta Rental Guwahati</li>
                <li>Tempo Traveller for Large Groups</li>
                <li>Guwahati Airport Taxi Service</li>
                <li>Luxury SUV Hire for Meghalaya</li>
                <li>Affordable Cab Service Guwahati</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-zinc-900 mb-4 opacity-50 uppercase tracking-wider text-xs">Areas We Serve</h4>
              <ul className="text-zinc-400 space-y-2">
                <li>Guwahati, Assam</li>
                <li>Shillong & Cherrapunji, Meghalaya</li>
                <li>Kaziranga & Manas, Assam</li>
                <li>Tawang & Bomdila, Arunachal</li>
                <li>Dimapur & Kohima, Nagaland</li>
                <li>Agartala, Tripura</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-16 px-6 border-t border-zinc-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-emerald-600 rounded flex items-center justify-center text-white font-bold text-lg">N</div>
              <span className="font-serif text-lg font-bold tracking-tight text-zinc-900">
                NYRAV <span className="text-emerald-500">TOURS AND TRAVELS</span>
              </span>
            </div>
            <p className="text-zinc-500 text-sm leading-relaxed mb-6">
              Your trusted partner for exploring the hidden beauty of Northeast India. 24/7 service with professional local experts.
            </p>
            <div className="flex gap-4">
               <a href={CONTACT_INFO.googleMaps} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-zinc-50 border border-zinc-100 rounded-lg flex items-center justify-center text-zinc-400 hover:text-emerald-600 hover:border-emerald-200 transition-all">
                 <MapPin size={20} />
               </a>
               <a href={CONTACT_INFO.googleReview} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-zinc-50 border border-zinc-100 rounded-lg flex items-center justify-center text-zinc-400 hover:text-emerald-600 hover:border-emerald-200 transition-all">
                 <Star size={20} />
               </a>
               <a href={CONTACT_INFO.googleSearch} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-zinc-50 border border-zinc-100 rounded-lg flex items-center justify-center text-zinc-400 hover:text-emerald-600 hover:border-emerald-200 transition-all">
                 <Search size={20} />
               </a>
            </div>
          </div>

          <div>
             <h4 className="font-bold text-zinc-900 mb-6 uppercase tracking-wider text-xs">Quick Links</h4>
             <ul className="space-y-4 text-sm font-medium text-zinc-500">
               <li><a href="#home" className="hover:text-emerald-600 transition-colors">Home</a></li>
               <li><Link to="/cabs" className="hover:text-emerald-600 transition-colors">Cab Services</Link></li>
               <li><Link to="/destinations" className="hover:text-emerald-600 transition-colors">Destinations</Link></li>
               <li><Link to="/query" className="hover:text-emerald-600 transition-colors">Request a Quote</Link></li>
               <li><a href="#packages" className="hover:text-emerald-600 transition-colors">Tour Packages</a></li>
               <li>
                 <a 
                   href={CONTACT_INFO.hPanel} 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="hover:text-emerald-600 transition-colors text-[10px] uppercase font-bold opacity-30 hover:opacity-100 flex items-center gap-1 mt-4"
                 >
                   hPanel Login
                 </a>
               </li>
             </ul>
          </div>

          <div>
             <h4 className="font-bold text-zinc-900 mb-6 uppercase tracking-wider text-xs">Contact Us</h4>
             <ul className="space-y-4 text-sm text-zinc-500">
                <li className="flex items-start gap-3">
                  <MapPin size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                  <span>{CONTACT_INFO.address}</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={16} className="text-emerald-500 shrink-0" />
                  <span>{CONTACT_INFO.phones[0]}</span>
                </li>
                <li className="flex items-start gap-3">
                  <Mail size={16} className="text-emerald-500 shrink-0 mt-1" />
                  <div className="flex flex-col">
                    {CONTACT_INFO.emails.map((email, idx) => (
                      <a key={idx} href={`mailto:${email}`} className="hover:text-emerald-600 transition-colors">
                        {email}
                      </a>
                    ))}
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <Globe size={16} className="text-emerald-500 shrink-0" />
                  <a href={CONTACT_INFO.website} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-600 transition-colors">
                    {CONTACT_INFO.website.replace('https://', '')}
                  </a>
                </li>
             </ul>
          </div>

          <div>
             <h4 className="font-bold text-zinc-900 mb-6 uppercase tracking-wider text-xs">Verified Business</h4>
             <div className="bg-zinc-50 border border-zinc-100 p-6 rounded-2xl">
                <div className="flex items-center gap-2 mb-4">
                  <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" alt="Google" className="h-4" />
                  <span className="text-[10px] font-bold text-zinc-400">BUSINESS</span>
                </div>
                <div className="flex items-center gap-1 mb-2">
                   {[...Array(5)].map((_, i) => (
                     <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
                   ))}
                   <span className="text-sm font-bold ml-1 text-zinc-900">4.9/5</span>
                </div>
                <p className="text-xs text-zinc-500 mb-4">Rated as one of the best travel agencies in Guwahati by our travelers.</p>
                <a href={CONTACT_INFO.googleReview} target="_blank" rel="noopener noreferrer" className="text-emerald-600 text-xs font-bold hover:underline inline-flex items-center gap-1">
                   View Reviews <ArrowRight size={12} />
                </a>
             </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto pt-8 border-t border-zinc-100 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-zinc-400 text-xs text-center md:text-left">
            © 2026 NYRAV TOURS AND TRAVELS. All rights reserved. Registered with Assam Tourism.
          </p>
          <div className="flex items-center gap-6">
             <a href="#" className="text-xs text-zinc-400 hover:text-zinc-600">Privacy Policy</a>
             <a href="#" className="text-xs text-zinc-400 hover:text-zinc-600">Terms of Service</a>
          </div>
        </div>
      </footer>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-8 right-8 flex flex-col gap-4 z-50">
        {/* Call Button */}
        <div className="relative group">
          <div className="absolute inset-0 bg-emerald-500 rounded-full animate-ping opacity-20"></div>
          <a 
            href={`tel:${CONTACT_INFO.phones[0]}`}
            className="relative w-16 h-16 bg-emerald-600 text-white rounded-full flex items-center justify-center shadow-2xl hover:bg-emerald-700 transition-all hover:scale-110"
          >
            <Phone size={32} />
            <span className="absolute right-full mr-4 bg-white text-zinc-900 px-4 py-2 rounded-lg shadow-lg text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-zinc-100">
              Call us now!
            </span>
          </a>
        </div>

        {/* WhatsApp Button */}
        <div className="relative group">
          <div className="absolute inset-0 bg-green-400 rounded-full animate-ping opacity-25"></div>
          <a 
            href={CONTACT_INFO.whatsapp} 
            target="_blank" 
            rel="noopener noreferrer"
            className="relative w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center shadow-2xl hover:bg-green-600 transition-all hover:scale-110"
          >
            <WhatsAppIcon size={32} />
            <span className="absolute right-full mr-4 bg-white text-zinc-900 px-4 py-2 rounded-lg shadow-lg text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-zinc-100">
              Chat with us!
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
