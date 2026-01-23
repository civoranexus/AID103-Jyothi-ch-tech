from image_utils import preprocess_image
import random

def analyze_crop(image_path, farm_data):
    _ = preprocess_image(image_path)

    diseases = ["Leaf Blight", "Powdery Mildew", "Healthy"]
    severity_levels = ["Low", "Medium", "High"]

    disease = random.choice(diseases)
    severity = "Low" if disease == "Healthy" else random.choice(severity_levels)

    return {
        "disease": disease,
        "severity": severity,
        "confidence": round(random.uniform(0.75, 0.95), 2),
        "farm_context": farm_data
    }
from alerts import generate_alert
from advisory import generate_advisory  