const createPlaceholder = (title, accent) =>
  `data:image/svg+xml;utf8,${encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 520">
      <defs>
        <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#f5efe4" />
          <stop offset="100%" stop-color="${accent}" />
        </linearGradient>
      </defs>
      <rect width="800" height="520" rx="36" fill="url(#bg)" />
      <circle cx="670" cy="118" r="78" fill="rgba(255,255,255,0.35)" />
      <circle cx="156" cy="406" r="116" fill="rgba(255,255,255,0.22)" />
      <rect x="80" y="84" width="640" height="352" rx="24" fill="rgba(255,255,255,0.58)" />
      <text x="96" y="210" font-family="Georgia, serif" font-size="36" font-weight="700" fill="#1f2937">${title}</text>
      <text x="96" y="264" font-family="Arial, sans-serif" font-size="22" fill="#334155">Triết học Mác - Lênin</text>
      <text x="96" y="304" font-family="Arial, sans-serif" font-size="22" fill="#334155">Cách mạng Tháng Tám 1945</text>
      <text x="96" y="376" font-family="Arial, sans-serif" font-size="18" fill="#475569">Hình minh họa học thuật thay thế</text>
    </svg>
  `)}`;

export const topics = [
  {
    id: "vai-tro-triet-hoc",
    number: "01",
    title: "Vai trò của triết học Mác - Lênin",
    overview:
      "Triết học Mác - Lênin cung cấp thế giới quan khoa học và phương pháp luận cách mạng cho việc nhận thức lịch sử dân tộc.",
    detail:
      "Triết học Mác - Lênin giữ vai trò nền tảng trong việc hình thành tư duy khoa học, giúp người học nhìn nhận xã hội như một quá trình vận động có quy luật. Đối với bối cảnh Việt Nam, hệ thống lý luận này giúp giải thích vì sao sự nghiệp giải phóng dân tộc phải gắn với giải phóng giai cấp, giải phóng con người và xây dựng một trật tự xã hội mới. Khi phân tích Cách mạng Tháng Tám năm 1945, triết học Mác - Lênin cho thấy tầm quan trọng của việc kết hợp điều kiện khách quan với sự chuẩn bị chủ quan, vai trò của quần chúng nhân dân và năng lực lãnh đạo chính trị của Đảng. Đây không chỉ là tri thức lý luận mà còn là công cụ để đánh giá hiện thực, xác định phương hướng hành động và rút ra bài học cho công cuộc đổi mới hôm nay.",
    videoKeyword: "vai tro triet hoc Mac Lenin cach mang thang tam 1945",
    timelineSummary:
      "Cung cấp nền tảng lý luận để nhận thức thời cơ, lực lượng và mục tiêu của cách mạng dân tộc dân chủ.",
    tags: ["Thế giới quan", "Phương pháp luận", "Lịch sử dân tộc"],
    presentationTips: [
      "Mở đầu bằng câu hỏi: vì sao một cuộc cách mạng cần nền tảng lý luận?",
      "Liên hệ giữa nhận thức triết học và năng lực ra quyết định chính trị.",
      "Kết thúc bằng bài học vận dụng trong học tập và công dân hiện nay."
    ],
    image: createPlaceholder("Vai trò của triết học", "#d4a373")
  },
  {
    id: "vat-chat-y-thuc",
    number: "02",
    title: "Vật chất - ý thức",
    overview:
      "Nguyên lý về vật chất và ý thức giúp lý giải quan hệ giữa hoàn cảnh lịch sử khách quan với vai trò định hướng của tư tưởng cách mạng.",
    detail:
      "Trong phép biện chứng duy vật, vật chất có trước và quyết định ý thức, nhưng ý thức có tính độc lập tương đối và có thể tác động trở lại hiện thực thông qua hoạt động thực tiễn của con người. Vận dụng vào Cách mạng Tháng Tám 1945, có thể thấy tình hình quốc tế và trong nước đã tạo nên điều kiện vật chất khách quan thuận lợi: phát xít Nhật đầu hàng Đồng minh, bộ máy thống trị cũ rệu rã, mâu thuẫn xã hội dâng cao. Tuy nhiên, điều kiện khách quan tự nó không biến thành thắng lợi nếu thiếu ý thức tổ chức, đường lối đúng đắn và năng lực huy động quần chúng. Sự lãnh đạo sáng suốt của Đảng và Chủ tịch Hồ Chí Minh thể hiện rõ vai trò tích cực của ý thức cách mạng trong việc chuyển hóa thời cơ thành hành động lịch sử quyết đoán.",
    videoKeyword: "vat chat y thuc giai thich cach mang thang tam",
    timelineSummary:
      "Điều kiện khách quan chín muồi kết hợp với ý thức cách mạng chủ động đã tạo nên bước ngoặt tháng Tám năm 1945.",
    tags: ["Khách quan", "Chủ quan", "Ý thức cách mạng"],
    presentationTips: [
      "Phân biệt ngắn gọn đâu là yếu tố khách quan, đâu là yếu tố chủ quan.",
      "Nêu ví dụ thời cơ lịch sử chỉ có ý nghĩa khi được nhận diện đúng.",
      "Dùng sơ đồ mũi tên để thể hiện tác động hai chiều giữa ý thức và thực tiễn."
    ],
    image: createPlaceholder("Vật chất - ý thức", "#ccd5ae")
  },
  {
    id: "moi-lien-he-pho-bien",
    number: "03",
    title: "Mối liên hệ phổ biến",
    overview:
      "Nguyên lý mối liên hệ phổ biến nhấn mạnh mọi sự vật, hiện tượng đều ràng buộc lẫn nhau trong một chỉnh thể lịch sử - xã hội.",
    detail:
      "Phép biện chứng duy vật khẳng định không có sự vật nào tồn tại một cách cô lập. Mỗi hiện tượng luôn nằm trong mạng lưới liên hệ với các yếu tố kinh tế, chính trị, văn hóa, dân tộc và quốc tế. Khi nghiên cứu Cách mạng Tháng Tám, cần thấy thắng lợi năm 1945 không chỉ là kết quả của một biến cố đơn lẻ mà là sự hội tụ của nhiều mối quan hệ: sự khủng hoảng của chủ nghĩa thực dân, tác động của Chiến tranh thế giới thứ hai, phong trào yêu nước trong nước, lực lượng Việt Minh, nạn đói năm 1945 và khát vọng độc lập của toàn dân. Nguyên lý này giúp người học tránh cách nhìn phiến diện, từ đó hiểu sâu hơn tính tổng hợp của một cuộc cách mạng thành công.",
    videoKeyword: "moi lien he pho bien trong cach mang thang tam",
    timelineSummary:
      "Thắng lợi cách mạng được hình thành từ sự gắn kết giữa bối cảnh quốc tế, mâu thuẫn trong nước và sức mạnh đại đoàn kết dân tộc.",
    tags: ["Tính hệ thống", "Toàn diện", "Bối cảnh lịch sử"],
    presentationTips: [
      "Dùng sơ đồ mạng lưới để nối các nhân tố trong và ngoài nước.",
      "Nhấn mạnh yêu cầu phân tích toàn diện thay vì chỉ kể sự kiện.",
      "So sánh với cách tiếp cận tuyến tính để làm rõ giá trị của phép biện chứng."
    ],
    image: createPlaceholder("Mối liên hệ phổ biến", "#b8c0ff")
  },
  {
    id: "quy-luat-mau-thuan",
    number: "04",
    title: "Quy luật mâu thuẫn",
    overview:
      "Quy luật mâu thuẫn chỉ ra nguồn gốc vận động và phát triển nằm trong chính những xung đột nội tại của đời sống xã hội.",
    detail:
      "Theo triết học Mác - Lênin, mâu thuẫn là nguồn gốc của vận động và phát triển. Trong xã hội thuộc địa nửa phong kiến Việt Nam trước năm 1945, mâu thuẫn dân tộc giữa toàn thể nhân dân Việt Nam với chủ nghĩa đế quốc và tay sai là mâu thuẫn cơ bản, nổi bật nhất. Đồng thời còn tồn tại mâu thuẫn giai cấp, mâu thuẫn giữa nông dân với địa chủ phong kiến và mâu thuẫn giữa yêu cầu độc lập với tình trạng áp bức kéo dài. Việc xác định đúng mâu thuẫn chủ yếu có ý nghĩa chiến lược, vì nó giúp tập hợp lực lượng rộng rãi nhất vào mặt trận giải phóng dân tộc. Chính khả năng nhận diện, phân tích và giải quyết đúng mâu thuẫn cơ bản đã góp phần dẫn dắt cuộc cách mạng đi tới thắng lợi trong thời khắc quyết định.",
    videoKeyword: "quy luat mau thuan va cach mang thang tam 1945",
    timelineSummary:
      "Nhận diện đúng mâu thuẫn chủ yếu giữa dân tộc Việt Nam và chủ nghĩa đế quốc là cơ sở để xác định nhiệm vụ chiến lược.",
    tags: ["Mâu thuẫn chủ yếu", "Giải phóng dân tộc", "Động lực phát triển"],
    presentationTips: [
      "Trình bày mâu thuẫn chủ yếu trước, sau đó mở rộng sang các mâu thuẫn khác.",
      "Giải thích vì sao xác định sai mâu thuẫn sẽ dẫn tới sai lầm chiến lược.",
      "Có thể minh họa bằng bảng hai cột: mâu thuẫn và phương hướng giải quyết."
    ],
    image: createPlaceholder("Quy luật mâu thuẫn", "#f28482")
  },
  {
    id: "quy-luat-luong-chat",
    number: "05",
    title: "Quy luật lượng - chất",
    overview:
      "Quy luật lượng - chất lý giải cách sự tích lũy từng bước về lực lượng và điều kiện sẽ dẫn tới bước nhảy cách mạng.",
    detail:
      "Quy luật chuyển hóa từ những thay đổi về lượng thành những thay đổi về chất cho thấy sự phát triển không phải lúc nào cũng diễn ra đều đặn mà có thể bùng nổ thành bước nhảy khi điều kiện chín muồi. Trong tiến trình chuẩn bị cho Cách mạng Tháng Tám, lực lượng cách mạng đã được tích lũy dần thông qua xây dựng tổ chức, giác ngộ quần chúng, phát triển căn cứ địa, rèn luyện cán bộ và mở rộng mặt trận đoàn kết. Những thay đổi về lượng ấy khi đạt đến điểm nút, kết hợp với biến động lớn của tình hình thế giới và trong nước, đã tạo nên bước nhảy về chất: cuộc tổng khởi nghĩa giành chính quyền trên phạm vi cả nước. Bài học phương pháp luận ở đây là phải biết kiên trì tích lũy điều kiện nhưng cũng phải quyết đoán khi thời cơ xuất hiện.",
    videoKeyword: "quy luat luong chat tong khoi nghia thang tam",
    timelineSummary:
      "Quá trình tích lũy lực lượng lâu dài đã gặp thời cơ chín muồi và chuyển hóa thành bước nhảy giành chính quyền.",
    tags: ["Điểm nút", "Bước nhảy", "Tích lũy lực lượng"],
    presentationTips: [
      "Dùng hình ảnh đường tăng trưởng để minh họa quá trình tích lũy về lượng.",
      "Chỉ rõ thời điểm nào trở thành điểm nút lịch sử trong tháng 8 năm 1945.",
      "Liên hệ với kỹ năng học tập: tích lũy đều để tạo đột phá."
    ],
    image: createPlaceholder("Quy luật lượng - chất", "#84a59d")
  },
  {
    id: "thuc-tien-chan-ly",
    number: "06",
    title: "Thực tiễn - chân lý",
    overview:
      "Thực tiễn là cơ sở, động lực và tiêu chuẩn kiểm nghiệm chân lý, từ đó khẳng định giá trị của đường lối cách mạng đúng đắn.",
    detail:
      "Triết học Mác - Lênin xem thực tiễn là toàn bộ hoạt động vật chất có mục đích, mang tính lịch sử - xã hội của con người nhằm cải biến tự nhiên và xã hội. Chân lý không chỉ là nhận thức đúng mà còn phải được thực tiễn kiểm nghiệm. Đối với Cách mạng Tháng Tám 1945, tính đúng đắn của đường lối giải phóng dân tộc không dừng lại ở bình diện lý luận mà đã được chứng minh bằng kết quả thực tiễn: chính quyền về tay nhân dân, nước Việt Nam Dân chủ Cộng hòa ra đời, mở ra kỷ nguyên độc lập dân tộc gắn liền với chủ nghĩa xã hội. Bài học đặt ra là học tập triết học không thể tách rời thực tiễn đời sống; mọi nhận thức chỉ có giá trị bền vững khi được kiểm chứng bằng hành động và hiệu quả xã hội.",
    videoKeyword: "thuc tien chan ly bai hoc tu cach mang thang tam",
    timelineSummary:
      "Thắng lợi cách mạng là minh chứng thực tiễn cho tính đúng đắn của đường lối giải phóng dân tộc.",
    tags: ["Kiểm nghiệm", "Đường lối đúng đắn", "Giá trị thực tiễn"],
    presentationTips: [
      "Kết thúc bài bằng mệnh đề: thực tiễn là thước đo của chân lý.",
      "Liên hệ giữa học thuật, nghiên cứu và trách nhiệm hành động xã hội.",
      "Khuyến khích người nghe rút ra bài học vận dụng vào công việc hiện tại."
    ],
    image: createPlaceholder("Thực tiễn - chân lý", "#90caf9")
  }
];

export const sectionLinks = [
  { id: "hero", label: "Giới thiệu" },
  { id: "overview", label: "Tổng quan" },
  { id: "details", label: "Chuyên đề" },
  { id: "timeline", label: "Tiến trình" }
];
