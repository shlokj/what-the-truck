from curses.ascii import isalpha, isspace
import pandas as pd
import numpy as np
import ssl
import re
import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore
ssl._create_default_https_context = ssl._create_unverified_context

desc = {"Cafe Vietnam": '''A rotating crop of seasonal items (like egg rolls, fried dumplings, chicken curry, and pork belly fried rice) round out the offerings, giving you extra reasons to keep coming back to Trang’s mobile paradise.  If you need something like “extra” reasons, that is. They’ve gone as far as grinding their wholesome ingredients everyday, even black peppercorns they said.''',
        "Kalamaki Greek Street Food": '''My business-oriented mind lay dormant in Crete. My dreams led me to where I am now, a food truck that specializes in “fine Greek food, Vromiko-style, Greek yogurt smoothies and Blended coffees with Greek yogurt on top which is inspired by the island of Crete. Most customers will come for Gyros and live the experience and the smell of the summer vacation that had in Greece. I feel proud when they start telling me where they have traveled in Greece and saying Greek words that they learn while they were there.''',
        "Paradise Cookies & Ice Cream": '''Paradise Cookies & Ice Cream® is a privately-owned, family-run cookies and ice cream establishment founded with one simple notion in mind: to bring high-quality and affordable cookies and ice cream services to neighborhoods throughout Southern California with unparalleled customer service. All our cookies are made from scratch and baked fresh throughout the day using only the finest all-natural ingredients. ''',
        "Perro": '''We proudly serve one of the best tacos you will ever have. Everything starts with our Mom’s handmade flour tortilla imported from Tijuana Mexico topped with smoked steak grilled cheese and fresh vegetables.''',
        "Philly Jays Steaks": '''Philly Jay's Steaks is a food truck in Monterey Park, CA, specializing in serving up hearty meals for people throughout our community. We're bringing authentic Philly cheese steaks to California, but with a gourmet twist. Chef Jason McClain has years of experience cooking for some of the most highly rated restaurants in the country, and now he’s directing his myriad of skills towards perfecting the Philly, elevating the down-home fare to the status of gourmet.''',
        "Savage Tacos": '''There's a world of flavor in every bite at Savage Tacos Truck. Based in Long Beach, CA, this tasty food truck serves up not only gourmet tacos, but also burgers, burritos, and fries with flavors from Mexico, Jamaica, Korea, and some American favorites. Food has no walls at Savage Tacos, and nowhere is that more apparent than in their mission statement, where they take pride in fair compensation to their staff, and feeding the homeless folks of Long Beach each week with their Savage Mondays program. Join the movement and book the universal flavors of the Savage Tacos Truck for your next event today!''',
        "Smile Hotdog": '''While I was visiting Korea in 2018. I happened to visit the Korean Street Food venues and noticed there spicy rice cake aka: tteokbokki and their deep fried corndog. Once I tasted the spicy rice cake and the corndogs it brought fond memories of my childhood and wanted to share the flavors.''',
        "Sweets on Wheels": '''For your next event, go with the food truck that everyone will love! Sweets on Wheels brings your favorite treats to you! Crepes, Churros, Ice Cream and more!''',
        "ThaiMex Cocina": '''You'll never have to choose between Thai and Mexican Food again! The Thai-Mex Cocina food truck offers mouthwatering, multicultural creations like doubly authentic tacos, quesadillas and noodles at your choosing of spicy garlic shrimp, chicken satay or crispy pork belly.''',
        "The Bollywood Kitchen": '''The Bollywood Kitchen is bringing all the exotic flavor from the far east to the streets of Hollywood. How? This fantastic food truck is committed to authenticity, with Indian and Chinese cuisine that's sticking to traditional preparation methods with imported spices and seasonings to tantalize your tastebuds.''',
        "The Taco Cartel": '''The Taco Cartel is both here to bring LA back to the basics of the taco truck, and show it there's nothing basic about taco trucks. Fun twists align every dish in unexpected places, offering both authentic flavor and imaginative whimsy. Besides the requisite tacos, new signatures are being tested and rotated out daily, so catch them at each show and event you see them posted - they're sure to have something new each time; something sure to get the streets talking. ''',
        "Tokyo Style": '''Since spring of 2013, CIA alumnus Chef Keith Yokoyama has been treating the streets of Los Angeles to his unique brand of Japanese fusion food – and he’s earned his fair share of esteem doing so. In 2014 alone, he landed a spot on CBS Los Angeles’s ranking of the Best Food Trucks in LA and had a few of his recipes included in Food Truck Road Trip: A Cookbook. Suffice to say, the eats at this truck are well worth sampling. Tokyo Style Food first made a splash across the City of Angels for their Japanese fusion hot dogs.''',
        "Yunas Bob": '''Yuna’s Bob is LA’s finest Korean Food on wheels. We love to see happy customers enjoying our authentic Korean dishes. Try the Bulgogi Beef Bowl with rice and vegetables or our signature Spicy Shrimp Bowl. Everything we serve is fresh, delicious and prepared to order. Yuna’s can often be found on the westside serving the community quality eats at affordable prices. We Cater too, for studio gigs, corporate events and private parties as well. Come find our truck and you’ll taste the difference!''',
        "Creamy Boys": '''This is a popular style in New Zealand made from ice cream and fruit. You’ll often find it at the beach, a farmers market or a fruit shop.To make Real Fruit Ice Cream, us kiwis blend your choice of frozen fruits with a dairy or non-dairy ice cream. ''',
        "Pinch of Flavor": '''You’ll never realize just how big a food truck’s menu can be until you stop by Pinch of Flavor. Isis and Jael are dedicated to whipping up pristine made-to-order eats on the streets of Los Angeles, CA, all popping with traditional Mexican ingredients. This ain’t your average taco truck, but a gourmet establishment sporting a menu with unbelievably flavorful fare. Foodies across LA need to hit it up ASAP. The name is apt here. The bounty of tacos, burgers, and bowls are bursting with bold taste.''',
        "Pacifico Charbroiled Fish": '''The Pacifico Charbroiled Fish Food Truck is a Southern Californian staple featuring Baja-style seafood catering and serving greater LA. We have all your coastal favorites including fish plates, tacos, fried and grilled shrimp offerings, and so much more. We specialize in catering for any and all events in LA. Fresh matters! Add us to your office rotation for a healthy option at lunchtime, we have something on our menu for everyone. Let Pacifico Charbroiled Fish bring the fresh seafood to you!''',
        "Kogi": '''Kogi started in 2008 when we hit the streets of LA with a humble little Korean short rib taco that met Twitter in the middle of the night in front of a nightclub in Hollywood. We then started to create crowds and cravings across the whole city transmitting a new form of dialogue and culture between food and technology. Over the years, we’ve gone on to feed almost every street from LA to OC to the South Bay to the Valley to the IE to Ventura and Santa Barbara counties to major music festivals, even worldwide.''',
        "Dinas Dumpling": '''Dina's Dumpling is a modern Chinese food truck located in Pasadena CA. Our goal is to bring you authentic Chinese handmade dumplings in a fast street style. We love what we do, and take pride in preparing our food using simple, fresh ingredients daily.''',
        "Salpicon": '''Salpicon Shop Fruit is LA's favorite fruit cart by far. This little pop up fruit shop is chopping up the freshest of fruits to refresh your day the all natural way, with hand picked local produce that only adds to that fresh flavor. At Salpicon Shop Fruit, treat your sweet tooth to the likes of pineapple, watermelon, mango, melon and cucumber in a cup drizzled in lime juice, chamoy and spicy chili pepper.''',
        "Original Herbivore": '''In 2016, a Los Angeles vegan festival left the future owners of Original Herbivore disappointed. They found the food to be bland, and their dissatisfaction ran deep. As avid adherents of a meat-free lifestyle, they wanted to show the Golden State plants can do everything meat can do – and, at times, arguably better. They turned their letdown into an opportunity, however, by founding their very own food truck. Now, you can catch the Original Herbivore rolling around Long Beach and Los Angeles promoting a vegan diet via mouth-watering meat-free fare. ''',
        "8E8 Thai Street Food": '''8E8 Thai Street Food is bringing Thai food to the streets of Los Angeles, CA in style. It's a food truck, after all, and one that's sticking to traditional preparation methods and imported spices and seasonings to tantalize your tastebuds. Sure, it's easy enough to claim authenticity when it comes to exotic cuisines. But 8E8 Thai Street Food was founded by a descendant from a long line of Thai cooks, including parents that owned a food stall selling it in India.''',
        "Babys Badass Burgers": '''Baby's Badass Burgers sprang from the imaginations and experiences of ex-New Yorker restaurateur Erica Cohen (pictured left) and celebrated event planner Lori Barbera (pictured right). Cohen launched her career in the restaurant world as one of the founding partners in the first of The ONE Group’s many restaurants. Cohen, a passionate foodie and burgermeister at heart who had "been searching for the perfect, quintessential cheeseburger since [she] was a little girl," decided that in order to satiate her quest she would have to create her own flawless burger: the Simple Original Beauty on the BBB menu. Cohen is responsible for day to day opeartions, staffing and quality control and also manages and oversees all BBB franchisees.''',
        "Wafl": '''Wafl truck is making its way through all of LA, taking their wonderfully tasty sweet & savory, crispy, crunchy waffle creations to the ravenous peeps on the streets. They’re wheeling out a selection of waffle sandwiches that make for the perfect meal, breakfast, lunch, dinner, or dessert.''',
        "StopBye Cafe": '''StopBye Café is a family owned business serving Asian Fusion cuisine. We infuse the flavors of "Spice Island" (Indonesia) into a number of our dishes! We prepare fresh, savory entrees using exotic spices from around the world. ''',
        "Cerda Vega Tacos": '''Lorenzo and Danny are Mexican-Americans with a passion for sharing their heritage with you. Lovers of food and a flair for fun, they bring the party and authenticity to your event while meeting your needs and exceeding expectations. ​We love seeing the faces of happy clients and their unsuspecting guests.''',
        "Poutine Brothers": '''Poutine Brothers is bringing that Canadian staple to the streets of LA in style. It's a food truck that's keeping to traditional preparation methods while updating it for the modern foodie scene, with a full bodied menu built to satisfy. At Poutine Brothers, they're keeping things fresh in every dish and on the menu. Get the classic poutine featuring a bed of handcut fries smothered in Wisconsin cheese curds and homemade gravy, or spice it up a bit: Poutine Brothers' has chicken tikka masala and tender short ribs loaded on top, along with vegetarian options to satisfy all eaters. But that's not all.?????!!!!!! ''',
        "Uncle Al's Barbeque": '''Uncle Al and Auntie K created LA's first and only street style BBQ food truck, where we take Los Angeles style street fare and infuse it with BBQ flavors we all know and love. With over 15 years of culinary and customer service we pride ourselves in providing a unique and memorable experience every time you visit. We can't wait to see you and always remember to RUB.EAT. REPEAT. ''',
        "Aloha Fridays": '''Come on over to Aloha Fridays for a delicious taste of island life! This tropical truck is serving up authentic Hawaiian dishes like golden and crispy Chicken Katsu, plump Garlic shrimp, slow-cooked Kalua Pork, and much more. Of course your meal is not complete without the authentic sides of white rice, macaroni salad, and a fresh green salad. If you’re craving beautiful food from a beautiful place, come out to this truck and say “Aloha!”''',
        "Dulce Europa Shaved Ice": '''Look, we get it. Summers in Los Angeles get real, real hot. And when it's real, real hot, you need a real way to cool off: with some premium shaved ice, made of 100% real ingredients culled from California's freshest fruit juices. At Dulce Europa Shaved Ice, that realness is served up right from the window of a food truck, making your sweet dreams a sweet reality. Unlike your traditional shaved ice truck, using syrups that are chock full of sugar and artificial flavor, Dulce Europa Shaved Ice has a plethora of homemade flavors that feature the best in seasonal fruits Sun Valley has to offer. ''',
        "Habibi Shack": '''Habibi Shack is an up and coming Mediterranean food truck based in Los Angeles. Our food comes from authentic recipes our mother used to make us as children. Our food is halal, vegan and vegetarian friendly. We have some LA favorites as well.''',
        "Flaming Grain": '''It’s no secret Los Angeles, CA is a health conscious city. Flaming Grain is the hero of hungry Angelenos seeking some nutritious eats on the streets. This truck’s rolling through the City of Angels serving up gourmet bowls that provide a balanced meal without skimping on the taste. Every bowl on the menu sports the perfect combination of produce, carbs, and protein you need to fuel your day. Grab a bowl of hoisin glazed chicken served with a side of avocado and red peppers or sample some pinto beans served with corn and rice.''',
        "Yalla": '''Yalla Truck is a favorite amongst Angelenos, and it's easy to see why. It's a food truck that's modernizing traditional Middle Eastern and Mediterranean eats on the streets, putting together a fully customizable menu that fits just about everyone's needs. At Yalla Truck, your designer meal comes together in 3 easy steps. First, choose your form, they've got the authentic pita sandwich alongside inauthentic but totally delicious options like a tortilla wrap, salad and even tacos. From there, choose your protein: Yalla Truck's got chicken breast in specialty Mediterranean herbs and spices.''',
        "Bison Burger": '''At Bison Burger, regular old beef patties are a thing of the past. The Los Angeles truck has made a name for themselves, grilling up not only their titular bison, but elk, venison, boar, and Kobe beef as well. Their namesake burger, which features a 5oz patty on a Homeboy Industries bun, is always a great first move, but repeat visits will be a wash without giving a look to their other meats.'''
}





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

    z=[]
    for i in y:
        i=i.lower()
        fb_id = ''
        for j in i:
            if j.isalnum():
                fb_id+=j
        if fb_id=='stopbyecafé':
            fb_id='stopbyecafe'
        z.append(fb_id)

    
    return z


def getTrucksForTime(mealTime,pattern,arr):

  for j in range(9,11):

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
    


lunchTrucks=correctList(lunchTrucks)
dinnerTrucks=correctList(dinnerTrucks)
extendedTrucks=correctList(extendedTrucks)

print(lunchTrucks)
print(dinnerTrucks)
print(extendedTrucks)


#firebase connection
cred = credentials.Certificate("../servKey.json")
firebase_admin.initialize_app(cred)
db = firestore.client()

docs = db.collection('Trucks').get()


#delete yesterday's trucks
for doc in docs:
    doc_ref = db.collection(u'Trucks').document(doc.id)

    doc = doc_ref.get()
    if doc.exists:
        data = doc.to_dict()
        time = data['Time']
        if time in ["Lunch","Dinner","Lunch/Dinner","Dinner/Extended","Extended Dinner"]:
            db.collection(u'Trucks').document(doc.id).update({'Time':""})


#get today's trucks
for doc in docs:
    key = doc.id
    if key in lunchTrucks:
        if key in dinnerTrucks:
            db.collection(u'Trucks').document(key).update({'Time':"Lunch/Dinner"})
            continue
        db.collection(u'Trucks').document(key).update({'Time':"Lunch"})
    elif key in dinnerTrucks and key not in lunchTrucks:
        if key in extendedTrucks:
            db.collection(u'Trucks').document(key).update({'Time':"Dinner/Extended"})
            continue
        db.collection(u'Trucks').document(key).update({'Time':"Dinner"})
    elif key in extendedTrucks and key not in dinnerTrucks:
        db.collection(u'Trucks').document(key).update({'Time':"Extended Dinner"})





# for i in list(desc.keys()):
#     j = i.replace(" ","")
#     k = j.replace("'","")
#     db.collection(u'Trucks').document(f'{k.lower()}').set({'Name': i, 'Time': '', 'Description': desc[i]})






# for i in lunchTrucks:
#     j = i.replace("'","")
#     doc = db.collection(u'Trucks').document(f'{j}')
#     if doc.exists():
#         continue

#     db.collection(u'Trucks').document(f'{j}').set({'Name': i, 'Time': 'Lunch', 'Description': desc[j]})

# for i in dinnerTrucks:
#     j = i.replace("'","")
#     doc = db.collection(u'Trucks').document(f'{j}')
#     if doc.exists():
#         continue
#     db.collection(u'Trucks').document(f'{j}').set({'Name': i, 'Time': 'Dinner', 'Description': desc[j]})

# for i in extendedTrucks:
#     j = i.replace("'","")
#     doc = db.collection(u'Trucks').document(f'{j}')
#     if doc.exists():
#         continue
#     db.collection(u'Trucks').document(f'{j}').set({'Name': i, 'Time': 'Extended Dinner', 'Description': desc[j]})











