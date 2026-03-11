import TimelineItem from "./TimelineItem";

function TimelineSection({ topics, activeTopicId, onSelect }) {
  return (
    <section className="timeline-section section-shell">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Tiến trình nhận thức</p>
          <h2>Timeline đồng bộ theo chủ đề đang chọn</h2>
          <p>
            Mỗi điểm nhấn là một lát cắt phương pháp luận để kết nối triết học với
            Cách mạng Tháng Tám 1945.
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
