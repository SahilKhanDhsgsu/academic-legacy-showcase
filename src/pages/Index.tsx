
import HeroSection from "@/components/HeroSection";
import AchievementsGrid from "@/components/AchievementsGrid";
import RecentHighlights from "@/components/RecentHighlights";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AchievementsGrid />
      <RecentHighlights />
    </div>
  );
};

export default Index;
