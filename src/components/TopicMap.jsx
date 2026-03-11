import TopicCard from "./TopicCard";

function TopicMap({ topics, activeTopicId, onSelect }) {
  return (
    <section className="topic-map section-shell">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Tổng quan nội dung</p>
          <h2>Bản đồ 6 chuyên đề triết học</h2>
          <p>
            Chọn một chủ đề để đồng bộ thẻ, phần chuyên đề và tiến trình học tập ở
            bên dưới.
          </p>
        </div>

        <div className="topic-map__grid">
          {topics.map((topic) => (
            <TopicCard
              key={topic.id}
              topic={topic}
              isActive={activeTopicId === topic.id}
              onSelect={onSelect}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default TopicMap;
