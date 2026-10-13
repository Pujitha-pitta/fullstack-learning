const button = document.getElementById("contactButton");
const message = document.getElementById("message");

function showMessage() {
    message.textContent = "Welcome to Pujitha's portfolio!";
}

button.addEventListener("click", showMessage);


const projects = [
    {
        title: "Technical Debt in Requirements Engineering",
        description: "Explored technical debt in requirements engineering."
    },
    {
        title: "Multi-Tier Web Application in AWS",
        description: "Deployed a multi-tier web application using AWS EC2, RDS, and S3."
    },
    {
        title: "Threat Modelling for LLM Architecture",
        description: "Investigated security threats and risks in an LLM-based architecture."
    },
    {
        title: "Text2Image Mobile Application",
        description: "Developed an AI-based mobile application using Flutter."
    },
    {
        title: "Software Quality Analysis Using GQM",
        description: "Analysed software quality using metrics such as LCOM, CBO, RFC, WMC, LOC, TCC, and DIT."
    },
    {
        title: "EV Charging Optimization",
        description: "Explored intelligent predictive decision support for EV charging."
    },
    {
        title: "Cryptocurrency Price Prediction",
        description: "Used machine learning models to analyse high-frequency cryptocurrency market data."
    },
    {
        title: "Indian Stock Market Trend Analysis",
        description: "Analysed stock market trends using the CRISP-DM methodology."
    },
    {
        title: "Accident Severity Prediction",
        description: "Predicted accident severity using weather and road infrastructure data."
    },
    {
        title: "Wine Quality Classification",
        description: "Applied machine learning to classify wine quality."
    },
    {
        title: "Spam Detection",
        description: "Explored supervised learning algorithms for spam detection."
    }
];

const projectList = document.getElementById("projectList");

for (let i = 0; i < projects.length; i++) {
    const card = document.createElement("div");
    const title = document.createElement("h3");
    const description = document.createElement("p");

    title.textContent = projects[i].title;
    description.textContent = projects[i].description;

    card.className = "project-card";
    card.appendChild(title);
    card.appendChild(description);

    projectList.appendChild(card);
}
