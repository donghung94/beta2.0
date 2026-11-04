/* SoraKanji — Đề thi nghe N3 (cấu trúc 2018): 28 câu tự viết / tái dùng từ bộ luyện nghe N3 của app.
   問題1 課題理解 6 (hỏi trước, thoại sau) / 問題2 ポイント理解 6 (thoại trước, hỏi sau) /
   問題3 概要理解 3 (bài dài rồi hỏi) / 問題4 即時応答 4 (nghe 1 câu, chọn 1 trong 3 đáp án NÓI) /
   問題5 総合理解 9 (3 hội thoại dài x 3 câu).
   au = tên file voice (voice_M0X_C0Y.mp3); t = số Mondai; dlg = lượt thoại kèm dịch Việt.
   M5: 3 câu của cùng 1 hội thoại có dlg giống hệt nhau; file voice của câu đầu chứa toàn bộ
   hội thoại + câu hỏi, file voice của câu 2/3 chỉ chứa câu hỏi (nghe hội thoại 1 lần rồi trả lời 3 câu).
   Chuông mở đầu (đã duyệt) + lời dẫn + 例 ở intros/mondai-X-intro.txt, ghép vào lúc tổng hợp audio.
   KHÔNG chứa nội dung đề thi chính thức — toàn bộ câu hỏi/hội thoại tự viết hoặc tái dùng từ app. */
window.LISTEN_EXAM_N3 = [
 {
  "au": "voice_M01_C01.mp3",
  "t": 1,
  "q": "男の人は、次に何をしますか。",
  "opts": [
   "コンビニで資料をコピーします。",
   "プリンターを直します。",
   "会議の資料を作ります。",
   "田中さんに資料を渡します。"
  ],
  "imgs": null,
  "ans": 0,
  "exp": "Người đàn ông nói sẽ đi đến cửa hàng tiện lợi để photocopy nên việc tiếp theo là photocopy tài liệu ở đó; máy in hỏng nên anh không tự sửa, và tài liệu đã có sẵn nên không cần làm mới.",
  "dlg": [
   {
    "sp": "女",
    "jp": "田中さん、明日の会議の資料、もうコピーしましたか。",
    "vi": "Anh Tanaka, anh đã photo tài liệu cho cuộc họp ngày mai chưa?"
   },
   {
    "sp": "男",
    "jp": "すみません、まだです。プリンターが壊れていて、コピーできませんでした。",
    "vi": "Xin lỗi, chưa ạ. Máy in bị hỏng nên em không photo được."
   },
   {
    "sp": "女",
    "jp": "そうですか。じゃあ、どうしますか。",
    "vi": "Vậy à. Thế anh định làm sao?"
   },
   {
    "sp": "男",
    "jp": "コンビニに行って、コピーしてきます。",
    "vi": "Em sẽ đến cửa hàng tiện lợi để photo."
   },
   {
    "sp": "女",
    "jp": "わかりました。お願いします。",
    "vi": "Em hiểu rồi. Nhờ anh nhé."
   }
  ]
 },
 {
  "au": "voice_M01_C02.mp3",
  "t": 1,
  "q": "女の人は、まず何をしますか。",
  "opts": [
   "参加する人の数を調べます。",
   "店を予約します。",
   "みんなに電話します。",
   "送別会に行きます。"
  ],
  "imgs": null,
  "ans": 0,
  "exp": "Người phụ nữ nói trước hết phải kiểm tra số người tham gia nên đó là việc cô làm đầu tiên; đặt nhà hàng là việc sau đó.",
  "dlg": [
   {
    "sp": "男",
    "jp": "佐藤さん、来週の送別会、もう店を予約しましたか。",
    "vi": "Chị Sato, chị đã đặt nhà hàng cho buổi tiệc chia tay tuần sau chưa?"
   },
   {
    "sp": "女",
    "jp": "いいえ、まだです。まず、参加する人の数を調べなければなりません。",
    "vi": "Chưa, chưa đặt. Trước hết, phải kiểm tra số người tham gia đã."
   },
   {
    "sp": "男",
    "jp": "そうですね。何人ぐらい来ますか。",
    "vi": "Đúng vậy nhỉ. Khoảng bao nhiêu người đến?"
   },
   {
    "sp": "女",
    "jp": "たぶん、15人ぐらいです。今日の午後、みんなにメールで聞きます。",
    "vi": "Chắc khoảng 15 người. Chiều nay em sẽ gửi email hỏi mọi người."
   }
  ]
 },
 {
  "au": "voice_M01_C03.mp3",
  "t": 1,
  "q": "男の人は、どうやって空港に行きますか。",
  "opts": [
   "バスで行きます。",
   "電車で行きます。",
   "タクシーで行きます。",
   "歩いて行きます。"
  ],
  "imgs": null,
  "ans": 0,
  "exp": "Người phụ nữ khuyên đi xe buýt vì buổi sáng tàu đông nên người đàn ông sẽ đi xe buýt.",
  "dlg": [
   {
    "sp": "男",
    "jp": "来週、空港に行かなければなりません。どうやって行ったらいいですか。",
    "vi": "Tuần sau, em phải đến sân bay. Đi bằng cách nào thì tốt ạ?"
   },
   {
    "sp": "女",
    "jp": "電車が便利ですよ。でも、朝は混んでいますから、バスのほうがいいです。",
    "vi": "Tàu điện tiện lợi đấy. Nhưng buổi sáng đông nên đi xe buýt tốt hơn."
   },
   {
    "sp": "男",
    "jp": "バスはどこから出ていますか。",
    "vi": "Xe buýt xuất phát từ đâu ạ?"
   },
   {
    "sp": "女",
    "jp": "駅の前から出ています。1時間ぐらいかかります。",
    "vi": "Xuất phát từ trước ga. Mất khoảng 1 tiếng."
   }
  ]
 },
 {
  "au": "voice_M01_C04.mp3",
  "t": 1,
  "q": "男の人は、まず何をしますか。",
  "opts": [
   "会議室を予約します。",
   "資料をコピーします。",
   "会議の資料を作ります。",
   "小さい部屋を予約します。"
  ],
  "imgs": null,
  "ans": 1,
  "exp": "Người đàn ông nói tài liệu đã xong, chỉ còn đặt phòng; cô gái nhận đặt phòng lớn, còn anh nói trước hết sẽ photo tài liệu. Đặt phòng là việc của cô gái, làm tài liệu mới là sai vì đã xong, phòng nhỏ bị loại vì có 20 người.",
  "dlg": [
   {
    "sp": "女",
    "jp": "田中さん、明日の会議の資料は、できましたか。",
    "vi": "Anh Tanaka, tài liệu cho cuộc họp ngày mai xong chưa ạ?"
   },
   {
    "sp": "男",
    "jp": "はい、資料は、もうできました。あとは、会議室を予約するだけです。",
    "vi": "Rồi ạ, tài liệu xong rồi. Chỉ còn đặt phòng họp nữa thôi."
   },
   {
    "sp": "女",
    "jp": "そうですか。会議室は、3階の小さい部屋でいいですか。",
    "vi": "Vậy à. Phòng nhỏ ở tầng 3 được không ạ?"
   },
   {
    "sp": "男",
    "jp": "いいえ、20人も来ますから、大きい部屋が必要です。",
    "vi": "Không, có tận 20 người đến nên cần phòng lớn."
   },
   {
    "sp": "女",
    "jp": "わかりました。じゃあ、大きい部屋を予約します。田中さんは、資料をコピーしてください。",
    "vi": "Em hiểu rồi. Vậy em sẽ đặt phòng lớn. Anh Tanaka photo tài liệu giúp em nhé."
   },
   {
    "sp": "男",
    "jp": "はい、わかりました。まず、資料をコピーします。",
    "vi": "Vâng, em hiểu rồi. Trước hết em sẽ photo tài liệu."
   }
  ]
 },
 {
  "au": "voice_M01_C05.mp3",
  "t": 1,
  "q": "男の人は、明日の朝、何をしますか。",
  "opts": [
   "9時に駅に行きます。",
   "9時の電車に乗ります。",
   "山本さんに電話します。",
   "家で待っています。"
  ],
  "imgs": null,
  "ans": 0,
  "exp": "Người đàn ông nói 9 giờ sẽ ra ga đón nên sáng mai anh ra ga lúc 9 giờ; người đi tàu 9 giờ là cô Yamamoto.",
  "dlg": [
   {
    "sp": "男",
    "jp": "山本さん、明日の朝、駅まで迎えに行きますか。",
    "vi": "Chị Yamamoto, sáng mai em ra ga đón chị nhé?"
   },
   {
    "sp": "女",
    "jp": "はい、お願いします。9時の電車で着きます。",
    "vi": "Vâng, nhờ anh nhé. Em sẽ đến bằng chuyến tàu 9 giờ."
   },
   {
    "sp": "男",
    "jp": "わかりました。9時に駅に行きます。",
    "vi": "Tôi hiểu rồi. 9 giờ tôi sẽ ra ga."
   },
   {
    "sp": "女",
    "jp": "ありがとうございます。よろしくお願いします。",
    "vi": "Cảm ơn anh. Nhờ anh nhé."
   }
  ]
 },
 {
  "au": "voice_M01_C06.mp3",
  "t": 1,
  "q": "男の人は、週末、何をしますか。",
  "opts": [
   "友達の引っ越しの手伝いをします。",
   "友達と遊びます。",
   "家で休みます。",
   "引っ越しをします。"
  ],
  "imgs": null,
  "ans": 0,
  "exp": "Người đàn ông giúp bạn chuyển nhà chứ không phải tự mình chuyển nhà nên đáp án là giúp bạn chuyển nhà.",
  "dlg": [
   {
    "sp": "女",
    "jp": "田中さん、週末、何をしますか。",
    "vi": "Anh Tanaka, cuối tuần anh làm gì?"
   },
   {
    "sp": "男",
    "jp": "引っ越しの手伝いをします。友達が引っ越すんです。",
    "vi": "Em giúp bạn chuyển nhà. Bạn em chuyển nhà đấy."
   },
   {
    "sp": "女",
    "jp": "そうですか。大変ですね。何時に行きますか。",
    "vi": "Vậy à. Vất vả nhỉ. Anh đi lúc mấy giờ?"
   },
   {
    "sp": "男",
    "jp": "土曜日の朝、9時に行きます。",
    "vi": "Sáng thứ bảy, em đi lúc 9 giờ."
   }
  ]
 },
 {
  "au": "voice_M02_C01.mp3",
  "t": 2,
  "q": "二人は、いつコンサートに行きますか。",
  "opts": [
   "今週の土曜日に行きます。",
   "来週の土曜日に行きます。",
   "来週の日曜日に行きます。",
   "今週の日曜日に行きます。"
  ],
  "imgs": null,
  "ans": 2,
  "exp": "Cô gái rủ đi concert vào Chủ nhật tuần sau; anh bận thứ Bảy nhưng Chủ nhật đi được, hai người hẹn Chủ nhật 2 giờ chiều ở ga. Các phương án còn lại sai tuần hoặc sai thứ.",
  "dlg": [
   {
    "sp": "女",
    "jp": "田中さん、来週の日曜日に、コンサートに行きませんか。",
    "vi": "Anh Tanaka, Chủ nhật tuần sau anh có đi concert với em không?"
   },
   {
    "sp": "男",
    "jp": "いいですね。だれのコンサートですか。",
    "vi": "Hay đấy. Concert của ai vậy?"
   },
   {
    "sp": "女",
    "jp": "有名なピアノのコンサートです。チケットは、もう買いました。",
    "vi": "Concert piano của một người nổi tiếng. Em mua vé rồi."
   },
   {
    "sp": "男",
    "jp": "土曜日は仕事がありますが、日曜日は行くことができます。",
    "vi": "Thứ Bảy em phải làm việc, nhưng Chủ nhật thì đi được."
   },
   {
    "sp": "女",
    "jp": "じゃあ、日曜日に一緒に行きましょう。午後2時に駅で会いましょう。",
    "vi": "Vậy Chủ nhật mình cùng đi nhé. 2 giờ chiều gặp nhau ở ga nhé."
   },
   {
    "sp": "男",
    "jp": "はい、わかりました。楽しみです。",
    "vi": "Vâng, em hiểu rồi. Em mong quá."
   }
  ]
 },
 {
  "au": "voice_M02_C02.mp3",
  "t": 2,
  "q": "女の人は、何を買いましたか。",
  "opts": [
   "かさを買いました。",
   "コートを買いました。",
   "くつを買いました。",
   "かばんを買いました。"
  ],
  "imgs": null,
  "ans": 0,
  "exp": "Người phụ nữ nói chỉ mua ô vì áo khoác đắt nên cô chỉ mua ô.",
  "dlg": [
   {
    "sp": "男",
    "jp": "佐藤さん、そのかさ、新しいですね。",
    "vi": "Chị Sato, chiếc ô đó mới nhỉ."
   },
   {
    "sp": "女",
    "jp": "はい、昨日買いました。今日は雨が降りそうだったからです。",
    "vi": "Vâng, em mua hôm qua. Vì hôm nay có vẻ trời sẽ mưa."
   },
   {
    "sp": "男",
    "jp": "コートも買ったんですか。",
    "vi": "Chị cũng mua áo khoác à?"
   },
   {
    "sp": "女",
    "jp": "いいえ、コートは高かったので、かさだけ買いました。",
    "vi": "Không, áo khoác đắt nên em chỉ mua ô thôi."
   }
  ]
 },
 {
  "au": "voice_M02_C03.mp3",
  "t": 2,
  "q": "男の人は、いつ引っ越しますか。",
  "opts": [
   "来月の3日です。",
   "今月の3日です。",
   "来月の終わりです。",
   "今週の土曜日です。"
  ],
  "imgs": null,
  "ans": 0,
  "exp": "Người đàn ông nói chuyển nhà vào ngày 3 tháng sau; các lựa chọn khác sai tháng hoặc sai thời điểm.",
  "dlg": [
   {
    "sp": "女",
    "jp": "田中さん、引っ越しはいつですか。",
    "vi": "Anh Tanaka, khi nào anh chuyển nhà?"
   },
   {
    "sp": "男",
    "jp": "来月の初めです。3日に引っ越します。",
    "vi": "Đầu tháng sau. Ngày 3 em chuyển."
   },
   {
    "sp": "女",
    "jp": "新しい家はどこですか。",
    "vi": "Nhà mới ở đâu?"
   },
   {
    "sp": "男",
    "jp": "駅の近くです。歩いて5分ぐらいです。",
    "vi": "Gần ga. Đi bộ khoảng 5 phút."
   }
  ]
 },
 {
  "au": "voice_M02_C04.mp3",
  "t": 2,
  "q": "女の人は、どうしてアルバイトをやめましたか。",
  "opts": [
   "勉強が忙しくなったからです。",
   "給料が安かったからです。",
   "店が遠かったからです。",
   "体調が悪かったからです。"
  ],
  "imgs": null,
  "ans": 0,
  "exp": "Người phụ nữ nói nghỉ làm thêm vì việc học bận rộn do kỳ thi sắp tới; không nhắc đến lương, khoảng cách hay sức khỏe.",
  "dlg": [
   {
    "sp": "男",
    "jp": "佐藤さん、アルバイトをやめたそうですね。どうしてですか。",
    "vi": "Chị Sato, nghe nói chị nghỉ việc làm thêm rồi. Sao vậy?"
   },
   {
    "sp": "女",
    "jp": "勉強が忙しくなったからです。試験が近いんです。",
    "vi": "Vì việc học trở nên bận rộn. Kỳ thi sắp đến rồi."
   },
   {
    "sp": "男",
    "jp": "そうですか。がんばってください。",
    "vi": "Vậy à. Chị cố gắng nhé."
   }
  ]
 },
 {
  "au": "voice_M02_C05.mp3",
  "t": 2,
  "q": "男の人は、どこで昼ご飯を食べましたか。",
  "opts": [
   "大学の食堂で食べました。",
   "家で食べました。",
   "レストランで食べました。",
   "コンビニで買いました。"
  ],
  "imgs": null,
  "ans": 0,
  "exp": "Người đàn ông nói ăn trưa ở nhà ăn của trường đại học; không ăn ở nhà, nhà hàng hay mua ở cửa hàng tiện lợi.",
  "dlg": [
   {
    "sp": "女",
    "jp": "田中さん、今日の昼ご飯はどこで食べましたか。",
    "vi": "Anh Tanaka, trưa nay anh ăn cơm ở đâu?"
   },
   {
    "sp": "男",
    "jp": "大学の食堂で食べました。カレーを食べました。",
    "vi": "Em ăn ở nhà ăn của trường đại học. Em ăn cà ri."
   },
   {
    "sp": "女",
    "jp": "おいしかったですか。",
    "vi": "Có ngon không?"
   },
   {
    "sp": "男",
    "jp": "はい、とてもおいしかったです。",
    "vi": "Vâng, rất ngon."
   }
  ]
 },
 {
  "au": "voice_M02_C06.mp3",
  "t": 2,
  "q": "女の人は、何時に起きましたか。",
  "opts": [
   "6時半に起きました。",
   "7時に起きました。",
   "6時に起きました。",
   "8時に起きました。"
  ],
  "imgs": null,
  "ans": 0,
  "exp": "Người phụ nữ nói sáng nay dậy lúc 6 giờ 30; các giờ khác đều sai.",
  "dlg": [
   {
    "sp": "男",
    "jp": "佐藤さん、今朝は何時に起きましたか。",
    "vi": "Chị Sato, sáng nay chị dậy lúc mấy giờ?"
   },
   {
    "sp": "女",
    "jp": "6時半に起きました。いつもより早いです。",
    "vi": "Em dậy lúc 6 giờ rưỡi. Sớm hơn mọi khi."
   },
   {
    "sp": "男",
    "jp": "どうして早く起きたんですか。",
    "vi": "Sao chị dậy sớm vậy?"
   },
   {
    "sp": "女",
    "jp": "今朝は会議があったからです。",
    "vi": "Vì sáng nay có cuộc họp."
   }
  ]
 },
 {
  "au": "voice_M03_C01.mp3",
  "t": 3,
  "q": "運動会について、正しいものはどれですか。",
  "opts": [
   "運動会は、午前10時から始まります。",
   "運動会は、午前9時から午後3時までです。",
   "雨が降ったら、運動会は中止です。",
   "お昼ごはんは、学校が用意します。"
  ],
  "imgs": null,
  "ans": 1,
  "exp": "Thông báo nói rõ đại hội thể thao từ 9 giờ sáng đến 3 giờ chiều; 10 giờ là sai giờ; mưa thì dời sang Chủ nhật chứ không hủy; cơm trưa tự mang theo, trường không chuẩn bị.",
  "dlg": [
   {
    "sp": "女",
    "jp": "来週の土曜日に、学校の運動会があります。運動会は、午前9時から午後3時までです。場所は、学校のグラウンドです。雨が降ったら、運動会は、日曜日に行います。運動会では、走ることや、ボールを使ったゲームをします。お昼ごはんは、家族と一緒に食べます。おにぎりを持って来てください。飲み物も、忘れないでください。運動会の写真は、学校のホームページで見ることができます。何か質問があったら、先生に聞いてください。",
    "vi": "Thứ Bảy tuần sau trường tổ chức đại hội thể thao. Đại hội diễn ra từ 9 giờ sáng đến 3 giờ chiều. Địa điểm là sân trường. Nếu trời mưa, đại hội sẽ dời sang Chủ nhật. Trong đại hội có chạy và các trò chơi dùng bóng. Cơm trưa ăn cùng gia đình. Các em nhớ mang theo cơm nắm. Cũng đừng quên mang nước uống. Ảnh của đại hội có thể xem trên trang web của trường. Có gì thắc mắc thì hỏi thầy cô nhé."
   }
  ]
 },
 {
  "au": "voice_M03_C02.mp3",
  "t": 3,
  "q": "男の人の旅行について、正しいものはどれですか。",
  "opts": [
   "男の人は、先週、北海道に行きました。",
   "男の人は、北海道では、動物園にだけ行きました。",
   "男の人は、友達におみやげを買いました。",
   "男の人は、おみやげを自分で食べました。"
  ],
  "imgs": null,
  "ans": 2,
  "exp": "Anh đi Hokkaido tháng trước chứ không phải tuần trước, đi nhiều nơi chứ không chỉ sở thú, mua quà về tặng bạn chứ không tự ăn.",
  "dlg": [
   {
    "sp": "男",
    "jp": "先月、北海道に旅行に行きました。飛行機で行きました。北海道では、まず、おいしいラーメンを食べました。とてもおいしかったです。それから、動物園に行きました。いろいろな動物を見ました。夜は、ホテルでおいしい魚を食べました。次の日は、雪の山に行きました。帰る日は、おみやげを買いました。友達にあげました。とても楽しい旅行でした。",
    "vi": "Tháng trước tôi đi du lịch Hokkaido. Tôi đi bằng máy bay. Ở Hokkaido, trước hết tôi ăn mì ramen rất ngon. Sau đó tôi đến sở thú, xem nhiều loài động vật. Buổi tối tôi ăn cá ngon ở khách sạn. Hôm sau tôi lên núi tuyết. Ngày về tôi mua quà, tặng cho bạn bè. Đó là một chuyến đi rất vui."
   }
  ]
 },
 {
  "au": "voice_M03_C03.mp3",
  "t": 3,
  "q": "明日の天気について、正しいものはどれですか。",
  "opts": [
   "夕方から雨が降るでしょう。",
   "一日中、晴れるでしょう。",
   "午前中から雨が降るでしょう。",
   "気温は今日より高いでしょう。"
  ],
  "imgs": null,
  "ans": 0,
  "exp": "Bản tin nói buổi sáng trời nắng, từ chiều tối mới mưa và nhiệt độ thấp hơn hôm nay.",
  "dlg": [
   {
    "sp": "男",
    "jp": "明日の天気について、お知らせします。明日は、午前中は晴れるでしょう。午後から雲が多くなり、夕方から雨が降るでしょう。気温は、今日より低くて、最高で18度です。風が強いので、傘を持って出かけてください。洗濯物は、午前中に干したほうがいいでしょう。明後日は、また晴れるでしょう。気温も、20度ぐらいまで上がるでしょう。週末は、いい天気になりそうです。外に出かける人は、たくさんいるでしょう。",
    "vi": "Xin thông báo về thời tiết ngày mai. Ngày mai, buổi sáng trời sẽ nắng. Từ chiều mây nhiều dần, từ chiều tối trời sẽ mưa. Nhiệt độ thấp hơn hôm nay, cao nhất 18 độ. Gió mạnh nên khi ra ngoài hãy mang theo ô. Quần áo giặt nên phơi vào buổi sáng thì tốt hơn. Ngày kia, trời lại nắng. Nhiệt độ cũng tăng lên khoảng 20 độ. Cuối tuần có vẻ thời tiết đẹp. Chắc sẽ có nhiều người ra ngoài."
   }
  ]
 },
 {
  "au": "voice_M04_C01.mp3",
  "t": 4,
  "q": "いちばん いい 答えを えらんで ください。",
  "opts": [
   "はい、本です。",
   "どうぞ、読んでください。",
   "いいえ、読みません。"
  ],
  "imgs": null,
  "ans": 1,
  "exp": "Khi được hỏi có được đọc sách không thì trả lời cho phép \"どうぞ、読んでください\"; hai lựa chọn còn lại không phù hợp.",
  "dlg": [
   {
    "sp": "女",
    "jp": "この本、読んでもいいですか。",
    "vi": "Cuốn sách này, tôi đọc có được không?"
   }
  ]
 },
 {
  "au": "voice_M04_C02.mp3",
  "t": 4,
  "q": "いちばん いい 答えを えらんで ください。",
  "opts": [
   "いいですね。行きましょう。",
   "映画は見ませんでした。",
   "いいえ、明日じゃありません。"
  ],
  "imgs": null,
  "ans": 0,
  "exp": "Được rủ đi xem phim thì đáp lại đồng ý \"いいですね。行きましょう\"; hai lựa chọn còn lại không phải câu trả lời cho lời rủ.",
  "dlg": [
   {
    "sp": "男",
    "jp": "明日、一緒に映画を見に行きませんか。",
    "vi": "Ngày mai, cùng đi xem phim với tôi không?"
   }
  ]
 },
 {
  "au": "voice_M04_C03.mp3",
  "t": 4,
  "q": "いちばん いい 答えを えらんで ください。",
  "opts": [
   "はい、トイレです。",
   "トイレじゃありません。",
   "あちらです。"
  ],
  "imgs": null,
  "ans": 2,
  "exp": "Khi được hỏi nhà vệ sinh ở đâu thì chỉ hướng \"あちらです\"; hai lựa chọn còn lại không trả lời câu hỏi.",
  "dlg": [
   {
    "sp": "女",
    "jp": "すみません、トイレはどこですか。",
    "vi": "Xin lỗi, nhà vệ sinh ở đâu vậy?"
   }
  ]
 },
 {
  "au": "voice_M04_C04.mp3",
  "t": 4,
  "q": "いちばん いい 答えを えらんで ください。",
  "opts": [
   "いいえ、どういたしまして。",
   "はい、手伝います。",
   "すみません、手伝いません。"
  ],
  "imgs": null,
  "ans": 0,
  "exp": "Khi được cảm ơn vì đã giúp thì đáp \"どういたしまして\"; hai lựa chọn còn lại không phải câu đáp lại lời cảm ơn.",
  "dlg": [
   {
    "sp": "男",
    "jp": "手伝ってくれて、ありがとう。",
    "vi": "Cảm ơn bạn đã giúp tôi."
   }
  ]
 },
 {
  "au": "voice_M05_C01.mp3",
  "t": 5,
  "q": "パーティーは、どこで開きますか。",
  "opts": [
   "駅の近くのレストランで開きます。",
   "大学の食堂で開きます。",
   "田中さんの家で開きます。",
   "公園で開きます。"
  ],
  "imgs": null,
  "ans": 0,
  "exp": "Người đàn ông nói địa điểm đã quyết là nhà hàng gần ga nên tiệc mở ở đó; nhà ăn trường, nhà anh Tanaka và công viên đều không được nhắc đến。Từ vựng: パーティー: tiệc; 会場（かいじょう）: địa điểm; 予約（よやく）: đặt trước.",
  "dlg": [
   {
    "jp": "田中さん、来週のパーティーは、どうなっていますか。",
    "sp": "女",
    "vi": "Anh Tanaka, việc chuẩn bị cho buổi tiệc chào mừng tuần sau tiến triển thế nào rồi ạ?"
   },
   {
    "jp": "会場は、もう決まりました。駅の近くのレストランです。",
    "sp": "男",
    "vi": "Địa điểm thì đã quyết rồi. Là nhà hàng gần ga."
   },
   {
    "jp": "何人ぐらい来ますか。",
    "sp": "女",
    "vi": "Khoảng bao nhiêu người đến ạ?"
   },
   {
    "jp": "新しい人が10人ぐらい来ます。全部で30人ぐらいです。",
    "sp": "男",
    "vi": "Khoảng 10 người mới đến. Tổng cộng khoảng 30 người."
   },
   {
    "jp": "料理はどうしますか。コースにしますか。",
    "sp": "女",
    "vi": "Món ăn thì sao ạ? Mình chọn set menu nhé?"
   },
   {
    "jp": "はい、1人3000円のコースにしたいです。飲み物は別です。",
    "sp": "男",
    "vi": "Vâng, em muốn chọn set 3000 yên một người. Đồ uống tính riêng."
   },
   {
    "jp": "予算は足りますか。",
    "sp": "女",
    "vi": "Ngân sách có đủ không ạ?"
   },
   {
    "jp": "はい、サークルのお金から出します。足りないときは、みんなで分けます。",
    "sp": "男",
    "vi": "Vâng, lấy từ tiền của câu lạc bộ. Khi thiếu thì mọi người chia nhau."
   },
   {
    "jp": "じゃあ、案内のメールを送らなければなりませんね。",
    "sp": "女",
    "vi": "Thế thì phải gửi email thông báo nhỉ."
   },
   {
    "jp": "はい、今日の夜、送ります。来るかどうか、返事をもらいます。",
    "sp": "男",
    "vi": "Vâng, tối nay em sẽ gửi. Em sẽ nhận trả lời xem có đến hay không."
   },
   {
    "jp": "わかりました。私は、会場の予約を確認します。",
    "sp": "女",
    "vi": "Em hiểu rồi. Em sẽ xác nhận việc đặt địa điểm."
   },
   {
    "jp": "お願いします。来週の月曜日に、もう一度話しましょう。",
    "sp": "男",
    "vi": "Nhờ chị nhé. Thứ hai tuần sau mình nói chuyện lại nhé."
   }
  ]
 },
 {
  "au": "voice_M05_C02.mp3",
  "t": 5,
  "q": "料理は、いくらですか。",
  "opts": [
   "1人5000円です。",
   "1人3000円です。飲み物は別です。",
   "ただです。",
   "1人3000円です。飲み物も入っています。"
  ],
  "imgs": null,
  "ans": 1,
  "exp": "Set menu 3000 yên một người, đồ uống tính riêng nên đáp án thứ hai đúng; các đáp án khác sai về giá hoặc về đồ uống. Từ vựng: コース: set menu; 別（べつ）: riêng; 予算（よさん）: ngân sách.",
  "dlg": [
   {
    "jp": "田中さん、来週のパーティーは、どうなっていますか。",
    "sp": "女",
    "vi": "Anh Tanaka, việc chuẩn bị cho buổi tiệc chào mừng tuần sau tiến triển thế nào rồi ạ?"
   },
   {
    "jp": "会場は、もう決まりました。駅の近くのレストランです。",
    "sp": "男",
    "vi": "Địa điểm thì đã quyết rồi. Là nhà hàng gần ga."
   },
   {
    "jp": "何人ぐらい来ますか。",
    "sp": "女",
    "vi": "Khoảng bao nhiêu người đến ạ?"
   },
   {
    "jp": "新しい人が10人ぐらい来ます。全部で30人ぐらいです。",
    "sp": "男",
    "vi": "Khoảng 10 người mới đến. Tổng cộng khoảng 30 người."
   },
   {
    "jp": "料理はどうしますか。コースにしますか。",
    "sp": "女",
    "vi": "Món ăn thì sao ạ? Mình chọn set menu nhé?"
   },
   {
    "jp": "はい、1人3000円のコースにしたいです。飲み物は別です。",
    "sp": "男",
    "vi": "Vâng, em muốn chọn set 3000 yên một người. Đồ uống tính riêng."
   },
   {
    "jp": "予算は足りますか。",
    "sp": "女",
    "vi": "Ngân sách có đủ không ạ?"
   },
   {
    "jp": "はい、サークルのお金から出します。足りないときは、みんなで分けます。",
    "sp": "男",
    "vi": "Vâng, lấy từ tiền của câu lạc bộ. Khi thiếu thì mọi người chia nhau."
   },
   {
    "jp": "じゃあ、案内のメールを送らなければなりませんね。",
    "sp": "女",
    "vi": "Thế thì phải gửi email thông báo nhỉ."
   },
   {
    "jp": "はい、今日の夜、送ります。来るかどうか、返事をもらいます。",
    "sp": "男",
    "vi": "Vâng, tối nay em sẽ gửi. Em sẽ nhận trả lời xem có đến hay không."
   },
   {
    "jp": "わかりました。私は、会場の予約を確認します。",
    "sp": "女",
    "vi": "Em hiểu rồi. Em sẽ xác nhận việc đặt địa điểm."
   },
   {
    "jp": "お願いします。来週の月曜日に、もう一度話しましょう。",
    "sp": "男",
    "vi": "Nhờ chị nhé. Thứ hai tuần sau mình nói chuyện lại nhé."
   }
  ]
 },
 {
  "au": "voice_M05_C03.mp3",
  "t": 5,
  "q": "男の人は、今日の夜、何をしますか。",
  "opts": [
   "料理を決めます。",
   "会場の予約を確認します。",
   "案内のメールを送ります。",
   "みんなからお金を集めます。"
  ],
  "imgs": null,
  "ans": 2,
  "exp": "Người đàn ông nói tối nay sẽ gửi email thông báo; xác nhận đặt địa điểm là việc của người phụ nữ, quyết món ăn đã xong và thu tiền không được nhắc là việc tối nay. Từ vựng: 案内（あんない）: thông báo; 返事（へんじ）: trả lời; 確認（かくにん）: xác nhận.",
  "dlg": [
   {
    "jp": "田中さん、来週のパーティーは、どうなっていますか。",
    "sp": "女",
    "vi": "Anh Tanaka, việc chuẩn bị cho buổi tiệc chào mừng tuần sau tiến triển thế nào rồi ạ?"
   },
   {
    "jp": "会場は、もう決まりました。駅の近くのレストランです。",
    "sp": "男",
    "vi": "Địa điểm thì đã quyết rồi. Là nhà hàng gần ga."
   },
   {
    "jp": "何人ぐらい来ますか。",
    "sp": "女",
    "vi": "Khoảng bao nhiêu người đến ạ?"
   },
   {
    "jp": "新しい人が10人ぐらい来ます。全部で30人ぐらいです。",
    "sp": "男",
    "vi": "Khoảng 10 người mới đến. Tổng cộng khoảng 30 người."
   },
   {
    "jp": "料理はどうしますか。コースにしますか。",
    "sp": "女",
    "vi": "Món ăn thì sao ạ? Mình chọn set menu nhé?"
   },
   {
    "jp": "はい、1人3000円のコースにしたいです。飲み物は別です。",
    "sp": "男",
    "vi": "Vâng, em muốn chọn set 3000 yên một người. Đồ uống tính riêng."
   },
   {
    "jp": "予算は足りますか。",
    "sp": "女",
    "vi": "Ngân sách có đủ không ạ?"
   },
   {
    "jp": "はい、サークルのお金から出します。足りないときは、みんなで分けます。",
    "sp": "男",
    "vi": "Vâng, lấy từ tiền của câu lạc bộ. Khi thiếu thì mọi người chia nhau."
   },
   {
    "jp": "じゃあ、案内のメールを送らなければなりませんね。",
    "sp": "女",
    "vi": "Thế thì phải gửi email thông báo nhỉ."
   },
   {
    "jp": "はい、今日の夜、送ります。来るかどうか、返事をもらいます。",
    "sp": "男",
    "vi": "Vâng, tối nay em sẽ gửi. Em sẽ nhận trả lời xem có đến hay không."
   },
   {
    "jp": "わかりました。私は、会場の予約を確認します。",
    "sp": "女",
    "vi": "Em hiểu rồi. Em sẽ xác nhận việc đặt địa điểm."
   },
   {
    "jp": "お願いします。来週の月曜日に、もう一度話しましょう。",
    "sp": "男",
    "vi": "Nhờ chị nhé. Thứ hai tuần sau mình nói chuyện lại nhé."
   }
  ]
 },
 {
  "au": "voice_M05_C04.mp3",
  "t": 5,
  "q": "プレゼンは、全部で何分ですか。",
  "opts": [
   "20分です。",
   "40分です。",
   "30分です。",
   "10分です。"
  ],
  "imgs": null,
  "ans": 2,
  "exp": "Thuyết trình 20 phút cộng 10 phút hỏi đáp thành 30 phút; 20 phút chỉ là phần trình bày, 10 phút chỉ là phần hỏi đáp. Từ vựng: 発表（はっぴょう）: thuyết trình; 資料（しりょう）: tài liệu; 練習（れんしゅう）: luyện tập.",
  "dlg": [
   {
    "jp": "山本さん、来週のプレゼンのほうは、進んでいますか。",
    "sp": "女",
    "vi": "Anh Yamamoto, việc chuẩn bị cho bài thuyết trình tuần sau tiến triển thế nào rồi ạ?"
   },
   {
    "jp": "はい、資料は、ほとんどできました。あとは、グラフを作るだけです。",
    "sp": "男",
    "vi": "Vâng, tài liệu thì gần xong rồi. Chỉ còn làm biểu đồ nữa thôi."
   },
   {
    "jp": "プレゼンは、何分ですか。",
    "sp": "女",
    "vi": "Bài thuyết trình kéo dài bao nhiêu phút ạ?"
   },
   {
    "jp": "20分です。質問の時間も、10分あります。",
    "sp": "男",
    "vi": "20 phút. Thời gian hỏi đáp cũng có 10 phút."
   },
   {
    "jp": "だれが発表しますか。",
    "sp": "女",
    "vi": "Ai sẽ thuyết trình ạ?"
   },
   {
    "jp": "私と山田さんが発表します。山田さんは、最初の10分です。",
    "sp": "男",
    "vi": "Em và anh Yamada sẽ thuyết trình. Anh Yamada thuyết trình 10 phút đầu."
   },
   {
    "jp": "場所はどこですか。",
    "sp": "女",
    "vi": "Địa điểm ở đâu ạ?"
   },
   {
    "jp": "3階の会議室です。100人ぐらい入ります。",
    "sp": "男",
    "vi": "Phòng họp tầng 3. Chứa được khoảng 100 người."
   },
   {
    "jp": "じゃあ、前の日に、会議室を予約しなければなりませんね。",
    "sp": "女",
    "vi": "Thế thì hôm trước phải đặt phòng họp nhỉ."
   },
   {
    "jp": "はい、明日、予約します。プロジェクターも借ります。",
    "sp": "男",
    "vi": "Vâng, ngày mai em sẽ đặt. Em cũng mượn máy chiếu."
   },
   {
    "jp": "わかりました。私は、資料をコピーします。",
    "sp": "女",
    "vi": "Em hiểu rồi. Em sẽ photo tài liệu."
   },
   {
    "jp": "お願いします。金曜日に、練習をしましょう。",
    "sp": "男",
    "vi": "Nhờ chị nhé. Thứ sáu mình luyện tập nhé."
   }
  ]
 },
 {
  "au": "voice_M05_C05.mp3",
  "t": 5,
  "q": "だれが最初に発表しますか。",
  "opts": [
   "女の人です。",
   "山田さんです。",
   "山本さんです。",
   "田中さんです。"
  ],
  "imgs": null,
  "ans": 1,
  "exp": "Người đàn ông nói anh Yamada thuyết trình 10 phút đầu nên người đầu tiên là anh Yamada; anh Yamamoto thuyết trình sau, chị phụ nữ chỉ photo tài liệu. Từ vựng: 最初（さいしょ）: đầu tiên; 会議室（かいぎしつ）: phòng họp.",
  "dlg": [
   {
    "jp": "山本さん、来週のプレゼンのほうは、進んでいますか。",
    "sp": "女",
    "vi": "Anh Yamamoto, việc chuẩn bị cho bài thuyết trình tuần sau tiến triển thế nào rồi ạ?"
   },
   {
    "jp": "はい、資料は、ほとんどできました。あとは、グラフを作るだけです。",
    "sp": "男",
    "vi": "Vâng, tài liệu thì gần xong rồi. Chỉ còn làm biểu đồ nữa thôi."
   },
   {
    "jp": "プレゼンは、何分ですか。",
    "sp": "女",
    "vi": "Bài thuyết trình kéo dài bao nhiêu phút ạ?"
   },
   {
    "jp": "20分です。質問の時間も、10分あります。",
    "sp": "男",
    "vi": "20 phút. Thời gian hỏi đáp cũng có 10 phút."
   },
   {
    "jp": "だれが発表しますか。",
    "sp": "女",
    "vi": "Ai sẽ thuyết trình ạ?"
   },
   {
    "jp": "私と山田さんが発表します。山田さんは、最初の10分です。",
    "sp": "男",
    "vi": "Em và anh Yamada sẽ thuyết trình. Anh Yamada thuyết trình 10 phút đầu."
   },
   {
    "jp": "場所はどこですか。",
    "sp": "女",
    "vi": "Địa điểm ở đâu ạ?"
   },
   {
    "jp": "3階の会議室です。100人ぐらい入ります。",
    "sp": "男",
    "vi": "Phòng họp tầng 3. Chứa được khoảng 100 người."
   },
   {
    "jp": "じゃあ、前の日に、会議室を予約しなければなりませんね。",
    "sp": "女",
    "vi": "Thế thì hôm trước phải đặt phòng họp nhỉ."
   },
   {
    "jp": "はい、明日、予約します。プロジェクターも借ります。",
    "sp": "男",
    "vi": "Vâng, ngày mai em sẽ đặt. Em cũng mượn máy chiếu."
   },
   {
    "jp": "わかりました。私は、資料をコピーします。",
    "sp": "女",
    "vi": "Em hiểu rồi. Em sẽ photo tài liệu."
   },
   {
    "jp": "お願いします。金曜日に、練習をしましょう。",
    "sp": "男",
    "vi": "Nhờ chị nhé. Thứ sáu mình luyện tập nhé."
   }
  ]
 },
 {
  "au": "voice_M05_C06.mp3",
  "t": 5,
  "q": "男の人は、明日、何をしますか。",
  "opts": [
   "資料をコピーします。",
   "練習をします。",
   "グラフを作ります。",
   "会議室を予約します。"
  ],
  "imgs": null,
  "ans": 3,
  "exp": "Người đàn ông nói ngày mai sẽ đặt phòng họp và mượn máy chiếu; photo tài liệu là việc của người phụ nữ, luyện tập là thứ sáu, làm biểu đồ là việc còn lại nhưng không nói là ngày mai. Từ vựng: 予約（よやく）: đặt trước; プロジェクター: máy chiếu.",
  "dlg": [
   {
    "jp": "山本さん、来週のプレゼンのほうは、進んでいますか。",
    "sp": "女",
    "vi": "Anh Yamamoto, việc chuẩn bị cho bài thuyết trình tuần sau tiến triển thế nào rồi ạ?"
   },
   {
    "jp": "はい、資料は、ほとんどできました。あとは、グラフを作るだけです。",
    "sp": "男",
    "vi": "Vâng, tài liệu thì gần xong rồi. Chỉ còn làm biểu đồ nữa thôi."
   },
   {
    "jp": "プレゼンは、何分ですか。",
    "sp": "女",
    "vi": "Bài thuyết trình kéo dài bao nhiêu phút ạ?"
   },
   {
    "jp": "20分です。質問の時間も、10分あります。",
    "sp": "男",
    "vi": "20 phút. Thời gian hỏi đáp cũng có 10 phút."
   },
   {
    "jp": "だれが発表しますか。",
    "sp": "女",
    "vi": "Ai sẽ thuyết trình ạ?"
   },
   {
    "jp": "私と山田さんが発表します。山田さんは、最初の10分です。",
    "sp": "男",
    "vi": "Em và anh Yamada sẽ thuyết trình. Anh Yamada thuyết trình 10 phút đầu."
   },
   {
    "jp": "場所はどこですか。",
    "sp": "女",
    "vi": "Địa điểm ở đâu ạ?"
   },
   {
    "jp": "3階の会議室です。100人ぐらい入ります。",
    "sp": "男",
    "vi": "Phòng họp tầng 3. Chứa được khoảng 100 người."
   },
   {
    "jp": "じゃあ、前の日に、会議室を予約しなければなりませんね。",
    "sp": "女",
    "vi": "Thế thì hôm trước phải đặt phòng họp nhỉ."
   },
   {
    "jp": "はい、明日、予約します。プロジェクターも借ります。",
    "sp": "男",
    "vi": "Vâng, ngày mai em sẽ đặt. Em cũng mượn máy chiếu."
   },
   {
    "jp": "わかりました。私は、資料をコピーします。",
    "sp": "女",
    "vi": "Em hiểu rồi. Em sẽ photo tài liệu."
   },
   {
    "jp": "お願いします。金曜日に、練習をしましょう。",
    "sp": "男",
    "vi": "Nhờ chị nhé. Thứ sáu mình luyện tập nhé."
   }
  ]
 },
 {
  "au": "voice_M05_C07.mp3",
  "t": 5,
  "q": "何をあげますか。",
  "opts": [
   "本をあげます。",
   "花をあげます。",
   "時計をあげます。",
   "カードだけをあげます。"
  ],
  "imgs": null,
  "ans": 2,
  "exp": "Mọi người góp tiền tặng đồng hồ; thiệp chỉ làm kèm, hoa và sách không được nhắc đến. Từ vựng: 退職（たいしょく）: nghỉ hưu; お祝い（おいわい）: mừng; あげる: tặng.",
  "dlg": [
   {
    "jp": "田中さん、山田先生の退職のお祝いに、何をあげますか。",
    "sp": "男",
    "vi": "Chị Tanaka, nhân dịp mừng thầy Yamada nghỉ hưu, mình tặng gì ạ?"
   },
   {
    "jp": "みんなでお金を集めて、時計をあげたいです。",
    "sp": "女",
    "vi": "Em muốn mọi người cùng góp tiền để tặng đồng hồ."
   },
   {
    "jp": "いいですね。いくらぐらい集まりますか。",
    "sp": "男",
    "vi": "Hay đấy. Góp được khoảng bao nhiêu ạ?"
   },
   {
    "jp": "1人1000円で、20人ですから、20000円ぐらいです。",
    "sp": "女",
    "vi": "Mỗi người 1000 yên, 20 người nên khoảng 20000 yên."
   },
   {
    "jp": "時計は、どこで買いますか。",
    "sp": "男",
    "vi": "Mua đồng hồ ở đâu ạ?"
   },
   {
    "jp": "駅の前のデパートで買いたいです。来週の土曜日に行きます。",
    "sp": "女",
    "vi": "Em muốn mua ở cửa hàng bách hóa trước ga. Thứ bảy tuần sau em sẽ đi."
   },
   {
    "jp": "じゃあ、私も一緒に行きます。何時に行きますか。",
    "sp": "男",
    "vi": "Thế thì em cũng đi cùng. Mấy giờ mình đi ạ?"
   },
   {
    "jp": "午後2時に、駅の前で会いましょう。",
    "sp": "女",
    "vi": "2 giờ chiều mình gặp nhau trước ga nhé."
   },
   {
    "jp": "わかりました。カードも作りましょうか。",
    "sp": "男",
    "vi": "Em hiểu rồi. Mình cũng làm thiệp nhé?"
   },
   {
    "jp": "はい、みんなのメッセージを集めて、カードに書きます。",
    "sp": "女",
    "vi": "Vâng, mình thu thập lời nhắn của mọi người rồi viết vào thiệp."
   },
   {
    "jp": "いいですね。私は、カードを買ってきます。",
    "sp": "男",
    "vi": "Hay đấy. Em sẽ đi mua thiệp."
   },
   {
    "jp": "お願いします。来週の金曜日までに、メッセージを集めます。",
    "sp": "女",
    "vi": "Nhờ anh nhé. Đến thứ sáu tuần sau em sẽ thu thập xong lời nhắn."
   }
  ]
 },
 {
  "au": "voice_M05_C08.mp3",
  "t": 5,
  "q": "いくらぐらい集まりますか。",
  "opts": [
   "20000円ぐらいです。",
   "1000円ぐらいです。",
   "10000円ぐらいです。",
   "30000円ぐらいです。"
  ],
  "imgs": null,
  "ans": 0,
  "exp": "Mỗi người 1000 yên nhân 20 người thành 20000 yên; 1000 yên chỉ là tiền mỗi người, các số còn lại không khớp phép tính. Từ vựng: 集める（あつめる）: thu thập, góp; ぐらい: khoảng.",
  "dlg": [
   {
    "jp": "田中さん、山田先生の退職のお祝いに、何をあげますか。",
    "sp": "男",
    "vi": "Chị Tanaka, nhân dịp mừng thầy Yamada nghỉ hưu, mình tặng gì ạ?"
   },
   {
    "jp": "みんなでお金を集めて、時計をあげたいです。",
    "sp": "女",
    "vi": "Em muốn mọi người cùng góp tiền để tặng đồng hồ."
   },
   {
    "jp": "いいですね。いくらぐらい集まりますか。",
    "sp": "男",
    "vi": "Hay đấy. Góp được khoảng bao nhiêu ạ?"
   },
   {
    "jp": "1人1000円で、20人ですから、20000円ぐらいです。",
    "sp": "女",
    "vi": "Mỗi người 1000 yên, 20 người nên khoảng 20000 yên."
   },
   {
    "jp": "時計は、どこで買いますか。",
    "sp": "男",
    "vi": "Mua đồng hồ ở đâu ạ?"
   },
   {
    "jp": "駅の前のデパートで買いたいです。来週の土曜日に行きます。",
    "sp": "女",
    "vi": "Em muốn mua ở cửa hàng bách hóa trước ga. Thứ bảy tuần sau em sẽ đi."
   },
   {
    "jp": "じゃあ、私も一緒に行きます。何時に行きますか。",
    "sp": "男",
    "vi": "Thế thì em cũng đi cùng. Mấy giờ mình đi ạ?"
   },
   {
    "jp": "午後2時に、駅の前で会いましょう。",
    "sp": "女",
    "vi": "2 giờ chiều mình gặp nhau trước ga nhé."
   },
   {
    "jp": "わかりました。カードも作りましょうか。",
    "sp": "男",
    "vi": "Em hiểu rồi. Mình cũng làm thiệp nhé?"
   },
   {
    "jp": "はい、みんなのメッセージを集めて、カードに書きます。",
    "sp": "女",
    "vi": "Vâng, mình thu thập lời nhắn của mọi người rồi viết vào thiệp."
   },
   {
    "jp": "いいですね。私は、カードを買ってきます。",
    "sp": "男",
    "vi": "Hay đấy. Em sẽ đi mua thiệp."
   },
   {
    "jp": "お願いします。来週の金曜日までに、メッセージを集めます。",
    "sp": "女",
    "vi": "Nhờ anh nhé. Đến thứ sáu tuần sau em sẽ thu thập xong lời nhắn."
   }
  ]
 },
 {
  "au": "voice_M05_C09.mp3",
  "t": 5,
  "q": "男の人は、カードについて、何をしますか。",
  "opts": [
   "カードにメッセージを書きます。",
   "カードを送ります。",
   "カードを作ります。",
   "カードを買ってきます。"
  ],
  "imgs": null,
  "ans": 3,
  "exp": "Người đàn ông nói sẽ đi mua thiệp; thu thập và viết lời nhắn là việc của người phụ nữ, gửi thiệp không được nhắc đến. Từ vựng: メッセージ: lời nhắn; までに: cho đến trước.",
  "dlg": [
   {
    "jp": "田中さん、山田先生の退職のお祝いに、何をあげますか。",
    "sp": "男",
    "vi": "Chị Tanaka, nhân dịp mừng thầy Yamada nghỉ hưu, mình tặng gì ạ?"
   },
   {
    "jp": "みんなでお金を集めて、時計をあげたいです。",
    "sp": "女",
    "vi": "Em muốn mọi người cùng góp tiền để tặng đồng hồ."
   },
   {
    "jp": "いいですね。いくらぐらい集まりますか。",
    "sp": "男",
    "vi": "Hay đấy. Góp được khoảng bao nhiêu ạ?"
   },
   {
    "jp": "1人1000円で、20人ですから、20000円ぐらいです。",
    "sp": "女",
    "vi": "Mỗi người 1000 yên, 20 người nên khoảng 20000 yên."
   },
   {
    "jp": "時計は、どこで買いますか。",
    "sp": "男",
    "vi": "Mua đồng hồ ở đâu ạ?"
   },
   {
    "jp": "駅の前のデパートで買いたいです。来週の土曜日に行きます。",
    "sp": "女",
    "vi": "Em muốn mua ở cửa hàng bách hóa trước ga. Thứ bảy tuần sau em sẽ đi."
   },
   {
    "jp": "じゃあ、私も一緒に行きます。何時に行きますか。",
    "sp": "男",
    "vi": "Thế thì em cũng đi cùng. Mấy giờ mình đi ạ?"
   },
   {
    "jp": "午後2時に、駅の前で会いましょう。",
    "sp": "女",
    "vi": "2 giờ chiều mình gặp nhau trước ga nhé."
   },
   {
    "jp": "わかりました。カードも作りましょうか。",
    "sp": "男",
    "vi": "Em hiểu rồi. Mình cũng làm thiệp nhé?"
   },
   {
    "jp": "はい、みんなのメッセージを集めて、カードに書きます。",
    "sp": "女",
    "vi": "Vâng, mình thu thập lời nhắn của mọi người rồi viết vào thiệp."
   },
   {
    "jp": "いいですね。私は、カードを買ってきます。",
    "sp": "男",
    "vi": "Hay đấy. Em sẽ đi mua thiệp."
   },
   {
    "jp": "お願いします。来週の金曜日までに、メッセージを集めます。",
    "sp": "女",
    "vi": "Nhờ anh nhé. Đến thứ sáu tuần sau em sẽ thu thập xong lời nhắn."
   }
  ]
 }
];
