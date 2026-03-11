import TimelineItem from "./TimelineItem";

function TimelineSection({ topics, activeTopicId, onSelect }) {
  return (
    <section className="timeline-section section-shell">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Tiến trình nhận thức</p>
          <h2>Timeline tổng hợp của 4 nhóm chủ đề</h2>
          <p>
            Mỗi điểm nhấn là một lát cắt lớn của thế kỷ 21, giúp liên kết sự kiện,
            thành tựu và biến đổi trên cùng một mạch trình bày.
          </p>
        </div>

        <div className="timeline-track">
          {topics.map((topic) => (
            <TimelineItem
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

export default TimelineSection;
