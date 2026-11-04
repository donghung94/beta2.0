/* Đọc hiểu N5 — dạng Tìm thông tin: 10 bài TỰ VIẾT MỚI (thông báo, tờ rơi, lịch
   trình — không copy đề JLPT thật, không trùng ngân hàng đề thi của app).
   Chỉ dùng kiến thức N5 (từ vựng/ngữ pháp Minna Sơ cấp 1; chữ Hán ngoài mức
   thông dụng sơ cấp viết kana). Câu hỏi kiểu tìm đúng thông tin trong bài.
   Mỗi bài 2 câu hỏi × 4 đáp án, có giải thích tiếng Việt + từ vựng cuối bài.
   Nạp lười từ index.html qua ensureReadData(). */
window.READ_N5_INFO = [
  {
    title: "スーパーの セール",
    body: "スーパー「ひまわり」セールのお知らせ\n十月五日（土）から 十月七日（月）まで\nやさいと くだものは 二十パーセント 安くなります。\n魚は 十パーセント 安くなります。\n時間は 朝 九時から 夜 九時までです。\nぜひ 来てください。",
    qs: [
      {
        q: "セールは いつから いつまでですか。",
        opts: ["十月五日から 十月六日まで", "十月五日から 十月七日まで", "十月六日から 十月七日まで", "十月四日から 十月七日まで"],
        ans: 1,
        exp: "Đáp án đúng là 2: tờ rơi ghi rõ「十月五日（土）から 十月七日（月）まで」— từ 5/10 đến 7/10. Đáp án 1 thiếu ngày cuối, đáp án 3 sai ngày bắt đầu, đáp án 4 thêm ngày 4/10 không có trong bài."
      },
      {
        q: "何が 二十パーセント 安くなりますか。",
        opts: ["魚", "肉", "やさいと くだもの", "パンと 牛乳"],
        ans: 2,
        exp: "Đáp án đúng là 3 (やさいと くだもの): bài viết「やさいと くだものは 二十パーセント 安くなります」. Đáp án 1 (魚) chỉ giảm 10%, không phải 20%. Đáp án 2 và 4 không được nhắc đến trong tờ rơi."
      }
    ],
    vocab: [
      { w: "お知らせ", r: "おしらせ", m: "thông báo" },
      { w: "安い", r: "やすい", m: "rẻ" },
      { w: "魚", r: "さかな", m: "cá" },
      { w: "時間", r: "じかん", m: "thời gian, giờ giấc" },
      { w: "ぜひ", r: "ぜひ", m: "nhất định, rất (mời/khuyên)" }
    ]
  },
  {
    title: "プールの お知らせ",
    body: "市民プールのお知らせ\nプールは 六月一日から 八月三十一日まで 開きます。\n時間： 朝 九時から 夕方 六時まで\n休み： 火曜日\nりょうきん： 大人 五百円、子ども 二百円\n水の中では 走らないで ください。",
    qs: [
      {
        q: "プールの 休みは 何曜日ですか。",
        opts: ["月曜日", "水曜日", "木曜日", "火曜日"],
        ans: 3,
        exp: "Đáp án đúng là 4 (火曜日): dòng「休み： 火曜日」ghi rõ ngày nghỉ là thứ Ba. Ba thứ còn lại (đáp án 1, 2, 3) không xuất hiện trong thông báo."
      },
      {
        q: "子どもの りょうきんは いくらですか。",
        opts: ["五百円", "二百円", "三百円", "百円"],
        ans: 1,
        exp: "Đáp án đúng là 2 (二百円): bài viết「子ども 二百円」— trẻ em 200 yên. Đáp án 1 (五百円) là giá của người lớn, rất dễ nhầm nếu đọc lướt. Đáp án 3 và 4 không có trong bài."
      }
    ],
    vocab: [
      { w: "開きます", r: "ひらきます", m: "mở (cửa, hoạt động)" },
      { w: "休み", r: "やすみ", m: "ngày nghỉ" },
      { w: "料金", r: "りょうきん", m: "phí, cước" },
      { w: "大人", r: "おとな", m: "người lớn" },
      { w: "走ります", r: "はしります", m: "chạy" }
    ]
  },
  {
    title: "バスの お知らせ",
    body: "駅前から 学校までの バスのお知らせ\nバスは 駅前を 八時、八時二十分、八時四十分に 出ます。\n学校まで 十五分 かかります。\nバスの りょうきんは 百八十円です。\n学生は 学生しょうを 見せて ください。百二十円に なります。",
    qs: [
      {
        q: "八時二十分の バスは 何時に 学校に 着きますか。",
        opts: ["八時三十分", "八時三十五分", "八時四十分", "八時五十分"],
        ans: 1,
        exp: "Đáp án đúng là 2 (八時三十五分): xe đi mất 15 phút, xuất phát 8:20 thì đến nơi 8:35. Đáp án 1 và 3 là các mốc giờ xuất phát khác trong bài, không phải giờ đến. Đáp án 4 (8:50) không có cơ sở tính nào trong bài."
      },
      {
        q: "学生の バスの りょうきんは いくらですか。",
        opts: ["百八十円", "百五十円", "百円", "百二十円"],
        ans: 3,
        exp: "Đáp án đúng là 4 (百二十円): bài viết học sinh trình thẻ học sinh thì「百二十円に なります」. Đáp án 1 (百八十円) là giá vé thường, không phải giá cho học sinh. Đáp án 2 và 3 không xuất hiện trong bài."
      }
    ],
    vocab: [
      { w: "出ます", r: "でます", m: "xuất phát, ra" },
      { w: "着きます", r: "つきます", m: "đến nơi" },
      { w: "学生", r: "がくせい", m: "học sinh, sinh viên" },
      { w: "見せます", r: "みせます", m: "cho xem, trình ra" },
      { w: "かかります", r: "かかります", m: "tốn, mất (thời gian/tiền)" }
    ]
  },
  {
    title: "えいがの お知らせ",
    body: "えいが「空の たび」のお知らせ\n場所： 市民ホール\n日： 十一月十日（日）\n時間： 午前 十時、午後 二時、午後 七時\nりょうきん： 大人 千円、高校生 五百円\n中学生と 小学生は 三百円です。",
    qs: [
      {
        q: "えいがは 一日 何回 ありますか。",
        opts: ["一回", "二回", "三回", "四回"],
        ans: 2,
        exp: "Đáp án đúng là 3 (三回): tờ rơi liệt kê ba suất chiếu「午前 十時、午後 二時、午後 七時」— 10 giờ sáng, 2 giờ chiều, 7 giờ tối, tổng cộng 3 suất. Đáp án 1, 2, 4 đều đếm sai số suất trong bài."
      },
      {
        q: "高校生の りょうきんは いくらですか。",
        opts: ["千円", "三百円", "五百円", "八百円"],
        ans: 2,
        exp: "Đáp án đúng là 3 (五百円): bài viết「高校生 五百円」. Đáp án 1 (千円) là giá người lớn; đáp án 2 (三百円) là giá cho học sinh cấp 1, cấp 2 — hai nhóm khác với học sinh cấp ba. Đáp án 4 không có trong bài."
      }
    ],
    vocab: [
      { w: "映画", r: "えいが", m: "phim, điện ảnh" },
      { w: "場所", r: "ばしょ", m: "địa điểm, nơi chốn" },
      { w: "午前", r: "ごぜん", m: "buổi sáng (trước 12 giờ)" },
      { w: "高校生", r: "こうこうせい", m: "học sinh cấp ba (THPT)" },
      { w: "回", r: "かい", m: "lần, suất (〜回)" }
    ]
  },
  {
    title: "日本語クラスの お知らせ",
    body: "日本語クラスのお知らせ\n水曜日と 金曜日の 夜 七時から 八時半まで\n場所： としょかんの 二階\nりょうきん： ただ（お金は いりません）\nだれでも 来ることが できます。\n本は クラスで 貸します。えんぴつと ノートを 持って 来て ください。",
    qs: [
      {
        q: "日本語クラスは 何曜日に ありますか。",
        opts: ["月曜日と 水曜日", "水曜日と 金曜日", "木曜日と 金曜日", "火曜日と 木曜日"],
        ans: 1,
        exp: "Đáp án đúng là 2 (水曜日と 金曜日): dòng đầu ghi rõ lớp học vào「水曜日と 金曜日」buổi tối. Các đáp án còn lại đều thay một trong hai thứ này bằng thứ khác không có trong bài."
      },
      {
        q: "クラスの 本は どうしますか。",
        opts: ["自分で 買います", "家から 持って 来ます", "クラスで 借ります", "本は 使いません"],
        ans: 2,
        exp: "Đáp án đúng là 3 (クラスで 借ります): bài viết「本は クラスで 貸します」— lớp cho mượn sách, tức học viên mượn sách tại lớp. Đáp án 1 (tự mua) và 2 (mang từ nhà) trái với bài. Đáp án 4 sai vì lớp có dùng sách."
      }
    ],
    vocab: [
      { w: "貸します", r: "かします", m: "cho mượn, cho vay" },
      { w: "ただ", r: "ただ", m: "miễn phí" },
      { w: "鉛筆", r: "えんぴつ", m: "bút chì" },
      { w: "持って来ます", r: "もってきます", m: "mang đến" },
      { w: "二階", r: "にかい", m: "tầng hai" }
    ]
  },
  {
    title: "びょういんの お知らせ",
    body: "さくらクリニックのお知らせ\n午前： 九時から 十二時まで\n午後： 二時から 五時まで\n休み： 日曜日と 木曜日の 午後\nうけつけは 三十分前から です。\n午前は 八時半から、午後は 一時半から うけつけます。",
    qs: [
      {
        q: "クリニックが 休みの 日は いつですか。",
        opts: ["日曜日と 木曜日", "日曜日と 木曜日の 午後", "土曜日と 日曜日", "木曜日だけ"],
        ans: 1,
        exp: "Đáp án đúng là 2 (日曜日と 木曜日の 午後): bài viết「休み： 日曜日と 木曜日の 午後」— nghỉ cả ngày Chủ nhật và chiều thứ Năm. Đáp án 1 sai vì thứ Năm chỉ nghỉ buổi chiều, buổi sáng vẫn khám. Đáp án 3 và 4 không khớp với bài."
      },
      {
        q: "午後の うけつけは 何時からですか。",
        opts: ["二時から", "一時から", "一時半から", "十二時から"],
        ans: 2,
        exp: "Đáp án đúng là 3 (一時半から): câu cuối ghi「午後は 一時半から うけつけます」— tiếp nhận từ 1 giờ rưỡi chiều. Đáp án 1 (二時) là giờ bắt đầu khám buổi chiều, không phải giờ tiếp nhận. Đáp án 2 và 4 không có trong bài."
      }
    ],
    vocab: [
      { w: "受付", r: "うけつけ", m: "quầy tiếp nhận, lễ tân" },
      { w: "午前", r: "ごぜん", m: "buổi sáng (trước 12 giờ)" },
      { w: "午後", r: "ごご", m: "buổi chiều" },
      { w: "半", r: "はん", m: "rưỡi (〜時半)" },
      { w: "前", r: "まえ", m: "trước (thời gian/không gian)" }
    ]
  },
  {
    title: "こうえんの コンサート",
    body: "こうえんコンサートのお知らせ\n土曜日の 午後 三時から 四時半まで、中央こうえんで コンサートが あります。\n町の 学校の 学生が 歌と ピアノを ひきます。\n入場は ただです。雨の 日は ホールで します。\n家族や 友達と 一緒に 来て ください。",
    qs: [
      {
        q: "コンサートは 何時から 何時までですか。",
        opts: ["三時から 四時まで", "二時から 四時半まで", "三時から 四時半まで", "四時から 五時半まで"],
        ans: 2,
        exp: "Đáp án đúng là 3 (三時から 四時半まで): câu đầu ghi「午後 三時から 四時半まで」. Đáp án 1 sai giờ kết thúc (4 giờ thay vì 4 rưỡi). Đáp án 2 và 4 sai cả hai mốc giờ."
      },
      {
        q: "雨の 日、コンサートは どこで ありますか。",
        opts: ["こうえんで", "ホールで", "学校で", "雨の 日は ありません"],
        ans: 1,
        exp: "Đáp án đúng là 2 (ホールで): bài viết「雨の 日は ホールで します」— nếu mưa thì chuyển vào hội trường. Đáp án 1 (công viên) chỉ đúng khi trời không mưa. Đáp án 3 không có trong bài; đáp án 4 sai vì buổi hòa nhạc vẫn diễn ra, chỉ đổi địa điểm."
      }
    ],
    vocab: [
      { w: "中央", r: "ちゅうおう", m: "trung tâm" },
      { w: "入場", r: "にゅうじょう", m: "vào cửa, vào sân" },
      { w: "歌", r: "うた", m: "bài hát" },
      { w: "弾きます", r: "ひきます", m: "đánh (đàn piano/ghi-ta)" },
      { w: "一緒に", r: "いっしょに", m: "cùng nhau" }
    ]
  },
  {
    title: "カフェの お知らせ",
    body: "カフェ「そら」で はたらく 人を さがしています\n時間： 午前 九時から 午後 二時まで（土曜日と 日曜日だけ）\n仕事： コーヒーを 作ります。店を きれいに します。\n一時間 九百円です。\n電話番号： 090-1234-5678\n高校生も いいです。電話して ください。",
    qs: [
      {
        q: "この 仕事は いつ しますか。",
        opts: ["月曜日から 金曜日まで", "土曜日と 日曜日だけ", "毎日", "日曜日だけ"],
        ans: 1,
        exp: "Đáp án đúng là 2 (土曜日と 日曜日だけ): bài ghi「土曜日と 日曜日だけ」— chỉ làm thứ Bảy và Chủ nhật. Đáp án 1 (ngày thường) và 3 (mỗi ngày) trái hẳn với bài. Đáp án 4 thiếu thứ Bảy."
      },
      {
        q: "一時間の お金は いくらですか。",
        opts: ["八百円", "千円", "九百円", "九百五十円"],
        ans: 2,
        exp: "Đáp án đúng là 3 (九百円): bài viết「一時間 九百円です」— 900 yên một giờ. Các mức tiền ở đáp án 1, 2, 4 đều không xuất hiện trong thông báo."
      }
    ],
    vocab: [
      { w: "探します", r: "さがします", m: "tìm kiếm" },
      { w: "働きます", r: "はたらきます", m: "làm việc" },
      { w: "綺麗", r: "きれい", m: "sạch đẹp, gọn gàng" },
      { w: "電話番号", r: "でんわばんごう", m: "số điện thoại" },
      { w: "作ります", r: "つくります", m: "làm, chế tạo, pha (đồ uống)" }
    ]
  },
  {
    title: "うんどうかいの お知らせ",
    body: "うんどうかいのお知らせ（小学校）\n十月十二日（土）午前 九時から 午後 三時まで\n場所： 学校の こうてい\n持って 来る もの： おべんとう、水とう、タオル、ぼうし\n雨の 日は 十月十九日（土）に なります。\nお父さんと お母さんも 来て ください。",
    qs: [
      {
        q: "うんどうかいは 何時に 始まりますか。",
        opts: ["八時", "九時", "十時", "三時"],
        ans: 1,
        exp: "Đáp án đúng là 2 (九時): bài ghi「午前 九時から 午後 三時まで」— bắt đầu 9 giờ sáng. Đáp án 4 (三時) là giờ kết thúc, không phải giờ bắt đầu. Đáp án 1 và 3 không có trong bài."
      },
      {
        q: "雨の 日、うんどうかいは いつに なりますか。",
        opts: ["十月十三日", "十月二十日", "十月十九日", "ありません"],
        ans: 2,
        exp: "Đáp án đúng là 3 (十月十九日): bài viết「雨の 日は 十月十九日（土）に なります」— nếu mưa sẽ dời sang 19/10. Đáp án 1, 2 là các ngày gần đó nhưng không đúng. Đáp án 4 sai vì hội thao vẫn tổ chức, chỉ đổi ngày."
      }
    ],
    vocab: [
      { w: "運動会", r: "うんどうかい", m: "hội thao, đại hội thể thao" },
      { w: "校庭", r: "こうてい", m: "sân trường" },
      { w: "水筒", r: "すいとう", m: "bình nước cá nhân" },
      { w: "帽子", r: "ぼうし", m: "mũ, nón" },
      { w: "弁当", r: "おべんとう", m: "cơm hộp" }
    ]
  },
  {
    title: "夏まつりの お知らせ",
    body: "夏まつりのお知らせ\n八月三日（土）午後 六時から 九時まで\n場所： 駅前の ひろば\n六時半から 子どもたちの ダンス、八時から 花火が あります。\n食べ物の 店と 飲み物の 店も あります。\n車は 止めることが できません。バスで 来て ください。",
    qs: [
      {
        q: "花火は 何時からですか。",
        opts: ["六時", "六時半", "七時", "八時"],
        ans: 3,
        exp: "Đáp án đúng là 4 (八時): bài viết「八時から 花火が あります」. Đáp án 1 (六時) là giờ bắt đầu lễ hội, đáp án 2 (六時半) là giờ các em nhỏ nhảy múa — hai sự kiện khác trong cùng buổi tối, không phải pháo hoa. Đáp án 3 không có trong bài."
      },
      {
        q: "まつりへ 行く 人は 何に 気を つけますか。",
        opts: ["お金は いりません", "車で 来ることが できません", "子どもは 来ることが できません", "雨の 日は ありません"],
        ans: 1,
        exp: "Đáp án đúng là 2: cuối bài ghi「車は 止めることが できません。バスで 来て ください」— không đỗ được ô tô, nên đi xe buýt. Đáp án 1 sai vì lễ hội có quầy bán đồ ăn, thức uống (cần tiền). Đáp án 3 trái với bài (có tiết mục của trẻ em). Đáp án 4 không được nhắc đến."
      }
    ],
    vocab: [
      { w: "祭り", r: "まつり", m: "lễ hội" },
      { w: "広場", r: "ひろば", m: "quảng trường" },
      { w: "花火", r: "はなび", m: "pháo hoa" },
      { w: "止めます", r: "とめます", m: "dừng, đỗ (xe)" },
      { w: "気をつけます", r: "きをつけます", m: "chú ý, cẩn thận" }
    ]
  }
];
