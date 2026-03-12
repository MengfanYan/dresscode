"use client";

import { useState } from "react";
import Link from "next/link";

export default function RecommendationsPage() {
  const [view, setView] = useState<"context" | "result">("context");

  return (
    <div className="max-w-300 mx-auto px-5 pb-20 pt-10 min-h-[80vh]">
      {/* Context Selection View */}
      {view === "context" && (
        <div className="view-section flex flex-col items-center justify-center h-full py-10">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl font-semibold mb-4">
              What&apos;s the plan?
            </h2>
            <p className="text-xl text-muted">
              Tell us about your day to get the perfect fit.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl w-full">
            <button
              onClick={() => setView("result")}
              className="bg-white p-8 rounded-2xl border-2 border-transparent shadow-card hover:border-foreground hover:-translate-y-1 transition-all text-left group"
            >
              <span className="text-4xl block mb-4 group-hover:scale-110 transition-transform duration-300">
                🏢
              </span>
              <h3 className="font-serif text-2xl font-semibold mb-2">
                Work / Commute
              </h3>
              <p className="text-muted">
                Professional but comfortable enough for transit.
              </p>
            </button>

            <button
              onClick={() => setView("result")}
              className="bg-white p-8 rounded-2xl border-2 border-transparent shadow-card hover:border-foreground hover:-translate-y-1 transition-all text-left group"
            >
              <span className="text-4xl block mb-4 group-hover:scale-110 transition-transform duration-300">
                🥂
              </span>
              <h3 className="font-serif text-2xl font-semibold mb-2">
                Date Night
              </h3>
              <p className="text-muted">
                Stylish, slightly elevated, maybe a bit cooler.
              </p>
            </button>

            <button
              onClick={() => setView("result")}
              className="bg-white p-8 rounded-2xl border-2 border-transparent shadow-card hover:border-foreground hover:-translate-y-1 transition-all text-left group"
            >
              <span className="text-4xl block mb-4 group-hover:scale-110 transition-transform duration-300">
                🛋️
              </span>
              <h3 className="font-serif text-2xl font-semibold mb-2">
                Casual Weekend
              </h3>
              <p className="text-muted">Maximum comfort, coffee run ready.</p>
            </button>
          </div>

          <div className="mt-16 inline-flex items-center gap-3 bg-white px-6 py-3 rounded-full border border-black/5 shadow-sm">
            <span>
              📍 <strong>London, UK</strong>
            </span>
            <span className="text-gray-300">|</span>
            <span>
              🌧️ <strong>12°C</strong> (Rain likely)
            </span>
            <button className="text-accent ml-2 text-sm font-semibold hover:underline">
              Change
            </button>
          </div>
        </div>
      )}

      {/* Result View */}
      {view === "result" && (
        <div className="view-section grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-12">
            <button
              onClick={() => setView("context")}
              className="text-muted hover:text-foreground mb-4 flex items-center gap-2 text-sm font-medium transition-colors"
            >
              ← Back to Context
            </button>
          </div>

          <div className="bento-card md:col-span-12 p-0 overflow-hidden border-0 shadow-none bg-transparent">
            <div className="bg-white rounded-2xl border border-black/5 shadow-card overflow-hidden flex flex-col md:flex-row h-full min-h-150">
              <div className="w-full">
                <div className="p-6 border-b border-black/5 flex justify-between items-center bg-white/50 backdrop-blur-sm">
                  <div>
                    <span className="text-xs font-bold text-muted uppercase tracking-widest">
                      Thursday, March 12
                    </span>
                    <h2 className="font-serif text-2xl font-semibold">
                      Today&apos;s Pick
                    </h2>
                  </div>
                  <div className="bg-gray-100 px-4 py-2 rounded-lg text-sm font-semibold flex gap-2 items-center">
                    <span>⛅️ 19°C</span>
                    <span className="border-l border-gray-300 pl-2">
                      Commute
                    </span>
                  </div>
                </div>

                <div className="p-8 flex flex-col md:flex-row gap-10">
                  {/* Outfit Visual */}
                  <div className="flex-1 bg-background rounded-xl p-6 relative min-h-100">
                    <div className="flex justify-between items-start mb-6">
                      <strong className="text-sm bg-black/5 px-3 py-1 rounded-full">
                        Match Score: 98%
                      </strong>
                      <div className="flex gap-2">
                        <span className="px-2 py-1 rounded text-xs font-bold uppercase bg-pink-100 text-pink-800">
                          Y2K
                        </span>
                        <span className="px-2 py-1 rounded text-xs font-bold uppercase bg-blue-100 text-blue-800">
                          Comfort
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-col gap-4">
                      <div className="bg-white border border-black/5 rounded-xl p-4 flex items-center gap-4 shadow-sm">
                        <div className="w-16 h-16 bg-pink-50 rounded-lg shrink-0"></div>
                        <div>
                          <div className="font-semibold">White Baby Tee</div>
                          <div className="text-sm text-muted">Top • Casual</div>
                        </div>
                      </div>
                      <div className="bg-white border border-black/5 rounded-xl p-4 flex items-center gap-4 shadow-sm">
                        <div className="w-16 h-16 bg-blue-50 rounded-lg shrink-0"></div>
                        <div>
                          <div className="font-semibold">Low-rise Jeans</div>
                          <div className="text-sm text-muted">
                            Bottom • Denim
                          </div>
                        </div>
                      </div>
                      <div className="bg-white border border-black/5 rounded-xl p-4 flex items-center gap-4 shadow-sm">
                        <div className="w-16 h-16 bg-gray-100 rounded-lg shrink-0"></div>
                        <div>
                          <div className="font-semibold">Chunky Sneakers</div>
                          <div className="text-sm text-muted">
                            Shoes • Platform
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Explanation Side */}
                  <div className="flex-1 flex flex-col justify-center">
                    <h4 className="font-serif text-2xl font-semibold mb-4">
                      Why this works
                    </h4>
                    <p className="text-muted text-lg mb-8 leading-relaxed">
                      This outfit fits your <strong>Y2K-casual</strong>{" "}
                      preference and works well for today’s mild 19°C
                      temperature. The jeans are durable for your commute, while
                      the baby tee keeps the silhouette playful.
                    </p>

                    <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg mb-8">
                      <strong className="text-green-800 block mb-1">
                        ✨ Missing Piece Detected
                      </strong>
                      <p className="text-green-700 text-sm mb-2">
                        Add a <em>Cropped Denim Jacket</em> to complete the look
                        for the evening chill.
                      </p>
                      <Link
                        href="/shopping"
                        className="text-green-800 text-sm font-semibold underline hover:text-green-900"
                      >
                        See Shopping Options &rarr;
                      </Link>
                    </div>

                    <div className="flex gap-4 mt-auto">
                      <button className="flex-1 bg-foreground text-bold py-4 rounded-xl font-semibold hover:opacity-90 transition-opacity">
                        Wear This
                      </button>
                      <button className="flex-1 bg-white border border-black/10 text-foreground py-4 rounded-xl font-semibold hover:bg-gray-50 transition-colors">
                        Alternative
                      </button>
                      <button className="flex-1 rounded-xl border border-gray-200 font-semibold bg-gray-50 hover:bg-gray-100 transition-colors">
                        <Link href="/feedback">Feedback</Link>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
