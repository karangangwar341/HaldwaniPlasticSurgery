"use client";

import { useState } from "react";
import BeforeAfterSlider from "./BeforeAfterSlider";

interface ResultItem {
  id: string;
  beforeImage: string;
  afterImage: string;
  caption: string;
  serviceTitle: string;
}

interface ResultsGalleryProps {
  results: ResultItem[];
}

export default function ResultsGallery({ results }: ResultsGalleryProps) {
  const [activeFilter, setActiveFilter] = useState("All");
  
  const uniqueServices = ["All", ...new Set(results.map((r) => r.serviceTitle))];

  const filteredResults = activeFilter === "All" 
    ? results 
    : results.filter((r) => r.serviceTitle === activeFilter);

  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      {/* Filter buttons */}
      <div className="mb-12 flex flex-wrap items-center justify-center gap-3">
        {uniqueServices.map((service) => {
          const isActive = activeFilter === service;
          return (
            <button
              key={service}
              onClick={() => setActiveFilter(service)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition-all duration-300 ${
                isActive 
                  ? "bg-primary text-white shadow-lg scale-105" 
                  : "border border-cream-dark bg-white text-primary/70 hover:border-accent/40 hover:bg-cream"
              }`}
            >
              {service === "All" ? "All Results" : service}
            </button>
          );
        })}
      </div>

      {/* Results Grid */}
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 transition-opacity duration-300">
        {filteredResults.length > 0 ? (
          filteredResults.map((r) => (
            <div key={r.id} className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <BeforeAfterSlider
                beforeImage={r.beforeImage}
                afterImage={r.afterImage}
                caption={r.caption}
              />
            </div>
          ))
        ) : (
          <div className="col-span-full py-20 text-center">
            <p className="text-lg text-primary/40">No results found for this category.</p>
          </div>
        )}
      </div>
    </div>
  );
}
