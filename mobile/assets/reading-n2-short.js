/* Đọc hiểu N2 — dạng bài Ngắn: 10 bài đọc TỰ VIẾT MỚI (không copy đề JLPT thật,
   không trùng ngân hàng đề thi của app). Kiến thức đến N2, KHÔNG furigana như
   đề thật. Mỗi bài 2 câu hỏi × 4 đáp án, giải thích tiếng Việt (vì sao đúng /
   vì sao các đáp án khác sai) + từ vựng cuối bài. Nạp lười qua ensureReadData(). */
window.READ_N2_SHORT = [
  {
    title: "電車の中の広告",
    body: "通勤電車の中では、さまざまな広告が目に入る。最近増えているのが、スマートフォンのアプリの広告だ。短い言葉で商品の特徴を伝え、乗客の興味を引こうとしている。しかし、広告が多すぎると、かえって一つ一つの印象が薄れてしまう。広告を出す側も、限られた空間と時間の中で、どう目立たせるかに苦心しているようだ。",
    qs: [
      {
        q: "この文章では、電車の広告について何が問題だと述べられているか。",
        opts: ["広告の数が多すぎて、一つ一つの印象が薄れること", "広告の言葉が長すぎること", "スマートフォンの広告がまったくないこと", "乗客が広告を全く見ないこと"],
        ans: 0,
        exp: "Đáp án đúng là 1: bài viết「広告が多すぎると、かえって一つ一つの印象が薄れてしまう」— quảng cáo quá nhiều khiến ấn tượng của từng cái bị loãng đi. Đáp án 2 ngược với bài (quảng cáo dùng câu ngắn). Đáp án 3 sai vì quảng cáo ứng dụng đang tăng. Đáp án 4 quá tuyệt đối, bài không nói hành khách hoàn toàn không xem."
      },
      {
        q: "広告を出す側は、何に苦心しているか。",
        opts: ["広告の料金を下げること", "限られた空間と時間の中で目立たせること", "乗客を増やすこと", "電車を増やすこと"],
        ans: 1,
        exp: "Đáp án đúng là 2: đoạn cuối nói phía đăng quảng cáo「限られた空間と時間の中で、どう目立たせるかに苦心している」— đau đầu làm sao nổi bật trong không gian và thời gian hạn chế. Đáp án 1, 3, 4 không xuất hiện trong bài."
      }
    ],
    vocab: [
      { w: "目に入ります", r: "めにはいります", m: "lọt vào mắt, đập vào mắt" },
      { w: "特徴", r: "とくちょう", m: "đặc trưng, đặc điểm" },
      { w: "印象", r: "いんしょう", m: "ấn tượng" },
      { w: "薄れます", r: "うすれます", m: "nhạt đi, mờ dần" },
      { w: "苦心します", r: "くしんします", m: "dày công suy nghĩ, khổ tâm" }
    ]
  },
  {
    title: "在宅勤務の広がり",
    body: "近年、在宅勤務を取り入れる企業が増えている。通勤時間がなくなるため、社員は家族と過ごす時間が増えたという声が多い。一方で、同僚との何気ない会話から生まれるアイデアが減ったという指摘もある。働き方の自由度が高まる一方で、社員同士のつながりをどう保つかが、今後の課題となりそうだ。",
    qs: [
      {
        q: "在宅勤務のよい点として挙げられているのは何か。",
        opts: ["給料が上がること", "通勤時間がなくなり、家族との時間が増えること", "会議がなくなること", "会社の経費が増えること"],
        ans: 1,
        exp: "Đáp án đúng là 2: bài viết vì「通勤時間がなくなるため、社員は家族と過ごす時間が増えた」— hết thời gian đi lại nên có thêm thời gian cho gia đình. Đáp án 1, 3, 4 không được nêu trong bài."
      },
      {
        q: "在宅勤務の課題は何だと述べられているか。",
        opts: ["社員の給料をどう決めるか", "社員同士のつながりをどう保つか", "パソコンをどう配るか", "自宅の広さをどうするか"],
        ans: 1,
        exp: "Đáp án đúng là 2: đoạn cuối kết luận「社員同士のつながりをどう保つかが、今後の課題となりそうだ」và ý này nối với việc mất đi những ý tưởng nảy ra từ trò chuyện thường ngày với đồng nghiệp. Đáp án 1, 3, 4 không xuất hiện trong bài."
      }
    ],
    vocab: [
      { w: "在宅勤務", r: "ざいたくきんむ", m: "làm việc tại nhà" },
      { w: "取り入れます", r: "とりいれます", m: "áp dụng, đưa vào" },
      { w: "何気ない", r: "なにげない", m: "tự nhiên, vô tình, thường ngày" },
      { w: "指摘", r: "してき", m: "sự chỉ ra, ý kiến chỉ trích" },
      { w: "自由度", r: "じゆうど", m: "mức độ tự do" }
    ]
  },
  {
    title: "商店街の挑戦",
    body: "全国の商店街が、大型店やインターネット通販の影響で客足を失っている。しかし、ある商店街では、空き店舗を若い経営者に安く貸し出す取り組みが成功している。新しい店が増えたことで、若い客層が戻り、昔からの店にも客が流れるようになった。商店街の再生には、地域の人々の協力と新しい発想の両方が欠かせない。",
    qs: [
      {
        q: "ある商店街で成功した取り組みとは何か。",
        opts: ["大型店を誘致すること", "空き店舗を若い経営者に安く貸すこと", "駐車場を無料にすること", "営業時間を延ばすこと"],
        ans: 1,
        exp: "Đáp án đúng là 2: bài viết khu phố thương mại đã thành công với sáng kiến「空き店舗を若い経営者に安く貸し出す」— cho chủ trẻ thuê rẻ mặt bằng trống, kéo khách trẻ quay lại và cả các tiệm lâu năm cũng được hưởng lợi. Đáp án 1 ngược với hoàn cảnh (siêu thị lớn chính là đối thủ). Đáp án 3 và 4 không xuất hiện trong bài."
      },
      {
        q: "筆者は商店街の再生に何が必要だと言っているか。",
        opts: ["資金だけ", "地域の人々の協力と新しい発想", "大型店との統合", "観光客の増加"],
        ans: 1,
        exp: "Đáp án đúng là 2: câu cuối bài nói「地域の人々の協力と新しい発想の両方が欠かせない」— cần cả sự hợp tác của người dân địa phương lẫn ý tưởng mới. Đáp án 1 (chỉ tiền) thiếu vế thứ hai. Đáp án 3 và 4 không được nhắc đến."
      }
    ],
    vocab: [
      { w: "商店街", r: "しょうてんがい", m: "phố thương mại, khu phố buôn bán" },
      { w: "客足", r: "きゃくあし", m: "lượng khách đến (lui tới)" },
      { w: "空き店舗", r: "あきてんぽ", m: "mặt bằng cửa hàng đang trống" },
      { w: "客層", r: "きゃくそう", m: "tầng lớp/thành phần khách hàng" },
      { w: "再生", r: "さいせい", m: "tái sinh, hồi phục, khôi phục" }
    ]
  },
  {
    title: "読書離れ",
    body: "若い世代の読書離れが進んでいると言われる。確かに、紙の本を読む時間は減っているかもしれない。しかし、スマートフォンで小説を読む人もいれば、オーディオブックで「聞く読書」を楽しむ人もいる。形は変わっても、物語に触れる機会そのものが失われたわけではない。大切なのは、本という形にこだわることではなく、言葉に触れる習慣をどう守るかだろう。",
    qs: [
      {
        q: "筆者は「読書離れ」についてどう考えているか。",
        opts: ["紙の本がなくなると、読書も消えてしまう", "形は変わっても、物語に触れる機会は失われていない", "若者は全く本を読まなくなった", "オーディオブックは読書ではない"],
        ans: 1,
        exp: "Đáp án đúng là 2: tác giả thừa nhận thời gian đọc sách giấy giảm, nhưng「形は変わっても、物語に触れる機会そのものが失われたわけではない」— hình thức đổi chứ cơ hội tiếp xúc với truyện chưa mất. Đáp án 1 và 4 thể hiện quan niệm cứng nhắc về hình thức mà bài không đồng tình. Đáp án 3 quá tuyệt đối (「全く」), trái với bài."
      },
      {
        q: "筆者が大切だと言っているのは何か。",
        opts: ["紙の本を買い続けること", "言葉に触れる習慣を守ること", "図書館を増やすこと", "スマートフォンを禁止すること"],
        ans: 1,
        exp: "Đáp án đúng là 2: câu cuối bài nói điều quan trọng không phải câu nệ hình thức cuốn sách mà là「言葉に触れる習慣をどう守るか」— giữ thói quen tiếp xúc với ngôn từ. Đáp án 1 là chính cái「形へのこだわり」mà bài gạt sang một bên. Đáp án 3 và 4 không xuất hiện trong bài."
      }
    ],
    vocab: [
      { w: "読書離れ", r: "どくしょばなれ", m: "sự xa rời việc đọc sách" },
      { w: "小説", r: "しょうせつ", m: "tiểu thuyết, truyện" },
      { w: "触れます", r: "ふれます", m: "chạm vào; tiếp xúc với" },
      { w: "こだわります", r: "こだわります", m: "câu nệ, quá bận tâm vào (chi tiết/hình thức)" },
      { w: "習慣", r: "しゅうかん", m: "thói quen" }
    ]
  },
  {
    title: "高齢者の免許返納",
    body: "高齢のドライバーが運転免許を自主的に返納する動きが広がっている。背景には、高齢者による交通事故への社会的な関心の高まりがある。しかし、地方では車がなければ買い物も通院も困難になるため、返したくても返せないという人も少なくない。返納を促すだけでなく、バスや乗り合いタクシーなど、代わりとなる交通手段の整備が求められている。",
    qs: [
      {
        q: "免許を返納したくても返せない人がいるのはなぜか。",
        opts: ["家族に反対されるから", "地方では車がないと買い物や通院が困難だから", "手数料が高いから", "手続きが複雑だから"],
        ans: 1,
        exp: "Đáp án đúng là 2: bài viết ở nông thôn「車がなければ買い物も通院も困難になるため、返したくても返せない」. Đáp án 1, 3, 4 (gia đình phản đối, lệ phí cao, thủ tục phức tạp) không xuất hiện trong bài."
      },
      {
        q: "筆者は何が必要だと言っているか。",
        opts: ["返納を義務化すること", "代わりとなる交通手段の整備", "高齢者の講習を増やすこと", "車の価格を下げること"],
        ans: 1,
        exp: "Đáp án đúng là 2: câu cuối bài nói không chỉ thúc đẩy việc trả bằng mà cần「バスや乗り合いタクシーなど、代わりとなる交通手段の整備」— xây dựng phương tiện thay thế. Đáp án 1 (bắt buộc trả bằng) mạnh hơn quan điểm của bài. Đáp án 3 và 4 không được nhắc đến."
      }
    ],
    vocab: [
      { w: "返納します", r: "へんのうします", m: "trả lại, nộp lại (giấy phép)" },
      { w: "自主的", r: "じしゅてき", m: "mang tính tự nguyện, chủ động" },
      { w: "通院", r: "つういん", m: "đi khám bệnh (đi về bệnh viện)" },
      { w: "促します", r: "うながします", m: "thúc đẩy, khuyến khích" },
      { w: "整備", r: "せいび", m: "chuẩn bị sẵn sàng, xây dựng hệ thống" }
    ]
  },
  {
    title: "キャッシュレス化の進展",
    body: "日本でもキャッシュレス決済が急速に広がっている。スマートフォン一つで支払いが済む手軽さは、特に若い世代に支持されている。一方で、現金しか使えない小さな店もまだ多く、高齢者の中には新しい仕組みに戸惑う人もいる。便利さの裏側で、誰一人取り残さない仕組みづくりが問われている。",
    qs: [
      {
        q: "キャッシュレス決済が若い世代に支持されている理由は何か。",
        opts: ["ポイントがもらえるから", "スマートフォン一つで支払いが済む手軽さ", "現金より安くなるから", "店が増えたから"],
        ans: 1,
        exp: "Đáp án đúng là 2: bài viết「スマートフォン一つで支払いが済む手軽さは、特に若い世代に支持されている」— sự tiện lợi chỉ cần một chiếc điện thoại. Đáp án 1, 3, 4 không được nêu trong bài như lý do."
      },
      {
        q: "筆者が課題だと考えているのは何か。",
        opts: ["決済の速度を上げること", "誰一人取り残さない仕組みづくり", "現金の製造をやめること", "若者への教育"],
        ans: 1,
        exp: "Đáp án đúng là 2: câu cuối bài nói đằng sau sự tiện lợi,「誰一人取り残さない仕組みづくりが問われている」— việc xây dựng cơ chế không bỏ lại ai (như người cao tuổi lúng túng, cửa hàng nhỏ chỉ dùng tiền mặt). Đáp án 1, 3, 4 không xuất hiện trong bài."
      }
    ],
    vocab: [
      { w: "決済", r: "けっさい", m: "thanh toán, quyết toán" },
      { w: "急速", r: "きゅうそく", m: "nhanh chóng, tốc độ cao" },
      { w: "手軽", r: "てがる", m: "đơn giản, tiện tay, dễ dàng" },
      { w: "戸惑います", r: "とまどいます", m: "bối rối, lúng túng" },
      { w: "取り残します", r: "とりのこします", m: "bỏ lại phía sau, để sót lại" }
    ]
  },
  {
    title: "地元野菜の直売所",
    body: "駅前に、地元の農家が野菜を直接売る直売所がオープンした。朝に収穫したばかりの新鮮な野菜が並び、生産者の名前も表示されているため、安心して買えると評判だ。値段もスーパーより安いことが多く、開店直後から多くの客でにぎわっている。農家にとっても、消費者の声を直接聞ける貴重な場となっている。",
    qs: [
      {
        q: "直売所が評判なのはなぜか。",
        opts: ["駅から遠いから", "新鮮な野菜に生産者の名前が表示され、安心して買えるから", "24時間開いているから", "宅配してくれるから"],
        ans: 1,
        exp: "Đáp án đúng là 2: bài viết rau vừa thu hoạch buổi sáng và「生産者の名前も表示されているため、安心して買えると評判だ」— có ghi tên người sản xuất nên mua yên tâm. Đáp án 1 ngược với vị trí (trước ga). Đáp án 3 và 4 không xuất hiện trong bài."
      },
      {
        q: "農家にとって直売所はどんな場所か。",
        opts: ["収入が減る場所", "消費者の声を直接聞ける貴重な場", "忙しくて大変な場所", "若者だけの場所"],
        ans: 1,
        exp: "Đáp án đúng là 2: câu cuối bài nói với người nông dân, chợ trực tiếp là「消費者の声を直接聞ける貴重な場」— nơi quý giá để nghe trực tiếp tiếng nói người tiêu dùng. Đáp án 1, 3, 4 không được nhắc đến."
      }
    ],
    vocab: [
      { w: "直売所", r: "ちょくばいじょ", m: "điểm bán trực tiếp (nông sản)" },
      { w: "収穫します", r: "しゅうかくします", m: "thu hoạch" },
      { w: "生産者", r: "せいさんしゃ", m: "người sản xuất" },
      { w: "評判", r: "ひょうばん", m: "danh tiếng, được đánh giá (tốt/xấu)" },
      { w: "貴重", r: "きちょう", m: "quý giá, quý báu" }
    ]
  },
  {
    title: "ペットとの暮らし",
    body: "ペットを家族の一員として暮らす人が増えている。ペットフードや動物病院など、関連する市場も拡大を続けている。しかし、その一方で、飼い主の高齢化や引っ越しなどを理由に、飼えなくなるケースも後を絶たない。動物を飼うことは、命を預かることだ。かわいいという気持ちだけでなく、最後まで責任を持つ覚悟が求められる。",
    qs: [
      {
        q: "ペットを飼えなくなる理由として挙げられているのは何か。",
        opts: ["ペットフードの値上がり", "飼い主の高齢化や引っ越し", "動物病院の不足", "法律の変更"],
        ans: 1,
        exp: "Đáp án đúng là 2: bài viết「飼い主の高齢化や引っ越しなどを理由に、飼えなくなるケースも後を絶たない」. Đáp án 1, 3, 4 không xuất hiện trong bài như lý do."
      },
      {
        q: "筆者は動物を飼う人に何を求めているか。",
        opts: ["高級なフードを与えること", "最後まで責任を持つ覚悟", "複数のペットを飼うこと", "ペット保険への加入"],
        ans: 1,
        exp: "Đáp án đúng là 2: câu cuối bài nói nuôi động vật là nhận một sinh mệnh nên cần「最後まで責任を持つ覚悟」— quyết tâm chịu trách nhiệm đến cùng, không chỉ vì thấy dễ thương. Đáp án 1, 3, 4 không được nhắc đến."
      }
    ],
    vocab: [
      { w: "一員", r: "いちいん", m: "một thành viên" },
      { w: "拡大", r: "かくだい", m: "mở rộng, sự拡大" },
      { w: "預かります", r: "あずかります", m: "nhận giữ, nhận trách nhiệm trông nom" },
      { w: "覚悟", r: "かくご", m: "quyết tâm, sự sẵn sàng (chịu hệ quả)" },
      { w: "後を絶ちません", r: "あとをたちません", m: "không dứt, liên tiếp xảy ra" }
    ]
  },
  {
    title: "マラソン大会の人気",
    body: "全国各地で市民マラソンの大会が開催され、多くの参加者でにぎわっている。健康志向の高まりに加え、走ることを通じて地域の人々と交流できる点も人気の理由だ。沿道の応援や、大会を支えるボランティアの存在も、ランナーにとって大きな力になる。主催者側は、安全対策を徹底しながら、地域色豊かな大会づくりを目指している。",
    qs: [
      {
        q: "市民マラソンが人気の理由として挙げられていないのはどれか。",
        opts: ["健康志向の高まり", "地域の人々と交流できること", "賞金が高いこと", "沿道の応援があること"],
        ans: 2,
        exp: "Đáp án đúng là 3 (賞金が高いこと): bài nêu lý do phổ biến là xu hướng quan tâm sức khỏe, giao lưu với người dân địa phương, và phần cuối cũng nhắc sự cổ vũ dọc đường cùng tình nguyện viên là nguồn sức mạnh cho người chạy. Tiền thưởng cao hoàn toàn không xuất hiện trong bài."
      },
      {
        q: "主催者は大会づくりで何を目指しているか。",
        opts: ["参加者を減らすこと", "安全対策を徹底し、地域色豊かな大会にすること", "記録の更新だけを重視すること", "海外選手の招待だけ"],
        ans: 1,
        exp: "Đáp án đúng là 2: câu cuối bài nói ban tổ chức「安全対策を徹底しながら、地域色豊かな大会づくりを目指している」— chú trọng triệt để an toàn và xây dựng giải mang đậm màu sắc địa phương. Đáp án 1, 3, 4 không xuất hiện trong bài."
      }
    ],
    vocab: [
      { w: "志向", r: "しこう", m: "xu hướng, thiên hướng (健康志向)" },
      { w: "沿道", r: "えんどう", m: "dọc đường, hai bên đường" },
      { w: "主催者", r: "しゅさいしゃ", m: "ban tổ chức, đơn vị tổ chức" },
      { w: "徹底します", r: "てっていします", m: "triệt để, làm đến nơi đến chốn" },
      { w: "支えます", r: "ささえます", m: "chống đỡ, hỗ trợ, nâng đỡ" }
    ]
  },
  {
    title: "図書館の新しい役割",
    body: "公共図書館の役割が変わりつつある。本を借りる場所という従来のイメージに加え、最近では、地域の人々が集まる交流の場としての機能が注目されている。子育て中の親が相談し合う会や、高齢者向けのスマートフォン教室など、開催されるイベントも多様化している。図書館は、知識を得る場であると同時に、人と人をつなぐ場へと進化しているのだ。",
    qs: [
      {
        q: "最近の図書館で注目されている機能は何か。",
        opts: ["本を売る機能", "地域の人々が集まる交流の場としての機能", "本を長く保管する機能だけ", "試験会場としての機能"],
        ans: 1,
        exp: "Đáp án đúng là 2: bài viết ngoài hình ảnh truyền thống là nơi mượn sách, gần đây「地域の人々が集まる交流の場としての機能が注目されている」. Đáp án 1 (bán sách) không có trong bài. Đáp án 3 chỉ là vai trò cũ. Đáp án 4 không được nhắc đến."
      },
      {
        q: "筆者は図書館をどのような場所だと言っているか。",
        opts: ["知識を得る場だけである", "知識を得る場であると同時に、人と人をつなぐ場である", "静かにしなければならない場所である", "子どものためだけの場所である"],
        ans: 1,
        exp: "Đáp án đúng là 2: câu cuối bài kết luận thư viện「知識を得る場であると同時に、人と人をつなぐ場へと進化している」— vừa là nơi lấy tri thức vừa là nơi kết nối con người. Đáp án 1 thiếu mất vế thứ hai mà bài nhấn mạnh. Đáp án 3 và 4 không xuất hiện trong bài."
      }
    ],
    vocab: [
      { w: "公共", r: "こうきょう", m: "công cộng" },
      { w: "従来", r: "じゅうらい", m: "từ trước đến nay, truyền thống" },
      { w: "子育て", r: "こそだて", m: "nuôi dạy con" },
      { w: "多様化", r: "たようか", m: "đa dạng hóa" },
      { w: "進化", r: "しんか", m: "tiến hóa, phát triển biến đổi" }
    ]
  }
];
