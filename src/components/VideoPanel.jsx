import { useState } from "react";

const bookQrSrc = "/qr.png";
const embeddedVideoSrc = "https://www.youtube.com/embed/QtYg-3fb9b0?rel=0";

function VideoPanel({ topic }) {
  const [qrAvailable, setQrAvailable] = useState(true);

  return (
    <aside className="video-panel" aria-label={`Thông tin nhanh cho nhóm ${topic.title}`}>
      <div className="video-panel__frame">
        <div className="video-panel__badge">Video minh họa</div>
        <div className="video-panel__embed">
          <iframe
            src={embeddedVideoSrc}
            title="Video minh họa chủ đề Thế kỷ 21"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
        <h3>{topic.title}</h3>
        <p>Xem trực tiếp trên trang để minh họa thêm cho phần trình bày của nhóm nội dung đang chọn.</p>
      </div>

      <div className="video-panel__keyword">
        <span>Từ khóa tìm kiếm</span>
        <strong>{topic.videoKeyword}</strong>
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
