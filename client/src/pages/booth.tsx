import { Nav } from "@/components/nav";
import { Confessional } from "@/components/confessional";
import cathedral from "@assets/generated_images/dark_gothic_cathedral_interior_with_candlelight.png";

export default function Booth() {
  return (
    <div className="relative min-h-screen pb-20 md:pb-0">
      <div className="fixed inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(${cathedral})` }}
        />
        <div className="absolute inset-0 bg-background/80 backdrop-blur-[2px]" />
      </div>

      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center p-4">
        <Confessional />
      </div>
      
      <Nav />
    </div>
  );
}
