/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { 
  Github, 
  Linkedin, 
  Mail, 
  Cpu, 
  ShieldCheck, 
  Globe, 
  Terminal, 
  Database, 
  Layers, 
  ChevronRight,
  ExternalLink,
  Code2,
  Lock,
  CircuitBoard
} from "lucide-react";
import { useState, useEffect } from "react";

// --- Types ---
interface Project {
  id: string;
  title: string;
  desc: string;
  tags: string[];
  category: 'web' | 'embedded' | 'cyber';
}

// --- Constants ---
const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Distributed Sensor Hub',
    desc: 'Real-time monitoring system for IoT mesh networks using MQTT and ESP32 nodes.',
    tags: ['C++', 'MQTT', 'React', 'Node.js'],
    category: 'embedded'
  },
  {
    id: '2',
    title: 'Zero-Trust Auth Bridge',
    desc: 'Security layer implementing OAuth2 with hardware-backed TOTP verification.',
    tags: ['Python', 'Rust', 'Cybersecurity'],
    category: 'cyber'
  },
  {
    id: '3',
    title: 'Enterprise AI Dashboard',
    desc: 'Full-stack analytics portal with predictive modeling for supply chain management.',
    tags: ['TypeScript', 'Next.js', 'PostgreSQL'],
    category: 'web'
  },
  {
    id: '4',
    title: 'RTOS Task Scheduler',
    desc: 'Custom preemptive scheduler optimized for ARM Cortex-M architecture with low latency.',
    tags: ['C', 'Assembly', 'Embedded'],
    category: 'embedded'
  }
];

const SKILLS = {
  web: ['TypeScript', 'Next.js', 'Go', 'Tailwind', 'PostgreSQL', 'Docker'],
  embedded: ['RTOS', 'C/C++', 'FPGA', 'PCB Design', 'SPI/I2C', 'ARM Cortex'],
  cyber: ['Pen-Testing', 'Threat Modeling', 'Crypto', 'Kali', 'Wireshark', 'IAM']
};

export default function App() {
  const [activeTab, setActiveTab] = useState<'all' | 'web' | 'embedded' | 'cyber'>('all');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen font-sans selection:bg-brand selection:text-black scroll-smooth">
      {/* Background Decor */}
      <div className="fixed inset-0 tech-grid pointer-events-none -z-10 opacity-40" />
      <div className="fixed top-0 left-0 w-full h-screen bg-gradient-to-b from-transparent via-[#050505]/50 to-[#050505] pointer-events-none -z-10" />

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#050505]/80 backdrop-blur-md border-b border-white/10' : ''}`}>
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-brand rounded-full overflow-hidden flex items-center justify-center border-2 border-brand/50">
              <span className="text-black font-mono font-bold text-lg">Z</span>
            </div>
            <span className="font-mono tracking-tighter text-xl font-bold">ZIKORA.<span className="text-brand">NKEMDIRIM</span></span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-mono opacity-60 uppercase tracking-widest">
            <a href="#about" className="hover:text-brand transition-colors">01. About</a>
            <a href="#projects" className="hover:text-brand transition-colors">02. Projects</a>
            <a href="#skills" className="hover:text-brand transition-colors">03. Intel</a>
            <a href="#contact" className="hover:text-brand transition-colors text-brand">04. Terminal</a>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-6 min-h-[90vh] flex flex-col justify-center max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <span className="inline-block px-3 py-1 bg-brand/10 border border-brand/20 text-brand font-mono text-xs mb-6 uppercase tracking-[0.2em]">
                Computer Engineer // Professional Innovator
              </span>
              <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-none mb-8">
                ZIKORA <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand via-embed to-cyber animate-gradient-x">NKEMDIRIM</span>
              </h1>
              <p className="max-w-2xl text-lg text-gray-400 font-medium leading-relaxed mb-10">
                Crafting robust digital solutions at the intersection of hardware and software. 
                Specializing in <span className="text-white hover:text-brand transition-colors cursor-help italic">Web Development</span>, 
                <span className="text-white hover:text-embed transition-colors cursor-help italic"> Embedded Systems</span>, and 
                <span className="text-white hover:text-cyber transition-colors cursor-help italic"> Cybersecurity</span>.
              </p>

              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-4 bg-brand text-black font-bold uppercase tracking-widest text-sm hover:scale-105 transition-transform flex items-center gap-2">
                  Contact Me <ChevronRight className="w-4 h-4" />
                </button>
                <div className="flex items-center gap-4 px-4 bg-white/5 border border-white/10 rounded-md backdrop-blur-sm">
                  <Github className="w-5 h-5 opacity-60 hover:opacity-100 cursor-pointer transition-opacity" />
                  <Linkedin className="w-5 h-5 opacity-60 hover:opacity-100 cursor-pointer transition-opacity" />
                  <Mail className="w-5 h-5 opacity-60 hover:opacity-100 cursor-pointer transition-opacity" />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative z-10 w-full aspect-[4/5] max-w-md mx-auto overflow-hidden rounded-2xl border-2 border-white/10 group">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800" 
                  alt="Zikora Nkemdirim"
                  className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700 ease-in-out"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-60" />
                
                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-brand/50 -z-10" />
                <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-embed/50 -z-10" />
              </div>
              
              {/* Floating Tech Tag */}
              <div className="absolute -bottom-6 right-10 bg-[#050505] border border-white/10 p-4 rounded-lg shadow-2xl backdrop-blur-md z-20">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-brand animate-pulse" />
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/60">System Online</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Categories Section */}
        <section id="about" className="py-24 px-6 border-y border-white/5 bg-white/[0.02]">
          <div className="max-w-7xl mx-auto grid md:grid-columns-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
            {[
              { 
                icon: Globe, 
                title: 'Web Dev', 
                color: 'text-brand',
                desc: 'Architecture of scalable, low-latency web applications with a focus on type safety and user experience.' 
              },
              { 
                icon: Cpu, 
                title: 'Embedded', 
                color: 'text-embed',
                desc: 'Bare-metal programming and real-time operating systems for mission-critical hardware environments.' 
              },
              { 
                icon: ShieldCheck, 
                title: 'Cybersecurity', 
                color: 'text-cyber',
                desc: 'Securing the stack through proactive threat modeling, penetration testing, and cryptographic implementations.' 
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ backgroundColor: 'rgba(255,255,255,0.02)' }}
                className="p-12 transition-colors relative"
              >
                <item.icon className={`w-12 h-12 mb-8 ${item.color}`} />
                <h3 className="text-2xl font-bold mb-4 font-mono">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                <div className="mt-8 flex items-center gap-2 text-xs font-mono opacity-40 hover:opacity-100 transition-opacity cursor-pointer">
                  CORE_PROTOCOL.v2 <ChevronRight className="w-3 h-3" />
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Projects Preview */}
        <section id="projects" className="py-32 px-6 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div>
              <span className="text-brand font-mono text-sm mb-4 block">02. RECENT WORKS</span>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Technical Portfolio</h2>
            </div>
            <div className="flex p-1 bg-white/5 border border-white/10 rounded-lg overflow-x-auto no-scrollbar">
              {['all', 'web', 'embedded', 'cyber'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab as any)}
                  className={`px-6 py-2 rounded-md text-xs font-mono uppercase tracking-widest transition-all ${
                    activeTab === tab ? 'bg-brand text-black' : 'opacity-60 hover:opacity-100'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <AnimatePresence mode="popLayout">
              {PROJECTS
                .filter(p => activeTab === 'all' || p.category === activeTab)
                .map((project) => (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="group relative bg-[#0a0a0a] border border-white/5 hover:border-brand/40 overflow-hidden"
                  >
                    <div className="aspect-video bg-gradient-to-br from-white/5 to-transparent relative overflow-hidden">
                      {/* Abstract Tech Graphic */}
                      <div className="absolute inset-0 opacity-20 group-hover:scale-110 transition-transform duration-700">
                        {project.category === 'embedded' && <CircuitBoard className="absolute -right-10 -bottom-10 w-64 h-64 rotate-12" />}
                        {project.category === 'cyber' && <Lock className="absolute -right-10 -bottom-10 w-64 h-64 rotate-12" />}
                        {project.category === 'web' && <Code2 className="absolute -right-10 -bottom-10 w-64 h-64 rotate-12" />}
                      </div>
                      
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
                      <div className="absolute bottom-6 left-6 right-6">
                        <div className="flex gap-2 mb-3">
                          {project.tags.map(tag => (
                            <span key={tag} className="px-2 py-0.5 bg-white/10 border border-white/10 text-[10px] font-mono opacity-80 backdrop-blur-md">
                              {tag}
                            </span>
                          ))}
                        </div>
                        <h4 className="text-2xl font-bold group-hover:text-brand transition-colors flex items-center justify-between">
                          {project.title}
                          <ExternalLink className="w-5 h-5 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-300" />
                        </h4>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-gray-400 text-sm leading-relaxed mb-6">
                        {project.desc}
                      </p>
                      <button className="text-xs font-mono text-brand flex items-center gap-2 group/btn">
                        READ_SPEC.md <ChevronRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </section>

        {/* Skill Matrix */}
        <section id="skills" className="py-32 px-6 bg-[#080808] border-y border-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-12 gap-16">
              <div className="lg:col-span-4">
                <span className="text-brand font-mono text-sm mb-4 block">03. TECHNOLOGY MATRIX</span>
                <h2 className="text-4xl font-bold tracking-tight mb-8">Specialized Knowledge Base</h2>
                <p className="text-gray-400 text-sm leading-loose">
                  Engineered to operate at any layer of the technology stack, from bare-metal C to cloud-native browser applications.
                </p>
                
                <div className="mt-12 space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-1 shadow-[0_0_15px_rgba(0,255,194,0.3)] bg-brand" />
                    <span className="text-xs font-mono uppercase tracking-widest">Active Research</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-1 bg-white/20" />
                    <span className="text-xs font-mono uppercase tracking-widest">Legacy Expert</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-8 grid md:grid-cols-2 gap-px bg-white/10 p-px">
                <div className="bg-[#080808] p-8">
                  <h5 className="flex items-center gap-2 font-mono text-xs uppercase mb-8 text-brand">
                    <Globe className="w-4 h-4" /> Web Infrastructure
                  </h5>
                  <div className="grid grid-cols-2 gap-y-4 gap-x-2">
                    {SKILLS.web.map(skill => (
                      <div key={skill} className="flex items-center gap-2 group">
                        <div className="w-1 h-1 bg-brand" />
                        <span className="text-sm font-medium opacity-60 group-hover:opacity-100 transition-opacity">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-[#080808] p-8">
                  <h5 className="flex items-center gap-2 font-mono text-xs uppercase mb-8 text-embed">
                    <Cpu className="w-4 h-4" /> Hardware / Low-Level
                  </h5>
                  <div className="grid grid-cols-2 gap-y-4 gap-x-2">
                    {SKILLS.embedded.map(skill => (
                      <div key={skill} className="flex items-center gap-2 group">
                        <div className="w-1 h-1 bg-embed" />
                        <span className="text-sm font-medium opacity-60 group-hover:opacity-100 transition-opacity">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-[#080808] p-8 md:col-span-2">
                  <h5 className="flex items-center gap-2 font-mono text-xs uppercase mb-8 text-cyber">
                    <ShieldCheck className="w-4 h-4" /> Defensive Operations
                  </h5>
                  <div className="grid grid-cols-3 gap-y-4 gap-x-2">
                    {SKILLS.cyber.map(skill => (
                      <div key={skill} className="flex items-center gap-2 group">
                        <div className="w-1 h-1 bg-cyber" />
                        <span className="text-sm font-medium opacity-60 group-hover:opacity-100 transition-opacity">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact / Terminal Section */}
        <section id="contact" className="py-32 px-6 max-w-7xl mx-auto">
          <div className="bg-[#050505] border border-white/10 rounded-xl max-w-4xl mx-auto overflow-hidden shadow-2xl">
            {/* Terminal Header */}
            <div className="bg-white/5 px-4 py-3 border-b border-white/10 flex items-center justify-between">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
              </div>
              <div className="font-mono text-[10px] opacity-40 uppercase tracking-widest">
                zsh — node server.js — 80x24
              </div>
            </div>
            
            {/* Terminal Body */}
            <div className="p-8 font-mono text-sm">
              <div className="flex gap-4 mb-4">
                <span className="text-brand">➜</span>
                <span className="text-blue-400">~/zikora</span>
                <span className="text-gray-500">git:(main)</span>
                <span className="text-white">whoami</span>
              </div>
              <p className="text-gray-400 mb-8 ml-8">
                Computer Engineering student. Full-stack developer. Security researcher. 
                Currently exploring trustless hardware execution and high-performance web architectures.
              </p>

              <div className="flex gap-4 mb-4">
                <span className="text-brand">➜</span>
                <span className="text-blue-400">~/zikora</span>
                <span className="text-white">cat contact_info.json</span>
              </div>
              <div className="bg-white/[0.02] p-6 rounded-lg border border-white/5 ml-8 mb-8 space-y-2">
                <p><span className="text-purple-400">"email"</span>: <span className="text-brand">"zikora@nkemdirim.dev"</span>,</p>
                <p><span className="text-purple-400">"location"</span>: <span className="text-brand">"Lagos, Nigeria"</span>,</p>
                <p><span className="text-purple-400">"availability"</span>: <span className="text-brand">"Research & Engineering"</span></p>
              </div>

              <div className="flex gap-4 items-center">
                <span className="text-brand">➜</span>
                <span className="text-blue-400">~/zikora</span>
                <div className="flex items-center">
                  <span className="text-white animate-pulse">|</span>
                  <input 
                    type="text" 
                    placeholder="Type your message..." 
                    className="bg-transparent border-none outline-none text-white ml-2 w-full placeholder:text-white/20"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 opacity-40 font-mono text-[10px] uppercase tracking-widest">
          <p>© 2026 ZIKORA NKEMDIRIM // SYSTEM_INIT // ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-brand transition-colors">Twitter</a>
            <a href="#" className="hover:text-brand transition-colors">Github</a>
            <a href="#" className="hover:text-brand transition-colors">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
