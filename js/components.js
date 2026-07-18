(function () {
  // 현재 페이지 감지
  const page = location.pathname.split("/").pop() || "index.html";

  // 네비게이션 링크 클래스 생성 헬퍼
  function navLinkClass(targetPage) {
    return page === targetPage
      ? "text-base font-bold text-primary"
      : "text-base font-medium hover:text-primary transition-colors";
  }

  // nav 템플릿
  const navHTML = `
    <nav class="sticky top-0 z-50 w-full bg-white/90 dark:bg-background-dark/90 backdrop-blur-md border-b border-primary/10 px-6 lg:px-20 py-4">
      <div class="max-w-7xl mx-auto flex items-center justify-between">
        <div class="flex items-center gap-2">
          <div class="bg-primary p-2 rounded-lg text-white">
            <span class="material-symbols-outlined block">volunteer_activism</span>
          </div>
          <a href="index.html" class="text-2xl font-bold tracking-tight text-slate-900 dark:text-white hover:text-primary transition-colors">한겸복지센터</a>
        </div>
        <div class="hidden md:flex items-center gap-10">
          <div class="flex gap-8">
            <a class="${navLinkClass("about.html")}" href="about.html">센터소개</a>
            <a class="${navLinkClass("programs.html")}" href="programs.html">프로그램 안내</a>
            <a class="${navLinkClass("notice.html")}" href="notice.html">공지사항</a>
            <a class="${navLinkClass("location.html")}" href="location.html">오시는 길</a>
          </div>
          <a href="location.html" class="bg-primary text-white px-6 py-2.5 rounded-full font-bold hover:bg-primary/90 transition-all shadow-md shadow-primary/20">
            상담 문의하기
          </a>
        </div>
        <button id="menu-btn" class="md:hidden text-slate-900 dark:text-white">
          <span class="material-symbols-outlined">menu</span>
        </button>
      </div>
      <div id="mobile-menu" class="hidden md:hidden mt-4 pb-4 border-t border-primary/10 pt-4 flex flex-col gap-4">
        <a class="${navLinkClass("about.html")}" href="about.html">센터소개</a>
        <a class="${navLinkClass("programs.html")}" href="programs.html">프로그램 안내</a>
        <a class="${navLinkClass("notice.html")}" href="notice.html">공지사항</a>
        <a class="${navLinkClass("location.html")}" href="location.html">오시는 길</a>
        <a href="location.html" class="bg-primary text-white px-6 py-2.5 rounded-full font-bold hover:bg-primary/90 transition-all text-center">
          상담 문의하기
        </a>
      </div>
    </nav>
  `;

  // footer 템플릿
  const footerHTML = `
    <footer class="bg-[#f2efe9] dark:bg-slate-900 py-16">
      <div class="max-w-7xl mx-auto px-6 lg:px-20 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <div class="flex items-center gap-2 mb-6">
            <span class="material-symbols-outlined text-primary">volunteer_activism</span>
            <span class="text-xl font-bold">한겸복지센터</span>
          </div>
          <div class="space-y-3 text-slate-600 dark:text-slate-400">
            <p class="flex items-start gap-3">
              <span class="material-symbols-outlined text-primary text-xl">location_on</span>
              <span>${SITE_INFO.address.road}</span>
            </p>
            <p class="flex items-center gap-3">
              <span class="material-symbols-outlined text-primary text-xl">call</span>
              <span>${SITE_INFO.phone.center}</span>
            </p>
            <p class="flex items-center gap-3">
              <span class="material-symbols-outlined text-primary text-xl">schedule</span>
              <span>평일 ${SITE_INFO.hours.weekday} (주말/공휴일 휴무)</span>
            </p>
          </div>
        </div>
        <div class="flex flex-col gap-6">
          <h4 class="font-bold text-lg border-b border-primary/20 pb-2">빠른 메뉴</h4>
          <div class="grid grid-cols-2 gap-3">
            <a class="hover:text-primary transition-colors" href="programs.html">이용 안내</a>
            <a class="hover:text-primary transition-colors" href="#">자원봉사 신청</a>
            <a class="hover:text-primary transition-colors" href="#">후원 안내</a>
            <a class="hover:text-primary transition-colors" href="#">식단표 확인</a>
            <a class="hover:text-primary transition-colors" href="#">갤러리</a>
            <a class="hover:text-primary transition-colors" href="#">인재 채용</a>
          </div>
        </div>
        <div class="flex flex-col gap-6">
          <h4 class="font-bold text-lg border-b border-primary/20 pb-2">소셜 네트워크</h4>
          <div class="flex flex-col gap-2">
            ${SITE_INFO.social.map(s => `
              <a href="${s.url}" target="_blank" rel="noopener noreferrer"
                class="flex items-center gap-3 text-slate-600 dark:text-slate-400 hover:text-primary transition-colors group">
                <div class="w-9 h-9 bg-white dark:bg-slate-700 rounded-full flex items-center justify-center text-primary shadow-sm flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                  <span class="material-symbols-outlined" style="font-size:18px;">${s.icon}</span>
                </div>
                <span class="font-medium text-sm">${s.label}</span>
              </a>
            `).join('')}
          </div>
          <div class="mt-4 p-4 bg-white/50 dark:bg-slate-800/50 rounded-xl">
            <p class="text-sm text-slate-500">Copyright © 2024 한겸복지센터. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  `;

  // 오시는 길 연락처 카드 (location.html #location-contact-placeholder에 주입)
  const locationContactHTML = `
    <div class="bg-background-light dark:bg-slate-800 rounded-2xl p-6 shadow-md border border-primary/5">
      <div class="flex items-start gap-4">
        <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary flex-shrink-0">
          <span class="material-symbols-outlined">location_on</span>
        </div>
        <div>
          <p class="font-bold text-lg mb-1">주소</p>
          <p class="text-slate-600 dark:text-slate-400 leading-relaxed">
            ${SITE_INFO.address.road}<br>
            <span class="text-sm">(${SITE_INFO.address.jibun})</span><br>
            <span class="text-sm">우편번호 ${SITE_INFO.address.postal}</span>
          </p>
        </div>
      </div>
    </div>
    <div class="bg-background-light dark:bg-slate-800 rounded-2xl p-6 shadow-md border border-primary/5">
      <div class="flex items-start gap-4">
        <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary flex-shrink-0">
          <span class="material-symbols-outlined">call</span>
        </div>
        <div>
          <p class="font-bold text-lg mb-1">전화번호</p>
          <p class="text-slate-600 dark:text-slate-400">센터: <a href="tel:${SITE_INFO.phone.center}" class="text-primary font-bold hover:underline">${SITE_INFO.phone.center}</a></p>
          <p class="text-slate-600 dark:text-slate-400 mt-1">대표: <a href="tel:${SITE_INFO.phone.rep}" class="text-primary font-bold hover:underline">${SITE_INFO.phone.rep}</a></p>
        </div>
      </div>
    </div>
    <div class="bg-background-light dark:bg-slate-800 rounded-2xl p-6 shadow-md border border-primary/5">
      <div class="flex items-start gap-4">
        <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary flex-shrink-0">
          <span class="material-symbols-outlined">mail</span>
        </div>
        <div>
          <p class="font-bold text-lg mb-1">이메일</p>
          <a href="mailto:${SITE_INFO.email}" class="text-primary font-medium hover:underline">${SITE_INFO.email}</a>
        </div>
      </div>
    </div>
    <div class="bg-background-light dark:bg-slate-800 rounded-2xl p-6 shadow-md border border-primary/5">
      <div class="flex items-start gap-4">
        <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary flex-shrink-0">
          <span class="material-symbols-outlined">schedule</span>
        </div>
        <div>
          <p class="font-bold text-lg mb-2">운영 시간</p>
          <div class="space-y-1 text-slate-600 dark:text-slate-400">
            <p class="flex justify-between gap-8"><span>평일</span><span class="font-medium">${SITE_INFO.hours.weekday}</span></p>
            <p class="flex justify-between gap-8"><span>토요일</span><span class="font-medium text-slate-400">${SITE_INFO.hours.saturday}</span></p>
            <p class="flex justify-between gap-8"><span>일요일/공휴일</span><span class="font-medium text-slate-400">${SITE_INFO.hours.holiday}</span></p>
          </div>
        </div>
      </div>
    </div>
  `;

  // DOM 준비 후 주입 및 초기화
  document.addEventListener("DOMContentLoaded", function () {
    var navEl = document.getElementById("nav-placeholder");
    if (navEl) navEl.innerHTML = navHTML;

    var footerEl = document.getElementById("footer-placeholder");
    if (footerEl) footerEl.innerHTML = footerHTML;

    var locationContactEl = document.getElementById("location-contact-placeholder");
    if (locationContactEl) locationContactEl.innerHTML = locationContactHTML;

    // 햄버거 메뉴 토글
    var menuBtn = document.getElementById("menu-btn");
    var mobileMenu = document.getElementById("mobile-menu");
    if (menuBtn && mobileMenu) {
      menuBtn.addEventListener("click", function () {
        mobileMenu.classList.toggle("hidden");
      });
    }
  });
})();
