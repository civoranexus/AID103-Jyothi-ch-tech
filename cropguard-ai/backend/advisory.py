def generate_advisory(disease, severity):
    if disease == "Healthy":
        return "Crop is healthy. Continue regular monitoring."

    if severity == "Low":
        return "Monitor crop and apply preventive organic treatment."

    if severity == "Medium":
        return "Apply recommended fungicide and observe for 5–7 days."

    return "Immediate treatment required. Consult agricultural expert."
