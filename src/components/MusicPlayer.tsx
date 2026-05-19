import { useEffect, useRef, useState } from "react";
import { Music2, VolumeX } from "lucide-react";
import { motion } from "framer-motion";

// Royalty-free soft instrumental (Pixabay CDN)
const MUSIC_URL = "https://cdn.pixabay.com/audio/2022/10/18/audio_31748d3584.mp3";

export function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = 0.35;
    audio.loop = true;
    const tryPlay = () => {
      audio
        .play()
        .then(() => setPlaying(true))
        .catch(() => setPlaying(false));
    };
    tryPlay();
    const onInteract = () => {
      if (audio.paused) tryPlay();
      window.removeEventListener("pointerdown", onInteract);
    };
    window.addEventListener("pointerdown", onInteract, { once: true });
    return () => window.removeEventListener("pointerdown", onInteract);
  }, []);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      audio.play().then(() => setPlaying(true)).catch(() => {});
    } else {
      audio.pause();
      setPlaying(false);
    }
  };

  return (
    <>
      <audio ref={audioRef} src={MUSIC_URL} preload="auto" />
      <motion.button
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.4, duration: 0.7 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        onClick={toggle}
        aria-label={playing ? "Mute background music" : "Play background music"}
        className="fixed bottom-6 right-6 z-50 grid h-14 w-14 place-items-center rounded-full glass shadow-glow text-rose-deep"
      >
        {playing && (
          <>
            <span className="absolute inset-0 rounded-full border border-gold/40 animate-ping" />
            <span className="absolute inset-[-6px] rounded-full border border-gold/20" />
          </>
        )}
        {playing ? <Music2 className="h-5 w-5" /> : <VolumeX className="h-5 w-5" />}
      </motion.button>
    </>
  );
}
