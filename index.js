document.getElementById("add-project").addEventListener("click", addRow);
document.getElementById("arrow-button").addEventListener("click", returnScreen);
document.getElementById("add-button").addEventListener("click", displayFurniture);

function addRow() {
    let projectName = prompt("Enter a project name:");
    if (projectName != null) {
        let newRow = document.createElement("tr");
        let newCell = document.createElement("td");
        let newProjectButton = document.createElement("button")
        let newRenameButton = document.createElement("button");
        let newDeleteButton = document.createElement("button");

        newProjectButton.id = projectName;
        newProjectButton.className = "project-button"
        newProjectButton.textContent = projectName;
        newProjectButton.addEventListener("click", navigateToRoomScreen);

        newRenameButton.id = "rename" + projectName;
        newRenameButton.className = "rename-button";
        newRenameButton.addEventListener("click", rename);

        newDeleteButton.id = "delete" + projectName;
        newDeleteButton.className = "delete-button";
        newDeleteButton.addEventListener("click", del);

        newCell.appendChild(newProjectButton);
        newCell.appendChild(newRenameButton);
        newCell.appendChild(newDeleteButton);
        newRow.appendChild(newCell);
        document.getElementById("project-table").appendChild(newRow);
    }
}
function returnScreen() {
    document.getElementById("room-screen").classList.add("hidden");
    document.getElementById("project-menu-screen").classList.remove("hidden");

    document.getElementById("project-title").remove();
}

function rename(event) {
    const projectButton = event.target.parentNode.querySelector(".project-button");
    let newProjectName = prompt("Enter a new project name:");

    if (newProjectName != null) {
        projectButton.innerText = newProjectName;
        projectButton.id = newProjectName;
    }
}

function del(event) {
    const row = event.target.parentNode.parentNode;
    let projectName = event.target.id.substring(6);
    if (confirm("Are you sure you want to delete: " + projectName))
        row.parentNode.removeChild(row);
}

function navigateToRoomScreen(event) {
    document.getElementById("project-menu-screen").classList.add("hidden");
    document.getElementById("room-screen").classList.remove("hidden");

    const title = document.createElement("h1");
    title.id = "project-title";
    const text = document.createTextNode(event.target.id);
    title.appendChild(text);

    document.getElementById("room-screen").appendChild(title);
}

function displayFurniture() {
    const furnitureImage = document.createElement("img");
    furnitureImage.src = "furniture.jpg";
    furnitureImage.id = "furniture";

    const closeButton = document.createElement("button");
    closeButton.id = "close-button";
    closeButton.addEventListener("click", closeFurniture);

    document.getElementById("room-screen").classList.add("hidden");

    document.body.appendChild(furnitureImage);
    document.body.appendChild(closeButton);
}

function closeFurniture() {
    const furnitureImage = document.getElementById("furniture");
    const closeButton = document.getElementById("close-button");

    furnitureImage.parentNode.removeChild(furnitureImage);
    closeButton.parentNode.removeChild(closeButton);

    document.getElementById("room-screen").classList.remove("hidden");
}
