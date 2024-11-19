import { motion } from "motion/react";
import { useRef } from "react";

export default function App() {
  const contiRef = useRef(null);
  return (
    <div
      ref={contiRef}
      className="relative flex items-center justify-center min-h-screen overflow-hidden font-sans">
      <div className="group w-[400px] cursor-pointer">
        <h1 className="text-4xl text-center select-none">
          Hello Ruhan :3
        </h1>
        <motion.img
          drag
          dragConstraints={contiRef}
          // lock
          // dragDirectionLock
          // come back
          // dragSnapToOrigin
          dragElastic={1}
          dragTransition={{
            bounceStiffness: 20,
            bounceDamping: 10,
          }}
          transition={{
            ease: [0.25, 0.1, 0.25, 1],
            duration: 0.3,
            type: "spring",
          }}
          className="rounded-lg cursor-grab"
          src="https://cdn.discordapp.com/emojis/1152696704303370371.gif?size=512&quality=lossless"
        />
        
      </div>
    </div>
  );
}
