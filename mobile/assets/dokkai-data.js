// SoraKanji Đọc hiểu AI v1 — 10 bài đọc (N5–N1), tạo bằng Gemini free key,
// kiểm chứng cấp độ độc lập (xem CONTENT-REPORT.md). Nạp lười: mobile/assets/dokkai-data.js
// v2 (2026-11-15): thêm field img — ảnh minh họa tại mobile/assets/dokkai/<id>.jpg
// v3 (2026-11-15): thêm field audio + timings — MP3 thật tại mobile/assets/dokkai/audio/<id>.mp3 (Cloud TTS ja-JP-Neural2-B)
// v4 (2026-11-15): đợt 1 — thêm 10 bài (dk-*-03/04), tổng 20 bài (4 bài/cấp)
// v5 (2026-11-15): đợt 2 — thêm 10 bài (dk-*-05/06), tổng 30 bài (6 bài/cấp)
// v6 (2026-11-16): đợt 3 — thêm 10 bài (dk-*-07/08), tổng 40 bài (8 bài/cấp)
// v7 (2026-11-16): đợt 4 — thêm 10 bài (dk-*-09/10), tổng 50 bài (10 bài/cấp)
window.DOKKAI_PASSAGES = [
 {
  "id": "dk-n5-01",
  "img": "dk-n5-01.jpg",
  "audio": "dk-n5-01.mp3",
  "timings": [
   0.015,
   2.731,
   5.184,
   8.542,
   11.319,
   14.29,
   16.646,
   19.484
  ],
  "level": "N5",
  "title": "わたしの せんせい",
  "titleVi": "Thầy giáo của tôi",
  "sentences": [
   {
    "jp": "わたしの 先生は 田中先生です。",
    "furi": [
     [
      "わたし",
      null
     ],
     [
      "の",
      null
     ],
     [
      " ",
      null
     ],
     [
      "先生",
      "せんせい"
     ],
     [
      "は",
      null
     ],
     [
      " ",
      null
     ],
     [
      "田中",
      "たなか"
     ],
     [
      "先生",
      "せんせい"
     ],
     [
      "です",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Thầy giáo của tôi là thầy Tanaka."
   },
   {
    "jp": "田中先生は 日本人です。",
    "furi": [
     [
      "田中",
      "たなか"
     ],
     [
      "先生",
      "せんせい"
     ],
     [
      "は",
      null
     ],
     [
      " ",
      null
     ],
     [
      "日本人",
      "にほんじん"
     ],
     [
      "です",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Thầy Tanaka là người Nhật."
   },
   {
    "jp": "先生は 毎日 八時に 学校へ 来ます。",
    "furi": [
     [
      "先生",
      "せんせい"
     ],
     [
      "は",
      null
     ],
     [
      " ",
      null
     ],
     [
      "毎日",
      "まいにち"
     ],
     [
      " ",
      null
     ],
     [
      "八時",
      "はちじ"
     ],
     [
      "に",
      null
     ],
     [
      " ",
      null
     ],
     [
      "学校",
      "がっこう"
     ],
     [
      "へ",
      null
     ],
     [
      " ",
      null
     ],
     [
      "来",
      "き"
     ],
     [
      "ます",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Thầy đến trường vào lúc 8 giờ mỗi ngày."
   },
   {
    "jp": "先生は 日本語の 本を 読みます。",
    "furi": [
     [
      "先生",
      "せんせい"
     ],
     [
      "は",
      null
     ],
     [
      " ",
      null
     ],
     [
      "日本語",
      "にほんご"
     ],
     [
      "の",
      null
     ],
     [
      " ",
      null
     ],
     [
      "本",
      "ほん"
     ],
     [
      "を",
      null
     ],
     [
      " ",
      null
     ],
     [
      "読",
      "よ"
     ],
     [
      "みます",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Thầy đọc sách tiếng Nhật."
   },
   {
    "jp": "田中先生は とても いい 先生です。",
    "furi": [
     [
      "田中",
      "たなか"
     ],
     [
      "先生",
      "せんせい"
     ],
     [
      "は",
      null
     ],
     [
      " ",
      null
     ],
     [
      "とても",
      null
     ],
     [
      " ",
      null
     ],
     [
      "いい",
      null
     ],
     [
      " ",
      null
     ],
     [
      "先生",
      "せんせい"
     ],
     [
      "です",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Thầy Tanaka là một thầy giáo rất tốt."
   },
   {
    "jp": "先生は 本が 大好きです。",
    "furi": [
     [
      "先生",
      "せんせい"
     ],
     [
      "は",
      null
     ],
     [
      " ",
      null
     ],
     [
      "本",
      "ほん"
     ],
     [
      "が",
      null
     ],
     [
      " ",
      null
     ],
     [
      "大好き",
      "だいすき"
     ],
     [
      "です",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Thầy rất thích sách."
   },
   {
    "jp": "時々 学校で 学生と 話します。",
    "furi": [
     [
      "時々",
      "ときどき"
     ],
     [
      " ",
      null
     ],
     [
      "学校",
      "がっこう"
     ],
     [
      "で",
      null
     ],
     [
      " ",
      null
     ],
     [
      "学生",
      "がくせい"
     ],
     [
      "と",
      null
     ],
     [
      " ",
      null
     ],
     [
      "話",
      "はな"
     ],
     [
      "します",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Thỉnh thoảng thầy trò chuyện với học sinh ở trường."
   },
   {
    "jp": "わたしは 田中先生が 大好きです。",
    "furi": [
     [
      "わたし",
      null
     ],
     [
      "は",
      null
     ],
     [
      " ",
      null
     ],
     [
      "田中",
      "たなか"
     ],
     [
      "先生",
      "せんせい"
     ],
     [
      "が",
      null
     ],
     [
      " ",
      null
     ],
     [
      "大好き",
      "だいすき"
     ],
     [
      "です",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Tôi rất thích thầy Tanaka."
   }
  ],
  "vocab": [
   {
    "w": "先生",
    "r": "せんせい",
    "hv": "TIÊN SINH",
    "vi": "Thầy giáo/Cô giáo"
   },
   {
    "w": "毎日",
    "r": "まいにち",
    "hv": "MỖI NHẬT",
    "vi": "Mỗi ngày"
   },
   {
    "w": "学校",
    "r": "がっこう",
    "hv": "HỌC HIỆU",
    "vi": "Trường học"
   },
   {
    "w": "日本語",
    "r": "にほんご",
    "hv": "NHẬT BẢN NGỮ",
    "vi": "Tiếng Nhật"
   },
   {
    "w": "学生",
    "r": "がくせい",
    "hv": "HỌC SINH",
    "vi": "Học sinh, sinh viên"
   },
   {
    "w": "大好き",
    "r": "だいすき",
    "hv": "ĐẠI HẢO",
    "vi": "Rất thích"
   }
  ],
  "grammar": [
   {
    "p": "N は N です",
    "lv": "N5",
    "vi": "N1 là N2",
    "ex": "田中先生は 日本人です。",
    "exVi": "Thầy Tanaka là người Nhật."
   },
   {
    "p": "N が 好きです／上手です",
    "lv": "N5",
    "vi": "Thích/Giỏi cái gì đó",
    "ex": "先生は 本が 大好きです。",
    "exVi": "Thầy rất thích sách."
   }
  ],
  "quiz": [
   {
    "q": "田中先生は 何時に 学校へ 来ますか。",
    "options": [
     "七時",
     "八時",
     "九時",
     "十時"
    ],
    "answer": 1,
    "explain": "Trong bài có viết thầy đến trường vào lúc 8 giờ (八時).",
    "evidence": "八時に 学校へ 来ます",
    "tip": "Hãy tìm chữ số đứng trước chữ 時 (giờ) trong bài đọc."
   },
   {
    "q": "田中先生は 何が 大好きですか。",
    "options": [
     "魚",
     "肉",
     "本",
     "お茶"
    ],
    "answer": 2,
    "explain": "Trong bài có câu nói rõ thầy rất thích sách (本).",
    "evidence": "先生は 本が 大好きです",
    "tip": "Tìm từ đi kèm với cụm từ 大好き để biết sở thích của thầy."
   }
  ]
 },
 {
  "id": "dk-n5-02",
  "img": "dk-n5-02.jpg",
  "audio": "dk-n5-02.mp3",
  "timings": [
   0.015,
   3.053,
   5.464,
   7.58,
   9.674,
   13.2,
   16.578,
   18.046
  ],
  "level": "N5",
  "title": "はじめての すし",
  "titleVi": "Lần đầu ăn sushi",
  "sentences": [
   {
    "jp": "わたしは きのう 友だちと すしを 食べました。",
    "furi": [
     [
      "わたし",
      null
     ],
     [
      "は",
      null
     ],
     [
      " ",
      null
     ],
     [
      "きのう",
      null
     ],
     [
      " ",
      null
     ],
     [
      "友",
      "とも"
     ],
     [
      "だち",
      null
     ],
     [
      "と",
      null
     ],
     [
      " ",
      null
     ],
     [
      "すし",
      null
     ],
     [
      "を",
      null
     ],
     [
      " ",
      null
     ],
     [
      "食",
      "た"
     ],
     [
      "べました",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Hôm qua tôi đã đi ăn sushi cùng với bạn."
   },
   {
    "jp": "すしを 食べるのは はじめてでした。",
    "furi": [
     [
      "すし",
      null
     ],
     [
      "を",
      null
     ],
     [
      " ",
      null
     ],
     [
      "食",
      "た"
     ],
     [
      "べる",
      null
     ],
     [
      "のは",
      null
     ],
     [
      " ",
      null
     ],
     [
      "はじめて",
      null
     ],
     [
      "でした",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Đây là lần đầu tiên tôi ăn sushi."
   },
   {
    "jp": "おみせは とても きれいでした。",
    "furi": [
     [
      "おみせ",
      null
     ],
     [
      "は",
      null
     ],
     [
      " ",
      null
     ],
     [
      "とても",
      null
     ],
     [
      " ",
      null
     ],
     [
      "きれい",
      null
     ],
     [
      "でした",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Cửa hàng rất là đẹp."
   },
   {
    "jp": "いろいろな 魚が ありました。",
    "furi": [
     [
      "いろいろ",
      null
     ],
     [
      "な",
      null
     ],
     [
      " ",
      null
     ],
     [
      "魚",
      "さかな"
     ],
     [
      "が",
      null
     ],
     [
      " ",
      null
     ],
     [
      "ありました",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Có nhiều loại cá khác nhau."
   },
   {
    "jp": "わたしは 白い 魚と あかい 魚を 食べました。",
    "furi": [
     [
      "わたし",
      null
     ],
     [
      "は",
      null
     ],
     [
      " ",
      null
     ],
     [
      "白",
      "しろ"
     ],
     [
      "い",
      null
     ],
     [
      " ",
      null
     ],
     [
      "魚",
      "さかな"
     ],
     [
      "と",
      null
     ],
     [
      " ",
      null
     ],
     [
      "あかい",
      null
     ],
     [
      " ",
      null
     ],
     [
      "魚",
      "さかな"
     ],
     [
      "を",
      null
     ],
     [
      " ",
      null
     ],
     [
      "食",
      "た"
     ],
     [
      "べました",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Tôi đã ăn cá màu trắng và cá màu đỏ."
   },
   {
    "jp": "すしは 少し からかったですが、おいしかったです。",
    "furi": [
     [
      "すし",
      null
     ],
     [
      "は",
      null
     ],
     [
      " ",
      null
     ],
     [
      "少",
      "すこ"
     ],
     [
      "し",
      null
     ],
     [
      " ",
      null
     ],
     [
      "からかった",
      null
     ],
     [
      "ですが",
      null
     ],
     [
      "、",
      null
     ],
     [
      "おいしかった",
      null
     ],
     [
      "です",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Sushi hơi cay một chút nhưng đã rất ngon."
   },
   {
    "jp": "お茶も 飲みました。",
    "furi": [
     [
      "お",
      null
     ],
     [
      "茶",
      "ちゃ"
     ],
     [
      "も",
      null
     ],
     [
      " ",
      null
     ],
     [
      "飲",
      "の"
     ],
     [
      "みました",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Tôi cũng đã uống cả trà nữa."
   },
   {
    "jp": "また 友だちと 行きたいです。",
    "furi": [
     [
      "また",
      null
     ],
     [
      " ",
      null
     ],
     [
      "友",
      "とも"
     ],
     [
      "だち",
      null
     ],
     [
      "と",
      null
     ],
     [
      " ",
      null
     ],
     [
      "行",
      "い"
     ],
     [
      "きたいです",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Tôi muốn lại đi cùng với bạn."
   }
  ],
  "vocab": [
   {
    "w": "友だち",
    "r": "ともだち",
    "hv": "HỮU",
    "vi": "bạn bè"
   },
   {
    "w": "おみせ",
    "r": "おみせ",
    "hv": "ĐIẾM",
    "vi": "Cửa hàng"
   },
   {
    "w": "魚",
    "r": "さかな",
    "hv": "NGƯ",
    "vi": "con cá"
   },
   {
    "w": "白い",
    "r": "しろい",
    "hv": "BẠCH",
    "vi": "trắng"
   },
   {
    "w": "あかい",
    "r": "あかい",
    "hv": "XÍCH",
    "vi": "Đỏ"
   },
   {
    "w": "お茶",
    "r": "おちゃ",
    "hv": "TRÀ",
    "vi": "trà"
   }
  ],
  "grammar": [
   {
    "p": "N と V",
    "lv": "N5",
    "vi": "Làm gì đó cùng với N",
    "ex": "友だちと すしを 食べました。",
    "exVi": "Tôi đã ăn sushi cùng với bạn."
   },
   {
    "p": "V たいです",
    "lv": "N5",
    "vi": "Muốn làm V",
    "ex": "また 友だちと 行きたいです。",
    "exVi": "Tôi muốn lại đi cùng với bạn."
   }
  ],
  "quiz": [
   {
    "q": "だれと すしを 食べましたか。",
    "options": [
     "一人で 食べました。",
     "友だちと 食べました。",
     "かぞくと 食べました。",
     "先生と 食べました。"
    ],
    "answer": 1,
    "explain": "Câu đầu tiên trong bài viết cho biết nhân vật chính đã đi ăn cùng với bạn bè.",
    "evidence": "友だちと すしを 食べました",
    "tip": "Hãy tìm từ 'だれ' (ai) và đối chiếu với danh từ chỉ người đi kèm trợ từ 'と' trong bài."
   },
   {
    "q": "すしは どうでしたか。",
    "options": [
     "おいしくなかったです。",
     "あまり よくなかったです。",
     "少し からかったですが、おいしかったです。",
     "とても あまかったです。"
    ],
    "answer": 2,
    "explain": "Trong bài có đoạn mô tả sushi hơi cay nhưng rất ngon.",
    "evidence": "すしは 少し からかったですが、おいしかったです",
    "tip": "Tính từ 'おいしい' (ngon) là từ khóa quan trọng để đánh giá món ăn trong các bài đọc N5."
   }
  ]
 },
 {
  "id": "dk-n5-03",
  "img": "dk-n5-03.jpg",
  "audio": "dk-n5-03.mp3",
  "timings": [
   0.015,
   2.201,
   5.259,
   7.675,
   10.25,
   12.17,
   15.392,
   17.452
  ],
  "level": "N5",
  "title": "かぞくの まいにち",
  "titleVi": "Cuộc sống hàng ngày của gia đình tôi",
  "sentences": [
   {
    "jp": "わたしの かぞくは 五人です。",
    "furi": [
     [
      "わたし",
      null
     ],
     [
      "の",
      null
     ],
     [
      " ",
      null
     ],
     [
      "かぞく",
      null
     ],
     [
      "は",
      null
     ],
     [
      " ",
      null
     ],
     [
      "五人",
      "ごにん"
     ],
     [
      "です",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Gia đình tôi có năm người."
   },
   {
    "jp": "父と 母と あにと わたしと いもうとです。",
    "furi": [
     [
      "父",
      "ちち"
     ],
     [
      "と",
      null
     ],
     [
      " ",
      null
     ],
     [
      "母",
      "はは"
     ],
     [
      "と",
      null
     ],
     [
      " ",
      null
     ],
     [
      "あに",
      null
     ],
     [
      "と",
      null
     ],
     [
      " ",
      null
     ],
     [
      "わたし",
      null
     ],
     [
      "と",
      null
     ],
     [
      " ",
      null
     ],
     [
      "いもうと",
      null
     ],
     [
      "です",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Bố, mẹ, anh trai, tôi và em gái."
   },
   {
    "jp": "父は 毎日 かいしゃに 行きます。",
    "furi": [
     [
      "父",
      "ちち"
     ],
     [
      "は",
      null
     ],
     [
      " ",
      null
     ],
     [
      "毎日",
      "まいにち"
     ],
     [
      " ",
      null
     ],
     [
      "かいしゃ",
      null
     ],
     [
      "に",
      null
     ],
     [
      " ",
      null
     ],
     [
      "行",
      "い"
     ],
     [
      "きます",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Bố tôi đến công ty làm việc mỗi ngày."
   },
   {
    "jp": "母は しょうがっこうの 先生です。",
    "furi": [
     [
      "母",
      "はは"
     ],
     [
      "は",
      null
     ],
     [
      " ",
      null
     ],
     [
      "しょうがっこう",
      null
     ],
     [
      "の",
      null
     ],
     [
      " ",
      null
     ],
     [
      "先生",
      "せんせい"
     ],
     [
      "です",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Mẹ tôi là giáo viên ở trường tiểu học."
   },
   {
    "jp": "あには だいがくせいです。",
    "furi": [
     [
      "あに",
      null
     ],
     [
      "は",
      null
     ],
     [
      " ",
      null
     ],
     [
      "だいがくせい",
      null
     ],
     [
      "です",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Anh trai tôi là sinh viên đại học."
   },
   {
    "jp": "あには 毎日 電車で 大学へ 行きます。",
    "furi": [
     [
      "あに",
      null
     ],
     [
      "は",
      null
     ],
     [
      " ",
      null
     ],
     [
      "毎日",
      "まいにち"
     ],
     [
      " ",
      null
     ],
     [
      "電車",
      "でんしゃ"
     ],
     [
      "で",
      null
     ],
     [
      " ",
      null
     ],
     [
      "大学",
      "だいがく"
     ],
     [
      "へ",
      null
     ],
     [
      " ",
      null
     ],
     [
      "行",
      "い"
     ],
     [
      "きます",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Anh trai tôi đi tàu điện đến trường đại học mỗi ngày."
   },
   {
    "jp": "いもうとは しょうがくせいです。",
    "furi": [
     [
      "いもうと",
      null
     ],
     [
      "は",
      null
     ],
     [
      " ",
      null
     ],
     [
      "しょうがくせい",
      null
     ],
     [
      "です",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Em gái tôi là học sinh tiểu học."
   },
   {
    "jp": "わたしは かぞくが 大好きです。",
    "furi": [
     [
      "わたし",
      null
     ],
     [
      "は",
      null
     ],
     [
      " ",
      null
     ],
     [
      "かぞく",
      null
     ],
     [
      "が",
      null
     ],
     [
      " ",
      null
     ],
     [
      "大好き",
      "だいすき"
     ],
     [
      "です",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Tôi rất yêu gia đình của mình."
   }
  ],
  "vocab": [
   {
    "w": "かぞく",
    "r": "かぞく",
    "hv": "GIA TỘC",
    "vi": "Gia đình"
   },
   {
    "w": "父",
    "r": "ちち",
    "hv": "PHỤ",
    "vi": "Bố (của mình)"
   },
   {
    "w": "母",
    "r": "はは",
    "hv": "MẪU",
    "vi": "Mẹ (của mình)"
   },
   {
    "w": "だいがくせい",
    "r": "だいがくせい",
    "hv": "ĐẠI HỌC SINH",
    "vi": "Sinh viên đại học"
   },
   {
    "w": "しょうがくせい",
    "r": "しょうがくせい",
    "hv": "TIỂU HỌC SINH",
    "vi": "Học sinh tiểu học"
   },
   {
    "w": "大好き",
    "r": "だいすき",
    "hv": "ĐẠI HẢO",
    "vi": "Rất thích, rất yêu"
   }
  ],
  "grammar": [
   {
    "p": "N は N です",
    "lv": "N5",
    "vi": "… là … (khẳng định)",
    "ex": "母は しょうがっこうの 先生です。",
    "exVi": "Mẹ tôi là giáo viên ở trường tiểu học."
   },
   {
    "p": "N へ／に 行きます",
    "lv": "N5",
    "vi": "Đi đến… (địa điểm)",
    "ex": "あには 毎日 電車で 大学へ 行きます。",
    "exVi": "Anh trai tôi đi tàu điện đến trường đại học mỗi ngày."
   }
  ],
  "quiz": [
   {
    "q": "わたしの かぞくは 何人ですか。",
    "options": [
     "三人",
     "四人",
     "五人",
     "六人"
    ],
    "answer": 2,
    "explain": "Câu đầu tiên của bài nói gia đình có năm người.",
    "evidence": "わたしの かぞくは 五人です",
    "tip": "Tìm từ chỉ số người trong câu đầu tiên của bài."
   },
   {
    "q": "あには 毎日 何で 大学へ 行きますか。",
    "options": [
     "あるいて",
     "電車で",
     "車で",
     "バスで"
    ],
    "answer": 1,
    "explain": "Trong bài có nói anh trai đi tàu điện đến trường đại học mỗi ngày.",
    "evidence": "毎日 電車で 大学へ 行きます",
    "tip": "Tìm từ chỉ phương tiện giao thông trong câu về anh trai."
   }
  ]
 },
 {
  "id": "dk-n5-04",
  "img": "dk-n5-04.jpg",
  "audio": "dk-n5-04.mp3",
  "timings": [
   0.015,
   2.373,
   4.244,
   6.199,
   9.6,
   12.323,
   14.794,
   17.011
  ],
  "level": "N5",
  "title": "わたしの いぬ",
  "titleVi": "Con chó của tôi",
  "sentences": [
   {
    "jp": "わたしの 犬の 名前は ハチです。",
    "furi": [
     [
      "わたし",
      null
     ],
     [
      "の",
      null
     ],
     [
      " ",
      null
     ],
     [
      "犬",
      "いぬ"
     ],
     [
      "の",
      null
     ],
     [
      " ",
      null
     ],
     [
      "名前",
      "なまえ"
     ],
     [
      "は",
      null
     ],
     [
      " ",
      null
     ],
     [
      "ハチ",
      null
     ],
     [
      "です",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Con chó của tôi tên là Hachi."
   },
   {
    "jp": "ハチは くろい 犬です。",
    "furi": [
     [
      "ハチ",
      null
     ],
     [
      "は",
      null
     ],
     [
      " ",
      null
     ],
     [
      "くろい",
      null
     ],
     [
      " ",
      null
     ],
     [
      "犬",
      "いぬ"
     ],
     [
      "です",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Hachi là một con chó đen."
   },
   {
    "jp": "ハチは 元気な 犬です。",
    "furi": [
     [
      "ハチ",
      null
     ],
     [
      "は",
      null
     ],
     [
      " ",
      null
     ],
     [
      "元気",
      "げんき"
     ],
     [
      "な",
      null
     ],
     [
      " ",
      null
     ],
     [
      "犬",
      "いぬ"
     ],
     [
      "です",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Hachi là một con chó khỏe mạnh."
   },
   {
    "jp": "わたしは 毎日 あさ ハチと こうえんへ 行きます。",
    "furi": [
     [
      "わたし",
      null
     ],
     [
      "は",
      null
     ],
     [
      " ",
      null
     ],
     [
      "毎日",
      "まいにち"
     ],
     [
      " ",
      null
     ],
     [
      "あさ",
      null
     ],
     [
      " ",
      null
     ],
     [
      "ハチ",
      null
     ],
     [
      "と",
      null
     ],
     [
      " ",
      null
     ],
     [
      "こうえん",
      null
     ],
     [
      "へ",
      null
     ],
     [
      " ",
      null
     ],
     [
      "行",
      "い"
     ],
     [
      "きます",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Mỗi sáng, tôi đi công viên cùng Hachi."
   },
   {
    "jp": "ハチは こうえんで ボールで あそびます。",
    "furi": [
     [
      "ハチ",
      null
     ],
     [
      "は",
      null
     ],
     [
      " ",
      null
     ],
     [
      "こうえん",
      null
     ],
     [
      "で",
      null
     ],
     [
      " ",
      null
     ],
     [
      "ボール",
      null
     ],
     [
      "で",
      null
     ],
     [
      " ",
      null
     ],
     [
      "あそびます",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Hachi chơi bóng trong công viên."
   },
   {
    "jp": "わたしは ハチに ごはんを あげます。",
    "furi": [
     [
      "わたし",
      null
     ],
     [
      "は",
      null
     ],
     [
      " ",
      null
     ],
     [
      "ハチ",
      null
     ],
     [
      "に",
      null
     ],
     [
      " ",
      null
     ],
     [
      "ごはん",
      null
     ],
     [
      "を",
      null
     ],
     [
      " ",
      null
     ],
     [
      "あげます",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Tôi cho Hachi ăn cơm."
   },
   {
    "jp": "ハチは わたしの そばで ねます。",
    "furi": [
     [
      "ハチ",
      null
     ],
     [
      "は",
      null
     ],
     [
      " ",
      null
     ],
     [
      "わたし",
      null
     ],
     [
      "の",
      null
     ],
     [
      " ",
      null
     ],
     [
      "そば",
      null
     ],
     [
      "で",
      null
     ],
     [
      " ",
      null
     ],
     [
      "ねます",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Hachi ngủ bên cạnh tôi."
   },
   {
    "jp": "わたしは ハチが 大好きです。",
    "furi": [
     [
      "わたし",
      null
     ],
     [
      "は",
      null
     ],
     [
      " ",
      null
     ],
     [
      "ハチ",
      null
     ],
     [
      "が",
      null
     ],
     [
      " ",
      null
     ],
     [
      "大好き",
      "だいすき"
     ],
     [
      "です",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Tôi rất yêu Hachi."
   }
  ],
  "vocab": [
   {
    "w": "犬",
    "r": "いぬ",
    "hv": "KHUYỂN",
    "vi": "Con chó"
   },
   {
    "w": "名前",
    "r": "なまえ",
    "hv": "DANH",
    "vi": "Tên, tên gọi"
   },
   {
    "w": "くろい",
    "r": "くろい",
    "hv": "HẮC",
    "vi": "Màu đen, đen"
   },
   {
    "w": "元気",
    "r": "げんき",
    "hv": "NGUYÊN KHÍ",
    "vi": "Khỏe mạnh, tràn đầy năng lượng"
   },
   {
    "w": "こうえん",
    "r": "こうえん",
    "hv": "CÔNG VIÊN",
    "vi": "Công viên"
   },
   {
    "w": "大好き",
    "r": "だいすき",
    "hv": "ĐẠI HẢO",
    "vi": "Rất thích, rất yêu"
   }
  ],
  "grammar": [
   {
    "p": "N に N を あげます",
    "lv": "N5",
    "vi": "Cho ai cái gì",
    "ex": "わたしは ハチに ごはんを あげます。",
    "exVi": "Tôi cho Hachi ăn cơm."
   },
   {
    "p": "N が 好きです／上手です",
    "lv": "N5",
    "vi": "Thích / giỏi…",
    "ex": "わたしは ハチが 大好きです。",
    "exVi": "Tôi rất yêu Hachi."
   }
  ],
  "quiz": [
   {
    "q": "ハチは どんな 犬ですか。",
    "options": [
     "白い 犬です",
     "くろい 犬です",
     "ちゃいろい 犬です",
     "あかい 犬です"
    ],
    "answer": 1,
    "explain": "Trong bài có nói Hachi là một con chó đen.",
    "evidence": "ハチは くろい 犬です",
    "tip": "Tìm câu mô tả màu lông của Hachi."
   },
   {
    "q": "わたしは 毎日 あさ ハチと どこへ 行きますか。",
    "options": [
     "学校へ",
     "こうえんへ",
     "かいしゃへ",
     "おみせへ"
    ],
    "answer": 1,
    "explain": "Trong bài có nói mỗi sáng tôi đi công viên cùng Hachi.",
    "evidence": "ハチと こうえんへ 行きます",
    "tip": "Tìm địa điểm trong câu về buổi sáng."
   }
  ]
 },
 {
  "id": "dk-n5-05",
  "img": "dk-n5-05.jpg",
  "audio": "dk-n5-05.mp3",
  "timings": [
   0.015,
   2.92,
   6.11,
   9.02,
   11.281,
   13.693,
   16.793,
   19.297
  ],
  "level": "N5",
  "title": "わたしの がっこう",
  "titleVi": "Trường học của tôi",
  "sentences": [
   {
    "jp": "わたしの 学校は いえの ちかくに あります。",
    "furi": [
     [
      "わたし",
      null
     ],
     [
      "の",
      null
     ],
     [
      " ",
      null
     ],
     [
      "学校",
      "がっこう"
     ],
     [
      "は",
      null
     ],
     [
      " ",
      null
     ],
     [
      "いえ",
      null
     ],
     [
      "の",
      null
     ],
     [
      " ",
      null
     ],
     [
      "ちかく",
      null
     ],
     [
      "に",
      null
     ],
     [
      " ",
      null
     ],
     [
      "あります",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Trường học của tôi ở gần nhà."
   },
   {
    "jp": "わたしは 毎日 あるいて 学校へ 行きます。",
    "furi": [
     [
      "わたし",
      null
     ],
     [
      "は",
      null
     ],
     [
      " ",
      null
     ],
     [
      "毎日",
      "まいにち"
     ],
     [
      " ",
      null
     ],
     [
      "あるいて",
      null
     ],
     [
      " ",
      null
     ],
     [
      "学校",
      "がっこう"
     ],
     [
      "へ",
      null
     ],
     [
      " ",
      null
     ],
     [
      "行",
      "い"
     ],
     [
      "きます",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Tôi đi bộ đến trường mỗi ngày."
   },
   {
    "jp": "学校には たくさんの 友だちが います。",
    "furi": [
     [
      "学校",
      "がっこう"
     ],
     [
      "には",
      null
     ],
     [
      " ",
      null
     ],
     [
      "たくさんの",
      null
     ],
     [
      " ",
      null
     ],
     [
      "友",
      "とも"
     ],
     [
      "だち",
      null
     ],
     [
      "が",
      null
     ],
     [
      " ",
      null
     ],
     [
      "います",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Ở trường có rất nhiều bạn bè."
   },
   {
    "jp": "先生は とても やさしいです。",
    "furi": [
     [
      "先生",
      "せんせい"
     ],
     [
      "は",
      null
     ],
     [
      " ",
      null
     ],
     [
      "とても",
      null
     ],
     [
      " ",
      null
     ],
     [
      "やさしい",
      null
     ],
     [
      "です",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Thầy cô giáo rất hiền."
   },
   {
    "jp": "わたしは スポーツが 大好きです。",
    "furi": [
     [
      "わたし",
      null
     ],
     [
      "は",
      null
     ],
     [
      " ",
      null
     ],
     [
      "スポーツ",
      null
     ],
     [
      "が",
      null
     ],
     [
      " ",
      null
     ],
     [
      "大好き",
      "だいすき"
     ],
     [
      "です",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Tôi rất thích thể thao."
   },
   {
    "jp": "休み時間に 友だちと サッカーを します。",
    "furi": [
     [
      "休",
      "やす"
     ],
     [
      "み",
      null
     ],
     [
      "時間",
      "じかん"
     ],
     [
      "に",
      null
     ],
     [
      " ",
      null
     ],
     [
      "友",
      "とも"
     ],
     [
      "だち",
      null
     ],
     [
      "と",
      null
     ],
     [
      " ",
      null
     ],
     [
      "サッカー",
      null
     ],
     [
      "を",
      null
     ],
     [
      " ",
      null
     ],
     [
      "します",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Trong giờ nghỉ, tôi chơi bóng đá cùng bạn bè."
   },
   {
    "jp": "学校で おひるごはんを 食べます。",
    "furi": [
     [
      "学校",
      "がっこう"
     ],
     [
      "で",
      null
     ],
     [
      " ",
      null
     ],
     [
      "おひるごはん",
      null
     ],
     [
      "を",
      null
     ],
     [
      " ",
      null
     ],
     [
      "食",
      "た"
     ],
     [
      "べます",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Tôi ăn trưa ở trường."
   },
   {
    "jp": "わたしは 学校が 大好きです。",
    "furi": [
     [
      "わたし",
      null
     ],
     [
      "は",
      null
     ],
     [
      " ",
      null
     ],
     [
      "学校",
      "がっこう"
     ],
     [
      "が",
      null
     ],
     [
      " ",
      null
     ],
     [
      "大好き",
      "だいすき"
     ],
     [
      "です",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Tôi rất yêu trường học của mình."
   }
  ],
  "vocab": [
   {
    "w": "学校",
    "r": "がっこう",
    "hv": "HỌC HIỆU",
    "vi": "Trường học"
   },
   {
    "w": "先生",
    "r": "せんせい",
    "hv": "TIÊN SINH",
    "vi": "Thầy cô giáo"
   },
   {
    "w": "友だち",
    "r": "ともだち",
    "hv": "HỮU",
    "vi": "Bạn bè"
   },
   {
    "w": "休み時間",
    "r": "やすみじかん",
    "hv": "HƯU THỜI GIAN",
    "vi": "Giờ nghỉ, giờ ra chơi"
   },
   {
    "w": "大好き",
    "r": "だいすき",
    "hv": "ĐẠI HẢO",
    "vi": "Rất thích, rất yêu"
   },
   {
    "w": "スポーツ",
    "r": "スポーツ",
    "hv": null,
    "vi": "Thể thao"
   }
  ],
  "grammar": [
   {
    "p": "N が あります／います",
    "lv": "N5",
    "vi": "Có… (người/vật tồn tại)",
    "ex": "学校には たくさんの 友だちが います。",
    "exVi": "Ở trường có rất nhiều bạn bè."
   },
   {
    "p": "N で Vます",
    "lv": "N5",
    "vi": "Làm… ở/tại… (địa điểm)",
    "ex": "学校で おひるごはんを 食べます。",
    "exVi": "Tôi ăn trưa ở trường."
   }
  ],
  "quiz": [
   {
    "q": "わたしは どうやって 学校へ 行きますか。",
    "options": [
     "あるいて",
     "電車で",
     "車で",
     "バスで"
    ],
    "answer": 0,
    "explain": "Trong bài có nói tôi đi bộ đến trường mỗi ngày.",
    "evidence": "毎日 あるいて 学校へ 行きます",
    "tip": "Tìm từ chỉ cách di chuyển trong câu về việc đi học."
   },
   {
    "q": "休み時間に わたしは 何を しますか。",
    "options": [
     "サッカーを します",
     "本を 読みます",
     "テレビを 見ます",
     "ごはんを 食べます"
    ],
    "answer": 0,
    "explain": "Trong bài có nói trong giờ nghỉ, tôi chơi bóng đá cùng bạn bè.",
    "evidence": "休み時間に 友だちと サッカーを します",
    "tip": "Tìm hoạt động trong câu về giờ nghỉ."
   }
  ]
 },
 {
  "id": "dk-n5-06",
  "img": "dk-n5-06.jpg",
  "audio": "dk-n5-06.mp3",
  "timings": [
   0.015,
   1.22,
   3.283,
   6.386,
   8.433,
   12.504,
   15.191,
   16.994
  ],
  "level": "N5",
  "title": "あめの ひ",
  "titleVi": "Ngày mưa",
  "sentences": [
   {
    "jp": "今日は 雨です。",
    "furi": [
     [
      "今日",
      "きょう"
     ],
     [
      "は",
      null
     ],
     [
      " ",
      null
     ],
     [
      "雨",
      "あめ"
     ],
     [
      "です",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Hôm nay trời mưa."
   },
   {
    "jp": "あさから 雨が ふっています。",
    "furi": [
     [
      "あさ",
      null
     ],
     [
      "から",
      null
     ],
     [
      " ",
      null
     ],
     [
      "雨",
      "あめ"
     ],
     [
      "が",
      null
     ],
     [
      " ",
      null
     ],
     [
      "ふって",
      null
     ],
     [
      "います",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Trời đã mưa từ sáng."
   },
   {
    "jp": "わたしは かさを さして 学校へ 行きます。",
    "furi": [
     [
      "わたし",
      null
     ],
     [
      "は",
      null
     ],
     [
      " ",
      null
     ],
     [
      "かさ",
      null
     ],
     [
      "を",
      null
     ],
     [
      " ",
      null
     ],
     [
      "さして",
      null
     ],
     [
      " ",
      null
     ],
     [
      "学校",
      "がっこう"
     ],
     [
      "へ",
      null
     ],
     [
      " ",
      null
     ],
     [
      "行",
      "い"
     ],
     [
      "きます",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Tôi che ô đi đến trường."
   },
   {
    "jp": "わたしの かさは あかいです。",
    "furi": [
     [
      "わたし",
      null
     ],
     [
      "の",
      null
     ],
     [
      " ",
      null
     ],
     [
      "かさ",
      null
     ],
     [
      "は",
      null
     ],
     [
      " ",
      null
     ],
     [
      "あかい",
      null
     ],
     [
      "です",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Chiếc ô của tôi màu đỏ."
   },
   {
    "jp": "雨の 日は テレビを 見たり、 本を 読んだり します。",
    "furi": [
     [
      "雨",
      "あめ"
     ],
     [
      "の",
      null
     ],
     [
      " ",
      null
     ],
     [
      "日",
      "ひ"
     ],
     [
      "は",
      null
     ],
     [
      " ",
      null
     ],
     [
      "テレビ",
      null
     ],
     [
      "を",
      null
     ],
     [
      " ",
      null
     ],
     [
      "見",
      "み"
     ],
     [
      "たり",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "本",
      "ほん"
     ],
     [
      "を",
      null
     ],
     [
      " ",
      null
     ],
     [
      "読",
      "よ"
     ],
     [
      "んだり",
      null
     ],
     [
      " ",
      null
     ],
     [
      "します",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Vào ngày mưa, tôi xem tivi, đọc sách và nhiều việc khác."
   },
   {
    "jp": "いえに 帰ると、 雨が やみました。",
    "furi": [
     [
      "いえ",
      null
     ],
     [
      "に",
      null
     ],
     [
      " ",
      null
     ],
     [
      "帰",
      "かえ"
     ],
     [
      "ると",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "雨",
      "あめ"
     ],
     [
      "が",
      null
     ],
     [
      " ",
      null
     ],
     [
      "やみました",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Khi tôi về đến nhà, trời đã tạnh mưa."
   },
   {
    "jp": "そらに にじが 出ました。",
    "furi": [
     [
      "そら",
      null
     ],
     [
      "に",
      null
     ],
     [
      " ",
      null
     ],
     [
      "にじ",
      null
     ],
     [
      "が",
      null
     ],
     [
      " ",
      null
     ],
     [
      "出",
      "で"
     ],
     [
      "ました",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Trên trời xuất hiện cầu vồng."
   },
   {
    "jp": "明日は いい 天気に なりたいです。",
    "furi": [
     [
      "明日",
      "あした"
     ],
     [
      "は",
      null
     ],
     [
      " ",
      null
     ],
     [
      "いい",
      null
     ],
     [
      " ",
      null
     ],
     [
      "天気",
      "てんき"
     ],
     [
      "に",
      null
     ],
     [
      " ",
      null
     ],
     [
      "なりたい",
      null
     ],
     [
      "です",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Tôi mong ngày mai trời sẽ đẹp."
   }
  ],
  "vocab": [
   {
    "w": "雨",
    "r": "あめ",
    "hv": "VŨ",
    "vi": "Mưa"
   },
   {
    "w": "かさ",
    "r": "かさ",
    "hv": "TÁN",
    "vi": "Cái ô, cái dù"
   },
   {
    "w": "にじ",
    "r": "にじ",
    "hv": "HỒNG",
    "vi": "Cầu vồng"
   },
   {
    "w": "ふる",
    "r": "ふる",
    "hv": "GIÁNG",
    "vi": "Rơi (mưa, tuyết)"
   },
   {
    "w": "やむ",
    "r": "やむ",
    "hv": "CHỈ",
    "vi": "Tạnh (mưa), dừng lại"
   },
   {
    "w": "天気",
    "r": "てんき",
    "hv": "THIÊN KHÍ",
    "vi": "Thời tiết"
   }
  ],
  "grammar": [
   {
    "p": "Vたり、Vたり します",
    "lv": "N5",
    "vi": "Làm việc này, việc kia… (liệt kê hành động)",
    "ex": "雨の 日は テレビを 見たり、 本を 読んだり します。",
    "exVi": "Vào ngày mưa, tôi xem tivi, đọc sách và nhiều việc khác."
   },
   {
    "p": "V たいです",
    "lv": "N5",
    "vi": "Muốn…",
    "ex": "明日は いい 天気に なりたいです。",
    "exVi": "Tôi mong ngày mai trời sẽ đẹp."
   }
  ],
  "quiz": [
   {
    "q": "わたしは 何を さして 学校へ 行きますか。",
    "options": [
     "かさを",
     "ぼうしを",
     "コートを",
     "かばんを"
    ],
    "answer": 0,
    "explain": "Trong bài có nói tôi che ô đi đến trường.",
    "evidence": "かさを さして 学校へ 行きます",
    "tip": "Tìm đồ vật trong câu về việc đi học."
   },
   {
    "q": "雨が やんだ あと、 そらに 何が 出ましたか。",
    "options": [
     "にじが",
     "ほしが",
     "月が",
     "鳥が"
    ],
    "answer": 0,
    "explain": "Trong bài có nói sau khi mưa tạnh, trên trời xuất hiện cầu vồng.",
    "evidence": "そらに にじが 出ました",
    "tip": "Tìm câu về bầu trời sau cơn mưa."
   }
  ]
 },
 {
  "id": "dk-n5-07",
  "img": "dk-n5-07.jpg",
  "audio": "dk-n5-07.mp3",
  "timings": [
   0.015,
   2.852,
   5.057,
   7.591,
   11.845,
   14.344,
   16.6,
   18.925
  ],
  "level": "N5",
  "title": "わたしの まち",
  "titleVi": "Thị trấn của tôi",
  "sentences": [
   {
    "jp": "わたしの まちは 小さくて、 しずかです。",
    "furi": [
     [
      "わたし",
      null
     ],
     [
      "の",
      null
     ],
     [
      " ",
      null
     ],
     [
      "まち",
      null
     ],
     [
      "は",
      null
     ],
     [
      " ",
      null
     ],
     [
      "小",
      "ちい"
     ],
     [
      "さくて",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "しずか",
      null
     ],
     [
      "です",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Thị trấn của tôi nhỏ và yên tĩnh."
   },
   {
    "jp": "まちには こうえんが あります。",
    "furi": [
     [
      "まち",
      null
     ],
     [
      "には",
      null
     ],
     [
      " ",
      null
     ],
     [
      "こうえん",
      null
     ],
     [
      "が",
      null
     ],
     [
      " ",
      null
     ],
     [
      "あります",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Trong thị trấn có một công viên."
   },
   {
    "jp": "こうえんには 木が たくさん あります。",
    "furi": [
     [
      "こうえん",
      null
     ],
     [
      "には",
      null
     ],
     [
      " ",
      null
     ],
     [
      "木",
      "き"
     ],
     [
      "が",
      null
     ],
     [
      " ",
      null
     ],
     [
      "たくさん",
      null
     ],
     [
      " ",
      null
     ],
     [
      "あります",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Trong công viên có rất nhiều cây."
   },
   {
    "jp": "子どもたちは こうえんで あそんでから、 いえに 帰ります。",
    "furi": [
     [
      "子",
      "こ"
     ],
     [
      "ども",
      null
     ],
     [
      "たち",
      null
     ],
     [
      "は",
      null
     ],
     [
      " ",
      null
     ],
     [
      "こうえん",
      null
     ],
     [
      "で",
      null
     ],
     [
      " ",
      null
     ],
     [
      "あそんでから",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "いえ",
      null
     ],
     [
      "に",
      null
     ],
     [
      " ",
      null
     ],
     [
      "帰",
      "かえ"
     ],
     [
      "ります",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Trẻ em chơi ở công viên rồi về nhà."
   },
   {
    "jp": "まちには 小さい みせが あります。",
    "furi": [
     [
      "まち",
      null
     ],
     [
      "には",
      null
     ],
     [
      " ",
      null
     ],
     [
      "小",
      "ちい"
     ],
     [
      "さい",
      null
     ],
     [
      " ",
      null
     ],
     [
      "みせ",
      null
     ],
     [
      "が",
      null
     ],
     [
      " ",
      null
     ],
     [
      "あります",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Trong thị trấn có một cửa hàng nhỏ."
   },
   {
    "jp": "わたしは みせで パンを 買います。",
    "furi": [
     [
      "わたし",
      null
     ],
     [
      "は",
      null
     ],
     [
      " ",
      null
     ],
     [
      "みせ",
      null
     ],
     [
      "で",
      null
     ],
     [
      " ",
      null
     ],
     [
      "パン",
      null
     ],
     [
      "を",
      null
     ],
     [
      " ",
      null
     ],
     [
      "買",
      "か"
     ],
     [
      "います",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Tôi mua bánh mì ở cửa hàng."
   },
   {
    "jp": "えきは まちの ちかくに あります。",
    "furi": [
     [
      "えき",
      null
     ],
     [
      "は",
      null
     ],
     [
      " ",
      null
     ],
     [
      "まち",
      null
     ],
     [
      "の",
      null
     ],
     [
      " ",
      null
     ],
     [
      "ちかく",
      null
     ],
     [
      "に",
      null
     ],
     [
      " ",
      null
     ],
     [
      "あります",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Nhà ga ở gần thị trấn."
   },
   {
    "jp": "わたしは この まちが 大好きです。",
    "furi": [
     [
      "わたし",
      null
     ],
     [
      "は",
      null
     ],
     [
      " ",
      null
     ],
     [
      "この",
      null
     ],
     [
      " ",
      null
     ],
     [
      "まち",
      null
     ],
     [
      "が",
      null
     ],
     [
      " ",
      null
     ],
     [
      "大好き",
      "だいすき"
     ],
     [
      "です",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Tôi rất yêu thị trấn này."
   }
  ],
  "vocab": [
   {
    "w": "町",
    "r": "まち",
    "hv": "ĐINH",
    "vi": "Thị trấn, thành phố nhỏ"
   },
   {
    "w": "こうえん",
    "r": "こうえん",
    "hv": "CÔNG VIÊN",
    "vi": "Công viên"
   },
   {
    "w": "みせ",
    "r": "みせ",
    "hv": "ĐIẾM",
    "vi": "Cửa hàng"
   },
   {
    "w": "子ども",
    "r": "こども",
    "hv": "TỬ",
    "vi": "Trẻ em"
   },
   {
    "w": "あそぶ",
    "r": "あそぶ",
    "hv": "DU",
    "vi": "Chơi"
   },
   {
    "w": "しずか",
    "r": "しずか",
    "hv": "TĨNH",
    "vi": "Yên tĩnh"
   }
  ],
  "grammar": [
   {
    "p": "V てから",
    "lv": "N5",
    "vi": "Sau khi… rồi… / … rồi mới…",
    "ex": "子どもたちは こうえんで あそんでから、 いえに 帰ります。",
    "exVi": "Trẻ em chơi ở công viên rồi về nhà."
   },
   {
    "p": "N が 好きです／上手です",
    "lv": "N5",
    "vi": "Thích / giỏi…",
    "ex": "わたしは この まちが 大好きです。",
    "exVi": "Tôi rất yêu thị trấn này."
   }
  ],
  "quiz": [
   {
    "q": "わたしの まちは どんな まちですか。",
    "options": [
     "小さくて、 しずかです",
     "大きくて、 にぎやかです",
     "小さくて、 くらいです",
     "大きくて、 しずかです"
    ],
    "answer": 0,
    "explain": "Trong bài có nói thị trấn của tôi nhỏ và yên tĩnh.",
    "evidence": "わたしの まちは 小さくて、 しずかです",
    "tip": "Tìm câu đầu tiên trong bài."
   },
   {
    "q": "子どもたちは こうえんで あそんでから、 どこに 帰りますか。",
    "options": [
     "いえに",
     "学校に",
     "みせに",
     "えきに"
    ],
    "answer": 0,
    "explain": "Trong bài có nói trẻ em chơi ở công viên rồi về nhà.",
    "evidence": "こうえんで あそんでから、 いえに 帰ります",
    "tip": "Tìm câu về trẻ em chơi ở công viên."
   }
  ]
 },
 {
  "id": "dk-n5-08",
  "img": "dk-n5-08.jpg",
  "audio": "dk-n5-08.mp3",
  "timings": [
   0.015,
   1.961,
   6.173,
   8.1,
   11.396,
   14.031,
   16.389,
   18.2
  ],
  "level": "N5",
  "title": "ゆきの ひ",
  "titleVi": "Ngày tuyết rơi",
  "sentences": [
   {
    "jp": "今日は ゆきが ふっています。",
    "furi": [
     [
      "今日",
      "きょう"
     ],
     [
      "は",
      null
     ],
     [
      " ",
      null
     ],
     [
      "ゆき",
      null
     ],
     [
      "が",
      null
     ],
     [
      " ",
      null
     ],
     [
      "ふって",
      null
     ],
     [
      "います",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Hôm nay tuyết đang rơi."
   },
   {
    "jp": "あさ、 外を 見ると、 まちが 白く なっていました。",
    "furi": [
     [
      "あさ",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "外",
      "そと"
     ],
     [
      "を",
      null
     ],
     [
      " ",
      null
     ],
     [
      "見",
      "み"
     ],
     [
      "ると",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "まち",
      null
     ],
     [
      "が",
      null
     ],
     [
      " ",
      null
     ],
     [
      "白",
      "しろ"
     ],
     [
      "く",
      null
     ],
     [
      " ",
      null
     ],
     [
      "なって",
      null
     ],
     [
      "いました",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Buổi sáng, khi nhìn ra ngoài, thị trấn đã trở nên trắng xóa."
   },
   {
    "jp": "ゆきは とても きれいです。",
    "furi": [
     [
      "ゆき",
      null
     ],
     [
      "は",
      null
     ],
     [
      " ",
      null
     ],
     [
      "とても",
      null
     ],
     [
      " ",
      null
     ],
     [
      "きれい",
      null
     ],
     [
      "です",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Tuyết rất đẹp."
   },
   {
    "jp": "わたしは 友だちと もう ゆきだるまを つくりました。",
    "furi": [
     [
      "わたし",
      null
     ],
     [
      "は",
      null
     ],
     [
      " ",
      null
     ],
     [
      "友",
      "とも"
     ],
     [
      "だち",
      null
     ],
     [
      "と",
      null
     ],
     [
      " ",
      null
     ],
     [
      "もう",
      null
     ],
     [
      " ",
      null
     ],
     [
      "ゆきだるま",
      null
     ],
     [
      "を",
      null
     ],
     [
      " ",
      null
     ],
     [
      "つくりました",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Tôi cùng bạn bè đã làm xong người tuyết rồi."
   },
   {
    "jp": "ゆきだるまは 大きくて、 すてきです。",
    "furi": [
     [
      "ゆきだるま",
      null
     ],
     [
      "は",
      null
     ],
     [
      " ",
      null
     ],
     [
      "大",
      "おお"
     ],
     [
      "きくて",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "すてき",
      null
     ],
     [
      "です",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Người tuyết to và thật đẹp."
   },
   {
    "jp": "わたしたちは ゆきで あそびました。",
    "furi": [
     [
      "わたし",
      null
     ],
     [
      "たち",
      null
     ],
     [
      "は",
      null
     ],
     [
      " ",
      null
     ],
     [
      "ゆき",
      null
     ],
     [
      "で",
      null
     ],
     [
      " ",
      null
     ],
     [
      "あそびました",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Chúng tôi đã chơi với tuyết."
   },
   {
    "jp": "手が つめたくなりました。",
    "furi": [
     [
      "手",
      "て"
     ],
     [
      "が",
      null
     ],
     [
      " ",
      null
     ],
     [
      "つめたく",
      null
     ],
     [
      "なりました",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Tay tôi đã trở nên lạnh cóng."
   },
   {
    "jp": "明日も ゆきで あそびたいです。",
    "furi": [
     [
      "明日",
      "あした"
     ],
     [
      "も",
      null
     ],
     [
      " ",
      null
     ],
     [
      "ゆき",
      null
     ],
     [
      "で",
      null
     ],
     [
      " ",
      null
     ],
     [
      "あそびたい",
      null
     ],
     [
      "です",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Ngày mai tôi cũng muốn chơi với tuyết nữa."
   }
  ],
  "vocab": [
   {
    "w": "ゆき",
    "r": "ゆき",
    "hv": "TUYẾT",
    "vi": "Tuyết"
   },
   {
    "w": "ふる",
    "r": "ふる",
    "hv": "GIÁNG",
    "vi": "Rơi (tuyết, mưa)"
   },
   {
    "w": "ゆきだるま",
    "r": "ゆきだるま",
    "hv": null,
    "vi": "Người tuyết"
   },
   {
    "w": "つめたい",
    "r": "つめたい",
    "hv": "LÃNH",
    "vi": "Lạnh (khi chạm vào)"
   },
   {
    "w": "白い",
    "r": "しろい",
    "hv": "BẠCH",
    "vi": "Màu trắng, trắng"
   },
   {
    "w": "すてき",
    "r": "すてき",
    "hv": null,
    "vi": "Đẹp, tuyệt vời, đáng yêu"
   }
  ],
  "grammar": [
   {
    "p": "もう Vました／まだです",
    "lv": "N5",
    "vi": "Đã… rồi / vẫn chưa…",
    "ex": "わたしは 友だちと もう ゆきだるまを つくりました。",
    "exVi": "Tôi cùng bạn bè đã làm xong người tuyết rồi."
   },
   {
    "p": "V たいです",
    "lv": "N5",
    "vi": "Muốn…",
    "ex": "明日も ゆきで あそびたいです。",
    "exVi": "Ngày mai tôi cũng muốn chơi với tuyết nữa."
   }
  ],
  "quiz": [
   {
    "q": "わたしは 友だちと 何を つくりましたか。",
    "options": [
     "ゆきだるまを",
     "おべんとうを",
     "ケーキを",
     "すしを"
    ],
    "answer": 0,
    "explain": "Trong bài có nói tôi cùng bạn bè đã làm xong người tuyết rồi.",
    "evidence": "友だちと もう ゆきだるまを つくりました",
    "tip": "Tìm câu về việc làm cùng bạn bè."
   },
   {
    "q": "ゆきで あそんだ あと、 手は どうなりましたか。",
    "options": [
     "つめたくなりました",
     "あたたかくなりました",
     "かわきました",
     "つよくなりました"
    ],
    "answer": 0,
    "explain": "Trong bài có nói sau khi chơi với tuyết, tay tôi đã trở nên lạnh cóng.",
    "evidence": "手が つめたくなりました",
    "tip": "Tìm câu về bàn tay."
   }
  ]
 },
 {
  "id": "dk-n5-09",
  "img": "dk-n5-09.jpg",
  "audio": "dk-n5-09.mp3",
  "timings": [
   0.015,
   2.358,
   4.956,
   8.011,
   10.159,
   14.206,
   16.761,
   20.745
  ],
  "level": "N5",
  "title": "わたしの ともだち",
  "titleVi": "Bạn của tôi",
  "sentences": [
   {
    "jp": "わたしの ともだちは ゆきさんです。",
    "furi": [
     [
      "わたし",
      null
     ],
     [
      "の",
      null
     ],
     [
      " ",
      null
     ],
     [
      "ともだち",
      null
     ],
     [
      "は",
      null
     ],
     [
      " ",
      null
     ],
     [
      "ゆきさん",
      null
     ],
     [
      "です",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Bạn của tôi là Yuki."
   },
   {
    "jp": "ゆきさんは わたしと おなじ クラスです。",
    "furi": [
     [
      "ゆきさん",
      null
     ],
     [
      "は",
      null
     ],
     [
      " ",
      null
     ],
     [
      "わたし",
      null
     ],
     [
      "と",
      null
     ],
     [
      " ",
      null
     ],
     [
      "おなじ",
      null
     ],
     [
      " ",
      null
     ],
     [
      "クラス",
      null
     ],
     [
      "です",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Yuki học cùng lớp với tôi."
   },
   {
    "jp": "毎日、 学校で いっしょに あそびます。",
    "furi": [
     [
      "毎",
      "まい"
     ],
     [
      "日",
      "にち"
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "学",
      "がく"
     ],
     [
      "校",
      "こう"
     ],
     [
      "で",
      null
     ],
     [
      " ",
      null
     ],
     [
      "いっしょ",
      null
     ],
     [
      "に",
      null
     ],
     [
      " ",
      null
     ],
     [
      "あそびます",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Mỗi ngày, chúng tôi chơi cùng nhau ở trường."
   },
   {
    "jp": "ゆきさんは 本が 好きです。",
    "furi": [
     [
      "ゆきさん",
      null
     ],
     [
      "は",
      null
     ],
     [
      " ",
      null
     ],
     [
      "本",
      "ほん"
     ],
     [
      "が",
      null
     ],
     [
      " ",
      null
     ],
     [
      "好",
      "す"
     ],
     [
      "き",
      null
     ],
     [
      "です",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Yuki thích sách."
   },
   {
    "jp": "ときどき、 ゆきさんは わたしに 本を かして あげます。",
    "furi": [
     [
      "ときどき",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "ゆきさん",
      null
     ],
     [
      "は",
      null
     ],
     [
      " ",
      null
     ],
     [
      "わたし",
      null
     ],
     [
      "に",
      null
     ],
     [
      " ",
      null
     ],
     [
      "本",
      "ほん"
     ],
     [
      "を",
      null
     ],
     [
      " ",
      null
     ],
     [
      "かして",
      null
     ],
     [
      " ",
      null
     ],
     [
      "あげます",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Thỉnh thoảng, Yuki cho tôi mượn sách."
   },
   {
    "jp": "わたしは さんすうが むずかしいです。",
    "furi": [
     [
      "わたし",
      null
     ],
     [
      "は",
      null
     ],
     [
      " ",
      null
     ],
     [
      "さんすう",
      null
     ],
     [
      "が",
      null
     ],
     [
      " ",
      null
     ],
     [
      "むずかしい",
      null
     ],
     [
      "です",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Tôi thấy môn toán khó."
   },
   {
    "jp": "こまった とき、 ゆきさんは わたしを たすけて くれます。",
    "furi": [
     [
      "こまった",
      null
     ],
     [
      " ",
      null
     ],
     [
      "とき",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "ゆきさん",
      null
     ],
     [
      "は",
      null
     ],
     [
      " ",
      null
     ],
     [
      "わたし",
      null
     ],
     [
      "を",
      null
     ],
     [
      " ",
      null
     ],
     [
      "たすけて",
      null
     ],
     [
      " ",
      null
     ],
     [
      "くれます",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Khi tôi gặp khó khăn, Yuki giúp tôi."
   },
   {
    "jp": "ゆきさんは やさしい ともだちで、 わたしは ゆきさんが 大好きです。",
    "furi": [
     [
      "ゆきさん",
      null
     ],
     [
      "は",
      null
     ],
     [
      " ",
      null
     ],
     [
      "やさしい",
      null
     ],
     [
      " ",
      null
     ],
     [
      "ともだち",
      null
     ],
     [
      "で",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "わたし",
      null
     ],
     [
      "は",
      null
     ],
     [
      " ",
      null
     ],
     [
      "ゆきさん",
      null
     ],
     [
      "が",
      null
     ],
     [
      " ",
      null
     ],
     [
      "大",
      "だい"
     ],
     [
      "好",
      "す"
     ],
     [
      "き",
      null
     ],
     [
      "です",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Yuki là một người bạn hiền lành, và tôi rất thích Yuki."
   }
  ],
  "vocab": [
   {
    "w": "ともだち",
    "r": "ともだち",
    "hv": "HỮU ĐẠT",
    "vi": "Bạn bè, bạn thân"
   },
   {
    "w": "クラス",
    "r": "クラス",
    "hv": null,
    "vi": "Lớp học"
   },
   {
    "w": "おなじ",
    "r": "おなじ",
    "hv": "ĐỒNG",
    "vi": "Giống nhau, cùng"
   },
   {
    "w": "さんすう",
    "r": "さんすう",
    "hv": "TOÁN SỐ",
    "vi": "Môn toán"
   },
   {
    "w": "たすける",
    "r": "たすける",
    "hv": "TRỢ",
    "vi": "Giúp đỡ"
   },
   {
    "w": "やさしい",
    "r": "やさしい",
    "hv": "ƯU",
    "vi": "Hiền lành, dịu dàng"
   }
  ],
  "grammar": [
   {
    "p": "Vてあげます",
    "lv": "N5",
    "vi": "Cho, tặng (làm gì cho ai)",
    "ex": "ときどき、 ゆきさんは わたしに 本を かして あげます。",
    "exVi": "Thỉnh thoảng, Yuki cho tôi mượn sách."
   },
   {
    "p": "～とき、～",
    "lv": "N5",
    "vi": "Khi… / Lúc…",
    "ex": "こまった とき、 ゆきさんは わたしを たすけて くれます。",
    "exVi": "Khi tôi gặp khó khăn, Yuki giúp tôi."
   }
  ],
  "quiz": [
   {
    "q": "ゆきさんは わたしに 何を かして あげますか。",
    "options": [
     "本",
     "かばん",
     "くつ",
     "かさ"
    ],
    "answer": 0,
    "explain": "Trong bài có nói Yuki thỉnh thoảng cho tôi mượn sách.",
    "evidence": "ゆきさんは わたしに 本を かして あげます",
    "tip": "Tìm câu có 'かして あげます' trong bài."
   },
   {
    "q": "わたしは 何が むずかしいですか。",
    "options": [
     "さんすう",
     "にほんご",
     "えいご",
     "りか"
    ],
    "answer": 0,
    "explain": "Trong bài có nói tôi thấy môn toán khó.",
    "evidence": "わたしは さんすうが むずかしいです",
    "tip": "Tìm câu có 'むずかしい' trong bài."
   }
  ]
 },
 {
  "id": "dk-n5-10",
  "img": "dk-n5-10.jpg",
  "audio": "dk-n5-10.mp3",
  "timings": [
   0.015,
   1.914,
   4.548,
   7.873,
   10.591,
   13.571,
   15.946,
   19.295
  ],
  "level": "N5",
  "title": "はるの さんぽ",
  "titleVi": "Dạo chơi mùa xuân",
  "sentences": [
   {
    "jp": "今日は はるの いい 日です。",
    "furi": [
     [
      "今日",
      "きょう"
     ],
     [
      "は",
      null
     ],
     [
      " ",
      null
     ],
     [
      "はる",
      null
     ],
     [
      "の",
      null
     ],
     [
      " ",
      null
     ],
     [
      "いい",
      null
     ],
     [
      " ",
      null
     ],
     [
      "日",
      "ひ"
     ],
     [
      "です",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Hôm nay là một ngày xuân đẹp."
   },
   {
    "jp": "わたしは こうえんに さんぽに 行きます。",
    "furi": [
     [
      "わたし",
      null
     ],
     [
      "は",
      null
     ],
     [
      " ",
      null
     ],
     [
      "こうえん",
      null
     ],
     [
      "に",
      null
     ],
     [
      " ",
      null
     ],
     [
      "さんぽ",
      null
     ],
     [
      "に",
      null
     ],
     [
      " ",
      null
     ],
     [
      "行",
      "い"
     ],
     [
      "きます",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Tôi đi dạo ở công viên."
   },
   {
    "jp": "こうえんには さくらの 花が たくさん さいています。",
    "furi": [
     [
      "こうえん",
      null
     ],
     [
      "には",
      null
     ],
     [
      " ",
      null
     ],
     [
      "さくら",
      null
     ],
     [
      "の",
      null
     ],
     [
      " ",
      null
     ],
     [
      "花",
      "はな"
     ],
     [
      "が",
      null
     ],
     [
      " ",
      null
     ],
     [
      "たくさん",
      null
     ],
     [
      " ",
      null
     ],
     [
      "さいています",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Trong công viên có rất nhiều hoa anh đào đang nở."
   },
   {
    "jp": "花は ピンクで、 とても きれいです。",
    "furi": [
     [
      "花",
      "はな"
     ],
     [
      "は",
      null
     ],
     [
      " ",
      null
     ],
     [
      "ピンク",
      null
     ],
     [
      "で",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "とても",
      null
     ],
     [
      " ",
      null
     ],
     [
      "きれい",
      null
     ],
     [
      "です",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Hoa màu hồng, rất đẹp."
   },
   {
    "jp": "鳥が そらで うたいながら、 とんでいます。",
    "furi": [
     [
      "鳥",
      "とり"
     ],
     [
      "が",
      null
     ],
     [
      " ",
      null
     ],
     [
      "そら",
      null
     ],
     [
      "で",
      null
     ],
     [
      " ",
      null
     ],
     [
      "うた",
      null
     ],
     [
      "いながら",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "とんでいます",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Chim vừa hót vừa bay trên trời."
   },
   {
    "jp": "川の 水は とても きれいです。",
    "furi": [
     [
      "川",
      "かわ"
     ],
     [
      "の",
      null
     ],
     [
      " ",
      null
     ],
     [
      "水",
      "みず"
     ],
     [
      "は",
      null
     ],
     [
      " ",
      null
     ],
     [
      "とても",
      null
     ],
     [
      " ",
      null
     ],
     [
      "きれい",
      null
     ],
     [
      "です",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Nước sông rất trong."
   },
   {
    "jp": "はるは あたたかいから、 さんぽが たのしいです。",
    "furi": [
     [
      "はる",
      null
     ],
     [
      "は",
      null
     ],
     [
      " ",
      null
     ],
     [
      "あたたかい",
      null
     ],
     [
      "から",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "さんぽ",
      null
     ],
     [
      "が",
      null
     ],
     [
      " ",
      null
     ],
     [
      "たのしい",
      null
     ],
     [
      "です",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Vì mùa xuân ấm áp nên đi dạo rất vui."
   },
   {
    "jp": "明日も さんぽに 行きたいです。",
    "furi": [
     [
      "明日",
      "あした"
     ],
     [
      "も",
      null
     ],
     [
      " ",
      null
     ],
     [
      "さんぽ",
      null
     ],
     [
      "に",
      null
     ],
     [
      " ",
      null
     ],
     [
      "行",
      "い"
     ],
     [
      "きたい",
      null
     ],
     [
      "です",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Ngày mai tôi cũng muốn đi dạo nữa."
   }
  ],
  "vocab": [
   {
    "w": "さんぽ",
    "r": "さんぽ",
    "hv": "TÁN BỘ",
    "vi": "Đi dạo"
   },
   {
    "w": "さくら",
    "r": "さくら",
    "hv": "ANH",
    "vi": "Hoa anh đào"
   },
   {
    "w": "はる",
    "r": "はる",
    "hv": "XUÂN",
    "vi": "Mùa xuân"
   },
   {
    "w": "きれい",
    "r": "きれい",
    "hv": "KỲ LỆ",
    "vi": "Đẹp, xinh"
   },
   {
    "w": "鳥",
    "r": "とり",
    "hv": "ĐIỂU",
    "vi": "Chim"
   },
   {
    "w": "あたたかい",
    "r": "あたたかい",
    "hv": "NOÃN",
    "vi": "Ấm áp"
   }
  ],
  "grammar": [
   {
    "p": "V ながら",
    "lv": "N5",
    "vi": "Vừa… vừa…",
    "ex": "鳥が そらで うたいながら、 とんでいます。",
    "exVi": "Chim vừa hót vừa bay trên trời."
   },
   {
    "p": "～から、～（lý do）",
    "lv": "N5",
    "vi": "Vì… nên…",
    "ex": "はるは あたたかいから、 さんぽが たのしいです。",
    "exVi": "Vì mùa xuân ấm áp nên đi dạo rất vui."
   }
  ],
  "quiz": [
   {
    "q": "こうえんには 何が さいていますか。",
    "options": [
     "さくらの 花",
     "きくの 花",
     "すみれの 花",
     "ひまわりの 花"
    ],
    "answer": 0,
    "explain": "Trong bài có nói trong công viên có rất nhiều hoa anh đào đang nở.",
    "evidence": "さくらの 花が たくさん さいています",
    "tip": "Tìm câu có 'さいています' trong bài."
   },
   {
    "q": "はるは どうして さんぽが たのしいですか。",
    "options": [
     "あたたかいから",
     "さむいから",
     "あついから",
     "つめたいから"
    ],
    "answer": 0,
    "explain": "Trong bài có nói vì mùa xuân ấm áp nên đi dạo rất vui.",
    "evidence": "はるは あたたかいから、 さんぽが たのしいです",
    "tip": "Tìm câu có 'あたたかいから' trong bài."
   }
  ]
 },
 {
  "id": "dk-n4-01",
  "img": "dk-n4-01.jpg",
  "audio": "dk-n4-01.mp3",
  "timings": [
   0.015,
   4.544,
   8.857,
   14.579,
   18.432,
   24.232,
   28,
   30.955,
   35.585
  ],
  "level": "N4",
  "title": "駅前の 本屋",
  "titleVi": "Hiệu sách trước ga",
  "sentences": [
   {
    "jp": "わたしの 町の 駅の 前に、 新しい 本屋が できました。",
    "furi": [
     [
      "わたし",
      null
     ],
     [
      "の",
      null
     ],
     [
      " ",
      null
     ],
     [
      "町",
      "まち"
     ],
     [
      "の",
      null
     ],
     [
      " ",
      null
     ],
     [
      "駅",
      "えき"
     ],
     [
      "の",
      null
     ],
     [
      " ",
      null
     ],
     [
      "前",
      "まえ"
     ],
     [
      "に",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "新",
      "あたら"
     ],
     [
      "しい",
      null
     ],
     [
      " ",
      null
     ],
     [
      "本屋",
      "ほんや"
     ],
     [
      "が",
      null
     ],
     [
      " ",
      null
     ],
     [
      "できました",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Ở trước ga của thị trấn tôi vừa có một hiệu sách mới mở."
   },
   {
    "jp": "この 店は 朝 九時から 夜 十時まで 開いて います。",
    "furi": [
     [
      "この",
      null
     ],
     [
      " ",
      null
     ],
     [
      "店",
      "みせ"
     ],
     [
      "は",
      null
     ],
     [
      " ",
      null
     ],
     [
      "朝",
      "あさ"
     ],
     [
      " ",
      null
     ],
     [
      "九時",
      "くじ"
     ],
     [
      "から",
      null
     ],
     [
      " ",
      null
     ],
     [
      "夜",
      "よる"
     ],
     [
      " ",
      null
     ],
     [
      "十時",
      "じゅうじ"
     ],
     [
      "まで",
      null
     ],
     [
      " ",
      null
     ],
     [
      "開",
      "あ"
     ],
     [
      "いて",
      null
     ],
     [
      " ",
      null
     ],
     [
      "います",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Cửa hàng này mở cửa từ 9 giờ sáng đến 10 giờ tối."
   },
   {
    "jp": "中には きっさてんも あって、 コーヒーを 飲みながら 本を 読む ことが できます。",
    "furi": [
     [
      "中",
      "なか"
     ],
     [
      "には",
      null
     ],
     [
      " ",
      null
     ],
     [
      "きっさてん",
      null
     ],
     [
      "も",
      null
     ],
     [
      " ",
      null
     ],
     [
      "あって",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "コーヒー",
      null
     ],
     [
      "を",
      null
     ],
     [
      " ",
      null
     ],
     [
      "飲",
      "の"
     ],
     [
      "みながら",
      null
     ],
     [
      " ",
      null
     ],
     [
      "本",
      "ほん"
     ],
     [
      "を",
      null
     ],
     [
      " ",
      null
     ],
     [
      "読",
      "よ"
     ],
     [
      "む",
      null
     ],
     [
      " ",
      null
     ],
     [
      "こと",
      null
     ],
     [
      "が",
      null
     ],
     [
      " ",
      null
     ],
     [
      "できます",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Bên trong còn có quán cà phê, bạn có thể vừa uống cà phê vừa đọc sách."
   },
   {
    "jp": "わたしは 昨日の 午後、 その 本屋へ 行きました。",
    "furi": [
     [
      "わたし",
      null
     ],
     [
      "は",
      null
     ],
     [
      " ",
      null
     ],
     [
      "昨日",
      "きのう"
     ],
     [
      "の",
      null
     ],
     [
      " ",
      null
     ],
     [
      "午後",
      "ごご"
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "その",
      null
     ],
     [
      " ",
      null
     ],
     [
      "本屋",
      "ほんや"
     ],
     [
      "へ",
      null
     ],
     [
      " ",
      null
     ],
     [
      "行",
      "い"
     ],
     [
      "きました",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Chiều hôm qua tôi đã đi đến hiệu sách đó."
   },
   {
    "jp": "日本についての 本を さがして いたら、 親切な 店員が 手伝って くれました。",
    "furi": [
     [
      "日本",
      "にほん"
     ],
     [
      "について",
      null
     ],
     [
      "の",
      null
     ],
     [
      " ",
      null
     ],
     [
      "本",
      "ほん"
     ],
     [
      "を",
      null
     ],
     [
      " ",
      null
     ],
     [
      "さがして",
      null
     ],
     [
      " ",
      null
     ],
     [
      "いたら",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "親切",
      "しんせつ"
     ],
     [
      "な",
      null
     ],
     [
      " ",
      null
     ],
     [
      "店員",
      "てんいん"
     ],
     [
      "が",
      null
     ],
     [
      " ",
      null
     ],
     [
      "手伝",
      "てつだ"
     ],
     [
      "って",
      null
     ],
     [
      " ",
      null
     ],
     [
      "くれました",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Khi tôi đang tìm sách về Nhật Bản, một nhân viên tốt bụng đã giúp đỡ tôi."
   },
   {
    "jp": "外国の ことばの 本も たくさん ならんで いました。",
    "furi": [
     [
      "外国",
      "がいこく"
     ],
     [
      "の",
      null
     ],
     [
      " ",
      null
     ],
     [
      "ことば",
      null
     ],
     [
      "の",
      null
     ],
     [
      " ",
      null
     ],
     [
      "本",
      "ほん"
     ],
     [
      "も",
      null
     ],
     [
      " ",
      null
     ],
     [
      "たくさん",
      null
     ],
     [
      " ",
      null
     ],
     [
      "ならんで",
      null
     ],
     [
      " ",
      null
     ],
     [
      "いました",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Nhiều sách ngoại ngữ cũng được trưng bày ở đó."
   },
   {
    "jp": "わたしは 旅行の 本を にさつ 買いました。",
    "furi": [
     [
      "わたし",
      null
     ],
     [
      "は",
      null
     ],
     [
      " ",
      null
     ],
     [
      "旅行",
      "りょこう"
     ],
     [
      "の",
      null
     ],
     [
      " ",
      null
     ],
     [
      "本",
      "ほん"
     ],
     [
      "を",
      null
     ],
     [
      " ",
      null
     ],
     [
      "にさつ",
      null
     ],
     [
      " ",
      null
     ],
     [
      "買",
      "か"
     ],
     [
      "いました",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Tôi đã mua hai cuốn sách về du lịch."
   },
   {
    "jp": "家から 近いので、 これから 毎日 行こうと 思って います。",
    "furi": [
     [
      "家",
      "いえ"
     ],
     [
      "から",
      null
     ],
     [
      " ",
      null
     ],
     [
      "近",
      "ちか"
     ],
     [
      "いので",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "これから",
      null
     ],
     [
      " ",
      null
     ],
     [
      "毎日",
      "まいにち"
     ],
     [
      " ",
      null
     ],
     [
      "行",
      "い"
     ],
     [
      "こうと",
      null
     ],
     [
      " ",
      null
     ],
     [
      "思",
      "おも"
     ],
     [
      "って",
      null
     ],
     [
      " ",
      null
     ],
     [
      "います",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Vì gần nhà nên từ nay tôi định ngày nào cũng sẽ ghé qua."
   },
   {
    "jp": "みなさんも ぜひ 一度 行って みて ください。",
    "furi": [
     [
      "みなさん",
      null
     ],
     [
      "も",
      null
     ],
     [
      " ",
      null
     ],
     [
      "ぜひ",
      null
     ],
     [
      " ",
      null
     ],
     [
      "一度",
      "いちど"
     ],
     [
      " ",
      null
     ],
     [
      "行",
      "い"
     ],
     [
      "って",
      null
     ],
     [
      " ",
      null
     ],
     [
      "みて",
      null
     ],
     [
      " ",
      null
     ],
     [
      "ください",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Mọi người nhất định hãy thử ghé qua một lần nhé."
   }
  ],
  "vocab": [
   {
    "w": "本屋",
    "r": "ほんや",
    "hv": "BẢN ỐC",
    "vi": "Hiệu sách"
   },
   {
    "w": "きっさてん",
    "r": "きっさてん",
    "hv": "TRÀ ĐIẾM",
    "vi": "Quán trà, quán cà phê"
   },
   {
    "w": "店員",
    "r": "てんいん",
    "hv": "ĐIẾM VIÊN",
    "vi": "Nhân viên cửa hàng"
   },
   {
    "w": "親切",
    "r": "しんせつ",
    "hv": "THÂN THIẾT",
    "vi": "Tốt bụng, tử tế"
   },
   {
    "w": "ことば",
    "r": "ことば",
    "hv": "NGÔN DIỆP",
    "vi": "Ngôn ngữ, từ ngữ"
   }
  ],
  "grammar": [
   {
    "p": "V-ます + ながら",
    "lv": "N4",
    "vi": "Vừa làm việc này vừa làm việc kia",
    "ex": "コーヒーを 飲みながら 本を 読む ことが できます。",
    "exVi": "Có thể vừa uống cà phê vừa đọc sách."
   },
   {
    "p": "V-て くれます",
    "lv": "N4",
    "vi": "Ai đó làm việc gì đó cho mình",
    "ex": "親切な 店員が 手伝って くれました。",
    "exVi": "Nhân viên tốt bụng đã giúp đỡ tôi."
   }
  ],
  "quiz": [
   {
    "q": "この 本屋は 何時まで 開いて いますか。",
    "options": [
     "朝 九時まで",
     "夜 九時まで",
     "夜 十時まで",
     "午後 二時まで"
    ],
    "answer": 2,
    "explain": "Trong bài có nói cửa hàng mở cửa từ 9 giờ sáng đến 10 giờ tối.",
    "evidence": "夜 十時まで 開いて います",
    "tip": "Hãy tìm cụm từ chỉ thời gian và từ '開いて います' (mở cửa) trong bài."
   },
   {
    "q": "わたしは 本を なんさつ 買いましたか。",
    "options": [
     "いっさつ",
     "にさつ",
     "さんさつ",
     "よんさつ"
    ],
    "answer": 1,
    "explain": "Tác giả nói rằng đã mua 2 cuốn sách du lịch.",
    "evidence": "本を にさつ 買いました",
    "tip": "Tìm từ khóa '買いました' (đã mua) và số lượng đi kèm ngay trước nó."
   }
  ]
 },
 {
  "id": "dk-n4-02",
  "img": "dk-n4-02.jpg",
  "audio": "dk-n4-02.mp3",
  "timings": [
   0.015,
   4.235,
   7.507,
   11.821,
   14.516,
   19.859,
   23.774,
   26.942,
   31.203,
   34.191
  ],
  "level": "N4",
  "title": "花見に 行きました",
  "titleVi": "Tôi đã đi ngắm hoa anh đào",
  "sentences": [
   {
    "jp": "先週の 日曜日に、 友だちと 花見を しました。",
    "furi": [
     [
      "先週",
      "せんしゅう"
     ],
     [
      "の",
      null
     ],
     [
      " ",
      null
     ],
     [
      "日曜日",
      "にちようび"
     ],
     [
      "に",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "友",
      "とも"
     ],
     [
      "だち",
      null
     ],
     [
      "と",
      null
     ],
     [
      " ",
      null
     ],
     [
      "花見",
      "はなみ"
     ],
     [
      "を",
      null
     ],
     [
      " ",
      null
     ],
     [
      "しました",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Vào Chủ Nhật tuần trước, tôi đã đi ngắm hoa cùng với bạn bè."
   },
   {
    "jp": "朝、 早く 起きて おべんとうを 作りました。",
    "furi": [
     [
      "朝",
      "あさ"
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "早",
      "はや"
     ],
     [
      "く",
      null
     ],
     [
      " ",
      null
     ],
     [
      "起",
      "お"
     ],
     [
      "きて",
      null
     ],
     [
      " ",
      null
     ],
     [
      "おべんとう",
      null
     ],
     [
      "を",
      null
     ],
     [
      " ",
      null
     ],
     [
      "作",
      "つく"
     ],
     [
      "りました",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Buổi sáng, tôi đã dậy sớm và làm cơm hộp."
   },
   {
    "jp": "公園には たくさんの 人が いて、 とても にぎやかでした。",
    "furi": [
     [
      "公園",
      "こうえん"
     ],
     [
      "には",
      null
     ],
     [
      " ",
      null
     ],
     [
      "たくさん",
      null
     ],
     [
      "の",
      null
     ],
     [
      " ",
      null
     ],
     [
      "人",
      "ひと"
     ],
     [
      "が",
      null
     ],
     [
      " ",
      null
     ],
     [
      "いて",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "とても",
      null
     ],
     [
      " ",
      null
     ],
     [
      "にぎやかでした",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Ở công viên có rất nhiều người và không khí rất nhộn nhịp."
   },
   {
    "jp": "さくらの 花は きれいに さいて いました。",
    "furi": [
     [
      "さくら",
      null
     ],
     [
      "の",
      null
     ],
     [
      " ",
      null
     ],
     [
      "花",
      "はな"
     ],
     [
      "は",
      null
     ],
     [
      " ",
      null
     ],
     [
      "きれいに",
      null
     ],
     [
      " ",
      null
     ],
     [
      "さいて",
      null
     ],
     [
      " ",
      null
     ],
     [
      "いました",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Hoa anh đào đã nở rất đẹp."
   },
   {
    "jp": "私たちは 木の 下で おべんとうを 食べたり、 おさけを 飲んだり しました。",
    "furi": [
     [
      "私",
      "わたし"
     ],
     [
      "たち",
      null
     ],
     [
      "は",
      null
     ],
     [
      " ",
      null
     ],
     [
      "木",
      "き"
     ],
     [
      "の",
      null
     ],
     [
      " ",
      null
     ],
     [
      "下",
      "した"
     ],
     [
      "で",
      null
     ],
     [
      " ",
      null
     ],
     [
      "おべんとう",
      null
     ],
     [
      "を",
      null
     ],
     [
      " ",
      null
     ],
     [
      "食",
      "た"
     ],
     [
      "べたり",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "おさけ",
      null
     ],
     [
      "を",
      null
     ],
     [
      " ",
      null
     ],
     [
      "飲",
      "の"
     ],
     [
      "んだり",
      null
     ],
     [
      " ",
      null
     ],
     [
      "しました",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Chúng tôi đã cùng nhau ăn cơm hộp và uống rượu dưới gốc cây."
   },
   {
    "jp": "友だちは 歌を 歌いながら、 ダンスを しました。",
    "furi": [
     [
      "友",
      "とも"
     ],
     [
      "だち",
      null
     ],
     [
      "は",
      null
     ],
     [
      " ",
      null
     ],
     [
      "歌",
      "うた"
     ],
     [
      "を",
      null
     ],
     [
      " ",
      null
     ],
     [
      "歌",
      "うた"
     ],
     [
      "いながら",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "ダンス",
      null
     ],
     [
      "を",
      null
     ],
     [
      " ",
      null
     ],
     [
      "しました",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Bạn tôi vừa hát vừa nhảy múa."
   },
   {
    "jp": "私は 日本の 歌を 聞くのが 好きです。",
    "furi": [
     [
      "私",
      "わたし"
     ],
     [
      "は",
      null
     ],
     [
      " ",
      null
     ],
     [
      "日本",
      "にほん"
     ],
     [
      "の",
      null
     ],
     [
      " ",
      null
     ],
     [
      "歌",
      "うた"
     ],
     [
      "を",
      null
     ],
     [
      " ",
      null
     ],
     [
      "聞",
      "き"
     ],
     [
      "くのが",
      null
     ],
     [
      " ",
      null
     ],
     [
      "好",
      "す"
     ],
     [
      "きです",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Tôi rất thích nghe các bài hát Nhật Bản."
   },
   {
    "jp": "時々 風が ふくと、 花が ゆきのように ふります。",
    "furi": [
     [
      "時々",
      "ときどき"
     ],
     [
      " ",
      null
     ],
     [
      "風",
      "かぜ"
     ],
     [
      "が",
      null
     ],
     [
      " ",
      null
     ],
     [
      "ふくと",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "花",
      "はな"
     ],
     [
      "が",
      null
     ],
     [
      " ",
      null
     ],
     [
      "ゆき",
      null
     ],
     [
      "のように",
      null
     ],
     [
      " ",
      null
     ],
     [
      "ふります",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Thỉnh thoảng khi gió thổi, những cánh hoa rơi xuống như tuyết vậy."
   },
   {
    "jp": "その けしきは ほんとうに すばらしかったです。",
    "furi": [
     [
      "その",
      null
     ],
     [
      " ",
      null
     ],
     [
      "けしき",
      null
     ],
     [
      "は",
      null
     ],
     [
      " ",
      null
     ],
     [
      "ほんとうに",
      null
     ],
     [
      " ",
      null
     ],
     [
      "すばらしかったです",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Cảnh tượng đó thực sự rất tuyệt vời."
   },
   {
    "jp": "また 来年も 友だちと 花見に 行きたいです。",
    "furi": [
     [
      "また",
      null
     ],
     [
      " ",
      null
     ],
     [
      "来年",
      "らいねん"
     ],
     [
      "も",
      null
     ],
     [
      " ",
      null
     ],
     [
      "友",
      "とも"
     ],
     [
      "だち",
      null
     ],
     [
      "と",
      null
     ],
     [
      " ",
      null
     ],
     [
      "花見",
      "はなみ"
     ],
     [
      "に",
      null
     ],
     [
      " ",
      null
     ],
     [
      "行",
      "い"
     ],
     [
      "きたいです",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Năm sau tôi cũng muốn lại đi ngắm hoa cùng bạn bè."
   }
  ],
  "vocab": [
   {
    "w": "花見",
    "r": "はなみ",
    "hv": "HOA KIẾN",
    "vi": "Ngắm hoa"
   },
   {
    "w": "おべんとう",
    "r": "おべんとう",
    "hv": "BỆN ĐƯƠNG",
    "vi": "Cơm hộp"
   },
   {
    "w": "にぎやか",
    "r": "にぎやか",
    "hv": null,
    "vi": "Náo nhiệt, nhộn nhịp"
   },
   {
    "w": "けしき",
    "r": "けしき",
    "hv": "CẢNH SẮC",
    "vi": "Phong cảnh"
   },
   {
    "w": "ゆき",
    "r": "ゆき",
    "hv": "TUYẾT",
    "vi": "Tuyết"
   }
  ],
  "grammar": [
   {
    "p": "Vたり、Vたり します",
    "lv": "N5",
    "vi": "Liệt kê các hành động không theo thứ tự thời gian",
    "ex": "おべんとうを 食べたり、 おさけを 飲んだり しました。",
    "exVi": "Chúng tôi đã ăn cơm hộp và uống rượu (v.v...)."
   },
   {
    "p": "V-ます + ながら",
    "lv": "N4",
    "vi": "Vừa làm việc này vừa làm việc kia",
    "ex": "歌を 歌いながら、 ダンスを しました。",
    "exVi": "Vừa hát vừa nhảy múa."
   }
  ],
  "quiz": [
   {
    "q": "この 人は 公園で 何を しましたか。",
    "options": [
     "一人で おべんとうを 食べました。",
     "友だちと 歌を 歌いました。",
     "おべんとうを 食べたり、 おさけを 飲んだり しました。",
     "ゆきで あそびました。"
    ],
    "answer": 2,
    "explain": "Trong bài viết, tác giả nói rằng họ đã ăn cơm hộp và uống rượu cùng bạn bè dưới gốc cây.",
    "evidence": "おべんとうを 食べたり、 おさけを 飲んだり しました",
    "tip": "Hãy tìm cấu trúc liệt kê hành động 「～たり、～たり」 trong bài."
   },
   {
    "q": "けしきが ゆきのようだったのは どうしてですか。",
    "options": [
     "ほんとうに ゆきが ふったからです。",
     "風で 花が たくさん ふったからです。",
     "公園が 白かったからです。",
     "冬に 花見を したからです。"
    ],
    "answer": 1,
    "explain": "Tác giả miêu tả khi gió thổi, hoa rơi xuống trông giống như tuyết.",
    "evidence": "風が ふくと、 花が ゆきのように ふります",
    "tip": "Tìm câu có chứa từ 「ゆきのように」 để biết lý do tại sao cảnh tượng giống tuyết."
   }
  ]
 },
 {
  "id": "dk-n4-03",
  "img": "dk-n4-03.jpg",
  "audio": "dk-n4-03.mp3",
  "timings": [
   0.015,
   3.219,
   6.661,
   8.799,
   10.976,
   13.514,
   16.061,
   18.979,
   22.021,
   24.129,
   26.594
  ],
  "level": "N4",
  "title": "はじめての 旅行",
  "titleVi": "Chuyến du lịch đầu tiên",
  "sentences": [
   {
    "jp": "わたしは はじめて 京都へ 旅行に 行きました。",
    "furi": [
     [
      "わたし",
      null
     ],
     [
      "は",
      null
     ],
     [
      " ",
      null
     ],
     [
      "はじめて",
      null
     ],
     [
      " ",
      null
     ],
     [
      "京都",
      "きょうと"
     ],
     [
      "へ",
      null
     ],
     [
      " ",
      null
     ],
     [
      "旅行",
      "りょこう"
     ],
     [
      "に",
      null
     ],
     [
      " ",
      null
     ],
     [
      "行",
      "い"
     ],
     [
      "きました",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Tôi đã đi du lịch đến Kyoto lần đầu tiên."
   },
   {
    "jp": "わたしは 京都へ 行った ことが ありませんでした。",
    "furi": [
     [
      "わたし",
      null
     ],
     [
      "は",
      null
     ],
     [
      " ",
      null
     ],
     [
      "京都",
      "きょうと"
     ],
     [
      "へ",
      null
     ],
     [
      " ",
      null
     ],
     [
      "行",
      "い"
     ],
     [
      "った",
      null
     ],
     [
      " ",
      null
     ],
     [
      "こと",
      null
     ],
     [
      "が",
      null
     ],
     [
      " ",
      null
     ],
     [
      "ありませんでした",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Tôi chưa từng đến Kyoto bao giờ."
   },
   {
    "jp": "友だちと 二人で 行きました。",
    "furi": [
     [
      "友",
      "とも"
     ],
     [
      "だち",
      null
     ],
     [
      "と",
      null
     ],
     [
      " ",
      null
     ],
     [
      "二人",
      "ふたり"
     ],
     [
      "で",
      null
     ],
     [
      " ",
      null
     ],
     [
      "行",
      "い"
     ],
     [
      "きました",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Tôi đi cùng bạn, hai người."
   },
   {
    "jp": "朝 七時に 家を 出ました。",
    "furi": [
     [
      "朝",
      "あさ"
     ],
     [
      " ",
      null
     ],
     [
      "七時",
      "しちじ"
     ],
     [
      "に",
      null
     ],
     [
      " ",
      null
     ],
     [
      "家",
      "いえ"
     ],
     [
      "を",
      null
     ],
     [
      " ",
      null
     ],
     [
      "出",
      "で"
     ],
     [
      "ました",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Tôi rời nhà lúc 7 giờ sáng."
   },
   {
    "jp": "電車で 二時間 ぐらい かかりました。",
    "furi": [
     [
      "電車",
      "でんしゃ"
     ],
     [
      "で",
      null
     ],
     [
      " ",
      null
     ],
     [
      "二時間",
      "にじかん"
     ],
     [
      " ",
      null
     ],
     [
      "ぐらい",
      null
     ],
     [
      " ",
      null
     ],
     [
      "かかりました",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Đi tàu điện mất khoảng hai tiếng."
   },
   {
    "jp": "京都の 寺は とても きれいでした。",
    "furi": [
     [
      "京都",
      "きょうと"
     ],
     [
      "の",
      null
     ],
     [
      " ",
      null
     ],
     [
      "寺",
      "てら"
     ],
     [
      "は",
      null
     ],
     [
      " ",
      null
     ],
     [
      "とても",
      null
     ],
     [
      " ",
      null
     ],
     [
      "きれいでした",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Ngôi chùa ở Kyoto rất đẹp."
   },
   {
    "jp": "わたしたちは 写真を たくさん とりました。",
    "furi": [
     [
      "わたしたち",
      null
     ],
     [
      "は",
      null
     ],
     [
      " ",
      null
     ],
     [
      "写真",
      "しゃしん"
     ],
     [
      "を",
      null
     ],
     [
      " ",
      null
     ],
     [
      "たくさん",
      null
     ],
     [
      " ",
      null
     ],
     [
      "とりました",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Chúng tôi đã chụp rất nhiều ảnh."
   },
   {
    "jp": "昼ごはんに おいしい うどんを 食べてみました。",
    "furi": [
     [
      "昼",
      "ひる"
     ],
     [
      "ごはん",
      null
     ],
     [
      "に",
      null
     ],
     [
      " ",
      null
     ],
     [
      "おいしい",
      null
     ],
     [
      " ",
      null
     ],
     [
      "うどん",
      null
     ],
     [
      "を",
      null
     ],
     [
      " ",
      null
     ],
     [
      "食",
      "た"
     ],
     [
      "べて",
      null
     ],
     [
      "みました",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Bữa trưa, tôi đã thử ăn món udon ngon."
   },
   {
    "jp": "おみやげを 三つ 買いました。",
    "furi": [
     [
      "おみやげ",
      null
     ],
     [
      "を",
      null
     ],
     [
      " ",
      null
     ],
     [
      "三",
      "みっ"
     ],
     [
      "つ",
      null
     ],
     [
      " ",
      null
     ],
     [
      "買",
      "か"
     ],
     [
      "いました",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Tôi đã mua ba món quà lưu niệm."
   },
   {
    "jp": "夜 八時に 家に 帰りました。",
    "furi": [
     [
      "夜",
      "よる"
     ],
     [
      " ",
      null
     ],
     [
      "八時",
      "はちじ"
     ],
     [
      "に",
      null
     ],
     [
      " ",
      null
     ],
     [
      "家",
      "いえ"
     ],
     [
      "に",
      null
     ],
     [
      " ",
      null
     ],
     [
      "帰",
      "かえ"
     ],
     [
      "りました",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Tôi về nhà lúc 8 giờ tối."
   },
   {
    "jp": "とても 楽しい 旅行でした。",
    "furi": [
     [
      "とても",
      null
     ],
     [
      " ",
      null
     ],
     [
      "楽",
      "たの"
     ],
     [
      "しい",
      null
     ],
     [
      " ",
      null
     ],
     [
      "旅行",
      "りょこう"
     ],
     [
      "でした",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Đó là một chuyến du lịch rất vui."
   }
  ],
  "vocab": [
   {
    "w": "旅行",
    "r": "りょこう",
    "hv": "LỮ HÀNH",
    "vi": "Du lịch, chuyến du lịch"
   },
   {
    "w": "京都",
    "r": "きょうと",
    "hv": "KINH ĐÔ",
    "vi": "Kyoto (cố đô của Nhật Bản)"
   },
   {
    "w": "友だち",
    "r": "ともだち",
    "hv": "HỮU",
    "vi": "Bạn bè"
   },
   {
    "w": "写真",
    "r": "しゃしん",
    "hv": "TẢ CHÂN",
    "vi": "Ảnh, bức ảnh"
   },
   {
    "w": "おみやげ",
    "r": "おみやげ",
    "hv": "THỔ SẢN",
    "vi": "Quà lưu niệm, quà mang về"
   },
   {
    "w": "楽しい",
    "r": "たのしい",
    "hv": "LẠC",
    "vi": "Vui vẻ, thú vị"
   }
  ],
  "grammar": [
   {
    "p": "Vた ことが あります",
    "lv": "N5",
    "vi": "Đã từng… / chưa từng…",
    "ex": "わたしは 京都へ 行った ことが ありませんでした。",
    "exVi": "Tôi chưa từng đến Kyoto bao giờ."
   },
   {
    "p": "V-て みます",
    "lv": "N4",
    "vi": "Thử làm…",
    "ex": "昼ごはんに おいしい うどんを 食べてみました。",
    "exVi": "Bữa trưa, tôi đã thử ăn món udon ngon."
   }
  ],
  "quiz": [
   {
    "q": "わたしは 何時に 家を 出ましたか。",
    "options": [
     "朝 六時に",
     "朝 七時に",
     "朝 八時に",
     "朝 九時に"
    ],
    "answer": 1,
    "explain": "Trong bài có nói tôi rời nhà lúc 7 giờ sáng.",
    "evidence": "朝 七時に 家を 出ました",
    "tip": "Tìm thời gian trong câu về buổi sáng."
   },
   {
    "q": "わたしは 昼ごはんに 何を 食べましたか。",
    "options": [
     "すしを",
     "うどんを",
     "ラーメンを",
     "パンを"
    ],
    "answer": 1,
    "explain": "Bữa trưa, tôi đã thử ăn món udon ngon.",
    "evidence": "おいしい うどんを 食べてみました",
    "tip": "Tìm món ăn trong câu về bữa trưa."
   }
  ]
 },
 {
  "id": "dk-n4-04",
  "img": "dk-n4-04.jpg",
  "audio": "dk-n4-04.mp3",
  "timings": [
   0.015,
   4.156,
   7.156,
   10.766,
   13.942,
   16.783,
   19.534,
   22.564,
   24.519,
   26.985
  ],
  "level": "N4",
  "title": "町の おまつり",
  "titleVi": "Lễ hội của thị trấn",
  "sentences": [
   {
    "jp": "わたしの 町では 毎年 八月に お祭りが あります。",
    "furi": [
     [
      "わたし",
      null
     ],
     [
      "の",
      null
     ],
     [
      " ",
      null
     ],
     [
      "町",
      "まち"
     ],
     [
      "では",
      null
     ],
     [
      " ",
      null
     ],
     [
      "毎年",
      "まいねん"
     ],
     [
      " ",
      null
     ],
     [
      "八月",
      "はちがつ"
     ],
     [
      "に",
      null
     ],
     [
      " ",
      null
     ],
     [
      "お",
      null
     ],
     [
      "祭",
      "まつ"
     ],
     [
      "り",
      null
     ],
     [
      "が",
      null
     ],
     [
      " ",
      null
     ],
     [
      "あります",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Ở thị trấn của tôi, mỗi năm vào tháng 8 đều có lễ hội."
   },
   {
    "jp": "神社の 前に たくさんの 屋台が あります。",
    "furi": [
     [
      "神社",
      "じんじゃ"
     ],
     [
      "の",
      null
     ],
     [
      " ",
      null
     ],
     [
      "前",
      "まえ"
     ],
     [
      "に",
      null
     ],
     [
      " ",
      null
     ],
     [
      "たくさん",
      null
     ],
     [
      "の",
      null
     ],
     [
      " ",
      null
     ],
     [
      "屋台",
      "やたい"
     ],
     [
      "が",
      null
     ],
     [
      " ",
      null
     ],
     [
      "あります",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Trước đền thờ có rất nhiều quầy hàng."
   },
   {
    "jp": "屋台では たこやきや かきごおりを 売って います。",
    "furi": [
     [
      "屋台",
      "やたい"
     ],
     [
      "では",
      null
     ],
     [
      " ",
      null
     ],
     [
      "たこやき",
      null
     ],
     [
      "や",
      null
     ],
     [
      " ",
      null
     ],
     [
      "かきごおり",
      null
     ],
     [
      "を",
      null
     ],
     [
      " ",
      null
     ],
     [
      "売",
      "う"
     ],
     [
      "って",
      null
     ],
     [
      " ",
      null
     ],
     [
      "います",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Ở các quầy hàng, người ta bán takoyaki và đá bào."
   },
   {
    "jp": "夜に なると、 花火が そらに 上がります。",
    "furi": [
     [
      "夜",
      "よる"
     ],
     [
      "に",
      null
     ],
     [
      " ",
      null
     ],
     [
      "なると",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "花火",
      "はなび"
     ],
     [
      "が",
      null
     ],
     [
      " ",
      null
     ],
     [
      "そら",
      null
     ],
     [
      "に",
      null
     ],
     [
      " ",
      null
     ],
     [
      "上",
      "あ"
     ],
     [
      "がります",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Khi trời tối, pháo hoa bay lên trời."
   },
   {
    "jp": "花火は とても 大きくて、 きれいです。",
    "furi": [
     [
      "花火",
      "はなび"
     ],
     [
      "は",
      null
     ],
     [
      " ",
      null
     ],
     [
      "とても",
      null
     ],
     [
      " ",
      null
     ],
     [
      "大",
      "おお"
     ],
     [
      "きくて",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "きれいです",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Pháo hoa rất lớn và đẹp."
   },
   {
    "jp": "子どもたちは ゆかたを 着て おどります。",
    "furi": [
     [
      "子",
      "こ"
     ],
     [
      "どもたち",
      null
     ],
     [
      "は",
      null
     ],
     [
      " ",
      null
     ],
     [
      "ゆかた",
      null
     ],
     [
      "を",
      null
     ],
     [
      " ",
      null
     ],
     [
      "着",
      "き"
     ],
     [
      "て",
      null
     ],
     [
      " ",
      null
     ],
     [
      "おどります",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Trẻ em mặc yukata và nhảy múa."
   },
   {
    "jp": "わたしは 友だちと 金魚すくいを しました。",
    "furi": [
     [
      "わたし",
      null
     ],
     [
      "は",
      null
     ],
     [
      " ",
      null
     ],
     [
      "友",
      "とも"
     ],
     [
      "だち",
      null
     ],
     [
      "と",
      null
     ],
     [
      " ",
      null
     ],
     [
      "金魚",
      "きんぎょ"
     ],
     [
      "すくい",
      null
     ],
     [
      "を",
      null
     ],
     [
      " ",
      null
     ],
     [
      "しました",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Tôi đã chơi trò vớt cá vàng cùng bạn."
   },
   {
    "jp": "金魚を 二ひき 取りました。",
    "furi": [
     [
      "金魚",
      "きんぎょ"
     ],
     [
      "を",
      null
     ],
     [
      " ",
      null
     ],
     [
      "二",
      "に"
     ],
     [
      "ひき",
      null
     ],
     [
      " ",
      null
     ],
     [
      "取",
      "と"
     ],
     [
      "りました",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Tôi đã vớt được hai con cá vàng."
   },
   {
    "jp": "お祭りは 夜 九時に おわります。",
    "furi": [
     [
      "お",
      null
     ],
     [
      "祭",
      "まつ"
     ],
     [
      "り",
      null
     ],
     [
      "は",
      null
     ],
     [
      " ",
      null
     ],
     [
      "夜",
      "よる"
     ],
     [
      " ",
      null
     ],
     [
      "九時",
      "くじ"
     ],
     [
      "に",
      null
     ],
     [
      " ",
      null
     ],
     [
      "おわります",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Lễ hội kết thúc lúc 9 giờ tối."
   },
   {
    "jp": "わたしは 来年も お祭りに 行きたいです。",
    "furi": [
     [
      "わたし",
      null
     ],
     [
      "は",
      null
     ],
     [
      " ",
      null
     ],
     [
      "来年",
      "らいねん"
     ],
     [
      "も",
      null
     ],
     [
      " ",
      null
     ],
     [
      "お",
      null
     ],
     [
      "祭",
      "まつ"
     ],
     [
      "り",
      null
     ],
     [
      "に",
      null
     ],
     [
      " ",
      null
     ],
     [
      "行",
      "い"
     ],
     [
      "きたいです",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Năm sau tôi cũng muốn đi lễ hội."
   }
  ],
  "vocab": [
   {
    "w": "お祭り",
    "r": "おまつり",
    "hv": "TẾ",
    "vi": "Lễ hội"
   },
   {
    "w": "神社",
    "r": "じんじゃ",
    "hv": "THẦN XÃ",
    "vi": "Đền Thần đạo"
   },
   {
    "w": "屋台",
    "r": "やたい",
    "hv": "ỐC ĐÀI",
    "vi": "Quầy hàng (ở lễ hội)"
   },
   {
    "w": "花火",
    "r": "はなび",
    "hv": "HOA HỎA",
    "vi": "Pháo hoa"
   },
   {
    "w": "ゆかた",
    "r": "ゆかた",
    "hv": "DỤC Y",
    "vi": "Áo yukata (áo mặc mùa hè)"
   },
   {
    "w": "来年",
    "r": "らいねん",
    "hv": "LAI NIÊN",
    "vi": "Năm sau, sang năm"
   }
  ],
  "grammar": [
   {
    "p": "V thể từ điển と、～",
    "lv": "N5",
    "vi": "Khi… thì… (điều tất yếu xảy ra)",
    "ex": "夜に なると、 花火が そらに 上がります。",
    "exVi": "Khi trời tối, pháo hoa bay lên trời."
   },
   {
    "p": "N や N",
    "lv": "N4",
    "vi": "… và… (liệt kê ví dụ)",
    "ex": "屋台では たこやきや かきごおりを 売って います。",
    "exVi": "Ở các quầy hàng, người ta bán takoyaki và đá bào."
   }
  ],
  "quiz": [
   {
    "q": "お祭りは いつ ありますか。",
    "options": [
     "毎年 七月に",
     "毎年 八月に",
     "毎年 九月に",
     "毎年 十月に"
    ],
    "answer": 1,
    "explain": "Trong bài có nói lễ hội diễn ra mỗi năm vào tháng 8.",
    "evidence": "毎年 八月に お祭りが あります",
    "tip": "Tìm tháng diễn ra lễ hội trong câu đầu tiên."
   },
   {
    "q": "わたしは 金魚を 何ひき 取りましたか。",
    "options": [
     "一ひき",
     "二ひき",
     "三ひき",
     "四ひき"
    ],
    "answer": 1,
    "explain": "Trong bài có nói tôi đã vớt được hai con cá vàng.",
    "evidence": "金魚を 二ひき 取りました",
    "tip": "Tìm số cá vàng trong câu về trò vớt cá."
   }
  ]
 },
 {
  "id": "dk-n4-05",
  "img": "dk-n4-05.jpg",
  "audio": "dk-n4-05.mp3",
  "timings": [
   0.015,
   2.996,
   6.0,
   9.475,
   13.055,
   15.463,
   18.239,
   21.953,
   24.316,
   28.383
  ],
  "level": "N4",
  "title": "海に 行きました",
  "titleVi": "Tôi đã đi biển",
  "sentences": [
   {
    "jp": "夏休みに、 家族で 海へ 行きました。",
    "furi": [
     [
      "夏休",
      "なつやす"
     ],
     [
      "みに",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "家族",
      "かぞく"
     ],
     [
      "で",
      null
     ],
     [
      " ",
      null
     ],
     [
      "海",
      "うみ"
     ],
     [
      "へ",
      null
     ],
     [
      " ",
      null
     ],
     [
      "行",
      "い"
     ],
     [
      "きました",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Vào kỳ nghỉ hè, tôi đã đi biển cùng gia đình."
   },
   {
    "jp": "海は 青くて、 とても きれいそうでした。",
    "furi": [
     [
      "海",
      "うみ"
     ],
     [
      "は",
      null
     ],
     [
      " ",
      null
     ],
     [
      "青",
      "あお"
     ],
     [
      "くて",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "とても",
      null
     ],
     [
      " ",
      null
     ],
     [
      "きれいそう",
      null
     ],
     [
      "でした",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Biển xanh và trông rất đẹp."
   },
   {
    "jp": "わたしは 海で 泳いだ ことが ありませんでした。",
    "furi": [
     [
      "わたし",
      null
     ],
     [
      "は",
      null
     ],
     [
      " ",
      null
     ],
     [
      "海",
      "うみ"
     ],
     [
      "で",
      null
     ],
     [
      " ",
      null
     ],
     [
      "泳",
      "およ"
     ],
     [
      "いだ",
      null
     ],
     [
      " ",
      null
     ],
     [
      "こと",
      null
     ],
     [
      "が",
      null
     ],
     [
      " ",
      null
     ],
     [
      "ありませんでした",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Tôi chưa từng bơi ở biển bao giờ."
   },
   {
    "jp": "でも、 この 日は はじめて 海で 泳ぎました。",
    "furi": [
     [
      "でも",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "この",
      null
     ],
     [
      " ",
      null
     ],
     [
      "日",
      "ひ"
     ],
     [
      "は",
      null
     ],
     [
      " ",
      null
     ],
     [
      "はじめて",
      null
     ],
     [
      " ",
      null
     ],
     [
      "海",
      "うみ"
     ],
     [
      "で",
      null
     ],
     [
      " ",
      null
     ],
     [
      "泳",
      "およ"
     ],
     [
      "ぎました",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Nhưng hôm đó, tôi đã bơi ở biển lần đầu tiên."
   },
   {
    "jp": "海の 水は つめたかったです。",
    "furi": [
     [
      "海",
      "うみ"
     ],
     [
      "の",
      null
     ],
     [
      " ",
      null
     ],
     [
      "水",
      "みず"
     ],
     [
      "は",
      null
     ],
     [
      " ",
      null
     ],
     [
      "つめたかった",
      null
     ],
     [
      "です",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Nước biển rất lạnh."
   },
   {
    "jp": "すなはまで 貝を たくさん ひろいました。",
    "furi": [
     [
      "すなはま",
      null
     ],
     [
      "で",
      null
     ],
     [
      " ",
      null
     ],
     [
      "貝",
      "かい"
     ],
     [
      "を",
      null
     ],
     [
      " ",
      null
     ],
     [
      "たくさん",
      null
     ],
     [
      " ",
      null
     ],
     [
      "ひろいました",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Trên bãi cát, tôi đã nhặt được rất nhiều vỏ sò."
   },
   {
    "jp": "お昼に、 海の 近くで 魚を 食べました。",
    "furi": [
     [
      "お",
      null
     ],
     [
      "昼",
      "ひる"
     ],
     [
      "に",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "海",
      "うみ"
     ],
     [
      "の",
      null
     ],
     [
      " ",
      null
     ],
     [
      "近",
      "ちか"
     ],
     [
      "くで",
      null
     ],
     [
      " ",
      null
     ],
     [
      "魚",
      "さかな"
     ],
     [
      "を",
      null
     ],
     [
      " ",
      null
     ],
     [
      "食",
      "た"
     ],
     [
      "べました",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Buổi trưa, tôi đã ăn cá gần biển."
   },
   {
    "jp": "魚は とても おいしかったです。",
    "furi": [
     [
      "魚",
      "さかな"
     ],
     [
      "は",
      null
     ],
     [
      " ",
      null
     ],
     [
      "とても",
      null
     ],
     [
      " ",
      null
     ],
     [
      "おいしかった",
      null
     ],
     [
      "です",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Cá rất ngon."
   },
   {
    "jp": "夕方、 空が 赤くなって、 とても きれいでした。",
    "furi": [
     [
      "夕方",
      "ゆうがた"
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "空",
      "そら"
     ],
     [
      "が",
      null
     ],
     [
      " ",
      null
     ],
     [
      "赤",
      "あか"
     ],
     [
      "くなって",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "とても",
      null
     ],
     [
      " ",
      null
     ],
     [
      "きれい",
      null
     ],
     [
      "でした",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Buổi chiều, bầu trời chuyển sang màu đỏ và rất đẹp."
   },
   {
    "jp": "わたしは 来年も 海に 行きたいです。",
    "furi": [
     [
      "わたし",
      null
     ],
     [
      "は",
      null
     ],
     [
      " ",
      null
     ],
     [
      "来年",
      "らいねん"
     ],
     [
      "も",
      null
     ],
     [
      " ",
      null
     ],
     [
      "海",
      "うみ"
     ],
     [
      "に",
      null
     ],
     [
      " ",
      null
     ],
     [
      "行",
      "い"
     ],
     [
      "きたい",
      null
     ],
     [
      "です",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Năm sau tôi cũng muốn đi biển nữa."
   }
  ],
  "vocab": [
   {
    "w": "海",
    "r": "うみ",
    "hv": "HẢI",
    "vi": "Biển"
   },
   {
    "w": "家族",
    "r": "かぞく",
    "hv": "GIA TỘC",
    "vi": "Gia đình"
   },
   {
    "w": "泳ぐ",
    "r": "およぐ",
    "hv": "VỊNH",
    "vi": "Bơi"
   },
   {
    "w": "貝",
    "r": "かい",
    "hv": "BỐI",
    "vi": "Vỏ sò, con sò"
   },
   {
    "w": "すなはま",
    "r": "すなはま",
    "hv": "SA TÂN",
    "vi": "Bãi cát"
   },
   {
    "w": "お昼",
    "r": "おひる",
    "hv": "TRÚ",
    "vi": "Buổi trưa"
   }
  ],
  "grammar": [
   {
    "p": "〜そうです (vẻ bề ngoài)",
    "lv": "N4",
    "vi": "Trông có vẻ… (nhìn bề ngoài)",
    "ex": "海は 青くて、 とても きれいそうでした。",
    "exVi": "Biển xanh và trông rất đẹp."
   },
   {
    "p": "Vた ことが あります",
    "lv": "N5",
    "vi": "Đã từng… / chưa từng…",
    "ex": "わたしは 海で 泳いだ ことが ありませんでした。",
    "exVi": "Tôi chưa từng bơi ở biển bao giờ."
   }
  ],
  "quiz": [
   {
    "q": "わたしは 海で 泳いだ ことが ありましたか。",
    "options": [
     "ありました",
     "ありませんでした",
     "毎日 泳ぎました",
     "泳ぐのが きらいでした"
    ],
    "answer": 1,
    "explain": "Trong bài có nói tôi chưa từng bơi ở biển bao giờ.",
    "evidence": "海で 泳いだ ことが ありませんでした",
    "tip": "Tìm câu về kinh nghiệm bơi ở biển."
   },
   {
    "q": "すなはまで わたしは 何を ひろいましたか。",
    "options": [
     "貝を",
     "石を",
     "花を",
     "木を"
    ],
    "answer": 0,
    "explain": "Trong bài có nói trên bãi cát, tôi đã nhặt được rất nhiều vỏ sò.",
    "evidence": "すなはまで 貝を たくさん ひろいました",
    "tip": "Tìm đồ vật trong câu về bãi cát."
   }
  ]
 },
 {
  "id": "dk-n4-06",
  "img": "dk-n4-06.jpg",
  "audio": "dk-n4-06.mp3",
  "timings": [
   0.015,
   4.183,
   7.534,
   10.449,
   13.724,
   17.552,
   19.883,
   23.738,
   28.116,
   30.593
  ],
  "level": "N4",
  "title": "おばあさんの いえ",
  "titleVi": "Nhà của bà",
  "sentences": [
   {
    "jp": "夏休みに、 わたしは おばあさんの いえに 行きました。",
    "furi": [
     [
      "夏休",
      "なつやす"
     ],
     [
      "みに",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "わたし",
      null
     ],
     [
      "は",
      null
     ],
     [
      " ",
      null
     ],
     [
      "おばあさん",
      null
     ],
     [
      "の",
      null
     ],
     [
      " ",
      null
     ],
     [
      "いえ",
      null
     ],
     [
      "に",
      null
     ],
     [
      " ",
      null
     ],
     [
      "行",
      "い"
     ],
     [
      "きました",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Vào kỳ nghỉ hè, tôi đã đến nhà bà."
   },
   {
    "jp": "おばあさんの いえは 山の 近くに あります。",
    "furi": [
     [
      "おばあさん",
      null
     ],
     [
      "の",
      null
     ],
     [
      " ",
      null
     ],
     [
      "いえ",
      null
     ],
     [
      "は",
      null
     ],
     [
      " ",
      null
     ],
     [
      "山",
      "やま"
     ],
     [
      "の",
      null
     ],
     [
      " ",
      null
     ],
     [
      "近",
      "ちか"
     ],
     [
      "くに",
      null
     ],
     [
      " ",
      null
     ],
     [
      "あります",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Nhà bà ở gần núi."
   },
   {
    "jp": "いえの 前には 田んぼや 畑が あります。",
    "furi": [
     [
      "いえ",
      null
     ],
     [
      "の",
      null
     ],
     [
      " ",
      null
     ],
     [
      "前",
      "まえ"
     ],
     [
      "には",
      null
     ],
     [
      " ",
      null
     ],
     [
      "田",
      "た"
     ],
     [
      "んぼ",
      null
     ],
     [
      "や",
      null
     ],
     [
      " ",
      null
     ],
     [
      "畑",
      "はたけ"
     ],
     [
      "が",
      null
     ],
     [
      " ",
      null
     ],
     [
      "あります",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Trước nhà có ruộng lúa và ruộng rau."
   },
   {
    "jp": "おばあさんは ねこと いっしょに 住んでいます。",
    "furi": [
     [
      "おばあさん",
      null
     ],
     [
      "は",
      null
     ],
     [
      " ",
      null
     ],
     [
      "ねこ",
      null
     ],
     [
      "と",
      null
     ],
     [
      " ",
      null
     ],
     [
      "いっしょに",
      null
     ],
     [
      " ",
      null
     ],
     [
      "住",
      "す"
     ],
     [
      "んで",
      null
     ],
     [
      "います",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Bà sống cùng với một con mèo."
   },
   {
    "jp": "おばあさんは 手作りの 料理を 作って くれました。",
    "furi": [
     [
      "おばあさん",
      null
     ],
     [
      "は",
      null
     ],
     [
      " ",
      null
     ],
     [
      "手作",
      "てづく"
     ],
     [
      "り",
      null
     ],
     [
      "の",
      null
     ],
     [
      " ",
      null
     ],
     [
      "料理",
      "りょうり"
     ],
     [
      "を",
      null
     ],
     [
      " ",
      null
     ],
     [
      "作",
      "つく"
     ],
     [
      "って",
      null
     ],
     [
      " ",
      null
     ],
     [
      "くれ",
      null
     ],
     [
      "ました",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Bà đã làm cho tôi món ăn tự nấu."
   },
   {
    "jp": "ごはんは とても おいしかったです。",
    "furi": [
     [
      "ごはん",
      null
     ],
     [
      "は",
      null
     ],
     [
      " ",
      null
     ],
     [
      "とても",
      null
     ],
     [
      " ",
      null
     ],
     [
      "おいしかった",
      null
     ],
     [
      "です",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Cơm rất ngon."
   },
   {
    "jp": "おばあさんは むかしの 話を たくさんして くれました。",
    "furi": [
     [
      "おばあさん",
      null
     ],
     [
      "は",
      null
     ],
     [
      " ",
      null
     ],
     [
      "むかし",
      null
     ],
     [
      "の",
      null
     ],
     [
      " ",
      null
     ],
     [
      "話",
      "はなし"
     ],
     [
      "を",
      null
     ],
     [
      " ",
      null
     ],
     [
      "たくさん",
      null
     ],
     [
      "して",
      null
     ],
     [
      " ",
      null
     ],
     [
      "くれました",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Bà đã kể cho tôi nghe rất nhiều chuyện ngày xưa."
   },
   {
    "jp": "午後、 わたしは おばあさんと 川の そばで さんぽしました。",
    "furi": [
     [
      "午後",
      "ごご"
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "わたし",
      null
     ],
     [
      "は",
      null
     ],
     [
      " ",
      null
     ],
     [
      "おばあさん",
      null
     ],
     [
      "と",
      null
     ],
     [
      " ",
      null
     ],
     [
      "川",
      "かわ"
     ],
     [
      "の",
      null
     ],
     [
      " ",
      null
     ],
     [
      "そば",
      null
     ],
     [
      "で",
      null
     ],
     [
      " ",
      null
     ],
     [
      "さんぽ",
      null
     ],
     [
      "しました",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Buổi chiều, tôi đã đi dạo bên sông cùng bà."
   },
   {
    "jp": "川の 水は とても きれいでした。",
    "furi": [
     [
      "川",
      "かわ"
     ],
     [
      "の",
      null
     ],
     [
      " ",
      null
     ],
     [
      "水",
      "みず"
     ],
     [
      "は",
      null
     ],
     [
      " ",
      null
     ],
     [
      "とても",
      null
     ],
     [
      " ",
      null
     ],
     [
      "きれい",
      null
     ],
     [
      "でした",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Nước sông rất trong."
   },
   {
    "jp": "わたしは おばあさんが 大好きです。",
    "furi": [
     [
      "わたし",
      null
     ],
     [
      "は",
      null
     ],
     [
      " ",
      null
     ],
     [
      "おばあさん",
      null
     ],
     [
      "が",
      null
     ],
     [
      " ",
      null
     ],
     [
      "大好き",
      "だいすき"
     ],
     [
      "です",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Tôi rất yêu bà."
   }
  ],
  "vocab": [
   {
    "w": "おばあさん",
    "r": "おばあさん",
    "hv": "TỔ MẪU",
    "vi": "Bà (của mình)"
   },
   {
    "w": "田んぼ",
    "r": "たんぼ",
    "hv": "ĐIỀN",
    "vi": "Ruộng lúa"
   },
   {
    "w": "ねこ",
    "r": "ねこ",
    "hv": "MIÊU",
    "vi": "Con mèo"
   },
   {
    "w": "手作り",
    "r": "てづくり",
    "hv": "THỦ TÁC",
    "vi": "Tự làm bằng tay, tự nấu"
   },
   {
    "w": "料理",
    "r": "りょうり",
    "hv": "LIỆU LÝ",
    "vi": "Món ăn, việc nấu ăn"
   },
   {
    "w": "さんぽ",
    "r": "さんぽ",
    "hv": "TẢN BỘ",
    "vi": "Đi dạo"
   }
  ],
  "grammar": [
   {
    "p": "V-て くれます",
    "lv": "N4",
    "vi": "Ai đó làm… cho mình",
    "ex": "おばあさんは 手作りの 料理を 作って くれました。",
    "exVi": "Bà đã làm cho tôi món ăn tự nấu."
   },
   {
    "p": "N や N",
    "lv": "N4",
    "vi": "… và… (liệt kê ví dụ)",
    "ex": "いえの 前には 田んぼや 畑が あります。",
    "exVi": "Trước nhà có ruộng lúa và ruộng rau."
   }
  ],
  "quiz": [
   {
    "q": "おばあさんの いえの 前に 何が ありますか。",
    "options": [
     "田んぼや 畑が",
     "海や 山が",
     "店や 学校が",
     "公園や 川が"
    ],
    "answer": 0,
    "explain": "Trong bài có nói trước nhà bà có ruộng lúa và ruộng rau.",
    "evidence": "いえの 前には 田んぼや 畑が あります",
    "tip": "Tìm câu mô tả trước nhà bà."
   },
   {
    "q": "おばあさんは 何を 作って くれましたか。",
    "options": [
     "手作りの 料理を",
     "新しい 服を",
     "大きな 家を",
     "おいしい ケーキを"
    ],
    "answer": 0,
    "explain": "Trong bài có nói bà đã làm món ăn tự nấu cho tôi.",
    "evidence": "手作りの 料理を 作って くれました",
    "tip": "Tìm câu về món ăn bà làm."
   }
  ]
 },
 {
  "id": "dk-n4-07",
  "img": "dk-n4-07.jpg",
  "audio": "dk-n4-07.mp3",
  "timings": [
   0.015,
   4.135,
   6.789,
   9.869,
   12.761,
   15.581,
   20.421,
   22.907,
   25.605,
   29.483
  ],
  "level": "N4",
  "title": "たんじょうびの パーティー",
  "titleVi": "Tiệc sinh nhật",
  "sentences": [
   {
    "jp": "先週、 わたしの たんじょうびの パーティーを しました。",
    "furi": [
     [
      "先週",
      "せんしゅう"
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "わたし",
      null
     ],
     [
      "の",
      null
     ],
     [
      " ",
      null
     ],
     [
      "たんじょうび",
      null
     ],
     [
      "の",
      null
     ],
     [
      " ",
      null
     ],
     [
      "パーティー",
      null
     ],
     [
      "を",
      null
     ],
     [
      " ",
      null
     ],
     [
      "しました",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Tuần trước, tôi đã tổ chức tiệc sinh nhật của mình."
   },
   {
    "jp": "友だちが 五人、 いえに 来ました。",
    "furi": [
     [
      "友",
      "とも"
     ],
     [
      "だち",
      null
     ],
     [
      "が",
      null
     ],
     [
      " ",
      null
     ],
     [
      "五人",
      "ごにん"
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "いえ",
      null
     ],
     [
      "に",
      null
     ],
     [
      " ",
      null
     ],
     [
      "来",
      "き"
     ],
     [
      "ました",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Năm người bạn đã đến nhà tôi."
   },
   {
    "jp": "母は 大きな ケーキを 作って くれました。",
    "furi": [
     [
      "母",
      "はは"
     ],
     [
      "は",
      null
     ],
     [
      " ",
      null
     ],
     [
      "大",
      "おお"
     ],
     [
      "きな",
      null
     ],
     [
      " ",
      null
     ],
     [
      "ケーキ",
      null
     ],
     [
      "を",
      null
     ],
     [
      " ",
      null
     ],
     [
      "作",
      "つく"
     ],
     [
      "って",
      null
     ],
     [
      " ",
      null
     ],
     [
      "くれました",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Mẹ đã làm cho tôi một chiếc bánh kem lớn."
   },
   {
    "jp": "ケーキには ろうそくが 五本 ありました。",
    "furi": [
     [
      "ケーキ",
      null
     ],
     [
      "には",
      null
     ],
     [
      " ",
      null
     ],
     [
      "ろうそく",
      null
     ],
     [
      "が",
      null
     ],
     [
      " ",
      null
     ],
     [
      "五本",
      "ごほん"
     ],
     [
      " ",
      null
     ],
     [
      "ありました",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Trên bánh có năm cây nến."
   },
   {
    "jp": "わたしたちは いっしょに 歌を 歌いました。",
    "furi": [
     [
      "わたし",
      null
     ],
     [
      "たち",
      null
     ],
     [
      "は",
      null
     ],
     [
      " ",
      null
     ],
     [
      "いっしょに",
      null
     ],
     [
      " ",
      null
     ],
     [
      "歌",
      "うた"
     ],
     [
      "を",
      null
     ],
     [
      " ",
      null
     ],
     [
      "歌",
      "うた"
     ],
     [
      "いました",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Chúng tôi đã cùng nhau hát."
   },
   {
    "jp": "ケーキは とても おいしかったし、 パーティーは とても 楽しかったです。",
    "furi": [
     [
      "ケーキ",
      null
     ],
     [
      "は",
      null
     ],
     [
      " ",
      null
     ],
     [
      "とても",
      null
     ],
     [
      " ",
      null
     ],
     [
      "おいしかった",
      null
     ],
     [
      "し",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "パーティー",
      null
     ],
     [
      "は",
      null
     ],
     [
      " ",
      null
     ],
     [
      "とても",
      null
     ],
     [
      " ",
      null
     ],
     [
      "楽",
      "たの"
     ],
     [
      "しかった",
      null
     ],
     [
      "です",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Bánh rất ngon, và bữa tiệc cũng rất vui."
   },
   {
    "jp": "友だちは プレゼントを くれました。",
    "furi": [
     [
      "友",
      "とも"
     ],
     [
      "だち",
      null
     ],
     [
      "は",
      null
     ],
     [
      " ",
      null
     ],
     [
      "プレゼント",
      null
     ],
     [
      "を",
      null
     ],
     [
      " ",
      null
     ],
     [
      "くれました",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Các bạn đã tặng quà cho tôi."
   },
   {
    "jp": "わたしは 新しい 本を もらいました。",
    "furi": [
     [
      "わたし",
      null
     ],
     [
      "は",
      null
     ],
     [
      " ",
      null
     ],
     [
      "新",
      "あたら"
     ],
     [
      "しい",
      null
     ],
     [
      " ",
      null
     ],
     [
      "本",
      "ほん"
     ],
     [
      "を",
      null
     ],
     [
      " ",
      null
     ],
     [
      "もらいました",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Tôi đã nhận được một cuốn sách mới."
   },
   {
    "jp": "たんじょうびの パーティーは 一年に 一回だけです。",
    "furi": [
     [
      "たんじょうび",
      null
     ],
     [
      "の",
      null
     ],
     [
      " ",
      null
     ],
     [
      "パーティー",
      null
     ],
     [
      "は",
      null
     ],
     [
      " ",
      null
     ],
     [
      "一年",
      "いちねん"
     ],
     [
      "に",
      null
     ],
     [
      " ",
      null
     ],
     [
      "一回",
      "いっかい"
     ],
     [
      "だけ",
      null
     ],
     [
      "です",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Tiệc sinh nhật chỉ có một lần trong một năm."
   },
   {
    "jp": "来年も 友だちが 来て くれるかもしれません。",
    "furi": [
     [
      "来年",
      "らいねん"
     ],
     [
      "も",
      null
     ],
     [
      " ",
      null
     ],
     [
      "友",
      "とも"
     ],
     [
      "だち",
      null
     ],
     [
      "が",
      null
     ],
     [
      " ",
      null
     ],
     [
      "来",
      "き"
     ],
     [
      "て",
      null
     ],
     [
      " ",
      null
     ],
     [
      "くれる",
      null
     ],
     [
      "かも",
      null
     ],
     [
      "しれません",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Có lẽ năm sau các bạn cũng sẽ đến."
   }
  ],
  "vocab": [
   {
    "w": "たんじょうび",
    "r": "たんじょうび",
    "hv": "ĐẢN SINH NHẬT",
    "vi": "Sinh nhật"
   },
   {
    "w": "パーティー",
    "r": "パーティー",
    "hv": null,
    "vi": "Bữa tiệc"
   },
   {
    "w": "ケーキ",
    "r": "ケーキ",
    "hv": null,
    "vi": "Bánh kem"
   },
   {
    "w": "ろうそく",
    "r": "ろうそく",
    "hv": null,
    "vi": "Cây nến"
   },
   {
    "w": "歌う",
    "r": "うたう",
    "hv": "CA",
    "vi": "Hát"
   },
   {
    "w": "プレゼント",
    "r": "プレゼント",
    "hv": null,
    "vi": "Quà tặng"
   }
  ],
  "grammar": [
   {
    "p": "〜し、〜し",
    "lv": "N4",
    "vi": "… và… (liệt kê lý do, ấn tượng)",
    "ex": "ケーキは とても おいしかったし、 パーティーは とても 楽しかったです。",
    "exVi": "Bánh rất ngon, và bữa tiệc cũng rất vui."
   },
   {
    "p": "〜かもしれません",
    "lv": "N4",
    "vi": "Có lẽ… / có thể…",
    "ex": "来年も 友だちが 来て くれるかもしれません。",
    "exVi": "Có lẽ năm sau các bạn cũng sẽ đến."
   }
  ],
  "quiz": [
   {
    "q": "パーティーに 友だちは 何人 来ましたか。",
    "options": [
     "五人",
     "三人",
     "十人",
     "二人"
    ],
    "answer": 0,
    "explain": "Trong bài có nói năm người bạn đã đến nhà tôi.",
    "evidence": "友だちが 五人、 いえに 来ました",
    "tip": "Tìm câu về số bạn đến nhà."
   },
   {
    "q": "わたしは 友だちから 何を もらいましたか。",
    "options": [
     "新しい 本を",
     "新しい 服を",
     "おいしい ケーキを",
     "大きな 花を"
    ],
    "answer": 0,
    "explain": "Trong bài có nói tôi đã nhận được một cuốn sách mới.",
    "evidence": "新しい 本を もらいました",
    "tip": "Tìm câu về món quà nhận được."
   }
  ]
 },
 {
  "id": "dk-n4-08",
  "img": "dk-n4-08.jpg",
  "audio": "dk-n4-08.mp3",
  "timings": [
   0.015,
   3.557,
   6.006,
   9.137,
   12.973,
   15.667,
   18.391,
   20.487,
   24.278,
   27.611
  ],
  "level": "N4",
  "title": "スーパーで かいもの",
  "titleVi": "Mua sắm ở siêu thị",
  "sentences": [
   {
    "jp": "今日、 わたしは スーパーへ かいものに 行きました。",
    "furi": [
     [
      "今日",
      "きょう"
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "わたし",
      null
     ],
     [
      "は",
      null
     ],
     [
      " ",
      null
     ],
     [
      "スーパー",
      null
     ],
     [
      "へ",
      null
     ],
     [
      " ",
      null
     ],
     [
      "かいもの",
      null
     ],
     [
      "に",
      null
     ],
     [
      " ",
      null
     ],
     [
      "行",
      "い"
     ],
     [
      "きました",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Hôm nay, tôi đã đi mua sắm ở siêu thị."
   },
   {
    "jp": "スーパーは いえの 近くに あります。",
    "furi": [
     [
      "スーパー",
      null
     ],
     [
      "は",
      null
     ],
     [
      " ",
      null
     ],
     [
      "いえ",
      null
     ],
     [
      "の",
      null
     ],
     [
      " ",
      null
     ],
     [
      "近",
      "ちか"
     ],
     [
      "くに",
      null
     ],
     [
      " ",
      null
     ],
     [
      "あります",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Siêu thị ở gần nhà tôi."
   },
   {
    "jp": "やさいと 肉と 魚を 買うつもりでした。",
    "furi": [
     [
      "やさい",
      null
     ],
     [
      "と",
      null
     ],
     [
      " ",
      null
     ],
     [
      "肉",
      "にく"
     ],
     [
      "と",
      null
     ],
     [
      " ",
      null
     ],
     [
      "魚",
      "さかな"
     ],
     [
      "を",
      null
     ],
     [
      " ",
      null
     ],
     [
      "買",
      "か"
     ],
     [
      "う",
      null
     ],
     [
      "つもり",
      null
     ],
     [
      "でした",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Tôi định mua rau, thịt và cá."
   },
   {
    "jp": "やさいは 安かったですが、 肉は 高かったです。",
    "furi": [
     [
      "やさい",
      null
     ],
     [
      "は",
      null
     ],
     [
      " ",
      null
     ],
     [
      "安",
      "やす"
     ],
     [
      "かった",
      null
     ],
     [
      "です",
      null
     ],
     [
      "が",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "肉",
      "にく"
     ],
     [
      "は",
      null
     ],
     [
      " ",
      null
     ],
     [
      "高",
      "たか"
     ],
     [
      "かった",
      null
     ],
     [
      "です",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Rau thì rẻ, nhưng thịt thì đắt."
   },
   {
    "jp": "肉は 高すぎて、 買いませんでした。",
    "furi": [
     [
      "肉",
      "にく"
     ],
     [
      "は",
      null
     ],
     [
      " ",
      null
     ],
     [
      "高",
      "たか"
     ],
     [
      "すぎて",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "買",
      "か"
     ],
     [
      "いませんでした",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Thịt đắt quá nên tôi đã không mua."
   },
   {
    "jp": "魚と ぎゅうにゅうと パンを 買いました。",
    "furi": [
     [
      "魚",
      "さかな"
     ],
     [
      "と",
      null
     ],
     [
      " ",
      null
     ],
     [
      "ぎゅうにゅう",
      null
     ],
     [
      "と",
      null
     ],
     [
      " ",
      null
     ],
     [
      "パン",
      null
     ],
     [
      "を",
      null
     ],
     [
      " ",
      null
     ],
     [
      "買",
      "か"
     ],
     [
      "いました",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Tôi đã mua cá, sữa và bánh mì."
   },
   {
    "jp": "レジで お金を はらいました。",
    "furi": [
     [
      "レジ",
      null
     ],
     [
      "で",
      null
     ],
     [
      " ",
      null
     ],
     [
      "お",
      null
     ],
     [
      "金",
      "かね"
     ],
     [
      "を",
      null
     ],
     [
      " ",
      null
     ],
     [
      "はらいました",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Tôi đã trả tiền ở quầy thu ngân."
   },
   {
    "jp": "買った 物は ふくろに 入れて、 いえに 帰りました。",
    "furi": [
     [
      "買",
      "か"
     ],
     [
      "った",
      null
     ],
     [
      " ",
      null
     ],
     [
      "物",
      "もの"
     ],
     [
      "は",
      null
     ],
     [
      " ",
      null
     ],
     [
      "ふくろ",
      null
     ],
     [
      "に",
      null
     ],
     [
      " ",
      null
     ],
     [
      "入",
      "い"
     ],
     [
      "れて",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "いえ",
      null
     ],
     [
      "に",
      null
     ],
     [
      " ",
      null
     ],
     [
      "帰",
      "かえ"
     ],
     [
      "りました",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Tôi bỏ đồ đã mua vào túi rồi về nhà."
   },
   {
    "jp": "スーパーで かいものを すると、 とても べんりです。",
    "furi": [
     [
      "スーパー",
      null
     ],
     [
      "で",
      null
     ],
     [
      " ",
      null
     ],
     [
      "かいもの",
      null
     ],
     [
      "を",
      null
     ],
     [
      " ",
      null
     ],
     [
      "すると",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "とても",
      null
     ],
     [
      " ",
      null
     ],
     [
      "べんり",
      null
     ],
     [
      "です",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Mua sắm ở siêu thị rất tiện lợi."
   },
   {
    "jp": "来週も スーパーへ かいものに 行くつもりです。",
    "furi": [
     [
      "来週",
      "らいしゅう"
     ],
     [
      "も",
      null
     ],
     [
      " ",
      null
     ],
     [
      "スーパー",
      null
     ],
     [
      "へ",
      null
     ],
     [
      " ",
      null
     ],
     [
      "かいもの",
      null
     ],
     [
      "に",
      null
     ],
     [
      " ",
      null
     ],
     [
      "行",
      "い"
     ],
     [
      "く",
      null
     ],
     [
      "つもり",
      null
     ],
     [
      "です",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Tuần sau tôi cũng định đi mua sắm ở siêu thị nữa."
   }
  ],
  "vocab": [
   {
    "w": "スーパー",
    "r": "スーパー",
    "hv": null,
    "vi": "Siêu thị"
   },
   {
    "w": "かいもの",
    "r": "かいもの",
    "hv": "MÃI VẬT",
    "vi": "Mua sắm"
   },
   {
    "w": "やさい",
    "r": "やさい",
    "hv": "DÃ THÁI",
    "vi": "Rau"
   },
   {
    "w": "肉",
    "r": "にく",
    "hv": "NHỤC",
    "vi": "Thịt"
   },
   {
    "w": "安い",
    "r": "やすい",
    "hv": "AN",
    "vi": "Rẻ"
   },
   {
    "w": "ぎゅうにゅう",
    "r": "ぎゅうにゅう",
    "hv": "NGƯU NHŨ",
    "vi": "Sữa"
   }
  ],
  "grammar": [
   {
    "p": "〜すぎます",
    "lv": "N4",
    "vi": "Quá… (vượt mức)",
    "ex": "肉は 高すぎて、 買いませんでした。",
    "exVi": "Thịt đắt quá nên tôi đã không mua."
   },
   {
    "p": "V-る/ない + つもりです",
    "lv": "N4",
    "vi": "Định… / dự định…",
    "ex": "来週も スーパーへ かいものに 行くつもりです。",
    "exVi": "Tuần sau tôi cũng định đi mua sắm ở siêu thị nữa."
   }
  ],
  "quiz": [
   {
    "q": "わたしは 肉を 買いましたか。",
    "options": [
     "買いませんでした",
     "買いました",
     "少し 買いました",
     "たくさん 買いました"
    ],
    "answer": 0,
    "explain": "Trong bài có nói thịt đắt quá nên tôi đã không mua.",
    "evidence": "肉は 高すぎて、 買いませんでした",
    "tip": "Tìm câu về giá thịt."
   },
   {
    "q": "わたしは 何を 買いましたか。",
    "options": [
     "魚と ぎゅうにゅうと パンを",
     "肉と やさいを",
     "服と くつを",
     "本と ペンを"
    ],
    "answer": 0,
    "explain": "Trong bài có nói tôi đã mua cá, sữa và bánh mì.",
    "evidence": "魚と ぎゅうにゅうと パンを 買いました",
    "tip": "Tìm câu về những thứ đã mua."
   }
  ]
 },
 {
  "id": "dk-n4-09",
  "img": "dk-n4-09.jpg",
  "audio": "dk-n4-09.mp3",
  "timings": [
   0.015,
   2.032,
   4.541,
   6.312,
   10.281,
   12.771,
   15.647,
   18.384,
   21.338,
   24.359
  ],
  "level": "N4",
  "title": "図書館の一日",
  "titleVi": "Một ngày ở thư viện",
  "sentences": [
   {
    "jp": "今日は 図書館に 行きます。",
    "furi": [
     [
      "今日",
      "きょう"
     ],
     [
      "は",
      null
     ],
     [
      " ",
      null
     ],
     [
      "図書館",
      "としょかん"
     ],
     [
      "に",
      null
     ],
     [
      " ",
      null
     ],
     [
      "行",
      "い"
     ],
     [
      "きます",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Hôm nay tôi đi thư viện."
   },
   {
    "jp": "図書館は いえの 近くに あります。",
    "furi": [
     [
      "図書館",
      "としょかん"
     ],
     [
      "は",
      null
     ],
     [
      " ",
      null
     ],
     [
      "いえ",
      null
     ],
     [
      "の",
      null
     ],
     [
      " ",
      null
     ],
     [
      "近",
      "ちか"
     ],
     [
      "くに",
      null
     ],
     [
      " ",
      null
     ],
     [
      "あります",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Thư viện ở gần nhà tôi."
   },
   {
    "jp": "図書館は しずかです。",
    "furi": [
     [
      "図書館",
      "としょかん"
     ],
     [
      "は",
      null
     ],
     [
      " ",
      null
     ],
     [
      "しずか",
      null
     ],
     [
      "です",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Thư viện rất yên tĩnh."
   },
   {
    "jp": "わたしは 本を 借りるために、 図書館に 来ました。",
    "furi": [
     [
      "わたし",
      null
     ],
     [
      "は",
      null
     ],
     [
      " ",
      null
     ],
     [
      "本",
      "ほん"
     ],
     [
      "を",
      null
     ],
     [
      " ",
      null
     ],
     [
      "借",
      "か"
     ],
     [
      "りるために",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "図書館",
      "としょかん"
     ],
     [
      "に",
      null
     ],
     [
      " ",
      null
     ],
     [
      "来",
      "き"
     ],
     [
      "ました",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Tôi đã đến thư viện để mượn sách."
   },
   {
    "jp": "新しい 本が たくさん あります。",
    "furi": [
     [
      "新",
      "あたら"
     ],
     [
      "しい",
      null
     ],
     [
      " ",
      null
     ],
     [
      "本",
      "ほん"
     ],
     [
      "が",
      null
     ],
     [
      " ",
      null
     ],
     [
      "たくさん",
      null
     ],
     [
      " ",
      null
     ],
     [
      "あります",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Có rất nhiều sách mới."
   },
   {
    "jp": "わたしは おもしろそうな 本を 借りました。",
    "furi": [
     [
      "わたし",
      null
     ],
     [
      "は",
      null
     ],
     [
      " ",
      null
     ],
     [
      "おもしろそうな",
      null
     ],
     [
      " ",
      null
     ],
     [
      "本",
      "ほん"
     ],
     [
      "を",
      null
     ],
     [
      " ",
      null
     ],
     [
      "借",
      "か"
     ],
     [
      "りました",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Tôi đã mượn một cuốn sách có vẻ thú vị."
   },
   {
    "jp": "午後、 図書館で 本を 読みました。",
    "furi": [
     [
      "午後",
      "ごご"
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "図書館",
      "としょかん"
     ],
     [
      "で",
      null
     ],
     [
      " ",
      null
     ],
     [
      "本",
      "ほん"
     ],
     [
      "を",
      null
     ],
     [
      " ",
      null
     ],
     [
      "読",
      "よ"
     ],
     [
      "みました",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Buổi chiều, tôi đã đọc sách ở thư viện."
   },
   {
    "jp": "分からない ことばは、 じしょで しらべます。",
    "furi": [
     [
      "分",
      "わ"
     ],
     [
      "からない",
      null
     ],
     [
      " ",
      null
     ],
     [
      "ことば",
      null
     ],
     [
      "は",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "じしょ",
      null
     ],
     [
      "で",
      null
     ],
     [
      " ",
      null
     ],
     [
      "しらべます",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Từ nào không hiểu, tôi tra từ điển."
   },
   {
    "jp": "図書館の 人は、 いつも 親切です。",
    "furi": [
     [
      "図書館",
      "としょかん"
     ],
     [
      "の",
      null
     ],
     [
      " ",
      null
     ],
     [
      "人",
      "ひと"
     ],
     [
      "は",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "いつも",
      null
     ],
     [
      " ",
      null
     ],
     [
      "親切",
      "しんせつ"
     ],
     [
      "です",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Người ở thư viện lúc nào cũng tốt bụng."
   },
   {
    "jp": "あしたも 図書館に 来るはずです。",
    "furi": [
     [
      "あした",
      null
     ],
     [
      "も",
      null
     ],
     [
      " ",
      null
     ],
     [
      "図書館",
      "としょかん"
     ],
     [
      "に",
      null
     ],
     [
      " ",
      null
     ],
     [
      "来",
      "く"
     ],
     [
      "るはずです",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Ngày mai tôi cũng sẽ đến thư viện."
   }
  ],
  "vocab": [
   {
    "w": "図書館",
    "r": "としょかん",
    "hv": "ĐỒ THƯ QUÁN",
    "vi": "Thư viện"
   },
   {
    "w": "借りる",
    "r": "かりる",
    "hv": "TÁ",
    "vi": "Mượn"
   },
   {
    "w": "しずか",
    "r": "しずか",
    "hv": "TĨNH",
    "vi": "Yên tĩnh"
   },
   {
    "w": "じしょ",
    "r": "じしょ",
    "hv": "TỪ THƯ",
    "vi": "Từ điển"
   },
   {
    "w": "親切",
    "r": "しんせつ",
    "hv": "THÂN THIẾT",
    "vi": "Tốt bụng, thân thiện"
   },
   {
    "w": "午後",
    "r": "ごご",
    "hv": "NGỌ HẬU",
    "vi": "Buổi chiều"
   }
  ],
  "grammar": [
   {
    "p": "V-る + ために、〜",
    "lv": "N4",
    "vi": "Để… / nhằm…",
    "ex": "わたしは 本を 借りるために、 図書館に 来ました。",
    "exVi": "Tôi đã đến thư viện để mượn sách."
   },
   {
    "p": "〜はずです",
    "lv": "N4",
    "vi": "Chắc là… / hẳn là… (dự đoán)",
    "ex": "あしたも 図書館に 来るはずです。",
    "exVi": "Ngày mai tôi cũng sẽ đến thư viện."
   }
  ],
  "quiz": [
   {
    "q": "わたしは 何を するために、 図書館に 来ましたか。",
    "options": [
     "本を 借りる",
     "本を 買う",
     "本を 書く",
     "本を 売る"
    ],
    "answer": 0,
    "explain": "Trong bài có nói tôi đến thư viện để mượn sách.",
    "evidence": "本を 借りるために、 図書館に 来ました",
    "tip": "Tìm câu có 'ために' trong bài."
   },
   {
    "q": "分からない ことばは、 何で しらべますか。",
    "options": [
     "じしょ",
     "けいたい",
     "テレビ",
     "ラジオ"
    ],
    "answer": 0,
    "explain": "Trong bài có nói từ nào không hiểu thì tra từ điển.",
    "evidence": "分からない ことばは、 じしょで しらべます",
    "tip": "Tìm câu có 'しらべます' trong bài."
   }
  ]
 },
 {
  "id": "dk-n4-10",
  "img": "dk-n4-10.jpg",
  "audio": "dk-n4-10.mp3",
  "timings": [
   0.015,
   3.027,
   4.597,
   8.902,
   11.182,
   14.42,
   16.439,
   19.456,
   22.714,
   25.061
  ],
  "level": "N4",
  "title": "夏休みの楽しみ",
  "titleVi": "Niềm vui của kỳ nghỉ hè",
  "sentences": [
   {
    "jp": "夏休みに、 かぞくで 海に 行きました。",
    "furi": [
     [
      "夏休み",
      "なつやすみ"
     ],
     [
      "に",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "かぞく",
      null
     ],
     [
      "で",
      null
     ],
     [
      " ",
      null
     ],
     [
      "海",
      "うみ"
     ],
     [
      "に",
      null
     ],
     [
      " ",
      null
     ],
     [
      "行",
      "い"
     ],
     [
      "きました",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Vào kỳ nghỉ hè, tôi đã đi biển cùng gia đình."
   },
   {
    "jp": "海で およぎました。",
    "furi": [
     [
      "海",
      "うみ"
     ],
     [
      "で",
      null
     ],
     [
      " ",
      null
     ],
     [
      "およぎました",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Tôi đã bơi ở biển."
   },
   {
    "jp": "海の 水は 冷たくて、 とても 気持ちが よかったです。",
    "furi": [
     [
      "海",
      "うみ"
     ],
     [
      "の",
      null
     ],
     [
      " ",
      null
     ],
     [
      "水",
      "みず"
     ],
     [
      "は",
      null
     ],
     [
      " ",
      null
     ],
     [
      "冷",
      "つめ"
     ],
     [
      "たくて",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "とても",
      null
     ],
     [
      " ",
      null
     ],
     [
      "気持ち",
      "きもち"
     ],
     [
      "が",
      null
     ],
     [
      " ",
      null
     ],
     [
      "よかった",
      null
     ],
     [
      "です",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Nước biển lạnh, cảm giác rất dễ chịu."
   },
   {
    "jp": "友だちと 山に のぼりました。",
    "furi": [
     [
      "友",
      "とも"
     ],
     [
      "だち",
      null
     ],
     [
      "と",
      null
     ],
     [
      " ",
      null
     ],
     [
      "山",
      "やま"
     ],
     [
      "に",
      null
     ],
     [
      " ",
      null
     ],
     [
      "のぼりました",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Tôi đã leo núi cùng bạn bè."
   },
   {
    "jp": "山の 上から、 町が 小さく 見えました。",
    "furi": [
     [
      "山",
      "やま"
     ],
     [
      "の",
      null
     ],
     [
      " ",
      null
     ],
     [
      "上",
      "うえ"
     ],
     [
      "から",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "町",
      "まち"
     ],
     [
      "が",
      null
     ],
     [
      " ",
      null
     ],
     [
      "小",
      "ちい"
     ],
     [
      "さく",
      null
     ],
     [
      " ",
      null
     ],
     [
      "見",
      "み"
     ],
     [
      "えました",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Từ trên núi nhìn xuống, thị trấn trông thật nhỏ."
   },
   {
    "jp": "夜、 花火を 見ました。",
    "furi": [
     [
      "夜",
      "よる"
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "花火",
      "はなび"
     ],
     [
      "を",
      null
     ],
     [
      " ",
      null
     ],
     [
      "見",
      "み"
     ],
     [
      "ました",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Buổi tối, tôi đã xem pháo hoa."
   },
   {
    "jp": "花火は 大きくて、 とても きれいでした。",
    "furi": [
     [
      "花火",
      "はなび"
     ],
     [
      "は",
      null
     ],
     [
      " ",
      null
     ],
     [
      "大",
      "おお"
     ],
     [
      "きくて",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "とても",
      null
     ],
     [
      " ",
      null
     ],
     [
      "きれい",
      null
     ],
     [
      "でした",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Pháo hoa rất to và rất đẹp."
   },
   {
    "jp": "おばあさんの いえで、 すいかを 食べました。",
    "furi": [
     [
      "おばあさん",
      null
     ],
     [
      "の",
      null
     ],
     [
      " ",
      null
     ],
     [
      "いえ",
      null
     ],
     [
      "で",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "すいか",
      null
     ],
     [
      "を",
      null
     ],
     [
      " ",
      null
     ],
     [
      "食",
      "た"
     ],
     [
      "べました",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Ở nhà bà, tôi đã ăn dưa hấu."
   },
   {
    "jp": "夏休みが 終わったばかりです。",
    "furi": [
     [
      "夏休み",
      "なつやすみ"
     ],
     [
      "が",
      null
     ],
     [
      " ",
      null
     ],
     [
      "終",
      "お"
     ],
     [
      "わったばかりです",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Kỳ nghỉ hè vừa mới kết thúc."
   },
   {
    "jp": "今年の 夏休みは、 とくべつだったんです。",
    "furi": [
     [
      "今年",
      "ことし"
     ],
     [
      "の",
      null
     ],
     [
      " ",
      null
     ],
     [
      "夏休み",
      "なつやすみ"
     ],
     [
      "は",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "とくべつだったんです",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Kỳ nghỉ hè năm nay thật đặc biệt."
   }
  ],
  "vocab": [
   {
    "w": "夏休み",
    "r": "なつやすみ",
    "hv": "HẠ HƯU",
    "vi": "Nghỉ hè"
   },
   {
    "w": "泳ぐ",
    "r": "およぐ",
    "hv": "VỊNH",
    "vi": "Bơi"
   },
   {
    "w": "花火",
    "r": "はなび",
    "hv": "HOA HỎA",
    "vi": "Pháo hoa"
   },
   {
    "w": "のぼる",
    "r": "のぼる",
    "hv": "ĐĂNG",
    "vi": "Leo (núi)"
   },
   {
    "w": "すいか",
    "r": "すいか",
    "hv": "TÂY QUA",
    "vi": "Dưa hấu"
   },
   {
    "w": "とくべつ",
    "r": "とくべつ",
    "hv": "ĐẶC BIỆT",
    "vi": "Đặc biệt"
   }
  ],
  "grammar": [
   {
    "p": "〜た ばかりです / 〜て ばかり",
    "lv": "N4",
    "vi": "Vừa mới…",
    "ex": "夏休みが 終わったばかりです。",
    "exVi": "Kỳ nghỉ hè vừa mới kết thúc."
   },
   {
    "p": "V-る/ない + んです",
    "lv": "N4",
    "vi": "…đấy / …mà (giải thích, nhấn mạnh)",
    "ex": "今年の 夏休みは、 とくべつだったんです。",
    "exVi": "Kỷ niệm hè năm nay thật đặc biệt."
   }
  ],
  "quiz": [
   {
    "q": "夜、 何を 見ましたか。",
    "options": [
     "花火",
     "ほし",
     "月",
     "にじ"
    ],
    "answer": 0,
    "explain": "Trong bài có nói buổi tối tôi đã xem pháo hoa.",
    "evidence": "夜、 花火を 見ました",
    "tip": "Tìm câu có '夜' trong bài."
   },
   {
    "q": "夏休みは もう 終わりましたか。",
    "options": [
     "はい、 終わったばかりです",
     "いいえ、 まだです",
     "いいえ、 はじまったばかりです",
     "はい、 来年です"
    ],
    "answer": 0,
    "explain": "Trong bài có nói kỳ nghỉ hè vừa mới kết thúc.",
    "evidence": "夏休みが 終わったばかりです",
    "tip": "Tìm câu có 'ばかりです' trong bài."
   }
  ]
 },
 {
  "id": "dk-n3-01",
  "img": "dk-n3-01.jpg",
  "audio": "dk-n3-01.mp3",
  "timings": [
   0.015,
   5.195,
   10.052,
   15.083,
   21.639,
   25.261,
   30.557,
   35.621,
   41.403,
   45.74
  ],
  "level": "N3",
  "title": "コンビニの おにぎり",
  "titleVi": "Cơm nắm ở cửa hàng tiện lợi",
  "sentences": [
   {
    "jp": "日本の コンビニに 行くと、 いろいろな 種類の おにぎりが 売られています。",
    "furi": [
     [
      "日本",
      "にほん"
     ],
     [
      "の",
      null
     ],
     [
      " ",
      null
     ],
     [
      "コンビニ",
      null
     ],
     [
      "に",
      null
     ],
     [
      " ",
      null
     ],
     [
      "行",
      "い"
     ],
     [
      "くと",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "いろいろな",
      null
     ],
     [
      " ",
      null
     ],
     [
      "種類",
      "しゅるい"
     ],
     [
      "の",
      null
     ],
     [
      " ",
      null
     ],
     [
      "おにぎり",
      null
     ],
     [
      "が",
      null
     ],
     [
      " ",
      null
     ],
     [
      "売",
      "う"
     ],
     [
      "られています",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Khi đến cửa hàng tiện lợi ở Nhật Bản, nhiều loại cơm nắm khác nhau được bày bán."
   },
   {
    "jp": "おにぎりは 安くて 美味しいので、 多くの 人に 愛されています。",
    "furi": [
     [
      "おにぎり",
      null
     ],
     [
      "は",
      null
     ],
     [
      " ",
      null
     ],
     [
      "安",
      "やす"
     ],
     [
      "くて",
      null
     ],
     [
      " ",
      null
     ],
     [
      "美味",
      "おい"
     ],
     [
      "しいので",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "多",
      "おお"
     ],
     [
      "くの",
      null
     ],
     [
      " ",
      null
     ],
     [
      "人",
      "ひと"
     ],
     [
      "に",
      null
     ],
     [
      " ",
      null
     ],
     [
      "愛",
      "あい"
     ],
     [
      "されています",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Vì cơm nắm vừa rẻ vừa ngon nên được nhiều người yêu thích."
   },
   {
    "jp": "最近は、 具の 種類が 増えて、 選ぶのが 楽しくなりました。",
    "furi": [
     [
      "最近",
      "さいきん"
     ],
     [
      "は",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "具",
      "ぐ"
     ],
     [
      "の",
      null
     ],
     [
      " ",
      null
     ],
     [
      "種類",
      "しゅるい"
     ],
     [
      "が",
      null
     ],
     [
      " ",
      null
     ],
     [
      "増",
      "ふ"
     ],
     [
      "えて",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "選",
      "えら"
     ],
     [
      "ぶのが",
      null
     ],
     [
      " ",
      null
     ],
     [
      "楽",
      "たの"
     ],
     [
      "しくなりました",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Gần đây, các loại nhân đã tăng lên, khiến việc lựa chọn trở nên thú vị hơn."
   },
   {
    "jp": "さけや うめぼしは 昔から 人気がありますが、 最近は 肉料理の おにぎりも あります。",
    "furi": [
     [
      "さけ",
      null
     ],
     [
      "や",
      null
     ],
     [
      " ",
      null
     ],
     [
      "うめぼし",
      null
     ],
     [
      "は",
      null
     ],
     [
      " ",
      null
     ],
     [
      "昔",
      "むかし"
     ],
     [
      "から",
      null
     ],
     [
      " ",
      null
     ],
     [
      "人気",
      "にんき"
     ],
     [
      "が",
      null
     ],
     [
      "ありますが",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "最近",
      "さいきん"
     ],
     [
      "は",
      null
     ],
     [
      " ",
      null
     ],
     [
      "肉料理",
      "にくりょうり"
     ],
     [
      "の",
      null
     ],
     [
      " ",
      null
     ],
     [
      "おにぎり",
      null
     ],
     [
      "も",
      null
     ],
     [
      " ",
      null
     ],
     [
      "あります",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Cá hồi và mơ muối đã phổ biến từ xưa, nhưng gần đây cũng có cả cơm nắm nhân thịt."
   },
   {
    "jp": "おにぎりの つつみかたには 工夫が されています。",
    "furi": [
     [
      "おにぎり",
      null
     ],
     [
      "の",
      null
     ],
     [
      " ",
      null
     ],
     [
      "つつみかた",
      null
     ],
     [
      "には",
      null
     ],
     [
      " ",
      null
     ],
     [
      "工夫",
      "くふう"
     ],
     [
      "が",
      null
     ],
     [
      " ",
      null
     ],
     [
      "されています",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Cách đóng gói cơm nắm đã được thiết kế rất công phu."
   },
   {
    "jp": "のりが パリパリの まま 食べられるように、 ご飯と 分けて つつんであります。",
    "furi": [
     [
      "のり",
      null
     ],
     [
      "が",
      null
     ],
     [
      " ",
      null
     ],
     [
      "パリパリ",
      null
     ],
     [
      "の",
      null
     ],
     [
      " ",
      null
     ],
     [
      "まま",
      null
     ],
     [
      " ",
      null
     ],
     [
      "食",
      "た"
     ],
     [
      "べられるように",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "ご",
      null
     ],
     [
      "飯",
      "はん"
     ],
     [
      "と",
      null
     ],
     [
      " ",
      null
     ],
     [
      "分",
      "わ"
     ],
     [
      "けて",
      null
     ],
     [
      " ",
      null
     ],
     [
      "つつんであります",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Để có thể ăn rong biển trong trạng thái giòn rụm, nó được gói tách biệt với cơm."
   },
   {
    "jp": "番号の 順番に ふくろを 引くと、 かんたんに 開けることが できます。",
    "furi": [
     [
      "番号",
      "ばんごう"
     ],
     [
      "の",
      null
     ],
     [
      " ",
      null
     ],
     [
      "順番",
      "じゅんばん"
     ],
     [
      "に",
      null
     ],
     [
      " ",
      null
     ],
     [
      "ふくろ",
      null
     ],
     [
      "を",
      null
     ],
     [
      " ",
      null
     ],
     [
      "引",
      "ひ"
     ],
     [
      "くと",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "かんたんに",
      null
     ],
     [
      " ",
      null
     ],
     [
      "開",
      "あ"
     ],
     [
      "けることが",
      null
     ],
     [
      " ",
      null
     ],
     [
      "できます",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Nếu kéo bao bì theo thứ tự số, bạn có thể mở nó một cách dễ dàng."
   },
   {
    "jp": "温めて 食べたい 場合は、 店員に 頼むと 電子レンジで 温めてくれます。",
    "furi": [
     [
      "温",
      "あたた"
     ],
     [
      "めて",
      null
     ],
     [
      " ",
      null
     ],
     [
      "食",
      "た"
     ],
     [
      "べたい",
      null
     ],
     [
      " ",
      null
     ],
     [
      "場合",
      "ばあい"
     ],
     [
      "は",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "店員",
      "てんいん"
     ],
     [
      "に",
      null
     ],
     [
      " ",
      null
     ],
     [
      "頼",
      "たの"
     ],
     [
      "むと",
      null
     ],
     [
      " ",
      null
     ],
     [
      "電子",
      "でんし"
     ],
     [
      "レンジ",
      null
     ],
     [
      "で",
      null
     ],
     [
      " ",
      null
     ],
     [
      "温",
      "あたた"
     ],
     [
      "めてくれます",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Trong trường hợp muốn ăn nóng, nếu bạn nhờ nhân viên, họ sẽ hâm nóng bằng lò vi sóng cho bạn."
   },
   {
    "jp": "忙しい 時でも すぐに 買えるので、 とても 便利です。",
    "furi": [
     [
      "忙",
      "いそが"
     ],
     [
      "しい",
      null
     ],
     [
      " ",
      null
     ],
     [
      "時",
      "とき"
     ],
     [
      "でも",
      null
     ],
     [
      " ",
      null
     ],
     [
      "すぐに",
      null
     ],
     [
      " ",
      null
     ],
     [
      "買",
      "か"
     ],
     [
      "えるので",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "とても",
      null
     ],
     [
      " ",
      null
     ],
     [
      "便利",
      "べんり"
     ],
     [
      "です",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Vì có thể mua ngay cả khi bận rộn nên nó rất tiện lợi."
   },
   {
    "jp": "あなたも 日本に 来たら、 ぜひ いろいろな おにぎりを 食べてみてください。",
    "furi": [
     [
      "あなた",
      null
     ],
     [
      "も",
      null
     ],
     [
      " ",
      null
     ],
     [
      "日本",
      "にほん"
     ],
     [
      "に",
      null
     ],
     [
      " ",
      null
     ],
     [
      "来",
      "く"
     ],
     [
      "たら",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "ぜひ",
      null
     ],
     [
      " ",
      null
     ],
     [
      "いろいろな",
      null
     ],
     [
      " ",
      null
     ],
     [
      "おにぎり",
      null
     ],
     [
      "を",
      null
     ],
     [
      " ",
      null
     ],
     [
      "食",
      "た"
     ],
     [
      "べてみてください",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Nếu bạn đến Nhật Bản, nhất định hãy ăn thử nhiều loại cơm nắm khác nhau nhé."
   }
  ],
  "vocab": [
   {
    "w": "種類",
    "r": "しゅるい",
    "hv": "CHỦNG LOẠI",
    "vi": "loại, chủng loại"
   },
   {
    "w": "工夫",
    "r": "くふう",
    "hv": "CÔNG PHU",
    "vi": "sự khéo léo, cải tiến"
   },
   {
    "w": "順番",
    "r": "じゅんばん",
    "hv": "THUẬN PHIÊN",
    "vi": "thứ tự"
   },
   {
    "w": "店員",
    "r": "てんいん",
    "hv": "ĐIẾM VIÊN",
    "vi": "nhân viên cửa hàng"
   },
   {
    "w": "温める",
    "r": "あたためる",
    "hv": "ÔN",
    "vi": "làm nóng, hâm nóng"
   },
   {
    "w": "便利",
    "r": "べんり",
    "hv": "TIỆN LỢI",
    "vi": "tiện lợi"
   }
  ],
  "grammar": [
   {
    "p": "Động từ thể bị động (受身形)",
    "lv": "N4",
    "vi": "Câu bị động, dùng để diễn tả một sự việc khách quan hoặc một hành động được thực hiện bởi đối tượng không xác định cụ thể (thường dùng trong tin tức, giới thiệu).",
    "ex": "多くの 人に 愛されています。",
    "exVi": "Nó được nhiều người yêu thích."
   },
   {
    "p": "V-る/ない + ように、〜",
    "lv": "N4",
    "vi": "Để cho..., nhằm mục đích...",
    "ex": "のりが パリパリの まま 食べられるように、 ご飯と 分けて つつんであります。",
    "exVi": "Để có thể ăn rong biển trong trạng thái giòn rụm, nó được gói tách biệt với cơm."
   }
  ],
  "quiz": [
   {
    "q": "どうして のりと ご飯を 分けて つつんでいますか。",
    "options": [
     "安く 作るためです。",
     "のりを パリパリに たもつためです。",
     "温めやすく するためです。",
     "肉料理と 分けるためです。"
    ],
    "answer": 1,
    "explain": "Đoạn văn giải thích rằng rong biển được gói tách biệt với cơm để giữ được độ giòn (パリパリ).",
    "evidence": "のりが パリパリの まま 食べられるように、 ご飯と 分けて つつんであります。",
    "tip": "Hãy tìm từ khóa 'パリパリ' và lý do tại sao họ '分けて' (chia ra)."
   },
   {
    "q": "おにぎりを 温めたい 時、 どうすれば いいですか。",
    "options": [
     "自分で 電子レンジを 買います。",
     "店員に 頼みます。",
     "ふくろを 引いて 開けます。",
     "のりを 捨てます。"
    ],
    "answer": 1,
    "explain": "Trong trường hợp muốn hâm nóng, bạn có thể nhờ nhân viên cửa hàng.",
    "evidence": "温めて 食べたい 場合は、 店員に 頼むと 電子レンジで 温めてくれます。",
    "tip": "Tìm từ khóa '温めて' và hành động đi kèm '頼む' (nhờ vả)."
   }
  ]
 },
 {
  "id": "dk-n3-02",
  "img": "dk-n3-02.jpg",
  "audio": "dk-n3-02.mp3",
  "timings": [
   0.015,
   4.225,
   9.329,
   13.46,
   17.903,
   21.755,
   24.685,
   29.132,
   32.74,
   37.937,
   42.241
  ],
  "level": "N3",
  "title": "自転車で 通勤",
  "titleVi": "Đạp xe đi làm",
  "sentences": [
   {
    "jp": "最近、自転車で通勤する人が増えています。",
    "furi": [
     [
      "最近",
      "さいきん"
     ],
     [
      "、",
      null
     ],
     [
      "自転車",
      "じてんしゃ"
     ],
     [
      "で",
      null
     ],
     [
      "通勤",
      "つうきん"
     ],
     [
      "する",
      null
     ],
     [
      "人",
      "ひと"
     ],
     [
      "が",
      null
     ],
     [
      "増",
      "ふ"
     ],
     [
      "えています",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Gần đây, số người đạp xe đi làm đang tăng lên."
   },
   {
    "jp": "以前は電車を使っていましたが、今は自転車を使っています。",
    "furi": [
     [
      "以前",
      "いぜん"
     ],
     [
      "は",
      null
     ],
     [
      "電車",
      "でんしゃ"
     ],
     [
      "を",
      null
     ],
     [
      "使",
      "つか"
     ],
     [
      "っていましたが",
      null
     ],
     [
      "、",
      null
     ],
     [
      "今",
      "いま"
     ],
     [
      "は",
      null
     ],
     [
      "自転車",
      "じてんしゃ"
     ],
     [
      "を",
      null
     ],
     [
      "使",
      "つか"
     ],
     [
      "っています",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Trước đây tôi đi tàu điện, nhưng giờ tôi đi xe đạp."
   },
   {
    "jp": "自転車に乗ると、毎朝いい運動になります。",
    "furi": [
     [
      "自転車",
      "じてんしゃ"
     ],
     [
      "に",
      null
     ],
     [
      "乗",
      "の"
     ],
     [
      "ると",
      null
     ],
     [
      "、",
      null
     ],
     [
      "毎朝",
      "まいあさ"
     ],
     [
      "いい",
      null
     ],
     [
      "運動",
      "うんどう"
     ],
     [
      "に",
      null
     ],
     [
      "なります",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Đạp xe mỗi sáng là một cách tập thể dục tốt."
   },
   {
    "jp": "風を感じながら走るのは、とても気持ちがいいです。",
    "furi": [
     [
      "風",
      "かぜ"
     ],
     [
      "を",
      null
     ],
     [
      "感",
      "かん"
     ],
     [
      "じながら",
      null
     ],
     [
      "走",
      "はし"
     ],
     [
      "るのは",
      null
     ],
     [
      "、",
      null
     ],
     [
      "とても",
      null
     ],
     [
      "気持",
      "きも"
     ],
     [
      "ちがいいです",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Đạp xe trong khi cảm nhận làn gió thật là dễ chịu."
   },
   {
    "jp": "また、電車の時間を気にしなくてもいいです。",
    "furi": [
     [
      "また",
      null
     ],
     [
      "、",
      null
     ],
     [
      "電車",
      "でんしゃ"
     ],
     [
      "の",
      null
     ],
     [
      "時間",
      "じかん"
     ],
     [
      "を",
      null
     ],
     [
      "気",
      "き"
     ],
     [
      "にしなくてもいいです",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Ngoài ra, cũng không cần phải bận tâm về giờ giấc của tàu điện."
   },
   {
    "jp": "しかし、雨が降る日は大変です。",
    "furi": [
     [
      "しかし",
      null
     ],
     [
      "、",
      null
     ],
     [
      "雨",
      "あめ"
     ],
     [
      "が",
      null
     ],
     [
      "降",
      "ふ"
     ],
     [
      "る",
      null
     ],
     [
      "日",
      "ひ"
     ],
     [
      "は",
      null
     ],
     [
      "大変",
      "たいへん"
     ],
     [
      "です",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Tuy nhiên, những ngày trời mưa thì rất vất vả."
   },
   {
    "jp": "道がすべりやすくなるので、注意しなければなりません。",
    "furi": [
     [
      "道",
      "みち"
     ],
     [
      "が",
      null
     ],
     [
      "すべりやすく",
      null
     ],
     [
      "なるので",
      null
     ],
     [
      "、",
      null
     ],
     [
      "注意",
      "ちゅうい"
     ],
     [
      "しなければなりません",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Vì đường trở nên dễ trơn trượt, nên phải chú ý."
   },
   {
    "jp": "それに、にもつが多いときも少し不便です。",
    "furi": [
     [
      "それに",
      null
     ],
     [
      "、",
      null
     ],
     [
      "にもつ",
      null
     ],
     [
      "が",
      null
     ],
     [
      "多",
      "おお"
     ],
     [
      "い",
      null
     ],
     [
      "ときも",
      null
     ],
     [
      "少",
      "すこ"
     ],
     [
      "し",
      null
     ],
     [
      "不便",
      "ふべん"
     ],
     [
      "です",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Thêm nữa, khi mang nhiều đồ đạc thì cũng hơi bất tiện."
   },
   {
    "jp": "会社にちゅうりんじょうがあるかどうか、確認することも大切です。",
    "furi": [
     [
      "会社",
      "かいしゃ"
     ],
     [
      "に",
      null
     ],
     [
      "ちゅうりんじょう",
      null
     ],
     [
      "が",
      null
     ],
     [
      "あるかどうか",
      null
     ],
     [
      "、",
      null
     ],
     [
      "確認",
      "かくにん"
     ],
     [
      "する",
      null
     ],
     [
      "こと",
      null
     ],
     [
      "も",
      null
     ],
     [
      "大切",
      "たいせつ"
     ],
     [
      "です",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Việc xác nhận xem ở công ty có bãi đỗ xe đạp hay không cũng rất quan trọng."
   },
   {
    "jp": "健康のために、これからも続けようと思っています。",
    "furi": [
     [
      "健康",
      "けんこう"
     ],
     [
      "の",
      null
     ],
     [
      "ため",
      null
     ],
     [
      "に",
      null
     ],
     [
      "、",
      null
     ],
     [
      "これからも",
      null
     ],
     [
      "続",
      "つづ"
     ],
     [
      "けようと",
      null
     ],
     [
      "思",
      "おも"
     ],
     [
      "っています",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Vì sức khỏe, tôi định sẽ tiếp tục duy trì thói quen này."
   },
   {
    "jp": "みなさんも、自転車通勤を始めてみませんか。",
    "furi": [
     [
      "みなさん",
      null
     ],
     [
      "も",
      null
     ],
     [
      "、",
      null
     ],
     [
      "自転車",
      "じてんしゃ"
     ],
     [
      "通勤",
      "つうきん"
     ],
     [
      "を",
      null
     ],
     [
      "始",
      "はじ"
     ],
     [
      "めてみませんか",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Mọi người cũng hãy thử bắt đầu việc đạp xe đi làm nhé?"
   }
  ],
  "vocab": [
   {
    "w": "通勤",
    "r": "つうきん",
    "hv": "THÔNG CẦN",
    "vi": "đi làm"
   },
   {
    "w": "以前",
    "r": "いぜん",
    "hv": "DĨ TIỀN",
    "vi": "trước đây"
   },
   {
    "w": "すべる",
    "r": "すべる",
    "hv": "HOẠT",
    "vi": "Trượt, trơn trượt"
   },
   {
    "w": "不便",
    "r": "ふべん",
    "hv": "BẤT TIỆN",
    "vi": "bất tiện"
   },
   {
    "w": "ちゅうりんじょう",
    "r": "ちゅうりんじょう",
    "hv": "TRÚ LUÂN TRƯỜNG",
    "vi": "Bãi đỗ xe đạp"
   },
   {
    "w": "確認",
    "r": "かくにん",
    "hv": "XÁC NHẬN",
    "vi": "xác nhận, kiểm tra"
   }
  ],
  "grammar": [
   {
    "p": "V-ます + ながら",
    "lv": "N4",
    "vi": "Vừa làm V1 vừa làm V2",
    "ex": "風を感じながら走るのは、とても気持ちがいいです。",
    "exVi": "Đạp xe trong khi cảm nhận làn gió thật là dễ chịu."
   },
   {
    "p": "V-ます + やすい / にくい",
    "lv": "N4",
    "vi": "Dễ / Khó làm gì đó",
    "ex": "道がすべりやすくなるので、注意しなければなりません。",
    "exVi": "Vì đường trở nên dễ trơn trượt, nên phải chú ý."
   }
  ],
  "quiz": [
   {
    "q": "自転車通勤のいい点は何ですか。",
    "options": [
     "雨の日でも道がすべらないこと",
     "にもつがいっぱい運べること",
     "毎朝のいい運動になること",
     "電車の時間を気にすること"
    ],
    "answer": 2,
    "explain": "Bài viết nói rằng đạp xe mỗi sáng là một cách tập thể dục tốt.",
    "evidence": "毎朝いい運動になります",
    "tip": "Tìm từ khóa 'いい' (tốt) hoặc '運動' (vận động) trong bài."
   },
   {
    "q": "自転車通勤をするとき、何を確認したほうがいいですか。",
    "options": [
     "新しい自転車の値段",
     "会社にちゅうりんじょうがあるかどうか",
     "電車の時間",
     "近くの公園の場所"
    ],
    "answer": 1,
    "explain": "Bài viết khuyên rằng việc xác nhận xem công ty có bãi đỗ xe đạp hay không là điều quan trọng.",
    "evidence": "会社にちゅうりんじょうがあるかどうか、確認することも大切です",
    "tip": "Tìm từ '確認' (xác nhận) để thấy thông tin cần kiểm tra."
   }
  ]
 },
 {
  "id": "dk-n3-03",
  "img": "dk-n3-03.jpg",
  "audio": "dk-n3-03.mp3",
  "timings": [
   0.015,
   2.939,
   7.524,
   11.381,
   15,
   19.168,
   23.38,
   27.376,
   30.112,
   33.538,
   36.52
  ],
  "level": "N3",
  "title": "アルバイトの 一日",
  "titleVi": "Một ngày làm thêm",
  "sentences": [
   {
    "jp": "わたしは コンビニで アルバイトを して います。",
    "furi": [
     [
      "わたし",
      null
     ],
     [
      "は",
      null
     ],
     [
      " ",
      null
     ],
     [
      "コンビニ",
      null
     ],
     [
      "で",
      null
     ],
     [
      " ",
      null
     ],
     [
      "アルバイト",
      null
     ],
     [
      "を",
      null
     ],
     [
      " ",
      null
     ],
     [
      "して",
      null
     ],
     [
      " ",
      null
     ],
     [
      "います",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Tôi đang làm thêm ở cửa hàng tiện lợi."
   },
   {
    "jp": "週に 三日、 午前 九時から 午後 五時まで 働きます。",
    "furi": [
     [
      "週",
      "しゅう"
     ],
     [
      "に",
      null
     ],
     [
      " ",
      null
     ],
     [
      "三日",
      "みっか"
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "午前",
      "ごぜん"
     ],
     [
      " ",
      null
     ],
     [
      "九時",
      "くじ"
     ],
     [
      "から",
      null
     ],
     [
      " ",
      null
     ],
     [
      "午後",
      "ごご"
     ],
     [
      " ",
      null
     ],
     [
      "五時",
      "ごじ"
     ],
     [
      "まで",
      null
     ],
     [
      " ",
      null
     ],
     [
      "働",
      "はたら"
     ],
     [
      "きます",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Mỗi tuần ba ngày, tôi làm từ 9 giờ sáng đến 5 giờ chiều."
   },
   {
    "jp": "朝、 店に 着くと、 まず 掃除を します。",
    "furi": [
     [
      "朝",
      "あさ"
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "店",
      "みせ"
     ],
     [
      "に",
      null
     ],
     [
      " ",
      null
     ],
     [
      "着",
      "つ"
     ],
     [
      "くと",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "まず",
      null
     ],
     [
      " ",
      null
     ],
     [
      "掃除",
      "そうじ"
     ],
     [
      "を",
      null
     ],
     [
      " ",
      null
     ],
     [
      "します",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Buổi sáng, khi đến cửa hàng, trước tiên tôi dọn dẹp."
   },
   {
    "jp": "それから、 新しい 品物を 棚に 並べます。",
    "furi": [
     [
      "それから",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "新",
      "あたら"
     ],
     [
      "しい",
      null
     ],
     [
      " ",
      null
     ],
     [
      "品物",
      "しなもの"
     ],
     [
      "を",
      null
     ],
     [
      " ",
      null
     ],
     [
      "棚",
      "たな"
     ],
     [
      "に",
      null
     ],
     [
      " ",
      null
     ],
     [
      "並",
      "なら"
     ],
     [
      "べます",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Sau đó, tôi xếp hàng hóa mới lên kệ."
   },
   {
    "jp": "お客様が 来ると、 「いらっしゃいませ」と 挨拶します。",
    "furi": [
     [
      "お客様",
      "おきゃくさま"
     ],
     [
      "が",
      null
     ],
     [
      " ",
      null
     ],
     [
      "来",
      "き"
     ],
     [
      "ると",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "「",
      null
     ],
     [
      "いらっしゃいませ",
      null
     ],
     [
      "」",
      null
     ],
     [
      "と",
      null
     ],
     [
      " ",
      null
     ],
     [
      "挨拶",
      "あいさつ"
     ],
     [
      "します",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Khi khách đến, tôi chào 'Irasshaimase'."
   },
   {
    "jp": "レジでは お金を 数えたり、 ふくろに 入れたり します。",
    "furi": [
     [
      "レジ",
      null
     ],
     [
      "では",
      null
     ],
     [
      " ",
      null
     ],
     [
      "お",
      null
     ],
     [
      "金",
      "かね"
     ],
     [
      "を",
      null
     ],
     [
      " ",
      null
     ],
     [
      "数",
      "かぞ"
     ],
     [
      "えたり",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "ふくろ",
      null
     ],
     [
      "に",
      null
     ],
     [
      " ",
      null
     ],
     [
      "入",
      "い"
     ],
     [
      "れたり",
      null
     ],
     [
      " ",
      null
     ],
     [
      "します",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Ở quầy thu ngân, tôi đếm tiền, bỏ đồ vào túi, và nhiều việc khác."
   },
   {
    "jp": "最初は よく 失敗しましたが、 今は 慣れました。",
    "furi": [
     [
      "最初",
      "さいしょ"
     ],
     [
      "は",
      null
     ],
     [
      " ",
      null
     ],
     [
      "よく",
      null
     ],
     [
      " ",
      null
     ],
     [
      "失敗",
      "しっぱい"
     ],
     [
      "しました",
      null
     ],
     [
      "が",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "今",
      "いま"
     ],
     [
      "は",
      null
     ],
     [
      " ",
      null
     ],
     [
      "慣",
      "な"
     ],
     [
      "れました",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Lúc đầu tôi hay mắc lỗi, nhưng giờ đã quen rồi."
   },
   {
    "jp": "せんぱいが やさしく 教えて くれました。",
    "furi": [
     [
      "せんぱい",
      null
     ],
     [
      "が",
      null
     ],
     [
      " ",
      null
     ],
     [
      "やさしく",
      null
     ],
     [
      " ",
      null
     ],
     [
      "教",
      "おし"
     ],
     [
      "えて",
      null
     ],
     [
      " ",
      null
     ],
     [
      "くれました",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Anh chị đi trước đã nhẹ nhàng chỉ bảo cho tôi."
   },
   {
    "jp": "忙しい 日も ありますが、 仕事は 楽しいです。",
    "furi": [
     [
      "忙",
      "いそが"
     ],
     [
      "しい",
      null
     ],
     [
      " ",
      null
     ],
     [
      "日",
      "ひ"
     ],
     [
      "も",
      null
     ],
     [
      " ",
      null
     ],
     [
      "あります",
      null
     ],
     [
      "が",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "仕事",
      "しごと"
     ],
     [
      "は",
      null
     ],
     [
      " ",
      null
     ],
     [
      "楽",
      "たの"
     ],
     [
      "しいです",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Cũng có những ngày bận rộn, nhưng công việc rất thú vị."
   },
   {
    "jp": "給料を ためて、 旅行に 行きたいです。",
    "furi": [
     [
      "給料",
      "きゅうりょう"
     ],
     [
      "を",
      null
     ],
     [
      " ",
      null
     ],
     [
      "ためて",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "旅行",
      "りょこう"
     ],
     [
      "に",
      null
     ],
     [
      " ",
      null
     ],
     [
      "行",
      "い"
     ],
     [
      "きたいです",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Tôi muốn tiết kiệm lương để đi du lịch."
   },
   {
    "jp": "アルバイトの おかげで、 日本の 生活に 慣れました。",
    "furi": [
     [
      "アルバイト",
      null
     ],
     [
      "の",
      null
     ],
     [
      " ",
      null
     ],
     [
      "おかげで",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "日本",
      "にほん"
     ],
     [
      "の",
      null
     ],
     [
      " ",
      null
     ],
     [
      "生活",
      "せいかつ"
     ],
     [
      "に",
      null
     ],
     [
      " ",
      null
     ],
     [
      "慣",
      "な"
     ],
     [
      "れました",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Nhờ làm thêm, tôi đã quen với cuộc sống ở Nhật Bản."
   }
  ],
  "vocab": [
   {
    "w": "アルバイト",
    "r": "アルバイト",
    "hv": null,
    "vi": "Việc làm thêm (part-time)"
   },
   {
    "w": "掃除",
    "r": "そうじ",
    "hv": "TẢO TRỪ",
    "vi": "Dọn dẹp, vệ sinh"
   },
   {
    "w": "失敗",
    "r": "しっぱい",
    "hv": "THẤT BẠI",
    "vi": "Thất bại, mắc lỗi"
   },
   {
    "w": "慣れる",
    "r": "なれる",
    "hv": "QUÁN",
    "vi": "Quen với…"
   },
   {
    "w": "給料",
    "r": "きゅうりょう",
    "hv": "CẤP LIỆU",
    "vi": "Tiền lương"
   },
   {
    "w": "忙しい",
    "r": "いそがしい",
    "hv": "MANG",
    "vi": "Bận rộn"
   }
  ],
  "grammar": [
   {
    "p": "〜おかげで",
    "lv": "N3",
    "vi": "Nhờ… (kết quả tốt)",
    "ex": "アルバイトの おかげで、 日本の 生活に 慣れました。",
    "exVi": "Nhờ làm thêm, tôi đã quen với cuộc sống ở Nhật Bản."
   },
   {
    "p": "Vたり、Vたり します",
    "lv": "N5",
    "vi": "Làm việc này, việc kia… (liệt kê hành động)",
    "ex": "レジでは お金を 数えたり、 ふくろに 入れたり します。",
    "exVi": "Ở quầy thu ngân, tôi đếm tiền, bỏ đồ vào túi, và nhiều việc khác."
   }
  ],
  "quiz": [
   {
    "q": "わたしは 週に 何日 アルバイトを して いますか。",
    "options": [
     "二日",
     "三日",
     "四日",
     "五日"
    ],
    "answer": 1,
    "explain": "Trong bài có nói mỗi tuần tôi làm thêm ba ngày.",
    "evidence": "週に 三日",
    "tip": "Tìm số ngày làm việc trong một tuần."
   },
   {
    "q": "わたしは 給料を ためて、 何を したいですか。",
    "options": [
     "旅行に 行きたい",
     "車を 買いたい",
     "家を 買いたい",
     "本を 買いたい"
    ],
    "answer": 0,
    "explain": "Trong bài có nói tôi muốn tiết kiệm lương để đi du lịch.",
    "evidence": "給料を ためて、 旅行に 行きたいです",
    "tip": "Tìm mục đích tiết kiệm lương trong bài."
   }
  ]
 },
 {
  "id": "dk-n3-04",
  "img": "dk-n3-04.jpg",
  "audio": "dk-n3-04.mp3",
  "timings": [
   0.015,
   3.236,
   7.296,
   11.679,
   14.398,
   19.34,
   23.27,
   25.998,
   30.742,
   34.939,
   39.831
  ],
  "level": "N3",
  "title": "日本の 電車の マナー",
  "titleVi": "Phép lịch sự trên tàu điện Nhật Bản",
  "sentences": [
   {
    "jp": "日本の 電車には いろいろな マナーが あります。",
    "furi": [
     [
      "日本",
      "にほん"
     ],
     [
      "の",
      null
     ],
     [
      " ",
      null
     ],
     [
      "電車",
      "でんしゃ"
     ],
     [
      "には",
      null
     ],
     [
      " ",
      null
     ],
     [
      "いろいろな",
      null
     ],
     [
      " ",
      null
     ],
     [
      "マナー",
      null
     ],
     [
      "が",
      null
     ],
     [
      " ",
      null
     ],
     [
      "あります",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Trên tàu điện Nhật Bản có nhiều quy tắc ứng xử khác nhau."
   },
   {
    "jp": "電車の 中では、 静かに する ことが 大切です。",
    "furi": [
     [
      "電車",
      "でんしゃ"
     ],
     [
      "の",
      null
     ],
     [
      " ",
      null
     ],
     [
      "中",
      "なか"
     ],
     [
      "では",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "静",
      "しず"
     ],
     [
      "かに",
      null
     ],
     [
      " ",
      null
     ],
     [
      "する",
      null
     ],
     [
      " ",
      null
     ],
     [
      "こと",
      null
     ],
     [
      "が",
      null
     ],
     [
      " ",
      null
     ],
     [
      "大切",
      "たいせつ"
     ],
     [
      "です",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Trong tàu điện, việc giữ yên lặng là điều quan trọng."
   },
   {
    "jp": "電話で 話す ことは、 他の 人の めいわくに なります。",
    "furi": [
     [
      "電話",
      "でんわ"
     ],
     [
      "で",
      null
     ],
     [
      " ",
      null
     ],
     [
      "話",
      "はな"
     ],
     [
      "す",
      null
     ],
     [
      " ",
      null
     ],
     [
      "こと",
      null
     ],
     [
      "は",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "他",
      "ほか"
     ],
     [
      "の",
      null
     ],
     [
      " ",
      null
     ],
     [
      "人",
      "ひと"
     ],
     [
      "の",
      null
     ],
     [
      " ",
      null
     ],
     [
      "めいわく",
      null
     ],
     [
      "に",
      null
     ],
     [
      " ",
      null
     ],
     [
      "なります",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Nói chuyện điện thoại sẽ làm phiền những người khác."
   },
   {
    "jp": "けいたいでんわは マナーモードに します。",
    "furi": [
     [
      "けいたいでんわ",
      null
     ],
     [
      "は",
      null
     ],
     [
      " ",
      null
     ],
     [
      "マナーモード",
      null
     ],
     [
      "に",
      null
     ],
     [
      " ",
      null
     ],
     [
      "します",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Điện thoại di động nên để ở chế độ im lặng."
   },
   {
    "jp": "優先席は お年寄りや 体の 不自由な 人の ための 席です。",
    "furi": [
     [
      "優先席",
      "ゆうせんせき"
     ],
     [
      "は",
      null
     ],
     [
      " ",
      null
     ],
     [
      "お年寄り",
      "おとしより"
     ],
     [
      "や",
      null
     ],
     [
      " ",
      null
     ],
     [
      "体",
      "からだ"
     ],
     [
      "の",
      null
     ],
     [
      " ",
      null
     ],
     [
      "不自由",
      "ふじゆう"
     ],
     [
      "な",
      null
     ],
     [
      " ",
      null
     ],
     [
      "人",
      "ひと"
     ],
     [
      "の",
      null
     ],
     [
      " ",
      null
     ],
     [
      "ため",
      null
     ],
     [
      "の",
      null
     ],
     [
      " ",
      null
     ],
     [
      "席",
      "せき"
     ],
     [
      "です",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Ghế ưu tiên là ghế dành cho người cao tuổi và người khuyết tật."
   },
   {
    "jp": "降りる 人を 先に して から、 電車に 乗りましょう。",
    "furi": [
     [
      "降",
      "お"
     ],
     [
      "りる",
      null
     ],
     [
      " ",
      null
     ],
     [
      "人",
      "ひと"
     ],
     [
      "を",
      null
     ],
     [
      " ",
      null
     ],
     [
      "先",
      "さき"
     ],
     [
      "に",
      null
     ],
     [
      " ",
      null
     ],
     [
      "して",
      null
     ],
     [
      " ",
      null
     ],
     [
      "から",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "電車",
      "でんしゃ"
     ],
     [
      "に",
      null
     ],
     [
      " ",
      null
     ],
     [
      "乗",
      "の"
     ],
     [
      "りましょう",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Hãy để người xuống tàu xuống trước, rồi mới lên tàu."
   },
   {
    "jp": "ホームでは 列に 並んで 待ちましょう。",
    "furi": [
     [
      "ホーム",
      null
     ],
     [
      "では",
      null
     ],
     [
      " ",
      null
     ],
     [
      "列",
      "れつ"
     ],
     [
      "に",
      null
     ],
     [
      " ",
      null
     ],
     [
      "並",
      "なら"
     ],
     [
      "んで",
      null
     ],
     [
      " ",
      null
     ],
     [
      "待",
      "ま"
     ],
     [
      "ちましょう",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Ở sân ga, hãy xếp hàng và chờ."
   },
   {
    "jp": "電車の 中で 食べたり 飲んだり する のは、 あまり よく ありません。",
    "furi": [
     [
      "電車",
      "でんしゃ"
     ],
     [
      "の",
      null
     ],
     [
      " ",
      null
     ],
     [
      "中",
      "なか"
     ],
     [
      "で",
      null
     ],
     [
      " ",
      null
     ],
     [
      "食",
      "た"
     ],
     [
      "べたり",
      null
     ],
     [
      " ",
      null
     ],
     [
      "飲",
      "の"
     ],
     [
      "んだり",
      null
     ],
     [
      " ",
      null
     ],
     [
      "する",
      null
     ],
     [
      " ",
      null
     ],
     [
      "のは",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "あまり",
      null
     ],
     [
      " ",
      null
     ],
     [
      "よく",
      null
     ],
     [
      " ",
      null
     ],
     [
      "ありません",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Ăn uống trong tàu điện là điều không tốt lắm."
   },
   {
    "jp": "音楽を 聞く ときは、 音が もれない ように しましょう。",
    "furi": [
     [
      "音楽",
      "おんがく"
     ],
     [
      "を",
      null
     ],
     [
      " ",
      null
     ],
     [
      "聞",
      "き"
     ],
     [
      "く",
      null
     ],
     [
      " ",
      null
     ],
     [
      "とき",
      null
     ],
     [
      "は",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "音",
      "おと"
     ],
     [
      "が",
      null
     ],
     [
      " ",
      null
     ],
     [
      "もれない",
      null
     ],
     [
      " ",
      null
     ],
     [
      "ように",
      null
     ],
     [
      " ",
      null
     ],
     [
      "しましょう",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Khi nghe nhạc, hãy để âm thanh không bị lọt ra ngoài."
   },
   {
    "jp": "マナーを 守る ことは、 他の 人の 気持ちを 考える ことです。",
    "furi": [
     [
      "マナー",
      null
     ],
     [
      "を",
      null
     ],
     [
      " ",
      null
     ],
     [
      "守",
      "まも"
     ],
     [
      "る",
      null
     ],
     [
      " ",
      null
     ],
     [
      "こと",
      null
     ],
     [
      "は",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "他",
      "ほか"
     ],
     [
      "の",
      null
     ],
     [
      " ",
      null
     ],
     [
      "人",
      "ひと"
     ],
     [
      "の",
      null
     ],
     [
      " ",
      null
     ],
     [
      "気持ち",
      "きもち"
     ],
     [
      "を",
      null
     ],
     [
      " ",
      null
     ],
     [
      "考",
      "かんが"
     ],
     [
      "える",
      null
     ],
     [
      " ",
      null
     ],
     [
      "こと",
      null
     ],
     [
      "です",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Tuân thủ quy tắc ứng xử là nghĩ đến cảm xúc của người khác."
   },
   {
    "jp": "皆が 気持ちよく 電車に 乗れる ように しましょう。",
    "furi": [
     [
      "皆",
      "みな"
     ],
     [
      "が",
      null
     ],
     [
      " ",
      null
     ],
     [
      "気持ち",
      "きもち"
     ],
     [
      "よく",
      null
     ],
     [
      " ",
      null
     ],
     [
      "電車",
      "でんしゃ"
     ],
     [
      "に",
      null
     ],
     [
      " ",
      null
     ],
     [
      "乗",
      "の"
     ],
     [
      "れる",
      null
     ],
     [
      " ",
      null
     ],
     [
      "ように",
      null
     ],
     [
      " ",
      null
     ],
     [
      "しましょう",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Hãy để mọi người đều có thể đi tàu điện một cách thoải mái."
   }
  ],
  "vocab": [
   {
    "w": "マナー",
    "r": "マナー",
    "hv": null,
    "vi": "Phép lịch sự, quy tắc ứng xử"
   },
   {
    "w": "優先席",
    "r": "ゆうせんせき",
    "hv": "ƯU TIÊN TỊCH",
    "vi": "Ghế ưu tiên"
   },
   {
    "w": "お年寄り",
    "r": "おとしより",
    "hv": "NIÊN KÍ",
    "vi": "Người cao tuổi"
   },
   {
    "w": "めいわく",
    "r": "めいわく",
    "hv": "MÊ HOẶC",
    "vi": "Sự phiền phức, làm phiền người khác"
   },
   {
    "w": "守る",
    "r": "まもる",
    "hv": "THỦ",
    "vi": "Tuân thủ, giữ gìn"
   },
   {
    "w": "列",
    "r": "れつ",
    "hv": "LIỆT",
    "vi": "Hàng, dãy (người xếp hàng)"
   }
  ],
  "grammar": [
   {
    "p": "V-る/ない + ように、〜",
    "lv": "N4",
    "vi": "Để… / sao cho… (mục đích)",
    "ex": "音楽を 聞く ときは、 音が もれない ように しましょう。",
    "exVi": "Khi nghe nhạc, hãy để âm thanh không bị lọt ra ngoài."
   },
   {
    "p": "N + の ために",
    "lv": "N4",
    "vi": "Vì… / dành cho… (mục đích)",
    "ex": "優先席は お年寄りや 体の 不自由な 人の ための 席です。",
    "exVi": "Ghế ưu tiên là ghế dành cho người cao tuổi và người khuyết tật."
   }
  ],
  "quiz": [
   {
    "q": "電車の 中で 電話で 話す ことは どうですか。",
    "options": [
     "いいことです",
     "めいわくに なります",
     "楽しいことです",
     "静かです"
    ],
    "answer": 1,
    "explain": "Trong bài có nói nói chuyện điện thoại trong tàu sẽ làm phiền người khác.",
    "evidence": "他の 人の めいわくに なります",
    "tip": "Tìm câu nói về việc gọi điện thoại trong tàu."
   },
   {
    "q": "優先席は だれの ための 席ですか。",
    "options": [
     "子ども",
     "お年寄りや 体の 不自由な 人",
     "学生",
     "先生"
    ],
    "answer": 1,
    "explain": "Trong bài có nói ghế ưu tiên dành cho người cao tuổi và người khuyết tật.",
    "evidence": "優先席は お年寄りや 体の 不自由な 人の ための 席です",
    "tip": "Tìm câu giải thích về ghế ưu tiên."
   }
  ]
 },
 {
  "id": "dk-n3-05",
  "img": "dk-n3-05.jpg",
  "audio": "dk-n3-05.mp3",
  "timings": [
   0.015,
   3.829,
   8.178,
   12.107,
   15.315,
   19.337,
   24.308,
   27.847,
   32.531,
   36.913,
   39.54
  ],
  "level": "N3",
  "title": "日本の ごみの 分け方",
  "titleVi": "Cách phân loại rác ở Nhật Bản",
  "sentences": [
   {
    "jp": "日本では、 ごみを 分けて 捨てなければ なりません。",
    "furi": [
     [
      "日本",
      "にほん"
     ],
     [
      "では",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "ごみ",
      null
     ],
     [
      "を",
      null
     ],
     [
      " ",
      null
     ],
     [
      "分",
      "わ"
     ],
     [
      "けて",
      null
     ],
     [
      " ",
      null
     ],
     [
      "捨",
      "す"
     ],
     [
      "てなければ",
      null
     ],
     [
      " ",
      null
     ],
     [
      "なりません",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Ở Nhật Bản, rác phải được phân loại rồi mới vứt."
   },
   {
    "jp": "もえる ごみや もえない ごみなど、 いろいろな ごみが あります。",
    "furi": [
     [
      "もえる",
      null
     ],
     [
      " ",
      null
     ],
     [
      "ごみ",
      null
     ],
     [
      "や",
      null
     ],
     [
      " ",
      null
     ],
     [
      "もえない",
      null
     ],
     [
      " ",
      null
     ],
     [
      "ごみ",
      null
     ],
     [
      "など",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "いろいろな",
      null
     ],
     [
      " ",
      null
     ],
     [
      "ごみ",
      null
     ],
     [
      "が",
      null
     ],
     [
      " ",
      null
     ],
     [
      "あります",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Có nhiều loại rác khác nhau như rác cháy được, rác không cháy được…"
   },
   {
    "jp": "もえる ごみは 週に 二回、 出す ことが できます。",
    "furi": [
     [
      "もえる",
      null
     ],
     [
      " ",
      null
     ],
     [
      "ごみ",
      null
     ],
     [
      "は",
      null
     ],
     [
      " ",
      null
     ],
     [
      "週",
      "しゅう"
     ],
     [
      "に",
      null
     ],
     [
      " ",
      null
     ],
     [
      "二回",
      "にかい"
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "出",
      "だ"
     ],
     [
      "す",
      null
     ],
     [
      " ",
      null
     ],
     [
      "こと",
      null
     ],
     [
      "が",
      null
     ],
     [
      " ",
      null
     ],
     [
      "できます",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Rác cháy được có thể vứt hai lần một tuần."
   },
   {
    "jp": "びんや かん、 ペットボトルは しげんごみです。",
    "furi": [
     [
      "びん",
      null
     ],
     [
      "や",
      null
     ],
     [
      " ",
      null
     ],
     [
      "かん",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "ペットボトル",
      null
     ],
     [
      "は",
      null
     ],
     [
      " ",
      null
     ],
     [
      "しげんごみ",
      null
     ],
     [
      "です",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Chai lọ, lon và chai nhựa PET là rác tái chế."
   },
   {
    "jp": "ごみを 出す 日は、 市や 町に よって ちがいます。",
    "furi": [
     [
      "ごみ",
      null
     ],
     [
      "を",
      null
     ],
     [
      " ",
      null
     ],
     [
      "出",
      "だ"
     ],
     [
      "す",
      null
     ],
     [
      " ",
      null
     ],
     [
      "日",
      "ひ"
     ],
     [
      "は",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "市",
      "し"
     ],
     [
      "や",
      null
     ],
     [
      " ",
      null
     ],
     [
      "町",
      "まち"
     ],
     [
      "に",
      null
     ],
     [
      " ",
      null
     ],
     [
      "よって",
      null
     ],
     [
      " ",
      null
     ],
     [
      "ちがいます",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Ngày vứt rác khác nhau tùy theo thành phố hay thị trấn."
   },
   {
    "jp": "ごみが 散らからない ように、 決まった ふくろに 入れなければ なりません。",
    "furi": [
     [
      "ごみ",
      null
     ],
     [
      "が",
      null
     ],
     [
      " ",
      null
     ],
     [
      "散",
      "ち"
     ],
     [
      "らからない",
      null
     ],
     [
      " ",
      null
     ],
     [
      "ように",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "決",
      "き"
     ],
     [
      "まった",
      null
     ],
     [
      " ",
      null
     ],
     [
      "ふくろ",
      null
     ],
     [
      "に",
      null
     ],
     [
      " ",
      null
     ],
     [
      "入",
      "い"
     ],
     [
      "れなければ",
      null
     ],
     [
      " ",
      null
     ],
     [
      "なりません",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Để rác không bị vương vãi, phải bỏ vào túi quy định."
   },
   {
    "jp": "ごみを 分けないと、 回収して もらえません。",
    "furi": [
     [
      "ごみ",
      null
     ],
     [
      "を",
      null
     ],
     [
      " ",
      null
     ],
     [
      "分",
      "わ"
     ],
     [
      "けないと",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "回収",
      "かいしゅう"
     ],
     [
      "して",
      null
     ],
     [
      " ",
      null
     ],
     [
      "もらえません",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Nếu không phân loại rác, rác sẽ không được thu gom."
   },
   {
    "jp": "日本に 来た ばかりの 人は、 分け方が むずかしいと 言います。",
    "furi": [
     [
      "日本",
      "にほん"
     ],
     [
      "に",
      null
     ],
     [
      " ",
      null
     ],
     [
      "来",
      "き"
     ],
     [
      "た",
      null
     ],
     [
      " ",
      null
     ],
     [
      "ばかり",
      null
     ],
     [
      "の",
      null
     ],
     [
      " ",
      null
     ],
     [
      "人",
      "ひと"
     ],
     [
      "は",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "分",
      "わ"
     ],
     [
      "け",
      null
     ],
     [
      "方",
      "かた"
     ],
     [
      "が",
      null
     ],
     [
      " ",
      null
     ],
     [
      "むずかしい",
      null
     ],
     [
      "と",
      null
     ],
     [
      " ",
      null
     ],
     [
      "言",
      "い"
     ],
     [
      "います",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Những người mới đến Nhật nói rằng cách phân loại rác rất khó."
   },
   {
    "jp": "でも、 分ける ことは 環境を 守る ことに つながります。",
    "furi": [
     [
      "でも",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "分",
      "わ"
     ],
     [
      "ける",
      null
     ],
     [
      " ",
      null
     ],
     [
      "こと",
      null
     ],
     [
      "は",
      null
     ],
     [
      " ",
      null
     ],
     [
      "環境",
      "かんきょう"
     ],
     [
      "を",
      null
     ],
     [
      " ",
      null
     ],
     [
      "守",
      "まも"
     ],
     [
      "る",
      null
     ],
     [
      " ",
      null
     ],
     [
      "こと",
      null
     ],
     [
      "に",
      null
     ],
     [
      " ",
      null
     ],
     [
      "つながります",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Nhưng phân loại rác chính là góp phần bảo vệ môi trường."
   },
   {
    "jp": "わたしも ごみを 分ける ことに しました。",
    "furi": [
     [
      "わたし",
      null
     ],
     [
      "も",
      null
     ],
     [
      " ",
      null
     ],
     [
      "ごみ",
      null
     ],
     [
      "を",
      null
     ],
     [
      " ",
      null
     ],
     [
      "分",
      "わ"
     ],
     [
      "ける",
      null
     ],
     [
      " ",
      null
     ],
     [
      "こと",
      null
     ],
     [
      "に",
      null
     ],
     [
      " ",
      null
     ],
     [
      "しました",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Tôi cũng đã quyết định phân loại rác."
   },
   {
    "jp": "小さな ことから 始めて、 地球を 守りたいと 思います。",
    "furi": [
     [
      "小",
      "ちい"
     ],
     [
      "さな",
      null
     ],
     [
      " ",
      null
     ],
     [
      "こと",
      null
     ],
     [
      "から",
      null
     ],
     [
      " ",
      null
     ],
     [
      "始",
      "はじ"
     ],
     [
      "めて",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "地球",
      "ちきゅう"
     ],
     [
      "を",
      null
     ],
     [
      " ",
      null
     ],
     [
      "守",
      "まも"
     ],
     [
      "りたい",
      null
     ],
     [
      "と",
      null
     ],
     [
      " ",
      null
     ],
     [
      "思",
      "おも"
     ],
     [
      "います",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Tôi muốn bắt đầu từ những việc nhỏ để bảo vệ Trái Đất."
   }
  ],
  "vocab": [
   {
    "w": "分ける",
    "r": "わける",
    "hv": "PHÂN",
    "vi": "Phân loại, chia ra"
   },
   {
    "w": "もえるごみ",
    "r": "もえるごみ",
    "hv": "NHIÊN",
    "vi": "Rác cháy được"
   },
   {
    "w": "しげんごみ",
    "r": "しげんごみ",
    "hv": "TƯ NGUYÊN",
    "vi": "Rác tái chế (tài nguyên)"
   },
   {
    "w": "回収",
    "r": "かいしゅう",
    "hv": "HỒI THU",
    "vi": "Thu gom, thu hồi"
   },
   {
    "w": "決まる",
    "r": "きまる",
    "hv": "QUYẾT",
    "vi": "Được quy định, được quyết định"
   },
   {
    "w": "環境",
    "r": "かんきょう",
    "hv": "HOÀN CẢNH",
    "vi": "Môi trường"
   }
  ],
  "grammar": [
   {
    "p": "V-る/ない + ことにする",
    "lv": "N3",
    "vi": "Quyết định…",
    "ex": "わたしも ごみを 分ける ことに しました。",
    "exVi": "Tôi cũng đã quyết định phân loại rác."
   },
   {
    "p": "V-る/ない + ように、〜",
    "lv": "N4",
    "vi": "Để… / sao cho… (mục đích)",
    "ex": "ごみが 散らからない ように、 決まった ふくろに 入れなければ なりません。",
    "exVi": "Để rác không bị vương vãi, phải bỏ vào túi quy định."
   }
  ],
  "quiz": [
   {
    "q": "もえる ごみは 週に 何回 出す ことが できますか。",
    "options": [
     "一回",
     "二回",
     "三回",
     "四回"
    ],
    "answer": 1,
    "explain": "Trong bài có nói rác cháy được có thể vứt hai lần một tuần.",
    "evidence": "もえる ごみは 週に 二回、 出す ことが できます",
    "tip": "Tìm số lần vứt rác trong một tuần."
   },
   {
    "q": "ごみを 出す 日は 何に よって ちがいますか。",
    "options": [
     "市や 町に",
     "天気に",
     "曜日に",
     "時間に"
    ],
    "answer": 0,
    "explain": "Trong bài có nói ngày vứt rác khác nhau tùy theo thành phố hay thị trấn.",
    "evidence": "ごみを 出す 日は、 市や 町に よって ちがいます",
    "tip": "Tìm câu về ngày vứt rác."
   }
  ]
 },
 {
  "id": "dk-n3-06",
  "img": "dk-n3-06.jpg",
  "audio": "dk-n3-06.mp3",
  "timings": [
   0.015,
   4.066,
   8.301,
   12.169,
   14.494,
   18.53,
   21.567,
   23.908,
   27.92,
   31.014,
   35.266
  ],
  "level": "N3",
  "title": "ネットショッピング",
  "titleVi": "Mua sắm trực tuyến",
  "sentences": [
   {
    "jp": "最近、 ネットショッピングを する 人が 増えています。",
    "furi": [
     [
      "最近",
      "さいきん"
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "ネットショッピング",
      null
     ],
     [
      "を",
      null
     ],
     [
      " ",
      null
     ],
     [
      "する",
      null
     ],
     [
      " ",
      null
     ],
     [
      "人",
      "ひと"
     ],
     [
      "が",
      null
     ],
     [
      " ",
      null
     ],
     [
      "増",
      "ふ"
     ],
     [
      "えています",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Gần đây, số người mua sắm trực tuyến đang tăng lên."
   },
   {
    "jp": "スマートフォンや パソコンで、 いつでも 買い物が できます。",
    "furi": [
     [
      "スマートフォン",
      null
     ],
     [
      "や",
      null
     ],
     [
      " ",
      null
     ],
     [
      "パソコン",
      null
     ],
     [
      "で",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "いつでも",
      null
     ],
     [
      " ",
      null
     ],
     [
      "買",
      "か"
     ],
     [
      "い",
      null
     ],
     [
      "物",
      "もの"
     ],
     [
      "が",
      null
     ],
     [
      " ",
      null
     ],
     [
      "できます",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Có thể mua sắm bất cứ lúc nào bằng điện thoại thông minh hay máy tính."
   },
   {
    "jp": "注文した ものは、 早く 届く ことも あります。",
    "furi": [
     [
      "注文",
      "ちゅうもん"
     ],
     [
      "した",
      null
     ],
     [
      " ",
      null
     ],
     [
      "もの",
      null
     ],
     [
      "は",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "早",
      "はや"
     ],
     [
      "く",
      null
     ],
     [
      " ",
      null
     ],
     [
      "届",
      "とど"
     ],
     [
      "く",
      null
     ],
     [
      " ",
      null
     ],
     [
      "こと",
      null
     ],
     [
      "も",
      null
     ],
     [
      " ",
      null
     ],
     [
      "あります",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Hàng đã đặt cũng có khi được giao rất nhanh."
   },
   {
    "jp": "値段を くらべる ことも できます。",
    "furi": [
     [
      "値段",
      "ねだん"
     ],
     [
      "を",
      null
     ],
     [
      " ",
      null
     ],
     [
      "くらべる",
      null
     ],
     [
      " ",
      null
     ],
     [
      "こと",
      null
     ],
     [
      "も",
      null
     ],
     [
      " ",
      null
     ],
     [
      "できます",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Cũng có thể so sánh giá cả."
   },
   {
    "jp": "一方で、 気を つけなければ ならない ことも あります。",
    "furi": [
     [
      "一方",
      "いっぽう"
     ],
     [
      "で",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "気",
      "き"
     ],
     [
      "を",
      null
     ],
     [
      " ",
      null
     ],
     [
      "つけなければ",
      null
     ],
     [
      " ",
      null
     ],
     [
      "ならない",
      null
     ],
     [
      " ",
      null
     ],
     [
      "こと",
      null
     ],
     [
      "も",
      null
     ],
     [
      " ",
      null
     ],
     [
      "あります",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Mặt khác, cũng có những điều cần phải chú ý."
   },
   {
    "jp": "写真と 実物が ちがう ことも あります。",
    "furi": [
     [
      "写真",
      "しゃしん"
     ],
     [
      "と",
      null
     ],
     [
      " ",
      null
     ],
     [
      "実物",
      "じつぶつ"
     ],
     [
      "が",
      null
     ],
     [
      " ",
      null
     ],
     [
      "ちがう",
      null
     ],
     [
      " ",
      null
     ],
     [
      "こと",
      null
     ],
     [
      "も",
      null
     ],
     [
      " ",
      null
     ],
     [
      "あります",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Cũng có khi ảnh và hàng thật khác nhau."
   },
   {
    "jp": "サイズが 合わない ことも あります。",
    "furi": [
     [
      "サイズ",
      null
     ],
     [
      "が",
      null
     ],
     [
      " ",
      null
     ],
     [
      "合",
      "あ"
     ],
     [
      "わない",
      null
     ],
     [
      " ",
      null
     ],
     [
      "こと",
      null
     ],
     [
      "も",
      null
     ],
     [
      " ",
      null
     ],
     [
      "あります",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Cũng có khi kích cỡ không vừa."
   },
   {
    "jp": "友だちに よると、 ネットの ほうが 安いそうです。",
    "furi": [
     [
      "友",
      "とも"
     ],
     [
      "だち",
      null
     ],
     [
      "に",
      null
     ],
     [
      " ",
      null
     ],
     [
      "よると",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "ネット",
      null
     ],
     [
      "の",
      null
     ],
     [
      " ",
      null
     ],
     [
      "ほう",
      null
     ],
     [
      "が",
      null
     ],
     [
      " ",
      null
     ],
     [
      "安",
      "やす"
     ],
     [
      "いそうです",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Theo bạn tôi nói, mua trên mạng thì rẻ hơn."
   },
   {
    "jp": "買う 前に、 レビューを 読むと いいでしょう。",
    "furi": [
     [
      "買",
      "か"
     ],
     [
      "う",
      null
     ],
     [
      " ",
      null
     ],
     [
      "前",
      "まえ"
     ],
     [
      "に",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "レビュー",
      null
     ],
     [
      "を",
      null
     ],
     [
      " ",
      null
     ],
     [
      "読",
      "よ"
     ],
     [
      "むと",
      null
     ],
     [
      " ",
      null
     ],
     [
      "いいでしょう",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Trước khi mua, nên đọc đánh giá thì tốt."
   },
   {
    "jp": "返品が できるかどうか、 確かめる ことも 大切です。",
    "furi": [
     [
      "返品",
      "へんぴん"
     ],
     [
      "が",
      null
     ],
     [
      " ",
      null
     ],
     [
      "できる",
      null
     ],
     [
      "かどうか",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "確",
      "たし"
     ],
     [
      "かめる",
      null
     ],
     [
      " ",
      null
     ],
     [
      "こと",
      null
     ],
     [
      "も",
      null
     ],
     [
      " ",
      null
     ],
     [
      "大切",
      "たいせつ"
     ],
     [
      "です",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Việc kiểm tra xem có thể trả hàng hay không cũng rất quan trọng."
   },
   {
    "jp": "ネットショッピングは 便利ですが、 上手に 使う ことが 大切だと 思います。",
    "furi": [
     [
      "ネットショッピング",
      null
     ],
     [
      "は",
      null
     ],
     [
      " ",
      null
     ],
     [
      "便利",
      "べんり"
     ],
     [
      "です",
      null
     ],
     [
      "が",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "上手",
      "じょうず"
     ],
     [
      "に",
      null
     ],
     [
      " ",
      null
     ],
     [
      "使",
      "つか"
     ],
     [
      "う",
      null
     ],
     [
      " ",
      null
     ],
     [
      "こと",
      null
     ],
     [
      "が",
      null
     ],
     [
      " ",
      null
     ],
     [
      "大切",
      "たいせつ"
     ],
     [
      "だと",
      null
     ],
     [
      " ",
      null
     ],
     [
      "思",
      "おも"
     ],
     [
      "います",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Mua sắm trực tuyến rất tiện lợi, nhưng tôi nghĩ điều quan trọng là phải biết dùng một cách khôn ngoan."
   }
  ],
  "vocab": [
   {
    "w": "注文",
    "r": "ちゅうもん",
    "hv": "CHÚ VĂN",
    "vi": "Đặt hàng"
   },
   {
    "w": "届く",
    "r": "とどく",
    "hv": "GIỚI",
    "vi": "Được giao đến, tới nơi"
   },
   {
    "w": "便利",
    "r": "べんり",
    "hv": "TIỆN LỢI",
    "vi": "Tiện lợi"
   },
   {
    "w": "値段",
    "r": "ねだん",
    "hv": "TRỊ ĐOẠN",
    "vi": "Giá cả"
   },
   {
    "w": "返品",
    "r": "へんぴん",
    "hv": "PHẢN PHẨM",
    "vi": "Trả hàng"
   },
   {
    "w": "増える",
    "r": "ふえる",
    "hv": "TĂNG",
    "vi": "Tăng lên"
   }
  ],
  "grammar": [
   {
    "p": "〜一方（で）",
    "lv": "N3",
    "vi": "Mặt khác… / một mặt…",
    "ex": "一方で、 気を つけなければ ならない ことも あります。",
    "exVi": "Mặt khác, cũng có những điều cần phải chú ý."
   },
   {
    "p": "〜そうです (truyền văn)",
    "lv": "N4",
    "vi": "Nghe nói là… (truyền đạt lại)",
    "ex": "友だちに よると、 ネットの ほうが 安いそうです。",
    "exVi": "Theo bạn tôi nói, mua trên mạng thì rẻ hơn."
   }
  ],
  "quiz": [
   {
    "q": "ネットショッピングの いい ところは どれですか。",
    "options": [
     "値段を くらべる ことが できる",
     "写真と 実物が 同じ",
     "サイズが いつも 合う",
     "返品が できない"
    ],
    "answer": 0,
    "explain": "Trong bài có nói mua sắm trực tuyến có thể so sánh giá cả.",
    "evidence": "値段を くらべる ことも できます",
    "tip": "Tìm câu về lợi ích của mua sắm trực tuyến."
   },
   {
    "q": "買う 前に、 何を すると いいですか。",
    "options": [
     "レビューを 読む",
     "値段を 忘れる",
     "友だちに 聞かない",
     "すぐに 注文する"
    ],
    "answer": 0,
    "explain": "Trong bài có nói trước khi mua, nên đọc đánh giá thì tốt.",
    "evidence": "買う 前に、 レビューを 読むと いいでしょう",
    "tip": "Tìm lời khuyên trước khi mua hàng."
   }
  ]
 },
 {
  "id": "dk-n3-07",
  "img": "dk-n3-07.jpg",
  "audio": "dk-n3-07.mp3",
  "timings": [
   0.015,
   3.126,
   5.667,
   7.879,
   10.564,
   15.259,
   19.496,
   24.263,
   28.071,
   32.703,
   37.765
  ],
  "level": "N3",
  "title": "学校の きゅうしょく",
  "titleVi": "Bữa trưa ở trường học Nhật Bản",
  "sentences": [
   {
    "jp": "日本の 学校では、 きゅうしょくを 食べます。",
    "furi": [
     [
      "日本",
      "にほん"
     ],
     [
      "の",
      null
     ],
     [
      " ",
      null
     ],
     [
      "学校",
      "がっこう"
     ],
     [
      "では",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "きゅうしょく",
      null
     ],
     [
      "を",
      null
     ],
     [
      " ",
      null
     ],
     [
      "食",
      "た"
     ],
     [
      "べます",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Ở trường học Nhật Bản, học sinh ăn bữa trưa ở trường."
   },
   {
    "jp": "きゅうしょくは、 学校で 作ります。",
    "furi": [
     [
      "きゅうしょく",
      null
     ],
     [
      "は",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "学校",
      "がっこう"
     ],
     [
      "で",
      null
     ],
     [
      " ",
      null
     ],
     [
      "作",
      "つく"
     ],
     [
      "ります",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Bữa trưa ở trường được nấu tại trường."
   },
   {
    "jp": "こんだては 毎月 決まります。",
    "furi": [
     [
      "こんだて",
      null
     ],
     [
      "は",
      null
     ],
     [
      " ",
      null
     ],
     [
      "毎月",
      "まいつき"
     ],
     [
      " ",
      null
     ],
     [
      "決",
      "き"
     ],
     [
      "まります",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Thực đơn được quyết định mỗi tháng."
   },
   {
    "jp": "パンや ごはん、 ぎゅうにゅうが 出ます。",
    "furi": [
     [
      "パン",
      null
     ],
     [
      "や",
      null
     ],
     [
      " ",
      null
     ],
     [
      "ごはん",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "ぎゅうにゅう",
      null
     ],
     [
      "が",
      null
     ],
     [
      " ",
      null
     ],
     [
      "出",
      "で"
     ],
     [
      "ます",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Có bánh mì, cơm và sữa."
   },
   {
    "jp": "子どもたちは、 きゅうしょくを 残さないように、 がんばっています。",
    "furi": [
     [
      "子",
      "こ"
     ],
     [
      "ども",
      null
     ],
     [
      "たち",
      null
     ],
     [
      "は",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "きゅうしょく",
      null
     ],
     [
      "を",
      null
     ],
     [
      " ",
      null
     ],
     [
      "残",
      "のこ"
     ],
     [
      "さない",
      null
     ],
     [
      "ように",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "がんばって",
      null
     ],
     [
      "います",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Các em nhỏ cố gắng không để thừa bữa trưa ở trường."
   },
   {
    "jp": "苦手な 食べ物が あっても、 少しずつ 食べるように しています。",
    "furi": [
     [
      "苦手",
      "にがて"
     ],
     [
      "な",
      null
     ],
     [
      " ",
      null
     ],
     [
      "食べ物",
      "たべもの"
     ],
     [
      "が",
      null
     ],
     [
      " ",
      null
     ],
     [
      "あっても",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "少",
      "すこ"
     ],
     [
      "しずつ",
      null
     ],
     [
      " ",
      null
     ],
     [
      "食",
      "た"
     ],
     [
      "べる",
      null
     ],
     [
      "ように",
      null
     ],
     [
      " ",
      null
     ],
     [
      "して",
      null
     ],
     [
      "います",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Dù có món không thích, các em cũng cố ăn từng chút một."
   },
   {
    "jp": "きゅうしょくの 時間は、 子どもたちに とって、 楽しい 時間です。",
    "furi": [
     [
      "きゅうしょく",
      null
     ],
     [
      "の",
      null
     ],
     [
      " ",
      null
     ],
     [
      "時間",
      "じかん"
     ],
     [
      "は",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "子",
      "こ"
     ],
     [
      "ども",
      null
     ],
     [
      "たち",
      null
     ],
     [
      "に",
      null
     ],
     [
      " ",
      null
     ],
     [
      "とって",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "楽",
      "たの"
     ],
     [
      "しい",
      null
     ],
     [
      " ",
      null
     ],
     [
      "時間",
      "じかん"
     ],
     [
      "です",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Giờ ăn trưa ở trường là khoảng thời gian vui vẻ đối với các em."
   },
   {
    "jp": "当番の 子どもが、 みんなに きゅうしょくを くばります。",
    "furi": [
     [
      "当番",
      "とうばん"
     ],
     [
      "の",
      null
     ],
     [
      " ",
      null
     ],
     [
      "子",
      "こ"
     ],
     [
      "ども",
      null
     ],
     [
      "が",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "みんな",
      null
     ],
     [
      "に",
      null
     ],
     [
      " ",
      null
     ],
     [
      "きゅうしょく",
      null
     ],
     [
      "を",
      null
     ],
     [
      " ",
      null
     ],
     [
      "くばります",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Em trực nhật phát bữa trưa cho mọi người."
   },
   {
    "jp": "えいようが ある 食べ物を 食べるからには、 元気に なるでしょう。",
    "furi": [
     [
      "えいよう",
      null
     ],
     [
      "が",
      null
     ],
     [
      " ",
      null
     ],
     [
      "ある",
      null
     ],
     [
      " ",
      null
     ],
     [
      "食べ物",
      "たべもの"
     ],
     [
      "を",
      null
     ],
     [
      " ",
      null
     ],
     [
      "食",
      "た"
     ],
     [
      "べる",
      null
     ],
     [
      "からには",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "元気",
      "げんき"
     ],
     [
      "に",
      null
     ],
     [
      " ",
      null
     ],
     [
      "なるでしょう",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Vì ăn những món bổ dưỡng nên chắc chắn các em sẽ khỏe mạnh."
   },
   {
    "jp": "子どもの うちに、 いろいろな 食べ物を 食べる ことは、 大切です。",
    "furi": [
     [
      "子",
      "こ"
     ],
     [
      "ども",
      null
     ],
     [
      "の",
      null
     ],
     [
      " ",
      null
     ],
     [
      "うちに",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "いろいろな",
      null
     ],
     [
      " ",
      null
     ],
     [
      "食べ物",
      "たべもの"
     ],
     [
      "を",
      null
     ],
     [
      " ",
      null
     ],
     [
      "食",
      "た"
     ],
     [
      "べる",
      null
     ],
     [
      " ",
      null
     ],
     [
      "こと",
      null
     ],
     [
      "は",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "大切",
      "たいせつ"
     ],
     [
      "です",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Việc ăn nhiều món ăn khác nhau từ khi còn nhỏ là rất quan trọng."
   },
   {
    "jp": "きゅうしょくは、 日本の 学校の 大切な 文化だと 思います。",
    "furi": [
     [
      "きゅうしょく",
      null
     ],
     [
      "は",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "日本",
      "にほん"
     ],
     [
      "の",
      null
     ],
     [
      " ",
      null
     ],
     [
      "学校",
      "がっこう"
     ],
     [
      "の",
      null
     ],
     [
      " ",
      null
     ],
     [
      "大切",
      "たいせつ"
     ],
     [
      "な",
      null
     ],
     [
      " ",
      null
     ],
     [
      "文化",
      "ぶんか"
     ],
     [
      "だと",
      null
     ],
     [
      " ",
      null
     ],
     [
      "思",
      "おも"
     ],
     [
      "います",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Tôi nghĩ bữa trưa ở trường là một nét văn hóa quan trọng của trường học Nhật Bản."
   }
  ],
  "vocab": [
   {
    "w": "きゅうしょく",
    "r": "きゅうしょく",
    "hv": "CẤP THỰC",
    "vi": "Bữa trưa ở trường"
   },
   {
    "w": "こんだて",
    "r": "こんだて",
    "hv": "HIẾN LẬP",
    "vi": "Thực đơn"
   },
   {
    "w": "えいよう",
    "r": "えいよう",
    "hv": "VINH DƯỠNG",
    "vi": "Dinh dưỡng"
   },
   {
    "w": "残す",
    "r": "のこす",
    "hv": "TÀN",
    "vi": "Để thừa, còn lại"
   },
   {
    "w": "苦手",
    "r": "にがて",
    "hv": "KHỔ THỦ",
    "vi": "Không thích, kém (món ăn, việc gì)"
   },
   {
    "w": "当番",
    "r": "とうばん",
    "hv": "ĐƯƠNG PHIÊN",
    "vi": "Trực nhật"
   }
  ],
  "grammar": [
   {
    "p": "〜からには",
    "lv": "N3",
    "vi": "Vì đã… thì… / đã… thì phải…",
    "ex": "えいようが ある 食べ物を 食べるからには、 元気に なるでしょう。",
    "exVi": "Vì ăn những món bổ dưỡng nên chắc chắn các em sẽ khỏe mạnh."
   },
   {
    "p": "〜うちに",
    "lv": "N3",
    "vi": "Trong khi… / nhân lúc còn…",
    "ex": "子どもの うちに、 いろいろな 食べ物を 食べる ことは、 大切です。",
    "exVi": "Việc ăn nhiều món ăn khác nhau từ khi còn nhỏ là rất quan trọng."
   }
  ],
  "quiz": [
   {
    "q": "きゅうしょくの こんだては いつ 決まりますか。",
    "options": [
     "毎月",
     "毎日",
     "毎年",
     "毎週"
    ],
    "answer": 0,
    "explain": "Trong bài có nói thực đơn được quyết định mỗi tháng.",
    "evidence": "こんだては 毎月 決まります",
    "tip": "Tìm câu về thực đơn."
   },
   {
    "q": "子どもたちは きゅうしょくを どう 食べますか。",
    "options": [
     "残さないように、 少しずつ 食べます",
     "ぜんぶ 残します",
     "早く 食べます",
     "一人で 食べます"
    ],
    "answer": 0,
    "explain": "Trong bài có nói các em cố gắng không để thừa bữa trưa, ăn từng chút một.",
    "evidence": "きゅうしょくを 残さないように、 がんばっています",
    "tip": "Tìm câu về cách các em ăn bữa trưa."
   }
  ]
 },
 {
  "id": "dk-n3-08",
  "img": "dk-n3-08.jpg",
  "audio": "dk-n3-08.mp3",
  "timings": [
   0.015,
   3.418,
   6.309,
   8.462,
   11.823,
   14.862,
   18.826,
   21.72,
   26.941,
   31.249,
   34.721
  ],
  "level": "N3",
  "title": "ボランティアの 一日",
  "titleVi": "Một ngày làm tình nguyện",
  "sentences": [
   {
    "jp": "日曜日に、 わたしは ボランティアに 行きました。",
    "furi": [
     [
      "日曜日",
      "にちようび"
     ],
     [
      "に",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "わたし",
      null
     ],
     [
      "は",
      null
     ],
     [
      " ",
      null
     ],
     [
      "ボランティア",
      null
     ],
     [
      "に",
      null
     ],
     [
      " ",
      null
     ],
     [
      "行",
      "い"
     ],
     [
      "きました",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Vào Chủ nhật, tôi đã đi làm tình nguyện."
   },
   {
    "jp": "朝から、 公園の 掃除を しました。",
    "furi": [
     [
      "朝",
      "あさ"
     ],
     [
      "から",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "公園",
      "こうえん"
     ],
     [
      "の",
      null
     ],
     [
      " ",
      null
     ],
     [
      "掃除",
      "そうじ"
     ],
     [
      "を",
      null
     ],
     [
      " ",
      null
     ],
     [
      "しました",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Từ sáng, tôi đã dọn dẹp công viên."
   },
   {
    "jp": "ごみを たくさん ひろいました。",
    "furi": [
     [
      "ごみ",
      null
     ],
     [
      "を",
      null
     ],
     [
      " ",
      null
     ],
     [
      "たくさん",
      null
     ],
     [
      " ",
      null
     ],
     [
      "ひろいました",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Tôi đã nhặt rất nhiều rác."
   },
   {
    "jp": "ごみは 思ったほど 多くは ありませんでした。",
    "furi": [
     [
      "ごみ",
      null
     ],
     [
      "は",
      null
     ],
     [
      " ",
      null
     ],
     [
      "思",
      "おも"
     ],
     [
      "った",
      null
     ],
     [
      "ほど",
      null
     ],
     [
      " ",
      null
     ],
     [
      "多",
      "おお"
     ],
     [
      "くは",
      null
     ],
     [
      " ",
      null
     ],
     [
      "ありませんでした",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Rác không nhiều như tôi nghĩ."
   },
   {
    "jp": "午後は、 おとしよりの いえを たずねました。",
    "furi": [
     [
      "午後",
      "ごご"
     ],
     [
      "は",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "おとしより",
      null
     ],
     [
      "の",
      null
     ],
     [
      " ",
      null
     ],
     [
      "いえ",
      null
     ],
     [
      "を",
      null
     ],
     [
      " ",
      null
     ],
     [
      "たずねました",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Buổi chiều, tôi đã đến thăm nhà của người cao tuổi."
   },
   {
    "jp": "おとしよりと 話して、 いっしょに お茶を 飲みました。",
    "furi": [
     [
      "おとしより",
      null
     ],
     [
      "と",
      null
     ],
     [
      " ",
      null
     ],
     [
      "話",
      "はな"
     ],
     [
      "して",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "いっしょに",
      null
     ],
     [
      " ",
      null
     ],
     [
      "お",
      null
     ],
     [
      "茶",
      "ちゃ"
     ],
     [
      "を",
      null
     ],
     [
      " ",
      null
     ],
     [
      "飲",
      "の"
     ],
     [
      "みました",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Tôi đã trò chuyện với người cao tuổi và cùng uống trà."
   },
   {
    "jp": "おとしよりは、 とても うれしそうでした。",
    "furi": [
     [
      "おとしより",
      null
     ],
     [
      "は",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "とても",
      null
     ],
     [
      " ",
      null
     ],
     [
      "うれしそう",
      null
     ],
     [
      "でした",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Người cao tuổi trông rất vui."
   },
   {
    "jp": "ボランティアを して 初めて、 人を 助ける ことの 楽しさが 分かりました。",
    "furi": [
     [
      "ボランティア",
      null
     ],
     [
      "を",
      null
     ],
     [
      " ",
      null
     ],
     [
      "して",
      null
     ],
     [
      " ",
      null
     ],
     [
      "初",
      "はじ"
     ],
     [
      "めて",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "人",
      "ひと"
     ],
     [
      "を",
      null
     ],
     [
      " ",
      null
     ],
     [
      "助",
      "たす"
     ],
     [
      "ける",
      null
     ],
     [
      " ",
      null
     ],
     [
      "こと",
      null
     ],
     [
      "の",
      null
     ],
     [
      " ",
      null
     ],
     [
      "楽",
      "たの"
     ],
     [
      "しさ",
      null
     ],
     [
      "が",
      null
     ],
     [
      " ",
      null
     ],
     [
      "分",
      "わ"
     ],
     [
      "かりました",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Lần đầu làm tình nguyện, tôi mới hiểu niềm vui của việc giúp đỡ người khác."
   },
   {
    "jp": "少し 疲れましたが、 心は とても 元気に なりました。",
    "furi": [
     [
      "少",
      "すこ"
     ],
     [
      "し",
      null
     ],
     [
      " ",
      null
     ],
     [
      "疲",
      "つか"
     ],
     [
      "れました",
      null
     ],
     [
      "が",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "心",
      "こころ"
     ],
     [
      "は",
      null
     ],
     [
      " ",
      null
     ],
     [
      "とても",
      null
     ],
     [
      " ",
      null
     ],
     [
      "元気",
      "げんき"
     ],
     [
      "に",
      null
     ],
     [
      " ",
      null
     ],
     [
      "なりました",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Tôi hơi mệt, nhưng trong lòng cảm thấy rất khỏe khoắn."
   },
   {
    "jp": "ボランティアは、 自分の 時間を 使う ことです。",
    "furi": [
     [
      "ボランティア",
      null
     ],
     [
      "は",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "自分",
      "じぶん"
     ],
     [
      "の",
      null
     ],
     [
      " ",
      null
     ],
     [
      "時間",
      "じかん"
     ],
     [
      "を",
      null
     ],
     [
      " ",
      null
     ],
     [
      "使",
      "つか"
     ],
     [
      "う",
      null
     ],
     [
      " ",
      null
     ],
     [
      "こと",
      null
     ],
     [
      "です",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Làm tình nguyện là dùng thời gian của mình."
   },
   {
    "jp": "でも、 人の ために 何かを する ことは、 自分の ためにも なります。",
    "furi": [
     [
      "でも",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "人",
      "ひと"
     ],
     [
      "の",
      null
     ],
     [
      " ",
      null
     ],
     [
      "ために",
      null
     ],
     [
      " ",
      null
     ],
     [
      "何",
      "なに"
     ],
     [
      "か",
      null
     ],
     [
      "を",
      null
     ],
     [
      " ",
      null
     ],
     [
      "する",
      null
     ],
     [
      " ",
      null
     ],
     [
      "こと",
      null
     ],
     [
      "は",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "自分",
      "じぶん"
     ],
     [
      "の",
      null
     ],
     [
      " ",
      null
     ],
     [
      "ために",
      null
     ],
     [
      "も",
      null
     ],
     [
      " ",
      null
     ],
     [
      "なります",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Nhưng làm điều gì đó vì người khác cũng là vì chính mình."
   }
  ],
  "vocab": [
   {
    "w": "ボランティア",
    "r": "ボランティア",
    "hv": null,
    "vi": "Tình nguyện viên / hoạt động tình nguyện"
   },
   {
    "w": "掃除",
    "r": "そうじ",
    "hv": "TẢO TRỪ",
    "vi": "Dọn dẹp, quét dọn"
   },
   {
    "w": "ごみ",
    "r": "ごみ",
    "hv": null,
    "vi": "Rác"
   },
   {
    "w": "おとしより",
    "r": "おとしより",
    "hv": null,
    "vi": "Người cao tuổi"
   },
   {
    "w": "助ける",
    "r": "たすける",
    "hv": "TRỢ",
    "vi": "Giúp đỡ"
   },
   {
    "w": "疲れる",
    "r": "つかれる",
    "hv": "BÌ",
    "vi": "Mệt"
   }
  ],
  "grammar": [
   {
    "p": "〜ほど",
    "lv": "N3",
    "vi": "Đến mức… / như… (so sánh mức độ)",
    "ex": "ごみは 思ったほど 多くは ありませんでした。",
    "exVi": "Rác không nhiều như tôi nghĩ."
   },
   {
    "p": "V-て 初めて",
    "lv": "N3",
    "vi": "Lần đầu… mới… / làm… mới…",
    "ex": "ボランティアを して 初めて、 人を 助ける ことの 楽しさが 分かりました。",
    "exVi": "Lần đầu làm tình nguyện, tôi mới hiểu niềm vui của việc giúp đỡ người khác."
   }
  ],
  "quiz": [
   {
    "q": "わたしは 日曜日の 朝から 何を しましたか。",
    "options": [
     "公園の 掃除を",
     "海で 泳ぐことを",
     "山に 登ることを",
     "本を 読むことを"
    ],
    "answer": 0,
    "explain": "Trong bài có nói từ sáng, tôi đã dọn dẹp công viên.",
    "evidence": "朝から、 公園の 掃除を しました",
    "tip": "Tìm câu về buổi sáng Chủ nhật."
   },
   {
    "q": "ボランティアを して 初めて、 わたしは 何が 分かりましたか。",
    "options": [
     "人を 助ける ことの 楽しさが",
     "お金の 大切さが",
     "勉強の 難しさが",
     "仕事の 忙しさが"
    ],
    "answer": 0,
    "explain": "Trong bài có nói lần đầu làm tình nguyện, tôi mới hiểu niềm vui của việc giúp đỡ người khác.",
    "evidence": "人を 助ける ことの 楽しさが 分かりました",
    "tip": "Tìm câu có từ '初めて'."
   }
  ]
 },
 {
  "id": "dk-n3-09",
  "img": "dk-n3-09.jpg",
  "audio": "dk-n3-09.mp3",
  "timings": [
   0.015,
   3.097,
   6.085,
   8.933,
   11.453,
   15.416,
   19.985,
   24.247,
   28.241,
   30.7,
   34.568
  ],
  "level": "N3",
  "title": "引っ越しの一日",
  "titleVi": "Một ngày chuyển nhà",
  "sentences": [
   {
    "jp": "先週の どようびに、 引っ越しを しました。",
    "furi": [
     [
      "先週",
      "せんしゅう"
     ],
     [
      "の",
      null
     ],
     [
      " ",
      null
     ],
     [
      "どようび",
      null
     ],
     [
      "に",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "引っ越し",
      "ひっこし"
     ],
     [
      "を",
      null
     ],
     [
      " ",
      null
     ],
     [
      "しました",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Thứ bảy tuần trước, tôi đã chuyển nhà."
   },
   {
    "jp": "朝から、 友だちが 手伝いに 来ました。",
    "furi": [
     [
      "朝",
      "あさ"
     ],
     [
      "から",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "友",
      "とも"
     ],
     [
      "だち",
      null
     ],
     [
      "が",
      null
     ],
     [
      " ",
      null
     ],
     [
      "手伝",
      "てつだ"
     ],
     [
      "いに",
      null
     ],
     [
      " ",
      null
     ],
     [
      "来",
      "き"
     ],
     [
      "ました",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Từ sáng, bạn bè đã đến giúp tôi."
   },
   {
    "jp": "ダンボールに 本や 服を つめました。",
    "furi": [
     [
      "ダンボール",
      null
     ],
     [
      "に",
      null
     ],
     [
      " ",
      null
     ],
     [
      "本",
      "ほん"
     ],
     [
      "や",
      null
     ],
     [
      " ",
      null
     ],
     [
      "服",
      "ふく"
     ],
     [
      "を",
      null
     ],
     [
      " ",
      null
     ],
     [
      "つめました",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Tôi đã xếp sách và quần áo vào thùng các-tông."
   },
   {
    "jp": "にもつが 重くて、 大変でした。",
    "furi": [
     [
      "にもつ",
      null
     ],
     [
      "が",
      null
     ],
     [
      " ",
      null
     ],
     [
      "重",
      "おも"
     ],
     [
      "くて",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "大変",
      "たいへん"
     ],
     [
      "でした",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Đồ đạc nặng, thật vất vả."
   },
   {
    "jp": "にもつを 運ぶ あいだに、 あせが たくさん 出ました。",
    "furi": [
     [
      "にもつ",
      null
     ],
     [
      "を",
      null
     ],
     [
      " ",
      null
     ],
     [
      "運",
      "はこ"
     ],
     [
      "ぶ",
      null
     ],
     [
      " ",
      null
     ],
     [
      "あいだに",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "あせ",
      null
     ],
     [
      "が",
      null
     ],
     [
      " ",
      null
     ],
     [
      "たくさん",
      null
     ],
     [
      " ",
      null
     ],
     [
      "出",
      "で"
     ],
     [
      "ました",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Trong lúc khuân đồ, tôi đã đổ rất nhiều mồ hôi."
   },
   {
    "jp": "友だちと いっしょに、 にもつを 新しい いえに 運びました。",
    "furi": [
     [
      "友",
      "とも"
     ],
     [
      "だち",
      null
     ],
     [
      "と",
      null
     ],
     [
      " ",
      null
     ],
     [
      "いっしょに",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "にもつ",
      null
     ],
     [
      "を",
      null
     ],
     [
      " ",
      null
     ],
     [
      "新",
      "あたら"
     ],
     [
      "しい",
      null
     ],
     [
      " ",
      null
     ],
     [
      "いえ",
      null
     ],
     [
      "に",
      null
     ],
     [
      " ",
      null
     ],
     [
      "運",
      "はこ"
     ],
     [
      "びました",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Tôi cùng bạn bè đã chuyển đồ đạc đến nhà mới."
   },
   {
    "jp": "新しい 部屋を そうじして、 にもつを かたづけました。",
    "furi": [
     [
      "新",
      "あたら"
     ],
     [
      "しい",
      null
     ],
     [
      " ",
      null
     ],
     [
      "部屋",
      "へや"
     ],
     [
      "を",
      null
     ],
     [
      " ",
      null
     ],
     [
      "そうじして",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "にもつ",
      null
     ],
     [
      "を",
      null
     ],
     [
      " ",
      null
     ],
     [
      "かたづけました",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Tôi dọn phòng mới và sắp xếp đồ đạc."
   },
   {
    "jp": "夕方に なって、 やっと 部屋が きれいに なりました。",
    "furi": [
     [
      "夕方",
      "ゆうがた"
     ],
     [
      "に",
      null
     ],
     [
      " ",
      null
     ],
     [
      "なって",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "やっと",
      null
     ],
     [
      " ",
      null
     ],
     [
      "部屋",
      "へや"
     ],
     [
      "が",
      null
     ],
     [
      " ",
      null
     ],
     [
      "きれいに",
      null
     ],
     [
      " ",
      null
     ],
     [
      "なりました",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Đến chiều tối, cuối cùng phòng cũng đã sạch đẹp."
   },
   {
    "jp": "となりの 人に あいさつを しました。",
    "furi": [
     [
      "となり",
      null
     ],
     [
      "の",
      null
     ],
     [
      " ",
      null
     ],
     [
      "人",
      "ひと"
     ],
     [
      "に",
      null
     ],
     [
      " ",
      null
     ],
     [
      "あいさつ",
      "あいさつ"
     ],
     [
      "を",
      null
     ],
     [
      " ",
      null
     ],
     [
      "しました",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Tôi đã chào hỏi người hàng xóm."
   },
   {
    "jp": "となりの 人は とても 親切で、 安心しました。",
    "furi": [
     [
      "となり",
      null
     ],
     [
      "の",
      null
     ],
     [
      " ",
      null
     ],
     [
      "人",
      "ひと"
     ],
     [
      "は",
      null
     ],
     [
      " ",
      null
     ],
     [
      "とても",
      null
     ],
     [
      " ",
      null
     ],
     [
      "親切",
      "しんせつ"
     ],
     [
      "で",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "安心",
      "あんしん"
     ],
     [
      "しました",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Người hàng xóm rất tốt bụng, tôi thấy yên tâm."
   },
   {
    "jp": "引っ越しは 大変なものだと、 あらためて 思いました。",
    "furi": [
     [
      "引っ越し",
      "ひっこし"
     ],
     [
      "は",
      null
     ],
     [
      " ",
      null
     ],
     [
      "大変",
      "たいへん"
     ],
     [
      "なものだと",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "あらためて",
      null
     ],
     [
      " ",
      null
     ],
     [
      "思",
      "おも"
     ],
     [
      "いました",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Tôi lại một lần nữa nhận ra chuyển nhà thật vất vả."
   }
  ],
  "vocab": [
   {
    "w": "引っ越し",
    "r": "ひっこし",
    "hv": "DẪN VIỆT",
    "vi": "Chuyển nhà"
   },
   {
    "w": "にもつ",
    "r": "にもつ",
    "hv": "HÀ VẬT",
    "vi": "Hành lý, đồ đạc"
   },
   {
    "w": "手伝う",
    "r": "てつだう",
    "hv": "THỦ TRUYỀN",
    "vi": "Giúp đỡ"
   },
   {
    "w": "大変",
    "r": "たいへん",
    "hv": "ĐẠI BIẾN",
    "vi": "Vất vả, khó khăn"
   },
   {
    "w": "そうじ",
    "r": "そうじ",
    "hv": "TẢO TRỪ",
    "vi": "Dọn dẹp"
   },
   {
    "w": "あいさつ",
    "r": "あいさつ",
    "hv": null,
    "vi": "Chào hỏi"
   }
  ],
  "grammar": [
   {
    "p": "〜あいだ（に）",
    "lv": "N3",
    "vi": "Trong lúc… / trong khi…",
    "ex": "にもつを 運ぶ あいだに、 あせが たくさん 出ました。",
    "exVi": "Trong lúc khuân đồ, tôi đã đổ rất nhiều mồ hôi."
   },
   {
    "p": "〜ものだ",
    "lv": "N3",
    "vi": "…là chuyện (đương nhiên / đáng)… / thật là…",
    "ex": "引っ越しは 大変なものだと、 あらためて 思いました。",
    "exVi": "Tôi lại một lần nữa nhận ra chuyển nhà thật vất vả."
   }
  ],
  "quiz": [
   {
    "q": "引っ越しを 手伝いに 来たのは だれですか。",
    "options": [
     "友だち",
     "かぞく",
     "先生",
     "知らない人"
    ],
    "answer": 0,
    "explain": "Trong bài có nói từ sáng bạn bè đã đến giúp tôi.",
    "evidence": "友だちが 手伝いに 来ました",
    "tip": "Tìm câu có '手伝いに' trong bài."
   },
   {
    "q": "夕方に なって、 部屋は どうなりましたか。",
    "options": [
     "きれいに なりました",
     "きたなく なりました",
     "せまく なりました",
     "ひろく なりました"
    ],
    "answer": 0,
    "explain": "Trong bài có nói đến chiều tối, cuối cùng phòng cũng đã sạch đẹp.",
    "evidence": "やっと 部屋が きれいに なりました",
    "tip": "Tìm câu có '夕方に' trong bài."
   }
  ]
 },
 {
  "id": "dk-n3-10",
  "img": "dk-n3-10.jpg",
  "audio": "dk-n3-10.mp3",
  "timings": [
   0.015,
   4.065,
   7.608,
   10.746,
   14.127,
   17.521,
   20.939,
   25.527,
   28.973,
   32.363,
   36.994
  ],
  "level": "N3",
  "title": "日本のおみやげ",
  "titleVi": "Quà lưu niệm Nhật Bản",
  "sentences": [
   {
    "jp": "日本旅行では、 おみやげを 買う人が 多いです。",
    "furi": [
     [
      "日本",
      "にほん"
     ],
     [
      "旅行",
      "りょこう"
     ],
     [
      "では",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "おみやげ",
      null
     ],
     [
      "を",
      null
     ],
     [
      " ",
      null
     ],
     [
      "買",
      "か"
     ],
     [
      "う",
      null
     ],
     [
      "人",
      "ひと"
     ],
     [
      "が",
      null
     ],
     [
      " ",
      null
     ],
     [
      "多",
      "おお"
     ],
     [
      "い",
      null
     ],
     [
      "です",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Khi đi du lịch Nhật Bản, nhiều người mua quà lưu niệm."
   },
   {
    "jp": "おみやげは、 かぞくや 友だちに 渡す ものです。",
    "furi": [
     [
      "おみやげ",
      null
     ],
     [
      "は",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "かぞく",
      null
     ],
     [
      "や",
      null
     ],
     [
      " ",
      null
     ],
     [
      "友",
      "とも"
     ],
     [
      "だち",
      null
     ],
     [
      "に",
      null
     ],
     [
      " ",
      null
     ],
     [
      "渡",
      "わた"
     ],
     [
      "す",
      null
     ],
     [
      " ",
      null
     ],
     [
      "ものです",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Quà lưu niệm là thứ để tặng cho gia đình và bạn bè."
   },
   {
    "jp": "京都では、 まっちゃの おかしが 有名です。",
    "furi": [
     [
      "京都",
      "きょうと"
     ],
     [
      "では",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "まっちゃ",
      null
     ],
     [
      "の",
      null
     ],
     [
      " ",
      null
     ],
     [
      "おかし",
      null
     ],
     [
      "が",
      null
     ],
     [
      " ",
      null
     ],
     [
      "有名",
      "ゆうめい"
     ],
     [
      "です",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Ở Kyoto, bánh matcha nổi tiếng."
   },
   {
    "jp": "東京では、 あさくさの 人形が 人気です。",
    "furi": [
     [
      "東京",
      "とうきょう"
     ],
     [
      "では",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "あさくさ",
      null
     ],
     [
      "の",
      null
     ],
     [
      " ",
      null
     ],
     [
      "人形",
      "にんぎょう"
     ],
     [
      "が",
      null
     ],
     [
      " ",
      null
     ],
     [
      "人気",
      "にんき"
     ],
     [
      "です",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Ở Tokyo, búp bê Asakusa được yêu thích."
   },
   {
    "jp": "おみやげは、 できるだけ かるい ほうが いいです。",
    "furi": [
     [
      "おみやげ",
      null
     ],
     [
      "は",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "できるだけ",
      null
     ],
     [
      " ",
      null
     ],
     [
      "かるい",
      null
     ],
     [
      " ",
      null
     ],
     [
      "ほうが",
      null
     ],
     [
      " ",
      null
     ],
     [
      "いいです",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Quà lưu niệm thì càng nhẹ càng tốt."
   },
   {
    "jp": "重い おみやげは、 持ち帰るのが 大変です。",
    "furi": [
     [
      "重",
      "おも"
     ],
     [
      "い",
      null
     ],
     [
      " ",
      null
     ],
     [
      "おみやげ",
      null
     ],
     [
      "は",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "持",
      "も"
     ],
     [
      "ち",
      null
     ],
     [
      "帰",
      "かえ"
     ],
     [
      "るのが",
      null
     ],
     [
      " ",
      null
     ],
     [
      "大変",
      "たいへん"
     ],
     [
      "です",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Quà lưu niệm nặng thì mang về rất vất vả."
   },
   {
    "jp": "値段も 大切で、 あまり 高い おみやげは、 選びません。",
    "furi": [
     [
      "値段",
      "ねだん"
     ],
     [
      "も",
      null
     ],
     [
      " ",
      null
     ],
     [
      "大切",
      "たいせつ"
     ],
     [
      "で",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "あまり",
      null
     ],
     [
      " ",
      null
     ],
     [
      "高",
      "たか"
     ],
     [
      "い",
      null
     ],
     [
      " ",
      null
     ],
     [
      "おみやげ",
      null
     ],
     [
      "は",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "選",
      "えら"
     ],
     [
      "びません",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Giá cả cũng quan trọng, nên tôi không chọn quà lưu niệm quá đắt."
   },
   {
    "jp": "おみやげを もらうと、 気持ちが うれしく なります。",
    "furi": [
     [
      "おみやげ",
      null
     ],
     [
      "を",
      null
     ],
     [
      " ",
      null
     ],
     [
      "もらうと",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "気持ち",
      "きもち"
     ],
     [
      "が",
      null
     ],
     [
      " ",
      null
     ],
     [
      "うれしく",
      null
     ],
     [
      " ",
      null
     ],
     [
      "なります",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Khi nhận được quà lưu niệm, tôi cảm thấy rất vui."
   },
   {
    "jp": "おみやげは、 旅行の 楽しみの 一つです。",
    "furi": [
     [
      "おみやげ",
      null
     ],
     [
      "は",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "旅行",
      "りょこう"
     ],
     [
      "の",
      null
     ],
     [
      " ",
      null
     ],
     [
      "楽",
      "たの"
     ],
     [
      "しみ",
      null
     ],
     [
      "の",
      null
     ],
     [
      " ",
      null
     ],
     [
      "一",
      "ひと"
     ],
     [
      "つ",
      null
     ],
     [
      "です",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Quà lưu niệm là một trong những niềm vui của chuyến du lịch."
   },
   {
    "jp": "おみやげを 選ぶのは、 相手の ことを 考えるということだ。",
    "furi": [
     [
      "おみやげ",
      null
     ],
     [
      "を",
      null
     ],
     [
      " ",
      null
     ],
     [
      "選",
      "えら"
     ],
     [
      "ぶのは",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "相手",
      "あいて"
     ],
     [
      "の",
      null
     ],
     [
      " ",
      null
     ],
     [
      "ことを",
      null
     ],
     [
      " ",
      null
     ],
     [
      "考",
      "かんが"
     ],
     [
      "えるということだ",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Chọn quà lưu niệm là nghĩ về người nhận."
   },
   {
    "jp": "日本の おみやげは、 せかいの 人に 喜ばれます。",
    "furi": [
     [
      "日本",
      "にほん"
     ],
     [
      "の",
      null
     ],
     [
      " ",
      null
     ],
     [
      "おみやげ",
      null
     ],
     [
      "は",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "せかい",
      null
     ],
     [
      "の",
      null
     ],
     [
      " ",
      null
     ],
     [
      "人",
      "ひと"
     ],
     [
      "に",
      null
     ],
     [
      " ",
      null
     ],
     [
      "喜",
      "よろこ"
     ],
     [
      "ばれます",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Quà lưu niệm Nhật Bản được mọi người trên thế giới yêu thích."
   }
  ],
  "vocab": [
   {
    "w": "おみやげ",
    "r": "おみやげ",
    "hv": "THỔ SẢN",
    "vi": "Quà lưu niệm"
   },
   {
    "w": "渡す",
    "r": "わたす",
    "hv": "ĐỘ",
    "vi": "Trao, đưa, tặng"
   },
   {
    "w": "有名",
    "r": "ゆうめい",
    "hv": "HỮU DANH",
    "vi": "Nổi tiếng"
   },
   {
    "w": "人形",
    "r": "にんぎょう",
    "hv": "NHÂN HÌNH",
    "vi": "Búp bê, hình nhân"
   },
   {
    "w": "かるい",
    "r": "かるい",
    "hv": "KHINH",
    "vi": "Nhẹ"
   },
   {
    "w": "値段",
    "r": "ねだん",
    "hv": "TRỊ ĐOẠN",
    "vi": "Giá cả"
   }
  ],
  "grammar": [
   {
    "p": "できるだけ",
    "lv": "N3",
    "vi": "Càng… càng tốt / hết sức có thể",
    "ex": "おみやげは、 できるだけ かるい ほうが いいです。",
    "exVi": "Quà lưu niệm thì càng nhẹ càng tốt."
   },
   {
    "p": "〜ということだ",
    "lv": "N3",
    "vi": "…có nghĩa là… / …là việc…",
    "ex": "おみやげを 選ぶのは、 相手の ことを 考えるということだ。",
    "exVi": "Chọn quà lưu niệm là nghĩ về người nhận."
   }
  ],
  "quiz": [
   {
    "q": "京都では、 何が 有名ですか。",
    "options": [
     "まっちゃの おかし",
     "あさくさの 人形",
     "さくらの 花",
     "すしの みせ"
    ],
    "answer": 0,
    "explain": "Trong bài có nói ở Kyoto, bánh matcha nổi tiếng.",
    "evidence": "京都では、 まっちゃの おかしが 有名です",
    "tip": "Tìm câu có '京都では' trong bài."
   },
   {
    "q": "おみやげは、 どういう ほうが いいですか。",
    "options": [
     "できるだけ かるい",
     "できるだけ 重い",
     "できるだけ 高い",
     "できるだけ 大きい"
    ],
    "answer": 0,
    "explain": "Trong bài có nói quà lưu niệm thì càng nhẹ càng tốt.",
    "evidence": "おみやげは、 できるだけ かるい ほうが いいです",
    "tip": "Tìm câu có 'できるだけ' trong bài."
   }
  ]
 },
 {
  "id": "dk-n2-01",
  "img": "dk-n2-01.jpg",
  "audio": "dk-n2-01.mp3",
  "timings": [
   0.015,
   4.828,
   11.728,
   18.243,
   23.338,
   30.381,
   36.808,
   43.74,
   48.974,
   53.414
  ],
  "level": "N2",
  "title": "せんとうの 文化",
  "titleVi": "Văn hóa nhà tắm công cộng (Sento)",
  "sentences": [
   {
    "jp": "日本 には 「せんとう」 と 呼ばれる 公衆 浴場 が あります。",
    "furi": [
     [
      "日本",
      "にほん"
     ],
     [
      " ",
      null
     ],
     [
      "には",
      null
     ],
     [
      " ",
      null
     ],
     [
      "「",
      null
     ],
     [
      "せんとう",
      null
     ],
     [
      "」",
      null
     ],
     [
      " ",
      null
     ],
     [
      "と",
      null
     ],
     [
      " ",
      null
     ],
     [
      "呼",
      "よ"
     ],
     [
      "ばれる",
      null
     ],
     [
      " ",
      null
     ],
     [
      "公衆",
      "こうしゅう"
     ],
     [
      " ",
      null
     ],
     [
      "浴場",
      "よくじょう"
     ],
     [
      " ",
      null
     ],
     [
      "が",
      null
     ],
     [
      " ",
      null
     ],
     [
      "あります",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Ở Nhật Bản có những phòng tắm công cộng được gọi là \"Sento\"."
   },
   {
    "jp": "昔 は 家 に おふろ が ない のが 普通 だった ため、 人々 は 毎日 せんとう へ 通って いました。",
    "furi": [
     [
      "昔",
      "むかし"
     ],
     [
      " ",
      null
     ],
     [
      "は",
      null
     ],
     [
      " ",
      null
     ],
     [
      "家",
      "いえ"
     ],
     [
      " ",
      null
     ],
     [
      "に",
      null
     ],
     [
      " ",
      null
     ],
     [
      "おふろ",
      null
     ],
     [
      " ",
      null
     ],
     [
      "が",
      null
     ],
     [
      " ",
      null
     ],
     [
      "ない",
      null
     ],
     [
      " ",
      null
     ],
     [
      "のが",
      null
     ],
     [
      " ",
      null
     ],
     [
      "普通",
      "ふつう"
     ],
     [
      " ",
      null
     ],
     [
      "だった",
      null
     ],
     [
      " ",
      null
     ],
     [
      "ため",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "人々",
      "ひとびと"
     ],
     [
      " ",
      null
     ],
     [
      "は",
      null
     ],
     [
      " ",
      null
     ],
     [
      "毎日",
      "まいにち"
     ],
     [
      " ",
      null
     ],
     [
      "せんとう",
      null
     ],
     [
      " ",
      null
     ],
     [
      "へ",
      null
     ],
     [
      " ",
      null
     ],
     [
      "通",
      "かよ"
     ],
     [
      "って",
      null
     ],
     [
      " ",
      null
     ],
     [
      "いました",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Ngày xưa, vì việc không có bồn tắm ở nhà là chuyện bình thường nên mọi người thường đến Sento hàng ngày."
   },
   {
    "jp": "現在 は 各 家庭 に おふろ が ひろがった ものの、 せんとう の 人気 は 依然として 高い です。",
    "furi": [
     [
      "現在",
      "げんざい"
     ],
     [
      " ",
      null
     ],
     [
      "は",
      null
     ],
     [
      " ",
      null
     ],
     [
      "各",
      "かく"
     ],
     [
      " ",
      null
     ],
     [
      "家庭",
      "かてい"
     ],
     [
      " ",
      null
     ],
     [
      "に",
      null
     ],
     [
      " ",
      null
     ],
     [
      "おふろ",
      null
     ],
     [
      " ",
      null
     ],
     [
      "が",
      null
     ],
     [
      " ",
      null
     ],
     [
      "ひろがった",
      null
     ],
     [
      " ",
      null
     ],
     [
      "ものの",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "せんとう",
      null
     ],
     [
      " ",
      null
     ],
     [
      "の",
      null
     ],
     [
      " ",
      null
     ],
     [
      "人気",
      "にんき"
     ],
     [
      " ",
      null
     ],
     [
      "は",
      null
     ],
     [
      " ",
      null
     ],
     [
      "依然",
      "いぜん"
     ],
     [
      "として",
      null
     ],
     [
      " ",
      null
     ],
     [
      "高い",
      "たかい"
     ],
     [
      " ",
      null
     ],
     [
      "です",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Hiện nay, mặc dù bồn tắm đã phổ biến đến từng gia đình, nhưng sự yêu thích dành cho Sento vẫn cao như trước."
   },
   {
    "jp": "広い 湯船 に つかる ことで、 心身 ともに リラックス できる から です。",
    "furi": [
     [
      "広",
      "ひろ"
     ],
     [
      "い",
      null
     ],
     [
      " ",
      null
     ],
     [
      "湯船",
      "ゆぶね"
     ],
     [
      " ",
      null
     ],
     [
      "に",
      null
     ],
     [
      " ",
      null
     ],
     [
      "つかる",
      null
     ],
     [
      " ",
      null
     ],
     [
      "ことで",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "心身",
      "しんしん"
     ],
     [
      " ",
      null
     ],
     [
      "ともに",
      null
     ],
     [
      " ",
      null
     ],
     [
      "リラックス",
      null
     ],
     [
      " ",
      null
     ],
     [
      "できる",
      null
     ],
     [
      " ",
      null
     ],
     [
      "から",
      null
     ],
     [
      " ",
      null
     ],
     [
      "です",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Đó là bởi vì bằng việc ngâm mình trong bồn tắm rộng lớn, người ta có thể thư giãn cả về thể chất lẫn tinh thần."
   },
   {
    "jp": "また、 せんとう は 近所 の 人々 が 集まる 交流 の 場 と しても 大切 な 役割 を 果たして きました。",
    "furi": [
     [
      "また",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "せんとう",
      null
     ],
     [
      " ",
      null
     ],
     [
      "は",
      null
     ],
     [
      " ",
      null
     ],
     [
      "近所",
      "きんじょ"
     ],
     [
      " ",
      null
     ],
     [
      "の",
      null
     ],
     [
      " ",
      null
     ],
     [
      "人々",
      "ひとびと"
     ],
     [
      " ",
      null
     ],
     [
      "が",
      null
     ],
     [
      " ",
      null
     ],
     [
      "集",
      "あつ"
     ],
     [
      "まる",
      null
     ],
     [
      " ",
      null
     ],
     [
      "交流",
      "こうりゅう"
     ],
     [
      " ",
      null
     ],
     [
      "の",
      null
     ],
     [
      " ",
      null
     ],
     [
      "場",
      "ば"
     ],
     [
      " ",
      null
     ],
     [
      "と",
      null
     ],
     [
      " ",
      null
     ],
     [
      "しても",
      null
     ],
     [
      " ",
      null
     ],
     [
      "大切",
      "たいせつ"
     ],
     [
      " ",
      null
     ],
     [
      "な",
      null
     ],
     [
      " ",
      null
     ],
     [
      "役割",
      "やくわり"
     ],
     [
      " ",
      null
     ],
     [
      "を",
      null
     ],
     [
      " ",
      null
     ],
     [
      "果",
      "は"
     ],
     [
      "たして",
      null
     ],
     [
      " ",
      null
     ],
     [
      "きました",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Ngoài ra, Sento cũng đóng một vai trò quan trọng như một nơi giao lưu, nơi những người hàng xóm tụ họp."
   },
   {
    "jp": "壁 に えがかれた ふじさん の 絵 を ながめながら 湯 に 入る のは、 日本 らしい 風景 です。",
    "furi": [
     [
      "壁",
      "かべ"
     ],
     [
      " ",
      null
     ],
     [
      "に",
      null
     ],
     [
      " ",
      null
     ],
     [
      "えがかれた",
      null
     ],
     [
      " ",
      null
     ],
     [
      "ふじさん",
      null
     ],
     [
      " ",
      null
     ],
     [
      "の",
      null
     ],
     [
      " ",
      null
     ],
     [
      "絵",
      "え"
     ],
     [
      " ",
      null
     ],
     [
      "を",
      null
     ],
     [
      " ",
      null
     ],
     [
      "ながめながら",
      null
     ],
     [
      " ",
      null
     ],
     [
      "湯",
      "ゆ"
     ],
     [
      " ",
      null
     ],
     [
      "に",
      null
     ],
     [
      " ",
      null
     ],
     [
      "入",
      "はい"
     ],
     [
      "る",
      null
     ],
     [
      " ",
      null
     ],
     [
      "のは",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "日本",
      "にほん"
     ],
     [
      " ",
      null
     ],
     [
      "らしい",
      null
     ],
     [
      " ",
      null
     ],
     [
      "風景",
      "ふうけい"
     ],
     [
      " ",
      null
     ],
     [
      "です",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Vừa ngắm bức tranh núi Phú Sĩ vẽ trên tường vừa ngâm mình trong nước nóng là một khung cảnh rất đặc trưng của Nhật Bản."
   },
   {
    "jp": "最近 では、 若い 世代 や 外国 人 観光 客 に 向けた 新しい せんとう も 増えて います。",
    "furi": [
     [
      "最近",
      "さいきん"
     ],
     [
      " ",
      null
     ],
     [
      "では",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "若",
      "わか"
     ],
     [
      "い",
      null
     ],
     [
      " ",
      null
     ],
     [
      "世代",
      "せだい"
     ],
     [
      " ",
      null
     ],
     [
      "や",
      null
     ],
     [
      " ",
      null
     ],
     [
      "外国",
      "がいこく"
     ],
     [
      " ",
      null
     ],
     [
      "人",
      "じん"
     ],
     [
      " ",
      null
     ],
     [
      "観光",
      "かんこう"
     ],
     [
      " ",
      null
     ],
     [
      "客",
      "きゃく"
     ],
     [
      " ",
      null
     ],
     [
      "に",
      null
     ],
     [
      " ",
      null
     ],
     [
      "向",
      "む"
     ],
     [
      "けた",
      null
     ],
     [
      " ",
      null
     ],
     [
      "新",
      "あたら"
     ],
     [
      "しい",
      null
     ],
     [
      " ",
      null
     ],
     [
      "せんとう",
      null
     ],
     [
      " ",
      null
     ],
     [
      "も",
      null
     ],
     [
      " ",
      null
     ],
     [
      "増",
      "ふ"
     ],
     [
      "えて",
      null
     ],
     [
      " ",
      null
     ],
     [
      "います",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Dạo gần đây, những nhà tắm công cộng mới hướng đến thế hệ trẻ và khách du lịch nước ngoài cũng đang tăng lên."
   },
   {
    "jp": "サウナ や カフェ が ある せんとう も あり、 楽しみ 方 が 多様 化 して います。",
    "furi": [
     [
      "サウナ",
      null
     ],
     [
      " ",
      null
     ],
     [
      "や",
      null
     ],
     [
      " ",
      null
     ],
     [
      "カフェ",
      null
     ],
     [
      " ",
      null
     ],
     [
      "が",
      null
     ],
     [
      " ",
      null
     ],
     [
      "ある",
      null
     ],
     [
      " ",
      null
     ],
     [
      "せんとう",
      null
     ],
     [
      " ",
      null
     ],
     [
      "も",
      null
     ],
     [
      " ",
      null
     ],
     [
      "あり",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "楽",
      "たの"
     ],
     [
      "しみ",
      null
     ],
     [
      " ",
      null
     ],
     [
      "方",
      "かた"
     ],
     [
      " ",
      null
     ],
     [
      "が",
      null
     ],
     [
      " ",
      null
     ],
     [
      "多様",
      "たよう"
     ],
     [
      " ",
      null
     ],
     [
      "化",
      "か"
     ],
     [
      " ",
      null
     ],
     [
      "して",
      null
     ],
     [
      " ",
      null
     ],
     [
      "います",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Cũng có những Sento có phòng xông hơi và quán cà phê đi kèm, cách tận hưởng đang trở nên đa dạng hơn."
   },
   {
    "jp": "せんとうの 後で、 冷たい 牛乳を 飲む 人も 多いです。",
    "furi": [
     [
      "せんとう",
      null
     ],
     [
      "の",
      null
     ],
     [
      " ",
      null
     ],
     [
      "後",
      "あと"
     ],
     [
      "で",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "冷",
      "つめ"
     ],
     [
      "たい",
      null
     ],
     [
      " ",
      null
     ],
     [
      "牛乳",
      "ぎゅうにゅう"
     ],
     [
      "を",
      null
     ],
     [
      " ",
      null
     ],
     [
      "飲",
      "の"
     ],
     [
      "む",
      null
     ],
     [
      " ",
      null
     ],
     [
      "人",
      "ひと"
     ],
     [
      "も",
      null
     ],
     [
      " ",
      null
     ],
     [
      "多",
      "おお"
     ],
     [
      "い",
      null
     ],
     [
      "です",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Sau khi tắm ở nhà tắm công cộng, cũng có nhiều người uống sữa lạnh."
   },
   {
    "jp": "マナー を 守りつつ、 日本 の でんとうてきな 文化 を 体験 して みては いかが でしょう か。",
    "furi": [
     [
      "マナー",
      null
     ],
     [
      " ",
      null
     ],
     [
      "を",
      null
     ],
     [
      " ",
      null
     ],
     [
      "守",
      "まも"
     ],
     [
      "りつつ",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "日本",
      "にほん"
     ],
     [
      " ",
      null
     ],
     [
      "の",
      null
     ],
     [
      " ",
      null
     ],
     [
      "でんとうてきな",
      null
     ],
     [
      " ",
      null
     ],
     [
      "文化",
      "ぶんか"
     ],
     [
      " ",
      null
     ],
     [
      "を",
      null
     ],
     [
      " ",
      null
     ],
     [
      "体験",
      "たいけん"
     ],
     [
      " ",
      null
     ],
     [
      "して",
      null
     ],
     [
      " ",
      null
     ],
     [
      "みては",
      null
     ],
     [
      " ",
      null
     ],
     [
      "いかが",
      null
     ],
     [
      " ",
      null
     ],
     [
      "でしょう",
      null
     ],
     [
      " ",
      null
     ],
     [
      "か",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Vừa tuân thủ các quy tắc, vừa trải nghiệm thử văn hóa truyền thống của Nhật Bản thì thế nào nhỉ?"
   }
  ],
  "vocab": [
   {
    "w": "公衆浴場",
    "r": "こうしゅうよくじょう",
    "hv": "CÔNG CHÚNG DỤC TRÀNG",
    "vi": "nhà tắm công cộng"
   },
   {
    "w": "役割",
    "r": "やくわり",
    "hv": "DỊCH CÁT",
    "vi": "Vai trò"
   },
   {
    "w": "交流",
    "r": "こうりゅう",
    "hv": "GIAO LƯU",
    "vi": "giao lưu"
   },
   {
    "w": "風景",
    "r": "ふうけい",
    "hv": "PHONG CẢNH",
    "vi": "phong cảnh, quang cảnh"
   },
   {
    "w": "楽しみ",
    "r": "たのしみ",
    "hv": "LẠC",
    "vi": "Niềm vui, điều thú vị"
   },
   {
    "w": "でんとうてき",
    "r": "でんとうてき",
    "hv": "TRUYỀN THỐNG ĐÍCH",
    "vi": "Mang tính truyền thống"
   }
  ],
  "grammar": [
   {
    "p": "〜ものの",
    "lv": "N2",
    "vi": "Mặc dù... nhưng...",
    "ex": "現在 は 各 家庭 に おふろ が ひろがった ものの、 せんとう の 人気 は 依然として 高い です。",
    "exVi": "Hiện nay, mặc dù bồn tắm đã phổ biến đến từng gia đình, nhưng sự yêu thích dành cho Sento vẫn cao như trước."
   },
   {
    "p": "V-ます + ながら",
    "lv": "N4",
    "vi": "Vừa làm A vừa làm B (hai hành động diễn ra đồng thời)",
    "ex": "壁 に えがかれた ふじさん の 絵 を ながめながら 湯 に 入る のは、 日本 らしい 風景 です。",
    "exVi": "Vừa ngắm bức tranh núi Phú Sĩ vẽ trên tường vừa ngâm mình trong nước nóng là một khung cảnh rất đặc trưng của Nhật Bản."
   }
  ],
  "quiz": [
   {
    "q": "昔、人々が毎日せんとうへ行っていた理由は何ですか。",
    "options": [
     "ふじさんの絵を見るため",
     "家にふろがないのが普通だったため",
     "近所の人とカフェで話すため",
     "サウナに入るのが好きだったため"
    ],
    "answer": 1,
    "explain": "Trong bài viết có đoạn giải thích rằng ngày xưa việc không có bồn tắm ở nhà là bình thường nên mọi người đi Sento hàng ngày.",
    "evidence": "昔 は 家 に おふろ が ない のが 普通 だった ため",
    "tip": "Hãy tìm từ khóa '昔' và 'ため' để tìm nguyên nhân."
   },
   {
    "q": "最近のせんとうについて、正しいものはどれですか。",
    "options": [
     "利用する人が減って、人気がなくなっている。",
     "ふじさんの絵をえがくことが禁止されている。",
     "若者や観光客向けに、多様な楽しみ方が増えている。",
     "家におふろがある人は、行ってはいけない。"
    ],
    "answer": 2,
    "explain": "Bài viết đề cập rằng hiện nay có những Sento mới dành cho giới trẻ, khách du lịch với các tiện ích đi kèm như cafe, sauna.",
    "evidence": "最近 では、 若い 世代 や 外国 人 観光 客 に 向けた 新しい せんとう も 増えて います",
    "tip": "Tìm đoạn văn nói về '最近' để thấy sự thay đổi hiện nay."
   }
  ]
 },
 {
  "id": "dk-n2-02",
  "img": "dk-n2-02.jpg",
  "audio": "dk-n2-02.mp3",
  "timings": [
   0.015,
   4.24,
   9.765,
   16.651,
   22.67,
   29.289,
   34.485,
   41.24,
   48.003,
   55.165
  ],
  "level": "N2",
  "title": "方言の おもしろさ",
  "titleVi": "Cái hay của phương ngữ",
  "sentences": [
   {
    "jp": "日本 には 地域 によって さまざまな 方言 が あります。",
    "furi": [
     [
      "日本",
      "にほん"
     ],
     [
      " ",
      null
     ],
     [
      "には",
      null
     ],
     [
      " ",
      null
     ],
     [
      "地域",
      "ちいき"
     ],
     [
      " ",
      null
     ],
     [
      "によって",
      null
     ],
     [
      " ",
      null
     ],
     [
      "さまざまな",
      null
     ],
     [
      " ",
      null
     ],
     [
      "方言",
      "ほうげん"
     ],
     [
      " ",
      null
     ],
     [
      "が",
      null
     ],
     [
      " ",
      null
     ],
     [
      "あります",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Ở Nhật Bản, tùy theo từng địa phương mà có nhiều phương ngữ khác nhau."
   },
   {
    "jp": "同じ 言葉 でも、 場所 が 変われば 意味 が ことなる こと も 珍しくありません。",
    "furi": [
     [
      "同じ",
      "おなじ"
     ],
     [
      " ",
      null
     ],
     [
      "言葉",
      "ことば"
     ],
     [
      " ",
      null
     ],
     [
      "でも",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "場所",
      "ばしょ"
     ],
     [
      " ",
      null
     ],
     [
      "が",
      null
     ],
     [
      " ",
      null
     ],
     [
      "変",
      "か"
     ],
     [
      "われば",
      null
     ],
     [
      " ",
      null
     ],
     [
      "意味",
      "いみ"
     ],
     [
      " ",
      null
     ],
     [
      "が",
      null
     ],
     [
      " ",
      null
     ],
     [
      "ことなる",
      null
     ],
     [
      " ",
      null
     ],
     [
      "こと",
      null
     ],
     [
      " ",
      null
     ],
     [
      "も",
      null
     ],
     [
      " ",
      null
     ],
     [
      "珍",
      "めずら"
     ],
     [
      "しくありません",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Dù là cùng một từ, nhưng nếu địa điểm thay đổi thì việc ý nghĩa khác nhau cũng không phải là hiếm."
   },
   {
    "jp": "例えば、 関西 の 「直す」 は 「片付ける」 という 意味 で 使われる こと が 多い です。",
    "furi": [
     [
      "例えば",
      "たとえば"
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "関西",
      "かんさい"
     ],
     [
      " ",
      null
     ],
     [
      "の",
      null
     ],
     [
      " ",
      null
     ],
     [
      "「",
      null
     ],
     [
      "直",
      "なお"
     ],
     [
      "す",
      null
     ],
     [
      "」",
      null
     ],
     [
      " ",
      null
     ],
     [
      "は",
      null
     ],
     [
      " ",
      null
     ],
     [
      "「",
      null
     ],
     [
      "片付",
      "かたづ"
     ],
     [
      "ける",
      null
     ],
     [
      "」",
      null
     ],
     [
      " ",
      null
     ],
     [
      "という",
      null
     ],
     [
      " ",
      null
     ],
     [
      "意味",
      "いみ"
     ],
     [
      " ",
      null
     ],
     [
      "で",
      null
     ],
     [
      " ",
      null
     ],
     [
      "使",
      "つか"
     ],
     [
      "われる",
      null
     ],
     [
      " ",
      null
     ],
     [
      "こと",
      null
     ],
     [
      " ",
      null
     ],
     [
      "が",
      null
     ],
     [
      " ",
      null
     ],
     [
      "多",
      "おお"
     ],
     [
      "い",
      null
     ],
     [
      " ",
      null
     ],
     [
      "です",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Ví dụ, từ \"naosu\" ở vùng Kansai thường được sử dụng với nghĩa là \"dọn dẹp\"."
   },
   {
    "jp": "東京 の 人 が これ を 聞くと、 「しゅうり する」 こと だ と 誤解 して しまう かもしれません。",
    "furi": [
     [
      "東京",
      "とうきょう"
     ],
     [
      " ",
      null
     ],
     [
      "の",
      null
     ],
     [
      " ",
      null
     ],
     [
      "人",
      "ひと"
     ],
     [
      " ",
      null
     ],
     [
      "が",
      null
     ],
     [
      " ",
      null
     ],
     [
      "これ",
      null
     ],
     [
      " ",
      null
     ],
     [
      "を",
      null
     ],
     [
      " ",
      null
     ],
     [
      "聞",
      "き"
     ],
     [
      "くと",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "「",
      null
     ],
     [
      "しゅうり",
      null
     ],
     [
      " ",
      null
     ],
     [
      "する",
      null
     ],
     [
      "」",
      null
     ],
     [
      " ",
      null
     ],
     [
      "こと",
      null
     ],
     [
      " ",
      null
     ],
     [
      "だ",
      null
     ],
     [
      " ",
      null
     ],
     [
      "と",
      null
     ],
     [
      " ",
      null
     ],
     [
      "誤解",
      "ごかい"
     ],
     [
      " ",
      null
     ],
     [
      "して",
      null
     ],
     [
      " ",
      null
     ],
     [
      "しまう",
      null
     ],
     [
      " ",
      null
     ],
     [
      "かもしれません",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Khi người Tokyo nghe thấy điều này, có lẽ họ sẽ hiểu lầm rằng đó là việc \"sửa chữa\"."
   },
   {
    "jp": "方言 は 単なる 言葉 の 違い だけ で なく、 その 土地 の 文化 や 歴史 を 反映 して います。",
    "furi": [
     [
      "方言",
      "ほうげん"
     ],
     [
      " ",
      null
     ],
     [
      "は",
      null
     ],
     [
      " ",
      null
     ],
     [
      "単",
      "たん"
     ],
     [
      "なる",
      null
     ],
     [
      " ",
      null
     ],
     [
      "言葉",
      "ことば"
     ],
     [
      " ",
      null
     ],
     [
      "の",
      null
     ],
     [
      " ",
      null
     ],
     [
      "違",
      "ちが"
     ],
     [
      "い",
      null
     ],
     [
      " ",
      null
     ],
     [
      "だけ",
      null
     ],
     [
      " ",
      null
     ],
     [
      "で",
      null
     ],
     [
      " ",
      null
     ],
     [
      "なく",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "その",
      null
     ],
     [
      " ",
      null
     ],
     [
      "土地",
      "とち"
     ],
     [
      " ",
      null
     ],
     [
      "の",
      null
     ],
     [
      " ",
      null
     ],
     [
      "文化",
      "ぶんか"
     ],
     [
      " ",
      null
     ],
     [
      "や",
      null
     ],
     [
      " ",
      null
     ],
     [
      "歴史",
      "れきし"
     ],
     [
      " ",
      null
     ],
     [
      "を",
      null
     ],
     [
      " ",
      null
     ],
     [
      "反映",
      "はんえい"
     ],
     [
      " ",
      null
     ],
     [
      "して",
      null
     ],
     [
      " ",
      null
     ],
     [
      "います",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Phương ngữ không chỉ đơn thuần là sự khác biệt về ngôn ngữ, mà nó còn phản ánh văn hóa và lịch sử của vùng đất đó."
   },
   {
    "jp": "最近 では 若い 世代 が 方言 を 使わなく なって きた と 言われて います。",
    "furi": [
     [
      "最近",
      "さいきん"
     ],
     [
      " ",
      null
     ],
     [
      "では",
      null
     ],
     [
      " ",
      null
     ],
     [
      "若",
      "わか"
     ],
     [
      "い",
      null
     ],
     [
      " ",
      null
     ],
     [
      "世代",
      "せだい"
     ],
     [
      " ",
      null
     ],
     [
      "が",
      null
     ],
     [
      " ",
      null
     ],
     [
      "方言",
      "ほうげん"
     ],
     [
      " ",
      null
     ],
     [
      "を",
      null
     ],
     [
      " ",
      null
     ],
     [
      "使",
      "つか"
     ],
     [
      "わなく",
      null
     ],
     [
      " ",
      null
     ],
     [
      "なって",
      null
     ],
     [
      " ",
      null
     ],
     [
      "きた",
      null
     ],
     [
      " ",
      null
     ],
     [
      "と",
      null
     ],
     [
      " ",
      null
     ],
     [
      "言",
      "い"
     ],
     [
      "われて",
      null
     ],
     [
      " ",
      null
     ],
     [
      "います",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Gần đây, người ta nói rằng thế hệ trẻ đã dần không còn sử dụng phương ngữ nữa."
   },
   {
    "jp": "しかし、 独特 の ひびき や 温かみ を 持つ 方言 は、 多くの 人 に 愛されて います。",
    "furi": [
     [
      "しかし",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "独特",
      "どくとく"
     ],
     [
      " ",
      null
     ],
     [
      "の",
      null
     ],
     [
      " ",
      null
     ],
     [
      "ひびき",
      null
     ],
     [
      " ",
      null
     ],
     [
      "や",
      null
     ],
     [
      " ",
      null
     ],
     [
      "温",
      "あたた"
     ],
     [
      "かみ",
      null
     ],
     [
      " ",
      null
     ],
     [
      "を",
      null
     ],
     [
      " ",
      null
     ],
     [
      "持",
      "も"
     ],
     [
      "つ",
      null
     ],
     [
      " ",
      null
     ],
     [
      "方言",
      "ほうげん"
     ],
     [
      " ",
      null
     ],
     [
      "は",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "多",
      "おお"
     ],
     [
      "く",
      null
     ],
     [
      "の",
      null
     ],
     [
      " ",
      null
     ],
     [
      "人",
      "ひと"
     ],
     [
      " ",
      null
     ],
     [
      "に",
      null
     ],
     [
      " ",
      null
     ],
     [
      "愛",
      "あい"
     ],
     [
      "されて",
      null
     ],
     [
      " ",
      null
     ],
     [
      "います",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Tuy nhiên, những phương ngữ mang âm hưởng và sự ấm áp độc đáo vẫn đang được nhiều người yêu mến."
   },
   {
    "jp": "SNS など を 通じて、 地方 の 言葉 が 全国 的 に 知られる よう に なった 面 も あります。",
    "furi": [
     [
      "SNS",
      null
     ],
     [
      " ",
      null
     ],
     [
      "など",
      null
     ],
     [
      " ",
      null
     ],
     [
      "を",
      null
     ],
     [
      " ",
      null
     ],
     [
      "通",
      "つう"
     ],
     [
      "じて",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "地方",
      "ちほう"
     ],
     [
      " ",
      null
     ],
     [
      "の",
      null
     ],
     [
      " ",
      null
     ],
     [
      "言葉",
      "ことば"
     ],
     [
      " ",
      null
     ],
     [
      "が",
      null
     ],
     [
      " ",
      null
     ],
     [
      "全国",
      "ぜんこく"
     ],
     [
      " ",
      null
     ],
     [
      "的",
      "てき"
     ],
     [
      " ",
      null
     ],
     [
      "に",
      null
     ],
     [
      " ",
      null
     ],
     [
      "知",
      "し"
     ],
     [
      "られる",
      null
     ],
     [
      " ",
      null
     ],
     [
      "よう",
      null
     ],
     [
      " ",
      null
     ],
     [
      "に",
      null
     ],
     [
      " ",
      null
     ],
     [
      "なった",
      null
     ],
     [
      " ",
      null
     ],
     [
      "面",
      "めん"
     ],
     [
      " ",
      null
     ],
     [
      "も",
      null
     ],
     [
      " ",
      null
     ],
     [
      "あります",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Cũng có khía cạnh là thông qua mạng xã hội, các từ ngữ địa phương đã trở nên được biết đến trên toàn quốc."
   },
   {
    "jp": "ひょうじゅんご も 便利 です が、 方言 に 触れる こと で、 日本 の 多様 性 を 感じる こと が できる でしょう。",
    "furi": [
     [
      "ひょうじゅんご",
      null
     ],
     [
      " ",
      null
     ],
     [
      "も",
      null
     ],
     [
      " ",
      null
     ],
     [
      "便利",
      "べんり"
     ],
     [
      " ",
      null
     ],
     [
      "です",
      null
     ],
     [
      " ",
      null
     ],
     [
      "が",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "方言",
      "ほうげん"
     ],
     [
      " ",
      null
     ],
     [
      "に",
      null
     ],
     [
      " ",
      null
     ],
     [
      "触",
      "ふ"
     ],
     [
      "れる",
      null
     ],
     [
      " ",
      null
     ],
     [
      "こと",
      null
     ],
     [
      " ",
      null
     ],
     [
      "で",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "日本",
      "にほん"
     ],
     [
      " ",
      null
     ],
     [
      "の",
      null
     ],
     [
      " ",
      null
     ],
     [
      "多様",
      "たよう"
     ],
     [
      " ",
      null
     ],
     [
      "性",
      "せい"
     ],
     [
      " ",
      null
     ],
     [
      "を",
      null
     ],
     [
      " ",
      null
     ],
     [
      "感",
      "かん"
     ],
     [
      "じる",
      null
     ],
     [
      " ",
      null
     ],
     [
      "こと",
      null
     ],
     [
      " ",
      null
     ],
     [
      "が",
      null
     ],
     [
      " ",
      null
     ],
     [
      "できる",
      null
     ],
     [
      " ",
      null
     ],
     [
      "でしょう",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Tiếng tiêu chuẩn cũng tiện lợi, nhưng bằng cách tiếp xúc với phương ngữ, có lẽ chúng ta có thể cảm nhận được sự đa dạng của Nhật Bản."
   },
   {
    "jp": "皆 さん も、 興味 が あれば いろいろ な 地域 の 方言 を 調べて みて ください。",
    "furi": [
     [
      "皆",
      "みな"
     ],
     [
      " ",
      null
     ],
     [
      "さん",
      null
     ],
     [
      " ",
      null
     ],
     [
      "も",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "興味",
      "きょうみ"
     ],
     [
      " ",
      null
     ],
     [
      "が",
      null
     ],
     [
      " ",
      null
     ],
     [
      "あれば",
      null
     ],
     [
      " ",
      null
     ],
     [
      "いろいろ",
      null
     ],
     [
      " ",
      null
     ],
     [
      "な",
      null
     ],
     [
      " ",
      null
     ],
     [
      "地域",
      "ちいき"
     ],
     [
      " ",
      null
     ],
     [
      "の",
      null
     ],
     [
      " ",
      null
     ],
     [
      "方言",
      "ほうげん"
     ],
     [
      " ",
      null
     ],
     [
      "を",
      null
     ],
     [
      " ",
      null
     ],
     [
      "調",
      "しら"
     ],
     [
      "べて",
      null
     ],
     [
      " ",
      null
     ],
     [
      "みて",
      null
     ],
     [
      " ",
      null
     ],
     [
      "ください",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Mọi người nếu có hứng thú thì hãy thử tìm hiểu phương ngữ của nhiều vùng miền khác nhau xem sao."
   }
  ],
  "vocab": [
   {
    "w": "地域",
    "r": "ちいき",
    "hv": "ĐỊA VỰC",
    "vi": "vùng, địa phương"
   },
   {
    "w": "方言",
    "r": "ほうげん",
    "hv": "PHƯƠNG NGÔN",
    "vi": "phương ngữ"
   },
   {
    "w": "誤解",
    "r": "ごかい",
    "hv": "NGỘ GIẢI",
    "vi": "hiểu lầm"
   },
   {
    "w": "反映",
    "r": "はんえい",
    "hv": "PHẢN ÁNH",
    "vi": "phản ánh"
   },
   {
    "w": "独特",
    "r": "どくとく",
    "hv": "ĐỘC ĐẶC",
    "vi": "độc đáo, đặc sắc"
   },
   {
    "w": "多様性",
    "r": "たようせい",
    "hv": "ĐA DẠNG TÍNH",
    "vi": "tính đa dạng"
   }
  ],
  "grammar": [
   {
    "p": "〜によって",
    "lv": "N3",
    "vi": "Tùy vào... mà khác nhau",
    "ex": "日本 には 地域 によって さまざまな 方言 が あります。",
    "exVi": "Ở Nhật Bản, tùy theo từng địa phương mà có nhiều phương ngữ khác nhau."
   },
   {
    "p": "〜を通じて",
    "lv": "N2",
    "vi": "Thông qua (phương tiện, trung gian)",
    "ex": "SNS など を 通じて、 地方 の 言葉 が 全国 的 に 知られる よう に なった 面 も あります。",
    "exVi": "Cũng có khía cạnh là thông qua mạng xã hội, các từ ngữ địa phương đã trở nên được biết đến trên toàn quốc."
   }
  ],
  "quiz": [
   {
    "q": "関西で「直す」と言ったとき、どのような意味で使われることが多いですか。",
    "options": [
     "こわれたものをしゅうりする",
     "新しいものに取り替える",
     "物を片付ける",
     "間違いを正しくする"
    ],
    "answer": 2,
    "explain": "Trong bài viết có nêu rằng ở Kansai, từ 'naosu' thường được dùng với nghĩa là 'katazukeru' (dọn dẹp).",
    "evidence": "関西 の 「直す」 は 「片付ける」 という 意味 で 使われる こと が 多い です",
    "tip": "Hãy tìm từ '関西' và '直す' trong bài để thấy định nghĩa tương ứng."
   },
   {
    "q": "方言について、文章の内容と合っているものはどれですか。",
    "options": [
     "最近の若者は以前よりも方言をたくさん使っている。",
     "方言はその土地の文化や歴史とは関係がない。",
     "SNSのひろがりにより、方言は全く使われなくなった。",
     "方言に触れることで、日本の多様性を感じることができる。"
    ],
    "answer": 3,
    "explain": "Câu cuối của bài viết khẳng định rằng việc tiếp xúc với phương ngữ giúp chúng ta cảm nhận được sự đa dạng của Nhật Bản.",
    "evidence": "方言 に 触れる こと で、 日本 の 多様 性 を 感じる こと が できる でしょう",
    "tip": "Sử dụng phương pháp loại trừ: bài viết nói giới trẻ ít dùng phương ngữ hơn, và phương ngữ có phản ánh văn hóa lịch sử."
   }
  ]
 },
 {
  "id": "dk-n2-03",
  "img": "dk-n2-03.jpg",
  "audio": "dk-n2-03.mp3",
  "timings": [
   0.015,
   4.669,
   8.822,
   13.09,
   16.013,
   21.526,
   27.295,
   34.395,
   39.543,
   45.395,
   49.456
  ],
  "level": "N2",
  "title": "リモートワークの 生活",
  "titleVi": "Cuộc sống làm việc từ xa",
  "sentences": [
   {
    "jp": "最近、 日本の 企業でも リモートワークが 広がって います。",
    "furi": [
     [
      "最近",
      "さいきん"
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "日本",
      "にほん"
     ],
     [
      "の",
      null
     ],
     [
      " ",
      null
     ],
     [
      "企業",
      "きぎょう"
     ],
     [
      "でも",
      null
     ],
     [
      " ",
      null
     ],
     [
      "リモートワーク",
      null
     ],
     [
      "が",
      null
     ],
     [
      " ",
      null
     ],
     [
      "広",
      "ひろ"
     ],
     [
      "がって",
      null
     ],
     [
      " ",
      null
     ],
     [
      "います",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Gần đây, làm việc từ xa cũng đang lan rộng ở các doanh nghiệp Nhật Bản."
   },
   {
    "jp": "わたしは 週に 三日、 自宅で 仕事を して います。",
    "furi": [
     [
      "わたし",
      null
     ],
     [
      "は",
      null
     ],
     [
      " ",
      null
     ],
     [
      "週",
      "しゅう"
     ],
     [
      "に",
      null
     ],
     [
      " ",
      null
     ],
     [
      "三日",
      "みっか"
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "自宅",
      "じたく"
     ],
     [
      "で",
      null
     ],
     [
      " ",
      null
     ],
     [
      "仕事",
      "しごと"
     ],
     [
      "を",
      null
     ],
     [
      " ",
      null
     ],
     [
      "して",
      null
     ],
     [
      " ",
      null
     ],
     [
      "います",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Tôi làm việc ở nhà ba ngày mỗi tuần."
   },
   {
    "jp": "通勤 時間が ない ので、 朝は ゆっくり 過ごせます。",
    "furi": [
     [
      "通勤",
      "つうきん"
     ],
     [
      " ",
      null
     ],
     [
      "時間",
      "じかん"
     ],
     [
      "が",
      null
     ],
     [
      " ",
      null
     ],
     [
      "ない",
      null
     ],
     [
      " ",
      null
     ],
     [
      "ので",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "朝",
      "あさ"
     ],
     [
      "は",
      null
     ],
     [
      " ",
      null
     ],
     [
      "ゆっくり",
      null
     ],
     [
      " ",
      null
     ],
     [
      "過",
      "す"
     ],
     [
      "ごせます",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Vì không mất thời gian đi lại nên buổi sáng tôi có thể thong thả."
   },
   {
    "jp": "会議は 全部 オンラインで 行われます。",
    "furi": [
     [
      "会議",
      "かいぎ"
     ],
     [
      "は",
      null
     ],
     [
      " ",
      null
     ],
     [
      "全部",
      "ぜんぶ"
     ],
     [
      " ",
      null
     ],
     [
      "オンライン",
      null
     ],
     [
      "で",
      null
     ],
     [
      " ",
      null
     ],
     [
      "行",
      "おこな"
     ],
     [
      "われます",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Mọi cuộc họp đều được tổ chức trực tuyến."
   },
   {
    "jp": "一人で 集中して 仕事が できる のは、 リモートワークの 大きな 利点です。",
    "furi": [
     [
      "一人",
      "ひとり"
     ],
     [
      "で",
      null
     ],
     [
      " ",
      null
     ],
     [
      "集中",
      "しゅうちゅう"
     ],
     [
      "して",
      null
     ],
     [
      " ",
      null
     ],
     [
      "仕事",
      "しごと"
     ],
     [
      "が",
      null
     ],
     [
      " ",
      null
     ],
     [
      "できる",
      null
     ],
     [
      " ",
      null
     ],
     [
      "のは",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "リモートワーク",
      null
     ],
     [
      "の",
      null
     ],
     [
      " ",
      null
     ],
     [
      "大",
      "おお"
     ],
     [
      "きな",
      null
     ],
     [
      " ",
      null
     ],
     [
      "利点",
      "りてん"
     ],
     [
      "です",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Có thể tập trung làm việc một mình là lợi ích lớn của làm việc từ xa."
   },
   {
    "jp": "しかし、 どうりょうと 話す 機会が 減って、 さびしく 感じる ことも あります。",
    "furi": [
     [
      "しかし",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "どうりょう",
      null
     ],
     [
      "と",
      null
     ],
     [
      " ",
      null
     ],
     [
      "話",
      "はな"
     ],
     [
      "す",
      null
     ],
     [
      " ",
      null
     ],
     [
      "機会",
      "きかい"
     ],
     [
      "が",
      null
     ],
     [
      " ",
      null
     ],
     [
      "減",
      "へ"
     ],
     [
      "って",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "さびしく",
      null
     ],
     [
      " ",
      null
     ],
     [
      "感",
      "かん"
     ],
     [
      "じる",
      null
     ],
     [
      " ",
      null
     ],
     [
      "こと",
      null
     ],
     [
      "も",
      null
     ],
     [
      " ",
      null
     ],
     [
      "あります",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Tuy nhiên, cơ hội nói chuyện với đồng nghiệp giảm đi nên đôi khi tôi cũng cảm thấy cô đơn."
   },
   {
    "jp": "その ため、 わたしは 週に 一度は 会社に 出て、 どうりょうと 昼ごはんを 食べる ように して います。",
    "furi": [
     [
      "その",
      null
     ],
     [
      " ",
      null
     ],
     [
      "ため",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "わたし",
      null
     ],
     [
      "は",
      null
     ],
     [
      " ",
      null
     ],
     [
      "週",
      "しゅう"
     ],
     [
      "に",
      null
     ],
     [
      " ",
      null
     ],
     [
      "一度",
      "いちど"
     ],
     [
      "は",
      null
     ],
     [
      " ",
      null
     ],
     [
      "会社",
      "かいしゃ"
     ],
     [
      "に",
      null
     ],
     [
      " ",
      null
     ],
     [
      "出",
      "で"
     ],
     [
      "て",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "どうりょう",
      null
     ],
     [
      "と",
      null
     ],
     [
      " ",
      null
     ],
     [
      "昼",
      "ひる"
     ],
     [
      "ごはん",
      null
     ],
     [
      "を",
      null
     ],
     [
      " ",
      null
     ],
     [
      "食",
      "た"
     ],
     [
      "べる",
      null
     ],
     [
      " ",
      null
     ],
     [
      "ように",
      null
     ],
     [
      " ",
      null
     ],
     [
      "して",
      null
     ],
     [
      " ",
      null
     ],
     [
      "います",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Vì vậy, tôi cố gắng đến công ty ít nhất một lần mỗi tuần để ăn trưa cùng đồng nghiệp."
   },
   {
    "jp": "また、 運動 不足に ならない ように、 毎日 散歩を して います。",
    "furi": [
     [
      "また",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "運動",
      "うんどう"
     ],
     [
      " ",
      null
     ],
     [
      "不足",
      "ふそく"
     ],
     [
      "に",
      null
     ],
     [
      " ",
      null
     ],
     [
      "ならない",
      null
     ],
     [
      " ",
      null
     ],
     [
      "ように",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "毎日",
      "まいにち"
     ],
     [
      " ",
      null
     ],
     [
      "散歩",
      "さんぽ"
     ],
     [
      "を",
      null
     ],
     [
      " ",
      null
     ],
     [
      "して",
      null
     ],
     [
      " ",
      null
     ],
     [
      "います",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Ngoài ra, để không bị thiếu vận động, tôi đi dạo mỗi ngày."
   },
   {
    "jp": "リモートワークは 便利な ものの、 自分で 時間を 管理する ことが 大切です。",
    "furi": [
     [
      "リモートワーク",
      null
     ],
     [
      "は",
      null
     ],
     [
      " ",
      null
     ],
     [
      "便利",
      "べんり"
     ],
     [
      "な",
      null
     ],
     [
      " ",
      null
     ],
     [
      "ものの",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "自分",
      "じぶん"
     ],
     [
      "で",
      null
     ],
     [
      " ",
      null
     ],
     [
      "時間",
      "じかん"
     ],
     [
      "を",
      null
     ],
     [
      " ",
      null
     ],
     [
      "管理",
      "かんり"
     ],
     [
      "する",
      null
     ],
     [
      " ",
      null
     ],
     [
      "こと",
      null
     ],
     [
      "が",
      null
     ],
     [
      " ",
      null
     ],
     [
      "大切",
      "たいせつ"
     ],
     [
      "です",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Mặc dù làm việc từ xa rất tiện lợi, nhưng việc tự quản lý thời gian là rất quan trọng."
   },
   {
    "jp": "働き方を 自分で 選べる 時代に なって きました。",
    "furi": [
     [
      "働",
      "はたら"
     ],
     [
      "き",
      null
     ],
     [
      "方",
      "かた"
     ],
     [
      "を",
      null
     ],
     [
      " ",
      null
     ],
     [
      "自分",
      "じぶん"
     ],
     [
      "で",
      null
     ],
     [
      " ",
      null
     ],
     [
      "選",
      "えら"
     ],
     [
      "べる",
      null
     ],
     [
      " ",
      null
     ],
     [
      "時代",
      "じだい"
     ],
     [
      "に",
      null
     ],
     [
      " ",
      null
     ],
     [
      "なって",
      null
     ],
     [
      " ",
      null
     ],
     [
      "きました",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Chúng ta đã bước vào thời đại có thể tự chọn cách làm việc."
   },
   {
    "jp": "これからも、 リモートワークと 出勤を うまく 組み合わせて 行きたいと 思います。",
    "furi": [
     [
      "これからも",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "リモートワーク",
      null
     ],
     [
      "と",
      null
     ],
     [
      " ",
      null
     ],
     [
      "出勤",
      "しゅっきん"
     ],
     [
      "を",
      null
     ],
     [
      " ",
      null
     ],
     [
      "うまく",
      null
     ],
     [
      " ",
      null
     ],
     [
      "組",
      "く"
     ],
     [
      "み",
      null
     ],
     [
      "合",
      "あ"
     ],
     [
      "わせて",
      null
     ],
     [
      " ",
      null
     ],
     [
      "行",
      "い"
     ],
     [
      "きたい",
      null
     ],
     [
      "と",
      null
     ],
     [
      " ",
      null
     ],
     [
      "思",
      "おも"
     ],
     [
      "います",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Từ nay về sau, tôi muốn kết hợp tốt giữa làm việc từ xa và đi làm tại công ty."
   }
  ],
  "vocab": [
   {
    "w": "通勤",
    "r": "つうきん",
    "hv": "THÔNG CẦN",
    "vi": "Việc đi làm (bằng phương tiện công cộng)"
   },
   {
    "w": "集中",
    "r": "しゅうちゅう",
    "hv": "TẬP TRUNG",
    "vi": "Sự tập trung"
   },
   {
    "w": "利点",
    "r": "りてん",
    "hv": "LỢI ĐIỂM",
    "vi": "Ưu điểm, lợi ích"
   },
   {
    "w": "機会",
    "r": "きかい",
    "hv": "CƠ HỘI",
    "vi": "Cơ hội"
   },
   {
    "w": "管理",
    "r": "かんり",
    "hv": "QUẢN LÝ",
    "vi": "Quản lý"
   },
   {
    "w": "働き方",
    "r": "はたらきかた",
    "hv": "ĐỘNG PHƯƠNG",
    "vi": "Cách làm việc"
   }
  ],
  "grammar": [
   {
    "p": "〜ものの",
    "lv": "N2",
    "vi": "Mặc dù… nhưng…",
    "ex": "リモートワークは 便利な ものの、 自分で 時間を 管理する ことが 大切です。",
    "exVi": "Mặc dù làm việc từ xa rất tiện lợi, nhưng việc tự quản lý thời gian là rất quan trọng."
   },
   {
    "p": "V-て きました (thay đổi đang tới)",
    "lv": "N4",
    "vi": "Đã dần trở nên… (thay đổi đến hiện tại)",
    "ex": "働き方を 自分で 選べる 時代に なって きました。",
    "exVi": "Chúng ta đã bước vào thời đại có thể tự chọn cách làm việc."
   }
  ],
  "quiz": [
   {
    "q": "わたしは 週に 何日 自宅で 仕事を して いますか。",
    "options": [
     "一日",
     "二日",
     "三日",
     "四日"
    ],
    "answer": 2,
    "explain": "Trong bài có nói tôi làm việc ở nhà ba ngày mỗi tuần.",
    "evidence": "週に 三日、 自宅で 仕事を して います",
    "tip": "Tìm số ngày làm việc tại nhà trong một tuần."
   },
   {
    "q": "リモートワークの 利点として、 文章で 述べられている のは どれですか。",
    "options": [
     "どうりょうと 話す 機会が 増えること",
     "一人で 集中して 仕事が できること",
     "通勤 時間が 長くなること",
     "給料が 上がること"
    ],
    "answer": 1,
    "explain": "Trong bài có nói có thể tập trung làm việc một mình là lợi ích lớn của làm việc từ xa.",
    "evidence": "一人で 集中して 仕事が できる のは、 リモートワークの 大きな 利点です",
    "tip": "Tìm câu có từ '利点' trong bài."
   }
  ]
 },
 {
  "id": "dk-n2-04",
  "img": "dk-n2-04.jpg",
  "audio": "dk-n2-04.mp3",
  "timings": [
   0.015,
   4.575,
   10.942,
   17.001,
   23,
   27.737,
   32.679,
   37.282,
   43.678,
   48.08,
   55.882
  ],
  "level": "N2",
  "title": "日本の おもてなし",
  "titleVi": "Sự hiếu khách của Nhật Bản",
  "sentences": [
   {
    "jp": "日本の おもてなしは、 世界中の 人に 愛されて います。",
    "furi": [
     [
      "日本",
      "にほん"
     ],
     [
      "の",
      null
     ],
     [
      " ",
      null
     ],
     [
      "おもてなし",
      null
     ],
     [
      "は",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "世界中",
      "せかいじゅう"
     ],
     [
      "の",
      null
     ],
     [
      " ",
      null
     ],
     [
      "人",
      "ひと"
     ],
     [
      "に",
      null
     ],
     [
      " ",
      null
     ],
     [
      "愛",
      "あい"
     ],
     [
      "されて",
      null
     ],
     [
      " ",
      null
     ],
     [
      "います",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Sự hiếu khách của Nhật Bản được mọi người trên toàn thế giới yêu mến."
   },
   {
    "jp": "おもてなしとは、 客の 気持ちを 先に 読んで、 期待 以上の ことを する 心です。",
    "furi": [
     [
      "おもてなし",
      null
     ],
     [
      "とは",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "客",
      "きゃく"
     ],
     [
      "の",
      null
     ],
     [
      " ",
      null
     ],
     [
      "気持ち",
      "きもち"
     ],
     [
      "を",
      null
     ],
     [
      " ",
      null
     ],
     [
      "先",
      "さき"
     ],
     [
      "に",
      null
     ],
     [
      " ",
      null
     ],
     [
      "読",
      "よ"
     ],
     [
      "んで",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "期待",
      "きたい"
     ],
     [
      " ",
      null
     ],
     [
      "以上",
      "いじょう"
     ],
     [
      "の",
      null
     ],
     [
      " ",
      null
     ],
     [
      "こと",
      null
     ],
     [
      "を",
      null
     ],
     [
      " ",
      null
     ],
     [
      "する",
      null
     ],
     [
      " ",
      null
     ],
     [
      "心",
      "こころ"
     ],
     [
      "です",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Omotenashi là tấm lòng đọc trước cảm xúc của khách và làm hơn cả mong đợi."
   },
   {
    "jp": "例えば、 旅館では 客が 到着する 前に、 部屋を 暖かく して おきます。",
    "furi": [
     [
      "例",
      "たと"
     ],
     [
      "えば",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "旅館",
      "りょかん"
     ],
     [
      "では",
      null
     ],
     [
      " ",
      null
     ],
     [
      "客",
      "きゃく"
     ],
     [
      "が",
      null
     ],
     [
      " ",
      null
     ],
     [
      "到着",
      "とうちゃく"
     ],
     [
      "する",
      null
     ],
     [
      " ",
      null
     ],
     [
      "前",
      "まえ"
     ],
     [
      "に",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "部屋",
      "へや"
     ],
     [
      "を",
      null
     ],
     [
      " ",
      null
     ],
     [
      "暖",
      "あたた"
     ],
     [
      "かく",
      null
     ],
     [
      " ",
      null
     ],
     [
      "して",
      null
     ],
     [
      " ",
      null
     ],
     [
      "おきます",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Ví dụ, ở ryokan, trước khi khách đến, người ta chuẩn bị sẵn phòng ấm áp."
   },
   {
    "jp": "寒い 日には 温かい お茶を 出し、 暑い 日には 冷たい おしぼりを 出します。",
    "furi": [
     [
      "寒",
      "さむ"
     ],
     [
      "い",
      null
     ],
     [
      " ",
      null
     ],
     [
      "日",
      "ひ"
     ],
     [
      "には",
      null
     ],
     [
      " ",
      null
     ],
     [
      "温",
      "あたた"
     ],
     [
      "かい",
      null
     ],
     [
      " ",
      null
     ],
     [
      "お",
      null
     ],
     [
      "茶",
      "ちゃ"
     ],
     [
      "を",
      null
     ],
     [
      " ",
      null
     ],
     [
      "出",
      "だ"
     ],
     [
      "し",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "暑",
      "あつ"
     ],
     [
      "い",
      null
     ],
     [
      " ",
      null
     ],
     [
      "日",
      "ひ"
     ],
     [
      "には",
      null
     ],
     [
      " ",
      null
     ],
     [
      "冷",
      "つめ"
     ],
     [
      "たい",
      null
     ],
     [
      " ",
      null
     ],
     [
      "おしぼり",
      null
     ],
     [
      "を",
      null
     ],
     [
      " ",
      null
     ],
     [
      "出",
      "だ"
     ],
     [
      "します",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Vào ngày lạnh thì dọn trà nóng, ngày nóng thì dọn khăn lạnh."
   },
   {
    "jp": "客が 帰る ときには、 すがたが 見えなくなる まで 見送ります。",
    "furi": [
     [
      "客",
      "きゃく"
     ],
     [
      "が",
      null
     ],
     [
      " ",
      null
     ],
     [
      "帰",
      "かえ"
     ],
     [
      "る",
      null
     ],
     [
      " ",
      null
     ],
     [
      "とき",
      null
     ],
     [
      "には",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "すがた",
      null
     ],
     [
      "が",
      null
     ],
     [
      " ",
      null
     ],
     [
      "見",
      "み"
     ],
     [
      "えなくなる",
      null
     ],
     [
      " ",
      null
     ],
     [
      "まで",
      null
     ],
     [
      " ",
      null
     ],
     [
      "見",
      "み"
     ],
     [
      "送",
      "おく"
     ],
     [
      "ります",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Khi khách ra về, người ta tiễn cho đến khi không còn thấy bóng dáng."
   },
   {
    "jp": "これは、 客に 「また 来て ください」と いう 気持ちの 表れです。",
    "furi": [
     [
      "これ",
      null
     ],
     [
      "は",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "客",
      "きゃく"
     ],
     [
      "に",
      null
     ],
     [
      " ",
      null
     ],
     [
      "「",
      null
     ],
     [
      "また",
      null
     ],
     [
      " ",
      null
     ],
     [
      "来",
      "き"
     ],
     [
      "て",
      null
     ],
     [
      " ",
      null
     ],
     [
      "ください",
      null
     ],
     [
      "」",
      null
     ],
     [
      "と",
      null
     ],
     [
      " ",
      null
     ],
     [
      "いう",
      null
     ],
     [
      " ",
      null
     ],
     [
      "気持ち",
      "きもち"
     ],
     [
      "の",
      null
     ],
     [
      " ",
      null
     ],
     [
      "表",
      "あらわ"
     ],
     [
      "れ",
      null
     ],
     [
      "です",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Đây là biểu hiện của tấm lòng muốn nói với khách 'hãy lại đến nhé'."
   },
   {
    "jp": "おもてなしの 精神は、 茶道から 生まれたと 言われて います。",
    "furi": [
     [
      "おもてなし",
      null
     ],
     [
      "の",
      null
     ],
     [
      " ",
      null
     ],
     [
      "精神",
      "せいしん"
     ],
     [
      "は",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "茶道",
      "さどう"
     ],
     [
      "から",
      null
     ],
     [
      " ",
      null
     ],
     [
      "生",
      "う"
     ],
     [
      "まれた",
      null
     ],
     [
      "と",
      null
     ],
     [
      " ",
      null
     ],
     [
      "言",
      "い"
     ],
     [
      "われて",
      null
     ],
     [
      " ",
      null
     ],
     [
      "います",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Tinh thần omotenashi được cho là sinh ra từ trà đạo."
   },
   {
    "jp": "茶道では、 主人が 客の ためを 思って、 一つ 一つの 動作に 心を 込めます。",
    "furi": [
     [
      "茶道",
      "さどう"
     ],
     [
      "では",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "主人",
      "しゅじん"
     ],
     [
      "が",
      null
     ],
     [
      " ",
      null
     ],
     [
      "客",
      "きゃく"
     ],
     [
      "の",
      null
     ],
     [
      " ",
      null
     ],
     [
      "ため",
      null
     ],
     [
      "を",
      null
     ],
     [
      " ",
      null
     ],
     [
      "思",
      "おも"
     ],
     [
      "って",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "一",
      "ひと"
     ],
     [
      "つ",
      null
     ],
     [
      " ",
      null
     ],
     [
      "一",
      "ひと"
     ],
     [
      "つ",
      null
     ],
     [
      "の",
      null
     ],
     [
      " ",
      null
     ],
     [
      "動作",
      "どうさ"
     ],
     [
      "に",
      null
     ],
     [
      " ",
      null
     ],
     [
      "心",
      "こころ"
     ],
     [
      "を",
      null
     ],
     [
      " ",
      null
     ],
     [
      "込",
      "こ"
     ],
     [
      "めます",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Trong trà đạo, chủ nhà nghĩ đến khách và dồn tâm vào từng động tác."
   },
   {
    "jp": "チップを 求めない のも、 おもてなしの 大切な 部分です。",
    "furi": [
     [
      "チップ",
      null
     ],
     [
      "を",
      null
     ],
     [
      " ",
      null
     ],
     [
      "求",
      "もと"
     ],
     [
      "めない",
      null
     ],
     [
      " ",
      null
     ],
     [
      "のも",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "おもてなし",
      null
     ],
     [
      "の",
      null
     ],
     [
      " ",
      null
     ],
     [
      "大切",
      "たいせつ"
     ],
     [
      "な",
      null
     ],
     [
      " ",
      null
     ],
     [
      "部分",
      "ぶぶん"
     ],
     [
      "です",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Việc không đòi tiền boa cũng là một phần quan trọng của omotenashi."
   },
   {
    "jp": "おもてなしは、 お金を もらう ためでは なく、 人を 喜ばせる こと そのものに 喜びを 感じる 文化です。",
    "furi": [
     [
      "おもてなし",
      null
     ],
     [
      "は",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "お",
      null
     ],
     [
      "金",
      "かね"
     ],
     [
      "を",
      null
     ],
     [
      " ",
      null
     ],
     [
      "もらう",
      null
     ],
     [
      " ",
      null
     ],
     [
      "ため",
      null
     ],
     [
      "では",
      null
     ],
     [
      " ",
      null
     ],
     [
      "なく",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "人",
      "ひと"
     ],
     [
      "を",
      null
     ],
     [
      " ",
      null
     ],
     [
      "喜",
      "よろこ"
     ],
     [
      "ばせる",
      null
     ],
     [
      " ",
      null
     ],
     [
      "こと",
      null
     ],
     [
      " ",
      null
     ],
     [
      "そのもの",
      null
     ],
     [
      "に",
      null
     ],
     [
      " ",
      null
     ],
     [
      "喜",
      "よろこ"
     ],
     [
      "び",
      null
     ],
     [
      "を",
      null
     ],
     [
      " ",
      null
     ],
     [
      "感",
      "かん"
     ],
     [
      "じる",
      null
     ],
     [
      " ",
      null
     ],
     [
      "文化",
      "ぶんか"
     ],
     [
      "です",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Omotenashi là văn hóa tìm niềm vui trong chính việc làm người khác vui, chứ không phải để nhận tiền."
   },
   {
    "jp": "日本を 訪れた 旅行者は、 この 温かい 心に 感動して、 また 日本に 来たいと 思う そうです。",
    "furi": [
     [
      "日本",
      "にほん"
     ],
     [
      "を",
      null
     ],
     [
      " ",
      null
     ],
     [
      "訪",
      "おとず"
     ],
     [
      "れた",
      null
     ],
     [
      " ",
      null
     ],
     [
      "旅行者",
      "りょこうしゃ"
     ],
     [
      "は",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "この",
      null
     ],
     [
      " ",
      null
     ],
     [
      "温",
      "あたた"
     ],
     [
      "かい",
      null
     ],
     [
      " ",
      null
     ],
     [
      "心",
      "こころ"
     ],
     [
      "に",
      null
     ],
     [
      " ",
      null
     ],
     [
      "感動",
      "かんどう"
     ],
     [
      "して",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "また",
      null
     ],
     [
      " ",
      null
     ],
     [
      "日本",
      "にほん"
     ],
     [
      "に",
      null
     ],
     [
      " ",
      null
     ],
     [
      "来",
      "き"
     ],
     [
      "たい",
      null
     ],
     [
      "と",
      null
     ],
     [
      " ",
      null
     ],
     [
      "思",
      "おも"
     ],
     [
      "う",
      null
     ],
     [
      " ",
      null
     ],
     [
      "そうです",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Du khách đến thăm Nhật Bản cảm động trước tấm lòng ấm áp này và nghe nói họ muốn quay lại Nhật Bản."
   }
  ],
  "vocab": [
   {
    "w": "おもてなし",
    "r": "おもてなし",
    "hv": null,
    "vi": "Sự hiếu khách, lòng mến khách (Nhật Bản)"
   },
   {
    "w": "期待",
    "r": "きたい",
    "hv": "KÌ ĐÃI",
    "vi": "Sự mong đợi, kỳ vọng"
   },
   {
    "w": "見送る",
    "r": "みおくる",
    "hv": "KIẾN TỐNG",
    "vi": "Tiễn (ai đó ra về)"
   },
   {
    "w": "茶道",
    "r": "さどう",
    "hv": "TRÀ ĐẠO",
    "vi": "Trà đạo"
   },
   {
    "w": "精神",
    "r": "せいしん",
    "hv": "TINH THẦN",
    "vi": "Tinh thần"
   },
   {
    "w": "感動",
    "r": "かんどう",
    "hv": "CẢM ĐỘNG",
    "vi": "Sự cảm động, xúc động"
   }
  ],
  "grammar": [
   {
    "p": "〜と言われている",
    "lv": "N3",
    "vi": "Được cho là… / người ta nói rằng…",
    "ex": "おもてなしの 精神は、 茶道から 生まれたと 言われて います。",
    "exVi": "Tinh thần omotenashi được cho là sinh ra từ trà đạo."
   },
   {
    "p": "V-て おきます",
    "lv": "N4",
    "vi": "Làm sẵn… (chuẩn bị trước)",
    "ex": "例えば、 旅館では 客が 到着する 前に、 部屋を 暖かく して おきます。",
    "exVi": "Ví dụ, ở ryokan, trước khi khách đến, người ta chuẩn bị sẵn phòng ấm áp."
   }
  ],
  "quiz": [
   {
    "q": "おもてなしとは、 どのような 心ですか。",
    "options": [
     "客の 気持ちを 先に 読んで、 期待 以上の ことを する 心",
     "お金を たくさん もらう ための 心",
     "自分の 気持ちを 大切にする 心",
     "客に チップを 求める 心"
    ],
    "answer": 0,
    "explain": "Trong bài có giải thích omotenashi là tấm lòng đọc trước cảm xúc của khách và làm hơn cả mong đợi.",
    "evidence": "客の 気持ちを 先に 読んで、 期待 以上の ことを する 心です",
    "tip": "Tìm câu định nghĩa omotenashi trong bài."
   },
   {
    "q": "客が 帰る とき、 どうしますか。",
    "options": [
     "すぐに 部屋を 掃除します",
     "すがたが 見えなくなる まで 見送ります",
     "お茶を 出します",
     "チップを もらいます"
    ],
    "answer": 1,
    "explain": "Trong bài có nói khi khách ra về, người ta tiễn cho đến khi không còn thấy bóng dáng.",
    "evidence": "すがたが 見えなくなる まで 見送ります",
    "tip": "Tìm câu về lúc khách ra về."
   }
  ]
 },
 {
  "id": "dk-n2-05",
  "img": "dk-n2-05.jpg",
  "audio": "dk-n2-05.mp3",
  "timings": [
   0.015,
   5.404,
   10.152,
   15.437,
   20.098,
   22.708,
   26.837,
   30.338,
   35.657,
   40.353,
   47.532
  ],
  "level": "N2",
  "title": "日本の お正月",
  "titleVi": "Tết ở Nhật Bản",
  "sentences": [
   {
    "jp": "日本の お正月は、 一年で いちばん 大切な 行事の 一つです。",
    "furi": [
     [
      "日本",
      "にほん"
     ],
     [
      "の",
      null
     ],
     [
      " ",
      null
     ],
     [
      "お",
      null
     ],
     [
      "正月",
      "しょうがつ"
     ],
     [
      "は",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "一年",
      "いちねん"
     ],
     [
      "で",
      null
     ],
     [
      " ",
      null
     ],
     [
      "いちばん",
      null
     ],
     [
      " ",
      null
     ],
     [
      "大切",
      "たいせつ"
     ],
     [
      "な",
      null
     ],
     [
      " ",
      null
     ],
     [
      "行事",
      "ぎょうじ"
     ],
     [
      "の",
      null
     ],
     [
      " ",
      null
     ],
     [
      "一",
      "ひと"
     ],
     [
      "つ",
      null
     ],
     [
      "です",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Tết ở Nhật Bản là một trong những sự kiện quan trọng nhất trong năm."
   },
   {
    "jp": "大みそかの 夜、 多くの 家庭では 年越しそばを 食べます。",
    "furi": [
     [
      "大",
      "おお"
     ],
     [
      "みそか",
      null
     ],
     [
      "の",
      null
     ],
     [
      " ",
      null
     ],
     [
      "夜",
      "よる"
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "多",
      "おお"
     ],
     [
      "くの",
      null
     ],
     [
      " ",
      null
     ],
     [
      "家庭",
      "かてい"
     ],
     [
      "では",
      null
     ],
     [
      " ",
      null
     ],
     [
      "年",
      "とし"
     ],
     [
      "越",
      "こ"
     ],
     [
      "しそば",
      null
     ],
     [
      "を",
      null
     ],
     [
      " ",
      null
     ],
     [
      "食",
      "た"
     ],
     [
      "べます",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Vào đêm giao thừa, nhiều gia đình ăn mì toshikoshi soba."
   },
   {
    "jp": "新しい 年が 始まると、 人々は 神社へ はつもうでに 行きます。",
    "furi": [
     [
      "新",
      "あたら"
     ],
     [
      "しい",
      null
     ],
     [
      " ",
      null
     ],
     [
      "年",
      "とし"
     ],
     [
      "が",
      null
     ],
     [
      " ",
      null
     ],
     [
      "始",
      "はじ"
     ],
     [
      "まると",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "人",
      "ひと"
     ],
     [
      "々",
      "びと"
     ],
     [
      "は",
      null
     ],
     [
      " ",
      null
     ],
     [
      "神社",
      "じんじゃ"
     ],
     [
      "へ",
      null
     ],
     [
      " ",
      null
     ],
     [
      "はつもうで",
      null
     ],
     [
      "に",
      null
     ],
     [
      " ",
      null
     ],
     [
      "行",
      "い"
     ],
     [
      "きます",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Khi năm mới bắt đầu, mọi người đến đền thờ để đi lễ đầu năm."
   },
   {
    "jp": "はつもうででは、 一年の 健康や 幸せを 祈ります。",
    "furi": [
     [
      "はつもうで",
      null
     ],
     [
      "では",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "一年",
      "いちねん"
     ],
     [
      "の",
      null
     ],
     [
      " ",
      null
     ],
     [
      "健康",
      "けんこう"
     ],
     [
      "や",
      null
     ],
     [
      " ",
      null
     ],
     [
      "幸",
      "しあわ"
     ],
     [
      "せ",
      null
     ],
     [
      "を",
      null
     ],
     [
      " ",
      null
     ],
     [
      "祈",
      "いの"
     ],
     [
      "ります",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Khi đi lễ đầu năm, mọi người cầu nguyện cho sức khỏe và hạnh phúc trong một năm."
   },
   {
    "jp": "家では、 おせち料理を 食べます。",
    "furi": [
     [
      "家",
      "いえ"
     ],
     [
      "では",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "おせち",
      null
     ],
     [
      "料理",
      "りょうり"
     ],
     [
      "を",
      null
     ],
     [
      " ",
      null
     ],
     [
      "食",
      "た"
     ],
     [
      "べます",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Ở nhà, mọi người ăn món osechi."
   },
   {
    "jp": "おせち料理には、 それぞれ 意味が あると 言われています。",
    "furi": [
     [
      "おせち",
      null
     ],
     [
      "料理",
      "りょうり"
     ],
     [
      "には",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "それぞれ",
      null
     ],
     [
      " ",
      null
     ],
     [
      "意味",
      "いみ"
     ],
     [
      "が",
      null
     ],
     [
      " ",
      null
     ],
     [
      "ある",
      null
     ],
     [
      "と",
      null
     ],
     [
      " ",
      null
     ],
     [
      "言",
      "い"
     ],
     [
      "われて",
      null
     ],
     [
      "います",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Mỗi món osechi đều được cho là có ý nghĩa riêng."
   },
   {
    "jp": "子どもたちは、 大人から お年玉を もらいます。",
    "furi": [
     [
      "子",
      "こ"
     ],
     [
      "どもたち",
      null
     ],
     [
      "は",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "大人",
      "おとな"
     ],
     [
      "から",
      null
     ],
     [
      " ",
      null
     ],
     [
      "お年玉",
      "おとしだま"
     ],
     [
      "を",
      null
     ],
     [
      " ",
      null
     ],
     [
      "もらいます",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Trẻ em nhận tiền lì xì từ người lớn."
   },
   {
    "jp": "お正月は、 家族が 集まって、 ゆっくり 過ごす 時間でも あります。",
    "furi": [
     [
      "お",
      null
     ],
     [
      "正月",
      "しょうがつ"
     ],
     [
      "は",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "家族",
      "かぞく"
     ],
     [
      "が",
      null
     ],
     [
      " ",
      null
     ],
     [
      "集",
      "あつ"
     ],
     [
      "まって",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "ゆっくり",
      null
     ],
     [
      " ",
      null
     ],
     [
      "過",
      "す"
     ],
     [
      "ごす",
      null
     ],
     [
      " ",
      null
     ],
     [
      "時間",
      "じかん"
     ],
     [
      "でも",
      null
     ],
     [
      " ",
      null
     ],
     [
      "あります",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Tết cũng là thời gian gia đình sum họp và thong thả bên nhau."
   },
   {
    "jp": "最近は、 海外で お正月を 過ごす 人も 増えています。",
    "furi": [
     [
      "最近",
      "さいきん"
     ],
     [
      "は",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "海外",
      "かいがい"
     ],
     [
      "で",
      null
     ],
     [
      " ",
      null
     ],
     [
      "お",
      null
     ],
     [
      "正月",
      "しょうがつ"
     ],
     [
      "を",
      null
     ],
     [
      " ",
      null
     ],
     [
      "過",
      "す"
     ],
     [
      "ごす",
      null
     ],
     [
      " ",
      null
     ],
     [
      "人",
      "ひと"
     ],
     [
      "も",
      null
     ],
     [
      " ",
      null
     ],
     [
      "増",
      "ふ"
     ],
     [
      "えています",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Gần đây, cũng có nhiều người đón Tết ở nước ngoài."
   },
   {
    "jp": "しかし、 お正月に 家族と 過ごす 時間は、 日本人に とって 特別な ものに 違いありません。",
    "furi": [
     [
      "しかし",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "お",
      null
     ],
     [
      "正月",
      "しょうがつ"
     ],
     [
      "に",
      null
     ],
     [
      " ",
      null
     ],
     [
      "家族",
      "かぞく"
     ],
     [
      "と",
      null
     ],
     [
      " ",
      null
     ],
     [
      "過",
      "す"
     ],
     [
      "ごす",
      null
     ],
     [
      " ",
      null
     ],
     [
      "時間",
      "じかん"
     ],
     [
      "は",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "日本人",
      "にほんじん"
     ],
     [
      "に",
      null
     ],
     [
      " ",
      null
     ],
     [
      "とって",
      null
     ],
     [
      " ",
      null
     ],
     [
      "特別",
      "とくべつ"
     ],
     [
      "な",
      null
     ],
     [
      " ",
      null
     ],
     [
      "もの",
      null
     ],
     [
      "に",
      null
     ],
     [
      " ",
      null
     ],
     [
      "違",
      "ちが"
     ],
     [
      "いありません",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Tuy nhiên, thời gian đón Tết cùng gia đình chắc chắn là điều đặc biệt đối với người Nhật."
   },
   {
    "jp": "新しい 一年の 始まりを 祝う 気持ちは、 今も 昔も 変わりません。",
    "furi": [
     [
      "新",
      "あたら"
     ],
     [
      "しい",
      null
     ],
     [
      " ",
      null
     ],
     [
      "一年",
      "いちねん"
     ],
     [
      "の",
      null
     ],
     [
      " ",
      null
     ],
     [
      "始",
      "はじ"
     ],
     [
      "まり",
      null
     ],
     [
      "を",
      null
     ],
     [
      " ",
      null
     ],
     [
      "祝",
      "いわ"
     ],
     [
      "う",
      null
     ],
     [
      " ",
      null
     ],
     [
      "気持",
      "きも"
     ],
     [
      "ち",
      null
     ],
     [
      "は",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "今",
      "いま"
     ],
     [
      "も",
      null
     ],
     [
      " ",
      null
     ],
     [
      "昔",
      "むかし"
     ],
     [
      "も",
      null
     ],
     [
      " ",
      null
     ],
     [
      "変",
      "か"
     ],
     [
      "わりません",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Tấm lòng chúc mừng sự khởi đầu của một năm mới, xưa hay nay vẫn không thay đổi."
   }
  ],
  "vocab": [
   {
    "w": "行事",
    "r": "ぎょうじ",
    "hv": "HÀNH SỰ",
    "vi": "Sự kiện, lễ hội (theo mùa, theo năm)"
   },
   {
    "w": "はつもうで",
    "r": "はつもうで",
    "hv": "SƠ CHIẾU",
    "vi": "Đi lễ đền/chùa đầu năm mới"
   },
   {
    "w": "お年玉",
    "r": "おとしだま",
    "hv": "NIÊN NGỌC",
    "vi": "Tiền lì xì (cho trẻ em dịp Tết)"
   },
   {
    "w": "祈る",
    "r": "いのる",
    "hv": "KÌ",
    "vi": "Cầu nguyện"
   },
   {
    "w": "特別",
    "r": "とくべつ",
    "hv": "ĐẶC BIỆT",
    "vi": "Đặc biệt"
   },
   {
    "w": "祝う",
    "r": "いわう",
    "hv": "CHÚC",
    "vi": "Chúc mừng, ăn mừng"
   }
  ],
  "grammar": [
   {
    "p": "〜と言われている",
    "lv": "N3",
    "vi": "Được cho là… / người ta nói rằng…",
    "ex": "おせち料理には、 それぞれ 意味が あると 言われています。",
    "exVi": "Mỗi món osechi đều được cho là có ý nghĩa riêng."
   },
   {
    "p": "〜に違いない",
    "lv": "N3",
    "vi": "Chắc chắn là…",
    "ex": "しかし、 お正月に 家族と 過ごす 時間は、 日本人に とって 特別な ものに 違いありません。",
    "exVi": "Tuy nhiên, thời gian đón Tết cùng gia đình chắc chắn là điều đặc biệt đối với người Nhật."
   }
  ],
  "quiz": [
   {
    "q": "大みそかの 夜、 多くの 家庭では 何を 食べますか。",
    "options": [
     "年越しそばを",
     "おせち料理を",
     "すしを",
     "ケーキを"
    ],
    "answer": 0,
    "explain": "Trong bài có nói vào đêm giao thừa, nhiều gia đình ăn mì toshikoshi soba.",
    "evidence": "大みそかの 夜、 多くの 家庭では 年越しそばを 食べます",
    "tip": "Tìm món ăn trong câu về đêm giao thừa."
   },
   {
    "q": "はつもうででは、 何を 祈りますか。",
    "options": [
     "一年の 健康や 幸せを",
     "いい 天気を",
     "新しい 車を",
     "多くの お金を"
    ],
    "answer": 0,
    "explain": "Trong bài có nói khi đi lễ đầu năm, mọi người cầu nguyện cho sức khỏe và hạnh phúc trong một năm.",
    "evidence": "一年の 健康や 幸せを 祈ります",
    "tip": "Tìm câu về việc cầu nguyện khi đi lễ đầu năm."
   }
  ]
 },
 {
  "id": "dk-n2-06",
  "img": "dk-n2-06.jpg",
  "audio": "dk-n2-06.mp3",
  "timings": [
   0.015,
   5.694,
   10.459,
   16.05,
   19.82,
   26.068,
   29.736,
   34.679,
   37.097,
   43.567,
   48.294
  ],
  "level": "N2",
  "title": "環境を 守る 生活",
  "titleVi": "Sống bảo vệ môi trường",
  "sentences": [
   {
    "jp": "地球の 温暖化は、 今、 世界中の 大きな 問題に なっています。",
    "furi": [
     [
      "地球",
      "ちきゅう"
     ],
     [
      "の",
      null
     ],
     [
      " ",
      null
     ],
     [
      "温暖化",
      "おんだんか"
     ],
     [
      "は",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "今",
      "いま"
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "世界中",
      "せかいじゅう"
     ],
     [
      "の",
      null
     ],
     [
      " ",
      null
     ],
     [
      "大",
      "おお"
     ],
     [
      "きな",
      null
     ],
     [
      " ",
      null
     ],
     [
      "問題",
      "もんだい"
     ],
     [
      "に",
      null
     ],
     [
      " ",
      null
     ],
     [
      "なって",
      null
     ],
     [
      "います",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Sự nóng lên toàn cầu hiện đang trở thành vấn đề lớn trên toàn thế giới."
   },
   {
    "jp": "私たちの 生活も、 環境に 大きな 負担を かけています。",
    "furi": [
     [
      "私",
      "わたし"
     ],
     [
      "たち",
      null
     ],
     [
      "の",
      null
     ],
     [
      " ",
      null
     ],
     [
      "生活",
      "せいかつ"
     ],
     [
      "も",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "環境",
      "かんきょう"
     ],
     [
      "に",
      null
     ],
     [
      " ",
      null
     ],
     [
      "大",
      "おお"
     ],
     [
      "きな",
      null
     ],
     [
      " ",
      null
     ],
     [
      "負担",
      "ふたん"
     ],
     [
      "を",
      null
     ],
     [
      " ",
      null
     ],
     [
      "かけています",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Cuộc sống của chúng ta cũng đang tạo ra gánh nặng lớn cho môi trường."
   },
   {
    "jp": "例えば、 使い捨ての プラスチックは、 海の 生き物を 苦しめています。",
    "furi": [
     [
      "例",
      "たと"
     ],
     [
      "えば",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "使",
      "つか"
     ],
     [
      "い",
      null
     ],
     [
      "捨",
      "す"
     ],
     [
      "ての",
      null
     ],
     [
      " ",
      null
     ],
     [
      "プラスチック",
      null
     ],
     [
      "は",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "海",
      "うみ"
     ],
     [
      "の",
      null
     ],
     [
      " ",
      null
     ],
     [
      "生",
      "い"
     ],
     [
      "き",
      null
     ],
     [
      "物",
      "もの"
     ],
     [
      "を",
      null
     ],
     [
      " ",
      null
     ],
     [
      "苦",
      "くる"
     ],
     [
      "しめています",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Ví dụ, đồ nhựa dùng một lần đang làm khổ các sinh vật biển."
   },
   {
    "jp": "しかし、 私たちに できる ことは たくさん あります。",
    "furi": [
     [
      "しかし",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "私",
      "わたし"
     ],
     [
      "たち",
      null
     ],
     [
      "に",
      null
     ],
     [
      " ",
      null
     ],
     [
      "できる",
      null
     ],
     [
      " ",
      null
     ],
     [
      "こと",
      null
     ],
     [
      "は",
      null
     ],
     [
      " ",
      null
     ],
     [
      "たくさん",
      null
     ],
     [
      " ",
      null
     ],
     [
      "あります",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Tuy nhiên, có rất nhiều việc chúng ta có thể làm."
   },
   {
    "jp": "近い ところへ 行く ときは、 車では なく、 自転車や 徒歩で 行く ように して います。",
    "furi": [
     [
      "近",
      "ちか"
     ],
     [
      "い",
      null
     ],
     [
      " ",
      null
     ],
     [
      "ところ",
      null
     ],
     [
      "へ",
      null
     ],
     [
      " ",
      null
     ],
     [
      "行",
      "い"
     ],
     [
      "く",
      null
     ],
     [
      " ",
      null
     ],
     [
      "とき",
      null
     ],
     [
      "は",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "車",
      "くるま"
     ],
     [
      "では",
      null
     ],
     [
      " ",
      null
     ],
     [
      "なく",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "自転車",
      "じてんしゃ"
     ],
     [
      "や",
      null
     ],
     [
      " ",
      null
     ],
     [
      "徒歩",
      "とほ"
     ],
     [
      "で",
      null
     ],
     [
      " ",
      null
     ],
     [
      "行",
      "い"
     ],
     [
      "く",
      null
     ],
     [
      " ",
      null
     ],
     [
      "ように",
      null
     ],
     [
      " ",
      null
     ],
     [
      "して",
      null
     ],
     [
      " ",
      null
     ],
     [
      "います",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Khi đi đến những nơi gần, tôi cố gắng đi bằng xe đạp hay đi bộ thay vì ô tô."
   },
   {
    "jp": "買い物の ときは、 マイバッグを 持って 行きます。",
    "furi": [
     [
      "買",
      "か"
     ],
     [
      "い",
      null
     ],
     [
      "物",
      "もの"
     ],
     [
      "の",
      null
     ],
     [
      " ",
      null
     ],
     [
      "とき",
      null
     ],
     [
      "は",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "マイバッグ",
      null
     ],
     [
      "を",
      null
     ],
     [
      " ",
      null
     ],
     [
      "持",
      "も"
     ],
     [
      "って",
      null
     ],
     [
      " ",
      null
     ],
     [
      "行",
      "い"
     ],
     [
      "きます",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Khi đi mua sắm, tôi mang theo túi vải của mình."
   },
   {
    "jp": "電気を せつやくする ために、 使わない 部屋の 明りを 消します。",
    "furi": [
     [
      "電気",
      "でんき"
     ],
     [
      "を",
      null
     ],
     [
      " ",
      null
     ],
     [
      "せつやく",
      null
     ],
     [
      "する",
      null
     ],
     [
      " ",
      null
     ],
     [
      "ために",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "使",
      "つか"
     ],
     [
      "わない",
      null
     ],
     [
      " ",
      null
     ],
     [
      "部屋",
      "へや"
     ],
     [
      "の",
      null
     ],
     [
      " ",
      null
     ],
     [
      "明",
      "あか"
     ],
     [
      "り",
      null
     ],
     [
      "を",
      null
     ],
     [
      " ",
      null
     ],
     [
      "消",
      "け"
     ],
     [
      "します",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Để tiết kiệm điện, tôi tắt đèn ở những phòng không sử dụng."
   },
   {
    "jp": "水も 大切に 使う べきです。",
    "furi": [
     [
      "水",
      "みず"
     ],
     [
      "も",
      null
     ],
     [
      " ",
      null
     ],
     [
      "大切",
      "たいせつ"
     ],
     [
      "に",
      null
     ],
     [
      " ",
      null
     ],
     [
      "使",
      "つか"
     ],
     [
      "う",
      null
     ],
     [
      " ",
      null
     ],
     [
      "べき",
      null
     ],
     [
      "です",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Nước cũng nên được sử dụng một cách trân trọng."
   },
   {
    "jp": "一人の 力は 小さい ものの、 多くの 人が 行動すれば、 大きな 変化に なります。",
    "furi": [
     [
      "一人",
      "ひとり"
     ],
     [
      "の",
      null
     ],
     [
      " ",
      null
     ],
     [
      "力",
      "ちから"
     ],
     [
      "は",
      null
     ],
     [
      " ",
      null
     ],
     [
      "小",
      "ちい"
     ],
     [
      "さい",
      null
     ],
     [
      " ",
      null
     ],
     [
      "ものの",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "多",
      "おお"
     ],
     [
      "くの",
      null
     ],
     [
      " ",
      null
     ],
     [
      "人",
      "ひと"
     ],
     [
      "が",
      null
     ],
     [
      " ",
      null
     ],
     [
      "行動",
      "こうどう"
     ],
     [
      "すれば",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "大",
      "おお"
     ],
     [
      "きな",
      null
     ],
     [
      " ",
      null
     ],
     [
      "変化",
      "へんか"
     ],
     [
      "に",
      null
     ],
     [
      " ",
      null
     ],
     [
      "なります",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Mặc dù sức của một người là nhỏ bé, nhưng nếu nhiều người cùng hành động, sẽ tạo nên thay đổi lớn."
   },
   {
    "jp": "環境を 守る ことは、 未来の 子どもたちへの プレゼントです。",
    "furi": [
     [
      "環境",
      "かんきょう"
     ],
     [
      "を",
      null
     ],
     [
      " ",
      null
     ],
     [
      "守",
      "まも"
     ],
     [
      "る",
      null
     ],
     [
      " ",
      null
     ],
     [
      "こと",
      null
     ],
     [
      "は",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "未来",
      "みらい"
     ],
     [
      "の",
      null
     ],
     [
      " ",
      null
     ],
     [
      "子",
      "こ"
     ],
     [
      "どもたち",
      null
     ],
     [
      "への",
      null
     ],
     [
      " ",
      null
     ],
     [
      "プレゼント",
      null
     ],
     [
      "です",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Bảo vệ môi trường chính là món quà dành cho trẻ em trong tương lai."
   },
   {
    "jp": "今日から、 できる ことから 始めて みませんか。",
    "furi": [
     [
      "今日",
      "きょう"
     ],
     [
      "から",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "できる",
      null
     ],
     [
      " ",
      null
     ],
     [
      "こと",
      null
     ],
     [
      "から",
      null
     ],
     [
      " ",
      null
     ],
     [
      "始",
      "はじ"
     ],
     [
      "めて",
      null
     ],
     [
      " ",
      null
     ],
     [
      "みませんか",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Từ hôm nay, hãy bắt đầu từ những việc có thể làm được nhé."
   }
  ],
  "vocab": [
   {
    "w": "温暖化",
    "r": "おんだんか",
    "hv": "ÔN NOÃN HÓA",
    "vi": "Sự nóng lên toàn cầu"
   },
   {
    "w": "負担",
    "r": "ふたん",
    "hv": "PHỤ ĐAM",
    "vi": "Gánh nặng"
   },
   {
    "w": "使い捨て",
    "r": "つかいすて",
    "hv": "SỬ XẢ",
    "vi": "Dùng một lần rồi vứt"
   },
   {
    "w": "自転車",
    "r": "じてんしゃ",
    "hv": "TỰ CHUYỂN XA",
    "vi": "Xe đạp"
   },
   {
    "w": "行動",
    "r": "こうどう",
    "hv": "HÀNH ĐỘNG",
    "vi": "Hành động"
   },
   {
    "w": "変化",
    "r": "へんか",
    "hv": "BIẾN HÓA",
    "vi": "Sự thay đổi"
   }
  ],
  "grammar": [
   {
    "p": "〜ものの",
    "lv": "N2",
    "vi": "Mặc dù… nhưng…",
    "ex": "一人の 力は 小さい ものの、 多くの 人が 行動すれば、 大きな 変化に なります。",
    "exVi": "Mặc dù sức của một người là nhỏ bé, nhưng nếu nhiều người cùng hành động, sẽ tạo nên thay đổi lớn."
   },
   {
    "p": "V-る + べきだ",
    "lv": "N3",
    "vi": "Nên… (khuyên nhủ, nghĩa vụ)",
    "ex": "水も 大切に 使う べきです。",
    "exVi": "Nước cũng nên được sử dụng một cách trân trọng."
   }
  ],
  "quiz": [
   {
    "q": "近い ところへ 行く とき、 どうやって 行く ように して いますか。",
    "options": [
     "自転車や 徒歩で",
     "車で",
     "電車で",
     "バスで"
    ],
    "answer": 0,
    "explain": "Trong bài có nói khi đi đến những nơi gần, tôi cố gắng đi bằng xe đạp hay đi bộ.",
    "evidence": "自転車や 徒歩で 行く ように して います",
    "tip": "Tìm phương tiện di chuyển trong câu về nơi gần."
   },
   {
    "q": "環境を 守る ことは、 何だと 述べられていますか。",
    "options": [
     "未来の 子どもたちへの プレゼント",
     "お金の むだづかい",
     "難しい 仕事",
     "一人の 力"
    ],
    "answer": 0,
    "explain": "Trong bài có nói bảo vệ môi trường chính là món quà dành cho trẻ em trong tương lai.",
    "evidence": "環境を 守る ことは、 未来の 子どもたちへの プレゼントです",
    "tip": "Tìm câu nói về ý nghĩa của việc bảo vệ môi trường."
   }
  ]
 },
 {
  "id": "dk-n2-07",
  "img": "dk-n2-07.jpg",
  "audio": "dk-n2-07.mp3",
  "timings": [
   0.015,
   4.53,
   9.615,
   15.784,
   19.84,
   25.081,
   30.445,
   35.965,
   40.432,
   44.403,
   50.745
  ],
  "level": "N2",
  "title": "スマホと 人間関係",
  "titleVi": "Điện thoại và các mối quan hệ",
  "sentences": [
   {
    "jp": "スマホは、 私たちの 生活を とても 便利に しました。",
    "furi": [
     [
      "スマホ",
      null
     ],
     [
      "は",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "私",
      "わたし"
     ],
     [
      "たち",
      null
     ],
     [
      "の",
      null
     ],
     [
      " ",
      null
     ],
     [
      "生活",
      "せいかつ"
     ],
     [
      "を",
      null
     ],
     [
      " ",
      null
     ],
     [
      "とても",
      null
     ],
     [
      " ",
      null
     ],
     [
      "便利",
      "べんり"
     ],
     [
      "に",
      null
     ],
     [
      " ",
      null
     ],
     [
      "しました",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Điện thoại thông minh đã làm cho cuộc sống của chúng ta trở nên rất tiện lợi."
   },
   {
    "jp": "遠くに 住んでいる 家族や 友だちとも、 すぐに 連絡が できます。",
    "furi": [
     [
      "遠",
      "とお"
     ],
     [
      "くに",
      null
     ],
     [
      " ",
      null
     ],
     [
      "住",
      "す"
     ],
     [
      "んでいる",
      null
     ],
     [
      " ",
      null
     ],
     [
      "家族",
      "かぞく"
     ],
     [
      "や",
      null
     ],
     [
      " ",
      null
     ],
     [
      "友",
      "とも"
     ],
     [
      "だち",
      null
     ],
     [
      "とも",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "すぐに",
      null
     ],
     [
      " ",
      null
     ],
     [
      "連絡",
      "れんらく"
     ],
     [
      "が",
      null
     ],
     [
      " ",
      null
     ],
     [
      "できます",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Dù gia đình hay bạn bè ở xa, chúng ta cũng có thể liên lạc ngay lập tức."
   },
   {
    "jp": "しかし、 スマホを 見る 時間が 長くなると、 家族との 会話が 減って しまいます。",
    "furi": [
     [
      "しかし",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "スマホ",
      null
     ],
     [
      "を",
      null
     ],
     [
      " ",
      null
     ],
     [
      "見",
      "み"
     ],
     [
      "る",
      null
     ],
     [
      " ",
      null
     ],
     [
      "時間",
      "じかん"
     ],
     [
      "が",
      null
     ],
     [
      " ",
      null
     ],
     [
      "長",
      "なが"
     ],
     [
      "く",
      null
     ],
     [
      "なると",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "家族",
      "かぞく"
     ],
     [
      "との",
      null
     ],
     [
      " ",
      null
     ],
     [
      "会話",
      "かいわ"
     ],
     [
      "が",
      null
     ],
     [
      " ",
      null
     ],
     [
      "減",
      "へ"
     ],
     [
      "って",
      null
     ],
     [
      " ",
      null
     ],
     [
      "しまいます",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Tuy nhiên, khi thời gian nhìn điện thoại dài ra, cuộc trò chuyện với gia đình sẽ giảm đi."
   },
   {
    "jp": "ごはんの ときも、 スマホを 見ている 人が 多いです。",
    "furi": [
     [
      "ごはん",
      null
     ],
     [
      "の",
      null
     ],
     [
      " ",
      null
     ],
     [
      "とき",
      null
     ],
     [
      "も",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "スマホ",
      null
     ],
     [
      "を",
      null
     ],
     [
      " ",
      null
     ],
     [
      "見",
      "み"
     ],
     [
      "ている",
      null
     ],
     [
      " ",
      null
     ],
     [
      "人",
      "ひと"
     ],
     [
      "が",
      null
     ],
     [
      " ",
      null
     ],
     [
      "多",
      "おお"
     ],
     [
      "い",
      null
     ],
     [
      "です",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Ngay cả khi ăn cơm, cũng có nhiều người nhìn điện thoại."
   },
   {
    "jp": "昔に 比べて、 人と 直接 会って 話す 時間が 減りました。",
    "furi": [
     [
      "昔",
      "むかし"
     ],
     [
      "に",
      null
     ],
     [
      " ",
      null
     ],
     [
      "比",
      "くら"
     ],
     [
      "べて",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "人",
      "ひと"
     ],
     [
      "と",
      null
     ],
     [
      " ",
      null
     ],
     [
      "直接",
      "ちょくせつ"
     ],
     [
      " ",
      null
     ],
     [
      "会",
      "あ"
     ],
     [
      "って",
      null
     ],
     [
      " ",
      null
     ],
     [
      "話",
      "はな"
     ],
     [
      "す",
      null
     ],
     [
      " ",
      null
     ],
     [
      "時間",
      "じかん"
     ],
     [
      "が",
      null
     ],
     [
      " ",
      null
     ],
     [
      "減",
      "へ"
     ],
     [
      "りました",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "So với ngày xưa, thời gian gặp trực tiếp và trò chuyện với mọi người đã giảm đi."
   },
   {
    "jp": "スマホが 便利に なったにもかかわらず、 さびしいと 感じる 人も います。",
    "furi": [
     [
      "スマホ",
      null
     ],
     [
      "が",
      null
     ],
     [
      " ",
      null
     ],
     [
      "便利",
      "べんり"
     ],
     [
      "に",
      null
     ],
     [
      " ",
      null
     ],
     [
      "なった",
      null
     ],
     [
      "にもかかわらず",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "さびしい",
      null
     ],
     [
      "と",
      null
     ],
     [
      " ",
      null
     ],
     [
      "感",
      "かん"
     ],
     [
      "じる",
      null
     ],
     [
      " ",
      null
     ],
     [
      "人",
      "ひと"
     ],
     [
      "も",
      null
     ],
     [
      " ",
      null
     ],
     [
      "います",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Mặc dù điện thoại đã trở nên tiện lợi, nhưng cũng có người cảm thấy cô đơn."
   },
   {
    "jp": "スマホに 依存して しまうと、 勉強や 仕事に 集中できなく なります。",
    "furi": [
     [
      "スマホ",
      null
     ],
     [
      "に",
      null
     ],
     [
      " ",
      null
     ],
     [
      "依存",
      "いぞん"
     ],
     [
      "して",
      null
     ],
     [
      " ",
      null
     ],
     [
      "しまう",
      null
     ],
     [
      "と",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "勉強",
      "べんきょう"
     ],
     [
      "や",
      null
     ],
     [
      " ",
      null
     ],
     [
      "仕事",
      "しごと"
     ],
     [
      "に",
      null
     ],
     [
      " ",
      null
     ],
     [
      "集中",
      "しゅうちゅう"
     ],
     [
      "できなく",
      null
     ],
     [
      " ",
      null
     ],
     [
      "なります",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Nếu phụ thuộc vào điện thoại, bạn sẽ không thể tập trung vào học tập hay công việc."
   },
   {
    "jp": "だから、 スマホを 使う 時間を 決める ことが 大切です。",
    "furi": [
     [
      "だから",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "スマホ",
      null
     ],
     [
      "を",
      null
     ],
     [
      " ",
      null
     ],
     [
      "使",
      "つか"
     ],
     [
      "う",
      null
     ],
     [
      " ",
      null
     ],
     [
      "時間",
      "じかん"
     ],
     [
      "を",
      null
     ],
     [
      " ",
      null
     ],
     [
      "決",
      "き"
     ],
     [
      "める",
      null
     ],
     [
      " ",
      null
     ],
     [
      "こと",
      null
     ],
     [
      "が",
      null
     ],
     [
      " ",
      null
     ],
     [
      "大切",
      "たいせつ"
     ],
     [
      "です",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Vì vậy, việc quy định thời gian dùng điện thoại là rất quan trọng."
   },
   {
    "jp": "例えば、 夜は スマホを 見ない ことに しています。",
    "furi": [
     [
      "例",
      "たと"
     ],
     [
      "えば",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "夜",
      "よる"
     ],
     [
      "は",
      null
     ],
     [
      " ",
      null
     ],
     [
      "スマホ",
      null
     ],
     [
      "を",
      null
     ],
     [
      " ",
      null
     ],
     [
      "見",
      "み"
     ],
     [
      "ない",
      null
     ],
     [
      " ",
      null
     ],
     [
      "こと",
      null
     ],
     [
      "に",
      null
     ],
     [
      " ",
      null
     ],
     [
      "して",
      null
     ],
     [
      "います",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Ví dụ, vào buổi tối tôi quyết định không nhìn điện thoại."
   },
   {
    "jp": "家族や 友だちと 話す 時間を 大切に すれば、 人間関係は もっと よく なります。",
    "furi": [
     [
      "家族",
      "かぞく"
     ],
     [
      "や",
      null
     ],
     [
      " ",
      null
     ],
     [
      "友",
      "とも"
     ],
     [
      "だち",
      null
     ],
     [
      "と",
      null
     ],
     [
      " ",
      null
     ],
     [
      "話",
      "はな"
     ],
     [
      "す",
      null
     ],
     [
      " ",
      null
     ],
     [
      "時間",
      "じかん"
     ],
     [
      "を",
      null
     ],
     [
      " ",
      null
     ],
     [
      "大切",
      "たいせつ"
     ],
     [
      "に",
      null
     ],
     [
      " ",
      null
     ],
     [
      "すれば",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "人間関係",
      "にんげんかんけい"
     ],
     [
      "は",
      null
     ],
     [
      " ",
      null
     ],
     [
      "もっと",
      null
     ],
     [
      " ",
      null
     ],
     [
      "よく",
      null
     ],
     [
      " ",
      null
     ],
     [
      "なります",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Nếu trân trọng thời gian trò chuyện với gia đình và bạn bè, các mối quan hệ sẽ trở nên tốt đẹp hơn."
   },
   {
    "jp": "スマホは 道具に すぎないので、 どう 使うかが 大切です。",
    "furi": [
     [
      "スマホ",
      null
     ],
     [
      "は",
      null
     ],
     [
      " ",
      null
     ],
     [
      "道具",
      "どうぐ"
     ],
     [
      "に",
      null
     ],
     [
      " ",
      null
     ],
     [
      "すぎない",
      null
     ],
     [
      "ので",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "どう",
      null
     ],
     [
      " ",
      null
     ],
     [
      "使",
      "つか"
     ],
     [
      "う",
      null
     ],
     [
      "か",
      null
     ],
     [
      "が",
      null
     ],
     [
      " ",
      null
     ],
     [
      "大切",
      "たいせつ"
     ],
     [
      "です",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Điện thoại chỉ là một công cụ, nên cách dùng nó như thế nào mới là điều quan trọng."
   }
  ],
  "vocab": [
   {
    "w": "スマホ",
    "r": "スマホ",
    "hv": null,
    "vi": "Điện thoại thông minh"
   },
   {
    "w": "連絡",
    "r": "れんらく",
    "hv": "LIÊN LẠC",
    "vi": "Liên lạc"
   },
   {
    "w": "会話",
    "r": "かいわ",
    "hv": "HỘI THOẠI",
    "vi": "Cuộc trò chuyện"
   },
   {
    "w": "依存",
    "r": "いぞん",
    "hv": "Y TỒN",
    "vi": "Phụ thuộc, lệ thuộc"
   },
   {
    "w": "減らす",
    "r": "へらす",
    "hv": "GIẢM",
    "vi": "Giảm (cái gì)"
   },
   {
    "w": "人間関係",
    "r": "にんげんかんけい",
    "hv": "NHÂN GIAN QUAN HỆ",
    "vi": "Quan hệ giữa người với người"
   }
  ],
  "grammar": [
   {
    "p": "〜に比べて",
    "lv": "N2",
    "vi": "So với…",
    "ex": "昔に 比べて、 人と 直接 会って 話す 時間が 減りました。",
    "exVi": "So với ngày xưa, thời gian gặp trực tiếp và trò chuyện với mọi người đã giảm đi."
   },
   {
    "p": "〜にもかかわらず",
    "lv": "N2",
    "vi": "Mặc dù… nhưng…",
    "ex": "スマホが 便利に なったにもかかわらず、 さびしいと 感じる 人も います。",
    "exVi": "Mặc dù điện thoại đã trở nên tiện lợi, nhưng cũng có người cảm thấy cô đơn."
   }
  ],
  "quiz": [
   {
    "q": "昔に 比べて、 何が 減りましたか。",
    "options": [
     "人と 直接 会って 話す 時間が",
     "スマホを 使う 人が",
     "家族との 連絡が",
     "仕事の 時間が"
    ],
    "answer": 0,
    "explain": "Trong bài có nói so với ngày xưa, thời gian gặp trực tiếp và trò chuyện với mọi người đã giảm đi.",
    "evidence": "人と 直接 会って 話す 時間が 減りました",
    "tip": "Tìm câu có từ '昔'."
   },
   {
    "q": "スマホに 依存して しまうと、 どうなりますか。",
    "options": [
     "勉強や 仕事に 集中できなく なります",
     "家族との 会話が 増えます",
     "時間が たくさん できます",
     "友だちが 増えます"
    ],
    "answer": 0,
    "explain": "Trong bài có nói nếu phụ thuộc vào điện thoại, bạn sẽ không thể tập trung vào học tập hay công việc.",
    "evidence": "勉強や 仕事に 集中できなく なります",
    "tip": "Tìm câu về việc phụ thuộc vào điện thoại."
   }
  ]
 },
 {
  "id": "dk-n2-08",
  "img": "dk-n2-08.jpg",
  "audio": "dk-n2-08.mp3",
  "timings": [
   0.015,
   5.421,
   8.01,
   12.349,
   15.904,
   20.283,
   25.481,
   29.918,
   34.488,
   39.255,
   46.686
  ],
  "level": "N2",
  "title": "日本の 地方の くらし",
  "titleVi": "Cuộc sống ở vùng quê Nhật Bản",
  "sentences": [
   {
    "jp": "日本の 地方では、 東京と 違って、 ゆっくりした 生活が できます。",
    "furi": [
     [
      "日本",
      "にほん"
     ],
     [
      "の",
      null
     ],
     [
      " ",
      null
     ],
     [
      "地方",
      "ちほう"
     ],
     [
      "では",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "東京",
      "とうきょう"
     ],
     [
      "と",
      null
     ],
     [
      " ",
      null
     ],
     [
      "違",
      "ちが"
     ],
     [
      "って",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "ゆっくりした",
      null
     ],
     [
      " ",
      null
     ],
     [
      "生活",
      "せいかつ"
     ],
     [
      "が",
      null
     ],
     [
      " ",
      null
     ],
     [
      "できます",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Ở vùng quê Nhật Bản, khác với Tokyo, bạn có thể sống thong thả."
   },
   {
    "jp": "朝は 鳥の 声で 目が 覚めます。",
    "furi": [
     [
      "朝",
      "あさ"
     ],
     [
      "は",
      null
     ],
     [
      " ",
      null
     ],
     [
      "鳥",
      "とり"
     ],
     [
      "の",
      null
     ],
     [
      " ",
      null
     ],
     [
      "声",
      "こえ"
     ],
     [
      "で",
      null
     ],
     [
      " ",
      null
     ],
     [
      "目",
      "め"
     ],
     [
      "が",
      null
     ],
     [
      " ",
      null
     ],
     [
      "覚",
      "さ"
     ],
     [
      "めます",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Buổi sáng, tôi thức dậy với tiếng chim hót."
   },
   {
    "jp": "空気が きれいで、 夜は 星が とても きれいに 見えます。",
    "furi": [
     [
      "空気",
      "くうき"
     ],
     [
      "が",
      null
     ],
     [
      " ",
      null
     ],
     [
      "きれい",
      null
     ],
     [
      "で",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "夜",
      "よる"
     ],
     [
      "は",
      null
     ],
     [
      " ",
      null
     ],
     [
      "星",
      "ほし"
     ],
     [
      "が",
      null
     ],
     [
      " ",
      null
     ],
     [
      "とても",
      null
     ],
     [
      " ",
      null
     ],
     [
      "きれい",
      null
     ],
     [
      "に",
      null
     ],
     [
      " ",
      null
     ],
     [
      "見",
      "み"
     ],
     [
      "えます",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Không khí trong lành, ban đêm sao trông rất đẹp."
   },
   {
    "jp": "地方の やさいは しんせんで、 とても おいしいです。",
    "furi": [
     [
      "地方",
      "ちほう"
     ],
     [
      "の",
      null
     ],
     [
      " ",
      null
     ],
     [
      "やさい",
      null
     ],
     [
      "は",
      null
     ],
     [
      " ",
      null
     ],
     [
      "しんせん",
      null
     ],
     [
      "で",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "とても",
      null
     ],
     [
      " ",
      null
     ],
     [
      "おいしい",
      null
     ],
     [
      "です",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Rau ở vùng quê tươi ngon và rất ngon."
   },
   {
    "jp": "しかし、 地方の 生活には 不便な ことも あります。",
    "furi": [
     [
      "しかし",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "地方",
      "ちほう"
     ],
     [
      "の",
      null
     ],
     [
      " ",
      null
     ],
     [
      "生活",
      "せいかつ"
     ],
     [
      "に",
      null
     ],
     [
      "は",
      null
     ],
     [
      " ",
      null
     ],
     [
      "不便",
      "ふべん"
     ],
     [
      "な",
      null
     ],
     [
      " ",
      null
     ],
     [
      "こと",
      null
     ],
     [
      "も",
      null
     ],
     [
      " ",
      null
     ],
     [
      "あります",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Tuy nhiên, cuộc sống ở vùng quê cũng có những điều bất tiện."
   },
   {
    "jp": "電車の 本数が 少なくて、 車が ないと、 どこへも 行けません。",
    "furi": [
     [
      "電車",
      "でんしゃ"
     ],
     [
      "の",
      null
     ],
     [
      " ",
      null
     ],
     [
      "本数",
      "ほんすう"
     ],
     [
      "が",
      null
     ],
     [
      " ",
      null
     ],
     [
      "少",
      "すこ"
     ],
     [
      "なくて",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "車",
      "くるま"
     ],
     [
      "が",
      null
     ],
     [
      " ",
      null
     ],
     [
      "ない",
      null
     ],
     [
      "と",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "どこ",
      null
     ],
     [
      "へ",
      null
     ],
     [
      "も",
      null
     ],
     [
      " ",
      null
     ],
     [
      "行",
      "い"
     ],
     [
      "けません",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Số chuyến tàu ít, nếu không có xe hơi thì không thể đi đâu được."
   },
   {
    "jp": "若い 人が 少なくなって、 おとしよりが 多く なっています。",
    "furi": [
     [
      "若",
      "わか"
     ],
     [
      "い",
      null
     ],
     [
      " ",
      null
     ],
     [
      "人",
      "ひと"
     ],
     [
      "が",
      null
     ],
     [
      " ",
      null
     ],
     [
      "少",
      "すこ"
     ],
     [
      "なくなって",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "おとしより",
      null
     ],
     [
      "が",
      null
     ],
     [
      " ",
      null
     ],
     [
      "多",
      "おお"
     ],
     [
      "く",
      null
     ],
     [
      " ",
      null
     ],
     [
      "なって",
      null
     ],
     [
      "います",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Người trẻ ngày càng ít đi, người cao tuổi ngày càng nhiều."
   },
   {
    "jp": "時間が たつに したがって、 地方の 人口は 減って います。",
    "furi": [
     [
      "時間",
      "じかん"
     ],
     [
      "が",
      null
     ],
     [
      " ",
      null
     ],
     [
      "たつ",
      null
     ],
     [
      "に",
      null
     ],
     [
      " ",
      null
     ],
     [
      "したがって",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "地方",
      "ちほう"
     ],
     [
      "の",
      null
     ],
     [
      " ",
      null
     ],
     [
      "人口",
      "じんこう"
     ],
     [
      "は",
      null
     ],
     [
      " ",
      null
     ],
     [
      "減",
      "へ"
     ],
     [
      "って",
      null
     ],
     [
      " ",
      null
     ],
     [
      "います",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Theo thời gian trôi qua, dân số ở vùng quê đang giảm đi."
   },
   {
    "jp": "時代に おうじて、 地方の 生活も 少しずつ 変わって います。",
    "furi": [
     [
      "時代",
      "じだい"
     ],
     [
      "に",
      null
     ],
     [
      " ",
      null
     ],
     [
      "おうじて",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "地方",
      "ちほう"
     ],
     [
      "の",
      null
     ],
     [
      " ",
      null
     ],
     [
      "生活",
      "せいかつ"
     ],
     [
      "も",
      null
     ],
     [
      " ",
      null
     ],
     [
      "少",
      "すこ"
     ],
     [
      "しずつ",
      null
     ],
     [
      " ",
      null
     ],
     [
      "変",
      "か"
     ],
     [
      "わって",
      null
     ],
     [
      " ",
      null
     ],
     [
      "います",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Theo thời đại, cuộc sống vùng quê cũng đang thay đổi từng chút một."
   },
   {
    "jp": "それでも、 地方に 住む 人は、 となりの 人と 助け合って、 自然の 中で のんびり 暮らして います。",
    "furi": [
     [
      "それでも",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "地方",
      "ちほう"
     ],
     [
      "に",
      null
     ],
     [
      " ",
      null
     ],
     [
      "住",
      "す"
     ],
     [
      "む",
      null
     ],
     [
      " ",
      null
     ],
     [
      "人",
      "ひと"
     ],
     [
      "は",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "となり",
      null
     ],
     [
      "の",
      null
     ],
     [
      " ",
      null
     ],
     [
      "人",
      "ひと"
     ],
     [
      "と",
      null
     ],
     [
      " ",
      null
     ],
     [
      "助",
      "たす"
     ],
     [
      "け",
      null
     ],
     [
      "合",
      "あ"
     ],
     [
      "って",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "自然",
      "しぜん"
     ],
     [
      "の",
      null
     ],
     [
      " ",
      null
     ],
     [
      "中",
      "なか"
     ],
     [
      "で",
      null
     ],
     [
      " ",
      null
     ],
     [
      "のんびり",
      null
     ],
     [
      " ",
      null
     ],
     [
      "暮",
      "く"
     ],
     [
      "らして",
      null
     ],
     [
      " ",
      null
     ],
     [
      "います",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Dù vậy, những người sống ở vùng quê vẫn đang sống thong thả giữa thiên nhiên, giúp đỡ lẫn nhau với hàng xóm."
   },
   {
    "jp": "地方の 生活は、 お金では 買えない 豊かさが あると 思います。",
    "furi": [
     [
      "地方",
      "ちほう"
     ],
     [
      "の",
      null
     ],
     [
      " ",
      null
     ],
     [
      "生活",
      "せいかつ"
     ],
     [
      "は",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "お",
      null
     ],
     [
      "金",
      "かね"
     ],
     [
      "で",
      null
     ],
     [
      "は",
      null
     ],
     [
      " ",
      null
     ],
     [
      "買",
      "か"
     ],
     [
      "えない",
      null
     ],
     [
      " ",
      null
     ],
     [
      "豊",
      "ゆた"
     ],
     [
      "かさ",
      null
     ],
     [
      "が",
      null
     ],
     [
      " ",
      null
     ],
     [
      "ある",
      null
     ],
     [
      "と",
      null
     ],
     [
      " ",
      null
     ],
     [
      "思",
      "おも"
     ],
     [
      "います",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Tôi nghĩ cuộc sống ở vùng quê có sự giàu có mà tiền bạc không mua được."
   }
  ],
  "vocab": [
   {
    "w": "地方",
    "r": "ちほう",
    "hv": "ĐỊA PHƯƠNG",
    "vi": "Vùng quê, địa phương"
   },
   {
    "w": "自然",
    "r": "しぜん",
    "hv": "TỰ NHIÊN",
    "vi": "Thiên nhiên"
   },
   {
    "w": "不便",
    "r": "ふべん",
    "hv": "BẤT TIỆN",
    "vi": "Bất tiện"
   },
   {
    "w": "しんせん",
    "r": "しんせん",
    "hv": "TÂN TIÊN",
    "vi": "Tươi ngon"
   },
   {
    "w": "人口",
    "r": "じんこう",
    "hv": "NHÂN KHẨU",
    "vi": "Dân số"
   },
   {
    "w": "助け合う",
    "r": "たすけあう",
    "hv": "TRỢ HỢP",
    "vi": "Giúp đỡ lẫn nhau"
   }
  ],
  "grammar": [
   {
    "p": "〜にしたがって",
    "lv": "N2",
    "vi": "Theo… / cùng với… (thay đổi theo)",
    "ex": "時間が たつに したがって、 地方の 人口は 減って います。",
    "exVi": "Theo thời gian trôi qua, dân số ở vùng quê đang giảm đi."
   },
   {
    "p": "〜に応じて",
    "lv": "N2",
    "vi": "Tùy theo… / ứng với…",
    "ex": "時代に おうじて、 地方の 生活も 少しずつ 変わって います。",
    "exVi": "Theo thời đại, cuộc sống vùng quê cũng đang thay đổi từng chút một."
   }
  ],
  "quiz": [
   {
    "q": "地方の 生活の いい ところは 何ですか。",
    "options": [
     "となりの 人と 助け合って 暮らす ことです",
     "電車が たくさん あることです",
     "夜は 明るいことです",
     "買い物が 便利なことです"
    ],
    "answer": 0,
    "explain": "Trong bài có nói những người sống ở vùng quê giúp đỡ lẫn nhau với hàng xóm và sống thong thả giữa thiên nhiên.",
    "evidence": "となりの 人と 助け合って、 自然の 中で のんびり 暮らして います",
    "tip": "Tìm câu về cuộc sống ở vùng quê."
   },
   {
    "q": "時間が たつに したがって、 地方の 人口は どうなりますか。",
    "options": [
     "減って います",
     "増えて います",
     "変わりません",
     "多く なります"
    ],
    "answer": 0,
    "explain": "Trong bài có nói theo thời gian trôi qua, dân số ở vùng quê đang giảm đi.",
    "evidence": "時間が たつに したがって、 地方の 人口は 減って います",
    "tip": "Tìm câu về dân số ở vùng quê."
   }
  ]
 },
 {
  "id": "dk-n2-09",
  "img": "dk-n2-09.jpg",
  "audio": "dk-n2-09.mp3",
  "timings": [
   0.015,
   3.274,
   7.52,
   10.354,
   14.438,
   18.591,
   23.069,
   29.094,
   32.623,
   37.393,
   41.846
  ],
  "level": "N2",
  "title": "日本の花火大会",
  "titleVi": "Lễ hội pháo hoa Nhật Bản",
  "sentences": [
   {
    "jp": "日本の 夏には、 花火大会が あります。",
    "furi": [
     [
      "日本",
      "にほん"
     ],
     [
      "の",
      null
     ],
     [
      " ",
      null
     ],
     [
      "夏",
      "なつ"
     ],
     [
      "には",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "花火",
      "はなび"
     ],
     [
      "大",
      "たい"
     ],
     [
      "会",
      "かい"
     ],
     [
      "が",
      null
     ],
     [
      " ",
      null
     ],
     [
      "あります",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Mùa hè ở Nhật có lễ hội pháo hoa."
   },
   {
    "jp": "花火大会では、 夜空に 大きな 花火が さきます。",
    "furi": [
     [
      "花火",
      "はなび"
     ],
     [
      "大",
      "たい"
     ],
     [
      "会",
      "かい"
     ],
     [
      "では",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "夜空",
      "よぞら"
     ],
     [
      "に",
      null
     ],
     [
      " ",
      null
     ],
     [
      "大",
      "おお"
     ],
     [
      "きな",
      null
     ],
     [
      " ",
      null
     ],
     [
      "花火",
      "はなび"
     ],
     [
      "が",
      null
     ],
     [
      " ",
      null
     ],
     [
      "さきます",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Ở lễ hội pháo hoa, những bông pháo hoa lớn nở trên bầu trời đêm."
   },
   {
    "jp": "花火の 音は、 体に ひびきます。",
    "furi": [
     [
      "花火",
      "はなび"
     ],
     [
      "の",
      null
     ],
     [
      " ",
      null
     ],
     [
      "音",
      "おと"
     ],
     [
      "は",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "体",
      "からだ"
     ],
     [
      "に",
      null
     ],
     [
      " ",
      null
     ],
     [
      "ひびきます",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Tiếng pháo hoa vang dội trong cơ thể."
   },
   {
    "jp": "多くの 人が、 浴衣を 着て、 花火を 見ます。",
    "furi": [
     [
      "多",
      "おお"
     ],
     [
      "くの",
      null
     ],
     [
      " ",
      null
     ],
     [
      "人",
      "ひと"
     ],
     [
      "が",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "浴衣",
      "ゆかた"
     ],
     [
      "を",
      null
     ],
     [
      " ",
      null
     ],
     [
      "着",
      "き"
     ],
     [
      "て",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "花火",
      "はなび"
     ],
     [
      "を",
      null
     ],
     [
      " ",
      null
     ],
     [
      "見",
      "み"
     ],
     [
      "ます",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Nhiều người mặc yukata và xem pháo hoa."
   },
   {
    "jp": "花火大会の まわりには、 屋台が たくさん 出ます。",
    "furi": [
     [
      "花火",
      "はなび"
     ],
     [
      "大",
      "たい"
     ],
     [
      "会",
      "かい"
     ],
     [
      "の",
      null
     ],
     [
      " ",
      null
     ],
     [
      "まわり",
      null
     ],
     [
      "には",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "屋",
      "や"
     ],
     [
      "台",
      "たい"
     ],
     [
      "が",
      null
     ],
     [
      " ",
      null
     ],
     [
      "たくさん",
      null
     ],
     [
      " ",
      null
     ],
     [
      "出",
      "で"
     ],
     [
      "ます",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Xung quanh lễ hội pháo hoa có rất nhiều gian hàng."
   },
   {
    "jp": "屋台では、 たこやきや かきごおりを 食べることが できます。",
    "furi": [
     [
      "屋",
      "や"
     ],
     [
      "台",
      "たい"
     ],
     [
      "では",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "たこやき",
      null
     ],
     [
      "や",
      null
     ],
     [
      " ",
      null
     ],
     [
      "かきごおり",
      null
     ],
     [
      "を",
      null
     ],
     [
      " ",
      null
     ],
     [
      "食",
      "た"
     ],
     [
      "べることが",
      null
     ],
     [
      " ",
      null
     ],
     [
      "できます",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Ở các gian hàng, có thể ăn takoyaki và đá bào."
   },
   {
    "jp": "去年、 初めて 花火大会に 行ったのを きっかけに、 花火が 好きになりました。",
    "furi": [
     [
      "去年",
      "きょねん"
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "初",
      "はじ"
     ],
     [
      "めて",
      null
     ],
     [
      " ",
      null
     ],
     [
      "花火",
      "はなび"
     ],
     [
      "大",
      "たい"
     ],
     [
      "会",
      "かい"
     ],
     [
      "に",
      null
     ],
     [
      " ",
      null
     ],
     [
      "行",
      "い"
     ],
     [
      "ったのを",
      null
     ],
     [
      " ",
      null
     ],
     [
      "きっかけに",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "花火",
      "はなび"
     ],
     [
      "が",
      null
     ],
     [
      " ",
      null
     ],
     [
      "好",
      "す"
     ],
     [
      "きになりました",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Năm ngoái, từ lần đầu tiên đi xem lễ hội pháo hoa, tôi đã thích pháo hoa."
   },
   {
    "jp": "花火を 見ると、 子どもの ころを 思い出します。",
    "furi": [
     [
      "花火",
      "はなび"
     ],
     [
      "を",
      null
     ],
     [
      " ",
      null
     ],
     [
      "見",
      "み"
     ],
     [
      "ると",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "子",
      "こ"
     ],
     [
      "どもの",
      null
     ],
     [
      " ",
      null
     ],
     [
      "ころ",
      null
     ],
     [
      "を",
      null
     ],
     [
      " ",
      null
     ],
     [
      "思い出",
      "おもいで"
     ],
     [
      "します",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Khi xem pháo hoa, tôi nhớ lại thời thơ ấu."
   },
   {
    "jp": "花火大会は、 子どもに限らず、 大人も 楽しみます。",
    "furi": [
     [
      "花火",
      "はなび"
     ],
     [
      "大",
      "たい"
     ],
     [
      "会",
      "かい"
     ],
     [
      "は",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "子",
      "こ"
     ],
     [
      "ども",
      null
     ],
     [
      "に",
      null
     ],
     [
      "限",
      "かぎ"
     ],
     [
      "らず",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "大人",
      "おとな"
     ],
     [
      "も",
      null
     ],
     [
      " ",
      null
     ],
     [
      "楽",
      "たの"
     ],
     [
      "しみます",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Lễ hội pháo hoa không chỉ trẻ em mà người lớn cũng thích."
   },
   {
    "jp": "でも、 花火大会の 日は、 電車が とても 混みます。",
    "furi": [
     [
      "でも",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "花火",
      "はなび"
     ],
     [
      "大",
      "たい"
     ],
     [
      "会",
      "かい"
     ],
     [
      "の",
      null
     ],
     [
      " ",
      null
     ],
     [
      "日",
      "ひ"
     ],
     [
      "は",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "電車",
      "でんしゃ"
     ],
     [
      "が",
      null
     ],
     [
      " ",
      null
     ],
     [
      "とても",
      null
     ],
     [
      " ",
      null
     ],
     [
      "混",
      "こ"
     ],
     [
      "みます",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Nhưng vào ngày lễ hội pháo hoa, tàu điện rất đông."
   },
   {
    "jp": "来年も、 また 花火を 見に 行きたいです。",
    "furi": [
     [
      "来年",
      "らいねん"
     ],
     [
      "も",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "また",
      null
     ],
     [
      " ",
      null
     ],
     [
      "花火",
      "はなび"
     ],
     [
      "を",
      null
     ],
     [
      " ",
      null
     ],
     [
      "見",
      "み"
     ],
     [
      "に",
      null
     ],
     [
      " ",
      null
     ],
     [
      "行",
      "い"
     ],
     [
      "きたい",
      null
     ],
     [
      "です",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Năm sau tôi cũng muốn đi xem pháo hoa nữa."
   }
  ],
  "vocab": [
   {
    "w": "花火大会",
    "r": "はなびたいかい",
    "hv": "HOA HỎA ĐẠI HỘI",
    "vi": "Lễ hội pháo hoa"
   },
   {
    "w": "夜空",
    "r": "よぞら",
    "hv": "DẠ KHÔNG",
    "vi": "Bầu trời đêm"
   },
   {
    "w": "浴衣",
    "r": "ゆかた",
    "hv": "DỤC Y",
    "vi": "Áo yukata"
   },
   {
    "w": "屋台",
    "r": "やたい",
    "hv": "ỐC ĐÀI",
    "vi": "Gian hàng, quán ăn vỉa hè"
   },
   {
    "w": "きっかけ",
    "r": "きっかけ",
    "hv": null,
    "vi": "Dịp, cơ hội, lý do (bắt đầu)"
   },
   {
    "w": "混む",
    "r": "こむ",
    "hv": "HỖN",
    "vi": "Đông đúc, chật chội"
   }
  ],
  "grammar": [
   {
    "p": "〜をきっかけに",
    "lv": "N2",
    "vi": "Nhân dịp… / lấy… làm cơ hội…",
    "ex": "去年、 初めて 花火大会に 行ったのを きっかけに、 花火が 好きになりました。",
    "exVi": "Năm ngoái, từ lần đầu tiên đi xem lễ hội pháo hoa, tôi đã thích pháo hoa."
   },
   {
    "p": "〜に限らず",
    "lv": "N2",
    "vi": "Không chỉ… mà còn…",
    "ex": "花火大会は、 子どもに限らず、 大人も 楽しみます。",
    "exVi": "Lễ hội pháo hoa không chỉ trẻ em mà người lớn cũng thích."
   }
  ],
  "quiz": [
   {
    "q": "花火大会に 行ったのを きっかけに、 筆者は どうなりましたか。",
    "options": [
     "花火が 好きになりました",
     "花火が きらいになりました",
     "花火を こわがりました",
     "花火を 忘れました"
    ],
    "answer": 0,
    "explain": "Trong bài có nói từ lần đầu tiên đi xem lễ hội pháo hoa, tác giả đã thích pháo hoa.",
    "evidence": "花火大会に 行ったのを きっかけに、 花火が 好きになりました",
    "tip": "Tìm câu có 'きっかけに' trong bài."
   },
   {
    "q": "花火大会は、 だれが 楽しみますか。",
    "options": [
     "子どもに限らず、 大人も",
     "子どもだけ",
     "大人だけ",
     "外国人だけ"
    ],
    "answer": 0,
    "explain": "Trong bài có nói lễ hội pháo hoa không chỉ trẻ em mà người lớn cũng thích.",
    "evidence": "花火大会は、 子どもに限らず、 大人も 楽しみます",
    "tip": "Tìm câu có 'に限らず' trong bài."
   }
  ]
 },
 {
  "id": "dk-n2-10",
  "img": "dk-n2-10.jpg",
  "audio": "dk-n2-10.mp3",
  "timings": [
   0.015,
   2.587,
   6.908,
   11.774,
   18.131,
   22.303,
   28.972,
   33.15,
   38.002,
   43.232,
   50.419
  ],
  "level": "N2",
  "title": "日本語のことわざ",
  "titleVi": "Tục ngữ Nhật Bản",
  "sentences": [
   {
    "jp": "ことわざは、 短い 言葉です。",
    "furi": [
     [
      "ことわざ",
      null
     ],
     [
      "は",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "短",
      "みじか"
     ],
     [
      "い",
      null
     ],
     [
      " ",
      null
     ],
     [
      "言葉",
      "ことば"
     ],
     [
      "です",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Tục ngữ là những lời ngắn gọn."
   },
   {
    "jp": "ことわざは、 昔の 人の ちえを 伝える ものです。",
    "furi": [
     [
      "ことわざ",
      null
     ],
     [
      "は",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "昔",
      "むかし"
     ],
     [
      "の",
      null
     ],
     [
      " ",
      null
     ],
     [
      "人",
      "ひと"
     ],
     [
      "の",
      null
     ],
     [
      " ",
      null
     ],
     [
      "ちえ",
      null
     ],
     [
      "を",
      null
     ],
     [
      " ",
      null
     ],
     [
      "伝",
      "つた"
     ],
     [
      "える",
      null
     ],
     [
      " ",
      null
     ],
     [
      "ものです",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Tục ngữ truyền lại trí tuệ của người xưa."
   },
   {
    "jp": "たとえば、 「石の上にも三年」という ことわざが あります。",
    "furi": [
     [
      "たとえば",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "「",
      null
     ],
     [
      "石",
      "いし"
     ],
     [
      "の",
      null
     ],
     [
      "上",
      "うえ"
     ],
     [
      "にも",
      null
     ],
     [
      "三",
      "さん"
     ],
     [
      "年",
      "ねん"
     ],
     [
      "」",
      null
     ],
     [
      "という",
      null
     ],
     [
      " ",
      null
     ],
     [
      "ことわざ",
      null
     ],
     [
      "が",
      null
     ],
     [
      " ",
      null
     ],
     [
      "あります",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Ví dụ, có câu tục ngữ 'Ngồi trên đá ba năm cũng ấm'."
   },
   {
    "jp": "この ことわざは、 「辛くても、 がまんすれば、 やがて せいこうする」という 意味です。",
    "furi": [
     [
      "この",
      null
     ],
     [
      " ",
      null
     ],
     [
      "ことわざ",
      null
     ],
     [
      "は",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "「",
      null
     ],
     [
      "辛",
      "つら"
     ],
     [
      "くても",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "がまんすれば",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "やがて",
      null
     ],
     [
      " ",
      null
     ],
     [
      "せいこう",
      null
     ],
     [
      "する",
      null
     ],
     [
      "」",
      null
     ],
     [
      "という",
      null
     ],
     [
      " ",
      null
     ],
     [
      "意味",
      "いみ"
     ],
     [
      "です",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Câu tục ngữ này có nghĩa là 'Dù vất vả, nếu kiên nhẫn thì cuối cùng sẽ thành công'."
   },
   {
    "jp": "「七転び八起き」という ことわざも、 有名です。",
    "furi": [
     [
      "「",
      null
     ],
     [
      "七",
      "なな"
     ],
     [
      "転",
      "ころ"
     ],
     [
      "び",
      null
     ],
     [
      "八",
      "や"
     ],
     [
      "起",
      "お"
     ],
     [
      "き",
      null
     ],
     [
      "」",
      null
     ],
     [
      "という",
      null
     ],
     [
      " ",
      null
     ],
     [
      "ことわざ",
      null
     ],
     [
      "も",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "有名",
      "ゆうめい"
     ],
     [
      "です",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Câu tục ngữ 'Ngã bảy lần, đứng dậy tám lần' cũng rất nổi tiếng."
   },
   {
    "jp": "この ことわざは、 「何度 しっぱいしても、 あきらめないで、 また 進む」という 意味です。",
    "furi": [
     [
      "この",
      null
     ],
     [
      " ",
      null
     ],
     [
      "ことわざ",
      null
     ],
     [
      "は",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "「",
      null
     ],
     [
      "何",
      "なん"
     ],
     [
      "度",
      "ど"
     ],
     [
      " ",
      null
     ],
     [
      "しっぱい",
      null
     ],
     [
      "しても",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "あきらめないで",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "また",
      null
     ],
     [
      " ",
      null
     ],
     [
      "進",
      "すす"
     ],
     [
      "む",
      null
     ],
     [
      "」",
      null
     ],
     [
      "という",
      null
     ],
     [
      " ",
      null
     ],
     [
      "意味",
      "いみ"
     ],
     [
      "です",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Câu tục ngữ này có nghĩa là 'Dù thất bại bao nhiêu lần, đừng bỏ cuộc mà hãy tiến lên'."
   },
   {
    "jp": "ことわざは 短いといっても、 深い 意味が あります。",
    "furi": [
     [
      "ことわざ",
      null
     ],
     [
      "は",
      null
     ],
     [
      " ",
      null
     ],
     [
      "短",
      "みじか"
     ],
     [
      "いといっても",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "深",
      "ふか"
     ],
     [
      "い",
      null
     ],
     [
      " ",
      null
     ],
     [
      "意味",
      "いみ"
     ],
     [
      "が",
      null
     ],
     [
      " ",
      null
     ],
     [
      "あります",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Dù tục ngữ ngắn gọn nhưng vẫn có ý nghĩa sâu sắc."
   },
   {
    "jp": "ことわざを 知っていると、 日本人の 考え方が 分かります。",
    "furi": [
     [
      "ことわざ",
      null
     ],
     [
      "を",
      null
     ],
     [
      " ",
      null
     ],
     [
      "知",
      "し"
     ],
     [
      "っていると",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "日本人",
      "にほんじん"
     ],
     [
      "の",
      null
     ],
     [
      " ",
      null
     ],
     [
      "考",
      "かんが"
     ],
     [
      "え",
      null
     ],
     [
      "方",
      "かた"
     ],
     [
      "が",
      null
     ],
     [
      " ",
      null
     ],
     [
      "分",
      "わ"
     ],
     [
      "かります",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Biết tục ngữ thì sẽ hiểu được cách suy nghĩ của người Nhật."
   },
   {
    "jp": "ことわざは、 昔から 使われてきたからこそ、 今も 生きています。",
    "furi": [
     [
      "ことわざ",
      null
     ],
     [
      "は",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "昔",
      "むかし"
     ],
     [
      "から",
      null
     ],
     [
      " ",
      null
     ],
     [
      "使",
      "つか"
     ],
     [
      "われてきたからこそ",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "今",
      "いま"
     ],
     [
      "も",
      null
     ],
     [
      " ",
      null
     ],
     [
      "生",
      "い"
     ],
     [
      "きています",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Chính vì tục ngữ được dùng từ xưa nên đến nay vẫn còn sống mãi."
   },
   {
    "jp": "「急がば回れ」という ことわざは、 「急ぐときこそ、 ゆっくり 進むほうが いい」という 意味です。",
    "furi": [
     [
      "「",
      null
     ],
     [
      "急",
      "いそ"
     ],
     [
      "がば",
      null
     ],
     [
      "回",
      "まわ"
     ],
     [
      "れ",
      null
     ],
     [
      "」",
      null
     ],
     [
      "という",
      null
     ],
     [
      " ",
      null
     ],
     [
      "ことわざ",
      null
     ],
     [
      "は",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "「",
      null
     ],
     [
      "急",
      "いそ"
     ],
     [
      "ぐときこそ",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "ゆっくり",
      null
     ],
     [
      " ",
      null
     ],
     [
      "進",
      "すす"
     ],
     [
      "むほうが",
      null
     ],
     [
      " ",
      null
     ],
     [
      "いい",
      null
     ],
     [
      "」",
      null
     ],
     [
      "という",
      null
     ],
     [
      " ",
      null
     ],
     [
      "意味",
      "いみ"
     ],
     [
      "です",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Câu tục ngữ 'Dục tốc bất đạt' có nghĩa là 'Càng vội thì càng nên đi chậm lại'."
   },
   {
    "jp": "ことわざを 学ぶと、 日本語が もっと おもしろく なります。",
    "furi": [
     [
      "ことわざ",
      null
     ],
     [
      "を",
      null
     ],
     [
      " ",
      null
     ],
     [
      "学",
      "まな"
     ],
     [
      "ぶと",
      null
     ],
     [
      "、",
      null
     ],
     [
      " ",
      null
     ],
     [
      "日本語",
      "にほんご"
     ],
     [
      "が",
      null
     ],
     [
      " ",
      null
     ],
     [
      "もっと",
      null
     ],
     [
      " ",
      null
     ],
     [
      "おもしろく",
      null
     ],
     [
      " ",
      null
     ],
     [
      "なります",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Học tục ngữ thì tiếng Nhật sẽ càng thú vị hơn."
   }
  ],
  "vocab": [
   {
    "w": "意味",
    "r": "いみ",
    "hv": "Ý VỊ",
    "vi": "Ý nghĩa"
   },
   {
    "w": "ちえ",
    "r": "ちえ",
    "hv": "TRI HUỆ",
    "vi": "Trí tuệ, sự khôn ngoan"
   },
   {
    "w": "教訓",
    "r": "きょうくん",
    "hv": "GIÁO HUẤN",
    "vi": "Bài học (răn dạy)"
   },
   {
    "w": "伝える",
    "r": "つたえる",
    "hv": "TRUYỀN",
    "vi": "Truyền đạt, truyền lại"
   },
   {
    "w": "昔",
    "r": "むかし",
    "hv": "TÍCH",
    "vi": "Ngày xưa, thời xưa"
   },
   {
    "w": "せいこう",
    "r": "せいこう",
    "hv": "THÀNH CÔNG",
    "vi": "Thành công"
   }
  ],
  "grammar": [
   {
    "p": "〜といっても",
    "lv": "N2",
    "vi": "Dù nói là… nhưng…",
    "ex": "ことわざは 短いといっても、 深い 意味が あります。",
    "exVi": "Dù tục ngữ ngắn gọn nhưng vẫn có ý nghĩa sâu sắc."
   },
   {
    "p": "〜からこそ",
    "lv": "N2",
    "vi": "Chính vì… nên…",
    "ex": "ことわざは、 昔から 使われてきたからこそ、 今も 生きています。",
    "exVi": "Chính vì tục ngữ được dùng từ xưa nên đến nay vẫn còn sống mãi."
   }
  ],
  "quiz": [
   {
    "q": "「石の上にも三年」という ことわざは、 どういう 意味ですか。",
    "options": [
     "辛くても、 がまんすれば、 やがて せいこうする",
     "つらいときは、 すぐに やめる",
     "三年 石の 上に すわる",
     "石は 三年で できる"
    ],
    "answer": 0,
    "explain": "Trong bài có giải thích câu tục ngữ này nghĩa là dù vất vả, nếu kiên nhẫn thì cuối cùng sẽ thành công.",
    "evidence": "辛くても、 がまんすれば、 やがて せいこうする",
    "tip": "Tìm câu có '石の上にも三年' trong bài."
   },
   {
    "q": "ことわざは、 どうして 今も 生きていますか。",
    "options": [
     "昔から 使われてきたから",
     "新しいから",
     "長いから",
     "外国から 来たから"
    ],
    "answer": 0,
    "explain": "Trong bài có nói chính vì tục ngữ được dùng từ xưa nên đến nay vẫn còn sống mãi.",
    "evidence": "昔から 使われてきたからこそ、 今も 生きています",
    "tip": "Tìm câu có 'からこそ' trong bài."
   }
  ]
 },
 {
  "id": "dk-n1-01",
  "img": "dk-n1-01.jpg",
  "audio": "dk-n1-01.mp3",
  "timings": [
   0.015,
   7.523,
   14.913,
   22.162,
   30.365,
   38.708,
   44.94,
   50.895,
   58.75,
   65.427
  ],
  "level": "N1",
  "title": "手書きの手紙",
  "titleVi": "Thư viết tay",
  "sentences": [
   {
    "jp": "デジタル化が加速する現代において、手書きの手紙は衰退の一途をたどっていると言わざるを得ない。",
    "furi": [
     [
      "デジタル",
      null
     ],
     [
      "化",
      "か"
     ],
     [
      "が",
      null
     ],
     [
      "加速",
      "かそく"
     ],
     [
      "する",
      null
     ],
     [
      "現代",
      "げんだい"
     ],
     [
      "に",
      null
     ],
     [
      "おいて",
      null
     ],
     [
      "、",
      null
     ],
     [
      "手書",
      "てが"
     ],
     [
      "き",
      null
     ],
     [
      "の",
      null
     ],
     [
      "手紙",
      "てがみ"
     ],
     [
      "は",
      null
     ],
     [
      "衰退",
      "すいたい"
     ],
     [
      "の",
      null
     ],
     [
      "一途",
      "いちず"
     ],
     [
      "を",
      null
     ],
     [
      "たどって",
      null
     ],
     [
      "いる",
      null
     ],
     [
      "と",
      null
     ],
     [
      "言",
      "い"
     ],
     [
      "わざるを",
      null
     ],
     [
      "得",
      "え"
     ],
     [
      "ない",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Trong thời đại hiện nay khi quá trình số hóa đang tăng tốc, không thể không nói rằng những bức thư viết tay đang trên đà suy thoái liên tục."
   },
   {
    "jp": "しかし、文字はその人の人柄を如実に表すものであり、独特の温もりを宿している。",
    "furi": [
     [
      "しかし",
      null
     ],
     [
      "、",
      null
     ],
     [
      "文字",
      "もじ"
     ],
     [
      "は",
      null
     ],
     [
      "その",
      null
     ],
     [
      "人",
      "ひと"
     ],
     [
      "の",
      null
     ],
     [
      "人柄",
      "ひとがら"
     ],
     [
      "を",
      null
     ],
     [
      "如実",
      "にょじつ"
     ],
     [
      "に",
      null
     ],
     [
      "表",
      "あらわ"
     ],
     [
      "す",
      null
     ],
     [
      "もの",
      null
     ],
     [
      "で",
      null
     ],
     [
      "あり",
      null
     ],
     [
      "、",
      null
     ],
     [
      "独特",
      "どくとく"
     ],
     [
      "の",
      null
     ],
     [
      "温",
      "ぬく"
     ],
     [
      "もり",
      null
     ],
     [
      "を",
      null
     ],
     [
      "宿",
      "やど"
     ],
     [
      "して",
      null
     ],
     [
      "いる",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Tuy nhiên, chữ viết thể hiện rõ nét tính cách của một người và chứa đựng một sự ấm áp độc đáo."
   },
   {
    "jp": "画面越しに送られる無機質なフォントとは異なり、手書きには書き手の息遣いすら感じられる。",
    "furi": [
     [
      "画面",
      "がめん"
     ],
     [
      "越",
      "ご"
     ],
     [
      "し",
      null
     ],
     [
      "に",
      null
     ],
     [
      "送",
      "おく"
     ],
     [
      "られる",
      null
     ],
     [
      "無機質",
      "むきしつ"
     ],
     [
      "な",
      null
     ],
     [
      "フォント",
      null
     ],
     [
      "と",
      null
     ],
     [
      "は",
      null
     ],
     [
      "異",
      "こと"
     ],
     [
      "なり",
      null
     ],
     [
      "、",
      null
     ],
     [
      "手書",
      "てが"
     ],
     [
      "き",
      null
     ],
     [
      "には",
      null
     ],
     [
      "書",
      "か"
     ],
     [
      "き",
      null
     ],
     [
      "手",
      "て"
     ],
     [
      "の",
      null
     ],
     [
      "息遣",
      "いきづか"
     ],
     [
      "い",
      null
     ],
     [
      "すら",
      null
     ],
     [
      "感",
      "かん"
     ],
     [
      "じ",
      null
     ],
     [
      "られる",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Khác với những phông chữ vô tri được gửi qua màn hình, trong nét chữ viết tay, ta thậm chí có thể cảm nhận được cả hơi thở của người viết."
   },
   {
    "jp": "多忙な日々を過ごす中で、相手のために時間を割いて筆を執る行為は、至上の敬意と言えるだろう。",
    "furi": [
     [
      "多忙",
      "たぼう"
     ],
     [
      "な",
      null
     ],
     [
      "日々",
      "ひび"
     ],
     [
      "を",
      null
     ],
     [
      "過",
      "す"
     ],
     [
      "ごす",
      null
     ],
     [
      "中",
      "なか"
     ],
     [
      "で",
      null
     ],
     [
      "、",
      null
     ],
     [
      "相手",
      "あいて"
     ],
     [
      "の",
      null
     ],
     [
      "ため",
      null
     ],
     [
      "に",
      null
     ],
     [
      "時間",
      "じかん"
     ],
     [
      "を",
      null
     ],
     [
      "割",
      "さ"
     ],
     [
      "いて",
      null
     ],
     [
      "筆",
      "ふで"
     ],
     [
      "を",
      null
     ],
     [
      "執",
      "と"
     ],
     [
      "る",
      null
     ],
     [
      "行為",
      "こうい"
     ],
     [
      "は",
      null
     ],
     [
      "、",
      null
     ],
     [
      "至上",
      "しじょう"
     ],
     [
      "の",
      null
     ],
     [
      "敬意",
      "けいい"
     ],
     [
      "と",
      null
     ],
     [
      "言",
      "い"
     ],
     [
      "える",
      null
     ],
     [
      "だろう",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Trong khi trải qua những ngày bận rộn, hành động dành thời gian và cầm bút viết vì đối phương có thể được coi là sự tôn trọng cao nhất."
   },
   {
    "jp": "便箋や万年筆を選び、言葉を吟味する過程こそが、真の心の交流を可能にするのである。",
    "furi": [
     [
      "便箋",
      "びんせん"
     ],
     [
      "や",
      null
     ],
     [
      "万年筆",
      "まんねんひつ"
     ],
     [
      "を",
      null
     ],
     [
      "選",
      "えら"
     ],
     [
      "び",
      null
     ],
     [
      "、",
      null
     ],
     [
      "言葉",
      "ことば"
     ],
     [
      "を",
      null
     ],
     [
      "吟味",
      "ぎんみ"
     ],
     [
      "する",
      null
     ],
     [
      "過程",
      "かてい"
     ],
     [
      "こそ",
      null
     ],
     [
      "が",
      null
     ],
     [
      "、",
      null
     ],
     [
      "真",
      "しん"
     ],
     [
      "の",
      null
     ],
     [
      "心",
      "こころ"
     ],
     [
      "の",
      null
     ],
     [
      "交流",
      "こうりゅう"
     ],
     [
      "を",
      null
     ],
     [
      "可能",
      "かのう"
     ],
     [
      "に",
      null
     ],
     [
      "する",
      null
     ],
     [
      "の",
      null
     ],
     [
      "である",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Chính quá trình chọn giấy viết thư, bút máy và cân nhắc kỹ lưỡng ngôn từ mới là điều giúp cho sự giao lưu tâm hồn thực sự trở nên khả thi."
   },
   {
    "jp": "たとえ字が拙くても、そこに込められた真心を否定することは誰にもできまい。",
    "furi": [
     [
      "たとえ",
      null
     ],
     [
      "字",
      "じ"
     ],
     [
      "が",
      null
     ],
     [
      "拙",
      "つたな"
     ],
     [
      "くても",
      null
     ],
     [
      "、",
      null
     ],
     [
      "そこ",
      null
     ],
     [
      "に",
      null
     ],
     [
      "込",
      "こ"
     ],
     [
      "められた",
      null
     ],
     [
      "真心",
      "まごころ"
     ],
     [
      "を",
      null
     ],
     [
      "否定",
      "ひてい"
     ],
     [
      "する",
      null
     ],
     [
      "こと",
      null
     ],
     [
      "は",
      null
     ],
     [
      "誰",
      "だれ"
     ],
     [
      "に",
      null
     ],
     [
      "も",
      null
     ],
     [
      "できまい",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Dẫu cho chữ viết có vụng về đi chăng nữa, không ai có thể phủ nhận được tấm lòng chân thành được gửi gắm vào đó."
   },
   {
    "jp": "受け取った手紙を読み返すたびに、当時の記憶が鮮やかによみがえってくる。",
    "furi": [
     [
      "受",
      "う"
     ],
     [
      "け",
      null
     ],
     [
      "取",
      "と"
     ],
     [
      "った",
      null
     ],
     [
      "手紙",
      "てがみ"
     ],
     [
      "を",
      null
     ],
     [
      "読",
      "よ"
     ],
     [
      "み",
      null
     ],
     [
      "返",
      "かえ"
     ],
     [
      "す",
      null
     ],
     [
      "たびに",
      null
     ],
     [
      "、",
      null
     ],
     [
      "当時",
      "とうじ"
     ],
     [
      "の",
      null
     ],
     [
      "記憶",
      "きおく"
     ],
     [
      "が",
      null
     ],
     [
      "鮮",
      "あざ"
     ],
     [
      "やかに",
      null
     ],
     [
      "よみがえってくる",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Mỗi khi đọc lại bức thư đã nhận, ký ức của thời điểm đó lại ùa về một cách sống động."
   },
   {
    "jp": "効率性が最優先される世の中だからこそ、私たちは手書きの価値を再認識すべきではないか。",
    "furi": [
     [
      "効率",
      "こうりつ"
     ],
     [
      "性",
      "せい"
     ],
     [
      "が",
      null
     ],
     [
      "最優先",
      "さいゆうせん"
     ],
     [
      "される",
      null
     ],
     [
      "世の中",
      "よのなか"
     ],
     [
      "だからこそ",
      null
     ],
     [
      "、",
      null
     ],
     [
      "私",
      "わたし"
     ],
     [
      "たち",
      null
     ],
     [
      "は",
      null
     ],
     [
      "手書",
      "てが"
     ],
     [
      "き",
      null
     ],
     [
      "の",
      null
     ],
     [
      "価値",
      "かち"
     ],
     [
      "を",
      null
     ],
     [
      "再認識",
      "さいにんしき"
     ],
     [
      "すべき",
      null
     ],
     [
      "ではないか",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Chính vì đang ở trong một thế giới nơi tính hiệu quả được ưu tiên hàng đầu, chẳng phải chúng ta nên nhận thức lại giá trị của việc viết tay hay sao?"
   },
   {
    "jp": "手紙を書く習慣を続けることは、自分の心と向き合う時間を持つことでもある。",
    "furi": [
     [
      "手紙",
      "てがみ"
     ],
     [
      "を",
      null
     ],
     [
      "書",
      "か"
     ],
     [
      "く",
      null
     ],
     [
      "習慣",
      "しゅうかん"
     ],
     [
      "を",
      null
     ],
     [
      "続",
      "つづ"
     ],
     [
      "ける",
      null
     ],
     [
      "こと",
      null
     ],
     [
      "は",
      null
     ],
     [
      "、",
      null
     ],
     [
      "自分",
      "じぶん"
     ],
     [
      "の",
      null
     ],
     [
      "心",
      "こころ"
     ],
     [
      "と",
      null
     ],
     [
      "向",
      "む"
     ],
     [
      "き",
      null
     ],
     [
      "合",
      "あ"
     ],
     [
      "う",
      null
     ],
     [
      "時間",
      "じかん"
     ],
     [
      "を",
      null
     ],
     [
      "持",
      "も"
     ],
     [
      "つ",
      null
     ],
     [
      "こと",
      null
     ],
     [
      "で",
      null
     ],
     [
      "も",
      null
     ],
     [
      "ある",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Duy trì thói quen viết thư cũng là dành thời gian đối diện với lòng mình."
   },
   {
    "jp": "たまにはスマホを置き、大切な誰かへと思いをつづってみるのも一興である。",
    "furi": [
     [
      "たまには",
      null
     ],
     [
      "スマホ",
      null
     ],
     [
      "を",
      null
     ],
     [
      "置",
      "お"
     ],
     [
      "き",
      null
     ],
     [
      "、",
      null
     ],
     [
      "大切",
      "たいせつ"
     ],
     [
      "な",
      null
     ],
     [
      "誰",
      "だれ"
     ],
     [
      "か",
      null
     ],
     [
      "へ",
      null
     ],
     [
      "と",
      null
     ],
     [
      "思",
      "おも"
     ],
     [
      "い",
      null
     ],
     [
      "を",
      null
     ],
     [
      "つづってみる",
      null
     ],
     [
      "の",
      null
     ],
     [
      "も",
      null
     ],
     [
      "一興",
      "いっきょう"
     ],
     [
      "である",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Thỉnh thoảng, đặt chiếc điện thoại xuống và thử gửi gắm tâm tư đến một người quan trọng nào đó cũng là một điều thú vị."
   }
  ],
  "vocab": [
   {
    "w": "衰退",
    "r": "すいたい",
    "hv": "SUY THOÁI",
    "vi": "suy thoái, sa sút"
   },
   {
    "w": "人柄",
    "r": "ひとがら",
    "hv": "NHÂN BÍNH",
    "vi": "nhân cách, tính cách"
   },
   {
    "w": "如実",
    "r": "じょじつ",
    "hv": "NHƯ THỰC",
    "vi": "như thật, rõ nét"
   },
   {
    "w": "吟味",
    "r": "ぎんみ",
    "hv": "NGÂM VỊ",
    "vi": "xem xét kỹ lưỡng, chọn lọc"
   },
   {
    "w": "拙い",
    "r": "つたない",
    "hv": "CHUYẾT",
    "vi": "vụng về, kém cỏi"
   },
   {
    "w": "一興",
    "r": "いっきょう",
    "hv": "NHẤT HƯNG",
    "vi": "một điều thú vị, một niềm vui"
   }
  ],
  "grammar": [
   {
    "p": "V-ない + ざるをえない",
    "lv": "N3",
    "vi": "Không thể không / Buộc phải...",
    "ex": "衰退の一途をたどっていると言わざるを得ない。",
    "exVi": "Không thể không nói rằng nó đang trên đà suy thoái liên tục."
   },
   {
    "p": "〜たびに",
    "lv": "N3",
    "vi": "Mỗi khi / Mỗi lần...",
    "ex": "受け取った手紙を読み返すたびに、当時の記憶が鮮やかによみがえってくる。",
    "exVi": "Mỗi khi đọc lại bức thư đã nhận, ký ức của thời điểm đó lại ùa về một cách sống động."
   }
  ],
  "quiz": [
   {
    "q": "筆者は、手書きの手紙についてどのように考えていますか。",
    "options": [
     "デジタル化によって完全に消滅した文化である。",
     "効率が悪いため、現代では避けるべき行為である。",
     "書き手の温もりや人柄が伝わる貴重なものである。",
     "文字が下手な人は書かないほうがよいものである。"
    ],
    "answer": 2,
    "explain": "Tác giả nhấn mạnh rằng chữ viết tay thể hiện tính cách và chứa đựng sự ấm áp độc đáo của người viết.",
    "evidence": "文字はその人の人柄を如実に表すものであり、独特の温もりを宿している",
    "tip": "Tìm các từ khóa liên quan đến cảm xúc và giá trị tinh thần như '人柄' (nhân cách) và '温もり' (sự ấm áp)."
   },
   {
    "q": "本文の内容と合致するものはどれですか。",
    "options": [
     "デジタルのフォントでも書き手の息遣いを感じることができる。",
     "多忙な中で手紙を書くことは、相手への深い敬意の表れである。",
     "手紙の内容よりも、便箋の質が心の交流において最も重要である。",
     "手書きの手紙は読み返すのが難しいため、記憶に残りにくい。"
    ],
    "answer": 1,
    "explain": "Tác giả khẳng định việc dành thời gian viết thư giữa bộn bề cuộc sống là một sự tôn trọng cao nhất dành cho đối phương.",
    "evidence": "相手のために時間を割いて筆を執る行為は、至上の敬意と言えるだろう",
    "tip": "Chú ý câu khẳng định về hành động '時間を割いて筆を執る' (dành thời gian cầm bút) tương ứng với '敬意' (sự tôn trọng)."
   }
  ]
 },
 {
  "id": "dk-n1-02",
  "img": "dk-n1-02.jpg",
  "audio": "dk-n1-02.mp3",
  "timings": [
   0.015,
   7.314,
   14.48,
   22.873,
   30.697,
   38.555,
   46.432,
   53.05,
   59.395,
   65.374,
   71.953,
   78.07,
   84.632,
   90.568
  ],
  "level": "N1",
  "title": "俳句と季節",
  "titleVi": "Thơ haiku và bốn mùa",
  "sentences": [
   {
    "jp": "俳句は、わずか十七音の中に森羅万象を凝縮させる日本独自の短詩である。",
    "furi": [
     [
      "俳句",
      "はいく"
     ],
     [
      "は",
      null
     ],
     [
      "、",
      null
     ],
     [
      "わずか",
      null
     ],
     [
      "十七音",
      "じゅうしちおん"
     ],
     [
      "の",
      null
     ],
     [
      "中",
      "なか"
     ],
     [
      "に",
      null
     ],
     [
      "森羅万象",
      "しんらばんしょう"
     ],
     [
      "を",
      null
     ],
     [
      "凝縮",
      "ぎょうしゅく"
     ],
     [
      "させる",
      null
     ],
     [
      "日本",
      "にほん"
     ],
     [
      "独自",
      "どくじ"
     ],
     [
      "の",
      null
     ],
     [
      "短詩",
      "たんし"
     ],
     [
      "である",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Haiku là một thể thơ ngắn độc đáo của Nhật Bản, cô đọng cả vạn vật trong vũ trụ chỉ trong mười bảy âm tiết."
   },
   {
    "jp": "その根幹を成すのは「季語」であり、特定の季節を象徴する言葉が不可欠とされる。",
    "furi": [
     [
      "その",
      null
     ],
     [
      "根幹",
      "こんかん"
     ],
     [
      "を",
      null
     ],
     [
      "成",
      "な"
     ],
     [
      "すのは",
      null
     ],
     [
      "「",
      null
     ],
     [
      "季語",
      "きご"
     ],
     [
      "」",
      null
     ],
     [
      "であり",
      null
     ],
     [
      "、",
      null
     ],
     [
      "特定",
      "とくてい"
     ],
     [
      "の",
      null
     ],
     [
      "季節",
      "きせつ"
     ],
     [
      "を",
      null
     ],
     [
      "象徴",
      "しょうちょう"
     ],
     [
      "する",
      null
     ],
     [
      "言葉",
      "ことば"
     ],
     [
      "が",
      null
     ],
     [
      "不可欠",
      "ふかけつ"
     ],
     [
      "と",
      null
     ],
     [
      "される",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Cốt lõi của nó chính là 'Kigo' (từ chỉ mùa), và những từ ngữ biểu trưng cho một mùa cụ thể được coi là không thể thiếu."
   },
   {
    "jp": "例えば、春ならば「桜」や「おぼろ月」が、生命の息吹や情緒を鮮やかに描き出す。",
    "furi": [
     [
      "例",
      "たと"
     ],
     [
      "えば",
      null
     ],
     [
      "、",
      null
     ],
     [
      "春",
      "はる"
     ],
     [
      "ならば",
      null
     ],
     [
      "「",
      null
     ],
     [
      "桜",
      "さくら"
     ],
     [
      "」",
      null
     ],
     [
      "や",
      null
     ],
     [
      "「",
      null
     ],
     [
      "おぼろ",
      null
     ],
     [
      "月",
      "つき"
     ],
     [
      "」",
      null
     ],
     [
      "が",
      null
     ],
     [
      "、",
      null
     ],
     [
      "生命",
      "せいめい"
     ],
     [
      "の",
      null
     ],
     [
      "息吹",
      "いぶき"
     ],
     [
      "や",
      null
     ],
     [
      "情緒",
      "じょうちょ"
     ],
     [
      "を",
      null
     ],
     [
      "鮮",
      "あざ"
     ],
     [
      "やかに",
      null
     ],
     [
      "描",
      "えが"
     ],
     [
      "き",
      null
     ],
     [
      "出",
      "だ"
     ],
     [
      "す",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Ví dụ, nếu là mùa xuân, những từ như 'hoa anh đào' hay 'trăng mờ' sẽ khắc họa sinh động hơi thở và cảm xúc của sự sống."
   },
   {
    "jp": "夏には「せみしぐれ」や「夕立」といった言葉が、烈日や一時の涼を想起させる。",
    "furi": [
     [
      "夏",
      "なつ"
     ],
     [
      "に",
      null
     ],
     [
      "は",
      null
     ],
     [
      "「",
      null
     ],
     [
      "せみしぐれ",
      null
     ],
     [
      "」",
      null
     ],
     [
      "や",
      null
     ],
     [
      "「",
      null
     ],
     [
      "夕立",
      "ゆうだち"
     ],
     [
      "」",
      null
     ],
     [
      "といった",
      null
     ],
     [
      "言葉",
      "ことば"
     ],
     [
      "が",
      null
     ],
     [
      "、",
      null
     ],
     [
      "烈日",
      "れつじつ"
     ],
     [
      "や",
      null
     ],
     [
      "一時",
      "いちじ"
     ],
     [
      "の",
      null
     ],
     [
      "涼",
      "りょう"
     ],
     [
      "を",
      null
     ],
     [
      "想起",
      "そうき"
     ],
     [
      "させる",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Vào mùa hè, những từ như 'tiếng ve kêu râm ran' hay 'mưa rào ban chiều' gợi nhớ đến cái nắng gay gắt hay sự mát mẻ nhất thời."
   },
   {
    "jp": "秋の「野分」や「月」は、万物の衰退や静寂に伴う哀愁を深く漂わせる。",
    "furi": [
     [
      "秋",
      "あき"
     ],
     [
      "の",
      null
     ],
     [
      "「",
      null
     ],
     [
      "野分",
      "のわき"
     ],
     [
      "」",
      null
     ],
     [
      "や",
      null
     ],
     [
      "「",
      null
     ],
     [
      "月",
      "つき"
     ],
     [
      "」",
      null
     ],
     [
      "は",
      null
     ],
     [
      "、",
      null
     ],
     [
      "万物",
      "ばんぶつ"
     ],
     [
      "の",
      null
     ],
     [
      "衰退",
      "すいたい"
     ],
     [
      "や",
      null
     ],
     [
      "静寂",
      "せいじゃく"
     ],
     [
      "に",
      null
     ],
     [
      "伴",
      "ともな"
     ],
     [
      "う",
      null
     ],
     [
      "哀愁",
      "あいしゅう"
     ],
     [
      "を",
      null
     ],
     [
      "深",
      "ふか"
     ],
     [
      "く",
      null
     ],
     [
      "漂",
      "ただよ"
     ],
     [
      "わせる",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Những từ như 'gió bão mùa thu' hay 'trăng' của mùa thu lại tỏa ra nỗi sầu muộn sâu sắc đi kèm với sự suy tàn và tĩnh lặng của vạn vật."
   },
   {
    "jp": "そして冬、凍てつく空気を表す「枯野」や「雪」が、厳粛な情景を提示する。",
    "furi": [
     [
      "そして",
      null
     ],
     [
      "冬",
      "ふゆ"
     ],
     [
      "、",
      null
     ],
     [
      "凍",
      "い"
     ],
     [
      "てつく",
      null
     ],
     [
      "空気",
      "くうき"
     ],
     [
      "を",
      null
     ],
     [
      "表",
      "あらわ"
     ],
     [
      "す",
      null
     ],
     [
      "「",
      null
     ],
     [
      "枯野",
      "かれの"
     ],
     [
      "」",
      null
     ],
     [
      "や",
      null
     ],
     [
      "「",
      null
     ],
     [
      "雪",
      "ゆき"
     ],
     [
      "」",
      null
     ],
     [
      "が",
      null
     ],
     [
      "、",
      null
     ],
     [
      "厳粛",
      "げんしゅく"
     ],
     [
      "な",
      null
     ],
     [
      "情景",
      "じょうけい"
     ],
     [
      "を",
      null
     ],
     [
      "提示",
      "ていじ"
     ],
     [
      "する",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Và mùa đông, những từ như 'cánh đồng khô héo' hay 'tuyết' biểu thị bầu không khí băng giá, đưa ra những khung cảnh trang nghiêm."
   },
   {
    "jp": "日本人は古来、自然の移ろいに敏感であり、それを十七音に託してきた。",
    "furi": [
     [
      "日本",
      "にほん"
     ],
     [
      "人",
      "じん"
     ],
     [
      "は",
      null
     ],
     [
      "古来",
      "こらい"
     ],
     [
      "、",
      null
     ],
     [
      "自然",
      "しぜん"
     ],
     [
      "の",
      null
     ],
     [
      "移",
      "うつ"
     ],
     [
      "ろいに",
      null
     ],
     [
      "敏感",
      "びんかん"
     ],
     [
      "であり",
      null
     ],
     [
      "、",
      null
     ],
     [
      "それ",
      null
     ],
     [
      "を",
      null
     ],
     [
      "十七音",
      "じゅうしちおん"
     ],
     [
      "に",
      null
     ],
     [
      "託",
      "たく"
     ],
     [
      "してきた",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Từ xưa, người Nhật đã nhạy cảm với sự chuyển mình của thiên nhiên và đã gửi gắm điều đó vào mười bảy âm tiết."
   },
   {
    "jp": "季語は単なる記号ではなく、詠み手の感性と季節が響き合う接点である。",
    "furi": [
     [
      "季語",
      "きご"
     ],
     [
      "は",
      null
     ],
     [
      "単",
      "たん"
     ],
     [
      "なる",
      null
     ],
     [
      "記号",
      "きごう"
     ],
     [
      "ではなく",
      null
     ],
     [
      "、",
      null
     ],
     [
      "詠",
      "よ"
     ],
     [
      "み",
      null
     ],
     [
      "手",
      "て"
     ],
     [
      "の",
      null
     ],
     [
      "感性",
      "かんせい"
     ],
     [
      "と",
      null
     ],
     [
      "季節",
      "きせつ"
     ],
     [
      "が",
      null
     ],
     [
      "響",
      "ひび"
     ],
     [
      "き",
      null
     ],
     [
      "合",
      "あ"
     ],
     [
      "う",
      null
     ],
     [
      "接点",
      "せってん"
     ],
     [
      "である",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Kigo không đơn thuần là một ký hiệu, mà là điểm tiếp xúc nơi cảm nhận của người làm thơ và mùa tiết cùng vang vọng."
   },
   {
    "jp": "現代社会において、自然との接点が希薄になりつつあるのは否めない。",
    "furi": [
     [
      "現代",
      "げんだい"
     ],
     [
      "社会",
      "しゃかい"
     ],
     [
      "において",
      null
     ],
     [
      "、",
      null
     ],
     [
      "自然",
      "しぜん"
     ],
     [
      "との",
      null
     ],
     [
      "接点",
      "せってん"
     ],
     [
      "が",
      null
     ],
     [
      "希薄",
      "きはく"
     ],
     [
      "になりつつある",
      null
     ],
     [
      "のは",
      null
     ],
     [
      "否",
      "いな"
     ],
     [
      "めない",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Trong xã hội hiện đại, không thể phủ nhận rằng mối liên kết với thiên nhiên đang dần trở nên mờ nhạt."
   },
   {
    "jp": "しかし、俳句をたしなむことは、失われかけた季節感を取り戻す契機となる。",
    "furi": [
     [
      "しかし",
      null
     ],
     [
      "、",
      null
     ],
     [
      "俳句",
      "はいく"
     ],
     [
      "を",
      null
     ],
     [
      "たしなむ",
      null
     ],
     [
      "ことは",
      null
     ],
     [
      "、",
      null
     ],
     [
      "失",
      "うしな"
     ],
     [
      "われかけた",
      null
     ],
     [
      "季節感",
      "きせつかん"
     ],
     [
      "を",
      null
     ],
     [
      "取",
      "と"
     ],
     [
      "り",
      null
     ],
     [
      "戻",
      "もど"
     ],
     [
      "す",
      null
     ],
     [
      "契機",
      "けいき"
     ],
     [
      "となる",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Tuy nhiên, việc thưởng thức haiku sẽ trở thành cơ hội để lấy lại cảm thức về mùa màng vốn đang dần mất đi."
   },
   {
    "jp": "日常のささいな変化に目を向ければ、世界は無限の広がりを見せるだろう。",
    "furi": [
     [
      "日常",
      "にちじょう"
     ],
     [
      "の",
      null
     ],
     [
      "ささいな",
      null
     ],
     [
      "変化",
      "へんか"
     ],
     [
      "に",
      null
     ],
     [
      "目",
      "め"
     ],
     [
      "を",
      null
     ],
     [
      "向",
      "む"
     ],
     [
      "ければ",
      null
     ],
     [
      "、",
      null
     ],
     [
      "世界",
      "せかい"
     ],
     [
      "は",
      null
     ],
     [
      "無限",
      "むげん"
     ],
     [
      "の",
      null
     ],
     [
      "広",
      "ひろ"
     ],
     [
      "がりを",
      null
     ],
     [
      "見",
      "み"
     ],
     [
      "せるだろう",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Nếu hướng mắt vào những thay đổi nhỏ nhặt của thường nhật, thế giới chắc hẳn sẽ cho ta thấy sự mở rộng vô tận."
   },
   {
    "jp": "伝統を守りつつ、新しい感性で季語を解釈することもまた重要である。",
    "furi": [
     [
      "伝統",
      "でんとう"
     ],
     [
      "を",
      null
     ],
     [
      "守",
      "まも"
     ],
     [
      "りつつ",
      null
     ],
     [
      "、",
      null
     ],
     [
      "新",
      "あたら"
     ],
     [
      "しい",
      null
     ],
     [
      "感性",
      "かんせい"
     ],
     [
      "で",
      null
     ],
     [
      "季語",
      "きご"
     ],
     [
      "を",
      null
     ],
     [
      "解釈",
      "かいしゃく"
     ],
     [
      "する",
      null
     ],
     [
      "こともまた",
      null
     ],
     [
      "重要",
      "じゅうよう"
     ],
     [
      "である",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Vừa giữ gìn truyền thống, vừa giải thích Kigo bằng những cảm nhận mới mẻ cũng là một điều quan trọng."
   },
   {
    "jp": "言葉の響きを通して、移ろう四季の美しさを次世代へつないでいきたい。",
    "furi": [
     [
      "言葉",
      "ことば"
     ],
     [
      "の",
      null
     ],
     [
      "響",
      "ひび"
     ],
     [
      "きを",
      null
     ],
     [
      "通",
      "とお"
     ],
     [
      "して",
      null
     ],
     [
      "、",
      null
     ],
     [
      "移",
      "うつ"
     ],
     [
      "ろう",
      null
     ],
     [
      "四季",
      "しき"
     ],
     [
      "の",
      null
     ],
     [
      "美",
      "うつく"
     ],
     [
      "しさを",
      null
     ],
     [
      "次世代",
      "じせだい"
     ],
     [
      "へ",
      null
     ],
     [
      "つないで",
      null
     ],
     [
      "いきたい",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Thông qua dư vang của từ ngữ, tôi muốn kết nối vẻ đẹp của bốn mùa luân chuyển đến các thế hệ mai sau."
   },
   {
    "jp": "俳句という小宇宙には、日本人の精神性が今もなお息づいている。",
    "furi": [
     [
      "俳句",
      "はいく"
     ],
     [
      "という",
      null
     ],
     [
      "小宇宙",
      "しょううちゅう"
     ],
     [
      "に",
      null
     ],
     [
      "は",
      null
     ],
     [
      "、",
      null
     ],
     [
      "日本人",
      "にほんじん"
     ],
     [
      "の",
      null
     ],
     [
      "精神",
      "せいしん"
     ],
     [
      "性",
      "せい"
     ],
     [
      "が",
      null
     ],
     [
      "今",
      "いま"
     ],
     [
      "もなお",
      null
     ],
     [
      "息",
      "いき"
     ],
     [
      "づいている",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Trong tiểu vũ trụ mang tên haiku ấy, tinh thần của người Nhật cho đến nay vẫn luôn hiện hữu đầy sức sống."
   }
  ],
  "vocab": [
   {
    "w": "森羅万象",
    "r": "しんらばんしょう",
    "hv": "SÂM LA VẠN TƯỢNG",
    "vi": "vạn vật trong vũ trụ"
   },
   {
    "w": "根幹",
    "r": "こんかん",
    "hv": "CĂN CÁN",
    "vi": "cốt lõi, nền tảng"
   },
   {
    "w": "不可欠",
    "r": "ふかけつ",
    "hv": "BẤT KHẢ KHIẾM",
    "vi": "không thể thiếu"
   },
   {
    "w": "想起",
    "r": "そうき",
    "hv": "TƯỞNG KHỞI",
    "vi": "nhớ lại, gợi nhớ"
   },
   {
    "w": "希薄",
    "r": "きはく",
    "hv": "HY BẠC",
    "vi": "mờ nhạt, loãng"
   },
   {
    "w": "たしなむ",
    "r": "たしなむ",
    "hv": null,
    "vi": "Thưởng thức, yêu thích (một thú vui tao nhã)"
   }
  ],
  "grammar": [
   {
    "p": "〜において",
    "lv": "N2",
    "vi": "Ở, tại, trong (bối cảnh, địa điểm, lĩnh vực)",
    "ex": "現代社会において、自然との接点が希薄になりつつあるのは否めない。",
    "exVi": "Trong xã hội hiện đại, không thể phủ nhận rằng mối liên kết với thiên nhiên đang dần trở nên mờ nhạt."
   },
   {
    "p": "V-ます + つつある",
    "lv": "N3",
    "vi": "Đang dần dần (diễn tả một sự thay đổi đang tiếp diễn)",
    "ex": "現代社会において、自然との接点が希薄になりつつあるのは否めない。",
    "exVi": "Trong xã hội hiện đại, không thể phủ nhận rằng mối liên kết với thiên nhiên đang dần trở nên mờ nhạt."
   }
  ],
  "quiz": [
   {
    "q": "俳句において「季語」はどのような存在だと述べられていますか。",
    "options": [
     "単なる言葉の記号にすぎない存在",
     "生命の息吹を止めてしまう存在",
     "詠み手の感性と季節が響き合う接点",
     "伝統を壊して新たな世界を作る道具"
    ],
    "answer": 2,
    "explain": "Trong bài văn có đoạn nói rằng Kigo không chỉ là ký hiệu mà là điểm tiếp xúc nơi cảm xúc người làm thơ và mùa tiết hòa quyện.",
    "evidence": "詠み手の感性と季節が響き合う接点である",
    "tip": "Tìm câu định nghĩa về 季語 trong đoạn giữa của bài."
   },
   {
    "q": "筆者は、現代社会で俳句をたしなむことにどのような意義があると考えていますか。",
    "options": [
     "新しい言葉の記号を大量に作る契機になる",
     "失われかけた季節感を取り戻す契機になる",
     "自然との接点を完全に断ち切る契機になる",
     "次世代の精神性を否定する契機になる"
    ],
    "answer": 1,
    "explain": "Tác giả cho rằng việc thưởng thức haiku là cơ hội để lấy lại cảm thức về mùa màng đang dần bị mất đi trong xã hội hiện đại.",
    "evidence": "失われかけた季節感を取り戻す契機となる",
    "tip": "Tìm từ khóa 契機 (cơ hội/động cơ) trong đoạn nói về xã hội hiện đại."
   }
  ]
 },
 {
  "id": "dk-n1-03",
  "img": "dk-n1-03.jpg",
  "audio": "dk-n1-03.mp3",
  "timings": [
   0.015,
   5.148,
   11.125,
   16.996,
   25.01,
   33.61,
   41.063,
   51.445,
   60.174,
   68.307,
   78.454,
   84.506
  ],
  "level": "N1",
  "title": "AIと人間の未来",
  "titleVi": "AI và tương lai của con người",
  "sentences": [
   {
    "jp": "人工知能の進化は近年、驚くべき速さで進んでいる。",
    "furi": [
     [
      "人工知能",
      "じんこうちのう"
     ],
     [
      "の",
      null
     ],
     [
      "進化",
      "しんか"
     ],
     [
      "は",
      null
     ],
     [
      "近年",
      "きんねん"
     ],
     [
      "、",
      null
     ],
     [
      "驚",
      "おどろ"
     ],
     [
      "くべき",
      null
     ],
     [
      "速",
      "はや"
     ],
     [
      "さ",
      null
     ],
     [
      "で",
      null
     ],
     [
      "進",
      "すす"
     ],
     [
      "んでいる",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Sự tiến hóa của trí tuệ nhân tạo trong những năm gần đây đang diễn ra với tốc độ đáng kinh ngạc."
   },
   {
    "jp": "生成AIは文章や画像、音楽までも瞬時に生み出すことができる。",
    "furi": [
     [
      "生成",
      "せいせい"
     ],
     [
      "AI",
      null
     ],
     [
      "は",
      null
     ],
     [
      "文章",
      "ぶんしょう"
     ],
     [
      "や",
      null
     ],
     [
      "画像",
      "がぞう"
     ],
     [
      "、",
      null
     ],
     [
      "音楽",
      "おんがく"
     ],
     [
      "までも",
      null
     ],
     [
      "瞬時",
      "しゅんじ"
     ],
     [
      "に",
      null
     ],
     [
      "生",
      "う"
     ],
     [
      "み",
      null
     ],
     [
      "出",
      "だ"
     ],
     [
      "す",
      null
     ],
     [
      "こと",
      null
     ],
     [
      "が",
      null
     ],
     [
      "できる",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "AI tạo sinh có thể tạo ra văn bản, hình ảnh, thậm chí cả âm nhạc trong chớp mắt."
   },
   {
    "jp": "医療の現場では、AIによる画像診断が医師の判断を支えている。",
    "furi": [
     [
      "医療",
      "いりょう"
     ],
     [
      "の",
      null
     ],
     [
      "現場",
      "げんば"
     ],
     [
      "では",
      null
     ],
     [
      "、",
      null
     ],
     [
      "AI",
      null
     ],
     [
      "による",
      null
     ],
     [
      "画像診断",
      "がぞうしんだん"
     ],
     [
      "が",
      null
     ],
     [
      "医師",
      "いし"
     ],
     [
      "の",
      null
     ],
     [
      "判断",
      "はんだん"
     ],
     [
      "を",
      null
     ],
     [
      "支",
      "ささ"
     ],
     [
      "えている",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Trong lĩnh vực y tế, chẩn đoán hình ảnh bằng AI đang hỗ trợ phán đoán của bác sĩ."
   },
   {
    "jp": "一方で、単純作業を中心に、AIに仕事を奪われるのではないかという不安も広がっている。",
    "furi": [
     [
      "一方",
      "いっぽう"
     ],
     [
      "で",
      null
     ],
     [
      "、",
      null
     ],
     [
      "単純作業",
      "たんじゅんさぎょう"
     ],
     [
      "を",
      null
     ],
     [
      "中心",
      "ちゅうしん"
     ],
     [
      "に",
      null
     ],
     [
      "、",
      null
     ],
     [
      "AI",
      null
     ],
     [
      "に",
      null
     ],
     [
      "仕事",
      "しごと"
     ],
     [
      "を",
      null
     ],
     [
      "奪",
      "うば"
     ],
     [
      "われる",
      null
     ],
     [
      "の",
      null
     ],
     [
      "では",
      null
     ],
     [
      "ない",
      null
     ],
     [
      "か",
      null
     ],
     [
      "と",
      null
     ],
     [
      "いう",
      null
     ],
     [
      "不安",
      "ふあん"
     ],
     [
      "も",
      null
     ],
     [
      "広",
      "ひろ"
     ],
     [
      "がっている",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Mặt khác, nỗi lo rằng công việc, đặc biệt là các công việc đơn giản, sẽ bị AI cướp mất cũng đang lan rộng."
   },
   {
    "jp": "しかし、歴史を振り返れば、新しい技術はいつも古い職業を消し、新しい職業を生んできた。",
    "furi": [
     [
      "しかし",
      null
     ],
     [
      "、",
      null
     ],
     [
      "歴史",
      "れきし"
     ],
     [
      "を",
      null
     ],
     [
      "振",
      "ふ"
     ],
     [
      "り",
      null
     ],
     [
      "返",
      "かえ"
     ],
     [
      "れば",
      null
     ],
     [
      "、",
      null
     ],
     [
      "新",
      "あたら"
     ],
     [
      "しい",
      null
     ],
     [
      "技術",
      "ぎじゅつ"
     ],
     [
      "は",
      null
     ],
     [
      "いつも",
      null
     ],
     [
      "古",
      "ふる"
     ],
     [
      "い",
      null
     ],
     [
      "職業",
      "しょくぎょう"
     ],
     [
      "を",
      null
     ],
     [
      "消",
      "け"
     ],
     [
      "し",
      null
     ],
     [
      "、",
      null
     ],
     [
      "新",
      "あたら"
     ],
     [
      "しい",
      null
     ],
     [
      "職業",
      "しょくぎょう"
     ],
     [
      "を",
      null
     ],
     [
      "生",
      "う"
     ],
     [
      "んできた",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Tuy nhiên, nhìn lại lịch sử, công nghệ mới luôn xóa bỏ những nghề cũ và sinh ra những nghề mới."
   },
   {
    "jp": "大切なのは、AIと競争するのではなく、AIを使いこなす力を身につけることだ。",
    "furi": [
     [
      "大切",
      "たいせつ"
     ],
     [
      "な",
      null
     ],
     [
      "の",
      null
     ],
     [
      "は",
      null
     ],
     [
      "、",
      null
     ],
     [
      "AI",
      null
     ],
     [
      "と",
      null
     ],
     [
      "競争",
      "きょうそう"
     ],
     [
      "する",
      null
     ],
     [
      "の",
      null
     ],
     [
      "では",
      null
     ],
     [
      "なく",
      null
     ],
     [
      "、",
      null
     ],
     [
      "AI",
      null
     ],
     [
      "を",
      null
     ],
     [
      "使",
      "つか"
     ],
     [
      "いこなす",
      null
     ],
     [
      "力",
      "ちから"
     ],
     [
      "を",
      null
     ],
     [
      "身",
      "み"
     ],
     [
      "につける",
      null
     ],
     [
      "こと",
      null
     ],
     [
      "だ",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Điều quan trọng không phải là cạnh tranh với AI, mà là trang bị khả năng sử dụng thành thạo AI."
   },
   {
    "jp": "人間にしかできないこと、たとえば他者の痛みに共感したり、常識に囚われない発想を生んだりすることは、AIにはまだ難しい。",
    "furi": [
     [
      "人間",
      "にんげん"
     ],
     [
      "にしか",
      null
     ],
     [
      "できない",
      null
     ],
     [
      "こと",
      null
     ],
     [
      "、",
      null
     ],
     [
      "たとえば",
      null
     ],
     [
      "他者",
      "たしゃ"
     ],
     [
      "の",
      null
     ],
     [
      "痛",
      "いた"
     ],
     [
      "み",
      null
     ],
     [
      "に",
      null
     ],
     [
      "共感",
      "きょうかん"
     ],
     [
      "したり",
      null
     ],
     [
      "、",
      null
     ],
     [
      "常識",
      "じょうしき"
     ],
     [
      "に",
      null
     ],
     [
      "囚",
      "とら"
     ],
     [
      "われない",
      null
     ],
     [
      "発想",
      "はっそう"
     ],
     [
      "を",
      null
     ],
     [
      "生",
      "う"
     ],
     [
      "んだり",
      null
     ],
     [
      "する",
      null
     ],
     [
      "こと",
      null
     ],
     [
      "は",
      null
     ],
     [
      "、",
      null
     ],
     [
      "AI",
      null
     ],
     [
      "には",
      null
     ],
     [
      "まだ",
      null
     ],
     [
      "難",
      "むずか"
     ],
     [
      "しい",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Những điều chỉ con người mới làm được — ví dụ như đồng cảm với nỗi đau của người khác hay nảy ra ý tưởng không bị ràng buộc bởi lẽ thường — vẫn còn khó đối với AI."
   },
   {
    "jp": "AIの判断が常に正しいわけではなく、学習データの偏見がそのまま答えに反映される危険性もある。",
    "furi": [
     [
      "AI",
      null
     ],
     [
      "の",
      null
     ],
     [
      "判断",
      "はんだん"
     ],
     [
      "が",
      null
     ],
     [
      "常",
      "つね"
     ],
     [
      "に",
      null
     ],
     [
      "正",
      "ただ"
     ],
     [
      "しい",
      null
     ],
     [
      "わけでは",
      null
     ],
     [
      "なく",
      null
     ],
     [
      "、",
      null
     ],
     [
      "学習",
      "がくしゅう"
     ],
     [
      "データ",
      null
     ],
     [
      "の",
      null
     ],
     [
      "偏見",
      "へんけん"
     ],
     [
      "が",
      null
     ],
     [
      "そのまま",
      null
     ],
     [
      "答",
      "こた"
     ],
     [
      "え",
      null
     ],
     [
      "に",
      null
     ],
     [
      "反映",
      "はんえい"
     ],
     [
      "される",
      null
     ],
     [
      "危険性",
      "きけんせい"
     ],
     [
      "も",
      null
     ],
     [
      "ある",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Phán đoán của AI không phải lúc nào cũng đúng, và cũng có nguy cơ định kiến trong dữ liệu học tập được phản ánh nguyên vẹn vào câu trả lời."
   },
   {
    "jp": "だからこそ、最終的な決断は人間の手に残すべきであり、AIはあくまで道具として使うべきだ。",
    "furi": [
     [
      "だからこそ",
      null
     ],
     [
      "、",
      null
     ],
     [
      "最終的",
      "さいしゅうてき"
     ],
     [
      "な",
      null
     ],
     [
      "決断",
      "けつだん"
     ],
     [
      "は",
      null
     ],
     [
      "人間",
      "にんげん"
     ],
     [
      "の",
      null
     ],
     [
      "手",
      "て"
     ],
     [
      "に",
      null
     ],
     [
      "残",
      "のこ"
     ],
     [
      "すべき",
      null
     ],
     [
      "で",
      null
     ],
     [
      "あり",
      null
     ],
     [
      "、",
      null
     ],
     [
      "AI",
      null
     ],
     [
      "は",
      null
     ],
     [
      "あくまで",
      null
     ],
     [
      "道具",
      "どうぐ"
     ],
     [
      "として",
      null
     ],
     [
      "使",
      "つか"
     ],
     [
      "うべき",
      null
     ],
     [
      "だ",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Chính vì vậy, quyết định cuối cùng nên ở trong tay con người, và AI nên được dùng đơn thuần như một công cụ."
   },
   {
    "jp": "教育の現場でも、AIに答えを丸投げするのではなく、AIの答えを疑い、確かめる力を育てることが求められている。",
    "furi": [
     [
      "教育",
      "きょういく"
     ],
     [
      "の",
      null
     ],
     [
      "現場",
      "げんば"
     ],
     [
      "でも",
      null
     ],
     [
      "、",
      null
     ],
     [
      "AI",
      null
     ],
     [
      "に",
      null
     ],
     [
      "答",
      "こた"
     ],
     [
      "え",
      null
     ],
     [
      "を",
      null
     ],
     [
      "丸",
      "まる"
     ],
     [
      "投",
      "な"
     ],
     [
      "げ",
      null
     ],
     [
      "する",
      null
     ],
     [
      "の",
      null
     ],
     [
      "では",
      null
     ],
     [
      "なく",
      null
     ],
     [
      "、",
      null
     ],
     [
      "AI",
      null
     ],
     [
      "の",
      null
     ],
     [
      "答",
      "こた"
     ],
     [
      "え",
      null
     ],
     [
      "を",
      null
     ],
     [
      "疑",
      "うたが"
     ],
     [
      "い",
      null
     ],
     [
      "、",
      null
     ],
     [
      "確",
      "たし"
     ],
     [
      "かめる",
      null
     ],
     [
      "力",
      "ちから"
     ],
     [
      "を",
      null
     ],
     [
      "育",
      "そだ"
     ],
     [
      "てる",
      null
     ],
     [
      "こと",
      null
     ],
     [
      "が",
      null
     ],
     [
      "求",
      "もと"
     ],
     [
      "められている",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Trong giáo dục cũng vậy, điều cần thiết là nuôi dưỡng khả năng nghi ngờ và kiểm chứng câu trả lời của AI, thay vì phó mặc hoàn toàn cho AI."
   },
   {
    "jp": "AIと人間の未来は、対立ではなく共存の形で描かれるべきだ。",
    "furi": [
     [
      "AI",
      null
     ],
     [
      "と",
      null
     ],
     [
      "人間",
      "にんげん"
     ],
     [
      "の",
      null
     ],
     [
      "未来",
      "みらい"
     ],
     [
      "は",
      null
     ],
     [
      "、",
      null
     ],
     [
      "対立",
      "たいりつ"
     ],
     [
      "では",
      null
     ],
     [
      "なく",
      null
     ],
     [
      "共存",
      "きょうぞん"
     ],
     [
      "の",
      null
     ],
     [
      "形",
      "かたち"
     ],
     [
      "で",
      null
     ],
     [
      "描",
      "えが"
     ],
     [
      "かれる",
      null
     ],
     [
      "べき",
      null
     ],
     [
      "だ",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Tương lai của AI và con người nên được vẽ nên dưới hình thức cùng tồn tại, chứ không phải đối đầu."
   },
   {
    "jp": "恐れるのではなく、向き合い、学び続けることこそが、人間に残された最大の力である。",
    "furi": [
     [
      "恐",
      "おそ"
     ],
     [
      "れる",
      null
     ],
     [
      "の",
      null
     ],
     [
      "では",
      null
     ],
     [
      "なく",
      null
     ],
     [
      "、",
      null
     ],
     [
      "向",
      "む"
     ],
     [
      "き",
      null
     ],
     [
      "合",
      "あ"
     ],
     [
      "い",
      null
     ],
     [
      "、",
      null
     ],
     [
      "学",
      "まな"
     ],
     [
      "び",
      null
     ],
     [
      "続",
      "つづ"
     ],
     [
      "ける",
      null
     ],
     [
      "こと",
      null
     ],
     [
      "こそ",
      null
     ],
     [
      "が",
      null
     ],
     [
      "、",
      null
     ],
     [
      "人間",
      "にんげん"
     ],
     [
      "に",
      null
     ],
     [
      "残",
      "のこ"
     ],
     [
      "された",
      null
     ],
     [
      "最大",
      "さいだい"
     ],
     [
      "の",
      null
     ],
     [
      "力",
      "ちから"
     ],
     [
      "で",
      null
     ],
     [
      "ある",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Không phải sợ hãi, mà chính việc đối mặt và không ngừng học hỏi mới là sức mạnh lớn nhất còn lại của con người."
   }
  ],
  "vocab": [
   {
    "w": "人工知能",
    "r": "じんこうちのう",
    "hv": "NHÂN CÔNG TRI NĂNG",
    "vi": "Trí tuệ nhân tạo (AI)"
   },
   {
    "w": "偏見",
    "r": "へんけん",
    "hv": "THIÊN KIẾN",
    "vi": "Định kiến, thành kiến"
   },
   {
    "w": "共存",
    "r": "きょうぞん",
    "hv": "CỘNG TỒN",
    "vi": "Cùng tồn tại"
   },
   {
    "w": "診断",
    "r": "しんだん",
    "hv": "CHẨN ĐOÁN",
    "vi": "Chẩn đoán (y học)"
   },
   {
    "w": "奪う",
    "r": "うばう",
    "hv": "ĐOẠT",
    "vi": "Cướp đoạt, lấy đi"
   },
   {
    "w": "対立",
    "r": "たいりつ",
    "hv": "ĐỐI LẬP",
    "vi": "Đối đầu, đối lập"
   }
  ],
  "grammar": [
   {
    "p": "〜一方（で）",
    "lv": "N3",
    "vi": "Mặt khác… / một mặt…",
    "ex": "一方で、単純作業を中心に、AIに仕事を奪われるのではないかという不安も広がっている。",
    "exVi": "Mặt khác, nỗi lo rằng công việc, đặc biệt là các công việc đơn giản, sẽ bị AI cướp mất cũng đang lan rộng."
   },
   {
    "p": "V-る + べきだ",
    "lv": "N3",
    "vi": "Nên… (khuyên nhủ, nghĩa vụ)",
    "ex": "だからこそ、最終的な決断は人間の手に残すべきであり、AIはあくまで道具として使うべきだ。",
    "exVi": "Chính vì vậy, quyết định cuối cùng nên ở trong tay con người, và AI nên được dùng đơn thuần như một công cụ."
   }
  ],
  "quiz": [
   {
    "q": "筆者は、AIと人間の関係についてどのように考えていますか。",
    "options": [
     "AIと競争すべきである。",
     "AIと共存すべきである。",
     "AIを恐れるべきである。",
     "AIにすべてを任せるべきである。"
    ],
    "answer": 1,
    "explain": "Tác giả cho rằng tương lai của AI và con người nên được vẽ nên dưới hình thức cùng tồn tại, chứ không phải đối đầu.",
    "evidence": "AIと人間の未来は、対立ではなく共存の形で描かれるべきだ",
    "tip": "Tìm câu nói về '未来' (tương lai) ở cuối bài."
   },
   {
    "q": "AIの判断の問題点として、文章で述べられているのはどれですか。",
    "options": [
     "判断が遅すぎること",
     "学習データの偏見が答えに反映されること",
     "医師の仕事がなくなること",
     "電気を多く使うこと"
    ],
    "answer": 1,
    "explain": "Trong bài có nói định kiến trong dữ liệu học tập có thể được phản ánh nguyên vẹn vào câu trả lời của AI.",
    "evidence": "学習データの偏見がそのまま答えに反映される危険性もある",
    "tip": "Tìm câu có từ '偏見' (định kiến) trong bài."
   }
  ]
 },
 {
  "id": "dk-n1-04",
  "img": "dk-n1-04.jpg",
  "audio": "dk-n1-04.mp3",
  "timings": [
   0.015,
   4.381,
   13.039,
   18.89,
   25.55,
   30.607,
   38.412,
   41,
   47.976,
   54.071,
   60.54,
   70.197,
   76.544
  ],
  "level": "N1",
  "title": "静けさの美学",
  "titleVi": "Vẻ đẹp của sự tĩnh lặng",
  "sentences": [
   {
    "jp": "現代の都会は、絶えず続く騒音に満ちている。",
    "furi": [
     [
      "現代",
      "げんだい"
     ],
     [
      "の",
      null
     ],
     [
      "都会",
      "とかい"
     ],
     [
      "は",
      null
     ],
     [
      "、",
      null
     ],
     [
      "絶",
      "た"
     ],
     [
      "えず",
      null
     ],
     [
      "続",
      "つづ"
     ],
     [
      "く",
      null
     ],
     [
      "騒音",
      "そうおん"
     ],
     [
      "に",
      null
     ],
     [
      "満",
      "み"
     ],
     [
      "ちている",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Thành phố hiện đại tràn ngập tiếng ồn không ngừng."
   },
   {
    "jp": "電車のアナウンスも、スマートフォンの通知も、街頭の広告も、私たちはいつも音に囲まれて生きている。",
    "furi": [
     [
      "電車",
      "でんしゃ"
     ],
     [
      "の",
      null
     ],
     [
      "アナウンス",
      null
     ],
     [
      "も",
      null
     ],
     [
      "、",
      null
     ],
     [
      "スマートフォン",
      null
     ],
     [
      "の",
      null
     ],
     [
      "通知",
      "つうち"
     ],
     [
      "も",
      null
     ],
     [
      "、",
      null
     ],
     [
      "街頭",
      "がいとう"
     ],
     [
      "の",
      null
     ],
     [
      "広告",
      "こうこく"
     ],
     [
      "も",
      null
     ],
     [
      "、",
      null
     ],
     [
      "私",
      "わたし"
     ],
     [
      "たち",
      null
     ],
     [
      "は",
      null
     ],
     [
      "いつも",
      null
     ],
     [
      "音",
      "おと"
     ],
     [
      "に",
      null
     ],
     [
      "囲",
      "かこ"
     ],
     [
      "まれて",
      null
     ],
     [
      "生",
      "い"
     ],
     [
      "きている",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Thông báo trên tàu điện, thông báo điện thoại, quảng cáo ngoài phố — chúng ta lúc nào cũng sống trong vòng vây của âm thanh."
   },
   {
    "jp": "そんな中で、日本人は古くから、静けさの中に美を見出してきた。",
    "furi": [
     [
      "そんな",
      null
     ],
     [
      "中",
      "なか"
     ],
     [
      "で",
      null
     ],
     [
      "、",
      null
     ],
     [
      "日本人",
      "にほんじん"
     ],
     [
      "は",
      null
     ],
     [
      "古",
      "ふる"
     ],
     [
      "くから",
      null
     ],
     [
      "、",
      null
     ],
     [
      "静",
      "しず"
     ],
     [
      "けさ",
      null
     ],
     [
      "の",
      null
     ],
     [
      "中",
      "なか"
     ],
     [
      "に",
      null
     ],
     [
      "美",
      "び"
     ],
     [
      "を",
      null
     ],
     [
      "見",
      "み"
     ],
     [
      "出",
      "だ"
     ],
     [
      "してきた",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Trong bối cảnh đó, người Nhật từ xưa đã tìm thấy vẻ đẹp trong sự tĩnh lặng."
   },
   {
    "jp": "禅寺の枯山水の庭では、白砂に描かれた砂紋だけが、静かに語りかける。",
    "furi": [
     [
      "禅寺",
      "ぜんでら"
     ],
     [
      "の",
      null
     ],
     [
      "枯山水",
      "かれさんすい"
     ],
     [
      "の",
      null
     ],
     [
      "庭",
      "にわ"
     ],
     [
      "では",
      null
     ],
     [
      "、",
      null
     ],
     [
      "白砂",
      "しらすな"
     ],
     [
      "に",
      null
     ],
     [
      "描",
      "えが"
     ],
     [
      "かれた",
      null
     ],
     [
      "砂紋",
      "さもん"
     ],
     [
      "だけ",
      null
     ],
     [
      "が",
      null
     ],
     [
      "、",
      null
     ],
     [
      "静",
      "しず"
     ],
     [
      "かに",
      null
     ],
     [
      "語",
      "かた"
     ],
     [
      "りかける",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Trong khu vườn khô của chùa Thiền, chỉ có những vân cát vẽ trên cát trắng lặng lẽ cất tiếng."
   },
   {
    "jp": "茶室では、一輪の花と掛け軸だけが客を迎える。",
    "furi": [
     [
      "茶室",
      "ちゃしつ"
     ],
     [
      "では",
      null
     ],
     [
      "、",
      null
     ],
     [
      "一輪",
      "いちりん"
     ],
     [
      "の",
      null
     ],
     [
      "花",
      "はな"
     ],
     [
      "と",
      null
     ],
     [
      "掛",
      "か"
     ],
     [
      "け",
      null
     ],
     [
      "軸",
      "じく"
     ],
     [
      "だけ",
      null
     ],
     [
      "が",
      null
     ],
     [
      "客",
      "きゃく"
     ],
     [
      "を",
      null
     ],
     [
      "迎",
      "むか"
     ],
     [
      "える",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Trong phòng trà, chỉ có một bông hoa và một bức tranh cuộn đón khách."
   },
   {
    "jp": "余計なものを削ぎ落とし、残されたものだけが本質を語るのが、日本の美意識の根幹である。",
    "furi": [
     [
      "余計",
      "よけい"
     ],
     [
      "な",
      null
     ],
     [
      "もの",
      null
     ],
     [
      "を",
      null
     ],
     [
      "削",
      "そ"
     ],
     [
      "ぎ",
      null
     ],
     [
      "落",
      "お"
     ],
     [
      "とし",
      null
     ],
     [
      "、",
      null
     ],
     [
      "残",
      "のこ"
     ],
     [
      "された",
      null
     ],
     [
      "もの",
      null
     ],
     [
      "だけ",
      null
     ],
     [
      "が",
      null
     ],
     [
      "本質",
      "ほんしつ"
     ],
     [
      "を",
      null
     ],
     [
      "語",
      "かた"
     ],
     [
      "る",
      null
     ],
     [
      "の",
      null
     ],
     [
      "が",
      null
     ],
     [
      "、",
      null
     ],
     [
      "日本",
      "にほん"
     ],
     [
      "の",
      null
     ],
     [
      "美意識",
      "びいしき"
     ],
     [
      "の",
      null
     ],
     [
      "根幹",
      "こんかん"
     ],
     [
      "で",
      null
     ],
     [
      "ある",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Gạt bỏ những thứ thừa thãi, chỉ những gì còn lại mới nói lên bản chất — đó là cốt lõi của ý thức thẩm mỹ Nhật Bản."
   },
   {
    "jp": "静けさは単なる無音ではない。",
    "furi": [
     [
      "静",
      "しず"
     ],
     [
      "けさ",
      null
     ],
     [
      "は",
      null
     ],
     [
      "単",
      "たん"
     ],
     [
      "なる",
      null
     ],
     [
      "無音",
      "むおん"
     ],
     [
      "では",
      null
     ],
     [
      "ない",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Sự tĩnh lặng không đơn thuần là sự vắng lặng."
   },
   {
    "jp": "耳を澄ませば、風の音、水の滴る音、遠くの鳥の声が聞こえてくる。",
    "furi": [
     [
      "耳",
      "みみ"
     ],
     [
      "を",
      null
     ],
     [
      "澄",
      "す"
     ],
     [
      "ませば",
      null
     ],
     [
      "、",
      null
     ],
     [
      "風",
      "かぜ"
     ],
     [
      "の",
      null
     ],
     [
      "音",
      "おと"
     ],
     [
      "、",
      null
     ],
     [
      "水",
      "みず"
     ],
     [
      "の",
      null
     ],
     [
      "滴",
      "したた"
     ],
     [
      "る",
      null
     ],
     [
      "音",
      "おと"
     ],
     [
      "、",
      null
     ],
     [
      "遠",
      "とお"
     ],
     [
      "く",
      null
     ],
     [
      "の",
      null
     ],
     [
      "鳥",
      "とり"
     ],
     [
      "の",
      null
     ],
     [
      "声",
      "こえ"
     ],
     [
      "が",
      null
     ],
     [
      "聞",
      "き"
     ],
     [
      "こえてくる",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Nếu lắng tai nghe, ta sẽ nghe thấy tiếng gió, tiếng nước nhỏ giọt, tiếng chim ở xa."
   },
   {
    "jp": "五感が研ぎ澄まされ、日常では気づかない小さな変化に心が動く。",
    "furi": [
     [
      "五感",
      "ごかん"
     ],
     [
      "が",
      null
     ],
     [
      "研",
      "と"
     ],
     [
      "ぎ",
      null
     ],
     [
      "澄",
      "す"
     ],
     [
      "まされ",
      null
     ],
     [
      "、",
      null
     ],
     [
      "日常",
      "にちじょう"
     ],
     [
      "では",
      null
     ],
     [
      "気",
      "き"
     ],
     [
      "づかない",
      null
     ],
     [
      "小",
      "ちい"
     ],
     [
      "さな",
      null
     ],
     [
      "変化",
      "へんか"
     ],
     [
      "に",
      null
     ],
     [
      "心",
      "こころ"
     ],
     [
      "が",
      null
     ],
     [
      "動",
      "うご"
     ],
     [
      "く",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Năm giác quan trở nên sắc bén, và ta xúc động trước những thay đổi nhỏ mà thường ngày không nhận ra."
   },
   {
    "jp": "現代人は、意識的に静けさを求めなければ、それを失ってしまうだろう。",
    "furi": [
     [
      "現代人",
      "げんだいじん"
     ],
     [
      "は",
      null
     ],
     [
      "、",
      null
     ],
     [
      "意識的",
      "いしきてき"
     ],
     [
      "に",
      null
     ],
     [
      "静",
      "しず"
     ],
     [
      "けさ",
      null
     ],
     [
      "を",
      null
     ],
     [
      "求",
      "もと"
     ],
     [
      "めなければ",
      null
     ],
     [
      "、",
      null
     ],
     [
      "それ",
      null
     ],
     [
      "を",
      null
     ],
     [
      "失",
      "うしな"
     ],
     [
      "ってしまう",
      null
     ],
     [
      "だろう",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Con người hiện đại, nếu không chủ động tìm kiếm sự tĩnh lặng, sẽ đánh mất nó."
   },
   {
    "jp": "スマートフォンの電源を切り、通知から離れて、自分と向き合う時間を持つことこそ、現代におけるぜいたくなのかもしれない。",
    "furi": [
     [
      "スマートフォン",
      null
     ],
     [
      "の",
      null
     ],
     [
      "電源",
      "でんげん"
     ],
     [
      "を",
      null
     ],
     [
      "切",
      "き"
     ],
     [
      "り",
      null
     ],
     [
      "、",
      null
     ],
     [
      "通知",
      "つうち"
     ],
     [
      "から",
      null
     ],
     [
      "離",
      "はな"
     ],
     [
      "れて",
      null
     ],
     [
      "、",
      null
     ],
     [
      "自分",
      "じぶん"
     ],
     [
      "と",
      null
     ],
     [
      "向",
      "む"
     ],
     [
      "き",
      null
     ],
     [
      "合",
      "あ"
     ],
     [
      "う",
      null
     ],
     [
      "時間",
      "じかん"
     ],
     [
      "を",
      null
     ],
     [
      "持",
      "も"
     ],
     [
      "つ",
      null
     ],
     [
      "こと",
      null
     ],
     [
      "こそ",
      null
     ],
     [
      "、",
      null
     ],
     [
      "現代",
      "げんだい"
     ],
     [
      "における",
      null
     ],
     [
      "ぜいたく",
      null
     ],
     [
      "な",
      null
     ],
     [
      "の",
      null
     ],
     [
      "かも",
      null
     ],
     [
      "しれない",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Tắt điện thoại, rời xa thông báo, dành thời gian đối diện với chính mình — có lẽ đó mới là sự xa xỉ trong thời hiện đại."
   },
   {
    "jp": "静けさの中にこそ、豊かさがあることに、私たちは改めて気づくべきだ。",
    "furi": [
     [
      "静",
      "しず"
     ],
     [
      "けさ",
      null
     ],
     [
      "の",
      null
     ],
     [
      "中",
      "なか"
     ],
     [
      "に",
      null
     ],
     [
      "こそ",
      null
     ],
     [
      "、",
      null
     ],
     [
      "豊",
      "ゆた"
     ],
     [
      "かさ",
      null
     ],
     [
      "が",
      null
     ],
     [
      "ある",
      null
     ],
     [
      "こと",
      null
     ],
     [
      "に",
      null
     ],
     [
      "、",
      null
     ],
     [
      "私",
      "わたし"
     ],
     [
      "たち",
      null
     ],
     [
      "は",
      null
     ],
     [
      "改",
      "あらた"
     ],
     [
      "めて",
      null
     ],
     [
      "気",
      "き"
     ],
     [
      "づくべき",
      null
     ],
     [
      "だ",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Chính trong sự tĩnh lặng mới có sự giàu có — chúng ta nên một lần nữa nhận ra điều đó."
   },
   {
    "jp": "音のない世界は空虚ではなく、むしろ心が最も豊かになる場所である。",
    "furi": [
     [
      "音",
      "おと"
     ],
     [
      "の",
      null
     ],
     [
      "ない",
      null
     ],
     [
      "世界",
      "せかい"
     ],
     [
      "は",
      null
     ],
     [
      "空虚",
      "くうきょ"
     ],
     [
      "では",
      null
     ],
     [
      "なく",
      null
     ],
     [
      "、",
      null
     ],
     [
      "むしろ",
      null
     ],
     [
      "心",
      "こころ"
     ],
     [
      "が",
      null
     ],
     [
      "最",
      "もっと"
     ],
     [
      "も",
      null
     ],
     [
      "豊",
      "ゆた"
     ],
     [
      "かに",
      null
     ],
     [
      "なる",
      null
     ],
     [
      "場所",
      "ばしょ"
     ],
     [
      "で",
      null
     ],
     [
      "ある",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Thế giới không có âm thanh không hề trống rỗng, mà ngược lại là nơi tâm hồn trở nên giàu có nhất."
   }
  ],
  "vocab": [
   {
    "w": "静けさ",
    "r": "しずけさ",
    "hv": "TĨNH",
    "vi": "Sự tĩnh lặng, yên tĩnh"
   },
   {
    "w": "騒音",
    "r": "そうおん",
    "hv": "TAO ÂM",
    "vi": "Tiếng ồn"
   },
   {
    "w": "枯山水",
    "r": "かれさんすい",
    "hv": "KHÔ SƠN THỦY",
    "vi": "Vườn khô Nhật Bản (karesansui)"
   },
   {
    "w": "砂紋",
    "r": "さもん",
    "hv": "SA VĂN",
    "vi": "Vân cát (trên cát trắng)"
   },
   {
    "w": "ぜいたく",
    "r": "ぜいたく",
    "hv": "XA XỈ",
    "vi": "Sự xa xỉ, xa hoa"
   },
   {
    "w": "豊かさ",
    "r": "ゆたかさ",
    "hv": "PHONG",
    "vi": "Sự giàu có, phong phú"
   }
  ],
  "grammar": [
   {
    "p": "〜こそ",
    "lv": "N3",
    "vi": "Chính là… (nhấn mạnh)",
    "ex": "スマートフォンの電源を切り、通知から離れて、自分と向き合う時間を持つことこそ、現代におけるぜいたくなのかもしれない。",
    "exVi": "Tắt điện thoại, rời xa thông báo, dành thời gian đối diện với chính mình — có lẽ đó mới là sự xa xỉ trong thời hiện đại."
   },
   {
    "p": "V-る + べきだ",
    "lv": "N3",
    "vi": "Nên… (khuyên nhủ, nghĩa vụ)",
    "ex": "静けさの中にこそ、豊かさがあることに、私たちは改めて気づくべきだ。",
    "exVi": "Chính trong sự tĩnh lặng mới có sự giàu có — chúng ta nên một lần nữa nhận ra điều đó."
   }
  ],
  "quiz": [
   {
    "q": "筆者によると、静けさとはどのようなものですか。",
    "options": [
     "単なる無音のことである。",
     "豊かさがあるものである。",
     "現代人が失ったものである。",
     "音のない空虚な世界である。"
    ],
    "answer": 1,
    "explain": "Tác giả cho rằng chính trong sự tĩnh lặng mới có sự giàu có.",
    "evidence": "静けさの中にこそ、豊かさがあること",
    "tip": "Tìm câu có từ '豊かさ' (sự giàu có) trong bài."
   },
   {
    "q": "禅寺の枯山水の庭で、静かに語りかけるのは何ですか。",
    "options": [
     "白砂に描かれた砂紋",
     "一輪の花",
     "掛け軸",
     "風の音"
    ],
    "answer": 0,
    "explain": "Trong bài có nói chỉ có những vân cát vẽ trên cát trắng lặng lẽ cất tiếng.",
    "evidence": "白砂に描かれた砂紋だけが、静かに語りかける",
    "tip": "Tìm câu về khu vườn khô của chùa Thiền."
   }
  ]
 },
 {
  "id": "dk-n1-05",
  "img": "dk-n1-05.jpg",
  "audio": "dk-n1-05.mp3",
  "timings": [
   0.015,
   6.989,
   11.291,
   18.331,
   23.025,
   28.846,
   35.977,
   42.789,
   48.355,
   51.895,
   57.088,
   62.514
  ],
  "level": "N1",
  "title": "読書の 喜び",
  "titleVi": "Niềm vui đọc sách",
  "sentences": [
   {
    "jp": "忙しい毎日の中で、本を開く時間は、私にとって何よりの楽しみである。",
    "furi": [
     [
      "忙",
      "いそが"
     ],
     [
      "しい",
      null
     ],
     [
      "毎日",
      "まいにち"
     ],
     [
      "の",
      null
     ],
     [
      "中",
      "なか"
     ],
     [
      "で",
      null
     ],
     [
      "、",
      null
     ],
     [
      "本",
      "ほん"
     ],
     [
      "を",
      null
     ],
     [
      "開",
      "ひら"
     ],
     [
      "く",
      null
     ],
     [
      "時間",
      "じかん"
     ],
     [
      "は",
      null
     ],
     [
      "、",
      null
     ],
     [
      "私",
      "わたし"
     ],
     [
      "にとって",
      null
     ],
     [
      "何",
      "なに"
     ],
     [
      "より",
      null
     ],
     [
      "の",
      null
     ],
     [
      "楽",
      "たの"
     ],
     [
      "しみ",
      null
     ],
     [
      "で",
      null
     ],
     [
      "ある",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Trong nhịp sống bận rộn hàng ngày, thời gian mở sách ra đọc là niềm vui lớn nhất đối với tôi."
   },
   {
    "jp": "本を読むと、知らない世界へ旅することができる。",
    "furi": [
     [
      "本",
      "ほん"
     ],
     [
      "を",
      null
     ],
     [
      "読",
      "よ"
     ],
     [
      "む",
      null
     ],
     [
      "と",
      null
     ],
     [
      "、",
      null
     ],
     [
      "知",
      "し"
     ],
     [
      "らない",
      null
     ],
     [
      "世界",
      "せかい"
     ],
     [
      "へ",
      null
     ],
     [
      "旅",
      "たび"
     ],
     [
      "する",
      null
     ],
     [
      "こと",
      null
     ],
     [
      "が",
      null
     ],
     [
      "できる",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Khi đọc sách, ta có thể du hành đến những thế giới chưa từng biết."
   },
   {
    "jp": "小説の登場人物とともに笑い、ともに泣くことで、自分の感情が豊かになる。",
    "furi": [
     [
      "小説",
      "しょうせつ"
     ],
     [
      "の",
      null
     ],
     [
      "登場人物",
      "とうじょうじんぶつ"
     ],
     [
      "と",
      null
     ],
     [
      "ともに",
      null
     ],
     [
      "笑",
      "わら"
     ],
     [
      "い",
      null
     ],
     [
      "、",
      null
     ],
     [
      "ともに",
      null
     ],
     [
      "泣",
      "な"
     ],
     [
      "く",
      null
     ],
     [
      "こと",
      null
     ],
     [
      "で",
      null
     ],
     [
      "、",
      null
     ],
     [
      "自分",
      "じぶん"
     ],
     [
      "の",
      null
     ],
     [
      "感情",
      "かんじょう"
     ],
     [
      "が",
      null
     ],
     [
      "豊",
      "ゆた"
     ],
     [
      "か",
      null
     ],
     [
      "に",
      null
     ],
     [
      "なる",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Cùng cười, cùng khóc với các nhân vật trong tiểu thuyết, cảm xúc của mình trở nên phong phú hơn."
   },
   {
    "jp": "随筆を読めば、作者の考え方に触れることができる。",
    "furi": [
     [
      "随筆",
      "ずいひつ"
     ],
     [
      "を",
      null
     ],
     [
      "読",
      "よ"
     ],
     [
      "めば",
      null
     ],
     [
      "、",
      null
     ],
     [
      "作者",
      "さくしゃ"
     ],
     [
      "の",
      null
     ],
     [
      "考",
      "かんが"
     ],
     [
      "え",
      null
     ],
     [
      "方",
      "かた"
     ],
     [
      "に",
      null
     ],
     [
      "触",
      "ふ"
     ],
     [
      "れる",
      null
     ],
     [
      "こと",
      null
     ],
     [
      "が",
      null
     ],
     [
      "できる",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Đọc tùy bút, ta có thể chạm đến cách suy nghĩ của tác giả."
   },
   {
    "jp": "読書は、知識を得るためのものというより、自分を育てるためのものだ。",
    "furi": [
     [
      "読書",
      "どくしょ"
     ],
     [
      "は",
      null
     ],
     [
      "、",
      null
     ],
     [
      "知識",
      "ちしき"
     ],
     [
      "を",
      null
     ],
     [
      "得",
      "え"
     ],
     [
      "る",
      null
     ],
     [
      "ため",
      null
     ],
     [
      "の",
      null
     ],
     [
      "もの",
      null
     ],
     [
      "と",
      null
     ],
     [
      "いう",
      null
     ],
     [
      "より",
      null
     ],
     [
      "、",
      null
     ],
     [
      "自分",
      "じぶん"
     ],
     [
      "を",
      null
     ],
     [
      "育",
      "そだ"
     ],
     [
      "てる",
      null
     ],
     [
      "ため",
      null
     ],
     [
      "の",
      null
     ],
     [
      "もの",
      null
     ],
     [
      "だ",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Đọc sách không phải là để thu thập kiến thức, mà là để nuôi dưỡng chính mình."
   },
   {
    "jp": "むしろ、自分と向き合い、自分を見つめ直す時間こそが、読書の本当の価値である。",
    "furi": [
     [
      "むしろ",
      null
     ],
     [
      "、",
      null
     ],
     [
      "自分",
      "じぶん"
     ],
     [
      "と",
      null
     ],
     [
      "向",
      "む"
     ],
     [
      "き",
      null
     ],
     [
      "合",
      "あ"
     ],
     [
      "い",
      null
     ],
     [
      "、",
      null
     ],
     [
      "自分",
      "じぶん"
     ],
     [
      "を",
      null
     ],
     [
      "見",
      "み"
     ],
     [
      "つめ",
      null
     ],
     [
      "直",
      "なお"
     ],
     [
      "す",
      null
     ],
     [
      "時間",
      "じかん"
     ],
     [
      "こそ",
      null
     ],
     [
      "が",
      null
     ],
     [
      "、",
      null
     ],
     [
      "読書",
      "どくしょ"
     ],
     [
      "の",
      null
     ],
     [
      "本当",
      "ほんとう"
     ],
     [
      "の",
      null
     ],
     [
      "価値",
      "かち"
     ],
     [
      "で",
      null
     ],
     [
      "ある",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Mà đúng hơn, thời gian đối diện với bản thân, nhìn lại chính mình mới là giá trị thật sự của việc đọc sách."
   },
   {
    "jp": "本の中の言葉は、ときに私の心を救い、ときに私を勇気づけてくれる。",
    "furi": [
     [
      "本",
      "ほん"
     ],
     [
      "の",
      null
     ],
     [
      "中",
      "なか"
     ],
     [
      "の",
      null
     ],
     [
      "言葉",
      "ことば"
     ],
     [
      "は",
      null
     ],
     [
      "、",
      null
     ],
     [
      "とき",
      null
     ],
     [
      "に",
      null
     ],
     [
      "私",
      "わたし"
     ],
     [
      "の",
      null
     ],
     [
      "心",
      "こころ"
     ],
     [
      "を",
      null
     ],
     [
      "救",
      "すく"
     ],
     [
      "い",
      null
     ],
     [
      "、",
      null
     ],
     [
      "とき",
      null
     ],
     [
      "に",
      null
     ],
     [
      "私",
      "わたし"
     ],
     [
      "を",
      null
     ],
     [
      "勇気",
      "ゆうき"
     ],
     [
      "づけて",
      null
     ],
     [
      "くれる",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Những lời trong sách, có khi cứu rỗi tâm hồn tôi, có khi tiếp thêm dũng khí cho tôi."
   },
   {
    "jp": "図書館で借りた本を返すとき、いつも少し寂しい気持ちになる。",
    "furi": [
     [
      "図書館",
      "としょかん"
     ],
     [
      "で",
      null
     ],
     [
      "借",
      "か"
     ],
     [
      "りた",
      null
     ],
     [
      "本",
      "ほん"
     ],
     [
      "を",
      null
     ],
     [
      "返",
      "かえ"
     ],
     [
      "す",
      null
     ],
     [
      "とき",
      null
     ],
     [
      "、",
      null
     ],
     [
      "いつも",
      null
     ],
     [
      "少",
      "すこ"
     ],
     [
      "し",
      null
     ],
     [
      "寂",
      "さび"
     ],
     [
      "しい",
      null
     ],
     [
      "気持",
      "きも"
     ],
     [
      "ち",
      null
     ],
     [
      "に",
      null
     ],
     [
      "なる",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Khi trả cuốn sách mượn ở thư viện, tôi luôn cảm thấy hơi buồn."
   },
   {
    "jp": "それは、一つの世界との別れだからだ。",
    "furi": [
     [
      "それ",
      null
     ],
     [
      "は",
      null
     ],
     [
      "、",
      null
     ],
     [
      "一",
      "ひと"
     ],
     [
      "つ",
      null
     ],
     [
      "の",
      null
     ],
     [
      "世界",
      "せかい"
     ],
     [
      "と",
      null
     ],
     [
      "の",
      null
     ],
     [
      "別",
      "わか"
     ],
     [
      "れ",
      null
     ],
     [
      "だ",
      null
     ],
     [
      "から",
      null
     ],
     [
      "だ",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Đó là vì đó là lời chia tay với một thế giới."
   },
   {
    "jp": "しかし、次の本を開けば、また新しい世界が待っている。",
    "furi": [
     [
      "しかし",
      null
     ],
     [
      "、",
      null
     ],
     [
      "次",
      "つぎ"
     ],
     [
      "の",
      null
     ],
     [
      "本",
      "ほん"
     ],
     [
      "を",
      null
     ],
     [
      "開",
      "ひら"
     ],
     [
      "けば",
      null
     ],
     [
      "、",
      null
     ],
     [
      "また",
      null
     ],
     [
      "新",
      "あたら"
     ],
     [
      "しい",
      null
     ],
     [
      "世界",
      "せかい"
     ],
     [
      "が",
      null
     ],
     [
      "待",
      "ま"
     ],
     [
      "っている",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Nhưng nếu mở cuốn sách tiếp theo, một thế giới mới lại đang chờ đợi."
   },
   {
    "jp": "読書は、金をかけずにできる、最も豊かな娯楽だといえる。",
    "furi": [
     [
      "読書",
      "どくしょ"
     ],
     [
      "は",
      null
     ],
     [
      "、",
      null
     ],
     [
      "金",
      "かね"
     ],
     [
      "を",
      null
     ],
     [
      "かけず",
      null
     ],
     [
      "に",
      null
     ],
     [
      "できる",
      null
     ],
     [
      "、",
      null
     ],
     [
      "最",
      "もっと"
     ],
     [
      "も",
      null
     ],
     [
      "豊",
      "ゆた"
     ],
     [
      "か",
      null
     ],
     [
      "な",
      null
     ],
     [
      "娯楽",
      "ごらく"
     ],
     [
      "だ",
      null
     ],
     [
      "と",
      null
     ],
     [
      "いえる",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Có thể nói đọc sách là thú vui phong phú nhất mà không tốn tiền."
   },
   {
    "jp": "これからも、忙しい日々の中で、本を読む時間を大切にしていきたい。",
    "furi": [
     [
      "これからも",
      null
     ],
     [
      "、",
      null
     ],
     [
      "忙",
      "いそが"
     ],
     [
      "しい",
      null
     ],
     [
      "日",
      "ひ"
     ],
     [
      "々",
      "び"
     ],
     [
      "の",
      null
     ],
     [
      "中",
      "なか"
     ],
     [
      "で",
      null
     ],
     [
      "、",
      null
     ],
     [
      "本",
      "ほん"
     ],
     [
      "を",
      null
     ],
     [
      "読",
      "よ"
     ],
     [
      "む",
      null
     ],
     [
      "時間",
      "じかん"
     ],
     [
      "を",
      null
     ],
     [
      "大切",
      "たいせつ"
     ],
     [
      "に",
      null
     ],
     [
      "して",
      null
     ],
     [
      "いきたい",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Từ nay về sau, tôi vẫn muốn trân trọng thời gian đọc sách trong những ngày bận rộn."
   }
  ],
  "vocab": [
   {
    "w": "随筆",
    "r": "ずいひつ",
    "hv": "TÙY BÚT",
    "vi": "Tùy bút (thể văn ghi lại suy nghĩ, cảm nhận)"
   },
   {
    "w": "登場人物",
    "r": "とうじょうじんぶつ",
    "hv": "ĐĂNG TRƯỜNG NHÂN VẬT",
    "vi": "Nhân vật (trong truyện, phim)"
   },
   {
    "w": "豊か",
    "r": "ゆたか",
    "hv": "PHONG",
    "vi": "Phong phú, giàu có (về cảm xúc, nội dung)"
   },
   {
    "w": "勇気づける",
    "r": "ゆうきづける",
    "hv": "DŨNG KHÍ",
    "vi": "Tiếp thêm dũng khí, động viên"
   },
   {
    "w": "娯楽",
    "r": "ごらく",
    "hv": "NGU LẠC",
    "vi": "Thú vui, giải trí"
   },
   {
    "w": "見つめ直す",
    "r": "みつめなおす",
    "hv": "KIẾN TRỰC",
    "vi": "Nhìn lại, xem xét lại (bản thân)"
   }
  ],
  "grammar": [
   {
    "p": "〜というより",
    "lv": "N3",
    "vi": "… thì đúng hơn là… (so sánh, sửa lại)",
    "ex": "読書は、知識を得るためのものというより、自分を育てるためのものだ。",
    "exVi": "Đọc sách không phải là để thu thập kiến thức, mà là để nuôi dưỡng chính mình."
   },
   {
    "p": "〜こそ",
    "lv": "N3",
    "vi": "Chính là… (nhấn mạnh)",
    "ex": "むしろ、自分と向き合い、自分を見つめ直す時間こそが、読書の本当の価値である。",
    "exVi": "Mà đúng hơn, thời gian đối diện với bản thân, nhìn lại chính mình mới là giá trị thật sự của việc đọc sách."
   }
  ],
  "quiz": [
   {
    "q": "筆者にとって、読書の本当の価値は何ですか。",
    "options": [
     "自分と向き合い、自分を見つめ直す時間",
     "知識をたくさん得ること",
     "お金をかけずに楽しむこと",
     "図書館で本を借りること"
    ],
    "answer": 0,
    "explain": "Tác giả cho rằng thời gian đối diện với bản thân, nhìn lại chính mình mới là giá trị thật sự của việc đọc sách.",
    "evidence": "自分と向き合い、自分を見つめ直す時間こそが、読書の本当の価値である",
    "tip": "Tìm câu có từ '価値' (giá trị) trong bài."
   },
   {
    "q": "図書館で借りた本を返すとき、筆者はどう感じますか。",
    "options": [
     "少し寂しい気持ちになる",
     "とてもうれしくなる",
     "ほっとして安心する",
     "何も感じない"
    ],
    "answer": 0,
    "explain": "Trong bài có nói khi trả cuốn sách mượn ở thư viện, tác giả luôn cảm thấy hơi buồn.",
    "evidence": "図書館で借りた本を返すとき、いつも少し寂しい気持ちになる",
    "tip": "Tìm câu về việc trả sách ở thư viện."
   }
  ]
 },
 {
  "id": "dk-n1-06",
  "img": "dk-n1-06.jpg",
  "audio": "dk-n1-06.mp3",
  "timings": [
   0.015,
   5.964,
   10.995,
   18.678,
   25.041,
   30.673,
   37.835,
   44.624,
   49.595,
   55.575,
   59.881,
   64.277
  ],
  "level": "N1",
  "title": "旅の 意味",
  "titleVi": "Ý nghĩa của du lịch",
  "sentences": [
   {
    "jp": "私は、旅に出るたびに、自分が少しずつ変わっていくのを感じる。",
    "furi": [
     [
      "私",
      "わたし"
     ],
     [
      "は",
      null
     ],
     [
      "、",
      null
     ],
     [
      "旅",
      "たび"
     ],
     [
      "に",
      null
     ],
     [
      "出",
      "で"
     ],
     [
      "る",
      null
     ],
     [
      "たび",
      null
     ],
     [
      "に",
      null
     ],
     [
      "、",
      null
     ],
     [
      "自分",
      "じぶん"
     ],
     [
      "が",
      null
     ],
     [
      "少",
      "すこ"
     ],
     [
      "しずつ",
      null
     ],
     [
      "変",
      "か"
     ],
     [
      "わって",
      null
     ],
     [
      "いく",
      null
     ],
     [
      "の",
      null
     ],
     [
      "を",
      null
     ],
     [
      "感",
      "かん"
     ],
     [
      "じる",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Mỗi lần đi du lịch, tôi cảm thấy mình đang thay đổi từng chút một."
   },
   {
    "jp": "旅の楽しみは、有名な観光地を見ることばかりではない。",
    "furi": [
     [
      "旅",
      "たび"
     ],
     [
      "の",
      null
     ],
     [
      "楽",
      "たの"
     ],
     [
      "しみ",
      null
     ],
     [
      "は",
      null
     ],
     [
      "、",
      null
     ],
     [
      "有名",
      "ゆうめい"
     ],
     [
      "な",
      null
     ],
     [
      "観光地",
      "かんこうち"
     ],
     [
      "を",
      null
     ],
     [
      "見",
      "み"
     ],
     [
      "る",
      null
     ],
     [
      "こと",
      null
     ],
     [
      "ばかり",
      null
     ],
     [
      "で",
      null
     ],
     [
      "は",
      null
     ],
     [
      "ない",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Niềm vui của du lịch không chỉ là ngắm những địa điểm nổi tiếng."
   },
   {
    "jp": "むしろ、道に迷ったときや、地元の人と話したときにこそ、旅の本当の味わいがある。",
    "furi": [
     [
      "むしろ",
      null
     ],
     [
      "、",
      null
     ],
     [
      "道",
      "みち"
     ],
     [
      "に",
      null
     ],
     [
      "迷",
      "まよ"
     ],
     [
      "った",
      null
     ],
     [
      "とき",
      null
     ],
     [
      "や",
      null
     ],
     [
      "、",
      null
     ],
     [
      "地元",
      "じもと"
     ],
     [
      "の",
      null
     ],
     [
      "人",
      "ひと"
     ],
     [
      "と",
      null
     ],
     [
      "話",
      "はな"
     ],
     [
      "した",
      null
     ],
     [
      "とき",
      null
     ],
     [
      "に",
      null
     ],
     [
      "こそ",
      null
     ],
     [
      "、",
      null
     ],
     [
      "旅",
      "たび"
     ],
     [
      "の",
      null
     ],
     [
      "本当",
      "ほんとう"
     ],
     [
      "の",
      null
     ],
     [
      "味",
      "あじ"
     ],
     [
      "わい",
      null
     ],
     [
      "が",
      null
     ],
     [
      "ある",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Mà đúng hơn, chính khi lạc đường hay khi trò chuyện với người dân địa phương, ta mới cảm nhận được hương vị thật sự của chuyến đi."
   },
   {
    "jp": "知らない土地では、当たり前だと思っていたことが、当たり前ではないことに気づく。",
    "furi": [
     [
      "知",
      "し"
     ],
     [
      "らない",
      null
     ],
     [
      "土地",
      "とち"
     ],
     [
      "で",
      null
     ],
     [
      "は",
      null
     ],
     [
      "、",
      null
     ],
     [
      "当",
      "あ"
     ],
     [
      "たり",
      null
     ],
     [
      "前",
      "まえ"
     ],
     [
      "だ",
      null
     ],
     [
      "と",
      null
     ],
     [
      "思",
      "おも"
     ],
     [
      "って",
      null
     ],
     [
      "いた",
      null
     ],
     [
      "こと",
      null
     ],
     [
      "が",
      null
     ],
     [
      "、",
      null
     ],
     [
      "当",
      "あ"
     ],
     [
      "たり",
      null
     ],
     [
      "前",
      "まえ"
     ],
     [
      "で",
      null
     ],
     [
      "は",
      null
     ],
     [
      "ない",
      null
     ],
     [
      "こと",
      null
     ],
     [
      "に",
      null
     ],
     [
      "気",
      "き"
     ],
     [
      "づく",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Ở vùng đất xa lạ, ta nhận ra những điều mình tưởng là hiển nhiên lại không hề hiển nhiên."
   },
   {
    "jp": "例えば、言葉が通じない国では、笑顔が何よりの言葉になる。",
    "furi": [
     [
      "例",
      "たと"
     ],
     [
      "えば",
      null
     ],
     [
      "、",
      null
     ],
     [
      "言葉",
      "ことば"
     ],
     [
      "が",
      null
     ],
     [
      "通",
      "つう"
     ],
     [
      "じない",
      null
     ],
     [
      "国",
      "くに"
     ],
     [
      "で",
      null
     ],
     [
      "は",
      null
     ],
     [
      "、",
      null
     ],
     [
      "笑顔",
      "えがお"
     ],
     [
      "が",
      null
     ],
     [
      "何",
      "なに"
     ],
     [
      "より",
      null
     ],
     [
      "の",
      null
     ],
     [
      "言葉",
      "ことば"
     ],
     [
      "に",
      null
     ],
     [
      "なる",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Ví dụ, ở đất nước mà ngôn ngữ không thông, nụ cười lại trở thành ngôn từ quý giá nhất."
   },
   {
    "jp": "旅先での出会いは、一生の宝物になるばかりか、人生の方向を変えることもある。",
    "furi": [
     [
      "旅先",
      "たびさき"
     ],
     [
      "で",
      null
     ],
     [
      "の",
      null
     ],
     [
      "出会",
      "であ"
     ],
     [
      "い",
      null
     ],
     [
      "は",
      null
     ],
     [
      "、",
      null
     ],
     [
      "一生",
      "いっしょう"
     ],
     [
      "の",
      null
     ],
     [
      "宝物",
      "たからもの"
     ],
     [
      "に",
      null
     ],
     [
      "なる",
      null
     ],
     [
      "ばかり",
      null
     ],
     [
      "か",
      null
     ],
     [
      "、",
      null
     ],
     [
      "人生",
      "じんせい"
     ],
     [
      "の",
      null
     ],
     [
      "方向",
      "ほうこう"
     ],
     [
      "を",
      null
     ],
     [
      "変",
      "か"
     ],
     [
      "える",
      null
     ],
     [
      "こと",
      null
     ],
     [
      "も",
      null
     ],
     [
      "ある",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Những cuộc gặp gỡ trong chuyến đi không chỉ trở thành báu vật suốt đời, mà còn có thể thay đổi hướng đi của cuộc đời."
   },
   {
    "jp": "写真に残せない景色や、匂いや、音こそが、旅の思い出を豊かにする。",
    "furi": [
     [
      "写真",
      "しゃしん"
     ],
     [
      "に",
      null
     ],
     [
      "残",
      "のこ"
     ],
     [
      "せない",
      null
     ],
     [
      "景色",
      "けしき"
     ],
     [
      "や",
      null
     ],
     [
      "、",
      null
     ],
     [
      "匂",
      "にお"
     ],
     [
      "い",
      null
     ],
     [
      "や",
      null
     ],
     [
      "、",
      null
     ],
     [
      "音",
      "おと"
     ],
     [
      "こそ",
      null
     ],
     [
      "が",
      null
     ],
     [
      "、",
      null
     ],
     [
      "旅",
      "たび"
     ],
     [
      "の",
      null
     ],
     [
      "思",
      "おも"
     ],
     [
      "い",
      null
     ],
     [
      "出",
      "で"
     ],
     [
      "を",
      null
     ],
     [
      "豊",
      "ゆた"
     ],
     [
      "か",
      null
     ],
     [
      "に",
      null
     ],
     [
      "する",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Chính những phong cảnh không thể lưu lại bằng ảnh, những mùi hương, những âm thanh mới làm cho kỷ niệm chuyến đi thêm phong phú."
   },
   {
    "jp": "旅は、自分を見つけるための、最も確かな方法だ。",
    "furi": [
     [
      "旅",
      "たび"
     ],
     [
      "は",
      null
     ],
     [
      "、",
      null
     ],
     [
      "自分",
      "じぶん"
     ],
     [
      "を",
      null
     ],
     [
      "見",
      "み"
     ],
     [
      "つける",
      null
     ],
     [
      "ため",
      null
     ],
     [
      "の",
      null
     ],
     [
      "、",
      null
     ],
     [
      "最",
      "もっと"
     ],
     [
      "も",
      null
     ],
     [
      "確",
      "たし"
     ],
     [
      "か",
      null
     ],
     [
      "な",
      null
     ],
     [
      "方法",
      "ほうほう"
     ],
     [
      "だ",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Du lịch là cách chắc chắn nhất để tìm thấy chính mình."
   },
   {
    "jp": "帰ってきた後、日常の風景が、以前とは違って見えることがある。",
    "furi": [
     [
      "帰",
      "かえ"
     ],
     [
      "って",
      null
     ],
     [
      "きた",
      null
     ],
     [
      "後",
      "あと"
     ],
     [
      "、",
      null
     ],
     [
      "日常",
      "にちじょう"
     ],
     [
      "の",
      null
     ],
     [
      "風景",
      "ふうけい"
     ],
     [
      "が",
      null
     ],
     [
      "、",
      null
     ],
     [
      "以前",
      "いぜん"
     ],
     [
      "と",
      null
     ],
     [
      "は",
      null
     ],
     [
      "違",
      "ちが"
     ],
     [
      "って",
      null
     ],
     [
      "見",
      "み"
     ],
     [
      "える",
      null
     ],
     [
      "こと",
      null
     ],
     [
      "が",
      null
     ],
     [
      "ある",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Sau khi trở về, có khi phong cảnh thường ngày lại hiện ra khác hẳn so với trước đây."
   },
   {
    "jp": "それは、旅が私の目の向きを変えたというわけだ。",
    "furi": [
     [
      "それ",
      null
     ],
     [
      "は",
      null
     ],
     [
      "、",
      null
     ],
     [
      "旅",
      "たび"
     ],
     [
      "が",
      null
     ],
     [
      "私",
      "わたし"
     ],
     [
      "の",
      null
     ],
     [
      "目",
      "め"
     ],
     [
      "の",
      null
     ],
     [
      "向",
      "む"
     ],
     [
      "き",
      null
     ],
     [
      "を",
      null
     ],
     [
      "変",
      "か"
     ],
     [
      "えた",
      null
     ],
     [
      "と",
      null
     ],
     [
      "いう",
      null
     ],
     [
      "わけ",
      null
     ],
     [
      "だ",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Đó là vì chuyến đi đã thay đổi hướng nhìn của tôi."
   },
   {
    "jp": "旅に出ることは、新しい自分に出会うことでもある。",
    "furi": [
     [
      "旅",
      "たび"
     ],
     [
      "に",
      null
     ],
     [
      "出",
      "で"
     ],
     [
      "る",
      null
     ],
     [
      "こと",
      null
     ],
     [
      "は",
      null
     ],
     [
      "、",
      null
     ],
     [
      "新",
      "あたら"
     ],
     [
      "しい",
      null
     ],
     [
      "自分",
      "じぶん"
     ],
     [
      "に",
      null
     ],
     [
      "出会",
      "であ"
     ],
     [
      "う",
      null
     ],
     [
      "こと",
      null
     ],
     [
      "で",
      null
     ],
     [
      "も",
      null
     ],
     [
      "ある",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Đi du lịch cũng là gặp gỡ một bản thân mới."
   },
   {
    "jp": "だからこそ、私はこれからも旅を続けていきたい。",
    "furi": [
     [
      "だからこそ",
      null
     ],
     [
      "、",
      null
     ],
     [
      "私",
      "わたし"
     ],
     [
      "は",
      null
     ],
     [
      "これからも",
      null
     ],
     [
      "旅",
      "たび"
     ],
     [
      "を",
      null
     ],
     [
      "続",
      "つづ"
     ],
     [
      "けて",
      null
     ],
     [
      "いきたい",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Chính vì vậy, tôi muốn tiếp tục đi du lịch từ nay về sau."
   }
  ],
  "vocab": [
   {
    "w": "出会い",
    "r": "であい",
    "hv": "XUẤT HỘI",
    "vi": "Cuộc gặp gỡ"
   },
   {
    "w": "宝物",
    "r": "たからもの",
    "hv": "BẢO VẬT",
    "vi": "Báu vật, vật quý giá"
   },
   {
    "w": "匂い",
    "r": "におい",
    "hv": null,
    "vi": "Mùi hương"
   },
   {
    "w": "見つける",
    "r": "みつける",
    "hv": "KIẾN",
    "vi": "Tìm thấy, phát hiện ra"
   },
   {
    "w": "気づく",
    "r": "きづく",
    "hv": "KHÍ",
    "vi": "Nhận ra, để ý thấy"
   },
   {
    "w": "風景",
    "r": "ふうけい",
    "hv": "PHONG CẢNH",
    "vi": "Phong cảnh"
   }
  ],
  "grammar": [
   {
    "p": "〜ばかりか",
    "lv": "N1",
    "vi": "Không chỉ… mà còn…",
    "ex": "旅先での出会いは、一生の宝物になるばかりか、人生の方向を変えることもある。",
    "exVi": "Những cuộc gặp gỡ trong chuyến đi không chỉ trở thành báu vật suốt đời, mà còn có thể thay đổi hướng đi của cuộc đời."
   },
   {
    "p": "〜わけだ",
    "lv": "N3",
    "vi": "Đương nhiên là… / chính là vì…",
    "ex": "それは、旅が私の目の向きを変えたというわけだ。",
    "exVi": "Đó là vì chuyến đi đã thay đổi hướng nhìn của tôi."
   }
  ],
  "quiz": [
   {
    "q": "筆者は、旅の本当の味わいはどこにあると述べていますか。",
    "options": [
     "道に迷ったときや、地元の人と話したとき",
     "有名な観光地を見たとき",
     "写真をたくさん撮ったとき",
     "お土産を買ったとき"
    ],
    "answer": 0,
    "explain": "Tác giả cho rằng chính khi lạc đường hay khi trò chuyện với người dân địa phương, ta mới cảm nhận được hương vị thật sự của chuyến đi.",
    "evidence": "道に迷ったときや、地元の人と話したときにこそ、旅の本当の味わいがある",
    "tip": "Tìm câu có từ '味わい' (hương vị) trong bài."
   },
   {
    "q": "旅先での出会いは、何になることもあると述べられていますか。",
    "options": [
     "一生の宝物",
     "忘れられない失敗",
     "高い買い物",
     "忙しい仕事"
    ],
    "answer": 0,
    "explain": "Trong bài có nói những cuộc gặp gỡ trong chuyến đi không chỉ trở thành báu vật suốt đời, mà còn có thể thay đổi hướng đi của cuộc đời.",
    "evidence": "旅先での出会いは、一生の宝物になるばかりか、人生の方向を変えることもある",
    "tip": "Tìm câu về '出会い' (cuộc gặp gỡ) trong bài."
   }
  ]
 },
 {
  "id": "dk-n1-07",
  "img": "dk-n1-07.jpg",
  "audio": "dk-n1-07.mp3",
  "timings": [
   0.015,
   5.4,
   12.124,
   16.093,
   21.167,
   26.731,
   32.27,
   34.88,
   40.158,
   45.077,
   50.102,
   54.852
  ],
  "level": "N1",
  "title": "時間と 人生",
  "titleVi": "Thời gian và cuộc đời",
  "sentences": [
   {
    "jp": "私たちは、時間が限られていることを、忘れてしまうことがある。",
    "furi": [
     [
      "私",
      "わたし"
     ],
     [
      "たち",
      null
     ],
     [
      "は",
      null
     ],
     [
      "、",
      null
     ],
     [
      "時間",
      "じかん"
     ],
     [
      "が",
      null
     ],
     [
      "限",
      "かぎ"
     ],
     [
      "られて",
      null
     ],
     [
      "いる",
      null
     ],
     [
      "こと",
      null
     ],
     [
      "を",
      null
     ],
     [
      "、",
      null
     ],
     [
      "忘",
      "わす"
     ],
     [
      "れて",
      null
     ],
     [
      "しまう",
      null
     ],
     [
      "こと",
      null
     ],
     [
      "が",
      null
     ],
     [
      "ある",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Chúng ta đôi khi quên mất rằng thời gian là có hạn."
   },
   {
    "jp": "若いときは、時間が無限にあると思いきや、いつのまにか、年を取ってしまう。",
    "furi": [
     [
      "若",
      "わか"
     ],
     [
      "い",
      null
     ],
     [
      "とき",
      null
     ],
     [
      "は",
      null
     ],
     [
      "、",
      null
     ],
     [
      "時間",
      "じかん"
     ],
     [
      "が",
      null
     ],
     [
      "無限",
      "むげん"
     ],
     [
      "に",
      null
     ],
     [
      "ある",
      null
     ],
     [
      "と",
      null
     ],
     [
      "思",
      "おも"
     ],
     [
      "いきや",
      null
     ],
     [
      "、",
      null
     ],
     [
      "いつのまにか",
      null
     ],
     [
      "、",
      null
     ],
     [
      "年",
      "とし"
     ],
     [
      "を",
      null
     ],
     [
      "取",
      "と"
     ],
     [
      "って",
      null
     ],
     [
      "しまう",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Khi còn trẻ, cứ tưởng thời gian là vô hạn, vậy mà lúc nào không hay, ta đã già đi."
   },
   {
    "jp": "時間は、誰にでも平等に与えられている。",
    "furi": [
     [
      "時間",
      "じかん"
     ],
     [
      "は",
      null
     ],
     [
      "、",
      null
     ],
     [
      "誰",
      "だれ"
     ],
     [
      "に",
      null
     ],
     [
      "でも",
      null
     ],
     [
      "平等",
      "びょうどう"
     ],
     [
      "に",
      null
     ],
     [
      "与",
      "あた"
     ],
     [
      "えられて",
      null
     ],
     [
      "いる",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Thời gian được ban cho mọi người một cách bình đẳng."
   },
   {
    "jp": "しかし、その時間をどう使うかで、人生は大きく変わる。",
    "furi": [
     [
      "しかし",
      null
     ],
     [
      "、",
      null
     ],
     [
      "その",
      null
     ],
     [
      "時間",
      "じかん"
     ],
     [
      "を",
      null
     ],
     [
      "どう",
      null
     ],
     [
      "使",
      "つか"
     ],
     [
      "う",
      null
     ],
     [
      "か",
      null
     ],
     [
      "で",
      null
     ],
     [
      "、",
      null
     ],
     [
      "人生",
      "じんせい"
     ],
     [
      "は",
      null
     ],
     [
      "大",
      "おお"
     ],
     [
      "きく",
      null
     ],
     [
      "変",
      "か"
     ],
     [
      "わる",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Tuy nhiên, cuộc đời thay đổi lớn tùy thuộc vào việc ta dùng thời gian đó như thế nào."
   },
   {
    "jp": "忙しい日々の中で、大切なことを後回しにしてしまう人は多い。",
    "furi": [
     [
      "忙",
      "いそが"
     ],
     [
      "しい",
      null
     ],
     [
      "日",
      "ひ"
     ],
     [
      "々",
      "び"
     ],
     [
      "の",
      null
     ],
     [
      "中",
      "なか"
     ],
     [
      "で",
      null
     ],
     [
      "、",
      null
     ],
     [
      "大切",
      "たいせつ"
     ],
     [
      "な",
      null
     ],
     [
      "こと",
      null
     ],
     [
      "を",
      null
     ],
     [
      "後",
      "あと"
     ],
     [
      "回",
      "まわ"
     ],
     [
      "し",
      null
     ],
     [
      "に",
      null
     ],
     [
      "して",
      null
     ],
     [
      "しまう",
      null
     ],
     [
      "人",
      "ひと"
     ],
     [
      "は",
      null
     ],
     [
      "多",
      "おお"
     ],
     [
      "い",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Trong những ngày bận rộn, có nhiều người cứ trì hoãn những việc quan trọng."
   },
   {
    "jp": "時間を無駄にしないためには、何を優先するかを決めなければならない。",
    "furi": [
     [
      "時間",
      "じかん"
     ],
     [
      "を",
      null
     ],
     [
      "無駄",
      "むだ"
     ],
     [
      "に",
      null
     ],
     [
      "しない",
      null
     ],
     [
      "ため",
      null
     ],
     [
      "に",
      null
     ],
     [
      "は",
      null
     ],
     [
      "、",
      null
     ],
     [
      "何",
      "なに"
     ],
     [
      "を",
      null
     ],
     [
      "優先",
      "ゆうせん"
     ],
     [
      "する",
      null
     ],
     [
      "か",
      null
     ],
     [
      "を",
      null
     ],
     [
      "決",
      "き"
     ],
     [
      "めなければ",
      null
     ],
     [
      "ならない",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Để không lãng phí thời gian, ta phải quyết định xem nên ưu tiên điều gì."
   },
   {
    "jp": "早く始めるに越したことはない。",
    "furi": [
     [
      "早",
      "はや"
     ],
     [
      "く",
      null
     ],
     [
      "始",
      "はじ"
     ],
     [
      "める",
      null
     ],
     [
      "に",
      null
     ],
     [
      "越",
      "こ"
     ],
     [
      "した",
      null
     ],
     [
      "こと",
      null
     ],
     [
      "は",
      null
     ],
     [
      "ない",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Bắt đầu càng sớm càng tốt."
   },
   {
    "jp": "失敗を恐れずに、挑戦することが、人生を豊かにする。",
    "furi": [
     [
      "失敗",
      "しっぱい"
     ],
     [
      "を",
      null
     ],
     [
      "恐",
      "おそ"
     ],
     [
      "れずに",
      null
     ],
     [
      "、",
      null
     ],
     [
      "挑戦",
      "ちょうせん"
     ],
     [
      "する",
      null
     ],
     [
      "こと",
      null
     ],
     [
      "が",
      null
     ],
     [
      "、",
      null
     ],
     [
      "人生",
      "じんせい"
     ],
     [
      "を",
      null
     ],
     [
      "豊",
      "ゆた"
     ],
     [
      "かに",
      null
     ],
     [
      "する",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Không sợ thất bại mà dám thử thách sẽ làm cho cuộc đời trở nên phong phú."
   },
   {
    "jp": "過去を振り返ると、後悔ばかりが残っているように思える。",
    "furi": [
     [
      "過去",
      "かこ"
     ],
     [
      "を",
      null
     ],
     [
      "振",
      "ふ"
     ],
     [
      "り",
      null
     ],
     [
      "返",
      "かえ"
     ],
     [
      "る",
      null
     ],
     [
      "と",
      null
     ],
     [
      "、",
      null
     ],
     [
      "後悔",
      "こうかい"
     ],
     [
      "ばかり",
      null
     ],
     [
      "が",
      null
     ],
     [
      "残",
      "のこ"
     ],
     [
      "って",
      null
     ],
     [
      "いる",
      null
     ],
     [
      "ように",
      null
     ],
     [
      "思",
      "おも"
     ],
     [
      "える",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Khi nhìn lại quá khứ, dường như chỉ còn lại những hối tiếc."
   },
   {
    "jp": "しかし、後悔こそが、次の一歩を踏み出す力になる。",
    "furi": [
     [
      "しかし",
      null
     ],
     [
      "、",
      null
     ],
     [
      "後悔",
      "こうかい"
     ],
     [
      "こそ",
      null
     ],
     [
      "が",
      null
     ],
     [
      "、",
      null
     ],
     [
      "次",
      "つぎ"
     ],
     [
      "の",
      null
     ],
     [
      "一歩",
      "いっぽ"
     ],
     [
      "を",
      null
     ],
     [
      "踏",
      "ふ"
     ],
     [
      "み",
      null
     ],
     [
      "出",
      "だ"
     ],
     [
      "す",
      null
     ],
     [
      "力",
      "ちから"
     ],
     [
      "に",
      null
     ],
     [
      "なる",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Tuy nhiên, chính sự hối tiếc lại trở thành sức mạnh để bước tiếp."
   },
   {
    "jp": "時間を大切にする人は、人生を充実させていく。",
    "furi": [
     [
      "時間",
      "じかん"
     ],
     [
      "を",
      null
     ],
     [
      "大切",
      "たいせつ"
     ],
     [
      "に",
      null
     ],
     [
      "する",
      null
     ],
     [
      "人",
      "ひと"
     ],
     [
      "は",
      null
     ],
     [
      "、",
      null
     ],
     [
      "人生",
      "じんせい"
     ],
     [
      "を",
      null
     ],
     [
      "充実",
      "じゅうじつ"
     ],
     [
      "させて",
      null
     ],
     [
      "いく",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Người biết trân trọng thời gian sẽ làm cho cuộc đời mình trở nên đầy đủ, phong phú."
   },
   {
    "jp": "だからこそ、今この瞬間を大切に生きたい。",
    "furi": [
     [
      "だからこそ",
      null
     ],
     [
      "、",
      null
     ],
     [
      "今",
      "いま"
     ],
     [
      "この",
      null
     ],
     [
      "瞬間",
      "しゅんかん"
     ],
     [
      "を",
      null
     ],
     [
      "大切",
      "たいせつ"
     ],
     [
      "に",
      null
     ],
     [
      "生",
      "い"
     ],
     [
      "きたい",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Chính vì vậy, tôi muốn sống trân trọng từng khoảnh khắc ngay lúc này."
   }
  ],
  "vocab": [
   {
    "w": "時間",
    "r": "じかん",
    "hv": "THỜI GIAN",
    "vi": "Thời gian"
   },
   {
    "w": "人生",
    "r": "じんせい",
    "hv": "NHÂN SANH",
    "vi": "Cuộc đời"
   },
   {
    "w": "無限",
    "r": "むげん",
    "hv": "VÔ HẠN",
    "vi": "Vô hạn"
   },
   {
    "w": "後悔",
    "r": "こうかい",
    "hv": "HẬU HỐI",
    "vi": "Hối tiếc, hối hận"
   },
   {
    "w": "優先",
    "r": "ゆうせん",
    "hv": "ƯU TIÊN",
    "vi": "Ưu tiên"
   },
   {
    "w": "充実",
    "r": "じゅうじつ",
    "hv": "SUNG THỰC",
    "vi": "Đầy đủ, phong phú (cuộc sống)"
   }
  ],
  "grammar": [
   {
    "p": "〜と思いきや",
    "lv": "N1",
    "vi": "Cứ tưởng là… vậy mà… (ngoài dự đoán)",
    "ex": "若いときは、時間が無限にあると思いきや、いつのまにか、年を取ってしまう。",
    "exVi": "Khi còn trẻ, cứ tưởng thời gian là vô hạn, vậy mà lúc nào không hay, ta đã già đi."
   },
   {
    "p": "〜に越したことはない",
    "lv": "N1",
    "vi": "Không gì hơn là… / … là tốt nhất",
    "ex": "早く始めるに越したことはない。",
    "exVi": "Bắt đầu càng sớm càng tốt."
   }
  ],
  "quiz": [
   {
    "q": "筆者は、若いときに時間についてどう思っていましたか。",
    "options": [
     "無限にあると",
     "限られていると",
     "足りないと",
     "大切だと"
    ],
    "answer": 0,
    "explain": "Tác giả cho rằng khi còn trẻ, cứ tưởng thời gian là vô hạn.",
    "evidence": "時間が無限にあると思いきや",
    "tip": "Tìm câu có từ '無限' trong bài."
   },
   {
    "q": "時間を無駄にしないためには、何を決めなければなりませんか。",
    "options": [
     "何を優先するかを",
     "何を買うかを",
     "どこへ行くかを",
     "誰と会うかを"
    ],
    "answer": 0,
    "explain": "Trong bài có nói để không lãng phí thời gian, ta phải quyết định xem nên ưu tiên điều gì.",
    "evidence": "何を優先するかを決めなければならない",
    "tip": "Tìm câu có từ '無駄' trong bài."
   }
  ]
 },
 {
  "id": "dk-n1-08",
  "img": "dk-n1-08.jpg",
  "audio": "dk-n1-08.mp3",
  "timings": [
   0.015,
   2.733,
   6.115,
   10.707,
   16.194,
   22.118,
   27.747,
   30.361,
   33.635,
   38.486,
   43.612,
   48.75
  ],
  "level": "N1",
  "title": "失敗から 学ぶこと",
  "titleVi": "Học từ thất bại",
  "sentences": [
   {
    "jp": "誰でも、失敗をしたことがある。",
    "furi": [
     [
      "誰",
      "だれ"
     ],
     [
      "でも",
      null
     ],
     [
      "、",
      null
     ],
     [
      "失敗",
      "しっぱい"
     ],
     [
      "を",
      null
     ],
     [
      "した",
      null
     ],
     [
      "こと",
      null
     ],
     [
      "が",
      null
     ],
     [
      "ある",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Ai cũng từng thất bại."
   },
   {
    "jp": "失敗をすると、恥ずかしい気持ちになる。",
    "furi": [
     [
      "失敗",
      "しっぱい"
     ],
     [
      "を",
      null
     ],
     [
      "する",
      null
     ],
     [
      "と",
      null
     ],
     [
      "、",
      null
     ],
     [
      "恥",
      "は"
     ],
     [
      "ずかしい",
      null
     ],
     [
      "気持",
      "きも"
     ],
     [
      "ち",
      null
     ],
     [
      "に",
      null
     ],
     [
      "なる",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Khi thất bại, ta cảm thấy xấu hổ."
   },
   {
    "jp": "しかし、失敗してこそ、本当に学ぶことができる。",
    "furi": [
     [
      "しかし",
      null
     ],
     [
      "、",
      null
     ],
     [
      "失敗",
      "しっぱい"
     ],
     [
      "してこそ",
      null
     ],
     [
      "、",
      null
     ],
     [
      "本当",
      "ほんとう"
     ],
     [
      "に",
      null
     ],
     [
      "学",
      "まな"
     ],
     [
      "ぶ",
      null
     ],
     [
      "こと",
      null
     ],
     [
      "が",
      null
     ],
     [
      "できる",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Nhưng chính nhờ thất bại, ta mới thực sự học được."
   },
   {
    "jp": "成功ばかりを追い求めていては、新しいことに挑戦できなくなる。",
    "furi": [
     [
      "成功",
      "せいこう"
     ],
     [
      "ばかり",
      null
     ],
     [
      "を",
      null
     ],
     [
      "追",
      "お"
     ],
     [
      "い",
      null
     ],
     [
      "求",
      "もと"
     ],
     [
      "めて",
      null
     ],
     [
      "いては",
      null
     ],
     [
      "、",
      null
     ],
     [
      "新",
      "あたら"
     ],
     [
      "しい",
      null
     ],
     [
      "こと",
      null
     ],
     [
      "に",
      null
     ],
     [
      "挑戦",
      "ちょうせん"
     ],
     [
      "できなく",
      null
     ],
     [
      "なる",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Nếu chỉ mãi theo đuổi thành công, ta sẽ không thể thử thách những điều mới."
   },
   {
    "jp": "失敗の原因を考えるせいか、次は同じ失敗をしないようになった。",
    "furi": [
     [
      "失敗",
      "しっぱい"
     ],
     [
      "の",
      null
     ],
     [
      "原因",
      "げんいん"
     ],
     [
      "を",
      null
     ],
     [
      "考",
      "かんが"
     ],
     [
      "える",
      null
     ],
     [
      "せいか",
      null
     ],
     [
      "、",
      null
     ],
     [
      "次",
      "つぎ"
     ],
     [
      "は",
      null
     ],
     [
      "同",
      "おな"
     ],
     [
      "じ",
      null
     ],
     [
      "失敗",
      "しっぱい"
     ],
     [
      "を",
      null
     ],
     [
      "しない",
      null
     ],
     [
      "ように",
      null
     ],
     [
      "なった",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Có lẽ vì suy nghĩ về nguyên nhân thất bại mà lần sau tôi đã không còn mắc cùng một lỗi nữa."
   },
   {
    "jp": "失敗を経験した人は、他の人の苦しみを理解できるようになる。",
    "furi": [
     [
      "失敗",
      "しっぱい"
     ],
     [
      "を",
      null
     ],
     [
      "経験",
      "けいけん"
     ],
     [
      "した",
      null
     ],
     [
      "人",
      "ひと"
     ],
     [
      "は",
      null
     ],
     [
      "、",
      null
     ],
     [
      "他",
      "ほか"
     ],
     [
      "の",
      null
     ],
     [
      "人",
      "ひと"
     ],
     [
      "の",
      null
     ],
     [
      "苦",
      "くる"
     ],
     [
      "しみ",
      null
     ],
     [
      "を",
      null
     ],
     [
      "理解",
      "りかい"
     ],
     [
      "できる",
      null
     ],
     [
      "ように",
      null
     ],
     [
      "なる",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Người từng trải qua thất bại sẽ có thể thấu hiểu nỗi khổ của người khác."
   },
   {
    "jp": "失敗は、けっして無駄ではない。",
    "furi": [
     [
      "失敗",
      "しっぱい"
     ],
     [
      "は",
      null
     ],
     [
      "、",
      null
     ],
     [
      "けっして",
      null
     ],
     [
      "無駄",
      "むだ"
     ],
     [
      "では",
      null
     ],
     [
      "ない",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Thất bại không bao giờ là vô ích."
   },
   {
    "jp": "むしろ、失敗は成長への近道だ。",
    "furi": [
     [
      "むしろ",
      null
     ],
     [
      "、",
      null
     ],
     [
      "失敗",
      "しっぱい"
     ],
     [
      "は",
      null
     ],
     [
      "成長",
      "せいちょう"
     ],
     [
      "へ",
      null
     ],
     [
      "の",
      null
     ],
     [
      "近",
      "ちか"
     ],
     [
      "道",
      "みち"
     ],
     [
      "だ",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Đúng hơn, thất bại là con đường ngắn nhất đến sự trưởng thành."
   },
   {
    "jp": "大切なのは、失敗から何を学び、どう変わるかだ。",
    "furi": [
     [
      "大切",
      "たいせつ"
     ],
     [
      "な",
      null
     ],
     [
      "の",
      null
     ],
     [
      "は",
      null
     ],
     [
      "、",
      null
     ],
     [
      "失敗",
      "しっぱい"
     ],
     [
      "から",
      null
     ],
     [
      "何",
      "なに"
     ],
     [
      "を",
      null
     ],
     [
      "学",
      "まな"
     ],
     [
      "び",
      null
     ],
     [
      "、",
      null
     ],
     [
      "どう",
      null
     ],
     [
      "変",
      "か"
     ],
     [
      "わる",
      null
     ],
     [
      "か",
      null
     ],
     [
      "だ",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Điều quan trọng là ta học được gì từ thất bại và thay đổi như thế nào."
   },
   {
    "jp": "失敗を恐れるあまり、何もしない人は、何も得られない。",
    "furi": [
     [
      "失敗",
      "しっぱい"
     ],
     [
      "を",
      null
     ],
     [
      "恐",
      "おそ"
     ],
     [
      "れる",
      null
     ],
     [
      "あまり",
      null
     ],
     [
      "、",
      null
     ],
     [
      "何",
      "なに"
     ],
     [
      "も",
      null
     ],
     [
      "しない",
      null
     ],
     [
      "人",
      "ひと"
     ],
     [
      "は",
      null
     ],
     [
      "、",
      null
     ],
     [
      "何",
      "なに"
     ],
     [
      "も",
      null
     ],
     [
      "得",
      "え"
     ],
     [
      "られない",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Người vì quá sợ thất bại mà không làm gì cả sẽ chẳng đạt được gì."
   },
   {
    "jp": "失敗を繰り返さないために、反省する習慣を身につけたい。",
    "furi": [
     [
      "失敗",
      "しっぱい"
     ],
     [
      "を",
      null
     ],
     [
      "繰",
      "く"
     ],
     [
      "り",
      null
     ],
     [
      "返",
      "かえ"
     ],
     [
      "さない",
      null
     ],
     [
      "ため",
      null
     ],
     [
      "に",
      null
     ],
     [
      "、",
      null
     ],
     [
      "反省",
      "はんせい"
     ],
     [
      "する",
      null
     ],
     [
      "習慣",
      "しゅうかん"
     ],
     [
      "を",
      null
     ],
     [
      "身",
      "み"
     ],
     [
      "に",
      null
     ],
     [
      "つけたい",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Để không lặp lại thất bại, tôi muốn tập thói quen tự nhìn lại mình."
   },
   {
    "jp": "失敗から学ぶことが、人生を豊かにする一番の方法だ。",
    "furi": [
     [
      "失敗",
      "しっぱい"
     ],
     [
      "から",
      null
     ],
     [
      "学",
      "まな"
     ],
     [
      "ぶ",
      null
     ],
     [
      "こと",
      null
     ],
     [
      "が",
      null
     ],
     [
      "、",
      null
     ],
     [
      "人生",
      "じんせい"
     ],
     [
      "を",
      null
     ],
     [
      "豊",
      "ゆた"
     ],
     [
      "かに",
      null
     ],
     [
      "する",
      null
     ],
     [
      "一番",
      "いちばん"
     ],
     [
      "の",
      null
     ],
     [
      "方法",
      "ほうほう"
     ],
     [
      "だ",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Học từ thất bại là cách tốt nhất để làm cho cuộc đời trở nên phong phú."
   }
  ],
  "vocab": [
   {
    "w": "失敗",
    "r": "しっぱい",
    "hv": "THẤT BẠI",
    "vi": "Thất bại"
   },
   {
    "w": "経験",
    "r": "けいけん",
    "hv": "KINH NGHIỆM",
    "vi": "Kinh nghiệm"
   },
   {
    "w": "挑戦",
    "r": "ちょうせん",
    "hv": "KHIÊU CHIẾN",
    "vi": "Thử thách"
   },
   {
    "w": "成長",
    "r": "せいちょう",
    "hv": "THÀNH TRƯỞNG",
    "vi": "Trưởng thành, phát triển"
   },
   {
    "w": "反省",
    "r": "はんせい",
    "hv": "PHẢN TỈNH",
    "vi": "Tự kiểm điểm, nhìn lại (lỗi của mình)"
   },
   {
    "w": "恐れる",
    "r": "おそれる",
    "hv": "KHỦNG",
    "vi": "Sợ"
   }
  ],
  "grammar": [
   {
    "p": "V-て こそ",
    "lv": "N1",
    "vi": "Chính nhờ… mới… / phải… mới…",
    "ex": "しかし、失敗してこそ、本当に学ぶことができる。",
    "exVi": "Nhưng chính nhờ thất bại, ta mới thực sự học được."
   },
   {
    "p": "〜せいか",
    "lv": "N1",
    "vi": "Có lẽ vì… / không biết có phải vì… không mà…",
    "ex": "失敗の原因を考えるせいか、次は同じ失敗をしないようになった。",
    "exVi": "Có lẽ vì suy nghĩ về nguyên nhân thất bại mà lần sau tôi đã không còn mắc cùng một lỗi nữa."
   }
  ],
  "quiz": [
   {
    "q": "筆者は、失敗についてどう述べていますか。",
    "options": [
     "失敗してこそ、本当に学ぶことができる",
     "失敗はけっして学びにならない",
     "失敗は避けるべきだ",
     "失敗は恥ずかしいだけだ"
    ],
    "answer": 0,
    "explain": "Tác giả cho rằng chính nhờ thất bại, ta mới thực sự học được.",
    "evidence": "失敗してこそ、本当に学ぶことができる",
    "tip": "Tìm câu có từ 'こそ' trong bài."
   },
   {
    "q": "失敗を恐れるあまり、何もしない人はどうなりますか。",
    "options": [
     "何も得られない",
     "たくさん得られる",
     "成功する",
     "成長する"
    ],
    "answer": 0,
    "explain": "Trong bài có nói người vì quá sợ thất bại mà không làm gì cả sẽ chẳng đạt được gì.",
    "evidence": "何もしない人は、何も得られない",
    "tip": "Tìm câu có từ '恐れる' trong bài."
   }
  ]
 },
 {
  "id": "dk-n1-09",
  "img": "dk-n1-09.jpg",
  "audio": "dk-n1-09.mp3",
  "timings": [
   0.015,
   5.995,
   10.658,
   16.108,
   21.549,
   27.148,
   31.655,
   37.288,
   42.181,
   47.799,
   52.729,
   58.221
  ],
  "level": "N1",
  "title": "他者への想像力",
  "titleVi": "Trí tưởng tượng hướng về người khác",
  "sentences": [
   {
    "jp": "他者を理解するためには、まず自分の考えを疑ってみる必要がある。",
    "furi": [
     [
      "他者",
      "たしゃ"
     ],
     [
      "を",
      null
     ],
     [
      "理解",
      "りかい"
     ],
     [
      "するためには",
      null
     ],
     [
      "、",
      null
     ],
     [
      "まず",
      null
     ],
     [
      "自分",
      "じぶん"
     ],
     [
      "の",
      null
     ],
     [
      "考",
      "かんが"
     ],
     [
      "えを",
      null
     ],
     [
      "疑",
      "うたが"
     ],
     [
      "ってみる",
      null
     ],
     [
      "必要",
      "ひつよう"
     ],
     [
      "が",
      null
     ],
     [
      "ある",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Để hiểu người khác, trước hết cần thử nghi ngờ chính suy nghĩ của mình."
   },
   {
    "jp": "私たちは、つい自分の立場から物事を見てしまう。",
    "furi": [
     [
      "私",
      "わたし"
     ],
     [
      "たちは",
      null
     ],
     [
      "、",
      null
     ],
     [
      "つい",
      null
     ],
     [
      "自分",
      "じぶん"
     ],
     [
      "の",
      null
     ],
     [
      "立場",
      "たちば"
     ],
     [
      "から",
      null
     ],
     [
      "物事",
      "ものごと"
     ],
     [
      "を",
      null
     ],
     [
      "見",
      "み"
     ],
     [
      "てしまう",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Chúng ta thường vô thức nhìn mọi việc từ lập trường của mình."
   },
   {
    "jp": "しかし、相手にも自分と同じように、喜びや悲しみがある。",
    "furi": [
     [
      "しかし",
      null
     ],
     [
      "、",
      null
     ],
     [
      "相手",
      "あいて"
     ],
     [
      "にも",
      null
     ],
     [
      "自分",
      "じぶん"
     ],
     [
      "と",
      null
     ],
     [
      "同",
      "おな"
     ],
     [
      "じように",
      null
     ],
     [
      "、",
      null
     ],
     [
      "喜",
      "よろこ"
     ],
     [
      "びや",
      null
     ],
     [
      "悲",
      "かな"
     ],
     [
      "しみが",
      null
     ],
     [
      "ある",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Nhưng người khác cũng có niềm vui và nỗi buồn giống như mình."
   },
   {
    "jp": "相手の気持ちを想像することは、相手を尊重することに等しい。",
    "furi": [
     [
      "相手",
      "あいて"
     ],
     [
      "の",
      null
     ],
     [
      "気持ち",
      "きもち"
     ],
     [
      "を",
      null
     ],
     [
      "想像",
      "そうぞう"
     ],
     [
      "することは",
      null
     ],
     [
      "、",
      null
     ],
     [
      "相手",
      "あいて"
     ],
     [
      "を",
      null
     ],
     [
      "尊重",
      "そんちょう"
     ],
     [
      "することに",
      null
     ],
     [
      "等",
      "ひと"
     ],
     [
      "しい",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Tưởng tượng cảm xúc của người khác cũng tương đương với việc tôn trọng họ."
   },
   {
    "jp": "想像力がないと、自分の考えすら絶対だと思い込んでしまう。",
    "furi": [
     [
      "想像力",
      "そうぞうりょく"
     ],
     [
      "がないと",
      null
     ],
     [
      "、",
      null
     ],
     [
      "自分",
      "じぶん"
     ],
     [
      "の",
      null
     ],
     [
      "考",
      "かんが"
     ],
     [
      "えすら",
      null
     ],
     [
      "絶対",
      "ぜったい"
     ],
     [
      "だと",
      null
     ],
     [
      "思",
      "おも"
     ],
     [
      "い",
      null
     ],
     [
      "込",
      "こ"
     ],
     [
      "んでしまう",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Không có trí tưởng tượng, ta sẽ tin rằng ngay cả suy nghĩ của mình cũng là tuyệt đối."
   },
   {
    "jp": "偏見は、想像力の欠如から生まれることが多い。",
    "furi": [
     [
      "偏見",
      "へんけん"
     ],
     [
      "は",
      null
     ],
     [
      "、",
      null
     ],
     [
      "想像力",
      "そうぞうりょく"
     ],
     [
      "の",
      null
     ],
     [
      "欠如",
      "けつじょ"
     ],
     [
      "から",
      null
     ],
     [
      "生",
      "う"
     ],
     [
      "まれることが",
      null
     ],
     [
      "多",
      "おお"
     ],
     [
      "い",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Thành kiến thường sinh ra từ sự thiếu trí tưởng tượng."
   },
   {
    "jp": "相手の話をよく聞き、沈黙にも耳を傾けることが大切だ。",
    "furi": [
     [
      "相手",
      "あいて"
     ],
     [
      "の",
      null
     ],
     [
      "話",
      "はなし"
     ],
     [
      "をよく",
      null
     ],
     [
      "聞",
      "き"
     ],
     [
      "き",
      null
     ],
     [
      "、",
      null
     ],
     [
      "沈黙",
      "ちんもく"
     ],
     [
      "にも",
      null
     ],
     [
      "耳",
      "みみ"
     ],
     [
      "を",
      null
     ],
     [
      "傾",
      "かたむ"
     ],
     [
      "けることが",
      null
     ],
     [
      "大切",
      "たいせつ"
     ],
     [
      "だ",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Lắng nghe kỹ câu chuyện của đối phương, và chú ý cả đến sự im lặng, là điều quan trọng."
   },
   {
    "jp": "言葉だけではなく、表情やしぐさにも注意を向けるべきだ。",
    "furi": [
     [
      "言葉",
      "ことば"
     ],
     [
      "だけではなく",
      null
     ],
     [
      "、",
      null
     ],
     [
      "表情",
      "ひょうじょう"
     ],
     [
      "やしぐさにも",
      null
     ],
     [
      "注意",
      "ちゅうい"
     ],
     [
      "を",
      null
     ],
     [
      "向",
      "む"
     ],
     [
      "けるべきだ",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Không chỉ lời nói, mà cả biểu cảm và cử chỉ cũng cần được chú ý."
   },
   {
    "jp": "想像力を育てるには、さまざまな人と対話する機会が必要だ。",
    "furi": [
     [
      "想像力",
      "そうぞうりょく"
     ],
     [
      "を",
      null
     ],
     [
      "育",
      "そだ"
     ],
     [
      "てるには",
      null
     ],
     [
      "、",
      null
     ],
     [
      "さまざまな",
      null
     ],
     [
      "人",
      "ひと"
     ],
     [
      "と",
      null
     ],
     [
      "対話",
      "たいわ"
     ],
     [
      "する",
      null
     ],
     [
      "機会",
      "きかい"
     ],
     [
      "が",
      null
     ],
     [
      "必要",
      "ひつよう"
     ],
     [
      "だ",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Để nuôi dưỡng trí tưởng tượng, cần có cơ hội đối thoại với nhiều người khác nhau."
   },
   {
    "jp": "本を読むことも、他者の人生を想像する練習になる。",
    "furi": [
     [
      "本",
      "ほん"
     ],
     [
      "を",
      null
     ],
     [
      "読",
      "よ"
     ],
     [
      "むことも",
      null
     ],
     [
      "、",
      null
     ],
     [
      "他者",
      "たしゃ"
     ],
     [
      "の",
      null
     ],
     [
      "人生",
      "じんせい"
     ],
     [
      "を",
      null
     ],
     [
      "想像",
      "そうぞう"
     ],
     [
      "する",
      null
     ],
     [
      "練習",
      "れんしゅう"
     ],
     [
      "になる",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Đọc sách cũng là luyện tập để tưởng tượng cuộc đời của người khác."
   },
   {
    "jp": "想像力は生まれつきの才能ではなく、鍛えることができる力だ。",
    "furi": [
     [
      "想像力",
      "そうぞうりょく"
     ],
     [
      "は",
      null
     ],
     [
      "生",
      "う"
     ],
     [
      "まれつきの",
      null
     ],
     [
      "才能",
      "さいのう"
     ],
     [
      "ではなく",
      null
     ],
     [
      "、",
      null
     ],
     [
      "鍛",
      "きた"
     ],
     [
      "えることができる",
      null
     ],
     [
      "力",
      "ちから"
     ],
     [
      "だ",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Trí tưởng tượng không phải tài năng bẩm sinh, mà là khả năng có thể rèn luyện được."
   },
   {
    "jp": "他者を想像する力こそ、社会をより良くする始まりである。",
    "furi": [
     [
      "他者",
      "たしゃ"
     ],
     [
      "を",
      null
     ],
     [
      "想像",
      "そうぞう"
     ],
     [
      "する",
      null
     ],
     [
      "力",
      "ちから"
     ],
     [
      "こそ",
      null
     ],
     [
      "、",
      null
     ],
     [
      "社会",
      "しゃかい"
     ],
     [
      "を",
      null
     ],
     [
      "より",
      null
     ],
     [
      "良",
      "よ"
     ],
     [
      "くする",
      null
     ],
     [
      "始",
      "はじ"
     ],
     [
      "まりである",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Chính khả năng tưởng tượng người khác là khởi đầu để làm cho xã hội tốt đẹp hơn."
   }
  ],
  "vocab": [
   {
    "w": "他者",
    "r": "たしゃ",
    "hv": "THA GIẢ",
    "vi": "Người khác"
   },
   {
    "w": "想像力",
    "r": "そうぞうりょく",
    "hv": "TƯỞNG TƯỢNG LỰC",
    "vi": "Trí tưởng tượng, khả năng tưởng tượng"
   },
   {
    "w": "相手",
    "r": "あいて",
    "hv": "TƯƠNG THỦ",
    "vi": "Đối phương, người đối diện"
   },
   {
    "w": "偏見",
    "r": "へんけん",
    "hv": "THIÊN KIẾN",
    "vi": "Thành kiến, định kiến"
   },
   {
    "w": "尊重",
    "r": "そんちょう",
    "hv": "TÔN TRỌNG",
    "vi": "Tôn trọng"
   },
   {
    "w": "対話",
    "r": "たいわ",
    "hv": "ĐỐI THOẠI",
    "vi": "Đối thoại"
   }
  ],
  "grammar": [
   {
    "p": "N + すら",
    "lv": "N1",
    "vi": "Ngay cả… cũng…",
    "ex": "想像力がないと、自分の考えすら絶対だと思い込んでしまう。",
    "exVi": "Không có trí tưởng tượng, ta sẽ tin rằng ngay cả suy nghĩ của mình cũng là tuyệt đối."
   },
   {
    "p": "〜に等しい",
    "lv": "N1",
    "vi": "Tương đương với… / chẳng khác gì…",
    "ex": "相手の気持ちを想像することは、相手を尊重することに等しい。",
    "exVi": "Tưởng tượng cảm xúc của người khác cũng tương đương với việc tôn trọng họ."
   }
  ],
  "quiz": [
   {
    "q": "筆者によれば、相手を想像することは何に等しいですか。",
    "options": [
     "相手を尊重すること",
     "相手を疑うこと",
     "相手を無視すること",
     "相手を避けること"
    ],
    "answer": 0,
    "explain": "Trong bài có nói tưởng tượng cảm xúc của người khác tương đương với việc tôn trọng họ.",
    "evidence": "相手の気持ちを想像することは、相手を尊重することに等しい",
    "tip": "Tìm câu có 'に等しい' trong bài."
   },
   {
    "q": "想像力がないと、どうなりますか。",
    "options": [
     "自分の考えすら絶対だと思い込んでしまう",
     "相手の気持ちがよく分かる",
     "偏見がなくなる",
     "対話が上手になる"
    ],
    "answer": 0,
    "explain": "Trong bài có nói không có trí tưởng tượng, ta sẽ tin rằng ngay cả suy nghĩ của mình cũng là tuyệt đối.",
    "evidence": "自分の考えすら絶対だと思い込んでしまう",
    "tip": "Tìm câu có 'すら' trong bài."
   }
  ]
 },
 {
  "id": "dk-n1-10",
  "img": "dk-n1-10.jpg",
  "audio": "dk-n1-10.mp3",
  "timings": [
   0.015,
   4.832,
   10.762,
   14.66,
   21.276,
   27.338,
   31.947,
   37.141,
   41.254,
   45.979,
   50.893,
   56.929
  ],
  "level": "N1",
  "title": "本当の豊かさ",
  "titleVi": "Sự giàu có đích thực",
  "sentences": [
   {
    "jp": "お金が増えれば、幸せになれると思っている人は多い。",
    "furi": [
     [
      "お",
      null
     ],
     [
      "金",
      "かね"
     ],
     [
      "が",
      null
     ],
     [
      "増",
      "ふ"
     ],
     [
      "えれば",
      null
     ],
     [
      "、",
      null
     ],
     [
      "幸せ",
      "しあわせ"
     ],
     [
      "になれると",
      null
     ],
     [
      "思",
      "おも"
     ],
     [
      "っている",
      null
     ],
     [
      "人",
      "ひと"
     ],
     [
      "は",
      null
     ],
     [
      "多",
      "おお"
     ],
     [
      "い",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Nhiều người nghĩ rằng cứ có nhiều tiền thì sẽ hạnh phúc."
   },
   {
    "jp": "しかし、お金が増えるとは裏腹に、心の余裕は減っていくことがある。",
    "furi": [
     [
      "しかし",
      null
     ],
     [
      "、",
      null
     ],
     [
      "お",
      null
     ],
     [
      "金",
      "かね"
     ],
     [
      "が",
      null
     ],
     [
      "増",
      "ふ"
     ],
     [
      "えるとは",
      null
     ],
     [
      "裏腹",
      "うらはら"
     ],
     [
      "に",
      null
     ],
     [
      "、",
      null
     ],
     [
      "心",
      "こころ"
     ],
     [
      "の",
      null
     ],
     [
      "余裕",
      "よゆう"
     ],
     [
      "は",
      null
     ],
     [
      "減",
      "へ"
     ],
     [
      "っていくことが",
      null
     ],
     [
      "ある",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Nhưng trái lại với việc tiền tăng lên, sự thong dong trong lòng đôi khi lại giảm đi."
   },
   {
    "jp": "豊かさは、お金の量に由来するのではない。",
    "furi": [
     [
      "豊",
      "ゆた"
     ],
     [
      "かさは",
      null
     ],
     [
      "、",
      null
     ],
     [
      "お",
      null
     ],
     [
      "金",
      "かね"
     ],
     [
      "の",
      null
     ],
     [
      "量",
      "りょう"
     ],
     [
      "に",
      null
     ],
     [
      "由来",
      "ゆらい"
     ],
     [
      "するのではない",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Sự giàu có không bắt nguồn từ số lượng tiền bạc."
   },
   {
    "jp": "本当の豊かさとは、時間や健康、家族との時間を大切にできることだ。",
    "furi": [
     [
      "本当",
      "ほんとう"
     ],
     [
      "の",
      null
     ],
     [
      "豊",
      "ゆた"
     ],
     [
      "かさとは",
      null
     ],
     [
      "、",
      null
     ],
     [
      "時間",
      "じかん"
     ],
     [
      "や",
      null
     ],
     [
      "健康",
      "けんこう"
     ],
     [
      "、",
      null
     ],
     [
      "家族",
      "かぞく"
     ],
     [
      "との",
      null
     ],
     [
      "時間",
      "じかん"
     ],
     [
      "を",
      null
     ],
     [
      "大切",
      "たいせつ"
     ],
     [
      "にできることだ",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Sự giàu có đích thực là có thể trân trọng thời gian, sức khỏe và thời gian bên gia đình."
   },
   {
    "jp": "忙しい毎日でも、家族と笑顔で食事ができれば、それだけで十分だ。",
    "furi": [
     [
      "忙",
      "いそが"
     ],
     [
      "しい",
      null
     ],
     [
      "毎日",
      "まいにち"
     ],
     [
      "でも",
      null
     ],
     [
      "、",
      null
     ],
     [
      "家族",
      "かぞく"
     ],
     [
      "と",
      null
     ],
     [
      "笑顔",
      "えがお"
     ],
     [
      "で",
      null
     ],
     [
      "食事",
      "しょくじ"
     ],
     [
      "ができれば",
      null
     ],
     [
      "、",
      null
     ],
     [
      "それだけで",
      null
     ],
     [
      "十分",
      "じゅうぶん"
     ],
     [
      "だ",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Dù bận rộn mỗi ngày, chỉ cần được ăn cơm cùng gia đình với nụ cười thì thế đã là đủ."
   },
   {
    "jp": "他人と比べれば、欲しいものは際限なく増えていく。",
    "furi": [
     [
      "他人",
      "たにん"
     ],
     [
      "と",
      null
     ],
     [
      "比",
      "くら"
     ],
     [
      "べれば",
      null
     ],
     [
      "、",
      null
     ],
     [
      "欲",
      "ほ"
     ],
     [
      "しいものは",
      null
     ],
     [
      "際限",
      "さいげん"
     ],
     [
      "なく",
      null
     ],
     [
      "増",
      "ふ"
     ],
     [
      "えていく",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Nếu so sánh với người khác, những thứ mình muốn sẽ tăng lên không giới hạn."
   },
   {
    "jp": "しかし、自分の持っているものに感謝すれば、心は満たされる。",
    "furi": [
     [
      "しかし",
      null
     ],
     [
      "、",
      null
     ],
     [
      "自分",
      "じぶん"
     ],
     [
      "の",
      null
     ],
     [
      "持",
      "も"
     ],
     [
      "っているものに",
      null
     ],
     [
      "感謝",
      "かんしゃ"
     ],
     [
      "すれば",
      null
     ],
     [
      "、",
      null
     ],
     [
      "心",
      "こころ"
     ],
     [
      "は",
      null
     ],
     [
      "満",
      "み"
     ],
     [
      "たされる",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Nhưng nếu biết ơn những gì mình đang có, lòng sẽ được lấp đầy."
   },
   {
    "jp": "日常の当たり前の中に、豊かさは隠れている。",
    "furi": [
     [
      "日常",
      "にちじょう"
     ],
     [
      "の",
      null
     ],
     [
      "当",
      "あ"
     ],
     [
      "たり",
      null
     ],
     [
      "前",
      "まえ"
     ],
     [
      "の",
      null
     ],
     [
      "中",
      "なか"
     ],
     [
      "に",
      null
     ],
     [
      "、",
      null
     ],
     [
      "豊",
      "ゆた"
     ],
     [
      "かさは",
      null
     ],
     [
      "隠",
      "かく"
     ],
     [
      "れている",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Sự giàu có đang ẩn giấu trong những điều hiển nhiên thường ngày."
   },
   {
    "jp": "朝、目がさめたときに、今日も生きていることに気づく。",
    "furi": [
     [
      "朝",
      "あさ"
     ],
     [
      "、",
      null
     ],
     [
      "目",
      "め"
     ],
     [
      "がさめたときに",
      null
     ],
     [
      "、",
      null
     ],
     [
      "今日",
      "きょう"
     ],
     [
      "も",
      null
     ],
     [
      "生",
      "い"
     ],
     [
      "きていることに",
      null
     ],
     [
      "気",
      "き"
     ],
     [
      "づく",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Buổi sáng, khi tỉnh giấc, ta nhận ra hôm nay mình vẫn đang sống."
   },
   {
    "jp": "そんな小さな気づきが積み重なって、人生を豊かにする。",
    "furi": [
     [
      "そんな",
      null
     ],
     [
      "小",
      "ちい"
     ],
     [
      "さな",
      null
     ],
     [
      "気",
      "き"
     ],
     [
      "づきが",
      null
     ],
     [
      "積",
      "つ"
     ],
     [
      "み",
      null
     ],
     [
      "重",
      "かさ"
     ],
     [
      "なって",
      null
     ],
     [
      "、",
      null
     ],
     [
      "人生",
      "じんせい"
     ],
     [
      "を",
      null
     ],
     [
      "豊",
      "ゆた"
     ],
     [
      "かにする",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Những nhận ra nhỏ bé như thế tích lũy lại, làm cho cuộc đời trở nên giàu có."
   },
   {
    "jp": "豊かさとは、持っているものの多さではなく、満足できる心の広さだ。",
    "furi": [
     [
      "豊",
      "ゆた"
     ],
     [
      "かさとは",
      null
     ],
     [
      "、",
      null
     ],
     [
      "持",
      "も"
     ],
     [
      "っているものの",
      null
     ],
     [
      "多",
      "おお"
     ],
     [
      "さではなく",
      null
     ],
     [
      "、",
      null
     ],
     [
      "満足",
      "まんぞく"
     ],
     [
      "できる",
      null
     ],
     [
      "心",
      "こころ"
     ],
     [
      "の",
      null
     ],
     [
      "広",
      "ひろ"
     ],
     [
      "さだ",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Sự giàu có không phải là có nhiều thứ, mà là tấm lòng rộng mở có thể hài lòng."
   },
   {
    "jp": "だからこそ、今日を大切に生きることこそ、豊かな人生なのだ。",
    "furi": [
     [
      "だからこそ",
      null
     ],
     [
      "、",
      null
     ],
     [
      "今日",
      "きょう"
     ],
     [
      "を",
      null
     ],
     [
      "大切",
      "たいせつ"
     ],
     [
      "に",
      null
     ],
     [
      "生",
      "い"
     ],
     [
      "きることこそ",
      null
     ],
     [
      "、",
      null
     ],
     [
      "豊",
      "ゆた"
     ],
     [
      "かな",
      null
     ],
     [
      "人生",
      "じんせい"
     ],
     [
      "なのだ",
      null
     ],
     [
      "。",
      null
     ]
    ],
    "vi": "Chính vì thế, sống trân trọng ngày hôm nay mới là cuộc đời giàu có."
   }
  ],
  "vocab": [
   {
    "w": "豊かさ",
    "r": "ゆたかさ",
    "hv": "PHONG",
    "vi": "Sự giàu có, sung túc"
   },
   {
    "w": "幸せ",
    "r": "しあわせ",
    "hv": "HẠNH",
    "vi": "Hạnh phúc"
   },
   {
    "w": "感謝",
    "r": "かんしゃ",
    "hv": "CẢM TẠ",
    "vi": "Biết ơn"
   },
   {
    "w": "満足",
    "r": "まんぞく",
    "hv": "MÃN TÚC",
    "vi": "Hài lòng, thỏa mãn"
   },
   {
    "w": "余裕",
    "r": "よゆう",
    "hv": "DƯ DỤ",
    "vi": "Dư dả, thong dong"
   },
   {
    "w": "比べる",
    "r": "くらべる",
    "hv": "BỈ/TỈ",
    "vi": "So sánh"
   }
  ],
  "grammar": [
   {
    "p": "〜とは裏腹に",
    "lv": "N1",
    "vi": "Trái ngược với… / trái với…",
    "ex": "しかし、お金が増えるとは裏腹に、心の余裕は減っていくことがある。",
    "exVi": "Nhưng trái lại với việc tiền tăng lên, sự thong dong trong lòng đôi khi lại giảm đi."
   },
   {
    "p": "N + に由来する",
    "lv": "N1",
    "vi": "Bắt nguồn từ… / có nguồn gốc từ…",
    "ex": "豊かさは、お金の量に由来するのではない。",
    "exVi": "Sự giàu có không bắt nguồn từ số lượng tiền bạc."
   }
  ],
  "quiz": [
   {
    "q": "筆者によれば、本当の豊かさとは何ですか。",
    "options": [
     "時間や健康、家族との時間を大切にできること",
     "お金がたくさんあること",
     "他人より欲しいものが多いこと",
     "忙しく働くこと"
    ],
    "answer": 0,
    "explain": "Trong bài có nói sự giàu có đích thực là có thể trân trọng thời gian, sức khỏe và thời gian bên gia đình.",
    "evidence": "本当の豊かさとは、時間や健康、家族との時間を大切にできることだ",
    "tip": "Tìm câu có '本当の豊かさとは' trong bài."
   },
   {
    "q": "他人と比べれば、欲しいものはどうなりますか。",
    "options": [
     "際限なく増えていく",
     "すぐに減っていく",
     "なくなる",
     "変わらない"
    ],
    "answer": 0,
    "explain": "Trong bài có nói nếu so sánh với người khác, những thứ mình muốn sẽ tăng lên không giới hạn.",
    "evidence": "欲しいものは際限なく増えていく",
    "tip": "Tìm câu có '比べれば' trong bài."
   }
  ]
 }
];
