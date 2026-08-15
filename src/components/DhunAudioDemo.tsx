import { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX, Play, Square, Sparkles, Music, Sliders, Info } from 'lucide-react';
import { RAAG_LIST } from '../data/portfolioData';

export const DhunAudioDemo = () => {
  const [selectedRaag, setSelectedRaag] = useState(RAAG_LIST[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentNoteIndex, setCurrentNoteIndex] = useState<number | null>(null);
  const [tempo, setTempo] = useState(120); // BPM
  const [instrument, setInstrument] = useState<'sitar' | 'flute' | 'tanpura'>('sitar');
  const [lyricText, setLyricText] = useState('भोर भई जागो मन मेरे, राम नाम सुखदाई (Morning devotion lyrics)');
  const [aiMoodDetected, setAiMoodDetected] = useState('Devotional / Shanti Rasa (Bhairav Match 98.4%)');
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const audioCtxRef = useRef<AudioContext | null>(null);
  const sequenceTimerRef = useRef<NodeJS.Timeout | null>(null);

  const initAudio = () => {
    if (!audioCtxRef.current) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      audioCtxRef.current = new AudioCtx();
    }
    if (audioCtxRef.current.state === 'suspended') {
      audioCtxRef.current.resume();
    }
  };

  const playTone = (freq: number, duration: number = 0.45) => {
    initAudio();
    const ctx = audioCtxRef.current;
    if (!ctx) return;

    const osc = ctx.createOscillator();
    const gainNode = ctx.createGain();

    // Instrument shaping
    if (instrument === 'sitar') {
      osc.type = 'sawtooth';
      // Fast attack, bright metallic decay
      gainNode.gain.setValueAtTime(0, ctx.currentTime);
      gainNode.gain.linearRampToValueAtTime(0.28, ctx.currentTime + 0.02);
      gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);
    } else if (instrument === 'flute') {
      osc.type = 'sine';
      // Soft gentle breath envelope
      gainNode.gain.setValueAtTime(0, ctx.currentTime);
      gainNode.gain.linearRampToValueAtTime(0.22, ctx.currentTime + 0.08);
      gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration * 1.2);
    } else {
      // Tanpura drone harmonic
      osc.type = 'triangle';
      gainNode.gain.setValueAtTime(0.05, ctx.currentTime);
      gainNode.gain.linearRampToValueAtTime(0.25, ctx.currentTime + 0.15);
      gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration * 1.5);
    }

    osc.frequency.setValueAtTime(freq, ctx.currentTime);
    osc.connect(gainNode);
    gainNode.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + duration * 1.3);
  };

  const startSequence = () => {
    initAudio();
    setIsPlaying(true);

    const freqs = selectedRaag.frequencies;
    let idx = 0;
    const intervalMs = (60 / tempo) * 500;

    const tick = () => {
      setCurrentNoteIndex(idx);
      playTone(freqs[idx], intervalMs / 1000);
      idx = (idx + 1) % freqs.length;
    };

    tick();
    sequenceTimerRef.current = setInterval(tick, intervalMs);
  };

  const stopSequence = () => {
    if (sequenceTimerRef.current) {
      clearInterval(sequenceTimerRef.current);
      sequenceTimerRef.current = null;
    }
    setIsPlaying(false);
    setCurrentNoteIndex(null);
  };

  const handleAnalyzeLyrics = () => {
    setIsAnalyzing(true);
    setTimeout(() => {
      setIsAnalyzing(false);
      if (lyricText.toLowerCase().includes('evening') || lyricText.toLowerCase().includes('love') || lyricText.toLowerCase().includes('चाँद') || lyricText.toLowerCase().includes('रात')) {
        setSelectedRaag(RAAG_LIST[1]); // Yaman
        setAiMoodDetected('Romantic & Contemplative / Shringar Rasa (Raag Yaman Match 99.1%)');
      } else if (lyricText.toLowerCase().includes('joy') || lyricText.toLowerCase().includes('bright') || lyricText.toLowerCase().includes('आनंद') || lyricText.toLowerCase().includes('सुबह')) {
        setSelectedRaag(RAAG_LIST[2]); // Bilawal
        setAiMoodDetected('Bright & Uplifting / Hasya & Veera Rasa (Raag Bilawal Match 96.7%)');
      } else if (lyricText.toLowerCase().includes('deep') || lyricText.toLowerCase().includes('night') || lyricText.toLowerCase().includes('royal') || lyricText.toLowerCase().includes('गंभीर')) {
        setSelectedRaag(RAAG_LIST[3]); // Darbari
        setAiMoodDetected('Majestic Contemplation / Karuna Rasa (Raag Darbari Match 97.9%)');
      } else {
        setSelectedRaag(RAAG_LIST[0]); // Bhairav
        setAiMoodDetected('Devotional / Shanti Rasa (Raag Bhairav Match 98.4%)');
      }
    }, 600);
  };

  useEffect(() => {
    return () => {
      if (sequenceTimerRef.current) {
        clearInterval(sequenceTimerRef.current);
      }
    };
  }, []);

  return (
    <div className="bg-slate-900/90 border border-indigo-500/20 rounded-2xl p-5 md:p-6 shadow-xl backdrop-blur-sm">
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-800">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-indigo-500/20 text-white">
            <Music className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h4 className="font-bold text-white text-base md:text-lg">Dhun AI Synthesizer Engine</h4>
              <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/30">
                Patent No. 202621056495
              </span>
            </div>
            <p className="text-xs text-slate-400">Interactive Indian Raag generation simulator via Web Audio API</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {isPlaying ? (
            <button
              onClick={stopSequence}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-500 text-white text-xs font-semibold shadow-lg shadow-rose-600/20 transition-all cursor-pointer"
            >
              <Square className="w-3.5 h-3.5 fill-current" /> Stop Melody
            </button>
          ) : (
            <button
              onClick={startSequence}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white text-xs font-semibold shadow-lg shadow-indigo-600/30 transition-all cursor-pointer"
            >
              <Play className="w-3.5 h-3.5 fill-current" /> Play Raag Scale
            </button>
          )}
        </div>
      </div>

      {/* Lyric & Emotion AI Input */}
      <div className="mt-4 bg-slate-950/70 border border-slate-800 rounded-xl p-3.5">
        <label className="text-xs font-medium text-slate-300 flex items-center justify-between mb-1.5">
          <span className="flex items-center gap-1.5 text-indigo-300">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            Groq AI Lyric & Mood Classifier
          </span>
          <span className="text-[10px] text-slate-500">Simulates LLM Raag extraction</span>
        </label>
        <div className="flex flex-col sm:flex-row gap-2">
          <input
            type="text"
            value={lyricText}
            onChange={(e) => setLyricText(e.target.value)}
            placeholder="Type lyrics (e.g. evening devotion, sweet melody, morning dawn)..."
            className="flex-1 bg-slate-900 border border-slate-700/80 rounded-lg px-3 py-1.5 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
          />
          <button
            onClick={handleAnalyzeLyrics}
            disabled={isAnalyzing}
            className="px-3.5 py-1.5 rounded-lg bg-indigo-500/20 hover:bg-indigo-500/30 border border-indigo-500/40 text-indigo-300 text-xs font-medium transition-colors flex items-center justify-center gap-1.5 cursor-pointer whitespace-nowrap"
          >
            {isAnalyzing ? (
              <span className="animate-spin text-xs">⟳</span>
            ) : (
              <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            )}
            Analyze Rasa
          </button>
        </div>
        <div className="mt-2 text-[11px] text-slate-400 flex items-center gap-1.5">
          <span className="text-slate-500">Detected Emotion:</span>
          <span className="text-emerald-400 font-mono font-medium">{aiMoodDetected}</span>
        </div>
      </div>

      {/* Raag Selection Cards */}
      <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-2.5">
        {RAAG_LIST.map((raag) => {
          const isSelected = selectedRaag.name === raag.name;
          return (
            <button
              key={raag.name}
              onClick={() => {
                setSelectedRaag(raag);
                if (isPlaying) {
                  stopSequence();
                }
              }}
              className={`p-3 rounded-xl text-left border transition-all cursor-pointer ${
                isSelected
                  ? 'bg-indigo-950/60 border-indigo-500 shadow-md shadow-indigo-500/10 ring-1 ring-indigo-500/50'
                  : 'bg-slate-950/40 border-slate-800 hover:border-slate-700 hover:bg-slate-900/60'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="font-semibold text-xs text-white">{raag.name}</span>
                {isSelected && <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse"></span>}
              </div>
              <p className="text-[10px] text-slate-400 line-clamp-1">{raag.mood}</p>
              <div className="mt-2 text-[10px] font-mono text-indigo-300 bg-slate-900/80 px-1.5 py-0.5 rounded border border-slate-800">
                {raag.notes}
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Note Frequency Visualizer */}
      <div className="mt-4 bg-slate-950 border border-slate-800 rounded-xl p-3">
        <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
          <span className="font-medium text-slate-300">Swar Scale Synthesizer:</span>
          <span className="text-[11px] font-mono text-slate-400">
            Vadi: <strong className="text-indigo-300">{selectedRaag.vadi}</strong> | Samvadi: <strong className="text-indigo-300">{selectedRaag.samvadi}</strong>
          </span>
        </div>

        <div className="grid grid-cols-7 sm:grid-cols-8 gap-1.5">
          {selectedRaag.frequencies.map((freq, i) => {
            const swarSymbols = selectedRaag.notes.split(' ');
            const swarLabel = swarSymbols[i] || `N${i + 1}`;
            const isActive = currentNoteIndex === i;

            return (
              <button
                key={i}
                onClick={() => playTone(freq, 0.5)}
                className={`py-2 px-1 rounded-lg flex flex-col items-center justify-center transition-all cursor-pointer border ${
                  isActive
                    ? 'bg-gradient-to-b from-indigo-500 to-violet-600 border-indigo-300 text-white shadow-lg shadow-indigo-500/40 scale-105'
                    : 'bg-slate-900 hover:bg-slate-800/90 border-slate-800 text-slate-300'
                }`}
              >
                <span className="text-xs font-bold font-mono">{swarLabel}</span>
                <span className="text-[9px] text-slate-400 font-mono">{Math.round(freq)}Hz</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Controls & Synthesis Params */}
      <div className="mt-4 flex flex-wrap items-center justify-between gap-4 text-xs">
        <div className="flex items-center gap-2">
          <span className="text-slate-400 flex items-center gap-1">
            <Sliders className="w-3.5 h-3.5 text-indigo-400" /> Instrument:
          </span>
          {(['sitar', 'flute', 'tanpura'] as const).map((inst) => (
            <button
              key={inst}
              onClick={() => setInstrument(inst)}
              className={`px-2.5 py-1 rounded-md text-[11px] capitalize font-medium transition-colors cursor-pointer ${
                instrument === inst
                  ? 'bg-indigo-600 text-white'
                  : 'bg-slate-800 text-slate-400 hover:text-slate-200'
              }`}
            >
              {inst}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <label className="text-slate-400 flex items-center gap-1.5">
            <span>Tempo:</span>
            <span className="font-mono text-white text-[11px]">{tempo} BPM</span>
          </label>
          <input
            type="range"
            min="60"
            max="180"
            value={tempo}
            onChange={(e) => setTempo(Number(e.target.value))}
            className="w-24 accent-indigo-500 cursor-pointer"
          />
        </div>
      </div>

      <div className="mt-3 flex items-center gap-1.5 text-[11px] text-slate-500">
        <Info className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
        <span>Click any Swar note to synthesize immediate harmonic frequencies with dynamic ADSR envelopes.</span>
      </div>
    </div>
  );
};
