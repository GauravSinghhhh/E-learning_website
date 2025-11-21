// src/components/WriteReview.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import RatingStars from "./RatingStars";

export default function WriteReview({ open, onClose, onSubmit }) {
  const [rating, setRating] = useState(5);
  const [text, setText] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = () => {
    if (!text.trim()) {
      alert("Please write a short review.");
      return;
    }
    const review = {
      id: Date.now(),
      name: name.trim() || "Anonymous",
      rating: rating,
      text: text.trim(),
      date: new Date().toISOString(),
    };
    onSubmit(review);
    setText("");
    setName("");
  };

  if (!open) return null;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        transition={{ type: "spring", stiffness: 160 }}
        className="bg-white rounded-2xl p-6 w-[90%] max-w-lg shadow-xl"
      >
        <h3 className="text-xl font-semibold mb-3">Write a Review</h3>

        <label className="block text-sm text-gray-600 mb-2">Your name (optional)</label>
        <input value={name} onChange={(e) => setName(e.target.value)} className="w-full px-4 py-2 border rounded-lg mb-3" placeholder="Jane Doe" />

        <label className="block text-sm text-gray-600 mb-2">Your rating</label>
        <RatingStars value={rating} onChange={setRating} size="w-7 h-7" />

        <label className="block text-sm text-gray-600 mt-4 mb-2">Your review</label>
        <textarea value={text} onChange={(e) => setText(e.target.value)} rows={5} className="w-full px-4 py-2 border rounded-lg mb-4" placeholder="What did you like?" />

        <div className="flex items-center gap-3 justify-end">
          <button onClick={onClose} className="px-4 py-2 rounded-md border">Cancel</button>
          <button onClick={handleSubmit} className="px-4 py-2 rounded-md bg-sky-600 text-white">Submit</button>
        </div>
      </motion.div>
    </motion.div>
  );
}
