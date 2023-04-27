id_number = input()

identifier = id_number[7:8]
print(identifier)
if int(identifier) % 2 == 0:
    print("여자입니다.")
else:
    print("남자입니다.")