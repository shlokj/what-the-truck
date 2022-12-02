import React, { useState } from "react";
import {
  Button,
  FormControl,
  OutlinedInput,
  Radio,
  RadioGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import "bootstrap/dist/css/bootstrap.css";
import { FoodTruckCard, Footer } from "../components";
import Header from "../components/header";

const DELTA = 5;

export default function Home() {
  const placeholderTrucks = [
    "Cafe Vietnam",
    "Kalamaki Greek Street Food",
    "Paradise Cookies & Ice Cream",
    "Perro",
    "Philly Jays Steaks",
    "Savage Tacos",
    "Smile Hotdog",
    "Sweets on Wheels",
    "ThaiMex Cocina",
    "The Bollywood Kitchen",
    "The Taco Cartel",
    "Tokyo Style",
    "Yunas Bob",
    "Creamy Boys",
    "Pinch of Flavor",
    "Pacifico Charbroiled Fish",
    "Kogi",
    "Dinas Dumpling",
    "Salpicon",
    "Original Herbivore",
    "8E8 Thai Street Food",
    "Babys Badass Burgers",
    "Wafl",
    "StopBye Cafe",
    "Cerda Vega Tacos",
    "Poutine Brothers",
    "Uncle Al's Barbeque",
    "Aloha Fridays",
    "Dulce Europa Shaved Ice",
    "Habibi Shack",
    "Flaming Grain",
    "Yalla",
    "Bison Burger",
  ];

  const ratings = {
    "Cafe Vietnam": 1,
    "Kalamaki Greek Street Food": 2,
    "Paradise Cookies & Ice Cream": 3,
    Perro: 4,
    "Philly Jays Steaks": 5,
    "Savage Tacos": 1,
    "Smile Hotdog": 2,
    "Sweets on Wheels": 3,
    "ThaiMex Cocina": 4,
    "The Bollywood Kitchen": 5,
    "The Taco Cartel": 1,
    "Tokyo Style": 2,
    "Yunas Bob": 3,
    "Creamy Boys": 4,
    "Pinch of Flavor": 5,
    "Pacifico Charbroiled Fish": 1,
    Kogi: 2,
    "Dinas Dumpling": 3,
    Salpicon: 3,
    "Original Herbivore": 4,
    "8E8 Thai Street Food": 5,
    "Babys Badass Burgers": 1,
    Wafl: 2,
    "StopBye Cafe": 3,
    "Cerda Vega Tacos": 4,
    "Poutine Brothers": 5,
    "Uncle Al's Barbeque": 1,
    "Aloha Fridays": 2,
    "Dulce Europa Shaved Ice": 3,
    "Habibi Shack": 4,
    "Flaming Grain": 5,
    Yalla: 1,
    "Bison Burger": 2,
  };

  const numberOfReviews = {
    "Cafe Vietnam": 1,
    "Kalamaki Greek Street Food": 2,
    "Paradise Cookies & Ice Cream": 3,
    Perro: 4,
    "Philly Jays Steaks": 5,
    "Savage Tacos": 1,
    "Smile Hotdog": 2,
    "Sweets on Wheels": 3,
    "ThaiMex Cocina": 4,
    "The Bollywood Kitchen": 5,
    "The Taco Cartel": 1,
    "Tokyo Style": 2,
    "Yunas Bob": 3,
    "Creamy Boys": 4,
    "Pinch of Flavor": 5,
    "Pacifico Charbroiled Fish": 1,
    Kogi: 2,
    "Dinas Dumpling": 3,
    Salpicon: 3,
    "Original Herbivore": 4,
    "8E8 Thai Street Food": 5,
    "Babys Badass Burgers": 1,
    Wafl: 2,
    "StopBye Cafe": 3,
    "Cerda Vega Tacos": 4,
    "Poutine Brothers": 5,
    "Uncle Al's Barbeque": 1,
    "Aloha Fridays": 2,
    "Dulce Europa Shaved Ice": 3,
    "Habibi Shack": 4,
    "Flaming Grain": 5,
    Yalla: 1,
    "Bison Burger": 2,
  };

  const imagePaths = {
    "Cafe Vietnam": "../../food_truck_logos/cafevietnam.jpeg",
    "Kalamaki Greek Street Food": "../../food_truck_logos/kalamaki.jpeg",
    "Paradise Cookies & Ice Cream":
      "../../food_truck_logos/paradisecookiesandcream.jpeg",
    Perro: "../../food_truck_logos/perro.jpeg",
    "Philly Jays Steaks": "../../food_truck_logos/phillyjayssteaks.jpeg",
    "Savage Tacos": "../../food_truck_logos/savagetacos.jpeg",
    "Smile Hotdog": "../../food_truck_logos/smilehotdog.jpeg",
    "Sweets on Wheels": "../../food_truck_logos/sweetsonwheels.jpg",
    "ThaiMex Cocina": "../../food_truck_logos/thaimexcocina.jpeg",
    "The Bollywood Kitchen": "../../food_truck_logos/thebollywoodkitchen.jpg",
    "The Taco Cartel": "../../food_truck_logos/thetacocartel.jpeg",
    "Tokyo Style": "../../food_truck_logos/tokyostyle.jpeg",
    "Yunas Bob": "../../food_truck_logos/yunasbob.jpeg",
    "Creamy Boys": "../../food_truck_logos/creamyboys.jpeg",
    "Pinch of Flavor": "../../food_truck_logos/pinchofflavor.jpeg",
    "Pacifico Charbroiled Fish": "../../food_truck_logos/pacifico.jpeg",
    Kogi: "../../food_truck_logos/kogi.jpeg",
    "Dinas Dumpling": "../../food_truck_logos/dinasdumplings.jpeg",
    Salpicon: "../../food_truck_logos/salpicon.png",
    "Original Herbivore": "../../food_truck_logos/originalherbivore.jpeg",
    "8E8 Thai Street Food": "../../food_truck_logos/8e8thaistreetfood.jpeg",
    "Babys Badass Burgers": "../../food_truck_logos/babysbadassburgers.jpeg",
    Wafl: "../../food_truck_logos/wafl.jpeg",
    "StopBye Cafe": "../../food_truck_logos/stopbyecafe.jpeg",
    "Cerda Vega Tacos": "../../food_truck_logos/cerdavegatacos.jpeg",
    "Poutine Brothers": "../../food_truck_logos/poutinebrothers.jpeg",
    "Uncle Al's Barbeque": "../../food_truck_logos/unclealsbarbeque.jpeg",
    "Aloha Fridays": "../../food_truck_logos/alohafridays.jpeg",
    "Dulce Europa Shaved Ice":
      "../../food_truck_logos/dulceeuropashavedice.jpeg",
    "Habibi Shack": "../../food_truck_logos/habibishack.jpeg",
    "Flaming Grain": "../../food_truck_logos/flaminggrain.jpeg",
    Yalla: "../../food_truck_logos/yalla.jpeg",
    "Bison Burger": "../../food_truck_logos/bisonburger.jpeg",
  };

  const descriptions = {
    "Cafe Vietnam":
      "A rotating crop of seasonal items (like egg rolls, fried dumplings, chicken curry, and pork belly fried rice) round out the offerings, giving you extra reasons to keep coming back to Trangs mobile paradise.  If you need something like “extra” reasons, that is. They have gone as far as grinding their wholesome ingredients everyday, even black peppercorns they said.",
    "Kalamaki Greek Street Food":
      "My business-oriented mind lay dormant in Crete. My dreams led me to where I am now, a food truck that specializes in “fine Greek food, Vromiko-style, Greek yogurt smoothies and Blended coffees with Greek yogurt on top which is inspired by the island of Crete. Most customers will come for Gyros and live the experience and the smell of the summer vacation that had in Greece. I feel proud when they start telling me where they have traveled in Greece and saying Greek words that they learn while they were there.",
    "Paradise Cookies & Ice Cream":
      "Paradise Cookies & Ice Cream® is a privately-owned, family-run cookies and ice cream establishment founded with one simple notion in mind: to bring high-quality and affordable cookies and ice cream services to neighborhoods throughout Southern California with unparalleled customer service. All our cookies are made from scratch and baked fresh throughout the day using only the finest all-natural ingredients.",
    Perro:
      "We proudly serve one of the best tacos you will ever have. Everything starts with our Moms handmade flour tortilla imported from Tijuana Mexico topped with smoked steak grilled cheese and fresh vegetables.",
    "Philly Jays Steaks":
      "Philly Jays Steaks is a food truck in Monterey Park, CA, specializing in serving up hearty meals for people throughout our community. Were bringing authentic Philly cheese steaks to California, but with a gourmet twist. Chef Jason McClain has years of experience cooking for some of the most highly rated restaurants in the country, and now he is directing his myriad of skills towards perfecting the Philly, elevating the down-home fare to the status of gourmet.",
    "Savage Tacos":
      "Theres a world of flavor in every bite at Savage Tacos Truck. Based in Long Beach, CA, this tasty food truck serves up not only gourmet tacos, but also burgers, burritos, and fries with flavors from Mexico, Jamaica, Korea, and some American favorites. Food has no walls at Savage Tacos, and nowhere is that more apparent than in their mission statement, where they take pride in fair compensation to their staff, and feeding the homeless folks of Long Beach each week with their Savage Mondays program. Join the movement and book the universal flavors of the Savage Tacos Truck for your next event today!",
    "Smile Hotdog":
      "While I was visiting Korea in 2018. I happened to visit the Korean Street Food venues and noticed there spicy rice cake aka: tteokbokki and their deep fried corndog. Once I tasted the spicy rice cake and the corndogs it brought fond memories of my childhood and wanted to share the flavors.",
    "Sweets on Wheels":
      "For your next event, go with the food truck that everyone will love! Sweets on Wheels brings your favorite treats to you! Crepes, Churros, Ice Cream and more!",
    "ThaiMex Cocina":
      "Youll never have to choose between Thai and Mexican Food again! The Thai-Mex Cocina food truck offers mouthwatering, multicultural creations like doubly authentic tacos, quesadillas and noodles at your choosing of spicy garlic shrimp, chicken satay or crispy pork belly.",
    "The Bollywood Kitchen":
      "The Bollywood Kitchen is bringing all the exotic flavor from the far east to the streets of Hollywood. How? This fantastic food truck is committed to authenticity, with Indian and Chinese cuisine thats sticking to traditional preparation methods with imported spices and seasonings to tantalize your tastebuds.",
    "The Taco Cartel":
      "The Taco Cartel is both here to bring LA back to the basics of the taco truck, and show it there iss nothing basic about taco trucks. Fun twists align every dish in unexpected places, offering both authentic flavor and imaginative whimsy. Besides the requisite tacos, new signatures are being tested and rotated out daily, so catch them at each show and event you see them posted - they are sure to have something new each time; something sure to get the streets talking. ",
    "Tokyo Style":
      "Since spring of 2013, CIA alumnus Chef Keith Yokoyama has been treating the streets of Los Angeles to his unique brand of Japanese fusion food – and hes earned his fair share of esteem doing so. In 2014 alone, he landed a spot on CBS Los Angeles ranking of the Best Food Trucks in LA and had a few of his recipes included in Food Truck Road Trip: A Cookbook. Suffice to say, the eats at this truck are well worth sampling. Tokyo Style Food first made a splash across the City of Angels for their Japanese fusion hot dogs.",
    "Yunas Bob":
      "Yunas Bob is LAs finest Korean Food on wheels. We love to see happy customers enjoying our authentic Korean dishes. Try the Bulgogi Beef Bowl with rice an1d vegetables or our signature Spicy Shrimp Bowl. Everything we serve is fresh, delicious and prepared to order. Yunas can often be found on the westside serving the community quality eats at affordable prices. We Cater too, for studio gigs, corporate events and private parties as well. Come find our truck and you will taste the difference!",
    "Creamy Boys":
      "This is a popular style in New Zealand made from ice cream and fruit. You will often find it at the beach, a farmers market or a fruit shop.To make Real Fruit Ice Cream, us kiwis blend your choice of frozen fruits with a dairy or non-dairy ice cream. ",
    "Pinch of Flavor":
      "You will never realize just how big a food trucks menu can be until you stop by Pinch of Flavor. Isis and Jael are dedicated to whipping up pristine made-to-order eats on the streets of Los Angeles, CA, all popping with traditional Mexican ingredients. This aint your average taco truck, but a gourmet establishment sporting a menu with unbelievably flavorful fare. Foodies across LA need to hit it up ASAP. The name is apt here. The bounty of tacos, burgers, and bowls are bursting with bold taste.",
    "Pacifico Charbroiled Fish":
      "The Pacifico Charbroiled Fish Food Truck is a Southern Californian staple featuring Baja-style seafood catering and serving greater LA. We have all your coastal favorites including fish plates, tacos, fried and grilled shrimp offerings, and so much more. We specialize in catering for any and all events in LA. Fresh matters! Add us to your office rotation for a healthy option at lunchtime, we have something on our menu for everyone. Let Pacifico Charbroiled Fish bring the fresh seafood to you!",
    Kogi: "Kogi started in 2008 when we hit the streets of LA with a humble little Korean short rib taco that met Twitter in the middle of the night in front of a nightclub in Hollywood. We then started to create crowds and cravings across the whole city transmitting a new form of dialogue and culture between food and technology. Over the years, we have gone on to feed almost every street from LA to OC to the South Bay to the Valley to the IE to Ventura and Santa Barbara counties to major music festivals, even worldwide.",
    "Dinas Dumpling":
      "Dinas Dumpling is a modern Chinese food truck located in Pasadena CA. Our goal is to bring you authentic Chinese handmade dumplings in a fast street style. We love what we do, and take pride in preparing our food using simple, fresh ingredients daily.",
    Salpicon:
      "Salpicon Shop Fruit is LAs favorite fruit cart by far. This little pop up fruit shop is chopping up the freshest of fruits to refresh your day the all natural way, with hand picked local produce that only adds to that fresh flavor. At Salpicon Shop Fruit, treat your sweet tooth to the likes of pineapple, watermelon, mango, melon and cucumber in a cup drizzled in lime juice, chamoy and spicy chili pepper.",
    "Original Herbivore":
      "In 2016, a Los Angeles vegan festival left the future owners of Original Herbivore disappointed. They found the food to be bland, and their dissatisfaction ran deep. As avid adherents of a meat-free lifestyle, they wanted to show the Golden State plants can do everything meat can do – and, at times, arguably better. They turned their letdown into an opportunity, however, by founding their very own food truck. Now, you can catch the Original Herbivore rolling around Long Beach and Los Angeles promoting a vegan diet via mouth-watering meat-free fare. ",
    "8E8 Thai Street Food":
      "8E8 Thai Street Food is bringing Thai food to the streets of Los Angeles, CA in style. It is a food truck, after all, and one that is sticking to traditional preparation methods and imported spices and seasonings to tantalize your tastebuds. Sure, it is easy enough to claim authenticity when it comes to exotic cuisines. But 8E8 Thai Street Food was founded by a descendant from a long line of Thai cooks, including parents that owned a food stall selling it in India.",
    "Babys Badass Burgers":
      'Babys Badass Burgers sprang from the imaginations and experiences of ex-New Yorker restaurateur Erica Cohen (pictured left) and celebrated event planner Lori Barbera (pictured right). Cohen launched her career in the restaurant world as one of the founding partners in the first of The ONE Groups many restaurants. Cohen, a passionate foodie and burgermeister at heart who had "been searching for the perfect, quintessential cheeseburger since [she] was a little girl," decided that in order to satiate her quest she would have to create her own flawless burger: the Simple Original Beauty on the BBB menu. Cohen is responsible for day to day opeartions, staffing and quality control and also manages and oversees all BBB franchisees.',
    Wafl: "Wafl truck is making its way through all of LA, taking their wonderfully tasty sweet & savory, crispy, crunchy waffle creations to the ravenous peeps on the streets. They are wheeling out a selection of waffle sandwiches that make for the perfect meal, breakfast, lunch, dinner, or dessert.",
    "StopBye Cafe":
      'StopBye Café is a family owned business serving Asian Fusion cuisine. We infuse the flavors of "Spice Island" (Indonesia) into a number of our dishes! We prepare fresh, savory entrees using exotic spices from around the world. ',
    "Cerda Vega Tacos":
      "Lorenzo and Danny are Mexican-Americans with a passion for sharing their heritage with you. Lovers of food and a flair for fun, they bring the party and authenticity to your event while meeting your needs and exceeding expectations. ​We love seeing the faces of happy clients and their unsuspecting guests.",
    "Poutine Brothers":
      "Poutine Brothers is bringing that Canadian staple to the streets of LA in style. It is a food truck that is keeping to traditional preparation methods while updating it for the modern foodie scene, with a full bodied menu built to satisfy. At Poutine Brothers, they are keeping things fresh in every dish and on the menu. Get the classic poutine featuring a bed of handcut fries smothered in Wisconsin cheese curds and homemade gravy, or spice it up a bit: Poutine Brothers has chicken tikka masala and tender short ribs loaded on top, along with vegetarian options to satisfy all eaters. But thats not all.?????!!!!!!",
    "Uncle Al's Barbeque":
      "Uncle Al and Auntie K created LAs first and only street style BBQ food truck, where we take Los Angeles style street fare and infuse it with BBQ flavors we all know and love. With over 15 years of culinary and customer service we pride ourselves in providing a unique and memorable experience every time you visit. We cannot wait to see you and always remember to RUB.EAT. REPEAT. ",
    "Aloha Fridays":
      "Come on over to Aloha Fridays for a delicious taste of island life! This tropical truck is serving up authentic Hawaiian dishes like golden and crispy Chicken Katsu, plump Garlic shrimp, slow-cooked Kalua Pork, and much more. Of course your meal is not complete without the authentic sides of white rice, macaroni salad, and a fresh green salad. If you are craving beautiful food from a beautiful place, come out to this truck and say “Aloha!”",
    "Dulce Europa Shaved Ice":
      "Look, we get it. Summers in Los Angeles get real, real hot. And when its real, real hot, you need a real way to cool off: with some premium shaved ice, made of 100% real ingredients culled from Californias freshest fruit juices. At Dulce Europa Shaved Ice, that realness is served up right from the window of a food truck, making your sweet dreams a sweet reality. Unlike your traditional shaved ice truck, using syrups that are chock full of sugar and artificial flavor, Dulce Europa Shaved Ice has a plethora of homemade flavors that feature the best in seasonal fruits Sun Valley has to offer. ",
    "Habibi Shack":
      "Habibi Shack is an up and coming Mediterranean food truck based in Los Angeles. Our food comes from authentic recipes our mother used to make us as children. Our food is halal, vegan and vegetarian friendly. We have some LA favorites as well.",
    "Flaming Grain":
      "Its no secret that Los Angeles, CA is a health conscious city. Flaming Grain is the hero of hungry Angelenos seeking some nutritious eats on the streets. This trucks rolling through the City of Angels serving up gourmet bowls that provide a balanced meal without skimping on the taste. Every bowl on the menu sports the perfect combination of produce, carbs, and protein you need to fuel your day. Grab a bowl of hoisin glazed chicken served with a side of avocado and red peppers or sample some pinto beans served with corn and rice.",
    Yalla:
      "Yalla Truck is a favorite amongst Angelenos, and its easy to see why. Its a food truck thats modernizing traditional Middle Eastern and Mediterranean eats on the streets, putting together a fully customizable menu that fits just about everyones needs. At Yalla Truck, your designer meal comes together in 3 easy steps. First, choose your form, they have got the authentic pita sandwich alongside inauthentic but totally delicious options like a tortilla wrap, salad and even tacos. From there, choose your protein: Yalla Truck has got chicken breast in specialty Mediterranean herbs and spices.",
    "Bison Burger":
      "At Bison Burger, regular old beef patties are a thing of the past. The Los Angeles truck has made a name for themselves, grilling up not only their titular bison, but elk, venison, boar, and Kobe beef as well. Their namesake burger, which features a 5oz patty on a Homeboy Industries bun, is always a great first move, but repeat visits will be a wash without giving a look to their other meats.",
  };

  const [i, setI] = useState(0);
  const [search, setSearch] = useState("");
  const [popup, setPopup] = useState(false);
  const [sort, setSort] = useState("rating");
  const [decreasing, setDecreasing] = useState(true);
  const display = placeholderTrucks
    .filter(
      (title) =>
        title.toLowerCase().includes(search.toLowerCase()) ||
        descriptions[title].toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) =>
      sort === "rating"
        ? decreasing
          ? ratings[b] - ratings[a]
          : ratings[a] - ratings[b]
        : decreasing
        ? numberOfReviews[b] - numberOfReviews[a]
        : numberOfReviews[a] - numberOfReviews[b]
    );

  return (
    <div className="w-100 vh-100 d-flex flex-column align-items-center gap-3">
      <Header></Header>

      <div className="w-75 d-flex flex-column align-items-center p-2 gap-3">
        <div className="h-100 w-75 d-flex justify-content-between align-items-center">
          <div className="h-100 d-flex gap-1 align-items-center">
            <Button
              variant="outlined"
              className={`${
                i - DELTA < 0 ? "" : "bg-light"
              } p-0 fs-3 h-75 text-primary border-primary`}
              onClick={() => {
                setI(Math.max(i - DELTA, 0));
              }}
              disabled={i === 0}
            >
              {`<`}
            </Button>
            <Button
              variant="outlined"
              className={`${
                i + DELTA >= display.length ? "" : "bg-light"
              } p-0 fs-3 h-75 text-primary border-primary`}
              onClick={() => {
                setI(i + DELTA);
              }}
              disabled={i + DELTA >= display.length}
            >
              {`>`}
            </Button>
            <div className="ms-2 text-secondary">
              ({Math.min(i + 1, display.length)} -{" "}
              {Math.min(i + DELTA, display.length)}) out of {display.length}
            </div>
          </div>

          <div className="d-flex h-75 justify-content-end align-items-center gap-3">
            <div className="h-100 d-flex align-items-center justify-content-center">
              <FormControl className="h-100 d-flex align-items-center justify-content-center">
                <OutlinedInput
                  placeholder="Search"
                  className="h-100"
                  onChange={(e) => {
                    setSearch(e.target.value);
                    setI(0);
                  }}
                />
              </FormControl>
            </div>
            <Button
              variant="outlined"
              className="h-100 text-primary border-primary"
              onClick={() => {
                setPopup(!popup);
              }}
            >
              Sort
            </Button>
          </div>
        </div>

        {display.length > 0 ? (
          <div className="min-h-100 w-75 d-flex flex-column justify-content-between gap-4">
            {display.slice(i, i + DELTA).map((title) => (
              <div>
                {console.log(ratings[title])}
                <FoodTruckCard
                  name={title}
                  text={descriptions[title]}
                  imageURL={imagePaths[title]}
                  rating={ratings[title]}
                  numberOfReviews={numberOfReviews[title]}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="p-5" style={{ minHeight: "50vh" }}></div>
        )}

        <div className="h-100 w-75 d-flex justify-content-between align-items-center">
          <div className="h-100 d-flex gap-1 align-items-center">
            <Button
              variant="outlined"
              className={`${
                i - DELTA < 0 ? "" : "bg-light"
              } p-0 fs-3 h-75 text-primary border-primary`}
              onClick={() => {
                setI(Math.max(i - DELTA, 0));
              }}
              disabled={i === 0}
            >
              {`<`}
            </Button>
            <Button
              variant="outlined"
              className={`${
                i + DELTA >= display.length ? "" : "bg-light"
              } p-0 fs-3 h-75 text-primary border-primary`}
              onClick={() => {
                setI(i + DELTA);
              }}
              disabled={i + DELTA >= display.length}
            >
              {`>`}
            </Button>
            <div className="ms-2 text-secondary">
              ({Math.min(i + 1, display.length)} -{" "}
              {Math.min(i + DELTA, display.length)})
            </div>
          </div>

          <div className="d-flex h-75 justify-content-end align-items-center gap-3">
            <div className="h-100 d-flex align-items-center justify-content-center">
              <FormControl className="h-100 d-flex align-items-center justify-content-center">
                <OutlinedInput
                  placeholder="Search"
                  className="h-100"
                  onChange={(e) => {
                    setSearch(e.target.value);
                    setI(0);
                  }}
                />
              </FormControl>
            </div>
            <Button
              variant="outlined"
              className="h-100 text-primary border-primary"
              onClick={() => {
                setPopup(!popup);
              }}
            >
              Sort
            </Button>
          </div>
        </div>

        {popup ? (
          <div
            className="position-absolute align-self-end mt-5
             p-4 d-flex flex-column align-items-center justify-content-between
              gap-2 border border-primary rounded rounded-3"
            style={{ left: "80%" }}
          >
            <FormControl>
              <RadioGroup defaultValue="rating" name="radio-buttons-group">
                <FormControlLabel
                  value="rating"
                  control={<Radio />}
                  label="Average Rating"
                  onClick={() => {
                    setSort("rating");
                  }}
                />
                <FormControlLabel
                  value="reviews"
                  control={<Radio />}
                  label="Number of Reviews"
                  onClick={() => {
                    setSort("reviews");
                  }}
                />
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="Decreasing Order"
                  onClick={(e) => {
                    setDecreasing(e.target.checked);
                  }}
                />
              </RadioGroup>
            </FormControl>
            <Button
              variant="contained"
              className="h-100 mt-2"
              onClick={() => {
                setPopup(false);
              }}
            >
              Close
            </Button>
          </div>
        ) : (
          ""
        )}
      </div>
      <Footer />
    </div>
  );
}
