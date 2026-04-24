'use strict';

// ═══════════════════════════════════════════════════════════
//                  SLIDE DECK — 수업 자료
// ═══════════════════════════════════════════════════════════

const P1_COLOR = '#0891B2';  // 1교시 — 티얼
const P2_COLOR = '#E63946';  // 2교시 — 코랄

const SLIDES = [
  // ─────────────────────────────────────────────
  // 1 교 시  (45분) — 간호사의 세계
  // ─────────────────────────────────────────────

  { type:'cover', period:1, color:P1_COLOR,
    kicker:'2025 간호사 진로 특강',
    title:'간호사의\n세계로',
    sub:'1교시 · 간호사의 다양한 근무지와 되는 길 (45분)',
  },

  { type:'icebreak', period:1,
    title:'아이스브레이킹 ❄️',
    sub:'수업을 시작하기 전에, 분위기부터 풀어봅니다',
    items:[
      { num:'01', text:'옆자리 친구 이름을 30초 안에 외워보세요!' },
      { num:'02', text:'"간호사" 하면 떠오르는 단어를 하나씩 외쳐보세요.' },
      { num:'03', text:'주변에 간호사가 있는 친구, 손을 들어보세요 🙋' },
    ]
  },

  { type:'section', period:1, color:P1_COLOR,
    num:'PART 01',
    title:'간호사의\n다양한 근무지',
    sub:'간호사는 병원만이 아닙니다'
  },

  { type:'grid', period:1, color:P1_COLOR,
    title:'오늘 알아볼 6가지 근무지',
    items:[
      { icon:'🚨', name:'응급실',      sub:'ER',     color:'#E63946' },
      { icon:'🔴', name:'중환자실',    sub:'ICU',    color:'#0891B2' },
      { icon:'⚕️', name:'수술실',      sub:'OR',     color:'#7C3AED' },
      { icon:'🏫', name:'보건교사',    sub:'SCHOOL', color:'#16A34A' },
      { icon:'🚒', name:'소방 구급대', sub:'119',    color:'#D97706' },
      { icon:'✈️', name:'항공 간호사', sub:'FLIGHT', color:'#F97316' },
    ]
  },

  { type:'theory', period:1, tag:'응급실', color:'#E63946',
    title:'🚨 응급실 (ER)',
    points:[
      '외상·뇌졸중·심정지 등 생명 위협 상황에 즉각 대응',
      '빠른 판단력과 강인한 체력이 필수',
      '24시간 교대 근무, 환자 초기 평가·안정화 담당',
    ],
    img:'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=900&q=80'
  },

  { type:'theory', period:1, tag:'중환자실', color:'#0891B2',
    title:'🔴 중환자실 (ICU)',
    points:[
      '24시간 집중 모니터링, 가장 위중한 환자 케어',
      '집중력과 꼼꼼함이 생명',
      '인공호흡기·심전도 등 복잡한 장비를 다룸',
    ],
    video:'https://www.youtube.com/embed/Nxgdmn7vTsA',
    note:'▶ 현직 ICU 간호사의 실제 하루를 영상으로 확인하세요.'
  },

  { type:'theory', period:1, tag:'수술실', color:'#7C3AED',
    title:'⚕️ 수술실 (OR)',
    points:[
      '집도의의 파트너, 수술 전·중·후 전 과정 담당',
      '무균 원칙이 절대적',
      '정밀한 기구 관리와 기록 작성',
    ],
    img:'https://images.unsplash.com/photo-1551190822-a9333d879b1f?auto=format&fit=crop&w=900&q=80'
  },

  { type:'theory', period:1, tag:'보건교사', color:'#16A34A',
    title:'🏫 보건교사',
    points:[
      '학교 보건실에서 학생의 건강을 지킴',
      '건강 교육 수업을 담당',
      '간호사 면허 + 보건교사 자격증 필요',
    ],
    img:'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=900&q=80'
  },

  { type:'theory', period:1, tag:'소방 구급', color:'#D97706',
    title:'🚒 소방 구급대',
    points:[
      '119 구급차에서 현장 응급처치',
      '가장 먼저 환자를 만나는 사람',
      '소방 공무원 신분, 응급구조사와 협력',
    ],
    img:'https://images.unsplash.com/photo-1543333995-3f5e3ef16b6c?auto=format&fit=crop&w=900&q=80'
  },

  { type:'theory', period:1, tag:'항공 간호', color:'#F97316',
    title:'✈️ 항공 간호사',
    points:[
      '닥터헬기·의료 전용기에서 중증 환자 이송·치료',
      '좁은 공간·고도 변화 속 처치 능력 필요',
      '국내·해외 모두 진출 가능',
    ],
    img:'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=900&q=80'
  },

  { type:'section', period:1, color:'#7C3AED',
    num:'PART 02',
    title:'간호사\n되는 길',
    sub:'중학생부터 간호사까지 5단계'
  },

  { type:'steps', period:1, color:'#7C3AED',
    title:'간호사 되는 길 5단계',
    steps:[
      { num:'01', title:'중·고등학교',     body:'이과 계열 과목 집중(생물·화학). 내신 관리가 간호학과 입학의 첫 단추입니다.' },
      { num:'02', title:'간호학과 입학',   body:'4년제 간호학과 또는 3년제 간호전문대. 경쟁률이 높고 수능 성적이 중요합니다.' },
      { num:'03', title:'임상 실습',       body:'병원에서 직접 실습. 가장 치열하고 가장 많이 성장하는 시간입니다.' },
      { num:'04', title:'국가고시 합격',   body:'연 1회(1월) 시행. 합격률 약 90~95%. 즉시 면허가 발급됩니다!' },
      { num:'05', title:'취업 & 전문화',   body:'병원 취업 → 전문간호사 → 연구 → 해외 진출까지 무한 확장.' },
    ]
  },

  // ─── 학생 참여 : OX 퀴즈 ───
  { type:'activity', period:1, act:'ox', color:'#E63946',
    icon:'🎯',
    title:'OX 퀴즈 게임',
    desc:'간호사에 대한 상식, 정말 알고 있나요?',
    instructions:[
      '폰을 꺼내 오른쪽 QR 코드를 스캔하세요',
      '선생님이 문제를 읽어주면 O 또는 X를 누르세요',
      '정답 +10pt · 3연속 정답 보너스 +5pt',
    ],
    hint:'총 10문제 · 예상 소요 15분'
  },

  // ─── 학생 참여 : 상황극 ───
  { type:'activity', period:1, act:'sit', color:'#D97706',
    icon:'🎭',
    title:'상황극 — 환자와의 대화',
    desc:'내가 간호사라면? 4가지 장면에서 대답을 골라보세요.',
    instructions:[
      '학생 화면 상단 "상황극" 탭으로 이동',
      '각 장면에서 네 가지 선택지 중 하나 선택',
      '공감 점수(0~5점)가 점수로 반영됩니다',
    ],
    hint:'총 4장면 · 예상 소요 15분'
  },

  { type:'closing-period', period:1, color:P1_COLOR,
    title:'1교시 마무리',
    sub:'잠시 쉬어갑니다',
    body:'다음 시간엔 실제 재난 현장에서 간호사가 하는\n"생명을 살리는 판단"을 배웁니다.',
    meta:'— 10분 휴식 —'
  },

  // ─────────────────────────────────────────────
  // 2 교 시  (45분) — 생명을 살리는 판단
  // ─────────────────────────────────────────────

  { type:'cover', period:2, color:P2_COLOR,
    kicker:'2025 간호사 진로 특강',
    title:'생명을 살리는\n판단',
    sub:'2교시 · 트리아지 · 나의 적성 · Q&A (45분)',
  },

  { type:'section', period:2, color:P2_COLOR,
    num:'PART 03',
    title:'트리아지\n(Triage)',
    sub:'재난 현장에서 한정된 자원으로 최대한 많은 생명을 살리는 법'
  },

  { type:'theory', period:2, tag:'개념', color:P2_COLOR,
    title:'트리아지란?',
    points:[
      '대규모 재난 현장에서 환자를 4색으로 분류하는 시스템',
      '간호사의 판단 하나가 생사를 가름',
      '완벽한 치료 < 최대 다수의 생존',
    ],
    img:'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=900&q=80'
  },

  { type:'triage-cards', period:2, color:P2_COLOR,
    title:'4색 분류 체계',
    cards:[
      { color:'#E63946', label:'RED',    sub:'즉시',   desc:'생명 위협. 즉각 처치하지 않으면 사망.', example:'의식 없는 외상, 심근경색 의심' },
      { color:'#D97706', label:'YELLOW', sub:'긴급',   desc:'심각하지만 30분 내 처치 가능.',           example:'골절, 중등도 화상' },
      { color:'#16A34A', label:'GREEN',  sub:'비응급', desc:'경상. 순서를 기다려도 생명 지장 없음.',   example:'가벼운 타박상, 단순 염좌' },
      { color:'#374151', label:'BLACK',  sub:'지연',   desc:'소생 불가능. 제한 자원 하 처치 불가.',    example:'심폐정지 + 소생 불가 징후' },
    ]
  },

  // ─── 학생 참여 : 트리아지 ───
  { type:'activity', period:2, act:'tri', color:P2_COLOR,
    icon:'🚑',
    title:'트리아지 게임',
    desc:'12개의 실제 재난 시나리오를 직접 분류해보세요.',
    instructions:[
      '학생 화면 상단 "트리아지" 탭 클릭',
      '각 시나리오를 RED / YELLOW / GREEN / BLACK으로 분류',
      '정답 +15pt',
    ],
    hint:'총 12 케이스 · 예상 소요 20분 · 이 수업에서 가장 어려운 파트!'
  },

  { type:'section', period:2, color:'#7C3AED',
    num:'PART 04',
    title:'나의 간호사\n적성 유형은?',
    sub:'5가지 유형 중 나에게 맞는 타입을 찾아봅니다'
  },

  { type:'types-grid', period:2, color:'#7C3AED',
    title:'5가지 간호사 유형',
    types:[
      { icon:'🚨', name:'ER FIGHTER',       label:'응급실형',    color:'#E63946', desc:'위기 속에서 빛나는 타입' },
      { icon:'🛡️', name:'ICU GUARDIAN',     label:'중환자실형',  color:'#0891B2', desc:'24시간 지키는 수호자' },
      { icon:'⚕️', name:'OR PERFECTIONIST', label:'수술실형',    color:'#7C3AED', desc:'완벽을 추구하는 전문가' },
      { icon:'🌿', name:'COMMUNITY HEALER', label:'보건교사형',  color:'#16A34A', desc:'지역사회를 치유하는 교육자' },
      { icon:'🔬', name:'SCIENCE MIND',     label:'연구형',      color:'#D97706', desc:'지식으로 발전시키는 탐구자' },
    ]
  },

  // ─── 학생 참여 : 적성 테스트 ───
  { type:'activity', period:2, act:'apt', color:'#7C3AED',
    icon:'🧭',
    title:'나의 적성 테스트',
    desc:'6개의 질문으로 나에게 맞는 유형을 찾아봅니다.',
    instructions:[
      '학생 화면 상단 "적성테스트" 탭 클릭',
      '6개 질문에 솔직하게 답해 주세요',
      '결과에 나오는 "지금부터 해볼 수 있는 것" 꼭 확인!',
    ],
    hint:'총 6문항 · 예상 소요 10분 · 결과를 옆 친구와 비교해 보세요'
  },

  { type:'section', period:2, color:'#0891B2',
    num:'PART 05',
    title:'질문 시간',
    sub:'궁금한 것, 무엇이든 물어보세요'
  },

  { type:'qa-grid', period:2, color:'#0891B2',
    title:'친구들이 많이 물어보는 것들',
    sub:'이 중 궁금한 게 있으면 바로 손 드세요',
    items:[
      { icon:'💰', q:'연봉 얼마?' },
      { icon:'👨', q:'남자도 가능?' },
      { icon:'🩸', q:'피 무서워요' },
      { icon:'📚', q:'공부 얼마나?' },
      { icon:'🌙', q:'야간 근무?' },
      { icon:'💼', q:'결혼 후에도?' },
      { icon:'⚠️', q:'실수하면?' },
      { icon:'🌏', q:'해외 취업?' },
    ]
  },

  { type:'qa-open', period:2, color:'#0891B2',
    title:'자유 질문 시간',
    sub:'지금이 기회입니다',
    tip:'아직 대답 못 들은 질문 있나요?\n\n손을 들고 자유롭게 물어보세요.\n이 직업의 진짜 이야기를 들려드립니다.'
  },

  { type:'closing', period:2, color:P2_COLOR,
    title:'간호사는\n기술이 아니라\n사람을 보는 직업입니다',
    sub:'오늘 체험한 판단과 공감이, 바로 간호의 핵심입니다.',
    meta:'오늘 수업에 참여해 주셔서 감사합니다 💙'
  },
];

// ═══════════════════════════════════════════════════════════
//                   STATE + NAV
// ═══════════════════════════════════════════════════════════

let T = { idx: 0 };
let QR_URL = '';

function cur()       { return SLIDES[T.idx]; }
function next()      { if (T.idx < SLIDES.length - 1) { T.idx++; render(); } }
function prev()      { if (T.idx > 0)                  { T.idx--; render(); } }
function goSlide(i)  { T.idx = Math.max(0, Math.min(SLIDES.length - 1, i)); render(); }

function jumpPeriod(p) {
  const i = SLIDES.findIndex(s => s.period === p);
  if (i >= 0) goSlide(i);
}

// ═══════════════════════════════════════════════════════════
//                   QR CODE (pre-generated)
// ═══════════════════════════════════════════════════════════

function generateQR(url) {
  const tmp = document.createElement('div');
  tmp.style.position = 'absolute';
  tmp.style.left = '-9999px';
  document.body.appendChild(tmp);
  try {
    new QRCode(tmp, {
      text: url, width: 240, height: 240,
      colorDark: '#0D1B2A', colorLight: '#FFFFFF',
      correctLevel: QRCode.CorrectLevel.M,
    });
    setTimeout(() => {
      const canvas = tmp.querySelector('canvas');
      const img    = tmp.querySelector('img');
      if (canvas) QR_URL = canvas.toDataURL();
      else if (img) QR_URL = img.src;
      tmp.remove();
      // Re-render if QR was needed on the current slide
      if (cur().type === 'activity') render();
    }, 60);
  } catch (e) {
    tmp.remove();
  }
}

// ═══════════════════════════════════════════════════════════
//                   RENDER
// ═══════════════════════════════════════════════════════════

function setAccent(color) {
  document.documentElement.style.setProperty('--accent', color);
}

function esc(s) {
  return String(s || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

// ─── slide renderers ───

function rCover(s) {
  return `
    <div class="s-cover">
      <div class="cv-kick">${esc(s.kicker)}</div>
      <h1 class="cv-title">${esc(s.title)}</h1>
      <div class="cv-sub">${esc(s.sub)}</div>
    </div>`;
}

function rIcebreak(s) {
  return `
    <div class="s-ice">
      <div class="ic-head">
        <h1 class="ic-title">${esc(s.title)}</h1>
        <p class="ic-sub">${esc(s.sub)}</p>
      </div>
      <div class="ic-items">
        ${s.items.map(it => `
          <div class="ic-item">
            <div class="ic-num">${esc(it.num)}</div>
            <div class="ic-text">${esc(it.text)}</div>
          </div>`).join('')}
      </div>
    </div>`;
}

function rSection(s) {
  return `
    <div class="s-section">
      <div class="sc-num">${esc(s.num)}</div>
      <h1 class="sc-title">${esc(s.title)}</h1>
      <div class="sc-sub">${esc(s.sub)}</div>
    </div>`;
}

function rGrid(s) {
  return `
    <div class="s-grid">
      <h1 class="gr-title">${esc(s.title)}</h1>
      <div class="gr-cards">
        ${s.items.map(it => `
          <div class="gr-card" style="--c:${it.color}">
            <div class="gr-icon">${it.icon}</div>
            <div class="gr-name">${esc(it.name)}</div>
            <div class="gr-sub mono">${esc(it.sub)}</div>
          </div>`).join('')}
      </div>
    </div>`;
}

function rTheory(s) {
  const media = s.video
    ? `<div class="th-media"><iframe src="${esc(s.video)}" allow="accelerometer; autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe></div>`
    : s.img
    ? `<div class="th-media"><img src="${esc(s.img)}" alt=""></div>`
    : '';
  const pts = s.points
    ? `<ul class="th-points">${s.points.map(p => `<li>${esc(p)}</li>`).join('')}</ul>`
    : '';
  return `
    <div class="s-theory ${s.img || s.video ? '' : 'no-media'}">
      <div class="th-text">
        ${s.tag ? `<div class="th-tag" style="color:${s.color};border-color:${s.color}66;background:${s.color}12">${esc(s.tag)}</div>` : ''}
        <h1 class="th-title">${esc(s.title)}</h1>
        ${pts}
        ${s.note ? `<div class="th-note">${esc(s.note)}</div>` : ''}
      </div>
      ${media}
    </div>`;
}

function rSteps(s) {
  return `
    <div class="s-steps">
      <h1 class="st-title">${esc(s.title)}</h1>
      <div class="st-list">
        ${s.steps.map(it => `
          <div class="st-item">
            <div class="st-num">${esc(it.num)}</div>
            <div class="st-body">
              <div class="st-h">${esc(it.title)}</div>
              <div class="st-p">${esc(it.body)}</div>
            </div>
          </div>`).join('')}
      </div>
    </div>`;
}

function rActivity(s) {
  const qrHtml = QR_URL
    ? `<img src="${QR_URL}" alt="QR">`
    : `<div class="qr-placeholder">QR 생성 중...</div>`;
  return `
    <div class="s-act">
      <div class="ac-left">
        <div class="ac-head">
          <div class="ac-icon">${s.icon}</div>
          <div class="ac-tag mono">학생 참여</div>
        </div>
        <h1 class="ac-title">${esc(s.title)}</h1>
        <p class="ac-desc">${esc(s.desc)}</p>
        <div class="ac-rules">
          ${s.instructions.map((it, i) => `
            <div class="ac-rule">
              <div class="ac-ri">${i + 1}</div>
              <div class="ac-rt">${esc(it)}</div>
            </div>`).join('')}
        </div>
        <div class="ac-hint">💡 ${esc(s.hint)}</div>
      </div>
      <div class="ac-right">
        <div class="ac-qr-card">
          <div class="ac-qr-label mono">📱 SCAN</div>
          <div class="ac-qr-box">${qrHtml}</div>
          <div class="ac-qr-url mono">${esc(location.origin)}</div>
        </div>
      </div>
    </div>`;
}

function rClosingPeriod(s) {
  return `
    <div class="s-cp">
      <div class="cp-icon">☕</div>
      <h1 class="cp-title">${esc(s.title)}</h1>
      <div class="cp-sub">${esc(s.sub)}</div>
      <div class="cp-body">${esc(s.body)}</div>
      <div class="cp-meta mono">${esc(s.meta)}</div>
    </div>`;
}

function rTriage(s) {
  return `
    <div class="s-tri">
      <h1 class="tr-title">${esc(s.title)}</h1>
      <div class="tr-grid">
        ${s.cards.map(c => `
          <div class="tr-card" style="--c:${c.color}">
            <div class="tr-row">
              <div class="tr-label">${esc(c.label)}</div>
              <div class="tr-sub mono">${esc(c.sub)}</div>
            </div>
            <div class="tr-desc">${esc(c.desc)}</div>
            <div class="tr-ex mono">예시 · ${esc(c.example)}</div>
          </div>`).join('')}
      </div>
    </div>`;
}

function rTypes(s) {
  return `
    <div class="s-types">
      <h1 class="tp-title">${esc(s.title)}</h1>
      <div class="tp-grid">
        ${s.types.map(t => `
          <div class="tp-card" style="--c:${t.color}">
            <div class="tp-icon">${t.icon}</div>
            <div class="tp-name">${esc(t.name)}</div>
            <div class="tp-label mono">${esc(t.label)}</div>
            <div class="tp-desc">${esc(t.desc)}</div>
          </div>`).join('')}
      </div>
    </div>`;
}

function rQAGrid(s) {
  return `
    <div class="s-qa-grid">
      <div class="qg-head">
        <h1 class="qg-title">${esc(s.title)}</h1>
        <p class="qg-sub">${esc(s.sub)}</p>
      </div>
      <div class="qg-chips">
        ${s.items.map(i => `
          <div class="qg-chip">
            <div class="qg-icon">${i.icon}</div>
            <div class="qg-q">${esc(i.q)}</div>
          </div>`).join('')}
      </div>
    </div>`;
}

function rQAOpen(s) {
  return `
    <div class="s-qa-open">
      <div class="qo-mark">❓</div>
      <h1 class="qo-title">${esc(s.title)}</h1>
      <div class="qo-sub">${esc(s.sub)}</div>
      <div class="qo-tip">${esc(s.tip)}</div>
    </div>`;
}

function rClosing(s) {
  return `
    <div class="s-closing">
      <div class="cl-heart">💙</div>
      <h1 class="cl-title">${esc(s.title)}</h1>
      <div class="cl-sub">${esc(s.sub)}</div>
      <div class="cl-meta mono">${esc(s.meta)}</div>
    </div>`;
}

const RENDERERS = {
  cover:            rCover,
  icebreak:         rIcebreak,
  section:          rSection,
  grid:             rGrid,
  theory:           rTheory,
  steps:            rSteps,
  activity:         rActivity,
  'closing-period': rClosingPeriod,
  'triage-cards':   rTriage,
  'types-grid':     rTypes,
  'qa-grid':        rQAGrid,
  'qa-open':        rQAOpen,
  closing:          rClosing,
};

function render() {
  const s = cur();
  setAccent(s.color || '#0891B2');

  const slideEl = document.getElementById('slide');
  slideEl.className = `slide slide-${s.type} period-${s.period}`;

  const fn = RENDERERS[s.type] || rTheory;

  // Fade transition
  slideEl.classList.add('fading');
  setTimeout(() => {
    slideEl.innerHTML = fn(s);
    slideEl.classList.remove('fading');
  }, 150);

  // Top bar
  const periodBtn1 = document.getElementById('p1Btn');
  const periodBtn2 = document.getElementById('p2Btn');
  if (periodBtn1) periodBtn1.className = 'period-pill' + (s.period === 1 ? ' active' : '');
  if (periodBtn2) periodBtn2.className = 'period-pill' + (s.period === 2 ? ' active' : '');

  // Counter
  document.getElementById('slideCounter').textContent = `${T.idx + 1} / ${SLIDES.length}`;

  // Progress
  const prog = document.getElementById('progBar');
  prog.style.width = ((T.idx + 1) / SLIDES.length * 100) + '%';

  // Nav buttons
  document.getElementById('prevBtn').disabled = T.idx === 0;
  document.getElementById('nextBtn').disabled = T.idx === SLIDES.length - 1;
}

// ═══════════════════════════════════════════════════════════
//                   KEYBOARD
// ═══════════════════════════════════════════════════════════

document.addEventListener('keydown', e => {
  if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'ArrowDown') { e.preventDefault(); next(); }
  if (e.key === 'ArrowLeft'  || e.key === 'ArrowUp')                    { e.preventDefault(); prev(); }
  if (e.key === 'Home')                                                 { goSlide(0); }
  if (e.key === 'End')                                                  { goSlide(SLIDES.length - 1); }
});

// ═══════════════════════════════════════════════════════════
//                   INIT
// ═══════════════════════════════════════════════════════════

(function() {
  generateQR(window.location.origin + '/');
  render();
})();
