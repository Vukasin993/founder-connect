import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { initAnalytics, trackEvent, trackPageView } from "@/lib/analytics";
import Index from "./pages/Index.tsx";
import DeleteAccount from "./pages/DeleteAccount.tsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const AnalyticsTracker = () => {
  const location = useLocation();
  const triggeredDepthsRef = useRef<number[]>([]);
  const viewedSectionsRef = useRef<Set<string>>(new Set());

  useEffect(() => {
    void initAnalytics();
  }, []);

  useEffect(() => {
    const pagePath = `${location.pathname}${location.search}${location.hash}`;

    triggeredDepthsRef.current = [];
    viewedSectionsRef.current = new Set();
    trackPageView(pagePath, document.title);
  }, [location]);

  useEffect(() => {
    const thresholds = [25, 50, 75, 100];

    const onScroll = () => {
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = documentHeight <= 0 ? 100 : Math.round((window.scrollY / documentHeight) * 100);

      thresholds.forEach((threshold) => {
        if (scrollPercent >= threshold && !triggeredDepthsRef.current.includes(threshold)) {
          triggeredDepthsRef.current.push(threshold);
          trackEvent("scroll_depth", {
            percent_scrolled: threshold,
            page_path: window.location.pathname,
          });
        }
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, [location.pathname]);

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>("section[id]"));

    if (!sections.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting || entry.intersectionRatio < 0.45) {
            return;
          }

          const section = entry.target as HTMLElement;
          const sectionId = section.id;

          if (!sectionId || viewedSectionsRef.current.has(sectionId)) {
            return;
          }

          viewedSectionsRef.current.add(sectionId);

          const headingId = section.getAttribute("aria-labelledby");
          const headingText = headingId
            ? document.getElementById(headingId)?.textContent?.trim()
            : undefined;

          trackEvent("section_view", {
            section_id: sectionId,
            section_title: headingText,
            page_path: window.location.pathname,
          });
        });
      },
      {
        threshold: [0.45],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [location.pathname]);

  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AnalyticsTracker />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/delete-account" element={<DeleteAccount />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
