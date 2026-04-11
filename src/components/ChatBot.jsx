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
    setTimeout(() => {
      const responseText = getBotResponse(text)
      const botMsg = { id: Date.now() + 1, type: 'bot', text: responseText }
      setMessages((prev) => [...prev, botMsg])
    }, 600)
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
      {/* Floating Action Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-24 right-6 md:bottom-8 md:right-8 z-50 w-14 h-14 bg-gradient-to-tr from-fcit-400 to-fcit-300 rounded-full flex items-center justify-center text-white shadow-xl shadow-fcit-400/30 hover:shadow-2xl transition-shadow border-2 border-white"
            aria-label="Open Chat"
          >
            <Bot className="w-6 h-6 animate-pulse" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9, transformOrigin: 'bottom right' }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="fixed bottom-[100px] right-4 md:bottom-24 md:right-8 z-50 w-[calc(100vw-32px)] md:w-[380px] h-[550px] max-h-[80vh] bg-white rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-slate-100"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-fcit-400 to-fcit-300 px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm shadow-inner">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg leading-tight">FCIT Assistant</h3>
                  <p className="text-fcit-100/90 text-xs font-medium">Online • AI Bot</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                aria-label="Close Chat"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Chat Area */}
            <div className="flex-1 bg-slate-50 p-4 overflow-y-auto custom-scrollbar flex flex-col gap-4">
              {messages.map((msg) => (
                <div 
                  key={msg.id} 
                  className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed ${
                      msg.type === 'user' 
                        ? 'bg-fcit-400 text-white rounded-br-sm shadow-md' 
                        : 'bg-white text-slate-700 rounded-bl-sm shadow-sm border border-slate-100'
                    }`}
                  >
                    {msg.text}
                  </motion.div>
                </div>
              ))}
              
              {/* Quick Prompts - only show if there are few messages to not crowd the chat later */}
              {messages.length < 3 && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="flex flex-col gap-2 mt-2"
                >
                  <span className="text-xs text-slate-400 font-medium ml-1">Suggested Questions:</span>
                  {quickPrompts.map((prompt, i) => (
                    <button
                      key={i}
                      onClick={() => handlePromptClick(prompt)}
                      className="text-left bg-white border border-fcit-200 hover:border-fcit-400 hover:bg-fcit-50 text-slate-600 hover:text-fcit-400 text-xs p-2.5 rounded-xl shadow-sm transition-colors flex items-center justify-between group"
                    >
                      <span className="pr-4">{prompt}</span>
                      <ChevronRight className="w-3.5 h-3.5 text-fcit-300 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </button>
                  ))}
                </motion.div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 bg-white border-t border-slate-100">
              <form 
                onSubmit={(e) => {
                  e.preventDefault()
                  handleSend(inputValue)
                }}
                className="relative flex items-center gap-2"
              >
                <div className="relative flex-1">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Type your question..."
                    className="w-full bg-slate-50 border border-slate-200 rounded-full py-3 px-4 pr-12 text-sm focus:outline-none focus:ring-2 focus:ring-fcit-300 focus:border-fcit-300 transition-shadow transition-colors"
                  />
                  <button
                    type="submit"
                    disabled={!inputValue.trim()}
                    className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-fcit-400 hover:bg-fcit-300 text-white rounded-full flex items-center justify-center transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-md shadow-fcit-400/20"
                  >
                    <Send className="w-3.5 h-3.5 ml-0.5" />
                  </button>
                </div>
              </form>
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
