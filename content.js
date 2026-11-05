/* ★ 수정하기 쉬운 콘텐츠 설정 파일 ★ */
const SITE_CONFIG = {
  // Formspree 회원가입 후 Integration의 주소를 통째로 붙여 넣으세요.
  // 예: "https://formspree.io/f/abcdefgh"
  formspreeEndpoint: "https://formspree.io/f/xyeeoprq",
  // 운영 전 index.html에 있는 YOUR NAME도 본인 이름/스튜디오명으로 교체하세요.
};

// 메인 Selected Works는 featured:true 중 앞의 3개만 보입니다. 전체 목록은 works.html에 모두 표시됩니다.
// project 이미지 경로를 assets/원하는파일명.jpg 등으로 바꾸세요.
// images 배열에 추가 이미지를 넣으면 상세 팝업에 순서대로 표시됩니다.

// 최하단에 역순으로 정렬되는 코드 삽입했으니 과거순으로 작업물 업로드 하면 됌
// 에셋 내 파일 찾는 방법 : id:"숫자번호"로 파일 숫자 표기
const PROJECTS = [
  {
    id: 1,
    featured: true,
    title: "여성 언더웨어\n상세페이지",
    category: "DETAIL PAGE",
    year: "2025",
    role: "New Product Launch",
    description:
      "여성 언더웨어 시장에서 '여성 건강과 통풍'이라는 명확한 차별점을 데이터 기반으로 시각화했습니다.",
    cover: "assets/detail01/SUM01.jpg",
    images: Array.from({ length: 24 }, (_, i) => {
      const num = i + 1;
      const fileName = String(num).padStart(2, "0");
      const gifNumbers = [2, 4, 7, 9, 11, 13, 16, 18, 20];
      const ext = gifNumbers.includes(num) ? "gif" : "jpg";
      return `assets/detail01/SKAB_${fileName}.${ext}`;
    }),
  },
  {
    id: 2,
    featured: false,
    title: "우동 포차 메뉴판",
    category: "PRINT DESIGN",
    year: "2026",
    role: "Restaurant business / MENU",
    description:
      "빠싹우동의 브랜드 콘셉트와 메뉴 특성을 반영하여 가독성과 시각적 완성도를 높인 메뉴판 디자인을 진행하였습니다.",
    cover: "assets/print2/SUM.jpg",
    images: ["assets/print2/BBASSAK_01.jpg"],
  },
  {
    id: 3,
    featured: false,
    title: "레디큐 증정이벤트 X배너",
    category: "PRINT DESIGN",
    year: "2026",
    role: "X-BANNER EVENT",
    description:
      "숙취해소제 레디큐 증정 이벤트로 비치용 X배너를 제작하였습니다.",
    cover: "assets/print3/SUM.jpg",
    images: ["assets/print3/READYq_01.jpg", "assets/print3/READYq_02.jpg"]
  },
  {
    id: 4,
    featured: false,
    title: "기업 팜플렛&브로슈어",
    category: "PRINT DESIGN",
    year: "2026",
    role: "Pamphlet / Brochure",
    description:
      "기업의 기술력과 제품력을 반영하여 정보를 명확하고 체계적으로 전달하도록 팜플렛 및 브로슈어를 제작하였습니다.",
    cover: "assets/print4/SUM.jpg",
    images: Array.from({ length: 7 }, (_, i) => {
      const num = i + 1;
      const fileName = String(num).padStart(2, "0");
      const gifNumbers = [];
      const ext = gifNumbers.includes(num) ? "gif" : "jpg";
      return `assets/print4/bridge_${fileName}.${ext}`;
    }),
  },
  {
    id: 5,
    featured: false,
    title: "겨울 드로즈\n상세페이지",
    category: "DETAIL PAGE",
    year: "2025",
    role: "New Product Launch",
    description:
      "제품의 기술력을 이미지 및 인포그래픽으로 전달하고 구매 전환율을 높이는 것을 목표로 기획했습니다",
    cover: "assets/detail05/SUM.jpg",
    images: Array.from({ length: 24 }, (_, i) => {
      const num = i + 1;
      const fileName = String(num).padStart(2, "0");
      const gifNumbers = [5, 9, 11, 13];
      const ext = gifNumbers.includes(num) ? "gif" : "jpg";
      return `assets/detail05/SKDH_${fileName}.${ext}`;
    }),
  },
  {
    id: 6,
    featured: false,
    title: "드로즈 스타터팩\n상세페이지",
    category: "DETAIL PAGE",
    year: "2025",
    role: "Starter Package",
    description:
      "메인 제품 3가지를 함께 입어볼 수 있는 스타터 패키지 상세페이지를 개별로 진행했습니다",
    cover: "assets/detail06/SUM.jpg",
    images: Array.from({ length: 18 }, (_, i) => {
      const num = i + 1;
      const fileName = String(num).padStart(2, "0");
      const gifNumbers = [7, 9, 11, 13, 15, 17];
      const ext = gifNumbers.includes(num) ? "gif" : "jpg";
      return `assets/detail06/SK-START_${fileName}.${ext}`;
    }),
  },
  {
    id: 7,
    featured: false,
    title: "반려 부적 마리모\n상세페이지",
    category: "DETAIL PAGE",
    year: "2025",
    role: "New Product Launch",
    description:
      "단순한 반려식물 판매를 넘어, 독창적인 성격을 가진 캐릭터 세계관을 부여하여 감성적인 가치를 전달하고 구매 전환율을 높이는 상세페이지 설계",
    cover: "assets/detail07/SUM.jpg",
    images: Array.from({ length: 4 }, (_, i) => {
      const num = i + 1;
      const fileName = String(num).padStart(2, "0");
      const gifNumbers = [2];
      const ext = gifNumbers.includes(num) ? "gif" : "jpg";
      return `assets/detail07/F-marimo_${fileName}.${ext}`;
    }),
  },
  {
    id: 8,
    featured: false,
    title: "성형외과 리투오 시술\n상세페이지",
    category: "DETAIL PAGE",
    year: "2026",
    role: "Plastic Surgery",
    description:
      "성형외과 마케팅을 위해 인기 시술인 리투오의 강남언니용 상세페이지를 제작하였습니다.",
    cover: "assets/detail08/SUM.jpg",
    images: ["assets/detail08/RE2O_01.jpg"],
  },
  {
    id: 9,
    featured: true,
    title: "안경 브랜드\n상세페이지",
    category: "DETAIL PAGE",
    year: "2026",
    role: "Brand & Product renewal",
    description:
      "안경 브랜드 아이덴티티 강화를 위하여 제품 업그레이드를 진행하여 상세페이지 리뉴얼을 진행하였습니다.",
    cover: "assets/detail09/SUM.jpg",
    images: Array.from({ length: 3 }, (_, i) => {
      const num = i + 1;
      const fileName = String(num).padStart(2, "0");
      const gifNumbers = [];
      const ext = gifNumbers.includes(num) ? "gif" : "jpg";
      return `assets/detail09/VISMITH_${fileName}.${ext}`;
    }),
  },
  {
    id: 10,
    featured: false,
    title: "침구류\n상세페이지",
    category: "DETAIL PAGE",
    year: "2026",
    role: "Brand & Product renewal",
    description:
      "브랜드 아이덴티티 강화를 위하여 제품의 특징을 살려 포근한 무드로 상세페이지 리뉴얼을 진행하였습니다.",
    cover: "assets/detail10/SUM.jpg",
    images: Array.from({ length: 3 }, (_, i) => {
      const num = i + 1;
      const fileName = String(num).padStart(2, "0");
      const gifNumbers = [];
      const ext = gifNumbers.includes(num) ? "gif" : "jpg";
      return `assets/detail10/CHNEL_${fileName}.${ext}`;
    }),
  },
  // {
  //   id: 11,
  //   featured: false,
  //   title: "식품 브랜드 로고제작",
  //   category: "BRAND IDENTITY",
  //   year: "2025",
  //   role: "LOGO DESIGN",
  //   description:
  //     "식품 브랜드를 론칭하여 로고를 제작하였습니다",
  //   cover: "assets/project-04.svg",
  //   images: ["assets/project-04.svg"],
  // },
];


/* ▼ 하단은 내가 프로젝트 정렬 관련 직접 추가한 코드들 with.GPT ▼ */

// 1. 최신 등록 프로젝트가 먼저 표시되도록 정렬
PROJECTS.sort((a, b) => b.id - a.id);

// 2. all 페이지에서 상세페이지 우선정렬 
const CATEGORY_ORDER = {
  "DETAIL PAGE": 1,
  "PRINT": 2,
  "BRAND IDENTITY": 3
};

PROJECTS.sort((a, b) => {
  const orderA = CATEGORY_ORDER[a.category] ?? 99;
  const orderB = CATEGORY_ORDER[b.category] ?? 99;

  // 카테고리 우선순위
  if (orderA !== orderB) {
    return orderA - orderB;
  }

  // 같은 카테고리라면 최신 등록순 (ID 높은 순)
  return b.id - a.id;
});
