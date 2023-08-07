document.addEventListener("DOMContentLoaded", async () => {
    let buttons = document.querySelectorAll(".what-we-do__filter-item");

    let fetchUserName = async (userId) => (userId === "all") ? "All" 
        : (await (await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)).json()).name;

    for (let button of buttons) {
        let userId = button.id;
        button.innerText = await fetchUserName(userId);
        button.addEventListener("click", () => {
            if (!button.classList.contains("what-we-do__filter-item_active")) {
                loadProjects(userId, buttons);
            } else {
                button.classList.remove("what-we-do__filter-item_active");
                let projectsContainer = document.querySelector(".what-we-do__projects");
                projectsContainer.innerHTML = "";
            }
        });
    }

    loadProjects("all", buttons);
});

async function loadProjects(userId, buttons) {
    try {
        let projectsContainer = document.querySelector(".what-we-do__projects");
        projectsContainer.innerHTML = "";
        
        buttons.forEach(button => button.classList.toggle("what-we-do__filter-item_active", button.id === userId));

        let getProjectData = async (i) => {
            let [user, comments] = await Promise.all([
                (await fetch(`https://jsonplaceholder.typicode.com/users/${i}`)).json(),
                (await fetch(`https://jsonplaceholder.typicode.com/posts/${i}/comments`)).json()
            ]);
            return [user, comments];
        };

        async function createAndAppendProjectCard(name, comment) {
            let projectCard = createProjectCard(name, comment);
            projectsContainer.appendChild(projectCard);
        }

        if (userId === "all") {
            for (let i = 1; i <= 3; i++) {
                let [user, comments] = await getProjectData(i);
                createAndAppendProjectCard(user.name, comments[0].name);
            }
        } else {
            let [user, comments] = await getProjectData(userId);
            for (let i = 0; i < 5; i++) {
                createAndAppendProjectCard(user.name, comments[i].name);
            }
        }
    } catch (error) {
        console.error("Error loading projects:", error);
    }
}

function createProjectCard(title, text) {
    let card = document.createElement("div");
    card.className = "what-we-do__projects-item";
    card.innerHTML = `<div class="what-we-do__projects-item-title">${title}</div>
                      <div class="what-we-do__projects-item-text">${text}</div>`;
    return card;
}