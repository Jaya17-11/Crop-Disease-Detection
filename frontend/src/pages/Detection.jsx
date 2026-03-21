import React, { useState } from 'react';
import axios from 'axios';

const Detection = () => {
    const [file, setFile] = useState(null);
    const [preview, setPreview] = useState(null);
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);

    const onFileChange = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile) {
            setFile(selectedFile);
            setPreview(URL.createObjectURL(selectedFile));
            setResult(null); 
        }
    };

    const handleDetection = async () => {
        if (!file) return alert("Please upload a sample image first.");
        
        setLoading(true); 
        const formData = new FormData();
        formData.append('image', file); 

        try {
            // Points to your Node.js backend (Port 8080)
            const response = await axios.post('http://localhost:8080/api/detect', formData, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });
            
            setResult(response.data); 
        } catch (error) {
            console.error("System Error:", error);
            alert("Diagnosis system is currently offline. Please ensure the backend server is running.");
        } finally {
            setLoading(false);
        }
    };
    
    return (
        <div className="min-h-screen bg-slate-50 flex flex-col items-center py-12 px-4">
            {/* Professional Header */}
            <div className="text-center mb-12">
                <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Crop Health Diagnostic System</h1>
                <p className="text-slate-500 mt-2">Upload a high-resolution leaf sample for automated disease analysis</p>
            </div>
            
            {/* Diagnostic Interface */}
            <div className="bg-white p-8 rounded-xl shadow-sm w-full max-w-md border border-slate-200">
                <label className="block mb-4 text-xs font-bold uppercase tracking-wider text-slate-400">
                    Input: Leaf Sample
                </label>
                
                <input 
                    type="file" 
                    onChange={onFileChange} 
                    accept="image/*"
                    className="block w-full text-sm text-slate-500 
                               file:mr-4 file:py-2.5 file:px-4 
                               file:rounded-md file:border-0 
                               file:text-xs file:font-bold file:uppercase
                               file:bg-slate-900 file:text-white 
                               hover:file:bg-slate-800 mb-6 cursor-pointer"
                />

                {preview && (
                    <div className="mb-6 overflow-hidden rounded-lg border border-slate-200 bg-slate-100">
                        <img 
                            src={preview} 
                            alt="Sample Preview" 
                            className="w-full h-56 object-contain" 
                        />
                    </div>
                )}

                <button 
                    onClick={handleDetection}
                    disabled={loading || !file}
                    className={`w-full py-4 px-6 rounded-lg font-bold text-sm uppercase tracking-widest text-white shadow-sm transition-all ${
                        loading 
                        ? 'bg-slate-300 cursor-not-allowed' 
                        : 'bg-green-600 hover:bg-green-700'
                    }`}
                >
                    {loading ? "Analyzing Sample..." : "Run Diagnosis"}
                </button>
            </div>

            {/* Diagnosis Result Output */}
            {result && (
                <div className="mt-8 p-6 bg-white rounded-xl shadow-sm border border-slate-200 max-w-md w-full animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-4">
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-tighter">Diagnostic Result</span>
                        <div className="flex items-center space-x-1.5">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                            <span className="text-xs font-bold text-green-600 uppercase">System Verified</span>
                        </div>
                    </div>
                    
                    <div className="py-2">
                        <h2 className="text-xl font-bold text-slate-900">
                            {result.prediction.replace(/:/g, ' —')}
                        </h2>
                        <p className="text-sm text-slate-500 mt-1">Status: Logged to secure cloud history</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Detection;