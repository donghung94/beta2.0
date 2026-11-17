/* Tokutei Gino 2 — Xây dựng. Nguồn: repo donghung94/1 (copy verbatim,
   chỉ bỏ videoUrl chết + sửa 5 tham chiếu ảnh hỏng — xem SPEC.md).
   Nạp lười khi user Premium mở mục Tokutei → Xây dựng. */
window.TOKUTEI_SETS = window.TOKUTEI_SETS || {};

window.TOKUTEI_SETS["g2_1"] = {
  "group": "g2",
  "title": "Thực hành nhóm 2 – (問1〜問30)",
  "questions": [
    {
      "q": "問1　単管足場（たんかんあしば）の特徴（とくちょう）について、正（ただ）しいものを選（えら）べ。",
      "options": [
        "1．ハンマーひとつで組（く）み立（た）てと解体（かいたい）ができる",
        "2．門型（もんがた）の建枠（たてわく）を中心（ちゅうしん）にジャッキ・筋交（すじか）い・鋼製布板（こうせいぬのいた）などの基本部材（きほんぶざい）を組（く）み立（た）てる",
        "3．狭（せま）い場所（ばしょ）でも足場（あしば）を組（く）むことができる",
        "4．マンションなどの骨組（ほねぐ）みを組（く）み立（た）てる"
      ],
      "answer": 2,
      "vi": "Chọn đặc điểm đúng của giàn giáo ống thép 単管足場（たんかんあしば）.",
      "explain": "Giàn giáo ống đơn (単管足場) được lắp ghép từ các ống thép đơn và kẹp nối (クランプ) nên rất linh hoạt về hình dạng và kích thước, có thể dựng được ngay cả ở những nơi chật hẹp hoặc mặt bằng không vuông vắn. Đây chính là đặc điểm đúng cần chọn. Đáp án 1 (chỉ cần một chiếc búa để lắp và tháo) là đặc điểm của giàn giáo nêm くさび緊結式足場. Đáp án 2 (dùng khung cửa 門型建枠 làm trung tâm cùng các bộ phận cơ bản) là đặc điểm của giàn giáo khung 枠組足場.\n\nTừ vựng:\n単管足場（たんかんあしば）: Giàn giáo ống đơn\n特徴（とくちょう）: Đặc điểm\n狭い（せまい）: Chật hẹp\n場所（ばしょ）: Nơi, địa điểm\n組む（くむ）: Lắp dựng\n枠組足場（わくぐみあしば）: Giàn giáo khung\nくさび緊結式足場（くさびきんけつしきあしば）: Giàn giáo nêm",
      "tip": "💡 Mẹo nhớ: Thấy chữ **単** = “đơn, đơn giản, linh hoạt” → dùng chỗ **hẹp**."
    },
    {
      "q": "問2　鉄（てつ）にクロムを含有（がんゆう）（11%以上（いじょう））する合金鋼（ごうきんこう）で、表面（ひょうめん）に薄（うす）い保護（ほご）被膜（ひまく）が形成（けいせい）され、さびにくく、美（うつく）しい状態（じょうたい）を維持（いじ）できる鋼板（こうはん）は何（なに）か。",
      "options": [
        "1．溶融亜鉛（ようゆうあえん）メッキ鋼板（こうはん）",
        "2．塗装（とそう）溶融亜鉛（ようゆうあえん）メッキ鋼板（こうはん）",
        "3．ステンレス鋼板（こうはん）",
        "4．アルミ合金（ごうきん）"
      ],
      "answer": 2,
      "vi": "Loại thép nào chứa ≥11% Crom, chống gỉ và giữ bề mặt đẹp lâu?",
      "explain": "Loại thép được mô tả chính là thép không gỉ (ステンレス鋼板). Đây là thép hợp kim chứa từ 11% Crom (Cr) trở lên; Crom kết hợp với oxy tạo thành một lớp màng bảo vệ (màng thụ động) rất mỏng trên bề mặt, giúp thép khó bị gỉ và giữ được vẻ đẹp lâu dài. Đáp án 1 và 2 là thép mạ kẽm nhúng nóng — chống gỉ nhờ lớp kẽm phủ bên ngoài chứ không phải nhờ Crom trong thành phần thép. Đáp án 4 là hợp kim nhôm, không phải thép.\n\nTừ vựng:\n含有（がんゆう）: Chứa, hàm chứa\n合金鋼（ごうきんこう）: Thép hợp kim\n表面（ひょうめん）: Bề mặt\n保護被膜（ほごひまく）: Lớp màng bảo vệ\nさび: Gỉ sét\n維持（いじ）: Duy trì\n鋼板（こうはん）: Tấm thép\n溶融亜鉛メッキ（ようゆうあえんメッキ）: Mạ kẽm nhúng nóng",
      "tip": "💡 Mẹo nhớ: **Stainess = không stain (không gỉ)** → đẹp bền lâu."
    },
    {
      "q": "問3　鋼製（こうせい）下地（したじ）において、間仕切り（まじきり）壁（かべ）の下地（したじ）として、スタッドを垂直（すいちょく）に立てるためのレールは何（なに）か。【123】",
      "options": [
        "1．つりボルト",
        "2．野縁（のぶち）",
        "3．スタッド",
        "4．ランナー"
      ],
      "answer": 3,
      "vi": "Trong hệ khung kim loại làm vách ngăn, thanh ray để cố định stud thẳng đứng gọi là gì?",
      "explain": "Trong hệ khung thép nhẹ làm vách ngăn, thanh ray nằm ngang gắn ở sàn và trần, dùng để cắm và cố định các thanh đứng スタッド, được gọi là ランナー (runner, lựa chọn 4). スタッド (lựa chọn 3) chính là thanh đứng được ray này giữ. つりボルト là bu lông treo trần, 野縁 là thanh ngang thuộc hệ khung trần — đều không phải thanh ray giữ stud của vách ngăn.\n\nTừ vựng:\n下地（したじ）: Khung nền, lớp nền\n間仕切り壁（まじきりかべ）: Vách ngăn\n垂直（すいちょく）: Thẳng đứng, vuông góc\nスタッド: Thanh đứng (stud)\nランナー: Thanh ray ngang (runner)\n野縁（のぶち）: Thanh đỡ trần",
      "tip": "💡 Mẹo nhớ: **Runner** chạy dưới đất (sàn) & trên trần → stud đứng trên runner."
    },
    {
      "q": "問4　石工事（いしこうじ）について、該当（がいとう）しないものを選（えら）べ。【176】",
      "options": [
        "1．石材（せきざい）の加工（かこう）、石積（いしづみ）による工作物（こうさくぶつ）の築造（ちくぞう）、工作物（こうさくぶつ）に石材（せきざい）の取（と）り付（つ）け工事（こうじ）",
        "2．乾式工法（かんしきこうほう）と湿式工法（しっしきこうほう）がある",
        "3．乾式工法（かんしきこうほう）は、湿式工法（しっしきこうほう）に比べ、施工後（せこうご）に不具合（ふぐあい）が発生（はっせい）しやすい",
        "4．粉じん（ふんじん）の飛散対策（ひさんたいさく）として、防護（ぼうご）メガネやマスクを着用（ちゃくよう）する"
      ],
      "answer": 2,
      "vi": "Về công tác đá, hãy chọn đáp án **không đúng**.",
      "explain": "Đáp án cần chọn là phát biểu sai ở lựa chọn 3. Công pháp khô (乾式工法) dùng liên kết cơ khí (bu lông, khung thép) để gắn đá nên thi công sạch, ít phụ thuộc thời tiết và ít phát sinh sự cố sau thi công hơn công pháp ướt (湿式工法) dùng vữa. Phát biểu 'công pháp khô dễ phát sinh lỗi hơn công pháp ướt' là ngược sự thật. Các lựa chọn còn lại đều đúng với công tác đá: gồm gia công đá, xây bằng đá, gắn đá lên công trình, và phải đeo kính bảo hộ, mặt nạ để chống bụi.\n\nTừ vựng:\n石工事（いしこうじ）: Công tác đá\n該当（がいとう）: Tương ứng, thuộc về\n乾式工法（かんしきこうほう）: Công pháp khô\n湿式工法（しっしきこうほう）: Công pháp ướt\n不具合（ふぐあい）: Sự cố, khuyết tật\n粉じん（ふんじん）: Bụi\n飛散（ひさん）: Bay tán, phát tán\n着用（ちゃくよう）: Đeo, mang (trang bị bảo hộ)",
      "tip": "💡 Mẹo nhớ: Khô (乾) = sạch, ít rắc rối → **khô ít lỗi hơn ướt**."
    },
    {
      "q": "問5　以下（いか）の写真（しゃしん）の青（あお）いところは何（なん）か。【123】",
      "options": [
        "1．ランナー",
        "2．野縁（のぶち）受け",
        "3．クリップ",
        "4．野縁（のぶち）"
      ],
      "answer": 0,
      "vi": "Trong ảnh, phần màu xanh là gì?",
      "explain": "Phần màu xanh trong ảnh là ランナー — thanh ray thép nằm ngang được gắn ở phía sàn và trần của hệ khung vách ngăn. Các thanh đứng スタッド được cắm vào rãnh của runner này để đứng thẳng và cố định vị trí. 野縁受け và 野縁 là các thanh thuộc hệ khung trần, còn クリップ là phụ kiện kẹp nối — không phải thanh ray ở vị trí trong ảnh.\n\nTừ vựng:\nランナー: Thanh ray ngang\n野縁（のぶち）: Thanh đỡ trần\n野縁受け（のぶちうけ）: Thanh đỡ phụ của trần\nクリップ: Kẹp nối, phụ kiện kẹp\n部材（ぶざい）: Cấu kiện, vật liệu",
      "tip": "💡 Nhớ: Runner = chạy dọc sàn/trần → giữ Stud thẳng đứng.",
      "img": "https://raw.githack.com/donghung94/beta2.0/main/mobile/assets/tokutei/2849.png"
    },
    {
      "q": "問6　コンクリートの表面(ひょうめん)から鉄筋(てっきん)までの距離(きょり)は何(なん)というか。【153】",
      "options": [
        "1．かぶり",
        "2．スタッド",
        "3．スペーサー",
        "4．シャックル"
      ],
      "answer": 0,
      "vi": "Khoảng cách từ bề mặt bê tông đến thép gọi là gì?",
      "explain": "Khoảng cách từ bề mặt bê tông đến bề mặt ngoài của cốt thép gần nhất được gọi là かぶり (chiều dày lớp bê tông bảo vệ). Lớp bảo vệ này giúp chống gỉ cho cốt thép, đảm bảo độ bền và khả năng chống cháy cho kết cấu. スペーサー là con kê dùng để giữ đúng khoảng cách かぶり khi đổ bê tông — đó là dụng cụ, không phải tên gọi của khoảng cách này.\n\nTừ vựng:\n表面（ひょうめん）: Bề mặt\n鉄筋（てっきん）: Cốt thép\n距離（きょり）: Khoảng cách\nかぶり: Lớp bê tông bảo vệ (chiều dày)\nスペーサー: Con kê (đệm định vị cốt thép)",
      "tip": "💡 Nhớ: かぶり = lớp bê tông ‘che phủ’ thép để chống gỉ."
    },
    {
      "q": "問7　溶接(ようせつ)の時(とき)の________を吸(す)い込(こ)むと頭痛(ずつう)·発熱(はつねつ)·寒気(さむけ)·筋肉痛(きんにくつう)·のどの渇(かわ)き·疲労(ひろう)などの症状(しょうじょう)が起(お)こる。________に記入(きにゅう)をしなさい。【157】",
      "options": [
        "1．ヒューム",
        "2．アセチレン",
        "3．酸素(さんそ)",
        "4．排気(はいき)"
      ],
      "answer": 0,
      "vi": "Hít phải ________ khi hàn sẽ gây đau đầu, sốt, ớn lạnh, đau cơ, khô họng, mệt mỏi… Hãy điền vào chỗ trống.",
      "explain": "Khi hàn, kim loại nóng chảy bốc hơi và ngưng tụ thành các hạt khói kim loại cực mịn gọi là ヒューム (khói hàn). Hít phải khói hàn có thể gây hội chứng sốt khói kim loại với các triệu chứng đúng như đề bài: đau đầu, sốt, ớn lạnh, đau cơ, khô họng, mệt mỏi. Vì vậy khi hàn phải đảm bảo thông gió tốt và đeo mặt nạ chống bụi chuyên dụng.\n\nTừ vựng:\n溶接（ようせつ）: Hàn\nヒューム: Khói hàn (khói kim loại)\n吸い込む（すいこむ）: Hít vào\n頭痛（ずつう）: Đau đầu\n発熱（はつねつ）: Sốt\n寒気（さむけ）: Ớn lạnh\n筋肉痛（きんにくつう）: Đau cơ\n疲労（ひろう）: Mệt mỏi",
      "tip": "💡 Nhớ: Hàn = tạo ra khói trắng mịn → gọi là フューム (fume)."
    },
    {
      "q": "問8. ボックスレンチは何(なに)に使(つか)うか。【138】",
      "options": [
        "1. ボルトやナットを回(まわ)すソケット部(ぶ)と、ハンドル部(ぶ)が一体(いったい)になった工具(こうぐ)",
        "2. 六角形(ろっかくけい)の穴(あな)がついたボルトを回(まわ)す工具(こうぐ)",
        "3. 頭部(とうぶ)のソケットを交換(こうかん)することで、さまざまなサイズのボルトやナットに対応(たいおう)できる工具(こうぐ)",
        "4. ネジを回(まわ)すための工具(こうぐ)"
      ],
      "answer": 0,
      "vi": "Công dụng của box wrench là gì?",
      "explain": "ボックスレンチ (cờ lê hộp) là dụng cụ có phần đầu ổ ôm trọn bu lông/đai ốc và phần tay cầm liền thành một khối, dùng để vặn bu lông, đai ốc. Vì đầu cờ lê bao kín các cạnh của đai ốc nên truyền lực đều, khó làm tròn cạnh. Lựa chọn 2 mô tả cờ lê lục giác dùng cho bu lông có lỗ lục giác; lựa chọn 3 mô tả loại cờ lê có đầu socket thay được — không phải box wrench.\n\nTừ vựng:\n工具（こうぐ）: Dụng cụ\n一体（いったい）: Liền một khối\n回す（まわす）: Vặn, xoay\n六角形（ろっかくけい）: Hình lục giác\n交換（こうかん）: Thay thế, thay đổi\n対応（たいおう）: Tương ứng, đáp ứng",
      "tip": "💡 Nhớ: Box = đầu kín bao quanh ốc → siết mạnh, an toàn."
    },
    {
      "q": "問9. 土台(どだい)、梁(はり)、たけなどの水平(すいへい)部材(ぶざい)と、垂直(すいちょく)部材(ぶざい)の柱(はしら)を組(く)み合(あ)わせる工法(こうほう)は何(なに)か。【163】",
      "options": [
        "1. ツーバイフォー",
        "2. 枠組(わくぐ)み壁(かべ)工法(こうほう)",
        "3. 軸組(じくぐ)み工法(こうほう)",
        "4. 圧張(あっぱく)り工法(こうほう)"
      ],
      "answer": 2,
      "vi": "Phương pháp kết hợp các cấu kiện ngang với cột đứng gọi là gì?",
      "explain": "Công pháp kết hợp các cấu kiện ngang như 土台 (đà kiềng), 梁 (dầm) với cấu kiện đứng là 柱 (cột) để tạo thành bộ khung chịu lực được gọi là 軸組み工法 — công pháp khung trục truyền thống của nhà gỗ Nhật Bản. ツーバイフォー và 枠組み壁工法 đều là công pháp tường khung gỗ (dùng các tấm khung gỗ làm tường chịu lực), khác với cách dựng khung cột–dầm của 軸組み工法.\n\nTừ vựng:\n土台（どだい）: Đà kiềng, cấu kiện chân tường\n梁（はり）: Dầm\n水平部材（すいへいぶざい）: Cấu kiện ngang\n垂直部材（すいちょくぶざい）: Cấu kiện đứng\n柱（はしら）: Cột\n軸組み工法（じくぐみこうほう）: Công pháp khung trục (cột–dầm)\n枠組み壁工法（わくぐみかべこうほう）: Công pháp tường khung",
      "tip": "💡 Nhớ: 軸 = trục, khung trục → cột + dầm ghép lại."
    },
    {
      "q": "問10.幅(はば)の広(ひろ)い面(めん)の塗装(とそう)を効率(こうりつ)よく塗(ぬ)る道具(どうぐ)は何(なに)か。",
      "options": [
        "1. スクレーパー",
        "2. 皮(かわ)スキ",
        "3. ウールローラー",
        "4. 手ぐわ"
      ],
      "answer": 2,
      "vi": "Dụng cụ nào dùng để sơn hiệu quả các bề mặt rộng?",
      "explain": "Để sơn các bề mặt rộng một cách hiệu quả, người ta dùng ウールローラー (con lăn len). Con lăn có bề mặt lông len giữ được nhiều sơn và lăn đều trên diện tích lớn, nhanh hơn nhiều so với dùng chổi quét. スクレーパー là dao cạo dùng để bóc lớp sơn cũ hoặc chất bẩn, 皮スキ là dụng cụ nạo thuộc da — không dùng để sơn diện rộng.\n\nTừ vựng:\n幅（はば）: Chiều rộng\n塗装（とそう）: Sơn, công tác sơn\n効率（こうりつ）: Hiệu quả, hiệu suất\n道具（どうぐ）: Dụng cụ\nウールローラー: Con lăn len (để sơn)\nスクレーパー: Dao cạo, dụng cụ bóc tách",
      "tip": "💡 Nhớ: ローラー (Roller) = Con lăn. Dùng để sơn (lăn) các mảng tường hoặc sàn rộng."
    },
    {
      "q": "問11.建築(けんちく)板金(ばんきん)工事(こうじ)について、不適切(ふてきせつ)なものを選(えら)べ",
      "options": [
        "1. 鉄板(てっぱん)の加(か)工(こう)に必要(ひつよう)な作業(さぎょう)は、ケガキ、切断(せつだん)、曲(ま)がえ、溶接(ようせつ)",
        "2. 板金(ばんきん)溶接(ようせつ)で、一番(いちばん)利用(りよう)されるのは、アーク溶接(ようせつ)",
        "3. 切断面(せつだんめん)は、金属製(きんぞくせい)やすりで滑(なめ)らかに仕上(しあ)げする",
        "4. 薄(うす)い金属板(きんぞくばん)を切断(せつだん)、曲(ま)がえ、打(う)ち出(だ)し、溶接(ようせつ)などの加(か)工(こう)をする"
      ],
      "answer": 1,
      "vi": "Hãy chọn phát biểu không phù hợp về công việc gia công tấm kim loại trong kiến trúc.",
      "explain": "Phát biểu không phù hợp là lựa chọn 2. Tấm kim loại kiến trúc rất mỏng nên nếu dùng hàn hồ quang (アーク溶接) — vốn có nhiệt lượng lớn, dùng cho thép dày — sẽ dễ làm cháy thủng và biến dạng tấm. Trong gia công 板金, người ta chủ yếu dùng các cách liên kết như gấp mép, tán đinh, hàn điểm. Các lựa chọn còn lại đều đúng: gia công tấm gồm các công đoạn kẻ vạch (ケガキ), cắt, uốn, hàn; mặt cắt được giũa nhẵn bằng giũa kim loại.\n\nTừ vựng:\n板金（ばんきん）: Tấm kim loại, gia công kim loại tấm\n不適切（ふてきせつ）: Không phù hợp\n切断（せつだん）: Cắt\n曲げる（まげる）: Uốn, bẻ cong\n溶接（ようせつ）: Hàn\nアーク溶接（ようせつ）: Hàn hồ quang\n仕上げ（しあげ）: Hoàn thiện\n薄い（うすい）: Mỏng",
      "tip": "💡 Nhớ:.建築(けんちく)板金(ばんきん) (tấm kim loại kiến trúc) thường rất mỏng. アーク溶接(ようせつ) (Hàn hồ quang) thì rất mạnh, dùng cho thép kết cấu dày. Chúng không phù hợp với nhau."
    },
    {
      "q": "問12.三大災害(さんだいさいがい)の中(なか)に含(ふく)まれないものを選(えら)べ。",
      "options": [
        "1. 墜落(ついらく)·転落(てんらく)",
        "2. 機械(きかい)などでの災害(さがい)",
        "3. 交通事故(こうつう じこ)",
        "4. 転倒(てんとう)·崩壊(ほうかい)"
      ],
      "answer": 2,
      "vi": "Hãy chọn thứ không nằm trong 'Ba thảm họa/tai nạn lớn' (trong ngành xây dựng).",
      "explain": "Ba tai nạn lớn (三大災害) trong ngành xây dựng Nhật Bản gồm: (1) ngã từ trên cao 墜落・転落, (2) tai nạn do máy móc, thiết bị 機械などでの災害, (3) sập đổ, vật rơi 転倒・崩壊. Tai nạn giao thông (交通事故) tuy vẫn có thể xảy ra khi di chuyển nhưng không nằm trong nhóm ba tai nạn lớn của công trường, nên đây là đáp án cần chọn.\n\nTừ vựng:\n災害（さいがい）: Tai nạn, thảm họa\n含まれる（ふくまれる）: Được bao gồm\n墜落（ついらく）: Rơi, ngã từ trên cao\n転落（てんらく）: Ngã xuống\n交通事故（こうつうじこ）: Tai nạn giao thông\n転倒（てんとう）: Đổ ngã\n崩壊（ほうかい）: Sụp đổ",
      "tip": "💡 Nhớ: Ba thảm họa lớn trong xây dựng = NGÃ CAO, MÁY MÓC, SẬP ĐỔ."
    },
    {
      "q": "問13.下地(したじ)に塗(ぬ)った張(は)り付(つ)け用(よう)のモルタルにタイルを押(お)し付(つ)けて張(は)る工法(こうほう)は何(なん)というか。【168】",
      "options": [
        "1. 改良(かいりょう)圧着(あっちゃく)張(ば)り工法(こうほう)",
        "2. 密着(みっちゃく)張(ば)り工法(こうほう)",
        "3. 圧着(あっちゃく)張(ば)り工法(こうほう)",
        "4. 二重(にじゅう)張(ば)り工法(こうほう)"
      ],
      "answer": 2,
      "vi": "Phương pháp ốp lát gạch bằng cách ấn mạnh gạch lên lớp vữa (mortar) đã trát sẵn trên bề mặt nền được gọi là gì?",
      "explain": "Phương pháp trát vữa dán lên bề mặt nền rồi ấn mạnh gạch vào lớp vữa đó được gọi là 圧着張り工法 (ốp dán ép). Đặc trưng là dùng bay răng cưa trát vữa dày khoảng 5mm lên nền, sau đó ấn từng viên gạch xuống để vữa bám đều vào mặt sau gạch. 改良圧着張り là biến thể có phết thêm vữa lên cả mặt sau gạch; 密着張り dùng thiết bị rung để ép gạch sát vào nền — khác với động tác ấn vào lớp vữa đã trát của đề bài.\n\nTừ vựng:\n下地（したじ）: Bề mặt nền\n張り付け（はりつけ）: Dán, ốp\nモルタル: Vữa\n押し付ける（おしつける）: Ấn mạnh vào\n圧着（あっちゃく）: Ép dính, dán ép\n密着（みっちゃく）: Bám dính khít",
      "tip": "💡 Nhớ: 圧着 (あっ**ちゃく**) = Áp lực dán/dính. Dùng lực ấn để dán gạch vào lớp vữa đã trát sẵn."
    },
    {
      "q": "問14.タイル張(ば)り工事(こうじ)として、タイルがはがれることは何(なん)というか。【168} ",
      "options": [
        "1. はく離(り)",
        "2. はく落(らく)",
        "3. はく崩(ほう)",
        "4. はく飛(ひ)"
      ],
      "answer": 0,
      "vi": "Hiện tượng gạch/tile bị **bong ra (はがれる)** khỏi bề mặt dán được gọi là gì?",
      "explain": "Hiện tượng lớp gạch ốp bị tách, bong ra khỏi bề mặt nền được gọi là はく離 (bóc tách). Đây là thuật ngữ kỹ thuật chỉ sự mất liên kết giữa vật liệu ốp và lớp nền (vữa/keo), thường do nền yếu, thi công sai hoặc rung động lâu ngày. Các lựa chọn còn lại (はく落・はく崩・はく飛) không phải thuật ngữ đúng cho hiện tượng này.\n\nTừ vựng:\nはがれる: Bong ra, tróc ra\nはく離（はくり）: Bóc tách, bong tróc (thuật ngữ)\n張り（ばり）: Lớp ốp, việc ốp dán\n材料（ざいりょう）: Vật liệu",
      "tip": "💡 Nhớ: タイルが **はがれる** (Gạch/Tile bong ra) → **はく離(り)** (Bóc tách) là thuật ngữ chỉ sự tách rời."
    },
    {
      "q": "問15　どんな部材（ぶざい）か。【111】",
      "options": [
        "1．単管（たんかん）パイプ",
        "2．Pコン",
        "3．丸セパレーター",
        "4．フォームタイ"
      ],
      "answer": 3,
      "vi": "Đây là loại vật liệu nào trong công trình xây dựng?",
      "explain": "Cấu kiện trong ảnh là フォームタイ (thanh giằng cốp pha). Nó được lắp xuyên qua hai tấm cốp pha đối diện và siết chặt, giữ cho khoảng cách giữa hai mặt cốp pha không bị phình ra khi đổ bê tông. Pコン là nón nhựa gắn ở đầu thanh セパレーター, 丸セパレーター là thanh phân cách tròn — đều là các phụ kiện khác trong hệ cốp pha.\n\nTừ vựng:\n部材（ぶざい）: Cấu kiện\nフォームタイ: Thanh giằng cốp pha (form tie)\n単管パイプ（たんかんパイプ）: Ống thép đơn\nセパレーター: Thanh phân cách (separator)\n型枠（かたわく）: Cốp pha, ván khuôn",
      "tip": "💡 Nhớ: フォーム＝Cốp pha, タイ＝Buộc → Thanh buộc cốp pha = フォームタイ.",
      "img": "https://raw.githack.com/donghung94/beta2.0/main/mobile/assets/tokutei/2021.png"
    },
    {
      "q": "問16.梁底(はりそこ)型枠(かたわく)の単管(たんかん)パイプを受(うけ)て、パイプサポートを立(た)てる際(さい)に使用(しよう)する木材(もくざい)は何(なん)というか【112】",
      "options": [
        "1. パイプサポート",
        "2. 端太角(ばたかく)",
        "3. トンボ端太(とんぼ ばた)",
        "4. 筋交(すじか)い"
      ],
      "answer": 2,
      "vi": "Gỗ được sử dụng để đỡ ống thép đơn (tankan pipe) của khuôn ván đáy dầm và dựng cột chống (pipe support) được gọi là gì?",
      "explain": "Khi dựng cột chống (パイプサポート) đỡ ống đơn của cốp pha đáy dầm, thanh gỗ đặt ngang để nhận ống và định vị vị trí dựng cột được gọi là トンボ端太. Nó giúp các cột chống đứng đúng vị trí, thẳng hàng và ổn định. 端太角 (lựa chọn 2) là thanh gỗ vuông nói chung dùng để lót, đệm; còn 筋交い là thanh giằng chéo chống xô lệch — không phải thanh gỗ định vị trong tình huống này.\n\nTừ vựng:\n梁底（はりそこ）: Đáy dầm\n型枠（かたわく）: Cốp pha\n受ける（うける）: Đỡ, nhận lực\n木材（もくざい）: Gỗ, vật liệu gỗ\n端太角（ばたかく）: Thanh gỗ vuông lót đệm\nトンボ端太（とんぼばた）: Thanh gỗ định vị cột chống\n筋交い（すじかい）: Thanh giằng chéo",
      "tip": "💡 Nhớ: トンボ (Tonbo) thường ám chỉ các bộ phận định vị/cố định tạm thời."
    },
    {
      "q": "問17.出隅(ですみ)を仕上(しあ)げるときに使(つか)うこては何(なに)か。【117】",
      "options": [
        "1. 面引(めんび)きごて",
        "2. 切(き)り付(つ)けごて",
        "3. ブロックごて",
        "4. くし目(め)ごて"
      ],
      "answer": 0,
      "vi": "Cái bay (cái trát) được sử dụng khi hoàn thiện góc ngoài (góc lồi) là gì?",
      "explain": "Khi hoàn thiện góc ngoài lồi (出隅), người thợ dùng 面引きごて — loại bay chuyên dụng để vuốt và bo tròn góc vữa, giúp góc không bị sắc cạnh, đỡ sứt mẻ và đẹp hơn. 切り付けごて dùng để cắt, tách mối nối; くし目ごて tạo vân răng cưa trên bề mặt vữa — đều không dùng cho góc lồi.\n\nTừ vựng:\n出隅（ですみ）: Góc ngoài, góc lồi\n仕上げ（しあげ）: Hoàn thiện\nこて: Cái bay (bay trát)\n面引きごて（めんびきごて）: Bay bo góc\n切り付けごて（きりつけごて）: Bay cắt mối\nくし目ごて（くしめごて）: Bay răng cưa",
      "tip": "💡 Nhớ: 面引(めんびき) = Dẫn góc/Bo góc. Dùng để tạo góc tròn/vát (không phải góc vuông sắc nét)."
    },
    {
      "q": "問18　型枠（かたわく）の設置（せっち）時に使用する道具（どうぐ）は何か。【116】",
      "options": [
        "1．スパナ",
        "2．ボルシン",
        "3．手のこ",
        "4．シノ"
      ],
      "answer": 2,
      "vi": "Khi lắp đặt ván khuôn, dụng cụ nào dưới đây được sử dụng?",
      "explain": "Dụng cụ trong ảnh là 手のこ (cưa tay). Khi lắp đặt cốp pha, thợ dùng cưa tay để cắt gỗ, ván ép theo đúng kích thước, đặc biệt ở các vị trí hẹp hoặc cần cắt tỉ mỉ. スパナ là cờ lê dùng để vặn bu lông, シノ là thanh nạy nhỏ thường dùng khi tháo cốp pha — không phải dụng cụ cắt trong ảnh.\n\nTừ vựng:\n型枠（かたわく）: Cốp pha\n設置（せっち）: Lắp đặt\n道具（どうぐ）: Dụng cụ\n手のこ: Cưa tay\nスパナ: Cờ lê\nシノ: Thanh nạy, đòn bẩy nhỏ",
      "tip": "💡 Nhớ: 手＝tay → 手のこ＝cưa tay → dùng khi lắp ván khuôn.",
      "img": "https://raw.githack.com/donghung94/beta2.0/main/mobile/assets/tokutei/4729.png"
    },
    {
      "q": "問19　布（ぬの）や紙（かみ）などの柔( や わ )らかいものに穴 (あな) をあける道具 (どうぐ) は何 (な に) か。【124】",
      "options": [
        "1．千枚 (せんまい) 通 (どお) し",
        "2．コンパス",
        "3．きり",
        "4．ディバイダ"
      ],
      "answer": 0,
      "vi": "Dụng cụ nào dùng để đục lỗ trên vật liệu mềm như vải hoặc giấy?",
      "explain": "Dụng cụ dùng để đục lỗ trên vật liệu mềm như vải, giấy, da là 千枚通し — một loại dùi nhọn có tay cầm gỗ và đầu kim thép sắc. Tên gọi với ý nghĩa 'xuyên qua nghìn lớp' nói lên khả năng đâm xuyên nhiều lớp vật liệu mềm xếp chồng lên nhau. コンパス và ディバイダ là dụng cụ vẽ, đo khoảng cách; きり là mũi khoan, dùi nói chung — không chuyên dụng cho vải, giấy như 千枚通し.\n\nTừ vựng:\n布（ぬの）: Vải\n柔らかい（やわらかい）: Mềm\n穴（あな）: Lỗ\n千枚通し（せんまいどおし）: Dùi nhọn đục lỗ\nきり: Mũi khoan, dùi\nコンパス: Com-pa",
      "tip": "💡 Nhớ: 千枚 (せんまい) 通 (どお) し = 'xuyên qua nghìn tấm' → dùi nhọn chuyên dùng để đục lỗ vật liệu mềm."
    },
    {
      "q": "問20.セパレーターの先端(せんたん)に取(と)り付(つ)けるPコンの材料(ざいりょう)は何(なに)か?",
      "options": [
        "1. ウレタンフォーム",
        "2. 木材(もくざい)",
        "3. プラスチック",
        "4. ゴム"
      ],
      "answer": 2,
      "vi": "Vật liệu làm P-cone (nắp chóp) được gắn vào đầu thanh Separator là gì?",
      "explain": "Pコン (P-cone) gắn ở đầu thanh セパレーター được làm bằng プラスチック (nhựa). Nhờ chất liệu nhựa, Pコン nhẹ, rẻ, không gỉ và dễ tháo ra khỏi bê tông sau khi tháo cốp pha, để lại một lỗ lõm hình nón đều đẹp trên bề mặt, sau đó được trét vữa lấp lại. Nếu làm bằng gỗ hay cao su sẽ khó tháo và độ chính xác kém hơn.\n\nTừ vựng:\n先端（せんたん）: Đầu mút, phần đầu\n取り付ける（とりつける）: Gắn vào, lắp vào\n材料（ざいりょう）: Vật liệu\nPコン: Nón nhựa chụp đầu thanh separator\nプラスチック: Nhựa\nセパレーター: Thanh phân cách cốp pha",
      "tip": "💡 Nhớ: Pコン (P-cone) = Nhựa (Plastic) để tạo lỗ lõm sau khi tháo khuôn."
    },
    {
      "q": "問21.芯材(しんざい)の石膏(せっこう)の両面(りょうめん)と側面(そくめん)をボード用(よう)の原紙(げんし)で包(つつ)んだ建築用(けんちくよう)の板材(いたざい)は何(なん)と言(い)うか。【122】",
      "options": [
        "1. 断熱材(だんねつざい)",
        "2. クロス張り(ばり)",
        "3. 石膏(せっこう)ボード",
        "4. ボードやすり"
      ],
      "answer": 2,
      "vi": "Tấm vật liệu xây dựng có lõi thạch cao được bọc kín bằng giấy chuyên dụng ở cả hai mặt và các cạnh được gọi là gì?",
      "explain": "Tấm vật liệu có lõi là thạch cao, được bọc kín cả hai mặt và các cạnh bằng giấy chuyên dụng cho tấm (ボード用原紙) chính là 石膏ボード (tấm thạch cao). Loại tấm này nhẹ, thi công nhanh, cách âm và chống cháy tốt nên được dùng rất phổ biến cho tường và trần nội thất. 断熱材 là vật liệu cách nhiệt dạng xốp hoặc sợi, không phải tấm có lõi thạch cao bọc giấy.\n\nTừ vựng:\n芯材（しんざい）: Vật liệu lõi\n石膏（せっこう）: Thạch cao\n両面（りょうめん）: Hai mặt\n側面（そくめん）: Mặt cạnh, mặt bên\n原紙（げんし）: Giấy gốc, giấy chuyên dụng\n包む（つつむ）: Bọc, bao gói\n板材（いたざい）: Vật liệu tấm",
      "tip": "💡 Nhớ: 石膏 (せっこう) = Thạch cao. ボード (Board) = Tấm. Ghép lại là Tấm Thạch Cao."
    },
    {
      "q": "問22.接着工法(せっちゃくこうほう)について、不適切(ふてきせつ)なものを選(えら)べ。【175】",
      "options": [
        "1. 専用(せんよう)の接着剤(せっちゃくざい)を下地(したじ)に塗(ぬ)り、シートを接着(せっちゃく)して固定(こてい)する",
        "2. 下地(したじ)をごみがある状態(じょうたい)でもシートを完全(かんぜん)に密着(みっちゃく)できる",
        "3. シートの重(かさ)ね部分(ぶぶん)は、シーリング材(ざい)を挿入(そうにゅう)し、全体(ぜんたい)をよく転圧(てんあつ)する。"
      ],
      "answer": 1,
      "vi": "Chọn phát biểu không phù hợp về phương pháp thi công bằng keo dán (Adhesive construction method).",
      "explain": "Phát biểu không phù hợp là lựa chọn 2. Trong công pháp dán (接着工法), độ bám dính phụ thuộc hoàn toàn vào bề mặt nền: nền phải được làm sạch bụi, rác và khô ráo thì keo mới bám chắc và tấmシート mới dính khít hoàn toàn. Nếu nền còn rác, bụi, keo sẽ không bám, gây phồng rộp và bong tróc. Các lựa chọn còn lại đều đúng quy trình: bôi keo chuyên dụng lên nền rồi dán tấm cố định; phần chồng mép được chèn vật liệu trám kín và lăn ép kỹ toàn bộ.\n\nTừ vựng:\n接着工法（せっちゃくこうほう）: Công pháp dán keo\n不適切（ふてきせつ）: Không phù hợp\n接着剤（せっちゃくざい）: Keo dán\n下地（したじ）: Bề mặt nền\n密着（みっちゃく）: Bám dính khít\n重ね（かさね）: Phần chồng mép\n転圧（てんあつ）: Lăn ép",
      "tip": "💡 Nhớ: Dán 接着工法(せっちゃくこうほう) = Nền phải **sạch sẽ và khô ráo**. 'Có rác/bụi' (ごみがある) là sai."
    },
    {
      "q": "問23　ビニル床（ゆか）シートたビニルタイルのつなぎ目（め）を処理（しょり）するための工具（こうぐ）は何か。【124】",
      "options": [
        "1．カッター",
        "2．コンパス",
        "3．溶接機（ようせつき）",
        "4．ディバイダ"
      ],
      "answer": 2,
      "vi": "Dụng cụ nào dùng để xử lý mối nối của sàn nhựa vinyl?",
      "explain": "Dụng cụ đúng là 溶接機 (máy hàn nhiệt dùng cho sàn vinyl). Khi thi công sàn nhựa dạng tấm hoặc cuộn, các mối nối được xử lý bằng máy hàn nhiệt: khí nóng làm chảy dây hàn vinyl chuyên dụng, lấp kín khe nối giúp sàn liền mạch, chống thấm và chống bong mép. カッター chỉ dùng để cắt tấm, コンパス là dụng cụ vẽ vòng tròn — không xử lý được mối nối.\n\nTừ vựng:\nつなぎ目（つなぎめ）: Mối nối\n処理（しょり）: Xử lý\n工具（こうぐ）: Dụng cụ\n溶接機（ようせつき）: Máy hàn (nhiệt)\n床シート（ゆかシート）: Tấm trải sàn\nカッター: Dao cắt",
      "tip": "💡 Nhớ: 溶接（ようせつ） = hàn, 機 き = máy → 溶接機 = máy hàn nhiệt cho sàn nhựa.",
      "img": "https://raw.githack.com/donghung94/beta2.0/main/mobile/assets/tokutei/75317.png"
    },
    {
      "q": "問24.首(くび)の部分(ぶぶん)が枝(えだ)と平(ひら)たい面(めん)の根元(ねもと)についてる。細(こま)かい部分(ぶぶん)の作業(さぎょう)に適(てき)しています。そのこては、何(なん)か。【117】",
      "options": [
        "1. 中塗(なかぬ)りごて",
        "2. 柳刃(やなぎば)ごて",
        "3. 目地(めじ)ごて",
        "4. 角(かど)ごて"
      ],
      "answer": 1,
      "vi": "Cái bay (cái trát) có phần cổ nối với cán và mặt phẳng ở gốc/đáy. Nó phù hợp cho các công việc chi tiết. Đó là loại bay nào?",
      "explain": "Loại bay được mô tả là 柳刃ごて (bay lưỡi liễu). Nó có lưỡi dài, mỏng và hẹp như lá liễu, rất phù hợp để trát và hoàn thiện những vị trí hẹp, chi tiết nhỏ mà bay thường không vào được. 目地ごて là bay nhỏ chuyên trét mạch gạch, 角ごて dùng cho góc tường — hình dáng và công dụng khác với mô tả 'lưỡi liễu, làm việc chi tiết' trong đề bài.\n\nTừ vựng:\n柳刃ごて（やなぎばごて）: Bay lưỡi liễu\n中塗りごて（なかぬりごて）: Bay trát lớp giữa\n目地ごて（めじごて）: Bay trét mạch\n角ごて（かどごて）: Bay góc\n細かい（こまかい）: Nhỏ, chi tiết, tỉ mỉ\n適する（てきする）: Phù hợp",
      "tip": "💡 Nhớ: 柳刃 (Yanagiba) = Lưỡi liễu. Dùng cho việc trát/hoàn thiện chi tiết, nhỏ hẹp."
    },
    {
      "q": "問25.ハンマーでたたいて金属(きんぞく)の表面(ひょうめん)に小(ちい)さなくぼみを作(つく)ったり、布(ぬの)や皮(かわ)などに丸(まる)い穴(あな)をあける道具(どうぐ)は何(なに)か。",
      "options": [
        "1. たがね",
        "2. レーキ",
        "3. タンバー",
        "4. ポンチ"
      ],
      "answer": 3,
      "vi": "Dụng cụ dùng búa gõ để tạo vết lõm nhỏ trên bề mặt kim loại, hoặc dùng để đục lỗ tròn trên vải hoặc da, là gì?",
      "explain": "Dụng cụ đó là ポンチ (đột, dùi đột). Khi dùng búa gõ lên ポンチ, đầu nhọn của nó tạo một vết lõm nhỏ trên bề mặt kim loại để định tâm trước khi khoan, hoặc đục lỗ tròn gọn trên vải, da. たがね là đục thép dùng để cắt, phá kim loại và bê tông; レーキ là cái cào — không tạo được vết lõm hay lỗ tròn chính xác như ポンチ.\n\nTừ vựng:\n表面（ひょうめん）: Bề mặt\nくぼみ: Vết lõm\n穴（あな）: Lỗ\nポンチ: Dụng cụ đột, dùi đột (punch)\nたがね: Đục thép\n皮（かわ）: Da (vật liệu)",
      "tip": "💡 Nhớ: ポンチ (Punch) = Đục/Đột, dùng để tạo dấu hoặc đục lỗ."
    },
    {
      "q": "問26.コンクリートを切断(せつだん)するための電動(でんどう)工具(こうぐ)は何(なに)と言(い)うか。【130】",
      "options": [
        "1. くぎ打ち機(くぎうちき)",
        "2. 電工(でんこう)ドラム",
        "3. ディスクグラインダー",
        "4. 電動(でんどう)ブロックカッター"
      ],
      "answer": 3,
      "vi": "Dụng cụ điện (dụng cụ điện động) dùng để cắt bê tông được gọi là gì?",
      "explain": "Dụng cụ điện chuyên dùng để cắt bê tông, gạch block là 電動ブロックカッター (máy cắt block chạy điện). Máy được trang bị lưỡi cắt kim cương, thường có cấp nước làm mát, giúp cắt các khối bê tông, gạch chính xác và ít bụi. ディスクグラインダー (máy mài góc) chủ yếu để mài, chỉ cắt được vật mỏng hoặc rãnh nông — không phải máy cắt block chuyên dụng. くぎ打ち機 là máy bắn đinh, 電工ドラム là cuộn dây điện kéo dài.\n\nTừ vựng:\n切断（せつだん）: Cắt đứt\n電動（でんどう）: Chạy điện\n工具（こうぐ）: Dụng cụ\n電動ブロックカッター: Máy cắt block bê tông điện\nディスクグラインダー: Máy mài góc (đĩa)\nくぎ打ち機（くぎうちき）: Máy bắn đinh",
      "tip": "💡 Nhớ: ブロックカッター (Block Cutter) = Máy cắt **chuyên dụng** cho khối bê tông/gạch."
    },
    {
      "q": "問27.土(つち)やアスファルトなどをすくって運(はこ)ぶための道具(どうぐ)は何(なに)か。【130} ",
      "options": [
        "1. 剣(けん)スコップ",
        "2. 角(かく)スコップ",
        "3. ダブルスコップ",
        "4. つるはし"
      ],
      "answer": 1,
      "vi": "Dụng cụ dùng để **xúc (すくう)** và **vận chuyển (はこぶ)** đất hoặc nhựa đường là gì?",
      "explain": "Dụng cụ phù hợp là 角スコップ (xẻng vuông). Xẻng vuông có lưỡi rộng, phẳng và đáy bằng nên xúc được nhiều vật liệu rời như đất, cát, nhựa đường vụn trong một lần và vận chuyển dễ dàng. Ngược lại, 剣スコップ (xẻng nhọn, lựa chọn 1) có mũi nhọn chuyên để đào, xắn đất cứng; つるはし là cuốc chim dùng để phá đất đá — đều không tối ưu cho việc xúc và chở như đề bài.\n\nTừ vựng:\nすくう: Xúc, múc\n運ぶ（はこぶ）: Vận chuyển, mang đi\n角スコップ（かくスコップ）: Xẻng vuông\n剣スコップ（けんスコップ）: Xẻng nhọn (đầu như kiếm)\nつるはし: Cuốc chim\n道具（どうぐ）: Dụng cụ",
      "tip": "💡 Nhớ: **すくって運(はこ)ぶ** (Xúc và vận chuyển) → **角(かく)スコップ** (Xẻng vuông)."
    },
    {
      "q": "問28.始業前点検(しぎょうまえ てんけん)にない作業(さぎょう)は何(なに)か。【148】",
      "options": [
        "1. 作業手順書(さぎょうてじゅんしょ)を確認(かくにん)する",
        "2. 器具(きぐ)·工具(こうぐ)·道具(どうぐ)が、点検(てんけん)·整備(せいび)されていることを確認(かくにん)する",
        "3. 機械(きかい)の点検(てんけん)·整備(せいび)されていることを確認(かくにん)する",
        "4. 作業日報(さぎょうにっぽう)を報告(ほうこく)する"
      ],
      "answer": 3,
      "vi": "Công việc nào không có trong phần kiểm tra trước khi bắt đầu công việc (**始業前点検(しぎょうまえてんけん)**)?",
      "explain": "Việc không thuộc kiểm tra trước giờ làm là 'báo cáo nhật ký công việc' (作業日報の報告). Nhật ký công việc được ghi và báo cáo sau khi kết thúc ngày làm việc, ghi lại nội dung và tiến độ đã thực hiện — không thể có ở thời điểm trước khi bắt đầu. Ba hạng mục còn lại đều thuộc 始業前点検: kiểm tra quy trình công việc, kiểm tra tình trạng dụng cụ, thiết bị và kiểm tra máy móc trước khi vận hành.\n\nTừ vựng:\n始業前点検（しぎょうまえ てんけん）: Kiểm tra trước giờ làm\n作業手順書（さぎょうてじゅんしょ）: Bản quy trình công việc\n器具（きぐ）: Dụng cụ, thiết bị nhỏ\n整備（せいび）: Bảo dưỡng, chuẩn bị\n作業日報（さぎょうにっぽう）: Nhật ký công việc ngày\n報告（ほうこく）: Báo cáo",
      "tip": "💡 Nhớ: **始業前(しぎょうまえ)** (TRƯỚC khi bắt đầu) ≠ **日報報告(にっぽうほうこく)** (Báo cáo CUỐI ngày)."
    },
    {
      "q": "問29.建築(けんちく)現場(げんば)での死亡(しぼう)災害(さいがい)で最(もっと)も多(おお)いのは何か。【179】",
      "options": [
        "1. 転倒(てんとう)",
        "2. 激突(げきとつ)",
        "3. 墜落(ついらく)",
        "4. 倒壊(とうかい)"
      ],
      "answer": 2,
      "vi": "Nguyên nhân phổ biến nhất gây tai nạn tử vong (**死亡災害(しぼうさいがい)**) tại công trường xây dựng (**建築現場(けんちくげんば)**) là gì?",
      "explain": "Nguyên nhân gây tử vong nhiều nhất tại công trường xây dựng Nhật Bản là 墜落・転落 (ngã từ trên cao), chiếm tỷ lệ cao vượt trội trong thống kê nhiều năm. Vì đặc thù xây dựng phải làm việc trên giàn giáo, mái, mép sàn nên chỉ một sơ suất nhỏ hoặc không đeo dây an toàn cũng có thể dẫn đến tai nạn chết người. Đây là lý do công trường luôn nhấn mạnh việc lắp lan can, lưới an toàn và đeo dây bảo hộ khi làm việc trên cao.\n\nTừ vựng:\n現場（げんば）: Công trường, hiện trường\n死亡災害（しぼうさいがい）: Tai nạn lao động chết người\n墜落（ついらく）: Ngã từ trên cao\n転倒（てんとう）: Vấp ngã (trên cùng mặt phẳng)\n激突（げきとつ）: Va đập mạnh\n倒壊（とうかい）: Sụp đổ",
      "tip": "💡 Nhớ: **死亡災害(しぼうさいがい)** (Tai nạn chết người) tại công trường thường là do **墜落(ついらく)** (Ngã cao)."
    },
    {
      "q": "問30.安全(あんぜん)施工(せこう)サイクルは何ですか。不適切(ふてきせつ)な物(もの)は何ですか。【185·186】",
      "options": [
        "1. 作業前(さぎょうまえ)の安全(あんぜん)朝礼(ちょうれい)",
        "2. 作業(さぎょう)開始前(かいしまえ)点検(てんけん)",
        "3. 安全(あんぜん)パトロール",
        "4. 安全(あんぜん)靴(ぐつ)"
      ],
      "answer": 3,
      "vi": "Đâu là hạng mục không phù hợp với **Chu trình Thi công An toàn (**安全施工(あんぜんせこう)サイクル**)**?",
      "explain": "Hạng mục không phù hợp là 安全靴 (giày bảo hộ). 安全施工サイクル là chu trình hoạt động quản lý an toàn lặp lại mỗi ngày tại công trường, gồm các hoạt động như: họp an toàn đầu giờ (安全朝礼), kiểm tra trước khi bắt đầu công việc (作業開始前点検), tuần tra an toàn (安全パトロール). Giày bảo hộ là trang bị bảo hộ cá nhân (PPE) mà người lao động mang, không phải một hoạt động trong chu trình quản lý này.\n\nTừ vựng:\n安全施工サイクル（あんぜんせこうサイクル）: Chu trình thi công an toàn\n不適切（ふてきせつ）: Không phù hợp\n朝礼（ちょうれい）: Họp đầu giờ\n点検（てんけん）: Kiểm tra\n安全パトロール: Tuần tra an toàn\n安全靴（あんぜんぐつ）: Giày bảo hộ",
      "tip": "💡 Nhớ: **サイクル (Cycle)** là chu trình/bước đi. **靴(ぐつ)** (Giày) là vật dụng, không phải là bước đi."
    }
  ]
};

window.TOKUTEI_SETS["g2_2"] = {
  "group": "g2",
  "title": "Thực hành nhóm 2 – (問31〜問60)",
  "questions": [
    {
      "q": "問31.クローラー式(しき)の走行(そうこう)装着(そうちゃく)の前面(ぜんめん)に、可動式(かどうしき)の排土板(はいどばん)を装着(そうちゃく)し、主(おも)として掘削(くっさく)、運搬(うんぱん)を行(おこな)う機械(きかい)は何(なに)か。【101】",
      "options": [
        "1. パワーショベル",
        "2. ブルドーザー",
        "3. ホイールローダー",
        "4. ダンプトラック"
      ],
      "answer": 1,
      "vi": "Loại máy móc nào có trang bị bánh xích (**クローラー式(しき)**), lắp một lưỡi ủi (**排土板(はいどばん)**) có thể di chuyển ở phía trước, và chủ yếu thực hiện các công việc đào (**掘削(くっさく)**) và vận chuyển (**運搬(うんぱん)**)?",
      "explain": "Đó là **ブルドーザー (Xe ủi đất)**. Đặc trưng của máy này là có bánh xích (**クローラー式(しき)**) và lưỡi ủi (**排土板(はいどばん)**) lớn ở phía trước, chuyên dùng để ủi đất, san lấp, và vận chuyển vật liệu trong cự ly ngắn.",
      "tip": "💡 Nhớ: **ブルドーザー (Bulldozer)** = **クローラー式(しき)** (Bánh xích) + **排土板(はいどばん)** (Lưỡi ủi)."
    },
    {
      "q": "問32. この写真(しゃしん)は何(なに)の足場(あしば)か。【102】",
      "options": [
        "1. くさび緊結式(きんけつしき)足場(あしば)",
        "2. 単管(たんかん)足場(あしば)",
        "3. 枠組(わくぐ)み足場(あしば)",
        "4. 鉄骨(てっこつ)とび"
      ],
      "answer": 0,
      "vi": "Giàn giáo trong bức ảnh này là loại nào?",
      "explain": "Đó là **くさび緊結式(きんけつしき)足場(あしば) (Giàn giáo kiểu nêm)**. Đặc điểm nhận dạng là các cột chống có các túi để đóng nêm vào, và thanh giằng được kết nối bằng cách đóng nêm (くさび) chặt vào cột. Loại này rất phổ biến trong các công trình sửa chữa nhà ở hoặc tòa nhà thấp tầng.",
      "tip": "💡 Nhớ: Nhìn thấy các chốt nêm đóng vào cột hoặc sàn lưới kim loại đặc trưng như hình → **くさび緊結式(きんけつしき)**.",
      "img": "https://raw.githack.com/donghung94/beta2.0/main/mobile/assets/tokutei/0611.png"
    },
    {
      "q": "問33. これは何(なん)と言(い)うか。【110】",
      "options": [
        "1. ラムシリンダ",
        "2. バーナー",
        "3. 溶接棒(ようせつぼう)",
        "4. 曲(ま)げ試験機(しけんき)"
      ],
      "answer": 1,
      "vi": "Đây được gọi là gì?",
      "explain": "Đây là một đầu **バーナー (Burner)** chuyên dụng. Nó được thiết kế để tạo nhiều ngọn lửa cùng lúc, thường dùng để nung nóng ống thép hoặc các vật liệu kim loại có hình dạng cong một cách đồng đều.",
      "tip": "💡 Nhớ: Dụng cụ tạo ra lửa/nhiệt để nung nóng → **バーナー (Burner)**.",
      "img": "https://raw.githack.com/donghung94/beta2.0/main/mobile/assets/tokutei/1753.png"
    },
    {
      "q": "問34.ヘルメットと顔(かお)全体(ぜんたい)を確保(かくほ)するシールドが一体(いったい)になっているヘルメットは何(なに)と言(い)うか。【110】",
      "options": [
        "1. 保護(ほご)メガネ",
        "2. 保護(ほご)ヘルメット",
        "3. 防塵(ぼうじん)マスク",
        "4. シールド面(めん)付き(つ)きヘルメット"
      ],
      "answer": 3,
      "vi": "Mũ bảo hiểm có tấm chắn (shield) bảo vệ toàn bộ khuôn mặt (**顔(かお)全体(ぜんたい)**) được tích hợp (**一体(いったい)になっている**) thành một khối được gọi là gì?",
      "explain": "Đó là **シールド面(めん)付き(つき)ヘルメット (Mũ bảo hiểm có tấm chắn)**. Đây là loại mũ bảo hiểm có thêm tấm chắn nhựa trong suốt (**シールド**) có thể nâng lên hạ xuống để bảo vệ mắt và mặt khỏi bụi, mảnh vỡ khi làm việc.",
      "tip": "💡 Nhớ: **シールド面(めん)付き(つき)** (có tấm chắn mặt) + **ヘルメット** (Mũ bảo hiểm) = Đúng như mô tả."
    },
    {
      "q": "問35.ブロック積(つ)み作業(さぎょう)で使用(しよう)する道具(どうぐ)は何(なに)か。【115】",
      "options": [
        "1. くさび緊結式(きんけつしき)足場(あしば)",
        "2. こて",
        "3. シノ ♡",
        "4. ボルシン"
      ],
      "answer": 1,
      "vi": "Dụng cụ được sử dụng trong công việc xếp/xây gạch block (**ブロック積(つ)み作業(さぎょう)**) là gì?",
      "explain": "Trong công việc xây gạch block, **こて (Bay/Cái trát)** là dụng cụ chính được sử dụng để trải vữa (mortar), cắt vữa, và hoàn thiện các mối nối (joint) giữa các viên gạch.",
      "tip": "💡 Nhớ: Xây gạch (**ブロック積(つ)み(つみ)**) = Phải dùng **こて (Bay)** để trát vữa."
    },
    {
      "q": "問36　写真の工具（こうぐ）の名前（なまえ）はどれか。【116】",
      "options": [
        "1．仮枠（かりわく）ハンマー",
        "2．クロスローラー",
        "3．げんのう",
        "4．せっとう"
      ],
      "answer": 2,
      "vi": "Tên của dụng cụ trong hình là gì?",
      "explain": "Đây là **げんのう（玄能）**, loại búa cán gỗ đầu thép nhỏ, được dùng để đóng đinh, chỉnh khớp, hoặc công việc lắp ván khuôn trong xây dựng.",
      "tip": "💡 Nhớ: Khi thấy búa nhỏ, đầu thép hai mặt, cán gỗ → đó là 玄能（げんのう）.",
      "img": "https://raw.githack.com/donghung94/beta2.0/main/mobile/assets/tokutei/36.png"
    },
    {
      "q": "問37　このドーナツの部品（ぶひん）は何（なに）に使（つか）うか。【107} ",
      "options": [
        "1．柱（はしら）・梁（はり）・壁筋（かべすじ）のかぶり厚（あつ）さを確保（かくほ）する",
        "2．床筋（ゆかすじ）のかぶり厚（あつ）さを確保（かくほ）する",
        "3．鉄筋（てっきん）と型枠（かたわく）のすき間（ま）を確保（かくほ）する",
        "4．怪我（けが）を防止（ぼうし）するため"
      ],
      "answer": 0,
      "vi": "Bộ phận hình tròn (**ドーナツ**) này dùng để làm gì?",
      "explain": "Bộ phận **Donut (ドーナツ)** này là một loại **Spacer (Chặn kê)**, được sử dụng để giữ khoảng cách giữa **cốt thép (鉄筋)** và **ván khuôn (型枠)**, nhằm mục đích **確保（かくほ）する (Đảm bảo)** **かぶり厚（あつ）さ (Chiều dày lớp bê tông bảo vệ)** cho các cấu kiện thẳng đứng hoặc mặt bên, như **柱（はしら）(Cột), 梁（はり）(Dầm), và 壁筋（かべすじ）(Thép tường)**.",
      "tip": "💡 Mẹo nhớ: **ドーナツ** (Dạng hình tròn) dùng để bảo vệ lớp bê tông cho cấu kiện **thẳng đứng/mặt đứng** (Cột, Dầm, Tường).",
      "img": "https://raw.githack.com/donghung94/beta2.0/main/mobile/assets/tokutei/0000.png"
    },
    {
      "q": "問38　どんな工事（こうじ）か。【175】",
      "options": [
        "1．吹付（ふきつ）ウレタン工事（こうじ）",
        "2．アスファルトシート防水（ぼうすい）接着（せっちゃく）工法（こうほう）",
        "3．タイル貼（は）り工事（こうじ）",
        "4．塗装（とそう）工事（こうじ）"
      ],
      "answer": 1,
      "vi": "Đây là loại công trình gì?",
      "explain": "Công nhân đang thi công **アスファルトシート防水工法（ぼうすいこうほう）**, tức là chống thấm bằng màng nhựa đường dán nóng. Phương pháp này được dùng để chống thấm mái và sàn bê tông.",
      "tip": "💡 Nhớ: Thấy cuộn màng đen trải trên mái → đó là chống thấm bằng màng nhựa đường (アスファルトシート防水)（ぼうすい）.",
      "img": "https://raw.githack.com/donghung94/beta2.0/main/mobile/assets/tokutei/1111.png"
    },
    {
      "q": "問39　建設業(けんせつぎょう)における「三大(さんだい)災害(さいがい)」は何(なん)か。【179】",
      "options": [
        "1．墜落(ついらく)・転落(てんらく)、建設(けんせつ)機械(きかい)・クレーンなど災害(さいがい)、崩壊(ほうかい)・倒壊(とうかい)災害(さいがい)",
        "2．感電(かんでん)、墜落(ついらく)・転落(てんらく)、崩壊(ほうかい)・倒壊(とうかい)災害(さいがい)",
        "3．火災(かさい)、墜落(ついらく)・転落(てんらく)、建設(けんせつ)機械(きかい)・クレーンなど災害(さいがい)",
        "4．漏電(ろうでん)、墜落(ついらく)・転落(てんらく)、崩壊(ほうかい)・倒壊(とうかい)災害(さいがい)"
      ],
      "answer": 0,
      "vi": "Trong ngành xây dựng, **Ba Loại Tai nạn Lớn (三大災害)(さんだい) là gì?",
      "explain": "Ba loại tai nạn phổ biến và nghiêm trọng nhất (chiếm tỷ lệ lớn) trong ngành xây dựng là: **墜落・転落 (Ngã từ trên cao)**, **建設機械・クレーン (Tai nạn do Máy xây dựng/Cần cẩu)**, và **崩壊・倒壊 (Sập đổ/Đổ nát)**. (Lưu ý: Điện giật tuy nguy hiểm nhưng không nằm trong nhóm 'Tam đại' về số lượng vụ việc so với máy móc).",
      "tip": "💡 Nhớ: **Ngã (墜落)(ついらく)** + **Máy 、建設(けんせつ)機械(きかい)+ **Sập 崩壊(ほうかい)・倒壊(とうかい)災害(さいがい)."
    },
    {
      "q": "問40　新入（しんにゅう）者（しゃ）安全（あんぜん）衛生（えいせい）教育（きょういく）の実施（じっし）は、労働（ろうどう）安全（あんぜん）衛生（えいせい）規則（きそく）として定（さだ）められている。相応（ふさわ）しくないものはどれか。【187】",
      "options": [
        "1．作業（さぎょう）開始（かいし）時間（じかん）の点検（てんけん）に関（かん）すること",
        "2．作業（さぎょう）順（じゅん）に関（かん）すること",
        "3．整理（せいり）・整頓（せいとん）及（およ）び清潔（せいけつ）の保持（ほじ）に関（かん）すること",
        "4．賃金（ちんぎん）に関（かん）すること"
      ],
      "answer": 3,
      "vi": "Trong quy định an toàn vệ sinh lao động, nội dung nào **không phù hợp** khi đào tạo an toàn cho người mới?",
      "explain": "Theo Luật an toàn vệ sinh lao động, nội dung huấn luyện cho người mới **không bao gồm vấn đề tiền lương（賃金）**, mà chỉ bao gồm các nội dung liên quan đến an toàn, vệ sinh, quy trình và trật tự công việc.",
      "tip": "💡 Mẹo nhớ: Đào tạo an toàn = nói về an toàn lao động, không nói về tiền lương → chọn **賃金（ちんぎん）**."
    },
    {
      "q": "問41　以下（いか）の部材（ぶざい）は何（なに）か。【108} ",
      "options": [
        "1．PSリンク",
        "2．外観（がいかん）測定用（そくていよう）器具（きぐ）",
        "3．引（ひ）っぱり試験器（しけんき）",
        "4．超音波探傷器（ちょうおんぱ たんしょうき）"
      ],
      "answer": 1,
      "vi": "Bộ phận trong hình là gì?",
      "explain": "Đây là **外観（がいかん）測定用（そくていよう）器具（きぐ） (Gaikan Sokuteiyō Kigu - Dụng cụ đo kiểm tra ngoại quan)**. Dụng cụ này dùng để đo đạc và kiểm tra kích thước, khoảng cách và sự chính xác của việc lắp đặt cốt thép.",
      "tip": "💡 Mẹo nhớ: Hình dạng giống thước đo dùng để kiểm tra chi tiết cốt thép → **外観測定用器具**.",
      "img": "https://raw.githack.com/donghung94/beta2.0/main/mobile/assets/tokutei/0001.png"
    },
    {
      "q": "問42　これはどんな金具（かなぐ）か。【142} ",
      "options": [
        "1．シャックル",
        "2．ワイヤロープ",
        "3．チェーンブロック",
        "4．ジャッキー"
      ],
      "answer": 0,
      "vi": "Đây là loại **phụ kiện kim loại (金具)** nào?",
      "explain": "Đây là **シャックル（Shakkuru - Shackle)**. Đây là một loại phụ kiện kim loại hình chữ U có chốt vặn ngang, chuyên dùng để nối dây cáp, xích hoặc các vật nặng khác nhau trong công tác cẩu và nâng hạ.",
      "tip": "💡 Mẹo nhớ: Hình chữ U + chốt vặn → **シャックル** (Shackle).",
      "img": "https://raw.githack.com/donghung94/beta2.0/main/mobile/assets/tokutei/0002.png"
    },
    {
      "q": "問43　この道具（どうぐ）は何（なに）というか。【135】",
      "options": [
        "1．ベンチ",
        "2．はさみ",
        "3．カッターナイフ",
        "4．くい切（き）り"
      ],
      "answer": 3,
      "vi": "Dụng cụ trong hình gọi là gì?",
      "explain": "Đây là **くい切り（くいきり）**, một loại kìm chuyên dùng để **cắt đầu đinh hoặc dây kim loại nhỏ**, thường được sử dụng trong thi công lắp đặt thép, ván khuôn, hoặc làm sạch đầu thép sau khi buộc.",
      "tip": "💡 Mẹo nhớ: くい切り = 'cắt đầu đinh' → phần miệng phẳng, cắt sát bề mặt.",
      "img": "https://raw.githack.com/donghung94/beta2.0/main/mobile/assets/tokutei/0004.png"
    },
    {
      "q": "問44　酸素（さんそ）とアセチレンガスを同時（どうじ）に 開閉（かいへい）できるようにした器具（きぐ）は何（なに）か。",
      "options": [
        "1．電動式（でんどうしき）加圧（かあつ）装置（そうち）",
        "2．エコバルブ",
        "3．クランプ",
        "4．バーナー"
      ],
      "answer": 1,
      "vi": "Thiết bị nào có thể đóng mở khí oxy và axetylen cùng lúc?",
      "explain": "Đáp án đúng là **エコバルブ（eco valve）**, một thiết bị an toàn được thiết kế để có thể **mở và đóng đồng thời khí oxy và khí axetylen**, giúp ngăn ngừa cháy nổ hoặc rò rỉ khí trong quá trình hàn cắt kim loại.",
      "tip": "💡 Mẹo nhớ: 'eco' = tiết kiệm + an toàn → thiết bị điều phối hai bình khí cùng lúc."
    },
    {
      "q": "問45　小型（こがた）の望遠鏡（ぼうえんきょう）を支（ささ）える視点（してん）を基点（きてん）として上下（じょうげ）方向（ほうこう）、水平（すいへい）方向（ほうこう）の角度（かくど）を測定（そくてい）する機器（きき）です。正（ただ）しいものを選（えら）べ。【133} ",
      "options": [
        "1．トランシット",
        "2．レベル",
        "3．レーザーレベル",
        "4．トータルステーション"
      ],
      "answer": 0,
      "vi": "Đây là thiết bị sử dụng **kính viễn vọng nhỏ (小型の望遠鏡)** làm điểm nhìn tham chiếu để **đo (測定)** **góc (角度)** theo hướng **ngang (水平方向)** và hướng **thẳng đứng (上下方向)**. Chọn thiết bị đúng.",
      "explain": "Thiết bị dùng để **đo góc ngang và góc đứng** bằng kính viễn vọng (không đo khoảng cách bằng laser) chính là **トランシット (Toranshitto - Máy kinh vĩ/Theodolite)**. Trong xây dựng, máy này được dùng để định vị các điểm và xác định phương hướng. **トータルステーション (Total Station)** là phiên bản hiện đại hơn, có thể đo cả khoảng cách.",
      "tip": "💡 Nhớ: Đo **角度** (Góc) **上(じょう)下(げ)** (Đứng) và **水平(すいへい)** (Ngang) → **トランシット** .",
      "img": "https://raw.githack.com/donghung94/beta2.0/main/mobile/assets/tokutei/45.png"
    },
    {
      "q": "問47　二本（にほん）の金属棒（きんぞくぼう）を蝶番（ちょうつがい）でつないだ形（かたち）をして、熱（ねっ）した鉄（てつ）などをつかむための鉄製（てっせい）の工具（こうぐ）は何（なに）か。",
      "options": [
        "1．溶接棒（ようせつぼう）",
        "2．石筆（せきひつ）",
        "3．やっとこ",
        "4．ポンチ"
      ],
      "answer": 2,
      "vi": "Dụng cụ bằng kim loại, gồm hai thanh nối bằng bản lề để kẹp sắt nung nóng, gọi là gì?",
      "explain": "Đáp án là **やっとこ**, kìm sắt chuyên dùng để **gắp hoặc giữ vật kim loại khi đang nung nóng** trong quá trình rèn, hàn hoặc tạo hình.",
      "tip": "💡 Mẹo nhớ: やっとこ = kìm kẹp kim loại nóng."
    },
    {
      "q": "問48　鉄筋（てっきん）の端面（たんめん）の加工（かこう）はどんな機械（きかい）を使用（しよう）するか。【156} ",
      "options": [
        "1．サンダー",
        "2．鉄筋（てっきん）ベンダー",
        "3．鉄筋（てっきん）冷間（れいかん）直角（ちょっかく）切断機（せつだんき）",
        "4．高速（こうそく）切断機（せつだんき）"
      ],
      "answer": 2,
      "vi": "**Gia công (加工)** **đầu mút (端面)** của **thép thanh (鉄筋)** dùng loại máy nào?",
      "explain": "Để **gia công đầu mút (端面)** của thanh thép (thường trong công tác **hàn nối thép**), cần đảm bảo mặt cắt phải **vuông góc (直角)**. Do đó, người ta sử dụng **鉄筋（てっきん）冷間（れいかん）直角（ちょっかく）切断機（せつだんき） (Máy cắt lạnh vuông góc thanh thép)**. Máy này giúp cắt thanh thép một cách chính xác và không làm thay đổi tính chất vật lý của thép (cắt lạnh - 冷間), tạo ra mặt cắt lý tưởng để nối.",
      "tip": "💡 Nhớ: Gia công **端面** (đầu mút/mặt cắt) → Cần **直角** (vuông góc) → **鉄筋冷間直角切断機** ."
    },
    {
      "q": "問49　土台（どだい）・梁（はり）・たけなどの水平（すいへい）部材（ぶざい）と垂直（すいちょく）部材（ぶざい）の柱（はしら）を組（く）み合わせて、「筋交（すじか）い」と呼（よ）ばれる斜（なな）めの部材（ぶざい）で建物（たてもの）の全体（ぜんたい）の強度（きょうど）を出（だ）す工法（こうほう）は何（なに）というか。【163】",
      "options": [
        "1．軸組（じくぐ）み工法（こうほう）",
        "2．ツーバイフォー工法（こうほう）",
        "3．枠組（わくぐ）み壁（かべ）工法（こうほう）",
        "4．枠組（わくぐ）み足場（あしば）"
      ],
      "answer": 0,
      "vi": "Phương pháp thi công kết hợp cột, dầm và thanh chéo gọi là gì?",
      "explain": "Đây là 軸組（じくぐ）み工法（こうほう）, phương pháp thi công truyền thống của Nhật, dùng **cột, dầm và thanh chéo 「筋交（すじか）い」 để tăng độ vững của khung nhà.",
      "tip": "💡 Mẹo nhớ: 軸 = trục → 軸組（じくぐ）み = khung trục chính của ngôi nhà."
    },
    {
      "q": "問50　板金(ばんきん)溶接(ようせつ)で一番(いちばん)使用(しよう)されているのは、どの溶接(ようせつ)方法(ほうほう)か。【168】",
      "options": [
        "1．ガス圧接(あっせつ)",
        "2．アーク溶接(ようせつ)",
        "3．融接(ゆうせつ)法(ほう)",
        "4．ろう接(せつ)"
      ],
      "answer": 2,
      "vi": "Phương pháp hàn nào được sử dụng phổ biến nhất trong **hàn kim loại tấm (板金溶接)**?",
      "explain": "Trong hàn kim loại tấm (板金溶接), phương pháp được sử dụng rộng rãi nhất là các kỹ thuật dựa trên **融接(ゆうせつ)法(ほう) (Yūsetsu Hō - Phương pháp Nóng chảy)**, trong đó có **アーク溶接(ようせつ)** (Hàn hồ quang) và **ガス溶接** (Hàn khí). Tuy nhiên, **融接(ゆうせつ)法(ほう)** là thuật ngữ tổng quát chỉ việc làm nóng chảy kim loại cơ bản tại điểm nối để tạo ra mối hàn. Cả hàn hồ quang (Arc) và hàn khí (Gas) đều thuộc phương pháp này và phổ biến trong hàn kim loại tấm.",
      "tip": "💡 Nhớ: **板金(ばんきん)** (Kim loại tấm) $\rightarrow$ Hàn bằng cách làm **nóng chảy** $\rightarrow$ **融接(ゆうせつ)法(ほう)** ."
    },
    {
      "q": "問51　はく離（り）して落（お）ちることは何（なん）というか。【168】",
      "options": [
        "1．はく離（り）",
        "2．はく落（らく）",
        "3．はく崩（ほう）",
        "4．はく飛（ひ）"
      ],
      "answer": 1,
      "vi": "Hiện tượng bong tróc và rơi xuống của vật liệu gọi là gì?",
      "explain": "Đó là **はく落（はくらく）**, chỉ hiện tượng lớp vật liệu (như sơn, gạch, bê tông phủ) bị bong và rơi xuống do yếu kết dính.",
      "tip": "💡 Nhớ: 落（らく） = rơi → はく落 = bong tróc và rơi xuống."
    },
    {
      "q": "問52　このマークの名前(なまえ)はどれか。【191】",
      "options": [
        "1．安全(あんぜん)マーク",
        "2．緑(みどり)十字(じゅうじ)",
        "3．安全(あんぜん)第一(だいいち)",
        "4．安全(あんぜん)衛生(えいせい)旗(き)"
      ],
      "answer": 1,
      "vi": "Tên của **biểu tượng (マーク)** này là gì?",
      "explain": "Đây là **緑(みどり)十字(じゅうじ) (Midori Jūji - Thập tự xanh)**. Đây là biểu tượng phổ biến nhất tại Nhật Bản để biểu thị **an toàn (安全)** và **vệ sinh (衛生)**. Nó thường được sử dụng trên cờ, mũ bảo hộ, và các biển báo an toàn.",
      "tip": "💡 Nhớ: Hình dấu thập màu **xanh lá (緑)** → **緑(みどり)十字(じゅうじ)**.",
      "img": "https://raw.githack.com/donghung94/beta2.0/main/mobile/assets/tokutei/0031.png"
    },
    {
      "q": "問53　土間配筋（どまはいきん）の順（じゅん）を正（ただ）しいものを選（えら）べ。【155} ",
      "options": [
        "1．主筋（しゅきん）の配筋（はいきん）→配力筋（はいりょくきん）の配筋（はいきん）→スペースの設置（せっち）",
        "2．スペースの設置（せっち）→主筋（しゅきん）の配筋（はいきん）→配力筋（はいりょくきん）の配筋（はいきん）",
        "3．配力筋（はいりょくきん）の配筋（はいきん）→スペースの設置（せっち）→主筋（しゅきん）の配筋（はいきん）",
        "4．主筋（しゅきん）の配筋（はいきん）→スペースの設置（せっち）→配力筋（はいりょくきん）の配筋（はいきん）"
      ],
      "answer": 0,
      "vi": "Hãy chọn trình tự đúng khi bố trí **thép sàn (土間配筋)**.",
      "explain": "Trình tự đúng là **主筋（しゅきん）の配筋（はいきん）→配力筋（はいりょくきん）の配筋（はいきん）→スペースの設置（せっち）**. Nghĩa là: lắp thép chính (chủ lực) trước → sau đó lắp thép phụ (phân phối lực) → và cuối cùng là đặt **Space (Spacer)** để đảm bảo chiều dày lớp bảo vệ và khoảng cách giữa hai lớp thép (nếu là thép hai lớp).",
      "tip": "💡 Mẹo nhớ: **Thép Chính** → **Thép Phụ** → **Spacer**."
    },
    {
      "q": "問54　指示（しじ）内容（ないよう）がはっきり伝（つた）えないために起（お）こるヒューマンエラーは何（なに）か。【73】",
      "options": [
        "1．連絡（れんらく）不足（ぶそく）",
        "2．不注意（ふちゅうい）",
        "3．集団（しゅうだん）欠陥（けっかん）",
        "4．経験（けいけん）不足（ぶそく）"
      ],
      "answer": 0,
      "vi": "Do nội dung chỉ thị không được truyền đạt rõ ràng gây ra lỗi con người là gì?",
      "explain": "Đó là **連絡不足（れんらくぶそく）** – thiếu thông tin liên lạc. Khi chỉ thị không rõ ràng, dễ dẫn đến hiểu nhầm và sai sót trong thi công.",
      "tip": "💡 Mẹo nhớ: ‘れんらく不足’ = liên lạc thiếu → dẫn đến nhầm lẫn."
    },
    {
      "q": "問55　長い柄（え）の先（さき）に平（ひら）らな金属製（きんぞくせい）の板（いた）がついており、上（うえ）から突（つ）いてアスファルトなどを締固（しめかた）めるために使（つか）います。【131】",
      "options": [
        "1．タンパー",
        "2．剣（けん）スコップ",
        "3．たこ",
        "4．レーキ"
      ],
      "answer": 0,
      "vi": "Dụng cụ có cán dài, đầu phẳng bằng kim loại, dùng để nén chặt bề mặt nhựa đường hoặc đất là gì?",
      "explain": "Đó là **タンパー（tamper）**, một dụng cụ nén thủ công dùng trong thi công nền hoặc trải nhựa đường.",
      "tip": "💡 Mẹo nhớ: タンパー = 'tamper' (đầm tay, nén bề mặt phẳng)."
    },
    {
      "q": "問56. 地面(じめん)をついて深(ふか)い穴(あな)を掘(ほ)ることでができるスコップは何(なに)か。【131} ",
      "options": [
        "1. 剣(けん)スコップ",
        "2. 角(かく)スコップ",
        "3. ダブルスコップ",
        "4. たこ"
      ],
      "answer": 2,
      "vi": "Xẻng nào có thể dùng để **chọc (つく)** xuống mặt đất và **đào (ほる)** một cái hố **sâu (ふかい)**?",
      "explain": "Dụng cụ chuyên dụng để đào các hố **sâu (深(ふか)い)** và **hẹp (細(ほそ)い)**, thường dùng để chôn cọc hoặc lắp đặt đường ống, là **ダブルスコップ (Daburu Sukoppu - Xẻng đôi hay còn gọi là Xẻng đào hố)** . Nó hoạt động bằng cách chọc xuống đất và sau đó kẹp đất lại để đưa lên.",
      "tip": "💡 Nhớ: **深(ふか)い穴(あな)を掘(ほ)る** (Đào hố sâu) → **ダブルスコップ** (Xẻng đôi).",
      "img": "https://raw.githack.com/donghung94/beta2.0/main/mobile/assets/tokutei/056.png"
    },
    {
      "q": "問57　急（きゅう）に驚（おどろ）いたり慌（あわ）てることで、とっさに不安全（ふあんぜん）行動（こうどう）や不適切（ふてきせつ）な指示（しじ）行動（こうどう）をとることが起（お）こりやすくなるヒューマンエラーは何（なに）か。【74】",
      "options": [
        "1．心身（しんしん）の機能（きのう）低下（ていか）",
        "2．疲労（ひろう）",
        "3．意識（いしき）の低下（ていか）",
        "4．パニック"
      ],
      "answer": 3,
      "vi": "Khi hoảng loạn hoặc giật mình, dễ xảy ra hành vi mất an toàn — loại lỗi con người này được gọi là gì?",
      "explain": "Đáp án đúng là **パニック（hoảng loạn）**. Khi con người bị bất ngờ hoặc lo sợ, họ dễ hành động sai hoặc ra lệnh sai, gây ra tai nạn lao động.",
      "tip": "💡 Mẹo nhớ: パニック = panic = mất bình tĩnh → dễ hành động nguy hiểm."
    },
    {
      "q": "問59　施工（せこう）する構造物（こうぞうぶつ）や部材（ぶざい）の位置（いち）や高さ（たかさ）を施工（せこう）現場（げんば）にマァキングする作業（さぎょう）は何（なに）か。【149】",
      "options": [
        "1．ケガキ",
        "2．墨出（すみだ）し",
        "3．重量（じゅうりょう）測定（そくてい）",
        "4．切断（せつだん）"
      ],
      "answer": 1,
      "vi": "Công việc đánh dấu vị trí và độ cao của kết cấu hoặc bộ phận tại công trường được gọi là gì?",
      "explain": "Đáp án đúng là **墨出し（すみだし）**, là quá trình vẽ dấu (marking) trực tiếp lên mặt bằng để chỉ vị trí, độ cao, hướng lắp đặt của kết cấu.",
      "tip": "💡 Mẹo nhớ: 墨（すみ）= mực → 出（だ）す = vẽ ra → 墨出（すみだ）し = vẽ dấu xác định vị trí."
    },
    {
      "q": "問60　鉄筋（てっきん）工事（こうじ）について、不適切（ふてきせつ）なものを選（えら）べ。【153】",
      "options": [
        "1．コンクリートは圧縮力（あっしゅくりょく）に弱（よわ）いため、鉄筋（てっきん）を入れて補（おぎな）うことができる",
        "2．鉄筋（てっきん）は酸化（さんか）して錆（さ）びる性質（せいしつ）がある",
        "3．コンクリートはアルカリ性（せい）なので、鉄筋（てっきん）を錆（さび）から守（まも）る",
        "4．コンクリートの性質（せいしつ）は圧縮（あっしゅく）する力（ちから）には強（つよ）いが、引（ひ）っ張（ぱ）られる力（ちから）には弱（よわ）い"
      ],
      "answer": 0,
      "vi": "Trong các mô tả sau về công việc thi công cốt thép, điều nào không đúng?",
      "explain": " Thực tế, **bê tông mạnh về lực nén 圧縮力（あっしゅくりょく） nhưng yếu khi kéo. Vì vậy mới cần thêm cốt thép để tăng khả năng chịu kéo.",
      "tip": "💡 Mẹo nhớ: コンクリート = mạnh khi bị nén 圧縮力（あっしゅくりょく）, yếu khi bị kéo 引（ひ）っ張（ぱ）."
    }
  ]
};

window.TOKUTEI_SETS["g2_3"] = {
  "group": "g2",
  "title": "Thực hành nhóm 2 – (問61〜問90)",
  "questions": [
    {
      "q": "問61. どんな工事(こうじ)か。【160】",
      "options": [
        "1. 掘削(くっさく)工事(こうじ)",
        "2. 杭(くい)工事(こうじ)",
        "3. 法面(のりめん)工事(こうじ)",
        "4. 打設(だせつ)工事(こうじ)"
      ],
      "answer": 3,
      "vi": "Đây là loại công trình nào?",
      "explain": "Bức ảnh chụp máy bơm bê tông đang đổ bê tông vào khuôn. Công việc đổ bê tông tươi vào khuôn (formwork) được gọi là **打設(だせつ)工事(こうじ) (Công việc đổ/đặt bê tông)**.",
      "tip": "💡 Nhớ: Nhìn thấy ống bơm bê tông → **打設(だせつ)工事(こうじ)**.",
      "img": "https://raw.githack.com/donghung94/beta2.0/main/mobile/assets/tokutei/61.png"
    },
    {
      "q": "問62. 柱(はしら)が垂直(すいちょく)を保(たも)ち、軸組(じくぐ)みの変形(へんけい)を防(ふせ)ぐために、斜(なな)めに材料(ざいりょう)を取(と)り付(つ)けるのは何(なん)というか。【163】",
      "options": [
        "1. 下(した)さん",
        "2. 中(なか)さん",
        "3. 手(て)すり",
        "4. 仮筋(かりすじ)交(か)い"
      ],
      "answer": 3,
      "vi": "Vật liệu được lắp đặt chéo (**斜(なな)めに**) để giữ cho cột (**柱(はしら)**) thẳng đứng (**垂直(すいちょく)**) và ngăn biến dạng (**変形(へんけい)**) khung trục (**軸組(じくぐ)み**) được gọi là gì?",
      "explain": "Vật liệu được lắp đặt theo đường chéo (**斜(なな)めに**) nhằm mục đích ổn định và chống biến dạng khung được gọi là **筋交い(すじかい)** (Thanh giằng chéo). Trong xây dựng tạm thời, nó được gọi là **仮筋(かりすじ)交(か)い (Giằng chéo tạm thời)**.",
      "tip": "💡 Nhớ: Vật liệu **斜(なな)めに** (chéo) để chống biến dạng (**変形(へんけい)**) → **筋交い(すじかい)** (Giằng chéo)."
    },
    {
      "q": "問63. どんな工事(こうじ)か。【170】",
      "options": [
        "1. コーナーテープによる出隅(でずみ)の処理(しょり)",
        "2. パテ処理(しょり)",
        "3. 吹付(ふきつけ)ウレタン工事(こうじ)",
        "4. 防音(ぼうおん)シート張(は)り"
      ],
      "answer": 0,
      "vi": "Đây là loại công trình nào?",
      "explain": "Bức ảnh mô tả công nhân đang cố định một góc tường bằng băng keo góc (corner tape). Công việc này được gọi là **コーナーテープによる出隅(でずみ)の処理(しょり) (Xử lý góc ngoài bằng băng keo góc)**, nhằm gia cố góc trước khi trát vữa **パテ (putty)**.",
      "tip": "💡 Nhớ: Dán băng keo vào góc lồi (**出隅(でずみ)**) → **コーナーテープ (Corner Tape)**.",
      "img": "https://raw.githack.com/donghung94/beta2.0/main/mobile/assets/tokutei/63.png"
    },
    {
      "q": "問65. 三大(さんだい)災害(さいがい)の中(なか)でも特(とく)に多(おお)いのは高所(こうしょ)での作業(さぎょう)中(ちゅう)に起(お)こる労働(ろうどう)災害(さいがい)は何(なに)というか【179】",
      "options": [
        "1. 墜落(ついらく)・転落(てんらく)",
        "2. 交通(こうつう)事故(じこ)",
        "3. 転倒(てんとう)",
        "4. 飛来(ひらい)"
      ],
      "answer": 0,
      "vi": "Trong số **三大災害(さんだいさいがい) (Ba tai nạn lớn)**, loại tai nạn lao động (**労働災害(ろうどうさいがい)**) nào xảy ra nhiều nhất khi làm việc ở nơi **cao (**高所(こうしょ)**)?",
      "explain": "Tai nạn phổ biến nhất và nghiêm trọng nhất khi làm việc trên cao là **墜落(ついらく)・転落(てんらく) (Ngã/Rơi từ trên cao)**. Đây là một trong những nguyên nhân hàng đầu gây ra các tai nạn chết người trong ngành xây dựng.",
      "tip": "💡 Nhớ: **高所(こうしょ)** (Nơi cao) = **墜落(ついらく)** (**Ngã cao**)."
    },
    {
      "q": "問66.セパレーターに取り付け、型枠(かたわく)の間隔(かんかく)を一定(いってい)に保(たも)ち、通(とお)りをよくして、コンクリートの側圧(そくあつ)による型枠(かたわく)の変形(へんけい)を防(ふせ)ぐ部材(ぶざい)は何(なに)か。正(ただ)しいものをー(い)つ選(えら)べ。【111】",
      "options": [
        "1. 端太角(はしだいかく)",
        "2. フォームタイ",
        "3. コンパネ",
        "4. 丸セパレーター"
      ],
      "answer": 1,
      "vi": "Bộ phận nào được gắn vào thanh **セパレーター (separator)**, giúp giữ khoảng cách ván khuôn (**型枠(かたわく)**) ổn định, cải thiện độ thẳng và ngăn ván khuôn biến dạng (**変形(へんけい)**) do áp lực bên (**側圧(そくあつ)**) của bê tông?",
      "explain": "Đó là **フォームタイ (Form Tie/Tăng đơ ván khuôn)**. **フォームタイ** là bộ phận kẹp bên ngoài (thường dùng đai ốc cánh) giúp cố định thanh **セパレーター** và nẹp (**端太角(はしだいかく)**) lại với nhau, chống lại áp lực bên (**側圧(そくあつ)**) của bê tông để ngăn ván khuôn bị biến dạng (**変形(へんけい)**).",
      "tip": "💡 Nhớ: Chức năng **保(たも)ち (giữ)** khoảng cách và chống **変形(へんけい) (biến dạng)** → **フォームタイ (Form Tie)**."
    },
    {
      "q": "問67. この青(あお)い部分(ぶぶん)は何(なに)と言(い)うか。【109】",
      "options": [
        "1. エコバルブ",
        "2. クランプ",
        "3. バーナー",
        "4. 電動式(でんどうしき)加圧(かあつ)装置(そうち)"
      ],
      "answer": 0,
      "vi": "Bộ phận màu xanh (**青(あお)い部分(ぶぶん)**) này được gọi là gì?",
      "explain": "Bộ phận màu xanh là van điều khiển luồng khí **Oxy** trên mỏ hàn/cắt. Trong các bài kiểm tra an toàn, loại van tiết kiệm và điều chỉnh khí này thường được gọi là **エコバルブ (Eco Valve)**.",
      "tip": "💡 Nhớ: Trên mỏ hàn, van điều khiển khí thường là **バルブ (Valve)**. **青(あお)い(aoi)** (Màu xanh) thường chỉ khí **Oxy**.",
      "img": "https://raw.githack.com/donghung94/beta2.0/main/mobile/assets/tokutei/67.png"
    },
    {
      "q": "問68.高層(こうそう)ビルなどの建築(けんちく)で使(つか)われるクレーンは以下(レか)の種類(しゅるい)から選(えら)べ。【100】",
      "options": [
        "1. タワークレーン",
        "2. ラフタークレーン",
        "3. クローラークレーン",
        "4. トラッククレーン"
      ],
      "answer": 0,
      "vi": "Loại cần cẩu nào được sử dụng trong việc xây dựng các tòa nhà **cao tầng (**高層(こうそう)ビル**)**?",
      "explain": "Đó là **タワークレーン (Cần cẩu tháp)** . Loại cần cẩu này được thiết kế đặc biệt để vươn tới độ cao lớn và vận chuyển vật liệu lên các công trình **cao tầng (**高層(こうそう)ビル**)**.",
      "tip": "💡 Nhớ: Xây **高層(こうそう)ビル (Tòa nhà cao tầng)** = Phải dùng **タワークレーン (Cần cẩu tháp)**."
    },
    {
      "q": "問69. ___ とは、門型(もんがた)の建枠(たてわく)を中心(ちゅうしん)にジャッキ・筋交(すじかい)・鋼製(こうせい)布板(ぬのいた)などの基本(きほん)部材(ぶざい)を組(く)み立(た)てるタイプか。正(ただ)しいものを___に記入(きにゅう)しなさい。【102】",
      "options": [
        "1. くさび緊結式(きんけつしき)足場(あしば)",
        "2. 枠組(わくぐ)み足場(あしば)",
        "3. 単管(たんかん)足場(あしば)",
        "4. 橋梁(きょうりょう)足場(あしば)"
      ],
      "answer": 1,
      "vi": "Hãy điền vào chỗ trống: ___ là loại giàn giáo được lắp ráp bằng các bộ phận cơ bản như chân kích, thanh giằng chéo (**筋交(すじかい)**), và sàn thao tác bằng thép (**鋼製布板(こうせいぬのいた)**), tập trung vào khung đứng có hình **cổng (**門型(もんがた)**)?",
      "explain": "Giàn giáo sử dụng khung đứng có hình **cổng (**門型(もんがた)**)** làm thành phần chính được gọi là **枠組(わくぐ)み足場(あしば) (Giàn giáo khung)** .",
      "tip": "💡 Nhớ: **門型(もんがた)** (Hình cổng/chữ H) = **枠組(わくぐ)み足場(あしば)** (Giàn giáo khung)."
    },
    {
      "q": "問70. これは何(なに)か。【121】",
      "options": [
        "1. さしがね",
        "2. 金(かな)のこ",
        "3. 板金(ばんきん)ばさみ",
        "4. 鉄筋(てっきん)ベンダー"
      ],
      "answer": 1,
      "vi": "Đây là cái gì?",
      "explain": "Đây là **金(かな)のこ (Cưa kim loại/Hacksaw)**. Đây là loại cưa cầm tay được thiết kế để cắt các vật liệu cứng như kim loại (**金(かな)**) hoặc nhựa cứng.",
      "tip": "💡 Nhớ: Cưa có khung chữ C lớn và lưỡi mỏng dùng để cắt kim loại → **金(かな)のこ**.",
      "img": "https://raw.githack.com/donghung94/beta2.0/main/mobile/assets/tokutei/70.png"
    },
    {
      "q": "問71. 内蔵(ないぞう)されているハンマーで、打撃力(だげきりょく)を加(くわ)えながらネジを締(し)めることができる電動(でんどう)ドライバーは何(なに)と言(い)うか。【128】",
      "options": [
        "1. ドリルドライバー",
        "2. インパクトドライバー",
        "3. 丸(まる)のこ",
        "4. ディスクグラインダー"
      ],
      "answer": 1,
      "vi": "Máy vặn vít điện (**電動(でんどう)ドライバー**) nào có thể siết vít (**ネジを締(し)める**) trong khi tạo lực đập (**打撃力(だげきりょく)**) bằng búa (**ハンマー**) được tích hợp (**内蔵(ないぞう)**) bên trong?",
      "explain": "Máy vặn vít hoạt động bằng cách tạo ra lực đập (**打撃力(だげきりょく)**) xoay chiều, giúp siết chặt vít vào vật liệu cứng, được gọi là **インパクトドライバー (Impact Driver)**.",
      "tip": "💡 Nhớ: Có **ハンマー (Búa)** và **打撃力(だげきりょく) (Lực đập)** → **インパクトドライバー (Impact Driver)**."
    },
    {
      "q": "問72. 杭(くい)を打(う)ち込(こ)むときに使(つか)う大型(おおがた)の木槌(きづち)は何(なに)か。【136】",
      "options": [
        "1. 大(おお)ハンマー",
        "2. 木槌(きづち)",
        "3. かけや",
        "4. ゴムハンマー"
      ],
      "answer": 2,
      "vi": "Loại búa gỗ lớn (**大型(おおがた)の木槌(きづち)**) nào được sử dụng khi đóng cọc (**杭(くい)**)?",
      "explain": "Đó là **かけや (Kakeya)** . Đây là loại búa gỗ lớn, nặng, thường dùng hai tay để đóng các vật liệu lớn như cọc, cột, hoặc nêm vào đất.",
      "tip": "💡 Nhớ: **大型(おおがた)の木槌(きづち)** (Búa gỗ lớn) để đóng **杭(くい)** (cọc) → **かけや**."
    },
    {
      "q": "問73. 金属(きんぞく)のさび落(お)としや塗装(とそう)はがし、やすりの目詰(めづ)まりをとる工具(こうぐ)は何(なに)と言(い)うか。正(ただ)しいものをーつ選(えら)べ。【137】",
      "options": [
        "1. はけ",
        "2. ほうき",
        "3. ワイヤーロープ",
        "4. ワイヤーブラシ"
      ],
      "answer": 3,
      "vi": "Dụng cụ nào được dùng để loại bỏ gỉ sét (**さび落(お)とし**) hoặc sơn (**塗装(とそう)はがし**) khỏi kim loại (**金属(きんぞく)**), hoặc loại bỏ tắc nghẽn trên dũa (**やすりの目詰(めづ)まり**)?",
      "explain": "Đó là **ワイヤーブラシ (Bàn chải thép)** . Đây là dụng cụ có lông làm bằng dây thép cứng, chuyên dùng để cọ rửa, loại bỏ gỉ sét, sơn cũ hoặc cặn bẩn cứng đầu trên bề mặt kim loại.",
      "tip": "💡 Nhớ: Loại bỏ **さび (gỉ)** trên kim loại → **ワイヤーブラシ**."
    },
    {
      "q": "問74. 施工(せこう)管理(かんり)における工程(こうてい)管理(かんり)は何(なに)か。【147】",
      "options": [
        "1. 発注者(はっちゅうしゃ)が要求(ようきゅう)する品質(ひんしつ)を十分(じゅうぶん)に満(み)たす建設物(けんせつぶつ)を作(つく)るための管理(かんり)のこと",
        "2. 実施(じっし)工程(こうてい)に遅(おく)れが生(しょう)じない工期(こうき)内(ない)完成(かんせい)を目(め)ざした管理(かんり)のこと",
        "3. 工事(こうじ)による騒音(そうおん)や振動(しんどう)、水質(すいしつ)汚濁(おだく)など環境(かんきょう)に与(あた)える影響(えいきょう)を最小限(さいしょうげん)にする管理(かんり)のこと",
        "4. 工事(こうじ)に関係(かんけい)する材料費(ざいりょうひ)、労務費(ろうむひ)、現場(げんば)経費(けいひ)などの、工事(こうじ)予算(よさん)を超(こ)えないように管理(かんり)する"
      ],
      "answer": 1,
      "vi": "Quản lý công đoạn (**工程(こうてい)管理(かんり)**) trong quản lý thi công (**施工(せこう)管理(かんり)**) là gì?",
      "explain": "Quản lý công đoạn là **quản lý nhằm mục đích hoàn thành công trình trong thời hạn quy định (工期内完成) để công đoạn thực hiện không bị chậm trễ (遅れが生じない)**. (Tương ứng với Lựa chọn 2)",
      "tip": "💡 Nhớ: **工程(こうてい)管理(かんり)** = Quản lý **工期(こうき)** (Thời hạn thi công)."
    },
    {
      "q": "問75. 住宅(じゅうたく)の壁(かべ)や床(ゆか)、レンガやブロックを積(つ)み上(あ)げるときの接着剤(せっちゃくざい)などに使(つか)われる建築(けんちく)材料(ざいりょう)は何(なに)か【117】",
      "options": [
        "1. モルタル",
        "2. 漆喰(しっくい)",
        "3. ノロ",
        "4. 硬質(こうしつ)ウレタンフォーム"
      ],
      "answer": 0,
      "vi": "Vật liệu xây dựng nào được sử dụng làm keo kết dính (**接着剤(せっちゃくざい)**) khi xây tường (**壁(かべ)**), sàn (**床(ゆか)**) nhà, hoặc khi xếp gạch (レンガやブロックを積(つ)み上(あ)げる)?",
      "explain": "Đó là **モルタル (Vữa/Mortar)**. Vữa là hỗn hợp của xi măng, cát và nước, được dùng làm chất kết dính khi xây gạch, khối bê tông và trát tường.",
      "tip": "💡 Nhớ: Dùng để **積(つ)み上(あ)げる (xây lên)** gạch block/レンガ → **モルタル**."
    },
    {
      "q": "問76. セメントに水(みず)と砂(すな)をまぜ合わせて作(つく)る建築(けんちく)材料(ざいりょう)を何(なに)か。【117】",
      "options": [
        "1. モルタル",
        "2. 漆喰(しっくい)",
        "3. コンクリート",
        "4. アスファルト"
      ],
      "answer": 0,
      "vi": "Vật liệu xây dựng được tạo ra bằng cách trộn xi măng (**セメント**), nước (**水(みず)**) và cát (**砂(すな)**) là gì?",
      "explain": "Hỗn hợp của xi măng, nước và cát được gọi là **モルタル (Vữa/Mortar)**. Nếu thêm sỏi/đá dăm (**砂利(じゃり)**) vào hỗn hợp này, ta sẽ có **コンクリート (Bê tông)**.",
      "tip": "💡 Nhớ: Xi măng + Cát + Nước = **モルタル (Vữa)**."
    },
    {
      "q": "問77. 写真(しゃしん)の道具(どうぐ)の名前(なまえ)はどれか。【105】",
      "options": [
        "1. スパナ",
        "2. ボルシン",
        "3. シノ",
        "4. めがねレンチ"
      ],
      "answer": 0,
      "vi": "Tên của dụng cụ trong ảnh là gì?",
      "explain": "Dụng cụ trong ảnh là loại cờ lê có đầu mở (**オープンエンド**), được gọi là **スパナ (Spanner/Cờ lê)**. Cờ lê có đầu kín (khóa vòng) được gọi là **めがねレンチ (Megane renchi)**.",
      "tip": "💡 Nhớ: Cờ lê đầu mở → **スパナ**.",
      "img": "https://raw.githack.com/donghung94/beta2.0/main/mobile/assets/tokutei/77.png"
    },
    {
      "q": "問78. はしごについて、適切(てきせつ)なものを選(えら)べ。",
      "options": [
        "1. 立(た)てかけたときの角度(かくど)は約(やく) 75度(ど)とする",
        "2. 天板(てんばん)に座(すわ)ったり、天板(てんばん)の上(うえ)に立(た)ったりする",
        "3. 天板(てんばん)の左右(さゆう)にまたぐように乗(の)る",
        "4. 支(ささ)える補助者(ほじょしゃ)がいなくてもいい"
      ],
      "answer": 0,
      "vi": "Chọn phát biểu thích hợp (**適切(てきせつ)**) về thang (**はしご**).",
      "explain": "Quy tắc an toàn khi sử dụng thang (**はしご**) là: **立(た)てかけたときの角度(かくど)は約(やく) 75度(ど)とする (Góc nghiêng khi đặt thang phải là khoảng 75 độ)** để đảm bảo độ ổn định và an toàn khi leo. Các lựa chọn 2, 3 và 4 đều là hành vi nguy hiểm, không an toàn.",
      "tip": "💡 Nhớ: Góc đặt thang (**はしご**) an toàn = **75度(ど)**."
    },
    {
      "q": "問79. 鉄筋(てっきん)のかぶりを確保(かくほ)するための部材(ぶざい)は何(なに)か。【107】",
      "options": [
        "1. ドーナツ",
        "2. キャラメル",
        "3. スペーサー",
        "4. プラキャップ"
      ],
      "answer": 2,
      "vi": "Bộ phận nào dùng để đảm bảo độ dày lớp bảo vệ bê tông (**かぶり**) của thép (**鉄筋(てっきん)**)?",
      "explain": "Đó là **スペーサー (Spacer)**. **スペーサー** (cục kê) được đặt giữa cốt thép và ván khuôn để giữ khoảng cách cố định, nhằm đảm bảo lớp bảo vệ bê tông (**かぶり**) đạt tiêu chuẩn, ngăn cốt thép bị ăn mòn.",
      "tip": "💡 Nhớ: Đảm bảo lớp **かぶり** (Bảo vệ bê tông) → **スペーサー** (Cục kê)."
    },
    {
      "q": "問80. 圧接(あっせつ)部(ぶ)を熱(ねっ)するための炎(ほのお)を出(だ)す部分(ぶぶん)は何(なに)か。正(ただ)しいものをー(い)つ選(えら)べ。【109】",
      "options": [
        "1. 吹管(ふきかん)",
        "2. 高圧(こうあつ)ホース",
        "3. バーナー",
        "4. ラムシリンダー"
      ],
      "answer": 2,
      "vi": "Bộ phận tạo ra lửa (**炎(ほのお)**) để nung nóng phần nối áp lực (**圧接部(あっせつぶ)**) là gì?",
      "explain": "Bộ phận tạo ra ngọn lửa để nung nóng (hàn áp lực) là **バーナー (Burner)** . **バーナー** là đầu vòi phun giúp trộn khí và tạo ra ngọn lửa cần thiết. (Lưu ý: **吹管(ふきかん)** là tên gọi chung của toàn bộ thiết bị thổi/hàn khí.)",
      "tip": "💡 Nhớ: Bộ phận **đốt lửa/phun lửa** (**炎(ほのお)**) → **バーナー**."
    },
    {
      "q": "問81. 青(あお)い部分(ぶぶん)は何(なに)か。【111】",
      "options": [
        "1. 単管(たんかん)パイプ",
        "2. 固定(こてい)ベース",
        "3. フォームタイ",
        "4. Pコン"
      ],
      "answer": 2,
      "vi": "Bộ phận màu xanh (**青(あお)い部分(ぶぶん)**) là gì?",
      "explain": "Bộ phận màu xanh được khoanh tròn là **フォームタイ (Form Tie)** . Nó là bộ phận dùng để siết chặt ván khuôn (**型枠(かたわく)**) với thanh **セパレーター** bên trong để chống lại áp lực bê tông (**側圧(そくあつ)**).",
      "tip": "💡 Nhớ: Bộ phận kẹp bên ngoài ván khuôn, dùng để siết → **フォームタイ**.",
      "img": "https://raw.githack.com/donghung94/beta2.0/main/mobile/assets/tokutei/81.png"
    },
    {
      "q": "問82. とび工事(こうじ)における不適切(ふてきせつ)なものを選(えら)べ。",
      "options": [
        "1. 動(うご)きやすいため、ヘルメットと安全(あんぜん)靴(ぐつ)を着用(ちゃくよう)しない",
        "2. 足場(あしば)が倒(たお)れないように、建物(たてもの)と壁(かべ)つなぎで固定(こてい)する",
        "3. 足場(あしば)全体(ぜんたい)が垂直(すいちょく)・水平(すいへい)を保(たも)つように、大(おお)きな筋交(すじか)いを取(と)り付(つ)けます",
        "4. 地面(じめん)の上(うえ)に敷(し)いた敷(しき)板(いた)に、ベース金具(かなぐ)を釘(くぎ)で固定(こてい)する"
      ],
      "answer": 0,
      "vi": "Chọn câu **không thích hợp (**不適切(ふてきせつ)**) về công việc giàn giáo/thợ cốp pha (**とび工事(こうじ)**).",
      "explain": "Phát biểu **không thích hợp** là Lựa chọn 1. **Không đội mũ bảo hiểm (ヘルメット)** và **không đi giày an toàn (安全靴)** là hành vi vi phạm nghiêm trọng quy tắc an toàn. Trang bị bảo hộ là **bắt buộc (必須)** trong **とび工事(こうじ)**.",
      "tip": "💡 Nhớ: **とび工事(こうじ)** luôn phải **着用(ちゃくよう) (Mặc/Đội)** đầy đủ trang bị bảo hộ."
    },
    {
      "q": "問83. 基準台(きじゅんだい)に対(たい)して簡単(かんたん)な平行(へいこう)な線(せん)を引(ひ)くことができる大工(だいく)道具(どうぐ)は何(なに)か。【116】",
      "options": [
        "1. きり",
        "2. かんな",
        "3. 筋毛引(すじけび)き",
        "4. のみ"
      ],
      "answer": 2,
      "vi": "Dụng cụ thợ mộc (**大工(だいく)道具(どうぐ)**) nào có thể dễ dàng kẻ các đường **song song (**平行(へいこう)**) với một mặt chuẩn (**基準台(きじゅんだい)**)?",
      "explain": "Đó là **筋毛引(すじけび)き (Dụng cụ kẻ song song/Marking Gauge)** . Dụng cụ này dùng để kẻ một hoặc hai đường thẳng song song với cạnh của vật liệu bằng cách trượt phần chặn dọc theo cạnh đó.",
      "tip": "💡 Nhớ: Dụng cụ kẻ **平行(へいこう)な線(せん)** (Đường song song) → **筋毛引(すじけび)き**."
    },
    {
      "q": "問84. この道具(どうぐ)は何(なん)というのか。【116】",
      "options": [
        "1. きり",
        "2. 千枚通(せんまいどお)し",
        "3. げんのう",
        "4. はけ"
      ],
      "answer": 0,
      "vi": "Dụng cụ này được gọi là gì?",
      "explain": "Dụng cụ trong ảnh là **きり (Mũi dùi/Awl)** . Nó được sử dụng để tạo lỗ nhỏ hoặc đánh dấu vị trí trước khi đóng đinh hoặc vặn vít.",
      "tip": "💡 Nhớ: Dụng cụ có đầu kim nhọn, dùng để dùi lỗ → **きり**.",
      "img": "https://raw.githack.com/donghung94/beta2.0/main/mobile/assets/tokutei/84.png"
    },
    {
      "q": "問85. 以下(いか)の写真(しゃしん)のこては首(くび)の部分(ぶぶん)が枝(えだ)と平(ひら)たい面(めん)の根元(ねもと)について、細(こま)かい部分(ぶぶん)の作業(さぎょう)に適(てき)しています。何(なん)というこてか。【117】",
      "options": [
        "1. 中塗(なかぬ)りごて",
        "2. 柳刃(やなぎば)ごて",
        "3. ブロックごて",
        "4. 切(き)り付(き)きごて"
      ],
      "answer": 1,
      "vi": "Cái bay (**こて**) trong ảnh có phần cổ (**首(くび)**) phẳng so với gốc tay cầm (**根元(ねもと)**), phù hợp cho các công việc **chi tiết (**細(こま)かい部分(ぶぶん)の作業(さぎょう)**). Đó là loại bay gì?",
      "explain": "Đó là **柳刃(やなぎば)ごて (Bay lưỡi liễu)**. Bay này có lưỡi dài và hẹp, giống như lưỡi dao liễu, thường được sử dụng cho các công việc trát vữa thạch cao hoặc sơn trát ở các khu vực hẹp hoặc cần sự tinh tế, rất thích hợp cho công việc **chi tiết (**細(こま)かい部分(ぶぶん)の作業(さぎょう)**).",
      "tip": "💡 Nhớ: Bay có lưỡi hẹp, dùng cho **細(こま)かい部分(ぶぶん) (Phần chi tiết)** → **柳刃(やなぎば)ごて**.",
      "img": "https://raw.githack.com/donghung94/beta2.0/main/mobile/assets/tokutei/85.png"
    },
    {
      "q": "問86. コンクリートは、圧縮(あっしゅく)する力(ちから)には強(つよ)いですが、(......) 力には弱(よわ)いという性質(せいしつ)があります【153】",
      "options": [
        "1. 内力(ないりょく)",
        "2. 引張(ひっぱ)り",
        "3. 遠心力(えんしんりょく)",
        "4. 曲(ま)げ力"
      ],
      "answer": 1,
      "vi": "Bê tông (**コンクリート**) có đặc tính mạnh với lực nén (**圧縮(あっしゅく)する力(ちから)**) nhưng yếu với lực (......).",
      "explain": "Bê tông rất mạnh với lực nén, nhưng lại rất yếu với **引張(ひっぱ)り (Lực kéo/Lực căng)** . Đây là lý do thép cốt (**鉄筋(てっきん)**) được thêm vào để tạo thành bê tông cốt thép, chịu được lực kéo.",
      "tip": "💡 Nhớ: Bê tông **強(つよ)い** (Mạnh) với **圧縮(あっしゅく)** (Nén), **弱(よわ)い** (Yếu) với **引張(ひっぱ)り** (Kéo)."
    },
    {
      "q": "問87. 以下(いか)の器具(きぐ)について、不適切(ふてきせつ)なものを選(えら)べ。",
      "options": [
        "1. 合板(ごうはん)などの材料(ざいりょう)をまっすぐに切(き)るための電動(でんどう)工具(こうぐ)",
        "2. 使用(しよう)前(まえ)には、安全(あんぜん)カバーを外(はず)す",
        "3. 丸(まる)のこガイド定規(じょうぎ)をつけて、材料(ざいりょう)をまっすぐに切(き)ることができる",
        "4. 集(しゅう)塵(じん)丸(まる)のこは粉塵(ふんじん)を集(あつ)めながら、切断(せつだん)できる"
      ],
      "answer": 1,
      "vi": "Chọn câu **không thích hợp (**不適切(ふてきせつ)**) về dụng cụ sau [Cưa đĩa/Cưa tròn].",
      "explain": "Phát biểu **không thích hợp** là Lựa chọn 2. **Tuyệt đối không được tháo rời nắp an toàn (**安全(あんぜん)カバーを外(はず)す**) trước khi sử dụng**. Nắp an toàn là bộ phận bắt buộc để bảo vệ người dùng khỏi lưỡi cưa đang quay.",
      "tip": "💡 Nhớ: **安全(あんぜん)カバー (Nắp an toàn)** → **Không bao giờ được tháo ra**.",
      "img": "https://raw.githack.com/donghung94/beta2.0/main/mobile/assets/tokutei/87.png"
    },
    {
      "q": "問88. 解体(かいたい)工事(こうじ)を行(おこな)う前(まえ)に何(なに)をしなければならないか。【177】",
      "options": [
        "1. 足場(あしば)の設置(せっち)・防音(ぼうおん)パネルの取(と)り付(つ)け",
        "2. ライフラインが止(と)めていることを確認(かくにん)する",
        "3. 建物(たてもの)内部(ないぶ)の解体(かいたい)",
        "4. 重機(じゅうき)用(よう)サポートの取(と)り付(つ)け"
      ],
      "answer": 1,
      "vi": "Cần phải làm gì **trước khi** tiến hành công việc tháo dỡ (**解体工事(かいたいこうじ)**)?",
      "explain": "Điều quan trọng và bắt buộc nhất phải làm trước khi bắt đầu tháo dỡ là **Kiểm tra xem các đường dây tiện ích (**ライフライン**) như điện, nước, gas đã được ngắt hoàn toàn hay chưa (**確認(かくにん)する**).** Đây là bước an toàn cơ bản để ngăn ngừa các tai nạn nghiêm trọng (cháy nổ, điện giật).",
      "tip": "💡 Nhớ: **解体工事(かいたいこうじ)** (Tháo dỡ) → An toàn tuyệt đối phải **確認(かくにん) (Kiểm tra)** **ライフライン (Đường tiện ích)** đã ngắt chưa."
    },
    {
      "q": "問89. 切断(せつだん)用(よう)の砥石(とちいし)を回転(かいてん)させて、金属(きんぞく)管(かん)や鉄筋(てっきん)、軽量(けいりょう)鉄骨(てっこつ)などを切断(せつだん)する電動(でんどう)工具(こうぐ)は、何(なに)と言(い)うか。【130】",
      "options": [
        "1. 集塵機(しゅうじんき)",
        "2. 高速(こうそく)切断機(せつだんき)",
        "3. レシプロソー",
        "4. くぎ打(う)ち機"
      ],
      "answer": 1,
      "vi": "Dụng cụ điện (**電動工具**) nào dùng để cắt (**切断**) ống kim loại (**金属管**), thép cốt (**鉄筋**) hoặc khung thép nhẹ bằng cách xoay (**回転**) một **đĩa mài/đá cắt (**砥石**)?",
      "explain": "Đó là **高速(こうそく)切断機(せつだんき) (Máy cắt tốc độ cao/High-speed cutting machine)** . Dụng cụ này sử dụng đĩa cắt bằng vật liệu mài mòn để cắt nhanh kim loại.",
      "tip": "💡 Nhớ: **回転(かいてん)** (Xoay) **砥石(とちいし)** (Đá cắt) để cắt **金属(きんぞく)** (Kim loại) → **高速(こうそく)切断機(せつだんき)**."
    },
    {
      "q": "問90. 地面(じめん)を固(かた)めるための機械(きかい)は何(なに)か。【131】",
      "options": [
        "1. レーキ",
        "2. ランマ",
        "3. たこ",
        "4. バイブレータ"
      ],
      "answer": 1,
      "vi": "Máy móc (**機械**) được sử dụng để làm **chắc (**固(かた)める**) mặt đất (**地面**) là gì?",
      "explain": "Đó là **ランマ (Rammer/Máy đầm)** . Máy này tạo ra lực tác động thẳng đứng mạnh mẽ để nén và làm chắc đất, đặc biệt là trong các khu vực hẹp hoặc xung quanh cọc. (Lưu ý: **バイブレータ** dùng để đầm **bê tông**).",
      "tip": "💡 Nhớ: Máy làm **chắc đất (**地面(じめん)を固(かた)める**) → **ランマ**."
    }
  ]
};

window.TOKUTEI_SETS["g2_4"] = {
  "group": "g2",
  "title": "Thực hành nhóm 2 – (問91〜問130)",
  "questions": [
    {
      "q": "問91. この写真(しゃしん)の工具(こうぐ)は、何(なに)か。【135】",
      "options": [
        "1. 下(さ)げ振(ふ)り",
        "2. さしがね",
        "3. スランプ試験(しけん)工具(こうぐ)",
        "4. コンベックス"
      ],
      "answer": 2,
      "vi": "Dụng cụ 工具(こうぐ) trong ảnh này là gì?",
      "explain": "Dụng cụ trong ảnh là **スランプ試験(しけん)工具(こうぐ) (Dụng cụ thí nghiệm độ sụt bê tông/Slump test tool)** . Thí nghiệm này dùng để đo độ sụt của bê tông tươi (**生(なま)コンクリート**) nhằm kiểm tra tính công tác (độ dẻo/lưu động) của nó.",
      "tip": "💡 Nhớ: Dụng cụ đo độ sụt của bê tông tươi → **スランプ試験(しけん)工具(こうぐ)**.",
      "img": "https://raw.githack.com/donghung94/beta2.0/main/mobile/assets/tokutei/91.png"
    },
    {
      "q": "問92. 高所(こうしょ)からの人体(じんたい)や資材(しざい)の落下(らっか)を回避(かいひ)するためのネットは何か。【140} ",
      "options": [
        "1. 飛散(ひさん)防止(ぼうし)ネット",
        "2. 垂直(すいちょく)養生(ようじょう)ネット",
        "3. 水平(すいへい)養生(ようじょう)ネット",
        "4. 養生(ようじょう)用(よう)ポリシート"
      ],
      "answer": 2,
      "vi": "Lưới nào được sử dụng để tránh **sự rơi (**落下(らっか)**) của người (**人体(じんたい)**) và vật liệu (**資材(しざい)**) từ nơi cao (**高所(こうしょ)**)?",
      "explain": "Đó là **水平(すいへい)養生(ようじょう)ネット (Lưới bảo hộ ngang/Horizontal protection net)** . Lưới này được căng ngang bên dưới khu vực làm việc trên cao để hứng đỡ người hoặc vật liệu rơi xuống, đảm bảo an toàn.",
      "tip": "💡 Nhớ: Lưới hứng đỡ **người rơi** → **水平(すいへい)養生(ようじょう)ネット** (Ngang)."
    },
    {
      "q": "問93. 材料(ざいりょう)を大(おお)きさによって仕分(しわ)け(け)る(る)ことができる網(あみ)がついた道具(どうぐ)は何(なに)というか。【139} ",
      "options": [
        "1. ふるい",
        "2. トロ箱(ばこ)",
        "3. 水平(すいへい)養生(ようじょう)ネット",
        "4. かくはん機(き)"
      ],
      "answer": 0,
      "vi": "Dụng cụ có lưới 網(あみ) có thể phân loại vật liệu 材料(ざいりょう) theo **kích thước 大(おお)きさ được gọi là gì?",
      "explain": "Đó là **ふるい (Sàng/Rây/Sieve)** . Sàng được sử dụng để lọc và phân loại các vật liệu hạt như cát, sỏi theo kích cỡ, đảm bảo chất lượng của vữa hoặc bê tông.",
      "tip": "💡 Nhớ: Dụng cụ có **網(あみ) (Lưới)** dùng để **仕分(しわ)け(Phân loại)** theo **大(おお)きさ(Kích thước)** → **ふるい**."
    },
    {
      "q": "問94. コンクリートの性質(せいしつ)は何(なに)ですか。正(ただ)しいものを1つ選(えら)べ【153】",
      "options": [
        "1. 圧縮(あしゅく)する力(ちから)が強(つよ)いですが、引(ひ)っ張(ぱ)られる力(ちから)が弱(よわ)いです",
        "2. 圧縮(あしゅく)する力(ちから)が弱(よわ)いですが、引(ひ)っ張(ぱ)られる力(ちから)が強(つよ)いです",
        "3. 錆(さび)びやすいです",
        "4. 圧縮(あしゅく)する力(ちから)も引(ひ)っ張(ぱ)られる力(ちから)も強(つよ)いです"
      ],
      "answer": 0,
      "vi": "Đặc tính (**性質**) của bê tông (**コンクリート**) là gì? Chọn câu đúng nhất.",
      "explain": "Đặc tính đúng của bê tông là **mạnh với lực nén (**圧縮(あしゅく)する力(ちから)が強(つよ)い**) nhưng **yếu với lực kéo (**引(ひ)っ張(ぱ)られる力(ちから)が弱(よわ)い**)** . Đây là lý do cần phải dùng thép cốt (鉄筋) để làm bê tông cốt thép (RC).",
      "tip": "💡 Nhớ: Bê tông **強(つよ)い** (Mạnh) với **圧縮(あしゅく)** (Nén), **弱(よわ)い** (Yếu) với **引張(ひっぱ)り** (Kéo)."
    },
    {
      "q": "問97. 赤(あか)い部分(ぶぶん)は何(なに)というか。【112】",
      "options": [
        "1. パイプサポート",
        "2. 梁底(はりそこ)型枠(かたわく)",
        "3. トンボ端太(ばた)",
        "4. 端木(ばたかく)"
      ],
      "answer": 2,
      "vi": "Bộ phận **màu đỏ (**赤(あか)い部分(ぶぶん)**) được gọi là gì?",
      "explain": "Bộ phận màu đỏ là **トンボ端太(ばた) (Mảnh gỗ/Thanh chặn tạm thời)** . Trong ngữ cảnh này, đây là mảnh gỗ được sử dụng để cố định các cạnh hoặc đầu của ván khuôn (**型枠**) để đảm bảo sự ổn định và hình dạng.",
      "tip": "💡 Nhớ: Khối gỗ ở góc để cố định **型枠** → **トンボ端太(ばた)**.",
      "img": "https://raw.githack.com/donghung94/beta2.0/main/mobile/assets/tokutei/97.png"
    },
    {
      "q": "問98. 圧接(あっせつ)部(ぶ)に超音波(ちょうおんぱ)をあてて、内部(ないぶ)の欠陥(けっかん)を検出(けんしゅつ)する検査(けんさ)装置(そうち)は何(なに)か。",
      "options": [
        "1. 超音波(ちょうおんぱ)探傷(たんしょう)器(き)",
        "2. 引(ひ)っぱり試験(しけん)器(き)",
        "3. PS リンク",
        "4. 外観(がいかん)測定(そくてい)用(よう)器具(きぐ)"
      ],
      "answer": 0,
      "vi": "Thiết bị kiểm tra (**検査装置**) nào sử dụng **sóng siêu âm (**超音波**) tác động lên mối hàn áp lực (**圧接部**) để phát hiện **khuyết tật (**欠陥**) bên trong?",
      "explain": "Đó là **超音波(ちょうおんぱ)探傷(たんしょう)器(き) (Máy dò khuyết tật bằng sóng siêu âm/Ultrasonic Flaw Detector)** . Thiết bị này sử dụng sóng siêu âm để kiểm tra chất lượng mối nối, đặc biệt là mối nối thép cốt (鉄筋の圧接).",
      "tip": "💡 Nhớ: **超音波(ちょうおんぱ)** (Sóng siêu âm) + **欠陥(けっかん)** (Khuyết tật) → **超音波(ちょうおんぱ)探傷(たんしょう)器(き)**."
    },
    {
      "q": "問99. 型枠(かたわく)を支(ささ)えるために使用(しよう)する部材(ぶざい)は何(なに)か。【113】",
      "options": [
        "1. スパナ",
        "2. ヘラ",
        "3. ホイールローダー",
        "4. 単管(たんかん)パイプ"
      ],
      "answer": 3,
      "vi": "Bộ phận (**部材**) được sử dụng để **chống đỡ (**支える**) ván khuôn (**型枠**) là gì?",
      "explain": "Đó là **単管(たんかん)パイプ (Ống thép đơn/Single pipe)** . Ống thép đơn là vật liệu cơ bản được dùng để lắp dựng giàn giáo hoặc hệ thống chống đỡ tạm thời (shoring) cho ván khuôn bê tông.",
      "tip": "💡 Nhớ: Bộ phận **支(ささ)える** (Chống đỡ) **型枠(かたわく)** (Ván khuôn) → **単管(たんかん)パイプ**."
    },
    {
      "q": "問100. 三大災害(さんだいさいがい)の中(なか)、転倒(てんとう)は何(なに)か",
      "options": [
        "1. 通路(つうろ)に物(もの)などをつまずくこと",
        "2. 屋根(やね)からおちること",
        "3. クレーンに接触(せっしょく)すること",
        "4. 高(たか)いところから、転落(てんらく)すること"
      ],
      "answer": 0,
      "vi": "Trong Ba thảm họa lớn (**三大災害**), **転倒 (**té, vấp, lật đổ**) là gì?",
      "explain": "**転倒 (Tentou - Té, vấp, ngã)** là tai nạn xảy ra khi **bị vấp hoặc trượt chân bởi vật thể trên lối đi (**通路に物などをつまずくこと**)**. Nó khác với **転落 (Tenraku - Rơi, ngã từ trên cao)**.",
      "tip": "💡 Nhớ: **転倒(てんとう)** (Té, vấp) → **つまずく** (Bị vấp, vướng chân) trên **通路(つうろ)** (Lối đi)."
    },
    {
      "q": "問101. 高(たか)さが一定(いってい)で、簡単(かんたん)に調整(ちょうせい)できるようにした型枠(かたわく)を何(なん)というか。【114】",
      "options": [
        "1. 単管(たんかん)パイプ",
        "2. フォームタイ回(まわ)し",
        "3. くさび緊結(きんけつ)式(しき)足場(あしば)",
        "4. ヘラ"
      ],
      "answer": 1,
      "vi": "Dụng cụ trong ảnh dùng để vặn/tháo **chốt ván khuôn** (**フォームタイ回し**). Dụng cụ này **không phải** là 'ván khuôn có thể dễ dàng điều chỉnh độ cao', mà là dụng cụ để làm việc với ván khuôn (**型枠**).",
      "explain": "Mặc dù câu hỏi miêu tả về ván khuôn có thể điều chỉnh độ cao, nhưng hình ảnh hiển thị một chiếc **cờ lê chuyên dụng**. Tên đúng của dụng cụ này trong xây dựng là **フォームタイ回(まわ)し (Cờ lê vặn chốt ván khuôn/Form Tie Wrench)** . Dụng cụ này dùng để siết chặt hoặc nới lỏng **Form Tie** (dây/thanh căng ngang) giữ cố định hai mặt ván khuôn.",
      "tip": "💡 Nhớ: Dụng cụ giống cờ lê/mỏ lết trong lắp đặt ván khuôn → **フォームタイ回(まわ)し**.",
      "img": "https://raw.githack.com/donghung94/beta2.0/main/mobile/assets/tokutei/0021.png"
    },
    {
      "q": "問102. 写真(しゃしん)の道具(どうぐ)の名前(なまえ)はどれか。",
      "options": [
        "1. 柳刃(やなぎば)ごて",
        "2. 中塗(なかぬ)りごて",
        "3. 面引(めんび)きごて",
        "4. レンガごて"
      ],
      "answer": 1,
      "vi": "Tên của dụng cụ (**道具**) trong ảnh là gì?",
      "explain": "Dụng cụ này là **中塗(なかぬ)りごて (Bay/Bàn xoa trát lớp giữa/Intermediate Coat Trowel)** . Mặc dù bay trát lớp giữa thường có hình chữ nhật rộng, bay này là một dạng **bay lá liễu (柳刃ごて)**, nhưng trong một số bài thi, nó được xếp vào loại **bay trát lớp giữa** để phân biệt với các loại bay chuyên dụng khác. Bay này dùng để trát vữa trong các khu vực hẹp hoặc để tạo hình chi tiết tinh xảo.",
      "tip": "💡 Nhớ: Bay có lưỡi **dài, nhọn** (thường là lá liễu) → Đáp án của bài thi này là **中塗(なかぬ)りごて**.",
      "img": "https://raw.githack.com/donghung94/beta2.0/main/mobile/assets/tokutei/102.png"
    },
    {
      "q": "問103. 床筋(ゆかきん)のかぶり厚(あつ)さを確保(かくほ)するために、床筋(ゆかきん)の下(した)に置(お)くサイコロ状(じょう)のモルタルブロックは何(なに)というか",
      "options": [
        "1. ドーナツ",
        "2. スペース",
        "3. キャラメル",
        "4. ブラキャップ"
      ],
      "answer": 2,
      "vi": "Khối **vữa/bê tông nhỏ hình xúc xắc** (**サイコロ状のモルタルブロック**) được đặt **dưới thép sàn (**床筋の下**) để đảm bảo **chiều dày lớp bảo vệ (**かぶり厚さ**) được gọi là gì?",
      "explain": "Đó là **キャラメル (Caramel Block)**. Đây là tên gọi phổ biến cho các **khối vữa hoặc bê tông** nhỏ (thường hình vuông hoặc tròn) dùng để kê cốt thép sàn (**床筋**) để đảm bảo lớp **bảo vệ cốt thép (かぶり厚さ)** đạt chuẩn trước khi đổ bê tông. Đáp án **スペース (Spacer)** (Vật kê) là tên gọi chung hơn, nhưng **キャラメル** là thuật ngữ cụ thể cho loại khối kê bằng vữa/bê tông này.",
      "tip": "💡 Nhớ: Khối vữa **サイコロ状** (Hình xúc xắc) để **kê thép sàn** → **キャラメル**."
    },
    {
      "q": "問104. 溶融(ようゆう) 亜鉛(あえん) メッキ鋼板(こうはん)に、合成(ごうせい) 樹脂(じゅし) 塗料(とりょう)を塗装(とそう)し焼(や)き付(つ)けた鋼板(こうはん)は何(なに)か。【121} ",
      "options": [
        "1. 塗装(とそう) 溶融(ようゆう) 亜鉛(あえん) メッキ鋼板(こうはん)",
        "2. 溶融(ようゆう) 亜鉛(あえん) メッキ鋼板(こうはん)",
        "3. 石膏(せっこう) ボード",
        "4. アルミ"
      ],
      "answer": 0,
      "vi": "Tấm thép nào được tạo ra bằng cách **sơn (**塗装**) và nung nóng (焼(や)き付(つ)けた) lớp sơn nhựa tổng hợp (**合成樹脂塗料**) lên **tấm thép mạ kẽm nhúng nóng (**溶融亜鉛メッキ鋼板**)?",
      "explain": "Đó là **塗装(とそう) 溶融(ようゆう) 亜鉛(あえん) メッキ鋼板(こうはん) (Tấm thép mạ kẽm nhúng nóng có sơn/Pre-painted Galvanized Steel)** . Đây là vật liệu mái hoặc vách kim loại phổ biến, kết hợp khả năng chống gỉ của lớp mạ kẽm và độ bền màu của lớp sơn nung.",
      "tip": "💡 Nhớ: **Sơn (塗装)** + **Mạ kẽm (亜鉛メッキ鋼板)** → **塗装溶融亜鉛メッキ鋼板**."
    },
    {
      "q": "問105. 鋼製(こうせい) 下地(したじ) において、垂直(すいちょく)に立(た)てる、間仕切(まじき)り 壁(かべ)用(よう)の柱(はしら)で、上(うえ)下(した)のランナーに差(さ)し込(こ)んだものは何(なに)か。【123} ",
      "options": [
        "1. スペーサー",
        "2. 振(ふ)れ止(ど)め",
        "3. スタッド",
        "4. ハンガー"
      ],
      "answer": 2,
      "vi": "Trong hệ thống khung thép (**鋼製下地**), **thanh cột (**柱**) được lắp đặt thẳng đứng (**垂直**) cho tường ngăn (**間仕切り壁**) và được lồng vào các thanh dẫn hướng trên và dưới (**上下のランナー**) được gọi là gì?",
      "explain": "Đó là **スタッド (Stud)** , tức là thanh đứng hay thanh cột trong hệ thống khung thép nhẹ (LGS) cho tường ngăn. Thanh đứng này được lắp cố định vào thanh dẫn hướng nằm ngang (**ランナー**).",
      "tip": "💡 Nhớ: Thanh **垂直** (thẳng đứng) của **間仕切り壁** (tường ngăn) được lồng vào **ランナー** (thanh ngang) → **スタッド**.",
      "img": "https://raw.githack.com/donghung94/beta2.0/main/mobile/assets/tokutei/105.png"
    },
    {
      "q": "問106. 1つの作業(さぎょう)に集中(しゅう-ちゅう)すると、周(まわ)りに対(たい)する注意力(ちゅう-い-りょく)が低下(てい-か)して、事故(じ-こ)につながるヒューマンエラーは、何(なに)か。",
      "options": [
        "1. 認知(にん-ち)ミス",
        "2. 経験(けい-けん)不足(ぶ-そく)",
        "3. 不注意(ふ-ちゅう-い)",
        "4. 近道(ちか-みち)行動(こう-どう)"
      ],
      "answer": 2,
      "vi": "Lỗi con người (Human Error) nào xảy ra khi **quá tập trung vào một công việc (**1つの作業に集中**) khiến khả năng chú ý đến xung quanh bị giảm sút (**周囲への注意力が低下**) và dẫn đến tai nạn?",
      "explain": "Đây được gọi là **不注意 (Fuchūi - Bất cẩn/Thiếu chú ý)**. Mặc dù sự tập trung quá mức (Fixation) là một dạng của Lỗi nhận thức (**認知ミス**), kết quả cuối cùng là người lao động trở nên thiếu chú ý đến môi trường xung quanh, đây là nguyên nhân tai nạn phổ biến nhất được phân loại là **不注意** trong các bài kiểm tra an toàn cơ bản.",
      "tip": "💡 Nhớ: **集中** (Tập trung) quá mức + **注意力低下** (Giảm chú ý) → **不注意** (Mất tập trung/Bất cẩn)."
    },
    {
      "q": "問107. 吊(つ)り ボルトに取(と)り 付(つ)けて、野縁(のぶち) 受(う)けを吊(つ)るための金具(かなぐ)は何(なん)と言(い)うか",
      "options": [
        "1. 野縁(のぶち)",
        "2. 吊(つ)りボルト",
        "3. 野縁(のぶち) 受(う)け",
        "4. ハンガー"
      ],
      "answer": 3,
      "vi": "Phụ kiện kim loại (**金具**) nào được gắn vào **thanh treo (**吊(つ)りボルト**) và dùng để **treo/giữ thanh chính (**野縁受(のぶちうけ) - runner) của trần nhà?",
      "explain": "Phụ kiện đó là **ハンガー (Hanger)** . Đây là bộ phận kết nối chính, chịu lực, dùng để nối thanh treo (**吊りボルト**) với thanh chính của khung trần (**野縁受け**).",
      "tip": "💡 Nhớ: Bộ phận **金具** (kim loại) dùng để **treo/giữ** thanh trần → **ハンガー**.",
      "img": "https://raw.githack.com/donghung94/beta2.0/main/mobile/assets/tokutei/107.png"
    },
    {
      "q": "問108. この写真(しゃしん)は何(なん)の工具(こうぐ)か。【124】",
      "options": [
        "1. 千枚(せんまい)通(どお)し",
        "2. コンパス",
        "3. きり",
        "4. ディバイダ"
      ],
      "answer": 0,
      "vi": "Dụng cụ trong ảnh này là gì?",
      "explain": "Đây là **千枚(せんまい)通(どお)し (Senmaidooshi)**, một loại dùi nhọn thường dùng để dùi lỗ trên giấy, vải hoặc đánh dấu trên gỗ/kim loại mỏng.",
      "tip": "💡 Nhớ: Cây kim nhọn có cán gỗ đơn giản dùng để đâm xuyên qua nhiều tờ giấy → **千枚(せんまい)通(どお)し**.",
      "img": "https://raw.githack.com/donghung94/beta2.0/main/mobile/assets/tokutei/108.png"
    },
    {
      "q": "問109. ワイヤロープやチェーンとつり荷(に)をつなぐための玉掛(たまかけ)用(よう)金具(かなぐ)はなんというか。【142} ",
      "options": [
        "1. ターンバックル",
        "2. ウインチ",
        "3. シャックル",
        "4. 台(だい) 付(つ)け用(よう)ロープ"
      ],
      "answer": 2,
      "vi": "Phụ kiện kim loại (**金具**) dùng để **móc (**玉掛) nối **dây cáp/xích (**ワイヤロープやチェーン) với **vật được cẩu (**つり荷) được gọi là gì?",
      "explain": "Đó là **シャックル (Shackle - Mã ní/Cùm)** . Mã ní là một loại phụ kiện kim loại hình chữ U hoặc Omega được khóa bằng chốt, dùng để kết nối cáp hoặc xích với tải trọng trong công việc cẩu hàng (Rigging).",
      "tip": "💡 Nhớ: Phụ kiện **nối cáp/xích với vật cẩu** → **シャックル** (Mã ní)."
    },
    {
      "q": "問110. 建地(たてじ)と梁(はり)の固定(こてい)方法(ほうほう)で柱(はしら)と梁(はり)を現場(げんば)で直接(ちょくせつ)接合(せつごう)する工法(こうほう)は何(なに)か【152】",
      "options": [
        "1. ブラケット",
        "2. ノンブラケット",
        "3. かぶり",
        "4. 壁(かべ)つなぎ"
      ],
      "answer": 1,
      "vi": "Phương pháp cố định giữa cột (**柱**(はしら) - post) và dầm (**梁**(はり) - beam) mà cột và dầm được **nối trực tiếp 直接(ちょくせつ)接合(せつごう) tại công trường 現場(げんば) được gọi là gì?",
      "explain": "Đó là **ノンブラケット (Non-Bracket - Không dùng giá đỡ/Phương pháp nối trực tiếp)**. Đây là phương pháp thi công mà cột và dầm được nối trực tiếp với nhau, không cần sử dụng **ブラケット (Bracket)** (giá đỡ) cho khớp nối chính, thường thông qua việc hàn hoặc các cơ chế khóa đặc biệt.",
      "tip": "💡 Nhớ: 直接(ちょくせつ)接合(せつごう) (Nối trực tiếp) → **ノンブラケット**."
    },
    {
      "q": "問111. 鉄筋(てっきん)継手(つぎて)工事(こうじ)の工程(こうてい)は最初(さいしょ)、何(なに)をするか。【156} ",
      "options": [
        "1. 鉄筋(てっきん)端面(たんめん)の加工(かこう)",
        "2. 加熱(かねつ)・加圧(かあつ)作業(さぎょう)",
        "3. 鉄筋(てっきん)端面(たんめん)の確認(かくにん)",
        "4. 検査(けんさ)"
      ],
      "answer": 2,
      "vi": "Bước đầu tiên (**最初**) trong quy trình thi công **mối nối thép  鉄筋(てっきん)継手(つぎて)工事(こうじ) là gì?",
      "explain": "Bước đầu tiên và quan trọng nhất trước khi tiến hành nối thép (thường là nối ép nhiệt hoặc nối hàn) là **鉄筋(てっきん)端面(たんめん)の確認(かくにん) (Kiểm tra mặt cắt/đầu thép)** . Việc này nhằm đảm bảo mặt cắt của hai thanh thép sạch sẽ, không có gỉ sét, dầu mỡ, và đủ độ phẳng/vuông góc để đảm bảo chất lượng mối nối.",
      "tip": "💡 Nhớ: 最初(さいしょ) (Đầu tiên) trong nối thép →確認(かくにん) (Kiểm tra) đầu thép."
    },
    {
      "q": "問112. 効率的(こうりつてき)に作業(さぎょう)を進(すす)めたいという気持(きも)ちから、本来(ほんらい)やるべき行動(こうどう)を省略(しょうりゃく)してしまうことによって起(お)こるヒューマンエラーは、何(なに)か。",
      "options": [
        "1. 連絡(れんらく)不足(ぶ-そく)",
        "2. 近道(ちかみち)行動(こうどう)",
        "3. パニック",
        "4. 慣(な)れによる手抜(てぬ)き"
      ],
      "answer": 1,
      "vi": "Lỗi con người (Human Error) nào xảy ra khi người lao động **bỏ qua (しょうりゃく)** những hành động đáng lẽ phải làm để **tiến hành công việc một cách hiệu quả (こうりつてき)**?",
      "explain": "Đây là **近道(ちかみち)行動(こうどう) (Chikamichi Kōdō - Hành động tắt/Đi đường tắt/Shortcuts)** . Đây là hành vi bỏ qua các bước an toàn hoặc quy trình chuẩn để tiết kiệm thời gian hoặc công sức, thường là nguyên nhân trực tiếp dẫn đến tai nạn. Nó xuất phát từ mong muốn tăng hiệu suất (**こうりつてき**) và dẫn đến việc **bỏ qua (しょうりゃく)** các bước an toàn.",
      "tip": "💡 Nhớ: **効率的(こうりつてき)** (Hiệu quả) + **省略(しょうりゃく)** (Bỏ qua hành động) → **近道行動(ちかみちこうどう)** (Hành động tắt)."
    },
    {
      "q": "問113. ガス圧接(あっせつ)工事(こうじ)について、該当(がいとう)しないものを選(えら)べ。【156} ",
      "options": [
        "1. 継手部分(つぎてぶぶん)は母材(ぼざい)の鉄筋(てっきん)より強度(きょうど)がさがる",
        "2. 加熱(かねつ)範囲(はんい)の目安(めやす)は鉄筋(てっきん)の直径(ちょっけい)の2倍(ばい)くらい",
        "3. 切断面(せつだんめん)の圧接(あっせつ)を行(おこな)う日(ひ)に直角(ちょっかく)切断機(せつだんき)を利用(りよう)する",
        "4. 鉄筋(てっきん)の接合面(せつごうめん)に汚(よご)れがないことを確認(かくにん)し、圧着器(あっちゃくき)にボトルで固定(こてい)する"
      ],
      "answer": 0,
      "vi": "Về công tác **nối ép khí gas (ガスあっせつこうじ)**, chọn điều **không đúng (がいとうしない)**.",
      "explain": "Điều **không đúng** là **継手部分(つぎてぶぶん)は母材(ぼざい)の鉄筋(てっきん)より強度(きょうど)がさがる** (Cường độ của mối nối thấp hơn thép nền). Tiêu chuẩn kỹ thuật yêu cầu cường độ của mối nối phải **bằng hoặc cao hơn** cường độ của thép nền (母材).",
      "tip": "💡 Nhớ: Cường độ (**きょうど**) mối nối **không được phép (さがる)** thấp hơn thép nền (**ぼざい**)."
    },
    {
      "q": "問114. 軸組(じくぐ)みの変形(へんけい)を防(ふせ)ぐために斜(なな)めに材料(ざいりょう)を取(と)り付(つ)ける部材(ぶざい)は何(なん)というか。【163】",
      "options": [
        "1. キャラメル",
        "2. スペーサー",
        "3. 手(て)すり",
        "4. 筋交(すじか)い"
      ],
      "answer": 3,
      "vi": "Bộ phận vật liệu **lắp đặt chéo (ななめ)** để ngăn chặn **biến dạng khung (じくぐみのへんけい)** được gọi là gì?",
      "explain": "Bộ phận được lắp đặt chéo (**ななめにざいりょうをとりつける**) để tăng cường độ cứng và ngăn chặn biến dạng của khung kết cấu (**じくぐみ**) được gọi là **筋交(すじか)い (Sujikai - Thanh giằng/Thanh chống chéo)** . Trong câu 62, đáp án là **仮筋交(かりすじか)い** (Thanh chống tạm thời), đây là một dạng của **筋交い** được dùng tạm thời. Đáp án 4 (**筋交い**) là tên gọi chung và chính xác nhất cho bộ phận này.",
      "tip": "💡 Nhớ: Bộ phận **chéo (ななめ)** chống **biến dạng (へんけい)** khung → **筋交(すじか)い** (Thanh giằng)."
    },
    {
      "q": "問115. 日本(にほん)の住宅(じゅうたく)や神社(じんじゃ)、寺(てら)などの屋根用(やねよう)の材料(ざいりょう)は何(なん)か。【165】",
      "options": [
        "1. 木材(もくざい)",
        "2. 板金(ばんきん)材(ざい)",
        "3. アスファルトシングル",
        "4. 粘土(ねんど)瓦(がわら)"
      ],
      "answer": 3,
      "vi": "Vật liệu lợp **mái (やねようのざいりょう)** được sử dụng cho các **nhà ở (じゅうたく)**, **đền thờ (じんじゃ)** và **chùa chiền (てら)** truyền thống ở Nhật Bản là gì?",
      "explain": "Vật liệu phổ biến và mang tính biểu tượng nhất được sử dụng cho mái nhà truyền thống, đặc biệt là đền thờ (**じんじゃ**) và chùa chiền (**てら**), là **粘土(ねんど)瓦(がわら) (Nendo Gawara - Ngói đất sét/Ngói men)** . Mặc dù mái nhà truyền thống cũng có thể dùng gỗ (**もくざい** - ván lợp), nhưng ngói đất sét là loại vật liệu phổ biến nhất được sử dụng trên các công trình lớn và nhà ở truyền thống.",
      "tip": "💡 Nhớ: Vật liệu lợp mái cho **神社(じんじゃ)・寺(てら)** (đền/chùa) → **粘土(ねんど)瓦(がわら)** (Ngói đất sét)."
    },
    {
      "q": "問116. 雪(ゆき)の多(おお)い地方(ちほう)では、雪止(ゆきど)めをして、屋根(やね)に積(つ)もった雪(ゆき)が下(した)に落(お)ちないようにする金具(かなぐ)は何(なん)と言(い)うか。【166】",
      "options": [
        "1. 雪止(ゆきど)め",
        "2. 雨(あま)どい",
        "3. 防水(ぼうすい)シート",
        "4. タイル"
      ],
      "answer": 0,
      "vi": "Ở những vùng có nhiều tuyết, loại móc kim loại nào được lắp trên mái nhà để ngăn tuyết tích tụ không bị rơi xuống dưới?",
      "explain": "**雪止(ゆきど)め (Yukidome)** là các linh kiện kim loại được lắp đặt trên mái nhà nhằm giữ tuyết lại, ngăn chặn việc tuyết rơi đột ngột xuống dưới gây nguy hiểm cho người đi đường hoặc làm hỏng máng nước. (Lưu ý: **雨(あま)どい** là máng xối, **防水(ぼうすい)シート** là tấm chống thấm).",
      "tip": "💡 Nhớ: **雪(ゆき)を止(と)める** (Dừng tuyết lại) → **雪止(ゆきど)め**."
    },
    {
      "q": "問117. どんな作業(さぎょう)か。【167} ",
      "options": [
        "1. 切断(せつだん) 作業(さぎょう)",
        "2. 曲(ま)げ作業(さぎょう)",
        "3. ケガキ作業(さぎょう)",
        "4. 溶接(ようせつ) 作業(さぎょう)"
      ],
      "answer": 2,
      "vi": "Đây là loại **công việc (さぎょう)** gì?",
      "explain": "Đây là **ケガキ作業(さぎょう) (Kegaki Sagyou - Công việc vạch dấu/Đánh dấu)** . Đây là công đoạn sử dụng dụng cụ sắc nhọn để vẽ các đường cắt, đường gấp hoặc các điểm tham chiếu lên bề mặt vật liệu (thường là kim loại) trước khi tiến hành gia công.",
      "tip": "💡 Nhớ: Dùng dụng cụ sắc nhọn **vạch (かく)** đường lên kim loại → **ケガキ作業(さぎょう)**.",
      "img": "https://raw.githack.com/donghung94/beta2.0/main/mobile/assets/tokutei/117.png"
    },
    {
      "q": "問119. これは何(なに)か。【177} ",
      "options": [
        "1. 防音(ぼうおん) シート",
        "2. 防水(ぼうすい) シート",
        "3. 垂直(すいちょく) 養生(ようじょう) ネット",
        "4. 飛散(ひさん) 防止(ぼうし) ネット"
      ],
      "answer": 0,
      "vi": "Đây là gì?",
      "explain": "Đây là **防音(ぼうおん) シート (Bōon Shīto - Tấm chắn/Cách âm)** . Đây là loại bạt dày, nặng, được sử dụng để bao phủ giàn giáo và công trường xây dựng nhằm **ngăn chặn (ぼうし)** và giảm thiểu tối đa **tiếng ồn (おん)** phát ra từ công trường, đặc biệt quan trọng ở khu vực đô thị.",
      "tip": "💡 Nhớ: Tấm bạt dày, **bao phủ (おお) toàn bộ** giàn giáo → **防音(ぼうおん) シート** (Tấm cách âm).",
      "img": "https://raw.githack.com/donghung94/beta2.0/main/mobile/assets/tokutei/119.png"
    },
    {
      "q": "問120. 解体(かいたい)工事(こうじ)にない作業(さぎょう)はどれか。【177】",
      "options": [
        "1. 敷地(しきち)内(ない)にあるものをすべて(ぜんぶ)解体(かいたい)する",
        "2. 防音(ぼうおん)ネット・防音(ぼうおん)シートなどで前面(ぜんめん)を覆(おお)う",
        "3. 建具(たてぐ)、石膏(せっこう)ボード、各種(かくしゅ)設備(せつび)などを手作業(てさぎょう)で取(と)り除(のぞ)く、リサイクルで出来(でき)るものは分別(ぶんべつ)する",
        "4. 外構(がいこう)解体(かいたい)"
      ],
      "answer": 0,
      "vi": "Trong các công việc sau, công việc nào **không thuộc (ない)** công tác **phá dỡ (かいたいこうじ)**?",
      "explain": "Điều **không đúng** là **敷地(しきち)内(ない)にあるものをすべて(ぜんぶ)解体(かいたい)する** (Phá dỡ **tất cả mọi thứ** có trong khuôn viên/khu đất). Không phải mọi thứ đều được phép phá dỡ hoặc cần thiết phải phá dỡ.",
      "tip": "💡 Nhớ: Giải thể **không phải (ない)** là **すべ(て)て** (tất cả) mọi thứ."
    },
    {
      "q": "問121. 滑(すべ)りやすいスレート屋根(やね)からの転落(てんらく)はどんな災害(さいがい)事故(じこ)か。【180】",
      "options": [
        "1. 倒壊(とうかい)",
        "2. 激突(げきとつ)",
        "3. 飛来(ひらい)",
        "4. 墜落(ついらく)"
      ],
      "answer": 3,
      "vi": "Việc **rơi (てんらく)** từ mái nhà **lợp ngói (やね)** **dễ trượt (すべりやすい)** là loại **tai nạn (さいがいじこ)** nào?",
      "explain": "Tai nạn **rơi/ngã từ trên cao** (ví dụ: từ mái nhà trượt) được gọi là **墜落(ついらく) (Tsuiraku - Rơi/Ngã)**  Mặc dù câu hỏi dùng từ **転落(てんらく)** (rơi/ngã), trong lựa chọn đáp án, **墜落(ついらく)** là thuật ngữ chính xác và phổ biến nhất để chỉ tai nạn rơi từ độ cao trong xây dựng.",
      "tip": "💡 Nhớ: Rơi từ **屋根(やね)** (mái nhà) hoặc vị trí cao → **墜落(ついらく)** (Rơi/Ngã)."
    },
    {
      "q": "問122. 1点(いってん)に集中(しゅうちゅう)すると、まわりが見(み)えなくなるヒユーマンエフーは、何(なに)か。",
      "options": [
        "1. 連絡(れんらく)不足(ぶそく)",
        "2. 近道(ちかみち)行動(こうどう)",
        "3. 場面(ばめん)行動(こうどう)本能(ほんのう)",
        "4. 慣(な)れによる手抜(てぬ)き"
      ],
      "answer": 2,
      "explain": "Đây là **場面(ばめん)行動(こうどう)本能(ほんのう) (Bamen Kōdō Honnō - Phản ứng/Bản năng hành động theo tình huống)** . Đây là loại lỗi con người xảy ra khi người lao động tập trung quá mức (**しゅうちゅう**) vào một nhiệm vụ hoặc một điểm duy nhất, dẫn đến hiện tượng 'tầm nhìn đường hầm' và bỏ qua các mối nguy hiểm hoặc vật cản xung quanh (**まわりが見えなくなる**).",
      "tip": "💡 Nhớ: **1点(いってん)に集中(しゅうちゅう)** (Tập trung 1 điểm) → **まわりが見えなくなる** (Không nhìn thấy xung quanh) → **場面(ばめん)行動(こうどう)本能(ほんのう)**."
    },
    {
      "q": "問123. 物(もの)などにつまずいて転(ころ)んだり、バランスを崩(くず)して転(ころ)ぶことによっておこる労働(ろうどう)災害(さいがい)は何(なん)というか。【180】",
      "options": [
        "1. 墜落(ついらく)",
        "2. 飛来(ひらい)",
        "3. 転倒(てんとう)",
        "4. 激突(げきとつ)"
      ],
      "answer": 2,
      "vi": "Tai nạn lao động (**ろうどうさいがい**) xảy ra do **vấp phải (つまずいて)** vật gì đó và **ngã (ころぶ)**, hoặc **mất thăng bằng (バランスをくずして)** và **ngã (ころぶ)** được gọi là gì?",
      "explain": "Tai nạn do **vấp ngã** trên cùng một mặt phẳng (không phải rơi từ độ cao) được gọi là **転倒(てんとう) (Tentō - Vấp ngã/Đổ)** . Khác với **墜落(ついらく)** (rơi từ trên cao), **転倒(てんとう)** là ngã xuống mặt đất.",
      "tip": "💡 Nhớ: **つまずいて** (Vấp phải) + **ころぶ** (Ngã) trên mặt đất → **転倒(てんとう)**."
    },
    {
      "q": "問124. 吸(す)い続(つづ)けると肺(はい)の機能(きのう)障害(しょうがい)を引(ひ)き起(お)こすため何(なに)を着用(ちゃくよう)しなければならないか。【186】",
      "options": [
        "1. 保護(ほご) メガネ",
        "2. 手袋(てぶくろ)",
        "3. 保護(ほご) マスク",
        "4. シールド面(めん)付(つ)きヘルメット"
      ],
      "answer": 2,
      "vi": "Để tránh gây ra **rối loạn chức năng phổi (はいのきのうしょうがい)** do **hít phải (すいつづける)** các chất độc hại trong thời gian dài, cần phải **đeo (ちゃくよう)** gì?",
      "explain": "Để bảo vệ **phổi (はい)** và hệ hô hấp khỏi bụi mịn, hơi độc hoặc khói có thể gây **rối loạn chức năng (きのうしょうがい)**, chúng ta phải sử dụng **保護(ほご) マスク (Hogo Masuku - Mặt nạ/Khẩu trang bảo hộ)** .",
      "tip": "💡 Nhớ: Bảo vệ **肺(はい)** (phổi) → **マスク** (Mặt nạ/Khẩu trang)."
    },
    {
      "q": "問125. 建設(けんせつ)工事(こうじ)では5mの高(たか)さを超(こ)える場所(ばしょ)での作業(さぎょう)時(じ)には何(なに)を装着(そうちゃく)することが義務(ぎむ)付(づ)けられるか。【189】",
      "options": [
        "1. ヘルメット",
        "2. 水平(すいへい) 養生(ようじょう) ネット",
        "3. 保護(ほご) メガネ",
        "4. フルハーネス型(がた) 墜落(ついらく) 制止(せいし)用(よう) 器具(きぐ)"
      ],
      "answer": 3,
      "vi": "Trong công trình **xây dựng (けんせつこうじ)**, khi **làm việc (さぎょう)** ở những nơi có **chiều cao (たかさ) vượt quá 5m**, việc **trang bị (そうちゃく)** gì là **nghĩa vụ (ぎむ)** bắt buộc?",
      "explain": "Theo quy định an toàn lao động, khi làm việc ở độ cao **trên 5m (5mをこえる)**, người lao động phải trang bị **フルハーネス型(がた) 墜落(ついらく) 制止(せいし)用(よう) 器具(きぐ) (Full Harness-gata Tsuiraku Seishiyō Kigu - Dụng cụ/Thiết bị chống rơi dạng dây đai toàn thân Full Harness)** . Đây là yêu cầu bắt buộc để ngăn chặn tai nạn **rơi/ngã (ついらく)**.",
      "tip": "💡 Nhớ: Độ cao **5m超(こ)える** (vượt quá 5m) → **フルハーネス** (Dây đai toàn thân)."
    },
    {
      "q": "問126. この道具(どうぐ)の名前(なまえ)は何(なに)か。【190】",
      "options": [
        "1. 重量(じゅうりょう)測定(そくてい)器(き)",
        "2. 音量(おんりょう)計測(けいそく)器(き)",
        "3. 水量(すいりょう)計測(けいそく)器(き)",
        "4. WBGT計測(けいそく)器(き)"
      ],
      "answer": 3,
      "vi": "Tên của **dụng cụ (どうぐ)** này là gì?",
      "explain": "Dụng cụ trong hình là một thiết bị đo lường nhiệt độ, độ ẩm và bức xạ nhiệt môi trường, được gọi là **WBGT計測(けいそく)器(き) (WBGT Keisokuki - Thiết bị đo WBGT)** . WBGT (Wet-Bulb Globe Temperature) là chỉ số quan trọng dùng để đánh giá nguy cơ **say nắng (ねっちゅうしょう)** tại công trường.",
      "tip": "💡 Nhớ: Thiết bị đo lường nhiệt độ/nguy cơ say nắng (**ねっちゅうしょう**) → **WBGT計測(けいそく)器(き)**.",
      "img": "https://raw.githack.com/donghung94/beta2.0/main/mobile/assets/tokutei/126.png"
    },
    {
      "q": "問127. 熱中症(ねっちゅうしょう)対策(たいさく)として、適切(てきせつ)なものを一(ひと)つ選(えら)べ。【190】",
      "options": [
        "1. 作業(さぎょう)の前(ぜん)後(ご)に水分(すいぶん)や塩分(えんぶん)を控(ひか)える",
        "2. 通気性(つうきせい)の良(よ)い作業(さぎょう)服(ふく)を着(き)く",
        "3. エアコンのある休憩(きゅうけい)場所(ばしょ)を利用(りよう)しない",
        "4. 作業(さぎょう)中(ちゅう)は気持(きも)ち悪(わる)くなっても我慢(がまん)する"
      ],
      "answer": 1,
      "vi": "Chọn một biện pháp **thích hợp (てきせつな)** để **chống say nắng (ねっちゅうしょうたいさく)**.",
      "explain": "Biện pháp thích hợp (**てきせつな**) là **通気性(つうきせい)の良(よ)い作業(さぎょう)服(ふく)を着(き)く** (Mặc quần áo bảo hộ có độ thông thoáng tốt). Quần áo thông thoáng giúp cơ thể tản nhiệt (**たいさく**) tốt hơn, giảm nguy cơ **say nắng (ねっちゅうしょう)**.",
      "tip": "💡 Nhớ: Chống **ねっちゅうしょう** (Say nắng) → Mặc đồ **通気性(つうきせい)の良(よ)い** (Thông thoáng tốt)."
    },
    {
      "q": "問128. このマークは、どんな意味(いみ)を指(さ)すか。【191】",
      "options": [
        "1. ご安全(あんぜん)に",
        "2. 救急(きゅうきゅう)箱(ばこ)",
        "3. 安全(あんぜん)衛生(えいせい)旗(き)",
        "4. 安全(あんぜん)や衛生(えいせい)のシンボル"
      ],
      "answer": 3,
      "vi": "**Biểu tượng (マーク)** này ám chỉ **ý nghĩa (いみ)** gì?",
      "explain": "Biểu tượng này (**安全(あんぜん) + 十(クロス) 衛生(えいせい)**) đại diện cho **安全(あんぜん)や衛生(えいせい)のシンボル (Anzen ya Eisei no Shinboru - Biểu tượng của An toàn và Vệ sinh)** . Dấu thập màu xanh lá cây thường biểu thị Y tế (**衛生(えいせい)**), kết hợp với chữ An toàn (**安全(あんぜん)**) tạo thành biểu tượng chung cho sức khỏe và an toàn lao động.",
      "tip": "💡 Nhớ: Dấu thập màu xanh lá cây + chữ **安全(あんぜん)** → **安全(あんぜん)や衛生(えいせい)のシンボル** (Biểu tượng An toàn/Vệ sinh).",
      "img": "https://raw.githack.com/donghung94/beta2.0/main/mobile/assets/tokutei/0031.png"
    },
    {
      "q": "問129. 屋根(やね)工事(こうじ)について、適切(てきせつ)なものを一(ひと)つ選(えら)べ。",
      "options": [
        "1. 平面(へいめん)と平面(へいめん)が接合(せつごう)する部分(ぶぶん)は雨漏(あまも)りしにくい",
        "2. 日本(にほん)の地域(ちいき)によって、屋根(やね)の形状(けいじょう)や屋根(やね)材(ざい)が異(こと)なる",
        "3. 粘土(ねんど)瓦(がわら)は軽(かる)いである",
        "4. 屋根(やね)と壁(かべ)の接続(せつぞく)する部分(ぶぶん)は雨漏(あまも)りしにくい"
      ],
      "answer": 1,
      "vi": "Về công tác **lợp mái (やねこうじ)**, hãy chọn một điều **thích hợp (てきせつな)**.",
      "explain": "Điều thích hợp (**てきせつな**) là **日本(にほん)の地域(ちいき)によって、屋根(やね)の形状(けいじょう)や屋根(やね)材(ざい)が異(こと)なる** (Hình dáng mái nhà và vật liệu lợp mái khác nhau tùy theo khu vực của Nhật Bản). Điều này là do các yếu tố khí hậu khác nhau (như tuyết, gió bão, lượng mưa) giữa các vùng (**地域(ちいき)**).",
      "tip": "💡 Nhớ: Công tác **屋根(やね)** (Mái nhà) → **地域(ちいき)によって異(こと)なる** (Khác nhau tùy theo vùng) là đúng."
    },
    {
      "q": "問130. 思(おも)い込(こ)みが原因(げんいん)となるヒユーマンエラーは何(なん)というか。【72】",
      "options": [
        "1. 集団(しゅうだん)欠陥(けっかん)",
        "2. 慣(な)れによる手抜(てぬ)き",
        "3. 認知(にんち)ミス",
        "4. 連絡(れんらく)不足(ぶそく)"
      ],
      "answer": 2,
      "vi": "Lỗi con người (Human Error) có **nguyên nhân (げんいん)** là do **sự suy đoán/giả định (おもいこみ)** được gọi là gì?",
      "explain": "Lỗi do **suy đoán/giả định (おもいこみ)**, tức là tin rằng một điều gì đó là đúng mà không kiểm tra, là một lỗi trong quá trình xử lý thông tin và được gọi là **認知(にんち)ミス (Ninchi Misu - Lỗi nhận thức/Lỗi tri giác)** . Lỗi này liên quan đến việc hiểu sai hoặc nhận thức sai về tình huống.",
      "tip": "💡 Nhớ: **思(おも)い込(こ)み** (Sự suy đoán/Giả định) → **認知(にんち)ミス** (Lỗi nhận thức)."
    }
  ]
};
