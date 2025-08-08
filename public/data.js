const data = {
  asia: [
    {
      name: "Cultural India Tour",
      id: "1",
      content: {
        country: "India",
        cover: ["india_one.jpg", "india_three.jpg", "india_two.jpg"],
        title_main: "Cultural Tour In India",
        title_sub: "Discover Delhi and Its Surroundings",
        description:
          "Embark on a captivating journey through Delhi and its surrounding areas, exploring a rich tapestry of history, architecture, and cultural heritage. From the grandeur of Mughal monuments in Delhi to the serene landscapes of Rajasthan, immerse yourself in the vibrant colors, flavors, and traditions that define this region. Visit ancient forts, magnificent palaces, and sacred temples, experiencing the essence of India’s diverse cultural mosaic.",
        summary:
          "Below are the extraordinary destinations that contribute to our comprehensive Cultural Tour, offering an unforgettable glimpse into Delhi and its surrounding areas:",
        destinations: [
          {
            id: 1,
            name: "Red Fort",
            location: "Delhi",
            description:
              "The Red Fort, a UNESCO World Heritage Site, is a majestic symbol of Mughal architecture and power. Built in the 17th century by Emperor Shah Jahan, this fortress-palace served as the residence of Mughal emperors for centuries. Its impressive red sandstone walls enclose exquisite palaces, gardens, and audience halls where historical events and royal ceremonies unfolded. The fort’s iconic Lahore Gate and Diwan-i-Khas (Hall of Private Audience) are architectural marvels that reflect India’s rich cultural heritage.",
            image: "red_fort.jpg",
          },
          {
            id: 2,
            name: "Qutub Minar",
            location: "Delhi",
            description:
              "Qutub Minar, the tallest brick minaret in the world, stands as a testament to Delhi’s rich history and architectural brilliance. Built in the early 13th century by Qutb-ud-din Aibak, the first ruler of the Delhi Sultanate, this UNESCO World Heritage Site is adorned with intricate carvings and verses from the Quran. The five-storied tower, surrounded by ancient ruins of Hindu temples, represents the cultural fusion of Hindu and Islamic influences during medieval India.",
            image: "qutub_minar.jpg",
          },
          {
            id: 3,
            name: "Humayun's Tomb",
            location: "Delhi",
            description:
              "Humayun's Tomb, commissioned by Empress Bega Begum in the mid-16th century, is a masterpiece of Mughal architecture and a UNESCO World Heritage Site. This splendid mausoleum, built for Emperor Humayun, features a symmetrical garden layout, towering sandstone dome, and intricate marble lattice screens. The tomb’s serene beauty, set amidst lush gardens and reflective pools, inspired the design of the Taj Mahal and remains a testament to India’s artistic and cultural legacy.",
            image: "humayun_tomb.jpg",
          },
          {
            id: 4,
            name: "Lotus Temple",
            location: "Delhi",
            description:
              "The Lotus Temple, renowned for its unique lotus-shaped architecture, is a Bahá'í House of Worship and a prominent spiritual landmark in Delhi. Completed in 1986, this serene white marble temple welcomes people of all religions to pray and meditate in its tranquil surroundings. Surrounded by lush gardens and reflecting pools, the Lotus Temple embodies the Bahá'í principles of unity, peace, and harmony among all people and religions.",
            image: "lotus_temple.jpg",
          },
          {
            id: 5,
            name: "Akshardham Temple",
            location: "Delhi",
            description:
              "Akshardham, one of the largest Hindu temples in the world, is a spiritual and cultural complex dedicated to Bhagwan Swaminarayan. Built in 2005, this architectural marvel showcases India’s ancient art, culture, and spiritual heritage through exhibitions, gardens, and a stunning temple complex. The intricately carved mandir, surrounded by lush lawns and water features, invites visitors to experience the beauty of Indian architecture and spirituality.",
            image: "akshardham_temple.jpg",
          },
          {
            id: 6,
            name: "Jama Masjid",
            location: "Delhi",
            description:
              "Jama Masjid, Delhi’s largest mosque and a symbol of Mughal grandeur, was commissioned by Emperor Shah Jahan in the 17th century. Constructed from red sandstone and white marble, this iconic mosque features three grand domes, minarets, and a vast courtyard capable of accommodating thousands of worshippers. Jama Masjid offers panoramic views of Old Delhi and remains a significant spiritual and architectural landmark in India’s capital city.",
            image: "jama_masjid.jpg",
          },
          {
            id: 7,
            name: "Raj Ghat",
            location: "Delhi",
            description:
              "Raj Ghat, a serene memorial dedicated to Mahatma Gandhi, marks the spot where the Father of the Nation was cremated in 1948. Surrounded by lush gardens and simple white marble, this memorial epitomizes Gandhi’s principles of simplicity and non-violence. Visitors can pay homage to Gandhi’s legacy by viewing the eternal flame that burns at Raj Ghat and exploring the adjacent Gandhi Memorial Museum, which showcases his life and teachings.",
            image: "raj_ghat.jpg",
          },
          {
            id: 8,
            name: "Agra Fort",
            location: "Agra",
            description:
              "Agra Fort, a UNESCO World Heritage Site, served as the main residence of the Mughal emperors until 1638 when the capital shifted to Delhi. Built primarily of red sandstone, this colossal fort complex encompasses palaces, mosques, and audience halls, each reflecting the grandeur of Mughal architecture and craftsmanship. The fort’s towering walls offer panoramic views of the Taj Mahal across the Yamuna River, providing a glimpse into India’s imperial history and cultural legacy.",
            image: "agra_fort.jpg",
          },
          {
            id: 9,
            name: "Fatehpur Sikri",
            location: "Uttar Pradesh",
            description:
              "Fatehpur Sikri, a UNESCO World Heritage Site, was founded by Emperor Akbar in the late 16th century and served as the Mughal capital for 14 years. This magnificent red sandstone city houses palaces, courts, mosques, and other structures that blend Hindu, Islamic, and Persian architectural styles. The Jama Masjid, Buland Darwaza (Victory Gate), and the Tomb of Salim Chishti are notable landmarks that highlight the city’s cultural and historical significance.",
            image: "fatehpur_sikri.jpg",
          },
          {
            id: 10,
            name: "Jaipur City Palace",
            location: "Jaipur",
            description:
              "Jaipur City Palace, a royal residence built in the early 18th century by Maharaja Sawai Jai Singh II, is a magnificent blend of Rajput, Mughal, and European architectural styles. This sprawling palace complex houses courtyards, gardens, and museums showcasing artifacts from Jaipur’s royal history. The Chandra Mahal within the palace is still home to the Jaipur royal family. The palace’s ornate gates, intricate marble work, and vibrant paintings offer a glimpse into Rajasthan’s rich cultural heritage.",
            image: "jaipur_city_palace.jpg",
          },
          {
            id: 11,
            name: "Amber Fort",
            location: "Jaipur",
            description:
              "Amber Fort, perched on a hilltop overlooking Maota Lake, is a stunning blend of Rajput and Mughal architectural styles. Built in the late 16th century by Raja Man Singh I, this majestic fort-palace complex features expansive courtyards, intricate carvings, and stunning panoramic views of the surrounding hills. The fort’s Sheesh Mahal (Hall of Mirrors), Diwan-e-Aam (Hall of Public Audience), and Ganesh Pol (Ganesh Gate) are architectural marvels that showcase the opulence of Jaipur’s royal heritage.",
            image: "amber_fort.jpg",
          },
          {
            id: 12,
            name: "Hawa Mahal",
            location: "Jaipur",
            description:
              "Hawa Mahal, also known as the Palace of Winds, is an iconic five-story palace constructed of pink sandstone. Built in 1799 by Maharaja Sawai Pratap Singh, this architectural marvel features intricately latticed windows and balconies designed for the royal women to observe street festivities while remaining unseen from the outside. The palace's unique honeycomb structure, resembling the crown of Lord Krishna, is a symbol of Jaipur's rich cultural and architectural heritage.",
            image: "hawa_mahal.jpg",
          },
          {
            id: 13,
            name: "Jantar Mantar",
            location: "Jaipur",
            description:
              "Jantar Mantar, an astronomical observatory built in the early 18th century by Maharaja Sawai Jai Singh II, is a UNESCO World Heritage Site. This collection of architectural astronomical instruments allows precise measurement of celestial bodies' positions and time determination. The Samrat Yantra, the largest sundial in the world, stands as a testament to India's scientific prowess during the Mughal era. Visitors can marvel at the complex geometrical structures and learn about ancient Indian astronomy.",
            image: "jantar_mantar.jpg",
          },
          {
            id: 14,
            name: "Pushkar",
            location: "Rajasthan",
            description:
              "Pushkar, a sacred town nestled around the serene Pushkar Lake, is one of the oldest cities in India. It is renowned for the Brahma Temple, dedicated to Lord Brahma, the creator of the universe, making it one of the few temples dedicated to Brahma in the world. The annual Pushkar Camel Fair, held in November, attracts pilgrims, traders, and tourists from around the globe, offering a vibrant showcase of Rajasthan’s cultural richness. The town’s narrow streets are lined with temples, ghats, and bustling markets, providing visitors with a spiritual and sensory journey through India’s ancient traditions.",
            image: "pushkar.jpg",
          },
        ],
        itenary: [
          {
            day: "Day 1 - Delhi",
            description:
              "Arrive in Delhi, the capital city of India, known for its rich history and vibrant culture. Explore historical monuments such as the Red Fort, Qutub Minar, Humayun's Tomb, Lotus Temple, Akshardham Temple, Jama Masjid, and Raj Ghat. Overnight stay in Delhi.",
            image: "red_fort.jpg",
          },

          {
            day: "Day 2 - Agra",
            description:
              "Travel to Agra, home to the iconic Taj Mahal. Marvel at this masterpiece of Mughal architecture, a UNESCO World Heritage site. Visit Agra Fort, another UNESCO site known for its blend of Islamic and Hindu architecture. Enjoy shopping for local crafts and artifacts. Overnight stay in Agra.",
            image: "agra_fort.jpg",
          },
          {
            day: "Day 3 - Jaipur",
            description:
              "Drive to Jaipur, the 'Pink City' known for its palaces and forts. Visit the Amber Fort, City Palace, Hawa Mahal, and Jantar Mantar. Explore the vibrant markets of Jaipur for traditional Rajasthani crafts. Overnight stay in Jaipur.",
            image: "amber_fort.jpg",
          },
          {
            day: "Day 4 - Uttar Pradesh",
            description:
              " Experience the spiritual ambience, witness traditional rituals, and enjoy an enriching overnight stay in Ayodhya.",
            image: "fatehpur_sikri.jpg",
          },
          {
            day: "Day 5 - Pushkar",
            description:
              "Proceed to Pushkar, a sacred town famous for the Brahma Temple. Explore Pushkar Lake, ghats, and local markets. Enjoy the spiritual atmosphere and witness traditional rituals. Overnight stay in Pushkar.",
            image: "pushkar.jpg",
          },
        ],
      },
    },
    {
      name: "tourPlanDubai6days",
      id: "2",
      content: {
        country: "Dubai",
        cover: ["dubai_one.jpg", "dubai_two.jpg", "dubai_three.jpg"],
        title_main: "Explore Dubai",
        title_sub: "A Fascinating Journey through the City of Wonders",
        summary:
          "Dubai dazzles with its towering skyscrapers, luxury shopping, and vibrant nightlife, juxtaposed with cultural delights like historic neighborhoods and bustling souks.",
        description:
          "Embark on an exhilarating 6-day journey through Dubai, a city known for its futuristic architecture, vibrant culture, and luxurious experiences. From towering skyscrapers to traditional souks, and from desert adventures to stunning beaches, Dubai offers a perfect blend of modernity and heritage. Explore iconic landmarks, indulge in world-class shopping, savor exquisite cuisine, and unwind amidst breathtaking landscapes.",
        itenary: [
          {
            day: "Day 1 - Arrival in Dubai",
            description:
              "Arrive in Dubai and check-in to your hotel. Spend the day relaxing and exploring your surroundings. In the evening, take a leisurely walk along the Marina Walk or enjoy dinner at one of the waterfront restaurants.",
            image: "dubai_marina.jpg",
          },
          {
            day: "Day 2 - Downtown Dubai",
            description:
              "Visit Burj Khalifa, the world's tallest building, and enjoy panoramic views of the city from the observation decks. Explore Dubai Mall, one of the largest malls globally, featuring an aquarium, indoor theme park, and countless shops. Witness the stunning Dubai Fountain show in the evening.",
            image: "burj_khalifa.jpg",
          },
          {
            day: "Day 3 - Old Dubai",
            description:
              "Discover the historic district of Bastakiya and visit Dubai Museum housed in Al Fahidi Fort. Cross the Dubai Creek in an abra (traditional boat) to explore the bustling souks (markets) of Deira, including the Gold Souk and Spice Souk.",
            image: "dubai_museum.jpg",
          },
          {
            day: "Day 4 - Desert Safari",
            description:
              "Embark on a thrilling desert safari adventure. Enjoy dune bashing in 4x4 vehicles, try sandboarding, and take a camel ride. Experience traditional Arabic entertainment with belly dancing and a delicious BBQ dinner under the stars at a desert camp.",
            image: "desert_safari.jpg",
          },
          {
            day: "Day 5 - Palm Jumeirah and Dubai Marina",
            description:
              "Explore Palm Jumeirah, a man-made island shaped like a palm tree. Visit Atlantis The Palm for its aquarium and water park. In the evening, stroll along Dubai Marina, dine at a trendy restaurant, or take a sunset cruise.",
            image: "palm_jumeirah.jpg",
          },
          {
            day: "Day 6 - Beach Day and Departure",
            description:
              "Relax on Jumeirah Beach or visit Madinat Jumeirah, a luxury resort with traditional souks and dining options. Depending on your flight schedule, you may have time for last-minute shopping or a spa session before departing from Dubai.",
            image: "jumeirah_beach.jpg",
          },
        ],
        destinations: [
          {
            id: 1,
            name: "Burj Khalifa",
            location: "Downtown Dubai",
            description:
              "Burj Khalifa, the tallest building in the world, offers breathtaking views of Dubai's skyline from its observation decks. Its futuristic design and innovative architecture make it a global icon.",
            image: "burj_khalifa.jpg",
          },
          {
            id: 2,
            name: "Dubai Mall",
            location: "Downtown Dubai",
            description:
              "Dubai Mall is one of the largest shopping malls globally, featuring over 1,200 retail outlets, an aquarium, an ice rink, and a theme park. It's a shopper's paradise and a hub of entertainment.",
            image: "dubai_mall.jpg",
          },
          {
            id: 3,
            name: "Dubai Museum",
            location: "Old Dubai",
            description:
              "Housed in Al Fahidi Fort, Dubai Museum showcases the city's history and culture. Exhibits include artifacts, dioramas, and interactive displays depicting traditional Emirati life.",
            image: "dubai_museum.jpg",
          },
          {
            id: 4,
            name: "Desert Safari",
            location: "Dubai Desert",
            description:
              "A desert safari offers thrilling experiences like dune bashing, camel riding, sandboarding, and traditional entertainment. It's a perfect way to experience Dubai's desert landscape.",
            image: "desert_safari.jpg",
          },
          {
            id: 5,
            name: "Palm Jumeirah",
            location: "Dubai",
            description:
              "Palm Jumeirah is a man-made island shaped like a palm tree, featuring luxury resorts, villas, and attractions like Atlantis The Palm. It's a symbol of Dubai's ambitious urban development.",
            image: "palm_jumeirah.jpg",
          },
          {
            id: 6,
            name: "Jumeirah Beach",
            location: "Dubai",
            description:
              "Jumeirah Beach is a pristine stretch of sandy shore with turquoise waters, offering relaxation, water sports, and views of Dubai's iconic skyline. It's a popular destination for tourists and locals alike.",
            image: "jumeirah_beach.jpg",
          },
        ],
      },
    },
    {
      name: "tourPlanMaldives",
      id: "3",
      content: {
        country: "Maldives",
        cover: ["maldives_two.jpg", "maldives_one.jpg", "maldives_three.jpg"],
        title_main: "Discover the Maldives",
        title_sub: "A Tropical Paradise Escape",
        summary:
          "The Maldives beckons with its pristine beaches, crystal-clear waters perfect for diving, and luxurious overwater bungalows, offering a tranquil escape amidst stunning natural beauty.",

        description:
          "Embark on a mesmerizing 4-day journey to the Maldives, where turquoise waters, white sandy beaches, and luxury resorts await. Experience unparalleled relaxation, underwater adventures, and breathtaking sunsets in this tropical paradise. From water villas to vibrant coral reefs, immerse yourself in the natural beauty and tranquility of the Maldives.",
        itenary: [
          {
            day: "Day 1 - Arrival in Maldives",
            description:
              "Arrive in Malé, the capital city of the Maldives, and transfer to your resort by speedboat or seaplane. Spend the day relaxing on the beach, exploring the resort's facilities, or indulging in a spa treatment. Enjoy a romantic dinner by the beach or on a private deck overlooking the ocean.",
            image: "maldives_beach.jpg",
          },
          {
            day: "Day 2 - Water Activities and Island Exploration",
            description:
              "Start your day with snorkeling or diving in the crystal-clear waters of the Maldives. Explore vibrant coral reefs teeming with marine life, including colorful fish, turtles, and rays. In the afternoon, visit a local island to experience Maldivian culture, visit traditional shops, and interact with friendly locals.",
            image: "maldives_snorkeling.jpg",
          },
          {
            day: "Day 3 - Relaxation and Sunset Cruise",
            description:
              "Relax and unwind with a day of leisure at your resort. Lounge by the infinity pool, indulge in a spa session, or take a yoga class on the beach. In the evening, embark on a sunset cruise aboard a traditional dhoni (sailing boat). Enjoy panoramic views of the Indian Ocean and spot dolphins playing in the waves.",
            image: "maldives_sunset_cruise.jpg",
          },
          {
            day: "Day 4 - Departure from Paradise",
            description:
              "Savor your last moments in the Maldives with a leisurely breakfast overlooking the ocean. Depending on your departure time, you may have the opportunity for one last swim in the turquoise waters or a shopping excursion for local handicrafts and souvenirs. Bid farewell to this tropical paradise and transfer to Malé International Airport for your onward journey.",
            image: "maldives_souvenir.jpg",
          },
        ],
        destinations: [
          {
            id: 1,
            name: "Malé",
            location: "Maldives",
            description:
              "Malé, the capital city of the Maldives, is known for its bustling markets, colorful mosques, and vibrant harbor. Explore local landmarks such as the Old Friday Mosque (Hukuru Miskiy) and Sultan Park. Discover Maldivian culture and history in this lively city.",
            image: "maldives_beach.jpg",
          },
          {
            id: 2,
            name: "Coral Reefs",
            location: "Maldives",
            description:
              "The Maldives is renowned for its pristine coral reefs, home to a diverse array of marine life. Enjoy snorkeling or diving adventures to witness colorful coral formations, tropical fish, sea turtles, and rays in their natural habitat.",
            image: "maldives_snorkeling.jpg",
          },
          {
            id: 3,
            name: "Luxury Resorts",
            location: "Maldives",
            description:
              "Luxury resorts in the Maldives offer overwater villas, private pools, gourmet dining, and rejuvenating spa treatments. Experience unparalleled luxury and relaxation amidst stunning natural surroundings.",
            image: "maldives_sunset_cruise.jpg",
          },
          {
            id: 4,
            name: "Sunset Views",
            location: "Maldives",
            description:
              "The Maldives is famous for its breathtaking sunsets over the Indian Ocean. Enjoy romantic sunset views from your resort's beach, a sunset cruise aboard a traditional dhoni, or a private dinner under the stars.",
            image: "maldives_souvenir.jpg",
          },
        ],
      },
    },
    {
      name: "tourPlanSriLanka",
      country: "Sri Lanka",
      id: "4",
      content: {
        cover: ["srilanka_one.jpg", "srilanka_two.jpg", "srilanka_three.jpg"],
        title_main: "Explore Sri Lanka",
        title_sub: "An Enchanting Journey through Serene Landscapes",
        summary:
          "Sri Lanka entices with its diverse landscapes from lush tea plantations to ancient temples, rich cultural heritage, and warm hospitality, making it a captivating destination.",
        description:
          "Embark on a captivating 6-day journey through Sri Lanka, a land of ancient temples, lush tea plantations, and pristine beaches. From UNESCO World Heritage sites to scenic train rides and wildlife safaris, discover the rich cultural heritage and natural beauty of this island paradise. Experience warm hospitality, authentic cuisine, and diverse landscapes that make Sri Lanka a must-visit destination.",
        itenary: [
          {
            day: "Day 1 - Arrival in Colombo",
            description:
              "Arrive at Bandaranaike International Airport in Colombo and transfer to your hotel. Explore the bustling streets of Colombo, visit historical landmarks such as Independence Square and Gangaramaya Temple, and enjoy a sunset stroll along Galle Face Green.",
            image: "srilanka_colombo.jpg",
          },
          {
            day: "Day 2 - Kandy",
            description:
              "Travel to Kandy, a UNESCO World Heritage site nestled amidst misty hills. Visit the Temple of the Tooth Relic, explore the Peradeniya Botanical Gardens, and witness a cultural dance performance showcasing traditional Sri Lankan music and dance forms.",
            image: "srilanka_temple.jpg",
          },
          {
            day: "Day 3 - Nuwara Eliya",
            description:
              "Take a scenic train journey to Nuwara Eliya, known as 'Little England' for its cool climate and tea plantations. Visit a tea estate to learn about the process of tea production and enjoy panoramic views of lush greenery.",
            image: "srilanka_two.jpg",
          },
          {
            day: "Day 4 - Sigiriya and Polonnaruwa",
            description:
              "Explore Sigiriya Rock Fortress, a UNESCO World Heritage site known for its ancient rock fortress and frescoes. Continue to Polonnaruwa to visit the ruins of ancient temples and palaces, showcasing Sri Lanka's medieval capital.",
            image: "srilanka_three.jpg",
          },
          {
            day: "Day 5 - Yala National Park",
            description:
              "Embark on a safari adventure in Yala National Park, renowned for its diverse wildlife including leopards, elephants, and birds. Explore the park's natural habitats, water reservoirs, and serene landscapes.",
            image: "srilanka_yala.jpg",
          },
          {
            day: "Day 6 - Galle and Departure",
            description:
              "Visit Galle, a coastal city famous for its Dutch Fort, a UNESCO World Heritage site. Explore the narrow streets lined with colonial buildings, art galleries, and boutique shops. Relax on the pristine beaches before departing from Bandaranaike International Airport.",
            image: "srilanka_galle.jpg",
          },
        ],
        destinations: [
          {
            id: 1,
            name: "Colombo",
            location: "Sri Lanka",
            description:
              "Colombo, the capital city of Sri Lanka, is a vibrant metropolis with a blend of modernity and colonial charm. Explore historical sites, bustling markets, and waterfront promenades showcasing the city's diverse culture.",
            image: "srilanka_colombo.jpg",
          },
          {
            id: 2,
            name: "Kandy",
            location: "Sri Lanka",
            description:
              "Kandy is a cultural capital and home to the Temple of the Tooth Relic, which houses a sacred tooth relic of the Buddha. Explore botanical gardens, traditional markets, and enjoy cultural performances.",
            image: "srilanka_temple.jpg",
          },
          {
            id: 3,
            name: "Nuwara Eliya",
            location: "Sri Lanka",
            description:
              "Nuwara Eliya, known as 'Little England', offers scenic landscapes of tea plantations, waterfalls, and colonial architecture. Experience tea factory tours, golf courses, and cool climate attractions.",
            image: "srilanka_two.jpg",
          },
          {
            id: 4,
            name: "Sigiriya",
            location: "Sri Lanka",
            description:
              "Sigiriya Rock Fortress is an ancient rock fortress and palace ruins perched atop a massive rock column. Admire frescoes, gardens, and panoramic views from the summit, showcasing Sri Lanka's ancient architectural prowess.",
            image: "srilanka_three.jpg",
          },
          {
            id: 5,
            name: "Yala National Park",
            location: "Sri Lanka",
            description:
              "Yala National Park is renowned for its leopard population and diverse wildlife. Enjoy safaris through dry forests, grasslands, and lagoons, spotting elephants, crocodiles, and endemic bird species.",
            image: "srilanka_yala.jpg",
          },
          {
            id: 6,
            name: "Galle",
            location: "Sri Lanka",
            description:
              "Galle is a coastal city with a well-preserved Dutch Fort, showcasing colonial architecture, art galleries, and boutique shops. Explore its narrow streets, sandy beaches, and historic lighthouse.",
            image: "srilanka_galle.jpg",
          },
        ],
      },
    },
    {
      name: "Vietnam Tour",
      id: "5",
      content: {
        country: "Vietnam",
        cover: [
          "vietnam_hanoi.jpg",
          "vietnam_halong.jpg",
          "vietnam_golden_bridge.jpg",
        ],
        title_main: "Vietnam",
        title_sub: "Explore Vietnam's Timeless Beauty",
        description:
          "This 7-day journey follows a seamless route from the cultural heart of Hanoi to the limestone wonders of Ha Long Bay, down through Vietnam’s imperial city of Hue, the charming lantern-lit town of Hoi An, and ending high above the clouds at Da Nang’s Golden Bridge. The trip blends nature, history, and culture without unnecessary backtracking.",
        summary:
          "A perfectly paced week-long adventure from north to central Vietnam—historic capitals, emerald bays, ancient towns, and mountain marvels await.",
        destinations: [
          {
            id: 1,
            name: "Hanoi",
            location: "Northern Vietnam",
            description:
              "The bustling capital of Vietnam where ancient pagodas, French colonial architecture, and vibrant street life create a dynamic cultural mix. Highlights include the Old Quarter, Hoan Kiem Lake, and the Temple of Literature.",
            image: "hanoi.jpg",
          },
          {
            id: 2,
            name: "Ninh Binh",
            location: "Northern Vietnam",
            description:
              "Known as ‘Ha Long Bay on Land,’ Ninh Binh is home to limestone karsts, rice paddies, and winding rivers. Visitors can enjoy peaceful boat rides and explore historic pagodas.",
            image: "ninh_binh.jpg",
          },
          {
            id: 3,
            name: "Ha Long Bay",
            location: "Quang Ninh Province",
            description:
              "A UNESCO World Heritage Site famous for emerald waters and towering limestone formations. A cruise offers breathtaking scenery, caves, and optional kayaking.",
            image: "halong_bay.jpg",
          },
          {
            id: 4,
            name: "Hue",
            location: "Central Vietnam",
            description:
              "The former imperial capital of Vietnam, known for its ancient citadel, royal tombs, and Perfume River cruises.",
            image: "hue.jpg",
          },
          {
            id: 5,
            name: "Hoi An",
            location: "Central Vietnam",
            description:
              "A UNESCO World Heritage ancient town with lantern-lit streets, riverside cafes, and a blend of Japanese, Chinese, and French architecture.",
            image: "hoi_an.jpg",
          },
          {
            id: 6,
            name: "Golden Bridge (Ba Na Hills)",
            location: "Da Nang",
            description:
              "A breathtaking pedestrian bridge held by giant stone hands, offering panoramic views of the surrounding mountains.",
            image: "golden_bridge.jpg",
          },
        ],
        itenary: [
          {
            day: "Day 1 - Arrival in Hanoi",
            description:
              "Arrive in Hanoi. Stroll through the Old Quarter, visit Hoan Kiem Lake, and enjoy a traditional water puppet show. Overnight in Hanoi.",
            image: "hanoi.jpg",
          },
          {
            day: "Day 2 - Hanoi City Tour",
            description:
              "Explore Ho Chi Minh Mausoleum, One Pillar Pagoda, Temple of Literature, and the Ethnology Museum. Evening street food tour. Overnight in Hanoi.",
            image: "hanoi_city.jpg",
          },
          {
            day: "Day 3 - Ninh Binh Excursion",
            description:
              "Travel to Ninh Binh for a scenic sampan boat ride in Trang An or Tam Coc, passing through limestone caves and rice paddies. Visit Bai Dinh Pagoda. Return to Hanoi. Overnight in Hanoi.",
            image: "ninh_binh.jpg",
          },
          {
            day: "Day 4 - Ha Long Bay Cruise",
            description:
              "Depart for Ha Long Bay and board a cruise. Visit limestone caves, kayak in calm waters, and watch the sunset over the bay. Overnight on the cruise.",
            image: "halong_bay.jpg",
          },
          {
            day: "Day 5 - Ha Long Bay to Hue",
            description:
              "Enjoy sunrise on the bay before returning to port. Transfer to Hanoi for a flight to Hue. Explore the Imperial Citadel and Perfume River. Overnight in Hue.",
            image: "hue.jpg",
          },
          {
            day: "Day 6 - Hue to Hoi An",
            description:
              "Visit the Royal Tombs and Thien Mu Pagoda. Drive along the scenic Hai Van Pass to Hoi An. Enjoy an evening walking tour with lantern-lit streets. Overnight in Hoi An.",
            image: "hoi_an.jpg",
          },
          {
            day: "Day 7 - Da Nang & Golden Bridge",
            description:
              "Head to Ba Na Hills to walk along the Golden Bridge and explore gardens. Enjoy mountain views before your departure from Da Nang.",
            image: "golden_bridge.jpg",
          },
        ],
      },
    },

    {
      name: "Japan Tour",
      id: "6",
      content: {
        country: "Japan",
        cover: ["japan_kyoto.jpg", "japan_tokyo.jpg", "japan_mt_fuji.jpg"],
        title_main: "Japan Tour",
        title_sub: "A Journey Through Japan's Timeless Traditions",
        description:
          "This 7–10 day adventure reveals the soul of Japan—from the historic temples of Kyoto and the culinary wonders of Osaka, to the ancient shrines of Nara, the scenic beauty of Mount Fuji, and the vibrant heartbeat of Tokyo. With a carefully planned west-to-east route, the journey blends tradition, modernity, and natural beauty without backtracking, offering flexibility for travelers to linger longer in their favorite spots.",
        summary:
          "A seamless journey through Japan’s cultural heartlands and modern marvels. Wander through centuries-old temples, savor street food in bustling markets, cruise beside Mount Fuji, and explore Japan’s neon-lit capital—all at your own pace.",
        destinations: [
          {
            id: 1,
            name: "Kyoto",
            location: "Kansai Region",
            description:
              "Japan’s cultural capital, home to over 1,000 temples, tea houses, and gardens. Visit the iconic Fushimi Inari Shrine, the golden splendor of Kinkaku-ji, and the tranquil bamboo groves of Arashiyama.",
            image: "kyoto.jpg",
          },
          {
            id: 2,
            name: "Nara",
            location: "Kansai Region",
            description:
              "Just an hour from Kyoto, Nara is famous for its friendly free-roaming deer and the Great Buddha at Todai-ji Temple. Stroll through Nara Park and enjoy the peaceful atmosphere.",
            image: "nara.jpg",
          },
          {
            id: 3,
            name: "Osaka",
            location: "Kansai Region",
            description:
              "Known as Japan’s kitchen, Osaka offers vibrant nightlife, historic Osaka Castle, and endless street food in Dotonbori. Try takoyaki and okonomiyaki while soaking up the lively atmosphere.",
            image: "osaka.jpg",
          },
          {
            id: 4,
            name: "Hakone & Mount Fuji",
            location: "Kanagawa Prefecture",
            description:
              "A gateway to Mount Fuji, Hakone is known for hot springs, lake cruises, and stunning Fuji views. Visit the Hakone Shrine and enjoy an onsen experience.",
            image: "japan_mt_fuji.jpg",
          },
          {
            id: 5,
            name: "Tokyo",
            location: "Kanto Region",
            description:
              "Japan’s bustling capital where ancient shrines meet futuristic skyscrapers. Explore Asakusa’s Senso-ji Temple, Shibuya Crossing, the Meiji Shrine, and the Imperial Palace gardens.",
            image: "tokyo.jpg",
          },
          {
            id: 6,
            name: "Kamakura",
            location: "Kanto Region",
            description:
              "A historic seaside town south of Tokyo, famous for the Great Buddha, serene Zen temples, and scenic hiking trails.",
            image: "Kamakura.jpg",
          },
          {
            id: 7,
            name: "Nikko",
            location: "Tochigi Prefecture",
            description:
              "A UNESCO World Heritage site north of Tokyo, known for ornate shrines like Toshogu, waterfalls, and mountain scenery.",
            image: "nikko.jpg",
          },
        ],
        itenary: [
          {
            day: "Day 1 - Kyoto Arrival",
            description:
              "Arrive in Kyoto and visit Fushimi Inari Shrine’s thousands of torii gates, the Golden Pavilion (Kinkaku-ji), and Gion district. Overnight in Kyoto.",
            image: "kyoto.jpg",
          },
          {
            day: "Day 2 - Kyoto Exploration",
            description:
              "Spend a full day visiting Arashiyama Bamboo Grove, Tenryu-ji Temple, and Kiyomizu-dera Temple. Enjoy a traditional tea ceremony. Overnight in Kyoto.",
            image: "kyoto_arashiyama.jpg",
          },
          {
            day: "Day 3 - Nara Day Trip",
            description:
              "Take a short trip to Nara to see Todai-ji’s Great Buddha, Kasuga Taisha Shrine, and Nara Park’s deer. Return to Kyoto for the night.",
            image: "nara.jpg",
          },
          {
            day: "Day 4 - Osaka",
            description:
              "Travel to Osaka. Visit Osaka Castle, Kuromon Ichiba Market, and enjoy the neon lights and street food of Dotonbori. Overnight in Osaka.",
            image: "osaka.jpg",
          },
          {
            day: "Day 5 - Hakone & Mount Fuji",
            description:
              "Take the bullet train to Hakone. Cruise on Lake Ashi with Mount Fuji views, ride the Hakone Ropeway, and relax in an onsen. Overnight in Hakone.",
            image: "hakone.jpg",
          },
          {
            day: "Day 6 - Tokyo Arrival",
            description:
              "Head to Tokyo. Visit Senso-ji Temple in Asakusa, walk through Ueno Park, and explore Akihabara or Ginza in the evening. Overnight in Tokyo.",
            image: "tokyo.jpg",
          },
          {
            day: "Day 7 - Tokyo & Kamakura",
            description:
              "Take a day trip to Kamakura to see the Great Buddha and Hase-dera Temple. Return to Tokyo for nightlife in Shibuya or Shinjuku.",
            image: "kamakura.jpg",
          },
          {
            day: "Day 8 - Tokyo Highlights",
            description:
              "Visit Meiji Shrine, Harajuku’s Takeshita Street, and Shibuya Crossing. Afternoon free for shopping or museum visits. Overnight in Tokyo.",
            image: "tokyo_shibuya.jpg",
          },
          {
            day: "Day 9 - Nikko Day Trip",
            description:
              "Travel to Nikko to explore the ornate Toshogu Shrine, Kegon Falls, and scenic Lake Chuzenji. Return to Tokyo for the night.",
            image: "nikko.jpg",
          },
          {
            day: "Day 10 - Departure",
            description:
              "Enjoy last-minute shopping or sightseeing in Tokyo before departing from Narita or Haneda Airport.",
            image: "tokyo_departure.jpg",
          },
        ],
      },
    },

    {
      name: "China Tour",
      id: "7",
      content: {
        country: "China",
        cover: ["china_beijing.jpg", "china_xian.jpg", "china_greatwall.jpg"],
        title_main: "China Tour",
        title_sub: "Unveil the Mysteries of Ancient China",
        description:
          "This 7–10 day cultural journey traces the story of China from its imperial capitals to its rural beauty and modern skylines. Walk the Great Wall in Beijing, stand face-to-face with the Terracotta Warriors in Xi’an, visit panda sanctuaries in Chengdu, cruise the Li River in Guilin, and end among the bright lights of Shanghai. Designed for smooth travel from north to south, the route blends history, nature, and city life seamlessly.",
        summary:
          "A sweeping voyage across China—imperial palaces, ancient armies, river landscapes, and futuristic cities—capturing the nation’s spirit in one unforgettable journey.",
        destinations: [
          {
            id: 1,
            name: "Beijing",
            location: "Northern China",
            description:
              "The political and cultural heart of China, filled with imperial landmarks like the Forbidden City, Temple of Heaven, and Tiananmen Square.",
            image: "beijing.jpg",
          },
          {
            id: 2,
            name: "Great Wall of China",
            location: "Near Beijing",
            description:
              "An awe-inspiring wonder stretching over 13,000 miles. The Mutianyu and Jinshanling sections offer stunning scenery and fewer crowds.",
            image: "greatwall.jpg",
          },
          {
            id: 3,
            name: "Xi’an",
            location: "Shaanxi Province",
            description:
              "Ancient Silk Road capital and home to the Terracotta Warriors. Also famous for its city walls, Muslim Quarter, and historic pagodas.",
            image: "xian.jpg",
          },
          {
            id: 4,
            name: "Chengdu",
            location: "Sichuan Province",
            description:
              "The laid-back capital of Sichuan, known for spicy cuisine, teahouses, and the Chengdu Research Base of Giant Panda Breeding.",
            image: "chengdu.jpg",
          },
          {
            id: 5,
            name: "Guilin & Yangshuo",
            location: "Guangxi Province",
            description:
              "A landscape of limestone peaks, winding rivers, and lush countryside. The Li River cruise between Guilin and Yangshuo is one of China’s most scenic experiences.",
            image: "guilin.jpg",
          },
          {
            id: 6,
            name: "Shanghai",
            location: "Eastern China",
            description:
              "China’s modern metropolis where colonial Bund architecture meets futuristic skyscrapers like the Shanghai Tower.",
            image: "shanghai.jpg",
          },
          {
            id: 7,
            name: "Zhujiajiao Water Town",
            location: "Near Shanghai",
            description:
              "An ancient canal town with stone bridges, narrow alleys, and traditional teahouses, offering a glimpse into old Jiangnan life.",
            image: "zhujiajiao.jpg",
          },
        ],
        itenary: [
          {
            day: "Day 1 - Beijing Arrival",
            description:
              "Arrive in Beijing. Visit Tiananmen Square, the Forbidden City, and the Temple of Heaven. Overnight in Beijing.",
            image: "beijing.jpg",
          },
          {
            day: "Day 2 - Great Wall & Summer Palace",
            description:
              "Morning trip to the Great Wall (Mutianyu section) with panoramic views. Afternoon visit to the Summer Palace. Overnight in Beijing.",
            image: "greatwall.jpg",
          },
          {
            day: "Day 3 - Beijing to Xi’an",
            description:
              "Fly or take a high-speed train to Xi’an. Explore the Ancient City Wall and Muslim Quarter. Overnight in Xi’an.",
            image: "xian.jpg",
          },
          {
            day: "Day 4 - Terracotta Warriors",
            description:
              "Visit the Terracotta Army Museum and Big Wild Goose Pagoda. Enjoy a dumpling banquet in the evening. Overnight in Xi’an.",
            image: "terracotta.jpg",
          },
          {
            day: "Day 5 - Xi’an to Chengdu",
            description:
              "Travel to Chengdu by high-speed train. Visit People’s Park, a traditional teahouse, and enjoy Sichuan hotpot. Overnight in Chengdu.",
            image: "chengdu.jpg",
          },
          {
            day: "Day 6 - Chengdu Pandas & Guilin",
            description:
              "Morning visit to the Chengdu Research Base of Giant Panda Breeding. Afternoon flight to Guilin. Overnight in Guilin.",
            image: "pandas.jpg",
          },
          {
            day: "Day 7 - Li River Cruise to Yangshuo",
            description:
              "Cruise the Li River through stunning karst landscapes to Yangshuo. Explore West Street and countryside by bike. Overnight in Yangshuo.",
            image: "guilin.jpg",
          },
          {
            day: "Day 8 - Guilin to Shanghai",
            description:
              "Return to Guilin and fly to Shanghai. Evening walk along the Bund. Overnight in Shanghai.",
            image: "shanghai.jpg",
          },
          {
            day: "Day 9 - Shanghai & Zhujiajiao",
            description:
              "Morning visit to Zhujiajiao Water Town. Afternoon explore Yuyuan Garden, Nanjing Road, and Pudong skyline. Overnight in Shanghai.",
            image: "zhujiajiao.jpg",
          },
          {
            day: "Day 10 - Departure",
            description:
              "Enjoy free time in Shanghai before departing from Pudong or Hongqiao Airport.",
            image: "shanghai_departure.jpg",
          },
        ],
      },
    },
  ],
  europe: [
    {
      name: "tourPlanFrance",
      id: "0",
      content: {
        country: "France",
        cover: ["france_three.jpg", "france_two.jpg", "france_one.jpg"],
        title_main: "Discover France",
        title_sub: "An Exquisite Journey through Cultural Treasures",
        summary:
          "France beckons with its rich history, iconic landmarks, artistic heritage, and gourmet delights, offering a captivating experience for travelers.",
        description:
          "Embark on an enchanting 7-day journey through France, a country renowned for its art, architecture, gastronomy, and picturesque landscapes. From the romantic streets of Paris to the sun-kissed vineyards of Provence and the historic châteaux of Loire Valley, explore the diverse cultural and natural wonders that make France a timeless destination. Indulge in gourmet cuisine, visit world-class museums, and immerse yourself in the charm and elegance of this beloved country.",
        itenary: [
          {
            day: "Day 1 - Arrival in Paris",
            description:
              "Arrive at Charles de Gaulle Airport in Paris and transfer to your hotel. Explore the iconic landmarks of Paris such as the Eiffel Tower, Louvre Museum, and Notre-Dame Cathedral. Take a leisurely cruise along the Seine River to admire the city's architectural splendor.",
            image: "france_paris.jpg",
          },
          {
            day: "Day 2 - Versailles",
            description:
              "Travel to the Palace of Versailles, a UNESCO World Heritage site known for its opulent architecture and beautiful gardens. Explore the Hall of Mirrors, the Grand Trianon, and the Marie-Antoinette Estate, experiencing the grandeur of French royalty.",
            image: "france_versailles.jpg",
          },
          {
            day: "Day 3 - Lyon",
            description:
              "Take a train to Lyon, a UNESCO City of Gastronomy. Discover its historic old town, Roman amphitheaters, and Renaissance architecture. Enjoy a culinary tour to savor Lyonnaise cuisine and visit local markets and bouchons (traditional eateries).",
            image: "france_lyon.jpg",
          },
          {
            day: "Day 4 - Provence",
            description:
              "Travel to Provence, famous for its lavender fields, vineyards, and charming villages. Visit Avignon, known for the Palais des Papes and Pont Saint-Bénézet. Explore the Luberon region, Gordes village, and enjoy wine tasting at local vineyards.",
            image: "france_provence.jpg",
          },
          {
            day: "Day 5 - Bordeaux",
            description:
              "Journey to Bordeaux, a UNESCO World Heritage site renowned for its wine production. Explore the city's neoclassical architecture, the Place de la Bourse, and the Bordeaux Wine Museum. Enjoy wine tasting tours in nearby vineyards.",
            image: "france_bordeaux.jpg",
          },
          {
            day: "Day 6 - Loire Valley",
            description:
              "Visit the Loire Valley, known for its picturesque landscapes and Renaissance châteaux. Explore Château de Chambord, Château de Chenonceau, and other historic castles surrounded by lush gardens and scenic vineyards.",
            image: "france_loire.jpg",
          },
          {
            day: "Day 7 - Departure from Paris",
            description:
              "Return to Paris for departure. Spend your final day exploring Montmartre, the Latin Quarter, or shopping along the Champs-Élysées. Depart from Charles de Gaulle Airport, bidding farewell to the enchanting beauty of France.",
            image: "france_paris.jpg",
          },
        ],
        destinations: [
          {
            id: 1,
            name: "Paris",
            location: "France",
            description:
              "Paris, the capital city known as the 'City of Light', is celebrated for its art, fashion, gastronomy, and iconic landmarks like the Eiffel Tower and Louvre Museum.",
            image: "france_paris.jpg",
          },
          {
            id: 2,
            name: "Versailles",
            location: "France",
            description:
              "Versailles is renowned for the Palace of Versailles, a symbol of absolute monarchy with opulent rooms, expansive gardens, and the Hall of Mirrors.",
            image: "france_versailles.jpg",
          },
          {
            id: 3,
            name: "Lyon",
            location: "France",
            description:
              "Lyon, a UNESCO City of Gastronomy, offers a blend of Roman architecture, Renaissance art, and culinary delights, showcasing its rich cultural heritage.",
            image: "france_lyon.jpg",
          },
          {
            id: 4,
            name: "Provence",
            location: "France",
            description:
              "Provence is famed for its scenic landscapes, medieval villages, lavender fields, and vineyards producing world-class wines such as Côtes du Rhône and Châteauneuf-du-Pape.",
            image: "france_provence.jpg",
          },
          {
            id: 5,
            name: "Bordeaux",
            location: "France",
            description:
              "Bordeaux, a UNESCO World Heritage site, is synonymous with fine wine and boasts elegant 18th-century architecture along the Garonne River.",
            image: "france_bordeaux.jpg",
          },
          {
            id: 6,
            name: "Loire Valley",
            location: "France",
            description:
              "The Loire Valley is famous for its fairy-tale châteaux, picturesque vineyards, and gardens, offering a glimpse into France's Renaissance and royal history.",
            image: "france_loire.jpg",
          },
        ],
      },
    },
    {
      name: "tourPlanGermany",

      id: "1",
      content: {
        country: "Germany",
        cover: ["germany_one.jpg", "germany_three.jpg", "germany_two.jpg"],
        title_main: "Discover Germany",
        title_sub: "A Journey through Historic Cities and Scenic Landscapes",
        summary:
          "Germany beckons with its blend of rich history, cultural diversity, and picturesque landscapes, offering visitors a memorable journey through vibrant cities and charming countryside.",
        description:
          "Embark on a captivating 7-day journey through Germany, exploring its historic cities, stunning landscapes, and cultural treasures. From iconic landmarks and medieval towns to scenic river cruises and enchanting castles, discover the allure of this fascinating country. Experience warm hospitality, authentic cuisine, and diverse landscapes that make Germany a must-visit destination.",
        itenary: [
          {
            day: "Day 1 - Arrival in Berlin",
            description:
              "Arrive in Berlin, the capital city known for its vibrant culture and historical significance. Explore iconic landmarks such as Brandenburg Gate, Berlin Wall Memorial, and Museum Island.",
            image: "germany_berlin.jpg",
          },
          {
            day: "Day 2 - Dresden",
            description:
              "Travel to Dresden, known as the 'Florence on the Elbe'. Discover its baroque architecture, visit Zwinger Palace, Dresden Frauenkirche, and enjoy a leisurely walk along the Elbe River.",
            image: "germany_dresden.jpg",
          },
          {
            day: "Day 3 - Munich",
            description:
              "Head to Munich, Bavaria's capital. Explore Marienplatz, Neuschwanstein Castle, and enjoy traditional Bavarian cuisine at a local beer garden. Visit BMW Museum for a glimpse into German engineering excellence.",
            image: "germany_munich.jpg",
          },
          {
            day: "Day 4 - Romantic Road",
            description:
              "Drive along the Romantic Road, passing picturesque villages like Rothenburg ob der Tauber. Explore medieval architecture, enjoy wine tasting in Würzburg, and marvel at Harburg Castle.",
            image: "germany_romantic.jpg",
          },
          {
            day: "Day 5 - Heidelberg",
            description:
              "Visit Heidelberg, known for its romantic castle overlooking the Neckar River. Explore the Old Town, Heidelberg Castle, and hike the Philosophers' Path for panoramic views.",
            image: "germany_heidelberg.jpg",
          },
          {
            day: "Day 6 - Rhine Valley",
            description:
              "Cruise along the Rhine River Valley, a UNESCO World Heritage site. Admire vineyard-covered hills, medieval castles like Marksburg, and charming towns such as Rüdesheim.",
            image: "germany_rhine.jpg",
          },
          {
            day: "Day 7 - Departure from Frankfurt",
            description:
              "Explore Frankfurt, Germany's financial hub. Visit Römerberg Square, St. Bartholomew's Cathedral, and enjoy a river cruise on the Main River before departing from Frankfurt Airport.",
            image: "germany_frankfurt.jpg",
          },
        ],
        destinations: [
          {
            id: 1,
            name: "Berlin",
            location: "Germany",
            description:
              "Berlin, Germany's capital, boasts a mix of history, art, and culture. Explore iconic landmarks, world-class museums, and vibrant nightlife.",
            image: "germany_berlin.jpg",
          },
          {
            id: 2,
            name: "Munich",
            location: "Germany",
            description:
              "Munich, Bavaria's capital, offers a blend of history and modernity. Visit Marienplatz, Neuschwanstein Castle, and enjoy Bavarian cuisine and beer gardens.",
            image: "germany_munich.jpg",
          },
          {
            id: 3,
            name: "Rhine Valley",
            location: "Germany",
            description:
              "The Rhine River Valley is famous for its scenic beauty, medieval castles, and vineyard-covered hills. Explore charming towns like Rüdesheim and cruise along the Rhine River.",
            image: "germany_rhine.jpg",
          },
          {
            id: 4,
            name: "Rothenburg ob der Tauber",
            location: "Germany",
            description:
              "Rothenburg ob der Tauber is a well-preserved medieval town along the Romantic Road. Explore its half-timbered houses, city walls, and Christmas markets.",
            image: "germany_romantic.jpg",
          },
          {
            id: 5,
            name: "Heidelberg",
            location: "Germany",
            description:
              "Heidelberg is known for its romantic setting, with a hilltop castle overlooking the Neckar River. Explore its Old Town, castle ruins, and scenic viewpoints.",
            image: "germany_heidelberg.jpg",
          },
          {
            id: 6,
            name: "Frankfurt",
            location: "Germany",
            description:
              "Frankfurt is Germany's financial hub, offering a mix of modern skyscrapers and historic attractions. Visit Römerberg Square, St. Bartholomew's Cathedral, and enjoy a river cruise.",
            image: "germany_frankfurt.jpg",
          },
        ],
      },
    },
    {
      name: "tourPlanGreece",

      id: "2",
      content: {
        country: "Greece",
        cover: ["greece_three.jpg", "greece_two.jpg", "greece_one.jpg"],
        title_main: "Discover Greece",
        title_sub: "A Journey through Ancient History and Mediterranean Beauty",
        summary:
          "Greece enchants with its ancient ruins, sun-kissed islands, and Mediterranean landscapes, offering travelers a blend of history, culture, and natural beauty.",
        description:
          "Embark on an unforgettable 8-day journey through Greece, discovering its ancient wonders, picturesque islands, and vibrant cities. From iconic landmarks and archaeological sites to crystal-clear waters and traditional tavernas, experience the magic of Greece. Indulge in delicious cuisine, relax on sandy beaches, and explore the rich cultural heritage that has shaped Western civilization.",
        itenary: [
          {
            day: "Day 1 - Arrival in Athens",
            description:
              "Arrive in Athens, the cradle of Western civilization. Explore the Acropolis, Parthenon, and Ancient Agora. Wander through Plaka's charming streets and enjoy panoramic views from Lycabettus Hill.",
            image: "greece_athens.jpg",
          },
          {
            day: "Day 2 - Delphi",
            description:
              "Travel to Delphi, home to the ancient Oracle and sanctuary of Apollo. Explore the archaeological site, Delphi Museum, and enjoy scenic views of Mount Parnassus.",
            image: "greece_delphi.jpg",
          },
          {
            day: "Day 3 - Santorini",
            description:
              "Fly to Santorini, famous for its whitewashed buildings and stunning sunsets. Explore Oia's picturesque streets, visit Akrotiri's archaeological site, and relax on Red Beach.",
            image: "greece_santorini.jpg",
          },
          {
            day: "Day 4 - Mykonos",
            description:
              "Take a ferry to Mykonos, known for its vibrant nightlife and beautiful beaches. Explore Mykonos Town, visit Delos Island's archaeological ruins, and enjoy water sports at Paradise Beach.",
            image: "greece_mykonos.jpg",
          },
          {
            day: "Day 5 - Olympia",
            description:
              "Visit Olympia, the birthplace of the Olympic Games. Explore ancient ruins such as the Temple of Zeus and Olympia Stadium, and visit the Archaeological Museum.",
            image: "greece_olympia.jpg",
          },
          {
            day: "Day 6 - Thessaloniki",
            description:
              "Travel to Thessaloniki, Greece's second-largest city. Explore the White Tower, visit Byzantine churches like Hagia Sophia, and stroll along the waterfront promenade.",
            image: "greece_thessaloniki.jpg",
          },
          {
            day: "Day 7 - Meteora",
            description:
              "Explore Meteora, known for its monasteries perched atop towering rock formations. Visit Varlaam and Great Meteoron Monasteries, enjoy hiking trails, and capture breathtaking views.",
            image: "greece_meteora.jpg",
          },
          {
            day: "Day 8 - Departure from Athens",
            description:
              "Return to Athens for departure. Explore the National Archaeological Museum, stroll through National Gardens, and enjoy Greek cuisine at a traditional taverna before departing from Athens International Airport.",
            image: "greece_athens.jpg",
          },
        ],
        destinations: [
          {
            id: 1,
            name: "Athens",
            location: "Greece",
            description:
              "Athens is Greece's capital and a symbol of ancient civilization. Explore the Acropolis, Parthenon, and ancient Agora, and wander through Plaka's charming streets.",
            image: "greece_athens.jpg",
          },
          {
            id: 2,
            name: "Santorini",
            location: "Greece",
            description:
              "Santorini is famous for its whitewashed buildings, stunning sunsets, and volcanic beaches. Explore Oia's picturesque streets, visit Akrotiri's archaeological site, and relax on Red Beach.",
            image: "greece_santorini.jpg",
          },
          {
            id: 3,
            name: "Mykonos",
            location: "Greece",
            description:
              "Mykonos is known for its vibrant nightlife, beautiful beaches, and charming Cycladic architecture. Explore Mykonos Town, visit Delos Island's archaeological ruins, and enjoy water sports.",
            image: "greece_mykonos.jpg",
          },
          {
            id: 4,
            name: "Delphi",
            location: "Greece",
            description:
              "Delphi is famous for its ancient Oracle and sanctuary of Apollo. Explore the archaeological site, Delphi Museum, and enjoy breathtaking views of Mount Parnassus.",
            image: "greece_delphi.jpg",
          },
          {
            id: 5,
            name: "Meteora",
            location: "Greece",
            description:
              "Meteora is known for its monasteries perched atop towering rock formations. Visit Varlaam and Great Meteoron Monasteries, hike scenic trails, and enjoy panoramic views.",
            image: "greece_meteora.jpg",
          },
          {
            id: 6,
            name: "Olympia",
            location: "Greece",
            description:
              "Olympia is the birthplace of the Olympic Games. Explore ancient ruins such as the Temple of Zeus and Olympia Stadium, and visit the Archaeological Museum.",
            image: "greece_olympia.jpg",
          },
        ],
      },
    },
  ],
};
export default data;
