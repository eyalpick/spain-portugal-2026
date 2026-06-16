const itineraryData = [
            {
                dayNum: 1,
                dateText: "29 ביוני (יום שני)",
                titleHe: "נחיתה בספרד: אל-אסקוריאל, חומות אווילה וסלמנקה",
                titleEn: "Madrid Airport → Salamanca",
                driveTime: "מדריד &#8592; אל-אסקוריאל (שעה) &#8592; אווילה (שעה ורבע) &#8592; אלבה דה טורמס (שעה) &#8592; סלמנקה (חצי שעה)",
                weatherText: "סלמנקה: 31°C / 14°C",
                lodging: {
                    nameHe: "סלמנקה סוויט סטודיוס",
                    nameEn: "Salamanca Suite Studios",
                    desc: "מלון דירות סטודיו מודרני בלב סלמנקה. קרוב מאוד לכיכר המרכזית. הערות: מחיר ~102 אירו. יש מזגן. יש מטבחון. ללא ארוחת בוקר. חניה: חניון ציבורי קרוב ב-16.95 אירו ליום.",
                    bookingUrl: "https://www.booking.com/hotel/es/salamanca-suite-studios.html",
                    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Plaza+De+La+Libertad+4+Salamanca"
                },
                eatsHe: "ארוחת ערב במסעדת 'El Mesón de Gonzalo'",
                eatsDesc: "מסעדה ספרדית מסורתית ממש מול קתדרלת סלמנקה. טאפאס, בשרים על הגריל, והמנה המקומית האייקונית: 'Hornazo'.",
                eatsMapUrl: "https://www.google.com/maps/search/?api=1&query=Meson+de+Gonzalo+Salamanca",
                eatsWebUrl: "https://elmesondegonzalo.es/",
                parkingTip: "בסלמנקה: חנו בחניון הסמוך למלון כפי שהומלץ לכם על ידי המלון.",
                parkingMapUrl: "https://www.google.com/maps/search/?api=1&query=Parking+Plaza+Santa+Eulalia+Salamanca",
                activities: [
                    {
                        title: "ארמון אל-אסקוריאל (El Escorial) — תצפית מבחוץ",
                        desc: "⏱ נסיעה: שעה | שהייה: 30 דק'<br>תצפית ותמונה מבחוץ על המנזר העצום — אין צורך להיכנס.",
                        mapsQuery: "Real Monasterio de San Lorenzo de El Escorial",
                        websiteUrl: "https://entradas.patrimonionacional.es/en-GB/venta-de-entradas"
                    },
                    {
                        title: "חומות העיר אווילה (Walls of Ávila)",
                        desc: "⏱ נסיעה: שעה ורבע | שהייה: שעה<br>הליכה נמרצת על חומות ימי הביניים המשומרות ביותר בספרד.",
                        mapsQuery: "Walls of Avila",
                        websiteUrl: "https://muralladeavila.com/en/"
                    },
                    {
                        title: "⚡ Stop-Loss: אלבה דה טורמס (Alba de Tormes)",
                        desc: "⏱ נסיעה: שעה | שהייה: 30 דק'<br>טירת דוכסי אלבה ותצפית על נהר טורמס. אם הזמן לוחץ או שאתם עייפים — דלגו ישר לסלמנקה!",
                        mapsQuery: "Castillo Duques de Alba Alba de Tormes"
                    },
                    {
                        title: "פלאסה מיור של סלמנקה (Plaza Mayor)",
                        desc: "⏱ נסיעה: 30 דק' | שהייה: ערב<br>הכיכר המרכזית היפה בכל ספרד. הגעה לקראת ערב, התמקמות במלון, וארוחת ערב.",
                        mapsQuery: "Plaza Mayor Salamanca"
                    }
                ]
            },
            {
                dayNum: 2,
                dateText: "30 ביוני (יום שלישי)",
                titleHe: "חציית קווים מבוצרת: מעבר גבול אל עמק הדואורו",
                titleEn: "Salamanca → Foz Côa",
                driveTime: "סלמנקה &#8592; סיודאד רודריגו (שעה) &#8592; אלמיידה (50 דק') &#8592; קאסטלו רודריגו (35 דק') &#8592; פוז קואה (50 דק')",
                weatherText: "פוז קואה: 32°C / 16°C",
                lodging: {
                    nameHe: "אחוזת שר ד'אורדם (Quinta do Chao D'Ordem)",
                    nameEn: "Quinta do Chao D'Ordem",
                    desc: "אחוזה כפרית מקסימה סמוך לפוז קואה. חוויית דואורו אותנטית. הערות: מחיר ~85 אירו. כולל ארוחת בוקר. יש מזגן. יש בריכה. ללא מטבח. חניה: חניה פרטית חינם במקום.",
                    bookingUrl: "",
                    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Quinta+do+Chao+D'Ordem+Foz+Coa"
                },
                eatsHe: "ארוחת ערב בעיירה פוז קואה",
                eatsDesc: "מומלץ לאכול בטברנות המקומיות כמו Taberna da Julinha.",
                eatsMapUrl: "https://www.google.com/maps/search/?api=1&query=Taberna+da+Julinha+Foz+Coa",
                eatsWebUrl: "",
                parkingTip: "בפוז קואה: חניה פרטית חינם צמודה לאחוזה שלכם.",
                parkingMapUrl: "https://www.google.com/maps/search/?api=1&query=Quinta+do+Chao+D'Ordem+Foz+Coa",
                activities: [
                    {
                        title: "שוק סלמנקה (Mercado Central)",
                        desc: "⏱ נסיעה: 0 | שהייה: 30 דק'<br>הצטיידות בבוקר בפירות ונקניקים לפני הנסיעה.",
                        mapsQuery: "Mercado Central Salamanca",
                        websiteUrl: ""
                    },
                    {
                        title: "סיודאד רודריגו (Ciudad Rodrigo)",
                        desc: "⏱ נסיעה: שעה | שהייה: 45 דק'<br>העיר הספרדית המבוצרת האחרונה. סיבוב קצר על החומה.",
                        mapsQuery: "Ciudad Rodrigo",
                        websiteUrl: ""
                    },
                    {
                        title: "מעבר גבול אלמיידה",
                        desc: "⏱ נסיעה: 50 דק' | שהייה: 45 דק'<br>רישום אגרת כבישים (EasyToll) ב-Vilar Formoso והמשך למבצר הכוכב של אלמיידה.",
                        mapsQuery: "Vilar Formoso Border Crossing",
                        websiteUrl: ""
                    },
                    {
                        title: "⚡ Stop-Loss: קאסטלו רודריגו",
                        desc: "⏱ נסיעה: 35 דק' | שהייה: 30 דק'<br>כפר עתיק ויפהפה על גבעה רגע לפני עמק הדואורו. לוותר אם השמש שוקעת ורוצים להגיע באור לפוז קואה.",
                        mapsQuery: "Castelo Rodrigo"
                    }
                ]
            },
            {
                dayNum: 3,
                dateText: "1 ביולי (יום רביעי)",
                titleHe: "דרך היין של הדואורו ונסיעה לגימראייש",
                titleEn: "Foz Côa → Guimarães",
                driveTime: "פוז קואה &#8592; פיניאו (שעה ו-10 דק') &#8592; למגו (40 דק') &#8592; אמרנטה (40 דק') &#8592; גימראייש (40 דק')",
                weatherText: "גימראייש: 28°C / 14°C",
                lodging: {
                    nameHe: "ברזיליה רזידנסס",
                    nameEn: "Brasilia Residences",
                    desc: "דירה מודרנית על השדרה המרכזית הרחבה של גימראייש. הערות: מחיר ~79 אירו. יש מזגן. יש מטבחון. ללא ארוחת בוקר. חניה: חניון ציבורי קרוב ב-10 אירו ליום.",
                    bookingUrl: "",
                    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Largo+Republica+do+Brasil+42+Guimaraes"
                },
                eatsHe: "ארוחת ערב בגימראייש",
                eatsDesc: "מומלץ לאכול במסעדת A Cozinha או במסעדות בסמטאות העתיקות.",
                eatsMapUrl: "https://www.google.com/maps/search/?api=1&query=A+Cozinha+Guimaraes",
                eatsWebUrl: "",
                parkingTip: "בגימראייש: חניה בחניון ציבורי בקרבת הדירה.",
                parkingMapUrl: "https://www.google.com/maps/search/?api=1&query=Parking+Guimaraes",
                activities: [
                    {
                        title: "נסיעה על N222 לפיניאו (Pinhão)",
                        desc: "⏱ נסיעה: שעה ו-10 דק' | שהייה: -<br>נסיעת נוף מרהיבה על הכביש הצמוד לנהר ולכרמים.",
                        mapsQuery: "Pinhao",
                        websiteUrl: ""
                    },
                    {
                        title: "פיניאו וקאסאל דה לויבוס",
                        desc: "⏱ נסיעה: 15 דק' | שהייה: שעה וחצי<br>תצפית פנורמית ואפשרות לשייט קצר או טעימות יקב.",
                        mapsQuery: "Miradouro Casal de Loivos",
                        websiteUrl: ""
                    },
                    {
                        title: "מדרגות רמדיוש בלמגו (Lamego)",
                        desc: "⏱ נסיעה: 40 דק' | שהייה: 45 דק'<br>טריק למגו: סעו ישירות לחניון העליון בפסגה, תרדו מעט מדרגות לתצפית וחיזרו לרכב. אל תטפסו הכל מלמטה בחום!",
                        mapsQuery: "Santuario de Nossa Senhora dos Remedios",
                        websiteUrl: ""
                    },
                    {
                        title: "⚡ Stop-Loss: אמרנטה (Amarante)",
                        desc: "⏱ נסיעה: 40 דק' | שהייה: 45 דק'<br>עצירת קפה מול הגשר העתיק על נהר הטאמגה. לוותר במקרה של תשישות ולנסוע ישר לגימראייש.",
                        mapsQuery: "Amarante"
                    },
                    {
                        title: "הגעה לגימראייש",
                        desc: "⏱ נסיעה: 40 דק' | שהייה: ערב<br>הגעה ל'ערש האומה' ללינה וארוחת ערב בסמטאות.",
                        mapsQuery: "Guimaraes"
                    }
                ]
            },
            {
                dayNum: 4,
                dateText: "2 ביולי (יום חמישי)",
                titleHe: "שוק חמישי הגדול וירידה לפורטו",
                titleEn: "Guimarães → Barcelos → Braga → Porto",
                driveTime: "גימראייש &#8592; ברסלוס (35 דק') &#8592; בראגה (30 דק') &#8592; פורטו (45 דק')",
                weatherText: "פורטו: 25°C / 14°C",
                lodging: {
                    nameHe: "דירות פורטו בלו בוליאו",
                    nameEn: "Porto Belo Bolhao Apartments",
                    desc: "דירה מושלמת במרכז פורטו ליד השוק, עם חניה חינם מובטחת! הערות: יש מזגן. יש מטבחון מרווח. ללא ארוחת בוקר. חניה: חניה בחינם (יתרון עצום בעיר).",
                    bookingUrl: "https://www.booking.com/hotel/pt/porto-belo-bolhao-apartments.html",
                    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Rua+Fernandes+Tomas+424+Porto"
                },
                eatsHe: "ארוחת ערב בטברנה מקומית",
                eatsDesc: "מומלץ להגיע למסעדת Casa da Rua או Taberna das Taipas לטאפאס מצוין.",
                eatsMapUrl: "https://www.google.com/maps/search/?api=1&query=Casa+da+Rua+Porto",
                eatsWebUrl: "https://casadarua.pt/",
                parkingTip: "בפורטו: הרכב שלכם יחנה בבטחה בחניה החינמית של הדירה (נדיר מאוד בפורטו). אתם מתניידים רגלית בעיר.",
                parkingMapUrl: "https://www.google.com/maps/search/?api=1&query=Rua+Fernandes+Tomas+424+Porto",
                activities: [
                    {
                        title: "שוק ברסלוס (Feira de Barcelos)",
                        desc: "⏱ נסיעה: 35 דק' | שהייה: שעתיים<br>שוק יום חמישי המסורתי הענק. להגיע ב-9:30 בדיוק כדי להקדים את החום והעומס! חוויה שלא כדאי לפספס.",
                        mapsQuery: "Campo da Feira Barcelos",
                        websiteUrl: ""
                    },
                    {
                        title: "⚡ Stop-Loss: בום ז'זוש (Bom Jesus do Monte)",
                        desc: "⏱ נסיעה: 30 דק' | שהייה: שעה<br>מקדש מרהיב ביער עם מדרגות בארוקיות. עלייה בפוניקולר העתיק. לוותר רק במקרה של חוסר זמן קיצוני.",
                        mapsQuery: "Bom Jesus do Monte",
                        websiteUrl: ""
                    },
                    {
                        title: "פורטו - אזור הריביירה (Ribeira)",
                        desc: "⏱ נסיעה: 45 דק' | שהייה: אחה\"צ וערב<br>הגעה מוקדמת יחסית לפורטו, התארגנות בדירה וסיבוב ערב לאורך נהר הדואורו.",
                        mapsQuery: "Ribeira Square Porto",
                        websiteUrl: ""
                    }
                ]
            },
            {
                dayNum: 5,
                dateText: "3 ביולי (יום שישי)",
                titleHe: "חקר פורטו ומרתפי היין של גאיה",
                titleEn: "Porto City Tour",
                driveTime: "אין נסיעות מחוץ לעיר. התניידות ברגל ובחשמלית.",
                weatherText: "פורטו: 25°C / 14°C",
                lodging: {
                    nameHe: "דירות פורטו בלו בוליאו (לילה שני)",
                    nameEn: "Porto Belo Bolhao Apartments",
                    desc: "אותה הדירה כמו אתמול. הרכב נשאר בחניה.",
                    bookingUrl: "",
                    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Rua+Fernandes+Tomas+424+Porto"
                },
                eatsHe: "הכריך המפורסם: קאזה גדש (Casa Guedes)",
                eatsDesc: "חובה לנסות את כריך בשר החזיר עם גבינת כבשים הררית הנמסה בפנים.",
                eatsMapUrl: "https://www.google.com/maps/search/?api=1&query=Casa+Guedes+Porto",
                eatsWebUrl: "https://casaguedes.pt/",
                parkingTip: "הרכב נשאר בחניה של הדירה בטוח ומוגן.",
                parkingMapUrl: "",
                activities: [
                    {
                        title: "המונומנטים הגדולים בבוקר",
                        desc: "⏱ נסיעה: אין (הליכה) | שהייה: כ-3 שעות<br>מגדל קלריגוש, חנות הספרים ללו (Livraria Lello) ותחנת הרכבת המעוטרת סאו בנטו.",
                        mapsQuery: "Livraria Lello Porto",
                        websiteUrl: ""
                    },
                    {
                        title: "וילה נובה דה גאיה (Vila Nova de Gaia)",
                        desc: "⏱ נסיעה: הליכה / חשמלית | שהייה: שעתיים<br>חציית גשר דום לואיס המפורסם, וסיור צהריים/אחה\"צ במרתפי היין (חובה להזמין מראש).",
                        mapsQuery: "Taylor's Port",
                        websiteUrl: ""
                    },
                    {
                        title: "שקיעה בפוז דו דואורו (Foz do Douro)",
                        desc: "⏱ נסיעה: חשמלית מס' 1 | שהייה: ערב<br>נסיעה בחשמלית העתיקה (קו מס' 1) לשפך הנהר אל תוך האוקיינוס לאווירת שקיעה מושלמת.",
                        mapsQuery: "Foz do Douro",
                        websiteUrl: ""
                    }
                ]
            },
            {
                dayNum: 6,
                dateText: "4 ביולי (יום שבת)",
                titleHe: "מסדר המנזרים: יער בוסאקו, בטאליה וטומאר",
                titleEn: "Porto → Batalha → Tomar",
                driveTime: "פורטו &#8592; יער בוסאקו (שעה ו-40 דק') &#8592; מנזר בטאליה (שעה ו-10 דק') &#8592; טומאר (35 דק')",
                weatherText: "טומאר: 30°C / 16°C",
                lodging: {
                    nameHe: "טומאר האוזינג - סטייל",
                    nameEn: "Tomarhousing - Style",
                    desc: "דירה מרווחת בעיר העתיקה של טומאר. הערות: מחיר ~105 אירו. יש מזגן. מטבחון מאובזר. ללא ארוחת בוקר. חניה: ציבורית חינם בקרבת מקום.",
                    bookingUrl: "",
                    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Rua+D+Aurora+Macedo+15+Tomar"
                },
                eatsHe: "ארוחת אבירים ב-Taverna Antiqua",
                eatsDesc: "מסעדת קונספט בסגנון ימי הביניים ממש בכיכר טומאר (לא רחוק מהמנזר).",
                eatsMapUrl: "https://www.google.com/maps/search/?api=1&query=Taverna+Antiqua+Tomar",
                eatsWebUrl: "",
                parkingTip: "טומאר שקטה יחסית. חנו בחניה הציבורית הסמוכה לדירה.",
                parkingMapUrl: "https://www.google.com/maps/search/?api=1&query=Parking+Tomar",
                activities: [
                    {
                        title: "⚡ Stop-Loss: יער בוסאקו (Mata Nacional do Buçaco)",
                        desc: "⏱ נסיעה: שעה ו-40 דק' | שהייה: 45 דק'<br>נסיעה בתוך יער אגדתי עם תצפית מבחוץ על מלון ארמון בוסאקו. אם יצאתם מפורטו מאוחר מ-10:45 - סעו ישר לבטאליה.",
                        mapsQuery: "Palace Hotel do Bussaco",
                        websiteUrl: ""
                    },
                    {
                        title: "מנזר בטאליה (Mosteiro da Batalha)",
                        desc: "⏱ נסיעה: שעה ו-10 דק' | שהייה: שעה וחצי<br>יצירת מופת גותית עוצרת נשימה. אל תפספסו את 'הקפלות הלא גמורות' הפתוחות לשמיים.",
                        mapsQuery: "Mosteiro da Batalha",
                        websiteUrl: "https://www.mosteirobatalha.gov.pt/"
                    },
                    {
                        title: "מנזר הצלוב בטומאר (Convento de Cristo)",
                        desc: "⏱ נסיעה: 35 דק' | שהייה: שעתיים-שלוש<br>מטה הטמפלרים האדיר. חובה להגיע עד 18:00! קומפלקס ענק ומרשים בצורה יוצאת דופן.",
                        mapsQuery: "Convento de Cristo Tomar",
                        websiteUrl: "https://www.conventodecristo.gov.pt/"
                    }
                ]
            },
            {
                dayNum: 7,
                dateText: "5 ביולי (יום ראשון)",
                titleHe: "אחוזת המסתורין בסינטרה ונקודת הקיצון קאבו דה רוקה",
                titleEn: "Tomar → Sintra → Lisbon",
                driveTime: "טומאר &#8592; סינטרה (שעה ו-40 דק') &#8592; קאבו דה רוקה (30 דק') &#8592; ליסבון (שעה)",
                weatherText: "ליסבון: 28°C / 17°C",
                lodging: {
                    nameHe: "מלון HF Fénix Garden",
                    nameEn: "HF Fénix Garden",
                    desc: "מלון מצוין על כיכר המרקיז מפומבל. אסטרטגי לחלוטין למי שמגיע עם רכב. הערות: מחיר ~120 אירו ללילה. יש מזגן. ללא ארוחת בוקר. חניה: פרטית של המלון (19 אירו ליום).",
                    bookingUrl: "",
                    mapsUrl: "https://www.google.com/maps/search/?api=1&query=HF+Fenix+Garden+Lisbon"
                },
                eatsHe: "טיים אאוט מרקט (Time Out Market)",
                eatsDesc: "שוק אוכל ענק המרכז את מיטב השפים והמנות בליסבון.",
                eatsMapUrl: "https://www.google.com/maps/search/?api=1&query=Time+Out+Market+Lisbon",
                eatsWebUrl: "",
                parkingTip: "חניה נוחה וקלה בחניון המלון בכיכר מרקיז מפומבל.",
                parkingMapUrl: "https://www.google.com/maps/search/?api=1&query=HF+Fenix+Garden+Lisbon",
                activities: [
                    {
                        title: "אחוזת רגאליירה (Quinta da Regaleira)",
                        desc: "⏱ נסיעה: 10 דק' | שהייה: שעה וחצי<br>האחוזה המסתורית עם באר החניכה ההפוכה. חובה להגיע לפתיחה!",
                        mapsQuery: "Quinta da Regaleira Sintra",
                        websiteUrl: "https://regaleira.byblueticket.pt/",
                        ticketUrl: "https://regaleira.byblueticket.pt/"
                    },
                    {
                        title: "⚡ Stop-Loss: קאבו דה רוקה (Cabo da Roca)",
                        desc: "⏱ נסיעה: 30 דק' | שהייה: 30 דק'<br>הנקודה המערבית ביותר ביבשת אירופה. צוקים עוצמתיים אל מול האוקיינוס. לוותר במקרה של ערפל כבד מאוד שמונע ראות.",
                        mapsQuery: "Cabo da Roca",
                        websiteUrl: ""
                    },
                    {
                        title: "ליסבון (Lisbon)",
                        desc: "⏱ נסיעה: שעה | שהייה: אחה\"צ וערב<br>הגעה לעיר, חניה במלון, יציאה לבילוי טאפאס בכיכרות רוסיו (Rossio) ושער אוגוסטה.",
                        mapsQuery: "Praca do Rossio Lisbon",
                        websiteUrl: ""
                    }
                ]
            },
            {
                dayNum: 8,
                dateText: "6 ביולי (יום שני)",
                titleHe: "ליסבון: עוקפים את גזירת המונומנטים (אלפמה ופארק האומות)",
                titleEn: "Lisbon City Tour (Mondays Hack)",
                driveTime: "התניידות פנימית באמצעות רגליים, רכבת תחתית או Uber.",
                weatherText: "ליסבון: 29°C / 17°C",
                lodging: {
                    nameHe: "מלון HF Fénix Garden (לילה שני)",
                    nameEn: "HF Fénix Garden",
                    desc: "אותו המלון כמו אתמול.",
                    bookingUrl: "",
                    mapsUrl: "https://www.google.com/maps/search/?api=1&query=HF+Fenix+Garden+Lisbon"
                },
                eatsHe: "ארוחת ערב ב-LX Factory",
                eatsDesc: "מתחם תעשייתי משופץ עם עשרות מסעדות וברים היפסטריים ומגניבים. מושלם לערב יום שני.",
                eatsMapUrl: "https://www.google.com/maps/search/?api=1&query=LX+Factory+Lisbon",
                eatsWebUrl: "",
                parkingTip: "הרכב נח בחניון המלון.",
                parkingMapUrl: "",
                activities: [
                    {
                        title: "רובע אלפמה (Alfama)",
                        desc: "⏱ נסיעה: הליכה / חשמלית | שהייה: 3 שעות<br>סיור בוקר נעים ברובע העתיק של ליסבון. תצפיות פנורמיות (Miradouros) ושיטוט בסמטאות (אפשר להיעזר בחשמלית 28).",
                        mapsQuery: "Alfama Lisbon",
                        websiteUrl: ""
                    },
                    {
                        title: "פארק האומות והאושינריום (Parque das Nações)",
                        desc: "⏱ נסיעה: מטרו (30 דק') | שהייה: שעתיים-שלוש<br>ביום שני כל המונומנטים הלאומיים סגורים (כולל בלם), לכן מבלים ברובע המודרני ובאקווריום הענק - שפועל כרגיל!",
                        mapsQuery: "Oceanario de Lisboa",
                        websiteUrl: ""
                    },
                    {
                        title: "LX Factory",
                        desc: "⏱ נסיעה: אובר (20 דק') | שהייה: ערב<br>מתחם בילוי תוסס ואמנות רחוב לסיכום מושלם של היום.",
                        mapsQuery: "LX Factory",
                        websiteUrl: ""
                    }
                ]
            },
            {
                dayNum: 9,
                dateText: "7 ביולי (יום שלישי)",
                titleHe: "שוק, ז'רונימוש וחצייה דרומה לאלנטז'ו",
                titleEn: "Lisbon → Évora",
                driveTime: "ליסבון ← רובע בלם (20 דק') ← קרומלק אלמנדרש (שעה ו-40 דק') ← אבורה (20 דק')",
                weatherText: "אבורה: 35°C / 16°C",
                lodging: {
                    nameHe: "אבורה אוליב הוטל",
                    nameEn: "Evora Olive Hotel",
                    desc: "מלון נפלא בתוך העיר העתיקה. הערות: מחיר ~117 אירו. יש מזגן. יש בריכה. חניה: פרטית חינם במקום! (נדיר באבורה).",
                    bookingUrl: "",
                    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Evora+Olive+Hotel"
                },
                eatsHe: "טברנה טיפיקה (Taberna Típica Quarta Feira)",
                eatsDesc: "חוויה קולינרית פורטוגלית אותנטית באבורה. חובה להזמין מקום מראש כי המקום תמיד מלא.",
                eatsMapUrl: "https://www.google.com/maps/search/?api=1&query=Taberna+Tipica+Quarta+Feira+Evora",
                eatsWebUrl: "",
                parkingTip: "חנו בחניון של המלון באבורה ללא עלות נוספת.",
                parkingMapUrl: "https://www.google.com/maps/search/?api=1&query=Evora+Olive+Hotel",
                activities: [
                    {
                        title: "שוק הפשפשים (Feira da Ladra)",
                        desc: "⏱ נסיעה: אובר/הליכה | שהייה: שעתיים<br>הגעה מוקדמת לשוק שפעיל רק בימי שלישי ושבת. שוק אייקוני ואווירה מיוחדת.",
                        mapsQuery: "Feira da Ladra",
                        websiteUrl: ""
                    },
                    {
                        title: "רובע בלם (Belém) ומנזר ז'רונימוש",
                        desc: "⏱ נסיעה: אובר (20 דק') | שהייה: כ-3 שעות<br>חיתוך למערב העיר. מנזר ז'רונימוש פתוח בימי שלישי! ראו את אנדרטת התגליות, מגדל בלם והמנזר העצום. אכלו פסטל דה נאטה מקורי.",
                        mapsQuery: "Jeronimos Monastery Lisbon",
                        websiteUrl: "",
                        ticketUrl: "https://bilheteira.patrimoniocultural.pt/"
                    },
                    {
                        title: "⚡ Stop-Loss: קרומלק אלמנדרש (Cromeleque dos Almendres)",
                        desc: "⏱ נסיעה: שעה ו-40 דק' | שהייה: 45 דק'<br>מעגל אבנים עתיק באלנטז'ו ('סטונהנג' של פורטוגל). חובה לוותר אם הטמפרטורה עולה על 37 מעלות כי אין שם טיפת צל!",
                        mapsQuery: "Cromeleque dos Almendres",
                        websiteUrl: ""
                    },
                    {
                        title: "אבורה (Évora)",
                        desc: "⏱ נסיעה: 20 דק' | שהייה: אחה\"צ וערב<br>הגעה לעיר. ביקור בקפלת העצמות המצמררת (Capela dos Ossos) ובמקדש הרומי לפנות ערב.",
                        mapsQuery: "Roman Temple of Evora",
                        websiteUrl: ""
                    }
                ]
            },
            {
                dayNum: 10,
                dateText: "8 ביולי (יום רביעי)",
                titleHe: "חום לבן ודהירה חזרה לספרד",
                titleEn: "Évora → Trujillo",
                driveTime: "אבורה ← מונשראש (55 דק') ← וילה ויסוזה (45 דק') ← אלבאס (30 דק') ← טרוחיו (שעה וחצי)",
                weatherText: "טרוחיו: 37°C / 19°C",
                lodging: {
                    nameHe: "טרוחיו (Eurostars Palacio de Santa Marta)",
                    nameEn: "Eurostars Palacio de Santa Marta",
                    desc: "ארמון היסטורי צמוד לפלאסה מיור בטרוחיו. הערות: מחיר ~79 אירו. מזגן. יש בריכה. חניה: במלון ב-10 אירו.",
                    bookingUrl: "",
                    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Eurostars+Palacio+de+Santa+Marta+Trujillo"
                },
                eatsHe: "ארוחת ערב בפלאסה מיור בטרוחיו",
                eatsDesc: "אכלו באחת המסעדות המקיפות את הכיכר, כמו La Troya המפורסמת.",
                eatsMapUrl: "https://www.google.com/maps/search/?api=1&query=La+Troya+Trujillo",
                eatsWebUrl: "",
                parkingTip: "בטרוחיו: מנווטים ישירות לחניון של ארמון המלון שלכם.",
                parkingMapUrl: "https://www.google.com/maps/search/?api=1&query=Eurostars+Palacio+de+Santa+Marta+Trujillo",
                activities: [
                    {
                        title: "מונשראש (Monsaraz)",
                        desc: "⏱ נסיעה: 55 דק' | שהייה: שעה וחצי<br>כפר לבן על פסגת הר. חובה לטייל פה מוקדם בבוקר לפני ששיא החום מכה.",
                        mapsQuery: "Monsaraz",
                        websiteUrl: ""
                    },
                    {
                        title: "⚡ Stop-Loss: וילה ויסוזה (Vila Viçosa)",
                        desc: "⏱ נסיעה: 45 דק' | שהייה: שעה<br>בירת השיש האזורית עם ארמון יפהפה. לוותר אם החום הופך לבלתי נסבל.",
                        mapsQuery: "Paco Ducal de Vila Vicosa",
                        websiteUrl: ""
                    },
                    {
                        title: "מבצר אלבאס (Elvas)",
                        desc: "⏱ נסיעה: 30 דק' | שהייה: שעה<br>העיר המבוצרת האחרונה בפורטוגל. מבנה כוכב עצום ואקוודוקט ענק בכניסה.",
                        mapsQuery: "Aqueduto da Amoreira Elvas",
                        websiteUrl: ""
                    },
                    {
                        title: "חצייה לטרוחיו (Trujillo)",
                        desc: "⏱ נסיעה: שעה וחצי | שהייה: ערב<br>נהיגה מהירה לתוך ספרד, ובילוי לילי בכיכר העיר של הקונקיסטדורים הספרדים ההיסטוריים.",
                        mapsQuery: "Plaza Mayor Trujillo",
                        websiteUrl: ""
                    }
                ]
            },
            {
                dayNum: 11,
                dateText: "9 ביולי (יום חמישי)",
                titleHe: "בדרך אל המנוחה: מצפימים למדריד",
                titleEn: "Trujillo → Chinchón",
                driveTime: "טרוחיו ← צ'ינצ'ון (שעתיים ו-45 דק')",
                weatherText: "צ'ינצ'ון: 33°C / 17°C",
                lodging: {
                    nameHe: "צ'ינצ'ון (Condesa de Chinchón)",
                    nameEn: "Condesa de Chinchón",
                    desc: "מלון כפרי קסום במרחק נסיעה קצרה ממדריד. הערות: יש מזגן. מחיר 70.38 אירו. חניה: במלון ב-10 אירו ליום.",
                    bookingUrl: "",
                    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Condesa+de+Chinchon"
                },
                eatsHe: "מסעדת 'קואבס דל וינו' (Mesón Cuevas del Vino)",
                eatsDesc: "מסעדה מסורתית הממוקמת בתוך מרתף יין עתיק. חווית סיום מושלמת לטיול.",
                eatsMapUrl: "https://www.google.com/maps/search/?api=1&query=Meson+Cuevas+del+Vino+Chinchon",
                eatsWebUrl: "https://cuevasdelvino.com/en/",
                parkingTip: "בצ'ינצ'ון: חנו בחניון של המלון ב-10 אירו ליום.",
                parkingMapUrl: "https://www.google.com/maps/search/?api=1&query=Condesa+de+Chinchon",
                activities: [
                    {
                        title: "בוקר רגוע בטרוחיו",
                        desc: "⏱ נסיעה: אין | שהייה: שעתיים<br>בוקר נינוח לפני הנסיעה. אפשר לטפס ברגל קלילה אל הטירה או לשבת בכיכר לקפה של בוקר.",
                        mapsQuery: "Castillo de Trujillo",
                        websiteUrl: ""
                    },
                    {
                        title: "נסיעה רציפה מזרחה",
                        desc: "⏱ נסיעה: כשעתיים ו-45 דק' | שהייה: -<br>נהיגה זורמת וקלה על כביש A-5 שמקרב אתכם מאוד למדריד ולשדה התעופה לקראת מחר.",
                        mapsQuery: "",
                        websiteUrl: ""
                    },
                    {
                        title: "הפלאסה מיור של צ'ינצ'ון (Plaza Mayor)",
                        desc: "⏱ נסיעה: הגעה | שהייה: אחה\"צ וערב<br>הכיכר העגולה והמיוחדת במינה ששימשה בעבר כזירת מלחמות שוורים. מושלמת לארוחת ערב מסכמת.",
                        mapsQuery: "Plaza Mayor de Chinchon",
                        websiteUrl: ""
                    }
                ]
            },
            {
                dayNum: 12,
                dateText: "10 ביולי (יום שישי)",
                titleHe: "חוזרים הביתה",
                titleEn: "Chinchón → Madrid Airport (MAD)",
                driveTime: "צ'ינצ'ון &#8592; טרמינל 4 (50 דק')",
                weatherText: "טיסה הביתה",
                lodging: {
                    nameHe: "",
                    nameEn: "",
                    desc: "",
                    bookingUrl: "",
                    mapsUrl: ""
                },
                eatsHe: "",
                eatsDesc: "",
                eatsMapUrl: "",
                eatsWebUrl: "",
                parkingTip: "החזרת רכב השכרה במגרש החברות בטרמינל 4 (הראשי).",
                parkingMapUrl: "https://www.google.com/maps/search/?api=1&query=Madrid+Airport+T4+Car+Rental+Return",
                activities: [
                    {
                        title: "נסיעת השכמה לשדה התעופה",
                        desc: "⏱ נסיעה: 50 דק' | שהייה: עד הטיסה<br>חובה לצאת מהמלון עד השעה 06:30! שעת העלייה למטוס (Boarding) היא ב-09:30, אבל הטיסה ממריאה מטרמינל T4S שמצריך רכבת פנימית.",
                        mapsQuery: "Madrid Barajas Airport T4",
                        websiteUrl: ""
                    },
                    {
                        title: "החזרת רכב ונסיעה ב-APM",
                        desc: "⏱ פעילות | שהייה: לקראת הטיסה<br>לאחר החזרת הרכב והצ'ק-אין ב-T4, תצטרכו לרדת לקומה התחתונה ולקחת את הרכבת האוטומטית (APM) לטרמינל הלוויין T4S משם יוצאת טיסת אל על.",
                        mapsQuery: "",
                        websiteUrl: ""
                    }
                ]
            }
        ]

