function TopicCard({ topic, isActive, onSelect }) {
  return (
    <button
      type="button"
      className={`topic-card ${isActive ? "is-active" : ""}`}
      onClick={() => onSelect(topic.id)}
      aria-pressed={isActive}
    >
      <span className="topic-card__number">{topic.number}</span>
      <h3>{topic.title}</h3>
      <p>{topic.overview}</p>
      <div className="topic-card__tags" aria-label={`Từ khóa của ${topic.title}`}>
        {topic.tags.map((tag) => (
          <span key={tag} className="topic-pill">
            {tag}
          </span>
        ))}
      </div>
    </button>
  );
}

export default TopicCard;
