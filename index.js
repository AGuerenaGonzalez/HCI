document.getElementById("add-project").addEventListener("click", addRow);

function addRow() {
    var projectName = prompt("Enter a project name:");
    if (projectName != null) {
        var newRow = document.createElement("tr");
        var newCell = document.createElement("td");
        newCell.innerHTML = "<button>${projectName}</button>";
        newRow.appendChild(newCell);
        document.getElementById("project-table").appendChild(newRow);
    }
}
