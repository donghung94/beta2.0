/* Đọc hiểu N1 — dạng Tìm thông tin: 10 bài TỰ VIẾT MỚI (quy chế, hướng dẫn
   chính thức, điều khoản… — không copy văn bản thật, không trùng ngân hàng đề
   thi của app). Kiến thức đến N1, KHÔNG furigana. Câu hỏi yêu cầu đối chiếu
   nhiều điều kiện, ngoại lệ trong cùng văn bản. Mỗi bài 2 câu hỏi × 4 đáp án,
   giải thích tiếng Việt + từ vựng cuối bài. Nạp lười qua ensureReadData(). */
window.READ_N1_INFO = [
  {
    title: "研究助成金 募集要項（抜粋）",
    body: "令和八年度 若手研究者助成金 募集要項（抜粋）\n応募資格：国内の大学・研究機関に所属する、四十歳未満の研究者（申請時点で博士の学位を取得していること）。ただし、過去に本助成金を受けたことがある者は応募できない。\n助成金額：一件につき上限二百万円。助成期間は採択から二年間とする。\n申請方法：所定の申請書に研究計画書（A4判五枚以内）を添えて、六月三十日（消印有効）までに郵送すること。メールによる申請は受け付けない。\n選考：書類選考の後、対象者にのみ面接の日程を連絡する。選考結果は九月末までに通知する。\nその他：他の助成金との重複受給は認めない。研究成果は、期間終了後一年以内に報告書として提出すること。",
    qs: [
      {
        q: "応募できるのはどのような研究者か。",
        opts: ["年齢制限はない", "四十歳未満で博士の学位を持ち、本助成金を過去に受けていない者", "博士の学位がなくてもよい", "過去に受給した者も再度応募できる"],
        ans: 1,
        exp: "Đáp án đúng là 2: điều kiện gồm ba yếu tố —「四十歳未満」+「博士の学位を取得していること」+「過去に本助成金を受けたことがある者は応募できない」. Đáp án 1 bỏ mất giới hạn tuổi. Đáp án 3 ngược điều kiện học vị. Đáp án 4 ngược điều kiện về tiền lệ nhận trợ cấp."
      },
      {
        q: "申請について正しいものはどれか。",
        opts: ["メールで申請できる", "六月三十日必着でなければならない", "郵送で、六月三十日の消印まで有効である", "研究計画書の枚数に制限はない"],
        ans: 2,
        exp: "Đáp án đúng là 3: bản hướng dẫn ghi nộp qua đường bưu điện, hạn「六月三十日（消印有効）」— tính theo dấu bưu điện đến 30/6, không phải bắt buộc đến nơi vào ngày đó. Đáp án 1 sai vì「メールによる申請は受け付けない」. Đáp án 2 nhầm「消印有効」thành「必着」. Đáp án 4 sai vì kế hoạch nghiên cứu giới hạn trong 5 trang A4."
      }
    ],
    vocab: [
      { w: "助成金", r: "じょせいきん", m: "tiền trợ cấp, tài trợ (nghiên cứu)" },
      { w: "募集要項", r: "ぼしゅうようこう", m: "bản hướng dẫn/quy định tuyển (hồ sơ)" },
      { w: "採択", r: "さいたく", m: "chấp thuận, tuyển chọn (đề án)" },
      { w: "消印有効", r: "けしいんゆうこう", m: "hợp lệ theo dấu bưu điện (trong hạn tính theo ngày đóng dấu)" },
      { w: "重複受給", r: "ちょうふくじゅきゅう", m: "nhận trùng (hai khoản trợ cấp)" }
    ]
  },
  {
    title: "学会 年次大会のご案内",
    body: "日本言語教育学会 第三十回 年次大会のご案内\n会期：九月十二日（土）・十三日（日）\n会場：東都大学 文学部棟（オンライン配信あり）\n参加費：正会員 五千円／学生会員 二千円／非会員 八千円（いずれも懇親会費を含まない）\n懇親会：十二日夕方、会費 五千円（事前申込制・定員百名）\n申込方法：学会ホームページから、八月二十日までに申し込むこと。当日申込は、非会員の参加費が九千円となる。\n発表者への注意：発表希望者は、六月末日までに要旨（八百字以内）を提出すること。なお、一人が代表として発表できるのは一題までとする。共同発表の場合は、代表者以外は共同研究者として記載すること。",
    qs: [
      {
        q: "非会員が大会と懇親会の両方に参加する場合、事前に申し込むと合計はいくらか。",
        opts: ["一万三千円", "一万四千円", "八千円", "一万六千円"],
        ans: 0,
        exp: "Đáp án đúng là 1 （一万三千円）: phí tham dự của người không phải thành viên là 8.000 yên (không gồm tiệc giao lưu), phí tiệc là 5.000 yên, cộng lại 13.000 yên. Đáp án 2 (14.000 yên) là khi người ngoài đăng ký tại chỗ (9.000 yên) cộng bữa tiệc. Đáp án 3 chỉ là phí đại hội. Đáp án 4 không có phép tính nào trong bài cho ra."
      },
      {
        q: "発表希望者について正しいものはどれか。",
        opts: ["要旨は六月末日までに、八百字以内で提出する", "一人が代表として複数題発表できる", "共同研究者は要旨に記載しなくてよい", "発表者は参加費が免除される"],
        ans: 0,
        exp: "Đáp án đúng là 1: ghi chú cho người thuyết trình yêu cầu nộp tóm tắt「六月末日までに要旨（八百字以内）」. Đáp án 2 sai vì mỗi người chỉ được đại diện trình bày một đề tài. Đáp án 3 sai vì người cộng tác phải được ghi là共同研究者. Đáp án 4 không được nêu trong văn bản."
      }
    ],
    vocab: [
      { w: "年次大会", r: "ねんじたいかい", m: "đại hội thường niên" },
      { w: "懇親会", r: "こんしんかい", m: "tiệc giao lưu, buổi gặp gỡ thân mật" },
      { w: "要旨", r: "ようし", m: "bản tóm tắt (nội dung chính)" },
      { w: "字以内", r: "じいない", m: "trong vòng … chữ （八百字以内）" },
      { w: "記載", r: "きさい", m: "ghi chép, ghi vào (văn bản)" }
    ]
  },
  {
    title: "図書館 資料複写サービス規程",
    body: "市立中央図書館 資料複写サービス規程（抜粋）\n第一条 本館の所蔵資料は、著作権法の範囲内で、利用者本人の調査研究の目的に限り、一部分を複写することができる。\n第二条 複写できる範囲は、一つの資料につき、その半分を超えないものとする。ただし、定期刊行物に掲載された論文については、発行後相当期間が経過している場合に限り、その全部を複写できる。\n第三条 次の資料は複写できない。貴重書、劣化が著しい資料、複写により損傷のおそれがある資料。\n第四条 複写料金は、白黒一枚十円、カラー一枚五十円とする。複写は利用者本人が行うものとし、職員は機器の操作の補助のみを行う。\n第五条 複写した資料を、営利の目的で配布し、又はインターネット上に公開してはならない。",
    qs: [
      {
        q: "論文の全部を複写できるのは、どのような場合か。",
        opts: ["調査研究の目的であれば、いつでもできる", "定期刊行物に掲載された論文で、発行後相当期間が経過している場合に限る", "職員に依頼すればできる", "カラー料金を払えばできる"],
        ans: 1,
        exp: "Đáp án đúng là 2: Điều 2 quy định nguyên tắc chỉ sao chép không quá một nửa tài liệu, ngoại lệ là bài luận đăng trên ấn phẩm định kỳ và「発行後相当期間が経過している場合に限り」mới được sao toàn bộ. Đáp án 1 bỏ mất điều kiện ngoại lệ này. Đáp án 3 và 4 không liên quan đến quy định về phạm vi."
      },
      {
        q: "この規程について、正しくないものはどれか。",
        opts: ["複写は利用者本人が行う", "貴重書は複写できない", "複写した資料は営利目的で配布できる", "職員の仕事は機器操作の補助のみである"],
        ans: 2,
        exp: "Đáp án đúng là 3: Điều 5 cấm rõ ràng việc phát hành vì mục đích thương mại hoặc đăng công khai lên internet các tài liệu đã sao chép. Đáp án 1, 2, 4 đều là nội dung đúng của quy chế: tự người dùng sao chép, sách quý không được sao, nhân viên chỉ hỗ trợ vận hành máy."
      }
    ],
    vocab: [
      { w: "規程", r: "きてい", m: "quy định, điều lệ (văn bản chính thức)" },
      { w: "所蔵", r: "しょぞう", m: "lưu giữ, sở hữu (tài liệu, tác phẩm)" },
      { w: "複写", r: "ふくしゃ", m: "sao chụp, photocopy" },
      { w: "定期刊行物", r: "ていきかんこうぶつ", m: "ấn phẩm định kỳ (tạp chí, báo)" },
      { w: "劣化", r: "れっか", m: "xuống cấp, hư hỏng dần (theo thời gian)" }
    ]
  },
  {
    title: "住宅ローン契約の重要事項（抜粋）",
    body: "住宅ローン契約に関する重要事項説明（抜粋）\n・本ローンの金利は変動金利型です。金利は年二回見直され、返済額は五年ごとに見直されます。ただし、返済額の増加は、前回返済額の一・二五倍を上限とします。\n・繰り上げ返済を行う場合、窓口での手続きは一回につき手数料五千五百円がかかります。インターネット経由の手続きは、手数料はかかりません。ただし、一回の繰り上げ返済は十万円以上、一円単位とします。\n・団体信用生命保険への加入が契約の条件となります。保険料は金融機関が負担します。\n・返済が三か月以上滞った場合、金融機関は期限の利益を喪失させることができます。その場合、残額を一括で返済していただく場合があります。",
    qs: [
      {
        q: "繰り上げ返済について正しいものはどれか。",
        opts: ["窓口でもインターネットでも手数料は無料である", "インターネット経由なら手数料はかからず、十万円以上から可能である", "金額に下限はない", "何回でも窓口手数料が免除される"],
        ans: 1,
        exp: "Đáp án đúng là 2: văn bản ghi trả nợ trước hạn qua internet thì miễn phí thủ tục, qua quầy tốn 5.500 yên mỗi lần, và mỗi lần trả trước phải từ 100.000 yên trở lên. Đáp án 1 sai ở vế quầy giao dịch. Đáp án 3 ngược với quy định hạ hạn mười vạn yên. Đáp án 4 không được nhắc đến."
      },
      {
        q: "返済が四か月滞った場合、起こりうることは何か。",
        opts: ["金利が自動的に下がる", "金融機関に残額の一括返済を求められる場合がある", "契約が自動で解除されるだけである", "何も起きない"],
        ans: 1,
        exp: "Đáp án đúng là 2: điều khoản cuối nói nếu chậm trả từ ba tháng trở lên, tổ chức tài chính có thể làm mất「期限の利益」(quyền trả dần theo kỳ hạn), và người vay có thể bị yêu cầu trả toàn bộ dư nợ một lần. Bốn tháng đã vượt ngưỡng ba tháng. Đáp án 1, 3, 4 không phải hệ quả được quy định trong văn bản."
      }
    ],
    vocab: [
      { w: "変動金利", r: "へんどうきんり", m: "lãi suất thả nổi/biến động" },
      { w: "繰り上げ返済", r: "くりあげへんさい", m: "trả nợ trước hạn" },
      { w: "団体信用生命保険", r: "だんたいしんようせいめいほけん", m: "bảo hiểm nhân thọ tín dụng nhóm (cho khoản vay mua nhà)" },
      { w: "滞ります", r: "とどこおります", m: "chậm trễ, nợ đọng (thanh toán)" },
      { w: "喪失", r: "そうしつ", m: "mất đi, đánh mất (quyền lợi)" }
    ]
  },
  {
    title: "奨学金 返還規程（抜粋）",
    body: "財団法人 青空育英会 奨学金返還規程（抜粋）\n第一条 本奨学金は貸与型とし、貸与を受けた者は、貸与終了の翌月から起算して六か月経過後、返還を開始しなければならない。\n第二条 返還期間は、貸与総額が百万円以下の場合は十年以内、百万円を超える場合は十五年以内とする。\n第三条 大学院に進学した者は、進学期間中の返還を猶予することができる。希望者は、進学を証明する書類を提出しなければならない。\n第四条 返還が困難な事情が生じた場合は、申請により、一年を限度として返還を猶予することができる。ただし、猶予期間中も利息は発生する。\n第五条 死亡又は重度の障害により返還が不可能となった場合は、残額の全部又は一部の返還を免除することがある。",
    qs: [
      {
        q: "貸与総額が百五十万円だった人の返還期間は、どのように定められているか。",
        opts: ["十年以内", "十五年以内", "二十年以内", "定められていない"],
        ans: 1,
        exp: "Đáp án đúng là 2: Điều 2 quy định tổng tiền vay「百万円を超える場合は十五年以内」— 150 vạn yên vượt 100 vạn yên nên thời hạn trả là trong vòng 15 năm. Đáp án 1 chỉ áp dụng cho tổng vay từ 100 vạn yên trở xuống. Đáp án 3 và 4 không có trong quy định."
      },
      {
        q: "返還の猶予について、正しくないものはどれか。",
        opts: ["進学した場合は進学期間中、猶予が認められることがある", "困難な事情がある場合は一年を限度に猶予できる", "猶予期間中は利息が発生しない", "進学の猶予には証明書類の提出が必要である"],
        ans: 2,
        exp: "Đáp án đúng là 3: Điều 4 ghi rõ「猶予期間中も利息は発生する」— trong thời gian hoãn trả, lãi vẫn phát sinh, trái với khẳng định của đáp án này. Đáp án 1 đúng theo Điều 3 (học lên cao học được hoãn trong thời gian học, cần giấy chứng nhận). Đáp án 2 đúng theo Điều 4 (hoãn tối đa một năm khi có hoàn cảnh khó khăn). Đáp án 4 đúng theo Điều 3."
      }
    ],
    vocab: [
      { w: "貸与", r: "たいよ", m: "cho vay, cấp vay （貸与型: kiểu cho vay)" },
      { w: "起算", r: "きさん", m: "bắt đầu tính (từ một mốc thời gian)" },
      { w: "猶予", r: "ゆうよ", m: "hoãn, gia hạn, châm chước" },
      { w: "免除", r: "めんじょ", m: "miễn (nghĩa vụ, trách nhiệm)" },
      { w: "限度", r: "げんど", m: "giới hạn, mức tối đa cho phép" }
    ]
  },
  {
    title: "大学院 入試説明会の案内",
    body: "東都大学大学院 人文科学研究科 入試説明会のご案内\n日時：十月十八日（土）午後一時から四時まで\n会場：東都大学 本館 大講義室（予約不要・入場無料）\nプログラム： 一時から 研究科の概要説明／二時から 各専攻の教員による個別相談／三時十五分から 在学生との懇談\n個別相談を希望する方は、当日受付で配布する整理券を受け取ること。一人十五分程度、先着順とし、定員に達し次第、受付を終了する。\nなお、説明会に参加できない方のために、概要説明の部分のみ、後日オンラインで配信する。個別相談と懇談の配信は行わない。\n入試日程：出願期間は十一月四日から十一月十四日まで。試験は十二月七日。詳細は募集要項（ホームページに掲載）を確認すること。",
    qs: [
      {
        q: "説明会に参加できない人は、オンラインで何を見ることができるか。",
        opts: ["説明会の全部", "概要説明の部分のみ", "個別相談のみ", "何も見ることができない"],
        ans: 1,
        exp: "Đáp án đúng là 2: thông báo ghi「概要説明の部分のみ、後日オンラインで配信する。個別相談と懇談の配信は行わない」— chỉ phần thuyết minh tổng quan được phát trực tuyến sau đó. Đáp án 1 quá rộng. Đáp án 3 bị loại trực tiếp. Đáp án 4 sai vì có phát phần tổng quan."
      },
      {
        q: "個別相談を受けるには、どうすればよいか。",
        opts: ["事前にホームページで予約する", "当日受付で整理券を受け取る。先着順で、定員に達したら終了する", "研究室に直接電話する", "懇談の後に申し出る"],
        ans: 1,
        exp: "Đáp án đúng là 2: hướng dẫn ghi「当日受付で配布する整理券を受け取ること。一人十五分程度、先着順」— nhận phiếu số tại quầy ngày hôm đó, theo thứ tự đến trước, đủ số lượng thì đóng. Đáp án 1 sai vì buổi giới thiệu nói chung là không cần hẹn trước và phần tư vấn dùng phiếu số. Đáp án 3 và 4 không xuất hiện trong bài."
      }
    ],
    vocab: [
      { w: "研究科", r: "けんきゅうか", m: "khoa nghiên cứu (sau đại học)" },
      { w: "専攻", r: "せんこう", m: "chuyên ngành" },
      { w: "懇談", r: "こんだん", m: "trò chuyện thân mật, trao đổi thân tình" },
      { w: "整理券", r: "せいりけん", m: "phiếu số thứ tự" },
      { w: "出願", r: "しゅつがん", m: "nộp đơn dự thi/ứng tuyển" }
    ]
  },
  {
    title: "コンサートホール 貸館規程（抜粋）",
    body: "市立コンサートホール 貸館規程（抜粋）\n・申し込みの受付は、使用日の一年前から三か月前までとする。市が主催する事業に支障がない範囲で受け付ける。\n・使用料は、大ホール一回（四時間以内）八万円、練習室一時間二千円とする。使用料は使用日の一か月前までに納入すること。\n・取消しの場合、使用日の三か月前までであれば納入済みの使用料の半額を返還し、一か月前までであれば二割を返還する。一か月を切った取消しについては、返還しない。\n・ホール内での飲食は禁止する。ただし、楽屋における出演者及び関係者の飲食はこの限りではない。\n・火気の使用及び危険物の持ち込みは、理由のいかんを問わず認めない。",
    qs: [
      {
        q: "大ホールを予約し、使用料八万円を納入済みで、使用日の二か月前に取り消した場合、返還される金額はいくらか。",
        opts: ["八万円全額", "四万円", "一万六千円", "返還されない"],
        ans: 2,
        exp: "Đáp án đúng là 3 （一万六千円）: hủy trước ngày sử dụng hai tháng thuộc khung「一か月前までであれば二割を返還する」— hoàn lại 20% của 80.000 yên là 16.000 yên. Khung hoàn một nửa (đáp án 2, 40.000 yên) chỉ áp dụng khi hủy từ ba tháng trước trở đi. Đáp án 1 và 4 không khớp điều khoản nào."
      },
      {
        q: "ホール内での飲食について、正しいものはどれか。",
        opts: ["全面的に自由である", "原則禁止だが、楽屋での出演者と関係者の飲食は禁止の対象外である", "楽屋でも一切禁止である", "出演者だけはホール内でも食べてよい"],
        ans: 1,
        exp: "Đáp án đúng là 2: quy định cấm ăn uống trong hội trường nhưng「楽屋における出演者及び関係者の飲食はこの限りではない」— ăn uống của diễn viên và người liên quan trong phòng chờ/hậu trường không thuộc phạm vi cấm. Đáp án 1 và 3 cực đoan sai hai hướng. Đáp án 4 sai vị trí (hội trường vẫn bị cấm với tất cả)."
      }
    ],
    vocab: [
      { w: "貸館", r: "かしだて", m: "cho thuê hội trường/cơ sở" },
      { w: "支障", r: "ししょう", m: "trở ngại, ảnh hưởng xấu" },
      { w: "納入", r: "のうにゅう", m: "nộp, đóng (tiền phí)" },
      { w: "楽屋", r: "がくや", m: "phòng hậu trường, phòng chờ của diễn viên" },
      { w: "火気", r: "かき", m: "lửa, nguồn lửa, vật dễ cháy nổ khi dùng" }
    ]
  },
  {
    title: "国際ボランティア 参加者募集要項",
    body: "海外支援ボランティア 参加者募集要項\n派遣先：東南アジア農村地域（学校建設及び学習支援）\n期間：来年二月一日から三月十五日まで（四十三日間）\n募集人数：十名\n応募資格：満二十歳以上で、心身ともに健康な方。英語での日常会話ができること。海外渡航の経験は問わない。\n費用：参加費十二万円（渡航費、滞在費、食費を含む）。予防接種の費用と海外旅行保険料は参加者負担とする。\n選考：書類選考と面接。面接は十一月中旬、本会事務所にて行う。\n注意：派遣先の事情により、期間や活動内容が変更になる場合がある。また、参加者は帰国後、報告会で活動報告を行うものとする。",
    qs: [
      {
        q: "参加費に含まれていない費用はどれか。",
        opts: ["渡航費", "滞在費と食費", "予防接種の費用と海外旅行保険料", "活動に必要な道具代"],
        ans: 2,
        exp: "Đáp án đúng là 3: mục 費用 ghi phí tham gia 120.000 yên gồm vé đi lại, chi phí lưu trú và ăn uống, nhưng「予防接種の費用と海外旅行保険料は参加者負担」— tiền tiêm phòng và bảo hiểm du lịch do người tham gia tự chịu. Đáp án 1, 2 nằm trong danh sách bao gồm. Đáp án 4 không được nhắc đến trong văn bản."
      },
      {
        q: "応募資格について正しいものはどれか。",
        opts: ["海外渡航の経験が必要である", "二十歳以上、健康で、英語で日常会話ができれば、渡航経験は問われない", "英語ができなくてもよい", "二十歳未満でも保護者の許可があればよい"],
        ans: 1,
        exp: "Đáp án đúng là 2: điều kiện là「満二十歳以上で、心身ともに健康な方。英語での日常会話ができること。海外渡航の経験は問わない」— đủ 20 tuổi, khỏe mạnh, giao tiếp tiếng Anh hằng ngày được, kinh nghiệm ra nước ngoài không bắt buộc. Đáp án 1 ngược với「問わない」. Đáp án 3 và 4 không có trong quy định."
      }
    ],
    vocab: [
      { w: "派遣", r: "はけん", m: "phái cử, cử đi công tác/hoạt động" },
      { w: "渡航", r: "とこう", m: "đi ra nước ngoài (hành trình)" },
      { w: "予防接種", r: "よぼうせっしゅ", m: "tiêm phòng, chích ngừa" },
      { w: "負担", r: "ふたん", m: "gánh chịu (chi phí), phần phải chịu" },
      { w: "心身", r: "しんしん", m: "cả thể chất lẫn tinh thần" }
    ]
  },
  {
    title: "マンション管理規約（抜粋）",
    body: "サンシティ管理規約（抜粋）\n第二十一条（ペットの飼育）専有部分において、犬及び猫に限り、合計二頭まで飼育することができる。ただし、体重二十キログラムを超える犬は飼育できない。飼育する場合は、管理組合に届け出を行い、共用部分では必ずリード等で保持すること。\n第二十五条（専有部分の修繕）居住者が専有部分の修繕を行おうとする場合は、あらかじめ管理組合に工事内容を書面で届け出て、承認を得なければならない。工事は平日の午前九時から午後五時までの間に行うものとし、日曜日及び祝日は行うことができない。\n第三十条（駐車場の使用）駐車場の使用を希望する者は、管理組合に申し込み、抽選により使用者を決定する。使用者は、月額使用料のほか、登録時に保証金として使用料の二か月分を納めるものとする。",
    qs: [
      {
        q: "このマンションで飼うことができるペットの条件はどれか。",
        opts: ["犬と猫なら何頭でもよい", "犬と猫合わせて二頭まで。ただし体重二十キログラムを超える犬は飼えない", "猫だけが飼える", "届け出は不要である"],
        ans: 1,
        exp: "Đáp án đúng là 2: Điều 21 quy định chỉ nuôi chó và mèo, tổng cộng tối đa hai con,「体重二十キログラムを超える犬は飼育できない」, và phải khai báo với ban quản trị trước. Đáp án 1 bỏ mất giới hạn số lượng và cân nặng. Đáp án 3 sai vì chó cũng được phép. Đáp án 4 ngược với yêu cầu届け出."
      },
      {
        q: "自室の修繕工事について正しいものはどれか。",
        opts: ["届け出なく自由に行える", "あらかじめ書面で届け出て承認を得ること。工事は平日の九時から五時までで、日曜・祝日はできない", "土曜日なら夜間も行える", "承認は工事の後で得ればよい"],
        ans: 1,
        exp: "Đáp án đúng là 2: Điều 25 yêu cầu khai báo bằng văn bản trước và được chấp thuận, giờ thi công「平日の午前九時から午後五時まで」, Chủ nhật và ngày lễ không được làm. Đáp án 1 và 4 sai trình tự phê duyệt. Đáp án 3 vô căn cứ vì khung giờ thi công chỉ giới hạn trong ban ngày các ngày thường, hoàn toàn không có chuyện làm ban đêm."
      }
    ],
    vocab: [
      { w: "管理規約", r: "かんりきやく", m: "quy ước/điều lệ quản lý (tòa nhà)" },
      { w: "専有部分", r: "せんゆうぶぶん", m: "phần sở hữu riêng (bên trong căn hộ)" },
      { w: "共用部分", r: "きょうようぶぶん", m: "phần dùng chung (hành lang, sảnh…)" },
      { w: "届け出", r: "とどけで", m: "khai báo, thông báo (cho cơ quan/ban quản lý)" },
      { w: "保証金", r: "ほしょうきん", m: "tiền bảo đảm, tiền đặt cọc bảo chứng" }
    ]
  },
  {
    title: "学会誌 投稿規定（抜粋）",
    body: "日本応用言語学会誌 投稿規定（抜粋）\n・投稿できるのは、本学会の会員に限る。ただし、編集委員会が特に認めた場合は、この限りではない。\n・原稿は未発表のものに限る。他の学会誌等に投稿中の原稿は受け付けない。二重投稿が判明した場合は、その後の投稿を一定期間認めない。\n・原稿の分量は、要旨と図表を含めて、二万字以内とする。原稿は学会所定の書式に従い、ホームページからオンラインで投稿すること。\n・査読は匿名で行う。原稿本文には、著者を特定できる情報を記載しないこと。\n・採択された原稿の著作権は、著者に帰属する。ただし、本学会が電子化して公開することに、著者はあらかじめ同意したものとみなす。",
    qs: [
      {
        q: "投稿について正しくないものはどれか。",
        opts: ["原則として会員だけが投稿できる", "他誌に投稿中の原稿も受け付ける", "分量は要旨と図表を含めて二万字以内である", "査読は匿名で行われる"],
        ans: 1,
        exp: "Đáp án đúng là 2: quy định ghi「他の学会誌等に投稿中の原稿は受け付けない」— bài đang gửi ở tạp chí khác thì không được nhận, và nộp trùng sẽ bị cấm đăng một thời gian. Đáp án 1 đúng với nguyên tắc chỉ hội viên (có ngoại lệ do ban biên tập công nhận). Đáp án 3 và 4 đều đúng theo văn bản."
      },
      {
        q: "採択された原稿の著作権について、正しいものはどれか。",
        opts: ["学会に完全に譲渡される", "著者に帰属するが、学会による電子化と公開には著者があらかじめ同意したものとみなされる", "著者は一切の権利を失う", "著作権は発生しない"],
        ans: 1,
        exp: "Đáp án đúng là 2: quy định ghi「採択された原稿の著作権は、著者に帰属する」nhưng việc học hội số hóa và công khai thì「著者はあらかじめ同意したものとみなす」— tác giả được coi như đã đồng ý từ trước. Đáp án 1 và 3 quá mức, phủ nhận quyền của tác giả. Đáp án 4 vô căn cứ."
      }
    ],
    vocab: [
      { w: "投稿", r: "とうこう", m: "gửi bài (đăng tạp chí)" },
      { w: "未発表", r: "みはっぴょう", m: "chưa công bố, chưa đăng" },
      { w: "査読", r: "さどく", m: "phản biện, thẩm đọc (bài báo khoa học)" },
      { w: "匿名", r: "とくめい", m: "ẩn danh" },
      { w: "帰属", r: "きぞく", m: "thuộc về (quyền lợi, sở hữu)" }
    ]
  }
];
