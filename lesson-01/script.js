
const projects = [
    {
        title: "Technical Debt in Requirements Engineering",
        category: "Software Engineering",
        description: "Explored technical debt in requirements engineering.",
        links: [
            {
                label: "Read report ↗",
                url: "pdfs/Technical%20Debt%20in%20Requirements%20Engineering.pdf"
            }
        ]
    },
    {
        title: "Multi-Tier Web Application in AWS Cloud",
        category: "Cloud Development",
        description: "Deployed a multi-tier web application using AWS.",
        links: [
            {
                label: "Read report ↗",
                url: "pdfs/Deployment%20of%20Multi-Tier%20Web%20Application%20in%20AWS%20Cloud.pdf"
            }
        ]
    },
    {
        title: "Threat Modelling and Risk Analysis for LLM-Based Architecture",
        category: "Cybersecurity",
        description: "Analysed security threats and risks in an LLM-based architecture.",
        links: [
            {
                label: "View HTML report ↗",
                url: "pdfs/Threat%20Modelling%20and%20Risk%20Analysis%20for%20LLM-Based%20Architecture.htm"
            },
            {
                label: "Open spreadsheet ↗",
                url: "pdfs/Threat%20Modelling%20and%20Risk%20Analysis%20for%20LLM-Based%20Architecture.xlsx"
            }
        ]
    },
    {
        title: "Text2Image Mobile Application",
        category: "Mobile Development · AI",
        description: "Developed an AI-based mobile application.",
        links: [
            {
                label: "Download Android app ↗",
                url: "pdfs/Text2Image%20Mobile%20Application.apk"
            }
        ]
    },
    {
        title: "Software Maintainability and Quality Analysis Using GQM Framework",
        category: "Software Quality",
        description: "Evaluated software quality and maintainability using the GQM framework.",
        links: [
            {
                label: "Read report ↗",
                url: "pdfs/Software%20Maintainability%20and%20Quality%20Analysis%20Using%20GQM%20Framework.pdf"
            }
        ]
    },
    {
        title: "EV Charging Optimization",
        category: "Optimization",
        description: "Explored intelligent predictive decision support for EV charging.",
        links: [
            {
                label: "Read report ↗",
                url: "pdfs/EV%20Charging%20Optimization%20Using%20Intelligent%20Predictive%20Decision%20Support.pdf"
            }
        ]
    },
    {
        title: "Cryptocurrency Price Prediction",
        category: "Machine Learning",
        description: "Analysed cryptocurrency market data using machine learning.",
        links: [
            {
                label: "Read report ↗",
                url: "pdfs/Intelligent%20Decision%20Support%20System%20for%20Cryptocurrency%20Price%20Prediction.pdf"
            }
        ]
    },
    {
        title: "Indian Stock Market Trend Analysis",
        category: "Data Analysis",
        description: "Analysed stock market trends using the CRISP-DM methodology.",
        links: [
            {
                label: "Read report ↗",
                url: "pdfs/Indian%20Stock%20Market%20Trend%20Analysis%20Using%20CRISP-DM.pdf"
            }
        ]
    },
    {
        title: "Accident Severity Prediction",
        category: "Machine Learning",
        description: "Predicted accident severity using weather and road infrastructure data.",
        links: [
            {
                label: "Read report ↗",
                url: "pdfs/Accident%20Severity%20Prediction%20Using%20Weather%20and%20Road%20Infrastructure%20Data.pdf"
            }
        ]
    },
    {
        title: "Wine Quality Classification",
        category: "Machine Learning",
        description: "Applied machine learning to classify wine quality.",
        links: [
            {
                label: "Read report ↗",
                url: "pdfs/Wine%20Quality%20Classification%20Using%20Machine%20Learning.pdf"
            }
        ]
    },
    {
        title: "Spam Detection",
        category: "Machine Learning",
        description: "Explored supervised learning algorithms for spam detection.",
        links: [
            {
                label: "Read report ↗",
                url: "pdfs/Spam%20Detection%20Using%20Supervised%20Learning%20Algorithms.pdf"
            }
        ]
    }
];

const projectList = document.getElementById("projectList");

if (projectList) {
    for (const project of projects) {
        const card = document.createElement("article");
        card.className = "project-card";

        const category = document.createElement("span");
        category.className = "project-category";
        category.textContent = project.category;

        const title = document.createElement("h3");
        title.textContent = project.title;

        const description = document.createElement("p");
        description.textContent = project.description;

        const linksContainer = document.createElement("div");
        linksContainer.className = "project-links";

        for (const file of project.links) {
            const link = document.createElement("a");

            link.href = file.url;
            link.textContent = file.label;

            if (file.url.toLowerCase().endsWith(".apk")) {
                link.setAttribute("download", "");
            } else {
                link.target = "_blank";
                link.rel = "noopener noreferrer";
            }

            linksContainer.appendChild(link);
        }

        card.appendChild(category);
        card.appendChild(title);
        card.appendChild(description);
        card.appendChild(linksContainer);

        projectList.appendChild(card);
    }
}
