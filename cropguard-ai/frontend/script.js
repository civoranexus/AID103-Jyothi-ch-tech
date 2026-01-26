async function analyzeCrop() {
    const fileInput = document.getElementById("imageFile");
    const crop = document.getElementById("crop").value;
    const location = document.getElementById("location").value;
    const stage = document.getElementById("stage").value;
    const resultDiv = document.getElementById("result");

    if (!fileInput.files.length) {
        alert("Please upload a crop leaf image.");
        return;
    }

    const formData = new FormData();
    formData.append("image", fileInput.files[0]);
    formData.append("crop", crop);
    formData.append("location", location);
    formData.append("growth_stage", stage);

    resultDiv.innerHTML = "<p>🔄 Analyzing image, please wait...</p>";

    try {
        const response = await fetch("http://127.0.0.1:8000/analyze", {
            method: "POST",
            body: formData
        });

        if (!response.ok) {
            throw new Error("Backend error");
        }

        const data = await response.json();
        const severity = data.AI_Analysis.severity.toLowerCase();
        const confidencePercent = Math.round(data.AI_Analysis.confidence * 100);

        resultDiv.innerHTML = `
            <div class="result-card">
                <span class="badge ${severity}">
                    ${data.AI_Analysis.severity} Severity
                </span>

                <h3>🦠 Disease Detected: ${data.AI_Analysis.disease}</h3>

                <p><b>Crop:</b> ${crop}</p>
                <p><b>Location:</b> ${location}</p>

                <p><b>Confidence:</b> ${confidencePercent}%</p>
                <div class="progress">
                    <div class="progress-bar" style="width:${confidencePercent}%"></div>
                </div>

                <p><b>AI Advisory:</b> ${data.Advisory}</p>
                <p><b>Alert:</b> ${data.Alert}</p>
            </div>
        `;
    } catch (error) {
        resultDiv.innerHTML =
            "<p>❌ Unable to analyze crop image. Please try again.</p>";
    }
}
