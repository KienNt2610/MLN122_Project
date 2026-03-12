const galleryImages = [
  {
    src: "/z7610668392242_49476790d35192de17a7988ce10b3410.jpg",
    alt: "Hình minh họa 1 cho nội dung Thế kỷ 21",
  },
  {
    src: "/z7610668392277_65ec6e5c3a70c9c4b668df2b5ba708e9.jpg",
    alt: "Hình minh họa 2 cho nội dung Thế kỷ 21",
  },
  {
    src: "/z7610668451193_dcaf547d5aad375c47bd5b3c52464e55.jpg",
    alt: "Hình minh họa 3 cho nội dung Thế kỷ 21",
  },
];

function TopicDetail({ topic }) {
  return (
    <article
      className="topic-detail"
      id={`panel-${topic.id}`}
      role="tabpanel"
      aria-labelledby={`tab-${topic.id}`}
    >
      <img
        className="topic-detail__image"
        src={topic.image}
        alt={`Minh họa cho nhóm ${topic.title}`}
      />

      <div className="topic-detail__gallery" aria-label="Bộ ảnh minh họa">
        {galleryImages.map((image, index) => (
          <figure
            key={image.src}
            className={`topic-detail__gallery-item ${index === 0 ? "is-featured" : ""}`}
          >
            <img src={image.src} alt={image.alt} />
          </figure>
        ))}
      </div>

      <div className="topic-detail__body">
        <p className="eyebrow">Nội dung chuyên đề</p>
        <h3>{topic.title}</h3>
        <p>{topic.detail}</p>

        <div className="topic-detail__meta">
          <div>
            <h4>3 mục nổi bật</h4>
            <ul>
              {topic.items.map((item) => (
                <li key={item.id}>
                  <strong>{item.title}:</strong> {item.context}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Gợi ý trình bày</h4>
            <ul>
              {topic.presentationTips.map((tip) => (
                <li key={tip}>{tip}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </article>
  );
}

export default TopicDetail;
