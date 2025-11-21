// src/pages/CoursePage.jsx
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import courses from "../data/courses";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import RatingStars from "../components/RatingStars";
import WriteReview from "../components/WriteReview";

export default function CoursePage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const all = Object.values(courses).flat();
  const course = all.find((c) => c.id.toString() === id);

  // ⭐ Two separate modals
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [showEnrollModal, setShowEnrollModal] = useState(false);

  const [reviews, setReviews] = useState([]);

  const storageKey = `reviews_${id}`;

  useEffect(() => {
    try {
      const raw = localStorage.getItem(storageKey);
      setReviews(raw ? JSON.parse(raw) : []);
    } catch {
      setReviews([]);
    }
  }, [storageKey]);

  if (!course) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-gray-800 bg-gray-100">
        <h2 className="text-3xl font-bold">Course not found</h2>
        <button
          onClick={() => navigate(-1)}
          className="mt-6 px-5 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        >
          Go Back
        </button>
      </div>
    );
  }

  // 🎉 Enrollment Action
  const handleEnroll = () => {
    confetti({
      particleCount: 180,
      spread: 80,
      startVelocity: 40,
      origin: { y: 0.7 },
    });

    // Show ONLY enroll modal now
    setShowEnrollModal(true);
  };

  // ⭐ Review Handling
  const averageRating = reviews.length
    ? reviews.reduce((s, r) => s + r.rating, 0) / reviews.length
    : 0;

  const handleAddReview = (review) => {
    const next = [review, ...reviews];
    setReviews(next);

    try {
      localStorage.setItem(storageKey, JSON.stringify(next));
    } catch (e) {
      console.error("Failed to save review");
    }

    setShowReviewModal(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-white text-gray-900">

      {/* HEADER */}
      <div className="w-full bg-gradient-to-r from-indigo-400 to-blue-500 text-white py-16 px-6 shadow-md">
        <div className="max-w-5xl mx-auto">
          <button
            onClick={() => navigate(-1)}
            className="mb-5 text-white/90 hover:text-white transition"
          >
            ← Back
          </button>

          <h1 className="text-4xl font-bold">{course.title}</h1>
          <p className="text-lg mt-2 opacity-90">
            By <span className="font-semibold">{course.author}</span> •{" "}
            {course.level} • {course.duration}
          </p>

          <p className="max-w-3xl mt-4 opacity-95">
            {course.description}
          </p>
        </div>
      </div>

      {/* MAIN */}
      <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-10 py-14">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-2"
        >
          <h2 className="text-2xl font-bold mb-4">Uploaded Lessons</h2>

          <div className="space-y-4 mb-8">
            {course.lessons?.map((l) => (
              <motion.div
                key={l.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
                className="p-5 bg-white rounded-xl shadow-md border border-gray-200"
              >
                <p className="text-lg font-semibold">{l.title}</p>
                <p className="text-gray-600 text-sm">{l.minutes} minutes</p>
              </motion.div>
            ))}
          </div>

          {/* Reviews Summary */}
          <div className="mb-6 p-6 bg-white rounded-xl shadow border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center gap-3">
                  <div className="text-3xl font-bold">
                    {averageRating ? averageRating.toFixed(1) : "—"}
                  </div>
                  <div className="text-sm text-gray-600">
                    {reviews.length} review
                    {reviews.length !== 1 ? "s" : ""}
                  </div>
                </div>

                <div className="mt-2">
                  <RatingStars value={averageRating} readOnly={true} />
                </div>
              </div>

              <div>
                <button
                  onClick={() => setShowReviewModal(true)}
                  className="px-4 py-2 bg-sky-600 text-white rounded-lg"
                >
                  Write a review
                </button>
              </div>
            </div>
          </div>

          {/* Reviews List */}
          <div className="space-y-4">
            {reviews.length === 0 && (
              <div className="text-gray-600 p-4">
                No reviews yet — be the first to review this course.
              </div>
            )}

            {reviews.map((r) => (
              <div key={r.id} className="p-4 bg-white rounded-lg shadow-sm border border-gray-100">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold">{r.name}</div>
                    <div className="text-sm text-gray-500">
                      {new Date(r.date).toLocaleString()}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="text-sm font-semibold">{r.rating}/5</div>
                    <RatingStars value={r.rating} readOnly={true} />
                  </div>
                </div>
                <p className="mt-3 text-gray-700">{r.text}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT SIDEBAR */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-xl shadow-xl p-6 h-fit border border-gray-200"
        >
          <h3 className="text-xl font-bold">Course Fee</h3>
          <p className="text-3xl font-bold text-green-600 mt-2">₹499</p>

          <p className="text-gray-700 mt-4">
            Unlock full access to all lessons, notes, and quizzes.
          </p>

          <button
            onClick={handleEnroll}
            className="mt-6 w-full py-3 bg-blue-500 text-white rounded-lg text-lg font-semibold hover:bg-blue-600 transition"
          >
            Enroll Now
          </button>
        </motion.div>

      </div>

      {/* ⭐ REVIEW MODAL */}
      <WriteReview
        open={showReviewModal}
        onClose={() => setShowReviewModal(false)}
        onSubmit={handleAddReview}
      />

      {/* ⭐ ENROLL SUCCESS MODAL */}
      {showEnrollModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-xl shadow-2xl text-center max-w-sm w-full">
            <h2 className="text-2xl font-bold mb-2">Enrolled Successfully! 🎉</h2>
            <p className="text-gray-600 mb-6">
              You now have full access to this course.
            </p>

            <button
              onClick={() => setShowEnrollModal(false)}
              className="px-5 py-2 bg-blue-600 text-white rounded-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
