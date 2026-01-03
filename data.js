const siteData = {
    en: {
        title: "Au Shun Ying | Portfolio",
        name: "Au Shun Ying",
        tagline: "Software & ML Developer | Mobile Apps • AI Systems • 3D Modeling & Interactive Design",
        summaryTitle: "Summary",
        summary: "Computer Science graduate with experience in machine learning, Android development, and interactive system design. Built an AI-assisted fine motor assessment app using TensorFlow and Android Studio. Passionate about building tools that are practical, intuitive, and user-centered.",
        skillsTitle: "01 PROFESSIONAL SKILLS",
        projectsTitle: "02 PORTFOLIO",
        latestWork: "MY LATEST WORK",
        contactTitle: "Contact",
        skillCategories: [
            {
                name: "Coding & Development",
                list: [
                    { name: "Python", level: 4, percent: "80%" },
                    { name: "JavaScript (Fetch API)", level: 3, percent: "60%" },
                    { name: "C/C++", level: 2, percent: "40%" },
                    { name: "HTML/CSS", level: 4, percent: "80%" },
                    { name: "Android Studio", level: 2, percent: "40%" },
                    { name: "MySQL / H2 Database / Firebase", level: 2, percent: "40%" },
                    { name: "Git / GitHub", level: 4, percent: "80%" },
                    { name: "Java / Spring Boot 3", level: 3, percent: "60%" },
                    { name: "RESTful API / JPA", level: 1, percent: "20%" },
                    { name: "JPA / Hibernate", level: 1, percent: "20%" }
                ]
            },
            {
                name: "Machine Learning & Data",
                list: [
                    { name: "TensorFlow", level: 3, percent: "60%" },
                    { name: "Data Preprocessing", level: 4, percent: "80%" },
                    { name: "Model Training", level: 3, percent: "60%" },
                    { name: "Google Colab", level: 4, percent: "80%" }
                ]
            },
            {
                name: "Tools & Creativity",
                list: [
                    { name: "p5.js (Creative Coding)", level: 4, percent: "80%" },
                    { name: "Onshape (3D Modeling)", level: 4, percent: "80%" },
                    { name: "GIMP (Image Editing)", level: 2, percent: "40%" },
                    { name: "Electronics", level: 2, percent: "40%" },
                    { name: "Mechanics", level: 2, percent: "40%" }
                ]
            },
            {
                name: "Languages",
                list: [
                    { name: "Cantonese", level: 5, percent: "100%" },
                    { name: "English", level: 4, percent: "80%" },
                    { name: "Mandarin", level: 4, percent: "80%" }
                ]
            },
            {
                name: "Office Productivity",
                list: [
                    { name: "Word", level: 4, percent: "80%" },
                    { name: "Excel", level: 4, percent: "80%" },
                    { name: "PowerPoint", level: 4, percent: "80%" },
                    { name: "Access", level: 3, percent: "60%" }
                ]
            }
        ],
        projects: [
            {
                title: "Children's Fine Motor Assessment System App",
                tech: "Android Studio • Python • TensorFlow • CNN • Image Processing",
                desc: "A complete Android-based assessment system designed for measuring children's fine motor development. The app includes registration/login, guided test procedures, automated scoring models, and a database-backed result system. Features three test types (shape copying, path tracing, handwriting), left/right hand adaptive UI, and multi-device screen compatibility.",
                link: "./cfmas/cfmas.html"
            },
            {
                title: "i-gery (Assistive Mobility System)",
                tech: "HTML • SQL • C++ • Electronics • Mechanics",
                desc: "An electric assistive mobility platform and QR-based management system designed to help caregivers safely transport high-back geriatric chairs in elderly homes.",
                link: "./i-gery/i-gery.html"
            },
            {
                title: "Onshape 3D Modeling Projects",
                tech: "Onshape • CAD",
                desc: "A collection of CAD models inspaired by my interst in prop making.",
                link: "./onshape/onshape.html"
            },
            {
                title: "Todo API",
                tech: "Java • Spring Boot • Security • JPA",
                desc: "This is a complete to-do list application developed using Spring Boot. It features full CRUD functionality, a user-friendly front-end interface, and a security filtering mechanism based on API keys.",
                link: "https://github.com/TonyapsceAU/todo-api.git"
            },
            {
                title: "Finance Manager",
                tech: "Java • JPA • H2 Database",
                desc: "A desktop application for personal financial tracking featuring real-time budget monitoring and automated trend analysis. It utilizes FlatLaf for a modern UI experience and GSON for reliable JSON data persistence. Key features include category-based spending visualization, large-transaction filtering, and color-coded budget alerts.",
                link: "https://github.com/TonyapsceAU/FinanceManager.git"
            }
        ]
    },
    zh: {
        title: "區迅礽 | 個人作品集",
        name: "區迅礽",
        tagline: "軟體與機器學習開發者 | 行動應用 • AI 系統 • 3D 建模與互動設計",
        summaryTitle: "簡介",
        summary: "資工背景，具備機器學習、Android 開發與互動系統設計經驗。曾開發基於 TensorFlow 的 AI 精細動作評估系統。",
        skillsTitle: "01 專業技能",
        projectsTitle: "02 作品集",
        latestWork: "最新作品",
        contactTitle: "聯絡方式",
        skillCategories: [
            {
                name: "程式開發",
                list: [
                    { name: "Python", level: 4, percent: "80%" },
                    { name: "JavaScript (Fetch API)", level: 3, percent: "80%" },
                    { name: "C/C++", level: 2, percent: "60%" },
                    { name: "HTML/CSS", level: 4, percent: "60%" },
                    { name: "Android Studio", level: 2, percent: "80%" },
                    { name: "MySQL / H2 Database / Firebase", level: 2, percent: "80%" },
                    { name: "Git / GitHub", level: 4, percent: "80%" },
                    { name: "Java / Spring Boot 3", level: 3, percent: "60%" },
                    { name: "RESTful API / JPA", level: 1, percent: "60%" },
                    { name: "JPA / Hibernate", level: 1, percent: "80%" }
                ]
            },
            {
                name: "機器學習與資料處理",
                list: [
                    { name: "TensorFlow", level: 3, percent: "60%" },
                    { name: "資料處理", level: 4, percent: "80%" },
                    { name: "模型訓練", level: 3, percent: "60%" },
                    { name: "Google Colab", level: 4, percent: "80%" }
                ]
            },
            {
                name: "工具與創作",
                list: [
                    { name: "p5.js (創意編程)", level: 4, percent: "80%" },
                    { name: "Onshape (3D建模)", level: 4, percent: "80%" },
                    { name: "GIMP (影像編輯)", level: 2, percent: "40%" },
                    { name: "電子電路", level: 2, percent: "40%" },
                    { name: "機構設計", level: 2, percent: "40%" }
                ]
            },
            {
                name: "語言能力",
                list: [
                    { name: "粵語", level: 5, percent: "100%" },
                    { name: "英語", level: 4, percent: "80%" },
                    { name: "華語", level: 4, percent: "80%" }
                ]
            },
            {
                name: "文書工具",
                list: [
                    { name: "Word", level: 4, percent: "80%" },
                    { name: "Excel", level: 4, percent: "80%" },
                    { name: "PowerPoint", level: 4, percent: "80%" },
                    { name: "Access", level: 3, percent: "60%" }
                ]
            }
        ],
        projects: [
            {
                title: "兒童精細動作評估系統",
                tech: "Android Studio • Python • TensorFlow • CNN • 影像處理",
                desc: "一款專為兒童精細動作能力檢測打造的 Android 系統。提供登入註冊、 引導式測驗流程、自動化評分模型以及資料庫管理。 內含三項測驗（圖形仿畫、路徑內臨摹、文字謄寫），並內建左右手 UI 切換與多裝置螢幕相容功能。",
                link: "./cfmas/cfmas.html"
            },
            {
                title: "i-gery（高背椅輔助移動系統）",
                tech: "HTML • SQL • C++ • 電子電路 • 機構設計",
                desc: "為安老院的高背椅設計的電動輔助移動平台與 QR 管理系統，提升照護人員在搬運過程中的安全與效率。",
                link: "./i-gery/i-gery.html"
            },
            {
                title: "Onshape 3D建模項目",
                tech: "Onshape • CAD",
                desc: "一系列 3D 武器與道具模型，基於我對道具製作的興趣，以 CAD 工具完整重建其機械結構。",
                link: "./onshape/onshape.html"
            },
            {
                title: "待辦事項 API",
                tech: "Java • Spring Boot • 安全性 • JPA",
                desc: "這是一個基於 Spring Boot 開發的完整待辦清單 (Todo List) 程式。具備完整的 CRUD 功能、前端操作介面，以及基於 API Key 的安全性過濾機制。",
                link: "https://github.com/TonyapsceAU/todo-api.git"
            },
            {
                title: "財務管理系統",
                tech: "Java • JPA • H2 資料庫",
                desc: "具備即時預算監控與自動化趨勢分析功能的桌面財務工具。採用 FlatLaf 打造支援深色模式的現代化介面，並整合 GSON 實現穩定的 JSON 資料持久化。核心功能包含消費類別視覺化圖表、大額支出篩選以及預算超額自動警示。",
                link: "https://github.com/TonyapsceAU/FinanceManager.git"
            }
        ]
    }
};

function initPage(lang) {
    const d = siteData[lang];
    if (!d) return;

    // --- 新增：更新語言切換按鈕 ---
    const langControl = document.getElementById('lang-control');
    if (langControl) {
        // 如果現在是中文，顯示切換到 "EN" 的按鈕；反之亦然
        const targetLang = lang === 'zh' ? 'en' : 'zh';
        const label = lang === 'zh' ? 'EN' : 'ZH';
        langControl.innerHTML = `<a href="javascript:void(0)" class="lang-switch" onclick="initPage('${targetLang}')">${label}</a>`;
    }

    // --- 1. 更新基本文字 (textContent 會覆蓋舊文字) ---
    document.title = d.title;
    document.querySelector('h1').textContent = d.name;
    document.querySelector('.tagline').textContent = d.tagline;
    document.querySelector('.summary h2').textContent = d.summaryTitle;
    document.querySelector('.summary p').textContent = d.summary;
    document.querySelector('.skills h2').textContent = d.skillsTitle;
    document.querySelector('.projects h2').textContent = d.projectsTitle;
    // 修正：對應 index.html 中的 class name "latest-label"
    const latestLabel = document.querySelector('.latest-label');
    if (latestLabel) latestLabel.textContent = d.latestWork;
    document.querySelector('.contact h2').textContent = d.contactTitle;

    // 2. 更新技能區塊
    const skillsContainer = document.querySelector('.skills');
    // 重要：清除舊的列表，避免重複切換時內容一直疊加
    const oldLists = skillsContainer.querySelectorAll('h3, .skill-list');
    oldLists.forEach(el => el.remove());

    d.skillCategories.forEach(cat => {
        const h3 = document.createElement('h3');
        h3.textContent = cat.name;
        skillsContainer.appendChild(h3);

        const ul = document.createElement('ul');
        ul.className = 'skill-list';
        ul.innerHTML = cat.list.map(s => `
            <li data-level="${s.level}">
                <span class="skill-name">${s.name}</span>
                <div class="skill-bar-container"><div class="skill-bar" style="width: ${s.percent};"></div></div>
            </li>
        `).join('');
        skillsContainer.appendChild(ul);
    });

    // 3. 更新作品集
    const projectsContainer = document.querySelector('.projects');
    const oldCards = projectsContainer.querySelectorAll('.project-card');
    oldCards.forEach(card => card.remove());

    d.projects.forEach(p => {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.innerHTML = `
            <h3>${p.title}</h3>
            <p class="tech">${p.tech}</p>
            <p>${p.desc}</p>
            <a href="${p.link}" class="btn">${lang === 'zh' ? '查看專案' : 'View Project'}</a>
        `;
        projectsContainer.appendChild(card);
    });
}