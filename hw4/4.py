num = int(input())

print("(1) 기본 피라미드")
for i in range(1, num + 1):
    print("*" * i)

print("(2) 상하대칭 피라미드")
for i in range(num, 0, -1):
    print("*" * i)

print("(3) 좌우대칭 피라미드")
for i in range(1, num + 1):
    print(" " * (num - i) + "*" * i)

print("(4) 완벽한 피라미드")
for i in range(1, num + 1):
    print(" " * (num - i) + "*" * (2 * i - 1))