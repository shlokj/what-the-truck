from curses.ascii import isalpha, isspace
import pandas as pd
import numpy as np
import ssl
import re
import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore
ssl._create_default_https_context = ssl._create_unverified_context


table = pd.read_html('https://menu.dining.ucla.edu/hours/')

match = r"[^59\-\.]"

df = table[0]

lunchTrucks = []
dinnerTrucks = []
extendedTrucks = []


mealTimes = ['Lunch/Brunch','Dinner','Extended Dinner']

#modify scraped list
def correctList(x):
    
    for i in x:

        j = 0

        while j < len(i):
            if j <= len(i)-2:
                if i[j]==' ' and i[j+1]==' ':

                    newEl = i[j+2:len(i)]

                    modEl = i[0:j]
                    x.append(modEl)
                    x.append(newEl)
            j+=1
    
    y = []
    for i in x:
        if "  " in i or i=='':
            continue
        else:
            y.append(i)

    for i in y:
        if i == ' Hours':
            y.remove(i)
    
    return y


def getTrucksForTime(mealTime,pattern,arr):

  for j in range(9,12):

        x = df.loc[j][mealTime]

        y = re.findall(pattern,x)

        z = (y[10::])

        exTrucks = ""

        for k in z:
            exTrucks+=k
    
        arr.append(exTrucks)


for i in mealTimes:
    
    if i == "Lunch/Brunch":
        getTrucksForTime(i,r"[^113\-\.]",lunchTrucks)
    
    elif i == "Dinner":
        getTrucksForTime(i,r"[^59\-\.]",dinnerTrucks)
      
    elif i == "Extended Dinner":
        getTrucksForTime(i,r"[^912\-\.]",extendedTrucks)
    

lunchTrucks = lunchTrucks[1::]
    

lunchTrucks=correctList(lunchTrucks)
dinnerTrucks=correctList(dinnerTrucks)
extendedTrucks=correctList(extendedTrucks)



#firebase connection
cred = credentials.Certificate("../servKey.json")
firebase_admin.initialize_app(cred)
db = firestore.client()

docs = db.collection('Trucks').get()

for doc in docs:
    key = doc.id
    db.collection('Trucks').document(key).delete()


for i in lunchTrucks:
    db.collection(u'Trucks').document(f'{i}').set({'Name': i, 'Time': 'Lunch'})

for i in dinnerTrucks:
    db.collection(u'Trucks').document(f'{i}').set({'Name': i, 'Time': 'Dinner'})

for i in extendedTrucks:
    db.collection(u'Trucks').document(f'{i}').set({'Name': i, 'Time': 'Extended Dinner'})











