/* Đọc hiểu N5 — dạng bài Ngắn: 10 bài đọc TỰ VIẾT MỚI (không copy đề JLPT thật,
   không trùng ngân hàng đề thi của app). Chỉ dùng kiến thức N5: kanji N5,
   từ vựng Minna no Nihongo Sơ cấp 1, ngữ pháp N5. Mỗi bài: đoạn văn + 2 câu hỏi
   trắc nghiệm (ans = chỉ số đáp án đúng, exp = giải thích tiếng Việt gồm vì sao
   đúng / vì sao các đáp án khác sai) + phần từ vựng cuối bài.
   Nạp lười từ index.html qua ensureReadData(). */
window.READ_N5 = [
  {
    title: "わたしの かぞく",
    body: "わたしの かぞくは 四人です。父と 母と 兄と わたしです。父は 会社員です。毎日 電車で 会社へ 行きます。母は 学校の 先生です。兄は 大学生です。わたしは 高校生です。日曜日、かぞくで 公園へ 行きます。",
    qs: [
      {
        q: "お父さんの 仕事は 何ですか。",
        opts: ["会社員です", "学校の 先生です", "大学生です", "高校生です"],
        ans: 0,
        exp: "Đáp án đúng là 1 (会社員です): bài viết rõ「父は 会社員です」— bố là nhân viên công ty, mỗi ngày đi tàu điện đến công ty. Đáp án 2 là nghề của mẹ (先生). Đáp án 3 là của anh trai (大学生). Đáp án 4 là của người viết (高校生) — cả ba đều là việc của người khác trong nhà, không phải của bố."
      },
      {
        q: "日曜日、かぞくは どこへ 行きますか。",
        opts: ["学校へ 行きます", "会社へ 行きます", "公園へ 行きます", "家に います"],
        ans: 2,
        exp: "Đáp án đúng là 3 (公園へ 行きます): câu cuối bài nói「日曜日、かぞくで 公園へ 行きます」. Đáp án 1 (学校) là nơi mẹ làm việc, đáp án 2 (会社) là nơi bố đi làm vào ngày thường — bài không nói Chủ nhật cả nhà đến hai nơi đó. Đáp án 4 (ở nhà) trái ngược với bài."
      }
    ],
    vocab: [
      { w: "家族", r: "かぞく", m: "gia đình" },
      { w: "会社員", r: "かいしゃいん", m: "nhân viên công ty" },
      { w: "大学生", r: "だいがくせい", m: "sinh viên đại học" },
      { w: "高校生", r: "こうこうせい", m: "học sinh cấp ba (THPT)" },
      { w: "公園", r: "こうえん", m: "công viên" }
    ]
  },
  {
    title: "わたしの 朝",
    body: "わたしは 毎朝 六時に 起きます。顔を 洗って、朝ごはんを 食べます。朝ごはんは パンと 牛乳です。七時半に 家を 出ます。学校まで バスで 三十分 かかります。授業は 八時半から 始まります。",
    qs: [
      {
        q: "わたしは 何時に 家を 出ますか。",
        opts: ["六時", "七時", "七時半", "八時半"],
        ans: 2,
        exp: "Đáp án đúng là 3 (七時半): bài viết「七時半に 家を 出ます」. Đáp án 1 (六時) là giờ thức dậy, không phải giờ ra khỏi nhà. Đáp án 4 (八時半) là giờ bắt đầu tiết học. Đáp án 2 (七時) không xuất hiện trong bài."
      },
      {
        q: "わたしは 学校へ 何で 行きますか。",
        opts: ["電車で 行きます", "バスで 行きます", "自転車で 行きます", "歩いて 行きます"],
        ans: 1,
        exp: "Đáp án đúng là 2 (バスで 行きます): bài viết「学校まで バスで 三十分 かかります」— đi xe buýt mất 30 phút. Các phương tiện ở đáp án 1, 3, 4 (tàu điện, xe đạp, đi bộ) đều không được nhắc đến trong bài."
      }
    ],
    vocab: [
      { w: "起きます", r: "おきます", m: "thức dậy" },
      { w: "顔", r: "かお", m: "khuôn mặt" },
      { w: "牛乳", r: "ぎゅうにゅう", m: "sữa bò" },
      { w: "かかります", r: "かかります", m: "tốn, mất (thời gian/tiền)" },
      { w: "授業", r: "じゅぎょう", m: "tiết học, giờ học" }
    ]
  },
  {
    title: "友達と 買い物",
    body: "土曜日、わたしは 友達と デパートへ 行きました。わたしは かばんを 買いました。三千円でした。友達は 傘を 買いました。傘は 千五百円でした。それから、二人で コーヒーを 飲みました。",
    qs: [
      {
        q: "わたしは 何を 買いましたか。",
        opts: ["傘", "コーヒー", "かばん", "時計"],
        ans: 2,
        exp: "Đáp án đúng là 3 (かばん): bài viết「わたしは かばんを 買いました」. Đáp án 1 (傘) là món bạn của người viết mua, không phải người viết. Đáp án 2 (コーヒー) là đồ hai người uống sau đó, không phải đồ mua ở quầy hàng. Đáp án 4 (時計) không có trong bài."
      },
      {
        q: "傘は いくらでしたか。",
        opts: ["三千円", "千円", "二千円", "千五百円"],
        ans: 3,
        exp: "Đáp án đúng là 4 (千五百円): bài viết「傘は 千五百円でした」. Đáp án 1 (三千円) là giá của cái cặp mà người viết mua — rất dễ nhầm nếu đọc lướt. Đáp án 2 và 3 không xuất hiện trong bài."
      }
    ],
    vocab: [
      { w: "デパート", r: "デパート", m: "trung tâm thương mại" },
      { w: "かばん", r: "かばん", m: "cặp, túi xách" },
      { w: "傘", r: "かさ", m: "cái ô (dù)" },
      { w: "それから", r: "それから", m: "sau đó, rồi thì" },
      { w: "二人", r: "ふたり", m: "hai người" }
    ]
  },
  {
    title: "今日の 天気",
    body: "今日は 朝から 雨でした。でも、昼から 晴れました。午後、そらは 青くて、とても きれいでした。明日も 晴れます。明日は 友達と 山へ 行きます。たのしみです。",
    qs: [
      {
        q: "今日、昼からの 天気は どうでしたか。",
        opts: ["雨でした", "晴れました", "雪でした", "くもりでした"],
        ans: 1,
        exp: "Đáp án đúng là 2 (晴れました): bài viết「でも、昼から 晴れました」— từ trưa trời tạnh, nắng lên. Đáp án 1 (雨でした) đúng với buổi sáng chứ không phải từ trưa. Đáp án 3 (雪) và 4 (くもり) không được nhắc đến trong bài."
      },
      {
        q: "明日、わたしは 何を しますか。",
        opts: ["家で 勉強します", "デパートへ 行きます", "友達と 山へ 行きます", "一人で 山へ 行きます"],
        ans: 2,
        exp: "Đáp án đúng là 3 (友達と 山へ 行きます): bài viết「明日は 友達と 山へ 行きます」. Đáp án 4 cũng nói đi núi nhưng là đi một mình (一人で) — sai chi tiết “cùng bạn”. Đáp án 1 và 2 không có trong bài."
      }
    ],
    vocab: [
      { w: "晴れます", r: "はれます", m: "(trời) tạnh mưa, nắng đẹp" },
      { w: "午後", r: "ごご", m: "buổi chiều" },
      { w: "空", r: "そら", m: "bầu trời" },
      { w: "明日", r: "あした", m: "ngày mai" },
      { w: "山", r: "やま", m: "núi" }
    ]
  },
  {
    title: "図書館",
    body: "わたしの 学校の 近くに 図書館が あります。わたしは よく ここで 本を 読みます。図書館は 朝 九時から 夜 七時までです。日曜日は 休みです。本は 二週間 借りることが できます。",
    qs: [
      {
        q: "図書館は 何時までですか。",
        opts: ["九時", "八時", "七時", "六時"],
        ans: 2,
        exp: "Đáp án đúng là 3 (七時): bài viết「朝 九時から 夜 七時までです」— mở đến 7 giờ tối. Đáp án 1 (九時) là giờ mở cửa buổi sáng, không phải giờ đóng cửa. Đáp án 2 và 4 không xuất hiện trong bài."
      },
      {
        q: "本は どのくらい 借りることが できますか。",
        opts: ["一週間", "三日", "一か月", "二週間"],
        ans: 3,
        exp: "Đáp án đúng là 4 (二週間): câu cuối bài nói「本は 二週間 借りることが できます」— mượn được hai tuần. Các khoảng thời gian ở đáp án 1, 2, 3 đều không có trong bài."
      }
    ],
    vocab: [
      { w: "近く", r: "ちかく", m: "gần, vùng gần" },
      { w: "図書館", r: "としょかん", m: "thư viện" },
      { w: "休み", r: "やすみ", m: "ngày nghỉ, sự nghỉ" },
      { w: "借ります", r: "かります", m: "mượn, vay" },
      { w: "週間", r: "しゅうかん", m: "tuần (〜週間: … tuần)" }
    ]
  },
  {
    title: "母の 誕生日",
    body: "来週の 水曜日は 母の 誕生日です。わたしは 母に 花を あげたいです。兄と ケーキを 作ります。父は 仕事で 忙しいですが、夜は みんなで レストランで 食事を します。",
    qs: [
      {
        q: "母の 誕生日は いつですか。",
        opts: ["今週の 水曜日", "来週の 水曜日", "来週の 木曜日", "今日"],
        ans: 1,
        exp: "Đáp án đúng là 2 (来週の 水曜日): câu đầu bài nói「来週の 水曜日は 母の 誕生日です」. Đáp án 1 sai ở 来週/今週 (tuần sau — tuần này). Đáp án 3 sai thứ trong tuần (木曜日 — 水曜日). Đáp án 4 (hôm nay) không có cơ sở trong bài."
      },
      {
        q: "わたしは 母に 何を あげたいですか。",
        opts: ["ケーキ", "本", "花", "かばん"],
        ans: 2,
        exp: "Đáp án đúng là 3 (花): bài viết「わたしは 母に 花を あげたいです」. Đáp án 1 (ケーキ) là món người viết làm cùng anh trai để cả nhà ăn, không phải món “tặng mẹ” theo câu hỏi. Đáp án 2 và 4 không xuất hiện trong bài."
      }
    ],
    vocab: [
      { w: "誕生日", r: "たんじょうび", m: "sinh nhật" },
      { w: "あげます", r: "あげます", m: "tặng, cho (người khác)" },
      { w: "忙しい", r: "いそがしい", m: "bận rộn" },
      { w: "食事", r: "しょくじ", m: "bữa ăn; ăn uống" },
      { w: "来週", r: "らいしゅう", m: "tuần sau" }
    ]
  },
  {
    title: "わたしの 部屋",
    body: "わたしの 部屋は 小さいですが、明るいです。部屋に 机と ベッドと ほんだなが あります。机の 上に パソコンと 本が あります。まどの 近くに 花が あります。わたしは この 部屋が 大好きです。",
    qs: [
      {
        q: "机の 上に 何が ありますか。",
        opts: ["花", "テレビ", "電話", "パソコンと 本"],
        ans: 3,
        exp: "Đáp án đúng là 4 (パソコンと 本): bài viết「机の 上に パソコンと 本が あります」. Đáp án 1 (花) có trong phòng nhưng ở gần cửa sổ (まどの 近く), không phải trên bàn. Đáp án 2 và 3 không được nhắc đến."
      },
      {
        q: "わたしの 部屋は どうですか。",
        opts: ["大きくて 明るいです", "小さいですが 明るいです", "小さくて くらいです", "新しくて 大きいです"],
        ans: 1,
        exp: "Đáp án đúng là 2 (小さいですが 明るいです): câu đầu bài nói「部屋は 小さいですが、明るいです」— phòng nhỏ nhưng sáng. Đáp án 1 sai vì phòng không lớn. Đáp án 3 sai vì phòng sáng chứ không tối (くらい). Đáp án 4 (mới và lớn) không có trong bài."
      }
    ],
    vocab: [
      { w: "部屋", r: "へや", m: "căn phòng" },
      { w: "明るい", r: "あかるい", m: "sáng sủa" },
      { w: "机", r: "つくえ", m: "bàn (học/làm việc)" },
      { w: "大好き", r: "だいすき", m: "rất thích" },
      { w: "窓", r: "まど", m: "cửa sổ" }
    ]
  },
  {
    title: "水泳",
    body: "わたしは スポーツが 好きです。とくに 水泳が 好きです。毎週 土曜日に プールへ 行きます。一時間ぐらい 泳ぎます。そのあと、シャワーを あびて、家へ 帰ります。とても きもちが いいです。",
    qs: [
      {
        q: "わたしは 毎週 何曜日に プールへ 行きますか。",
        opts: ["金曜日", "土曜日", "日曜日", "月曜日"],
        ans: 1,
        exp: "Đáp án đúng là 2 (土曜日): bài viết「毎週 土曜日に プールへ 行きます」. Ba thứ còn lại (đáp án 1, 3, 4) đều không xuất hiện trong bài."
      },
      {
        q: "プールで どのくらい 泳ぎますか。",
        opts: ["三十分ぐらい", "二時間ぐらい", "一時間ぐらい", "三時間ぐらい"],
        ans: 2,
        exp: "Đáp án đúng là 3 (一時間ぐらい): bài viết「一時間ぐらい 泳ぎます」— bơi khoảng một tiếng. Các khoảng thời gian ở đáp án 1, 2, 4 đều không có trong bài."
      }
    ],
    vocab: [
      { w: "水泳", r: "すいえい", m: "bơi lội" },
      { w: "毎週", r: "まいしゅう", m: "mỗi tuần" },
      { w: "泳ぎます", r: "およぎます", m: "bơi" },
      { w: "帰ります", r: "かえります", m: "trở về (nhà)" },
      { w: "気持ち", r: "きもち", m: "cảm giác, tâm trạng" }
    ]
  },
  {
    title: "電車で 大学へ",
    body: "わたしは 毎日 電車で 大学へ 行きます。駅から 大学まで 二十分 かかります。電車の 中で 本を 読んだり、音楽を 聞いたり します。今朝は 電車が おくれて、授業に ちこくしました。",
    qs: [
      {
        q: "駅から 大学まで 電車で どのくらい かかりますか。",
        opts: ["十分", "三十分", "一時間", "二十分"],
        ans: 3,
        exp: "Đáp án đúng là 4 (二十分): bài viết「駅から 大学まで 二十分 かかります」. Các khoảng thời gian ở đáp án 1, 2, 3 đều không xuất hiện trong bài."
      },
      {
        q: "今朝は どうでしたか。",
        opts: ["早く 大学に 着きました", "電車の 中で 寝ました", "電車が おくれて、授業に ちこくしました", "本を たくさん 読みました"],
        ans: 2,
        exp: "Đáp án đúng là 3: câu cuối bài nói「今朝は 電車が おくれて、授業に ちこくしました」— sáng nay tàu bị chậm nên đến lớp muộn. Đáp án 1 ngược hoàn toàn với bài. Đáp án 2 (ngủ trên tàu) không có trong bài. Đáp án 4: bài chỉ nói thường đọc sách trên tàu (thói quen hằng ngày), không nói sáng nay đọc nhiều sách."
      }
    ],
    vocab: [
      { w: "大学", r: "だいがく", m: "trường đại học" },
      { w: "駅", r: "えき", m: "nhà ga" },
      { w: "音楽", r: "おんがく", m: "âm nhạc" },
      { w: "遅れます", r: "おくれます", m: "bị chậm, bị trễ" },
      { w: "遅刻します", r: "ちこくします", m: "đi muộn, đến trễ" }
    ]
  },
  {
    title: "田中さんへの 手紙",
    body: "田中さん、お元気ですか。わたしは 元気です。来月の 十五日に 京都へ 行きます。京都で おてらを 見たり、写真を とったり したいです。田中さんも 一緒に 行きませんか。返事を 待っています。山田より。",
    qs: [
      {
        q: "山田さんは いつ 京都へ 行きますか。",
        opts: ["今月の 十五日", "来月の 十五日", "来週の 土曜日", "明日"],
        ans: 1,
        exp: "Đáp án đúng là 2 (来月の 十五日): thư viết「来月の 十五日に 京都へ 行きます」. Đáp án 1 sai ở 来月/今月 (tháng sau — tháng này), ngày 15 là đúng. Đáp án 3 và 4 không xuất hiện trong thư."
      },
      {
        q: "山田さんは 京都で 何を したいですか。",
        opts: ["買い物を したいです", "友達に 会いたいです", "勉強を したいです", "おてらを 見たり、写真を とったり したいです"],
        ans: 3,
        exp: "Đáp án đúng là 4: thư viết「京都で おてらを 見たり、写真を とったり したいです」— muốn ngắm chùa và chụp ảnh. Đáp án 1, 2, 3 đều là hoạt động không được nhắc đến trong thư."
      }
    ],
    vocab: [
      { w: "元気", r: "げんき", m: "khỏe, khỏe mạnh" },
      { w: "お寺", r: "おてら", m: "chùa" },
      { w: "写真", r: "しゃしん", m: "bức ảnh" },
      { w: "一緒に", r: "いっしょに", m: "cùng nhau" },
      { w: "返事", r: "へんじ", m: "hồi âm, sự trả lời" }
    ]
  }
];
