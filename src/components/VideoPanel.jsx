import { useState } from "react";

const bookQrSrc = "/qr.png";

function VideoPanel({ topic }) {
  const [qrAvailable, setQrAvailable] = useState(true);

  return (
    <aside className="video-panel" aria-label={`Thông tin nhanh cho nhóm ${topic.title}`}>
      <div className="video-panel__frame">
        <div className="video-panel__badge">Từ khóa / nhóm nội dung</div>
        <h3>{topic.title}</h3>
        <p>Chọn từ khóa phù hợp để tìm thêm tư liệu minh họa cho phần trình bày.</p>
        <div className="video-panel__keyword">
          <span>Từ khóa tìm kiếm</span>
          <strong>{topic.videoKeyword}</strong>
        </div>
      </div>

      <div className="video-panel__qr">
        <h4>Mã QR sách bản cứng</h4>
        {qrAvailable ? (
          <img
            className="video-panel__qr-image"
            src={bookQrSrc}
            alt="Mã QR dẫn tới sách bản cứng"
            onError={() => setQrAvailable(false)}
          />
        ) : (
          <p className="video-panel__qr-fallback">
            Không tìm thấy file QR tại <code>public/qr.png</code>.
          </p>
        )}
      </div>

      <div className="video-panel__summary">
        <h4>Tác động tiêu biểu</h4>
        <p>{topic.timelineSummary}</p>
      </div>
    </aside>
  );
}

export default VideoPanel;
