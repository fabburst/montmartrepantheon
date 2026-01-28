"use client";

import { useState, useEffect } from "react";
import { Play, Pause, Volume2 } from "lucide-react";

interface AudioPlayerProps {
  text: string;
  title: string;
  onPlayStateChange?: (isPlaying: boolean) => void;
}

export default function AudioPlayer({ text, title, onPlayStateChange }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [utterance, setUtterance] = useState<SpeechSynthesisUtterance | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && window.speechSynthesis) {
      const newUtterance = new SpeechSynthesisUtterance(text);
      newUtterance.lang = "fr-FR";
      newUtterance.rate = 0.9;
      newUtterance.pitch = 1;

      newUtterance.onend = () => {
        setIsPlaying(false);
        onPlayStateChange?.(false);
      };

      setUtterance(newUtterance);
    }

    return () => {
      if (window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
    };
  }, [text]);

  const togglePlay = () => {
    if (!utterance || !window.speechSynthesis) return;

    if (isPlaying) {
      window.speechSynthesis.cancel();
      setIsPlaying(false);
      onPlayStateChange?.(false);
    } else {
      window.speechSynthesis.cancel(); // Stop any other playing audio
      window.speechSynthesis.speak(utterance);
      setIsPlaying(true);
      onPlayStateChange?.(true);
    }
  };

  return (
    <button
      onClick={togglePlay}
      className="flex items-center gap-3 px-6 py-3 bg-ink text-paper rounded-none hover:bg-ink/90 transition-colors w-full justify-center font-sans text-sm tracking-wide"
    >
      {isPlaying ? (
        <>
          <Pause className="w-5 h-5" />
          <span>PAUSE</span>
        </>
      ) : (
        <>
          <Play className="w-5 h-5 fill-current" />
          <span>ÉCOUTER</span>
        </>
      )}
    </button>
  );
}
