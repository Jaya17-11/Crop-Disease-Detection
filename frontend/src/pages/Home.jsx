import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    const isLoggedIn = !!localStorage.getItem('token');

    return (
        <div className="bg-slate-50 min-h-screen font-sans">
            {/* --- HERO SECTION --- */}
            <header className="relative py-20 px-6 overflow-hidden bg-white border-b border-slate-100">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
                    
                    {/* Left Content */}
                    <div className="flex-1 text-left">
                        <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-green-700 uppercase bg-green-50 rounded-full">
                            Next-Gen Agriculture Platform
                        </span>
                        <h1 className="text-5xl md:text-6xl font-black text-slate-900 leading-tight mb-6">
                            Precision <span className="text-green-600">Crop Health</span> <br/> 
                            Diagnostics.
                        </h1>
                        <p className="text-lg text-slate-600 mb-10 leading-relaxed max-w-xl">
                            Bridging the gap between the field and data. LeafLens provides an industrial-grade diagnostic suite to identify, log, and monitor crop health with 100% cloud reliability.
                        </p>
                        
                        <div className="flex flex-wrap gap-4">
                            <button 
                                onClick={() => navigate(isLoggedIn ? '/detect' : '/register')}
                                className="px-8 py-4 bg-green-600 hover:bg-green-700 text-white rounded-xl font-bold shadow-lg shadow-green-200 transition-all flex items-center gap-2 group"
                            >
                                {isLoggedIn ? "Run New Diagnosis" : "Get Started Now"}
                                <span className="group-hover:translate-x-1 transition-transform">→</span>
                            </button>
                            <button 
                                onClick={() => navigate('/about')}
                                className="px-8 py-4 bg-white border border-slate-200 text-slate-700 rounded-xl font-bold hover:bg-slate-50 transition-all"
                            >
                                Platform Overview
                            </button>
                        </div>
                    </div>
                    
                    {/* Right Visual Asset */}
                    <div className="flex-1 relative">
                        <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-white bg-slate-200">
                            {/* Professional placeholder image for agriculture tech */}
                            <img 
                                src="https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&q=80&w=800" 
                                alt="Modern Farming Tech" 
                                className="w-full h-auto object-cover"
                            />
                        </div>
                        {/* Decorative background blur */}
                        <div className="absolute -top-10 -right-10 w-64 h-64 bg-green-100 rounded-full -z-0 blur-3xl opacity-60"></div>
                    </div>
                </div>
            </header>

            {/* --- CORE CAPABILITIES --- */}
            <section className="py-24 bg-slate-50 px-6">
                <div className="max-w-6xl mx-auto text-center mb-16">
                    <h2 className="text-xs font-bold text-green-600 uppercase tracking-[0.2em] mb-4">System Intelligence</h2>
                    <h3 className="text-3xl font-bold text-slate-900">Engineered for the Modern Field</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    <FeatureCard 
                        icon="⚡"
                        title="Instant Analysis"
                        desc="Optimized Node.js diagnostic engine delivers verified results in under 2 seconds for field efficiency."
                    />
                    <FeatureCard 
                        icon="☁️"
                        title="Secure Cloud Sync"
                        desc="Every diagnostic record is permanently archived in your encrypted MongoDB profile for long-term tracking."
                    / >
                    <FeatureCard 
                        icon="🛡️"
                        title="Verified Reporting"
                        desc="Structured diagnostic outputs across Tomato, Potato, Corn, and Rice varieties with high accuracy."
                    />
                </div>
            </section>

            {/* --- TECH STACK STRIP --- */}
            <section className="py-12 bg-white border-t border-slate-100">
                <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8 opacity-50 grayscale hover:grayscale-0 transition-all">
                    <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Built with MERN Stack</p>
                    <div className="flex flex-wrap justify-center gap-8 font-black text-slate-400 text-xl">
                        <span>MongoDB</span>
                        <span>Express</span>
                        <span>React</span>
                        <span>Node.js</span>
                    </div>
                </div>
            </section>

            {/* --- FOOTER --- */}
            <footer className="py-12 bg-slate-900 text-slate-400 text-center">
                <p className="text-sm">© 2026 LeafLens Diagnostic Systems • Final Year Engineering Project</p>
            </footer>
        </div>
    );
};

// Reusable Feature Card Component
const FeatureCard = ({ icon, title, desc }) => (
    <div className="p-10 bg-white border border-slate-100 rounded-3xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
        <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center mb-8 text-3xl">
            {icon}
        </div>
        <h4 className="text-xl font-bold text-slate-900 mb-4">{title}</h4>
        <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
    </div>
);

export default Home;