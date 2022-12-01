from curses.ascii import isalpha, isspace
import pandas as pd
import numpy as np
import ssl
import random
import re
import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore
ssl._create_default_https_context = ssl._create_unverified_context

#firebase connection
cred = credentials.Certificate("../servKey.json")
firebase_admin.initialize_app(cred)
db = firestore.client()

docs = db.collection('Trucks').get()

for doc in docs:

    collections = db.collection('Trucks').document(doc.id).collections()
    for collection in collections:
            data = {
            u'text': u'bussin food, amazing people, short lines, blue skies, lush trees, equality for all!',
            u'rating': random.randint(4,5)
        }

    # Add a new doc in collection 'cities' with ID 'LA'
            collection.document(str(random.randint(0,10000))).set(data)