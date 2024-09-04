"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from "../components/ui/moving-border";
import { db } from "../../firebase"; 
import { collection, addDoc } from "firebase/firestore"; 

export function Cta() {
  const [email, setEmail] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [buttonText, setButtonText] = useState<string>("Subscribe");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false); // State to control modal visibility

  // Function to validate email format
  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); 
    if (validateEmail(email)) {
      setLoading(true); 
      setButtonText("Adding..."); 
      try {
        await addDoc(collection(db, "emails"), {
          email: email,
          timestamp: new Date(),
        });
        setButtonText("Email Added!"); 
        setEmail(""); 
        setIsModalOpen(false); // Close modal on success
      } catch (error) {
        console.error("Error adding document: ", error);
        setButtonText("Error! Try Again"); 
      } finally {
        setLoading(false); 
        setTimeout(() => setButtonText("Subscribe"), 2000); 
      }
    } else {
      setButtonText("Invalid email format"); 
      setTimeout(() => setButtonText("Subscribe"), 2000); 
    }
  };

  // Handle waitlist button click
  const handleWaitlistClick = () => {
    setIsModalOpen(true); // Open modal
  };

  // Handle modal close
  const handleCloseModal = () => {
    setIsModalOpen(false); // Close modal
  };

  return (
    <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-8">
      {/* Waitlist Button */}
      <motion.button
        onClick={handleWaitlistClick}
        className="px-10 py-4 bg-gradient-to-r from-royal-purple to-electric-cyan text-soft-white rounded-full text-lg font-semibold shadow-glow hover:shadow-glow-hover transition-all transform hover:scale-105"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Join the Waitlist
      </motion.button>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-deep-slate-gray text-soft-white rounded-2xl p-8 max-w-sm w-full mx-auto shadow-2xl border border-electric-cyan/30"
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-4xl font-bold gradient-text-sub ">Subscribe</h2>
                <button onClick={handleCloseModal} className="text-soft-white hover:text-electric-cyan transition-colors">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-3 bg-midnight-black border border-electric-cyan/30 rounded-lg focus:outline-none focus:border-electric-cyan transition-colors text-black"
                />
                <Button
                  borderRadius="1.75rem"
                  className="bg-gradient-to-r from-royal-purple to-electric-cyan text-soft-white border-none shadow-glow hover:shadow-glow-hover"
                  type="submit"
                >
                  {loading ? "Submitting..." : buttonText}
                </Button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
