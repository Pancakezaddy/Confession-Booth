import { Nav } from "@/components/nav";
import { BlessingStore } from "@/components/blessing-store";
import { motion } from "framer-motion";

export default function Altar() {
  return (
    <div className="min-h-screen bg-background pb-24 pt-12 md:pb-12 md:pt-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-12 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 font-gothic text-5xl text-accent md:text-7xl"
          >
            The Altar
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mx-auto h-1 w-24 bg-gradient-to-r from-transparent via-accent to-transparent" 
          />
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-6 font-serif text-lg text-muted-foreground"
          >
            Leave an offering to cleanse your digital spirit.
          </motion.p>
        </div>

        <BlessingStore />
      </div>
      
      <Nav />
    </div>
  );
}
