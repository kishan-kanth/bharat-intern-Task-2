document.addEventListener("DOMContentLoaded", function () {
    const memberNameInput = document.getElementById("member-name");
    const projectTitleInput = document.getElementById("project-title");
    const projectDescriptionTextarea = document.getElementById("project-description");
    const addProjectButton = document.getElementById("add-project");
    const projectsList = document.getElementById("projects");

    addProjectButton.addEventListener("click", function () {
        const memberName = memberNameInput.value;
        const projectTitle = projectTitleInput.value;
        const projectDescription = projectDescriptionTextarea.value;

        if (memberName && projectTitle) {
            const projectItem = document.createElement("li");
            projectItem.innerHTML = `
                <div class="projdetail">
                    <span>Member: <span>${memberName}</span></span>
                    <span>Title: <span>${projectTitle}</span></span>
                    <span>Objective: <span>${projectDescription}</span></span>
                </div>
                <div class="projsetting">
                    <span>Status: <span class="status">Not Completed</span></span>
                    <button class="mark">Mark as Complete</button>
                    <button class="delete">Delete</button>
                </div>
            `;

            projectsList.appendChild(projectItem);

            const markCompleteBtn = projectItem.querySelector(".mark");
            markCompleteBtn.addEventListener("click", function () {
                projectItem.querySelector(".status").innerHTML = "Completed";
                markCompleteBtn.remove();
            })

            const deleteButton = projectItem.querySelector(".delete");
            deleteButton.addEventListener("click", function () {
                projectsList.removeChild(projectItem);
            });

            memberNameInput.value = "";
            projectTitleInput.value = "";
            projectDescriptionTextarea.value = "";
        }
    });
});
