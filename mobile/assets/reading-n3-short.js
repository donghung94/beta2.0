/* Đọc hiểu N3 — dạng bài Ngắn: 10 bài đọc TỰ VIẾT MỚI (không copy đề JLPT thật,
   không trùng ngân hàng đề thi của app). Kiến thức đến N3: từ vựng / ngữ pháp
   trung cấp (〜ば、受身、〜ように、〜てしまう、〜はず…), kanji đến N3, có
   furigana. Mỗi bài 2 câu hỏi × 4 đáp án, giải thích tiếng Việt (vì sao đúng /
   vì sao các đáp án khác sai) + từ vựng cuối bài. Nạp lười qua ensureReadData(). */
window.READ_N3_SHORT = [
  {
    title: "通勤電車の中で",
    body: "私は 毎朝、電車で 新聞を 読む 習慣が あります。しかし、最近は 電車が 混んでいて、座れない 日が 多く なりました。立った ままでは 新聞が 読みにくいので、スマートフォンで ニュースを 見るように なりました。画面は 小さいですが、いつでも 最新の ニュースが 読めるので、かえって 便利だと 感じて います。",
    qs: [
      {
        q: "筆者は 最近、電車の中で どうして いますか。",
        opts: ["座って 新聞を 読んで います", "スマートフォンで ニュースを 見て います", "立った まま 寝て います", "本を 読んで います"],
        ans: 1,
        exp: "Đáp án đúng là 2: vì tàu đông, nhiều ngày không có ghế nên tác giả chuyển sang「スマートフォンで ニュースを 見るように なりました」. Đáp án 1 (ngồi đọc báo giấy) là thói quen trước đây, nay khó thực hiện. Đáp án 3 và 4 không xuất hiện trong bài."
      },
      {
        q: "スマートフォンに ついて、筆者は どう 思って いますか。",
        opts: ["画面が 大きくて いい", "新聞より 読みにくい", "かえって 便利だ", "最新の ニュースは 読めない"],
        ans: 2,
        exp: "Đáp án đúng là 3 (かえって 便利だ): dù màn hình nhỏ, nhưng xem được tin mới nhất mọi lúc nên tác giả thấy「かえって 便利だと 感じて います」— ngược lại còn tiện hơn. Đáp án 1 sai vì bài nói màn hình nhỏ. Đáp án 2 và 4 trái với đánh giá tích cực trong bài."
      }
    ],
    vocab: [
      { w: "通勤", r: "つうきん", m: "đi làm (hằng ngày)" },
      { w: "習慣", r: "しゅうかん", m: "thói quen, tập quán" },
      { w: "最新", r: "さいしん", m: "mới nhất" },
      { w: "かえって", r: "かえって", m: "ngược lại, trái lại thì" },
      { w: "感じます", r: "かんじます", m: "cảm thấy, cảm nhận" }
    ]
  },
  {
    title: "祖母の マフラー",
    body: "この 赤い マフラーは、十年前に 祖母が 編んで くれた ものです。少し 古く なりましたが、私は 今でも 冬に なると よく 使って います。祖母は 三年前に 亡くなりました。この マフラーを 首に 巻くと、祖母の 優しい 声が 聞こえて くる ような 気が します。私にとって、世界で 一番 大切な 宝物です。",
    qs: [
      {
        q: "マフラーは だれが 作りましたか。",
        opts: ["母", "筆者", "祖母", "友人"],
        ans: 2,
        exp: "Đáp án đúng là 3 (祖母): câu đầu bài nói「祖母が 編んで くれた もの」— bà đã đan tặng mười năm trước. Mẹ, chính tác giả và bạn bè (đáp án 1, 2, 4) đều không được nhắc đến trong vai trò này."
      },
      {
        q: "筆者は マフラーを どう 思って いますか。",
        opts: ["古いので もう 使いたくない", "世界で 一番 大切な 宝物だ", "新しい ものを 買いたい", "祖母に 返したい"],
        ans: 1,
        exp: "Đáp án đúng là 2: dù đã hơi cũ, tác giả vẫn dùng mỗi mùa đông và kết luận「私にとって、世界で 一番 大切な 宝物です」. Đáp án 1 trái hẳn với tình cảm trong bài. Đáp án 3 và 4 không xuất hiện trong bài."
      }
    ],
    vocab: [
      { w: "編みます", r: "あみます", m: "đan (len)" },
      { w: "亡くなります", r: "なくなります", m: "qua đời (cách nói nhẹ nhàng)" },
      { w: "巻きます", r: "まきます", m: "quấn, quàng (khăn)" },
      { w: "気がします", r: "きがします", m: "có cảm giác rằng…" },
      { w: "宝物", r: "たからもの", m: "báu vật, vật quý giá" }
    ]
  },
  {
    title: "庭の 野菜",
    body: "今年の 春から、家の 小さな 庭で 野菜を 育てて います。トマトと きゅうりと なすを 植えました。毎朝 水を やるのが 日課です。初めは 虫に 葉を 食べられて 困りましたが、近所の おじいさんに 教えて もらって、ネットを かけるように しました。先週、初めて 赤く なった トマトを 収穫しました。自分で 育てた 野菜は、店で 買う ものより ずっと おいしく 感じました。",
    qs: [
      {
        q: "筆者は 虫の 問題を どう しましたか。",
        opts: ["薬を たくさん 使いました", "近所の 人に 教えて もらって、ネットを かけました", "野菜を 植えるのを やめました", "庭を 大きく しました"],
        ans: 1,
        exp: "Đáp án đúng là 2: bị sâu ăn lá, tác giả được ông cụ hàng xóm chỉ cách và「ネットを かけるように しました」— phủ lưới. Đáp án 1 (dùng nhiều thuốc) không có trong bài. Đáp án 3 trái với diễn biến (vẫn tiếp tục trồng và đã thu hoạch). Đáp án 4 không được nhắc đến."
      },
      {
        q: "初めて 収穫した 野菜は 何ですか。",
        opts: ["きゅうり", "なす", "トマト", "じゃがいも"],
        ans: 2,
        exp: "Đáp án đúng là 3 (トマト): bài viết「初めて 赤く なった トマトを 収穫しました」— quả cà chua chín đỏ đầu tiên. Dưa chuột và cà tím (đáp án 1, 2) có trồng nhưng bài không nói đã thu hoạch. Đáp án 4 (khoai tây) không xuất hiện trong bài."
      }
    ],
    vocab: [
      { w: "育てます", r: "そだてます", m: "trồng, nuôi dưỡng" },
      { w: "日課", r: "にっか", m: "việc làm hằng ngày (theo lệ)" },
      { w: "虫", r: "むし", m: "sâu bọ, côn trùng" },
      { w: "収穫します", r: "しゅうかくします", m: "thu hoạch" },
      { w: "ずっと", r: "ずっと", m: "hơn hẳn, hơn nhiều (so sánh)" }
    ]
  },
  {
    title: "健康診断の 結果",
    body: "先月 受けた 健康診断の 結果が 届きました。大きな 病気は ありませんでしたが、「運動不足です。体重も 少し 増えて います」と 書いて ありました。確かに、最近は 仕事が 忙しくて、運動する 時間が ありませんでした。今日から、会社帰りに 一駅 歩くことに しました。エレベーターも 使わないで、階段を 上るように します。",
    qs: [
      {
        q: "診断の 結果には、何が 書いて ありましたか。",
        opts: ["大きな 病気が 見つかった", "運動不足で、体重が 少し 増えて いる", "すぐに 入院しなければ ならない", "薬を 飲まなければ ならない"],
        ans: 1,
        exp: "Đáp án đúng là 2: kết quả ghi「運動不足です。体重も 少し 増えて います」— thiếu vận động và tăng cân nhẹ. Đáp án 1 sai vì bài nói rõ không có bệnh nặng. Đáp án 3 và 4 (nhập viện, uống thuốc) hoàn toàn không xuất hiện trong bài."
      },
      {
        q: "筆者は 今日から 何を することに しましたか。",
        opts: ["ジムに 通うこと", "会社を 辞めること", "会社帰りに 一駅 歩くこと", "食事を 減らすこと"],
        ans: 2,
        exp: "Đáp án đúng là 3: tác giả quyết định「会社帰りに 一駅 歩くことに しました」và dùng cầu thang bộ thay thang máy. Đáp án 1 (đi gym), 2 (nghỉ việc), 4 (giảm ăn) đều không được nhắc đến trong bài."
      }
    ],
    vocab: [
      { w: "健康診断", r: "けんこうしんだん", m: "khám sức khỏe (định kỳ)" },
      { w: "届きます", r: "とどきます", m: "được gửi đến, đến nơi" },
      { w: "運動不足", r: "うんどうぶそく", m: "thiếu vận động" },
      { w: "体重", r: "たいじゅう", m: "cân nặng, trọng lượng cơ thể" },
      { w: "確かに", r: "たしかに", m: "quả thật, đúng là" }
    ]
  },
  {
    title: "弟の 将来の 夢",
    body: "弟は 高校二年生です。弟は 料理を 作るのが 大好きで、将来は 料理人に なりたいと 言って います。初め、両親は 大学に 進学して ほしいと 思って いましたが、弟の 熱心な 気持ちを 見て、今では 応援して くれて います。弟は 週末、レストランで アルバイトを しながら、料理の 勉強も 続けて います。",
    qs: [
      {
        q: "両親は 初め、弟に 何を して ほしかったですか。",
        opts: ["料理人に なって ほしかった", "大学に 進学して ほしかった", "レストランで 働いて ほしかった", "何も 決めて いなかった"],
        ans: 1,
        exp: "Đáp án đúng là 2: bài viết lúc đầu bố mẹ「大学に 進学して ほしいと 思って いました」— muốn em học lên đại học, sau thấy em nhiệt tâm mới chuyển sang ủng hộ. Đáp án 1 là mong muốn của chính người em, không phải của bố mẹ lúc đầu. Đáp án 3 và 4 không có trong bài."
      },
      {
        q: "弟は 週末、何を して いますか。",
        opts: ["大学の 試験勉強", "レストランで アルバイト", "料理教室の 手伝い", "両親の 店の 仕事"],
        ans: 1,
        exp: "Đáp án đúng là 2: bài viết「弟は 週末、レストランで アルバイトを しながら、料理の 勉強も 続けて います」— cuối tuần làm thêm ở nhà hàng và tiếp tục học nấu ăn. Đáp án 1, 3, 4 không xuất hiện trong bài."
      }
    ],
    vocab: [
      { w: "将来", r: "しょうらい", m: "tương lai" },
      { w: "進学します", r: "しんがくします", m: "học lên (cấp học cao hơn)" },
      { w: "熱心", r: "ねっしん", m: "nhiệt tâm, say mê" },
      { w: "応援します", r: "おうえんします", m: "ủng hộ, cổ vũ" },
      { w: "両親", r: "りょうしん", m: "bố mẹ, song thân" }
    ]
  },
  {
    title: "新しい 家族",
    body: "先月、私は 近所の 人から 子猫を もらいました。生まれて 二か月の、小さな 茶色の 猫です。名前は「ちゃちゃ」と つけました。初めは 部屋の 隅に 隠れて 出て 来ませんでしたが、一週間 過ぎると、私の 膝の 上で 寝るように なりました。今では 家に 帰ると、玄関まで 走って 迎えに 来て くれます。一人暮らしの 生活が、急に にぎやかに なりました。",
    qs: [
      {
        q: "猫は どこから もらいましたか。",
        opts: ["ペットショップで 買いました", "近所の 人から もらいました", "道で 拾いました", "友人から 買いました"],
        ans: 1,
        exp: "Đáp án đúng là 2: câu đầu bài nói「近所の 人から 子猫を もらいました」— được người hàng xóm cho. Đáp án 1 và 4 (mua) sai vì đây là được cho, không phải mua. Đáp án 3 (nhặt trên đường) không có trong bài."
      },
      {
        q: "猫は 今、どんな 様子ですか。",
        opts: ["まだ 部屋の 隅に 隠れて います", "玄関まで 迎えに 来て くれます", "外へ 出たがります", "ご飯を あまり 食べません"],
        ans: 1,
        exp: "Đáp án đúng là 2: bài viết bây giờ mỗi khi về nhà, mèo「玄関まで 走って 迎えに 来て くれます」. Đáp án 1 (trốn ở góc phòng) là様子 của những ngày đầu, sau một tuần đã hết. Đáp án 3 và 4 không xuất hiện trong bài."
      }
    ],
    vocab: [
      { w: "子猫", r: "こねこ", m: "mèo con" },
      { w: "隅", r: "すみ", m: "góc, xó" },
      { w: "膝", r: "ひざ", m: "đầu gối, đùi (khi ngồi)" },
      { w: "迎えます", r: "むかえます", m: "đón, ra đón" },
      { w: "にぎやか", r: "にぎやか", m: "náo nhiệt, nhộn nhịp" }
    ]
  },
  {
    title: "スマホを なくした 日",
    body: "昨日、電車を 降りた とき、スマートフォンが ないことに 気が つきました。ポケットにも かばんの中にも ありません。慌てて 駅の 窓口へ 行くと、駅員さんが「届いて いますよ」と 言って、スマートフォンを 見せて くれました。だれかが 拾って、届けて くれたのです。名前は 分かりませんが、心の中で 何度も お礼を 言いました。",
    qs: [
      {
        q: "スマートフォンは どう なりましたか。",
        opts: ["電車の 中で 壊れました", "だれかが 拾って 駅に 届けて くれました", "駅員さんが 見つけて くれました", "かばんの 中から 出て きました"],
        ans: 1,
        exp: "Đáp án đúng là 2: nhân viên ga nói máy đã được nộp và bài kết luận「だれかが 拾って、届けて くれたのです」— có người nhặt được và mang đến nộp. Đáp án 3 không chính xác: nhân viên ga chỉ là người nhận giữ và giao lại máy, không phải người tìm thấy. Đáp án 1 và 4 trái với diễn biến bài."
      },
      {
        q: "筆者は 拾って くれた 人に お礼を 言えましたか。",
        opts: ["直接 会って 言いました", "電話で 言いました", "名前が 分からないので、心の中で 言いました", "何も しませんでした"],
        ans: 2,
        exp: "Đáp án đúng là 3: vì「名前は 分かりませんが」không biết người nhặt là ai nên tác giả「心の中で 何度も お礼を 言いました」— cảm ơn trong lòng nhiều lần. Đáp án 1 và 2 không thể xảy ra vì không biết danh tính. Đáp án 4 sai vì tác giả có cảm ơn, chỉ là trong lòng."
      }
    ],
    vocab: [
      { w: "気がつきます", r: "きがつきます", m: "nhận ra, chợt để ý" },
      { w: "慌てます", r: "あわてます", m: "hoảng hốt, vội vàng" },
      { w: "窓口", r: "まどぐち", m: "quầy (giao dịch, hướng dẫn)" },
      { w: "届けます", r: "とどけます", m: "gửi đến, nộp đến, giao đến" },
      { w: "拾います", r: "ひろいます", m: "nhặt lên" }
    ]
  },
  {
    title: "引っ越しの 挨拶",
    body: "先週、新しい アパートに 引っ越して きました。日本の 習慣では、引っ越したら 近所の 人に 挨拶に 行くと 聞いて いました。私は 少し 緊張しながら、隣の 部屋の ベルを 鳴らしました。出て きた おばあさんは 笑顔で「ようこそ」と 言って くれました。帰りに おばあさんは 手作りの 煮物を 持たせて くれました。新しい 生活の いい スタートに なりました。",
    qs: [
      {
        q: "筆者は どうして 隣の 部屋へ 行きましたか。",
        opts: ["煮物を もらうため", "引っ越しの 挨拶のため", "部屋を 見せて もらうため", "電話番号を 聞くため"],
        ans: 1,
        exp: "Đáp án đúng là 2: theo phong tục Nhật, chuyển đến nơi mới thì đi chào hàng xóm — tác giả「近所の 人に 挨拶に 行く」と聞いて nên bấm chuông nhà bên. Đáp án 1 (để nhận món hầm) là việc bất ngờ xảy ra lúc ra về, không phải mục đích ban đầu. Đáp án 3 và 4 không có trong bài."
      },
      {
        q: "おばあさんは 筆者に 何を しましたか。",
        opts: ["手作りの 煮物を 持たせて くれました", "部屋に 招待しました", "電話番号を 教えました", "引っ越しを 手伝いました"],
        ans: 0,
        exp: "Đáp án đúng là 1: lúc về, bà cụ「手作りの 煮物を 持たせて くれました」— gói cho món hầm tự nấu mang về. Đáp án 2, 3, 4 không xuất hiện trong bài."
      }
    ],
    vocab: [
      { w: "挨拶", r: "あいさつ", m: "chào hỏi" },
      { w: "習慣", r: "しゅうかん", m: "tập quán, phong tục" },
      { w: "隣", r: "となり", m: "bên cạnh, nhà bên" },
      { w: "煮物", r: "にもの", m: "món hầm, món ninh" },
      { w: "持たせます", r: "もたせます", m: "đưa cho mang theo" }
    ]
  },
  {
    title: "朝市で",
    body: "私の 町の 海の 近くには、朝市が あります。毎週 日曜日の 朝 六時から 始まって、九時には 終わって しまいます。新鮮な 魚や 野菜が 安く 買えるので、地元の 人だけでなく、観光客も たくさん 来ます。先週、私は 初めて 行って みました。魚屋の おじさんは「今日の おすすめは これだよ」と、大きな あじを 見せて くれました。家に 帰って 焼いて 食べたら、とても おいしかったです。",
    qs: [
      {
        q: "朝市は 何時から 何時までですか。",
        opts: ["六時から 十時まで", "六時から 九時まで", "七時から 九時まで", "五時から 八時まで"],
        ans: 1,
        exp: "Đáp án đúng là 2: bài viết「朝 六時から 始まって、九時には 終わって しまいます」— chợ sáng từ 6 giờ đến 9 giờ. Đáp án 1 sai giờ kết thúc. Đáp án 3 và 4 sai cả hai mốc so với bài."
      },
      {
        q: "魚屋の おじさんが おすすめした 魚は 何ですか。",
        opts: ["さば", "いか", "あじ", "まぐろ"],
        ans: 2,
        exp: "Đáp án đúng là 3 (あじ): ông bán cá nói「今日の おすすめは これだよ」và giơ「大きな あじ」— con cá nục lớn. Các loại cá ở đáp án 1, 2, 4 không xuất hiện trong bài."
      }
    ],
    vocab: [
      { w: "朝市", r: "あさいち", m: "chợ sáng, chợ sớm" },
      { w: "地元", r: "じもと", m: "địa phương, vùng quê sở tại" },
      { w: "観光客", r: "かんこうきゃく", m: "khách du lịch" },
      { w: "新鮮", r: "しんせん", m: "tươi, tươi mới" },
      { w: "おすすめ", r: "おすすめ", m: "món/người được giới thiệu, gợi ý" }
    ]
  },
  {
    title: "タクシーの 運転手さん",
    body: "先週の 金曜日の 夜、終電に 乗り遅れて しまったので、駅から タクシーに 乗りました。運転手さんは 優しい 人で、道の 途中、私の 町の 話を たくさん して くれました。家に 着くころには、タクシーに 乗る前の 疲れが 消えて いました。料金は 千八百円でしたが、運転手さんは「百円 まけて あげる」と 言いました。短い 時間でしたが、温かい 気持ちに なりました。",
    qs: [
      {
        q: "筆者は どうして タクシーに 乗りましたか。",
        opts: ["雨が 降って いたから", "終電に 乗り遅れたから", "荷物が 重かったから", "道が 分からなかったから"],
        ans: 1,
        exp: "Đáp án đúng là 2: bài viết「終電に 乗り遅れて しまったので」— lỡ chuyến tàu cuối nên phải đi taxi. Đáp án 1, 3, 4 (mưa, hành lý nặng, không biết đường) đều không xuất hiện trong bài."
      },
      {
        q: "運転手さんは 料金を どう しましたか。",
        opts: ["千八百円 ちょうど もらいました", "百円 まけて くれました", "二千円に しました", "無料に して くれました"],
        ans: 1,
        exp: "Đáp án đúng là 2: cước là 1.800 yên nhưng tài xế nói「百円 まけて あげる」— bớt cho 100 yên. Đáp án 1 bỏ qua chi tiết giảm giá này. Đáp án 3 và 4 không có trong bài."
      }
    ],
    vocab: [
      { w: "終電", r: "しゅうでん", m: "chuyến tàu cuối trong ngày" },
      { w: "乗り遅れます", r: "のりおくれます", m: "lỡ (tàu/xe)" },
      { w: "途中", r: "とちゅう", m: "dọc đường, giữa chừng" },
      { w: "まけます", r: "まけます", m: "bớt giá, giảm giá" },
      { w: "消えます", r: "きえます", m: "biến mất, tắt (đèn/lửa)" }
    ]
  }
];
