const tarotData = [
  {
    id: 1,
    name: "魔術師",
    image: "/CardsImages/m01.jpg",
    negative: "聰明反被聰明誤, 說謊欺騙, 準備不夠充足",
    key: "創造力, 溝通能力佳, 萬事具備",
    positive: "準備充足, 想法靈活, 口才溝通順暢",
    reversed: false
  },
  {
    id: 2,
    name: "女祭司",
    image: "/CardsImages/m02.jpg",
    negative: "情緒起伏大, 表裡不一, 冷戰, 有偏見",
    key: "傾聽直覺, 保守理性, 智慧",
    positive: "被動冷靜的, 豐富的知識, 保守理性, 穩定的",
    reversed: false
  },
  {
    id: 3,
    name: "皇后",
    image: "/CardsImages/m03.jpg",
    negative: "奢侈浪費, 怠惰停滯, 濫情, 猶豫不決",
    key: "豐收, 母親＆母愛, 藝術＆美",
    positive: "重視享受, 豐收成果, 充滿愛, 愛打扮, 懷孕的可能",
    reversed: false
  },
  {
    id: 4,
    name: "國王",
    image: "/CardsImages/m04.jpg",
    negative: "能力不足, 掌控慾強, 有衝突, 固執",
    key: "權力, 秩序, 父親",
    positive: "理性務實, 嚴肅內向, 有野心, 穩定的狀態",
    reversed: false
  },
  {
    id: 5,
    name: "教皇",
    image: "/CardsImages/m05.jpg",
    negative: "意志力不堅定, 繁雜的規則, 過於保守",
    key: "宗教, 教育, 儀式",
    positive: "獲得額外的支援, 靈性成長, 認真保守, 相親聯誼等活動",
    reversed: false
  },
  {
    id: 6,
    name: "戀人",
    image: "/CardsImages/m06.jpg",
    negative: "猶豫不決, 沈溺於眼前的快樂, 見異思遷",
    key: "選擇, 愛情, 結合",
    positive: "墜入愛河, 順利合作, 愉快",
    reversed: false
  },
  {
    id: 7,
    name: "戰車",
    image: "/CardsImages/m07.jpg",
    negative: "落敗, 魯莽, 半途而廢",
    key: "勝利, 競爭, 交通",
    positive: "獲得勝利, 企圖心強, 遇到挑戰",
    reversed: false
  },
  {
    id: 8,
    name: "力量",
    image: "/CardsImages/m08.jpg",
    negative: "以自我為中心, 消極, 內心十分脆弱",
    key: "以柔克剛, 勇氣, 強韌",
    positive: "有勇氣去面對挑戰, 互相配合, 具有英雄特質",
    reversed: false
  },
  {
    id: 9,
    name: "隱者",
    image: "/CardsImages/m09.jpg",
    negative: "過於挑剔, 膽小被動, 孤僻",
    key: "內省, 孤獨, 謹慎",
    positive: "經驗豐富的智者, 已達到目前事業的高峰",
    reversed: false
  },
  {
    id: 10,
    name: "命運之輪",
    image: "/CardsImages/m10.jpg",
    negative: "怨天尤人, 面對極大的變化卻不知道如何處理",
    key: "轉變, 契機, 幸運",
    positive: "正往好的方向發展, 命中注定",
    reversed: false
  },
  {
    id: 11,
    name: "正義",
    image: "/CardsImages/m11.jpg",
    negative: "不公平的結果或待遇, 主觀意識過強, 失衡",
    key: "法律, 正義, 平衡",
    positive: "公平的結果, 重視條文與規則",
    reversed: false
  },
  {
    id: 12,
    name: "吊人",
    image: "/CardsImages/m12.jpg",
    negative: "過度的付出, 過於逆來順受",
    key: "犧牲, 換位思考, 等待",
    positive: "換位思考, 遇到困局",
    reversed: false
  },
  {
    id: 13,
    name: "死神",
    image: "/CardsImages/m13.jpg",
    negative: "無能為力, 被迫接受",
    key: "結束, 轉變, 新生",
    positive: "遇到重大變故, 某件事情的結束",
    reversed: false
  },
  {
    id: 14,
    name: "節制",
    image: "/CardsImages/m14.jpg",
    negative: "難以與他人合作, 溝通不良",
    key: "中庸, 調和, 溝通",
    positive: "良好的生活習慣, 擅長溝通與協調",
    reversed: false
  },
  {
    id: 15,
    name: "惡魔",
    image: "/CardsImages/m15.jpg",
    negative: "受到誘惑, 為了獲得物質而不擇手段",
    key: "慾望, 束縛, 物質主義",
    positive: "使用了不正當的方法, 過於重視物質層面",
    reversed: false
  },
  {
    id: 16,
    name: "塔",
    image: "/CardsImages/m16.jpg",
    negative: "無法接受目前所遭受到的傷害, 擔心害怕",
    key: "驟變, 災難, 破壞",
    positive: "遇到重大意外, 極大的破壞與挫敗",
    reversed: false
  },
  {
    id: 17,
    name: "星星",
    image: "/CardsImages/m17.jpg",
    negative: "過度理想化, 不切實際, 不明確的目標",
    key: "希望, 寧靜, 和平",
    positive: "充滿希望, 有明確的目標, 自由且樂於分享",
    reversed: false
  },
  {
    id: 18,
    name: "月亮",
    image: "/CardsImages/m18.jpg",
    negative: "情緒不穩, 缺乏安全感, 容易緊張",
    key: "不安, 恐懼, 隱藏的敵人",
    positive: "正面臨很大的風險且不確定很高的狀況, 小心隱藏的敵人",
    reversed: false
  },
  {
    id: 19,
    name: "太陽",
    image: "/CardsImages/m19.jpg",
    negative: "小成功, 熱情且衝動, 發展順利",
    key: "成功, 快樂, 自由",
    positive: "巨大的成功, 滿意的成果, 愉快且充滿熱情",
    reversed: false
  },
  {
    id: 20,
    name: "審判",
    image: "/CardsImages/m20.jpg",
    negative: "優柔寡斷, 缺乏判斷力, 正在面對重大的變化",
    key: "召喚, 因果業力, 決定",
    positive: "遇到需要下重大決定的時候, 行事果斷的人",
    reversed: false
  },
  {
    id: 21,
    name: "世界",
    image: "/CardsImages/m21.jpg",
    negative: "停滯期, 不知變通, 感到無趣或平淡",
    key: "完成, 完整, 旅行",
    positive: "完成階段性的任務, 美滿和樂",
    reversed: false
  },
  {
    id: 22,
    name: "愚人",
    image: "/CardsImages/m00.jpg",
    negative: "只活在自己的世界, 無法控制自己的情緒",
    key: "冒險, 大膽, 天真",
    positive: "特立獨行, 沒有任何規劃, 今朝有酒今朝醉",
    reversed: false
  },
  {
    id: 23,
    name: "權杖一",
    image: "/CardsImages/w01.jpg",
    negative: "充滿挑戰的, 無法完全掌握",
    key: "新的行動, 創造, 機會",
    positive: "新的事物或挑戰, 面臨到新的狀態",
    reversed: false
  },
  {
    id: 24,
    name: "權杖二",
    image: "/CardsImages/w02.jpg",
    negative: "遇到問題需要進一步解決, 遇到一些變化",
    key: "計畫, 決定, 兩難",
    positive: "兩難的局面, 遇到需要抉擇的事物",
    reversed: false
  },
  {
    id: 25,
    name: "權杖三",
    image: "/CardsImages/w03.jpg",
    negative: "正在克服困難中, 準備東山再起",
    key: "合作, 探索, 成就",
    positive: "已有初步的成果, 有合作的可能, 穩固的基礎",
    reversed: false
  },
  {
    id: 26,
    name: "權杖四",
    image: "/CardsImages/w04.jpg",
    negative: "較保守, 各方面呈現穩定的狀態",
    key: "穩固, 慶祝, 和諧",
    positive: "已有不錯的成果, 狀態十分穩定",
    reversed: false
  },
  {
    id: 27,
    name: "權杖五",
    image: "/CardsImages/w05.jpg",
    negative: "內部爭鬥不斷, 爾虞我詐",
    key: "衝突, 混亂, 競爭",
    positive: "衝突與鬥爭, 遇到困難, 事情一團糟",
    reversed: false
  },
  {
    id: 28,
    name: "權杖六",
    image: "/CardsImages/w06.jpg",
    negative: "遇到難以克服的挑戰, 無人支持",
    key: "勝利, 自豪, 好消息",
    positive: "有領導才能, 獲得眾人的肯定, 凱旋歸來",
    reversed: false
  },
  {
    id: 29,
    name: "權杖七",
    image: "/CardsImages/w07.jpg",
    negative: "受到很多外在因素干擾, 處於較弱勢的一方",
    key: "挑戰, 奮鬥, 有利的位置",
    positive: "遇到很多挑戰, 辛苦艱難, 處於有利的位置",
    reversed: false
  },
  {
    id: 30,
    name: "權杖八",
    image: "/CardsImages/w08.jpg",
    negative: "嚴重的爭吵, 遇到很多問題",
    key: "迅速發展, 消息, 旅行",
    positive: "非常忙碌的時候, 事情發展的很迅速, 明確的目標",
    reversed: false
  },
  {
    id: 31,
    name: "權杖九",
    image: "/CardsImages/w09.jpg",
    negative: "遇到很多障礙, 受到別人的抵制",
    key: "防禦, 等待, 戒備",
    positive: "遇到頻頸, 僵持不下的狀況, 防衛心強的",
    reversed: false
  },
  {
    id: 32,
    name: "權杖十",
    image: "/CardsImages/w10.jpg",
    negative: "過勞, 遇到困難",
    key: "壓力, 責任, 疲憊",
    positive: "非常繁忙, 壓力很大, 一人包辦所有事情",
    reversed: false
  },
  {
    id: 33,
    name: "權杖侍者",
    image: "/CardsImages/w11.jpg",
    negative: "三分鐘熱度, 不成熟, 不會規劃",
    key: "天真, 熱忱, 活潑",
    positive: "赤子之心, 樂於學習, 經驗不豐富",
    reversed: false
  },
  {
    id: 34,
    name: "權杖騎士",
    image: "/CardsImages/w12.jpg",
    negative: "心直口快, 行為激烈, 事情失控",
    key: "行動派, 熱情衝動, 積極",
    positive: "主動積極, 精神飽滿, 遇到挑戰",
    reversed: false
  },
  {
    id: 35,
    name: "權杖皇后",
    image: "/CardsImages/w13.jpg",
    negative: "較強勢, 喜歡主導一切, 過於隨性",
    key: "親切慷慨, 強韌, 靈感",
    positive: "親切熱情, 有責任感, 表現直接",
    reversed: false
  },
  {
    id: 36,
    name: "權杖國王",
    image: "/CardsImages/w14.jpg",
    negative: "主觀意識強, 不容易接受他人意見",
    key: "領袖魅力, 衝勁, 創造力",
    positive: "誠實友善, 經驗豐富, 穩定的狀態",
    reversed: false
  },
  {
    id: 37,
    name: "聖杯一",
    image: "/CardsImages/c01.jpg",
    negative: "突然發生改變, 遇到新的變化",
    key: "感受, 喜悅, 充滿希望",
    positive: "享受目前的狀態, 開心愉快的事物到來, 新的靈感",
    reversed: false
  },
  {
    id: 38,
    name: "聖杯二",
    image: "/CardsImages/c02.jpg",
    negative: "不對等的關係, 失去自己的立場,",
    key: "合作, 結合, 平等關係",
    positive: "對等的關係, 合作順利, 和諧的狀態",
    reversed: false
  },
  {
    id: 39,
    name: "聖杯三",
    image: "/CardsImages/c03.jpg",
    negative: "驗收成果的時候",
    key: "宴會, 團體, 慶祝",
    positive: "慶祝成果, 氣氛歡樂, 互相合作",
    reversed: false
  },
  {
    id: 40,
    name: "聖杯四",
    image: "/CardsImages/c04.jpg",
    negative: "可能遇到重大的變化, 一個新的契機出現",
    key: "不滿足, 倦怠, 退縮",
    positive: "休息期, 需要沉澱與思考, 不滿意現狀",
    reversed: false
  },
  {
    id: 41,
    name: "聖杯五",
    image: "/CardsImages/c05.jpg",
    negative: "束手無策的問題接踵而來, 無法補救已失去的事物",
    key: "失落, 悲傷, 自怨自艾",
    positive: "強烈的失落感, 因為失去而沮喪難過",
    reversed: false
  },
  {
    id: 42,
    name: "聖杯六",
    image: "/CardsImages/c06.jpg",
    negative: "遇到一些新的變化, 邁向新的階段",
    key: "回憶, 照顧, 禮物",
    positive: "穩定且一成不變, 付出不求回報",
    reversed: false
  },
  {
    id: 43,
    name: "聖杯七",
    image: "/CardsImages/c07.jpg",
    negative: "需要解決各種疑難雜症, 不穩定",
    key: "迷惘, 白日夢, 癮症",
    positive: "不切實際的理想, 把事情想得過於美好",
    reversed: false
  },
  {
    id: 44,
    name: "聖杯八",
    image: "/CardsImages/c08.jpg",
    negative: "遇到轉捩點, 準備進入新的階段",
    key: "不滿足, 行動, 轉變",
    positive: "對於現狀不滿意, 想要追尋自己的理想",
    reversed: false
  },
  {
    id: 45,
    name: "聖杯九",
    image: "/CardsImages/c09.jpg",
    negative: "過度追求完美, 固執己見, 自己為是",
    key: "享受, 喜悅, 滿足感",
    positive: "表現良好, 以自己的成就為傲, 滿意",
    reversed: false
  },
  {
    id: 46,
    name: "聖杯十",
    image: "/CardsImages/c10.jpg",
    negative: "過於理想化, 檯面下仍有許多問題",
    key: "和諧, 家庭, 幸福",
    positive: "溫馨和諧, 完美的",
    reversed: false
  },
  {
    id: 47,
    name: "聖杯侍者",
    image: "/CardsImages/c11.jpg",
    negative: "感情用事, 喜歡空想, 沒有實際執行",
    key: "好奇心重, 想像力豐富, 敏感細心",
    positive: "有強烈的好奇心, 處於一個新的階段",
    reversed: false
  },
  {
    id: 48,
    name: "聖杯騎士",
    image: "/CardsImages/c12.jpg",
    negative: "只做表面功夫, 浪漫多情",
    key: "浪漫且熱情, 富有理想, 思想敏銳",
    positive: "善於溝通與他人交流, 執行力較弱",
    reversed: false
  },
  {
    id: 49,
    name: "聖杯皇后",
    image: "/CardsImages/c13.jpg",
    negative: "較為情緒化, 見異思遷, 只憑感覺做事",
    key: "體貼慈悲, 情緒敏銳",
    positive: "心思敏銳, 溫柔浪漫, 富有同理心",
    reversed: false
  },
  {
    id: 50,
    name: "聖杯國王",
    image: "/CardsImages/c14.jpg",
    negative: "眼高手低, 缺乏安全感, 金玉其外敗絮其中",
    key: "溫和寬容, 成熟睿智",
    positive: "慈悲寬容, 有責任感",
    reversed: false
  },
  {
    id: 51,
    name: "寶劍一",
    image: "/CardsImages/s01.jpg",
    negative: "面臨很大的困難或危機",
    key: "新挑戰, 主動出擊, 決心",
    positive: "全新的挑戰, 一個新的機會",
    reversed: false
  },
  {
    id: 52,
    name: "寶劍二",
    image: "/CardsImages/s02.jpg",
    negative: "陷入兩難, 逃避問題, 被背叛",
    key: "逃避, 僵局, 抗拒",
    positive: "陷入僵局, 防衛心很重, 產生對立",
    reversed: false
  },
  {
    id: 53,
    name: "寶劍三",
    image: "/CardsImages/s03.jpg",
    negative: "處於一個混亂的狀態, 悲傷的情緒減緩",
    key: "悲傷, 失落, 傷心難過",
    positive: "遇到讓人傷心難過的事情, 感到失望",
    reversed: false
  },
  {
    id: 54,
    name: "寶劍四",
    image: "/CardsImages/s04.jpg",
    negative: "休息完畢準備重新回來原來的崗位",
    key: "休息, 充電期, 沈思",
    positive: "休息充電的時期, 恢復平靜",
    reversed: false
  },
  {
    id: 55,
    name: "寶劍五",
    image: "/CardsImages/s05.jpg",
    negative: "遇到嚴重的挫敗, 處於劣勢, 失敗",
    key: "鬥爭, 無謂的勝利",
    positive: "激烈的鬥爭, 爭吵, 互相競爭",
    reversed: false
  },
  {
    id: 56,
    name: "寶劍六",
    image: "/CardsImages/s06.jpg",
    negative: "脫離困難, 捲入麻煩之中",
    key: "療傷, 旅行, 漸漸好起來",
    positive: "度過難關中, 正在撫平傷痛",
    reversed: false
  },
  {
    id: 57,
    name: "寶劍七",
    image: "/CardsImages/s07.jpg",
    negative: "聰明反被聰明誤, 東窗事發",
    key: "東窗事發, 欺騙",
    positive: "暗地執行一些事情, 隱瞞或欺騙",
    reversed: false
  },
  {
    id: 58,
    name: "寶劍八",
    image: "/CardsImages/s08.jpg",
    negative: "孤立無援, 出現許多問題",
    key: "畫地自限, 被孤立, 外界壓力",
    positive: "受到限制, 來自外在的壓力, 無法認清現實",
    reversed: false
  },
  {
    id: 59,
    name: "寶劍九",
    image: "/CardsImages/s09.jpg",
    negative: "擔心害怕, 無法信任他人",
    key: "失眠, 壓力, 夢靨",
    positive: "感到沮喪和絕望, 壓力大, 憂鬱",
    reversed: false
  },
  {
    id: 60,
    name: "寶劍十",
    image: "/CardsImages/s10.jpg",
    negative: "短暫的喘息, 痛苦程度減緩",
    key: "痛苦, 結束",
    positive: "痛苦, 身體上的疼痛, 黎明前的黑暗",
    reversed: false
  },
  {
    id: 61,
    name: "寶劍侍者",
    image: "/CardsImages/s11.jpg",
    negative: "流言蜚語特別多, 防衛心很重",
    key: "口齒伶俐, 消息靈通",
    positive: "細心敏銳, 有許多不確定性",
    reversed: false
  },
  {
    id: 62,
    name: "寶劍騎士",
    image: "/CardsImages/s12.jpg",
    negative: "急躁衝動, 因衝動行事導致壞的結果",
    key: "行動迅速, 明快果決",
    positive: "果斷, 辦事節奏快",
    reversed: false
  },
  {
    id: 63,
    name: "寶劍皇后",
    image: "/CardsImages/s13.jpg",
    negative: "冷漠嚴厲, 歇斯底里",
    key: "條理分明, 鐵娘子",
    positive: "知性博學的, 獨立且封閉",
    reversed: false
  },
  {
    id: 64,
    name: "寶劍國王",
    image: "/CardsImages/s14.jpg",
    negative: "十分嚴格, 武斷與偏見",
    key: "專業人士, 謹慎理性",
    positive: "理性分析, 有智慧的領導者",
    reversed: false
  },
  {
    id: 65,
    name: "錢幣一",
    image: "/CardsImages/p01.jpg",
    negative: "金玉其外敗絮其中, 過度的花費",
    key: "休閒享樂, 新計畫, 財富",
    positive: "滿足, 成功, 有一筆不錯的收入",
    reversed: false
  },
  {
    id: 66,
    name: "錢幣二",
    image: "/CardsImages/p02.jpg",
    negative: "遇到很大的變動, 搖擺不定",
    key: "波動, 抉擇, 起伏大",
    positive: "靈巧的處理事情, 起伏大的變化",
    reversed: false
  },
  {
    id: 67,
    name: "錢幣三",
    image: "/CardsImages/p03.jpg",
    negative: "溝通不順暢, 還有很多待學習的技能",
    key: "團隊合作, 計畫",
    positive: "需要專業技能, 良好的分工合作",
    reversed: false
  },
  {
    id: 68,
    name: "錢幣四",
    image: "/CardsImages/p04.jpg",
    negative: "小氣自私, 固執僵化",
    key: "佔有, 控制, 固執",
    positive: "穩固的基礎, 佔有慾",
    reversed: false
  },
  {
    id: 69,
    name: "錢幣五",
    image: "/CardsImages/p05.jpg",
    negative: "脫離危機, 混亂的狀態",
    key: "艱困, 互相扶持, 欠缺",
    positive: "艱困的時刻, 某方面的欠缺",
    reversed: false
  },
  {
    id: 70,
    name: "錢幣六",
    image: "/CardsImages/p06.jpg",
    negative: "財務失衡, 要求他人對自己付出",
    key: "施與受, 慷慨, 理財",
    positive: "狀態良好, 收支平衡, 幫助他人",
    reversed: false
  },
  {
    id: 71,
    name: "錢幣七",
    image: "/CardsImages/p07.jpg",
    negative: "焦慮, 遇到瓶頸, 沒有幹勁",
    key: "收成, 暫停, 思考下一步",
    positive: "略有小成, 重新擬定戰略",
    reversed: false
  },
  {
    id: 72,
    name: "錢幣八",
    image: "/CardsImages/p08.jpg",
    negative: "職業倦怠, 工作過勞, 技術不足",
    key: "專注, 專業技術, 勤奮",
    positive: "專注眼前的事物, 腳踏實地, 專業技術",
    reversed: false
  },
  {
    id: 73,
    name: "錢幣九",
    image: "/CardsImages/p09.jpg",
    negative: "只在意物質層面, 做沒有意義的繁瑣的事物",
    key: "充實, 開花結果, 享受",
    positive: "怡然自得, 感官上的享受",
    reversed: false
  },
  {
    id: 74,
    name: "錢幣十",
    image: "/CardsImages/p10.jpg",
    negative: "財務出現漏洞, 承接遺產出現問題",
    key: "繼承, 物質上的成功",
    positive: "家族企業, 財富狀況良好, 穩定的狀態",
    reversed: false
  },
  {
    id: 75,
    name: "錢幣侍者",
    image: "/CardsImages/p11.jpg",
    negative: "漫不經心, 沒有效率, 混亂沒有規則",
    key: "努力學習, 誠摯, 踏實",
    positive: "務實謹慎, 學習新的事物",
    reversed: false
  },
  {
    id: 76,
    name: "錢幣騎士",
    image: "/CardsImages/p12.jpg",
    negative: "停滯, 被動, 不理性",
    key: "腳踏實地, 專注目標",
    positive: "工作狂, 重視價值與實際層面, 有責任感",
    reversed: false
  },
  {
    id: 77,
    name: "錢幣皇后",
    image: "/CardsImages/p13.jpg",
    negative: "多疑難以相信他人, 精於算計, 缺乏安全感",
    key: "寬容, 理性務實, 照顧他人",
    positive: "理性務實, 精打細算考量與評估, 體貼照顧",
    reversed: false
  },
  {
    id: 78,
    name: "錢幣國王",
    image: "/CardsImages/p14.jpg",
    negative: "工於心計, 有控制慾, 為了賺錢不擇手段",
    key: "穩重務實, 重視實際面與享受",
    positive: "穩重務實, 重視享受, 穩定的物質基礎",
    reversed: false
  }
];

export default tarotData;
