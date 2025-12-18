import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Skull, Send, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export function Confessional() {
  const [sin, setSin] = useState("");
  const [isConfessing, setIsConfessing] = useState(false);
  const { toast } = useToast();

  const handleConfess = () => {
    if (!sin.trim()) return;
    
    setIsConfessing(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsConfessing(false);
      setSin("");
      toast({
        title: "Absolution Granted",
        description: "Your burden has been lifted into the digital void.",
        className: "bg-background border-primary text-primary-foreground font-serif",
      });
    }, 2000);
  };

  return (
    <div className="relative mx-auto max-w-2xl px-4 py-12">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-primary)_0%,_transparent_70%)] opacity-10 blur-3xl" />
      
      <Card className="relative overflow-hidden border-border bg-card/50 p-8 backdrop-blur-md">
        <div className="mb-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Skull className="mx-auto h-12 w-12 text-primary opacity-80" />
            <h2 className="mt-4 font-gothic text-4xl text-foreground">Forgive Me Father</h2>
            <p className="mt-2 font-serif text-lg italic text-muted-foreground">
              "For I have sinned..."
            </p>
          </motion.div>
        </div>

        <div className="space-y-6">
          <div className="relative">
            <Textarea
              value={sin}
              onChange={(e) => setSin(e.target.value)}
              placeholder="Speak your truth to the void..."
              className="min-h-[200px] resize-none border-primary/20 bg-black/40 font-serif text-lg italic text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:ring-1 focus:ring-primary"
            />
            <div className="pointer-events-none absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/aged-paper.png')] opacity-10 mix-blend-overlay" />
          </div>

          <div className="flex justify-center">
            <Button
              onClick={handleConfess}
              disabled={isConfessing || !sin.trim()}
              size="lg"
              className="group relative overflow-hidden border border-primary/50 bg-primary/10 px-8 py-6 font-heading text-lg uppercase tracking-widest text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <span className="relative z-10 flex items-center gap-2">
                {isConfessing ? "Absolving..." : "Confess"}
                {!isConfessing && <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />}
              </span>
              <motion.div
                className="absolute inset-0 bg-primary"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ type: "tween", ease: "circOut" }}
              />
            </Button>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="font-serif text-sm text-muted-foreground opacity-60">
            Your confession is encrypted and sent directly to the ether. No mortal eyes shall see it.
          </p>
        </div>
      </Card>
    </div>
  );
}
