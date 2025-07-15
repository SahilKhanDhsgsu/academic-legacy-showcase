
import HeroSection from "@/components/HeroSection";
import AchievementsGrid from "@/components/AchievementsGrid";
import RecentHighlights from "@/components/RecentHighlights";
import CallToAction from "@/components/CallToAction";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AchievementsGrid />
      <RecentHighlights />
      <CallToAction />
    </div>
  );
};

export default Index;
