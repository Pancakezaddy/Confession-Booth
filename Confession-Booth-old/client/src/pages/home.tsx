import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import stainedGlass from "@assets/generated_images/stained_glass_window_pattern_abstract.png";
import cross from "@assets/generated_images/ornate_gold_cross_on_dark_textured_background.png";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background with parallax-like effect */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20 blur-sm"
          style={{ backgroundImage: `url(${stainedGlass})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
      </div>

      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="mb-8"
        >
          <img 
            src={cross} 
            alt="Confessio Cross" 
            className="mx-auto h-32 w-32 rounded-full border-2 border-primary/20 object-cover shadow-[0_0_30px_rgba(var(--primary),0.3)] grayscale transition-all duration-1000 hover:grayscale-0"
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mb-4 font-gothic text-6xl text-foreground md:text-8xl"
        >
          Confessio
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mb-12 max-w-lg font-serif text-xl italic text-muted-foreground"
        >
          "Unburden your soul in the digital sanctuary. 
          The void is listening, and it does not judge."
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          className="flex flex-col gap-4 sm:flex-row"
        >
          <Link href="/booth">
            <Button size="lg" className="min-w-[200px] border border-primary bg-primary/10 px-8 py-6 font-heading text-lg uppercase tracking-widest text-primary hover:bg-primary hover:text-primary-foreground">
              Enter Booth
            </Button>
          </Link>
          <Link href="/altar">
            <Button size="lg" variant="outline" className="min-w-[200px] border-accent/50 bg-transparent px-8 py-6 font-heading text-lg uppercase tracking-widest text-accent hover:border-accent hover:bg-accent/10">
              Visit Altar
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
