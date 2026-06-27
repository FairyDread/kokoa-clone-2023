// 서울 맛집 데이터 (사진 · 주소 · 연락처)
const restaurants = [
    {
        name: "을지로 골뱅이",
        category: "한식",
        desc: "노포 감성 가득한 골뱅이무침과 소면, 직장인들의 회식 성지.",
        address: "서울 중구 을지로 13길 19",
        phone: "02-2274-1234",
        photo: "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?auto=format&fit=crop&w=600&q=70"
    },
    {
        name: "마포 진짜 숯불구이",
        category: "고기",
        desc: "참숯에 구워내는 두툼한 삼겹살과 목살. 마포 고기거리의 터줏대감.",
        address: "서울 마포구 도화동 마포대로 12",
        phone: "02-715-5678",
        photo: "https://images.unsplash.com/photo-1633896949673-1eb9d131a9b4?auto=format&fit=crop&w=600&q=70"
    },
    {
        name: "광장시장 빈대떡집",
        category: "한식",
        desc: "기름에 갓 부쳐낸 녹두 빈대떡과 막걸리. 서울 대표 전통시장 먹거리.",
        address: "서울 종로구 창경궁로 88 광장시장",
        phone: "02-2267-0291",
        photo: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=600&q=70"
    },
    {
        name: "성수동 화덕피자",
        category: "양식",
        desc: "장작 화덕에서 구워내는 나폴리 스타일 피자. 성수동 핫플레이스.",
        address: "서울 성동구 성수이로 78",
        phone: "02-462-7788",
        photo: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=70"
    },
    {
        name: "명동 칼국수",
        category: "면",
        desc: "진한 사골 육수에 손칼국수와 만두. 60년 전통 명동 골목 맛집.",
        address: "서울 중구 명동10길 29",
        phone: "02-776-5348",
        photo: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=600&q=70"
    },
    {
        name: "연남동 라멘바",
        category: "면",
        desc: "12시간 우려낸 돈코츠 육수의 진득한 라멘. 연트럴파크 옆 인기 맛집.",
        address: "서울 마포구 동교로 38길 21",
        phone: "02-322-9911",
        photo: "https://images.unsplash.com/photo-1557872943-16a5ac26437e?auto=format&fit=crop&w=600&q=70"
    },
    {
        name: "익선동 디저트 카페",
        category: "카페",
        desc: "한옥을 개조한 감성 카페. 수제 디저트와 핸드드립 커피.",
        address: "서울 종로구 수표로28길 17-35",
        phone: "02-763-2020",
        photo: "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=600&q=70"
    },
    {
        name: "강남 한우 다이닝",
        category: "고기",
        desc: "1++ 한우 오마카세. 특별한 날 찾기 좋은 강남 프리미엄 고깃집.",
        address: "서울 강남구 봉은사로 433",
        phone: "02-555-8282",
        photo: "https://images.unsplash.com/photo-1546964124-0cce460f38ef?auto=format&fit=crop&w=600&q=70"
    },
    {
        name: "한남동 브런치 하우스",
        category: "양식",
        desc: "에그 베네딕트와 팬케이크가 일품인 한남동 브런치 명소.",
        address: "서울 용산구 이태원로 248",
        phone: "02-797-4545",
        photo: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=600&q=70"
    },
    {
        name: "신당동 떡볶이",
        category: "한식",
        desc: "즉석 떡볶이의 원조. 라면사리와 쫄면을 넣어 끓여 먹는 매콤한 맛.",
        address: "서울 중구 다산로33길 5",
        phone: "02-2232-7872",
        photo: "https://images.unsplash.com/photo-1635363638580-c2809d049eee?auto=format&fit=crop&w=600&q=70"
    },
    {
        name: "북촌 한정식",
        category: "한식",
        desc: "정갈한 반상 차림의 전통 한정식. 외국인 손님에게도 인기.",
        address: "서울 종로구 북촌로 53",
        phone: "02-739-1314",
        photo: "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?auto=format&fit=crop&w=600&q=70"
    },
    {
        name: "삼청동 티 카페",
        category: "카페",
        desc: "전통 차와 양갱, 빙수를 즐길 수 있는 삼청동 고즈넉한 찻집.",
        address: "서울 종로구 삼청로 75-1",
        phone: "02-722-6363",
        photo: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=600&q=70"
    }
];

const grid = document.getElementById("restaurant-grid");
const searchInput = document.getElementById("search-input");
const filtersEl = document.getElementById("filters");
const resultCount = document.getElementById("result-count");
const noResult = document.getElementById("no-result");

let activeCategory = "all";
let keyword = "";

function escapeHtml(str) {
    return str.replace(/[&<>"']/g, (c) => ({
        "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
    }[c]));
}

// 이미지 로드 실패 시 보여줄 폴백 (음식 이모지 SVG)
const FALLBACK_IMG = "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="600" height="380">' +
    '<rect width="100%" height="100%" fill="#ffe9e4"/>' +
    '<text x="50%" y="50%" font-size="90" text-anchor="middle" dominant-baseline="central">🍽️</text>' +
    '</svg>'
);

function cardTemplate(r) {
    const telHref = "tel:" + r.phone.replace(/[^0-9+]/g, "");
    const mapHref = "https://map.naver.com/v5/search/" + encodeURIComponent(r.name + " " + r.address);
    return `
        <article class="card">
            <img class="card__photo" src="${r.photo}" alt="${escapeHtml(r.name)} 사진" loading="lazy"
                 onerror="this.onerror=null;this.src='${FALLBACK_IMG}'" />
            <div class="card__body">
                <span class="card__category">${escapeHtml(r.category)}</span>
                <h2 class="card__name">${escapeHtml(r.name)}</h2>
                <p class="card__desc">${escapeHtml(r.desc)}</p>
                <div class="card__info">
                    <div class="card__info-row">
                        <i class="ico">📍</i>
                        <a href="${mapHref}" target="_blank" rel="noopener">${escapeHtml(r.address)}</a>
                    </div>
                    <div class="card__info-row">
                        <i class="ico">📞</i>
                        <a href="${telHref}">${escapeHtml(r.phone)}</a>
                    </div>
                </div>
            </div>
        </article>
    `;
}

function render() {
    const list = restaurants.filter((r) => {
        const matchCategory = activeCategory === "all" || r.category === activeCategory;
        const haystack = (r.name + r.desc + r.address + r.category).toLowerCase();
        const matchKeyword = haystack.includes(keyword.toLowerCase());
        return matchCategory && matchKeyword;
    });

    grid.innerHTML = list.map(cardTemplate).join("");
    resultCount.textContent = `총 ${list.length}곳의 맛집`;
    noResult.hidden = list.length !== 0;
}

filtersEl.addEventListener("click", (e) => {
    const btn = e.target.closest(".filter");
    if (!btn) return;
    activeCategory = btn.dataset.category;
    document.querySelectorAll(".filter").forEach((b) => b.classList.remove("filter--active"));
    btn.classList.add("filter--active");
    render();
});

searchInput.addEventListener("input", (e) => {
    keyword = e.target.value.trim();
    render();
});

render();
