import Hero from "@/components/Hero";
import CoreInfo from "@/components/CoreInfo";
import HappyHour from "@/components/HappyHour";
import LocationsGrid from "@/components/LocationsGrid";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main>
      <Hero />
      <CoreInfo />
      <HappyHour />
      <LocationsGrid />
      <Testimonials />
    </main>
  );
}
