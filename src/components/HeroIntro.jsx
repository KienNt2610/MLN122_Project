function HeroIntro({ onExplore, onJumpDetails }) {
  return (
    <section className="hero-intro section-shell">
      <div className="container hero-intro__grid">
        <div className="hero-intro__content">
          <p className="eyebrow">Landing page học thuật tương tác</p>
          <h1>Thế kỷ 21 qua các sự kiện, thành tựu và biến đổi nổi bật</h1>
          <p className="hero-intro__lead">
            Một giao diện trình bày giúp người xem đi từ tổng quan đến phân tích
            chi tiết của 4 nhóm nội dung lớn: lịch sử, khoa học công nghệ, văn hóa
            nghệ thuật và kinh tế xã hội.
          </p>
          <div className="hero-intro__actions">
            <button className="button-primary" type="button" onClick={onExplore}>
              Khám phá nhóm nội dung
            </button>
            <button className="button-secondary" type="button" onClick={onJumpDetails}>
              Xem phân tích chi tiết
            </button>
          </div>
        </div>

        <div className="hero-intro__panel" aria-label="Điểm nhấn nội dung học thuật">
          <div className="hero-stat">
            <span className="hero-stat__value">4</span>
            <span className="hero-stat__label">nhóm nội dung lớn</span>
          </div>
          <div className="hero-stat">
            <span className="hero-stat__value">12</span>
            <span className="hero-stat__label">dấu mốc tiêu biểu</span>
          </div>
          <div className="hero-quote">
            <p>
              “Bấm vào từng nhóm để thấy cách thế kỷ 21 được định hình bởi các cú
              sốc, đột phá và chuyển dịch lớn.”
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroIntro;
