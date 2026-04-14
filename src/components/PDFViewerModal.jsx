import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Download, FileText, Loader2 } from 'lucide-react';

const PDFViewerModal = ({ isOpen, onClose, pdfUrl, title }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setLoading(true);
      setError(false);
      
      // Proactive check for gmu.ac.in restrictions
      if (pdfUrl.includes('gmu.ac.in')) {
        setError(true);
        setLoading(false);
      }

      // Disable body scroll when modal is open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const handleDownload = () => {
    window.open(pdfUrl, '_blank');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-5xl h-[90vh] bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden flex flex-col border border-white/20"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 md:px-8 border-b border-gray-100 bg-white/50">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
                  <FileText size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 leading-tight">
                    {title || 'Academic Resource'}
                  </h3>
                  <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">
                    Official Document • GM University
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <button
                  onClick={handleDownload}
                  className="hidden md:flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-sm font-semibold transition-all shadow-lg shadow-blue-200"
                >
                  <Download size={16} />
                  Download
                </button>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-gray-100 rounded-xl text-gray-400 hover:text-gray-900 transition-colors"
                >
                  <X size={24} />
                </button>
              </div>
            </div>

            {/* Content Area */}
            <div className="relative flex-1 bg-gray-50/50">
              {loading && (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 z-10">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="text-blue-600"
                  >
                    <Loader2 size={40} />
                  </motion.div>
                  <p className="text-sm font-medium text-gray-500 animate-pulse">
                    Rendering High-Quality PDF...
                  </p>
                </div>
              )}

              {error ? (
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center gap-6">
                  <div className="p-6 bg-amber-50 rounded-3xl text-amber-600 shadow-sm border border-amber-100">
                    <FileText size={56} />
                  </div>
                  <div className="max-w-md">
                    <h4 className="text-2xl font-black text-gray-900 mb-2 tracking-tight">External Document View</h4>
                    <p className="text-slate-500 text-sm font-medium leading-relaxed">
                      Due to university security protocols, this document cannot be previewed directly within the portal. Please choose an action below to view the official curriculum.
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 w-full justify-center px-4">
                    <button
                      onClick={() => window.open(pdfUrl, '_blank')}
                      className="flex items-center justify-center gap-2 px-8 py-4 bg-fcit-400 hover:bg-fcit-300 text-white rounded-2xl font-black text-sm transition-all shadow-xl shadow-fcit-400/20"
                    >
                      <ExternalLink size={20} />
                      View in New Tab
                    </button>
                    <button
                      onClick={handleDownload}
                      className="flex items-center justify-center gap-2 px-8 py-4 bg-white border-2 border-slate-100 hover:border-fcit-200 text-slate-700 rounded-2xl font-black text-sm transition-all shadow-sm"
                    >
                      <Download size={20} />
                      Direct Download
                    </button>
                  </div>
                </div>
              ) : (
                <iframe
                  src={`${pdfUrl}#toolbar=0`}
                  className="w-full h-full border-none"
                  onLoad={() => setLoading(false)}
                  onError={() => {
                    setLoading(false);
                    setError(true);
                  }}
                  title={title}
                />
              )}
            </div>

            {/* Mobile Footer (Download only) */}
            <div className="md:hidden p-4 border-t border-gray-100 bg-white shadow-inner">
              <button
                onClick={handleDownload}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl font-bold text-sm"
              >
                <Download size={18} />
                Save Document
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default PDFViewerModal;
