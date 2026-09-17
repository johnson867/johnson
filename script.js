/* =====================================================
   MOBILE NAVIGATION
===================================================== */

const menuToggle =
    document.getElementById("menuToggle");

const navMenu =
    document.getElementById("navMenu");


if (menuToggle && navMenu) {

    menuToggle.addEventListener("click", () => {

        navMenu.classList.toggle("active");

    });


    /* Close menu after clicking a link */

    document.querySelectorAll(".nav-link").forEach(link => {

        link.addEventListener("click", () => {

            navMenu.classList.remove("active");

        });

    });

}


/* =====================================================
   ACTIVE NAVIGATION
===================================================== */

const sections =
    document.querySelectorAll("section[id]");

const navLinks =
    document.querySelectorAll(".nav-link");


window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 160;

        const sectionHeight =
            section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY <
            sectionTop + sectionHeight
        ) {

            currentSection =
                section.getAttribute("id");

        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            `#${currentSection}`
        ) {

            link.classList.add("active");

        }

    });

});


/* =====================================================
   CREATIVE FILTERS
===================================================== */

const creativeFilters =
    document.querySelectorAll(
        ".creative-filter"
    );


const creativeCards =
    document.querySelectorAll(
        ".creative-card"
    );


creativeFilters.forEach(filter => {

    filter.addEventListener("click", () => {

        const selectedFilter =
            filter.getAttribute(
                "data-filter"
            );


        /* Active button */

        creativeFilters.forEach(button => {

            button.classList.remove("active");

        });


        filter.classList.add("active");


        /* Filter creative work */

        creativeCards.forEach(card => {

            const category =
                card.getAttribute(
                    "data-category"
                );


            if (
                selectedFilter === "all" ||
                category === selectedFilter
            ) {

                card.classList.remove("hidden");

            } else {

                card.classList.add("hidden");

            }

        });

    });

});


/* =====================================================
   DARK / LIGHT MODE
===================================================== */

const themeToggle =
    document.getElementById("themeToggle");


function setTheme(isDark) {

    document.body.classList.toggle("dark-mode", isDark);

    if (themeToggle) {

        themeToggle.setAttribute(
            "aria-checked",
            isDark ? "true" : "false"
        );

    }

    localStorage.setItem(
        "theme",
        isDark ? "dark" : "light"
    );

}


if (themeToggle) {

    themeToggle.addEventListener("click", () => {

        const isDark =
            !document.body.classList.contains("dark-mode");

        setTheme(isDark);

    });


    /* Load saved theme (falls back to the visitor's OS preference) */

    const savedTheme =
        localStorage.getItem("theme");

    const prefersDark =
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {

        setTheme(true);

    }

}


/* =====================================================
   PROJECT FILTERS
===================================================== */

const projectFilters =
    document.querySelectorAll(
        ".project-filter"
    );


const projectCards =
    document.querySelectorAll(
        ".project-card"
    );


projectFilters.forEach(filter => {

    filter.addEventListener("click", () => {

        const selectedFilter =
            filter.getAttribute(
                "data-filter"
            );


        /* Active button */

        projectFilters.forEach(button => {

            button.classList.remove("active");

        });


        filter.classList.add("active");


        /* Filter projects */

        projectCards.forEach(card => {

            const category =
                card.getAttribute(
                    "data-category"
                );


            if (
                selectedFilter === "all" ||
                category === selectedFilter
            ) {

                card.classList.remove("hidden");

            } else {

                card.classList.add("hidden");

            }

        });

    });

});


/* =========================================
   CONTACT FORM → WHATSAPP
========================================= */

const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name =
            document.getElementById("name").value.trim();

        const email =
            document.getElementById("email").value.trim();

        const service =
            document.getElementById("service").value;

        const message =
            document.getElementById("message").value.trim();


        /*
            Your WhatsApp number
            Kenya country code: 254
        */

        const whatsappNumber = "254703327796";


        const whatsappMessage =
`Hello Johnson,

My name is ${name}.

Email: ${email}

I'm interested in: ${service}

Project details:
${message}

I found your portfolio website and would like to discuss this project with you.`;


        const whatsappURL =
            `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;


        window.open(whatsappURL, "_blank");


        formStatus.textContent =
            "Opening WhatsApp...";

        formStatus.style.display = "block";

        formStatus.style.color =
            "var(--accent-color)";


        setTimeout(() => {

            contactForm.reset();

            formStatus.style.display = "none";

        }, 3000);

    });

}

/* =========================================
   CURRENT YEAR
========================================= */

const currentYear = document.getElementById("currentYear");

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}


/* =========================================
   BACK TO TOP
========================================= */

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        backToTop.classList.add("show");

    } else {

        backToTop.classList.remove("show");

    }

});


backToTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

/* =========================================
   PORTFOLIO CHATBOT
========================================= */

const chatbotOpen = document.getElementById("chatbotOpen");
const chatbotClose = document.getElementById("chatbotClose");

const chatbotWrapper = document.getElementById("chatbotWrapper");

const chatbotMessages = document.getElementById("chatbotMessages");
const chatbotInput = document.getElementById("chatbotInput");
const chatbotSend = document.getElementById("chatbotSend");


/* =========================================
   OPEN CHATBOT
========================================= */

if (chatbotOpen && chatbotWrapper) {

    chatbotOpen.addEventListener("click", function (event) {

        event.stopPropagation();

        chatbotWrapper.classList.toggle("active");

        if (chatbotWrapper.classList.contains("active")) {

            setTimeout(() => {
                chatbotInput.focus();
            }, 300);

        }

    });

}


/* =========================================
   CLOSE CHATBOT
========================================= */

if (chatbotClose) {

    chatbotClose.addEventListener("click", function () {

        chatbotWrapper.classList.remove("active");

    });

}


/* =========================================
   CHATBOT ANSWERS
========================================= */

function getBotResponse(message) {

    const text = message.toLowerCase();


    /* ABOUT */

    if (
        text.includes("who is johnson") ||
        text.includes("about johnson") ||
        text.includes("who is he") ||
        text.includes("tell me about johnson")
    ) {

        return `
            <strong>About Johnson</strong><br><br>

            Johnson Mwangi is an ICT student,
            web developer and digital creator.

            <br><br>

            He is currently pursuing ICT at
            Kiharu Technical and Vocational College.

            <br><br>

            His main interest is building practical
            websites, web applications and digital
            experiences.
        `;

    }


    /* SKILLS */

    if (
        text.includes("skill") ||
        text.includes("technology") ||
        text.includes("technologies") ||
        text.includes("coding")
    ) {

        return `
            <strong>Johnson's Skills</strong><br><br>

            • HTML5<br>
            • CSS3<br>
            • JavaScript<br>
            • Python<br>
            • Django<br>
            • SQLite<br>
            • Git & GitHub<br>
            • Responsive Web Design<br>
            • UI / UX fundamentals

            <br><br>

            He is also exploring Next.js,
            TypeScript, APIs and cybersecurity
            fundamentals.
        `;

    }


    /* PROJECTS */

    if (
        text.includes("project") ||
        text.includes("projects") ||
        text.includes("built") ||
        text.includes("work")
    ) {

        return `
            <strong>Projects</strong><br><br>

            <strong>Student Voting System</strong><br>
            A database-driven voting platform
            designed for students.

            <br><br>

            <strong>Modern Furniture Website</strong><br>
            A professional website created for
            Modern Furniture Pacific.

            <br><br>

            You can view both projects in the
            Projects section of this portfolio.
        `;

    }


    /* SERVICES */

    if (
        text.includes("service") ||
        text.includes("services") ||
        text.includes("offer") ||
        text.includes("do you do")
    ) {

        return `
            <strong>Services</strong><br><br>

            • Web Development<br>
            • Web Applications<br>
            • Website Improvement<br>
            • Digital Graphics<br>
            • Branding & Visual Design

            <br><br>

            The goal is to create practical,
            responsive and professional digital
            solutions.
        `;

    }


    /* CONTACT */

    if (
        text.includes("contact") ||
        text.includes("email") ||
        text.includes("whatsapp") ||
        text.includes("phone") ||
        text.includes("reach")
    ) {

        return `
            <strong>Contact Johnson</strong><br><br>

            📱 WhatsApp: 0703327796<br>
            📧 Email: muchokijohnson86@gmail.com

            <br><br>

            You can also use the Contact section
            to send a project inquiry directly
            through WhatsApp.
        `;

    }


    /* WEBSITE */

    if (
        text.includes("website") ||
        text.includes("web development")
    ) {

        return `
            Yes. 🚀

            <br><br>

            Johnson builds responsive websites
            for businesses, personal brands,
            portfolios and other projects.

            <br><br>

            You can describe your idea through
            the Contact section.
        `;

    }


    /* HIRE */

    if (
        text.includes("hire") ||
        text.includes("work with") ||
        text.includes("project for me") ||
        text.includes("build for me")
    ) {

        return `
            <strong>Let's build something.</strong> 🚀

            <br><br>

            Tell Johnson what you would like
            to build and he can discuss the
            requirements with you.

            <br><br>

            Head to the Contact section to
            start the conversation.
        `;

    }


    /* GREETING */

    if (
        text.includes("hello") ||
        text.includes("hi") ||
        text.includes("hey")
    ) {

        return `
            Hi 👋

            <br><br>

            I'm Johnson's portfolio assistant.

            <br><br>

            Ask me about his <strong>skills</strong>,
            <strong>projects</strong>,
            <strong>services</strong> or
            <strong>contact</strong>.
        `;

    }


    /* DEFAULT */

    return `
        I'm not sure about that yet. 🤔

        <br><br>

        Try asking me:

        <br><br>

        • Who is Johnson?<br>
        • What skills does he have?<br>
        • What projects has he built?<br>
        • What services does he offer?<br>
        • How can I contact him?
    `;

}


/* =========================================
   ADD USER MESSAGE
========================================= */

function addUserMessage(message) {

    const div = document.createElement("div");

    div.className = "user-message";

    const bubble = document.createElement("div");

    bubble.className = "message-bubble";

    bubble.textContent = message;

    div.appendChild(bubble);

    chatbotMessages.appendChild(div);

    scrollChat();

}


/* =========================================
   ADD BOT MESSAGE
========================================= */

function addBotMessage(message) {

    const div = document.createElement("div");

    div.className = "bot-message";

    div.innerHTML = `

        <div class="bot-icon">

            <i class="fa-solid fa-robot"></i>

        </div>

        <div class="message-bubble">

            ${message}

        </div>

    `;

    chatbotMessages.appendChild(div);

    scrollChat();

}


/* =========================================
   SEND MESSAGE
========================================= */

function sendChatMessage() {

    const message = chatbotInput.value.trim();

    if (!message) {
        return;
    }


    addUserMessage(message);

    chatbotInput.value = "";


    /* Small delay makes conversation feel natural */

    setTimeout(() => {

        const response = getBotResponse(message);

        addBotMessage(response);

    }, 500);

}


/* =========================================
   SEND BUTTON
========================================= */

if (chatbotSend) {

    chatbotSend.addEventListener("click", sendChatMessage);

}


/* =========================================
   ENTER KEY
========================================= */

if (chatbotInput) {

    chatbotInput.addEventListener("keydown", function (event) {

        if (event.key === "Enter") {

            event.preventDefault();

            sendChatMessage();

        }

    });

}


/* =========================================
   QUICK QUESTIONS
========================================= */

document
    .querySelectorAll(".quick-questions button")
    .forEach(button => {

        button.addEventListener("click", function () {

            const question =
                this.getAttribute("data-question");

            chatbotInput.value = question;

            sendChatMessage();

        });

    });


/* =========================================
   SCROLL CHAT
========================================= */

function scrollChat() {

    chatbotMessages.scrollTop =
        chatbotMessages.scrollHeight;

}


/* =========================================
   ESC KEY CLOSE
========================================= */

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

        chatbotWrapper.classList.remove("active");

    }

});