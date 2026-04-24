'use strict';

// ==================== LESSON PLAN ====================

const LESSON = [
  {
    period:1, step:1, duration:8,
    label:"간호사의 다양한 근무지", tag:"이론", color:"#0891B2",
    slides:[
      {
        cover: true,
        title:"간호사의\n세계로",
        kicker:"2025 간호사 진로 특강",
        body:"1교시 · 간호사의 다양한 근무지와 되는 길",
      },
      {
        icebreak: true,
        title:"아이스브레이킹 ❄️",
        kicker:"수업 시작 전",
        body:"Q1. 지금 내 옆에 앉은 사람 이름을 30초 안에 외워보세요!\n\nQ2. '간호사' 하면 떠오르는 단어를 하나씩 외쳐보세요.\n\nQ3. 내 주변에 간호사가 있는 사람? 손 들어보세요 🙋",
      },
      {
        title:"간호사는 병원만이\n아닙니다",
        body:"오늘 배울 6가지 근무지를 소개합니다.\n응급실 · 중환자실 · 수술실 · 보건교사 · 소방 구급 · 항공 간호사",
        img:"https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=700&q=80"
      },
      {
        title:"🚨 응급실 (ER)",
        body:"외상·뇌졸중 등 생명 위협 상황에 즉각 대응합니다.\n빠른 판단력과 강인한 체력이 핵심입니다.",
        img:"https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=700&q=80"
      },
      {
        title:"🔴 중환자실 (ICU)",
        body:"24시간 집중 모니터링. 가장 위중한 환자를 케어합니다.\n집중력과 꼼꼼함이 생명입니다.\n\n▶ 아래 브이로그에서 실제 하루 일과를 확인하세요.",
        video:"https://www.youtube.com/embed/Nxgdmn7vTsA"
      },
      {
        title:"⚕️ 수술실 (OR)",
        body:"집도의의 파트너. 수술 전·중·후 전 과정을 담당합니다.\n정확성과 무균 원칙이 절대적입니다.",
        img:"https://images.unsplash.com/photo-1551190822-a9333d879b1f?auto=format&fit=crop&w=700&q=80"
      },
      {
        title:"🏫 보건교사",
        body:"학교 보건실에서 학생의 건강을 지킵니다.\n보건교사 자격증을 가진 간호사입니다.",
        img:"https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=700&q=80"
      },
      {
        title:"🚒 소방 구급대",
        body:"119 구급차에서 현장 응급처치를 담당합니다.\n구급대원으로서 가장 먼저 환자를 만납니다.",
        img:"https://images.unsplash.com/photo-1543333995-3f5e3ef16b6c?auto=format&fit=crop&w=700&q=80"
      },
      {
        title:"✈️ 항공 간호사",
        body:"닥터헬기·의료 전용기에서 중증 환자를 이송·치료합니다.\n국내외 다양한 취업 경로가 있습니다.",
        img:"https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=700&q=80"
      },
    ]
  },
  {
    period:1, step:2, duration:7,
    label:"간호사 되는 길 5단계", tag:"이론", color:"#7C3AED",
    slides:[
      {
        title:"간호사가 되는\n5단계",
        body:"중·고등학교 → 간호학과 → 임상 실습 → 국가고시 → 취업",
        img:"https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=700&q=80"
      },
      {
        title:"01 중·고등학교",
        body:"이과 계열 과목(생물·화학) 집중.\n내신 관리가 간호학과 입학의 핵심입니다."
      },
      {
        title:"02 간호학과 입학",
        body:"4년제 간호학과 또는 3년제 간호전문대.\n경쟁률이 높고 수능 성적이 중요합니다.",
        img:"https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=700&q=80"
      },
      {
        title:"03 임상 실습",
        body:"병원에서 직접 실습. 가장 치열하고 성장하는 시간.\n보호자처럼 환자 곁에 있는 법을 배웁니다.",
        img:"https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=700&q=80"
      },
      {
        title:"04 국가고시 합격",
        body:"연 1회(1월) 시행. 합격률 약 90~95%.\n취득 즉시 간호사 면허가 발급됩니다!",
        img:"https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=700&q=80"
      },
      {
        title:"05 취업 & 전문화",
        body:"병원 취업 후 전문간호사·연구·해외 진출 등 무한 확장.\n경력이 쌓일수록 가치가 높아지는 직업입니다.",
        img:"https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=700&q=80"
      },
    ]
  },
  {
    period:1, step:3, duration:15,
    label:"OX 퀴즈", tag:"🎮 게임", color:"#E63946",
    slides:[
      {
        title:"OX 퀴즈\n10문제",
        body:"학생들이 핸드폰으로 직접 참여합니다.\n정답: +10pt · 3연속 정답: 보너스 +5pt\n\n선생님은 문제를 큰 소리로 읽어주세요.",
        img:"https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?auto=format&fit=crop&w=700&q=80"
      },
      {
        title:"진행 팁",
        body:"• 학생들이 O/X 버튼을 누른 뒤 정답 공개\n• '왜 그렇게 생각했나요?' 발문 활용\n• 틀린 학생도 기죽지 않도록 격려\n\n총 15분 내 완료 목표"
      },
    ]
  },
  {
    period:1, step:4, duration:15,
    label:"상황극 — 환자와의 대화", tag:"🎭 활동", color:"#D97706",
    slides:[
      {
        title:"상황극\n4장면",
        body:"학생들이 간호사 역할로 대화를 선택합니다.\n공감 점수(0~5)가 점수에 반영됩니다.\n\n각 장면마다 왜 그 답이 좋은지 함께 이야기해 보세요.",
        img:"https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=700&q=80"
      },
      {
        title:"SCENE 01\n엄마를 찾는 아이",
        body:"7세 여자아이가 응급실에서 울고 있습니다.\n\n핵심: 감정을 먼저 인정하고 이름을 물어 연결감을 만드세요."
      },
      {
        title:"SCENE 02\n말 없는 청소년",
        body:"14세 남자아이, 온몸에 멍, 말하지 않음.\n\n핵심: 강요 없이 안전감을 먼저. '말하기 싫으면 안 해도 돼.'"
      },
      {
        title:"SCENE 03\n통증 호소하는 어르신",
        body:"75세 할아버지, 어디가 아픈지 정확히 말 못 하심.\n\n핵심: 비언어적 소통(손짓)을 활용하세요."
      },
      {
        title:"SCENE 04\n수술 전날 밤",
        body:"40대 여성, '너무 무서워요'.\n\n핵심: 감정을 축소하지 말고 정상화하세요.\n'수술 전날은 다들 그래요.'"
      },
    ]
  },
  {
    period:2, step:1, duration:8,
    label:"트리아지 이론", tag:"이론", color:"#0891B2",
    slides:[
      {
        title:"트리아지\n(Triage)",
        body:"대규모 재난 현장에서 한정된 의료 자원으로\n최대한 많은 생명을 살리기 위한 환자 분류 시스템입니다.",
        img:"https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=700&q=80"
      },
      {
        title:"🔴 RED — 즉시",
        body:"생명 위협. 즉각 처치하지 않으면 사망.\n예: 의식 없는 외상 환자, 심근경색 의심"
      },
      {
        title:"🟡 YELLOW — 긴급",
        body:"심각하지만 30분 내 처치 가능. 대기 가능.\n예: 골절, 중등도 화상"
      },
      {
        title:"🟢 GREEN — 비응급",
        body:"경상. 순서를 기다려도 생명에 지장 없음.\n예: 가벼운 타박상, 단순 염좌"
      },
      {
        title:"⬛ BLACK — 지연",
        body:"소생 불가능. 제한된 자원 하에 처치 불가.\n예: 심폐정지 + 소생 불가 징후\n\n※ 가장 어려운 판단입니다."
      },
    ]
  },
  {
    period:2, step:2, duration:20,
    label:"트리아지 게임 12 시나리오", tag:"🎮 게임", color:"#E63946",
    slides:[
      {
        title:"트리아지 게임",
        body:"12개 시나리오를 RED·YELLOW·GREEN·BLACK으로 분류합니다.\n정답: +15pt\n\n총 20분 — 각 케이스마다 정답 공개 후 이유를 설명해 주세요.",
        img:"https://images.unsplash.com/photo-1611532736597-de2d4265fba3?auto=format&fit=crop&w=700&q=80"
      },
      {
        title:"진행 팁",
        body:"• 학생이 선택 후 잠시 기다렸다가 정답 공개\n• '왜 RED라고 생각했나요?' 발문 활용\n• 틀린 이유보다 생각 과정을 칭찬하세요\n• 어려운 케이스(BLACK)는 충분히 설명해 주세요"
      },
    ]
  },
  {
    period:2, step:3, duration:10,
    label:"나의 적성 테스트", tag:"🧭 테스트", color:"#7C3AED",
    slides:[
      {
        title:"적성 테스트\n6문항",
        body:"5가지 간호사 타입 중 나에게 맞는 유형을 찾습니다.\n\nER FIGHTER · ICU GUARDIAN · OR PERFECTIONIST\nCOMMUNITY HEALER · SCIENCE MIND",
        img:"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=700&q=80"
      },
      {
        title:"결과 공유",
        body:"테스트 완료 후 옆 친구와 결과를 비교해 보세요.\n같은 질문에도 다른 답이 나올 수 있습니다.\n\n'이 유형이 맞는 것 같아요?' 발문 활용"
      },
    ]
  },
  {
    period:2, step:4, duration:7,
    label:"Q&A + 최종 랭크", tag:"Q&A", color:"#D97706",
    slides:[
      {
        title:"Q&A\n10문항",
        body:"학생들이 진짜 궁금해하는 질문 10개입니다.\n앱에서 눌러서 확인할 수 있습니다.\n\n추가 질문이 있으면 자유롭게 받아주세요."
      },
      {
        title:"최종 랭크 공개",
        body:"🦸 NURSE-AVENGER  300pt+\n💉 SPECIALIST      220pt+\n🩺 TRAINEE         140pt+\n🩹 ROOKIE           0pt+\n\n'내 랭크 공유하기' 버튼으로 결과를 저장하세요!"
      },
      {
        title:"마무리 메시지",
        body:"간호사는 기술이 아니라 사람을 보는 직업입니다.\n오늘 체험한 판단과 공감이 바로 간호의 핵심입니다.\n\n오늘 수업에 참여해 주셔서 감사합니다! 💙",
        img:"https://images.unsplash.com/photo-1582560475093-ba66accbc424?auto=format&fit=crop&w=700&q=80"
      },
    ]
  },
];

// ==================== STATE ====================

let T = { lessonIdx:0, slideIdx:0, sidebarOpen:true };

function currentLesson() { return LESSON[T.lessonIdx]; }
function currentSlide()  { return currentLesson().slides[T.slideIdx]; }

function nextSlide() {
  const lesson = currentLesson();
  if (T.slideIdx < lesson.slides.length - 1) {
    T.slideIdx++;
  } else if (T.lessonIdx < LESSON.length - 1) {
    T.lessonIdx++;
    T.slideIdx = 0;
  }
  render();
}

function prevSlide() {
  if (T.slideIdx > 0) {
    T.slideIdx--;
  } else if (T.lessonIdx > 0) {
    T.lessonIdx--;
    T.slideIdx = LESSON[T.lessonIdx].slides.length - 1;
  }
  render();
}

function goToLesson(idx) {
  T.lessonIdx = idx;
  T.slideIdx  = 0;
  render();
}

function toggleSidebar() {
  T.sidebarOpen = !T.sidebarOpen;
  const layout = document.getElementById('layout');
  const btn    = document.getElementById('sidebarToggle');
  if (layout) layout.classList.toggle('sidebar-collapsed', !T.sidebarOpen);
  if (btn)    btn.textContent = T.sidebarOpen ? '✕' : '☰';
}

// ==================== RENDER ====================

function setAccent(color) {
  document.documentElement.style.setProperty('--accent', color);
}

function render() {
  const lesson = currentLesson();
  const slide  = currentSlide();

  // Accent color (global CSS var)
  setAccent(lesson.color);

  // Slide card type classes
  const card = document.getElementById('slideCard');
  card.classList.remove('cover-slide', 'icebreak-slide');
  if (slide.cover)    card.classList.add('cover-slide');
  if (slide.icebreak) card.classList.add('icebreak-slide');

  // Slide content — fade transition
  card.classList.add('slide-changing');
  setTimeout(() => {
    document.getElementById('slideTitle').textContent  = slide.title;
    document.getElementById('slideBody').textContent   = slide.body;
    document.getElementById('slideKicker').textContent = slide.kicker || lesson.tag;
    card.classList.remove('slide-changing');
  }, 180);

  // Progress
  document.getElementById('slideCount').textContent = `${T.slideIdx + 1} / ${lesson.slides.length}`;
  const prog = document.getElementById('slideProgress');
  prog.style.width      = ((T.slideIdx + 1) / lesson.slides.length * 100) + '%';
  prog.style.background = lesson.color;

  // Image / video
  const wrap   = document.getElementById('slideImageWrap');
  const img    = document.getElementById('slideImg');
  const video  = document.getElementById('slideVideo');
  const layout = document.getElementById('slideLayout');

  img.style.display   = 'none';
  video.style.display = 'none';
  img.src   = '';
  video.src = '';

  if (slide.video) {
    wrap.classList.add('has-image');
    video.src           = slide.video;
    video.style.display = 'block';
    layout.className    = 'slide-layout';
  } else if (slide.img) {
    wrap.classList.add('has-image');
    img.src           = slide.img;
    img.style.display = 'block';
    layout.className  = 'slide-layout';
  } else {
    wrap.classList.remove('has-image');
    layout.className = 'slide-layout no-image';
  }

  // Meta bar
  const tagEl = document.getElementById('lessonTag');
  tagEl.textContent        = lesson.tag;
  tagEl.style.background   = lesson.color + '14';
  tagEl.style.color        = lesson.color;
  tagEl.style.borderColor  = lesson.color + '60';
  document.getElementById('lessonLabel').textContent = `${lesson.period}교시 · STEP ${lesson.step} — ${lesson.label}`;
  document.getElementById('lessonTime').textContent  = `⏱ ${lesson.duration}분`;

  // Period pills
  document.getElementById('period1Ind').className = 'period-pill' + (lesson.period === 1 ? ' active' : '');
  document.getElementById('period2Ind').className = 'period-pill' + (lesson.period === 2 ? ' active' : '');

  // Nav buttons
  const isFirst = T.lessonIdx === 0 && T.slideIdx === 0;
  const isLast  = T.lessonIdx === LESSON.length - 1 && T.slideIdx === currentLesson().slides.length - 1;
  document.getElementById('prevBtn').disabled = isFirst;
  document.getElementById('nextBtn').disabled = isLast;

  // Header dots
  document.querySelectorAll('.l-dot').forEach((el, i) => {
    el.className = 'l-dot' + (i === T.lessonIdx ? ' active' : (i < T.lessonIdx ? ' done' : ''));
  });

  // Sidebar items
  document.querySelectorAll('.lesson-item').forEach((el, i) => {
    el.className = 'lesson-item' + (i === T.lessonIdx ? ' active' : '');
    el.style.setProperty('--lesson-color', LESSON[i].color);
  });

  // QR url color
  const urlEl = document.getElementById('studentUrl');
  if (urlEl) {
    urlEl.style.color       = lesson.color;
    urlEl.style.background  = lesson.color + '12';
    urlEl.style.borderColor = lesson.color + '30';
  }
}

// ==================== QR ====================

function initQR(url) {
  const el = document.getElementById('qrcode');
  if (!el) return;
  el.innerHTML = '';
  try {
    new QRCode(el, {
      text: url, width:180, height:180,
      colorDark:'#0F172A', colorLight:'#FFFFFF',
      correctLevel: QRCode.CorrectLevel.M,
    });
  } catch(e) {
    el.textContent = url;
  }
}

// ==================== KEYBOARD ====================

document.addEventListener('keydown', e => {
  if (e.key==='ArrowRight'||e.key==='ArrowDown'||e.key===' ') { e.preventDefault(); nextSlide(); }
  if (e.key==='ArrowLeft' ||e.key==='ArrowUp')                 { e.preventDefault(); prevSlide(); }
});

// ==================== INIT ====================

(function() {
  const listEl = document.getElementById('lessonList');
  if (listEl) {
    listEl.innerHTML = LESSON.map((l,i) => `
      <div class="lesson-item" onclick="goToLesson(${i})" style="--lesson-color:${l.color}">
        <div class="lesson-item-step" style="color:${l.color}">${l.period}-${l.step}</div>
        <div class="lesson-item-info">
          <div class="lesson-item-label">${l.label}</div>
          <div class="lesson-item-meta">
            <span class="lesson-item-tag" style="color:${l.color};background:${l.color}18">${l.tag}</span>
            <span class="lesson-item-dur">${l.duration}분</span>
          </div>
        </div>
      </div>`).join('');
  }
  const url = window.location.origin + '/';
  const urlEl = document.getElementById('studentUrl');
  if (urlEl) urlEl.textContent = url;
  initQR(url);
  render();
})();
