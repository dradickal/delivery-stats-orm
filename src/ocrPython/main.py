import argparse
import json
from ocr.readImage import processImage, TextMatchEncoder
from ocr.activityMatch import matchActivity

ap = argparse.ArgumentParser()
ap.add_argument("-i", "--image", required=True)

args = vars(ap.parse_args())
filename = args["image"]

ocrResults = processImage(filename)

textList = [o["text"] for o in ocrResults]
label = matchActivity(textList)

jsonData = {
    'filename': filename,
    'imageText': ocrResults,
    'label': label,
}

print(json.dumps(jsonData, cls=TextMatchEncoder))



