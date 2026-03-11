function TopicTabs({ topics, activeTopicId, onSelect }) {
  return (
    <div className="topic-tabs" role="tablist" aria-label="Danh sách chuyên đề">
      {topics.map((topic) => {
        const isActive = topic.id === activeTopicId;
        return (
          <button
            key={topic.id}
            id={`tab-${topic.id}`}
            type="button"
            role="tab"
            aria-selected={isActive}
            aria-controls={`panel-${topic.id}`}
            className={`topic-tabs__button ${isActive ? "is-active" : ""}`}
            onClick={() => onSelect(topic.id)}
          >
            <span>{topic.number}</span>
            {topic.title}
          </button>
        );
      })}
    </div>
  );
}

export default TopicTabs;
