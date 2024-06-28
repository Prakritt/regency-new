const data = [
  {
    name: "Cultural Nepal Tour",
    id: "0",
    content: {
      country: "Nepal",
      cover: ["nepal_one.jpg", "nepal_two.jpg", "nepal_three.jpg"],
      title_main: "Cultural Tour In Nepal",
      title_sub: "Discover Nepal's Sacred Hindu Temples",
      description:
        "Explore Nepal's spiritual heritage on our Hindu tour. Visit 10 revered temples and sacred sites, from Pashupatinath in Kathmandu to Muktinath in Mustang. Experience ancient marvels like Janaki Mandir and serene spots like Budhanilkantha Temple. Trek to Gosaikunda Lake, discover hidden gems like Manakamana Temple, and witness vibrant rituals at Dakshinkali Temple. Marvel at Changu Narayan's intricate carvings and conclude in Dhangadhi at Tripura Sundari Temple.",
      summary:
        "Below are the remarkable destinations that contribute to our comprehensive Cultural Tour, each offering a unique glimpse into Nepal's rich spiritual and cultural heritage:",
      destinations: [
        {
          id: 1,
          name: "Pashupatinath Temple",
          location: "Kathmandu",
          description:
            "The Pashupatinath Temple, a UNESCO World Heritage Site, is one of the holiest Hindu temples dedicated to Lord Shiva. Situated on the banks of the Bagmati River, this sacred temple complex is a sprawling collection of temples, ashrams, and shrines. It is renowned for its stunning pagoda-style architecture and intricate wood carvings. Pashupatinath is not only a major religious site but also a place of cultural convergence where the traditional rituals and customs of the Hindu faith are observed with great fervor. The temple is especially vibrant during the Maha Shivaratri festival, attracting thousands of devotees and sadhus (holy men) from across Nepal and India.",
          image: "pashupatinath.jpg",
        },
        {
          id: 2,
          name: "Muktinath Temple",
          location: "Mustang",
          description:
            "Nestled in the majestic landscapes of the Mustang region, Muktinath Temple is a revered pilgrimage site for both Hindus and Buddhists. Dedicated to Lord Vishnu, this temple stands at an altitude of 3,710 meters, offering breathtaking views of the Himalayas. The temple complex includes 108 sacred water spouts and the eternal flame that miraculously burns on water, earth, and rock. Pilgrims believe that taking a holy dip in the water spouts can cleanse one’s sins and bring salvation. The journey to Muktinath is not just a spiritual quest but also an adventure through some of Nepal’s most spectacular and rugged terrains.",
          image: "muktinath.jpg",
        },
        {
          id: 3,
          name: "Janaki Mandir",
          location: "Janakpur",
          description:
            "The Janaki Mandir is a magnificent example of Hindu Rajput architecture, dedicated to Goddess Sita, the consort of Lord Rama. Located in the historic city of Janakpur, the temple is constructed entirely of marble and stone, and it features exquisite carvings and latticework. This three-storied structure is adorned with 60 rooms, each with intricate decoration and mythological murals. Janaki Mandir is a major pilgrimage site, especially during the festivals of Vivah Panchami and Ram Navami, which celebrate the divine marriage of Sita and Rama. Visitors to the temple can immerse themselves in the vibrant local culture and the legends of the Ramayana that are deeply woven into the fabric of Janakpur.",
          image: "janaki_mandir.jpg",
        },
        {
          id: 4,
          name: "Manakamana Temple",
          location: "Gorkha",
          description:
            "Situated just outside Kathmandu, Dakshinkali Temple is dedicated to the fierce and powerful Goddess Kali. This temple is known for its ritual animal sacrifices, which are offered to appease the goddess, especially during the Dashain festival. Set in a tranquil forested area, the temple provides a stark contrast between the serene natural surroundings and the intense religious activities. Devotees visit Dakshinkali to perform pujas and seek protection and blessings from the goddess. The temple’s vibrant and somewhat raw energy provides a unique insight into the traditional and unfiltered practices of Hindu worship.",
          image: "manakamana.jpg",
        },
        {
          id: 5,
          name: "Dakshinkali Temple",
          location: "Near Kathmandu",
          description:
            "Perched on a ridge in the Gorkha district, the Manakamana Temple is dedicated to Goddess Manakamana, believed to fulfill the wishes of her devotees. The temple is accessible via a scenic cable car ride that offers breathtaking views of the Trishuli River and the surrounding hills. The temple itself is a beautiful example of traditional Nepali architecture with its tiered pagoda structure. Pilgrims come here to offer sacrifices and seek blessings, believing that the goddess grants their heartfelt desires. The journey to Manakamana is both spiritually uplifting and visually spectacular, making it a cherished experience for all who visit.",
          image: "dakshinkali.jpg",
        },
        {
          id: 6,
          name: "Budhanilkantha Temple",
          location: "Kathmandu",
          description:
            "The Budhanilkantha Temple, located at the base of the Shivapuri Hill, is famous for its large reclining statue of Lord Vishnu, which is considered the largest stone carving in Nepal. This awe-inspiring statue, measuring about 5 meters in length, depicts Vishnu lying on a bed of coiled serpents in the cosmic ocean. The temple is a serene and meditative place where devotees come to offer prayers and observe the statue’s serene expression. The annual festival of Haribodhini Ekadashi sees thousands of pilgrims visiting the temple, making it a significant event in the local religious calendar.",
          image: "budhanilkantha.jpg",
        },
        {
          id: 7,
          name: "Gosaikunda Lake",
          location: "Langtang National Park",
          description:
            "Gosaikunda Lake, situated at an altitude of 4,380 meters in Langtang National Park, is a sacred alpine lake revered by both Hindus and Buddhists. According to legend, the lake was created by Lord Shiva when he struck the ground with his trident to obtain water to cool his burning throat after consuming poison. The lake is a major pilgrimage site, especially during the Janai Purnima festival, when thousands of devotees make the arduous trek to bathe in its holy waters. The trek to Gosaikunda offers not only spiritual fulfillment but also stunning views of the Himalayas, lush forests, and diverse wildlife.",
          image: "gosaikunda.jpg",
        },
        {
          id: 8,
          name: "Barahi Temple",
          location: "Pokhara",
          description:
            "The Barahi Temple, located on an island in the middle of Phewa Lake in Pokhara, is dedicated to Goddess Barahi, an incarnation of Goddess Durga. Accessible by boat, this two-story pagoda-style temple is a peaceful sanctuary amidst the bustling tourist town. Visitors can enjoy the serene boat ride across the lake, with the Annapurna Range providing a majestic backdrop. The temple is a popular site for both pilgrims and tourists, offering a tranquil setting for worship and reflection.",
          image: "barahi.jpg",
        },
        {
          id: 9,
          name: "Changu Narayan Temple",
          location: "Bhaktapur",
          description:
            "Changu Narayan Temple, situated on a hilltop in Bhaktapur, is one of the oldest Hindu temples in Nepal, dedicated to Lord Vishnu. The temple is renowned for its exquisite stone and wood carvings, intricate sculptures, and ancient inscriptions that date back to the 5th century. This UNESCO World Heritage Site offers a glimpse into the rich artistic and cultural heritage of the Kathmandu Valley. The temple complex also includes a museum showcasing traditional artifacts and relics. Visiting Changu Narayan provides a deep appreciation of Nepal’s historical and architectural legacy.",
          image: "changunarayan.jpg",
        },
        {
          id: 10,
          name: "Dhangadhi Tripura Sundari Temple",
          location: "Dhangadhi",
          description:
            "The Tripura Sundari Temple in Dhangadhi is a major site of worship dedicated to Goddess Tripura Sundari, a manifestation of Shakti. This temple is an important spiritual center for the local community and attracts pilgrims from various regions. The temple is known for its vibrant festivals and religious ceremonies, which are celebrated with great enthusiasm and devotion. Visitors to the temple can experience the local traditions and cultural practices that are integral to the worship of the goddess, making it a spiritually enriching and culturally immersive experience.",
          image: "dhangadhi.jpg",
        },
      ],
      itenary: [
        {
          day: "Day 1 - Kathmandu",
          description:
            "Arrive in Kathmandu, the capital of Nepal. Visit the Pashupatinath Temple, a UNESCO World Heritage Site, renowned for its stunning pagoda-style architecture and intricate wood carvings. The temple is a major religious site for Hindus, where traditional rituals and customs are observed with great fervor. Explore the temple complex and witness the vibrant atmosphere during the evening aarti (prayer ceremony). Overnight stay in Kathmandu.",
          image: "pashupatinath.jpg",
        },
        {
          day: "Day 2 - Mustang",
          description:
            "Travel to the Mustang region to visit the Muktinath Temple, a revered pilgrimage site for both Hindus and Buddhists. Situated at an altitude of 3,710 meters, the temple offers breathtaking views of the Himalayas. Explore the temple complex, which includes 108 sacred water spouts and the eternal flame. Experience the spiritual ambiance and the serene beauty of the surrounding landscapes. Overnight stay in Mustang.",
          image: "muktinath.jpg",
        },
        {
          day: "Day 3 - Janakpur",
          description:
            "Journey to Janakpur and visit the Janaki Mandir, a magnificent temple dedicated to Goddess Sita. The temple, constructed entirely of marble and stone, features exquisite carvings and latticework. Immerse yourself in the vibrant local culture and explore the mythological murals that adorn the temple. Learn about the legends of the Ramayana deeply woven into the fabric of Janakpur. Overnight stay in Janakpur.",
          image: "janaki_mandir.jpg",
        },
        {
          day: "Day 4 - Gorkha",
          description:
            "Travel to Gorkha to visit the Manakamana Temple, dedicated to Goddess Manakamana, believed to fulfill the wishes of her devotees. Enjoy a scenic cable car ride to the temple, offering breathtaking views of the Trishuli River and the surrounding hills. Explore the traditional Nepali architecture of the temple and participate in the rituals performed by the devotees. Overnight stay in Gorkha.",
          image: "manakamana.jpg",
        },
        {
          day: "Day 5 - Near Kathmandu",
          description:
            "Visit the Dakshinkali Temple, situated just outside Kathmandu. Dedicated to the fierce and powerful Goddess Kali, the temple is known for its ritual animal sacrifices. Set in a tranquil forested area, the temple provides a stark contrast between the serene natural surroundings and the intense religious activities. Experience the vibrant and raw energy of traditional Hindu worship. Overnight stay near Kathmandu.",
          image: "dakshinkali.jpg",
        },
        {
          day: "Day 6 - Bhaktapur",
          description:
            "Explore Bhaktapur and visit the Changu Narayan Temple, one of the oldest Hindu temples in Nepal, dedicated to Lord Vishnu. The temple is renowned for its exquisite stone and wood carvings, intricate sculptures, and ancient inscriptions dating back to the 5th century. The UNESCO World Heritage Site offers a glimpse into the rich artistic and cultural heritage of the Kathmandu Valley. Overnight stay in Bhaktapur.",
          image: "changunarayan.jpg",
        },
        {
          day: "Day 7 - Pokhara",
          description:
            "Proceed to Pokhara and visit the Barahi Temple, located on an island in the middle of Phewa Lake. Dedicated to Goddess Barahi, an incarnation of Goddess Durga, the temple is accessible by boat. Enjoy the serene boat ride across the lake, with the Annapurna Range providing a majestic backdrop. The temple offers a peaceful sanctuary amidst the bustling tourist town. Overnight stay in Pokhara.",
          image: "barahi.jpg",
        },
      ],
    },
  },
  {
    name: "Cultural India Tour",
    id: "1",
    content: {
      country: "India",
      cover: ["india_one.jpg", "india_two.jpg", "india_three.jpg"],
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
      cover: ["maldives_one.jpg", "maldives_two.jpg", "maldives_three.jpg"],
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
];
export default data;
