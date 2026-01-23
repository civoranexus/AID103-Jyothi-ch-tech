def generate_alert(severity):
    if severity == "High":
        return "High priority alert: Immediate action required."
    if severity == "Medium":
        return "Medium priority alert: Monitor closely."
    return "Low priority alert."
