const createPlaceholder = (title, accent, icon) =>
  `data:image/svg+xml;utf8,${encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 520">
      <defs>
        <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#f8f3ea" />
          <stop offset="100%" stop-color="${accent}" />
        </linearGradient>
      </defs>
      <rect width="800" height="520" rx="36" fill="url(#bg)" />
      <circle cx="668" cy="120" r="84" fill="rgba(255,255,255,0.32)" />
      <circle cx="150" cy="408" r="112" fill="rgba(255,255,255,0.18)" />
      <rect x="80" y="84" width="640" height="352" rx="26" fill="rgba(255,255,255,0.58)" />
      <text x="96" y="176" font-family="Georgia, serif" font-size="48" fill="#1f2937">${icon}</text>
      <text x="96" y="238" font-family="Georgia, serif" font-size="34" font-weight="700" fill="#1f2937">${title}</text>
      <text x="96" y="294" font-family="Arial, sans-serif" font-size="22" fill="#334155">Thế kỷ 21</text>
      <text x="96" y="334" font-family="Arial, sans-serif" font-size="20" fill="#475569">Landing page học thuật tương tác</text>
    </svg>
  `)}`;

export const topics = [
  {
    id: "history",
    number: "01",
    icon: "📜",
    title: "Các sự kiện lịch sử quan trọng trong thế kỷ 21",
    overview:
      "Những biến cố lịch sử có sức ảnh hưởng lớn đến trật tự toàn cầu trong thế kỷ 21.",
    detail:
      "Nhóm lịch sử tập trung vào những sự kiện làm thay đổi cách các quốc gia nhìn nhận an ninh, tài chính và sức khỏe cộng đồng. Đây là những cú sốc có tính bản lề, không chỉ gây tác động tức thời mà còn định hình chính sách, tâm lý xã hội và cách vận hành của thế giới trong nhiều năm sau đó.",
    tags: ["11/9", "Khủng hoảng 2008", "COVID-19"],
    items: [
      {
        id: "event-911",
        title: "Sự kiện 11/9 tại Mỹ năm 2001",
        context:
          "Loạt vụ tấn công khủng bố phối hợp bằng máy bay do nhóm al-Qaeda thực hiện nhắm vào Tòa tháp Đôi (New York) và Lầu Năm Góc.",
        impacts: [
          "Làm thay đổi hoàn toàn chính sách an ninh hàng không và đối ngoại toàn cầu.",
          "Mỹ bắt đầu cuộc chiến chống khủng bố tại Afghanistan và Iraq.",
          "Gây cú sốc lớn cho tâm lý và kinh tế thế giới thời điểm đó.",
        ],
      },
      {
        id: "global-financial-crisis-2008",
        title: "Cuộc khủng hoảng tài chính toàn cầu 2008",
        context:
          "Bắt nguồn từ sự đổ vỡ của thị trường bất động sản tại Mỹ (bong bóng nợ dưới chuẩn) và sự sụp đổ của ngân hàng đầu tư Lehman Brothers.",
        impacts: [
          "Dẫn đến cuộc suy thoái kinh tế tồi tệ nhất kể từ cuộc Đại khủng hoảng 1929.",
          "Hàng loạt ngân hàng phá sản, thị trường chứng khoán sụt giảm mạnh.",
          "Buộc chính phủ các nước phải tung ra các gói cứu trợ tài chính khổng lồ.",
        ],
      },
      {
        id: "covid-19",
        title: "Đại dịch COVID-19 từ năm 2019",
        context:
          "Sự bùng phát của virus SARS-CoV-2 gây ra cuộc đại dịch y tế nghiêm trọng trên phạm vi toàn cầu.",
        impacts: [
          "Làm gián đoạn chuỗi cung ứng toàn cầu và thay đổi cách vận hành xã hội (làm việc từ xa, chuyển đổi số).",
          "Gây tổn thất nặng nề về người và đẩy kinh tế thế giới vào giai đoạn lạm phát sau đại dịch.",
          "Thúc đẩy sự phát triển vượt bậc của công nghệ vắc-xin và y tế dự phòng.",
        ],
      },
    ],
    timelineSummary:
      "Từ an ninh, tài chính đến y tế công cộng, nhóm này cho thấy những biến cố lịch sử có thể tái định hình toàn bộ trật tự quốc tế.",
    videoKeyword: "thế kỷ 21 sự kiện lịch sử 11/9 khủng hoảng 2008 covid-19",
    presentationTips: [
      "Mở đầu bằng câu hỏi sự kiện nào làm thay đổi thế giới nhanh nhất trong 25 năm gần đây.",
      "Đặt 3 mốc theo trục thời gian để cho thấy tính liên tục của các cú sốc toàn cầu.",
      "Nhấn mạnh mối quan hệ giữa biến cố lịch sử và thay đổi chính sách dài hạn.",
    ],
    image: createPlaceholder("Biến cố lịch sử", "#d4a373", "📜"),
  },
  {
    id: "science-technology",
    number: "02",
    icon: "🔬",
    title: "Những thành tựu khoa học và công nghệ nổi bật trong thế kỷ 21",
    overview:
      "Những đột phá khoa học và công nghệ đang định hình cách con người làm việc, sống và sáng tạo.",
    detail:
      "Khoa học và công nghệ là động lực trung tâm của thế kỷ 21. Từ AI, không gian đến Internet vạn vật, các thành tựu mới không chỉ tạo ra công cụ mạnh hơn mà còn mở rộng giới hạn của tri thức, năng suất và cách xã hội kết nối với nhau trên quy mô toàn cầu.",
    tags: ["AI", "Không gian", "IoT"],
    items: [
      {
        id: "ai-development",
        title: "Phát triển Trí tuệ nhân tạo (AI)",
        context:
          "Sự bùng nổ của dữ liệu lớn (Big Data) và khả năng tính toán vượt trội đã đưa AI từ lý thuyết thành công cụ cốt lõi của thời đại 4.0. Đặc biệt là sự ra đời của các mô hình ngôn ngữ lớn (LLMs).",
        impacts: [
          "Tự động hóa quy trình sản xuất, y tế, giáo dục và sáng tạo nội dung.",
          "Thúc đẩy cuộc chạy đua công nghệ giữa các tập đoàn lớn (Google, Microsoft, OpenAI).",
          "Đặt ra những thách thức mới về đạo đức, bản quyền và tương lai của việc làm.",
        ],
      },
      {
        id: "space-exploration",
        title: "Khám phá không gian (NASA & SpaceX)",
        context:
          "Sự chuyển mình từ kỷ nguyên vũ trụ do chính phủ dẫn đầu sang sự hợp tác công - tư. SpaceX (của Elon Musk) đã tiên phong trong việc tái sử dụng tên lửa để giảm chi phí.",
        impacts: [
          "Hồi sinh giấc mơ đưa con người trở lại Mặt Trăng (Chương trình Artemis) và tiến tới sao Hỏa.",
          "Thương mại hóa không gian thông qua các vệ tinh tầm thấp (như Starlink) để phủ sóng internet toàn cầu.",
          "Mở ra triển vọng về khai thác tài nguyên và du lịch vũ trụ cho dân thường.",
        ],
      },
      {
        id: "iot",
        title: "Internet vạn vật (IoT)",
        context:
          "Xu hướng kết nối mọi thiết bị vật lý (từ bóng đèn, tủ lạnh đến máy móc công nghiệp) với Internet thông qua cảm biến và phần mềm.",
        impacts: [
          "Hình thành các \"Thành phố thông minh\" (Smart City) và \"Nhà thông minh\" (Smart Home) giúp tối ưu hóa năng lượng và quản lý.",
          "Trong công nghiệp: Giúp bảo trì dự báo, giảm thiểu sai sót và tăng năng suất lao động.",
          "Tạo ra mạng lưới dữ liệu khổng lồ giúp con người ra quyết định chính xác hơn dựa trên thời gian thực.",
        ],
      },
    ],
    timelineSummary:
      "Các đột phá công nghệ của thế kỷ 21 đang chuyển từ hỗ trợ sang định hình trực tiếp nền kinh tế và đời sống.",
    videoKeyword: "thế kỷ 21 AI NASA SpaceX IoT thành tựu công nghệ",
    presentationTips: [
      "So sánh tác động của AI, vũ trụ và IoT lên đời sống hằng ngày.",
      "Nêu rõ cả cơ hội lẫn thách thức để bài thuyết trình cân bằng hơn.",
      "Dùng 3 mục con để dẫn mạch nội dung từ hiện tại đến tương lai.",
    ],
    image: createPlaceholder("Khoa học và công nghệ", "#9ec1cf", "🔬"),
  },
  {
    id: "culture-arts",
    number: "03",
    icon: "🎭",
    title: "Các giải thưởng và thành tựu văn hóa nghệ thuật",
    overview:
      "Những dấu mốc văn hóa nghệ thuật cho thấy sự dịch chuyển của gương mặt, nền tảng và ảnh hưởng toàn cầu.",
    detail:
      "Văn hóa nghệ thuật thế kỷ 21 không còn bị giới hạn trong một thị trường hay một ngôn ngữ. Từ Oscar, Grammy đến ngành game, sức ảnh hưởng của nội dung đang được định hình lại bởi streaming, fandom, cộng đồng trực tuyến và khả năng lan tỏa xuyên biên giới.",
    tags: ["Oscar", "Grammy", "Game"],
    items: [
      {
        id: "parasite-oscar",
        title: "Oscar cho \"Parasite\" và kỷ nguyên phim quốc tế (2020)",
        context:
          "Tại lễ trao giải Oscar lần thứ 92, tác phẩm Parasite (Ký sinh trùng) của đạo diễn Bong Joon-ho đã làm nên lịch sử khi trở thành phim không nói tiếng Anh đầu tiên giành giải \"Phim hay nhất\".",
        impacts: [
          "Phá vỡ \"rào cản phụ đề\" cao 1 inch, mở đường cho các tác phẩm quốc tế tiếp cận khán giả toàn cầu.",
          "Khẳng định vị thế của điện ảnh Hàn Quốc và thúc đẩy sự đa dạng văn hóa trong ngành công nghiệp Hollywood.",
          "Thay đổi tư duy của các nền tảng trực tuyến trong việc đầu tư vào nội dung bản địa chất lượng cao.",
        ],
      },
      {
        id: "grammy-icons",
        title: "Grammy và sự thống trị của các biểu tượng âm nhạc",
        context:
          "Những năm 2020 chứng kiến sự bùng nổ của Taylor Swift (lập kỷ lục 4 lần thắng Album của năm), Adele và sức ảnh hưởng toàn cầu không thể chối từ của BTS.",
        impacts: [
          "Taylor Swift: Định nghĩa lại quyền sở hữu nghệ sĩ và sức mạnh của cộng đồng người hâm mộ (fandom).",
          "BTS: Đưa K-pop trở thành hiện thực văn hóa chính thống tại Mỹ và toàn thế giới, xóa nhòa biên giới ngôn ngữ.",
          "Phản ánh sự chuyển dịch từ các kênh truyền thống sang kỷ nguyên phát trực tuyến (streaming) và mạng xã hội.",
        ],
      },
      {
        id: "gaming-industry",
        title: "Sự phát triển mạnh mẽ của ngành game",
        context:
          "Ngành công nghiệp trò chơi điện tử đã vượt qua cả điện ảnh và âm nhạc cộng lại về doanh thu, đạt mốc dự kiến hơn 320 tỷ USD vào năm 2026.",
        impacts: [
          "Trở thành nền tảng xã hội mới: Game không chỉ để chơi mà còn là nơi tổ chức concert (Fortnite), họp mặt và sáng tạo (Roblox).",
          "Thúc đẩy công nghệ thực tế ảo (VR/AR) và điện toán đám mây (Cloud Gaming).",
          "Chuyển đổi từ mô hình \"mua một lần\" sang \"dịch vụ trực tuyến\" (Live Service), tạo ra nguồn doanh thu bền vững và dài hạn.",
        ],
      },
    ],
    timelineSummary:
      "Văn hóa đại chúng đã chuyển mạnh sang thời kỳ nội dung quốc tế, nền tảng số và cộng đồng người hâm mộ có ảnh hưởng lớn.",
    videoKeyword: "thế kỷ 21 Parasite Oscar Grammy Taylor Swift BTS ngành game",
    presentationTips: [
      "Mô tả sự thay đổi từ trung tâm Hollywood sang lan tỏa quốc tế.",
      "Kết nối âm nhạc, điện ảnh và game bằng ý tưởng văn hóa số.",
      "Sử dụng nhóm này để làm bài thuyết trình sinh động và gần với giới trẻ.",
    ],
    image: createPlaceholder("Văn hóa nghệ thuật", "#cdb4db", "🎭"),
  },
  {
    id: "economy-society",
    number: "04",
    icon: "📈",
    title: "Sự phát triển kinh tế và xã hội",
    overview:
      "Những chuyển động kinh tế và xã hội lớn nhất đang tái cấu trúc thị trường, hành vi tiêu dùng và cán cân quyền lực.",
    detail:
      "Nhóm kinh tế - xã hội cho thấy thế kỷ 21 là giai đoạn của hội nhập, dịch chuyển quyền lực và chuyển đổi số. Toàn cầu hóa mở rộng kết nối thị trường, sự trỗi dậy của châu Á thay đổi cán cân kinh tế, trong khi kinh tế số tạo ra mô hình vận hành mới cho doanh nghiệp và người tiêu dùng.",
    tags: ["Toàn cầu hóa", "Trung Quốc và Ấn Độ", "Kinh tế số"],
    items: [
      {
        id: "globalization",
        title: "Toàn cầu hóa và hội nhập kinh tế",
        context:
          "Quá trình tự do hóa thương mại thông qua các hiệp định đa phương (như WTO, CPTPP, EVFTA) giúp kết nối các thị trường trên toàn thế giới thành một hệ thống thống nhất.",
        impacts: [
          "Tối ưu hóa chuỗi cung ứng toàn cầu, giúp giảm giá thành sản phẩm và tăng lựa chọn cho người tiêu dùng.",
          "Thúc đẩy sự chuyển dịch vốn, công nghệ và lao động giữa các quốc gia.",
          "Tuy nhiên, cũng đặt ra thách thức về sự phụ thuộc lẫn nhau và khoảng cách giàu nghèo giữa các nền kinh tế.",
        ],
      },
      {
        id: "china-india-rise",
        title: "Sự trỗi dậy của Trung Quốc và Ấn Độ",
        context:
          "Hai quốc gia đông dân nhất thế giới đã chuyển mình từ các nền kinh tế nông nghiệp sang các \"công xưởng\" và \"trung tâm dịch vụ\" toàn cầu với tốc độ tăng trưởng GDP thần tốc.",
        impacts: [
          "Làm thay đổi trật tự kinh tế thế giới, chuyển dịch trọng tâm quyền lực sang khu vực châu Á - Thái Bình Dương.",
          "Trung Quốc dẫn đầu về sản xuất và hạ tầng, trong khi Ấn Độ bùng nổ về dịch vụ CNTT và phần mềm.",
          "Tạo ra thị trường tiêu thụ khổng lồ, thu hút dòng vốn đầu tư trực tiếp nước ngoài (FDI) từ khắp nơi.",
        ],
      },
      {
        id: "digital-economy",
        title: "Chuyển đổi số và kinh tế số",
        context:
          "Sự chuyển dịch các hoạt động kinh tế từ truyền thống sang môi trường số dựa trên dữ liệu, điện toán đám mây và các nền tảng trực tuyến.",
        impacts: [
          "Thay đổi hoàn toàn hành vi tiêu dùng (Thương mại điện tử, thanh toán không tiền mặt).",
          "Giúp doanh nghiệp tối ưu hóa chi phí vận hành và tăng khả năng tiếp cận khách hàng xuyên biên giới.",
          "Dữ liệu trở thành \"loại dầu mỏ mới\", là tài sản quan trọng nhất trong việc cạnh tranh và dự báo xu hướng thị trường.",
        ],
      },
    ],
    timelineSummary:
      "Kinh tế thế kỷ 21 vận động trên 3 trục: hội nhập, dịch chuyển trung tâm tăng trưởng và số hóa toàn diện.",
    videoKeyword: "thế kỷ 21 toàn cầu hóa Trung Quốc Ấn Độ chuyển đổi số kinh tế số",
    presentationTips: [
      "Trình bày theo trình tự: hội nhập, trỗi dậy châu Á, chuyển đổi số.",
      "Chỉ ra tác động đồng thời đến doanh nghiệp, người lao động và người tiêu dùng.",
      "Kết bài bằng nhận định dữ liệu và nền tảng số là trung tâm cạnh tranh mới.",
    ],
    image: createPlaceholder("Kinh tế và xã hội", "#a3b18a", "📈"),
  },
];

export const sectionLinks = [
  { id: "hero", label: "Giới thiệu" },
  { id: "overview", label: "Tổng quan" },
  { id: "details", label: "Chuyên đề" },
  { id: "timeline", label: "Tiến trình" },
];
