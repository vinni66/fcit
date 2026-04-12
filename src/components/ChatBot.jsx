import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageSquare, X, Send, Bot, User, ChevronRight } from 'lucide-react'

// Mock AI Brain
const getBotResponse = (input) => {
  const lowerInput = input.toLowerCase()
  
  if ((lowerInput.includes('mca') && lowerInput.includes('without bca')) || lowerInput.includes('without bca')) {
    return "Yes! You can apply for the MCA program without a BCA. However, you must have a Bachelor's degree (like B.Sc, B.Com, or B.A) with Mathematics as a subject at the 10+2 level or during graduation."
  }
  
  if (lowerInput.includes('mca') && lowerInput.includes('eligibility')) {
    return "For MCA, eligibility requires a Bachelor's degree with Mathematics at the 10+2 level or at the graduation level."
  }
  
  if (lowerInput.includes('bca') && lowerInput.includes('eligibility')) {
    return "For BCA, you need to have completed your 10+2 in any stream, provided Mathematics was one of your core subjects."
  }

  if (lowerInput.includes('placement') || lowerInput.includes('job') || lowerInput.includes('package')) {
    return "FCIT boasts a 95% placement rate! Our students regularly secure roles at top MNCs, startups, and tech firms with excellent starting packages."
  }

  if (lowerInput.includes('fee') || lowerInput.includes('cost')) {
    return "Fee structures vary depending on the specific track (General vs AI/Data Analytics). Please visit the Admissions portal or email info@fcit.edu for the exact fee breakdown."
  }
  
  return "I'm still learning! For specific queries, I recommend applying directly via our website or contacting the admissions office at info@fcit.edu."
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const [messages, setMessages] = useState([
    { id: 1, type: 'bot', text: 'Hi there! 👋 I am the FCIT AI Assistant. How can I help you today?' }
  ])
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  // Auto-scroll when messages change
  useEffect(() => {
    scrollToBottom()
  }, [messages, isOpen])

  const handleSend = (text) => {
    if (!text.trim()) return

    // Add user message
    const newUserMsg = { id: Date.now(), type: 'user', text: text.trim() }
    setMessages((prev) => [...prev, newUserMsg])
    setInputValue('')

    // Simulate AI thinking delay
    setIsTyping(true)
    setTimeout(() => {
      const responseText = getBotResponse(text)
      const botMsg = { id: Date.now() + 1, type: 'bot', text: responseText }
      setMessages((prev) => [...prev, botMsg])
      setIsTyping(false)
    }, 1200)
  }

  const handlePromptClick = (prompt) => {
    handleSend(prompt)
  }

  // Predefined smart prompts to guide users
  const quickPrompts = [
    "Can I apply for MCA without a BCA?",
    "What is the BCA eligibility?",
    "Tell me about placements"
  ]

  return (
    <>
      {/* Floating Action Button (Glass Orb) */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0, rotate: -45 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            exit={{ scale: 0, opacity: 0, rotate: 45 }}
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-24 right-6 md:bottom-8 md:right-8 z-50 w-16 h-16 bg-white/15 backdrop-blur-xl rounded-full flex items-center justify-center text-white shadow-[0_10px_30px_rgba(114,28,36,0.2)] hover:shadow-[0_15px_40px_rgba(114,28,36,0.3)] border border-white/40 group overflow-hidden"
            aria-label="Open Chat"
          >
            {/* Animated Pulse Core */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute inset-0 bg-gradient-to-tr from-fcit-400/30 to-fcit-300/30 rounded-full"
            />
            
            {/* Gloss Reflection */}
            <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent opacity-50" />
            
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="relative z-10"
            >
              <Bot className="w-7 h-7 text-fcit-400 drop-shadow-sm" />
            </motion.div>

            {/* Shine Sweep Effect */}
            <motion.div
              animate={{ x: [-100, 100] }}
              transition={{ duration: 3, repeat: Infinity, repeatDelay: 1 }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
            />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window (Liquid Glass) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5, x: 200, y: 200, filter: 'blur(20px)' }}
            animate={{ opacity: 1, scale: 1, x: 0, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, scale: 0.8, y: 50, filter: 'blur(10px)' }}
            transition={{ type: 'spring', stiffness: 350, damping: 28, mass: 0.8 }}
            className="fixed bottom-[100px] right-4 md:bottom-24 md:right-8 z-50 w-[calc(100vw-32px)] md:w-[400px] h-[600px] max-h-[85vh] bg-white/70 backdrop-blur-[35px] rounded-[2.5rem] shadow-glass flex flex-col overflow-hidden border border-white/40"
            style={{ willChange: 'transform, opacity, filter' }}
          >
            {/* Glossy Header */}
            <div className="relative bg-gradient-to-r from-fcit-400 to-fcit-300 px-6 py-5 flex items-center justify-between overflow-hidden">
              {/* Shine Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent pointer-events-none" />
              <motion.div
                animate={{ x: [-200, 400] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 pointer-events-none"
              />

              <div className="flex items-center gap-4 relative z-10">
                <div className="relative">
                  <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-md shadow-inner border border-white/20">
                    <Bot className="w-7 h-7 text-white" />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-fcit-400 shadow-sm" />
                </div>
                <div>
                  <h3 className="text-white font-extrabold text-xl tracking-tight leading-none mb-1">FCIT Assistant</h3>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    <p className="text-fcit-100/80 text-xs font-bold uppercase tracking-widest">Active Intelligence</p>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-2xl flex items-center justify-center text-white transition-all hover:rotate-90"
                aria-label="Close Chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Chat Area */}
            <div className="flex-1 bg-transparent p-6 overflow-y-auto custom-scrollbar flex flex-col gap-6 scroll-smooth">
              {messages.map((msg, i) => (
                <motion.div 
                  key={msg.id} 
                  initial={{ opacity: 0, x: msg.type === 'user' ? 20 : -20, scale: 0.9, filter: 'blur(5px)' }}
                  animate={{ opacity: 1, x: 0, scale: 1, filter: 'blur(0px)' }}
                  transition={{ delay: 0.1, duration: 0.4 }}
                  className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`relative max-w-[85%] p-4 rounded-3xl text-sm font-medium leading-relaxed shadow-sm ${
                    msg.type === 'user' 
                      ? 'bg-gradient-to-br from-fcit-400 to-fcit-300 text-white rounded-br-none glow-maroon' 
                      : 'bg-white/80 backdrop-blur-md text-slate-800 rounded-bl-none border border-white/60 shadow-inner'
                  }`}>
                    {msg.text}
                  </div>
                </motion.div>
              ))}
              
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex justify-start"
                >
                  <div className="bg-white/80 backdrop-blur-md p-4 rounded-3xl rounded-bl-none border border-white/60 shadow-inner flex gap-1.5 items-center">
                    {[0, 1, 2].map((dot) => (
                      <motion.div
                        key={dot}
                        animate={{
                          y: [0, -5, 0],
                          opacity: [0.3, 1, 0.3],
                        }}
                        transition={{
                          duration: 0.6,
                          repeat: Infinity,
                          delay: dot * 0.15,
                        }}
                        className="w-1.5 h-1.5 bg-fcit-300 rounded-full"
                      />
                    ))}
                  </div>
                </motion.div>
              )}
              
              {/* Quick Prompts - Staggered Reveal */}
              {messages.length < 3 && (
                <motion.div 
                  initial="hidden"
                  animate="visible"
                  variants={{
                    visible: {
                      transition: {
                        staggerChildren: 0.1
                      }
                    }
                  }}
                  className="flex flex-col gap-3 mt-4"
                >
                  <motion.span 
                    variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
                    className="text-[10px] text-slate-400 font-extrabold uppercase tracking-[0.2em] ml-1"
                  >
                    Direct Inquiries
                  </motion.span>
                  {quickPrompts.map((prompt, i) => (
                    <motion.button
                      key={i}
                      variants={{
                        hidden: { opacity: 0, x: -20, filter: 'blur(5px)' },
                        visible: { opacity: 1, x: 0, filter: 'blur(0px)' }
                      }}
                      whileHover={{ scale: 1.02, x: 5 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handlePromptClick(prompt)}
                      className="text-left bg-white/50 backdrop-blur-sm border border-white/80 hover:border-fcit-400 hover:bg-white text-slate-700 hover:text-fcit-400 text-xs p-4 rounded-2xl shadow-sm transition-all flex items-center justify-between group"
                    >
                      <span className="font-semibold">{prompt}</span>
                      <ChevronRight className="w-4 h-4 text-fcit-300 opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-1" />
                    </motion.button>
                  ))}
                </motion.div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Glassy Input Area */}
            <div className="p-6 bg-white/40 backdrop-blur-md border-t border-white/60">
              <form 
                onSubmit={(e) => {
                  e.preventDefault()
                  handleSend(inputValue)
                }}
                className="relative flex items-center gap-3"
              >
                <div className="relative flex-1">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Ask about MCA, BCA, Placements..."
                    className="w-full bg-white/80 border border-white/60 rounded-2xl py-4 px-6 pr-14 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-fcit-400/50 focus:border-fcit-400 transition-all placeholder:text-slate-400 shadow-inner"
                  />
                  <button
                    type="submit"
                    disabled={!inputValue.trim()}
                    className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-fcit-400 hover:bg-fcit-300 text-white rounded-xl flex items-center justify-center transition-all disabled:opacity-30 disabled:grayscale shadow-lg shadow-fcit-400/20 active:scale-95"
                  >
                    <Send className="w-4 h-4 ml-0.5" />
                  </button>
                </div>
              </form>
              <p className="text-[9px] text-slate-400 text-center mt-4 font-bold uppercase tracking-widest opacity-60">FCIT Virtual Hub • 2025-26 Edition</p>
            </div>
            
            {/* Minimalist style injection for custom scrollbar within chat */}
            <style dangerouslySetInnerHTML={{__html: `
              .custom-scrollbar::-webkit-scrollbar {
                width: 4px;
              }
              .custom-scrollbar::-webkit-scrollbar-track {
                background: transparent;
              }
              .custom-scrollbar::-webkit-scrollbar-thumb {
                background: #cbd5e1;
                border-radius: 4px;
              }
              .custom-scrollbar:hover::-webkit-scrollbar-thumb {
                background: #94a3b8;
              }
            `}} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
