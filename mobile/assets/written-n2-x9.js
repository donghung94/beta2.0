/* 9 đề viết CỐ ĐỊNH của N2 (Test 1–9), mỗi đề 75 câu theo đúng đặc tả EXAM_COMP N2:
   yomi 5 · hyoki 5 · ctx 7 · syn 5 · yoho 5 · kotoba 5 · g1dlg 3 + g1 9 · star 5 · bunsho 1 bài (5 câu) ·
   readS 5 · readM 9 · tougou 2 · shuchou 3 · info 2 = 75 câu viết / 107 câu cả đề.
   Mỗi đề là 1 bộ riêng, không trùng câu giữa các đề; mọi câu có exp + voc tiếng Việt.
   Nguồn: bộ written-n2-x9 đã kiểm chứng độc lập (đáp án, cấp độ N2, không trùng) trước khi gắn app.
   App đọc qua window.WRITTEN_N2_SETS["1".."9"] trong chế độ đề cố định của exBuildWritten. */

/* ----- Test 1 ----- */
window.WRITTEN_N2_SET1 = {
  yomi: [
  {
    "s": "会議 の 準備 は もう 終わり ました か。",
    "t": "準備",
    "r": "じゅんび",
    "w": ["じゅんぴ", "しゅんび", "じゅんみ"],
    "exp": "準備 đọc là じゅんび（準 じゅん、備 び）。じゅんぴ đọc 備 thành ぴ là sai、しゅんび đọc 準 thành しゅん là sai、じゅんみ đọc 備 thành み là sai。",
    "voc": "準備（じゅんび）：chuẩn bị； 会議（かいぎ）：cuộc họp； 終わる（おわる）：kết thúc"
  },
  {
    "s": "彼 は 毎日 努力 を 続けて、ついに 試験 に 合格 しました。",
    "t": "努力",
    "r": "どりょく",
    "w": ["どりょ", "どりき", "とりょく"],
    "exp": "努力 đọc là どりょく（努 ど、力 りょく）。どりょ thiếu âm く、どりき đọc 力 thành りき là sai、とりょく đọc 努 thành と là sai。",
    "voc": "努力（どりょく）：nỗ lực； 続ける（つづける）：tiếp tục； 試験（しけん）：kì thi； 合格（ごうかく）：đỗ, đạt"
  },
  {
    "s": "新しい 制度 は 会社 に 大きな 影響 を 与えました。",
    "t": "影響",
    "r": "えいきょう",
    "w": ["えいぎょう", "えいきょ", "えきょう"],
    "exp": "影響 đọc là えいきょう（影 えい、響 きょう）。えいぎょう đọc 響 thành ぎょう là sai、えいきょ thiếu âm う、えきょう đọc 影 thành え là sai。",
    "voc": "影響（えいきょう）：ảnh hưởng； 制度（せいど）：chế độ； 会社（かいしゃ）：công ty； 与える（あたえる）：gây ra, mang lại"
  },
  {
    "s": "学校 の 規則 を 守らなければ なりません。",
    "t": "規則",
    "r": "きそく",
    "w": ["きそ", "ぎそく", "きしょく"],
    "exp": "規則 đọc là きそく（規 き、則 そく）。きそ thiếu âm く、ぎそく đọc 規 thành ぎ là sai、きしょく đọc 則 thành しょく là sai。",
    "voc": "規則（きそく）：quy tắc, nội quy； 学校（がっこう）：trường học； 守る（まもる）：tuân thủ, giữ gìn"
  },
  {
    "s": "山 の 上 から 見た 景色 は とても きれい でした。",
    "t": "景色",
    "r": "けしき",
    "w": ["けいしき", "けしぎ", "げしき"],
    "exp": "景色 đọc là けしき（景 け、色 しき）。けいしき đọc 景 thành けい là sai、けしぎ đọc 色 thành しぎ là sai、げしき đọc 景 thành げ là sai。",
    "voc": "景色（けしき）：phong cảnh； 山（やま）：núi； きれい：đẹp"
  }
  ],
  hyoki: [
  {
    "s": "子ども の はったつ は 人 それぞれ ちがいます。",
    "h": "はったつ",
    "k": "発達",
    "w": ["発立", "発辰", "抜達"],
    "exp": "はったつ viết là 発達（発 はつ、達 たつ）。発立 dùng 立 sai chữ、発辰 dùng 辰 sai chữ、抜達 dùng 抜 sai chữ。",
    "voc": "発達（はったつ）：phát triển； 子ども：trẻ em； それぞれ：mỗi người một khác"
  },
  {
    "s": "母 は 子ども の こと を いつも しんぱい して います。",
    "h": "しんぱい",
    "k": "心配",
    "w": ["心肥", "信配", "心妃"],
    "exp": "しんぱい viết là 心配（心 しん、配 はい）。心肥 dùng 肥 sai chữ、信配 dùng 信 sai chữ、心妃 dùng 妃 sai chữ。",
    "voc": "心配（しんぱい）：lo lắng； 母（はは）：mẹ； いつも：luôn luôn"
  },
  {
    "s": "友だち と きょうりょく して、文化祭 の 準備 を しました。",
    "h": "きょうりょく",
    "k": "協力",
    "w": ["協立", "協九", "協玉"],
    "exp": "きょうりょく viết là 協力（協 きょう、力 りょく）。協立 dùng 立 sai chữ、協九 dùng 九 sai chữ、協玉 dùng 玉 sai chữ。",
    "voc": "協力（きょうりょく）：hợp tác； 友だち（ともだち）：bạn bè； 文化祭（ぶんかさい）：lễ hội văn hóa； 準備（じゅんび）：chuẩn bị"
  },
  {
    "s": "アルバイト の けいけん が あります。",
    "h": "けいけん",
    "k": "経験",
    "w": ["経検", "経見", "経験者"],
    "exp": "けいけん viết là 経験（経 けい、験 けん）。経検 dùng 検 sai chữ、経見 dùng 見 sai chữ、経験者 đọc là けいけんしゃ, thêm 者 nên không phải là けいけん。",
    "voc": "経験（けいけん）：kinh nghiệm； アルバイト：việc làm thêm"
  },
  {
    "s": "テスト の せいせき が よく なりました。",
    "h": "せいせき",
    "k": "成績",
    "w": ["成積", "成清", "成績力"],
    "exp": "せいせき viết là 成績（成 せい、績 せき）。成積 dùng 積 sai chữ、成清 dùng 清 sai chữ、成績力 thêm 力 thừa nên sai。",
    "voc": "成績（せいせき）：thành tích, điểm số； テスト：bài kiểm tra"
  }
  ],
  ctx: [
  {
    "s": "来月 の 旅行 の ため に、ホテル の （　）を しました。",
    "a": "よやく",
    "w": ["じゅんび", "けいかく", "もうしこみ"],
    "exp": "Đặt phòng khách sạn trước chuyến đi dùng 予約（よやく：đặt trước）。準備（じゅんび：chuẩn bị）không hợp với をしました trong ngữ cảnh đặt phòng、計画（けいかく：kế hoạch）không phải là hành động đặt phòng、申し込み（もうしこみ：đăng ký）thường dùng cho khóa học hay đơn xin, không dùng cho đặt phòng khách sạn。",
    "voc": "予約（よやく）：đặt trước； 旅行（りょこう）：du lịch； ホテル：khách sạn"
  },
  {
    "s": "日本語 の 敬語 は 外国人 に とって （　）です。",
    "a": "むずかしい",
    "w": ["かんたん", "やさしい", "べんり"],
    "exp": "Kính ngữ tiếng Nhật đối với người nước ngoài là khó, dùng 難しい（むずかしい）。簡単（かんたん：dễ）ngược nghĩa、やさしい（dễ, hiền）không hợp vì kính ngữ nổi tiếng là khó、便利（べんり：tiện lợi）không hợp ngữ cảnh này。",
    "voc": "敬語（けいご）：kính ngữ； 外国人（がいこくじん）：người nước ngoài； 難しい（むずかしい）：khó"
  },
  {
    "s": "道 を 渡る とき は、車 に （　）して ください。",
    "a": "ちゅうい",
    "w": ["じゅんび", "しんぱい", "きょうみ"],
    "exp": "Khi qua đường phải chú ý đến xe cộ, dùng 注意（ちゅうい：chú ý）trong cụm 注意してください。準備（じゅんび：chuẩn bị）không hợp、 心配（しんぱい：lo lắng）không dùng với してください trong câu này、興味（きょうみ：hứng thú）không hợp nghĩa。",
    "voc": "注意（ちゅうい）：chú ý； 道（みち）：đường； 渡る（わたる）：băng qua； 車（くるま）：xe ô tô"
  },
  {
    "s": "この 映画 は とても （　）です。もう 一度 見たい です。",
    "a": "おもしろい",
    "w": ["つまらない", "かなしい", "いたい"],
    "exp": "Phim hay đến mức muốn xem lại lần nữa, dùng 面白い（おもしろい：thú vị）。つまらない（chán）ngược với muốn xem lại、かなしい（buồn）không hợp với muốn xem lại、いたい（đau）không dùng để tả phim。",
    "voc": "面白い（おもしろい）：thú vị； 映画（えいが）：phim； もう一度（もういちど）：thêm một lần nữa"
  },
  {
    "s": "この 店 の パン は とても （　）です。毎日 買い に 来る 人 が 多い です。",
    "a": "おいしい",
    "w": ["まずい", "くさい", "にがい"],
    "exp": "Bánh ngon nên ngày nào cũng có nhiều người đến mua, dùng おいしい（ngon）。まずい（dở）thì không ai đến mua mỗi ngày、くさい（hôi）và にがい（đắng）đều không hợp để tả bánh mì được nhiều người thích。",
    "voc": "おいしい：ngon； パン：bánh mì； 毎日（まいにち）：mỗi ngày； 買う（かう）：mua"
  },
  {
    "s": "この 薬 は、食後 に （　）ください。",
    "a": "のんで",
    "w": ["たべて", "すって", "あびて"],
    "exp": "Thuốc thì uống, dùng 飲んで（のんで）trong câu 飲んでください。食べて（たべて：ăn）không dùng cho thuốc、吸って（すって：hút）không hợp、浴びて（あびて：tắm, dội）không hợp với thuốc。",
    "voc": "薬（くすり）：thuốc； 食後（しょくご）：sau khi ăn； 飲む（のむ）：uống"
  },
  {
    "s": "駅 の 前 に 新しい （　）が できました。たくさんの 人 が 買い物 に 来ます。",
    "a": "スーパー",
    "w": ["びょういん", "としょかん", "がっこう"],
    "exp": "Nơi mới mở trước ga mà nhiều người đến mua sắm là siêu thị, dùng スーパー。病院（びょういん：bệnh viện）、図書館（としょかん：thư viện）、学校（がっこう：trường học）đều không phải là nơi mua sắm。",
    "voc": "スーパー：siêu thị； 駅（えき）：nhà ga； 買い物（かいもの）：mua sắm"
  }
  ],
  syn: [
  {
    "s": "あの 店員 は とても しんせつ で、いつも 笑顔 で 対応 して くれます。",
    "t": "しんせつ",
    "a": "やさしい",
    "w": ["きびしい", "つめたい", "こわい"],
    "exp": "親切（しんせつ：tốt bụng, tử tế）gần nghĩa với やさしい（hiền lành, dịu dàng）。きびしい（nghiêm khắc）ngược nghĩa、つめたい（lạnh lùng）ngược nghĩa、こわい（đáng sợ）không liên quan。",
    "voc": "親切（しんせつ）：tốt bụng, tử tế； 店員（てんいん）：nhân viên bán hàng； 笑顔（えがお）：nụ cười； 対応（たいおう）：đối ứng, phục vụ"
  },
  {
    "s": "彼 は 勇気 を 出して、みんな の 前 で 話しました。",
    "t": "勇気",
    "a": "どきょう",
    "w": ["しんぱい", "きんちょう", "ふあん"],
    "exp": "勇気（ゆうき：dũng khí, can đảm）gần nghĩa với 度胸（どきょう：gan dạ, dũng cảm）。心配（しんぱい：lo lắng）、緊張（きんちょう：căng thẳng）、不安（ふあん：bất an）đều là cảm xúc ngược với dũng cảm, không phải là từ đồng nghĩa。",
    "voc": "勇気（ゆうき）：dũng khí； 度胸（どきょう）：gan dạ； 出す（だす）：thể hiện ra； みんなの前（みんなのまえ）：trước mặt mọi người"
  },
  {
    "s": "この 景色 は とても 美しい です。",
    "t": "美しい",
    "a": "きれい",
    "w": ["きたない", "くらい", "せまい"],
    "exp": "美しい（うつくしい：đẹp）gần nghĩa với きれい（đẹp, sạch đẹp）。きたない（bẩn）ngược nghĩa、くらい（tối）không liên quan、せまい（hẹp）không liên quan。",
    "voc": "美しい（うつくしい）：đẹp； 景色（けしき）：phong cảnh"
  },
  {
    "s": "母 は 料理 が 得意 です。",
    "t": "得意",
    "a": "じょうず",
    "w": ["へた", "にがて", "きらい"],
    "exp": "得意（とくい：giỏi, sở trường）gần nghĩa với 上手（じょうず：giỏi）。へた（dở, vụng）ngược nghĩa、苦手（にがて：yếu, không giỏi）ngược nghĩa、きらい（ghét）không phải là từ đồng nghĩa。",
    "voc": "得意（とくい）：giỏi, sở trường； 上手（じょうず）：giỏi； 料理（りょうり）：món ăn, nấu ăn"
  },
  {
    "s": "この かばん は とても 重い です。",
    "t": "重い",
    "a": "おもたい",
    "w": ["かるい", "ちいさい", "うすい"],
    "exp": "重い（おもい：nặng）gần nghĩa với 重たい（おもたい：nặng）。かるい（nhẹ）ngược nghĩa、ちいさい（nhỏ）không liên quan đến nặng nhẹ、うすい（mỏng）không phải là từ đồng nghĩa。",
    "voc": "重い（おもい）：nặng； かばん：cái túi, cặp sách"
  }
  ],
  yoho: [
  {
    "t": "からい",
    "s": [
     "からい 砂糖 を なめました。",
     "からい ケーキ を 食べました。",
     "この カレー は からい です。",
     "からい はちみつ を なめました。"
    ],
    "a": 2,
    "exp": "辛い（からい：cay）chỉ dùng cho món cay như cà-ri, nên chỉ câu 3 đúng。砂糖（đường）là ngọt, không cay；ケーキ（bánh ngọt）là ngọt, không cay；はちみつ（mật ong）là ngọt, không cay。",
    "voc": "辛い（からい）：cay； 砂糖（さとう）：đường； ケーキ：bánh ngọt； カレー：cà-ri； はちみつ：mật ong"
  },
  {
    "t": "あつい",
    "s": [
     "あつい 氷 を 食べました。",
     "あつい お茶 を 飲みました。",
     "あつい 冷蔵庫 を 開けました。",
     "あつい 雪 を 見ました。"
    ],
    "a": 1,
    "exp": "熱い（あつい：nóng）chỉ dùng cho thứ nóng như trà nóng, nên chỉ câu 2 đúng。氷（nước đá）là lạnh, không nóng；冷蔵庫（tủ lạnh）là lạnh, không nóng；雪（tuyết）là lạnh, không nóng。",
    "voc": "熱い（あつい）：nóng； 氷（こおり）：nước đá； お茶（おちゃ）：trà； 冷蔵庫（れいぞうこ）：tủ lạnh； 雪（ゆき）：tuyết"
  },
  {
    "t": "あまい",
    "s": [
     "あまい 砂糖 を なめました。",
     "あまい 塩 を なめました。",
     "あまい しょうゆ を なめました。",
     "あまい からし を なめました。"
    ],
    "a": 0,
    "exp": "甘い（あまい：ngọt）chỉ dùng cho thứ ngọt như đường, nên chỉ câu 1 đúng。塩（muối）là mặn, không ngọt；しょうゆ（nước tương）là mặn, không ngọt；からし（mù tạt）là cay, không ngọt。",
    "voc": "甘い（あまい）：ngọt； 砂糖（さとう）：đường； 塩（しお）：muối； しょうゆ：nước tương； からし：mù tạt"
  },
  {
    "t": "すっぱい",
    "s": [
     "すっぱい レモン を 食べました。",
     "すっぱい 砂糖 を なめました。",
     "すっぱい チョコレート を 食べました。",
     "すっぱい ケーキ を 食べました。"
    ],
    "a": 0,
    "exp": "すっぱい（chua）chỉ dùng cho thứ chua như chanh, nên chỉ câu 1 đúng。砂糖（đường）là ngọt, không chua；チョコレート（sô-cô-la）là ngọt, không chua；ケーキ（bánh ngọt）là ngọt, không chua。",
    "voc": "すっぱい：chua； レモン：chanh； 砂糖（さとう）：đường； チョコレート：sô-cô-la； ケーキ：bánh ngọt"
  },
  {
    "t": "さむい",
    "s": [
     "さむい お茶 を 飲みました。",
     "さむい コート を 着ました。",
     "さむい 雪 が 降りました。",
     "さむい お風呂 に 入りました。"
    ],
    "a": 2,
    "exp": "寒い（さむい：lạnh, rét）dùng cho thời tiết hay tuyết lạnh, nên chỉ câu 3 đúng。お茶（trà）uống khi nóng, không nói 寒いお茶；コート（áo khoác）là đồ mặc để chống lạnh, không nói 寒いコート；お風呂（bồn tắm）là nước nóng, không nói 寒いお風呂。",
    "voc": "寒い（さむい）：lạnh, rét； お茶（おちゃ）：trà； コート：áo khoác； 雪（ゆき）：tuyết； お風呂（おふろ）：bồn tắm"
  }
  ],
  kotoba: [
  {
    "s": "この 村 に は、古い （　）が あります。",
    "a": "じんじゃ",
    "w": ["しんじゃ", "じんしゃ", "しんしゃ"],
    "exp": "神社 đọc là じんじゃ（神 じん、社 じゃ：âm 社 biến thành じゃ do hiện tượng rendaku）。しんじゃ đọc 神 thành しん là sai、じんしゃ không có rendaku nên sai、しんしゃ sai cả hai âm。",
    "voc": "神社（じんじゃ）：đền thờ Thần đạo； 村（むら）：làng； 古い（ふるい）：cổ, cũ"
  },
  {
    "s": "この 手紙 は、先生 に （　）します。",
    "a": "おわたし",
    "w": ["わたし", "ごわたし", "おわたす"],
    "exp": "Đưa thư cho thầy dùng kính ngữ khiêm nhường お渡しします, nên điền おわたし。わたしします thiếu お nên không phải là kính ngữ khiêm nhường、ごわたしします sai vì ご không đi với 渡し、おわたすします sai vì dạng nối của 渡す là わたし, không phải わたす。",
    "voc": "渡す（わたす）：đưa, trao； 手紙（てがみ）：thư； 先生（せんせい）：thầy cô"
  },
  {
    "s": "この 薬 は、（　）が 高い です。",
    "a": "あんぜんせい",
    "w": ["あんぜん", "あんせい", "あんぜんか"],
    "exp": "Nói về mức độ an toàn của thuốc dùng danh từ 安全性（あんぜんせい：tính an toàn）trong cụm 安全性が高い。安全（あんぜん）là tính từ な, không nói 安全が高い；安性 không phải là từ có thật；安全化（あんぜんか：sự an toàn hóa）không hợp với が高い。",
    "voc": "安全性（あんぜんせい）：tính an toàn； 薬（くすり）：thuốc； 高い（たかい）：cao"
  },
  {
    "s": "車 を 止める ため に、（　）を 探して います。",
    "a": "ちゅうしゃじょう",
    "w": ["ちゅうしゃば", "ちゅうしゃだい", "ちゅうしゃしゃ"],
    "exp": "Nơi đỗ xe là 駐車場（ちゅうしゃじょう：bãi đỗ xe）。ちゅうしゃば、ちゅうしゃだい、ちゅうしゃしゃ đều không phải là từ có thật, chỉ có 駐車場 mới là từ đúng để chỉ bãi đỗ xe。",
    "voc": "駐車場（ちゅうしゃじょう）：bãi đỗ xe； 車（くるま）：xe ô tô； 止める（とめる）：dừng, đỗ； 探す（さがす）：tìm kiếm"
  },
  {
    "s": "この 村 は、最近 （　）が 進んで います。",
    "a": "きんだいか",
    "w": ["きんだい", "きんだいせい", "きんだいてき"],
    "exp": "Sự hiện đại hóa đang tiến triển dùng 近代化（きんだいか：hiện đại hóa）trong cụm 近代化が進んでいます。近代（きんだい：thời cận đại）là danh từ chỉ thời đại, không nói 近代が進む；近代性（きんだいせい：tính cận đại）không hợp với が進む；近代的（きんだいてき）là tính từ な, không nói 近代的が進む。",
    "voc": "近代化（きんだいか）：hiện đại hóa； 村（むら）：làng； 最近（さいきん）：gần đây； 進む（すすむ）：tiến triển"
  }
  ],
  g1dlg: [
  {
    "d": [
     "きのうの かいぎは、どうでしたか。",
     "新しい けいかくを（　）、いろいろな いけんが 出ましたよ。"
    ],
    "a": "めぐって",
    "w": ["めぐると", "めぐれば", "めぐって いる"],
    "p": "〜をめぐって",
    "exp": "Bàn luận xoay quanh kế hoạch mới dùng 〜をめぐって（xoay quanh, về vấn đề）。めぐると là dạng điều kiện, không nối được với câu kết quả いろいろな意見が出ました；めぐれば cũng là dạng điều kiện nên sai；めぐっている là thể tiếp diễn, không hợp với mẫu をめぐって。",
    "voc": "計画（けいかく）：kế hoạch； 意見（いけん）：ý kiến； 出る（でる）：xuất hiện, được đưa ra"
  },
  {
    "d": [
     "山田さんは、仕事の ほかに、何を して いますか。",
     "会社で 働く（　）、夜は 日本語学校で 勉強して います。"
    ],
    "a": "かたわら",
    "w": ["かたわらに", "かたわらで", "かたわらを"],
    "p": "〜かたわら",
    "exp": "Vừa làm ở công ty, vừa học ở trường tiếng Nhật buổi tối, dùng 〜かたわら（vừa… vừa…）đi sau thể từ điển 働く。かたわらに、かたわらで、かたわらを đều sai trợ từ, mẫu này chỉ dùng かたわら không có trợ từ đi sau.",
    "voc": "働く（はたらく）：làm việc； 日本語学校（にほんごがっこう）：trường tiếng Nhật； 勉強（べんきょう）：học tập"
  },
  {
    "d": [
     "この 町では、今年、いろいろな お祭りが ありますね。",
     "来月の 花まつりを（　）、秋まで お祭りが 続き ます。"
    ],
    "a": "かわきりに",
    "w": ["かわきりで", "かわきりから", "かわきりと"],
    "p": "〜を皮切りに",
    "exp": "Lấy lễ hội hoa tháng sau làm sự kiện mở đầu cho chuỗi lễ hội đến mùa thu, dùng 〜を皮切りに（lấy… làm đầu, khởi đầu bằng…）。かわきりで、かわきりから、かわきりと đều sai trợ từ, mẫu này chỉ dùng を皮切りに。",
    "voc": "皮切り（かわきり）：sự mở đầu； お祭り（おまつり）：lễ hội； 花まつり（はなまつり）：lễ hội hoa； 続く（つづく）：tiếp diễn"
  }
  ],
  g1: [
  {
    "s": "運動会 に（　）、みんな で グラウンド の 準備 を しました。",
    "a": "先立って",
    "w": ["先立った", "先立て", "先立たない"],
    "p": "〜に先立って",
    "exp": "Trước khi đại hội thể thao diễn ra, mọi người chuẩn bị sân, dùng 〜に先立って（trước khi…）đi sau danh từ 運動会に。先立った là thể quá khứ, không nối được；先立て là dạng masu, không hợp；先立たない là thể phủ định, không hợp nghĩa。",
    "voc": "運動会（うんどうかい）：đại hội thể thao； グラウンド：sân vận động； 準備（じゅんび）：chuẩn bị"
  },
  {
    "s": "入学 に（　）、新しい 学生 の ため の 説明会 が 開かれました。",
    "a": "際して",
    "w": ["際に", "際した", "際する"],
    "p": "〜に際して",
    "exp": "Nhân dịp nhập học, buổi giới thiệu cho học sinh mới được tổ chức, dùng 〜に際して（nhân dịp…）đi sau danh từ 入学に。際に sai dạng, mẫu này cần 際して；際した và 際する đều sai vì 際 không phải là động từ có thể chia như vậy。",
    "voc": "入学（にゅうがく）：nhập học； 説明会（せつめいかい）：buổi giới thiệu； 開く（ひらく）：tổ chức, mở ra"
  },
  {
    "s": "引っ越し に（　）、荷物 の 準備 を 始めました。",
    "a": "あたって",
    "w": ["あたる", "あたった", "あたらない"],
    "p": "〜にあたって",
    "exp": "Nhân dịp chuyển nhà, bắt đầu chuẩn bị hành lý, dùng 〜にあたって（nhân dịp…）đi sau danh từ 引っ越しに。あたる là thể từ điển, không nối được；あたった là thể quá khứ nên sai；あたらない là thể phủ định, không hợp nghĩa。",
    "voc": "引っ越し（ひっこし）：chuyển nhà； 荷物（にもつ）：hành lý； 準備（じゅんび）：chuẩn bị； 始める（はじめる）：bắt đầu"
  },
  {
    "s": "この 調査 は 3年 に（　）行われました。",
    "a": "わたって",
    "w": ["わたる", "わたった", "わたらない"],
    "p": "〜にわたって",
    "exp": "Cuộc điều tra kéo dài suốt 3 năm, dùng 〜にわたって（kéo dài suốt…）đi sau 3年に。わたる là thể từ điển, không nối được với 行われました；わたった là thể quá khứ nên sai；わたらない là thể phủ định, không hợp nghĩa。",
    "voc": "調査（ちょうさ）：điều tra； 行う（おこなう）：tiến hành； 3年（さんねん）：3 năm"
  },
  {
    "s": "この 薬 は 医者 に 相談 して（　）飲んでは いけません。",
    "a": "からでないと",
    "w": ["からでは", "からでなくて", "からでないで"],
    "p": "V-て からでないと〜ない",
    "exp": "Phải hỏi bác sĩ rồi mới được uống thuốc, không thì không được uống, dùng 〜てからでないと〜ない（nếu không… thì không…）。からでは sai dạng, không tạo thành mẫu điều kiện phủ định；からでなくて và からでないで đều sai dạng, không hợp với 飲んではいけません。",
    "voc": "薬（くすり）：thuốc； 医者（いしゃ）：bác sĩ； 相談する（そうだんする）：hỏi ý kiến, tham khảo； 飲む（のむ）：uống"
  },
  {
    "s": "雨 が 降り出した（　）、すぐ に 止みました。",
    "a": "かとおもったら",
    "w": ["かとおもって", "かとおもった", "かとおもい"],
    "p": "〜かと思ったら",
    "exp": "Vừa nghĩ là mưa bắt đầu rơi thì mưa đã tạnh ngay, dùng 〜かと思ったら（vừa nghĩ là… thì đã…）。かとおもって là thể て, không nối được với すぐに止みました；かとおもった là thể quá khứ đơn, không tạo thành mẫu này；かとおもい là dạng masu, không hợp。",
    "voc": "降り出す（ふりだす）：bắt đầu rơi； 止む（やむ）：tạnh, ngừng； 雨（あめ）：mưa"
  },
  {
    "s": "日本 の 映画 を（　）、日本語 を 勉強 し始めました。",
    "a": "きっかけに",
    "w": ["きっかけで", "きっかけを", "きっかけは"],
    "p": "〜をきっかけに",
    "exp": "Nhân cơ hội xem phim Nhật mà bắt đầu học tiếng Nhật, dùng 〜をきっかけに（nhân cơ hội…）。きっかけで sai trợ từ；きっかけを lặp lại を nên sai；きっかけは sai trợ từ, mẫu này chỉ dùng をきっかけに。",
    "voc": "きっかけ：cơ hội, dịp； 映画（えいが）：phim； 勉強（べんきょう）：học tập； 始める（はじめる）：bắt đầu"
  },
  {
    "s": "東京 に 引っ越して（　）、一度も 故郷 に 帰って いません。",
    "a": "いらい",
    "w": ["いぜん", "いらいだ", "いらいは"],
    "p": "〜て以来",
    "exp": "Kể từ khi chuyển đến Tokyo, chưa một lần về quê, dùng 〜て以来（kể từ khi…）。いぜん là danh từ chỉ trước đây, không đi sau thể て；いらいだ và いらいは đều sai dạng, không hợp với 一度も帰っていません。",
    "voc": "引っ越す（ひっこす）：chuyển nhà； 以来（いらい）：kể từ khi； 故郷（こきょう）：quê hương； 帰る（かえる）：trở về"
  },
  {
    "s": "散歩（　）、近くの スーパー で 買い物 を して きます。",
    "a": "がてら",
    "w": ["がてらに", "がてらで", "がてらを"],
    "p": "〜がてら",
    "exp": "Nhân tiện đi dạo thì ghé siêu thị mua sắm, dùng 〜がてら（nhân tiện…）đi sau danh từ 散歩。がてらに、がてらで、がてらを đều sai trợ từ, mẫu này chỉ dùng がてら không có trợ từ đi sau。",
    "voc": "散歩（さんぽ）：đi dạo； スーパー：siêu thị； 買い物（かいもの）：mua sắm"
  }
  ],
  star: [
  {
    "pre": "この 問題は",
    "post": "。",
    "chunks": ["会議", "において", "話し合われ", "ました"],
    "p": "〜において",
    "exp": "Thứ tự đúng: この問題は（vấn đề này, đã cố định ở đầu câu）+ 会議において（trong cuộc họp）+ 話し合われました（đã được bàn bạc）。において phải đứng ngay sau danh từ 会議；話し合われ + ました là động từ bị động ở cuối câu, không thể tách ra hay đảo lên trước。",
    "voc": "問題（もんだい）：vấn đề； 会議（かいぎ）：cuộc họp； 話し合う（はなしあう）：bàn bạc"
  },
  {
    "pre": "調査の 結果に",
    "post": "。",
    "chunks": ["基づいて", "新しい 計画を", "立て", "ました"],
    "p": "〜に基づいて",
    "exp": "Thứ tự đúng: 調査の結果に（đã cố định ở đầu câu）+ 基づいて（dựa vào kết quả điều tra）+ 新しい計画を（kế hoạch mới）+ 立てました（đã lập）。基づいて phải đứng ngay sau danh từ 調査の結果に；新しい計画を là tân ngữ phải đứng trước động từ 立てました；立て + ました là động từ chính ở cuối câu。",
    "voc": "調査（ちょうさ）：điều tra； 結果（けっか）：kết quả； 計画（けいかく）：kế hoạch； 立てる（たてる）：lập ra"
  },
  {
    "pre": "この 小説は",
    "post": "。",
    "chunks": ["実話を", "もとに", "書かれ", "ました"],
    "p": "〜をもとに（して）",
    "exp": "Thứ tự đúng: この小説は（tiểu thuyết này, đã cố định ở đầu câu）+ 実話をもとに（dựa trên câu chuyện có thật）+ 書かれました（đã được viết）。もとに phải đứng ngay sau danh từ 実話を；書かれ + ました là động từ bị động ở cuối câu, không thể tách ra hay đảo lên trước。",
    "voc": "小説（しょうせつ）：tiểu thuyết； 実話（じつわ）：câu chuyện có thật； 書く（かく）：viết"
  },
  {
    "pre": "天気に",
    "post": "。",
    "chunks": ["応じて", "服を", "決め", "ます"],
    "p": "〜に応じて",
    "exp": "Thứ tự đúng: 天気に（đã cố định ở đầu câu）+ 応じて（tùy theo thời tiết）+ 服を（quần áo）+ 決めます（quyết định）。応じて phải đứng ngay sau danh từ 天気に；服を là tân ngữ phải đứng trước động từ 決めます；決め + ます là động từ chính ở cuối câu。",
    "voc": "天気（てんき）：thời tiết； 服（ふく）：quần áo； 決める（きめる）：quyết định"
  },
  {
    "pre": "年を 取るに",
    "post": "。",
    "chunks": ["したがって", "体力は", "おとろえ", "ます"],
    "p": "〜にしたがって",
    "exp": "Thứ tự đúng: 年を取るに（đã cố định ở đầu câu）+ したがって（càng lớn tuổi）+ 体力は（thể lực）+ おとろえます（suy giảm）。したがって phải đứng ngay sau 年を取るに；体力は là chủ ngữ của おとろえます nên phải đứng trước động từ；おとろえ + ます là động từ chính ở cuối câu。",
    "voc": "年を取る（としをとる）：lớn tuổi； 体力（たいりょく）：thể lực； おとろえる：suy giảm"
  }
  ],
  bunsho: [
  {
    "intro": "つぎの 文章は 健康と 運動に ついて 書かれた 文章です。",
    "p": "最近、健康 の ため に 運動 を 始めた 人 が 増えて います。（　1　）、朝 早く 起きて、公園 を 走る 人 が 多く なって います。運動 は 体 に 良い です。（　2　）、やりすぎる と、体 を こわす こと も あります。（　3　）、無理 を しない こと が 大切 です。運動 を 続ける ため に は、楽しい 方法 を 選ぶ と 良い でしょう。（　4　）、楽しい 方法 で 運動 する こと が、続ける ため の ポイント です。（　5　）、健康 な 生活 を 送る ため に は、運動 だけ でなく、食事 や 睡眠 も 大切 です。",
    "b": [
     {
      "a": "たとえば",
      "w": ["しかし", "つまり", "まず"],
      "exp": "Chỗ trống 1 đưa ra ví dụ cụ thể cho việc nhiều người bắt đầu tập thể dục, dùng たとえば（ví dụ như）。しかし（nhưng）là từ nối tương phản, không hợp；つまり（tức là）là từ nối giải thích, không hợp；まず（trước hết）là từ nối trình tự, không hợp。",
      "voc": "たとえば：ví dụ như； 健康（けんこう）：sức khỏe； 運動（うんどう）：tập thể dục； 公園（こうえん）：công viên"
     },
     {
      "a": "一方で",
      "w": ["それから", "たとえば", "つまり"],
      "exp": "Chỗ trống 2 đối chiếu mặt trái của việc tập thể dục: tốt cho cơ thể, nhưng tập quá sức thì hại cơ thể, dùng 一方で（mặt khác）。それから（sau đó）là từ nối trình tự, không hợp；たとえば（ví dụ như）không hợp；つまり（tức là）không hợp。",
      "voc": "一方で（いっぽうで）：mặt khác； やりすぎる：làm quá sức； 体（からだ）：cơ thể； こわす：làm hỏng, làm hại"
     },
     {
      "a": "それで",
      "w": ["しかし", "たとえば", "まず"],
      "exp": "Chỗ trống 3 rút ra kết luận từ câu trước: vì tập quá sức hại cơ thể, nên điều quan trọng là đừng cố quá sức, dùng それで（vì vậy）。しかし（nhưng）không hợp vì đây là kết luận, không phải tương phản；たとえば（ví dụ như）không hợp；まず（trước hết）không hợp。",
      "voc": "それで：vì vậy； 無理（むり）：cố quá sức； 大切（たいせつ）：quan trọng"
     },
     {
      "a": "だから",
      "w": ["しかし", "それから", "たとえば"],
      "exp": "Chỗ trống 4 nêu kết luận: vì nên chọn cách tập vui vẻ, nên tập bằng cách vui vẻ chính là bí quyết để duy trì, dùng だから（vì vậy）。しかし（nhưng）không hợp；それから（sau đó）không hợp；たとえば（ví dụ như）không hợp。",
      "voc": "だから：vì vậy； 楽しい（たのしい）：vui vẻ； 方法（ほうほう）：phương pháp； 続ける（つづける）：duy trì, tiếp tục； ポイント：điểm mấu chốt"
     },
     {
      "a": "要するに",
      "w": ["しかし", "それで", "まず"],
      "exp": "Chỗ trống 5 tổng kết toàn bài: để sống khỏe mạnh, không chỉ tập thể dục mà ăn uống và giấc ngủ cũng quan trọng, dùng 要するに（tóm lại）。しかし（nhưng）không hợp；それで（vì vậy）không hợp vì đây là tổng kết, không phải kết quả trực tiếp；まず（trước hết）không hợp。",
      "voc": "要するに（ようするに）：tóm lại； 健康（けんこう）：sức khỏe； 生活（せいかつ）：cuộc sống； 食事（しょくじ）：ăn uống； 睡眠（すいみん）：giấc ngủ"
     }
    ],
    "exp": "Bài văn về sức khỏe và tập thể dục: nhiều người bắt đầu tập, ví dụ dậy sớm chạy bộ ở công viên；tập tốt cho cơ thể, nhưng mặt khác tập quá sức thì hại cơ thể, vì vậy đừng cố quá sức；để duy trì thì nên chọn cách tập vui vẻ, vì vậy tập vui vẻ chính là bí quyết；tóm lại, để sống khỏe mạnh thì không chỉ tập thể dục mà ăn uống và giấc ngủ cũng quan trọng。",
    "voc": "健康（けんこう）：sức khỏe； 運動（うんどう）：tập thể dục； 公園（こうえん）：công viên； 睡眠（すいみん）：giấc ngủ"
  }
  ],
  readS: [
  {
    "p": "土曜日 に、料理教室 へ 行きました。先生 は やさしい 人 で、作り方 を ていねい に 教えて くれました。わたしたち は カレー を 作りました。野菜 を 切る の が むずかしかった です が、とても おいしく できました。家 でも 作って みたい です。来週 も また 行きたい です。",
    "q": "土曜日 に、わたし は 何 を しました か。",
    "o": ["カレー の 作り方 を 習いました。", "パン の 作り方 を 習いました。", "すし の 作り方 を 習いました。", "ケーキ の 作り方 を 習いました。"],
    "a": 0,
    "e": "Đoạn văn nói đã học làm cà-ri ở lớp nấu ăn.",
    "exp": "Thứ Bảy tác giả đến lớp nấu ăn và học làm cà-ri, nên đáp án đúng là カレーの作り方を習いました。パン、すし、ケーキ đều không xuất hiện trong bài, nên sai。",
    "voc": "料理教室（りょうりきょうしつ）：lớp nấu ăn； 作り方（つくりかた）：cách làm； カレー：cà-ri； 野菜（やさい）：rau củ"
  },
  {
    "p": "わたし の スマートフォン が 古く なった ので、新しい もの を 買いました。新しい 電話 は 画面 が 大きくて、写真 が きれい に 撮れます。店員 が 使い方 を ていねい に 教えて くれました。古い 電話 の データ も、店 で うつして もらいました。",
    "q": "新しい スマートフォン について、正しい もの は どれ です か。",
    "o": ["画面 が 大きくて、写真 が きれい に 撮れます。", "画面 が 小さくて、写真 が 暗い です。", "電池 が すぐ に なく なります。", "使い方 が とても むずかしい です。"],
    "a": 0,
    "e": "Điện thoại mới màn hình lớn, chụp ảnh đẹp.",
    "exp": "Điện thoại mới có màn hình lớn và chụp ảnh đẹp, nên đáp án 1 đúng。Màn hình nhỏ và ảnh tối thì ngược với bài；pin hết nhanh không có trong bài；cách dùng khó cũng ngược với bài vì nhân viên đã hướng dẫn tận tình。",
    "voc": "スマートフォン：điện thoại thông minh； 画面（がめん）：màn hình； 写真（しゃしん）：ảnh； 店員（てんいん）：nhân viên bán hàng"
  },
  {
    "p": "来月、家族で 温泉へ 行きます。電車は 大人 1500円、子ども 800円です。わたしたちは 大人 2人と 子ども 1人です。温泉は 10時に 開きます。温泉の 近くに おいしい レストランが あります。わたしは 温泉に 入るのが たのしみです。",
    "q": "ぜんぶで いくら ですか。",
    "o": ["3800円です。", "2300円です。", "4600円です。", "3000円です。"],
    "a": 0,
    "calc": 1,
    "e": "文に「電車は 大人 1500円、子ども 800円です。わたしたちは 大人 2人と 子ども 1人です」とあります。",
    "exp": "Tiền vé tàu: người lớn 1500 yên × 2 người + trẻ em 800 yên × 1 người = 3000 + 800 = 3800 yên, nên đáp án 1 đúng。2300 yên là 1500 + 800 (chỉ 1 người lớn + 1 trẻ em)；4600 yên là 1500 × 2 + 800 × 2 (tính nhầm 2 trẻ em)；3000 yên chỉ là tiền 2 người lớn, thiếu tiền trẻ em。",
    "voc": "温泉（おんせん）：suối nước nóng； 電車（でんしゃ）：tàu điện； 大人（おとな）：người lớn； 子ども：trẻ em； 全部（ぜんぶ）：tất cả"
  },
  {
    "p": "来週の 土曜日、市の 図書館で 子ども の ための お話会が あります。午前 10時から 11時まで です。お話会では、絵本の 読み聞かせと 工作を します。参加する ためには、前の 日までに 図書館に 電話で 申し込んで ください。参加費は 無料です。お話会の 日は、図書館は 9時に 開きます。",
    "q": "お話会に 参加する ためには、どう しますか。",
    "o": ["前の 日までに 図書館に 電話で 申し込みます。", "当日の 朝に 図書館へ 行きます。", "参加費を 払います。", "絵本を 持って 行きます。"],
    "a": 0,
    "e": "文に「参加する ためには、前の 日までに 図書館に 電話で 申し込んで ください」とあります。",
    "exp": "Muốn tham gia buổi kể chuyện thì phải đăng ký qua điện thoại với thư viện trước ngày hôm trước, nên đáp án 1 đúng。Đến thư viện vào sáng hôm diễn ra thì đã muộn vì phải đăng ký trước；tham gia miễn phí nên không phải trả phí；mang sách tranh đi không có trong bài。",
    "voc": "図書館（としょかん）：thư viện； お話会（おはなしかい）：buổi kể chuyện； 絵本（えほん）：sách tranh； 読み聞かせ（よみきかせ）：đọc truyện cho nghe； 工作（こうさく）：làm đồ thủ công； 申し込む（もうしこむ）：đăng ký； 無料（むりょう）：miễn phí"
  },
  {
    "p": "わたしは 毎日 電車で 会社へ 行きます。家の 近くの 駅から 電車に 乗ります。朝 7時 30分に 家を 出て、7時 45分の 電車に 乗ります。会社に 着くのは 8時 20分です。電車が 遅れると、会社に 遅れて しまいます。だから、いつも 早めに 家を 出る ように して います。",
    "q": "わたしは 何時の 電車に 乗りますか。",
    "o": ["7時 30分の 電車", "7時 45分の 電車", "8時 20分の 電車", "7時 20分の 電車"],
    "a": 1,
    "e": "文に「7時 45分の 電車に 乗ります」とあります。",
    "exp": "Tác giả đi chuyến tàu 7 giờ 45, nên đáp án 2 đúng。7 giờ 30 là giờ ra khỏi nhà, không phải giờ tàu；8 giờ 20 là giờ đến công ty；7 giờ 20 không có trong bài。",
    "voc": "電車（でんしゃ）：tàu điện； 駅（えき）：nhà ga； 会社（かいしゃ）：công ty； 遅れる（おくれる）：muộn, trễ； 早め（はやめ）：sớm hơn"
  }
  ],
  readM: [
  {
    "p": "去年 から、わたし は 週 に 二日 在宅勤務 を して います。家 で 仕事 を する と、通勤 の 時間 が なくなる ので、朝 ゆっくり できます。その 時間 を 勉強 や 運動 に 使う こと が できます。一方 で、家 で は 集中 する の が むずかしい とき も あります。家族 の 声 が 聞こえたり、つい テレビ を 見たり して しまいます。その ため、仕事 を する とき は 部屋 の ドア を 閉めて、時間 を 決めて 働く よう に して います。昼休み に は 散歩 を します。在宅勤務 の 日 は、昼ごはん を 自分 で 作ります。会社 の 人 と は、ビデオ通話 で 話します。顔 は 見えます が、ふんいき は わかりにくい です。これ から は、在宅勤務 と 会社 で の 仕事 を うまく 組み合わせたい と 思います。自分 の 時間 を 使える こと が、在宅勤務 の 楽しみ の 一つ です。会社 に 行く 日 は、同僚 と 直接 話す こと が できます。直接 話す と、仕事 が 速く 進みます。在宅勤務 の 日 と 会社 に 行く 日 を、うまく 分ける こと が 大切 です。",
    "qs": [
     {
      "q": "在宅勤務 の よい 点 は 何 です か。",
      "o": ["給料 が 上がる こと です。", "仕事 が 減る こと です。", "通勤 の 時間 が なくなる こと です。", "休み が 増える こと です。"],
      "a": 2,
      "e": "Làm việc ở nhà giúp tiết kiệm thời gian đi lại."
     },
     {
      "q": "家 で 仕事 を する とき の 問題 は 何 です か。",
      "o": ["集中 する の が むずかしい とき が ある こと です。", "パソコン が ない こと です。", "電気 が 使えない こと です。", "家 に 机 が ない こと です。"],
      "a": 0,
      "e": "Ở nhà đôi khi khó tập trung."
     },
     {
      "q": "筆者 は これ から どう したい です か。",
      "o": ["ずっと 家 で 働きたい です。", "会社 を やめたい です。", "毎日 会社 に 行きたい です。", "在宅勤務 と 会社 で の 仕事 を うまく 組み合わせたい です。"],
      "a": 3,
      "e": "Tác giả muốn kết hợp làm việc ở nhà và ở công ty."
     }
    ],
    "exp": "Bài văn về làm việc tại nhà: điểm tốt là không mất thời gian đi lại, buổi sáng thong thả, dùng thời gian đó để học và tập thể dục；vấn đề là ở nhà đôi khi khó tập trung vì nghe tiếng gia đình hay xem tivi, nên tác giả đóng cửa phòng và làm việc theo giờ giấc；từ nay tác giả muốn kết hợp khéo léo giữa làm việc ở nhà và làm việc ở công ty。Câu 1: đáp án đúng là không mất thời gian đi lại, lương tăng, việc giảm hay ngày nghỉ tăng đều không có trong bài。Câu 2: đáp án đúng là đôi khi khó tập trung, không có máy tính, không dùng được điện hay không có bàn đều không có trong bài。Câu 3: đáp án đúng là muốn kết hợp làm việc ở nhà và ở công ty, muốn làm ở nhà mãi, nghỉ việc hay đến công ty mỗi ngày đều ngược với bài。",
    "voc": "在宅勤務（ざいたくきんむ）：làm việc tại nhà； 通勤（つうきん）：đi làm； 集中（しゅうちゅう）：tập trung； 昼休み（ひるやすみ）：giờ nghỉ trưa； 散歩（さんぽ）：đi dạo； ビデオ通話（ビデオつうわ）：gọi video； 同僚（どうりょう）：đồng nghiệp； 直接（ちょくせつ）：trực tiếp"
  },
  {
    "p": "先月、わたしの 町で 夏祭りが ありました。わたしは ボランティアとして 参加しました。午前中は 会場の 準備を しました。テントを 立てたり、机を 運んだり しました。午後からは、屋台で かき氷を 売りました。屋台の かき氷は 100円で、子どもたちに 大人気でした。わたしも 仕事の 合間に 一つ 食べました。暑い 日でしたが、たくさんの 人が 来て、とても にぎやかでした。子どもたちが 楽しそうに 遊んで いるのを 見て、わたしも うれしく なりました。祭りの 最後には、花火が 上がりました。来年も また 参加したいと 思います。ボランティアは 大変ですが、町の 人と 知り合う ことが できて、とても よい 経験に なりました。",
    "qs": [
     {
      "q": "わたしは 祭りで 何を しましたか。",
      "o": ["ボランティアとして 参加しました。", "花火を 上げました。", "テントを 買いました。", "祭りを 見に 行きました。"],
      "a": 0,
      "e": "文に「わたしは ボランティアとして 参加しました」とあります。"
     },
     {
      "q": "午後から、わたしは 何を しましたか。",
      "o": ["テントを 立てました。", "屋台で かき氷を 売りました。", "机を 運びました。", "花火を 見ました。"],
      "a": 1,
      "e": "文に「午後からは、屋台で かき氷を 売りました」とあります。"
     },
     {
      "q": "わたしは ボランティアについて、どう 思いましたか。",
      "o": ["つまらなかったです。", "大変ですが、よい 経験に なりました。", "もう 二度と したくないです。", "町の 人と 話したくないです。"],
      "a": 1,
      "e": "文に「ボランティアは 大変ですが、町の 人と 知り合う ことが できて、とても よい 経験に なりました」とあります。"
     }
    ],
    "exp": "Bài văn về lễ hội mùa hè ở khu phố: tác giả tham gia với tư cách tình nguyện viên, buổi sáng chuẩn bị hội trường, dựng lều và chuyển bàn, buổi chiều bán đá bào ở quầy hàng；buổi tối có pháo hoa, tác giả muốn tham gia lại năm sau。Câu 1: đáp án đúng là tham gia với tư cách tình nguyện viên, bắn pháo hoa, mua lều hay chỉ đi xem lễ hội đều sai với bài。Câu 2: đáp án đúng là buổi chiều bán đá bào ở quầy hàng, dựng lều và chuyển bàn là việc buổi sáng, xem pháo hoa là việc cuối lễ hội。Câu 3: đáp án đúng là vất vả nhưng là kinh nghiệm tốt, chán, không muốn làm nữa hay không muốn nói chuyện với người trong khu phố đều ngược với bài。",
    "voc": "夏祭り（なつまつり）：lễ hội mùa hè； ボランティア：tình nguyện viên； 会場（かいじょう）：hội trường； テント：lều； 運ぶ（はこぶ）：chuyển, mang； 屋台（やたい）：quầy hàng； かき氷（かきごおり）：đá bào； にぎやか：náo nhiệt； 花火（はなび）：pháo hoa； 経験（けいけん）：kinh nghiệm"
  },
  {
    "p": "わたしは 大学の そばの コンビニで アルバイトを して います。週に 3日、夕方から 夜まで 働きます。仕事は レジや お客さんの 案内です。夜は お客さんが 多くて、忙しい 時間も あります。でも、店の 人たちは みんな 親切です。最初は レジの 使い方が わからなくて、よく 間違えました。でも、店の 人が やさしく 教えて くれたので、今は 一人で できる ように なりました。お客さんに 「ありがとう」と 言われると、とても うれしいです。アルバイトの おかげで、時間の 使い方が 上手に なりました。学校と アルバイトの 両方を 続けるのは 大変ですが、がんばりたいと 思います。将来は 自分の 店を 持ちたいです。",
    "qs": [
     {
      "q": "わたしは どこで アルバイトを して いますか。",
      "o": ["大学の そばの コンビニ", "大学の 図書館", "駅の 近くの レストラン", "学校の 売店"],
      "a": 0,
      "e": "文に「わたしは 大学の そばの コンビニで アルバイトを して います」とあります。"
     },
     {
      "q": "最初、わたしは どうでしたか。",
      "o": ["レジの 使い方が わからなくて、よく 間違えました。", "一人で 全部 できました。", "お客さんと よく 話しました。", "仕事が とても 楽でした。"],
      "a": 0,
      "e": "文に「最初は レジの 使い方が わからなくて、よく 間違えました」とあります。"
     },
     {
      "q": "わたしは 将来 どう したいですか。",
      "o": ["コンビニを やめたいです。", "自分の 店を 持ちたいです。", "大学を やめたいです。", "レジの 仕事を 続けたいです。"],
      "a": 1,
      "e": "文に「将来は 自分の 店を 持ちたいです」とあります。"
     }
    ],
    "exp": "Bài văn về việc làm thêm ở cửa hàng tiện lợi gần trường đại học: làm 3 ngày một tuần từ chiều đến tối, công việc là thu ngân và hướng dẫn khách；lúc đầu không biết dùng máy thu ngân nên hay nhầm, nhưng nhờ người trong cửa hàng dạy tận tình nên giờ làm được một mình；nhờ làm thêm mà biết dùng thời gian khéo hơn, tương lai muốn có cửa hàng của riêng mình。Câu 1: đáp án đúng là cửa hàng tiện lợi gần trường đại học, thư viện, nhà hàng gần ga hay cửa hàng trong trường đều không có trong bài。Câu 2: đáp án đúng là lúc đầu không biết dùng máy thu ngân nên hay nhầm, làm được hết một mình, hay nói chuyện với khách hay công việc rất nhàn/dễ（仕事がとても楽でした）đều ngược với bài。Câu 3: đáp án đúng là tương lai muốn có cửa hàng của riêng mình, nghỉ làm ở cửa hàng tiện lợi, nghỉ đại học hay tiếp tục làm thu ngân đều ngược với bài。",
    "voc": "コンビニ：cửa hàng tiện lợi； アルバイト：việc làm thêm； 夕方（ゆうがた）：buổi chiều tối； レジ：máy thu ngân； 案内（あんない）：hướng dẫn； 間違える（まちがえる）：nhầm lẫn； 一人で（ひとりで）：một mình； 将来（しょうらい）：tương lai"
  }
  ],
  tougou: [
  {
    "p1": "スマートフォン は、子ども にとっても 便利 な 道具 です。わからない こと を すぐ に 調べる こと が できて、勉強 に 役立ちます。動画 を 見る こと で、世界 の こと を 知る こと も できます。外国 の 友だち と 話す こと も できます。使い方 の ルール を 決めれば、問題 は 少ない と 思います。時間 を 決めて、家族 で 話し合う こと が 大切 です。子ども は、スマートフォン で 外国語 を 学ぶ こと も できます。",
    "p2": "スマートフォン は、子ども に 悪い 影響 を 与える と 思います。長い 時間 画面 を 見る と、目 が 悪く なります。夜 遅く まで 使う と、睡眠 も 悪く なります。家族 と 話す 時間 も 減って しまいます。勉強 に 使う と 言って も、つい ゲーム を して しまいます。子ども に は、できるだけ 使わせない ほうが いい です。目 が 悪く なる と、勉強 に も 影響 が 出ます。",
    "qs": [
     {
      "q": "二人 の 共通点 は 何 です か。",
      "o": ["スマートフォン が 子ども に 影響 を 与える と 思って います。", "子ども は スマートフォン を 使う べき では ない と 思って います。", "スマートフォン は 勉強 に 役立つ と 思って います。", "スマートフォン は 目 に 悪く ない と 思って います。"],
      "a": 0,
      "e": "Cả hai đều cho rằng điện thoại ảnh hưởng đến trẻ em, dù đánh giá khác nhau."
     },
     {
      "q": "二人 の 意見 の ちがい は 何 です か。",
      "o": ["一つ目 の 文章 の 筆者 は ルール を 決めれば 使って も よい と 思います が、二つ目 の 文章 の 筆者 は できるだけ 使わせない ほうが よい と 思います。", "一つ目 の 文章 の 筆者 は 使わせない ほうが よい と 思います が、二つ目 の 文章 の 筆者 は 使って も よい と 思います。", "二人 とも 使わせない ほうが よい と 思います。", "二人 とも 自由 に 使わせる べき だ と 思います。"],
      "a": 0,
      "e": "Bài 1 cho dùng nếu có quy tắc, bài 2 cho rằng tốt nhất không cho dùng."
     }
    ],
    "exp": "Bài 1 cho rằng điện thoại thông minh tiện lợi cho trẻ em: tra cứu nhanh, học tập, xem video biết về thế giới, nói chuyện với bạn nước ngoài, học ngoại ngữ；nếu đặt ra quy tắc sử dụng thì vấn đề sẽ ít。Bài 2 cho rằng điện thoại gây ảnh hưởng xấu cho trẻ em: nhìn màn hình lâu thì mắt kém, dùng khuya thì ngủ kém, ít nói chuyện với gia đình, nói là dùng để học nhưng lại chơi game, nên tốt nhất là không cho dùng。Câu 1: điểm chung là cả hai đều cho rằng điện thoại ảnh hưởng đến trẻ em, còn cho rằng không nên dùng, cho rằng có ích cho học tập hay cho rằng không hại mắt đều chỉ đúng với một bài。Câu 2: điểm khác là bài 1 cho dùng nếu có quy tắc, bài 2 cho rằng tốt nhất không cho dùng；các đáp án còn lại đảo ngược hoặc gộp chung ý kiến của cả hai nên sai。",
    "voc": "スマートフォン：điện thoại thông minh； 便利（べんり）：tiện lợi； 道具（どうぐ）：công cụ； 役立つ（やくだつ）：có ích； 影響（えいきょう）：ảnh hưởng； 睡眠（すいみん）：giấc ngủ； 減る（へる）：giảm đi"
  }
  ],
  shuchou: [
  {
    "p": "失敗 は、誰 にとっても つらい 経験 です。試験 に 落ちたり、仕事 で 間違えたり する と、自信 を なくして しまいます。しかし、わたし は 失敗 を 恐れて、何 も しない こと の ほうが、もっと 問題 だ と 思います。失敗 を しない 人 は、新しい こと に 挑戦 して いない 人 です。挑戦 すれば、失敗 する こと も あります。でも、その 失敗 から、何 が 悪かった の か を 考える こと が できます。次 は どう すれば よい か を 考える こと で、人 は 成長 します。わたし も 若い とき、仕事 で 大きな 失敗 を しました。その とき は、とても 落ち込みました。しかし、上司 は わたし を しかる だけ で はなく、失敗 の 原因 を いっしょ に 考えて くれました。その おかげ で、同じ 失敗 を くり返さない よう に なりました。学校 や 会社 で は、失敗 を 許す こと が 大切 です。失敗 を した 人 を 責める だけ で は、誰 も 新しい こと に 挑戦 しなく なります。反対 に、失敗 から 学ぶ こと が できれば、失敗 は 大切 な 経験 に なります。失敗 を した 経験 は、他の人 を 助ける こと に も つながります。失敗 の つらさ を 知って いる 人 は、困って いる 人 の 気持ち が わかります。だ から、失敗 は 無駄 では ありません。わたし の 会社 で は、新しい 企画 を 出す とき、失敗 して も いい と 言われます。その おかげ で、社員 は 自由 に 意見 を 出す こと が できます。失敗 を 恐れる 会社 で は、新しい もの は 生まれません。学校 で も 同じ です。テスト で 間違える こと を 恐れる 子ども は、質問 を しなく なります。先生 は、間違えた 子ども を ほめる べき です。間違える こと は、わかって いない こと が わかった と いう こと です。その こと が わかれば、次 は 正しく できます。失敗 は、学ぶ ため の 第一歩 です。失敗 から 逃げない で、向き合う こと が 大切 です。わたしたち は、失敗 を 恥ずかしい こと だ と 思わず、成長 の チャンス だ と 考える べき です。",
    "qs": [
     {
      "q": "筆者 は 何 を 言いたい です か。",
      "o": ["失敗 を 恐れず、失敗 から 学ぶ こと が 大切 です。", "失敗 を しない よう に、何 も しない ほうが よい です。", "失敗 は 恥ずかしい こと だ から、隠す べき です。", "失敗 した 人 は、責められる べき です。"],
      "a": 0,
      "e": "Tác giả cho rằng đừng sợ thất bại, hãy học từ thất bại."
     },
     {
      "q": "筆者 の 経験 について、正しい もの は どれ です か。",
      "o": ["仕事 で 失敗 した とき、上司 に しかれた だけ でした。", "若い とき、失敗 を した こと が ありません。", "仕事 で 失敗 した とき、上司 が 原因 を いっしょ に 考えて くれました。", "失敗 を して、仕事 を やめました。"],
      "a": 2,
      "e": "Khi thất bại, cấp trên đã cùng tác giả tìm nguyên nhân."
     },
     {
      "q": "筆者 の 考え に 合う もの は どれ です か。",
      "o": ["失敗 を しない 人 が いちばん すばらしい です。", "失敗 を した 人 は、新しい こと に 挑戦 すべき では ありません。", "学校 や 会社 で は、失敗 を 許す べき では ありません。", "失敗 から 学ぶ こと が できれば、失敗 は 大切 な 経験 に なります。"],
      "a": 3,
      "e": "Học được từ thất bại thì thất bại trở thành kinh nghiệm quý."
     }
    ],
    "exp": "Chủ trương của bài: thất bại là kinh nghiệm đau đớn, nhưng sợ thất bại mà không làm gì mới là vấn đề lớn hơn；người không thất bại là người không thử thách điều mới；từ thất bại có thể suy nghĩ xem điều gì đã sai và lần sau nên làm thế nào, nhờ đó con người trưởng thành；tác giả hồi trẻ từng thất bại lớn trong công việc, cấp trên không chỉ mắng mà cùng tìm nguyên nhân, nhờ đó không lặp lại thất bại đó；ở trường và công ty cần tha thứ cho thất bại, nếu chỉ trách móc thì không ai dám thử thách；nếu học được từ thất bại thì thất bại trở thành kinh nghiệm quý giá, người biết nỗi đau của thất bại sẽ hiểu cảm xúc của người đang khó khăn；thất bại không phải là điều xấu hổ mà là cơ hội trưởng thành。Câu 1: đáp án đúng là đừng sợ thất bại, hãy học từ thất bại, còn không làm gì để tránh thất bại, giấu thất bại vì xấu hổ hay trách móc người thất bại đều ngược với bài。Câu 2: đáp án đúng là khi thất bại, cấp trên đã cùng tìm nguyên nhân, còn chỉ bị mắng, chưa từng thất bại hay nghỉ việc sau khi thất bại đều sai với bài。Câu 3: đáp án đúng là học được từ thất bại thì thất bại trở thành kinh nghiệm quý, còn người không thất bại là tuyệt vời nhất, người thất bại không nên thử thách hay không nên tha thứ cho thất bại đều ngược với bài。",
    "voc": "失敗（しっぱい）：thất bại； つらい：đau đớn, khổ sở； 自信（じしん）：tự tin； 恐れる（おそれる）：sợ hãi； 挑戦（ちょうせん）：thử thách； 成長（せいちょう）：trưởng thành； 落ち込む（おちこむ）：suy sụp； 上司（じょうし）：cấp trên； 原因（げんいん）：nguyên nhân； 許す（ゆるす）：tha thứ； 責める（せめる）：trách móc； 無駄（むだ）：vô ích； 企画（きかく）：kế hoạch, dự án； 恥ずかしい（はずかしい）：xấu hổ"
  }
  ],
  info: [
  {
    "tpl": "<b>A アパートのみなさんへ</b><br>さくら市では、ごみを 下の ように 分けます。<br><table class=\"jl-tbl\"><tr><th>ごみの 種類</th><th>ごみ箱</th><th>出す 日</th></tr><tr><td>燃えるごみ（紙、台所の ごみ、古い 服）</td><td>ごみ箱A</td><td>月曜日と木曜日</td></tr><tr><td>プラスチックごみ（ペットボトル、食品の トレー）</td><td>ごみ箱B</td><td>火曜日</td></tr><tr><td>びん・缶（ビールの びん、ジュースの 缶）</td><td>ごみ箱C</td><td>金曜日</td></tr><tr><td>大きいごみ（机、いす、本だな）</td><td>ごみ箱D</td><td>第2土曜日</td></tr></table>ごみ箱Aは 1階の 入口の 横に、ごみ箱Bは 建物の 南側に、ごみ箱Cは 建物の 北側に、ごみ箱Dは 駐車場の 横に あります。<br><b>B カレンダー（今月）</b><br><table class=\"jl-cal\"><tr><th>月</th><th>火</th><th>水</th><th>木</th><th>金</th><th>土</th><th>日</th></tr><tr><td></td><td></td><td></td><td>1</td><td>2</td><td>3</td><td>4</td></tr><tr><td>5</td><td>6</td><td>7</td><td>8</td><td>9</td><td>10</td><td>11</td></tr></table>",
    "inst": "つぎのA「アパートのみなさんへ」とBのカレンダーを見て、質問に答えてください。答えは1・2・3・4から、いちばんいいものを一つえらんでください。",
    "q": "今日は 5日 (月曜日) です。古い 服が たくさん あります。早く すてたいです。何日に どこに すてますか。",
    "opts": ["6日にごみ箱A", "5日にごみ箱B", "5日にごみ箱A", "8日にごみ箱A"],
    "ans": 2,
    "exp": "Quần áo cũ là rác cháy được, bỏ vào thùng rác A vào thứ Hai và thứ Năm. Hôm nay là thứ Hai (ngày 5) nên bỏ ngay hôm nay ngày 5 vào thùng rác A. Ngày 6 là thứ Ba, không phải ngày bỏ rác cháy được；thùng rác B là thùng rác nhựa nên sai；ngày 8 cũng là thứ Năm và cũng đúng về ngày, nhưng câu hỏi muốn bỏ sớm nhất nên ngày 5 mới đúng。",
    "voc": "燃えるごみ（もえるごみ）：rác cháy được； ごみ箱（ごみばこ）：thùng rác； すてる：vứt bỏ； 古い（ふるい）：cũ"
  },
  {
    "tpl": "<b>A スポーツジムの お知らせ</b><br>さくらスポーツジムでは、レッスンを 下の ように 行います。<br><table class=\"jl-tbl\"><tr><th>レッスン</th><th>曜日</th><th>時間</th></tr><tr><td>ヨガ</td><td>月曜日と水曜日</td><td>10時〜11時</td></tr><tr><td>水泳</td><td>火曜日と木曜日</td><td>14時〜15時</td></tr><tr><td>ダンス</td><td>金曜日</td><td>18時〜19時</td></tr><tr><td>テニス</td><td>土曜日</td><td>9時〜10時</td></tr></table>レッスンを 受ける ときは、前の 日までに 受付で 申し込んで ください。ジムは 日曜日は 休みです。<br><b>B カレンダー（今月）</b><br><table class=\"jl-cal\"><tr><th>月</th><th>火</th><th>水</th><th>木</th><th>金</th><th>土</th><th>日</th></tr><tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td></tr><tr><td>8</td><td>9</td><td>10</td><td>11</td><td>12</td><td>13</td><td>14</td></tr></table>",
    "inst": "つぎのA「スポーツジムの お知らせ」とBのカレンダーを見て、質問に答えてください。答えは1・2・3・4から、いちばんいいものを一つえらんでください。",
    "q": "今日は 9日 (火曜日) です。水泳の レッスンを 早く 受けたいです。何日に 申し込みますか。",
    "opts": ["9日に", "10日に", "11日に", "12日に"],
    "ans": 1,
    "exp": "Lớp bơi vào thứ Ba và thứ Năm. Hôm nay là thứ Ba (ngày 9) nhưng phải đăng ký trước ngày hôm trước nên buổi học hôm nay đã không đăng ký được nữa. Buổi học bơi tiếp theo là thứ Năm (ngày 11), phải đăng ký trước ngày hôm trước là ngày 10, nên đáp án đúng là 10日. Ngày 9 đã muộn；ngày 11 là ngày học, không phải ngày đăng ký；ngày 12 là thứ Sáu, không phải ngày đăng ký cho buổi học thứ Năm。",
    "voc": "スポーツジム：phòng tập thể thao； レッスン：buổi học； 水泳（すいえい）：bơi lội； 受付（うけつけ）：quầy tiếp nhận； 申し込む（もうしこむ）：đăng ký； 休み（やすみ）：ngày nghỉ"
  }
  ]
};

/* ----- Test 2 ----- */
window.WRITTEN_N2_SET2 = {
  yomi: [
  {
    "s": "この 映画 は 多く の 人 に 影響 を 与えました。",
    "t": "影響",
    "r": "えいきょう",
    "w": [
     "えいよう",
     "ようきょう",
     "えいきょ"
    ],
    "exp": "影響 đọc là えいきょう（影 えい、響 きょう）。えいよう đọc 響 thành よう là sai、ようきょう đọc 影 thành よう là sai、えいきょ thiếu âm う nên sai。",
    "voc": "影響（えいきょう）：ảnh hưởng； 映画（えいが）：phim； 多く（おおく）：nhiều； 与える（あたえる）：gây ra, mang lại"
  },
  {
    "s": "山田さんは 仕事の 経験が 少ないです。",
    "t": "経験",
    "r": "けいけん",
    "w": [
     "けいげん",
     "けんけい",
     "けいけんん"
    ],
    "exp": "経験 đọc là けいけん（経 けい、験 けん）。けいげん đọc 験 thành げん là sai、けんけい đảo thứ tự hai chữ là sai、けいけんん thêm ん thừa nên sai。",
    "voc": "経験（けいけん）：kinh nghiệm； 仕事（しごと）：công việc； 少ない（すくない）：ít"
  },
  {
    "s": "先生は この 問題の 説明を しました。",
    "t": "説明",
    "r": "せつめい",
    "w": [
     "せつめ",
     "せちめい",
     "せつめいん"
    ],
    "exp": "説明 đọc là せつめい（説 せつ、明 めい）。せつめ thiếu âm い là sai、せちめい đọc 説 thành せち là sai、せつめいん thêm ん thừa nên sai。",
    "voc": "説明（せつめい）：giải thích； 先生（せんせい）：thầy cô； 問題（もんだい）：vấn đề"
  },
  {
    "s": "来週の 会議で 新しい 計画を 発表します。",
    "t": "発表",
    "r": "はっぴょう",
    "w": [
     "はつぴょう",
     "はっぴょ",
     "はっぴょうう"
    ],
    "exp": "発表 đọc là はっぴょう（発 はっ、表 ぴょう）。はつぴょう đọc 発 thành はつ là sai、はっぴょ thiếu âm う là sai、はっぴょうう thêm う thừa nên sai。",
    "voc": "発表（はっぴょう）：phát biểu, trình bày； 会議（かいぎ）：cuộc họp； 計画（けいかく）：kế hoạch； 新しい（あたらしい）：mới"
  },
  {
    "s": "彼は 医者に なることを 決心しました。",
    "t": "決心",
    "r": "けっしん",
    "w": [
     "けつしん",
     "けっし",
     "けっしんん"
    ],
    "exp": "決心 đọc là けっしん（決 けつ→けっ、心 しん）。けつしん không có âm っ là sai、けっし thiếu âm ん là sai、けっしんん thêm ん thừa nên sai。",
    "voc": "決心（けっしん）：quyết tâm； 医者（いしゃ）：bác sĩ； なる：trở thành"
  }
  ],
  hyoki: [
  {
    "s": "試験 の 前 は 誰 でも きんちょう します。",
    "h": "きんちょう",
    "k": "緊張",
    "w": [
     "緊長",
     "近張",
     "緊帳"
    ],
    "exp": "きんちょう viết là 緊張（緊 きん、張 ちょう）。緊長 dùng 長 sai chữ、近張 dùng 近 sai chữ、緊帳 dùng 帳 sai chữ。",
    "voc": "緊張（きんちょう）：căng thẳng, hồi hộp； 試験（しけん）：kì thi； 誰（だれ）：ai"
  },
  {
    "s": "毎日 運動する しゅうかんが 大切です。",
    "h": "しゅうかん",
    "k": "習慣",
    "w": [
     "習官",
     "習間",
     "習見"
    ],
    "exp": "しゅうかん viết là 習慣（習 しゅう、慣 かん）。習官 dùng 官 sai chữ、習間 dùng 間 sai chữ、習見 dùng 見 sai chữ。",
    "voc": "習慣（しゅうかん）：thói quen； 運動（うんどう）：vận động, tập thể dục； 大切（たいせつ）：quan trọng； 毎日（まいにち）：mỗi ngày"
  },
  {
    "s": "けんこうの ために、よく 歩きます。",
    "h": "けんこう",
    "k": "健康",
    "w": [
     "健広",
     "健幸",
     "健安"
    ],
    "exp": "けんこう viết là 健康（健 けん、康 こう）。健広 dùng 広 sai chữ、健幸 dùng 幸 sai chữ、健安 dùng 安 sai chữ。",
    "voc": "健康（けんこう）：sức khỏe； 歩く（あるく）：đi bộ； ために：để, vì"
  },
  {
    "s": "電気を せつやくする ために、昼は 電気を 消します。",
    "h": "せつやく",
    "k": "節約",
    "w": [
     "節細",
     "節組",
     "節絵"
    ],
    "exp": "せつやく viết là 節約（節 せつ、約 やく）。節細 dùng 細 sai chữ、節組 dùng 組 sai chữ、節絵 dùng 絵 sai chữ。",
    "voc": "節約（せつやく）：tiết kiệm； 電気（でんき）：điện； 消す（けす）：tắt； 昼（ひる）：ban ngày"
  },
  {
    "s": "彼は 音楽に きょうみが あります。",
    "h": "きょうみ",
    "k": "興味",
    "w": [
     "興未",
     "興妹",
     "興美"
    ],
    "exp": "きょうみ viết là 興味（興 きょう、味 み）。興未 dùng 未 sai chữ、興妹 dùng 妹 sai chữ、興美 dùng 美 sai chữ。",
    "voc": "興味（きょうみ）：hứng thú, quan tâm； 音楽（おんがく）：âm nhạc； ある：có"
  }
  ],
  ctx: [
  {
    "s": "私 は 彼 の 意見 に とても （　）で、ぜひ 進めたい と 思います。",
    "a": "さんせい",
    "w": [
     "はんたい",
     "しんぱい",
     "ふあん"
    ],
    "exp": "意見に賛成で、ぜひ進めたい：đồng ý với ý kiến nên muốn tiến hành. はんたい（phản đối）làm nghĩa ngược lại；しんぱい（lo lắng）không hợp với ぜひ進めたい；ふあん（bất an）cũng không hợp。",
    "voc": "意見（いけん）：ý kiến； 賛成（さんせい）：tán thành, đồng ý； 進める（すすめる）：tiến hành, thúc đẩy"
  },
  {
    "s": "この おもちゃ は 子ども でも （　）に 遊べます。",
    "a": "あんぜん",
    "w": [
     "たいせつ",
     "じゅうよう",
     "きけん"
    ],
    "exp": "子どもでも安全に遊べます：đồ chơi an toàn nên trẻ em cũng chơi được. たいせつ（quan trọng）không hợp；じゅうよう（quan trọng）không hợp；きけん（nguy hiểm）làm nghĩa ngược lại。",
    "voc": "おもちゃ：đồ chơi； 子ども（こども）：trẻ em； 安全（あんぜん）：an toàn； 遊ぶ（あそぶ）：chơi"
  },
  {
    "s": "この 料理 は 作り方 が （　）な ので、初心者 でも 大丈夫 です。",
    "a": "かんたん",
    "w": [
     "ふくざつ",
     "むずかしい",
     "たいへん"
    ],
    "exp": "作り方が簡単なので、初心者でも大丈夫です：cách làm đơn giản nên người mới cũng làm được. ふくざつ（phức tạp）làm nghĩa ngược lại；むずかしい（khó）làm nghĩa ngược lại；たいへん（vất vả）không hợp với 初心者でも大丈夫です。",
    "voc": "料理（りょうり）：món ăn, nấu ăn； 作り方（つくりかた）：cách làm； 簡単（かんたん）：đơn giản； 初心者（しょしんしゃ）：người mới bắt đầu"
  },
  {
    "s": "新しい アパートは 駅から 遠くて、買い物も （　）です。",
    "a": "ふべん",
    "w": [
     "べんり",
     "おいしい",
     "しずか"
    ],
    "exp": "駅から遠くて、買い物も不便です：căn hộ mới xa ga nên mua sắm cũng bất tiện. べんり（tiện lợi）làm nghĩa ngược lại；おいしい（ngon）không dùng để miêu tả việc mua sắm nên sai；しずか（yên tĩnh）không liên quan đến việc mua sắm。",
    "voc": "アパート：căn hộ； 駅（えき）：nhà ga； 買い物（かいもの）：mua sắm； 不便（ふべん）：bất tiện； おいしい：ngon"
  },
  {
    "s": "一人で 海外へ 行く 息子を、母は とても （　）しています。",
    "a": "しんぱい",
    "w": [
     "あんしん",
     "まんぞく",
     "かんしゃ"
    ],
    "exp": "一人で海外へ行く息子を、母はとても心配しています：mẹ rất lo lắng cho con trai đi nước ngoài một mình. あんしん（yên tâm）làm nghĩa ngược lại；まんぞく（hài lòng）không hợp；かんしゃ（biết ơn）không hợp。",
    "voc": "海外（かいがい）：nước ngoài； 息子（むすこ）：con trai； 母（はは）：mẹ； 心配（しんぱい）：lo lắng"
  },
  {
    "s": "説明を 聞いて、やっと （　）に 分かりました。",
    "a": "じゅうぶん",
    "w": [
     "すこし",
     "ちょっと",
     "すくない"
    ],
    "exp": "説明を聞いて、やっと十分に分かりました：nghe giải thích xong cuối cùng đã hiểu đầy đủ. すこしに分かりました、ちょっとに分かりました、すくないに分かりました đều sai ngữ pháp và sai nghĩa。",
    "voc": "説明（せつめい）：giải thích； 聞く（きく）：nghe； やっと：cuối cùng； 十分（じゅうぶん）：đầy đủ； 分かる（わかる）：hiểu"
  },
  {
    "s": "この 公園は 花が 多くて、とても （　）です。",
    "a": "きれい",
    "w": [
     "きたない",
     "くらい",
     "つめたい"
    ],
    "exp": "花が多くて、とてもきれいです：công viên có nhiều hoa nên rất đẹp. きたない（bẩn）làm nghĩa ngược lại；くらい（tối）không hợp với 花が多くて；つめたい（lạnh）không dùng để miêu tả công viên。",
    "voc": "公園（こうえん）：công viên； 花（はな）：hoa； 多い（おおい）：nhiều； きれい：đẹp, sạch"
  }
  ],
  syn: [
  {
    "s": "彼 は あたらしい 仕事 を 始めて、毎日 がんばって います。",
    "t": "あたらしい",
    "a": "あらたな",
    "w": [
     "ふるい",
     "なつかしい",
     "おそい"
    ],
    "exp": "あたらしい（mới）の từ đồng nghĩa là あらたな（mới, hoàn toàn mới). Lưu ý: đáp án gốc trong ngân hàng đề là まあたらしい — đây không phải là một từ, đã được coordinator sửa thành あらたな (xem seedCorrections trong n2-set2-seed.json). Các lựa chọn gây nhiễu ふるい（cũ）、なつかしい（nhớ nhung, hoài niệm）、おそい（chậm, muộn）đều không gần nghĩa với あたらしい。",
    "voc": "新しい（あたらしい）：mới； 新たな（あらたな）：mới, hoàn toàn mới； 仕事（しごと）：công việc； 始める（はじめる）：bắt đầu； 毎日（まいにち）：mỗi ngày"
  },
  {
    "s": "この 部屋は ひろい です。",
    "t": "ひろい",
    "a": "おおきい",
    "w": [
     "せまい",
     "ちいさい",
     "くらい"
    ],
    "exp": "ひろい（rộng）gần nghĩa nhất với おおきい（to, lớn）khi nói về phòng. せまい（hẹp）、ちいさい（nhỏ）đều ngược nghĩa；くらい（tối）không liên quan đến độ rộng。",
    "voc": "広い（ひろい）：rộng； 大きい（おおきい）：to, lớn； 部屋（へや）：phòng"
  },
  {
    "s": "彼は 走る のが はやい です。",
    "t": "はやい",
    "a": "すばやい",
    "w": [
     "おそい",
     "ゆっくり",
     "のろい"
    ],
    "exp": "はやい（nhanh）gần nghĩa nhất với すばやい（nhanh nhẹn）khi nói về chạy. おそい（chậm）、ゆっくり（chậm rãi）、のろい（chậm chạp）đều ngược nghĩa。",
    "voc": "速い（はやい）：nhanh； 素早い（すばやい）：nhanh nhẹn； 走る（はしる）：chạy"
  },
  {
    "s": "冬の 朝は さむい です。",
    "t": "さむい",
    "a": "つめたい",
    "w": [
     "あつい",
     "あたたかい",
     "すずしい"
    ],
    "exp": "さむい（lạnh）gần nghĩa nhất với つめたい（lạnh）khi nói về buổi sáng mùa đông. あつい（nóng）、あたたかい（ấm áp）、すずしい（mát mẻ）đều ngược hoặc không gần nghĩa。",
    "voc": "寒い（さむい）：lạnh (thời tiết)； 冷たい（つめたい）：lạnh； 冬（ふゆ）：mùa đông； 朝（あさ）：buổi sáng"
  },
  {
    "s": "健康は たいせつ です。",
    "t": "たいせつ",
    "a": "じゅうよう",
    "w": [
     "ふよう",
     "むだ",
     "くだらない"
    ],
    "exp": "たいせつ（quan trọng）gần nghĩa nhất với じゅうよう（quan trọng）khi nói về sức khỏe. ふよう（không cần thiết）làm nghĩa ngược lại；むだ（lãng phí）、くだらない（tầm thường）không liên quan。",
    "voc": "大切（たいせつ）：quan trọng； 重要（じゅうよう）：quan trọng； 健康（けんこう）：sức khỏe"
  }
  ],
  yoho: [
  {
    "t": "くらい",
    "s": [
     "部屋 が くらい です。",
     "くらい 太陽 が のぼりました。",
     "くらい 風 が 吹きました。",
     "くらい ランプ を つけました。"
    ],
    "a": 0,
    "exp": "くらい（tối）dùng đúng với 部屋：部屋がくらいです（phòng tối). くらい太陽（mặt trời tối）、くらい風（gió tối）、くらいランプ（đèn tối）đều sai kết hợp vì mặt trời, gió và đèn không thể 'tối'. Lưu ý: câu gốc trong ngân hàng đề là くらい光が見えました — ánh sáng mờ (くらい光) là cách dùng có thật nên câu đó cũng đúng, đã được coordinator sửa thành くらい風が吹きました (xem seedCorrections trong n2-set2-seed.json).",
    "voc": "暗い（くらい）：tối； 部屋（へや）：phòng； 太陽（たいよう）：mặt trời； 風（かぜ）：gió； ランプ：đèn"
  },
  {
    "t": "あまい",
    "s": [
     "あまい 本を 読みました。",
     "この ケーキは あまい です。",
     "あまい 時間が かかりました。",
     "あまい 机を 買いました。"
    ],
    "a": 1,
    "exp": "あまい（ngọt）dùng đúng với ケーキ：このケーキはあまいです（bánh này ngọt). あまい本、あまい時間、あまい机 đều sai kết hợp: sách, thời gian, cái bàn không dùng 甘い để miêu tả。",
    "voc": "甘い（あまい）：ngọt； ケーキ：bánh ngọt； 本（ほん）：sách； 時間（じかん）：thời gian； 机（つくえ）：cái bàn"
  },
  {
    "t": "つめたい",
    "s": [
     "つめたい 本を 読みました。",
     "つめたい 時間が かかりました。",
     "つめたい 水を 飲みました。",
     "つめたい 写真を 見ました。"
    ],
    "a": 2,
    "exp": "つめたい（lạnh）dùng đúng với 水：つめたい水を飲みました（uống nước lạnh). つめたい本、つめたい時間、つめたい写真 đều sai kết hợp: sách, thời gian, ảnh không dùng 冷たい để miêu tả。",
    "voc": "冷たい（つめたい）：lạnh； 水（みず）：nước； 飲む（のむ）：uống； 本（ほん）：sách； 写真（しゃしん）：ảnh"
  },
  {
    "t": "かるい",
    "s": [
     "かるい 空を 見ました。",
     "かるい 時間が かかりました。",
     "かるい 花を 見ました。",
     "この かばんは かるい です。"
    ],
    "a": 3,
    "exp": "かるい（nhẹ）dùng đúng với かばん：このかばんはかるいです（cái cặp này nhẹ). かるい空、かるい時間、かるい花 đều sai kết hợp: bầu trời, thời gian, hoa không dùng 軽い để miêu tả。",
    "voc": "軽い（かるい）：nhẹ； かばん：cặp, túi xách； 空（そら）：bầu trời； 花（はな）：hoa"
  },
  {
    "t": "おもい",
    "s": [
     "この 荷物は おもい です。",
     "おもい 空を 見ました。",
     "おもい 時間が かかりました。",
     "おもい 写真を 見ました。"
    ],
    "a": 0,
    "exp": "おもい（nặng）dùng đúng với 荷物：この荷物はおもいです（hành lí này nặng). おもい空、おもい時間、おもい写真 đều sai kết hợp: bầu trời, thời gian, ảnh không dùng 重い để miêu tả。",
    "voc": "重い（おもい）：nặng； 荷物（にもつ）：hành lí； 空（そら）：bầu trời； 写真（しゃしん）：ảnh"
  }
  ],
  kotoba: [
  {
    "s": "いらっしゃいませ。（　）客様、こちらの 席へ どうぞ。",
    "a": "お",
    "w": [
     "ご",
     "おん",
     "おお"
    ],
    "exp": "お客様：khách hàng dùng tiếp đầu ngữ kính trọng お. 客様 là từ thuần Nhật nên dùng お；ご客様 sai；おん客様、おお客様 đều không phải là tiếp đầu ngữ đúng.",
    "voc": "お客様（おきゃくさま）：quý khách； 席（せき）：chỗ ngồi； どうぞ：mời, xin mời"
  },
  {
    "s": "この 計画は （　）な 方法で 進められました。",
    "a": "積極的",
    "w": [
     "積極性",
     "積極化",
     "積極点"
    ],
    "exp": "積極的な方法：phương pháp tích cực — hậu tố 的 kết hợp với な để bổ nghĩa cho danh từ 方法. 積極性な方法 sai vì 性 không đi với な；積極化な方法 sai vì 化 không đi với な；積極点な方法 sai vì 点 không đi với な。",
    "voc": "計画（けいかく）：kế hoạch； 積極的（せっきょくてき）：tích cực； 方法（ほうほう）：phương pháp； 進める（すすめる）：tiến hành"
  },
  {
    "s": "最近、この 会社では 仕事の （　）が 進んでいます。",
    "a": "情報化",
    "w": [
     "情報的",
     "情報性",
     "情報点"
    ],
    "exp": "仕事の情報化が進んでいます：tin học hóa / số hóa công việc đang tiến triển — hậu tố 化 tạo danh từ chỉ sự biến đổi. 情報的が進んでいます sai vì 的 tạo tính từ な, không làm chủ ngữ với が；情報性、情報点 cũng không hợp với が進んでいます。",
    "voc": "情報化（じょうほうか）：tin học hóa, số hóa； 仕事（しごと）：công việc； 会社（かいしゃ）：công ty； 最近（さいきん）：gần đây； 進む（すすむ）：tiến triển"
  },
  {
    "s": "電車の （　）が 遅れて、会社に 遅れました。",
    "a": "運行",
    "w": [
     "運営",
     "運転",
     "運用"
    ],
    "exp": "電車の運行が遅れて：tàu điện chạy chậm/trễ — 運行 là từ chuyên dùng cho việc vận hành tàu xe theo lịch trình. 運営 là quản lí, điều hành tổ chức；運転 là lái xe；運用 là vận dụng, sử dụng — cả ba đều không dùng cho 'tàu bị trễ'。",
    "voc": "電車（でんしゃ）：tàu điện； 運行（うんこう）：vận hành (tàu xe)； 遅れる（おくれる）：trễ, muộn； 会社（かいしゃ）：công ty"
  },
  {
    "s": "この 薬は、健康（　）問題は ありません。",
    "a": "上",
    "w": [
     "的",
     "性",
     "化"
    ],
    "exp": "健康上問題はありません：về mặt sức khỏe thì không có vấn đề gì — 上 tạo thành cụm 健康上 (về mặt sức khỏe). 健康的問題 sai；健康性問題 sai；健康化問題 sai — các hậu tố 的・性・化 đều không tạo được cụm này。",
    "voc": "薬（くすり）：thuốc； 健康（けんこう）：sức khỏe； 問題（もんだい）：vấn đề"
  }
  ],
  g1dlg: [
  {
    "d": [
     "この イベントは、だれでも さんかできますか。",
     "はい、ねんれいや せいべつを（　）、だれでも さんかできますよ。"
    ],
    "a": "問わず",
    "w": [
     "問うと",
     "問えば",
     "問う ばかりで"
    ],
    "p": "〜を問わず",
    "exp": "年齢や性別を問わず、だれでも参加できます：bất kể tuổi tác hay giới tính, ai cũng tham gia được. 問うと（nếu hỏi）、問えば（nếu hỏi）、問うばかりで（chỉ vì hỏi）đều không tạo thành mẫu 'bất kể' nên sai. Lưu ý: mẫu thật của câu này là 〜を問わず, mẫu N3 trong GRAMMAR_DATA (ôn tập dưới cấp) — ngoại lệ legacy do coordinator chấp nhận, câu/đáp án/phương án giữ nguyên bản seed.",
    "voc": "イベント：sự kiện； 参加（さんか）：tham gia； 年齢（ねんれい）：tuổi tác； 性別（せいべつ）：giới tính"
  },
  {
    "d": [
     "日本語の 勉強を 始めて、どのぐらい ですか。",
     "大学に 入って（　）、毎日 勉強して います。"
    ],
    "a": "以来",
    "w": [
     "からでないと",
     "かと思ったら",
     "がてら"
    ],
    "p": "〜て以来",
    "exp": "大学に入って以来、毎日勉強しています：kể từ khi vào đại học, ngày nào cũng học. 入ってからでないと sai vì からでないと cần dạng phủ định và nghĩa 'nếu không... thì không'；入ってかと思ったら sai vì かと思ったら diễn tả sự bất ngờ ngay sau đó；入ってがてら sai vì がてら phải đi sau dạng ます (入りがてら)。",
    "voc": "大学（だいがく）：đại học； 入る（はいる）：vào； 勉強（べんきょう）：học tập； 毎日（まいにち）：mỗi ngày"
  },
  {
    "d": [
     "どうして 会議に 遅れたのですか。",
     "電車が 遅れた（　）、会議に 間に合いませんでした。"
    ],
    "a": "ばかりに",
    "w": [
     "だけあって",
     "ものの",
     "とはいえ"
    ],
    "p": "〜ばかりに",
    "exp": "電車が遅れたばかりに、会議に間に合いませんでした：chỉ vì tàu trễ mà lỡ họp. 遅れただけあって sai vì だけあって diễn tả 'xứng đáng với...'；遅れたものの sai vì ものの diễn tả nhượng bộ 'dù... nhưng...', cần hai vế đối lập, trong khi tàu trễ chính là nguyên nhân khiến lỡ họp chứ không đối lập với việc lỡ họp；遅れたとはいえ sai vì とはいえ diễn tả nhượng bộ 'dù...'。",
    "voc": "電車（でんしゃ）：tàu điện； 遅れる（おくれる）：trễ, muộn； 会議（かいぎ）：cuộc họp； 間に合う（まにあう）：kịp"
  }
  ],
  g1: [
  {
    "s": "この 映画は 3時間に（　）、長い 物語を 語って います。",
    "a": "わたって",
    "w": [
     "先立って",
     "際して",
     "あたって"
    ],
    "p": "〜にわたって",
    "exp": "3時間にわたって：kéo dài suốt 3 tiếng. 先立って（trước khi）cần sự kiện xảy ra sau đó nên sai；際して（nhân dịp）không hợp với khoảng thời gian 3時間；あたって（nhân dịp）cũng không hợp với khoảng thời gian。",
    "voc": "映画（えいが）：phim； 物語（ものがたり）：câu chuyện； 語る（かたる）：kể, thuật lại； 長い（ながい）：dài"
  },
  {
    "s": "日本語の 歌を 聞いた（　）、日本に 興味を 持つ ように なりました。",
    "a": "きっかけに",
    "w": [
     "以来",
     "がてら",
     "かたわら"
    ],
    "p": "〜をきっかけに",
    "exp": "日本語の歌を聞いたきっかけに：nhân cơ hội nghe bài hát tiếng Nhật mà bắt đầu quan tâm đến Nhật Bản. 聞いた以来 sai vì 以来 phải đi sau dạng て (聞いて以来)；聞いたがてら sai vì がてら phải đi sau dạng ます；聞いたかたわら sai vì かたわら phải đi sau dạng る của động từ chỉ hành động song song, không phải 'nghe xong rồi mới quan tâm'。",
    "voc": "歌（うた）：bài hát； 聞く（きく）：nghe； 興味（きょうみ）：hứng thú； 持つ（もつ）：có, mang"
  },
  {
    "s": "散歩に 行き（　）、近くの 本屋に 寄りました。",
    "a": "がてら",
    "w": [
     "かたわら",
     "きっかけに",
     "以来"
    ],
    "p": "〜がてら",
    "exp": "散歩に行きがてら：nhân tiện đi dạo thì ghé hiệu sách — がてら đi sau dạng ます (行き) diễn tả 'nhân tiện làm việc chính thì làm thêm việc khác'. 行きかたわら sai vì かたわら phải đi sau dạng る (行くかたわら)；行ききっかけに、行き以来 đều sai dạng và sai nghĩa。",
    "voc": "散歩（さんぽ）：đi dạo； 本屋（ほんや）：hiệu sách； 寄る（よる）：ghé qua； 近く（ちかく）：gần"
  },
  {
    "s": "田中さんは 子育てを する（　）、週末は 日本語学校で 教えて います。",
    "a": "かたわら",
    "w": [
     "がてら",
     "きっかけに",
     "以来"
    ],
    "p": "〜かたわら",
    "exp": "子育てをするかたわら：vừa nuôi con, đồng thời cuối tuần dạy ở trường tiếng Nhật — かたわら đi sau dạng る diễn tả hai việc song song. 子育てをするがてら sai vì がてら phải đi sau dạng ます (子育てをしがてら)；子育てをするきっかけに、子育てをする以来 đều sai nghĩa。",
    "voc": "子育て（こそだて）：nuôi con； 週末（しゅうまつ）：cuối tuần； 日本語学校（にほんごがっこう）：trường tiếng Nhật； 教える（おしえる）：dạy"
  },
  {
    "s": "彼は 日本語が 話せる（　）、英語も ペラペラです。",
    "a": "どころか",
    "w": [
     "ものの",
     "ながらも",
     "とはいえ"
    ],
    "p": "〜どころか",
    "exp": "日本語が話せるどころか、英語もペラペラです：không những nói được tiếng Nhật mà tiếng Anh cũng trôi chảy — どころか diễn tả 'không chỉ... mà còn...'. ものの、ながらも、とはいえ đều là mẫu nhượng bộ 'dù...', cần mâu thuẫn giữa hai vế, nhưng ở đây hai vế cùng hướng tích cực nên đều sai。",
    "voc": "話せる（はなせる）：có thể nói； 英語（えいご）：tiếng Anh； ペラペラ：trôi chảy"
  },
  {
    "s": "雨が 降って いる（　）、多くの 人が 公園に 集まりました。",
    "a": "にもかかわらず",
    "w": [
     "だけに",
     "だけあって",
     "ばかりに"
    ],
    "p": "〜にもかかわらず",
    "exp": "雨が降っているにもかかわらず、多くの人が公園に集まりました：dù trời đang mưa mà nhiều người vẫn tập trung ở công viên. 降っているだけに、降っているだけあって đều diễn tả 'xứng đáng với...' nên sai；降っているばかりに diễn tả nguyên nhân gây kết quả xấu ('chỉ vì mưa mà...') nên sai hướng nghĩa。",
    "voc": "雨（あめ）：mưa； 降る（ふる）：rơi (mưa)； 集まる（あつまる）：tập trung； 公園（こうえん）：công viên； 多く（おおく）：nhiều"
  },
  {
    "s": "この 講座は 一人（　）、500円が かかります。",
    "a": "につき",
    "w": [
     "をもって",
     "にかかわる",
     "のもとで"
    ],
    "p": "N + につき",
    "exp": "一人につき500円がかかります：mỗi người 500 yên — につき diễn tả 'mỗi...'. 一人をもって sai；一人にかかわる sai；一人のもとで sai — cả ba đều không tạo thành cụm 'mỗi người'。",
    "voc": "講座（こうざ）：khóa học； 一人（ひとり）：một người； かかる：tốn (tiền)； 円（えん）：yên"
  },
  {
    "s": "今日の 会議は これを（　）、終わります。",
    "a": "もって",
    "w": [
     "につき",
     "にかかわる",
     "のもとで"
    ],
    "p": "〜をもって",
    "exp": "これをもって終わります：xin kết thúc cuộc họp hôm nay tại đây — をもって diễn tả 'bằng, với cái này'. これにつき sai；これにかかわる sai；これのもとで sai — cả ba đều không hợp với 終わります。",
    "voc": "今日（きょう）：hôm nay； 会議（かいぎ）：cuộc họp； 終わる（おわる）：kết thúc"
  },
  {
    "s": "実際に 使って みない（　）、この 道具の よさは 分かりません。",
    "a": "ことには",
    "w": [
     "ほかない",
     "ことは〜が",
     "こそあれ"
    ],
    "p": "〜ないことには",
    "exp": "実際に使ってみないことには、よさは分かりません：nếu không thử dùng thực tế thì không biết được cái hay của dụng cụ này — ないことには diễn tả 'nếu không... thì không...'. 使ってみないほかない sai vì ほかない phải đi sau dạng る khẳng định (使ってみるほかない)；使ってみないことは〜が sai dạng và sai nghĩa；使ってみないこそあれ sai vì こそあれ không đi với ない。",
    "voc": "実際（じっさい）：thực tế； 使う（つかう）：dùng； 道具（どうぐ）：dụng cụ； よさ：cái hay, điểm tốt； 分かる（わかる）：hiểu, biết"
  }
  ],
  star: [
  {
    "pre": "この映画を皮切りに",
    "post": "。",
    "chunks": [
     "来月",
     "から全国で上映が",
     "始まり",
     "ます"
    ],
    "p": "〜を皮切りに",
    "exp": "Thứ tự đúng duy nhất: 「この映画を皮切りに来月から全国で上映が始まります。」— 「この映画を皮切りに」(lấy bộ phim này làm khởi đầu) khóa ở đầu câu trong pre；「来月」phải đứng ngay trước 「から全国で上映が」(から gắn với 来月, 全国で gắn với 上映が nên hai cụm này không tách ra được)；「始まり」+「ます」khép câu (ます chỉ đứng sau 始まり). Mọi cách xếp khác đều sai ngữ pháp: から không thể đứng đầu câu, ます không thể đứng trước 始まり。",
    "voc": "映画（えいが）：phim； 皮切りに（かわきりに）：lấy làm khởi đầu； 全国（ぜんこく）：toàn quốc； 上映（じょうえい）：chiếu phim； 始まる（はじまる）：bắt đầu"
  },
  {
    "pre": "この会議において",
    "post": "。",
    "chunks": [
     "来年の",
     "大切なことが",
     "決まり",
     "ました"
    ],
    "p": "〜において",
    "exp": "Thứ tự đúng duy nhất: 「この会議において来年の大切なことが決まりました。」— 「この会議において」(tại cuộc họp này) khóa ở đầu câu trong pre；「来年の」phải đứng ngay trước 「大切なことが」(来年の bổ nghĩa cho 大切なこと nên không thể tách ra)；「決まり」+「ました」khép câu (ました chỉ đứng sau 決まり). Mọi cách xếp khác đều sai ngữ pháp: 「大切なことが来年の決まりました」đặt 来年の sau danh từ nó bổ nghĩa nên sai, 「ました決まり」đảo động từ nên sai。",
    "voc": "会議（かいぎ）：cuộc họp； 来年（らいねん）：năm sau； 大切（たいせつ）：quan trọng； 決まる（きまる）：được quyết định"
  },
  {
    "pre": "この本は",
    "post": "。",
    "chunks": [
     "あの本",
     "に比べて",
     "分かり",
     "やすいです"
    ],
    "p": "〜に比べて",
    "exp": "Thứ tự đúng duy nhất: 「この本はあの本に比べて分かりやすいです。」— chủ đề 「この本は」khóa ở đầu câu trong pre；「あの本に比べて」(so với cuốn sách kia) phải đứng liền nhau (に比べて gắn với あの本)；「分かり」+「やすいです」là một từ 分かりやすいです nên không tách ra được và phải khép câu. Mọi cách xếp khác đều sai ngữ pháp: 「に比べてあの本…」đặt に比べて trước danh từ nó gắn với, 「分かりあの本に比べてやすいです」tách 分かりやすい ra làm đôi, 「分かりやすいですあの本に比べて」đặt です ở giữa câu。",
    "voc": "本（ほん）：sách, cuốn sách； 分かりやすい（わかりやすい）：dễ hiểu； 比べる（くらべる）：so sánh"
  },
  {
    "pre": "書きかけの手紙を",
    "post": "。",
    "chunks": [
     "机の",
     "上に",
     "置き",
     "ました"
    ],
    "p": "V-ます + かけ",
    "exp": "Thứ tự đúng duy nhất: 「書きかけの手紙を机の上に置きました。」— 「書きかけの手紙を」(bức thư đang viết dở) khóa ở đầu câu trong pre；「机の」phải đứng ngay trước 「上に」(机の上に là một cụm nơi chốn, không tách ra được)；「置き」+「ました」khép câu (ました chỉ đứng sau 置き). Mọi cách xếp khác đều sai ngữ pháp: 「上に机の置きました」đảo cụm 机の上に, 「置きました机の上に」đặt động từ đã chia xong trước cụm nơi chốn。",
    "voc": "書きかけ：đang viết dở； 手紙（てがみ）：bức thư； 机（つくえ）：cái bàn； 置く（おく）：đặt, để"
  },
  {
    "pre": "留学を通じて外国で",
    "post": "。",
    "chunks": [
     "多くの",
     "友だちが",
     "でき",
     "ました"
    ],
    "p": "〜を通じて",
    "exp": "Thứ tự đúng duy nhất: 「留学を通じて外国で多くの友だちができました。」— 「留学を通じて外国で」(thông qua việc du học, ở nước ngoài) khóa ở đầu câu trong pre；「多くの」phải đứng ngay trước 「友だちが」(多くの bổ nghĩa cho 友だち nên không thể tách ra)；「でき」+「ました」khép câu (ました chỉ đứng sau でき). Mọi cách xếp khác đều sai ngữ pháp: 「友だちが多くのできました」đặt 多くの sau danh từ nó bổ nghĩa nên sai, 「できました多くの友だちが」đặt động từ đã chia xong trước chủ ngữ。",
    "voc": "留学（りゅうがく）：du học； 外国（がいこく）：nước ngoài； 友だち（ともだち）：bạn bè； 多く（おおく）：nhiều"
  }
  ],
  bunsho: [
  {
    "intro": "つぎの 文章は 日本語の 勉強の しかたに ついて 書かれた 文章です。",
    "p": "わたし は 毎日 日本語 を 勉強 して います。（　1　）、朝 は 新しい 言葉 を 覚えます。（　2　）、夜 は 復習 を します。覚えた 言葉 を 使わなければ、すぐ 忘れて しまいます。（　3　）、日記 を 日本語 で 書く よう に して います。日記 を 書く の は 大変 です。（　4　）、書く こと で 言葉 が 身 に つきます。（　5　）、毎日 続ける こと が いちばん 大切 だ と 思います。",
    "b": [
     {
      "a": "まず",
      "w": [
       "それから",
       "しかし",
       "つまり"
      ]
     },
     {
      "a": "それから",
      "w": [
       "まず",
       "しかし",
       "たとえば"
      ]
     },
     {
      "a": "そのため",
      "w": [
       "しかし",
       "たとえば",
       "一方で"
      ]
     },
     {
      "a": "しかし",
      "w": [
       "そのため",
       "たとえば",
       "それから"
      ]
     },
     {
      "a": "つまり",
      "w": [
       "しかし",
       "そのため",
       "まず"
      ]
     }
    ],
    "exp": "(1) まず：trước hết, buổi sáng học từ mới — それから ở vị trí (1) không hợp vì chưa có việc nào trước đó để nói 'sau đó'；しかし (nhưng) và つまり (nói cách khác) không hợp. (2) それから：sau đó, buổi tối ôn tập — まず đã dùng ở (1)；しかし và たとえば không hợp. (3) そのため：vì không dùng từ đã học sẽ quên ngay nên viết nhật kí bằng tiếng Nhật — しかし、たとえば、一方で không diễn tả nguyên nhân. (4) しかし：viết nhật kí vất vả, nhưng nhờ viết mà từ vựng thấm vào — そのため、たとえば、それから không diễn tả sự đối lập. (5) つまり：tóm lại, tiếp tục mỗi ngày là quan trọng nhất — しかし、そのため、まず không hợp với câu tổng kết。",
    "voc": "日本語（にほんご）：tiếng Nhật； 勉強（べんきょう）：học tập； 覚える（おぼえる）：nhớ, học thuộc； 復習（ふくしゅう）：ôn tập； 日記（にっき）：nhật kí； 大切（たいせつ）：quan trọng"
  }
  ],
  readS: [
  {
    "p": "来月、新しい 家 に 引っ越し します。新しい 家 は 会社 の 近く に あって、電車 で 十分 です。今 の 家 より 少し せまい です が、家賃 が 安い です。荷物 を まとめる の が 大変 です が、楽しみ です。引っ越し の 後、友だち を よびたい と 思います。新しい 生活 が 楽しみ です。",
    "q": "新しい 家 について、正しい もの は どれ です か。",
    "o": [
     "会社 から 電車 で 十分 の 所 に あります。",
     "今 の 家 より 広い です。",
     "家賃 が 高い です。",
     "駅 から とても 遠い です。"
    ],
    "a": 0,
    "e": "Nhà mới gần công ty, đi tàu 10 phút; hẹp hơn và rẻ hơn.",
    "exp": "Nhà mới gần công ty, đi tàu 10 phút；hẹp hơn nhà cũ và rẻ hơn. Lựa chọn 2 sai vì nhà mới hẹp hơn chứ không rộng hơn；lựa chọn 3 sai vì tiền thuê rẻ hơn chứ không đắt hơn；lựa chọn 4 sai vì bài không nói nhà mới xa ga。",
    "voc": "引っ越し（ひっこし）：chuyển nhà； 会社（かいしゃ）：công ty； 電車（でんしゃ）：tàu điện； 家賃（やちん）：tiền thuê nhà； せまい：hẹp； 安い（やすい）：rẻ"
  },
  {
    "calc": 1,
    "p": "スポーツクラブ では、 にゅうかいきん 10,000円 と、 つき 7,500円 の かいひ が ひつよう です。 今月 は、 キャンペーン で、 にゅうかいきん が はんがく に なります。 また、 はじめ の 1か月 は、 かいひ が 1,000円 やすく なります。 佐藤 さん は、 今月 から 3か月、 この クラブ に かよう つもり です。 クラブ に は、 プール と ジム が あります。",
    "q": "佐藤 さん は、 3か月 で ぜんぶで いくら はらいますか。",
    "o": [
     "32,500円です。",
     "27,500円です。",
     "26,500円です。",
     "31,500円です。"
    ],
    "a": 2,
    "e": "Phí nhập hội được giảm một nửa: 10,000 ÷ 2 = 5,000円. Tháng đầu hội phí giảm 1,000円 nên còn 7,500 − 1,000 = 6,500円, hai tháng sau mỗi tháng 7,500円. Tổng cộng: 5,000 + 6,500 + 7,500 + 7,500 = 26,500円.",
    "exp": "Phí nhập hội được giảm một nửa: 10,000 ÷ 2 = 5,000円. Tháng đầu hội phí giảm 1,000円 nên còn 7,500 − 1,000 = 6,500円, hai tháng sau mỗi tháng 7,500円. Tổng cộng: 5,000 + 6,500 + 7,500 + 7,500 = 26,500円. Các lựa chọn khác sai ở phép tính: 32,500円 là tổng khi không giảm giá gì；27,500円 và 31,500円 đều không khớp với phép tính trên。",
    "voc": "スポーツクラブ：câu lạc bộ thể thao； 入会金（にゅうかいきん）：phí nhập hội； 会費（かいひ）：hội phí； 半額（はんがく）：một nửa giá； キャンペーン：chiến dịch khuyến mãi"
  },
  {
    "p": "わたしの 町の 図書館は、駅の 近くに あります。月曜日から 土曜日まで、朝 9時から 夜 8時まで 開いて います。日曜日は 休みです。本は 一人 5さつまで、2週間 借りる こと が できます。本を 返すのが おくれると、次の 本を 借りる こと が できません。わたしは 毎週 土曜日に 図書館へ 行って、本を 借ります。",
    "q": "図書館に ついて、正しい ものは どれですか。",
    "o": [
     "日曜日も 開いて います。",
     "本は 5さつまで 借りる こと が できます。",
     "本は 1週間 借りる こと が できます。",
     "夜 9時まで 開いて います。"
    ],
    "a": 1,
    "e": "文に「本は一人5さつまで、2週間借りることができます」とあります。",
    "exp": "Bằng chứng 「本は一人5さつまで、2週間借りることができます」nên mượn tối đa 5 cuốn là đúng. Thư viện nghỉ Chủ nhật nên lựa chọn 1 sai；thời hạn mượn là 2 tuần chứ không phải 1 tuần nên lựa chọn 3 sai；thư viện mở đến 8 giờ tối chứ không phải 9 giờ nên lựa chọn 4 sai。",
    "voc": "図書館（としょかん）：thư viện； 駅（えき）：nhà ga； 借りる（かりる）：mượn； 返す（かえす）：trả lại； 休み（やすみ）：ngày nghỉ"
  },
  {
    "p": "来月から、わたしの 町の バスが 便利に なります。今までは、駅から 会社まで バスで 30分 かかりました。新しい 道が できたので、来月からは 20分で 行ける ように なります。バスの 本数も 増えます。朝は 15分に 1本、昼は 30分に 1本に なります。わたしは 毎朝 7時に 家を 出て、バスで 会社へ 行きます。来月からは、10分 遅く 家を 出る こと が できます。",
    "q": "来月から、バスで 会社まで 何分で 行けますか。",
    "o": [
     "30分で 行けます。",
     "20分で 行けます。",
     "15分で 行けます。",
     "10分で 行けます。"
    ],
    "a": 1,
    "e": "文に「来月からは20分で行けるようになります」とあります。",
    "exp": "Bằng chứng 「来月からは20分で行けるようになります」nên 20 phút là đúng. 30 phút là thời gian hiện tại nên sai；15 phút là tần suất xe buýt buổi sáng nên sai；10 phút là thời gian tác giả có thể ra khỏi nhà muộn hơn nên sai。",
    "voc": "バス：xe buýt； 会社（かいしゃ）：công ty； 道（みち）：đường； 増える（ふえる）：tăng lên； 本数（ほんすう）：số chuyến"
  },
  {
    "p": "佐藤さんは、健康の ために、毎朝 30分 歩いて います。歩く 前に、水を 1杯 飲みます。朝ごはんは、ごはんと みそしると 魚を 食べます。昼ごはんは、会社で おべんとうを 食べます。夜は、野菜を 多く 食べる ように して います。甘い ものを 食べるのは、週に 1回だけです。3か月 続けて、体重が 2キロ 減りました。佐藤さんは、これからも 続けたいと 思って います。",
    "q": "佐藤さんに ついて、正しい ものは どれですか。",
    "o": [
     "毎朝 1時間 歩いて います。",
     "甘い ものを 毎日 食べて います。",
     "3か月で 体重が 2キロ 減りました。",
     "朝ごはんを 食べません。"
    ],
    "a": 2,
    "e": "文に「3か月続けて、体重が2キロ減りました」とあります。",
    "exp": "Bằng chứng 「3か月続けて、体重が2キロ減りました」nên giảm 2kg sau 3 tháng là đúng. Anh ấy đi bộ 30 phút mỗi sáng chứ không phải 1 tiếng nên lựa chọn 1 sai；đồ ngọt chỉ ăn 1 lần/tuần chứ không phải mỗi ngày nên lựa chọn 2 sai；anh ấy ăn sáng (cơm, súp miso và cá) nên lựa chọn 4 sai。",
    "voc": "健康（けんこう）：sức khỏe； 歩く（あるく）：đi bộ； 体重（たいじゅう）：cân nặng； 減る（へる）：giảm； 野菜（やさい）：rau củ； 続ける（つづける）：tiếp tục"
  }
  ],
  readM: [
  {
    "p": "わたし は 日本語 を 勉強 して 三年 に なります。はじめ は ひらがな と カタカナ を 覚える の が 大変 でした。毎日 ノート に 書いて、やっと 覚える こと が できました。今 は 漢字 を 勉強 して います。漢字 は 数 が 多くて、読み方 も いくつか あります。新しい 漢字 を 覚える とき は、意味 と 読み方 を いっしょ に 覚えます。わからない 言葉 は、辞書 で 調べます。日本語 の ドラマ を 見る こと も、勉強 に なります。はじめ は 日本語 が 速くて わかりませんでした が、今 は 少し わかる よう に なりました。漢字 の 勉強 は 大変 です が、新しい 言葉 が わかる よう に なる と、とても うれしい です。日本人 の 友だち と 話す とき は、間違えて も いい から 話す よう に して います。話す こと で、自信 が つきました。いつか 日本語 の 本 を 読める よう に なりたい です。これ から も 毎日 少しずつ 続けたい です。日本語 の 勉強 は、毎日 続ける こと が いちばん 大切 だ と 思います。",
    "qs": [
     {
      "q": "はじめ に 何 が 大変 でした か。",
      "o": [
       "漢字 を 書く こと です。",
       "ひらがな と カタカナ を 覚える こと です。",
       "日本語 の 文法 です。",
       "日本語 の 発音 です。"
      ],
      "a": 1,
      "e": "Lúc đầu khó nhất là nhớ hiragana và katakana."
     },
     {
      "q": "新しい 漢字 を 覚える とき、どう して います か。",
      "o": [
       "読み方 だけ 覚えます。",
       "意味 だけ 覚えます。",
       "書かない で 覚えます。",
       "意味 と 読み方 を いっしょ に 覚えます。"
      ],
      "a": 3,
      "e": "Khi học chữ Hán mới, tác giả nhớ cả nghĩa và cách đọc."
     },
     {
      "q": "日本人 の 友だち と 話す とき、筆者 は どう して います か。",
      "o": [
       "間違えない よう に 話しません。",
       "日本語 で 話しません。",
       "間違えて も いい から 話す よう に して います。",
       "英語 で 話します。"
      ],
      "a": 2,
      "e": "Tác giả cứ nói dù có sai, nhờ đó tự tin hơn."
     }
    ],
    "exp": "Q1: bằng chứng 「はじめはひらがなとカタカナを覚えるのが大変でした」nên nhớ hiragana và katakana là việc khó lúc đầu；viết kanji, ngữ pháp, phát âm đều sai. Q2: bằng chứng 「意味と読み方をいっしょに覚えます」nên nhớ cả nghĩa và cách đọc；chỉ nhớ cách đọc, chỉ nhớ nghĩa, không viết đều sai. Q3: bằng chứng 「間違えてもいいから話すようにしています」nên cứ nói dù có sai；không nói, nói tiếng Anh, sợ sai nên không nói đều sai。",
    "voc": "日本語（にほんご）：tiếng Nhật； 漢字（かんじ）：chữ Hán； 意味（いみ）：ý nghĩa； 読み方（よみかた）：cách đọc； 辞書（じしょ）：từ điển； 自信（じしん）：tự tin"
  },
  {
    "p": "わたしは 今、駅の 近くの カフェで アルバイトを して います。仕事は 週に 3回、午後 5時から 9時までです。お客さんに コーヒーや ケーキを 出したり、店の そうじを したり します。はじめは、コーヒーの 作り方が 分からなくて、大変でした。でも、同僚が 何回も 作り方を 見せて くれたので、今は お客さんに 「おいしい」と 言って もらえる ように なりました。カフェでは、いろいろな 人と 話す こと が できます。日本人の お客さんと 話すと、日本語の 勉強にも なります。来月からは、朝の 仕事も したいと 思って います。朝は、パンや サンドイッチを 作る 仕事です。アルバイトの お金で、日本語の 本を 買ったり、友だちと 旅行に 行ったり したいです。わたしは、この カフェの 仕事が 大好きです。",
    "qs": [
     {
      "q": "わたしは 今、どこで アルバイトを して いますか。",
      "o": [
       "駅の 近くの カフェです。",
       "駅の 近くの 本屋です。",
       "学校の 近くの カフェです。",
       "駅の 近くの レストランです。"
      ],
      "a": 0,
      "e": "文に「駅の近くのカフェでアルバイトをしています」とあります。"
     },
     {
      "q": "はじめは、何が 大変でしたか。",
      "o": [
       "コーヒーの 作り方が 分かりませんでした。",
       "店の そうじが できませんでした。",
       "お客さんと 話す こと が できませんでした。",
       "ケーキを 作る こと が できませんでした。"
      ],
      "a": 0,
      "e": "文に「はじめは、コーヒーの作り方が分からなくて、大変でした」とあります。"
     },
     {
      "q": "わたしは アルバイトの お金で、何を したいですか。",
      "o": [
       "車を 買いたいです。",
       "日本語の 本を 買ったり、友だちと 旅行に 行ったり したいです。",
       "新しい 家を 買いたいです。",
       "新しい パソコンを 買いたいです。"
      ],
      "a": 1,
      "e": "文に「アルバイトのお金で、日本語の本を買ったり、友だちと旅行に行ったりしたいです」とあります。"
     }
    ],
    "exp": "Q1: bằng chứng 「駅の近くのカフェでアルバイトをしています」nên làm ở quán cà phê gần ga；tiệm sách, quán cà phê gần trường, nhà hàng gần ga đều sai. Q2: bằng chứng 「はじめは、コーヒーの作り方が分からなくて、大変でした」nên lúc đầu không biết cách pha cà phê；không dọn được cửa hàng, không nói chuyện được với khách, không làm được bánh đều sai. Q3: bằng chứng 「アルバイトのお金で、日本語の本を買ったり、友だちと旅行に行ったりしたいです」nên muốn mua sách tiếng Nhật và đi du lịch với bạn；mua xe, mua nhà mới, mua máy tính mới đều sai。",
    "voc": "カフェ：quán cà phê； アルバイト：việc làm thêm； 同僚（どうりょう）：đồng nghiệp； 作り方（つくりかた）：cách làm； 一人で（ひとりで）：một mình； 大好き（だいすき）：rất thích"
  },
  {
    "p": "わたしの ふるさとは、海の 近くの 小さい 町です。毎年 8月に、大きい 祭りが あります。祭りの 日には、町の 人が みんな 集まって、太鼓を たたいたり、踊ったり します。わたしは 子どもの とき、父と いっしょに 祭りに 行きました。夜に なると、道に たくさんの ちょうちんが 光って、とても きれいでした。祭りでは、町の 名物である 魚の 料理を 食べる こと が できます。去年、わたしは 5年ぶりに ふるさとへ 帰って、祭りに 行きました。友だちにも 会えて、とても うれしかったです。今年も、祭りの 日に 帰る つもりです。今度は、会社の 友だちも いっしょに 連れて 行きたいと 思って います。友だちに、ふるさとの 祭りを 見せたいです。",
    "qs": [
     {
      "q": "わたしの ふるさとの 祭りは、いつ ありますか。",
      "o": [
       "毎年 8月に あります。",
       "毎年 7月に あります。",
       "毎年 9月に あります。",
       "毎年 10月に あります。"
      ],
      "a": 0,
      "e": "文に「毎年8月に、大きい祭りがあります」とあります。"
     },
     {
      "q": "去年、わたしは 何年ぶりに ふるさとへ 帰りましたか。",
      "o": [
       "3年ぶりです。",
       "4年ぶりです。",
       "5年ぶりです。",
       "10年ぶりです。"
      ],
      "a": 2,
      "e": "文に「去年、わたしは5年ぶりにふるさとへ帰って」とあります。"
     },
     {
      "q": "今年、わたしは どう したいですか。",
      "o": [
       "一人で 祭りに 行きたいです。",
       "会社の 友だちも いっしょに 連れて 行きたいです。",
       "祭りに 行かない つもりです。",
       "ふるさとを 引っ越したいです。"
      ],
      "a": 1,
      "e": "文に「今度は、会社の友だちもいっしょに連れて行きたいと思っています」とあります。"
     }
    ],
    "exp": "Q1: bằng chứng 「毎年8月に、大きい祭りがあります」nên lễ hội vào tháng 8 hằng năm；tháng 7, 9, 10 đều sai. Q2: bằng chứng 「去年、わたしは5年ぶりにふるさとへ帰って」nên về quê sau 5 năm；3 năm, 4 năm, 10 năm đều sai. Q3: bằng chứng 「今度は、会社の友だちもいっしょに連れて行きたいと思っています」nên năm nay muốn dẫn bạn ở công ty đi cùng；đi một mình, không đi lễ hội, chuyển nhà đều sai。",
    "voc": "ふるさと：quê hương； 祭り（まつり）：lễ hội； 太鼓（たいこ）：trống taiko； 踊る（おどる）：nhảy múa； 名物（めいぶつ）：đặc sản； 連れて行く（つれていく）：dẫn đi cùng"
  }
  ],
  tougou: [
  {
    "p1": "犬 を 飼う こと は、生活 を 楽しく します。毎日 散歩 を する こと で、運動 に も なります。犬 は 家族 の 一員 に なって、さびしい とき に そば に いて くれます。犬 と 遊ぶ こと で、子ども は 責任感 を 学ぶ こと も できます。世話 を する の は 大変 です が、その 分、愛情 も 深く なります。犬 が いる 生活 は、毎日 を 明るく して くれます。犬 が いる 家 は、にぎやか で 楽しい です。",
    "p2": "犬 を 飼う の は、簡単 では ありません。餌 や 病院 に お金 が かかります。犬 は 十年以上 生きる ので、長い 間 世話 を しなければ なりません。毎日 散歩 や 世話 を する 時間 も 必要 です。近所 の 人 に 迷惑 を かける こと も あります。旅行 に 行く とき は、預ける 場所 を 探さなければ なりません。飼う 前 に、責任 を 持てる か どうか、よく 考える べき です。",
    "qs": [
     {
      "q": "二人 の 共通点 は 何 です か。",
      "o": [
       "犬 を 飼う の は 世話 が 大変 だ と 思って います。",
       "犬 は 飼う べき では ない と 思って います。",
       "犬 を 飼う の は お金 が かからない と 思って います。",
       "犬 は 家族 の 一員 に ならない と 思って います。"
      ],
      "a": 0,
      "e": "Cả hai đều thừa nhận nuôi chó vất vả, tốn công chăm sóc."
     },
     {
      "q": "二つ の 文章 の 意見 の ちがい は 何 です か。",
      "o": [
       "一つ目 の 文章 の 筆者 は 犬 を 飼う こと の よさ を 強調 して います が、二つ目 の 文章 の 筆者 は 責任 や 負担 の 大きさ を 強調 して います。",
       "一つ目 の 文章 の 筆者 は 犬 を 飼う こと に 反対 して います が、二つ目 の 文章 の 筆者 は 賛成 して います。",
       "二人 とも 犬 を 飼う こと に 反対 して います。",
       "二人 とも 犬 を 飼う の は 簡単 だ と 思って います。"
      ],
      "a": 0,
      "e": "Bài 1 nhấn mạnh mặt tốt của việc nuôi chó, bài 2 nhấn mạnh trách nhiệm và gánh nặng."
     }
    ],
    "exp": "Q1: cả hai bài đều nói nuôi chó vất vả, tốn công chăm sóc — bài 1 「世話をするのは大変です」；bài 2 「毎日散歩や世話をする時間も必要です」. Các lựa chọn khác sai: bài 1 không phản đối nuôi chó；nuôi chó tốn tiền chứ không phải không tốn；bài 1 coi chó là thành viên gia đình. Q2: bài 1 nhấn mạnh mặt tốt của việc nuôi chó, bài 2 nhấn mạnh trách nhiệm và gánh nặng. Các lựa chọn khác đảo ngược hoặc sai hẳn。",
    "voc": "犬（いぬ）：chó； 飼う（かう）：nuôi； 散歩（さんぽ）：đi dạo； 世話（せわ）：chăm sóc； 責任（せきにん）：trách nhiệm； 家族（かぞく）：gia đình"
  }
  ],
  shuchou: [
  {
    "p": "今、多く の 人 は スマートフォン で 短い 文章 を 読む こと が 多く なりました。ニュース も、友だち の メッセージ も、すぐ に 読む こと が できます。しかし、わたし は 本 を 読む こと が、ますます 大切 に なって いる と 思います。スマートフォン の 文章 は 短くて、わかりやすい です。しかし、その 分、深く 考える 時間 は あまり ありません。読んだ 後、すぐ に 忘れて しまう こと も 多い です。本 を 読む と、長い 文章 を 最後 まで 読む 力 が 必要 です。登場人物 の 気持ち を 考えたり、筆者 の 考え を 理解 したり しながら、ゆっくり 読み進めます。その 時間 の 中 で、想像力 が 育ちます。自分 の 頭 で 考える 力 も つきます。長い 文章 を 読む と、一つ の こと を じっくり 考える こと が できます。その 力 は、仕事 や 勉強 で も 役立ちます。もちろん、スマートフォン が 悪い わけ では ありません。情報 を 早く 知る ため に は、とても 便利 です。ただ、便利 さ だけ で は、深い 理解 は できません。本 を 読む 習慣 が なければ、考える 力 は 少しずつ 弱く なって しまう でしょう。スマートフォン と 本 を、目的 に 合わせて 使い分ける こと が 大切 です。わたし は 毎日、寝る前 に 十分 だけ 本 を 読む よう に して います。十分 で も、続ける こと が 大切 です。本 は、わたしたち に 考える 時間 を 与えて くれます。本 を 読む と、知らない 世界 を 知る こと が できます。歴史 の 話 や 外国 の 話 を 読む と、自分 の 考え が 広がります。スマートフォン で は、自分 の 好き な 情報 ばかり 見て しまいます。本 で は、思いがけない 考え に 出会う こと も あります。その 出会い が、新しい 自分 を 作ります。だ から、若い 人 に も 本 を 読む 習慣 を 持って ほしい です。本 を 読む 時間 は、自分 の ため の 大切 な 時間 です。だ から こそ、これ から も 本 を 読む こと を 大切 に したい です。",
    "qs": [
     {
      "q": "筆者 は 何 を 言いたい です か。",
      "o": [
       "スマートフォン ばかり でなく、本 を 読む こと も 大切 です。",
       "スマートフォン を 使う の は やめる べき です。",
       "本 を 読む の は 時間 の 無駄 です。",
       "短い 文章 だけ を 読めば 十分 です。"
      ],
      "a": 0,
      "e": "Tác giả cho rằng đọc sách vẫn quan trọng dù smartphone tiện lợi."
     },
     {
      "q": "筆者 に よると、本 を 読む と どう なります か。",
      "o": [
       "すぐ に 忘れて しまいます。",
       "考える 時間 が なく なります。",
       "想像力 や 考える 力 が 育ちます。",
       "短い 文章 しか 読めなく なります。"
      ],
      "a": 2,
      "e": "Đọc sách giúp trí tưởng tượng và khả năng suy nghĩ phát triển."
     },
     {
      "q": "筆者 の 考え に 合う もの は どれ です か。",
      "o": [
       "本 は 読まなくて も、考える 力 は つきます。",
       "スマートフォン は 悪い もの だ から、使う べき では ありません。",
       "毎日 十分 で も、本 を 読み続ける こと が 大切 です。",
       "長い 文章 を 読む 必要 は ありません。"
      ],
      "a": 2,
      "e": "Tác giả đọc sách 10 phút mỗi tối và cho rằng duy trì thói quen mới quan trọng."
     }
    ],
    "exp": "Q1: tác giả cho rằng đọc sách vẫn quan trọng dù smartphone tiện lợi — bằng chứng ở câu 「本を読むことが、ますます大切になっていると思います」. Bỏ smartphone, đọc sách phí thời gian, chỉ đọc văn bản ngắn đều trái ý tác giả. Q2: bằng chứng 「想像力が育ちます。自分の頭で考える力もつきます」nên đọc sách giúp trí tưởng tượng và khả năng suy nghĩ phát triển. Q3: bằng chứng 「毎日、寝る前に十分だけ本を読むようにしています。十分でも、続けることが大切です」nên đọc 10 phút mỗi ngày và duy trì mới quan trọng。",
    "voc": "スマートフォン：điện thoại thông minh； 本（ほん）：sách； 想像力（そうぞうりょく）：trí tưởng tượng； 考える（かんがえる）：suy nghĩ； 習慣（しゅうかん）：thói quen； 大切（たいせつ）：quan trọng"
  }
  ],
  info: [
  {
    "tpl": "<b>A アパートのみなさんへ</b><br>さくら市では、ごみを 下の ように 分けます。<br><table class=\"jl-tbl\"><tr><th>ごみの 種類</th><th>ごみ箱</th><th>出す 日</th></tr><tr><td>燃えるごみ（紙、台所の ごみ、古い 服）</td><td>ごみ箱A</td><td>月曜日と木曜日</td></tr><tr><td>プラスチックごみ（ペットボトル、食品の トレー）</td><td>ごみ箱B</td><td>火曜日</td></tr><tr><td>びん・缶（ビールの びん、ジュースの 缶）</td><td>ごみ箱C</td><td>金曜日</td></tr><tr><td>大きいごみ（机、いす、本だな）</td><td>ごみ箱D</td><td>第2土曜日</td></tr></table>ごみ箱Aは 1階の 入口の 横に、ごみ箱Bは 建物の 南側に、ごみ箱Cは 建物の 北側に、ごみ箱Dは 駐車場の 横に あります。<br><b>B カレンダー（今月）</b><br><table class=\"jl-cal\"><tr><th>月</th><th>火</th><th>水</th><th>木</th><th>金</th><th>土</th><th>日</th></tr><tr><td></td><td></td><td></td><td>1</td><td>2</td><td>3</td><td>4</td></tr><tr><td>5</td><td>6</td><td>7</td><td>8</td><td>9</td><td>10</td><td>11</td></tr></table>",
    "inst": "つぎのA「アパートのみなさんへ」とBのカレンダーを見て、質問に答えてください。答えは1・2・3・4から、いちばんいいものを一つえらんでください。",
    "q": "今日は 6日 (火曜日) です。古い 机を すてたいです。何日に どこに すてますか。",
    "opts": [
     "10日にごみ箱D",
     "3日にごみ箱D",
     "6日にごみ箱D",
     "10日にごみ箱A"
    ],
    "ans": 0,
    "exp": "机は 大きいごみで、ごみ箱Dへ 第2土曜日に 出します。今月の 土曜日は 3日と 10日なので、第2土曜日は 10日です。Bàn (机) là rác lớn, bỏ vào thùng D vào thứ Bảy thứ hai của tháng, tức ngày 10.",
    "voc": "机（つくえ）：cái bàn； 大きいごみ：rác lớn； ごみ箱（ごみばこ）：thùng rác； 第2土曜日：thứ Bảy thứ hai của tháng"
  },
  {
    "tpl": "<b>A さくらスポーツクラブのお知らせ</b><br>11月の クラスは、下の 表の とおりです。<br><table class=\"jl-tbl\"><tr><th>クラス</th><th>曜日</th><th>時間</th><th>場所</th></tr><tr><td>ヨガ</td><td>火曜日と金曜日</td><td>10時〜11時</td><td>2階の スタジオ</td></tr><tr><td>水泳</td><td>月曜日と木曜日</td><td>14時〜15時</td><td>1階の プール</td></tr><tr><td>ダンス</td><td>水曜日と土曜日</td><td>18時〜19時</td><td>2階の スタジオ</td></tr><tr><td>たいそう</td><td>日曜日</td><td>9時〜10時</td><td>1階の ホール</td></tr></table><b>B カレンダー（11月）</b><br><table class=\"jl-cal\"><tr><th>月</th><th>火</th><th>水</th><th>木</th><th>金</th><th>土</th><th>日</th></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td><td>1</td></tr><tr><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td></tr><tr><td>9</td><td>10</td><td>11</td><td>12</td><td>13</td><td>14</td><td>15</td></tr></table>",
    "inst": "つぎのA「さくらスポーツクラブのお知らせ」とBのカレンダーを見て、質問に答えてください。答えは1・2・3・4から、いちばんいいものを一つえらんでください。",
    "q": "今日は 11日 (水曜日) です。ヨガの クラスに 出たいです。次の ヨガの クラスは、何日に どこで ありますか。",
    "opts": [
     "13日に2階のスタジオ",
     "11日に2階のスタジオ",
     "12日に2階のスタジオ",
     "13日に1階のプール"
    ],
    "ans": 0,
    "exp": "ヨガは火曜日と金曜日、10時〜11時、2階のスタジオです。今日は水曜日11日なので、次のヨガは金曜日13日です。12日は木曜日で水泳の日なので違いますし、プールは水泳の場所なので違います。Yoga học thứ Ba và thứ Sáu, 10–11 giờ, ở studio tầng 2. Hôm nay là thứ Tư ngày 11 nên buổi yoga tiếp theo là thứ Sáu ngày 13.",
    "voc": "ヨガ：yoga； スタジオ：phòng tập； 水泳（すいえい）：bơi lội； プール：bể bơi； クラス：lớp học"
  }
  ]
};

/* ----- Test 3 ----- */
window.WRITTEN_N2_SET3 = {
  yomi: [
  {
    "s": "二人 の 関係 は とても 良い です。",
    "t": "関係",
    "r": "かんけい",
    "w": ["かんき", "かんけ", "けんけい"],
    "exp": "関係 đọc là かんけい（関 かん、係 けい）。かんき thiếu âm けい, かんけ thiếu い ở cuối, けんけい đọc 関 thành けん nên sai.",
    "voc": "関係（かんけい）：mối quan hệ； 二人（ふたり）：hai người； 良い（よい）：tốt"
  },
  {
    "s": "会議で 新しい 提案を 出しました。",
    "t": "提案",
    "r": "ていあん",
    "w": ["ていがん", "ていかん", "ていあんん"],
    "exp": "提案 đọc là ていあん（提 てい、案 あん）。ていがん đọc 案 thành がん là sai, ていかん đọc 提 thành かん là sai, ていあんん thêm ん thừa nên sai.",
    "voc": "提案（ていあん）：đề xuất, đề án； 会議（かいぎ）：cuộc họp； 出す（だす）：đưa ra"
  },
  {
    "s": "旅行の 準備が まだ 終わっていません。",
    "t": "準備",
    "r": "じゅんび",
    "w": ["じゅんひ", "じゅんぴ", "しゅんび"],
    "exp": "準備 đọc là じゅんび（準 じゅん、備 び）。じゅんひ đọc 備 thành ひ là sai, じゅんぴ đọc 備 thành ぴ là sai, しゅんび đọc 準 thành しゅん là sai.",
    "voc": "準備（じゅんび）：chuẩn bị； 旅行（りょこう）：du lịch； 終わる（おわる）：xong, kết thúc"
  },
  {
    "s": "海外で 働いた 経験が あります。",
    "t": "経験",
    "r": "けいけん",
    "w": ["けいげん", "けんけん", "けいけい"],
    "exp": "経験 đọc là けいけん（経 けい、験 けん）。けいげん đọc 験 thành げん là sai, けんけん đọc 経 thành けん là sai, けいけい đọc 験 thành けい là sai.",
    "voc": "経験（けいけん）：kinh nghiệm； 海外（かいがい）：nước ngoài； 働く（はたらく）：làm việc"
  },
  {
    "s": "新しい 仕事に 大きな 期待を しています。",
    "t": "期待",
    "r": "きたい",
    "w": ["きだい", "きてい", "きたいい"],
    "exp": "期待 đọc là きたい（期 き、待 たい）。きだい đọc 待 thành だい là sai, きてい đọc 待 thành てい là sai, きたいい thêm い thừa nên sai.",
    "voc": "期待（きたい）：kì vọng, mong đợi； 大きな（おおきな）：lớn； 仕事（しごと）：công việc"
  }
  ],
  hyoki: [
  {
    "s": "みんな で きょうりょく して、行事 を 成功 させましょう。",
    "h": "きょうりょく",
    "k": "協力",
    "w": ["協刀", "教力", "強力"],
    "exp": "きょうりょく viết là 協力（協 きょう、力 りょく）。協刀 dùng 刀 sai chữ, 教力 dùng 教 sai chữ, 強力 là từ khác (mạnh mẽ) nên sai.",
    "voc": "協力（きょうりょく）：hợp tác； 行事（ぎょうじ）：sự kiện； 成功（せいこう）：thành công"
  },
  {
    "s": "毎日 運動して、けんこうに 気をつけています。",
    "h": "けんこう",
    "k": "健康",
    "w": ["健高", "健広", "建康"],
    "exp": "けんこう viết là 健康（健 けん、康 こう）。健高 dùng 高 sai chữ, 健広 dùng 広 sai chữ, 建康 dùng 建 sai chữ.",
    "voc": "健康（けんこう）：sức khoẻ； 運動（うんどう）：vận động, tập thể dục； 気をつける：chú ý, giữ gìn"
  },
  {
    "s": "車に ちゅういして、道を わたりましょう。",
    "h": "ちゅうい",
    "k": "注意",
    "w": ["注音", "注言", "注文"],
    "exp": "ちゅうい viết là 注意（注 ちゅう、意 い）。注音 dùng 音 sai chữ, 注言 dùng 言 sai chữ, 注文 là từ khác (đặt hàng) nên sai.",
    "voc": "注意（ちゅうい）：chú ý； 車（くるま）：xe ô tô； 道（みち）：đường； 渡る（わたる）：băng qua"
  },
  {
    "s": "先生が 問題の せつめいを しました。",
    "h": "せつめい",
    "k": "説明",
    "w": ["説日", "説天", "説名"],
    "exp": "せつめい viết là 説明（説 せつ、明 めい）。説日 dùng 日 sai chữ, 説天 dùng 天 sai chữ, 説名 dùng 名 sai chữ.",
    "voc": "説明（せつめい）：giải thích； 先生（せんせい）：thầy cô； 問題（もんだい）：vấn đề, câu hỏi"
  },
  {
    "s": "試験の 結果が しんぱいです。",
    "h": "しんぱい",
    "k": "心配",
    "w": ["心目", "心西", "心平"],
    "exp": "しんぱい viết là 心配（心 しん、配 はい）。心目 dùng 目 sai chữ, 心西 dùng 西 sai chữ, 心平 dùng 平 sai chữ.",
    "voc": "心配（しんぱい）：lo lắng； 試験（しけん）：kì thi； 結果（けっか）：kết quả"
  }
  ],
  ctx: [
  {
    "s": "歌手 に なる （　）を 持ち続けて、毎日 練習 しました。",
    "a": "ゆめ",
    "w": ["しゅみ", "けいかく", "もくてき"],
    "exp": "Đáp án gốc là ゆめ：歌手になる夢を持ち続けて (ôm giấc mơ trở thành ca sĩ và luyện tập mỗi ngày). しゅみ (sở thích) không thể đi sau 歌手になる…を持ち続けて — trở thành ca sĩ không phải là một sở thích; けいかく (kế hoạch) và もくてき (mục đích) cũng không hợp với 持ち続けて trong ngữ cảnh ước mơ nghề nghiệp.",
    "voc": "歌手（かしゅ）：ca sĩ； 夢（ゆめ）：ước mơ； 練習（れんしゅう）：luyện tập； 持ち続ける（もちつづける）：ôm giữ mãi； しゅみ：sở thích"
  },
  {
    "s": "この 問題 は とても （　）で、すぐ に は 答えられません。",
    "a": "ふくざつ",
    "w": ["かんたん", "べんり", "あんぜん"],
    "exp": "Vấn đề quá phức tạp nên không thể trả lời ngay — ふくざつ (phức tạp) mới đúng. かんたん (đơn giản) trái nghĩa, べんり (tiện lợi) và あんぜん (an toàn) không mô tả độ khó của vấn đề.",
    "voc": "問題（もんだい）：vấn đề； 複雑（ふくざつ）：phức tạp； 答える（こたえる）：trả lời"
  },
  {
    "s": "会議 に 遅れた （　）を 説明 して ください。",
    "a": "りゆう",
    "w": ["けっか", "もくてき", "きかい"],
    "exp": "Hãy giải thích lí do đến muộn cuộc họp — りゆう (lí do) mới đúng. けっか (kết quả), もくてき (mục đích) và きかい (cơ hội) đều không hợp với 'giải thích việc đến muộn'.",
    "voc": "会議（かいぎ）：cuộc họp； 遅れる（おくれる）：đến muộn； 理由（りゆう）：lí do； 説明する（せつめいする）：giải thích"
  },
  {
    "s": "夜の 道は とても （　）ですから、気をつけて ください。",
    "a": "くらい",
    "w": ["あかるい", "あたたかい", "すずしい"],
    "exp": "Đường buổi tối rất tối nên phải cẩn thận — くらい (tối) mới đúng. あかるい (sáng) trái nghĩa, あたたかい (ấm) và すずしい (mát) nói về nhiệt độ, không hợp với 'đường tối'.",
    "voc": "夜（よる）：ban đêm； 道（みち）：đường； 暗い（くらい）：tối； 気をつける：chú ý"
  },
  {
    "s": "彼は 毎日 三時間も 電車に 乗って、会社へ 通って います。とても （　）ですね。",
    "a": "たいへん",
    "w": ["らく", "かんたん", "べんり"],
    "exp": "Đi tàu 3 tiếng mỗi ngày là vất vả — たいへん (vất vả, cực) mới đúng. らく (nhàn), かんたん (dễ) và べんり (tiện) đều trái với việc đi lại 3 tiếng mỗi ngày.",
    "voc": "電車（でんしゃ）：tàu điện； 通う（かよう）：đi lại thường xuyên； 大変（たいへん）：vất vả"
  },
  {
    "s": "この 店の パンは （　）ので、いつも たくさんの 人が 並んで います。",
    "a": "おいしい",
    "w": ["まずい", "にがい", "からい"],
    "exp": "Bánh ngon nên lúc nào cũng đông người xếp hàng — おいしい (ngon) mới đúng. まずい (dở), にがい (đắng) và からい (cay) đều là vị không ngon, không thể là lí do đông khách.",
    "voc": "パン：bánh mì； 並ぶ（ならぶ）：xếp hàng； たくさん：nhiều； おいしい：ngon； 辛い（からい）：cay"
  },
  {
    "s": "試験に 合格する ために、毎日 （　）勉強を 続けました。",
    "a": "まじめに",
    "w": ["いいかげんに", "てきとうに", "あわてて"],
    "exp": "Muốn đỗ kì thi nên học chăm chỉ mỗi ngày — まじめに (chăm chỉ, nghiêm túc) mới đúng. いいかげんに và てきとうに (qua loa, cẩu thả) trái với mục đích đỗ thi; あわてて (vội vàng) không hợp với việc học đều đặn mỗi ngày.",
    "voc": "試験（しけん）：kì thi； 合格する（ごうかくする）：đỗ, đạt； 続ける（つづける）：tiếp tục； 真面目に（まじめに）：một cách chăm chỉ"
  }
  ],
  syn: [
  {
    "s": "友だち と の 旅行 は、とても たのしい 時間 でした。",
    "t": "たのしい",
    "a": "ゆかい",
    "w": ["つまらない", "さびしい", "かなしい"],
    "exp": "たのしい (vui vẻ) gần nghĩa nhất với ゆかい (vui vẻ, hân hoan) trong các lựa chọn. つまらない (chán), さびしい (buồn, cô đơn) và かなしい (buồn) đều mang nghĩa tiêu cực nên sai. Xem FLAG trong VERIFICATION-set3.md: ゆかい là từ đồng nghĩa gần, không phải đồng nghĩa hoàn toàn.",
    "voc": "友だち（ともだち）：bạn bè； 旅行（りょこう）：du lịch； 楽しい（たのしい）：vui vẻ； ゆかい：vui vẻ, hân hoan"
  },
  {
    "s": "この 公園は きれいな 花が たくさん あります。",
    "t": "きれいな",
    "a": "うつくしい",
    "w": ["きたない", "へんな", "くらい"],
    "exp": "きれいな (đẹp) đồng nghĩa gần nhất với うつくしい (đẹp, xinh đẹp). きたない (bẩn) trái nghĩa, へんな (lạ) và くらい (tối) không liên quan.",
    "voc": "公園（こうえん）：công viên； 花（はな）：hoa； 美しい（うつくしい）：đẹp"
  },
  {
    "s": "すばらしい けしきを 見ました。",
    "t": "すばらしい",
    "a": "すてきな",
    "w": ["ひどい", "つまらない", "へんな"],
    "exp": "すばらしい (tuyệt vời) đồng nghĩa gần nhất với すてきな (tuyệt, đẹp). ひどい (tệ) và つまらない (chán) trái nghĩa, へんな (lạ) không hợp.",
    "voc": "景色（けしき）：phong cảnh； 素晴らしい（すばらしい）：tuyệt vời； すてきな：tuyệt, đẹp"
  },
  {
    "s": "この 本は わたしに とって たいせつな 本です。",
    "t": "たいせつな",
    "a": "だいじな",
    "w": ["くだらない", "つまらない", "むだな"],
    "exp": "たいせつな (quý giá, quan trọng) đồng nghĩa với だいじな (quan trọng). くだらない (vô bổ), つまらない (chán) và むだな (lãng phí) đều mang nghĩa tiêu cực nên sai.",
    "voc": "大切な（たいせつな）：quan trọng, quý giá； 大事な（だいじな）：quan trọng"
  },
  {
    "s": "友だちの 返事を 聞いて、やっと あんしんしました。",
    "t": "あんしんしました",
    "a": "ほっとした",
    "w": ["しんぱいした", "おこった", "おどろいた"],
    "exp": "あんしんしました (đã yên tâm) đồng nghĩa gần nhất với ほっとした (thở phào nhẹ nhõm). しんぱいした (đã lo lắng) trái nghĩa, おこった (đã giận) và おどろいた (đã ngạc nhiên) không hợp.",
    "voc": "返事（へんじ）：hồi đáp, trả lời； 安心する（あんしんする）：yên tâm； やっと：cuối cùng, mãi mới"
  }
  ],
  yoho: [
  {
    "t": "かぶる",
    "s": [
     "シャツ を かぶると、日ざし を ふせぐ こと が できます。",
     "靴 を かぶると、日ざし を ふせぐ こと が できます。",
     "眼鏡 を かぶると、日ざし を ふせぐ こと が できます。",
     "帽子 を かぶると、日ざし を ふせぐ こと が できます。"
    ],
    "a": 3,
    "exp": "かぶる (đội, trùm lên đầu) chỉ dùng với mũ và những thứ đội lên đầu — 帽子をかぶる (đội mũ) mới đúng. シャツは 着る (mặc áo), 靴は はく (đi giày), 眼鏡は かける (đeo kính) nên 3 câu kia đều sai.",
    "voc": "帽子（ぼうし）：mũ； 被る（かぶる）：đội, trùm； シャツ：áo sơ mi； 靴（くつ）：giày； 眼鏡（めがね）：kính"
  },
  {
    "t": "あきらめる",
    "s": [
     "夢を あきらめる のは よくないです。",
     "雨を あきらめる のは よくないです。",
     "空を あきらめる のは よくないです。",
     "音を あきらめる のは よくないです。"
    ],
    "a": 0,
    "exp": "あきらめる (từ bỏ) chỉ dùng với mục tiêu, ước mơ, kế hoạch — 夢をあきらめるのはよくないです (không nên từ bỏ ước mơ) mới đúng. 雨 (mưa), 空 (bầu trời), 音 (âm thanh) không phải thứ có thể 'từ bỏ' nên 3 câu kia đều sai.",
    "voc": "夢（ゆめ）：ước mơ； 諦める（あきらめる）：từ bỏ； 雨（あめ）：mưa； 空（そら）：bầu trời； 音（おと）：âm thanh"
  },
  {
    "t": "なくす",
    "s": [
     "天気を なくすと、こまります。",
     "空を なくすと、こまります。",
     "かぎを なくすと、こまります。",
     "音を なくすと、こまります。"
    ],
    "a": 2,
    "exp": "なくす (đánh mất) chỉ dùng với đồ vật có thể mất — かぎをなくすと、こまります (đánh mất chìa khoá thì rắc rối) mới đúng. 天気 (thời tiết), 空 (bầu trời), 音 (âm thanh) không phải đồ vật nên không thể 'đánh mất'.",
    "voc": "鍵（かぎ）：chìa khoá； 無くす（なくす）：đánh mất； 天気（てんき）：thời tiết； 空（そら）：bầu trời； 音（おと）：âm thanh； 困る（こまる）：gặp rắc rối"
  },
  {
    "t": "あずける",
    "s": [
     "荷物を ホテルに あずける ことができます。",
     "天気を ホテルに あずける ことができます。",
     "空を ホテルに あずける ことができます。",
     "時間を ホテルに あずける ことができます。"
    ],
    "a": 0,
    "exp": "あずける (gửi, nhờ giữ) chỉ dùng với đồ vật hoặc người — 荷物をホテルにあずけることができます (có thể gửi hành lí ở khách sạn) mới đúng. 天気 (thời tiết), 空 (bầu trời), 時間 (thời gian) không thể gửi nhờ giữ ở khách sạn.",
    "voc": "荷物（にもつ）：hành lí； 預ける（あずける）：gửi, nhờ giữ； ホテル：khách sạn； 天気（てんき）：thời tiết； 空（そら）：bầu trời； 時間（じかん）：thời gian"
  },
  {
    "t": "しかる",
    "s": [
     "母は へやを ちらかした 天気を しかる ことが あります。",
     "母は へやを ちらかした 空を しかる ことが あります。",
     "母は へやを ちらかした 音を しかる ことが あります。",
     "母は へやを ちらかした 子どもを しかる ことが あります。"
    ],
    "a": 3,
    "exp": "しかる (mắng) chỉ dùng với người (hoặc vật nuôi) — 母はへやをちらかした子どもをしかることがあります (mẹ đôi khi mắng đứa con đã làm bừa bộn phòng) mới đúng. 天気, 空, 音 không thể bị mắng, và cũng không thể 'làm bừa bộn phòng'.",
    "voc": "しかる：mắng； 子ども（こども）：trẻ con； 部屋（へや）：phòng； 散らかす（ちらかす）：làm bừa bộn； 母（はは）：mẹ"
  }
  ],
  kotoba: [
  {
    "s": "夏の 夜に （　）を 見ました。",
    "a": "はなび",
    "w": ["はなひ", "はなぴ", "はなびい"],
    "exp": "花火 đọc là はなび：はな (hoa) + ひ (lửa) ghép lại thì ひ biến thành び do hiện tượng rendaku (âm đầu của từ sau bị đục). はなひ không có rendaku nên sai, はなぴ và はなびい đều sai cách đọc.",
    "voc": "花火（はなび）：pháo hoa； 夏（なつ）：mùa hè； 夜（よる）：ban đêm"
  },
  {
    "s": "会社では、書類の （　）が 進んで います。",
    "a": "デジタル化",
    "w": ["デジタル", "デジタル性", "デジタル的"],
    "exp": "'Số hoá tài liệu đang tiến triển' — cần hậu tố 〜化 (hoá thành) nên デジタル化 mới đúng. デジタルだけ thì thiếu hậu tố, デジタル性 (tính chất số) và デジタル的 (mang tính số) không diễn tả 'trở thành số hoá'.",
    "voc": "書類（しょるい）：tài liệu, giấy tờ； デジタル化（でじたるか）：số hoá； 進む（すすむ）：tiến triển"
  },
  {
    "s": "彼の 考え方は とても （　）です。",
    "a": "ごうりてき",
    "w": ["ごうり", "ごうりせい", "ごうりか"],
    "exp": "'Cách suy nghĩ của anh ấy rất hợp lí' — cần hậu tố 〜的 để tạo tính từ な: ごうりてき (hợp lí) mới đúng. ごうり là danh từ nên không đứng sau とても, ごうりせい (tính hợp lí) là danh từ, ごうりか (hoá thành hợp lí) sai nghĩa.",
    "voc": "考え方（かんがえかた）：cách suy nghĩ； 合理的（ごうりてき）：hợp lí； とても：rất"
  },
  {
    "s": "プールの （　）は 一回 500円です。",
    "a": "りょうきん",
    "w": ["りょうき", "りょうぎん", "りょうきんん"],
    "exp": "'Phí bể bơi là 500 yên một lần' — 料金 đọc là りょうきん（料 りょう、金 きん）。りょうき thiếu ん ở cuối, りょうぎん đọc 金 thành ぎん là sai, りょうきんん thêm ん thừa nên sai.",
    "voc": "料金（りょうきん）：phí, lệ phí； プール：bể bơi； 一回（いっかい）：một lần"
  },
  {
    "s": "この 川は とても （　）が 速いです。",
    "a": "ながれ",
    "w": ["ながる", "ながれる", "ながれい"],
    "exp": "'Dòng chảy của con sông này rất nhanh' — cần dạng danh từ 流れ (ながれ) sau の. ながれる là dạng động từ nên 「川の流れるが速い」 sai ngữ pháp; ながる và ながれい không phải dạng đúng của động từ 流れる.",
    "voc": "川（かわ）：sông； 流れ（ながれ）：dòng chảy； 速い（はやい）：nhanh"
  }
  ],
  g1dlg: [
  {
    "d": [
     "この まちは、さいきん どんどん かわって いますね。",
     "ええ、古い たてものが こわされて、新しい まちに（　）んです。"
    ],
    "a": "なりつつあります",
    "w": ["なって います", "なる 予定です", "なった ばかりです"],
    "p": "〜つつある",
    "exp": "Đáp án gốc là なりつつあります：thị trấn đang dần trở thành thị trấn mới (quá trình thay đổi đang diễn ra, khớp với さいきんどんどんかわっています). なっています thì sự thay đổi đã xong, なる予定です là dự định, なったばかりです là vừa mới trở thành — đều không hợp với diễn biến đang tiếp diễn. Lưu ý: mẫu thật của câu này là 〜つつある, mẫu N2 thật (Bunpro/JTest4You) nhưng không nằm trong 72 mẫu N2 của GRAMMAR_DATA — ngoại lệ legacy do coordinator chấp nhận, câu/đáp án/phương án giữ nguyên bản seed.",
    "voc": "町（まち）：thị trấn； 建物（たてもの）：toà nhà； 壊す（こわす）：phá dỡ； 新しい（あたらしい）：mới"
  },
  {
    "d": [
     "どうして 日本語の 歌を 歌うように なったんですか。",
     "友だちに 日本の 歌を すすめられた（　）、日本語の 歌を 歌うように なりました。"
    ],
    "a": "のをきっかけに",
    "w": ["のを皮切りに", "のがてら", "のかたわら"],
    "p": "〜をきっかけに",
    "exp": "'Được bạn giới thiệu bài hát Nhật mà bắt đầu hát nhạc Nhật' — のをきっかけに (nhân cơ hội, lấy cớ) mới đúng. のを皮切りに (mở đầu bằng, đầu tiên trong loạt) không hợp vì đây không phải chuỗi sự kiện; のがてら và のかたわら (vừa... vừa...) chỉ hành động song song nên sai.",
    "voc": "歌（うた）：bài hát； 友だち（ともだち）：bạn bè； すすめる：giới thiệu, khuyên； 歌う（うたう）：hát； きっかけ：cơ hội, cớ"
  },
  {
    "d": [
     "あの 店に 行けば、あの 本が 買えますか。",
     "いいえ、行った（　）、売り切れて いるでしょう。"
    ],
    "a": "ところで",
    "w": ["ものの", "とはいえ", "どころか"],
    "p": "V-た ところで",
    "exp": "'Dù có đi thì chắc cũng hết hàng rồi' — V-たところで (dù có... thì cũng...) diễn tả giả định vô ích mới đúng. ものの và とはいえ (tuy... nhưng...) cần mệnh đề chính trái ngược thực tế, không hợp với dự đoán 売り切れているでしょう; どころか (nói gì đến...) sai nghĩa.",
    "voc": "売り切れる（うりきれる）：bán hết； 店（みせ）：cửa hàng； 本（ほん）：sách"
  }
  ],
  g1: [
  {
    "s": "新しい 工場の 完成（　）、記念の 式が 行われました。",
    "a": "に際して",
    "w": ["に比べて", "に関して", "をめぐって"],
    "p": "〜に際して",
    "exp": "'Nhân dịp nhà máy mới hoàn thành, lễ kỉ niệm đã được tổ chức' — に際して (nhân dịp) mới đúng. に比べて (so với) sai nghĩa, 完成に関して (về việc hoàn thành) không hợp với 式が行われました, 完成をめぐって (xoay quanh việc hoàn thành) sai ngữ cảnh.",
    "voc": "工場（こうじょう）：nhà máy； 完成（かんせい）：hoàn thành； 記念（きねん）：kỉ niệm； 式（しき）：buổi lễ"
  },
  {
    "s": "この 工事は 二年に（　）行われました。",
    "a": "わたって",
    "w": ["先立って", "際して", "あたって"],
    "p": "〜にわたって",
    "exp": "'Công trình này được thi công trong suốt hai năm' — 二年にわたって (trong suốt, kéo dài) mới đúng. 先立って (trước khi), 際して (nhân dịp) và あたって (khi, nhân lúc) đều không diễn tả khoảng thời gian kéo dài.",
    "voc": "工事（こうじ）：công trình xây dựng； 二年（にねん）：hai năm； 行われる（おこなわれる）：được tiến hành"
  },
  {
    "s": "インターネット（　）、外国の 友だちと 話す ことが できます。",
    "a": "を通じて",
    "w": ["に基づいて", "をもとにして", "に沿って"],
    "p": "〜を通じて",
    "exp": "'Nhờ internet mà có thể nói chuyện với bạn nước ngoài' — を通じて (thông qua, nhờ) mới đúng. に基づいて (dựa trên), をもとにして (lấy làm cơ sở) và に沿って (dọc theo, theo) đều không hợp với インターネット trong câu này.",
    "voc": "インターネット：mạng internet； 外国（がいこく）：nước ngoài； 話す（はなす）：nói chuyện"
  },
  {
    "s": "人口が 増える（　）、町の ごみも 増えて いきます。",
    "a": "にしたがって",
    "w": ["に比べて", "に応じて", "に際して"],
    "p": "〜にしたがって",
    "exp": "'Dân số càng tăng, rác của thị trấn cũng càng tăng' — にしたがって (càng... càng...) diễn tả thay đổi tỉ lệ thuận mới đúng. に比べて (so với), に応じて (tuỳ theo) và に際して (nhân dịp) đều không diễn tả quan hệ 'càng... càng...'.",
    "voc": "人口（じんこう）：dân số； 増える（ふえる）：tăng lên； ごみ：rác； 町（まち）：thị trấn"
  },
  {
    "s": "彼は 病気（　）、毎日 会社へ 来て 働きました。",
    "a": "にもかかわらず",
    "w": ["どころか", "だけに", "ばかりに"],
    "p": "〜にもかかわらず",
    "exp": "'Dù bị bệnh, anh ấy vẫn đến công ty làm việc mỗi ngày' — にもかかわらず (dù... vẫn...) mới đúng. どころか (nói gì đến) sai nghĩa, だけに (chính vì) diễn tả nguyên nhân phù hợp nên sai, ばかりに (chỉ vì) mang nghĩa tiêu cực 'tại vì' nên sai.",
    "voc": "病気（びょうき）：bệnh； 働く（はたらく）：làm việc； 毎日（まいにち）：mỗi ngày"
  },
  {
    "s": "いろいろ 考えた（　）、仕事を やめる ことに しました。",
    "a": "末に",
    "w": ["ばかりに", "どころか", "にすぎない"],
    "p": "V-た 末に",
    "exp": "'Sau khi suy nghĩ nhiều, cuối cùng tôi quyết định nghỉ việc' — 考えた末に (sau khi... cuối cùng) mới đúng. ばかりに (chỉ vì) mang nghĩa tiêu cực 'tại vì', không hợp với quá trình suy nghĩ kĩ rồi mới quyết định; どころか (nói gì đến...) cần cấu trúc đối lập nên sai sau 考えた; にすぎない (chỉ là) không nối được với 考えた trong câu này.",
    "voc": "考える（かんがえる）：suy nghĩ； やめる：nghỉ, bỏ； 決める（きめる）：quyết định"
  },
  {
    "s": "家族の 支えが あった（　）、この 仕事を 続ける ことが できました。",
    "a": "からこそ",
    "w": ["どころか", "ばかりに", "にすぎない"],
    "p": "〜からこそ",
    "exp": "'Chính nhờ có sự ủng hộ của gia đình mà tôi đã tiếp tục được công việc này' — あったからこそ (chính vì có...) nhấn mạnh nguyên nhân mới đúng. どころか (nói gì đến...) cần cấu trúc đối lập nên sai sau あった; ばかりに mang nghĩa tiêu cực 'tại vì' nên sai; にすぎない (chỉ là) sai nghĩa.",
    "voc": "家族（かぞく）：gia đình； 支え（ささえ）：sự ủng hộ； 続ける（つづける）：tiếp tục"
  },
  {
    "s": "雨天（　）、今日の 運動会は 中止に なります。",
    "a": "につき",
    "w": ["に際して", "にあたって", "に先立って"],
    "p": "N + につき",
    "exp": "'Do trời mưa, hội thao hôm nay bị huỷ' — 雨天につき (do, vì) là cách viết trong thông báo mới đúng. に際して (nhân dịp), にあたって (khi) và に先立って (trước khi) đều không diễn tả nguyên nhân.",
    "voc": "雨天（うてん）：trời mưa； 運動会（うんどうかい）：hội thao； 中止（ちゅうし）：huỷ bỏ"
  },
  {
    "s": "友だちの 成功を 聞いて、うれしくて 泣か（　）いられませんでした。",
    "a": "ずには",
    "w": ["ないことには", "ないと", "ないままに"],
    "p": "V-ない + ずにはいられない",
    "exp": "'Nghe tin bạn thành công, vui quá nên không cầm được nước mắt' — 泣かずにはいられませんでした (không thể không khóc) mới đúng. ないことには (nếu không... thì không) là điều kiện, không hợp; ないと (泣かないといられませんでした) không tạo được mẫu 〜ずにはいられない; ないままに sai dạng sau 泣か.",
    "voc": "成功（せいこう）：thành công； うれしい：vui； 泣く（なく）：khóc"
  }
  ],
  star: [
  {
    "pre": "今年の 夏は、",
    "post": "。",
    "chunks": ["去年", "に比べて", "暑く", "なりました"],
    "p": "〜に比べて",
    "exp": "Thứ tự đúng: 去年 (năm ngoái) + に比べて (so với) + 暑く (nóng) + なりました (đã trở nên). に比べて phải đứng ngay sau danh từ so sánh 去年; 暑く là dạng liên dụng của 暑い, phải đứng trước なりました.",
    "voc": "夏（なつ）：mùa hè； 去年（きょねん）：năm ngoái； 暑い（あつい）：nóng"
  },
  {
    "pre": "子どもの 年齢",
    "post": "。",
    "chunks": ["に", "応じて", "本を", "えらびます"],
    "p": "〜に応じて",
    "exp": "Thứ tự đúng: 年齢 (tuổi) + に応じて (tuỳ theo) + 本を (sách) + えらびます (chọn). に応じて phải đứng ngay sau danh từ 年齢; 本を là tân ngữ phải đứng trước động từ えらびます.",
    "voc": "子ども（こども）：trẻ em； 年齢（ねんれい）：tuổi； 本（ほん）：sách； 選ぶ（えらぶ）：chọn"
  },
  {
    "pre": "駅で",
    "post": "、気をつける ように なりました。",
    "chunks": ["財布を", "落とした", "のを", "きっかけに"],
    "p": "〜をきっかけに",
    "exp": "Thứ tự đúng: 財布を (ví) + 落とした (đã đánh rơi) + のをきっかけに (nhân cơ hội đó). のをきっかけに phải đứng sau mệnh đề quá khứ 落とした; 財布を là tân ngữ của 落とした nên đứng trước nó.",
    "voc": "駅（えき）：nhà ga； 財布（さいふ）：ví tiền； 落とす（おとす）：đánh rơi； 気をつける：cẩn thận"
  },
  {
    "pre": "彼は 日本語が",
    "post": "。",
    "chunks": ["上手だ", "とはいえ", "漢字は", "まだ 苦手です"],
    "p": "〜とはいえ",
    "exp": "Thứ tự đúng: 上手だ (giỏi) + とはいえ (tuy... nhưng...) + 漢字は (kanji thì) + まだ苦手です (vẫn còn yếu). とはいえ nối hai mệnh đề trái ngược: giỏi tiếng Nhật nhưng yếu kanji.",
    "voc": "日本語（にほんご）：tiếng Nhật； 上手（じょうず）：giỏi； 漢字（かんじ）：chữ Hán； 苦手（にがて）：yếu, không giỏi"
  },
  {
    "pre": "この 問題は",
    "post": "。",
    "chunks": ["練習", "にすぎない", "ので", "心配しないで ください"],
    "p": "〜にすぎない",
    "exp": "Thứ tự đúng: 練習 (luyện tập) + にすぎない (chỉ là) + ので (vì) + 心配しないでください (đừng lo). にすぎない phải đứng ngay sau danh từ 練習; ので nối nguyên nhân với lời khuyên ở sau.",
    "voc": "問題（もんだい）：vấn đề, bài tập； 練習（れんしゅう）：luyện tập； 心配する（しんぱいする）：lo lắng"
  }
  ],
  bunsho: [
  {
    "intro": "つぎの 文章は、日本の 学校の 文化祭に ついて 書かれた 文章です。",
    "p": "わたしの 学校では、毎年 秋に 文化祭が あります。文化祭の 前は、みんな とても いそがしいです。（　1　）学生たちは、自分の クラスの 出し物を 決めなければ なりません。たとえば、ある クラスは 劇を します。（　2　）別の クラスは カフェを 開きます。準備は 大変ですが、（　3　）みんな 楽しんで います。当日は、たくさんの 人が 学校へ 来ます。（　4　）雨が 降ると、客は 少なく なります。（　5　）みんなで 雨の 日の 準備も して おきます。",
    "b": [
      {"a": "まず", "w": ["だから", "まだ", "もっと"]},
      {"a": "一方で", "w": ["たとえば", "つまり", "しかし"]},
      {"a": "それでも", "w": ["そのため", "だから", "それから"]},
      {"a": "しかし", "w": ["そのため", "つまり", "たとえば"]},
      {"a": "そのため", "w": ["しかし", "一方で", "たとえば"]}
    ],
    "exp": "(1)まず：'trước hết' học sinh phải quyết định tiết mục của lớp — mở đầu trình tự công việc. だから/まだ/もっと không mang nghĩa 'trước hết'. (2)一方で：'mặt khác' — lớp này diễn kịch, mặt khác lớp khác mở quán cà phê, hai ví dụ song song. たとえば/つまり không diễn tả đối chiếu song song; しかし mang nghĩa đối lập mạnh, không hợp khi liệt kê. (3)それでも：'dù vậy' — chuẩn bị vất vả nhưng mọi người vẫn vui vẻ. そのため/だから (vì thế) sai quan hệ nhân quả, それから (sau đó) sai trình tự. (4)しかし：'nhưng' — ngày hội đông người, nhưng nếu mưa thì khách ít đi, chuyển ý đối lập. そのため/つまり/たとえば đều không diễn tả đối lập. (5)そのため：'vì thế' — vì mưa làm khách ít đi nên mọi người chuẩn bị cả cho ngày mưa. しかし/一方で/たとえば đều sai quan hệ nhân quả.",
    "voc": "文化祭（ぶんかさい）：lễ hội văn hoá； 秋（あき）：mùa thu； 劇（げき）：vở kịch； カフェ：quán cà phê； 準備（じゅんび）：chuẩn bị； 当日（とうじつ）：ngày hôm đó； 客（きゃく）：khách"
  }
  ],
  readS: [
  {
    "p": "今日、近く の スーパー で セール を して いました。野菜 や 果物 が いつも より 安く なって いました。わたし は トマト と りんご を 買いました。レジ は とても こんで いて、二十分 も 待ちました。セール の 日 は、いつも たくさん の 人 が 来ます。来週 の セール も 楽しみ です。",
    "q": "今日、スーパー で 何 が ありました か。",
    "o": [
     "セール を して いて、野菜 や 果物 が 安く なって いました。",
     "店 が 休み でした。",
     "何 も 売って いませんでした。",
     "値段 が いつも より 高く なって いました。"
    ],
    "a": 0,
    "e": "Siêu thị giảm giá rau củ và trái cây.",
    "exp": "Bằng chứng: bài viết siêu thị đang giảm giá, rau và trái cây rẻ hơn mọi khi — đáp án 1 đúng. Cửa hàng nghỉ, không bán gì, giá cao hơn đều trái với bài.",
    "voc": "スーパー：siêu thị； セール：đợt giảm giá； 野菜（やさい）：rau； 果物（くだもの）：trái cây； 安い（やすい）：rẻ； レジ：quầy thu ngân； 混む（こむ）：đông đúc"
  },
  {
    "p": "今週の 土曜日、家族で 水族館へ 行きます。大人は 1200円、子どもは 600円です。わたしたちは 大人 2人と 子ども 2人です。水族館は 9時半に 開きます。水族館の 中で おべんとうを 食べる 予定です。わたしは イルカを 見るのが たのしみです。",
    "q": "入場料は ぜんぶで いくらですか。",
    "o": ["2400円です。", "3600円です。", "3000円です。", "1800円です。"],
    "a": 1,
    "calc": 1,
    "e": "文に「大人は 1200円、子どもは 600円」「大人 2人と 子ども 2人」とあります。1200×2+600×2=3600円です。",
    "exp": "Tính tổng: người lớn 1200円 × 2 người = 2400円, trẻ em 600円 × 2 người = 1200円, tổng 3600円. 2400円 chỉ tính người lớn, 3000円 và 1800円 đều tính sai. Bằng chứng: 「大人は 1200円、子どもは 600円」「大人 2人と 子ども 2人」。",
    "voc": "水族館（すいぞくかん）：thuỷ cung； 大人（おとな）：người lớn； 子ども（こども）：trẻ em； 入場料（にゅうじょうりょう）：vé vào cửa； イルカ：cá heo"
  },
  {
    "p": "田中さんは 毎朝 6時に 起きます。朝ごはんを 食べて、7時に 家を 出ます。会社まで 電車で 40分 かかります。会社は 9時に 始まります。田中さんは 昼休みに 公園を 散歩します。仕事が 終わるのは 6時です。帰りに スーパーへ 行って、晩ごはんの 材料を 買います。",
    "q": "田中さんは 会社まで 電車で 何分 かかりますか。",
    "o": ["40分 かかります。", "30分 かかります。", "60分 かかります。", "20分 かかります。"],
    "a": 0,
    "e": "文に「会社まで 電車で 40分 かかります」とあります。",
    "exp": "Bằng chứng: 「会社まで電車で40分かかります」nên 40 phút đúng. 30 phút, 60 phút và 20 phút không có trong bài.",
    "voc": "起きる（おきる）：thức dậy； 会社（かいしゃ）：công ty； 電車（でんしゃ）：tàu điện； 昼休み（ひるやすみ）：giờ nghỉ trưa； 散歩（さんぽ）：đi dạo"
  },
  {
    "p": "わたしの 町には 小さい 本屋が あります。その 本屋は 駅の 前に あります。本屋の 主人は とても 親切です。新しい 本が 入ると、主人に 教えて くれます。わたしは 毎週 日曜日に 本屋へ 行って、本を 買います。先週は 料理の 本を 買いました。今週は 旅行の 本を 買いたいと 思って います。",
    "q": "筆者は 今週、どんな 本を 買いたいと 思って いますか。",
    "o": ["料理の 本を 買いたいと 思って います。", "旅行の 本を 買いたいと 思って います。", "歴史の 本を 買いたいと 思って います。", "音楽の 本を 買いたいと 思って います。"],
    "a": 1,
    "e": "文に「今週は 旅行の 本を 買いたいと 思って います」とあります。",
    "exp": "Bằng chứng: 「今週は旅行の本を買いたいと思っています」nên sách du lịch đúng. Sách nấu ăn là sách đã mua tuần trước, sách lịch sử và sách âm nhạc không có trong bài.",
    "voc": "本屋（ほんや）：hiệu sách； 主人（しゅじん）：chủ cửa hàng； 親切（しんせつ）：tốt bụng； 料理（りょうり）：nấu ăn； 旅行（りょこう）：du lịch"
  },
  {
    "p": "山田さんは 先週、東京へ 出張に 行きました。東京では 三つの 会社を 訪問しました。月曜日に A社、火曜日に B社、水曜日に C社へ 行きました。C社の 人と 話して、新しい 仕事の 話が 決まりました。山田さんは 来月、もう 一度 東京へ 行く 予定です。",
    "q": "山田さんは 東京で 何社を 訪問しましたか。",
    "o": ["一社を 訪問しました。", "二社を 訪問しました。", "三社を 訪問しました。", "四社を 訪問しました。"],
    "a": 2,
    "e": "文に「東京では 三つの 会社を 訪問しました」とあります。",
    "exp": "Bằng chứng: 「東京では三つの会社を訪問しました」nên 3 công ty đúng. Bài còn liệt kê rõ A社 (thứ Hai), B社 (thứ Ba), C社 (thứ Tư) — tổng 3 công ty.",
    "voc": "出張（しゅっちょう）：đi công tác； 訪問する（ほうもんする）：đến thăm； 会社（かいしゃ）：công ty； 決まる（きまる）：được quyết định"
  }
  ],
  readM: [
  {
    "p": "わたし の 町 で は、毎年 秋 に 大きな 祭り が あります。祭り は 二日間 続き ます。祭り の 準備 は、町 の 人たち が 一週間前 から 始めます。みんな で 協力 して、祭り を 成功 させよう と して います。一日目 は、町 の みんな で 神社 まで 歩きます。子どもたち は 太鼓 を たたき、大人たち は 歌 を 歌います。夜 に なると、屋台 が たくさん 出て、焼きそば や 綿あめ を 売ります。わたし は 毎年、友だち と 焼きそば を 食べる の が 楽しみ です。二日目 は、朝 から 神社 で 式 が あります。その 後、みんな で 町 の 掃除 を します。祭り の 間、ふだん 話さない 人 と も 話す こと が できて、町 の 人たち の 仲 が よく なります。去年 は 雨 が ふって、祭り が 少し 短く なりました が、今年 は 晴れる と いい です。祭り が 終わる と、秋 が 深く なる の を 感じます。祭り の 後、町 の 人たち は 来年 の 祭り について 話します。わたし は 来年 も、祭り に 参加 したい と 思います。",
    "qs": [
     {
      "q": "祭り は 何日間 続き ます か。",
      "o": [
       "二日間 です。",
       "一日 です。",
       "三日間 です。",
       "一週間 です。"
      ],
      "a": 0,
      "e": "Lễ hội kéo dài 2 ngày."
     },
     {
      "q": "祭り の 一日目 に、夜 は 何 が あります か。",
      "o": [
       "花火 が あります。",
       "映画 を 見ます。",
       "屋台 が たくさん 出ます。",
       "コンサート が あります。"
      ],
      "a": 2,
      "e": "Buổi tối ngày đầu có nhiều quầy hàng."
     },
     {
      "q": "筆者 は 祭り について どう 思って います か。",
      "o": [
       "祭り は つまらない と 思います。",
       "祭り で 町 の 人たち の 仲 が よく なる の が よい と 思います。",
       "祭り は お金 が かかる だけ だ と 思います。",
       "祭り は うるさい だけ だ と 思います。"
      ],
      "a": 1,
      "e": "Tác giả cho rằng lễ hội giúp người trong thị trấn thân thiết hơn."
     }
    ],
    "exp": "Q1: bằng chứng ở đầu bài, lễ hội kéo dài 二日間 (2 ngày); 1 ngày, 3 ngày và 1 tuần đều sai. Q2: bằng chứng buổi tối ngày đầu có nhiều quầy hàng 屋台 (bán mì xào, kẹo bông); pháo hoa, xem phim và hoà nhạc không có trong bài. Q3: bằng chứng tác giả viết trong lễ hội có thể nói chuyện với người thường không nói chuyện, quan hệ trong thị trấn tốt lên — nên 'lễ hội giúp mọi người thân thiết hơn' đúng; chán, tốn tiền, ồn ào đều trái với bài.",
    "voc": "祭り（まつり）：lễ hội； 神社（じんじゃ）：đền thờ； 屋台（やたい）：quầy hàng； 太鼓（たいこ）：trống； 仲（なか）：quan hệ, tình cảm"
  },
  {
    "p": "小林さんは 先月、新しい 家へ ひっこしました。新しい 家は 駅から 歩いて 15分です。古い 家は 駅から 5分でしたが、家賃が 高かったです。新しい 家は 家賃が 安いですが、駅から 遠いです。小林さんは 毎朝 6時半に 家を 出て、駅まで 歩きます。歩くのは 15分 ぐらい かかります。はじめは 大変でしたが、今は なれました。朝の 散歩が 気持ちいいと 思う ように なりました。新しい 家の 近くには 大きい 公園が あります。小林さんは 休みの 日に 公園で 本を 読むのが 好きです。公園には 子どもが たくさん いて、にぎやかです。小林さんは 新しい 家での 生活に まんぞくして います。来月は 友だちを 家に よんで、ひっこしの パーティーを する 予定です。",
    "qs": [
     {
      "q": "新しい 家は 駅から 歩いて 何分 です か。",
      "o": ["5分 です。", "10分 です。", "15分 です。", "20分 です。"],
      "a": 2,
      "e": "文に「新しい 家は 駅から 歩いて 15分です」とあります。"
     },
     {
      "q": "小林さんは どうして 新しい 家へ ひっこしました か。",
      "o": ["家賃が 安いからです。", "駅に 近いからです。", "家が 大きいからです。", "公園が ないからです。"],
      "a": 0,
      "e": "文に「古い 家は 駅から 5分でしたが、家賃が 高かったです」「新しい 家は 家賃が 安いです」とあります。"
     },
     {
      "q": "小林さんは 新しい 家での 生活に ついて どう 思って います か。",
      "o": ["まんぞくして います。", "ふまんです。", "さびしいです。", "つまらないです。"],
      "a": 0,
      "e": "文に「小林さんは 新しい 家での 生活に まんぞくして います」とあります。"
     }
    ],
    "exp": "Q1: bằng chứng 「新しい家は駅から歩いて15分です」; 5 phút là nhà cũ, 10 phút và 20 phút không có trong bài. Q2: bằng chứng nhà cũ tiền thuê cao, nhà mới tiền thuê rẻ — nên 'vì tiền thuê rẻ' đúng; gần ga sai (nhà mới xa ga hơn), nhà lớn và không có công viên đều không có trong bài. Q3: bằng chứng 「新しい家での生活にまんぞくしています」nên 'hài lòng' đúng; không hài lòng, buồn, chán đều trái với bài.",
    "voc": "ひっこし：chuyển nhà； 家賃（やちん）：tiền thuê nhà； 安い（やすい）：rẻ； 散歩（さんぽ）：đi dạo； まんぞくする：hài lòng； にぎやか：nhộn nhịp"
  },
  {
    "p": "佐藤さんは 去年から 毎週 日曜日に ジョギングを して います。はじめは 10分 走ると、とても 疲れました。でも、佐藤さんは あきらめずに、毎週 続けました。半年 後には、30分 走る ことが できる ように なりました。今は 1時間 走っても、あまり 疲れません。佐藤さんは ジョギングの おかげで、体重が 5キロ 減りました。体の 調子も よく なりました。佐藤さんは 友だちも ジョギングに さそいました。友だちの 一人は はじめ いやがって いましたが、今は 一緒に 走って います。来月、二人は 初めて マラソンに 出る 予定です。マラソンは 10キロ です。佐藤さんは 「完走したいです」と 話して います。",
    "qs": [
     {
      "q": "佐藤さんは 今、どのくらい 走る ことが できます か。",
      "o": ["10分 走る ことが できます。", "30分 走る ことが できます。", "1時間 走る ことが できます。", "2時間 走る ことが できます。"],
      "a": 2,
      "e": "文に「今は 1時間 走っても、あまり 疲れません」とあります。"
     },
     {
      "q": "ジョギングの おかげで、佐藤さんの 体重は どう なりました か。",
      "o": ["5キロ 増えました。", "5キロ 減りました。", "10キロ 減りました。", "変わりませんでした。"],
      "a": 1,
      "e": "文に「体重が 5キロ 減りました」とあります。"
     },
     {
      "q": "来月、佐藤さんは 何を する 予定 です か。",
      "o": ["一人で マラソンに 出ます。", "友だちと マラソンに 出ます。", "ジョギングを やめます。", "新しい 靴を 買います。"],
      "a": 1,
      "e": "文に「来月、二人は 初めて マラソンに 出る 予定です」とあります。"
     }
    ],
    "exp": "Q1: bằng chứng 「今は1時間走っても、あまり疲れません」nên 1 giờ đúng; 10 phút là lúc mới bắt đầu, 30 phút là sau nửa năm, 2 giờ không có trong bài. Q2: bằng chứng 「体重が5キロ減りました」nên giảm 5 kg đúng; tăng 5 kg trái ngược, giảm 10 kg sai số, không đổi cũng sai. Q3: bằng chứng 「来月、二人は初めてマラソンに出る予定です」— 二人 là佐藤さん và bạn, nên 'cùng bạn tham gia marathon' đúng; một mình sai, bỏ chạy bộ và mua giày mới không có trong bài.",
    "voc": "ジョギング：chạy bộ； 疲れる（つかれる）：mệt； 体重（たいじゅう）：cân nặng； 減る（へる）：giảm； 調子（ちょうし）：tình trạng； マラソン：marathon； 完走（かんそう）：chạy đến đích"
  }
  ],
  tougou: [
  {
    "p1": "最近、リモートワークを する 人が 増えて います。わたしは リモートワークは いいと 思います。通勤の 時間が なくなるので、その 時間を 仕事や 家族の ために 使う ことが できます。また、自分の ペースで 仕事が できるので、集中しやすいです。会社へ 行かなくても、インターネットで 会議が できます。わたしは これからも リモートワークを 続けたいです。",
    "p2": "しかし、リモートワークには 問題も あります。家で 仕事を すると、同僚と 話す 機会が 少なく なります。新しい 社員は、仕事を 教えて もらう のが 難しく なります。また、家では 仕事と 生活の 区別が つきにくいです。わたしは 週に 二日は 会社へ 行って、同僚と 話す 時間を 大切に したいと 思います。",
    "qs": [
     {
      "q": "Aと Bに 共通している 考えは 何ですか。",
      "o": ["リモートワークを やめたいと 思って います。", "リモートワークを 続けたいと 思って います。", "毎日 会社へ 行きたいと 思って います。", "通勤が 好きだと 思って います。"],
      "a": 1,
      "e": "A「これからも リモートワークを 続けたいです」、B「週に 二日は 会社へ 行って」"
     },
     {
      "q": "Bは どうして 週に 二日は 会社へ 行きたいのですか。",
      "o": ["通勤が 好きだからです。", "同僚と 話す 時間を 大切に したいからです。", "家で 仕事が できないからです。", "新しい 社員に 会いたくないからです。"],
      "a": 1,
      "e": "文に「週に 二日は 会社へ 行って、同僚と 話す 時間を 大切に したいと 思います」とあります。"
     }
    ],
    "exp": "Q1: A viết 「これからもリモートワークを続けたいです」; B muốn đến công ty 2 ngày/tuần, nghĩa là các ngày còn lại vẫn làm việc từ xa — cả hai đều muốn tiếp tục làm việc từ xa. 'Muốn bỏ', 'muốn đến công ty mỗi ngày' và 'thích đi làm xa' đều trái với cả hai bài. Q2: bằng chứng ở cuối bài B: 「週に二日は会社へ行って、同僚と話す時間を大切にしたいと思います」nên 'muốn trân trọng thời gian nói chuyện với đồng nghiệp' đúng; thích đi làm xa, không làm việc được ở nhà, không muốn gặp nhân viên mới đều không có trong bài.",
    "voc": "リモートワーク：làm việc từ xa； 通勤（つうきん）：đi làm； 集中する（しゅうちゅうする）：tập trung； 同僚（どうりょう）：đồng nghiệp； 区別（くべつ）：phân biệt； 大切にする（たいせつにする）：trân trọng"
  }
  ],
  shuchou: [
  {
    "p": "わたしは 子どもの ころ、失敗する のが とても こわかったです。テストで 悪い 点を 取ると、親に しかられる と 思って、テストの 紙を かくした ことも あります。でも、ある 日、学校の 先生が こう 言いました。「失敗は 悪い ことでは ありません。失敗から 学ぶ ことが 大切です。」その 言葉を 聞いて、わたしは 少し 考えが 変わりました。高校生の とき、わたしは 英語の スピーチコンテストに 出ました。何週間も 練習しましたが、本番で 緊張して、言葉を 忘れて しまいました。結果は 最下位でした。とても くやしかったです。しかし、先生は 「来年も 出てみなさい」と 言って くれました。わたしは 自分の 弱い 点を 知る ことが できました。発音も、話す 速さも、まだまだでした。次の 一年、わたしは 毎日 英語の 音読を 続けました。次の 年、わたしは もう 一度 コンテストに 出ました。今度は 落ち着いて 話す ことが できました。結果は 3位でした。優勝は できませんでしたが、前の 年より ずっと よかったです。わたしは 失敗を 恐れずに、挑戦する ことの 大切さを 学びました。今でも、新しい ことに 挑戦するときは 緊張します。でも、「失敗しても、そこから 学べば いい」と 自分に 言い聞かせて います。失敗は 成功の ための 一歩だと、わたしは 思います。",
    "qs": [
     {
      "q": "筆者は 子どもの ころ、どうして テストの 紙を かくしましたか。",
      "o": ["親に ほめられると 思ったからです。", "親に しかられると 思ったからです。", "先生に 見せたかったからです。", "友だちに 見せたくなかったからです。"],
      "a": 1,
      "e": "文に「テストで 悪い 点を 取ると、親に しかられる と 思って、テストの 紙を かくした ことも あります」とあります。"
     },
     {
      "q": "筆者は スピーチコンテストで 失敗した 後、どうしましたか。",
      "o": ["英語を やめました。", "毎日 英語の 音読を 続けました。", "先生に 文句を 言いました。", "コンテストに 出るのを やめました。"],
      "a": 1,
      "e": "文に「次の 一年、わたしは 毎日 英語の 音読を 続けました」とあります。"
     },
     {
      "q": "筆者の 考えとして 正しいものは どれですか。",
      "o": ["失敗は 悪い ことだ。", "失敗は 成功の ための 一歩だ。", "失敗したら 挑戦しては いけない。", "失敗は 忘れる べきだ。"],
      "a": 1,
      "e": "文に「失敗は 成功の ための 一歩だと、わたしは 思います」とあります。"
     }
    ],
    "exp": "Q1: bằng chứng ở đầu bài: lấy điểm kém thì sợ bị bố mẹ mắng nên giấu bài kiểm tra — 'sợ bị bố mẹ mắng' đúng; được khen, muốn cho thầy xem, không muốn cho bạn xem đều trái với bài. Q2: bằng chứng sau thất bại, tác giả biết được điểm yếu của mình và luyện đọc to tiếng Anh mỗi ngày trong một năm, rồi năm sau thi lại — 'luyện đọc to mỗi ngày' đúng; bỏ tiếng Anh, phàn nàn với thầy, bỏ thi đều trái với bài. Q3: bằng chứng ở cuối bài: 「失敗は成功のための一歩だと思います」— 'thất bại là một bước tới thành công' đúng; thất bại là xấu, thất bại thì không được thử thách nữa, nên quên thất bại đều trái với quan điểm của tác giả.",
    "voc": "失敗（しっぱい）：thất bại； 恐れる（おそれる）：sợ hãi； 挑戦する（ちょうせんする）：thử thách； スピーチコンテスト：cuộc thi hùng biện； 緊張する（きんちょうする）：căng thẳng； 優勝（ゆうしょう）：vô địch, giành giải nhất"
  }
  ],
  info: [
  {
    "tpl": "<b>スポーツジムの お知らせ</b><br>11月の 教室の 時間です。<br><table class=\"jl-tbl\"><tr><th>教室</th><th>曜日</th><th>時間</th><th>料金</th></tr><tr><td>ヨガ</td><td>火曜日と木曜日</td><td>10時〜11時</td><td>1回 1000円</td></tr><tr><td>水泳</td><td>水曜日と土曜日</td><td>14時〜15時</td><td>1回 1200円</td></tr><tr><td>ダンス</td><td>金曜日</td><td>19時〜20時</td><td>1回 800円</td></tr><tr><td>ジョギング</td><td>日曜日</td><td>7時〜8時</td><td>無料</td></tr></table>教室は 予約が ひつようです。予約は 前日までに してください。",
    "inst": "つぎのスポーツジムのお知らせを見て、質問に答えてください。答えは1・2・3・4から、いちばんいいものを一つえらんでください。",
    "q": "今日は 4日 (水曜日) です。明日、ヨガの 教室に 行きたいです。何時からですか。料金は いくらですか。",
    "opts": ["10時から、1000円", "11時から、1000円", "14時から、1200円", "19時から、800円"],
    "ans": 0,
    "exp": "Hôm nay là thứ Tư ngày 4, ngày mai là thứ Năm ngày 5 — yoga học thứ Ba và thứ Năm, từ 10 giờ đến 11 giờ, 1000円 một buổi, nên 'từ 10 giờ, 1000円' đúng. 11 giờ là giờ kết thúc, không phải giờ bắt đầu; 14 giờ/1200円 là lớp bơi, 19 giờ/800円 là lớp nhảy.",
    "voc": "スポーツジム：phòng tập thể thao； ヨガ：yoga； 教室（きょうしつ）：lớp học； 予約（よやく）：đặt trước； 料金（りょうきん）：phí, lệ phí"
  },
  {
    "tpl": "<b>料理教室の お知らせ</b><br>12月の 教室の 予定です。<br><table class=\"jl-tbl\"><tr><th>教室</th><th>日</th><th>時間</th><th>定員</th></tr><tr><td>和食</td><td>7日 (月曜日)</td><td>10時〜12時</td><td>10人</td></tr><tr><td>洋食</td><td>12日 (土曜日)</td><td>14時〜16時</td><td>8人</td></tr><tr><td>パン</td><td>20日 (日曜日)</td><td>10時〜12時</td><td>12人</td></tr><tr><td>お菓子</td><td>27日 (日曜日)</td><td>14時〜16時</td><td>6人</td></tr></table>申し込みは 教室の 3日前までに してください。材料費は 1500円です。",
    "inst": "つぎの料理教室のお知らせを見て、質問に答えてください。答えは1・2・3・4から、いちばんいいものを一つえらんでください。",
    "q": "今日は 4日 (金曜日) です。和食の 教室に 行きたいです。申し込みは 何日までに すれば いいですか。",
    "opts": ["4日まで", "5日まで", "6日まで", "7日まで"],
    "ans": 0,
    "exp": "Lớp món Nhật (和食) học ngày 7 tháng 12 (thứ Hai). Phải đăng kí trước 3 ngày, tức là trước ngày 7 ba ngày: 7 − 3 = 4, nên hạn đăng kí là ngày 4. Ngày 5 và ngày 6 đều muộn hơn hạn, ngày 7 là ngày học nên đã quá hạn. Kiểm tra lịch tháng 12 năm 2026: ngày 7 là thứ Hai, ngày 4 là thứ Sáu, khớp với đề bài.",
    "voc": "料理教室（りょうりきょうしつ）：lớp học nấu ăn； 和食（わしょく）：món Nhật； 申し込み（もうしこみ）：đăng kí； 定員（ていいん）：số người tối đa； 材料費（ざいりょうひ）：phí nguyên liệu"
  }
  ]
};

/* ----- Test 4 ----- */
window.WRITTEN_N2_SET4 = {
  yomi: [
  {
    "s": "社会 の 変化 に ついて 考える こと が 大切 です。",
    "t": "社会",
    "r": "しゃかい",
    "w": ["しゃか", "しゃがい", "さかい"],
    "exp": "社会 đọc là しゃかい（社 しゃ、会 かい）。しゃか thiếu âm い、しゃがい đọc 会 thành がい là sai、さかい đọc 社 thành さ là sai。",
    "voc": "社会（しゃかい）：xã hội； 変化（へんか）：thay đổi； 考える（かんがえる）：suy nghĩ； 大切（たいせつ）：quan trọng"
  },
  {
    "s": "新しい 法律 は、生活 に 大きな 影響 を 与えます。",
    "t": "影響",
    "r": "えいきょう",
    "w": ["えいきょ", "えいぎょう", "えいきょうう"],
    "exp": "影響 đọc là えいきょう（影 えい、響 きょう）。えいきょ thiếu âm う、えいぎょう đọc 響 thành ぎょう là sai、えいきょうう thêm う thừa nên sai。",
    "voc": "影響（えいきょう）：ảnh hưởng； 法律（ほうりつ）：luật pháp； 生活（せいかつ）：cuộc sống； 与える（あたえる）：gây ra, mang lại"
  },
  {
    "s": "困った こと が あれば、いつでも 私 に 相談 して ください。",
    "t": "相談",
    "r": "そうだん",
    "w": ["そうたん", "そうだんん", "そうだ"],
    "exp": "相談 đọc là そうだん（相 そう、談 だん）。そうたん đọc 談 thành たん là sai、そうだんん thêm ん thừa、そうだ thiếu âm ん nên sai。",
    "voc": "相談（そうだん）：bàn bạc, hỏi ý kiến； 困る（こまる）：gặp khó khăn； いつでも：bất cứ lúc nào"
  },
  {
    "s": "事故 の 原因 を 調べる ため に、警察 が 来ました。",
    "t": "原因",
    "r": "げんいん",
    "w": ["げんにん", "がんいん", "げんいんん"],
    "exp": "原因 đọc là げんいん（原 げん、因 いん）。げんにん đọc 因 thành にん là sai、がんいん đọc 原 thành がん là sai、げんいんん thêm ん thừa nên sai。",
    "voc": "原因（げんいん）：nguyên nhân； 事故（じこ）：tai nạn； 調べる（しらべる）：điều tra； 警察（けいさつ）：cảnh sát"
  },
  {
    "s": "この 国 の 経済 は、去年 よりも よく なって います。",
    "t": "経済",
    "r": "けいざい",
    "w": ["けいさい", "けいざいん", "けいせい"],
    "exp": "経済 đọc là けいざい（経 けい、済 ざい）。けいさい đọc 済 thành さい là sai、けいざいん thêm ん thừa、けいせい đọc 済 thành せい là sai。",
    "voc": "経済（けいざい）：kinh tế； 去年（きょねん）：năm ngoái； 国（くに）：đất nước"
  }
  ],
  hyoki: [
  {
    "s": "私 は その 意見 に はんたい です。",
    "h": "はんたい",
    "k": "反対",
    "w": ["反隊", "半対", "反代"],
    "exp": "はんたい viết là 反対（反 はん、対 たい）。反隊 dùng 隊（đội）sai chữ、半対 dùng 半 sai chữ、反代 dùng 代 sai chữ。",
    "voc": "反対（はんたい）：phản đối； 意見（いけん）：ý kiến； 私（わたし）：tôi"
  },
  {
    "s": "夏休み に 家族 と りょこう に 行きます。",
    "h": "りょこう",
    "k": "旅行",
    "w": ["旅高", "流行", "旅考"],
    "exp": "りょこう viết là 旅行（旅 りょ、行 こう）。旅高 dùng 高 sai chữ、流行 là りゅうこう（thịnh hành）sai nghĩa、旅考 dùng 考 sai chữ。",
    "voc": "旅行（りょこう）：du lịch； 夏休み（なつやすみ）：kì nghỉ hè； 家族（かぞく）：gia đình"
  },
  {
    "s": "あした の 朝 9時 から かいぎ が あります。",
    "h": "かいぎ",
    "k": "会議",
    "w": ["会義", "会技", "会談"],
    "exp": "かいぎ viết là 会議（会 かい、議 ぎ）。会義 dùng 義 sai chữ、会技 dùng 技 sai chữ、会談 đọc là かいだん（buổi đàm phán）không phải かいぎ nên sai。",
    "voc": "会議（かいぎ）：cuộc họp； 朝（あさ）：buổi sáng"
  },
  {
    "s": "この 仕事 に は、特別 な 技術 が ひつよう です。",
    "h": "ひつよう",
    "k": "必要",
    "w": ["必用", "必要力", "必定"],
    "exp": "ひつよう viết là 必要（必 ひつ、要 よう）。必用 dùng 用 sai chữ、必要力 thêm 力 thừa、必定 đọc là ひつじょう（nhất định）không phải ひつよう nên sai。",
    "voc": "必要（ひつよう）：cần thiết； 特別（とくべつ）：đặc biệt； 技術（ぎじゅつ）：kĩ thuật"
  },
  {
    "s": "子ども の あんぜん を 守る こと が 大切 です。",
    "h": "あんぜん",
    "k": "安全",
    "w": ["安金", "安全力", "安正"],
    "exp": "あんぜん viết là 安全（安 あん、全 ぜん）。安金 dùng 金 sai chữ、安全力 thêm 力 thừa、安正 dùng 正 sai chữ。",
    "voc": "安全（あんぜん）：an toàn； 子ども：trẻ em； 守る（まもる）：bảo vệ"
  }
  ],
  ctx: [
  {
    "s": "この 仕事 に は、同じ 分野 で の （　）が 必要 です。",
    "a": "けいけん",
    "w": ["きかい", "じかん", "きぼう"],
    "exp": "Công việc này cần có けいけん（kinh nghiệm）trong cùng lĩnh vực。きかい（cơ hội）、じかん（thời gian）、きぼう（hi vọng）đều không hợp nghĩa với câu。",
    "voc": "経験（けいけん）：kinh nghiệm； 分野（ぶんや）：lĩnh vực； 必要（ひつよう）：cần thiết"
  },
  {
    "s": "一生懸命 勉強 した （　）、試験 に 合格 しました。",
    "a": "けっか",
    "w": ["りゆう", "もくてき", "きかい"],
    "exp": "Học chăm chỉ, けっか（kết quả là）đã đỗ kì thi。りゆう（lí do）không hợp vì câu nói về kết quả、もくてき（mục đích）và きかい（cơ hội）đều sai nghĩa。",
    "voc": "結果（けっか）：kết quả； 一生懸命（いっしょうけんめい）：hết sức chăm chỉ； 合格（ごうかく）：đỗ, đậu"
  },
  {
    "s": "夏休み の 旅行 の （　）を 立てました。",
    "a": "けいかく",
    "w": ["じゅんび", "よやく", "きろく"],
    "exp": "Đã lập けいかく（kế hoạch）cho chuyến du lịch hè。じゅんび（chuẩn bị）không đi với 立てる、よやく（đặt trước）và きろく（ghi chép）đều sai nghĩa。",
    "voc": "計画（けいかく）：kế hoạch； 立てる（たてる）：lập, dựng； 夏休み（なつやすみ）：kì nghỉ hè； 旅行（りょこう）：du lịch"
  },
  {
    "s": "この 機械 の 使い方 の （　）を 教えて ください。",
    "a": "ほうほう",
    "w": ["ほうしん", "ほうこう", "ほうげん"],
    "exp": "使い方のほうほう（cách dùng, phương pháp sử dụng）là cách nói tự nhiên。ほうしん（phương châm）、ほうこう（phương hướng）、ほうげん（phương ngữ）đều không hợp với 使い方。",
    "voc": "方法（ほうほう）：phương pháp, cách； 使い方（つかいかた）：cách dùng； 機械（きかい）：máy móc； 教える（おしえる）：dạy, chỉ"
  },
  {
    "s": "彼 が 会社 を やめた （　）を 教えて ください。",
    "a": "りゆう",
    "w": ["きかい", "けいかく", "じかん"],
    "exp": "Hỏi りゆう（lí do）anh ấy nghỉ việc là tự nhiên。きかい（cơ hội）、けいかく（kế hoạch）、じかん（thời gian）đều không hợp nghĩa với やめた。",
    "voc": "理由（りゆう）：lí do； やめる：nghỉ việc, bỏ； 会社（かいしゃ）：công ty"
  },
  {
    "s": "先生 の （　）を 聞いて、やっと 分かりました。",
    "a": "せつめい",
    "w": ["れんらく", "しょうかい", "じゅんび"],
    "exp": "Nghe せつめい（lời giải thích）của thầy rồi mới hiểu。れんらく（liên lạc）và しょうかい（giới thiệu）không đi với 聞いて trong nghĩa này、じゅんび（chuẩn bị）không phải là thứ có thể nghe, nên không thể nói 先生のじゅんびを聞いて。",
    "voc": "説明（せつめい）：giải thích； 先生（せんせい）：thầy cô； 準備（じゅんび）：chuẩn bị； やっと：cuối cùng, mãi mới"
  },
  {
    "s": "雨 の 日 は、道 が すべりやすい ので、（　）して ください。",
    "a": "ちゅうい",
    "w": ["きぼう", "れんらく", "じゅんび"],
    "exp": "Trời mưa đường trơn nên phải ちゅういする（chú ý, cẩn thận）。きぼうする（hi vọng）、れんらくする（liên lạc）、じゅんびする（chuẩn bị）đều không hợp với câu cảnh báo này。",
    "voc": "注意（ちゅうい）：chú ý, cẩn thận； すべりやすい：dễ trơn trượt； 道（みち）：đường"
  }
  ],
  syn: [
  {
    "s": "今週 は 仕事 が いそがしい ので、休む 時間 が ありません。",
    "t": "いそがしい",
    "a": "たぼう",
    "w": ["ひま", "ゆとり", "へいわ"],
    "exp": "いそがしい（bận rộn）gần nghĩa nhất với たぼう（多忙：bận rộn）。ひま（rảnh rỗi）ngược nghĩa、ゆとり（thong thả, dư dả）và へいわ（hòa bình）không phải từ đồng nghĩa。",
    "voc": "忙しい（いそがしい）：bận rộn； 多忙（たぼう）：bận rộn； 休む（やすむ）：nghỉ ngơi"
  },
  {
    "s": "春 に なると、この 公園 は 花 が 多くて、とても きれい です。",
    "t": "きれい",
    "a": "うつくしい",
    "w": ["きたない", "くらい", "おそろしい"],
    "exp": "きれい（đẹp）gần nghĩa nhất với うつくしい（đẹp, xinh đẹp）。きたない（bẩn）ngược nghĩa、くらい（tối）và おそろしい（đáng sợ）không liên quan nên sai。",
    "voc": "きれい：đẹp, sạch； 美しい（うつくしい）：đẹp； 公園（こうえん）：công viên； 花（はな）：hoa"
  },
  {
    "s": "田中さん は 仕事 が はやい ので、いつも 早く 終わります。",
    "t": "はやい",
    "a": "すばやい",
    "w": ["おそい", "ゆっくり", "ていねい"],
    "exp": "はやい（nhanh）gần nghĩa nhất với すばやい（nhanh nhẹn, mau lẹ）。おそい（chậm）ngược nghĩa、ゆっくり（chậm rãi）ngược nghĩa、ていねい（cẩn thận, lịch sự）không liên quan nên sai。",
    "voc": "速い（はやい）：nhanh； 素早い（すばやい）：nhanh nhẹn； 終わる（おわる）：kết thúc, xong"
  },
  {
    "s": "健康 は 何 よりも たいせつ です。",
    "t": "たいせつ",
    "a": "だいじ",
    "w": ["ふよう", "むだ", "じゃま"],
    "exp": "たいせつ（quan trọng, quý giá）gần nghĩa nhất với だいじ（quan trọng, đáng quý）。ふよう（không cần）、むだ（lãng phí）、じゃま（vướng víu, phiền）đều mang nghĩa phủ định hoặc không liên quan nên sai。",
    "voc": "大切（たいせつ）：quan trọng, quý giá； 大事（だいじ）：quan trọng； 健康（けんこう）：sức khỏe"
  },
  {
    "s": "友だち と 別れる の は、とても かなしい です。",
    "t": "かなしい",
    "a": "さびしい",
    "w": ["うれしい", "たのしい", "あかるい"],
    "exp": "かなしい（buồn）gần nghĩa nhất với さびしい（buồn, cô đơn）trong ngữ cảnh chia tay bạn bè。うれしい（vui）、たのしい（vui vẻ）、あかるい（sáng sủa, vui tươi）đều ngược nghĩa nên sai。",
    "voc": "悲しい（かなしい）：buồn； さびしい：buồn, cô đơn； 別れる（わかれる）：chia tay； 友だち（ともだち）：bạn bè"
  }
  ],
  yoho: [
  {
    "t": "つめたい",
    "s": ["つめたい 水 を 飲みました。", "つめたい お湯 を 飲みました。", "つめたい 火 に さわりました。", "つめたい 太陽 が のぼりました。"],
    "a": 0,
    "exp": "つめたい（lạnh, lạnh buốt khi chạm vào）chỉ dùng cho thứ lạnh như nước lạnh。お湯（nước nóng）、火（lửa）、太陽（mặt trời）đều nóng nên không thể nói つめたい。",
    "voc": "冷たい（つめたい）：lạnh, lạnh buốt； 水（みず）：nước； お湯（おゆ）：nước nóng； 火（ひ）：lửa； 太陽（たいよう）：mặt trời"
  },
  {
    "t": "あたたかい",
    "s": ["あたたかい お茶 を 飲みました。", "あたたかい 氷 を 食べました。", "あたたかい 雪 が ふりました。", "あたたかい アイスクリーム を 食べました。"],
    "a": 0,
    "exp": "あたたかい（ấm）chỉ dùng cho thứ ấm như trà nóng。氷（đá）、雪（tuyết）、アイスクリーム（kem）đều lạnh nên không thể nói あたたかい。",
    "voc": "暖かい（あたたかい）：ấm áp； お茶（おちゃ）：trà； 氷（こおり）：đá, nước đá； 雪（ゆき）：tuyết"
  },
  {
    "t": "ひろい",
    "s": ["ひろい 糸 を 買いました。", "ひろい 鍵 を なくしました。", "ひろい 公園 で 遊びました。", "ひろい ペン を 買いました。"],
    "a": 2,
    "exp": "ひろい（rộng）chỉ dùng cho nơi chốn rộng như công viên。糸（sợi chỉ）、鍵（chìa khóa）、ペン（cây bút）đều là vật nhỏ, không nói ひろい。",
    "voc": "広い（ひろい）：rộng； 公園（こうえん）：công viên； 糸（いと）：sợi chỉ； 鍵（かぎ）：chìa khóa； ペン：cây bút"
  },
  {
    "t": "おもい",
    "s": ["おもい 羽 が 落ちました。", "おもい 荷物 を 持ちました。", "おもい 紙 を 買いました。", "おもい 風船 を 持ちました。"],
    "a": 1,
    "exp": "おもい（nặng）chỉ dùng cho thứ nặng như hành lí。羽（lông vũ）rất nhẹ、紙（giấy）một tờ rất nhẹ、風船（bóng bay）cũng nhẹ nên không thể nói おもい。",
    "voc": "重い（おもい）：nặng； 荷物（にもつ）：hành lí； 羽（はね）：lông vũ； 風船（ふうせん）：bóng bay"
  },
  {
    "t": "からい",
    "s": ["からい お茶 を 飲みました。", "からい ケーキ を 食べました。", "からい 牛乳 を 飲みました。", "からい カレー を 食べました。"],
    "a": 3,
    "exp": "からい（cay）chỉ dùng cho món ăn cay như cà ri。お茶（trà）、ケーキ（bánh ngọt）、牛乳（sữa）đều không cay nên không thể nói からい。",
    "voc": "辛い（からい）：cay； カレー：cà ri； お茶（おちゃ）：trà； ケーキ：bánh ngọt； 牛乳（ぎゅうにゅう）：sữa"
  }
  ],
  kotoba: [
  {
    "s": "この 会社 は、（　）な 仕事 が 多い です。",
    "a": "こくさいてき",
    "w": ["こくさいせい", "こくさいか", "こくさいじょう"],
    "exp": "国際的な仕事（công việc mang tính quốc tế）：hậu tố 〜的 tạo tính từ な。〜性（tính chất）、〜化（hóa thành）、〜上（về mặt）đều không tạo được tính từ な đứng trước danh từ 仕事 trong câu này。",
    "voc": "国際的（こくさいてき）：mang tính quốc tế； 国際（こくさい）：quốc tế； 仕事（しごと）：công việc"
  },
  {
    "s": "会社 は、書類 の 管理 を 電子（　）しました。",
    "a": "か",
    "w": ["てき", "せい", "じょう"],
    "exp": "電子化しました（đã số hóa, chuyển sang dạng điện tử）：hậu tố 〜化 biến danh từ thành động từ する。電子てき・電子せい・電子じょう đều không tạo thành từ có nghĩa trong câu này。",
    "voc": "電子化（でんしか）：số hóa； 電子（でんし）：điện tử； 書類（しょるい）：giấy tờ, tài liệu； 管理（かんり）：quản lí"
  },
  {
    "s": "この 薬 は、子ども に対する （　）が 高い です。",
    "a": "あんぜんせい",
    "w": ["あんぜんてき", "あんぜんか", "あんぜんじょう"],
    "exp": "子どもに対する安全性が高い（tính an toàn đối với trẻ em cao）：hậu tố 〜性 tạo danh từ chỉ tính chất, đi với が高い。〜的 tạo tính từ nên không đi với が、〜化 và 〜上 đều sai trong cấu trúc này。",
    "voc": "安全性（あんぜんせい）：tính an toàn； 安全（あんぜん）：an toàn； 薬（くすり）：thuốc； 子ども：trẻ em"
  },
  {
    "s": "4月 に 友だち と （　）に 行きました。",
    "a": "はなみ",
    "w": ["はなよみ", "はなつみ", "はなあそび"],
    "exp": "花見（ngắm hoa anh đào）là từ ghép có thật, tháng 4 đi ngắm hoa là tự nhiên。はなよみ・はなつみ・はなあそび đều không phải từ tiếng Nhật có nghĩa nên sai。",
    "voc": "花見（はなみ）：ngắm hoa； 4月（しがつ）：tháng 4； 友だち（ともだち）：bạn bè"
  },
  {
    "s": "電車 の 中 で 読む ため に、（　）を 買いました。",
    "a": "よみもの",
    "w": ["よみほん", "よみかみ", "よみこと"],
    "exp": "読み物（sách, thứ để đọc）là từ ghép Vます＋物 có thật。よみほん・よみかみ・よみこと đều không phải từ tiếng Nhật nên sai。",
    "voc": "読み物（よみもの）：sách, thứ để đọc； 電車（でんしゃ）：tàu điện； 買う（かう）：mua"
  }
  ],
  g1dlg: [
  {
    "d": ["山田さんは、りょうりが 上手ですね。", "ええ、りょうりに（　）、だれにも まけませんよ。"],
    "a": "かけては",
    "w": ["かけると", "かければ", "かけて いる"],
    "p": "〜にかけては",
    "exp": "りょうりにかけては（nói về nấu ăn thì）là mẫu diễn đạt so sánh, nhấn mạnh lĩnh vực mà mình giỏi nhất。かけると・かければ là dạng điều kiện, không tạo được mẫu này；かけている là thể tiếp diễn, không hợp nghĩa。Lưu ý: mẫu thật của câu này là 〜にかけては, mẫu N2 thật theo các danh sách ngữ pháp đã xuất bản nhưng không nằm trong 72 mẫu N2 của GRAMMAR_DATA — ngoại lệ legacy do coordinator chấp nhận, câu/đáp án/phương án giữ nguyên bản seed。",
    "voc": "料理（りょうり）：nấu ăn, món ăn； 上手（じょうず）：giỏi； まける：thua, chịu thua； だれにも：không ai cả"
  },
  {
    "d": ["来月、新しい 店 が 開店 しますね。", "ええ、開店（　）、社長 が あいさつ を します。"],
    "a": "に先立って",
    "w": ["に先立てる", "に先立てば", "に先立った"],
    "p": "〜に先立って",
    "exp": "開店に先立って（trước khi khai trương）：mẫu N2 chỉ việc xảy ra trước một sự kiện。に先立てる là thể từ điển không nối được câu này、に先立てば là dạng điều kiện、に先立った là thể quá khứ, đều không tạo được cụm chỉ thời gian trước sự kiện。",
    "voc": "開店（かいてん）：khai trương； 先立つ（さきだつ）：đi trước, xảy ra trước； 社長（しゃちょう）：giám đốc； あいさつ：lời chào"
  },
  {
    "d": ["山田さんは、日本語 が 上手 ですね。", "ええ、三年前 に 日本 へ 来て（　）、毎日 勉強 して います。"],
    "a": "以来",
    "w": ["以前に", "以後の", "以内で"],
    "p": "〜て以来",
    "exp": "日本へ来て以来（kể từ khi đến Nhật）：mẫu N2 chỉ khoảng thời gian từ một thời điểm trong quá khứ đến nay。以前に（trước đây）ngược nghĩa、以後（sau đó）không nối sau て、以内で（trong vòng）chỉ giới hạn, đều sai。",
    "voc": "以来（いらい）：kể từ khi； 三年前（さんねんまえ）：ba năm trước； 毎日（まいにち）：mỗi ngày"
  }
  ],
  g1: [
  {
    "s": "収入（　）、税金 の 額 が 変わります。",
    "a": "に応じて",
    "w": ["に応じって", "に応じだ", "に応じる"],
    "p": "〜に応じて",
    "exp": "収入に応じて（tùy theo thu nhập）：mẫu N2 chỉ sự thay đổi tương ứng。に応じって và に応じだ là dạng chia sai、に応じる là thể từ điển, không thể kết thúc mệnh đề trước dấu phẩy trong câu này。",
    "voc": "収入（しゅうにゅう）：thu nhập； 税金（ぜいきん）：thuế； 額（がく）：số tiền, mức"
  },
  {
    "s": "年 を とる（　）、体 が 弱く なって いきます。",
    "a": "につれて",
    "w": ["につれる", "につれた", "につれてる"],
    "p": "〜につれて",
    "exp": "年をとるにつれて（càng lớn tuổi thì）：mẫu N2 chỉ hai sự thay đổi diễn ra song song。につれる・につれた・につれてる đều là dạng chia sai của mẫu này, không dùng được sau 年をとる。",
    "voc": "年をとる（としをとる）：lớn tuổi； 弱い（よわい）：yếu； 体（からだ）：cơ thể"
  },
  {
    "s": "雨 が 降って いる（　）、試合 は 行われました。",
    "a": "にもかかわらず",
    "w": ["にもかかわって", "にもかかわる", "にもかかわった"],
    "p": "〜にもかかわらず",
    "exp": "雨が降っているにもかかわらず（mặc dù trời đang mưa）：mẫu N2 chỉ sự nhượng bộ。にもかかわって・にもかかわる・にもかかわった đều là dạng của động từ かかわる（liên quan）, không tạo được mẫu nhượng bộ。",
    "voc": "雨（あめ）：mưa； 試合（しあい）：trận đấu； 行われる（おこなわれる）：được tổ chức"
  },
  {
    "s": "皆さん の 協力 が あった（　）、この 計画 は 成功 しました。",
    "a": "からこそ",
    "w": ["からだけ", "だけから", "からこそに"],
    "p": "〜からこそ",
    "exp": "協力があったからこそ（chính nhờ có sự hợp tác）：mẫu N2 nhấn mạnh nguyên nhân, lí do quan trọng nhất。からだけ・だけから không phải mẫu nhấn mạnh này、からこそに là dạng sai, không dùng được。",
    "voc": "協力（きょうりょく）：hợp tác, giúp đỡ； 計画（けいかく）：kế hoạch； 成功（せいこう）：thành công"
  },
  {
    "s": "私 の 意見 は、あくまで 一つ の 考え（　）ので、参考 に して ください。",
    "a": "にすぎない",
    "w": ["にすぎる", "にすぎた", "にすぎないで"],
    "p": "〜にすぎない",
    "exp": "一つの考えにすぎないので（chẳng qua cũng chỉ là một ý kiến）：mẫu N2 chỉ sự khiêm tốn, giới hạn。にすぎる・にすぎた là dạng chia sai trong cấu trúc này、にすぎないで không nối được với ので。",
    "voc": "意見（いけん）：ý kiến； 考え（かんがえ）：suy nghĩ, ý kiến； 参考（さんこう）：tham khảo； あくまで：chẳng qua, dù sao"
  },
  {
    "s": "この 会議（　）、来年 の 計画 が 決められました。",
    "a": "において",
    "w": ["におけて", "においた", "におく"],
    "p": "〜において",
    "exp": "この会議において（tại cuộc họp này）：mẫu N2 chỉ địa điểm, trường hợp, phạm vi xảy ra sự việc。におけて・においた・におく đều là dạng chia sai, không tạo được mẫu này。",
    "voc": "会議（かいぎ）：cuộc họp； 計画（けいかく）：kế hoạch； 決められる（きめられる）：được quyết định； 来年（らいねん）：năm sau"
  },
  {
    "s": "開会（　）、会長 が あいさつ を します。",
    "a": "に際して",
    "w": ["に際した", "に際する", "に際す"],
    "p": "〜に際して",
    "exp": "開会に際して（nhân dịp khai mạc）：mẫu N2 chỉ thời điểm xảy ra một sự việc quan trọng。に際した là thể quá khứ không nối được câu này、に際する là dạng bổ nghĩa cho danh từ、に際す là dạng chia sai。",
    "voc": "開会（かいかい）：khai mạc； 会長（かいちょう）：chủ tịch, hội trưởng； あいさつ：lời chào"
  },
  {
    "s": "今 の 私 には、社長 の 気持ち が 分かり（　）ません。",
    "a": "かね",
    "w": ["かねる", "かねた", "かねれば"],
    "p": "V-ます + かねる",
    "exp": "分かりかねません（tôi khó mà hiểu được）：Vます＋かねる là mẫu N2 chỉ việc khó làm được, thường dùng khiêm tốn。かねるません là dạng sai、かねた・かねれば không kết hợp được với ません trong câu này。",
    "voc": "分かる（わかる）：hiểu； 気持ち（きもち）：tâm trạng, cảm xúc； 社長（しゃちょう）：giám đốc"
  },
  {
    "s": "実際に 会って 話して み（　）、相手 の 気持ち は 分かりません。",
    "a": "ないことには",
    "w": ["ないことが", "ないことにはい", "ないことに"],
    "p": "〜ないことには",
    "exp": "話してみないことには（nếu không thử gặp và nói chuyện thì）：mẫu N2 chỉ điều kiện cần thiết, nếu không làm thì không thể。ないことが・ないことに không tạo được mẫu điều kiện này、ないことにはい là dạng sai。",
    "voc": "実際（じっさい）：thực tế； 相手（あいて）：đối phương； 気持ち（きもち）：tâm trạng"
  }
  ],
  star: [
  {
    "pre": "この ",
    "chunks": ["調査 は", "三年 に", "わたって", "行われた"],
    "post": "。",
    "p": "〜にわたって",
    "exp": "Thứ tự đúng: この調査は三年にわたって行われた（cuộc khảo sát này đã được tiến hành trong suốt ba năm）。三年にわたって là cụm chỉ khoảng thời gian, đứng trước động từ 行われた；わたって không thể đứng đầu câu hay sau 行われた。",
    "voc": "調査（ちょうさ）：khảo sát, điều tra； 三年（さんねん）：ba năm； 行われる（おこなわれる）：được tiến hành"
  },
  {
    "pre": "",
    "chunks": ["留学 を", "きっかけに", "日本語 を", "勉強し始めた"],
    "post": "。",
    "p": "〜をきっかけに",
    "exp": "Thứ tự đúng: 留学をきっかけに日本語を勉強し始めた（nhân cơ hội du học, tôi đã bắt đầu học tiếng Nhật）。をきっかけに đứng ngay sau danh từ chỉ sự việc gây ra thay đổi, rồi mới đến hành động bắt đầu sau đó。",
    "voc": "留学（りゅうがく）：du học； きっかけ：cơ hội, dịp； 日本語（にほんご）：tiếng Nhật"
  },
  {
    "pre": "彼 は ",
    "chunks": ["忙しい", "ながらも", "欠かさず", "運動 を 続けて いる"],
    "post": "。",
    "p": "〜ながらも",
    "exp": "Thứ tự đúng: 彼は忙しいながらも欠かさず運動を続けている（dù bận, anh ấy vẫn tập thể dục không bỏ ngày nào）。ながらも nối ngay sau tính từ 忙しい để diễn đạt nhượng bộ；欠かさず（không bỏ sót, đều đặn）chỉ bổ nghĩa cho 運動を続けている, không thể bổ nghĩa cho 忙しい, nên chỉ có một thứ tự đúng。",
    "voc": "忙しい（いそがしい）：bận rộn； 欠かさず（かかさず）：không bỏ sót, đều đặn； 運動（うんどう）：tập thể dục； 続ける（つづける）：tiếp tục"
  },
  {
    "pre": "",
    "chunks": ["日本 に", "限らず", "世界中 で", "人気 が ある"],
    "post": "。",
    "p": "〜に限らず",
    "exp": "Thứ tự đúng: 日本に限らず世界中で人気がある（không chỉ ở Nhật mà trên khắp thế giới cũng được yêu thích）。に限らず đứng ngay sau 日本, rồi đến phạm vi rộng hơn 世界中で, cuối cùng là 人気がある。",
    "voc": "限る（かぎる）：giới hạn； 世界中（せかいじゅう）：khắp thế giới； 人気（にんき）：được yêu thích"
  },
  {
    "pre": "彼 は ",
    "chunks": ["日本語 が", "話せる", "どころか", "英語 も 話せない"],
    "post": "。",
    "p": "〜どころか",
    "exp": "Thứ tự đúng: 彼は日本語が話せるどころか英語も話せない（anh ấy đừng nói là nói được tiếng Nhật, ngay cả tiếng Anh cũng không nói được）。どころか đứng sau mệnh đề bị phủ định để nhấn mạnh mức độ còn tệ hơn, rồi đến mệnh đề sau も話せない。",
    "voc": "日本語（にほんご）：tiếng Nhật； 話せる（はなせる）：có thể nói； 英語（えいご）：tiếng Anh； どころか：đừng nói là, chứ đừng nói"
  }
  ],
  bunsho: [
  {
    "intro": "",
    "p": "最近、インターネット で 買い物 を する 人 が 増えて います。（　1　）、店 へ 行く 時間 が ない 人 にとって、とても 便利 です。品物 は 家 に 届きます し、値段 を 比べる こと も 簡単 です。（　2　）、インターネット で の 買い物 に は、問題 も あります。たとえば、写真 だけ では、品物 の 大きさ や 色 が 分かりにくい こと が あります。（　3　）、買う 前 に サイズ を よく 確かめる こと が 大切 です。（　4　）、買い物 を する 前 に、他 の 人 の 感想 を 読む こと も 大切 です。（　5　）、インターネット で の 買い物 は 便利 です が、注意 も 必要 だ と 言えます。",
    "b": [
      {"a": "特に", "w": ["しかし", "たとえば", "つまり"]},
      {"a": "しかし", "w": ["そのため", "たとえば", "まず"]},
      {"a": "そのため", "w": ["しかし", "まず", "たとえば"]},
      {"a": "また", "w": ["しかし", "つまり", "たとえば"]},
      {"a": "要するに", "w": ["しかし", "たとえば", "まず"]}
    ],
    "exp": "Chỗ trống 1: 特に（đặc biệt là）— nhấn mạnh nhóm người không có thời gian đi cửa hàng。Chỗ trống 2: しかし（tuy nhiên）— chuyển sang vấn đề của mua sắm online, đối lập với tiện lợi ở trên。Chỗ trống 3: そのため（vì vậy）— vì chỉ xem ảnh khó biết kích thước, màu sắc nên cần kiểm tra kĩ trước khi mua。Chỗ trống 4: また（hơn nữa）— thêm một lời khuyên khác là đọc cảm nhận của người khác。Chỗ trống 5: 要するに（tóm lại）— tổng kết: tiện lợi nhưng cũng cần chú ý。たとえば chỉ dùng khi nêu ví dụ, つまり khi giải thích lại, まず khi liệt kê thứ tự — đều không hợp các vị trí trên。",
    "voc": "インターネット：internet； 買い物（かいもの）：mua sắm； 便利（べんり）：tiện lợi； 品物（しなもの）：hàng hóa； 値段（ねだん）：giá cả； 感想（かんそう）：cảm nhận, cảm tưởng； 確かめる（たしかめる）：kiểm tra kĩ； 要するに（ようするに）：tóm lại"
  }
  ],
  readS: [
  {
    "p": "昨日、歯 が 痛く なった ので、歯医者 へ 行きました。歯医者 は 家 から 歩いて 十分 の 所 に あります。先生 は 歯 を しらべて、むし歯 が 一つ ある と 言いました。治療 は 来週 から 始まります。甘い もの を 食べすぎない よう に 気 を つけます。歯 を 大切 に したい と 思います。",
    "q": "歯医者 で 何 と 言われました か。",
    "o": ["むし歯 が 一つ ある と 言われました。", "歯 は ぜんぶ 大丈夫 だ と 言われました。", "歯 を ぬかなければ ならない と 言われました。", "毎日 歯 を みがかなくて よい と 言われました。"],
    "a": 0,
    "e": "Bác sĩ nói có một chiếc răng sâu.",
    "exp": "Bác sĩ nói có một chiếc răng sâu（むし歯が一つある）。Các lựa chọn khác đều không có trong bài: không nói răng đều ổn, không nói phải nhổ răng, cũng không nói không cần đánh răng hàng ngày。",
    "voc": "歯（は）：răng； 歯医者（はいしゃ）：nha sĩ； むし歯（むしば）：răng sâu； 治療（ちりょう）：điều trị； 痛い（いたい）：đau"
  },
  {
    "p": "山田さん は、駅前 の 店 で ノート を 3冊 と ペン を 2本 買いました。ノート は 1冊 250円、ペン は 1本 100円 です。店員 は レジ で お金 を 数えました。山田さん は レジ で 1000円 を 出しました。",
    "q": "おつり は いくら です か。",
    "o": ["50円 です。", "100円 です。", "250円 です。", "950円 です。"],
    "a": 0,
    "calc": true,
    "e": "ノート3冊で750円、ペン2本で200円、合計950円。1000円−950円＝50円。",
    "exp": "Bài toán tính tiền: 3 quyển vở × 250 yên = 750 yên, 2 cây bút × 100 yên = 200 yên, tổng 950 yên。Trả 1000 yên nên tiền thừa là 1000 − 950 = 50 yên。100 yên, 250 yên và 950 yên đều là kết quả tính sai hoặc tổng tiền hàng, không phải tiền thừa。",
    "voc": "ノート：vở； ペン：bút； 冊（さつ）：quyển (đơn vị đếm sách vở）； 本（ほん）：cái (đơn vị đếm bút）； レジ：quầy thu ngân； おつり：tiền thừa； 店員（てんいん）：nhân viên cửa hàng"
  },
  {
    "p": "山本さん は、図書館 で 本 を 2冊 借りました。1冊 は 来週 の 月曜日 まで に、もう 1冊 は 来週 の 水曜日 まで に 返さなければ なりません。山本さん は、月曜日 に 返す 本 を 先 に 読みました。火曜日 に その 本 を 返して、水曜日 に 返す 本 を 読み始めました。",
    "q": "山本さん は 火曜日 に 何 を しました か。",
    "o": ["月曜日 に 返す 本 を 返しました。", "水曜日 に 返す 本 を 返しました。", "新しい 本 を 借りました。", "図書館 へ 行きませんでした。"],
    "a": 0,
    "e": "火曜日にその本を返して、水曜日に返す本を読み始めました。",
    "exp": "Thứ Ba, Yamamoto trả cuốn sách phải trả vào thứ Hai（月曜日に返す本を返しました）。Cuốn trả vào thứ Tư thì mới bắt đầu đọc vào thứ Ba, chưa trả；bài không nói mượn sách mới hay không đến thư viện。",
    "voc": "図書館（としょかん）：thư viện； 借りる（かりる）：mượn； 返す（かえす）：trả lại； 月曜日（げつようび）：thứ Hai； 水曜日（すいようび）：thứ Tư"
  },
  {
    "p": "来週 の 日曜日、田中さん は 友だち と 山 へ 行く 予定 でした。しかし、天気予報 に よると、日曜日 は 一日中 雨 が 降る そうです。そこで、田中さん は 計画 を 変えて、土曜日 に 行く こと に しました。土曜日 は 晴れる そうです。",
    "q": "田中さん は どうして 計画 を 変えました か。",
    "o": ["日曜日 に 雨 が 降る から です。", "土曜日 に 雨 が 降る から です。", "友だち が 行けない から です。", "山 が 閉まって いる から です。"],
    "a": 0,
    "e": "日曜日は一日中雨が降るそうです。",
    "exp": "Tanaka đổi kế hoạch vì Chủ nhật mưa cả ngày theo dự báo thời tiết（日曜日は一日中雨が降るそうです）。Thứ Bảy trời nắng nên không phải lí do；bài không nói bạn không đi được hay núi đóng cửa。",
    "voc": "天気予報（てんきよほう）：dự báo thời tiết； 一日中（いちにちじゅう）：cả ngày； 計画（けいかく）：kế hoạch； 晴れる（はれる）：trời nắng, quang đãng"
  },
  {
    "p": "佐藤さん は、毎朝 6時 に 起きて、30分 走ります。その後、シャワー を 浴びて、朝ごはん を 食べます。朝ごはん は いつも パン と 卵 です。佐藤さん は、朝 の 運動 を 始めて から、体調 が よく なった と 言って います。",
    "q": "佐藤さん に ついて、正しい もの は どれ です か。",
    "o": ["朝 の 運動 を 始めて から 体調 が よく なった。", "毎朝 6時 に 寝ます。", "朝ごはん は いつも ごはん です。", "毎朝 30分 泳ぎます。"],
    "a": 0,
    "e": "朝の運動を始めてから、体調がよくなったと言っています。",
    "exp": "Sato nói từ khi bắt đầu tập thể dục buổi sáng thì sức khỏe tốt hơn（朝の運動を始めてから、体調がよくなった）。6 giờ là giờ dậy chứ không phải giờ ngủ, bữa sáng là bánh mì và trứng chứ không phải cơm, và anh ấy chạy 30 phút chứ không bơi。",
    "voc": "毎朝（まいあさ）：mỗi sáng； 走る（はしる）：chạy； シャワー：vòi sen； 体調（たいちょう）：tình trạng sức khỏe； 卵（たまご）：trứng"
  }
  ],
  readM: [
  {
    "p": "健康 の ため に は、よく 眠る こと が 大切 です。わたし は 毎日 七時間 は 眠る よう に して います。夜 遅く まで スマートフォン を 見て いる と、眠れなく なる ので、寝る 一時間前 に は 見ない よう に して います。朝 は 決まった 時間 に 起きます。休み の 日 も、できるだけ 同じ 時間 に 起きる よう に して います。よく 眠る と、朝 すっきり 起きる こと が できて、仕事 に も 集中 できます。反対 に、睡眠 が 足りない と、頭 が 痛く なったり、気分 が 悪く なったり します。運動 も よく 眠る ため に 役立ちます。わたし は 夕方 に 散歩 を します。夜 は お風呂 に 入って 体 を 温めます。寝る前 に お風呂 に 入る と、体 が 温まって、よく 眠る こと が できます。よい 睡眠 は、毎日 の 生活 の 基本 です。よい 睡眠 の ため に、生活 の リズム を 大切 に したい です。夜 は 早く 寝る よう に して、朝 は すっきり 起きます。睡眠 は、勉強 や 仕事 の ため に も 大切 です。",
    "qs": [
      {"q": "筆者 は 毎日 何時間 眠る よう に して います か。", "o": ["五時間 です。", "九時間 です。", "三時間 です。", "七時間 です。"], "a": 3, "e": "Tác giả cố ngủ 7 tiếng mỗi ngày."},
      {"q": "寝る前 に 何 を しない よう に して います か。", "o": ["本 を 読まない よう に して います。", "スマートフォン を 見ない よう に して います。", "お風呂 に 入らない よう に して います。", "食事 を しない よう に して います。"], "a": 1, "e": "Tác giả không xem điện thoại 1 tiếng trước khi ngủ."},
      {"q": "睡眠 が 足りない と どう なります か。", "o": ["元気 に なります。", "仕事 が 速く なります。", "頭 が 痛く なったり、気分 が 悪く なったり します。", "食欲 が 増えます。"], "a": 2, "e": "Thiếu ngủ thì đau đầu và khó chịu."}
    ],
    "exp": "Câu 1: tác giả cố ngủ 7 tiếng mỗi ngày（毎日七時間は眠るようにしています）。Câu 2: 1 tiếng trước khi ngủ không xem điện thoại（寝る一時間前には見ないようにしています）。Câu 3: thiếu ngủ thì đau đầu và khó chịu（頭が痛くなったり、気分が悪くなったりします）。Các lựa chọn còn lại đều trái với nội dung bài。",
    "voc": "健康（けんこう）：sức khỏe； 睡眠（すいみん）：giấc ngủ； 眠る（ねむる）：ngủ； スマートフォン：điện thoại thông minh； 集中（しゅうちゅう）：tập trung； 散歩（さんぽ）：đi dạo"
  },
  {
    "p": "私 は 大学 2年生 の とき、駅前 の 本屋 で アルバイト を 始めました。最初 は、レジ の 仕事 が 難しくて、よく 間違えました。でも、店長 が やさしく 教えて くれた ので、少しずつ 慣れて いきました。店長 は、私 が 間違えた とき も、怒らずに、もう一度 ゆっくり 教えて くれました。私 は、店長 の ような 人 に なりたい と 思いました。3か月 たつ と、レジ も 本 を 並べる 仕事 も 一人 で できる ように なりました。アルバイト を 通じて、時間 を 守る こと の 大切 さ を 学びました。お客さん と 話す こと も 多く、接客 の 仕方 も 身に つきました。休み の 日 に は、店 の 本 を 読む こと も あります。新しい 本 が 出る と、まず 自分 で 読んで、お客さん に 紹介 します。今 では、アルバイト は 私 の 大学 生活 の 大切 な 一部 です。将来、仕事 を する とき に、この 経験 が 役立つ と 思います。",
    "qs": [
      {"q": "筆者 は いつ アルバイト を 始めました か。", "o": ["大学 1年生 の とき です。", "大学 2年生 の とき です。", "大学 3年生 の とき です。", "高校生 の とき です。"], "a": 1, "e": "大学2年生のとき、駅前の本屋でアルバイトを始めました。"},
      {"q": "最初 は 何 が 難しかった です か。", "o": ["本 を 並べる 仕事 です。", "レジ の 仕事 です。", "お客さん と 話す こと です。", "店長 と 話す こと です。"], "a": 1, "e": "最初は、レジの仕事が難しくて、よく間違えました。"},
      {"q": "アルバイト を 通じて 何 を 学びました か。", "o": ["時間 を 守る こと の 大切 さ です。", "本 の 読み方 です。", "外国語 の 話し方 です。", "料理 の 作り方 です。"], "a": 0, "e": "アルバイトを通じて、時間を守ることの大切さを学びました。"}
    ],
    "exp": "Câu 1: tác giả bắt đầu làm thêm khi học năm 2 đại học（大学2年生のとき）。Câu 2: lúc đầu công việc thu ngân rất khó, hay nhầm lẫn（レジの仕事が難しくて、よく間違えました）。Câu 3: qua việc làm thêm, tác giả học được tầm quan trọng của việc giữ đúng giờ（時間を守ることの大切さを学びました）。Các lựa chọn khác đều không có trong bài。",
    "voc": "アルバイト：việc làm thêm； 本屋（ほんや）：hiệu sách； レジ：quầy thu ngân； 店長（てんちょう）：cửa hàng trưởng； 慣れる（なれる）：quen dần； 接客（せっきゃく）：tiếp khách； 並べる（ならべる）：sắp xếp, xếp"
  },
  {
    "p": "私 の 町 に は、小さな 図書館 が あります。私 は 毎週 土曜日 に そこ へ 行きます。図書館 で は、本 を 借りる だけ でなく、静か な 部屋 で 勉強 する こと も できます。先月、図書館 で 日本語 の 勉強会 が 始まりました。毎週 土曜日 の 午後、近所 の 人 たち が 集まって、日本語 を 教え合って います。私 は 毎回 参加 して います。勉強会 で は、文法 の 練習 だけ でなく、日本 の 文化 に ついて 話す こと も あります。先週 は、日本 の お正月 に ついて 話しました。お正月 の 料理 の 話 が 出て、皆 おもしろがって いました。勉強会 の 後、皆 で 近く の 公園 を 散歩 する こと も あります。図書館 は、本 を 読む 場所 だけ でなく、人 と 出会う 場所 でも ある と 思います。",
    "qs": [
      {"q": "筆者 は いつ 図書館 へ 行きます か。", "o": ["毎週 土曜日 です。", "毎週 日曜日 です。", "毎日 です。", "毎月 1回 です。"], "a": 0, "e": "毎週土曜日にそこへ行きます。"},
      {"q": "勉強会 で は 何 を して います か。", "o": ["日本語 を 教え合って います。", "英語 を 教えて います。", "本 を 売って います。", "映画 を 見て います。"], "a": 0, "e": "近所の人たちが集まって、日本語を教え合っています。"},
      {"q": "筆者 は 図書館 を どう 思って います か。", "o": ["本 を 読む 場所 だけ でなく、人 と 出会う 場所 でも あります。", "本 を 買う 場所 です。", "静かすぎて 勉強 できない 場所 です。", "子ども だけ が 行く 場所 です。"], "a": 0, "e": "図書館は、本を読む場所だけでなく、人と出会う場所でもあると思います。"}
    ],
    "exp": "Câu 1: tác giả đến thư viện mỗi thứ Bảy（毎週土曜日にそこへ行きます）。Câu 2: ở buổi học, mọi người dạy tiếng Nhật cho nhau（日本語を教え合っています）。Câu 3: tác giả nghĩ thư viện không chỉ là nơi đọc sách mà còn là nơi gặp gỡ mọi người（本を読む場所だけでなく、人と出会う場所でもある）。Các lựa chọn khác đều trái với bài。",
    "voc": "図書館（としょかん）：thư viện； 勉強会（べんきょうかい）：buổi học nhóm； 近所（きんじょ）：hàng xóm, gần nhà； 教え合う（おしえあう）：dạy cho nhau； 参加（さんか）：tham gia； お正月（おしょうがつ）：Tết"
  }
  ],
  tougou: [
  {
    "p1": "田中さん は、在宅勤務 は 便利 だ と 考えて います。通勤 の 時間 が いらない ので、その 時間 を 仕事 や 家族 と 過ごす 時間 に 使う こと が できます。また、静か な 家 で 仕事 を する と、集中 しやすい と 言います。在宅勤務 が 増えれば、会社 の 場所 に 関係なく 働く こと が できる ように なる でしょう。",
    "p2": "一方、佐藤さん は、在宅勤務 に は 問題 が ある と 考えて います。家 で は、同僚 と すぐ に 相談 できず、仕事 が 遅く なる こと が ある と 言います。また、仕事 と 生活 の 区別 が つきにくく、休む 時間 が 少なく なる こと も ある そうです。佐藤さん は、会社 で 働く こと の よさ を 大切 に したい と 考えて います。",
    "qs": [
      {"q": "田中さん は 在宅勤務 の どんな 点 を よい と 思って います か。", "o": ["通勤 の 時間 が いらない こと です。", "同僚 と 相談 しやすい こと です。", "会社 で 働ける こと です。", "給料 が 上がる こと です。"], "a": 0, "e": "通勤の時間がいらないので、その時間を仕事や家族と過ごす時間に使うことができます。"},
      {"q": "佐藤さん の 考え と 合う もの は どれ です か。", "o": ["在宅勤務 で は 仕事 と 生活 の 区別 が つきにくい です。", "在宅勤務 で は 集中 しやすい です。", "在宅勤務 で は 通勤 の 時間 を 使えます。", "在宅勤務 で は 給料 が 上がります。"], "a": 0, "e": "仕事と生活の区別がつきにくく、休む時間が少なくなることもあるそうです。"}
    ],
    "exp": "Câu 1: Tanaka cho rằng làm việc tại nhà tốt vì không mất thời gian đi lại（通勤の時間がいらない）。Dễ trao đổi với đồng nghiệp là ý của Sato về mặt trái, làm ở công ty và tăng lương không có trong bài。Câu 2: Sato cho rằng làm việc tại nhà khiến ranh giới công việc và cuộc sống khó phân biệt（仕事と生活の区別がつきにくい）。Dễ tập trung và tận dụng thời gian đi lại là ý của Tanaka, tăng lương không ai nói đến。",
    "voc": "在宅勤務（ざいたくきんむ）：làm việc tại nhà； 通勤（つうきん）：đi làm (di chuyển）； 同僚（どうりょう）：đồng nghiệp； 相談（そうだん）：trao đổi, bàn bạc； 区別（くべつ）：phân biệt； 集中（しゅうちゅう）：tập trung"
  }
  ],
  shuchou: [
  {
    "p": "私 は、失敗 は 悪い こと だけ では ない と 思います。失敗 を する と、誰 でも 落ち込みます。私 も、大学 の 入学試験 に 失敗 した とき は、しばらく 何 も する 気 が 起きませんでした。しかし、その とき、先生 が「失敗 は、次 に 成功 する ため の 大切 な 経験 だ」と 言って くれました。その 言葉 を 聞いて、私 は もう一度 勉強 を 始める こと が できました。失敗 の 原因 を よく 考えて、勉強 の 方法 を 変えた のです。次 の 年、私 は 希望 の 大学 に 入る こと が できました。私 は、高校生 の とき、英語 の 試験 で 悪い 点 を 取った こと が あります。その とき は、英語 が 苦手 だ と 思って、あきらめそうに なりました。しかし、先生 は「間違える こと は、覚える ため の 第一歩 だ」と 言って くれました。それ から、私 は 毎日 少しずつ 英語 の 単語 を 覚える ように なりました。半年 後、試験 の 点 は よく なりました。仕事 を 始めて から も、失敗 は 何度 も ありました。たとえば、初めて の 会議 で 資料 を 間違えて、上司 に 注意 されました。その とき は 恥ずかしかった です が、次 から は 資料 を 二度 確かめる ように なりました。失敗 を 恐れて、何 も しない の は、もっと 悪い こと だ と 思います。失敗 を して も、そこ から 何 を 学ぶ か が 大切 です。失敗 の 原因 を 考えて、次 に 生かす こと が できれば、失敗 は 無駄 に なりません。私 は これから も、失敗 を 恐れずに、いろいろな こと に 挑戦 して いきたい と 思います。",
    "qs": [
      {"q": "筆者 は 大学 の 入学試験 に 失敗 した とき、どう しました か。", "o": ["先生 の 言葉 を 聞いて、もう一度 勉強 を 始めました。", "すぐに 大学 を やめました。", "勉強 の 方法 を 変えませんでした。", "先生 に 注意 されました。"], "a": 0, "e": "その言葉を聞いて、私はもう一度勉強を始めることができました。"},
      {"q": "筆者 に よると、失敗 を 恐れて 何 も しない の は どう です か。", "o": ["もっと 悪い こと です。", "いちばん よい こと です。", "成功 への 近道 です。", "恥ずかしい こと では ありません。"], "a": 0, "e": "失敗を恐れて、何もしないのは、もっと悪いことだと思います。"},
      {"q": "筆者 が いちばん 言いたい こと は 何 です か。", "o": ["失敗 から 何 を 学ぶ か が 大切 です。", "失敗 は 絶対 に しては いけません。", "失敗 した 人 は 成功 できません。", "会議 で は 資料 を 間違えては いけません。"], "a": 0, "e": "失敗をしても、そこから何を学ぶかが大切です。"}
    ],
    "exp": "Câu 1: sau khi trượt kì thi đầu vào, nghe lời thầy mà tác giả học lại（その言葉を聞いて、もう一度勉強を始めました）。Không bỏ học, có đổi phương pháp học, và bị cấp trên nhắc nhở là chuyện ở công ty sau này。Câu 2: tác giả nói sợ thất bại mà không làm gì còn tệ hơn（もっと悪いことだ）。Câu 3: điều tác giả muốn nói nhất là học được gì từ thất bại mới quan trọng（失敗をしても、そこから何を学ぶかが大切です）— không phải tránh thất bại bằng mọi giá, cũng không phải chuyện nhầm tài liệu trong cuộc họp。",
    "voc": "失敗（しっぱい）：thất bại； 成功（せいこう）：thành công； 経験（けいけん）：kinh nghiệm； 原因（げんいん）：nguyên nhân； 恐れる（おそれる）：sợ hãi； 挑戦（ちょうせん）：thử thách； 無駄（むだ）：lãng phí, vô ích； 生かす（いかす）：tận dụng, phát huy"
  }
  ],
  info: [
  {
    "tpl": "<b>A スポーツジム「あおぞら」の11月の教室</b><br>ヨガ：火曜日・木曜日 10:00〜11:00<br>水泳：水曜日・金曜日 14:00〜15:00<br>ダンス：土曜日 11:00〜12:00<br>休館日：毎週月曜日と11月12日（木）<br><b>B カレンダー（11月）</b><br><table class=\"jl-cal\"><tr><th>月</th><th>火</th><th>水</th><th>木</th><th>金</th><th>土</th><th>日</th></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td><td>1</td></tr><tr><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td></tr><tr><td>9</td><td>10</td><td>11</td><td>12</td><td>13</td><td>14</td><td>15</td></tr><tr><td>16</td><td>17</td><td>18</td><td>19</td><td>20</td><td>21</td><td>22</td></tr><tr><td>23</td><td>24</td><td>25</td><td>26</td><td>27</td><td>28</td><td>29</td></tr><tr><td>30</td><td></td><td></td><td></td><td></td><td></td><td></td></tr></table>",
    "inst": "つぎのA「スポーツジムの教室」とBのカレンダーを見て、質問に答えてください。答えは1・2・3・4から、いちばんいいものを一つえらんでください。",
    "q": "11月12日（木）の10時にヨガの教室に行こうと思っています。どうなりますか。",
    "opts": ["ヨガの教室があります。", "休館日なので、教室はありません。", "ヨガの教室は14時からあります。", "ダンスの教室があります。"],
    "ans": 1,
    "exp": "Ngày 12 tháng 11 là thứ Năm, đúng ngày có lớp yoga 10 giờ, nhưng ngày 12 là ngày nghỉ của phòng gym（休館日：毎週月曜日と11月12日（木））nên không có lớp。14 giờ là giờ bơi, khiêu vũ chỉ có thứ Bảy nên đều sai。",
    "voc": "ヨガ：yoga； 教室（きょうしつ）：lớp học； 休館日（きゅうかんび）：ngày nghỉ (đóng cửa）； 水泳（すいえい）：bơi lội； ダンス：khiêu vũ"
  },
  {
    "tpl": "<b>A 図書館のお知らせ</b><br>本は2週間借りることができます。<br>返すのが遅れると、遅れた日に1日100円を払わなければなりません。<br><table class=\"jl-tbl\"><tr><th>本の種類</th><th>返す場所</th></tr><tr><td>小説</td><td>1階のカウンター</td></tr><tr><td>雑誌</td><td>2階のカウンター</td></tr><tr><td>DVD</td><td>3階のカウンター</td></tr></table><b>B カレンダー（11月）</b><br><table class=\"jl-cal\"><tr><th>月</th><th>火</th><th>水</th><th>木</th><th>金</th><th>土</th><th>日</th></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td><td>1</td></tr><tr><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td></tr><tr><td>9</td><td>10</td><td>11</td><td>12</td><td>13</td><td>14</td><td>15</td></tr><tr><td>16</td><td>17</td><td>18</td><td>19</td><td>20</td><td>21</td><td>22</td></tr><tr><td>23</td><td>24</td><td>25</td><td>26</td><td>27</td><td>28</td><td>29</td></tr><tr><td>30</td><td></td><td></td><td></td><td></td><td></td><td></td></tr></table>",
    "inst": "つぎのA「図書館のお知らせ」とBのカレンダーを見て、質問に答えてください。答えは1・2・3・4から、いちばんいいものを一つえらんでください。",
    "q": "11月3日（火）に小説を借りました。いつまでに、どこへ返しますか。11月20日（金）に返したら、いくら払わなければなりませんか。",
    "opts": ["11月17日までに1階へ、300円", "11月17日までに2階へ、300円", "11月20日までに1階へ、0円", "11月16日までに1階へ、400円"],
    "ans": 0,
    "exp": "Mượn ngày 3 tháng 11, được mượn 2 tuần nên hạn trả là ngày 17 tháng 11（火曜日）。Tiểu thuyết trả ở quầy tầng 1。Trả ngày 20 tháng 11（金曜日）là trễ 3 ngày, mỗi ngày 100 yên nên phải trả 300 yên。Tầng 2 là chỗ trả tạp chí, ngày 20 không phải hạn trả, ngày 16 cũng sai。",
    "voc": "図書館（としょかん）：thư viện； 小説（しょうせつ）：tiểu thuyết； 借りる（かりる）：mượn； 返す（かえす）：trả lại； カウンター：quầy； 遅れる（おくれる）：trễ, muộn"
  }
  ]
};

/* ----- Test 5 ----- */
window.WRITTEN_N2_SET5 = {
  yomi: [
  {
    "s": "彼 は 海外 で 働いた 経験 が あります。",
    "t": "経験",
    "r": "けいけん",
    "w": ["けいげん", "けいけ", "きょうけん"],
    "exp": "経験 đọc là けいけん（経 けい、験 けん）。けいげん đọc 験 thành げん là sai、けいけ thiếu âm ん、きょうけん đọc 経 thành きょう là sai。",
    "voc": "経験（けいけん）：kinh nghiệm； 海外（かいがい）：nước ngoài； 働く（はたらく）：làm việc"
  },
  {
    "s": "新しい 計画 が 成功 しました。",
    "t": "成功",
    "r": "せいこう",
    "w": ["せいごう", "せいこ", "しょうこう"],
    "exp": "成功 đọc là せいこう（成 せい、功 こう）。せいごう đọc 功 thành ごう là sai、せいこ thiếu âm う、しょうこう đọc 成 thành しょう là sai。",
    "voc": "成功（せいこう）：thành công； 計画（けいかく）：kế hoạch； 新しい（あたらしい）：mới"
  },
  {
    "s": "彼 の 判断 は いつも 正しい です。",
    "t": "判断",
    "r": "はんだん",
    "w": ["はんたん", "はんだ", "ぱんだん"],
    "exp": "判断 đọc là はんだん（判 はん、断 だん）。はんたん đọc 断 thành たん là sai、はんだ thiếu âm ん、ぱんだん đọc 判 thành ぱん là sai。",
    "voc": "判断（はんだん）：phán đoán, quyết định； 正しい（ただしい）：đúng đắn； いつも：luôn luôn"
  },
  {
    "s": "テスト の 結果 が 出ました。",
    "t": "結果",
    "r": "けっか",
    "w": ["けっかあ", "けか", "けつか"],
    "exp": "結果 đọc là けっか（結 けつ→けっ、果 か）。けっかあ thêm あ thừa、けか thiếu っ、けつか đọc 結 thành けつ là sai。",
    "voc": "結果（けっか）：kết quả； テスト：bài kiểm tra； 出る（でる）：ra, xuất hiện"
  },
  {
    "s": "二人 は 協力 して 仕事 を しました。",
    "t": "協力",
    "r": "きょうりょく",
    "w": ["きょうりょ", "きょうりょっく", "きょりょく"],
    "exp": "協力 đọc là きょうりょく（協 きょう、力 りょく）。きょうりょ thiếu âm く、きょうりょっく thêm っ thừa、きょりょく đọc 協 thành きょ là sai。",
    "voc": "協力（きょうりょく）：hợp tác； 仕事（しごと）：công việc； 二人（ふたり）：hai người"
  }
  ],
  hyoki: [
  {
    "s": "健康 は 人生 で いちばん じゅうよう な こと です。",
    "h": "じゅうよう",
    "k": "重要",
    "w": ["重容", "十要", "重陽"],
    "exp": "じゅうよう viết là 重要（重 じゅう、要 よう）。重容 dùng 容 sai chữ、十要 dùng 十 sai chữ、重陽 dùng 陽 sai chữ。",
    "voc": "重要（じゅうよう）：quan trọng； 健康（けんこう）：sức khỏe； 人生（じんせい）：cuộc đời"
  },
  {
    "s": "あの ビル は とても あんぜん です。",
    "h": "あんぜん",
    "k": "安全",
    "w": ["安金", "安然", "安前"],
    "exp": "あんぜん viết là 安全（安 あん、全 ぜん）。安金 dùng 金 sai chữ、安然 dùng 然 sai chữ、安前 dùng 前 sai chữ。",
    "voc": "安全（あんぜん）：an toàn； ビル：tòa nhà； とても：rất"
  },
  {
    "s": "駅 まで の 道 が べんり です。",
    "h": "べんり",
    "k": "便利",
    "w": ["便理", "便力", "便和"],
    "exp": "べんり viết là 便利（便 べん、利 り）。便理 dùng 理 sai chữ、便力 dùng 力 sai chữ、便和 dùng 和 sai chữ。",
    "voc": "便利（べんり）：tiện lợi； 駅（えき）：nhà ga； 道（みち）：con đường"
  },
  {
    "s": "先生 に れんらく して ください。",
    "h": "れんらく",
    "k": "連絡",
    "w": ["連終", "連楽", "連格"],
    "exp": "れんらく viết là 連絡（連 れん、絡 らく）。連終 dùng 終 sai chữ、連楽 dùng 楽 sai chữ、連格 dùng 格 sai chữ。",
    "voc": "連絡（れんらく）：liên lạc； 先生（せんせい）：thầy cô； ください：xin hãy"
  },
  {
    "s": "旅行 の きろく を ノート に 書きました。",
    "h": "きろく",
    "k": "記録",
    "w": ["記六", "記力", "記緑"],
    "exp": "きろく viết là 記録（記 き、録 ろく）。記六 dùng 六 sai chữ、記力 dùng 力 sai chữ、記緑 dùng 緑 sai chữ。",
    "voc": "記録（きろく）：ghi chép, kỷ lục； 旅行（りょこう）：du lịch； 書く（かく）：viết"
  }
  ],
  ctx: [
  {
    "s": "彼 の 話 を 聞いて、将来 へ の （　）が わいて きました。",
    "a": "きぼう",
    "w": ["けいかく", "もくてき", "りゆう"],
    "exp": "Câu đúng là 「将来への希望がわいてきました」— hi vọng về tương lai trỗi dậy. 計画 là kế hoạch, 目的 là mục đích, 理由 là lý do, đều không đi với 「わいてくる (trỗi dậy)」。",
    "voc": "希望（きぼう）：hi vọng； 将来（しょうらい）：tương lai； 話（はなし）：câu chuyện"
  },
  {
    "s": "申し込み に は、写真 が 2枚 （　）です。",
    "a": "ひつよう",
    "w": ["たいせつ", "じゅうよう", "ふくざつ"],
    "exp": "申し込みには写真が2枚「必要（ひつよう）です」が自然。大切（たいせつ）・重要（じゅうよう）は「必要」と意味が違い、「写真が2枚大切です」とは言わない。複雑（ふくざつ）は「phức tạp」で合わない。",
    "voc": "必要（ひつよう）：cần thiết； 申し込み（もうしこみ）：đăng ký； 写真（しゃしん）：ảnh"
  },
  {
    "s": "料理 を 始める 前 に、材料 の （　）を します。",
    "a": "じゅんび",
    "w": ["せいり", "そうじ", "けんさ"],
    "exp": "料理を始める前に材料の「準備（じゅんび）をします」が自然。せいりは sắp xếp、掃除（そうじ）は dọn dẹp、検査（けんさ）は kiểm traで、材料の前にする動作として合わない。",
    "voc": "準備（じゅんび）：chuẩn bị； 材料（ざいりょう）：nguyên liệu； 料理（りょうり）：nấu ăn"
  },
  {
    "s": "先生 の 話 を 聞いて、やっと 問題 の （　）が できました。",
    "a": "りかい",
    "w": ["りよう", "りれき", "りそう"],
    "exp": "Câu đúng là 「問題の理解ができました」— cuối cùng đã hiểu được bài tập. 「利用」là sử dụng, 「りれき」là lý lịch, 「理想」là lý tưởng, đều không đi với 「問題の〜ができました」。",
    "voc": "理解（りかい）：hiểu, lý giải； 問題（もんだい）：vấn đề, bài tập； やっと：cuối cùng thì"
  },
  {
    "s": "夜、暗い 道 を 歩く とき は、足元 に （　）して ください。",
    "a": "ちゅうい",
    "w": ["ちゅうし", "ちゅうもん", "ちゅうしん"],
    "exp": "足元に「注意（ちゅうい）してください」が自然。中止（ちゅうし）は hủy bỏ、注文（ちゅうもん）は đặt hàng、中心（ちゅうしん）は trung tâmで、足元に〜してと言う文と合わない。",
    "voc": "注意（ちゅうい）：chú ý； 足元（あしもと）：dưới chân； 暗い（くらい）：tối"
  },
  {
    "s": "彼 は 日本 の 文化 に （　）が あります。",
    "a": "きょうみ",
    "w": ["きかい", "きおく", "きげん"],
    "exp": "Câu đúng là 「日本の文化に興味があります」— quan tâm đến văn hóa Nhật Bản. 「機会」là cơ hội, 「きおく」là trí nhớ, 「起源」là nguồn gốc, đều không diễn tả sự quan tâm với cấu trúc 「〜があります」。",
    "voc": "興味（きょうみ）：hứng thú, quan tâm； 文化（ぶんか）：văn hóa； 日本（にほん）：Nhật Bản"
  },
  {
    "s": "新しい ルール について、先生 が （　）しました。",
    "a": "せつめい",
    "w": ["せいり", "せいさく", "せんもん"],
    "exp": "Câu đúng là 「先生が説明しました」— thầy cô đã giải thích về quy tắc mới. 「せいり」là sắp xếp, 「せいさく」は作ること (chế tác) と政策 (chính sách) のどちらにも読める, 「専門」là chuyên môn, đều không hợp với câu 「ルールについて〜しました」。",
    "voc": "説明（せつめい）：giải thích； ルール：quy tắc； 先生（せんせい）：thầy cô"
  }
  ],
  syn: [
  {
    "s": "庭 に、おおきい 木 が 一本 立って います。",
    "t": "おおきい",
    "a": "きょだい",
    "w": ["ちいさい", "ほそい", "ひくい"],
    "exp": "おおきい（大きい）の類義語は「巨大（きょだい）」で、大きな木を「巨大な木」と言える。小さい（ちいさい）は反対語、細い（ほそい）は「mảnh」、低い（ひくい）は「thấp」で合わない。",
    "voc": "大きい（おおきい）：to lớn； 巨大（きょだい）：khổng lồ； 庭（にわ）：sân vườn； 木（き）：cây"
  },
  {
    "s": "この 店 の 料理 は とても おいしい です。",
    "t": "おいしい",
    "a": "うまい",
    "w": ["まずい", "からい", "あまい"],
    "exp": "おいしいの類義語は「うまい」で、料理がおいしいことを「うまい」と言える。まずいは反対語、辛い（からい）は「cay」、甘い（あまい）は「ngọt」で、味の種類を表すだけでおいしいの類義語ではない。",
    "voc": "おいしい：ngon； うまい：ngon (cách nói thân mật)； 料理（りょうり）：món ăn； 店（みせ）：cửa hàng"
  },
  {
    "s": "彼女 は 頭 が いい です。",
    "t": "頭 が いい",
    "a": "かしこい",
    "w": ["やさしい", "げんき", "しずか"],
    "exp": "「頭がいい」の類義語は「賢い（かしこい）」で、頭のよさを表す。優しい（やさしい）は hiền lành、元気（げんき）は khỏe mạnh、静か（しずか）は yên tĩnhで、頭のよさとは関係ない。",
    "voc": "頭がいい（あたまがいい）：thông minh； 賢い（かしこい）：thông minh, khôn ngoan； 彼女（かのじょ）：cô ấy"
  },
  {
    "s": "この 問題 は とても むずかしい です。",
    "t": "むずかしい",
    "a": "困難",
    "w": ["簡単", "便利", "安全"],
    "exp": "むずかしい（難しい）の類義語は「困難（こんなん）」で、「困難な問題」と言える。簡単（かんたん）は反対語、便利（べんり）は tiện lợi、安全（あんぜん）は an toànで合わない。",
    "voc": "難しい（むずかしい）：khó； 困難（こんなん）：khó khăn； 問題（もんだい）：vấn đề"
  },
  {
    "s": "電車 が とても こんで います。",
    "t": "こんで",
    "a": "満員",
    "w": ["空いて", "静か", "速い"],
    "exp": "「こんでいる（混んでいる）」の類義語は「満員（まんいん）」で、電車が満員だと言える。空いている（すいている）は反対語、静か（しずか）は yên tĩnh、速い（はやい）は nhanhで合わない。",
    "voc": "混む（こむ）：đông đúc； 満員（まんいん）：chật kín, đông nghịt； 電車（でんしゃ）：tàu điện"
  }
  ],
  yoho: [
  {
    "t": "きる",
    "s": ["セーター を きると、体 が 暖かく なります。", "靴 を きると、体 が 暖かく なります。", "帽子 を きると、体 が 暖かく なります。", "眼鏡 を きると、体 が 暖かく なります。"],
    "a": 0,
    "exp": "「きる (mặc)」dùng cho áo len và quần áo phần thân trên. Giày đi với 「はく」, mũ đi với 「かぶる」, kính đi với 「かける」, nên không dùng 「きる」 với chúng。",
    "voc": "着る（きる）：mặc (áo)； セーター：áo len； 暖かい（あたたかい）：ấm áp"
  },
  {
    "t": "かぶる",
    "s": ["寒い日は、帽子をかぶるのが好きです。", "寒い日は、セーターをかぶるのが好きです。", "寒い日は、靴をかぶるのが好きです。", "寒い日は、眼鏡をかぶるのが好きです。"],
    "a": 0,
    "exp": "「かぶる (đội)」dùng cho mũ và những thứ đội lên đầu. Áo len đi với 「きる」, giày đi với 「はく」, kính đi với 「かける」, nên không dùng 「かぶる」 với chúng。",
    "voc": "被る（かぶる）：đội (mũ)； 帽子（ぼうし）：mũ； 寒い（さむい）：lạnh； 好き（すき）：thích"
  },
  {
    "t": "さす",
    "s": ["雨の日は、帽子をさすと、体がぬれません。", "雨の日は、傘をさすと、体がぬれません。", "雨の日は、コートをさすと、体がぬれません。", "雨の日は、手袋をさすと、体がぬれません。"],
    "a": 1,
    "exp": "「さす (che ô)」chỉ dùng với ô (傘をさす). Mũ đi với 「かぶる」, áo khoác đi với 「きる」, găng tay đi với 「はめる／つける」, nên không dùng 「さす」 với chúng。",
    "voc": "差す（さす）：che (ô)； 傘（かさ）：ô, dù； 雨（あめ）：mưa； ぬれる：bị ướt"
  },
  {
    "t": "かける",
    "s": ["帽子をかけると、字がよく見えます。", "セーターをかけると、字がよく見えます。", "眼鏡をかけると、字がよく見えます。", "靴をかけると、字がよく見えます。"],
    "a": 2,
    "exp": "「かける」は眼鏡をかけるときに使う。帽子をかけるは「フックに掛ける（treo mũ）」の意味になり、セーターや靴をかけるも字が見える文と合わない。正しくは帽子「かぶる」、セーター「きる」、靴「はく」。",
    "voc": "掛ける（かける）：đeo (kính)； 眼鏡（めがね）：kính mắt； 字（じ）：chữ； 見える（みえる）：nhìn thấy"
  },
  {
    "t": "まく",
    "s": ["春に、庭に花をまく予定です。", "春に、庭に木をまく予定です。", "春に、庭に石をまく予定です。", "春に、庭に種をまく予定です。"],
    "a": 3,
    "exp": "「まく (gieo hạt)」chỉ dùng với hạt giống (種をまく). Hoa và cây thì 「植える (trồng)」, đá thì không 「まく」. Chỉ có gieo hạt là tự nhiên。",
    "voc": "まく：gieo (hạt)； 種（たね）：hạt giống； 庭（にわ）：sân vườn； 春（はる）：mùa xuân"
  }
  ],
  kotoba: [
  {
    "s": "この 仕事 は、体力（　）な 作業 が 多い です。",
    "a": "的",
    "w": ["性", "化", "点"],
    "exp": "Thêm 「的」vào sau 体力 thành 「体力的な (mang tính thể lực)」, nên nói được 「体力的な作業」. 「体力性」「体力化」「体力点」không phải là từ đúng.",
    "voc": "体力的（たいりょくてき）：mang tính thể lực； 作業（さぎょう）：công việc, thao tác； 体力（たいりょく）：thể lực"
  },
  {
    "s": "来週 の 会議 に、ぜひ （　）参加 ください。",
    "a": "ご",
    "w": ["お", "ごう", "おん"],
    "exp": "「参加」là từ đọc âm Hán (on'yomi) nên tiền tố kính ngữ đúng là 「ご」—「ご参加ください」. 「お参加」không nói được. 「ごう」「おん」không phải là tiền tố.",
    "voc": "参加（さんか）：tham gia； 会議（かいぎ）：cuộc họp； 来週（らいしゅう）：tuần sau"
  },
  {
    "s": "雨 の 日 に 使う （　）を 買いました。",
    "a": "あまぐ",
    "w": ["あまく", "あまぐう", "あまこ"],
    "exp": "「雨具」gồm 「雨 (あま) + 具 (ぐ)」: trong từ ghép, âm đầu của từ sau bị đục (hiện tượng rendaku) nên đọc là 「あまぐ」. 「あまく」thiếu rendaku, 「あまぐう」「あまこ」không phải cách đọc đúng.",
    "voc": "雨具（あまぐ）：đồ dùng khi mưa (ô, áo mưa)； 雨（あめ）：mưa； 買う（かう）：mua"
  },
  {
    "s": "最近、仕事 の （　）が 進んで います。",
    "a": "自動化",
    "w": ["自動的", "自動性", "自動点"],
    "exp": "Câu đúng là 「仕事の自動化が進んでいます」— tự động hóa đang tiến triển. 「自動的」là hậu tố tạo tính từ nên không nói 「自動的が進む」. 「自動性」「自動点」không thành câu trong văn cảnh này.",
    "voc": "自動化（じどうか）：tự động hóa； 自動（じどう）：tự động； 進む（すすむ）：tiến triển"
  },
  {
    "s": "安全（　）、問題 は ありません。",
    "a": "上",
    "w": ["的", "性", "化"],
    "exp": "「安全上、問題はありません」là cách nói cố định, nghĩa là 「xét về mặt an toàn thì không có vấn đề」. 「安全的」「安全性」「安全化」không thành câu trong văn cảnh này.",
    "voc": "安全上（あんぜんじょう）：xét về mặt an toàn； 安全（あんぜん）：an toàn； 問題（もんだい）：vấn đề"
  }
  ],
  g1dlg: [
  {
    "d": ["日本語を勉強し始めたのは、いつですか。", "高校のとき、日本人の留学生との出会い（　）、日本語の勉強を始めました。"],
    "a": "をきっかけに",
    "w": ["を中心に", "をめぐって", "をもとに"],
    "p": "〜をきっかけに",
    "exp": "「出会いをきっかけに」は「cuộc gặp gỡ đó là dịp bắt đầu」の意味で、勉強を始めた理由・きっかけを表す。「を中心に」は lấy làm trung tâm、「をめぐって」は xoay quanh、「をもとに」は dựa trênで、勉強を始めたきっかけとは言えない。",
    "voc": "出会い（であい）：cuộc gặp gỡ； 留学生（りゅうがくせい）：du học sinh； 勉強（べんきょう）：học tập"
  },
  {
    "d": ["田中さん、最近元気がないね。どうしたの。", "実は、先月風邪をひいて（　）、体調がよくないんです。"],
    "a": "以来",
    "w": ["かたわら", "ばかりに", "どころか"],
    "p": "〜て以来",
    "exp": "「風邪をひいて以来」は「từ khi bị cảm đến nay」の意味で、体調が悪い状態が続いていることを表す。「かたわら」は vừa làm vừa、「ばかりに」は chỉ vì、「どころか」は ngược lạiで、「ひいて」の後には入らない。",
    "voc": "以来（いらい）：từ khi… đến nay； 風邪（かぜ）：cảm cúm； 体調（たいちょう）：tình trạng sức khỏe"
  },
  {
    "d": ["体調が悪かったのに、試験を受けたんですか。", "ええ、熱があった（　）、試験を受けました。"],
    "a": "にもかかわらず",
    "w": ["にすぎない", "に先立って", "に比べて"],
    "p": "〜にもかかわらず",
    "exp": "「熱があったにもかかわらず」は「dù bị sốt nhưng」の意味で、体調が悪いのに試験を受けたことを表す。「にすぎない」は chỉ là、「に先立って」は trước khi、「に比べて」は so vớiで、この文には合わない。",
    "voc": "熱（ねつ）：sốt； 試験（しけん）：kỳ thi； 体調（たいちょう）：tình trạng sức khỏe； 受ける（うける）：dự thi"
  }
  ],
  g1: [
  {
    "s": "新工場の建設（　）、地元住民への説明会が開かれ、工事が始まる前に住民の意見が聞かれた。",
    "a": "に先立って",
    "w": ["に際して", "にあたって", "にわたって"],
    "p": "〜に先立って",
    "exp": "「建設に先立って」は「trước khi xây dựng」の意味。説明会は工事が始まる前に開かれたので「先立って」だけが合う。「に際して」「にあたって」は「nhân dịp」の意味で、まだ始まっていない建設の「際」とは言えない。「にわたって」は「trong suốt」の意味で合わない。",
    "voc": "建設（けんせつ）：xây dựng； 説明会（せつめいかい）：buổi giải thích； 住民（じゅうみん）：dân cư"
  },
  {
    "s": "卒業式（　）、校長先生が卒業生にはなむけの言葉を述べた。",
    "a": "に際して",
    "w": ["に先立って", "に比べて", "に沿って"],
    "p": "〜に際して",
    "exp": "「卒業式に際して」は「nhân dịp lễ tốt nghiệp」の決まった言い方。式の中で述べる言葉なので、式の前を表す「に先立って」は合わない。「に比べて」は so sánh、「に沿って」は dọc theoで合わない。",
    "voc": "卒業式（そつぎょうしき）：lễ tốt nghiệp； 校長（こうちょう）：hiệu trưởng； はなむけ：lời chúc tiễn biệt"
  },
  {
    "s": "参加者の人数（　）、会場の広さや料理の量を決めます。",
    "a": "に応じて",
    "w": ["に比べて", "に関して", "を通じて"],
    "p": "〜に応じて",
    "exp": "「人数に応じて」は「tùy theo số người」の意味で、状況に合わせて決めることを表す。「に比べて」は so sánh、「に関して」は về việc、「を通じて」は thông quaで、この文には合わない。",
    "voc": "参加者（さんかしゃ）：người tham gia； 人数（にんずう）：số người； 会場（かいじょう）：địa điểm tổ chức"
  },
  {
    "s": "日本語を勉強する（　）、日本の文化への理解も深まってきた。",
    "a": "につれて",
    "w": ["に比べて", "に関して", "を通じて"],
    "p": "〜につれて",
    "exp": "「勉強するにつれて」は「càng học càng」の意味で、勉強が進むにつれて理解も深まることを表す。「に比べて」は so sánh、「に関して」は về việc、「を通じて」は thông quaで合わない。",
    "voc": "理解（りかい）：sự hiểu biết； 文化（ぶんか）：văn hóa； 深まる（ふかまる）：sâu sắc thêm"
  },
  {
    "s": "毎日練習している（　）、なかなか上手にならない。",
    "a": "ものの",
    "w": ["どころか", "からこそ", "にすぎない"],
    "p": "〜ものの",
    "exp": "「練習しているものの」は「dù luyện tập nhưng」の意味で、逆接を表す。「どころか」は ngược lại、「からこそ」は chính vì、「にすぎない」は chỉ làで、この文には合わない。",
    "voc": "練習（れんしゅう）：luyện tập； 上手（じょうず）：giỏi； なかなか：mãi mà không"
  },
  {
    "s": "彼は有名な歌手（　）、歌はすばらしかった。",
    "a": "だけあって",
    "w": ["にもかかわらず", "にすぎない", "どころか"],
    "p": "〜だけあって",
    "exp": "「有名な歌手だけあって」は「đúng là ca sĩ nổi tiếng nên」の意味で、理由・当然の結果を表す。「にもかかわらず」は dù…nhưng、「にすぎない」は chỉ là、「どころか」は ngược lạiで、この文には合わない。",
    "voc": "有名（ゆうめい）：nổi tiếng； 歌手（かしゅ）：ca sĩ； 歌（うた）：bài hát"
  },
  {
    "s": "家族の支えがあった（　）、今の私があるのだ。",
    "a": "からこそ",
    "w": ["ばかりに", "どころか", "にすぎない"],
    "p": "〜からこそ",
    "exp": "「支えがあったからこそ」は「chính vì có sự giúp đỡ nên」の意味で、理由を強調する。「ばかりに」は chỉ vì (tiêu cực)、「どころか」は ngược lại、「にすぎない」は chỉ làで、この文には合わない。",
    "voc": "支え（ささえ）：sự giúp đỡ, chỗ dựa； 家族（かぞく）：gia đình； 今（いま）：bây giờ"
  },
  {
    "s": "実際にやってみ（　）、本当の難しさは分からない。",
    "a": "ないことには",
    "w": ["ずにはいられない", "ほかない", "ないわけにはいかない"],
    "p": "〜ないことには",
    "exp": "「やってみないことには分からない」は「nếu không thử thì không hiểu」の意味。「ずにはいられない」は không thể không、「ほかない」は không còn cách nào khácで合わない。「ないわけにはいかない」は「không thể không làm (bắt buộc phải làm)」の意味で、条件を表す「ないことには」とは違い、「分からない」と結びつかない。",
    "voc": "実際（じっさい）：thực tế； 難しさ（むずかしさ）：sự khó khăn； 分かる（わかる）：hiểu"
  },
  {
    "s": "彼はまだ新人（　）、まわりの人の助けが必要です。",
    "a": "にすぎない",
    "w": ["どころか", "ばかりに", "をもって"],
    "p": "〜にすぎない",
    "exp": "「まだ新人にすぎない」は「chỉ là người mới」の意味で、まだ経験が浅いことを表す。「どころか」は ngược lại、「ばかりに」は chỉ vì、「をもって」は bằng・vớiで、この文には合わない。",
    "voc": "新人（しんじん）：người mới； まわり：xung quanh； 助け（たすけ）：sự giúp đỡ"
  }
  ],
  star: [
  {
    "pre": "世界中の人々と",
    "post": "。",
    "chunks": ["インターネット", "を介して", "交流する", "ことができる"],
    "p": "〜を介して",
    "exp": "Thứ tự đúng duy nhất là 「世界中の人々とインターネットを介して交流することができる。」— 「世界中の人々と」が khóa ở đầu câu nên không thể đảo lên sau; 「インターネットを介して (thông qua Internet)」phải đứng liền nhau và đứng trước động từ, 「交流することができる」phải đứng cuối (「交流するインターネットを介して…」hay「インターネットを交流する…」đều không tự nhiên).",
    "voc": "インターネット：Internet； 世界中（せかいじゅう）：khắp thế giới； 交流（こうりゅう）：giao lưu； 介して（かいして）：thông qua"
  },
  {
    "pre": "今年の売り上げは",
    "post": "。",
    "chunks": ["去年", "に比べて", "2倍に", "なった"],
    "p": "〜に比べて",
    "exp": "Thứ tự đúng duy nhất là 「今年の売り上げは去年に比べて2倍になった。」— chủ đề 「今年の売り上げは」khóa ở đầu câu nên không thể đảo xuống sau; 「去年に比べて (so với năm ngoái)」phải đứng liền nhau, 「2倍になった」phải đứng cuối (「2倍に去年に比べてなった」hay「去年2倍に比べてなった」đều không tự nhiên).",
    "voc": "去年（きょねん）：năm ngoái； 売り上げ（うりあげ）：doanh số bán hàng； 2倍（にばい）：gấp đôi； 比べる（くらべる）：so sánh"
  },
  {
    "pre": "専門家に",
    "post": "。",
    "chunks": ["この問題", "に関して", "意見を", "聞いた"],
    "p": "〜に関して",
    "exp": "Thứ tự đúng duy nhất là 「専門家にこの問題に関して意見を聞いた。」— 「専門家に」khóa ở đầu câu nên không thể đảo xuống sau; 「この問題に関して (về vấn đề này)」phải đứng liền nhau, 「意見を聞いた」phải đứng cuối và không được tách ra (「意見をこの問題に関して聞いた」không tự nhiên).",
    "voc": "問題（もんだい）：vấn đề； 専門家（せんもんか）：chuyên gia； 意見（いけん）：ý kiến； 関して（かんして）：về việc"
  },
  {
    "pre": "",
    "post": "。",
    "chunks": ["彼はまだ学生", "とはいえ", "仕事の経験は", "豊富だ"],
    "p": "〜とはいえ",
    "exp": "正しい順番は「彼はまだ学生とはいえ、仕事の経験は豊富だ。」で、「学生とはいえ（dù còn là sinh viên nhưng）」が逆接を表す。",
    "voc": "学生（がくせい）：sinh viên, học sinh； 経験（けいけん）：kinh nghiệm； 豊富（ほうふ）：phong phú"
  },
  {
    "pre": "",
    "post": "。",
    "chunks": ["結果", "にかかわらず", "最後まで", "がんばります"],
    "p": "〜にかかわらず",
    "exp": "正しい順番は「結果にかかわらず最後までがんばります。」で、「結果にかかわらず（bất kể kết quả）」が条件に関係なく行うことを表す。",
    "voc": "結果（けっか）：kết quả； 最後（さいご）：cuối cùng； がんばる：cố gắng"
  }
  ],
  bunsho: [
  {
    "intro": "次の文章の（　1　）〜（　5　）に入る最もよいものを、1・2・3・4から一つ選びなさい。",
    "p": "最近、多くの会社で在宅勤務が増えている。（　1　）、出社する日が減り、通勤の時間が短くなった。その結果、家族と過ごす時間が増えたという人も多い。（　2　）、在宅勤務には問題もある。たとえば、仕事と生活の区別がつきにくくなることだ。（　3　）、同僚と直接話す機会が減り、情報の共有が遅れることもある。（　4　）、在宅勤務を続けるためには、会社と社員の両方が工夫をしなければならない。（　5　）、在宅勤務は便利だが、課題も多い働き方だと言える。",
    "b": [
      { "a": "そのため", "w": ["しかし", "たとえば", "一方で"] },
      { "a": "しかし", "w": ["そのため", "つまり", "たとえば"] },
      { "a": "また", "w": ["しかし", "つまり", "そのため"] },
      { "a": "したがって", "w": ["しかし", "たとえば", "一方で"] },
      { "a": "要するに", "w": ["しかし", "そのため", "たとえば"] }
    ],
    "exp": "(1) Vì làm việc tại nhà tăng lên nên số ngày đến công ty giảm — quan hệ kết quả nên dùng 「そのため」. 「しかし」(ngược lại), 「たとえば」(ví dụ), 「一方で」(mặt khác) đều sai. (2) Sau ý tốt thì nêu vấn đề nên dùng 「しかし」ngược lại. 「そのため」(kết quả), 「つまり」(nói cách khác), 「たとえば」(ví dụ) đều sai. (3) Thêm một vấn đề nữa nên dùng 「また」. 「しかし」「つまり」「そのため」đều sai. (4) Vì có vấn đề nên cần cố gắng — kết luận nên dùng 「したがって」. 「しかし」「たとえば」「一方で」đều sai. (5) Tổng kết toàn bài nên dùng 「要するに」. 「しかし」「そのため」「たとえば」đều sai.",
    "voc": "在宅勤務（ざいたくきんむ）：làm việc tại nhà； 出社（しゅっしゃ）：đi làm (đến công ty)； 通勤（つうきん）：đi làm (di chuyển)； 同僚（どうりょう）：đồng nghiệp； 工夫（くふう）：tìm cách, xoay xở； 課題（かだい）：vấn đề cần giải quyết"
  }
  ],
  readS: [
  {
    "p": "今日 の 午後 から、雨 が ふる そう です。天気予報 に よると、夜 まで 雨 が 続く そう です。わたし は 傘 を 持って 出かけました。洗濯物 は 家 の 中 に 入れました。雨 の 日 は 家 で ゆっくり 本 を 読む の が 好き です。明日 は 晴れる そう です。",
    "q": "今日 の 天気 について、正しい もの は どれ です か。",
    "o": ["午後 から 雨 が ふる そう です。", "一日中 晴れる そう です。", "朝 から 雪 が ふる そう です。", "夜 は 晴れる そう です。"],
    "a": 0,
    "e": "Dự báo nói mưa từ chiều đến tối.",
    "exp": "Theo dự báo thời tiết, mưa từ chiều đến tối. Vì vậy 「午後から雨がふるそうです」là đúng. 「一日中晴れる」(nắng cả ngày), 「朝から雪」(tuyết từ sáng), 「夜は晴れる」(tối trời nắng) đều trái với dự báo.",
    "voc": "天気予報（てんきよほう）：dự báo thời tiết； 雨（あめ）：mưa； 傘（かさ）：ô, dù； 晴れる（はれる）：trời nắng"
  },
  {
    "p": "市民プールの入場料は、大人500円、子ども200円です。プールは朝9時から夜8時まで開いています。今日、田中さんの家族は大人2人と子ども3人でプールに行きました。",
    "q": "田中さんの家族は、入場料をいくら払いましたか。",
    "o": ["1,600円", "1,500円", "1,100円", "2,000円"],
    "a": 0,
    "calc": true,
    "e": "大人500円、子ども200円です。大人2人と子ども3人でプールに行きました。",
    "exp": "Người lớn 500 yên × 2 người = 1.000 yên, trẻ em 200 yên × 3 người = 600 yên, tổng cộng 1.600 yên. 1.500 yên, 1.100 yên và 2.000 yên đều tính sai.",
    "voc": "入場料（にゅうじょうりょう）：phí vào cửa； 大人（おとな）：người lớn； 子ども（こども）：trẻ em； 家族（かぞく）：gia đình"
  },
  {
    "p": "山田さんは毎日、朝8時に家を出て、電車で会社へ行きます。電車は30分かかります。会社は駅から歩いて10分です。今日は電車が遅れて、会社に9時に着きました。いつもは8時40分に着きます。",
    "q": "山田さんについて、正しいものはどれですか。",
    "o": ["毎日車で会社へ行きます。", "いつもは8時40分に会社に着きます。", "会社は家から歩いて10分です。", "今日は8時40分に会社に着きました。"],
    "a": 1,
    "e": "いつもは8時40分に着きます。",
    "exp": "Anh Yamada đi làm bằng tàu điện nên 「車で」sai. Công ty cách ga 10 phút đi bộ, không phải cách nhà. Hôm nay anh đến lúc 9 giờ nên không phải 8 giờ 40. 8 giờ ra khỏi nhà, đi tàu 30 phút rồi đi bộ 10 phút thì đến lúc 8 giờ 40, khớp với bài. Chỉ có 「いつもは8時40分に会社に着きます」là đúng.",
    "voc": "電車（でんしゃ）：tàu điện； 会社（かいしゃ）：công ty； 遅れる（おくれる）：bị trễ； 着く（つく）：đến"
  },
  {
    "p": "来週の月曜日から水曜日まで、スーパーは改装のため休みです。木曜日からは、朝9時から夜9時まで営業します。今までは夜8時まででした。改装の後、店の中は広くなります。",
    "q": "スーパーについて、正しいものはどれですか。",
    "o": ["月曜日から水曜日まで営業します。", "今までは夜9時まで営業していました。", "木曜日からは夜9時まで営業します。", "改装の後、店は小さくなります。"],
    "a": 2,
    "e": "木曜日からは、朝9時から夜9時まで営業します。",
    "exp": "Từ thứ Hai đến thứ Tư siêu thị nghỉ nên 「営業します」sai. Trước đây mở đến 8 giờ tối chứ không phải 9 giờ. Sau khi sửa chữa cửa hàng rộng ra nên 「小さくなる」sai. Chỉ có 「木曜日からは夜9時まで営業します」là đúng.",
    "voc": "改装（かいそう）：sửa chữa, cải tạo； 営業（えいぎょう）：mở cửa kinh doanh； 休み（やすみ）：nghỉ； 広い（ひろい）：rộng"
  },
  {
    "p": "日本語のスピーチコンテストが、来月15日に市民会館で行われます。参加者は12人です。午前10時に始まり、午後1時に終わる予定です。入場は無料ですが、席は200席しかありません。",
    "q": "スピーチコンテストについて、正しいものはどれですか。",
    "o": ["入場料は500円です。", "午後3時に終わる予定です。", "席は300席あります。", "参加者は12人です。"],
    "a": 3,
    "e": "参加者は12人です。",
    "exp": "Vào cửa miễn phí nên 「入場料は500円」sai. Kết thúc lúc 1 giờ chiều chứ không phải 3 giờ. Ghế chỉ có 200 chứ không phải 300. Chỉ có 「参加者は12人です」là đúng.",
    "voc": "参加者（さんかしゃ）：người tham gia； 無料（むりょう）：miễn phí； 会館（かいかん）：hội quán； 予定（よてい）：dự định"
  }
  ],
  readM: [
  {
    "p": "わたし の 町 で は、自転車 に 乗る 人 が 増えて います。自転車 は 便利 です が、ルール を 守らなければ、事故 の 原因 に なります。わたし は 毎朝、自転車 で 会社 へ 行きます。交差点 で は 必ず 止まって、左右 を よく 見ます。夜 は ライト を つけます。スマートフォン を 見ながら 運転 する の は、とても 危険 です。去年、友だち が スマートフォン を 見ながら 運転 して いて、歩いて いる 人 と ぶつかり そう に なりました。幸い、けが は ありませんでした が、それ から は スマートフォン を 見ない よう に して います。町 で は、自転車 の 安全教室 も 開かれて います。安全教室 で は、信号 の 見方 や 交差点 で の 止まり方 を 教えます。子ども から 大人 まで、多く の 人 が 参加 して います。参加 した 子どもたち は、ルール を 守る こと の 大切 さ を 学びます。ルール を 守る こと は、自分 と 他の人 を 守る こと です。自転車 に 乗る とき は、ヘルメット を かぶる こと も 大切 です。",
    "qs": [
      {
        "q": "毎朝、筆者 は どうやって 会社 へ 行きます か。",
        "o": ["自転車 で 行きます。", "電車 で 行きます。", "バス で 行きます。", "歩いて 行きます。"],
        "a": 0,
        "e": "Tác giả đi làm bằng xe đạp mỗi sáng."
      },
      {
        "q": "筆者 の 友だち は どう しました か。",
        "o": ["自転車 から 落ちて、けが を しました。", "自転車 を なくしました。", "スマートフォン を 見ながら 運転 して いて、歩いて いる 人 と ぶつかり そう に なりました。", "電車 に 乗り遅れました。"],
        "a": 2,
        "e": "Bạn của tác giả vừa lái xe vừa xem điện thoại, suýt đâm vào người đi bộ."
      },
      {
        "q": "筆者 は 自転車 について どう 考えて います か。",
        "o": ["ルール は 守らなくて も いい です。", "ルール を 守る こと は、自分 と 他の人 を 守る こと です。", "自転車 は 危険 だ から、乗らない ほうが いい です。", "夜 は ライト を つけなくて も いい です。"],
        "a": 1,
        "e": "Tác giả cho rằng tuân thủ luật là bảo vệ mình và người khác."
      }
    ],
    "exp": "Q1: Tác giả đi làm bằng xe đạp mỗi sáng (「わたしは毎朝、自転車で会社へ行きます」). Q2: Bạn của tác giả vừa lái xe vừa xem điện thoại, suýt đâm vào người đi bộ. Bạn ấy không bị thương và cũng không làm mất xe. Q3: Tác giả cho rằng tuân thủ luật là bảo vệ mình và người khác.",
    "voc": "自転車（じてんしゃ）：xe đạp； 交差点（こうさてん）：ngã tư； 信号（しんごう）：đèn giao thông； ヘルメット：mũ bảo hiểm； 安全（あんぜん）：an toàn"
  },
  {
    "p": "わたしの町では、毎年秋に大きな祭りがあります。祭りは町の中心にある公園で行われます。去年は2万人の人が来ました。祭りでは、地元の店が食べ物を売ります。わたしのおすすめは、焼きそばです。毎年、祭りの最後には花火が上がります。花火は夜8時に始まります。去年は雨が降ったので、花火は30分遅れて始まりました。祭りの日は、公園の近くの道が歩行者だけになります。車は通れません。祭りの準備は、町の人たちが手伝います。わたしも去年、初めて手伝いました。朝からテントを立てたり、ごみを集めたりしました。大変でしたが、楽しかったです。今年も手伝う予定です。",
    "qs": [
      {
        "q": "祭りはどこで行われますか。",
        "o": ["町の中心にある公園で行われます。", "町の駅の前で行われます。", "町の学校で行われます。", "町の図書館で行われます。"],
        "a": 0,
        "e": "祭りは町の中心にある公園で行われます。"
      },
      {
        "q": "去年の花火について、正しいものはどれですか。",
        "o": ["夜8時に始まりました。", "雨が降ったので、30分遅れて始まりました。", "雨が降ったので、行われませんでした。", "夜9時に始まりました。"],
        "a": 1,
        "e": "去年は雨が降ったので、花火は30分遅れて始まりました。"
      },
      {
        "q": "筆者は去年、祭りで何をしましたか。",
        "o": ["焼きそばを売りました。", "祭りの準備を手伝いました。", "祭りのチラシを作りました。", "祭りで歌を歌いました。"],
        "a": 1,
        "e": "わたしも去年、初めて手伝いました。朝からテントを立てたり、ごみを集めたりしました。"
      }
    ],
    "exp": "Q1: Lễ hội tổ chức ở công viên trung tâm thị trấn (「祭りは町の中心にある公園で行われます」). Q2: Năm ngoái pháo hoa bắt đầu muộn 30 phút vì mưa — không phải bắt đầu lúc 8 giờ đúng, cũng không phải bị hủy. Q3: Năm ngoái tác giả giúp chuẩn bị lễ hội (dựng lều, nhặt rác). Bán yakisoba là các cửa hàng địa phương; không có chuyện làm tờ rơi hay hát.",
    "voc": "祭り（まつり）：lễ hội； 公園（こうえん）：công viên； 花火（はなび）：pháo hoa； 歩行者（ほこうしゃ）：người đi bộ； 準備（じゅんび）：chuẩn bị； 手伝う（てつだう）：giúp đỡ"
  },
  {
    "p": "田中さんは、去年から毎日歩くようにしています。きっかけは、医者に運動が足りないと言われたことです。最初は1日に15分だけ歩いていました。1か月後、30分歩けるようになりました。今では、1日に1時間歩いています。歩く時間は、朝の30分と夜の30分です。朝は駅まで歩き、夜は食事の後に近所を歩きます。歩き始めてから、体が軽くなり、よく眠れるようになりました。体重も3キロ減りました。田中さんは、歩くときに音楽を聞きます。好きな歌手の歌を聞くと、歩くのが楽しくなります。雨の日は、家の中でストレッチをします。田中さんは、これからも歩くことを続けたいと思っています。",
    "qs": [
      {
        "q": "田中さんが歩き始めたきっかけは何ですか。",
        "o": ["医者に運動が足りないと言われたことです。", "友だちにすすめられたことです。", "体重が増えたことです。", "新しい靴を買ったことです。"],
        "a": 0,
        "e": "きっかけは、医者に運動が足りないと言われたことです。"
      },
      {
        "q": "田中さんは今、1日にどのくらい歩いていますか。",
        "o": ["15分です。", "30分です。", "45分です。", "1時間です。"],
        "a": 3,
        "e": "今では、1日に1時間歩いています。"
      },
      {
        "q": "田中さんについて、正しいものはどれですか。",
        "o": ["雨の日は歩きませんが、家でストレッチをします。", "夜は歩きません。", "歩き始めてから、体重が増えました。", "音楽を聞かずに歩きます。"],
        "a": 0,
        "e": "雨の日は、家の中でストレッチをします。"
      }
    ],
    "exp": "Q1: Lý do bắt đầu đi bộ là bác sĩ nói thiếu vận động. Q2: Bây giờ anh Tanaka đi bộ 1 tiếng mỗi ngày (15 phút, 30 phút là chuyện trước đây). Q3: Ngày mưa thì tập giãn cơ ở nhà. Buổi tối anh cũng đi bộ 30 phút nên 「夜は歩きません」sai. Cân nặng giảm 3 kg nên 「増えました」sai. Anh nghe nhạc khi đi bộ nên 「聞かずに」sai.",
    "voc": "運動（うんどう）：vận động, thể dục； 体重（たいじゅう）：cân nặng； 軽い（かるい）：nhẹ； 眠る（ねむる）：ngủ； 続ける（つづける）：tiếp tục"
  }
  ],
  tougou: [
  {
    "p1": "田中さんは、リモートワークに賛成です。通勤の時間がなくなり、家族と過ごす時間が増えたからです。田中さんは、仕事も早く進むようになったと言います。家では集中できるからです。ただし、田中さんは、新しい社員にはリモートワークが難しいと考えています。まわりの人に質問しにくいからです。",
    "p2": "佐藤さんは、リモートワークに反対です。家では仕事と生活の区別がつきにくく、つい夜遅くまで働いてしまうからです。佐藤さんは、会社で働くほうが、同僚と話しやすく、仕事が進みやすいと言います。ただし、佐藤さんも、通勤の時間がもったいないと感じています。",
    "qs": [
      {
        "q": "田中さんと佐藤さんの意見について、正しいものはどれですか。",
        "o": ["二人ともリモートワークに賛成です。", "田中さんは賛成で、佐藤さんは反対です。", "二人ともリモートワークに反対です。", "田中さんは反対で、佐藤さんは賛成です。"],
        "a": 1,
        "e": "田中さんは、リモートワークに賛成です。佐藤さんは、リモートワークに反対です。"
      },
      {
        "q": "二人に共通していることは何ですか。",
        "o": ["二人とも通勤の時間がもったいないと感じています。", "二人ともリモートワークには問題があると考えています。", "二人とも家族と過ごす時間が増えたと言っています。", "二人とも家では集中できると言っています。"],
        "a": 1,
        "e": "田中さんは、新しい社員にはリモートワークが難しいと考えています。佐藤さんは、家では仕事と生活の区別がつきにくく、つい夜遅くまで働いてしまうと言っています。"
      }
    ],
    "exp": "Q1: Anh Tanaka tán thành, anh Sato phản đối nên 「田中さんは賛成で、佐藤さんは反対です」là đúng. Q2: Anh Tanaka cho rằng người mới khó làm việc từ xa, anh Sato nói khó phân biệt công việc và cuộc sống — cả hai đều thấy có vấn đề. Chỉ anh Sato thấy phí thời gian đi lại. Chỉ anh Tanaka nói thời gian với gia đình tăng lên. Chỉ anh Tanaka nói tập trung được ở nhà.",
    "voc": "リモートワーク：làm việc từ xa； 賛成（さんせい）：tán thành； 反対（はんたい）：phản đối； 集中（しゅうちゅう）：tập trung； 区別（くべつ）：phân biệt"
  }
  ],
  shuchou: [
  {
    "p": "最近、若い人たちの間で、本を読む人が減っていると言われています。スマートフォンで短い文章を読むことは多くても、長い本を読む時間は少なくなっているのです。私は、本を読むことには、スマートフォンでは得られないよさがあると思います。まず、本を読むと、集中力がつきます。本は長い文章ですから、最後まで読み続けるには集中しなければなりません。スマートフォンでは、すぐに別のページに移ることができますが、本ではそれができません。そのため、本を読む習慣がある人は、長い時間集中して考えることができるようになります。次に、本を読むと、想像力が豊かになります。小説を読むとき、私たちは登場人物の顔や声を頭の中で想像します。映画や動画では、顔や声がすでに決まっています。しかし、本では、読む人によって想像する世界が違います。その違いが、読書の楽しさだと思います。もちろん、スマートフォンも便利です。知りたいことをすぐに調べることができます。ニュースもすぐに読むことができます。しかし、スマートフォンで得られる情報は、短くて浅いことが多いです。本のように、深く考えるための情報は少ないのです。私は、スマートフォンを使うことをやめるべきだとは思いません。ただ、1日に30分でもいいので、本を読む時間を作ってほしいと思います。本を読む習慣は、すぐに身につくものではありません。しかし、少しずつ続けていけば、きっと本の楽しさが分かるようになるでしょう。",
    "qs": [
      {
        "q": "筆者によると、本を読むとどのような力がつきますか。",
        "o": ["集中力と想像力です。", "暗記力と計算力です。", "体力と集中力です。", "想像力と話す力です。"],
        "a": 0,
        "e": "本を読むと、集中力がつきます。本を読むと、想像力が豊かになります。"
      },
      {
        "q": "筆者はスマートフォンについてどう考えていますか。",
        "o": ["使うことをやめるべきだと思います。", "便利だが、情報は短くて浅いことが多いと思います。", "本より深く考えることができると思います。", "ニュースを読むのに便利ではないと思います。"],
        "a": 1,
        "e": "スマートフォンも便利です。スマートフォンで得られる情報は、短くて浅いことが多いです。"
      },
      {
        "q": "筆者が一番言いたいことは何ですか。",
        "o": ["スマートフォンを使わないほうがいいということです。", "1日に30分でも本を読む時間を作ってほしいということです。", "小説よりニュースを読むほうがいいということです。", "映画より本のほうが楽しいということです。"],
        "a": 1,
        "e": "1日に30分でもいいので、本を読む時間を作ってほしいと思います。"
      }
    ],
    "exp": "Q1: Tác giả nói đọc sách rèn khả năng tập trung và trí tưởng tượng. Không có chuyện khả năng ghi nhớ, khả năng tính toán, thể lực hay khả năng nói. Q2: Tác giả nói điện thoại cũng tiện lợi nhưng thông tin thường ngắn và nông. Tác giả không nói nên bỏ điện thoại, cũng không nói điện thoại giúp suy nghĩ sâu hơn sách. Q3: Điều tác giả muốn nói nhất là hãy dành 30 phút mỗi ngày để đọc sách. Tác giả không nói không nên dùng điện thoại.",
    "voc": "集中力（しゅうちゅうりょく）：khả năng tập trung； 想像力（そうぞうりょく）：trí tưởng tượng； 登場人物（とうじょうじんぶつ）：nhân vật xuất hiện； 習慣（しゅうかん）：thói quen； 深い（ふかい）：sâu sắc"
  }
  ],
  info: [
  {
    "tpl": "<b>市民料理教室・10月のご案内</b><br>教室の日：毎週土曜日<br>時間：午前10時〜午後0時30分<br>場所：市民センター2階・調理室<br>参加費：1回1,500円（材料費込み）<br>定員：各回20人（先着順）<br><table class=\"jl-tbl\"><tr><th>日</th><th>料理</th></tr><tr><td>10月3日（土）</td><td>和食の基本</td></tr><tr><td>10月10日（土）</td><td>パンの作り方</td></tr><tr><td>10月17日（土）</td><td>魚料理</td></tr><tr><td>10月24日（土）</td><td>お菓子作り</td></tr></table>申し込み：教室の日の3日前までに、電話で申し込んでください。<br>※10月10日は定員に達しました.",
    "inst": "つぎの案内を見て、質問に答えてください。答えは1・2・3・4から、いちばんいいものを一つえらんでください。",
    "q": "山田さんは、10月17日に魚料理の教室に参加したいと思っています。申し込みはいつまでにすればいいですか。",
    "opts": ["10月14日（水）", "10月15日（木）", "10月16日（金）", "10月17日（土）"],
    "ans": 0,
    "exp": "Món cá học ngày 17 tháng 10 (thứ Bảy), đăng ký trước ngày học 3 ngày nên hạn chót là ngày 14 tháng 10 (thứ Tư). Ngày 15 là trước 2 ngày, ngày 16 là hôm trước, ngày 17 là đúng hôm học nên muộn. Chuyện ngày 10 tháng 10 đủ người không liên quan đến câu hỏi này.",
    "voc": "申し込み（もうしこみ）：đăng ký； しめきり：hạn chót； 定員（ていいん）：số lượng tối đa； 魚料理（さかなりょうり）：món cá"
  },
  {
    "tpl": "<b>市立美術館・特別展「日本の風景画」</b><br>会期：11月1日（日）〜11月30日（月）<br>開館時間：午前9時30分〜午後5時（入館は午後4時30分まで）<br>休館日：毎週月曜日<br>入館料：大人800円、学生500円、小学生以下無料<br><table class=\"jl-tbl\"><tr><th>日</th><th>開館</th></tr><tr><td>11月3日（火・祝日）</td><td>開館します</td></tr><tr><td>11月23日（月・祝日）</td><td>開館します</td></tr></table>",
    "inst": "つぎの案内を見て、質問に答えてください。答えは1・2・3・4から、いちばんいいものを一つえらんでください。",
    "q": "高橋さんは11月23日（月）に美術館に行きたいと思っています。入館は何時までできますか。",
    "opts": ["午後4時30分まで", "午後5時まで", "午後4時まで", "午前9時30分まで"],
    "ans": 0,
    "exp": "Ngày 23 tháng 11 là thứ Hai nhưng là ngày lễ nên bảo tàng mở cửa. Vào cửa đến 4 giờ 30 chiều; 5 giờ chiều là giờ đóng cửa. 4 giờ chiều và 9 giờ 30 sáng không phải là hạn vào cửa.",
    "voc": "美術館（びじゅつかん）：bảo tàng mỹ thuật； 特別展（とくべつてん）：triển lãm đặc biệt； 開館（かいかん）：mở cửa； 休館日（きゅうかんび）：ngày đóng cửa； 入館（にゅうかん）：vào cửa"
  }
  ]
};

/* ----- Test 6 ----- */
window.WRITTEN_N2_SET6 = {
  yomi: [
  {
    "s": "この 仕事 に は 特別 な 技術 が 必要 です。",
    "t": "必要",
    "r": "ひつよう",
    "w": ["ひつよ", "ひっつよう", "ひつゆう"],
    "exp": "必要 đọc là ひつよう（必 ひつ、要 よう）。ひつよ thiếu âm う、ひっつよう thêm っ thừa、ひつゆう đọc 要 thành ゆう nên sai。",
    "voc": "必要（ひつよう）：cần thiết； 特別（とくべつ）：đặc biệt； 技術（ぎじゅつ）：kĩ thuật"
  },
  {
    "s": "新しい プロジェクトは、みんなの 協力が なければ 成功しません。",
    "t": "協力",
    "r": "きょうりょく",
    "w": ["きょうりょ", "きょうりょっく", "きょりょく"],
    "exp": "協力 đọc là きょうりょく（協 きょう、力 りょく）。きょうりょ thiếu âm く、きょうりょっく thêm っ thừa、きょりょく đọc 協 thành きょ nên sai。",
    "voc": "協力（きょうりょく）：hợp tác； プロジェクト：dự án； 成功（せいこう）：thành công"
  },
  {
    "s": "旅行の 準備を 昨日から 始めました。",
    "t": "準備",
    "r": "じゅんび",
    "w": ["じゅんぴ", "じゅび", "じゅんびい"],
    "exp": "準備 đọc là じゅんび（準 じゅん、備 び）。じゅんぴ đọc 備 thành ぴ、じゅび thiếu âm ん、じゅんびい thêm い thừa nên sai。",
    "voc": "準備（じゅんび）：chuẩn bị； 旅行（りょこう）：du lịch； 始める（はじめる）：bắt đầu"
  },
  {
    "s": "彼は 大学で 4年間 日本語を 教えた 経験が あります。",
    "t": "経験",
    "r": "けいけん",
    "w": ["けいげん", "けいけんん", "きょうけん"],
    "exp": "経験 đọc là けいけん（経 けい、験 けん）。けいげん đọc 験 thành げん、けいけんん thêm ん thừa、きょうけん đọc 経 thành きょう nên sai。",
    "voc": "経験（けいけん）：kinh nghiệm； 教える（おしえる）：dạy； 大学（だいがく）：đại học"
  },
  {
    "s": "子どもの 言葉は 3歳ごろに 急に 発達します。",
    "t": "発達",
    "r": "はったつ",
    "w": ["はつたつ", "はったち", "はっだつ"],
    "exp": "発達 đọc là はったつ（発 はつ→はっ、達 たつ）。はつたつ thiếu っ、はったち đọc 達 thành たち、はっだつ đọc 達 thành だつ nên sai。",
    "voc": "発達（はったつ）：phát triển； 言葉（ことば）：ngôn ngữ, lời nói； 急に（きゅうに）：đột nhiên"
  }
  ],
  hyoki: [
  {
    "s": "この 国 の けいざい は 少しずつ 回復 して います。",
    "h": "けいざい",
    "k": "経済",
    "w": ["経世", "形済", "経斉"],
    "exp": "けいざい viết là 経済（経 けい、済 ざい）。経世 dùng 世 sai、形済 dùng 形 sai、経斉 dùng 斉 sai。",
    "voc": "経済（けいざい）：kinh tế； 回復（かいふく）：hồi phục； 少しずつ：dần dần"
  },
  {
    "s": "学校の きそくを 守らなければ なりません。",
    "h": "きそく",
    "k": "規則",
    "w": ["規側", "規測", "規即"],
    "exp": "きそく viết là 規則（規 き、則 そく）。規側・規測・規即 đều dùng sai chữ thứ hai (側・測・即 không phải 則)。",
    "voc": "規則（きそく）：nội quy, quy tắc； 学校（がっこう）：trường học； 守る（まもる）：tuân thủ, giữ gìn"
  },
  {
    "s": "あしたの 会議の 時間を れんらくします。",
    "h": "れんらく",
    "k": "連絡",
    "w": ["連落", "連結", "連格"],
    "exp": "れんらく viết là 連絡（連 れん、絡 らく）。連落 (rơi), 連結 (nối, kết nối) và 連格 đều không phải là 連絡。",
    "voc": "連絡（れんらく）：liên lạc； 会議（かいぎ）：cuộc họp； 時間（じかん）：thời gian"
  },
  {
    "s": "日本へ 行く きかいが あったら、ぜひ 京都へ 行きたいです。",
    "h": "きかい",
    "k": "機会",
    "w": ["機回", "機合", "機界"],
    "exp": "きかい viết là 機会（機 き、会 かい）。機回・機合・機界 đều dùng sai chữ thứ hai。",
    "voc": "機会（きかい）：cơ hội； 京都（きょうと）：Kyoto； ぜひ：nhất định, rất mong"
  },
  {
    "s": "この もんだいは 少し むずかしいです。",
    "h": "もんだい",
    "k": "問題",
    "w": ["問願", "問起", "問聞"],
    "exp": "もんだい viết là 問題（問 もん、題 だい）。問願・問起・問聞 đều dùng sai chữ thứ hai (願・起・聞 không phải 題)。",
    "voc": "問題（もんだい）：vấn đề, bài tập； 少し（すこし）：một chút； 難しい（むずかしい）：khó"
  }
  ],
  ctx: [
  {
    "s": "約束 の 時間 を （　）に して ください。",
    "a": "たいせつ",
    "w": ["じゅうよう", "ひつよう", "あんぜん"],
    "exp": "「時間を大切にする」は cách nói quen thuộc: hãy trân trọng thời gian đã hẹn. じゅうよう (quan trọng) không đi với にする theo cách này, ひつよう (cần thiết) và あんぜん (an toàn) không hợp nghĩa với 時間を〜にする。",
    "voc": "約束（やくそく）：lời hẹn； 時間（じかん）：thời gian； 大切（たいせつ）：quý trọng, quan trọng"
  },
  {
    "s": "どうぞ （　）しないで、たくさん 食べて ください。",
    "a": "えんりょ",
    "w": ["しつれい", "きんちょう", "しっぱい"],
    "exp": "「えんりょしないでたくさん食べてください」= đừng ngại, cứ ăn nhiều vào. しつれい (thất lễ), きんちょう (căng thẳng), しっぱい (thất bại) đều không hợp với lời mời ăn.",
    "voc": "えんりょ：ngại ngùng, khách sáo； たくさん：nhiều； 食べる（たべる）：ăn"
  },
  {
    "s": "この 機械 の 使い方 を （　）して ください。",
    "a": "せつめい",
    "w": ["しょうかい", "はっぴょう", "けいかく"],
    "exp": "「使い方を説明してください」= hãy giải thích cách dùng máy. しょうかい (giới thiệu) dùng cho người/vật mới, はっぴょう (phát biểu) và けいかく (kế hoạch) không hợp với 使い方をする.",
    "voc": "機械（きかい）：máy móc； 使い方（つかいかた）：cách dùng； 説明（せつめい）：giải thích"
  },
  {
    "s": "この 薬は 安全ですから、（　）して 飲んで ください。",
    "a": "あんしん",
    "w": ["しんぱい", "ふあん", "きんちょう"],
    "exp": "Thuốc an toàn nên hãy yên tâm mà uống: 「安心して飲んでください」. しんぱい (lo lắng), ふあん (bất an), きんちょう (căng thẳng) đều mang nghĩa ngược, không hợp với lời trấn an.",
    "voc": "安心（あんしん）：yên tâm； 安全（あんぜん）：an toàn； 薬（くすり）：thuốc； 飲む（のむ）：uống"
  },
  {
    "s": "この 仕事は 毎日 同じ ことの くり返しで、（　）しています。",
    "a": "たいくつ",
    "w": ["まんぞく", "ゆうき", "あんしん"],
    "exp": "Công việc lặp đi lặp lại mỗi ngày nên thấy chán: 「たいくつしています」. まんぞく (hài lòng) không hợp với việc lặp lại nhàm chán, ゆうき (dũng khí) không đi với しています theo nghĩa này, あんしん (yên tâm) cũng không hợp ngữ cảnh.",
    "voc": "たいくつ：chán, buồn chán； くり返し（くりかえし）：lặp lại； 毎日（まいにち）：mỗi ngày"
  },
  {
    "s": "子どもの 将来に （　）を持って、毎日 がんばって 働いて います。",
    "a": "きぼう",
    "w": ["ふまん", "きんちょう", "たいくつ"],
    "exp": "Mang hy vọng về tương lai của con nên làm việc chăm chỉ mỗi ngày: 「希望を持って」. ふまん (bất mãn), きんちょう (căng thẳng), たいくつ (chán) đều không hợp với động lực tích cực này.",
    "voc": "希望（きぼう）：hy vọng； 将来（しょうらい）：tương lai； がんばる：cố gắng； 働く（はたらく）：làm việc"
  },
  {
    "s": "この 町の 人口の （　）に ついて、レポートを 書きました。",
    "a": "じょうきょう",
    "w": ["げんいん", "けっか", "きぼう"],
    "exp": "Viết báo cáo về tình hình dân số của thị trấn: 「人口の状況について」. げんいん (nguyên nhân) không đi với 人口の〜について theo nghĩa này, けっか (kết quả) và きぼう (hy vọng) cũng không hợp với 人口.",
    "voc": "状況（じょうきょう）：tình hình； 人口（じんこう）：dân số； レポート：báo cáo； 書く（かく）：viết"
  }
  ],
  syn: [
  {
    "s": "彼女 の ピアノ の 演奏 は 本当 に すばらしい です。会場 は 静まり返りました。",
    "t": "すばらしい",
    "a": "みごと",
    "w": ["ひどい", "つまらない", "へた"],
    "exp": "すばらしい (tuyệt vời) đồng nghĩa với みごと (tuyệt diệu). ひどい (tệ), つまらない (chán), へた (dở) đều mang nghĩa ngược lại.",
    "voc": "演奏（えんそう）：buổi biểu diễn； 会場（かいじょう）：hội trường； 静まり返る（しずまりかえる）：im phăng phắc"
  },
  {
    "s": "会議は ちょうど 3時に 始まりました。",
    "t": "ちょうど",
    "a": "ぴったり",
    "w": ["だいたい", "ほとんど", "すこし"],
    "exp": "ちょうど (đúng, chính xác) đồng nghĩa với ぴったり (đúng y). だいたい (đại khái), ほとんど (hầu hết), すこし (một chút) đều không mang nghĩa 'đúng chính xác'.",
    "voc": "ちょうど：đúng, vừa đúng； ぴったり：đúng y, vừa khít； 会議（かいぎ）：cuộc họp； 始まる（はじまる）：bắt đầu"
  },
  {
    "s": "手紙を もらったら、さっそく 返事を 書きました。",
    "t": "さっそく",
    "a": "すぐに",
    "w": ["ゆっくり", "あとで", "たまに"],
    "exp": "さっそく (ngay lập tức) đồng nghĩa với すぐに (ngay). ゆっくり (từ từ), あとで (sau đó), たまに (thỉnh thoảng) đều ngược nghĩa.",
    "voc": "さっそく：ngay lập tức； 手紙（てがみ）：thư； 返事（へんじ）：thư trả lời； 書く（かく）：viết"
  },
  {
    "s": "あしたの 試験は、ぜったい 合格したいです。",
    "t": "ぜったい",
    "a": "かならず",
    "w": ["たぶん", "もしかすると", "ときどき"],
    "exp": "ぜったい (nhất định) đồng nghĩa với かならず (chắc chắn). たぶん (có lẽ), もしかすると (biết đâu), ときどき (thỉnh thoảng) đều mang nghĩa không chắc chắn.",
    "voc": "絶対（ぜったい）：nhất định, tuyệt đối； 必ず（かならず）：chắc chắn； 合格（ごうかく）：đỗ, đậu； 試験（しけん）：kì thi"
  },
  {
    "s": "おなかが すいた ので、ごはんを すっかり 食べて しまいました。",
    "t": "すっかり",
    "a": "まったく",
    "w": ["すこし", "だんだん", "いつも"],
    "exp": "すっかり (hoàn toàn, hết sạch) đồng nghĩa với まったく (hoàn toàn) trong ngữ cảnh ăn hết. すこし (một chút), だんだん (dần dần), いつも (luôn luôn) đều không mang nghĩa 'hoàn toàn'.",
    "voc": "すっかり：hoàn toàn, hết sạch； おなかがすく：đói bụng； 食べる（たべる）：ăn"
  }
  ],
  yoho: [
  {
    "t": "ひろい",
    "s": ["ひろい 針 を 買いました。", "ひろい 点 を 書きました。", "ひろい 糸 を 買いました。", "この 部屋 は ひろい です。"],
    "a": 3,
    "exp": "ひろい (rộng) chỉ dùng cho không gian, diện tích: この部屋はひろいです. 針 (kim) thì 細い (mảnh), 点 (điểm) thì 大きい (to), 糸 (chỉ) thì 太い (dày) mới đúng.",
    "voc": "広い（ひろい）：rộng； 部屋（へや）：phòng； 針（はり）：kim； 糸（いと）：chỉ, sợi"
  },
  {
    "t": "さす",
    "s": ["雨の 日は、彼女は いつも 日傘を さす。", "彼は 冬に 帽子を さす。", "寒い 日は、彼は コートを さす。", "彼は いつも 手袋を さす。"],
    "a": 0,
    "exp": "さす (mở, che) chỉ dùng với ô/dù: 日傘をさす. Mũ thì かぶる (đội), áo khoác thì 着る (mặc), găng tay thì はめる (đeo) mới đúng.",
    "voc": "さす：mở, che (ô)； 日傘（ひがさ）：ô, dù； 帽子（ぼうし）：mũ； コート：áo khoác； 手袋（てぶくろ）：găng tay"
  },
  {
    "t": "かける",
    "s": ["彼は 毎日、眼鏡を かける。", "彼女は 赤い 帽子を かける。", "母は 金の 指輪を かける。", "彼は 新しい 靴を かける。"],
    "a": 0,
    "exp": "かける (đeo) dùng với kính: 眼鏡をかける. Mũ thì かぶる, nhẫn thì はめる, giày thì はく mới đúng.",
    "voc": "かける：đeo (kính)； 眼鏡（めがね）：kính； 指輪（ゆびわ）：nhẫn； 靴（くつ）：giày"
  },
  {
    "t": "はく",
    "s": ["彼は 毎日、靴を はく。", "彼女は 帽子を はく。", "彼は 眼鏡を はく。", "冬は、彼は 手袋を はく。"],
    "a": 0,
    "exp": "はく (đi, mang) dùng với giày: 靴をはく. Mũ thì かぶる, kính thì かける, găng tay thì はめる mới đúng.",
    "voc": "はく：đi, mang (giày)； 靴（くつ）：giày； 帽子（ぼうし）：mũ； 眼鏡（めがね）：kính； 手袋（てぶくろ）：găng tay"
  },
  {
    "t": "かぶる",
    "s": ["彼は いつも、帽子を かぶる。", "彼女は 靴を かぶる。", "彼は 眼鏡を かぶる。", "寒い 日は、彼は コートを かぶる。"],
    "a": 0,
    "exp": "かぶる (đội) dùng với mũ: 帽子をかぶる. Giày thì はく, kính thì かける, áo khoác thì 着る mới đúng.",
    "voc": "かぶる：đội (mũ)； 帽子（ぼうし）：mũ； 靴（くつ）：giày； 眼鏡（めがね）：kính； コート：áo khoác"
  }
  ],
  kotoba: [
  {
    "s": "夏祭りで、夜空に きれいな （　）が 上がりました。",
    "a": "花火",
    "w": ["花日", "花光", "花美"],
    "exp": "Pháo hoa lên trời: 花火 (はなび) — 花 (hoa) + 火 (lửa) với hiện tượng rendaku: ひ→び. 花日・花光・花美 đều không phải từ trong tiếng Nhật, không mang nghĩa pháo hoa.",
    "voc": "花火（はなび）：pháo hoa； 夏祭り（なつまつり）：lễ hội mùa hè； 夜空（よぞら）：bầu trời đêm； 上がる（あがる）：bay lên"
  },
  {
    "s": "この 町は 外国人が 増えて、（　）しました。",
    "a": "国際化",
    "w": ["国際", "国際性", "国際的"],
    "exp": "Thị trấn trở nên quốc tế hóa: 「国際化しました」— hậu tố 〜化 (hóa) đi với する để chỉ sự biến đổi. 国際しました、国際性しました、国際的しました đều sai ngữ pháp (国際 là danh từ, 〜性 là danh từ, 〜的 cần な/です, không đi với しました).",
    "voc": "国際化（こくさいか）：quốc tế hóa； 外国人（がいこくじん）：người nước ngoài； 増える（ふえる）：tăng lên"
  },
  {
    "s": "この 問題は 法律（　）問題が あります。",
    "a": "上",
    "w": ["的", "性", "化"],
    "exp": "「法律上、問題があります」= về mặt pháp luật thì có vấn đề — hậu tố 〜上 (về mặt...) đi sau danh từ. 法律的問題 (cần な: 法律的な問題), 法律性問題, 法律化問題 đều sai.",
    "voc": "法律（ほうりつ）：pháp luật； 上（じょう）：về mặt, trên phương diện； 問題（もんだい）：vấn đề"
  },
  {
    "s": "この （　）な 説明は、子どもには 分かりにくい です。",
    "a": "専門的",
    "w": ["専門", "専門性", "専門化"],
    "exp": "Lời giải thích mang tính chuyên môn: 「専門的な説明」— hậu tố 〜的 tạo tính từ な. 専門な説明、専門性な説明、専門化な説明 đều sai ngữ pháp.",
    "voc": "専門的（せんもんてき）：mang tính chuyên môn； 説明（せつめい）：giải thích； 分かりにくい：khó hiểu"
  },
  {
    "s": "この 花は とても （　）です。",
    "a": "美しい",
    "w": ["美い", "美し", "美しき"],
    "exp": "「とても美しいです」— tính từ 美しい với okurigana しい. 美い thiếu く, 美し chỉ là gốc tính từ (không đứng cuối câu với です), 美しき là dạng cổ, không dùng với です ở văn hiện đại.",
    "voc": "美しい（うつくしい）：đẹp； 花（はな）：hoa； とても：rất"
  }
  ],
  g1dlg: [
  {
    "d": ["来週、社長が 退職する そうです。", "社長が 退職する （　）、あいさつを する ことに なって います。"],
    "a": "に際して",
    "w": ["にわたって", "に比べて", "にかかわらず"],
    "p": "〜に際して",
    "exp": "「退職するに際してあいさつをする」= nhân dịp nghỉ hưu thì phát biểu chào. にわたって (trải dài), に比べて (so với), にかかわらず (bất kể) đều không hợp nghĩa 'nhân dịp'.",
    "voc": "退職（たいしょく）：nghỉ hưu； 際して（さいして）：nhân dịp； あいさつ：lời chào"
  },
  {
    "d": ["日本語を 勉強し 始めた 理由は 何ですか。", "高校の 先生に 会った （　）、日本語に 興味を 持ちました。"],
    "a": "をきっかけに",
    "w": ["をよそに", "をめぐって", "を介して"],
    "p": "〜をきっかけに",
    "exp": "「先生に会ったことをきっかけに」= lấy việc gặp thầy làm cơ hội bắt đầu quan tâm đến tiếng Nhật. をよそに (mặc kệ), をめぐって (xoay quanh), を介して (thông qua) đều không mang nghĩa 'nhân cơ hội'.",
    "voc": "きっかけ：cơ hội, dịp； 興味（きょうみ）：hứng thú； 持つ（もつ）：có, mang"
  },
  {
    "d": ["日本へ 来て から、もう 5年ですね。", "はい、日本へ 来て （　）、日本語を 毎日 使って います。"],
    "a": "以来",
    "w": ["かたわら", "がてら", "ばかりに"],
    "p": "〜て以来",
    "exp": "「日本へ来て以来、日本語を毎日使っています」= kể từ khi đến Nhật. かたわら (vừa... vừa...) và がてら (tiện thể) đều đi với dạng ます, không đi với て; ばかりに (chỉ vì) mang nghĩa nguyên nhân tiêu cực, không hợp.",
    "voc": "以来（いらい）：kể từ khi； 毎日（まいにち）：mỗi ngày； 使う（つかう）：dùng"
  }
  ],
  g1: [
  {
    "s": "結婚する （　）、両親に あいさつを しました。",
    "a": "に先立って",
    "w": ["にわたって", "に比べて", "にかかわらず"],
    "p": "〜に先立って",
    "exp": "「結婚するに先立って」= trước khi kết hôn thì đến chào hỏi bố mẹ — に先立って ('trước khi...') đi sau dạng る. にわたって (trong suốt) chỉ đi sau danh từ chỉ khoảng thời gian, không đi sau dạng る nên 結婚するにわたって sai; に比べて (so với) cần đối tượng so sánh, không hợp; にかかわらず (bất kể) phải là dạng る+も (にもかかわらず), dạng 結婚するにかかわらず sai và cũng không mang nghĩa 'trước khi'.",
    "voc": "先立って（さきだって）：trước khi； 結婚する（けっこんする）：kết hôn； 両親（りょうしん）：bố mẹ； あいさつ：lời chào hỏi"
  },
  {
    "s": "子どもの 成長（　）、本の 内容を 変えて います。",
    "a": "に応じて",
    "w": ["に比べて", "にかかわらず", "をめぐって"],
    "p": "〜に応じて",
    "exp": "「子どもの成長に応じて」= tùy theo sự trưởng thành của trẻ mà thay đổi nội dung sách. に比べて (so với), にかかわらず (bất kể), をめぐって (xoay quanh) đều không mang nghĩa 'tùy theo'.",
    "voc": "応じて（おうじて）：tùy theo； 成長（せいちょう）：trưởng thành； 内容（ないよう）：nội dung； 変える（かえる）：thay đổi"
  },
  {
    "s": "値段が 高かった （　）、その カメラを 買いました。",
    "a": "にもかかわらず",
    "w": ["どころか", "からこそ", "だけに"],
    "p": "〜にもかかわらず",
    "exp": "「値段が高かったにもかかわらず、そのカメラを買いました」= mặc dù giá cao nhưng vẫn mua chiếc máy ảnh đó — にもかかわらず diễn tả sự nhượng bộ ('mặc dù... nhưng vẫn...'). からこそ (chính vì) sẽ biến giá cao thành lí do mua hàng, ngược nghĩa; だけに (đúng như mong đợi vì...) cũng biến giá cao thành căn cứ cho việc mua, ngược nghĩa; どころか (chứ đừng nói) cần vế đối lập so sánh, không hợp ở đây.",
    "voc": "かかわらず：mặc dù, bất chấp； 値段（ねだん）：giá tiền； 高い（たかい）：cao, đắt； カメラ：máy ảnh； 買う（かう）：mua"
  },
  {
    "s": "先生の 励ましが あった （　）、ここまで がんばれました。",
    "a": "からこそ",
    "w": ["ばかりに", "どころか", "にすぎない"],
    "p": "〜からこそ",
    "exp": "「先生の励ましがあったからこそ」= chính nhờ có sự động viên của thầy cô nên mới cố gắng được đến đây — からこそ nhấn mạnh nguyên nhân tích cực. ばかりに (chỉ vì) mang nghĩa nguyên nhân tiêu cực, không hợp với kết quả tốt; どころか (chứ đừng nói) cần vế đối lập so sánh; にすぎない (chỉ là) không nhấn mạnh nguyên nhân.",
    "voc": "励まし（はげまし）：sự động viên, khích lệ； 先生（せんせい）：thầy cô； がんばる：cố gắng"
  },
  {
    "s": "長い 間 悩んだ （　）、留学する ことに しました。",
    "a": "末に",
    "w": ["にしたがって", "に際して", "にあたって"],
    "p": "V-た 末に",
    "exp": "「長い間悩んだ末に」= sau khi trăn trở rất lâu thì cuối cùng quyết định đi du học — 末に diễn tả kết quả cuối cùng sau một quá trình dài. にしたがって (càng... càng... / theo...) chỉ đi sau dạng る, không đi sau dạng た nên 悩んだにしたがって sai ngữ pháp; に際して・にあたって cũng chỉ đi sau dạng る/ danh từ (nghĩa 'nhân dịp'), không đi sau dạng た.",
    "voc": "末に（すえに）：sau cùng, cuối cùng； 悩む（なやむ）：trăn trở, lo nghĩ； 留学する（りゅうがくする）：đi du học"
  },
  {
    "s": "この 本は 面白い （　）面白い が、値段が 高い です。",
    "a": "ことは",
    "w": ["どころか", "にすぎない", "なんて"],
    "p": "〜ことは〜が",
    "exp": "「面白いことは面白いが、値段が高い」= công nhận là hay, nhưng đắt — mẫu 〜ことは〜が dùng để thừa nhận một mặt rồi nêu mặt trái ngược. どころか (chứ đừng nói), にすぎない (chỉ là), なんて (như là) đều không tạo được cấu trúc thừa nhận này.",
    "voc": "面白い（おもしろい）：thú vị； 値段（ねだん）：giá tiền； 高い（たかい）：đắt, cao"
  },
  {
    "s": "この 雑誌は 学生（　）、社会人にも 人気です。",
    "a": "に限らず",
    "w": ["に限って", "にもかかわらず", "だけあって"],
    "p": "〜に限らず",
    "exp": "「学生に限らず、社会人にも人気です」= không chỉ học sinh mà người đi làm cũng thích. に限って (chỉ, riêng) mang nghĩa giới hạn, trái với 社会人にも; にもかかわらず (mặc dù) và だけあって (đúng như mong đợi) đều không hợp.",
    "voc": "限らず（かぎらず）：không chỉ, không giới hạn； 雑誌（ざっし）：tạp chí； 社会人（しゃかいじん）：người đi làm； 人気（にんき）：được yêu thích"
  },
  {
    "s": "彼が 優勝する （　）、だれも 思って いなかった。",
    "a": "なんて",
    "w": ["とはいえ", "ものの", "どころか"],
    "p": "〜なんて",
    "exp": "「彼が優勝するなんて、だれも思っていなかった」= chuyện anh ấy vô địch thì chẳng ai nghĩ tới — なんて nhấn mạnh sự bất ngờ. とはいえ (tuy nói vậy), ものの (tuy... nhưng) đều cần mệnh đề trái ngược, không hợp với だれも思っていなかった; どころか (chứ đừng nói) cũng cần vế so sánh.",
    "voc": "なんて：(chuyện như) thế mà; 優勝（ゆうしょう）：vô địch； 思う（おもう）：nghĩ"
  },
  {
    "s": "これは わたしの 個人的な 意見 （　）、会社の 公式な 見解では ありません。",
    "a": "にすぎません",
    "w": ["だけあって", "ばかりに", "どころか"],
    "p": "〜にすぎない",
    "exp": "「わたしの個人的な意見にすぎません」= đây chỉ là ý kiến cá nhân của tôi mà thôi. だけあって (đúng như mong đợi vì), ばかりに (chỉ vì), どころか (chứ đừng nói) đều không mang nghĩa 'chỉ là'.",
    "voc": "にすぎない：chỉ là, chẳng qua là； 個人的（こじんてき）：cá nhân； 意見（いけん）：ý kiến； 公式（こうしき）：chính thức； 見解（けんかい）：quan điểm"
  }
  ],
  star: [
  {
    "pre": "祖父の",
    "post": "きっかけに、日本の歴史に興味を持ちました。",
    "chunks": ["戦争の", "話を", "聞いた", "ことを"],
    "p": "〜をきっかけに",
    "exp": "Thứ tự đúng: 祖父の戦争の話を聞いたことをきっかけに、日本の歴史に興味を持ちました。— 'Lấy việc nghe ông kể chuyện chiến tranh làm cơ hội, tôi bắt đầu quan tâm đến lịch sử Nhật Bản.' 「〜をきっかけに」đi sau danh từ hóa こと.",
    "voc": "祖父（そふ）：ông nội/ngoại； 戦争（せんそう）：chiến tranh； 歴史（れきし）：lịch sử； 興味（きょうみ）：hứng thú"
  },
  {
    "pre": "",
    "post": "。",
    "chunks": ["去年に比べて暑かった", "今年の夏は", "雨が", "少なかったです"],
    "p": "〜に比べて",
    "exp": "Thứ tự đúng: 去年に比べて暑かった今年の夏は雨が少なかったです。— 'Mùa hè năm nay, vốn nóng hơn năm ngoái, thì ít mưa.' 「去年に比べて暑かった」 là mệnh đề quan hệ bổ nghĩa cho 今年の夏は nên phải đứng ngay trước nó; 「雨が」 phải đứng ngay trước 「少なかったです」. Mẫu 〜に比べて ('so với...') xuất hiện ngay trong câu — nếu tách 去年に比べて khỏi 暑かった thì sẽ có thêm cách xếp tự nhiên khác nên hai mảnh này được gộp làm một.",
    "voc": "去年（きょねん）：năm ngoái； 比べる（くらべる）：so sánh； 暑い（あつい）：nóng； 夏（なつ）：mùa hè； 雨（あめ）：mưa； 少ない（すくない）：ít"
  },
  {
    "pre": "",
    "post": "なれません。",
    "chunks": ["練習を", "重ねて", "からでないと", "上手に"],
    "p": "V-て からでないと〜ない",
    "exp": "Thứ tự đúng: 練習を重ねてからでないと上手になれません。— 'Nếu không luyện tập nhiều lần thì không thể giỏi lên được.' Mẫu V-てからでないと〜ない = 'nếu không... thì không...'.",
    "voc": "練習（れんしゅう）：luyện tập； 重ねる（かさねる）：chồng chất, lặp lại； 上手（じょうず）：giỏi"
  },
  {
    "pre": "",
    "post": "降り出しました。",
    "chunks": ["雨が", "やんだ", "かと思ったら", "また"],
    "p": "〜かと思ったら",
    "exp": "Thứ tự đúng: 雨がやんだかと思ったら、また降り出しました。— 'Vừa nghĩ là mưa đã tạnh thì lại mưa tiếp.' Mẫu 〜かと思ったら diễn tả việc bất ngờ xảy ra ngay sau khi vừa nghĩ là đã xong.",
    "voc": "やむ：tạnh (mưa)； 降り出す（ふりだす）：bắt đầu mưa； また：lại"
  },
  {
    "pre": "熱は",
    "post": "。",
    "chunks": ["薬を", "飲んだ", "ものの", "下がりませんでした"],
    "p": "〜ものの",
    "exp": "Thứ tự đúng: 熱は薬を飲んだものの下がりませんでした。— 'Sốt thì tuy đã uống thuốc nhưng vẫn không hạ.' 熱は được đưa lên đầu làm chủ đề, còn ものの ('tuy... nhưng...') nối 薬を飲んだ với 下がりませんでした; thứ tự các mảnh là cố định vì ものの phải đứng sau mệnh đề 薬を飲んだ và 下がりませんでした phải đứng cuối câu.",
    "voc": "薬（くすり）：thuốc； 飲む（のむ）：uống； 熱（ねつ）：sốt； 下がる（さがる）：hạ xuống"
  }
  ],
  bunsho: [
  {
    "intro": "つぎの 文章は わたしの 町の 図書館に ついて 書かれた 文章です。",
    "p": "わたしの 町には 小さな 図書館が あります。図書館の 前の 道路は とても 細い です。（　1　）車は 図書館の 前に 入る ことが できません。図書館は 平日は 午後6時まで、土曜日は 午後8時まで 開いて います。学生や 家族連れが 多く 利用して います。図書館では 本を 借りる ことが できます。（　2　）、一人で 2週間 5冊まで 借りる ことが できます。最近は パソコンを 使って 勉強する 人が 増えて います。（　3　）、本だけを 読む 人は 少し 減って います。図書館では 毎月、子ども 向けの イベントを 開いて います。（　4　）先月は 絵本の 読み聞かせが あり、50人の 子どもが 集まりました。図書館は 本を 借りる だけの 場所では ありません。（　5　）町の 人が 集まって 交流する 大切な 場所です。",
    "b": [
      { "a": "そのため", "w": ["しかし", "一方で", "たとえば"] },
      { "a": "つまり", "w": ["しかし", "一方で", "たとえば"] },
      { "a": "一方で", "w": ["そのため", "つまり", "たとえば"] },
      { "a": "たとえば", "w": ["しかし", "そのため", "つまり"] },
      { "a": "要するに", "w": ["しかし", "たとえば", "そのため"] }
    ],
    "exp": "(1) そのため: đường hẹp nên xe không vào được — quan hệ nguyên nhân-kết quả. しかし・一方で (đối lập) và たとえば (ví dụ) đều không hợp. (2) つまり: giải thích rõ quy định mượn sách (mỗi người 2 tuần 5 cuốn). しかし・一方で・たとえば không phải là lời giải thích. (3) 一方で: mặt khác, số người chỉ đọc sách giảm — đối lập với số người dùng máy tính tăng. そのため・つまり・たとえば đều không mang nghĩa đối lập. (4) たとえば: ví dụ về sự kiện — tháng trước có buổi đọc truyện tranh. しかし・そのため・つまり không đưa ra ví dụ. (5) 要するに: tóm lại, thư viện là nơi gặp gỡ giao lưu quan trọng của người dân — kết luận tổng kết. しかし・たとえば・そのため không dùng để tổng kết.",
    "voc": "図書館（としょかん）：thư viện； 細い（ほそい）：hẹp, mảnh； 平日（へいじゅう）：ngày thường； 家族連れ（かぞくづれ）：gia đình đi cùng nhau； 借りる（かりる）：mượn； 読み聞かせ（よみきかせ）：đọc truyện cho nghe； 交流（こうりゅう）：giao lưu"
  }
  ],
  readS: [
  {
    "p": "今朝、電車 が 三十分 遅れました。線路 の 点検 の ため だ そう です。わたし は 会社 に 遅れて しまいました。上司 に 電話 で 連絡 しました が、とても 困りました。午後 から は 電車 は ふつう に 動きました。明日 は 早く 家 を 出よう と 思います。",
    "q": "今朝、電車 が 遅れた 理由 は 何 です か。",
    "o": ["雨 が たくさん 降った から です。", "線路 の 点検 の ため です。", "事故 が あった から です。", "電車 が こわれた から です。"],
    "a": 1,
    "e": "Đoạn văn nói tàu chậm do kiểm tra đường ray.",
    "exp": "Đáp án đúng là 2: tàu chậm vì kiểm tra đường ray — bằng chứng: 「線路の点検のためだそうです。」Các đáp án khác (mưa, tai nạn, tàu hỏng) không được nhắc đến trong đoạn văn.",
    "voc": "電車（でんしゃ）：tàu điện； 遅れる（おくれる）：trễ, chậm； 線路（せんろ）：đường ray； 点検（てんけん）：kiểm tra； 連絡（れんらく）：liên lạc； 困る（こまる）：gặp khó khăn"
  },
  {
    "p": "山田さんは 毎朝、バスと 電車で 会社へ 行きます。家から 駅まで バスで 10分、電車で 25分 かかります。バスの 料金は 220円、電車の 料金は 340円です。帰りも 同じ 道で 帰ります。山田さんは 毎月、定期券を 買います。バスの 定期券は 8000円、電車の 定期券は 12000円です。山田さんは 1か月に 20日 会社へ 行きます。",
    "q": "定期券を 買うと、1か月に いくら 安く なりますか。",
    "o": ["2400円", "1200円", "4400円", "2000円"],
    "a": 0,
    "calc": true,
    "e": "バスの 料金は 220円、電車の 料金は 340円です。帰りも 同じ 道で 帰ります。バスの 定期券は 8000円、電車の 定期券は 12000円です。山田さんは 1か月に 20日 会社へ 行きます。",
    "exp": "Đáp án 2400円. Một chiều: xe buýt 220円 + tàu 340円 = 560円; khứ hồi một ngày 1120円; 20 ngày = 22400円. Vé tháng: 8000 + 12000 = 20000円. Tiết kiệm: 22400 − 20000 = 2400円. 1200円 là một nửa số tiết kiệm, 4400円 và 2000円 không khớp với phép tính.",
    "voc": "定期券（ていきけん）：vé tháng； 料金（りょうきん）：giá tiền, phí； 会社（かいしゃ）：công ty； 毎月（まいつき）：mỗi tháng"
  },
  {
    "p": "来週の 土曜日、市民会館で 映画の 上映会が あります。午後2時から 4時まで です。入場料は 大人500円、子ども200円です。会場の 定員は 100人です。申し込みは 今週の 金曜日まで に、電話で して ください。電話番号は 03-1234-5678 です。当日は 1時30分に 会場が 開きます。",
    "q": "映画の 上映会に ついて、正しいものは どれですか。",
    "o": ["入場料は 大人も 子どもも 500円です。", "会場は 1時30分に 開きます。", "申し込みは 当日でも できます。", "定員は 200人です。"],
    "a": 1,
    "e": "当日は 1時30分に 会場が 開きます。",
    "exp": "Đáp án 2: hội trường mở cửa lúc 1 giờ 30 — bằng chứng: 「当日は1時30分に会場が開きます。」Đáp án 1 sai vì trẻ em chỉ 200円; đáp án 3 sai vì phải đăng ký trước thứ Sáu; đáp án 4 sai vì sức chứa là 100 người.",
    "voc": "上映会（じょうえいかい）：buổi chiếu phim； 市民会館（しみんかいかん）：nhà văn hóa thành phố； 入場料（にゅうじょうりょう）：vé vào cửa； 定員（ていいん）：sức chứa； 申し込み（もうしこみ）：đăng ký"
  },
  {
    "p": "田中さんへ。先日は お土産を ありがとう ございました。とても おいしかった です。来月、わたしは 大阪へ 引っ越す ことに なりました。新しい 住所は 大阪市中央区日本橋3-2-1 です。電話番号は 変わりません。近くへ 来た ときは、ぜひ 遊びに 来て ください。山田花子",
    "q": "山田さんは 来月、何を しますか。",
    "o": ["大阪へ 引っ越します。", "大阪へ 旅行に 行きます。", "電話番号を 変えます。", "田中さんに お土産を 送ります。"],
    "a": 0,
    "e": "来月、わたしは 大阪へ 引っ越す ことに なりました。",
    "exp": "Đáp án 1: tháng sau Yamada chuyển đến Osaka — bằng chứng: 「来月、わたしは大阪へ引っ越すことになりました。」Đáp án 2 sai vì là chuyển nhà, không phải du lịch; đáp án 3 sai vì số điện thoại không đổi; đáp án 4 sai vì chính Yamada đã nhận quà từ Tanaka.",
    "voc": "引っ越す（ひっこす）：chuyển nhà； 住所（じゅうしょ）：địa chỉ； お土産（おみやげ）：quà lưu niệm； 遊びに来る：đến chơi"
  },
  {
    "p": "わたしは 写真を 撮る ことが 好きです。休みの 日に、公園や 海へ 行って、写真を 撮ります。去年、カメラを 新しく 買いました。値段は 8万円でした。高い カメラでしたが、写真が とても きれいに 撮れるので、買って よかったです。来年は 写真の コンテストに 出して みたいです。",
    "q": "筆者は カメラに ついて、どう 思って いますか。",
    "o": ["高かったが、買って よかったと 思っています。", "高かったので、買わなければ よかったと 思っています。", "安かったので、すぐに 買いました。", "写真が きれいに 撮れないので、困っています。"],
    "a": 0,
    "e": "高い カメラでしたが、写真が とても きれいに 撮れるので、買って よかったです。",
    "exp": "Đáp án 1: tuy đắt nhưng mua rồi thấy rất đáng — bằng chứng: 「高いカメラでしたが、写真がとてもきれいに撮れるので、買ってよかったです。」Đáp án 2 ngược với 買ってよかった; đáp án 3 sai vì máy đắt (8万円), không rẻ; đáp án 4 sai vì ảnh chụp rất đẹp.",
    "voc": "写真（しゃしん）：ảnh, chụp ảnh； 撮る（とる）：chụp； 値段（ねだん）：giá tiền； コンテスト：cuộc thi"
  }
  ],
  readM: [
  {
    "p": "最近、わたし の 町 で は ごみ を 減らす 活動 が さかん です。市 は、ごみ の 分け方 を わかりやすく 説明 する パンフレット を、すべて の 家 に 配りました。燃える ごみ と 燃えない ごみ、プラスチック と 紙 を 分けて 出します。分ける の が めんどう だ と 思う 人 も います が、正しく 分ける こと で、ごみ を 資源 として 使う こと が できます。わたし の 家 で も、買い物 の とき に 自分 の 袋 を 持って いく よう に して います。ペットボトル は 洗って から 出します。子どもたち は 学校 で、ごみ について 勉強 して います。市 は 来年、ごみ の 量 を さらに 減らす 計画 を 立てて います。ごみ を 減らす こと は、地球 を 守る こと に つながります。一人一人 の 小さな 努力 が 大切 です。わたし も できる こと から、少しずつ 続けて いきたい です。ごみ を 減らす ため に は、買いすぎない こと も 大切 です。必要 な もの だけ を 買う よう に して います。",
    "qs": [
      {
        "q": "市 は 何 を しました か。",
        "o": ["ごみ を 集める の を やめました。", "ごみ の 分け方 を 説明 する パンフレット を 配りました。", "ごみ箱 を なくしました。", "ごみ の 料金 を 上げました。"],
        "a": 1,
        "e": "Thành phố đã phát tờ rơi hướng dẫn phân loại rác."
      },
      {
        "q": "わたし の 家 で は 何 を して います か。",
        "o": ["ごみ を 分けない で 出します。", "ペットボトル を 洗わない で 出します。", "買い物 を しません。", "買い物 の とき に 自分 の 袋 を 持って いきます。"],
        "a": 3,
        "e": "Nhà tác giả mang túi riêng khi đi mua sắm."
      },
      {
        "q": "筆者 は ごみ を 減らす こと について どう 考えて います か。",
        "o": ["一人一人 の 小さな 努力 が 大切 だ と 思います。", "ごみ を 減らす の は 無意味 だ と 思います。", "ごみ は すべて 燃やせば よい と 思います。", "ごみ を 分ける の は 市 だけ の 仕事 だ と 思います。"],
        "a": 0,
        "e": "Tác giả cho rằng nỗ lực nhỏ của mỗi người rất quan trọng."
      }
    ],
    "exp": "Q1: đáp án 2 — thành phố đã phát tờ rơi hướng dẫn phân loại rác: 「ごみの分け方をわかりやすく説明するパンフレットを、すべての家に配りました。」Q2: đáp án 4 — nhà tác giả mang túi riêng khi mua sắm: 「買い物のときに自分の袋を持っていくようにしています。」Q3: đáp án 1 — tác giả cho rằng nỗ lực nhỏ của mỗi người rất quan trọng: 「一人一人の小さな努力が大切です。」",
    "voc": "ごみ：rác； 減らす（へらす）：giảm； 分ける（わける）：phân loại； 資源（しげん）：tài nguyên； ペットボトル：chai nhựa； 地球（ちきゅう）：trái đất； 努力（どりょく）：nỗ lực"
  },
  {
    "p": "去年から、わたしは 大学の 近くの コンビニで アルバイトを して います。週に 3回、夕方 5時から 9時まで 働きます。仕事は レジと 商品を 並べる ことです。最初は レジの 使い方が むずかしくて、よく 間違えました。でも、店長が やさしく 教えて くれたので、今は 一人で できる ように なりました。アルバイトの 給料は、学費と 生活費に 使います。お客さんと 話す ことも あります。日本語が 上手では ない ので、時々 困りますが、お客さんの 笑顔を 見ると、うれしく なります。アルバイトを 始めて から、時間の 使い方が 上手に なりました。大学の 勉強も、アルバイトも、両方 がんばりたいです。",
    "qs": [
      {
        "q": "筆者は どこで アルバイトを して いますか。",
        "o": ["大学の 近くの コンビニ", "大学の 図書館", "駅の 近くの レストラン", "学校の 事務室"],
        "a": 0,
        "e": "大学の 近くの コンビニで アルバイトを して います。"
      },
      {
        "q": "筆者は 最初、何に 困りましたか。",
        "o": ["お客さんが こわかったこと", "商品が 重かったこと", "レジの 使い方が むずかしかったこと", "給料が 少なかったこと"],
        "a": 2,
        "e": "最初は レジの 使い方が むずかしくて、よく 間違えました。"
      },
      {
        "q": "筆者は アルバイトを 始めて から、どう なりましたか。",
        "o": ["大学の 勉強を やめました。", "時間の 使い方が 上手に なりました。", "日本語が 話せなく なりました。", "給料を 全部 貯金しました。"],
        "a": 1,
        "e": "アルバイトを 始めて から、時間の 使い方が 上手に なりました。"
      }
    ],
    "exp": "Q1: đáp án 1 — làm thêm ở cửa hàng tiện lợi gần trường đại học: 「大学の近くのコンビニでアルバイトをしています。」Q2: đáp án 3 — lúc đầu khó vì không biết dùng máy tính tiền: 「最初はレジの使い方がむずかしくて、よく間違えました。」Q3: đáp án 2 — từ khi làm thêm, biết dùng thời gian tốt hơn: 「アルバイトを始めてから、時間の使い方が上手になりました。」",
    "voc": "アルバイト：làm thêm； コンビニ：cửa hàng tiện lợi； レジ：máy tính tiền； 並べる（ならべる）：xếp, bày； 店長（てんちょう）：quản lý cửa hàng； 学費（がくひ）：học phí； 生活費（せいかつひ）：chi phí sinh hoạt； 笑顔（えがお）：nụ cười"
  },
  {
    "p": "最近、わたしは 毎朝 30分、近くの 公園を 走って います。最初は 5分 走る だけでも 疲れました。でも、3か月 続けて いたら、30分 走る ことが できる ように なりました。走る 前は、必ず 軽く 体を 動かします。走った あとは、水を 飲んで、ゆっくり 休みます。朝 走ると、一日 元気に 過ごす ことが できます。体重も 3キロ 減りました。医者は、運動は 体だけ では なく、心にも いいと 言います。わたしも そう 思います。走って いる ときは、仕事の ことを 忘れて、気持ちが すっきり します。今では、走る ことが 大好きです。これからも、無理を しないで、毎日 少しずつ 続けて いきたいです。",
    "qs": [
      {
        "q": "筆者は 毎朝、何を して いますか。",
        "o": ["30分、公園を 走ります。", "30分、公園で ヨガを します。", "1時間、プールで 泳ぎます。", "5分、家で ストレッチを します。"],
        "a": 0,
        "e": "毎朝 30分、近くの 公園を 走って います。"
      },
      {
        "q": "筆者の 体重は どう なりましたか。",
        "o": ["3キロ 増えました。", "3キロ 減りました。", "5キロ 減りました。", "変わりませんでした。"],
        "a": 1,
        "e": "体重も 3キロ 減りました。"
      },
      {
        "q": "筆者は 運動に ついて、どう 考えて いますか。",
        "o": ["体だけ では なく、心にも いいと 思います。", "体には いいが、心には よくないと 思います。", "毎日 する のは 体に よくないと 思います。", "運動は 時間の むだだと 思います。"],
        "a": 0,
        "e": "医者は、運動は 体だけ では なく、心にも いいと 言います。わたしも そう 思います。"
      }
    ],
    "exp": "Q1: đáp án 1 — mỗi sáng chạy 30 phút ở công viên gần nhà: 「毎朝30分、近くの公園を走っています。」Q2: đáp án 2 — cân nặng giảm 3kg: 「体重も3キロ減りました。」Q3: đáp án 1 — vận động tốt không chỉ cho cơ thể mà còn cho tinh thần: 「医者は、運動は体だけではなく、心にもいいと言います。わたしもそう思います。」",
    "voc": "走る（はしる）：chạy； 公園（こうえん）：công viên； 疲れる（つかれる）：mệt； 体重（たいじゅう）：cân nặng； 減る（へる）：giảm； 運動（うんどう）：vận động； 気持ち（きもち）：tâm trạng； 無理（むり）：quá sức"
  }
  ],
  tougou: [
  {
    "p1": "わたしは、子どもに スマートフォンを 持たせる ことに 賛成です。スマートフォンが あれば、子どもと いつでも 連絡を とる ことが できます。学校からの 連絡も すぐに 受ける ことが できます。また、調べ物を する ときにも 便利です。もちろん、使う 時間を 決める ことは 大切です。夜 遅くまで 使わない ように、家族で ルールを 作れば、問題は ないと 思います。",
    "p2": "わたしは、子どもに スマートフォンを 持たせる ことに 反対です。子どもは ゲームや 動画に 夢中に なって、勉強が できなく なります。目が 悪く なる ことも 心配です。また、知らない 人と 連絡を とって、危険な 目に あう ことも あります。子どもには、まず 本を 読んだり、外で 遊んだり して ほしいです。スマートフォンは、大人に なって からで 十分です。",
    "qs": [
      {
        "q": "Aさんは、スマートフォンに ついて どう 考えて いますか。",
        "o": ["子どもに 持たせては いけない。", "夜 遅くまで 使わせる べきだ。", "使う 時間を 決めれば、子どもに 持たせても いい。", "学校からの 連絡には 使う べきでは ない。"],
        "a": 2,
        "e": "使う 時間を 決める ことは 大切です。夜 遅くまで 使わない ように、家族で ルールを 作れば、問題は ないと 思います。"
      },
      {
        "q": "Bさんは、なぜ 子どもに スマートフォンを 持たせる ことに 反対ですか。",
        "o": ["勉強が できなく なったり、危険な 目に あう から。", "連絡を とる ことが できなく なる から。", "調べ物が できなく なる から。", "電話の 料金が 高く なる から。"],
        "a": 0,
        "e": "子どもは ゲームや 動画に 夢中に なって、勉強が できなく なります。また、知らない 人と 連絡を とって、危険な 目に あう ことも あります。"
      }
    ],
    "exp": "Q1: đáp án 3 — A đồng ý cho trẻ dùng điện thoại nếu gia đình đặt ra quy tắc về thời gian: 「使う時間を決めることは大切です。夜遅くまで使わないように、家族でルールを作れば、問題はないと思います。」Q2: đáp án 1 — B phản đối vì trẻ mải game/video nên không học được và có thể gặp nguy hiểm khi liên lạc với người lạ: 「子どもはゲームや動画に夢中になって、勉強ができなくなります。また、知らない人と連絡をとって、危険な目にあうこともあります。」",
    "voc": "賛成（さんせい）：tán thành； 反対（はんたい）：phản đối； スマートフォン：điện thoại thông minh； 連絡（れんらく）：liên lạc； 調べ物（しらべもの）：tra cứu； 便利（べんり）：tiện lợi； 夢中（むちゅう）：mải mê； 危険（きけん）：nguy hiểm； 十分（じゅうぶん）：đủ"
  }
  ],
  shuchou: [
  {
    "p": "わたしは 子どもの ころ、失敗する ことが とても こわかった。テストで 悪い 点を とると、親に しかられる のでは ないかと 心配した。友だちの 前で 間違える のも いやだった。だから、新しい ことに チャレンジする のを さけて、できる こと だけを して いた。でも、大人に なって、考え方が 変わった。ある 日、仕事で 大きな ミスを して しまった。上司に 報告する のが こわかったが、正直に 話した。すると、上司は しからずに、「ミスを した こと よりも、同じ ミスを くり返さない ことが 大切だ」と 言った。その 言葉を 聞いて、わたしは 失敗の 意味を 考え直した。失敗は 恥ずかしい こと では なく、学ぶ ための 大切な 経験だ。失敗した とき、なぜ 失敗した のかを 考える ことで、次は 同じ 失敗を しない ように なる。成功した 人は、失敗を した ことが ない 人では ない。失敗を 恐れずに、何度も チャレンジした 人だ。もちろん、同じ 失敗を 何度も くり返す のは よくない。失敗から 何も 学ばなければ、失敗は ただの 失敗で 終わって しまう。大切な のは、失敗を した あと、どう 行動するかだ。わたしは 今、失敗を 恐れずに、新しい ことに チャレンジして いる。失敗する ことも あるが、その たびに 少しずつ 成長して いる と 感じる。子どもたちにも、失敗を 恐れないで ほしい。失敗は、成功への 大切な 一歩なのだ。",
    "qs": [
      {
        "q": "筆者は 子どもの ころ、どうして 新しい ことに チャレンジしなかったのですか。",
        "o": ["失敗する のが こわかった から。", "新しい ことが きらいだった から。", "親に 止められた から。", "友だちが いなかった から。"],
        "a": 0,
        "e": "失敗する ことが とても こわかった。だから、新しい ことに チャレンジする のを さけて、できる こと だけを して いた。"
      },
      {
        "q": "上司は、ミスを した 筆者に 何と 言いましたか。",
        "o": ["ミスを した ことを 謝りなさい。", "もう 仕事を 辞めなさい。", "ミスを 隠して は いけない。", "同じ ミスを くり返さない ことが 大切だ。"],
        "a": 3,
        "e": "「ミスを した こと よりも、同じ ミスを くり返さない ことが 大切だ」と 言った。"
      },
      {
        "q": "筆者は 失敗に ついて、どう 考えて いますか。",
        "o": ["失敗は 恥ずかしい ことだから、さける べきだ。", "失敗は 学ぶ ための 大切な 経験だ。", "失敗は 成功と 関係が ない。", "失敗を しても、何も 考えなくて いい。"],
        "a": 1,
        "e": "失敗は 恥ずかしい こと では なく、学ぶ ための 大切な 経験だ。"
      }
    ],
    "exp": "Q1: đáp án 1 — hồi nhỏ tác giả sợ thất bại nên tránh thử thách mới: 「失敗することがとてもこわかった。だから、新しいことにチャレンジするのをさけて、できることだけをしていた。」Q2: đáp án 4 — cấp trên nói quan trọng là không lặp lại lỗi cũ: 「ミスをしたことよりも、同じミスをくり返さないことが大切だ」と言った。Q3: đáp án 2 — tác giả cho rằng thất bại là kinh nghiệm quý để học hỏi: 「失敗は恥ずかしいことではなく、学ぶための大切な経験だ。」",
    "voc": "失敗（しっぱい）：thất bại； こわい：sợ； 間違える（まちがえる）：nhầm lẫn； 報告（ほうこく）：báo cáo； 正直（しょうじき）：thành thật； 恥ずかしい（はずかしい）：xấu hổ； 経験（けいけん）：kinh nghiệm； 恐れる（おそれる）：sợ； 成長（せいちょう）：trưởng thành； 一歩（いっぽ）：một bước"
  }
  ],
  info: [
  {
    "tpl": "<b>フィットネスクラブ「さくら」の 11月の クラス</b><br><table class=\"jl-tbl\"><tr><th>クラス</th><th>曜日</th><th>時間</th></tr><tr><td>ヨガ</td><td>月・水・金</td><td>10時〜11時</td></tr><tr><td>水泳</td><td>火・木</td><td>14時〜15時</td></tr><tr><td>ダンス</td><td>土</td><td>11時〜12時</td></tr></table><b>カレンダー（11月）</b><br><table class=\"jl-cal\"><tr><th>日</th><th>月</th><th>火</th><th>水</th><th>木</th><th>金</th><th>土</th></tr><tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td></tr><tr><td>8</td><td>9</td><td>10</td><td>11</td><td>12</td><td>13</td><td>14</td></tr><tr><td>15</td><td>16</td><td>17</td><td>18</td><td>19</td><td>20</td><td>21</td></tr><tr><td>22</td><td>23</td><td>24</td><td>25</td><td>26</td><td>27</td><td>28</td></tr><tr><td>29</td><td>30</td><td></td><td></td><td></td><td></td><td></td></tr></table>",
    "inst": "つぎのフィットネスクラブ「さくら」の11月のクラスとカレンダーを見て、質問に答えてください。答えは1・2・3・4から、いちばんいいものを一つえらんでください。",
    "q": "今日は 11月 10日です。ヨガの クラスに 出たいです。いちばん 早く 出られる のは 何日ですか。",
    "opts": ["11日", "12日", "13日", "16日"],
    "ans": 0,
    "exp": "Yoga học vào thứ Hai, thứ Tư, thứ Sáu. Tra lịch: ngày 10 tháng 11 là thứ Ba, nên buổi yoga sớm nhất tiếp theo là thứ Tư ngày 11. Ngày 12 là thứ Năm (không có yoga), ngày 13 là thứ Sáu (muộn hơn), ngày 16 là thứ Hai (muộn hơn).",
    "voc": "ヨガ：yoga； 水泳（すいえい）：bơi lội； ダンス：khiêu vũ； 曜日（ようび）：thứ trong tuần； カレンダー：lịch"
  },
  {
    "tpl": "<b>市立美術館の お知らせ</b><br>開館時間：9時〜17時（入館は 16時30分まで）。休館日：月曜日。<br><table class=\"jl-tbl\"><tr><th>バス</th><th>駅前を 出る 時間</th><th>美術館前に 着く 時間</th></tr><tr><td>1番</td><td>9時00分</td><td>9時20分</td></tr><tr><td>2番</td><td>10時00分</td><td>10時20分</td></tr><tr><td>3番</td><td>15時50分</td><td>16時10分</td></tr><tr><td>4番</td><td>16時20分</td><td>16時40分</td></tr></table><b>カレンダー（11月）</b><br><table class=\"jl-cal\"><tr><th>日</th><th>月</th><th>火</th><th>水</th><th>木</th><th>金</th><th>土</th></tr><tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td></tr><tr><td>8</td><td>9</td><td>10</td><td>11</td><td>12</td><td>13</td><td>14</td></tr><tr><td>15</td><td>16</td><td>17</td><td>18</td><td>19</td><td>20</td><td>21</td></tr><tr><td>22</td><td>23</td><td>24</td><td>25</td><td>26</td><td>27</td><td>28</td></tr><tr><td>29</td><td>30</td><td></td><td></td><td></td><td></td><td></td></tr></table>",
    "inst": "つぎの市立美術館のお知らせとバスの時刻表とカレンダーを見て、質問に答えてください。答えは1・2・3・4から、いちばんいいものを一つえらんでください。",
    "q": "11月 15日に 美術館へ 行きたいです。美術館に 入る ことが できる、いちばん 遅い バスは どれですか。",
    "opts": ["1番の バス", "2番の バス", "3番の バス", "4番の バス"],
    "ans": 2,
    "exp": "Tra lịch: ngày 15 tháng 11 là Chủ nhật, bảo tàng mở cửa (chỉ đóng cửa thứ Hai). Vào cửa đến 16 giờ 30. Xe số 3 đến lúc 16 giờ 10, vẫn kịp vào; xe số 4 đến 16 giờ 40, đã quá giờ vào cửa nên không được. Xe số 1 và 2 đến sớm hơn nên không phải là xe muộn nhất.",
    "voc": "美術館（びじゅつかん）：bảo tàng mỹ thuật； 開館（かいかん）：mở cửa； 休館日（きゅうかんび）：ngày đóng cửa； 入館（にゅうかん）：vào cửa； 時刻表（じこくひょう）：bảng giờ"
  }
  ]
};

/* ----- Test 7 ----- */
window.WRITTEN_N2_SET7 = {
  yomi: [
  {
    "s": "この 地域 で は 環境 を 守る 活動 が さかん です。",
    "t": "環境",
    "r": "かんきょう",
    "w": ["かんきょ", "かんけい", "けんきょう"],
    "exp": "環境 đọc là かんきょう（環 かん、境 きょう）。かんきょ thiếu âm う、かんけい đọc 境 thành けい nên sai、けんきょう đọc 環 thành けん nên sai。",
    "voc": "環境（かんきょう）：môi trường； 地域（ちいき）：khu vực； 守る（まもる）：bảo vệ； 活動（かつどう）：hoạt động； さかんです：thịnh hành, sôi nổi"
  },
  {
    "s": "この 政策 は 経済 に 大きな 影響 を 与えます。",
    "t": "影響",
    "r": "えいきょう",
    "w": ["えいきょ", "えいきょうう", "あいきょう"],
    "exp": "影響 đọc là えいきょう（影 えい、響 きょう）。えいきょ thiếu âm う、えいきょうう thêm う thừa、あいきょう đọc 影 thành あい nên sai。",
    "voc": "影響（えいきょう）：ảnh hưởng； 政策（せいさく）：chính sách； 経済（けいざい）：kinh tế； 与える（あたえる）：gây ra, mang lại"
  },
  {
    "s": "子ども の 成長 を 見る の は 楽しい です。",
    "t": "成長",
    "r": "せいちょう",
    "w": ["せいちょ", "せいちよ", "せいじょう"],
    "exp": "成長 đọc là せいちょう（成 せい、長 ちょう）。せいちょ thiếu âm う、せいちよ đọc 長 thành ちよ nên sai、せいじょう đọc 長 thành じょう nên sai。",
    "voc": "成長（せいちょう）：sự trưởng thành； 子ども：trẻ em； 楽しい（たのしい）：vui vẻ"
  },
  {
    "s": "彼 の 希望 は 医者 に なる こと です。",
    "t": "希望",
    "r": "きぼう",
    "w": ["きぼ", "きぼうう", "ぎぼう"],
    "exp": "希望 đọc là きぼう（希 き、望 ぼう）。きぼ thiếu âm う、きぼうう thêm う thừa、ぎぼう đọc 希 thành ぎ nên sai。",
    "voc": "希望（きぼう）：nguyện vọng, hi vọng； 医者（いしゃ）：bác sĩ； なる：trở thành"
  },
  {
    "s": "旅行 の 準備 を 始めました。",
    "t": "準備",
    "r": "じゅんび",
    "w": ["じゅんぴ", "じゅんびい", "しゅんび"],
    "exp": "準備 đọc là じゅんび（準 じゅん、備 び）。じゅんぴ đọc 備 thành ぴ nên sai、じゅんびい thêm い thừa、しゅんび đọc 準 thành しゅん nên sai。",
    "voc": "準備（じゅんび）：chuẩn bị； 旅行（りょこう）：du lịch； 始める（はじめる）：bắt đầu"
  }
  ],
  hyoki: [
  {
    "s": "彼 の 計画 は ついに せいこう しました。",
    "h": "せいこう",
    "k": "成功",
    "w": ["成巧", "生功", "成工"],
    "exp": "せいこう viết là 成功（成 せい、功 こう）。成巧 dùng 巧 sai chữ、生功 dùng 生 sai chữ、成工 dùng 工 sai chữ。",
    "voc": "成功（せいこう）：thành công； 計画（けいかく）：kế hoạch； ついに：cuối cùng"
  },
  {
    "s": "生活 を かいぜん する ため に、毎日 運動 して います。",
    "h": "かいぜん",
    "k": "改善",
    "w": ["改正", "改全", "開善"],
    "exp": "かいぜん viết là 改善（改 かい、善 ぜん）。改正 là かいせい（sửa đổi luật）sai nghĩa、改全 dùng 全 sai chữ、開善 dùng 開 sai chữ。",
    "voc": "改善（かいぜん）：cải thiện； 生活（せいかつ）：cuộc sống； 運動（うんどう）：vận động, thể dục； 毎日（まいにち）：mỗi ngày"
  },
  {
    "s": "しっぱい を おそれず に、ちょうせん して ください。",
    "h": "しっぱい",
    "k": "失敗",
    "w": ["失配", "失貝", "失販"],
    "exp": "しっぱい viết là 失敗（失 しっ、敗 ぱい）。失配 dùng 配 sai chữ、失貝 dùng 貝 sai chữ、失販 dùng 販 sai chữ。",
    "voc": "失敗（しっぱい）：thất bại； おそれる：sợ hãi； 挑戦（ちょうせん）：thử thách"
  },
  {
    "s": "困った とき は、先生 に そうだん して ください。",
    "h": "そうだん",
    "k": "相談",
    "w": ["送談", "商談", "想談"],
    "exp": "そうだん viết là 相談（相 そう、談 だん）。送談 dùng 送 sai chữ、商談 đọc là しょうだん（đàm phán kinh doanh）sai nghĩa、想談 dùng 想 sai chữ。",
    "voc": "相談（そうだん）：trao đổi, hỏi ý kiến； 困る（こまる）：gặp khó khăn； 先生（せんせい）：thầy cô"
  },
  {
    "s": "遅れた りゆう を 説明 しました。",
    "h": "りゆう",
    "k": "理由",
    "w": ["理油", "理田", "理遊"],
    "exp": "りゆう viết là 理由（理 り、由 ゆう）。理油 dùng 油 sai chữ、理田 dùng 田 sai chữ、理遊 dùng 遊 sai chữ。",
    "voc": "理由（りゆう）：lý do； 遅れる（おくれる）：đến muộn； 説明（せつめい）：giải thích"
  }
  ],
  ctx: [
  {
    "s": "この 調査 の （　）は、若者 の 考え を 知る こと です。",
    "a": "もくてき",
    "w": ["りゆう", "けっか", "きかい"],
    "exp": "Mục đích của cuộc điều tra này là biết suy nghĩ của giới trẻ nên dùng 目的（mục đích）。理由（lý do）、結果（kết quả）、機会（cơ hội）đều không hợp ngữ cảnh。",
    "voc": "目的（もくてき）：mục đích； 調査（ちょうさ）：điều tra； 若者（わかもの）：người trẻ； 考える（かんがえる）：suy nghĩ"
  },
  {
    "s": "彼 の （　）の おかげで、チーム は 優勝 しました。",
    "a": "どりょく",
    "w": ["しっぱい", "なまけ", "じまん"],
    "exp": "Nhờ nỗ lực của anh ấy mà đội đã vô địch nên dùng 努力（nỗ lực）。失敗（thất bại）、なまけ（lười biếng）、じまん（tự hào）đều không hợp ngữ cảnh。",
    "voc": "努力（どりょく）：nỗ lực； 優勝（ゆうしょう）：vô địch； チーム：đội"
  },
  {
    "s": "この 薬 は 毎日 飲む （　）が あります。",
    "a": "ひつよう",
    "w": ["しあわせ", "あんぜん", "きけん"],
    "exp": "Thuốc này cần uống mỗi ngày nên dùng 必要（cần thiết）: 飲む必要がある。しあわせ（hạnh phúc）、あんぜん（an toàn）、きけん（nguy hiểm）đều không hợp với 飲む〜がある。",
    "voc": "必要（ひつよう）：cần thiết； 薬（くすり）：thuốc； 毎日（まいにち）：mỗi ngày； 飲む（のむ）：uống"
  },
  {
    "s": "家族 の 健康 が いちばん （　）です。",
    "a": "たいせつ",
    "w": ["べんり", "あんしん", "むずかしい"],
    "exp": "Sức khỏe của gia đình là quan trọng nhất nên dùng 大切（quan trọng, quý giá）。べんり（tiện lợi）、あんしん（an tâm）、むずかしい（khó）đều không hợp ngữ cảnh。",
    "voc": "大切（たいせつ）：quan trọng, quý giá； 家族（かぞく）：gia đình； 健康（けんこう）：sức khỏe； いちばん：nhất"
  },
  {
    "s": "駅 の 近く に 住む と、買い物 が （　）です。",
    "a": "べんり",
    "w": ["ふべん", "たいせつ", "ひつよう"],
    "exp": "Sống gần ga thì mua sắm tiện lợi nên dùng 便利（tiện lợi）。ふべん（bất tiện）ngược nghĩa、たいせつ（quan trọng）、ひつよう（cần thiết）đều không hợp với 買い物が〜です。",
    "voc": "便利（べんり）：tiện lợi； 駅（えき）：nhà ga； 近く（ちかく）：gần； 買い物（かいもの）：mua sắm； 住む（すむ）：sống"
  },
  {
    "s": "この 部屋 は 広くて、（　）に 勉強 が できます。",
    "a": "じゅうぶん",
    "w": ["すこし", "とても", "すっかり"],
    "exp": "Phòng rộng nên có thể học tập một cách đầy đủ, thoải mái nên dùng 十分（đầy đủ）。とてもに và すっかりに đều sai ngữ pháp (とても・すっかり không kết hợp với に)；すこしに cũng không dùng được trước 勉強ができます — muốn nói 「học một chút」 thì dùng すこしだけ勉強ができる。",
    "voc": "十分（じゅうぶん）：đầy đủ； 部屋（へや）：phòng； 広い（ひろい）：rộng； 勉強（べんきょう）：học tập"
  },
  {
    "s": "熱 が 下がって、もう （　）です。",
    "a": "だいじょうぶ",
    "w": ["あぶない", "しんぱい", "ざんねん"],
    "exp": "Hết sốt rồi nên đã ổn rồi, dùng 大丈夫（ổn, không sao）。あぶない（nguy hiểm）ngược nghĩa、しんぱい（lo lắng）、ざんねん（tiếc）đều không hợp ngữ cảnh。",
    "voc": "大丈夫（だいじょうぶ）：ổn, không sao； 熱（ねつ）：sốt； 下がる（さがる）：giảm xuống； もう：đã, rồi"
  }
  ],
  syn: [
  {
    "s": "家族 と 過ごす 時間 が、私 にとって 一番 の しあわせ です。",
    "t": "しあわせ",
    "a": "こうふく",
    "w": ["かなしみ", "ふあん", "つかれ"],
    "exp": "しあわせ（hạnh phúc）gần nghĩa nhất với こうふく（hạnh phúc）。かなしみ（nỗi buồn）、ふあん（lo lắng）、つかれ（mệt mỏi）đều khác nghĩa nên sai。",
    "voc": "しあわせ：hạnh phúc； 幸福（こうふく）：hạnh phúc； 家族（かぞく）：gia đình； 過ごす（すごす）：trải qua, sống； 一番（いちばん）：nhất"
  },
  {
    "s": "この 部屋 は とても きれい です。",
    "t": "きれい",
    "a": "うつくしい",
    "w": ["きたない", "くらい", "おもい"],
    "exp": "きれい（đẹp, sạch）gần nghĩa nhất với うつくしい（đẹp）。きたない（bẩn）ngược nghĩa、くらい（tối）、おもい（nặng）đều không hợp nghĩa với きれい。",
    "voc": "きれい：đẹp, sạch； 美しい（うつくしい）：đẹp； 部屋（へや）：phòng； とても：rất"
  },
  {
    "s": "彼 の 返事 は とても はやい です。",
    "t": "はやい",
    "a": "すばやい",
    "w": ["おそい", "ゆっくり", "ていねい"],
    "exp": "はやい（nhanh）gần nghĩa nhất với すばやい（nhanh nhẹn, mau lẹ）。おそい（chậm）ngược nghĩa、ゆっくり（chậm rãi）ngược nghĩa、ていねい（lịch sự, cẩn thận）không liên quan。",
    "voc": "早い（はやい）：nhanh, sớm； 素早い（すばやい）：nhanh nhẹn； 返事（へんじ）：trả lời, hồi âm； 遅い（おそい）：chậm, muộn"
  },
  {
    "s": "引っ越し の 仕事 は たいへん でした。",
    "t": "たいへん",
    "a": "つらい",
    "w": ["らく", "かんたん", "たのしい"],
    "exp": "たいへん（vất vả, cực nhọc）gần nghĩa nhất với つらい（khổ cực, vất vả）。らく（nhàn nhã）、かんたん（đơn giản）、たのしい（vui vẻ）đều ngược nghĩa nên sai。",
    "voc": "大変（たいへん）：vất vả； つらい：khổ cực, vất vả； 引っ越し（ひっこし）：chuyển nhà； 仕事（しごと）：công việc"
  },
  {
    "s": "山田さん は とても しんせつ な 人 です。",
    "t": "しんせつ",
    "a": "やさしい",
    "w": ["きびしい", "つめたい", "こわい"],
    "exp": "しんせつ（tốt bụng, thân thiện）gần nghĩa nhất với やさしい（hiền lành, tốt bụng）。きびしい（nghiêm khắc）、つめたい（lạnh lùng）、こわい（đáng sợ）đều ngược nghĩa nên sai。",
    "voc": "親切（しんせつ）：tốt bụng； やさしい：hiền lành； 厳しい（きびしい）：nghiêm khắc； 冷たい（つめたい）：lạnh lùng"
  }
  ],
  yoho: [
  {
    "t": "おもい",
    "s": ["おもい 綿 を 持ちました。", "おもい 風船 を 持ちました。", "おもい 荷物 を 持ちました。", "おもい 紙 を 持ちました。"],
    "a": 2,
    "exp": "おもい（nặng）dùng đúng với 荷物（hành lý nặng）。おもい綿、おもい風船、おもい紙 đều sai kết hợp: bông, bóng bay, giấy không dùng 重い để miêu tả。",
    "voc": "重い（おもい）：nặng； 荷物（にもつ）：hành lý； 綿（わた）：bông； 風船（ふうせん）：bóng bay； 紙（かみ）：giấy； 持つ（もつ）：cầm, mang"
  },
  {
    "t": "あつい",
    "s": ["あつい お茶 を 飲みました。", "あつい 氷 を 食べました。", "あつい 本 を 読みました。", "あつい 時間 が かかりました。"],
    "a": 0,
    "exp": "あつい（nóng）dùng đúng với お茶（trà nóng）。氷（đá）không thể nóng、 本（sách）、時間（thời gian）không dùng 熱い để miêu tả nên đều sai。",
    "voc": "熱い（あつい）：nóng； お茶（おちゃ）：trà； 氷（こおり）：đá； 飲む（のむ）：uống"
  },
  {
    "t": "あかるい",
    "s": ["あかるい 部屋 で 勉強しました。", "あかるい 味 が しました。", "あかるい におい が しました。", "あかるい かぜ が ふきました。"],
    "a": 0,
    "exp": "あかるい（sáng sủa）dùng đúng với 部屋（phòng sáng）。味（vị）、におい（mùi）、かぜ（gió）không dùng 明るい để miêu tả nên đều sai。",
    "voc": "明るい（あかるい）：sáng sủa； 部屋（へや）：phòng； 勉強（べんきょう）：học tập； 味（あじ）：vị； におい：mùi； 風（かぜ）：gió"
  },
  {
    "t": "ふかい",
    "s": ["ふかい 海 で およぎました。", "ふかい 机 を 買いました。", "ふかい 時間 が かかりました。", "ふかい 紙 を 買いました。"],
    "a": 0,
    "exp": "ふかい（sâu）dùng đúng với 海（biển sâu）。机（bàn）、時間（thời gian）、紙（giấy）không dùng 深い để miêu tả nên đều sai。",
    "voc": "深い（ふかい）：sâu； 海（うみ）：biển； 泳ぐ（およぐ）：bơi； 机（つくえ）：bàn； 紙（かみ）：giấy"
  },
  {
    "t": "あまい",
    "s": ["あまい ケーキ を 食べました。", "あまい 空 を 見ました。", "あまい 本 を 読みました。", "あまい かぜ が ふきました。"],
    "a": 0,
    "exp": "あまい（ngọt）dùng đúng với ケーキ（bánh ngọt）。空（bầu trời）、本（sách）、かぜ（gió）không dùng 甘い để miêu tả nên đều sai。",
    "voc": "甘い（あまい）：ngọt； ケーキ：bánh ngọt； 食べる（たべる）：ăn； 空（そら）：bầu trời； 風（かぜ）：gió"
  }
  ],
  kotoba: [
  {
    "s": "この 問題 は （　）な 考え方 が ひつよう です。",
    "a": "かがくてき",
    "w": ["かがく", "かがくせい", "かがくか"],
    "exp": "Chỗ trống đứng trước な nên cần tính từ đuôi な: 科学的な考え方（cách suy nghĩ mang tính khoa học）。科学（danh từ）、科学性（tính khoa học — không đi với な theo cách này）、科学化（sự khoa học hóa）đều không tạo thành 科学的（な）+ 考え方。",
    "voc": "科学的（かがくてき）：mang tính khoa học； 問題（もんだい）：vấn đề； 考え方（かんがえかた）：cách suy nghĩ； 必要（ひつよう）：cần thiết"
  },
  {
    "s": "友だち から （　）が とどきました。",
    "a": "てがみ",
    "w": ["てかみ", "てがめ", "でがみ"],
    "exp": "手紙 đọc là てがみ: khi ghép 手（て）+ 紙（かみ） thì âm đầu của 紙 bị biến âm thành が (rendaku). てかみ không có biến âm nên sai、てがめ và でがみ đều sai cách đọc。",
    "voc": "手紙（てがみ）：thư； 友だち（ともだち）：bạn bè； 届く（とどく）：được gửi đến"
  },
  {
    "s": "この 町 で は、最近 （　）が 進んで います。",
    "a": "としか",
    "w": ["としき", "としかく", "としせい"],
    "exp": "Sự đô thị hóa của thị trấn dùng 都市化（としか）: hậu tố 〜化（hóa）chỉ sự biến đổi thành ~。としき、としかく、としせい đều không phải từ có thật trong tiếng Nhật。",
    "voc": "都市化（としか）：đô thị hóa； 町（まち）：thị trấn； 最近（さいきん）：gần đây； 進む（すすむ）：tiến triển"
  },
  {
    "s": "お客様 に （　）を 出しました。",
    "a": "おちゃ",
    "w": ["ちゃ", "おさ", "さ"],
    "exp": "Mời khách dùng trà thì dùng kính ngữ お茶（おちゃ）: tiền tố お + 茶. ちゃ là cách nói thường, không lịch sự với お客様 nên sai；おさ và さ đều không phải từ có thật。",
    "voc": "お茶（おちゃ）：trà； お客様（おきゃくさま）：quý khách； 出す（だす）：mang ra, phục vụ"
  },
  {
    "s": "時間 の （　）で は、電車 が いちばん 早い です。",
    "a": "てん",
    "w": ["じかん", "とき", "きかん"],
    "exp": "Xét về mặt thời gian thì tàu điện nhanh nhất: 時間の点では（về điểm thời gian）。時間の時間では、時間のときでは、時間の期間では đều không thành cụm từ đúng。",
    "voc": "点（てん）：điểm, mặt； 時間（じかん）：thời gian； 電車（でんしゃ）：tàu điện； 早い（はやい）：nhanh"
  }
  ],
  g1dlg: [
  {
    "d": ["この 書類 は 今日中 に 出せます か。", "部長 の 許可 を 得て （　）、出せません。"],
    "a": "からでないと",
    "w": ["からこそ", "からすれば", "から見れば"],
    "p": "V-て からでないと〜ない",
    "exp": "Chưa được trưởng phòng cho phép thì không thể nộp: 〜てからでないと〜ない（nếu chưa V thì không ~). からこそ（chính vì ~) cần kết quả tích cực, からすれば／から見れば（xét theo ~) cần chủ thể quan điểm nên đều sai。",
    "voc": "書類（しょるい）：giấy tờ, tài liệu； 今日中（きょうじゅう）：trong hôm nay； 出す（だす）：nộp； 部長（ぶちょう）：trưởng phòng； 許可（きょか）：sự cho phép； 得る（える）：nhận được"
  },
  {
    "d": ["どうして 日本語 を 勉強し始めた んです か。", "日本人 の 友だち と 会った （　）、勉強し始めました。"],
    "a": "のをきっかけに",
    "w": ["たところで", "ばかりに", "て以来"],
    "p": "〜をきっかけに",
    "exp": "Gặp bạn người Nhật là cơ hội bắt đầu học tiếng Nhật: 〜のをきっかけに（nhân cơ hội ~). たところで（cho dù ~ cũng) không hợp、ばかりに（chỉ vì ~) dùng cho nguyên nhân xấu、て以来（kể từ khi ~) cần trạng thái tiếp diễn chứ không phải hành động bắt đầu một lần nên đều sai。",
    "voc": "日本人（にほんじん）：người Nhật； 友だち（ともだち）：bạn bè； 会う（あう）：gặp； 勉強（べんきょう）：học tập； 始める（はじめる）：bắt đầu"
  },
  {
    "d": ["田中さん は もう 来ました か。", "来た （　）、すぐ 帰ってしまいました。"],
    "a": "かと思ったら",
    "w": ["がてら", "かたわら", "ところで"],
    "p": "〜かと思ったら",
    "exp": "Vừa tưởng anh Tanaka đã đến thì anh ấy đã về ngay: 〜かと思ったら（vừa nghĩ là ~ thì...). がてら（nhân tiện ~)、かたわら（một mặt ~) và ところで（cho dù ~) đều không hợp ngữ cảnh này。",
    "voc": "来る（くる）：đến； 帰る（かえる）：về； すぐ：ngay lập tức； しまう：(trợ động từ) mất rồi"
  }
  ],
  g1: [
  {
    "s": "希望 （　）、部屋 を えらぶ こと が できます。",
    "a": "に応じて",
    "w": ["にかけて", "につれて", "に比べて"],
    "p": "〜に応じて",
    "exp": "Có thể chọn phòng theo nguyện vọng: 〜に応じて（tùy theo, theo ~). にかけて（trong khoảng, về phía ~) không đi với 希望 theo nghĩa chọn phòng nên sai；につれて cần một lượng thay đổi theo thời gian (tuổi tác, thu nhập...), 希望 là tiêu chí cố định nên không hợp；に比べて（so với ~) không hợp nghĩa。",
    "voc": "希望（きぼう）：nguyện vọng； 応じる（おうじる）：đáp ứng, tùy theo； 部屋（へや）：phòng； 選ぶ（えらぶ）：chọn"
  },
  {
    "s": "雨 （　）、試合 は 行われました。",
    "a": "にもかかわらず",
    "w": ["とはいえ", "といっても", "ものの"],
    "p": "〜にもかかわらず",
    "exp": "Mặc dù trời mưa nhưng trận đấu vẫn diễn ra: 〜にもかかわらず（mặc dù ~). とはいえ／といっても cần dạng 雨だとはいえ nên 雨とはいえ sai ngữ pháp；ものの nối với động từ/tính từ thể thường, 雨ものの sai ngữ pháp。",
    "voc": "雨（あめ）：mưa； 試合（しあい）：trận đấu； 行われる（おこなわれる）：được tổ chức； にもかかわらず：mặc dù"
  },
  {
    "s": "社長 の 発言 （　）、社内 で 意見 の 対立 が 深まって います。",
    "a": "をめぐって",
    "w": ["に沿って", "を通じて", "を介して"],
    "p": "〜をめぐって",
    "exp": "Xung quanh phát ngôn của giám đốc, sự đối lập ý kiến trong công ty ngày càng sâu sắc: 〜をめぐって（xoay quanh, về vấn đề ~). に沿って（dọc theo ~)、を通じて（thông qua ~)、を介して（qua trung gian ~) đều không hợp với 対立が深まる。",
    "voc": "発言（はつげん）：phát ngôn； 社長（しゃちょう）：giám đốc； 社内（しゃない）：trong công ty； 意見（いけん）：ý kiến； 対立（たいりつ）：đối lập； 深まる（ふかまる）：trở nên sâu sắc"
  },
  {
    "s": "この 本 は 100ページ （　）ので、1日 で 読めます。",
    "a": "にすぎない",
    "w": ["なんて", "はともかく", "に限らず"],
    "p": "〜にすぎない",
    "exp": "Cuốn sách chỉ có 100 trang nên đọc xong trong một ngày: 〜にすぎない（chỉ là, chẳng qua là ~). なんて、はともかく、に限らず đều không đứng được sau số lượng 100ページ + ので。",
    "voc": "ページ：trang； 読む（よむ）：đọc； 1日（いちにち）：một ngày； にすぎない：chỉ là"
  },
  {
    "s": "この こと について は、私 の 口 から は 何とも 言い （　）ので、ごめんなさい。",
    "a": "かねます",
    "w": ["ほかない", "そびれます", "きります"],
    "p": "V-ます + かねる",
    "exp": "Về việc này, tôi không thể nói gì được: 言いかねます（không thể nói — từ chối lịch sự vì khó nói). 言いほかない（chỉ còn cách nói) ngược nghĩa、言いそびれます（lỡ mất dịp nói) sai nghĩa、言いきります（nói hết) sai nghĩa。",
    "voc": "口（くち）：miệng； 何とも：không sao nói được； ごめんなさい：xin lỗi； かねる：không thể (lịch sự)"
  },
  {
    "s": "今でも 彼 の 話 を 聞く たびに、なみだ が 出 （　）のです。",
    "a": "ずにはいられない",
    "w": ["ずにはいられなかった", "ないことには", "ようがない"],
    "p": "V-ない + ずにはいられない",
    "exp": "Mỗi lần nghe câu chuyện của anh ấy là không cầm được nước mắt: 〜ずにはいられない（không thể không ~). ずにはいられなかった là thì quá khứ, không hợp với 聞くたびに（mỗi lần nghe — thói quen hiện tại)；ないことには（nếu không ~) sai ngữ pháp；出ようがない（không có cách nào để chảy) sai nghĩa。",
    "voc": "話（はなし）：câu chuyện； 聞く（きく）：nghe； たびに：mỗi lần； なみだ：nước mắt； 出る（でる）：chảy ra"
  },
  {
    "s": "値段 （　）、味 は 最高 です。",
    "a": "はともかく",
    "w": ["にすぎない", "に他ならない", "に限らず"],
    "p": "〜はともかく",
    "exp": "Gác giá cả sang một bên, vị thì tuyệt nhất: 〜はともかく（tạm gác ~ sang một bên). にすぎない（chỉ là ~)、に他ならない（chẳng qua là ~)、に限らず（không chỉ ~) đều không đứng được sau 値段 + 、味は最高です。",
    "voc": "値段（ねだん）：giá cả； 味（あじ）：vị； 最高（さいこう）：tuyệt nhất； はともかく：tạm gác sang một bên"
  },
  {
    "s": "この ルール は 大人 （　）、子ども にも 当てはまります。",
    "a": "に限らず",
    "w": ["にかかわらず", "もかまわず", "なんて"],
    "p": "〜に限らず",
    "exp": "Quy tắc này không chỉ áp dụng cho người lớn mà cả trẻ em: 〜に限らず（không chỉ ~ mà cả...). にかかわらず（bất kể ~) không hợp với 大人 + 子どもにも当てはまる theo nghĩa này、もかまわず（bất chấp ~) sai nghĩa、なんて không đứng được ở đây。",
    "voc": "ルール：quy tắc； 大人（おとな）：người lớn； 子ども：trẻ em； 当てはまる（あてはまる）：áp dụng, phù hợp； に限らず：không chỉ"
  },
  {
    "s": "彼 は 英語 （　）、日本語 も 話せません。",
    "a": "どころか",
    "w": ["とはいえ", "といっても", "ものの"],
    "p": "〜どころか",
    "exp": "Anh ấy đừng nói tiếng Anh, ngay cả tiếng Nhật cũng không nói được: 〜どころか（đừng nói ~, ngay cả... cũng không). とはいえ／といっても cần dạng 英語だとはいえ nên sai ngữ pháp；ものの nối với động từ/tính từ, 英語ものの sai ngữ pháp。",
    "voc": "英語（えいご）：tiếng Anh； 日本語（にほんご）：tiếng Nhật； 話す（はなす）：nói； どころか：đừng nói, ngay cả"
  }
  ],
  star: [
  {
    "pre": "",
    "post": "。",
    "chunks": ["先生の 話", "をきっかけに", "日本語に", "興味を 持つように なった"],
    "p": "〜をきっかけに",
    "exp": "Thứ tự đúng: 先生の話をきっかけに（nhân câu chuyện của thầy）+ 日本語に興味を持つようになった（bắt đầu quan tâm đến tiếng Nhật）。Cụm をきっかけに phải đi ngay sau danh từ chỉ cơ hội （先生の話）；日本語に là bổ ngữ của 興味を持つ nên phải đứng sát động từ, không thể tách ra trước をきっかけに。",
    "voc": "先生（せんせい）：thầy cô； 話（はなし）：câu chuyện； きっかけ：cơ hội, dịp； 日本語（にほんご）：tiếng Nhật； 興味（きょうみ）：sự quan tâm； 持つ（もつ）：có, mang"
  },
  {
    "pre": "",
    "post": "。",
    "chunks": ["新しい 仕事にあたって", "先生に", "いろいろと", "教えてもらいました"],
    "p": "〜にあたって",
    "exp": "Thứ tự đúng: 新しい仕事にあたって（nhân dịp bắt đầu công việc mới）+ 先生にいろいろと教えてもらいました（được thầy dạy nhiều điều）。Cụm にあたって mở đầu câu chỉ dịp；先生に là bổ ngữ gián tiếp của 教えてもらう nên đứng trước động từ；いろいろと là trạng từ bổ nghĩa cho động từ nên đứng sát động từ。",
    "voc": "新しい（あたらしい）：mới； 仕事（しごと）：công việc； 先生（せんせい）：thầy cô； いろいろと：nhiều điều； 教える（おしえる）：dạy"
  },
  {
    "pre": "",
    "post": "。",
    "chunks": ["買い物がてら", "駅前の 本屋で", "本を 買って", "帰りました"],
    "p": "〜がてら",
    "exp": "Thứ tự đúng: 買い物がてら（nhân tiện đi mua sắm）+ 駅前の本屋で本を買って帰りました（ghé hiệu sách trước ga mua sách rồi về）。Cụm がてら chỉ hành động kèm theo nên đứng đầu；本を買って là động từ thể て nối với 帰りました nên phải đứng sát cuối câu。",
    "voc": "買い物（かいもの）：mua sắm； がてら：nhân tiện； 駅前（えきまえ）：trước ga； 本屋（ほんや）：hiệu sách； 買う（かう）：mua； 帰る（かえる）：về"
  },
  {
    "pre": "",
    "post": "。",
    "chunks": ["いくら 勉強した", "ところで", "テストでは", "うまく いかなかった"],
    "p": "V-た ところで",
    "exp": "Thứ tự đúng: いくら勉強したところで（cho dù có học bao nhiêu đi nữa）+ テストではうまくいかなかった（trong bài kiểm tra vẫn không làm tốt）。ところで phải đi ngay sau mệnh đề V-た （勉強した）；テストでは là cụm chỉ phạm vi, うまくいかなかった là động từ chính đứng cuối câu。",
    "voc": "いくら：bao nhiêu đi nữa； 勉強（べんきょう）：học tập； テスト：bài kiểm tra； うまく：tốt, suôn sẻ； いかない：không được, không thành"
  },
  {
    "pre": "",
    "post": "。",
    "chunks": ["漢字", "どころか", "ひらがなも", "読めません"],
    "p": "〜どころか",
    "exp": "Thứ tự đúng: 漢字どころか（đừng nói chữ Hán）+ ひらがなも読めません（ngay cả hiragana cũng không đọc được）。どころか phải đi ngay sau danh từ bị phủ định mạnh hơn （漢字）；ひらがなも読めません là mệnh đề chính đứng cuối câu, không thể tách どころか ra khỏi 漢字 hay đưa ひらがなも lên trước 漢字。",
    "voc": "漢字（かんじ）：chữ Hán； どころか：đừng nói, ngay cả； ひらがな：chữ hiragana； 読む（よむ）：đọc"
  }
  ],
  bunsho: [
  {
    "intro": "つぎの 文章を 読んで、（　1　）〜（　5　）に入る いちばん いい ものを えらんで ください。",
    "p": "わたしは 大学を 卒業した あと、すぐ 会社に 入りました。（　1　）仕事は 思ったより 大変でした。毎日 残業が 多く、（　2　）体調を くずして しまいました。そこで、生活の 仕方を 見直す ことに しました。夜 11時までに 寝ること、野菜を 多く 食べることなど、（　3　）生活の 基本を 見直したのです。（　4　）三か月後、体調は よくなり、仕事も 順調に 進むように なりました。（　5　）健康を 守る ためには、毎日の 生活が 大切だと 分かりました。",
    "b": [
      { "a": "しかし", "w": ["そのため", "たとえば", "つまり"] },
      { "a": "そのため", "w": ["しかし", "たとえば", "つまり"] },
      { "a": "すなわち", "w": ["しかし", "たとえば", "一方で"] },
      { "a": "そして", "w": ["しかし", "つまり", "たとえば"] },
      { "a": "つまり", "w": ["しかし", "それから", "たとえば"] }
    ],
    "exp": "（1）しかし: vào công ty ngay nhưng công việc vất vả hơn tưởng — quan hệ đối lập, そのため（vì vậy）không có quan hệ nguyên nhân, たとえば（ví dụ）và つまり（nói cách khác）không hợp. （2）そのため: làm thêm giờ nhiều nên đổ bệnh — quan hệ nguyên nhân-kết quả, しかし không hợp vì đây không phải đối lập, たとえば và つまり không hợp. （3）すなわち: liệt kê ngủ trước 11 giờ, ăn nhiều rau... rồi tóm lại là đã xem lại những điều cơ bản của cuộc sống — すなわち（tức là）dùng để diễn đạt lại, しかし・たとえば・一方で đều không hợp. （4）そして: sau đó, ba tháng sau sức khỏe tốt lên — quan hệ tiếp nối, しかし・つまり・たとえば đều không hợp. （5）つまり: kết luận chung — để bảo vệ sức khỏe thì cuộc sống hằng ngày là quan trọng, つまり（tóm lại）hợp nhất, しかし・それから・たとえば đều không hợp.",
    "voc": "卒業（そつぎょう）：tốt nghiệp； 大学（だいがく）：đại học； 残業（ざんぎょう）：làm thêm giờ； 体調（たいちょう）：tình trạng sức khỏe； 見直す（みなおす）：xem lại； 野菜（やさい）：rau； 基本（きほん）：cơ bản； 順調（じゅんちょう）：thuận lợi； 健康（けんこう）：sức khỏe； 守る（まもる）：bảo vệ"
  }
  ],
  readS: [
  {
    "p": "わたし は 駅前 の レストラン で アルバイト を して います。仕事 は 週 に 三日 で、夕方 から 夜 まで 働きます。お客さん と 話す こと が 多い ので、日本語 が 上手 に なりました。店長 は やさしくて、仕事 を ていねい に 教えて くれます。アルバイト は 楽しい です が、忙しい 日 は 疲れます。",
    "q": "わたし の アルバイト について、正しい もの は どれ です か。",
    "o": ["週 に 三日、夕方 から 夜 まで 働きます。", "毎日、朝 から 晩 まで 働きます。", "週 に 五日、昼 だけ 働きます。", "月 に 三日 だけ 働きます。"],
    "a": 0,
    "e": "Đoạn văn nói làm thêm 3 ngày/tuần, từ chiều đến tối.",
    "exp": "Câu hỏi về lịch làm thêm. Bằng chứng trong bài: làm 3 ngày/tuần, từ chiều đến tối. Làm mỗi ngày từ sáng đến tối, làm 5 ngày/tuần chỉ buổi trưa, làm 3 ngày/tháng đều trái với bài.",
    "voc": "アルバイト：làm thêm； 駅前（えきまえ）：trước ga； 週に三日（しゅうにみっか）：3 ngày/tuần； 夕方（ゆうがた）：chiều tối； 店長（てんちょう）：quản lý cửa hàng； やさしい：hiền lành； ていねい：cẩn thận, lịch sự； 疲れる（つかれる）：mệt mỏi"
  },
  {
    "p": "来月、北海道へ 旅行に 行きます。電車の チケットは 1枚 12000円です。ホテルは 1泊 9000円で、2泊 します。昼ごはんは 1日 1500円 ぐらい かかります。旅行は 2泊3日です。",
    "q": "電車の チケットを 2枚 買って、ホテルに 2泊 すると、全部で いくら かかりますか。",
    "o": ["42000円です。", "30000円です。", "33000円です。", "21000円です。"],
    "a": 0,
    "calc": 1,
    "e": "文に「電車の チケットは 1枚 12000円です。ホテルは 1泊 9000円で、2泊 します」とあります。",
    "exp": "Câu hỏi tính toán: vé tàu 12000円 × 2枚 = 24000円, khách sạn 9000円 × 2泊 = 18000円, tổng 24000 + 18000 = 42000円. 30000円 là tính sai (12000 + 18000), 33000円 là tính 2 vé (24000円) cộng 1 đêm khách sạn (9000円), thiếu 1 đêm, 21000円 là 12000 + 9000 (chỉ tính 1 vé + 1 đêm).",
    "voc": "北海道（ほっかいどう）：Hokkaido； 旅行（りょこう）：du lịch； 電車（でんしゃ）：tàu điện； チケット：vé； ホテル：khách sạn； 1泊（いっぱく）：1 đêm； 昼ごはん（ひるごはん）：bữa trưa"
  },
  {
    "p": "市立図書館は 月曜日から 土曜日まで 開いています。開館時間は 朝 9時から 夜 7時までです。日曜日と 祝日は 休みです。図書館では 本を 5冊まで、2週間 借りる ことができます。わたしは 先週、3冊の 本を 借りました。",
    "q": "図書館で 本を 何冊まで 借りる ことができますか。",
    "o": ["3冊までです。", "5冊までです。", "2冊までです。", "7冊までです。"],
    "a": 1,
    "e": "文に「図書館では 本を 5冊まで、2週間 借りる ことができます」とあります。",
    "exp": "Câu hỏi về số sách được mượn tối đa. Bằng chứng: 「本を5冊まで、2週間借りることができます」. 3冊 là số sách người viết đã mượn tuần trước, không phải giới hạn; 2冊 và 7冊 không có trong bài.",
    "voc": "市立図書館（しりつとしょかん）：thư viện thành phố； 開館時間（かいかんじかん）：giờ mở cửa； 祝日（しゅくじつ）：ngày lễ； 借りる（かりる）：mượn； 冊（さつ）：quyển (sách)"
  },
  {
    "p": "来週の 土曜日、学校で 運動会が あります。運動会は 朝 9時に 始まります。お昼休みは 12時から 1時までです。運動会は 午後 3時に 終わります。わたしの クラスは リレーに 出ます。わたしは リレーの 最後の 走者です。",
    "q": "運動会は 何時に 終わりますか。",
    "o": ["午前 9時に 終わります。", "午後 1時に 終わります。", "午後 3時に 終わります。", "午後 12時に 終わります。"],
    "a": 2,
    "e": "文に「運動会は 午後 3時に 終わります」とあります。",
    "exp": "Câu hỏi về giờ kết thúc hội thao. Bằng chứng: 「運動会は午後3時に終わります」. 9 giờ sáng là giờ bắt đầu, 1 giờ chiều là hết giờ nghỉ trưa, 12 giờ là bắt đầu nghỉ trưa nên đều sai.",
    "voc": "運動会（うんどうかい）：hội thao； 始まる（はじまる）：bắt đầu； お昼休み（おひるやすみ）：giờ nghỉ trưa； 終わる（おわる）：kết thúc； リレー：chạy tiếp sức； 走者（そうしゃ）：người chạy"
  },
  {
    "p": "明日は 雨が 降る そうです。わたしは 明日、友だちと 公園へ 行く 予定でしたが、雨の 日は 公園へ 行けません。友だちと 話して、明日は 図書館へ 行く ことに しました。図書館は 駅の 近くに あります。明日は 朝 10時に 駅で 会います。",
    "q": "明日、わたしは どこへ 行きますか。",
    "o": ["公園へ 行きます。", "図書館へ 行きます。", "駅へ 行きます。", "家に います。"],
    "a": 1,
    "e": "文に「明日は 図書館へ 行く ことに しました」とあります。",
    "exp": "Câu hỏi suy luận: ngày mai trời mưa nên không đi công viên được, đã đổi kế hoạch sang thư viện. Bằng chứng: 「明日は図書館へ行くことにしました」. Công viên là kế hoạch ban đầu đã hủy, ga chỉ là điểm hẹn lúc 10 giờ, ở nhà thì không đúng.",
    "voc": "雨（あめ）：mưa； 降る（ふる）：rơi； 公園（こうえん）：công viên； 予定（よてい）：kế hoạch； 図書館（としょかん）：thư viện； 駅（えき）：nhà ga； 会う（あう）：gặp"
  }
  ],
  readM: [
  {
    "p": "先週の 日曜日、わたしは 料理教室に 行きました。料理教室は 駅の 近くに あります。先生は 田中さんです。田中さんは 20年間、レストランで 働いて いました。先生は とても やさしいです。教室では カレーライスを 作りました。まず、玉ねぎと 肉を 切ります。次に、フライパンで よく いためます。それから、水を 入れて、20分 にます。最後に、カレーの ルーを 入れます。わたしが 作った カレーは とても おいしかったです。教室の 後、先生は わたしに レシピを くれました。来月は ハンバーグを 作る そうです。わたしは 来月も 教室に 行きたいです。料理を 作るのは 楽しいです。",
    "qs": [
      { "q": "料理教室で 何を 作りましたか。", "o": ["カレーライスを 作りました。", "ハンバーグを 作りました。", "サラダを 作りました。", "パンを 作りました。"], "a": 0, "e": "文に「教室では カレーライスを 作りました」とあります。" },
      { "q": "カレーを 作るとき、最初に 何を しますか。", "o": ["水を 入れます。", "ルーを 入れます。", "玉ねぎと 肉を 切ります。", "20分 にます。"], "a": 2, "e": "文に「まず、玉ねぎと 肉を 切ります」とあります。" },
      { "q": "来月、教室で 何を 作りますか。", "o": ["カレーライスを 作ります。", "ハンバーグを 作ります。", "すしを 作ります。", "てんぷらを 作ります。"], "a": 1, "e": "文に「来月は ハンバーグを 作る そうです」とあります。" }
    ],
    "exp": "Q1: bằng chứng 「教室ではカレーライスを作りました」nên món cà ri đúng; hăm-bơ-gơ là món của tháng sau, salad và bánh mì không có trong bài. Q2: bằng chứng 「まず、玉ねぎと肉を切ります」nên cắt hành và thịt là bước đầu tiên; cho nước, cho viên cà ri và ninh 20 phút đều là bước sau. Q3: bằng chứng 「来月はハンバーグを作るそうです」nên tháng sau làm hăm-bơ-gơ; cà ri là món tuần trước, sushi và tempura không có trong bài.",
    "voc": "料理教室（りょうりきょうしつ）：lớp học nấu ăn； カレーライス：cơm cà ri； 玉ねぎ（たまねぎ）：hành tây； 肉（にく）：thịt； 切る（きる）：cắt； いためる：xào； にる：ninh, nấu； ルー：viên cà ri； レシピ：công thức nấu ăn； ハンバーグ：hăm-bơ-gơ"
  },
  {
    "p": "わたしは 来月、引っ越しを します。今の アパートは 駅から 遠いです。今の アパートは 2階で、エレベーターが ありません。新しい アパートは 駅から 歩いて 5分です。新しい アパートの 近くには スーパーと 公園が あります。家賃は 今より 5000円 高いですが、部屋は 広いです。新しい アパートは 3階に あります。新しい アパートは 日当たりが いいです。エレベーターが ありますから、荷物を 運ぶのは 楽です。引っ越しの日は 来月の 10日です。友だちが 手伝って くれます。引っ越しの 準備は もう 始めました。引っ越しの 後、みんなで 食事を する 予定です。新しい 生活が 楽しみです。",
    "qs": [
      { "q": "新しい アパートは 駅から 歩いて 何分ですか。", "o": ["5分です。", "10分です。", "15分です。", "20分です。"], "a": 0, "e": "文に「新しい アパートは 駅から 歩いて 5分です」とあります。" },
      { "q": "引っ越しの日は いつですか。", "o": ["来月の 5日です。", "来月の 10日です。", "来月の 15日です。", "今月の 10日です。"], "a": 1, "e": "文に「引っ越しの日は 来月の 10日です」とあります。" },
      { "q": "引っ越しの 後、何を する 予定ですか。", "o": ["みんなで 食事を します。", "部屋を そうじします。", "荷物を 買います。", "駅へ 行きます。"], "a": 0, "e": "文に「引っ越しの 後、みんなで 食事を する 予定です」とあります。" }
    ],
    "exp": "Q1: bằng chứng 「新しいアパートは駅から歩いて5分です」nên 5 phút đúng; 10/15/20 phút không có trong bài. Q2: bằng chứng 「引っ越しの日は来月の10日です」nên ngày 10 tháng sau đúng; ngày 5, ngày 15 và tháng này đều sai. Q3: bằng chứng 「引っ越しの後、みんなで食事をする予定です」nên ăn cùng mọi người đúng; dọn phòng, mua hành lý, đi ga đều không có trong bài.",
    "voc": "引っ越し（ひっこし）：chuyển nhà； アパート：căn hộ； 遠い（とおい）：xa； 歩く（あるく）：đi bộ； 家賃（やちん）：tiền thuê nhà； 広い（ひろい）：rộng； エレベーター：thang máy； 荷物（にもつ）：hành lý； 運ぶ（はこぶ）：vận chuyển； 手伝う（てつだう）：giúp đỡ； 食事（しょくじ）：bữa ăn； 楽しみ（たのしみ）：mong chờ"
  },
  {
    "p": "佐藤さんは 毎日、朝 30分 歩いて います。佐藤さんは 朝 早く 起きて、近くの 公園を 歩きます。佐藤さんは 去年、医者に 「運動して ください」と 言われました。佐藤さんは 運動が 苦手でしたが、歩くことから 始めました。はじめは 10分 歩くだけで 疲れました。しかし、毎日 続けたので、今は 30分 歩いても 疲れません。体重も 3キロ 減りました。佐藤さんは 「歩くことは 楽しいです」と 言います。今は 友だちと 一緒に 歩くことも あります。佐藤さんの 友だちも、最近 歩き始めました。佐藤さんは 歩く ことが 毎日の 習慣に なりました。来月は 山に 登る 予定です。",
    "qs": [
      { "q": "佐藤さんは 毎日、何分 歩いて いますか。", "o": ["10分です。", "20分です。", "30分です。", "60分です。"], "a": 2, "e": "文に「佐藤さんは 毎日、朝 30分 歩いて います」とあります。" },
      { "q": "佐藤さんは どうして 歩き始めましたか。", "o": ["医者に 言われたからです。", "友だちに さそわれたからです。", "体重を 増やしたいからです。", "山に 登りたいからです。"], "a": 0, "e": "文に「佐藤さんは 去年、医者に 「運動して ください」と 言われました」とあります。" },
      { "q": "佐藤さんの 体重は どうなりましたか。", "o": ["3キロ 増えました。", "3キロ 減りました。", "変わりませんでした。", "5キロ 減りました。"], "a": 1, "e": "文に「体重も 3キロ 減りました」とあります。" }
    ],
    "exp": "Q1: bằng chứng 「毎日、朝30分歩いています」nên 30 phút đúng; 10 phút là thời gian lúc mới bắt đầu, 20 và 60 phút không có trong bài. Q2: bằng chứng 「去年、医者に「運動してください」と言われました」nên vì bác sĩ dặn đúng; bạn rủ, muốn tăng cân, muốn leo núi đều không có trong bài. Q3: bằng chứng 「体重も3キロ減りました」nên giảm 3 kg đúng; tăng 3 kg ngược nghĩa, không thay đổi và giảm 5 kg đều sai.",
    "voc": "佐藤（さとう）：Sato (họ)； 医者（いしゃ）：bác sĩ； 運動（うんどう）：vận động； 苦手（にがて）：không giỏi, yếu； 疲れる（つかれる）：mệt mỏi； 続ける（つづける）：tiếp tục； 体重（たいじゅう）：cân nặng； 減る（へる）：giảm； 登る（のぼる）：leo； 公園（こうえん）：công viên"
  }
  ],
  tougou: [
  {
    "p1": "ABC会社は 来月から、週に 2日、テレワークを 始める ことに しました。社員の アンケートでは、7割の 人が テレワークを 希望して いました。会社は テレワークの 日も、チームで 話し合う 時間を 大切に したいと 考えて います。そのため、水曜日は 全員が 会社に 来る 日に します。パソコンや 通信費は 会社が 出します。",
    "p2": "わたしは テレワークに 賛成です。家で 働くと、通勤時間が なくなり、家族と 過ごす 時間が 増えます。しかし、家では ほかの 社員と 話す 機会が 減ります。わたしは 水曜日に 会社で ほかの 社員と 話し合う 時間を 大切に したいです。テレワークと 出社の バランスが 大切だと 思います。",
    "qs": [
      { "q": "ABC会社で、テレワークは 週に 何日ですか。", "o": ["1日です。", "2日です。", "3日です。", "5日です。"], "a": 1, "e": "文1に「週に 2日、テレワークを 始める」とあります。" },
      { "q": "わたしが テレワークに 賛成する 理由は 何ですか。", "o": ["通勤時間が なくなり、家族と 過ごす 時間が 増えるからです。", "給料が 上がるからです。", "会社に 行かなくて よくなるからです。", "ほかの 社員と 話す 機会が 増えるからです。"], "a": 0, "e": "文2に「家で 働くと、通勤時間が なくなり、家族と 過ごす 時間が 増えます」とあります。" }
    ],
    "exp": "Q1: bằng chứng ở văn bản 1 「週に2日、テレワークを始める」nên 2 ngày/tuần đúng; 1/3/5 ngày đều không có trong bài. Q2: bằng chứng ở văn bản 2 「家で働くと、通勤時間がなくなり、家族と過ごす時間が増えます」nên lý do là hết thời gian đi lại và có thêm thời gian với gia đình; tăng lương không có trong bài, không phải đi làm nữa là hiểu sai ý (chỉ 2 ngày/tuần), cơ hội nói chuyện với đồng nghiệp tăng là ngược lại với bài (giảm).",
    "voc": "テレワーク：làm việc từ xa； 始める（はじめる）：bắt đầu； アンケート：khảo sát； 希望（きぼう）：nguyện vọng； 全員（ぜんいん）：toàn bộ mọi người； 通信費（つうしんひ）：phí liên lạc； 賛成（さんせい）：tán thành； 通勤時間（つうきんじかん）：thời gian đi làm； 過ごす（すごす）：trải qua； 機会（きかい）：cơ hội； 減る（へる）：giảm； 増える（ふえる）：tăng； 出社（しゅっしゃ）：đi làm ở công ty； バランス：cân bằng"
  }
  ],
  shuchou: [
  {
    "p": "最近、日本では 本を 読む 人が 減って います。特に 若い 人は、スマートフォンで 動画を 見たり、ゲームを したり する 時間が 長く、本を 読む 時間が 少ないと 言われて います。しかし、本を 読むことには、動画には ない 良さが あります。まず、本を 読むと、自分の ペースで 考える ことが できます。動画は 次々に 情報が 流れて きますが、本は 自分の 速さで 読む ことが できます。分からない ところが あれば、何度も 読み返す ことが できます。次に、本を 読むと、言葉の 力が つきます。いろいろな 本を 読むことで、新しい 言葉を 知り、自分の 考えを うまく 伝える ことが できるように なります。これは 仕事でも、日常生活でも 役に立ちます。もちろん、動画も 便利で 楽しいです。しかし、動画だけでは 深く 考える 習慣は つきません。わたしは 子どもの ころから 本が 好きでした。父は 毎晩、寝る 前に 本を 読んで くれました。その 時間が とても 楽しかったです。今でも、寝る 前に 本を 読む 習慣が あります。忙しい 日でも、10分だけ 読むように して います。わたしは、毎日 少しでも 本を 読む 時間を 作る ことが 大切だと 思います。通勤時間や 寝る 前の 10分でも いいのです。毎日 続けることで、本を 読むことが 習慣に なります。習慣に なれば、自然に 本を 読む 時間が 増えて いきます。",
    "qs": [
      { "q": "筆者に よると、本を 読む 良さは 何ですか。", "o": ["自分の ペースで 考える ことが できることです。", "動画より 速く 情報が 分かることです。", "友だちが 増えることです。", "お金が かからないことです。"], "a": 0, "e": "文に「本を 読むと、自分の ペースで 考える ことが できます」とあります。" },
      { "q": "筆者は どうして 本を 読むと 言葉の 力が つくと 言っていますか。", "o": ["本は 動画より 安いからです。", "先生に 教えて もらえるからです。", "いろいろな 本を 読むことで、新しい 言葉を 知り、自分の 考えを うまく 伝える ことが できるように なるからです。", "動画を 見るより 楽しいからです。"], "a": 2, "e": "文に「いろいろな 本を 読むことで、新しい 言葉を 知り、自分の 考えを うまく 伝える ことが できるように なります」とあります。" },
      { "q": "筆者は 本を 読む 習慣について、どう 言っていますか。", "o": ["休みの 日に まとめて 読めば いいです。", "毎日 少しでも 本を 読む 時間を 作る ことが 大切です。", "1日に 1冊 読まなければ なりません。", "本を 読む 必要は ありません。"], "a": 1, "e": "文に「毎日 少しでも 本を 読む 時間を 作る ことが 大切だと 思います」とあります。" }
    ],
    "exp": "Q1: bằng chứng 「本を読むと、自分のペースで考えることができます」nên tự suy nghĩ theo nhịp độ của mình là đáp án đúng; hiểu thông tin nhanh hơn video, tăng bạn bè, không tốn tiền đều không có trong bài. Q2: bằng chứng 「いろいろな本を読むことで、新しい言葉を知り、自分の考えをうまく伝えることができるようになります」nên đọc nhiều sách giúp biết từ mới và diễn đạt tốt hơn; sách rẻ hơn video, được thầy dạy, vui hơn xem video đều không có trong bài. Q3: bằng chứng 「毎日少しでも本を読む時間を作ることが大切だと思います」nên mỗi ngày dành chút thời gian đọc sách là quan trọng; đọc dồn vào ngày nghỉ, phải đọc 1 cuốn/ngày, không cần đọc sách đều trái với ý tác giả.",
    "voc": "最近（さいきん）：gần đây； 減る（へる）：giảm； 動画（どうが）：video； ペース：nhịp độ； 考える（かんがえる）：suy nghĩ； 情報（じょうほう）：thông tin； 流れる（ながれる）：trôi qua； 読み返す（よみかえす）：đọc lại； 言葉（ことば）：từ ngữ, ngôn ngữ； 伝える（つたえる）：truyền đạt； 日常生活（にちじょうせいかつ）：đời sống hằng ngày； 役に立つ（やくにたつ）：có ích； 便利（べんり）：tiện lợi； 習慣（しゅうかん）：thói quen； 通勤時間（つうきんじかん）：thời gian đi làm； 続ける（つづける）：tiếp tục； 自然に（しぜんに）：một cách tự nhiên"
  }
  ],
  info: [
  {
    "tpl": "<b>A スポーツジムのお知らせ</b><br>11月12日（木曜日）は 休館日です。<br><table class=\"jl-tbl\"><tr><th>場所</th><th>利用できる日</th><th>時間</th></tr><tr><td>プール</td><td>月曜日・水曜日・金曜日</td><td>10時〜20時</td></tr><tr><td>トレーニング室</td><td>毎日</td><td>9時〜21時</td></tr><tr><td>ヨガ教室</td><td>火曜日・木曜日</td><td>18時〜19時</td></tr></table><b>B カレンダー（11月）</b><br><table class=\"jl-cal\"><tr><th>日</th><th>月</th><th>火</th><th>水</th><th>木</th><th>金</th><th>土</th></tr><tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td></tr><tr><td>8</td><td>9</td><td>10</td><td>11</td><td>12</td><td>13</td><td>14</td></tr><tr><td>15</td><td>16</td><td>17</td><td>18</td><td>19</td><td>20</td><td>21</td></tr><tr><td>22</td><td>23</td><td>24</td><td>25</td><td>26</td><td>27</td><td>28</td></tr><tr><td>29</td><td>30</td><td></td><td></td><td></td><td></td><td></td></tr></table>",
    "inst": "つぎのA「スポーツジムのお知らせ」とBのカレンダーを見て、質問に答えてください。答えは1・2・3・4から、いちばんいいものを一つえらんでください。",
    "q": "今日は 9日（月曜日）です。今週、ヨガ教室に 行けるのは 何日ですか。",
    "opts": ["10日だけ", "12日だけ", "10日と12日", "10日と17日"],
    "ans": 0,
    "exp": "Lớp yoga mở thứ Ba và thứ Năm. Hôm nay là thứ Hai ngày 9, tuần này còn thứ Ba ngày 10 và thứ Năm ngày 12, nhưng ngày 12 là ngày nghỉ của phòng gym (休館日) nên chỉ đi được ngày 10. Ngày 17 là thứ Ba tuần sau, không phải tuần này.",
    "voc": "スポーツジム：phòng tập thể thao； 休館日（きゅうかんび）：ngày nghỉ của cơ sở； ヨガ教室（ヨガきょうしつ）：lớp yoga； プール：bể bơi； トレーニング室（トレーニングしつ）：phòng tập； 利用（りよう）：sử dụng"
  },
  {
    "tpl": "<b>A 料理教室の案内</b><br>申し込みは クラス日の 3日前までに して ください。<br><table class=\"jl-tbl\"><tr><th>コース</th><th>曜日</th><th>時間</th></tr><tr><td>和食コース</td><td>土曜日</td><td>10時〜12時</td></tr><tr><td>洋食コース</td><td>日曜日</td><td>14時〜16時</td></tr><tr><td>中国料理コース</td><td>金曜日</td><td>18時〜20時</td></tr></table><b>B カレンダー（11月）</b><br><table class=\"jl-cal\"><tr><th>日</th><th>月</th><th>火</th><th>水</th><th>木</th><th>金</th><th>土</th></tr><tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td></tr><tr><td>8</td><td>9</td><td>10</td><td>11</td><td>12</td><td>13</td><td>14</td></tr><tr><td>15</td><td>16</td><td>17</td><td>18</td><td>19</td><td>20</td><td>21</td></tr><tr><td>22</td><td>23</td><td>24</td><td>25</td><td>26</td><td>27</td><td>28</td></tr><tr><td>29</td><td>30</td><td></td><td></td><td></td><td></td><td></td></tr></table>",
    "inst": "つぎのA「料理教室の案内」とBのカレンダーを見て、質問に答えてください。答えは1・2・3・4から、いちばんいいものを一つえらんでください。",
    "q": "今日は 6日（金曜日）です。来週の 金曜日の 中国料理コースに 申し込みたいです。何日までに 申し込めば いいですか。",
    "opts": ["10日", "9日", "11日", "13日"],
    "ans": 0,
    "exp": "Khóa món Trung Quốc học thứ Sáu. Hôm nay là thứ Sáu ngày 6, thứ Sáu tuần sau là ngày 13 (xem lịch: 13 là thứ Sáu). Phải đăng ký trước 3 ngày, tức là trước ngày 10 (13 trừ 3 ngày). Ngày 9 và 11 đều không phải 3 ngày trước ngày 13, ngày 13 là ngày học chứ không phải hạn đăng ký.",
    "voc": "料理教室（りょうりきょうしつ）：lớp học nấu ăn； 申し込み（もうしこみ）：đăng ký； しめきり：hạn chót； 和食（わしょく）：món Nhật； 洋食（ようしょく）：món Tây； 中国料理（ちゅうごくりょうり）：món Trung Quốc； コース：khóa học"
  }
  ]
};

/* ----- Test 8 ----- */
window.WRITTEN_N2_SET8 = {
  yomi: [
  {
    "s": "この 問題 を 解決 する ため に、みんな で 話し合いました。",
    "t": "問題",
    "r": "もんだい",
    "w": ["もんだ", "もんたい", "ぼんだい"],
    "exp": "問題 đọc là もんだい（問 もん、題 だい）。もんだ thiếu âm い、もんたい đọc 題 thành たい là sai、ぼんだい đọc 問 thành ぼん là sai。",
    "voc": "問題（もんだい）：vấn đề； 解決（かいけつ）：giải quyết； 話し合う（はなしあう）：thảo luận"
  },
  {
    "s": "この 新しい 法律 は、会社 の 経営 に 大きな 影響 を 与えました。",
    "t": "影響",
    "r": "えいきょう",
    "w": ["えいきょ", "えいきょうう", "ようきょう"],
    "exp": "影響 đọc là えいきょう（影 えい、響 きょう）。えいきょ thiếu âm う、えいきょうう thêm う thừa、ようきょう đọc 影 thành よう là sai。",
    "voc": "影響（えいきょう）：ảnh hưởng； 法律（ほうりつ）：luật pháp； 経営（けいえい）：kinh doanh, quản lý"
  },
  {
    "s": "レポート の 提出 は、来週 の 月曜日 まで です。",
    "t": "提出",
    "r": "ていしゅつ",
    "w": ["ていしゅっ", "ていしゅつう", "てしゅつ"],
    "exp": "提出 đọc là ていしゅつ（提 てい、出 しゅつ）。ていしゅっ thêm っ thừa、ていしゅつう thêm う thừa、てしゅつ thiếu âm い nên đều sai。",
    "voc": "提出（ていしゅつ）：nộp, trình nộp； レポート：báo cáo； 来週（らいしゅう）：tuần sau"
  },
  {
    "s": "最近、外国人 の 旅行者 が 増加 して います。",
    "t": "増加",
    "r": "ぞうか",
    "w": ["ぞうが", "ぞうかあ", "そうか"],
    "exp": "増加 đọc là ぞうか（増 ぞう、加 か）。ぞうが đọc 加 thành が là sai、ぞうかあ thêm あ thừa、そうか đọc 増 thành そう là sai。",
    "voc": "増加（ぞうか）：tăng lên； 旅行者（りょこうしゃ）：khách du lịch； 外国人（がいこくじん）：người nước ngoài"
  },
  {
    "s": "会議 の 準備 を、午前中 に 終わらせました。",
    "t": "準備",
    "r": "じゅんび",
    "w": ["じゅんひ", "じゅんぴ", "じゅんびい"],
    "exp": "準備 đọc là じゅんび（準 じゅん、備 び）。じゅんひ đọc 備 thành ひ là sai、じゅんぴ đọc 備 thành ぴ là sai、じゅんびい thêm い thừa nên sai。",
    "voc": "準備（じゅんび）：chuẩn bị； 会議（かいぎ）：cuộc họp； 午前中（ごぜんちゅう）：buổi sáng"
  }
  ],
  hyoki: [
  {
    "s": "工場 で は あんぜん が いちばん 大切 です。",
    "h": "あんぜん",
    "k": "安全",
    "w": ["安前", "安然", "安千"],
    "exp": "あんぜん viết là 安全（安 あん、全 ぜん）。安前 dùng 前 sai chữ、安然 dùng 然 sai chữ、安千 dùng 千 sai chữ。",
    "voc": "安全（あんぜん）：an toàn； 工場（こうじょう）：nhà máy； 大切（たいせつ）：quan trọng"
  },
  {
    "s": "来年 の けいかく を、来週 の 会議 で 話し合います。",
    "h": "けいかく",
    "k": "計画",
    "w": ["計書", "計話", "計国"],
    "exp": "けいかく viết là 計画（計 けい、画 かく）。計書 dùng 書 sai chữ、計話 dùng 話 sai chữ、計国 dùng 国 sai chữ。",
    "voc": "計画（けいかく）：kế hoạch； 来年（らいねん）：năm sau； 話し合う（はなしあう）：thảo luận"
  },
  {
    "s": "日本 で 働く きかい を 得て、とても うれしい です。",
    "h": "きかい",
    "k": "機会",
    "w": ["機合", "機回", "機開"],
    "exp": "きかい viết là 機会（機 き、会 かい）。機合 dùng 合 sai chữ、機回 dùng 回 sai chữ、機開 dùng 開 sai chữ。",
    "voc": "機会（きかい）：cơ hội； 得る（える）：có được, đạt được； うれしい：vui mừng"
  },
  {
    "s": "事故 の あと の じょうきょう を、社長 に 報告 しました。",
    "h": "じょうきょう",
    "k": "状況",
    "w": ["状光", "状説", "上況"],
    "exp": "じょうきょう viết là 状況（状 じょう、況 きょう）。状光 dùng 光 sai chữ、状説 dùng 説 sai chữ、上況 dùng 上 sai chữ đầu。",
    "voc": "状況（じょうきょう）：tình hình, tình trạng； 事故（じこ）：tai nạn； 報告（ほうこく）：báo cáo"
  },
  {
    "s": "この 工場 で は、車 の 部品 を せいさん して います。",
    "h": "せいさん",
    "k": "生産",
    "w": ["生座", "先産", "先座"],
    "exp": "せいさん viết là 生産（生 せい、産 さん）。生座 dùng 座 sai chữ、先産 dùng 先 sai chữ đầu、先座 cả hai chữ đều sai。",
    "voc": "生産（せいさん）：sản xuất； 工場（こうじょう）：nhà máy； 部品（ぶひん）：linh kiện, bộ phận"
  }
  ],
  ctx: [
  {
    "s": "子ども が 遅く 帰らない ので、母 は とても （　）して います。",
    "a": "しんぱい",
    "w": ["あんしん", "まんぞく", "よろこび"],
    "exp": "Con về muộn nên mẹ rất 心配（lo lắng）しています。安心（an tâm）ngược nghĩa、満足（hài lòng）không hợp ngữ cảnh、喜び（niềm vui）cũng không hợp nên sai。",
    "voc": "心配（しんぱい）：lo lắng； 安心（あんしん）：an tâm； 満足（まんぞく）：hài lòng； 喜び（よろこび）：niềm vui"
  },
  {
    "s": "大勢 の 人 の 前 で 話す とき は、いつも （　）します。",
    "a": "きんちょう",
    "w": ["あんしん", "まんぞく", "よろこび"],
    "exp": "Nói trước đông người nên lúc nào cũng 緊張（căng thẳng, hồi hộp）します。安心（an tâm）ngược nghĩa、満足（hài lòng）không hợp、喜び（niềm vui）không hợp ngữ cảnh nên sai。",
    "voc": "緊張（きんちょう）：căng thẳng, hồi hộp； 大勢（おおぜい）：đông người； 安心（あんしん）：an tâm"
  },
  {
    "s": "新しい 仕事 に （　）して、自分の 力を 試して みたい です。",
    "a": "ちょうせん",
    "w": ["けんきゅう", "りかい", "せつめい"],
    "exp": "Muốn 挑戦（thử thách, đương đầu）với công việc mới để thử sức mình。研究（nghiên cứu）không đi với に trong nghĩa này、理解（hiểu）không hợp、説明（giải thích）không hợp nên sai。",
    "voc": "挑戦（ちょうせん）：thử thách, đương đầu； 試す（ためす）：thử； 研究（けんきゅう）：nghiên cứu； 理解（りかい）：hiểu"
  },
  {
    "s": "長い 間 の 努力 の おかげ で、計画 は （　）しました。",
    "a": "せいこう",
    "w": ["しっぱい", "ちゅうし", "えんき"],
    "exp": "Nhờ nỗ lực lâu dài nên kế hoạch đã 成功（thành công）しました。失敗（thất bại）ngược nghĩa với おかげで、中止（hủy bỏ）và 延期（hoãn lại）đều trái với ý 'nhờ nỗ lực mà đạt kết quả tốt' nên sai。",
    "voc": "成功（せいこう）：thành công； 努力（どりょく）：nỗ lực； 失敗（しっぱい）：thất bại； 中止（ちゅうし）：hủy bỏ； 延期（えんき）：hoãn lại"
  },
  {
    "s": "先生 の 説明 を 聞いて、やっと 問題 の 意味 が （　）できました。",
    "a": "りかい",
    "w": ["はんたい", "きょうりょく", "りよう"],
    "exp": "Nghe thầy giải thích rồi cuối cùng đã 理解（hiểu）được ý nghĩa của bài。反対（phản đối）không đi với 意味ができる、協力（hợp tác）và 利用（sử dụng）đều không thể làm chủ ngữ của 意味ができる nên sai。",
    "voc": "理解（りかい）：hiểu, lý giải； 説明（せつめい）：giải thích； 意味（いみ）：ý nghĩa； やっと：cuối cùng, mãi mới"
  },
  {
    "s": "海外 で 働いた （　）が ある ので、外国人 と の 仕事 に なれて います。",
    "a": "けいけん",
    "w": ["よてい", "きぼう", "しゅみ"],
    "exp": "Vì có 経験（kinh nghiệm）làm việc ở nước ngoài nên đã quen làm việc với người nước ngoài。予定（dự định）không đi với 働いた trong nghĩa này、希望（mong muốn）và しゅみ（sở thích）đều không hợp với 'đã từng làm việc ở nước ngoài' nên sai。",
    "voc": "経験（けいけん）：kinh nghiệm； 海外（かいがい）：nước ngoài； なれる：quen, thích nghi； 予定（よてい）：dự định"
  },
  {
    "s": "新しい 技術 の （　）に よって、仕事 が ずっと 楽に なりました。",
    "a": "はったつ",
    "w": ["しゅうしゅう", "げんいん", "けっか"],
    "exp": "Nhờ sự 発達（phát triển）của công nghệ mới mà công việc trở nên dễ dàng hơn nhiều。収集（thu thập）không hợp với 技術の、原因（nguyên nhân）không thể là chủ thể làm công việc dễ dàng hơn、結果（kết quả）cũng không hợp nên sai。",
    "voc": "発達（はったつ）：phát triển； 技術（ぎじゅつ）：kĩ thuật, công nghệ； 楽（らく）：nhẹ nhàng, dễ dàng； 原因（げんいん）：nguyên nhân"
  }
  ],
  syn: [
  {
    "s": "この 写真 は 私 にとって とても たいせつ な 宝物 です。",
    "t": "たいせつ",
    "a": "きちょう",
    "w": ["ふよう", "むだ", "つまらない"],
    "exp": "たいせつ（quý giá, quan trọng）gần nghĩa nhất với きちょう（quý hiếm, quý giá）。ふよう（không cần）ngược nghĩa、むだ（lãng phí）không hợp、つまらない（chán）không hợp nên sai。",
    "voc": "大切（たいせつ）：quý giá, quan trọng； きちょう：quý giá, quý hiếm； 宝物（たからもの）：báu vật； 不要（ふよう）：không cần"
  },
  {
    "s": "あたらしい パソコン を 買いました。",
    "t": "あたらしい",
    "a": "しんぴん",
    "w": ["ちゅうこ", "ふるい", "つかれた"],
    "exp": "あたらしい（mới）gần nghĩa nhất với しんぴん（hàng mới, chưa qua sử dụng）。ちゅうこ（đồ cũ）ngược nghĩa、ふるい（cũ）ngược nghĩa、つかれた（mệt）không liên quan nên sai。",
    "voc": "新しい（あたらしい）：mới； 新品（しんぴん）：hàng mới； 中古（ちゅうこ）：đồ cũ； 古い（ふるい）：cũ"
  },
  {
    "s": "会議 を はじめる 前 に、資料 を 配りました。",
    "t": "はじめる",
    "a": "かいしする",
    "w": ["おわる", "つづける", "やめる"],
    "exp": "はじめる（bắt đầu）gần nghĩa nhất với かいしする（開始する：bắt đầu）。おわる（kết thúc）ngược nghĩa、つづける（tiếp tục）không phải bắt đầu、やめる（dừng）không hợp nên sai。",
    "voc": "始める（はじめる）：bắt đầu； 開始（かいし）：bắt đầu； 会議（かいぎ）：cuộc họp； 資料（しりょう）：tài liệu"
  },
  {
    "s": "映画 が おわる の は、夜 の 十時 です。",
    "t": "おわる",
    "a": "しゅうりょうする",
    "w": ["はじまる", "つづく", "やすむ"],
    "exp": "おわる（kết thúc）gần nghĩa nhất với しゅうりょうする（終了する：kết thúc）。はじまる（bắt đầu）ngược nghĩa、つづく（tiếp tục）không phải kết thúc、やすむ（nghỉ）không hợp nên sai。",
    "voc": "終わる（おわる）：kết thúc； 終了（しゅうりょう）：kết thúc； 映画（えいが）：phim； 夜（よる）：buổi tối"
  },
  {
    "s": "友だち に 荷物 を 運ぶ の を たのむ こと に しました。",
    "t": "たのむ",
    "a": "いらいする",
    "w": ["ことわる", "たすける", "きく"],
    "exp": "たのむ（nhờ vả）gần nghĩa nhất với いらいする（依頼する：nhờ, yêu cầu）。ことわる（từ chối）ngược nghĩa、たすける（giúp đỡ）là hành động ngược lại、きく（nghe, hỏi）không hợp nên sai。",
    "voc": "頼む（たのむ）：nhờ vả； 依頼（いらい）：nhờ, yêu cầu； 荷物（にもつ）：hành lý, đồ đạc； 助ける（たすける）：giúp đỡ"
  }
  ],
  yoho: [
  {
    "t": "はく",
    "s": ["シャツ を はくと、歩きやすい です。", "帽子 を はくと、歩きやすい です。", "靴 を はくと、歩きやすい です。", "手袋 を はくと、歩きやすい です。"],
    "a": 2,
    "exp": "はく（đi, mang vào chân）dùng đúng với 靴（giày）。シャツ（áo sơ mi）は 着る、帽子（mũ）は かぶる、手袋（găng tay）は はめる nên 3 câu còn lại sai。",
    "voc": "はく：đi (giày, tất), mặc (quần)； 靴（くつ）：giày； シャツ：áo sơ mi； 帽子（ぼうし）：mũ； 手袋（てぶくろ）：găng tay"
  },
  {
    "t": "つける",
    "s": ["本 を つける ことが できます。", "服 を つける ことが できます。", "電気 を つける ことが できます。", "時間 を つける ことが できます。"],
    "a": 2,
    "exp": "つける（bật, mở）dùng đúng với 電気（bật điện）— 電気をつけることができます。 本（sách）không つける、服（quần áo）là 着る、時間 không つける nên 3 câu còn lại sai。",
    "voc": "つける：bật, gắn, đeo； 電気（でんき）：điện； 本（ほん）：sách； 服（ふく）：quần áo； 時間（じかん）：thời gian"
  },
  {
    "t": "かける",
    "s": ["本 を かける つもり です。", "電話 を かける つもり です。", "いす を かける つもり です。", "くつ を かける つもり です。"],
    "a": 1,
    "exp": "かける dùng đúng với 電話をかける（gọi điện thoại）— 電話をかけるつもりです。 本（sách）không かける、いす（ghế）không かける、くつ（giày）là はく nên 3 câu còn lại sai。",
    "voc": "かける：gọi (điện thoại), treo, khoác； 電話（でんわ）：điện thoại； 本（ほん）：sách； いす：ghế； くつ：giày"
  },
  {
    "t": "あける",
    "s": ["窓 を あける ことが できます。", "本 を あける ことが できます。", "電気 を あける ことが できます。", "服 を あける ことが できます。"],
    "a": 0,
    "exp": "あける（mở）dùng đúng với 窓（mở cửa sổ）— 窓をあけることができます。 本（sách）mở ra thì dùng ひらく chứ không dùng あける、電気（điện）là つける、服（quần áo）là ぬぐ nên 3 câu còn lại sai。",
    "voc": "あける：mở (cửa, cửa sổ)； 窓（まど）：cửa sổ； 本（ほん）：sách； 電気（でんき）：điện； 服（ふく）：quần áo"
  },
  {
    "t": "あらう",
    "s": ["本 を あらう ことが あります。", "時間 を あらう ことが あります。", "手 を あらう ことが あります。", "電気 を あらう ことが あります。"],
    "a": 2,
    "exp": "あらう（rửa）dùng đúng với 手（rửa tay）— 手をあらうことがあります。 本（sách）、時間、電気 đều không thể あらう nên 3 câu còn lại sai。",
    "voc": "あらう：rửa； 手（て）：tay； 本（ほん）：sách； 時間（じかん）：thời gian； 電気（でんき）：điện"
  }
  ],
  kotoba: [
  {
    "s": "会議 の 日 を （　）します。",
    "a": "へんこう",
    "w": ["へんか", "へんしん", "へんどう"],
    "exp": "Ngày họp thì 変更（thay đổi, dời lịch）する mới đúng。変化（thay đổi trạng thái）không dùng cho lịch họp、変身（biến hình）không hợp、変動（biến động）không dùng với 日を nên đều sai。",
    "voc": "変更（へんこう）：thay đổi, dời lịch； 会議（かいぎ）：cuộc họp； 変化（へんか）：thay đổi； 変動（へんどう）：biến động"
  },
  {
    "s": "この 計画 は、（　）な 方法 で 進めて います。",
    "a": "こうかてき",
    "w": ["こうかせい", "こうかか", "こうかじょう"],
    "exp": "Phương pháp mang tính hiệu quả thì dùng 効果的（hiệu quả）な方法。効果性、効果化、効果上 đều không phải dạng tính từ な đứng trước 方法 nên sai。",
    "voc": "効果的（こうかてき）：hiệu quả, có hiệu quả； 計画（けいかく）：kế hoạch； 方法（ほうほう）：phương pháp"
  },
  {
    "s": "夏祭り で、きれいな （　）を 見ました。",
    "a": "はなび",
    "w": ["はなひ", "はなぴ", "はなみ"],
    "exp": "Pháo hoa là 花火（はなび）— 花＋火 đọc thành はなび do hiện tượng rendaku (ひ→び）。はなひ không có rendaku nên sai、はなぴ sai âm、はなみ là 花見（ngắm hoa anh đào mùa xuân）không hợp với 夏祭り nên sai。",
    "voc": "花火（はなび）：pháo hoa； 夏祭り（なつまつり）：lễ hội mùa hè； 花見（はなみ）：ngắm hoa anh đào"
  },
  {
    "s": "お客様 の （　）を お聞き して、部屋 を ご用意 します。",
    "a": "ごようけん",
    "w": ["おようけん", "ごようき", "ごようけ"],
    "exp": "Hỏi việc cần của khách thì dùng ご用件（ごようけん）— tiền tố kính ngữ ご＋用件。お用件 dùng お sai tiền tố、ご用気 và ご用け đều không phải từ có thật nên sai。",
    "voc": "用件（ようけん）：việc cần, công việc； お客様（おきゃくさま）：khách hàng； 用意（ようい）：chuẩn bị"
  },
  {
    "s": "会社 の 仕事 が （　）されて、家 で も できる ように なりました。",
    "a": "デジタルか",
    "w": ["デジタルせい", "デジタルてき", "デジタルじょう"],
    "exp": "Công việc được số hóa thì dùng デジタル化（số hóa）される。デジタル性、デジタル的、デジタル上 đều không tạo thành động từ bị động される với nghĩa 'được số hóa' nên sai。",
    "voc": "デジタル化（デジタルか）：số hóa； 会社（かいしゃ）：công ty； 仕事（しごと）：công việc"
  }
  ],
  g1dlg: [
  {
    "d": ["田中さん は、日本語 が 上手 です ね。", "上手（　）、まだ 勉強中 です。"],
    "a": "といっても",
    "w": ["どころか", "だけに", "からこそ"],
    "p": "〜といっても",
    "exp": "Dù nói là giỏi nhưng vẫn đang học: 'dù nói là... nhưng' dùng 〜といっても。どころか（trái lại, còn lâu mới）không hợp、だけに（chính vì）không hợp、からこそ（chính vì）không hợp ngữ cảnh này。",
    "voc": "上手（じょうず）：giỏi； 勉強中（べんきょうちゅう）：đang học； といっても：dù nói là... nhưng"
  },
  {
    "d": ["その 調査 は、どの くらい 続きました か。", "三年（　）続いた 調査 でした。"],
    "a": "にわたって",
    "w": ["に際して", "にあたって", "に先立って"],
    "p": "〜にわたって",
    "exp": "Cuộc điều tra kéo dài suốt 3 năm: 'trong suốt, kéo dài' dùng 〜にわたって。に際して（nhân dịp）không chỉ khoảng thời gian、にあたって（khi, nhân dịp）không hợp、に先立って（trước khi）không hợp nên sai。",
    "voc": "調査（ちょうさ）：điều tra； 三年（さんねん）：3 năm； 続く（つづく）：tiếp tục, kéo dài"
  },
  {
    "d": ["この 書類 を、今日 中 に 出せます か。", "すみません、今日 中 は 提出（　）です。"],
    "a": "しかねます",
    "w": ["しかける", "してしまう", "しておく"],
    "p": "V-ます + かねる",
    "exp": "Không thể nộp trong hôm nay nên xin lỗi: 'khó mà làm được, không thể làm được' dùng V-ます＋かねる（提出しかねます）。しかける（bắt đầu làm）không hợp、してしまう（lỡ làm mất rồi）không hợp、しておく（làm trước）đi với です sai ngữ pháp nên sai。",
    "voc": "提出（ていしゅつ）：nộp； 書類（しょるい）：giấy tờ, hồ sơ； 今日中（きょうじゅう）：trong hôm nay"
  }
  ],
  g1: [
  {
    "s": "新商品 の 発表（　）、社長 が あいさつ しました。",
    "a": "に先立って",
    "w": ["に比べて", "をめぐって", "に沿って"],
    "p": "〜に先立って",
    "exp": "Trước buổi công bố sản phẩm mới, giám đốc đã phát biểu chào mừng: 'trước khi...' dùng 〜に先立って。に比べて（so với）không hợp、をめぐって（xoay quanh vấn đề）không hợp với あいさつしました、に沿って（theo, dọc theo）không hợp nên sai。",
    "voc": "発表（はっぴょう）：công bố, phát biểu； 新商品（しんしょうひん）：sản phẩm mới； あいさつ：chào hỏi, phát biểu"
  },
  {
    "s": "日本 の 映画 を 見た（　）、日本語 を 勉強し 始めました。",
    "a": "をきっかけに",
    "w": ["て以来", "がてら", "かたわら"],
    "p": "〜をきっかけに",
    "exp": "Nhân dịp xem phim Nhật mà bắt đầu học tiếng Nhật: 'lấy làm cơ hội, nhân dịp' dùng 〜をきっかけに。て以来 cần V-て nên 見たて以来 sai ngữ pháp、がてら（tiện thể）không hợp、かたわら（bên cạnh việc）không hợp nên sai。",
    "voc": "きっかけ：cơ hội, dịp； 映画（えいが）：phim； 勉強（べんきょう）：học tập"
  },
  {
    "s": "収入（　）、生活 の 仕方 を 変える 必要 が あります。",
    "a": "に応じて",
    "w": ["にわたって", "をもって", "につき"],
    "p": "〜に応じて",
    "exp": "Tùy theo thu nhập mà cần thay đổi cách sống: 'tùy theo, ứng với' dùng 〜に応じて。にわたって（trong suốt）không hợp、をもって（bằng, với）không hợp、につき（mỗi, cho mỗi）không hợp nên sai。",
    "voc": "収入（しゅうにゅう）：thu nhập； 生活（せいかつ）：cuộc sống； 必要（ひつよう）：cần thiết"
  },
  {
    "s": "天気 （　）、毎日 走って います。",
    "a": "にかかわらず",
    "w": ["だけに", "ばかりに", "どころか"],
    "p": "〜にかかわらず",
    "exp": "Bất kể thời tiết thế nào, ngày nào tôi cũng chạy bộ: 'bất kể, không phân biệt' dùng 〜にかかわらず。だけに（chính vì）không hợp、ばかりに（chỉ vì）dùng cho nguyên nhân gây kết quả xấu nên không hợp、どころか（trái lại）không hợp nên sai。",
    "voc": "天気（てんき）：thời tiết； 走る（はしる）：chạy bộ； にかかわらず：bất kể, không phân biệt； だけに：chính vì； ばかりに：chỉ vì"
  },
  {
    "s": "有名な レストラン（　）、料理 は とても おいしかった です。",
    "a": "だけあって",
    "w": ["ばかりに", "からこそ", "どころか"],
    "p": "〜だけあって",
    "exp": "Đúng là nhà hàng nổi tiếng nên món ăn rất ngon: 'quả đúng là... nên' dùng 〜だけあって。ばかりに（chỉ vì）dùng cho kết quả xấu nên không hợp với おいしかった、からこそ（chính vì）không đi sau danh từ trong cấu trúc này、どころか（trái lại）không hợp nên sai。",
    "voc": "有名（ゆうめい）：nổi tiếng； 料理（りょうり）：món ăn； おいしい：ngon"
  },
  {
    "s": "長い 時間 かけて 考えた（　）、この 仕事 を やめる こと に しました。",
    "a": "末に",
    "w": ["とあって", "にしては", "からすれば"],
    "p": "V-た 末に",
    "exp": "Sau khi suy nghĩ rất lâu, cuối cùng đã quyết định nghỉ việc: 'sau một quá trình dài, cuối cùng' dùng V-た末に。とあって（vì, do）không hợp、にしては（so với）không hợp、からすれば（xét từ góc độ）không hợp nên sai。",
    "voc": "考える（かんがえる）：suy nghĩ； やめる：nghỉ, bỏ； 決める（きめる）：quyết định"
  },
  {
    "s": "私 の 日本語 は、日常 会話 が できる（　）、仕事 で 使う には まだ 足りません。",
    "a": "にすぎず",
    "w": ["どころか", "だけに", "からこそ"],
    "p": "〜にすぎない",
    "exp": "Tiếng Nhật của tôi chỉ mới ở mức nói chuyện hằng ngày được thôi: 'chỉ là... mà thôi' dùng 〜にすぎない（dạng ず nối câu）。どころか（còn lâu mới, trái lại）làm nghĩa ngược lại、だけに（chính vì）không hợp、からこそ（chính vì）không hợp nên sai。",
    "voc": "日常会話（にちじょうかいわ）：hội thoại hằng ngày； 足りる（たりる）：đủ； 仕事（しごと）：công việc"
  },
  {
    "s": "給料（　）、まず 仕事 の 内容 を よく 調べて ください。",
    "a": "はともかく",
    "w": ["なんて", "にすぎない", "に他ならない"],
    "p": "〜はともかく",
    "exp": "Chuyện lương thì để sang một bên, trước hết hãy tìm hiểu kĩ nội dung công việc: 'tạm gác chuyện... sang một bên' dùng 〜はともかく。なんて（nào là）không hợp、にすぎない（chỉ là）không đi sau 給料 trong nghĩa này、に他ならない（chẳng qua là）không hợp nên sai。",
    "voc": "給料（きゅうりょう）：lương； 内容（ないよう）：nội dung； 調べる（しらべる）：tìm hiểu, điều tra"
  },
  {
    "s": "会議 の 結果 は、来週 の 報告（　）です。",
    "a": "次第です",
    "w": ["にかかわる", "をもって", "につき"],
    "p": "N + 次第だ",
    "exp": "Kết quả cuộc họp tùy thuộc vào báo cáo tuần sau: 'tùy thuộc vào...' dùng N＋次第だ。にかかわる（liên quan）đi với です sai ngữ pháp、をもって（bằng, với）không hợp、につき（mỗi, cho mỗi）không hợp nên sai。",
    "voc": "会議（かいぎ）：cuộc họp； 結果（けっか）：kết quả； 報告（ほうこく）：báo cáo； 次第（しだい）：tùy thuộc"
  }
  ],
  star: [
  {
    "pre": "",
    "post": "。",
    "chunks": ["会議", "に先立って", "資料を", "配りました"],
    "p": "〜に先立って",
    "exp": "Thứ tự đúng: 会議に先立って（trước cuộc họp）+ 資料を配りました（đã phát tài liệu）。に先立って phải đứng ngay sau danh từ chỉ sự kiện 会議、資料を là tân ngữ của 配りました nên phải đứng trước động từ cuối câu。",
    "voc": "会議（かいぎ）：cuộc họp； 資料（しりょう）：tài liệu； 配る（くばる）：phát, phân phát"
  },
  {
    "pre": "",
    "post": "。",
    "chunks": ["子どもの年齢が", "上がるにしたがって", "料金が", "高くなります"],
    "p": "〜にしたがって",
    "exp": "Thứ tự đúng: 子どもの年齢が上がるにしたがって（càng lớn tuổi thì… càng）+ 料金が高くなります（giá càng cao）。にしたがって phải đứng ngay sau mệnh đề 子どもの年齢が上がる、料金が là chủ ngữ của 高くなります nên phải đứng trước động từ cuối câu。Chỉ có một thứ tự tự nhiên: đưa 料金が lên trước sẽ thành hai が liên tiếp (料金が…年齢が…) nên không tự nhiên。",
    "voc": "年齢（ねんれい）：độ tuổi； 料金（りょうきん）：giá, lệ phí； 上がる（あがる）：tăng lên； 高い（たかい）：cao； 子ども：trẻ em； にしたがって：càng… càng, theo…"
  },
  {
    "pre": "",
    "post": "。",
    "chunks": ["留学", "をきっかけに", "日本語の", "勉強を始めました"],
    "p": "〜をきっかけに",
    "exp": "Thứ tự đúng: 留学をきっかけに（nhân dịp du học）+ 日本語の勉強を始めました（đã bắt đầu học tiếng Nhật）。をきっかけに phải đứng ngay sau danh từ 留学、日本語の bổ nghĩa cho 勉強 nên phải đứng trước 勉強を始めました。",
    "voc": "留学（りゅうがく）：du học； 日本語（にほんご）：tiếng Nhật； 勉強（べんきょう）：học tập"
  },
  {
    "pre": "",
    "post": "。",
    "chunks": ["熱がある", "にもかかわらず", "会社に", "行きました"],
    "p": "〜にもかかわらず",
    "exp": "Thứ tự đúng: 熱があるにもかかわらず（mặc dù bị sốt）+ 会社に行きました（đã đi làm）。にもかかわらず phải đứng ngay sau mệnh đề 熱がある、会社に là nơi đến của 行きました nên phải đứng trước động từ cuối câu。",
    "voc": "熱（ねつ）：sốt； 会社（かいしゃ）：công ty； 行く（いく）：đi"
  },
  {
    "pre": "",
    "post": "。",
    "chunks": ["これは", "私の意見", "にすぎない", "のですが"],
    "p": "〜にすぎない",
    "exp": "Thứ tự đúng: これは（đây là）+ 私の意見にすぎない（chỉ là ý kiến của tôi thôi）+ のですが（nhưng mà）。にすぎない phải đứng ngay sau danh từ 私の意見、のですが là phần kết nối sang câu sau nên đứng cuối。",
    "voc": "意見（いけん）：ý kiến； 私（わたし）：tôi； にすぎない：chỉ là... mà thôi"
  }
  ],
  bunsho: [
  {
    "intro": "つぎの 文章 を 読んで、（　1　）〜（　5　）に 入る ことば を 選んで ください。",
    "p": "最近、会社ではリモートワークが広がっています。（　1　）出社しなくても仕事ができるので、通勤の時間が減りました。（　2　）家で働くと、集中できない人もいます。たとえば、子どもがいる家庭では、静かな場所を作るのが難しいのです。（　3　）会社は、自宅での仕事を助けるために、パソコンや机を貸し出すようになりました。（　4　）リモートワークは便利ですが、社員が顔を合わせる機会が減りました。（　5　）会社と社員は、お互いに話し合いながら、自分に合った働き方を選ぶことが大切です。",
    "b": [
      { "a": "そのため", "w": ["しかし", "一方で", "つまり"] },
      { "a": "しかし", "w": ["そのため", "たとえば", "そして"] },
      { "a": "そこで", "w": ["しかし", "つまり", "一方で"] },
      { "a": "一方で", "w": ["そのため", "つまり", "たとえば"] },
      { "a": "要するに", "w": ["しかし", "そのため", "たとえば"] }
    ],
    "exp": "(1) そのため：vì làm việc từ xa nên thời gian đi lại giảm — chỉ kết quả, そのため đúng; しかし (tuy nhiên) ngược nghĩa, 一方で (mặt khác) không hợp, つまり (nói cách khác) không hợp. (2) しかし：chuyển sang mặt trái — làm việc ở nhà thì có người không tập trung được; そのため sai, たとえば sai vì câu này không phải ví dụ của câu trước, そして sai. (3) そこで：vì thế công ty cho mượn máy tính — そこで đúng; しかし, つまり, 一方で đều không hợp. (4) 一方で：mặt khác, cơ hội gặp mặt giảm — 一方で đúng; そのため, つまり, たとえば đều không hợp. (5) 要するに：tóm lại, công ty và nhân viên cần chọn cách làm việc phù hợp — 要するに đúng; しかし, そのため, たとえば đều không hợp.",
    "voc": "リモートワーク：làm việc từ xa； 通勤（つうきん）：đi làm (di chuyển)； 集中（しゅうちゅう）：tập trung； 貸し出す（かしだす）：cho mượn； 社員（しゃいん）：nhân viên； お互い（おたがい）：lẫn nhau"
  }
  ],
  readS: [
  {
    "p": "わたし は 毎週 水曜日 に、ジム へ 行って います。ジム で は、はじめ に 三十分 走ります。その 後、筋肉 の トレーニング を します。汗 を たくさん かきます が、体 が 軽く なります。ジム の 帰り に、よく 友だち と お茶 を 飲みます。来月 から は、ヨガ の 教室 に も 行って みたい です。",
    "q": "わたし は ジム で 何 を して います か。",
    "o": ["三十分 走って から、筋肉 の トレーニング を します。", "泳いで から、サウナ に 入ります。", "テニス を して から、食事 を します。", "ダンス を して から、買い物 を します。"],
    "a": 0,
    "e": "Ở phòng gym chạy 30 phút rồi tập cơ.",
    "exp": "Bằng chứng trong bài: 「はじめに三十分走ります。その後、筋肉のトレーニングをします」(đầu tiên chạy 30 phút, sau đó tập cơ). Bơi rồi vào sauna, chơi tennis rồi ăn, nhảy rồi mua sắm đều không có trong bài nên sai。",
    "voc": "ジム：phòng gym； 走る（はしる）：chạy； 筋肉（きんにく）：cơ bắp； トレーニング：tập luyện； 汗（あせ）：mồ hôi"
  },
  {
    "p": "来週、家族で京都へ電車で行きます。大人は1,200円、子どもは600円です。わたしたちは大人2人と子ども2人です。京都では、寺を3つ見ます。昼ごはんは1人800円です。",
    "q": "電車の切符は、ぜんぶでいくらですか。",
    "o": ["3,600円です。", "3,000円です。", "2,400円です。", "1,800円です。"],
    "a": 0,
    "calc": 1,
    "e": "文に「大人は1,200円、子どもは600円」「大人2人と子ども2人」とあります。1200×2+600×2=3600円です。",
    "exp": "Tính tổng tiền vé tàu: người lớn 1,200円 × 2 người = 2,400円, trẻ em 600円 × 2 người = 1,200円, tổng 3,600円. 3,000円 là 1,200×2+600 (tính thiếu một trẻ em), 2,400円 chỉ tính người lớn, 1,800円 là 1,200+600 (mỗi loại một người) nên sai. Bằng chứng: 「大人は1,200円、子どもは600円」「大人2人と子ども2人」。",
    "voc": "切符（きっぷ）：vé； 京都（きょうと）：Kyoto； 寺（てら）：chùa； 昼ごはん（ひるごはん）：bữa trưa； ぜんぶ：tất cả"
  },
  {
    "p": "山田さんは毎週土曜日に図書館へ行きます。図書館では、本を3冊借ります。本は2週間借りることができます。先週は、料理の本を2冊と、旅行の本を1冊借りました。今週は、仕事の本を借りたいと思っています。",
    "q": "山田さんは先週、何の本を何冊借りましたか。",
    "o": ["料理の本を2冊と、旅行の本を1冊借りました。", "旅行の本を2冊と、料理の本を1冊借りました。", "仕事の本を3冊借りました。", "料理の本を3冊借りました。"],
    "a": 0,
    "e": "文に「先週は、料理の本を2冊と、旅行の本を1冊借りました」とあります。",
    "exp": "Bằng chứng: 「先週は、料理の本を2冊と、旅行の本を1冊借りました」(tuần trước mượn 2 cuốn sách nấu ăn và 1 cuốn sách du lịch). Đáp án đổi số lượng ngược lại là sai, sách về công việc là dự định tuần này chứ không phải tuần trước, 3 cuốn sách nấu ăn là sai số lượng。",
    "voc": "図書館（としょかん）：thư viện； 借りる（かりる）：mượn； 料理（りょうり）：nấu ăn； 旅行（りょこう）：du lịch"
  },
  {
    "p": "明日は雨が降るそうです。木村さんは、友だちと山へ行く予定でしたが、雨が降るので、家で映画を見ることにしました。映画は、午後2時から始まります。木村さんは、午前中に買い物をして、昼ごはんを作る予定です。",
    "q": "木村さんは明日、何をしますか。",
    "o": ["山へ行きます。", "家で映画を見ます。", "友だちの家へ行きます。", "買い物へ行きません。"],
    "a": 1,
    "e": "文に「雨が降るので、家で映画を見ることにしました」とあります。",
    "exp": "Bằng chứng: 「雨が降るので、家で映画を見ることにしました」(vì trời mưa nên quyết định ở nhà xem phim). Đi núi là kế hoạch ban đầu đã hủy, đến nhà bạn và không đi mua sắm đều không có trong bài nên sai。",
    "voc": "雨（あめ）：mưa； 予定（よてい）：dự định； 映画（えいが）：phim； 午前中（ごぜんちゅう）：buổi sáng"
  },
  {
    "p": "田中さんは、毎週2回プールへ行って泳ぐようにしています。泳ぐ前には、必ず水を飲みます。先月から、体重が2キロ減りました。医者は「これからも、泳ぐことを続けてください」と言いました。田中さんは、来月も泳ぐ予定です。",
    "q": "田中さんは、先月からどうなりましたか。",
    "o": ["体重が2キロ減りました。", "体重が2キロ増えました。", "泳ぐのをやめました。", "水を飲まなくなりました。"],
    "a": 0,
    "e": "文に「先月から、体重が2キロ減りました」とあります。",
    "exp": "Bằng chứng: 「先月から、体重が2キロ減りました」(từ tháng trước cân nặng đã giảm 2 kg). Tăng 2 kg là ngược lại, ngừng bơi trái với bài (bác sĩ dặn anh ấy tiếp tục bơi, tháng sau anh ấy vẫn bơi), không uống nước nữa cũng trái với bài (trước khi bơi anh ấy luôn uống nước) nên sai。",
    "voc": "体重（たいじゅう）：cân nặng； 減る（へる）：giảm； 増える（ふえる）：tăng； 医者（いしゃ）：bác sĩ； 続ける（つづける）：tiếp tục； 泳ぐ（およぐ）：bơi； プール：hồ bơi； 水（みず）：nước"
  }
  ],
  readM: [
  {
    "p": "先月、佐藤さんは新しいアパートに引っ越しました。子どもが生まれて、古いアパートはせまくなったからです。古いアパートは2DKでしたが、新しいアパートは3LDKで、部屋が広いです。新しいアパートは駅から歩いて20分ですが、近くに公園とスーパーがあります。スーパーは歩いて5分です。家賃は今より1万円高いですが、佐藤さんは「子どもがのびのびと遊べるから、よかったです」と言っています。引っ越しの日は、佐藤さんの弟が手伝いに来てくれました。荷物が多かったので、朝8時から夕方5時までかかりました。新しい部屋は、前の部屋より大きいです。窓も大きくて明るいです。佐藤さんは、部屋に本棚と机を置きました。週末には、家族で近くの公園へ遊びに行きます。来月、佐藤さんの両親が遊びに来る予定です。佐藤さんは「新しい生活が楽しみです」と言っています。",
    "qs": [
      { "q": "新しいアパートからスーパーまで、歩いて何分ですか。", "o": ["歩いて5分です。", "歩いて10分です。", "歩いて30分です。", "歩いて15分です。"], "a": 0, "e": "文に「スーパーは歩いて5分です」とあります。" },
      { "q": "引っ越しの日は、何時までかかりましたか。", "o": ["朝8時までです。", "昼12時までです。", "夕方5時までです。", "夜8時までです。"], "a": 2, "e": "文に「朝8時から夕方5時までかかりました」とあります。" },
      { "q": "来月、だれが遊びに来る予定ですか。", "o": ["佐藤さんの友だちです。", "佐藤さんの両親です。", "佐藤さんの先生です。", "佐藤さんの上司です。"], "a": 1, "e": "文に「来月、佐藤さんの両親が遊びに来る予定です」とあります。" }
    ],
    "exp": "Q1: bằng chứng 「スーパーは歩いて5分です」nên 5 phút đúng; 10/15/30 phút không có trong bài. Q2: bằng chứng 「朝8時から夕方5時までかかりました」nên đến 5 giờ chiều đúng; 8 giờ sáng là lúc bắt đầu, 12 giờ trưa và 8 giờ tối không có trong bài. Q3: bằng chứng 「来月、佐藤さんの両親が遊びに来る予定です」nên bố mẹ đúng; bạn bè, thầy giáo và cấp trên không có trong bài。",
    "voc": "引っ越し（ひっこし）：chuyển nhà； アパート：căn hộ； 子ども：trẻ em； 生まれる（うまれる）：được sinh ra； 広い（ひろい）：rộng； 公園（こうえん）：công viên； 家賃（やちん）：tiền thuê nhà； 荷物（にもつ）：hành lý, đồ đạc； 大きい（おおきい）：lớn； 両親（りょうしん）：bố mẹ"
  },
  {
    "p": "中村さんは、今年の4月から料理教室に通っています。教室は毎週水曜日の夜7時から9時までです。先生は、プロの料理人で、毎回新しい料理を教えてくれます。先週は、魚の料理を習いました。魚を切るのが難しかったですが、先生がていねいに教えてくれたので、最後にはおいしくできました。中村さんは、家でも習った料理を作っています。家族は「おいしい」と言って、喜んで食べています。来月は、パンの作り方を習う予定です。中村さんは「いつか、自分の店を開きたいです」と言っています。料理教室の学費は、1か月8,000円です。中村さんは、仕事の帰りに教室へ行くので、毎日忙しいですが、楽しいと言っています。",
    "qs": [
      { "q": "料理教室は、いつありますか。", "o": ["毎週月曜日の夜です。", "毎週水曜日の夜です。", "毎週金曜日の夜です。", "毎週土曜日の夜です。"], "a": 1, "e": "文に「教室は毎週水曜日の夜7時から9時までです」とあります。" },
      { "q": "先週、中村さんは何を習いましたか。", "o": ["パンの作り方です。", "肉の料理です。", "魚の料理です。", "野菜の料理です。"], "a": 2, "e": "文に「先週は、魚の料理を習いました」とあります。" },
      { "q": "料理教室の学費は、1か月いくらですか。", "o": ["5,000円です。", "6,000円です。", "7,000円です。", "8,000円です。"], "a": 3, "e": "文に「料理教室の学費は、1か月8,000円です」とあります。" }
    ],
    "exp": "Q1: bằng chứng 「教室は毎週水曜日の夜7時から9時までです」nên tối thứ Tư đúng; thứ Hai, thứ Sáu, thứ Bảy đều không có trong bài. Q2: bằng chứng 「先週は、魚の料理を習いました」nên món cá đúng; làm bánh mì là dự định tháng sau, món thịt và món rau không có trong bài. Q3: bằng chứng 「料理教室の学費は、1か月8,000円です」nên 8,000 yên đúng; 5,000, 6,000, 7,000 yên đều sai.",
    "voc": "料理教室（りょうりきょうしつ）：lớp học nấu ăn； 通う（かよう）：đi học thường xuyên； 料理人（りょうりにん）：đầu bếp； 習う（ならう）：học； 学費（がくひ）：học phí； ていねいに：cẩn thận, kĩ lưỡng"
  },
  {
    "p": "高橋さんは、毎月1回、近くの老人ホームでボランティアをしています。ホームには、80人ぐらいのお年寄りが住んでいます。高橋さんは、お年寄りと話をしたり、一緒に歌を歌ったりします。先月は、秋の歌をみんなで歌いました。お年寄りは、若いころの話をよくしてくれます。高橋さんは、その話を聞くのが楽しみです。ボランティアは、午前10時から12時までです。終わったあと、スタッフのみなさんと昼ごはんを食べます。来月は、クリスマスのカードを作る予定です。高橋さんは「これからも、続けていきたいです」と言っています。ボランティアを始めてから、高橋さんは人と話すことが好きになりました。",
    "qs": [
      { "q": "高橋さんは、どこでボランティアをしていますか。", "o": ["近くの老人ホームです。", "近くの学校です。", "近くの病院です。", "近くの図書館です。"], "a": 0, "e": "文に「近くの老人ホームでボランティアをしています」とあります。" },
      { "q": "ボランティアは、何時から何時までですか。", "o": ["午前9時から11時までです。", "午前10時から12時までです。", "午後1時から3時までです。", "午後2時から4時までです。"], "a": 1, "e": "文に「ボランティアは、午前10時から12時までです」とあります。" },
      { "q": "来月、高橋さんは何をする予定ですか。", "o": ["秋の歌を歌います。", "昼ごはんを食べます。", "クリスマスのカードを作ります。", "若いころの話を聞きます。"], "a": 2, "e": "文に「来月は、クリスマスのカードを作る予定です」とあります。" }
    ],
    "exp": "Q1: bằng chứng 「近くの老人ホームでボランティアをしています」nên viện dưỡng lão đúng; trường học, bệnh viện, thư viện đều không có trong bài. Q2: bằng chứng 「ボランティアは、午前10時から12時までです」nên 10 giờ–12 giờ đúng; các khung giờ khác đều sai. Q3: bằng chứng 「来月は、クリスマスのカードを作る予定です」nên làm thiệp Giáng sinh đúng; hát bài mùa thu là việc tháng trước, ăn trưa là việc sau mỗi buổi tình nguyện, nghe chuyện thời trẻ là niềm vui thường ngày chứ không phải dự định tháng sau.",
    "voc": "老人ホーム（ろうじんホーム）：viện dưỡng lão； ボランティア：tình nguyện viên； お年寄り（おとしより）：người cao tuổi； 歌（うた）：bài hát； スタッフ：nhân viên； 続ける（つづける）：tiếp tục"
  }
  ],
  tougou: [
  {
    "p1": "小学生にスマートフォンを持たせることに、私は反対です。スマートフォンがあると、子どもはゲームや動画ばかり見て、勉強しなくなります。先月、知り合いの子どもは、夜遅くまでゲームをしていて、学校で眠くなったそうです。また、知らない人とインターネットで話すのは、危険だと思います。子どもがスマートフォンを持つのは、まだ早いと思います。",
    "p2": "私は、小学生でもスマートフォンを持たせたほうがいいと思います。スマートフォンがあれば、子どもがどこにいるか、すぐに分かります。先週、私の子どもは、習い事の帰りに電車が止まって、困りましたが、スマートフォンで連絡ができたので、すぐに迎えに行くことができました。使う時間を決めれば、勉強の心配も少ないと思います。安全のために、持たせたほうがいいと思います。",
    "qs": [
      { "q": "AさんとBさんは、どちらも何について話していますか。", "o": ["小学生がスマートフォンを持つことです。", "小学生がゲームをすることです。", "小学生が電車に乗ることです。", "小学生が習い事をすることです。"], "a": 0, "e": "Aさんは「小学生にスマートフォンを持たせることに、私は反対です」、Bさんは「小学生でもスマートフォンを持たせたほうがいいと思います」とあります。" },
      { "q": "Bさんがスマートフォンを持たせたほうがいいと思う理由は、何ですか。", "o": ["ゲームをすることができるからです。", "子どもの場所がすぐに分かるからです。", "勉強が楽しくなるからです。", "動画を見ることができるからです。"], "a": 1, "e": "文に「スマートフォンがあれば、子どもがどこにいるか、すぐに分かります」とあります。" }
    ],
    "exp": "Q1: cả A và B đều bàn về việc học sinh tiểu học dùng điện thoại thông minh — A phản đối, B tán thành; chơi game, đi tàu điện, học thêm chỉ là ví dụ phụ trong bài. Q2: lí do của B là biết ngay con đang ở đâu — bằng chứng 「スマートフォンがあれば、子どもがどこにいるか、すぐに分かります」; chơi game và xem video là lí do A phản đối, học trở nên vui vẻ không có trong bài.",
    "voc": "反対（はんたい）：phản đối； 動画（どうが）：video； 危険（きけん）：nguy hiểm； 連絡（れんらく）：liên lạc； 迎える（むかえる）：đón； 安全（あんぜん）：an toàn"
  }
  ],
  shuchou: [
  {
    "p": "私は子どものころ、本を読むのがあまり好きではありませんでした。学校の図書館で本を借りても、最後まで読むことができませんでした。しかし、高校生のとき、友だちにすすめられて、一冊の小説を読みました。その本は、外国で働く若い女性の話でした。主人公は、言葉も分からない国で、毎日大変な思いをしながら、少しずつ仕事を覚えていきました。私は、その主人公の生き方に強く心を動かされました。それから、本を読むことが好きになりました。大学に入ってからは、毎週図書館へ行くようになりました。歴史の本や、科学の本、旅行の本など、いろいろな本を読みました。本を読むと、自分の知らない世界を知ることができます。また、ほかの人の考え方を知ることもできます。私は、本を通して、自分の考えが少しずつ広がっていくのを感じました。先月は、仕事についての本を読みました。その本には、チームで働くときに大切なことが書いてありました。私は、その本を読んで、自分の仕事のやり方を見直すことができました。本は、学校の勉強だけでなく、仕事にも役に立つと思います。今では、寝る前に三十分本を読むのが、私の楽しみです。忙しい日でも、この時間だけは大切にしています。本は、私にとって、静かな友だちのようなものです。これからも、いろいろな本を読み続けていきたいと思います。",
    "qs": [
      { "q": "筆者は、子どものころ、本についてどう思っていましたか。", "o": ["本を読むのが好きでした。", "本を読むのがあまり好きではありませんでした。", "本を読むのが得意でした。", "本を書くのが好きでした。"], "a": 1, "e": "文に「私は子どものころ、本を読むのがあまり好きではありませんでした」とあります。" },
      { "q": "筆者が本を好きになったきっかけは、何ですか。", "o": ["先生にすすめられたからです。", "友だちにすすめられて、小説を読んだからです。", "大学に入ったからです。", "図書館へ行ったからです。"], "a": 1, "e": "文に「高校生のとき、友だちにすすめられて、一冊の小説を読みました」「それから、本を読むことが好きになりました」とあります。" },
      { "q": "筆者は、今、本についてどう思っていますか。", "o": ["本は、静かな友だちのようなものだと思っています。", "本は、学校の勉強にしか役に立たないと思っています。", "本は、忙しい日には読まないほうがいいと思っています。", "本は、旅行のときにだけ読むものだと思っています。"], "a": 0, "e": "文に「本は、私にとって、静かな友だちのようなものです」とあります。" }
    ],
    "exp": "Q1: bằng chứng 「私は子どものころ、本を読むのがあまり好きではありませんでした」nên hồi nhỏ không thích đọc sách; thích đọc, giỏi đọc, thích viết đều trái với bài. Q2: bằng chứng 「高校生のとき、友だちにすすめられて、一冊の小説を読みました」「それから、本を読むことが好きになりました」nên bạn bè giới thiệu tiểu thuyết là bước ngoặt; thầy giáo không được nhắc đến, vào đại học và đến thư viện là chuyện sau đó. Q3: bằng chứng 「本は、私にとって、静かな友だちのようなものです」nên sách như người bạn lặng lẽ; chỉ có ích cho việc học ở trường là sai vì bài nói sách còn giúp ích cho công việc, không đọc vào ngày bận là sai vì tác giả trân trọng thời gian đọc dù bận, chỉ đọc khi đi du lịch là sai.",
    "voc": "筆者（ひっしゃ）：tác giả； 小説（しょうせつ）：tiểu thuyết； 主人公（しゅじんこう）：nhân vật chính； 歴史（れきし）：lịch sử； 科学（かがく）：khoa học； 見直す（みなおす）：xem lại, nhìn lại； 役に立つ（やくにたつ）：có ích"
  }
  ],
  info: [
  {
    "tpl": "<b>スポーツジムの教室</b><br>下の 表を 見てください。<br><table class=\"jl-tbl\"><tr><th>教室</th><th>曜日</th><th>時間</th><th>料金</th></tr><tr><td>ヨガ</td><td>月曜日と木曜日</td><td>10時〜11時</td><td>1回1,000円</td></tr><tr><td>水泳</td><td>火曜日と金曜日</td><td>14時〜15時</td><td>1回1,200円</td></tr><tr><td>ダンス</td><td>水曜日と土曜日</td><td>18時〜19時</td><td>1回1,500円</td></tr><tr><td>ピラティス</td><td>日曜日</td><td>9時〜10時</td><td>1回1,000円</td></tr></table><b>カレンダー（今月）</b><br><table class=\"jl-cal\"><tr><th>月</th><th>火</th><th>水</th><th>木</th><th>金</th><th>土</th><th>日</th></tr><tr><td></td><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td></tr><tr><td>7</td><td>8</td><td>9</td><td>10</td><td>11</td><td>12</td><td>13</td></tr><tr><td>14</td><td>15</td><td>16</td><td>17</td><td>18</td><td>19</td><td>20</td></tr></table>",
    "inst": "つぎのスポーツジムの教室の表とカレンダーを見て、質問に答えてください。答えは1・2・3・4から、いちばんいいものを一つえらんでください。",
    "q": "今日は 9日 (水曜日) です。ダンスの教室に早く行きたいです。何日に何時に行きますか。",
    "opts": ["9日に18時", "9日に14時", "12日に18時", "10日に18時"],
    "ans": 0,
    "exp": "Lớp nhảy (ダンス) học thứ Tư và thứ Bảy, 18 giờ–19 giờ. Hôm nay là thứ Tư ngày 9 nên đi ngay hôm nay lúc 18 giờ là sớm nhất. 14 giờ là giờ học bơi, ngày 12 (thứ Bảy) cũng có lớp nhảy nhưng muộn hơn hôm nay, ngày 10 là thứ Năm không có lớp nhảy nên sai。",
    "voc": "スポーツジム：phòng tập thể thao； 教室（きょうしつ）：lớp học； 水泳（すいえい）：bơi lội； ダンス：nhảy múa； 料金（りょうきん）：lệ phí"
  },
  {
    "tpl": "<b>料理教室の申し込み</b><br>下の 表を 見てください。<br><table class=\"jl-tbl\"><tr><th>クラス</th><th>曜日</th><th>時間</th><th>料金</th></tr><tr><td>和食</td><td>月曜日</td><td>10時〜12時</td><td>3,000円</td></tr><tr><td>洋食</td><td>水曜日</td><td>14時〜16時</td><td>3,500円</td></tr><tr><td>お菓子</td><td>金曜日</td><td>10時〜12時</td><td>2,500円</td></tr><tr><td>パン</td><td>土曜日</td><td>9時〜11時</td><td>2,000円</td></tr></table><b>カレンダー（今月）</b><br><table class=\"jl-cal\"><tr><th>月</th><th>火</th><th>水</th><th>木</th><th>金</th><th>土</th><th>日</th></tr><tr><td></td><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td></tr><tr><td>7</td><td>8</td><td>9</td><td>10</td><td>11</td><td>12</td><td>13</td></tr><tr><td>14</td><td>15</td><td>16</td><td>17</td><td>18</td><td>19</td><td>20</td></tr></table>",
    "inst": "つぎの料理教室の申し込みの表とカレンダーを見て、質問に答えてください。答えは1・2・3・4から、いちばんいいものを一つえらんでください。",
    "q": "今日は 4日 (金曜日) です。お菓子のクラスに行きたいです。何日に何時に行きますか。",
    "opts": ["4日に10時", "4日に14時", "11日に10時", "5日に10時"],
    "ans": 0,
    "exp": "Lớp làm bánh kẹo (お菓子) học thứ Sáu, 10 giờ–12 giờ. Hôm nay là thứ Sáu ngày 4 nên đi ngay hôm nay lúc 10 giờ là sớm nhất. 14 giờ là giờ học món Tây, ngày 11 (thứ Sáu tuần sau) cũng có lớp này nhưng muộn hơn hôm nay, ngày 5 là thứ Bảy học làm bánh mì lúc 9 giờ chứ không phải 10 giờ nên sai。",
    "voc": "料理教室（りょうりきょうしつ）：lớp học nấu ăn； 申し込み（もうしこみ）：đăng ký； 和食（わしょく）：món Nhật； 洋食（ようしょく）：món Tây； お菓子（おかし）：bánh kẹo"
  }
  ]
};

/* ----- Test 9 ----- */
window.WRITTEN_N2_SET9 = {
  yomi: [
  {
    "s": "日本 で 働く 機会 が 増えて います。",
    "t": "機会",
    "r": "きかい",
    "w": [
     "きがい",
     "かいき",
     "きか"
    ],
    "exp": "機会 đọc là きかい。きがい đọc sai âm của 機, かいき đảo thứ tự hai âm tiết, きか thiếu âm い ở cuối nên đều sai。",
    "voc": "機会（きかい）：cơ hội； 働く（はたらく）：làm việc； 増える（ふえる）：tăng lên"
  },
  {
    "s": "この 決定 は 会社 の 将来 に 大きな 影響 を 与えた。",
    "t": "影響",
    "r": "えいきょう",
    "w": [
     "えいぎょう",
     "えいきょ",
     "ようきょう"
    ],
    "exp": "影響 đọc là えいきょう。えいぎょう đọc sai âm tiết thứ hai, えいきょ thiếu âm う ở cuối, ようきょう đọc sai âm tiết đầu nên đều sai。",
    "voc": "影響（えいきょう）：ảnh hưởng； 決定（けってい）：quyết định； 将来（しょうらい）：tương lai； 与える（あたえる）：gây ra, mang lại"
  },
  {
    "s": "旅行 の 準備 を 前日 までに すませて ください。",
    "t": "準備",
    "r": "じゅんび",
    "w": [
     "じゅんぴ",
     "じゅんびい",
     "しゅんび"
    ],
    "exp": "準備 đọc là じゅんび。じゅんぴ đọc sai âm 備 thành ぴ, じゅんびい thêm âm い thừa ở cuối, しゅんび đọc sai âm tiết đầu nên đều sai。",
    "voc": "準備（じゅんび）：chuẩn bị； 旅行（りょこう）：du lịch； 前日（ぜんじつ）：ngày hôm trước； すませる：hoàn thành, xong việc"
  },
  {
    "s": "彼 は 前 の 仕事 の 経験 を 生かして、新しい 店 を 開いた。",
    "t": "経験",
    "r": "けいけん",
    "w": [
     "けいげん",
     "けいけ",
     "けいけんん"
    ],
    "exp": "経験 đọc là けいけん。けいげん đọc sai âm 験 thành げん, けいけ thiếu âm ん ở cuối, けいけんん thêm âm ん thừa nên đều sai。",
    "voc": "経験（けいけん）：kinh nghiệm； 生かす（いかす）：tận dụng, phát huy； 店（みせ）：cửa hàng； 開く（ひらく）：mở (cửa hàng)"
  },
  {
    "s": "早起き は 健康 に よい 習慣 だ と 言われて います。",
    "t": "習慣",
    "r": "しゅうかん",
    "w": [
     "しゅうがん",
     "しゅうか",
     "じゅうかん"
    ],
    "exp": "習慣 đọc là しゅうかん。しゅうがん đọc sai âm 慣 thành がん, しゅうか thiếu âm ん ở cuối, じゅうかん đọc sai âm tiết đầu nên đều sai。",
    "voc": "習慣（しゅうかん）：thói quen； 早起き（はやおき）：dậy sớm； 健康（けんこう）：sức khỏe； 言われる（いわれる）：được nói, người ta nói"
  }
  ],
  hyoki: [
  {
    "s": "この 方法 は とても ゆうこう だ と 思います。",
    "h": "ゆうこう",
    "k": "有効",
    "w": [
     "有功",
     "友効",
     "有幸"
    ],
    "exp": "ゆうこう viết là 有効, nghĩa là có hiệu quả, có hiệu lực。Có hiệu quả nên tác giả cho rằng phương pháp này tốt. 有功 (công lao), 友効, 有幸 đều không phải là từ ゆうこう nên sai。",
    "voc": "有効（ゆうこう）：có hiệu quả, có hiệu lực； 方法（ほうほう）：phương pháp； 思う（おもう）：nghĩ"
  },
  {
    "s": "この 町 で の せいかつ は 静か で、とても 気 に 入って います。",
    "h": "せいかつ",
    "k": "生活",
    "w": [
     "生花",
     "性活",
     "生話"
    ],
    "exp": "せいかつ viết là 生活 (sinh hoạt, cuộc sống)。生花・性活・生話 đều không phải là từ せいかつ nên sai。",
    "voc": "生活（せいかつ）：cuộc sống, sinh hoạt； 静か（しずか）：yên tĩnh； 気に入る（きにいる）：thích, ưng ý"
  },
  {
    "s": "試験 の けっか は 来週 の 月曜日 に 発表 されます。",
    "h": "けっか",
    "k": "結果",
    "w": [
     "結菓",
     "結課",
     "結過"
    ],
    "exp": "けっか viết là 結果 (kết quả)。結菓・結課・結過 đều không phải là từ けっか nên sai。",
    "voc": "結果（けっか）：kết quả； 試験（しけん）：kì thi； 発表（はっぴょう）：công bố, thông báo； 来週（らいしゅう）：tuần sau"
  },
  {
    "s": "将来 の きぼう は、自分 の 店 を 持つ こと です。",
    "h": "きぼう",
    "k": "希望",
    "w": [
     "希忘",
     "希坊",
     "喜望"
    ],
    "exp": "きぼう viết là 希望 (hi vọng, mong muốn)。希忘・希坊・喜望 đều không phải là từ きぼう nên sai。",
    "voc": "希望（きぼう）：hi vọng, mong muốn； 将来（しょうらい）：tương lai； 持つ（もつ）：có, sở hữu"
  },
  {
    "s": "この ふくざつ な 問題 は、すぐ に は 解決 できません。",
    "h": "ふくざつ",
    "k": "複雑",
    "w": [
     "複難",
     "複離",
     "副雑"
    ],
    "exp": "ふくざつ viết là 複雑 (phức tạp)。複難・複離・副雑 đều không phải là từ ふくざつ nên sai。",
    "voc": "複雑（ふくざつ）：phức tạp； 問題（もんだい）：vấn đề； 解決（かいけつ）：giải quyết"
  }
  ],
  ctx: [
  {
    "s": "この アプリ は 電車 の 時間 を 調べる の に とても （　）です。",
    "a": "べんり",
    "w": [
     "あんぜん",
     "たいせつ",
     "しんせつ"
    ],
    "exp": "Ứng dụng tra giờ tàu thì rất 便利 (tiện lợi) mới đúng nghĩa. 安全 (an toàn) không hợp với việc tra giờ, 大切 (quan trọng) không diễn tả tính tiện lợi, 親切 (tốt bụng) dùng cho con người nên đều sai。",
    "voc": "便利（べんり）：tiện lợi； 電車（でんしゃ）：tàu điện； 調べる（しらべる）：tra cứu, tìm hiểu"
  },
  {
    "s": "友だち が 無事 だ と 聞いて、やっと （　）しました。",
    "a": "あんしん",
    "w": [
     "きんちょう",
     "しんぱい",
     "ふあん"
    ],
    "exp": "Nghe tin bạn bình an vô sự nên cuối cùng 安心しました (đã yên tâm). 緊張 (căng thẳng), 心配 (lo lắng), 不安 (bất an) đều ngược nghĩa với tâm trạng nhẹ nhõm sau khi biết tin tốt nên sai。",
    "voc": "安心（あんしん）：yên tâm； 無事（ぶじ）：bình an vô sự； やっと：cuối cùng； 聞く（きく）：nghe"
  },
  {
    "s": "この 問題 は とても （　）で、すぐ に は 答え が 出ません。",
    "a": "ふくざつ",
    "w": [
     "かんたん",
     "やさしい",
     "あきらか"
    ],
    "exp": "Vấn đề khó đến mức không ra đáp án ngay được thì phải là 複雑 (phức tạp). 簡単 (đơn giản) và やさしい (dễ) ngược nghĩa, 明らか (rõ ràng) thì mâu thuẫn với việc không tìm ra đáp án nên đều sai。",
    "voc": "複雑（ふくざつ）：phức tạp； 問題（もんだい）：vấn đề； 答え（こたえ）：đáp án, câu trả lời"
  },
  {
    "s": "この 道 は 夜 に なると、とても （　）ので、一人 で 歩かないで ください。",
    "a": "きけん",
    "w": [
     "あんぜん",
     "べんり",
     "しずか"
    ],
    "exp": "Con đường ban đêm mà phải dặn đừng đi một mình thì phải là 危険 (nguy hiểm). 安全 (an toàn) ngược nghĩa, 便利 (tiện lợi) không liên quan đến lời cảnh báo, 静か (yên tĩnh) không phải là lí do để cấm đi một mình nên đều sai。",
    "voc": "危険（きけん）：nguy hiểm； 安全（あんぜん）：an toàn； 一人（ひとり）：một mình； 歩く（あるく）：đi bộ"
  },
  {
    "s": "この 仕事 は 給料 が （　）して いる ので、生活 の 心配 が ありません。",
    "a": "あんてい",
    "w": [
     "ふあんてい",
     "きけん",
     "ふべん"
    ],
    "exp": "Lương mà ổn định thì mới không phải lo lắng về cuộc sống, nên 安定している (ổn định) là đúng. 不安定 (không ổn định) ngược nghĩa, 危険 (nguy hiểm) và 不便 (bất tiện) không dùng để nói về mức lương theo cách này nên sai。",
    "voc": "安定（あんてい）：ổn định； 給料（きゅうりょう）：lương； 生活（せいかつ）：cuộc sống； 心配（しんぱい）：lo lắng"
  },
  {
    "s": "雨 が やんで、空 が （　）明るく なって きた。",
    "a": "しだいに",
    "w": [
     "いきなり",
     "とつぜん",
     "きゅうに"
    ],
    "exp": "Bầu trời sáng dần lên sau khi mưa tạnh là sự thay đổi từ từ, nên しだいに (dần dần) là đúng. いきなり・突然・急に đều mang nghĩa đột ngột, mâu thuẫn với việc sáng dần lên nên sai。",
    "voc": "しだいに：dần dần； 明るい（あかるい）：sáng； やむ：tạnh (mưa)； 空（そら）：bầu trời"
  },
  {
    "s": "先生 の 話 を 聞いて、勉強 の 大切 さ を （　）感じました。",
    "a": "あらためて",
    "w": [
     "たまたま",
     "ぐうぜん",
     "めったに"
    ],
    "exp": "Nghe thầy nói rồi nhận ra một lần nữa tầm quan trọng của việc học, nên 改めて (một lần nữa, lại một lần nữa) là đúng. たまたま・偶然 đều mang nghĩa tình cờ, めったに mang nghĩa hiếm khi, đều không hợp với việc nhận ra sau khi nghe giảng nên sai。",
    "voc": "改めて（あらためて）：một lần nữa, lại một lần nữa； 大切（たいせつ）：quan trọng； 感じる（かんじる）：cảm nhận"
  }
  ],
  syn: [
  {
    "s": "彼 の 返事 は いつも はやい ので、助かります。",
    "t": "はやい",
    "a": "じんそく",
    "w": [
     "おそい",
     "ゆっくり",
     "のろい"
    ],
    "exp": "はやい (nhanh) gần nghĩa nhất với じんそく (nhanh chóng). おそい (chậm), ゆっくり (chậm rãi), のろい (chậm chạp) đều mang nghĩa ngược lại nên sai。",
    "voc": "返事（へんじ）：câu trả lời, hồi âm； じんそく：nhanh chóng； 助かる（たすかる）：được giúp đỡ, may quá"
  },
  {
    "s": "手紙 が 届いた ので、さっそく 返事 を 書いた。",
    "t": "さっそく",
    "a": "すぐに",
    "w": [
     "ゆっくり",
     "あとで",
     "いつか"
    ],
    "exp": "さっそく (ngay lập tức) gần nghĩa nhất với すぐに (ngay). ゆっくり (từ từ, chậm rãi) ngược nghĩa, あとで (sau đó) và いつか (lúc nào đó) đều chỉ thời gian muộn hơn nên sai。",
    "voc": "さっそく：ngay lập tức； 届く（とどく）：đến nơi, được gửi đến； 返事（へんじ）：câu trả lời"
  },
  {
    "s": "長い 休み の あと、すっかり 日本語 を 忘れて しまった。",
    "t": "すっかり",
    "a": "まったく",
    "w": [
     "すこし",
     "だいたい",
     "ちょっと"
    ],
    "exp": "すっかり (hoàn toàn) trong câu phủ định hoàn toàn này gần nghĩa nhất với まったく (hoàn toàn). すこし・だいたい・ちょっと đều chỉ mức độ một phần, ngược với nghĩa hoàn toàn nên sai。",
    "voc": "すっかり：hoàn toàn； 忘れる（わすれる）：quên； 休み（やすみ）：kì nghỉ"
  },
  {
    "s": "彼 の 話 は たしかに 正しかった。",
    "t": "たしかに",
    "a": "ほんとうに",
    "w": [
     "たぶん",
     "おそらく",
     "もしかしたら"
    ],
    "exp": "たしかに (quả thật, đúng là) gần nghĩa nhất với 本当に (thật sự). たぶん・おそらく・もしかしたら đều mang nghĩa phỏng đoán (có lẽ, biết đâu), không khẳng định chắc chắn như たしかに nên sai。",
    "voc": "確かに（たしかに）：quả thật, đúng là； 正しい（ただしい）：đúng； 話（はなし）：câu chuyện, lời nói"
  },
  {
    "s": "日曜日 は たいてい 家 で 本 を 読んで いる。",
    "t": "たいてい",
    "a": "ほとんど",
    "w": [
     "ときどき",
     "めったに",
     "たまに"
    ],
    "exp": "たいてい (hầu như, thường thì) gần nghĩa nhất với ほとんど (hầu hết, gần như luôn). ときどき・たまに chỉ thỉnh thoảng, めったに chỉ hiếm khi, đều chỉ tần suất thấp hơn nhiều nên sai。",
    "voc": "たいてい：hầu như, thường thì； ほとんど：hầu hết； ときどき：thỉnh thoảng； 日曜日（にちようび）：chủ nhật"
  }
  ],
  yoho: [
  {
    "t": "あける",
    "s": [
     "本 を あけると、風 が 入って きます。",
     "ドア を あけると、風 が 入って きます。",
     "電気 を あけると、風 が 入って きます。",
     "水 を あけると、風 が 入って きます。"
    ],
    "a": 1,
    "exp": "あける (mở) dùng với cửa ra vào như ドアを開ける mới đúng. 本を開ける là sai vì sách dùng 開く (ひらく); 電気を開ける sai vì đèn dùng つける; 水を開ける sai vì nước dùng 出す hoặc mở vòi (じゃぐちを開ける)。",
    "voc": "あける：mở (cửa)； ドア：cửa ra vào； 風（かぜ）：gió； 入る（はいる）：đi vào"
  },
  {
    "t": "あつめる",
    "s": [
     "空気 を あつめる の が 好き です。",
     "時間 を あつめる の が 好き です。",
     "古い 切手 を あつめる の が 好き です。",
     "夢 を あつめる の が 好き です。"
    ],
    "a": 2,
    "exp": "あつめる (sưu tầm, thu thập) dùng với những thứ có thể gom lại được như tem cũ (古い切手) mới đúng. 空気・時間・夢 đều không phải là thứ có thể sưu tầm, gom lại theo cách này nên sai。",
    "voc": "あつめる：sưu tầm, thu thập； 切手（きって）：tem； 古い（ふるい）：cũ； 空気（くうき）：không khí"
  },
  {
    "t": "とまる",
    "s": [
     "バス が 駅 の 前 で とまる の を 見ました。",
     "電気 が 駅 の 前 で とまる の を 見ました。",
     "音 が 駅 の 前 で とまる の を 見ました。",
     "色 が 駅 の 前 で とまる の を 見ました。"
    ],
    "a": 0,
    "exp": "とまる (dừng lại) dùng với xe cộ như バスが止まる mới đúng. 電気・音・色 đều không thể dừng lại trước nhà ga theo cách này nên sai。",
    "voc": "とまる：dừng lại； バス：xe buýt； 駅（えき）：nhà ga； 前（まえ）：phía trước"
  },
  {
    "t": "おぼえる",
    "s": [
     "雨 を おぼえる の は 楽しい です。",
     "風 を おぼえる の は 楽しい です。",
     "電気 を おぼえる の は 楽しい です。",
     "新しい 単語 を おぼえる の は 楽しい です。"
    ],
    "a": 3,
    "exp": "おぼえる (nhớ, học thuộc) dùng với kiến thức như từ mới (新しい単語) mới đúng. 雨・風・電気 đều không phải là thứ có thể học thuộc, ghi nhớ theo cách này nên sai。",
    "voc": "おぼえる：nhớ, học thuộc； 単語（たんご）：từ vựng； 新しい（あたらしい）：mới； 楽しい（たのしい）：vui, thú vị"
  },
  {
    "t": "さがす",
    "s": [
     "駅 の 近く で 落とした 時間 を さがす つもり です。",
     "駅 の 近く で 落とした かぎ を さがす つもり です。",
     "駅 の 近く で 落とした 音 を さがす つもり です。",
     "駅 の 近く で 落とした 色 を さがす つもり です。"
    ],
    "a": 1,
    "exp": "さがす (tìm kiếm) dùng với đồ vật bị đánh rơi như chìa khóa (かぎ) mới đúng. 時間・音・色 đều không phải là đồ vật có thể đánh rơi rồi đi tìm ở gần nhà ga nên sai。",
    "voc": "さがす：tìm kiếm； 落とす（おとす）：đánh rơi； かぎ：chìa khóa； 近く（ちかく）：gần"
  }
  ],
  kotoba: [
  {
    "s": "お祭り に は、（　）が たくさん 来ました。",
    "a": "ひとびと",
    "w": [
     "ひとひと",
     "ひとぴと",
     "ひとびど"
    ],
    "exp": "人人 khi lặp lại thì âm đầu của từ sau biến thành âm đục (rendaku) nên đọc là ひとびと mới đúng. ひとひと không có rendaku, ひとぴと và ひとびど đều đọc sai quy tắc biến âm nên sai。",
    "voc": "人々（ひとびと）：mọi người； お祭り（おまつり）：lễ hội； たくさん：nhiều"
  },
  {
    "s": "この カード の （　）に ついて は、店 の 人 に 聞いて ください。",
    "a": "ごりよう",
    "w": [
     "おりよう",
     "ごりょお",
     "おりょお"
    ],
    "exp": "利用 là từ Hán (kango) nên kính ngữ đi kèm là ご, thành ご利用 mới đúng. おりよう sai vì 利用 không dùng お; ごりょお và おりょお đều đọc sai từ 利用 nên sai。",
    "voc": "ご利用（ごりよう）：sử dụng (kính ngữ)； カード：thẻ； 店（みせ）：cửa hàng； 聞く（きく）：hỏi"
  },
  {
    "s": "この 映画 は （　）な 内容 で、子ども に も 分かりやすい。",
    "a": "きょういくてき",
    "w": [
     "きょういくせい",
     "きょういくか",
     "きょういくじょう"
    ],
    "exp": "Muốn nói nội dung mang tính giáo dục thì phải dùng hậu tố 的 thành 教育的な内容 mới đúng. 教育性・教育化・教育上 đều không tạo thành tính từ な bổ nghĩa cho 内容 theo cách này nên sai。",
    "voc": "教育的（きょういくてき）：mang tính giáo dục； 内容（ないよう）：nội dung； 分かりやすい（わかりやすい）：dễ hiểu"
  },
  {
    "s": "工場 で は、作業 の （　）が 進んで いる。",
    "a": "きかいか",
    "w": [
     "きかいせい",
     "きかいてき",
     "きかいじょう"
    ],
    "exp": "Việc đưa máy móc vào công việc, tức là quá trình cơ giới hóa, phải dùng hậu tố 化 thành 機械化 mới đúng. 機械性・機械的・機械上 đều không diễn tả quá trình thay đổi này nên sai。",
    "voc": "機械化（きかいか）：cơ giới hóa； 工場（こうじょう）：nhà máy； 作業（さぎょう）：công việc, thao tác； 進む（すすむ）：tiến triển"
  },
  {
    "s": "この 計画 で いちばん 気 に なる （　）は、費用 が 高い こと です。",
    "a": "てん",
    "w": [
     "せい",
     "か",
     "てき"
    ],
    "exp": "Điểm đáng lưu ý nhất trong kế hoạch là 点 (điểm), thành 気になる点 mới đúng. 性・化・的 đều không ghép với 気になる để tạo thành danh từ chỉ điểm cần chú ý nên sai。",
    "voc": "点（てん）：điểm； 計画（けいかく）：kế hoạch； 気になる（きになる）：bận tâm, lưu ý； 費用（ひよう）：chi phí"
  }
  ],
  g1dlg: [
  {
    "d": [
     "来週、会社 の 記念式典 が あります ね。",
     "ええ、式典 （　）、社長 が あいさつ を します。"
    ],
    "a": "に際して",
    "w": [
     "に比べて",
     "に関して",
     "に応じて"
    ],
    "p": "〜に際して",
    "exp": "Nhân dịp lễ kỉ niệm thành lập công ty mà giám đốc phát biểu, nên に際して (nhân dịp, vào dịp) là đúng. に比べて (so với) không hợp vì không có so sánh, に関して (về việc) không diễn tả dịp lễ, に応じて (tùy theo) không hợp nghĩa nên sai。",
    "voc": "式典（しきてん）：lễ kỉ niệm； 際して（さいして）：nhân dịp； 社長（しゃちょう）：giám đốc； あいさつ：lời chào, bài phát biểu"
  },
  {
    "d": [
     "どうして 日本語 の 勉強 を 始めたん です か。",
     "高校 の とき、交換留学生 と 話した （　）、興味 を 持ちました。"
    ],
    "a": "のをきっかけに",
    "w": [
     "のばかりに",
     "のものの",
     "のどころか"
    ],
    "p": "〜をきっかけに",
    "exp": "Việc nói chuyện với du học sinh trao đổi là cái cớ, là dịp bắt đầu khiến người nói hứng thú với tiếng Nhật, nên のをきっかけに (nhân cơ hội, lấy đó làm dịp) là đúng. のばかりに (chỉ vì) mang nghĩa nguyên nhân tiêu cực, のものの (tuy rằng) mang nghĩa đối lập, のどころか (chứ không phải) mang nghĩa phủ định đối lập, đều không hợp nên sai。",
    "voc": "きっかけ：cái cớ, dịp bắt đầu； 興味（きょうみ）：hứng thú； 交換留学生（こうかんりゅうがくせい）：du học sinh trao đổi； 高校（こうこう）：trường cấp ba"
  },
  {
    "d": [
     "田中さん は 最近 どう して います か。",
     "大学 を 卒業 して （　）、一度 も 会って いません。"
    ],
    "a": "以来",
    "w": [
     "がてら",
     "かたわら",
     "きっかけに"
    ],
    "p": "〜て以来",
    "exp": "Kể từ khi tốt nghiệp đại học đến nay chưa gặp lại lần nào, nên 以来 (kể từ khi) là đúng. がてら (nhân tiện) và かたわら (trong khi làm việc khác) đều cần một hành động đi kèm, きっかけに (nhân dịp) không diễn tả khoảng thời gian kéo dài nên sai。",
    "voc": "以来（いらい）：kể từ khi； 卒業（そつぎょう）：tốt nghiệp； 大学（だいがく）：đại học； 一度も (いちども)：một lần cũng không"
  }
  ],
  g1: [
  {
    "s": "新しい 商品 の 発売 （　）、記者会見 が 行われた。",
    "a": "に先立って",
    "w": [
     "に比べて",
     "に関して",
     "に応じて"
    ],
    "p": "〜に先立って",
    "exp": "Buổi họp báo diễn ra trước khi sản phẩm mới ra mắt, nên に先立って (trước khi, trước thềm) là đúng. に比べて (so với) cần có đối tượng so sánh, に関して (về việc) không diễn tả thứ tự trước sau, に応じて (tùy theo) không hợp nghĩa nên sai。",
    "voc": "発売（はつばい）：ra mắt, phát hành； 新しい商品（あたらしい しょうひん）：sản phẩm mới； 記者会見（きしゃかいけん）：họp báo； 行われる（おこなわれる）：được tổ chức"
  },
  {
    "s": "新学期 （　）、先生方 が 新しい 計画 を 立てた。",
    "a": "にあたって",
    "w": [
     "に比べて",
     "に関して",
     "にわたって"
    ],
    "p": "〜にあたって",
    "exp": "Nhân dịp học kì mới bắt đầu mà các thầy cô lập kế hoạch mới, nên にあたって (nhân dịp, vào lúc) là đúng. に比べて (so với) cần so sánh, に関して (về việc) không diễn tả dịp bắt đầu, にわたって (trải qua, kéo dài) không hợp với việc lập kế hoạch nên sai。",
    "voc": "新学期（しんがっき）：học kì mới； 計画（けいかく）：kế hoạch； 立てる（たてる）：lập, đề ra； 先生方（せんせいがた）：các thầy cô"
  },
  {
    "s": "調査 は 三か月 に （　）行われた。",
    "a": "わたって",
    "w": [
     "先立って",
     "際して",
     "あたって"
    ],
    "p": "〜にわたって",
    "exp": "Cuộc điều tra kéo dài suốt ba tháng, nên 三か月にわたって (trải qua, trong suốt) là đúng. 先立って (trước khi) thì điều tra phải diễn ra trước ba tháng, 際して・あたって (nhân dịp) không diễn tả khoảng thời gian kéo dài nên sai。",
    "voc": "調査（ちょうさ）：điều tra, khảo sát； 三か月（さんかげつ）：ba tháng； 行われる（おこなわれる）：được tiến hành"
  },
  {
    "s": "実物 を （　）、本当 の 大きさ は 分からない。",
    "a": "見てからでないと",
    "w": [
     "見てばかりに",
     "見てどころか",
     "見てかたわら"
    ],
    "p": "V-て からでないと〜ない",
    "exp": "Phải nhìn vật thật rồi mới biết kích thước thật, nên 見てからでないと (nếu không nhìn thì không) là đúng. 見てばかりに (chỉ vì đã nhìn) sai về nghĩa nguyên nhân, 見てどころか (chứ không phải đã nhìn) sai về cấu trúc đối lập, 見てかたわら (trong khi nhìn) cần hành động song song nên sai。",
    "voc": "実物（じつぶつ）：vật thật； 大きさ（おおきさ）：kích thước； 分かる（わかる）：biết, hiểu"
  },
  {
    "s": "雨 が やんだ （　）、また 強く 降り出した。",
    "a": "かと思ったら",
    "w": [
     "だけに",
     "だけあって",
     "からこそ"
    ],
    "p": "〜かと思ったら",
    "exp": "Vừa tưởng mưa đã tạnh thì lại đổ mạnh, diễn tả sự việc bất ngờ xảy ra ngay sau đó, nên かと思ったら (vừa tưởng là thì) là đúng. だけに・だけあって (đúng như mong đợi) và からこそ (chính vì) đều mang nghĩa nguyên nhân, kết quả hợp lí, ngược với sự bất ngờ ở đây nên sai。",
    "voc": "やむ：tạnh (mưa)； 降り出す（ふりだす）：bắt đầu rơi, bắt đầu mưa； 強く（つよく）：mạnh"
  },
  {
    "s": "散歩 （　）、近く の 店 で パン を 買って きた。",
    "a": "がてら",
    "w": [
     "かたわら",
     "きっかけに",
     "以来"
    ],
    "p": "〜がてら",
    "exp": "Nhân tiện đi dạo mà ghé mua bánh, nên 散歩がてら (nhân tiện đi dạo) là đúng. かたわら cần dạng 散歩のかたわら mới đúng ngữ pháp, きっかけに (nhân dịp) không diễn tả việc làm kèm theo, 以来 (kể từ khi) diễn tả thời gian nên sai。",
    "voc": "散歩（さんぽ）：đi dạo； 近く（ちかく）：gần； パン：bánh mì； 買う（かう）：mua"
  },
  {
    "s": "彼 は 会社 で 働く （　）、夜間 の 学校 に 通って いる。",
    "a": "かたわら",
    "w": [
     "がてら",
     "きっかけに",
     "ばかりに"
    ],
    "p": "〜かたわら",
    "exp": "Vừa làm ở công ty vừa đi học buổi tối, hai việc song song lâu dài, nên 働くかたわら (trong khi, bên cạnh việc) là đúng. がてら cần dạng 働きがてら (động từ thể ます) nên 働くがてら sai ngữ pháp, きっかけに (nhân dịp) không diễn tả việc song song, ばかりに (chỉ vì) mang nghĩa tiêu cực nên sai。",
    "voc": "働く（はたらく）：làm việc； 夜間（やかん）：buổi tối, ban đêm； 通う（かよう）：đi học, đi lại thường xuyên"
  },
  {
    "s": "東京 で の 公演 （　）、全国 十か所 で 公演 が 行われる 予定 だ。",
    "a": "を皮切りに",
    "w": [
     "をめぐって",
     "に関して",
     "に比べて"
    ],
    "p": "〜を皮切りに",
    "exp": "Buổi biểu diễn ở Tokyo là buổi đầu tiên, mở đầu cho chuỗi biểu diễn khắp cả nước, nên を皮切りに (lấy đó làm mở đầu) là đúng. をめぐって (xoay quanh) cần có tranh luận, に関して (về việc) không diễn tả sự mở đầu, に比べて (so với) cần so sánh nên sai。",
    "voc": "公演（こうえん）：buổi biểu diễn； 皮切りに（かわきりに）：lấy đó làm mở đầu； 全国（ぜんこく）：toàn quốc； 予定（よてい）：dự định"
  },
  {
    "s": "この 研究 は、医学 の 分野 （　）有名 です。",
    "a": "において",
    "w": [
     "にわたって",
     "に先立って",
     "に際して"
    ],
    "p": "〜において",
    "exp": "Nghiên cứu nổi tiếng trong lĩnh vực y học, nên 医学の分野において (trong lĩnh vực) là đúng. にわたって (trải qua thời gian dài) không hợp với lĩnh vực, に先立って (trước khi) diễn tả thứ tự thời gian, に際して (nhân dịp) diễn tả dịp lễ nên sai。",
    "voc": "研究（けんきゅう）：nghiên cứu； 医学（いがく）：y học； 分野（ぶんや）：lĩnh vực； 有名（ゆうめい）：nổi tiếng"
  }
  ],
  star: [
  {
    "pre": "計画は",
    "post": "。",
    "chunks": [
     "調査の結果に",
     "基づいて",
     "作られた",
     "ものです"
    ],
    "p": "〜に基づいて",
    "exp": "Thứ tự đúng: 計画は (kế hoạch thì) + 調査の結果に基づいて (dựa trên kết quả điều tra) + 作られたものです (là thứ đã được lập nên). に基づいて phải đi ngay sau danh từ chỉ căn cứ (調査の結果に), và 作られたものです là vị ngữ cuối câu nên không thể đảo lên trước。",
    "voc": "計画（けいかく）：kế hoạch； 調査（ちょうさ）：điều tra； 結果（けっか）：kết quả； 基づく（もとづく）：dựa trên"
  },
  {
    "pre": "",
    "post": "。",
    "chunks": [
     "この小説は",
     "実話をもとに",
     "書かれた",
     "ものです"
    ],
    "p": "〜をもとに（して）",
    "exp": "Thứ tự đúng: この小説は (cuốn tiểu thuyết này thì) + 実話をもとに (dựa trên câu chuyện có thật) + 書かれたものです (là thứ đã được viết nên). をもとに phải đi sau danh từ chỉ nguồn gốc (実話), và 書かれたものです là vị ngữ cuối câu nên không thể đảo lên trước。",
    "voc": "小説（しょうせつ）：tiểu thuyết； 実話（じつわ）：chuyện có thật； もとにする：dựa trên, lấy làm gốc； 書く（かく）：viết"
  },
  {
    "pre": "料金は",
    "post": "、受付で確認してください。",
    "chunks": [
     "人数に",
     "応じて",
     "変わります",
     "ので"
    ],
    "p": "〜に応じて",
    "exp": "Thứ tự đúng: 料金は (phí thì) + 人数に応じて (tùy theo số người) + 変わりますので (sẽ thay đổi nên) + 受付で確認してください (xin hãy xác nhận ở quầy tiếp tân). に応じて phải đi ngay sau danh từ chỉ tiêu chuẩn (人数に), và ので nối hai mệnh đề nên phải đứng cuối cụm trước post。",
    "voc": "料金（りょうきん）：phí, lệ phí； 人数（にんずう）：số người； 応じる（おうじる）：tùy theo, đáp ứng； 受付（うけつけ）：quầy tiếp tân"
  },
  {
    "pre": "",
    "post": "。",
    "chunks": [
     "気温が",
     "上がるにしたがって",
     "氷が",
     "とけていった"
    ],
    "p": "〜にしたがって",
    "exp": "Thứ tự đúng: 気温が (nhiệt độ thì) + 上がるにしたがって (càng tăng lên) + 氷が (băng thì) + とけていった (đã tan dần). にしたがって diễn tả sự thay đổi song song, phải đi sau mệnh đề chỉ sự thay đổi đầu tiên, và động từ chính とけていった phải đứng cuối câu。",
    "voc": "気温（きおん）：nhiệt độ； 上がる（あがる）：tăng lên； 氷（こおり）：băng, đá； とける：tan chảy"
  },
  {
    "pre": "",
    "post": "。",
    "chunks": [
     "年をとるにつれて",
     "体力が",
     "少しずつ",
     "弱くなっていった"
    ],
    "p": "〜につれて",
    "exp": "Thứ tự đúng: 年をとるにつれて (càng lớn tuổi) + 体力が (thể lực thì) + 少しずつ (dần dần từng chút) + 弱くなっていった (đã yếu đi). につれて diễn tả sự thay đổi theo thời gian, phải đứng đầu câu, và 少しずつ là trạng từ bổ nghĩa cho động từ cuối câu nên phải đứng trước 弱くなっていった。",
    "voc": "年をとる（としをとる）：lớn tuổi； 体力（たいりょく）：thể lực； 少しずつ（すこしずつ）：dần dần từng chút； 弱い（よわい）：yếu"
  }
  ],
  bunsho: [
  {
    "intro": "つぎの 文章 は、町 の 図書館 に ついて 書かれた 文章 です。",
    "p": "町 の 図書館 で は、毎月 一度、読書会 が 開かれて います。（　1　）参加者 は、好き な 本 を 一冊 持って きます。会 で は、自分 の 本 に ついて 話します。（　2　）ほか の 人 の 話 を 聞いて、質問 を します。本 を 読む の が 苦手 な 人 も、気軽 に 参加 できます。（　3　）、この 会 は、町 の 人たち が 本 を 通じて 知り合う 大切 な 場所 に なって います。次 の 本 は、みんな で 話し合って 決めます。（　4　）夏 に は 海 の 話、冬 に は 雪 の 話 を 選びます。（　5　）、来月 の 会 も、たくさん の 人 が 集まる でしょう。",
    "b": [
     {
      "a": "まず",
      "w": [
       "しかし",
       "そのため",
       "一方で"
      ]
     },
     {
      "a": "そのあと",
      "w": [
       "しかし",
       "つまり",
       "たとえば"
      ]
     },
     {
      "a": "つまり",
      "w": [
       "しかし",
       "一方で",
       "たとえば"
      ]
     },
     {
      "a": "たとえば",
      "w": [
       "しかし",
       "そのため",
       "つまり"
      ]
     },
     {
      "a": "このように",
      "w": [
       "しかし",
       "一方で",
       "たとえば"
      ]
     }
    ],
    "exp": "(1) まず (trước hết): người tham gia trước hết mang theo một cuốn sách mình thích. しかし・そのため・一方で đều mang nghĩa đối lập hoặc nguyên nhân, không hợp với việc mở đầu trình tự. (2) そのあと (sau đó): nói về sách của mình xong thì nghe người khác nói và đặt câu hỏi. しかし・つまり・たとえば đều không diễn tả trình tự tiếp theo. (3) つまり (nói tóm lại): tóm tắt lại ý trước, buổi đọc sách là nơi quan trọng để người dân làm quen qua sách. しかし・一方で・たとえば không mang nghĩa tổng kết. (4) たとえば (ví dụ): đưa ra ví dụ cụ thể về sách theo mùa, mùa hè chuyện về biển, mùa đông chuyện về tuyết. しかし・そのため・つまり không mang nghĩa đưa ví dụ. (5) このように (như thế này): tiếp nối cách chọn sách theo mùa đã nói, dự đoán buổi sau cũng sẽ đông người. しかし・一方で・たとえば đều không hợp với việc kết luận, dự đoán.",
    "voc": "読書会（どくしょかい）：buổi đọc sách； 参加者（さんかしゃ）：người tham gia； 質問（しつもん）：câu hỏi； 苦手（にがて）：không giỏi, yếu； 気軽（きがる）：thoải mái, nhẹ nhàng； 知り合う（しりあう）：làm quen； 集まる（あつまる）：tụ tập"
  }
  ],
  readS: [
  {
    "p": "わたし は 先週、駅 の 近く の 図書館 へ 行きました。図書館 で は、静か に 本 を 読む こと が できます。わたし は 日本語 の 小説 を 二冊 借りました。返却日 は 二週間後 です。図書館 の 二階 に は、勉強 が できる 部屋 も あります。今度 は 友だち と いっしょ に 行きたい と 思います。",
    "q": "図書館 について、正しい もの は どれ です か。",
    "o": [
     "図書館 で は、大きな 声 で 話す こと が できます。",
     "わたし は 日本語 の 小説 を 二冊 借りました。",
     "図書館 の 二階 に は、本 を 買う 店 が あります。",
     "返却日 は 一週間後 です。"
    ],
    "a": 1,
    "e": "Đoạn văn nói vay 2 cuốn tiểu thuyết tiếng Nhật; các đáp án khác sai nội dung.",
    "exp": "Đáp án đúng là câu 2, bằng chứng là 「日本語の小説を二冊借りました」. Câu 1 sai vì trong thư viện phải đọc sách yên lặng, không được nói to. Câu 3 sai vì tầng 2 là phòng có thể học, không phải cửa hàng bán sách. Câu 4 sai vì ngày trả sách là hai tuần sau, không phải một tuần sau。",
    "voc": "図書館（としょかん）：thư viện； 小説（しょうせつ）：tiểu thuyết； 借りる（かりる）：mượn； 返却日（へんきゃくび）：ngày trả sách； 静か（しずか）：yên tĩnh"
  },
  {
    "p": "料理教室 で は、来月 から 新しい コース が 始まります。1回 の 料金 は 2500円 で、材料費 は 500円 です。月 に 4回 レッスン が あります。5人 以上 で 申し込む と、1回 500円引き に なります。",
    "q": "一人 で 月 に 4回 レッスン を 受ける と、1か月 に いくら かかります か。",
    "o": [
     "12000円です。",
     "10000円です。",
     "14000円です。",
     "11500円です。"
    ],
    "a": 0,
    "calc": true,
    "e": "「1回の料金は2500円で、材料費は500円です。月に4回レッスンがあります」とあります。",
    "exp": "Một buổi học phí 2500 yên cộng tiền nguyên liệu 500 yên là 3000 yên, nhân với 4 buổi một tháng là 12000 yên nên đáp án 1 đúng. 10000 yên là chỉ tính học phí (2500×4) mà quên tiền nguyên liệu. 14000 yên không khớp với phép tính nào trong bài. 11500 yên là lấy 12000 trừ 500, nhưng giảm giá 500 yên chỉ áp dụng khi đăng kí từ 5 người trở lên, còn ở đây học một mình nên không được giảm。",
    "voc": "料理教室（りょうりきょうしつ）：lớp học nấu ăn； 料金（りょうきん）：học phí, lệ phí； 材料費（ざいりょうひ）：tiền nguyên liệu； 申し込む（もうしこむ）：đăng kí； 引き（びき）：giảm giá"
  },
  {
    "p": "市立美術館 で は、来週 から 特別展 が 始まります。開館時間 は 午前 9時 から 午後 5時 まで で、月曜日 は 休館 です。入館料 は 大人 が 800円、学生 が 400円 です。特別展 の 期間中 は、午後 6時 まで 開いて います。",
    "q": "特別展 の 期間中、美術館 は 何時 まで 開いて います か。",
    "o": [
     "午後5時までです。",
     "午後6時までです。",
     "午前9時までです。",
     "午後8時までです。"
    ],
    "a": 1,
    "e": "「特別展の期間中は、午後6時まで開いています」とあります。",
    "exp": "Đáp án đúng là câu 2, bằng chứng là 「特別展の期間中は、午後6時まで開いています」. Câu 1 (5 giờ chiều) là giờ đóng cửa bình thường, không phải trong thời gian triển lãm đặc biệt. Câu 3 (9 giờ sáng) là giờ mở cửa. Câu 4 (8 giờ tối) không có trong bài。",
    "voc": "美術館（びじゅつかん）：bảo tàng mỹ thuật； 特別展（とくべつてん）：triển lãm đặc biệt； 開館（かいかん）：mở cửa (bảo tàng)； 休館（きゅうかん）：đóng cửa (bảo tàng)； 入館料（にゅうかんりょう）：vé vào cửa"
  },
  {
    "p": "山田さん は 毎日、バス で 会社 へ 行きます。家 から バス停 まで 歩いて 5分、バス に 20分 乗り ます。バス は 朝 7時 10分 に 出ます。会社 は バス停 から 歩いて 3分 です。",
    "q": "山田さん の 通勤 に ついて、正しい もの は どれ です か。",
    "o": [
     "バスは朝7時10分に家を出ます。",
     "会社はバス停から歩いて3分です。",
     "家からバス停までバスで5分です。",
     "バスに3分乗ります。"
    ],
    "a": 1,
    "e": "「会社はバス停から歩いて3分です」とあります。",
    "exp": "Đáp án đúng là câu 2, bằng chứng là 「会社はバス停から歩いて3分です」. Câu 1 sai vì 7 giờ 10 là giờ xe buýt xuất phát, không phải giờ rời khỏi nhà. Câu 3 sai vì từ nhà đến trạm xe buýt là đi bộ 5 phút, không phải đi xe buýt. Câu 4 sai vì thời gian ngồi xe buýt là 20 phút, còn 3 phút là thời gian đi bộ từ trạm đến công ty。",
    "voc": "通勤（つうきん）：đi làm； バス停（ばすてい）：trạm xe buýt； 歩く（あるく）：đi bộ； 乗る（のる）：đi (xe)"
  },
  {
    "p": "アパート の 入口 に、新しい お知らせ が ありました。来週 の 火曜日、午前 10時 から 午後 2時 まで、水 が 出ません。工事 の ため です。飲み水 は、前 の 日 まで に 用意 して おいて ください。",
    "q": "来週 の 火曜日 に ついて、正しい もの は どれ です か。",
    "o": [
     "午前10時から午後2時まで水が出ません。",
     "一日中水が出ません。",
     "水が止まるのは月曜日です。",
     "工事は午後2時から始まります。"
    ],
    "a": 0,
    "e": "「来週の火曜日、午前10時から午後2時まで、水が出ません」とあります。",
    "exp": "Đáp án đúng là câu 1, bằng chứng là 「来週の火曜日、午前10時から午後2時まで、水が出ません」. Câu 2 sai vì nước chỉ không chảy từ 10 giờ sáng đến 2 giờ chiều, không phải cả ngày. Câu 3 sai vì ngày mất nước là thứ Ba, không phải thứ Hai. Câu 4 sai vì bài không nói công trình bắt đầu lúc 2 giờ chiều, mà đó là giờ nước chảy lại。",
    "voc": "お知らせ（おしらせ）：thông báo； 入口（いりぐち）：lối vào； 工事（こうじ）：công trình, thi công； 飲み水（のみみず）：nước uống； 用意（ようい）：chuẩn bị"
  }
  ],
  readM: [
  {
    "p": "わたし の 町 で は、毎月 第一 日曜日 に 朝市 が 開かれます。朝市 は 駅前 の 広場 で 行われ、朝 7時 に 始まります。近く の 農家 の 人たち が、とれたて の 野菜 や 果物 を 売ります。魚 や 花 を 売る 店 も あります。朝市 に は、町外 から も たくさん の 人 が 来ます。わたし は 先月、初めて 朝市 に 行きました。母 と 一緒 に、野菜 と パン を 買いました。野菜 は 店 より 安くて、味 も よかった です。パン屋 の 主人 は、パン を 少し 食べさせて くれました。朝市 で は、買い物 だけ で なく、知らない 人 と 話す こと も 楽しめます。来月 も、また 行く つもり です。今度 は、友だち と 一緒 に 行こう と 思って います。",
    "qs": [
     {
      "q": "朝市 に ついて、正しい もの は どれ です か。",
      "o": [
       "朝市は毎週日曜日に開かれます。",
       "朝市は駅前の広場で行われます。",
       "朝市は夜7時に始まります。",
       "朝市では魚は売っていません。"
      ],
      "a": 1,
      "e": "「朝市は駅前の広場で行われ、朝7時に始まります」とあります。"
     },
     {
      "q": "わたし は 先月、朝市 で 何 を しました か。",
      "o": [
       "野菜とパンを買いました。",
       "魚と花を買いました。",
       "野菜を売りました。",
       "パンを作りました。"
      ],
      "a": 0,
      "e": "「母と一緒に、野菜とパンを買いました」とあります。"
     },
     {
      "q": "わたし は 来月、どう する つもり です か。",
      "o": [
       "一人で行くつもりです。",
       "友だちと一緒に行くつもりです。",
       "朝市で店を出すつもりです。",
       "朝市には行かないつもりです。"
      ],
      "a": 1,
      "e": "「今度は、友だちと一緒に行こうと思っています」とあります。"
     }
    ],
    "exp": "Q1: đáp án đúng là câu 2, bằng chứng 「朝市は駅前の広場で行われ、朝7時に始まります」. Chợ họp mỗi tháng vào chủ nhật đầu tiên chứ không phải hàng tuần; bắt đầu lúc 7 giờ sáng chứ không phải 7 giờ tối; trong bài có nói cửa hàng bán cá. Q2: đáp án đúng là câu 1, bằng chứng 「母と一緒に、野菜とパンを買いました」. Người viết mua rau và bánh mì cùng mẹ, không mua cá và hoa, cũng không bán rau hay làm bánh. Q3: đáp án đúng là câu 2, bằng chứng 「今度は、友だちと一緒に行こうと思っています」. Tháng sau người viết định đi cùng bạn, không phải đi một mình, mở gian hàng hay không đi nữa。",
    "voc": "朝市（あさいち）：chợ sáng； 広場（ひろば）：quảng trường； 農家（のうか）：nông dân, nhà nông； とれたて：mới thu hoạch； 果物（くだもの）：trái cây； 町外（ちょうがい）：ngoài thị trấn； 初めて（はじめて）：lần đầu tiên； 主人（しゅじん）：chủ cửa hàng"
  },
  {
    "p": "佐藤さん は、毎日 30分、日本語 の 新聞 を 読んで います。初め は、知らない 言葉 が 多くて、ほとんど 分かりません でした。しかし、辞書 を 使い ながら 読み続けた 結果、少しずつ 分かる よう に なりました。佐藤さん は、分からなかった 言葉 を ノート に 書いて、電車 の 中 で 覚える よう に して います。新聞 を 読む と、社会 の 出来事 も 分かります。佐藤さん は、朝ごはん を 食べ ながら 新聞 を 読む こと も あります。先週、先生 に「新聞 を 読む の は、とても いい 勉強 です」と 言われました。佐藤さん は、これから も 新聞 を 読み続けたい と 思って います。来月 から は、短い 記事 を 声 に 出して 読む 練習 も 始める つもり です。",
    "qs": [
     {
      "q": "佐藤さん が 毎日 して いる こと は 何 です か。",
      "o": [
       "日本語の新聞を30分読むことです。",
       "日本語の新聞を30分書くことです。",
       "電車の中で新聞を買うことです。",
       "先生と新聞について話すことです。"
      ],
      "a": 0,
      "e": "「毎日30分、日本語の新聞を読んでいます」とあります。"
     },
     {
      "q": "佐藤さん は、分からなかった 言葉 を どう して います か。",
      "o": [
       "ノートに書いて、電車の中で覚えるようにしています。",
       "辞書に書いて、家で覚えています。",
       "先生に聞いて、すぐ忘れてしまいます。",
       "新聞の上に書いて、捨ててしまいます。"
      ],
      "a": 0,
      "e": "「分からなかった言葉をノートに書いて、電車の中で覚えるようにしています」とあります。"
     },
     {
      "q": "佐藤さん は 来月 から 何 を 始める つもり です か。",
      "o": [
       "短い記事を声に出して読む練習を始めるつもりです。",
       "長い記事を書く練習を始めるつもりです。",
       "新聞を買うのをやめるつもりです。",
       "先生と新聞を読むのをやめるつもりです。"
      ],
      "a": 0,
      "e": "「来月からは、短い記事を声に出して読む練習も始めるつもりです」とあります。"
     }
    ],
    "exp": "Q1: đáp án đúng là câu 1, bằng chứng 「毎日30分、日本語の新聞を読んでいます」. Sato đọc báo chứ không viết báo, không mua báo trên tàu, cũng không nói chuyện với thầy về báo. Q2: đáp án đúng là câu 1, bằng chứng 「分からなかった言葉をノートに書いて、電車の中で覚えるようにしています」. Sato viết từ chưa biết vào vở rồi học thuộc trên tàu, không viết vào từ điển, không hỏi thầy rồi quên ngay, cũng không viết lên báo rồi vứt đi. Q3: đáp án đúng là câu 1, bằng chứng 「来月からは、短い記事を声に出して読む練習も始めるつもりです」. Tháng sau Sato định bắt đầu luyện đọc to bài báo ngắn, không phải viết bài dài hay ngừng đọc báo。",
    "voc": "新聞（しんぶん）：báo； 辞書（じしょ）：từ điển； 読み続ける（よみつづける）：đọc tiếp, tiếp tục đọc； 少しずつ（すこしずつ）：dần dần từng chút； 社会（しゃかい）：xã hội； 出来事（できごと）：sự việc, sự kiện； 記事（きじ）：bài báo； 声に出す（こえにだす）：đọc thành tiếng"
  },
  {
    "p": "田中さん の 会社 で は、今年 から 週 に 二日、在宅勤務 が できる よう に なりました。田中さん は、月曜日 と 金曜日 に 家 で 働いて います。家 で は、朝 の 通勤時間 が ない ので、ゆっくり 朝ごはん を 食べる こと が できます。仕事 は、会社 の パソコン と 同じ よう に、家 の パソコン で も できます。昼休み に は、近く の 公園 を 散歩 します。ただし、家 で 働く 日 も、午前 9時 まで に 仕事 を 始めなければ なりません。会議 が ある 日 は、会社 に 行かなければ なりません。田中さん は、在宅勤務 の おかげ で、家族 と 過ごす 時間 が 増えた と 喜んで います。来年 から は、週 に 三日 まで 在宅勤務 が できる 予定 です。",
    "qs": [
     {
      "q": "田中さん は、週 に 何日 在宅勤務 を して います か。",
      "o": [
       "二日です。",
       "三日です。",
       "五日です。",
       "毎日です。"
      ],
      "a": 0,
      "e": "「週に二日、在宅勤務ができるようになりました」とあります。"
     },
     {
      "q": "田中さん に ついて、正しい もの は どれ です か。",
      "o": [
       "家で働く日は、午前9時までに仕事を始めなければなりません。",
       "家で働く日は、いつ仕事を始めてもいいです。",
       "会議がある日も、家で働くことができます。",
       "家では会社のパソコンが使えません。"
      ],
      "a": 0,
      "e": "「家で働く日も、午前9時までに仕事を始めなければなりません」とあります。"
     },
     {
      "q": "田中さん は、在宅勤務 に ついて どう 思って います か。",
      "o": [
       "家族と過ごす時間が増えて、うれしいと思っています。",
       "家族と過ごす時間が減って、困っています。",
       "通勤時間が増えて、疲れています。",
       "仕事が減って、楽だと思っています。"
      ],
      "a": 0,
      "e": "「在宅勤務のおかげで、家族と過ごす時間が増えたと喜んでいます」とあります。"
     }
    ],
    "exp": "Q1: đáp án đúng là câu 1, bằng chứng 「週に二日、在宅勤務ができるようになりました」. Ba ngày là số ngày từ năm sau, không phải hiện tại; năm ngày và hàng ngày đều sai. Q2: đáp án đúng là câu 1, bằng chứng 「家で働く日も、午前9時までに仕事を始めなければなりません」. Ngày làm ở nhà cũng phải bắt đầu làm trước 9 giờ sáng, không phải bắt đầu lúc nào cũng được; ngày có họp phải đến công ty; máy tính ở nhà vẫn dùng được như máy công ty. Q3: đáp án đúng là câu 1, bằng chứng 「在宅勤務のおかげで、家族と過ごす時間が増えたと喜んでいます」. Nhờ làm việc ở nhà mà thời gian với gia đình tăng lên nên Tanaka rất vui, không phải thời gian giảm, không phải mệt vì đi lại, cũng không phải vì việc ít đi。",
    "voc": "在宅勤務（ざいたくきんむ）：làm việc tại nhà； 通勤時間（つうきんじかん）：thời gian đi làm； 昼休み（ひるやすみ）：giờ nghỉ trưa； 散歩（さんぽ）：đi dạo； 会議（かいぎ）：cuộc họp； 家族（かぞく）：gia đình； 過ごす（すごす）：trải qua, dành thời gian； 増える（ふえる）：tăng lên"
  }
  ],
  tougou: [
  {
    "p1": "高校生 が アルバイト を する こと に、私 は 賛成 です。アルバイト を する と、社会 の 仕組み が 分かり、お金 の 大切 さ も 学べます。また、学校 で 習った こと を 実際 の 仕事 で 使う こと も できます。ただし、勉強 の 時間 を しっかり 確保 する こと が 大切 です。週 に 二日 まで、夜 9時 まで に 終わる 仕事 なら、問題 ない と 思います。",
    "p2": "私 は 高校生 の アルバイト に 反対 です。高校生 の いちばん 大切 な 仕事 は 勉強 です。アルバイト を 始める と、疲れて 学校 の 勉強 に 集中 できなく なる 人 が 多い です。また、テスト の 前 に アルバイト を 休めない 場合 も あります。社会 の 経験 は、大学 に 入って から で も 十分 に 得る こと が できます。",
    "qs": [
     {
      "q": "アルバイト に ついて、Aさん と Bさん の 意見 は どう です か。",
      "o": [
       "Aさんは賛成で、Bさんは反対です。",
       "Aさんは反対で、Bさんは賛成です。",
       "AさんもBさんも賛成です。",
       "AさんもBさんも反対です。"
      ],
      "a": 0,
      "e": "Aさんは「高校生がアルバイトをすることに、私は賛成です」と言い、Bさんは「私は高校生のアルバイトに反対です」と言っています。"
     },
     {
      "q": "Aさん の 意見 として、正しい もの は どれ です か。",
      "o": [
       "アルバイトをすると、お金の大切さも学べます。",
       "高校生は毎日アルバイトをするべきです。",
       "アルバイトは夜12時までしてもいいです。",
       "アルバイトをすると、学校の勉強は必要ありません。"
      ],
      "a": 0,
      "e": "「お金の大切さも学べます」とあります。"
     }
    ],
    "exp": "Q1: đáp án đúng là câu 1. A nói rõ 「高校生がアルバイトをすることに、私は賛成です」, B nói rõ 「私は高校生のアルバイトに反対です」, nên hai người có ý kiến ngược nhau. Các đáp án còn lại đều đảo ngược hoặc đồng nhất ý kiến của hai người nên sai. Q2: đáp án đúng là câu 1, bằng chứng 「お金の大切さも学べます」. A chỉ cho phép làm thêm tối đa hai ngày một tuần và kết thúc trước 9 giờ tối, chứ không phải hàng ngày hay đến 12 giờ đêm; A cũng nhấn mạnh phải đảm bảo thời gian học, chứ không nói học ở trường là không cần thiết。",
    "voc": "アルバイト：làm thêm； 賛成（さんせい）：tán thành； 反対（はんたい）：phản đối； 仕組み（しくみ）：cơ chế, cách vận hành； 確保（かくほ）：đảm bảo； 集中（しゅうちゅう）：tập trung； 十分（じゅうぶん）：đầy đủ"
  }
  ],
  shuchou: [
  {
    "p": "最近、メール や メッセージ で 連絡 を 取る こと が 多く なり、手紙 を 書く 人 は 少なく なりました。しかし、私 は 手書き の 手紙 に は、メール に は ない よさ が ある と 思います。まず、手紙 を 書く とき、人 は 相手 の こと を 考え ながら、一文字 ずつ 心 を こめて 書きます。その 時間 そのもの が、相手 へ の 気持ち を 表して います。メール は すぐ に 送れます が、短い 文 で 済ませて しまう こと も 多く、気持ち が 伝わりにくい こと が あります。一方、手紙 を 受け取った 人 は、字 の 形 や 紙 の 様子 から、書いた 人 の 様子 を 想像 する こと が できます。字 が 上手 で なくても、その 人 の 気持ち が 伝わって きます。また、手紙 は 何年 も 残して おく こと が できます。昔 もらった 手紙 を 読み返す と、その とき の こと が 思い出されます。手紙 を 書く に は、紙 や 切手 を 用意 しなければ ならず、少し 手間 が かかります。しかし、その 手間 が ある からこそ、手紙 を もらった 人 は うれしい の です。メール は 便利 です が、大切 な 気持ち を 伝えたい とき は、手紙 を 書く の が いちばん いい と 私 は 思います。手紙 を 書く 時間 は、相手 と 向き合う 大切 な 時間 です。そのため、私 は これから も、ときどき 手紙 を 書こう と 思って います。来月、昔 の 友だち に 会う とき に は、久しぶり に 手紙 を 書く つもり です。",
    "qs": [
     {
      "q": "筆者 が いちばん 言いたい こと は 何 です か。",
      "o": [
       "大切な気持ちを伝えたいときは、手紙を書くのがいちばんいいということです。",
       "メールは手紙より便利だということです。",
       "手紙を書く人は少なくなったということです。",
       "字が上手な人だけが手紙を書くべきだということです。"
      ],
      "a": 0,
      "e": "「大切な気持ちを伝えたいときは、手紙を書くのがいちばんいいと私は思います」とあります。"
     },
     {
      "q": "筆者 に よると、手紙 の よさ は 何 です か。",
      "o": [
       "書くときに相手のことを考えながら、一文字ずつ心をこめて書くことです。",
       "すぐに送ることができることです。",
       "短い文で済ませることができることです。",
       "紙や切手を用意しなくてもいいことです。"
      ],
      "a": 0,
      "e": "「手紙を書くとき、人は相手のことを考えながら、一文字ずつ心をこめて書きます」とあります。"
     },
     {
      "q": "手紙 を 受け取った 人 に ついて、筆者 は どう 言って います か。",
      "o": [
       "字の形や紙の様子から、書いた人の様子を想像することができます。",
       "字が上手でない人の手紙は読みません。",
       "手紙はすぐに捨ててしまいます。",
       "手紙よりメールのほうが気持ちが伝わります。"
      ],
      "a": 0,
      "e": "「字の形や紙の様子から、書いた人の様子を想像することができます」とあります。"
     }
    ],
    "exp": "Q1: đáp án đúng là câu 1, bằng chứng 「大切な気持ちを伝えたいときは、手紙を書くのがいちばんいいと私は思います」. Tác giả thừa nhận email tiện lợi chứ không nói email tiện hơn thư tay là ý chính; việc người viết thư ít đi chỉ là bối cảnh mở đầu; tác giả nói rõ dù chữ không đẹp thì tình cảm vẫn truyền đến được, chứ không nói chỉ người viết chữ đẹp mới nên viết thư. Q2: đáp án đúng là câu 1, bằng chứng 「手紙を書くとき、人は相手のことを考えながら、一文字ずつ心をこめて書きます」. Gửi ngay được và viết gọn bằng câu ngắn là ưu điểm của email, không phải của thư tay; viết thư thì phải chuẩn bị giấy và tem, chứ không phải không cần chuẩn bị. Q3: đáp án đúng là câu 1, bằng chứng 「字の形や紙の様子から、書いた人の様子を想像することができます」. Người nhận không bỏ qua thư của người viết chữ xấu, không vứt thư đi ngay, và tác giả cho rằng thư tay truyền đạt tình cảm tốt hơn email, không phải ngược lại。",
    "voc": "手書き（てがき）：viết tay； 連絡（れんらく）：liên lạc； 相手（あいて）：đối phương, người nhận； 心をこめる（こころをこめる）：dồn hết tâm ý； 表す（あらわす）：thể hiện； 済ませる（すませる）：xong việc, làm cho xong； 想像（そうぞう）：tưởng tượng； 残す（のこす）：giữ lại； 読み返す（よみかえす）：đọc lại； 手間（てま）：công sức, thời gian bỏ ra"
  }
  ],
  info: [
  {
    "tpl": "<b>市民スポーツセンターのご案内</b><br><table class=\"jl-tbl\"><tr><th>場所</th><th>月〜金</th><th>土</th><th>日</th></tr><tr><td>プール</td><td>9時〜21時</td><td>10時〜18時</td><td>10時〜18時</td></tr><tr><td>ジム</td><td>10時〜20時</td><td>9時〜17時</td><td>休み</td></tr></table>休館日：毎月第2火曜日<br><b>12月のカレンダー</b><br><table class=\"jl-cal\"><tr><th>月</th><th>火</th><th>水</th><th>木</th><th>金</th><th>土</th><th>日</th></tr><tr><td></td><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td></tr><tr><td>7</td><td>8</td><td>9</td><td>10</td><td>11</td><td>12</td><td>13</td></tr><tr><td>14</td><td>15</td><td>16</td><td>17</td><td>18</td><td>19</td><td>20</td></tr><tr><td>21</td><td>22</td><td>23</td><td>24</td><td>25</td><td>26</td><td>27</td></tr><tr><td>28</td><td>29</td><td>30</td><td>31</td><td></td><td></td><td></td></tr></table>",
    "inst": "つぎの市民スポーツセンターのご案内と12月のカレンダーを見て、質問に答えてください。答えは1・2・3・4から、いちばんいいものを一つえらんでください。",
    "q": "佐藤さんは12月8日にプールで泳ぎたいと思っています。プールは使えますか。",
    "opts": [
     "使えます。午前9時からです。",
     "使えません。休館日です。",
     "使えます。午前10時からです。",
     "使えます。午後だけです。"
    ],
    "ans": 1,
    "exp": "Ngày 8 tháng 12 năm 2026 là thứ Ba. Lịch tháng 12 cho thấy ngày 1 là thứ Ba đầu tiên, nên ngày 8 là thứ Ba thứ hai trong tháng, đúng ngày nghỉ định kì (毎月第2火曜日) nên hồ bơi không dùng được. Đáp án 1 sai vì tuy ngày thường hồ bơi mở từ 9 giờ sáng nhưng hôm đó là ngày nghỉ. Đáp án 3 sai vì 10 giờ là giờ mở cửa thứ Bảy và Chủ nhật, không phải thứ Ba. Đáp án 4 sai vì cả ngày đều nghỉ, không chỉ buổi sáng。",
    "voc": "プール：hồ bơi； ジム：phòng tập； 休館日（きゅうかんび）：ngày nghỉ (của cơ sở)； 毎月（まいつき）：hàng tháng； 第2火曜日（だいに かようび）：thứ Ba thứ hai (trong tháng)"
  },
  {
    "tpl": "<b>料理教室のご案内</b><br>来月の料理教室は、下の表のとおりです。<br><table class=\"jl-tbl\"><tr><th>クラス</th><th>レベル</th><th>日時</th><th>参加費</th></tr><tr><td>A</td><td>初心者</td><td>土曜日 14時〜16時</td><td>3000円</td></tr><tr><td>B</td><td>中級者</td><td>土曜日 14時〜16時</td><td>5000円</td></tr><tr><td>C</td><td>初心者</td><td>日曜日 10時〜12時</td><td>2500円</td></tr><tr><td>D</td><td>初心者</td><td>土曜日 10時〜12時</td><td>3000円</td></tr></table>申し込みは、教室の受付で受け付けています。",
    "inst": "つぎの料理教室のご案内を見て、質問に答えてください。答えは1・2・3・4から、いちばんいいものを一つえらんでください。",
    "q": "田中さんは初心者で、土曜日の午後に参加できるクラスを探しています。参加費はいくらですか。",
    "opts": [
     "2500円です。",
     "3000円です。",
     "5000円です。",
     "4000円です。"
    ],
    "ans": 1,
    "exp": "Tanaka là người mới bắt đầu và chỉ tham gia được chiều thứ Bảy. Lớp A là lớp dành cho người mới bắt đầu, học thứ Bảy từ 14 giờ đến 16 giờ, phí 3000 yên nên đáp án 2 đúng. Lớp B cũng học chiều thứ Bảy nhưng dành cho trình độ trung cấp. Lớp C dành cho người mới bắt đầu nhưng học sáng Chủ nhật. Lớp D dành cho người mới bắt đầu, học thứ Bảy nhưng buổi sáng (10 giờ đến 12 giờ), không phải buổi chiều. 4000 yên không có trong bảng。",
    "voc": "料理教室（りょうりきょうしつ）：lớp học nấu ăn； 初心者（しょしんしゃ）：người mới bắt đầu； 中級者（ちゅうきゅうしゃ）：người trình độ trung cấp； 参加費（さんかひ）：phí tham gia； 受付（うけつけ）：quầy tiếp tân"
  }
  ]
};

window.WRITTEN_N2_SETS = {"1": window.WRITTEN_N2_SET1, "2": window.WRITTEN_N2_SET2, "3": window.WRITTEN_N2_SET3, "4": window.WRITTEN_N2_SET4, "5": window.WRITTEN_N2_SET5, "6": window.WRITTEN_N2_SET6, "7": window.WRITTEN_N2_SET7, "8": window.WRITTEN_N2_SET8, "9": window.WRITTEN_N2_SET9};
