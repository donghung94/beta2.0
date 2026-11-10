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
