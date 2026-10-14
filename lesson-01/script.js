
// ---------- Animated job titles ----------

const roles = [
    "Software Developer",
    "Full-Stack Developer",
    "AI Enthusiast",
    "Machine Learning Engineer"
];

const roleText = document.getElementById("roleText");
let roleIndex = 0;

function changeRole() {
    if (!roleText) return;

    roleIndex = (roleIndex + 1) % roles.length;
    roleText.textContent = roles[roleIndex];
}

setInterval(changeRole, 2500);


// ---------- Project information ----------
// Update a filePath to match the exact filename in your GitHub folder.

const projects = [
    {
        title: "Federated Learning for Diabetes Prediction",
        description:
            "Compared centralized and federated machine learning models, with probability calibration and SHAP explainability.",
        tags: ["Python", "Machine Learning", "Federated Learning"],
        filePath: "Diabetes%20Prediction.pdf",
        linkText: "View research ↗"
    },
    {
        title: "Technical Debt in Requirements Engineering",
        description:
            "Explored technical debt in requirements engineering and its implications for software quality.",
        tags: ["Software Engineering", "Research"],
        filePath:
            "pdfs/Technical%20Debt%20in%20Requirements%20Engineering.pdf",
        linkText: "View project ↗"
    },
    {
        title: "Multi-Tier Web Application in AWS Cloud",
        description:
            "Developed a multi-tier web application using cloud services and explored application deployment in AWS.",
        tags: ["AWS", "Cloud Computing", "Web Development"],
        filePath:
            "pdfs/Deployment%20of%20Multi-Tier%20Web%20Application%20in%20AWS%20Cloud.pdf",
        linkText: "View project ↗"
    },
    {
        title: "Threat Modelling for LLM-Based Architecture",
        description:
            "Analyzed threats, risks, and potential mitigations for an architecture based on large language models.",
        tags: ["Security", "Threat Modelling", "LLMs"],
        filePath:
            "pdfs/Threat%20Modelling%20and%20Risk%20Analysis%20for%20LLM-Based%20Architecture.htm",
        linkText: "View project ↗"
    },
    {
        title: "Text2Image Mobile Application",
        description:
            "Worked on an AI-based mobile application that transforms text prompts into images.",
        tags: ["AI", "Mobile Application"],
        filePath: "pdfs/Text2Image%20Mobile%20Application.apk",
        linkText: "View application ↗"
    },
    {
        title: "Software Maintainability and Quality Analysis",
        description:
            "Applied the Goal-Question-Metric framework to examine software quality and maintainability.",
        tags: ["Software Quality", "GQM"],
        filePath:
            "pdfs/Software%20Maintainability%20and%20Quality%20Analysis%20Using%20GQM%20Framework.pdf",
        linkText: "View project ↗"
    },
    {
        title: "EV Charging Optimization",
        description:
            "Explored optimization approaches for electric vehicle charging.",
        tags: ["Optimization", "Python"],
        filePath: "pdfs/EV%20Charging%20Optimization.pdf",
        linkText: "View project ↗"
    },
    {
        title: "Cryptocurrency Price Prediction",
        description:
            "Analyzed cryptocurrency price data and explored machine learning approaches to price prediction.",
        tags: ["Python", "Machine Learning", "Time Series"],
        filePath: "pdfs/Bitcoin%20Price%20Prediction.pdf",
        linkText: "View project ↗"
    },
    {
        title: "Indian Stock Market Trend Analysis",
        description:
            "Explored financial data to analyze stock market trends.",
        tags: ["Python", "Data Analysis"],
        filePath: "pdfs/Indian%20Stock%20Market%20Trend%20Analysis.pdf",
        linkText: "View project ↗"
    },
    {
        title: "Accident Severity Prediction",
        description:
            "Used road accident data to explore factors associated with accident severity.",
        tags: ["Python", "Data Science", "Classification"],
        filePath: "pdfs/Accident%20Severity%20Prediction.pdf",
        linkText: "View project ↗"
    },
    {
        title: "Wine Quality Classification",
        description:
            "Applied classification techniques to investigate wine quality using data features.",
        tags: ["Python", "Scikit-learn"],
        filePath: "pdfs/Wine%20Quality%20Classification.pdf",
        linkText: "View project ↗"
    },
    {
        title: "Spam Detection",
        description:
            "Explored text classification techniques for identifying spam messages.",
        tags: ["Python", "NLP", "Classification"],
        filePath: "pdfs/Spam%20Detection.pdf",
        linkText: "View project ↗"
    }
];


// ---------- Display project cards ----------

const projectList = document.getElementById("projectList");

if (projectList) {
    projects.forEach((project, index) => {
        const card = document.createElement("article");
        card.className = "project-card";

        const number = document.createElement("span");
        number.className = "project-number";
        number.textContent = `PROJECT ${String(index + 1).padStart(2, "0")}`;

        const title = document.createElement("h3");
        title.textContent = project.title;

        const description = document.createElement("p");
        description.textContent = project.description;

        const tags = document.createElement("div");
        tags.className = "project-tags";

        project.tags.forEach(tagName => {
            const tag = document.createElement("span");
            tag.textContent = tagName;
            tags.appendChild(tag);
        });

        const link = document.createElement("a");
        link.className = "project-link";
        link.href = project.filePath;
        link.textContent = project.linkText;
        link.target = "_blank";
        link.rel = "noopener noreferrer";

        card.append(number, title, description, tags, link);
        projectList.appendChild(card);
    });
}


// ---------- Current year in footer ----------

const currentYear = document.getElementById("currentYear");

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}
```
