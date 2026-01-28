"use client";

import { useState } from "react";
import { guides } from "@/data/guides";
import InkImage from "@/components/InkImage";
import AudioPlayer from "@/components/AudioPlayer";
import { ChevronDown, ChevronUp, MapPin } from "lucide-react";

export default function Home() {
  const [activeGuide, setActiveGuide] = useState("montmartre");
  const [expandedSteps, setExpandedSteps] = useState<string[]>([]);

  const currentGuide = guides.find((g) => g.id === activeGuide);

  const toggleStepExpansion = (stepId: string) => {
    setExpandedSteps((prev) =>
      prev.includes(stepId)
        ? prev.filter((id) => id !== stepId)
        : [...prev, stepId]
    );
  };

  return (
    <main className="min-h-screen bg-paper">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-paper/95 backdrop-blur-sm border-b-2 border-ink/10">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <h1 className="text-3xl md:text-4xl font-serif text-ink mb-6 text-center">
            Carnet de Voyage
          </h1>

          {/* Navigation Tabs */}
          <div className="flex gap-0 border-2 border-ink">
            {guides.map((guide) => (
              <button
                key={guide.id}
                onClick={() => setActiveGuide(guide.id)}
                className={`flex-1 py-4 px-6 font-sans text-sm tracking-widest transition-all ${
                  activeGuide === guide.id
                    ? "bg-ink text-paper"
                    : "bg-paper text-ink hover:bg-ink/5"
                }`}
              >
                {guide.name}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        {currentGuide && (
          <>
            {/* Guide Header */}
            <div className="mb-12 text-center">
              <h2 className="text-4xl md:text-5xl font-serif text-ink mb-3">
                {currentGuide.name}
              </h2>
              <p className="text-xl text-ink/70 font-serif italic mb-2">
                {currentGuide.description}
              </p>
              <p className="text-sm text-ink/50 font-sans">
                Durée : {currentGuide.duration}
              </p>
            </div>

            {/* Timeline */}
            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-ink/20" />

              {/* Steps */}
              <div className="space-y-16">
                {currentGuide.steps.map((step, index) => (
                  <div key={step.id} className="relative pl-20">
                    {/* Timeline Dot */}
                    <div className="absolute left-6 top-2 w-5 h-5 rounded-full border-2 border-ink bg-paper" />

                    {/* Step Number */}
                    <div className="absolute left-2 top-0 text-ink/30 font-serif text-sm">
                      {index + 1}
                    </div>

                    {/* Step Card */}
                    <div className="bg-paper border-2 border-ink/10 p-0 overflow-hidden">
                      {/* Image */}
                      <InkImage
                        src={step.imageUrl}
                        alt={step.title}
                        className="w-full h-64 md:h-80"
                      />

                      {/* Content */}
                      <div className="p-6">
                        {/* Title & Duration */}
                        <div className="flex items-start justify-between mb-4">
                          <h3 className="text-2xl font-serif text-ink flex-1">
                            {step.title}
                          </h3>
                          <span className="text-sm text-ink/50 font-sans ml-4 whitespace-nowrap">
                            {step.duration}
                          </span>
                        </div>

                        {/* Audio Player */}
                        <div className="mb-4">
                          <AudioPlayer
                            text={step.text}
                            title={step.title}
                          />
                        </div>

                        {/* Text Toggle */}
                        <button
                          onClick={() => toggleStepExpansion(step.id)}
                          className="flex items-center gap-2 text-ink/60 hover:text-ink text-sm font-sans transition-colors mb-3"
                        >
                          {expandedSteps.includes(step.id) ? (
                            <>
                              <ChevronUp className="w-4 h-4" />
                              <span>Masquer le texte</span>
                            </>
                          ) : (
                            <>
                              <ChevronDown className="w-4 h-4" />
                              <span>Lire le texte</span>
                            </>
                          )}
                        </button>

                        {/* Expanded Text */}
                        {expandedSteps.includes(step.id) && (
                          <div className="prose prose-sm max-w-none text-ink/80 font-sans leading-relaxed whitespace-pre-line border-t border-ink/10 pt-4">
                            {step.text}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="mt-20 text-center">
              <div className="inline-block border-t-2 border-ink/20 pt-6">
                <p className="text-ink/40 font-serif italic text-sm">
                  Fin de la visite
                </p>
              </div>
            </div>
          </>
        )}
      </div>
    </main>
  );
}
