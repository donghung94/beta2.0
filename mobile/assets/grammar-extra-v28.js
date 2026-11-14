/* SoraKanji Web — dữ liệu Trợ từ (15 bài), Cách chia thể (14 thể + bài tập) và bảng furigana bổ sung,
   trích nguyên văn từ cùng nguồn dữ liệu của bản mobile (Minna no Nihongo). */

var FURI_SUPP = {
  "私":"わたし","僕":"ぼく","今日":"きょう","明日":"あした","昨日":"きのう","一昨日":"おととい","今朝":"けさ",
  "今":"いま","今年":"ことし","今月":"こんげつ","今回":"こんかい","今度":"こんど","何":"なに","誰":"だれ",
  "一人":"ひとり","二人":"ふたり","三人":"さんにん","何人":"なんにん",
  "好き":"すき","大好き":"だいすき","上手":"じょうず","下手":"へた","有名":"ゆうめい","元気":"げんき",
  "便利":"べんり","大切":"たいせつ","大丈夫":"だいじょうぶ","大勢":"おおぜい","皆":"みな",
  "難しい":"むずかしい","子ども":"こども","子供":"こども","場合":"ばあい","部長":"ぶちょう","部下":"ぶか",
  "タイ語":"たいご","本社":"ほんしゃ","入社":"にゅうしゃ","社会":"しゃかい","会社":"かいしゃ",
  "存じる":"ぞんじる","最中":"さいちゅう","際":"さい","国際":"こくさい","用紙":"ようし","反面":"はんめん",
  "一方":"いっぽう","対して":"たいして","対する":"たいする","精一杯":"せいいっぱい","実力":"じつりょく",
  "嘘":"うそ","全員":"ぜんいん","全国":"ぜんこく","全体":"ぜんたい","油断":"ゆだん","事項":"じこう",
  "明確":"めいかく","応じて":"おうじて","応じる":"おうじる","作業":"さぎょう","関して":"かんして","関する":"かんする",
  "一週間":"いっしゅうかん","一か月":"いっかげつ","二階":"にかい","二回":"にかい","三回":"さんかい",
  "九時":"くじ","十時":"じゅうじ","六万":"ろくまん","二万":"にまん","三年":"さんねん","四十":"よんじゅう",
  "几帳面":"きちょうめん","贅沢":"ぜいたく","名前":"なまえ","先週":"せんしゅう","今週":"こんしゅう",
  "来週":"らいしゅう","毎週":"まいしゅう","何冊":"なんさつ","何度":"なんど","郵便局":"ゆうびんきょく",
  "京都":"きょうと","動物園":"どうぶつえん","件":"けん",
  "来ます":"きます","来ません":"きません","来て":"きて","来ない":"こない","来た":"きた","来られる":"こられる",
  "来年":"らいねん","来月":"らいげつ","明後日":"あさって","生まれる":"うまれる","生きる":"いきる",
  "少々":"しょうしょう","火事":"かじ","大雑把":"おおざっぱ","佐藤":"さとう","体調":"たいちょう",
  "今日中":"きょうじゅう","免じて":"めんじて","免じる":"めんじる","不作":"ふさく","人々":"ひとびと",
  "着く":"つく","着いて":"ついて","着いた":"ついた","着る":"きる","着て":"きて","着た":"きた",
  "着ます":"きます","着ない":"きない","着せる":"きせる","着替え":"きがえ",
  "来ました":"きました","後日":"ごじつ",
  "来客":"らいきゃく","運動会":"うんどうかい","中止":"ちゅうし","の分":"のぶん",
  "5分後":"ごふんご","30分":"さんじゅっぷん","着きます":"つきます","ベトナム人":"ベトナムじん",
  "小学生":"しょうがくせい","中学生":"ちゅうがくせい","部屋代":"へやだい","後ほど":"のちほど",
  "別":"べつ","乗り遅れ":"のりおくれ","何時":"なんじ",
  "気味":"きみ","建築家":"けんちくか","転勤":"てんきん","中心":"ちゅうしん","大人":"おとな","辺り":"あたり",
"開会":"かいかい","先立って":"さきだって","以来":"いらい","手数料":"てすうりょう","発言":"はつげん",
"分野":"ぶんや","作家":"さっか","領土":"りょうど","人生":"じんせい","高校生":"こうこうせい",
"余計":"よけい","休業":"きゅうぎょう","通行":"つうこう","公演":"こうえん","即":"そく",
"何日":"なんにち","本日":"ほんじつ","実験":"じっけん","負う":"おう","量":"りょう",
"本人":"ほんにん","売り上げ":"うりあげ","体力":"たいりょく","相違":"そうい","他社":"たしゃ",
"事態":"じたい","要望":"ようぼう","起因":"きいん","由来":"ゆらい","前進":"ぜんしん",
"実行":"じっこう","反して":"はんして","反する":"はんする","事情":"じじょう","関係者":"かんけいしゃ",
"初心者":"しょしんしゃ","以外":"いがい","同然":"どうぜん","見事":"みごと","様子":"ようす",
"光栄":"こうえい","若輩":"わくはい","免許証":"めんきょしょう","二度":"にど","専門家":"せんもんか",
"曲が":"きょくが","降り出す":"ふりだす","一円":"いちえん","この辺り":"このあたり","一つ":"ひとつ","一変":"いっぺん",
"完売":"かんばい","ラテン語":"ラテンご","売り切れ":"うりきれ"
};

var FURI_KANJI = { "冊":"さつ", "円":"えん", "的":"てき", "分":"ふん", "語":"ご" };

var GR_CONJ_INTRO = [
    { g:"Nhóm I", name:"五段", r:"Thể từ điển kết thúc bằng một âm ở hàng う; âm ngay trước ます thuộc hàng い.", ex:"書く → 書きます・飲む → 飲みます・買う → 買います・話す → 話します" },
    { g:"Nhóm II", name:"一段", r:"Âm ngay trước ます thuộc hàng え, hoặc thuộc hàng い và thể từ điển kết thúc bằng る.", ex:"食べる → 食べます・寝る → 寝ます・見る → 見ます・起きる → 起きます" },
    { g:"Nhóm III", name:"する・来る", r:"Chỉ gồm する (kể cả danh từ + する) và 来る — hai động từ chia bất quy tắc, phải nhớ riêng.", ex:"勉強する → 勉強します・コピーする → コピーします・来る → 来ます" }
  ];

var GR_CONJ_NOTE = "Một số động từ kết thúc bằng る nhưng vẫn thuộc Nhóm I, cần nhớ riêng: 帰る・入る・走る・知る・切る・要る・喋る.";

var GR_CONJ = [
    { jp:"ます形", vn:"Thể ます — lịch sự", use:"Dạng lịch sự cơ bản (hiện tại, tương lai, thói quen). Mọi cách chia khác đều bắt đầu từ thân động từ — phần còn lại sau khi bỏ ます.", groups:[
      { g:"Nhóm I", r:"Âm cuối thể từ điển chuyển từ hàng う sang hàng い, thêm ます.", ex:"書く → 書きます・飲む → 飲みます・買う → 買います" },
      { g:"Nhóm II", r:"Bỏ る, thêm ます.", ex:"食べる → 食べます・見る → 見ます" },
      { g:"Nhóm III", r:"する → します・来る → 来ます（きます).", ex:"勉強する → 勉強します" } ] },
    { jp:"辞書形", vn:"Thể từ điển", use:"Dạng gốc ghi trong từ điển; dùng trong văn thân mật và đứng trước nhiều mẫu câu như ～ことがある、～前に、～とき.", groups:[
      { g:"Nhóm I", r:"Kết thúc bằng một âm ở hàng う.", ex:"書く・飲む・買う・話す・立つ" },
      { g:"Nhóm II", r:"Kết thúc bằng る, âm ngay trước る thuộc hàng え hoặc い.", ex:"食べる・見る・起きる・寝る" },
      { g:"Nhóm III", r:"Chỉ có hai động từ gốc (và các từ ～する).", ex:"する・来る" } ] },
    { jp:"ない形", vn:"Thể ない — phủ định thân mật", use:"Phủ định thân mật; là gốc của ～なければならない、～ないで、～なくて… Đặc biệt: ある → ない.", groups:[
      { g:"Nhóm I", r:"Âm cuối chuyển từ hàng う sang hàng あ, thêm ない. Riêng động từ tận cùng う thì chuyển thành わ (không phải あ).", ex:"書く → 書かない・飲む → 飲まない・買う → 買わない" },
      { g:"Nhóm II", r:"Bỏ る, thêm ない.", ex:"食べる → 食べない・見る → 見ない" },
      { g:"Nhóm III", r:"する → しない・来る → 来ない（こない).", ex:"勉強する → 勉強しない" } ] },
    { jp:"て形", vn:"Thể て", use:"Nối các hành động liên tiếp, nhờ vả ～てください, hành động đang diễn ra ～ている, cho phép ～てもいい…", groups:[
      { g:"Nhóm I", r:"Theo âm cuối thể từ điển: く → いて・ぐ → いで・す → して ／ う・つ・る → って ／ ぬ・ぶ・む → んで. Ngoại lệ: 行く → 行って.", ex:"書く → 書いて・泳ぐ → 泳いで・話す → 話して・買う → 買って・飲む → 飲んで・行く → 行って" },
      { g:"Nhóm II", r:"Bỏ る, thêm て.", ex:"食べる → 食べて・見る → 見て" },
      { g:"Nhóm III", r:"する → して・来る → 来て（きて).", ex:"勉強する → 勉強して" } ] },
    { jp:"た形", vn:"Thể た — quá khứ thân mật", use:"Quá khứ thân mật; là gốc của ～たことがある、～たら、～たり… Cách chia giống hệt て形, chỉ thay て → た・で → だ.", groups:[
      { g:"Nhóm I", r:"く → いた・ぐ → いだ・す → した ／ う・つ・る → った ／ ぬ・ぶ・む → んだ. Ngoại lệ: 行く → 行った.", ex:"書く → 書いた・飲む → 飲んだ・買う → 買った・行く → 行った" },
      { g:"Nhóm II", r:"Bỏ る, thêm た.", ex:"食べる → 食べた・見る → 見た" },
      { g:"Nhóm III", r:"する → した・来る → 来た（きた).", ex:"勉強する → 勉強した" } ] },
    { jp:"意向形", vn:"Thể ý hướng", use:"Dạng thân mật của ～ましょう: rủ rê người thân quen hoặc tự nhủ dự định (～ようと思う).", groups:[
      { g:"Nhóm I", r:"Âm cuối chuyển từ hàng う sang hàng お, thêm う.", ex:"書く → 書こう・飲む → 飲もう・買う → 買おう" },
      { g:"Nhóm II", r:"Bỏ る, thêm よう.", ex:"食べる → 食べよう・見る → 見よう" },
      { g:"Nhóm III", r:"する → しよう・来る → 来よう（こよう).", ex:"勉強する → 勉強しよう" } ] },
    { jp:"可能形", vn:"Thể khả năng", use:"“Có thể làm…”. Động từ ở thể khả năng trở thành động từ Nhóm II; trợ từ を thường đổi thành が.", groups:[
      { g:"Nhóm I", r:"Âm cuối chuyển từ hàng う sang hàng え, thêm る.", ex:"書く → 書ける・飲む → 飲める・買う → 買える" },
      { g:"Nhóm II", r:"Bỏ る, thêm られる.", ex:"食べる → 食べられる・見る → 見られる" },
      { g:"Nhóm III", r:"する → できる・来る → 来られる（こられる).", ex:"勉強する → 勉強できる" } ] },
    { jp:"命令形", vn:"Thể mệnh lệnh", use:"Ra lệnh mạnh: khẩu hiệu, tình huống khẩn cấp, lời nói thân mật (thường là nam giới). Không dùng với người trên hoặc người lạ — dễ gây mất lịch sự.", groups:[
      { g:"Nhóm I", r:"Âm cuối chuyển từ hàng う sang hàng え.", ex:"書く → 書け・飲む → 飲め・買う → 買え" },
      { g:"Nhóm II", r:"Bỏ る, thêm ろ.", ex:"食べる → 食べろ・見る → 見ろ" },
      { g:"Nhóm III", r:"する → しろ・来る → 来い（こい).", ex:"勉強する → 勉強しろ" } ] },
    { jp:"禁止形", vn:"Thể cấm đoán", use:"Cấm đoán mạnh, thường thấy trên biển báo. Muốn nói lịch sự thì dùng ～ないでください.", groups:[
      { g:"Nhóm I", r:"Giữ nguyên thể từ điển, thêm な.", ex:"書く → 書くな・飲む → 飲むな" },
      { g:"Nhóm II", r:"Giữ nguyên thể từ điển, thêm な.", ex:"食べる → 食べるな・見る → 見るな" },
      { g:"Nhóm III", r:"Giữ nguyên thể từ điển, thêm な.", ex:"する → するな・来る → 来るな" } ] },
    { jp:"ば形", vn:"Thể điều kiện ば", use:"“Nếu… thì…” (Vば、～). Tính từ い: bỏ い thêm ければ; tính từ な và danh từ dùng ～なら.", groups:[
      { g:"Nhóm I", r:"Âm cuối chuyển từ hàng う sang hàng え, thêm ば.", ex:"書く → 書けば・飲む → 飲めば・買う → 買えば" },
      { g:"Nhóm II", r:"Bỏ る, thêm れば.", ex:"食べる → 食べれば・見る → 見れば" },
      { g:"Nhóm III", r:"する → すれば・来る → 来れば（くれば).", ex:"勉強する → 勉強すれば" } ] },
    { jp:"たら形", vn:"Thể たら", use:"Lấy thể た + ら: “khi / nếu… (việc đã xảy ra) thì…”. Cách chia bám đúng thể た của từng nhóm.", groups:[
      { g:"Nhóm I", r:"Thể た + ら.", ex:"書いた → 書いたら・行った → 行ったら" },
      { g:"Nhóm II", r:"Thể た + ら.", ex:"食べた → 食べたら・見た → 見たら" },
      { g:"Nhóm III", r:"Thể た + ら.", ex:"した → したら・来た → 来たら" } ] },
    { jp:"受身形", vn:"Thể bị động", use:"“Bị / được…”. Người hoặc vật thực hiện hành động đi với trợ từ に (～に V bị động).", groups:[
      { g:"Nhóm I", r:"Âm cuối chuyển từ hàng う sang hàng あ, thêm れる. Riêng động từ tận cùng う → われる.", ex:"書く → 書かれる・飲む → 飲まれる・買う → 買われる" },
      { g:"Nhóm II", r:"Bỏ る, thêm られる.", ex:"食べる → 食べられる・見る → 見られる" },
      { g:"Nhóm III", r:"する → される・来る → 来られる（こられる).", ex:"勉強する → 勉強される" } ] },
    { jp:"使役形", vn:"Thể sai khiến", use:"“Bắt / cho phép ai làm…”. Tự động từ: người bị sai khiến đi với を; tha động từ: người bị sai khiến đi với に.", groups:[
      { g:"Nhóm I", r:"Âm cuối chuyển từ hàng う sang hàng あ, thêm せる. Riêng động từ tận cùng う → わせる.", ex:"書く → 書かせる・飲む → 飲ませる・買う → 買わせる" },
      { g:"Nhóm II", r:"Bỏ る, thêm させる.", ex:"食べる → 食べさせる・見る → 見させる" },
      { g:"Nhóm III", r:"する → させる・来る → 来させる（こさせる).", ex:"勉強する → 勉強させる" } ] },
    { jp:"使役受身形", vn:"Thể sai khiến bị động", use:"“Bị bắt phải làm…” — thường là việc mình không muốn. Chia từ thể sai khiến + れる／られる; Nhóm I hay dùng dạng rút gọn ～される.", groups:[
      { g:"Nhóm I", r:"～あ + せられる; dạng rút gọn ～あ + される.", ex:"書く → 書かせられる（書かされる）・買う → 買わせられる（買わされる）" },
      { g:"Nhóm II", r:"Bỏ る, thêm させられる.", ex:"食べる → 食べさせられる・見る → 見させられる" },
      { g:"Nhóm III", r:"する → させられる・来る → 来させられる（こさせられる).", ex:"勉強する → 勉強させられる" } ] }
  ];

var CJ_SHORT = ["Lịch sự","Từ điển","Phủ định","Thể て","Quá khứ","Ý hướng","Khả năng","Mệnh lệnh","Cấm đoán","Điều kiện ば","Điều kiện たら","Bị động","Sai khiến","Sai khiến bị động"];

var CJ_EX = [
    [ {q:"書く",g:"Nhóm I",vi:"viết",a:["書きます"]}, {q:"飲む",g:"Nhóm I",vi:"uống",a:["飲みます"]}, {q:"買う",g:"Nhóm I",vi:"mua",a:["買います"]}, {q:"話す",g:"Nhóm I",vi:"nói chuyện",a:["話します"]}, {q:"泳ぐ",g:"Nhóm I",vi:"bơi",a:["泳ぎます"]}, {q:"読む",g:"Nhóm I",vi:"đọc",a:["読みます"]}, {q:"食べる",g:"Nhóm II",vi:"ăn",a:["食べます"]}, {q:"見る",g:"Nhóm II",vi:"xem",a:["見ます"]}, {q:"する",g:"Nhóm III",vi:"làm",a:["します"]}, {q:"来る",g:"Nhóm III",vi:"đến",a:["来ます","きます"]} ],
    [ {q:"書きます",g:"Nhóm I",vi:"viết",a:["書く"]}, {q:"飲みます",g:"Nhóm I",vi:"uống",a:["飲む"]}, {q:"買います",g:"Nhóm I",vi:"mua",a:["買う"]}, {q:"話します",g:"Nhóm I",vi:"nói chuyện",a:["話す"]}, {q:"読みます",g:"Nhóm I",vi:"đọc",a:["読む"]}, {q:"食べます",g:"Nhóm II",vi:"ăn",a:["食べる"]}, {q:"見ます",g:"Nhóm II",vi:"xem",a:["見る"]}, {q:"起きます",g:"Nhóm II",vi:"thức dậy",a:["起きる"]}, {q:"します",g:"Nhóm III",vi:"làm",a:["する"]}, {q:"来ます",g:"Nhóm III",vi:"đến",a:["来る","くる"]} ],
    [ {q:"書く",g:"Nhóm I",vi:"viết",a:["書かない"]}, {q:"飲む",g:"Nhóm I",vi:"uống",a:["飲まない"]}, {q:"買う",g:"Nhóm I",vi:"mua",a:["買わない"]}, {q:"話す",g:"Nhóm I",vi:"nói chuyện",a:["話さない"]}, {q:"行く",g:"Nhóm I",vi:"đi",a:["行かない"]}, {q:"会う",g:"Nhóm I",vi:"gặp",a:["会わない"]}, {q:"食べる",g:"Nhóm II",vi:"ăn",a:["食べない"]}, {q:"見る",g:"Nhóm II",vi:"xem",a:["見ない"]}, {q:"する",g:"Nhóm III",vi:"làm",a:["しない"]}, {q:"来る",g:"Nhóm III",vi:"đến",a:["来ない","こない"]} ],
    [ {q:"書く",g:"Nhóm I",vi:"viết",a:["書いて"]}, {q:"泳ぐ",g:"Nhóm I",vi:"bơi",a:["泳いで"]}, {q:"話す",g:"Nhóm I",vi:"nói chuyện",a:["話して"]}, {q:"買う",g:"Nhóm I",vi:"mua",a:["買って"]}, {q:"待つ",g:"Nhóm I",vi:"chờ, đợi",a:["待って"]}, {q:"飲む",g:"Nhóm I",vi:"uống",a:["飲んで"]}, {q:"行く",g:"Nhóm I",vi:"đi",a:["行って"]}, {q:"食べる",g:"Nhóm II",vi:"ăn",a:["食べて"]}, {q:"する",g:"Nhóm III",vi:"làm",a:["して"]}, {q:"来る",g:"Nhóm III",vi:"đến",a:["来て","きて"]} ],
    [ {q:"書く",g:"Nhóm I",vi:"viết",a:["書いた"]}, {q:"泳ぐ",g:"Nhóm I",vi:"bơi",a:["泳いだ"]}, {q:"話す",g:"Nhóm I",vi:"nói chuyện",a:["話した"]}, {q:"買う",g:"Nhóm I",vi:"mua",a:["買った"]}, {q:"待つ",g:"Nhóm I",vi:"chờ, đợi",a:["待った"]}, {q:"飲む",g:"Nhóm I",vi:"uống",a:["飲んだ"]}, {q:"行く",g:"Nhóm I",vi:"đi",a:["行った"]}, {q:"食べる",g:"Nhóm II",vi:"ăn",a:["食べた"]}, {q:"する",g:"Nhóm III",vi:"làm",a:["した"]}, {q:"来る",g:"Nhóm III",vi:"đến",a:["来た","きた"]} ],
    [ {q:"書く",g:"Nhóm I",vi:"viết",a:["書こう"]}, {q:"飲む",g:"Nhóm I",vi:"uống",a:["飲もう"]}, {q:"買う",g:"Nhóm I",vi:"mua",a:["買おう"]}, {q:"話す",g:"Nhóm I",vi:"nói chuyện",a:["話そう"]}, {q:"行く",g:"Nhóm I",vi:"đi",a:["行こう"]}, {q:"読む",g:"Nhóm I",vi:"đọc",a:["読もう"]}, {q:"食べる",g:"Nhóm II",vi:"ăn",a:["食べよう"]}, {q:"見る",g:"Nhóm II",vi:"xem",a:["見よう"]}, {q:"する",g:"Nhóm III",vi:"làm",a:["しよう"]}, {q:"来る",g:"Nhóm III",vi:"đến",a:["来よう","こよう"]} ],
    [ {q:"書く",g:"Nhóm I",vi:"viết",a:["書ける"]}, {q:"飲む",g:"Nhóm I",vi:"uống",a:["飲める"]}, {q:"買う",g:"Nhóm I",vi:"mua",a:["買える"]}, {q:"話す",g:"Nhóm I",vi:"nói chuyện",a:["話せる"]}, {q:"泳ぐ",g:"Nhóm I",vi:"bơi",a:["泳げる"]}, {q:"読む",g:"Nhóm I",vi:"đọc",a:["読める"]}, {q:"食べる",g:"Nhóm II",vi:"ăn",a:["食べられる"]}, {q:"見る",g:"Nhóm II",vi:"xem",a:["見られる"]}, {q:"する",g:"Nhóm III",vi:"làm",a:["できる"]}, {q:"来る",g:"Nhóm III",vi:"đến",a:["来られる","こられる"]} ],
    [ {q:"書く",g:"Nhóm I",vi:"viết",a:["書け"]}, {q:"飲む",g:"Nhóm I",vi:"uống",a:["飲め"]}, {q:"買う",g:"Nhóm I",vi:"mua",a:["買え"]}, {q:"話す",g:"Nhóm I",vi:"nói chuyện",a:["話せ"]}, {q:"行く",g:"Nhóm I",vi:"đi",a:["行け"]}, {q:"読む",g:"Nhóm I",vi:"đọc",a:["読め"]}, {q:"食べる",g:"Nhóm II",vi:"ăn",a:["食べろ"]}, {q:"見る",g:"Nhóm II",vi:"xem",a:["見ろ"]}, {q:"する",g:"Nhóm III",vi:"làm",a:["しろ"]}, {q:"来る",g:"Nhóm III",vi:"đến",a:["来い","こい"]} ],
    [ {q:"書く",g:"Nhóm I",vi:"viết",a:["書くな"]}, {q:"飲む",g:"Nhóm I",vi:"uống",a:["飲むな"]}, {q:"買う",g:"Nhóm I",vi:"mua",a:["買うな"]}, {q:"話す",g:"Nhóm I",vi:"nói chuyện",a:["話すな"]}, {q:"行く",g:"Nhóm I",vi:"đi",a:["行くな"]}, {q:"読む",g:"Nhóm I",vi:"đọc",a:["読むな"]}, {q:"食べる",g:"Nhóm II",vi:"ăn",a:["食べるな"]}, {q:"見る",g:"Nhóm II",vi:"xem",a:["見るな"]}, {q:"する",g:"Nhóm III",vi:"làm",a:["するな"]}, {q:"来る",g:"Nhóm III",vi:"đến",a:["来るな"]} ],
    [ {q:"書く",g:"Nhóm I",vi:"viết",a:["書けば"]}, {q:"飲む",g:"Nhóm I",vi:"uống",a:["飲めば"]}, {q:"買う",g:"Nhóm I",vi:"mua",a:["買えば"]}, {q:"話す",g:"Nhóm I",vi:"nói chuyện",a:["話せば"]}, {q:"行く",g:"Nhóm I",vi:"đi",a:["行けば"]}, {q:"読む",g:"Nhóm I",vi:"đọc",a:["読めば"]}, {q:"食べる",g:"Nhóm II",vi:"ăn",a:["食べれば"]}, {q:"見る",g:"Nhóm II",vi:"xem",a:["見れば"]}, {q:"する",g:"Nhóm III",vi:"làm",a:["すれば"]}, {q:"来る",g:"Nhóm III",vi:"đến",a:["来れば","くれば"]} ],
    [ {q:"書く",g:"Nhóm I",vi:"viết",a:["書いたら"]}, {q:"飲む",g:"Nhóm I",vi:"uống",a:["飲んだら"]}, {q:"買う",g:"Nhóm I",vi:"mua",a:["買ったら"]}, {q:"待つ",g:"Nhóm I",vi:"chờ, đợi",a:["待ったら"]}, {q:"行く",g:"Nhóm I",vi:"đi",a:["行ったら"]}, {q:"読む",g:"Nhóm I",vi:"đọc",a:["読んだら"]}, {q:"食べる",g:"Nhóm II",vi:"ăn",a:["食べたら"]}, {q:"見る",g:"Nhóm II",vi:"xem",a:["見たら"]}, {q:"する",g:"Nhóm III",vi:"làm",a:["したら"]}, {q:"来る",g:"Nhóm III",vi:"đến",a:["来たら","きたら"]} ],
    [ {q:"書く",g:"Nhóm I",vi:"viết",a:["書かれる"]}, {q:"飲む",g:"Nhóm I",vi:"uống",a:["飲まれる"]}, {q:"買う",g:"Nhóm I",vi:"mua",a:["買われる"]}, {q:"話す",g:"Nhóm I",vi:"nói chuyện",a:["話される"]}, {q:"呼ぶ",g:"Nhóm I",vi:"gọi",a:["呼ばれる"]}, {q:"読む",g:"Nhóm I",vi:"đọc",a:["読まれる"]}, {q:"食べる",g:"Nhóm II",vi:"ăn",a:["食べられる"]}, {q:"見る",g:"Nhóm II",vi:"xem",a:["見られる"]}, {q:"する",g:"Nhóm III",vi:"làm",a:["される"]}, {q:"来る",g:"Nhóm III",vi:"đến",a:["来られる","こられる"]} ],
    [ {q:"書く",g:"Nhóm I",vi:"viết",a:["書かせる"]}, {q:"飲む",g:"Nhóm I",vi:"uống",a:["飲ませる"]}, {q:"買う",g:"Nhóm I",vi:"mua",a:["買わせる"]}, {q:"話す",g:"Nhóm I",vi:"nói chuyện",a:["話させる"]}, {q:"待つ",g:"Nhóm I",vi:"chờ, đợi",a:["待たせる"]}, {q:"読む",g:"Nhóm I",vi:"đọc",a:["読ませる"]}, {q:"食べる",g:"Nhóm II",vi:"ăn",a:["食べさせる"]}, {q:"見る",g:"Nhóm II",vi:"xem",a:["見させる"]}, {q:"する",g:"Nhóm III",vi:"làm",a:["させる"]}, {q:"来る",g:"Nhóm III",vi:"đến",a:["来させる","こさせる"]} ],
    [ {q:"書く",g:"Nhóm I",vi:"viết",a:["書かせられる","書かされる"]}, {q:"飲む",g:"Nhóm I",vi:"uống",a:["飲ませられる","飲まされる"]}, {q:"買う",g:"Nhóm I",vi:"mua",a:["買わせられる","買わされる"]}, {q:"話す",g:"Nhóm I",vi:"nói chuyện",a:["話させられる","話さされる"]}, {q:"待つ",g:"Nhóm I",vi:"chờ, đợi",a:["待たせられる","待たされる"]}, {q:"読む",g:"Nhóm I",vi:"đọc",a:["読ませられる","読まされる"]}, {q:"食べる",g:"Nhóm II",vi:"ăn",a:["食べさせられる"]}, {q:"見る",g:"Nhóm II",vi:"xem",a:["見させられる"]}, {q:"する",g:"Nhóm III",vi:"làm",a:["させられる"]}, {q:"来る",g:"Nhóm III",vi:"đến",a:["来させられる","こさせられる"]} ]
  ];

var PT_L_A = [
    { t:"は・が", parts:[
      { p:"は", use:"Đánh dấu chủ đề của câu — phần được nói tới; thông tin quan trọng nằm ở phía sau は. Cũng dùng để nhấn mạnh sự đối lập (cái này thì…, còn cái kia thì…).", ex:[
        ["わたしは学生です。","Tôi là học sinh."],
        ["今日は暑いですね。","Hôm nay nóng nhỉ."] ] },
      { p:"が", use:"Đánh dấu chủ ngữ, đặc biệt khi thông tin mới xuất hiện lần đầu, sau từ để hỏi (だれ・何), và với các mẫu ～が好き・上手・分かる・ある／いる.", ex:[
        ["あそこに猫がいます。","Ở đằng kia có một con mèo."],
        ["わたしは日本語が好きです。","Tôi thích tiếng Nhật."] ] }
    ], quiz:[
      { pre:"わたし", post:"学生です。", ans:"は", opts:["は","が","も","を"], vi:"Tôi là học sinh." },
      { pre:"あそこに猫", post:"います。", ans:"が", opts:["が","は","を","に"], vi:"Ở đằng kia có một con mèo." },
      { pre:"わたしは日本語", post:"好きです。", ans:"が", opts:["が","は","を","も"], vi:"Tôi thích tiếng Nhật." },
      { pre:"この鞄", post:"重いです。", ans:"は", opts:["は","が","を","に"], vi:"Cái cặp này nặng." },
      { pre:"だれ", post:"来ますか。", ans:"が", opts:["が","は","を","も"], vi:"Ai sẽ đến vậy?" },
      { pre:"机の上に本", post:"あります。", ans:"が", opts:["が","は","を","も"], vi:"Trên bàn có quyển sách." }
    ] },
    { t:"も・か", parts:[
      { p:"も", use:"“Cũng” — thay cho は／が／を khi một thứ khác đã được nhắc và thứ này cũng vậy. Sau các trợ từ khác (に・へ・で…) thì も đứng sau trợ từ đó.", ex:[
        ["田中さんは学生です。わたしも学生です。","Anh Tanaka là học sinh. Tôi cũng là học sinh."],
        ["山田さんもパーティーに来ます。","Anh Yamada cũng sẽ đến bữa tiệc."] ] },
      { p:"か", use:"Trợ từ cuối câu biến câu thành câu hỏi; đặt giữa hai danh từ nghĩa là “hay là” (chọn một trong hai); sau từ để hỏi nghĩa là “gì đó / ai đó” (何か・だれか).", ex:[
        ["コーヒーかお茶、どちらにしますか。","Cà phê hay trà, bạn chọn cái nào?"],
        ["何か飲みますか。","Bạn uống gì không?"] ] }
    ], quiz:[
      { pre:"田中さんは学生です。わたし", post:"学生です。", ans:"も", opts:["も","は","か","を"], vi:"Anh Tanaka là học sinh. Tôi cũng là học sinh." },
      { pre:"コーヒー", post:"お茶、どちらにしますか。", ans:"か", opts:["か","も","と","や"], vi:"Cà phê hay trà, bạn chọn cái nào?" },
      { pre:"何", post:"食べましたか。", ans:"か", opts:["か","も","は","が"], vi:"Bạn đã ăn gì chưa?" },
      { pre:"田中さんはパーティーに来ます。山田さん", post:"来ます。", ans:"も", opts:["も","か","を","へ"], vi:"Anh Tanaka sẽ đến bữa tiệc. Anh Yamada cũng sẽ đến." },
      { pre:"会議は日曜日", post:"月曜日にあります。", ans:"か", opts:["か","も","と","は"], vi:"Cuộc họp vào chủ nhật hoặc thứ hai." },
      { pre:"だれ", post:"来ましたよ。", ans:"か", opts:["か","も","は","を"], vi:"Có ai đó đến đấy." }
    ] },
    { t:"で・に", parts:[
      { p:"で", use:"Chỉ nơi diễn ra hành động (học ở…, ăn ở…), phương tiện / cách thức (đi bằng…, viết bằng…), và phạm vi (thế giớiで…).", ex:[
        ["図書館で勉強します。","Tôi học ở thư viện."],
        ["電車で会社へ行きます。","Tôi đi làm bằng tàu điện."] ] },
      { p:"に", use:"Chỉ thời điểm cụ thể (lúc 7 giờ, vào thứ hai), đích đến / hướng đi, nơi tồn tại (～に ある／いる), và người nhận hành động (bạnに cho mượn).", ex:[
        ["朝7時に起きます。","Tôi dậy lúc 7 giờ sáng."],
        ["部屋に猫がいます。","Trong phòng có một con mèo."] ] }
    ], quiz:[
      { pre:"図書館", post:"勉強します。", ans:"で", opts:["で","に","を","へ"], vi:"Tôi học ở thư viện." },
      { pre:"朝7時", post:"起きます。", ans:"に", opts:["に","で","を","が"], vi:"Tôi dậy lúc 7 giờ sáng." },
      { pre:"バス", post:"学校へ行きます。", ans:"で", opts:["で","に","を","も"], vi:"Tôi đi đến trường bằng xe buýt." },
      { pre:"部屋", post:"猫がいます。", ans:"に", opts:["に","で","を","は"], vi:"Trong phòng có một con mèo." },
      { pre:"友達", post:"本を貸しました。", ans:"に", opts:["に","で","を","が"], vi:"Tôi đã cho bạn mượn sách." },
      { pre:"日本", post:"日本語を勉強しています。", ans:"で", opts:["で","に","を","へ"], vi:"Tôi đang học tiếng Nhật ở Nhật." }
    ] },
    { t:"と・を", parts:[
      { p:"と", use:"“Và” — nối danh từ, liệt kê đầy đủ (khác や là liệt kê một phần); “cùng với” một người nào đó; và đứng sau câu trích dẫn ～と言う／思う.", ex:[
        ["パンと卵を買いました。","Tôi đã mua bánh mì và trứng."],
        ["友達と映画を見ました。","Tôi đã xem phim với bạn."] ] },
      { p:"を", use:"Đánh dấu tân ngữ trực tiếp của tha động từ (ăn cơmを, đọc sáchを); cũng chỉ nơi đi qua / rời khỏi (công viênを đi dạo, nhàを ra khỏi).", ex:[
        ["ご飯を食べます。","Tôi ăn cơm."],
        ["公園を散歩します。","Tôi đi dạo trong công viên."] ] }
    ], quiz:[
      { pre:"毎朝、パン", post:"卵を食べます。", ans:"と", opts:["と","を","や","も"], vi:"Mỗi sáng tôi ăn bánh mì và trứng." },
      { pre:"ご飯", post:"食べます。", ans:"を", opts:["を","と","が","に"], vi:"Tôi ăn cơm." },
      { pre:"友達", post:"話します。", ans:"と", opts:["と","を","に","が"], vi:"Tôi nói chuyện với bạn." },
      { pre:"公園", post:"散歩します。", ans:"を", opts:["を","に","で","と"], vi:"Tôi đi dạo trong công viên." },
      { pre:"明日、会議がある", post:"思います。", ans:"と", opts:["と","を","が","も"], vi:"Tôi nghĩ ngày mai có cuộc họp." },
      { pre:"本", post:"読みます。", ans:"を", opts:["を","と","は","に"], vi:"Tôi đọc sách." }
    ] },
    { t:"から", parts:[
      { p:"から", use:"“Từ” — điểm bắt đầu của nơi chốn hoặc thời gian (điểm cuối thường đi với まで); đặt ở cuối câu thì nghĩa là “vì…” (chỉ lý do).", ex:[
        ["ベトナムから来ました。","Tôi đến từ Việt Nam."],
        ["会議は9時から始まります。","Cuộc họp bắt đầu từ 9 giờ."] ] }
    ], quiz:[
      { pre:"ベトナム", post:"来ました。", ans:"から", opts:["から","まで","に","へ"], vi:"Tôi đến từ Việt Nam." },
      { pre:"会議は9時", post:"始まります。", ans:"から", opts:["から","まで","に","を"], vi:"Cuộc họp bắt đầu từ 9 giờ." },
      { pre:"家", post:"駅まで歩きます。", ans:"から", opts:["から","に","を","で"], vi:"Tôi đi bộ từ nhà đến ga." },
      { pre:"明日", post:"ダイエットを始めます。", ans:"から", opts:["から","まで","に","が"], vi:"Từ ngày mai tôi sẽ bắt đầu ăn kiêng." },
      { pre:"忙しい", post:"、手伝ってください。", ans:"から", opts:["から","まで","より","しか"], vi:"Vì tôi bận, hãy giúp tôi với." },
      { pre:"その電話は田中さん", post:"でした。", ans:"から", opts:["から","に","を","と"], vi:"Cuộc điện thoại đó là từ anh Tanaka." }
    ] },
    { t:"より・や", parts:[
      { p:"より", use:"Dùng trong so sánh: A は B より… nghĩa là “A … hơn B”. Vật làm mốc so sánh đứng ngay trước より.", ex:[
        ["今日は昨日より暑いです。","Hôm nay nóng hơn hôm qua."],
        ["電車はバスより速いです。","Tàu điện nhanh hơn xe buýt."] ] },
      { p:"や", use:"“Và” — liệt kê một phần, ngụ ý “v.v.” (còn những thứ khác nữa); khác と là liệt kê đầy đủ, không còn gì khác.", ex:[
        ["机の上に本やノートがあります。","Trên bàn có sách, vở, v.v."],
        ["冷蔵庫に卵や牛乳があります。","Trong tủ lạnh có trứng, sữa, v.v."] ] }
    ], quiz:[
      { pre:"今日は昨日", post:"暑いです。", ans:"より", opts:["より","から","まで","ほど"], vi:"Hôm nay nóng hơn hôm qua." },
      { pre:"電車はバス", post:"速いです。", ans:"より", opts:["より","から","と","や"], vi:"Tàu điện nhanh hơn xe buýt." },
      { pre:"机の上に本", post:"ノートがあります。", ans:"や", opts:["や","と","か","を"], vi:"Trên bàn có sách, vở, v.v." },
      { pre:"冷蔵庫に卵", post:"牛乳があります。", ans:"や", opts:["や","より","しか","だけ"], vi:"Trong tủ lạnh có trứng, sữa, v.v." },
      { pre:"わたしは兄", post:"背が高いです。", ans:"より", opts:["より","から","まで","と"], vi:"Tôi cao hơn anh trai." },
      { pre:"店で野菜", post:"果物を買いました。", ans:"や", opts:["や","より","ほど","だけ"], vi:"Tôi đã mua rau, trái cây, v.v. ở cửa hàng." }
    ] },
    { t:"て・ながら", parts:[
      { p:"て", use:"Thể て nối các hành động theo thứ tự, chỉ cách thức, hoặc nêu lý do nhẹ ở phía trước kết quả.", ex:[
        ["朝起きて、顔を洗います。","Buổi sáng thức dậy rồi rửa mặt."],
        ["写真を撮って、友達に送りました。","Tôi chụp ảnh rồi gửi cho bạn."] ] },
      { p:"ながら", use:"V（bỏ ます）+ ながら: cùng một người làm hai việc cùng lúc — “vừa… vừa…”. Hành động chính là hành động ở phía sau.", ex:[
        ["音楽を聞きながら、宿題をします。","Tôi vừa nghe nhạc vừa làm bài tập."],
        ["歩きながら、話しましょう。","Mình vừa đi bộ vừa nói chuyện đi."] ] }
    ], quiz:[
      { pre:"朝起き", post:"、顔を洗います。", ans:"て", opts:["て","ながら","から","ので"], vi:"Buổi sáng thức dậy rồi rửa mặt." },
      { pre:"音楽を聞き", post:"、宿題をします。", ans:"ながら", opts:["ながら","て","から","ば"], vi:"Tôi vừa nghe nhạc vừa làm bài tập." },
      { pre:"歩き", post:"、話しましょう。", ans:"ながら", opts:["ながら","て","と","に"], vi:"Mình vừa đi bộ vừa nói chuyện đi." },
      { pre:"テレビを見", post:"、晩ご飯を食べます。", ans:"ながら", opts:["ながら","て","を","か"], vi:"Tôi vừa xem tivi vừa ăn tối." },
      { pre:"写真を撮っ", post:"、友達に送りました。", ans:"て", opts:["て","ながら","ば","と"], vi:"Tôi chụp ảnh rồi gửi cho bạn." },
      { pre:"雨が降っ", post:"、寒くなりました。", ans:"て", opts:["て","ながら","から","まで"], vi:"Trời mưa nên trở lạnh." }
    ] },
    { t:"として・ては", parts:[
      { p:"として", use:"“Với tư cách là…, như là…” — chỉ vai trò, tư cách của người hoặc vật khi làm một việc gì đó.", ex:[
        ["彼は留学生として日本へ来ました。","Anh ấy đến Nhật với tư cách du học sinh."],
        ["この町は観光地として有名です。","Thị trấn này nổi tiếng với tư cách là một điểm du lịch."] ] },
      { p:"ては", use:"Vては いけません／だめです: “không được làm…” — cấm đoán lịch sự. Khác 禁止形 (～な) là mẫu này dùng được trong giao tiếp thường ngày.", ex:[
        ["ここで写真を撮ってはいけません。","Không được chụp ảnh ở đây."],
        ["約束を忘れてはいけません。","Không được quên lời hứa."] ] }
    ], quiz:[
      { pre:"彼は留学生", post:"日本へ来ました。", ans:"として", opts:["として","ては","では","には"], vi:"Anh ấy đến Nhật với tư cách du học sinh." },
      { pre:"ここで写真を撮っ", post:"いけません。", ans:"ては", opts:["ては","として","では","とは"], vi:"Không được chụp ảnh ở đây." },
      { pre:"彼女は医者", post:"病院で働いています。", ans:"として", opts:["として","ては","など","だけ"], vi:"Cô ấy làm việc ở bệnh viện với tư cách bác sĩ." },
      { pre:"夜更かしし", post:"いけません。", ans:"ては", opts:["ては","として","では","には"], vi:"Không được thức khuya." },
      { pre:"この町は観光地", post:"有名です。", ans:"として", opts:["として","ては","より","など"], vi:"Thị trấn này nổi tiếng với tư cách là một điểm du lịch." },
      { pre:"約束を忘れ", post:"いけません。", ans:"ては", opts:["ては","として","とは","では"], vi:"Không được quên lời hứa." }
    ] }
  ];

var PT_L_B = [
    { t:"だけ・ずつ", parts:[
      { p:"だけ", use:"“Chỉ” — giới hạn số lượng / phạm vi, đi với câu khẳng định. Phân biệt しか: しか bắt buộc theo sau là câu phủ định, だけ thì không.", ex:[
        ["今日は一人だけ来ました。","Hôm nay chỉ có một người đến."],
        ["この部屋には椅子が三つだけあります。","Trong phòng này chỉ có ba cái ghế."] ] },
      { p:"ずつ", use:"“Mỗi… một lượng bằng nhau” — chia đều theo từng phần: 一つずつ (mỗi cái một), 少しずつ (từng chút một).", ex:[
        ["一つずつ取ってください。","Hãy lấy từng cái một."],
        ["毎日少しずつ勉強します。","Mỗi ngày tôi học từng chút một."] ] }
    ], quiz:[
      { pre:"今日は一人", post:"来ました。", ans:"だけ", opts:["だけ","ずつ","しか","など"], vi:"Hôm nay chỉ có một người đến." },
      { pre:"一つ", post:"取ってください。", ans:"ずつ", opts:["ずつ","だけ","しか","ほど"], vi:"Hãy lấy từng cái một." },
      { pre:"わたしは日本語", post:"話せます。", ans:"だけ", opts:["だけ","ずつ","しか","まで"], vi:"Tôi chỉ nói được tiếng Nhật." },
      { pre:"毎日少し", post:"勉強します。", ans:"ずつ", opts:["ずつ","だけ","しか","など"], vi:"Mỗi ngày tôi học từng chút một." },
      { pre:"この部屋には椅子が三つ", post:"あります。", ans:"だけ", opts:["だけ","ずつ","ほど","より"], vi:"Trong phòng này chỉ có ba cái ghế." },
      { pre:"子どもたちに飴を二つ", post:"あげました。", ans:"ずつ", opts:["ずつ","だけ","しか","など"], vi:"Tôi đã cho mỗi đứa trẻ hai viên kẹo." }
    ] },
    { t:"ば・ても", parts:[
      { p:"ば", use:"Thể điều kiện: “nếu… thì…” — việc ở vế sau xảy ra khi điều kiện ở vế trước đúng. Chia theo bảng Cách chia thể (thể ば).", ex:[
        ["安ければ、買います。","Nếu rẻ thì tôi mua."],
        ["春になれば、桜が咲きます。","Nếu sang xuân thì hoa anh đào nở."] ] },
      { p:"ても", use:"“Dù… cũng…” — vế sau vẫn xảy ra, ngược với kỳ vọng từ vế trước. Thể て + も.", ex:[
        ["雨が降っても、出かけます。","Dù mưa tôi vẫn ra ngoài."],
        ["忙しくても、連絡してください。","Dù bận cũng hãy liên lạc nhé."] ] }
    ], quiz:[
      { pre:"安けれ", post:"、買います。", ans:"ば", opts:["ば","ても","と","なら"], vi:"Nếu rẻ thì tôi mua." },
      { pre:"雨が降っ", post:"、出かけます。", ans:"ても", opts:["ても","ば","と","から"], vi:"Dù mưa tôi vẫn ra ngoài." },
      { pre:"春になれ", post:"、桜が咲きます。", ans:"ば", opts:["ば","ても","ので","から"], vi:"Nếu sang xuân thì hoa anh đào nở." },
      { pre:"忙しく", post:"、連絡してください。", ans:"ても", opts:["ても","ば","と","ので"], vi:"Dù bận cũng hãy liên lạc nhé." },
      { pre:"お金があれ", post:"、旅行したいです。", ans:"ば", opts:["ば","ても","しか","だけ"], vi:"Nếu có tiền, tôi muốn đi du lịch." },
      { pre:"雪が降っ", post:"、学校へ行きます。", ans:"ても", opts:["ても","ば","から","ので"], vi:"Dù tuyết rơi tôi vẫn đi học." }
    ] },
    { t:"とは・でも", parts:[
      { p:"とは", use:"Đứng sau một từ để định nghĩa / giải thích từ đó: “～とは…だ” = “~ là…”. Hay gặp khi hỏi hoặc giải thích nghĩa của từ.", ex:[
        ["JLPTとは日本語能力試験のことです。","JLPT là kỳ thi năng lực tiếng Nhật."],
        ["「すみません」とは謝るときの言葉です。","“Sumimasen” là câu nói dùng khi xin lỗi."] ] },
      { p:"でも", use:"Sau từ để hỏi (だれ・何・いつ・どこ) nghĩa là “bất kỳ… cũng”: 誰でも (ai cũng), 何でも (gì cũng), いつでも (lúc nào cũng).", ex:[
        ["誰でも参加できます。","Ai cũng có thể tham gia."],
        ["いつでも電話してください。","Hãy gọi điện cho tôi bất cứ lúc nào."] ] }
    ], quiz:[
      { pre:"JLPT", post:"日本語能力試験のことです。", ans:"とは", opts:["とは","でも","など","だけ"], vi:"JLPT là kỳ thi năng lực tiếng Nhật." },
      { pre:"誰", post:"参加できます。", ans:"でも", opts:["でも","とは","しか","だけ"], vi:"Ai cũng có thể tham gia." },
      { pre:"何", post:"食べられます。", ans:"でも", opts:["でも","とは","だけ","しか"], vi:"Cái gì tôi cũng ăn được." },
      { pre:"「すみません」", post:"謝るときの言葉です。", ans:"とは", opts:["とは","でも","など","ほど"], vi:"“Sumimasen” là câu nói dùng khi xin lỗi." },
      { pre:"いつ", post:"電話してください。", ans:"でも", opts:["でも","とは","より","まで"], vi:"Hãy gọi điện bất cứ lúc nào." },
      { pre:"どこ", post:"勉強できます。", ans:"でも", opts:["でも","とは","しか","だけ"], vi:"Ở đâu cũng học được." }
    ] },
    { t:"しか・など", parts:[
      { p:"しか", use:"“Chỉ” — bắt buộc đi với câu phủ định ở phía sau (～しか…ない): ngoài thứ đó ra thì không còn gì khác.", ex:[
        ["日本語しか話せません。","Tôi chỉ nói được tiếng Nhật (không nói được tiếng khác)."],
        ["1000円しかありません。","Tôi chỉ có 1000 yên."] ] },
      { p:"など", use:"“Vân vân” — nêu vài ví dụ tiêu biểu trong một nhóm, ngụ ý còn những thứ tương tự khác.", ex:[
        ["本やノートなどを買いました。","Tôi đã mua sách, vở, v.v."],
        ["机の上に鍵や携帯などがあります。","Trên bàn có chìa khóa, điện thoại, v.v."] ] }
    ], quiz:[
      { pre:"日本語", post:"話せません。", ans:"しか", opts:["しか","など","だけ","ずつ"], vi:"Tôi chỉ nói được tiếng Nhật (không nói được tiếng khác)." },
      { pre:"本やノート", post:"を買いました。", ans:"など", opts:["など","しか","だけ","ほど"], vi:"Tôi đã mua sách, vở, v.v." },
      { pre:"1000円", post:"ありません。", ans:"しか", opts:["しか","など","だけ","ずつ"], vi:"Tôi chỉ có 1000 yên." },
      { pre:"机の上に鍵や携帯", post:"があります。", ans:"など", opts:["など","しか","だけ","より"], vi:"Trên bàn có chìa khóa, điện thoại, v.v." },
      { pre:"この村にはバス", post:"来ません。", ans:"しか", opts:["しか","など","だけ","まで"], vi:"Ở làng này chỉ có xe buýt đến (phương tiện khác không đến)." },
      { pre:"野菜や果物", post:"を食べます。", ans:"など", opts:["など","しか","ずつ","だけ"], vi:"Tôi ăn rau, trái cây, v.v." }
    ] },
    { t:"ところが・まで", parts:[
      { p:"ところが", use:"“Thế nhưng / vậy mà” — nối hai câu, kết quả ở câu sau ngược hẳn với điều được kỳ vọng từ câu trước.", ex:[
        ["薬を飲みました。ところが、熱が下がりませんでした。","Tôi đã uống thuốc. Thế nhưng cơn sốt không hạ."],
        ["一生懸命練習しました。ところが、試合に負けました。","Tôi đã luyện tập chăm chỉ. Vậy mà lại thua trận đấu."] ] },
      { p:"まで", use:"“Đến tận” — điểm cuối của thời gian / nơi chốn, hoặc mức độ cực hạn của một trạng thái.", ex:[
        ["夜10時まで勉強しました。","Tôi đã học đến 10 giờ tối."],
        ["驚いて、声まで出ませんでした。","Tôi ngạc nhiên đến mức không thốt nên lời."] ] }
    ], quiz:[
      { pre:"薬を飲みました。", post:"、熱が下がりませんでした。", ans:"ところが", opts:["ところが","まで","から","ので"], vi:"Tôi đã uống thuốc. Thế nhưng cơn sốt không hạ." },
      { pre:"夜10時", post:"勉強しました。", ans:"まで", opts:["まで","から","より","しか"], vi:"Tôi đã học đến 10 giờ tối." },
      { pre:"一生懸命練習しました。", post:"、試合に負けました。", ans:"ところが", opts:["ところが","まで","でも","とは"], vi:"Tôi đã luyện tập chăm chỉ. Vậy mà lại thua trận đấu." },
      { pre:"駅", post:"歩きました。", ans:"まで", opts:["まで","から","に","を"], vi:"Tôi đã đi bộ đến tận ga." },
      { pre:"天気予報は晴れだと言いました。", post:"、雨が降りました。", ans:"ところが", opts:["ところが","まで","から","より"], vi:"Dự báo thời tiết nói trời nắng. Thế nhưng trời lại mưa." },
      { pre:"驚いて、声", post:"出ませんでした。", ans:"まで", opts:["まで","から","しか","だけ"], vi:"Tôi ngạc nhiên đến mức không thốt nên lời." }
    ] },
    { t:"ところで・こそ", parts:[
      { p:"ところで", use:"“Nhân tiện / à mà” — mở đầu một chủ đề mới có liên quan, thường để chuyển hướng câu chuyện hoặc hỏi thêm một việc khác.", ex:[
        ["ところで、明日の天気はどうですか。","À mà, thời tiết ngày mai thế nào?"],
        ["ところで、田中さんは元気ですか。","Nhân tiện, anh Tanaka có khỏe không?"] ] },
      { p:"こそ", use:"Nhấn mạnh mạnh: “chính… mới là / chính lần này…” — đặt sau từ được nhấn mạnh, thay cho は／が.", ex:[
        ["明日こそ頑張ります。","Chính ngày mai tôi sẽ cố gắng hết sức."],
        ["こちらこそ、ありがとうございます。","Chính tôi mới phải cảm ơn bạn."] ] }
    ], quiz:[
      { pre:"", post:"、明日の天気はどうですか。", ans:"ところで", opts:["ところで","こそ","まで","から"], vi:"À mà, thời tiết ngày mai thế nào?" },
      { pre:"明日", post:"頑張ります。", ans:"こそ", opts:["こそ","ところで","まで","しか"], vi:"Chính ngày mai tôi sẽ cố gắng hết sức." },
      { pre:"こちら", post:"、ありがとうございます。", ans:"こそ", opts:["こそ","ところで","など","だけ"], vi:"Chính tôi mới phải cảm ơn bạn." },
      { pre:"", post:"、田中さんは元気ですか。", ans:"ところで", opts:["ところで","こそ","より","ほど"], vi:"Nhân tiện, anh Tanaka có khỏe không?" },
      { pre:"今年", post:"試験に合格したいです。", ans:"こそ", opts:["こそ","ところで","まで","から"], vi:"Chính năm nay tôi muốn đỗ kỳ thi." },
      { pre:"", post:"、この店は何時まで開いていますか。", ans:"ところで", opts:["ところで","こそ","しか","だけ"], vi:"À mà, cửa hàng này mở cửa đến mấy giờ?" }
    ] },
    { t:"よ・わ・もの", parts:[
      { p:"よ", use:"Trợ từ cuối câu: báo cho người nghe một thông tin mà họ chưa biết, hoặc nhấn mạnh lời nhắc nhở của người nói.", ex:[
        ["明日は休みですよ。","Ngày mai được nghỉ đấy."],
        ["僕が手伝いますよ。","Để tớ giúp cho."] ] },
      { p:"わ", use:"Trợ từ cuối câu tạo sắc thái nhẹ nhàng, mềm mỏng; trong tiếng chuẩn chủ yếu do phụ nữ dùng khi nói thân mật.", ex:[
        ["わたしも一緒に行くわ。","Tôi cũng sẽ đi cùng nè."],
        ["今日は早く帰るわ。","Hôm nay tôi về sớm đây."] ] },
      { p:"もの", use:"～ものだ: nói về điều vốn dĩ / thường tình như một lẽ tự nhiên (“vốn là…”, “thường thì…”).", ex:[
        ["子どもはよく外で遊ぶものだ。","Trẻ con vốn hay chơi ở ngoài."],
        ["年を取ると、忘れやすくなるものだ。","Khi có tuổi, người ta vốn hay quên."] ] }
    ], quiz:[
      { pre:"急いでください。電車がもう来ます", post:"。", ans:"よ", opts:["よ","ね","わ","もの"], vi:"Nhanh lên nào. Tàu sắp đến rồi đấy." },
      { pre:"わたしも一緒に行く", post:"。", ans:"わ", opts:["わ","もの","こそ","だけ"], vi:"(Nữ nói) Tôi cũng sẽ đi cùng nè." },
      { pre:"年を取ると、忘れやすくなる", post:"だ。", ans:"もの", opts:["もの","よ","わ","ね"], vi:"Khi có tuổi, người ta vốn hay quên." },
      { pre:"僕が手伝います", post:"。", ans:"よ", opts:["よ","わ","もの","だけ"], vi:"Để tớ giúp cho." },
      { pre:"子どもはよく外で遊ぶ", post:"だ。", ans:"もの", opts:["もの","よ","わ","ね"], vi:"Trẻ con vốn hay chơi ở ngoài." },
      { pre:"もう時間がないから、急いだほうがいい", post:"。", ans:"よ", opts:["よ","わ","もの","こそ"], vi:"Vì không còn thời gian nữa nên nhanh lên thì hơn đấy." }
    ] }
  ];

var PT_LESSONS = PT_L_A.concat(PT_L_B);

/* ===== Bổ sung riêng cho bản web: nhiều cách dùng của từng trợ từ (trường uses) =====
   Nội dung tự viết theo ngữ pháp trợ từ chuẩn của Minna no Nihongo, câu ví dụ trình độ N5–N4.
   Khối này CHỈ gán thêm trường uses vào mỗi part; các trường use / ex / quiz ở trên giữ nguyên
   từng ký tự vì bản mobile vẫn đang đọc hai trường use và ex. */
var PT_USES = {
"は":[
  { t:"Đánh dấu chủ đề — điều mà cả câu nói về", ex:[
    ["私はベトナム人です。","Tôi là người Việt Nam."],
    ["田中さんは先生です。","Anh Tanaka là giáo viên."] ] },
  { t:"Chủ đề đã rõ, đã được nhắc tới trước đó", ex:[
    ["あの映画はとても面白かったです。","Bộ phim đó rất hay."],
    ["その本はもう読みました。","Quyển sách đó tôi đã đọc rồi."] ] },
  { t:"Mô tả tính chất, trạng thái của chủ đề", ex:[
    ["富士山はとても高いです。","Núi Phú Sĩ rất cao."],
    ["この部屋は静かです。","Căn phòng này yên tĩnh."] ] },
  { t:"Đứng sau thời gian, nơi chốn để mở bối cảnh cho câu", ex:[
    ["今日は試験があります。","Hôm nay có kỳ thi."],
    ["ここは私の部屋です。","Đây là phòng của tôi."] ] },
  { t:"Nhấn mạnh sự đối lập giữa hai vế", ex:[
    ["ビールは飲みますが、ワインは飲みません。","Bia thì tôi uống, nhưng rượu vang thì không."],
    ["日本語は話せますが、中国語は話せません。","Tiếng Nhật thì tôi nói được, nhưng tiếng Trung thì không."] ] },
  { t:"Trong câu phủ định, thay cho を・が để nhấn mạnh phần bị phủ định", ex:[
    ["お金はありません。","Tôi không có tiền."],
    ["コーヒーは飲みません。","Cà phê thì tôi không uống."] ] },
  { t:"Chủ đề lớn bao quát, phía sau còn một chủ ngữ nhỏ với が", ex:[
    ["この店はラーメンがおいしいです。","Quán này thì mì ramen ngon."],
    ["日本は山が多いです。","Nhật Bản có nhiều núi."] ] },
  { t:"Đánh dấu chủ đề trong câu so sánh (AはBより〜)", ex:[
    ["東京は大阪より大きいです。","Tokyo lớn hơn Osaka."],
    ["この本はあの本より面白いです。","Quyển sách này thú vị hơn quyển sách kia."] ] },
  { t:"Đứng sau số lượng để chỉ mức tối thiểu ('ít nhất')", ex:[
    ["この本を読むのに三日はかかります。","Đọc quyển sách này mất ít nhất ba ngày."],
    ["毎日一時間は勉強します。","Mỗi ngày tôi học ít nhất một tiếng."] ] },
  { t:"Trong câu phủ định với 毎日・みんな: chỉ phủ định một phần, không phải toàn bộ", ex:[
    ["毎日は運動しません。","Tôi không tập thể dục mỗi ngày đâu."],
    ["みんなは分かりませんでした。","Không phải ai cũng hiểu được."] ] }
],
"が":[
  { t:"Đánh dấu chủ ngữ — thông tin mới xuất hiện lần đầu", ex:[
    ["雨が降っています。","Trời đang mưa."],
    ["外で猫が鳴いています。","Ngoài trời có con mèo đang kêu."] ] },
  { t:"Chủ ngữ là từ để hỏi （誰・何）", ex:[
    ["誰が来ますか。","Ai sẽ đến vậy?"],
    ["何が一番好きですか。","Bạn thích nhất cái gì?"] ] },
  { t:"Đi với các mẫu thích / giỏi / hiểu: ～が好き・上手・分かる・ほしい", ex:[
    ["私は音楽が好きです。","Tôi thích âm nhạc."],
    ["彼は歌が上手です。","Anh ấy hát hay."] ] },
  { t:"Chỉ sự tồn tại cùng ある・いる", ex:[
    ["公園に子どもがいます。","Trong công viên có trẻ em."],
    ["冷蔵庫に牛乳があります。","Trong tủ lạnh có sữa."] ] },
  { t:"Tân ngữ của mong muốn: ～が飲みたい・～がほしい", ex:[
    ["水が飲みたいです。","Tôi muốn uống nước."],
    ["新しい自転車がほしいです。","Tôi muốn có một chiếc xe đạp mới."] ] }
],
"も":[
  { t:"Cũng — thay cho は・が・を khi thứ khác cũng như vậy", ex:[
    ["私も一緒に行きます。","Tôi cũng sẽ đi cùng."],
    ["彼女も日本語を勉強しています。","Cô ấy cũng đang học tiếng Nhật."] ] },
  { t:"Đứng sau một trợ từ khác （に・へ・で・から…）", ex:[
    ["大阪にも行きました。","Tôi cũng đã đi Osaka."],
    ["友達にも手紙を書きました。","Tôi cũng đã viết thư cho bạn."] ] },
  { t:"Từ để hỏi + も + phủ định: hoàn toàn không một ai / cái gì", ex:[
    ["誰も来ませんでした。","Không có ai đến cả."],
    ["何も食べませんでした。","Tôi đã không ăn gì cả."] ] },
  { t:"Số lượng + も: nhấn mạnh nhiều hơn mong đợi, tới tận", ex:[
    ["彼は本を十冊も買いました。","Anh ấy đã mua tận mười quyển sách."],
    ["今日は三時間も勉強しました。","Hôm nay tôi đã học tận ba tiếng."] ] }
],
"か":[
  { t:"Cuối câu: biến câu khẳng định thành câu hỏi", ex:[
    ["明日、来ますか。","Ngày mai bạn có đến không?"],
    ["これは何ですか。","Cái này là gì vậy?"] ] },
  { t:"Giữa hai danh từ: hay là (chọn một trong hai)", ex:[
    ["電車かバスで行きましょう。","Mình đi bằng tàu điện hay xe buýt đi."],
    ["土曜日か日曜日に会いましょう。","Mình gặp nhau vào thứ bảy hay chủ nhật nhé."] ] },
  { t:"Sau từ để hỏi: gì đó, ai đó, đâu đó", ex:[
    ["何か飲みたいです。","Tôi muốn uống gì đó."],
    ["誰か来ましたよ。","Có ai đó đến đấy."] ] },
  { t:"～かどうか: có… hay không", ex:[
    ["行くかどうか、まだ分かりません。","Tôi vẫn chưa biết có đi hay không."],
    ["答えが正しいかどうか、見てください。","Hãy xem đáp án có đúng hay không."] ] }
],
"で":[
  { t:"Nơi diễn ra hành động (học ở…, ăn ở…)", ex:[
    ["学校で日本語を勉強します。","Tôi học tiếng Nhật ở trường."],
    ["レストランで晩ご飯を食べます。","Tôi ăn tối ở nhà hàng."] ] },
  { t:"Phương tiện, công cụ, cách thức", ex:[
    ["バスで学校へ行きます。","Tôi đến trường bằng xe buýt."],
    ["はしでご飯を食べます。","Tôi ăn cơm bằng đũa."] ] },
  { t:"Nguyên liệu, chất liệu làm ra vật", ex:[
    ["この椅子は木でできています。","Cái ghế này làm bằng gỗ."],
    ["紙で鶴を折ります。","Tôi gấp hạc bằng giấy."] ] },
  { t:"Phạm vi để nói về cái nhất （〜で一番）", ex:[
    ["世界で一番高い山はエベレストです。","Ngọn núi cao nhất thế giới là Everest."],
    ["クラスで一番背が高いのは田中さんです。","Người cao nhất lớp là anh Tanaka."] ] },
  { t:"Giới hạn thời gian: trong vòng bao lâu thì xong", ex:[
    ["この仕事は一時間で終わります。","Công việc này một tiếng là xong."],
    ["本を三日で読みました。","Tôi đã đọc xong quyển sách trong ba ngày."] ] }
],
"に":[
  { t:"Thời điểm cụ thể diễn ra hành động", ex:[
    ["毎朝七時に起きます。","Mỗi sáng tôi dậy lúc 7 giờ."],
    ["日曜日に友達と遊びます。","Chủ nhật tôi đi chơi với bạn."] ] },
  { t:"Nơi tồn tại, đi với ある・いる", ex:[
    ["部屋に机があります。","Trong phòng có cái bàn."],
    ["箱の中に鍵があります。","Trong hộp có chìa khóa."] ] },
  { t:"Đích đến của hành động di chuyển", ex:[
    ["来月、日本に行きます。","Tháng sau tôi sẽ đi Nhật."],
    ["彼はもう家に帰りました。","Anh ấy đã về nhà rồi."] ] },
  { t:"Người nhận, đối tượng hướng tới của hành động", ex:[
    ["友達に本をあげました。","Tôi đã tặng sách cho bạn."],
    ["分からないことは先生に聞きます。","Điều gì không hiểu thì tôi hỏi thầy cô."] ] },
  { t:"Mục đích: động từ (bỏ ます) + に行く・来る", ex:[
    ["買い物に行きます。","Tôi đi mua sắm."],
    ["映画を見に行きましょう。","Mình đi xem phim đi."] ] }
],
"と":[
  { t:"Liệt kê đầy đủ: và (kể hết, không còn gì khác)", ex:[
    ["パンと卵と牛乳を買いました。","Tôi đã mua bánh mì, trứng và sữa."],
    ["部屋に机と椅子があります。","Trong phòng có bàn và ghế."] ] },
  { t:"Cùng với ai đó làm một việc", ex:[
    ["家族と旅行します。","Tôi đi du lịch cùng gia đình."],
    ["友達とテニスをしました。","Tôi đã chơi quần vợt với bạn."] ] },
  { t:"Trích dẫn lời nói, suy nghĩ: ～と言う・～と思う", ex:[
    ["彼は「明日行きます」と言いました。","Anh ấy nói: “Ngày mai tôi sẽ đi”."],
    ["明日は雨だと思います。","Tôi nghĩ ngày mai trời mưa."] ] },
  { t:"Điều kiện tự nhiên: cứ… là… (kết quả tất yếu)", ex:[
    ["春になると、桜が咲きます。","Cứ đến mùa xuân là hoa anh đào nở."],
    ["このボタンを押すと、電気がつきます。","Bấm nút này là đèn sáng."] ] }
],
"を":[
  { t:"Tân ngữ trực tiếp của hành động", ex:[
    ["毎晩、本を読みます。","Mỗi tối tôi đọc sách."],
    ["音楽を聞きます。","Tôi nghe nhạc."] ] },
  { t:"Nơi đi qua, di chuyển xuyên qua", ex:[
    ["橋を渡ります。","Tôi đi qua cầu."],
    ["鳥が空を飛んでいます。","Chim đang bay trên bầu trời."] ] },
  { t:"Nơi rời khỏi, điểm xuất phát của di chuyển", ex:[
    ["毎朝八時に家を出ます。","Mỗi sáng tôi ra khỏi nhà lúc 8 giờ."],
    ["駅でバスを降ります。","Tôi xuống xe buýt ở ga."] ] }
],
"から":[
  { t:"Điểm bắt đầu của nơi chốn: từ", ex:[
    ["駅からここまで五分ぐらいです。","Từ ga đến đây khoảng năm phút."],
    ["家から学校まで自転車で三十分かかります。","Từ nhà đến trường đi xe đạp mất ba mươi phút."] ] },
  { t:"Điểm bắt đầu của thời gian: từ", ex:[
    ["会議は三時からです。","Cuộc họp từ 3 giờ."],
    ["銀行は九時から開いています。","Ngân hàng mở cửa từ 9 giờ."] ] },
  { t:"Nguồn gốc: nhận, đến từ ai đó", ex:[
    ["先生から本をもらいました。","Tôi đã nhận sách từ thầy."],
    ["友達から手紙が来ました。","Có thư từ bạn gửi đến."] ] },
  { t:"Đặt ở cuối vế trước: vì… (chỉ lý do)", ex:[
    ["雨が降っていますから、傘を持って行きます。","Vì trời đang mưa nên tôi mang ô đi."],
    ["疲れたから、早く寝ます。","Vì mệt nên tôi đi ngủ sớm."] ] }
],
"より":[
  { t:"Mốc so sánh: A は B より… (A … hơn B)", ex:[
    ["今日は昨日より暖かいです。","Hôm nay ấm hơn hôm qua."],
    ["電車は飛行機より安いです。","Tàu điện rẻ hơn máy bay."] ] },
  { t:"～より～のほうが: vế sau hơn vế trước", ex:[
    ["私は夏より冬のほうが好きです。","Tôi thích mùa đông hơn mùa hè."],
    ["肉より魚のほうが体にいいです。","Cá tốt cho cơ thể hơn thịt."] ] },
  { t:"Cách nói trang trọng thay cho から: từ (trong thư, thông báo)", ex:[
    ["本日より値段が変わります。","Từ hôm nay giá sẽ thay đổi."],
    ["新しい店は来月より営業を始めます。","Cửa hàng mới sẽ bắt đầu kinh doanh từ tháng sau."] ] }
],
"や":[
  { t:"Liệt kê một phần: và… (ngụ ý còn những thứ khác)", ex:[
    ["机の上に鉛筆や消しゴムがあります。","Trên bàn có bút chì, tẩy, v.v."],
    ["冷蔵庫に肉や野菜があります。","Trong tủ lạnh có thịt, rau, v.v."] ] },
  { t:"Kết hợp ～や～など để chốt một danh sách ví dụ", ex:[
    ["本や雑誌などを読みます。","Tôi đọc sách, tạp chí, v.v."],
    ["スーパーで果物や野菜などを買いました。","Tôi đã mua trái cây, rau, v.v. ở siêu thị."] ] }
],
"て":[
  { t:"Nối các hành động theo thứ tự thời gian", ex:[
    ["朝起きて、シャワーを浴びます。","Sáng thức dậy rồi tắm."],
    ["買い物をして、家に帰りました。","Tôi mua sắm rồi về nhà."] ] },
  { t:"Cách thức: hành động chính diễn ra trong trạng thái của thể て", ex:[
    ["立って食べます。","Tôi đứng ăn."],
    ["笑って話します。","Vừa cười vừa nói."] ] },
  { t:"Lý do nhẹ ở vế trước, kết quả ở vế sau", ex:[
    ["忙しくて、遊ぶ時間がありません。","Vì bận nên tôi không có thời gian chơi."],
    ["頭が痛くて、会社を休みました。","Vì đau đầu nên tôi nghỉ làm."] ] },
  { t:"Nối tính từ để liệt kê tính chất", ex:[
    ["この部屋は広くて、明るいです。","Căn phòng này rộng và sáng."],
    ["この本は安くて、面白いです。","Quyển sách này rẻ và hay."] ] }
],
"ながら":[
  { t:"Cùng một người làm hai việc cùng lúc: vừa… vừa…", ex:[
    ["コーヒーを飲みながら、本を読みます。","Tôi vừa uống cà phê vừa đọc sách."],
    ["歩きながら、電話をしています。","Vừa đi bộ vừa gọi điện."] ] },
  { t:"Hành động phía sau ながら mới là hành động chính", ex:[
    ["音楽を聞きながら、車を運転します。","Tôi vừa nghe nhạc vừa lái xe."],
    ["歌いながら、踊ります。","Vừa hát vừa nhảy."] ] }
],
"として":[
  { t:"Với tư cách là, trong vai trò là", ex:[
    ["彼は代表として会議に出ました。","Anh ấy tham dự cuộc họp với tư cách đại diện."],
    ["私はボランティアとして病院で働いています。","Tôi làm việc ở bệnh viện với tư cách tình nguyện viên."] ] },
  { t:"Coi như là, dùng như là một thứ khác", ex:[
    ["これはプレゼントとして友達にあげます。","Cái này tôi sẽ tặng bạn làm quà."],
    ["その話は冗談として聞いてください。","Hãy nghe chuyện đó như một trò đùa thôi."] ] }
],
"ては":[
  { t:"～てはいけません: cấm đoán lịch sự (không được làm)", ex:[
    ["ここで走ってはいけません。","Không được chạy ở đây."],
    ["窓を開けてはいけません。","Không được mở cửa sổ."] ] },
  { t:"～てはだめです: không được (thân mật hơn いけません)", ex:[
    ["それを食べてはだめです。","Không được ăn cái đó."],
    ["嘘をついてはだめだよ。","Không được nói dối đâu đấy."] ] },
  { t:"～ては困ります: cứ làm vậy thì không được", ex:[
    ["仕事中に寝ては困ります。","Ngủ trong giờ làm việc thì không được."],
    ["夜更かししては困りますよ。","Thức khuya như vậy thì không được đâu."] ] }
],
"だけ":[
  { t:"Chỉ: giới hạn số lượng, phạm vi (đi với câu khẳng định)", ex:[
    ["会議には五人だけ出席しました。","Chỉ có năm người dự họp."],
    ["私は水だけ飲みます。","Tôi chỉ uống nước."] ] },
  { t:"～だけの + danh từ: chỉ vỏn vẹn từng ấy", ex:[
    ["二人だけの秘密です。","Đó là bí mật chỉ của hai người."],
    ["一週間だけの休みでした。","Đó là kỳ nghỉ chỉ vỏn vẹn một tuần."] ] },
  { t:"できるだけ: càng… càng tốt, hết mức có thể", ex:[
    ["できるだけ早く来てください。","Hãy đến càng sớm càng tốt."],
    ["できるだけ日本語で話しましょう。","Mình hãy nói bằng tiếng Nhật hết mức có thể nhé."] ] },
  { t:"～ただけだ: chẳng qua chỉ là đã…", ex:[
    ["私は聞いただけです。","Tôi chỉ nghe thôi mà."],
    ["見ただけですから、買いませんでした。","Vì chỉ xem thôi nên tôi đã không mua."] ] }
],
"ずつ":[
  { t:"Chia đều: mỗi người, mỗi lần một lượng bằng nhau", ex:[
    ["子どもたちに飴を一つずつ配ります。","Tôi phát cho mỗi đứa trẻ một viên kẹo."],
    ["一人ずつ名前を呼んでください。","Hãy gọi tên từng người một."] ] },
  { t:"Chia thành từng nhóm có số lượng bằng nhau", ex:[
    ["椅子を四つずつ並べてください。","Hãy xếp ghế thành từng nhóm bốn cái."],
    ["テーブルにコップを二つずつ置きます。","Đặt lên mỗi bàn hai cái cốc."] ] },
  { t:"少しずつ: từng chút một, dần dần", ex:[
    ["日本語が少しずつ分かってきました。","Tiếng Nhật tôi dần hiểu ra từng chút một."],
    ["貯金が少しずつ増えています。","Tiền tiết kiệm đang tăng lên từng chút một."] ] }
],
"ば":[
  { t:"Điều kiện giả định: nếu… thì…", ex:[
    ["時間があれば、手伝います。","Nếu có thời gian, tôi sẽ giúp."],
    ["雨が降らなければ、出かけます。","Nếu trời không mưa, tôi sẽ ra ngoài."] ] },
  { t:"Điều kiện mang tính quy luật, thói quen", ex:[
    ["練習すれば、上手になります。","Cứ luyện tập là sẽ giỏi lên."],
    ["このボタンを押せば、電気がつきます。","Bấm nút này là đèn sáng."] ] },
  { t:"～ば～ほど: càng… càng…", ex:[
    ["読めば読むほど、面白くなります。","Càng đọc càng thấy hay."],
    ["安ければ安いほど、よく売れます。","Càng rẻ càng bán chạy."] ] },
  { t:"～ばいい: chỉ cần… là được", ex:[
    ["分からないときは、先生に聞けばいいです。","Khi không hiểu, cứ hỏi thầy là được."],
    ["駅まではバスで行けばいいです。","Đến ga thì đi xe buýt là được."] ] }
],
"ても":[
  { t:"Dù… cũng…: kết quả ngược với kỳ vọng từ vế trước", ex:[
    ["安くても、買いません。","Dù rẻ tôi cũng không mua."],
    ["遅くても、必ず電話してください。","Dù muộn cũng nhất định hãy gọi điện nhé."] ] },
  { t:"～てもいい: được phép làm", ex:[
    ["ここで食べてもいいです。","Ăn ở đây cũng được."],
    ["写真を撮ってもいいですか。","Tôi chụp ảnh có được không?"] ] },
  { t:"いくら～ても: dù có… đến mấy cũng", ex:[
    ["いくら考えても、分かりません。","Dù nghĩ thế nào tôi cũng không hiểu."],
    ["いくら食べても、太りません。","Dù ăn bao nhiêu tôi cũng không béo."] ] },
  { t:"Từ để hỏi + ても: dù ai, dù cái gì… cũng", ex:[
    ["誰が来ても、大丈夫です。","Dù ai đến cũng không sao."],
    ["何を聞いても、彼は答えませんでした。","Dù hỏi gì anh ấy cũng không trả lời."] ] }
],
"とは":[
  { t:"Định nghĩa một từ: ～とは…だ (～ là…)", ex:[
    ["健康とは、体と心が元気なことです。","Sức khỏe là khi cơ thể và tinh thần đều khỏe mạnh."],
    ["「もったいない」とは、物を大切にする気持ちを表す言葉です。","“Mottainai” là từ diễn tả lòng trân trọng đồ vật."] ] },
  { t:"Hỏi nghĩa của từ: ～とは何ですか", ex:[
    ["「敬語」とは何ですか。","“Keigo” là gì vậy?"],
    ["JLPTとは何の試験ですか。","JLPT là kỳ thi gì vậy?"] ] },
  { t:"～とは思わなかった・知らなかった: không ngờ rằng", ex:[
    ["彼が来るとは思いませんでした。","Tôi không ngờ anh ấy sẽ đến."],
    ["試験がこんなに難しいとは知りませんでした。","Tôi không biết kỳ thi lại khó đến thế."] ] }
],
"でも":[
  { t:"Từ để hỏi + でも: bất kỳ… cũng", ex:[
    ["どこでも寝られます。","Ở đâu tôi cũng ngủ được."],
    ["誰でも分かる本です。","Đây là quyển sách ai cũng hiểu được."] ] },
  { t:"Ngay cả, thậm chí (nhấn mạnh cả trường hợp thấp nhất)", ex:[
    ["子どもでも分かります。","Ngay cả trẻ con cũng hiểu."],
    ["初心者でも簡単にできます。","Ngay cả người mới cũng làm được dễ dàng."] ] },
  { t:"Gợi ý nhẹ nhàng: …chẳng hạn (nêu một lựa chọn ví dụ)", ex:[
    ["お茶でも飲みませんか。","Uống trà chẳng hạn, được không?"],
    ["疲れたら、音楽でも聞きましょう。","Nếu mệt thì nghe nhạc chẳng hạn nhé."] ] }
],
"しか":[
  { t:"Chỉ… thôi (bắt buộc phía sau là câu phủ định)", ex:[
    ["財布に五百円しかありません。","Trong ví chỉ có 500 yên."],
    ["会議に一人しか来ませんでした。","Chỉ có một người đến cuộc họp."] ] },
  { t:"Động từ (thể từ điển) + しかない: chỉ còn cách phải…", ex:[
    ["自分でやるしかありません。","Chỉ còn cách tự mình làm."],
    ["もう頑張るしかないです。","Chỉ còn cách cố gắng thôi."] ] }
],
"など":[
  { t:"Liệt kê ví dụ tiêu biểu: vân vân", ex:[
    ["机の上に本や雑誌などがあります。","Trên bàn có sách, tạp chí, v.v."],
    ["教室に机や椅子などがあります。","Trong lớp học có bàn, ghế, v.v."] ] },
  { t:"Gợi ý nhẹ nhàng: …chẳng hạn", ex:[
    ["お茶などいかがですか。","Một tách trà chẳng hạn, bạn thấy sao?"],
    ["休みに映画など見ませんか。","Kỳ nghỉ mình xem phim chẳng hạn nhé."] ] },
  { t:"Đi với phủ định: xem nhẹ kiểu “…gì đó thì không”", ex:[
    ["私はそんなことなどしません。","Tôi không làm việc như thế đâu."],
    ["プレゼントなどいりません。","Quà cáp gì đó tôi không cần đâu."] ] }
],
"ところが":[
  { t:"Thế nhưng: kết quả ngược hẳn với điều được kỳ vọng", ex:[
    ["早く寝ました。ところが、朝なかなか起きられませんでした。","Tôi đã đi ngủ sớm. Thế nhưng sáng lại mãi không dậy được."],
    ["安いと思って買いました。ところが、すぐ壊れました。","Tôi tưởng rẻ nên mua. Vậy mà nó hỏng ngay."] ] },
  { t:"～たところが: làm rồi mới biết kết quả lại ngược lại", ex:[
    ["調べたところが、私の答えは間違いでした。","Tra cứu rồi mới biết đáp án của tôi sai."],
    ["店へ行ったところが、もう閉まっていました。","Đến cửa hàng rồi mới biết cửa hàng đã đóng cửa."] ] }
],
"まで":[
  { t:"Điểm cuối của thời gian, nơi chốn: đến tận", ex:[
    ["五時まで働きます。","Tôi làm việc đến 5 giờ."],
    ["友達を駅まで送りました。","Tôi đã tiễn bạn đến tận ga."] ] },
  { t:"Đi cặp から…まで: từ… đến…", ex:[
    ["朝から晩まで働きます。","Tôi làm việc từ sáng đến tối."],
    ["東京から大阪まで、新幹線で三時間かかります。","Từ Tokyo đến Osaka đi shinkansen mất ba tiếng."] ] },
  { t:"Đến mức, đến cả (mức độ cực hạn của trạng thái)", ex:[
    ["細かいところまでよく見てください。","Hãy xem kỹ đến tận chi tiết nhỏ."],
    ["昨夜、夢にまで試験が出ました。","Đêm qua kỳ thi xuất hiện đến cả trong mơ."] ] },
  { t:"～までもない: không cần thiết đến mức phải…", ex:[
    ["そのぐらいなら、病院へ行くまでもありません。","Mức đó thì không cần đến bệnh viện đâu."],
    ["言うまでもなく、彼は一番上手です。","Không cần nói cũng biết, anh ấy là người giỏi nhất."] ] }
],
"ところで":[
  { t:"Chuyển sang chủ đề mới: nhân tiện, à mà", ex:[
    ["ところで、宿題は終わりましたか。","À mà, bài tập về nhà xong chưa?"],
    ["ところで、この近くに郵便局はありますか。","Nhân tiện, gần đây có bưu điện không?"] ] },
  { t:"～たところで: dù có làm thì cũng vô ích", ex:[
    ["今から急いだところで、電車には間に合いません。","Giờ có vội cũng không kịp tàu."],
    ["謝ったところで、彼は許してくれませんでした。","Dù đã xin lỗi, anh ấy cũng không tha thứ."] ] }
],
"こそ":[
  { t:"Nhấn mạnh mạnh: chính… mới là / chính lần này", ex:[
    ["次こそ勝ちます。","Chính lần tới tôi sẽ thắng."],
    ["今日こそ早く寝ます。","Chính hôm nay tôi sẽ ngủ sớm."] ] },
  { t:"～からこそ: chính vì… nên mới…", ex:[
    ["好きだからこそ、毎日練習できます。","Chính vì thích nên tôi mới luyện tập được mỗi ngày."],
    ["練習したからこそ、上手になりました。","Chính vì đã luyện tập nên mới giỏi lên."] ] },
  { t:"Đáp lại lời cảm ơn, lời chào: chính tôi mới là người…", ex:[
    ["私こそ、すみませんでした。","Chính tôi mới là người phải xin lỗi."],
    ["こちらこそ、よろしくお願いします。","Chính tôi mới là người mong được giúp đỡ."] ] }
],
"よ":[
  { t:"Thông báo cho người nghe điều mà họ chưa biết", ex:[
    ["バスが来ましたよ。","Xe buýt đến rồi đấy."],
    ["明日は雨ですよ。","Ngày mai trời mưa đấy."] ] },
  { t:"Nhắc nhở, khẳng định lại với người nghe", ex:[
    ["もう時間ですよ。","Đến giờ rồi đấy."],
    ["危ないですよ。気をつけてください。","Nguy hiểm đấy. Hãy cẩn thận."] ] },
  { t:"Rủ rê, thúc giục thân mật （〜ましょうよ・〜ようよ）", ex:[
    ["一緒に行きましょうよ。","Mình cùng đi đi mà."],
    ["早く食べようよ。","Ăn nhanh đi nào."] ] }
],
"わ":[
  { t:"Nữ ngữ thân mật: khẳng định một cách nhẹ nhàng", ex:[
    ["このケーキ、とてもおいしいわ。","Cái bánh này ngon lắm đấy."],
    ["私、明日早く起きるわ。","Mai tôi sẽ dậy sớm đây."] ] },
  { t:"Bộc lộ cảm xúc, sự ngạc nhiên", ex:[
    ["まあ、きれいな花だわ。","Ôi, hoa đẹp quá đi."],
    ["この景色、すごいわ。","Cảnh này tuyệt quá đi."] ] }
],
"もの":[
  { t:"～ものだ: điều vốn dĩ như một lẽ thường tình", ex:[
    ["日本の夏は蒸し暑いものだ。","Mùa hè ở Nhật vốn oi bức."],
    ["人の気持ちは変わりやすいものだ。","Lòng người vốn dễ thay đổi."] ] },
  { t:"～たものだ: hồi tưởng thói quen ngày xưa (ngày xưa thường…)", ex:[
    ["子どものころ、よく川で泳いだものだ。","Hồi nhỏ, tôi thường hay bơi ở sông."],
    ["昔はよく手紙を書いたものだ。","Ngày xưa người ta hay viết thư."] ] },
  { t:"～ものだから・ものですから: nêu lý do mang tính biện hộ", ex:[
    ["電話が壊れていたものだから、連絡できませんでした。","Vì điện thoại hỏng nên tôi đã không liên lạc được."],
    ["道に迷ったものですから、遅れてしまいました。","Vì lạc đường nên tôi đã đến muộn."] ] }
]
};
PT_LESSONS.forEach(function(ls){
  ls.parts.forEach(function(part){
    if(PT_USES[part.p]) part.uses = PT_USES[part.p];
  });
});
