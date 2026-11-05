/* 9 đề viết CỐ ĐỊNH của N1 (Test 1–9), mỗi đề 71 câu theo đúng đặc tả EXAM_COMP N1:
   yomi 6 · ctx 7 · syn 6 · yoho 6 · g1dlg 3 + g1 7 · star 5 · bunsho 1 bài (5 câu) ·
   readS 4 · readM 9 · readL 4 · tougou 3 · shuchou 4 · info 2 = 71 câu viết / 108 câu cả đề.
   Mỗi đề là 1 bộ riêng, không trùng câu giữa các đề; mọi câu có exp + voc tiếng Việt.
   Nguồn: bộ written-n1-x9 đã kiểm chứng độc lập (đáp án, cấp độ N1, không trùng) trước khi gắn app.
   App đọc qua window.WRITTEN_N1_SETS["1".."9"] trong chế độ đề cố định của exBuildWritten. */

/* ----- Test 1 ----- */
window.WRITTEN_N1_SET1 = {
  yomi: [
  {
    "s": "彼 は 相手 の 立場 を 斟酌 して、 慎重 に 言葉 を 選んだ。",
    "t": "斟酌",
    "r": "しんしゃく",
    "w": ["しんじゃく", "じんしゃく", "しんさく"],
    "exp": "斟酌 đọc là しんしゃく（斟 しん、酌 しゃく）— nghĩa là cân nhắc, suy xét đến lập trường của đối phương. しんじゃく đọc sai 酌 thành じゃく、じんしゃく đọc sai 斟 thành じん、しんさく đọc sai 酌 thành さく nên đều sai.",
    "voc": "斟酌（しんしゃく）：cân nhắc, suy xét； 立場（たちば）：lập trường, vị trí； 慎重（しんちょう）：thận trọng； 言葉（ことば）：lời nói"
  },
  {
    "s": "彼女 は 決断 する 前 に しばらく 躊躇 した。",
    "t": "躊躇",
    "r": "ちゅうちょ",
    "w": ["じゅうちょ", "ちゅうちょう", "ちゅちょ"],
    "exp": "躊躇 đọc là ちゅうちょ（躊 ちゅう、躇 ちょ）— nghĩa là do dự, chần chừ trước khi quyết định. じゅうちょ đọc sai 躊 thành じゅう、ちゅうちょう thêm う thừa ở cuối、ちゅちょ thiếu âm う nên đều sai.",
    "voc": "躊躇（ちゅうちょ）：do dự, chần chừ； 決断（けつだん）：quyết định, quyết đoán； 前（まえ）：trước； しばらく：một lúc"
  },
  {
    "s": "彼 の 記録 を 凌駕 する こと は、 容易 では ない。",
    "t": "凌駕",
    "r": "りょうが",
    "w": ["りょうか", "りんが", "りょうげ"],
    "exp": "凌駕 đọc là りょうが（凌 りょう、駕 が）— nghĩa là vượt qua, vượt trội hơn (kỷ lục của ai đó). りょうか đọc sai 駕 thành か、りんが đọc sai 凌 thành りん、りょうげ đọc sai 駕 thành げ nên đều sai.",
    "voc": "凌駕（りょうが）：vượt qua, vượt trội； 記録（きろく）：kỷ lục； 容易（ようい）：dễ dàng"
  },
  {
    "s": "会議 の 日程 について の 返答 が 曖昧 で、 予定 が 立てられなかった。",
    "t": "曖昧",
    "r": "あいまい",
    "w": ["あいめい", "あんまい", "あいばい"],
    "exp": "曖昧 đọc là あいまい（曖 あい、昧 まい）— nghĩa là mơ hồ, không rõ ràng. あいめい đọc sai 昧 thành めい、あんまい đọc sai 曖 thành あん、あいばい đọc sai 昧 thành ばい nên đều sai.",
    "voc": "曖昧（あいまい）：mơ hồ, không rõ ràng； 会議（かいぎ）：cuộc họp； 日程（にってい）：lịch trình； 返答（へんとう）：câu trả lời； 予定（よてい）：dự định； 立てる（たてる）：lập, sắp xếp"
  },
  {
    "s": "彼女 は いつも 謙虚 な 態度 で、 人 に 接して いる。",
    "t": "謙虚",
    "r": "けんきょ",
    "w": ["けんきょう", "げんきょ", "けんぎょ"],
    "exp": "謙虚 đọc là けんきょ（謙 けん、虚 きょ）— nghĩa là khiêm tốn, khiêm nhường. けんきょう thêm う thừa、げんきょ đọc sai 謙 thành げん、けんぎょ đọc sai 虚 thành ぎょ nên đều sai.",
    "voc": "謙虚（けんきょ）：khiêm tốn； 態度（たいど）：thái độ； 接する（せっする）：tiếp xúc, đối xử"
  },
  {
    "s": "新しい 制度 に 対する 懸念 の 声 が 上がって いる。",
    "t": "懸念",
    "r": "けねん",
    "w": ["けんねん", "げねん", "けねい"],
    "exp": "懸念 đọc là けねん（懸 け、念 ねん）— nghĩa là lo ngại, quan ngại về chế độ mới. けんねん đọc sai 懸 thành けん、げねん đọc sai 懸 thành げ、けねい đọc sai 念 thành ねい nên đều sai.",
    "voc": "懸念（けねん）：lo ngại, quan ngại； 制度（せいど）：chế độ； 声（こえ）：tiếng nói, ý kiến"
  }
  ],
  ctx: [
  {
    "s": "会議 は 長時間 に 及び、 参加者 は 皆 （　）して いた。",
    "a": "疲労",
    "w": ["活気", "元気", "興奮"],
    "exp": "Sau cuộc họp kéo dài, mọi người đều mệt mỏi nên điền 疲労していた (mệt mỏi). 活気 (sôi nổi)、元気 (khỏe khoắn, đầy năng lượng)、興奮 (hưng phấn) đều mang nghĩa tích cực, trái ngược với ngữ cảnh cuộc họp dài khiến người ta mệt.",
    "voc": "会議（かいぎ）：cuộc họp； 長時間（ちょうじかん）：thời gian dài； 参加者（さんかしゃ）：người tham gia； 疲労（ひろう）：mệt mỏi"
  },
  {
    "s": "長い 議論 の 末、 ようやく （　）が ついた。",
    "a": "結論",
    "w": ["結果", "決定", "回答"],
    "exp": "Sau thảo luận dài, cuối cùng đi đến kết luận nên điền 結論がついた (đi đến kết luận). 結果 (kết quả) không đi với がついた、決定 (quyết định) thường đi với 下す・出す chứ không phải がついた、回答 (câu trả lời) không dùng với がついた trong ngữ cảnh này.",
    "voc": "議論（ぎろん）：thảo luận； 結論（けつろん）：kết luận； 長い（ながい）：dài； 末（すえ）：cuối cùng"
  },
  {
    "s": "二人 の 意見 は 真っ向 から （　）し、 会議 は 平行線 の まま 終わった。",
    "a": "対立",
    "w": ["一致", "協調", "融合"],
    "exp": "Hai ý kiến đối lập nhau nên cuộc họp kết thúc mà không có kết quả → 対立し (đối lập). 一致し (nhất trí) thì cuộc họp đã không bế tắc、協調し (hợp tác, phối hợp) không dùng cho 意見 đối nhau、融合し (hòa trộn, dung hợp) không hợp với 意見 và mâu thuẫn với 平行線.",
    "voc": "意見（いけん）：ý kiến； 真っ向（まっこう）：trực diện, đối đầu； 対立（たいりつ）：đối lập； 平行線（へいこうせん）：bế tắc, không ngã ngũ"
  },
  {
    "s": "彼 の 発言 は 事実 と （　）して おり、 訂正 を 求められた。",
    "a": "矛盾",
    "w": ["一致", "適合", "調和"],
    "exp": "Phát ngôn mâu thuẫn với sự thật nên bị yêu cầu đính chính → 矛盾しており (mâu thuẫn). 一致しており (phù hợp) thì không cần đính chính、適合しており (thích hợp) cũng không cần đính chính、調和しており (hài hòa) không dùng với 事実 trong ngữ cảnh này và cũng trái với việc bị yêu cầu sửa.",
    "voc": "発言（はつげん）：phát ngôn； 事実（じじつ）：sự thật； 矛盾（むじゅん）：mâu thuẫn； 訂正（ていせい）：đính chính"
  },
  {
    "s": "この 地域 の 伝統工芸 を （　）する ため、 若い 職人 の 育成 が 進められて いる。",
    "a": "継承",
    "w": ["廃止", "忘却", "中断"],
    "exp": "Để giữ gìn và truyền lại nghề thủ công truyền thống của vùng nên cần đào tạo thợ trẻ → 継承する (kế thừa, truyền lại). 廃止する (bãi bỏ)、忘却する (quên lãng)、中断する (gián đoạn) đều trái nghĩa với mục đích bảo tồn nghề truyền thống.",
    "voc": "伝統工芸（でんとうこうげい）：nghề thủ công truyền thống； 継承（けいしょう）：kế thừa； 職人（しょくにん）：thợ thủ công； 育成（いくせい）：đào tạo, bồi dưỡng"
  },
  {
    "s": "集めた 義援金 は、 被災地 へ の （　）の ため に 使われる こと に なった。",
    "a": "配分",
    "w": ["削減", "増加", "決定"],
    "exp": "Tiền quyên góp được dùng để phân phát cho vùng bị thiên tai → 被災地への配分 (phân phối, phân phát). 削減 (cắt giảm)、増加 (tăng lên)、決定 (quyết định) đều không hợp nghĩa: tiền quyên góp không dùng cho việc cắt giảm hay tăng lên, và 決定のため không thành cụm từ tự nhiên ở đây.",
    "voc": "義援金（ぎえんきん）：tiền cứu trợ, tiền quyên góp； 被災地（ひさいち）：vùng bị thiên tai； 配分（はいぶん）：phân phối, phân phát"
  },
  {
    "s": "彼 の 提案 は 役員会 で （　）され、 来月 から 実施 される こと に なった。",
    "a": "承認",
    "w": ["否決", "保留", "却下"],
    "exp": "Đề xuất được chấp thuận nên mới triển khai từ tháng sau → 承認され (được phê duyệt, chấp thuận). 否決され (bị bác bỏ)、保留され (bị tạm hoãn)、却下され (bị từ chối) đều mâu thuẫn với vế sau 来月から実施される (sẽ triển khai từ tháng sau).",
    "voc": "提案（ていあん）：đề xuất； 役員会（やくいんかい）：hội đồng quản trị； 承認（しょうにん）：phê duyệt, chấp thuận； 実施（じっし）：triển khai, thực hiện"
  }
  ],
  syn: [
  {
    "s": "彼 の 説明 は 簡潔 で、 分かりやすかった。",
    "t": "簡潔",
    "a": "みじかい",
    "w": ["ながい", "くどい", "まわりくどい"],
    "exp": "簡潔 nghĩa là ngắn gọn, súc tích nên từ đồng nghĩa gần nhất là みじかい (ngắn). ながい (dài) là trái nghĩa、くどい (dài dòng, rườm rà) và まわりくどい (vòng vo, dài dòng) đều trái nghĩa với 簡潔.",
    "voc": "簡潔（かんけつ）：ngắn gọn, súc tích； 説明（せつめい）：giải thích； 分かりやすい：dễ hiểu"
  },
  {
    "s": "この 仕事 は 困難 で、 多く の 時間 が 必要 です。",
    "t": "困難",
    "a": "むずかしい",
    "w": ["やさしい", "かんたん", "らく"],
    "exp": "困難 nghĩa là khó khăn nên từ đồng nghĩa là むずかしい (khó). やさしい (dễ)、かんたん (đơn giản)、らく (nhàn hạ, dễ chịu) đều mang nghĩa dễ dàng, trái nghĩa với 困難.",
    "voc": "困難（こんなん）：khó khăn； 仕事（しごと）：công việc； 時間（じかん）：thời gian； 必要（ひつよう）：cần thiết"
  },
  {
    "s": "事故 の あと、 消防隊 は 迅速 に 現場 に 駆けつけた。",
    "t": "迅速",
    "a": "すばやい",
    "w": ["おそい", "のろい", "おそろしい"],
    "exp": "迅速 nghĩa là nhanh chóng, mau lẹ nên từ đồng nghĩa là すばやい (nhanh nhẹn). おそい (chậm)、のろい (chậm chạp) là trái nghĩa、おそろしい (đáng sợ) không liên quan đến tốc độ.",
    "voc": "迅速（じんそく）：nhanh chóng； 事故（じこ）：tai nạn； 消防隊（しょうぼうたい）：đội cứu hỏa； 現場（げんば）：hiện trường； 駆けつける（かける）：chạy đến, vội đến"
  },
  {
    "s": "彼 は 頑固 で、 他人 の 意見 を 聞こう と しない。",
    "t": "頑固",
    "a": "がんこな",
    "w": ["すなおな", "やわらかい", "きがるな"],
    "exp": "頑固 nghĩa là bướng bỉnh, cứng đầu, không chịu nghe ý kiến người khác nên từ đồng nghĩa là がんこな. すなおな (ngoan ngoãn, dễ bảo) là trái nghĩa、やわらかい (mềm mỏng) và きがるな (thoải mái, nhẹ nhàng) đều không mang nghĩa bướng bỉnh.",
    "voc": "頑固（がんこ）：bướng bỉnh, cứng đầu； 他人（たにん）：người khác； 意見（いけん）：ý kiến"
  },
  {
    "s": "将来 に 対する 漠然 と した 不安 を 抱えて いる 人 が 多い。",
    "t": "漠然",
    "a": "あいまいな",
    "w": ["はっきりした", "明確な", "具体的な"],
    "exp": "漠然とした不安 nghĩa là nỗi lo mơ hồ, không rõ ràng nên từ đồng nghĩa là あいまいな (mơ hồ). はっきりした (rõ ràng)、明確な (rõ ràng, minh xác)、具体的な (cụ thể) đều trái nghĩa với 漠然.",
    "voc": "漠然（ばくぜん）：mơ hồ； 将来（しょうらい）：tương lai； 不安（ふあん）：lo lắng, bất an； 抱える（かかえる）：mang, ôm (nỗi lo)"
  },
  {
    "s": "彼 は 慎重 に 書類 を 確認した。",
    "t": "慎重",
    "a": "ちゅういぶかい",
    "w": ["おおざっぱな", "いいかげんな", "かるがるしい"],
    "exp": "慎重に確認した nghĩa là kiểm tra một cách cẩn thận, chú ý nên từ đồng nghĩa là ちゅういぶかい (chú ý, cẩn thận). おおざっぱな (đại khái, qua loa)、いいかげんな (cẩu thả, tùy tiện)、かるがるしい (khinh suất, hấp tấp) đều trái nghĩa với 慎重.",
    "voc": "慎重（しんちょう）：thận trọng, cẩn thận； 書類（しょるい）：giấy tờ, tài liệu； 確認（かくにん）：xác nhận, kiểm tra"
  }
  ],
  yoho: [
  {
    "t": "急激",
    "s": ["彼 は 急激 に ゆっくり 歩いた。", "気温 が 急激 に 下がった。", "彼女 は 急激 に 長い 時間 眠った。", "この 本 は 急激 に 厚い です。"],
    "a": 1,
    "exp": "急激に nghĩa là một cách đột ngột, nhanh chóng — chỉ dùng với sự thay đổi lớn, như 気温が急激に下がった (nhiệt độ giảm đột ngột). 急激にゆっくり歩いた mâu thuẫn (ゆっくり = chậm rãi)、急激に長い時間眠った sai kết hợp (ngủ lâu không phải thay đổi đột ngột)、急激に厚い sai vì 厚い là tính chất tĩnh, không thay đổi.",
    "voc": "急激（きゅうげき）：đột ngột, nhanh chóng； 気温（きおん）：nhiệt độ； 下がる（さがる）：giảm, hạ xuống； ゆっくり：chậm rãi"
  },
  {
    "t": "豊か",
    "s": ["この 国 は 自然 資源 が 豊か です。", "彼 は 知識 が 豊か な ので、 質問 に 答えられなかった。", "この 部屋 は 豊か な ので、 何も ない。", "彼 は 時間 が 豊か な ので、 いつも 遅刻 する。"],
    "a": 0,
    "exp": "豊か nghĩa là phong phú, dồi dào — この国は自然資源が豊かです là câu đúng duy nhất. Câu 2 tuy có cụm 知識が豊か nhưng vế sau 質問に答えられなかった mâu thuẫn (kiến thức phong phú thì phải trả lời được). Câu 3 mâu thuẫn: phòng 豊か mà lại 何もない (không có gì). Câu 4 sai logic: thời gian dồi dào không phải lý do để luôn đi muộn.",
    "voc": "豊か（ゆたか）：phong phú, dồi dào； 自然資源（しぜんしげん）：tài nguyên thiên nhiên； 知識（ちしき）：kiến thức； 遅刻（ちこく）：đi muộn"
  },
  {
    "t": "惜しむ",
    "s": ["彼 は 宿題 を 惜しむ 気持ち が 分からない。", "別れ を 惜しむ 気持ち で、 彼 は 駅 まで 見送り に 行った。", "彼 は 雨 を 惜しむ 気持ち に なった。", "彼 は 昼ごはん を 惜しむ 気持ち に なった。"],
    "a": 1,
    "exp": "惜しむ nghĩa là tiếc nuối, không nỡ rời xa — 別れを惜しむ気持ち (tâm trạng tiếc nuối cuộc chia ly) là kết hợp đúng duy nhất. 宿題を惜しむ、雨を惜しむ、昼ごはんを惜しむ đều sai vì 惜しむ không đi với bài tập về nhà, thời tiết hay bữa trưa theo nghĩa tiếc nuối như vậy.",
    "voc": "惜しむ（おしむ）：tiếc nuối, không nỡ； 別れ（わかれ）：chia ly； 気持ち（きもち）：cảm giác, tâm trạng； 見送り（みおくり）：tiễn đưa； 駅（えき）：nhà ga"
  },
  {
    "t": "いたわる",
    "s": ["母 は 病気 の 父 を いたわる 気持ち で、 看病 を 続けた。", "彼 は 宿題 を いたわる 気持ち が ある。", "彼 は 数字 を いたわる 気持ち が ある。", "彼 は 天気 を いたわる 気持ち が ある。"],
    "a": 0,
    "exp": "いたわる nghĩa là quan tâm, chăm sóc ân cần (người bệnh, người yếu) — 病気の父をいたわる気持ち (tâm trạng quan tâm, chăm sóc người cha đang bệnh) là cách dùng đúng duy nhất. 宿題をいたわる、数字をいたわる、天気をいたわる đều sai vì いたわる chỉ dùng với con người (hoặc động vật), không dùng với bài tập, con số hay thời tiết.",
    "voc": "いたわる：quan tâm, chăm sóc ân cần； 病気（びょうき）：bệnh tật； 気持ち（きもち）：cảm giác, tâm trạng； 看病（かんびょう）：chăm sóc người bệnh"
  },
  {
    "t": "ためらう",
    "s": ["彼 は ご飯 を ためらう 気持ち が ある。", "彼 は 天気 を ためらう 気持ち が ある。", "彼女 は 発言 する の を ためらう 気持ち が あった。", "彼 は 本 を ためらう 気持ち が ある。"],
    "a": 2,
    "exp": "ためらう nghĩa là do dự, ngập ngừng trước một hành động hay quyết định — 発言するのをためらう気持ち (cảm giác ngập ngừng không dám phát biểu) là cách dùng đúng duy nhất. ご飯をためらう、天気をためらう、本をためらう đều sai vì ためらう không đi với danh từ chỉ đồ ăn, thời tiết hay đồ vật.",
    "voc": "ためらう：do dự, ngập ngừng； 発言（はつげん）：phát biểu, phát ngôn； 気持ち（きもち）：cảm giác, tâm trạng； ご飯（ごはん）：cơm, bữa ăn"
  },
  {
    "t": "とっさに",
    "s": ["彼 は とっさに 子ども の 手 を 引いて、 車 を よけた。", "彼 は とっさに 三時間 考えた。", "彼 は とっさに 毎朝 散歩 する。", "彼 は とっさに 来年 結婚 する 予定 だ。"],
    "a": 0,
    "exp": "とっさに nghĩa là ngay lập tức, trong tích tắc (phản xạ tức thời) — とっさに子どもの手を引いて、車をよけた là cách dùng đúng duy nhất. とっさに三時間考えた mâu thuẫn (tích tắc mà lại nghĩ ba tiếng)、とっさに毎朝散歩する sai vì とっさに không dùng với thói quen lặp lại、とっさに来年結婚する予定だ sai vì とっさに không dùng với kế hoạch tương lai xa.",
    "voc": "とっさに：ngay lập tức, trong tích tắc； 手（て）を引く：nắm tay kéo đi； よける：tránh, né； 散歩（さんぽ）：đi dạo"
  }
  ],
  g1dlg: [
  {
    "d": ["あの かいしゃは、けいきが わるいのに、どんどん 大きく なって いますね。", "ええ、ふきょうを（　）、うりあげを のばして いるんです。"],
    "a": "よそに",
    "w": ["もとに", "あとに", "そとに"],
    "p": "〜をよそに",
    "exp": "不況をよそに売上を伸ばす nghĩa là bất chấp suy thoái kinh tế mà vẫn tăng doanh số — よそに diễn tả việc không để ý tới, bỏ qua một hoàn cảnh bất lợi. もとに (dựa trên)、あとに (sau)、そとに (bên ngoài) đều sai nghĩa và không dùng được sau 不況を trong ngữ cảnh này. Lưu ý: mẫu thật của câu này là 〜をよそに, không nằm trong 72 mẫu N1 của GRAMMAR_DATA — đây là ngoại lệ legacy duy nhất được coordinator chấp nhận (giống tiền lệ N3 T4 g1dlg-0 V-ておく), câu/đáp án/phương án giữ nguyên bản seed.",
    "voc": "不況（ふきょう）：suy thoái kinh tế； 売上（うりあげ）：doanh số； 景気（けいき）：tình hình kinh tế； 伸ばす（のばす）：tăng lên, mở rộng"
  },
  {
    "d": ["昨日の会議、田中さんはどうでしたか。", "発表を終える（　）、質問攻めに遭っていましたよ。"],
    "a": "や否や",
    "w": ["そばから", "とたんに", "かたわら"],
    "p": "〜や否や",
    "exp": "発表を終えるや否や nghĩa là vừa kết thúc bài thuyết trình thì ngay lập tức bị hỏi dồn dập — や否や đi sau động từ dạng từ điển, diễn tả hai việc xảy ra gần như đồng thời. そばから và とたんに đều cần dạng V-た (終えたそばから・終えたとたんに) nên 終えるそばから・終えるとたんに sai ngữ pháp. かたわら nghĩa là vừa làm việc này vừa làm việc khác, không hợp nghĩa ở đây.",
    "voc": "発表（はっぴょう）：thuyết trình, phát biểu； 終える（おえる）：kết thúc； 質問攻め（しつもんぜめ）：bị hỏi dồn dập"
  },
  {
    "d": ["来週の出張、準備は大丈夫ですか。", "早めに終わらせる（　）、と思っています。"],
    "a": "に越したことはない",
    "w": ["にほかならない", "にすぎない", "に等しい"],
    "p": "〜に越したことはない",
    "exp": "早めに終わらせるに越したことはない nghĩa là làm xong sớm thì tốt hơn (càng sớm càng tốt) — に越したことはない đi sau V-る, diễn tả lựa chọn tốt hơn. にほかならない (chẳng qua chỉ là)、にすぎない (chỉ là)、に等しい (bằng với) đều sai nghĩa trong ngữ cảnh khuyên nên chuẩn bị sớm.",
    "voc": "出張（しゅっちゅう）：đi công tác； 準備（じゅんび）：chuẩn bị； 早め（はやめ）：sớm hơn； 終わらせる（おわらせる）：làm cho xong"
  }
  ],
  g1: [
  {
    "s": "注意 された （　）、 また 同じ 失敗 を 繰り返した。",
    "a": "そばから",
    "w": ["を限りに", "手前", "こととて"],
    "p": "V-た そばから",
    "exp": "注意されたそばから、また同じ失敗を繰り返した nghĩa là vừa bị nhắc nhở xong thì lại lặp lại đúng lỗi cũ — V-たそばから diễn tả việc vừa xong thì ngay lập tức làm việc tiếp theo (thường là việc không mong muốn). を限りに cần danh từ chỉ thời điểm và nghĩa là lấy đó làm lần cuối nên sai、手前 diễn tả sự cân nhắc đến hoàn cảnh nên không hợp、こととて diễn tả lý do trang trọng, không dùng để nối hai sự việc xảy ra liên tiếp như vậy.",
    "voc": "注意（ちゅうい）：nhắc nhở, chú ý； 失敗（しっぱい）：thất bại, lỗi； 繰り返す（くりかえす）：lặp lại"
  },
  {
    "s": "田舎 に 引っ越して （　）、 毎日 が 穏やか に なった。",
    "a": "きてからというもの",
    "w": ["きたところで", "くるなり", "きたついでに"],
    "p": "〜てからというもの",
    "exp": "田舎に引っ越してきてからというもの、毎日が穏やかになった nghĩa là từ khi chuyển về quê đến nay, ngày nào cũng yên bình — てからというもの diễn tả trạng thái tiếp diễn từ một thời điểm trong quá khứ đến hiện tại. きたところで (dù cho có đến) sai nghĩa、くるなり sai về nghĩa: なり đi sau dạng từ điển nên 引っ越してくるなり về mặt ngữ pháp vẫn thành câu, nhưng なり đòi hỏi ngay sau đó phải xảy ra một sự việc khác, trong khi 毎日が穏やかになった là sự thay đổi trạng thái diễn ra dần dần chứ không phải một sự việc xảy ra ngay tức thì、きたついでに (nhân tiện đến) sai nghĩa.",
    "voc": "田舎（いなか）：vùng quê； 引っ越す（ひっこす）：chuyển nhà； 穏やか（おだやか）：yên bình, êm đềm"
  },
  {
    "s": "今回 （　）、 この 企画 は 中止 する こと に した。",
    "a": "を限りに",
    "w": ["を境に", "をきっかけに", "をもとに"],
    "p": "N を限りに",
    "exp": "今回を限りに、この企画は中止することにした nghĩa là lấy lần này làm lần cuối rồi dừng dự án — Nを限りに diễn tả việc kết thúc, lấy đó làm giới hạn cuối cùng. を境に diễn tả bước ngoặt mở ra trạng thái mới tiếp diễn nên không hợp với việc dừng hẳn một dự án、をきっかけに (lấy đó làm cơ hội) sai nghĩa、をもとに (dựa trên) sai nghĩa và sai ngữ pháp ở đây.",
    "voc": "企画（きかく）：dự án, kế hoạch； 中止（ちゅうし）：dừng lại, hủy bỏ； 今回（こんかい）：lần này"
  },
  {
    "s": "他社 （　）、 新製品 を 発表した。",
    "a": "に先駆けて",
    "w": ["に反して", "に先駆け", "を境に"],
    "p": "〜に先駆けて",
    "exp": "他社に先駆けて、新製品を発表した nghĩa là đi trước các công ty khác, công bố sản phẩm mới sớm hơn họ — に先駆けて diễn tả việc làm trước người khác. に反して (trái với) sai nghĩa、に先駆け thiếu て nên sai ngữ pháp、を境に (lấy đó làm ranh giới) không dùng được với 他社 trong ngữ cảnh này.",
    "voc": "他社（たしゃ）：công ty khác； 先駆ける（さきがける）：đi trước, tiên phong； 新製品（しんせいひん）：sản phẩm mới； 発表（はっぴょう）：công bố"
  },
  {
    "s": "出かけよう と した （　）、 雨 が 降り出した。",
    "a": "矢先に",
    "w": ["拍子に", "はずみに", "ついでに"],
    "p": "〜矢先に",
    "exp": "出かけようとした矢先に、雨が降り出した nghĩa là đúng lúc định ra ngoài thì trời đổ mưa — 矢先に diễn tả việc sắp làm gì thì một việc bất ngờ xảy ra ngay trước đó. 拍子に cần hành động đã hoàn thành (〜した拍子に) nên 出かけようとした拍子に sai、はずみに cũng cần hành động đã xảy ra gây ra kết quả nên sai、ついでに (nhân tiện) sai nghĩa.",
    "voc": "出かける（でかける）：ra ngoài； 矢先（やさき）：đúng lúc sắp sửa； 降り出す（ふりだす）：bắt đầu rơi (mưa)"
  },
  {
    "s": "結果 （　）、 計画 を 見直す 必要 が ある。",
    "a": "いかんでは",
    "w": ["いかんによって", "かぎりでは", "うえでは"],
    "p": "N + いかんでは",
    "exp": "結果いかんでは、計画を見直す必要がある nghĩa là tùy theo kết quả mà có thể phải xem lại kế hoạch — Nいかんでは diễn tả điều kiện phụ thuộc vào N. いかんによって không phải dạng đúng (dạng đúng là いかんでは hay いかんによっては)、かぎりでは (trong phạm vi) sai nghĩa、うえでは không dùng được với 結果 theo cách này.",
    "voc": "結果（けっか）：kết quả； 計画（けいかく）：kế hoạch； 見直す（みなおす）：xem lại, rà soát； 必要（ひつよう）：cần thiết"
  },
  {
    "s": "彼 は 激しい 雨 （　）、 山道 を 歩き続けた。",
    "a": "をものともせずに",
    "w": ["を限りに", "を境に", "をもとに"],
    "p": "N + をものともせず（に）",
    "exp": "激しい雨をものともせずに、山道を歩き続けた nghĩa là bất chấp cơn mưa dữ dội mà vẫn tiếp tục đi trên đường núi — Nをものともせずに diễn tả việc không xem N là trở ngại, không bận tâm đến N. を限りに (lấy đó làm lần cuối)、を境に (lấy đó làm ranh giới)、をもとに (dựa trên) đều sai nghĩa và không dùng được với 雨 trong ngữ cảnh này.",
    "voc": "激しい（はげしい）：dữ dội； 山道（やまみち）：đường núi； 歩き続ける（あるきつづける）：tiếp tục đi bộ"
  }
  ],
  star: [
  {
    "pre": "",
    "post": "。",
    "chunks": ["あの薬を飲んだ", "が最後", "眠気が襲ってきて", "起きていられなかった"],
    "p": "V-た が最後",
    "exp": "Thứ tự đúng: あの薬を飲んだ (đã uống thuốc đó) + が最後 (một khi đã uống xong thì) + 眠気が襲ってきて (cơn buồn ngủ ập đến) + 起きていられなかった (không thể thức được). Mẫu 〜が最後 đi sau động từ dạng た (V-た + が最後), diễn tả: một khi đã làm X thì hậu quả xấu sẽ kéo theo không tránh được — ở đây vừa uống thuốc xong thì cơn buồn ngủ ập đến, không thức nổi nữa. 飲んだが最後 mới đúng; 飲むが最後 (dạng từ điển + が最後) là sai ngữ pháp. 眠気が襲ってきて là nguyên nhân, phải đứng trước kết quả 起きていられなかった ở cuối câu, đảo vị trí sẽ phá vỡ quan hệ nhân quả.",
    "voc": "薬（くすり）：thuốc； 眠気（ねむけ）：cơn buồn ngủ； 襲う（おそう）：ập đến； 起きる（おきる）：thức dậy"
  },
  {
    "pre": "",
    "post": "。",
    "chunks": ["合格した", "と思いきや", "実は補欠で", "がっかりした"],
    "p": "〜と思いきや",
    "exp": "Thứ tự đúng: 合格した (đã đỗ) + と思いきや (cứ tưởng là vậy, ai ngờ) + 実は補欠で (thực ra chỉ là dự bị) + がっかりした (thất vọng). と思いきや phải đứng ngay sau 合格した để diễn tả sự trái ngược với dự đoán、がっかりした là kết quả cảm xúc nên đứng cuối câu.",
    "voc": "合格（ごうかく）：đỗ, đạt； 補欠（ほけつ）：dự bị； 実は（じつは）：thực ra； がっかりする：thất vọng"
  },
  {
    "pre": "",
    "post": "。",
    "chunks": ["彼は", "日本語ばかりか", "中国語も上手に", "話せる"],
    "p": "〜ばかりか",
    "exp": "Thứ tự đúng: 彼は (anh ấy) + 日本語ばかりか (không chỉ tiếng Nhật) + 中国語も上手に (mà cả tiếng Trung cũng giỏi) + 話せる (nói được). ばかりか diễn tả không chỉ A mà cả B、も gắn với 中国語、trạng từ 上手に đã gắn chặt với 中国語も trong cùng một mảnh nên không thể di chuyển lên trước 日本語ばかりか được.",
    "voc": "日本語（にほんご）：tiếng Nhật； 中国語（ちゅうごくご）：tiếng Trung； 上手（じょうず）：giỏi； 話せる（はなせる）：nói được"
  },
  {
    "pre": "",
    "post": "。",
    "chunks": ["兄は慎重な", "のにひきかえ", "弟は", "何でもすぐ決めてしまう"],
    "p": "〜にひきかえ",
    "exp": "Thứ tự đúng: 兄は慎重な (anh trai thì thận trọng) + のにひきかえ (trái lại) + 弟は (em trai thì) + 何でもすぐ決めてしまう (cái gì cũng quyết định ngay). のにひきかえ là cụm đối lập phải đứng giữa hai vế so sánh、弟は mở đầu vế thứ hai、động từ chính 決めてしまう đứng cuối câu.",
    "voc": "兄（あに）：anh trai； 慎重（しんちょう）：thận trọng； 弟（おとうと）：em trai； 決める（きめる）：quyết định"
  },
  {
    "pre": "",
    "post": "。",
    "chunks": ["こんな調子で勉強していては", "合格できる", "ようでは", "ない"],
    "p": "〜ようでは",
    "exp": "Thứ tự đúng: こんな調子で勉強していては (cứ học với đà này) + 合格できる (có thể đỗ) + ようでは (thì) + ない (không). ようでは phải đứng ngay sau 合格できる để tạo thành cụm 合格できるようではない (không có vẻ gì là đỗ được)、ない là động từ phủ định đứng cuối câu.",
    "voc": "調子（ちょうし）：đà, tình hình； 勉強（べんきょう）：học tập； 合格（ごうかく）：đỗ, đạt"
  }
  ],
  bunsho: [
  {
    "intro": "つぎの 文章は 日本語の 単語の 覚え方に ついて 書かれた 文章です。",
    "p": "日本語 を 勉強 する とき、 単語 を 覚える こと は 大切 です。（　1　）、 単語 だけ を 覚えても、 文章 を 読む こと は できません。（　2　）、 文法 も 一緒 に 勉強 し、（　3　）、 毎日 少しずつ 続ける こと が 大切 です。（　4　）、 一晩 で 百 個 の 単語 を 覚えよう としても、 すぐ に 忘れて しまいます。（　5　）、 自分 の ペース で 進みましょう。",
    "b": [
      { "a": "しかし", "w": ["それから", "だから", "そして"] },
      { "a": "そのため", "w": ["しかし", "たとえば", "それに"] },
      { "a": "また", "w": ["しかし", "だから", "たとえば"] },
      { "a": "たとえば", "w": ["しかし", "だから", "それから"] },
      { "a": "だから", "w": ["しかし", "たとえば", "それから"] }
    ],
    "exp": "Ô 1 しかし: phía trước nói nhớ từ vựng là quan trọng, phía sau chuyển ý trái ngược — chỉ nhớ từ thôi thì không đọc được văn bản nên dùng しかし (tuy nhiên). Ô 2 そのため: vì chỉ nhớ từ thì không đọc được nên cần học cả ngữ pháp — quan hệ nguyên nhân-kết quả nên dùng そのため (vì vậy). Ô 3 また: bổ sung thêm một lời khuyên nữa (mỗi ngày tiếp tục từng chút) nên dùng また (thêm nữa). Ô 4 たとえば: đưa ra ví dụ cụ thể cho việc học dồn dập không hiệu quả — cố nhớ 100 từ trong một đêm thì quên ngay nên dùng たとえば (ví dụ như). Ô 5 だから: từ ví dụ trên rút ra kết luận — hãy tiến theo nhịp của mình nên dùng だから (vì vậy). Các đáp án gây nhiễu như それから (sau đó)、そして (và rồi)、それに (hơn nữa) không diễn tả đúng quan hệ logic ở các vị trí này.",
    "voc": "単語（たんご）：từ vựng； 文章（ぶんしょう）：văn bản, bài văn； 文法（ぶんぽう）：ngữ pháp； 毎日（まいにち）：mỗi ngày； ペース：nhịp độ； 一晩（ひとばん）：một đêm"
  }
  ],
  readS: [
  {
    "p": "この 公園 で は、 桜 の 季節 に なると、 夜 の ライトアップ が 行われます。 今年 は、 三月 二十五日 から 四月 五日 まで、 午後 六時 から 九時 まで 点灯 します。 雨 の 日 は、 中止 に なる 場合 が あります。 ライトアップ の 期間中 は、 屋台 も 出る そうです。",
    "q": "ライトアップ について、 正しい もの は どれ です か。",
    "o": ["雨 の 日 は、 必ず 行われる。", "午前 六時 から 行われる。", "三月 二十五日 から 四月 五日 まで 行われる。", "桜 の 季節 以外 にも 行われる。"],
    "a": 2,
    "e": "今年は3月25日から4月5日まで、午後6時から9時まで点灯する。",
    "exp": "Bằng chứng: 「今年は3月25日から4月5日まで、午後6時から9時まで点灯する」(năm nay chiếu sáng từ 25/3 đến 5/4, từ 6 giờ tối đến 9 giờ tối) nên đáp án 3 đúng. Đáp án 1 sai vì bài nói 雨の日は中止になる場合があります (ngày mưa có thể hủy, không phải nhất định tổ chức). Đáp án 2 sai vì là 午後六時 (6 giờ chiều) chứ không phải 午前六時 (6 giờ sáng). Đáp án 4 sai vì đèn chỉ bật vào 桜の季節 (mùa hoa anh đào).",
    "voc": "桜（さくら）：hoa anh đào； ライトアップ：chiếu sáng ban đêm； 点灯（てんとう）：bật đèn； 屋台（やたい）：quầy hàng； 中止（ちゅうし）：hủy bỏ"
  },
  {
    "p": "市立 図書館 で は、 来月 から 開館 時間 が 変わります。 平日 は 午前 九時 から 午後 八時 まで、 土曜日 と 日曜日 は 午前 九時 から 午後 六時 まで と なります。 ただし、 月曜日 は 休館日 です。 返却 期限 は 二週間 で、 一回 だけ 延長 できます。 延長 を 希望 する 人 は、 カウンター で 申し込んで ください。",
    "q": "図書館 について、 正しい もの は どれ です か。",
    "o": ["月曜日 も 開いて いる。", "土曜日 の 開館 時間 は 午後 八時 まで だ。", "本 は 一回 だけ 延長 できる。", "返却 期限 は 一週間 だ。"],
    "a": 2,
    "e": "返却期限は二週間で、一回だけ延長できます。",
    "exp": "Bằng chứng: 「返却期限は二週間で、一回だけ延長できます」(hạn trả là hai tuần, chỉ được gia hạn một lần) nên đáp án 3 đúng. Đáp án 1 sai vì 月曜日は休館日です (thứ Hai là ngày nghỉ). Đáp án 2 sai vì thứ Bảy mở đến 午後六時 (6 giờ chiều) chứ không phải 午後八時 (8 giờ tối). Đáp án 4 sai vì hạn trả là 二週間 (hai tuần) chứ không phải 一週間 (một tuần).",
    "voc": "図書館（としょかん）：thư viện； 開館（かいかん）：mở cửa； 休館日（きゅうかんび）：ngày nghỉ (đóng cửa)； 返却（へんきゃく）：trả lại； 期限（きげん）：hạn； 延長（えんちょう）：gia hạn"
  },
  {
    "p": "市立 美術館 の 入館料 は、 大人 が 800円、 高校生 が 500円、 小学生 以下 が 無料 です。 佐藤 さん 一家 は、 大人 2人 と 高校生 1人、 小学生 1人 で 美術館 に 行きました。 美術館 の 中 で は 写真 を 撮る こと は できません。",
    "q": "佐藤 さん 一家 の 入館料 は 全部 で いくら です か。",
    "o": ["1800円です。", "2100円です。", "2300円です。", "2600円です。"],
    "a": 1,
    "calc": 1,
    "e": "「大人は800円、高校生は500円、小学生以下は無料」「大人2人と高校生1人、小学生1人」800×2+500=2100円です。",
    "exp": "Tính tổng: người lớn 800円 × 2 người = 1600円, học sinh cấp ba 500円 × 1 = 500円, học sinh tiểu học trở xuống miễn phí (0円), tổng 1600 + 500 = 2100円 nên đáp án 2 đúng. 1800円 là 800 + 500 × 2 (tính nhầm số người)、2300円 là cộng thêm 200円 thừa、2600円 là 800 × 2 + 500 × 2 (tính nhầm học sinh tiểu học thành học sinh cấp ba). Bằng chứng: 「大人は800円、高校生は500円、小学生以下は無料」「大人2人と高校生1人、小学生1人」.",
    "voc": "美術館（びじゅつかん）：bảo tàng mỹ thuật； 入館料（にゅうかんりょう）：vé vào cửa； 高校生（こうこうせい）：học sinh cấp ba； 小学生（しょうがくせい）：học sinh tiểu học； 無料（むりょう）：miễn phí"
  },
  {
    "p": "市民 プール は、 午前 十時 から 午後 九時 まで 利用 できます。 ただし、 毎週 水曜日 は 清掃 の ため、 午後 一時 から 利用 できます。 子ども は 保護者 と 一緒 に 利用 して ください。 利用 料金 は 大人 三百円、 子ども 百円 です。 ロッカー は 無料 で 利用 できます。",
    "q": "水曜日 について、 正しい もの は どれ です か。",
    "o": ["午前 十時 から 利用 できる。", "午後 一時 から 利用 できる。", "利用 できない。", "午前 九時 から 利用 できる。"],
    "a": 1,
    "e": "毎週水曜日は清掃のため、午後一時から利用できます。",
    "exp": "Bằng chứng: 「毎週水曜日は清掃のため、午後一時から利用できます」(mỗi thứ Tư vì vệ sinh nên chỉ dùng được từ 1 giờ chiều) nên đáp án 2 đúng. Đáp án 1 sai vì 午前十時 (10 giờ sáng) là giờ mở cửa ngày thường, thứ Tư bắt đầu muộn hơn. Đáp án 3 sai vì thứ Tư vẫn dùng được (chỉ bắt đầu từ 1 giờ chiều). Đáp án 4 sai vì không có giờ 午前九時 (9 giờ sáng) nào trong bài.",
    "voc": "市民（しみん）：công dân thành phố； プール：hồ bơi； 清掃（せいそう）：vệ sinh, dọn dẹp； 保護者（ほごしゃ）：người giám hộ； ロッカー：tủ đồ"
  }
  ],
  readM: [
  {
    "p": "日本 は、 世界 で も 有数 の 高齢化 社会 だ。 地方 で は、 若い 人 が 都市 へ 移り、 高齢者 だけ が 残る 地域 が 増えて いる。 こうした 地域 で は、 商店 が 閉まり、 病院 へ 行く こと も 難しく なる など、 生活 に 不便 が 生じて いる。 一方 で、 高齢者 が 元気 に 働いたり、 地域 の 活動 に 参加 したり する 取り組み も 広がって いる。 例えば、 空き家 を 使って、 高齢者 が 集まる 場所 を 作ったり、 若い 人 と 交流 する 機会 を 増やしたり して いる 地域 も ある。 高齢化 は 問題 ばかり では ない。 高齢者 の 知識 や 経験 を 生かす こと で、 地域 は 新しい 魅力 を 生み出す こと が できる のだ。 今後 は、 世代 を 超えた つながり が、 ますます 大切 に なる だろう。 こうした 取り組み は、 地域 の 人々 の つながり を 強める 効果 も ある。 高齢者 が 元気 に 暮らせる 地域 は、 若い 人 にとっても 住みやすい 場所 に なる。 今後 は、 行政 だけ で は なく、 住民 同士 の 助け合い が、 ますます 求められる だろう。",
    "qs": [
      {
        "q": "地方 で 起きて いる 問題 として、 本文 で 述べられて いる もの は どれ です か。",
        "o": ["若い 人 が 都市 へ 移り、 商店 が 閉まる など 生活 が 不便 に なる こと。", "高齢者 が 都市 へ 移る こと。", "若い 人 が 増えすぎる こと。", "病院 が 増えすぎる こと。"],
        "a": 0,
        "e": "若い人が都市へ移り、商店が閉まり、生活が不便になっていると書かれている。"
      },
      {
        "q": "高齢化 への 取り組み として、 本文 で 述べられて いる もの は どれ です か。",
        "o": ["高齢者 を 都市 へ 移す こと。", "商店 を すべて 閉める こと。", "空き家 を 使って、 高齢者 が 集まる 場所 を 作る こと。", "若い 人 と の 交流 を なくす こと。"],
        "a": 2,
        "e": "空き家を使って高齢者が集まる場所を作る取組が紹介されている。"
      },
      {
        "q": "筆者 の 考え に 合う もの は どれ です か。",
        "o": ["高齢化 は 問題 ばかり で、 解決 できない。", "高齢者 の 知識 や 経験 を 生かす こと で、 地域 に 新しい 魅力 が 生まれる。", "高齢者 は 地域 の 活動 に 参加 すべき では ない。", "世代 を 超えた つながり は 必要 ない。"],
        "a": 1,
        "e": "高齢者の知識や経験を生かすことで地域に新しい魅力が生まれると述べられている。"
      }
    ],
    "exp": "Câu 1: bằng chứng 「若い人が都市へ移り、商店が閉まり、生活が不便になっている」— người trẻ chuyển lên thành phố, cửa hàng đóng cửa, cuộc sống bất tiện. Các đáp án khác đều ngược với bài: người cao tuổi chuyển đi, người trẻ tăng quá nhiều, bệnh viện tăng quá nhiều đều không có trong bài. Câu 2: bằng chứng 「空き家を使って高齢者が集まる場所を作る」— dùng nhà trống làm nơi gặp gỡ cho người cao tuổi. Đưa người cao tuổi lên thành phố, đóng hết cửa hàng, cắt đứt giao lưu với người trẻ đều trái với bài. Câu 3: bằng chứng 「高齢者の知識や経験を生かすことで地域に新しい魅力が生まれる」— phát huy kiến thức và kinh nghiệm của người cao tuổi sẽ tạo sức hấp dẫn mới cho vùng. Bài khẳng định 高齢化は問題ばかりではない (già hóa không chỉ toàn vấn đề) nên đáp án 1 sai; đáp án 3 và 4 trái với quan điểm của tác giả.",
    "voc": "高齢化（こうれいか）：già hóa dân số； 地方（ちほう）：địa phương； 都市（とし）：thành phố； 空き家（あきや）：nhà trống； 交流（こうりゅう）：giao lưu； 世代（せだい）：thế hệ； 行政（ぎょうせい）：chính quyền"
  },
  {
    "p": "山田町 では、 毎年 秋 に 収穫祭 が 開かれます。 この 祭り は 三百年 以上 の 歴史 が あり、 町 で いちばん 大きな 行事 です。 祭り の 日 に は、 町外 から も 多く の 人 が 訪れ、 地元 の 特産品 を 買ったり、 伝統的 な 踊り を 見たり します。 近年、 祭り に 来る 人 の 数 は 増え続け、 宿泊 施設 が 足りなく なる こと が 問題 に なって います。 町 で は、 民家 に 泊まる 仕組み を 作り、 観光客 を 受け入れる 取り組み を 始めました。 この 取り組み に より、 観光客 は 地元 の 人 の 生活 を 体験 でき、 町 に 収入 も 入る よう に なりました。 一方 で、 住民 の 生活 を 守る こと も 大切 です。 観光客 が 増えすぎる と、 ごみ の 問題 や 騒音 の 問題 が 起きる こと が あります。 そのため、 町 で は 祭り の 期間中 の ルール を 決め、 観光客 に 協力 を 求めて います。 祭り を 通して 町 が にぎわう こと は、 住民 にとっても 喜ばしい こと です。 しかし、 観光 だけ に 頼る のでは なく、 町 の 魅力 を 守りながら、 持続 可能 な 形 で 続けて いく こと が 大切 だ と、 町 の 人々 は 考えて います。",
    "qs": [
      {
        "q": "収穫祭 について、 本文 で 述べられて いる もの は どれ です か。",
        "o": ["三百年 以上 の 歴史 が あり、 町 で いちばん 大きな 行事 だ。", "毎年 春 に 開かれる。", "町外 の 人 は 来ない。", "宿泊 施設 は 十分 に ある。"],
        "a": 0,
        "e": "この祭りは三百年以上の歴史があり、町でいちばん大きな行事です。"
      },
      {
        "q": "民家 に 泊まる 仕組み について、 本文 で 述べられて いる こと は 何 か。",
        "o": ["観光客 が 減る こと。", "観光客 が 地元 の 生活 を 体験 でき、 町 に 収入 が 入る こと。", "住民 の 生活 が 苦しく なる こと。", "祭り が 中止 に なる こと。"],
        "a": 1,
        "e": "観光客は地元の人の生活を体験でき、町に収入も入るようになりました。"
      },
      {
        "q": "町 の 人々 の 考え に 合う もの は どれ です か。",
        "o": ["観光客 を 増やす こと だけ が 大切 だ。", "町 の 魅力 を 守りながら、 持続 可能 な 形 で 続けて いく こと が 大切 だ。", "祭り を やめる べき だ。", "観光客 に ルール は 必要 ない。"],
        "a": 1,
        "e": "町の魅力を守りながら、持続可能な形で続けていくことが大切だと、町の人々は考えています。"
      }
    ],
    "exp": "Câu 1: bằng chứng 「この祭りは三百年以上の歴史があり、町でいちばん大きな行事です」(lễ hội có lịch sử hơn 300 năm, là sự kiện lớn nhất của thị trấn). Đáp án 2 sai vì lễ hội mở vào 秋 (mùa thu) chứ không phải 春 (mùa xuân). Đáp án 3 sai vì 町外からも多くの人が訪れ (cả người ngoài thị trấn cũng đến). Đáp án 4 sai vì 宿泊施設が足りなくなることが問題になっています (thiếu chỗ ở đang là vấn đề). Câu 2: bằng chứng 「観光客は地元の人の生活を体験でき、町に収入も入るようになりました」. Đáp án 1, 3, 4 đều không có trong bài. Câu 3: bằng chứng 「町の魅力を守りながら、持続可能な形で続けていくことが大切だ」. Đáp án 1 sai vì bài nói không chỉ dựa vào du lịch (観光だけに頼るのではなく)、đáp án 3 sai vì bài không hề nói bỏ lễ hội、đáp án 4 sai vì bài nói thị trấn đặt ra ルール và nhờ du khách hợp tác.",
    "voc": "収穫祭（しゅうかくさい）：lễ hội thu hoạch； 歴史（れきし）：lịch sử； 行事（ぎょうじ）：sự kiện； 特産品（とくさんひん）：đặc sản； 宿泊施設（しゅくはくしせつ）：cơ sở lưu trú； 民家（みんか）：nhà dân； 騒音（そうおん）：tiếng ồn； 持続可能（じぞくかのう）：bền vững"
  },
  {
    "p": "近年、 会社 に 出勤 せず に 自宅 で 働く 人 が 増えて います。 リモートワーク が 広がった 背景 に は、 通信 技術 の 進歩 が あります。 インターネット が 速く なり、 オンライン 会議 も 手軽 に できる よう に なりました。 リモートワーク の 利点 は、 通勤 時間 が なく なり、 自分 の ペース で 働ける こと です。 育児 や 介護 を して いる 人 にとっても、 働きやすい 環境 だ と 言えます。 一方 で、 課題 も あります。 同僚 と 顔 を 合わせる 機会 が 減り、 相談 しにくく なる こと が あります。 また、 自宅 で は 仕事 と 私生活 の 区別 が つきにくく、 働きすぎて しまう 人 も います。 そのため、 企業 で は オンライン で の 雑談 の 時間 を 設けたり、 働く 時間 を 明確 に したり する 工夫 が 進められて います。 リモートワーク は、 働く 場所 を 選べる 自由 を もたらしました。 しかし、 すべて の 仕事 が 自宅 で できる わけ では ありません。 現場 で しか できない 仕事 も あります。 今後 は、 出社 と リモートワーク を 組み合わせる 働き方 が、 さらに 広がって いく と 考えられます。",
    "qs": [
      {
        "q": "リモートワーク が 広がった 背景 として、 本文 で 述べられて いる もの は どれ です か。",
        "o": ["通信 技術 の 進歩", "通勤 時間 の 増加", "会社 の 建物 の 増加", "人口 の 減少"],
        "a": 0,
        "e": "リモートワークが広がった背景には、通信技術の進歩があります。"
      },
      {
        "q": "リモートワーク の 課題 として、 本文 で 述べられて いる もの は どれ です か。",
        "o": ["通勤 時間 が 長く なる こと。", "同僚 と 顔 を 合わせる 機会 が 減り、 相談 しにくく なる こと。", "働く 時間 が 短く なる こと。", "給料 が 下がる こと。"],
        "a": 1,
        "e": "同僚と顔を合わせる機会が減り、相談しにくくなることがあります。"
      },
      {
        "q": "今後 の 働き方 について、 筆者 の 考え に 合う もの は どれ です か。",
        "o": ["すべて の 仕事 が 自宅 で できる よう に なる。", "出社 と リモートワーク を 組み合わせる 働き方 が 広がる。", "リモートワーク は なくなる。", "会社 に 出勤 する こと が なくなる。"],
        "a": 1,
        "e": "今後は、出社とリモートワークを組み合わせる働き方が、さらに広がっていくと考えられます。"
      }
    ],
    "exp": "Câu 1: bằng chứng 「リモートワークが広がった背景には、通信技術の進歩があります」(bối cảnh làm việc từ xa lan rộng là sự tiến bộ của công nghệ truyền thông). Các đáp án khác — thời gian đi làm tăng, tòa nhà công ty tăng, dân số giảm — đều không có trong bài. Câu 2: bằng chứng 「同僚と顔を合わせる機会が減り、相談しにくくなることがあります」(ít gặp mặt đồng nghiệp nên khó trao đổi). Thời gian đi làm dài hơn trái với lợi ích 通勤時間がなくなり、thời gian làm việc ngắn đi và lương giảm đều không có trong bài. Câu 3: bằng chứng 「今後は、出社とリモートワークを組み合わせる働き方が、さらに広がっていくと考えられます」. Đáp án 1 sai vì bài nói すべての仕事が自宅でできるわけではありません (không phải mọi công việc đều làm được ở nhà)、đáp án 3 và 4 trái với dự đoán của tác giả.",
    "voc": "出勤（しゅっきん）：đi làm； 自宅（じたく）：nhà riêng； 通信技術（つうしんぎじゅつ）：công nghệ truyền thông； 進歩（しんぽ）：tiến bộ； 通勤（つうきん）：đi làm (di chuyển)； 育児（いくじ）：nuôi dạy con； 介護（かいご）：chăm sóc (người già/bệnh)； 同僚（どうりょう）：đồng nghiệp； 雑談（ざつだん）：tán gẫu"
  }
  ],
  readL: [
  {
    "p": "学校 で の 学び は、 教科書 を 読んだり、 先生 の 話 を 聞いたり する こと が 中心 だっ た。 しかし、 最近 は、 体験 を 通して 学ぶ こと の 大切 さ が、 改めて 注目 されて いる。 例えば、 地域 の 人 と 話したり、 自然 の 中 で 活動 したり する こと で、 子ども たち は、 教科書 だけ で は 得られない こと を 学ぶ。 実際 に 手 を 動かし、 失敗 し、 考え直す 経験 は、 知識 を 深く 身に つける 助け に なる。 また、 体験学習 は、 他 の 人 と 協力 する 力 を 育てる。 グループ で 課題 に 取り組む とき、 意見 が ぶつかる こと も ある。 その とき、 相手 の 話 を 聞き、 自分 の 考え を 伝え、 一緒 に 解決策 を 探す。 こうした 経験 は、 社会 に 出て から も 役に立つ。 一方 で、 体験学習 に は 課題 も ある。 準備 に 時間 が かかり、 安全 に 気 を 配る 必要 が ある。 また、 体験 だけ で は、 基礎 的 な 知識 が 身に つきにくい 場合 も ある。 そのため、 体験 と 教科書 に よる 学び を、 バランス よく 組み合わせる こと が 大切 だ。 体験 は、 学び を 深める きっかけ で あり、 教科書 は、 学び を 支える 土台 だ。 両方 を 大切 に する こと で、 子ども たち の 学び は、 より 豊か な もの に なる のだ。 体験学習 を 通して、 子ども たち は、 自分 の 興味 や 得意 な こと を 見つける 場合 も ある。 先生 は、 体験 の 後 に、 子ども たち と 一緒 に 振り返り を 行い、 学び を 整理 する こと が 大切 だ と 考えて いる。",
    "qs": [
      {
        "q": "体験 を 通して 学ぶ こと の 良さ として、 本文 で 述べられて いる もの は どれ です か。",
        "o": ["実際 に 手 を 動かし、 失敗 し、 考え直す 経験 が、 知識 を 深く 身に つける 助け に なる こと。", "教科書 を 読まなく ても よく なる こと。", "準備 に 時間 が かからない こと。", "安全 に 気 を 配らなく ても よい こと。"],
        "a": 0,
        "e": "実際に手を動かし、失敗し、考え直す経験が知識を深く身につける助けになると書かれている。"
      },
      {
        "q": "体験学習 が 育てる 力 として、 本文 で 述べられて いる もの は 何 か。",
        "o": ["一人 で 勉強 する 力。", "他 の 人 と 協力 する 力。", "教科書 を 覚える 力。", "計算 する 力。"],
        "a": 1,
        "e": "体験学習は他の人と協力する力を育てると書かれている。"
      },
      {
        "q": "体験学習 の 課題 として、 本文 で 述べられて いる もの は どれ です か。",
        "o": ["子ども たち が 興味 を 持たない こと。", "教科書 が 不要 に なる こと。", "準備 に 時間 が かかり、 安全 に 気 を 配る 必要 が ある こと。", "グループ で の 活動 が できない こと。"],
        "a": 2,
        "e": "準備に時間がかかり、安全に気を配る必要があることが課題として挙げられている。"
      },
      {
        "q": "筆者 の 考え に 合う もの は どれ です か。",
        "o": ["体験学習 だけ で 十分 だ。", "教科書 に よる 学び だけ で 十分 だ。", "体験学習 は やめる べき だ。", "体験 と 教科書 に よる 学び を、 バランス よく 組み合わせる こと が 大切 だ。"],
        "a": 3,
        "e": "体験と教科書による学びをバランスよく組み合わせることが大切と述べられている。"
      }
    ],
    "exp": "Câu 1: bằng chứng 「実際に手を動かし、失敗し、考え直す経験が、知識を深く身につける助けになる」— trải nghiệm thực hành, thất bại rồi suy nghĩ lại giúp nắm vững kiến thức. Các đáp án khác đều trái với bài: bài không hề nói không cần đọc sách giáo khoa, ngược lại còn nói chuẩn bị tốn thời gian và cần chú ý an toàn. Câu 2: bằng chứng 「体験学習は、他の人と協力する力を育てる」. Tự học một mình, nhớ sách giáo khoa, tính toán đều không có trong bài. Câu 3: bằng chứng 「準備に時間がかかり、安全に気を配る必要がある」— đây là 課題 (vấn đề) của học qua trải nghiệm. Trẻ không hứng thú, sách giáo khoa trở nên không cần thiết, không làm việc nhóm được đều không có trong bài. Câu 4: bằng chứng 「体験と教科書による学びを、バランスよく組み合わせることが大切だ」— tác giả chủ trương kết hợp cân bằng cả hai, không cho rằng chỉ một bên là đủ hay nên bỏ học qua trải nghiệm.",
    "voc": "体験（たいけん）：trải nghiệm； 教科書（きょうかしょ）：sách giáo khoa； 協力（きょうりょく）：hợp tác； 解決策（かいけつさく）：giải pháp； 基礎的（きそてき）：cơ bản； バランス：cân bằng； 振り返り（ふりかえり）：nhìn lại, tổng kết"
  }
  ],
  tougou: [
  {
    "p1": "学校 で の スマートフォン の 使用 を 制限 すべき だ と 考える 人 が いる。 授業中 に スマートフォン を 使う と、 集中力 が 低下 し、 学習 の 妨げ に なる から だ。 また、 休み時間 に 動画 を 見たり、 ゲーム を したり する 生徒 が 増え、 友達 と の 会話 が 減って いる と いう 指摘 も ある。 学校 は 学ぶ 場所 で あり、 スマートフォン は 必要 ない と いう のが、 この 立場 の 主張 だ。",
    "p2": "一方、 スマートフォン の 使用 を 制限 する こと に 反対 する 人 も いる。 スマートフォン は、 調べもの や 連絡 に 役立つ 道具 で あり、 上手 に 使えば 学習 の 助け に なる から だ。 また、 使い方 を 学ぶ こと 自体 が、 大切 な 教育 だ と いう 意見 も ある。 禁止 する のでは なく、 ルール を 決めて 使わせる べき だ と、 この 立場 は 主張 して いる。 学校 で の ルール を 守る こと は、 社会 に 出て から も 役に立つ。",
    "qs": [
      {
        "q": "両方 の 文章 に 共通 して 述べられて いる こと は 何 か。",
        "o": ["スマートフォン が 学校 生活 に 影響 を 与えて いる こと。", "スマートフォン を 禁止 すべき だ と いう こと。", "スマートフォン は 学校 で 必要 ない と いう こと。", "スマートフォン を 使う 生徒 は いない と いう こと。"],
        "a": 0,
        "e": "両方の文章ともスマホが学校生活に影響を与えていることを前提にしている。"
      },
      {
        "q": "文章1 の 主張 に 合う もの は どれ です か。",
        "o": ["スマートフォン は 学習 の 助け に なる。", "スマートフォン の 使い方 を 学ぶ こと が 大切 だ。", "学校 で の スマートフォン の 使用 を 制限 すべき だ。", "ルール を 決めて 使わせる べき だ。"],
        "a": 2,
        "e": "文章1は学校でのスマホ使用を制限すべきだと主張している。"
      },
      {
        "q": "文章2 の 主張 に 合う もの は どれ です か。",
        "o": ["授業中 の スマートフォン の 使用 は 学習 の 妨げ に なる。", "禁止 する のでは なく、 ルール を 決めて 使わせる べき だ。", "学校 は 学ぶ 場所 で、 スマートフォン は 必要 ない。", "休み時間 の 会話 が 減って いる。"],
        "a": 1,
        "e": "文章2は禁止ではなくルールを決めて使わせるべきだと主張している。"
      }
    ],
    "exp": "Câu 1: cả hai bài đều bàn về ảnh hưởng của điện thoại thông minh đối với đời sống học đường — bài 1 nói làm giảm tập trung và giảm trò chuyện, bài 2 nói là công cụ hữu ích và cần học cách dùng. Các đáp án 2 và 3 chỉ là主張 của bài 1, không phải điểm chung; đáp án 4 sai vì cả hai bài đều nói học sinh có dùng điện thoại. Câu 2: bằng chứng bài 1 「学校でのスマートフォンの使用を制限すべきだ」. Đáp án 1 và 4 là主張 của bài 2, đáp án 3 trái với bài 1 (bài 1 nói 制限すべき chứ không nói ルールを決めて使わせる). Câu 3: bằng chứng bài 2 「禁止するのではなく、ルールを決めて使わせるべきだ」. Đáp án 1 và 3 là主張 của bài 1, đáp án 4 là指摘 trong bài 1.",
    "voc": "制限（せいげん）：hạn chế； 集中力（しゅうちゅうりょく）：khả năng tập trung； 妨げ（さまたげ）：trở ngại； 調べもの（しらべもの）：tra cứu； 禁止（きんし）：cấm"
  }
  ],
  shuchou: [
  {
    "p": "失敗 は、 避ける べき もの だ と、 多く の 人 は 考えて いる。 しかし、 私 は、 失敗 こそ が、 人 を 成長 させる 大切 な 経験 だ と 考える。 成功 だけ を 重ねて きた 人 は、 失敗 した とき に、 どう 対処 すれば よい か 分からず、 立ち直る こと が 難しい。 一方、 失敗 を 経験 した 人 は、 失敗 の 原因 を 考え、 次 に 生かす 力 を 身に つける。 例えば、 試験 に 失敗 した 学生 が、 勉強 の 方法 を 見直し、 次 の 試験 で 良い 結果 を 出す こと は、 よく ある 話 だ。 失敗 は、 自分 の 弱点 を 教えて くれる。 弱点 を 知る こと は、 恥ずかしい こと では ない。 むしろ、 弱点 を 知らなければ、 成長 する こと は できない。 もちろん、 同じ 失敗 を 繰り返す こと は、 良い こと では ない。 大切 な の は、 失敗 した 後、 なぜ 失敗 した のか を 振り返り、 次 に どう するか を 考える こと だ。 失敗 を 恐れて、 挑戦 しなければ、 成功 する こと も ない。 挑戦 する から こそ、 失敗 が あり、 失敗 から 学ぶ から こそ、 成長 が ある。 学校 や 会社 は、 失敗 を 責める のでは なく、 失敗 から 学ぶ こと を 支える 場所 で ある べき だ。 失敗 を 許す 文化 が あって こそ、 人 は 安心 して 挑戦 できる。 失敗 から 学ぶ ため に は、 失敗 を 正直 に 認める こと が 必要 だ。 失敗 を 他人 の せい に しては、 何も 学ぶ こと は できない。 自分 の 行動 を 振り返り、 何 が 足りなかった のか を 考える こと で、 初めて 次 へ の 一歩 が 踏み出せる。 歴史 に 名 を 残した 多く の 人々 も、 数えきれない 失敗 を 経験 して きた。 発明家 が 新しい 発明 を する まで に、 何度 も 失敗 を 繰り返した と いう 話 は、 有名 だ。 成功 は、 失敗 の 積み重ね の 上 に ある と いっても、 過言 では ない。 失敗 を 経験 する たび に、 人 は 少しずつ 強く なる。 私 は、 失敗 を 恐れず に 挑戦 し、 失敗 から 学び続ける こと こそ、 人生 を 豊か に する 道 だ と 信じて いる。",
    "qs": [
      {
        "q": "筆者 が 最も 言いたい こと は 何 か。",
        "o": ["失敗 こそ が、 人 を 成長 させる 大切 な 経験 だ。", "失敗 は 避ける べき もの だ。", "成功 だけ を 重ねる こと が 大切 だ。", "失敗 を 繰り返す こと が 大切 だ。"],
        "a": 0,
        "e": "筆者は失敗こそが人を成長させる大切な経験だと述べている。"
      },
      {
        "q": "筆者 の 考え に 合う もの は どれ です か。",
        "o": ["失敗 を 恐れて、 挑戦 しない こと が 大切 だ。", "失敗 した 後、 原因 を 振り返り、 次 に 生かす こと が 大切 だ。", "失敗 は 弱点 を 教えない。", "失敗 した 人 を 責める べき だ。"],
        "a": 1,
        "e": "失敗した後に原因を振り返り、次に生かすことが大切と述べられている。"
      },
      {
        "q": "成功 だけ を 重ねて きた 人 について、 筆者 は どう 述べて いる か。",
        "o": ["失敗 した とき に、 すぐ に 立ち直る こと が できる。", "失敗 の 原因 を 考える 力 が ある。", "失敗 から 学ぶ 力 が ある。", "失敗 した とき に、 立ち直る こと が 難しい。"],
        "a": 3,
        "e": "成功だけを重ねてきた人は失敗したときに立ち直ることが難しいと述べられている。"
      },
      {
        "q": "学校 や 会社 について、 筆者 は どう 考える か。",
        "o": ["失敗 を 責める 場所 で ある べき だ。", "失敗 から 学ぶ こと を 支える 場所 で ある べき だ。", "失敗 を 許さない 場所 で ある べき だ。", "挑戦 を 禁止 する 場所 で ある べき だ。"],
        "a": 1,
        "e": "学校や会社は失敗から学ぶことを支える場所であるべきだと述べられている。"
      }
    ],
    "exp": "Câu 1 (主張 chính): bằng chứng 「失敗こそが、人を成長させる大切な経験だ」— thất bại chính là kinh nghiệm quý giá giúp con người trưởng thành. Đáp án 2 là quan điểm của 多くの人 mà tác giả phản bác、đáp án 3 trái với bài (người chỉ biết thành công thì khó đứng dậy khi thất bại)、đáp án 4 sai vì bài nói 同じ失敗を繰り返すことは、良いことではない (lặp lại cùng một thất bại thì không tốt). Câu 2: bằng chứng 「失敗した後、なぜ失敗したのかを振り返り、次にどうするかを考えることが大切だ」. Sợ thất bại mà không thử thách thì không bao giờ thành công nên đáp án 1 sai; thất bại dạy cho ta điểm yếu nên đáp án 3 sai; bài nói không nên trách móc người thất bại nên đáp án 4 sai. Câu 3: bằng chứng 「成功だけを重ねてきた人は、失敗したときに、どう対処すればよいか分からず、立ち直ることが難しい」. Câu 4: bằng chứng 「学校や会社は、失敗を責めるのではなく、失敗から学ぶことを支える場所であるべきだ」.",
    "voc": "失敗（しっぱい）：thất bại； 成長（せいちょう）：trưởng thành； 対処（たいしょ）：đối phó, xử lý； 立ち直る（たちなおる）：đứng dậy, vượt qua； 弱点（じゃくてん）：điểm yếu； 挑戦（ちょうせん）：thử thách； 振り返る（ふりかえる）：nhìn lại, suy ngẫm"
  }
  ],
  info: [
  {
    "tpl": "<b>A フリーマーケットのお知らせ</b><br>来月、駅の 近くで フリーマーケットが あります。時間は 10時〜16時です。雨の日は 休みです。<br><table class=\"jl-tbl\"><tr><th>売る 物</th><th>場所</th><th>日</th></tr><tr><td>食べ物（たこ焼き、かき氷、ジュース）</td><td>中央広場</td><td>土曜日と日曜日</td></tr><tr><td>本・CD</td><td>図書館の前</td><td>土曜日</td></tr><tr><td>手作りの品（アクセサリー、かばん）</td><td>公民館</td><td>日曜日</td></tr><tr><td>花・植物</td><td>公園の入口</td><td>土曜日と日曜日</td></tr></table><b>B カレンダー（来月）</b><br><table class=\"jl-cal\"><tr><th>月</th><th>火</th><th>水</th><th>木</th><th>金</th><th>土</th><th>日</th></tr><tr><td></td><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td></tr><tr><td>7</td><td>8</td><td>9</td><td>10</td><td>11</td><td>12</td><td>13</td></tr></table>",
    "inst": "つぎのA「フリーマーケットのお知らせ」とBのカレンダーを見て、質問に答えてください。答えは1・2・3・4から、いちばんいいものを一つえらんでください。",
    "q": "今日は 4日 (金曜日) です。本を 売りたいです。何日に どこで 売れますか。",
    "opts": ["4日に図書館の前", "5日に図書館の前", "5日に中央広場", "6日に図書館の前"],
    "ans": 1,
    "exp": "Sách và CD (本・CD) chỉ bán vào thứ Bảy ở trước thư viện (図書館の前). Hôm nay là thứ Sáu 4/11, thứ Bảy tiếp theo là 5/11 nên đáp án 2 đúng. Đáp án 1 sai vì 4/11 là thứ Sáu, không phải thứ Bảy. Đáp án 3 sai vì 中央広場 (quảng trường trung tâm) là chỗ bán đồ ăn, không phải sách. Đáp án 4 sai vì 6/11 là Chủ nhật, sách chỉ bán thứ Bảy.",
    "voc": "フリーマーケット：chợ trời, chợ phiên； 本（ほん）：sách； 図書館（としょかん）：thư viện； 中央広場（ちゅうおうひろば）：quảng trường trung tâm； 土曜日（どようび）：thứ Bảy"
  },
  {
    "tpl": "<b>A ジムのお知らせ（11月）</b><br>11月から、特別プログラムが 始まります。<br><table class=\"jl-tbl\"><tr><th>プログラム</th><th>曜日</th><th>時間</th><th>場所</th></tr><tr><td>ヨガ</td><td>火曜日と木曜日</td><td>10時〜11時</td><td>スタジオA</td></tr><tr><td>水泳教室</td><td>水曜日と土曜日</td><td>14時〜15時</td><td>プール</td></tr><tr><td>筋力トレーニング</td><td>月曜日と金曜日</td><td>19時〜20時</td><td>トレーニング室</td></tr><tr><td>ダンス</td><td>日曜日</td><td>11時〜12時</td><td>スタジオB</td></tr></table><b>B カレンダー（11月）</b><br><table class=\"jl-cal\"><tr><th>月</th><th>火</th><th>水</th><th>木</th><th>金</th><th>土</th><th>日</th></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td><td>1</td></tr><tr><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td></tr><tr><td>9</td><td>10</td><td>11</td><td>12</td><td>13</td><td>14</td><td>15</td></tr><tr><td>16</td><td>17</td><td>18</td><td>19</td><td>20</td><td>21</td><td>22</td></tr><tr><td>23</td><td>24</td><td>25</td><td>26</td><td>27</td><td>28</td><td>29</td></tr><tr><td>30</td><td></td><td></td><td></td><td></td><td></td><td></td></tr></table>",
    "inst": "つぎのA「ジムのお知らせ」とBのカレンダーを見て、質問に答えてください。答えは1・2・3・4から、いちばんいいものを一つえらんでください。",
    "q": "今日は 11月 2日 (月曜日) です。水泳教室に 参加したいです。つぎの 水泳教室は 何日に どこで 行われますか。",
    "opts": ["11月 3日に プール", "11月 4日に プール", "11月 4日に スタジオA", "11月 7日に スタジオB"],
    "ans": 1,
    "exp": "Lớp bơi (水泳教室) diễn ra vào thứ Tư và thứ Bảy, ở hồ bơi (プール). Hôm nay là thứ Hai 2/11, buổi học gần nhất (つぎの) là thứ Tư 4/11 nên đáp án 2 đúng. Đáp án 1 sai vì 3/11 là thứ Ba, là ngày học ヨガ chứ không phải bơi. Đáp án 3 sai vì スタジオA là phòng tập yoga, lớp bơi ở プール. Đáp án 4 sai vì 7/11 tuy là thứ Bảy có lớp bơi nhưng không phải buổi gần nhất, và スタジオB là phòng học ダンス. Lịch đã kiểm tra theo tháng 11/2026 thật: 1/11 là Chủ nhật, 4/11 là thứ Tư, 7/11 là thứ Bảy.",
    "voc": "水泳教室（すいえいきょうしつ）：lớp bơi； プール：hồ bơi； ヨガ：yoga； 筋力トレーニング（きんりょくトレーニング）：tập luyện sức mạnh； 参加（さんか）：tham gia"
  }
  ]
};

/* ----- Test 2 ----- */
window.WRITTEN_N1_SET2 = {
  "yomi": [
    {
      "s": "この 制度 は すべて の 市民 を 包括 する もの です。",
      "t": "包括",
      "r": "ほうかつ",
      "w": [
        "ほうかっ",
        "ほうがつ",
        "ほうかく"
      ],
      "exp": "包括 đọc là ほうかつ（包 ほう、括 かつ）。ほうかっ thiếu âm う nên sai、ほうがつ đọc 括 thành がつ là sai、ほうかく đọc 括 thành かく là sai。",
      "voc": "包括（ほうかつ）：bao gồm, bao quát； 制度（せいど）：chế độ； 市民（しみん）：công dân"
    },
    {
      "s": "彼 の 記録 は これ まで の 記録 を 凌駕 して いる。",
      "t": "凌駕",
      "r": "りょうが",
      "w": [
        "りょうか",
        "りょうがく",
        "りょうげ"
      ],
      "exp": "凌駕 đọc là りょうが（凌 りょう、駕 が）。りょうか đọc 駕 thành か là sai、りょうがく thêm く thừa nên sai、りょうげ đọc 駕 thành げ là sai。",
      "voc": "凌駕（りょうが）：vượt qua, vượt trội； 記録（きろく）：kỷ lục； 彼（かれ）：anh ấy"
    },
    {
      "s": "彼女 は 返事 を する の を 躊躇 して いる。",
      "t": "躊躇",
      "r": "ちゅうちょ",
      "w": [
        "ちゅうちょう",
        "ゆうちょ",
        "ちゅうちょく"
      ],
      "exp": "躊躇 đọc là ちゅうちょ（躊 ちゅう、躇 ちょ）。ちゅうちょう thêm う thừa nên sai、ゆうちょ đọc 躊 thành ゆう là sai、ちゅうちょく thêm く thừa nên sai。",
      "voc": "躊躇（ちゅうちょ）：do dự, chần chừ； 返事（へんじ）：trả lời"
    },
    {
      "s": "雨 の 日 が 続いて、 憂鬱 な 気分 に なった。",
      "t": "憂鬱",
      "r": "ゆううつ",
      "w": [
        "ゆううん",
        "ゆうつ",
        "ううつ"
      ],
      "exp": "憂鬱 đọc là ゆううつ（憂 ゆう、鬱 うつ）。ゆううん đọc 鬱 thành うん là sai、ゆうつ thiếu âm う nên sai、ううつ thiếu âm ゆ nên sai。",
      "voc": "憂鬱（ゆううつ）：u sầu, ủ rũ； 気分（きぶん）：tâm trạng； 雨（あめ）：mưa"
    },
    {
      "s": "説明 が 曖昧 で、 具体 的 な 内容 が 伝わってこなかった。",
      "t": "曖昧",
      "r": "あいまい",
      "w": [
        "あいめい",
        "あんまい",
        "あいま"
      ],
      "exp": "曖昧 đọc là あいまい（曖 あい、昧 まい）。あいめい đọc 昧 thành めい là sai、あんまい đọc 曖 thành あん là sai、あいま thiếu âm い nên sai。",
      "voc": "曖昧（あいまい）：mơ hồ, không rõ ràng； 説明（せつめい）：giải thích； 具体的（ぐたいてき）：cụ thể； 内容（ないよう）：nội dung； 伝わる（つたわる）：được truyền đạt"
    },
    {
      "s": "その 計画 に は 膨大 な 費用 が かかる。",
      "t": "膨大",
      "r": "ぼうだい",
      "w": [
        "ぼうたい",
        "ほうだい",
        "ぼだい"
      ],
      "exp": "膨大 đọc là ぼうだい（膨 ぼう、大 だい）。ぼうたい đọc 大 thành たい là sai、ほうだい đọc 膨 thành ほう là sai、ぼだい thiếu âm う nên sai。",
      "voc": "膨大（ぼうだい）：khổng lồ, đồ sộ； 計画（けいかく）：kế hoạch； 費用（ひよう）：chi phí"
    }
  ],
  "ctx": [
    {
      "s": "この 地域 は、 豊か な 自然 に （　）まれて いる。",
      "a": "恵",
      "w": [
        "悩",
        "苦",
        "困"
      ],
      "exp": "恵まれる nghĩa là được thiên nhiên ưu đãi, ban tặng — 豊かな自然に恵まれている là cụm cố định. 悩まれる・苦まれる・困まれる không tạo thành cụm từ tự nhiên trong câu này: 悩む・苦しむ・困る là động từ khác nghĩa và không kết hợp với 自然に〜まれる。",
      "voc": "恵まれる（めぐまれる）：được ban tặng, được ưu đãi； 豊か（ゆたか）：phong phú； 自然（しぜん）：thiên nhiên； 地域（ちいき）：khu vực"
    },
    {
      "s": "彼 の 提案 は、 委員会 で 全会一致 で （　）された。",
      "a": "採択",
      "w": [
        "却下",
        "否決",
        "保留"
      ],
      "exp": "採択される nghĩa là được thông qua, chấp thuận (đề án) — 全会一致で採択された là cụm cố định. 却下される là bị bác bỏ, 否決される là bị phủ quyết — ngược nghĩa với 全会一致; 保留される là bị hoãn lại — cũng không phù hợp với 全会一致。",
      "voc": "採択（さいたく）：thông qua, chấp thuận； 提案（ていあん）：đề xuất； 委員会（いいんかい）：ủy ban； 全会一致（ぜんかいいっち）：nhất trí toàn thể"
    },
    {
      "s": "その 新しい 制度 は、 多く の 市民 に （　）され、 順調 に 進んで いる。",
      "a": "支持",
      "w": [
        "反対",
        "批判",
        "無視"
      ],
      "exp": "支持される nghĩa là được ủng hộ — phù hợp với 順調に進んでいる (chế độ tiến triển thuận lợi vì được dân ủng hộ). 反対される (bị phản đối), 批判される (bị chỉ trích), 無視される (bị phớt lờ) đều mâu thuẫn với 順調に進んでいる。",
      "voc": "支持（しじ）：ủng hộ； 制度（せいど）：chế độ； 市民（しみん）：công dân； 順調（じゅんちょう）：thuận lợi"
    },
    {
      "s": "彼 は、 長年 の 研究 の （　）を 認められ、 賞 を 受賞 した。",
      "a": "成果",
      "w": [
        "失敗",
        "効果",
        "成績"
      ],
      "exp": "研究の成果 nghĩa là thành quả nghiên cứu — thứ được công nhận và trao giải. 失敗 (thất bại) thì mâu thuẫn hoàn toàn với 認められる và 受賞する — thất bại không được công nhận để trao giải; 効果 là hiệu quả/tác dụng, 成績 là thành tích học tập — đều không kết hợp với 長年の研究 và 受賞。",
      "voc": "成果（せいか）：thành quả； 研究（けんきゅう）：nghiên cứu； 認められる：được công nhận； 受賞（じゅしょう）：nhận giải thưởng； 失敗（しっぱい）：thất bại"
    },
    {
      "s": "彼 の 演説 は、 聴衆 の 心 を （　）ち、 会場 は 大きな 拍手 に 包まれた。",
      "a": "打",
      "w": [
        "押",
        "引",
        "踏"
      ],
      "exp": "心を打つ là cụm cố định nghĩa là lay động lòng người — phù hợp với 会場は大きな拍手に包まれた. 心を押す・心を引く・心を踏む đều không phải cụm từ tự nhiên trong tiếng Nhật.",
      "voc": "演説（えんぜつ）：diễn thuyết； 聴衆（ちょうしゅう）：thính giả； 心を打つ（こころをうつ）：lay động lòng người； 拍手（はくしゅ）：tiếng vỗ tay"
    },
    {
      "s": "この 問題 に ついて は、 専門家 の 間 で も 意見 が （　）いて、 結論 が 出ない。",
      "a": "分かれ",
      "w": [
        "集まり",
        "まとまり",
        "重なり"
      ],
      "exp": "意見が分かれている nghĩa là ý kiến chia rẽ — phù hợp với 結論が出ない (không đi đến kết luận được). 意見が集まっている・まとまっている (ý kiến tập hợp/thống nhất) hay 重なっている (trùng nhau) đều mâu thuẫn với 結論が出ない。",
      "voc": "専門家（せんもんか）：chuyên gia； 意見（いけん）：ý kiến； 分かれる（わかれる）：chia rẽ； 結論（けつろん）：kết luận"
    },
    {
      "s": "その 映画 は、 観客 に 深い （　）を 与え、 多く の 人 が 涙 を 流した。",
      "a": "感動",
      "w": [
        "好感",
        "印象",
        "衝撃"
      ],
      "exp": "感動を与える nghĩa là gây xúc động — phù hợp nhất với 多くの人が涙を流した (nhiều người đã khóc). 好感を与える (gây thiện cảm) là cảm xúc tích cực nhẹ nhàng, không khiến người ta khóc; 印象を与える (gây ấn tượng) không trực tiếp dẫn tới khóc; 衝撃を与える (gây sốc) cũng không gắn với 涙を流した。",
      "voc": "感動（かんどう）：xúc động； 観客（かんきゃく）：khán giả； 涙（なみだ）：nước mắt； 映画（えいが）：phim； 好感（こうかん）：thiện cảm"
    }
  ],
  "syn": [
    {
      "s": "この 地域 は 水産 資源 が 豊富 です。",
      "t": "豊富",
      "a": "ゆたか",
      "w": [
        "すくない",
        "まずしい",
        "かんたん"
      ],
      "exp": "豊富 nghĩa là phong phú, dồi dào — đồng nghĩa với ゆたか. すくない (ít) và まずしい (nghèo nàn) là trái nghĩa; かんたん (đơn giản) không liên quan đến số lượng hay tài nguyên。",
      "voc": "豊富（ほうふ）：phong phú, dồi dào； 水産資源（すいさんしげん）：tài nguyên thủy sản； 地域（ちいき）：khu vực"
    },
    {
      "s": "彼 の 説明 は 明確 で、 誰 も が 理解 できた。",
      "t": "明確",
      "a": "はっきり",
      "w": [
        "あいまい",
        "ふめい",
        "もやもや"
      ],
      "exp": "明確 nghĩa là rõ ràng, rành mạch — đồng nghĩa với はっきり. あいまい (mơ hồ) và ふめい (không rõ) là trái nghĩa; もやもや (cảm giác mơ hồ, u ám trong lòng) không phải từ đồng nghĩa với 明確。",
      "voc": "明確（めいかく）：rõ ràng； 説明（せつめい）：giải thích； 理解（りかい）：hiểu"
    },
    {
      "s": "彼 の 態度 は 非常に 横柄 だった。",
      "t": "横柄",
      "a": "偉そう",
      "w": [
        "謙虚",
        "丁寧",
        "控えめ"
      ],
      "exp": "横柄 nghĩa là hống hách, trịch thượng — đồng nghĩa với 偉そう (ra vẻ ta đây). 謙虚 (khiêm tốn), 丁寧 (lịch sự), 控えめ (khiêm nhường) đều là trái nghĩa.",
      "voc": "横柄（おうへい）：hống hách, trịch thượng； 態度（たいど）：thái độ； 非常に（ひじょうに）：rất"
    },
    {
      "s": "彼女 は いつも 穏やか な 性格 だ。",
      "t": "穏やか",
      "a": "落ち着いた",
      "w": [
        "激しい",
        "荒い",
        "騒がしい"
      ],
      "exp": "穏やか nghĩa là ôn hòa, điềm đạm — đồng nghĩa với 落ち着いた (trầm tĩnh). 激しい (dữ dội), 荒い (thô bạo), 騒がしい (ồn ào) đều là trái nghĩa.",
      "voc": "穏やか（おだやか）：ôn hòa, điềm đạm； 性格（せいかく）：tính cách； 落ち着いた（おちついた）：trầm tĩnh"
    },
    {
      "s": "彼 は 仕事 に 専念 して いる。",
      "t": "専念",
      "a": "集中",
      "w": [
        "怠慢",
        "放棄",
        "散漫"
      ],
      "exp": "専念する nghĩa là chuyên tâm, dồn hết tâm sức vào việc gì — đồng nghĩa với 集中する (tập trung). 怠慢 (lơ là, chểnh mảng), 放棄 (từ bỏ), 散漫 (đãng trí, không tập trung) đều là trái nghĩa.",
      "voc": "専念（せんねん）：chuyên tâm； 集中（しゅうちゅう）：tập trung； 仕事（しごと）：công việc"
    },
    {
      "s": "彼女 は いつも 朗らか だ。",
      "t": "朗らか",
      "a": "明るい",
      "w": [
        "暗い",
        "陰気",
        "沈んだ"
      ],
      "exp": "朗らか nghĩa là vui vẻ, tươi sáng — đồng nghĩa với 明るい. 暗い (tối tăm, u ám), 陰気 (âm u, ủ rũ), 沈んだ (chìm xuống, buồn bã) đều là trái nghĩa.",
      "voc": "朗らか（ほがらか）：vui vẻ, tươi sáng； 明るい（あかるい）：tươi sáng"
    }
  ],
  "yoho": [
    {
      "t": "深刻",
      "s": [
        "彼 の 髪 は 深刻 です。",
        "この 料理 は 深刻 に おいしい です。",
        "環境 問題 は 深刻 です。",
        "彼女 の 字 は 深刻 に きれい です。"
      ],
      "a": 2,
      "exp": "深刻 chỉ dùng cho vấn đề hay tình hình nghiêm trọng (環境問題は深刻です). 髪・料理・字 không thể 深刻 được; 深刻においしい và 深刻にきれいだ đều là cách dùng sai vì 深刻 không phải phó từ chỉ mức độ.",
      "voc": "深刻（しんこく）：nghiêm trọng； 環境問題（かんきょうもんだい）：vấn đề môi trường； 髪（かみ）：tóc； 料理（りょうり）：món ăn"
    },
    {
      "t": "緊密",
      "s": [
        "彼 は 緊密 な 朝ごはん を 食べた。",
        "この 部屋 は 緊密 な 空気 です。",
        "彼女 は 緊密 な 靴 を はいた。",
        "両国 は 緊密 な 関係 を 築いて いる。"
      ],
      "a": 3,
      "exp": "緊密 dùng cho quan hệ hay mối liên hệ chặt chẽ (緊密な関係を築く). 朝ごはん・空気・靴 không thể 緊密 được vì 緊密 không chỉ tính chất của đồ vật hay bữa ăn.",
      "voc": "緊密（きんみつ）：chặt chẽ, khăng khít； 関係（かんけい）：quan hệ； 両国（りょうこく）：hai nước； 築く（きずく）：xây dựng"
    },
    {
      "t": "惜しい",
      "s": [
        "この 本 は 惜しい です。",
        "彼 の 顔 は 惜しい です。",
        "あと 一点 で 優勝 を 逃す の は 惜しい こと だ。",
        "今日 は 惜しい 天気 です。"
      ],
      "a": 2,
      "exp": "惜しい dùng khi tiếc nuối vì suýt đạt được mà để vuột mất (あと一点で優勝を逃すのは惜しい). 本・顔・天気 không thể 惜しい được: 本は惜しい・顔は惜しい・天気は惜しい đều không phải cách dùng tự nhiên.",
      "voc": "惜しい（おしい）：đáng tiếc； 優勝（ゆうしょう）：vô địch, chiến thắng； 逃す（のがす）：để vuột mất"
    },
    {
      "t": "かねて",
      "s": [
        "彼 は かねて から 走って いる。",
        "留学 する こと は かねて から の 希望 だった。",
        "かねて から の 雨 が 降って いる。",
        "彼女 は かねて から 料理 を 作って いる。"
      ],
      "a": 1,
      "exp": "かねてから nghĩa là 'từ lâu, từ trước tới nay' và chỉ đi với những điều ấp ủ lâu dài như 希望 (nguyện vọng từ lâu). 走っている・雨が降っている・料理を作っている đều là hành động hay hiện tượng thường ngày, không kết hợp với かねてから; かねてからの雨 cũng không phải cách nói tự nhiên.",
      "voc": "かねてから：từ lâu, từ trước tới nay； 留学（りゅうがく）：du học； 希望（きぼう）：nguyện vọng"
    },
    {
      "t": "あえて",
      "s": [
        "彼 は あえて 難しい 道 を 選んだ。",
        "この ケーキ は あえて おいしい です。",
        "あえて の 天気 が 良い です。",
        "彼女 は あえて 水 を 飲んだ。"
      ],
      "a": 0,
      "exp": "あえて nghĩa là 'dám, cố tình (làm điều khó khăn, trái với lẽ thường)' — あえて難しい道を選んだ là cách dùng đúng. ケーキがあえておいしい và あえての天気が良い đều sai ngữ pháp và ngữ nghĩa vì あえて là phó từ chỉ hành động có chủ ý, không bổ nghĩa cho tính từ hay danh từ như vậy; あえて水を飲んだ cũng không tự nhiên vì uống nước không phải việc cần 'dám' làm.",
      "voc": "あえて：dám, cố tình； 難しい（むずかしい）：khó khăn； 選ぶ（えらぶ）：lựa chọn"
    },
    {
      "t": "乏しい",
      "s": [
        "その 地域 は 雨 が 乏しい。",
        "彼 の 背 は 乏しい です。",
        "この 店 は 乏しい です。",
        "彼女 の 声 は 乏しい です。"
      ],
      "a": 0,
      "exp": "乏しい nghĩa là khan hiếm, ít ỏi — dùng cho lượng mưa, tài nguyên, kiến thức... (雨が乏しい = lượng mưa ít). 背・店・声 không thể 乏しい được: 背が乏しい・店が乏しい・声が乏しい đều không phải cách dùng tự nhiên.",
      "voc": "乏しい（とぼしい）：khan hiếm, ít ỏi； 地域（ちいき）：khu vực； 雨（あめ）：mưa"
    }
  ],
  "g1dlg": [
    {
      "d": [
        "山田さんは、かいしゃで はたらきながら、大学院でも 勉強して いるそうですね。",
        "ええ、仕事の（　）、大学院で 研究も して いるんです。"
      ],
      "a": "かたわら",
      "w": [
        "さいちゅうに",
        "あいだに",
        "ちゅうに"
      ],
      "exp": "仕事のかたわら nghĩa là bên cạnh công việc chính, vừa làm việc vừa làm thêm việc khác (ở đây là vừa đi làm vừa học cao học). さいちゅうに・あいだに・ちゅうに đều chỉ 'trong lúc' nhưng không diễn tả ý 'song song với công việc chính'; さいちゅうに và ちゅうに cũng không kết hợp tự nhiên với 仕事の。",
      "voc": "かたわら：bên cạnh, đồng thời； 大学院（だいがくいん）：cao học； 研究（けんきゅう）：nghiên cứu； 仕事（しごと）：công việc",
      "p": "〜かたわら"
    },
    {
      "d": [
        "田中さん、どうして 引っ越す こと に なったんですか。",
        "会社 の 都合 で、 転勤 を （　）んです。"
      ],
      "a": "余儀なくされた",
      "w": [
        "余儀なくして",
        "余儀なくさせて",
        "余儀なくされる"
      ],
      "p": "N + を余儀なくされる",
      "exp": "転勤を余儀なくされた nghĩa là bị buộc phải chuyển công tác vì hoàn cảnh — quá khứ, phù hợp với どうして引っ越すことになったんですか (chuyện đã xảy ra). 余儀なくして là dạng sai (không kết hợp với んです), 余儀なくさせて là thể sai khiến, không phù hợp; 余儀なくされる ở thì hiện tại thì không khớp với ngữ cảnh quá khứ.",
      "voc": "余儀なくされる（よぎなくされる）：bị buộc phải； 転勤（てんきん）：chuyển công tác； 都合（つごう）：hoàn cảnh, lý do"
    },
    {
      "d": [
        "山田さん、明日 の 発表、 資料 は 集まって います か。",
        "ええ、 念 の ため、 予備 の 資料 も 用意 して おく に （　）と 思って います。"
      ],
      "a": "越したことはない",
      "w": [
        "越したことだ",
        "越したことはある",
        "越したことにない"
      ],
      "p": "〜に越したことはない",
      "exp": "〜に越したことはない là cụm cố định nghĩa là 'không gì bằng..., tốt nhất là...' — 用意しておくに越したことはない = chuẩn bị trước thì tốt nhất. 越したことだ・越したことはある・越したことにない đều không phải dạng đúng của mẫu này.",
      "voc": "越したことはない（こしたことはない）：không gì bằng, tốt nhất là； 念のため（ねんのため）：để chắc chắn； 予備（よび）：dự phòng； 用意（ようい）：chuẩn bị"
    }
  ],
  "g1": [
    {
      "s": "この 事故 は、 運転手 の 不注意（　）もの だ と 考えられて いる。",
      "a": "に起因する",
      "w": [
        "に由来する",
        "がもとで",
        "によって"
      ],
      "p": "N + に起因する",
      "exp": "Nに起因する nghĩa là 'do N gây ra, bắt nguồn từ N' — 不注意に起因するものだ = vụ tai nạn do sự bất cẩn gây ra. に由来する chỉ nguồn gốc của từ ngữ hay phong tục, không dùng cho nguyên nhân tai nạn; がもとで cần đi với mệnh đề kết quả (不注意がもとで事故が起きた) nên không đứng trước ものだ được; によってものだ là dạng sai ngữ pháp.",
      "voc": "起因する（きいんする）：bắt nguồn từ, do... gây ra； 不注意（ふちゅうい）：bất cẩn； 事故（じこ）：tai nạn"
    },
    {
      "s": "彼 は 海外 に 行って（　）、日本 の 食べ物 が 恋しく なった。",
      "a": "からというもの",
      "w": [
        "からというのに",
        "からということで",
        "からというわけで"
      ],
      "p": "〜てからというもの",
      "exp": "〜てからというもの nghĩa là 'từ khi... trở đi (trạng thái kéo dài)' — 行ってからというもの、日本の食べ物が恋しくなった = từ khi ra nước ngoài, anh ấy bắt đầu nhớ đồ ăn Nhật. からというのに (mặc dù), からということで (vì lý do đó), からというわけで (vì vậy) đều không kết hợp được với 行って trong câu này.",
      "voc": "海外（かいがい）：nước ngoài； 恋しい（こいしい）：nhớ nhung； 食べ物（たべもの）：đồ ăn"
    },
    {
      "s": "彼 は 二度と 遅刻 する（　）と 心 に 誓った。",
      "a": "まい",
      "w": [
        "べき",
        "はず",
        "もの"
      ],
      "p": "V-る + まい",
      "exp": "Vるまい diễn tả quyết tâm phủ định 'quyết không...' — 遅刻するまいと心に誓った = thề trong lòng quyết không đi muộn nữa. 遅刻するべき (nên đi muộn — sai nghĩa), 遅刻するはず (chắc sẽ đi muộn — sai nghĩa), 遅刻するもの (dạng sai, không kết hợp với と心に誓った) đều không phù hợp.",
      "voc": "二度と（にどと）：không bao giờ nữa； 遅刻（ちこく）：đi muộn； 誓う（ちかう）：thề"
    },
    {
      "s": "彼 は 英語（　）、フランス語 も 自由 に 話す。",
      "a": "ばかりか",
      "w": [
        "ばかりで",
        "ばかりに",
        "ばかりと"
      ],
      "p": "〜ばかりか",
      "exp": "〜ばかりか nghĩa là 'không chỉ... mà còn...' — 英語ばかりか、フランス語も自由に話す = không chỉ tiếng Anh mà cả tiếng Pháp cũng nói trôi chảy. ばかりで・ばかりに・ばかりと đều không phải dạng đúng của mẫu này trong câu này (ばかりで cần ない, ばかりに chỉ nguyên nhân, ばかりと không tồn tại).",
      "voc": "英語（えいご）：tiếng Anh； フランス語（フランスご）：tiếng Pháp； 自由に（じゆうに）：tự do, trôi chảy"
    },
    {
      "s": "先輩（　）、後輩 は 仕事 が 丁寧 だ。",
      "a": "にひきかえ",
      "w": [
        "にひきかえて",
        "にひきかえる",
        "にひきかえに"
      ],
      "p": "〜にひきかえ",
      "exp": "Nにひきかえ nghĩa là 'trái ngược với N, trong khi N thì...' — 先輩にひきかえ、後輩は仕事が丁寧だ = trái với đàn anh, đàn em làm việc rất cẩn thận. にひきかえて・にひきかえる・にひきかえに đều là dạng sai, không tồn tại trong mẫu này.",
      "voc": "先輩（せんぱい）：đàn anh, tiền bối； 後輩（こうはい）：đàn em, hậu bối； 丁寧（ていねい）：cẩn thận, tỉ mỉ"
    },
    {
      "s": "彼 は 優勝 する（　）、毎日 厳しい 練習 を 続けた。",
      "a": "べく",
      "w": [
        "べき",
        "はず",
        "ものだ"
      ],
      "p": "V-る + べく",
      "exp": "Vるべく nghĩa là 'để..., nhằm...' — 優勝するべく、毎日厳しい練習を続けた = để giành chiến thắng, anh ấy tiếp tục luyện tập khắc nghiệt mỗi ngày. 優勝するべき (nên chiến thắng — sai nghĩa), 優勝するはず (chắc sẽ chiến thắng — sai nghĩa), 優勝するものだ (dạng sai trong ngữ cảnh mục đích) đều không phù hợp.",
      "voc": "優勝（ゆうしょう）：vô địch, chiến thắng； 厳しい（きびしい）：khắc nghiệt； 練習（れんしゅう）：luyện tập"
    },
    {
      "s": "こんな 簡単 な 計算 も できない（　）、試験 に 合格 する の は 難しい。",
      "a": "ようでは",
      "w": [
        "ようでわ",
        "ようではあるまい",
        "ようではいけない"
      ],
      "p": "〜ようでは",
      "exp": "〜ようでは nghĩa là 'với tình trạng như thế này thì...' — 簡単な計算もできないようでは、試験に合格するのは難しい = với tình trạng đến phép tính đơn giản cũng không làm được thì khó mà đỗ được. ようでわ là dạng sai chính tả, ようではあるまい (chắc không phải như vậy) sai nghĩa, ようではいけない không kết hợp được với mệnh đề 試験に合格するのは難しい ở phía sau.",
      "voc": "計算（けいさん）：phép tính； 合格（ごうかく）：đỗ, đạt； 試験（しけん）：kỳ thi"
    }
  ],
  "star": [
    {
      "pre": "彼女は",
      "post": "。",
      "chunks": [
        "留学して",
        "からというもの",
        "毎日日本語で",
        "日記を書いている"
      ],
      "p": "〜てからというもの",
      "exp": "Thứ tự đúng: 彼女は留学してからというもの毎日日本語で日記を書いている (Từ khi đi du học, ngày nào cô ấy cũng viết nhật ký bằng tiếng Nhật). からというもの phải đứng ngay sau 留学して (〜てからというもの là một mẫu); 毎日 được gắn chặt trong cụm 毎日日本語で nên không thể tách ra đứng sau 日記を, và cũng không thể đứng trước 留学して vì 留学 không phải việc làm hàng ngày; 日記を書いている là vị ngữ cuối câu.",
      "voc": "留学（りゅうがく）：du học； 日記（にっき）：nhật ký； 毎日（まいにち）：hàng ngày"
    },
    {
      "pre": "この店は",
      "post": "。",
      "chunks": [
        "今日",
        "を限りに",
        "閉店することに",
        "なりました"
      ],
      "p": "N を限りに",
      "exp": "Thứ tự đúng: この店は今日を限りに閉店することになりました (Cửa hàng này sẽ đóng cửa kể từ hôm nay). 今日を限りに là cụm cố định 'kể từ hôm nay', phải đứng liền nhau; 閉店することになりました là vị ngữ cuối câu. Đảo 今日 ra sau 閉店することに sẽ làm vỡ cụm 今日を限りに.",
      "voc": "今日（きょう）：hôm nay； 限りに（かぎりに）：kể từ, đến hết； 閉店（へいてん）：đóng cửa (cửa hàng)"
    },
    {
      "pre": "新製品はあす",
      "post": "。",
      "chunks": [
        "発売に",
        "先駆けて",
        "発表される",
        "予定です"
      ],
      "p": "〜に先駆けて",
      "exp": "Thứ tự đúng: 新製品はあす発売に先駆けて発表される予定です (Sản phẩm mới dự kiến sẽ được công bố vào ngày mai, trước khi phát hành). 発売に先駆けて là cụm cố định 'trước khi phát hành'; 発表される予定です là vị ngữ cuối câu. Tách 発売に khỏi 先駆けて sẽ làm vỡ mẫu.",
      "voc": "新製品（しんせいひん）：sản phẩm mới； 発売（はつばい）：phát hành, tung ra thị trường； 先駆けて（さきがけて）：đi trước, trước khi； 発表（はっぴょう）：công bố"
    },
    {
      "pre": "あの事件の",
      "post": "。",
      "chunks": [
        "深刻さは",
        "理解に",
        "かたくない",
        "でしょう"
      ],
      "p": "V-ます + にかたくない",
      "exp": "Thứ tự đúng: あの事件の深刻さは理解にかたくないでしょう (Mức độ nghiêm trọng của vụ việc đó chắc không khó để hiểu). 理解にかたくない là mẫu cố định 'không khó để hiểu'; 深刻さは là chủ ngữ; でしょう đứng cuối câu. Đảo 深刻さは ra sau 理解に sẽ làm câu vô nghĩa.",
      "voc": "事件（じけん）：vụ việc, sự kiện； 深刻さ（しんこくさ）：mức độ nghiêm trọng； 理解（りかい）：hiểu； かたくない：không khó"
    },
    {
      "pre": "山田さんは",
      "post": "。",
      "chunks": [
        "英語の単語",
        "すら",
        "覚えて",
        "いない"
      ],
      "p": "N + すら",
      "exp": "Thứ tự đúng: 山田さんは英語の単語すら覚えていない (Anh Yamada đến cả từ vựng tiếng Anh cũng không nhớ). すら phải đứng ngay sau danh từ nó nhấn mạnh (英語の単語すら); 覚えていない là vị ngữ cuối câu. Đặt すら sau 覚えて sẽ sai ngữ pháp.",
      "voc": "単語（たんご）：từ vựng； 覚える（おぼえる）：nhớ； すら：đến cả, ngay cả"
    }
  ],
  "bunsho": [
    {
      "intro": "つぎの 文章は プラスチックごみの 問題に ついて 書かれた 文章です。",
      "p": "プラスチック ごみ の 問題 は、 今や 世界中 の 課題 と なって おり、（　1　）、 海 に 流れ出た ごみ は、 生態系 に 大きな 影響 を 与えて いる。（　2　）、 多く の 国 が レジ袋 の 有料化 を 始め、 企業 も 包装 を 見直して いる。（　3　）、 法律 だけ では 問題 は 解決 しない。（　4　）、 私たち 一人ひとり が、 買い物 の とき に マイバッグ を 使う など、 身近 な こと から 始める べき だ。（　5　）、 小さな 行動 の 積み重ね が、 大きな 変化 を 生む の だ。",
      "b": [
        {
          "a": "さらに",
          "w": [
            "しかし",
            "だから",
            "たとえば"
          ]
        },
        {
          "a": "その結果",
          "w": [
            "しかし",
            "たとえば",
            "それに"
          ]
        },
        {
          "a": "とはいえ",
          "w": [
            "だから",
            "たとえば",
            "それから"
          ]
        },
        {
          "a": "だからこそ",
          "w": [
            "しかし",
            "たとえば",
            "それに"
          ]
        },
        {
          "a": "結局",
          "w": [
            "しかし",
            "だから",
            "たとえば"
          ]
        }
      ],
      "exp": "（1）さらに：câu trước nói vấn đề đã thành課題 toàn cầu, câu sau bổ sung thêm ảnh hưởng tới hệ sinh thái — さらに nối thêm thông tin cùng chiều. しかし là tương phản, だから là kết quả, たとえば là ví dụ — đều không phù hợp. （2）その結果：trước làn sóng rác thải ra biển, nhiều nước bắt đầu thu phí túi ni lông — その結果 nối hệ quả/phản ứng trước tình hình (xem FLAG trong VERIFICATION-set2.md: liên kết nhân quả ở đây hơi lỏng). しかし・たとえば・それに không diễn tả được quan hệ này. （3）とはいえ：dù các nước và doanh nghiệp đã hành động, chỉ luật thôi thì không giải quyết được vấn đề — とはいえ diễn tả sự nhượng bộ. だから・たとえば・それから đều sai. （4）だからこそ：chính vì luật thôi chưa đủ nên mỗi người phải bắt đầu từ việc nhỏ — だからこそ nhấn mạnh hệ quả tất yếu. しかし・たとえば・それに không phù hợp. （5）結局：câu cuối tổng kết toàn bài — hành động nhỏ tích lũy thành thay đổi lớn. しかし・だから・たとえば không dùng để tổng kết.",
      "voc": "プラスチックごみ：rác nhựa； 生態系（せいたいけい）：hệ sinh thái； レジ袋（レジぶくろ）：túi ni lông ở quầy tính tiền； 有料化（ゆうりょうか）：thu phí； 包装（ほうそう）：bao bì； マイバッグ：túi riêng mang theo； 積み重ね（つみかさね）：tích lũy dần"
    }
  ],
  "readS": [
    {
      "calc": 1,
      "p": "山 の ちかく に ある ホテル では、 1泊 12,000円 の プラン が あります。 この プラン に は、 朝食 が ふくまれて いません。 朝食 は、 1人 1泊 1,500円 です。 会員 に なると、 合計 から 2,000円 ひかれます。 鈴木 さん は、 会員 です。 妻 と 2人 で、 この ホテル に 2泊 します。 2人 とも、 毎日 朝食 を たべます。",
      "q": "鈴木 さん たち は、 ぜんぶで いくら はらいますか。",
      "o": [
        "30,000円です。",
        "25,000円です。",
        "28,000円です。",
        "26,000円です。"
      ],
      "a": 2,
      "e": "Tiền phòng: 12,000 × 2泊 = 24,000円. Tiền ăn sáng: 1,500 × 2 người × 2 ngày = 6,000円, tổng chưa giảm là 30,000円. Là hội viên được giảm 2,000円 nên còn 30,000 − 2,000 = 28,000円.",
      "exp": "Tiền phòng: 12,000 × 2 đêm = 24,000 yên. Tiền ăn sáng: 1,500 × 2 người × 2 ngày = 6,000 yên, tổng chưa giảm là 30,000 yên. Là hội viên được giảm 2,000 yên nên còn 30,000 − 2,000 = 28,000 yên. Đáp án 30,000 yên là tổng chưa trừ giảm giá; 25,000 yên và 26,000 yên không khớp với phép tính nào trong bài.",
      "voc": "1泊（いっぱく）：1 đêm trọ； 朝食（ちょうしょく）：bữa sáng； 会員（かいいん）：hội viên； 合計（ごうけい）：tổng cộng"
    },
    {
      "p": "来週 の 日曜日 に、 市民会館 で 写真展 が 開かれます。 時間 は 午前 10時 から 午後 5時 まで です。 入場 は 無料 です が、 写真集 を 買う こと が できます。 写真集 は 1冊 2,000円 です。 会場 で は、 写真家 の 田中 さん が、 午後 2時 から 30分間、 作品 に ついて 話します。",
      "q": "写真展 に ついて、 正しい もの は どれ です か。",
      "o": [
        "入場料 が 2,000円 かかる。",
        "写真集 は 2,000円 で 買える。",
        "田中 さん の 話 は 午前 10時 から 始まる。",
        "写真展 は 午後 2時 に 終わる。"
      ],
      "a": 1,
      "e": "写真集は1冊2,000円です。入場は無料です。田中さんの話は午後2時から始まります。写真展は午後5時までです。",
      "exp": "Đáp án đúng là 2: '写真集は1冊2,000円です' nên mua được với giá 2,000 yên. Đáp án 1 sai vì 入場は無料です (vào cửa miễn phí), 2,000 yên là giá 写真集 chứ không phải 入場料. Đáp án 3 sai vì 田中さんの話 bắt đầu lúc 午後2時, không phải 午前10時. Đáp án 4 sai vì triển lãm kéo dài tới 午後5時.",
      "voc": "写真展（しゃしんてん）：triển lãm ảnh； 市民会館（しみんかいかん）：nhà văn hóa thành phố； 入場（にゅうじょう）：vào cửa； 無料（むりょう）：miễn phí； 写真集（しゃしんしゅう）：tuyển tập ảnh； 写真家（しゃしんか）：nhiếp ảnh gia"
    },
    {
      "p": "山田 さん は、 毎朝 6時 に 起きて、 30分 ジョギング を します。 その後、 朝食 を 食べて、 8時 に 家 を 出ます。 会社 までは 電車 で 40分 かかります。 昼休み は 1時間 です。 山田 さん は、 昼休み に いつも 図書館 で 本 を 読みます。",
      "q": "山田 さん の 昼休み の 過ごし方 として、 正しい もの は どれ です か。",
      "o": [
        "会社 の 近く の 公園 で 散歩 する。",
        "図書館 で 本 を 読む。",
        "家 に 帰って 昼寝 する。",
        "同僚 と 買い物 に 行く。"
      ],
      "a": 1,
      "e": "昼休みにはいつも図書館で本を読みます。",
      "exp": "Đáp án đúng là 2: '昼休みにはいつも図書館で本を読みます'. Các đáp án khác (đi dạo ở công viên, về nhà ngủ trưa, đi mua sắm với đồng nghiệp) đều không được nhắc tới trong bài; bài chỉ nói anh Yamada dậy lúc 6 giờ, chạy bộ 30 phút, ra khỏi nhà lúc 8 giờ và đi tàu 40 phút tới công ty.",
      "voc": "ジョギング：chạy bộ； 朝食（ちょうしょく）：bữa sáng； 昼休み（ひるやすみ）：giờ nghỉ trưa； 図書館（としょかん）：thư viện； 同僚（どうりょう）：đồng nghiệp"
    },
    {
      "p": "この 町 の 図書館 は、 火曜日 から 日曜日 まで 開いて います。 月曜日 は 休み です。 開館時間 は 午前 9時 から 午後 7時 まで です。 ただし、 祝日 は 午後 5時 に 閉まります。 本 は 1人 5冊 まで、 2週間 借りる こと が できます。",
      "q": "図書館 に ついて、 正しい もの は どれ です か。",
      "o": [
        "月曜日 も 開いて いる。",
        "祝日 は 午後 7時 まで 開いて いる。",
        "本 は 1人 5冊 まで 借りられる。",
        "本 は 1週間 しか 借りられない。"
      ],
      "a": 2,
      "e": "本は1人5冊まで、2週間借りることができます。月曜日は休みです。祝日は午後5時に閉まります。",
      "exp": "Đáp án đúng là 3: '本は1人5冊まで、2週間借りることができます'. Đáp án 1 sai vì 月曜日は休みです. Đáp án 2 sai vì ngày lễ chỉ mở tới 午後5時 chứ không phải 午後7時. Đáp án 4 sai vì mượn được 2週間 chứ không phải chỉ 1週間.",
      "voc": "図書館（としょかん）：thư viện； 開館時間（かいかんじかん）：giờ mở cửa； 祝日（しゅくじつ）：ngày lễ； 借りる（かりる）：mượn"
    }
  ],
  "readM": [
    {
      "p": "日本 で は、 毎年 大量 の 食品 が 捨てられて いる。 まだ 食べられる のに 捨てられる 食品 は、 食品ロス と 呼ばれ、 その 量 は 年間 約 五百万 トン に 上る と 言われて いる。 家庭 から 出る 食品ロス の 原因 の 一つ は、 買いすぎ だ。 安い から と いって 多く 買っても、 使い切れず に 腐らせて しまう こと が ある。 また、 賞味期限 を 過ぎた 食品 を、 まだ 食べられる のに 捨てて しまう 人 も 多い。 一方、 スーパー や コンビニ で は、 売れ残り を 減らす ため、 値引き を したり、 寄付 を したり する 取り組み が 進んで いる。 食品ロス を 減らす ため に は、 買う 量 を 考えたり、 残った 食材 を 上手 に 使ったり する 工夫 が 大切 だ。 小さな 努力 の 積み重ね が、 大きな 変化 に つながる のだ。 また、 家庭 で 余った 食材 を 使って、 新しい 料理 を 作る 人 も 増えて いる。 食品ロス を 減らす こと は、 環境 を 守る こと にも つながる のだ。 買い物 の 前 に、 冷蔵庫 の 中 を 確かめる 習慣 も 役に立つ。",
      "qs": [
        {
          "q": "食品ロス と は 何 か。",
          "o": [
            "まだ 食べられる のに 捨てられる 食品 の こと。",
            "腐って 食べられなく なった 食品 の こと。",
            "売れ残って 値引き された 食品 の こと。",
            "寄付 された 食品 の こと。"
          ],
          "a": 0,
          "e": "まだ食べられるのに捨てられる食品が食品ロスと定義されている。"
        },
        {
          "q": "家庭 から 出る 食品ロス の 原因 として、 本文 で 述べられて いる もの は どれ です か。",
          "o": [
            "スーパー で 値引き を しない こと。",
            "食材 を 上手 に 使う こと。",
            "買いすぎ や 賞味期限 を 過ぎた 食品 を 捨てる こと。",
            "寄付 を しない こと。"
          ],
          "a": 2,
          "e": "買いすぎと、賞味期限切れの食品を捨てることが原因として挙げられている。"
        },
        {
          "q": "食品ロス を 減らす ため に、 本文 で 勧められて いる こと は 何 か。",
          "o": [
            "食品 を 多く 買って、 冷蔵庫 に 入れる こと。",
            "買う 量 を 考え、 残った 食材 を 上手 に 使う こと。",
            "賞味期限 を 過ぎた 食品 を すぐ に 捨てる こと。",
            "スーパー で 売れ残り を 買わない こと。"
          ],
          "a": 1,
          "e": "買う量を考え、残った食材を上手に使う工夫が大切と書かれている。"
        }
      ],
      "exp": "Câu 1: 食品ロス được định nghĩa ngay trong bài là 'まだ食べられるのに捨てられる食品' — đáp án 1. Đáp án 2 nói đồ đã thối hỏng (trái với まだ食べられる), đáp án 3 và 4 chỉ nói tới 値引き・寄付 là biện pháp của cửa hàng, không phải định nghĩa. Câu 2: nguyên nhân từ gia đình được nêu là '買いすぎ' và vứt đồ đã quá 賞味期限 dù 'まだ食べられるのに' — đáp án 3. Các đáp án khác nói về việc siêu thị không giảm giá, dùng khéo nguyên liệu hay không quyên góp — không phải nguyên nhân. Câu 3: bài khuyên '買う量を考えたり、残った食材を上手に使ったりする工夫が大切だ' — đáp án 2. Mua nhiều rồi cất tủ lạnh (đáp án 1), vứt ngay đồ quá hạn (đáp án 3) hay không mua hàng tồn (đáp án 4) đều ngược với lời khuyên trong bài.",
      "voc": "食品ロス：lãng phí thực phẩm； 賞味期限（しょうみきげん）：hạn sử dụng； 寄付（きふ）：quyên tặng； 値引き（ねびき）：giảm giá； 売れ残り（うれのこり）：hàng tồn ế"
    },
    {
      "p": "近年、 自宅 で 仕事 を する リモートワーク が 広がって いる。 通勤時間 が なくなる ため、 家族 と 過ごす 時間 が 増えた と いう 人 が 多い。 一方 で、 家 で は 集中 できない、 同僚 と の コミュニケーション が 減る と いう 課題 も 指摘 されて いる。 ある 調査 に よると、 リモートワーク を している 人 の 約 6割 が、 仕事 と 生活 の 区別 が つきにくい と 答えた。 会社 に よって は、 週 に 2日 だけ 出社 する など、 出社 と 在宅 を 組み合わせる 働き方 を 取り入れて いる。 大切 な の は、 働く 場所 では なく、 仕事 の 成果 だ と いう 考え方 が 広がって いる。 今後、 リモートワーク は、 働き方 の 選択肢 の 一つ として、 定着 して いく だろう。",
      "qs": [
        {
          "q": "リモートワーク の 利点 として、 本文 で 述べられて いる もの は どれ です か。",
          "o": [
            "家族 と 過ごす 時間 が 増える こと。",
            "同僚 と の コミュニケーション が 増える こと。",
            "仕事 と 生活 の 区別 が つきやすく なる こと。",
            "毎日 出社 しなくては ならない こと。"
          ],
          "a": 0,
          "e": "通勤時間がなくなるため、家族と過ごす時間が増えたという人が多い。"
        },
        {
          "q": "調査 の 結果 として、 本文 で 述べられて いる もの は 何 か。",
          "o": [
            "約 6割 の 人 が、 仕事 と 生活 の 区別 が つきにくい と 答えた こと。",
            "約 6割 の 人 が、 家 で は 集中 できない と 答えた こと。",
            "約 6割 の 人 が、 通勤時間 が 長い と 答えた こと。",
            "約 6割 の 人 が、 出社 したい と 答えた こと。"
          ],
          "a": 0,
          "e": "約6割が、仕事と生活の区別がつきにくいと答えた。"
        },
        {
          "q": "今後 の リモートワーク に ついて、 筆者 の 考え に 合う もの は どれ です か。",
          "o": [
            "働き方 の 選択肢 の 一つ として、 定着 して いく だろう。",
            "やがて なくなる だろう。",
            "毎日 の 出社 が 義務 に なる だろう。",
            "働く 場所 が 最も 大切 に なる だろう。"
          ],
          "a": 0,
          "e": "働き方の選択肢の一つとして、定着していくだろう。"
        }
      ],
      "exp": "Câu 1: lợi ích được nêu là '通勤時間がなくなるため、家族と過ごす時間が増えた' — đáp án 1. Giao tiếp với đồng nghiệp tăng lên là sai (bài nói 課題 là giao tiếp giảm); phân biệt công việc-cuộc sống dễ hơn là sai (bài nói つきにくい); phải tới công ty hàng ngày là sai (リモートワーク là làm ở nhà). Câu 2: kết quả khảo sát là '約6割が、仕事と生活の区別がつきにくいと答えた' — đáp án 1. '家では集中できない' là課題 chung được nêu, không phải kết quả khảo sát với con số 6割; thời gian đi làm dài và muốn tới công ty không được nhắc tới. Câu 3: tác giả cho rằng リモートワーク sẽ '働き方の選択肢の一つとして、定着していく' — đáp án 1. Sẽ biến mất, bắt buộc tới công ty hàng ngày hay nơi làm việc là quan trọng nhất đều ngược với bài (bài nói 大切なのは働く場所ではなく、仕事の成果だ).",
      "voc": "リモートワーク：làm việc từ xa； 通勤時間（つうきんじかん）：thời gian đi làm； 在宅（ざいたく）：ở nhà； 出社（しゅっしゃ）：tới công ty； 成果（せいか）：thành quả； 定着（ていちゃく）：ăn sâu, trở thành phổ biến； 選択肢（せんたくし）：lựa chọn"
    },
    {
      "p": "日本 で は、 現金 を 使わず に 支払う キャッシュレス決済 が 急速 に 広がって いる。 スマートフォン や カード を 使えば、 小銭 を 用意 する 必要 が なく、 支払い が 短い 時間 で 済む。 店 にとっても、 現金 を 数える 手間 が 減り、 盗難 の 危険 も 低く なる。 一方、 高齢者 の 中 に は、 使い方 が 分からず、 不安 を 感じる 人 も いる。 また、 災害 で 電気 が 止まった とき に は、 使えなく なる と いう 問題 も ある。 そのため、 現金 と キャッシュレス の 両方 を 使える 環境 を 整える こと が 大切 だ と 考えられて いる。 今後、 キャッシュレス決済 は、 さらに 広がる と 予想 されて いる が、 現金 が 完全 に なくなる こと は ない だろう。",
      "qs": [
        {
          "q": "キャッシュレス決済 の 利点 として、 本文 で 述べられて いる もの は どれ です か。",
          "o": [
            "小銭 を 用意 する 必要 が なく、 支払い が 短い 時間 で 済む こと。",
            "災害 の とき に も 使える こと。",
            "高齢者 に とって 分かりやすい こと。",
            "現金 を 数える 手間 が 増える こと。"
          ],
          "a": 0,
          "e": "小銭を用意する必要がなく、支払いが短い時間で済む。"
        },
        {
          "q": "キャッシュレス決済 の 問題点 として、 本文 で 述べられて いる もの は どれ です か。",
          "o": [
            "高齢者 の 中 に は 使い方 が 分からず、 不安 を 感じる 人 が いる こと。",
            "店 の 盗難 の 危険 が 高く なる こと。",
            "支払い に 長い 時間 が かかる こと。",
            "小銭 を 用意 しなければ ならない こと。"
          ],
          "a": 0,
          "e": "高齢者の中には、使い方が分からず、不安を感じる人もいる。"
        },
        {
          "q": "筆者 の 考え に 合う もの は どれ です か。",
          "o": [
            "現金 と キャッシュレス の 両方 を 使える 環境 を 整える こと が 大切 だ。",
            "現金 は すぐに 廃止 すべき だ。",
            "キャッシュレス決済 は 使う べき では ない。",
            "災害 の とき に は 現金 は 必要 ない。"
          ],
          "a": 0,
          "e": "現金とキャッシュレスの両方を使える環境を整えることが大切だと考えられている。"
        }
      ],
      "exp": "Câu 1: lợi ích được nêu là '小銭を用意する必要がなく、支払いが短い時間で済む' — đáp án 1. Dùng được khi thiên tai là sai (bài nói khi mất điện thì không dùng được); dễ hiểu với người cao tuổi là sai (bài nói người cao tuổi thấy不安); đếm tiền mất công hơn là sai (bài nói 手間が減り). Câu 2: vấn đề được nêu là người cao tuổi '使い方が分からず、不安を感じる' — đáp án 1; bài cũng nêu vấn đề mất điện khi thiên tai. Nguy cơ trộm cắp tăng là sai (bài nói 危険も低くなる); thanh toán mất nhiều thời gian và phải chuẩn bị tiền lẻ đều ngược với lợi ích đã nêu. Câu 3: tác giả cho rằng cần '現金とキャッシュレスの両方を使える環境を整えることが大切だ' — đáp án 1. Bãi bỏ tiền mặt ngay, không nên dùng thanh toán không tiền mặt, hay thiên tai thì không cần tiền mặt đều ngược với bài (bài nói 現金が完全になくなることはないだろう).",
      "voc": "キャッシュレス決済（キャッシュレスけっさい）：thanh toán không dùng tiền mặt； 小銭（こぜに）：tiền lẻ； 手間（てま）：công sức, thời gian bỏ ra； 盗難（とうなん）：trộm cắp； 高齢者（こうれいしゃ）：người cao tuổi； 災害（さいがい）：thiên tai； 整える（ととのえる）：chuẩn bị, sắp xếp"
    }
  ],
  "readL": [
    {
      "p": "近年、 人工知能、 すなわち AI の 発達 は、 私たち の 働き方 を 大きく 変えよう と して いる。 AI は、 大量 の データ を 短い 時間 で 処理 し、 文章 を 作ったり、 画像 を 描いたり する こと が できる。 そのため、 これまで 人 が 行って きた 仕事 の 一部 は、 AI に 置き換わる と 言われて いる。 特に、 定型 的 な 事務 作業 や、 単純 な データ の 整理 など は、 AI が 得意 と する 分野 だ。 しかし、 すべて の 仕事 が AI に 置き換わる わけ では ない。 人 と 話し合い、 信頼 関係 を 築く こと や、 新しい アイデア を 生み出す こと は、 今 の AI に は 難しい。 また、 責任 を 取って 判断 を 下す こと も、 人 の 役割 として 残る だろう。 大切 な の は、 AI を 恐れる のでは なく、 AI を 道具 として 上手 に 使う こと だ。 例えば、 AI に 資料 を まとめさせ、 人 は その 内容 を 確かめて、 判断 する。 そう すれば、 仕事 の 効率 は 上がり、 人 は より 創造 的 な 仕事 に 時間 を 使う こと が できる。 今後、 求められる の は、 AI を 使いこなす 力 と、 人 に しか できない こと を 見極める 力 だ。 学校 教育 も、 知識 を 覚える こと だけ では なく、 考える 力 や、 人 と 協力 する 力 を 育てる こと が、 ますます 重要 に なる だろう。 AI の 時代 に、 人 の 価値 は なくなる のでは なく、 むしろ 問い直される のだ。 AI と 人 が それぞれ の 得意 な こと を 分担 する こと が、 これから の 働き方 の 鍵 に なる だろう。",
      "qs": [
        {
          "q": "AI が 得意 と する 仕事 として、 本文 で 述べられて いる もの は どれ です か。",
          "o": [
            "定型 的 な 事務 作業 や 単純 な データ の 整理。",
            "人 と 話し合い、 信頼 関係 を 築く こと。",
            "新しい アイデア を 生み出す こと。",
            "責任 を 取って 判断 を 下す こと。"
          ],
          "a": 0,
          "e": "定型的な事務作業や単純なデータの整理はAIが得意と書かれている。"
        },
        {
          "q": "AI に は 難しい こと として、 本文 で 述べられて いる もの は どれ です か。",
          "o": [
            "大量 の データ を 短い 時間 で 処理 する こと。",
            "文章 を 作る こと。",
            "人 と 話し合い、 信頼 関係 を 築く こと。",
            "画像 を 描く こと。"
          ],
          "a": 2,
          "e": "人と話し合い、信頼関係を築くことは今のAIには難しいと書かれている。"
        },
        {
          "q": "筆者 が 大切 だ と 考える こと は 何 か。",
          "o": [
            "AI を 恐れて、 使わない こと。",
            "AI を 道具 として 上手 に 使う こと。",
            "AI に すべて の 判断 を 任せる こと。",
            "AI を 使わず に 仕事 を する こと。"
          ],
          "a": 1,
          "e": "AIを恐れるのではなく、道具として上手に使うことが大切と述べられている。"
        },
        {
          "q": "今後 求められる 力 として、 本文 で 述べられて いる もの は どれ です か。",
          "o": [
            "知識 を 覚える 力 だけ。",
            "AI を 使いこなす 力 と、 人 に しか できない こと を 見極める 力。",
            "AI を 作る 力 だけ。",
            "一人 で 仕事 を する 力 だけ。"
          ],
          "a": 1,
          "e": "AIを使いこなす力と、人にしかできないことを見極める力が求められると書かれている。"
        }
      ],
      "exp": "Câu 1: AI giỏi '定型的な事務作業や単純なデータの整理' — đáp án 1. Trò chuyện xây dựng tin cậy, nảy ý tưởng mới và chịu trách nhiệm quyết định đều được nêu là việc AI khó làm, không phải việc AI giỏi. Câu 2: việc khó với AI là '人と話し合い、信頼関係を築くこと' — đáp án 3. Xử lý dữ liệu lớn, viết văn bản và vẽ tranh đều là việc AI làm được. Câu 3: tác giả cho rằng điều quan trọng là 'AIを恐れるのではなく、AIを道具として上手に使うこと' — đáp án 2. Sợ AI, giao hết quyết định cho AI hay không dùng AI đều ngược với主張 của bài. Câu 4: năng lực cần có trong tương lai là 'AIを使いこなす力と、人にしかできないことを見極める力' — đáp án 2. Chỉ nhớ kiến thức, chỉ làm ra AI hay chỉ làm việc một mình đều không khớp với bài.",
      "voc": "人工知能（じんこうちのう）：trí tuệ nhân tạo； 定型的（ていけいてき）：mang tính định hình, theo mẫu； 信頼関係（しんらいかんけい）：quan hệ tin cậy； 創造的（そうぞうてき）：mang tính sáng tạo； 使いこなす：sử dụng thành thạo； 見極める（みきわめる）：nhận định, phân biệt"
    }
  ],
  "tougou": [
    {
      "p1": "副業 を 認める 会社 が 増えて いる。 副業 を する と、 本業 以外 の 経験 が 得られ、 新しい スキル を 身に つける こと が できる。 また、 収入 が 増える こと で、 生活 に 余裕 が 生まれる。 会社 にとっても、 社員 が 幅広い 経験 を 積む こと は、 新しい アイデア を 生む きっかけ に なる。 副業 は、 働く 人 と 会社 の 両方 にとって、 良い こと だ と いう のが、 この 立場 の 考え だ。",
      "p2": "一方、 副業 に は 課題 も ある と 指摘 する 人 が いる。 副業 に 時間 を 取られ、 本業 の 仕事 が おろそか に なる 恐れ が ある から だ。 また、 疲れ が たまり、 健康 を 損なう 場合 も ある。 さらに、 会社 の 情報 が 外 に 漏れる 危険 も ある。 そのため、 副業 を 認める 場合 は、 時間 や 内容 に ついて、 明確 な ルール を 決める 必要 が ある と、 この 立場 は 主張 して いる。",
      "qs": [
        {
          "q": "両方 の 文章 に 共通 して 述べられて いる こと は 何 か。",
          "o": [
            "副業 が 働く 人 の 生活 や 仕事 に 影響 を 与える こと。",
            "副業 を すべて の 会社 が 認める べき だ と いう こと。",
            "副業 は 禁止 すべき だ と いう こと。",
            "副業 を する 人 は いない と いう こと。"
          ],
          "a": 0,
          "e": "両方の文章とも副業が働く人の生活や仕事に影響を与えることを述べている。"
        },
        {
          "q": "文章1 の 主張 に 合う もの は どれ です か。",
          "o": [
            "副業 は、 働く 人 と 会社 の 両方 にとって 良い こと だ。",
            "副業 は 本業 の 妨げ に なる。",
            "副業 は 健康 を 損なう。",
            "副業 は 情報漏れ の 危険 が ある。"
          ],
          "a": 0,
          "e": "文章1は副業が働く人と会社の両方にとって良いことだと述べている。"
        },
        {
          "q": "文章2 で 述べられて いる 副業 の 課題 は どれ です か。",
          "o": [
            "新しい スキル が 身に つく こと。",
            "収入 が 増える こと。",
            "本業 の 仕事 が おろそか に なる 恐れ が ある こと。",
            "新しい アイデア が 生まれる こと。"
          ],
          "a": 2,
          "e": "文章2では本業がおろそかになる恐れが課題として挙げられている。"
        }
      ],
      "exp": "Câu 1: cả hai bài đều nói副業 ảnh hưởng tới cuộc sống và công việc của người lao động (bài 1: kinh nghiệm, thu nhập, ý tưởng mới; bài 2: thời gian, sức khỏe, thông tin) — đáp án 1. Không bài nào nói mọi công ty phải cho phép副業, phải cấm副業 hay không có ai làm副業. Câu 2:主張 của bài 1 là '副業は、働く人と会社の両方にとって良いことだ' — đáp án 1; các đáp án còn lại đều là課題 nêu trong bài 2. Câu 3:課題 trong bài 2 gồm bản nghiệp bị lơ là, mệt mỏi hại sức khỏe và rò rỉ thông tin công ty — trong các lựa chọn, chỉ '本業の仕事がおろそかになる恐れがあること' (đáp án 3) khớp; học kỹ năng mới, thu nhập tăng và ý tưởng mới đều là lợi ích nêu trong bài 1.",
      "voc": "副業（ふくぎょう）：việc làm thêm； 本業（ほんぎょう）：công việc chính； おろそか：lơ là, sao nhãng； 余裕（よゆう）：dư dả, thoải mái"
    }
  ],
  "shuchou": [
    {
      "p": "私たち の 生活 は、 技術 の 発達 に よって、 ますます 便利 に なって いる。 スマートフォン で すぐに 調べる こと が でき、 買い物 も 家 に いながら できる。 しかし、 私 は、 この 便利さ が、 私たち の 考える 力 を 弱めて いる のでは ない か と 心配 して いる。 分からない こと が ある と、 すぐ に 検索 する。 考える 前 に、 答え を 探す。 こうした 習慣 が 続くと、 自分 で 考える こと を しなく なる。 もちろん、 技術 自体 が 悪い わけ では ない。 技術 は、 私たち の 生活 を 助ける 大切 な 道具 だ。 問題 な の は、 技術 に 頼りすぎる こと だ。 例えば、 道 に 迷った とき、 地図 アプリ を 見れば、 すぐに 道 が 分かる。 しかし、 地図 を 読む 力 や、 方向 を 覚える 力 は、 使わなければ 衰えて いく。 同じ よう に、 計算 を すべて 機械 に 任せれば、 暗算 の 力 は 弱く なる。 大切 な の は、 便利 な 道具 を 使いながら、 自分 で 考える 習慣 を 保つ こと だ。 答え を すぐ に 探す のでは なく、 まず 自分 で 考えてみる。 その 後 で、 技術 を 使って 確かめる。 そう すれば、 技術 は、 考える 力 を 奪う もの では なく、 考える 力 を 伸ばす もの に なる。 便利さ を 享受 しながら、 考える 力 を 守る こと。 便利 な 道具 が 増えた 結果、 私たち は、 待つ こと が 苦手 に なって きた と いう 指摘 も ある。 すぐに 答え が 得られる 生活 に 慣れると、 じっくり 考える こと が 面倒 に 感じられる のだ。 しかし、 大切 な 判断 ほど、 時間 を かけて 考える 必要 が ある。 仕事 で の 企画 や、 人生 の 選択 は、 検索 だけ で 決められる もの では ない。 自分 の 頭 で 考え、 他 の 人 と 話し合い、 納得 して 決める こと が、 後悔 の 少ない 選択 に つながる。 技術 は、 考える こと を 助ける 道具 として 使う べき で、 考える こと の 代わり に する べき では ない。 それ が、 技術 と 上手 に 付き合う 方法 だ と、 私 は 考える。 考える 力 を 保つ こと は、 便利 な 時代 だから こそ、 大切 な のだ。",
      "qs": [
        {
          "q": "筆者 が 心配 して いる こと は 何 か。",
          "o": [
            "便利さ が、 私たち の 考える 力 を 弱めて いる のでは ない か と いう こと。",
            "技術 が 発達 しない こと。",
            "スマートフォン が 便利 で ある こと。",
            "買い物 が 家 で できる こと。"
          ],
          "a": 0,
          "e": "筆者は便利さが考える力を弱めているのではないかと心配している。"
        },
        {
          "q": "筆者 の 考え に 合う もの は どれ です か。",
          "o": [
            "技術 自体 が 悪い。",
            "技術 に 頼りすぎる こと が 問題 だ。",
            "技術 を 使う のは やめる べき だ。",
            "考える 習慣 は 必要 ない。"
          ],
          "a": 1,
          "e": "技術自体が悪いのではなく、技術に頼りすぎることが問題だと述べられている。"
        },
        {
          "q": "地図 アプリ の 例 で、 筆者 が 言いたい こと は 何 か。",
          "o": [
            "地図 アプリ を 使えば、 道 に 迷う こと は ない。",
            "地図 アプリ は 使う べき では ない。",
            "地図 を 読む 力 は、 使わなければ 衰えて いく。",
            "方向 を 覚える 力 は 必要 ない。"
          ],
          "a": 2,
          "e": "地図を読む力は使わなければ衰えていくことが例として挙げられている。"
        },
        {
          "q": "技術 と 上手 に 付き合う 方法 として、 筆者 が 勧める もの は 何 か。",
          "o": [
            "まず 自分 で 考え、 その 後 で 技術 を 使って 確かめる こと。",
            "答え を すぐ に 探す こと。",
            "技術 を 使わず に 生活 する こと。",
            "考える こと を やめる こと。"
          ],
          "a": 0,
          "e": "まず自分で考え、その後で技術を使って確かめることが勧められている。"
        }
      ],
      "exp": "Câu 1: tác giả lo '便利さが、私たちの考える力を弱めているのではないか' — đáp án 1, nêu ngay đầu bài. Công nghệ không phát triển, điện thoại tiện lợi hay mua sắm tại nhà đều không phải điều tác giả lo. Câu 2: tác giả khẳng định '技術自体が悪いわけではない' mà vấn đề là '技術に頼りすぎること' — đáp án 2. Bỏ dùng công nghệ hay cho rằng thói quen suy nghĩ là không cần thiết đều ngược với bài. Câu 3: ví dụ bản đồ chỉ ra '地図を読む力や、方向を覚える力は、使わなければ衰えていく' — đáp án 3. Dùng ứng dụng thì không lạc đường là đúng về mặt chữ nhưng không phải điều tác giả muốn nói; tác giả cũng không cấm dùng ứng dụng bản đồ. Câu 4: cách ứng xử đúng với công nghệ là 'まず自分で考えてみる。その後で、技術を使って確かめる' — đáp án 1, cũng chính là主張 của toàn bài: công nghệ là công cụ hỗ trợ suy nghĩ, không phải thứ thay thế suy nghĩ.",
      "voc": "考える力（かんがえるちから）：năng lực tư duy； 頼りすぎる（たよりすぎる）：dựa dẫm quá mức； 衰える（おとろえる）：suy yếu, mai một； 暗算（あんざん）：tính nhẩm； 享受（きょうじゅ）：tận hưởng； 後悔（こうかい）：hối hận"
    }
  ],
  "info": [
    {
      "tpl": "<b>A フリーマーケットのお知らせ</b><br>来月、駅の 近くで フリーマーケットが あります。時間は 10時〜16時です。雨の日は 休みです。<br><table class=\"jl-tbl\"><tr><th>売る 物</th><th>場所</th><th>日</th></tr><tr><td>食べ物（たこ焼き、かき氷、ジュース）</td><td>中央広場</td><td>土曜日と日曜日</td></tr><tr><td>本・CD</td><td>図書館の前</td><td>土曜日</td></tr><tr><td>手作りの品（アクセサリー、かばん）</td><td>公民館</td><td>日曜日</td></tr><tr><td>花・植物</td><td>公園の入口</td><td>土曜日と日曜日</td></tr></table><b>B カレンダー（来月）</b><br><table class=\"jl-cal\"><tr><th>月</th><th>火</th><th>水</th><th>木</th><th>金</th><th>土</th><th>日</th></tr><tr><td></td><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td></tr><tr><td>7</td><td>8</td><td>9</td><td>10</td><td>11</td><td>12</td><td>13</td></tr></table>",
      "inst": "つぎのA「フリーマーケットのお知らせ」とBのカレンダーを見て、質問に答えてください。答えは1・2・3・4から、いちばんいいものを一つえらんでください。",
      "q": "今日は 2日 (水曜日) です。手作りの かばんを 売りたいです。何日に どこで 売れますか。",
      "opts": [
        "5日に公民館",
        "6日に中央広場",
        "2日に公民館",
        "6日に公民館"
      ],
      "ans": 3,
      "exp": "Đồ thủ công bán ở 公民館 vào Chủ nhật. Hôm nay là thứ Tư (ngày 2) nên Chủ nhật tiếp theo là ngày 6. Đáp án ngày 5 là thứ Bảy (bán đồ ăn và hoa, không phải đồ thủ công), ngày 2 là hôm nay (thứ Tư, không có chợ bán đồ thủ công), còn 'ngày 6 ở 中央広場' sai địa điểm.",
      "voc": "フリーマーケット：chợ trời, chợ phiên； 手作りの品（てづくりのしな）：đồ thủ công； 公民館（こうみんかん）：nhà văn hóa； 中央広場（ちゅうおうひろば）：quảng trường trung tâm"
    },
    {
      "tpl": "<b>A フィットネスクラブさくらのお知らせ</b><br>今月、フィットネスクラブさくらで クラスが あります。1回 1,000円です。<br><table class=\"jl-tbl\"><tr><th>クラス</th><th>日</th><th>時間</th></tr><tr><td>ヨガ</td><td>月曜日と金曜日</td><td>10時〜11時</td></tr><tr><td>水泳</td><td>火曜日と木曜日</td><td>14時〜15時</td></tr><tr><td>ダンス</td><td>水曜日と土曜日</td><td>18時〜19時</td></tr><tr><td>筋トレ</td><td>日曜日</td><td>9時〜10時</td></tr></table><b>B カレンダー（12月）</b><br><table class=\"jl-cal\"><tr><th>月</th><th>火</th><th>水</th><th>木</th><th>金</th><th>土</th><th>日</th></tr><tr><td></td><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td></tr><tr><td>7</td><td>8</td><td>9</td><td>10</td><td>11</td><td>12</td><td>13</td></tr><tr><td>14</td><td>15</td><td>16</td><td>17</td><td>18</td><td>19</td><td>20</td></tr><tr><td>21</td><td>22</td><td>23</td><td>24</td><td>25</td><td>26</td><td>27</td></tr><tr><td>28</td><td>29</td><td>30</td><td>31</td><td></td><td></td><td></td></tr></table>",
      "inst": "つぎのA「フィットネスクラブさくらのお知らせ」とBのカレンダーを見て、質問に答えてください。答えは1・2・3・4から、いちばんいいものを一つえらんでください。",
      "q": "今日は 12月3日 (木曜日) です。ヨガの クラスを 受けたいです。次に ヨガを 受けられるのは 何日ですか。",
      "opts": [
        "12月4日（金曜日）",
        "12月7日（月曜日）",
        "12月3日（木曜日）",
        "12月11日（金曜日）"
      ],
      "ans": 0,
      "exp": "Yoga học vào thứ Hai và thứ Sáu. Hôm nay là thứ Năm (3/12) nên buổi yoga tiếp theo là thứ Sáu ngày 4/12 — tra lịch tháng 12 (ngày 1 là thứ Ba) thì ngày 4 đúng là thứ Sáu. Ngày 7/12 (thứ Hai) cũng có yoga nhưng muộn hơn ngày 4; ngày 3/12 là thứ Năm nên không có lớp yoga; ngày 11/12 cũng là thứ Sáu nhưng muộn hơn ngày 4.",
      "voc": "ヨガ：yoga； フィットネスクラブ：câu lạc bộ thể hình； クラス：lớp học； 水泳（すいえい）：bơi lội； 筋トレ（きんトレ）：tập cơ bắp"
    }
  ]
};

/* ----- Test 3 ----- */
window.WRITTEN_N1_SET3 = {
 "yomi": [
  {
   "s": "長い 間 の 抑圧 から 解放 された 人々 は、 自由 を 喜んだ。",
   "t": "抑圧",
   "r": "よくあつ",
   "w": [
    "よくあっ",
    "おくあつ",
    "よくあち"
   ],
   "exp": "抑圧は「よくあつ」と読む。抑は「おさえる」、圧は「おす」という意味で、合わせて「áp bức, đàn áp」。よくあっ は つ が足りないので sai、おくあつ は 抑を おく と読むので sai、よくあち は 圧を ち と読むので sai。",
   "voc": "抑圧（よくあつ）：áp bức, đàn áp； 解放（かいほう）：giải phóng； 自由（じゆう）：tự do"
  },
  {
   "s": "彼 の 返事 は 曖昧 で、 本当 の 気持ち が 分からなかった。",
   "t": "曖昧",
   "r": "あいまい",
   "w": [
    "あいめい",
    "あんまい",
    "あいばい"
   ],
   "exp": "曖昧は「あいまい」と読む。「mơ hồ, không rõ ràng」という意味。あいめい は 昧を めい と読むので sai、あんまい は 曖を あん と読むので sai、あいばい は 昧を ばい と読むので sai。",
   "voc": "曖昧（あいまい）：mơ hồ, không rõ ràng； 返事（へんじ）：câu trả lời； 気持ち（きもち）：tâm trạng, cảm xúc"
  },
  {
   "s": "最近 は 会議 が 頻繁 に 開かれる よう に なった。",
   "t": "頻繁",
   "r": "ひんぱん",
   "w": [
    "ひんはん",
    "びんぱん",
    "ひんばん"
   ],
   "exp": "頻繁は「ひんぱん」と読む。「thường xuyên, luôn luôn」という意味。ひんはん は 繁を はん と読むので sai、びんぱん は 頻を びん と読むので sai、ひんばん は 繁を ばん と読むので sai。",
   "voc": "頻繁（ひんぱん）：thường xuyên； 会議（かいぎ）：cuộc họp； 開かれる（ひらかれる）：được tổ chức"
  },
  {
   "s": "調査 の 結果、 両者 の 違い は 顕著 だった。",
   "t": "顕著",
   "r": "けんちょ",
   "w": [
    "けんしょ",
    "けんちょう",
    "げんちょ"
   ],
   "exp": "顕著は「けんちょ」と読む。「rõ rệt, nổi bật」という意味。けんしょ は 著を しょ と読むので sai、けんちょう は 著を ちょう と読むので sai、げんちょ は 顕を げん と読むので sai。",
   "voc": "顕著（けんちょ）：rõ rệt, nổi bật； 調査（ちょうさ）：điều tra, khảo sát； 両者（りょうしゃ）：hai bên"
  },
  {
   "s": "両国 の 関係 が 緩和 され、 交流 が 再開 された。",
   "t": "緩和",
   "r": "かんわ",
   "w": [
    "かんか",
    "ゆるわ",
    "かんな"
   ],
   "exp": "緩和は「かんわ」と読む。「nới lỏng, làm dịu đi」という意味。かんか は 和を か と読むので sai、ゆるわ は 緩を ゆる と読むので sai、かんな は 和を んな と読むので sai。",
   "voc": "緩和（かんわ）：nới lỏng, xoa dịu； 関係（かんけい）：quan hệ； 交流（こうりゅう）：giao lưu； 再開（さいかい）：mở lại"
  },
  {
   "s": "新しい 計画 に は、 費用 の 面 で 懸念 が 残って いる。",
   "t": "懸念",
   "r": "けねん",
   "w": [
    "けんねん",
    "けね",
    "げねん"
   ],
   "exp": "懸念は「けねん」と読む。「lo ngại, quan ngại」という意味。けんねん は 懸を けん と読むので sai、けね は 念を ね と読むだけでは不十分で sai、げねん は 懸を げ と読むので sai。",
   "voc": "懸念（けねん）：lo ngại, quan ngại； 費用（ひよう）：chi phí； 計画（けいかく）：kế hoạch"
  }
 ],
 "ctx": [
  {
   "s": "彼 は 失敗 の 原因 を 徹底的 に （　）し、 再発 を 防いだ。",
   "a": "究明",
   "w": [
    "隠蔽",
    "放置",
    "軽視"
   ],
   "exp": "失敗の原因を徹底的に調べ、明らかにするのが「究明する」。隠蔽（che giấu）、放置（bỏ mặc）、軽視（coi nhẹ）đều ngược với ý「điều tra để ngăn tái phát」nên sai。",
   "voc": "究明（きゅうめい）：điều tra làm rõ； 徹底的（てっていてき）：triệt để； 再発（さいはつ）：tái phát； 原因（げんいん）：nguyên nhân"
  },
  {
   "s": "彼女 は 困難 に 直面 しても、 決して あきらめず、 最後 まで （　）した。",
   "a": "努力",
   "w": [
    "怠慢",
    "放棄",
    "逃避"
   ],
   "exp": "困難に直面してもあきらめず、最後までがんばり続けたので「努力した」が正しい。怠慢（lười biếng, chểnh mảng）、放棄（từ bỏ）、逃避（trốn tránh）đều ngược nghĩa với「không bỏ cuộc」nên sai。",
   "voc": "努力（どりょく）：nỗ lực； 困難（こんなん）：khó khăn； 直面（ちょくめん）：đối mặt； あきらめる：từ bỏ"
  },
  {
   "s": "社員 は、 会社 の 規則 を （　）しなければ ならない。",
   "a": "遵守",
   "w": [
    "違反",
    "無視",
    "軽視"
   ],
   "exp": "規則を守ることは「遵守する」。違反する（vi phạm）、無視する（phớt lờ）、軽視する（coi nhẹ）đều ngược nghĩa với「tuân thủ quy định」nên sai。",
   "voc": "遵守（じゅんしゅ）：tuân thủ； 規則（きそく）：quy định； 違反（いはん）：vi phạm； 無視（むし）：phớt lờ"
  },
  {
   "s": "新しい 制度 の 内容 を、 社員 全員 が 正しく （　）する 必要 が ある。",
   "a": "把握",
   "w": [
    "曲解",
    "隠蔽",
    "放置"
   ],
   "exp": "制度の内容を社員全員が正しく理解し、つかむことは「把握する」。曲解する（hiểu sai, xuyên tạc）、隠蔽する（che giấu）、放置する（bỏ mặc）đều「正しく理解する」という文脈に合わないので sai。",
   "voc": "把握（はあく）：nắm bắt, hiểu rõ； 制度（せいど）：chế độ, quy định； 内容（ないよう）：nội dung； 社員（しゃいん）：nhân viên； 全員（ぜんいん）：toàn bộ, tất cả mọi người； 曲解（きょっかい）：hiểu sai, xuyên tạc"
  },
  {
   "s": "問題 が 起きた とき は、 落ち着いて 適切に （　）する こと が 大切 だ。",
   "a": "対処",
   "w": [
    "対抗",
    "回避",
    "逃避"
   ],
   "exp": "問題が起きたときに適切に対応することは「対処する」。対抗する（chống lại, đối kháng）、回避する（tránh né）、逃避する（trốn tránh）đều「đối mặt và xử lý」という意味にならないので sai。",
   "voc": "対処（たいしょ）：xử lý, ứng phó； 適切（てきせつ）：thích hợp； 落ち着く（おちつく）：bình tĩnh"
  },
  {
   "s": "政府 は、 地方 の 経済 の 発展 を （　）する ため、 新しい 政策 を 始めた。",
   "a": "促進",
   "w": [
    "阻止",
    "妨害",
    "遅延"
   ],
   "exp": "経済の発展を進めることは「促進する」。阻止する（ngăn cản）、妨害する（cản trở）、遅延する（trì hoãn）đều ngược nghĩa với「thúc đẩy phát triển」nên sai。",
   "voc": "促進（そくしん）：thúc đẩy； 発展（はってん）：phát triển； 政策（せいさく）：chính sách； 経済（けいざい）：kinh tế"
  },
  {
   "s": "お客様 の 意見 を もと に、 サービス の 質 を （　）して いきたい。",
   "a": "改善",
   "w": [
    "悪化",
    "低下",
    "廃止"
   ],
   "exp": "サービスの質をよくすることは「改善する」。悪化する（xấu đi）、低下する（giảm sút）は自動詞で「質を〜する」という形にならず、意味も逆である。廃止する（bãi bỏ）は質をなくすという意味になり、文脈に合わないので sai。",
   "voc": "改善（かいぜん）：cải thiện； 質（しつ）：chất lượng； 意見（いけん）：ý kiến； 悪化（あっか）：xấu đi"
  }
 ],
 "syn": [
  {
   "s": "実験 は 厳密 な 条件 の 下 で 行われた。",
   "t": "厳密",
   "a": "きびしい",
   "w": [
    "ゆるい",
    "あまい",
    "おおざっぱ"
   ],
   "exp": "厳密は「nghiêm ngặt, chặt chẽ」という意味で、「きびしい」と近い。ゆるい（lỏng lẻo）、あまい（dễ dãi）、おおざっぱ（sơ sài, đại khái）đều ngược nghĩa nên sai。",
   "voc": "厳密（げんみつ）：nghiêm ngặt, chặt chẽ； 条件（じょうけん）：điều kiện； 実験（じっけん）：thí nghiệm"
  },
  {
   "s": "この 問題 は 重要 です。",
   "t": "重要",
   "a": "たいせつ",
   "w": [
    "くだらない",
    "ささい",
    "むだ"
   ],
   "exp": "重要は「quan trọng」という意味で、「たいせつ」と近い。くだらない（vớ vẩn, tầm thường）、ささい（nhỏ nhặt）、むだ（vô ích）đều ngược nghĩa nên sai。",
   "voc": "重要（じゅうよう）：quan trọng； たいせつ：quan trọng, quý giá"
  },
  {
   "s": "彼 は 海外 で の 経験 が 豊富 だ。",
   "t": "豊富",
   "a": "おおい",
   "w": [
    "すくない",
    "わずか",
    "すこし"
   ],
   "exp": "豊富は「phong phú, dồi dào」という意味で、「多い」と近い。すくない（ít）、わずか（chỉ một chút）、すこし（một ít）đều ngược nghĩa nên sai。",
   "voc": "豊富（ほうふ）：phong phú, dồi dào； 経験（けいけん）：kinh nghiệm； 海外（かいがい）：nước ngoài"
  },
  {
   "s": "台風 の 被害 に 対し、 政府 は 迅速 な 対応 を した。",
   "t": "迅速",
   "a": "はやい",
   "w": [
    "おそい",
    "ゆっくり",
    "のろい"
   ],
   "exp": "迅速は「nhanh chóng」という意味で、「はやい」と近い。おそい（chậm）、ゆっくり（chậm rãi）、のろい（chậm chạp）đều ngược nghĩa nên sai。",
   "voc": "迅速（じんそく）：nhanh chóng； 被害（ひがい）：thiệt hại； 対応（たいおう）：ứng phó, đối ứng"
  },
  {
   "s": "この 問題 を 解く の は 困難 だ。",
   "t": "困難",
   "a": "むずかしい",
   "w": [
    "やさしい",
    "かんたん",
    "らく"
   ],
   "exp": "困難は「khó khăn」という意味で、「むずかしい」と近い。やさしい（dễ）、かんたん（đơn giản）、らく（nhẹ nhàng, dễ dàng）đều ngược nghĩa nên sai。",
   "voc": "困難（こんなん）：khó khăn； 解く（とく）：giải（bài toán）； やさしい：dễ dàng"
  },
  {
   "s": "彼 の 話 は 確実 だ。",
   "t": "確実",
   "a": "たしか",
   "w": [
    "あやしい",
    "うたがわしい",
    "まちがった"
   ],
   "exp": "確実は「chắc chắn」という意味で、「たしか」と近い。あやしい（đáng ngờ）、うたがわしい（đáng nghi）、まちがった（sai）đều ngược nghĩa nên sai。",
   "voc": "確実（かくじつ）：chắc chắn； たしか：chắc chắn, đúng đắn； あやしい：đáng ngờ"
  }
 ],
 "yoho": [
  {
   "t": "惜しい",
   "s": [
    "この 本 は 惜しい から、 買いません。",
    "惜しい 時間 が あった ので、 ゆっくり 休んだ。",
    "優勝 を 逃した の は、 本当に 惜しい です。",
    "彼 は 惜しい 服 を 着て、 出かけた。"
   ],
   "a": 2,
   "exp": "惜しいは「đáng tiếc, tiếc nuối」という意味で、優勝を逃したときなどに使う。文3「優勝を逃したのは、本当に惜しいです」が正しい。文1「惜しい本」は sai kết hợp（本 không dùng 惜しい để miêu tả）、文2「惜しい時間」は sai（時間 thì dùng 時間が惜しいという形）、文4「惜しい服」は sai kết hợp nên sai。",
   "voc": "惜しい（おしい）：đáng tiếc, tiếc nuối； 優勝（ゆうしょう）：vô địch； 逃す（のがす）：đánh mất, để tuột mất"
  },
  {
   "t": "乏しい",
   "s": [
    "彼 は 知識 が 乏しい ので、 質問 に 答えられた。",
    "彼女 は 時間 が 乏しい ので、 ゆっくり 休んだ。",
    "この 店 は 品物 が 乏しい ので、 客 が 多い。",
    "この 地域 は 水 が 乏しい です。"
   ],
   "a": 3,
   "exp": "乏しいは「thiếu, ít, khan hiếm」という意味。文4「この地域は水が乏しいです」が正しい。文1は「知識が乏しい」という組み合わせ自体は自然だが、知識が乏しいのに質問に答えられたという結論が矛盾するので sai。文2は「時間が乏しいのに、ゆっくり休んだ」が矛盾するので sai。文3は「品物が乏しいのに、客が多い」が矛盾するので sai。",
   "voc": "乏しい（とぼしい）：thiếu thốn, khan hiếm； 知識（ちしき）：kiến thức； 品物（しなもの）：hàng hóa； 地域（ちいき）：khu vực"
  },
  {
   "t": "ささやか",
   "s": [
    "ささやかな 幸せ を 大切に したい と 思って いる。",
    "ささやかな 山 に 登って、 景色 を 楽しんだ。",
    "ささやかな 海 を 眺めながら、 散歩 を した。",
    "ささやかな 地震 が 起きた。"
   ],
   "a": 0,
   "exp": "ささやかは「nhỏ bé, khiêm tốn」という意味で、幸せ・喜び・願いなどの抽象的なものや、規模の小さいものに使う。文1「ささやかな幸せ」が正しい。山・海は大きさを ささやか で表すことはなく、地震は自然現象で、規模を ささやか で表すこともないので、文2・3・4は sai。",
   "voc": "ささやか：nhỏ bé, khiêm tốn； 幸せ（しあわせ）：hạnh phúc； 大切（たいせつ）：quý trọng； 地震（じしん）：động đất"
  },
  {
   "t": "巧み",
   "s": [
    "巧みな 天気 に 恵まれて、 試合 が 行われた。",
    "彼 は 巧みな 技術 で、 美しい 家具 を 作った。",
    "巧みな 色 の 服 を 着て、 出かけた。",
    "巧みな 音 が 部屋 に 響いた。"
   ],
   "a": 1,
   "exp": "巧みは「khéo léo, tài tình」という意味で、技術・話し方・手口など人の技や方法に使う。文2「巧みな技術」が正しい。天気・色・音は人の技術ではないので、文1・3・4は sai。",
   "voc": "巧み（たくみ）：khéo léo, tài tình； 技術（ぎじゅつ）：kỹ thuật； 家具（かぐ）：đồ nội thất"
  },
  {
   "t": "旺盛",
   "s": [
    "旺盛な 雨 が 降り続いて いる。",
    "旺盛な 建物 が 次々と 建てられて いる。",
    "祖父 は 八十歳 を 過ぎても 旺盛な 食欲 が ある。",
    "旺盛な 本 を たくさん 読んだ。"
   ],
   "a": 2,
   "exp": "旺盛は「dồi dào, sung mãn」という意味で、食欲・好奇心・意欲などの生命力や欲求に使う。文3「旺盛な食欲」が正しい。雨・建物・本は欲求や生命力ではないので、文1・2・4は sai。",
   "voc": "旺盛（おうせい）：dồi dào, sung mãn； 食欲（しょくよく）：cảm giác thèm ăn； 祖父（そふ）：ông nội, ông ngoại"
  },
  {
   "t": "漠然",
   "s": [
    "事故 の 原因 に ついては、 漠然とした 記憶 しか 残って いない。",
    "漠然とした 本 を 読んで、 感想 を 書いた。",
    "漠然とした 料理 を 作って、 家族 に 出した。",
    "漠然とした 車 を 買う こと に した。"
   ],
   "a": 0,
   "exp": "漠然は「mơ hồ, không rõ ràng」という意味で、不安・イメージ・記憶などの抽象的なものに使う。文1「漠然とした記憶」が正しい。事故の原因について、はっきりした記憶が残っていないという文脈に合う。本・料理・車といった具体的な物には使わないので、文2・3・4は sai。",
   "voc": "漠然（ばくぜん）：mơ hồ, không rõ ràng； 記憶（きおく）：ký ức, trí nhớ； 事故（じこ）：tai nạn, sự cố； 原因（げんいん）：nguyên nhân； 残る（のこる）：còn lại"
  }
 ],
 "g1dlg": [
  {
   "d": [
    "台風の 日に、かれは 山に のぼったんですか。",
    "ええ、つよい 雨や 風を（　）、山頂まで 行ったんです。"
   ],
   "a": "ものともせず",
   "w": [
    "ものともして",
    "ものともすれば",
    "ものともした"
   ],
   "exp": "「Nをものともせず」は「không coi N là trở ngại, bất chấp N」という意味の N1 文型。強い雨や風をものともせず山頂まで行った、つまり雨風をものともしなかったので正しい。ものともして、ものともすれば、ものともした は文型として成り立たないので sai。",
   "voc": "台風（たいふう）：bão； 山頂（さんちょう）：đỉnh núi； 強い（つよい）：mạnh； ものともせず：bất chấp, không coi là trở ngại",
   "p": "N + をものともせず（に）"
  },
  {
   "d": [
    "社長 は もう 来ました か。",
    "ええ、 社長 が 会議室 に （　）、 全員 が 立ち上がりました。"
   ],
   "a": "入るや否や",
   "w": [
    "入ったや否や",
    "入るや否",
    "入ったや否"
   ],
   "p": "〜や否や",
   "exp": "「Vるや否や」は「vừa V thì ngay lập tức…」という意味の N1 文型で、動詞は辞書形に続く。「社長が会議室に入るや否や、全員が立ち上がりました」が正しい。入ったや否や は た形に続くので sai、入るや否・入ったや否 は 否やが不完全なので sai。",
   "voc": "社長（しゃちょう）：giám đốc； 会議室（かいぎしつ）：phòng họp； 立ち上がる（たちあがる）：đứng lên"
  },
  {
   "d": [
    "山田さん は、 宝くじ に 当たった そう です ね。",
    "ええ、 宝くじ に （　）、 仕事 を 辞めて しまった んです。"
   ],
   "a": "当たったが最後",
   "w": [
    "当たるが最後",
    "当たるが最後に",
    "当たってが最後"
   ],
   "p": "V-た が最後",
   "exp": "宝くじに当たったが最後、仕事を辞めてしまった nghĩa là một khi đã trúng số thì (ắt sẽ) bỏ việc — mẫu 〜が最後 đi sau động từ dạng た (V-た + が最後), diễn tả: một khi đã xảy ra việc X thì hệ quả (thường là xấu hoặc không thể đảo ngược) sẽ kéo theo tất yếu; ở đây trúng số xong thì anh Yamada bỏ việc luôn. 当たったが最後 mới đúng; 当たるが最後 sai vì dạng từ điển không đi được với が最後. 当たるが最後に sai vì thừa に, 当たってが最後 sai vì dùng dạng て.",
   "voc": "宝くじ（たからくじ）：vé số； 当たる（あたる）：trúng（số）； 当たった（あたった）：đã trúng (số)； 辞める（やめる）：nghỉ việc"
  }
 ],
 "g1": [
  {
   "s": "東京 に 引っ越して （　）、 電車 で 通勤する よう に なった。",
   "a": "からというもの",
   "w": [
    "からといって",
    "からには",
    "からというものは"
   ],
   "p": "〜てからというもの",
   "exp": "「Vてからというもの」は「kể từ khi V, (suốt từ đó)…」という意味の N1 文型。引っ越してからというもの、電車で通勤するようになった、つまり引っ越しをきっかけに変化が続いているので正しい。からといって（chỉ vì… mà）は因果の意味が合わず sai、からには（một khi đã… thì phải）は義務・決意の文脈が必要で sai、からというものは は余計な はがあるので sai。",
   "voc": "引っ越す（ひっこす）：chuyển nhà； 通勤（つうきん）：đi làm； 電車（でんしゃ）：tàu điện"
  },
  {
   "s": "大切な 試験 の 前日 は、 早めに 休む （　）と 思います。",
   "a": "に越したことはない",
   "w": [
    "に越したことはある",
    "に越したことだ",
    "に越したこともない"
   ],
   "p": "〜に越したことはない",
   "exp": "「Vるに越したことはない」は「làm V thì tốt nhất, không gì hơn」という意味の N1 文型。早めに休むに越したことはないと思います、つまり早めに休むのがいちばんよいので正しい。に越したことはある・に越したことだ・に越したこともない は決まった形ではないので sai。",
   "voc": "試験（しけん）：kỳ thi； 前日（ぜんじつ）：ngày hôm trước； 早め（はやめ）：sớm hơn thường lệ"
  },
  {
   "s": "大雪 の ため、 空港 は すべての 便 の 欠航 （　）そうです。",
   "a": "を余儀なくされた",
   "w": [
    "を余儀なくする",
    "を余儀なくさせる",
    "を余儀なくした"
   ],
   "p": "N + を余儀なくされる",
   "exp": "「Nを余儀なくされる」は「bị buộc phải N, đành phải N」という意味の N1 受身文型。すべての便の欠航を余儀なくされたそうです、つまりやむをえず欠航させられたので正しい。を余儀なくする・を余儀なくした は能動形で、受身の意味にならないので sai、を余儀なくさせる は使役形で意味が違うので sai。",
   "voc": "大雪（おおゆき）：tuyết lớn； 空港（くうこう）：sân bay； 欠航（けっこう）：hủy chuyến bay； 便（びん）：chuyến bay"
  },
  {
   "s": "雨 が やんだ （　）、 また 激しく 降り出して きた。",
   "a": "と思いきや",
   "w": [
    "に違いない",
    "ばかりか",
    "と思いきり"
   ],
   "p": "〜と思いきや",
   "exp": "「Vたと思いきや」は「cứ tưởng là V rồi, ai ngờ…」という意味の N1 文型。雨がやんだと思いきや、また激しく降り出してきた、つまり予想に反して雨が再び降り出したので正しい。に違いない は推量で文がつながらず sai、ばかりか は「やんだだけでなく」という意味になり、雨が再び降ることと矛盾するので sai、と思いきり は「思い切り（hết sức）」と混同した形で文型として成り立たないので sai。",
   "voc": "やむ：tạnh (mưa)； 激しい（はげしい）：dữ dội； 降り出す（ふりだす）：bắt đầu rơi"
  },
  {
   "s": "二度と あの 店 で は 買い物 を （　）と 心 に 決めた。",
   "a": "するまい",
   "w": [
    "しないまい",
    "するまいだ",
    "するまいに"
   ],
   "p": "V-る + まい",
   "exp": "「Vるまい」は「quyết không V」という意志の否定を表す N1 文型で、動詞は辞書形に続く。買い物を「するまい」と心に決めた、つまり二度と買わないと決意したので正しい。しないまい は ない形に続くので sai、するまいだ・するまいに は文型として成り立たないので sai。",
   "voc": "二度と（にどと）：không bao giờ nữa； 心に決める（こころにきめる）：quyết tâm trong lòng； 買い物（かいもの）：mua sắm"
  },
  {
   "s": "この 山道 は 熊 の 生息地 に 近く、 熊 に 出会う こと も （　）と 言われて いる。",
   "a": "ざらではない",
   "w": [
    "ざらだ",
    "ざらではなく",
    "ざらではないか"
   ],
   "p": "〜ざらではない / 〜ざらだ",
   "exp": "「Vることもざらではない」は「chuyện V cũng không phải là hiếm」という意味の N1 文型で、ことも＋ざらではない の形で使う。熊の生息地に近い山道では、熊に出会うことも珍しくないと言われているので正しい。ざらだ は のは＋ざらだ の形で使うため、ことも には続かず sai、ざらではなく は後ろに文が続く形が必要で sai、ざらではないか は疑問の形になり sai。",
   "voc": "山道（やまみち）：đường núi； 熊（くま）：gấu； 生息地（せいそくち）：nơi sinh sống； 出会う（であう）：gặp gỡ"
  },
  {
   "s": "こんな 調子 で 勉強 して いる （　）、 合格 は 難しい だろう。",
   "a": "ようでは",
   "w": [
    "たら",
    "なければ",
    "ならでは"
   ],
   "p": "〜ようでは",
   "exp": "「〜ようでは」は「cứ tình trạng này thì…」という意味の N1 文型で、動詞の普通形に続く。こんな調子で勉強しているようでは、合格は難しいだろう、つまりこのままの勉強の仕方では合格できないので正しい。たら は「勉強している」に直接続かず sai、なければ は ない形（勉強しなければ）に続くので sai、ならでは は「〜ならではの（đặc trưng của）」という意味で文脈に合わず sai。",
   "voc": "調子（ちょうし）：tình trạng, tiến độ； 勉強（べんきょう）：học tập； 合格（ごうかく）：đỗ, đậu (kỳ thi)； 難しい（むずかしい）：khó"
  }
 ],
 "star": [
  {
   "pre": "彼は",
   "post": "。",
   "chunks": [
    "知らせを聞くや否や",
    "思わず大きな声を上げて",
    "部屋を",
    "飛び出した"
   ],
   "p": "〜や否や",
   "exp": "正しい順序は「彼は知らせを聞くや否や、思わず大きな声を上げて、部屋を飛び出した。」や否やは動詞の辞書形に続き、直後に起きた出来事を表す。知らせを聞くや否や（vừa nghe tin thì）＋思わず大きな声を上げて（buột miệng hét lớn rồi）＋部屋を飛び出した（lao ra khỏi phòng）。部屋を は 飛び出す の目的語なので、飛び出した の直前に置く。思わず大きな声を上げて は や否や の直後の出来事なので、知らせを聞くや否や の後に置く。",
   "voc": "知らせ（しらせ）：tin tức； 聞く（きく）：nghe； 思わず（おもわず）：buột miệng, bất giác； 声（こえ）：giọng, tiếng； 上げる（あげる）：cất lên； 部屋（へや）：phòng； 飛び出す（とびだす）：lao ra, chạy vụt ra"
  },
  {
   "pre": "",
   "post": "。",
   "chunks": [
    "苦労してこそ",
    "本当の",
    "喜びが",
    "分かるのだ"
   ],
   "p": "V-て こそ",
   "exp": "正しい順序は「苦労してこそ、本当の喜びが分かるのだ。」てこそは「chỉ khi V mới…」という意味で、文頭に置く。苦労してこそ（chỉ khi đã trải qua gian khổ）＋本当の喜びが（niềm vui thật sự thì）＋分かるのだ（mới hiểu được）。本当の は 喜び を修飾するので、喜びが の前に置く。",
   "voc": "苦労（くろう）：gian khổ, vất vả； 喜び（よろこび）：niềm vui； 分かる（わかる）：hiểu"
  },
  {
   "pre": "",
   "post": "。",
   "chunks": [
    "約束を破ることは",
    "相手を",
    "裏切ることに",
    "等しい"
   ],
   "p": "〜に等しい",
   "exp": "正しい順序は「約束を破ることは、相手を裏切ることに等しい。」に等しいは「tương đương với, chẳng khác nào」という意味で、文末に置く。約束を破ることは（việc phá vỡ lời hứa thì）＋相手を裏切ることに（tương đương với việc phản bội đối phương）＋等しい。相手を は 裏切ること の目的語なので、裏切ることに の前に置く。",
   "voc": "約束（やくそく）：lời hứa； 破る（やぶる）：phá vỡ； 裏切る（うらぎる）：phản bội； 等しい（ひとしい）：bằng, tương đương"
  },
  {
   "pre": "",
   "post": "。",
   "chunks": [
    "今回だけは",
    "彼の",
    "若さに免じて",
    "許してやろう"
   ],
   "p": "N + に免じて",
   "exp": "正しい順序は「今回だけは、彼の若さに免じて許してやろう。」に免じては「vì nể, xét đến N mà tha thứ」という意味。今回だけは（chỉ lần này thôi）＋彼の若さに免じて（vì nể tuổi trẻ của anh ta）＋許してやろう（ta sẽ tha cho）。彼の は 若さ を修飾するので、若さに免じて の前に置く。",
   "voc": "今回（こんかい）：lần này； 若さ（わかさ）：tuổi trẻ； 免じる（めんじる）：tha thứ, xét đến； 許す（ゆるす）：tha thứ"
  },
  {
   "pre": "",
   "post": "。",
   "chunks": [
    "彼女の努力は",
    "想像に",
    "かたくない",
    "だろう"
   ],
   "p": "V-ます + にかたくない",
   "exp": "正しい順序は「彼女の努力は想像にかたくないだろう。」にかたくないは「không khó để…」という意味で、想像に続く。彼女の努力は（nỗ lực của cô ấy thì）＋想像に（không khó tưởng tượng）＋かたくない＋だろう。想像に は かたくない の前に置く。",
   "voc": "努力（どりょく）：nỗ lực； 想像（そうぞう）：tưởng tượng； かたくない：không khó"
  }
 ],
 "bunsho": [
  {
   "intro": "つぎの 文章 を 読んで、 （　1　）〜（　5　）に 入る 最も よい もの を、 1・2・3・4 から 一つ 選びなさい。",
   "p": "近年、 多く の 人 が 買い物 に インターネット を 利用する よう に なった。 （　1　）実店舗 の 売り上げ が 減り、 閉店 する 店 も 増えて いる。 だが、 インターネット で の 買い物 に は 便利 な 点 も 多い。 （　2　）自宅 に いながら、 さまざま な 商品 を 比べる こと が できる。 重い 荷物 を 運ぶ 必要 も ない。 （　3　）商品 を 実際 に 手 に 取って 確かめる こと は できない。 サイズ や 色 が 思って いた もの と 違う 場合 も ある。 （　4　）店 に 行く 手間 は 省ける が、 届く まで 時間 が かかる 場合 も ある。 （　5　）インターネット で の 買い物 は 便利 だ が、 実店舗 に も 良さ が ある こと を 忘れて は ならない。",
   "b": [
    {
     "a": "そのため",
     "w": [
      "しかし",
      "たとえば",
      "つまり"
     ]
    },
    {
     "a": "たとえば",
     "w": [
      "しかし",
      "そのため",
      "一方で"
     ]
    },
    {
     "a": "一方で",
     "w": [
      "そのため",
      "たとえば",
      "つまり"
     ]
    },
    {
     "a": "また",
     "w": [
      "そのため",
      "たとえば",
      "つまり"
     ]
    },
    {
     "a": "要するに",
     "w": [
      "そのため",
      "たとえば",
      "しかし"
     ]
    }
   ],
   "exp": "(1) そのため：vì việc dùng internet mua sắm tăng lên nên doanh số cửa hàng thực tế giảm — quan hệ nhân quả, nên「そのため」đúng. しかし (ngược ý), たとえば (ví dụ), つまり (nói cách khác) đều không diễn đạt nhân quả nên sai. (2) たとえば：có thể so sánh nhiều sản phẩm ở nhà là ví dụ cụ thể cho「điểm tiện lợi」, nên「たとえば」đúng. しかし・そのため・一方で đều không phải ví dụ nên sai. (3) 一方で：không thể cầm tận tay kiểm tra hàng là mặt trái ngược với điểm tiện lợi, nên「一方で」đúng. そのため・たとえば・つまり đều không diễn đạt sự đối lập nên sai. (4) また：phải chờ giao hàng là một nhược điểm khác, song song với (3), nên「また」(thêm nữa) đúng. そのため・たとえば・つまり đều không diễn đạt sự bổ sung nên sai. (5) 要するに：câu cuối tổng kết toàn bài, nên「要するに」đúng. そのため (nhân quả), たとえば (ví dụ), しかし (ngược ý) đều không phải từ tổng kết nên sai.",
   "voc": "近年（きんねん）：những năm gần đây； 実店舗（じつてんぽ）：cửa hàng thực tế； 売り上げ（うりあげ）：doanh số； 閉店（へいてん）：đóng cửa； 便利（べんり）：tiện lợi； 自宅（じたく）：nhà mình； 商品（しょうひん）：sản phẩm； 手間（てま）：công sức, thời gian"
  }
 ],
 "readS": [
  {
   "p": "この 町 の 図書館 は、 火曜日 が 休み です。 平日 は 朝 九時 から 夜 七時 まで、 土曜日 と 日曜日 は 朝 十時 から 夕方 五時 まで 開いて います。 本 は 一人 五冊 まで、 二週間 借りる こと が できます。 貸出 中 の 本 は、 インターネット で 予約 する こと も できます。",
   "q": "図書館 について、 正しい もの は どれ です か。",
   "o": [
    "火曜日 も 開いて いる。",
    "土曜日 は 朝 十時 から 開いて いる。",
    "本 は 一人 十冊 まで 借りられる。",
    "平日 は 夜 九時 まで 開いて いる。"
   ],
   "a": 1,
   "e": "土日は朝十時から夕方五時まで開いている。",
   "exp": "Đáp án đúng là lựa chọn 2.「土曜日は朝十時から開いている」khớp với câu trong bài「土曜日と日曜日は朝十時から夕方五時まで開いています」. Lựa chọn 1 sai vì thứ Ba thư viện đóng cửa. Lựa chọn 3 sai vì mỗi người chỉ được mượn tối đa 5 cuốn. Lựa chọn 4 sai vì ngày thường chỉ mở đến 7 giờ tối。",
   "voc": "図書館（としょかん）：thư viện； 貸出（かしだし）：cho mượn； 予約（よやく）：đặt trước； 夕方（ゆうがた）：chiều tối"
  },
  {
   "p": "市立 美術館 の 入館料 は、 大人 800円、 子ども 400円 です。 20人 以上 の 団体 は、 1人 100円引き に なります。 毎月 第一 日曜日 は、 誰でも 無料 で 入る こと が できます。 美術館 は 月曜日 が 休み で、 開館 時間 は 午前 9時 から 午後 5時 まで です。",
   "q": "大人 2人 と 子ども 2人 で、 ふつう の 日 に 美術館 に 入る と、 合計 いくら です か。",
   "o": [
    "1600円 です。",
    "2000円 です。",
    "2400円 です。",
    "3200円 です。"
   ],
   "a": 2,
   "calc": true,
   "e": "大人 は 800円、 子ども は 400円 と 書かれて いる。",
   "exp": "Người lớn 800 yên nhân 2 người bằng 1600 yên, trẻ em 400 yên nhân 2 người bằng 800 yên, tổng cộng 2400 yên. Vì là ngày thường nên không được miễn phí cũng không được giảm giá đoàn. 1600 yên chỉ là tiền của người lớn, 2000 yên và 3200 yên tính sai nên sai.",
   "voc": "入館料（にゅうかんりょう）：phí vào cửa； 団体（だんたい）：đoàn, nhóm； 割引（わりびき）：giảm giá； 無料（むりょう）：miễn phí； 開館（かいかん）：mở cửa"
  },
  {
   "p": "市民 スポーツセンター は、 火曜日 が 休み です。 プール は 午前 10時 から 午後 9時 まで、 体育館 は 午前 9時 から 午後 8時 まで 使う こと が できます。 プール の 利用料 は 1回 500円 で、 65歳 以上 の 人 は 無料 です。 体育館 を 使う とき は、 室内用 の くつ が 必要 です。",
   "q": "スポーツセンター に ついて、 正しい もの は どれ です か。",
   "o": [
    "火曜日 も 開いて いる。",
    "65歳 以上 の 人 は プール を 無料 で 使う こと が できる。",
    "プール は 午前 9時 から 使う こと が できる。",
    "体育館 で は 外 で 使う くつ を 履く。"
   ],
   "a": 1,
   "e": "65歳 以上 の 人 は 無料 と 書かれて いる。",
   "exp": "Đáp án đúng là lựa chọn 2. Trong bài có câu「プールの利用料は1回500円で、65歳以上の人は無料です」. Lựa chọn 1 sai vì thứ Ba trung tâm đóng cửa. Lựa chọn 3 sai vì hồ bơi mở từ 10 giờ sáng. Lựa chọn 4 sai vì vào nhà thi đấu cần giày dùng trong nhà.",
   "voc": "市民（しみん）：người dân thành phố； 体育館（たいいくかん）：nhà thi đấu； 利用料（りようりょう）：phí sử dụng； 室内用（しつないよう）：dùng trong nhà"
  },
  {
   "p": "来週 の 土曜日 に、 公民館 で 料理教室 が 開かれます。 作る の は、 季節 の 野菜 を 使った スープ と サラダ です。 参加費 は 1000円 で、 材料 は 公民館 が 用意 します。 参加 する 人 は、 エプロン と タオル を 持って きて ください。 申し込み は、 木曜日 まで に 電話 で して ください。",
   "q": "料理教室 に ついて、 正しい もの は どれ です か。",
   "o": [
    "材料 は 自分 で 用意 しなければ ならない。",
    "申し込み は 土曜日 に すれば よい。",
    "作る の は 肉料理 だけ で ある。",
    "参加費 は 1000円 で、 エプロン を 持って いく 必要 が ある。"
   ],
   "a": 3,
   "e": "参加費 は 1000円 で、 エプロン と タオル を 持って きて ください と 書かれて いる。",
   "exp": "Đáp án đúng là lựa chọn 4. Trong bài có câu「参加費は1000円で、エプロンとタオルを持ってきてください」. Lựa chọn 1 sai vì nguyên liệu do nhà văn hóa chuẩn bị. Lựa chọn 2 sai vì phải đăng ký trước thứ Năm. Lựa chọn 3 sai vì món làm là súp và salad từ rau theo mùa.",
   "voc": "公民館（こうみんかん）：nhà văn hóa； 料理教室（りょうりきょうしつ）：lớp học nấu ăn； 季節（きせつ）：mùa； 材料（ざいりょう）：nguyên liệu； 申し込み（もうしこみ）：đăng ký"
  }
 ],
 "readM": [
  {
   "p": "近年、 多く の 会社 で テレワーク が 広がって いる。 通勤 時間 が なくなり、 自分 の ペース で 仕事 が できる ため、 働く 人 にとって 大きな 利点 が ある。 一方 で、 家 で 働く と、 同僚 と の コミュニケーション が 減り、 孤独 を 感じる 人 も 少なく ない。 また、 仕事 と 生活 の 区別 が つきにくく、 長時間 働いて しまう 場合 も ある。 特に、 若い 社員 は、 先輩 から 直接 教わる 機会 が 減った と 感じて いる。 そのため、 会社 は オンライン 会議 を 増やしたり、 働く 時間 を 明確 に 決めたり する 工夫 を して いる。 会社 に よって は、 週 に 一度 は 出社 する 日 を 決めて、 チーム の つながり を 保とう と して いる。 テレワーク は 便利 な 働き方 だが、 課題 も 多い。 今後 は、 出社 と テレワーク を 組み合わせる 働き方 が、 さらに 広がる と 考えられて いる。 働く 時間 を 自分 で 決められる こと は、 仕事 の やる気 を 高める と いう 意見 も ある。",
   "qs": [
    {
     "q": "テレワーク の 利点 として、 本文 で 述べられて いる もの は どれ です か。",
     "o": [
      "通勤 時間 が なくなり、 自分 の ペース で 仕事 が できる こと。",
      "同僚 と の コミュニケーション が 増える こと。",
      "仕事 と 生活 の 区別 が つきやすく なる こと。",
      "長時間 働く こと が できる こと。"
     ],
     "a": 0,
     "e": "通勤時間がなくなり、自分のペースで仕事ができると書かれている。"
    },
    {
     "q": "テレワーク の 課題 として、 本文 で 述べられて いない もの は どれ です か。",
     "o": [
      "同僚 と の コミュニケーション が 減る こと。",
      "仕事 と 生活 の 区別 が つきにくい こと。",
      "若い 社員 が 先輩 から 教わる 機会 が 減る こと。",
      "会社 の 仕事 が 減る こと。"
     ],
     "a": 3,
     "e": "会社の仕事が減るとは書かれていない。"
    },
    {
     "q": "今後 の 働き方 について、 筆者 は どう 考えて いる か。",
     "o": [
      "出社 と テレワーク を 組み合わせる 働き方 が 広がる。",
      "テレワーク は なくなり、 出社 だけ に なる。",
      "すべて の 会社 が テレワーク だけ に なる。",
      "働き方 は 今 と 変わらない。"
     ],
     "a": 0,
     "e": "出社とテレワークを組み合わせる働き方が広がると考えられている。"
    }
   ],
   "exp": "Câu 1: lợi ích của telework là「通勤時間がなくなり、自分のペースで仕事ができること」. Trong bài có câu「通勤時間がなくなり、自分のペースで仕事ができるため、働く人にとって大きな利点がある」. Câu 2: điều KHÔNG được nhắc đến là「会社の仕事が減ること」. Việc giảm giao tiếp với đồng nghiệp, khó phân biệt công việc và cuộc sống, nhân viên trẻ ít cơ hội được tiền bối chỉ dạy trực tiếp đều có trong bài. Câu 3: về tương lai, tác giả cho rằng「出社とテレワークを組み合わせる働き方が、さらに広がると考えられている」.",
   "voc": "テレワーク：làm việc từ xa； 通勤（つうきん）：đi làm； 同僚（どうりょう）：đồng nghiệp； 孤独（こどく）：cô đơn； 組み合わせる（くみあわせる）：kết hợp"
  },
    {
   "p": "近年、 日本 で は、 夏 の 暑さ が 厳しく なり、 熱中症 で 倒れる 人 が 増えて いる。 熱中症 は、 体 の 中 に 熱 が たまり、 体温 の 調節 が うまく できなく なる こと で 起きる。 気温 が 高い 日 だけでなく、 湿度 が 高い 日 や、 風 が ない 日 に も 注意 が 必要 だ。 特に、 高齢者 や 小さい 子ども は、 体温 の 調節 が 難しい ため、 熱中症 に なりやすい と 言われて いる。 また、 室内 に いても、 冷房 を 使わず に 過ごす と、 熱中症 に なる こと が ある。 予防 の ため に は、 のど が 渇く 前 に 水分 を とる こと や、 塩分 を 少し とる こと が 大切 だ。 さらに、 外出 する とき は、 帽子 を かぶったり、 日陰 を 歩いたり する 工夫 も 役に立つ。 体調 が おかしい と 感じたら、 涼しい 場所 で 休み、 早め に 周り の 人 に 知らせる こと が 大切 だ と 言われて いる。 熱中症 は、 正しい 知識 が あれば、 防ぐ こと が できる。",
   "qs": [
    {
     "q": "熱中症 の 原因 として、 本文 で 述べられて いる もの は どれ です か。",
     "o": [
      "気温 が 低い 日 に、 体 が 冷えすぎる こと。",
      "体 の 中 に 熱 が たまり、 体温 の 調節 が うまく できなく なる こと。",
      "水分 を とりすぎて、 体 が 冷える こと。",
      "冷房 を 使いすぎて、 体 が 冷える こと。"
     ],
     "a": 1,
     "e": "体 の 中 に 熱 が たまり、 体温 の 調節 が うまく できなく なる こと で 起きる と 書かれて いる。"
    },
    {
     "q": "熱中症 に なりやすい 人 として、 本文 で 述べられて いる もの は どれ です か。",
     "o": [
      "体力 が ある 若い 人。",
      "毎日 運動 を して いる 人。",
      "高齢者 や 小さい 子ども。",
      "寒い 地方 に 住んで いる 人。"
     ],
     "a": 2,
     "e": "高齢者 や 小さい 子ども は、 体温 の 調節 が 難しい ため、 熱中症 に なりやすい と 言われて いる。"
    },
    {
     "q": "熱中症 を 防ぐ ため に、 筆者 は どう する 必要 が ある と 述べて いる か。",
     "o": [
      "のど が 渇く 前 に 水分 を とる など、 予防 の 工夫 が 必要 だ。",
      "夏 は 外出 を まったく やめる べき だ。",
      "冷房 は 使わず に、 我慢 する べき だ。",
      "塩分 は まったく とらない べき だ。"
     ],
     "a": 0,
     "e": "のど が 渇く 前 に 水分 を とる こと や、 塩分 を 少し とる こと が 大切 だ と 言われて いる。"
    }
   ],
   "exp": "Câu 1: nguyên nhân gây say nắng là「体の中に熱がたまり、体温の調節がうまくできなくなること」. Trong bài có câu「熱中症は、体の中に熱がたまり、体温の調節がうまくできなくなることで起きる」. Ngày lạnh làm cơ thể lạnh quá, uống quá nhiều nước làm cơ thể lạnh, dùng điều hòa quá nhiều làm cơ thể lạnh đều không được nhắc đến. Câu 2: người dễ bị say nắng là「高齢者や小さい子ども」. Trong bài có câu「特に、高齢者や小さい子どもは、体温の調節が難しいため、熱中症になりやすいと言われている」. Người trẻ khỏe mạnh, người tập thể dục hằng ngày, người sống ở vùng lạnh đều không được nhắc đến. Câu 3: để phòng say nắng cần「のどが渇く前に水分をとるなど、予防の工夫が必要だ」. Trong bài có câu「予防のためには、のどが渇く前に水分をとることや、塩分を少しとることが大切だ」. Tuyệt đối không ra ngoài vào mùa hè, không dùng điều hòa mà chịu đựng, hoàn toàn không ăn muối đều ngược với bài.",
   "voc": "熱中症（ねっちゅうしょう）：say nắng, sốc nhiệt； 体温（たいおん）：nhiệt độ cơ thể； 調節（ちょうせつ）：điều chỉnh, điều tiết； 湿度（しつど）：độ ẩm； 高齢者（こうれいしゃ）：người cao tuổi； 予防（よぼう）：phòng ngừa； 水分（すいぶん）：nước, lượng nước； 塩分（えんぶん）：lượng muối； 日陰（ひかげ）：bóng râm； 体調（たいちょう）：tình trạng sức khỏe"
  },
  {
   "p": "日本 で は、 食べられる の に 捨てられて しまう 食品 が、 年間 およそ 500万トン ある と 言われて いる。 これ は、 国民 一人あたり、 毎日 おにぎり 1個分 を 捨てて いる 計算 に なる。 家庭 から 出る もの と、 店 や 工場 から 出る もの が、 ほぼ 半分 ずつ を 占めて いる。 家庭 で は、 買いすぎ や 作りすぎ、 賞味期限 の 切れ が 主な 原因 だ。 一方、 店 で は、 売れ残り を 捨てざるをえない 場合 が 多い。 こうした 食品ロス を 減らす ため、 各地 で さまざま な 取り組み が 始まって いる。 たとえば、 賞味期限 が 近い 食品 を 安く 売る 店 や、 余った 料理 を 持ち帰る こと が できる 飲食店 が 増えて いる。 また、 家庭 で は、 買い物 の 前 に 冷蔵庫 の 中 を 確認 し、 必要 な 分 だけ 買う こと が 大切 だ と 言われて いる。 食品ロス を 減らす こと は、 ごみ を 減らす だけ で なく、 食料 を 大切 に する 意識 を 育てる こと に も つながる。",
   "qs": [
    {
     "q": "食品ロス に ついて、 本文 で 述べられて いる もの は どれ です か。",
     "o": [
      "年間 およそ 500万トン あり、 家庭 と 店・工場 から ほぼ 半分 ずつ 出て いる。",
      "家庭 から 出る もの が 全体 の ほとんど を 占めて いる。",
      "店 から 出る もの は ほとんど ない。",
      "年間 100万トン 以下 で ある。"
     ],
     "a": 0,
     "e": "年間 およそ 500万トン ある と 言われて いる。 家庭 から 出る もの と、 店 や 工場 から 出る もの が、 ほぼ 半分 ずつ を 占めて いる。"
    },
    {
     "q": "家庭 で の 食品ロス の 主な 原因 として、 本文 で 述べられて いる もの は どれ です か。",
     "o": [
      "冷蔵庫 が 小さい こと。",
      "買いすぎ や 作りすぎ、 賞味期限 の 切れ。",
      "料理 の 仕方 が 分からない こと。",
      "店 で 買う 食品 が 多い こと。"
     ],
     "a": 1,
     "e": "家庭 で は、 買いすぎ や 作りすぎ、 賞味期限 の 切れ が 主な 原因 だ。"
    },
    {
     "q": "食品ロス を 減らす ため の 取り組み として、 本文 で 述べられて いない もの は どれ です か。",
     "o": [
      "賞味期限 が 近い 食品 を 安く 売る 店 が 増えて いる こと。",
      "余った 料理 を 持ち帰る こと が できる 飲食店 が 増えて いる こと。",
      "家庭 で 必要 な 分 だけ 買う こと。",
      "賞味期限 を なくす こと。"
     ],
     "a": 3,
     "e": "賞味期限 を なくす と は 書かれて いない。"
    }
   ],
   "exp": "Câu 1: lượng thực phẩm lãng phí là「年間およそ500万トンあり、家庭と店・工場からほぼ半分ずつ出ている」. Trong bài có câu「年間およそ500万トンあると言われている」「家庭から出るものと、店や工場から出るものが、ほぼ半分ずつを占めている」. Câu 2: nguyên nhân chính ở gia đình là「買いすぎや作りすぎ、賞味期限の切れ」. Trong bài có câu「家庭では、買いすぎや作りすぎ、賞味期限の切れが主な原因だ」. Câu 3: điều KHÔNG được nhắc đến là「賞味期限をなくすこと」. Cửa hàng bán rẻ thực phẩm gần hết hạn, quán ăn cho mang món thừa về, gia đình chỉ mua đủ dùng đều có trong bài.",
   "voc": "食品ロス：lãng phí thực phẩm； 捨てる（すてる）：vứt bỏ； 占める（しめる）：chiếm； 賞味期限（しょうみきげん）：hạn sử dụng； 売れ残り（うれのこり）：hàng tồn, hàng ế； 持ち帰る（もちかえる）：mang về； 意識（いしき）：ý thức"
  }
 ],
 "readL": [
  {
   "p": "近年、 東京 など の 大都市 から 地方 へ 移住 する 人 が 増えて いる。 地方自治体 が 移住希望者 へ の 支援 を 広げて いる こと も、 その 理由 の 一つ だ。 たとえば、 空き家 の 改修費用 の 一部 を 補助 したり、 移住後 の 仕事探し を 手伝ったり する 自治体 も ある。 移住 する 人 の 動機 は さまざま だ。 子育て を 自然豊か な 環境 で したい と 考える 家族 も いれば、 テレワーク の 広がり を 機 に、 住む 場所 を 自由 に 選びたい と 考える 若い 会社員 も いる。 定年 を 迎え、 第二 の 人生 を 地方 で 送りたい という 高齢者 も 少なく ない。 地方 で の 暮らし に は、 都会 に は ない 魅力 が ある。 家賃 や 物価 が 安く、 広い 家 に 住む こと が できる。 近所 の 人 と の つながり が 深く、 地域 の 行事 に 参加 する 機会 も 多い。 一方 で、 課題 も ある。 都会 に 比べて 仕事 の 数 が 少なく、 収入 が 減る 場合 が ある。 病院 や 学校 など の 施設 が 遠く、 車 が なければ 生活 が 不便 だ という 声 も 聞かれる。 また、 地域 の 人間関係 が 密接 な ため、 移住者 が なじむ の に 時間 が かかる こと も ある。 そのため、 移住 を 考える 人 は、 事前 に その 土地 を 何度 か 訪れ、 生活 の 様子 を 確かめる こと が 大切 だ と 言われて いる。 移住 は、 住む 場所 を 変える だけ で は ない。 仕事 や 人間関係、 生活 全体 を 見直す こと で も ある。 だからこそ、 十分 な 準備 と、 その 土地 の 人々 と の 関わり が、 移住 を 成功 させる 鍵 に なる。",
   "qs": [
    {
     "q": "地方 へ 移住 する 人 が 増えて いる 理由 として、 本文 で 述べられて いる もの は どれ です か。",
     "o": [
      "地方自治体 が 移住希望者 へ の 支援 を 広げて いる こと。",
      "都会 の 家賃 が 安く なった こと。",
      "地方 の 仕事 の 数 が 増えた こと。",
      "都会 の 病院 が 減った こと。"
     ],
     "a": 0,
     "e": "地方自治体 が 移住希望者 へ の 支援 を 広げて いる こと も、 その 理由 の 一つ だ。"
    },
    {
     "q": "地方 で の 暮らし の 魅力 として、 本文 で 述べられて いる もの は どれ です か。",
     "o": [
      "仕事 の 数 が 多く、 収入 が 増える こと。",
      "家賃 や 物価 が 安く、 広い 家 に 住む こと が できる こと。",
      "病院 や 学校 が 近く に ある こと。",
      "車 が なくても 生活 が 便利 な こと。"
     ],
     "a": 1,
     "e": "家賃 や 物価 が 安く、 広い 家 に 住む こと が できる。"
    },
    {
     "q": "地方 で の 暮らし の 課題 として、 本文 で 述べられて いない もの は どれ です か。",
     "o": [
      "仕事 の 数 が 少なく、 収入 が 減る 場合 が ある こと。",
      "病院 や 学校 など の 施設 が 遠い こと。",
      "地域 の 人間関係 が 密接 で、 なじむ の に 時間 が かかる こと。",
      "家賃 が 高く、 広い 家 に 住めない こと。"
     ],
     "a": 3,
     "e": "家賃 が 高く、 広い 家 に 住めない と は 書かれて いない。"
    },
    {
     "q": "移住 を 考える 人 に ついて、 筆者 は どう 考えて いる か。",
     "o": [
      "都会 の 仕事 を 辞めず に 移住 する べき だ。",
      "移住先 の 人々 と 関わらない ほうが よい。",
      "事前 に その 土地 を 何度 か 訪れ、 生活 の 様子 を 確かめる こと が 大切 だ。",
      "準備 を せず に すぐに 移住 する べき だ。"
     ],
     "a": 2,
     "e": "事前 に その 土地 を 何度 か 訪れ、 生活 の 様子 を 確かめる こと が 大切 だ と 言われて いる。"
    }
   ],
   "exp": "Câu 1: lý do số người chuyển về địa phương tăng là「地方自治体が移住希望者への支援を広げていること」. Trong bài có câu「地方自治体が移住希望者への支援を広げていることも、その理由の一つだ」. Câu 2: sức hấp dẫn của cuộc sống ở địa phương là「家賃や物価が安く、広い家に住むことができること」. Trong bài có câu「家賃や物価が安く、広い家に住むことができる」. Câu 3: điều KHÔNG được nhắc đến là「家賃が高く、広い家に住めないこと」. Việc ít việc làm, cơ sở y tế và trường học ở xa, quan hệ cộng đồng khăng khít nên cần thời gian hòa nhập đều có trong bài. Câu 4: tác giả cho rằng người có ý định chuyển đi nên「事前にその土地を何度か訪れ、生活の様子を確かめることが大切だ」. Trong bài có câu「事前にその土地を何度か訪れ、生活の様子を確かめることが大切だと言われている」.",
   "voc": "移住（いじゅう）：chuyển đến sống (ở địa phương khác)； 地方自治体（ちほうじちたい）：chính quyền địa phương； 空き家（あきや）：nhà trống； 改修（かいしゅう）：sửa chữa, cải tạo； 補助（ほじょ）：hỗ trợ (tiền)； 動機（どうき）：động cơ； 子育て（こそだて）：nuôi dạy con； 定年（ていねん）：tuổi nghỉ hưu； 家賃（やちん）：tiền thuê nhà； 物価（ぶっか）：giá cả； 密接（みっせつ）：gắn bó, khăng khít； なじむ：hòa nhập, quen dần； 鍵（かぎ）：chìa khóa, yếu tố quyết định"
  }
 ],
 "tougou": [
  {
   "p1": "私たち の 商店街 は、 近年 客 が 減り、 空き店舗 が 増えて いる。 大型店 や インターネット通販 の 影響 が 大きい。 そこで、 商店街 で は 月 に 一度、 朝市 を 開く こと に した。 地元 の 野菜 や 手作り の 品 を 売り、 子ども 向け の 催し も 行う。 商店街 の 魅力 を 知って もらい、 足 を 運んで もらう こと が 目的 だ。 始めて 半年 が たち、 朝市 に は 多く の 人 が 集まる よう に なった。",
   "p2": "私 は この 町 に 引っ越して きて 3年 に なる。 商店街 の 朝市 に は、 ときどき 行く。 野菜 が 新鮮 で、 店 の 人 と 話す の も 楽しい。 ただ、 ふだん の 買い物 は、 仕事帰り に 大型店 で 済ませる こと が 多い。 商店街 の 店 は 閉まる の が 早く、 品ぞろえ も 限られて いる。 朝市 は よい 取り組み だ と 思う が、 ふだん の 利用 に つながる か は 分からない。",
   "qs": [
    {
     "q": "商店街 が 朝市 を 始めた 目的 は 何 か。",
     "o": [
      "大型店 を 閉店 させる こと。",
      "商店街 の 魅力 を 知って もらい、 足 を 運んで もらう こと。",
      "インターネット通販 を 始める こと。",
      "空き店舗 を 駐車場 に する こと。"
     ],
     "a": 1,
     "e": "商店街 の 魅力 を 知って もらい、 足 を 運んで もらう こと が 目的 だ。"
    },
    {
     "q": "二番目 の 文章 の 筆者 は、 商店街 に ついて どう 考えて いる か。",
     "o": [
      "商店街 の 店 は 品ぞろえ が 豊富 だ と 思って いる。",
      "朝市 は よい が、 ふだん の 買い物 は 大型店 で 済ませる こと が 多い。",
      "商店街 に は 行った こと が ない。",
      "商店街 の 店 は 遅く まで 開いて いる と 思って いる。"
     ],
     "a": 1,
     "e": "ふだん の 買い物 は、 仕事帰り に 大型店 で 済ませる こと が 多い。"
    },
    {
     "q": "二つ の 文章 に 共通 する 内容 は どれ か。",
     "o": [
      "朝市 が 始まって、 商店街 の 店 が すべて 復活 した こと。",
      "大型店 が 閉店 した こと。",
      "商店街 の 朝市 の 取り組み に ついて 述べられて いる こと。",
      "商店街 の 店 が インターネット通販 を 始めた こと。"
     ],
     "a": 2,
     "e": "一つ目 の 文章 で は 朝市 を 開く こと に した と 述べられ、 二つ目 の 文章 で は 筆者 が 朝市 に ときどき 行く と 述べられて いる。"
    }
   ],
   "exp": "Câu 1: mục đích mở chợ buổi sáng là「商店街の魅力を知ってもらい、足を運んでもらうこと」. Bài thứ nhất có câu「商店街の魅力を知ってもらい、足を運んでもらうことが目的だ」. Câu 2: tác giả bài thứ hai cho rằng「朝市はよいが、ふだんの買い物は大型店で済ませることが多い」. Trong bài có câu「朝市はよい取り組みだと思うが、ふだんの利用につながるかは分からない」「ふだんの買い物は、仕事帰りに大型店で済ませることが多い」. Câu 3: điểm chung của hai bài là「商店街の朝市の取り組みについて述べられていること」. Bài thứ nhất nói về việc quyết định mở chợ buổi sáng, bài thứ hai nói tác giả thỉnh thoảng đi chợ buổi sáng.",
   "voc": "商店街（しょうてんがい）：phố mua sắm； 空き店舗（あきてんぽ）：cửa hàng trống； 大型店（おおがたてん）：siêu thị lớn； 朝市（あさいち）：chợ buổi sáng； 地元（じもと）：địa phương； 手作り（てづくり）：làm thủ công； 催し（もよおし）：sự kiện； 足を運ぶ（あしをはこぶ）：ghé đến； 新鮮（しんせん）：tươi mới； 品ぞろえ（しなぞろえ）：chủng loại hàng hóa"
  }
 ],
 "shuchou": [
  {
   "p": "子ども の 頃、 私 は よく 失敗 を した。 料理 の 手伝い を すれば 皿 を 割り、 工作 を すれば 指 を 切った。 そのたび に 母 は 「大丈夫、 また やれば いい」 と 言って くれた。 だから、 私 は 失敗 を 恐れず に、 いろいろ な こと に 挑戦 する こと が できた。 今 の 社会 で は、 失敗 を 避けよう と する 風潮 が 強い よう に 思う。 学校 で は、 間違える こと を 恥ずかしい と 感じ、 答え が 分かって いても 手 を 挙げない 子ども が いる。 会社 で は、 失敗 を 恐れて 新しい 提案 を しない 社員 も 少なく ない。 確かに、 失敗 は 避けられる なら 避けた ほうが よい。 しかし、 失敗 を 恐れる あまり、 何も しない で いる こと は、 もっと 大きな 損失 で は ない だろう か。 失敗 から 学ぶ こと は 多い。 失敗 した 人 は、 なぜ 失敗 した の か を 考え、 次 は どう すれば よい か を 工夫 する。 その 過程 で、 考える 力 や 問題 を 解決 する 力 が 身に ついて いく。 成功 だけ を 重ねた 人 よりも、 一度 失敗 し、 そこ から 立ち直った 人 の ほうが、 困難 に 強い と 言われる こと も ある。 大切 な の は、 失敗 を しない こと で は なく、 失敗 した あと どう する か だ。 失敗 を 責める の で は なく、 失敗 から 何 を 学んだ か を 問う 社会 こそ、 人 が 成長 できる 社会 で は ない だろう か。 私 は、 子どもたち に、 失敗 を 恐れず に 挑戦 して ほしい。 そして、 大人たち に は、 失敗 した 子ども を 温かく 見守って ほしい と 思って いる。",
   "qs": [
    {
     "q": "筆者 の 主張 として、 最も 適当 な もの は どれ です か。",
     "o": [
      "失敗 は 避けられる なら、 どんな こと が あっても 避ける べき だ。",
      "失敗 を 恐れず に 挑戦 し、 失敗 から 学ぶ こと が 大切 だ。",
      "失敗 した 人 は、 困難 に 弱い ので、 挑戦 しない ほうが よい。",
      "子ども は 失敗 しない よう に、 大人 が すべて 手伝う べき だ。"
     ],
     "a": 1,
     "e": "失敗 を 恐れる あまり、 何も しない で いる こと は、 もっと 大きな 損失 で は ない だろう か。 大切 な の は、 失敗 を しない こと で は なく、 失敗 した あと どう する か だ。"
    },
    {
     "q": "筆者 が 子ども の 頃 の 話 を 出した の は、 なぜ か。",
     "o": [
      "料理 が 得意 だった こと を 示す ため。",
      "母 が 厳しかった こと を 示す ため。",
      "失敗 を 恐れず に 挑戦 できた の は、 母 の 言葉 が あった から だ と 示す ため。",
      "工作 が 好き だった こと を 示す ため。"
     ],
     "a": 2,
     "e": "そのたび に 母 は 「大丈夫、 また やれば いい」 と 言って くれた。 だから、 私 は 失敗 を 恐れず に、 いろいろ な こと に 挑戦 する こと が できた。"
    },
    {
     "q": "今 の 社会 に ついて、 筆者 は どう 述べて いる か。",
     "o": [
      "失敗 を 恐れる 人 が 少なく なり、 挑戦 する 人 が 増えて いる。",
      "学校 で は、 間違える こと を 恥ずかしい と 感じる 子ども は いない。",
      "失敗 を 避けよう と する 風潮 が 強く、 学校 や 会社 で 挑戦 しない 人 が いる。",
      "会社 で は、 失敗 した 社員 が すぐに 評価 される。"
     ],
     "a": 2,
     "e": "今 の 社会 で は、 失敗 を 避けよう と する 風潮 が 強い よう に 思う。 学校 で は、 間違える こと を 恥ずかしい と 感じ、 答え が 分かって いても 手 を 挙げない 子ども が いる。"
    },
    {
     "q": "失敗 から 学ぶ こと に ついて、 筆者 は どう 考えて いる か。",
     "o": [
      "失敗 から 学ぶ こと は 少なく、 成功 だけ が 大切 だ。",
      "失敗 した 人 は、 次 も 同じ 失敗 を 繰り返す。",
      "失敗 した 人 は、 原因 を 考え 工夫 する 過程 で、 考える 力 や 問題解決力 が 身に つく。",
      "失敗 から 学ぶ 力 は、 生まれつき 決まって いる。"
     ],
     "a": 2,
     "e": "失敗 した 人 は、 なぜ 失敗 した の か を 考え、 次 は どう すれば よい か を 工夫 する。 その 過程 で、 考える 力 や 問題 を 解決 する 力 が 身に ついて いく。"
    }
   ],
   "exp": "Câu 1:主張 của tác giả là「失敗を恐れずに挑戦し、失敗から学ぶことが大切だ」. Trong bài có câu「失敗を恐れるあまり、何もしないでいることは、もっと大きな損失ではないだろうか」「大切なのは、失敗をしないことではなく、失敗したあとどうするかだ」. Câu 2: tác giả kể chuyện thời thơ ấu để cho thấy「失敗を恐れずに挑戦できたのは、母の言葉があったからだ」. Trong bài có câu「そのたびに母は「大丈夫、またやればいい」と言ってくれた。だから、私は失敗を恐れずに、いろいろなことに挑戦することができた」. Câu 3: về xã hội hiện nay, tác giả nói「失敗を避けようとする風潮が強く、学校や会社で挑戦しない人がいる」. Trong bài có câu「今の社会では、失敗を避けようとする風潮が強いように思う。学校では、間違えることを恥ずかしいと感じ、答えが分かっていても手を挙げない子どもがいる」. Câu 4: về việc học từ thất bại, tác giả cho rằng「失敗した人は、原因を考え工夫する過程で、考える力や問題解決力が身につく」. Trong bài có câu「失敗した人は、なぜ失敗したのかを考え、次はどうすればよいかを工夫する。その過程で、考える力や問題を解決する力が身についていく」.",
   "voc": "失敗（しっぱい）：thất bại； 挑戦（ちょうせん）：thử thách； 風潮（ふうちょう）：xu hướng, trào lưu； 恥ずかしい（はずかしい）：xấu hổ； 提案（ていあん）：đề xuất； 損失（そんしつ）：tổn thất； 過程（かてい）：quá trình； 工夫（くふう）：tìm cách, sáng tạo； 立ち直る（たちなおる）：vượt qua, đứng dậy trở lại； 責める（せめる）：trách móc； 見守る（みまもる）：dõi theo, quan tâm"
  }
 ],
 "info": [
  {
   "tpl": "<b>A ジムのお知らせ</b><br>下の表を見て、クラスを選んでください。<br><table class=\"jl-tbl\"><tr><th>クラス</th><th>曜日</th><th>時間</th><th>場所</th></tr><tr><td>ヨガ</td><td>火曜日と金曜日</td><td>10時〜11時</td><td>2階スタジオ</td></tr><tr><td>水泳</td><td>水曜日と土曜日</td><td>14時〜15時</td><td>プール</td></tr><tr><td>エアロビクス</td><td>月曜日と木曜日</td><td>19時〜20時</td><td>2階スタジオ</td></tr></table><b>B カレンダー（11月）</b><br><table class=\"jl-cal\"><tr><th>月</th><th>火</th><th>水</th><th>木</th><th>金</th><th>土</th><th>日</th></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td><td>1</td></tr><tr><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td></tr><tr><td>9</td><td>10</td><td>11</td><td>12</td><td>13</td><td>14</td><td>15</td></tr><tr><td>16</td><td>17</td><td>18</td><td>19</td><td>20</td><td>21</td><td>22</td></tr><tr><td>23</td><td>24</td><td>25</td><td>26</td><td>27</td><td>28</td><td>29</td></tr><tr><td>30</td><td></td><td></td><td></td><td></td><td></td><td></td></tr></table>",
   "inst": "つぎのA「ジムのお知らせ」とBのカレンダーを見て、質問に答えてください。答えは1・2・3・4から、いちばんいいものを一つえらんでください。",
   "q": "今日は6日（金曜日）です。来週の火曜日にヨガを受けたいです。何日の何時に、どこへ行きますか。",
   "opts": [
    "3日の10時に2階スタジオ",
    "10日の10時に2階スタジオ",
    "10日の19時に2階スタジオ",
    "10日の10時にプール"
   ],
   "ans": 1,
   "exp": "Lớp yoga học vào thứ Ba và thứ Sáu, 10 giờ đến 11 giờ, tại studio tầng 2. Hôm nay là thứ Sáu ngày 6, nên thứ Ba tuần sau là ngày 10. Tra lịch sẽ thấy thứ Ba tuần này là ngày 3 (đã qua), thứ Ba tuần sau là ngày 10. 19 giờ là giờ của lớp aerobic, hồ bơi là nơi học bơi nên sai.",
   "voc": "ジム：phòng tập gym； ヨガ：yoga； 水泳（すいえい）：bơi lội； エアロビクス：aerobic； スタジオ：phòng tập (studio)"
  },
  {
   "tpl": "<b>A 料理教室のご案内</b><br>下の表を見て、コースを選んでください。<br><table class=\"jl-tbl\"><tr><th>コース</th><th>曜日</th><th>時間</th><th>料金</th></tr><tr><td>和食コース</td><td>土曜日</td><td>10時〜12時</td><td>3000円</td></tr><tr><td>洋食コース</td><td>日曜日</td><td>13時〜15時</td><td>3500円</td></tr><tr><td>パンコース</td><td>水曜日</td><td>18時〜20時</td><td>2500円</td></tr></table><b>B カレンダー（11月）</b><br><table class=\"jl-cal\"><tr><th>月</th><th>火</th><th>水</th><th>木</th><th>金</th><th>土</th><th>日</th></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td><td>1</td></tr><tr><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td></tr><tr><td>9</td><td>10</td><td>11</td><td>12</td><td>13</td><td>14</td><td>15</td></tr><tr><td>16</td><td>17</td><td>18</td><td>19</td><td>20</td><td>21</td><td>22</td></tr><tr><td>23</td><td>24</td><td>25</td><td>26</td><td>27</td><td>28</td><td>29</td></tr><tr><td>30</td><td></td><td></td><td></td><td></td><td></td><td></td></tr></table>",
   "inst": "つぎのA「料理教室のご案内」とBのカレンダーを見て、質問に答えてください。答えは1・2・3・4から、いちばんいいものを一つえらんでください。",
   "q": "今日は6日（金曜日）です。来週の日曜日に洋食コースを受けたいです。何日の何時からで、いくらですか。",
   "opts": [
    "8日の13時から3500円",
    "15日の10時から3500円",
    "15日の13時から3500円",
    "15日の13時から3000円"
   ],
   "ans": 2,
   "exp": "Khóa món Tây học vào Chủ nhật, 13 giờ đến 15 giờ, học phí 3500 yên. Hôm nay là thứ Sáu ngày 6, nên Chủ nhật tuần sau là ngày 15. Tra lịch sẽ thấy Chủ nhật tuần này là ngày 8, Chủ nhật tuần sau là ngày 15. 10 giờ là giờ của khóa món Nhật, 3000 yên là học phí khóa món Nhật nên sai.",
   "voc": "料理教室（りょうりきょうしつ）：lớp học nấu ăn； 和食（わしょく）：món ăn Nhật； 洋食（ようしょく）：món ăn phương Tây； 料金（りょうきん）：phí, giá tiền"
  }
 ]
};

/* ----- Test 4 ----- */
window.WRITTEN_N1_SET4 = {
  yomi: [
  {
    "s": "彼 は 将来 の 経済 に ついて 深い 憂慮 を 抱いて いる。",
    "t": "憂慮",
    "r": "ゆうりょ",
    "w": ["ゆうりょう", "うりょ", "ゆうりょく"],
    "exp": "憂慮 đọc là ゆうりょ（憂 ゆう、慮 りょ）nghĩa là lo lắng, ưu tư. ゆうりょう đọc 慮 thành りょう là sai; うりょ thiếu âm ゆう ở đầu nên sai; ゆうりょく đọc 慮 thành りょく là sai.",
    "voc": "憂慮（ゆうりょ）：lo lắng, ưu tư； 将来（しょうらい）：tương lai； 経済（けいざい）：kinh tế； 抱く（いだく）：mang trong lòng, ôm ấp"
  },
  {
    "s": "彼 は 留学 する か どう か、 長い 間 躊躇 して いた。",
    "t": "躊躇",
    "r": "ちゅうちょ",
    "w": ["ちゅうちょう", "ゆうちょ", "ちゅうしょ"],
    "exp": "躊躇 đọc là ちゅうちょ（躊 ちゅう、躇 ちょ）nghĩa là do dự, chần chừ. ちゅうちょう thêm âm う thừa nên sai; ゆうちょ đọc 躊 thành ゆう là sai; ちゅうしょ đọc 躇 thành しょ là sai.",
    "voc": "躊躇（ちゅうちょ）：do dự, chần chừ； 留学（りゅうがく）：du học； 長い間（ながいあいだ）：trong thời gian dài"
  },
  {
    "s": "新製品 の 性能 は、 従来 の 製品 を はるかに 凌駕 して いる。",
    "t": "凌駕",
    "r": "りょうが",
    "w": ["りょうか", "りょうげ", "りょうがく"],
    "exp": "凌駕 đọc là りょうが（凌 りょう、駕 が）nghĩa là vượt xa, vượt trội. りょうか đọc 駕 thành か là sai; りょうげ đọc 駕 thành げ là sai; りょうがく thêm âm く thừa nên sai.",
    "voc": "凌駕（りょうが）：vượt xa, vượt trội； 性能（せいのう）：tính năng, hiệu suất； 従来（じゅうらい）：từ trước tới nay； はるかに：hơn hẳn, vượt xa"
  },
  {
    "s": "この 地域 で は、 人口 の 減少 が 顕著 に なって いる。",
    "t": "顕著",
    "r": "けんちょ",
    "w": ["けんちょう", "けんしょ", "けんちょく"],
    "exp": "顕著 đọc là けんちょ（顕 けん、著 ちょ）nghĩa là rõ rệt, nổi bật. けんちょう đọc 著 thành ちょう là sai; けんしょ đọc 顕 thành けん và 著 thành しょ là sai; けんちょく thêm âm く thừa nên sai.",
    "voc": "顕著（けんちょ）：rõ rệt, nổi bật； 人口（じんこう）：dân số； 減少（げんしょう）：giảm, sự giảm sút； 地域（ちいき）：khu vực, địa phương"
  },
  {
    "s": "上司 の 指示 が 曖昧 で、 何 を すれ ば いい の か 分からなかった。",
    "t": "曖昧",
    "r": "あいまい",
    "w": ["あいまえ", "あいまいり", "あまい"],
    "exp": "曖昧 đọc là あいまい（曖 あい、昧 まい）nghĩa là mơ hồ, không rõ ràng. あいまえ đọc 昧 thành まえ là sai; あいまいり thêm âm り thừa nên sai; あまい là cách đọc của 甘い（ngọt）chứ không phải của 曖昧 nên sai.",
    "voc": "曖昧（あいまい）：mơ hồ, không rõ ràng； 上司（じょうし）：cấp trên, sếp； 指示（しじ）：chỉ thị, hướng dẫn； 分かる（わかる）：hiểu"
  },
  {
    "s": "雨 の 日 が 続く と、 憂鬱 な 気分 に なる こと が ある。",
    "t": "憂鬱",
    "r": "ゆううつ",
    "w": ["ゆううっ", "ゆううつう", "ゆういつ"],
    "exp": "憂鬱 đọc là ゆううつ（憂 ゆう、鬱 うつ）nghĩa là u uất, buồn bã. ゆううっ đọc 鬱 thành うっ là sai; ゆううつう thêm âm う thừa nên sai; ゆういつ đọc 鬱 thành いつ là sai.",
    "voc": "憂鬱（ゆううつ）：u uất, buồn bã, chán nản； 気分（きぶん）：tâm trạng； 続く（つづく）：tiếp tục, kéo dài"
  }
  ],
  ctx: [
  {
    "s": "この 計画 は、 予算 の 不足 の ため、 （　）せざる を 得なかった。",
    "a": "断念",
    "w": ["実行", "推進", "継続"],
    "exp": "Vì thiếu ngân sách nên đành phải từ bỏ kế hoạch: 断念せざるを得なかった（buộc phải từ bỏ）. 実行（thực hiện）ngược nghĩa với ngữ cảnh thiếu ngân sách; 推進（thúc đẩy）và 継続（tiếp tục）cũng ngược với việc buộc phải dừng lại nên đều sai.",
    "voc": "断念（だんねん）：từ bỏ, đoạn tuyệt； 計画（けいかく）：kế hoạch； 予算（よさん）：ngân sách； 不足（ふそく）：thiếu hụt"
  },
  {
    "s": "彼女 の 説明 は 分かりやすく、 聴衆 は 皆 （　）した。",
    "a": "納得",
    "w": ["反発", "困惑", "失望"],
    "exp": "Giải thích dễ hiểu nên mọi người trong khán phòng đều hiểu và chấp nhận: 納得した（thấu hiểu, tâm phục）. 反発（phản đối）ngược nghĩa; 困惑（bối rối）và 失望（thất vọng）đều không hợp với lời giải thích dễ hiểu nên sai.",
    "voc": "納得（なっとく）：thấu hiểu, tâm phục, chấp nhận； 説明（せつめい）：giải thích； 聴衆（ちょうしゅう）：khán thính giả； 分かりやすい（わかりやすい）：dễ hiểu"
  },
  {
    "s": "社員 たち は プロジェクト の 成功 の ため に （　）した。",
    "a": "尽力",
    "w": ["反発", "妨害", "放置"],
    "exp": "Vì sự thành công của dự án nên các nhân viên đã dốc hết sức: 尽力した（nỗ lực hết mình）. 反発した（phản đối）、妨害した（cản trở）、放置した（bỏ mặc）đều ngược với mục đích làm cho dự án thành công nên sai.",
    "voc": "尽力（じんりょく）：dốc sức, nỗ lực hết mình； 社員（しゃいん）：nhân viên； 成功（せいこう）：thành công； プロジェクト：dự án"
  },
  {
    "s": "両社 は 長い 交渉 の 末、 条件 に ついて （　）した。",
    "a": "妥協",
    "w": ["決裂", "中止", "放棄"],
    "exp": "Sau thời gian đàm phán dài, hai công ty đã nhượng bộ nhau về điều kiện: 妥協した（thỏa hiệp, nhượng bộ）. 決裂（đổ vỡ）thường đi với 交渉が決裂する nên 条件について決裂した là sai cách dùng; 中止（dừng lại）và 放棄（từ bỏ）đều không hợp với 条件について trong ngữ cảnh này nên sai.",
    "voc": "妥協（だきょう）：thỏa hiệp, nhượng bộ； 交渉（こうしょう）：đàm phán； 条件（じょうけん）：điều kiện； 両社（りょうしゃ）：hai công ty"
  },
  {
    "s": "政府 は 規制 を （　）し、 企業 の 参入 を 促した。",
    "a": "緩和",
    "w": ["強化", "厳格化", "延長"],
    "exp": "Chính phủ đã nới lỏng quy định để khuyến khích doanh nghiệp tham gia: 緩和し（nới lỏng）. 強化（tăng cường）và 厳格化（siết chặt）đều ngược với việc thúc đẩy tham gia nên sai; 延長（kéo dài）cũng không hợp với mục đích khuyến khích tham gia nên sai.",
    "voc": "緩和（かんわ）：nới lỏng； 規制（きせい）：quy định, quy chế； 参入（さんにゅう）：tham gia (thị trường)； 促す（うながす）：thúc đẩy, khuyến khích"
  },
  {
    "s": "専門家 は、 人口 減少 が 経済 に 与える 影響 を （　）して いる。",
    "a": "危惧",
    "w": ["歓迎", "期待", "称賛"],
    "exp": "Các chuyên gia đang lo ngại về ảnh hưởng của việc giảm dân số đối với kinh tế: 危惧している（lo ngại）. 歓迎している（hoan nghênh）、期待している（mong đợi）、称賛している（ca ngợi）đều mang nghĩa tích cực, ngược với ngữ cảnh tác động tiêu cực của giảm dân số nên sai.",
    "voc": "危惧（きぐ）：lo ngại, e ngại； 専門家（せんもんか）：chuyên gia； 人口減少（じんこうげんしょう）：giảm dân số； 影響（えいきょう）：ảnh hưởng"
  },
  {
    "s": "正解 が 一つ に 定まらない ため、 研究者 たち は 手探り で 解決策 を （　）して いる。",
    "a": "模索",
    "w": ["決定", "採用", "実行"],
    "exp": "Vì chưa có đáp án duy nhất nên các nhà nghiên cứu đang mò mẫm tìm giải pháp: 模索している（mò mẫm tìm kiếm）. 手探りで（mò mẫm）đi với 模索 là cách kết hợp tự nhiên; 決定している（đang quyết định）、採用している（đang áp dụng）、実行している（đang thực hiện）đều không hợp với 手探りで vì chúng chỉ hành động đã xác định, không phải đang tìm kiếm nên sai.",
    "voc": "模索（もさく）：mò mẫm tìm kiếm； 手探り（てさぐり）：mò mẫm； 解決策（かいけつさく）：giải pháp； 研究者（けんきゅうしゃ）：nhà nghiên cứu"
  }
  ],
  syn: [
  {
    "s": "技術 は 急速 に 進歩 して いる。",
    "t": "急速",
    "a": "はやい",
    "w": ["おそい", "ゆっくり", "おだやか"],
    "exp": "急速 nghĩa là nhanh chóng, cấp tốc, gần nghĩa nhất với はやい（nhanh）. おそい（chậm）ngược nghĩa; ゆっくり（chậm rãi）ngược nghĩa; おだやか（hiền hòa, êm đềm）không liên quan tới tốc độ nên sai.",
    "voc": "急速（きゅうそく）：nhanh chóng, cấp tốc； 技術（ぎじゅつ）：kỹ thuật, công nghệ； 進歩（しんぽ）：tiến bộ"
  },
  {
    "s": "彼 は 頻繁 に 図書館 へ 通って いる。",
    "t": "頻繁",
    "a": "しばしば",
    "w": ["たまに", "めったに", "まれに"],
    "exp": "頻繁 nghĩa là thường xuyên, gần nghĩa nhất với しばしば（thường xuyên, luôn luôn）. たまに（thỉnh thoảng）、めったに（hiếm khi）、まれに（hiếm khi）đều chỉ tần suất thấp, ngược nghĩa nên sai.",
    "voc": "頻繁（ひんぱん）：thường xuyên； 図書館（としょかん）：thư viện； 通う（かよう）：đi lại thường xuyên"
  },
  {
    "s": "事故 の 後、 迅速 な 対応 が 求められた。",
    "t": "迅速",
    "a": "すばやい",
    "w": ["おそい", "のろい", "ゆっくりした"],
    "exp": "迅速 nghĩa là nhanh chóng, mau lẹ, gần nghĩa nhất với すばやい（nhanh nhẹn）. おそい（chậm）、のろい（chậm chạp）、ゆっくりした（chậm rãi）đều ngược nghĩa nên sai.",
    "voc": "迅速（じんそく）：nhanh chóng, mau lẹ； 対応（たいおう）：ứng phó, đối ứng； 事故（じこ）：tai nạn； 求める（もとめる）：đòi hỏi, yêu cầu"
  },
  {
    "s": "住民 の 間 に は、 工事 に よる 騒音 へ の 懸念 が 広がって いる。",
    "t": "懸念",
    "a": "しんぱい",
    "w": ["あんしん", "よろこび", "まんぞく"],
    "exp": "懸念 nghĩa là lo ngại, gần nghĩa nhất với しんぱい（lo lắng）. あんしん（yên tâm）ngược nghĩa; よろこび（niềm vui）và まんぞく（hài lòng）đều mang nghĩa tích cực, ngược với lo ngại về tiếng ồn nên sai.",
    "voc": "懸念（けねん）：lo ngại； 住民（じゅうみん）：cư dân； 工事（こうじ）：công trình, thi công； 騒音（そうおん）：tiếng ồn"
  },
  {
    "s": "彼 は 慎重 な 性格 で、 決して 軽はずみ な 判断 を しない。",
    "t": "慎重",
    "a": "ちゅういぶかい",
    "w": ["おおざっぱな", "いいかげんな", "むぼうな"],
    "exp": "慎重 nghĩa là thận trọng, cẩn thận, gần nghĩa nhất với ちゅういぶかい（cẩn trọng, chú ý kỹ）. おおざっぱな（cẩu thả, đại khái）、いいかげんな（qua loa）、むぼうな（liều lĩnh）đều ngược nghĩa nên sai.",
    "voc": "慎重（しんちょう）：thận trọng； 性格（せいかく）：tính cách； 軽はずみ（かるはずみ）：hấp tấp, khinh suất； 判断（はんだん）：phán đoán, quyết định"
  },
  {
    "s": "規則 は 明確 に 書かれて いる。",
    "t": "明確",
    "a": "はっきり",
    "w": ["あいまいに", "ぼんやり", "いいかげんに"],
    "exp": "明確 nghĩa là rõ ràng, minh bạch, gần nghĩa nhất với はっきり（rõ ràng）. あいまいに（mơ hồ）ngược nghĩa; ぼんやり（mờ mịt）và いいかげんに（qua loa）đều không hợp với cách viết quy định nên sai.",
    "voc": "明確（めいかく）：rõ ràng, minh bạch； 規則（きそく）：quy định, quy tắc； 書く（かく）：viết"
  }
  ],
  yoho: [
  {
    "t": "的確",
    "s": [
     "この 服 は 的確 な 色 です。",
     "彼 は 的確 な 夢 を 見た。",
     "彼 は 的確 な 判断 を 下した。",
     "彼女 は 的確 な 歌 を 歌った。"
    ],
    "a": 2,
    "exp": "Đáp án đúng là câu 3: 的確な判断を下した（đưa ra phán đoán chính xác）. 的確 chỉ dùng cho phán đoán, chỉ trích, nhận xét chính xác, trúng đích. Câu 1: 的確な色 là sai vì màu sắc không dùng 的確; câu 2: 的確な夢 là sai vì giấc mơ không dùng 的確; câu 4: 的確な歌 là sai vì bài hát không dùng 的確.",
    "voc": "的確（てきかく）：chính xác, đúng đắn； 判断（はんだん）：phán đoán； 下す（くだす）：đưa ra (phán đoán)； 夢（ゆめ）：giấc mơ"
  },
  {
    "t": "あえて",
    "s": [
     "あえて彼は背が高い。",
     "あえて言えば、この計画には無理がある。",
     "あえて明日は晴れるだろう。",
     "あえて水が冷たかった。"
    ],
    "a": 1,
    "exp": "Đáp án đúng là câu 2: あえて言えば（dám nói rằng, cố ý nói ra）— あえて dùng khi cố ý làm một việc khó nói hoặc khác thường, đi với hành động có chủ ý. Câu 1: あえて彼は背が高い là sai vì chiều cao là trạng thái, không phải hành động có chủ ý; câu 3: あえて明日は晴れるだろう là sai vì dự đoán thời tiết không phải hành động có chủ ý; câu 4: あえて水が冷たかった là sai vì nước lạnh là trạng thái, không phải hành động có chủ ý.",
    "voc": "あえて：dám, cố ý (làm việc khó)； 計画（けいかく）：kế hoạch； 無理（むり）：vô lý, quá sức； 晴れる（はれる）：trời nắng, quang đãng"
  },
  {
    "t": "わずか",
    "s": [
     "わずか大きい家に住んでいる。",
     "わずか走って学校へ行った。",
     "わずか3人しか集まらなかった。",
     "わずかおいしい料理だった。"
    ],
    "a": 2,
    "exp": "Đáp án đúng là câu 3: わずか3人しか集まらなかった（chỉ có vỏn vẹn 3 người tới）— わずか dùng với số lượng nhỏ, nhấn mạnh sự ít ỏi. Câu 1: わずか大きい là sai vì わずか không bổ nghĩa cho tính từ 大きい; câu 2: わずか走って là sai vì わずか không bổ nghĩa cho động từ 走る; câu 4: わずかおいしい là sai vì わずか không bổ nghĩa cho tính từ おいしい.",
    "voc": "わずか：chỉ vỏn vẹn, chỉ có; 集まる（あつまる）：tập hợp, tụ tập； しか〜ない：chỉ… mà thôi"
  },
  {
    "t": "たちまち",
    "s": [
     "うわさはたちまち広がった。",
     "たちまち暑い日が続いた。",
     "たちまち本を読んだ。",
     "たちまち静かな部屋にいた。"
    ],
    "a": 0,
    "exp": "Đáp án đúng là câu 1: うわさはたちまち広がった（tin đồn lan ra trong chốc lát）— たちまち chỉ sự thay đổi xảy ra ngay lập tức. Câu 2: たちまち暑い日が続いた là sai vì たちまち không dùng với trạng thái kéo dài 続いた; câu 3: たちまち本を読んだ là sai vì たちまち không dùng với hành động đọc sách thông thường; câu 4: たちまち静かな部屋にいた là sai vì たちまち không dùng với trạng thái ở yên trong phòng.",
    "voc": "たちまち：ngay lập tức, trong chốc lát； うわさ：tin đồn； 広がる（ひろがる）：lan rộng； 続く（つづく）：tiếp tục"
  },
  {
    "t": "きっぱり",
    "s": [
     "きっぱりと暑くなった。",
     "きっぱりと走った。",
     "きっぱりと雨が降った。",
     "彼はきっぱりと断った。"
    ],
    "a": 3,
    "exp": "Đáp án đúng là câu 4: 彼はきっぱりと断った（anh ấy đã từ chối dứt khoát）— きっぱりと dùng với hành động từ chối, trả lời một cách dứt khoát, rõ ràng. Câu 1: きっぱりと暑くなった là sai vì thời tiết nóng lên không phải hành động dứt khoát; câu 2: きっぱりと走った là sai vì chạy không đi với きっぱりと; câu 3: きっぱりと雨が降った là sai vì mưa rơi là hiện tượng tự nhiên, không phải hành động có chủ ý.",
    "voc": "きっぱりと：dứt khoát, rõ ràng； 断る（ことわる）：từ chối； 暑い（あつい）：nóng； 降る（ふる）：rơi (mưa)"
  },
  {
    "t": "せめて",
    "s": [
     "せめて彼は背が高い。",
     "せめて名前だけでも覚えてください。",
     "せめて明日は晴れるだろう。",
     "せめて走って学校へ行った。"
    ],
    "a": 1,
    "exp": "Đáp án đúng là câu 2: せめて名前だけでも覚えてください（ít nhất hãy nhớ mỗi cái tên thôi）— せめて dùng khi đưa ra yêu cầu tối thiểu, nhượng bộ. Câu 1: せめて彼は背が高い là sai vì chiều cao là trạng thái, không phải điều có thể yêu cầu tối thiểu; câu 3: せめて明日は晴れるだろう là sai vì dự đoán thời tiết không phải yêu cầu nhượng bộ; câu 4: せめて走って学校へ行った là sai vì せめて không dùng với hành động đã xảy ra trong quá khứ như vậy.",
    "voc": "せめて：ít nhất, tối thiểu； 名前（なまえ）：tên； 覚える（おぼえる）：nhớ； だけでも：ít nhất cũng"
  }
  ],
  g1dlg: [
  {
    "d": ["社長 は 会議室 に 入る と、 すぐ 何 を しました か。", "入る（　）、 話し始めました。"],
    "a": "や否や",
    "w": ["が最後", "に至って", "ともなると"],
    "p": "〜や否や",
    "exp": "Vừa bước vào là bắt đầu nói ngay: 入るや否や（vừa… là ngay lập tức…）đi sau dạng từ điển của động từ. 入るが最後 mang nghĩa một khi đã vào thì không quay lại được, không hợp với việc bắt đầu nói; 入るに至って và 入るともなると đều sai ngữ pháp sau 入る trong ngữ cảnh này.",
    "voc": "や否や（やいなや）：vừa… là ngay…； 会議室（かいぎしつ）：phòng họp； 話し始める（はなしはじめる）：bắt đầu nói"
  },
  {
    "d": ["日本 に 来て から、 生活 は どう 変わりました か。", "日本 に 来て（　）、 毎日 日本語 で 話す よう に なりました。"],
    "a": "からというもの",
    "w": ["ては", "なり", "そばから"],
    "p": "〜てからというもの",
    "exp": "Từ khi sang Nhật tới nay, ngày nào cũng nói tiếng Nhật: 来てからというもの（từ khi… tới nay）. 来てては、来てなり、来てそばから đều sai dạng nối sau V-て 来て; そばから phải đi sau V-た（来たそばから）chứ không phải 来てそばから.",
    "voc": "〜てからというもの：từ khi… tới nay； 毎日（まいにち）：mỗi ngày； 日本語（にほんご）：tiếng Nhật； 話す（はなす）：nói"
  },
  {
    "d": ["あの 店 は どう なった の です か。", "先月（　）、 閉店 した そう です。"],
    "a": "を限りに",
    "w": ["に先駆けて", "に至って", "に免じて"],
    "p": "N を限りに",
    "exp": "Lấy cuối tháng trước làm mốc cuối cùng rồi đóng cửa: 先月を限りに（lấy… làm mốc cuối cùng）. 先月に先駆けて（đi trước…）không hợp với việc đóng cửa; 先月に至って và 先月に免じて đều sai ngữ pháp và sai nghĩa trong ngữ cảnh này.",
    "voc": "を限りに：lấy… làm mốc cuối cùng； 先月（せんげつ）：tháng trước； 閉店（へいてん）：đóng cửa (cửa hàng)； 店（みせ）：cửa hàng"
  }
  ],
  g1: [
  {
    "s": "ベル が 鳴る（　）、 生徒 たち は 立ち上がった。",
    "a": "なり",
    "w": ["そばから", "が最後", "ては"],
    "p": "V-る なり",
    "exp": "Chuông vừa reo là học sinh đứng dậy ngay: 鳴るなり（vừa… là ngay…). 鳴るそばから là sai vì そばから phải đi sau V-た（鳴ったそばから）; 鳴るが最後 mang nghĩa một khi đã reo thì không quay lại được, không hợp; 鳴るては sai ngữ pháp sau dạng từ điển.",
    "voc": "なり：vừa… là ngay…； ベル：chuông； 鳴る（なる）：reo, kêu； 立ち上がる（たちあがる）：đứng dậy； 生徒（せいと）：học sinh"
  },
  {
    "s": "新型 の 製品 は、 他社（　）発売 された。",
    "a": "に先駆けて",
    "w": ["を限りに", "に至って", "を境に"],
    "p": "〜に先駆けて",
    "exp": "Sản phẩm mới được bán ra trước các công ty khác: 他社に先駆けて（đi trước, nhanh hơn…). 他社を限りに（lấy công ty khác làm mốc cuối）sai nghĩa; 他社に至って và 他社を境に đều sai ngữ pháp sau 他社 trong ngữ cảnh này.",
    "voc": "に先駆けて（にさきがけて）：đi trước, nhanh hơn…； 新型（しんがた）：mẫu mới； 製品（せいひん）：sản phẩm； 発売（はつばい）：phát hành, bán ra"
  },
  {
    "s": "食事 を 始めよう と した（　）、 電話 が 鳴った。",
    "a": "矢先に",
    "w": ["や否や", "なり", "そばから"],
    "p": "〜矢先に",
    "exp": "Đúng lúc định bắt đầu ăn thì điện thoại reo: 食事を始めようとした矢先に（đúng ngay lúc sắp… thì…). や否や và なり phải đi sau dạng từ điển V-る nên 始めようとしたや否や／なり là sai dạng; そばから phải đi sau V-た đơn thuần（始めたそばから）nên 始めようとしたそばから là sai.",
    "voc": "矢先に（やさきに）：đúng ngay lúc sắp… thì…； 食事（しょくじ）：bữa ăn； 始める（はじめる）：bắt đầu； 電話（でんわ）：điện thoại； 鳴る（なる）：reo, kêu"
  },
  {
    "s": "結果（　）、 計画 を 変更 しなければ ならない かも しれない。",
    "a": "いかんでは",
    "w": ["あっての", "こととて", "手前"],
    "p": "N + いかんでは",
    "exp": "Tùy theo kết quả mà có thể phải thay đổi kế hoạch: 結果いかんでは（tùy theo…). 結果あっての cần có danh từ sau nó（NあってのN）nên sai ở đây; 結果こととて là sai vì こととて đi sau mệnh đề, không đi sau danh từ 結果; 結果手前 cũng sai ngữ pháp và sai nghĩa.",
    "voc": "いかんでは：tùy theo…； 結果（けっか）：kết quả； 変更（へんこう）：thay đổi； 計画（けいかく）：kế hoạch"
  },
  {
    "s": "天気 が 悪い（　）、 頭 が 痛い。",
    "a": "せいか",
    "w": ["がもとで", "に起因する", "に由来する"],
    "p": "〜せいか",
    "exp": "Có lẽ vì thời tiết xấu nên đau đầu: 天気が悪いせいか（có lẽ vì…). がもとで phải đi sau danh từ（Nがもとで）nên 天気が悪いがもとで là sai dạng; に起因する và に由来する cũng cần danh từ đứng trước kèm theo こと, không nối trực tiếp sau mệnh đề 天気が悪い trong câu này nên sai.",
    "voc": "せいか：có lẽ vì…； 天気（てんき）：thời tiết； 頭が痛い（あたまがいたい）：đau đầu； 悪い（わるい）：xấu"
  },
  {
    "s": "彼 は 大雨（　）、 山道 を 歩き続けた。",
    "a": "をものともせず",
    "w": ["にひきかえ", "に反して", "とは裏腹に"],
    "p": "N + をものともせず（に）",
    "exp": "Anh ấy chẳng màng mưa lớn, cứ đi tiếp trên đường núi: 大雨をものともせず（không màng tới…). 大雨にひきかえ cần có đối tượng để đối chiếu nên sai; 大雨に反して và 大雨とは裏腹に đều mang nghĩa trái ngược, không hợp với việc bất chấp mưa mà đi tiếp nên sai.",
    "voc": "をものともせず：chẳng màng tới…； 大雨（おおあめ）：mưa lớn； 山道（やまみち）：đường núi； 歩き続ける（あるきつづける）：đi tiếp"
  },
  {
    "s": "合格 した（　）、 合格者 の 一覧 に 名前 が なかった。",
    "a": "と思いきや",
    "w": ["にもほどがある", "ばかりか", "にひきかえ"],
    "p": "〜と思いきや",
    "exp": "Cứ tưởng là đã đỗ, ai ngờ trong danh sách người đỗ lại không có tên: 合格したと思いきや（cứ tưởng… ai ngờ…). 合格したにもほどがある、合格したばかりか、合格したにひきかえ đều sai ngữ pháp và sai nghĩa sau 合格した trong ngữ cảnh này.",
    "voc": "と思いきや：cứ tưởng… ai ngờ…； 合格（ごうかく）：đỗ, đạt； 一覧（いちらん）：danh sách； 名前（なまえ）：tên"
  }
  ],
  star: [
  {
    "pre": "",
    "post": "。",
    "chunks": ["留学してからというもの", "毎日", "図書館で", "勉強している"],
    "p": "〜てからというもの",
    "exp": "Thứ tự đúng: 留学してからというもの（từ khi đi du học tới nay）+ 毎日（mỗi ngày）+ 図書館で（ở thư viện）+ 勉強している（đang học）. 〜てからというもの phải đứng đầu câu sau mệnh đề V-て; 毎日 là trạng từ chỉ tần suất đứng trước cụm địa điểm; động từ 勉強している đứng cuối câu.",
    "voc": "留学（りゅうがく）：du học； 図書館（としょかん）：thư viện； 毎日（まいにち）：mỗi ngày； 勉強（べんきょう）：học tập"
  },
  {
    "pre": "",
    "post": "。",
    "chunks": ["地震を受けて", "市は", "避難所を", "開設した"],
    "p": "N + を受けて",
    "exp": "Thứ tự đúng: 地震を受けて（do động đất）+ 市は（thành phố）+ 避難所を（nơi sơ tán）+ 開設した（đã mở）. を受けて phải đứng ngay sau danh từ nguyên nhân 地震; 市は là chủ ngữ; 避難所を là tân ngữ của 開設した nên phải đứng ngay trước động từ.",
    "voc": "地震（じしん）：động đất； 受ける（うける）：chịu, nhận； 避難所（ひなんじょ）：nơi sơ tán； 開設（かいせつ）：mở, thành lập"
  },
  {
    "pre": "試験の前は、",
    "post": "。",
    "chunks": ["早めに", "準備を始める", "に越したことは", "ない"],
    "p": "〜に越したことはない",
    "exp": "Thứ tự đúng: 早めに（sớm）+ 準備を始める（bắt đầu chuẩn bị）+ に越したことはない（thì tốt hơn hết）. に越したことはない phải đứng ngay sau động từ dạng từ điển 始める; 早めに là trạng từ bổ nghĩa cho 始める nên đứng trước cụm động từ; ない là phần cuối của mẫu câu cố định に越したことはない.",
    "voc": "試験（しけん）：kì thi； 早めに（はやめに）：sớm； 準備（じゅんび）：chuẩn bị； 始める（はじめる）：bắt đầu"
  },
  {
    "pre": "",
    "post": "。",
    "chunks": ["苦労して", "こそ", "分かる", "喜びがある"],
    "p": "V-て こそ",
    "exp": "Thứ tự đúng: 苦労して（đã vất vả）+ こそ（chính）+ 分かる（mới hiểu）+ 喜びがある（có niềm vui）. こそ phải đứng ngay sau V-て 苦労して; 分かる là động từ chính của mệnh đề quan hệ bổ nghĩa cho 喜び; 喜びがある đứng cuối câu.",
    "voc": "苦労（くろう）：vất vả, gian khổ； 分かる（わかる）：hiểu； 喜び（よろこび）：niềm vui"
  },
  {
    "pre": "あの作家の",
    "post": "。",
    "chunks": ["名前", "すら", "知らない", "人が多い"],
    "p": "N + すら",
    "exp": "Thứ tự đúng: 名前（tên）+ すら（ngay cả）+ 知らない（không biết）+ 人が多い（nhiều người）. すら phải đứng ngay sau danh từ 名前 để nhấn mạnh ngay cả cái tên; 知らない bổ nghĩa cho 人; 人が多い đứng cuối câu.",
    "voc": "作家（さっか）：nhà văn； 名前（なまえ）：tên； すら：ngay cả…； 知る（しる）：biết"
  }
  ],
  bunsho: [
  {
    "intro": "つぎの 文章は テレワーク について 書かれた 文章です。",
    "p": "近年、 テレワーク が 急速 に 広がった。（　1　）通勤 時間 が 減り、 自分 の 時間 が 増えた と 喜ぶ 人 が 多い。（　2　）、 在宅 で 働く 場合、 同僚 と の 意思疎通 が 難しくなる こと も ある。（　3　）、 オンライン 会議 で は 細かな 相談 が しにくい と いう 声 も 聞かれる。（　4　）、 多く の 企業 は 出社 と 在宅 を 組み合わせる 働き方 を 検討 し始めた。（　5　）、 働く 場所 の 自由度 が 高まる 一方 で、 働き方 そのもの を 見直す 必要 も 出てきて いる。",
    "b": [
      {
        "a": "その結果",
        "w": ["しかし", "一方で", "たとえば"]
      },
      {
        "a": "一方で",
        "w": ["そのため", "さらに", "つまり"]
      },
      {
        "a": "さらに",
        "w": ["しかし", "そのため", "つまり"]
      },
      {
        "a": "そのため",
        "w": ["たとえば", "一方で", "しかし"]
      },
      {
        "a": "つまり",
        "w": ["しかし", "一方で", "さらに"]
      }
    ],
    "exp": "(1) その結果: việc thời gian đi lại giảm là kết quả của việc telework lan rộng, nên その結果（do đó, kết quả là）đúng; しかし mang nghĩa đối lập, 一方で cần có mặt đối chiếu, たとえば chỉ nêu ví dụ nên đều sai. (2) 一方で: câu này nêu mặt trái của telework so với mặt tốt ở câu trước, nên 一方で（mặt khác）đúng; そのため chỉ nguyên nhân-kết quả, さらに chỉ bổ sung cùng chiều, つまり chỉ tóm tắt nên sai. (3) さらに: câu này bổ sung thêm một khó khăn cùng chiều với câu trước, nên さらに（hơn nữa）đúng; しかし mang nghĩa đối lập, そのため chỉ nguyên nhân-kết quả, つまり chỉ tóm tắt nên sai. (4) そのため: vì khó trao đổi nên các công ty bắt đầu xem xét cách làm việc kết hợp, nên そのため（vì vậy）đúng; 一方で và しかし mang nghĩa đối lập, たとえば chỉ nêu ví dụ nên sai. (5) つまり: câu cuối tóm tắt toàn bài — tự do tăng lên nhưng cũng cần xem lại cách làm việc — nên つまり（nói tóm lại）đúng; しかし mang nghĩa đối lập, 一方で và さらに không có chức năng tóm tắt nên sai.",
    "voc": "テレワーク：làm việc từ xa； 通勤時間（つうきんじかん）：thời gian đi làm； 在宅（ざいたく）：ở nhà； 意思疎通（いしそつう）：trao đổi, giao tiếp； 検討（けんとう）：xem xét； 自由度（じゆうど）：mức độ tự do； 見直す（みなおす）：xem xét lại"
  }
  ],
  readS: [
  {
    "p": "来月、 この 市 で マラソン 大会 が 開かれます。 コース は 市内 を 一周 する 四十二 キロ です。 参加 する 人 は、 事前 に 健康 診断 を 受ける 必要 が あります。 当日 の 参加 申し込み は できません。 参加者 は、 ゴール で 記念品 を もらえる そうです。",
    "q": "マラソン 大会 について、 正しい もの は どれ です か。",
    "o": [
     "当日 でも 申し込み が できる。",
     "健康 診断 を 受ける 必要 は ない。",
     "コース は 市外 を 走る。",
     "コース は 四十二 キロ です。"
    ],
    "a": 3,
    "e": "コースは市内を一周する42キロで、当日の申込はできない。",
    "exp": "Bằng chứng trong bài: 「コースは市内を一周する四十二キロです」nên đáp án 4 đúng. Đáp án 1 sai vì bài viết 「当日の参加申し込みはできません」; đáp án 2 sai vì bài viết 「事前に健康診断を受ける必要があります」; đáp án 3 sai vì khóa chạy trong thành phố（市内）chứ không phải ngoài thành phố（市外）.",
    "voc": "マラソン大会（マラソンたいかい）：giải chạy marathon； コース：lộ trình, đường chạy； 市内（しない）：trong thành phố； 健康診断（けんこうしんだん）：khám sức khỏe； 記念品（きねんひん）：quà lưu niệm"
  },
  {
    "p": "山田さんはスポーツジムに入会しました。入会金は3000円で、月会費は5000円です。山田さんは3か月間通う予定です。ジムは朝6時から夜11時まで開いています。土曜日と日曜日も開いていますが、祝日は休みです。山田さんは毎週3回通うつもりです。",
    "q": "山田さんが3か月間通うと、いくらかかりますか。",
    "o": ["15000円です。", "18000円です。", "21000円です。", "8000円です。"],
    "a": 1,
    "calc": 1,
    "e": "入会金は3000円で、月会費は5000円です。山田さんは3か月間通う予定です。3000+5000×3=18000円です。",
    "exp": "Tính tổng: phí nhập hội 3000円 + phí tháng 5000円 × 3 tháng = 3000 + 15000 = 18000円 nên đáp án 2 đúng. 15000円 là chỉ tính phí tháng 3 tháng mà quên phí nhập hội; 21000円 là tính thừa; 8000円 là chỉ tính 1 tháng（3000+5000）nên sai. Bằng chứng: 「入会金は3000円で、月会費は5000円です」「3か月間通う予定です」。",
    "voc": "スポーツジム：phòng tập thể dục； 入会金（にゅうかいきん）：phí nhập hội； 月会費（げつかいひ）：phí tháng； 祝日（しゅくじつ）：ngày lễ； 通う（かよう）：đi lại thường xuyên"
  },
  {
    "p": "来週の土曜日、市民会館で環境についての講演会が開かれます。講演は午後2時から4時までで、参加費は無料です。ただし、事前の申し込みが必要です。申し込みは電話かインターネットでできます。当日は、ペットボトルや缶を持ち込むことはできません。会場には駐車場がありませんので、公共交通機関でお越しください。",
    "q": "講演会について、正しいものはどれですか。",
    "o": ["参加費は500円です。", "当日の申し込みができます。", "駐車場があります。", "事前の申し込みが必要です。"],
    "a": 3,
    "e": "事前の申し込みが必要です。",
    "exp": "Bằng chứng trong bài: 「事前の申し込みが必要です」nên đáp án 4 đúng. Đáp án 1 sai vì bài viết 「参加費は無料です」; đáp án 2 sai vì cần đăng ký trước, không đăng ký trong ngày được; đáp án 3 sai vì bài viết 「会場には駐車場がありません」.",
    "voc": "市民会館（しみんかいかん）：nhà văn hóa thành phố； 講演会（こうえんかい）：buổi thuyết trình； 参加費（さんかひ）：phí tham gia； 無料（むりょう）：miễn phí； 申し込み（もうしこみ）：đăng ký； 駐車場（ちゅうしゃじょう）：bãi đỗ xe"
  },
  {
    "p": "田中さんは来月、北海道へ旅行に行きます。飛行機は朝8時に出発し、10時に到着します。ホテルは駅の近くに予約しました。1泊12000円で、朝食がついています。田中さんは2泊する予定です。北海道では、雪まつりを見たり、温泉に入ったりするつもりです。",
    "q": "田中さんの旅行について、正しいものはどれですか。",
    "o": ["飛行機は夜に出発します。", "ホテルは空港の近くです。", "2泊する予定です。", "朝食はついていません。"],
    "a": 2,
    "e": "田中さんは2泊する予定です。",
    "exp": "Bằng chứng trong bài: 「田中さんは2泊する予定です」nên đáp án 3 đúng. Đáp án 1 sai vì máy bay khởi hành lúc 8 giờ sáng（朝8時）; đáp án 2 sai vì khách sạn ở gần nhà ga（駅の近く）chứ không phải gần sân bay; đáp án 4 sai vì bài viết 「朝食がついています」.",
    "voc": "北海道（ほっかいどう）：Hokkaido； 飛行機（ひこうき）：máy bay； 出発（しゅっぱつ）：khởi hành； 到着（とうちゃく）：đến nơi； 予約（よやく）：đặt trước； 朝食（ちょうしょく）：bữa sáng； 温泉（おんせん）：suối nước nóng"
  }
  ],
  readM: [
  {
    "p": "近年、 都市 から 地方 へ 移住 する 人 が 増えて いる。 地方 で は、 家賃 が 安く、 自然 が 豊か で、 子育て しやすい 環境 が ある から だ。 また、 テレワーク の 広がり で、 地方 に 住みながら 都市 の 会社 で 働く こと も 可能 に なった。 しかし、 移住 に は 課題 も ある。 地方 で は、 仕事 の 数 が 少なく、 収入 が 減る 場合 も ある。 また、 交通 が 不便 で、 車 が ない と 生活 しにくい 地域 も 多い。 そのため、 移住 を 考える 人 は、 仕事 や 生活 の こと を 事前 に よく 調べる 必要 が ある。 地方移住 は、 生活 を 豊か に する 選択肢 の 一つ だが、 準備 を せず に 決める べき では ない のだ。 地方 に 移住 した 人 の 中 に は、 農業 を 始めたり、 小さな 店 を 開いたり する 人 も いる。 移住 を 支援 する ため、 自治体 が 家賃 の 補助 や 仕事 の 紹介 を 行って いる 場合 も ある。 移住 を 成功 させる ため に は、 地域 の 人々 と の つながり を 大切 に する こと も 欠かせない。",
    "qs": [
     {
      "q": "地方 へ 移住 する 人 が 増えて いる 理由 として、 本文 で 述べられて いる もの は どれ です か。",
      "o": [
       "家賃 が 安く、 自然 が 豊か で、 子育て しやすい こと。",
       "都市 より 仕事 が 多い こと。",
       "交通 が 便利 な こと。",
       "収入 が 必ず 増える こと。"
      ],
      "a": 0,
      "e": "家賃が安く、自然が豊かで、子育てしやすいことが理由として挙げられている。"
     },
     {
      "q": "移住 の 課題 として、 本文 で 述べられて いる もの は どれ です か。",
      "o": [
       "家賃 が 高く なる こと。",
       "自然 が 少ない こと。",
       "仕事 が 少なく、 収入 が 減る 場合 が ある こと。",
       "子育て が しにくい こと。"
      ],
      "a": 2,
      "e": "仕事が少なく収入が減る場合があることが課題として挙げられている。"
     },
     {
      "q": "筆者 の 考え に 合う もの は どれ です か。",
      "o": [
       "移住 は 誰 にでも 勧められる。",
       "移住 は 準備 を せず に 決める べき だ。",
       "移住 して も、 生活 は 変わらない。",
       "移住 は 生活 を 豊か に する 選択肢 だが、 事前 に よく 調べる 必要 が ある。"
      ],
      "a": 3,
      "e": "移住は生活を豊かにする選択肢だが、事前によく調べる必要があると述べられている。"
     }
    ],
    "exp": "Q1: bằng chứng 「家賃が安く、自然が豊かで、子育てしやすい環境がある」nên đáp án 1 đúng; việc làm nhiều hơn ở thành phố, giao thông tiện lợi, thu nhập chắc chắn tăng đều trái với bài. Q2: bằng chứng 「仕事の数が少なく、収入が減る場合もある」nên đáp án 3 đúng; tiền thuê đắt hơn, thiên nhiên ít, khó nuôi con đều không phải là khó khăn nêu trong bài. Q3: bằng chứng 「地方移住は、生活を豊かにする選択肢の一つだが、準備をせずに決めるべきではない」nên đáp án 4 đúng; khuyên mọi người, quyết định không cần chuẩn bị, cuộc sống không thay đổi đều trái với ý tác giả.",
    "voc": "移住（いじゅう）：chuyển nơi ở, di cư； 家賃（やちん）：tiền thuê nhà； 子育て（こそだて）：nuôi con； テレワーク：làm việc từ xa； 課題（かだい）：vấn đề, khó khăn； 収入（しゅうにゅう）：thu nhập； 選択肢（せんたくし）：lựa chọn"
  },
  {
    "p": "日本では、まだ食べられるのに捨てられてしまう食品が年間約500万トンあると言われている。この量は、世界の食料支援の量を上回るほどだ。食品ロスの原因の一つは、家庭での食べ残しや買いすぎである。また、店では売れ残った食品が捨てられることも多い。こうした食品ロスを減らすため、さまざまな取り組みが行われている。たとえば、賞味期限が近い食品を安く売る店が増えている。また、家庭では買い物の前に冷蔵庫の中を確認し、必要な分だけ買うことが大切だと言われている。食品ロスを減らすことは、環境を守ることにもつながる。私たち一人一人が、日々の生活の中で意識して行動することが求められている。",
    "qs": [
     {
      "q": "食品ロスについて、本文で述べられていることはどれですか。",
      "o": ["日本では年間約500万トンの食品が捨てられている。", "日本では食品ロスはほとんどない。", "世界の食料支援の量は日本の食品ロスより多い。", "食品ロスは店だけで起きている。"],
      "a": 0,
      "e": "まだ食べられるのに捨てられてしまう食品が年間約500万トンあると言われている。"
     },
     {
      "q": "食品ロスを減らす取り組みとして、本文で述べられているものはどれですか。",
      "o": ["食品の値段を上げること。", "店の数を減らすこと。", "賞味期限が近い食品を安く売ること。", "家庭でたくさん買い置きすること。"],
      "a": 2,
      "e": "賞味期限が近い食品を安く売る店が増えている。"
     },
     {
      "q": "筆者によると、食品ロスを減らすために大切なことは何ですか。",
      "o": ["政府だけが取り組むこと。", "店に行かないこと。", "食品を買わないこと。", "一人一人が日々の生活の中で意識して行動すること。"],
      "a": 3,
      "e": "私たち一人一人が、日々の生活の中で意識して行動することが求められている。"
     }
    ],
    "exp": "Q1: bằng chứng 「まだ食べられるのに捨てられてしまう食品が年間約500万トンある」nên đáp án 1 đúng; hầu như không có lãng phí thực phẩm, viện trợ lương thực thế giới nhiều hơn, lãng phí chỉ xảy ra ở cửa hàng đều trái với bài. Q2: bằng chứng 「賞味期限が近い食品を安く売る店が増えている」nên đáp án 3 đúng; tăng giá, giảm số cửa hàng, mua tích trữ nhiều ở nhà đều không có trong bài. Q3: bằng chứng 「私たち一人一人が、日々の生活の中で意識して行動することが求められている」nên đáp án 4 đúng; chỉ chính phủ làm, không đi cửa hàng, không mua thực phẩm đều trái với ý tác giả.",
    "voc": "食品ロス：lãng phí thực phẩm； 捨てる（すてる）：vứt bỏ； 食料支援（しょくりょうしえん）：viện trợ lương thực； 上回る（うわまわる）：vượt qua； 食べ残し（たべのこし）：thức ăn thừa； 賞味期限（しょうみきげん）：hạn sử dụng； 冷蔵庫（れいぞうこ）：tủ lạnh； 環境（かんきょう）：môi trường"
  },
  {
    "p": "最近の研究によると、日本人の平均睡眠時間は先進国の中でも短いそうだ。睡眠不足が続くと、仕事の効率が下がるだけでなく、健康にも悪影響が出る。特に、生活習慣病の危険が高まることが分かっている。一方で、長く眠ればよいというわけでもない。大切なのは、睡眠の時間だけでなく、質である。質のよい睡眠をとるためには、寝る前にスマートフォンを見ないことや、毎日同じ時間に寝て起きることが効果的だと言われている。睡眠の質を上げるには、寝室を暗く静かにすることも大切だ。忙しい毎日の中でも、睡眠を大切にすることが、長く健康に働くための第一歩なのだ。",
    "qs": [
     {
      "q": "本文によると、日本人の平均睡眠時間はどうですか。",
      "o": ["先進国の中でも短い。", "先進国の中で最も長い。", "年々長くなっている。", "世界で最も短い。"],
      "a": 0,
      "e": "日本人の平均睡眠時間は先進国の中でも短いそうだ。"
     },
     {
      "q": "睡眠不足が続くと、どうなりますか。",
      "o": ["仕事の効率が上がる。", "健康にも悪影響が出る。", "生活習慣病の危険が下がる。", "睡眠の質がよくなる。"],
      "a": 1,
      "e": "睡眠不足が続くと、仕事の効率が下がるだけでなく、健康にも悪影響が出る。"
     },
     {
      "q": "質のよい睡眠をとるために効果的だと述べられていることはどれですか。",
      "o": ["寝る前にスマートフォンを見ないこと。", "寝る前にたくさん食べること。", "毎日違う時間に寝ること。", "できるだけ長く眠ること。"],
      "a": 0,
      "e": "寝る前にスマートフォンを見ないことや、毎日同じ時間に寝て起きることが効果的だと言われている。"
     }
    ],
    "exp": "Q1: bằng chứng 「日本人の平均睡眠時間は先進国の中でも短いそうだ」nên đáp án 1 đúng; dài nhất trong các nước tiên tiến, ngày càng dài hơn, ngắn nhất thế giới đều không có trong bài. Q2: bằng chứng 「睡眠不足が続くと、仕事の効率が下がるだけでなく、健康にも悪影響が出る」nên đáp án 2 đúng; hiệu quả công việc tăng, nguy cơ bệnh lối sống giảm, chất lượng giấc ngủ tốt hơn đều trái với bài. Q3: bằng chứng 「寝る前にスマートフォンを見ないことや、毎日同じ時間に寝て起きることが効果的だ」nên đáp án 1 đúng; ăn nhiều trước khi ngủ, ngủ giờ khác nhau mỗi ngày, ngủ càng dài càng tốt đều trái với bài — bài còn nói rõ không phải cứ ngủ dài là tốt.",
    "voc": "睡眠（すいみん）：giấc ngủ； 平均（へいきん）：trung bình； 先進国（せんしんこく）：nước tiên tiến； 睡眠不足（すいみんぶそく）：thiếu ngủ； 効率（こうりつ）：hiệu quả； 生活習慣病（せいかつしゅうかんびょう）：bệnh lối sống； 質（しつ）：chất lượng"
  }
  ],
  readL: [
  {
    "p": "地方の町では、空き家が増え続けている。若い人が都市へ出て行き、高齢者だけが残された家が、持ち主の死後に誰も住まない家になるからだ。空き家をそのままにしておくと、建物が傷み、景観が悪くなるだけでなく、災害のときに危険なこともある。そこで、ある町では空き家を活用する取り組みを始めた。町は持ち主から空き家を借り受け、修理をして、移住を希望する人に安く貸し出すことにしたのだ。移住者の中には、古い家を自分で直しながら住む人もいる。最初は不便さを感じることもあるが、地域の人々との交流が生まれ、次第に町になじんでいくという。町では、移住者が地域の行事に参加しやすいよう、住民との交流会も開かれている。空き家の修理には費用がかかるため、町は修理費の一部を補助する制度も作った。取り組みを始めて5年がたち、町の人口は少しずつ増え始めた。空き家の数はまだ多いが、町役場の職員は「空き家は問題であると同時に、町を元気にする資源でもある」と話している。空き家を生かす取り組みは、ほかの地域にも広がりつつある。",
    "qs": [
     {
      "q": "地方の町で空き家が増えている理由は何ですか。",
      "o": ["若い人が都市へ出て行き、高齢者だけが残された家が誰も住まない家になるから。", "家を建てる人が増えたから。", "都市の人口が減ったから。", "家賃が高くなったから。"],
      "a": 0,
      "e": "若い人が都市へ出て行き、高齢者だけが残された家が、持ち主の死後に誰も住まない家になるからだ。"
     },
     {
      "q": "ある町では、空き家をどのように活用していますか。",
      "o": ["空き家をすべて壊している。", "持ち主から借り受け、修理をして、移住希望者に安く貸し出している。", "空き家を観光客のホテルにしている。", "空き家をそのまま売っている。"],
      "a": 1,
      "e": "町は持ち主から空き家を借り受け、修理をして、移住を希望する人に安く貸し出すことにしたのだ。"
     },
     {
      "q": "取り組みを始めて5年がたって、町はどうなりましたか。",
      "o": ["人口は半分になった。", "空き家はなくなった。", "町の人口は少しずつ増え始めた。", "移住者はいなくなった。"],
      "a": 2,
      "e": "取り組みを始めて5年がたち、町の人口は少しずつ増え始めた。"
     },
     {
      "q": "町役場の職員は、空き家をどのように考えていますか。",
      "o": ["町にとって害にしかならない。", "すぐにすべて壊すべきだ。", "移住者のためだけにある。", "問題であると同時に、町を元気にする資源でもある。"],
      "a": 3,
      "e": "「空き家は問題であると同時に、町を元気にする資源でもある」と話している。"
     }
    ],
    "exp": "Q1: bằng chứng 「若い人が都市へ出て行き、高齢者だけが残された家が、持ち主の死後に誰も住まない家になるからだ」nên đáp án 1 đúng; người xây nhà tăng, dân số thành phố giảm, tiền thuê đắt đều không có trong bài. Q2: bằng chứng 「町は持ち主から空き家を借り受け、修理をして、移住を希望する人に安く貸し出すことにした」nên đáp án 2 đúng; phá hết, làm khách sạn cho du khách, bán nguyên trạng đều trái với bài. Q3: bằng chứng 「取り組みを始めて5年がたち、町の人口は少しずつ増え始めた」nên đáp án 3 đúng; dân số giảm một nửa, nhà trống biến mất, người chuyển đến biến mất đều trái với bài. Q4: bằng chứng 「空き家は問題であると同時に、町を元気にする資源でもある」nên đáp án 4 đúng; chỉ có hại, nên phá hết ngay, chỉ dành cho người chuyển đến đều trái với ý của nhân viên.",
    "voc": "空き家（あきや）：nhà trống； 高齢者（こうれいしゃ）：người cao tuổi； 持ち主（もちぬし）：chủ sở hữu； 景観（けいかん）：cảnh quan； 災害（さいがい）：thảm họa； 活用（かつよう）：tận dụng； 移住（いじゅう）：chuyển nơi ở； 町役場（まちやくば）：ủy ban thị trấn； 資源（しげん）：tài nguyên"
  }
  ],
  tougou: [
  {
    "p1": "小学生の子どもにスマートフォンを持たせることに、賛成する人もいる。子どもが一人で出かけるとき、親は連絡が取れるので安心できるからだ。また、スマートフォンを使えば、調べものや学習にも役立つ。使い方のルールを家族で決めれば、問題は少ないと考える人も多い。ただし、持たせる時期やルールについては、子どもの年齢や性格に合わせて考える必要がある。",
    "p2": "一方で、小学生にスマートフォンを持たせることに反対する意見もある。子どもはゲームや動画に夢中になり、勉強や睡眠の時間が減ってしまうおそれがあるからだ。また、インターネット上には危険な情報もあり、子どもがトラブルに巻き込まれる心配もある。スマートフォンが必要になるのは、もっと大きくなってからで十分だという考え方もある。",
    "qs": [
     {
      "q": "Aの筆者の考えに合うものはどれですか。",
      "o": ["ルールを決めれば、子どもにスマートフォンを持たせてもよい。", "小学生にスマートフォンを持たせるべきではない。", "スマートフォンは学習に役立たない。", "子どもが一人で出かけるのは危険だ。"],
      "a": 0,
      "e": "使い方のルールを家族で決めれば、問題は少ないと考える人も多い。"
     },
     {
      "q": "Bの筆者の考えに合うものはどれですか。",
      "o": ["スマートフォンは子どもの学習に必ず役立つ。", "ゲームや動画に夢中になり、勉強や睡眠の時間が減るおそれがある。", "小学生はすぐにスマートフォンを持つべきだ。", "インターネットには危険な情報はない。"],
      "a": 1,
      "e": "子どもはゲームや動画に夢中になり、勉強や睡眠の時間が減ってしまうおそれがあるからだ。"
     },
     {
      "q": "AとBを比べたとき、正しいものはどれですか。",
      "o": ["AもBも持たせることに賛成している。", "AもBも持たせることに反対している。", "Aは持たせることに賛成、Bは反対している。", "Aは反対、Bは賛成している。"],
      "a": 2,
      "e": "Aは「賛成する人もいる」と述べ、Bは「反対する意見もある」と述べている。"
     }
    ],
    "exp": "Q1: bằng chứng A 「使い方のルールを家族で決めれば、問題は少ない」nên đáp án 1 đúng; A không phản đối việc cho trẻ dùng, A nói điện thoại có ích cho học tập, A không nói trẻ đi một mình là nguy hiểm. Q2: bằng chứng B 「子どもはゲームや動画に夢中になり、勉強や睡眠の時間が減ってしまうおそれがある」nên đáp án 2 đúng; điện thoại chắc chắn có ích cho học tập là ý của A, nên cho học sinh tiểu học dùng ngay và internet không có thông tin nguy hiểm đều trái với B. Q3: A nêu ý kiến tán thành, B nêu ý kiến phản đối, nên đáp án 3 đúng; cả hai cùng tán thành, cả hai cùng phản đối, A phản đối còn B tán thành đều trái với bài.",
    "voc": "小学生（しょうがくせい）：học sinh tiểu học； スマートフォン：điện thoại thông minh； 賛成（さんせい）：tán thành； 反対（はんたい）：phản đối； 連絡（れんらく）：liên lạc； 安心（あんしん）：yên tâm； 夢中（むちゅう）：mê mẩn； 巻き込まれる（まきこまれる）：bị cuốn vào"
  }
  ],
  shuchou: [
  {
    "p": "日本では、失敗を恐れて新しいことに挑戦しない人が多いと言われる。学校では正しい答えを求められることが多く、間違えることを恥ずかしいと感じる子どもも少なくない。しかし、失敗を経験せずに成長することは難しい。失敗から学ぶことは多く、失敗した原因を考え、次の行動に生かすことで、人は大きく成長する。たとえば、発明王として知られるエジソンは、電球を完成させるまでに何千回も失敗したと言われている。彼は失敗を「うまくいかない方法を見つけただけだ」と考え、挑戦を続けたのだ。もちろん、同じ失敗を繰り返すことはよくない。失敗の原因をふり返り、方法を変えることが大切だ。周りの人も、挑戦した人を応援する姿勢が求められる。失敗を笑うのではなく、挑戦した勇気を認める社会になれば、もっと多くの人が新しい一歩を踏み出せるだろう。失敗した人を責める社会では、誰も新しいことに挑戦しようとしなくなる。挑戦する人を応援する文化があってこそ、社会全体が前に進むことができるのだ。大切なのは、失敗をしないことではなく、失敗を恐れずに挑戦し、そこから学ぶことである。学校や職場でも、失敗を責めるのではなく、失敗から何を学んだかを話し合う文化が必要だ。失敗を許す社会こそ、新しいものを生み出す力を持つのだと筆者は考えている。",
    "qs": [
     {
      "q": "筆者が最も言いたいことはどれですか。",
      "o": ["失敗を恐れずに挑戦し、そこから学ぶことが大切だ。", "失敗をしないことが最も大切だ。", "失敗した人は責めるべきだ。", "新しいことに挑戦しないほうがよい。"],
      "a": 0,
      "e": "大切なのは、失敗をしないことではなく、失敗を恐れずに挑戦し、そこから学ぶことである。"
     },
     {
      "q": "エジソンの例は、何のために挙げられていますか。",
      "o": ["失敗をしない方法を示すため。", "失敗を重ねながら挑戦を続けて成功した例を示すため。", "発明が簡単だったことを示すため。", "電球の作り方を説明するため。"],
      "a": 1,
      "e": "発明王として知られるエジソンは、電球を完成させるまでに何千回も失敗したと言われている。"
     },
     {
      "q": "学校や職場で必要だと筆者が考えていることは何ですか。",
      "o": ["失敗した人を厳しく罰すること。", "正しい答えだけを求めること。", "失敗を責めるのではなく、失敗から何を学んだかを話し合う文化。", "失敗を隠すこと。"],
      "a": 2,
      "e": "学校や職場でも、失敗を責めるのではなく、失敗から何を学んだかを話し合う文化が必要だ。"
     },
     {
      "q": "「失敗を許す社会」について、筆者の考えに合うものはどれですか。",
      "o": ["新しいものが生まれにくくなる。", "挑戦する人が減る。", "失敗が増えるだけだ。", "新しいものを生み出す力を持つ。"],
      "a": 3,
      "e": "失敗を許す社会こそ、新しいものを生み出す力を持つのだと筆者は考えている。"
     }
    ],
    "exp": "Q1（chủ trương của tác giả）: bằng chứng 「大切なのは、失敗をしないことではなく、失敗を恐れずに挑戦し、そこから学ぶことである」nên đáp án 1 đúng; không phạm sai lầm mới là quan trọng nhất, nên trách người thất bại, không nên thử điều mới đều trái với chủ trương của tác giả. Q2: bằng chứng 「エジソンは、電球を完成させるまでに何千回も失敗した」— ví dụ về người thất bại nhiều lần nhưng vẫn tiếp tục thử thách và thành công — nên đáp án 2 đúng; chỉ cách không thất bại, phát minh dễ dàng, giải thích cách làm bóng đèn đều không phải mục đích của ví dụ. Q3: bằng chứng 「学校や職場でも、失敗を責めるのではなく、失敗から何を学んだかを話し合う文化が必要だ」nên đáp án 3 đúng; phạt nặng, chỉ đòi đáp án đúng, che giấu thất bại đều trái với bài. Q4: bằng chứng 「失敗を許す社会こそ、新しいものを生み出す力を持つのだ」nên đáp án 4 đúng; khó tạo ra cái mới, ít người thử thách hơn, chỉ làm tăng thất bại đều trái với ý tác giả.",
    "voc": "失敗（しっぱい）：thất bại； 挑戦（ちょうせん）：thử thách； 成長（せいちょう）：trưởng thành； 発明王（はつめいおう）：vua phát minh； 電球（でんきゅう）：bóng đèn； ふり返る：nhìn lại, suy ngẫm； 応援（おうえん）：ủng hộ； 勇気（ゆうき）：dũng khí； 責める（せめる）：trách móc； 文化（ぶんか）：văn hóa"
  }
  ],
  info: [
  {
    "tpl": "<b>A スポーツジム「元気」のお知らせ</b><br>11月のクラスの時間は、下の表のとおりです。初めての人は、体験レッスンを1回受けることができます。<br><table class=\"jl-tbl\"><tr><th>クラス</th><th>曜日</th><th>時間</th></tr><tr><td>ヨガ</td><td>火曜日</td><td>10時〜11時</td></tr><tr><td>ヨガ</td><td>金曜日</td><td>18時〜19時</td></tr><tr><td>水泳</td><td>水曜日</td><td>14時〜15時</td></tr><tr><td>水泳</td><td>土曜日</td><td>10時〜11時</td></tr></table>ジムは月曜日が休みです。<br><b>B カレンダー（11月）</b><br><table class=\"jl-cal\"><tr><th>日</th><th>月</th><th>火</th><th>水</th><th>木</th><th>金</th><th>土</th></tr><tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td></tr><tr><td>8</td><td>9</td><td>10</td><td>11</td><td>12</td><td>13</td><td>14</td></tr><tr><td>15</td><td>16</td><td>17</td><td>18</td><td>19</td><td>20</td><td>21</td></tr><tr><td>22</td><td>23</td><td>24</td><td>25</td><td>26</td><td>27</td><td>28</td></tr><tr><td>29</td><td>30</td><td></td><td></td><td></td><td></td><td></td></tr></table>",
    "inst": "つぎのA「スポーツジムのお知らせ」とBのカレンダーを見て、質問に答えてください。答えは1・2・3・4から、いちばんいいものを一つえらんでください。",
    "q": "今日は6日(金曜日)です。来週の火曜日に初めてヨガの体験レッスンを受けたいです。何日の何時に行けばいいですか。",
    "opts": ["10日の10時", "10日の18時", "11日の10時", "7日の10時"],
    "ans": 0,
    "exp": "Lịch cho thấy thứ Ba tuần sau là ngày 10（thứ Sáu ngày 6 → thứ Ba tiếp theo là ngày 10）. Bảng lớp cho thấy lớp yoga thứ Ba là 10 giờ〜11 giờ, còn 18 giờ là lớp yoga thứ Sáu nên đáp án 2 sai. Ngày 11 là thứ Tư, không có lớp yoga; ngày 7 là thứ Bảy, cũng không có lớp yoga nên đáp án 3 và 4 sai. Chỉ có thể giải được bằng cách dùng cả bảng lớp và lịch cùng nhau.",
    "voc": "スポーツジム：phòng tập thể dục； ヨガ：yoga； 体験レッスン（たいけんレッスン）：buổi học thử； 水泳（すいえい）：bơi lội； カレンダー：lịch"
  },
  {
    "tpl": "<b>A 歴史博物館の特別展のお知らせ</b><br>特別展「江戸のくらし」は11月に開かれています。料金は下の表のとおりです。<br><table class=\"jl-tbl\"><tr><th></th><th>ふつうの料金</th><th>家族割引の日</th></tr><tr><td>大人</td><td>1000円</td><td>500円</td></tr><tr><td>子ども</td><td>300円</td><td>300円</td></tr></table>家族割引の日は、毎月第2土曜日です。博物館は月曜日が休みです。<br><b>B カレンダー（11月）</b><br><table class=\"jl-cal\"><tr><th>日</th><th>月</th><th>火</th><th>水</th><th>木</th><th>金</th><th>土</th></tr><tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td></tr><tr><td>8</td><td>9</td><td>10</td><td>11</td><td>12</td><td>13</td><td>14</td></tr><tr><td>15</td><td>16</td><td>17</td><td>18</td><td>19</td><td>20</td><td>21</td></tr><tr><td>22</td><td>23</td><td>24</td><td>25</td><td>26</td><td>27</td><td>28</td></tr><tr><td>29</td><td>30</td><td></td><td></td><td></td><td></td><td></td></tr></table>",
    "inst": "つぎのA「歴史博物館のお知らせ」とBのカレンダーを見て、質問に答えてください。答えは1・2・3・4から、いちばんいいものを一つえらんでください。",
    "q": "今日は5日(木曜日)です。今月の家族割引の日に、大人2人と子ども2人で行くと、ぜんぶでいくらかかりますか。",
    "opts": ["1600円", "2600円", "1300円", "2000円"],
    "ans": 0,
    "exp": "Lịch cho thấy thứ Bảy thứ hai của tháng 11 là ngày 14（các thứ Bảy là 7日、14日、21日、28日）. Vào ngày giảm giá gia đình, người lớn 500円 × 2 người = 1000円, trẻ em 300円 × 2 người = 600円, tổng cộng 1600円 nên đáp án 1 đúng. 2600円 là giá thường（1000円 × 2 + 300円 × 2）; 1300円 là tính thiếu một trẻ em; 2000円 là chỉ tính người lớn giá thường. Chỉ giải được bằng cách dùng cả bảng giá và lịch cùng nhau.",
    "voc": "歴史博物館（れきしはくぶつかん）：bảo tàng lịch sử； 特別展（とくべつてん）：triển lãm đặc biệt； 家族割引（かぞくわりびき）：giảm giá gia đình； 料金（りょうきん）：giá vé, lệ phí； 第2土曜日（だいにどようび）：thứ Bảy thứ hai"
  }
  ]
};

/* ----- Test 5 ----- */
window.WRITTEN_N1_SET5 = {
 yomi: [
  { s: "需要 と 供給 の 均衡 が 保たれて いる。", t: "均衡", r: "きんこう", w: ["きんごう", "ぎんこう", "きんこ"], exp: "均衡 đọc là きんこう（均 きん、衡 こう）、nghĩa là sự cân bằng. きんごう đọc 衡 thành ごう là sai; ぎんこう đọc 均 thành ぎん là sai; きんこ thiếu mất chữ 衡 nên sai.", voc: "均衡（きんこう）：sự cân bằng； 需要（じゅよう）：nhu cầu； 供給（きょうきゅう）：cung cấp； 保つ（たもつ）：giữ, duy trì" },
  { s: "彼 の 記録 は、 誰 も 凌駕 できない ほど の もの だ。", t: "凌駕", r: "りょうが", w: ["りょうか", "りゅうが", "れいが"], exp: "凌駕 đọc là りょうが（凌 りょう、駕 が）、nghĩa là vượt qua, hơn hẳn. りょうか đọc 駕 thành か là sai; りゅうが đọc 凌 thành りゅう là sai; れいが đọc 凌 thành れい là sai.", voc: "凌駕（りょうが）：vượt qua, hơn hẳn； 記録（きろく）：kỷ lục； 誰（だれ）：ai" },
  { s: "彼女 は 決断 を 躊躇 して いる。", t: "躊躇", r: "ちゅうちょ", w: ["ちゅうちょく", "じゅうちょ", "ちゅうしょ"], exp: "躊躇 đọc là ちゅうちょ（躊 ちゅう、躇 ちょ）、nghĩa là do dự, chần chừ. ちゅうちょく thêm く thừa nên sai; じゅうちょ đọc 躊 thành じゅう là sai; ちゅうしょ đọc 躇 thành しょ là sai.", voc: "躊躇（ちゅうちょ）：do dự, chần chừ； 決断（けつだん）：quyết định" },
  { s: "彼女 の 表情 は 曖昧 で、 喜んで いる の か 困って いる の か 分からなかった。", t: "曖昧", r: "あいまい", w: ["あいめい", "あまい", "あいみ"], exp: "曖昧 đọc là あいまい（曖 あい、昧 まい）、nghĩa là mơ hồ, không rõ ràng. あいめい đọc 昧 thành めい là sai; あまい bỏ mất chữ 昧 nên sai; あいみ đọc 昧 thành み là sai.", voc: "曖昧（あいまい）：mơ hồ, không rõ ràng； 表情（ひょうじょう）：nét mặt, biểu cảm； 喜ぶ（よろこぶ）：vui mừng； 困る（こまる）：gặp khó khăn, lúng túng； 分かる（わかる）：hiểu" },
  { s: "景気 の 回復 は 顕著 だ。", t: "顕著", r: "けんちょ", w: ["けんちょう", "けんしょ", "げんちょ"], exp: "顕著 đọc là けんちょ（顕 けん、著 ちょ）、nghĩa là rõ rệt, nổi bật. けんちょう đọc 著 thành ちょう là sai; けんしょ đọc 著 thành しょ là sai; げんちょ đọc 顕 thành げん là sai.", voc: "顕著（けんちょ）：rõ rệt, nổi bật； 景気（けいき）：tình hình kinh tế； 回復（かいふく）：hồi phục" },
  { s: "規則 を 遵守 する こと が 求められて いる。", t: "遵守", r: "じゅんしゅ", w: ["じゅんしゅう", "じゅんす", "しゅんしゅ"], exp: "遵守 đọc là じゅんしゅ（遵 じゅん、守 しゅ）、nghĩa là tuân thủ. じゅんしゅう thêm う thừa nên sai; じゅんす bỏ mất chữ 守 nên sai; しゅんしゅ đọc 遵 thành しゅん là sai.", voc: "遵守（じゅんしゅ）：tuân thủ； 規則（きそく）：quy định； 求める（もとめる）：yêu cầu, đòi hỏi" }
 ],
 ctx: [
  { s: "彼 は 長い 間 の 研究 の 成果 を、 学会 で （　）した。", a: "発表", w: ["隠蔽", "破棄", "拒否"], exp: "Đem thành quả nghiên cứu trình bày trước hội học thuật thì dùng 発表する（công bố, trình bày). 隠蔽する là che giấu, 破棄する là hủy bỏ, 拒否する là từ chối — đều ngược hoặc không hợp với ngữ cảnh này nên sai.", voc: "発表（はっぴょう）：công bố, trình bày； 学会（がっかい）：hội học thuật； 成果（せいか）：thành quả； 研究（けんきゅう）：nghiên cứu" },
  { s: "彼 は 失敗 を （　）に、 次 の 挑戦 へ 進んだ。", a: "糧", w: ["原因", "結果", "理由"], exp: "失敗を糧にする là cụm cố định, nghĩa là lấy thất bại làm bài học, làm động lực để tiến lên. 原因（nguyên nhân), 結果（kết quả), 理由（lý do) đều không đi với mẫu 失敗を〜に、次へ進んだ nên sai.", voc: "糧（かて）：lương thực; bài học, động lực (nghĩa bóng)； 失敗（しっぱい）：thất bại； 挑戦（ちょうせん）：thử thách； 進む（すすむ）：tiến lên" },
  { s: "契約 の 条件 を （　）する 義務 が ある。", a: "履行", w: ["違反", "無視", "放置"], exp: "条件を履行する nghĩa là thực hiện, thi hành điều khoản trong hợp đồng. 違反する là vi phạm, 無視する là phớt lờ, 放置する là bỏ mặc — đều ngược nghĩa với việc thực hiện nghĩa vụ nên sai.", voc: "履行（りこう）：thực hiện, thi hành； 契約（けいやく）：hợp đồng； 条件（じょうけん）：điều kiện； 義務（ぎむ）：nghĩa vụ" },
  { s: "経費 を （　）する ため、 会議 の 回数 を 減らした。", a: "削減", w: ["増加", "拡大", "消費"], exp: "Muốn giảm chi phí thì dùng 経費を削減する（cắt giảm). 増加する là tăng lên, 拡大する là mở rộng, 消費する là tiêu thụ — đều ngược với mục đích giảm chi phí nên sai.", voc: "削減（さくげん）：cắt giảm； 経費（けいひ）：chi phí； 増加（ぞうか）：tăng lên； 拡大（かくだい）：mở rộng" },
  { s: "その 行為 は 法律 に （　）する 恐れ が ある。", a: "抵触", w: ["接触", "接近", "適合"], exp: "法律に抵触する nghĩa là vi phạm, xung đột với pháp luật. 接触する là tiếp xúc, 接近する là đến gần — đều không dùng với 法律 theo nghĩa vi phạm; 適合する là phù hợp, ngược nghĩa nên sai.", voc: "抵触（ていしょく）：vi phạm, xung đột (với pháp luật)； 法律（ほうりつ）：pháp luật； 行為（こうい）：hành vi； 恐れ（おそれ）：nỗi lo, nguy cơ" },
  { s: "彼 は 新任 の 支社長 として 大阪 へ （　）した。", a: "赴任", w: ["出張", "旅行", "帰国"], exp: "Nhậm chức chi nhánh trưởng mới và đến Osaka làm việc thì dùng 赴任する（đến nhận nhiệm sở). 出張する là đi công tác ngắn ngày, 旅行する là đi du lịch, 帰国する là về nước — đều không diễn tả việc đến nhận chức nên sai.", voc: "赴任（ふにん）：đến nhận nhiệm sở； 新任（しんにん）：mới nhậm chức； 支社長（ししゃちょう）：giám đốc chi nhánh； 出張（しゅっちょう）：đi công tác" },
  { s: "長年 の 経験 の （　）が、 今回 の 成功 を 支えて いる。", a: "蓄積", w: ["収集", "貯金", "増加"], exp: "経験の蓄積 nghĩa là kinh nghiệm được tích lũy qua nhiều năm. 収集する là sưu tầm đồ vật, 貯金 là tiền tiết kiệm, 増加 là sự tăng lên — đều không đi với 経験 theo nghĩa tích lũy nên sai.", voc: "蓄積（ちくせき）：tích lũy； 経験（けいけん）：kinh nghiệm； 長年（ながねん）：nhiều năm； 支える（ささえる）：chống đỡ, hỗ trợ" }
 ],
 syn: [
  { s: "膨大 な データ を 処理 する 必要 が ある。", t: "膨大", a: "きょだい", w: ["すくない", "ちいさい", "わずか"], exp: "膨大（khổng lồ, đồ sộ) gần nghĩa nhất với きょだい（巨大：khổng lồ). すくない（ít), ちいさい（nhỏ), わずか（ít ỏi) đều ngược nghĩa nên sai.", voc: "膨大（ぼうだい）：khổng lồ, đồ sộ； 巨大（きょだい）：khổng lồ； 処理（しょり）：xử lý； データ：dữ liệu" },
  { s: "迅速 な 対応 が 求められて いる。", t: "迅速", a: "すみやか", w: ["おそい", "のろい", "ゆっくり"], exp: "迅速（nhanh chóng) gần nghĩa nhất với すみやか（nhanh chóng, mau lẹ). おそい（chậm), のろい（chậm chạp), ゆっくり（từ từ) đều ngược nghĩa nên sai.", voc: "迅速（じんそく）：nhanh chóng； 速やか（すみやか）：nhanh chóng, mau lẹ； 対応（たいおう）：đối phó, xử lý" },
  { s: "僅か な 違い が 結果 を 左右 する。", t: "僅か", a: "わずか", w: ["おおい", "たくさん", "きょだい"], exp: "僅か（chỉ một chút) gần nghĩa nhất với わずか（ít ỏi, chút ít). おおい（nhiều), たくさん（nhiều), きょだい（khổng lồ) đều ngược nghĩa nên sai.", voc: "僅か（わずか）：chỉ một chút, ít ỏi； 違い（ちがい）：sự khác biệt； 左右する（さゆうする）：quyết định, chi phối" },
  { s: "彼 は 頑固 な 性格 で、 誰 の 意見 も 聞か ない。", t: "頑固", a: "かたくな", w: ["すなお", "柔軟", "おだやか"], exp: "頑固（cứng đầu, ngoan cố) gần nghĩa nhất với かたくな（cứng nhắc, cố chấp). すなお（ngoan ngoãn, dễ bảo), 柔軟（linh hoạt), おだやか（hiền hòa) đều ngược nghĩa nên sai.", voc: "頑固（がんこ）：cứng đầu, ngoan cố； かたくな：cứng nhắc, cố chấp； 性格（せいかく）：tính cách； 意見（いけん）：ý kiến" },
  { s: "目的 を 明確 に する 必要 が ある。", t: "明確", a: "めいりょう", w: ["あいまい", "不明", "漠然"], exp: "明確（rõ ràng) gần nghĩa nhất với めいりょう（明瞭：rõ ràng, minh bạch). あいまい（mơ hồ), 不明（không rõ), 漠然（mơ hồ, không xác định) đều ngược nghĩa nên sai.", voc: "明確（めいかく）：rõ ràng； 明瞭（めいりょう）：rõ ràng, minh bạch； 目的（もくてき）：mục đích" },
  { s: "その 作業 は 容易 では ない。", t: "容易", a: "かんたん", w: ["困難", "複雑", "厄介"], exp: "容易（dễ dàng) gần nghĩa nhất với かんたん（簡単：đơn giản, dễ dàng). 困難（khó khăn), 複雑（phức tạp), 厄介（rắc rối) đều ngược nghĩa nên sai.", voc: "容易（ようい）：dễ dàng； 簡単（かんたん）：đơn giản, dễ dàng； 作業（さぎょう）：công việc, thao tác" }
 ],
 yoho: [
  { t: "迅速", s: ["彼 は 迅速 な 眠り に ついた。", "彼 は 迅速 な 対応 を した。", "この 石 は 迅速 に 重い です。", "彼 は 迅速 な 髪 を 切った。"], a: 1, exp: "迅速（nhanh chóng) dùng đúng với 対応（迅速な対応：phản ứng nhanh chóng). 迅速な眠り sai vì giấc ngủ không dùng 迅速 để miêu tả; 迅速に重い sai vì 重い không kết hợp với 迅速; 迅速な髪 sai vì tóc không dùng 迅速 để miêu tả.", voc: "迅速（じんそく）：nhanh chóng； 対応（たいおう）：đối phó, xử lý； 眠り（ねむり）：giấc ngủ； 髪（かみ）：tóc" },
  { t: "あらわに", s: ["彼 は 怒り を あらわに した。", "彼 は あらわに 本 を 読んだ。", "彼 は あらわに 時間 を 過ごした。", "彼 は あらわに 車 を 運転した。"], a: 0, exp: "あらわに là cách dùng đúng trong 怒りをあらわにする（bộc lộ rõ cơn giận). あらわに本を読む、あらわに時間を過ごす、あらわに車を運転する đều sai vì あらわに chỉ đi với động từ bộc lộ cảm xúc, không bổ nghĩa cho đọc sách, trôi qua thời gian hay lái xe.", voc: "あらわに：một cách rõ ràng, lộ rõ； 怒り（いかり）：cơn giận； 運転する（うんてんする）：lái xe" },
  { t: "いたわる", s: ["彼 は いたわる 本 を 読んだ。", "彼 は 病気 の 母 を いたわる。", "彼 は いたわる 時間 が 好き だ。", "彼 は いたわる 車 を 買った。"], a: 1, exp: "いたわる（chăm sóc, thương yêu) dùng đúng với 病気の母をいたわる（chăm sóc người mẹ đang ốm). いたわる本、いたわる時間、いたわる車 đều sai vì sách, thời gian, xe không phải là đối tượng để chăm sóc, thương yêu.", voc: "いたわる：chăm sóc, thương yêu； 病気（びょうき）：bệnh tật； 母（はは）：mẹ" },
  { t: "おろそか", s: ["彼 は おろそか な 本 を 読んだ。", "彼 は おろそか な 車 を 買った。", "彼 は 健康 を おろそか に して は いけない。", "彼 は おろそか な 時間 を 過ごした。"], a: 2, exp: "おろそか（lơ là, sao nhãng) dùng đúng trong 健康をおろそかにしてはいけない（không được lơ là sức khỏe). おろそかな本、おろそかな車、おろそかな時間 đều sai vì おろそか không bổ nghĩa cho sách, xe hay thời gian.", voc: "おろそか：lơ là, sao nhãng； 健康（けんこう）：sức khỏe； 過ごす（すごす）：trải qua, sống qua" },
  { t: "はかどる", s: ["彼 は 本 が はかどる。", "彼 は 車 が はかどる。", "彼 は 仕事 が はかどる。", "彼 は 時間 が はかどる。"], a: 2, exp: "はかどる（tiến triển thuận lợi) dùng đúng với 仕事がはかどる（công việc tiến triển tốt). 本がはかどる、車がはかどる、時間がはかどる đều sai vì sách, xe, thời gian không phải là việc đang tiến hành để nói はかどる.", voc: "はかどる：tiến triển thuận lợi； 仕事（しごと）：công việc" },
  { t: "さまたげる", s: ["彼 の 発言 が 本 を さまたげる。", "彼 の 発言 が 車 を さまたげる。", "彼 の 発言 が 時間 を さまたげる。", "彼 の 発言 が 議論 を さまたげる。"], a: 3, exp: "さまたげる（cản trở) dùng đúng với 議論をさまたげる（cản trở cuộc thảo luận). 本をさまたげる、車をさまたげる、時間をさまたげる đều sai vì sách, xe, thời gian không phải là hoạt động hay quá trình có thể bị cản trở.", voc: "さまたげる：cản trở； 発言（はつげん）：phát biểu； 議論（ぎろん）：thảo luận, tranh luận" }
 ],
 g1dlg: [
  { d: ["試合 が 始まる と、 観客 は どう しました か。", "試合 が 始まる （　）、 観客 は 大きな 歓声 を 上げた。"], a: "や否や", w: ["ばかりか", "にひきかえ", "ともなると"], p: "〜や否や", exp: "〜や否や nghĩa là \"ngay khi... thì...\" — trận đấu vừa bắt đầu thì khán giả cất tiếng reo hò vang dội ngay. ばかりか（không những... mà còn) không hợp; にひきかえ（trái lại) không hợp; ともなると diễn tả sự thay đổi chung của tình huống ('khi đã đến lúc... / khi trở thành...'), không diễn tả khoảnh khắc ngay tức thì của một sự việc đơn lẻ trong quá khứ — ở đây khán giả reo hò ngay đúng khoảnh khắc trận đấu bắt đầu, nên chỉ や否や mới diễn tả được 'vừa... thì ngay...' đó, ともなると sai.", voc: "試合（しあい）：trận đấu； 始まる（はじまる）：bắt đầu； 観客（かんきゃく）：khán giả； 歓声（かんせい）：tiếng reo hò； 上げる（あげる）：cất lên" },
  { d: ["結婚 して から、 生活 は どう 変わり ました か。", "結婚 して （　）、 毎日 早く 家 に 帰る よう に なった。"], a: "からというもの", w: ["そばから", "や否や", "ては"], p: "〜てからというもの", exp: "〜てからというもの nghĩa là \"kể từ khi...\" — kể từ khi kết hôn thì ngày nào cũng về nhà sớm. そばから phải đi sau thể た（結婚したそばから) nên 結婚してそばから sai; や否や chỉ khoảnh khắc ngay sau đó, không diễn tả trạng thái kéo dài nên sai; ては mang nghĩa điều kiện, không hợp nên sai.", voc: "結婚する（けっこんする）：kết hôn； 生活（せいかつ）：cuộc sống； 早く（はやく）：sớm； 帰る（かえる）：về nhà" },
  { d: ["健康 の ため に、 どう したら いい です か。", "早寝早起き を する （　） と 思う。"], a: "に越したことはない", w: ["べく", "ざらではない", "も同然だ"], p: "〜に越したことはない", exp: "〜に越したことはない nghĩa là \"... là tốt nhất, không gì bằng...\" — ngủ sớm dậy sớm là tốt nhất cho sức khỏe. べく cần mệnh đề mục đích theo sau nên するべくと思う là sai; ざらではない nghĩa là \"không phải là hiếm\" nên sai; も同然だ nghĩa là \"cũng như là...\" nên sai.", voc: "早寝早起き（はやねはやおき）：ngủ sớm dậy sớm； 健康（けんこう）：sức khỏe" }
 ],
 g1: [
  { s: "彼 は 家 に 帰る （　）、 すぐ 勉強 を 始めた。", a: "なり", w: ["そばから", "ばかりか", "せいか"], p: "V-る なり", exp: "V-るなり nghĩa là \"vừa mới... thì ngay...\" — vừa về đến nhà thì lập tức bắt đầu học. そばから phải đi sau thể た（帰ったそばから) nên 帰るそばから sai; ばかりか nghĩa là \"không những...\" nên sai; せいか nghĩa là \"có lẽ vì...\" nên sai.", voc: "帰る（かえる）：về nhà； 始める（はじめる）：bắt đầu； 勉強（べんきょう）：học tập" },
  { s: "新製品 の 発売 （　）、 特別 価格 で 販売 する。", a: "に先駆けて", w: ["を限りに", "に至って", "せいか"], p: "〜に先駆けて", exp: "〜に先駆けて nghĩa là \"trước, đi trước (sự kiện)...\" — bán với giá đặc biệt trước khi sản phẩm mới ra mắt. を限りに nghĩa là \"lấy... làm mốc cuối\" nên sai; に至って nghĩa là \"đến lúc...\" nên sai; せいか nghĩa là \"có lẽ vì...\" nên sai.", voc: "発売（はつばい）：phát hành, ra mắt sản phẩm； 特別（とくべつ）：đặc biệt； 価格（かかく）：giá cả； 販売する（はんばいする）：bán" },
  { s: "過去 の 失敗 （　）、 改善策 を 考えた。", a: "を踏まえて", w: ["を限りに", "に先駆けて", "に免じて"], p: "N + を踏まえて", exp: "〜を踏まえて nghĩa là \"dựa trên, căn cứ vào...\" — dựa trên thất bại trong quá khứ mà nghĩ ra biện pháp cải thiện. を限りに nghĩa là \"lấy... làm mốc cuối\" nên sai; に先駆けて nghĩa là \"trước (sự kiện)...\" — 失敗に先駆けて改善策を考えた thì thành \"nghĩ ra biện pháp cải thiện trước khi thất bại xảy ra\", vô lý vì thất bại đã là chuyện quá khứ nên sai; に免じて nghĩa là \"nể tình...\" nên sai.", voc: "失敗（しっぱい）：thất bại； 改善策（かいぜんさく）：biện pháp cải thiện； 考える（かんがえる）：suy nghĩ" },
  { s: "彼 は 成功 する （　）、 意外 にも 失敗 して しまった。", a: "と思いきや", w: ["ともなると", "ばかりか", "にひきかえ"], p: "〜と思いきや", exp: "〜と思いきや nghĩa là \"cứ tưởng là... ai ngờ...\" — cứ tưởng anh ấy sẽ thành công, ai ngờ lại thất bại. ともなると nghĩa là \"khi trở thành...\" nên sai; ばかりか nghĩa là \"không những...\" nên sai; にひきかえ nghĩa là \"trái lại\" nên sai.", voc: "成功する（せいこうする）：thành công； 失敗する（しっぱいする）：thất bại； 意外（いがい）：bất ngờ" },
  { s: "彼 の よう な 努力家 は （　） と いえる。", a: "ざらではない", w: ["ざらだ", "に等しい", "も同然だ"], p: "〜ざらではない / 〜ざらだ", exp: "〜ざらではない nghĩa là \"không phải là thường thấy, hiếm có\" — người chăm chỉ như anh ấy không phải là người thường thấy. ざらだ nghĩa ngược lại là \"thường thấy\" nên sai; に等しい cần danh từ đứng trước（〜に等しい) nên 努力家はに等しい sai ngữ pháp; も同然だ cũng cần cấu trúc khác nên sai.", voc: "努力家（どりょくか）：người chăm chỉ, nỗ lực； ざらではない：không phải là thường thấy, hiếm có" },
  { s: "彼 は 自分 の 名前 （　） 書け ない。", a: "すら", w: ["たりとも", "といったら", "ときたら"], p: "N + すら", exp: "〜すら nghĩa là \"ngay cả... cũng\" — ngay cả tên mình cũng không viết được. たりとも chỉ đi với số lượng tối thiểu（一人たりとも) nên 名前たりとも sai; といったら nghĩa là \"nói đến... thì\" nên sai; ときたら nghĩa là \"khi nói đến...\" nên sai.", voc: "名前（なまえ）：tên； 書く（かく）：viết" },
  { s: "彼 の 努力 は 高い 評価 （　） もの だ。", a: "に値する", w: ["に等しい", "も同然だ", "に堪える"], p: "〜に値する", exp: "〜に値する nghĩa là \"xứng đáng với...\" — nỗ lực của anh ấy xứng đáng nhận được sự đánh giá cao. に等しい nghĩa là \"ngang bằng với...\" nên 評価に等しい sai nghĩa; も同然だ nghĩa là \"cũng như là...\" nên sai; に堪える nghĩa là \"chịu đựng được\" nên 評価に堪える sai kết hợp.", voc: "努力（どりょく）：nỗ lực； 評価（ひょうか）：sự đánh giá； 値する（あたいする）：xứng đáng" }
 ],
 star: [
  { pre: "彼 は 部屋 に 入る", post: "。", chunks: ["や否や", "子ども は", "大声 で", "泣き出した"], p: "〜や否や", exp: "Thứ tự đúng: 彼は部屋に入るや否や、子どもは大声で泣き出した（Anh ấy vừa bước vào phòng thì đứa trẻ òa khóc lớn). や否や phải đứng ngay sau động từ 入る để nối hai sự việc xảy ra liên tiếp; 子どもは là chủ ngữ của mệnh đề sau; 大声で bổ nghĩa cho 泣き出した ở cuối câu.", voc: "部屋（へや）：phòng； 入る（はいる）：bước vào； 子ども（こども）：đứa trẻ； 大声（おおごえ）：tiếng lớn； 泣き出す（なきだす）：òa khóc" },
  { pre: "母 は", post: "。", chunks: ["台所 に 立つ", "なり", "夕食 の 準備 を", "始めた"], p: "V-る なり", exp: "Thứ tự đúng: 母は台所に立つなり、夕食の準備を始めた（Mẹ vừa đứng vào bếp thì bắt đầu chuẩn bị bữa tối). なり đứng ngay sau 台所に立つ để diễn tả \"vừa... thì ngay...\"; 夕食の準備を là tân ngữ của 始めた ở cuối câu.", voc: "母（はは）：mẹ； 台所（だいどころ）：nhà bếp； 立つ（たつ）：đứng； 夕食（ゆうしょく）：bữa tối； 準備（じゅんび）：chuẩn bị" },
  { pre: "東京 へ 引っ越して", post: "。", chunks: ["からというもの", "私 は", "毎日", "忙しい 日々 を 送って いる"], p: "〜てからというもの", exp: "Thứ tự đúng: 東京へ引っ越してからというもの、私は毎日忙しい日々を送っている（Kể từ khi chuyển đến Tokyo, ngày nào tôi cũng sống những ngày bận rộn). からというもの đứng ngay sau 引っ越して để chỉ điểm bắt đầu của khoảng thời gian kéo dài đến nay; 私は là chủ ngữ; 毎日 bổ nghĩa cho 忙しい日々を送っている.", voc: "引っ越す（ひっこす）：chuyển nhà； 東京（とうきょう）：Tokyo； 毎日（まいにち）：mỗi ngày； 忙しい（いそがしい）：bận rộn" },
  { pre: "今日", post: "。", chunks: ["を限りに", "この 店 は", "閉店", "する"], p: "N を限りに", exp: "Thứ tự đúng: 今日を限りに、この店は閉店する（Kể từ hôm nay, cửa hàng này đóng cửa). を限りに đứng ngay sau 今日 để chỉ \"lấy hôm nay làm mốc cuối\"; この店は là chủ ngữ; 閉店する là động từ ở cuối câu.", voc: "今日（きょう）：hôm nay； 店（みせ）：cửa hàng； 閉店する（へいてんする）：đóng cửa (hàng)" },
  { pre: "努力 して", post: "の だ。", chunks: ["こそ", "初めて", "成功", "できる"], p: "V-て こそ", exp: "Thứ tự đúng: 努力してこそ初めて成功できるのだ（Chỉ khi nỗ lực thì mới có thể thành công). こそ đứng ngay sau 努力して để nhấn mạnh điều kiện; 初めて bổ nghĩa cho 成功できる ở cuối câu.", voc: "努力する（どりょくする）：nỗ lực； 初めて（はじめて）：lần đầu tiên; mới; 成功する（せいこうする）：thành công" }
 ],
 bunsho: [
  { intro: "つぎの 文章 を 読んで、 （　1　）〜（　5　） に 入る もの として 最も 適当 な もの を 選びなさい。", p: "近年、 プラスチック ごみ の 問題 が 深刻化 して いる。 （　1　） 多く の 国 で、 レジ袋 の 有料化 が 進められて いる。 （　2　） 日本 でも 2020年 から レジ袋 が 有料 と なった。 ごみ を 減らす ため に は、 一人一人 の 意識 が 重要 だ。 （　3　） マイバッグ を 持参 する など、 日常 生活 の 中 で できる こと は 多い。 （　4　） 企業 側 も、 包装 を 簡素化 する 取り組み を 始めて いる。 （　5　） ごみ 問題 の 解決 に は、 個人 と 企業 の 両方 の 努力 が 必要 だ と いえる。", b: [{ a: "しかし", w: ["そのため", "たとえば", "つまり"] }, { a: "そのため", w: ["しかし", "たとえば", "一方で"] }, { a: "たとえば", w: ["しかし", "そのため", "つまり"] }, { a: "一方で", w: ["たとえば", "そのため", "しかし"] }, { a: "つまり", w: ["たとえば", "しかし", "そのため"] }], exp: "(1) しかし：vấn đề trở nên nghiêm trọng, chuyển ý sang các nước đã tiến hành thu phí túi ni-lông — しかし diễn tả sự chuyển hướng; そのため（vì vậy) sai vì không phải quan hệ nguyên nhân-kết quả; たとえば（ví dụ) sai vì câu sau không phải ví dụ; つまり（tức là) sai vì không phải giải thích lại. (2) そのため：nhiều nước thu phí túi, vì vậy Nhật Bản cũng thu phí từ năm 2020 — quan hệ nguyên nhân-kết quả; しかし sai vì không có sự đối lập; たとえば sai; 一方で sai vì không phải hai mặt đối lập. (3) たとえば：nêu ví dụ cụ thể về việc cá nhân có thể làm là mang túi riêng; しかし、そのため、つまり đều sai vì câu này là ví dụ minh họa. (4) 一方で：chuyển sang phía doanh nghiệp, đối lập với phía cá nhân ở câu trước; たとえば、そのため、しかし đều sai vì đây là hai mặt của vấn đề. (5) つまり：tóm lại, giải quyết vấn đề rác cần nỗ lực của cả cá nhân và doanh nghiệp; たとえば、しかし、そのため đều sai vì đây là câu kết luận, tổng kết.", voc: "深刻化する（しんこくかする）：trở nên nghiêm trọng； レジ袋（レジぶくろ）：túi ni-lông ở quầy tính tiền； 有料化（ゆうりょうか）：việc thu phí； 意識（いしき）：ý thức； 持参する（じさんする）：mang theo； 包装（ほうそう）：bao bì； 簡素化（かんそか）：đơn giản hóa； 解決（かいけつ）：giải quyết" }
 ],
 readS: [
  { p: "田中 さん の 店 は、 駅 から 歩いて 五分 の 場所 に あります。 朝 七時 に 開店 し、 夜 八時 に 閉店 します。 パン は すべて 店内 で 焼いて おり、 午前中 に 売り切れる こと が 多い そうです。 店 の 一番 人気 の パン は、 あんパン と メロンパン だ そうです。", q: "田中 さん の 店 について、 正しい もの は どれ です か。", o: ["夜 十時 まで 開いて いる。", "駅 から 歩いて 五分 の 場所 に ある。", "パン は 他 の 店 から 仕入れて いる。", "午後 に なると、 パン が 増える。"], a: 1, e: "駅から歩いて五分の場所にあり、パンは店内で焼いている。", exp: "Đáp án đúng là \"駅から歩いて五分の場所にある\" — bằng chứng trong bài: 「駅から歩いて五分の場所にあります」。\"夜十時まで開いている\" sai vì cửa hàng đóng cửa lúc 8 giờ tối; \"パンは他の店から仕入れている\" sai vì bánh được nướng trong cửa hàng; \"午後になると、パンが増える\" sai vì bánh thường bán hết vào buổi sáng.", voc: "開店する（かいてんする）：mở cửa (hàng)； 閉店する（へいてんする）：đóng cửa (hàng)； 店内（てんない）：trong cửa hàng； 焼く（やく）：nướng； 売り切れる（うりきれる）：bán hết； 人気（にんき）：được ưa chuộng" },
  { p: "市民 プール の 利用 料金 は、 大人 1回 500円 です。 大人 用 の 回数券 は 10回分 で 4,000円 です。 山田 さん は、 大人 1人 で 10回 プール を 利用 する 予定 です。", q: "山田 さん が 回数券 を 使う と、 1回券 を 買う より いくら 安く なります か。", o: ["500円 安く なります。", "1,000円 安く なります。", "1,500円 安く なります。", "4,000円 安く なります。"], a: 1, calc: true, e: "1回券だと500円×10回で5,000円、回数券は4,000円なので、差は1,000円です。", exp: "Đây là câu hỏi tính toán: mua vé lẻ 1 lần 500 yên × 10 lần = 5.000 yên; vé tập 10 lần là 4.000 yên; chênh lệch là 5.000 − 4.000 = 1.000 yên. 500 yên sai (tính nhầm), 1.500 yên sai, 4.000 yên là giá vé tập chứ không phải số tiền rẻ hơn nên sai.", voc: "利用料金（りようりょうきん）：phí sử dụng； 回数券（かいすうけん）：vé tập (nhiều lần)； 予定（よてい）：dự định" },
  { p: "中央 図書館 は、 来月 の 15日 から 20日 まで、 蔵書 点検 の ため 休館 します。 休館 中 は、 本 の 返却 のみ 正面 玄関 横 の 返却 ポスト で 受け付けます。 新規 の 貸し出し は できません。 21日 から は 通常 どおり 開館 します。", q: "休館 中、 利用者 が できる こと は 何 です か。", o: ["本 の 返却 のみ できる。", "本 を 新しく 借りる こと が できる。", "本 の 返却 も 貸し出し も できない。", "21日 に 本 を 借りる こと が できる。"], a: 0, e: "休館中は、本の返却のみ正面玄関横の返却ポストで受け付けます。", exp: "Đáp án đúng là \"本の返却のみできる\" — bằng chứng: 「休館中は、本の返却のみ正面玄関横の返却ポストで受け付けます」。\"本を新しく借りることができる\" sai vì 新規の貸し出しはできません; \"返却も貸し出しもできない\" sai vì vẫn trả sách được; \"21日に本を借りることができる\" sai vì ngày 21 đã hết thời gian nghỉ館, câu hỏi hỏi về trong thời gian 休館.", voc: "休館する（きゅうかんする）：đóng cửa (thư viện)； 蔵書点検（ぞうしょてんけん）：kiểm kê sách； 返却（へんきゃく）：trả lại； 貸し出し（かしだし）：cho mượn； 正面玄関（しょうめんげんかん）：cửa chính" },
  { p: "この 地域 では、 燃える ごみ は 毎週 月曜日 と 木曜日 に、 燃えない ごみ は 第2 水曜日 に 出します。 ごみ は 朝 8時 まで に 指定 の 場所 へ 出して ください。 粗大 ごみ は、 事前 に 市役所 へ 申し込み が 必要 です。", q: "燃えない ごみ を 出す の は いつ です か。", o: ["毎週 月曜日 と 木曜日 です。", "第2 水曜日 です。", "毎週 水曜日 です。", "朝 8時 まで です。"], a: 1, e: "燃えないごみは第2水曜日に出します。", exp: "Đáp án đúng là \"第2水曜日\" — bằng chứng: 「燃えないごみは第2水曜日に出します」。\"毎週月曜日と木曜日\" là ngày đổ rác cháy được nên sai; \"毎週水曜日\" sai vì chỉ có thứ Tư thứ hai trong tháng; \"朝8時まで\" là hạn chót trong ngày, không phải ngày đổ rác nên sai.", voc: "燃えるごみ（もえるごみ）：rác cháy được； 燃えないごみ（もえないごみ）：rác không cháy được； 粗大ごみ（そだいごみ）：rác cồng kềnh； 指定（してい）：chỉ định； 市役所（しやくしょ）：tòa thị chính" }
 ],
 readM: [
  { p: "日本 は、 地震 や 台風 が 多い 国 だ。 災害 は いつ 起きる か 分からない ため、 日ごろ から の 備え が 大切 だ。 まず、 水 や 食料 を 三日分 ほど 用意 して おく こと が 勧められて いる。 また、 懐中電灯 や 携帯電話 の 充電器 など、 停電 の とき に 必要な もの も 準備 して おこう。 さらに、 家族 と 避難 場所 や 連絡 方法 を 話し合って おく こと も 重要 だ。 災害 が 起きた とき、 電話 が つながりにくく なる こと が ある から だ。 備え を して おけば、 不安 は 少し 和らぐ。 災害 を 防ぐ こと は できない が、 被害 を 小さく する こと は できる のだ。 避難 訓練 に 参加 して、 避難 場所 まで の 道 を 確かめて おく こと も 大切 だ。 非常 用 の 持ち出し袋 を 用意 し、 玄関 の 近く に 置いて おく と、 いざ と いう とき に 役に立つ。 日ごろ から 備えて おく こと で、 災害 が 起きた とき に、 落ち着いて 行動 する こと が できる。 また、 懐中電灯 の 電池 が 切れて いない か、 時々 確かめて おこう。", qs: [{ q: "災害 への 備え として、 本文 で 勧められて いる もの は どれ です か。", o: ["水 や 食料 を 三日分 ほど 用意 して おく こと。", "水 や 食料 を 一年分 用意 して おく こと。", "家族 と 連絡 を 取らない こと。", "避難 場所 を 知らない こと。"], a: 0, e: "水や食料を三日分ほど用意しておくことが勧められている。" }, { q: "家族 と 話し合って おく べき こと は 何 か。", o: ["旅行 の 計画。", "食事 の メニュー。", "買い物 の 予定。", "避難 場所 や 連絡 方法。"], a: 3, e: "家族と避難場所や連絡方法を話し合っておくことが重要と書かれている。" }, { q: "筆者 の 考え に 合う もの は どれ です か。", o: ["災害 を 完全に 防ぐ こと が できる。", "災害 を 防ぐ こと は できない が、 被害 を 小さく する こと は できる。", "備え を して も、 意味 は ない。", "災害 は 日本 で は 起きない。"], a: 1, e: "災害を防ぐことはできないが、被害を小さくすることはできると述べられている。" }], exp: "Q1: bằng chứng 「水や食料を三日分ほど用意しておくことが勧められている」nên đáp án là chuẩn bị nước và thực phẩm khoảng 3 ngày; \"一年分\" sai vì bài chỉ nói 三日分; \"連絡を取らない\" và \"避難場所を知らない\" ngược hẳn với nội dung bài nên sai. Q2: bằng chứng 「家族と避難場所や連絡方法を話し合っておくことが重要」nên đáp án là nơi lánh nạn và cách liên lạc; \"旅行の計画\" \"食事のメニュー\" \"買い物の予定\" đều không có trong bài nên sai. Q3: bằng chứng 「災害を防ぐことはできないが、被害を小さくすることはできる」nên đáp án đúng là không ngăn được thiên tai nhưng có thể giảm thiệt hại; \"完全に防ぐことができる\" sai; \"備えをしても意味はない\" ngược với bài; \"災害は日本では起きない\" sai vì bài nói Nhật Bản là nước nhiều động đất, bão.", voc: "災害（さいがい）：thiên tai； 備え（そなえ）：sự chuẩn bị； 避難場所（ひなんばしょ）：nơi lánh nạn； 懐中電灯（かいちゅうでんとう）：đèn pin； 停電（ていでん）：mất điện； 被害（ひがい）：thiệt hại； 避難訓練（ひなんくんれん）：diễn tập lánh nạn" },
  { p: "近年、 テレワーク を 導入 する 企業 が 増えて いる。 テレワーク の 大きな 利点 は、 通勤 時間 が 省ける こと だ。 通勤 に 使って いた 時間 を 仕事 や 家族 と の 時間 に あてる こと が できる。 一方 で、 課題 も ある。 同僚 と の コミュニケーション が 減り、 情報 の 共有 が 遅れる こと が ある から だ。 また、 テレワーク では、 自分 の 集中 できる 時間帯 に 仕事 を 進める こと が でき、 生産性 が 上がる と いう 声 も ある。 その ため、 多く の 企業 は、 週 に 1回 は 出社 する 日 を 設けて いる。 出社 する 日 に 会議 や 相談 を 集中 させる こと で、 仕事 の 効率 を 保って いる のだ。 テレワーク は、 働き方 の 選択肢 を 広げる もの として、 今後 も 広がって いく と 考えられる。", qs: [{ q: "テレワーク の 大きな 利点 は 何 です か。", o: ["通勤 時間 が 省ける こと。", "同僚 と の 会話 が 増える こと。", "会議 の 回数 が 増える こと。", "出社 する 日 が 増える こと。"], a: 0, e: "テレワークの大きな利点は、通勤時間が省けることだ。" }, { q: "テレワーク の 課題 として 挙げられて いる もの は どれ です か。", o: ["通勤 時間 が 長く なる こと。", "情報 の 共有 が 遅れる こと。", "家族 と の 時間 が 減る こと。", "仕事 の 量 が 減る こと。"], a: 1, e: "同僚とのコミュニケーションが減り、情報の共有が遅れることがあるからだ。" }, { q: "筆者 の 考え に 合う もの は どれ です か。", o: ["テレワーク は 今後 広がって いく と 考えられる。", "テレワーク は 廃止 すべき だ。", "全員 が 毎日 出社 すべき だ。", "テレワーク は 効率 を 下げる だけ だ。"], a: 0, e: "テレワークは、働き方の選択肢を広げるものとして、今後も広がっていくと考えられる。" }], exp: "Q1: bằng chứng 「テレワークの大きな利点は、通勤時間が省けることだ」nên đáp án là tiết kiệm thời gian đi lại; \"会話が増える\" sai vì bài nói giao tiếp giảm; \"会議の回数が増える\" và \"出社する日が増える\" không có trong bài nên sai. Q2: bằng chứng 「同僚とのコミュニケーションが減り、情報の共有が遅れることがある」nên đáp án là chia sẻ thông tin bị chậm; \"通勤時間が長くなる\" ngược với lợi ích đã nêu; \"家族との時間が減る\" và \"仕事の量が減る\" không có trong bài nên sai. Q3: bằng chứng 「テレワークは、働き方の選択肢を広げるものとして、今後も広がっていくと考えられる」nên đáp án đúng là telework sẽ còn lan rộng; \"廃止すべきだ\" \"全員が毎日出社すべきだ\" \"効率を下げるだけだ\" đều ngược với quan điểm của tác giả nên sai.", voc: "テレワーク：làm việc từ xa； 導入する（どうにゅうする）：đưa vào, áp dụng； 通勤（つうきん）：đi làm (di chuyển)； 省ける（はぶける）：tiết kiệm được, lược bỏ được； 同僚（どうりょう）：đồng nghiệp； 共有（きょうゆう）：chia sẻ； 出社する（しゅっしゃする）：đến công ty làm việc； 選択肢（せんたくし）：lựa chọn" },
  { p: "ストレス は、 現代 社会 に 生きる 人々 に とって、 避けられない もの だ。 仕事 の 締め切り に 追われたり、 人間関係 に 悩んだり する と、 誰 でも ストレス を 感じる。 ストレス が たまる と、 眠れなく なったり、 食欲 が なく なったり する だけでなく、 頭痛 や 肩こり など の 体 の 不調 が 現れる こと も ある。 さらに、 ストレス が 長く 続く と、 うつ病 など の 心 の 病気 に つながる おそれ も ある。 ストレス を 減らす ため に は、 まず 自分 の ストレス の 原因 を 知る こと が 大切 だ。 原因 が 分かれば、 仕事 の 進め方 を 変えたり、 周り の 人 に 相談 したり する こと が できる。 また、 適度 な 運動 や 趣味 の 時間 を 大切 に する こと も、 ストレス の 解消 に 効果的 だ。 体 を 動かす と、 気分 が すっきり し、 考え も 前向き に なる から だ。 ストレス を 完全 に なくす こと は できない が、 うまく 付き合って いく こと で、 心 と 体 の 健康 を 保つ こと が できる。", qs: [{ q: "ストレス が たまる と、 どう なる か。", o: ["眠れなく なったり、 体 の 不調 が 現れたり する。", "食欲 が 増えて、 元気 に なる。", "頭痛 が 治る。", "仕事 の 締め切り が なくなる。"], a: 0, e: "ストレスがたまると、眠れなくなったり、食欲がなくなったりするだけでなく、頭痛や肩こりなどの体の不調が現れることもある。" }, { q: "ストレス を 減らす ため に、 まず 何 を する こと が 大切 か。", o: ["ストレス の 原因 を 知る こと。", "仕事 を やめる こと。", "誰 とも 話さない こと。", "運動 を やめる こと。"], a: 0, e: "ストレスを減らすためには、まず自分のストレスの原因を知ることが大切だ。" }, { q: "筆者 の 考え に 合う もの は どれ です か。", o: ["ストレス は 完全 に なくす こと が できる。", "ストレス と うまく 付き合う こと で、 心 と 体 の 健康 を 保つ こと が できる。", "ストレス は 体 に 何 の 影響 も 与えない。", "ストレス の 原因 を 知る こと は 意味 が ない。"], a: 1, e: "ストレスを完全になくすことはできないが、うまく付き合っていくことで、心と体の健康を保つことができる。" }], exp: "Q1: bằng chứng 「ストレスがたまると、眠れなくなったり、食欲がなくなったりするだけでなく、頭痛や肩こりなどの体の不調が現れることもある」nên đáp án là mất ngủ và xuất hiện các triệu chứng khó chịu trong cơ thể; \"食欲が増えて、元気になる\" và \"頭痛が治る\" ngược với bài; \"仕事の締め切りがなくなる\" không có trong bài nên sai. Q2: bằng chứng 「ストレスを減らすためには、まず自分のストレスの原因を知ることが大切だ」nên đáp án là biết nguyên nhân gây stress của mình; \"仕事をやめる\" \"誰とも話さない\" \"運動をやめる\" đều không có trong bài nên sai. Q3: bằng chứng 「ストレスを完全になくすことはできないが、うまく付き合っていくことで、心と体の健康を保つことができる」nên đáp án đúng là không thể xóa bỏ hoàn toàn stress nhưng có thể chung sống tốt với nó để giữ sức khỏe; \"完全になくすことができる\" sai; \"体に何の影響も与えない\" ngược với bài; \"原因を知ることは意味がない\" ngược với bài nên sai.", voc: "ストレス：căng thẳng, stress； 現代社会（げんだいしゃかい）：xã hội hiện đại； 避けられない（さけられない）：không thể tránh được； 締め切り（しめきり）：hạn chót； 追われる（おわれる）：bị thúc ép； 人間関係（にんげんかんけい）：quan hệ giữa người với người； 悩む（なやむ）：lo lắng, phiền muộn； 食欲（しょくよく）：cảm giác thèm ăn； 頭痛（ずつう）：đau đầu； 肩こり（かたこり）：mỏi vai； 不調（ふちょう）：không khỏe, trục trặc； うつ病（うつびょう）：bệnh trầm cảm； 原因（げんいん）：nguyên nhân； 相談する（そうだんする）：bàn bạc, tâm sự； 適度な（てきどな）：vừa phải； 解消（かいしょう）：giải tỏa； 効果的（こうかてき）：hiệu quả； 前向き（まえむき）：tích cực, hướng về phía trước； 付き合う（つきあう）：chung sống, đối xử" }
 ],
 readL: [
  { p: "近年、 地球温暖化 が 世界的 な 問題 と なって いる。 地球 の 平均気温 は、 産業革命 の ころ と 比べて、 すでに 1度 以上 上がって いる と 言われて いる。 温暖化 の 主な 原因 は、 人間 の 活動 に よって 排出 される 二酸化炭素 など の 温室効果ガス だ。 工場 や 自動車 から 出る 排気ガス、 森林 の 減少 など が、 温室効果ガス の 増加 に つながって いる。 気温 が 上がる と、 海面 の 上昇 や 異常気象 など、 さまざま な 影響 が 現れる。 氷河 が 溶けて 海面 が 上がれば、 島国 や 沿岸 の 地域 で は、 土地 が 水 に 沈む おそれ が ある。 また、 猛暑 や 大雨、 干ばつ など の 異常気象 が 増え、 農業 にも 大きな 被害 が 出て いる。 こうした 問題 を 解決 する ため に は、 温室効果ガス の 排出 を 減らす こと が 欠かせない。 太陽光 や 風力 など の 再生可能エネルギー を 増やしたり、 電気 の 無駄 を 減らしたり する 取り組み が 世界中 で 進められて いる。 一方 で、 温暖化対策 に は、 国 や 企業 だけでなく、 一人一人 の 行動 も 大切 だ。 節電 や 公共交通機関 の 利用 など、 日常生活 の 中 で できる こと は 多い。 地球温暖化 は、 一つ の 国 だけ で は 解決 できない 問題 だ。 世界中 の 国々 が 協力 し、 長期的 な 視点 で 取り組んで いく こと が 求められて いる。", qs: [{ q: "地球温暖化 の 主な 原因 は 何 です か。", o: ["太陽 の 活動 が 活発 に なった こと。", "人間 の 活動 に よる 温室効果ガス の 排出。", "森林 が 増えた こと。", "海面 が 上昇 した こと。"], a: 1, e: "温暖化の主な原因は、人間の活動によって排出される二酸化炭素などの温室効果ガスだ。" }, { q: "気温 が 上がる と、 どのような 影響 が 現れる か。", o: ["海面 の 上昇 や 異常気象 など が 現れる。", "農業 の 被害 が なくなる。", "氷河 が 大きく なる。", "大雨 が 減る。"], a: 0, e: "気温が上がると、海面の上昇や異常気象など、さまざまな影響が現れる。" }, { q: "温暖化 問題 の 解決 の ため に、 述べられて いる 取り組み は どれ です か。", o: ["再生可能エネルギー を 増やしたり、 電気 の 無駄 を 減らしたり する こと。", "工場 を 増やす こと。", "森林 を 減らす こと。", "自動車 の 利用 を 増やす こと。"], a: 0, e: "太陽光や風力などの再生可能エネルギーを増やしたり、電気の無駄を減らしたりする取り組みが世界中で進められている。" }, { q: "筆者 の 考え に 合う もの は どれ です か。", o: ["温暖化 は 一つ の 国 だけ で 解決 できる。", "温暖化対策 に は、 一人一人 の 行動 も 大切 で、 世界 の 国々 の 協力 が 必要 だ。", "個人 の 行動 は 温暖化対策 に 何 の 意味 も ない。", "温暖化 は すでに 解決 した 問題 だ。"], a: 1, e: "温暖化対策には、国や企業だけでなく、一人一人の行動も大切だ。地球温暖化は、一つの国だけでは解決できない問題だ。世界中の国々が協力し、長期的な視点で取り組んでいくことが求められている。" }], exp: "Q1: bằng chứng 「温暖化の主な原因は、人間の活動によって排出される二酸化炭素などの温室効果ガスだ」nên đáp án là khí nhà kính do hoạt động của con người thải ra; \"太陽の活動が活発になった\" không có trong bài; \"森林が増えた\" ngược với bài（森林の減少); \"海面が上昇した\" là hậu quả chứ không phải nguyên nhân nên sai. Q2: bằng chứng 「気温が上がると、海面の上昇や異常気象など、さまざまな影響が現れる」nên đáp án là mực nước biển dâng và thời tiết bất thường; \"農業の被害がなくなる\" ngược với bài; \"氷河が大きくなる\" ngược với bài（氷河が溶ける); \"大雨が減る\" ngược với bài nên sai. Q3: bằng chứng 「太陽光や風力などの再生可能エネルギーを増やしたり、電気の無駄を減らしたりする取り組みが世界中で進められている」nên đáp án là tăng năng lượng tái tạo và giảm lãng phí điện; \"工場を増やす\" \"森林を減らす\" \"自動車の利用を増やす\" đều ngược với hướng giải quyết trong bài nên sai. Q4: bằng chứng 「温暖化対策には、国や企業だけでなく、一人一人の行動も大切だ」và「地球温暖化は、一つの国だけでは解決できない問題だ。世界中の国々が協力し、長期的な視点で取り組んでいくことが求められている」nên đáp án đúng là hành động của mỗi người cũng quan trọng và cần sự hợp tác của các nước trên thế giới; \"一つの国だけで解決できる\" ngược với bài; \"個人の行動は何の意味もない\" ngược với bài; \"すでに解決した問題だ\" sai vì bài nói vấn đề đang diễn ra nên sai.", voc: "地球温暖化（ちきゅうおんだんか）：sự nóng lên toàn cầu； 平均気温（へいきんきおん）：nhiệt độ trung bình； 産業革命（さんぎょうかくめい）：cách mạng công nghiệp； 排出する（はいしゅつする）：thải ra； 二酸化炭素（にさんかたんそ）：khí CO2； 温室効果ガス（おんしつこうかガス）：khí nhà kính； 排気ガス（はいきガス）：khí thải； 森林（しんりん）：rừng； 海面（かいめん）：mặt nước biển； 上昇（じょうしょう）：tăng lên, dâng lên； 異常気象（いじょうきしょう）：thời tiết bất thường； 氷河（ひょうが）：sông băng； 溶ける（とける）：tan chảy； 沿岸（えんがん）：ven biển； 沈む（しずむ）：chìm； 猛暑（もうしょ）：nắng nóng gay gắt； 干ばつ（かんばつ）：hạn hán； 農業（のうぎょう）：nông nghiệp； 被害（ひがい）：thiệt hại； 欠かせない（かかせない）：không thể thiếu； 太陽光（たいようこう）：ánh sáng mặt trời； 風力（ふうりょく）：sức gió； 再生可能エネルギー（さいせいかのうエネルギー）：năng lượng tái tạo； 無駄（むだ）：lãng phí； 取り組み（とりくみ）：nỗ lực, biện pháp； 節電（せつでん）：tiết kiệm điện； 公共交通機関（こうきょうこうつうきかん）：phương tiện giao thông công cộng； 協力する（きょうりょくする）：hợp tác； 視点（してん）：góc nhìn, quan điểm" }
 ],
 tougou: [
  { p1: "キャッシュレス 決済 は、 現金 を 持ち歩く 必要 が なく、 支払い が 速い という 利点 が ある。 また、 利用 履歴 が 記録 される ため、 家計 の 管理 が しやすく なる。 店側 にとっても、 現金 の 管理 や 釣り銭 の 準備 の 手間 が 省ける。 さらに、 衛生面 でも、 現金 に 触れる 機会 が 減る こと は 望ましい。 こうした 理由 から、 キャッシュレス 決済 は 今後 ますます 広がる べき だ と 考える。", p2: "一方 で、 キャッシュレス 決済 に は 課題 も ある。 スマートフォン や カード が なければ 支払い が できず、 災害時 に システム が 止まれば、 買い物 が できなく なる 恐れ が ある。 また、 高齢者 の 中 に は、 使い方 が 分からず、 不安 を 感じる 人 も 多い。 さらに、 使いすぎ を 防ぐ ため に は、 現金 の よう に 目 に 見える 形 で お金 を 管理 する こと も 大切 だ。 その ため、 現金 と キャッシュレス を 併用 する こと が 現実的 だ と 考える。", qs: [{ q: "A の 主張 は どれ か。", o: ["キャッシュレス 決済 は 今後 ますます 広がる べき だ。", "現金 のみ を 使う べき だ。", "キャッシュレス 決済 は 廃止 すべき だ。", "現金 と キャッシュレス を 併用 する べき だ。"], a: 0, e: "こうした理由から、キャッシュレス決済は今後ますます広がるべきだと考える。" }, { q: "B の 主張 は どれ か。", o: ["キャッシュレス 決済 を すぐに 全面 導入 する べき だ。", "現金 と キャッシュレス を 併用 する こと が 現実的 だ。", "現金 は 完全に 不要 だ。", "高齢者 は キャッシュレス を 使う べき では ない。"], a: 1, e: "そのため、現金とキャッシュレスを併用することが現実的だと考える。" }, { q: "A と B の 違い は どれ か。", o: ["A は キャッシュレス の 拡大 を 主張 し、 B は 現金 と の 併用 を 主張 して いる。", "A は 現金 の 併用 を 主張 し、 B は キャッシュレス の 拡大 を 主張 して いる。", "A も B も 現金 のみ を 使う べき だ と 主張 して いる。", "A も B も キャッシュレス を 廃止 する べき だ と 主張 して いる。"], a: 0, e: "Aは「今後ますます広がるべきだ」、Bは「現金とキャッシュレスを併用することが現実的だ」と述べている。" }], exp: "Q1: bằng chứng trong A: 「こうした理由から、キャッシュレス決済は今後ますます広がるべきだと考える」nên A chủ trương mở rộng thanh toán không tiền mặt; \"現金のみを使うべきだ\" và \"廃止すべきだ\" ngược với A; \"併用するべきだ\" là主張 của B chứ không phải A nên sai. Q2: bằng chứng trong B: 「そのため、現金とキャッシュレスを併用することが現実的だと考える」nên B chủ trương dùng song song tiền mặt và không tiền mặt; \"すぐに全面導入するべきだ\" là主張 của A; \"現金は完全に不要だ\" ngược với B; \"高齢者は使うべきではない\" không có trong B nên sai. Q3: A主張拡大キャッシュレス, B主張併用 — đáp án đúng nêu đúng sự khác biệt này; đáp án thứ hai đảo ngược A và B nên sai; hai đáp án còn lại đều sai vì không ai chủ trương chỉ dùng tiền mặt hay bãi bỏ thanh toán không tiền mặt.", voc: "キャッシュレス決済（キャッシュレスけっさい）：thanh toán không dùng tiền mặt； 現金（げんきん）：tiền mặt； 履歴（りれき）：lịch sử (giao dịch)； 家計（かけい）：chi tiêu gia đình； 釣り銭（つりせん）：tiền thừa, tiền thối lại； 衛生面（えいせいめん）：mặt vệ sinh； 災害時（さいがいじ）：khi có thiên tai； 併用する（へいようする）：dùng song song； 現実的（げんじつてき）：thực tế" }
 ],
 shuchou: [
  { p: "近年、 スマートフォン の 普及 に より、 本 を 読む 人 が 減って いる と いわれる。 確かに、 短い 文章 や 動画 で 情報 を 得る こと は 手軽 だ。 しかし、 私 は、 読書 の 価値 は 決して 失われて いない と 考える。 読書 を 通じて、 人 は 他人 の 考え方 や 感情 に 触れ、 自分 の 世界 を 広げる こと が できる。 短い 情報 では 得られない 深い 理解 や、 長い 文章 を 追う 集中力 は、 読書 に よって こそ 育まれる。 また、 読書 は、 自分 の ペース で 考える 時間 を 与えて くれる。 動画 の よう に 次々 と 情報 が 流れて くる の と は 違い、 本 を 読む とき、 人 は 立ち止まって 考える こと が できる のだ。 読書 は、 言葉 の 数 を 増やし、 表現力 を 高める 効果 も ある。 本 の 中 の さまざま な 言葉 に 触れる こと で、 自分 の 考え を 言葉 に する 力 が 育つ のだ。 さらに、 物語 を 読む こと は、 想像力 を 豊か に する。 登場人物 の 気持ち を 想像 しながら 読み進める こと で、 他人 を 理解 する 力 も 深まる。 こうした 力 は、 仕事 や 日常 生活 の 中 でも 役に立つ。 もちろん、 スマートフォン や 動画 が 無意味 だ と いう のでは ない。 それぞれ に 良さ が ある。 ただ、 手軽 さ だけ を 求めて 読書 を 手放して しまう の は、 大きな 損失 だ。 私 たち は、 日常 の 中 に 読書 の 時間 を 取り戻す べき だ。 一 日 10分 でも よい。 本 を 開く 習慣 こそ、 豊か な 思考 を 育てる 第一歩 だ と 私 は 主張 したい。", qs: [{ q: "筆者 の 主張 は どれ か。", o: ["日常 の 中 に 読書 の 時間 を 取り戻す べき だ。", "スマートフォン を 使う の を やめる べき だ。", "本 を 読む 人 は 増えて いる。", "動画 は 無意味 だ。"], a: 0, e: "私たちは、日常の中に読書の時間を取り戻すべきだ。" }, { q: "筆者 に よると、 読書 の 良さ は 何 か。", o: ["短い 時間 で 多く の 情報 を 得られる こと。", "動画 より 手軽 だ という こと。", "他人 の 考え方 に 触れ、 深い 理解 や 集中力 を 育む こと。", "スマートフォン が 不要 に なる こと。"], a: 2, e: "読書を通じて、人は他人の考え方や感情に触れ、自分の世界を広げることができる。" }, { q: "筆者 が スマートフォン や 動画 について どう 考えて いる か。", o: ["無意味 だ と 考えて いる。", "それぞれ に 良さ が ある と 考えて いる。", "読書 より 優れて いる と 考えて いる。", "使う べき では ない と 考えて いる。"], a: 1, e: "もちろん、スマートフォンや動画が無意味だというのでははない。それぞれに良さがある。" }, { q: "「一日 10分 でも よい」 と 筆者 が 言う 理由 は 何 か。", o: ["10分 以上 読んでは いけない から。", "10分 で 本 が 一冊 読める から。", "スマートフォン を 10分 だけ 使う べき だ から。", "短い 時間 でも、 本 を 開く 習慣 が 豊か な 思考 を 育てる から。"], a: 3, e: "一日10分でもよい。本を開く習慣こそ、豊かな思考を育てる第一歩だ。" }], exp: "Q1（主張）: bằng chứng 「私たちは、日常の中に読書の時間を取り戻すべきだ」nên主張 của tác giả là hãy lấy lại thời gian đọc sách trong đời sống hằng ngày; \"スマートフォンを使うのをやめるべきだ\" sai vì tác giả thừa nhận mỗi thứ đều có cái hay; \"本を読む人は増えている\" ngược với bài（読む人が減っている); \"動画は無意味だ\" ngược với bài（無意味だというのでははない). Q2: bằng chứng 「読書を通じて、人は他人の考え方や感情に触れ、自分の世界を広げることができる」và「深い理解や、長い文章を追う集中力は、読書によってこそ育まれる」nên đáp án đúng là tiếp xúc với cách nghĩ của người khác, nuôi dưỡng hiểu biết sâu và khả năng tập trung; \"短い時間で多くの情報を得られる\" là ưu điểm của thông tin ngắn/動画 chứ không phải đọc sách; \"動画より手軽だ\" ngược với bài; \"スマートフォンが不要になる\" không có trong bài. Q3: bằng chứng 「もちろん、スマートフォンや動画が無意味だというのでははない。それぞれに良さがある」nên tác giả cho rằng mỗi thứ đều có cái hay; các đáp án còn lại đều ngược với câu này nên sai. Q4: bằng chứng 「一日10分でもよい。本を開く習慣こそ、豊かな思考を育てる第一歩だ」nên lý do là dù chỉ 10 phút, thói quen mở sách cũng nuôi dưỡng tư duy phong phú; \"10分以上読んではいけない\" \"10分で本が一冊読める\" \"スマートフォンを10分だけ使うべきだ\" đều không có trong bài nên sai.", voc: "読書（どくしょ）：việc đọc sách； 普及（ふきゅう）：phổ biến； 手軽（てがる）：tiện lợi, dễ dàng； 価値（かち）：giá trị； 他人（たにん）：người khác； 感情（かんじょう）：cảm xúc； 理解（りかい）：sự hiểu biết； 集中力（しゅうちゅうりょく）：khả năng tập trung； 育む（はぐくむ）：nuôi dưỡng； 立ち止まる（たちどまる）：dừng lại； 損失（そんしつ）：tổn thất； 取り戻す（とりもどす）：lấy lại； 習慣（しゅうかん）：thói quen； 思考（しこう）：tư duy" }
 ],
 info: [
  { tpl: "<b>A スポーツジム「さくら」のお知らせ</b><br>休館日：毎週月曜日と15日です。<br>ヨガクラス：火曜日と木曜日の10時〜11時です。体験は1回1,000円です。<br><b>B カレンダー（12月）</b><br><table class=\"jl-cal\"><tr><th>月</th><th>火</th><th>水</th><th>木</th><th>金</th><th>土</th><th>日</th></tr><tr><td></td><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td></tr><tr><td>7</td><td>8</td><td>9</td><td>10</td><td>11</td><td>12</td><td>13</td></tr><tr><td>14</td><td>15</td><td>16</td><td>17</td><td>18</td><td>19</td><td>20</td></tr><tr><td>21</td><td>22</td><td>23</td><td>24</td><td>25</td><td>26</td><td>27</td></tr><tr><td>28</td><td>29</td><td>30</td><td>31</td><td></td><td></td><td></td></tr></table>", inst: "つぎのA「スポーツジムのお知らせ」とBのカレンダーを見て、質問に答えてください。", q: "山田さんは12月の第2週の火曜日にヨガの体験をしたいです。参加できる日はどれですか。", opts: ["12月1日", "12月8日", "12月15日", "12月22日"], ans: 1, exp: "Lớp yoga có vào thứ Ba và thứ Năm. Tra lịch tháng 12 thì các ngày thứ Ba là 1, 8, 15, 22. Thứ Ba của tuần thứ hai là ngày 8. Ngày 15 cũng là thứ Ba nhưng là ngày nghỉ館 (mỗi thứ Hai và ngày 15) nên không tham gia được. Ngày 1 là tuần thứ nhất, ngày 22 là tuần thứ tư nên sai. Đáp án là ngày 8 tháng 12.", voc: "休館日（きゅうかんび）：ngày đóng cửa； ヨガ：yoga； 体験（たいけん）：trải nghiệm； 参加する（さんかする）：tham gia" },
  { tpl: "<b>A 料理教室「はな」のお知らせ</b><br>和食コース：毎週土曜日14時〜16時です。洋食コース：毎週日曜日14時〜16時です。<br>申し込みの締め切りは、開催日の3日前です。<br><b>B カレンダー（12月）</b><br><table class=\"jl-cal\"><tr><th>月</th><th>火</th><th>水</th><th>木</th><th>金</th><th>土</th><th>日</th></tr><tr><td></td><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td></tr><tr><td>7</td><td>8</td><td>9</td><td>10</td><td>11</td><td>12</td><td>13</td></tr><tr><td>14</td><td>15</td><td>16</td><td>17</td><td>18</td><td>19</td><td>20</td></tr><tr><td>21</td><td>22</td><td>23</td><td>24</td><td>25</td><td>26</td><td>27</td></tr><tr><td>28</td><td>29</td><td>30</td><td>31</td><td></td><td></td><td></td></tr></table>", inst: "つぎのA「料理教室のお知らせ」とBのカレンダーを見て、質問に答えてください。", q: "佐藤さんは12月19日の和食コースに参加したいです。申し込みの締め切りはいつですか。", opts: ["12月16日", "12月17日", "12月18日", "12月19日"], ans: 0, exp: "Khóa học món Nhật diễn ra vào mỗi thứ Bảy. Tra lịch thì ngày 19 tháng 12 là thứ Bảy. Hạn đăng ký là 3 ngày trước ngày tổ chức, nên 3 ngày trước ngày 19 là ngày 16 (thứ Tư). Ngày 17 là 2 ngày trước, ngày 18 là 1 ngày trước, ngày 19 là đúng ngày tổ chức nên đều sai. Đáp án là ngày 16 tháng 12.", voc: "和食（わしょく）：món ăn Nhật； 洋食（ようしょく）：món ăn Tây； 締め切り（しめきり）：hạn chót； 開催日（かいさいび）：ngày tổ chức" }
 ]
};

/* ----- Test 6 ----- */
window.WRITTEN_N1_SET6 = {
  yomi: [
  {
    "s": "彼女 は 卓越 した 才能 を 持って いる。",
    "t": "卓越",
    "r": "たくえつ",
    "w": ["たくえち", "だくえつ", "たくえっ"],
    "exp": "卓越 đọc là たくえつ（卓 たく、越 えつ）— nghĩa là xuất sắc, vượt trội. たくえち đọc sai 越 thành えち、だくえつ đọc sai 卓 thành だく、たくえっ thiếu âm つ ở cuối nên đều sai.",
    "voc": "卓越（たくえつ）：xuất sắc, vượt trội； 才能（さいのう）：tài năng； 持つ（もつ）：có, sở hữu"
  },
  {
    "s": "彼 は 支払い の 猶予 を 求めた。",
    "t": "猶予",
    "r": "ゆうよ",
    "w": ["ゆうよう", "ゆよ", "ゆうゆ"],
    "exp": "猶予 đọc là ゆうよ（猶 ゆう、予 よ）— nghĩa là sự hoãn lại, gia hạn. ゆうよう thêm う thừa ở cuối、ゆよ thiếu âm う、ゆうゆ đọc sai 予 thành ゆ nên đều sai.",
    "voc": "猶予（ゆうよ）：sự hoãn lại, gia hạn； 支払い（しはらい）：sự thanh toán, trả tiền； 求める（もとめる）：yêu cầu, xin"
  },
  {
    "s": "長い 雨 が 続き、 憂鬱 な 気分 に なった。",
    "t": "憂鬱",
    "r": "ゆううつ",
    "w": ["ゆういつ", "ゆううつう", "ゆうつ"],
    "exp": "憂鬱 đọc là ゆううつ（憂 ゆう、鬱 うつ）— nghĩa là u sầu, ảm đạm. ゆういつ đọc sai 鬱 thành いつ、ゆううつう thêm う thừa ở cuối、ゆうつ thiếu âm う nên đều sai.",
    "voc": "憂鬱（ゆううつ）：u sầu, ảm đạm； 気分（きぶん）：tâm trạng； 長い（ながい）：dài； 続く（つづく）：kéo dài"
  },
  {
    "s": "怠惰 な 生活 を 続けて いる と、 健康 を 損なう。",
    "t": "怠惰",
    "r": "たいだ",
    "w": ["たいだく", "だいだ", "たいだあ"],
    "exp": "怠惰 đọc là たいだ（怠 たい、惰 だ）— nghĩa là lười biếng, biếng nhác. たいだく đọc sai 惰 thành だく、だいだ đọc sai 怠 thành だい、たいだあ thêm あ thừa ở cuối nên đều sai.",
    "voc": "怠惰（たいだ）：lười biếng, biếng nhác； 生活（せいかつ）：cuộc sống； 健康（けんこう）：sức khỏe； 損なう（そこなう）：làm hại, làm tổn hại"
  },
  {
    "s": "二人 の 間 に は、 深い 矛盾 が あった。",
    "t": "矛盾",
    "r": "むじゅん",
    "w": ["むじゅんう", "ぼじゅん", "むしゅん"],
    "exp": "矛盾 đọc là むじゅん（矛 む、盾 じゅん）— nghĩa là mâu thuẫn. むじゅんう thêm う thừa ở cuối、ぼじゅん đọc sai 矛 thành ぼ、むしゅん đọc sai 盾 thành しゅん nên đều sai.",
    "voc": "矛盾（むじゅん）：mâu thuẫn； 深い（ふかい）：sâu sắc； 間（あいだ）：giữa, khoảng"
  },
  {
    "s": "彼 は 試験 の 結果 に 対する 懸念 を 隠せなかった。",
    "t": "懸念",
    "r": "けねん",
    "w": ["けんねん", "げねん", "けね"],
    "exp": "懸念 đọc là けねん（懸 けん、念 ねん）— nghĩa là lo ngại, quan ngại. けんねん đọc sai 念 thành ねん với âm けん (thừa ん ở giữa), げねん đọc sai 懸 thành げ、けね thiếu âm ん ở cuối nên đều sai.",
    "voc": "懸念（けねん）：lo ngại, quan ngại； 試験（しけん）：kỳ thi； 結果（けっか）：kết quả； 隠す（かくす）：che giấu"
  }
  ],
  ctx: [
  {
    "s": "彼 の 発言 は、 会場 に 大きな （　）を 呼んだ。",
    "a": "反響",
    "w": ["反応", "反対", "反論"],
    "exp": "反響 nghĩa là tiếng vang, sự hưởng ứng mạnh — 発言が会場に大きな反響を呼んだ = lời phát biểu đã gây tiếng vang lớn trong hội trường. 反対 (phản đối) và 反論 (phản bác) không đi với を呼んだ trong ngữ cảnh này. Lưu ý: 反応を呼ぶ cũng đôi khi xuất hiện, nhưng 反響を呼ぶ mới là cách kết hợp chuẩn và tự nhiên nhất — xem VERIFICATION-set6.md.",
    "voc": "発言（はつげん）：phát biểu； 会場（かいじょう）：hội trường； 反響（はんきょう）：tiếng vang, sự hưởng ứng； 呼ぶ（よぶ）：gây ra, gọi"
  },
  {
    "s": "新しい 法律 は、 来年 四月 一日 から （　）される。",
    "a": "施行",
    "w": ["運営", "実行", "開始"],
    "exp": "施行 (しこう) là từ chuyên dùng cho luật pháp bắt đầu có hiệu lực — 法律が施行される = luật được thi hành. 運営 (vận hành, quản lý) dùng cho 組織・事業・施設, không bao giờ dùng cho 法律 nên rõ ràng sai. 実行 (thực hiện) dùng cho chính sách, kế hoạch, không dùng cho luật có hiệu lực; 開始 (bắt đầu) quá chung chung và không kết hợp với 法律 trong dạng bị động này.",
    "voc": "法律（ほうりつ）：luật pháp； 施行（しこう）：thi hành, có hiệu lực； 来年（らいねん）：năm sau； 四月一日（しがつついたち）：ngày 1 tháng 4"
  },
  {
    "s": "彼 は 任期 を （　）し、 退任 した。",
    "a": "全う",
    "w": ["達成", "終了", "遂行"],
    "exp": "任期を全うする là cách kết hợp cố định, nghĩa là hoàn thành trọn vẹn nhiệm kỳ. 達成する (đạt được) đi với 目標・記録・成果, không đi với 任期を nên sai; 終了 (kết thúc) không đi với 任期を trong dạng này; 遂行 (thực hiện) dùng cho 任務・職務, không dùng cho 任期.",
    "voc": "任期（にんき）：nhiệm kỳ； 全うする（まっとうする）：hoàn thành trọn vẹn； 退任（たいにん）：rời nhiệm sở, mãn nhiệm"
  },
  {
    "s": "この 講座 は、 年齢 や 経験 を （　）、 誰でも 参加 できます。",
    "a": "問わず",
    "w": ["かかわらず", "関係なく", "別に"],
    "exp": "年齢や経験を問わず là mẫu cố định với trợ từ を — 問わず đi sau を, nghĩa là bất kể tuổi tác hay kinh nghiệm. かかわらず phải đi với に (〜にかかわらず) nên không dùng được sau を; 関係なく cũng cần に・は; 別に không kết hợp với を trong cấu trúc này.",
    "voc": "講座（こうざ）：khóa học； 年齢（ねんれい）：tuổi tác； 経験（けいけん）：kinh nghiệm； 問わず（とわず）：bất kể, không phân biệt"
  },
  {
    "s": "彼 は 夢 を かなえる ため、 努力 を （　）なかった。",
    "a": "惜しま",
    "w": ["節約する", "ケチる", "減らす"],
    "exp": "努力を惜しまなかった là cách nói cố định, nghĩa là không tiếc công sức, dốc hết sức lực vì ước mơ — 惜しむ (tiếc) ở dạng 惜しまなかった. Các đáp án gây nhiễu đều sai dạng: 節約する・ケチる・減らす là dạng từ điển, không thể đứng trực tiếp trước なかった (động từ trước なかった phải ở dạng ない: 節約しなかった, ケチらなかった, 減らさなかった). Ngoài ra, 努力を節約する・努力をケチる cũng không phải cách kết hợp tự nhiên.",
    "voc": "夢（ゆめ）：giấc mơ； かなえる：thực hiện, biến thành hiện thực； 努力（どりょく）：nỗ lực； 惜しむ（おしむ）：tiếc, không tiếc"
  },
  {
    "s": "彼 は、 プロ の 選手 に なる 夢 を （　）し、 地元 で 教師 に なった。",
    "a": "断念",
    "w": ["破棄", "あきらめ", "断る"],
    "exp": "夢を断念する nghĩa là từ bỏ giấc mơ sau nhiều nỗ lực — 断念 là từ trang trọng dùng cho việc từ bỏ ước mơ, mục tiêu. 破棄 (hủy bỏ) dùng cho 契約・書類・データ, không bao giờ dùng cho 夢 nên rõ ràng sai. あきらめ và 断る sai dạng: あきらめる là động từ nhóm る nên không nối với し (あきらめし là sai), 断る cũng không nối với し được.",
    "voc": "選手（せんしゅ）：vận động viên； 夢（ゆめ）：giấc mơ； 断念する（だんねんする）：từ bỏ (ước mơ, mục tiêu)； 地元（じもと）：quê hương, địa phương； 教師（きょうし）：giáo viên"
  },
  {
    "s": "彼 は、 未来 へ の 希望 を 若い 世代 に （　）した。",
    "a": "託す",
    "w": ["預ける", "渡す", "任せる"],
    "exp": "希望を託す là cách kết hợp cố định, nghĩa là gửi gắm hy vọng vào thế hệ trẻ. 預ける (gửi giữ) dùng cho đồ vật, tiền bạc; 渡す (trao, đưa) dùng cho vật cụ thể; 任せる (giao phó) dùng cho công việc, trách nhiệm — cả ba đều không kết hợp tự nhiên với 希望を.",
    "voc": "未来（みらい）：tương lai； 希望（きぼう）：hy vọng； 世代（せだい）：thế hệ； 託す（たくす）：gửi gắm, phó thác"
  }
  ],
  syn: [
  {
    "s": "この 調査 は 広範 な 地域 を 対象 と して いる。",
    "t": "広範",
    "a": "ひろい",
    "w": ["せまい", "かぎられた", "ちいさい"],
    "exp": "広範 nghĩa là rộng, bao quát — 広範な地域 = vùng rộng lớn, nên từ đồng nghĩa gần nhất là ひろい (rộng). せまい (hẹp)、かぎられた (hạn chế)、ちいさい (nhỏ) đều mang nghĩa ngược hoặc không phù hợp.",
    "voc": "広範（こうはん）：rộng, bao quát； 調査（ちょうさ）：điều tra, khảo sát； 地域（ちいき）：khu vực； 対象（たいしょう）：đối tượng"
  },
  {
    "s": "彼 は 寛大 な 心 で、 部下 の 失敗 を 許した。",
    "t": "寛大",
    "a": "心が広い",
    "w": ["心が狭い", "厳しい", "冷たい"],
    "exp": "寛大 nghĩa là rộng lượng, bao dung — 寛大な心 = tấm lòng rộng lượng, nên đồng nghĩa với 心が広い (lòng dạ rộng rãi). 心が狭い (hẹp hòi) là nghĩa ngược; 厳しい (nghiêm khắc) cũng ngược với bao dung; 冷たい (lạnh lùng, vô cảm) không phải nghĩa của 寛大.",
    "voc": "寛大（かんだい）：rộng lượng, bao dung； 心（こころ）：tấm lòng； 部下（ぶか）：cấp dưới； 失敗（しっぱい）：thất bại； 許す（ゆるす）：tha thứ； 心が広い：lòng dạ rộng rãi"
  },
  {
    "s": "彼 は 慎重 な 性格 で、 決断 に 時間 が かかる。",
    "t": "慎重",
    "a": "用心深い",
    "w": ["大胆な", "軽率な", "そそっかしい"],
    "exp": "慎重 nghĩa là thận trọng, cẩn thận — 慎重な性格 = tính cách cẩn thận, nên đồng nghĩa với 用心深い (cẩn trọng, hay đề phòng). 大胆な (táo bạo)、軽率な (khinh suất)、そそっかしい (hấp tấp, cẩu thả) đều là nghĩa ngược.",
    "voc": "慎重（しんちょう）：thận trọng, cẩn thận； 性格（せいかく）：tính cách； 決断（けつだん）：quyết định； 用心深い（ようじんぶかい）：cẩn trọng"
  },
  {
    "s": "この 地域 は、 豊富 な 水資源 に 恵まれて いる。",
    "t": "豊富",
    "a": "おおい",
    "w": ["すくない", "乏しい", "限られた"],
    "exp": "豊富 nghĩa là phong phú, dồi dào — 豊富な水資源 = nguồn nước dồi dào, nên đồng nghĩa với おおい (nhiều). すくない (ít)、乏しい (thiếu thốn)、限られた (hạn chế) đều là nghĩa ngược.",
    "voc": "豊富（ほうふ）：phong phú, dồi dào； 水資源（みずしげん）：nguồn nước； 恵まれる（めぐまれる）：được ban tặng, được hưởng； 地域（ちいき）：khu vực"
  },
  {
    "s": "彼 の 返信 は 簡潔 で、 要点 だけ が 書かれて いた。",
    "t": "簡潔",
    "a": "みじかい",
    "w": ["ながい", "詳しい", "くどい"],
    "exp": "簡潔 nghĩa là ngắn gọn, súc tích — 簡潔な返信 = thư trả lời ngắn gọn chỉ viết những điểm chính, nên đồng nghĩa với みじかい (ngắn). ながい (dài)、詳しい (chi tiết)、くどい (dài dòng, rườm rà) đều không phải nghĩa của 簡潔.",
    "voc": "簡潔（かんけつ）：ngắn gọn, súc tích； 返信（へんしん）：thư trả lời； 要点（ようてん）：điểm chính"
  },
  {
    "s": "彼 の 穏健 な 態度 が、 対立 を 和らげた。",
    "t": "穏健",
    "a": "おだやかな",
    "w": ["激しい", "過激な", "急進的な"],
    "exp": "穏健 nghĩa là ôn hòa, chừng mực — 穏健な態度 = thái độ ôn hòa, nên đồng nghĩa với おだやかな (ôn hòa, điềm đạm). 激しい (mạnh mẽ, dữ dội)、過激な (cực đoan)、急進的な (cấp tiến, quá khích) đều mang nghĩa ngược hoặc không phù hợp.",
    "voc": "穏健（おんけん）：ôn hòa, chừng mực； 態度（たいど）：thái độ； 対立（たいりつ）：đối lập, mâu thuẫn； 和らげる（やわらげる）：làm dịu đi； おだやか：ôn hòa, điềm đạm"
  }
  ],
  yoho: [
  {
    "t": "堅実",
    "s": [
      "彼 は 堅実 な 雨 に ぬれた。",
      "この 料理 は 堅実 に 辛い です。",
      "彼女 は 堅実 な 歌 を 歌った。",
      "彼 は 堅実 な 経営 を 続けて いる。"
    ],
    "a": 3,
    "exp": "堅実 nghĩa là vững chắc, chắc chắn, đáng tin cậy — dùng cho 経営 (kinh doanh), やり方, 性格など. Chỉ có câu 4 堅実な経営を続けている (tiếp tục kinh doanh một cách vững chắc) là đúng. 堅実な雨、堅実に辛い、堅実な歌 đều sai vì 堅実 không dùng cho thời tiết, vị cay hay bài hát.",
    "voc": "堅実（けんじつ）：vững chắc, chắc chắn, đáng tin cậy； 経営（けいえい）：kinh doanh； 続ける（つづける）：tiếp tục"
  },
  {
    "t": "せっかく",
    "s": [
      "せっかく 日本 に 来た のだから、 富士山 を 見に 行きましょう。",
      "せっかく 毎朝 早く 起きる。",
      "せっかく 水 を 飲んで 喉 が 渇いた。",
      "せっかく 雨 が 降って 傘 を さした。"
    ],
    "a": 0,
    "exp": "せっかく dùng khi có một dịp đặc biệt hoặc đã bỏ công sức — せっかく日本に来たのだから (đã cất công đến Nhật rồi thì...) nên câu 1 đúng. Câu 2 sai vì dậy sớm mỗi sáng là thói quen thường ngày, không phải dịp đặc biệt. Câu 3 sai vì mâu thuẫn: uống nước mà vẫn khát. Câu 4 sai vì trời mưa rồi che ô là chuyện bình thường, không có ý 'đã cất công'.",
    "voc": "せっかく：đã cất công, nhân dịp hiếm có； 富士山（ふじさん）：núi Phú Sĩ； 喉（のど）：cổ họng； 渇く（かわく）：khát"
  },
  {
    "t": "わざわざ",
    "s": [
      "彼 は わざわざ 毎日 歯 を 磨く。",
      "彼 は わざわざ 遠く から 会いに 来て くれた。",
      "彼女 は わざわざ 水 を 飲んだ。",
      "彼 は わざわざ 静かに 歩いた。"
    ],
    "a": 1,
    "exp": "わざわざ nghĩa là cất công, phiền phức mà vẫn làm — chỉ dùng khi hành động có sự vất vả, tốn công đặc biệt. Câu 2 わざわざ遠くから会いに来てくれた (đã cất công từ xa đến gặp) là đúng. Câu 1 sai vì đánh răng hằng ngày là việc thường lệ. Câu 3 sai vì uống nước không tốn công gì. Câu 4 sai vì đi khẽ không phải hành động tốn công.",
    "voc": "わざわざ：cất công, phiền phức mà vẫn làm； 遠く（とおく）：xa； 会う（あう）：gặp； 歯を磨く（はをみがく）：đánh răng"
  },
  {
    "t": "さすが",
    "s": [
      "さすが 雨 が 降って きた。",
      "さすが 彼 は 毎日 学校 に 行く。",
      "さすが プロ の 選手 だ、 動き が 速い。",
      "さすが この 本 は 高い。"
    ],
    "a": 2,
    "exp": "さすが nghĩa là 'đúng như mong đợi, quả không hổ danh' — dùng khi đánh giá ai đó xứng với danh tiếng của họ. Câu 3 さすがプロの選手だ、動きが速い (quả là tuyển thủ chuyên nghiệp, động tác nhanh) là đúng. Câu 1 sai vì mưa rơi không liên quan đến danh tiếng ai. Câu 2 sai vì đi học hằng ngày là việc thường lệ, không phải điều đáng khen ngợi theo danh tiếng. Câu 4 sai vì sách đắt không phải là điều 'đúng như mong đợi' về một người.",
    "voc": "さすが：quả không hổ danh, đúng như mong đợi； プロ：chuyên nghiệp； 選手（せんしゅ）：vận động viên； 動き（うごき）：động tác, cử động"
  },
  {
    "t": "むしろ",
    "s": [
      "彼 は むしろ 毎日 走る。",
      "彼女 は むしろ ご飯 を 食べた。",
      "彼 は むしろ 静かな 部屋 に 住んで いる。",
      "彼 は 成功 を 喜ぶ どころか、 むしろ 不安 を 感じた。"
    ],
    "a": 3,
    "exp": "むしろ nghĩa là 'trái lại, ngược lại thì...' — dùng khi phủ nhận điều người ta tưởng rồi đưa ra điều ngược lại. Câu 4 成功を喜ぶどころか、むしろ不安を感じた (thay vì vui mừng vì thành công, ngược lại anh ấy lại thấy bất an) là đúng. Câu 1, 2, 3 sai vì không có sự đối lập hay phủ nhận nào: chạy hằng ngày, ăn cơm, sống trong phòng yên tĩnh đều là câu kể đơn thuần, không có gì để 'trái lại'.",
    "voc": "むしろ：trái lại, ngược lại thì； 成功（せいこう）：thành công； 喜ぶ（よろこぶ）：vui mừng； 不安（ふあん）：bất an, lo lắng"
  },
  {
    "t": "なるべく",
    "s": [
      "なるべく 雨 が 降って ほしい。",
      "なるべく 早く 来て ください。",
      "なるべく 彼 は 走った。",
      "なるべく この 本 は 重い。"
    ],
    "a": 1,
    "exp": "なるべく nghĩa là 'càng ... càng tốt, nếu có thể' — dùng với hành động hoặc mức độ mà người nói mong muốn. Câu 2 なるべく早く来てください (nếu được thì đến càng sớm càng tốt) là đúng. Câu 1 sai vì mưa là hiện tượng tự nhiên, không phải hành động có thể điều chỉnh mức độ. Câu 3 sai vì なるべく không đi với câu kể quá khứ đơn thuần. Câu 4 sai vì なるべく không bổ nghĩa cho tính từ miêu tả trạng thái như 重い.",
    "voc": "なるべく：càng ... càng tốt, nếu có thể； 早く（はやく）：sớm, nhanh； 降る（ふる）：rơi (mưa)； 重い（おもい）：nặng"
  }
  ],
  g1dlg: [
  {
    "d": ["来年度 の 方針 は、 どう 決める の です か。", "今年 の 結果 （　）、 各 部署 と 相談 して 決める 予定 です。"],
    "a": "を踏まえて",
    "w": ["を踏まえた", "を踏まえれば", "を踏まえたら"],
    "p": "N + を踏まえて",
    "exp": "〜を踏まえて nghĩa là 'dựa trên, căn cứ vào, xét đến...' — 今年の結果を踏まえて = dựa trên kết quả năm nay. を踏まえた (dạng た) cần danh từ theo sau nên không đứng trước 各部署と... được; を踏まえれば và を踏まえたら là dạng giả định (nếu dựa trên...) nên sai nghĩa — câu này nói về kế hoạch chắc chắn, không phải giả định.",
    "voc": "方針（ほうしん）：phương châm, kế hoạch； 結果（けっか）：kết quả； 踏まえる（ふまえる）：dựa trên, căn cứ vào； 部署（ぶしょ）：bộ phận, phòng ban； 相談する（そうだんする）：bàn bạc"
  },
  {
    "d": ["田中 さん、 明日 の 会議 に 出られます か。", "すみません、 体調 が 悪い （　）、 休ませて いただきます。"],
    "a": "こととて",
    "w": ["ためで", "くせに", "わけで"],
    "p": "〜こととて",
    "exp": "体調が悪いこととて là cách nói trang trọng, nghĩa là 'vì sức khỏe không tốt nên...' — こととて dùng trong văn phong lịch sự để nêu lý do xin phép. ためで và わけで sai dạng, không nối được như vậy (ためなら phải là ため、, わけで không dùng để nêu lý do). くせに nghĩa là 'mặc dù... (thế mà)' — diễn tả sự trái ngược kèm ý chê trách, ngược hẳn với ý xin phép nghỉ vì ốm nên không dùng được ở đây.",
    "voc": "会議（かいぎ）：cuộc họp； 体調（たいちょう）：tình trạng sức khỏe； 休む（やすむ）：nghỉ； こととて：vì, do (cách nói trang trọng)"
  },
  {
    "d": ["この ミス は、 許される もの では ありません ね。", "しかし、 彼 の これ まで の 功績 （　）、 今回 は 注意 に とどめます。"],
    "a": "に免じて",
    "w": ["に免じた", "に免じれば", "に免じたら"],
    "p": "N + に免じて",
    "exp": "〜に免じて nghĩa là 'xét đến, nể tình...' — 功績に免じて = xét đến những thành tích của anh ấy mà chỉ nhắc nhở. に免じた (dạng た) cần danh từ theo sau nên không đứng trước 今回は... được; に免じれば và に免じたら là dạng giả định (nếu xét đến...) nên sai nghĩa — câu này là quyết định đã đưa ra, không phải giả định.",
    "voc": "許す（ゆるす）：tha thứ； 功績（こうせき）：thành tích, công lao； 免じる（めんじる）：xét đến, tha cho； 注意（ちゅうい）：nhắc nhở； とどめる：dừng lại ở, giới hạn ở"
  }
  ],
  g1: [
  {
    "s": "「てんぷら」 という 言葉 は、 ポルトガル語 （　）いる と 言われて いる。",
    "a": "に由来して",
    "w": ["に起因して", "がもとで", "による"],
    "p": "N + に由来する",
    "exp": "〜に由来する nghĩa là 'có nguồn gốc từ...' — dùng cho nguồn gốc của từ ngữ, phong tục. 「てんぷら」はポルトガル語に由来している = từ tempura có nguồn gốc từ tiếng Bồ Đào Nha. に起因して (gây ra bởi) dùng cho nguyên nhân của sự cố, bệnh tật, không dùng cho nguồn gốc từ ngữ. がもとで và による sai dạng: がもとでいる là sai ngữ pháp, によるいる cũng sai (による phải đi với danh từ).",
    "voc": "言葉（ことば）：từ ngữ； ポルトガル語：tiếng Bồ Đào Nha； 由来する（ゆらいする）：có nguồn gốc từ； 言われる（いわれる）：được cho là"
  },
  {
    "s": "期待 （　）、 新製品 の 売り上げ は 伸び悩んだ。",
    "a": "とは裏腹に",
    "w": ["とは裏腹な", "とは裏腹だ", "とは裏腹の"],
    "p": "〜とは裏腹に",
    "exp": "期待とは裏腹に nghĩa là 'trái với kỳ vọng' — 期待とは裏腹に、売り上げは伸び悩んだ = trái với kỳ vọng, doanh số sản phẩm mới tăng trưởng chậm chạp. とは裏腹な cần danh từ theo sau, とは裏腹だ là dạng kết thúc câu, とは裏腹の cũng cần danh từ — cả ba đều không nối được với dấu phẩy và mệnh đề sau.",
    "voc": "期待（きたい）：kỳ vọng； 裏腹（うらはら）：trái ngược； 新製品（しんせいひん）：sản phẩm mới； 売り上げ（うりあげ）：doanh số； 伸び悩む（のびなやむ）：tăng trưởng chậm chạp"
  },
  {
    "s": "工事 の 遅れ に より、 開館 は 来年 に 延期 （　）された。",
    "a": "を余儀なく",
    "w": ["を強い", "を迫ら", "を余儀なくされ"],
    "p": "N + を余儀なくされる",
    "exp": "延期を余儀なくされた nghĩa là 'buộc phải hoãn lại' — 余儀なくされる là dạng bị động trang trọng của 余儀なくする. を強い và を迫ら sai dạng: 強いられた/迫られた mới là dạng bị động đúng, còn を強いされた・を迫らされた là sai ngữ pháp. を余儀なくされされた thì thừa một され.",
    "voc": "工事（こうじ）：thi công, xây dựng； 遅れ（おくれ）：sự chậm trễ； 開館（かいかん）：mở cửa (bảo tàng, thư viện)； 延期（えんき）：hoãn lại； 余儀なくされる（よぎなくされる）：buộc phải"
  },
  {
    "s": "合格 （　）、 毎日 欠かさず 勉強 を 続けた。",
    "a": "するべく",
    "w": ["したいべく", "するためべく", "するべき"],
    "p": "V-る + べく",
    "exp": "合格するべく nghĩa là 'để đỗ, nhằm đỗ' — V-る + べく diễn tả mục đích. したいべく là sai dạng (べく không đi sau たい); するためべく cũng sai dạng; するべき (nên làm) không nối được với dấu phẩy và mệnh đề sau theo cách này — するべき thì cần danh từ hoặc だ theo sau.",
    "voc": "合格（ごうかく）：đỗ, đạt； 欠かさず（かかさず）：không bỏ sót ngày nào； 勉強（べんきょう）：học tập； 続ける（つづける）：tiếp tục"
  },
  {
    "s": "彼 の 腕前 は、 プロ （　）と 言っても 過言 では ない。",
    "a": "も同然だ",
    "w": ["も同然な", "も同然で", "も同然の"],
    "p": "〜も同然だ",
    "exp": "プロも同然だ nghĩa là 'cũng ngang với dân chuyên nghiệp' — 〜も同然だ diễn tả mức độ gần như bằng với cái gì đó. も同然な cần danh từ theo sau, も同然で là dạng て không kết thúc câu được, も同然の cũng cần danh từ — cả ba đều không đứng trước と言っても được.",
    "voc": "腕前（うでまえ）：tay nghề, kỹ năng； プロ：dân chuyên nghiệp； 同然（どうぜん）：cũng như, ngang với； 過言（かごん）：nói quá"
  },
  {
    "s": "この 町 は 山あい に あり、 冬 に は 毎年 の ように 雪 が 降る。 そんな この 町 で は、 雪 が 積もる の は （　）、 住民 は 慣れた 様子 で 暮らして いる。",
    "a": "ざらだ",
    "w": ["ざらではない", "珍しい", "まれだ"],
    "p": "〜ざらではない / 〜ざらだ",
    "exp": "〜はざらだ nghĩa là 'là chuyện thường, không có gì lạ' — câu đầu nói mùa đông năm nào tuyết cũng rơi, nên tuyết phủ là chuyện thường, đáp án là ざらだ. ざらではない (không phải chuyện thường), 珍しい (hiếm), まれだ (hiếm có) đều ngược với ngữ cảnh câu đầu.",
    "voc": "山あい（やまあい）：vùng núi, thung lũng； 積もる（つもる）：chất đống, phủ (tuyết)； 住民（じゅうみん）：cư dân； 慣れた（なれた）：quen thuộc； 暮らす（くらす）：sinh sống"
  },
  {
    "s": "彼 は、 部屋 から 飛び出 （　）勢い で、 駅 へ 向かった。",
    "a": "さんばかり",
    "w": ["そうばかり", "するばかり", "したばかり"],
    "p": "V + んばかり",
    "exp": "飛び出さんばかりの勢い là thành ngữ cố định, nghĩa là 'với khí thế như sắp lao ra khỏi phòng' — V-ます + んばかり diễn tả trạng thái như sắp làm gì. そうばかり sai dạng (飛び出そうばかり không phải mẫu ngữ pháp, そう không đi với ばかり như vậy); するばかり cũng sai dạng vì 飛び出する là sai (dạng từ điển của 飛び出す là 飛び出す, không phải 飛び出する); したばかり nghĩa là 'vừa mới làm xong' nên 飛び出したばかりの勢い không diễn tả được khí thế sắp lao ra.",
    "voc": "飛び出す（とびだす）：lao ra, nhảy ra； 勢い（いきおい）：khí thế, đà； 駅（えき）：nhà ga； 向かう（むかう）：hướng đến"
  }
  ],
  star: [
  {
    "pre": "",
    "post": "。",
    "chunks": ["今の成功は、", "支えてくれた家族", "あっての", "ものだ"],
    "p": "N + あっての + N",
    "exp": "Thứ tự đúng: 今の成功は、(thành công hiện tại là) + 支えてくれた家族 (gia đình đã ủng hộ tôi) + あっての (nhờ có) + ものだ (là nhờ). あっての phải đứng ngay sau danh từ 家族 và trước danh từ ものだ — đảo vị trí sẽ phá vỡ cấu trúc N + あっての + N.",
    "voc": "成功（せいこう）：thành công； 支える（ささえる）：ủng hộ, chống đỡ； 家族（かぞく）：gia đình； あっての：nhờ có"
  },
  {
    "pre": "長い",
    "post": "。",
    "chunks": ["話し合いの末、", "ようやく合意に", "至った", "のである"],
    "p": "〜に至って",
    "exp": "Thứ tự đúng: 長い (dài) + 話し合いの末、(sau cuộc thảo luận dài) + ようやく合意に (cuối cùng đã đạt được thỏa thuận) + 至った (đi đến) + のである (cách nói trang trọng). ようやく合意に phải đi liền nhau và đứng trước 至った; 至ったのである là kết thúc trang trọng của câu, không thể đảo lên trước.",
    "voc": "話し合い（はなしあい）：thảo luận； 末（すえ）：cuối cùng, sau khi； ようやく：cuối cùng； 合意（ごうい）：thỏa thuận； 至る（いたる）：đi đến, đạt đến"
  },
  {
    "pre": "この計画の成功は、",
    "post": "。",
    "chunks": ["彼の協力", "なしには", "あり得なかった", "はずだ"],
    "p": "N + なしに（は）",
    "exp": "Thứ tự đúng: この計画の成功は、(thành công của kế hoạch này là) + 彼の協力 (sự hợp tác của anh ấy) + なしには (nếu không có) + あり得なかった (đã không thể xảy ra) + はずだ (chắc hẳn). なしには phải đứng ngay sau 彼の協力, あり得なかったはずだ là kết luận ở cuối câu — đảo vị trí sẽ làm câu sai ngữ pháp.",
    "voc": "計画（けいかく）：kế hoạch； 成功（せいこう）：thành công； 協力（きょうりょく）：hợp tác； なしには：nếu không có； あり得る（ありうる）：có thể xảy ra"
  },
  {
    "pre": "彼の無関心は、",
    "post": "。",
    "chunks": ["会議の場では", "拒否に", "等しい", "と言える"],
    "p": "〜に等しい",
    "exp": "Thứ tự đúng: 彼の無関心は、(sự thờ ơ của anh ấy) + 会議の場では (trong cuộc họp thì) + 拒否に (sự từ chối) + 等しい (ngang với) + と言える (có thể nói là). 拒否に等しい là cụm cố định (ngang với từ chối), と言える phải đứng cuối câu — đảo vị trí sẽ phá vỡ cụm 拒否に等しい.",
    "voc": "無関心（むかんしん）：thờ ơ, không quan tâm； 会議（かいぎ）：cuộc họp； 拒否（きょひ）：từ chối； 等しい（ひとしい）：ngang bằng, tương đương"
  },
  {
    "pre": "",
    "post": "。",
    "chunks": ["彼は、", "二度と失敗する", "まいと", "心に決めた"],
    "p": "V-る + まい",
    "exp": "Thứ tự đúng: 彼は、(anh ấy) + 二度と失敗する (không bao giờ thất bại nữa) + まいと (quyết không) + 心に決めた (đã quyết tâm trong lòng). まい phải đứng ngay sau động từ dạng từ điển 失敗する, tạo thành 失敗するまい (quyết không thất bại); 心に決めた là động từ chính đứng cuối câu.",
    "voc": "二度と（にどと）：không bao giờ nữa； 失敗する（しっぱいする）：thất bại； 心に決める（こころにきめる）：quyết tâm trong lòng"
  }
  ],
  bunsho: [
  {
    "intro": "つぎの 文章 は ボランティア 活動 に ついて 書かれた 文章 です。",
    "p": "近年、 地域 の ボランティア 活動 に 参加 する 人 が 増えて いる。（　1　）、 参加 の きっかけ は 人 に よって さまざま だ。 たとえば、 自分 の 住む 町 を よく したい と いう 思い から 始める 人 が 多い。（　2　）、 活動 を 続けて いく うち に、 新しい 友人 が できたり、 地域 の こと を 深く 知る こと が できたり する。（　3　）、 ボランティア に は 課題 も ある。 参加者 の 多く は 仕事 や 学業 と 両立 させなければならず、 時間 の 確保 が 難しい の だ。（　4　）、 無理 の ない 範囲 で 続ける こと が 大切 だ と 言える。（　5　）、 地域 の ため に できる こと を、 自分 の ペース で 続ける こと が、 活動 を 長続き させる コツ だ と 言える。",
    "b": [
      { "a": "しかし", "w": ["それから", "だから", "たとえば"] },
      { "a": "また", "w": ["しかし", "だから", "たとえば"] },
      { "a": "一方で", "w": ["そのため", "つまり", "たとえば"] },
      { "a": "そのため", "w": ["しかし", "たとえば", "一方で"] },
      { "a": "つまり", "w": ["しかし", "それから", "たとえば"] }
    ],
    "exp": "Ô 1 しかし: phía trước nói số người tham gia tình nguyện tăng lên, phía sau chuyển ý — lý do tham gia thì mỗi người một khác nên dùng しかし (tuy nhiên). Ô 2 また: bổ sung thêm một ý nữa — tiếp tục hoạt động thì có thêm bạn mới và hiểu sâu hơn về địa phương nên dùng また (thêm nữa). Ô 3 一方で: chuyển sang mặt trái — tình nguyện cũng có khó khăn nên dùng 一方で (mặt khác). Ô 4 そのため: vì khó sắp xếp thời gian nên cần tiếp tục trong phạm vi không quá sức — quan hệ nguyên nhân-kết quả nên dùng そのため (vì vậy). Ô 5 つまり: tóm lại ý trên — làm những gì có thể cho địa phương theo nhịp của mình là bí quyết để duy trì lâu dài nên dùng つまり (nói tóm lại). Các đáp án gây nhiễu như それから (sau đó)、だから (vì vậy) ở vị trí không có quan hệ nhân quả、たとえば (ví dụ như) ở vị trí không đưa ra ví dụ đều sai.",
    "voc": "ボランティア：tình nguyện； 地域（ちいき）：địa phương； 参加（さんか）：tham gia； きっかけ：cơ duyên, lý do bắt đầu； 両立（りょうりつ）：cân bằng, làm song song； 確保（かくほ）：đảm bảo； コツ：bí quyết, mẹo； 長続き（ながつづき）：duy trì lâu dài"
  }
  ],
  readS: [
  {
    "p": "来週 の 金曜日、 市民 ホール で 料理 教室 が 開かれます。 今回 の テーマ は、 野菜 を 使った 健康 的 な 料理 です。 参加費 は 千円 で、 材料費 が 含まれて います。 申し込み は、 今週 の 水曜日 まで です。 料理 教室 は、 毎月 一回 開かれて います。",
    "q": "料理 教室 について、 正しい もの は どれ です か。",
    "o": [
     "参加費 は 無料 です。",
     "申し込み は 来週 の 金曜日 まで です。",
     "テーマ は 肉 を 使った 料理 です。",
     "参加費 は 千円 で、 材料費 も 含まれて いる。"
    ],
    "a": 3,
    "e": "参加費は千円で材料費込み、申込は今週の水曜日までと書かれている。",
    "exp": "Đáp án 4 đúng: phí tham gia là 1.000 yên và đã bao gồm phí nguyên liệu (参加費は千円で、材料費が含まれています). Đáp án 1 sai vì phí không miễn phí. Đáp án 2 sai vì hạn đăng ký là thứ Tư tuần này, không phải thứ Sáu tuần sau. Đáp án 3 sai vì chủ đề là món ăn từ rau, không phải thịt.",
    "voc": "料理教室（りょうりきょうしつ）：lớp học nấu ăn； 参加費（さんかひ）：phí tham gia； 材料費（ざいりょうひ）：phí nguyên liệu； 申し込み（もうしこみ）：đăng ký； テーマ：chủ đề"
  },
  {
    "p": "田中 さん は、 来月、 家族 で 遊園地 に 行く 予定 です。 入園料 は 大人 1500円、 子ども 800円 です。 田中 さん 一家 は、 大人 2人 と 子ども 2人 です。 園内 で は、 乗り物券 が 1枚 300円 で 売られて います。 田中 さん は、 乗り物券 を 4枚 買う つもり です。",
    "q": "入園料 と 乗り物券 を 合わせる と、 田中 さん 一家 は 全部 で いくら 払います か。",
    "o": ["3,800円", "4,600円", "5,800円", "6,200円"],
    "a": 2,
    "calc": true,
    "e": "入園料は大人1500円×2人と子ども800円×2人で4600円、乗り物券は300円×4枚で1200円、合計5800円と計算できる。",
    "exp": "Đây là câu hỏi tính toán: tiền vào cổng là người lớn 1.500 yên × 2 người + trẻ em 800 yên × 2 người = 4.600 yên; vé trò chơi là 300 yên × 4 vé = 1.200 yên; tổng cộng 4.600 + 1.200 = 5.800 yên nên đáp án 3 đúng. Đáp án 1 (3.800 yên) và đáp án 2 (4.600 yên) đều tính thiếu một phần; đáp án 4 (6.200 yên) tính thừa.",
    "voc": "遊園地（ゆうえんち）：công viên giải trí； 入園料（にゅうえんりょう）：vé vào cổng； 乗り物券（のりものけん）：vé trò chơi； 全部で（ぜんぶで）：tổng cộng"
  },
  {
    "p": "駅前 の 郵便局 は、 平日 は 午前 9時 から 午後 5時 まで 開いて います。 土曜日 は 午前 9時 から 12時 30分 まで で、 日曜日 と 祝日 は 休み です。 荷物 を 送る 場合、 重さ に よって 料金 が 変わります。 3キロ まで の 荷物 は 800円、 5キロ まで は 1,200円 です。",
    "q": "土曜日 の 午前 10時 に 郵便局 に 行く と、 どう なります か。",
    "o": ["開いていないので、荷物を送ることができません。", "開いているので、荷物を送ることができます。", "午後からしか開いていないので、待たなければなりません。", "日曜日と同じで、休みです。"],
    "a": 1,
    "e": "土曜日は午前9時から12時30分まで開いていると書かれている。",
    "exp": "Đáp án 2 đúng: thứ Bảy bưu điện mở từ 9 giờ sáng đến 12 giờ 30, nên 10 giờ sáng đến là đang mở cửa và gửi được hàng. Đáp án 1 và 4 sai vì thứ Bảy không phải ngày nghỉ. Đáp án 3 sai vì buổi sáng đã mở cửa, không phải chỉ mở từ buổi chiều.",
    "voc": "郵便局（ゆうびんきょく）：bưu điện； 平日（へいじつ）：ngày thường； 祝日（しゅくじつ）：ngày lễ； 荷物（にもつ）：hành lý, bưu kiện； 重さ（おもさ）：trọng lượng"
  },
  {
    "p": "来月 から、 この 市 で は ごみ の 出し方 が 変わります。 燃える ごみ は 月曜日 と 木曜日、 燃えない ごみ は 第2 土曜日、 資源 ごみ は 水曜日 に 出します。 ごみ は、 収集日 の 朝 8時 まで に 出して ください。 指定 の 袋 を 使わない と、 収集 されません。",
    "q": "この お知らせ を 読んで、 分かる こと は どれ です か。",
    "o": ["燃えるごみは水曜日に出します。", "ごみは前の日の夜に出します。", "指定の袋を使わないと収集されません。", "燃えないごみは毎週出します。"],
    "a": 2,
    "e": "指定の袋を使わないと、収集されませんと書かれている。",
    "exp": "Đáp án 3 đúng: 指定の袋を使わないと、収集されません (không dùng túi quy định thì sẽ không được thu gom). Đáp án 1 sai vì rác cháy được bỏ vào thứ Hai và thứ Năm, không phải thứ Tư. Đáp án 2 sai vì rác phải bỏ ra trước 8 giờ sáng ngày thu gom, không phải tối hôm trước. Đáp án 4 sai vì rác không cháy được chỉ bỏ vào thứ Bảy thứ 2 của tháng, không phải hằng tuần.",
    "voc": "ごみ：rác； 燃えるごみ（もえるごみ）：rác cháy được； 燃えないごみ（もえないごみ）：rác không cháy được； 資源ごみ（しげんごみ）：rác tái chế； 収集日（しゅうしゅうび）：ngày thu gom； 指定（してい）：quy định"
  }
  ],
  readM: [
  {
    "p": "最近、 本 を 読む 人 が 減って いる と 言われて いる。 スマートフォン が 広がり、 短い 文章 や 動画 を 見る 時間 が 増えた ため、 長い 文章 を 読む 機会 が 少なく なった のだ。 しかし、 読書 に は、 スマートフォン で は 得られない 良さ が ある。 本 を 読む と、 想像力 が 育ち、 物事 を 深く 考える 力 が つく。 また、 知らない 世界 や 考え方 に 出会う こと で、 自分 の 視野 が 広がる。 もちろん、 スマートフォン も 便利 な 道具 だ。 大切 な の は、 スマートフォン と 本 を、 目的 に 合わせて 上手 に 使い分ける こと だ。 例えば、 調べもの は スマートフォン で、 ゆっくり 考えたい とき は 本 で、 と 使い分ける のも 一つ の 方法 だ。 本 を 読む 習慣 は、 子ども の ころ から 身に つける こと が 大切 だ と 言われて いる。 図書館 や 学校 で は、 本 に 親しむ ため の イベント が 開かれて いる。 読書 は、 一人 で 静か に 楽しむ こと が できる 趣味 で も ある。",
    "qs": [
     {
      "q": "本 を 読む 人 が 減って いる 理由 として、 本文 で 述べられて いる もの は 何 か。",
      "o": [
       "スマートフォン で 短い 文章 や 動画 を 見る 時間 が 増えた こと。",
       "本 の 値段 が 高く なった こと。",
       "図書館 が 減った こと。",
       "学校 で 本 を 読まなく なった こと。"
      ],
      "a": 0,
      "e": "スマホで短い文章や動画を見る時間が増えたためと書かれている。"
     },
     {
      "q": "読書 の 良さ として、 本文 で 述べられて いる もの は どれ です か。",
      "o": [
       "短い 時間 で 多く の 情報 が 得られる こと。",
       "動画 より 速く 読める こと。",
       "友達 が 増える こと。",
       "想像力 が 育ち、 物事 を 深く 考える 力 が つく こと。"
      ],
      "a": 3,
      "e": "想像力が育ち、物事を深く考える力がつくと書かれている。"
     },
     {
      "q": "筆者 の 考え に 合う もの は どれ です か。",
      "o": [
       "スマートフォン を 使う のは やめる べき だ。",
       "本 を 読む のは やめる べき だ。",
       "スマートフォン と 本 を、 目的 に 合わせて 使い分ける こと が 大切 だ。",
       "調べもの は すべて 本 で する べき だ。"
      ],
      "a": 2,
      "e": "スマホと本を目的に合わせて使い分けることが大切と述べられている。"
     }
    ],
    "exp": "Câu 1: đáp án 1 đúng — スマートフォンで短い文章や動画を見る時間が増えたため、長い文章を読む機会が少なくなった (vì thời gian xem văn bản ngắn và video trên điện thoại tăng lên nên cơ hội đọc văn bản dài giảm đi). Các đáp án khác không được nhắc đến trong bài. Câu 2: đáp án 4 đúng — 本を読むと、想像力が育ち、物事を深く考える力がつく (đọc sách giúp trí tưởng tượng phát triển và rèn khả năng suy nghĩ sâu sắc). Câu 3: đáp án 3 đúng — スマートフォンと本を、目的に合わせて使い分けることが大切だ (quan trọng là dùng điện thoại và sách linh hoạt tùy mục đích).",
    "voc": "読書（どくしょ）：việc đọc sách； 想像力（そうぞうりょく）：trí tưởng tượng； 視野（しや）：tầm nhìn； 使い分ける（つかいわける）：sử dụng linh hoạt tùy mục đích； 習慣（しゅうかん）：thói quen； 図書館（としょかん）：thư viện"
  },
  {
    "p": "近年、 森林浴 が 注目 されて いる。 森 の 中 を ゆっくり 歩く と、 気分 が 落ち着き、 ストレス が やわらぐ と 言われて いる。 木々 の 香り や 鳥 の 声、 風 の 音 に 包まれる と、 日常 の 忙しさ を 忘れる こと が できる から だ。 研究 による と、 森 の 中 で は 心拍数 が 下がり、 リラックス する 効果 が ある と いう。 また、 森林浴 は 特別 な 道具 や 技術 が いらない の も 魅力 だ。 歩く 速さ や 時間 を 自分 の 体調 に 合わせて 決めれば よい。 ただし、 注意 も 必要 だ。 山 の 天気 は 変わりやすく、 道 に 迷う 危険 も ある。 その ため、 初めて の 場所 で は 一人 で 行かず、 地図 や 飲み物 を 用意 する こと が 大切 だ。 森林浴 は、 体 を 動かす 楽しさ と 心 の 安らぎ の 両方 を 得られる 過ごし方 だ。 忙しい 毎日 の 中 で、 森 で 過ごす 時間 を 意識的に 作る こと が、 心 と 体 の 健康 に つながる と 言える。",
    "qs": [
     {
      "q": "森林浴 が 注目 されて いる 理由 として、 本文 で 述べられて いる もの は 何 か。",
      "o": [
       "森の中を歩くと、気分が落ち着き、ストレスがやわらぐこと。",
       "森の中では、速く走ることができること。",
       "森では、特別な道具が必要なこと。",
       "山の天気は、変わらないこと。"
      ],
      "a": 0,
      "e": "森の中をゆっくり歩くと、気分が落ち着き、ストレスがやわらぐと言われている。"
     },
     {
      "q": "森林浴 の 良さ として、 本文 で 述べられて いる もの は どれ です か。",
      "o": [
       "道に迷う心配がないこと。",
       "天気がいつも安定していること。",
       "特別な道具や技術がいらないこと。",
       "必ず一人で行くこと。"
      ],
      "a": 2,
      "e": "森林浴は特別な道具や技術がいらないのも魅力だと書かれている。"
     },
     {
      "q": "筆者 の 考え に 合う もの は どれ です か。",
      "o": [
       "森林浴は、特別な技術がなければできない。",
       "忙しい毎日の中で、森で過ごす時間を意識的に作ることが、心と体の健康につながる。",
       "森に行くときは、何も準備しなくてよい。",
       "森林浴は、体を動かすだけのもので、心には関係ない。"
      ],
      "a": 1,
      "e": "忙しい毎日の中で、森で過ごす時間を意識的に作ることが、心と体の健康につながると述べられている。"
     }
    ],
    "exp": "Câu 1: đáp án 1 đúng — 森の中をゆっくり歩くと、気分が落ち着き、ストレスがやわらぐと言われている (đi bộ thong thả trong rừng giúp tâm trạng lắng lại và căng thẳng dịu đi). Các đáp án khác ngược với bài: rừng không phải nơi để chạy nhanh, không cần dụng cụ đặc biệt, và thời tiết trên núi thay đổi thất thường. Câu 2: đáp án 3 đúng — 森林浴は特別な道具や技術がいらないのも魅力だ (điểm hấp dẫn của tắm rừng là không cần dụng cụ hay kỹ thuật đặc biệt). Đáp án 1 sai vì bài nói có nguy cơ lạc đường; đáp án 2 sai vì thời tiết trên núi dễ thay đổi; đáp án 4 sai vì bài khuyên không nên đi một mình đến nơi lạ. Câu 3: đáp án 2 đúng — 忙しい毎日の中で、森で過ごす時間を意識的に作ることが、心と体の健康につながる (trong cuộc sống bận rộn, chủ động dành thời gian ở trong rừng sẽ tốt cho sức khỏe thể chất lẫn tinh thần).",
    "voc": "森林浴（しんりんよく）：tắm rừng； 注目される（ちゅうもくされる）：được chú ý； 気分（きぶん）：tâm trạng； 落ち着く（おちつく）：lắng lại, bình tĩnh； ストレス：căng thẳng； 香り（かおり）：mùi hương； 包まれる（つつまれる）：được bao bọc； 日常（にちじょう）：thường ngày； 心拍数（しんぱくすう）：nhịp tim； 効果（こうか）：hiệu quả； 道具（どうぐ）：dụng cụ； 技術（ぎじゅうつ）：kỹ thuật； 体調（たいちょう）：tình trạng sức khỏe； 迷う（まよう）：lạc đường； 危険（きけん）：nguy hiểm； 用意する（よういする）：chuẩn bị； 安らぎ（やすらぎ）：sự thư thái, yên bình； 意識的に（いしきてきに）：một cách có ý thức； 健康（けんこう）：sức khỏe"
  },
  {
    "p": "日本 で は、 ペット を 飼う 家庭 が 増えて いる。 特に、 一人暮らし の 人 や 高齢者 に とって、 ペット は 大切 な 家族 の 一員 だ。 ペット と 暮らす と、 毎日 の 生活 に 楽しみ が 生まれる。 朝 起きて 散歩 に 行ったり、 帰宅 した とき に 迎えて くれたり する から だ。 また、 ペット を 飼う こと は、 健康 に も よい 影響 が ある と 言われて いる。 散歩 の 習慣 が つく こと で、 運動不足 が 解消 される から だ。 一方 で、 ペット を 飼う に は 責任 も 伴う。 毎日 の 食事 や 世話 が 必要 で、 病気 に なれば 治療費 も かかる。 旅行 の とき に は、 預ける 場所 を 探さなければ ならない。 ペット を 飼う 前 に、 最後 まで 責任 を 持って 世話 が できる か を よく 考える こと が 大切 だ。 ペット は、 飼い主 の 生活 を 豊か に して くれる が、 その 分、 飼い主 に も 責任 が 求められる の だ。",
    "qs": [
     {
      "q": "ペット と 暮らす 良さ として、 本文 で 述べられて いる もの は どれ です か。",
      "o": [
       "毎日の生活に楽しみが生まれること。",
       "旅行に行く必要がなくなること。",
       "治療費がかからなくなること。",
       "食事の世話が必要なくなること。"
      ],
      "a": 0,
      "e": "ペットと暮らすと、毎日の生活に楽しみが生まれると書かれている。"
     },
     {
      "q": "ペット を 飼う とき に 必要 な こと として、 本文 で 述べられて いる もの は 何 か。",
      "o": [
       "毎日、ペットと散歩に行くこと。",
       "最後まで責任を持って世話をすること。",
       "ペットに芸を教えること。",
       "ペットのために家を広くすること。"
      ],
      "a": 1,
      "e": "最後まで責任を持って世話ができるかをよく考えることが大切だと書かれている。"
     },
     {
      "q": "筆者 の 考え に 合う もの は どれ です か。",
      "o": [
       "ペットを飼うのは大変なので、飼わないほうがよい。",
       "ペットを飼えば、健康になれるので誰でも飼うべきだ。",
       "ペットは生活を豊かにしてくれるが、飼い主にも責任が求められる。",
       "ペットを飼うときは、旅行に行くことが大切だ。"
      ],
      "a": 2,
      "e": "ペットは飼い主の生活を豊かにしてくれるが、その分、飼い主にも責任が求められると述べられている。"
     }
    ],
    "exp": "Câu 1: đáp án 1 đúng — ペットと暮らすと、毎日の生活に楽しみが生まれる (sống cùng thú cưng khiến cuộc sống hằng ngày thêm niềm vui). Các đáp án khác ngược với bài: đi du lịch vẫn cần tìm chỗ gửi thú cưng, phí chữa bệnh vẫn tốn, vẫn phải chăm sóc ăn uống hằng ngày. Câu 2: đáp án 2 đúng — 最後まで責任を持って世話ができるかをよく考えることが大切だ (quan trọng là suy nghĩ kỹ xem có thể chăm sóc có trách nhiệm đến cùng hay không). Câu 3: đáp án 3 đúng — ペットは飼い主の生活を豊かにしてくれるが、その分、飼い主にも責任が求められる (thú cưng làm cuộc sống của chủ thêm phong phú, nhưng đổi lại chủ cũng phải có trách nhiệm).",
    "voc": "ペット：thú cưng； 飼う（かう）：nuôi； 一人暮らし（ひとりぐらし）：sống một mình； 高齢者（こうれいしゃ）：người cao tuổi； 散歩（さんぽ）：đi dạo； 迎える（むかえる）：đón； 運動不足（うんどうぶそく）：thiếu vận động； 解消（かいしょう）：giải quyết, xóa bỏ； 責任（せきにん）：trách nhiệm； 飼い主（かいぬし）：chủ nuôi"
  }
  ],
  readL: [
  {
    "p": "日本 は、 地震 や 台風 など の 自然災害 が 多い 国 だ。 毎年 の ように、 どこ か で 大きな 災害 が 起きて いる。 その ため、 日本 で は 昔 から、 災害 へ の 備え が 大切 に されて きた。 家庭 で は、 水 や 食料 を 備蓄 したり、 避難 場所 を 確認 したり する こと が 勧められて いる。 学校 や 会社 で は、 定期的 に 避難 訓練 が 行われて いる。 こうした 備え は、 災害 が 起きた とき に、 被害 を 小さく する ため に 欠かせない もの だ。 しかし、 備え を して いて も、 災害 を 完全 に 防ぐ こと は できない。 災害 が 起きた 後 に 大切 に なる の は、 人々 の 助け合い だ。 大震災 の とき、 近所 の 人々 が 助け合って、 多く の 命 が 救われた と いう 話 は よく 知られて いる。 災害 の 直後 は、 行政 の 支援 が 届く まで に 時間 が かかる。 その 間、 地域 の 人々 の つながり が、 命 を 守る 力 に なる の だ。 最近 で は、 災害 に 強い まちづくり も 進められて いる。 建物 を 強く する だけ で は なく、 地域 の 人々 が 日ごろ から 交流 し、 助け合える 関係 を 作る こと が 大切 だ と 考えられて いる。 災害 へ の 備え は、 物 だけ で は なく、 人 と 人 と の つながり も 含まれる の だ。 私たち は、 災害 を 恐れる だけ で は なく、 日ごろ から 備え、 地域 と の つながり を 大切 に する こと が 求められて いる。",
    "qs": [
     {
      "q": "日本 で 災害 へ の 備え が 大切 に されて きた 理由 は 何 か。",
      "o": [
       "日本は、地震や台風などの自然災害が多い国だから。",
       "日本では、災害が一度も起きたことがないから。",
       "日本では、行政の支援がすぐに届くから。",
       "日本では、建物がすべて災害に強いから。"
      ],
      "a": 0,
      "e": "日本は、地震や台風などの自然災害が多い国だと書かれている。"
     },
     {
      "q": "災害 が 起きた 後 に 大切 に なる もの は 何 か。",
      "o": [
       "新しい建物を建てること。",
       "人々の助け合い。",
       "避難訓練をすること。",
       "水や食料を備蓄すること。"
      ],
      "a": 1,
      "e": "災害が起きた後に大切になるのは、人々の助け合いだと書かれている。"
     },
     {
      "q": "最近 進められて いる まちづくり に ついて、 正しい もの は どれ です か。",
      "o": [
       "建物を強くすることだけが大切だと考えられている。",
       "災害のときにだけ、地域の人々が交流すればよいと考えられている。",
       "行政の支援だけで十分だと考えられている。",
       "地域の人々が日ごろから交流し、助け合える関係を作ることが大切だと考えられている。"
      ],
      "a": 3,
      "e": "地域の人々が日ごろから交流し、助け合える関係を作ることが大切だと考えられていると書かれている。"
     },
     {
      "q": "筆者 の 考え に 合う もの は どれ です か。",
      "o": [
       "災害への備えは、物を準備することだけで十分だ。",
       "災害を完全に防ぐことができるように、建物を強くすべきだ。",
       "災害を恐れるだけでなく、日ごろから備え、地域とのつながりを大切にすることが求められている。",
       "災害が起きたら、行政の支援を待つことがいちばん大切だ。"
      ],
      "a": 2,
      "e": "災害を恐れるだけではなく、日ごろから備え、地域とのつながりを大切にすることが求められていると述べられている。"
     }
    ],
    "exp": "Câu 1: đáp án 1 đúng — 日本は、地震や台風などの自然災害が多い国だ (Nhật Bản là đất nước có nhiều thiên tai như động đất, bão). Các đáp án khác ngược với bài. Câu 2: đáp án 2 đúng — 災害が起きた後に大切になるのは、人々の助け合いだ (sau khi thiên tai xảy ra, điều quan trọng là sự giúp đỡ lẫn nhau của mọi người). Câu 3: đáp án 4 đúng — 地域の人々が日ごろから交流し、助け合える関係を作ることが大切だと考えられている (người ta cho rằng quan trọng là người dân địa phương giao lưu thường ngày và xây dựng quan hệ có thể giúp đỡ lẫn nhau). Câu 4: đáp án 3 đúng — 災害を恐れるだけではなく、日ごろから備え、地域とのつながりを大切にすることが求められている (không chỉ sợ hãi thiên tai mà còn phải chuẩn bị thường ngày và trân trọng mối liên kết với địa phương).",
    "voc": "自然災害（しぜんさいがい）：thiên tai； 地震（じしん）：động đất； 台風（たいふう）：bão； 備え（そなえ）：sự chuẩn bị； 備蓄する（びちくする）：dự trữ； 避難場所（ひなんばしょ）：nơi lánh nạn； 避難訓練（ひなんくんれん）：diễn tập sơ tán； 助け合い（たすけあい）：giúp đỡ lẫn nhau； 行政（ぎょうせい）：chính quyền； 交流（こうりゅう）：giao lưu"
  }
  ],
  tougou: [
  {
    "p1": "大学 の オンライン 授業 に ついて、 学生 の 山田 さん は 次 の ように 話して いる。「オンライン 授業 は、 通学 の 時間 が かからない ので、 とても 便利 です。 自分 の ペース で 勉強 できる し、 授業 の 録画 を 見返して 復習 する こと も できます。 特に、 アルバイト を して いる 学生 に とって は、 時間 の 使い方 が 自由 に なる の が 大きな 利点 です。」",
    "p2": "一方、 大学 の 先生 で ある 佐藤 さん は、 次 の ように 話して いる。「オンライン 授業 で は、 学生 の 様子 が 分かりにくい の が 問題 です。 教室 で は、 学生 の 表情 を 見て 理解度 を 確認 できます が、 画面 の 向こう で は それ が できません。 その ため、 質問 が 出にくく、 理解 が 不十分 な まま 進んで しまう 学生 も います。 対面 と オンライン を 組み合わせる 工夫 が 必要 です。」",
    "qs": [
     {
      "q": "山田 さん が オンライン 授業 の 利点 として 挙げて いる もの は どれ です か。",
      "o": [
       "通学の時間がかからないこと。",
       "学生の表情が見えること。",
       "質問が出やすいこと。",
       "理解度を確認しやすいこと。"
      ],
      "a": 0,
      "e": "通学の時間がかからないので、とても便利だと山田さんは話している。"
     },
     {
      "q": "佐藤 さん が オンライン 授業 の 問題点 として 挙げて いる もの は どれ です か。",
      "o": [
       "授業の録画を見返すことができないこと。",
       "学生の様子が分かりにくいこと。",
       "通学に時間がかかること。",
       "アルバイトができないこと。"
      ],
      "a": 1,
      "e": "オンライン授業では、学生の様子が分かりにくいのが問題だと佐藤さんは話している。"
     },
     {
      "q": "二人 の 話 から 分かる こと は どれ です か。",
      "o": [
       "オンライン授業は、対面授業より優れている。",
       "オンライン授業は、やめるべきだ。",
       "オンライン授業には、便利な点と問題点の両方がある。",
       "オンライン授業は、学生にしか利点がない。"
      ],
      "a": 2,
      "e": "山田さんは便利な点を、佐藤さんは問題点を挙げており、両方があることが分かる。"
     }
    ],
    "exp": "Câu 1: đáp án 1 đúng — 山田さんは通学の時間がかからないので、とても便利だと話している (Yamada nói học trực tuyến rất tiện vì không tốn thời gian đi lại). Các đáp án 2, 3, 4 là ý của佐藤さん về vấn đề, không phải lợi điểm của山田さん. Câu 2: đáp án 2 đúng — 佐藤さんはオンライン授業では、学生の様子が分かりにくいのが問題だと話している (Sato nói vấn đề là khó nắm được tình hình của sinh viên). Câu 3: đáp án 3 đúng — 山田さんは便利な点を、佐藤さんは問題点を挙げており、オンライン授業には両方があることが分かる.",
    "voc": "オンライン授業：học trực tuyến； 通学（つうがく）：đi học (đi lại)； 録画（ろくが）：bản ghi hình； 復習（ふくしゅう）：ôn tập； 利点（りてん）：ưu điểm； 表情（ひょうじょう）：nét mặt, biểu cảm； 理解度（りかいど）：mức độ hiểu； 対面（たいめん）：trực tiếp, mặt đối mặt"
  }
  ],
  shuchou: [
  {
    "p": "最近、 子ども の 遊び の 時間 が 減って いる と 言われて いる。 習い事 や 塾 に 通う 子ども が 増え、 自由 に 遊ぶ 時間 が 少なく なって いる から だ。 親 の 中 に は、 早く から 勉強 や スポーツ を 習わせる こと が、 子ども の 将来 の ため に なる と 考える 人 も 多い。 しかし、 私 は、 自由 な 遊び こそ が、 子ども の 成長 に とって 欠かせない もの だ と 考える。 遊び の 中 で、 子ども は 自分 で 考え、 工夫 し、 友達 と 協力 する こと を 学ぶ。 たとえば、 公園 で 遊ぶ とき、 子ども たち は ルール を 自分 たち で 決め、 意見 が ぶつかれば 話し合って 解決 する。 こうした 経験 は、 教室 で は 得られない 貴重 な 学び だ。 また、 遊び は 想像力 を 育てる。 何も ない 場所 で も、 子ども は 想像力 を 働かせて、 さまざま な 遊び を 生み出す。 さらに、 遊び は 失敗 を 恐れない 心 を 育てる。 遊び の 中 で 失敗 して も、 子ども は すぐ に 次 の 方法 を 試す。 失敗 を 繰り返す うち に、 どう すれば うまく いく か を 自分 で 考える ように なる の だ。 こうした 経験 は、 将来、 新しい こと に 挑戦 する とき の 力 に なる。 また、 遊び を 通して、 子ども は 体 を 動かす 楽しさ を 知る。 体 を 動かす こと は、 健康 な 体 を 作る だけ で は なく、 気持ち を 明るく する 効果 も ある の だ。 もちろん、 習い事 や 勉強 も 大切 だ。 しかし、 それ ばかり で は、 子ども の 成長 は 偏って しまう。 自由 な 遊び の 時間 を 大切 に する こと こそ、 子ども の 健やか な 成長 を 支える の だ と、 私 は 考えて いる。",
    "qs": [
     {
      "q": "子ども の 遊び の 時間 が 減って いる 理由 は 何 か。",
      "o": [
       "習い事や塾に通う子どもが増えたこと。",
       "子どもが遊ぶことが嫌いになったこと。",
       "公園が減ったこと。",
       "学校の授業が増えたこと。"
      ],
      "a": 0,
      "e": "習い事や塾に通う子どもが増え、自由に遊ぶ時間が少なくなっていると書かれている。"
     },
     {
      "q": "自由 な 遊び の 良さ として、 本文 で 述べられて いる もの は どれ です か。",
      "o": [
       "勉強の成績がすぐに上がること。",
       "自分で考え、工夫し、友達と協力することを学ぶこと。",
       "スポーツが上手になること。",
       "早く大人になれること。"
      ],
      "a": 1,
      "e": "遊びの中で、子どもは自分で考え、工夫し、友達と協力することを学ぶと書かれている。"
     },
     {
      "q": "筆者 が 最も 言いたい こと は 何 か。",
      "o": [
       "習い事や塾に通うことが、子どもの将来のためにいちばん大切だということ。",
       "子どもは、勉強やスポーツだけをすればよいということ。",
       "自由な遊びの時間を大切にすることこそ、子どもの健やかな成長を支えるということ。",
       "子どもの遊びの時間は、減らしたほうがよいということ。"
      ],
      "a": 2,
      "e": "自由な遊びの時間を大切にすることこそ、子どもの健やかな成長を支えると筆者は述べている。"
     },
     {
      "q": "筆者 の 考え に 合う もの は どれ です か。",
      "o": [
       "自由な遊びは、子どもの成長に必要ない。",
       "子どもは、早くから勉強を始めるべきだ。",
       "公園で遊ぶことは、時間の無駄だ。",
       "習い事や勉強ばかりでは、子どもの成長は偏ってしまう。"
      ],
      "a": 3,
      "e": "習い事や勉強ばかりでは、子どもの成長は偏ってしまうと述べられている。"
     }
    ],
    "exp": "Câu 1: đáp án 1 đúng — 習い事や塾に通う子どもが増え、自由に遊ぶ時間が少なくなっている (trẻ em đi học thêm và học ở trường luyện thi tăng lên nên thời gian chơi tự do giảm đi). Các đáp án khác không được nhắc đến trong bài. Câu 2: đáp án 2 đúng — 遊びの中で、子どもは自分で考え、工夫し、友達と協力することを学ぶ (trong lúc chơi, trẻ học cách tự suy nghĩ, sáng tạo và hợp tác với bạn bè). Câu 3 (主張): đáp án 3 đúng — 自由な遊びの時間を大切にすることこそ、子どもの健やかな成長を支える (chính việc trân trọng thời gian chơi tự do mới là điều nâng đỡ sự phát triển khỏe mạnh của trẻ) — đây là主張 chính của tác giả, được nhấn mạnh bằng こそ. Câu 4: đáp án 4 đúng — 習い事や勉強ばかりでは、子どもの成長は偏ってしまう (chỉ học thêm và học hành thì sự phát triển của trẻ sẽ lệch lạc).",
    "voc": "遊び（あそび）：chơi đùa； 習い事（ならいごと）：học thêm (năng khiếu)； 塾（じゅく）：trường luyện thi； 自由（じゆう）：tự do； 成長（せいちょう）：trưởng thành, phát triển； 工夫する（くふうする）：sáng tạo, nghĩ cách； 協力する（きょうりょくする）：hợp tác； 貴重（きちょう）：quý giá； 想像力（そうぞうりょく）：trí tưởng tượng； 偏る（かたよる）：lệch lạc； 健やか（すこやか）：khỏe mạnh"
  }
  ],
  info: [
  {
    "tpl": "<b>A 公民館の講座（12月）</b><br>12月に、次の講座があります。<br><table class=\"jl-tbl\"><tr><th>講座</th><th>曜日</th><th>時間</th><th>受講料</th></tr><tr><td>陶芸教室</td><td>火曜日</td><td>10時〜12時</td><td>2,000円</td></tr><tr><td>料理教室</td><td>水曜日</td><td>14時〜16時</td><td>1,500円</td></tr><tr><td>英会話</td><td>金曜日</td><td>19時〜20時30分</td><td>3,000円</td></tr><tr><td>書道教室</td><td>土曜日</td><td>9時〜11時</td><td>1,000円</td></tr></table><b>B カレンダー（12月）</b><br><table class=\"jl-cal\"><tr><th>月</th><th>火</th><th>水</th><th>木</th><th>金</th><th>土</th><th>日</th></tr><tr><td></td><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td></tr><tr><td>7</td><td>8</td><td>9</td><td>10</td><td>11</td><td>12</td><td>13</td></tr><tr><td>14</td><td>15</td><td>16</td><td>17</td><td>18</td><td>19</td><td>20</td></tr><tr><td>21</td><td>22</td><td>23</td><td>24</td><td>25</td><td>26</td><td>27</td></tr><tr><td>28</td><td>29</td><td>30</td><td>31</td><td></td><td></td><td></td></tr></table>",
    "inst": "つぎのA「公民館の講座」とBのカレンダーを見て、質問に答えてください。答えは1・2・3・4から、いちばんいいものを一つえらんでください。",
    "q": "今日は12月1日（火曜日）です。料理教室に参加したいです。いちばん早く参加できるのは何月何日ですか。",
    "opts": ["12月2日", "12月9日", "12月8日", "12月16日"],
    "ans": 0,
    "exp": "Lớp nấu ăn học vào thứ Tư. Hôm nay là thứ Ba 1/12, nên thứ Tư tuần này là 2/12 — đó là buổi sớm nhất có thể tham gia. 9/12 là thứ Tư tuần sau nên không phải sớm nhất. 8/12 là thứ Ba (ngày của lớp gốm) nên không có lớp nấu ăn. 16/12 cũng là thứ Tư nhưng muộn hơn 2/12.",
    "voc": "公民館（こうみんかん）：nhà văn hóa cộng đồng； 講座（こうざ）：khóa học； 料理教室（りょうりきょうしつ）：lớp học nấu ăn； 受講料（じゅこうりょう）：học phí； 曜日（ようび）：ngày trong tuần"
  },
  {
    "tpl": "<b>野菜料理教室のお知らせ</b><br>12月に、野菜料理の教室が3回あります。参加費は1回1,200円で、材料費が含まれています。申し込みは、教室の日の3日前までです。<br><table class=\"jl-tbl\"><tr><th>日</th><th>時間</th><th>定員</th></tr><tr><td>12月5日（土）</td><td>10時〜12時</td><td>20人</td></tr><tr><td>12月12日（土）</td><td>10時〜12時</td><td>20人</td></tr><tr><td>12月19日（土）</td><td>10時〜12時</td><td>15人</td></tr></table><b>B カレンダー（12月）</b><br><table class=\"jl-cal\"><tr><th>月</th><th>火</th><th>水</th><th>木</th><th>金</th><th>土</th><th>日</th></tr><tr><td></td><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td></tr><tr><td>7</td><td>8</td><td>9</td><td>10</td><td>11</td><td>12</td><td>13</td></tr><tr><td>14</td><td>15</td><td>16</td><td>17</td><td>18</td><td>19</td><td>20</td></tr><tr><td>21</td><td>22</td><td>23</td><td>24</td><td>25</td><td>26</td><td>27</td></tr><tr><td>28</td><td>29</td><td>30</td><td>31</td><td></td><td></td><td></td></tr></table>",
    "inst": "つぎの「野菜料理教室のお知らせ」とBのカレンダーを見て、質問に答えてください。答えは1・2・3・4から、いちばんいいものを一つえらんでください。",
    "q": "今日は12月3日（木曜日）です。12月5日の教室に参加したいです。どうなりますか。",
    "opts": ["申し込めます。参加費は1,200円です。", "申し込めません。申し込みは3日前までだからです。", "申し込めます。参加費は無料です。", "申し込めません。定員がいっぱいだからです。"],
    "ans": 1,
    "exp": "Hạn đăng ký là 3 ngày trước ngày học, nên hạn của buổi 5/12 là 2/12. Hôm nay đã là 3/12, quá hạn nên không đăng ký được. Không phải vì đã đủ số người, và học phí là 1.200 yên chứ không miễn phí.",
    "voc": "野菜料理（やさいりょうり）：món ăn từ rau； 教室（きょうしつ）：lớp học； 参加費（さんかひ）：phí tham gia； 材料費（ざいりょうひ）：phí nguyên liệu； 締め切り（しめきり）：hạn chót； 定員（ていいん）：số người tối đa"
  }
  ]
};

/* ----- Test 7 ----- */
window.WRITTEN_N1_SET7 = {
  yomi: [
  {
    "s": "改革 は 漸進 的 に 進められる べき だ。",
    "t": "漸進",
    "r": "ぜんしん",
    "w": ["ぜんじん", "せんしん", "ざんしん"],
    "exp": "漸進 đọc là ぜんしん（漸 ぜん、進 しん）— nghĩa là tiến triển dần dần, từng bước một. ぜんじん đọc sai 進 thành じん、せんしん đọc sai 漸 thành せん、ざんしん đọc sai 漸 thành ざん nên đều sai.",
    "voc": "漸進（ぜんしん）：tiến triển dần dần； 改革（かいかく）：cải cách； 進める（すすめる）：tiến hành, thúc đẩy"
  },
  {
    "s": "彼 の 懇切 な 対応 に、 客 は 皆 感心 した。",
    "t": "懇切",
    "r": "こんせつ",
    "w": ["けんせつ", "こんせち", "こんさつ"],
    "exp": "懇切 đọc là こんせつ（懇 こん、切 せつ）— nghĩa là ân cần, tận tình, chu đáo. けんせつ đọc sai 懇 thành けん、こんせち đọc sai 切 thành せち、こんさつ đọc sai 切 thành さつ nên đều sai.",
    "voc": "懇切（こんせつ）：ân cần, tận tình； 対応（たいおう）：ứng xử, đối đáp； 感心（かんしん）：khâm phục, cảm phục"
  },
  {
    "s": "卑劣 な 手段 で 勝とう と する 人 は、 誰 からも 信頼 されない。",
    "t": "卑劣",
    "r": "ひれつ",
    "w": ["ひれち", "びれつ", "ひれい"],
    "exp": "卑劣 đọc là ひれつ（卑 ひ、劣 れつ）— nghĩa là đê tiện, hèn hạ. ひれち đọc sai 劣 thành ち、びれつ đọc sai 卑 thành び、ひれい đọc sai 劣 thành い nên đều sai.",
    "voc": "卑劣（ひれつ）：đê tiện, hèn hạ； 手段（しゅだん）：thủ đoạn, phương tiện； 信頼（しんらい）：tin tưởng"
  },
  {
    "s": "彼 は 無実 を 証明 し、 自分 の 潔白 を 主張 した。",
    "t": "潔白",
    "r": "けっぱく",
    "w": ["けつはく", "けっぱこ", "げっぱく"],
    "exp": "潔白 đọc là けっぱく（潔 けっ、白 ぱく）— nghĩa là trong sạch, vô tội. けつはく đọc sai 潔 thành けつ、けっぱこ đọc sai 白 thành ぱこ、げっぱく đọc sai 潔 thành げっ nên đều sai.",
    "voc": "潔白（けっぱく）：trong sạch, vô tội； 無実（むじつ）：vô tội； 証明（しょうめい）：chứng minh； 主張（しゅちょう）：khẳng định, chủ trương"
  },
  {
    "s": "仕事 に 対する 怠慢 な 態度 が、 事故 を 招いた。",
    "t": "怠慢",
    "r": "たいまん",
    "w": ["だいまん", "たいばん", "たいま"],
    "exp": "怠慢 đọc là たいまん（怠 たい、慢 まん）— nghĩa là lười biếng, chểnh mảng, tắc trách. だいまん đọc sai 怠 thành だい、たいばん đọc sai 慢 thành ばん、たいま thiếu âm ん ở cuối nên đều sai.",
    "voc": "怠慢（たいまん）：lười biếng, chểnh mảng； 態度（たいど）：thái độ； 事故（じこ）：tai nạn； 招く（まねく）：gây ra, dẫn đến"
  },
  {
    "s": "彼女 は 知識 欲 が 旺盛 で、 毎日 本 を 読んで いる。",
    "t": "旺盛",
    "r": "おうせい",
    "w": ["おうしょう", "おおせい", "おうせ"],
    "exp": "旺盛 đọc là おうせい（旺 おう、盛 せい）— nghĩa là dồi dào, mạnh mẽ (ham muốn, sức sống). おうしょう đọc sai 盛 thành しょう、おおせい đọc sai 旺 thành おお、おうせ thiếu âm い ở cuối nên đều sai.",
    "voc": "旺盛（おうせい）：dồi dào, mạnh mẽ； 知識欲（ちしきよく）：ham muốn tri thức； 毎日（まいにち）：mỗi ngày"
  }
  ],
  ctx: [
  {
    "s": "この 本 は、 複雑 な 社会 問題 を 分かりやすく （　）して いる。",
    "a": "解説",
    "w": ["隠蔽", "歪曲", "無視"],
    "exp": "Cuốn sách này giải thích vấn đề xã hội phức tạp một cách dễ hiểu nên điền 解説している (giải thích, bình giải). 隠蔽 (che giấu)、歪曲 (bóp méo)、無視 (phớt lờ) đều trái nghĩa với ý giải thích rõ ràng nên sai.",
    "voc": "解説（かいせつ）：giải thích, bình giải； 複雑（ふくざつ）：phức tạp； 社会問題（しゃかいもんだい）：vấn đề xã hội； 分かりやすく：một cách dễ hiểu"
  },
  {
    "s": "この 情報 は インターネット を 通じて、 あっという間 に （　）した。",
    "a": "拡散",
    "w": ["収縮", "停止", "縮小"],
    "exp": "Thông tin lan truyền qua mạng trong chớp mắt nên điền 拡散した (lan rộng, phát tán). 収縮 (co lại)、停止 (dừng lại)、縮小 (thu hẹp) đều chỉ sự thu nhỏ hoặc dừng lại, trái với ý lan truyền nhanh nên sai.",
    "voc": "拡散（かくさん）：lan rộng, phát tán； インターネット：mạng internet； 通じて（つうじて）：thông qua； あっという間 に：trong chớp mắt"
  },
  {
    "s": "問題 の 全体像 を 正しく （　）する こと が、 解決 の 第一歩 だ。",
    "a": "把握",
    "w": ["誤解", "混乱", "放置"],
    "exp": "Muốn giải quyết vấn đề thì trước hết phải nắm bắt đúng toàn cảnh nên điền 把握する (nắm bắt, thấu hiểu). 誤解 (hiểu lầm)、混乱 (rối loạn)、放置 (bỏ mặc) đều không thể là bước đầu tiên để giải quyết nên sai.",
    "voc": "把握（はあく）：nắm bắt, thấu hiểu； 全体像（ぜんたいぞう）：toàn cảnh； 解決（かいけつ）：giải quyết； 第一歩（だいいっぽ）：bước đầu tiên"
  },
  {
    "s": "長い 訓練 の 末、 彼 は ついに 恐怖心 を （　）した。",
    "a": "克服",
    "w": ["増加", "維持", "悪化"],
    "exp": "Sau thời gian dài rèn luyện, cuối cùng anh ấy đã vượt qua nỗi sợ nên điền 克服した (khắc phục, vượt qua). 増加 (tăng lên)、維持 (duy trì)、悪化 (trở nên xấu đi) đều không diễn tả việc chiến thắng nỗi sợ nên sai.",
    "voc": "克服（こくふく）：khắc phục, vượt qua； 恐怖心（きょうふしん）：nỗi sợ hãi； 訓練（くんれん）：rèn luyện, huấn luyện； ついに：cuối cùng"
  },
  {
    "s": "他人 の 意見 を （　）し、 耳 を 傾ける こと が 大切 だ。",
    "a": "尊重",
    "w": ["否定", "無視", "軽視"],
    "exp": "Việc tôn trọng ý kiến của người khác và lắng nghe là quan trọng nên điền 尊重し (tôn trọng). 否定 (phủ định)、無視 (phớt lờ)、軽視 (coi nhẹ) đều mâu thuẫn với 耳を傾ける (lắng nghe) nên sai.",
    "voc": "尊重（そんちょう）：tôn trọng； 意見（いけん）：ý kiến； 耳を傾ける（みみをかたむける）：lắng nghe； 大切（たいせつ）：quan trọng"
  },
  {
    "s": "この 小説 は、 戦後 の 社会 の 様子 を よく （　）している。",
    "a": "反映",
    "w": ["隠蔽", "歪曲", "拒否"],
    "exp": "Tiểu thuyết này phản ánh rõ nét bộ mặt xã hội thời hậu chiến nên điền 反映している (phản ánh). 隠蔽 (che giấu)、歪曲 (bóp méo)、拒否 (từ chối) đều không hợp với ý tiểu thuyết tái hiện chân thực xã hội nên sai.",
    "voc": "反映（はんえい）：phản ánh； 戦後（せんご）：thời hậu chiến； 様子（ようす）：bộ mặt, tình hình； 小説（しょうせつ）：tiểu thuyết"
  },
  {
    "s": "会社 は 海外 市場 へ の 進出 を 進め、 事業 を （　）した。",
    "a": "拡大",
    "w": ["縮小", "停止", "解散"],
    "exp": "Công ty đẩy mạnh tiến ra thị trường nước ngoài, tức là mở rộng kinh doanh nên điền 拡大した (mở rộng). 縮小 (thu hẹp)、停止 (dừng lại)、解散 (giải thể) đều trái với hướng mở rộng ra nước ngoài nên sai.",
    "voc": "拡大（かくだい）：mở rộng； 海外市場（かいがいしじょう）：thị trường nước ngoài； 進出（しんしゅつ）：tiến ra, mở rộng sang； 事業（じぎょう）：kinh doanh, sự nghiệp"
  }
  ],
  syn: [
  {
    "s": "環境 問題 は 深刻 に なって いる。",
    "t": "深刻",
    "a": "ひどい",
    "w": ["かるい", "あさい", "やさしい"],
    "exp": "深刻な環境問題 nghĩa là vấn đề môi trường trở nên nghiêm trọng, trầm trọng nên từ đồng nghĩa là ひどい (tồi tệ, nghiêm trọng). かるい (nhẹ)、あさい (nông, hời hợt)、やさしい (dễ dàng, dịu dàng) đều trái nghĩa nên sai.",
    "voc": "深刻（しんこく）：nghiêm trọng, trầm trọng； 環境問題（かんきょうもんだい）：vấn đề môi trường； ひどい：tồi tệ, nghiêm trọng"
  },
  {
    "s": "彼女 は 温和 な 性格 で、 誰 とでも 仲良く できる。",
    "t": "温和",
    "a": "おだやかな",
    "w": ["きびしい", "はげしい", "つめたい"],
    "exp": "温和な性格 nghĩa là tính tình ôn hòa, hiền hòa nên từ đồng nghĩa là おだやかな (ôn hòa, dịu dàng). きびしい (nghiêm khắc)、はげしい (dữ dội)、つめたい (lạnh lùng) đều trái nghĩa nên sai.",
    "voc": "温和（おんわ）：ôn hòa, hiền hòa； 性格（せいかく）：tính cách； 仲良く（なかよく）：thân thiết, hòa thuận"
  },
  {
    "s": "この 問題 は 膨大 な 時間 を 要する。",
    "t": "膨大",
    "a": "きょだいな",
    "w": ["わずかな", "ちいさな", "みじかい"],
    "exp": "膨大な時間 nghĩa là lượng thời gian khổng lồ nên từ đồng nghĩa là きょだいな (to lớn, khổng lồ). わずかな (chút ít)、ちいさな (nhỏ bé)、みじかい (ngắn) đều trái nghĩa nên sai.",
    "voc": "膨大（ぼうだい）：khổng lồ, đồ sộ； 要する（ようする）：cần, đòi hỏi； 時間（じかん）：thời gian"
  },
  {
    "s": "彼 は 巧妙 な 手口 で 人々 を だました。",
    "t": "巧妙",
    "a": "たくみな",
    "w": ["へたな", "まずい", "あらっぽい"],
    "exp": "巧妙な手口 nghĩa là thủ đoạn khéo léo, tinh vi nên từ đồng nghĩa là たくみな (khéo léo, tài tình). へたな (vụng về)、まずい (tệ, dở)、あらっぽい (thô bạo, cẩu thả) đều trái nghĩa nên sai.",
    "voc": "巧妙（こうみょう）：khéo léo, tinh vi； 手口（てぐち）：thủ đoạn； だます：lừa gạt"
  },
  {
    "s": "彼 は 冷静 な 判断 で 問題 を 解決 した。",
    "t": "冷静",
    "a": "おちついた",
    "w": ["あわてた", "かんじょうてきな", "さわがしい"],
    "exp": "冷静な判断 nghĩa là sự phán đoán bình tĩnh, sáng suốt nên từ đồng nghĩa là おちついた (bình tĩnh, điềm tĩnh). あわてた (vội vàng, hoảng hốt)、かんじょうてきな (cảm tính, theo cảm xúc)、さわがしい (ồn ào, náo động) đều không hợp với một phán đoán bình tĩnh nên sai.",
    "voc": "冷静（れいせい）：bình tĩnh, điềm tĩnh； 判断（はんだん）：phán đoán； 問題（もんだい）：vấn đề； 解決（かいけつ）：giải quyết； 落ち着く（おちつく）：bình tĩnh lại"
  },
  {
    "s": "この 地域 は 水産 資源 が 豊富 だ。",
    "t": "豊富",
    "a": "ゆたかな",
    "w": ["とぼしい", "わずかな", "すくない"],
    "exp": "水産資源が豊富だ nghĩa là tài nguyên thủy sản dồi dào nên từ đồng nghĩa là ゆたかな (phong phú, dồi dào). とぼしい (nghèo nàn)、わずかな (chút ít)、すくない (ít ỏi) đều trái nghĩa nên sai.",
    "voc": "豊富（ほうふ）：phong phú, dồi dào； 水産資源（すいさんしげん）：tài nguyên thủy sản； 地域（ちいき）：khu vực, địa phương"
  }
  ],
  yoho: [
  {
    "t": "円滑",
    "s": ["会議 は 円滑 に 進んだ。", "彼 は 円滑 な ご飯 を 食べた。", "この 水 は 円滑 に 冷たい です。", "彼女 は 円滑 な 髪 を して いる。"],
    "a": 0,
    "exp": "円滑に進んだ nghĩa là cuộc họp diễn ra suôn sẻ, trôi chảy — 円滑 dùng cho sự việc, quan hệ, tiến trình diễn ra thuận lợi. 円滑なご飯、円滑に冷たい、円滑な髪 đều sai vì 円滑 không dùng để tả cơm, nước hay tóc.",
    "voc": "円滑（えんかつ）：suôn sẻ, trôi chảy； 会議（かいぎ）：cuộc họp； 進む（すすむ）：tiến triển"
  },
  {
    "t": "妥当",
    "s": ["彼 は 妥当 な ご飯 を 食べた。", "この 水 は 妥当 に 冷たい です。", "この 判断 は 妥当 だ と 思う。", "彼女 は 妥当 な 髪 を して いる。"],
    "a": 2,
    "exp": "この判断は妥当だ nghĩa là phán đoán này là hợp lý, thích đáng — 妥当 dùng cho phán đoán, quyết định, mức giá, cách xử lý. 妥当なご飯、妥当に冷たい、妥当な髪 đều sai vì 妥当 không dùng để tả cơm, nước hay tóc.",
    "voc": "妥当（だとう）：hợp lý, thích đáng； 判断（はんだん）：phán đoán； 思う（おもう）：nghĩ rằng"
  },
  {
    "t": "顕著",
    "s": ["彼 は 顕著 に ゆっくり 歩いた。", "近年、 都市部 と 地方 の 格差 が 顕著 に なって いる。", "この 本 は 顕著 に 厚い です。", "彼女 は 顕著 に 長い 時間 眠った。"],
    "a": 1,
    "exp": "格差が顕著になっている nghĩa là khoảng cách chênh lệch trở nên rõ rệt — 顕著 dùng cho sự khác biệt, thay đổi, khuynh hướng hiện ra rõ ràng. 顕著にゆっくり歩いた、顕著に厚い、顕著に長い時間眠った đều sai vì 顕著 không tả tốc độ đi, độ dày của sách hay thời gian ngủ.",
    "voc": "顕著（けんちょ）：rõ rệt, nổi bật； 格差（かくさ）：khoảng cách chênh lệch； 都市部（としぶ）：khu vực thành thị； 地方（ちほう）：địa phương"
  },
  {
    "t": "繊細",
    "s": ["彼 は 繊細 な 車 に 乗った。", "この 水 は 繊細 に 冷たい です。", "彼 は 繊細 に 大きな 声 で 話した。", "彼女 は 繊細 な 感性 の 持ち主 だ。"],
    "a": 3,
    "exp": "繊細な感性の持ち主 nghĩa là người có cảm xúc tinh tế, nhạy cảm — 繊細 dùng cho cảm xúc, tâm hồn, đường nét tinh vi. 繊細な車、繊細に冷たい、繊細に大きな声で話した đều sai vì 繊細 không tả xe, nước lạnh hay cách nói to.",
    "voc": "繊細（せんさい）：tinh tế, nhạy cảm； 感性（かんせい）：cảm xúc, cảm tính； 持ち主（もちぬし）：người sở hữu"
  },
  {
    "t": "尽きる",
    "s": ["話題 が 尽きる こと は なかった。", "彼 は 尽きる ご飯 を 食べた。", "この 色 は 尽きる こと が あります。", "彼女 は 尽きる 髪 を して いる。"],
    "a": 0,
    "exp": "話題が尽きることはなかった nghĩa là chủ đề trò chuyện không bao giờ cạn — 尽きる dùng khi một thứ gì đó (chủ đề, tiền, sức lực) hết, cạn kiệt. 尽きるご飯、色は尽きることがあります、尽きる髪 đều sai vì 尽きる không bổ nghĩa cho cơm, màu sắc hay tóc — màu sắc không thể cạn kiệt.",
    "voc": "尽きる（つきる）：cạn kiệt, hết； 話題（わだい）：chủ đề trò chuyện； 色（いろ）：màu sắc； なかった：đã không (hết)"
  },
  {
    "t": "徹底",
    "s": ["彼 は 徹底 な ご飯 を 食べた。", "この 水 は 徹底 に 冷たい です。", "彼女 は 徹底 な 髪 を して いる。", "安全 対策 を 徹底 する 必要 が ある。"],
    "a": 3,
    "exp": "安全対策を徹底する nghĩa là thực hiện triệt để các biện pháp an toàn — 徹底する dùng cho việc làm một việc gì đó đến cùng, triệt để. 徹底なご飯、徹底に冷たい、徹底な髪 đều sai vì 徹底 không dùng để tả cơm, nước hay tóc.",
    "voc": "徹底（てってい）：triệt để, đến cùng； 安全対策（あんぜんたいさく）：biện pháp an toàn； 必要（ひつよう）：cần thiết"
  }
  ],
  g1dlg: [
  {
    "d": ["試験 が 終わった 途端、 教室 は どう なった の。", "試験 が 終わる （　）、 生徒 たち は 一斉 に 立ち上がった んです。"],
    "a": "や否や",
    "w": ["ばかりか", "せいか", "ともなると"],
    "p": "〜や否や",
    "exp": "試験が終わるや否や生徒たちは一斉に立ち上がった nghĩa là vừa thi xong thì học sinh đồng loạt đứng dậy ngay — や否や diễn tả hai việc xảy ra gần như đồng thời, đi sau động từ dạng từ điển. ばかりか (không những... mà còn)、せいか (có lẽ vì)、ともなると (khi đã đến mức...) đều không diễn tả được sự tiếp nối tức thì này nên sai.",
    "voc": "や否や（やいなや）：ngay khi vừa... thì； 試験（しけん）：kỳ thi； 一斉に（いっせいに）：đồng loạt； 立ち上がる（たちあがる）：đứng dậy"
  },
  {
    "d": ["彼 は 家 に 帰って、 すぐ 何 を した の。", "家 に 着く （　）、 パソコン の 前 に 座った んです。"],
    "a": "なり",
    "w": ["てからというもの", "を限りに", "せいか"],
    "p": "V-る なり",
    "exp": "家に着くなりパソコンの前に座った nghĩa là vừa về đến nhà thì anh ấy ngồi ngay vào máy tính — V-るなり diễn tả hành động tiếp theo xảy ra ngay lập tức. てからというもの (kể từ khi... thì cứ), を限りに (lấy... làm giới hạn cuối), せいか (có lẽ vì) đều không diễn tả được sự tiếp nối tức thì này nên sai.",
    "voc": "なり：ngay khi vừa... thì； 着く（つく）：đến nơi； パソコン：máy tính； 座る（すわる）：ngồi"
  },
  {
    "d": ["新 製品 の 発売 は いつ ですか。", "全国 発売 （　）、 来月 東京 で 先行 発売 します。"],
    "a": "に先駆けて",
    "w": ["を限りに", "に起因する", "を顧みず"],
    "p": "〜に先駆けて",
    "exp": "全国発売に先駆けて来月東京で先行発売します nghĩa là trước khi phát hành toàn quốc, tháng sau sẽ bán trước ở Tokyo — に先駆けて nghĩa là đi trước, làm trước một việc gì đó. を限りに (lấy... làm mốc cuối)、に起因する (do... gây ra)、を顧みず (không màng đến) đều sai nghĩa trong ngữ cảnh bán trước này nên sai.",
    "voc": "先駆ける（さきがける）：đi trước, mở đường； 全国発売（ぜんこくはつばい）：phát hành toàn quốc； 先行発売（せんこうはつばい）：bán trước； 新製品（しんせいひん）：sản phẩm mới"
  }
  ],
  g1: [
  {
    "s": "覚えた （　）、 忘れて しまう ので、 復習 が 欠かせない。",
    "a": "そばから",
    "w": ["や否や", "ばかりか", "なり"],
    "p": "V-た そばから",
    "exp": "覚えたそばから忘れてしまう nghĩa là vừa nhớ xong đã quên ngay — V-たそばから diễn tả một việc xảy ra ngay sau khi hành động trước hoàn thành, thường lặp lại. や否や và なり đều chỉ đi sau động từ dạng từ điển (V-る: 覚えるや否や・覚えるなり) nên không đi sau dạng た là 覚えた ở đây. ばかりか đi sau dạng た được, nhưng nghĩa là \"không những... mà còn\", nối thêm một sự việc song song — 忘れてしまう ở đây không phải là sự việc thêm vào mà là việc xảy ra ngay sau khi vừa nhớ xong, nên không diễn tả được ý \"vừa... đã...\" của そばから.",
    "voc": "そばから：ngay khi vừa... thì； 覚える（おぼえる）：nhớ, ghi nhớ； 忘れる（わすれる）：quên； 復習（ふくしゅう）：ôn tập； 欠かせない（かかせない）：không thể thiếu"
  },
  {
    "s": "日本 へ 来て （　）、 毎日 日本語 で 日記 を 書いて いる。",
    "a": "てからというもの",
    "w": ["ては", "たそばから", "や否や"],
    "p": "〜てからというもの",
    "exp": "日本へ来てからというもの、毎日日本語で日記を書いている nghĩa là kể từ khi sang Nhật đến nay, ngày nào cũng viết nhật ký bằng tiếng Nhật — てからというもの diễn tả một trạng thái tiếp diễn kể từ một thời điểm. ては (nếu... thì)、たそばから (đi sau dạng た, không đi sau て)、や否や (đi sau dạng từ điển) đều sai ngữ pháp và sai nghĩa ở đây.",
    "voc": "てからというもの：kể từ khi...； 日記（にっき）：nhật ký； 毎日（まいにち）：mỗi ngày"
  },
  {
    "s": "三十年 勤めた 会社 を （　）、 退職 する こと に した。",
    "a": "を限りに",
    "w": ["を境に", "を受けて", "を踏まえて"],
    "p": "N を限りに",
    "exp": "三十年勤めた会社を限りに退職する nghĩa là lấy công ty đã làm việc 30 năm làm điểm kết thúc để nghỉ hưu — Nを限りに diễn tả lấy một sự việc làm mốc cuối cùng. を境に (lấy... làm bước ngoặt) thường đi với thời gian hay sự kiện mang tính bước ngoặt, không hợp với công ty làm mốc kết thúc; を受けて (nhận được... mà)、を踏まえて (dựa trên...) đều sai nghĩa ở đây.",
    "voc": "限りに（かぎりに）：lấy... làm giới hạn cuối； 勤める（つとめる）：làm việc； 退職（たいしょく）：nghỉ hưu, nghỉ việc"
  },
  {
    "s": "冬 （　）、 この 山 は 雪 に 閉ざされ、 登る こと は できない。",
    "a": "ともなると",
    "w": ["や否や", "せいか", "ばかりか"],
    "p": "〜ともなると / ともなれば",
    "exp": "冬ともなるとこの山は雪に閉ざされ、登ることはできない nghĩa là cứ đến mùa đông thì ngọn núi này bị tuyết phong tỏa, không thể leo được — ともなると diễn tả khi đã đến một thời điểm hay tình huống nhất định thì... や否や (ngay khi... thì)、せいか (có lẽ vì)、ばかりか (không những) đều không diễn tả được quan hệ điều kiện theo mùa này nên sai.",
    "voc": "ともなると：khi đã đến... thì； 閉ざす（とざす）：phong tỏa, đóng kín； 登る（のぼる）：leo (núi)"
  },
  {
    "s": "最近 眠い の は、 季節 の 変わり目 の （　）かも しれない。",
    "a": "せいか",
    "w": ["おかげか", "ばかりか", "や否や"],
    "p": "〜せいか",
    "exp": "最近眠いのは季節の変わり目のせいかもしれない nghĩa là dạo này buồn ngủ có lẽ là vì đang giao mùa — Nのせいか diễn tả suy đoán về nguyên nhân (thường mang sắc thái tiêu cực). おかげか (nhờ có...) mang sắc thái tích cực nên không hợp với buồn ngủ; ばかりか (không những) và や否や (ngay khi... thì) đều sai ngữ pháp ở đây.",
    "voc": "せいか：có lẽ vì...； 眠い（ねむい）：buồn ngủ； 季節の変わり目（きせつのかわりめ）：thời điểm giao mùa"
  },
  {
    "s": "この 事故 は、 運転手 の 注意 不足 （　）もの だ と されて いる。",
    "a": "に起因する",
    "w": ["に由来する", "がもとで", "を踏まえて"],
    "p": "N + に起因する",
    "exp": "この事故は運転手の注意不足に起因するものだとされている nghĩa là vụ tai nạn này được cho là bắt nguồn từ sự thiếu chú ý của tài xế — に起因する diễn tả nguyên nhân gây ra một sự việc, thường dùng trong văn phong trang trọng. に由来する (bắt nguồn, có nguồn gốc) thường dùng cho nguồn gốc của từ ngữ hay phong tục, không dùng cho nguyên nhân tai nạn; がもとで cần dạng Nがもとで nên không khớp với chỗ trống này; を踏まえて (dựa trên...) sai nghĩa.",
    "voc": "起因する（きいんする）：bắt nguồn từ, do... gây ra； 注意不足（ちゅういぶそく）：thiếu chú ý； 事故（じこ）：tai nạn； 運転手（うんてんしゅ）：tài xế"
  },
  {
    "s": "彼 は 遅刻 した （　）、 宿題 さえ 出して いなかった。",
    "a": "ばかりか",
    "w": ["せいか", "ともなると", "や否や"],
    "p": "〜ばかりか",
    "exp": "彼は遅刻したばかりか、宿題さえ出していなかった nghĩa là anh ấy không những đi muộn mà thậm chí còn chưa nộp bài tập — ばかりか diễn tả không chỉ... mà còn, dùng để thêm một sự việc tồi tệ hơn. せいか (có lẽ vì)、ともなると (khi đã đến...)、や否や (ngay khi... thì) đều không diễn tả được quan hệ thêm vào này nên sai.",
    "voc": "ばかりか：không những... mà còn； 遅刻（ちこく）：đi muộn； 宿題（しゅくだい）：bài tập về nhà； さえ：thậm chí"
  }
  ],
  star: [
  {
    "pre": "",
    "post": "。",
    "chunks": ["会議 は 紛糾 し", "ついに 決裂 に", "至って", "しまった"],
    "p": "〜に至って",
    "exp": "Thứ tự đúng: 会議は紛糾し (cuộc họp tranh cãi gay gắt) + ついに決裂に (cuối cùng đi đến đổ vỡ) + 至って (đạt đến) + しまった (đã... mất rồi). に至って phải đứng ngay sau danh từ chỉ kết quả là 決裂に, còn しまった ở cuối câu diễn tả sự việc đáng tiếc đã xảy ra; đảo vị trí sẽ phá vỡ cấu trúc Nに至る.",
    "voc": "紛糾（ふんきゅう）：tranh cãi gay gắt； 決裂（けつれつ）：đổ vỡ, tan vỡ； 至る（いたる）：đạt đến； しまう：(trợ động từ) đã... mất rồi"
  },
  {
    "pre": "委員 たち は",
    "post": "。",
    "chunks": ["今回 の 調査 結果 を 踏まえて", "来年度 の 予算 案 を", "見直す こと に", "決めた"],
    "p": "N + を踏まえて",
    "exp": "Thứ tự đúng: 今回の調査結果を踏まえて (dựa trên kết quả điều tra lần này) + 来年度の予算案を (dự thảo ngân sách năm sau) + 見直すことに (xem xét lại) + 決めた (đã quyết định). Cụm を踏まえて phải đứng đầu câu làm nền tảng cho quyết định, còn 決めた ở cuối câu; đảo vị trí sẽ làm mất quan hệ dựa trên - quyết định.",
    "voc": "踏まえる（ふまえる）：dựa trên, căn cứ vào； 調査結果（ちょうさけっか）：kết quả điều tra； 予算案（よさんあん）：dự thảo ngân sách； 見直す（みなおす）：xem xét lại"
  },
  {
    "pre": "",
    "post": "。",
    "chunks": ["合格 した と 思いきや", "実は 補欠 合格 で", "正式 な 入学 は", "来年 だった"],
    "p": "〜と思いきや",
    "exp": "Thứ tự đúng: 合格したと思いきや (tưởng là đã đỗ rồi, nào ngờ) + 実は補欠合格で (thực ra chỉ là đỗ dự bị) + 正式な入学は (việc nhập học chính thức) + 来年だった (là vào năm sau). と思いきや phải đứng ngay sau mệnh đề chỉ điều tưởng là đúng, còn 来年だった ở cuối câu mới là sự thật bất ngờ; đảo vị trí sẽ phá vỡ quan hệ tương phản tưởng - thực.",
    "voc": "思いきや（おもいきや）：tưởng là... nào ngờ； 補欠合格（ほけつごうかく）：đỗ dự bị； 正式（せいしき）：chính thức； 入学（にゅうがく）：nhập học"
  },
  {
    "pre": "",
    "post": "。",
    "chunks": ["兄 は 勉強 が できる のに ひきかえ", "弟 は", "運動 ばかり して いて", "勉強 が 苦手 だ"],
    "p": "〜にひきかえ",
    "exp": "Thứ tự đúng: 兄は勉強ができるのにひきかえ (trái lại với anh trai giỏi học) + 弟は (em trai thì) + 運動ばかりしていて (chỉ toàn chơi thể thao) + 勉強が苦手だ (học kém). にひきかえ phải đứng sau mệnh đề chỉ đối tượng đối chiếu là anh trai, còn 勉強が苦手だ ở cuối câu mới là kết luận đối lập; đảo vị trí sẽ phá vỡ cấu trúc đối chiếu AにひきかえB.",
    "voc": "ひきかえ：trái lại, ngược lại； 苦手（にがて）：kém, yếu； 運動（うんどう）：thể thao, vận động"
  },
  {
    "pre": "",
    "post": "。",
    "chunks": ["苦労 して こそ", "本当 の 喜び が", "分かる もの だ", "と 彼 は 言った"],
    "p": "V-て こそ",
    "exp": "Thứ tự đúng: 苦労してこそ (chính nhờ đã khổ cực) + 本当の喜びが (niềm vui thực sự) + 分かるものだ (mới hiểu được) + と彼は言った (anh ấy đã nói như vậy). V-てこそ phải đứng đầu câu để nhấn mạnh điều kiện, còn と彼は言った ở cuối câu đóng vai trò tường thuật; đảo vị trí sẽ phá vỡ cấu trúc nhấn mạnh - kết luận.",
    "voc": "苦労（くろう）：khổ cực, vất vả； 喜び（よろこび）：niềm vui； 分かる（わかる）：hiểu được； ものだ：(diễn tả chân lý chung)"
  }
  ],
  bunsho: [
  {
    "intro": "つぎの 文章は 地方 の 人口 減少 について 書かれた 文章です。",
    "p": "日本 の 地方 で は、 若い 人 が 都市 へ 移り、 人口 が 減り 続けて いる。（　1　）、 商店 が 閉まり、 学校 が 統合 される など、 生活 に さまざまな 影響 が 出て いる。（　2　）、 人口 が 減る こと は、 必ずしも 悪い こと ばかり では ない。 空き家 を 活用 して、 移住者 を 受け入れる 地域 も 増えて いる。（　3　）、 移住者 が 増えれば、 地域 に 新しい 仕事 が 生まれる 可能性 も ある。（　4　）、 長野県 の ある 村 で は、 移住者 向け の 住宅 を 整備 し、 子育て 支援 を 充実 させた 結果、 若い 家族 が 増えた という。（　5　）、 人口 減少 に 直面 する 地域 に は、 住民 と 行政 が 一緒 に、 新しい 暮らし方 を 考える こと が 求められて いる。",
    "b": [
      { "a": "したがって", "w": ["しかし", "たとえば", "一方で"] },
      { "a": "一方で", "w": ["したがって", "たとえば", "そのため"] },
      { "a": "さらに", "w": ["しかし", "つまり", "たとえば"] },
      { "a": "たとえば", "w": ["しかし", "したがって", "つまり"] },
      { "a": "つまり", "w": ["しかし", "たとえば", "一方で"] }
    ],
    "exp": "Ô 1 したがって: dân số giảm kéo theo cửa hàng đóng cửa, trường học sáp nhập — quan hệ nguyên nhân-kết quả nên dùng したがって (do đó). Ô 2 一方で: chuyển ý sang mặt tích cực — dân số giảm không hẳn chỉ toàn điều xấu nên dùng 一方で (mặt khác). Ô 3 さらに: bổ sung thêm một khả năng tích cực nữa (người nhập cư tăng thì việc làm mới có thể sinh ra) nên dùng さらに (hơn nữa). Ô 4 たとえば: đưa ra ví dụ cụ thể là một ngôi làng ở Nagano nên dùng たとえば (ví dụ như). Ô 5 つまり: từ ví dụ trên rút ra kết luận chung — các vùng đối mặt với giảm dân số cần suy nghĩ cách sống mới nên dùng つまり (tóm lại). Các đáp án gây nhiễu như しかし (tuy nhiên) hay そのため (vì vậy) không diễn tả đúng quan hệ logic ở các vị trí này.",
    "voc": "人口減少（じんこうげんしょう）：giảm dân số； 統合（とうごう）：sáp nhập； 空き家（あきや）：nhà trống； 移住者（いじゅうしゃ）：người nhập cư, người chuyển đến； 子育て支援（こそだてしえん）：hỗ trợ nuôi dạy con"
  }
  ],
  readS: [
  {
    "p": "山田 さん は、 毎朝 六時 に 起きて、 川沿い を 三十分 走ります。 走った 後、 家 で 朝ごはん を 作り、 八時 に 会社 へ 出かけます。 休み の 日 は、 走る 代わり に、 近く の 公園 で ヨガ を します。 会社 で は、 昼休み に 同僚 と よく 話す そうです。",
    "q": "山田 さん について、 正しい もの は どれ です か。",
    "o": ["毎日 川沿い を 走って いる。", "休み の 日 は 会社 へ 行く。", "平日 は 朝 走って から 会社 へ 行く。", "毎朝 七時 に 起きる。"],
    "a": 2,
    "e": "休みの日は走らずヨガをするので、毎日走るわけではない。",
    "exp": "Bằng chứng: bài nói 山田さんは毎朝六時に起きて川沿いを三十分走り、八時に会社へ出かける (dậy lúc 6 giờ, chạy 30 phút ven sông rồi 8 giờ đi làm), và 休みの日は走る代わりに公園でヨガをする (ngày nghỉ thì tập yoga thay vì chạy) nên đáp án 3 đúng. Đáp án 1 sai vì ngày nghỉ anh ấy không chạy. Đáp án 2 sai vì ngày nghỉ anh ấy đi công viên tập yoga chứ không đi làm. Đáp án 4 sai vì anh ấy dậy lúc 6 giờ chứ không phải 7 giờ.",
    "voc": "川沿い（かわぞい）：ven sông； 朝ごはん（あさごはん）：bữa sáng； 出かける（でかける）：ra khỏi nhà, đi làm； 同僚（どうりょう）：đồng nghiệp； ヨガ：yoga"
  },
  {
    "p": "電気 料金 の 案内 です。 基本 料金 は 月 1,100円 で、 使った 電気 1kWh あたり 28円 が 加わります。 今月、 佐藤 さん は 120kWh 使いました。 来月 から、 基本 料金 は 1,200円 に なります。",
    "q": "佐藤 さん の 今月 の 電気 料金 は いくら です か。",
    "o": ["3,360円", "4,460円", "5,560円", "1,100円"],
    "a": 1,
    "calc": true,
    "e": "基本料金1,100円に、120kWh×28円＝3,360円を加えると4,460円になる。",
    "exp": "Bằng chứng: 基本料金は月1,100円で、使った電気1kWhあたり28円が加わる (phí cơ bản 1.100 yên/tháng, cộng 28 yên mỗi kWh). Tính: 1.100 + 120×28 = 1.100 + 3.360 = 4.460 yên nên đáp án 2 đúng. Đáp án 1 (3.360 yên) chỉ là tiền điện theo lượng dùng, chưa cộng phí cơ bản. Đáp án 3 sai phép tính. Đáp án 4 chỉ là phí cơ bản, chưa cộng tiền điện.",
    "voc": "電気料金（でんきりょうきん）：tiền điện； 基本料金（きほんりょうきん）：phí cơ bản； 加わる（くわわる）：được cộng thêm； kWh：kilowatt giờ"
  },
  {
    "p": "市立 図書館 の お知らせ です。 本 は 2週間 借りる こと が できます。 借りた 本 は、 1回 だけ 延長 する こと が できます。 延長 する とき は、 図書館 の カウンター か 電話 で 手続き を して ください。 返却 ポスト は、 夜 9時 まで 使う こと が できます。",
    "q": "図書館 の 本 について、 正しい もの は どれ です か。",
    "o": ["3週間 借りる こと が できる。", "延長 は 1回 だけ できる。", "延長 の 手続き は インターネット で できる。", "返却 ポスト は 夜 10時 まで 使える。"],
    "a": 1,
    "e": "借りた本は、1回だけ延長することができる。",
    "exp": "Bằng chứng: 借りた本は、1回だけ延長することができる (sách mượn chỉ được gia hạn 1 lần) nên đáp án 2 đúng. Đáp án 1 sai vì thời hạn mượn là 2週間 (2 tuần) chứ không phải 3週間. Đáp án 3 sai vì gia hạn phải làm ở カウンターか電話 (quầy hoặc điện thoại), không nói đến internet. Đáp án 4 sai vì 返却ポストは夜9時まで (hộp trả sách dùng đến 9 giờ tối) chứ không phải 10 giờ.",
    "voc": "市立図書館（しりつとしょかん）：thư viện thành phố； 延長（えんちょう）：gia hạn； カウンター：quầy； 返却ポスト（へんきゃくポスト）：hộp trả sách； 手続き（てつづき）：thủ tục"
  },
  {
    "p": "明日、 台風 の 影響 で、 この 路線 は 午前中 運休 します。 午後 1時 ごろ から 運転 を 再開 する 予定 です が、 天気 に よっては 遅れる 場合 が あります。 振替 輸送 は 行いません ので、 ご注意 ください。",
    "q": "明日 の この 路線 について、 正しい もの は どれ です か。",
    "o": ["一日中 運休 する。", "午後 1時 ごろ から 運転 を 再開 する 予定 だ。", "午前中 は 通常 どおり 運転 する。", "振替 輸送 を 行う。"],
    "a": 1,
    "e": "午後1時ごろから運転を再開する予定です。",
    "exp": "Bằng chứng: 午後1時ごろから運転を再開する予定です (dự định chạy lại từ khoảng 1 giờ chiều) nên đáp án 2 đúng. Đáp án 1 sai vì chỉ 午前中運休 (ngừng chạy buổi sáng) chứ không phải cả ngày. Đáp án 3 sai vì buổi sáng ngừng chạy. Đáp án 4 sai vì 振替輸送は行いません (không có vận chuyển thay thế).",
    "voc": "台風（たいふう）：bão； 運休（うんきゅう）：ngừng chạy (tàu xe)； 再開（さいかい）：chạy lại, bắt đầu lại； 振替輸送（ふりかえゆそう）：vận chuyển thay thế"
  }
  ],
  readM: [
  {
    "p": "近年、 日本 で は テレワーク が 広がって いる。 通勤 時間 が なくなる こと で、 家族 と 過ごす 時間 が 増えた と いう 人 が 多い。 一方 で、 同僚 と の 雑談 が 減り、 新しい 発想 が 生まれにくく なった と いう 声 も ある。 また、 家 で 仕事 を する と、 仕事 と 生活 の 区別 が つきにくく、 長時間 働いて しまう 人 も いる。 企業 に よっては、 週 に 何日 か は 出社 する 日 を 決め、 直接 会って 話す 機会 を 残して いる。 また、 在宅 勤務 が 増えた こと で、 地方 に 住みながら 都市 の 会社 で 働く 人 も 増えて いる。 こうした 働き方 は、 地方 の 人口 減少 を 食い止める きっかけ に なる かも しれない。 テレワーク の 良さ と 課題 の 両方 を 考え、 働き方 を 工夫 する こと が、 これから ますます 大切 に なる だろう。",
    "qs": [
      { "q": "テレワーク の 良い 点 として、 本文 で 述べられて いる もの は どれ です か。", "o": ["通勤 時間 が なくなり、 家族 と 過ごす 時間 が 増えた こと。", "同僚 と の 雑談 が 増えた こと。", "新しい 発想 が 生まれやすく なった こと。", "仕事 と 生活 の 区別 が つきやすく なった こと。"], "a": 0, "e": "通勤時間がなくなることで、家族と過ごす時間が増えたという人が多い。" },
      { "q": "テレワーク の 課題 として、 本文 で 述べられて いる もの は どれ です か。", "o": ["通勤 時間 が 長く なった こと。", "同僚 と の 雑談 が 減り、 新しい 発想 が 生まれにくく なった こと。", "家族 と 過ごす 時間 が 減った こと。", "出社 する 日 が 増えた こと。"], "a": 1, "e": "同僚との雑談が減り、新しい発想が生まれにくくなったという声もある。" },
      { "q": "筆者 の 考え に 合う もの は どれ です か。", "o": ["テレワーク を やめて、 すべて 出社 すべき だ。", "テレワーク の 良さ と 課題 の 両方 を 考え、 働き方 を 工夫 する こと が 大切 だ。", "テレワーク は 課題 ばかり で、 良い 点 は ない。", "企業 は 出社 する 日 を 決める べき では ない。"], "a": 1, "e": "テレワークの良さと課題の両方を考え、働き方を工夫することが、これからますます大切になるだろう。" }
    ],
    "exp": "Câu 1: bằng chứng 「通勤時間がなくなることで、家族と過ごす時間が増えたという人が多い」— không mất thời gian đi lại nên có nhiều thời gian bên gia đình. Các đáp án khác đều trái với bài:雑談が減り、新しい発想が生まれにくくなった là課題 chứ không phải良い点. Câu 2: bằng chứng 「同僚との雑談が減り、新しい発想が生まれにくくなったという声もある」— ít trò chuyện với đồng nghiệp, khó nảy ra ý tưởng mới. Câu 3: bằng chứng 「テレワークの良さと課題の両方を考え、働き方を工夫することが、これからますます大切になるだろう」— cần nhìn cả mặt tốt và mặt hạn chế để cải tiến cách làm việc.",
    "voc": "テレワーク：在宅 làm việc từ xa； 通勤（つうきん）：đi làm (di chuyển)； 雑談（ざつだん）：trò chuyện phiếm； 発想（はっそう）：ý tưởng, sáng kiến； 区別（くべつ）：phân biệt； 工夫（くふう）：cải tiến, suy nghĩ cách hay"
  },
  {
    "p": "日本 で は、 毎年 多く の 食品 が 捨てられて いる。 食べられる のに 捨てられる 食品 を、 食品 ロス と 呼ぶ。 家庭 で は、 買いすぎ や 作りすぎ が 原因 と なって いる。 一方、 店 で は、 売れ残り を 捨てる 場合 が 多い。 食品 ロス を 減らす ため に、 必要な 分 だけ 買う、 残った 料理 を 翌日 に 使う など の 工夫 が できる。 また、 賞味 期限 が 近い 食品 を 値引き して 売る 店 も 増えて いる。 食品 ロス は、 食べ物 の 無駄 だけ で は ない。 作る とき に 使われた 水 や エネルギー も 無駄 に なって しまう。 また、 飲食店 で は、 客 の 注文 に 合わせて 料理 の 量 を 調整 したり、 持ち帰り を 勧めたり する 店 も ある。 食品 ロス を 減らす こと は、 環境 を 守る こと にも つながる。 一人一人 が 意識 する こと が、 食品 ロス を 減らす 第一歩 だ。",
    "qs": [
      { "q": "食品 ロス と は 何 か。", "o": ["食べられる のに 捨てられる 食品 の こと。", "食べられなく なった 食品 の こと。", "店 で 売れ残った 食品 だけ の こと。", "賞味 期限 が 切れた 食品 だけ の こと。"], "a": 0, "e": "食べられるのに捨てられる食品を、食品ロスと呼ぶ。" },
      { "q": "家庭 で の 食品 ロス の 原因 として、 本文 で 述べられて いる もの は どれ です か。", "o": ["買いすぎ や 作りすぎ。", "賞味 期限 の 表示 が ない こと。", "店 の 値引き が 少ない こと。", "水 や エネルギー の 不足。"], "a": 0, "e": "家庭では、買いすぎや作りすぎが原因となっている。" },
      { "q": "食品 ロス を 減らす ため に、 本文 で 述べられて いる こと は どれ です か。", "o": ["食べ物 を たくさん 買って、 冷蔵庫 に 入れる こと。", "必要な 分 だけ 買い、 残った 料理 を 翌日 に 使う こと。", "賞味 期限 が 近い 食品 を 捨てる こと。", "店 で の 値引き を やめる こと。"], "a": 1, "e": "必要な分だけ買う、残った料理を翌日に使うなどの工夫ができる。" }
    ],
    "exp": "Câu 1: bằng chứng 「食べられるのに捨てられる食品を、食品ロスと呼ぶ」— thực phẩm còn ăn được mà bị vứt bỏ gọi là food loss. Câu 2: bằng chứng 「家庭では、買いすぎや作りすぎが原因となっている」— ở gia đình nguyên nhân là mua quá nhiều và nấu quá nhiều. Câu 3: bằng chứng 「必要な分だけ買う、残った料理を翌日に使うなどの工夫ができる」— chỉ mua đủ lượng cần và dùng món còn thừa vào hôm sau.",
    "voc": "食品ロス（しょくひんロス）：lãng phí thực phẩm； 捨てる（すてる）：vứt bỏ； 買いすぎ（かいすぎ）：mua quá nhiều； 作りすぎ（つくりすぎ）：nấu quá nhiều； 賞味期限（しょうみきげん）：hạn sử dụng (ngon nhất)； 値引き（ねびき）：giảm giá"
  },
  {
    "p": "毎年 秋 に、 山田町 で は 大きな 祭り が 開かれる。 この 祭り は、 三百年 以上 の 歴史 が あり、 町 の 人々 に 大切 に されて きた。 祭り の 日 に は、 町 の 中心 を 山車 が 進み、 多く の 人 が 見物 に 訪れる。 近年 は、 町 の 外 から 来る 観光客 も 増えて いる。 観光客 が 増える こと で、 町 の 宿 や 店 の 売り上げ が 増え、 町 が にぎやかに なった。 一方 で、 ごみ が 増えたり、 交通 が 混雑 したり する 問題 も 出て きた。 町 で は、 ごみ の 分別 を 呼びかけたり、 臨時 の バス を 出したり して、 対策 を 進めて いる。 また、 祭り の 準備 に は、 町 の 若い 人 たち も 参加 して いる。 祭り を 通じて、 世代 を 超えた つながり が 生まれる こと も、 町 にとって 大切 な こと だ。 祭り を 通じて、 町 の 魅力 を 多く の 人 に 知って もらう こと が、 町 の 大切 な 課題 だ。",
    "qs": [
      { "q": "この 祭り について、 本文 で 述べられて いる もの は どれ です か。", "o": ["三百年 以上 の 歴史 が ある 祭り だ。", "毎年 春 に 開かれる 祭り だ。", "町 の 外 の 人 に よって 始められた 祭り だ。", "今年 初めて 開かれる 祭り だ。"], "a": 0, "e": "この祭りは、三百年以上の歴史があり、町の人々に大切にされてきた。" },
      { "q": "観光客 が 増えた こと の 良い 影響 として、 本文 で 述べられて いる もの は どれ です か。", "o": ["町 の 宿 や 店 の 売り上げ が 増え、 町 が にぎやかに なった こと。", "ごみ が 減った こと。", "交通 の 混雑 が なくなった こと。", "祭り の 歴史 が 長く なった こと。"], "a": 0, "e": "観光客が増えることで、町の宿や店の売り上げが増え、町がにぎやかになった。" },
      { "q": "観光客 が 増えた こと の 問題 と その 対策 として、 本文 で 述べられて いる もの は どれ です か。", "o": ["ごみ が 増えたり 交通 が 混雑 したり する ので、 ごみ の 分別 を 呼びかけ、 臨時 の バス を 出して いる。", "祭り を やめる こと に した。", "観光客 の 入場 を 禁止 した。", "宿 や 店 を 閉めた。"], "a": 0, "e": "ごみが増えたり、交通が混雑したりする問題も出てきた。町では、ごみの分別を呼びかけたり、臨時のバスを出したりして、対策を進めている。" }
    ],
    "exp": "Câu 1: bằng chứng 「この祭りは、三百年以上の歴史があり、町の人々に大切にされてきた」— lễ hội có lịch sử hơn 300 năm. Đáp án 2 sai vì祭りは毎年秋に開かれる (mùa thu) chứ không phải mùa xuân. Câu 2: bằng chứng 「町の宿や店の売り上げが増え、町がにぎやかになった」— doanh thu nhà trọ và cửa hàng tăng, thị trấn nhộn nhịp hơn. Câu 3: bằng chứng 「ごみが増えたり、交通が混雑したりする問題も出てきた」「ごみの分別を呼びかけたり、臨時のバスを出したりして、対策を進めている」— rác tăng và giao thông ùn tắc nên thị trấn kêu gọi phân loại rác và chạy xe buýt tạm thời.",
    "voc": "祭り（まつり）：lễ hội； 山車（だし）：xe kiệu lễ hội； 見物（けんぶつ）：xem, ngắm； 観光客（かんこうきゃく）：khách du lịch； 売り上げ（うりあげ）：doanh thu； 分別（ぶんべつ）：phân loại； 臨時（りんじ）：tạm thời"
  }
  ],
  readL: [
  {
    "p": "近年、 人工知能 の 技術 が 急速 に 進み、 教育 の 現場 にも 大きな 変化 が 起きて いる。 例えば、 生徒 一人一人 の 理解 度 に 合わせて 問題 を 出す 教材 や、 作文 を 自動 で 添削 する 仕組み が 開発 されて いる。 こうした 技術 を 使えば、 先生 は 生徒 の 弱点 を 早く 見つけ、 一人一人 に 合った 指導 を する こと が できる。 また、 生徒 は 自分 の ペース で 学ぶ こと が でき、 分からない ところ を すぐ に 確認 できる。 一方 で、 人工知能 に 頼りすぎる こと への 心配 も ある。 答え を すぐ に 教えて もらう こと に 慣れて しまう と、 自分 で 考える 力 が 弱く なる のでは ないか と いう 声 が ある。 また、 人工知能 が 出す 答え が 必ずしも 正しい とは 限らず、 間違った 情報 を そのまま 信じて しまう 危険 も ある。 さらに、 家庭 の 経済 状況 に よって、 人工知能 を 使った 教材 を 使える 生徒 と 使えない 生徒 の 差 が 広がる こと も 心配 されて いる。 人工知能 は、 教育 を 助ける 道具 で あって、 先生 の 代わり では ない。 先生 は、 生徒 の 気持ち に 寄り添い、 励ましたり、 相談 に 乗ったり する こと が できる。 こうした 人 と 人 の 関わり こそ、 教育 の 中心 で ある。 人工知能 を 上手 に 使いながら、 人 に しか できない 教育 を 大切 に する こと が、 これから の 教育 に 求められて いる。",
    "qs": [
      { "q": "人工知能 を 使った 教育 の 良い 点 として、 本文 で 述べられて いる もの は どれ です か。", "o": ["生徒 一人一人 の 理解 度 に 合わせて 問題 を 出したり、 弱点 を 早く 見つけたり できる こと。", "先生 が 生徒 と 話す 必要 が なくなる こと。", "生徒 が 答え を 考えなくて よく なる こと。", "家庭 の 経済 状況 の 差 が なくなる こと。"], "a": 0, "e": "生徒一人一人の理解度に合わせて問題を出す教材や、作文を自動で添削する仕組みが開発されている。先生は生徒の弱点を早く見つけ、一人一人に合った指導をすることができる。" },
      { "q": "人工知能 に 頼りすぎる こと の 心配 として、 本文 で 述べられて いる もの は どれ です か。", "o": ["先生 の 仕事 が 増える こと。", "生徒 が 自分 で 考える 力 が 弱く なったり、 間違った 情報 を 信じて しまったり する こと。", "生徒 が 自分 の ペース で 学べなく なる こと。", "教材 の 値段 が 安く なる こと。"], "a": 1, "e": "答えをすぐに教えてもらうことに慣れてしまうと、自分で考える力が弱くなるのではないかという声がある。また、人工知能が出す答えが必ずしも正しいとは限らず、間違った情報をそのまま信じてしまう危険もある。" },
      { "q": "家庭 の 経済 状況 について、 本文 で 述べられて いる こと は どれ です か。", "o": ["経済 状況 に よって、 人工知能 を 使った 教材 を 使える 生徒 と 使えない 生徒 の 差 が 広がる こと が 心配 されて いる。", "経済 状況 が 良い 家庭 の 生徒 ほど、 成績 が 下がる。", "経済 状況 に よって、 先生 の 指導 が 変わる。", "経済 状況 が 悪い 家庭 の 生徒 は、 人工知能 を 使う こと が 禁止 されて いる。"], "a": 0, "e": "家庭の経済状況によって、人工知能を使った教材を使える生徒と使えない生徒の差が広がることも心配されている。" },
      { "q": "筆者 の 考え に 合う もの は どれ です か。", "o": ["人工知能 が 先生 の 代わり に なる べき だ。", "人工知能 を 上手 に 使いながら、 人 に しか できない 教育 を 大切 に する べき だ。", "人工知能 を 教育 に 使う べき では ない。", "先生 は 生徒 の 気持ち に 寄り添う 必要 は ない。"], "a": 1, "e": "人工知能を上手に使いながら、人にしかできない教育を大切にすることが、これからの教育に求められている。" }
    ],
    "exp": "Câu 1: bằng chứng 「生徒一人一人の理解度に合わせて問題を出す教材」「先生は生徒の弱点を早く見つけ、一人一人に合った指導をすることができる」— AI ra bài tập theo trình độ từng học sinh và giúp giáo viên phát hiện điểm yếu sớm. Câu 2: bằng chứng 「答えをすぐに教えてもらうことに慣れてしまうと、自分で考える力が弱くなるのではないか」「間違った情報をそのまま信じてしまう危険もある」— quen được chỉ đáp án ngay sẽ làm yếu khả năng tự suy nghĩ và có nguy cơ tin thông tin sai. Câu 3: bằng chứng 「家庭の経済状況によって、人工知能を使った教材を使える生徒と使えない生徒の差が広がることも心配されている」— hoàn cảnh kinh tế gia đình làm chênh lệch giữa học sinh dùng được và không dùng được tài liệu AI. Câu 4: bằng chứng 「人工知能を上手に使いながら、人にしかできない教育を大切にすることが、これからの教育に求められている」— vừa dùng AI khéo léo vừa trân trọng giáo dục chỉ con người mới làm được.",
    "voc": "人工知能（じんこうちのう）：trí tuệ nhân tạo； 理解度（りかいど）：mức độ hiểu； 添削（てんさく）：chữa bài, sửa bài； 弱点（じゃくてん）：điểm yếu； 寄り添う（よりそう）：gần gũi, đồng cảm； 励ます（はげます）：động viên"
  }
  ],
  tougou: [
  {
    "p1": "大学 の 授業料 を 値上げ すべき だ と いう 意見 が ある。 大学 の 運営 に は 多く の 費用 が かかり、 施設 の 維持 や 教員 の 確保 に 十分 な お金 が 必要 だ から だ。 授業料 を 上げれば、 大学 は より 良い 教育 環境 を 整える こと が できる。 また、 授業料 が 安すぎると、 学生 が 大学 の 価値 を 軽く 見て しまう という 指摘 も ある。 大学 は、 社会 に 出る 前 に 専門 的 な 知識 を 学ぶ 場所 で あり、 その 質 を 保つ ため に は、 値上げ は 避けられない という のが、 この 立場 の 主張 だ。",
    "p2": "一方、 大学 の 授業料 の 値上げ に 反対 する 意見 も ある。 授業料 が 上がれば、 経済 的 に 苦しい 家庭 の 学生 は 大学 に 通う こと が 難しく なる から だ。 学ぶ 意欲 が ある 学生 が、 お金 の 問題 で 大学 を あきらめる のは、 社会 に とって 大きな 損失 だ。 また、 授業料 を 上げる のでは なく、 国 の 支援 を 増やしたり、 大学 の 無駄 な 支出 を 減らしたり する べき だ という 意見 も ある。 教育 は、 誰 もが 平等 に 受ける べき もの で あり、 授業料 の 値上げ は その 理念 に 反する と、 この 立場 は 主張 して いる。",
    "qs": [
      { "q": "両方 の 文章 に 共通 して 述べられて いる こと は 何 か。", "o": ["大学 の 授業料 の 値上げ が、 大学 教育 に 影響 を 与える こと。", "大学 の 授業料 を 値上げ すべき だ と いう こと。", "大学 の 授業料 を 下げる べき だ と いう こと。", "大学 に 通う 学生 は いない と いう こと。"], "a": 0, "e": "両方の文章とも授業料の値上げが大学教育に与える影響を前提にしている。" },
      { "q": "文章1 の 主張 に 合う もの は どれ です か。", "o": ["授業料 を 上げれば、 大学 は より 良い 教育 環境 を 整える こと が できる。", "授業料 を 上げると、 経済 的 に 苦しい 学生 が 大学 に 通えなく なる。", "国 の 支援 を 増やす べき だ。", "大学 の 無駄 な 支出 を 減らす べき だ。"], "a": 0, "e": "授業料を上げれば、大学はより良い教育環境を整えることができると述べられている。" },
      { "q": "文章2 の 主張 に 合う もの は どれ です か。", "o": ["授業料 の 値上げ は、 大学 の 質 を 保つ ため に 避けられない。", "学生 が 大学 の 価値 を 軽く 見る ように なる。", "教育 は 誰 もが 平等 に 受ける べき もの で あり、 授業料 の 値上げ は その 理念 に 反する。", "授業料 が 安すぎると、 学生 の 意欲 が 下がる。"], "a": 2, "e": "教育は、誰もが平等に受けるべきものであり、授業料の値上げはその理念に反すると主張している。" }
    ],
    "exp": "Câu 1: cả hai bài đều bàn về việc tăng học phí đại học ảnh hưởng thế nào đến giáo dục đại học — bài 1 nói về môi trường giáo dục, bài 2 nói về cơ hội học tập. Câu 2: bằng chứng 「授業料を上げれば、大学はより良い教育環境を整えることができる」— tăng học phí thì đại học có thể chuẩn bị môi trường giáo dục tốt hơn. Câu 3: bằng chứng 「教育は、誰もが平等に受けるべきものであり、授業料の値上げはその理念に反する」— giáo dục là thứ ai cũng được hưởng bình đẳng, tăng học phí đi ngược lý tưởng đó.",
    "voc": "授業料（じゅぎょうりょう）：học phí； 値上げ（ねあげ）：tăng giá； 運営（うんえい）：vận hành； 施設（しせつ）：cơ sở vật chất； 確保（かくほ）：đảm bảo； 平等（びょうどう）：bình đẳng； 理念（りねん）：lý tưởng, quan niệm"
  }
  ],
  shuchou: [
  {
    "p": "今、 手 で 字 を 書く 機会 が 減って いる。 スマートフォン や パソコン が 広がり、 多く の 人 が 文字 を 打つ こと に 慣れて しまった から だ。 私 は、 こうした 変化 の 中 で、 手書き の 大切 さ が 見直される べき だ と 考える。 手 で 字 を 書く こと は、 単に 文字 を 残す 作業 では ない。 字 の 形 を 意識 し、 手 を 動かす こと で、 記憶 に 残りやすく なる と いう 研究 も ある。 例えば、 講義 の 内容 を 手書き で まとめると、 パソコン で 打つ よりも、 内容 を よく 理解 できる と いう 調査 結果 が ある。 また、 手書き の 文字 に は、 書いた 人 の 気持ち が 表れる。 丁寧 に 書かれた 手紙 を もらう と、 送った 人 の 温かさ が 伝わって くる。 こうした 温かさ は、 打った 文字 からは 感じにくい。 もちろん、 スマートフォン や パソコン は 便利 で、 速く 正確 に 文字 を 残す こと が できる。 しかし、 便利 さ だけ を 求めて 手書き を 捨てて しまえば、 私 たち は 大切 な もの を 失う こと に なる。 字 を 書く こと は、 考える こと と 深く 結びついて いる。 手 を 動かしながら 考える と、 新しい 発想 が 生まれる こと も ある。 子ども たち に は、 早い うち から 手 で 字 を 書く 習慣 を 身に つけて ほしい。 学校 で は、 手書き の 時間 を 減らす のでは なく、 むしろ 大切 に する べき だ。 私 は、 手書き を 守る こと こそ、 豊かな 思考 と 人 の 温かさ を 守る こと だ と 信じて いる。",
    "qs": [
      { "q": "筆者 が 最も 言いたい こと は 何 か。", "o": ["手書き の 大切 さ が 見直される べき だ。", "手 で 字 を 書く 機会 は、 もう 必要 ない。", "スマートフォン や パソコン を 使う べき では ない。", "字 を 書く こと は、 単に 文字 を 残す 作業 だ。"], "a": 0, "e": "こうした変化の中で、手書きの大切さが見直されるべきだと考える。" },
      { "q": "手書き の 良い 点 として、 筆者 が 挙げて いる もの は どれ です か。", "o": ["スマートフォン よりも 速く 文字 を 残せる こと。", "パソコン よりも 正確 に 文字 を 残せる こと。", "字 の 形 を 意識 し、 手 を 動かす こと で、 記憶 に 残りやすく なる こと。", "字 を 書く こと で、 考える 必要 が なくなる こと。"], "a": 2, "e": "字の形を意識し、手を動かすことで、記憶に残りやすくなるという研究もある。" },
      { "q": "手書き の 文字 の 特徴 として、 筆者 が 述べて いる もの は どれ です か。", "o": ["打った 文字 よりも 読みやすい こと。", "誰 が 書いても 同じ 字 に なる こと。", "間違えた とき に すぐ 直せる こと。", "書いた 人 の 気持ち が 表れる こと。"], "a": 3, "e": "手書きの文字には、書いた人の気持ちが表れる。丁寧に書かれた手紙をもらうと、送った人の温かさが伝わってくる。" },
      { "q": "子ども たち について、 筆者 が 述べて いる こと は どれ です か。", "o": ["スマートフォン だけ を 使って 勉強 すべき だ。", "早い うち から 手 で 字 を 書く 習慣 を 身に つけて ほしい。", "学校 で 手書き の 時間 を 減らす べき だ。", "パソコン で 字 を 打つ 練習 を 増やす べき だ。"], "a": 1, "e": "子どもたちには、早いうちから手で字を書く習慣を身につけてほしい。学校では、手書きの時間を減らすのではなく、むしろ大切にするべきだ。" }
    ],
    "exp": "Câu 1 (主張): bằng chứng 「こうした変化の中で、手書きの大切さが見直されるべきだと考える」và kết luận 「手書きを守ることこそ、豊かな思考と人の温かさを守ることだ」— tác giả cho rằng cần xem lại giá trị của chữ viết tay. Câu 2: bằng chứng 「字の形を意識し、手を動かすことで、記憶に残りやすくなるという研究もある」— ý thức hình dạng chữ và cử động tay giúp ghi nhớ dễ hơn; đáp án về tốc độ và độ chính xác là ưu điểm của パソコン chứ không phải手書き. Câu 3: bằng chứng 「手書きの文字には、書いた人の気持ちが表れる」「丁寧に書かれた手紙をもらうと、送った人の温かさが伝わってくる」— chữ viết tay thể hiện tình cảm của người viết. Câu 4: bằng chứng 「子どもたちには、早いうちから手で字を書く習慣を身につけてほしい」— mong trẻ em sớm hình thành thói quen viết tay.",
    "voc": "手書き（てがき）：viết tay； 見直す（みなおす）：xem lại, đánh giá lại； 記憶（きおく）：trí nhớ； 講義（こうぎ）：bài giảng； 丁寧（ていねい）：cẩn thận, lịch sự； 習慣（しゅうかん）：thói quen； 思考（しこう）：suy nghĩ"
  }
  ],
  info: [
  {
    "tpl": "<b>A スポーツジムの時間割</b><br>このジムでは、次のクラスがあります。<br><table class=\"jl-tbl\"><tr><th>クラス</th><th>曜日</th><th>時間</th><th>場所</th></tr><tr><td>ヨガ</td><td>土曜日</td><td>10時〜11時</td><td>スタジオA</td></tr><tr><td>水泳</td><td>日曜日</td><td>14時〜15時</td><td>プール</td></tr><tr><td>筋力トレーニング</td><td>土曜日と日曜日</td><td>18時〜19時</td><td>ジム</td></tr><tr><td>ピラティス</td><td>金曜日</td><td>19時〜20時</td><td>スタジオB</td></tr></table><b>B カレンダー（12月）</b><br><table class=\"jl-cal\"><tr><th>月</th><th>火</th><th>水</th><th>木</th><th>金</th><th>土</th><th>日</th></tr><tr><td></td><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td></tr><tr><td>7</td><td>8</td><td>9</td><td>10</td><td>11</td><td>12</td><td>13</td></tr><tr><td>14</td><td>15</td><td>16</td><td>17</td><td>18</td><td>19</td><td>20</td></tr><tr><td>21</td><td>22</td><td>23</td><td>24</td><td>25</td><td>26</td><td>27</td></tr><tr><td>28</td><td>29</td><td>30</td><td>31</td><td></td><td></td><td></td></tr></table>",
    "inst": "つぎのA「スポーツジムの時間割」とBのカレンダーを見て、質問に答えてください。答えは1・2・3・4から、いちばんいいものを一つえらんでください。",
    "q": "今日は 4日 (金曜日) です。ヨガ に 参加 したいです。何日 に どこで 参加 できますか。",
    "opts": ["4日にスタジオA", "5日にスタジオA", "5日にプール", "6日にスタジオA"],
    "ans": 1,
    "exp": "ヨガ (yoga) chỉ có vào thứ Bảy ở スタジオA (phòng A). Hôm nay là thứ Sáu 4/12, thứ Bảy tiếp theo là 5/12 nên đáp án 2 đúng. Đáp án 1 sai vì 4/12 là thứ Sáu, không có lớp yoga. Đáp án 3 sai vì プール (bể bơi) là chỗ học 水泳 (bơi), không phải yoga. Đáp án 4 sai vì 6/12 là Chủ nhật, yoga chỉ học thứ Bảy.",
    "voc": "スポーツジム：phòng tập thể thao； ヨガ：yoga； 水泳（すいえい）：bơi lội； 筋力トレーニング（きんりょくトレーニング）：tập luyện cơ bắp； ピラティス：pilates； スタジオ：phòng tập"
  },
  {
    "tpl": "<b>A 料理教室のお知らせ</b><br>来月、料理教室があります。申し込みは、参加する日の3日前までにしてください。<br><table class=\"jl-tbl\"><tr><th>クラス</th><th>曜日</th><th>時間</th></tr><tr><td>和食クラス</td><td>土曜日</td><td>11時〜13時</td></tr><tr><td>洋食クラス</td><td>日曜日</td><td>11時〜13時</td></tr><tr><td>中華クラス</td><td>土曜日</td><td>15時〜17時</td></tr></table>12月12日(土曜日)は、特別休館日のため、すべてのクラスが休みです。<br><b>B カレンダー（12月）</b><br><table class=\"jl-cal\"><tr><th>月</th><th>火</th><th>水</th><th>木</th><th>金</th><th>土</th><th>日</th></tr><tr><td></td><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td></tr><tr><td>7</td><td>8</td><td>9</td><td>10</td><td>11</td><td>12</td><td>13</td></tr><tr><td>14</td><td>15</td><td>16</td><td>17</td><td>18</td><td>19</td><td>20</td></tr><tr><td>21</td><td>22</td><td>23</td><td>24</td><td>25</td><td>26</td><td>27</td></tr><tr><td>28</td><td>29</td><td>30</td><td>31</td><td></td><td></td><td></td></tr></table>",
    "inst": "つぎのA「料理教室のお知らせ」とBのカレンダーを見て、質問に答えてください。答えは1・2・3・4から、いちばんいいものを一つえらんでください。",
    "q": "今日は 11日 (金曜日) です。和食クラス に 参加 したいです。いちばん 早く 参加 できる のは 何日 です か。",
    "opts": ["12日", "13日", "19日", "20日"],
    "ans": 2,
    "exp": "和食クラス (lớp món Nhật) chỉ học vào thứ Bảy. Thứ Bảy gần nhất là 12/12 nhưng hôm đó là 特別休館日 (ngày nghỉ đặc biệt, tất cả các lớp đều nghỉ) nên không tham gia được. Thứ Bảy tiếp theo là 19/12 nên đáp án 3 đúng. Đáp án 1 (12日) sai vì là ngày nghỉ đặc biệt. Đáp án 2 (13日) sai vì 13/12 là Chủ nhật, hôm đó chỉ có 洋食クラス (lớp món Âu). Đáp án 4 (20日) cũng là Chủ nhật, không có lớp món Nhật.",
    "voc": "料理教室（りょうりきょうしつ）：lớp học nấu ăn； 和食（わしょく）：món Nhật； 洋食（ようしょく）：món Âu； 中華（ちゅうか）：món Trung； 特別休館日（とくべつきゅうかんび）：ngày nghỉ đặc biệt； 申し込み（もうしこみ）：đăng ký"
  }
  ]
};

/* ----- Test 8 ----- */
window.WRITTEN_N1_SET8 = {
  yomi: [
  {
    "s": "工事 の ため、 車 は 迂回 しなければ ならなかった。",
    "t": "迂回",
    "r": "うかい",
    "w": ["ゆかい", "うがい", "うかえ"],
    "exp": "迂回 đọc là うかい（迂 う、回 かい）。ゆかい đọc 迂 thành ゆ là sai、うがい đọc 回 thành がい là sai、うかえ đọc 回 thành かえ là sai。",
    "voc": "迂回（うかい）：đi vòng, đường vòng； 工事（こうじ）：công trình, thi công； 車（くるま）：xe ô tô"
  },
  {
    "s": "彼の実力は、ライバルを凌駕している。",
    "t": "凌駕",
    "r": "りょうが",
    "w": ["りょうか", "りゅうが", "りょうげ"],
    "exp": "凌駕 đọc là りょうが（凌 りょう、駕 が）。りょうか đọc 駕 thành か là sai、りゅうが đọc 凌 thành りゅう là sai、りょうげ đọc 駕 thành げ là sai。",
    "voc": "凌駕（りょうが）：vượt qua, vượt trội hơn； 実力（じつりょく）：thực lực； ライバル：đối thủ"
  },
  {
    "s": "彼女は留学するかどうか、躊躇している。",
    "t": "躊躇",
    "r": "ちゅうちょ",
    "w": ["ちゅうしょ", "しゅうちょ", "ちゅうちょう"],
    "exp": "躊躇 đọc là ちゅうちょ（躊 ちゅう、躇 ちょ）。ちゅうしょ đọc 躇 thành しょ là sai、しゅうちょ đọc 躊 thành しゅう là sai、ちゅうちょう đọc 躇 thành ちょう là sai。",
    "voc": "躊躇（ちゅうちょ）：do dự, lưỡng lự； 留学（りゅうがく）：du học； するかどうか：có nên làm hay không"
  },
  {
    "s": "手続きが煩雑で時間がかかった。",
    "t": "煩雑",
    "r": "はんざつ",
    "w": ["はんさつ", "ぼんざつ", "はんざく"],
    "exp": "煩雑 đọc là はんざつ（煩 はん、雑 ざつ）。はんさつ đọc 雑 thành さつ là sai、ぼんざつ đọc 煩 thành ぼん là sai、はんざく đọc 雑 thành ざく là sai。",
    "voc": "煩雑（はんざつ）：rườm rà, phức tạp； 手続き（てつづき）：thủ tục； 時間がかかる（じかんがかかる）：tốn thời gian"
  },
  {
    "s": "雨が続いて、憂鬱な気分になった。",
    "t": "憂鬱",
    "r": "ゆううつ",
    "w": ["ゆうつう", "ううつ", "ゆうつ"],
    "exp": "憂鬱 đọc là ゆううつ（憂 ゆう、鬱 うつ）。ゆうつう đọc 鬱 thành つう là sai、ううつ đọc 憂 thành う là sai、ゆうつ thiếu âm う trong 鬱 nên sai。",
    "voc": "憂鬱（ゆううつ）：u sầu, ảm đạm； 気分（きぶん）：tâm trạng； 続く（つづく）：tiếp tục, kéo dài"
  },
  {
    "s": "彼の態度が曖昧で、協力する気があるのかどうか分からなかった。",
    "t": "曖昧",
    "r": "あいまい",
    "w": ["あいめい", "あまい", "あいみ"],
    "exp": "曖昧 đọc là あいまい（曖 あい、昧 まい）。あいめい đọc 昧 thành めい là sai、あまい thiếu âm い trong 曖 nên sai、あいみ đọc 昧 thành み là sai。",
    "voc": "曖昧（あいまい）：mơ hồ, không rõ ràng； 態度（たいど）：thái độ； 協力（きょうりょく）：hợp tác； 気（き）：ý định, tâm ý； 分かる（わかる）：hiểu"
  }
  ],
  ctx: [
  {
    "s": "新しい 法律 は、 来年 の 四月 から （　）される。",
    "a": "施行",
    "w": ["廃止", "延期", "中止"],
    "exp": "Luật mới từ tháng 4 năm sau bắt đầu có hiệu lực nên dùng 施行される. 廃止 là bãi bỏ (nghĩa ngược), 延期 là hoãn lại, 中止 là dừng lại — đều không hợp với việc luật mới bắt đầu được áp dụng。",
    "voc": "施行（しこう）：thi hành, bắt đầu có hiệu lực (luật)； 法律（ほうりつ）：pháp luật； 廃止（はいし）：bãi bỏ； 延期（えんき）：hoãn lại； 中止（ちゅうし）：đình chỉ, dừng lại"
  },
  {
    "s": "政府は、地方経済の発展を（　）するため、新しい補助金制度を始めた。",
    "a": "促進",
    "w": ["抑制", "妥協", "喚起"],
    "exp": "Chính phủ muốn thúc đẩy sự phát triển của kinh tế địa phương nên dùng 促進する. 抑制 là kìm hãm, ức chế (nghĩa ngược); 妥協 là thỏa hiệp, không hợp với 発展; 喚起 là gợi lên, khơi dậy — không đi với 発展をする。",
    "voc": "促進（そくしん）：thúc đẩy, xúc tiến； 発展（はってん）：phát triển； 補助金（ほじょきん）：tiền trợ cấp； 制度（せいど）：chế độ, chính sách"
  },
  {
    "s": "この薬は、炎症を（　）する効果がある。",
    "a": "抑制",
    "w": ["促進", "喚起", "模索"],
    "exp": "Thuốc có tác dụng kìm hãm, làm giảm tình trạng viêm nên dùng 抑制する. 促進 là thúc đẩy (nghĩa ngược với tác dụng của thuốc chống viêm); 喚起 là gợi lên, không hợp với 炎症; 模索 là tìm kiếm, mò mẫm — không đi với 炎症をする。",
    "voc": "抑制（よくせい）：kìm hãm, ức chế； 炎症（えんしょう）：viêm, chứng viêm； 効果（こうか）：hiệu quả； 薬（くすり）：thuốc"
  },
  {
    "s": "新しい考え方が社会全体に（　）するには、長い時間がかかる。",
    "a": "浸透",
    "w": ["妥協", "喚起", "抑制"],
    "exp": "Tư tưởng mới cần thời gian để thấm sâu, lan rộng trong toàn xã hội nên dùng 浸透する. 妥協 là thỏa hiệp, 喚起 là gợi lên, 抑制 là kìm hãm — đều không diễn tả ý 'thấm sâu, lan tỏa' và không đi với 社会全体に。",
    "voc": "浸透（しんとう）：thấm sâu, lan tỏa； 考え方（かんがえかた）：cách suy nghĩ； 社会全体（しゃかいぜんたい）：toàn xã hội"
  },
  {
    "s": "両者の意見が対立したため、最終的に（　）せざるを得なかった。",
    "a": "妥協",
    "w": ["促進", "抑制", "喚起"],
    "exp": "Hai bên ý kiến đối lập nên cuối cùng đành phải thỏa hiệp, nhượng bộ — dùng 妥協する. 促進 là thúc đẩy, 抑制 là kìm hãm, 喚起 là gợi lên — đều không hợp với tình huống hai bên phải nhường nhau để đi đến thống nhất。",
    "voc": "妥協（だきょう）：thỏa hiệp, nhượng bộ； 対立（たいりつ）：đối lập, mâu thuẫn； 最終的に（さいしゅうてきに）：cuối cùng； せざるを得ない：đành phải, không còn cách nào khác"
  },
  {
    "s": "会社は、新しい事業の方向性を（　）している。",
    "a": "模索",
    "w": ["促進", "抑制", "喚起"],
    "exp": "Công ty đang tìm kiếm, mò mẫm phương hướng cho mảng kinh doanh mới nên dùng 模索する. 促進 là thúc đẩy, 抑制 là kìm hãm, 喚起 là gợi lên — đều không đi với 方向性を và không diễn tả ý 'đang tìm kiếm phương hướng'。",
    "voc": "模索（もさく）：tìm kiếm, mò mẫm； 方向性（ほうこうせい）：phương hướng； 事業（じぎょう）：kinh doanh, sự nghiệp"
  },
  {
    "s": "彼の演説は、聴衆の関心を（　）した。",
    "a": "喚起",
    "w": ["提起", "換気", "抑制"],
    "exp": "Bài diễn văn đã khơi dậy, gợi lên sự quan tâm của người nghe nên dùng 喚起する (関心を喚起する là cách kết hợp cố định). 提起 là đưa ra (vấn đề) — 関心を提起する là sai kết hợp; 換気 là thông gió, đổi khí; 抑制 là kìm hãm — đều sai nghĩa。",
    "voc": "喚起（かんき）：khơi dậy, gợi lên； 演説（えんぜつ）：bài diễn văn； 聴衆（ちょうしゅう）：thính giả, người nghe； 関心（かんしん）：sự quan tâm"
  }
  ],
  syn: [
  {
    "s": "彼 は 緻密 な 計画 を 立てた。",
    "t": "緻密",
    "a": "こまかい",
    "w": ["おおざっぱ", "あらっぽい", "ずさん"],
    "exp": "緻密 nghĩa là tỉ mỉ, chi tiết, chặt chẽ — gần nhất với こまかい (tỉ mỉ, chi tiết). おおざっぱ là qua loa, đại khái; あらっぽい là thô, cẩu thả; ずさん là cẩu thả, lơ là — đều là nghĩa trái ngược với 緻密。",
    "voc": "緻密（ちみつ）：tỉ mỉ, chặt chẽ； 計画（けいかく）：kế hoạch； 立てる（たてる）：lập, dựng"
  },
  {
    "s": "彼の説明は明瞭だった。",
    "t": "明瞭",
    "a": "はっきりした",
    "w": ["あいまいな", "わかりにくい", "ぼんやりした"],
    "exp": "明瞭 nghĩa là rõ ràng, minh bạch — gần nhất với はっきりした (rõ ràng). あいまいな là mơ hồ, わかりにくい là khó hiểu, ぼんやりした là mờ nhạt, không rõ — đều là nghĩa trái ngược。",
    "voc": "明瞭（めいりょう）：rõ ràng, minh bạch； 説明（せつめい）：giải thích； はっきりした：rõ ràng"
  },
  {
    "s": "彼は寛容な人だ。",
    "t": "寛容",
    "a": "おおらか",
    "w": ["きびしい", "かたくな", "せまい"],
    "exp": "寛容 nghĩa là khoan dung, rộng lượng, sẵn sàng chấp nhận người khác — gần nhất với おおらか (rộng lượng, bao dung). きびしい là nghiêm khắc, かたくな là cứng nhắc, cố chấp, せまい là hẹp hòi — đều là nghĩa trái ngược với 寛容。",
    "voc": "寛容（かんよう）：khoan dung, rộng lượng； おおらか：rộng lượng, bao dung； きびしい：nghiêm khắc； かたくな：cứng nhắc, cố chấp"
  },
  {
    "s": "その話は真実だ。",
    "t": "真実",
    "a": "ほんとう",
    "w": ["うそ", "でたらめ", "まちがい"],
    "exp": "真実 nghĩa là sự thật, điều có thật — gần nhất với ほんとう (thật, đúng sự thật). うそ là nói dối, でたらめ là bịa đặt, vô căn cứ, まちがい là sai lầm — đều là nghĩa trái ngược với 真実。",
    "voc": "真実（しんじつ）：sự thật； ほんとう：thật, đúng sự thật； うそ：nói dối； でたらめ：bịa đặt"
  },
  {
    "s": "彼は頑固な性格だ。",
    "t": "頑固",
    "a": "かたくな",
    "w": ["すなお", "ゆうずう", "おおらか"],
    "exp": "頑固 nghĩa là cứng đầu, cố chấp, không chịu thay đổi ý kiến — gần nhất với かたくな (cứng nhắc, cố chấp). すなお là ngoan ngoãn, dễ nghe lời; ゆうずう là linh hoạt; おおらか là rộng lượng, phóng khoáng — đều là nghĩa trái ngược với 頑固。",
    "voc": "頑固（がんこ）：cứng đầu, cố chấp； 性格（せいかく）：tính cách； かたくな：cứng nhắc, cố chấp"
  },
  {
    "s": "会議は円滑に進んだ。",
    "t": "円滑",
    "a": "なめらか",
    "w": ["ぎこちない", "とどこおった", "あらあらしい"],
    "exp": "円滑 nghĩa là trôi chảy, suôn sẻ, không vướng mắc — gần nhất với なめらか (trôi chảy, trơn tru). ぎこちない là vụng về, gượng gạo; とどこおった là đình trệ, tắc nghẽn; あらあらしい là thô ráp — đều là nghĩa trái ngược với 円滑。",
    "voc": "円滑（えんかつ）：trôi chảy, suôn sẻ； 会議（かいぎ）：cuộc họp； 進む（すすむ）：tiến triển； なめらか：trôi chảy, trơn tru"
  }
  ],
  yoho: [
  {
    "t": "慎重",
    "s": ["彼 は 慎重 な 服 を 着た。", "彼 は 慎重 に 計画 を 立てた。", "彼女 は 慎重 な 色 を 選んだ。", "彼 は 慎重 に 笑った。"],
    "a": 1,
    "exp": "慎重 là tính từ な chỉ sự thận trọng, cẩn trọng — chỉ dùng với hành động, quyết định hay kế hoạch như 『慎重に計画を立てる』. 『慎重な服』『慎重な色』 đều sai vì quần áo, màu sắc không thể 'thận trọng'; 『慎重に笑った』 cũng sai vì cười không phải hành động cần thận trọng。",
    "voc": "慎重（しんちょう）：thận trọng, cẩn trọng； 計画（けいかく）：kế hoạch； 立てる（たてる）：lập"
  },
  {
    "t": "漠然",
    "s": ["将来について、漠然とした不安を感じている。", "漠然とした服を着た。", "漠然とした車を買った。", "漠然とした料理を作った。"],
    "a": 0,
    "exp": "漠然とした chỉ cảm giác, suy nghĩ mơ hồ, không rõ ràng — dùng với 不安 (nỗi bất an mơ hồ về tương lai) là đúng. 服、車、料理 là vật cụ thể, không thể 'mơ hồ' nên 『漠然とした服／車／料理』 đều sai。",
    "voc": "漠然（ばくぜん）：mơ hồ, không rõ ràng； 将来（しょうらい）：tương lai； 不安（ふあん）：bất an, lo lắng； 感じる（かんじる）：cảm thấy"
  },
  {
    "t": "徹底",
    "s": ["徹底した色を選んだ。", "徹底した味を楽しんだ。", "品質管理を徹底して行った。", "徹底した花を買った。"],
    "a": 2,
    "exp": "徹底する nghĩa là làm triệt để, đến cùng — dùng với 品質管理 (thực hiện triệt để việc quản lí chất lượng) là đúng. 色、味、花 là danh từ cụ thể, không thể 'triệt để' nên 『徹底した色／味／花』 đều sai。",
    "voc": "徹底（てってい）：triệt để, đến cùng； 品質管理（ひんしつかんり）：quản lí chất lượng； 行う（おこなう）：thực hiện"
  },
  {
    "t": "率直",
    "s": ["彼は率直な服を着た。", "彼は率直に意見を述べた。", "彼女は率直な料理を作った。", "彼は率直に笑った。"],
    "a": 1,
    "exp": "率直 nghĩa là thẳng thắn, bộc trực — dùng với việc nói ra ý kiến như 『率直に意見を述べた』 là đúng. 服、料理 là vật cụ thể, không thể 'thẳng thắn'; 『率直に笑った』 cũng sai vì cười không phải hành động bày tỏ ý kiến thẳng thắn。",
    "voc": "率直（そっちょく）：thẳng thắn, bộc trực； 意見（いけん）：ý kiến； 述べる（のべる）：trình bày, phát biểu"
  },
  {
    "t": "豪快",
    "s": ["豪快な色を選んだ。", "豪快に笑った。", "豪快な味がした。", "豪快な花を買った。"],
    "a": 1,
    "exp": "豪快 nghĩa là hào sảng, phóng khoáng, mạnh mẽ — dùng với việc cười như 『豪快に笑った』 (cười sảng khoái) là đúng. 色、味、花 là danh từ cụ thể, không thể 'hào sảng' nên 『豪快な色／味／花』 đều sai。",
    "voc": "豪快（ごうかい）：hào sảng, phóng khoáng； 笑う（わらう）：cười； 色（いろ）：màu sắc； 味（あじ）：vị； 花（はな）：hoa"
  },
  {
    "t": "巧妙",
    "s": ["犯人は巧妙な手口で逃げた。", "巧妙な色を選んだ。", "巧妙な味がした。", "巧妙な花を買った。"],
    "a": 0,
    "exp": "巧妙 nghĩa là khéo léo, tinh vi (thường chỉ thủ đoạn, cách làm) — dùng với 手口 (thủ đoạn tinh vi của tội phạm) là đúng. 色、味、花 là danh từ cụ thể, không thể 'tinh vi, khéo léo' nên 『巧妙な色／味／花』 đều sai。",
    "voc": "巧妙（こうみょう）：khéo léo, tinh vi； 犯人（はんにん）：tội phạm； 手口（てぐち）：thủ đoạn； 逃げる（にげる）：chạy trốn"
  }
  ],
  g1dlg: [
  {
    "d": ["A：彼は危ないと分かっていたのに、なぜ一人で行ったの？", "B：危険だと（　）、行かずにはいられなかったんだよ。"],
    "a": "知りながら",
    "w": ["知ったながら", "知るながら", "知りつつある"],
    "p": "〜と知りながら",
    "exp": "Mẫu 〜と知りながら diễn tả 'dù biết là... nhưng vẫn...': biết là nguy hiểm nhưng vẫn không thể không đi. 知ったながら và 知るながら đều sai dạng kết hợp (phải là động từ thể ます bỏ ます + ながら, tức 知りながら); 知りつつある nghĩa là 'đang trong quá trình biết', không hợp ngữ cảnh và không nối được với 行かずにはいられなかった。",
    "voc": "危険（きけん）：nguy hiểm； 知る（しる）：biết； 行かずにはいられない：không thể không đi； 一人（ひとり）：một mình"
  },
  {
    "d": ["A：田中さん、英語が上手ですね。", "B：実は、留学したことはないんです。独学で勉強し（　）、発音がきれいだと言われます。"],
    "a": "ていながら",
    "w": ["てながら", "ていながらは", "ていながらを"],
    "p": "〜ていながら",
    "exp": "Mẫu 〜ていながら diễn tả hai trạng thái trái ngược cùng tồn tại: tự học mà phát âm lại đẹp. てながら sai dạng (phải là ていながら sau 勉強し); ていながらは và ていながらを sai vì ながら không đi với は／を trong mẫu này。",
    "voc": "独学（どくがく）：tự học； 発音（はつおん）：phát âm； 留学（りゅうがく）：du học； きれい：đẹp, hay"
  },
  {
    "d": ["A：この研究は、本当に賞をもらえるのかな。", "B：十分に評価（　）内容だと思うよ。"],
    "a": "に値する",
    "w": ["に値するもの", "に値するはず", "に値するだ"],
    "p": "〜に値する",
    "exp": "Mẫu 〜に値する nghĩa là 'xứng đáng với...': nội dung xứng đáng được đánh giá cao. に値するもの内容 sai ngữ pháp (もの không bổ nghĩa cho 内容 như vậy); に値するはず内容 cũng sai ngữ pháp (はず không đứng trước danh từ theo cách này); に値するだ sai ngữ pháp (だ không đứng sau động từ thể từ điển trước danh từ 内容 như vậy)。",
    "voc": "評価（ひょうか）：đánh giá； 値する（あたいする）：xứng đáng； 研究（けんきゅう）：nghiên cứu； 賞（しょう）：giải thưởng"
  }
  ],
  g1: [
  {
    "s": "駅に着く（　）、電車が出発してしまった。",
    "a": "や否や",
    "w": ["たそばから", "や否やに", "や否やで"],
    "p": "〜や否や",
    "exp": "Mẫu 〜や否や (động từ thể từ điển + や否や) diễn tả 'vừa mới... thì ngay lập tức...': vừa đến ga thì tàu đã chạy mất. たそばから phải đi sau động từ thể た (着いたそばから) nên 着くたそばから là sai dạng; や否やに và や否やで sai vì や否や không đi với に／で。",
    "voc": "着く（つく）：đến； 出発（しゅっぱつ）：khởi hành, xuất phát； 駅（えき）：nhà ga； 電車（でんしゃ）：tàu điện"
  },
  {
    "s": "田舎に引っ越して（　）、朝早く起きるようになった。",
    "a": "からというもの",
    "w": ["からというものの", "からというものに", "からというもので"],
    "p": "〜てからというもの",
    "exp": "Mẫu 〜てからというもの diễn tả 'kể từ khi... thì (liên tục)...': kể từ khi chuyển về quê thì dậy sớm mỗi sáng. からというものの sai vì mẫu này không đi với の; からというものに sai vì không đi với に; からというもので sai vì không đi với で。",
    "voc": "田舎（いなか）：quê, nông thôn； 引っ越す（ひっこす）：chuyển nhà； 朝早く（あさはやく）：sáng sớm； 起きる（おきる）：thức dậy"
  },
  {
    "s": "今月（　）、長年勤めた会社を辞めることにした。",
    "a": "を限りに",
    "w": ["を限りで", "を限りの", "を限りでは"],
    "p": "N を限りに",
    "exp": "Mẫu N を限りに nghĩa là 'lấy (thời điểm) làm mốc cuối cùng': lấy tháng này làm mốc cuối, nghỉ việc ở công ty đã gắn bó nhiều năm. を限りで sai vì mẫu này không đi với で; を限りの sai vì không phải dạng bổ nghĩa cho danh từ; を限りでは sai vì không đi với では。",
    "voc": "限りに（かぎりに）：lấy làm mốc cuối cùng； 長年（ながねん）：nhiều năm； 勤める（つとめる）：làm việc (ở công ty)； 辞める（やめる）：nghỉ việc"
  },
  {
    "s": "親（　）、自分のことより子どもの将来を考えるようになる。",
    "a": "ともなると",
    "w": ["ともなるとは", "ともなるとも", "ともなるとに"],
    "p": "〜ともなると / ともなれば",
    "exp": "Mẫu 〜ともなると diễn tả 'khi đã trở thành... thì...': khi đã làm cha mẹ thì nghĩ đến tương lai của con hơn bản thân. ともなるとは sai vì mẫu này không đi với は; ともなるとも sai vì không đi với も; ともなるとに sai vì không đi với に。",
    "voc": "親（おや）：cha mẹ； 将来（しょうらい）：tương lai； 自分（じぶん）：bản thân； 考える（かんがえる）：suy nghĩ"
  },
  {
    "s": "彼のわがまま（　）、もう我慢できない。",
    "a": "にもほどがある",
    "w": ["にもほどがあること", "にもほどがあるの", "にもほどがあり"],
    "p": "〜にもほどがある",
    "exp": "Mẫu 〜にもほどがある nghĩa là 'cũng phải có giới hạn chứ': sự ích kỉ của anh ta cũng phải có mức độ, tôi không chịu nổi nữa. にもほどがあること sai vì こと biến mệnh đề thành cụm danh từ, câu không còn vị ngữ nên không nối được với もう我慢できない; にもほどがあるの sai vì mẫu này không kết thúc bằng の trong ngữ cảnh này; にもほどがあり sai dạng kết câu (あり không dùng để kết thúc câu khẳng định như vậy)。",
    "voc": "わがまま：ích kỉ, tùy hứng； ほどがある：có giới hạn, có mức độ； 我慢（がまん）：chịu đựng； もう：nữa, thêm nữa"
  },
  {
    "s": "彼は英語（　）、フランス語も話せる。",
    "a": "ばかりか",
    "w": ["ばかりで", "ばかりに", "ばかりだ"],
    "p": "〜ばかりか",
    "exp": "Mẫu 〜ばかりか diễn tả 'không chỉ... mà còn...': không chỉ tiếng Anh mà cả tiếng Pháp cũng nói được. ばかりで sai vì ばかりで không mang nghĩa 'không chỉ... mà còn'; ばかりに sai vì ばかりに chỉ nguyên nhân, không dùng để liệt kê; ばかりだ sai vì không nối được hai mệnh đề theo cách này。",
    "voc": "英語（えいご）：tiếng Anh； フランス語（フランスご）：tiếng Pháp； 話せる（はなせる）：có thể nói"
  },
  {
    "s": "旅行の準備は、早めにしておく（　）と思う。",
    "a": "に越したことはない",
    "w": ["に越したことだ", "に越したことはなかった", "に越すことはない"],
    "p": "〜に越したことはない",
    "exp": "Mẫu 〜に越したことはない nghĩa là 'làm... thì tốt nhất, càng... càng tốt': chuẩn bị đi du lịch sớm thì tốt nhất. に越したことだ sai dạng cố định (mẫu chuẩn là に越したことはない); に越したことはなかった sai thì (câu khuyên ở hiện tại, không phải quá khứ); に越すことはない sai dạng động từ (phải là 越した, thể た)。",
    "voc": "旅行（りょこう）：du lịch； 準備（じゅんび）：chuẩn bị； 早めに（はやめに）：sớm một chút； 越したことはない：làm vậy là tốt nhất"
  }
  ],
  star: [
  {
    "pre": "ドアを開ける",
    "chunks": ["や否や", "冷たい風が", "部屋に", "吹き込んできた"],
    "post": "。",
    "p": "〜や否や",
    "exp": "Thứ tự đúng: ドアを開けるや否や冷たい風が部屋に吹き込んできた。(Vừa mở cửa thì gió lạnh lập tức thổi vào phòng.) や否や nối ngay sau động từ thể từ điển 開ける, sau đó là chủ ngữ 冷たい風が, rồi 部屋に, cuối cùng là động từ 吹き込んできた。",
    "voc": "ドア：cửa； 開ける（あける）：mở； 冷たい（つめたい）：lạnh； 風（かぜ）：gió； 吹き込む（ふきこむ）：thổi vào"
  },
  {
    "pre": "彼は",
    "chunks": ["立ち上がる", "なり", "部屋を", "出ていった"],
    "post": "。",
    "p": "V-る なり",
    "exp": "Thứ tự đúng: 彼は立ち上がるなり部屋を出ていった。(Anh ấy vừa đứng dậy thì đi ra khỏi phòng ngay.) なり nối ngay sau động từ thể từ điển 立ち上がる, sau đó là 部屋を, cuối cùng là động từ 出ていった。",
    "voc": "立ち上がる（たちあがる）：đứng dậy； なり：ngay khi vừa... thì...； 部屋（へや）：phòng； 出ていく（でていく）：đi ra"
  },
  {
    "pre": "大学を卒業して",
    "chunks": ["からというもの", "毎日図書館で", "勉強し", "ている"],
    "post": "。",
    "p": "〜てからというもの",
    "exp": "Thứ tự đúng: 大学を卒業してからというもの毎日図書館で勉強している。(Kể từ khi tốt nghiệp đại học thì ngày nào cũng học ở thư viện.) からというもの phải nối ngay sau て形 卒業して; 毎日図書館で là một cụm không tách được nên 毎日 không thể di chuyển một mình; 勉強し và ている phải đứng liền nhau mới thành 勉強している, và cụm trạng ngữ 毎日図書館で phải đứng trước động từ.",
    "voc": "大学（だいがく）：đại học； 卒業する（そつぎょうする）：tốt nghiệp； 毎日（まいにち）：mỗi ngày； 図書館（としょかん）：thư viện； 勉強する（べんきょうする）：học tập"
  },
  {
    "pre": "結婚を",
    "chunks": ["境に", "生活が", "大きく", "変わった"],
    "post": "。",
    "p": "N を境に",
    "exp": "Thứ tự đúng: 結婚を境に生活が大きく変わった。(Lấy việc kết hôn làm mốc, cuộc sống đã thay đổi lớn.) 境に nối ngay sau 結婚を, sau đó là chủ ngữ 生活が, rồi trạng từ 大きく, cuối cùng là động từ 変わった。",
    "voc": "結婚（けっこん）：kết hôn； 境（さかい）：ranh giới, mốc； 生活（せいかつ）：cuộc sống； 変わる（かわる）：thay đổi"
  },
  {
    "pre": "",
    "chunks": ["全国に", "先駆けて", "新制度を", "導入した"],
    "post": "。",
    "p": "〜に先駆けて",
    "exp": "Thứ tự đúng: 全国に先駆けて新制度を導入した。(Đi đầu cả nước, đã áp dụng chế độ mới.) 全国に đứng đầu, 先駆けて nối sau, sau đó là tân ngữ 新制度を, cuối cùng là động từ 導入した。",
    "voc": "全国（ぜんこく）：cả nước； 先駆けて（さきがけて）：đi đầu, tiên phong； 新制度（しんせいど）：chế độ mới； 導入（どうにゅう）：áp dụng, đưa vào"
  }
  ],
  bunsho: [
  {
    "intro": "つぎの文章を読んで、（　1　）〜（　5　）に入る最もよいものを、1・2・3・4から一つえらんでください。",
    "p": "近年、都市部では緑が減り続けている。（　1　）、多くの自治体が公園の整備に力を入れ始めている。公園は、住民の憩いの場になるだけではない。（　2　）、災害時の一時避難場所としても重要な役割を果たす。（　3　）、公園の維持には多額の費用がかかる。整備が進まない地域も少なくない。（　4　）、維持費の問題を解決するには、市民や企業の協力が欠かせない。（　5　）、東京都内のある区では、地元の企業が公園の清掃を支援する取り組みが始まった。",
    "b": [
      {"a": "そのため", "w": ["しかし", "つまり", "たとえば"]},
      {"a": "さらに", "w": ["しかし", "つまり", "たとえば"]},
      {"a": "しかし", "w": ["そのため", "さらに", "たとえば"]},
      {"a": "したがって", "w": ["しかし", "一方で", "たとえば"]},
      {"a": "たとえば", "w": ["しかし", "そのため", "つまり"]}
    ],
    "exp": "(1) Cây xanh giảm là nguyên nhân khiến chính quyền địa phương bắt đầu chú trọng chỉnh trang công viên, nên cần từ nối nhân quả そのため. しかし là ngược ý, つまり là tóm tắt, たとえば là nêu ví dụ — đều không hợp. (2) Bài đang bổ sung thêm vai trò của công viên (nơi lánh nạn khi có thảm họa), nên cần さらに (thêm nữa). しかし là ngược ý, つまり là tóm tắt, たとえば là nêu ví dụ — đều không hợp. (3) Công viên quan trọng, nhưng việc duy trì tốn nhiều chi phí — đây là quan hệ đối lập, nên cần しかし. そのため・さらに・たとえば không diễn tả đối lập. (4) Từ việc duy trì tốn chi phí, bài rút ra kết luận là cần sự hợp tác của người dân và doanh nghiệp, nên cần したがって (do đó). しかし là ngược ý, 一方で là đối chiếu, たとえば là nêu ví dụ — đều không hợp. (5) Bài đưa ra ví dụ cụ thể về sự hợp tác (một quận ở Tokyo được doanh nghiệp địa phương hỗ trợ dọn dẹp công viên), nên cần たとえば. しかし・そのため・つまり không diễn tả việc nêu ví dụ.",
    "voc": "都市部（としぶ）：khu vực đô thị； 緑（みどり）：cây xanh； 自治体（じちたい）：chính quyền địa phương； 整備（せいび）：chỉnh trang, hoàn thiện； 憩いの場（いこいのば）：nơi thư giãn； 避難場所（ひなんばしょ）：nơi lánh nạn； 維持（いじ）：duy trì； 費用（ひよう）：chi phí； 協力（きょうりょく）：hợp tác, giúp đỡ； 清掃（せいそう）：dọn dẹp, vệ sinh"
  }
  ],
  readS: [
  {
    "p": "佐藤 さん は、 三 年前 に 東京 から 大阪 へ 引っ越しました。 今 は 大阪 の 小さな 会社 で 働いて います。 東京 に いた とき より、 通勤 時間 が 短く なり、 家族 と 過ごす 時間 が 増えた そうです。 大阪 で は、 新しい 友達 も たくさん できた そうです。",
    "q": "佐藤 さん について、 正しい もの は どれ です か。",
    "o": ["大阪 へ 引っ越して から、 家族 と 過ごす 時間 が 増えた。", "今 も 東京 の 会社 で 働いて います。", "大阪 へ 引っ越して から、 通勤 時間 が 長く なった。", "三年前 に 大阪 から 東京 へ 引っ越した。"],
    "a": 0,
    "e": "大阪へ引っ越して通勤時間が短くなり、家族との時間が増えたと書かれている。",
    "exp": "Bằng chứng: bài viết 佐藤さんは3年前に東京から大阪へ引っ越し、今は大阪の会社で働き、通勤時間が短くなって家族と過ごす時間が増えた。Đáp án 2 sai (giờ làm ở Osaka, không phải Tokyo), đáp án 3 sai (通勤時間は短くなった, không phải dài ra), đáp án 4 sai (chuyển từ Tokyo sang Osaka, không phải ngược lại)。",
    "voc": "引っ越す（ひっこす）：chuyển nhà； 通勤時間（つうきんじかん）：thời gian đi làm； 家族（かぞく）：gia đình； 過ごす（すごす）：trải qua, dành (thời gian)"
  },
  {
    "p": "山田さんは、週に3回ジムに通っています。1回の利用料金は500円です。月会費は3,000円で、利用料金は別にかかります。今月は12回利用しました。",
    "q": "山田さんが今月ジムに払った金額はいくらですか。",
    "o": ["6,000円", "9,000円", "3,600円", "12,000円"],
    "a": 1,
    "calc": true,
    "e": "「月会費は3,000円」「1回の利用料金は500円」「今月は12回利用しました」とある。3,000+500×12=9,000円。",
    "exp": "Tính tổng: phí hội viên tháng 3,000円 + phí mỗi lần 500円 × 12 lần = 3,000 + 6,000 = 9,000円. 6,000円 chỉ là tiền phí sử dụng (500×12), quên cộng phí hội viên; 3,600円 là 300×12 (tính nhầm phí mỗi lần); 12,000円 là 1,000×12 (tính nhầm). Bằng chứng: 「月会費は3,000円」「1回の利用料金は500円」「今月は12回利用しました」。",
    "voc": "ジム：phòng tập gym； 利用料金（りようりょうきん）：phí sử dụng； 月会費（げつかいひ）：phí hội viên tháng； 別に（べつに）：riêng, tách riêng"
  },
  {
    "p": "鈴木さんは、毎朝6時に起きて、駅まで自転車で15分かかります。電車に30分乗り、会社まで歩いて10分です。先週から、自転車ではなくバスで駅まで行くようになりました。バスは20分かかりますが、雨の日でもぬれません。",
    "q": "鈴木さんが先週から変わったことは何ですか。",
    "o": ["起きる時間が6時になった。", "駅までバスで行くようになった。", "電車に乗る時間が30分になった。", "会社まで歩く時間が10分になった。"],
    "a": 1,
    "e": "「先週から、自転車ではなくバスで駅まで行くようになりました」とある。",
    "exp": "Bằng chứng: 「先週から、自転車ではなくバスで駅まで行くようになりました」— từ tuần trước, thay vì đi xe đạp thì đi xe buýt ra ga. Đáp án 1, 3, 4 đều là những điều không thay đổi (thức dậy lúc 6 giờ, đi tàu 30 phút, đi bộ 10 phút vẫn như cũ)。",
    "voc": "自転車（じてんしゃ）：xe đạp； バス：xe buýt； ぬれる：bị ướt； 毎朝（まいあさ）：mỗi sáng"
  },
  {
    "p": "この美術館は、火曜日が休館日です。開館時間は午前10時から午後5時までで、入館は午後4時30分までです。毎月第1日曜日は入館料が無料になります。団体で来る場合は、事前に予約が必要です。",
    "q": "この美術館について、正しいものはどれですか。",
    "o": ["火曜日は入館料が無料になる。", "入館は午後5時までできる。", "毎月第1日曜日は入館料が無料になる。", "団体で来る場合は予約は必要ない。"],
    "a": 2,
    "e": "「毎月第1日曜日は入館料が無料になります」とある。",
    "exp": "Bằng chứng: 「毎月第1日曜日は入館料が無料になります」. Đáp án 1 sai (thứ Ba là ngày đóng cửa, không phải ngày miễn phí); đáp án 2 sai (vào cửa chỉ đến 4 giờ 30, còn 5 giờ là giờ đóng cửa); đáp án 4 sai (đi theo đoàn cần đặt trước)。",
    "voc": "美術館（びじゅつかん）：bảo tàng mỹ thuật； 休館日（きゅうかんび）：ngày đóng cửa； 入館料（にゅうかんりょう）：phí vào cửa； 団体（だんたい）：đoàn, nhóm； 事前に（じぜんに）：trước, từ trước"
  }
  ],
  readM: [
  {
    "p": "ある会社が、社員500人を対象にリモートワークについて調査を行った。その結果、週に3日以上在宅で働きたいと答えた人は全体の62%にのぼった。理由として最も多かったのは「通勤時間を減らしたい」で、次いで「集中して仕事ができる」だった。一方で、若手社員からは「先輩に気軽に質問できない」という声も聞かれた。調査を行った人事部は、リモートワークと出社のバランスを取る新しい働き方を検討している。来年度からは、週に2日は出社し、残りは在宅で働く制度を導入する予定だ。ただし、入社1年目の社員は、仕事に慣れるまで週に4日出社することになっている。",
    "qs": [
      {"q": "調査で最も多かった理由は何ですか。", "o": ["先輩に質問できないこと", "通勤時間を減らしたいこと", "集中して仕事ができること", "出社する日が少ないこと"], "a": 1, "e": "「理由として最も多かったのは『通勤時間を減らしたい』」"},
      {"q": "若手社員が困っていることは何ですか。", "o": ["通勤時間が長いこと", "集中できないこと", "先輩に気軽に質問できないこと", "出社の日が多いこと"], "a": 2, "e": "「若手社員からは『先輩に気軽に質問できない』という声も聞かれた」"},
      {"q": "来年度からの制度について、正しいものはどれですか。", "o": ["全員が週に3日以上在宅で働く。", "入社1年目の社員は週に4日出社する。", "全員が毎日出社することになる。", "週に2日は在宅で働くことになる。"], "a": 1, "e": "「入社1年目の社員は、仕事に慣れるまで週に4日出社することになっている」"}
    ],
    "exp": "問1: Bằng chứng 「理由として最も多かったのは『通勤時間を減らしたい』」— lí do nhiều nhất là muốn giảm thời gian đi làm. 「集中して仕事ができる」 chỉ đứng thứ hai; đáp án 1 là khó khăn của nhân viên trẻ, không phải lí do được chọn nhiều nhất; đáp án 4 không có trong bài. 問2: Bằng chứng 「若手社員からは『先輩に気軽に質問できない』という声も聞かれた」— nhân viên trẻ khó hỏi tiền bối một cách thoải mái. 問3: Bằng chứng 「入社1年目の社員は、仕事に慣れるまで週に4日出社することになっている」— nhân viên năm đầu đi làm 4 ngày/tuần. Đáp án 1 sai (chỉ 62% muốn làm tại nhà từ 3 ngày trở lên, không phải chế độ mới); đáp án 3 sai (chế độ mới là 2 ngày đến công ty, còn lại làm tại nhà); đáp án 4 sai (2 ngày là đến công ty, không phải làm tại nhà)。",
    "voc": "リモートワーク：làm việc từ xa； 調査（ちょうさ）：khảo sát, điều tra； 在宅（ざいたく）：ở nhà； 通勤時間（つうきんじかん）：thời gian đi làm； 若手社員（わかてしゃいん）：nhân viên trẻ； 気軽に（きがるに）：một cách thoải mái, không ngại ngần； 人事部（じんじぶ）：phòng nhân sự； 導入（どうにゅう）：áp dụng, đưa vào"
  },
  {
    "p": "日本では、毎年およそ500万トン以上の食品が捨てられている。そのうち、家庭から出るものが半分近くを占める。賞味期限が切れていないのに捨てられる食品も少なくない。ある調査によると、家庭で捨てられる食品のうち、最も多いのは野菜で、次いで調理した料理の残りだった。こうした現状を受けて、ある市では、余った食品を必要な人に届ける「フードバンク」の活動が広がっている。スーパーや農家から寄付された食品を、生活に困っている家庭に無料で配っているのだ。市は、食品ロスを減らすために、市民に買い物の計画を立てるよう呼びかけている。必要な分だけ買うことが、食品ロスを減らす第一歩だという。",
    "qs": [
      {"q": "家庭から出る食品ロスについて、正しいものはどれですか。", "o": ["全体の半分近くを占める。", "全体の4分の1ほどである。", "ほとんどが賞味期限切れの食品である。", "野菜はほとんど捨てられていない。"], "a": 0, "e": "「家庭から出るものが半分近くを占める」"},
      {"q": "家庭で捨てられる食品で最も多いものは何ですか。", "o": ["調理した料理の残り", "パン", "野菜", "肉"], "a": 2, "e": "「家庭で捨てられる食品のうち、最も多いのは野菜」"},
      {"q": "市が市民に呼びかけていることは何ですか。", "o": ["スーパーで食品を寄付すること", "買い物の計画を立てること", "フードバンクに登録すること", "野菜を買わないこと"], "a": 1, "e": "「市は、食品ロスを減らすために、市民に買い物の計画を立てるよう呼びかけている」"}
    ],
    "exp": "問1: Bằng chứng 「家庭から出るものが半分近くを占める」— rác thực phẩm từ hộ gia đình chiếm gần một nửa tổng số. Đáp án 2 sai về tỉ lệ; đáp án 3 sai vì bài nói nhiều thực phẩm bị vứt dù chưa hết hạn sử dụng; đáp án 4 sai vì rau củ là thứ bị vứt nhiều nhất. 問2: Bằng chứng 「家庭で捨てられる食品のうち、最も多いのは野菜」— rau củ là nhiều nhất, tiếp theo mới là thức ăn thừa đã nấu. 問3: Bằng chứng 「市は、食品ロスを減らすために、市民に買い物の計画を立てるよう呼びかけている」— thành phố kêu gọi người dân lên kế hoạch mua sắm. Việc quyên góp là của siêu thị và nông dân, không phải lời kêu gọi dành cho người dân; đăng kí food bank và không mua rau đều không có trong bài。",
    "voc": "食品ロス（しょくひんロス）：lãng phí thực phẩm； 捨てる（すてる）：vứt bỏ； 賞味期限（しょうみきげん）：hạn sử dụng； 占める（しめる）：chiếm； フードバンク：ngân hàng thực phẩm； 寄付（きふ）：quyên góp, tặng； 配る（くばる）：phân phát； 呼びかける（よびかける）：kêu gọi"
  },
  {
    "p": "山形県のある町では、400年以上続く祭りが行われている。この祭りは、もともと豊作を願う行事として始まった。祭りの当日、町の人々は色鮮やかな衣装を身にまとい、太鼓の音に合わせて踊る。近年は、若者の数が減り、祭りを続けることが難しくなってきた。そこで町では、祭りの担い手を育てるため、小学生を対象とした太鼓の教室を開いた。教室に通う子どもたちは、祭りの前になると毎週練習に励んでいる。去年からは、町外からも見物客が増え、祭りは町の大きな観光資源にもなっている。町の担当者は、「祭りをきっかけに、町に人を呼び込みたい」と話している。",
    "qs": [
      {"q": "この祭りは、もともと何のために始まったのですか。", "o": ["観光客を呼び込むため", "豊作を願うため", "太鼓を広めるため", "町の歴史を伝えるため"], "a": 1, "e": "「もともと豊作を願う行事として始まった」"},
      {"q": "町が太鼓の教室を開いた理由は何ですか。", "o": ["祭りの担い手を育てるため", "観光客を増やすため", "小学生に太鼓を教えるためだけ", "祭りの歴史を記録するため"], "a": 0, "e": "「祭りの担い手を育てるため、小学生を対象とした太鼓の教室を開いた」"},
      {"q": "去年からの変化として、正しいものはどれですか。", "o": ["祭りに参加する若者が増えた。", "町外からの見物客が増えた。", "祭りの日数が増えた。", "太鼓の教室がなくなった。"], "a": 1, "e": "「去年からは、町外からも見物客が増え」"}
    ],
    "exp": "問1: Bằng chứng 「もともと豊作を願う行事として始まった」— lễ hội bắt đầu với mong ước mùa màng bội thu. Việc thu hút khách du lịch là mục đích hiện tại, không phải ban đầu; truyền bá trống và truyền lại lịch sử đều không có trong bài. 問2: Bằng chứng 「祭りの担い手を育てるため、小学生を対象とした太鼓の教室を開いた」— mở lớp trống để đào tạo người kế thừa lễ hội. Đáp án 2 là kết quả phụ, không phải lí do mở lớp; đáp án 3 hẹp hơn lí do thật; đáp án 4 không có trong bài. 問3: Bằng chứng 「去年からは、町外からも見物客が増え」— từ năm ngoái, khách xem từ ngoài thị trấn tăng lên. Số người trẻ tham gia, số ngày lễ hội và việc lớp trống biến mất đều không được nhắc đến。",
    "voc": "祭り（まつり）：lễ hội； 豊作（ほうさく）：mùa màng bội thu； 願う（ねがう）：cầu mong； 衣装（いしょう）：trang phục； 身にまとう（みにつける）：mặc, khoác lên người； 太鼓（たいこ）：trống； 担い手（にないて）：người kế thừa, người gánh vác； 見物客（けんぶつきゃく）：khách đến xem； 観光資源（かんこうしげん）：tài nguyên du lịch"
  }
  ],
  readL: [
  {
    "p": "日本では、高齢化が急速に進んでいる。65歳以上の人口は全体の3割近くに達し、一人暮らしの高齢者も増え続けている。こうした中で、介護の現場では人手不足が深刻な問題になっている。介護職員の不足は、すでに全国各地で見られ、特に地方では施設の利用を断らざるを得ないケースも出ている。この問題を解決する手段の一つとして、テクノロジーの活用が注目されている。たとえば、見守りセンサーを使えば、離れて暮らす家族が、親の生活の様子をスマートフォンで確認できる。夜中に起きて転倒した場合にも、センサーが異常を察知して家族や介護施設に知らせる仕組みだ。また、会話ができるロボットは、一人暮らしの高齢者の話し相手になり、孤独感を和らげる効果があると報告されている。しかし、テクノロジーだけでは解決できない問題もある。機械は、人の温かさや細やかな気配りを完全に代わることはできない。実際に、ロボットを導入した施設の職員からは、「ロボットは便利だが、利用者が本当に求めているのは人とのふれあいだ」という声が聞かれる。さらに、機器の操作に慣れていない高齢者も多く、導入には丁寧な説明と支援が欠かせない。筆者は、テクノロジーはあくまで介護を支える道具であり、中心となるのは人と人との関わりだと考えている。技術の進歩をうまく生かしながら、高齢者が安心して暮らせる社会を作ることが、これからの課題である。",
    "qs": [
      {"q": "介護の現場で起きている問題は何ですか。", "o": ["介護職員の不足", "介護施設が増えすぎていること", "高齢者の数が減っていること", "ロボットの値段が高いこと"], "a": 0, "e": "「介護の現場では人手不足が深刻な問題になっている」"},
      {"q": "見守りセンサーの働きとして、正しいものはどれですか。", "o": ["高齢者の代わりに家事をすること", "異常を察知して家族などに知らせること", "高齢者の病気を治すこと", "介護職員の代わりに働くこと"], "a": 1, "e": "「センサーが異常を察知して家族や介護施設に知らせる仕組みだ」"},
      {"q": "ロボットを導入した施設の職員の声として、正しいものはどれですか。", "o": ["ロボットがあれば職員は必要ない。", "ロボットは操作が簡単すぎる。", "利用者はロボットを嫌っている。", "利用者が求めているのは人とのふれあいだ。"], "a": 3, "e": "「利用者が本当に求めているのは人とのふれあいだ」"},
      {"q": "筆者の考えとして、最も近いものはどれですか。", "o": ["テクノロジーだけで介護の問題は解決できる。", "介護の中心は人と人との関わりである。", "ロボットの導入はやめるべきだ。", "高齢者は機械の操作を学ぶべきだ。"], "a": 1, "e": "「テクノロジーはあくまで介護を支える道具であり、中心となるのは人と人との関わりだ」"}
    ],
    "exp": "問1: Bằng chứng 「介護の現場では人手不足が深刻な問題になっている」— hiện trường chăm sóc đang thiếu nhân lực trầm trọng. Cơ sở tăng quá nhiều, số người cao tuổi giảm và giá robot đều không có trong bài. 問2: Bằng chứng 「センサーが異常を察知して家族や介護施設に知らせる仕組みだ」— cảm biến phát hiện bất thường và báo cho gia đình, cơ sở chăm sóc. Làm việc nhà thay, chữa bệnh hay làm thay nhân viên đều không được nhắc đến. 問3: Bằng chứng 「利用者が本当に求めているのは人とのふれあいだ」— người sử dụng thực sự cần sự tiếp xúc với con người. Đáp án 1 sai (bài không nói robot thay được nhân viên); đáp án 2 sai (bài nói nhiều người cao tuổi chưa quen thao tác máy, không phải quá dễ); đáp án 3 sai (bài không nói người dùng ghét robot). 問4: Bằng chứng 「テクノロジーはあくまで介護を支える道具であり、中心となるのは人と人との関わりだ」— công nghệ chỉ là công cụ hỗ trợ, trung tâm vẫn là quan hệ giữa người với người. Đáp án 1 trái ngược với ý tác giả; đáp án 3 và 4 đều không phải主張 của tác giả。",
    "voc": "高齢化（こうれいか）：già hóa dân số； 介護（かいご）：chăm sóc (người cao tuổi)； 人手不足（ひとでぶそく）：thiếu nhân lực； 深刻（しんこく）：nghiêm trọng； 見守りセンサー（みまもりセンサー）：cảm biến theo dõi； 転倒（てんとう）：ngã； 察知（さっち）：phát hiện, nhận biết； 孤独感（こどくかん）：cảm giác cô đơn； 和らげる（やわらげる）：làm dịu đi； 気配り（きくばり）：sự quan tâm chu đáo； ふれあい：sự tiếp xúc, giao lưu"
  }
  ],
  tougou: [
  {
    "p1": "現金を使わないキャッシュレス決済が広がっている。現金を持ち歩く必要がなく、支払いが速く済むのが大きな利点だ。店側にとっても、釣り銭の準備や現金の管理の手間が省ける。さらに、利用履歴が記録されるため、家計の管理もしやすくなる。政府もキャッシュレス化を進めており、今後ますます利用が増えると考えられる。",
    "p2": "一方で、キャッシュレス決済には課題もある。スマートフォンやカードがなければ支払いができず、災害時に停電が起きれば利用できなくなる。また、高齢者の中には、操作に慣れていない人も多い。さらに、使いすぎてしまう心配もある。現金には、目に見える形でお金を使うという利点があり、使い方を意識しやすい。だからこそ、現金とキャッシュレスの両方を使い分けることが大切だ。",
    "qs": [
      {"q": "両方の文章に共通する話題は何ですか。", "o": ["現金の歴史", "キャッシュレス決済の利点と課題", "スマートフォンの使い方", "政府の政策の内容"], "a": 1, "e": "p1はキャッシュレスの利点、p2は課題を述べている。"},
      {"q": "p1で述べられているキャッシュレスの利点として、正しいものはどれですか。", "o": ["停電のときでも使えること", "支払いが速く済むこと", "高齢者でも簡単に使えること", "現金の管理が増えること"], "a": 1, "e": "「支払いが速く済むのが大きな利点だ」"},
      {"q": "p2の筆者が主張していることは何ですか。", "o": ["現金はもう必要ない。", "現金とキャッシュレスを使い分けることが大切だ。", "キャッシュレス決済はやめるべきだ。", "高齢者はスマートフォンを使うべきだ。"], "a": 1, "e": "「現金とキャッシュレスの両方を使い分けることが大切だ」"}
    ],
    "exp": "問1: p1 nói về lợi ích của thanh toán không tiền mặt, p2 nói về課題 của nó — chủ đề chung là lợi ích và課題 củaキャッシュレス決済. Lịch sử tiền mặt, cách dùng điện thoại và nội dung chính sách của chính phủ đều không phải chủ đề chung. 問2: Bằng chứng p1 「支払いが速く済むのが大きな利点だ」— thanh toán nhanh là lợi ích lớn. Khi mất điện thì không dùng được (là課題 ở p2); người cao tuổi khó dùng (課題 ở p2); quản lí tiền mặt tăng là sai (p1 nói手間が省ける). 問3: Bằng chứng p2 「現金とキャッシュレスの両方を使い分けることが大切だ」— tác giả p2主張 nên dùng linh hoạt cả hai. Đáp án 1, 3, 4 đều trái với nội dung p2。",
    "voc": "キャッシュレス決済（キャッシュレスけっさい）：thanh toán không tiền mặt； 釣り銭（つりせん）：tiền lẻ trả lại； 手間（てま）：công sức, phiền phức； 家計（かけい）：chi tiêu gia đình； 停電（ていでん）：mất điện； 使い分ける（つかいわける）：dùng linh hoạt tùy trường hợp； 意識（いしき）：ý thức"
  }
  ],
  shuchou: [
  {
    "p": "私たちは、子どものころから「失敗してはいけない」と教えられて育つ。学校では、正しい答えを出すことが評価され、間違えることは恥ずかしいことだと感じてしまう。そのため、大人になっても、新しいことに挑戦するのをためらう人が多い。失敗を恐れるあまり、できることだけを繰り返し、成長の機会を逃しているのだ。しかし、失敗は決して無意味なものではない。むしろ、失敗こそが学びの出発点である。たとえば、科学の歴史を振り返れば、多くの発見は失敗や偶然から生まれている。実験がうまくいかなかった理由を考えることで、新しい仮説が生まれ、やがて大きな発見につながった例は少なくない。失敗を分析し、次に生かすことができれば、失敗は貴重な経験になる。問題は、失敗そのものではなく、失敗をどう受け止めるかである。失敗を責める文化の中では、人は挑戦を避けるようになる。逆に、失敗を学びの機会として認める環境があれば、人は安心して新しいことに取り組むことができる。企業の中でも、失敗を共有し、そこから学ぶ仕組みを持つ会社ほど、新しいアイデアが生まれやすいと言われている。筆者が主張したいのは、失敗を恐れずに挑戦することの大切さである。失敗を避けるのではなく、失敗から学ぶ姿勢こそが、個人の成長と社会の発展を支える。子どもたちには、正しい答えを出すことだけでなく、間違えたときにどう考えるかを学んでほしい。それが、変化の激しい時代を生き抜く力になるはずだ。",
    "qs": [
      {"q": "筆者が問題だと考えていることは何ですか。", "o": ["子どもが正しい答えを出せないこと", "失敗を恐れて挑戦を避けること", "学校で失敗を教えないこと", "大人が新しいことを学ばないこと"], "a": 1, "e": "「失敗を恐れるあまり、できることだけを繰り返し、成長の機会を逃している」"},
      {"q": "科学の歴史の例が示していることは何ですか。", "o": ["失敗から新しい発見が生まれることがある", "実験は必ず成功する", "偶然の発見は価値がない", "仮説は失敗から生まれない"], "a": 0, "e": "「多くの発見は失敗や偶然から生まれている」"},
      {"q": "失敗を学びの機会として認める環境では、どうなるか。", "o": ["人は挑戦を避けるようになる", "人は安心して新しいことに取り組むことができる", "失敗が完全になくなる", "正しい答えだけが評価される"], "a": 1, "e": "「失敗を学びの機会として認める環境があれば、人は安心して新しいことに取り組むことができる」"},
      {"q": "筆者の主張として、最も近いものはどれですか。", "o": ["失敗を避けることが成長につながる", "失敗から学ぶ姿勢が成長と発展を支える", "正しい答えを出すことが最も大切だ", "失敗を責める文化が必要だ"], "a": 1, "e": "「失敗から学ぶ姿勢こそが、個人の成長と社会の発展を支える」"}
    ],
    "exp": "問1: Bằng chứng 「失敗を恐れるあまり、できることだけを繰り返し、成長の機会を逃している」— vấn đề là sợ thất bại nên tránh thử thách và bỏ lỡ cơ hội trưởng thành. Đáp án 1, 3, 4 đều không phải điều tác giả coi là vấn đề. 問2: Bằng chứng 「多くの発見は失敗や偶然から生まれている」— nhiều phát minh khoa học sinh ra từ thất bại và偶然. Đáp án 2, 3, 4 đều trái với ví dụ trong bài. 問3: Bằng chứng 「失敗を学びの機会として認める環境があれば、人は安心して新しいことに取り組むことができる」— môi trường công nhận thất bại là cơ hội học tập giúp con người yên tâm thử điều mới. Tránh thử thách là hệ quả của văn hóa trách móc thất bại, không phải của môi trường này; thất bại biến mất hoàn toàn và chỉ đáp án đúng được đánh giá đều không có trong bài. 問4 (主張): Bằng chứng 「失敗から学ぶ姿勢こそが、個人の成長と社会の発展を支える」—主張 của tác giả là thái độ học hỏi từ thất bại mới nâng đỡ sự trưởng thành của cá nhân và sự phát triển của xã hội. Đáp án 1 trái ngược (tác giả nói đừng tránh thất bại); đáp án 3 hẹp hơn主張 (tác giả muốn trẻ học cách suy nghĩ khi sai, không chỉ đưa ra đáp án đúng); đáp án 4 trái ngược (tác giả phê phán văn hóa trách móc thất bại)。",
    "voc": "失敗（しっぱい）：thất bại； 挑戦（ちょうせん）：thử thách； ためらう：do dự, chần chừ； 機会（きかい）：cơ hội； 出発点（しゅっぱつてん）：điểm xuất phát； 仮説（かせつ）：giả thuyết； 貴重（きちょう）：quý giá； 受け止める（うけとめる）：đón nhận, tiếp nhận； 共有（きょうゆう）：chia sẻ； 生き抜く（いきぬく）：vượt qua, sống sót"
  }
  ],
  info: [
  {
    "tpl": "<b>市民ジムの利用時間（11月）</b><br><table class=\"jl-tbl\"><tr><th>曜日</th><th>利用時間</th></tr><tr><td>月・水・金</td><td>9時〜21時</td></tr><tr><td>火・木</td><td>9時〜18時</td></tr><tr><td>土</td><td>10時〜17時</td></tr><tr><td>日・祝日</td><td>休館</td></tr></table>11月の休館日：3日（火・祝）、23日（月・祝）<br><b>11月のカレンダー</b><br><table class=\"jl-cal\"><tr><th>月</th><th>火</th><th>水</th><th>木</th><th>金</th><th>土</th><th>日</th></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td><td>1</td></tr><tr><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td></tr><tr><td>9</td><td>10</td><td>11</td><td>12</td><td>13</td><td>14</td><td>15</td></tr><tr><td>16</td><td>17</td><td>18</td><td>19</td><td>20</td><td>21</td><td>22</td></tr><tr><td>23</td><td>24</td><td>25</td><td>26</td><td>27</td><td>28</td><td>29</td></tr><tr><td>30</td><td></td><td></td><td></td><td></td><td></td><td></td></tr></table>",
    "inst": "つぎの市民ジムの利用時間と11月のカレンダーを見て、質問に答えてください。答えは1・2・3・4から、いちばんいいものを一つえらんでください。",
    "q": "田中さんは、平日の夜19時からジムを利用したいです。11月の第2週（9日〜15日）で、利用できる日はどれですか。",
    "opts": ["9日（月）", "10日（火）", "12日（木）", "14日（土）"],
    "ans": 0,
    "exp": "Muốn dùng phòng gym lúc 19 giờ tối ngày thường: tra lịch, ngày 9 là thứ Hai, ngày 10 là thứ Ba, ngày 12 là thứ Năm, ngày 14 là thứ Bảy. Theo bảng giờ: thứ Hai/4/6 mở đến 21 giờ nên 19 giờ dùng được; thứ Ba/5 mở đến 18 giờ nên 19 giờ đã đóng cửa; thứ Bảy mở đến 17 giờ nên cũng không được. Chỉ có ngày 9 (thứ Hai) là đúng. Lưu ý ngày 9 không phải ngày nghỉ (ngày nghỉ là 3 và 23)。",
    "voc": "市民ジム（しみんジム）：phòng gym công cộng； 利用時間（りようじかん）：giờ sử dụng； 休館（きゅうかん）：đóng cửa (cơ sở)； 祝日（しゅくじつ）：ngày lễ； 平日（へいじつ）：ngày thường"
  },
  {
    "tpl": "<b>料理教室のご案内（12月）</b><br><table class=\"jl-tbl\"><tr><th>コース</th><th>時間</th><th>定員</th><th>料金</th></tr><tr><td>午前コース</td><td>10時〜12時</td><td>12名</td><td>3,500円</td></tr><tr><td>午後コース</td><td>14時〜16時</td><td>8名</td><td>4,000円</td></tr></table>申込締切：開催日の3日前",
    "inst": "つぎの料理教室のご案内を見て、質問に答えてください。答えは1・2・3・4から、いちばんいいものを一つえらんでください。",
    "q": "12月5日（土）の午後コースに申し込みたいです。申込締切と料金の組み合わせはどれですか。",
    "opts": ["12月2日・4,000円", "12月2日・3,500円", "12月3日・4,000円", "12月4日・4,000円"],
    "ans": 0,
    "exp": "Khóa buổi chiều (午後コース) giá 4,000円, không phải 3,500円 (giá khóa buổi sáng). Hạn đăng kí là 3 ngày trước ngày tổ chức: 12月5日 trừ 3 ngày = 12月2日. Vậy đáp án đúng là 12月2日・4,000円. 12月3日 là 2 ngày trước, 12月4日 là 1 ngày trước nên đều quá hạn。",
    "voc": "料理教室（りょうりきょうしつ）：lớp học nấu ăn； 午前（ごぜん）：buổi sáng； 午後（ごご）：buổi chiều； 定員（ていいん）：số người tối đa； 申込締切（もうしこみしめきり）：hạn đăng kí； 開催日（かいさいび）：ngày tổ chức"
  }
  ]
};

/* ----- Test 9 ----- */
window.WRITTEN_N1_SET9 = {
  yomi: [
    {
      s: "この 政策 の 効果 は 顕著 に あらわれて いる。",
      t: "顕著",
      r: "けんちょ",
      w: ["けんちょう", "けんしょ", "げんちょ"],
      exp: "顕著 đọc là けんちょ (kencho), nghĩa là 'rõ rệt, nổi bật'. けんちょう sai trường âm; けんしょ sai âm tiết giữa (しょ thay cho ちょ); げんちょ sai âm đầu (げ thay cho け).",
      voc: "政策（せいさく）：chính sách； 効果（こうか）：hiệu quả； 顕著（けんちょ）：rõ rệt, nổi bật； あらわれる：xuất hiện, thể hiện"
    },
    {
      s: "この 本 は 日本語 の 学習 に 有益 な 情報 が たくさん 載って いる。",
      t: "有益",
      r: "ゆうえき",
      w: ["ゆうえい", "ゆえき", "ゆうき"],
      exp: "有益 đọc là ゆうえき (yuueki), nghĩa là 'có ích, có lợi'. ゆうえい sai âm cuối (えい thay cho えき); ゆえき thiếu trường âm う; ゆうき thiếu âm え.",
      voc: "有益（ゆうえき）：có ích, có lợi； 学習（がくしゅう）：học tập； 情報（じょうほう）：thông tin； 載る（のる）：được đăng, được ghi"
    },
    {
      s: "彼女 の 純粋 な 気持ち に 心 を 打たれた。",
      t: "純粋",
      r: "じゅんすい",
      w: ["じゅんずい", "すみすい", "じゅんす"],
      exp: "純粋 đọc là じゅんすい (junsui), nghĩa là 'thuần khiết, trong sáng'. じゅんずい sai vì 粋 đọc すい chứ không phải ずい; すみすい sai âm đầu (すみ thay cho じゅん); じゅんす thiếu âm い cuối.",
      voc: "純粋（じゅんすい）：thuần khiết, trong sáng； 気持ち（きもち）：tình cảm, cảm xúc； 心を打つ（こころをうつ）：làm cảm động"
    },
    {
      s: "この 地域 は 水資源 が 豊富 だ。",
      t: "豊富",
      r: "ほうふ",
      w: ["ほうふう", "とよふ", "ほうぶ"],
      exp: "豊富 đọc là ほうふ (houfu), nghĩa là 'phong phú, dồi dào'. ほうふう thừa trường âm う; とよふ là cách đọc kun'yomi của 豊 (とよ) ghép sai với 富; ほうぶ sai âm cuối (ぶ thay cho ふ).",
      voc: "地域（ちいき）：khu vực, địa phương； 水資源（みずしげん）：tài nguyên nước； 豊富（ほうふ）：phong phú, dồi dào"
    },
    {
      s: "試合 は 後半 に 逆転 し、チーム は 勝利 を 収めた。",
      t: "逆転",
      r: "ぎゃくてん",
      w: ["ぎゃくでん", "ぎゃくて", "さかてん"],
      exp: "逆転 đọc là ぎゃくてん (gyakuten), nghĩa là 'lội ngược dòng, đảo ngược tình thế'. ぎゃくでん sai vì 転 đọc てん chứ không phải でん; ぎゃくて thiếu âm ん; さかてん dùng cách đọc kun'yomi さか của 逆 nên sai.",
      voc: "試合（しあい）：trận đấu； 後半（こうはん）：hiệp hai, nửa sau； 逆転（ぎゃくてん）：lội ngược dòng； 勝利（しょうり）：chiến thắng； 収める（おさめる）：giành được"
    },
    {
      s: "新しい 法律 が 経済 に 与える 影響 について 懸念 の 声 が 上がって いる。",
      t: "懸念",
      r: "けねん",
      w: ["けんねん", "けね", "げねん"],
      exp: "懸念 đọc là けねん (kenen), nghĩa là 'lo ngại, quan ngại'. けんねん sai vì 懸 đọc けん trong từ khác nhưng trong 懸念 đọc け (けねん); けね thiếu âm ん cuối; げねん sai âm đầu (げ thay cho け).",
      voc: "法律（ほうりつ）：pháp luật； 経済（けいざい）：kinh tế； 影響（えいきょう）：ảnh hưởng； 懸念（けねん）：lo ngại, quan ngại"
    }
  ],
  ctx: [
    {
      s: "この 政策 は、 経済 の 成長 を （　）する こと を 目的 と して いる。",
      a: "促進",
      w: ["抑制", "阻止", "妨害"],
      exp: "Câu nói về mục đích của chính sách là thúc đẩy tăng trưởng kinh tế nên điền 促進 (thúc đẩy, xúc tiến). 抑制 (kiềm chế, ức chế), 阻止 (ngăn chặn) và 妨害 (cản trở) đều mang nghĩa ngược lại, không hợp với 'mục đích' của chính sách tăng trưởng.",
      voc: "政策（せいさく）：chính sách； 経済（けいざい）：kinh tế； 成長（せいちょう）：tăng trưởng； 促進（そくしん）：thúc đẩy, xúc tiến； 目的（もくてき）：mục đích"
    },
    {
      s: "政府 は 古い 制度 を （　）する こと を 決めた。",
      a: "廃止",
      w: ["実施", "維持", "拡大"],
      exp: "Chính phủ quyết định bãi bỏ chế độ cũ nên điền 廃止 (bãi bỏ, hủy bỏ). 実施 (thực thi), 維持 (duy trì) và 拡大 (mở rộng) đều mang nghĩa tiếp tục hoặc mở rộng chế độ, trái với '古い制度' cần loại bỏ.",
      voc: "政府（せいふ）：chính phủ； 制度（せいど）：chế độ； 廃止（はいし）：bãi bỏ, hủy bỏ； 実施（じっし）：thực thi； 維持（いじ）：duy trì"
    },
    {
      s: "外国人 観光客 の 数 が ここ 数年 で （　）して いる。",
      a: "急増",
      w: ["急減", "停滞", "横ばい"],
      exp: "Số lượng khách du lịch nước ngoài tăng nhanh trong vài năm gần đây nên điền 急増 (tăng nhanh, tăng vọt). 急減 (giảm nhanh) ngược nghĩa; 停滞 (đình trệ) và 横ばい (đi ngang, không đổi) đều không diễn tả sự tăng lên.",
      voc: "外国人（がいこくじん）：người nước ngoài； 観光客（かんこうきゃく）：khách du lịch； 急増（きゅうぞう）：tăng nhanh, tăng vọt； 停滞（ていたい）：đình trệ"
    },
    {
      s: "規制 を （　）する こと で、新規 参入 が しやすく なった。",
      a: "緩和",
      w: ["強化", "制定", "維持"],
      exp: "Nới lỏng quy định khiến việc gia nhập mới trở nên dễ dàng hơn nên điền 緩和 (nới lỏng, giảm nhẹ). 強化 (tăng cường, siết chặt) ngược nghĩa; 制定 (ban hành quy định mới) sẽ làm việc gia nhập khó hơn, ngược với しやすく なった; 維持 (duy trì) thì không làm gì thay đổi.",
      voc: "規制（きせい）：quy định, quy chế； 緩和（かんわ）：nới lỏng, giảm nhẹ； 新規参入（しんきさんにゅう）：gia nhập mới； 強化（きょうか）：tăng cường； 制定（せいてい）：ban hành, đặt ra (quy định, luật)"
    },
    {
      s: "この 研究 は 医学 の 発展 に 大きく （　）して いる。",
      a: "寄与",
      w: ["妨害", "依存", "抵抗"],
      exp: "Nghiên cứu đóng góp lớn cho sự phát triển của y học nên điền 寄与 (đóng góp, góp phần). 妨害 (cản trở) ngược nghĩa; 依存 (phụ thuộc) và 抵抗 (kháng cự, chống lại) không hợp với quan hệ 'nghiên cứu — sự phát triển của y học'.",
      voc: "研究（けんきゅう）：nghiên cứu； 医学（いがく）：y học； 発展（はってん）：phát triển； 寄与（きよ）：đóng góp, góp phần"
    },
    {
      s: "その 行為 は 法律 に （　）する おそれ が ある。",
      a: "抵触",
      w: ["適合", "準拠", "接近"],
      exp: "Hành vi có nguy cơ vi phạm pháp luật nên điền 抵触 (xung đột, vi phạm, chạm tới điều luật). 適合 (phù hợp) và 準拠 (tuân theo, dựa theo) mang nghĩa tuân thủ pháp luật, ngược với おそれ (nguy cơ); 接近 (tiếp cận) không dùng với 法律 trong nghĩa này.",
      voc: "行為（こうい）：hành vi； 法律（ほうりつ）：pháp luật； 抵触（ていしょく）：xung đột, vi phạm； おそれ：nguy cơ, khả năng"
    },
    {
      s: "図書館 の 蔵書 を （　）させる 取り組み が 進んで いる。",
      a: "充実",
      w: ["削減", "制限", "簡素化"],
      exp: "Nỗ lực làm cho kho sách của thư viện thêm phong phú, đầy đủ nên điền 充実 (làm phong phú, củng cố). 削減 (cắt giảm) và 制限 (hạn chế) ngược nghĩa; 簡素化 (đơn giản hóa) không hợp với 蔵書 (kho sách).",
      voc: "図書館（としょかん）：thư viện； 蔵書（ぞうしょ）：kho sách, sách lưu trữ； 充実（じゅうじつ）：làm phong phú, củng cố； 取り組み（とりくみ）：nỗ lực, sáng kiến"
    }
  ],
  syn: [
    {
      s: "彼 は 迅速 な 対応 で 問題 を 解決 した。",
      t: "迅速",
      a: "すばやい",
      w: ["おそい", "ていねい", "しずか"],
      exp: "迅速 nghĩa là 'nhanh chóng, mau lẹ' nên từ đồng nghĩa là すばやい (nhanh nhẹn). おそい (chậm) ngược nghĩa; ていねい (cẩn thận, lịch sự) và しずか (yên tĩnh) không liên quan đến tốc độ.",
      voc: "迅速（じんそく）：nhanh chóng, mau lẹ； 対応（たいおう）：ứng phó, đối phó； 解決（かいけつ）：giải quyết； すばやい：nhanh nhẹn, mau lẹ"
    },
    {
      s: "近年、この 国 の 経済 成長 は 著しい。",
      t: "著しい",
      a: "目覚ましい",
      w: ["わずかな", "地味な", "平凡な"],
      exp: "著しい nghĩa là 'nổi bật, đáng kể' (về mức độ tăng trưởng) nên từ đồng nghĩa là 目覚ましい (đáng kinh ngạc, nổi bật). わずかな (chỉ một chút) ngược nghĩa; 地味な (giản dị, không nổi bật) và 平凡な (bình thường, tầm thường) đều trái nghĩa.",
      voc: "近年（きんねん）：những năm gần đây； 経済成長（けいざいせいちょう）：tăng trưởng kinh tế； 著しい（いちじるしい）：nổi bật, đáng kể； 目覚ましい（めざましい）：đáng kinh ngạc, nổi bật"
    },
    {
      s: "この 地域 は 水 が 乏しい。",
      t: "乏しい",
      a: "少ない",
      w: ["豊かな", "十分な", "満ちた"],
      exp: "乏しい nghĩa là 'thiếu thốn, ít ỏi' nên từ đồng nghĩa là 少ない (ít). 豊かな (phong phú), 十分な (đầy đủ) và 満ちた (tràn đầy) đều ngược nghĩa.",
      voc: "地域（ちいき）：khu vực, địa phương； 乏しい（とぼしい）：thiếu thốn, ít ỏi； 少ない（すくない）：ít； 豊かな（ゆたかな）：phong phú"
    },
    {
      s: "彼 は 巧み な 話術 で 聴衆 を 魅了 した。",
      t: "巧み",
      a: "上手な",
      w: ["下手な", "乱暴な", "雑な"],
      exp: "巧みな nghĩa là 'khéo léo, tài tình' nên từ đồng nghĩa là 上手な (giỏi, khéo). 下手な (dở, vụng về) ngược nghĩa; 乱暴な (thô bạo) và 雑な (cẩu thả, sơ sài) không liên quan đến sự khéo léo.",
      voc: "巧みな（たくみな）：khéo léo, tài tình； 話術（わじゅつ）：nghệ thuật nói chuyện； 聴衆（ちょうしゅう）：thính giả, khán giả； 魅了する（みりょうする）：mê hoặc, thu hút"
    },
    {
      s: "研究 に は 厳密 な データ の 分析 が 必要 だ。",
      t: "厳密",
      a: "正確な",
      w: ["大ざっぱな", "あいまいな", "いいかげんな"],
      exp: "厳密な nghĩa là 'nghiêm ngặt, chính xác' nên từ đồng nghĩa là 正確な (chính xác). 大ざっぱな (đại khái, qua loa), あいまいな (mơ hồ) và いいかげんな (cẩu thả, qua loa) đều ngược nghĩa với sự nghiêm ngặt, chính xác.",
      voc: "研究（けんきゅう）：nghiên cứu； 厳密な（げんみつな）：nghiêm ngặt, chính xác； データ：dữ liệu； 分析（ぶんせき）：phân tích"
    },
    {
      s: "彼 の 説明 は 不明確 で、よく 分からなかった。",
      t: "不明確",
      a: "はっきりしない",
      w: ["明確な", "具体的な", "確実な"],
      exp: "不明確 nghĩa là 'không rõ ràng' nên từ đồng nghĩa là はっきりしない (không rõ ràng). 明確な (rõ ràng) ngược nghĩa; 具体的な (cụ thể) và 確実な (chắc chắn) đều không diễn tả sự mơ hồ của lời giải thích.",
      voc: "説明（せつめい）：giải thích； 不明確（ふめいかく）：không rõ ràng； はっきりしない：không rõ ràng； 明確な（めいかくな）：rõ ràng"
    }
  ],
  yoho: [
    {
      t: "顕著",
      s: [
        "この 政策 の 効果 は 顕著 です。",
        "彼 の 顔 は 顕著 です。",
        "この 部屋 は 顕著 に 狭い です。",
        "彼女 の 声 は 顕著 に 小さい です。"
      ],
      a: 0,
      exp: "顕著 (rõ rệt, nổi bật) dùng để nói về hiệu quả, sự thay đổi, sự khác biệt rõ ràng nên chỉ câu 1 đúng: hiệu quả của chính sách là rõ rệt. 顔 (khuôn mặt), 部屋 (căn phòng) và 声 (giọng nói) không dùng với 顕著 — không nói 'khuôn mặt rõ rệt' hay 'giọng nói rõ rệt' theo nghĩa này.",
      voc: "顕著（けんちょ）：rõ rệt, nổi bật； 政策（せいさく）：chính sách； 効果（こうか）：hiệu quả"
    },
    {
      t: "妥当",
      s: [
        "この 料理 は 妥当 です。",
        "この 計画 は 妥当 だ と 思います。",
        "この 色 は 妥当 です。",
        "この 声 は 妥当 です。"
      ],
      a: 1,
      exp: "妥当 (thỏa đáng, hợp lý) dùng để đánh giá một kế hoạch, quyết định, mức giá, phương pháp là hợp lý nên chỉ câu 2 đúng. 料理 (món ăn), 色 (màu sắc) và 声 (giọng nói) không được đánh giá bằng 妥当 — không nói 'món ăn thỏa đáng' hay 'màu sắc hợp lý' theo nghĩa này.",
      voc: "妥当（だとう）：thỏa đáng, hợp lý； 計画（けいかく）：kế hoạch； 料理（りょうり）：món ăn"
    },
    {
      t: "懸念",
      s: [
        "この 料理 に 懸念 を 示した。",
        "彼 の 声 に 懸念 を 示した。",
        "新しい 制度 の 実施 に 懸念 を 示す 人 が 多い。",
        "この 天気 に 懸念 を 示した。"
      ],
      a: 2,
      exp: "懸念を示す (bày tỏ lo ngại) dùng với một chính sách, chế độ, kế hoạch, tình hình — những đối tượng có thể gây lo lắng về tương lai — nên chỉ câu 3 đúng. 料理 (món ăn), 声 (giọng nói) và 天気 (thời tiết) không phải là đối tượng mà người ta 'bày tỏ quan ngại' theo cách nói 懸念を示す.",
      voc: "懸念（けねん）：lo ngại, quan ngại； 制度（せいど）：chế độ； 実施（じっし）：thực thi, triển khai"
    },
    {
      t: "明確",
      s: [
        "彼 の 説明 は 明確 で 分かりやすかった。",
        "彼 の 顔 は 明確 です。",
        "この 料理 は 明確 です。",
        "この 部屋 は 明確 です。"
      ],
      a: 0,
      exp: "明確 (rõ ràng) dùng để nói về lời giải thích, ý kiến, mục tiêu, sự khác biệt là rõ ràng nên chỉ câu 1 đúng. 顔 (khuôn mặt), 料理 (món ăn) và 部屋 (căn phòng) không dùng với 明確 — không nói 'khuôn mặt rõ ràng' hay 'món ăn rõ ràng' theo nghĩa này.",
      voc: "明確（めいかく）：rõ ràng； 説明（せつめい）：giải thích； 分かりやすい：dễ hiểu"
    },
    {
      t: "繊細",
      s: [
        "この 料理 は 繊細 に 辛い です。",
        "彼 の 声 は 繊細 に 大きい です。",
        "この 道 は 繊細 に 広い です。",
        "この 料理 は 繊細 な 味わい です。"
      ],
      a: 3,
      exp: "繊細 (tinh tế, nhạy cảm) dùng để nói về hương vị, cảm nhận, tay nghề — những thứ có sự tinh tế — nên chỉ câu 4 đúng: món ăn có hương vị tinh tế. 繊細に辛い (cay một cách tinh tế), 繊細に大きい (to một cách tinh tế) và 繊細に広い (rộng một cách tinh tế) đều là cách kết hợp sai — 繊細 không bổ nghĩa cho mức độ cay, to hay rộng.",
      voc: "繊細（せんさい）：tinh tế, nhạy cảm； 味わい（あじわい）：hương vị, vị ngon tinh tế； 料理（りょうり）：món ăn； 辛い（からい）：cay"
    },
    {
      t: "尽きる",
      s: [
        "この 音 は 尽きる こと が あります。",
        "資源 は やがて 尽きる だろう。",
        "彼 の 声 は 尽きる こと が あります。",
        "この 部屋 は 尽きる こと が あります。"
      ],
      a: 1,
      exp: "尽きる (cạn kiệt, hết) dùng với tài nguyên, tiền bạc, sức lực, thời gian — những thứ có thể dùng hết — nên chỉ câu 2 đúng: tài nguyên rồi sẽ cạn kiệt. 音 (âm thanh), 声 (giọng nói) và 部屋 (căn phòng) không dùng với 尽きる theo nghĩa 'cạn kiệt' này — âm thanh, giọng nói và căn phòng đều không phải thứ có thể cạn kiệt.",
      voc: "尽きる（つきる）：cạn kiệt, hết； 資源（しげん）：tài nguyên； 音（おと）：âm thanh； 声（こえ）：giọng nói； 部屋（へや）：căn phòng； やがて：rồi sẽ, chẳng bao lâu nữa"
    }
  ],
  g1dlg: [
    {
      d: ["新しい 会社 は どう？", "会社 に 入って （　）、毎日 残業 が 続いて いるよ。"],
      a: "からというもの",
      w: ["そばから", "や否や", "なり"],
      p: "〜てからというもの",
      exp: "B nói 'từ khi vào công ty, ngày nào cũng tăng ca liên tục' — diễn tả trạng thái kéo dài từ một thời điểm trong quá khứ đến nay nên dùng 〜てからというもの (từ khi... đến nay). そばから phải đi sau Vた (入ったそばから) nên 入ってそばから sai; や否や và なり phải đi sau Vる (入るや否や/入るなり) nên 入ってや否や・入ってなり sai.",
      voc: "残業（ざんぎょう）：tăng ca, làm thêm giờ； 続く（つづく）：tiếp diễn, kéo dài； 〜てからというもの：từ khi... đến nay"
    },
    {
      d: ["来月 で 会社 を 辞める んだって？", "うん、今月 （　）、この 会社 と は お別れ だよ。"],
      a: "を限りに",
      w: ["をもとに", "をめぐって", "を中心に"],
      p: "N を限りに",
      exp: "B nói 'lấy tháng này làm giới hạn cuối cùng, từ biệt công ty' nên dùng Nを限りに (lấy... làm mốc cuối cùng, chấm dứt ở...). をもとに (dựa trên), をめぐって (xoay quanh, về vấn đề) và を中心に (lấy... làm trung tâm) đều không diễn tả 'chấm dứt vào tháng này'.",
      voc: "辞める（やめる）：nghỉ việc； お別れ（おわかれ）：chia tay, từ biệt； 〜を限りに：lấy... làm mốc cuối cùng"
    },
    {
      d: ["新しい サービス は いつ から 始まる の？", "全国 展開 （　）、来月 から 東京 で 試験的 に 始まる んだ。"],
      a: "に先駆けて",
      w: ["に伴って", "に応じて", "に反して"],
      p: "〜に先駆けて",
      exp: "Dịch vụ mới bắt đầu thử nghiệm ở Tokyo trước khi triển khai toàn quốc nên dùng 〜に先駆けて (đi trước, trước khi...). に伴って (cùng với, đi kèm) sai về thứ tự thời gian; に応じて (tùy theo) và に反して (trái với) không hợp nghĩa.",
      voc: "全国展開（ぜんこくてんかい）：triển khai toàn quốc； 試験的（しけんてき）：mang tính thử nghiệm； 〜に先駆けて（にさきがけて）：đi trước, trước khi..."
    }
  ],
  g1: [
    {
      s: "彼 は 地方 に 住んで いる （　）、なかなか 東京 の 会議 に 出席 できない。",
      a: "こととて",
      w: ["ばかりか", "ともなると", "にひきかえ"],
      p: "〜こととて",
      exp: "Câu nêu lý do 'vì sống ở địa phương nên khó tham dự cuộc họp ở Tokyo' — mẫu 〜こととて diễn tả lý do, nguyên cớ (vì...). ばかりか (không những... mà còn) cần vế sau mở rộng, không hợp; ともなると (khi đã trở thành...) cần danh từ chỉ địa vị/tình huống; にひきかえ (trái lại, ngược với) cần hai đối tượng đối lập.",
      voc: "地方（ちほう）：địa phương； 出席する（しゅっせきする）：tham dự； 会議（かいぎ）：cuộc họp； 〜こととて：vì, do"
    },
    {
      s: "昨年 の 売上 データ （　）、今年 の 販売 計画 を 立てた。",
      a: "を踏まえて",
      w: ["を限りに", "を境に", "を余儀なくされて"],
      p: "N + を踏まえて",
      exp: "Lập kế hoạch bán hàng năm nay dựa trên dữ liệu doanh thu năm ngoái nên dùng Nを踏まえて (dựa trên, căn cứ vào). を限りに (lấy... làm mốc kết thúc) chỉ dùng với thời điểm, không đi với データ; を境に (lấy... làm bước ngoặt) chỉ dùng với thời điểm/sự kiện, không đi với データ; を余儀なくされて (bị buộc phải) không hợp với việc lập kế hoạch chủ động.",
      voc: "売上（うりあげ）：doanh thu, doanh số； 販売計画（はんばいけいかく）：kế hoạch bán hàng； 〜を踏まえて（をふまえて）：dựa trên, căn cứ vào"
    },
    {
      s: "合格 した （　）、名前 が 合格者 一覧 に なかった。",
      a: "と思いきや",
      w: ["ともなると", "ばかりか", "にひきかえ"],
      p: "〜と思いきや",
      exp: "Tưởng là đã đỗ nhưng hóa ra tên không có trong danh sách — diễn tả kết quả trái với suy nghĩ nên dùng 〜と思いきや (cứ tưởng... hóa ra). ともなると (khi đã trở thành...) và ばかりか (không những... mà còn) không diễn tả sự trái ngược với dự đoán; にひきかえ cần hai đối tượng đối lập.",
      voc: "合格（ごうかく）：đỗ, đạt； 一覧（いちらん）：danh sách； 〜と思いきや：cứ tưởng... hóa ra"
    },
    {
      s: "専門家 （　）、この 問題 の 答え は 簡単 に は 出せない。",
      a: "といえども",
      w: ["に反して", "ばかりか", "にひきかえ"],
      p: "N + といえども",
      exp: "Dù là chuyên gia cũng không dễ đưa ra đáp án — diễn tả 'dù là... đi nữa' nên dùng Nといえども. に反して (trái với) cần một đối tượng để đối lập; ばかりか (không những... mà còn) cần vế sau mở rộng, không hợp với câu kết luận 'không dễ đưa ra đáp án'; にひきかえ (trái lại, ngược với) cần hai đối tượng đối lập, ở đây chỉ có một mình 専門家.",
      voc: "専門家（せんもんか）：chuyên gia； 簡単に（かんたんに）：một cách dễ dàng； 〜といえども：dù là... đi nữa"
    },
    {
      s: "試合 の 前日 は、早く 寝る （　）と 思います。",
      a: "に越したことはない",
      w: ["べく", "ざらではない", "ようでは"],
      p: "〜に越したことはない",
      exp: "Trước ngày thi đấu thì ngủ sớm là tốt nhất — mẫu Vるに越したことはない diễn tả 'làm... là tốt nhất, không gì bằng'. べく (để mà...) cần mục đích rõ ràng; ざらではない (không phải chuyện hiếm) không hợp; ようでは (với tình trạng như thế thì...) dùng để phê phán, không hợp với lời khuyên này.",
      voc: "試合（しあい）：trận đấu； 前日（ぜんじつ）：ngày hôm trước； 早く寝る（はやくねる）：đi ngủ sớm； 〜に越したことはない：làm... là tốt nhất"
    },
    {
      s: "彼 は 家族 に （　）相談 せず、会社 を 辞めて しまった。",
      a: "すら",
      w: ["だに", "ときたら", "といったら"],
      p: "N + すら",
      exp: "Anh ta nghỉ việc mà không thèm hỏi ý kiến ngay cả gia đình — すら diễn tả 'ngay cả... cũng (không)' với mức độ cực đoan. だに phải gắn trực tiếp vào danh từ (家族だに), còn 家族にだに sai dạng; ときたら và といったら dùng để nêu chủ đề kèm đánh giá, không diễn tả 'ngay cả... cũng không'.",
      voc: "家族（かぞく）：gia đình； 相談する（そうだんする）：bàn bạc, hỏi ý kiến； 辞める（やめる）：nghỉ việc； 〜すら：ngay cả... cũng"
    },
    {
      s: "こんなに 準備 不足 な （　）、合格 は 難しい だろう。",
      a: "ようでは",
      w: ["べくして", "に値する", "に堪えない"],
      p: "〜ようでは",
      exp: "Với tình trạng chuẩn bị thiếu thốn như thế này thì khó mà đỗ — mẫu 〜ようでは diễn tả 'với tình trạng như thế thì (kết quả xấu)'. 準備不足 là tính từ đuôi な nên trước ようでは phải có な (準備不足なようでは). べくして (ắt phải...) diễn tả sự tất yếu, không hợp; に値する (xứng đáng) cần danh từ chỉ giá trị; に堪えない phải đi sau Vる, còn 準備不足に堪えない sai dạng.",
      voc: "準備不足（じゅんびぶそく）：chuẩn bị thiếu thốn, chưa đủ； 合格（ごうかく）：đỗ, đạt； 〜ようでは：với tình trạng như thế thì..."
    }
  ],
  star: [
    {
      pre: "彼 は",
      post: "。",
      chunks: ["家 を 出る", "や否や", "雨 が", "降り出した"],
      p: "〜や否や",
      exp: "Thứ tự đúng: 彼は家を出るや否や雨が降り出した (Vừa ra khỏi nhà thì trời đổ mưa). や否や gắn ngay sau động từ thể từ điển 家を出る để diễn tả 'vừa... thì ngay lập tức...'; 雨が là chủ ngữ của 降り出した nên phải đứng trước động từ. Đảo 雨が lên trước や否や sẽ phá vỡ cấu trúc や否や.",
      voc: "家を出る（いえをでる）：ra khỏi nhà； 雨が降る（あめがふる）：trời mưa； 〜や否や：vừa... thì ngay lập tức..."
    },
    {
      pre: "母 が",
      post: "。",
      chunks: ["掃除 を した", "そばから", "子どもたち が", "部屋 を 散らかす"],
      p: "V-た そばから",
      exp: "Thứ tự đúng: 母が掃除をしたそばから子どもたちが部屋を散らかす (Mẹ vừa dọn dẹp xong thì bọn trẻ lại bày bừa phòng). そばから gắn sau Vた (掃除をした) để diễn tả 'vừa mới... thì ngay...'; 子どもたちが là chủ ngữ của 散らかす nên đứng trước động từ. Dùng 掃除をするそばから là sai dạng.",
      voc: "掃除をする（そうじをする）：dọn dẹp； 散らかす（ちらかす）：bày bừa, làm bừa bộn； 〜そばから：vừa mới... thì ngay..."
    },
    {
      pre: "大切 な",
      post: "。",
      chunks: ["書類 は", "コピー を 取っておく", "に越したことはない", "だろう"],
      p: "〜に越したことはない",
      exp: "Thứ tự đúng: 大切な書類はコピーを取っておくに越したことはないだろう (Giấy tờ quan trọng thì sao lưu một bản là tốt nhất). に越したことはない gắn sau động từ thể từ điển 取っておく; だろう đứng cuối câu để diễn tả suy đoán nhẹ. Đảo に越したことはない lên trước động từ sẽ sai cấu trúc.",
      voc: "大切な（たいせつな）：quan trọng； 書類（しょるい）：giấy tờ, tài liệu； コピーを取る：sao chụp, photo； 〜に越したことはない：làm... là tốt nhất"
    },
    {
      pre: "彼 は",
      post: "。",
      chunks: ["大雨", "をものともせずに", "山道 を", "歩き続けた"],
      p: "N + をものともせず（に）",
      exp: "Thứ tự đúng: 彼は大雨をものともせずに山道を歩き続けた (Anh ấy bất chấp mưa lớn mà vẫn đi tiếp trên đường núi). をものともせずに gắn sau danh từ 大雨 để diễn tả 'bất chấp...'; 山道を là tân ngữ chỉ nơi chốn của 歩き続けた nên đứng trước động từ. Đảo 大雨 ra sau をものともせずに sẽ sai.",
      voc: "大雨（おおあめ）：mưa lớn； 山道（やまみち）：đường núi； 歩き続ける（あるきつづける）：đi tiếp, tiếp tục đi； 〜をものともせずに：bất chấp..."
    },
    {
      pre: "社長",
      post: "。",
      chunks: ["ともなると", "休日 でも", "電話 が", "かかってくる"],
      p: "〜ともなると / ともなれば",
      exp: "Thứ tự đúng: 社長ともなると休日でも電話がかかってくる (Đã làm giám đốc thì ngay cả ngày nghỉ cũng có điện thoại gọi đến). ともなると gắn ngay sau danh từ 社長; 休日でも là cụm trạng ngữ chỉ thời gian; 電話が là chủ ngữ của かかってくる nên đứng trước động từ.",
      voc: "社長（しゃちょう）：giám đốc； 休日（きゅうじつ）：ngày nghỉ； 電話がかかる（でんわがかかる）：có điện thoại gọi đến； 〜ともなると：đã là... thì..."
    }
  ],
  bunsho: [
    {
      intro: "つぎの 文章 を 読んで、（　1　）〜（　5　）に 入る もの として いちばん いい もの を 選んで ください。",
      p: "近年、テレワーク を 導入 する 企業 が 増えて いる。（　1　）、通勤 時間 が なくなる こと で、社員 は 時間 を 有効 に 使える ように なった。（　2　）、在宅 勤務 で は 同僚 と の 意思疎通 が 難しく なる という 課題 も ある。（　3　）、企業 は オンライン 会議 の 活用 や 定期的 な 出社 の 仕組み を 整える 必要 が ある。（　4　）、テレワーク は 働き方 を 大きく 変えつつ ある。（　5　）、導入 に 当たって は、業務 の 性質 や 社員 の 希望 を 十分に 考慮 すべき だ。",
      b: [
        { a: "その結果", w: ["しかし", "一方で", "たとえば"] },
        { a: "一方で", w: ["そのため", "つまり", "たとえば"] },
        { a: "そのため", w: ["しかし", "つまり", "たとえば"] },
        { a: "つまり", w: ["しかし", "その結果", "たとえば"] },
        { a: "したがって", w: ["しかし", "たとえば", "すなわち"] }
      ],
      exp: "(1)その結果: nhờ không còn thời gian đi lại, nhân viên dùng thời gian hiệu quả hơn — đây là kết quả của việc 도입テレワーク. しかし/一方で mang nghĩa đối lập, たとえば nêu ví dụ, đều sai. (2)一方で: mặt khác, làm việc tại nhà có khó khăn trong giao tiếp với đồng nghiệp — đối lập với lợi ích ở câu trước. そのため/つまり là kết luận, không hợp. (3)そのため: vì có課題 đó nên doanh nghiệp cần chuẩn bị cơ chế họp trực tuyến và đi làm định kỳ — quan hệ nguyên nhân-kết quả. しかし là đối lập, つまり/たとえば không diễn tả nguyên nhân. (4)つまり: tóm lại, テレワーク đang thay đổi lớn cách làm việc — câu tổng kết. しかし đối lập, その結果 là kết quả cụ thể, たとえば nêu ví dụ, đều sai. (5)したがって: do đó, khi導入 cần xem xét kỹ tính chất công việc và mong muốn của nhân viên — kết luận, lời khuyên. しかし đối lập, たとえば nêu ví dụ, すなわち diễn giải lại chứ không phải kết luận.",
      voc: "テレワーク：làm việc từ xa； 導入する（どうにゅうする）：áp dụng, đưa vào； 通勤時間（つうきんじかん）：thời gian đi làm； 在宅勤務（ざいたくきんむ）：làm việc tại nhà； 意思疎通（いしそつう）：giao tiếp, trao đổi ý kiến； 考慮する（こうりょする）：xem xét, cân nhắc"
    }
  ],
  readS: [
    {
      p: "駅前 の 本屋 で、 来月 から 新しい サービス が 始まります。 本 を 予約 すると、 自宅 まで 無料 で 届けて くれる そうです。 ただし、 配達 は 市内 に 住む 人 だけ が 対象 です。 予約 は 電話 か 店頭 で できます。 配達 の 時間 は、 午前 十時 から 午後 六時 まで です。",
      q: "この サービス について、 正しい もの は どれ です か。",
      o: [
        "本 を 予約 すると、 市内 に 住む 人 は 自宅 まで 無料 で 届けて もらえる。",
        "本 を 予約 すると、 誰 でも 自宅 まで 無料 で 届けて もらえる。",
        "本 を 予約 すると、 店頭 で 無料 で もらえる。",
        "本 を 予約 しなくても、 自宅 まで 無料 で 届けて もらえる。"
      ],
      a: 0,
      e: "配達は市内に住む人だけが対象と書かれている。",
      exp: "Bài viết nói đặt sách thì được giao miễn phí đến nhà, nhưng giao hàng chỉ áp dụng cho người sống trong thành phố nên đáp án 1 đúng. Đáp án 2 sai vì không phải ai cũng được giao; đáp án 3 sai vì không phải nhận miễn phí tại cửa hàng mà là giao đến nhà; đáp án 4 sai vì phải đặt trước mới được giao.",
      voc: "本屋（ほんや）：hiệu sách； 予約する（よやくする）：đặt trước； 無料（むりょう）：miễn phí； 配達（はいたつ）：giao hàng； 市内（しない）：trong thành phố； 店頭（てんとう）：tại cửa hàng"
    },
    {
      p: "市内 の スポーツジム で は、入会金 が 5,000円、月会費 が 8,000円 です。3か月 まとめて 払う と、月会費 が 1か月分 無料 に なります。田中 さん は 来月 から 3か月間 通う こと に しました。入会金 と 3か月分 の 月会費 を 合わせて、田中 さん は いくら 払います か。",
      q: "田中 さん は 入会金 と 3か月分 の 月会費 を 合わせて、 いくら 払います か。",
      o: ["21,000円", "29,000円", "16,000円", "24,000円"],
      a: 0,
      calc: true,
      e: "入会金が5,000円、月会費が8,000円で、3か月まとめて払うと月会費が1か月分無料になる。",
      exp: "Tính: phí gia nhập 5,000 yên + phí tháng 8,000 yên × 2 tháng (đóng 3 tháng một lần thì được miễn 1 tháng, nên chỉ trả 2 tháng) = 5,000 + 16,000 = 21,000 yên nên đáp án 1 đúng. 29,000 yên là 5,000 + 8,000 × 3 (quên miễn 1 tháng); 16,000 yên là 8,000 × 2 (quên phí gia nhập); 24,000 yên là 8,000 × 3 (quên cả phí gia nhập lẫn ưu đãi).",
      voc: "スポーツジム：phòng tập thể thao； 入会金（にゅうかいきん）：phí gia nhập； 月会費（げつかいひ）：phí tháng； まとめて：gộp lại, một lần； 無料（むりょう）：miễn phí"
    },
    {
      p: "来月、市民 会館 で 写真展 が 開かれます。入場料 は 大人 500円、学生 300円 です。ただし、土曜日 は 誰 でも 無料 です。開館 時間 は 午前 9時 から 午後 5時 まで で、月曜日 は 休館 です。写真展 は 来月 の 1日 から 30日 まで 開かれて います。",
      q: "写真展 について、 正しい もの は どれ です か。",
      o: [
        "月曜日 も 午前 9時 から 入る こと が できる。",
        "学生 は 土曜日 でも 300円 払わなければ ならない。",
        "土曜日 は 誰 でも 無料 で 入る こと が できる。",
        "入場料 は 大人 も 学生 も 500円 である。"
      ],
      a: 2,
      e: "ただし、土曜日は誰でも無料ですと書かれている。",
      exp: "Bài viết nói thứ Bảy thì ai cũng được vào miễn phí nên đáp án 3 đúng. Đáp án 1 sai vì thứ Hai đóng cửa (休館); đáp án 2 sai vì thứ Bảy học sinh cũng miễn phí; đáp án 4 sai vì học sinh chỉ 300 yên, người lớn 500 yên.",
      voc: "市民会館（しみんかいかん）：nhà văn hóa thành phố； 写真展（しゃしんてん）：triển lãm ảnh； 入場料（にゅうじょうりょう）：vé vào cửa； 休館（きゅうかん）：đóng cửa (cơ sở)"
    },
    {
      p: "明日、台風 が 近づく ため、市内 の 小学校 は 休校 に なります。ただし、中学校 は 通常 通り 授業 が あります。市役所 は、川 の 近く に 住む 人 に 避難 の 準備 を する よう 呼びかけて います。避難所 は 市民 会館 と 中央 公民館 の 2か所 です。",
      q: "明日 について、 正しい もの は どれ です か。",
      o: [
        "市内 の 中学校 も 休校 に なる。",
        "市内 の 小学校 は 休校 に なる。",
        "避難所 は 市民 会館 だけ である。",
        "川 の 近く に 住む 人 は 避難 しなくても よい。"
      ],
      a: 1,
      e: "明日、台風が近づくため、市内の小学校は休校になりますと書かれている。",
      exp: "Bài viết nói ngày mai các trường tiểu học trong thành phố nghỉ học vì bão nên đáp án 2 đúng. Đáp án 1 sai vì trung học vẫn học bình thường; đáp án 3 sai vì nơi tránh nạn có 2 chỗ (市民会館 và 中央公民館); đáp án 4 sai vì chính quyền kêu gọi người sống gần sông chuẩn bị sơ tán.",
      voc: "台風（たいふう）：bão； 休校（きゅうこう）：nghỉ học (trường đóng cửa)； 通常通り（つうじょうどおり）：như thường lệ； 避難（ひなん）：sơ tán, tránh nạn； 呼びかける（よびかける）：kêu gọi"
    }
  ],
  readM: [
    {
      p: "日本では、毎年多くの食品が捨てられている。特にコンビニエンスストアでは、売れ残った弁当やおにぎりが大量に廃棄されている。ある調査によると、コンビニで捨てられる食品は年間で数十万トンにのぼるという。これに対して、最近では値引き販売やフードバンクへの寄付など、食品ロスを減らす取り組みが広がっている。値引きによって売れ残りを減らす店も増えた。しかし、値引きだけでは限界があり、作る量そのものを見直す必要があるという声もある。消費者の意識も変わりつつあり、賞味期限が近い商品を積極的に買う人も出てきた。食品ロスを減らすには、店と消費者の両方の協力が欠かせない。",
      qs: [
        {
          q: "この文章によると、コンビニの食品ロスについて正しいものはどれか。",
          o: ["売れ残った弁当などが大量に捨てられている。", "売れ残りはほとんど捨てられていない。", "食品ロスは年々減り続けている。", "コンビニでは食品を捨てない決まりがある。"],
          a: 0,
          e: "売れ残った弁当やおにぎりが大量に廃棄されている。"
        },
        {
          q: "食品ロスを減らすために実施されている取り組みとして、書かれていないものはどれか。",
          o: ["値引き販売", "フードバンクへの寄付", "作る量の見直し", "賞味期限の延長"],
          a: 3,
          e: "値引き販売やフードバンクへの寄付など、食品ロスを減らす取り組みが広がっている。"
        },
        {
          q: "筆者が最も言いたいことは何か。",
          o: ["食品ロスを減らすには、店と消費者の両方の協力が必要だ。", "値引き販売だけで食品ロスはなくなる。", "消費者は賞味期限を気にしなくてよい。", "コンビニは弁当を作るのをやめるべきだ。"],
          a: 0,
          e: "食品ロスを減らすには、店と消費者の両方の協力が欠かせない。"
        }
      ],
      exp: "Q1: bằng chứng 「売れ残った弁当やおにぎりが大量に廃棄されている」 nên đáp án 1 đúng; các đáp án còn lại trái với nội dung bài. Q2: câu hỏi hỏi về取り組み đang được実施 (đã triển khai): bài viết nói 値引き販売 và フードバンクへの寄付 '広がっている' (đang lan rộng, tức đã thực hiện); còn 作る量の見直し chỉ xuất hiện dưới dạng ý kiến '見直す必要があるという声もある' (có ý kiến cho rằng cần xem lại), chưa phải取り組み đang thực hiện; 賞味期限の延長 thì hoàn toàn không được nhắc đến nên đáp án 4 đúng. Q3: câu cuối 「食品ロスを減らすには、店と消費者の両方の協力が欠かせない」 là ý chính của tác giả; 値引きだけでは限界があると bài đã nói rõ nên đáp án 2 sai.",
      voc: "食品ロス（しょくひんロス）：lãng phí thực phẩm； 売れ残る（うれのこる）：ế, còn thừa không bán được； 廃棄する（はいきする）：vứt bỏ, tiêu hủy； 値引き販売（ねびきはんばい）：bán giảm giá； 寄付（きふ）：quyên góp, tặng； 賞味期限（しょうみきげん）：hạn sử dụng (ngon nhất)"
    },
    {
      p: "日本の地方では、人口の減少が進んでいる。若い人が仕事を求めて都市へ移るため、地方の町では高齢化が進み、学校や病院を維持することが難しくなっている。こうした中、移住者を呼び込む取り組みを始めた町もある。空き家を安く貸し出したり、子育て支援を充実させたりして、都市部からの移住を促している。移住した人の中には、農業や観光の仕事を始め、地域に新しい活気をもたらす人もいる。しかし、移住者が定着するには、仕事だけでなく、地域の人々とのつながりも大切だ。町の取り組みが成功するかどうかは、移住者を受け入れる地域の姿勢にかかっている。",
      qs: [
        {
          q: "地方の町が抱える問題として、文章に書かれているものはどれか。",
          o: ["都市の人口が減り続けている。", "学校や病院が増えすぎている。", "若い人が都市へ移り、高齢化が進んでいる。", "観光客がまったく来なくなった。"],
          a: 2,
          e: "若い人が仕事を求めて都市へ移るため、地方の町では高齢化が進み、学校や病院を維持することが難しくなっている。"
        },
        {
          q: "移住者を呼び込む取り組みとして、正しいものはどれか。",
          o: ["移住者に高い家賃を請求している。", "都市部への移住を促している。", "学校や病院を閉鎖している。", "空き家を安く貸し出したり、子育て支援を充実させたりしている。"],
          a: 3,
          e: "空き家を安く貸し出したり、子育て支援を充実させたりして、都市部からの移住を促している。"
        },
        {
          q: "筆者によると、移住者が定着するために大切なことは何か。",
          o: ["仕事だけでなく、地域の人々とのつながりも大切だ。", "仕事さえあれば十分である。", "地域の人々と関わらないことである。", "都市部とのつながりを保つことである。"],
          a: 0,
          e: "移住者が定着するには、仕事だけでなく、地域の人々とのつながりも大切だ。"
        }
      ],
      exp: "Q1: bằng chứng 「若い人が仕事を求めて都市へ移るため、地方の町では高齢化が進み」 nên đáp án 3 đúng; bài nói về dân số địa phương giảm chứ không phải dân số đô thị, và trường học/bệnh viện khó duy trì chứ không phải tăng quá nhiều. Q2: bằng chứng 「空き家を安く貸し出したり、子育て支援を充実させたりして」 nên đáp án 4 đúng; các đáp án khác ngược với nội dung bài. Q3: bằng chứng 「移住者が定着するには、仕事だけでなく、地域の人々とのつながりも大切だ」 nên đáp án 1 đúng; 'chỉ cần có việc làm là đủ' trái với '仕事だけでなく'.",
      voc: "人口減少（じんこうげんしょう）：giảm dân số； 高齢化（こうれいか）：già hóa； 移住者（いじゅうしゃ）：người di cư đến； 空き家（あきや）：nhà trống； 子育て支援（こそだてしえん）：hỗ trợ nuôi dạy con； 定着する（ていちゃくする）：bám rễ, ổn định lâu dài"
    },
    {
      p: "近年、電子書籍の利用者が増えている。スマートフォンやタブレットで手軽に読めることや、持ち運びが便利なことがその理由だ。一方で、紙の本を好む人も少なくない。紙の本は目が疲れにくく、書き込みがしやすいという利点がある。また、書店で本を手に取って選ぶ楽しみも、紙の本ならではのものだ。出版社の調査では、電子書籍と紙の本を使い分ける読者が増えているという。たとえば、移動中は電子書籍、自宅では紙の本というように、場面によって選んでいる。今後も、電子書籍と紙の本はそれぞれの良さを生かしながら共存していくと考えられる。",
      qs: [
        {
          q: "電子書籍の利用者が増えている理由として、文章に書かれているものはどれか。",
          o: ["手軽に読めて、持ち運びが便利だから。", "紙の本より安いから。", "書店でしか買えないから。", "目が疲れにくいから。"],
          a: 0,
          e: "スマートフォンやタブレットで手軽に読めることや、持ち運びが便利なことがその理由だ。"
        },
        {
          q: "紙の本の利点として、文章に書かれていないものはどれか。",
          o: ["目が疲れにくい。", "書き込みがしやすい。", "書店で選ぶ楽しみがある。", "持ち運びが便利である。"],
          a: 3,
          e: "紙の本は目が疲れにくく、書き込みがしやすいという利点がある。書店で本を手に取って選ぶ楽しみも、紙の本ならではのものだ。"
        },
        {
          q: "出版社の調査によると、読者の傾向はどうなっているか。",
          o: ["電子書籍と紙の本を使い分ける読者が増えている。", "ほとんどの読者が紙の本だけを読む。", "電子書籍だけを読む読者が大半である。", "読書をする人が減り続けている。"],
          a: 0,
          e: "電子書籍と紙の本を使い分ける読者が増えているという。"
        }
      ],
      exp: "Q1: bằng chứng 「スマートフォンやタブレットで手軽に読めることや、持ち運びが便利なことがその理由だ」 nên đáp án 1 đúng; giá rẻ và 'chỉ mua được ở hiệu sách' không được nhắc đến; 'mắt ít mỏi' là ưu điểm của sách giấy chứ không phải sách điện tử. Q2: bài nêu 3 ưu điểm của sách giấy là 目が疲れにくい, 書き込みがしやすい, 書店で選ぶ楽しみ; 持ち運びが便利 là ưu điểm của sách điện tử nên đáp án 4 là thứ 'không được viết'. Q3: bằng chứng 「電子書籍と紙の本を使い分ける読者が増えている」 nên đáp án 1 đúng.",
      voc: "電子書籍（でんししょせき）：sách điện tử； 手軽に（てがるに）：một cách tiện lợi, dễ dàng； 持ち運び（もちはこび）：mang theo； 書き込み（かきこみ）：ghi chú vào sách； 使い分ける（つかいわける）：dùng linh hoạt tùy trường hợp； 共存する（きょうぞんする）：cùng tồn tại"
    }
  ],
  readL: [
    {
      p: "人工知能の発達によって、仕事のあり方が大きく変わろうとしている。事務作業やデータの整理など、これまで人が行ってきた仕事の一部は、すでに人工知能に置き換えられつつある。こうした変化に対して、仕事が奪われるのではないかという不安の声も聞かれる。しかし、歴史を振り返ると、新しい技術が登場するたびに、古い仕事がなくなる一方で、新しい仕事が生まれてきた。たとえば、自動車が普及したとき、馬車の仕事は減ったが、自動車の製造や修理、道路の整備といった新しい仕事が生まれた。人工知能についても同じことが言えるだろう。大切なのは、技術の変化を恐れるのではなく、変化に対応する力を身につけることだ。企業には社員の学び直しを支援する役割があり、個人にも新しい技術を学ぶ姿勢が求められる。学校教育においても、知識を覚えることだけでなく、考える力や創造する力を育てることがますます重要になっている。人工知能が得意な計算や情報の処理は機械に任せ、人は人にしかできない判断や発想に力を注ぐ。そうした役割分担が進むことで、仕事はより創造的なものになっていくだろう。技術の進歩は脅威ではなく、よりよい働き方を実現する機会である。",
      qs: [
        {
          q: "人工知能の発達について、筆者はどう考えているか。",
          o: ["仕事が奪われる不安はあるが、新しい仕事も生まれ、変化に対応する力を身につけることが大切だ。", "人工知能によってすべての仕事がなくなる。", "人工知能の発達は止めるべきである。", "仕事のあり方はまったく変わらない。"],
          a: 0,
          e: "新しい技術が登場するたびに、古い仕事がなくなる一方で、新しい仕事が生まれてきた。大切なのは、技術の変化を恐れるのではなく、変化に対応する力を身につけることだ。"
        },
        {
          q: "自動車の例が挙げられているのはなぜか。",
          o: ["自動車の製造が大切であることを示すため。", "新しい技術が古い仕事をなくす一方で、新しい仕事を生むことを示すため。", "馬車の仕事が復活することを示すため。", "道路の整備が遅れていることを示すため。"],
          a: 1,
          e: "自動車が普及したとき、馬車の仕事は減ったが、自動車の製造や修理、道路の整備といった新しい仕事が生まれた。"
        },
        {
          q: "企業や個人に求められることとして、文章に書かれているものはどれか。",
          o: ["企業は人工知能の導入をやめること。", "個人は仕事を変えないこと。", "企業は社員の学び直しを支援し、個人は新しい技術を学ぶ姿勢を持つこと。", "企業は社員を減らすこと。"],
          a: 2,
          e: "企業には社員の学び直しを支援する役割があり、個人にも新しい技術を学ぶ姿勢が求められる。"
        },
        {
          q: "筆者によると、これからの仕事はどうなっていくか。",
          o: ["人は計算や情報処理に集中すべきである。", "人工知能と人は同じ仕事をすることになる。", "創造的な仕事はすべてなくなる。", "人工知能に計算や情報処理を任せ、人は判断や発想に力を注ぐことで、より創造的になる。"],
          a: 3,
          e: "人工知能が得意な計算や情報の処理は機械に任せ、人は人にしかできない判断や発想に力を注ぐ。仕事はより創造的なものになっていくだろう。"
        }
      ],
      exp: "Q1: tác giả thừa nhận nỗi lo mất việc nhưng cho rằng công nghệ mới vừa làm mất việc cũ vừa tạo việc mới, và điều quan trọng là rèn năng lực thích ứng — bằng chứng 「新しい技術が登場するたびに、古い仕事がなくなる一方で、新しい仕事が生まれてきた」「大切なのは、技術の変化を恐れるのではなく、変化に対応する力を身につけることだ」. Q2: ví dụ ô tô minh họa đúng quy luật đó: việc xe ngựa giảm nhưng việc sản xuất, sửa chữa ô tô và làm đường ra đời. Q3: bằng chứng 「企業には社員の学び直しを支援する役割があり、個人にも新しい技術を学ぶ姿勢が求められる」. Q4: bằng chứng 「人工知能が得意な計算や情報の処理は機械に任せ、人は人にしかできない判断や発想に力を注ぐ」「仕事はより創造的なものになっていくだろう」.",
      voc: "人工知能（じんこうちのう）：trí tuệ nhân tạo； 事務作業（じむさぎょう）：công việc văn phòng； 置き換える（おきかえる）：thay thế； 普及する（ふきゅうする）：phổ biến； 学び直し（まなびなおし）：học lại, đào tạo lại； 役割分担（やくわりぶんたん）：phân công vai trò； 脅威（きょうい）：mối đe dọa"
    }
  ],
  tougou: [
    {
      p1: "大学の授業料を無償化すべきだという意見がある。家庭の経済状況によって進学をあきらめる若者がいるのは不公平であり、能力のある人が学ぶ機会を失うのは社会全体の損失だ。教育への投資は将来の税収の増加につながるため、無償化にかかる費用は長い目で見れば回収できる。すべての若者に平等な教育の機会を与えることは、社会の発展に欠かせない。",
      p2: "一方、大学の授業料の無償化には反対だという意見もある。無償化には多額の税金が必要であり、その負担は国民全体に及ぶ。学ぶ意欲のない学生まで大学に進むことになれば、教育の質が低下するおそれもある。支援が必要な学生には奨学金を充実させるべきであり、一律の無償化は適切ではない。",
      qs: [
        {
          q: "賛成の意見として、文章Aに書かれているものはどれか。",
          o: ["家庭の経済状況で進学をあきらめるのは不公平で、社会全体の損失だ。", "無償化には多額の税金が必要だ。", "学ぶ意欲のない学生が増える。", "奨学金を充実させるべきだ。"],
          a: 0,
          e: "家庭の経済状況によって進学をあきらめる若者がいるのは不公平であり、能力のある人が学ぶ機会を失うのは社会全体の損失だ。"
        },
        {
          q: "反対の意見として、文章Bに書かれているものはどれか。",
          o: ["無償化には多額の税金が必要で、国民全体に負担が及ぶ。", "教育への投資は将来の税収の増加につながる。", "すべての若者に平等な教育の機会を与えるべきだ。", "無償化の費用は長い目で見れば回収できる。"],
          a: 0,
          e: "無償化には多額の税金が必要であり、その負担は国民全体に及ぶ。"
        },
        {
          q: "二つの文章に共通している点はどれか。",
          o: ["大学教育について、費用の負担のあり方が議論されている。", "無償化がすぐに実現すべきだと両方とも主張している。", "奨学金は不要だと両方とも考えている。", "大学の数を減らすべきだと両方とも考えている。"],
          a: 0,
          e: "大学の授業料を無償化すべきだという意見がある。大学の授業料の無償化には反対だという意見もある。"
        }
      ],
      exp: "Q1: bằng chứng trong bài A 「家庭の経済状況によって進学をあきらめる若者がいるのは不公平であり、能力のある人が学ぶ機会を失うのは社会全体の損失だ」; các đáp án 2, 3, 4 đều thuộc bài B (phản đối). Q2: bằng chứng trong bài B 「無償化には多額の税金が必要であり、その負担は国民全体に及ぶ」; các đáp án 2, 3, 4 đều thuộc bài A (ủng hộ). Q3: điểm chung là cả hai bài đều bàn về cách gánh chi phí giáo dục đại học (ủng hộ hay phản đối miễn phí học phí); bài B không hề nói học bổng là không cần thiết (ngược lại, bài B muốn tăng cường học bổng) và không bài nào đòi giảm số trường đại học.",
      voc: "授業料（じゅぎょうりょう）：học phí； 無償化（むしょうか）：miễn phí hóa； 進学（しんがく）：học lên (đại học)； 不公平（ふこうへい）：không công bằng； 税収（ぜいしゅう）：thuế thu được； 奨学金（しょうがくきん）：học bổng； 一律（いちりつ）：đồng loạt, áp dụng chung"
    }
  ],
  shuchou: [
    {
      p: "スマートフォンは私たちの生活を便利にしたが、その一方で集中力を奪っていると私は考える。仕事中にスマートフォンの通知が鳴るたびに、人は作業を中断し、注意をそらされる。研究によると、一度中断された集中力を取り戻すには20分以上かかるという。通知を確認するだけでも、集中力は大きく損なわれる。もちろん、スマートフォン自体が悪いわけではない。連絡や情報の収集に欠かせない道具であり、使い方次第では仕事の効率を高めることもできる。問題なのは、必要のない通知まで受け取り、ついスマートフォンを見てしまう習慣だ。集中力を保つためには、仕事中は通知を切る、スマートフォンを別の部屋に置くといった工夫が必要だ。さらに大切なのは、スマートフォンに頼らずに考える時間を持つことだ。考える力を育てるには、静かな時間の中で一人で向き合うことが欠かせない。たとえば、食事中にスマートフォンを手放せない人も多く、家族との会話が減っているという調査もある。スマートフォンに気を取られていては、目の前の人との時間を大切にすることはできない。便利さだけを追い求めれば、私たちは考える力を失ってしまう。スマートフォンと上手に付き合い、集中できる時間を守ることこそ、これからの時代に求められる力である。",
      qs: [
        {
          q: "筆者の主張として、最も適切なものはどれか。",
          o: ["スマートフォンと上手に付き合い、集中できる時間を守ることが大切だ。", "スマートフォンは使うべきではない。", "通知はすべて切るべきだ。", "考える時間は必要ない。"],
          a: 0,
          e: "スマートフォンと上手に付き合い、集中できる時間を守ることこそ、これからの時代に求められる力である。"
        },
        {
          q: "筆者によると、集中力が損なわれるのはなぜか。",
          o: ["スマートフォンの画面が明るいから。", "仕事が難しすぎるから。", "通知が鳴るたびに作業が中断され、集中力を取り戻すのに時間がかかるから。", "通知がまったく来ないから。"],
          a: 2,
          e: "仕事中にスマートフォンの通知が鳴るたびに、人は作業を中断し、注意をそらされる。一度中断された集中力を取り戻すには20分以上かかるという。"
        },
        {
          q: "集中力を保つための工夫として、筆者が挙げているものはどれか。",
          o: ["スマートフォンを常に手元に置くこと。", "仕事中は通知を切り、スマートフォンを別の部屋に置くこと。", "通知をすべて受け取ること。", "仕事中にスマートフォンで動画を見ること。"],
          a: 1,
          e: "仕事中は通知を切る、スマートフォンを別の部屋に置くといった工夫が必要だ。"
        },
        {
          q: "筆者によると、考える力を育てるために大切なことは何か。",
          o: ["スマートフォンで情報を集めること。", "静かな時間を避けること。", "考えることをやめること。", "スマートフォンに頼らずに考える時間を持つこと。"],
          a: 3,
          e: "スマートフォンに頼らずに考える時間を持つことだ。静かな時間の中で一人で向き合うことが欠かせない。"
        }
      ],
      exp: "Q1 (主張): câu kết 「スマートフォンと上手に付き合い、集中できる時間を守ることこそ、これからの時代に求められる力である」 là主張 của tác giả; tác giả không nói 'không nên dùng smartphone' mà nói smartphone tự nó không xấu. Q2: bằng chứng 「仕事中にスマートフォンの通知が鳴るたびに、人は作業を中断し、注意をそらされる」「一度中断された集中力を取り戻すには20分以上かかる」. Q3: bằng chứng 「仕事中は通知を切る、スマートフォンを別の部屋に置くといった工夫が必要だ」; các đáp án khác ngược với lời khuyên. Q4: bằng chứng 「スマートフォンに頼らずに考える時間を持つことだ」「静かな時間の中で一人で向き合うことが欠かせない」.",
      voc: "集中力（しゅうちゅうりょく）：khả năng tập trung； 通知（つうち）：thông báo； 中断する（ちゅうだんする）：gián đoạn； 取り戻す（とりもどす）：lấy lại； 損なわれる（そこなわれる）：bị tổn hại, bị suy giảm； 工夫（くふう）：mẹo, cách khéo léo； 向き合う（むきあう）：đối mặt, tập trung vào"
    }
  ],
  info: [
    {
      tpl: "<b>A スポーツジムのクラス表</b><br><table class=\"jl-tbl\"><tr><th>クラス</th><th>曜日</th><th>時間</th></tr><tr><td>ヨガ</td><td>月曜日と木曜日</td><td>10時〜11時</td></tr><tr><td>水泳</td><td>火曜日と金曜日</td><td>14時〜15時</td></tr><tr><td>ダンス</td><td>水曜日と土曜日</td><td>18時〜19時</td></tr></table><b>B カレンダー（11月）</b><br><table class=\"jl-cal\"><tr><th>月</th><th>火</th><th>水</th><th>木</th><th>金</th><th>土</th><th>日</th></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td><td>1</td></tr><tr><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td></tr><tr><td>9</td><td>10</td><td>11</td><td>12</td><td>13</td><td>14</td><td>15</td></tr><tr><td>16</td><td>17</td><td>18</td><td>19</td><td>20</td><td>21</td><td>22</td></tr><tr><td>23</td><td>24</td><td>25</td><td>26</td><td>27</td><td>28</td><td>29</td></tr><tr><td>30</td><td></td><td></td><td></td><td></td><td></td><td></td></tr></table>",
      inst: "つぎのA「スポーツジムのクラス表」とBのカレンダーを見て、質問に答えてください。答えは1・2・3・4から、いちばんいいものを一つえらんでください。",
      q: "今日は11月5日（木曜日）です。今日のヨガのクラスには参加できませんでした。ヨガのクラスに次に参加できるのは何日ですか。",
      opts: ["11月9日", "11月12日", "11月6日", "11月16日"],
      ans: 0,
      exp: "Bảng A cho biết lớp yoga học vào thứ Hai và thứ Năm. Hôm nay là thứ Năm (5/11) nhưng đã lỡ lớp hôm nay, nên buổi tiếp theo là thứ Hai sau đó. Tra lịch B: thứ Hai sau ngày 5/11 là ngày 9/11 nên đáp án 1 đúng. 12/11 là thứ Năm tuần sau (không phải buổi gần nhất); 6/11 là thứ Sáu, không có lớp yoga; 16/11 là thứ Hai tuần sau nữa.",
      voc: "スポーツジム：phòng tập thể thao； ヨガ：yoga； 水泳（すいえい）：bơi lội； ダンス：khiêu vũ, nhảy； 参加する（さんかする）：tham gia"
    },
    {
      tpl: "<b>A 料理教室の申し込み</b><br>料理教室は毎月第3土曜日に開かれます。参加費は3,000円です。申し込みは開催日の1週間前までです。申し込みは電話かインターネットでできます。<br><table class=\"jl-tbl\"><tr><th>月</th><th>開催日</th></tr><tr><td>11月</td><td>11月21日（土曜日）</td></tr><tr><td>12月</td><td>12月19日（土曜日）</td></tr></table><b>B カレンダー（11月）</b><br><table class=\"jl-cal\"><tr><th>月</th><th>火</th><th>水</th><th>木</th><th>金</th><th>土</th><th>日</th></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td><td>1</td></tr><tr><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td></tr><tr><td>9</td><td>10</td><td>11</td><td>12</td><td>13</td><td>14</td><td>15</td></tr><tr><td>16</td><td>17</td><td>18</td><td>19</td><td>20</td><td>21</td><td>22</td></tr><tr><td>23</td><td>24</td><td>25</td><td>26</td><td>27</td><td>28</td><td>29</td></tr><tr><td>30</td><td></td><td></td><td></td><td></td><td></td><td></td></tr></table>",
      inst: "つぎのA「料理教室の申し込み」とBのカレンダーを見て、質問に答えてください。答えは1・2・3・4から、いちばんいいものを一つえらんでください。",
      q: "今日は11月10日（火曜日）です。11月の料理教室に参加したいです。どうすればいいですか。",
      opts: ["11月14日までに申し込めば、参加できる。", "もう申し込むことはできない。", "11月20日までに申し込めば、参加できる。", "当日申し込めば、参加できる。"],
      ans: 0,
      exp: "Bảng A cho biết lớp học nấu ăn tháng 11 tổ chức ngày 21/11 (thứ Bảy, thứ Bảy thứ 3 của tháng) và phải đăng ký trước 1 tuần, tức là trước ngày 14/11. Hôm nay là 10/11, vẫn còn trước hạn nên đăng ký trước ngày 14/11 là tham gia được — đáp án 1 đúng. Đáp án 2 sai vì chưa quá hạn; đáp án 3 sai vì 20/11 đã quá hạn 1 tuần; đáp án 4 sai vì không nhận đăng ký trong ngày.",
      voc: "料理教室（りょうりきょうしつ）：lớp học nấu ăn； 申し込み（もうしこみ）：đăng ký； 開催日（かいさいび）：ngày tổ chức； 参加費（さんかひ）：phí tham gia； インターネット：internet"
    }
  ]
};

window.WRITTEN_N1_SETS = {"1": window.WRITTEN_N1_SET1, "2": window.WRITTEN_N1_SET2, "3": window.WRITTEN_N1_SET3, "4": window.WRITTEN_N1_SET4, "5": window.WRITTEN_N1_SET5, "6": window.WRITTEN_N1_SET6, "7": window.WRITTEN_N1_SET7, "8": window.WRITTEN_N1_SET8, "9": window.WRITTEN_N1_SET9};
