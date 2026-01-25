async function analyzeCrop() {
    const fileInput = document.getElementById("imageFile");

    if (!fileInput.files.length) {
        alert("Please upload a crop image.");
        return;
    }

    const formData = new FormData();
    formData.append("image", fileInput.files[0]);
    formData.append("crop", document.getElementById("crop").value);
    formData.append("location", document.getElementById("location").value);
    formData.append("growth_stage", document.getElementById("stage").value);

    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "<p>Analyzing image...</p>";

    try {
        const res = await fetch("http://127.0.0.1:8000/analyze", {
            method: "POST",
            body: formData
        });

        const data = await res.json();
        const sev = data.AI_Analysis.severity.toLowerCase();

        resultDiv.innerHTML = `
            <div class="result-card">
                <span class="badge ${sev}">
                    ${data.AI_Analysis.severity} Severity
                </span>

                <h3>${data.AI_Analysis.disease} Detected</h3>

                <p>Confidence</p>
                <div class="progress">
                    <div class="progress-bar" style="width:${data.AI_Analysis.confidence * 100}%"></div>
                </div>

                <p><b>Advisory:</b> ${data.Advisory}</p>
                <p><b>Alert:</b> ${data.Alert}</p>
            </div>
        `;
    } catch (err) {
        resultDiv.innerHTML = "<p>❌ Unable to connect to backend.</p>";
    }
}
