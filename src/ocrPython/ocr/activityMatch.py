import re

activityMap = {
    "navigate": {
        "label": "Navigate to Location",
        "match": [
            ["start"]
        ]
    },
    "offer": {
        "label": "Offer Recieved",
        "match": [
            ["new offer"]
        ]
    },
    "business": {
        "label": "Arrive at Business",
        "match": [
            ["arrived", "success"],
            ["pick up"]
        ]
    },
    "recieved": {
        "label": "Order Recieved",
        "match": [
            ["order summary"],
            ["got order", "success"]
        ]
    },
    "customer": {
        "label": "Arrive at Customer",
        "match": [
            ["pick up from"],
            ["arrived"]
        ]
    },
    "complete": {
        "label": "Complete Delivery",
        "match": [
            ["pick up from"],
            ["swipe to deliver", "success"]
        ]
    },
    "delayed": {
        "label": "Order Delayed",
        "match": [
            ["order is not ready"]
        ]
    },
    "tasks": {
        "label": "Task List",
        "match": [
            ["task list"]
        ]
    },
    "activity": {
        "label": "Earnings Activity",
        "match": [
            ["earnings activity"],
            ["all orders"]
        ]
    },
    "start": {
        "label": "Start Shift",
        "match": [
            ["status"],
            ["pause offers"]
        ]
    },
    "earnings": {
        "label": "Earnings",
        "match": [
            ["earnings"]
        ]
    },
    "stats": {
        "label": "Account Stats",
        "match": [
            ["david todd"]
        ]
    },
    "vehicle": {
        "label": "Vehicle Activity",
        "match": [
            ["since start"]
        ]
    },
}

def matchText(imageText, matchTerms):
    matchResults = []
    
    for i in range(len(matchTerms)):
        term = matchTerms[i]
        if isinstance(term, list):
            matches = matchText(imageText, term)
            result = any(matches)
            matchResults.append(result)
        else:
            result = re.search(term, imageText, re.IGNORECASE)
            matchResults.append(result)
            if result:
                break
    
    return matchResults 

# textList string[]
def matchActivity(textList):
    imageText = ','.join(textList)

    label=None
    activity = iter(activityMap.items())
    for current in activity:
        matches = matchText(imageText, current[1]["match"])
        if (all(matches)):
            label = current[0]
            break
    
    return label
