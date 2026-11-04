포트폴리오 웹사이트 사용 가이드
=======================================
1. index.html을 더블클릭하면 현재 디자인 미리보기가 가능합니다.
2. 실제로 메일 전송을 테스트하려면 호스팅 서비스에 업로드하고 Formspree를 연결하세요.
3. 먼저 https://formspree.io/register 에서 계정을 만들고 이메일을 인증합니다.
4. Formspree 대시보드에서 New Form 생성 → Integration 탭의 endpoint를 복사합니다.
5. content.js의 formspreeEndpoint: "" 에 https://formspree.io/f/실제ID 를 넣고 저장합니다.
6. 본인 정보 입력: index.html에서 YOUR NAME / 연락처 / 소개 문구를 변경합니다.
7. 작업 이미지 교체: assets/ 폴더에 jpg/png/webp를 넣고 content.js의 cover와 images 파일명을 수정합니다.
8. 작업 추가: content.js의 PROJECTS 배열에 새 객체를 추가합니다. id는 서로 달라야 합니다.
9. 메인 이미지는 assets/hero.svg, 자기소개 이미지는 assets/about.svg를 교체하거나 index.html 경로를 바꿉니다.
10. 색상과 글꼴, 여백은 style.css 최상단 :root 변수 및 CSS에서 수정합니다.
11. 배포는 정적 호스팅(Netlify, GitHub Pages, Cloudflare Pages 등)에 폴더 전체를 올리면 됩니다.
12. 실제 서비스 공개 전 개인정보 처리방침(운영자/보유기간/연락처)을 본인 상황에 맞게 반드시 확정하세요.
13. Formspree 무료 플랜은 월 50건 제출 제한 등의 정책이 있습니다. 필요시 공식 요금표를 확인하세요.
14. 샘플 콘텐츠/이미지는 가상 예시입니다. 실제 작업물 및 사용 권한이 있는 이미지로 교체하세요.
15. 자동 회신 메일은 무료 플랜에 기본 제공되지 않을 수 있습니다. 기본 기능은 운영자에게 문의 알림을 전달하는 것입니다.
16. 이 템플릿은 빌드 도구와 백엔드가 필요 없는 정적 웹사이트입니다.
=======================================

[2026-10-29 업데이트] 메인 index.html은 featured:true 프로젝트 앞 3개만 보여줍니다. VIEW ALL WORKS는 별도의 works.html로 이동합니다. works.html은 모든 프로젝트와 카테고리 필터를 표시합니다. content.js에서 featured:true/false를 변경해 대표작을 지정하세요. 배포 시 works.html 파일도 반드시 함께 업로드하세요.
