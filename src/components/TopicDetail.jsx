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
        alt={`Minh họa cho chủ đề ${topic.title}`}
      />

      <div className="topic-detail__body">
        <p className="eyebrow">Nội dung chuyên đề</p>
        <h3>{topic.title}</h3>
        <p>{topic.detail}</p>

        <div className="topic-detail__meta">
          <div>
            <h4>Từ khóa</h4>
            <div className="topic-detail__tags">
              {topic.tags.map((tag) => (
                <span key={tag} className="topic-pill">
                  {tag}
                </span>
              ))}
            </div>
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
