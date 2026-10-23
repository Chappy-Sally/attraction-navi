const quizData = [
  {
    question: "願いについて考えた時,いちばん起こりやすいのは？",
    options: [
      { text: "考えすぎて頭がいっぱいになる", icon: "🌿", type: "calm" },
      { text: "そもそも何を願いたいのか分からなくなる", icon: "📝", type: "clarify" },
      { text: "叶った未来を想像するとワクワクする", icon: "🌈", type: "imagine" },
      { text: "叶うまで自分が何とかしなきゃと思う", icon: "🎈", type: "release" }
    ]
  },
  {
    question: "モヤモヤした時,いちばん助かりそうなのは？",
    options: [
      { text: "まず落ち着いてホッとしたい", icon: "🍵", type: "calm" },
      { text: "書き出して頭の中を整理したい", icon: "✍️", type: "clarify" },
      { text: "楽しい未来に気持ちを切り替えたい", icon: "✨", type: "imagine" },
      { text: "背負っているものを降ろしたい", icon: "🪽", type: "release" }
    ]
  },
  {
    question: "「引き寄せ」で,楽しそうと思うのは？",
    options: [
      { text: "深呼吸や安心できる習慣", icon: "🌿", type: "calm" },
      { text: "ノートに願いや気持ちを書くこと", icon: "📔", type: "clarify" },
      { text: "叶った場面を自由に妄想すること", icon: "🌈", type: "imagine" },
      { text: "心配や執着を手放すこと", icon: "🫧", type: "release" }
    ]
  },
  {
    question: "願いが動かないと感じた時,あなたはどうなりやすい？",
    options: [
      { text: "不安になって何度も確認したくなる", icon: "😳", type: "calm" },
      { text: "願い方が間違っているのか考え込む", icon: "🤔", type: "clarify" },
      { text: "別の楽しい未来を思い描いてみたくなる", icon: "💫", type: "imagine" },
      { text: "自分の役割以上のことまで頑張りがち", icon: "🎒", type: "release" }
    ]
  },
  {
    question: "どんな言葉が,いちばんしっくりくる？",
    options: [
      { text: "大丈夫。まず安心しよう", icon: "🌱", type: "calm" },
      { text: "私は本当はどうしたい？", icon: "💗", type: "clarify" },
      { text: "叶った1時間後、何してる？", icon: "🌟", type: "imagine" },
      { text: "これは本当に私の役割？", icon: "🕊️", type: "release" }
    ]
  },
  {
    question: "何か始める時,止まりやすい理由は？",
    options: [
      { text: "不安が大きくなって動けなくなる", icon: "🌧️", type: "calm" },
      { text: "選択肢が多くて決められない", icon: "🌀", type: "clarify" },
      { text: "ワクワクできないと動きにくい", icon: "🎨", type: "imagine" },
      { text: "失敗しないよう全部自分で抱える", icon: "📦", type: "release" }
    ]
  },
  {
    question: "毎日続けるなら,どれがラクそう？",
    options: [
      { text: "1分だけ呼吸を整える", icon: "🌬️", type: "calm" },
      { text: "ひとこと願いを書く", icon: "🖊️", type: "clarify" },
      { text: "数分だけ楽しい妄想をする", icon: "🏝️", type: "imagine" },
      { text: "今日の心配をひとつ手放す", icon: "🎈", type: "release" }
    ]
  },
  {
    question: "願いを叶えたい時,つい増えやすいのは？",
    options: [
      { text: "焦りや心配", icon: "💦", type: "calm" },
      { text: "頭の中の言葉や分析", icon: "💭", type: "clarify" },
      { text: "楽しいアイデアやイメージ", icon: "🎆", type: "imagine" },
      { text: "やらなきゃ、私が何とかしなきゃ", icon: "📣", type: "release" }
    ]
  },
  {
    question: "今ほしい感覚に,いちばん近いのは？",
    options: [
      { text: "ホッとする安心", icon: "🍀", type: "calm" },
      { text: "自分の本音が分かるスッキリ感", icon: "🔎", type: "clarify" },
      { text: "叶った未来へのワクワク", icon: "🌈", type: "imagine" },
      { text: "もう背負わなくていい自由", icon: "🪽", type: "release" }
    ]
  },
  {
    question: "最後に,今のあなたがやってみたいのは？",
    options: [
      { text: "まず心と体を落ち着かせる", icon: "🌿", type: "calm" },
      { text: "願いや気持ちを言葉にしてみる", icon: "📝", type: "clarify" },
      { text: "叶った世界を遊ぶように想像する", icon: "🎠", type: "imagine" },
      { text: "心配や役割をひとつ降ろす", icon: "🎈", type: "release" }
    ]
  }
];

const resultTypes = {
  calm: {
    title: "安心を整えてから叶えていくタイプ 🌿",
    lead: "今のあなたは、願いを追いかける前に「ホッとできる場所」に戻ると、自分らしい感覚を取り戻しやすそうです。",
    methods: [
      { emoji: "🌬️", name: "深呼吸", desc: "まず体から安心へ。ゆっくり吐くことを意識してみよう。" },
      { emoji: "🍀", name: "しあわせスイッチ", desc: "今ここにある小さな安心や嬉しさをひとつ見つける。" },
      { emoji: "📝", name: "やさしいジャーナリング", desc: "不安を責めずに書き出して、今の気持ちを整理する。" }
    ],
    order: ["深呼吸で安心する", "今ある安心を1つ見つける", "本当はどうしたい？と聞く"],
    message: "願いのために無理に気分を上げなくても大丈夫。まず安心できるところへ戻ってから、次を選んでみよう😊",
    apps: [
      { emoji: "🌿", name: "AI×思い込みカード｜思い込み解放ワークアプリ", desc: "不安や思い込みに気づいて、やさしく安心に戻りたい時に。", url: "https://chappy-sally.github.io/chappy-sally-anshin-navi/" },
      { emoji: "🌈", name: "未来の私に会いに行く", desc: "安心しながら、これからの私や望む暮らしを描きたい時に。", url: "https://chappy-sally.github.io/chappy-sally-mirai/" }
    ]
  },
  clarify: {
    title: "言葉にすると願いが見えてくるタイプ 📝",
    lead: "頭の中だけで考えるより、書いたり言葉にしたりすると「私は本当はどうしたい？」が見えやすいタイプです。",
    methods: [
      { emoji: "📔", name: "オーダーノート", desc: "ぼんやりした願いを、自分の言葉でやさしく形にする。" },
      { emoji: "🔎", name: "事実と解釈を分ける", desc: "起きたことと、自分が意味づけしたことを分けて見る。" },
      { emoji: "💗", name: "本当はどうしたい？", desc: "正解探しより、自分の望みをひとつずつ拾っていく。" }
    ],
    order: ["思っていることを全部書く", "事実と解釈を分ける", "今の私の願いを1つ決める"],
    message: "きれいに書かなくて大丈夫。書きながら願いが変わっても大丈夫。今のあなたの言葉がいちばん大切だよ😊",
    apps: [
      { emoji: "🌿", name: "AI×思い込みカード｜思い込み解放ワークアプリ", desc: "頭の中を整理しながら、本音や思い込みに気づきたい時に。", url: "https://chappy-sally.github.io/chappy-sally-anshin-navi/" },
      { emoji: "🌈", name: "未来の私に会いに行く", desc: "『本当はどうしたい？』から未来の暮らしを言葉にしたい時に。", url: "https://chappy-sally.github.io/chappy-sally-mirai/" }
    ]
  },
  imagine: {
    title: "未来を感じると動き出すタイプ 🌈",
    lead: "「叶ったらどんな感じ？」を遊ぶように想像すると、自然にワクワクやアイデアが湧きやすいタイプです。",
    methods: [
      { emoji: "🌈", name: "叶った1時間後妄想", desc: "叶った瞬間ではなく、その1時間後の日常まで想像してみる。" },
      { emoji: "💌", name: "未来の私からの手紙", desc: "未来の自分から今の自分へ、安心できる言葉を届ける。" },
      { emoji: "🖼️", name: "ビジュアルイメージ", desc: "写真や景色を使って、望む暮らしの感覚を味わう。" }
    ],
    order: ["叶った瞬間を思い浮かべる", "1時間後の自分を見る", "今やりたいことを1つ選ぶ"],
    message: "上手に想像しなくて大丈夫。『うふふっ🤭』となるくらいの楽しい妄想から始めよう🌈",
    apps: [
      { emoji: "🌈", name: "未来の私に会いに行く", desc: "叶った1時間後の私へのワープや、未来の私を楽しく描きたい時に。", url: "https://chappy-sally.github.io/chappy-sally-mirai/" },
      { emoji: "🔮", name: "AI×タロット｜役割手放しワークアプリ", desc: "未来を楽しみながら、今の自分に必要な視点も受け取りたい時に。", url: "https://chappy-sally.github.io/chappy-sally-tarot-navi/" }
    ]
  },
  release: {
    title: "役割を手放すと軽くなるタイプ 🪽",
    lead: "願いを叶えるために、自分の担当以上のことまで背負いやすいかも。まず「どこまでが私の役割？」を分けると軽くなりそうです。",
    methods: [
      { emoji: "🎈", name: "これって誰の役割？", desc: "自分ができることと、相手や未来に任せることを分ける。" },
      { emoji: "🤣", name: "心配係を退職する", desc: "『心配し続けるのは私の仕事ではありません』で一区切り。" },
      { emoji: "🔋", name: "省エネモード", desc: "反論しない、背負わない、納得させない。必要以上に頑張らない。" }
    ],
    order: ["今背負っているものに気づく", "私の役割だけ残す", "あとは託して今に戻る"],
    message: "あなたの役割は、全部をコントロールすることじゃないよ。できることを選んだら、あとは握りしめすぎなくて大丈夫😊",
    apps: [
      { emoji: "🔮", name: "AI×タロット｜役割手放しワークアプリ", desc: "『これって誰の役割？』から、背負いすぎを手放したい時に。", url: "https://chappy-sally.github.io/chappy-sally-tarot-navi/" },
      { emoji: "🌿", name: "AI×思い込みカード｜思い込み解放ワークアプリ", desc: "『こうしなきゃ』の奥にある思い込みも一緒に見てみたい時に。", url: "https://chappy-sally.github.io/chappy-sally-anshin-navi/" }
    ]
  }
};
