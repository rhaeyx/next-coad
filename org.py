import json

orgs = []
line = ""
while line != "end":
    line = input()
    if line == "end":
        break
    orgs.append(line)

for org in orgs:
    org = org.split(" - ")
    template = {
        "acronym": "asiem",
        "name": "Ateneo Society of Industrial Engineering Majors",
        "description": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti voluptas voluptates expedita reprehenderit culpa suscipit eum porro a earum voluptatem quis deserunt, eligendi ducimus minima in incidunt! Omnis, asperiores ullam!",
        "logo": "defaultlogo.png",
        "email": "email@addu.edu.ph",
        "facebook": "#",
        "twitter": "#",
        "instagram": "#",
        "head": {
            "pic": "defaultprofile.jpg",
            "name": "Samantha Clara",
            "position": "President",
            "email": "smc@addu.edu.ph"
        },
        "events": [
            { "id": "1", "name": "General Assembly 2023", "date": "6/23/2023" },
            { "id": "2", "name": "Magical Summit 2023", "date": "6/26/2023" },
            { "id": "3", "name": "Long Range Planning 2023", "date": "5/23/2023" }
        ]
    }
    
    template["acronym"] = org[1].lower()
    template["name"] = org[0]
    
    # Serializing json
    json_object = json.dumps(template, indent=4)
    
    # Writing to sample.json
    with open("sample.json", "a") as outfile:
        outfile.write(json_object)
        outfile.write(",")
    # print(template)
    