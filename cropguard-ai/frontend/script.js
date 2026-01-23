async function analyzeCrop() {
    const data = {
        image_path: document.getElementById("imagePath").value,
        farm_data: {
            crop: document.getElementById("crop").value,
            location: document.getElementById("location").value,
            growth_stage: document.getElementById("stage").value
        }
    };

    const res = await fetch("http://127.0.0.1:8000/analyze", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(data)
    });

    const result = await res.json();
    document.getElementById("result").innerText =
        JSON.stringify(result, null, 2);
}
