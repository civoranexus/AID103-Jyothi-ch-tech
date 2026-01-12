from ai_engine import analyze_crop
from data_flow import build_response

def main():
    image_path = "sample_leaf.jpg"
    farm_data = {
        "crop": "Tomato",
        "location": "Maharashtra",
        "growth_stage": "Vegetative"
    }

    analysis = analyze_crop(image_path, farm_data)
    response = build_response(analysis)

    print(response)

if __name__ == "__main__":
    main()
