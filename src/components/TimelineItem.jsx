function TimelineItem({ topic, isActive, onSelect }) {
  return (
    <button
      type="button"
      className={`timeline-item ${isActive ? "is-active" : ""}`}
      onClick={() => onSelect(topic.id)}
      aria-pressed={isActive}
    >
      <span className="timeline-item__dot" aria-hidden="true" />
      <span className="timeline-item__number">{topic.number}</span>
      <div className="timeline-item__content">
        <h3>{topic.title}</h3>
        <p>{topic.timelineSummary}</p>
      </div>
    </button>
  );
}

export default TimelineItem;
