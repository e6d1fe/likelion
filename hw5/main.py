import datetime
import re

def create_membership():
    now = datetime.datetime.now()
    stnr_date = now.strftime('%Y%m%d')

    users = []

    while True:
        user = {}

        while True:
            username = input("Username :")
            regex_hangeul = re.compile("^[ㄱ-힣]+$")
            hangeul_check = regex_hangeul.match(username)
            if (len(username) >= 2 and len(username) <= 4 and hangeul_check):
                break
            else:
                print("Try again")
                continue
        
        while True:
            password = input("PW: ")
            if (len(password) >= 8 and password[0].isupper() == True and ("!" in password or "@" in password or "#" in password or "$" in password)):
                break
            else:
                print("Try again")
                continue

        while True:
            email = input("Email: ")
            regex_email = r"^[a-z0-9]+?[a-z0-9]+[@]\w+[.]\w+[.]?\w{2,3}$"
            valid = re.search(regex_email, email)
            if (email.endswith(".com") == True and "@" in email and valid):
                break
            else:
                print("Try again")
                continue

        user["username"] = username
        user["password"] = password
        user["email"] = email
        user["stnr_date"] = stnr_date

        users.append(user)

        cont = input("더 입력하시겠습니까? y/n: ")
        if (cont == "y"):
            continue
        else:
            return users
            exit()

def load_to_txt(user_list):
    f = open("/Users/sehyunra/Desktop/likelion/hw5/memberdb.txt", "w", encoding='UTF-8')
    for i in user_list:
        str = i["username"] + ", " + i["password"] + ", " + i["email"] + ", " + i["stnr_date"] + "\n"
        f.write(str)

def run():
    user_list = create_membership()
    load_to_txt(user_list)

run()
