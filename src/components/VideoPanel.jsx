function VideoPanel({ topic }) {
  return (
    <aside className="video-panel" aria-label={`Tư liệu video cho chủ đề ${topic.title}`}>
      <div className="video-panel__frame">
        <div className="video-panel__badge">Video / Placeholder</div>
        <h3>{topic.title}</h3>
        <p>
          Gợi ý từ khóa để tìm tư liệu minh họa hoặc nhúng video trong giai đoạn mở
          rộng tiếp theo.
        </p>
        <div className="video-panel__keyword">
          <span>Từ khóa tìm kiếm</span>
          <strong>{topic.videoKeyword}</strong>
        </div>
      </div>

      <div className="video-panel__summary">
        <h4>Tóm tắt timeline</h4>
        <p>{topic.timelineSummary}</p>
      </div>
    </aside>
  );
}

export default VideoPanel;
