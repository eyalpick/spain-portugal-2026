// Spain & Portugal July 2026 Travel Dashboard Logic

// --- Dynamic 12-Day Itinerary Data ---
const itineraryData = [
    {
        dayNum: 1,
        dateText: "29 ביוני (יום שני)",
        titleHe: "נחיתה במדריד, ארמון אל-אסקוריאל, חומות אווילה ולינה בסלמנקה",
        titleEn: "Madrid, El Escorial, Ávila & Salamanca",
        driveTime: "כ-3 שעות נסיעה (250 ק\"מ)",
        activities: [
            { title: "נחיתה במדריד ואיסוף הרכב", desc: "נחיתה ב-09:20, איסוף הרכב ב-10:30 מחברת דולר (Dollar) בטרמינל 1/4S.", enDesc: "Land in Madrid, collect rental car from Dollar" },
            { title: "ביקור בארמון אל-אסקוריאל (San Lorenzo de El Escorial)", desc: "נסיעה של 45 דקות לארמון-מנזר המונומנטלי של מלכי ספרד למרגלות ההרים.", enDesc: "Visit the massive monastery-palace of El Escorial" },
            { title: "סיור חומות באווילה (Ávila)", desc: "הליכה רגלית חווייתית על חומות המבצר השמורות ביותר באירופה.", enDesc: "Walk on the famous medieval walls of Ávila" },
            { title: "תצפית ארבעת העמודים (Los Cuatro Postes)", desc: "עצירת צילום פנורמית מחוץ לחומות העיר.", enDesc: "Take photos of Ávila's walls from Los Cuatro Postes viewpoint" },
            { title: "ערב בכיכר המרכזית בסלמנקה (Plaza Mayor)", desc: "סיור בכיכר הבארוק היפה באירופה כשהיא מוארת בלילה, כולל טאפאס ובירה בבר מקומי.", enDesc: "Enjoy tapas and drinks in the illuminated Plaza Mayor of Salamanca" }
        ]
    },
    {
        dayNum: 2,
        dateText: "30 ביוני (יום שלישי)",
        titleHe: "בוקר בסלמנקה, מבצר סיודאד רודריגו, מעבר לפורטוגל וריזורט דואורו",
        titleEn: "Salamanca, Ciudad Rodrigo, Portugal Border & Douro Resort",
        driveTime: "כ-3.5 שעות נסיעה (260 ק\"מ)",
        activities: [
            { title: "שוק האוכל של סלמנקה (Mercado Central)", desc: "ביקור בבוקר בשוק המקומי השוקק לטעימת גבינות וחמוצים.", enDesc: "Explore Salamanca's central food market" },
            { title: "קתדרלת סלמנקה ואסטרונאוט האבן (Catedral)", desc: "סיור בחצר האוניברסיטה העתיקה ומציאת דמות האסטרונאוט המגולפת בחזית הקתדרלה.", enDesc: "Find the carved stone astronaut on the Cathedral facade" },
            { title: "מבצר סיודאד רודריגו (Ciudad Rodrigo)", desc: "עצירת צהריים בעיירת מבצר עתיקה על הגבול, כולל הליכה על החומות ומבט על הטירה.", enDesc: "Stop at the historic border fortress town of Ciudad Rodrigo" },
            { title: "חציית הגבול והפעלת כבישי אגרה (EasyToll)", desc: "מעבר לפורטוגל ורישום מהיר של כרטיס האשראי בעמדת ה-Welcome Point בגבול (A25 Vilar Formoso).", enDesc: "Cross into Portugal and register credit card for EasyToll" },
            { title: "צ'ק-אין בריזורט עמק הדואורו (Douro Valley)", desc: "התמקמות במלון היוקרתי, זמן בריכה מול הנוהר וטעימת יין ראשונה של יין פורט.", enDesc: "Check-in at the Douro Valley luxury resort, relax by the pool" }
        ]
    },
    {
        dayNum: 3,
        dateText: "1 ביולי (יום רביעי)",
        titleHe: "עמק הדואורו (כוכב 1): למגו ההיסטורית, שייט בפיניאו ותצפיות נוף",
        titleEn: "Douro Valley (Star 1): Lamego, Pinhão Boat Cruise & Viewpoints",
        driveTime: "כ-2 שעות נסיעה (טיול כוכב)",
        activities: [
            { title: "מדרגות כנסיית רמדיוש בלמגו (Sanctuary of Nossa Senhora dos Remédios)", desc: "טיפוס במדרגות הבארוק (686 מדרגות) המעוטרות בגינות ופסלים, וטעימת מאפה 'בולה' מקומי.", enDesc: "Climb Lamego's monumental baroque staircase and taste Bôla pastry" },
            { title: "תחנת הרכבת של פיניאו (Pinhão Station)", desc: "ביקור בתחנה לראות את אריחי הקרמיקה הכחולים המרהיבים המציגים את קטיף הענבים.", enDesc: "Admire the historic blue tiles at Pinhão Railway Station" },
            { title: "שייט בסירת רבלו מסורתית (Rabelo Boat Cruise)", desc: "שייט נופי של שעה על נהר הדואורו בין טרסות הכרמים המרהיבות.", enDesc: "Take a 1-hour scenic boat cruise along the Douro River" },
            { title: "סיור יקב וטעימות (Quinta Winery)", desc: "ביקור ביקב פעיל (כמו Quinta da Pacheca) כולל הסבר על ייצור היין וטעימות.", enDesc: "Tour a working winery estate and taste local Douro/Port wines" },
            { title: "תצפית גלפורה (Miradouro de São Leonardo de Galafura)", desc: "תצפית שקיעה מרהיבה בגובה 640 מטר על עיקול נהר הדואורו וההרים.", enDesc: "Watch sunset from the breathtaking Galafura viewpoint" }
        ]
    },
    {
        dayNum: 4,
        dateText: "2 ביולי (יום חמישי)",
        titleHe: "עמק הדואורו (כוכב 2): שוק ברסלוס הענק, בראגה וגימראייש העתיקה",
        titleEn: "Douro Valley (Star 2): Barcelos Market, Braga & Guimarães",
        driveTime: "כ-3.5 שעות נסיעה הלוך ושוב",
        activities: [
            { title: "שוק יום חמישי בברסלוס (Feira de Barcelos)", desc: "הגעה מוקדמת לשוק הפתוח הענק (הגדול בפורטוגל) לקניות קלות, אוכל מקומי פשוט, וצילום פסלי התרנגול.", enDesc: "Visit the massive and ancient weekly market of Barcelos" },
            { title: "מקדש בום ז'זוש בבראגה (Bom Jesus do Monte)", desc: "עלייה ברכבל המים העתיק וירידה במדרגות הזיגזג המפורסמות של המקדש מול נוף מרהיב.", enDesc: "Ride the water funicular and walk the baroque steps at Bom Jesus" },
            { title: "טירת גימראייש (Guimarães Castle)", desc: "ביקור במבצר הימי-ביניימי שבו נולד מלך פורטוגל הראשון וסיור בלב העיר העתיקה.", enDesc: "Explore the historic cradle of Portugal at Guimarães Castle" },
            { title: "רכבל הר פניה (Teleférico da Penha)", desc: "עלייה ברכבל לפסגת ההר מעל גימראייש להליכה קלה בין סלעי ענק, מערות ותצפית יער מרהיבה.", enDesc: "Take the cable car to Penha Mountain and walk among giant boulders" },
            { title: "ערב רגוע בריזורט", desc: "חזרה לעמק הדואורו לארוחת ערב פשוטה וטובה ורחצה לילית בבריכה.", enDesc: "Return to resort for spa/pool time and dinner" }
        ]
    },
    {
        dayNum: 5,
        dateText: "3 ביולי (יום שישי)",
        titleHe: "מעמק הדואורו אל פורטו - שוק בוליאו, אריחי סן בנטו ואמנות",
        titleEn: "Douro Valley to Porto: Bolhão Market, São Bento & Modern Art",
        driveTime: "כ-1.5 שעות נסיעה (120 ק\"מ)",
        activities: [
            { title: "מוזיאון האמנות סראלבס (Serralves Museum)", desc: "כניסה למוזיאון לאמנות עכשווית המפורסם, סיור בשביל הצמרות המוגבה (Treetop Walk) בגנים.", enDesc: "Visit Serralves Contemporary Art Museum and do the treetop canopy walk" },
            { title: "שוק בוליאו המקומי (Mercado do Bolhão)", desc: "ביקור בשוק האוכל ההיסטורי לטעימת מאכלי ים טריים, קוד פיש, גבינות וזיתים.", enDesc: "Lunch at the historic renovated Bolhão food market" },
            { title: "אולם אריחי תחנת סן בנטו (São Bento)", desc: "סיור באולם התחנה המכוסה ב-20,000 אריחי קרמיקה כחולים המתארים את ההיסטוריה של פורטוגל.", enDesc: "See the spectacular historic azulejo tile murals at São Bento Station" },
            { title: "טיפוס למגדל קלריגוש (Torre dos Clérigos)", desc: "עלייה במדרגות לתצפית ה-360 המדהימה ביותר על גגות פורטו ונהר הדואורו.", enDesc: "Climb Clérigos Tower for panoramic 360-degree views of Porto" },
            { title: "שקיעה בריביירה (Ribeira)", desc: "טיול רגלי לאורך הרציפים וחציית גשר דום לואיס ברגל לליבה של וילה נובה דה גאיה.", enDesc: "Walk along Ribeira and cross Dom Luís I Bridge for sunset views" }
        ]
    },
    {
        dayNum: 6,
        dateText: "4 ביולי (יום שבת)",
        titleHe: "מפורטו לאביירו, חוף קוסטה נובה, מצוקי נאזארה ואובידוש אל סינטרה",
        titleEn: "Porto, Aveiro, Costa Nova, Nazaré & Óbidos to Sintra",
        driveTime: "כ-3.5 שעות נסיעה (320 ק\"מ)",
        activities: [
            { title: "שיט תעלות באביירו (Aveiro)", desc: "שיט קצר בסירת מוליסיירו (Moliceiro) צבעונית בעיר המכונה 'ונציה של פורטוגל'.", enDesc: "Take a canal boat cruise in Aveiro" },
            { title: "בתי הפסים בחוף קוסטה נובה (Costa Nova)", desc: "עצירת צילום מול בתי העץ הצבעוניים והמפוספסים של הדייגים על קו החוף.", enDesc: "Photograph the iconic striped houses of Costa Nova" },
            { title: "מצוקי הגולשים בנאזארה (Nazaré)", desc: "עלייה בפוניקולר לרובע המצוק סיטיו (Sítio) וביקור במבצר סן מיגל (Forte) - מקום צילום הגלים הגבוהים בעולם ומוזיאון הגלישה.", enDesc: "Visit Nazaré cliffs and the Big Wave Museum at the fort" },
            { title: "חומות העיירה אובידוש (Óbidos)", desc: "סיור בעיירה המוקפת חומה, הליכה לאורך החומות וטעימת ליקר ז'ינז'ינייה (Ginjinha) בכוס שוקולד.", enDesc: "Walk Óbidos medieval walls and drink cherry liqueur in a chocolate cup" },
            { title: "נסיעה ללינה בסינטרה", desc: "התמקמות במלון ייחודי/היסטורי בסינטרה (Sintra).", enDesc: "Drive to Sintra and check-in to a historic/unique hotel" }
        ]
    },
    {
        dayNum: 7,
        dateText: "5 ביולי (יום ראשון)",
        titleHe: "גלישה/צלילה בפניצ'ה, ארמונות סינטרה ונסיעה לליסבון",
        titleEn: "Peniche Surf/Dive, Sintra Palaces & Lisbon",
        driveTime: "כ-1.5 שעות נסיעה (110 ק\"מ)",
        activities: [
            { title: "פעילות מים בפניצ'ה/באליאל (Peniche)", desc: "אפשרות א': שיעור גלישת גלים של שעתיים בחוף באליאל (Baleal). אפשרות ב': שייט מנמל פניצ'ה לריף האי ברלנגס (Berlengas) לשנורקלינג/צלילה.", enDesc: "Enjoy a surf lesson at Baleal Beach or dive/snorkel at the Berlengas Islands" },
            { title: "מערת קאבו קרוואירו (Cabo Carvoeiro)", desc: "ביקור במצוקי הגיר והמערות הימיות הייחודיות ליד המגדלור בפניצ'ה.", enDesc: "Explore limestone cliffs and coastal views at Cabo Carvoeiro" },
            { title: "הבאר הלוליינית בקינטה דה רגאליירה (Regaleira)", desc: "ביקור בגנים המיסטיים בסינטרה, ירידה בבאר הלוליינית המפורסמת ומעבר במנהרות תת-קרקעיות.", enDesc: "Explore the initiation well, caves, and gardens of Quinta da Regaleira" },
            { title: "נסיעה לליסבון (Lisbon)", desc: "נסיעה קצרה של 40 דקות והתמקמות בדירה/מלון בליסבון.", enDesc: "Drive to Lisbon and check-in" },
            { title: "ארוחת ערב בשוק האוכל טיים אאוט (Time Out Market)", desc: "סיבוב קולינרי בשוק המזון המקורה האהוב המציע מגוון מנות פשוטות ואיכותיות.", enDesc: "Dinner at the famous Time Out Market (Mercado da Ribeira)" }
        ]
    },
    {
        dayNum: 8,
        dateText: "6 ביולי (יום שני)",
        titleHe: "ליסבון - מנזר ז'רונימוש, מגדל בלם, מוזיאון גולבנקיאן ורובע אלפמה",
        titleEn: "Lisbon City & Art: Jerónimos, Belém, Gulbenkian & Alfama",
        driveTime: "ללא נסיעות ברכב (שימוש בתחבורה ציבורית ורגלי)",
        activities: [
            { title: "מנזר ז'רונימוש ומגדל בלם (Belém)", desc: "ביקור במנזר המנואלסטי המפואר, עצירה במגדל השמירה ההיסטורי בבלם ואכילת פסטל דה בלם חם מהתנור.", enDesc: "Visit Jerónimos Monastery, Belém Tower, and taste Pastel de Belém" },
            { title: "מוזיאון האמנות גולבנקיאן (Gulbenkian Museum)", desc: "ביקור באחד מאוספי האמנות הפרטיים הטובים בעולם (מיצירות עתיקות ועד לאימפרסיוניזם וציורים אירופיים).", enDesc: "View world-class art collections at the Calouste Gulbenkian Museum" },
            { title: "חשמלית 28 ורובע אלפמה (Alfama)", desc: "נסיעה בחשמלית העץ הצהובה בסמטאות הצרות, וסיור רגלי בין בתי השכונה העתיקה ביותר בליסבון.", enDesc: "Ride the iconic Tram 28 and explore the historic Alfama district" },
            { title: "שקיעה בתצפית סניורה דו מונטה (Senhora do Monte)", desc: "עלייה לנקודת התצפית הגבוהה ביותר בליסבון למראה מרהיב של העיר והנהר בשקיעה.", enDesc: "Enjoy panoramic sunset views from Miradouro da Senhora do Monte" }
        ]
    },
    {
        dayNum: 9,
        dateText: "7 ביולי (יום שלישי)",
        titleHe: "שוק הפשפשים בליסבון, אתר המגליטים הפרהיסטורי ולינה באבורה",
        titleEn: "Lisbon Flea Market, Prehistoric Cromlech & Évora",
        driveTime: "כ-2 שעות נסיעה (150 ק\"מ)",
        activities: [
            { title: "שוק הפשפשים פיירה דה לאדרה (Feira da Ladra)", desc: "סיור בוקר בשוק העתיקות והווינטג' המקומי המתקיים בכיכר סנטה קלרה בליסבון (ימי שלישי בלבד).", enDesc: "Browse antiques and vintage goods at Lisbon's historic flea market" },
            { title: "אתר המגליטים של אלמנדרש (Cromeleque dos Almendres)", desc: "עצירת שטח בדרך לאבורה - מעגל אבנים פרהיסטורי מרשים (עתיק מסטונהנג') השוכן בלב יער עצי אלון.", enDesc: "Visit the ancient megalithic stone circle of Almendres in a cork oak forest" },
            { title: "מקדש דיאנה הרומי באבורה (Évora)", desc: "ביקור בשרידי המקדש הרומי העתיק במרכז העיר העתיקה מוקפת החומה.", enDesc: "See the historic Roman Temple of Évora" },
            { title: "קפלת העצמות המפורסמת (Capela dos Ossos)", desc: "ביקור בקפלה המיוחדת והמרתקת שקירותיה ותקרה מכוסים בעצמות של אלפי נזירים.", enDesc: "Visit the unique Chapel of Bones" },
            { title: "ערב רגוע באחוזה כפרית באלנטז'ו", desc: "צ'ק-אין באחוזה כפרית (Herdade) באזור אבורה, שחייה בבריכה וארוחת ערב כפרית פשוטה.", enDesc: "Stay in a traditional countryside estate with a pool in Alentejo" }
        ]
    },
    {
        dayNum: 10,
        dateText: "8 ביולי (יום רביעי)",
        titleHe: "מאבורה לעתיקות מרידה ולינה בעיר המבצר קאסרס (ספרד)",
        titleEn: "Évora to Mérida Roman Ruins & Cáceres Walled City",
        driveTime: "כ-2.5 שעות נסיעה (220 ק\"מ)",
        activities: [
            { title: "התיאטרון והאמפיתיאטרון של מרידה (Mérida)", desc: "חציית הגבול לספרד ועצירה במרידה לביקור בשרידים הרומיים המפוארים והשמורים ביותר בחצי האי האיברי.", enDesc: "Explore the spectacular ancient Roman Theatre and Amphitheatre in Mérida" },
            { title: "הגשר הרומי במרידה (Puente Romano)", desc: "הליכה על הגשר הרומי הארוך ביותר ששרד בעולם (792 מטרים מעל נהר הגואדיאנה).", enDesc: "Walk across the longest surviving Roman bridge in the world" },
            { title: "העיר העתיקה והמבוצרת של קאסרס (Cáceres)", desc: "הגעה והתמקמות בעיר העתיקה שקפאה בזמן (אתר צילומים מפורסם למשחקי הכס). הכניסה לרכב אסורה, חניה מחוץ לחומות.", enDesc: "Check-in and explore the exceptionally preserved medieval town of Cáceres" },
            { title: "מגדל בוחאקו (Torre de Bujaco)", desc: "טיפוס למגדל השמירה לתצפית על הגגות והכיכר המרכזית, וסיור קצר לאורך החומה.", enDesc: "Climb Bujaco Tower for views over Plaza Mayor" },
            { title: "בור המים המורי (Aljibe de Cáceres)", desc: "ביקור בבור המים התת-קרקעי המרהיב מתחת למוזיאון קאסרס, שריד מהתקופה המוסלמית.", enDesc: "Visit the beautiful underground Moorish cistern" }
        ]
    },
    {
        dayNum: 11,
        dateText: "9 ביולי (יום חמישי)",
        titleHe: "מקאסרס לעיירה טרוחיו ומשם למדריד - אמנות בלבד ושוק סן מיגל",
        titleEn: "Cáceres, Trujillo Town & Madrid: Art Museums & San Miguel",
        driveTime: "כ-2.5 שעות נסיעה (300 ק\"מ)",
        activities: [
            { title: "ביקור בעיירת הכובשים טרוחיו (Trujillo)", desc: "עצירת בוקר של שעה בעיירה המרהיבה, ביקור בכיכר המרכזית (Plaza Mayor) המרשימה וטיפוס לטירה המשקיפה על הנוף.", enDesc: "Stop in Trujillo to explore the medieval castle and square" },
            { title: "הגעה למדריד ונסיעה למלון", desc: "נסיעה למדריד, התארגנות בדירה/מלון ופתרון חניה עירונית מוסדרת.", enDesc: "Drive to Madrid, check-in, park in a secure central garage" },
            { title: "מוזיאון הפראדו (Prado) או ריינה סופיה (Reina Sofia)", desc: "ביקור ממוקד ביצירות המופת הגדולות של האמנות (ולסקז, גויה, אל גרקו או גרניקה של פיקאסו).", enDesc: "Visit one of Madrid's world-famous art museums (art only)" },
            { title: "פארק רטירו וארמון הקריסטל (Palacio de Cristal)", desc: "הליכה רגלית קלה ושקטה בריאה הירוקה של מדריד וביקור במבנה הזכוכית המרהיב.", enDesc: "Stroll through Retiro Park and view the Crystal Palace" },
            { title: "שוק סן מיגל (Mercado de San Miguel)", desc: "סיבוב קולינרי חגיגי בערב לטעימת מגוון טאפאס פשוטים וטעימים לסיכום הטיול.", enDesc: "Enjoy a final evening tapas tour at the historic San Miguel Market" }
        ]
    },
    {
        dayNum: 12,
        dateText: "10 ביולי (יום שישי)",
        titleHe: "מקדש דבוד במדריד, נסיעה לשדה התעופה וטיסה חזרה לישראל",
        titleEn: "Temple of Debod, Madrid Airport & Flight Back",
        driveTime: "כ-30 דקות נסיעה",
        activities: [
            { title: "מקדש דבוד (Temple of Debod)", desc: "ביקור קצר בבוקר במקדש המצרי העתיק שהוענק כמתנה לספרד וממוקם בלב פארק יפה במדריד.", enDesc: "Visit the ancient Egyptian Temple of Debod in central Madrid" },
            { title: "הגעה לשדה התעופה מדריד באראחאס (Madrid-Barajas Airport)", desc: "נסיעה של 30 דקות לשדה התעופה, החזרת הרכב השכור בחניון דולר בטרמינל 1/4 עד השעה 10:00 בבוקר.", enDesc: "Drive to Barajas Airport, return rental car to Dollar by 10:00" },
            { title: "טיסה חזרה לישראל (טיסת אל על LY396)", desc: "המראה ב-10:50 מטרמינל 4S ונחיתה בנתב\"ג ב-16:25.", enDesc: "Depart on flight LY396 back to Tel Aviv at 10:50" }
        ]
    }
];

// --- Default Packing List Items ---
const defaultPackingList = [
    { text: "דרכונים בתוקף (Passports)", category: "documents", checked: false },
    { text: "כרטיסי טיסה מודפסים/בנייד (Printed Flight Tickets)", category: "documents", checked: false },
    { text: "שובר השכרת רכב מודפס - אופרן/דולר (Printed Rental Voucher)", category: "documents", checked: false },
    { text: "רישיון נהיגה ישראלי + רישיון בינלאומי פיזי (Licenses)", category: "documents", checked: false },
    { text: "כרטיס אשראי פיזי לרישום איזי-טול והשכרת רכב (Physical Credit Card)", category: "documents", checked: false },
    { text: "פוליסת ביטוח נסיעות מודפסת (Travel Insurance)", category: "documents", checked: false },
    
    { text: "טלפונים ניידים + מטענים (Phones & Chargers)", category: "electronics", checked: false },
    { text: "מטען רכב וכבל חיבור USB לניווט (Car USB Cable)", category: "electronics", checked: false },
    { text: "מתאם שקעים אירופאי (European Plug Adapter)", category: "electronics", checked: false },
    { text: "אוזניות לנסיעות (Headphones)", category: "electronics", checked: false },
    
    { text: "בגדים נוחים להליכה ולנסיעות (Comfortable Clothes)", category: "clothing", checked: false },
    { text: "בגד ים לגלישה/שנורקלינג ולבריכה בריזורט (Swimwear)", category: "clothing", checked: false },
    { text: "נעלי הליכה נוחות (Comfortable Walking Shoes)", category: "clothing", checked: false },
    { text: "משקפי שמש וכובע (Sunglasses & Hat)", category: "clothing", checked: false },
    
    { text: "קרם הגנה מהשמש (Sunscreen)", category: "personal", checked: false },
    { text: "בקבוק מים רב-פעמי (Reusable Water Bottle)", category: "personal", checked: false },
    { text: "עזרה ראשונה בסיסית ותרופות אישיות (First Aid)", category: "personal", checked: false }
];

// --- DOM References ---
const countdownDays = document.getElementById("cd-days");
const countdownHours = document.getElementById("cd-hours");
const countdownMins = document.getElementById("cd-mins");
const countdownSecs = document.getElementById("cd-secs");

const itineraryTimeline = document.getElementById("itinerary-timeline");
const parkingNotesTextarea = document.getElementById("parking-notes");

const expenseList = document.getElementById("expense-list");
const totalExpensesEl = document.getElementById("total-expenses");
const addExpenseForm = document.getElementById("add-expense-form");
const expenseNameInput = document.getElementById("expense-name");
const expenseAmountInput = document.getElementById("expense-amount");

const packingChecklistEl = document.getElementById("packing-checklist");
const addItemForm = document.getElementById("add-item-form");
const newItemTextInput = document.getElementById("new-item-text");

const tollModal = document.getElementById("toll-modal");
const btnTollModal = document.getElementById("btn-toll-modal");
const btnCloseToll = document.getElementById("btn-close-toll");

// --- Initialize State ---
let userNotes = JSON.parse(localStorage.getItem("spain_portugal_notes")) || {};
let userExpenses = JSON.parse(localStorage.getItem("spain_portugal_expenses")) || [];
let userPackingList = JSON.parse(localStorage.getItem("spain_portugal_packing")) || defaultPackingList;
let activeDay = localStorage.getItem("spain_portugal_active_day") || "1";

// --- Countdown Timer Logic ---
// Departure time: June 29, 2026 at 05:00 AM (Israeli Time / local departure)
const departureDate = new Date("2026-06-29T05:00:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = departureDate - now;

    if (distance < 0) {
        countdownDays.innerText = "00";
        countdownHours.innerText = "00";
        countdownMins.innerText = "00";
        countdownSecs.innerText = "00";
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdownDays.innerText = String(days).padStart(2, "0");
    countdownHours.innerText = String(hours).padStart(2, "0");
    countdownMins.innerText = String(minutes).padStart(2, "0");
    countdownSecs.innerText = String(seconds).padStart(2, "0");
}
setInterval(updateCountdown, 1000);
updateCountdown();

// --- Itinerary Accordion Render & Logic ---
function renderItinerary() {
    itineraryTimeline.innerHTML = "";
    
    itineraryData.forEach(day => {
        const dayCard = document.createElement("div");
        dayCard.className = `day-card ${activeDay == day.dayNum ? "active" : ""}`;
        dayCard.id = `day-${day.dayNum}`;
        
        let activitiesHTML = "";
        day.activities.forEach((act, idx) => {
            activitiesHTML += `
                <div class="activity-item">
                    <div class="activity-num">${idx + 1}</div>
                    <div class="activity-details">
                        <strong>${act.title}</strong>
                        <span>${act.desc}</span>
                        <span class="en-desc">${act.enDesc}</span>
                    </div>
                </div>
            `;
        });
        
        const noteContent = userNotes[day.dayNum] || "";
        const noteDisplayClass = noteContent ? "" : "empty";
        const noteDisplayText = noteContent || "אין הערות ליום זה. לחצו על 'עריכה' כדי להוסיף מסלולי הליכה, כתובות או מסעדות...";

        dayCard.innerHTML = `
            <div class="day-header" onclick="toggleDay(${day.dayNum})">
                <div class="day-title-group">
                    <div class="day-badge">יום ${day.dayNum}</div>
                    <div class="day-title">
                        ${day.titleHe}
                        <span class="en-title">(${day.titleEn})</span>
                    </div>
                </div>
                <div class="day-meta">
                    <span>${day.dateText}</span>
                    <i class="fa-solid fa-chevron-down expand-icon"></i>
                </div>
            </div>
            
            <div class="day-content">
                <div class="route-info">
                    <div class="route-badge"><i class="fa-solid fa-route"></i> ${day.driveTime}</div>
                    <div class="route-badge"><i class="fa-solid fa-compass"></i> מסלול מועשר</div>
                </div>
                
                <div class="activity-list">
                    ${activitiesHTML}
                </div>
                
                <div class="day-notes-section">
                    <div class="notes-header">
                        <span class="notes-title"><i class="fa-regular fa-pen-to-square"></i> ההערות והתכנון שלי:</span>
                        <button class="btn-edit-note" onclick="editNote(event, ${day.dayNum})">
                            <i class="fa-solid fa-pencil"></i> עריכה
                        </button>
                    </div>
                    <div class="notes-display ${noteDisplayClass}" id="note-display-${day.dayNum}">${noteDisplayText}</div>
                    
                    <div class="notes-editor" id="note-editor-${day.dayNum}">
                        <textarea class="notes-textarea" id="note-input-${day.dayNum}" placeholder="רשמו כאן מידע שימושי ליום זה...">${noteContent}</textarea>
                        <div class="editor-actions">
                            <button class="btn-cancel-note" onclick="cancelNote(event, ${day.dayNum})">ביטול</button>
                            <button class="btn-save-note" onclick="saveNote(event, ${day.dayNum})">שמירה</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
        itineraryTimeline.appendChild(dayCard);
    });
}

window.toggleDay = function(dayNum) {
    const cards = document.querySelectorAll(".day-card");
    cards.forEach(card => {
        if (card.id === `day-${dayNum}`) {
            const isActive = card.classList.contains("active");
            if (isActive) {
                card.classList.remove("active");
                activeDay = null;
            } else {
                card.classList.add("active");
                activeDay = dayNum;
            }
        } else {
            card.classList.remove("active");
        }
    });
    localStorage.setItem("spain_portugal_active_day", activeDay);
};

window.editNote = function(event, dayNum) {
    event.stopPropagation();
    document.getElementById(`note-display-${dayNum}`).style.display = "none";
    document.getElementById(`note-editor-${dayNum}`).style.display = "flex";
    document.getElementById(`note-input-${dayNum}`).focus();
};

window.cancelNote = function(event, dayNum) {
    event.stopPropagation();
    document.getElementById(`note-display-${dayNum}`).style.display = "block";
    document.getElementById(`note-editor-${dayNum}`).style.display = "none";
};

window.saveNote = function(event, dayNum) {
    event.stopPropagation();
    const newNote = document.getElementById(`note-input-${dayNum}`).value.trim();
    userNotes[dayNum] = newNote;
    localStorage.setItem("spain_portugal_notes", JSON.stringify(userNotes));
    
    renderItinerary();
};

// --- Parking Notepad Logic ---
parkingNotesTextarea.value = localStorage.getItem("spain_portugal_parking_notes") || "";
parkingNotesTextarea.addEventListener("input", () => {
    localStorage.setItem("spain_portugal_parking_notes", parkingNotesTextarea.value);
});

// --- Budget Tracker Logic ---
function renderExpenses() {
    expenseList.innerHTML = "";
    let total = 0;
    
    userExpenses.forEach((exp, idx) => {
        total += exp.amount;
        const expItem = document.createElement("div");
        expItem.className = "expense-item";
        expItem.innerHTML = `
            <span class="expense-title">${exp.name}</span>
            <div style="display: flex; align-items: center; gap: 0.5rem;">
                <span class="expense-price">${exp.amount.toFixed(2)} €</span>
                <button class="btn-delete-item" onclick="deleteExpense(${idx})" style="opacity: 1; padding: 0.1rem;"><i class="fa-solid fa-trash"></i></button>
            </div>
        `;
        expenseList.appendChild(expItem);
    });
    
    totalExpensesEl.innerText = `${total.toFixed(2)} €`;
}

addExpenseForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = expenseNameInput.value.trim();
    const amount = parseFloat(expenseAmountInput.value);
    
    if (name && !isNaN(amount)) {
        userExpenses.push({ name, amount });
        localStorage.setItem("spain_portugal_expenses", JSON.stringify(userExpenses));
        expenseNameInput.value = "";
        expenseAmountInput.value = "";
        renderExpenses();
    }
});

window.deleteExpense = function(idx) {
    userExpenses.splice(idx, 1);
    localStorage.setItem("spain_portugal_expenses", JSON.stringify(userExpenses));
    renderExpenses();
};

// --- Packing Checklist Logic ---
function renderPackingList() {
    packingChecklistEl.innerHTML = "";
    
    // Group by Category
    const categories = {
        documents: "מסמכים ופיננסים (Documents & Finance)",
        electronics: "ציוד אלקטרוני (Electronics)",
        clothing: "לבוש וציוד אישי (Clothing & Personal)",
        personal: "בריאות וטיפוח (Health & Toiletries)",
        custom: "פריטים נוספים (Custom Items)"
    };
    
    Object.keys(categories).forEach(catKey => {
        const items = userPackingList.filter(item => item.category === catKey);
        if (items.length === 0 && catKey !== 'custom') return;
        
        const catSection = document.createElement("div");
        catSection.style.marginBottom = "1rem";
        catSection.innerHTML = `<h4 style="font-size: 0.85rem; color: var(--accent-orange); margin-bottom: 0.5rem; font-family: var(--font-heading);">${categories[catKey]}</h4>`;
        
        const itemsContainer = document.createElement("div");
        
        items.forEach(item => {
            const originalIndex = userPackingList.findIndex(x => x.text === item.text && x.category === item.category);
            const itemEl = document.createElement("div");
            itemEl.className = `checklist-item ${item.checked ? "checked" : ""}`;
            itemEl.innerHTML = `
                <div class="checklist-left" onclick="togglePackingItem(${originalIndex})">
                    <div class="checkbox-custom">
                        <i class="fa-solid fa-check"></i>
                    </div>
                    <span>${item.text}</span>
                </div>
                <button class="btn-delete-item" onclick="deletePackingItem(${originalIndex})"><i class="fa-solid fa-trash"></i></button>
            `;
            itemsContainer.appendChild(itemEl);
        });
        
        catSection.appendChild(itemsContainer);
        packingChecklistEl.appendChild(catSection);
    });
}

window.togglePackingItem = function(idx) {
    userPackingList[idx].checked = !userPackingList[idx].checked;
    localStorage.setItem("spain_portugal_packing", JSON.stringify(userPackingList));
    renderPackingList();
};

window.deletePackingItem = function(idx) {
    userPackingList.splice(idx, 1);
    localStorage.setItem("spain_portugal_packing", JSON.stringify(userPackingList));
    renderPackingList();
};

addItemForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const text = newItemTextInput.value.trim();
    if (text) {
        userPackingList.push({ text, category: "custom", checked: false });
        localStorage.setItem("spain_portugal_packing", JSON.stringify(userPackingList));
        newItemTextInput.value = "";
        renderPackingList();
    }
});

// --- Modal Toll Guide Logic ---
btnTollModal.addEventListener("click", () => {
    tollModal.classList.add("active");
});

btnCloseToll.addEventListener("click", () => {
    tollModal.classList.remove("active");
});

window.addEventListener("click", (e) => {
    if (e.target === tollModal) {
        tollModal.classList.remove("active");
    }
});

// --- Initial Render ---
renderItinerary();
renderExpenses();
renderPackingList();
