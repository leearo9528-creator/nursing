'use strict';

// ==================== LESSON PLAN ====================

const LESSON = [
  {
    period: 1, step: 1, duration: 8,
    label: "간호사의 다양한 근무지",
    tag: "이론",
    color: "#22D3D7",
    slides: [
      { title: "간호사는 병원만이 아닙니다", body: "오늘 배울 6가지 근무지를 소개합니다.\n응급실 · 중환자실 · 수술실 · 보건교사 · 소방 구급 · 항공 간호사" },
      { title: "🚨 응급실 (ER)", body: "외상·뇌졸중 등 생명 위협 상황에 즉각 대응합니다.\n빠른 판단력과 강인한 체력이 핵심입니다." },
      { title: "🔴 중환자실 (ICU)", body: "24시간 집중 모니터링. 가장 위중한 환자를 케어합니다.\n집중력과 꼼꼼함이 생명입니다." },
      { title: "⚕️ 수술실 (OR)", body: "집도의의 파트너. 수술 전·중·후 전 과정을 담당합니다.\n정확성과 무균 원칙이 절대적입니다." },
      { title: "🏫 보건교사", body: "학교 보건실에서 학생의 건강을 지킵니다.\n보건교사 자격증을 가진 간호사입니다." },
      { title: "🚒 소방 구급대", body: "119 구급차에서 현장 응급처치를 담당합니다.\n구급대원으로서 가장 먼저 환자를 만납니다." },
      { title: "✈️ 항공 간호사", body: "닥터헬기·의료 전용기에서 중증 환자를 이송·치료합니다.\n국내외 다양한 취업 경로가 있습니다." },
    ]
  },
  {
    period: 1, step: 2, duration: 7,
    label: "간호사 되는 길 5단계",
    tag: "이론",
    color: "#A78BFA",
    slides: [
      { title: "간호사가 되는 5단계", body: "중학교 → 고등학교 → 간호학과 → 실습 → 국가고시 → 취업" },
      { title: "01 중·고등학교", body: "이과 계열 과목(생물·화학) 집중.\n내신 관리가 간호학과 입학의 핵심입니다." },
      { title: "02 간호학과 입학", body: "4년제 간호학과 또는 3년제 간호전문대.\n경쟁률이 높고 수능 성적이 중요합니다." },
      { title: "03 임상 실습", body: "병원에서 직접 실습. 가장 치열하고 성장하는 시간.\n보호자처럼 환자 곁에 있는 법을 배웁니다." },
      { title: "04 국가고시 합격", body: "연 1회(1월) 시행. 합격률 약 90~95%.\n취득 즉시 간호사 면허가 발급됩니다!" },
      { title: "05 취업 & 전문화", body: "병원 취업 후 전문간호사·연구·해외 진출 등 무한 확장.\n경력이 쌓일수록 가치가 높아지는 직업입니다." },
    ]
  },
  {
    period: 1, step: 3, duration: 15,
    label: "OX 퀴즈",
    tag: "🎮 게임",
    color: "#E63946",
    slides: [
      { title: "OX 퀴즈 10문제", body: "학생들이 핸드폰으로 직접 참여합니다.\n정답: +10pt · 3연속 정답: 보너스 +5pt\n\n선생님은 문제를 큰 소리로 읽어주세요." },
      { title: "진행 팁", body: "• 학생들이 O/X 버튼을 누른 뒤 정답 공개\n• '왜 그렇게 생각했나요?' 발문 활용\n• 틀린 학생도 기죽지 않도록 격려\n\n총 15분 내 완료 목표" },
    ]
  },
  {
    period: 1, step: 4, duration: 15,
    label: "상황극 — 환자와의 대화",
    tag: "🎭 활동",
    color: "#F4B942",
    slides: [
      { title: "상황극 4장면", body: "학생들이 간호사 역할로 대화를 선택합니다.\n공감 점수(0~5)가 점수에 반영됩니다.\n\n각 장면마다 왜 그 답이 좋은지 함께 이야기해 보세요." },
      { title: "SCENE 01 — 엄마를 찾는 아이", body: "7세 여자아이가 응급실에서 울고 있습니다.\n\n핵심: 감정을 먼저 인정하고 이름을 물어 연결감을 만드세요." },
      { title: "SCENE 02 — 말 없는 청소년", body: "14세 남자아이, 온몸에 멍, 말하지 않음.\n\n핵심: 강요 없이 안전감을 먼저. '말하기 싫으면 안 해도 돼.'" },
      { title: "SCENE 03 — 통증 호소하는 어르신", body: "75세 할아버지, 어디가 아픈지 정확히 말 못 하심.\n\n핵심: 비언어적 소통(손짓)을 활용하세요." },
      { title: "SCENE 04 — 수술 전날 밤", body: "40대 여성, 수술 전날 '너무 무서워요'.\n\n핵심: 감정을 축소하지 말고 정상화하세요. '수술 전날은 다들 그래요.'" },
    ]
  },
  {
    period: 2, step: 1, duration: 8,
    label: "트리아지 이론",
    tag: "이론",
    color: "#22D3D7",
    slides: [
      { title: "트리아지 (Triage)", body: "대규모 재난 현장에서 한정된 의료 자원으로\n최대한 많은 생명을 살리기 위한 환자 분류 시스템입니다." },
      { title: "🔴 RED — 즉시", body: "생명 위협. 즉각 처치하지 않으면 사망.\n예: 의식 없는 외상 환자, 심근경색 의심" },
      { title: "🟡 YELLOW — 긴급", body: "심각하지만 30분 내 처치 가능. 대기 가능.\n예: 골절, 중등도 화상" },
      { title: "🟢 GREEN — 비응급", body: "경상. 순서를 기다려도 생명에 지장 없음.\n예: 가벼운 타박상, 단순 염좌" },
      { title: "⬛ BLACK — 지연", body: "소생 불가능. 제한된 자원 하에 처치 불가.\n예: 심폐정지 + 소생 불가 징후\n\n※ 가장 어려운 판단입니다." },
    ]
  },
  {
    period: 2, step: 2, duration: 20,
    label: "트리아지 게임 12 시나리오",
    tag: "🎮 게임",
    color: "#E63946",
    slides: [
      { title: "트리아지 게임", body: "12개 시나리오를 RED·YELLOW·GREEN·BLACK으로 분류합니다.\n정답: +15pt\n\n총 20분 — 각 케이스마다 정답 공개 후 이유를 설명해 주세요." },
      { title: "진행 팁", body: "• 학생이 선택 후 잠시 기다렸다가 정답 공개\n• '왜 RED라고 생각했나요?' 발문 활용\n• 틀린 이유보다 생각 과정을 칭찬하세요\n• 어려운 케이스(BLACK)는 충분히 설명해 주세요" },
    ]
  },
  {
    period: 2, step: 3, duration: 10,
    label: "나의 적성 테스트",
    tag: "🧭 테스트",
    color: "#A78BFA",
    slides: [
      { title: "적성 테스트 6문항", body: "5가지 간호사 타입 중 나에게 맞는 유형을 찾습니다.\n\nER FIGHTER · ICU GUARDIAN · OR PERFECTIONIST\nCOMMUNITY HEALER · SCIENCE MIND" },
      { title: "결과 공유", body: "테스트 완료 후 옆 친구와 결과를 비교해 보세요.\n같은 질문에도 다른 답이 나올 수 있습니다.\n\n'이 유형이 맞는 것 같아요?' 발문 활용" },
    ]
  },
  {
    period: 2, step: 4, duration: 7,
    label: "Q&A + 최종 랭크",
    tag: "Q&A",
    color: "#F4B942",
    slides: [
      { title: "Q&A 10문항", body: "학생들이 진짜 궁금해하는 질문 10개입니다.\n앱에서 눌러서 확인할 수 있습니다.\n\n추가 질문이 있으면 자유롭게 받아주세요." },
      { title: "최종 랭크 공개", body: "🦸 NURSE-AVENGER  300pt+\n💉 SPECIALIST      220pt+\n🩺 TRAINEE         140pt+\n🩹 ROOKIE           0pt+\n\n'내 랭크 공유하기' 버튼으로 결과를 저장하세요!" },
      { title: "마무리 메시지", body: "간호사는 기술이 아니라 사람을 보는 직업입니다.\n오늘 체험한 판단과 공감이 바로 간호의 핵심입니다.\n\n오늘 수업에 참여해 주셔서 감사합니다! 💙" },
    ]
  },
];

// ==================== STATE ====================

let T = {
  lessonIdx: 0,
  slideIdx: 0,
};

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

// ==================== RENDER ====================

function render() {
  const lesson = currentLesson();
  const slide  = currentSlide();

  // Update progress dots
  document.querySelectorAll('.lesson-dot').forEach((el, i) => {
    el.className = 'lesson-dot' + (i === T.lessonIdx ? ' active' : (i < T.lessonIdx ? ' done' : ''));
  });

  // Update slide content
  const titleEl = document.getElementById('slideTitle');
  const bodyEl  = document.getElementById('slideBody');
  const tagEl   = document.getElementById('lessonTag');
  const labelEl = document.getElementById('lessonLabel');
  const timeEl  = document.getElementById('lessonTime');
  const slideCountEl = document.getElementById('slideCount');
  const progressEl   = document.getElementById('slideProgress');

  if (titleEl) titleEl.textContent = slide.title;
  if (bodyEl)  bodyEl.textContent  = slide.body;
  if (tagEl)   { tagEl.textContent = lesson.tag; tagEl.style.background = lesson.color + '22'; tagEl.style.color = lesson.color; tagEl.style.borderColor = lesson.color + '55'; }
  if (labelEl) labelEl.textContent = `${lesson.period}교시 · STEP ${lesson.step} — ${lesson.label}`;
  if (timeEl)  timeEl.textContent  = `${lesson.duration}분`;
  if (slideCountEl) slideCountEl.textContent = `${T.slideIdx + 1} / ${lesson.slides.length}`;
  if (progressEl) {
    progressEl.style.width = ((T.slideIdx + 1) / lesson.slides.length * 100) + '%';
    progressEl.style.background = lesson.color;
  }

  // Period indicator
  const p1El = document.getElementById('period1Ind');
  const p2El = document.getElementById('period2Ind');
  if (p1El) p1El.className = 'period-ind' + (lesson.period === 1 ? ' active' : '');
  if (p2El) p2El.className = 'period-ind' + (lesson.period === 2 ? ' active' : '');

  // Nav buttons
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const isFirst = T.lessonIdx === 0 && T.slideIdx === 0;
  const isLast  = T.lessonIdx === LESSON.length - 1 && T.slideIdx === currentLesson().slides.length - 1;
  if (prevBtn) prevBtn.disabled = isFirst;
  if (nextBtn) nextBtn.disabled = isLast;

  // Lesson list sidebar
  document.querySelectorAll('.lesson-item').forEach((el, i) => {
    el.className = 'lesson-item' + (i === T.lessonIdx ? ' active' : '');
    el.style.setProperty('--lesson-color', LESSON[i].color);
  });
}

// ==================== QR CODE ====================

function initQR(url) {
  const el = document.getElementById('qrcode');
  if (!el) return;
  el.innerHTML = '';
  try {
    new QRCode(el, {
      text: url,
      width: 200,
      height: 200,
      colorDark: '#F0F4F8',
      colorLight: '#111827',
      correctLevel: QRCode.CorrectLevel.M,
    });
  } catch (e) {
    el.innerHTML = `<div style="color:#8899AA;font-size:0.8rem;padding:1rem;">${url}</div>`;
  }
}

// ==================== KEYBOARD ====================

document.addEventListener('keydown', e => {
  if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === ' ') { e.preventDefault(); nextSlide(); }
  if (e.key === 'ArrowLeft'  || e.key === 'ArrowUp')                    { e.preventDefault(); prevSlide(); }
});

// ==================== INIT ====================

(function () {
  // Build lesson list
  const listEl = document.getElementById('lessonList');
  if (listEl) {
    listEl.innerHTML = LESSON.map((l, i) => `
      <div class="lesson-item" onclick="goToLesson(${i})" style="--lesson-color:${l.color}">
        <div class="lesson-item-tag" style="color:${l.color}">${l.period}교시 S${l.step}</div>
        <div class="lesson-item-label">${l.label}</div>
        <div class="lesson-item-dur">${l.duration}분</div>
      </div>`).join('');
  }

  const url = window.location.origin + '/';
  const urlEl = document.getElementById('studentUrl');
  if (urlEl) urlEl.textContent = url;
  initQR(url);

  render();
})();
