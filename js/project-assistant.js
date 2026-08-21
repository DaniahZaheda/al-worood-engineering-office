// =====================================================
// Project Assistant
// =====================================================

const assistant = document.getElementById("projectAssistant");
const openAssistant = document.getElementById("openProjectAssistant");
const closeAssistant = document.getElementById("closeProjectAssistant");
const assistantOverlay = document.getElementById("assistantOverlay");

const steps = document.querySelectorAll(".assistant-step");

const progress = document.getElementById("assistantProgress");
const stepText = document.getElementById("assistantStepText");

const generateButton =
    document.getElementById("generateRecommendation");

const restartButton =
    document.getElementById("restartAssistant");

const whatsappButton =
    document.getElementById("assistantContact");


// =====================================================
// WhatsApp Number
// =====================================================

// رقم المكتب المخصص لاستقبال تفاصيل المشاريع من المساعد
const officeWhatsApp = "972597289726";


// =====================================================
// Assistant Data
// =====================================================

const projectData = {

    type: null,

    service: null,

    area: "",

    location: "",

    description: ""

};


// =====================================================
// Open Assistant
// =====================================================

openAssistant.addEventListener("click", () => {

    assistant.classList.add("active");

    assistant.setAttribute("aria-hidden", "false");

    document.body.style.overflow = "hidden";

});


// =====================================================
// Close Assistant
// =====================================================

function closeProjectAssistant() {

    assistant.classList.remove("active");

    assistant.setAttribute("aria-hidden", "true");

    document.body.style.overflow = "";

}


closeAssistant.addEventListener(
    "click",
    closeProjectAssistant
);


assistantOverlay.addEventListener(
    "click",
    closeProjectAssistant
);


// =====================================================
// Escape Key
// =====================================================

document.addEventListener("keydown", (event) => {

    if (
        event.key === "Escape" &&
        assistant.classList.contains("active")
    ) {

        closeProjectAssistant();

    }

});


// =====================================================
// Step Navigation
// =====================================================

function showStep(stepNumber) {

    steps.forEach(step => {

        step.classList.remove("active");

        if (
            Number(step.dataset.step) === stepNumber
        ) {

            step.classList.add("active");

        }

    });


    const percentage =
        (stepNumber / 4) * 100;


    progress.style.width =
        `${percentage}%`;


    stepText.textContent =
        `${stepNumber} من 4`;

}


// =====================================================
// Option Selection
// =====================================================

document.querySelectorAll(".assistant-option").forEach(option => {

    option.addEventListener("click", () => {

        const currentStep =
            option.closest(".assistant-step");

        const stepNumber =
            Number(currentStep.dataset.step);

        const value =
            option.dataset.value;


        // Step 1 - Project Type

        if (stepNumber === 1) {

            projectData.type = value;

        }


        // Step 2 - Required Service

        if (stepNumber === 2) {

            projectData.service = value;

        }


        showStep(stepNumber + 1);

    });

});


// =====================================================
// Generate Recommendation
// =====================================================

generateButton.addEventListener("click", () => {

    projectData.area =
        document
            .getElementById("projectArea")
            .value
            .trim();


    projectData.location =
        document
            .getElementById("projectLocation")
            .value
            .trim();


    projectData.description =
        document
            .getElementById("projectDescription")
            .value
            .trim();


    const result =
        getRecommendation();


    document.getElementById(
        "recommendationTitle"
    ).textContent = result.title;


    document.getElementById(
        "recommendationText"
    ).textContent = result.description;


    document.getElementById(
        "recommendationService"
    ).textContent = result.service;


    showStep(4);

});


// =====================================================
// Smart Recommendation
// =====================================================

function getRecommendation() {

    const {
        type,
        service
    } = projectData;


    // ==================== Interior Design ====================

    if (
        type === "interior" ||
        service === "interior-design"
    ) {

        return {

            title:
                "يبدو أن مشروعك يحتاج إلى تصميم داخلي",

            description:
                "بناءً على المعلومات التي شاركتها، يمكن أن تكون البداية المناسبة هي دراسة المساحات الداخلية وتطوير تصور يجمع بين الراحة والجمال والهوية الخاصة بالمكان.",

            service:
                "التصميم الداخلي"

        };

    }


    // ==================== Supervision ====================

    if (service === "supervision") {

        return {

            title:
                "مشروعك يحتاج إلى إشراف هندسي",

            description:
                "إذا كان المشروع في مرحلة التنفيذ، فإن الإشراف الهندسي يساعد على متابعة الأعمال والتأكد من توافق التنفيذ مع المخططات والمتطلبات الهندسية.",

            service:
                "الإشراف الهندسي"

        };

    }


    // ==================== Engineering Plans ====================

    if (service === "plans") {

        return {

            title:
                "مشروعك يحتاج إلى مخططات هندسية",

            description:
                "الخطوة المناسبة هي إعداد وتنظيم المخططات الهندسية اللازمة للمشروع بما يتناسب مع متطلباته وطبيعة الموقع.",

            service:
                "المخططات الهندسية"

        };

    }


    // ==================== Architecture ====================

    if (
        type === "residential" ||
        type === "commercial" ||
        service === "architecture"
    ) {

        return {

            title:
                "يمكن أن نبدأ بالتصميم المعماري",

            description:
                "بناءً على نوع المشروع، يُنصح بالبدء بفهم احتياجاتك وطبيعة الموقع ثم تطوير فكرة معمارية تحقق التوازن بين الوظيفة والهوية والتفاصيل.",

            service:
                "التصميم المعماري"

        };

    }


    // ==================== Unsure / Other ====================

    return {

        title:
            "لنحدد احتياج مشروعك معًا",

        description:
            "يبدو أن مشروعك يحتاج إلى مناقشة بعض التفاصيل قبل تحديد الخدمة الأنسب. يمكن لفريق المكتب مساعدتك في تحديد الخطوة المناسبة بعد الاطلاع على فكرة المشروع.",

        service:
            "استشارة مبدئية"

    };

}


// =====================================================
// Arabic Labels
// =====================================================

function getProjectTypeName(type) {

    const types = {

        residential:
            "منزل أو فيلا",

        commercial:
            "مشروع تجاري",

        interior:
            "تصميم داخلي",

        other:
            "مشروع آخر"

    };


    return types[type] || "غير محدد";

}


function getServiceName(service) {

    const services = {

        architecture:
            "التصميم المعماري",

        plans:
            "المخططات الهندسية",

        "interior-design":
            "التصميم الداخلي",

        supervision:
            "الإشراف الهندسي",

        unsure:
            "لست متأكدًا"

    };


    return services[service] || "غير محددة";

}


// =====================================================
// Send Project to WhatsApp
// =====================================================

function sendProjectToWhatsApp() {

    const result = getRecommendation();

    const projectType = getProjectTypeName(projectData.type);

    const service = getServiceName(projectData.service);


    const message =
`مرحبًا مكتب الورود الهندسي،

أرغب بالاستفسار عن مشروع جديد.

━━━━━━━━━━━━━━━━━━

تفاصيل المشروع

نوع المشروع:
${projectType}

الخدمة المطلوبة:
${service}

المساحة التقريبية:
${projectData.area || "غير محددة"}

موقع المشروع:
${projectData.location || "غير محدد"}

تفاصيل الفكرة:
${projectData.description || "لا توجد تفاصيل إضافية"}

━━━━━━━━━━━━━━━━━━

التوجيه المبدئي:

${result.title}

الخدمة المقترحة:
${result.service}

━━━━━━━━━━━━━━━━━━

أرغب بالتواصل معكم لمناقشة تفاصيل المشروع بشكل أكبر.

شكرًا لكم.`;


    const whatsappURL =
        `https://wa.me/${officeWhatsApp}?text=${encodeURIComponent(message)}`;


    window.open(
        whatsappURL,
        "_blank",
        "noopener,noreferrer"
    );

}


// =====================================================
// WhatsApp Button
// =====================================================

if (whatsappButton) {

    whatsappButton.addEventListener(
        "click",
        sendProjectToWhatsApp
    );

}


// =====================================================
// Restart Assistant
// =====================================================

restartButton.addEventListener("click", () => {

    projectData.type = null;

    projectData.service = null;

    projectData.area = "";

    projectData.location = "";

    projectData.description = "";


    const areaInput =
        document.getElementById("projectArea");


    const locationInput =
        document.getElementById("projectLocation");


    const descriptionInput =
        document.getElementById("projectDescription");


    if (areaInput) {

        areaInput.value = "";

    }


    if (locationInput) {

        locationInput.value = "";

    }


    if (descriptionInput) {

        descriptionInput.value = "";

    }


    showStep(1);

});