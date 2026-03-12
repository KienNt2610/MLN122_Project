import { useEffect, useMemo, useRef, useState } from "react";
import Header from "./components/Header";
import HeroIntro from "./components/HeroIntro";
import TopicMap from "./components/TopicMap";
import TopicTabs from "./components/TopicTabs";
import TopicDetail from "./components/TopicDetail";
import VideoPanel from "./components/VideoPanel";
import TimelineSection from "./components/TimelineSection";
import { sectionLinks, topics } from "./data/topics";

function App() {
  const [activeTopicId, setActiveTopicId] = useState(topics[0].id);
  const [activeSection, setActiveSection] = useState("hero");

  const heroRef = useRef(null);
  const overviewRef = useRef(null);
  const detailsRef = useRef(null);
  const timelineRef = useRef(null);

  const sectionRefs = useMemo(
    () => ({
      hero: heroRef,
      overview: overviewRef,
      details: detailsRef,
      timeline: timelineRef,
    }),
    [],
  );

  const activeTopic = topics.find((topic) => topic.id === activeTopicId) ?? topics[0];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry?.target?.id) {
          setActiveSection(visibleEntry.target.id);
        }
      },
      {
        threshold: [0.25, 0.5, 0.7],
        rootMargin: "-25% 0px -45% 0px",
      },
    );

    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => observer.disconnect();
  }, [sectionRefs]);

  const scrollToSection = (sectionId) => {
    sectionRefs[sectionId]?.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const handleTopicSelect = (topicId, shouldScroll = false) => {
    setActiveTopicId(topicId);

    if (shouldScroll) {
      detailsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="app-shell">
      <Header
        links={sectionLinks}
        activeSection={activeSection}
        onNavigate={scrollToSection}
        activeTopicTitle={activeTopic.title}
      />

      <main>
        <section id="hero" ref={heroRef}>
          <HeroIntro
            onExplore={() => scrollToSection("overview")}
            onJumpDetails={() => scrollToSection("details")}
          />
        </section>

        <section id="overview" ref={overviewRef}>
          <TopicMap
            topics={topics}
            activeTopicId={activeTopicId}
            onSelect={(topicId) => handleTopicSelect(topicId, true)}
          />
        </section>

        <section id="details" ref={detailsRef} className="section-shell detail-stage">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">Chi tiết học thuật</p>
              <h2>Phân tích sâu theo từng nhóm nội dung</h2>
              <p>
                Chuyển đổi giữa các tab để xem tổng quan, 3 mục con nổi bật và các
                tác động tiêu biểu tương ứng với nhóm đang được chọn.
              </p>
            </div>

            <TopicTabs
              topics={topics}
              activeTopicId={activeTopicId}
              onSelect={(topicId) => handleTopicSelect(topicId)}
            />

            <div className="detail-stage__grid">
              <VideoPanel topic={activeTopic} />
              <TopicDetail topic={activeTopic} />
            </div>
          </div>
        </section>

        <section id="timeline" ref={timelineRef}>
          <TimelineSection
            topics={topics}
            activeTopicId={activeTopicId}
            onSelect={(topicId) => handleTopicSelect(topicId, true)}
          />
        </section>
      </main>
    </div>
  );
}

export default App;
