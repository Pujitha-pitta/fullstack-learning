const button = document.getElementById("contactButton");
const message = document.getElementById("message");

function showMessage() {
    message.textContent = "Welcome to Pujitha's portfolio!";
}

button.addEventListener("click", showMessage);



const projects = [
    {
        title: "Technical Debt in Requirements Engineering",
        description: "Explored technical debt in requirements engineering.",
        link: "pdfs/Technical%20Debt%20in%20Requirements%20Engineering.pdf"
    },
    {
        title: "Multi-Tier Web Application in AWS Cloud",
        description: "Deployed a multi-tier web application using AWS.",
        link: "pdfs/Multi-Tier%20Web%20Application%20in%20AWS%20Cloud.pdf"
    },
    {
        title: "Threat Modelling and Risk Analysis for LLM-Based Architecture",
        description: "Analysed security threats and risks in an LLM-based architecture.",
        link: "pdfs/Threat%20Modelling%20and%20Risk%20Analysis%20for%20LLM-Based%20Architecture.htm",
        link: "pdfs/Threat%20Modelling%20and%20Risk%20Analysis%20for%20LLM-Based%20Architecture.xlsx"
    },
    {
        title: "Text2Image Mobile Application",
        description: "Developed an AI-based mobile application.",
        link: "pdfs/Text2Image%20Mobile%20Application.apk"
    },
    {
        title: "Software Maintainability and Quality Analysis Using GQM Framework",
        description: "Evaluated software quality and maintainability using GQM.",
        link: "pdfs/Software%20Maintainability%20and%20Quality%20Analysis%20Using%20GQM%20Framework.pdf"
    },
    {
        title: "EV Charging Optimization",
        description: "Explored intelligent decision support for EV charging.",
        link: "pdfs/EV%20Charging%20Optimization%20Using%20Intelligent%20Predictive%20Decision%20Support.pdf"
    },
    {
        title: "Cryptocurrency Price Prediction",
        description: "Analysed cryptocurrency market data using machine learning.",
        link: "pdfs/Intelligent%20Decision%20Support%20System%20for%20Cryptocurrency%20Price%20Prediction.pdf"
    },
    {
        title: "Indian Stock Market Trend Analysis",
        description: "Analysed stock market trends.",
        link: "pdfs/Indian%20Stock%20Market%20Trend%20Analysis%20Using%20CRISP-DM.pdf"
    },
    {
        title: "Accident Severity Prediction",
        description: "Predicted accident severity using road and weather data.",
        link: "pdfs/Accident%20Severity%20Prediction%20Using%20Weather%20and%20Road%20Infrastructure%20Data.pdf"
    },
    {
        title: "Wine Quality Classification",
        description: "Applied machine learning to classify wine quality.",
        link: "pdfs/Wine%20Quality%20Classification%20Using%20Machine%20Learning.pdf"
    },
    {
        title: "Spam Detection",
        description: "Explored machine learning algorithms for spam detection.",
        link: "pdfs/Spam%20Detection%20Using%20Supervised%20Learning%20Algorithms.pdf"
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

    // Support projects with multiple files or one file
    if (projects[i].links) {
        for (let j = 0; j < projects[i].links.length; j++) {
            const link = document.createElement("a");

            link.textContent = projects[i].links[j].label;
            link.href = projects[i].links[j].url;
            link.target = "_blank";
            link.rel = "noopener noreferrer";

            card.appendChild(link);
            card.appendChild(document.createElement("br"));
        }
    } else if (projects[i].link) {
        const link = document.createElement("a");
        const extension = projects[i].link.split(".").pop().toLowerCase();

        if (extension === "apk") {
            link.textContent = "Download Android App";
        } else if (extension === "xls" || extension === "xlsx") {
            link.textContent = "Open Spreadsheet";
        } else if (extension === "htm" || extension === "html") {
            link.textContent = "View Web Report";
        } else {
            link.textContent = "View PDF";
        }

        link.href = projects[i].link;
        link.target = "_blank";
        link.rel = "noopener noreferrer";

        card.appendChild(link);
    }

    projectList.appendChild(card);
}
