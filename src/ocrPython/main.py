import sys
import json
from ocr.readImage import processImage, TextMatchEncoder
from ocr.activityMatch import matchActivity

def main(filepath):
    try:
        filename = filepath.split('/')[-1]
        ocrResults, textList = processImage(filepath)
        label = matchActivity(textList)

        jsonData = {
            'filename': filename,
            'imageText': ocrResults,
            'label': label,
        }

        print(json.dumps(jsonData, cls=TextMatchEncoder))
    except Exception as e:
        sys.exit(1)

if __name__ == '__main__':
    filepath = sys.argv[1]
    main(filepath)
    sys.exit(0)




