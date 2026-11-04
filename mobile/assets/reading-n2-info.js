/* Đọc hiểu N2 — dạng Tìm thông tin: 10 bài TỰ VIẾT MỚI (thông báo, điều lệ,
bảng điều kiện… — không copy đề JLPT thật, không trùng ngân hàng đề thi).
Kiến thức đến N2, KHÔNG furigana. Câu hỏi yêu cầu đối chiếu nhiều điều kiện
trong cùng văn bản. Mỗi bài 2 câu hỏi × 4 đáp án, giải thích tiếng Việt +
từ vựng cuối bài. Nạp lười từ index.html qua ensureReadData(). */
window.READ_N2_INFO = [
{
title: "国際交流イベント参加者募集",
body: "国際交流イベント「世界の料理の日」参加者募集\n日時：三月十六日（日）午前十時から午後三時まで\n会場：市民交流センター 調理室・ホール\n内容：参加者が自国の料理を一品作り、みんなで味わいます。\n参加費：八百円（材料費を含みます）\n対象：高校生以上。調理をする人は十五名まで（先着順）、食べるだけの参加は三十名まで。\n申し込み：三月八日までに、センター窓口またはホームページから。電話での申し込みはできません。\n注意：アレルギーのある方は、申し込みの際に必ずお知らせください。作る料理の材料リストを三月十日までに提出してください。",
qs: [
{
q: "このイベントについて、正しいものはどれか。",
opts: ["電話で申し込むことができる", "調理をする人は十五名までで、先着順である", "参加費に材料費は含まれていない", "中学生も参加できる"],
ans: 1,
exp: "Đáp án đúng là 2: mục 対象 ghi người nấu ăn tối đa 15 người, theo thứ tự đăng ký trước （先着順）. Đáp án 1 sai vì「電話での申し込みはできません」— chỉ đăng ký tại quầy hoặc qua trang web. Đáp án 3 sai vì phí 800 yên đã gồm tiền nguyên liệu. Đáp án 4 sai vì đối tượng từ học sinh cấp ba trở lên."
},
{
q: "料理を作る参加者が、三月十日までにしなければならないことは何か。",
opts: ["参加費を払うこと", "作る料理の材料リストを提出すること", "アレルギーを調べること", "調理室を予約すること"],
ans: 1,
exp: "Đáp án đúng là 2: mục 注意 yêu cầu「作る料理の材料リストを三月十日までに提出してください」. Đáp án 3 liên quan đến người bị dị ứng phải báo khi đăng ký, không phải việc của người nấu trước ngày 10. Đáp án 1 và 4 không có hạn chót như vậy trong bài."
}
],
vocab: [
{ w: "調理室", r: "ちょうりしつ", m: "phòng bếp, phòng thực hành nấu ăn"},
{ w: "先着順", r: "せんちゃくじゅん", m: "theo thứ tự đến trước"},
{ w: "味わいます", r: "あじわいます", m: "thưởng thức, nếm"},
{ w: "提出", r: "ていしゅつ", m: "nộp, trình nộp"},
{ w: "際", r: "さい", m: "khi, vào dịp, lúc （申込の際）"}
]
},
{
title: "市民講座「デジタル写真教室」",
body: "市民講座「デジタル写真教室」受講者募集\n期間：四月から六月までの毎週木曜日（全十二回）午後二時から四時まで\n会場：市民文化センター 三階 実習室\n講師：写真家 山本健氏\n対象：市内在住・在勤の十八歳以上の方\n定員：二十名（申し込み多数の場合は抽選）\n受講料：全回で一万二千円（初回に一括でお支払いください）\n持ち物：デジタルカメラ（スマートフォンでの参加はできません）\n申し込み：三月一日から十五日まで、文化センター窓口または往復はがきで。\n注意：一度納入された受講料は、原則として返金できません。",
qs: [
{
q: "この講座について、正しいものはどれか。",
opts: ["受講料は毎回払う", "スマートフォンでも参加できる", "申し込みが多い場合は抽選になる", "市外の人は申し込めないわけではない"],
ans: 2,
exp: "Đáp án đúng là 3: mục 定員 ghi「申し込み多数の場合は抽選」— đông người đăng ký thì bốc thăm. Đáp án 1 sai vì học phí nộp một lần toàn khóa ngay buổi đầu. Đáp án 2 sai vì bài ghi rõ không tham gia bằng điện thoại thông minh, phải mang máy ảnh số. Đáp án 4 sai vì đối tượng giới hạn ở người sống hoặc làm việc trong thành phố."
},
{
q: "申し込み方法として、正しくないものはどれか。",
opts: ["文化センターの窓口で申し込む", "往復はがきで申し込む", "電話で申し込む", "三月十五日までに申し込む"],
ans: 2,
exp: "Đáp án đúng là 3 (電話で申し込む): bài chỉ chấp nhận đăng ký tại quầy trung tâm văn hóa hoặc bằng bưu thiếp khứ hồi （往復はがき）, trong thời hạn 1-15/3. Đáp án 1, 2, 4 đều khớp đúng với những gì bài quy định."
}
],
vocab: [
{ w: "実習室", r: "じっしゅうしつ", m: "phòng thực hành"},
{ w: "在勤", r: "ざいきん", m: "đang làm việc (tại địa phương đó)"},
{ w: "抽選", r: "ちゅうせん", m: "bốc thăm, rút thăm"},
{ w: "一括", r: "いっかつ", m: "gộp một lần (thanh toán)"},
{ w: "納入", r: "のうにゅう", m: "nộp tiền, đóng (phí)"},
{ w: "往復はがき", r: "おうふくはがき", m: "bưu thiếp khứ hồi"}
]
},
{
title: "コワーキングスペース利用案内",
body: "コワーキングスペース「ワークベース新宿」利用案内\n営業時間：平日 午前八時から午後十時／土日・祝日 午前十時から午後八時\n一時間五百円、一日最大千五百円\n固定席 二万八千円／自由席 一万五千円\n・月額プランの方は、会議室を月に十時間まで無料で利用できます。\n・ドロップインの方の会議室利用は一時間千円です。\n・初めて利用する方は、身分証明書をお持ちください。会員登録に十分ほどかかります。\n・館内での通話は、指定の通話ブースでお願いします。\n・荷物のお預かりはしておりません。ロッカー（月額千円）をご利用ください。",
qs: [
{
q: "月額プラン（自由席）の人が会議室を月に八時間使った場合、会議室の料金はいくらか。",
opts: ["八千円", "無料", "千円", "計算できない"],
ans: 1,
exp: "Đáp án đúng là 2 (無料）: người dùng gói tháng được dùng phòng họp miễn phí tối đa 10 giờ mỗi tháng, dùng 8 giờ vẫn trong hạn mức nên không mất tiền. Mức 1.000 yên/giờ (đáp án 3) chỉ áp dụng cho khách dùng tạm thời (drop-in). Đáp án 1 và 4 không phù hợp với quy định trong bài."
},
{
q: "この施設について、正しいものはどれか。",
opts: ["日曜日は平日より早く開く", "荷物を無料で預かってくれる", "初めての人は身分証明書が必要で、登録に十分ほどかかる", "館内のどこでも通話できる"],
ans: 2,
exp: "Đáp án đúng là 3: bài ghi「初めて利用する方は、身分証明書をお持ちください。会員登録に十分ほどかかります」. Đáp án 1 ngược với giờ mở cửa (cuối tuần/ngày lễ mở muộn hơn, từ 10 giờ). Đáp án 2 sai vì cơ sở không nhận giữ hành lý — phải dùng tủ khóa thuê theo tháng. Đáp án 4 sai vì phải gọi điện trong buồng điện thoại được chỉ định."
}
],
vocab: [
{ w: "固定席", r: "こていせき", m: "ghế/chỗ ngồi cố định (thuê riêng)"},
{ w: "身分証明書", r: "みぶんしょうめいしょ", m: "giấy tờ tùy thân chứng minh nhân thân"},
{ w: "預かります", r: "あずかります", m: "nhận giữ hộ"},
{ w: "指定", r: "してい", m: "chỉ định, quy định sẵn"},
{ w: "最大", r: "さいだい", m: "tối đa"}
]
},
{
title: "美術館 特別展のご案内",
body: "市立美術館 特別展「光と影の画家たち」\n会期：五月三日（土）から七月十三日（日）まで\n休館日：月曜日（ただし五月五日は開館し、五月七日が休館となります）\n開館時間：午前九時半から午後五時まで（入館は午後四時半まで）。金曜日は午後八時まで（入館は午後七時半まで）。\n観覧料：一般 千五百円／大学生・高校生 千円／中学生以下 無料\n・前売券は四月二十日まで、一般 千三百円で販売します。\n・障害者手帳をお持ちの方は、本人のみ無料です。\n・会期中の土曜日 十四時から、学芸員による解説ツアー（無料・予約不要）があります。",
qs: [
{
q: "この特別展が見られない日はどれか。",
opts: ["五月五日（月）", "五月七日（水）", "七月十三日（日）", "金曜日の夜"],
ans: 1,
exp: "Đáp án đúng là 2 (五月七日）: ngày nghỉ thường là thứ Hai, nhưng riêng 5/5 (thứ Hai, ngày lễ) vẫn mở cửa và ngày nghỉ được dời sang 7/5. Đáp án 1 sai vì ngày 5/5 mở cửa đặc biệt. Đáp án 3 là ngày cuối triển lãm, vẫn xem được. Đáp án 4 sai vì thứ Sáu mở đến 20 giờ."
},
{
q: "大学生が一番安く観覧する方法はどれか。",
opts: ["前売券を買う", "金曜日の夜に行く", "解説ツアーに参加する", "当日券の学生料金 千円で観る"],
ans: 3,
exp: "Đáp án đúng là 4: giá vé sinh viên/học sinh cấp ba là 1.000 yên. Vé bán trước giá 1.300 yên chỉ dành cho hạng 一般 (người thường, 1.500 yên) — sinh viên không có vé bán trước nên cách rẻ nhất vẫn là vé sinh viên 1.000 yên. Tour thuyết minh miễn phí nhưng là hoạt động kèm theo, không làm giảm giá vé vào cửa cho sinh viên. Đáp án 2 không liên quan đến giá."
}
],
vocab: [
{ w: "会期", r: "かいき", m: "thời gian diễn ra (triển lãm, sự kiện)"},
{ w: "観覧料", r: "かんらんりょう", m: "phí tham quan, vé vào xem"},
{ w: "前売券", r: "まえうりけん", m: "vé bán trước"},
{ w: "障害者手帳", r: "しょうがいしゃてちょう", m: "sổ tay người khuyết tật"},
{ w: "学芸員", r: "がくげいいん", m: "nhân viên chuyên môn (bảo tàng), người phụ trách trưng bày"}
]
},
{
title: "ペットホテルのご案内",
body: "ペットホテル「わんにゃん」ご利用案内\n料金（一泊）：犬 小型 四千五百円／中型 五千五百円／大型 七千円、猫 四千円\n・チェックイン 午前十時から午後六時まで、チェックアウト 正午まで。チェックアウトが午後三時を過ぎる場合は、追加で半日分（二千円）がかかります。\n・初めてご利用の場合は、一年以内のワクチン接種証明書が必要です。\n・食事は普段のフードをお持ちください。こちらで用意する場合は一食三百円です。\n・お預かりできるのは、生後六か月以上の犬と猫です。病気の治療中の動物はお預かりできません。",
qs: [
{
q: "中型犬を一泊預け、午後四時に迎えに行く場合、合計はいくらか。",
opts: ["五千五百円", "七千五百円", "四千五百円", "九千円"],
ans: 1,
exp: "Đáp án đúng là 2 （七千五百円）: giá một đêm cho chó cỡ trung là 5.500 yên; trả phòng sau 15 giờ bị tính thêm nửa ngày 2.000 yên, mà 16 giờ đã quá 15 giờ nên tổng là 7.500 yên. Đáp án 1 thiếu khoản phụ phí giờ. Đáp án 3 là giá chó nhỏ. Đáp án 4 không có phép tính nào trong bài cho ra."
},
{
q: "このホテルに預けられないのはどれか。",
opts: ["生後八か月の猫", "ワクチン証明書を持ってきた犬", "病気の治療中の犬", "初めて利用する人の猫"],
ans: 2,
exp: "Đáp án đúng là 3: bài ghi rõ「病気の治療中の動物はお預かりできません」. Đáp án 1 (mèo 8 tháng) đạt điều kiện từ 6 tháng trở lên. Đáp án 2 có đủ giấy chứng nhận tiêm phòng. Đáp án 4 chỉ cần mang chứng nhận nếu là lần đầu, không bị cấm."
}
],
vocab: [
{ w: "追加", r: "ついか", m: "bổ sung, thêm vào"},
{ w: "接種", r: "せっしゅ", m: "tiêm chủng, chích ngừa"},
{ w: "証明書", r: "しょうめいしょ", m: "giấy chứng nhận"},
{ w: "生後", r: "せいご", m: "sau khi sinh (〜か月: … tháng tuổi)"},
{ w: "治療中", r: "ちりょうちゅう", m: "đang trong quá trình điều trị"}
]
},
  {
    title: "カーシェアリング利用規約（抜粋）",
    body: "カーシェアリング「タウンモビリティ」利用規約（抜粋）\n・利用できるのは、会員登録をした本人だけです。会員以外の人に運転させることはできません。\n・予約の変更・キャンセルは、利用開始時刻の一時間前まで無料です。それを過ぎると、利用料金の半額がキャンセル料としてかかります。\n・返却が遅れる場合は、必ず事前に連絡してください。連絡なしに三十分以上遅れた場合は、通常料金に加えて違約金三千円をお支払いいただきます。\n・車内に忘れ物をしても、当社では責任を負いません。返却前に必ず確認してください。\n・ガソリンは当社が負担します。給油が必要な場合は、車内のカードで入れてください。",
    qs: [
      {
        q: "予約をキャンセルしたい場合について、正しいものはどれか。",
        opts: ["いつでも無料でキャンセルできる", "開始の一時間前までなら無料、それを過ぎると料金の半額がかかる", "キャンセルは一切できない", "前日までなら無料である"],
        ans: 1,
        exp: "Đáp án đúng là 2: quy định ghi thay đổi/hủy trước giờ bắt đầu một tiếng thì miễn phí, quá thời điểm đó thì mất「利用料金の半額」làm phí hủy. Đáp án 1 và 3 cực đoan sai cả hai phía. Đáp án 4 (miễn phí đến hôm trước) không phải mốc bài quy định."
      },
      {
        q: "返却が連絡なしに四十分遅れた場合、どうなるか。",
        opts: ["通常料金だけ払えばよい", "通常料金に加えて違約金三千円がかかる", "会員資格が取り消される", "次回から利用できない"],
        ans: 1,
        exp: "Đáp án đúng là 2: chậm quá 30 phút mà không báo trước thì「通常料金に加えて違約金三千円」— trả thêm 3.000 yên tiền phạt ngoài cước thường; 40 phút đã vượt ngưỡng 30 phút. Đáp án 1 bỏ mất tiền phạt. Đáp án 3 và 4 (hủy tư cách hội viên, cấm dùng lần sau) không được quy định trong đoạn trích."
      }
    ],
    vocab: [
      { w: "規約", r: "きやく", m: "điều lệ, quy định sử dụng" },
      { w: "抜粋", r: "ばっすい", m: "trích đoạn, phần trích" },
      { w: "違約金", r: "いやくきん", m: "tiền phạt vi phạm hợp đồng" },
      { w: "負います", r: "おいます", m: "gánh chịu, chịu (trách nhiệm, thương tích)" },
      { w: "給油", r: "きゅうゆ", m: "đổ xăng, tiếp nhiên liệu" }
    ]
  },
  {
    title: "資格講座の受講案内",
    body: "ビジネス資格講座「簿記三級 対策コース」受講案内\n開講日：五月十日（土）から七月五日（土）まで、毎週土曜日 全八回、午前十時から正午まで\n会場：中央文化会館 二階 講義室\n受講料：一万六千円（テキスト代を含みます）\n定員：三十名（先着順。定員になり次第、締め切ります）\n申し込み方法：ホームページのフォームから。電話、窓口での申し込みは受け付けません。\n・欠席した回の録画を、翌週末までオンラインで見ることができます。\n・試験に合格した方には、次級の講座が二割引になる特典があります。\n・受講料の分割払いはできません。また、開講日以降のキャンセルは返金できません。",
    qs: [
      {
        q: "この講座の申し込みについて、正しいものはどれか。",
        opts: ["窓口で直接申し込める", "先着順で、定員になり次第締め切られる", "申し込みは電話が一番早い", "定員はない"],
        ans: 1,
        exp: "Đáp án đúng là 2: bài ghi sĩ số 30 người「先着順。定員になり次第、締め切ります」và chỉ đăng ký qua biểu mẫu trên trang web. Đáp án 1 và 3 bị loại rõ ràng vì「電話、窓口での申し込みは受け付けません」. Đáp án 4 sai vì có 定員 30名."
      },
      {
        q: "受講料について、正しいものはどれか。",
        opts: ["テキスト代は別に必要である", "分割払いができる", "開講日以降にキャンセルしても返金される", "テキスト代を含んで一万六千円である"],
        ans: 3,
        exp: "Đáp án đúng là 4: bài ghi học phí 16.000 yên「テキスト代を含みます」— đã gồm tiền giáo trình. Đáp án 1 ngược với điều này. Đáp án 2 sai vì「分割払いはできません」. Đáp án 3 sai vì sau ngày khai giảng thì hủy không được hoàn tiền."
      }
    ],
    vocab: [
      { w: "簿記", r: "ぼき", m: "kế toán sổ sách, ghi sổ kế toán" },
      { w: "講義室", r: "こうぎしつ", m: "phòng giảng dạy, phòng học lý thuyết" },
      { w: "次第", r: "しだい", m: "ngay khi, tùy theo （定員になり次第）" },
      { w: "欠席", r: "けっせき", m: "vắng mặt, nghỉ (buổi học)" },
      { w: "特典", r: "とくてん", m: "ưu đãi đặc biệt, đặc quyền" },
      { w: "分割払い", r: "ぶんかつばらい", m: "trả góp, trả theo đợt" }
    ]
  },
  {
    title: "市営住宅 入居者募集",
    body: "市営住宅 入居者募集のお知らせ\n募集住宅：緑町住宅 三階 三DK 空き 一戸\n家賃：月額 四万二千円（収入によって変わります）\n申し込み資格：\n・市内に一年以上住んでいるか、市内の会社に勤務している方\n・同居する家族がいる方（単身の方は、六十歳以上か、障害のある方に限ります）\n・世帯の月収が二十万円以下の方\n・家賃の滞納がない方\n申し込み：十一月一日から十五日まで、市役所 住宅課で配布する申込書に記入し、必要書類と一緒に提出してください。郵送では受け付けません。\n入居者の決定：書類審査の後、公開抽選で決めます。入居は来年一月からの予定です。",
    qs: [
      {
        q: "申し込み資格がないのは、どのような人か。",
        opts: ["市内に二年住んでいる家族連れ", "市内の会社に勤める、月収十八万円の世帯", "市内に住む五十五歳の単身の方", "家賃の滞納がない、市内在住の家族"],
        ans: 2,
        exp: "Đáp án đúng là 3: đơn thân chỉ được đăng ký nếu「六十歳以上か、障害のある方」— người độc thân 55 tuổi không thuộc hai trường hợp này nên không đủ điều kiện. Đáp án 1, 2, 4 đều thỏa mãn các điều kiện: cư trú trong thành phố trên một năm, thu nhập hộ gia đình không quá 200.000 yên/tháng, không nợ tiền nhà."
      },
      {
        q: "申し込みの方法について、正しいものはどれか。",
        opts: ["申込書を郵送する", "市役所で申込書をもらい、必要書類と一緒に提出する", "ホームページから申し込む", "電話で予約する"],
        ans: 1,
        exp: "Đáp án đúng là 2: bài ghi nhận mẫu đơn tại Phòng Nhà ở của tòa thị chính, điền và nộp cùng hồ sơ cần thiết trong thời gian 1-15/11, và「郵送では受け付けません」. Đáp án 1 bị loại trực tiếp bởi câu này. Đáp án 3 và 4 không xuất hiện trong bài."
      }
    ],
    vocab: [
      { w: "市営住宅", r: "しえいじゅうたく", m: "nhà ở do thành phố quản lý (cho thuê)" },
      { w: "同居", r: "どうきょ", m: "sống chung, ở cùng" },
      { w: "世帯", r: "せたい", m: "hộ gia đình" },
      { w: "滞納", r: "たいのう", m: "nợ đọng, chậm nộp (tiền)" },
      { w: "配布", r: "はいふ", m: "phát, phân phát" },
      { w: "審査", r: "しんさ", m: "thẩm định, xét duyệt" }
    ]
  },
  {
    title: "フリーマーケット出店者募集",
    body: "春のフリーマーケット 出店者の募集\n開催日：四月二十日（日）午前九時から午後三時まで（雨天の場合は二十七日に延期）\n会場：中央公園 広場\n出店料：一区画（三メートル×三メートル）二千円\n募集数：八十区画（申し込み順ではありません。応募多数の場合は抽選です）\n申し込み期間：三月一日から十日まで、市役所のホームページから。結果は三月二十日までにメールでお知らせします。\n注意：\n・食品と生き物の販売はできません。\n・電気は使用できません。\n・出店料は、当日、会場の受付でお支払いください。事前の振り込みは不要です。",
    qs: [
      {
        q: "出店の申し込みについて、正しいものはどれか。",
        opts: ["申し込み順に決まる", "応募多数の場合は抽選で決まる", "市役所の窓口で申し込む", "出店料を事前に振り込む"],
        ans: 1,
        exp: "Đáp án đúng là 2: thông báo ghi rõ「申し込み順ではありません。応募多数の場合は抽選です」. Đáp án 1 là điều văn bản phủ định ngay từ đầu. Đáp án 3 sai vì đăng ký qua trang web của tòa thị chính. Đáp án 4 sai vì phí gian hàng nộp tại quầy vào ngày tổ chức, không cần chuyển khoản trước."
      },
      {
        q: "このマーケットで売ることができないものはどれか。",
        opts: ["手作りの雑貨", "古着", "自家製のクッキー", "子どものおもちゃ"],
        ans: 2,
        exp: "Đáp án đúng là 3 (自家製のクッキー): mục 注意 cấm「食品と生き物の販売」— bánh tự làm là thực phẩm nên không được bán. Đáp án 1 (đồ thủ công), 2 (quần áo cũ), 4 (đồ chơi trẻ em) là những mặt hàng điển hình của chợ trời và không bị cấm trong bài."
      }
    ],
    vocab: [
      { w: "出店", r: "しゅってん", m: "mở gian hàng, bày bán (tại sự kiện)" },
      { w: "雨天", r: "うてん", m: "trời mưa (khi nói về thời tiết sự kiện)" },
      { w: "延期", r: "えんき", m: "hoãn lại, dời lịch" },
      { w: "区画", r: "くかく", m: "ô, khoảnh, khu vực được phân chia" },
      { w: "振り込み", r: "ふりこみ", m: "chuyển khoản ngân hàng" },
      { w: "自家製", r: "じかせい", m: "tự làm tại nhà" }
    ]
  },
  {
    title: "駐車場 月極契約のご案内",
    body: "駅前パーキング 月極契約のご案内\n月額料金：普通車 一万八千円／軽自動車 一万三千円\n空き状況：現在、普通車用 三台、軽自動車用 一台\n契約期間：最短三か月から。解約は一か月前までに書面でお知らせください。\n申し込みに必要なもの：運転免許証、車検証のコピー、認印\n・契約開始日は毎月一日か十六日です。月の途中からの契約は、日割りで計算します。\n・駐車場内での洗車、修理は禁止です。\n・料金の支払いは、毎月二十七日に口座から自動で引き落とされます。残高不足で引き落としができなかった場合は、翌月分と合わせてお支払いいただきます。",
    qs: [
      {
        q: "解約したい場合、どうしなければならないか。",
        opts: ["電話で連絡すればよい", "一か月前までに書面で知らせる", "いつでも自由にやめられる", "翌月の二十七日に知らせる"],
        ans: 1,
        exp: "Đáp án đúng là 2: điều khoản ghi「解約は一か月前までに書面でお知らせください」— phải báo hủy bằng văn bản trước ít nhất một tháng. Đáp án 1 (chỉ gọi điện) không đúng hình thức yêu cầu. Đáp án 3 sai vì có hạn báo trước. Đáp án 4 lấy mốc 27 là ngày trừ tiền tự động, không phải hạn hủy hợp đồng."
      },
      {
        q: "軽自動車の契約を十六日から始めたい場合、正しいものはどれか。",
        opts: ["契約開始日は一日だけである", "十六日からでも始められ、その月は日割り計算になる", "最初の月は無料である", "洗車は許可されている"],
        ans: 1,
        exp: "Đáp án đúng là 2: bài ghi ngày bắt đầu hợp đồng là ngày 1 hoặc 16 hằng tháng, và nếu bắt đầu giữa tháng thì「日割りで計算します」— tính tiền theo ngày. Đáp án 1 sai vì có cả mốc ngày 16. Đáp án 3 không được nhắc đến. Đáp án 4 sai vì rửa xe và sửa xe trong bãi bị cấm."
      }
    ],
    vocab: [
      { w: "月極", r: "つきぎめ", m: "theo tháng, hợp đồng hằng tháng" },
      { w: "車検証", r: "しゃけんしょう", m: "giấy chứng nhận kiểm định xe (đăng kiểm)" },
      { w: "認印", r: "にんいん", m: "con dấu cá nhân (thường dùng)" },
      { w: "日割り", r: "ひわり", m: "tính theo ngày (chia phí tháng theo ngày)" },
      { w: "引き落とし", r: "ひきおとし", m: "trừ tiền tự động (từ tài khoản)" },
      { w: "残高不足", r: "ざんだかぶそく", m: "số dư không đủ" }
    ]
  }
];
