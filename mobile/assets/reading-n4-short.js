/* Đọc hiểu N4 — dạng bài Ngắn: 10 bài đọc TỰ VIẾT MỚI (không copy đề JLPT thật,
   không trùng ngân hàng đề thi của app). Chỉ dùng kiến thức đến N4: từ vựng /
   ngữ pháp Minna no Nihongo Sơ cấp 1+2 (〜たことがある、〜なければなりません、
   〜たら、普通形…), kanji đến N4, có furigana. Mỗi bài: đoạn văn + 2 câu hỏi
   trắc nghiệm (ans = chỉ số đáp án đúng, exp = giải thích tiếng Việt gồm vì
   sao đúng / vì sao các đáp án khác sai) + phần từ vựng cuối bài.
   Nạp lười từ index.html qua ensureReadData(). */
window.READ_N4_SHORT = [
  {
    title: "朝の ジョギング",
    body: "田中さんは 健康の ために、毎朝 ジョギングを しています。朝 六時に 起きて、近くの 公園を 三十分ぐらい 走ります。雨の 日は 走りません。家で 軽い 運動を します。ジョギングを 始めてから、体が 軽く なって、仕事も 前より はかどるように なりました。",
    qs: [
      {
        q: "田中さんは 雨の 日、何を しますか。",
        opts: ["公園を 走ります", "家で 軽い 運動を します", "六時に 起きません", "会社へ 行きます"],
        ans: 1,
        exp: "Đáp án đúng là 2: bài viết「雨の 日は 走りません。家で 軽い 運動を します」— ngày mưa không chạy, tập nhẹ ở nhà. Đáp án 1 là việc của ngày thường, không phải ngày mưa. Đáp án 3 (không dậy lúc 6 giờ) và 4 (đi làm) không có trong bài."
      },
      {
        q: "ジョギングを 始めてから、どう なりましたか。",
        opts: ["体が 重く なりました", "仕事が 忙しく なりました", "体が 軽く なって、仕事が はかどるように なりました", "朝 起きるのが 遅く なりました"],
        ans: 2,
        exp: "Đáp án đúng là 3: câu cuối bài nói「体が 軽く なって、仕事も 前より はかどるように なりました」— người nhẹ nhõm hơn và công việc trôi chảy hơn. Đáp án 1 ngược nghĩa (nặng). Đáp án 2 và 4 không xuất hiện trong bài."
      }
    ],
    vocab: [
      { w: "健康", r: "けんこう", m: "sức khỏe" },
      { w: "運動", r: "うんどう", m: "vận động, tập thể dục" },
      { w: "軽い", r: "かるい", m: "nhẹ" },
      { w: "始めてから", r: "はじめてから", m: "kể từ khi bắt đầu" },
      { w: "はかどります", r: "はかどります", m: "tiến triển trôi chảy (công việc)" }
    ]
  },
  {
    title: "初めての アルバイト",
    body: "わたしは 先月から コンビニで アルバイトを しています。初めての 日は とても 緊張しました。店長に 商品の 場所を 教えて もらいましたが、なかなか 覚えられませんでした。今は レジの 仕事も 一人で できるように なりました。お客さんに「ありがとう」と 言われると、うれしく なります。",
    qs: [
      {
        q: "初めての 日、わたしは どうでしたか。",
        opts: ["レジが 上手でした", "とても 緊張しました", "仕事を 休みました", "店長に 怒られました"],
        ans: 1,
        exp: "Đáp án đúng là 2 (とても 緊張しました): bài viết rõ ngày đầu tiên rất hồi hộp, được quản lý chỉ chỗ để hàng mà mãi không nhớ được. Đáp án 1 ngược với bài (dùng máy tính tiền một mình là chuyện của bây giờ). Đáp án 3 và 4 không có trong bài."
      },
      {
        q: "今、わたしは 何が できるように なりましたか。",
        opts: ["商品を 作ること", "一人で レジの 仕事を すること", "店を 開けること", "新しい 店員を 教えること"],
        ans: 1,
        exp: "Đáp án đúng là 2: bài viết「今は レジの 仕事も 一人で できるように なりました」— giờ đã tự làm được việc thu ngân một mình. Đáp án 1, 3, 4 (làm hàng hóa, mở cửa hàng, dạy nhân viên mới) đều không được nhắc đến."
      }
    ],
    vocab: [
      { w: "緊張します", r: "きんちょうします", m: "hồi hộp, căng thẳng" },
      { w: "店長", r: "てんちょう", m: "quản lý cửa hàng" },
      { w: "商品", r: "しょうひん", m: "hàng hóa, sản phẩm" },
      { w: "覚えます", r: "おぼえます", m: "nhớ, ghi nhớ, học thuộc" },
      { w: "レジ", r: "レジ", m: "máy tính tiền, quầy thu ngân" }
    ]
  },
  {
    title: "電車で 席を ゆずりました",
    body: "昨日の 帰り、電車は とても 混んで いました。わたしは 運よく 座ることが できました。次の 駅で おばあさんが 乗って 来ましたが、席は 空いて いませんでした。わたしは 立って、「どうぞ」と 言いました。おばあさんは 何回も「ありがとう」と 言って、笑顔で 座りました。",
    qs: [
      {
        q: "わたしは どうして 立ちましたか。",
        opts: ["降りる 駅に 着いたから", "おばあさんに 席を ゆずるため", "電車が 混んで いたから", "窓の 外を 見たかったから"],
        ans: 1,
        exp: "Đáp án đúng là 2: thấy bà cụ lên tàu mà không còn chỗ trống, người viết đứng dậy nhường ghế「立って、『どうぞ』と 言いました」. Đáp án 1 (đến ga xuống) trái với diễn biến bài. Đáp án 3 chỉ là hoàn cảnh (tàu đông), không phải lý do đứng dậy. Đáp án 4 không có trong bài."
      },
      {
        q: "おばあさんは どう しましたか。",
        opts: ["次の 駅で 降りました", "立った ままでした", "笑顔で 座りました", "わたしに お金を くれました"],
        ans: 2,
        exp: "Đáp án đúng là 3 (笑顔で 座りました): câu cuối bài nói bà cảm ơn nhiều lần rồi ngồi xuống với nụ cười. Đáp án 1 và 2 không được nhắc đến. Đáp án 4 (cho tiền) hoàn toàn không có trong bài."
      }
    ],
    vocab: [
      { w: "混みます", r: "こみます", m: "đông đúc, chật" },
      { w: "運よく", r: "うんよく", m: "may mắn thay" },
      { w: "空きます", r: "あきます", m: "trống, còn trống (chỗ)" },
      { w: "ゆずります", r: "ゆずります", m: "nhường (ghế, đường)" },
      { w: "笑顔", r: "えがお", m: "khuôn mặt cười, nụ cười" }
    ]
  },
  {
    title: "料理教室",
    body: "わたしは 料理が あまり 得意では ありません。先月から、週に 一回 料理教室に 通って います。先生は 優しくて、教え方が 上手です。昨日は 日本の カレーの 作り方を 習いました。家に 帰って、家族に 作って あげたら、「おいしい」と 言って もらえました。とても うれしかったです。",
    qs: [
      {
        q: "わたしは 料理教室に どのくらい 通って いますか。",
        opts: ["週に 二回", "週に 一回", "月に 一回", "毎日"],
        ans: 1,
        exp: "Đáp án đúng là 2 (週に 一回): bài viết「週に 一回 料理教室に 通って います」— mỗi tuần một buổi, từ tháng trước. Đáp án 1, 3, 4 đều sai tần suất so với bài."
      },
      {
        q: "家族は カレーを 食べて、何と 言いましたか。",
        opts: ["「からい」と 言いました", "「また 作って」とは 言いませんでした", "「おいしい」と 言いました", "何も 言いませんでした"],
        ans: 2,
        exp: "Đáp án đúng là 3: bài viết người viết nấu cho gia đình và được nói「『おいしい』と 言って もらえました」. Đáp án 1 (cay) không có trong bài. Đáp án 2 và 4 phủ định sai — gia đình có khen, và người viết rất vui vì điều đó."
      }
    ],
    vocab: [
      { w: "得意", r: "とくい", m: "giỏi, thạo (lĩnh vực sở trường)" },
      { w: "通います", r: "かよいます", m: "đi lại thường xuyên (học, làm)" },
      { w: "作り方", r: "つくりかた", m: "cách làm" },
      { w: "習います", r: "ならいます", m: "học (từ thầy, lớp học)" },
      { w: "優しい", r: "やさしい", m: "hiền, dịu dàng, tốt bụng" }
    ]
  },
  {
    title: "弟への プレゼント",
    body: "来週は 弟の 誕生日です。弟は サッカーが 大好きで、毎週末 練習して います。わたしは 弟に サッカーの ボールを あげようと 思って います。昨日、スポーツ店へ 行って、青い ボールを 買いました。三千五百円でした。弟が 喜んで くれると いいです。",
    qs: [
      {
        q: "わたしは 弟に 何を あげようと 思って いますか。",
        opts: ["サッカーの 靴", "サッカーの ボール", "サッカーの 本", "サッカーの シャツ"],
        ans: 1,
        exp: "Đáp án đúng là 2 (サッカーの ボール): bài viết「弟に サッカーの ボールを あげようと 思って います」và đã mua một quả bóng màu xanh. Đáp án 1, 3, 4 (giày, sách, áo) đều liên quan bóng đá nhưng không phải món quà trong bài."
      },
      {
        q: "ボールは いくらでしたか。",
        opts: ["三千円", "四千円", "三千五百円", "二千五百円"],
        ans: 2,
        exp: "Đáp án đúng là 3 (三千五百円): bài viết rõ「三千五百円でした」. Các mức giá ở đáp án 1, 2, 4 không xuất hiện trong bài."
      }
    ],
    vocab: [
      { w: "週末", r: "しゅうまつ", m: "cuối tuần" },
      { w: "練習します", r: "れんしゅうします", m: "luyện tập" },
      { w: "喜びます", r: "よろこびます", m: "vui mừng" },
      { w: "誕生日", r: "たんじょうび", m: "sinh nhật" },
      { w: "思います", r: "おもいます", m: "nghĩ, định (〜ようと 思います)" }
    ]
  },
  {
    title: "雨の 週末",
    body: "今週の 土曜日、友達と ピクニックに 行く 約束でした。しかし、朝から 強い 雨が 降って いました。天気予報では、午後も 雨だと 言って いました。ですから、ピクニックは やめて、家で 映画を 見ることに しました。友達が 作って くれた お弁当を 食べながら、楽しく 過ごしました。",
    qs: [
      {
        q: "土曜日、ピクニックに 行きましたか。",
        opts: ["雨でしたが 行きました", "行かないで、家で 映画を 見ました", "午後に 行きました", "友達の 家で しました"],
        ans: 1,
        exp: "Đáp án đúng là 2: mưa to từ sáng và dự báo chiều vẫn mưa nên「ピクニックは やめて、家で 映画を 見ることに しました」— hủy dã ngoại, ở nhà xem phim. Đáp án 1 và 3 trái với quyết định trong bài. Đáp án 4 sai địa điểm (ở nhà của người viết, không phải nhà bạn)."
      },
      {
        q: "お弁当は だれが 作りましたか。",
        opts: ["わたし", "母", "友達", "店の 人"],
        ans: 2,
        exp: "Đáp án đúng là 3 (友達): bài viết「友達が 作って くれた お弁当」— hộp cơm do người bạn làm cho. Đáp án 1, 2, 4 không được nhắc đến trong vai trò này."
      }
    ],
    vocab: [
      { w: "約束", r: "やくそく", m: "lời hẹn, cuộc hẹn" },
      { w: "天気予報", r: "てんきよほう", m: "dự báo thời tiết" },
      { w: "やめます", r: "やめます", m: "bỏ, thôi, hủy (kế hoạch)" },
      { w: "過ごします", r: "すごします", m: "trải qua, sống qua (thời gian)" },
      { w: "弁当", r: "べんとう", m: "cơm hộp" }
    ]
  },
  {
    title: "新しい アパート",
    body: "わたしは 先月、新しい アパートに 引っ越しました。アパートは 駅から 歩いて 五分で、とても 便利です。部屋は 前の 部屋より 少し 狭いですが、日当たりが よくて 明るいです。近くに スーパーや 公園も あって、生活しやすいです。家賃は 八万円で、前の 部屋と 同じです。",
    qs: [
      {
        q: "新しい 部屋は 前の 部屋と 比べて どうですか。",
        opts: ["広いですが 暗いです", "少し 狭いですが 明るいです", "同じ 広さです", "狭くて 暗いです"],
        ans: 1,
        exp: "Đáp án đúng là 2: bài viết「部屋は 前の 部屋より 少し 狭いですが、日当たりが よくて 明るいです」— hơi hẹp hơn phòng cũ nhưng nhiều nắng, sáng sủa. Đáp án 1 và 4 sai ở cả hai vế. Đáp án 3 sai vì bài nói hẹp hơn （少し 狭い), thứ bằng phòng cũ là tiền thuê nhà chứ không phải diện tích."
      },
      {
        q: "家賃は いくらですか。",
        opts: ["七万円", "九万円", "八万円", "八万五千円"],
        ans: 2,
        exp: "Đáp án đúng là 3 (八万円): câu cuối bài nói「家賃は 八万円で、前の 部屋と 同じです」. Các mức tiền ở đáp án 1, 2, 4 không xuất hiện trong bài."
      }
    ],
    vocab: [
      { w: "引っ越します", r: "ひっこします", m: "chuyển nhà" },
      { w: "日当たり", r: "ひあたり", m: "sự đón nắng (của phòng/nhà)" },
      { w: "家賃", r: "やちん", m: "tiền thuê nhà" },
      { w: "生活します", r: "せいかつします", m: "sinh hoạt, sống" },
      { w: "比べます", r: "くらべます", m: "so sánh" }
    ]
  },
  {
    title: "犬が 病気に なりました",
    body: "先週、うちの 犬が 元気が なくて、ご飯も 食べませんでした。心配だったので、動物の 病院へ 連れて 行きました。先生に 見て もらったら、お腹の 調子が 悪いだけだと 分かりました。薬を もらって、三日 飲ませたら、元気に なりました。今は また たくさん 食べて、走り回って います。",
    qs: [
      {
        q: "犬は どうして 病院へ 行きましたか。",
        opts: ["足を けがしたから", "元気が なくて、ご飯も 食べなかったから", "薬が 欲しかったから", "散歩に 行きたかったから"],
        ans: 1,
        exp: "Đáp án đúng là 2: bài viết chó「元気が なくて、ご飯も 食べませんでした」nên chủ lo lắng đưa đi bệnh viện thú y. Đáp án 1 (bị thương ở chân) không có trong bài. Đáp án 3 ngược trình tự — thuốc là do bác sĩ kê sau khi khám. Đáp án 4 không liên quan."
      },
      {
        q: "犬は 何日 薬を 飲んだら 元気に なりましたか。",
        opts: ["一日", "二日", "一週間", "三日"],
        ans: 3,
        exp: "Đáp án đúng là 4 (三日): bài viết「薬を もらって、三日 飲ませたら、元気に なりました」— uống thuốc ba ngày thì khỏe lại. Đáp án 1, 2, 3 sai số ngày so với bài."
      }
    ],
    vocab: [
      { w: "元気", r: "げんき", m: "khỏe, khỏe mạnh" },
      { w: "心配", r: "しんぱい", m: "lo lắng" },
      { w: "連れて行きます", r: "つれていきます", m: "dẫn theo, đưa đi cùng" },
      { w: "調子", r: "ちょうし", m: "tình trạng (sức khỏe, máy móc)" },
      { w: "薬", r: "くすり", m: "thuốc" }
    ]
  },
  {
    title: "父の 趣味",
    body: "父の 趣味は 写真を 撮ることです。休みの 日には、カメラを 持って 山や 海へ 出かけます。先週は 家族の 写真を たくさん 撮って くれました。父の 写真は 家族の 部屋に かざって あります。わたしも 父に カメラの 使い方を 教えて もらって、自分で 撮れるように なりたいです。",
    qs: [
      {
        q: "父は 休みの 日、何を しますか。",
        opts: ["家で 写真を 見ます", "カメラを 持って 山や 海へ 出かけます", "新しい カメラを 買います", "家族と 映画を 見ます"],
        ans: 1,
        exp: "Đáp án đúng là 2: bài viết「休みの 日には、カメラを 持って 山や 海へ 出かけます」— ngày nghỉ bố mang máy ảnh lên núi, ra biển chụp ảnh. Đáp án 1, 3, 4 không được nhắc đến trong bài."
      },
      {
        q: "わたしは 何が できるように なりたいですか。",
        opts: ["自分で 写真を 撮ること", "カメラを 作ること", "山に 登ること", "写真を 売ること"],
        ans: 0,
        exp: "Đáp án đúng là 1: câu cuối bài nói muốn được bố dạy cách dùng máy ảnh để「自分で 撮れるように なりたい」— tự mình chụp được ảnh. Đáp án 2, 3, 4 (chế tạo máy ảnh, leo núi, bán ảnh) không có trong bài."
      }
    ],
    vocab: [
      { w: "趣味", r: "しゅみ", m: "sở thích" },
      { w: "撮ります", r: "とります", m: "chụp (ảnh)" },
      { w: "出かけます", r: "でかけます", m: "ra ngoài, đi ra" },
      { w: "かざります", r: "かざります", m: "trưng bày, trang trí" },
      { w: "使い方", r: "つかいかた", m: "cách sử dụng" }
    ]
  },
  {
    title: "雪の 日の 約束",
    body: "昨日は 大雪でした。電車が 遅れて、友達との 約束の 時間に 間に合いませんでした。わたしは 駅に 着いてから、急いで 走りました。友達は 一時間も 待って いて くれました。「ごめんね」と 言ったら、友達は「大丈夫。雪だから 仕方がないよ」と 笑って 言いました。",
    qs: [
      {
        q: "わたしは どうして 約束の 時間に 間に合いませんでしたか。",
        opts: ["寝坊したから", "道に 迷ったから", "雪で 電車が 遅れたから", "仕事が 終わらなかったから"],
        ans: 2,
        exp: "Đáp án đúng là 3: bài viết「電車が 遅れて、友達との 約束の 時間に 間に合いませんでした」mà nguyên nhân là 大雪 (tuyết rơi dày). Đáp án 1 (ngủ quên), 2 (lạc đường), 4 (chưa xong việc) đều không xuất hiện trong bài."
      },
      {
        q: "友達は どのくらい 待って いましたか。",
        opts: ["三十分", "一時間", "二時間", "十分"],
        ans: 1,
        exp: "Đáp án đúng là 2 (一時間): bài viết「友達は 一時間も 待って いて くれました」— bạn đã đợi hẳn một tiếng. Các khoảng thời gian ở đáp án 1, 3, 4 không khớp với bài."
      }
    ],
    vocab: [
      { w: "大雪", r: "おおゆき", m: "tuyết rơi dày" },
      { w: "遅れます", r: "おくれます", m: "bị chậm, bị trễ" },
      { w: "間に合います", r: "まにあいます", m: "kịp giờ" },
      { w: "仕方がない", r: "しかたがない", m: "không có cách nào khác, đành vậy" },
      { w: "急ぎます", r: "いそぎます", m: "vội, gấp" }
    ]
  }
];
