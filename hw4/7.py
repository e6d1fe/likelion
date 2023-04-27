x, y, w, h = map(int, input().split())

list = []
list.append(x)
list.append(y)
list.append(w - x)
list.append(h - y)
list.sort()
print(list[0])