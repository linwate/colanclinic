export type SymptomCard = {
  name: string
  description: string
  note: string
  link: string
}

export type SymptomCategory = {
  slug: string
  treatmentIntro: string
  treatments: string[]
  cards: SymptomCard[]
}

export type LocalizedSymptom = {
  metaTitle: string
  metaDescription: string
  h1: string
  heroSub: string
  introParagraphs: string[]
  clinicNote: string
  brandStatement: string
  cardsHeading: string
  treatmentsHeading: string
  category: SymptomCategory
}

export const zh: Record<string, LocalizedSymptom> = {
  shoulder: {
    metaTitle: "肩膀疼痛｜鈷嵐診所・蘆洲疼痛治療",
    metaDescription: "五十肩、旋轉肌撕裂、肩峰下夾擠，超音波精準評估找出真正原因，非手術修復。",
    h1: "肩膀疼痛",
    heroSub: "舉手會痛、夜間痛醒、肩膀卡住？先確認問題在哪裡。",
    introParagraphs: [
      "醫師，我肩膀已經快三個月了，手舉起來會痛，晚上翻身也會痛，連穿衣服都很困難。",
      "肩膀痛的原因很多，五十肩、旋轉肌撕裂、肩峰下夾擠，每一種的處理方式都不一樣。打錯針不只沒效，有時候讓問題更嚴重。旋轉肌如果已經撕裂，繼續拉筋伸展可能讓裂口更大。",
      "超音波可以在門診當場確認問題在哪裡，不用等報告，不用靠猜。"
    ],
    clinicNote: "很多治療只是暫時止痛，但如果沒有修復受損的結構，問題很容易反覆。在這裡，我們的目標不只是讓你不痛，而是讓你能夠回到原本的生活。",
    brandStatement: "不只是止痛，而是修復。",
    cardsHeading: "常見原因（不一定只有一種）",
    treatmentsHeading: "適合的治療選項（依原因不同而調整）",
    category: {
      slug: "shoulder",
      treatmentIntro: "不同原因，治療方式完全不同。如果沒有確認問題位置，治療效果通常會有限。",
      treatments: ["超音波導引注射", "PRP 增生療法", "SportVis"],
      cards: [
        { name: "五十肩（沾黏性關節囊炎）", description: "關節囊攣縮造成手臂舉不高、夜間疼痛", note: "通常會越來越卡，而不是突然發生", link: "https://twmedpro.tw/frozen-shoulder-adhesive-capsulitis/" },
        { name: "旋轉肌撕裂", description: "肩膀舉重物或過頭會痛，肌腱退化或急性撕裂", note: "繼續復健可能讓撕裂擴大，需要先確認程度", link: "https://twmedpro.tw/shoulder-pain-causes-frozen-shoulder-rotator-cuff/" },
        { name: "肩峰下夾擠症候群", description: "手臂上舉時肩峰下方疼痛，反覆摩擦造成發炎", note: "常和旋轉肌問題同時存在，需要一起評估", link: "https://twmedpro.tw/frozen-shoulder-adhesive-capsulitis/" },
        { name: "肩峰下滑囊炎", description: "肩膀深處腫脹痛，靜止時也會不舒服", note: "超音波可以直接看到滑囊積水的狀況", link: "https://twmedpro.tw/frozen-shoulder-adhesive-capsulitis/" },
      ]
    }
  },
  neck: {
    metaTitle: "頸部疼痛｜鈷嵐診所・蘆洲疼痛治療",
    metaDescription: "頸椎壓迫、頸因性頭痛、頸部肌肉筋膜疼痛，神經科背景精準評估，超音波確認壓迫位置。",
    h1: "頸部疼痛",
    heroSub: "脖子僵硬、手麻、頭痛？先確認症狀是否來自頸椎。",
    introParagraphs: [
      "醫師，我脖子一直很緊，有時候轉頭會痛，最近開始手麻，睡覺起來頭也會痛。",
      "頸部疼痛容易被忽略，但頸椎問題影響範圍很廣。頸椎神經根受壓迫，症狀可以出現在肩膀、手臂、甚至手指。頸因性頭痛常被誤診為偏頭痛，治療方向完全不同。",
      "神經科訓練背景讓林醫師更容易判斷症狀來源是頸椎還是其他位置，超音波可以在門診當場確認壓迫狀況。"
    ],
    clinicNote: "頸椎問題如果長期沒有處理，神經壓迫可能越來越嚴重。在這裡，我們的目標不只是讓你不痛，而是讓你能夠回到原本的生活。",
    brandStatement: "不只是止痛，而是修復。",
    cardsHeading: "常見原因（不一定只有一種）",
    treatmentsHeading: "適合的治療選項（依原因不同而調整）",
    category: {
      slug: "neck",
      treatmentIntro: "不同原因，治療方式完全不同。神經壓迫和肌肉問題的處理方式完全不同。",
      treatments: ["神經解套注射", "超音波導引注射", "PRP 增生療法"],
      cards: [
        { name: "頸椎神經根壓迫", description: "頸部痛合併手麻、手臂無力，神經傳導異常", note: "肩膀痛合併手麻，優先排除頸椎神經問題", link: "https://twmedpro.tw/cervical-spine-symptoms/" },
        { name: "頸因性頭痛", description: "後頸僵硬造成的頭痛，常被誤診為偏頭痛", note: "治療對象是頸椎，不是頭痛本身", link: "https://twmedpro.tw/cervicogenic-headache/" },
        { name: "頸部肌肉筋膜疼痛", description: "頸肩肌肉緊繃、壓痛點明顯，久坐辦公族常見", note: "姿勢問題是根本原因，需要一起改善", link: "https://twmedpro.tw/cervical-spine-symptoms/" },
        { name: "椎間盤突出（頸椎）", description: "頸椎間盤壓迫神經，造成手臂麻木無力", note: "MRI 說輕微，但症狀可能很嚴重，需要實際評估", link: "https://twmedpro.tw/cervical-spine-symptoms/" },
      ]
    }
  },
  back: {
    metaTitle: "下背痛｜鈷嵐診所・蘆洲疼痛治療",
    metaDescription: "腰椎間盤突出、薦髂關節炎、肌肉筋膜疼痛，超音波找出壓迫位置，非手術修復。",
    h1: "下背痛",
    heroSub: "腰痛一直好不了？先找出真正的壓迫位置。",
    introParagraphs: [
      "醫師，我的腰痛已經快半年了，MRI 說輕微，但我每天坐超過一小時就開始不舒服，起身的時候更明顯，有時候還會痛到臀部。",
      "這種情形很常見。MRI 看的是結構，但結構輕微不代表症狀輕微。腰椎間盤、薦髂關節、肌筋膜，位置不同，症狀可以很像，但治療方向完全不同。",
      "薦髂關節發炎的人，常常以為自己是腰椎問題，去做脊椎牽引、做了幾個月沒效，才發現方向錯了。超音波可以在門診直接確認壓迫位置，不用等報告，不用靠猜。"
    ],
    clinicNote: "很多治療只是暫時止痛，但如果沒有修復受損的結構，問題很容易反覆。在這裡，我們的目標不只是讓你不痛，而是讓你能夠回到原本的生活。",
    brandStatement: "不只是止痛，而是修復。",
    cardsHeading: "常見原因（不一定只有一種）",
    treatmentsHeading: "適合的治療選項（依原因不同而調整）",
    category: {
      slug: "back",
      treatmentIntro: "不同原因，治療方式完全不同。如果沒有確認問題位置，治療效果通常會有限。",
      treatments: ["超音波導引注射", "增生療法", "神經解套注射", "PRP"],
      cards: [
        { name: "腰椎間盤突出", description: "腰痛合併腳麻、坐骨神經痛，彎腰時加劇", note: "神經壓迫若持續，建議盡早評估", link: "https://twmedpro.tw/lbp/" },
        { name: "薦髂關節炎", description: "臀部上方深處痛，久坐或爬樓梯時加重", note: "常被誤診為腰椎問題，壓痛點位置不同", link: "https://twmedpro.tw/low-back-pain-location/" },
        { name: "坐骨神經痛", description: "從臀部放射至大腿、小腿的麻木刺痛感", note: "不是所有腿麻都是坐骨神經，需要鑑別診斷", link: "https://twmedpro.tw/sciatica-deep-gluteal-syndrome/" },
        { name: "肌肉筋膜疼痛", description: "腰背肌肉緊繃、壓痛點明顯，常見於久坐族群", note: "單純肌肉問題通常對物理治療反應較好", link: "https://twmedpro.tw/lbp/" },
      ]
    }
  },
  hip: {
    metaTitle: "髖臀疼痛｜鈷嵐診所・蘆洲疼痛治療",
    metaDescription: "髖關節退化、梨狀肌症候群、大轉子疼痛、鼠蹊部拉傷，超音波評估，非手術修復。",
    h1: "髖臀疼痛",
    heroSub: "臀部深處痛、走路卡、久坐站起來很難？先確認問題位置。",
    introParagraphs: [
      "醫師，我臀部深處一直有悶痛，久坐之後站起來最明顯，爬樓梯也會加重。去骨科說是髖關節問題，但還沒有嚴重到要換關節。",
      "髖臀部位的疼痛容易被誤判。臀部深處痛不一定是髖關節本身，梨狀肌壓迫坐骨神經、大轉子的肌腱問題、薦髂關節炎，都可能有類似的感覺。",
      "超音波可以在門診當場評估髖關節、肌腱和周圍軟組織的狀況，確認問題位置後再決定治療方向。"
    ],
    clinicNote: "很多治療只是暫時止痛，但如果沒有修復受損的結構，問題很容易反覆。在這裡，我們的目標不只是讓你不痛，而是讓你能夠回到原本的生活。",
    brandStatement: "不只是止痛，而是修復。",
    cardsHeading: "常見原因（不一定只有一種）",
    treatmentsHeading: "適合的治療選項（依原因不同而調整）",
    category: {
      slug: "hip",
      treatmentIntro: "不同原因，治療方式完全不同。髖關節和周圍肌腱問題的處理方式不一樣。",
      treatments: ["超音波導引注射", "PRP 增生療法", "BMAC 骨髓再生"],
      cards: [
        { name: "髖關節退化性關節炎", description: "髖關節軟骨磨損，走路、爬梯、久站後疼痛加重", note: "間隙還在就有機會，不一定要換關節", link: "https://twmedpro.tw/knee-prolo-01/" },
        { name: "大轉子疼痛症候群（GTPS）", description: "大腿外側上方疼痛，側躺或爬樓梯時加重", note: "常被誤診為髖關節問題，壓痛點位置不同", link: "https://twmedpro.tw/lbp/" },
        { name: "梨狀肌症候群", description: "臀部深處痛，坐久後放射至大腿，類似坐骨神經痛", note: "不是所有臀部痛都是坐骨神經，需要鑑別診斷", link: "https://twmedpro.tw/sciatica-deep-gluteal-syndrome/" },
        { name: "髖關節夾擠症候群（FAI）", description: "髖部深處痛，長時間坐著或彎曲髖關節時加重", note: "年輕運動員常見，早期評估效果較好", link: "https://twmedpro.tw/lbp/" },
      ]
    }
  },
  knee: {
    metaTitle: "膝蓋退化｜鈷嵐診所・蘆洲疼痛治療",
    metaDescription: "退化性關節炎、半月板損傷、跳躍膝，玻尿酸至 BMAC 依程度選擇，非手術修復。",
    h1: "膝蓋退化",
    heroSub: "上下樓梯痛、蹲不下去、膝蓋腫？先確認軟骨和關節的實際狀況。",
    introParagraphs: [
      "醫師，我膝蓋退化，骨科說要換關節，但我才五十幾歲，不想換。還有別的選擇嗎？",
      "退化是一個過程，不是終點。很多人聽到退化就覺得一定要換，但只要關節間隙還在，關節軟骨還沒有完全磨損，再生醫學就還有介入的空間。",
      "換關節之前，值得先確認一件事：你的軟骨還剩多少？半月板有沒有問題？用超音波評估實際狀況，再決定治療方向，比直接預約手術更合理。"
    ],
    clinicNote: "很多治療只是暫時止痛，但如果沒有修復受損的結構，問題很容易反覆。在這裡，我們的目標不只是讓你不痛，而是讓你能夠回到原本的生活。",
    brandStatement: "不只是止痛，而是修復。",
    cardsHeading: "常見原因（不一定只有一種）",
    treatmentsHeading: "適合的治療選項（依程度不同而調整）",
    category: {
      slug: "knee",
      treatmentIntro: "輕度退化和嚴重退化的治療選擇完全不同。確認損傷程度才能選對方案。",
      treatments: ["關節玻尿酸注射", "PRP", "BMAC", "SportVis"],
      cards: [
        { name: "退化性關節炎", description: "關節軟骨磨損造成疼痛、腫脹、活動受限", note: "間隙還在就有機會，不一定要換關節", link: "https://twmedpro.tw/knee-prolo-01/" },
        { name: "半月板損傷", description: "膝蓋內外側深處痛，蹲下或旋轉時加劇", note: "不一定要手術，超音波確認後評估保守修復可能", link: "https://twmedpro.tw/knee-prolo-03/" },
        { name: "髕骨肌腱炎（跳躍膝）", description: "膝蓋下方疼痛，跳躍和跑步後加重", note: "運動員常見，早期介入修復效果較好", link: "https://twmedpro.tw/knee-prolo-01/" },
        { name: "鵝足滑囊炎", description: "膝蓋內側下方疼痛，常見於退化合併肌腱問題", note: "常和退化性關節炎同時存在，容易被忽略", link: "https://twmedpro.tw/knee-prolo-03/" },
      ]
    }
  },
  foot: {
    metaTitle: "足部疼痛｜鈷嵐診所・蘆洲疼痛治療",
    metaDescription: "足底筋膜炎、腳踝扭傷、跟腱炎，超音波評估筋膜厚度，從保守治療到 PRP 修復。",
    h1: "足部疼痛",
    heroSub: "腳跟痛、腳踝不穩定？先評估才能有效修復。",
    introParagraphs: [
      "醫師，我早上下床的第一步是最痛的，走幾步之後會稍微好一點，但站久了又開始。已經痛了快一年，試過鞋墊，也做過物理治療，沒有明顯改善。",
      "足底筋膜炎拖超過三個月，就進入慢性退化期了。急性發炎期休息就能好，慢性退化期需要的是修復，這兩件事完全不一樣。",
      "腳的問題還有另一件事很容易被忽略。腳踝不穩定、足弓塌陷，會讓膝蓋和腰椎代償，時間久了，腳底筋膜炎好了，膝蓋和腰又開始出問題。一起評估才能一起處理。"
    ],
    clinicNote: "很多治療只是暫時止痛，但如果沒有修復受損的結構，問題很容易反覆。在這裡，我們的目標不只是讓你不痛，而是讓你能夠回到原本的生活。",
    brandStatement: "不只是止痛，而是修復。",
    cardsHeading: "常見原因（不一定只有一種）",
    treatmentsHeading: "適合的治療選項（依原因不同而調整）",
    category: {
      slug: "foot",
      treatmentIntro: "不同原因，治療方式完全不同。如果沒有確認問題位置，治療效果通常會有限。",
      treatments: ["超音波導引注射", "增生療法", "PRP", "SportVis"],
      cards: [
        { name: "足底筋膜炎", description: "早晨下床第一步最痛，腳跟內側壓痛", note: "超過三個月的慢性案例，修復期比急性期長很多", link: "https://twmedpro.tw/plantar-fasciitis-first-step-pain/" },
        { name: "腳踝扭傷（慢性不穩定）", description: "反覆扭傷、走路不穩，韌帶沒有完全修復", note: "第一次扭傷沒有好好處理，往往造成長期不穩定", link: "https://twmedpro.tw/ankle-sprain-complete-guide/" },
        { name: "跟腱炎", description: "阿基里斯腱疼痛腫脹，跑步或爬坡時加劇", note: "和足底筋膜炎容易混淆，壓痛位置不同", link: "https://twmedpro.tw/plantar-fasciitis-first-step-pain/" },
        { name: "蹠骨痛 / 摩頓神經瘤（趾間神經瘤）", description: "前腳掌疼痛麻木，穿鞋走路時明顯", note: "超音波可以直接確認神經瘤位置和大小", link: "https://twmedpro.tw/plantar-fasciitis-first-step-pain/" },
      ]
    }
  },
  "elbow-wrist": {
    metaTitle: "手肘手腕疼痛｜鈷嵐診所・蘆洲疼痛治療",
    metaDescription: "網球肘、腕隧道症候群、TFCC 損傷、板機指，超音波確認肌腱神經狀態，精準修復。",
    h1: "手肘手腕疼痛",
    heroSub: "手肘外側痛、手腕使不上力？打針止痛前，先確認肌腱狀況。",
    introParagraphs: [
      "醫師，我網球肘打了三次類固醇，每次好個兩三個月又回來。現在連端碗、轉門把都會痛，工作也受影響。",
      "類固醇打三次還在復發，通常代表一件事：問題不是發炎，是肌腱退化。類固醇可以壓住發炎，但退化的肌腱它沒辦法修復。發炎消了，退化還在，下次一用力就又復發。",
      "超音波可以直接看肌腱的狀況，確認退化的程度，再決定是用增生療法還是 PRP。知道退化到哪裡，才能選對工具。"
    ],
    clinicNote: "很多治療只是暫時止痛，但如果沒有修復受損的結構，問題很容易反覆。在這裡，我們的目標不只是讓你不痛，而是讓你能夠回到原本的生活。",
    brandStatement: "不只是止痛，而是修復。",
    cardsHeading: "常見原因（不一定只有一種）",
    treatmentsHeading: "適合的治療選項（依原因不同而調整）",
    category: {
      slug: "elbow-wrist",
      treatmentIntro: "類固醇止痛和修復退化肌腱是兩件事。確認損傷程度才能選對方案。",
      treatments: ["超音波導引注射", "神經解套注射", "PRP", "SportVis"],
      cards: [
        { name: "網球肘（肱骨外上髁炎）", description: "手肘外側疼痛，拿重物或扭毛巾時加劇", note: "好了又復發，通常是只處理發炎、沒修復退化肌腱", link: "https://twmedpro.tw/tennis-elbow-treatment-guide/" },
        { name: "腕隧道症候群", description: "手掌麻木、夜間麻醒、正中神經壓迫", note: "超音波可以當場測量神經截面積，門診即可診斷", link: "https://twmedpro.tw/cts-intro/" },
        { name: "TFCC 三角軟骨損傷", description: "手腕尺側疼痛，扭毛巾或開瓶蓋時加劇", note: "常被誤當一般扭傷，拖超過三個月影響旋轉功能", link: "https://twmedpro.tw/hand-numbness-causes/" },
        { name: "板機指", description: "手指晨起卡住、彈響，嚴重時無法伸直", note: "反覆發作代表腱鞘已退化，需要修復不只是止痛", link: "https://twmedpro.tw/tg-finger/" },
      ]
    }
  },
  neuropathy: {
    metaTitle: "神經病變｜鈷嵐診所・蘆洲疼痛治療",
    metaDescription: "糖尿病神經病變（DPN）、神經壓迫、手麻腳麻，神經科專科評估，超音波確認神經狀態。",
    h1: "神經病變",
    heroSub: "腳麻、燒灼感、像電到一樣？先確認是神經壓迫還是神經病變。",
    introParagraphs: [
      "醫師，我糖尿病控制得還不錯，但腳底一直麻，晚上特別明顯，像踩在棉花上，有時候還有灼熱感。神經科說是糖尿病神經病變，但除了吃藥好像沒什麼其他辦法。",
      "糖尿病神經病變是可以治療的，不是只能等。血糖控制是基礎，但神經已經受損，光控制血糖不夠，受損的神經需要額外的修復介入。",
      "另一件容易被忽略的是雙重夾擠。神經可能在好幾個位置同時被壓到，只處理其中一個，症狀不會完全緩解。神經科訓練背景讓林醫師在評估時更容易找出所有的壓迫位置，超音波可以在門診當場確認。"
    ],
    clinicNote: "神經病變如果長期沒有處理，神經受損會越來越嚴重，恢復也越來越困難。在這裡，我們的目標不只是讓症狀緩解，而是讓神經有機會真正修復。",
    brandStatement: "不只是止痛，而是修復。",
    cardsHeading: "常見原因（不一定只有一種）",
    treatmentsHeading: "適合的治療選項（依原因不同而調整）",
    category: {
      slug: "neuropathy",
      treatmentIntro: "不同原因，治療方式完全不同。神經問題越早處理，修復機會越大。",
      treatments: ["神經解套注射", "PRP 神經水解", "肉毒桿菌止痛"],
      cards: [
        { name: "糖尿病周邊神經病變（DPN）", description: "腳麻、燒灼感、夜間刺痛，常見於糖尿病患者", note: "血糖控制是基礎，但神經修復需要額外介入", link: "https://twmedpro.tw/dpn_prp/" },
        { name: "神經解套（雙重夾擠）", description: "神經在多個位置受壓迫，單純治療一處效果有限", note: "神經科背景讓醫師更容易找出所有壓迫點", link: "https://twmedpro.tw/neural-hydrodissection-release-nerve-adhesion/" },
        { name: "腕隧道症候群", description: "正中神經壓迫造成手掌麻木、夜間麻醒", note: "超音波可以當場測量神經截面積，門診即可診斷", link: "https://twmedpro.tw/cts-intro/" },
        { name: "尺神經壓迫", description: "小指和無名指麻木，手肘彎曲時加劇", note: "常被誤認為頸椎問題，需要鑑別診斷", link: "https://twmedpro.tw/hand-numbness-causes/" },
      ]
    }
  },
}

export const en: Record<string, LocalizedSymptom> = {
  shoulder: {
    metaTitle: "Shoulder Pain | Colan Clinic · Luzhou Pain Treatment",
    metaDescription: "Frozen shoulder, rotator cuff tear, subacromial impingement — ultrasound-guided evaluation to find the real cause, non-surgical repair.",
    h1: "Shoulder Pain",
    heroSub: "Shoulder stiff, painful, won't lift? Find out where the problem actually is.",
    introParagraphs: [
      "Doctor, my shoulder has been painful for about three months. It hurts to raise my arm, I wake up in pain when I turn over at night, and even getting dressed is difficult.",
      "Shoulder pain has many causes — frozen shoulder, rotator cuff tears, subacromial impingement — and each requires a completely different approach. The wrong treatment doesn't just fail to help; sometimes it makes things worse. If the rotator cuff is already torn, continuing to stretch may enlarge the tear.",
      "Real-time ultrasound confirms exactly where the problem is during your appointment — no waiting for reports, no guessing."
    ],
    clinicNote: "Many treatments only mask pain temporarily. Without repairing the damaged structure, the problem tends to return. Our goal isn't just to stop the pain — it's to help you get back to the life you had before.",
    brandStatement: "Not just pain relief — repair.",
    cardsHeading: "Common causes (there may be more than one)",
    treatmentsHeading: "Treatment options (tailored to the cause)",
    category: {
      slug: "shoulder",
      treatmentIntro: "Different causes require completely different treatments. Without identifying the source, results are often limited.",
      treatments: ["Ultrasound-guided injection", "PRP", "SportVis"],
      cards: [
        { name: "Frozen Shoulder", description: "Capsular contracture causing stiffness and night pain", note: "Tends to get progressively stiffer rather than appearing suddenly", link: "https://twmedpro.tw/frozen-shoulder-adhesive-capsulitis/" },
        { name: "Rotator Cuff Tear", description: "Pain when lifting the arm overhead, tendon degeneration or acute tear", note: "Continuing rehabilitation may worsen a tear — confirming severity first is important", link: "https://twmedpro.tw/shoulder-pain-causes-frozen-shoulder-rotator-cuff/" },
        { name: "Subacromial Impingement", description: "Pain under the shoulder blade when raising the arm, caused by repetitive friction", note: "Often coexists with rotator cuff problems — both should be assessed together", link: "https://twmedpro.tw/frozen-shoulder-adhesive-capsulitis/" },
        { name: "Subacromial Bursitis", description: "Deep shoulder swelling and pain, uncomfortable even at rest", note: "Ultrasound can directly visualize bursal fluid accumulation", link: "https://twmedpro.tw/frozen-shoulder-adhesive-capsulitis/" },
      ]
    }
  },
  neck: {
    metaTitle: "Neck Pain | Colan Clinic · Luzhou Pain Treatment",
    metaDescription: "Cervical nerve compression, cervicogenic headache, myofascial pain — neurology-trained evaluation, ultrasound confirms compression site.",
    h1: "Neck Pain",
    heroSub: "Stiff neck, arm numbness, headaches? Find out if it's coming from your cervical spine.",
    introParagraphs: [
      "Doctor, my neck has been tight for a while. Sometimes turning my head hurts, recently my hand started going numb, and I've been waking up with headaches.",
      "Neck problems are easy to underestimate, but cervical spine issues have a wide reach. A compressed cervical nerve root can cause symptoms in the shoulder, arm, or fingers. Cervicogenic headaches are frequently misdiagnosed as migraines — and the treatment direction is completely different.",
      "Dr. Lin's neurology training makes it easier to determine whether symptoms originate from the cervical spine or elsewhere. Ultrasound confirms the compression site during the appointment."
    ],
    clinicNote: "Untreated cervical nerve compression tends to worsen over time. Our goal isn't just to stop the pain — it's to help you get back to the life you had before.",
    brandStatement: "Not just pain relief — repair.",
    cardsHeading: "Common causes (there may be more than one)",
    treatmentsHeading: "Treatment options (tailored to the cause)",
    category: {
      slug: "neck",
      treatmentIntro: "Nerve compression and muscle tension require completely different approaches. Identifying the source matters.",
      treatments: ["Nerve hydrodissection", "Ultrasound-guided injection", "PRP"],
      cards: [
        { name: "Cervical Radiculopathy", description: "Neck pain with arm numbness and weakness, nerve compression", note: "Shoulder pain with hand numbness — rule out cervical nerve compression first", link: "https://twmedpro.tw/cervical-spine-symptoms/" },
        { name: "Cervicogenic Headache", description: "Headache originating from neck stiffness, often misdiagnosed as migraine", note: "Treatment targets the cervical spine, not the headache itself", link: "https://twmedpro.tw/cervicogenic-headache/" },
        { name: "Cervical Myofascial Pain", description: "Neck and shoulder muscle tightness with tender points, common in desk workers", note: "Posture is usually the root cause — needs to be addressed alongside treatment", link: "https://twmedpro.tw/cervical-spine-symptoms/" },
        { name: "Cervical Disc Herniation", description: "Disc pressing on a nerve, causing arm numbness and weakness", note: "MRI may say mild, but symptoms can be severe — actual evaluation matters", link: "https://twmedpro.tw/cervical-spine-symptoms/" },
      ]
    }
  },
  back: {
    metaTitle: "Lower Back Pain | Colan Clinic · Luzhou Pain Treatment",
    metaDescription: "Disc herniation, sacroiliac joint inflammation, myofascial pain — ultrasound pinpoints the compression site, non-surgical repair.",
    h1: "Lower Back Pain",
    heroSub: "Back pain that won't go away? Find the exact compression site first.",
    introParagraphs: [
      "Doctor, my back has been hurting for almost six months. The MRI says it's mild, but I can't sit for more than an hour without discomfort. Getting up is the worst, and sometimes the pain spreads into my buttock.",
      "This is very common. MRI shows structure — but mild structure doesn't mean mild symptoms. Disc herniation, sacroiliac joint inflammation, and myofascial pain can all look similar, but they require completely different treatment approaches.",
      "People with sacroiliac joint inflammation often assume it's a lumbar spine problem and spend months doing spinal traction before realizing the direction was wrong. Ultrasound confirms the compression site during the appointment — no waiting for reports, no guessing."
    ],
    clinicNote: "Many treatments only mask pain temporarily. Without repairing the damaged structure, the problem tends to return. Our goal isn't just to stop the pain — it's to help you get back to the life you had before.",
    brandStatement: "Not just pain relief — repair.",
    cardsHeading: "Common causes (there may be more than one)",
    treatmentsHeading: "Treatment options (tailored to the cause)",
    category: {
      slug: "back",
      treatmentIntro: "Different causes require completely different treatments. Without identifying the source, results are often limited.",
      treatments: ["Ultrasound-guided injection", "Prolotherapy", "Nerve hydrodissection", "PRP"],
      cards: [
        { name: "Lumbar Disc Herniation", description: "Back pain with leg numbness, sciatica, worse when bending", note: "Ongoing nerve compression warrants early evaluation", link: "https://twmedpro.tw/lbp/" },
        { name: "Sacroiliac Joint Dysfunction", description: "Deep pain above the buttock, worse when sitting or climbing stairs", note: "Often mistaken for a lumbar problem — the tender point is in a different location", link: "https://twmedpro.tw/low-back-pain-location/" },
        { name: "Sciatica", description: "Radiating pain from buttock to thigh and calf, numbness and tingling", note: "Not all leg numbness is sciatica — differential diagnosis is important", link: "https://twmedpro.tw/sciatica-deep-gluteal-syndrome/" },
        { name: "Myofascial Pain", description: "Muscle tightness with tender points, common in desk workers", note: "Pure muscle issues typically respond well to physical therapy", link: "https://twmedpro.tw/lbp/" },
      ]
    }
  },
  hip: {
    metaTitle: "Hip & Buttock Pain | Colan Clinic · Luzhou Pain Treatment",
    metaDescription: "Hip joint degeneration, piriformis syndrome, greater trochanteric pain, groin strain — ultrasound evaluation, non-surgical repair.",
    h1: "Hip & Buttock Pain",
    heroSub: "Deep buttock pain, limping, hard to stand up? Pinpoint the problem location first.",
    introParagraphs: [
      "Doctor, I've had a deep aching pain in my buttock for a while. It's most noticeable when I stand up after sitting for a long time, and it gets worse going up stairs. The orthopedic surgeon said it's a hip joint issue, but not severe enough for replacement yet.",
      "Pain in the hip and buttock area is easy to misidentify. Deep buttock pain isn't always the hip joint itself — piriformis muscle compression of the sciatic nerve, greater trochanteric tendon problems, and sacroiliac joint inflammation can all feel similar.",
      "Ultrasound assesses the hip joint, tendons, and surrounding soft tissue during the appointment, confirming the problem location before deciding on treatment."
    ],
    clinicNote: "Many treatments only mask pain temporarily. Without repairing the damaged structure, the problem tends to return. Our goal isn't just to stop the pain — it's to help you get back to the life you had before.",
    brandStatement: "Not just pain relief — repair.",
    cardsHeading: "Common causes (there may be more than one)",
    treatmentsHeading: "Treatment options (tailored to the cause)",
    category: {
      slug: "hip",
      treatmentIntro: "Hip joint and surrounding tendon problems require very different approaches. Identifying the source matters.",
      treatments: ["Ultrasound-guided injection", "PRP", "BMAC"],
      cards: [
        { name: "Hip Osteoarthritis", description: "Cartilage wear in the hip joint, pain worsening with walking, stairs, or prolonged standing", note: "While joint space remains, replacement isn't the only option", link: "https://twmedpro.tw/knee-prolo-01/" },
        { name: "Greater Trochanteric Pain Syndrome (GTPS)", description: "Outer upper thigh pain, worse when lying on the side or climbing stairs", note: "Often mistaken for hip joint disease — the tender point is in a different location", link: "https://twmedpro.tw/lbp/" },
        { name: "Piriformis Syndrome", description: "Deep buttock pain radiating down the thigh after sitting, similar to sciatica", note: "Not all buttock pain is sciatica — differential diagnosis is important", link: "https://twmedpro.tw/sciatica-deep-gluteal-syndrome/" },
        { name: "Femoroacetabular Impingement (FAI)", description: "Deep hip pain, worse after prolonged sitting or hip flexion", note: "Common in younger athletes — earlier evaluation leads to better outcomes", link: "https://twmedpro.tw/lbp/" },
      ]
    }
  },
  knee: {
    metaTitle: "Knee Degeneration | Colan Clinic · Luzhou Pain Treatment",
    metaDescription: "Osteoarthritis, meniscus tear, jumper's knee — from hyaluronic acid to BMAC based on severity, non-surgical repair.",
    h1: "Knee Degeneration",
    heroSub: "Stairs hurt, can't squat, knee swollen? Check the actual condition of cartilage and the joint.",
    introParagraphs: [
      "Doctor, my knee is degenerating. The orthopedic surgeon said I need a replacement, but I'm only in my fifties. I don't want to go that route. Are there other options?",
      "Degeneration is a process, not an endpoint. Many people assume a replacement is inevitable once they hear the word degeneration — but as long as joint space remains and the cartilage environment hasn't completely collapsed, regenerative medicine still has room to intervene.",
      "Before committing to surgery, it's worth confirming one thing: how much cartilage do you have left, and is there a meniscus problem? Ultrasound assessment of the actual condition gives you a clearer basis for deciding on treatment — rather than going straight to booking an operation."
    ],
    clinicNote: "Many treatments only mask pain temporarily. Without repairing the damaged structure, the problem tends to return. Our goal isn't just to stop the pain — it's to help you get back to the life you had before.",
    brandStatement: "Not just pain relief — repair.",
    cardsHeading: "Common causes (there may be more than one)",
    treatmentsHeading: "Treatment options (matched to severity)",
    category: {
      slug: "knee",
      treatmentIntro: "Mild and severe degeneration call for very different approaches. Confirming the extent of damage is essential before selecting treatment.",
      treatments: ["Hyaluronic acid injection", "PRP", "BMAC", "SportVis"],
      cards: [
        { name: "Osteoarthritis", description: "Cartilage wear causing pain, swelling, and restricted movement", note: "While joint space remains, replacement isn't the only option", link: "https://twmedpro.tw/knee-prolo-01/" },
        { name: "Meniscus Tear", description: "Deep inner or outer knee pain, worse when squatting or twisting", note: "Surgery isn't always required — ultrasound helps assess conservative repair potential", link: "https://twmedpro.tw/knee-prolo-03/" },
        { name: "Patellar Tendinitis (Jumper's Knee)", description: "Pain below the kneecap, worse after jumping or running", note: "Common in athletes — earlier intervention leads to better outcomes", link: "https://twmedpro.tw/knee-prolo-01/" },
        { name: "Pes Anserine Bursitis", description: "Inner knee pain below the joint, often combined with degeneration", note: "Frequently coexists with osteoarthritis and is easily overlooked", link: "https://twmedpro.tw/knee-prolo-03/" },
      ]
    }
  },
  foot: {
    metaTitle: "Foot & Ankle Pain | Colan Clinic · Luzhou Pain Treatment",
    metaDescription: "Plantar fasciitis, ankle sprain, Achilles tendinitis — ultrasound evaluates fascia thickness, from conservative care to PRP repair.",
    h1: "Foot & Ankle Pain",
    heroSub: "Heel pain, unstable ankle? Accurate assessment before effective repair.",
    introParagraphs: [
      "Doctor, the first step out of bed every morning is the worst. It eases up after a few steps, but after standing for a while it comes back. It's been almost a year. I've tried insoles and physical therapy — neither made a clear difference.",
      "Once plantar fasciitis has been going on for more than three months, it's entered the chronic degeneration phase. During acute inflammation, rest can help. In the chronic phase, what's needed is repair. Those are two completely different things.",
      "There's another issue with foot problems that's often missed. Ankle instability and arch collapse cause the knee and lumbar spine to compensate. Over time, even when the plantar fasciitis improves, the knee and back start acting up. Evaluating everything together is the only way to address everything together."
    ],
    clinicNote: "Many treatments only mask pain temporarily. Without repairing the damaged structure, the problem tends to return. Our goal isn't just to stop the pain — it's to help you get back to the life you had before.",
    brandStatement: "Not just pain relief — repair.",
    cardsHeading: "Common causes (there may be more than one)",
    treatmentsHeading: "Treatment options (tailored to the cause)",
    category: {
      slug: "foot",
      treatmentIntro: "Different causes require completely different treatments. Without identifying the source, results are often limited.",
      treatments: ["Ultrasound-guided injection", "Prolotherapy", "PRP", "SportVis"],
      cards: [
        { name: "Plantar Fasciitis", description: "Worst pain at the first step in the morning, tenderness at the heel", note: "Chronic cases over three months take significantly longer to repair than acute ones", link: "https://twmedpro.tw/plantar-fasciitis-first-step-pain/" },
        { name: "Chronic Ankle Instability", description: "Repeated sprains and persistent unsteadiness, ligaments not fully healed", note: "A first sprain not properly treated often leads to long-term instability", link: "https://twmedpro.tw/ankle-sprain-complete-guide/" },
        { name: "Achilles Tendinitis", description: "Pain and swelling along the Achilles tendon, worse when running or climbing", note: "Easily confused with plantar fasciitis — the tender point is in a different location", link: "https://twmedpro.tw/plantar-fasciitis-first-step-pain/" },
        { name: "Metatarsalgia / Morton's Neuroma", description: "Forefoot pain and numbness, more noticeable when wearing shoes", note: "Ultrasound can directly confirm the size and location of the neuroma", link: "https://twmedpro.tw/plantar-fasciitis-first-step-pain/" },
      ]
    }
  },
  "elbow-wrist": {
    metaTitle: "Elbow & Wrist Pain | Colan Clinic · Luzhou Pain Treatment",
    metaDescription: "Tennis elbow, carpal tunnel syndrome, TFCC injury, trigger finger — ultrasound confirms tendon and nerve status, precise repair.",
    h1: "Elbow & Wrist Pain",
    heroSub: "Outer elbow pain, weak wrist? Check tendon condition before reaching for an injection.",
    introParagraphs: [
      "Doctor, I've had three corticosteroid injections for tennis elbow. Each time it gets better for a couple of months, then comes back. Now even lifting a bowl or turning a door handle hurts, and it's affecting my work.",
      "When the pain keeps returning after three injections, that usually means one thing: the problem isn't inflammation, it's tendon degeneration. Corticosteroids suppress inflammation, but they can't repair a degenerated tendon. Once the inflammation settles, the degeneration is still there — and the next time you exert force, it flares up again.",
      "Ultrasound shows the condition of the tendon directly, confirming the extent of degeneration before deciding whether prolotherapy or PRP is the right approach. Knowing what you're dealing with is what allows you to choose the right tool."
    ],
    clinicNote: "Many treatments only mask pain temporarily. Without repairing the damaged structure, the problem tends to return. Our goal isn't just to stop the pain — it's to help you get back to the life you had before.",
    brandStatement: "Not just pain relief — repair.",
    cardsHeading: "Common causes (there may be more than one)",
    treatmentsHeading: "Treatment options (tailored to the cause)",
    category: {
      slug: "elbow-wrist",
      treatmentIntro: "Stopping inflammation and repairing tendon degeneration are two different things. Confirming the extent of damage first leads to better outcomes.",
      treatments: ["Ultrasound-guided injection", "Nerve hydrodissection", "PRP", "SportVis"],
      cards: [
        { name: "Tennis Elbow (Lateral Epicondylitis)", description: "Outer elbow pain when gripping or wringing", note: "Recurring pain usually means only the inflammation was treated, not the tendon degeneration", link: "https://twmedpro.tw/tennis-elbow-treatment-guide/" },
        { name: "Carpal Tunnel Syndrome", description: "Palm numbness, waking at night with hand tingling, median nerve compression", note: "Ultrasound can measure nerve cross-sectional area on the spot — diagnosis in one visit", link: "https://twmedpro.tw/cts-intro/" },
        { name: "TFCC Injury", description: "Ulnar-side wrist pain when twisting or opening bottles", note: "Commonly mistaken for a simple sprain — delays beyond three months affect rotation function", link: "https://twmedpro.tw/hand-numbness-causes/" },
        { name: "Trigger Finger", description: "Finger catching or locking in the morning, difficulty straightening", note: "Recurring locking means the tendon sheath has degenerated — repair, not just pain relief, is needed", link: "https://twmedpro.tw/tg-finger/" },
      ]
    }
  },
  neuropathy: {
    metaTitle: "Neuropathy & Nerve Pain | Colan Clinic · Luzhou Pain Treatment",
    metaDescription: "Diabetic peripheral neuropathy (DPN), nerve compression, hand and foot numbness — neurology-trained evaluation, ultrasound nerve assessment.",
    h1: "Neuropathy & Nerve Pain",
    heroSub: "Numbness, burning, electric sensations? Find out if it's nerve compression or neuropathy.",
    introParagraphs: [
      "Doctor, my diabetes is fairly well controlled, but the soles of my feet are always numb — especially at night, like walking on cotton. Sometimes there's a burning sensation too. The neurologist said it's diabetic neuropathy, but medication seems to be the only option they offered.",
      "Diabetic peripheral neuropathy is treatable — it's not something you just have to wait out. Blood sugar control is the foundation, but once nerve damage has occurred, controlling blood sugar alone isn't enough. Damaged nerves need additional intervention to repair.",
      "Something else that's easy to miss is double crush syndrome. A nerve may be compressed at several points at once — treating only one of them won't fully resolve the symptoms. Dr. Lin's neurology training makes it easier to identify all the compression sites during evaluation, and ultrasound confirms the nerve's condition during the appointment."
    ],
    clinicNote: "Nerve damage that goes untreated tends to progress — and becomes harder to reverse over time. Our goal isn't just to manage symptoms — it's to give nerves a real opportunity to recover.",
    brandStatement: "Not just pain relief — repair.",
    cardsHeading: "Common causes (there may be more than one)",
    treatmentsHeading: "Treatment options (tailored to the cause)",
    category: {
      slug: "neuropathy",
      treatmentIntro: "Different causes require completely different treatments. The earlier nerve problems are addressed, the greater the chance of recovery.",
      treatments: ["Nerve hydrodissection", "PRP hydrodissection", "Botulinum toxin for pain"],
      cards: [
        { name: "Diabetic Peripheral Neuropathy (DPN)", description: "Foot numbness, burning pain, and nighttime tingling in diabetic patients", note: "Blood sugar control is foundational, but nerve repair requires additional intervention", link: "https://twmedpro.tw/dpn_prp/" },
        { name: "Nerve Hydrodissection (Double Crush)", description: "Nerve compressed at multiple sites — treating one alone is often insufficient", note: "A neurology background makes it easier to identify all compression points", link: "https://twmedpro.tw/neural-hydrodissection-release-nerve-adhesion/" },
        { name: "Carpal Tunnel Syndrome", description: "Median nerve compression causing palm numbness and nighttime waking", note: "Ultrasound can measure nerve cross-sectional area on the spot — diagnosis in one visit", link: "https://twmedpro.tw/cts-intro/" },
        { name: "Ulnar Nerve Compression", description: "Numbness in the little and ring fingers, worse when elbow is bent", note: "Often mistaken for a cervical spine problem — differential diagnosis is essential", link: "https://twmedpro.tw/hand-numbness-causes/" },
      ]
    }
  },
}

export const ja: Record<string, LocalizedSymptom> = {
  shoulder: {
    metaTitle: "肩の痛み｜ゴラン診療所・蘆洲疼痛治療",
    metaDescription: "五十肩、腱板断裂、肩峰下インピンジメント。超音波で正確に評価し、本当の原因を特定します。",
    h1: "肩の痛み",
    heroSub: "腕が上がらない、夜間痛、肩が固まる？まず問題の場所を確認しましょう。",
    introParagraphs: [
      "先生、もう3ヶ月ほど肩が痛くて、腕を上げると痛く、夜中に寝返りで目が覚めます。着替えも辛いです。",
      "肩の痛みには多くの原因があります。五十肩、腱板断裂、肩峰下インピンジメント、それぞれ対処法がまったく違います。間違った治療は効かないだけでなく、悪化させることもあります。腱板がすでに断裂しているなら、ストレッチを続けると断裂が広がる可能性があります。",
      "診察中に超音波でその場で問題の場所を確認できます。報告書を待つ必要も、推測する必要もありません。"
    ],
    clinicNote: "多くの治療は一時的な痛みの緩和にとどまります。損傷した構造を修復しなければ、問題は繰り返しやすいです。ここでの目標は、痛みをなくすだけでなく、元の生活に戻れるようにすることです。",
    brandStatement: "止痛だけでなく、修復を。",
    cardsHeading: "よくある原因（複数の場合もあります）",
    treatmentsHeading: "適切な治療選択肢（原因によって異なります）",
    category: {
      slug: "shoulder",
      treatmentIntro: "原因が違えば、治療法もまったく異なります。問題の部位を確認しないと、治療効果が限られることがあります。",
      treatments: ["超音波導引注射", "PRP", "SportVis"],
      cards: [
        { name: "五十肩（拘縮性関節包炎）", description: "関節包の拘縮により腕が上がらない、夜間痛がある", note: "突然ではなく、徐々に動きが制限されていくことが多いです", link: "https://twmedpro.tw/frozen-shoulder-adhesive-capsulitis/" },
        { name: "腱板断裂", description: "腕を頭上に挙げると痛い、腱の変性または急性断裂", note: "リハビリを続けると断裂が広がる可能性があります。まず重症度の確認が重要です", link: "https://twmedpro.tw/shoulder-pain-causes-frozen-shoulder-rotator-cuff/" },
        { name: "肩峰下インピンジメント", description: "腕を上げると肩峰下方が痛い、繰り返す摩擦による炎症", note: "腱板の問題と同時に存在することが多く、一緒に評価が必要です", link: "https://twmedpro.tw/frozen-shoulder-adhesive-capsulitis/" },
        { name: "肩峰下滑液包炎", description: "肩の深部の腫脹痛、安静時にも不快感がある", note: "超音波で滑液包の液体貯留を直接確認できます", link: "https://twmedpro.tw/frozen-shoulder-adhesive-capsulitis/" },
      ]
    }
  },
  neck: {
    metaTitle: "頸部の痛み｜ゴラン診療所・蘆洲疼痛治療",
    metaDescription: "頸椎神経根症、頸因性頭痛、筋膜性疼痛。神経内科専門の評価、超音波で圧迫部位を確認。",
    h1: "頸部の痛み",
    heroSub: "首のこわばり、腕のしびれ、頭痛？頸椎から来ているかどうか確認しましょう。",
    introParagraphs: [
      "先生、首がずっと張っていて、頭を回すと痛いことがあります。最近は手がしびれるようになり、朝起きると頭も痛いです。",
      "頸部の問題は見逃されやすいですが、頸椎の問題は広範囲に影響します。頸椎の神経根が圧迫されると、肩・腕・指に症状が出ることがあります。頸因性頭痛は偏頭痛と誤診されることが多く、治療の方向がまったく異なります。",
      "林医師の神経内科の背景により、症状が頸椎から来ているかどうかをより正確に判断できます。超音波で診察中に圧迫状況を確認できます。"
    ],
    clinicNote: "放置された頸椎の神経圧迫は悪化しやすいです。ここでの目標は、痛みをなくすだけでなく、元の生活に戻れるようにすることです。",
    brandStatement: "止痛だけでなく、修復を。",
    cardsHeading: "よくある原因（複数の場合もあります）",
    treatmentsHeading: "適切な治療選択肢（原因によって異なります）",
    category: {
      slug: "neck",
      treatmentIntro: "神経圧迫と筋緊張では、まったく異なるアプローチが必要です。原因の特定が大切です。",
      treatments: ["神経解套注射", "超音波導引注射", "PRP"],
      cards: [
        { name: "頸椎神経根症", description: "首の痛みと腕のしびれ・脱力、神経圧迫", note: "肩の痛みと手のしびれがある場合、まず頸椎神経を除外する必要があります", link: "https://twmedpro.tw/cervical-spine-symptoms/" },
        { name: "頸因性頭痛", description: "首のこわばりに起因する頭痛、偏頭痛と誤診されることが多い", note: "治療の対象は頭痛ではなく、頸椎です", link: "https://twmedpro.tw/cervicogenic-headache/" },
        { name: "頸部筋膜性疼痛", description: "頸肩の筋緊張と圧痛点、デスクワーカーに多い", note: "姿勢が根本原因であることが多く、一緒に改善する必要があります", link: "https://twmedpro.tw/cervical-spine-symptoms/" },
        { name: "頸椎椎間板ヘルニア", description: "椎間板が神経を圧迫し、腕のしびれと脱力を引き起こす", note: "MRIで軽度と言われても症状が強いことがあります。実際の評価が重要です", link: "https://twmedpro.tw/cervical-spine-symptoms/" },
      ]
    }
  },
  back: {
    metaTitle: "腰痛・下背部痛｜ゴラン診療所・蘆洲疼痛治療",
    metaDescription: "椎間板ヘルニア、仙腸関節炎、筋膜性疼痛。超音波で圧迫部位を特定し、非手術で修復。",
    h1: "腰痛・下背部痛",
    heroSub: "なかなか治らない腰痛？まず正確な圧迫部位を特定しましょう。",
    introParagraphs: [
      "先生、腰が痛くてもう半年近くになります。MRIでは軽度と言われましたが、1時間以上座っていると辛くなります。立ち上がるときが一番しんどくて、臀部まで痛みが広がることもあります。",
      "これはよくある状況です。MRIは構造を見るものですが、構造が軽度でも症状が重いことはあります。椎間板ヘルニア、仙腸関節炎、筋膜性疼痛、場所が違えば症状は似ていても治療の方向はまったく異なります。",
      "仙腸関節炎の方が腰椎の問題だと思い込んで、何ヶ月も脊椎牽引をしても効果がなく、ようやく方向が違ったとわかる、そういうことが実際によくあります。超音波で診察中にその場で圧迫部位を確認できます。報告書を待つ必要も、推測する必要もありません。"
    ],
    clinicNote: "多くの治療は一時的な痛みの緩和にとどまります。損傷した構造を修復しなければ、問題は繰り返しやすいです。ここでの目標は、痛みをなくすだけでなく、元の生活に戻れるようにすることです。",
    brandStatement: "止痛だけでなく、修復を。",
    cardsHeading: "よくある原因（複数の場合もあります）",
    treatmentsHeading: "適切な治療選択肢（原因によって異なります）",
    category: {
      slug: "back",
      treatmentIntro: "原因が違えば、治療法もまったく異なります。問題の部位を確認しないと、治療効果が限られることがあります。",
      treatments: ["超音波導引注射", "増生療法", "神経解套注射", "PRP"],
      cards: [
        { name: "腰椎椎間板ヘルニア", description: "腰痛と足のしびれ・坐骨神経痛、前屈で悪化", note: "神経圧迫が続く場合は、早めの評価をお勧めします", link: "https://twmedpro.tw/lbp/" },
        { name: "仙腸関節炎", description: "臀部上方の深部痛、座位や階段昇降で増悪", note: "腰椎の問題と間違われやすく、圧痛点の位置が異なります", link: "https://twmedpro.tw/low-back-pain-location/" },
        { name: "坐骨神経痛", description: "臀部から大腿・下腿への放散痛、しびれ・刺痛感", note: "足のしびれがすべて坐骨神経痛とは限りません。鑑別診断が重要です", link: "https://twmedpro.tw/sciatica-deep-gluteal-syndrome/" },
        { name: "筋膜性疼痛", description: "腰背部の筋緊張と圧痛点、デスクワーカーに多い", note: "純粋な筋肉の問題は、理学療法に反応しやすいことが多いです", link: "https://twmedpro.tw/lbp/" },
      ]
    }
  },
  hip: {
    metaTitle: "股関節・臀部の痛み｜ゴラン診療所・蘆洲疼痛治療",
    metaDescription: "股関節変性、梨状筋症候群、大転子疼痛症候群、鼠径部痛。超音波評価、非手術修復。",
    h1: "股関節・臀部の痛み",
    heroSub: "臀部深部の痛み、跛行、立ち上がりにくい？まず問題の場所を特定しましょう。",
    introParagraphs: [
      "先生、臀部の奥がずっと鈍く痛んでいます。長時間座った後に立ち上がるときが特につらく、階段でも悪化します。整形外科では股関節の問題と言われましたが、人工関節が必要なほどではないと言われました。",
      "股関節・臀部の痛みは誤診されやすいです。臀部深部の痛みが必ずしも股関節自体の問題とは限りません。梨状筋による坐骨神経の圧迫、大転子の腱の問題、仙腸関節炎も似た感覚を引き起こす可能性があります。",
      "超音波で股関節・腱・周囲の軟部組織を診察中に評価し、問題の場所を確認してから治療方針を決定します。"
    ],
    clinicNote: "多くの治療は一時的な痛みの緩和にとどまります。損傷した構造を修復しなければ、問題は繰り返しやすいです。ここでの目標は、痛みをなくすだけでなく、元の生活に戻れるようにすることです。",
    brandStatement: "止痛だけでなく、修復を。",
    cardsHeading: "よくある原因（複数の場合もあります）",
    treatmentsHeading: "適切な治療選択肢（原因によって異なります）",
    category: {
      slug: "hip",
      treatmentIntro: "股関節と周囲の腱の問題では、まったく異なるアプローチが必要です。原因の特定が大切です。",
      treatments: ["超音波導引注射", "PRP", "BMAC"],
      cards: [
        { name: "股関節変形性関節症", description: "股関節の軟骨摩耗、歩行・階段・長時間立位で痛みが増悪", note: "関節の隙間が残っている限り、人工関節だけが選択肢ではありません", link: "https://twmedpro.tw/knee-prolo-01/" },
        { name: "大転子疼痛症候群（GTPS）", description: "大腿外側上部の痛み、横向き寝や階段昇降で増悪", note: "股関節疾患と間違われやすく、圧痛点の位置が異なります", link: "https://twmedpro.tw/lbp/" },
        { name: "梨状筋症候群", description: "臀部深部の痛みが座位後に大腿へ放散、坐骨神経痛に類似", note: "臀部の痛みがすべて坐骨神経痛とは限りません。鑑別診断が重要です", link: "https://twmedpro.tw/sciatica-deep-gluteal-syndrome/" },
        { name: "股関節インピンジメント（FAI）", description: "股関節深部の痛み、長時間座位や股関節屈曲で増悪", note: "若いスポーツ選手に多く、早期評価の方が改善しやすいです", link: "https://twmedpro.tw/sciatica-deep-gluteal-syndrome/" },
      ]
    }
  },
  knee: {
    metaTitle: "膝関節の変性・疼痛｜ゴラン診療所・蘆洲疼痛治療",
    metaDescription: "変形性膝関節症、半月板損傷、ジャンパー膝。重症度に応じてヒアルロン酸からBMACまで選択。",
    h1: "膝関節の変性・疼痛",
    heroSub: "階段が痛い、しゃがめない、膝が腫れる？軟骨と関節の実際の状態を確認しましょう。",
    introParagraphs: [
      "先生、膝が変性していると言われて、整形外科では人工関節が必要だと言われました。でもまだ50代で、手術は避けたいと思っています。他に選択肢はないでしょうか。",
      "変性は終点ではなくプロセスです。変性と聞くと人工関節しかないと思う方が多いですが、関節の隙間が残っていて関節軟骨がまだ完全に摩耗していない限り、再生医療が介入できる余地があります。",
      "手術を決める前に、まず一つのことを確認する価値があります。軟骨はどれだけ残っているか、半月板に問題があるか。超音波で実際の状態を評価してから治療方向を決める方が、いきなり手術を予約するより合理的です。"
    ],
    clinicNote: "多くの治療は一時的な痛みの緩和にとどまります。損傷した構造を修復しなければ、問題は繰り返しやすいです。ここでの目標は、痛みをなくすだけでなく、元の生活に戻れるようにすることです。",
    brandStatement: "止痛だけでなく、修復を。",
    cardsHeading: "よくある原因（複数の場合もあります）",
    treatmentsHeading: "適切な治療選択肢（重症度によって異なります）",
    category: {
      slug: "knee",
      treatmentIntro: "軽度の変性と重度の変性では、まったく異なるアプローチが必要です。まず損傷の程度を確認することが大切です。",
      treatments: ["ヒアルロン酸注射", "PRP", "BMAC", "SportVis"],
      cards: [
        { name: "変形性膝関節症", description: "軟骨の摩耗による疼痛・腫脹・可動域制限", note: "関節の隙間が残っている限り、人工関節だけが選択肢ではありません", link: "https://twmedpro.tw/knee-prolo-01/" },
        { name: "半月板損傷", description: "膝の内外側深部痛、しゃがみや回旋動作で増悪", note: "手術が必ずしも必要ではありません。超音波で保存的修復の可能性を評価します", link: "https://twmedpro.tw/knee-prolo-03/" },
        { name: "膝蓋腱炎(ジャンパー膝)", description: "膝蓋骨下方の疼痛、跳躍・ランニング後に増悪", note: "スポーツ選手に多く、早期介入の方が改善しやすいです", link: "https://twmedpro.tw/knee-prolo-01/" },
        { name: "鵞足滑液包炎", description: "膝内側下方の疼痛、変性と腱の問題が合併することが多い", note: "変形性膝関節症と同時に存在することが多く、見落とされやすいです", link: "https://twmedpro.tw/knee-prolo-03/" },
      ]
    }
  },
  foot: {
    metaTitle: "足・足首の痛み｜ゴラン診療所・蘆洲疼痛治療",
    metaDescription: "足底筋膜炎、足関節捻挫、アキレス腱炎。超音波で筋膜の厚みを評価し、保存療法からPRPまで。",
    h1: "足・足首の痛み",
    heroSub: "踵の痛み、足首の不安定感？正確な評価から始めましょう。",
    introParagraphs: [
      "先生、毎朝ベッドから出た最初の一歩が一番痛いです。少し歩くと和らぐのですが、長時間立っているとまた痛くなります。もう1年近く続いています。インソールも試しましたし、理学療法もしましたが、はっきりした改善がありません。",
      "足底筋膜炎が3ヶ月以上続くと、慢性変性期に入っています。急性炎症期は安静にすれば良くなりますが、慢性変性期に必要なのは修復です。この2つはまったく別のことです。",
      "足の問題でもう一つ見落とされやすいことがあります。足首の不安定性や足弓の低下は、膝と腰椎に代償を強いります。時間が経つと、足底筋膜炎が良くなっても今度は膝や腰が出てきます。まとめて評価することで、まとめて対処できます。"
    ],
    clinicNote: "多くの治療は一時的な痛みの緩和にとどまります。損傷した構造を修復しなければ、問題は繰り返しやすいです。ここでの目標は、痛みをなくすだけでなく、元の生活に戻れるようにすることです。",
    brandStatement: "止痛だけでなく、修復を。",
    cardsHeading: "よくある原因(複数の場合もあります)",
    treatmentsHeading: "適切な治療選択肢(原因によって異なります)",
    category: {
      slug: "foot",
      treatmentIntro: "原因が違えば、治療法もまったく異なります。問題の部位を確認しないと、治療効果が限られることがあります。",
      treatments: ["超音波導引注射", "増生療法", "PRP", "SportVis"],
      cards: [
        { name: "足底筋膜炎", description: "起床時の最初の一歩が最も痛い、踵内側に圧痛", note: "3ヶ月以上の慢性例は、急性例より修復に時間がかかります", link: "https://twmedpro.tw/plantar-fasciitis-first-step-pain/" },
        { name: "慢性足関節不安定症", description: "繰り返す捻挫・歩行時の不安定感、靭帯が完全に修復していない", note: "最初の捻挫を適切に治療しなかったことが、長期的な不安定につながることが多いです", link: "https://twmedpro.tw/ankle-sprain-complete-guide/" },
        { name: "アキレス腱炎", description: "アキレス腱の疼痛・腫脹、ランニングや坂道で増悪", note: "足底筋膜炎と混同されやすいですが、圧痛点の位置が異なります", link: "https://twmedpro.tw/plantar-fasciitis-first-step-pain/" },
        { name: "中足骨痛症・モートン神経腫", description: "前足部の疼痛・しびれ、靴を履いた時に顕著", note: "超音波で神経腫の大きさと位置を直接確認できます", link: "https://twmedpro.tw/plantar-fasciitis-first-step-pain/" },
      ]
    }
  },
  "elbow-wrist": {
    metaTitle: "肘・手首の痛み｜ゴラン診療所・蘆洲疼痛治療",
    metaDescription: "テニス肘、手根管症候群、TFCC損傷、ばね指。超音波で腱・神経の状態を確認し精密修復。",
    h1: "肘・手首の痛み",
    heroSub: "肘の外側が痛い、手首に力が入らない？注射の前にまず腱の状態を確認しましょう。",
    introParagraphs: [
      "先生、テニス肘でステロイド注射を3回受けました。毎回2、3ヶ月は良くなるのですが、また戻ってきます。今は茶碗を持つのもドアノブを回すのも痛くて、仕事にも支障が出ています。",
      "3回注射しても繰り返す場合、それは通常一つのことを意味します。問題は炎症ではなく、腱の変性です。ステロイドは炎症を抑えますが、変性した腱は修復できません。炎症が治まっても変性はそのままで、次に力を入れるとまた再発します。",
      "超音波で腱の状態を直接確認し、変性の程度を把握してから増生療法にするかPRPにするかを決めます。何が問題かがわかることで、正しいツールを選べます。"
    ],
    clinicNote: "多くの治療は一時的な痛みの緩和にとどまります。損傷した構造を修復しなければ、問題は繰り返しやすいです。ここでの目標は、痛みをなくすだけでなく、元の生活に戻れるようにすることです。",
    brandStatement: "止痛だけでなく、修復を。",
    cardsHeading: "よくある原因(複数の場合もあります)",
    treatmentsHeading: "適切な治療選択肢(原因によって異なります)",
    category: {
      slug: "elbow-wrist",
      treatmentIntro: "炎症を止めることと腱の変性を修復することは別物です。まず損傷の程度を確認することで、より良い結果につながります。",
      treatments: ["超音波導引注射", "神経解套注射", "PRP", "SportVis"],
      cards: [
        { name: "テニス肘(外側上顆炎)", description: "肘外側の痛み、物を握ったり雑巾を絞るときに増悪", note: "痛みが繰り返す場合、炎症だけを治療していて腱の変性が修復されていないことが多いです", link: "https://twmedpro.tw/tennis-elbow-treatment-guide/" },
        { name: "手根管症候群", description: "手掌のしびれ・夜間の痺れで目が覚める、正中神経圧迫", note: "超音波でその場で神経の断面積を測定でき、1回の診察で診断が可能です", link: "https://twmedpro.tw/cts-intro/" },
        { name: "TFCC損傷", description: "手首尺側の疼痛、ねじり動作やボトル開栓時に増悪", note: "単純な捻挫と間違われやすく、3ヶ月以上経つと回転機能に影響が出ます", link: "https://twmedpro.tw/hand-numbness-causes/" },
        { name: "ばね指", description: "朝の指の引っかかり・ロッキング、伸展困難", note: "繰り返し引っかかるということは腱鞘が変性しています。止痛だけでなく修復が必要です", link: "https://twmedpro.tw/tg-finger/" },
      ]
    }
  },
  neuropathy: {
    metaTitle: "神経障害・神経痛｜ゴラン診療所・蘆洲疼痛治療",
    metaDescription: "糖尿病性末梢神経障害(DPN)、神経圧迫、手足のしびれ。神経内科専門の評価、超音波で神経状態を確認。",
    h1: "神経障害・神経痛",
    heroSub: "しびれ、灼熱感、電気が走る感覚？神経圧迫か神経障害か、まず確認しましょう。",
    introParagraphs: [
      "先生、糖尿病はそこそこコントロールできているのですが、足の裏がずっとしびれています。夜になると特にひどくて、綿の上を歩いているような感じです。灼熱感もあります。神経内科では糖尿病性神経障害と言われましたが、薬以外に方法がないような言い方でした。",
      "糖尿病性神経障害は治療できます。ただ待つしかないわけではありません。血糖コントロールは基本ですが、神経がすでに損傷している場合、血糖コントロールだけでは不十分です。損傷した神経には追加の修復介入が必要です。",
      "見落とされやすいもう一つのことがダブルクラッシュです。神経は複数の箇所で同時に圧迫されていることがあります。そのうち一箇所だけを治療しても、症状は完全には緩和しません。林医師の神経内科の訓練背景により、評価時にすべての圧迫部位を特定しやすくなります。超音波で診察中にその場で確認できます。"
    ],
    clinicNote: "放置された神経障害は進行しやすく、回復も難しくなります。ここでの目標は症状を管理するだけでなく、神経が本当に回復できる機会を作ることです。",
    brandStatement: "止痛だけでなく、修復を。",
    cardsHeading: "よくある原因(複数の場合もあります)",
    treatmentsHeading: "適切な治療選択肢(原因によって異なります)",
    category: {
      slug: "neuropathy",
      treatmentIntro: "原因が違えば、治療法もまったく異なります。神経の問題は早期に対処するほど、回復の可能性が高まります。",
      treatments: ["神経解套注射", "PRP神経水解", "ボツリヌス毒素疼痛注射"],
      cards: [
        { name: "糖尿病性末梢神経障害(DPN)", description: "糖尿病患者の足のしびれ・灼熱感・夜間の刺痛", note: "血糖コントロールは基本ですが、神経修復には追加の介入が必要です", link: "https://twmedpro.tw/dpn_prp/" },
        { name: "神経解套(ダブルクラッシュ)", description: "複数箇所で神経が圧迫、一箇所だけの治療では不十分なことも", note: "神経内科の背景があることで、すべての圧迫部位を特定しやすくなります", link: "https://twmedpro.tw/neural-hydrodissection-release-nerve-adhesion/" },
        { name: "手根管症候群", description: "正中神経圧迫による手掌のしびれ・夜間の目覚め", note: "超音波でその場で神経の断面積を測定でき、1回の診察で診断が可能です", link: "https://twmedpro.tw/cts-intro/" },
        { name: "尺骨神経圧迫", description: "小指・薬指のしびれ、肘を曲げると悪化", note: "頸椎の問題と間違われることが多く、鑑別診断が必要です", link: "https://twmedpro.tw/hand-numbness-causes/" },
      ]
    }
  },
}

export const cta = {
  zh: {
    heading: "不確定你的問題是哪一種？",
    subheading: "如果症狀已經持續一段時間，或是做過治療但沒有明顯改善，建議先透過 LINE 描述狀況。",
    description: "醫師會幫你初步判斷方向，再決定是否需要進一步評估。",
    line: { label: "先讓醫師評估", href: "https://line.me/R/ti/p/@twmedpro" },
    email: { label: "Email 詢問", href: "mailto:info@colanclinic.com" },
    firstVisit: { label: "了解評估流程", href: "/zh/first-visit/" },
  },
  en: {
    heading: "Not sure which category your symptoms fall under?",
    subheading: "If your symptoms have been going on for a while, or treatment hasn't made a clear difference, send us a message via LINE first.",
    description: "We'll help you figure out the right direction before deciding on next steps.",
    line: { label: "Get a preliminary assessment", href: "https://line.me/R/ti/p/@twmedpro" },
    whatsapp: { label: "WhatsApp", href: "https://wa.me/886900000000" },
    email: { label: "Email Us", href: "mailto:info@colanclinic.com" },
    firstVisit: { label: "Learn about the evaluation process", href: "/en/first-visit/" },
  },
  ja: {
    heading: "どの症状に当てはまるかわからない方へ",
    subheading: "症状がしばらく続いている、またはリハビリを受けても改善が見られない場合は、まずLINEで状況をお伝えください。",
    description: "医師が方向性を初期判断した上で、さらなる評価が必要かどうかをお伝えします。",
    line: { label: "まず医師に相談する", href: "https://line.me/R/ti/p/@twmedpro" },
    email: { label: "メールでお問い合わせ", href: "mailto:info@colanclinic.com" },
    firstVisit: { label: "評価プロセスについて", href: "/ja/first-visit/" },
  },
}

export const indexMeta = {
  zh: {
    title: "症狀查詢｜鈷嵐診所・蘆洲疼痛治療",
    description: "肩頸、下背、膝蓋、足部、手肘手腕、神經病變——依症狀找到對應的治療方向。",
    h1: "症狀查詢",
    intro: "選擇最接近你症狀的分類，找到可能的原因和治療方向。"
  },
  en: {
    title: "Find Your Symptom | Colan Clinic · Luzhou Pain Treatment",
    description: "Shoulder, back, knee, foot, elbow-wrist, neuropathy — find the right treatment path for your condition.",
    h1: "Find Your Symptom",
    intro: "Select the category that best matches your symptoms to explore possible causes and treatment options."
  },
  ja: {
    title: "症状から探す｜ゴラン診療所・蘆洲疼痛治療",
    description: "肩・腰・膝・足・肘手首・神経障害——症状から適切な治療の方向性を見つける。",
    h1: "症状から探す",
    intro: "あなたの症状に最も近い分類を選んで、考えられる原因と治療の方向性を確認してください。"
  },
}
