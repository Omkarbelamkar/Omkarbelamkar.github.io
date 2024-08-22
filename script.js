window.onload = function() {
    showTime();
}

function showTime() {
    const timeElement = document.getElementById("time");
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    timeElement.innerHTML = timeString;
    setTimeout(showTime, 1000); // Update time every second
}

function showForm(formId) {
    const forms = document.querySelectorAll('.form-container');
    forms.forEach(form => form.style.display = 'none');
    document.getElementById(formId).style.display = 'block';
}

function generateTestReport() {
    const gameName = document.getElementById("reportGameName").value;
    const version = document.getElementById("version").value;
    const defects = document.getElementById("reportDefects").value;

    const observations = [];
    const checkboxes = document.querySelectorAll('#testReportForm input[name="observations"]:checked');
    checkboxes.forEach((checkbox) => {
        observations.push(checkbox.value);
    });

    const reportOutput = document.getElementById("reportOutput");

    // Create a bulleted list for observations
    const observationsList = observations.length > 0 ? 
        `<ul>${observations.map(obs => `<li>${obs}</li>`).join('')}</ul>` : 
        "No observations selected.";

    reportOutput.innerHTML = `
        <h2>Game Testing Report</h2>
        <p><strong>Game name:</strong> ${gameName}</p> <p><strong>V</strong> ${version}</p>
        <p><strong>------------------------</strong></p>
        <p><strong>Observations:</strong> ${observationsList}</p>
        <p><strong>Defects Noticed:</strong> ${defects}</p>
    `;

    // Show the copy button after the report is generated
    document.getElementById("copyTestButton").style.display = "block";
}

function copyTestReport() {
    const reportOutput = document.getElementById("reportOutput");
    const textToCopy = reportOutput.innerText || reportOutput.textContent;
    
    navigator.clipboard.writeText(textToCopy).then(() => {
        alert("Game Testing Report copied to clipboard!");
    });
}

function generateApprovalReport() {
    const gameName = document.getElementById("approvalGameName").value;
    const defects = document.getElementById("approvalDefects").value;

    const observations = [];
    const checkboxes = document.querySelectorAll('#approvalForm input[name="observations"]:checked');
    checkboxes.forEach((checkbox) => {
        observations.push(checkbox.value);
    });

    const approvalOutput = document.getElementById("approvalOutput");

    // Create a bulleted list for observations
    const observationsList = observations.length > 0 ? 
        `<ul>${observations.map(obs => `<li>${obs}</li>`).join('')}</ul>` : 
        "No observations selected.";

    approvalOutput.innerHTML = `
        <h2>First Testing Approval Report</h2>
        <p><strong>Game name:</strong> ${gameName}</p>
        <p><strong>Observations:</strong> ${observationsList}</p>
        <p><strong>Defects Noticed:</strong> ${defects}</p>
    `;

    // Show the copy button after the report is generated
    document.getElementById("copyApprovalButton").style.display = "block";
}

function copyApprovalReport() {
    const approvalOutput = document.getElementById("approvalOutput");
    const textToCopy = approvalOutput.innerText || approvalOutput.textContent;
    
    navigator.clipboard.writeText(textToCopy).then(() => {
        alert("First Testing Approval Report copied to clipboard!");
    });
}
