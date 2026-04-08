
        const uiStrings = {
            en: { selectChapter: "Select Chapter", back: "← Back", next: "Next Question", correct: "Correct!", incorrect: "Incorrect", retry: "Retry Chapter", other: "Another Chapter", complete: "Chapter Complete!" },
            ta: { selectChapter: "அதிகாரத்தைத் தேர்ந்தெடு", back: "← பின்னால்", next: "அடுத்த கேள்வி", correct: "சரி!", incorrect: "தவறு", retry: "மீண்டும் முயற்சி", other: "வேறு அதிகாரம்", complete: "அதிகாரம் முடிந்தது!" },
            kn: { selectChapter: "ಅಧ್ಯಾಯ ಆಯ್ಕೆಮಾಡಿ", back: "← ಹಿಂದಕ್ಕೆ", next: "ಮುಂದಿನ ಪ್ರಶ್ನೆ", correct: "ಸರಿ!", incorrect: "ತಪ್ಪು", retry: "ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ", other: "ಇನ್ನೊಂದು ಅಧ್ಯಾಯ", complete: "ಅಧ್ಯಾಯ ಪೂರ್ಣಗೊಂಡಿದೆ!" }
        };

        const quizData = {
            en: {
                1: [
                    { q: "Where was Jesus baptized by John?", a: ["Dead Sea", "River Jordan", "Sea of Galilee", "Nile"], c: 1, e: "Mark 1:9 - Jesus was baptized in the Jordan." },
                    { q: "How long was Jesus in the wilderness being tempted?", a: ["7 days", "12 days", "40 days", "50 days"], c: 2, e: "Mark 1:13 - He was in the wilderness forty days." },
                    { q: "Who prepared the way for Jesus in the wilderness?", a: ["John the Baptist", "Elijah", "Moses", "Isaiah"], c: 0, e: "Mark 1:4 - John appeared, baptizing in the wilderness." },
                    { q: "What did Jesus say to Simon and Andrew?", a: ["Go away", "Pray with me", "Be silent", "Follow me"], c: 3, e: "Mark 1:17 - 'Follow me, and I will make you become fishers of men.'" },
                    { q: "What was Simon and Andrew's occupation?", a: ["Fishermen", "Farmers", "Tax collectors", "Shepherds"], c: 0, e: "Mark 1:16 - For they were fishermen." },
                    { q: "Whose mother-in-law did Jesus heal from a fever?", a: ["John's", "Simon's", "James's", "Andrew's"], c: 1, e: "Mark 1:30 - Simon’s mother-in-law lay sick with a fever." },
                    { q: "What animal did John the Baptist wear skins of?", a: ["Sheep", "Goat", "Camel", "Lion"], c: 2, e: "Mark 1:6 - John was clothed with camel's hair." },
                    { q: "What did John eat in the desert?", a: ["Bread and wine", "Fish", "Locusts and wild honey", "Mana"], c: 2, e: "Mark 1:6 - He ate locusts and wild honey." },
                    { q: "What descended on Jesus like a dove during His baptism?", a: ["An angel", "A light", "A cloud", "The Spirit"], c: 3, e: "Mark 1:10 - He saw the Spirit descending on him like a dove." },
                    { q: "Who were the sons of Zebedee?", a: ["Peter and Andrew", "James and John", "Philip and Thomas", "Matthew and Jude"], c: 1, e: "Mark 1:19 - He saw James the son of Zebedee and John his brother." }
                ],
                2: [
                    { q: "How many men carried the paralytic to Jesus?", a: ["Two", "Six", "Four", "Eight"], c: 2, e: "Mark 2:3 - They came bringing to him a paralytic carried by four men." },
                    { q: "Through what did they lower the paralytic?", a: ["The roof", "A window", "The door", "A wall"], c: 0, e: "Mark 2:4 - They made an opening in the roof." },
                    { q: "What did Jesus say first to the paralytic?", a: ["Get up", "You are healed", "Go home", "Your sins are forgiven"], c: 3, e: "Mark 2:5 - 'Son, your sins are forgiven.'" },
                    { q: "Who was the son of Alphaeus sitting at the tax booth?", a: ["Levi", "Peter", "John", "Simon"], c: 0, e: "Mark 2:14 - He saw Levi the son of Alphaeus sitting at the tax office." },
                    { q: "With whom was Jesus eating that offended the scribes?", a: ["Pharisees", "Tax collectors and sinners", "Romans", "His family"], c: 1, e: "Mark 2:16 - He was eating with tax collectors and sinners." },
                    { q: "Jesus said the Son of Man is Lord even of what?", a: ["The Temple", "The Earth", "The Sabbath", "The Law"], c: 2, e: "Mark 2:28 - So the Son of Man is lord even of the Sabbath." },
                    { q: "Who did David enter the house of God and eat the bread with?", a: ["Saul", "Abiathar", "Samuel", "Nathan"], c: 1, e: "Mark 2:26 - How he entered the house of God, in the time of Abiathar the high priest." },
                    { q: "Jesus said he came to call not the righteous, but whom?", a: ["The sinners", "The holy", "The rich", "The leaders"], c: 0, e: "Mark 2:17 - 'I came not to call the righteous, but sinners.'" },
                    { q: "What happens if you put new wine into old wineskins?", a: ["It tastes better", "The skins burst", "It turns to water", "Nothing"], c: 1, e: "Mark 2:22 - The wine will burst the skins and the wine is destroyed." },
                    { q: "What were the disciples doing in the grainfields on the Sabbath?", a: ["Planting", "Plucking heads of grain", "Sleeping", "Singing"], c: 1, e: "Mark 2:23 - His disciples began to pluck heads of grain." }
                ],
                3: [
                    { q: "Where was the man with the withered hand?", a: ["At the beach", "In the synagogue", "On the mountain", "At home"], c: 1, e: "Mark 3:1 - He entered again into the synagogue; and a man was there which had a withered hand." },
                    { q: "What did Jesus call the sons of Zebedee?", a: ["Sons of Light", "Sons of Thunder", "Sons of Peace", "Sons of Truth"], c: 1, e: "Mark 3:17 - And James the son of Zebedee, and John the brother of James; and he surnamed them Boanerges, which is, The sons of thunder." },
                    { q: "How many apostles did Jesus appoint?", a: ["7", "10", "12", "70"], c: 2, e: "Mark 3:14 - And he ordained twelve, that they should be with him." },
                    { q: "Who did the scribes say Jesus was possessed by?", a: ["Satan", "Beelzebub", "A Roman spirit", "Legion"], c: 1, e: "Mark 3:22 - And the scribes... said, He hath Beelzebub." },
                    { q: "What did Jesus say about a house divided against itself?", a: ["It will fall", "It cannot stand", "It is weak", "It needs a foundation"], c: 1, e: "Mark 3:25 - And if a house be divided against itself, that house cannot stand." },
                    { q: "Who did Jesus say were his brothers and sisters?", a: ["His disciples", "His physical family", "Whoever does God's will", "The poor"], c: 2, e: "Mark 3:35 - For whosoever shall do the will of God, the same is my brother, and my sister, and mother." },
                    { q: "What sin did Jesus say will never be forgiven?", a: ["Murder", "Adultery", "Blasphemy against the Holy Spirit", "Theft"], c: 2, e: "Mark 3:29 - But he that shall blaspheme against the Holy Ghost hath never forgiveness." },
                    { q: "Where did Jesus go to call the twelve?", a: ["The sea", "The temple", "The mountain", "Nazareth"], c: 2, e: "Mark 3:13 - And he goeth up into a mountain, and calleth unto him whom he would." },
                    { q: "Who were the first four disciples listed in chapter 3?", a: ["Peter, James, John, Andrew", "Matthew, Thomas, James, Jude", "Simon, Andrew, James, John", "Philip, Bartholomew, Matthew, Thomas"], c: 2, e: "Mark 3:16-18 lists them starting with Peter, James, John, and Andrew." },
                    { q: "What was the name Jesus gave to Simon?", a: ["Cephas", "Rock", "Peter", "Paul"], c: 2, e: "Mark 3:16 - And Simon he surnamed Peter." }
                ],
                4: [
                    { q: "What parable begins Mark 4?", a: ["Good Samaritan", "Sower", "Prodigal Son", "Mustard Seed"], c: 1, e: "Mark 4:3 - Parable of the sower." },
                    { q: "Where did some seeds fall and get eaten by birds?", a: ["Rocky ground", "Among thorns", "Path", "Good soil"], c: 2, e: "Mark 4:4" },
                    { q: "What do seeds on rocky ground lack?", a: ["Water", "Depth of soil", "Sunlight", "Air"], c: 1, e: "Mark 4:5" },
                    { q: "What chokes the plants?", a: ["Birds", "Wind", "Thorns", "Rain"], c: 2, e: "Mark 4:7" },
                    { q: "What grows and produces crop?", a: ["Path", "Rocky soil", "Good soil", "Thorns"], c: 2, e: "Mark 4:8" },
                    { q: "What did Jesus calm?", a: ["Earthquake", "Storm", "Fire", "Crowd"], c: 1, e: "Mark 4:39" },
                    { q: "What did Jesus say to the sea?", a: ["Be still", "Be quiet", "Peace, be still", "Stop"], c: 2, e: "Mark 4:39" },
                    { q: "Who were afraid after the storm?", a: ["Pharisees", "Disciples", "Crowd", "Romans"], c: 1, e: "Mark 4:41" },
                    { q: "What does a lamp stand represent?", a: ["Light", "Truth revealed", "Temple", "Law"], c: 1, e: "Mark 4:22" },
                    { q: "Mustard seed becomes what?", a: ["Tree", "Bush", "Flower", "Grass"], c: 1, e: "Mark 4:32" }
                ],

                5: [
                    { q: "Where did Jesus meet the demon-possessed man?", a: ["Temple", "Mountain", "Tombs", "Sea"], c: 2, e: "Mark 5:2" },
                    { q: "What was the demon's name?", a: ["Legion", "Satan", "Beelzebub", "Spirit"], c: 0, e: "Mark 5:9" },
                    { q: "Where did demons go?", a: ["Sea", "Pigs", "Sky", "People"], c: 1, e: "Mark 5:13" },
                    { q: "What happened to pigs?", a: ["Ran away", "Died", "Entered city", "Slept"], c: 1, e: "Mark 5:13" },
                    { q: "Who touched Jesus’ garment?", a: ["Mary", "Woman with issue of blood", "Martha", "Child"], c: 1, e: "Mark 5:27" },
                    { q: "How many years was she suffering?", a: ["5", "10", "12", "20"], c: 2, e: "Mark 5:25" },
                    { q: "Who was Jairus?", a: ["Priest", "Ruler of synagogue", "Farmer", "King"], c: 1, e: "Mark 5:22" },
                    { q: "What happened to Jairus' daughter?", a: ["Sick", "Dead", "Healed", "Missing"], c: 1, e: "Mark 5:35" },
                    { q: "What did Jesus say to her?", a: ["Rise", "Talitha cumi", "Walk", "Live"], c: 1, e: "Mark 5:41" },
                    { q: "People reacted how?", a: ["Fear", "Joy", "Amazement", "Anger"], c: 2, e: "Mark 5:42" }
                ],

                6: [
                    { q: "Where was Jesus rejected?", a: ["Jerusalem", "Nazareth", "Bethlehem", "Capernaum"], c: 1, e: "Mark 6:1" },
                    { q: "Who was John killed by?", a: ["Pilate", "Herod", "Pharisees", "Romans"], c: 1, e: "Mark 6:27" },
                    { q: "Who asked for John's head?", a: ["Queen", "Daughter of Herodias", "Servant", "Disciple"], c: 1, e: "Mark 6:22" },
                    { q: "How many loaves?", a: ["3", "5", "7", "10"], c: 1, e: "Mark 6:38" },
                    { q: "How many fishes?", a: ["1", "2", "3", "4"], c: 1, e: "Mark 6:38" },
                    { q: "How many people fed?", a: ["3000", "4000", "5000", "6000"], c: 2, e: "Mark 6:44" },
                    { q: "How many baskets left?", a: ["5", "7", "12", "20"], c: 2, e: "Mark 6:43" },
                    { q: "Where did Jesus walk?", a: ["Road", "Mountain", "Water", "Temple"], c: 2, e: "Mark 6:48" },
                    { q: "What did disciples think?", a: ["Angel", "Ghost", "Man", "Prophet"], c: 1, e: "Mark 6:49" },
                    { q: "People touched what to be healed?", a: ["Hand", "Clothes edge", "Feet", "Head"], c: 1, e: "Mark 6:56" }
                ],
    7: [
        { q: "What issue did the Pharisees question Jesus about regarding the disciples’ behavior?", a: ["Their prayer habits", "Their fasting practices", "Not washing hands before eating", "Their teaching methods"], c: 2, e: "Mark 7:5 - They questioned why disciples ate without washing hands." },

        { q: "According to Jesus, what is it that truly defiles a person?", a: ["The food they eat", "External dirt", "What comes from within the heart", "Unclean water"], c: 2, e: "Mark 7:15 - What comes out of a man defiles him." },

        { q: "Whose daughter did Jesus heal after a conversation about faith and humility?", a: ["A Jewish woman", "A Greek Syrophoenician woman", "A Roman officer’s wife", "A servant woman"], c: 1, e: "Mark 7:26" },

        { q: "What was the nationality of the woman whose daughter Jesus healed?", a: ["Jewish", "Syrophoenician Greek", "Roman", "Egyptian"], c: 1, e: "Mark 7:26" },

        { q: "What type of physical condition did the man have whom Jesus healed by saying 'Ephphatha'?", a: ["He was blind", "He was deaf and had a speech problem", "He was paralyzed", "He was lame"], c: 1, e: "Mark 7:32" },

        { q: "What specific word did Jesus say while healing the deaf man?", a: ["Talitha cumi", "Ephphatha", "Eloi Eloi", "Hosanna"], c: 1, e: "Mark 7:34" },

        { q: "What is the meaning of the word 'Ephphatha' spoken by Jesus?", a: ["Be healed", "Be opened", "Be strong", "Be clean"], c: 1, e: "Mark 7:34" },

        { q: "How did the people react after witnessing the miracles performed by Jesus?", a: ["They were afraid", "They were amazed beyond measure", "They were angry", "They ignored him"], c: 1, e: "Mark 7:37" },

        { q: "Whose traditions did Jesus criticize for replacing God’s commandments?", a: ["Roman traditions", "Jewish kings", "Human traditions", "Priestly laws"], c: 2, e: "Mark 7:8" },

        { q: "According to Jesus, what kinds of things come from within a person’s heart?", a: ["Only good thoughts", "Both good and evil", "Only evil intentions", "Neutral thoughts"], c: 2, e: "Mark 7:21" }
    ],

    8: [
        { q: "Approximately how many people were fed during the miracle in Mark chapter 8?", a: ["3000 people", "4000 people", "5000 people", "6000 people"], c: 1, e: "Mark 8:9" },

        { q: "How many loaves of bread were available before Jesus performed the miracle of feeding the crowd?", a: ["Five loaves", "Seven loaves", "Three loaves", "Ten loaves"], c: 1, e: "Mark 8:5" },

        { q: "After feeding the multitude, how many baskets of leftovers were collected?", a: ["Five baskets", "Seven baskets", "Twelve baskets", "Three baskets"], c: 1, e: "Mark 8:8" },

        { q: "What did the Pharisees demand from Jesus to test Him?", a: ["Food", "A miraculous sign from heaven", "Money", "Teaching"], c: 1, e: "Mark 8:11" },

        { q: "What did the disciples forget to bring with them while traveling?", a: ["Water", "Bread", "Fish", "Money"], c: 1, e: "Mark 8:14" },

        { q: "Whom did Jesus heal at Bethsaida by restoring his sight gradually?", a: ["A deaf man", "A blind man", "A paralyzed man", "A child"], c: 1, e: "Mark 8:22" },

        { q: "Who declared that Jesus is the Christ (Messiah)?", a: ["John", "Peter", "James", "Thomas"], c: 1, e: "Mark 8:29" },

        { q: "Which disciple rebuked Jesus when He spoke about His suffering and death?", a: ["John", "Peter", "James", "Andrew"], c: 1, e: "Mark 8:32" },

        { q: "What strong statement did Jesus say in response to that disciple?", a: ["Go away", "Get behind me, Satan", "Be silent", "Follow me"], c: 1, e: "Mark 8:33" },

        { q: "According to Jesus, what must a person do to follow Him?", a: ["Earn money", "Take up their cross and follow Him", "Pray daily only", "Fast regularly"], c: 1, e: "Mark 8:34" }
    ],
    9: [
        { q: "On which place did the transfiguration of Jesus take place in front of His disciples?", a: ["In a house", "On a mountain", "By the sea", "In a city"], c: 1, e: "Mark 9:2" },

        { q: "Which two figures from the Old Testament appeared with Jesus during the transfiguration?", a: ["Abraham and Isaac", "Moses and Elijah", "David and Solomon", "Isaiah and Jeremiah"], c: 1, e: "Mark 9:4" },

        { q: "What suggestion did Peter make when he saw Jesus transfigured?", a: ["Let us leave", "Let us build three shelters", "Let us pray", "Let us hide"], c: 1, e: "Mark 9:5" },

        { q: "What did the voice from the cloud say about Jesus?", a: ["This is my servant", "This is my beloved Son", "This is my prophet", "This is my king"], c: 1, e: "Mark 9:7" },

        { q: "What problem did the disciples fail to solve before Jesus intervened?", a: ["Healing blindness", "Casting out a demon", "Feeding people", "Stopping a storm"], c: 1, e: "Mark 9:18" },

        { q: "What did Jesus say is necessary for all things to be possible?", a: ["Strength", "Faith", "Wealth", "Knowledge"], c: 1, e: "Mark 9:23" },

        { q: "According to Jesus, who is considered the greatest among His followers?", a: ["The richest", "The servant of all", "The strongest", "The oldest"], c: 1, e: "Mark 9:35" },

        { q: "What example did Jesus use to teach humility to His disciples?", a: ["A king", "A child", "A temple", "A mountain"], c: 1, e: "Mark 9:36" },

        { q: "What did Jesus say about those who are not against His followers?", a: ["They are enemies", "They are neutral", "They are for us", "They must leave"], c: 2, e: "Mark 9:40" },

        { q: "How is hell described by Jesus in this chapter?", a: ["A place of darkness only", "A place where fire never goes out", "A place of silence", "A place of rest"], c: 1, e: "Mark 9:43" }
    ],

    10: [
        { q: "What teaching did Jesus give about marriage and divorce?", a: ["Marriage can be easily broken", "What God has joined together should not be separated", "Divorce is always allowed", "Marriage is optional"], c: 1, e: "Mark 10:9" },

        { q: "Who tried to stop the children from coming to Jesus?", a: ["Pharisees", "Disciples", "Crowd", "Priests"], c: 1, e: "Mark 10:13" },

        { q: "What did Jesus say about allowing children to come to Him?", a: ["Do not allow them", "Let the children come to me", "Send them away", "Teach them later"], c: 1, e: "Mark 10:14" },

        { q: "What important question did the rich young man ask Jesus?", a: ["How to earn money", "How to gain eternal life", "How to become famous", "How to rule"], c: 1, e: "Mark 10:17" },

        { q: "What instruction did Jesus give to the rich young man?", a: ["Save your wealth", "Sell everything and give to the poor", "Build a house", "Travel"], c: 1, e: "Mark 10:21" },

        { q: "What example did Jesus use to explain the difficulty for the rich to enter the kingdom of God?", a: ["A lion in a cage", "A camel through the eye of a needle", "A bird flying", "A river flowing"], c: 1, e: "Mark 10:25" },

        { q: "Who alone has the power to make salvation possible according to Jesus?", a: ["Humans", "God", "Kings", "Priests"], c: 1, e: "Mark 10:27" },

        { q: "According to Jesus, who is truly great among people?", a: ["The ruler", "The servant", "The richest", "The strongest"], c: 1, e: "Mark 10:43" },

        { q: "Who was Bartimaeus in this chapter?", a: ["A king", "A blind beggar", "A priest", "A disciple"], c: 1, e: "Mark 10:46" },

        { q: "What did Jesus do for Bartimaeus?", a: ["Ignored him", "Healed his blindness", "Sent him away", "Taught him"], c: 1, e: "Mark 10:52" }
    ],

    11: [
        { q: "To which city did Jesus make His triumphant entry?", a: ["Nazareth", "Jerusalem", "Bethlehem", "Galilee"], c: 1, e: "Mark 11:1" },

        { q: "What animal did Jesus ride into the city?", a: ["Horse", "Donkey", "Camel", "Chariot"], c: 1, e: "Mark 11:7" },

        { q: "What did the people shout during Jesus’ entry?", a: ["Hallelujah", "Hosanna", "Amen", "Glory"], c: 1, e: "Mark 11:9" },

        { q: "Which tree did Jesus curse for not bearing fruit?", a: ["Olive tree", "Fig tree", "Palm tree", "Apple tree"], c: 1, e: "Mark 11:13" },

        { q: "What action did Jesus take in the temple?", a: ["He prayed quietly", "He cleansed the temple", "He slept", "He left"], c: 1, e: "Mark 11:15" },

        { q: "What did Jesus say the temple should be called?", a: ["House of kings", "House of prayer", "House of trade", "House of people"], c: 1, e: "Mark 11:17" },

        { q: "What can faith do according to Jesus?", a: ["Move mountains", "Stop rain", "Heal instantly", "Create wealth"], c: 0, e: "Mark 11:23" },

        { q: "How should a person pray according to Jesus?", a: ["With doubt", "With faith", "With fear", "With anger"], c: 1, e: "Mark 11:24" },

        { q: "What must we do when we stand praying?", a: ["Judge others", "Forgive others", "Ignore others", "Leave others"], c: 1, e: "Mark 11:25" },

        { q: "Who questioned the authority of Jesus?", a: ["Priests and scribes", "Romans", "Disciples", "Kings"], c: 0, e: "Mark 11:27" }
    ],

    12: [
        { q: "What is the main subject of the parable told by Jesus in this chapter?", a: ["A vineyard", "A king", "A shepherd", "A temple"], c: 0, e: "Mark 12:1" },

        { q: "What did the tenants do to the servants sent by the owner?", a: ["Welcomed them", "Killed and beat them", "Ignored them", "Helped them"], c: 1, e: "Mark 12:5" },

        { q: "Who did the owner finally send to the tenants?", a: ["A servant", "His son", "A king", "A priest"], c: 1, e: "Mark 12:6" },

        { q: "What was Jesus’ teaching about paying taxes?", a: ["Do not pay", "Pay only kings", "Render to Caesar what is Caesar’s", "Ignore taxes"], c: 2, e: "Mark 12:17" },

        { q: "What did Jesus say about marriage in the resurrection?", a: ["Marriage continues", "No marriage", "Optional", "Unknown"], c: 1, e: "Mark 12:25" },

        { q: "What is the greatest commandment according to Jesus?", a: ["Love God", "Fast daily", "Give money", "Pray always"], c: 0, e: "Mark 12:30" },

        { q: "What is the second greatest commandment?", a: ["Love neighbor", "Hate enemies", "Fast", "Work"], c: 0, e: "Mark 12:31" },

        { q: "What did the poor widow give in the offering?", a: ["A large amount", "Two small coins", "Nothing", "Food"], c: 1, e: "Mark 12:42" },

        { q: "Why was her offering considered great?", a: ["It was large", "She gave all she had", "It was public", "It was gold"], c: 1, e: "Mark 12:44" },

        { q: "How did the rich people give their offerings?", a: ["Generously", "Out of abundance", "Secretly", "Reluctantly"], c: 1, e: "Mark 12:44" }
    ],

    13: [
        { q: "What did Jesus predict about the temple?", a: ["It will grow", "It will be destroyed", "It will shine", "It will move"], c: 1, e: "Mark 13:2" },

        { q: "What did Jesus say about wars and rumors of wars?", a: ["It is the end", "It is only the beginning", "It will stop", "It is peace"], c: 1, e: "Mark 13:7" },

        { q: "To whom will the gospel be preached?", a: ["Israel only", "All nations", "Rome only", "Disciples"], c: 1, e: "Mark 13:10" },

        { q: "What is the abomination of desolation associated with?", a: ["Temple", "Sea", "City", "House"], c: 0, e: "Mark 13:14" },

        { q: "Who will arise to deceive people?", a: ["False prophets", "Kings", "Priests", "Teachers"], c: 0, e: "Mark 13:22" },

        { q: "What will happen to the sun?", a: ["Shine brighter", "Be darkened", "Disappear", "Freeze"], c: 1, e: "Mark 13:24" },

        { q: "Who will come in clouds with power?", a: ["Prophets", "Son of Man", "Kings", "Angels"], c: 1, e: "Mark 13:26" },

        { q: "What will angels do?", a: ["Judge", "Gather the elect", "Destroy", "Teach"], c: 1, e: "Mark 13:27" },

        { q: "Who knows the day or hour?", a: ["Everyone", "No one", "Angels", "Prophets"], c: 1, e: "Mark 13:32" },

        { q: "What instruction did Jesus give?", a: ["Sleep", "Watch and be alert", "Ignore", "Leave"], c: 1, e: "Mark 13:37" }
    ],

    14: [
        { q: "Who anointed Jesus with perfume?", a: ["Mary", "An unnamed woman", "Martha", "Queen"], c: 1, e: "Mark 14:3" },

        { q: "What did Judas do to Jesus?", a: ["Followed Him", "Betrayed Him", "Helped Him", "Ignored Him"], c: 1, e: "Mark 14:10" },

        { q: "What did Jesus break during the Last Supper?", a: ["Fish", "Bread", "Meat", "Fruit"], c: 1, e: "Mark 14:22" },

        { q: "What did the cup represent?", a: ["Water", "Blood of the covenant", "Wine only", "Life"], c: 1, e: "Mark 14:24" },

        { q: "How many times did Peter deny Jesus?", a: ["Once", "Twice", "Three times", "Never"], c: 2, e: "Mark 14:72" },

        { q: "Where did Jesus pray before His arrest?", a: ["Temple", "Garden of Gethsemane", "Sea", "House"], c: 1, e: "Mark 14:32" },

        { q: "How many times did Jesus pray there?", a: ["Once", "Twice", "Three times", "Four times"], c: 2, e: "Mark 14:41" },

        { q: "What sign did Judas use to betray Jesus?", a: ["Handshake", "Kiss", "Word", "Signal"], c: 1, e: "Mark 14:44" },

        { q: "Who questioned Jesus during His trial?", a: ["King", "High priest", "Disciple", "Roman soldier"], c: 1, e: "Mark 14:60" },

        { q: "What happened after Peter denied Jesus?", a: ["He laughed", "He cried", "He left", "He slept"], c: 1, e: "Mark 14:72" }
    ],

    15: [
        { q: "To whom was Jesus handed over for judgment?", a: ["Herod", "Pilate", "Caesar", "Priest"], c: 1, e: "Mark 15:1" },

        { q: "Whom did the crowd choose to release instead of Jesus?", a: ["Peter", "Barabbas", "John", "James"], c: 1, e: "Mark 15:11" },

        { q: "How did the soldiers mock Jesus?", a: ["As a king", "As a servant", "As a prophet", "As a teacher"], c: 0, e: "Mark 15:18" },

        { q: "What kind of crown was placed on Jesus’ head?", a: ["Gold", "Thorns", "Silver", "Iron"], c: 1, e: "Mark 15:17" },

        { q: "Who was forced to carry Jesus’ cross?", a: ["Peter", "Simon of Cyrene", "John", "Judas"], c: 1, e: "Mark 15:21" },

        { q: "At which place was Jesus crucified?", a: ["Jerusalem", "Golgotha", "Nazareth", "Temple"], c: 1, e: "Mark 15:22" },

        { q: "What did Jesus cry out on the cross?", a: ["My God, why have you forsaken me?", "Help me", "Save me", "Father"], c: 0, e: "Mark 15:34" },

        { q: "What happened to the temple curtain when Jesus died?", a: ["It burned", "It was torn in two", "It disappeared", "It fell"], c: 1, e: "Mark 15:38" },

        { q: "What did the centurion say about Jesus?", a: ["He is a king", "He is the Son of God", "He is a prophet", "He is a man"], c: 1, e: "Mark 15:39" },

        { q: "Who buried Jesus?", a: ["Peter", "Joseph of Arimathea", "John", "Pilate"], c: 1, e: "Mark 15:43" }
    ],

    16: [
        { q: "When did the women go to the tomb of Jesus?", a: ["Night", "Early morning", "Evening", "Noon"], c: 1, e: "Mark 16:2" },

        { q: "What did they find about the stone at the tomb?", a: ["Closed", "Moved away", "Broken", "Covered"], c: 1, e: "Mark 16:4" },

        { q: "What message did the angel give them?", a: ["He is risen", "He is asleep", "He is gone", "He is hidden"], c: 0, e: "Mark 16:6" },

        { q: "To whom did Jesus first appear after His resurrection?", a: ["Peter", "Mary Magdalene", "John", "Thomas"], c: 1, e: "Mark 16:9" },

        { q: "Did the disciples initially believe the resurrection?", a: ["Yes", "No", "Later", "Maybe"], c: 1, e: "Mark 16:11" },

        { q: "What command did Jesus give to His disciples?", a: ["Stay", "Go and preach the gospel", "Pray only", "Fast"], c: 1, e: "Mark 16:15" },

        { q: "What would accompany believers according to Jesus?", a: ["Signs and miracles", "Wealth", "Power", "Fame"], c: 0, e: "Mark 16:17" },

        { q: "What happened to Jesus after speaking to them?", a: ["Stayed", "Ascended to heaven", "Walked away", "Disappeared"], c: 1, e: "Mark 16:19" },

        { q: "Where did Jesus sit after ascending?", a: ["Left hand of God", "Right hand of God", "Middle", "Below"], c: 1, e: "Mark 16:19" },

        { q: "What did the disciples do after Jesus ascended?", a: ["Stayed silent", "Preached everywhere", "Returned home", "Slept"], c: 1, e: "Mark 16:20" }
    ]

            },
            ta: {
                1: [
                    { q: "இயேசு எங்கே ஞானஸ்நானம் பெற்றார்?", a: ["கலிலேயா கடல்", "யோர்தான் நதி", "சாக்கடல்", "நைல்"], c: 1, e: "மாற்கு 1:9 - யோர்தான் நதியில் யோவானால் ஞானஸ்நானம் பெற்றார்." },
                    { q: "வனாந்தரத்தில் இயேசுவுக்கு வழியை ஆயத்தப்படுத்தியது யார்?", a: ["யோவான் ஸ்நானகன்", "எலியா", "மோசே", "ஏசாயா"], c: 0, e: "மாற்கு 1:4 - யோவான் வனாந்தரத்தில் ஞானஸ்நானங்கொடுத்துக்கொண்டிருந்தான்." },
                    { q: "இயேசு எத்தனை நாட்கள் வனாந்தரத்தில் சோதிக்கப்பட்டார்?", a: ["7 நாட்கள்", "12 நாட்கள்", "40 நாட்கள்", "50 நாட்கள்"], c: 2, e: "மாற்கு 1:13 - வனாந்தரத்திலே நாற்பதுநாள் இருந்து, சாத்தானால் சோதிக்கப்பட்டு..." },
                    { q: "சீமோனிடமும் அந்திரேயாவிடமும் இயேசு என்ன சொன்னார்?", a: ["ஜெபிக்க வாருங்கள்", "போய்விடுங்கள்", "அமைதியாக இருங்கள்", "என் பின்னே வாருங்கள்"], c: 3, e: "மாற்கு 1:17 - 'என் பின்னே வாருங்கள், உங்களை மனுஷரைப் பிடிக்கிறவர்களாக்குவேன்' என்றார்." },
                    { q: "சீமோன் மற்றும் அந்திரேயாவின் தொழில் என்ன?", a: ["விவசாயிகள்", "மீன் பிடிப்பவர்கள்", "ஆயக்காரர்கள்", "தச்சர்கள்"], c: 1, e: "மாற்கு 1:16 - அவர்கள் மீன்பிடிக்கிறவர்களாயிருந்தார்கள்." },
                    { q: "யாருடைய மாமி காய்ச்சலாய் கிடந்தாள்?", a: ["யோவானுடைய", "சீமோனுடைய", "யாக்கோபுடைய", "பிலிப்புடைய"], c: 1, e: "மாற்கு 1:30 - சீமோனுடைய மாமி காய்ச்சலாய்க் கிடந்தாள்." },
                    { q: "யோவான் ஸ்நானகன் எதினால் ஆன ஆடையை அணிந்திருந்தார்?", a: ["ஆட்டுத்தோல்", "பட்டு", "ஒட்டக மயிர்", "சணல்"], c: 2, e: "மாற்கு 1:6 - யோவான் ஒட்டக மயிர் உடையைத் தரித்திருந்தான்." },
                    { q: "யோவான் வனாந்தரத்தில் என்ன சாப்பிட்டார்?", a: ["அப்பமும் திராட்சரசமும்", "மீன்", "வெட்டுக்கிளியும் காட்டுத்தேனும்", "மன்னா"], c: 2, e: "மாற்கு 1:6 - வெட்டுக்கிளியும் காட்டுத்தேனும் அவனுக்கு உணவாயிருந்தது." },
                    { q: "இயேசு ஞானஸ்நானம் பெறும்போது ஆவி எதைப்போல இறங்கியது?", a: ["மேகம்", "நெருப்பு", "ஒளி", "புறா"], c: 3, e: "மாற்கு 1:10 - ஆவியானவர் புறாவைப்போலத் தம்மேல் இறங்குகிறதைக் கண்டார்." },
                    { q: "செபதேயுவின் குமாரர்கள் யார்?", a: ["பேதுருவும் அந்திரேயாவும்", "யாக்கோபும் யோவானும்", "தோமாவும் பிலிப்பும்", "மத்தேயுவும் யூதாவும்"], c: 1, e: "மாற்கு 1:19 - செபதேயுவின் குமாரன் யாக்கோபையும் அவன் சகோதரன் யோவானையும் கண்டார்." }
                ],
                2: [
                    { q: "திமிர்வாதக்காரனை இயேசுவிடம் எத்தனை பேர் சுமந்து வந்தனர்?", a: ["இரண்டு பேர்", "ஆறு பேர்", "நான்கு பேர்", "எட்டு பேர்"], c: 2, e: "மாற்கு 2:3 - நாலுபேரால் சுமக்கப்பட்ட ஒரு திமிர்வாதக்காரனைக் கொண்டுவந்தார்கள்." },
                    { q: "கூரை வழியாக எதை இறக்கினார்கள்?", a: ["திமிர்வாதக்காரனை", "படுக்கையை", "ஒரு பெட்டியை", "உணவை"], c: 0, e: "மாற்கு 2:4 - திமிர்வாதக்காரன் படுத்திருந்த படுக்கையை இறக்கினார்கள்." },
                    { q: "இயேசு முதலில் திமிர்வாதக்காரனிடம் என்ன சொன்னார்?", a: ["எழுந்து நட", "உன் பாவங்கள் மன்னிக்கப்பட்டது", "நீ குணமானாய்", "வீட்டிற்கு போ"], c: 1, e: "மாற்கு 2:5 - 'மகனே, உன் பாவங்கள் உனக்கு மன்னிக்கப்பட்டது' என்றார்." },
                    { q: "ஆயத்துறையில் அமர்ந்திருந்த அல்பேயுவின் குமாரன் யார்?", a: ["லேவி", "பேதுரு", "யோவான்", "சீமோன்"], c: 0, e: "மாற்கு 2:14 - அல்பேயுவின் குமாரனாகிய லேவி ஆயத்துறையில் உட்கார்ந்திருக்கக் கண்டு..." },
                    { q: "இயேசு யாருடன் சாப்பிட்டது வேதபாரகருக்கு கோபத்தை ஏற்படுத்தியது?", a: ["பரிசேயர்கள்", "ஆயக்காரர்கள் மற்றும் பாவிகள்", "ரோமர்கள்", "அவரது குடும்பம்"], c: 1, e: "மாற்கு 2:16 - அவர் ஆயக்காரரோடும் பாவிகளோடும் போஜனம் பண்ணுகிறதை அவர்கள் கண்டு..." },
                    { q: "ஓய்வுநாளுக்கும் ஆண்டவர் யார் என்று இயேசு சொன்னார்?", a: ["ஆலயத்தின் ஆண்டவர்", "தேவகுமாரன்", "மனுஷகுமாரன்", "தீர்க்கதரிசி"], c: 2, e: "மாற்கு 2:28 - ஆதலால் மனுஷகுமாரன் ஓய்வுநாளுக்கும் ஆண்டவராய் இருக்கிறார்." },
                    { q: "தாவீது யாருடைய காலத்தில் தேவனுடைய ஆலயத்தில் நுழைந்து அப்பத்தை சாப்பிட்டார்?", a: ["சவுல்", "அபியத்தார்", "சாமுவேல்", "நாதன்"], c: 1, e: "மாற்கு 2:26 - அபியத்தார் பிரதான ஆசாரியனாயிருந்த காலத்தில்..." },
                    { q: "நீதிமான்களையல்ல, யாரை அழைக்க வந்தேன் என்று இயேசு சொன்னார்?", a: ["பாவிகளை", "பரிசுத்தவான்களை", "செல்வந்தர்களை", "தலைவர்களை"], c: 0, e: "மாற்கு 2:17 - 'நீதிமான்களையல்ல, பாவிகளையே மனந்திரும்புதலுக்கு அழைக்க வந்தேன்' என்றார்." },
                    { q: "புதிய திராட்சரசத்தை பழைய துருத்திகளில் வார்த்தால் என்னவாகும்?", a: ["துருத்திகள் வெடிக்கும்", "சுவை அதிகமாகும்", "தண்ணீராக மாறும்", "ஒன்றும் ஆகாது"], c: 0, e: "மாற்கு 2:22 - புதிய திராட்சரசம் துருத்திகளை வெடிக்கப்பண்ணும்." },
                    { q: "ஓய்வுநாளில் சீஷர்கள் வயல்வெளியில் என்ன செய்தார்கள்?", a: ["விதைத்தார்கள்", "கதிர்களைக் கொய்தார்கள்", "தூங்கினார்கள்", "பாடினார்கள்"], c: 1, e: "மாற்கு 2:23 - அவருடைய சீஷர்கள் வழிநடக்கையில் கதிர்களைக் கொய்யத் தொடங்கினார்கள்." }
                ],
    3: [
        { q: "உலர்ந்த கையுள்ள மனிதன் எங்கு இருந்தபோது இயேசு அவனை குணப்படுத்தினார்?", a: ["வீட்டில்", "சபையில்", "மலையில்", "கடலில்"], c: 1, e: "மாற்கு 3:1" },
        { q: "இயேசு எத்தனை அப்போஸ்தலர்களைத் தேர்ந்தெடுத்தார்?", a: ["10", "11", "12", "13"], c: 2, e: "மாற்கு 3:14" },
        { q: "எழுத்தறிவாளர்கள் இயேசுவைப் பற்றி என்ன குற்றம் சாட்டினர்?", a: ["அவர் தீர்க்கதரிசி", "அவர் பேயால் பிடிக்கப்பட்டவர்", "அவர் ராஜா", "அவர் ஆசான்"], c: 1, e: "மாற்கு 3:22" },
        { q: "பிரிந்த வீடு பற்றி இயேசு என்ன சொன்னார்?", a: ["வலிமையாகும்", "நிற்காது", "உயரும்", "வளரும்"], c: 1, e: "மாற்கு 3:25" },
        { q: "யார் இயேசுவின் சகோதரரும் சகோதரிகளுமாகக் கருதப்படுகிறார்கள்?", a: ["அவரது குடும்பம்", "சிஷ்யர்கள்", "தேவசித்தம் செய்பவர்கள்", "பாவிகள்"], c: 2, e: "மாற்கு 3:35" },
        { q: "மன்னிக்கப்படாத பாவம் எது என்று இயேசு கூறினார்?", a: ["கொலை", "திருட்டு", "பரிசுத்த ஆவிக்கெதிரான நிந்தனை", "பொய்"], c: 2, e: "மாற்கு 3:29" },
        { q: "சீமோனுக்கு இயேசு எந்த புதிய பெயரை கொடுத்தார்?", a: ["பவுல்", "பேதுரு", "யோவான்", "மத்தேயு"], c: 1, e: "மாற்கு 3:16" },
        { q: "செபெதேயுவின் மகன்கள் யார்?", a: ["பேதுரு, அந்திரேயா", "யாக்கோபு, யோவான்", "பிலிப்பு, தோமா", "மத்தேயு, யூதா"], c: 1, e: "மாற்கு 3:17" },
        { q: "அவர்களுக்கு இயேசு என்ன பெயர் வைத்தார்?", a: ["இடி மகன்கள்", "ஒளி மகன்கள்", "சாந்தி மகன்கள்", "சத்திய மகன்கள்"], c: 0, e: "மாற்கு 3:17" },
        { q: "இயேசு எங்கு சென்று அப்போஸ்தலர்களை அழைத்தார்?", a: ["கடல்", "மலை", "நகரம்", "வீடு"], c: 1, e: "மாற்கு 3:13" }
    ],

    4: [
        { q: "மாற்கு 4ஆம் அதிகாரத்தில் இயேசு எந்த உவமையால் போதனை ஆரம்பித்தார்?", a: ["நல்ல சமாரியன்", "விதைப்பவன்", "தவறிய மகன்", "கடுகு விதை"], c: 1, e: "மாற்கு 4:3" },
        { q: "விதைகள் எந்த இடத்தில் விழுந்து பறவைகள் தின்றன?", a: ["கல் நிலம்", "வழி", "முள்", "நல்ல மண்"], c: 1, e: "மாற்கு 4:4" },
        { q: "கல் நிலத்தில் விதைகள் வளராததற்குக் காரணம் என்ன?", a: ["நீர் இல்லை", "ஆழம் இல்லை", "ஒளி இல்லை", "காற்று இல்லை"], c: 1, e: "மாற்கு 4:5" },
        { q: "எது செடிகளை நெரித்தது?", a: ["காற்று", "மழை", "முள்ளுகள்", "பறவைகள்"], c: 2, e: "மாற்கு 4:7" },
        { q: "நல்ல மண்ணில் விழுந்த விதைகள் என்ன செய்தது?", a: ["வாடியது", "வளர்ந்து கனித்தது", "கெட்டது", "மாறியது"], c: 1, e: "மாற்கு 4:8" },
        { q: "இயேசு எந்த நிகழ்வில் புயலை அமைதியாக்கினார்?", a: ["மலையில்", "படகில்", "நகரத்தில்", "வீட்டில்"], c: 1, e: "மாற்கு 4:39" },
        { q: "கடலுக்கு இயேசு என்ன சொன்னார்?", a: ["நில்", "அமைதியாக இரு", "நிறுத்து", "போ"], c: 1, e: "மாற்கு 4:39" },
        { q: "இதைக் கண்ட சிஷ்யர்கள் எப்படி இருந்தனர்?", a: ["மகிழ்ச்சி", "பயம்", "கோபம்", "அமைதி"], c: 1, e: "மாற்கு 4:41" },
        { q: "விளக்கு உவமையின் பொருள் என்ன?", a: ["ஒளி", "உண்மை வெளிப்படும்", "வீடு", "சட்டம்"], c: 1, e: "மாற்கு 4:22" },
        { q: "கடுகு விதை எப்படிப் பெரியதாகிறது?", a: ["மரம்", "பெரிய செடி", "புல்", "மலர்"], c: 1, e: "மாற்கு 4:32" }
    ],

    5: [
        { q: "இயேசு பேய் பிடித்த மனிதனை எங்கு சந்தித்தார்?", a: ["வீடு", "கல்லறைகள்", "மலை", "கடல்"], c: 1, e: "மாற்கு 5:2" },
        { q: "அந்த மனிதனுள் இருந்த பேயின் பெயர் என்ன?", a: ["சாத்தான்", "லேகியோன்", "ஆவி", "பெயல்செபூல்"], c: 1, e: "மாற்கு 5:9" },
        { q: "பேய்கள் எந்த மிருகங்களில் சென்றது?", a: ["குதிரைகள்", "பன்றிகள்", "ஒட்டகங்கள்", "ஆடுகள்"], c: 1, e: "மாற்கு 5:13" },
        { q: "பன்றிகளுக்கு என்ன ஆனது?", a: ["ஓடியது", "கடலில் விழுந்து இறந்தது", "தூங்கியது", "நகரம் சென்றது"], c: 1, e: "மாற்கு 5:13" },
        { q: "யார் இயேசுவின் உடையைத் தொட்டு குணமடைந்தார்?", a: ["மரியா", "ரத்தப்போக்கு பெண்", "மார்த்தா", "சேவகர்"], c: 1, e: "மாற்கு 5:27" },
        { q: "அவள் எத்தனை ஆண்டுகள் நோயால் பாதிக்கப்பட்டாள்?", a: ["5", "10", "12", "20"], c: 2, e: "மாற்கு 5:25" },
        { q: "யாயிரு யார்?", a: ["ராஜா", "சபைத் தலைவர்", "விவசாயி", "யாஜகர்"], c: 1, e: "மாற்கு 5:22" },
        { q: "அவனுடைய மகளுக்கு என்ன நடந்தது?", a: ["நோய்", "இறப்பு", "குணம்", "காணாமல் போனது"], c: 1, e: "மாற்கு 5:35" },
        { q: "மகளை எழுப்பும்போது இயேசு என்ன சொன்னார்?", a: ["எழுந்திரு", "தலிதா கூமி", "நட", "வாழு"], c: 1, e: "மாற்கு 5:41" },
        { q: "மக்கள் எப்படி பதிலளித்தனர்?", a: ["பயம்", "ஆச்சரியம்", "கோபம்", "சிரிப்பு"], c: 1, e: "மாற்கு 5:42" }
    ],
    6: [
        { q: "இயேசு தமது சொந்த ஊரில் எங்கு நிராகரிக்கப்பட்டார்?", a: ["எருசலேம்", "நாசரேத்", "பெத்லகேம்", "கப்பர்நகூம்"], c: 1, e: "மாற்கு 6:1" },
        { q: "யோவான் ஸ்நானகன் யாரால் கொல்லப்பட்டார்?", a: ["பிலாத்து", "ஹேரோது", "பரிசேயர்", "ரோமர்"], c: 1, e: "மாற்கு 6:27" },
        { q: "யாரின் வேண்டுகோளால் யோவானின் தலையை கேட்டார்கள்?", a: ["ராணி", "ஹேரோதியாவின் மகள்", "சேவகர்", "சிஷ்யர்"], c: 1, e: "மாற்கு 6:22" },
        { q: "ஐந்து ஆயிரம் பேருக்கு உணவு கொடுக்கும்போது எத்தனை அப்பங்கள் இருந்தது?", a: ["3", "5", "7", "10"], c: 1, e: "மாற்கு 6:38" },
        { q: "அந்த நேரத்தில் எத்தனை மீன்கள் இருந்தது?", a: ["1", "2", "3", "4"], c: 1, e: "மாற்கு 6:38" },
        { q: "இயேசு எத்தனை பேருக்கு உணவு அளித்தார்?", a: ["3000", "4000", "5000", "6000"], c: 2, e: "மாற்கு 6:44" },
        { q: "உணவுக்குப் பிறகு எத்தனை கூளங்கள் மீதமிருந்தது?", a: ["5", "7", "12", "20"], c: 2, e: "மாற்கு 6:43" },
        { q: "இயேசு எந்த அதிசயத்தில் நீரின் மேல் நடந்தார்?", a: ["மலையில்", "படகின் அருகில்", "நகரத்தில்", "வீட்டில்"], c: 1, e: "மாற்கு 6:48" },
        { q: "இயேசுவை பார்த்தபோது சிஷ்யர்கள் என்ன நினைத்தனர்?", a: ["தூதன்", "பேய்", "மனிதன்", "தீர்க்கதரிசி"], c: 1, e: "மாற்கு 6:49" },
        { q: "மக்கள் இயேசுவின் எந்த பகுதியைத் தொட்டால் குணமடைந்தனர்?", a: ["கை", "உடையின் ஓரம்", "தலை", "கால்"], c: 1, e: "மாற்கு 6:56" }
    ],

    7: [
        { q: "பரிசேயர்கள் இயேசுவின் சீஷர்களைப் பற்றி எந்த விஷயத்தில் கேள்வி கேட்டனர்?", a: ["உபவாசம்", "கை கழுவாதது", "ஜெபம்", "உணவு"], c: 1, e: "மாற்கு 7:5" },
        { q: "மனிதனை அசுத்தப்படுத்துவது எது என்று இயேசு கூறினார்?", a: ["உணவு", "வெளிப்புறம்", "இதயத்திலிருந்து வரும்", "நீர்"], c: 2, e: "மாற்கு 7:15" },
        { q: "யேசு எந்த பெண்ணின் மகளை குணப்படுத்தினார்?", a: ["யூத பெண்", "கிரேக்க சீரோபோனீசிய பெண்", "ராணி", "சேவகர்"], c: 1, e: "மாற்கு 7:26" },
        { q: "காது கேளாத மனிதனை குணப்படுத்தும்போது இயேசு என்ன சொன்னார்?", a: ["தலிதா கூமி", "எப்பத்தா", "எலோயி", "ஹோசன்னா"], c: 1, e: "மாற்கு 7:34" },
        { q: "‘எப்பத்தா’ என்ற வார்த்தையின் அர்த்தம் என்ன?", a: ["திற", "நில்", "போ", "வாழு"], c: 0, e: "மாற்கு 7:34" },
        { q: "இயேசுவின் செயல்களை பார்த்த மக்கள் எப்படி இருந்தனர்?", a: ["பயம்", "ஆச்சரியம்", "கோபம்", "அமைதி"], c: 1, e: "மாற்கு 7:37" },
        { q: "இயேசு எந்த பாரம்பரியங்களை கண்டித்தார்?", a: ["தேவன்", "மனிதர்", "ராஜா", "யாஜகர்"], c: 1, e: "மாற்கு 7:8" },
        { q: "இதயத்திலிருந்து என்ன வருகிறது என்று இயேசு கூறினார்?", a: ["நல்லது", "கெட்டது", "ஒளி", "சாந்தி"], c: 1, e: "மாற்கு 7:21" },
        { q: "வெளிப்புற உணவு மனிதனை அசுத்தப்படுத்துமா?", a: ["ஆம்", "இல்லை", "சில நேரம்", "தெரியாது"], c: 1, e: "மாற்கு 7:18" },
        { q: "அசுத்தம் எங்கிருந்து வருகிறது என்று இயேசு சொன்னார்?", a: ["உடல்", "இதயம்", "வீடு", "நகரம்"], c: 1, e: "மாற்கு 7:20" }
    ],

    8: [
        { q: "மாற்கு 8ல் இயேசு எத்தனை பேருக்கு உணவு கொடுத்தார்?", a: ["3000", "4000", "5000", "6000"], c: 1, e: "மாற்கு 8:9" },
        { q: "அந்த நேரத்தில் எத்தனை அப்பங்கள் இருந்தது?", a: ["5", "7", "3", "10"], c: 1, e: "மாற்கு 8:5" },
        { q: "உணவுக்குப் பிறகு எத்தனை கூளங்கள் மீதமிருந்தது?", a: ["5", "7", "12", "3"], c: 1, e: "மாற்கு 8:8" },
        { q: "பரிசேயர்கள் இயேசுவை சோதிக்க என்ன கேட்டனர்?", a: ["உணவு", "அடையாளம்", "பணம்", "போதனை"], c: 1, e: "மாற்கு 8:11" },
        { q: "சிஷ்யர்கள் என்ன மறந்தனர்?", a: ["நீர்", "அப்பம்", "மீன்", "பணம்"], c: 1, e: "மாற்கு 8:14" },
        { q: "பெத்சைதாவில் இயேசு யாரை குணப்படுத்தினார்?", a: ["குருடன்", "காது கேளாதவர்", "முடவன்", "குழந்தை"], c: 0, e: "மாற்கு 8:22" },
        { q: "பேதுரு இயேசுவை யார் என்று கூறினார்?", a: ["தீர்க்கதரிசி", "கிறிஸ்து", "ராஜா", "ஆசிரியர்"], c: 1, e: "மாற்கு 8:29" },
        { q: "யார் இயேசுவை கண்டித்தார்?", a: ["யோவான்", "பேதுரு", "யாக்கோபு", "அந்திரேயா"], c: 1, e: "மாற்கு 8:32" },
        { q: "யேசு பேதுருவிடம் என்ன சொன்னார்?", a: ["போ", "என் பின்னால் சாத்தானே", "நில்", "வாழு"], c: 1, e: "மாற்கு 8:33" },
        { q: "இயேசுவைப் பின்பற்ற என்ன செய்ய வேண்டும்?", a: ["பணம் சம்பாதிக்க", "சிலுவையை எடுத்துக்கொள்", "ஜெபம் மட்டும்", "உபவாசம்"], c: 1, e: "மாற்கு 8:34" }
    ],

    9: [
        { q: "இயேசுவின் உருவமாற்றம் எங்கு நடைபெற்றது?", a: ["வீடு", "மலை", "கடல்", "நகரம்"], c: 1, e: "மாற்கு 9:2" },
        { q: "யார் இயேசுவுடன் தோன்றினர்?", a: ["மோசே, எலியா", "பேதுரு, யாக்கோபு", "ராஜாக்கள்", "யாஜகர்"], c: 0, e: "மாற்கு 9:4" },
        { q: "பேதுரு என்ன சொன்னார்?", a: ["குடிசைகள் கட்டுவோம்", "போவோம்", "நிற்போம்", "ஓடுவோம்"], c: 0, e: "மாற்கு 9:5" },
        { q: "மேகத்திலிருந்து வந்த குரல் என்ன சொன்னது?", a: ["என் மகன்", "என் சேவகர்", "என் ராஜா", "என் நண்பன்"], c: 0, e: "மாற்கு 9:7" },
        { q: "சிஷ்யர்கள் என்ன செய்ய முடியவில்லை?", a: ["ஜெபம்", "பேயை வெளியேற்ற", "நட", "சாப்பிட"], c: 1, e: "மாற்கு 9:18" },
        { q: "எல்லாம் சாத்தியம் எதனால் என்று இயேசு சொன்னார்?", a: ["வலிமை", "நம்பிக்கை", "பணம்", "அறிவு"], c: 1, e: "மாற்கு 9:23" },
        { q: "யார் பெரியவர்?", a: ["ராஜா", "சேவகர்", "பணக்காரர்", "சிஷ்யர்"], c: 1, e: "மாற்கு 9:35" },
        { q: "யேசு எந்த உதாரணத்தை பயன்படுத்தினார்?", a: ["குழந்தை", "மலை", "வீடு", "ராஜா"], c: 0, e: "மாற்கு 9:36" },
        { q: "எதிராக இல்லாதவர் யார்?", a: ["எதிரி", "நம்மோடு இருப்பவர்", "ராஜா", "மக்கள்"], c: 1, e: "மாற்கு 9:40" },
        { q: "நரகம் எப்படிப் விவரிக்கப்படுகிறது?", a: ["இருள்", "அணையாத நெருப்பு", "நீர்", "காற்று"], c: 1, e: "மாற்கு 9:43" }
    ],
    10: [
        { q: "திருமணத்தின் குறித்து இயேசு எந்த முக்கியமான போதனையை வழங்கினார்?", a: ["திருமணம் எளிதில் பிரிக்கலாம்", "தேவன் இணைத்ததை மனிதன் பிரிக்கக்கூடாது", "திருமணம் அவசியமில்லை", "திருமணம் விருப்பமானது"], c: 1, e: "மாற்கு 10:9" },

        { q: "சிறுவர்களை இயேசுவிடம் வர விடாமல் யார் தடுத்தனர்?", a: ["பரிசேயர்கள்", "சிஷ்யர்கள்", "மக்கள்", "யாஜகர்கள்"], c: 1, e: "மாற்கு 10:13" },

        { q: "சிறுவர்களை பற்றி இயேசு எந்த கட்டளையை வழங்கினார்?", a: ["அவர்களை தடுக்க வேண்டும்", "அவர்களை என்னிடத்தில் வர அனுமதிக்க வேண்டும்", "அவர்களை அனுப்பிவிட வேண்டும்", "பின்னர் வர சொல்ல வேண்டும்"], c: 1, e: "மாற்கு 10:14" },

        { q: "ஒரு பணக்கார இளைஞன் இயேசுவிடம் என்ன கேள்வியை கேட்டான்?", a: ["நான் எப்படி பணம் சம்பாதிப்பேன்?", "நித்திய ஜீவனை அடைவது எப்படி?", "நான் எப்படி புகழ் பெறுவேன்?", "நான் எப்படி ராஜாவாகிறேன்?"], c: 1, e: "மாற்கு 10:17" },

        { q: "அந்த இளைஞனுக்கு இயேசு எந்த அறிவுரையை வழங்கினார்?", a: ["உன் செல்வத்தை வைத்துக்கொள்", "எல்லாவற்றையும் விற்று ஏழைகளுக்கு கொடு", "ஒரு வீடு கட்டு", "பயணம் செய்"], c: 1, e: "மாற்கு 10:21" },

        { q: "பணக்காரர்கள் தேவ ராஜ்யத்தில் பிரவேசிப்பது எவ்வளவு கடினம் என்பதை விளக்க இயேசு எந்த உவமையை பயன்படுத்தினார்?", a: ["சிங்கம் ஓடுவது", "ஒட்டகம் ஊசியின் கண்ணில் செல்வது", "பறவை பறப்பது", "நதி ஓடுவது"], c: 1, e: "மாற்கு 10:25" },

        { q: "மனிதரால் முடியாததை யார் செய்ய முடியும் என்று இயேசு கூறினார்?", a: ["மனிதன்", "தேவன்", "ராஜா", "யாஜகர்"], c: 1, e: "மாற்கு 10:27" },

        { q: "மக்களிடையே உண்மையான பெரியவன் யார் என்று இயேசு போதித்தார்?", a: ["ஆட்சியாளர்", "அனைவருக்கும் சேவை செய்பவன்", "பணக்காரன்", "பலவானவன்"], c: 1, e: "மாற்கு 10:43" },

        { q: "பார்த்திமேயு என்றவர் யார் என்று இந்த அதிகாரத்தில் குறிப்பிடப்பட்டுள்ளது?", a: ["ஒரு ராஜா", "ஒரு குருடான பிச்சைக்காரன்", "ஒரு யாஜகர்", "ஒரு சிஷ்யன்"], c: 1, e: "மாற்கு 10:46" },

        { q: "பார்த்திமேயுவுக்கு இயேசு என்ன செய்தார்?", a: ["அவரை புறக்கணித்தார்", "அவருடைய கண்களை குணப்படுத்தினார்", "அவரை அனுப்பிவிட்டார்", "அவருக்கு போதித்தார்"], c: 1, e: "மாற்கு 10:52" }
    ],

    11: [
        { q: "இயேசு வெற்றி நுழைவு செய்த நகரம் எது என்று இந்த அதிகாரத்தில் குறிப்பிடப்பட்டுள்ளது?", a: ["நாசரேத்", "எருசலேம்", "பெத்லகேம்", "கலிலேயா"], c: 1, e: "மாற்கு 11:1" },

        { q: "நகரத்திற்குள் நுழைந்தபோது இயேசு எந்த விலங்கின் மீது சவாரி செய்தார்?", a: ["குதிரை", "கழுதை", "ஒட்டகம்", "ரதம்"], c: 1, e: "மாற்கு 11:7" },

        { q: "மக்கள் இயேசுவை வரவேற்கும்போது என்ன கூச்சலிட்டனர்?", a: ["ஹல்லேலூயா", "ஹோசன்னா", "ஆமென்", "மகிமை"], c: 1, e: "மாற்கு 11:9" },

        { q: "பலன் இல்லாத எந்த மரத்தை இயேசு சபித்தார்?", a: ["ஆலிவ் மரம்", "அத்தி மரம்", "தேங்காய் மரம்", "ஆப்பிள் மரம்"], c: 1, e: "மாற்கு 11:13" },

        { q: "ஆலயத்தில் இயேசு எந்த முக்கியமான செயலினை செய்தார்?", a: ["அமைதியாக ஜெபித்தார்", "ஆலயத்தை சுத்திகரித்தார்", "தூங்கினார்", "அங்கிருந்து வெளியேறினார்"], c: 1, e: "மாற்கு 11:15" },

        { q: "ஆலயம் எவ்வாறு அழைக்கப்பட வேண்டும் என்று இயேசு கூறினார்?", a: ["ராஜாவின் வீடு", "ஜெபத்தின் வீடு", "வணிகத்தின் வீடு", "மக்களின் வீடு"], c: 1, e: "மாற்கு 11:17" },

        { q: "நம்பிக்கையுடன் ஜெபித்தால் என்ன செய்ய முடியும் என்று இயேசு கூறினார்?", a: ["மழையை நிறுத்தலாம்", "மலையை நகர்த்தலாம்", "காற்றை கட்டுப்படுத்தலாம்", "செல்வம் பெறலாம்"], c: 1, e: "மாற்கு 11:23" },

        { q: "ஜெபிக்கும் போது மனிதன் எந்த மனநிலையுடன் இருக்க வேண்டும் என்று இயேசு போதித்தார்?", a: ["பயம்", "நம்பிக்கை", "கோபம்", "சந்தேகம்"], c: 1, e: "மாற்கு 11:24" },

        { q: "ஜெபிக்கும் போது மற்றவர்களை எப்படி நடத்த வேண்டும் என்று இயேசு கூறினார்?", a: ["நியாயம் செய்ய வேண்டும்", "மன்னிக்க வேண்டும்", "புறக்கணிக்க வேண்டும்", "விட்டு விட வேண்டும்"], c: 1, e: "மாற்கு 11:25" },

        { q: "இயேசுவின் அதிகாரத்தை யார் கேள்வி கேட்டனர்?", a: ["யாஜகர்களும் எழுத்தறிவாளர்களும்", "ராஜாக்கள்", "சிஷ்யர்கள்", "ரோமர்"], c: 0, e: "மாற்கு 11:27" }
    ],

    12: [
        { q: "இந்த அதிகாரத்தில் இயேசு கூறிய உவமை எந்த விஷயத்தைப் பற்றியது?", a: ["விதைப்பவன்", "திராட்சத்தோட்டம்", "மகன்", "ராஜா"], c: 1, e: "மாற்கு 12:1" },

        { q: "திராட்சத்தோட்ட உரிமையாளர் அனுப்பிய சேவகர்களை தொழிலாளர்கள் எப்படி நடத்தினர்?", a: ["அவர்களை வரவேற்றனர்", "அவர்களை அடித்து கொன்றனர்", "அவர்களை புறக்கணித்தனர்", "அவர்களுக்கு உதவினர்"], c: 1, e: "மாற்கு 12:5" },

        { q: "கடைசியாக உரிமையாளர் யாரை அனுப்பினார்?", a: ["ஒரு சேவகர்", "தன் மகனை", "ஒரு ராஜாவை", "ஒரு யாஜகரை"], c: 1, e: "மாற்கு 12:6" },

        { q: "வரி செலுத்துவது குறித்து இயேசு எந்த போதனையை வழங்கினார்?", a: ["வரி செலுத்த வேண்டாம்", "ராஜாவிற்கு மட்டும் கொடு", "கைசருக்குரியதை கைசருக்குக் கொடு", "புறக்கணி"], c: 2, e: "மாற்கு 12:17" },

        { q: "புனருத்தானத்தில் திருமண நிலை எப்படி இருக்கும் என்று இயேசு கூறினார்?", a: ["திருமணம் இருக்கும்", "திருமணம் இருக்காது", "விருப்பமானது", "தெரியாது"], c: 1, e: "மாற்கு 12:25" },

        { q: "மிகப்பெரிய கட்டளை எது என்று இயேசு கூறினார்?", a: ["தேவனை நேசி", "பணம் சம்பாதி", "உபவாசம் செய்", "ஜெபம் செய்"], c: 0, e: "மாற்கு 12:30" },

        { q: "இரண்டாவது மிகப்பெரிய கட்டளை எது என்று இயேசு கூறினார்?", a: ["அயலானை நேசி", "எதிரியை வெறுத்து", "உபவாசம் செய்", "வேலை செய்"], c: 0, e: "மாற்கு 12:31" },

        { q: "ஏழை விதவை கொடுத்த காணிக்கை எவ்வளவு?", a: ["அதிக தொகை", "இரண்டு சிறிய நாணயங்கள்", "ஒன்றுமில்லை", "உணவு"], c: 1, e: "மாற்கு 12:42" },

        { q: "அவள் கொடுத்த காணிக்கை ஏன் முக்கியமானதாக கருதப்பட்டது?", a: ["அது பெரிய தொகை", "அவள் தன்னிடம் இருந்த அனைத்தையும் கொடுத்தாள்", "அது பொதுவாக கொடுக்கப்பட்டது", "அது தங்கம்"], c: 1, e: "மாற்கு 12:44" },

        { q: "பணக்காரர்கள் எவ்வாறு காணிக்கை கொடுத்தனர்?", a: ["முழு மனதுடன்", "அவர்களிடம் இருந்த அதிகத்திலிருந்து", "ரகசியமாக", "வலுக்கட்டாயமாக"], c: 1, e: "மாற்கு 12:44" }
    ],

    13: [
        { q: "ஆலயத்தின் எதிர்காலம் பற்றி இயேசு என்ன தீர்க்கதரிசனம் கூறினார்?", a: ["அது வளர்ச்சி அடையும்", "அது முற்றிலும் அழிக்கப்படும்", "அது மாற்றப்படும்", "அது நிலைத்திருக்கும்"], c: 1, e: "மாற்கு 13:2" },

        { q: "போர்களும் போர் செய்திகளும் பற்றி இயேசு என்ன கூறினார்?", a: ["அது முடிவு", "அது ஆரம்பம் மட்டுமே", "அது நிற்கும்", "அது அமைதி"], c: 1, e: "மாற்கு 13:7" },

        { q: "சுவிசேஷம் யாருக்கு அறிவிக்கப்படும் என்று இயேசு கூறினார்?", a: ["இஸ்ரவேலுக்கு மட்டும்", "அனைத்து ஜாதிகளுக்கும்", "ரோமருக்கு மட்டும்", "சிஷ்யர்களுக்கு மட்டும்"], c: 1, e: "மாற்கு 13:10" },

        { q: "அருவருப்பான விஷயம் எந்த இடத்தில் நிற்கும் என்று கூறப்பட்டது?", a: ["கடல்", "பரிசுத்த ஸ்தலம்", "நகரம்", "வீடு"], c: 1, e: "மாற்கு 13:14" },

        { q: "மக்களை ஏமாற்ற யார் எழும்புவார்கள் என்று இயேசு கூறினார்?", a: ["பொய்தீர்க்கதரிசிகள்", "ராஜாக்கள்", "யாஜகர்கள்", "ஆசிரியர்கள்"], c: 0, e: "மாற்கு 13:22" },

        { q: "சூரியன் குறித்து என்ன நடைபெறும் என்று கூறப்பட்டது?", a: ["அது பிரகாசிக்கும்", "அது இருண்டுவிடும்", "அது மறையும்", "அது குளிரும்"], c: 1, e: "மாற்கு 13:24" },

        { q: "மேகங்களில் வல்லமையுடன் வருபவர் யார் என்று கூறப்பட்டது?", a: ["தீர்க்கதரிசிகள்", "மனுஷகுமாரன்", "ராஜாக்கள்", "தூதர்கள்"], c: 1, e: "மாற்கு 13:26" },

        { q: "தேவதூதர்கள் என்ன செய்கிறார்கள் என்று இயேசு கூறினார்?", a: ["நியாயந்தீர்ப்பு செய்கின்றனர்", "தேர்ந்தெடுக்கப்பட்டவர்களைச் சேர்க்கின்றனர்", "அழிக்கின்றனர்", "போதிக்கின்றனர்"], c: 1, e: "மாற்கு 13:27" },

        { q: "அந்த நாளையும் நேரத்தையும் யாரும் அறியமாட்டார்கள் என்று யேசு கூறினார்?", a: ["அனைவரும்", "யாரும் இல்லை", "தூதர்கள் மட்டும்", "தீர்க்கதரிசிகள் மட்டும்"], c: 1, e: "மாற்கு 13:32" },

        { q: "மனிதன் எப்படிப் வாழ வேண்டும் என்று இயேசு அறிவுறுத்தினார்?", a: ["தூங்க வேண்டும்", "எச்சரிக்கையுடன் இருக்க வேண்டும்", "புறக்கணிக்க வேண்டும்", "விட்டு செல்ல வேண்டும்"], c: 1, e: "மாற்கு 13:37" }
    ],

    14: [
        { q: "யார் இயேசுவை வாசனைத் தைலத்தால் அபிஷேகம் செய்தார்?", a: ["மரியா", "ஒரு பெண்", "மார்த்தா", "ராணி"], c: 1, e: "மாற்கு 14:3" },
        { q: "யூதா இயேசுவிடம் என்ன செய்தான்?", a: ["அவரை பின்தொடர்ந்தான்", "அவரை வஞ்சித்தான்", "அவருக்கு உதவினான்", "அவரை புறக்கணித்தான்"], c: 1, e: "மாற்கு 14:10" },
        { q: "இறுதி இராப்போசனத்தில் இயேசு என்ன செய்தார்?", a: ["மீன் உடைத்தார்", "அப்பத்தை உடைத்தார்", "மாமிசம் கொடுத்தார்", "பழம் கொடுத்தார்"], c: 1, e: "மாற்கு 14:22" },
        { q: "பானபாத்திரம் எதை குறிக்கிறது என்று இயேசு கூறினார்?", a: ["நீர்", "உடன்படிக்கையின் இரத்தம்", "திராட்சரசம்", "ஜீவன்"], c: 1, e: "மாற்கு 14:24" },
        { q: "பேதுரு இயேசுவை எத்தனை முறை மறுத்தான்?", a: ["ஒருமுறை", "இருமுறை", "மூன்று முறை", "ஒருபோதும் இல்லை"], c: 2, e: "மாற்கு 14:72" },
        { q: "இயேசு கைது செய்யப்படுவதற்கு முன் எங்கு ஜெபித்தார்?", a: ["ஆலயம்", "கெத்சேமனே தோட்டம்", "கடல்", "வீடு"], c: 1, e: "மாற்கு 14:32" },
        { q: "அவர் எத்தனை முறை ஜெபித்தார்?", a: ["ஒருமுறை", "இருமுறை", "மூன்று முறை", "நான்கு முறை"], c: 2, e: "மாற்கு 14:41" },
        { q: "யூதா இயேசுவை அடையாளம் காட்ட எந்த செயலினைப் பயன்படுத்தினான்?", a: ["கைகுலுக்கல்", "முத்தம்", "சொல்", "சைகை"], c: 1, e: "மாற்கு 14:44" },
        { q: "யார் இயேசுவை விசாரித்தார்?", a: ["ராஜா", "முக்கிய யாஜகர்", "சிஷ்யர்", "சிப்பாய்"], c: 1, e: "மாற்கு 14:60" },
        { q: "பேதுரு மறுத்த பிறகு என்ன செய்தான்?", a: ["சிரித்தான்", "அழுதான்", "போனான்", "தூங்கினான்"], c: 1, e: "மாற்கு 14:72" }
    ],

    15: [
        { q: "யேசு தீர்ப்புக்காக யாரிடம் ஒப்படைக்கப்பட்டார்?", a: ["ஹேரோது", "பிலாத்து", "கைசர்", "யாஜகர்"], c: 1, e: "மாற்கு 15:1" },
        { q: "மக்கள் யேசுவுக்கு பதிலாக யாரை விடுவிக்கத் தேர்ந்தெடுத்தனர்?", a: ["பேதுரு", "பரப்பா", "யோவான்", "யாக்கோபு"], c: 1, e: "மாற்கு 15:11" },
        { q: "சிப்பாய்கள் யேசுவை எப்படி அவமதித்தனர்?", a: ["ராஜாவாக", "சேவகராக", "தீர்க்கதரிசியாக", "ஆசிரியராக"], c: 0, e: "மாற்கு 15:18" },
        { q: "யேசுவின் தலையில் எந்த வகையான கிரீடம் வைக்கப்பட்டது?", a: ["பொன்", "முள்ளுக் கிரீடம்", "வெள்ளி", "இரும்பு"], c: 1, e: "மாற்கு 15:17" },
        { q: "யேசுவின் சிலுவையை சுமக்க யார் கட்டாயப்படுத்தப்பட்டார்?", a: ["பேதுரு", "சைரேனேயான சிமோன்", "யோவான்", "யூதா"], c: 1, e: "மாற்கு 15:21" },
        { q: "யேசு எந்த இடத்தில் சிலுவையில் அறையப்பட்டார்?", a: ["நகரம்", "கொல்கொத்தா", "நாசரேத்", "ஆலயம்"], c: 1, e: "மாற்கு 15:22" },
        { q: "சிலுவையில் இருக்கும்போது யேசு எந்த வார்த்தைகளை கூறினார்?", a: ["என் தேவனே, ஏன் என்னை கைவிட்டாய்?", "என்னை காப்பாற்று", "உதவி செய்", "அப்பா"], c: 0, e: "மாற்கு 15:34" },
        { q: "யேசு இறந்தபோது ஆலயத்திரை என்ன ஆனது?", a: ["எரிந்தது", "இரண்டாக கிழிந்தது", "மறைந்தது", "விழுந்தது"], c: 1, e: "மாற்கு 15:38" },
        { q: "நூற்றாண்டு அதிகாரி யேசுவைப் பற்றி என்ன சொன்னான்?", a: ["அவர் ராஜா", "அவர் தேவனின் குமாரன்", "அவர் தீர்க்கதரிசி", "அவர் மனிதன்"], c: 1, e: "மாற்கு 15:39" },
        { q: "யேசுவை யார் அடக்கம் செய்தார்?", a: ["பேதுரு", "அரிமத்தேயாவின் யோசேப்பு", "யோவான்", "பிலாத்து"], c: 1, e: "மாற்கு 15:43" }
    ],

    16: [
        { q: "பெண்கள் யேசுவின் கல்லறைக்கு எப்போது சென்றனர்?", a: ["இரவு", "அதிகாலை", "மாலை", "நண்பகல்"], c: 1, e: "மாற்கு 16:2" },
        { q: "கல்லறையின் கல் குறித்து அவர்கள் என்ன கண்டனர்?", a: ["மூடப்பட்டது", "நகர்த்தப்பட்டது", "உடைந்தது", "மறைந்தது"], c: 1, e: "மாற்கு 16:4" },
        { q: "தூதன் அவர்களுக்கு என்ன செய்தியை கூறினார்?", a: ["அவர் உயிர்த்தெழுந்தார்", "அவர் தூங்குகிறார்", "அவர் போனார்", "அவர் மறைந்தார்"], c: 0, e: "மாற்கு 16:6" },
        { q: "யேசு உயிர்த்தெழுந்த பிறகு முதலில் யாருக்கு தோன்றினார்?", a: ["பேதுரு", "மரியாள் மக்தலேனா", "யோவான்", "தோமா"], c: 1, e: "மாற்கு 16:9" },
        { q: "இந்த செய்தியை சீஷர்கள் ஆரம்பத்தில் நம்பினார்களா?", a: ["ஆம்", "இல்லை", "பின்னர்", "தெரியாது"], c: 1, e: "மாற்கு 16:11" },
        { q: "யேசு தனது சீஷர்களுக்கு எந்த கட்டளையை வழங்கினார்?", a: ["இங்கே இருங்கள்", "சென்று சுவிசேஷத்தை அறிவியுங்கள்", "ஜெபியுங்கள்", "உபவாசியுங்கள்"], c: 1, e: "மாற்கு 16:15" },
        { q: "நம்புகிறவர்களுடன் என்ன நிகழும் என்று இயேசு கூறினார்?", a: ["அற்புதங்கள் நிகழும்", "பணம் வரும்", "அதிகாரம் வரும்", "புகழ் வரும்"], c: 0, e: "மாற்கு 16:17" },
        { q: "அதன்பின் யேசுவுக்கு என்ன நடந்தது?", a: ["அவர் அங்கேயே இருந்தார்", "அவர் வானத்திற்கு ஏறினார்", "அவர் சென்றார்", "அவர் மறைந்தார்"], c: 1, e: "மாற்கு 16:19" },
        { q: "அவர் தேவனின் எந்த பக்கத்தில் அமர்ந்தார்?", a: ["இடப்பக்கம்", "வலப்பக்கம்", "நடுத்தரம்", "கீழ்"], c: 1, e: "மாற்கு 16:19" },
        { q: "பின்னர் சீஷர்கள் என்ன செய்தனர்?", a: ["அமைதியாக இருந்தனர்", "எங்கும் சுவிசேஷத்தை அறிவித்தனர்", "வீட்டிற்கு சென்றனர்", "தூங்கினர்"], c: 1, e: "மாற்கு 16:20" }
    ]    
            },
            kn: {
                1: [
                    { q: "ಯೇಸು ಎಲ್ಲಿ ಬಾಪ್ತಿಸ್ಮ ಪಡೆದರು?", a: ["ಗಲಿಲಾಯ ಸಮುದ್ರ", "ಜೋರ್ಡಾನ್ ನದಿ", "ಮೃತ ಸಮುದ್ರ", "ನೈಲ್"], c: 1, e: "ಮಾರ್ಕ 1:9 - ಯೋರ್ದನ್ ನದಿಯಲ್ಲಿ ಯೋಹಾನನಿಂದ ಬಾಪ್ತಿಸ್ಮ ಮಾಡಿಸಿಕೊಂಡನು." },
                    { q: "ಅರಣ್ಯದಲ್ಲಿ ಯೇಸುವಿಗೆ ದಾರಿಯನ್ನು ಸಿದ್ಧಪಡಿಸಿದವರು ಯಾರು?", a: ["ಬಾಪ್ತಿಸ್ಮ ಕೊಡುವ ಯೋಹಾನ", "ಎಲೀಯ", "ಮೋಶೆ", "ಯೆಶಾಯ"], c: 0, e: "ಮಾರ್ಕ 1:4 - ಯೋಹಾನನು ಅರಣ್ಯದಲ್ಲಿ ಬಂದು ಬಾಪ್ತಿಸ್ಮ ಮಾಡಿಸುತ್ತಿದ್ದನು." },
                    { q: "ಯೇಸು ಅರಣ್ಯದಲ್ಲಿ ಎಷ್ಟು ದಿನಗಳ ಕಾಲ ಶೋಧಿಸಲ್ಪಟ್ಟರು?", a: ["7 ದಿನಗಳು", "12 ದಿನಗಳು", "40 ದಿನಗಳು", "50 ದಿನಗಳು"], c: 2, e: "ಮಾರ್ಕ 1:13 - ಅವನು ಅರಣ್ಯದಲ್ಲಿ ನಲವತ್ತು ದಿನ ಇದ್ದು ಸೈತಾನನಿಂದ ಶೋಧಿಸಲ್ಪಟ್ಟನು." },
                    { q: "ಸೀಮೋನ ಮತ್ತು ಅಂದ್ರೆಯನಿಗೆ ಯೇಸು ಏನು ಹೇಳಿದರು?", a: ["ಪ್ರಾರ್ಥನೆ ಮಾಡಿ", "ಹೋಗಿಬಿಡಿ", "ಸುಮ್ಮನಿರಿ", "ನನ್ನ ಹಿಂದೆ ಬನ್ನಿರಿ"], c: 3, e: "ಮಾರ್ಕ 1:17 - 'ನನ್ನ ಹಿಂದೆ ಬನ್ನಿರಿ, ನಿಮ್ಮನ್ನು ಮನುಷ್ಯರನ್ನು ಹಿಡಿಯುವವರನ್ನಾಗಿ ಮಾಡುವೆನು' ಅಂದನು." },
                    { q: "ಸೀಮೋನ ಮತ್ತು ಅಂದ್ರೆಯನ ವೃತ್ತಿ ಯಾವುದಾಗಿತ್ತು?", a: ["ರೈತರು", "ಬೆಸ್ತರು (ಮೀನುಗಾರರು)", "ಸುಂಕದವರು", "ಕುರಿಗಾಹಿಗಳು"], c: 1, e: "ಮಾರ್ಕ 1:16 - ಯಾಕಂದರೆ ಅವರು ಬೆಸ್ತರಾಗಿದ್ದರು." },
                    { q: "ಯಾರ ಅತ್ತೆ ಜ್ವರದಿಂದ ಮಲಗಿದ್ದರು?", a: ["ಯೋಹಾನನ ಅತ್ತೆ", "ಸೀಮೋನನ ಅತ್ತೆ", "ಯಾಕೋಬನ ಅತ್ತೆ", "ಫಿಲಿಪ್ಪನ ಅತ್ತೆ"], c: 1, e: "ಮಾರ್ಕ 1:30 - ಸೀಮೋನನ ಅತ್ತೆಯು ಜ್ವರದಿಂದ ಬಿದ್ದಿದ್ದಳು." },
                    { q: "ಬಾಪ್ತಿಸ್ಮ ಕೊಡುವ ಯೋಹಾನ ಯಾವ ಪ್ರಾಣಿಯ ಚರ್ಮದ ಬಟ್ಟೆ ಧರಿಸಿದ್ದನು?", a: ["ಕುರಿ ಚರ್ಮದ", "ಸಿಂಹದ", "ಒಂಟೆ ರೋಮದ", "ನರಿ ಚರ್ಮದ"], c: 2, e: "ಮಾರ್ಕ 1:6 - ಯೋಹಾನನು ಒಂಟೆ ರೋಮದ ಬಟ್ಟೆಯನ್ನು ಧರಿಸಿಕೊಂಡಿದ್ದನು." },
                    { q: "ಯೋಹಾನನು ಅರಣ್ಯದಲ್ಲಿ ಏನು ತಿನ್ನುತ್ತಿದ್ದನು?", a: ["ರೊಟ್ಟಿ", "ಮೀನು", "ಮಿಡತೆ ಮತ್ತು ಕಾಡು ಜೇನು", "ಮನ್ನಾ"], c: 2, e: "ಮಾರ್ಕ 1:6 - ಮಿಡತೆಗಳನ್ನೂ ಕಾಡುಜೇನನ್ನೂ ತಿನ್ನುತ್ತಿದ್ದನು." },
                    { q: "ಯೇಸುವಿನ ಬಾಪ್ತಿಸ್ಮದ ಸಮಯದಲ್ಲಿ ಪವಿತ್ರಾತ್ಮ ಯಾವುದರಂತೆ ಇಳಿದು ಬಂತು?", a: ["ಮೋಡ", "ಬೆಂಕಿ", "ಬೆಳಕು", "ಪಾರಿವಾಳ"], c: 3, e: "ಮಾರ್ಕ 1:10 - ಪವಿತ್ರಾತ್ಮವು ಪಾರಿವಾಳದಂತೆ ತನ್ನ ಮೇಲೆ ಇಳಿದು ಬರುವುದನ್ನು ಕಂಡನು." },
                    { q: "ಜೆಬೆದಾಯನ ಮಕ್ಕಳು ಯಾರು?", a: ["ಪೇತ್ರ ಮತ್ತು ಅಂದ್ರೆಯ", "ಯಾಕೋಬ ಮತ್ತು ಯೋಹಾನ", "ಫಿಲಿಪ್ಪ ಮತ್ತು ತೋಮ", "ಮತ್ತಾಯ ಮತ್ತು ಯೂದ"], c: 1, e: "ಮಾರ್ಕ 1:19 - ಜೆಬೆದಾಯನ ಮಗನಾದ ಯಾಕೋಬನನ್ನೂ ಅವನ ತಮ್ಮನಾದ ಯೋಹಾನನನ್ನೂ ಕಂಡನು." }
                ],
    2: [
        { q: "ಪಕ್ಷಾಘಾತಗ್ರಸ್ತನನ್ನು ಯೇಸುವಿನ ಬಳಿಗೆ ಎಷ್ಟು ಜನರು ತಂದರು?", a: ["2", "3", "4", "5"], c: 2, e: "ಮಾರ್ಕ 2:3" },
        { q: "ಅವನನ್ನು ಮನೆಯೊಳಗೆ ಹೇಗೆ ಇಳಿಸಿದರು?", a: ["ಬಾಗಿಲಿಂದ", "ಕಿಟಕಿಯಿಂದ", "ಮನೆ ಮೇಲ್ಛಾವಣಿಯಿಂದ", "ಗೋಡೆಯಿಂದ"], c: 2, e: "ಮಾರ್ಕ 2:4" },
        { q: "ಯೇಸು ಮೊದಲಿಗೆ ಏನು ಹೇಳಿದರು?", a: ["ಎದ್ದೇಳು", "ಪಾಪ ಕ್ಷಮಿಸಲಾಗಿದೆ", "ಹೋಗು", "ನೀನು ಗುಣವಾಯಿತು"], c: 1, e: "ಮಾರ್ಕ 2:5" },
        { q: "ಲೆವಿ ಯಾರ ಮಗನು?", a: ["ಪೇತ್ರ", "ಅಲ್ಫಾಯ", "ಯಾಕೋಬ", "ಯೋಹಾನ"], c: 1, e: "ಮಾರ್ಕ 2:14" },
        { q: "ಯೇಸು ಯಾರ ಜೊತೆ ಊಟ ಮಾಡಿದರು?", a: ["ಪಾಪಿಗಳು", "ರಾಜರು", "ಯಾಜಕರು", "ಫರಿಸಾಯರು"], c: 0, e: "ಮಾರ್ಕ 2:16" },
        { q: "ಯೇಸು ಯಾರನ್ನು ಕರೆಯಲು ಬಂದರು?", a: ["ನೀತಿವಂತರು", "ಪಾಪಿಗಳು", "ಧನಿಕರು", "ಬಡವರು"], c: 1, e: "ಮಾರ್ಕ 2:17" },
        { q: "ಶಬ್ಬತ್ ದಿನದ ಸ್ವಾಮಿ ಯಾರು?", a: ["ದೇವರು", "ಮಾನವಕುಮಾರ", "ಯಾಜಕ", "ರಾಜ"], c: 1, e: "ಮಾರ್ಕ 2:28" },
        { q: "ಹೊಸ ದ್ರಾಕ್ಷಾರಸ ಹಳೆಯ ಪಾತ್ರೆಯಲ್ಲಿ ಹಾಕಿದರೆ?", a: ["ಸರಿ", "ಒಡೆಯುತ್ತದೆ", "ಬದಲಾಗುತ್ತದೆ", "ಏನೂ ಆಗುವುದಿಲ್ಲ"], c: 1, e: "ಮಾರ್ಕ 2:22" },
        { q: "ಶಿಷ್ಯರು ಏನು ಮಾಡುತ್ತಿದ್ದರು?", a: ["ನಿದ್ರೆ", "ಧಾನ್ಯ ಕೀಳುವುದು", "ಹಾಡುವುದು", "ನಡೆಯುವುದು"], c: 1, e: "ಮಾರ್ಕ 2:23" },
        { q: "ಯೇಸು ಪಾಪಗಳನ್ನು ಕ್ಷಮಿಸುವ ಅಧಿಕಾರ ಯಾರಿಗೆ ಇದೆ ಎಂದರು?", a: ["ಯಾಜಕರು", "ದೇವರು ಮಾತ್ರ", "ಜನರು", "ರಾಜರು"], c: 1, e: "ಮಾರ್ಕ 2:7" }
    ],

    3: [
        { q: "ಒಣಗಿದ ಕೈ ಇರುವವನು ಎಲ್ಲಿದ್ದನು?", a: ["ಮನೆ", "ಸಭಾಗೃಹ", "ಪರ್ವತ", "ಸಮುದ್ರ"], c: 1, e: "ಮಾರ್ಕ 3:1" },
        { q: "ಯೇಸು ಎಷ್ಟು ಅಪೋಸ್ತಲರನ್ನು ಆಯ್ಕೆ ಮಾಡಿದರು?", a: ["10", "11", "12", "13"], c: 2, e: "ಮಾರ್ಕ 3:14" },
        { q: "ಯೇಸುವನ್ನು ಯಾರು ಬೆಲ್ಜೆಬೂಲ್ ಹಿಡಿದಿದ್ದಾನೆ ಎಂದರು?", a: ["ಫರಿಸಾಯರು", "ಶಿಷ್ಯರು", "ಜನರು", "ಯಾಜಕರು"], c: 0, e: "ಮಾರ್ಕ 3:22" },
        { q: "ವಿಭಜಿತ ಮನೆ ಏನಾಗುತ್ತದೆ?", a: ["ಬಲವಾಗುತ್ತದೆ", "ನಿಲ್ಲುವುದಿಲ್ಲ", "ಬೆಳೆಯುತ್ತದೆ", "ರಕ್ಷಿತವಾಗುತ್ತದೆ"], c: 1, e: "ಮಾರ್ಕ 3:25" },
        { q: "ಯೇಸುವಿನ ಸಹೋದರರು ಯಾರು?", a: ["ಕುಟುಂಬ", "ಶಿಷ್ಯರು", "ದೇವರ ಇಚ್ಛೆ ಮಾಡುವವರು", "ಪಾಪಿಗಳು"], c: 2, e: "ಮಾರ್ಕ 3:35" },
        { q: "ಕ್ಷಮಿಸಲಾಗದ ಪಾಪ ಯಾವುದು?", a: ["ಕಳ್ಳತನ", "ಹತ್ಯೆ", "ಪವಿತ್ರಾತ್ಮ ವಿರೋಧ", "ಸುಳ್ಳು"], c: 2, e: "ಮಾರ್ಕ 3:29" },
        { q: "ಯೇಸು ಎಲ್ಲಿ ಹೋದರು?", a: ["ಮನೆ", "ಪರ್ವತ", "ಸಮುದ್ರ", "ನಗರ"], c: 1, e: "ಮಾರ್ಕ 3:13" },
        { q: "ಸೀಮೋನಿಗೆ ನೀಡಿದ ಹೆಸರು?", a: ["ಪೌಲ", "ಪೇತ್ರ", "ಯೋಹಾನ", "ಮತ್ತಾಯ"], c: 1, e: "ಮಾರ್ಕ 3:16" },
        { q: "ಜೆಬೆದಾಯನ ಮಕ್ಕಳು?", a: ["ಪೇತ್ರ ಮತ್ತು ಅಂದ್ರೇಯ", "ಯಾಕೋಬ ಮತ್ತು ಯೋಹಾನ", "ಫಿಲಿಪ್ಪ ಮತ್ತು ತೋಮ", "ಮತ್ತಾಯ ಮತ್ತು ಯೂದ"], c: 1, e: "ಮಾರ್ಕ 3:17" },
        { q: "ಅವರಿಗೆ ನೀಡಿದ ಹೆಸರು?", a: ["ಗುಡುಗಿನ ಮಕ್ಕಳು", "ಶಾಂತಿಯ ಮಕ್ಕಳು", "ಬೆಳಕಿನ ಮಕ್ಕಳು", "ಸತ್ಯದ ಮಕ್ಕಳು"], c: 0, e: "ಮಾರ್ಕ 3:17" }
    ],
    4: [
        { q: "ಮಾರ್ಕ 4ನೇ ಅಧ್ಯಾಯದಲ್ಲಿ ಯೇಸು ಯಾವ ಉಪಮೆಯಿಂದ ತನ್ನ ಬೋಧನೆಯನ್ನು ಆರಂಭಿಸುತ್ತಾನೆ?", a: ["ಒಳ್ಳೆಯ ಸಮಾರ್ಯನ ಉಪಮೆ", "ಬಿತ್ತುವವನ ಉಪಮೆ", "ತಪ್ಪಿದ ಮಗನ ಉಪಮೆ", "ಸಾಸಿವೆ ಬೀಜದ ಉಪಮೆ"], c: 1, e: "ಮಾರ್ಕ 4:3" },

        { q: "ಬಿತ್ತುವವನ ಉಪಮೆಯಲ್ಲಿ ಕೆಲವು ಬೀಜಗಳು ಎಲ್ಲಿಗೆ ಬಿದ್ದು ಹಕ್ಕಿಗಳಿಂದ ತಿನ್ನಲ್ಪಟ್ಟವು?", a: ["ಕಲ್ಲಿನ ಮಣ್ಣು", "ಮಾರ್ಗದ ಮೇಲೆ", "ಮೂಳೆಗಳಲ್ಲಿ", "ಒಳ್ಳೆಯ ಮಣ್ಣು"], c: 1, e: "ಮಾರ್ಕ 4:4" },

        { q: "ಕಲ್ಲಿನ ಮಣ್ಣಿನಲ್ಲಿ ಬಿದ್ದ ಬೀಜಗಳು ಬೇಗ ಒಣಗಲು ಮುಖ್ಯ ಕಾರಣ ಏನು?", a: ["ನೀರಿಲ್ಲದಿರುವುದು", "ಮಣ್ಣಿನ ಆಳದ ಕೊರತೆ", "ಬೆಳಕಿನ ಕೊರತೆ", "ಗಾಳಿಯ ಕೊರತೆ"], c: 1, e: "ಮಾರ್ಕ 4:5" },

        { q: "ಬಿತ್ತುವವನ ಉಪಮೆಯಲ್ಲಿ ಗಿಡಗಳನ್ನು ನಿಗ್ರಹಿಸಿದವು ಯಾವುವು?", a: ["ಗಾಳಿ", "ಮಳೆ", "ಮೂಳೆಗಳು", "ಹಕ್ಕಿಗಳು"], c: 2, e: "ಮಾರ್ಕ 4:7" },

        { q: "ಯಾವ ಮಣ್ಣಿನಲ್ಲಿ ಬಿದ್ದ ಬೀಜಗಳು ಉತ್ತಮ ಫಲವನ್ನು ತಂದವು?", a: ["ಮಾರ್ಗ", "ಕಲ್ಲಿನ ಮಣ್ಣು", "ಒಳ್ಳೆಯ ಮಣ್ಣು", "ಮೂಳೆಗಳು"], c: 2, e: "ಮಾರ್ಕ 4:8" },

        { q: "ಗಾಳಿ ಮತ್ತು ಸಮುದ್ರವನ್ನು ಯೇಸು ಯಾವ ಘಟನೆಯಲ್ಲಿ ಶಾಂತಗೊಳಿಸಿದನು?", a: ["ಅವನು ಪ್ರಾರ್ಥಿಸುತ್ತಿದ್ದಾಗ", "ಅವನು ನೌಕೆಯಲ್ಲಿ ಇದ್ದಾಗ", "ಅವನು ಪರ್ವತದಲ್ಲಿ ಇದ್ದಾಗ", "ಅವನು ನಗರದಲ್ಲಿ ಇದ್ದಾಗ"], c: 1, e: "ಮಾರ್ಕ 4:39" },

        { q: "ಗಾಳಿ ಮತ್ತು ಅಲೆಗಳನ್ನು ಶಾಂತಗೊಳಿಸಲು ಯೇಸು ಸಮುದ್ರಕ್ಕೆ ಏನು ಹೇಳಿದರು?", a: ["ನಿಲ್ಲು", "ಶಾಂತವಾಗಿರು", "ಮೌನವಾಗಿರು, ಶಾಂತವಾಗಿರು", "ಹೋಗಿಬಿಡು"], c: 2, e: "ಮಾರ್ಕ 4:39" },

        { q: "ಈ ಅದ್ಭುತವನ್ನು ಕಂಡ ನಂತರ ಶಿಷ್ಯರು ಹೇಗೆ ಪ್ರತಿಕ್ರಿಯಿಸಿದರು?", a: ["ಅವರು ಸಂತೋಷಪಟ್ಟರು", "ಅವರು ಭಯಪಟ್ಟರು", "ಅವರು ಕೋಪಗೊಂಡರು", "ಅವರು ನಿದ್ರಿಸಿದರು"], c: 1, e: "ಮಾರ್ಕ 4:41" },

        { q: "ಯೇಸು ದೀಪದ ಉಪಮೆಯಲ್ಲಿ ಯಾವ ಸತ್ಯವನ್ನು ತಿಳಿಸಲು ಪ್ರಯತ್ನಿಸಿದರು?", a: ["ಬೆಳಕು ಅಗತ್ಯವಿದೆ", "ಸತ್ಯವನ್ನು ಮರೆಯಲು ಸಾಧ್ಯವಿಲ್ಲ", "ಮನೆ ಮುಖ್ಯ", "ನಿಯಮ ಮುಖ್ಯ"], c: 1, e: "ಮಾರ್ಕ 4:22" },

        { q: "ಸಾಸಿವೆ ಬೀಜದ ಉಪಮೆಯಲ್ಲಿ ಅದು ಯಾವ ರೀತಿಯ ಗಿಡವಾಗಿ ಬೆಳೆಯುತ್ತದೆ?", a: ["ಮರ", "ದೊಡ್ಡ ಗಿಡ", "ಹೂವು", "ಹುಲ್ಲು"], c: 1, e: "ಮಾರ್ಕ 4:32" }
    ],

    5: [
        { q: "ಯೇಸು ದೆವ್ವ ಹಿಡಿದವನನ್ನು ಯಾವ ಸ್ಥಳದಲ್ಲಿ ಭೇಟಿಯಾದನು?", a: ["ಮನೆ", "ಸಮಾಧಿಗಳ ನಡುವೆ", "ಪರ್ವತದಲ್ಲಿ", "ಸಮುದ್ರದ ಬಳಿ"], c: 1, e: "ಮಾರ್ಕ 5:2" },

        { q: "ದೆವ್ವ ಹಿಡಿದವನೊಳಗಿನ ಆತ್ಮವು ತನ್ನ ಹೆಸರನ್ನು ಏನೆಂದು ಹೇಳಿತು?", a: ["ಸೈತಾನ", "ಲೀಜಿಯನ್", "ಬೆಲ್ಜೆಬೂಲ್", "ಆತ್ಮ"], c: 1, e: "ಮಾರ್ಕ 5:9" },

        { q: "ಯೇಸು ಹೊರಹಾಕಿದ ದೆವ್ವಗಳು ಯಾವ ಪ್ರಾಣಿಗಳೊಳಗೆ ಪ್ರವೇಶಿಸಿದವು?", a: ["ಕುದುರೆಗಳು", "ಹಂದಿಗಳು", "ಒಂಟೆಗಳು", "ಮೇಕೆಗಳು"], c: 1, e: "ಮಾರ್ಕ 5:13" },

        { q: "ದೆವ್ವಗಳು ಪ್ರವೇಶಿಸಿದ ನಂತರ ಹಂದಿಗಳಿಗೆ ಏನಾಯಿತು?", a: ["ಅವು ಓಡಿದವು", "ಅವು ಸಮುದ್ರದಲ್ಲಿ ಬಿದ್ದು ಸತ್ತವು", "ಅವು ಮಲಗಿದವು", "ಅವು ನಗರಕ್ಕೆ ಹೋದವು"], c: 1, e: "ಮಾರ್ಕ 5:13" },

        { q: "ಯಾವ ಮಹಿಳೆ ಯೇಸುವಿನ ಬಟ್ಟೆಯನ್ನು ಮುಟ್ಟಿದಾಗ ಗುಣವಾಯಿತು?", a: ["ಮರಿಯ", "ರಕ್ತಸ್ರಾವದ ಮಹಿಳೆ", "ಮಾರ್ಥಾ", "ಸೇವಕಿ"], c: 1, e: "ಮಾರ್ಕ 5:27" },

        { q: "ಆ ಮಹಿಳೆ ಎಷ್ಟು ವರ್ಷಗಳಿಂದ ಕಾಯಿಲೆಯಿಂದ ಬಳಲುತ್ತಿದ್ದಳು?", a: ["5 ವರ್ಷ", "10 ವರ್ಷ", "12 ವರ್ಷ", "20 ವರ್ಷ"], c: 2, e: "ಮಾರ್ಕ 5:25" },

        { q: "ಜೈರಸ್ ಎಂಬವನು ಯಾವ ಹುದ್ದೆಯಲ್ಲಿ ಇದ್ದನು?", a: ["ರಾಜ", "ಸಭಾಧ್ಯಕ್ಷ", "ಕೃಷಿಕ", "ಯಾಜಕ"], c: 1, e: "ಮಾರ್ಕ 5:22" },

        { q: "ಜೈರಸನ ಮಗಳಿಗೆ ಏನಾಯಿತು?", a: ["ಅವಳು ಅಸ್ವಸ್ಥಳಾಗಿದ್ದಳು", "ಅವಳು ಸತ್ತಳು", "ಅವಳು ಗುಣವಾಯಿತು", "ಅವಳು ಕಾಣೆಯಾಗಿದ್ದಳು"], c: 1, e: "ಮಾರ್ಕ 5:35" },

        { q: "ಮಗಳನ್ನು ಜೀವಂತಗೊಳಿಸುವಾಗ ಯೇಸು ಯಾವ ಮಾತುಗಳನ್ನು ಹೇಳಿದರು?", a: ["ಎದ್ದು ಬಾ", "ತಲಿತಾ ಕೂಮಿ", "ನಡೆ", "ಬಾಳು"], c: 1, e: "ಮಾರ್ಕ 5:41" },

        { q: "ಈ ಅದ್ಭುತವನ್ನು ಕಂಡ ಜನರು ಹೇಗೆ ಪ್ರತಿಕ್ರಿಯಿಸಿದರು?", a: ["ಭಯಪಟ್ಟರು", "ಆಶ್ಚರ್ಯಪಟ್ಟರು", "ಕೋಪಗೊಂಡರು", "ನಗಿದರು"], c: 1, e: "ಮಾರ್ಕ 5:42" }
    ],

    6: [
        { q: "ಯೇಸು ತನ್ನ ಸ್ವಗ್ರಾಮದಲ್ಲಿ ಯಾವ ಸ್ಥಳದಲ್ಲಿ ತಿರಸ್ಕೃತನಾದನು?", a: ["ಯೆರೂಸಲೇಮ್", "ನಜರೇತ್", "ಬೆತ್ಲೆಹೆಮ್", "ಕಪೆರ್ನಹೂಮ್"], c: 1, e: "ಮಾರ್ಕ 6:1" },

        { q: "ಬಾಪ್ತಿಸ್ಮ ಕೊಡುವ ಯೋಹಾನನನ್ನು ಕೊಲ್ಲುವ ಆದೇಶವನ್ನು ಯಾರು ನೀಡಿದರು?", a: ["ಪೀಲಾತ", "ಹೇರೋದ", "ಫರಿಸಾಯರು", "ರೋಮರು"], c: 1, e: "ಮಾರ್ಕ 6:27" },

        { q: "ಯೋಹಾನನ ತಲೆಯನ್ನು ಕೇಳಿದವರು ಯಾರು?", a: ["ರಾಣಿ", "ಹೇರೋದಿಯ ಮಗಳು", "ಸೇವಕಿ", "ಶಿಷ್ಯ"], c: 1, e: "ಮಾರ್ಕ 6:22" },

        { q: "ಐದು ಸಾವಿರ ಜನರಿಗೆ ಆಹಾರ ನೀಡುವಾಗ ಯೇಸುವಿಗೆ ಎಷ್ಟು ರೊಟ್ಟಿಗಳು ಇದ್ದವು?", a: ["3", "5", "7", "10"], c: 1, e: "ಮಾರ್ಕ 6:38" },

        { q: "ಆ ಸಂದರ್ಭದಲ್ಲಿ ಎಷ್ಟು ಮೀನುಗಳು ಇದ್ದವು?", a: ["1", "2", "3", "4"], c: 1, e: "ಮಾರ್ಕ 6:38" },

        { q: "ಯೇಸು ಎಷ್ಟು ಜನರಿಗೆ ಆಹಾರ ನೀಡಿದರು?", a: ["3000", "4000", "5000", "6000"], c: 2, e: "ಮಾರ್ಕ 6:44" },

        { q: "ಆಹಾರ ನಂತರ ಎಷ್ಟು ಬುಟ್ಟಿಗಳು ಉಳಿದವು?", a: ["5", "7", "12", "20"], c: 2, e: "ಮಾರ್ಕ 6:43" },

        { q: "ಯೇಸು ಯಾವ ಅದ್ಭುತದಲ್ಲಿ ನೀರಿನ ಮೇಲೆ ನಡೆದನು?", a: ["ಪ್ರಾರ್ಥನೆಯ ಸಮಯದಲ್ಲಿ", "ಶಿಷ್ಯರು ನೌಕೆಯಲ್ಲಿ ಇದ್ದಾಗ", "ಪರ್ವತದಲ್ಲಿ", "ನಗರದಲ್ಲಿ"], c: 1, e: "ಮಾರ್ಕ 6:48" },

        { q: "ಯೇಸುವನ್ನು ನೋಡಿ ಶಿಷ್ಯರು ಏನು ಭಾವಿಸಿದರು?", a: ["ದೇವದೂತ", "ಭೂತ", "ಮಾನವ", "ಪ್ರವಾದಿ"], c: 1, e: "ಮಾರ್ಕ 6:49" },

        { q: "ಜನರು ಯೇಸುವಿನ ಯಾವ ಭಾಗವನ್ನು ಮುಟ್ಟಿದಾಗ ಗುಣವಾದರು?", a: ["ಕೈ", "ಬಟ್ಟೆಯ ಅಂಚು", "ತಲೆ", "ಪಾದ"], c: 1, e: "ಮಾರ್ಕ 6:56" }
    ],

    7: [
        { q: "ಫರಿಸಾಯರು ಯೇಸುವಿನ ಶಿಷ್ಯರ ಬಗ್ಗೆ ಯಾವ ವಿಷಯದಲ್ಲಿ ಪ್ರಶ್ನಿಸಿದರು?", a: ["ಉಪವಾಸ", "ಕೈ ತೊಳೆಯದಿರುವುದು", "ಪ್ರಾರ್ಥನೆ", "ಆಹಾರ"], c: 1, e: "ಮಾರ್ಕ 7:5" },

        { q: "ಯೇಸುವಿನ ಪ್ರಕಾರ ಮನುಷ್ಯನನ್ನು ಅಶುದ್ಧ ಮಾಡುವದು ಯಾವುದು?", a: ["ಆಹಾರ", "ಹೊರಗಿನದ್ದು", "ಹೃದಯದಿಂದ ಬರುವದು", "ನೀರು"], c: 2, e: "ಮಾರ್ಕ 7:15" },

        { q: "ಯೇಸು ಯಾವ ಮಹಿಳೆಯ ಮಗಳನ್ನು ಗುಣಪಡಿಸಿದರು?", a: ["ಯೆಹೂದ್ಯ ಮಹಿಳೆ", "ಗ್ರೀಕ್ ಸಿರಿಯೋಫೀನೀಷಿಯನ್ ಮಹಿಳೆ", "ರಾಣಿ", "ಸೇವಕಿ"], c: 1, e: "ಮಾರ್ಕ 7:26" },

        { q: "ಯೇಸು ಕಿವುಡನನ್ನು ಗುಣಪಡಿಸುವಾಗ ಯಾವ ಪದವನ್ನು ಹೇಳಿದರು?", a: ["ತಲಿತಾ ಕೂಮಿ", "ಎಫ್ಫಥಾ", "ಎಲೋಯಿ", "ಹೋಸನ್ನಾ"], c: 1, e: "ಮಾರ್ಕ 7:34" },

        { q: "‘ಎಫ್ಫಥಾ’ ಎಂಬ ಪದದ ಅರ್ಥ ಏನು?", a: ["ತೆರೆ", "ನಿಲ್ಲು", "ಹೋಗು", "ಬಾಳು"], c: 0, e: "ಮಾರ್ಕ 7:34" },

        { q: "ಯೇಸುವಿನ ಅದ್ಭುತಗಳನ್ನು ನೋಡಿ ಜನರು ಹೇಗೆ ಪ್ರತಿಕ್ರಿಯಿಸಿದರು?", a: ["ಭಯ", "ಆಶ್ಚರ್ಯ", "ಕೋಪ", "ನಿಶ್ಶಬ್ದ"], c: 1, e: "ಮಾರ್ಕ 7:37" },

        { q: "ಯೇಸು ಯಾವ ಸಂಪ್ರದಾಯಗಳನ್ನು ಟೀಕಿಸಿದರು?", a: ["ದೇವರ", "ಮನುಷ್ಯರ", "ರಾಜರ", "ಯಾಜಕರ"], c: 1, e: "ಮಾರ್ಕ 7:8" },

        { q: "ಹೃದಯದಿಂದ ಯಾವವು ಬರುತ್ತವೆ ಎಂದು ಯೇಸು ಹೇಳಿದರು?", a: ["ಒಳ್ಳೆಯವು ಮಾತ್ರ", "ಕೆಟ್ಟವು", "ಬೆಳಕು", "ಶಾಂತಿ"], c: 1, e: "ಮಾರ್ಕ 7:21" },

        { q: "ಯೇಸು ಹೇಳಿದಂತೆ ಹೊರಗಿನ ಆಹಾರ ಮನುಷ್ಯನನ್ನು ಅಶುದ್ಧಗೊಳಿಸಬಹುದೇ?", a: ["ಹೌದು", "ಇಲ್ಲ", "ಕೆಲವೊಮ್ಮೆ", "ತಿಳಿದಿಲ್ಲ"], c: 1, e: "ಮಾರ್ಕ 7:18" },

        { q: "ಯೇಸು ಯಾವ ಭಾಗದಿಂದ ಬರುವುದನ್ನು ಅಶುದ್ಧತೆ ಎಂದು ಹೇಳಿದರು?", a: ["ದೇಹ", "ಹೃದಯ", "ಮನೆ", "ನಗರ"], c: 1, e: "ಮಾರ್ಕ 7:20" }
    ],

    8: [
        { q: "ಮಾರ್ಕ 8ರಲ್ಲಿ ಯೇಸು ಎಷ್ಟು ಜನರಿಗೆ ಆಹಾರ ನೀಡಿದನು?", a: ["3000", "4000", "5000", "6000"], c: 1, e: "ಮಾರ್ಕ 8:9" },

        { q: "ಈ ಅದ್ಭುತದಲ್ಲಿ ಎಷ್ಟು ರೊಟ್ಟಿಗಳು ಇದ್ದವು?", a: ["5", "7", "3", "10"], c: 1, e: "ಮಾರ್ಕ 8:5" },

        { q: "ಆಹಾರದ ನಂತರ ಎಷ್ಟು ಬುಟ್ಟಿಗಳು ಉಳಿದವು?", a: ["5", "7", "12", "3"], c: 1, e: "ಮಾರ್ಕ 8:8" },

        { q: "ಫರಿಸಾಯರು ಯೇಸುವನ್ನು ಪರೀಕ್ಷಿಸಲು ಏನು ಕೇಳಿದರು?", a: ["ಆಹಾರ", "ಸ್ವರ್ಗದಿಂದ ಗುರುತು", "ಹಣ", "ಬೋಧನೆ"], c: 1, e: "ಮಾರ್ಕ 8:11" },

        { q: "ಶಿಷ್ಯರು ಯಾವ ವಿಷಯವನ್ನು ಮರೆತಿದ್ದರು?", a: ["ನೀರು", "ರೊಟ್ಟಿ", "ಮೀನು", "ಹಣ"], c: 1, e: "ಮಾರ್ಕ 8:14" },

        { q: "ಯೇಸು ಬೆತ್ಸೈದದಲ್ಲಿ ಯಾರನ್ನು ಗುಣಪಡಿಸಿದರು?", a: ["ಕುರುಡನನ್ನು", "ಕಿವುಡನನ್ನು", "ಪಕ್ಷಾಘಾತನನ್ನು", "ಮಗುವನ್ನು"], c: 0, e: "ಮಾರ್ಕ 8:22" },

        { q: "ಪೇತ್ರನು ಯೇಸುವನ್ನು ಯಾರು ಎಂದು ಒಪ್ಪಿಕೊಂಡನು?", a: ["ಪ್ರವಾದಿ", "ಕ್ರಿಸ್ತ", "ರಾಜ", "ಗುರು"], c: 1, e: "ಮಾರ್ಕ 8:29" },

        { q: "ಯಾರು ಯೇಸುವನ್ನು ತಿರಸ್ಕರಿಸಿದರು?", a: ["ಯೋಹಾನ", "ಪೇತ್ರ", "ಯಾಕೋಬ", "ಅಂದ್ರೇಯ"], c: 1, e: "ಮಾರ್ಕ 8:32" },

        { q: "ಯೇಸು ಪೇತ್ರನಿಗೆ ಯಾವ ಮಾತು ಹೇಳಿದರು?", a: ["ಹೋಗು", "ನನ್ನ ಹಿಂದೆ ಹೋಗು ಸೈತಾನ", "ನಿಲ್ಲು", "ಬಾಳು"], c: 1, e: "ಮಾರ್ಕ 8:33" },

        { q: "ಯೇಸುವನ್ನು ಅನುಸರಿಸಲು ಮನುಷ್ಯನು ಏನು ಮಾಡಬೇಕು?", a: ["ಹಣ ಗಳಿಸಬೇಕು", "ಕ್ರೂಶನ್ನು ಹೊತ್ತುಕೊಳ್ಳಬೇಕು", "ಪ್ರಾರ್ಥನೆ ಮಾತ್ರ", "ಉಪವಾಸ"], c: 1, e: "ಮಾರ್ಕ 8:34" }
    ],
    9: [
        { q: "ಯೇಸುವಿನ ರೂಪಾಂತರವು ಯಾವ ಸ್ಥಳದಲ್ಲಿ ಅವನ ಶಿಷ್ಯರ ಮುಂದೆ ಸಂಭವಿಸಿತು?", a: ["ಮನೆ", "ಪರ್ವತ", "ಸಮುದ್ರ", "ನಗರ"], c: 1, e: "ಮಾರ್ಕ 9:2" },

        { q: "ರೂಪಾಂತರದ ಸಮಯದಲ್ಲಿ ಯೇಸುವಿನ ಜೊತೆಗೆ ಯಾವ ಹಳೆಯ ಒಡಂಬಡಿಕೆಯ ವ್ಯಕ್ತಿಗಳು ಕಾಣಿಸಿಕೊಂಡರು?", a: ["ಅಬ್ರಹಾಮ ಮತ್ತು ಇಸಾಕ್", "ಮೋಶೆ ಮತ್ತು ಎಲೀಯ", "ದಾವೀದ ಮತ್ತು ಸೊಲೊಮೋನ", "ಯೆಶಾಯ ಮತ್ತು ಯೆರೇಮಿಯಾ"], c: 1, e: "ಮಾರ್ಕ 9:4" },

        { q: "ರೂಪಾಂತರವನ್ನು ಕಂಡಾಗ ಪೇತ್ರನು ಯಾವ ಸಲಹೆಯನ್ನು ನೀಡಿದನು?", a: ["ನಾವು ಹೋಗೋಣ", "ಮೂರು ಗುಡಾರಗಳನ್ನು ಕಟ್ಟೋಣ", "ನಾವು ಪ್ರಾರ್ಥಿಸೋಣ", "ನಾವು ಮರೆಮಾಡಿಕೊಳ್ಳೋಣ"], c: 1, e: "ಮಾರ್ಕ 9:5" },

        { q: "ಮೋಡದಿಂದ ಬಂದ ಧ್ವನಿ ಯೇಸುವಿನ ಬಗ್ಗೆ ಏನು ಹೇಳಿತು?", a: ["ಇವನು ನನ್ನ ಸೇವಕನು", "ಇವನು ನನ್ನ ಪ್ರಿಯ ಪುತ್ರನು", "ಇವನು ನನ್ನ ಪ್ರವಾದಿ", "ಇವನು ನನ್ನ ರಾಜನು"], c: 1, e: "ಮಾರ್ಕ 9:7" },

        { q: "ಯೇಸು ಬಂದಾಗ ಶಿಷ್ಯರು ಯಾವ ಸಮಸ್ಯೆಯನ್ನು ಪರಿಹರಿಸಲು ವಿಫಲರಾದರು?", a: ["ಕುರುಡನನ್ನು ಗುಣಪಡಿಸುವುದು", "ದೆವ್ವವನ್ನು ಹೊರಹಾಕುವುದು", "ಜನರಿಗೆ ಆಹಾರ ನೀಡುವುದು", "ಗಾಳಿಯನ್ನು ನಿಲ್ಲಿಸುವುದು"], c: 1, e: "ಮಾರ್ಕ 9:18" },

        { q: "ಎಲ್ಲವೂ ಸಾಧ್ಯವಾಗಲು ಯೇಸು ಯಾವದನ್ನು ಮುಖ್ಯವೆಂದು ಹೇಳಿದರು?", a: ["ಶಕ್ತಿ", "ನಂಬಿಕೆ", "ಹಣ", "ಜ್ಞಾನ"], c: 1, e: "ಮಾರ್ಕ 9:23" },

        { q: "ಯೇಸುವಿನ ಪ್ರಕಾರ ಯಾರು ಮಹಾನ್ ಎಂದು ಪರಿಗಣಿಸಲಾಗುತ್ತಾರೆ?", a: ["ಧನಿಕರು", "ಎಲ್ಲರ ಸೇವಕ", "ಬಲಿಷ್ಠರು", "ಹಿರಿಯರು"], c: 1, e: "ಮಾರ್ಕ 9:35" },

        { q: "ವಿನಯವನ್ನು ಬೋಧಿಸಲು ಯೇಸು ಯಾವ ಉದಾಹರಣೆಯನ್ನು ಬಳಸಿದರು?", a: ["ರಾಜ", "ಮಗು", "ಮನೆ", "ಪರ್ವತ"], c: 1, e: "ಮಾರ್ಕ 9:36" },

        { q: "ನಮ್ಮ ವಿರುದ್ಧದಲ್ಲಿಲ್ಲದವರು ಬಗ್ಗೆ ಯೇಸು ಏನು ಹೇಳಿದರು?", a: ["ಅವರು ಶತ್ರುಗಳು", "ಅವರು ನಮ್ಮ ಪರವಾಗಿದ್ದಾರೆ", "ಅವರು ತಟಸ್ಥರು", "ಅವರು ಹೋಗಬೇಕು"], c: 1, e: "ಮಾರ್ಕ 9:40" },

        { q: "ನರಕವನ್ನು ಯೇಸು ಹೇಗೆ ವಿವರಿಸಿದರು?", a: ["ಅಂಧಕಾರದ ಸ್ಥಳ", "ಆರದ ಬೆಂಕಿಯ ಸ್ಥಳ", "ಶಾಂತಿಯ ಸ್ಥಳ", "ನೀರಿನ ಸ್ಥಳ"], c: 1, e: "ಮಾರ್ಕ 9:43" }
    ],

    10: [
        { q: "ವಿವಾಹದ ಬಗ್ಗೆ ಯೇಸು ನೀಡಿದ ಮುಖ್ಯ ಬೋಧನೆ ಯಾವುದು?", a: ["ಸುಲಭವಾಗಿ ಬೇರ್ಪಡಬಹುದು", "ದೇವರು ಸೇರಿಸಿದನ್ನು ಮನುಷ್ಯನು ಬೇರ್ಪಡಿಸಬಾರದು", "ವಿವಾಹ ಅಗತ್ಯವಿಲ್ಲ", "ವಿವಾಹ ಆಯ್ಕೆಯಾಗಿದೆ"], c: 1, e: "ಮಾರ್ಕ 10:9" },

        { q: "ಮಕ್ಕಳನ್ನು ಯೇಸುವಿನ ಬಳಿಗೆ ಬರದಂತೆ ಯಾರು ತಡೆಯಲು ಪ್ರಯತ್ನಿಸಿದರು?", a: ["ಫರಿಸಾಯರು", "ಶಿಷ್ಯರು", "ಜನರು", "ಯಾಜಕರು"], c: 1, e: "ಮಾರ್ಕ 10:13" },

        { q: "ಮಕ್ಕಳ ಬಗ್ಗೆ ಯೇಸು ಏನು ಹೇಳಿದರು?", a: ["ಅವರನ್ನು ತಡೆಯಿರಿ", "ಅವರನ್ನು ನನ್ನ ಬಳಿಗೆ ಬರಲು ಬಿಡಿರಿ", "ಅವರನ್ನು ಕಳುಹಿಸಿ", "ನಂತರ ಬನ್ನಿ"], c: 1, e: "ಮಾರ್ಕ 10:14" },

        { q: "ಧನಿಕ ಯುವಕನು ಯೇಸುವಿಗೆ ಯಾವ ಪ್ರಶ್ನೆಯನ್ನು ಕೇಳಿದನು?", a: ["ಹಣ ಹೇಗೆ ಗಳಿಸಬೇಕು", "ನಿತ್ಯಜೀವವನ್ನು ಹೇಗೆ ಪಡೆಯಬೇಕು", "ಹೆಸರು ಹೇಗೆ ಮಾಡಬೇಕು", "ರಾಜ್ಯ ಹೇಗೆ ಆಳಬೇಕು"], c: 1, e: "ಮಾರ್ಕ 10:17" },

        { q: "ಆ ಯುವಕನಿಗೆ ಯೇಸು ಯಾವ ಸೂಚನೆಯನ್ನು ನೀಡಿದರು?", a: ["ಹಣ ಉಳಿಸು", "ಎಲ್ಲವನ್ನು ಮಾರಾಟ ಮಾಡಿ ಬಡವರಿಗೆ ಕೊಡು", "ಮನೆ ಕಟ್ಟಿಸು", "ಪ್ರಯಾಣ ಮಾಡು"], c: 1, e: "ಮಾರ್ಕ 10:21" },

        { q: "ಧನಿಕರಿಗೆ ದೇವರ ರಾಜ್ಯ ಪ್ರವೇಶಿಸುವುದು ಎಷ್ಟು ಕಷ್ಟ ಎಂದು ಯೇಸು ಯಾವ ಉದಾಹರಣೆಯನ್ನು ನೀಡಿದರು?", a: ["ಸಿಂಹವನ್ನು ಹಿಡಿಯುವುದು", "ಒಂಟೆ ಸೂಜಿ ಕಣ್ಣಿನಲ್ಲಿ ಹೋಗುವುದು", "ಹಕ್ಕಿ ಹಾರುವುದು", "ನದಿ ಹರಿಯುವುದು"], c: 1, e: "ಮಾರ್ಕ 10:25" },

        { q: "ರಕ್ಷಣೆ ಸಾಧ್ಯವಾಗುವುದು ಯಾರಿಂದ ಮಾತ್ರ ಎಂದು ಯೇಸು ಹೇಳಿದರು?", a: ["ಮಾನವರಿಂದ", "ದೇವರಿಂದ", "ರಾಜರಿಂದ", "ಯಾಜಕರಿಂದ"], c: 1, e: "ಮಾರ್ಕ 10:27" },

        { q: "ಯೇಸುವಿನ ಪ್ರಕಾರ ಯಾರು ನಿಜವಾಗಿಯೂ ಮಹಾನ್?", a: ["ಆಳುವವರು", "ಸೇವಕರು", "ಧನಿಕರು", "ಬಲಿಷ್ಠರು"], c: 1, e: "ಮಾರ್ಕ 10:43" },

        { q: "ಬಾರ್ತಿಮೆಯನು ಯಾರು?", a: ["ರಾಜ", "ಕುರುಡ ಭಿಕ್ಷುಕ", "ಯಾಜಕ", "ಶಿಷ್ಯ"], c: 1, e: "ಮಾರ್ಕ 10:46" },

        { q: "ಯೇಸು ಬಾರ್ತಿಮೆಯನಿಗಾಗಿ ಏನು ಮಾಡಿದರು?", a: ["ಅವನನ್ನು ನಿರ್ಲಕ್ಷಿಸಿದರು", "ಅವನ ಕಣ್ಣುಗಳನ್ನು ಗುಣಪಡಿಸಿದರು", "ಅವನನ್ನು ಕಳುಹಿಸಿದರು", "ಅವನಿಗೆ ಬೋಧಿಸಿದರು"], c: 1, e: "ಮಾರ್ಕ 10:52" }
    ],

    11: [
        { q: "ಯೇಸು ತನ್ನ ವಿಜಯ ಪ್ರವೇಶವನ್ನು ಯಾವ ನಗರದಲ್ಲಿ ಮಾಡಿದರು?", a: ["ನಜರೇತ್", "ಯೆರೂಸಲೇಮ್", "ಬೆತ್ಲೆಹೆಮ್", "ಗಲಿಲಾಯ"], c: 1, e: "ಮಾರ್ಕ 11:1" },

        { q: "ಯೇಸು ನಗರಕ್ಕೆ ಪ್ರವೇಶಿಸುವಾಗ ಯಾವ ಪ್ರಾಣಿಯನ್ನು ಸವಾರಿ ಮಾಡಿದರು?", a: ["ಕುದುರೆ", "ಕತ್ತೆ", "ಒಂಟೆ", "ರಥ"], c: 1, e: "ಮಾರ್ಕ 11:7" },

        { q: "ಜನರು ಯೇಸುವನ್ನು ಸ್ವಾಗತಿಸುವಾಗ ಏನು ಕೂಗಿದರು?", a: ["ಹಲ್ಲೆಲೂಯ", "ಹೊಸನ್ನಾ", "ಆಮೆನ್", "ಗ್ಲೋರಿ"], c: 1, e: "ಮಾರ್ಕ 11:9" },

        { q: "ಯೇಸು ಯಾವ ಮರವನ್ನು ಶಾಪಿಸಿದರು?", a: ["ಆಲಿವ್ ಮರ", "ಅಂಜೂರದ ಮರ", "ತೆಂಗಿನ ಮರ", "ಆಪಲ್ ಮರ"], c: 1, e: "ಮಾರ್ಕ 11:13" },

        { q: "ಯೇಸು ದೇವಾಲಯದಲ್ಲಿ ಯಾವ ಕಾರ್ಯವನ್ನು ಮಾಡಿದನು?", a: ["ಪ್ರಾರ್ಥಿಸಿದರು", "ದೇವಾಲಯವನ್ನು ಶುದ್ಧಗೊಳಿಸಿದರು", "ನಿದ್ರೆ ಮಾಡಿದರು", "ಹೊರಟರು"], c: 1, e: "ಮಾರ್ಕ 11:15" },

        { q: "ದೇವಾಲಯವನ್ನು ಯೇಸು ಏನೆಂದು ಕರೆಯಬೇಕು ಎಂದು ಹೇಳಿದರು?", a: ["ರಾಜರ ಮನೆ", "ಪ್ರಾರ್ಥನೆಯ ಮನೆ", "ವ್ಯಾಪಾರದ ಮನೆ", "ಜನರ ಮನೆ"], c: 1, e: "ಮಾರ್ಕ 11:17" },

        { q: "ನಂಬಿಕೆ ಇದ್ದರೆ ಏನು ಸಾಧ್ಯ ಎಂದು ಯೇಸು ಹೇಳಿದರು?", a: ["ಗಾಳಿ ನಿಲ್ಲುವುದು", "ಪರ್ವತವನ್ನು ಸರಿಸುವುದು", "ಮಳೆ ಬೀಳುವುದು", "ಹಣ ಬರುತ್ತದೆ"], c: 1, e: "ಮಾರ್ಕ 11:23" },

        { q: "ಯೇಸು ಪ್ರಾರ್ಥನೆ ಮಾಡುವಾಗ ಹೇಗೆ ಇರಬೇಕು ಎಂದು ಹೇಳಿದರು?", a: ["ಭಯದಿಂದ", "ನಂಬಿಕೆಯಿಂದ", "ಕೋಪದಿಂದ", "ಸಂದೇಹದಿಂದ"], c: 1, e: "ಮಾರ್ಕ 11:24" },

        { q: "ಪ್ರಾರ್ಥಿಸುವಾಗ ನಾವು ಏನು ಮಾಡಬೇಕು?", a: ["ನ್ಯಾಯ ತೀರ್ಮಾನಿಸಬೇಕು", "ಕ್ಷಮಿಸಬೇಕು", "ನಿರ್ಲಕ್ಷಿಸಬೇಕು", "ಹೊರಟುಹೋಗಬೇಕು"], c: 1, e: "ಮಾರ್ಕ 11:25" },

        { q: "ಯೇಸುವಿನ ಅಧಿಕಾರವನ್ನು ಯಾರು ಪ್ರಶ್ನಿಸಿದರು?", a: ["ಯಾಜಕರು ಮತ್ತು ಶಾಸ್ತ್ರಿಗಳು", "ರೋಮರು", "ಶಿಷ್ಯರು", "ರಾಜರು"], c: 0, e: "ಮಾರ್ಕ 11:27" }
    ],

    12: [
        { q: "ಈ ಅಧ್ಯಾಯದಲ್ಲಿ ಯೇಸು ಯಾವ ಉಪಮೆಯನ್ನು ಹೇಳಿದರು?", a: ["ಬಿತ್ತುವವನ ಉಪಮೆ", "ದ್ರಾಕ್ಷಿತೋಟದ ಉಪಮೆ", "ಮಗನ ಉಪಮೆ", "ರಾಜನ ಉಪಮೆ"], c: 1, e: "ಮಾರ್ಕ 12:1" },

        { q: "ದ್ರಾಕ್ಷಿತೋಟದ ಕಾರ್ಮಿಕರು ಸೇವಕರಿಗೆ ಏನು ಮಾಡಿದರು?", a: ["ಸ್ವಾಗತಿಸಿದರು", "ಹಿಂಸಿಸಿದರು ಮತ್ತು ಕೊಂದರು", "ನಿರ್ಲಕ್ಷಿಸಿದರು", "ಸಹಾಯ ಮಾಡಿದರು"], c: 1, e: "ಮಾರ್ಕ 12:5" },

        { q: "ಕೊನೆಯದಾಗಿ ಯಾರು ಕಳುಹಿಸಲ್ಪಟ್ಟರು?", a: ["ಸೇವಕ", "ಮಗ", "ರಾಜ", "ಯಾಜಕ"], c: 1, e: "ಮಾರ್ಕ 12:6" },

        { q: "ಕರವನ್ನು ಕುರಿತು ಯೇಸು ಏನು ಹೇಳಿದರು?", a: ["ಕೊಡಬೇಡ", "ರಾಜರಿಗೆ ಮಾತ್ರ ಕೊಡು", "ಕೈಸರಿಗೆ ಸಲ್ಲಿಸು", "ನಿರ್ಲಕ್ಷಿಸು"], c: 2, e: "ಮಾರ್ಕ 12:17" },

        { q: "ಪುನರುತ್ಥಾನದಲ್ಲಿ ವಿವಾಹದ ಬಗ್ಗೆ ಯೇಸು ಏನು ಹೇಳಿದರು?", a: ["ಇರುತ್ತದೆ", "ಇರುವುದಿಲ್ಲ", "ಐಚ್ಛಿಕ", "ತಿಳಿದಿಲ್ಲ"], c: 1, e: "ಮಾರ್ಕ 12:25" },

        { q: "ಯೇಸುವಿನ ಪ್ರಕಾರ ದೊಡ್ಡ ಆಜ್ಞೆ ಯಾವುದು?", a: ["ದೇವರನ್ನು ಪ್ರೀತಿಸು", "ಹಣ ಸಂಪಾದಿಸು", "ಉಪವಾಸ", "ಪ್ರಾರ್ಥನೆ"], c: 0, e: "ಮಾರ್ಕ 12:30" },

        { q: "ಎರಡನೇ ದೊಡ್ಡ ಆಜ್ಞೆ ಯಾವುದು?", a: ["ಪಕ್ಕದವನನ್ನು ಪ್ರೀತಿಸು", "ಶತ್ರುವನ್ನು ದ್ವೇಷಿಸು", "ಉಪವಾಸ", "ಕೆಲಸ"], c: 0, e: "ಮಾರ್ಕ 12:31" },

        { q: "ಬಡ ವಿಧವೆ ಎಷ್ಟು ಕೊಟ್ಟಳು?", a: ["ಹೆಚ್ಚು", "ಸ್ವಲ್ಪ ಎರಡು ನಾಣ್ಯಗಳು", "ಏನೂ ಇಲ್ಲ", "ಆಹಾರ"], c: 1, e: "ಮಾರ್ಕ 12:42" },

        { q: "ಅವಳ ಕೊಡುಗೆ ಏಕೆ ಮಹತ್ವವಾದುದು?", a: ["ಹೆಚ್ಚಾಗಿತ್ತು", "ಅವಳು ಎಲ್ಲವನ್ನೂ ಕೊಟ್ಟಳು", "ಪ್ರಸಿದ್ಧವಾಗಿತ್ತು", "ಚಿನ್ನವಾಗಿತ್ತು"], c: 1, e: "ಮಾರ್ಕ 12:44" },

        { q: "ಧನಿಕರು ಹೇಗೆ ಕೊಟ್ಟರು?", a: ["ಉದಾರವಾಗಿ", "ತಮಗೆ ಹೆಚ್ಚಿರುವುದರಿಂದ", "ಗುಪ್ತವಾಗಿ", "ಬಲವಂತವಾಗಿ"], c: 1, e: "ಮಾರ್ಕ 12:44" }
    ],

    13: [
        { q: "ಯೇಸು ದೇವಾಲಯದ ಬಗ್ಗೆ ಯಾವ ಭವಿಷ್ಯವಾಣಿ ಮಾಡಿದರು?", a: ["ಬೆಳೆಯುತ್ತದೆ", "ನಾಶವಾಗುತ್ತದೆ", "ಬದಲಾಗುತ್ತದೆ", "ಸರಿಯುತ್ತದೆ"], c: 1, e: "ಮಾರ್ಕ 13:2" },

        { q: "ಯುದ್ಧಗಳ ಬಗ್ಗೆ ಯೇಸು ಏನು ಹೇಳಿದರು?", a: ["ಅಂತ್ಯ", "ಆರಂಭ ಮಾತ್ರ", "ನಿಲ್ಲುತ್ತದೆ", "ಶಾಂತಿ"], c: 1, e: "ಮಾರ್ಕ 13:7" },

        { q: "ಸುವಾರ್ತೆ ಯಾರಿಗೆ ಪ್ರಕಟವಾಗುತ್ತದೆ?", a: ["ಇಸ್ರಾಯೇಲ್ ಮಾತ್ರ", "ಎಲ್ಲಾ ಜನಾಂಗಗಳಿಗೆ", "ರೋಮರಿಗೆ", "ಶಿಷ್ಯರಿಗೆ"], c: 1, e: "ಮಾರ್ಕ 13:10" },

        { q: "ಅಭಿಷೇಕದ ಅಸಹ್ಯತೆ ಯಾವ ಸ್ಥಳಕ್ಕೆ ಸಂಬಂಧಿಸಿದೆ?", a: ["ಸಮುದ್ರ", "ಪವಿತ್ರ ಸ್ಥಳ", "ನಗರ", "ಮನೆ"], c: 1, e: "ಮಾರ್ಕ 13:14" },

        { q: "ಜನರನ್ನು ತಪ್ಪಿಸುವವರು ಯಾರು?", a: ["ಸುಳ್ಳು ಪ್ರವಾದಿಗಳು", "ರಾಜರು", "ಯಾಜಕರು", "ಗುರುಗಳು"], c: 0, e: "ಮಾರ್ಕ 13:22" },

        { q: "ಸೂರ್ಯನಿಗೆ ಏನಾಗುತ್ತದೆ?", a: ["ಹೆಚ್ಚು ಪ್ರಕಾಶ", "ಅಂಧಕಾರ", "ಕಣ್ಮರೆಯಾಗುತ್ತದೆ", "ತಣ್ಣಗಾಗುತ್ತದೆ"], c: 1, e: "ಮಾರ್ಕ 13:24" },

        { q: "ಮೋಡಗಳಲ್ಲಿ ಬರುವವರು ಯಾರು?", a: ["ಪ್ರವಾದಿಗಳು", "ಮಾನವಕುಮಾರ", "ರಾಜರು", "ದೇವದೂತರು"], c: 1, e: "ಮಾರ್ಕ 13:26" },

        { q: "ದೇವದೂತರು ಏನು ಮಾಡುತ್ತಾರೆ?", a: ["ತೀರ್ಪು", "ಆಯ್ಕೆಯವರನ್ನು ಕೂಡಿಸುತ್ತಾರೆ", "ನಾಶಮಾಡುತ್ತಾರೆ", "ಬೋಧಿಸುತ್ತಾರೆ"], c: 1, e: "ಮಾರ್ಕ 13:27" },

        { q: "ಆ ದಿನದ ಬಗ್ಗೆ ಯಾರಿಗೂ ತಿಳಿದಿಲ್ಲ?", a: ["ಎಲ್ಲರಿಗೂ", "ಯಾರಿಗೂ ಇಲ್ಲ", "ದೇವದೂತರಿಗೆ", "ಪ್ರವಾದಿಗಳಿಗೆ"], c: 1, e: "ಮಾರ್ಕ 13:32" },

        { q: "ಯೇಸು ಕೊಟ್ಟ ಮುಖ್ಯ ಸೂಚನೆ ಯಾವುದು?", a: ["ನಿದ್ರೆ", "ಎಚ್ಚರಿಕೆಯಿಂದಿರಿ", "ಬಿಟ್ಟುಹೋಗಿ", "ನಿರ್ಲಕ್ಷಿಸಿ"], c: 1, e: "ಮಾರ್ಕ 13:37" }
    ],

    14: [
        { q: "ಯೇಸುವನ್ನು ಸುಗಂಧ ತೈಲದಿಂದ ಅಭಿಷೇಕ ಮಾಡಿದವರು ಯಾರು?", a: ["ಮರಿಯ", "ಒಬ್ಬ ಮಹಿಳೆ", "ಮಾರ್ಥಾ", "ರಾಣಿ"], c: 1, e: "ಮಾರ್ಕ 14:3" },

        { q: "ಯೂದನು ಯೇಸುವಿಗೆ ಏನು ಮಾಡಿದನು?", a: ["ಅನುಸರಿಸಿದನು", "ವಂಚಿಸಿದನು", "ಸಹಾಯ ಮಾಡಿದನು", "ನಿರ್ಲಕ್ಷಿಸಿದನು"], c: 1, e: "ಮಾರ್ಕ 14:10" },

        { q: "ಕೊನೆಯ ಭೋಜನದಲ್ಲಿ ಯೇಸು ಏನು ಮುರಿದರು?", a: ["ಮೀನು", "ರೊಟ್ಟಿ", "ಮಾಂಸ", "ಹಣ್ಣು"], c: 1, e: "ಮಾರ್ಕ 14:22" },

        { q: "ಪಾತ್ರೆಯ ಅರ್ಥ ಏನು?", a: ["ನೀರು", "ಒಡಂಬಡಿಕೆಯ ರಕ್ತ", "ದ್ರಾಕ್ಷಾರಸ", "ಜೀವ"], c: 1, e: "ಮಾರ್ಕ 14:24" },

        { q: "ಪೇತ್ರನು ಯೇಸುವನ್ನು ಎಷ್ಟು ಬಾರಿ ನಿರಾಕರಿಸಿದನು?", a: ["ಒಮ್ಮೆ", "ಎರಡು ಬಾರಿ", "ಮೂರು ಬಾರಿ", "ಯಾವತ್ತೂ ಇಲ್ಲ"], c: 2, e: "ಮಾರ್ಕ 14:72" },

        { q: "ಬಂಧನಕ್ಕೂ ಮೊದಲು ಯೇಸು ಎಲ್ಲಿ ಪ್ರಾರ್ಥಿಸಿದನು?", a: ["ದೇವಾಲಯ", "ಗೆತ್ಸೆಮನೆ ತೋಟ", "ಸಮುದ್ರ", "ಮನೆ"], c: 1, e: "ಮಾರ್ಕ 14:32" },

        { q: "ಯೇಸು ಎಷ್ಟು ಬಾರಿ ಪ್ರಾರ್ಥಿಸಿದನು?", a: ["ಒಮ್ಮೆ", "ಎರಡು ಬಾರಿ", "ಮೂರು ಬಾರಿ", "ನಾಲ್ಕು ಬಾರಿ"], c: 2, e: "ಮಾರ್ಕ 14:41" },

        { q: "ಯೂದನು ಯೇಸುವನ್ನು ಗುರುತಿಸಲು ಯಾವ ಚಿಹ್ನೆಯನ್ನು ಬಳಸಿದನು?", a: ["ಹಸ್ತದಾನ", "ಮುತ್ತು", "ಪದ", "ಸಂಕೇತ"], c: 1, e: "ಮಾರ್ಕ 14:44" },

        { q: "ಯೇಸುವನ್ನು ಯಾರು ವಿಚಾರಿಸಿದರು?", a: ["ರಾಜ", "ಮುಖ್ಯ ಯಾಜಕ", "ಶಿಷ್ಯ", "ಸೈನಿಕ"], c: 1, e: "ಮಾರ್ಕ 14:60" },

        { q: "ಪೇತ್ರನು ನಿರಾಕರಿಸಿದ ನಂತರ ಏನು ಮಾಡಿದನು?", a: ["ನಗಿದನು", "ಅಳಿದನು", "ಹೋಗಿದನು", "ನಿದ್ರಿಸಿದನು"], c: 1, e: "ಮಾರ್ಕ 14:72" }
    ],

    15: [
        { q: "ಯೇಸುವನ್ನು ತೀರ್ಪಿಗಾಗಿ ಯಾರ ಬಳಿಗೆ ಕರೆದೊಯ್ಯಲಾಯಿತು?", a: ["ಹೇರೋದ", "ಪೀಲಾತ", "ಕೈಸರ್", "ಯಾಜಕ"], c: 1, e: "ಮಾರ್ಕ 15:1" },

        { q: "ಜನರು ಯೇಸುವಿನ ಬದಲು ಯಾರನ್ನು ಬಿಡುಗಡೆ ಮಾಡಲು ಆಯ್ಕೆ ಮಾಡಿದರು?", a: ["ಪೇತ್ರ", "ಬರಬ್ಬ", "ಯೋಹಾನ", "ಯಾಕೋಬ"], c: 1, e: "ಮಾರ್ಕ 15:11" },

        { q: "ಸೈನಿಕರು ಯೇಸುವನ್ನು ಹೇಗೆ ಹಾಸ್ಯ ಮಾಡಿದರು?", a: ["ರಾಜನಂತೆ", "ಸೇವಕನಂತೆ", "ಪ್ರವಾದಿಯಂತೆ", "ಗುರುವಂತೆ"], c: 0, e: "ಮಾರ್ಕ 15:18" },

        { q: "ಯೇಸುವಿಗೆ ಯಾವ ಮುಳ್ಳಿನ ಕಿರೀಟವನ್ನು ಇಡಲಾಯಿತು?", a: ["ಚಿನ್ನ", "ಮುಳ್ಳು", "ಬೆಳ್ಳಿ", "ಇಕ್ಕಟ್ಟು"], c: 1, e: "ಮಾರ್ಕ 15:17" },

        { q: "ಯೇಸುವಿನ ಕ್ರೂಶನ್ನು ಯಾರು ಹೊತ್ತರು?", a: ["ಪೇತ್ರ", "ಸೈಮೋನ ಸೈರೆನೇಯ", "ಯೋಹಾನ", "ಯೂದ"], c: 1, e: "ಮಾರ್ಕ 15:21" },

        { q: "ಯೇಸು ಯಾವ ಸ್ಥಳದಲ್ಲಿ ಶಿಲುಬೆಗೆ ಹಾಕಲಾಯಿತು?", a: ["ಯೆರೂಸಲೇಮ್", "ಗೊಲ್ಗೋಥಾ", "ನಜರೇತ್", "ದೇವಾಲಯ"], c: 1, e: "ಮಾರ್ಕ 15:22" },

        { q: "ಶಿಲುಬೆಯಲ್ಲಿ ಯೇಸು ಯಾವ ಮಾತುಗಳನ್ನು ಹೇಳಿದರು?", a: ["ನನ್ನ ದೇವರೇ", "ನನ್ನ ದೇವರೇ, ನೀನು ನನ್ನನ್ನು ಯಾಕೆ ಬಿಟ್ಟೆ?", "ನನ್ನನ್ನು ಉಳಿಸು", "ತಂದೆಯೇ"], c: 1, e: "ಮಾರ್ಕ 15:34" },

        { q: "ಯೇಸು ಸತ್ತಾಗ ದೇವಾಲಯದ ಪರದೆಗೆ ಏನಾಯಿತು?", a: ["ಸುಟ್ಟಿತು", "ಎರಡಾಗಿ ಹರಿದುಹೋಯಿತು", "ಕಣ್ಮರೆಯಾಯಿತು", "ಬಿದ್ದಿತು"], c: 1, e: "ಮಾರ್ಕ 15:38" },

        { q: "ಶತಾಧಿಪತಿ ಯೇಸುವಿನ ಬಗ್ಗೆ ಏನು ಹೇಳಿದರು?", a: ["ಇವನು ರಾಜನು", "ಇವನು ದೇವರ ಮಗನು", "ಇವನು ಪ್ರವಾದಿ", "ಇವನು ಮನುಷ್ಯ"], c: 1, e: "ಮಾರ್ಕ 15:39" },

        { q: "ಯೇಸುವನ್ನು ಯಾರು ಸಮಾಧಿ ಮಾಡಿದರು?", a: ["ಪೇತ್ರ", "ಅರಿಮಥ್ಯದ ಯೋಸೇಫ್", "ಯೋಹಾನ", "ಪೀಲಾತ"], c: 1, e: "ಮಾರ್ಕ 15:43" }
    ],

    16: [
        { q: "ಯೇಸುವಿನ ಸಮಾಧಿಗೆ ಮಹಿಳೆಯರು ಯಾವ ಸಮಯದಲ್ಲಿ ಹೋದರು?", a: ["ರಾತ್ರಿ", "ಬೆಳಗ್ಗೆ ಬೇಗ", "ಸಂಜೆ", "ಮಧ್ಯಾಹ್ನ"], c: 1, e: "ಮಾರ್ಕ 16:2" },

        { q: "ಅವರು ಸಮಾಧಿಯ ಕಲ್ಲಿನ ಬಗ್ಗೆ ಏನು ಕಂಡರು?", a: ["ಮುಚ್ಚಿತ್ತು", "ಬದಿಗೆ ಸರಿಸಲಾಗಿತ್ತು", "ಒಡೆದಿತ್ತು", "ಮರೆಮಾಡಿತ್ತು"], c: 1, e: "ಮಾರ್ಕ 16:4" },

        { q: "ದೇವದೂತನು ಅವರಿಗೆ ಯಾವ ಸಂದೇಶವನ್ನು ನೀಡಿದನು?", a: ["ಅವನು ಜೀವಂತನಾಗಿದ್ದಾನೆ", "ಅವನು ನಿದ್ರಿಸುತ್ತಾನೆ", "ಅವನು ಹೋಗಿದ್ದಾನೆ", "ಅವನು ಮರೆಮಾಡಿದ್ದಾನೆ"], c: 0, e: "ಮಾರ್ಕ 16:6" },

        { q: "ಯೇಸು ಪುನರುತ್ಥಾನದ ನಂತರ ಮೊದಲು ಯಾರಿಗೆ ಕಾಣಿಸಿಕೊಂಡನು?", a: ["ಪೇತ್ರ", "ಮರಿಯ ಮಗ್ಗದಲೆ", "ಯೋಹಾನ", "ತೋಮ"], c: 1, e: "ಮಾರ್ಕ 16:9" },

        { q: "ಶಿಷ್ಯರು ಈ ಸುದ್ದಿಯನ್ನು ಮೊದಲಿಗೆ ನಂಬಿದರಾ?", a: ["ಹೌದು", "ಇಲ್ಲ", "ನಂತರ", "ಬಹುಶಃ"], c: 1, e: "ಮಾರ್ಕ 16:11" },

        { q: "ಯೇಸು ಶಿಷ್ಯರಿಗೆ ಯಾವ ಆದೇಶವನ್ನು ನೀಡಿದನು?", a: ["ಇಲ್ಲೇ ಇರಿ", "ಹೋಗಿ ಸುವಾರ್ತೆ ಸಾರಿರಿ", "ಪ್ರಾರ್ಥನೆ ಮಾಡಿ", "ಉಪವಾಸ ಮಾಡಿ"], c: 1, e: "ಮಾರ್ಕ 16:15" },

        { q: "ನಂಬುವವರ ಜೊತೆ ಏನು ಸಂಭವಿಸುತ್ತದೆ ಎಂದು ಯೇಸು ಹೇಳಿದರು?", a: ["ಅದ್ಭುತಗಳು", "ಹಣ", "ಶಕ್ತಿ", "ಹೆಸರು"], c: 0, e: "ಮಾರ್ಕ 16:17" },

        { q: "ನಂತರ ಯೇಸುವಿಗೆ ಏನಾಯಿತು?", a: ["ಇಲ್ಲೇ ಇದ್ದನು", "ಆಕಾಶಕ್ಕೆ ಏರಿಸಲ್ಪಟ್ಟನು", "ಹೋಗಿಬಿಟ್ಟನು", "ಕಣ್ಮರೆಯಾಯಿತು"], c: 1, e: "ಮಾರ್ಕ 16:19" },

        { q: "ಯೇಸು ದೇವರ ಯಾವ ಕಡೆ ಕುಳಿತನು?", a: ["ಎಡಗೈ", "ಬಲಗೈ", "ಮಧ್ಯದಲ್ಲಿ", "ಕೆಳಗೆ"], c: 1, e: "ಮಾರ್ಕ 16:19" },

        { q: "ಯೇಸುವಿನ ನಂತರ ಶಿಷ್ಯರು ಏನು ಮಾಡಿದರು?", a: ["ಮೌನವಾಗಿದ್ದರು", "ಎಲ್ಲೆಡೆ ಸುವಾರ್ತೆ ಸಾರಿದರು", "ಮನೆಗೆ ಹೋದರು", "ನಿದ್ರಿಸಿದರು"], c: 1, e: "ಮಾರ್ಕ 16:20" }
    ]
}
        };

        const appState = {
            lang: 'en',
            currentChapter: 1,
            currentQuestionIdx: 0,
            score: 0,
            isLocked: false,

            showScreen(screenId) {
                const screens = ['lang-screen', 'chapter-screen', 'quiz-screen', 'result-screen'];
                screens.forEach(s => document.getElementById(s).classList.add('hidden'));
                
                const target = document.getElementById(screenId);
                target.classList.remove('hidden');
                
                document.getElementById('quiz-progress-container').classList.toggle('hidden', screenId !== 'quiz-screen');
                this.updateUILabels();
            },

            updateUILabels() {
                const strings = uiStrings[this.lang];
                document.getElementById('ui-back-lang').innerText = strings.back;
                document.getElementById('ui-back-chapter').innerText = strings.back;
                document.getElementById('next-button-text').innerText = strings.next;
                document.getElementById('btn-retry').innerText = strings.retry;
                document.getElementById('btn-other').innerText = strings.other;
                document.getElementById('result-title').innerText = strings.complete;
            },

            setLanguage(l) {
                this.lang = l;
                this.renderChapterScreen();
                this.showScreen('chapter-screen');
            },

            renderChapterScreen() {
                const container = document.getElementById('chapter-buttons');
                const title = document.getElementById('chapter-title');
                title.innerText = uiStrings[this.lang].selectChapter;
                
                container.innerHTML = '';
                for (let i = 1; i <= 16; i++) {
                    const btn = document.createElement('button');
                    btn.className = "p-4 bg-white border-2 border-slate-100 rounded-xl font-bold text-slate-700 hover:border-indigo-500 hover:bg-indigo-50 transition-all shadow-sm text-lg active:scale-90";
                    btn.innerText = i;
                    btn.onclick = () => this.startQuiz(i);
                    container.appendChild(btn);
                }
            },

            startQuiz(chapterNum) {
                this.currentChapter = chapterNum;
                this.currentQuestionIdx = 0;
                this.score = 0;
                this.showScreen('quiz-screen');
                this.renderQuestion();
            },

            renderQuestion() {
                this.isLocked = false;
                const questions = (quizData[this.lang] && quizData[this.lang][this.currentChapter]) || 
                                 (quizData['en'][this.currentChapter]) || [];
                
                if (questions.length === 0) {
                    alert("Questions for Chapter " + this.currentChapter + " in this language are still being added. Returning to menu.");
                    this.showScreen('chapter-screen');
                    return;
                }

                const q = questions[this.currentQuestionIdx];
                document.getElementById('info-tag').innerText = `Ch. ${this.currentChapter}`;
                document.getElementById('question-index').innerText = `${this.currentQuestionIdx + 1} / ${questions.length}`;
                document.getElementById('question-text').innerText = q.q;
                document.getElementById('feedback-area').classList.add('hidden');

                const progress = (this.currentQuestionIdx / questions.length) * 100;
                document.getElementById('progress-bar').style.width = `${progress}%`;

                const optionsContainer = document.getElementById('options-container');
                optionsContainer.innerHTML = '';
                
                q.a.forEach((opt, idx) => {
                    const btn = document.createElement('button');
                    btn.className = "option-btn w-full p-4 text-left border-2 border-slate-100 rounded-2xl hover:bg-slate-50 transition-all font-medium flex items-center gap-4 bg-white shadow-sm";
                    btn.innerHTML = `<span class="h-8 w-8 flex items-center justify-center rounded-full bg-slate-100 text-slate-500 text-sm font-bold shrink-0">${idx + 1}</span> <span class="text-slate-700">${opt}</span>`;
                    btn.onclick = () => this.handleAnswer(idx, btn);
                    optionsContainer.appendChild(btn);
                });
            },

            handleAnswer(selected, btn) {
                if (this.isLocked) return;
                this.isLocked = true;

                const questions = (quizData[this.lang] && quizData[this.lang][this.currentChapter]) || quizData['en'][this.currentChapter];
                const q = questions[this.currentQuestionIdx];
                const isCorrect = selected === q.c;
                
                const feedbackArea = document.getElementById('feedback-area');
                const feedbackMsg = document.getElementById('feedback-msg');
                const explanation = document.getElementById('explanation-text');
                const options = document.getElementById('options-container').children;

                if (isCorrect) {
                    this.score++;
                    btn.classList.add('border-green-500', 'bg-green-50');
                    btn.querySelector('span:first-child').classList.add('bg-green-500', 'text-white');
                    feedbackMsg.innerText = uiStrings[this.lang].correct;
                    feedbackMsg.className = "font-bold text-lg mb-1 text-green-700";
                    feedbackArea.className = "mt-8 p-5 rounded-2xl border-l-8 border-green-500 bg-green-50 block";
                } else {
                    btn.classList.add('border-red-500', 'bg-red-50');
                    btn.querySelector('span:first-child').classList.add('bg-red-500', 'text-white');
                    feedbackMsg.innerText = uiStrings[this.lang].incorrect;
                    feedbackMsg.className = "font-bold text-lg mb-1 text-red-700";
                    feedbackArea.className = "mt-8 p-5 rounded-2xl border-l-8 border-red-500 bg-red-50 block";
                    
                    options[q.c].classList.add('border-green-500', 'bg-green-100');
                    options[q.c].querySelector('span:first-child').classList.add('bg-green-500', 'text-white');
                }

                explanation.innerText = q.e;
            },

            nextQuestion() {
                const questions = (quizData[this.lang] && quizData[this.lang][this.currentChapter]) || quizData['en'][this.currentChapter];
                this.currentQuestionIdx++;
                
                if (this.currentQuestionIdx < questions.length) {
                    this.renderQuestion();
                } else {
                    this.showResults();
                }
            },

            showResults() {
                const questions = (quizData[this.lang] && quizData[this.lang][this.currentChapter]) || quizData['en'][this.currentChapter];
                this.showScreen('result-screen');
                document.getElementById('progress-bar').style.width = `100%`;
                document.getElementById('final-score').innerText = `${this.score} / ${questions.length}`;
            },

            restartChapter() {
                this.startQuiz(this.currentChapter);
            }
        };
  