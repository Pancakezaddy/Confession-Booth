import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CreditCard, Lock, Smartphone } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

interface CheckoutDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  item: { name: string; price: string } | null;
}

export function CheckoutDialog({ open, onOpenChange, item }: CheckoutDialogProps) {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate processing
    setTimeout(() => {
      setLoading(false);
      onOpenChange(false);
      toast({
        title: "Offering Accepted",
        description: "Your transaction has been recorded in the eternal ledger.",
        className: "bg-background border-primary text-primary-foreground font-serif",
      });
    }, 2000);
  };

  if (!item) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="border-border bg-card/95 backdrop-blur-xl sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="font-heading text-2xl tracking-wide text-primary">
            Confirm Offering
          </DialogTitle>
          <DialogDescription className="font-serif italic">
            You are about to offer <span className="text-foreground">{item.name}</span> for{" "}
            <span className="text-accent">{item.price}</span>.
          </DialogDescription>
        </DialogHeader>

        <Tabs defaultValue="card" className="w-full">
          <TabsList className="grid w-full grid-cols-2 bg-muted/50">
            <TabsTrigger value="card">Card</TabsTrigger>
            <TabsTrigger value="apple">Apple Pay</TabsTrigger>
          </TabsList>

          <TabsContent value="card">
            <form onSubmit={handlePayment} className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Cardholder Name</Label>
                <Input
                  id="name"
                  placeholder="M. Rossi"
                  className="border-input bg-background/50 font-mono"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="number">Card Number</Label>
                <div className="relative">
                  <Input
                    id="number"
                    placeholder="0000 0000 0000 0000"
                    className="border-input bg-background/50 font-mono pl-10"
                    required
                  />
                  <CreditCard className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="expiry">Expiry</Label>
                  <Input
                    id="expiry"
                    placeholder="MM/YY"
                    className="border-input bg-background/50 font-mono"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="cvc">CVC</Label>
                  <Input
                    id="cvc"
                    placeholder="123"
                    className="border-input bg-background/50 font-mono"
                    required
                  />
                </div>
              </div>
              
              <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
                <Lock className="h-3 w-3" />
                <span>Encrypted by 256-bit divine algorithm</span>
              </div>

              <DialogFooter className="mt-4">
                <Button 
                  type="submit" 
                  disabled={loading}
                  className="w-full border border-primary bg-primary/20 text-primary hover:bg-primary hover:text-primary-foreground font-heading tracking-widest uppercase"
                >
                  {loading ? "Processing..." : `Pay ${item.price}`}
                </Button>
              </DialogFooter>
            </form>
          </TabsContent>

          <TabsContent value="apple" className="py-4">
            <div className="flex flex-col items-center justify-center space-y-6 py-8">
              <div className="rounded-full bg-background/50 p-6 ring-1 ring-border">
                <Smartphone className="h-12 w-12 text-foreground" />
              </div>
              <p className="text-center font-serif text-muted-foreground">
                Confirm offering using Apple Pay on your device.
              </p>
              
              <Button
                onClick={(e) => handlePayment(e as any)}
                disabled={loading}
                className="h-12 w-full max-w-xs bg-white text-black hover:bg-white/90"
              >
                {loading ? (
                  <span className="animate-pulse">Processing...</span>
                ) : (
                  <span className="flex items-center gap-2 font-semibold">
                    <svg className="h-4 w-4" viewBox="0 0 512 512" fill="currentColor">
                      <path d="M369.3 277.6c-.6-76.6 63.3-113.8 66-115.3-36-52.6-91.8-59.8-111.7-60.6-47.5-4.8-92.7 27.9-116.8 27.9-24 0-61.1-27.3-100.4-26.6-51.7.8-99.3 30.1-126.1 76.4-53.8 93.1-13.8 230.9 38.8 306.4 25.7 36.9 56.3 78.4 96.5 76.9 38.6-1.5 53.2-25 99.8-25 46.2 0 59.4 24.9 100.2 24.1 41.5-.7 67.8-37.5 93.2-74.9 29.4-42.8 41.4-84.3 42-86.4-.9-.4-80.9-31-81.5-122.9zm-72.2-167.3c21.2-25.7 35.5-61.4 31.6-97.1-30.5 1.2-67.4 20.3-89.3 45.7-19.1 21.9-35.7 57.1-31.2 90.7 33.9 2.6 68.4-15.6 88.9-39.3z" />
                    </svg>
                    Pay with Apple Pay
                  </span>
                )}
              </Button>
              
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Lock className="h-3 w-3" />
                <span>Secured by Touch ID / Face ID</span>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}
