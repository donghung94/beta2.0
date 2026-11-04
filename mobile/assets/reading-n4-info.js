/* Đọc hiểu N4 — dạng Tìm thông tin: 10 bài TỰ VIẾT MỚI (thông báo, quy định,
   bảng giá, lịch trình — không copy đề JLPT thật, không trùng ngân hàng đề thi
   của app). Kiến thức đến N4, có furigana. Câu hỏi kiểu tìm đúng thông tin,
   có chi tiết gây nhiễu lấy từ chính văn bản. Mỗi bài 2 câu hỏi × 4 đáp án,
   có giải thích tiếng Việt + từ vựng cuối bài. Nạp lười qua ensureReadData(). */
window.READ_N4_INFO = [
  {
    title: "アパートの お願い",
    body: "アパート「さくら荘」の 住民の みなさんへ\n・ゴミは 月曜日と 木曜日の 朝 八時までに、決められた 場所に 出して ください。\n・夜 十時から 朝 六時までは、大きな 音を 出さないで ください。\n・自転車は 入り口の 右側に 止めて ください。階段の 前には 止めないで ください。\n・困ったことが あったら、管理人の 山田さん（101号室）に 相談して ください。",
    qs: [
      {
        q: "ゴミは いつ 出さなければ なりませんか。",
        opts: ["月曜日と 木曜日の 朝 八時までに", "火曜日と 金曜日の 夜までに", "毎日の 朝 八時までに", "月曜日と 木曜日の 夜 十時までに"],
        ans: 0,
        exp: "Đáp án đúng là 1: quy định ghi「ゴミは 月曜日と 木曜日の 朝 八時までに」— đổ rác trước 8 giờ sáng thứ Hai và thứ Năm. Đáp án 2 sai ngày. Đáp án 3 (mỗi ngày) quá rộng so với quy định. Đáp án 4 lấy mốc 十時 của quy định về tiếng ồn, không phải giờ đổ rác."
      },
      {
        q: "自転車は どこに 止めては いけませんか。",
        opts: ["入り口の 右側", "階段の 前", "駐車場", "101号室の 前"],
        ans: 1,
        exp: "Đáp án đúng là 2 (階段の 前): bài viết「階段の 前には 止めないで ください」— không đỗ trước cầu thang. Đáp án 1 (bên phải lối vào) là nơi được yêu cầu đỗ, ngược với câu hỏi. Đáp án 3 và 4 không được nhắc đến."
      }
    ],
    vocab: [
      { w: "住民", r: "じゅうみん", m: "cư dân, người sinh sống" },
      { w: "決められた", r: "きめられた", m: "đã được quy định" },
      { w: "階段", r: "かいだん", m: "cầu thang" },
      { w: "管理人", r: "かんりにん", m: "người quản lý (tòa nhà)" },
      { w: "相談します", r: "そうだんします", m: "trao đổi, xin tư vấn" }
    ]
  },
  {
    title: "年末年始の 休み",
    body: "会社のお知らせ\n年末年始の 休みについて\n今年の 仕事は 十二月二十八日（土）までです。\n十二月二十九日（日）から 一月三日（金）まで、会社は 休みに なります。\n新しい 年の 仕事は 一月四日（土）からでは なく、一月六日（月）から 始まります。\n一月四日と 五日は 土曜日と 日曜日ですから、休みです。\n休みの 間に 急な 用事が あったら、田中課長に メールして ください。",
    qs: [
      {
        q: "新しい 年の 仕事は いつから 始まりますか。",
        opts: ["一月三日", "一月四日", "一月六日", "一月五日"],
        ans: 2,
        exp: "Đáp án đúng là 3 (一月六日): thông báo nhấn mạnh「一月四日（土）からでは なく、一月六日（月）から 始まります」— bắt đầu từ thứ Hai 6/1, không phải 4/1. Đáp án 1 là ngày cuối của kỳ nghỉ. Đáp án 2 là cái bẫy mà chính văn bản đã phủ định. Đáp án 4 (5/1) là Chủ nhật, vẫn nghỉ."
      },
      {
        q: "今年の 仕事は いつまでですか。",
        opts: ["十二月二十七日", "十二月二十八日", "十二月二十九日", "一月三日"],
        ans: 1,
        exp: "Đáp án đúng là 2 (十二月二十八日): câu đầu ghi「今年の 仕事は 十二月二十八日（土）までです」. Đáp án 3 (29/12) là ngày bắt đầu nghỉ, không phải ngày làm cuối. Đáp án 4 là ngày cuối kỳ nghỉ. Đáp án 1 không xuất hiện trong bài."
      }
    ],
    vocab: [
      { w: "年末年始", r: "ねんまつねんし", m: "cuối năm và đầu năm" },
      { w: "始まります", r: "はじまります", m: "bắt đầu" },
      { w: "急な", r: "きゅうな", m: "gấp, đột xuất" },
      { w: "用事", r: "ようじ", m: "việc cần làm, công chuyện" },
      { w: "課長", r: "かちょう", m: "trưởng phòng (cấp quản lý)" }
    ]
  },
  {
    title: "ゴミの 出し方",
    body: "市の お知らせ： ゴミの 出し方\n燃えるゴミ： 火曜日と 金曜日\n燃えないゴミ： 第2・第4 水曜日\nペットボトルと 缶： 月曜日\n大きな ゴミ（家具など）： 電話で 予約が 必要です。料金は 一つ 千円です。\nゴミは 決められた 日の 朝 八時までに、家の 前に 出して ください。前の 日の 夜には 出さないで ください。",
    qs: [
      {
        q: "ペットボトルは 何曜日に 出しますか。",
        opts: ["火曜日", "金曜日", "水曜日", "月曜日"],
        ans: 3,
        exp: "Đáp án đúng là 4 (月曜日): bài ghi「ペットボトルと 缶： 月曜日」— chai nhựa và lon đổ vào thứ Hai. Đáp án 1 và 2 là ngày của rác cháy được. Đáp án 3 là ngày của rác không cháy được (tuần thứ 2 và 4)."
      },
      {
        q: "大きな ゴミを 出したい 人は、どう しなければ なりませんか。",
        opts: ["朝 八時までに 出します", "電話で 予約して、千円 払います", "月曜日に 出します", "家の 前に 置きます"],
        ans: 1,
        exp: "Đáp án đúng là 2: rác cồng kềnh cần「電話で 予約が 必要です。料金は 一つ 千円です」— đặt hẹn qua điện thoại và trả 1.000 yên mỗi món. Đáp án 1 và 4 là quy định chung cho rác thường, chưa đủ với rác lớn. Đáp án 3 là ngày của chai nhựa/lon."
      }
    ],
    vocab: [
      { w: "燃えます", r: "もえます", m: "cháy (燃えるゴミ: rác cháy được)" },
      { w: "缶", r: "かん", m: "lon (kim loại)" },
      { w: "予約", r: "よやく", m: "đặt trước, đặt hẹn" },
      { w: "必要", r: "ひつよう", m: "cần thiết" },
      { w: "料金", r: "りょうきん", m: "phí, cước" }
    ]
  },
  {
    title: "スポーツジムの 料金",
    body: "スポーツジム「元気クラブ」料金のお知らせ\n入会金： 五千円\n月会費： 一般 八千円／学生 五千円\n一回だけの 利用： 千五百円（会員では ない 人）\nプールだけの 利用は できません。ジムと プールの 両方 使えます。\n開館時間： 午前 六時から 午後 十一時まで（日曜日は 午後 八時まで）\n休館日： 毎月 第三 月曜日",
    qs: [
      {
        q: "学生の 一か月の 会費は いくらですか。",
        opts: ["五千円", "八千円", "千五百円", "三千円"],
        ans: 0,
        exp: "Đáp án đúng là 1 (五千円): bảng giá ghi「学生 五千円」. Cần phân biệt: năm nghìn yên cũng là tiền 入会金 (phí nhập hội), nhưng câu hỏi hỏi 会費 hằng tháng của học sinh — cũng là 5.000 yên theo dòng 月会費. Đáp án 2 là phí của người thường; đáp án 3 là giá dùng lẻ một lần dành cho người không phải hội viên; đáp án 4 không có trong bài."
      },
      {
        q: "日曜日、ジムは 何時まで 開いて いますか。",
        opts: ["午後 十一時まで", "午後 八時まで", "午前 六時まで", "午後 十時まで"],
        ans: 1,
        exp: "Đáp án đúng là 2 (午後 八時まで): bài ghi giờ mở cửa thường là đến 23 giờ nhưng「日曜日は 午後 八時まで」— riêng Chủ nhật đóng lúc 20 giờ. Đáp án 1 là giờ của các ngày thường. Đáp án 3 là giờ mở cửa buổi sáng. Đáp án 4 không xuất hiện trong bài."
      }
    ],
    vocab: [
      { w: "入会金", r: "にゅうかいきん", m: "phí gia nhập (hội, câu lạc bộ)" },
      { w: "会費", r: "かいひ", m: "hội phí (đóng định kỳ)" },
      { w: "利用", r: "りよう", m: "sử dụng, tận dụng" },
      { w: "両方", r: "りょうほう", m: "cả hai phía/bên" },
      { w: "開館", r: "かいかん", m: "mở cửa (cơ sở công cộng)" }
    ]
  },
  {
    title: "電車の 工事の お知らせ",
    body: "電車をご利用の みなさまへ\n工事の ため、十一月十六日（土）と 十七日（日）は、青山駅から 高田駅の 間、電車は 止まります。\nこの 間は、バスが 無料で 走ります。バスは 青山駅前を 十分に 一回 出ます。\n電車の 切符を 持っている 人は、その 切符で バスに 乗ることが できます。\n十八日（月）からは、いつも どおり 電車が 走ります。",
    qs: [
      {
        q: "電車が 止まるのは、いつから いつまでですか。",
        opts: ["十一月十五日から 十六日まで", "十一月十六日から 十七日まで", "十一月十七日から 十八日まで", "十一月十六日から 十八日まで"],
        ans: 1,
        exp: "Đáp án đúng là 2: bài ghi vì thi công,「十一月十六日（土）と 十七日（日）は…電車は 止まります」— tàu dừng hai ngày 16 và 17/11. Đáp án 4 kéo dài tới 18/11, nhưng bài nói từ 18/11 tàu chạy lại bình thường. Đáp án 1 và 3 lệch ngày."
      },
      {
        q: "バスは どのくらいに 一回 出ますか。",
        opts: ["五分に 一回", "十五分に 一回", "十分に 一回", "二十分に 一回"],
        ans: 2,
        exp: "Đáp án đúng là 3 (十分に 一回): bài viết「バスは 青山駅前を 十分に 一回 出ます」— cứ 10 phút có một chuyến xe buýt thay thế, miễn phí. Các khoảng cách ở đáp án 1, 2, 4 không xuất hiện trong bài."
      }
    ],
    vocab: [
      { w: "工事", r: "こうじ", m: "thi công, công trình" },
      { w: "利用", r: "りよう", m: "sử dụng (ご利用: việc quý khách sử dụng)" },
      { w: "無料", r: "むりょう", m: "miễn phí" },
      { w: "切符", r: "きっぷ", m: "vé (tàu xe)" },
      { w: "いつもどおり", r: "いつもどおり", m: "như thường lệ" }
    ]
  },
  {
    title: "旅行の 日程",
    body: "バス旅行「日光への たび」日程表\n一日目： 九時 新宿駅 出発 → 十二時 日光 着。昼食の あと、お寺と 神社を 見学します。十七時 ホテル 着。\n二日目： 九時 ホテル 出発 → 湖と 滝を 見ます。昼食は 湖の 近くの レストランです。十五時 日光 出発 → 十八時 新宿駅 着。\n料金： 一人 二万八千円（昼食二回と ホテル代を 含みます）\n申し込み： 十一月二十日まで 電話で お願いします。",
    qs: [
      {
        q: "二日目、昼食は どこで 食べますか。",
        opts: ["ホテル", "湖の 近くの レストラン", "日光駅の 店", "バスの 中"],
        ans: 1,
        exp: "Đáp án đúng là 2: lịch trình ngày 2 ghi「昼食は 湖の 近くの レストランです」— ăn trưa ở nhà hàng gần hồ. Đáp án 1 (khách sạn) là nơi đến vào 17 giờ ngày đầu, bài không nói ăn trưa ở đó. Đáp án 3 và 4 không xuất hiện trong bài."
      },
      {
        q: "料金に 入って いない ものは どれですか。",
        opts: ["一日目の 昼食", "二日目の 昼食", "ホテル代", "夕食"],
        ans: 3,
        exp: "Đáp án đúng là 4 (夕食): giá tour「昼食二回と ホテル代を 含みます」— bao gồm hai bữa trưa và tiền khách sạn, không nhắc đến bữa tối. Đáp án 1, 2 (hai bữa trưa) và 3 (tiền khách sạn) đều đã nằm trong giá."
      }
    ],
    vocab: [
      { w: "日程", r: "にってい", m: "lịch trình, chương trình theo ngày" },
      { w: "出発", r: "しゅっぱつ", m: "xuất phát" },
      { w: "見学します", r: "けんがくします", m: "tham quan học hỏi" },
      { w: "含みます", r: "ふくみます", m: "bao gồm" },
      { w: "申し込み", r: "もうしこみ", m: "đăng ký, nộp đơn" }
    ]
  },
  {
    title: "図書館の イベント",
    body: "市立図書館 イベントのお知らせ\n「子ども 読書会」\n日時： 毎月 第一 土曜日 午前 十時から 十一時半まで\n場所： 図書館 二階 子ども室\n内容： 司書が 絵本を 読みます。そのあと、みんなで 本の 話を します。\n対象： 四歳から 小学校 三年生まで\n申し込みは いりません。無料です。\nただし、子ども 一人に 大人 一人が 一緒に 来て ください。",
    qs: [
      {
        q: "読書会に 参加できる 子どもは、だれですか。",
        opts: ["四歳から 小学校 三年生まで", "小学生なら だれでも", "三歳から 六歳まで", "中学生まで"],
        ans: 0,
        exp: "Đáp án đúng là 1: mục 対象 ghi「四歳から 小学校 三年生まで」— từ 4 tuổi đến học sinh lớp 3 tiểu học. Đáp án 2 quá rộng (học sinh lớp 4-6 không thuộc đối tượng). Đáp án 3 và 4 đều vượt ra ngoài khoảng bài quy định."
      },
      {
        q: "読書会に ついて、正しい ものは どれですか。",
        opts: ["申し込まなければ なりません", "お金が かかります", "大人が 一緒に 来なければ なりません", "毎週 土曜日に あります"],
        ans: 2,
        exp: "Đáp án đúng là 3: bài ghi điều kiện「子ども 一人に 大人 一人が 一緒に 来て ください」— mỗi trẻ phải có một người lớn đi kèm. Đáp án 1 sai vì「申し込みは いりません」. Đáp án 2 sai vì「無料です」. Đáp án 4 sai vì sự kiện chỉ vào thứ Bảy đầu tiên của tháng （毎月 第一 土曜日）, không phải mỗi tuần."
      }
    ],
    vocab: [
      { w: "市立", r: "しりつ", m: "do thành phố lập/quản lý" },
      { w: "司書", r: "ししょ", m: "thủ thư, nhân viên thư viện" },
      { w: "絵本", r: "えほん", m: "sách tranh (cho trẻ em)" },
      { w: "対象", r: "たいしょう", m: "đối tượng (áp dụng)" },
      { w: "ただし", r: "ただし", m: "tuy nhiên, với điều kiện là" }
    ]
  },
  {
    title: "店の 営業時間 変更",
    body: "お客様へ お知らせ\nいつも レストラン「山の 家」を ご利用いただき、ありがとう ございます。\n店の 工事の ため、来月の 営業時間を 変更します。\n十月： 午前 十一時から 午後 十時まで\n十一月： 午前 十一時から 午後 八時まで（工事の 間）\nまた、十一月十日（日）は 工事の ため、一日 休業します。\n十二月からは、いつも どおり 午後 十時まで 営業します。",
    qs: [
      {
        q: "十一月の 営業時間は、何時までですか。",
        opts: ["午後 十時まで", "午後 八時まで", "午後 九時まで", "午前 十一時まで"],
        ans: 1,
        exp: "Đáp án đúng là 2 (午後 八時まで): vì thi công, tháng 11 quán chỉ mở「午前 十一時から 午後 八時まで」. Đáp án 1 (22 giờ) là giờ của tháng 10 và từ tháng 12 trở lại bình thường — không áp dụng cho tháng 11. Đáp án 3 không có trong bài; đáp án 4 là giờ mở cửa."
      },
      {
        q: "店が 一日 休むのは いつですか。",
        opts: ["十一月十日", "十月十日", "十一月一日", "十二月十日"],
        ans: 0,
        exp: "Đáp án đúng là 1 (十一月十日): bài ghi「十一月十日（日）は 工事の ため、一日 休業します」. Các ngày ở đáp án 2, 3, 4 không xuất hiện trong thông báo."
      }
    ],
    vocab: [
      { w: "営業", r: "えいぎょう", m: "kinh doanh, mở cửa bán hàng" },
      { w: "変更", r: "へんこう", m: "thay đổi" },
      { w: "休業", r: "きゅうぎょう", m: "nghỉ kinh doanh, đóng cửa nghỉ" },
      { w: "工事", r: "こうじ", m: "thi công, sửa chữa" },
      { w: "お客様", r: "おきゃくさま", m: "quý khách (cách gọi kính trọng)" }
    ]
  },
  {
    title: "日本語スピーチ大会",
    body: "日本語スピーチ大会の お知らせ\n日時： 十二月十五日（日）午後 一時から 四時まで\n場所： 市民会館 三階 ホール\nスピーチの テーマ： 「私の 国」「私の 夢」の どちらか\n時間： 一人 五分以内\n参加したい 人は、十一月三十日までに 学校の 事務所で 申し込んで ください。\n上手な スピーチを した 人には、賞品が あります。聞くだけの 人は、申し込みは いりません。",
    qs: [
      {
        q: "スピーチを したい 人は、いつまでに 申し込まなければ なりませんか。",
        opts: ["十二月十五日まで", "十一月三十日まで", "十二月一日まで", "当日の 午後 一時まで"],
        ans: 1,
        exp: "Đáp án đúng là 2 (十一月三十日まで): bài ghi「十一月三十日までに 学校の 事務所で 申し込んで ください」. Đáp án 1 (15/12) là ngày diễn ra cuộc thi, không phải hạn đăng ký. Đáp án 3 và 4 không xuất hiện trong bài."
      },
      {
        q: "スピーチの テーマに ついて、正しい ものは どれですか。",
        opts: ["自由に 決めることが できます", "「私の 国」だけです", "「私の 国」と「私の 夢」の どちらかです", "日本の 文化に ついてです"],
        ans: 2,
        exp: "Đáp án đúng là 3: bài quy định chủ đề là「『私の 国』『私の 夢』の どちらか」— chọn một trong hai chủ đề cho sẵn. Đáp án 1 (tự do chọn) sai vì có danh sách cố định. Đáp án 2 thiếu mất một chủ đề. Đáp án 4 không được nhắc đến."
      }
    ],
    vocab: [
      { w: "大会", r: "たいかい", m: "đại hội, cuộc thi lớn" },
      { w: "以内", r: "いない", m: "trong vòng, không quá" },
      { w: "事務所", r: "じむしょ", m: "văn phòng (làm việc)" },
      { w: "賞品", r: "しょうひん", m: "giải thưởng, phần thưởng" },
      { w: "市民会館", r: "しみんかいかん", m: "nhà văn hóa/hội trường của thành phố" }
    ]
  },
  {
    title: "ホテルの 朝食の お知らせ",
    body: "ホテル「青空」朝食のお知らせ\n朝食の 時間と 場所が 変わりました。\n新しい 時間： 午前 六時半から 九時半まで\n新しい 場所： 一階 レストラン「うみ」\n前の 時間は 七時から 十時まで、二階でした。間違えないで ください。\n朝食券は フロントで 見せて ください。朝食券が ない 人は、千二百円で 食べることが できます。",
    qs: [
      {
        q: "新しい 朝食の 時間は いつですか。",
        opts: ["午前 七時から 十時まで", "午前 六時半から 九時半まで", "午前 六時から 九時まで", "午前 七時から 九時半まで"],
        ans: 1,
        exp: "Đáp án đúng là 2: thông báo ghi「新しい 時間： 午前 六時半から 九時半まで」. Đáp án 1 là khung giờ cũ (7:00-10:00) mà thông báo dặn đừng nhầm. Đáp án 3 và 4 sai một trong hai mốc giờ so với giờ mới."
      },
      {
        q: "朝食券が ない 人は、どう すれば 朝食を 食べられますか。",
        opts: ["フロントで 無料でもらいます", "二階へ 行きます", "千二百円 払います", "食べることが できません"],
        ans: 2,
        exp: "Đáp án đúng là 3 (千二百円 払います): bài ghi「朝食券が ない 人は、千二百円で 食べることが できます」— không có phiếu thì trả 1.200 yên là ăn được. Đáp án 1 sai (không phát miễn phí). Đáp án 2 là địa điểm cũ ở tầng hai. Đáp án 4 phủ định sai vì bài cho cách ăn rõ ràng."
      }
    ],
    vocab: [
      { w: "朝食", r: "ちょうしょく", m: "bữa sáng" },
      { w: "変わります", r: "かわります", m: "thay đổi" },
      { w: "間違えます", r: "まちがえます", m: "nhầm lẫn, làm sai" },
      { w: "券", r: "けん", m: "phiếu, vé (〜券)" },
      { w: "フロント", r: "フロント", m: "quầy lễ tân (khách sạn)" }
    ]
  }
];
