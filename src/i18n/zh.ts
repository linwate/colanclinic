export const zh = {
  site: {
    title: '鈷嵐診所｜神經科・疼痛治療・再生醫學｜新北市蘆洲區',
    description:
      '鈷嵐診所，新北市蘆洲區神經科暨疼痛專科。提供超音波導引注射、PRP增生療法、神經解套、骨髓細胞（BMAC）等再生醫學治療。健保門診與自費約診並行，林瑋德醫師主治。',
    keywords:
      '蘆洲神經科,蘆洲診所,鈷嵐診所,PRP,增生療法,神經解套,超音波導引注射,肉毒桿菌,針刀,動脈硬化評估,慢性發炎,再生醫學,林瑋德醫師,BMAC,骨髓細胞,羊膜基質,自體脂肪細胞',
  },
  nav_logo: '鈷嵐診所',
  nav: {
    about: '關於醫師',
    approach: '整合視角',
    services: '診療項目',
    faq: '常見問題',
    book: '立即預約',
    first_visit: '初診說明',
    treatment_faq: '治療常見問題',
  },
  hero: {
    tag: '新北市蘆洲區・神經科・疼痛・再生醫學',
    title: '症狀消失了',
    title2: '但身體真的修復了嗎？',
    sub: '治療過卻反覆發作？做了檢查卻找不到原因？鈷嵐診所用疼痛科與神經科的視角、超音波的眼睛，陪你找出真正的源頭。',
    cta: '先找出疼痛真正原因',
  },
  stats: [
    { num: '200+', label: '專業衛教文章' },
    { num: '10+', label: '年臨床經驗' },
    { num: '4', label: '服務院區' },
    { num: 'CIPS', label: '國際疼痛認證' },
  ],
  problem: {
    title: '你是否也有這些困擾？',
    items: [
      '痛很久，但找不到原因',
      '做過復健、吃藥，還是反覆發作',
      '檢查正常，但就是不舒服',
      '治療過但沒有真正好過',
    ],
    close: '這些不是你的錯。只是過去的治療，還沒有看到身體真正在喊痛的那個角落。',
  },
  approach: {
    tag: '整合視角',
    title: '疼痛 × 慢性發炎 × 整體退化',
    title2: '同一條失衡軸線上的三個面相',
    desc: '從神經科的臨床觀察，頑固疼痛、慢性發炎與整體退化經常不是各自獨立的問題，而是同一條失衡軸線上互為因果的面相。鈷嵐診所把三者的精準評估整合在一起，幫助你看見身體的全貌，而不是只處理單一症狀。',
    points: [
      {
        label: '神經科視角',
        text: '以頭痛、頭暈、麻木、失眠、中風後照護為基礎，理解神經系統與全身發炎的連動。',
      },
      {
        label: '疼痛結構評估',
        text: '超音波導引下定位真正的壓迫與發炎位置，避免只憑影像報告推測。',
      },
      {
        label: '血管健康評估',
        text: '非侵入式動脈硬化檢測，掌握心血管風險與慢性發炎的系統性指標。',
      },
    ],
  },
  services: {
    title: '診療項目',
    sub: '健保門診・自費約診・特色整合評估',
    scopes: {
      nhi: '健保',
      private: '自費',
      hybrid: '健保／自費',
    },
    groups: [
      {
        key: 'nhi',
        title: '健保門診',
        desc: '一般掛號，適合初診評估與常規追蹤。',
        items: [
          {
            name: '神經科一般門診',
            desc: '頭痛、頭暈、手麻、腳麻、神經痛',
            scope: 'nhi',
          },
          {
            name: '動脈硬化評估',
            desc: '依健保條件給付，符合條件者健保給付，自費選項亦可',
            scope: 'hybrid',
          },
        ],
      },
      {
        key: 'private',
        title: '自費約診',
        desc: '以疼痛修復為核心，時間較充裕，可深入討論治療計畫。',
        subgroups: [
          {
            label: '基礎修復',
            desc: '適合初次嘗試再生醫學、中度損傷、慢性疼痛',
            items: [
              { name: '關節玻尿酸注射', desc: '潤滑關節、緩解退化性疼痛的基礎選項' },
              { name: '神經解套注射', desc: '精準釋放受壓迫的神經' },
              { name: '超音波導引注射', desc: '即時影像確認，精準到位' },
              { name: '增生療法（Prolotherapy）', desc: '強化韌帶與關節穩定度' },
              { name: '肉毒桿菌止痛', desc: '慢性疼痛的進階選項' },
              { name: '針刀整合治療', desc: '中西醫整合的結構鬆解' },
            ],
          },
          {
            label: '進階再生',
            desc: '適合嚴重退化、反覆治療無效、需要更強再生力的患者',
            items: [
              { name: 'PRP 增生療法', desc: '自體血小板促進組織修復，適合中重度損傷' },
              { name: 'SportVis 舒健玻尿酸', desc: '軟組織專用玻尿酸，修復肌腱韌帶的進階選項' },
              { name: '骨髓細胞濃縮液（BMAC）', desc: '頑固性退化的最強再生選項，自體骨髓萃取' },
              { name: '羊膜基質注射', desc: '天然修復因子，促進組織再生與抗發炎' },
              { name: '自體脂肪細胞注射', desc: '自身脂肪萃取，用於關節修復與組織再生' },
              { name: '微細動脈栓塞（TAME）', desc: '從血管端控制頑固疼痛，退化性關節炎與肌腱病變的進階選項' },
            ],
          },
        ],
      },
      {
        key: 'signature',
        title: '特色整合評估',
        desc: '鈷嵐診所的差異點，把血管與疼痛放在同一張評估藍圖上看。',
        items: [
          {
            name: '動脈硬化 × 慢性疼痛整合評估',
            desc: '健保與自費依條件搭配，連結慢性發炎與疼痛根源，一次看清問題全貌。',
            scope: 'hybrid',
          },
        ],
      },
    ],
  },
  process: {
    title: '初診流程',
    sub: '到診前，先知道會發生什麼',
    nhiLabel: '健保門診',
    nhiNote: '初步快速篩檢，超音波重點評估',
    selfLabel: '自費約診',
    selfNote: '完整超音波全面評估，時間較充裕',
    moreLink: '想了解更多？查看完整初診說明與常見問題 →',
    steps: [
      {
        num: '01',
        title: '到院報到',
        desc: '帶過去的影像報告（X光、MRI）即可，沒有也沒關係。',
      },
      {
        num: '02',
        title: '詳細問診與評估',
        desc: '醫師仔細了解：痛多久、試過什麼、最在意什麼。',
      },
      {
        num: '03',
        title: '超音波即時影像',
        nhi: '重點部位超音波確認',
        self: '完整超音波全面評估，即時確認問題位置，不用等報告。',
      },
      {
        num: '04',
        title: '治療計畫說明',
        nhi: '說明基本治療選項與用藥方向，由你決定後進行。',
        self: '針對複雜或慢性疼痛，完整說明進階治療選項 - 包含超音波導引注射、PRP、神經解套、骨髓細胞（BMAC）、羊膜基質等再生醫學療程。費用透明，由你決定後才進行，不施壓。',
      },
    ],
  },
  clinicEnv: {
    title: '診所環境',
    sub: '2026年9月蘆洲開幕・以下為設計示意圖',
    images: [
      { src: '/images/clinic-exterior.webp', alt: '鈷嵐診所外觀' },
      { src: '/images/clinic-waiting.webp', alt: '鈷嵐診所候診室' },
      { src: '/images/clinic-hall.webp', alt: '鈷嵐診所候診區' },
      { src: '/images/clinic-reception.webp', alt: '鈷嵐診所櫃台' },
    ],
  },
  doctor: {
    title: '林瑋德醫師',
    sub: '神經科・疼痛治療・再生醫學',
    desc: '我是神經科專科醫師，也做疼痛治療。每個坐在診間的人，我想做的第一件事不是打針，是先花時間聽你說、用超音波看清楚發生了什麼。診斷真的對上原因，治療計畫才會屬於你，而不是套餐式的療程。如果你的痛超過 3 個月、治療過很多次卻沒有真正好過，我想先認識一下你的身體，再說治療怎麼做。',
  },
  credentials: {
    title: '專業認證與國際進修',
    sub: '持續學習，是為了在每位患者面前都有更多工具',
    licenses: {
      title: '醫師證照',
      items: [
        { name: '中華民國神經內科專科醫師', note: '慢性神經痛、動作障礙、神經壓迫治療' },
        { name: '中華民國疼痛專科醫師', note: 'PRP注射、肉毒止痛、超音波導引注射' },
        { name: 'CIPS 認證醫師', note: '世界疼痛醫學會（WIP）超音波導引介入治療國際認證' },
        { name: '針刀專科醫師', note: '台灣針刀醫學會，筋膜沾黏鬆解、慢性疼痛介入治療' },
      ],
    },
    training: {
      title: '國際進修',
      items: [
        {
          country: '🇰🇷',
          name: '高麗大學疼痛訓練國際認證',
          desc: '超音波導引注射、肌肉骨骼解剖與非手術性疼痛處理，長達一年國際級訓練',
          link: 'https://twmedpro.tw/korea_pain_training_202404/',
        },
        {
          country: '🇯🇵',
          name: 'Okuno Clinic｜TAME 觀摩課程',
          desc: '赴日本知名疼痛診所進修微細動脈栓塞止痛術（TAME），向先驅者奧野醫師親自學習',
          link: 'https://twmedpro.tw/tame_2024_jp/',
        },
        {
          country: '🇰🇷',
          name: 'Kyoto MSK Ultrasound Asian Meeting 2025',
          desc: '亞洲肌肉骨骼超音波國際研討會，進修最新超音波導引技術',
          link: 'https://twmedpro.tw/kyoto-osaka-msk-ultrasound-2025/',
        },
        {
          country: '🌍',
          name: 'VIPS 2025｜介入性疼痛治療國際研討會',
          desc: '三天密集進修，涵蓋最新介入性疼痛治療技術與臨床應用',
          link: 'https://twmedpro.tw/vips-2025-interventional-pain-symposium-review/',
        },
        {
          country: '🇰🇷',
          name: 'IFAAS 脂肪移植進修',
          desc: '脂肪抽取、PRP 與自體細胞修復於醫美與關節退化領域之應用',
          link: 'https://twmedpro.tw/202408_korea_liposuction/',
        },
      ],
    },
  },
  blog: {
    title: '疼痛知識庫',
    desc: '超過 200 篇由林瑋德醫師親自撰寫的疼痛、神經、再生醫學文章',
    link: 'https://twmedpro.tw',
    cta: '前往閱讀',
    note: '涵蓋：神經痛・足底筋膜炎・五十肩・PRP・動脈硬化・糖尿病神經病變',
    featured: [
      {
        title: '什麼是足底筋膜炎？為何下床第一步最痛？原因、症狀、治療與預防',
        tag: '足部疼痛',
        url: 'https://twmedpro.tw/plantar-fasciitis-first-step-pain/',
      },
      {
        title: '手掌麻是怎麼了？腕隧道症候群超音波診斷與治療',
        tag: '手部神經',
        url: 'https://twmedpro.tw/hand-numbness-causes/',
      },
      {
        title: '肩膀痛看哪科？旋轉肌 vs 五十肩 vs 頸椎壓迫鑑別',
        tag: '肩頸疼痛',
        url: 'https://twmedpro.tw/shoulder-pain-causes-frozen-shoulder-rotator-cuff/',
      },
      {
        title: 'PRP 增生療法完整解析：適應症、療程、費用一次說清楚',
        tag: '再生醫學',
        url: 'https://twmedpro.tw/prp-treatment-guide/',
      },
      {
        title: '糖尿病神經病變腳麻燒痛？雙重夾擠症候群可能被忽略',
        tag: '神經病變',
        url: 'https://twmedpro.tw/diabetic-neuropathy-foot-numbness-burning-guide/',
      },
      {
        title: '微細動脈栓塞（TAME）是什麼？從血管來控制疼痛的原理、作法與效果',
        tag: 'TAME 栓塞',
        url: 'https://twmedpro.tw/tame-ultrasound-guided-pain-treatment/',
      },
    ],
  },
  faq: {
    title: '就診常見問題',
    items: [
      {
        q: '第一次來診需要帶什麼？',
        a: '帶過去的影像報告（X光、MRI）即可，沒有也沒關係，診間有超音波可以即時評估。',
      },
      {
        q: '健保門診和自費約診有什麼不同？',
        a: '健保門診為一般神經科診療，適合初診評估與常規追蹤。自費約診以疼痛修復為核心，提供超音波導引注射、再生醫學等進階治療，時間較充裕，可深入討論治療計畫。',
      },
      {
        q: '動脈硬化評估是自費嗎？',
        a: '依健保條件而定。符合健保適應症者可健保給付；若需要更完整的血管年齡與發炎指數評估，可選擇自費項目，費用會在門診中說明。',
      },
      {
        q: '第一次會馬上做治療嗎？',
        a: '不會。第一次會先做完整評估，確認問題後說明選項，你決定後才進行治療。',
      },
      {
        q: '療程需要來幾次？',
        a: '依個人狀況不同，通常 1–3 次評估後會有明確計畫，不會無限期追蹤。',
      },
      {
        q: '羊膜注射和骨髓細胞濃縮液（BMAC）適合哪些人？',
        a: '羊膜基質適合中度組織損傷、對 PRP 反應有限者；BMAC 適合嚴重退化性關節炎、軟骨缺損、頑固性疼痛等，屬於再生醫學的進階選項，會在評估後依損傷程度建議。',
      },
    ],
  },
  hours: {
    title: '門診時間',
    note: '採預約制，請先透過 LINE 確認門診時間',
    slots: [
      { day: '週一至週五', time: '時段確認中' },
      { day: '週六', time: '時段確認中' },
      { day: '週日', time: '休診' },
    ],
    phone: '電話號碼確認中',
    emergency: '急症請透過 LINE 聯繫',
  },
  book: {
    title: '準備好了嗎？',
    sub: '如果你的疼痛超過 3 個月、治療過但沒好、想找到真正原因，建議先做一次精準評估。',
    cta: 'LINE 預約',
    addr: '新北市蘆洲區永安北路二段 58 巷 6 號',
    hours: '週一至週六｜疼痛科・神經科健保門診・自費項目請先預約',
    mapLink: 'https://maps.app.goo.gl/WYC9Hb8qjyi6CbLj8',
    mapLabel: '📍 開啟 Google 地圖導航',
    qrLabel: '掃 QR 加 LINE 好友',
  },
}
