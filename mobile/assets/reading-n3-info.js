/* Đọc hiểu N3 — dạng Tìm thông tin: 10 bài TỰ VIẾT MỚI (hướng dẫn sử dụng,
bảng giá, điều kiện tham gia… — không copy đề JLPT thật, không trùng ngân
hàng đề thi của app). Kiến thức đến N3, có furigana. Câu hỏi yêu cầu đối
chiếu nhiều dòng thông tin trong bài. Mỗi bài 2 câu hỏi × 4 đáp án, giải
thích tiếng Việt + từ vựng cuối bài. Nạp lười qua ensureReadData(). */
window.READ_N3_INFO = [
{
title: "市民プールの 利用案内",
body: "市民プール 利用案内\n開館期間： 七月一日から 八月三十一日まで\n開館時間： 午前 九時から 午後 八時まで（入場は 七時半まで）\n休館日： 毎週 月曜日（月曜日が 祝日の ときは、次の 日）\n料金： 大人 六百円／中学生・高校生 三百円／小学生以下 百五十円\nコース： 競泳コースは 水泳帽が 必要です。帽子は 受付で 二百円で 貸し出して います。\n・小学 三年生以下の 子どもは、大人と 一緒に 入って ください。",
qs: [
{
q: "プールが 休みの 日は、いつですか。",
opts: ["毎週 月曜日だけ", "毎週 月曜日。ただし月曜日が 祝日なら 次の 日", "祝日だけ", "八月の 最後の 日だけ"],
ans: 1,
exp: "Đáp án đúng là 2: mục 休館日 ghi「毎週 月曜日（月曜日が 祝日の ときは、次の 日）」— nghỉ thứ Hai hằng tuần, nhưng nếu thứ Hai là ngày lễ thì ngày nghỉ dời sang ngày hôm sau. Đáp án 1 thiếu mất điều kiện ngoại lệ này. Đáp án 3 và 4 không đúng với quy định trong bài."
},
{
q: "高校生が 競泳コースで 泳ぎたい とき、帽子は どう すれば いいですか。",
opts: ["買わなければ なりません", "受付で 二百円で 借りることが できます", "帽子は いりません", "家から 持って 来なければ なりません"],
ans: 1,
exp: "Đáp án đúng là 2: làn bơi thi đấu bắt buộc đội mũ bơi và「帽子は 受付で 二百円で 貸し出して います」— thuê tại quầy tiếp tân giá 200 yên. Đáp án 1 (phải mua) và 4 (phải mang từ nhà) đều không đúng vì có dịch vụ cho thuê. Đáp án 3 sai vì mũ là bắt buộc ởコース này."
}
],
vocab: [
{ w: "利用案内", r: "りようあんない", m: "hướng dẫn sử dụng"},
{ w: "開館", r: "かいかん", m: "mở cửa (cơ sở công cộng)"},
{ w: "競泳", r: "きょうえい", m: "bơi thi đấu, bơi tốc độ"},
{ w: "貸し出します", r: "かしだします", m: "cho mượn ra (dịch vụ cho thuê)"},
{ w: "祝日", r: "しゅくじつ", m: "ngày lễ (quốc gia)"}
]
},
{
title: "総合病院の 外来案内",
body: "総合病院 外来の ご案内\n受付時間： 午前 八時半から 十一時半まで／午後 一時半から 四時まで\n休診日： 日曜日・祝日・土曜日の 午後\n初めての 方は、保険証を 持って、受付の 近くの 機械で 受付票を 出して ください。\n予約の ある 方は、予約時間の 十五分前までに 受付を 済ませて ください。\n午後は 予約の ある 方だけです。予約が ない 方は、午前に 来て ください。\n救急の 場合は、時間に 関わらず 電話で 相談して ください。",
qs: [
{
q: "予約が ない 人は、いつ 行けば いいですか。",
opts: ["午後に 行きます", "午前中に 行きます", "日曜日に 行きます", "いつでも いいです"],
ans: 1,
exp: "Đáp án đúng là 2: thông báo ghi「午後は 予約の ある 方だけです。予約が ない 方は、午前に 来て ください」— buổi chiều chỉ khám cho người có hẹn, không có hẹn phải đi buổi sáng. Đáp án 1 trái trực tiếp với quy định. Đáp án 3 (Chủ nhật) là ngày nghỉ khám. Đáp án 4 sai vì có khung giờ cố định."
},
{
q: "初めて この 病院に 来た 人は、初めに 何を しますか。",
opts: ["電話で 予約します", "保険証を 持って、機械で 受付票を 出します", "午後に 来ます", "救急に 相談します"],
ans: 1,
exp: "Đáp án đúng là 2: bài ghi「初めての 方は、保険証を 持って…機械で 受付票を 出して ください」— mang thẻ bảo hiểm và lấy phiếu tiếp nhận tại máy gần quầy. Đáp án 1 không được yêu cầu. Đáp án 3 không phải bước đầu tiên. Đáp án 4 (gọi cấp cứu) chỉ áp dụng cho trường hợp khẩn cấp."
}
],
vocab: [
{ w: "外来", r: "がいらい", m: "khám ngoại trú"},
{ w: "休診日", r: "きゅうしんび", m: "ngày nghỉ khám bệnh"},
{ w: "保険証", r: "ほけんしょう", m: "thẻ bảo hiểm (y tế)"},
{ w: "受付票", r: "うけつけひょう", m: "phiếu tiếp nhận (khám bệnh)"},
{ w: "救急", r: "きゅうきゅう", m: "cấp cứu"}
]
},
{
title: "新幹線の 切符",
body: "新幹線の 指定席と 自由席について\n指定席： 席が 決まって います。料金は 自由席より 五百二十円 高いです。\n自由席： 空いている 席に 自由に 座れますが、混んで いる ときは 座れないことも あります。\nグリーン席： 席が 広くて 静かです。料金は 指定席より 三千円 高いです。\n子ども料金（六歳から 十二歳）は、大人の 半額です。五歳以下の 子どもは、大人と 一緒なら 無料ですが、席は ありません。\n指定席の 切符は、乗る 日の 一か月前から 買えます。",
qs: [
{
q: "大人 一人と 十歳の 子ども 一人が 指定席に 乗るとき、自由席との 差は どう なりますか。",
opts: ["二人で 五百二十円 高く なります", "大人は 五百二十円、子どもは 二百六十円 高く なり、合計 七百八十円です", "子どもの 料金は 同じです", "二人で 千四十円 高く なります"],
ans: 1,
exp: "Đáp án đúng là 2: vé ghế chỉ định đắt hơn ghế tự do 520 yên cho người lớn; vé trẻ em bằng nửa giá người lớn nên phần chênh của trẻ em cũng là một nửa: 260 yên. Tổng chênh hai người là 520 + 260 = 780 yên. Đáp án 1 quên tính phần vé của trẻ em. Đáp án 3 sai vì trẻ em dùng指定席 vẫn chịu chênh lệch theo giá vé trẻ em. Đáp án 4 tính trẻ em như người lớn."
},
{
q: "五歳の 子どもについて、正しい ものは どれですか。",
opts: ["大人の 半額です", "大人と 一緒なら 無料ですが、席は ありません", "一人でも 無料で 席が あります", "十二歳まで 無料です"],
ans: 1,
exp: "Đáp án đúng là 2: bài ghi trẻ từ 5 tuổi trở xuống「大人と 一緒なら 無料ですが、席は ありません」— đi cùng người lớn thì miễn phí nhưng không có ghế riêng. Đáp án 1 là quy định cho trẻ 6-12 tuổi. Đáp án 3 sai ở hai điểm: phải đi cùng người lớn và không có ghế. Đáp án 4 mở rộng sai độ tuổi miễn phí."
}
],
vocab: [
{ w: "指定席", r: "していせき", m: "ghế chỉ định (đặt trước số ghế)"},
{ w: "自由席", r: "じゆうせき", m: "ghế tự do (ngồi chỗ trống bất kỳ)"},
{ w: "半額", r: "はんがく", m: "nửa giá"},
{ w: "混みます", r: "こみます", m: "đông, chật kín"},
{ w: "料金", r: "りょうきん", m: "phí, giá vé"}
]
},
{
title: "運転免許の 更新",
body: "運転免許 更新の お知らせ\n更新できる 期間： 誕生日の 一か月前から 一か月後まで\n場所： 運転免許センター（一階 受付）\n時間： 午前 八時半から 十一時まで／午後 一時から 四時まで（土曜日・日曜日・祝日は 休み）\n持って 来る もの： 今の 免許証、手数料 三千円、眼鏡が 必要な 人は 眼鏡\n七十歳以上の 人は、更新の 前に 高齢者講習を 受けなければ なりません。講習の 予約は 電話で お願いします。\n初めて 更新する 人と、違反が ある 人は、講習が 二時間です。一般の 人は 一時間です。",
qs: [
{
q: "七十五歳の 人が 更新する とき、特に 必要なことは 何ですか。",
opts: ["眼鏡を 買うこと", "更新の 前に 高齢者講習を 受けること", "二時間の 講習を 受けること", "日曜日に 来ること"],
ans: 1,
exp: "Đáp án đúng là 2: bài quy định「七十歳以上の 人は、更新の 前に 高齢者講習を 受けなければ なりません」— người từ 70 tuổi phải học lớp dành cho người cao tuổi trước khi gia hạn. Đáp án 1 (kính mắt) chỉ cần với người cần kính, không gắn với độ tuổi. Đáp án 3 là quy định cho người mới gia hạn lần đầu hoặc có vi phạm. Đáp án 4 sai vì cuối tuần trung tâm nghỉ."
},
{
q: "更新の 手続きが できない 日は いつですか。",
opts: ["月曜日", "金曜日", "土曜日と 日曜日と 祝日", "誕生日の 前日"],
ans: 2,
exp: "Đáp án đúng là 3: mục 時間 ghi rõ「土曜日・日曜日・祝日は 休み」. Đáp án 1 và 2 là ngày thường, vẫn làm việc theo khung giờ. Đáp án 4 vẫn nằm trong khoảng thời gian được gia hạn (một tháng trước đến một tháng sau sinh nhật)."
}
],
vocab: [
{ w: "運転免許", r: "うんてんめんきょ", m: "bằng lái xe"},
{ w: "更新", r: "こうしん", m: "gia hạn, làm mới"},
{ w: "手数料", r: "てすうりょう", m: "phí thủ tục, lệ phí"},
{ w: "高齢者", r: "こうれいしゃ", m: "người cao tuổi"},
{ w: "違反", r: "いはん", m: "vi phạm"}
]
},
{
title: "ホテルの 宿泊プラン",
body: "ホテル「みなと」宿泊プランの ご案内\n素泊まり（食事なし）： 一泊 八千円\n朝食付き： 一泊 九千五百円\n朝食・夕食付き： 一泊 一万三千円\n・チェックインは 午後 三時から、チェックアウトは 午前 十時までです。\n・チェックアウトは 千円で 十二時まで 延ばすことが できます。\n・三日前までの キャンセルは 無料です。二日前から 前日までは 料金の 半額、当日は 全額 かかります。\n・駐車場は 無料ですが、台数が 少ないので、予約が おすすめです。",
qs: [
{
q: "プランBで 一泊して、チェックアウトを 十二時まで 延ばしたい とき、合計は いくらですか。",
opts: ["九千五百円", "一万五百円", "一万三千円", "一万千円"],
ans: 1,
exp: "Đáp án đúng là 2 (一万五百円):プランB là 9.500 yên, việc kéo dài giờ trả phòng đến 12 giờ tốn thêm 1.000 yên「チェックアウトは 千円で 十二時まで 延ばすことが できます」, tổng 10.500 yên. Đáp án 1 quên khoản phụ phí. Đáp án 3 là giáプランC. Đáp án 4 không có phép tính nào trong bài cho ra."
},
{
q: "旅行の 前日に キャンセルしたら、どう なりますか。",
opts: ["無料です", "料金の 半額が かかります", "料金の 全額が かかります", "次の 日に 変えられます"],
ans: 1,
exp: "Đáp án đúng là 2: quy định「二日前から 前日までは 料金の 半額」— hủy từ hai ngày trước đến ngày hôm trước thì mất nửa giá. Đáp án 1 (miễn phí) chỉ áp dụng khi hủy từ ba ngày trước trở đi. Đáp án 3 (toàn bộ) chỉ khi hủy đúng ngày ở. Đáp án 4 không được nhắc đến."
}
],
vocab: [
{ w: "宿泊", r: "しゅくはく", m: "trọ lại, lưu trú qua đêm"},
{ w: "素泊まり", r: "すどまり", m: "chỉ ở trọ, không kèm bữa ăn"},
{ w: "延ばします", r: "のばします", m: "kéo dài (thời gian)"},
{ w: "全額", r: "ぜんがく", m: "toàn bộ số tiền"},
{ w: "台数", r: "だいすう", m: "số lượng (xe, máy móc)"}
]
},
{
title: "スキーツアーの 募集",
body: "スキーツアー 参加者 募集\n日程： 二月八日（土）から 九日（日）一泊二日\n集合： 新宿駅 西口 午前 七時（バスで 移動します）\n行き先： 長野県 白馬スキー場\n参加費： 一人 二万二千円（バス代、ホテル代、朝食・夕食、リフト券を 含みます）\nスキー道具の レンタルは 別に 三千円 かかります。自分の 道具を 持って 来ることも できます。\n対象： 高校生以上。ただし、十八歳以下の 人は、保護者の 同意書が 必要です。\n申し込み： 一月二十日まで。定員 四十名に なったら 締め切ります。",
qs: [
{
q: "参加費に 入って いない ものは どれですか。",
opts: ["バス代", "リフト券", "スキー道具の レンタル代", "夕食"],
ans: 2,
exp: "Đáp án đúng là 3: tiền thuê dụng cụ trượt tuyết「別に 三千円 かかります」— tính riêng 3.000 yên, không nằm trong phí tham gia. Đáp án 1 (tiền xe), 2 (vé cáp treo) và 4 (bữa tối) đều nằm trong danh sách「含みます」của bài."
},
{
q: "十七歳の 高校生が 参加したい とき、必要なものは 何ですか。",
opts: ["保護者の 同意書", "スキー道具", "運転免許証", "特に ありません"],
ans: 0,
exp: "Đáp án đúng là 1: quy định「十八歳以下の 人は、保護者の 同意書が 必要です」— người từ 18 tuổi trở xuống cần giấy đồng ý của phụ huynh. Đáp án 2 (dụng cụ) có thể thuê, không bắt buộc mang theo. Đáp án 3 không liên quan (đi bằng xe buýt). Đáp án 4 sai vì có điều kiện rõ ràng."
}
],
vocab: [
{ w: "募集", r: "ぼしゅう", m: "tuyển, chiêu mộ (người tham gia)"},
{ w: "集合", r: "しゅうごう", m: "tập trung, tập hợp"},
{ w: "含みます", r: "ふくみます", m: "bao gồm"},
{ w: "保護者", r: "ほごしゃ", m: "người giám hộ, phụ huynh"},
{ w: "同意書", r: "どういしょ", m: "giấy đồng ý"},
{ w: "定員", r: "ていいん", m: "số lượng người tối đa, sức chứa"}
]
},
{
title: "マンション 入居の ご案内",
body: "新入居者の みなさまへ\n・入居の 日は、午前 九時から 午後 五時までに 管理室で 鍵を 受け取って ください。\n・引っ越しの 車は、マンションの 前に 止めることが できますが、一時間以内に 移動して ください。\n・ゴミ集積所は 一階の 裏側です。決められた 日と 分別を 守って ください。\n・エレベーターで 大きな 家具を 運ぶ ときは、三日前までに 管理室に 連絡が 必要です。\n・ペットは、十キロ以下の 犬と 猫だけ 飼うことが できます。届け出が 必要です。",
qs: [
{
q: "大きな 家具を エレベーターで 運びたい とき、どう しなければ なりませんか。",
opts: ["当日に 管理室へ 行きます", "三日前までに 管理室に 連絡します", "一時間以内に 運びます", "届け出を 出します"],
ans: 1,
exp: "Đáp án đúng là 2: bài quy định「三日前までに 管理室に 連絡が 必要です」— phải báo cho phòng quản lý trước ba ngày. Đáp án 1 (đến hôm đó mới báo) trái với hạn chót này. Đáp án 3 (trong vòng một giờ) là quy định về xe chuyển nhà đỗ trước tòa nhà, không phải về thang máy. Đáp án 4 (nộp đơn) là quy định dành cho việc nuôi thú cưng."
},
{
q: "この マンションで 飼うことが できる ペットは どれですか。",
opts: ["どんな 犬や 猫でも いいです", "十キロ以下の 犬と 猫だけです", "猫だけです", "ペットは 飼えません"],
ans: 1,
exp: "Đáp án đúng là 2: bài ghi「十キロ以下の 犬と 猫だけ 飼うことが できます」— chỉ chó và mèo từ 10 kg trở xuống, lại còn phải đăng ký. Đáp án 1 bỏ mất điều kiện cân nặng. Đáp án 3 thiếu chó. Đáp án 4 phủ định sai."
}
],
vocab: [
{ w: "入居", r: "にゅうきょ", m: "dọn vào ở (nhà, căn hộ)"},
{ w: "集積所", r: "しゅうせきじょ", m: "điểm tập kết (rác)"},
{ w: "分別", r: "ぶんべつ", m: "phân loại (rác)"},
{ w: "届け出", r: "とどけで", m: "đơn khai báo, thông báo (cho cơ quan)"},
{ w: "裏側", r: "うらがわ", m: "phía sau, mặt sau"}
]
},
{
title: "市民センターの 講座案内",
body: "市民センター 秋の 講座案内（十月から 十二月）\n 毎週 火曜日 十時から 十一時半／月 四千円\n 毎週 水曜日・金曜日 十九時から 二十時／月 八千円\n 毎週 木曜日 十四時から 十六時／月 五千円（道具代は 別）\n 毎週 土曜日 十時から 十一時／月 三千円\n・申し込みは 九月一日から、センターの 窓口か 電話で 受け付けます。\n・どの 講座も 初回は 無料で 体験できます。\n・定員は 各講座 二十名です。",
qs: [
{
q: "英語が 勉強したくて、昼間は 仕事が ある 人に 合う 講座は どれですか。",
opts: ["ヨガ", "英会話", "書道", "子ども 絵画"],
ans: 1,
exp: "Đáp án đúng là 2 （英会話）: lớp hội thoại tiếng Anh học「毎週 水曜日・金曜日 十九時から 二十時」— buổi tối sau giờ làm, đúng nhu cầu học tiếng Anh của người bận ban ngày. Các lớp còn lại đều học ban ngày hoặc buổi sáng, và cũng không phải môn tiếng Anh."
},
{
q: "講座に ついて、正しい ものは どれですか。",
opts: ["申し込みは 電話だけです", "初回は どの 講座も 無料で 体験できます", "書道の 月謝には 道具代も 入って います", "定員は 三十名です"],
ans: 1,
exp: "Đáp án đúng là 2: bài ghi「どの 講座も 初回は 無料で 体験できます」— buổi đầu của mọi lớp đều được học thử miễn phí. Đáp án 1 sai vì đăng ký được cả tại quầy lẫn qua điện thoại. Đáp án 3 sai vì tiền dụng cụ thư pháp tính riêng （道具代は 別）. Đáp án 4 sai, sĩ số tối đa là 20 người."
}
],
vocab: [
{ w: "講座", r: "こうざ", m: "khóa học, lớp học (theo chủ đề)"},
{ w: "書道", r: "しょどう", m: "thư pháp"},
{ w: "絵画", r: "かいが", m: "hội họa"},
{ w: "初回", r: "しょかい", m: "lần đầu tiên"},
{ w: "月謝", r: "げっしゃ", m: "học phí theo tháng"}
]
},
{
title: "健康診断の ご案内（会社）",
body: "社員 健康診断の ご案内\n今年の 健康診断は、下の 日程で 行います。自分の 部署の 日に 必ず 受けて ください。\n営業部： 十月十四日（火）／総務部・経理部： 十月十五日（水）／製造部： 十月十六日（木）・十七日（金）\n場所： 本社 三階 会議室（受付は 九時から 十一時まで）\n前日の 夜 九時からは、何も 食べないで ください。水は 飲んでも いいです。\n当日の 朝は、朝食を 食べないで 来て ください。薬を 飲んで いる 人は、診断の 前に 医師に 相談して ください。\n都合が 悪い 人は、十月二十日（月）に 予備日が あります。人事部に 連絡して ください。",
qs: [
{
q: "製造部の 人は、いつ 健康診断を 受けられますか。",
opts: ["十月十四日", "十月十五日", "十月十六日と 十七日", "十月二十日だけ"],
ans: 2,
exp: "Đáp án đúng là 3: lịch ghi 製造部 vào「十月十六日（木）・十七日（金）」— hai ngày 16 và 17/10. Đáp án 1 là ngày của phòng kinh doanh, đáp án 2 là của tổng vụ và kế toán. Đáp án 4 (20/10) là ngày dự phòng cho người bận, không phải ngày chính của phòng sản xuất."
},
{
q: "診断の 前日の 夜 九時から、しては いけないことは 何ですか。",
opts: ["水を 飲むこと", "何かを 食べること", "薬を 飲むこと", "寝ること"],
ans: 1,
exp: "Đáp án đúng là 2: quy định「前日の 夜 九時からは、何も 食べないで ください」— từ 21 giờ tối hôm trước không được ăn. Đáp án 1 (uống nước) được phép rõ ràng「水は 飲んでも いいです」. Đáp án 3: bài chỉ dặn người đang uống thuốc thì hỏi ý kiến bác sĩ trước, không cấm uống thuốc. Đáp án 4 không xuất hiện trong bài."
}
],
vocab: [
{ w: "部署", r: "ぶしょ", m: "bộ phận, phòng ban (nơi công tác)"},
{ w: "総務部", r: "そうむぶ", m: "phòng tổng vụ"},
{ w: "経理部", r: "けいりぶ", m: "phòng kế toán"},
{ w: "予備日", r: "よびび", m: "ngày dự phòng"},
{ w: "人事部", r: "じんじぶ", m: "phòng nhân sự"}
]
},
{
title: "自転車の 駐輪場 定期券",
body: "駅前 駐輪場 定期券の お知らせ\n定期券の 料金（一か月）： 自転車 二千円／原付 三千五百円／バイク 五千円\n・定期券は、毎月 二十五日から 次の 月の 分を 販売します。\n・学生は、学生証を 見せると、二割引に なります。\n・定期券を なくした ときは、再発行に 千円 かかります。\n・駐輪場は 二十四時間 開いて いますが、夜 十時から 朝 六時までは 警備員が いません。\n・三か月以上 置いた ままの 自転車は、市の ルールで 移動します。",
qs: [
{
q: "学生が 学生証を 見せて 自転車の 定期券を 買うと、いくらに なりますか。",
opts: ["二千円", "千六百円", "千八百円", "千円"],
ans: 1,
exp: "Đáp án đúng là 2 （千六百円）: giá vé tháng xe đạp là 2.000 yên, học sinh trình thẻ được giảm hai phần mười（二割引 = giảm 20%), còn 2.000 × 0,8 = 1.600 yên. Đáp án 1 là giá chưa giảm. Đáp án 3 là giảm 10%, không đúng mức 二割. Đáp án 4 là phí cấp lại vé khi làm mất."
},
{
q: "駐輪場に ついて、注意することは 何ですか。",
opts: ["夜は 入ることが できません", "夜 十時から 朝 六時までは 警備員が いません", "定期券は いつでも 買えます", "自転車は 一年 置けます"],
ans: 1,
exp: "Đáp án đúng là 2: bãi xe mở 24 giờ nhưng「夜 十時から 朝 六時までは 警備員が いません」— ban đêm không có bảo vệ, cần lưu ý. Đáp án 1 sai vì bãi mở suốt ngày đêm. Đáp án 3 sai vì vé tháng chỉ bán từ ngày 25 cho tháng sau. Đáp án 4 sai vì xe để quá ba tháng sẽ bị di chuyển theo quy định thành phố."
}
],
vocab: [
{ w: "駐輪場", r: "ちゅうりんじょう", m: "bãi gửi xe đạp/xe máy"},
{ w: "定期券", r: "ていきけん", m: "vé định kỳ (vé tháng)"},
{ w: "原付", r: "げんつき", m: "xe máy phân khối nhỏ (có bàn đạp phụ trợ)"},
{ w: "割引", r: "わりびき", m: "giảm giá (theo phần mười)"},
{ w: "再発行", r: "さいはっこう", m: "cấp lại (giấy tờ, thẻ)"},
{ w: "警備員", r: "けいびいん", m: "nhân viên bảo vệ"}
]
}
];
