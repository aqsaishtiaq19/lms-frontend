import React from 'react';

const AbtUsCard = () => {
  return (
    <div className="flex justify-center p-4">
      
      <article className="w-full max-w-md bg-gray-800 border border-gray-700 shadow-lg p-5 space-y-3 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-black/60">

        {/* Icon */}
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-700 border border-gray-600">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              height={24}
              width={24}
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-gray-300"
            >
              <path
                d="m8.032 12 1.984 1.984 4.96-4.96m4.55 5.272.893-.893a1.984 1.984 0 0 0 0-2.806l-.893-.893a1.984 1.984 0 0 1-.581-1.403V7.04a1.984 1.984 0 0 0-1.984-1.984h-1.262a1.983 1.983 0 0 1-1.403-.581l-.893-.893a1.984 1.984 0 0 0-2.806 0l-.893.893a1.984 1.984 0 0 1-1.403.581H7.04A1.984 1.984 0 0 0 5.055 7.04v1.262c0 .527-.209 1.031-.581 1.403l-.893.893a1.984 1.984 0 0 0 0 2.806l.893.893c.372.372.581.876.581 1.403v1.262a1.984 1.984 0 0 0 1.984 1.984h1.262c.527 0 1.031.209 1.403.581l.893.893a1.984 1.984 0 0 0 2.806 0l.893-.893a1.985 1.985 0 0 1 1.403-.581h1.262a1.984 1.984 0 0 0 1.984-1.984V15.7c0-.527.209-1.031.581-1.403Z"
                strokeWidth={2}
                strokeLinejoin="round"
                strokeLinecap="round"
                stroke="currentColor"
              />
            </svg>
          </div>

          <h2 className="text-lg font-bold text-white">
            University Repository & Performance
          </h2>
        </div>

        {/* Content */}
        <p className="text-sm text-gray-300 leading-relaxed">

          <span className="font-semibold text-gray-200">
            University Overview:
          </span>

          <br /><br />

          The university repository serves as a centralized digital system where all academic resources,
          courses, and student activities are stored and managed efficiently.

          <br /><br />

          University performance reflects the overall effectiveness of the institution in delivering quality education.
          It is measured through student engagement, completion rates, academic results, and feedback.

          <br /><br />

          Together, they form the backbone of a modern LMS, enabling data-driven decisions and improving education quality.
        </p>

        {/* Footer badge */}
        <div className="flex justify-between items-center pt-2 border-t border-gray-700">

          <span className="text-xs text-gray-400">
            University Insight Panel
          </span>

          <span className="text-xs bg-gray-700 px-2 py-1 rounded-full text-gray-300 border border-gray-600">
            Active System
          </span>

        </div>

      </article>
    </div>
  );
}

export default AbtUsCard;