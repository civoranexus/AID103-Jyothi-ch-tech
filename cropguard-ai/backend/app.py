from fastapi import FastAPI
from ai_engine import analyze_crop
from advisory import generate_advisory
from alerts import generate_alert
from models import FarmData

app = FastAPI(title="CropGuard AI")

@app.post("/analyze")
def analyze(image_path: str, farm_data: FarmData):
    analysis = analyze_crop(image_path, farm_data.dict())
    advisory = generate_advisory(analysis["disease"], analysis["severity"])
    alert = generate_alert(analysis["severity"])

    return {
        "AI_Analysis": analysis,
        "Advisory": advisory,
        "Alert": alert
    }
