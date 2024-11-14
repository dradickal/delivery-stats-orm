from easyocr import Reader
import cv2
import json


class TextMatchEncoder(json.JSONEncoder):
    def default(self, obj):
        if isinstance(obj, TextMatch):
            return obj.to_json()
        return json.JSONEncoder.default(self, obj)

class TextMatch:
    def __init__(self, prob, text, bbox):
        self.probability = prob
        self.text = text
        self.bbox = bbox
	
    def to_json(self):
        return { 
            "probability": round(self.probability, 4), 
            "text": self.text, 
            "bbox": self.bbox 
        }

def processImage(filename):

    image = cv2.imread(filename)

    reader = Reader(['en'], gpu=False)
    results = reader.readtext(image, width_ths=1.0, ycenter_ths=0.8, height_ths=0.8, slope_ths=1.0)
    
    output = []
    textList = []
    for (bbox, text, prob) in results:
        # unpack the bounding box
        (tl, tr, br, bl) = bbox
        tl = (int(tl[0]), int(tl[1]))
        tr = (int(tr[0]), int(tr[1]))
        br = (int(br[0]), int(br[1]))
        bl = (int(bl[0]), int(bl[1]))
        
        output.append(TextMatch(prob, text, [tl, tr, br, bl]))
        textList.append(text)
    
    return (output, textList)
