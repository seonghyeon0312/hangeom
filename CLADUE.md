# 한겸복지센터 웹사이트 프로젝트

## 프로젝트 개요

한겸복지센터(노인복지센터)의 정보 전달 및 홍보용 정적 웹사이트.
서버 없이 순수 HTML + Tailwind CSS + Vanilla JS로 구성.

---

## 기술 스택

- **HTML5** (순수 정적 파일, 프레임워크 없음)
- **Tailwind CSS** via CDN (`https://cdn.tailwindcss.com?plugins=forms,container-queries`)
- **Vanilla JS** (별도 프레임워크 없음)
- **Google Fonts**: Lexend, Noto Sans KR
- **Material Symbols Outlined** (아이콘)

---

## 디자인 시스템

### 컬러

```
Primary (따뜻한 오렌지):  #ff8b42
Sage (세이지 그린):        #8da399
Background Light:          #f8f7f5
Background Dark:           #23170f
Footer Background:         #f2efe9
```

### Tailwind Config (모든 페이지 동일하게 유지)

```js
tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#ff8b42",
        "background-light": "#f8f7f5",
        "background-dark": "#23170f",
        sage: "#8da399",
      },
      fontFamily: {
        display: ["Lexend", "Noto Sans KR", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        full: "9999px",
      },
    },
  },
};
```

### 폰트

```css
body {
  font-family: "Lexend", "Noto Sans KR", sans-serif;
}
```

---

## 공통 컴포넌트 규칙

### 네비게이션 바

- `sticky top-0 z-50` 고정 상단 바
- 로고 왼쪽, 메뉴 오른쪽
- 메뉴 항목: 센터소개 / 프로그램 안내 / 공지사항 / 오시는 길
- 우측 CTA 버튼: "상담 문의하기" (primary 색상, rounded-full)
- 모바일: 햄버거 메뉴 버튼 표시
- 현재 페이지 메뉴 항목은 `text-primary font-bold`로 강조

### 페이지 Hero 배너

- 각 서브페이지는 full-width 히어로 배너로 시작
- 배경: primary 계열 그라디언트 또는 따뜻한 이미지 플레이스홀더
- 페이지 제목 (한국어) + 브레드크럼 네비게이션

### 푸터

- 배경: `#f2efe9` (따뜻한 크림)
- 3컬럼: 센터 정보 / 빠른 메뉴 / 소셜 네트워크
- 주소, 전화번호, 운영시간 포함
- Copyright © 2024 한겸복지센터

---

## 접근성 원칙 (노인 사용자 대상)

- 본문 최소 폰트: `text-base` (16px) 이상
- 제목은 `text-xl` 이상 사용
- 버튼 패딩 넉넉하게 (`px-6 py-3` 이상)
- 색상 대비 충분히 확보 (WCAG AA 기준)
- 링크/버튼 hover 상태 명확히 표시
- 클릭 영역 충분히 크게

---

## 파일 구조

```
hangyeom-welfare/
├── index.html        ← 메인(홈)
├── about.html        ← 센터 소개
├── programs.html     ← 프로그램 안내
├── notice.html       ← 공지사항
├── location.html     ← 오시는 길
├── css/
│   └── style.css     ← 커스텀 스타일 (필요시)
├── js/
│   └── main.js       ← 공통 JS (햄버거 메뉴 등)
└── assets/
    └── images/       ← 로고, 사진
```

---

## 페이지별 요구사항

### index.html (메인/홈)

- Hero 배너: 전체 화면 너비, 따뜻한 이미지 배경
- 3개 서비스 카드: 건강 프로그램 / 여가·문화 활동 / 복지 상담
- 공지사항 최신 4개 미리보기
- 포토 갤러리 가로 스크롤 스트립

### about.html (센터 소개)

- 인사말 (원장 사진 + 메시지)
- 설립 목적 & 비전 카드
- 주요 연혁 타임라인
- 조직도

### programs.html (프로그램 안내)

- 카테고리 필터 탭: 전체 / 건강·운동 / 여가·문화 / 교육 / 상담·복지
- 프로그램 카드 그리드 (아이콘, 이름, 설명, 요일/시간)

### notice.html (공지사항)

- 공지 목록 (번호, 말머리 배지, 제목, 날짜)
- 검색 바
- 페이지네이션

### location.html (오시는 길)

- 지도 영역 (카카오맵 embed 예정)
- 연락처 정보 카드
- 교통편 안내 (버스/지하철/자가용)
- 문의 폼

---

## 주의사항

- 모든 텍스트는 **한국어**
- 데스크탑 우선 설계 (min-width 1280px 기준), 반응형 지원
- 앱 스타일 UI 금지 (하단 탭바, FAB 버튼 등)
- 서버 없는 순수 정적 사이트 — 백엔드 연동 코드 작성 금지
- 문의 폼은 EmailJS 또는 mailto: 방식으로 처리
