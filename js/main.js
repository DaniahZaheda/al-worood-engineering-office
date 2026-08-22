// ==================== Elements ====================

const header = document.getElementById("header");
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");


// ==================== Header on Scroll ====================

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

});


// ==================== Mobile Menu ====================

menuToggle.addEventListener("click", () => {

    navMenu.classList.toggle("active");

    const icon = menuToggle.querySelector("i");

    const isOpen = navMenu.classList.contains("active");

    menuToggle.setAttribute("aria-expanded", isOpen);

    if (isOpen) {

        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");

    } else {

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    }

});


// ==================== Close Mobile Menu ====================

document.querySelectorAll(".nav-link").forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

        const icon = menuToggle.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

        menuToggle.setAttribute("aria-expanded", "false");

    });

});



// =====================================================
// Project Details Modal
// =====================================================

const projectModal = document.getElementById("projectModal");
const projectModalClose = document.getElementById("projectModalClose");
const projectModalOverlay = document.getElementById("projectModalOverlay");

const modalProjectImage = document.getElementById("modalProjectImage");
const modalProjectCategory = document.getElementById("modalProjectCategory");
const modalProjectTitle = document.getElementById("modalProjectTitle");
const modalProjectEnglish = document.getElementById("modalProjectEnglish");
const modalProjectDescription = document.getElementById("modalProjectDescription");


// ==================== Project Data ====================

const projectsData = {

    project1: {

        image: "assets/images/projects/project-01.jpeg",

        category: "تصميم معماري",

        title: "فيلا سكنية فاخرة بالطراز الكلاسيكي الحديث",

        english: "Neoclassic Villa",

        description:
            "تصميم معماري خارجي لفيلا سكنية تجمع بين فخامة الطراز الكلاسيكي ولمسات الحداثة العصرية. يتميز التصميم بمدخل رئيسي مهيب مدعوم بأعمدة كورنثية مرتفعة وشرفة دائرية بارزة، مع درج خارجي منحني يضفي انسيابية وجاذبية على الواجهة. تم اعتماد الأحجار الفاتحة مع نوافذ زجاجية طولية وأقواس كلاسيكية تسمح بدخول الإضاءة الطبيعية وتوفر إطلالة مميزة."
    },


    project2: {

        image: "assets/images/projects/project-02.jpeg",

        category: "مشروع تجاري واستثماري",

        title: "مجمع مولات ",

        english: "Modern Commercial Mall",

        description:
            "تصميم معماري عصري لمجمع تجاري. يتميز المبنى بتكوين كتلي ديناميكي يدمج بين الخطوط المنحنية والانسيابية في الأبراج الجانبية، والكتل الهندسية الحادة في المنتصف. اعتُمد في الواجهات تباين جريء وأنيق بين الألومنيوم الأسود والأبيض، مع إدخال اللون البنفسجي الداكن (Burgundy) كعنصر بصري مميز، إلى جانب واجهات زجاجية واسعة توفر إضاءة طبيعية ممتازة ومساحات عرض جذابة."
    },


    project3: {

        image: "assets/images/projects/project-03.png",

        category: "تصميم معماري",

        title: "ديوان آل التميمي",

        english: "Diwan Al-Tamimi",

        description:
            "تصميم معماري فاخر لمدخل وسور خارجي لـ \"ديوان\" يجمع بين هيبة التراث العربي والأناقة المعمارية الحديثة. يبرز التصميم بوابة رئيسية ضخمة تعلوها قوس حجرية عريضة ومدخل حديدي مشغول بدقة. تم تنسيق الواجهات الحجرية المقسمة بإطارات هندسية متناسقة، مع خلفية كتلتية مدرجة بلون زيتي داكن وقوس خلفي مهيب يُضفي عمقاً بصرياً وثراءً للمشهد المعماري العام."
    },


    project4: {

        image: "assets/images/projects/project-04.jpeg",

        category: "تصميم معماري",

        title: "فيلا سكنية حديثة بالطراز المعاصر",

        english: "Contemporary Villa",

        description:
            "تصميم معماري معاصر لفيلا سكنية تمزج بين البساطة الهندسية والتناغم. يبرز التصميم تداخلاً ذكياً بين الكتل الخرسانية ذات اللون الرمادي الفاتح واللمسات الخشبية الدافئة، مع واجهات زجاجية طولية تضمن دخول الإضاءة الطبيعية. يتميز المشروع بوجود درج خارجي منحني يربط المداخل بانسيابية."
    }

};


// ==================== Open Modal ====================

document.querySelectorAll(".project-details-btn").forEach(button => {

    button.addEventListener("click", () => {

        const projectId = button.dataset.project;

        const project = projectsData[projectId];

        if (!project) return;


        modalProjectImage.src = project.image;

        modalProjectImage.alt = project.title;

        modalProjectCategory.textContent = project.category;

        modalProjectTitle.textContent = project.title;

        modalProjectEnglish.textContent = project.english;

        modalProjectDescription.textContent = project.description;


        projectModal.classList.add("active");

        projectModal.setAttribute("aria-hidden", "false");

        document.body.style.overflow = "hidden";

    });

});


// ==================== Close Modal ====================

function closeProjectModal() {

    projectModal.classList.remove("active");

    projectModal.setAttribute("aria-hidden", "true");

    document.body.style.overflow = "";

}


// Close button

projectModalClose.addEventListener(
    "click",
    closeProjectModal
);


// Close when clicking overlay

projectModalOverlay.addEventListener(
    "click",
    closeProjectModal
);


// Close with Escape

document.addEventListener("keydown", event => {

    if (
        event.key === "Escape" &&
        projectModal.classList.contains("active")
    ) {

        closeProjectModal();

    }

});
