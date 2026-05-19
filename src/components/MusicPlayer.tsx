import { useEffect, useRef, useState } from "react";
import { Music2, VolumeX } from "lucide-react";
import { motion } from "framer-motion";
import bgaudio from "@/assets/bg-audio.mp3";

const MUSIC_URL = bgaudio;

export function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    // Reduced Volume
    audio.volume = 0.12;

    // Loop Music
    audio.loop = true;

    // Try autoplay immediately
    const playAudio = async () => {
      try {
        await audio.play();
        setPlaying(true);
      } catch (error) {
        console.log("Autoplay blocked until user interaction");

        // Mobile browsers block autoplay
        // So play after first interaction
        const enableAudio = async () => {
          try {
            await audio.play();
            setPlaying(true);
          } catch (err) {
            console.log(err);
          }

          window.removeEventListener("click", enableAudio);
          window.removeEventListener("touchstart", enableAudio);
        };

        window.addEventListener("click", enableAudio, { once: true });
        window.addEventListener("touchstart", enableAudio, {
          once: true,
        });
      }
    };

    playAudio();
  }, []);

  // Toggle Play / Pause
  const toggleMusic = async () => {
    const audio = audioRef.current;

    if (!audio) return;

    if (audio.paused) {
      try {
        await audio.play();
        setPlaying(true);
      } catch (error) {
        console.log(error);
      }
    } else {
      audio.pause();
      setPlaying(false);
    }
  };

  return (
    <>
      {/* Audio */}
      <audio ref={audioRef} src={MUSIC_URL} preload="auto" />

      {/* Music Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2, duration: 0.7 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        onClick={toggleMusic}
        aria-label={
          playing ? "Pause background music" : "Play background music"
        }
        className="glass shadow-glow fixed bottom-6 right-6 z-50 grid h-14 w-14 place-items-center rounded-full text-rose-deep backdrop-blur-xl transition-all"
      >
        {/* Animated Ring */}
        {playing && (
          <>
            <span className="absolute inset-0 rounded-full border border-gold/40 animate-ping" />

            <span className="absolute inset-[-5px] rounded-full border border-gold/20" />
          </>
        )}

        {/* Icon */}
        {playing ? (
          <Music2 className="relative z-10 h-5 w-5" />
        ) : (
          <VolumeX className="relative z-10 h-5 w-5" />
        )}
      </motion.button>
    </>
  );
}