function Header({ links, activeSection, onNavigate, activeTopicTitle }) {
  return (
    <header className="site-header">
      <div className="container header-shell">
        <button className="brand-mark" type="button" onClick={() => onNavigate("hero")}>
          <span className="brand-mark__eyebrow">Hồ sơ học thuật</span>
          <span className="brand-mark__title">Triêt học Mác - Lênin 1945</span>
        </button>

        <nav className="section-nav" aria-label="Điều hướng phần nội dung">
          {links.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                type="button"
                className={`section-nav__link ${isActive ? "is-active" : ""}`}
                onClick={() => onNavigate(link.id)}
                aria-current={isActive ? "page" : undefined}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        <div className="header-status" aria-live="polite">
          <span className="header-status__label">Chủ đề đang xem</span>
          <strong className="header-status__value">{activeTopicTitle}</strong>
        </div>
      </div>
    </header>
  );
}

export default Header;
