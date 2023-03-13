document.getElementById("add-project").addEventListener("click", addRow);

function addRow() {
    let projectName = prompt("Enter a project name:");
    if (projectName != null) {
        let newRow = document.createElement("tr");
        let newCell = document.createElement("td");
        let newButton = document.createElement("button")
        newButton.id = projectName;
        newButton.textContent = projectName;
        newButton.addEventListener("click", navigateProject);
        newCell.appendChild(newButton);
        newRow.appendChild(newCell);
        document.getElementById("project-table").appendChild(newRow);
    }
}

function navigateProject(event){
    let name = event.target.id;
}
