import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Book, Church, Flame } from "lucide-react";

export function Nav() {
  const [location] = useLocation();

  const links = [
    { href: "/", label: "Sanctuary", icon: Church },
    { href: "/booth", label: "Confess", icon: Book },
    { href: "/altar", label: "Offerings", icon: Flame },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-background/95 backdrop-blur-sm p-4 pb-6 md:top-0 md:bottom-auto md:border-t-0 md:border-b md:pb-4">
      <div className="mx-auto flex max-w-md items-center justify-around md:max-w-4xl md:justify-center md:gap-12">
        {links.map((link) => {
          const Icon = link.icon;
          const isActive = location === link.href;
          return (
            <Link key={link.href} href={link.href}>
              <a
                className={cn(
                  "flex flex-col items-center gap-1 transition-all duration-300 hover:text-primary",
                  isActive ? "text-primary scale-110" : "text-muted-foreground"
                )}
              >
                <Icon className={cn("h-6 w-6", isActive && "drop-shadow-[0_0_8px_rgba(var(--primary),0.5)]")} />
                <span className="font-heading text-xs uppercase tracking-widest opacity-80">{link.label}</span>
              </a>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
