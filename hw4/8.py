temp = {}

icecream_price = {
    "메로나": 1000,
    "폴라포": 1200,
    "빵빠레": 1800
}

icecream_price["죠스바"] = 1200
icecream_price["월드콘"] = 1500

print("메로나 가격: ", icecream_price["메로나"])

icecream_price["메로나"] = 1300

del icecream_price["메로나"]