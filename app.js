'use strict';

// ==================== DATA ====================

const OX_QUIZ = [
  { q:"간호사는 병원에서만 일할 수 있다.", a:false, tip:"학교 보건실, 119 구급대, 항공기, 연구소, 가정방문 간호까지 다양한 곳에서 일합니다!" },
  { q:"간호사 국가고시는 1년에 1번만 시행된다.", a:true, tip:"매년 1월에 1회 시행됩니다. 합격률은 보통 90~95%입니다." },
  { q:"남자는 간호사가 될 수 없다.", a:false, tip:"남성 간호사가 매년 증가해 현재 약 3만 명이 활동 중입니다!" },
  { q:"간호사가 되려면 반드시 4년제 대학을 나와야 한다.", a:false, tip:"3년제 간호전문대학교도 있습니다. 다만 4년제 학사 취득이 점점 중요해지고 있습니다." },
  { q:"간호사는 의사의 처방 없이 약을 투여할 수 없다.", a:true, tip:"의약품 투여는 반드시 의사의 처방이 필요합니다. 의사·간호사 협업의 핵심입니다." },
  { q:"항공 간호사는 비행기 안에서 환자를 직접 치료한다.", a:true, tip:"의료 전용 항공기에서 중증 환자를 이송하며 치료합니다. 닥터헬기 간호사도 있습니다." },
  { q:"보건교사는 학교에서 일하는 간호사이다.", a:true, tip:"보건교사 자격증을 취득한 간호사가 학교 보건실에서 학생 건강을 관리합니다." },
  { q:"병원 간호사는 야간 근무를 하지 않아도 된다.", a:false, tip:"낮·저녁·밤 3교대 근무를 합니다. 야간수당이 있어 급여는 올라갑니다." },
  { q:"응급실 간호사와 중환자실 간호사의 역할은 완전히 같다.", a:false, tip:"응급실은 초기 평가·안정화, 중환자실은 지속적 집중 모니터링이 주 역할입니다." },
  { q:"간호사 국가고시 합격률은 매년 90% 이상이다.", a:true, tip:"합격률은 약 90~95%이지만, 4년간의 힘든 공부가 바탕입니다." },
];

const SITUATIONS = [
  {
    scene:"SCENE 01", emoji:"👧", title:"엄마를 찾는 아이",
    setup:"응급실에서 7세 여자아이가 혼자 울고 있습니다. 작은 목소리로 \"엄마... 어디 있어요?\"라고 묻습니다.",
    choices:[
      { text:"\"지금 엄마 찾고 있으니까 잠깐 기다려.\"", score:1 },
      { text:"\"많이 무서웠겠다. 선생님이 옆에 있을게요. 이름이 뭐예요?\"", score:5 },
      { text:"\"울지 마. 엄마 금방 와.\"", score:0 },
      { text:"\"여기 앉아 있으면 엄마 찾아줄게요. 괜찮아요?\"", score:3 },
    ],
    bestTip:"감정을 먼저 인정하고 이름을 물어 연결감을 형성하는 것이 최선입니다."
  },
  {
    scene:"SCENE 02", emoji:"🧑", title:"말 없는 청소년",
    setup:"14세 남자아이가 온몸에 멍이 든 채 입원했습니다. 아무 말도 하지 않고 시선을 피합니다.",
    choices:[
      { text:"\"왜 말을 안 해요? 상처가 어떻게 됐는지 알아야 치료해줘요.\"", score:1 },
      { text:"\"많이 아팠겠다. 지금은 안전한 곳이야. 말하기 싫으면 안 해도 돼.\"", score:5 },
      { text:"\"다친 데 어디예요? 빨리 말해줘야 치료해줄 수 있잖아요.\"", score:0 },
      { text:"\"여기 있으면 괜찮아. 말하고 싶을 때 얘기해줘요.\"", score:3 },
    ],
    bestTip:"강요 없이 안전감을 먼저 심어주는 것이 핵심입니다. 학대 피해 청소년에게 중요한 접근법입니다."
  },
  {
    scene:"SCENE 03", emoji:"👴", title:"통증 호소하는 어르신",
    setup:"75세 할아버지가 \"여기가 너무 아프다\"고 하십니다. 어디가 아픈지 정확히 말씀하지 못하십니다.",
    choices:[
      { text:"\"어디가 아프신지 정확히 말씀해 주셔야 해요.\"", score:0 },
      { text:"\"많이 불편하시죠. 손으로 아픈 곳을 가리켜 주실 수 있을까요?\"", score:5 },
      { text:"\"조금 있다가 의사 선생님이 오실 거예요.\"", score:1 },
      { text:"\"통증이 언제부터 시작됐나요? 천천히 말씀해 주세요.\"", score:3 },
    ],
    bestTip:"말로 표현하기 어려운 분께는 비언어적 소통(손짓)을 활용하는 것이 효과적입니다."
  },
  {
    scene:"SCENE 04", emoji:"👩", title:"수술 전날 밤",
    setup:"내일 수술을 앞두고 40대 여성 환자가 손을 떨며 \"너무 무서워요...\"라고 합니다.",
    choices:[
      { text:"\"걱정 마세요, 별거 아니에요.\"", score:0 },
      { text:"\"무서우시죠. 수술 전날은 다들 그래요. 어떤 점이 제일 걱정되세요?\"", score:5 },
      { text:"\"괜찮을 거예요. 의사 선생님 믿으세요.\"", score:1 },
      { text:"\"심호흡을 해보세요. 제가 곁에 있을게요.\"", score:3 },
    ],
    bestTip:"감정을 축소하지 않고 정상화하며, 구체적인 걱정을 열어주는 대화가 최선입니다."
  },
];

const TRIAGE = [
  { id:1,  scenario:"교통사고로 실려온 40대 남성. 의식이 없고 팔에서 심한 출혈이 있습니다.", answer:"RED",    why:"의식 소실 + 심한 출혈 → 즉각 처치 없으면 사망합니다." },
  { id:2,  scenario:"화재 현장에서 구조된 60대 여성. 의식은 있으나 다리 골절이 의심되며 통증을 호소합니다.", answer:"YELLOW", why:"의식 있음 + 골절 의심 → 심각하지만 30분 내 처치 가능합니다." },
  { id:3,  scenario:"긁힌 상처의 20대 여성. 의식과 활력징후 모두 정상, 통증 경미합니다.", answer:"GREEN",  why:"의식 정상 + 경미한 상처 → 대기 후 치료 가능합니다." },
  { id:4,  scenario:"폭발 사고 현장의 50대 남성. 의식 없음, 호흡 없음, 심박 없음, 동공 고정 확대.", answer:"BLACK",  why:"심폐정지 + 소생 불가 징후 → 극도의 자원 제한 상황에서 BLACK 판정입니다." },
  { id:5,  scenario:"갑작스러운 흉부 통증의 55세 남성. 식은땀이 나고 왼쪽 팔이 저립니다.", answer:"RED",    why:"심근경색 의심 증상 → 즉시 처치 없으면 생명 위험입니다." },
  { id:6,  scenario:"가벼운 타박상을 입은 10세 아이. 울고 있지만 의식과 활력징후 정상입니다.", answer:"GREEN",  why:"정상 활력징후 + 경미한 타박상 → 비응급 상태입니다." },
  { id:7,  scenario:"약물 과다 복용이 의심되는 30대 여성. 의식은 있으나 점점 졸려합니다.", answer:"RED",    why:"의식 저하 진행 중 + 약물 과다복용 의심 → 즉각 개입이 필요합니다." },
  { id:8,  scenario:"지진 현장에서 발견된 70대 남성. 의식 없음, 호흡 없음, 시반(보랏빛 반점)이 나타남.", answer:"BLACK",  why:"시반 발생 → 사망 확인, 소생 불가 상태입니다." },
  { id:9,  scenario:"손목 골절로 내원한 25세 여성. 통증이 심하지만 의식과 호흡은 정상입니다.", answer:"YELLOW", why:"손목 골절 + 의식 정상 → 빠른 처치 필요하나 즉각 생명 위험은 없습니다." },
  { id:10, scenario:"갑작스러운 극심한 두통의 45세 여성. '살면서 겪어본 것 중 가장 심한 두통'이라 합니다.", answer:"RED",    why:"'벼락 두통'은 뇌지주막하출혈 신호 → 즉시 CT 촬영 및 처치가 필요합니다." },
  { id:11, scenario:"발목을 삔 16세 학생. 통증과 부종이 있지만 천천히 걸을 수 있습니다.", answer:"GREEN",  why:"단순 염좌 + 보행 가능 → 비응급 처치로 충분합니다." },
  { id:12, scenario:"심한 호흡 곤란의 8세 아이. 의식은 있으나 입술이 파랗게 변하기 시작합니다.", answer:"RED",    why:"청색증 시작 + 소아 호흡 곤란 → 즉각 처치 없으면 생명 위험입니다." },
];

const APTITUDE_Q = [
  { q:"응급 상황에서 나는?", opts:[
    { text:"당장 뛰어들어 해결한다", type:"ER" },
    { text:"침착하게 전체 상황을 먼저 파악한다", type:"ICU" },
    { text:"정해진 절차대로 체계적으로 움직인다", type:"OR" },
    { text:"주변 사람들을 먼저 안정시킨다", type:"COMMUNITY" },
  ]},
  { q:"가장 뿌듯함을 느끼는 순간은?", opts:[
    { text:"위기를 내 손으로 해결했을 때", type:"ER" },
    { text:"환자가 조금씩 안정되는 걸 지켜볼 때", type:"ICU" },
    { text:"일을 실수 없이 완벽하게 마쳤을 때", type:"OR" },
    { text:"내 말 한마디가 누군가의 습관을 바꿀 때", type:"COMMUNITY" },
  ]},
  { q:"나를 가장 잘 표현하는 말은?", opts:[
    { text:"빠르고 결단력 있다", type:"ER" },
    { text:"꼼꼼하고 끈기 있다", type:"ICU" },
    { text:"정확하고 완벽주의다", type:"OR" },
    { text:"따뜻하고 교육적이다", type:"COMMUNITY" },
  ]},
  { q:"가장 싫은 환경은?", opts:[
    { text:"조용하고 반복적인 환경", type:"ER" },
    { text:"변화가 너무 많은 혼돈스러운 환경", type:"ICU" },
    { text:"실수가 용납되는 느슨한 환경", type:"OR" },
    { text:"사람과의 소통이 없는 환경", type:"COMMUNITY" },
  ]},
  { q:"이상적인 롤모델은?", opts:[
    { text:"영웅적으로 활약하는 사람", type:"ER" },
    { text:"묵묵히 환자 곁을 지키는 사람", type:"ICU" },
    { text:"정밀한 기술을 가진 전문가", type:"OR" },
    { text:"지역사회를 바꾸는 교육자", type:"COMMUNITY" },
  ]},
  { q:"10년 후 나의 모습은?", opts:[
    { text:"현장 최전선에서 여전히 뛰고 있다", type:"ER" },
    { text:"중증 환자 케어의 전문가로 인정받는다", type:"ICU" },
    { text:"수술실의 없어선 안 될 핵심 파트너다", type:"OR" },
    { text:"학생들의 건강을 지키는 따뜻한 선생님이다", type:"COMMUNITY" },
  ]},
  { q:"친구와 갈등이 생겼을 때 나는?", opts:[
    { text:"지금 당장 이야기해서 풀어버린다", type:"ER" },
    { text:"한 발 물러서서 관찰하고 생각한다", type:"ICU" },
    { text:"원인을 분석해서 해결책을 제시한다", type:"OR" },
    { text:"감정부터 공감하고 천천히 풀어간다", type:"COMMUNITY" },
  ]},
  { q:"내 공부 스타일은?", opts:[
    { text:"몰아서 짧고 강하게 (스프린트형)", type:"ER" },
    { text:"매일 꾸준히 오래 (마라톤형)", type:"ICU" },
    { text:"완벽한 계획표대로 체계적으로", type:"OR" },
    { text:"친구들과 함께 가르쳐주며", type:"COMMUNITY" },
  ]},
  { q:"팀 프로젝트에서 내 역할은?", opts:[
    { text:"앞에서 이끄는 리더", type:"ER" },
    { text:"뒤에서 흐름을 점검하는 관찰자", type:"ICU" },
    { text:"꼼꼼하게 마무리하는 담당", type:"OR" },
    { text:"팀 분위기를 살리는 조율자", type:"COMMUNITY" },
  ]},
  { q:"여가 시간에 즐기는 활동은?", opts:[
    { text:"격렬한 운동이나 액션 영화", type:"ER" },
    { text:"조용한 독서나 명상", type:"ICU" },
    { text:"손으로 하는 취미 (퍼즐·뜨개질·그림)", type:"OR" },
    { text:"친구 만나기, SNS 활동", type:"COMMUNITY" },
  ]},
];

const APTITUDE_TYPES = {
  ER:        { title:"ER FIGHTER",       label:"응급실형",   color:"#E63946", icon:"🚨", desc:"위기 속에서 빛나는 당신! 빠른 판단력과 강인한 체력이 무기입니다.", tips:["매일 10분 CPR 연습 영상 시청하기","응급처치 1급 자격증 준비하기","지역 병원 응급실 체험 봉사 신청하기"] },
  ICU:       { title:"ICU GUARDIAN",     label:"중환자실형", color:"#0891B2", icon:"🛡️", desc:"환자 곁에서 24시간 지키는 수호자! 집중력과 꼼꼼함으로 위중한 환자의 회복을 돕습니다.", tips:["생리학·해부학 기초 공부 시작하기","의학 다큐멘터리 시청하기","의료 봉사 활동에 참여하기"] },
  OR:        { title:"OR PERFECTIONIST", label:"수술실형",   color:"#7C3AED", icon:"⚕️", desc:"완벽을 추구하는 정밀 전문가! 수술실의 한 치 오차도 용납하지 않는 정확성이 강점입니다.", tips:["손 기술 취미 찾기 (뜨개질·종이접기)","의학 용어 50개 외우기","수술 관련 의학 유튜브 구독하기"] },
  COMMUNITY: { title:"COMMUNITY HEALER", label:"보건교사형", color:"#16A34A", icon:"🌿", desc:"지역사회를 치유하는 교육자! 건강 지식을 전달하고 예방에 힘씁니다.", tips:["보건 관련 책 읽기","학교 보건실 선생님께 진로 여쭤보기","건강 관련 UCC·발표 자료 만들어보기"] },
};

const QA_LIST = [
  { q:"간호사 연봉은 얼마나 되나요?", a:"신규 간호사는 연 3,000~3,500만 원 수준입니다. 경력 5년 이상이면 4,000~5,000만 원, 수간호사는 6,000만 원 이상도 가능합니다. 미국·캐나다 등 해외 취업 시 연 1억 원 이상도 현실입니다." },
  { q:"남자도 간호사가 될 수 있나요?", a:"물론입니다! 국내 남성 간호사는 약 3만 명으로 빠르게 늘고 있습니다. 응급실·중환자실·군 병원에서 특히 많이 활약하며, 군 간호장교 과정도 있습니다." },
  { q:"피를 보면 무서운데 간호사를 해도 될까요?", a:"대부분의 간호사가 처음엔 비슷하게 느낍니다! 실습을 거듭하면서 자연스럽게 익숙해집니다. 피를 보지 않는 분야(보건교사, 연구간호사, 행정간호사)도 많으니 걱정 마세요." },
  { q:"간호사가 되려면 공부를 얼마나 해야 하나요?", a:"간호학과 4년 + 국가고시 준비입니다. 해부학·생리학·약리학 등 어려운 과목이 많습니다. 하지만 졸업 후 거의 바로 취업이 되는 몇 안 되는 전공 중 하나입니다!" },
  { q:"간호사와 의사는 사이가 안 좋나요?", a:"드라마와 달리 실제 병원에서는 팀워크가 생명입니다. 의사는 진단·처방, 간호사는 처치·관찰·교육을 담당하며 서로를 전문가로 존중합니다." },
  { q:"야간 근무는 정말 힘든가요?", a:"솔직히 힘듭니다! 병원 간호사는 낮-저녁-밤 3교대를 합니다. 그러나 야간 수당이 높고, 낮에 개인 시간을 쓸 수 있다는 장점도 있습니다." },
  { q:"담당 환자가 사망하면 어떻게 되나요?", a:"간호사도 사람이기에 많이 슬픕니다. 대부분의 병원에 심리 지원 프로그램이 있고, 동료들끼리 서로 돕습니다. 시간이 지나면서 생명의 소중함을 더 깊이 이해하게 됩니다." },
  { q:"결혼 후에도 계속 일할 수 있나요?", a:"네! 간호사 면허는 평생 유지됩니다. 출산 후 육아휴직을 쓰고 복귀하거나, 파트타임·클리닉 근무로 전환하는 분들도 많습니다." },
  { q:"주사를 실수로 잘못 놓으면 어떻게 되나요?", a:"그래서 간호사는 '5 RIGHT' 원칙(올바른 환자·약·용량·경로·시간)을 철저히 지킵니다. 실수가 발생하면 즉시 보고하고 팀이 함께 대응합니다." },
  { q:"간호사 말고 비슷한 의료 직업에는 어떤 것이 있나요?", a:"임상병리사(검사), 방사선사(X-ray), 물리치료사(재활), 작업치료사, 의무기록사, 응급구조사 등이 있습니다. 간호사와 협력하는 직종이므로 함께 알아보면 좋습니다!" },
];

const RANKS = [
  { min:300, icon:"🦸", title:"NURSE-AVENGER", sub:"생명의 수호자",  color:"#D97706" },
  { min:220, icon:"💉", title:"SPECIALIST",    sub:"베테랑 간호사", color:"#0891B2" },
  { min:140, icon:"🩺", title:"TRAINEE",       sub:"실습 간호사",   color:"#7C3AED" },
  { min:0,   icon:"🩹", title:"ROOKIE",        sub:"견습생",         color:"#64748B" },
];

const TRIAGE_COLORS = {
  RED:    { bg:"#E63946", label:"RED",    desc:"즉시 처치" },
  YELLOW: { bg:"#D97706", label:"YELLOW", desc:"30분 내 처치" },
  GREEN:  { bg:"#16A34A", label:"GREEN",  desc:"대기 후 처치" },
  BLACK:  { bg:"#374151", label:"BLACK",  desc:"소생 불가" },
};

const TABS = [
  { id:"ox",  icon:"🎯", label:"OX퀴즈" },
  { id:"sit", icon:"🎭", label:"상황극" },
  { id:"tri", icon:"🚑", label:"트리아지" },
  { id:"apt", icon:"🧭", label:"적성테스트" },
];

// ==================== STATE ====================

const STORAGE_KEY = 'nurse_avengers_v3';

let S = null;

function loadState() {
  try { const d = localStorage.getItem(STORAGE_KEY); return d ? JSON.parse(d) : null; } catch { return null; }
}

function saveState() {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(S)); } catch {}
}

function initState(name) {
  S = {
    name,
    screen: 'ox',
    score: 0,
    oxPts: 0, sitPts: 0, triPts: 0,
    ox:  { idx:0, answered:null, streak:0, done:false },
    sit: { idx:0, answered:null, done:false },
    tri: { idx:0, answered:null, done:false },
    apt: { idx:0, answered:null, scores:{ER:0,ICU:0,OR:0,COMMUNITY:0}, result:null, done:false },
    qa:  { open:{} },
  };
  saveState();
}

function goTo(screen) {
  S.screen = screen;
  saveState();
  render();
}

function getRank() {
  return RANKS.find(r => S.score >= r.min) || RANKS[RANKS.length - 1];
}

function esc(s) {
  return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

// ==================== LAYOUT WRAPPERS ====================

function oxProgress() {
  if (S.ox.done) return '✓';
  if (S.ox.idx === 0 && S.ox.answered === null) return '';
  return `${S.ox.idx}/${OX_QUIZ.length}`;
}
function sitProgress() {
  if (S.sit.done) return '✓';
  if (S.sit.idx === 0 && S.sit.answered === null) return '';
  return `${S.sit.idx}/${SITUATIONS.length}`;
}
function triProgress() {
  if (S.tri.done) return '✓';
  if (S.tri.idx === 0 && S.tri.answered === null) return '';
  return `${S.tri.idx}/${TRIAGE.length}`;
}
function aptProgress() {
  if (S.apt.done && S.apt.result) return APTITUDE_TYPES[S.apt.result].icon;
  if (S.apt.idx === 0 && S.apt.answered === null) return '';
  return `${S.apt.idx}/${APTITUDE_Q.length}`;
}

function topNav() {
  const progs = { ox: oxProgress(), sit: sitProgress(), tri: triProgress(), apt: aptProgress() };
  const isDone = { ox: S.ox.done, sit: S.sit.done, tri: S.tri.done, apt: S.apt.done };
  return `
  <nav class="top-nav">
    ${TABS.map(t => `
      <button class="nav-tab ${S.screen === t.id ? 'active' : ''} ${isDone[t.id] ? 'done' : ''}"
              onclick="goTo('${t.id}')">
        <span class="nav-icon">${t.icon}</span>
        <span class="nav-label">${t.label}</span>
        ${progs[t.id] ? `<span class="nav-prog">${progs[t.id]}</span>` : ''}
      </button>`).join('')}
  </nav>`;
}

function bottomBar() {
  const rank = getRank();
  return `
  <div class="bottom-bar">
    <div class="score-chips">
      <div class="score-chip ${S.oxPts > 0 ? 'chip-active' : ''}">
        <span class="chip-label">OX</span>
        <span class="chip-val">${S.oxPts}pt</span>
      </div>
      <div class="score-chip ${S.sitPts > 0 ? 'chip-active' : ''}">
        <span class="chip-label">상황극</span>
        <span class="chip-val">${S.sitPts}pt</span>
      </div>
      <div class="score-chip ${S.triPts > 0 ? 'chip-active' : ''}">
        <span class="chip-label">트리아지</span>
        <span class="chip-val">${S.triPts}pt</span>
      </div>
    </div>
    <div class="score-total">
      <span class="score-total-rank" style="color:${rank.color}">${rank.icon}</span>
      <span class="score-total-val mono">${S.score}pt</span>
    </div>
  </div>`;
}

function wrapMain(content) {
  return `
  <div class="app-layout">
    ${topNav()}
    <div class="content-area">${content}</div>
    ${bottomBar()}
  </div>`;
}

// ==================== SCREENS ====================

function renderWelcome() {
  const saved = loadState();
  const resumeHtml = saved && saved.name ? `
    <div class="resume-card">
      <div class="resume-label">이전 기록이 있습니다</div>
      <div class="resume-name">${esc(saved.name)} · ${saved.score}pt</div>
      <button class="btn btn-secondary" onclick="resumeSession()">이어서 진행하기</button>
    </div>` : '';

  return `
  <div class="screen screen-welcome">
    <div class="welcome-hero">
      <div class="hero-badge mono">NURSE · AVENGERS</div>
      <h1 class="hero-title">간호사<br>진로 특강</h1>
      <p class="hero-sub">생명을 지키는 직업의 세계로</p>
    </div>
    <div class="welcome-form">
      ${resumeHtml}
      <div class="form-label">이름을 입력하세요</div>
      <input id="nameInput" class="name-input" type="text" placeholder="홍길동" maxlength="10" autocomplete="off">
      <button class="btn btn-coral" onclick="startNew()">시작하기 →</button>
    </div>
  </div>`;
}

function renderOX() {
  const ox = S.ox;

  if (ox.done) {
    return wrapMain(`
      <div class="screen-inner center">
        <div class="result-big">🎉</div>
        <div class="result-title">OX 퀴즈 완료!</div>
        <div class="result-score mono">${S.oxPts}pt 획득</div>
        <p class="result-sub">총 ${OX_QUIZ.length}문제 중<br>정답을 맞춰서 얻은 점수입니다.</p>
      </div>`);
  }

  const q = OX_QUIZ[ox.idx];
  const answered = ox.answered;
  let feedbackHtml = '';
  if (answered !== null) {
    const correct = answered === q.a;
    feedbackHtml = `
      <div class="feedback ${correct ? 'feedback-correct' : 'feedback-wrong'}">
        <div class="feedback-icon">${correct ? '✅ 정답!' : '❌ 오답!'}</div>
        <div class="feedback-tip">${q.tip}</div>
        ${ox.streak >= 3 ? `<div class="bonus-badge">🔥 ${ox.streak}연속 정답! +5 보너스!</div>` : ''}
        <button class="btn btn-coral btn-full" onclick="oxNext()">다음 문제 →</button>
      </div>`;
  }

  return wrapMain(`
    <div class="screen-inner">
      <div class="quiz-header">
        <span class="quiz-progress mono">Q ${ox.idx + 1} / ${OX_QUIZ.length}</span>
        ${ox.streak >= 2 ? `<span class="streak-badge">🔥 ${ox.streak}연속</span>` : ''}
      </div>
      <div class="quiz-card"><p class="quiz-q">${esc(q.q)}</p></div>
      ${answered === null ? `
        <div class="ox-buttons">
          <button class="ox-btn ox-o" onclick="oxAnswer(true)">O</button>
          <button class="ox-btn ox-x" onclick="oxAnswer(false)">X</button>
        </div>` : feedbackHtml}
    </div>`);
}

function renderSit() {
  const sit = S.sit;

  if (sit.done) {
    return wrapMain(`
      <div class="screen-inner center">
        <div class="result-big">🎭</div>
        <div class="result-title">상황극 완료!</div>
        <div class="result-score mono">${S.sitPts}pt 획득</div>
        <p class="result-sub">4가지 장면에서의<br>공감 선택 점수입니다.</p>
      </div>`);
  }

  const sc = SITUATIONS[sit.idx];
  const answered = sit.answered;
  let feedbackHtml = '';
  if (answered !== null) {
    const choice = sc.choices[answered];
    const bar = Math.round((choice.score / 5) * 100);
    feedbackHtml = `
      <div class="feedback feedback-sit">
        <div class="empathy-label">공감 점수</div>
        <div class="empathy-bar-wrap"><div class="empathy-bar" style="width:${bar}%"></div></div>
        <div class="empathy-score mono">+${choice.score * 2}pt</div>
        <div class="feedback-tip">${sc.bestTip}</div>
        <button class="btn btn-coral btn-full" onclick="sitNext()">
          ${sit.idx < SITUATIONS.length - 1 ? '다음 장면 →' : '결과 보기 →'}
        </button>
      </div>`;
  }

  return wrapMain(`
    <div class="screen-inner">
      <div class="scene-header">
        <span class="scene-badge mono">${sc.scene}</span>
        <span class="scene-title">${sc.emoji} ${sc.title}</span>
      </div>
      <div class="scene-setup">${esc(sc.setup)}</div>
      ${answered === null ? `
        <p class="choice-prompt">어떻게 대답하시겠습니까?</p>
        <div class="choices">
          ${sc.choices.map((c,i) => `
            <button class="choice-btn" onclick="sitAnswer(${i})">${esc(c.text)}</button>`).join('')}
        </div>` : feedbackHtml}
    </div>`);
}

function renderTri() {
  const tri = S.tri;

  if (tri.done) {
    return wrapMain(`
      <div class="screen-inner center">
        <div class="result-big">🏥</div>
        <div class="result-title">트리아지 완료!</div>
        <div class="result-score mono">${S.triPts}pt 획득</div>
        <p class="result-sub">12가지 시나리오 중<br>정확히 분류한 케이스 점수입니다.</p>
      </div>`);
  }

  const sc = TRIAGE[tri.idx];
  const answered = tri.answered;
  let feedbackHtml = '';
  if (answered !== null) {
    const correct = answered === sc.answer;
    const col = TRIAGE_COLORS[sc.answer];
    feedbackHtml = `
      <div class="feedback ${correct ? 'feedback-correct' : 'feedback-wrong'}">
        <div class="feedback-icon">${correct ? '✅ 정답!' : '❌ 오답!'}</div>
        <div class="triage-answer-tag" style="background:${col.bg}">${col.label} — ${col.desc}</div>
        <div class="feedback-tip">${sc.why}</div>
        <button class="btn btn-coral btn-full" onclick="triNext()">
          ${tri.idx < TRIAGE.length - 1 ? '다음 →' : '결과 보기 →'}
        </button>
      </div>`;
  }

  return wrapMain(`
    <div class="screen-inner">
      <div class="quiz-header">
        <span class="quiz-progress mono">CASE ${sc.id} / ${TRIAGE.length}</span>
      </div>
      <div class="quiz-card"><p class="quiz-q">${esc(sc.scenario)}</p></div>
      ${answered === null ? `
        <p class="choice-prompt">어느 등급으로 분류하시겠습니까?</p>
        <div class="triage-btns">
          ${Object.entries(TRIAGE_COLORS).map(([k,v]) => `
            <button class="triage-btn" style="background:${v.bg}" onclick="triAnswer('${k}')">
              <span class="triage-btn-label">${k}</span>
              <span class="triage-btn-sub">${v.desc}</span>
            </button>`).join('')}
        </div>` : feedbackHtml}
    </div>`);
}

function renderApt() {
  const apt = S.apt;

  if (apt.done && apt.result) {
    const t = APTITUDE_TYPES[apt.result];
    const rank = getRank();
    const qaHtml = QA_LIST.map((item, i) => {
      const open = S.qa.open[i];
      return `
        <div class="qa-item ${open ? 'qa-open' : ''}" onclick="toggleQa(${i})">
          <div class="qa-q"><span>${esc(item.q)}</span><span class="qa-arrow">${open ? '▲' : '▼'}</span></div>
          ${open ? `<div class="qa-a">${esc(item.a)}</div>` : ''}
        </div>`;
    }).join('');

    return wrapMain(`
      <div class="screen-inner">
        <div class="apt-result-card" style="border-color:${t.color}">
          <div class="apt-icon">${t.icon}</div>
          <div class="apt-type-title" style="color:${t.color}">${t.title}</div>
          <div class="apt-type-label">${t.label}</div>
          <p class="apt-desc">${t.desc}</p>
          <div class="apt-tips">
            <div class="apt-tips-label mono">지금부터 해볼 수 있는 것</div>
            ${t.tips.map(tip => `<div class="apt-tip">✦ ${tip}</div>`).join('')}
          </div>
        </div>
        <div class="final-rank-card" style="border-color:${rank.color}">
          <div class="rank-icon">${rank.icon}</div>
          <div class="rank-title mono" style="color:${rank.color}">${rank.title}</div>
          <div class="rank-sub">${rank.sub}</div>
          <div class="rank-name">${esc(S.name)} 님</div>
          <div class="rank-score mono">${S.score}pt</div>
          <button class="btn btn-share" onclick="shareResult()">결과 공유하기 📤</button>
        </div>
      </div>`);
  }

  const q = APTITUDE_Q[apt.idx];
  return wrapMain(`
    <div class="screen-inner">
      <div class="quiz-header">
        <span class="quiz-progress mono">Q ${apt.idx + 1} / ${APTITUDE_Q.length}</span>
      </div>
      <div class="quiz-card"><p class="quiz-q">${esc(q.q)}</p></div>
      <div class="apt-opts">
        ${q.opts.map((o,i) => `
          <button class="apt-opt ${apt.answered === i ? 'apt-opt-selected' : ''}" onclick="aptAnswer(${i})">
            ${esc(o.text)}
          </button>`).join('')}
      </div>
      ${apt.answered !== null ? `<button class="btn btn-coral btn-full" onclick="aptNext()">다음 →</button>` : ''}
    </div>`);
}

// ==================== RENDER ====================

const SCREENS = {
  welcome: renderWelcome,
  ox:      renderOX,
  sit:     renderSit,
  tri:     renderTri,
  apt:     renderApt,
};

function render() {
  const fn = SCREENS[S ? S.screen : 'welcome'] || renderWelcome;
  document.getElementById('app').innerHTML = fn();
  window.scrollTo(0, 0);
  const ni = document.getElementById('nameInput');
  if (ni) ni.addEventListener('keydown', e => { if (e.key === 'Enter') startNew(); });
}

// ==================== HANDLERS ====================

function startNew() {
  const input = document.getElementById('nameInput');
  const name = input ? input.value.trim() : '';
  if (!name) { if (input) input.style.borderColor = '#E63946'; return; }
  initState(name);
  render();
}

function resumeSession() {
  S = loadState();
  if (S && !S.screen) S.screen = 'ox';
  render();
}

function oxAnswer(val) {
  if (S.ox.answered !== null) return;
  const q = OX_QUIZ[S.ox.idx];
  const correct = val === q.a;
  S.ox.answered = val;
  if (correct) {
    S.ox.streak++;
    let pts = 10;
    if (S.ox.streak >= 3) pts += 5;
    S.score += pts; S.oxPts += pts;
  } else {
    S.ox.streak = 0;
  }
  saveState(); render();
}
function oxNext() {
  S.ox.idx++;
  S.ox.answered = null;
  if (S.ox.idx >= OX_QUIZ.length) S.ox.done = true;
  saveState(); render();
}

function sitAnswer(i) {
  if (S.sit.answered !== null) return;
  const sc = SITUATIONS[S.sit.idx];
  S.sit.answered = i;
  const pts = sc.choices[i].score * 2;
  S.score += pts; S.sitPts += pts;
  saveState(); render();
}
function sitNext() {
  S.sit.idx++;
  S.sit.answered = null;
  if (S.sit.idx >= SITUATIONS.length) S.sit.done = true;
  saveState(); render();
}

function triAnswer(val) {
  if (S.tri.answered !== null) return;
  const sc = TRIAGE[S.tri.idx];
  S.tri.answered = val;
  if (val === sc.answer) { S.score += 15; S.triPts += 15; }
  saveState(); render();
}
function triNext() {
  S.tri.idx++;
  S.tri.answered = null;
  if (S.tri.idx >= TRIAGE.length) S.tri.done = true;
  saveState(); render();
}

function aptAnswer(i) { S.apt.answered = i; saveState(); render(); }
function aptNext() {
  if (S.apt.answered === null) return;
  const q = APTITUDE_Q[S.apt.idx];
  S.apt.scores[q.opts[S.apt.answered].type]++;
  S.apt.idx++;
  S.apt.answered = null;
  if (S.apt.idx >= APTITUDE_Q.length) {
    let best = null, bestVal = -1;
    for (const [k,v] of Object.entries(S.apt.scores)) { if (v > bestVal) { bestVal = v; best = k; } }
    S.apt.result = best;
    S.apt.done = true;
  }
  saveState(); render();
}

function toggleQa(i) { S.qa.open[i] = !S.qa.open[i]; saveState(); render(); }

function shareResult() {
  const rank = getRank();
  const apt  = S.apt.result ? APTITUDE_TYPES[S.apt.result].title : '-';
  const text = `[Nurse Avengers] ${S.name} — ${rank.title} · ${S.score}pt · 유형: ${apt} 🏥`;
  if (navigator.share) {
    navigator.share({ title:'Nurse Avengers 결과', text }).catch(() => {});
  } else {
    navigator.clipboard.writeText(text).then(() => alert('클립보드에 복사되었습니다!')).catch(() => alert(text));
  }
}

// ==================== INIT ====================

(function() {
  const saved = loadState();
  S = saved || null;
  if (S && !S.screen) S.screen = 'ox';
  render();
})();
