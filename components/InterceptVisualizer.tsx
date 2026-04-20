'use client';

import dynamic from 'next/dynamic';

const AudioVisualizer = dynamic(() => import('@/components/AudioVisualizer'), { ssr: false });

export default function InterceptVisualizer() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full relative overflow-hidden bg-[#050000]">
      {/* Top Secret Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03]">
        <span className="text-6xl sm:text-8xl font-black font-geist-mono text-white -rotate-12 tracking-widest whitespace-nowrap">CLASSIFIED</span>
      </div>
      
      <div className="flex flex-col items-center z-10 w-full px-8 p-12 border-y border-red-primary/20 bg-black/50">
        <div className="flex w-full justify-between items-center mb-8">
          <span className="text-red-primary/60 text-[10px] font-geist-mono tracking-widest">FREQ_BAND: 140.23MHz</span>
          <span className="text-red-primary/60 text-[10px] font-geist-mono tracking-widest text-right">ENCRYPTION: AES-256</span>
        </div>
        
        {/* Audio Waveform Animation via ssr:false dynamic import */}
        <AudioVisualizer />

        <div className="text-red-primary text-lg sm:text-2xl font-geist-mono font-bold uppercase tracking-widest flex items-center bg-red-primary/10 px-6 py-2 border border-red-primary/30">
          <span className="animate-pulse mr-4 text-red-accent text-3xl leading-none">●</span> LIVE_INTERCEPT
        </div>
      </div>
    </div>
  );
}
