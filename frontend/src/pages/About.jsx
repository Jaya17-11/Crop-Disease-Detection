import React from 'react';
import { useNavigate } from 'react-router-dom';

const About = () => {
    const navigate = useNavigate();

    return (
        <div className="bg-white min-h-screen font-sans text-slate-900">
            {/* --- HEADER --- */}
            <div className="bg-slate-50 py-20 px-6 border-b border-slate-100 text-center">
                <h1 className="text-4xl font-black mb-4">Platform Architecture</h1>
                <p className="text-slate-500 max-w-2xl mx-auto text-lg">
                    A deep dive into the engineering behind LeafLens: High-performance diagnostics meets secure cloud infrastructure.
                </p>
            </div>

            {/* --- TECHNICAL WORKFLOW --- */}
            <section className="py-20 px-6 max-w-5xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                            <span className="text-green-600">01.</span> The Diagnostic Pipeline
                        </h2>
                        <p className="text-slate-600 leading-relaxed mb-6">
                            When a user uploads a leaf sample, the Node.js backend utilizes <strong>Multer</strong> for secure file handling. The image is processed through our <strong>Diagnostic Engine</strong>, which identifies pathological patterns across multiple crop species.
                        </p>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <span className="text-green-500 font-bold">✓</span>
                                <span className="text-sm text-slate-500"><strong>Edge Processing:</strong> Rapid identification for immediate field utility.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-green-500 font-bold">✓</span>
                                <span className="text-sm text-slate-500"><strong>Data Integrity:</strong> Automated validation of diagnostic outputs.</span>
                            </li>
                        </ul>
                    </div>
                    <div className="bg-slate-100 rounded-3xl p-8 aspect-square flex items-center justify-center">
                        <div className="text-center">
                            <div className="text-6xl mb-4">🔬</div>
                            <p className="font-mono text-xs text-slate-400">ENGINE_STATUS: OPTIMIZED</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- DATA ARCHITECTURE (MERN) --- */}
            <section className="py-20 bg-slate-900 text-white px-6">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4">The MERN Foundation</h2>
                        <p className="text-slate-400">Built for scalability and real-time data persistence.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <TechTile title="MongoDB" desc="Non-relational database for flexible diagnostic logs." />
                        <TechTile title="Express.js" desc="Robust routing for secure API communication." />
                        <TechTile title="React" desc="Responsive, state-driven UI for seamless UX." />
                        <TechTile title="Node.js" desc="High-concurrency server environment for logic execution." />
                    </div>
                </div>
            </section>

            {/* --- CALL TO ACTION --- */}
            <section className="py-20 text-center">
                <h2 className="text-2xl font-bold mb-8">Ready to test the system?</h2>
                <button 
                    onClick={() => navigate('/detect')}
                    className="px-10 py-4 bg-green-600 text-white font-bold rounded-full hover:bg-green-700 transition-all shadow-xl shadow-green-100"
                >
                    Launch Diagnostic Module
                </button>
            </section>
        </div>
    );
};

const TechTile = ({ title, desc }) => (
    <div className="border border-slate-700 p-6 rounded-2xl hover:bg-slate-800 transition-all">
        <h4 className="text-green-400 font-bold mb-2">{title}</h4>
        <p className="text-xs text-slate-400 leading-relaxed">{desc}</p>
    </div>
);

export default About;