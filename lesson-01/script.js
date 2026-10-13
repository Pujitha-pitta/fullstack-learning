const button = document.getElementById("contactButton");
const message = document.getElementById("message");

function showMessage() {
    message.textContent = "Welcome to Pujitha's portfolio!";
}

button.addEventListener("click", showMessage);

const projects = [
    "Technical Debt in Requirements Engineering",
    "Deployment of Multi-Tier Web Application in AWS Cloud",
    "Threat Modelling and Risk Analysis for LLM-Based Architecture",
    "Text2Image Mobile Application",
    "Software Maintainability and Quality Analysis Using GQM Framework",
    "EV Charging Optimization Using Intelligent Predictive Decision Support",
    "Intelligent Decision Support System for Cryptocurrency Price Prediction",
    "Indian Stock Market Trend Analysis Using CRISP-DM",
    "Accident Severity Prediction Using Weather and Road Infrastructure Data",
    "Wine Quality Classification Using Machine Learning",
    "Spam Detection Using Supervised Learning Algorithms"
];

const projectList = document.getElementById("projectList");

for (let i = 0; i < projects.length; i++) {
    const card = document.createElement("div");
    const title = document.createElement("h3");

    title.textContent = projects[i];
    card.appendChild(title);

    card.className = "project-card";
    projectList.appendChild(card);
}
