"use client"
import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Volume2, VolumeX, ThermometerSnowflake, ThermometerSun, ShieldCheck } from 'lucide-react'

export default function InsulationSimulator({ isEn }: { isEn?: boolean }) {
  const [isClosed, setIsClosed] = useState(false)
  const [hasStarted, setHasStarted] = useState(false)
  const audioCtxRef = useRef<AudioContext | null>(null)
  const gainNodeRef = useRef<GainNode | null>(null)
  const noiseSourceRef = useRef<AudioBufferSourceNode | null>(null)

  // Generate Brown Noise Buffer for city rumble simulation
  const createBrownNoise = (ctx: AudioContext) => {
    const bufferSize = 2 * ctx.sampleRate;
    const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const output = noiseBuffer.getChannelData(0);
    let lastOut = 0;
    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      output[i] = (lastOut + (0.02 * white)) / 1.02;
      lastOut = output[i];
      output[i] *= 3.5; // Compensate gain
    }
    return noiseBuffer;
  }

  const toggleWindow = async () => {
    if (!hasStarted) {
      const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
      const ctx = new AudioContext();
      audioCtxRef.current = ctx;

      const noiseBuffer = createBrownNoise(ctx);
      const noiseSource = ctx.createBufferSource();
      noiseSource.buffer = noiseBuffer;
      noiseSource.loop = true;

      const gainNode = ctx.createGain();
      gainNode.gain.value = 0; // target is 0 initially, we'll sweep it
      
      noiseSource.connect(gainNode);
      gainNode.connect(ctx.destination);
      
      noiseSource.start();
      noiseSourceRef.current = noiseSource;
      gainNodeRef.current = gainNode;
      setHasStarted(true);
    }
    
    const newIsClosed = !isClosed;
    setIsClosed(newIsClosed);
    
    if (audioCtxRef.current && gainNodeRef.current) {
        // Resume context if suspended
        if (audioCtxRef.current.state === 'suspended') {
            await audioCtxRef.current.resume();
        }
        
        const now = audioCtxRef.current.currentTime;
        if (newIsClosed) {
            // Close window: sharp drop in volume (Thud effect context)
            gainNodeRef.current.gain.setValueCurveAtTime(new Float32Array([0.8, 0.01]), now, 0.05);
        } else {
            // Open window: instant loud noise
            gainNodeRef.current.gain.setValueCurveAtTime(new Float32Array([0.01, 0.8]), now, 0.1);
        }
    }
  }
  
  useEffect(() => {
    return () => {
       if (noiseSourceRef.current) {
           noiseSourceRef.current.stop();
       }
       if (audioCtxRef.current) {
           audioCtxRef.current.close();
       }
    }
  }, [])

  return (
    <div className="bg-navy p-6 md:p-8 rounded-[32px] border border-white/10 shadow-2xl relative overflow-hidden mt-16 max-w-4xl mx-auto">
      <div className="absolute inset-0 bg-gradient-to-br from-red/5 to-transparent pointer-events-none"></div>
      
      <div className="relative z-10 text-center mb-10">
        <h3 className="text-2xl md:text-3xl font-black text-white mb-3">{isEn ? 'Experience Alumil Insulation' : 'Βιώστε την Ηχομόνωση Alumil'}</h3>
        <p className="text-gray-400 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
          {isEn ? 'Turn up your device volume and tap the window to literally hear and see the acoustic and thermal difference.' : 'Ανεβάστε την ένταση του ήχου στη συσκευή σας και πατήστε πάνω στο κούφωμα για να βιώσετε live τη διαφορά (45dB).'}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">
        {/* Window UI */}
        <div className="flex flex-col items-center justify-center order-1 md:order-1">
            <button 
              onClick={toggleWindow}
              className="relative w-full max-w-[260px] md:max-w-[280px] aspect-[3/4] bg-gray-900 border-[8px] border-gray-400 rounded-lg shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden cursor-pointer group active:scale-[0.97] transition-transform duration-300 touch-manipulation"
            >
               {/* View outside */}
               <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=800&auto=format&fit=crop')] bg-cover bg-center transition-all duration-500">
                  <div className={`absolute inset-0 transition-opacity duration-300 ${isClosed ? 'bg-blue-900/30 backdrop-blur-md' : 'bg-transparent'}`}></div>
               </div>
               
               {/* Left Glass Pane */}
               <motion.div 
                 animate={{ x: isClosed ? 0 : '-90%' }}
                 transition={{ type: "spring", stiffness: 350, damping: 25 }}
                 className="absolute top-0 bottom-0 left-0 w-1/2 border-r-[4px] border-gray-400 bg-white/10 backdrop-blur-md shadow-[inset_-5px_0_20px_rgba(255,255,255,0.2)]"
               />
               
               {/* Right Glass Pane */}
               <motion.div 
                 animate={{ x: isClosed ? 0 : '90%' }}
                 transition={{ type: "spring", stiffness: 350, damping: 25 }}
                 className="absolute top-0 bottom-0 right-0 w-1/2 border-l-[4px] border-gray-400 bg-white/10 backdrop-blur-md shadow-[inset_5px_0_20px_rgba(255,255,255,0.2)]"
               />

               {/* Handle */}
               <motion.div 
                 animate={{ rotate: isClosed ? 0 : -90, x: isClosed ? 0 : 20 }}
                 transition={{ type: "spring", stiffness: 350, damping: 25 }}
                 className="absolute top-1/2 left-1/2 -mt-6 w-2 h-12 bg-gray-300 rounded-sm shadow-md"
               />

               <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 backdrop-blur-xl px-5 py-2.5 rounded-full border border-white/20 whitespace-nowrap shadow-xl">
                   <span className="text-white text-[10px] md:text-xs font-bold tracking-widest uppercase flex items-center gap-2">
                       {isClosed ? <ShieldCheck size={14} className="text-green-400" /> : <Volume2 size={14} className="text-red" />}
                       {isClosed ? (isEn ? 'Open Window' : 'Ανοιγμα Κουφωματος') : (isEn ? 'Close Window' : 'Κλεισιμο Κουφωματος')}
                   </span>
               </div>
            </button>
        </div>

        {/* Environment Simulator Stats */}
        <div className="flex flex-col gap-6 justify-center order-2 md:order-2">
           <div className="flex items-center gap-5 bg-white/5 border border-white/10 p-5 rounded-2xl w-full">
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center transition-colors duration-500 shadow-inner ${isClosed ? 'bg-green-500/20 text-green-400 border border-green-500/30' : 'bg-red-500/20 text-red border border-red/30'}`}>
                 {isClosed ? <VolumeX size={28} /> : <Volume2 size={28} className="animate-pulse" />}
              </div>
              <div className="flex-1">
                 <div className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-1.5">{isEn ? 'City Environment Noise' : 'Ηχορυπανση Περιβαλλοντος'}</div>
                 <div className="flex items-end gap-2">
                   <div className="font-black text-3xl text-white font-mono transition-all duration-300">
                      {isClosed ? '35 dB' : '85 dB'}
                   </div>
                   <div className="text-gray-500 text-sm mb-1 font-medium">{isClosed ? (isEn ? 'Silent' : 'Απόλυτη Ησυχία') : (isEn ? 'Traffic' : 'Ισχυρός Θόρυβος')}</div>
                 </div>
              </div>
           </div>

           <div className="flex items-center gap-5 bg-white/5 border border-white/10 p-5 rounded-2xl w-full">
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center transition-colors duration-500 shadow-inner ${isClosed ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' : 'bg-orange-500/20 text-orange-500 border border-orange-500/30'}`}>
                 {isClosed ? <ThermometerSnowflake size={28} /> : <ThermometerSun size={28} className="animate-pulse" />}
              </div>
              <div className="flex-1">
                 <div className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-1.5">{isEn ? 'Room Temperature' : 'Εσωτερικη Θερμοκρασια'}</div>
                 <div className="flex items-end gap-2">
                   <div className="font-black text-3xl text-white font-mono transition-all duration-300">
                      {isClosed ? '22°C' : '40°C'}
                   </div>
                   <div className="text-gray-500 text-sm mb-1 font-medium">{isClosed ? (isEn ? 'Comfortable' : 'Ιδανική') : (isEn ? 'Heatwave' : 'Καύσωνας')}</div>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  )
}
