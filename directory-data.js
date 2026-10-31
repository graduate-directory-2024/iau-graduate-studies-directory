"use strict";
// Staff details are reproduced verbatim from the user's original 2024 IAU.html.
// Historical directory (2024): names, offices, work emails, and extensions may have changed.
// Publishing publicly makes the data visible and indexable. Confirm current approval/data accuracy.
const originalStaffDirectory = {
  "عميد الدراسات العليا": [
    {
      "name": "د. سعد بن محمد السعدي",
      "office": "3107",
      "email": "gs@iau.edu.sa",
      "extension": "32555"
    }
  ],
  "وكيل الدراسات العليا": [
    {
      "name": "د. عبدالله بن احمد بن إبراهيم الداعج",
      "office": "3113",
      "email": "aaaldaeej@iau.edu.sa",
      "extension": "32130"
    }
  ],
  "سكرتير مكتب العميد": [
    {
      "name": "باسمة عبدالباري محمد جمل الليل",
      "office": "3111",
      "email": "balleel@iau.edu.sa",
      "extension": "32578"
    }
  ],
  "الشؤون الإدارية والمالية": [
    {
      "name": "أ. ميرفت احمد بكر فلاته",
      "office": "3008",
      "email": "mafallatah@iau.edu.sa",
      "extension": "32587"
    }
  ],
  "وحدة القبول": [
    {
      "name": "أ. جمعه بن عيسى حسن العبيدان",
      "office": "3067",
      "email": "jealobidan@iau.edu.sa",
      "extension": "32558"
    },
    {
      "name": "أ. سعود بن معروف زعبان المالكي",
      "office": "3069",
      "email": "smalmalki@iau.edu.sa",
      "extension": "32559"
    },
    {
      "name": "أ. عبدالمنعم بن ناصر حسن الناصر",
      "office": "3069",
      "email": "analnaser@iau.edu.sa",
      "extension": "32568"
    },
    {
      "name": "أ. هيا بنت جلوي محمد السبيعي",
      "office": "3020",
      "email": "hjalsubie@iau.edu.sa",
      "extension": "32585"
    }
  ],
  "وحدة الخريجين": [
    {
      "name": "أ. أمين بن عبدالله محمد الغريافي",
      "office": "3066",
      "email": "aalgheryafi@iau.edu.sa",
      "extension": "32553"
    },
    {
      "name": "خلود بنت محمد بن سليمان السعدي",
      "office": "3003",
      "email": "hmalsaadi@iau.edu.sa",
      "extension": "32023"
    },
    {
      "name": "أ. خيرية محمد سعيد غرامه",
      "office": "3020",
      "email": "kmgramh@iau.edu.sa",
      "extension": "32551"
    },
    {
      "name": "أ. خديجة بنت احمد محمد فقيهي",
      "office": "3003",
      "email": "kamfaqihi@iau.edu.sa",
      "extension": "32551"
    }
  ],
  "وحدة الاتصالات الإدارية": [
    {
      "name": "أ. يوسف بن عيسى محمد المبارك",
      "office": "3072",
      "email": "yealmubarak@iau.edu.sa",
      "extension": "32556"
    },
    {
      "name": "سليمان بن عبدالله حسين العريني",
      "office": "3073",
      "email": "Sahaloraini@iau.edu.sa",
      "extension": "-"
    }
  ],
  "وحدة المالية": [
    {
      "name": "أ. مشاري بن جاسم محمد الدوسري",
      "office": "3068",
      "email": "mjaldossary@iau.edu.sa",
      "extension": "32571"
    },
    {
      "name": "أ. محمد بن رضا حسن البحاري",
      "office": "3068",
      "email": "hralbahari@iau.edu.sa",
      "extension": "32557"
    },
    {
      "name": "أ. ريما بنت عبد الرحمن إبراهيم المهوس",
      "office": "3017",
      "email": "raalmahws@iau.edu.sa",
      "extension": "32593"
    },
    {
      "name": "أ. هتون محمد عبدالقادر العيساوي",
      "office": "3121",
      "email": "hmalisawi@iau.edu.sa",
      "extension": "32581"
    }
  ],
  "وحدة الشؤون الأكاديمية": [
    {
      "name": "د. محمد إسماعيل عبد الرحمن إسماعيل",
      "office": "3122",
      "email": "miismail@iau.edu.sa",
      "extension": "32570"
    }
  ],
  "وحدة الابتعاث والتدريب": [
    {
      "name": "أ. حسين بن محمد معتوق ال عاشور",
      "office": "3070",
      "email": "halashoor@iau.edu.sa",
      "extension": "32564"
    },
    {
      "name": "أ. إبراهيم بن محمد طاهر اليوسف",
      "office": "3071",
      "email": "imalyousef@iau.edu.sa",
      "extension": "32574"
    },
    {
      "name": "أ. حسين بن حسن أمان البحاري",
      "office": "3073",
      "email": "halpahary@iau.edu.sa",
      "extension": "32560"
    },
    {
      "name": "أ. إيمان بنت سميح محمد الالمعي",
      "office": "3010",
      "email": "esmalalmaie@iau.edu.sa",
      "extension": "32572"
    },
    {
      "name": "أ. ضحى بنت عبدالله عبدالعزيز الدحيلان",
      "office": "3001",
      "email": "dalduhailan@iau.edu.sa",
      "extension": "32270"
    },
    {
      "name": "أ. فيحاء بنت نايف فيجان ربيعان",
      "office": "3001",
      "email": "Fnalrobeaan@iau.edu.sa",
      "extension": "32259"
    }
  ],
  "وحدة التسجيل": [
    {
      "name": "أ. مشاعل بنت عبدالله علي المحيميد",
      "office": "3019",
      "email": "maalmohaimeed@iau.edu.sa",
      "extension": "32583"
    },
    {
      "name": "أ. نورة بنت عثمان إبراهيم العثمان",
      "office": "3020",
      "email": "noalothman@iau.edu.sa",
      "extension": "32592"
    },
    {
      "name": "أ. منى بنت سعود شديد الخالدي",
      "office": "3017",
      "email": "mssalkhaldi@iau.edu.sa",
      "extension": "32583"
    }
  ],
  "وحدة تقنية المعلومات": [
    {
      "name": "أ. هيام بنت بكر احمد بغدادي",
      "office": "3016",
      "email": "habaghdadi@iau.edu.sa",
      "extension": "32582"
    },
    {
      "name": "أ. منى بنت عبدالرحمن عبداللطيف النعيم",
      "office": "3016",
      "email": "mbalnaim@iau.edu.sa",
      "extension": "32577"
    }
  ],
  "شؤون الابتعاث": [
    {
      "name": "أ. منال بنت سلمان حمد الخالدي",
      "office": "3004",
      "email": "msalkhaldi@iau.edu.sa",
      "extension": "32590"
    },
    {
      "name": "أ. عائشة بنت عبداللطيف على ابن حريب",
      "office": "3002",
      "email": "aahareb@iau.edu.sa",
      "extension": "32589"
    },
    {
      "name": "أ. هاجر بنت علي بن إبراهيم العضيبي",
      "office": "3002",
      "email": "haalodhaib@iau.edu.sa",
      "extension": "32573"
    },
    {
      "name": "أ. شروق بنت عبدالله بن محمد البخيت",
      "office": "3010",
      "email": "samalbakheet@iau.edu.sa",
      "extension": "30808"
    },
    {
      "name": "أ. منى بنت محمد إبراهيم الجريفاني",
      "office": "3010",
      "email": "mmjurifani@iau.edu.sa",
      "extension": "32580"
    },
    {
      "name": "أ. منال بنت عبدالعزيز خليفة الدوسري",
      "office": "3002",
      "email": "mndossary@iau.edu.sa",
      "extension": "32588"
    }
  ]
};
