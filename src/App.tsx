import Header from "./components/Header";
import HomeSection from "./components/HomeSection";
import AboutSection from "./components/AboutSection";
import TreatmentsSection from "./components/TreatmentsSection";
import ContactSection from "./components/ContactSection";
import ConsultationSection from "./components/ConsultationSection";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import LoadingScreen from "./components/LoadingScreen";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    const loadingDuration = 2000;
    const intervalDelay = 20;
    const progressIncrement = 100 / (loadingDuration / intervalDelay);

    const interval = window.setInterval(() => {
      setLoadingProgress((currentProgress) => {
        const nextProgress = currentProgress + progressIncrement;
        return nextProgress >= 100 ? 100 : nextProgress;
      });
    }, intervalDelay);

    const timer = window.setTimeout(() => {
      setIsLoading(false);
      window.clearInterval(interval);
    }, loadingDuration);

    return () => {
      window.clearTimeout(timer);
      window.clearInterval(interval);
    };
  }, []);

  return (
    <div>
      {isLoading && <LoadingScreen progress={loadingProgress} />}
      <main className="min-h-screen bg-[#f8fbfd] text-slate-900">
        <Header />
        <HomeSection />
        <AboutSection />
        <TreatmentsSection />
        <ContactSection />
        <ConsultationSection />
        <Footer />
      </main>
    </div>
  );
}
