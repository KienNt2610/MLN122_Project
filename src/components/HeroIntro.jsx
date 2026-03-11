function HeroIntro({ onExplore, onJumpDetails }) {
  return (
    <section className="hero-intro section-shell">
      <div className="container hero-intro__grid">
        <div className="hero-intro__content">
          <p className="eyebrow">Landing page học thuật tương tác</p>
          <h1>Triết học Mác - Lênin & Cách mạng Tháng Tám 1945</h1>
          <p className="hero-intro__lead">
            Một không gian học tập bằng tiếng Việt, trình bày 6 chuyên đề cốt lõi
            theo hướng trực quan, đồng bộ và dễ chuyển thành bài thuyết trình.
          </p>
          <div className="hero-intro__actions">
            <button className="button-primary" type="button" onClick={onExplore}>
              Khám phá chuyên đề
            </button>
            <button className="button-secondary" type="button" onClick={onJumpDetails}>
              Xem nội dung chi tiết
            </button>
          </div>
        </div>

        <div className="hero-intro__panel" aria-label="Điểm nhấn nội dung học thuật">
          <div className="hero-stat">
            <span className="hero-stat__value">6</span>
            <span className="hero-stat__label">chủ đề trọng tâm</span>
          </div>
          <div className="hero-stat">
            <span className="hero-stat__value">1945</span>
            <span className="hero-stat__label">mốc lịch sử bản lề</span>
          </div>
          <div className="hero-quote">
            <p>
              “Hiểu đúng quy luật vận động của lịch sử là điều kiện để hành động
              đúng trong thực tiễn.”
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroIntro;
