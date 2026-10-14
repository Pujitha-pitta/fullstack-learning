
const roleText = document.getElementById("roleText");

const roles = [
    "Software Developer",
    "Full-Stack Developer",
    "AI/ML Enthusiast"
];

let roleIndex = 0;

function changeRole() {
    roleText.textContent = roles[roleIndex];
    roleIndex = (roleIndex + 1) % roles.length;
}

changeRole();
setInterval(changeRole, 2500);


const projects = [
    {
        title: "Technical Debt in Requirements Engineering",
        description: "Explored technical debt in requirements engineering.",
        links: [
            {
                url: "pdfs/Technical%20Debt%20in%20Requirements%20Engineering.pdf",
                label: "View PDF"
            }
        ]
    },
    {
        title: "Multi-Tier Web Application in AWS Cloud",
        description: "Deployed a multi-tier web application using AWS.",
        links: [
            {
                url: "pdfs/Deployment%20of%20Multi-Tier%20Web%20Application%20in%20AWS%20Cloud.pdf",
                label: "View PDF"
            }
        ]
    },
    {
        title: "Threat Modelling and Risk Analysis for LLM-Based Architecture",
        description: "Analysed security threats and risks in an LLM-based architecture.",
        links: [
            {
                url: "pdfs/Threat%20Modelling%20and%20Risk%20Analysis%20for%20LLM-Based%20Architecture.htm",
                label: "View HTML Report"
            },
            {
                url: "pdfs/Threat%20Modelling%20and%20Risk%20Analysis%20for%20LLM-Based%20Architecture.xlsx",
                label: "Open Spreadsheet"
            }
        ]
    },
    {
        title: "Text2Image Mobile Application",
        description: "Developed an AI-based mobile application.",
        links: [
            {
                url: "pdfs/Text2Image%20Mobile%20Application.apk",
                label: "Download Android App"
            }
        ]
    },
    {
        title: "Software Maintainability and Quality Analysis Using GQM Framework",
        description: "Evaluated software quality and maintainability using GQM.",
        links: [
            {
                url: "pdfs/Software%20Maintainability%20and%20Quality%20Analysis%20Using%20GQM%20Framework.pdf",
                label: "View PDF"
            }
        ]
    },
    {
        title: "EV Charging Optimization",
        description: "Explored intelligent predictive decision support for EV charging.",
        links: [
            {
                url: "pdfs/EV%20Charging%20Optimization%20Using%20Intelligent%20Predictive%20Decision%20Support.pdf",
                label: "View PDF"
            }
        ]
    },
    {
        title: "Cryptocurrency Price Prediction",
        description: "Analysed cryptocurrency market data using machine learning.",
        links: [
            {
                url: "pdfs/Intelligent%20Decision%20Support%20System%20for%20Cryptocurrency%20Price%20Prediction.pdf",
                label: "View PDF"
            }
        ]
    },
    {
        title: "Indian Stock Market Trend Analysis",
        description: "Analysed stock market trends using the CRISP-DM methodology.",
        links: [
            {
                url: "pdfs/Indian%20Stock%20Market%20Trend%20Analysis%20Using%20CRISP-DM.pdf",
                label: "View PDF"
            }
        ]
    },
    {
        title: "Accident Severity Prediction",
        description: "Predicted accident severity using weather and road infrastructure data.",
        links: [
            {
                url: "pdfs/Accident%20Severity%20Prediction%20Using%20Weather%20and%20Road%20Infrastructure%20Data.pdf",
                label: "View PDF"
            }
        ]
    },
    {
        title: "Wine Quality Classification",
        description: "Applied machine learning to classify wine quality.",
        links: [
            {
                url: "pdfs/Wine%20Quality%20Classification%20Using%20Machine%20Learning.pdf",
                label: "View PDF"
            }
        ]
    },
    {
        title: "Spam Detection",
        description: "Explored machine learning algorithms for spam detection.",
        links: [
            {
                url: "pdfs/Spam%20Detection%20Using%20Supervised%20Learning%20Algorithms.pdf",
                label: "View PDF"
            }
        ]
    },
    {
        title: "Diabetes Prediction",
        description: "Federated learning for reliable diabetes prediction with probability calibration.",
        links: [
            {
                url: "Diabetes%20Prediction.pdf",
                label: "View PDF"
            }
        ]
    }
];


const projectList = document.getElementById("projectList");

for (const project of projects) {
    const card = document.createElement("article");
    const title = document.createElement("h3");
    const description = document.createElement("p");
    const links = document.createElement("div");

    card.className = "project-card";
    links.className = "project-links";

    title.textContent = project.title;
    description.textContent = project.description;

    for (const file of project.links) {
        const link = document.createElement("a");

        link.textContent = file.label;
        link.href = file.url;

        if (file.url.toLowerCase().endsWith(".apk")) {
            link.setAttribute("download", "");
        } else {
            link.target = "_blank";
            link.rel = "noopener noreferrer";
        }

        links.appendChild(link);
    }

    card.appendChild(title);
    card.appendChild(description);
    card.appendChild(links);

    projectList.appendChild(card);
}
