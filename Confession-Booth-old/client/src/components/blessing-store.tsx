import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Flame, HandHeart, Sparkles } from "lucide-react";
import { useState } from "react";
import { CheckoutDialog } from "./checkout-dialog";

const ITEMS = [
  {
    id: "candle",
    name: "Digital Candle",
    price: "$1.00",
    description: "Light a candle in the digital cathedral. Burns for 24 hours.",
    icon: Flame,
    color: "text-orange-500",
    gradient: "from-orange-500/20 to-transparent",
  },
  {
    id: "indulgence",
    name: "Minor Indulgence",
    price: "$5.00",
    description: "A certificate of digital forgiveness for minor transgressions.",
    icon: HandHeart,
    color: "text-primary",
    gradient: "from-primary/20 to-transparent",
  },
  {
    id: "blessing",
    name: "High Blessing",
    price: "$10.00",
    description: "Receive a personalized blessing algorithmically generated for your soul.",
    icon: Sparkles,
    color: "text-accent",
    gradient: "from-accent/20 to-transparent",
  },
];

export function BlessingStore() {
  const [selectedItem, setSelectedItem] = useState<typeof ITEMS[0] | null>(null);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const handlePurchase = (item: typeof ITEMS[0]) => {
    setSelectedItem(item);
    setIsCheckoutOpen(true);
  };

  return (
    <>
      <div className="grid gap-6 md:grid-cols-3">
        {ITEMS.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="group relative overflow-hidden border-border bg-card/40 p-6 transition-all hover:border-accent/50 hover:bg-card/60">
              <div className={`absolute inset-0 bg-gradient-to-b ${item.gradient} opacity-0 transition-opacity group-hover:opacity-100`} />
              
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className={`mb-4 rounded-full bg-background/50 p-4 ring-1 ring-border transition-all group-hover:scale-110 group-hover:ring-accent/50 ${item.color}`}>
                  <item.icon className="h-8 w-8" />
                </div>
                
                <h3 className="mb-2 font-heading text-xl font-bold tracking-wide">{item.name}</h3>
                <p className="mb-6 font-serif text-sm text-muted-foreground">{item.description}</p>
                
                <div className="mt-auto w-full">
                  <Button 
                    onClick={() => handlePurchase(item)}
                    className="w-full border border-accent/20 bg-accent/5 font-heading uppercase tracking-widest text-accent hover:bg-accent hover:text-accent-foreground"
                  >
                    Offering {item.price}
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      <CheckoutDialog 
        open={isCheckoutOpen} 
        onOpenChange={setIsCheckoutOpen} 
        item={selectedItem} 
      />
    </>
  );
}
