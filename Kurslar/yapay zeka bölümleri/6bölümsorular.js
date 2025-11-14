// Yapay Zekâ Dersi - Bölüm 6 Sınav Soruları
// CHAPTER 6: Genetik Algoritmalar (GA) - Tanımlar, Kodlama Türleri, Seçim, Çaprazlama, Mutasyon

const questions = [
    {
        question: "Genetik algoritmaların ortaya çıkışında rol oynayan temel biyolojik prensipler aşağıdakilerden hangisidir?",
        options: [
            "Çiftleşme, özellik aktarma, güçlü olanın yaşama şansı ve önceden bilinmeyen değişimler",
            "Sadece çiftleşme ve özellik aktarma",
            "Sadece mutasyon ve doğal seçilim",
            "Sadece kalıtım ve adaptasyon",
            "Sadece popülasyon genetiği"
        ],
        correctAnswer: "A",
        explanation: "Genetik algoritmalar, canlıların çiftleşmesi sonucunda özelliklerini bir sonraki nesle aktarma yetenekleri, güçlü olanın yaşama şansının yüksek olması (doğal seçilim) ve önceden nasıl olacağı bilinmeyen değişimlerin (mutasyon) bir hesaplama yöntemi içerisinde bir arada kullanılması sonucunda ortaya çıkmıştır.",
        wrongExplanations: [
            { option: "B", reason: "Sadece çiftleşme ve özellik aktarma yeterli değildir, diğer prensipler de gereklidir." },
            { option: "C", reason: "Mutasyon ve doğal seçilim yeterli değildir, çiftleşme ve özellik aktarma da gereklidir." },
            { option: "D", reason: "Kalıtım ve adaptasyon yeterli değildir, tüm prensipler birlikte çalışır." },
            { option: "E", reason: "Popülasyon genetiği tek başına yeterli değildir, tüm biyolojik prensipler birlikte kullanılır." }
        ]
    },
    {
        question: "John Holland ve arkadaşlarının 1970'li yıllarda ortaya çıkardığı SGA (Simple Genetic Algorithm) ile ilgili aşağıdakilerden hangisi doğrudur?",
        options: [
            "SGA, Goldberg'ın 1989 yılındaki eserinden sonra geliştirilmiştir",
            "SGA, fazla sayıda sınırlama içeren ve karmaşık optimizasyon sorunlarının çözümlerini araştırmak için geliştirilmiştir",
            "SGA sadece ikili kodlama ile çalışır",
            "SGA sadece permütasyon problemleri için kullanılır",
            "SGA deterministik bir algoritmadır"
        ],
        correctAnswer: "B",
        explanation: "GA yöntemi ilk olarak John Holland ve arkadaşlarının yaptığı çalışmalarda 1970'li yıllarda ortaya çıkmıştır (SGA). GA'nın temel amacı, fazla sayıda sınırlama içeren ve karmaşık optimizasyon sorunlarının çözümlerini, yazılımlar yardımıyla araştırmaktır.",
        wrongExplanations: [
            { option: "A", reason: "SGA 1970'lerde geliştirilmiştir, Goldberg'ın eseri 1989'da yayınlanmıştır." },
            { option: "C", reason: "SGA sadece ikili kodlama ile sınırlı değildir, farklı kodlama türleri kullanılabilir." },
            { option: "D", reason: "SGA sadece permütasyon problemleri için değil, geniş bir problem yelpazesi için kullanılır." },
            { option: "E", reason: "SGA deterministik değil, rastlantısal geçiş kuralları kullanır." }
        ]
    },
    {
        question: "GA'nın klasik optimizasyon yöntemlerinden temel farkları aşağıdakilerden hangisinde doğru verilmiştir?",
        options: [
            "GA parametrelerin kendileriyle uğraşır, amaç fonksiyonunun türevlerini kullanır ve tek bir noktadan aramaya başlar",
            "GA deterministik kurallar kullanır ve yerel en iyi çözümde sıkışır",
            "GA sadece türevlenebilir fonksiyonlar için çalışır",
            "GA parametre takımının kodlanmış haliyle uğraşır, amaç fonksiyonunun kendisini kullanır, noktalar kümesinden başlar ve rastlantısal geçiş kuralları kullanır",
            "GA sadece tek boyutlu problemler için uygundur"
        ],
        correctAnswer: "D",
        explanation: "GA'nın klasik optimizasyondan farkları: (1) GA parametrelerin kendileri ile değil, parametre takımının kodlanmış bir haliyle uğraşırlar. (2) GA amaç fonksiyonunun türevlerini ve ek bilgileri değil, doğrudan amaç fonksiyonunun kendisini kullanırlar. (3) Genetik algoritmalar aramaya tek bir noktadan değil, noktalar kümesinden başlar, bu nedenle çoğunlukla yerel en iyi çözümde sıkışıp kalmazlar. (4) GA'da deterministlik değil rastlantısal geçiş kuralları kullanılır.",
        wrongExplanations: [
            { option: "A", reason: "Bu klasik optimizasyon yöntemlerinin özellikleridir, GA'nın değil." },
            { option: "B", reason: "GA deterministik değil rastlantısal kurallar kullanır ve yerel optimumda sıkışma riski düşüktür." },
            { option: "C", reason: "GA türevlenebilir olmayan fonksiyonlar için de çalışabilir." },
            { option: "E", reason: "GA çok boyutlu problemler için de uygundur." }
        ]
    },
    {
        question: "GA algoritmasının adımları sırasıyla aşağıdakilerden hangisinde doğru verilmiştir?",
        options: [
            "Amaç fonksiyonu değerlerini hesapla → Başlangıç popülasyonu üret → Operatörleri uygula → Tekrarla",
            "Başlangıç popülasyonu üret → Amaç fonksiyonu değerlerini hesapla → Operatörleri uygula → Yeni kromozomların amaç fonksiyonu değerlerini bul → Kötü kromozomları çıkar → Tekrarla",
            "Operatörleri uygula → Başlangıç popülasyonu üret → Amaç fonksiyonu değerlerini hesapla → Tekrarla",
            "Kötü kromozomları çıkar → Başlangıç popülasyonu üret → Operatörleri uygula → Tekrarla",
            "Yeni kromozomların amaç fonksiyonu değerlerini bul → Başlangıç popülasyonu üret → Operatörleri uygula → Tekrarla"
        ],
        correctAnswer: "B",
        explanation: "GA adımları: (1) Başlangıç popülasyonunu rastlantısal olarak üret. (2) Popülasyon içindeki tüm kromozomların amaç fonksiyonu değerlerini hesapla. (3) Tekrar üreme, çaprazlama ve mutasyon operatörlerini uygula. (4) Oluşturulan her yeni kromozomun amaç fonksiyonu değerlerini bul. (5) Amaç fonksiyonu değerleri kötü olan kromozomlar popülasyondan çıkar. (6) 3-5 arasındaki adımlar tekrar et.",
        wrongExplanations: [
            { option: "A", reason: "Önce başlangıç popülasyonu üretilmeli, sonra amaç fonksiyonu değerleri hesaplanmalıdır." },
            { option: "C", reason: "Operatörler uygulanmadan önce başlangıç popülasyonu oluşturulmalı ve amaç fonksiyonu değerleri hesaplanmalıdır." },
            { option: "D", reason: "Kötü kromozomları çıkarmadan önce popülasyon oluşturulmalı ve operatörler uygulanmalıdır." },
            { option: "E", reason: "Yeni kromozomlar oluşturulmadan önce başlangıç popülasyonu oluşturulmalıdır." }
        ]
    },
    {
        question: "GA akış diyagramında 'Elitizm' mekanizması hangi iki adım arasında gerçekleşir?",
        options: [
            "Başlangıç popülasyonu ile Uygunluk değerlendirme arasında",
            "Çaprazlama ile Mutasyon arasında",
            "Mutasyon ile Yeni Popülasyon arasında",
            "Uygunluk değerlendirme ile Yeni Popülasyon arasında, Seçim-Çaprazlama-Mutasyon sürecini atlayarak",
            "Seçim ile Çaprazlama arasında"
        ],
        correctAnswer: "D",
        explanation: "Elitizm mekanizması, uygunluk değerlendirme aşamasından doğrudan Yeni Popülasyon'a geçiş yapar. Bu sayede en iyi uygunluğa sahip bireyler, seçim-çaprazlama-mutasyon sürecini atlayarak doğrudan yeni nesle aktarılır. Bu, en iyi çözümlerin kaybolmasını önler.",
        wrongExplanations: [
            { option: "A", reason: "Elitizm başlangıç popülasyonu ile uygunluk değerlendirme arasında değil, uygunluk değerlendirme ile yeni popülasyon arasındadır." },
            { option: "B", reason: "Elitizm çaprazlama ile mutasyon arasında değil, uygunluk değerlendirme ile yeni popülasyon arasındadır." },
            { option: "C", reason: "Elitizm mutasyon ile yeni popülasyon arasında değil, uygunluk değerlendirme ile yeni popülasyon arasındadır ve süreci atlar." },
            { option: "E", reason: "Elitizm seçim ile çaprazlama arasında değil, tüm bu süreçleri atlayarak doğrudan yeni popülasyona geçer." }
        ]
    },
    {
        question: "Yapay sistemlerde 'Gen' kavramı aşağıdakilerden hangisi ile tanımlanır?",
        options: [
            "Birden fazla genin bir araya gelerek oluşturduğu dizi",
            "Alternatif aday çözümleri gösteren yapı",
            "Kromozomlardan oluşan topluluk",
            "Kendi başına anlamlı bilgi taşıyan en küçük birim",
            "Geçerli alternatif çözüm kümesi"
        ],
        correctAnswer: "E",
        explanation: "Yapay sistemlerde gen, kendi başına anlamlı bilgi taşıyan en küçük birim olarak tanımlanır. Biyolojik sistemlerde ise gen, kalıtsal molekülde bulunan ve organizmanın karakterlerinin tayininde rol oynayan kalıtsal birimlere denir.",
        wrongExplanations: [
            { option: "A", reason: "Bu kromozomun tanımıdır, genin değil." },
            { option: "B", reason: "Bu kromozomun özelliğidir, genin tanımı değildir." },
            { option: "C", reason: "Bu popülasyonun tanımıdır, genin değil." },
            { option: "D", reason: "Bu popülasyonun özelliğidir, genin tanımı değildir." }
        ]
    },
    {
        question: "Popülasyondaki kromozom sayısı ile ilgili aşağıdakilerden hangisi doğrudur?",
        options: [
            "GA'da popülasyondaki birey sayısı ile ilgili kesin bir kural vardır",
            "Popülasyondaki kromozom sayısı arttıkça çözüme ulaşma süresi (iterasyon sayısı) artar",
            "Popülasyondaki birey sayısı genelde değişken tutulur",
            "Popülasyon sadece tek bir kromozomdan oluşur",
            "Popülasyondaki kromozom sayısı arttıkça çözüme ulaşma süresi (iterasyon sayısı) azalır"
        ],
        correctAnswer: "E",
        explanation: "Popülasyondaki kromozom sayısı arttıkça çözüme ulaşma süresi (iterasyon sayısı) azalır. Ancak GA'da popülasyondaki birey sayısı ile ilgili genel bir kural yoktur ve popülasyondaki birey sayısı (kromozom) genelde sabit tutulur.",
        wrongExplanations: [
            { option: "A", reason: "GA'da popülasyondaki birey sayısı ile ilgili genel bir kural yoktur." },
            { option: "B", reason: "Ters ilişki vardır: kromozom sayısı arttıkça iterasyon sayısı azalır." },
            { option: "C", reason: "Popülasyondaki birey sayısı genelde sabit tutulur, değişken değildir." },
            { option: "D", reason: "Popülasyon birden fazla kromozomdan oluşur, tek bir kromozomdan oluşmaz." }
        ]
    },
    {
        question: "GA'da kodlama ile ilgili aşağıdakilerden hangisi yanlıştır?",
        options: [
            "Kodlama GA'nın çok önemli bir kısmını oluşturmaktadır",
            "Probleme GA uygulanmadan önce, verinin uygun şekilde kodlanması gerekmektedir",
            "Kurulan genetik modelin hızlı ve güvenilir çalışması için kodlamanın doğru yapılması gerekmektedir",
            "Kodlama, problemin yapısına uygun olarak seçilmelidir",
            "Kodlama GA için önemsiz bir detaydır ve herhangi bir şekilde yapılabilir"
        ],
        correctAnswer: "E",
        explanation: "Kodlama GA'nın çok önemli bir kısmını oluşturmaktadır. Probleme GA uygulanmadan önce, verinin uygun şekilde kodlanması gerekmektedir. Kurulan genetik modelin hızlı ve güvenilir çalışması için bu kodlamanın doğru yapılması gerekmektedir. Dolayısıyla kodlama önemsiz bir detay değildir.",
        wrongExplanations: [
            { option: "A", reason: "Bu doğrudur, kodlama GA'nın çok önemli bir kısmıdır." },
            { option: "B", reason: "Bu doğrudur, verinin uygun şekilde kodlanması gerekmektedir." },
            { option: "C", reason: "Bu doğrudur, kodlamanın doğru yapılması gerekmektedir." },
            { option: "D", reason: "Bu doğrudur, kodlama problemin yapısına uygun seçilmelidir." }
        ]
    },
    {
        question: "İkili kodlamada aşağıdakilerden hangisi doğrudur?",
        options: [
            "Her kromozom ondalık diziye sahiptir",
            "İkili kodlama en az kullanılan yöntemdir",
            "İkili kodlama sadece permütasyon problemleri için kullanılır",
            "Her kromozom ikili diziye sahiptir {0, 1} ve bu dizideki her bit, çözümün belli karakteristiğini temsil eder veya tüm dizi bir sayıyı temsil eder",
            "İkili kodlamada bit sayısı sabit olmak zorunda değildir"
        ],
        correctAnswer: "D",
        explanation: "İkili kodlamada her kromozom ikili diziye sahiptir {0, 1}. Bu dizideki her bit, çözümün belli karakteristiğini temsil eder veya tüm dizi bir sayıyı temsil eder. Kodlamada en sık kullanılan yöntemdir. Örnek: {10101001}.",
        wrongExplanations: [
            { option: "A", reason: "İkili kodlamada ondalık değil, ikili (0 ve 1) dizi kullanılır." },
            { option: "B", reason: "İkili kodlama en sık kullanılan yöntemdir, en az kullanılan değildir." },
            { option: "C", reason: "İkili kodlama sadece permütasyon problemleri için değil, geniş bir problem yelpazesi için kullanılır." },
            { option: "E", reason: "İkili kodlamada genellikle bit sayısı sabittir, problem yapısına göre belirlenir." }
        ]
    },
    {
        question: "Permütasyon kodlamanın kullanım alanları aşağıdakilerden hangisinde doğru verilmiştir?",
        options: [
            "Sadece fonksiyon optimizasyonu problemleri",
            "Sadece ikili optimizasyon problemleri",
            "Sadece sürekli değişkenli problemler",
            "Düzenleme problemlerinde, özellikle gezgin satıcı ve çizelgeleme problemleri için kullanışlıdır",
            "Sadece ağaç yapılı problemler"
        ],
        correctAnswer: "D",
        explanation: "Permütasyon kodlama düzenleme problemlerinde kullanılır. Burada her kromozom, sayıları bir sırada temsil etmektedir. Permütasyon kodlama, gezgin satıcı ve çizelgeleme problemleri için kullanışlıdır. Örnek: Kromozom A: 78941, Kromozom B: 87914.",
        wrongExplanations: [
            { option: "A", reason: "Permütasyon kodlama sadece fonksiyon optimizasyonu için değil, düzenleme problemleri için kullanılır." },
            { option: "B", reason: "Permütasyon kodlama ikili optimizasyon problemleri için değil, sıralama/düzenleme problemleri için kullanılır." },
            { option: "C", reason: "Permütasyon kodlama sürekli değişkenli problemler için değil, ayrık sıralama problemleri için kullanılır." },
            { option: "E", reason: "Permütasyon kodlama ağaç yapılı problemler için değil, düzenleme problemleri için kullanılır." }
        ]
    },
    {
        question: "Değer kodlamada aşağıdakilerden hangisi doğrudur?",
        options: [
            "Sadece ikili değerler kullanılır",
            "Değer kodlama sadece kategorik veriler için kullanılır",
            "Değer kodlama sadece tamsayılar için kullanılır",
            "Gerçek sayılar gibi karmaşık değerlerin kullanıldığı problemlerde, ikili kodlama zor olduğu için doğrudan değer kodlanması kullanılabilir",
            "Değer kodlama hiçbir zaman kullanılmaz"
        ],
        correctAnswer: "D",
        explanation: "Gerçek sayılar gibi karmaşık değerlerin kullanıldığı problemlerde, ikili kodlama zor olduğu için doğrudan değer kodlanması kullanılabilir. Örnek: Kromozom A: 1.2324 3.5354 4.6465 3.5556 (gerçek sayılar) veya Kromozom B: Doğu, Batı, Güney, Kuzey (kategorik değerler).",
        wrongExplanations: [
            { option: "A", reason: "Değer kodlamada ikili değil, gerçek sayılar veya kategorik değerler kullanılır." },
            { option: "B", reason: "Değer kodlama sadece kategorik veriler için değil, gerçek sayılar için de kullanılır." },
            { option: "C", reason: "Değer kodlama sadece tamsayılar için değil, gerçek sayılar ve kategorik değerler için de kullanılır." },
            { option: "E", reason: "Değer kodlama kullanılır, özellikle gerçek sayılı problemlerde." }
        ]
    },
    {
        question: "Ağaç kodlamanın kullanım alanı aşağıdakilerden hangisidir?",
        options: [
            "Sadece sıralama problemleri",
            "Sadece ikili optimizasyon problemleri",
            "Sadece permütasyon problemleri",
            "Gelişen, değişen programlar veya ifadeler için kullanılır",
            "Sadece sürekli optimizasyon problemleri"
        ],
        correctAnswer: "D",
        explanation: "Ağaç kodlama yöntemi gelişen, değişen programlar veya ifadeler için kullanılır. Örneğin GA'da ağaç kodlamada her kromozom, bazı nesnelerin (örneğin fonksiyonlar ya da programlama dilindeki komutlar gibi) ağacıdır. Örnek: (z/3)-g ifadesi bir ağaç yapısı olarak temsil edilir.",
        wrongExplanations: [
            { option: "A", reason: "Ağaç kodlama sıralama problemleri için değil, program/ifade problemleri için kullanılır." },
            { option: "B", reason: "Ağaç kodlama ikili optimizasyon problemleri için değil, program/ifade problemleri için kullanılır." },
            { option: "C", reason: "Ağaç kodlama permütasyon problemleri için değil, program/ifade problemleri için kullanılır." },
            { option: "E", reason: "Ağaç kodlama sürekli optimizasyon problemleri için değil, program/ifade problemleri için kullanılır." }
        ]
    },
    {
        question: "Rulet-Çember Seçimi (Roulette Wheel Selection) ile ilgili aşağıdakilerden hangisi yanlıştır?",
        options: [
            "En basit seçim yöntemi olarak bilinmektedir",
            "Tüm fertler birbirine bitişik bir şekilde düz bir çizgi üzerine dizilirler",
            "Her bir ferde ilişkin bölümün uzunluğu, onun uygunluk değeri kadar olur",
            "Rasgele sayı üretilir ve rasgele sayı hangi bölüm içerisine gelirse, o bölümün ait olduğu fert seçilir",
            "Bu yöntem her zaman en iyi sonuçları verir ve hiçbir dezavantajı yoktur"
        ],
        correctAnswer: "E",
        explanation: "Rulet-Çember Seçimi en basit seçim yöntemidir. Uygulanışı: (1) Tüm fertler birbirine bitişik bir şekilde düz bir çizgi üzerine dizilirler. (2) Her bir ferde ilişkin bölümün uzunluğu, onun uygunluk değeri kadar olur. (3) Rasgele sayı üretilir ve rasgele sayı hangi bölüm içerisine gelirse, o bölümün ait olduğu fert seçilir. (4) İşlem ulaşılacak popülasyonun gerekli adedi elde edilene kadar devam eder. Ancak bu yöntemin dezavantajları vardır (örneğin, en iyi kromozomun uygunluk değeri çok yüksekse problem yaratabilir).",
        wrongExplanations: [
            { option: "A", reason: "Bu doğrudur, en basit seçim yöntemidir." },
            { option: "B", reason: "Bu doğrudur, fertler düz bir çizgi üzerine dizilir." },
            { option: "C", reason: "Bu doğrudur, bölüm uzunluğu uygunluk değeriyle orantılıdır." },
            { option: "D", reason: "Bu doğrudur, rasgele sayıya göre seçim yapılır." }
        ]
    },
    {
        question: "Rank Seçimi (Rank Selection) hangi durumda kullanılır?",
        options: [
            "Her zaman kullanılır çünkü en iyi yöntemdir",
            "Sadece küçük popülasyonlar için kullanılır",
            "Sadece büyük popülasyonlar için kullanılır",
            "En iyi kromozomun uygunluk değeri çok yüksek olduğunda, Rulet-Çember seçimi problem yaratabileceği için kullanılır",
            "Hiçbir zaman kullanılmaz"
        ],
        correctAnswer: "D",
        explanation: "Eğer en iyi kromozomun uygunluk değeri çok yüksekse, Rulet-Çember seçimi problemi yaratabilir (sürekli yüksek olasılıkla seçilir). Bu durumda Rank Seçimi uygulanabilir. Rank Seçiminde popülasyon uygunluk değerlerine göre ters sırada sıralanır. N bireyli popülasyonda en iyi kromozom N değerini alır. Seçim bu rank değerlerine göre yapılır.",
        wrongExplanations: [
            { option: "A", reason: "Rank Seçimi her zaman kullanılmaz, belirli durumlarda kullanılır." },
            { option: "B", reason: "Rank Seçimi popülasyon büyüklüğüne bağlı değildir, uygunluk değerlerinin dağılımına bağlıdır." },
            { option: "C", reason: "Rank Seçimi popülasyon büyüklüğüne bağlı değildir." },
            { option: "E", reason: "Rank Seçimi kullanılır, özellikle uygunluk değerleri arasında büyük fark olduğunda." }
        ]
    },
    {
        question: "Kararlı Hal Seçimi (Steady-State Selection) ile ilgili aşağıdakilerden hangisi doğrudur?",
        options: [
            "Popülasyonun büyük kısmı bir sonraki nesilde değişir",
            "Yeni çocuklar oluşturmak için her nesilde UD düşük birkaç kromozom seçilir",
            "UD yüksek kromozomlar atılır ve yeni çocuk onun yerine yerleştirilir",
            "Popülasyonun geri kalan kısmı yeni nesilde değişir",
            "Ana düşünce, kromozomların büyük kısmının bir sonraki nesilde hayatta kalmak zorunda olmasıdır"
        ],
        correctAnswer: "E",
        explanation: "Kararlı Hal Seçiminin ana düşüncesi, kromozomların büyük kısmının bir sonraki nesilde hayatta kalmak zorunda olmasıdır. Yeni çocuklar oluşturmak için her nesilde UD yüksek birkaç kromozom seçilir. UD düşük bazı kromozomlar atılır ve yeni çocuk onun yerine yerleştirilir. Popülasyonun geri kalan kısmı yeni nesilde hayattadır.",
        wrongExplanations: [
            { option: "A", reason: "Popülasyonun büyük kısmı bir sonraki nesilde hayatta kalır, değişmez." },
            { option: "B", reason: "UD yüksek kromozomlar seçilir, düşük değil." },
            { option: "C", reason: "UD düşük kromozomlar atılır, yüksek değil." },
            { option: "D", reason: "Popülasyonun geri kalan kısmı yeni nesilde hayattadır, değişmez." }
        ]
    },
    {
        question: "Çaprazlama (Crossover) operatörü ile ilgili aşağıdakilerden hangisi doğrudur?",
        options: [
            "Çaprazlama, tek bir kromozomun genlerini değiştirerek yeni bir kromozom oluşturur",
            "Çaprazlama GA'da önemsiz bir parametredir",
            "Çaprazlama sadece ikili kodlama için kullanılır",
            "Çaprazlama, iki kromozomun (çözümün) birbirleri arasında gen alışverişinde bulunup iki yeni kromozom oluşturmasıdır",
            "Çaprazlama deterministik bir işlemdir"
        ],
        correctAnswer: "D",
        explanation: "Çaprazlama, iki kromozomun (çözümün) birbirleri arasında gen alışverişinde bulunup iki yeni kromozom oluşturmasıdır. Genetik algoritmadaki en önemli parametrelerden bir tanesidir. Seçim yöntemi ile yapay seçim sonucunda elde edilen yeni popülasyon dizisinden rastsal olarak iki kromozom seçilir ve karşılıklı çaprazlama işlemine tâbi tutulur.",
        wrongExplanations: [
            { option: "A", reason: "Çaprazlama tek bir kromozom değil, iki kromozom arasında gen alışverişidir." },
            { option: "B", reason: "Çaprazlama GA'da en önemli parametrelerden biridir, önemsiz değildir." },
            { option: "C", reason: "Çaprazlama sadece ikili kodlama için değil, değer kodlama ve permütasyon kodlama için de kullanılır." },
            { option: "E", reason: "Çaprazlama rastsal bir işlemdir, deterministik değildir." }
        ]
    },
    {
        question: "1-Noktalı Çaprazlama (İkili Kod) için Pc (çaprazlama olasılığı) genellikle hangi aralıktadır?",
        options: [
            "0.0 - 0.3",
            "0.3 - 0.6",
            "0.9 - 1.0",
            "0.6 - 0.9",
            "Her zaman 1.0"
        ],
        correctAnswer: "D",
        explanation: "1-Noktalı Çaprazlamada Pc (çaprazlama olasılığı) genellikle 0.6 ile 0.9 aralığındadır. Bu, çaprazlama işleminin yüksek olasılıkla gerçekleşeceği anlamına gelir. Örnek: Parent 1: 000000000000000000, Parent 2: 111111111111111111 → Child 1: 000001111111111111, Child 2: 111110000000000000 (k=5 noktasında çaprazlama).",
        wrongExplanations: [
            { option: "A", reason: "0.0-0.3 aralığı çok düşüktür, çaprazlama çok nadiren gerçekleşir." },
            { option: "B", reason: "0.3-0.6 aralığı genellikle kullanılmaz, daha yüksek değerler tercih edilir." },
            { option: "C", reason: "0.9-1.0 aralığı çok yüksektir, genellikle 0.6-0.9 aralığı kullanılır." },
            { option: "E", reason: "Pc her zaman 1.0 değildir, genellikle 0.6-0.9 aralığındadır." }
        ]
    },
    {
        question: "N-Noktalı Çaprazlama (İkili Kod) ile 1-Noktalı Çaprazlama arasındaki temel fark nedir?",
        options: [
            "N-Noktalı çaprazlamada sadece bir noktada gen alışverişi yapılır",
            "N-Noktalı çaprazlama sadece permütasyon kodlama için kullanılır",
            "N-Noktalı çaprazlama deterministik bir işlemdir",
            "N-Noktalı çaprazlamada birden fazla noktada gen alışverişi yapılır, bu sayede daha fazla genetik çeşitlilik sağlanır",
            "N-Noktalı çaprazlama hiçbir zaman kullanılmaz"
        ],
        correctAnswer: "D",
        explanation: "N-Noktalı çaprazlamada birden fazla noktada gen alışverişi yapılır. Örneğin 3-noktalı çaprazlamada, parent'lardan child'lara geçişte üç farklı noktada segment değişimi gerçekleşir. Bu sayede 1-noktalı çaprazlamaya göre daha fazla genetik çeşitlilik sağlanır. Örnek: Parent 1: 00000000000000000000, Parent 2: 11111111111111111111 → Child 1: 00000111000000111111, Child 2: 11111000111111000000 (3 noktada çaprazlama).",
        wrongExplanations: [
            { option: "A", reason: "N-Noktalı çaprazlamada birden fazla noktada gen alışverişi yapılır, tek nokta değil." },
            { option: "B", reason: "N-Noktalı çaprazlama sadece permütasyon kodlama için değil, ikili kodlama için de kullanılır." },
            { option: "C", reason: "N-Noktalı çaprazlama rastsal bir işlemdir, deterministik değildir." },
            { option: "E", reason: "N-Noktalı çaprazlama kullanılır, özellikle daha fazla çeşitlilik istenildiğinde." }
        ]
    },
    {
        question: "Düzenli Çaprazlama (Regular Crossover) ile ilgili aşağıdakilerden hangisi doğrudur?",
        options: [
            "Düzenli çaprazlama sadece tek bir noktada gen alışverişi yapar",
            "Düzenli çaprazlama sadece permütasyon kodlama için kullanılır",
            "Düzenli çaprazlama deterministik bir işlemdir",
            "Düzenli çaprazlama, ikili kodlama için kullanılan ve genlerin düzenli bir şekilde karıştırıldığı bir yöntemdir",
            "Düzenli çaprazlama hiçbir zaman kullanılmaz"
        ],
        correctAnswer: "D",
        explanation: "Düzenli çaprazlama, ikili kodlama için kullanılan bir yöntemdir. Bu yöntemde genler düzenli bir şekilde karıştırılır. Örnek: Parent 1: 0000000000000000, Parent 2: 1111111111111111 → Child 1: 0100101100010110, Child 2: 1011000111010011. Genler düzenli bir desenle karıştırılmıştır.",
        wrongExplanations: [
            { option: "A", reason: "Düzenli çaprazlama tek bir noktada değil, düzenli bir desenle gen alışverişi yapar." },
            { option: "B", reason: "Düzenli çaprazlama sadece permütasyon kodlama için değil, ikili kodlama için kullanılır." },
            { option: "C", reason: "Düzenli çaprazlama rastsal bir işlemdir, deterministik değildir." },
            { option: "E", reason: "Düzenli çaprazlama kullanılır, özellikle düzenli gen karışımı istenildiğinde." }
        ]
    },
    {
        question: "Tek Aritmetik Çaprazlama (Değer Kod) formülü aşağıdakilerden hangisidir? (k: çaprazlama noktası, α: ağırlık faktörü)",
        options: [
            "child1: (x₁,..., xₖ, α·yₖ₊₁ + (1-α)·xₖ₊₁, ..., xₙ)",
            "child1: (x₁,..., xₖ, α·yₖ + (1-α)·xₖ, ..., xₙ)",
            "child1: (y₁,..., yₖ, α·xₖ + (1-α)·yₖ, ..., yₙ)",
            "child1: (x₁,..., xₖ, xₖ₊₁, ..., xₙ)",
            "child1: (y₁,..., yₖ, yₖ₊₁, ..., yₙ)"
        ],
        correctAnswer: "B",
        explanation: "Tek Aritmetik Çaprazlamada, atalar (x₁,...,xₙ) ve (y₁,...,yₙ) olmak üzere, k gelişigüzel seçilir. child1: (x₁,..., xₖ, α·yₖ + (1-α)·xₖ, ..., xₙ) formülü kullanılır. Diğer child için tersidir. α = 0.5 için genellikle kullanılır.",
        wrongExplanations: [
            { option: "A", reason: "Formülde yₖ₊₁ değil, yₖ kullanılır ve k+1 pozisyonunda değil, k pozisyonunda aritmetik kombinasyon yapılır." },
            { option: "C", reason: "Bu formül child1 için değil, child2 için kullanılabilir, ancak doğru formül x'ten başlar." },
            { option: "D", reason: "Bu sadece kopyalama işlemidir, aritmetik çaprazlama değildir." },
            { option: "E", reason: "Bu sadece y'den kopyalama işlemidir, aritmetik çaprazlama değildir." }
        ]
    },
    {
        question: "Basit Aritmetik Çaprazlama (Değer Kod) formülü aşağıdakilerden hangisidir?",
        options: [
            "⟨x₁,...,xₖ, α·yₖ + (1-α)·xₖ, ..., xₙ⟩",
            "⟨y₁,...,yₖ, α·xₖ + (1-α)·yₖ, ..., yₙ⟩",
            "⟨x₁,...,xₖ, xₖ₊₁, ..., xₙ⟩",
            "⟨x₁,...,xₖ, α·yₖ₊₁ + (1-α)·xₖ₊₁, ..., α·yₙ + (1-α)·xₙ⟩",
            "a·x̄ + (1-a)·ȳ"
        ],
        correctAnswer: "D",
        explanation: "Basit Aritmetik Çaprazlamada formül: ⟨x₁,...,xₖ, α·yₖ₊₁ + (1-α)·xₖ₊₁, ..., α·yₙ + (1-α)·xₙ⟩ şeklindedir. İlk k gen x'ten kopyalanır, k+1'den n'ye kadar olan genler aritmetik kombinasyonla oluşturulur. α = 0.5 için genellikle kullanılır.",
        wrongExplanations: [
            { option: "A", reason: "Bu Tek Aritmetik Çaprazlama formülüdür, Basit Aritmetik değil." },
            { option: "B", reason: "Bu formül y'den başlar, Basit Aritmetik Çaprazlama x'ten başlar." },
            { option: "C", reason: "Bu sadece kopyalama işlemidir, aritmetik çaprazlama değildir." },
            { option: "E", reason: "Bu Bütün Aritmetik Çaprazlama formülüdür, Basit Aritmetik değil." }
        ]
    },
    {
        question: "Bütün Aritmetik Çaprazlama (Değer Kod) formülü aşağıdakilerden hangisidir?",
        options: [
            "⟨x₁,...,xₖ, α·yₖ₊₁ + (1-α)·xₖ₊₁, ..., α·yₙ + (1-α)·xₙ⟩",
            "⟨x₁,...,xₖ, α·yₖ + (1-α)·xₖ, ..., xₙ⟩",
            "⟨x₁,...,xₖ, xₖ₊₁, ..., xₙ⟩",
            "Sadece permütasyon kodlama için kullanılır",
            "a·x̄ + (1-a)·ȳ"
        ],
        correctAnswer: "E",
        explanation: "Bütün Aritmetik Çaprazlamada formül: a·x̄ + (1-a)·ȳ şeklindedir. Bu formülde tüm genler aritmetik olarak birleştirilir. a = 0.5 için genellikle kullanılır ve bu durumda her iki child aynı olur (basit ortalama). Örnek: Parent 1: 0.1 0.2 0.3 0.4 0.5 0.6 0.7 0.8 0.9, Parent 2: 0.3 0.2 0.3 0.2 0.3 0.2 0.3 0.2 0.3 → Child: 0.2 0.2 0.3 0.3 0.4 0.4 0.5 0.5 0.6.",
        wrongExplanations: [
            { option: "A", reason: "Bu Basit Aritmetik Çaprazlama formülüdür, Bütün Aritmetik değil." },
            { option: "B", reason: "Bu Tek Aritmetik Çaprazlama formülüdür, Bütün Aritmetik değil." },
            { option: "C", reason: "Bu sadece kopyalama işlemidir, aritmetik çaprazlama değildir." },
            { option: "D", reason: "Bütün Aritmetik Çaprazlama permütasyon kodlama için değil, değer kodlama için kullanılır." }
        ]
    },
    {
        question: "Sıralama Çaprazlama (OX - Order Crossover) hangi kodlama türü için kullanılır?",
        options: [
            "İkili kodlama",
            "Değer kodlama",
            "Ağaç kodlama",
            "Hiçbir kodlama türü için kullanılmaz",
            "Permütasyon kodlama"
        ],
        correctAnswer: "E",
        explanation: "Sıralama Çaprazlama (OX - Order Crossover) permütasyon kodlama için kullanılır. İki adımda gerçekleşir: (1) Çaprazlama noktası seçilir, aynısı kopyalanır. (2) Gerisi ikinci parent'tan sırasıyla alınır. Örnek: Parent 1: 1 2 3 4 5 6 7 8 9, Parent 2: 9 3 7 8 2 6 5 1 4 → Child: 3 8 2 4 5 6 7 1 9.",
        wrongExplanations: [
            { option: "A", reason: "OX ikili kodlama için değil, permütasyon kodlama için kullanılır." },
            { option: "B", reason: "OX değer kodlama için değil, permütasyon kodlama için kullanılır." },
            { option: "C", reason: "OX ağaç kodlama için değil, permütasyon kodlama için kullanılır." },
            { option: "D", reason: "OX kullanılır, permütasyon kodlama için." }
        ]
    },
    {
        question: "Parçasal Eşleşmeli Çaprazlama (PMX - Partially Matched Crossover) hangi kodlama türü için kullanılır ve kaç adımda gerçekleşir?",
        options: [
            "İkili kodlama, 2 adım",
            "Değer kodlama, 1 adım",
            "Ağaç kodlama, 4 adım",
            "Hiçbir kodlama türü için kullanılmaz",
            "Permütasyon kodlama, 3 adım"
        ],
        correctAnswer: "E",
        explanation: "Parçasal Eşleşmeli Çaprazlama (PMX) permütasyon kodlama için kullanılır ve 3 adımda gerçekleşir: (1) Adım 1: Çaprazlama noktası seçilir, segment kopyalanır. (2) Adım 2: Eşleşme (mapping) oluşturulur. (3) Adım 3: Eşleşme kullanılarak child tamamlanır. Örnek: Parent 1: 1 2 3 4 5 6 7 8 9, Parent 2: 9 3 7 8 2 6 5 1 4 → Child: 9 3 2 4 5 6 7 1 8.",
        wrongExplanations: [
            { option: "A", reason: "PMX ikili kodlama için değil, permütasyon kodlama için kullanılır ve 3 adımdır." },
            { option: "B", reason: "PMX değer kodlama için değil, permütasyon kodlama için kullanılır ve 3 adımdır." },
            { option: "C", reason: "PMX ağaç kodlama için değil, permütasyon kodlama için kullanılır ve 3 adımdır." },
            { option: "D", reason: "PMX kullanılır, permütasyon kodlama için ve 3 adımdır." }
        ]
    },
    {
        question: "Çevrim Çaprazlama (CX - Cycle Crossover) hangi kodlama türü için kullanılır ve kaç adımda gerçekleşir?",
        options: [
            "İkili kodlama, 1 adım",
            "Değer kodlama, 2 adım",
            "Ağaç kodlama, 3 adım",
            "Hiçbir kodlama türü için kullanılmaz",
            "Permütasyon kodlama, 2 adım"
        ],
        correctAnswer: "E",
        explanation: "Çevrim Çaprazlama (CX) permütasyon kodlama için kullanılır ve 2 adımda gerçekleşir: (1) Adım 1: Çevrimleri bul (cycles). (2) Adım 2: Değişimli çevrimleri çocuğa kopyala (alternating cycles). Örnek: Parent 1: 1 2 3 4 5 6 7 8 9, Parent 2: 9 3 7 8 2 6 5 1 4. Çevrimler: (1→9→4→8→1), (2→3→7→5→2), (6→6). Child 1: 1 3 7 4 2 6 5 8 9, Child 2: 9 2 3 8 5 6 7 1 4.",
        wrongExplanations: [
            { option: "A", reason: "CX ikili kodlama için değil, permütasyon kodlama için kullanılır ve 2 adımdır." },
            { option: "B", reason: "CX değer kodlama için değil, permütasyon kodlama için kullanılır ve 2 adımdır." },
            { option: "C", reason: "CX ağaç kodlama için değil, permütasyon kodlama için kullanılır ve 2 adımdır." },
            { option: "D", reason: "CX kullanılır, permütasyon kodlama için ve 2 adımdır." }
        ]
    },
    {
        question: "Mutasyon (Mutation) operatörü ile ilgili aşağıdakilerden hangisi doğrudur?",
        options: [
            "Mutasyon oranı (pm) genellikle yüksek tutulur (örneğin 0.5)",
            "Mutasyon sırasında kromozomdaki gen sayısı değişir",
            "Mutasyonun etkileri sıklıkla gözlemlenir",
            "Mutasyonun temel amacı, mevcut kromozomların bir veya daha fazla genini değiştirerek yeni kromozomlar elde etmektir",
            "Mutasyon sadece ikili kodlama için kullanılır"
        ],
        correctAnswer: "D",
        explanation: "Mutasyonun temel amacı, mevcut kromozomların bir veya daha fazla genini değiştirerek yeni kromozomlar elde etmektir. Mutasyon oranı (pm) genellikle düşük tutulur (örneğin 0.01). Mutasyon sırasında kromozomdaki gen sayısı değişmez, sabit kalır. Düşük olasılık nedeniyle mutasyonun etkileri nadiren gözlemlenir. Mutasyon ayrıca popülasyondaki çeşitliliğin azalmasını önlemek için de kullanılır.",
        wrongExplanations: [
            { option: "A", reason: "Mutasyon oranı genellikle düşük tutulur (0.01 gibi), yüksek değildir." },
            { option: "B", reason: "Mutasyon sırasında gen sayısı değişmez, sabit kalır." },
            { option: "C", reason: "Düşük olasılık nedeniyle mutasyonun etkileri nadiren gözlemlenir." },
            { option: "E", reason: "Mutasyon sadece ikili kodlama için değil, değer kodlama ve permütasyon kodlama için de kullanılır." }
        ]
    },
    {
        question: "İkili kodda mutasyon işlemi nasıl gerçekleşir?",
        options: [
            "Genlerin yerleri değiştirilir",
            "Yeni bitler eklenir",
            "Bitler silinir",
            "Seçilen bit(ler) tersine çevrilir (0→1 veya 1→0)",
            "Tüm kromozom değiştirilir"
        ],
        correctAnswer: "D",
        explanation: "İkili kodda mutasyon işleminde, seçilen bit(ler) tersine çevrilir. Yani 0 olan bit 1'e, 1 olan bit 0'a dönüştürülür. Örnek: Parent: 11111111111111111111 → Child: 01001011000101100011 (bazı bitler tersine çevrilmiş).",
        wrongExplanations: [
            { option: "A", reason: "Genlerin yerleri değiştirilmesi permütasyon mutasyonudur, ikili kod mutasyonu değildir." },
            { option: "B", reason: "Yeni bitler eklenmez, mevcut bitler tersine çevrilir." },
            { option: "C", reason: "Bitler silinmez, tersine çevrilir." },
            { option: "E", reason: "Tüm kromozom değiştirilmez, sadece seçilen bit(ler) değiştirilir." }
        ]
    },
    {
        question: "Değer kodda mutasyon işleminde aşağıdakilerden hangisi doğrudur?",
        options: [
            "x_i ve x'_i değerleri [LB_i, UB_i] aralığının dışında olabilir",
            "Değer kodda mutasyon yapılamaz",
            "Sadece tamsayı değerler kullanılabilir",
            "x_i ve x'_i değerleri [LB_i, UB_i] aralığı içinde olmalıdır",
            "Sadece negatif değerler kullanılabilir"
        ],
        correctAnswer: "D",
        explanation: "Değer kodda mutasyon işleminde, x = (x₁, ..., x_i) → x' = (x'₁, ..., x'_i) dönüşümü yapılır. Önemli olan, x_i, x'_i ∈ [LB_i, UB_i] koşulunun sağlanmasıdır. Yani mutasyon sonucu oluşan değerler, her gen için belirlenen alt sınır (LB_i) ve üst sınır (UB_i) aralığında olmalıdır.",
        wrongExplanations: [
            { option: "A", reason: "Değerler aralık dışında olamaz, mutlaka [LB_i, UB_i] içinde olmalıdır." },
            { option: "B", reason: "Değer kodda mutasyon yapılabilir, ancak aralık kısıtlamalarına uyulmalıdır." },
            { option: "D", reason: "Sadece tamsayı değil, gerçek sayı değerler de kullanılabilir." },
            { option: "E", reason: "Sadece negatif değerler değil, pozitif ve negatif değerler kullanılabilir (aralığa bağlı)." }
        ]
    },
    {
        question: "Permütasyon kodda mutasyon türleri aşağıdakilerden hangisinde doğru verilmiştir?",
        options: [
            "Sadece ekleme mutasyon",
            "Sadece yer değiştirme mutasyon",
            "Ekleme mutasyon, yer değiştirme mutasyon, ters mutasyon, karışık mutasyon",
            "Sadece ters mutasyon",
            "Hiçbir mutasyon türü kullanılmaz"
        ],
        correctAnswer: "C",
        explanation: "Permütasyon kodda mutasyon türleri: (1) Ekleme mutasyon: Bir eleman seçilip başka bir yere eklenir. Örnek: 1 2 3 4 5 6 7 8 9 → 1 2 5 3 4 6 7 8 9. (2) Yer değiştirme mutasyon: İki elemanın yerleri değiştirilir. Örnek: 1 2 3 4 5 6 7 8 9 → 1 5 3 4 2 6 7 8 9. (3) Ters mutasyon: Bir segment tersine çevrilir. Örnek: 1 2 3 4 5 6 7 8 9 → 1 5 4 3 2 6 7 8 9. (4) Karışık mutasyon: Bir segment karıştırılır. Örnek: 1 2 3 4 5 6 7 8 9 → 1 3 5 4 2 6 7 8 9.",
        wrongExplanations: [
            { option: "A", reason: "Sadece ekleme mutasyon değil, dört farklı mutasyon türü vardır." },
            { option: "C", reason: "Sadece yer değiştirme mutasyon değil, dört farklı mutasyon türü vardır." },
            { option: "D", reason: "Sadece ters mutasyon değil, dört farklı mutasyon türü vardır." },
            { option: "E", reason: "Permütasyon kodda mutasyon türleri kullanılır." }
        ]
    },
    {
        question: "f(x)=x², x∈[0, 31] fonksiyonunun maksimizasyonu için GA uygulanıyor. x'in ikili gösterimi için kaç bit gereklidir?",
        options: [
            "3 bit",
            "4 bit",
            "6 bit",
            "5 bit",
            "7 bit"
        ],
        correctAnswer: "D",
        explanation: "x∈[0, 31] aralığında 32 farklı değer vardır (0, 1, 2, ..., 31). 2⁵ = 32 olduğu için 5 bit gereklidir. 0: 00000, 31: 11111 şeklinde temsil edilir. 4 bit ile sadece 16 değer (0-15) temsil edilebilir, 6 bit ile 64 değer temsil edilebilir ama gereksizdir.",
        wrongExplanations: [
            { option: "A", reason: "3 bit ile sadece 8 değer (0-7) temsil edilebilir, yetersizdir." },
            { option: "B", reason: "4 bit ile sadece 16 değer (0-15) temsil edilebilir, 31'i temsil edemez." },
            { option: "C", reason: "6 bit ile 64 değer temsil edilebilir ama gereksizdir, 5 bit yeterlidir." },
            { option: "E", reason: "7 bit ile 128 değer temsil edilebilir ama gereksizdir, 5 bit yeterlidir." }
        ]
    },
    {
        question: "f(x)=x², x∈[0, 31] problemi için başlangıç popülasyonunda 4 birey var: Birey 1: 01101 (x=13, x²=169), Birey 2: 11000 (x=24, x²=576), Birey 3: 01000 (x=8, x²=64), Birey 4: 10011 (x=19, x²=361). Toplam uygunluk değeri kaçtır?",
        options: [
            "1000",
            "1200",
            "1300",
            "1400",
            "1170"
        ],
        correctAnswer: "E",
        explanation: "Toplam uygunluk değeri = 169 + 576 + 64 + 361 = 1170. Bu değer, rulet-çember seçiminde her bireyin seçilme olasılığını hesaplamak için kullanılır.",
        wrongExplanations: [
            { option: "A", reason: "1000 yanlıştır, doğru toplam 1170'dir." },
            { option: "B", reason: "1200 yanlıştır, doğru toplam 1170'dir." },
            { option: "C", reason: "1300 yanlıştır, doğru toplam 1170'dir." },
            { option: "D", reason: "1400 yanlıştır, doğru toplam 1170'dir." }
        ]
    },
    {
        question: "Yukarıdaki popülasyonda (Birey 1: x²=169, Birey 2: x²=576, Birey 3: x²=64, Birey 4: x²=361, Toplam=1170) Birey 2'nin rulet-çember seçiminde seçilme olasılığı yüzde kaçtır?",
        options: [
            "%30",
            "%40",
            "%50",
            "%60",
            "%49"
        ],
        correctAnswer: "E",
        explanation: "Birey 2'nin seçilme olasılığı = 576 / 1170 = 0.4923 ≈ 0.49 = %49. Birey 2 en yüksek uygunluk değerine sahip olduğu için en yüksek seçilme olasılığına sahiptir.",
        wrongExplanations: [
            { option: "A", reason: "%30 yanlıştır, doğru değer %49'dur." },
            { option: "B", reason: "%40 yanlıştır, doğru değer %49'dur." },
            { option: "C", reason: "%50 yanlıştır, doğru değer %49'dur (0.4923)." },
            { option: "D", reason: "%60 yanlıştır, doğru değer %49'dur." }
        ]
    },
    {
        question: "8 bitlik 4 bireyden en iyi bireyi oluşturmak için GA uygulanıyor. Başlangıç popülasyonu: a: 00000110, b: 11101110, c: 00100000, d: 00110100. Amaç: 11111111. Uygunluk kriteri: Her dizinin barındırdığı 1 değeri. Hangi birey en yüksek uygunluk değerine sahiptir?",
        options: [
            "a: 00000110 (2 adet 1)",
            "c: 00100000 (1 adet 1)",
            "d: 00110100 (3 adet 1)",
            "Hepsi eşit",
            "b: 11101110 (6 adet 1)"
        ],
        correctAnswer: "E",
        explanation: "Uygunluk kriteri her dizinin barındırdığı 1 değeri olduğu için: a: 00000110 → 2 adet 1, b: 11101110 → 6 adet 1, c: 00100000 → 1 adet 1, d: 00110100 → 3 adet 1. En yüksek uygunluk değerine sahip birey b'dir (6 adet 1). Amaç 11111111 (8 adet 1) olduğu için b en yakın bireydir.",
        wrongExplanations: [
            { option: "A", reason: "a sadece 2 adet 1 içerir, en yüksek değil." },
            { option: "B", reason: "c sadece 1 adet 1 içerir, en düşük değer." },
            { option: "C", reason: "d sadece 3 adet 1 içerir, b'den düşük." },
            { option: "D", reason: "Hepsi eşit değildir, b en yüksek uygunluk değerine sahiptir." }
        ]
    },
    {
        question: "GA çevriminde, çaprazlama işleminden sonra mutasyon işlemi uygulanır. Mutasyon işleminin temel amacı aşağıdakilerden hangisidir?",
        options: [
            "Popülasyonu tamamen değiştirmek",
            "Sadece en iyi bireyleri korumak",
            "Popülasyonu küçültmek",
            "Popülasyondaki çeşitliliği artırmak ve yerel optimumlardan kaçınmak",
            "Tüm bireyleri aynı yapmak"
        ],
        correctAnswer: "D",
        explanation: "Mutasyon işleminin temel amaçları: (1) Mevcut kromozomların bir veya daha fazla genini değiştirerek yeni kromozomlar elde etmek. (2) Popülasyondaki çeşitliliğin azalmasını önlemek. (3) Yerel optimumlardan kaçınmak için rastgele değişiklikler yapmak. Mutasyon genellikle düşük olasılıkla (pm ≈ 0.01) uygulanır.",
        wrongExplanations: [
            { option: "A", reason: "Mutasyon popülasyonu tamamen değiştirmez, sadece küçük rastgele değişiklikler yapar." },
            { option: "B", reason: "Mutasyon sadece en iyi bireyleri korumak için değil, çeşitliliği artırmak için kullanılır." },
            { option: "C", reason: "Mutasyon popülasyonu küçültmez, gen sayısı sabit kalır." },
            { option: "E", reason: "Mutasyon tüm bireyleri aynı yapmak için değil, çeşitliliği artırmak için kullanılır." }
        ]
    },
    {
        question: "GA'da elitizm mekanizmasının amacı aşağıdakilerden hangisidir?",
        options: [
            "En kötü bireyleri korumak",
            "Popülasyonu küçültmek",
            "Tüm bireyleri değiştirmek",
            "En iyi bireylerin kaybolmasını önlemek ve doğrudan yeni nesle aktarmak",
            "Sadece mutasyon yapmak"
        ],
        correctAnswer: "D",
        explanation: "Elitizm mekanizması, en iyi uygunluğa sahip bireylerin seçim-çaprazlama-mutasyon sürecini atlayarak doğrudan yeni nesle aktarılmasını sağlar. Bu sayede en iyi çözümlerin kaybolması önlenir ve algoritmanın yakınsama performansı artar. Elitizm, uygunluk değerlendirme aşamasından doğrudan yeni popülasyona geçiş yapar.",
        wrongExplanations: [
            { option: "A", reason: "Elitizm en kötü bireyleri değil, en iyi bireyleri korur." },
            { option: "B", reason: "Elitizm popülasyonu küçültmez, en iyi bireyleri korur." },
            { option: "C", reason: "Elitizm tüm bireyleri değiştirmez, sadece en iyileri korur." },
            { option: "E", reason: "Elitizm sadece mutasyon yapmak için değil, en iyi bireyleri korumak için kullanılır." }
        ]
    },
    {
        question: "GA'da kodlama seçimi problemin yapısına göre yapılmalıdır. Aşağıdaki problem-kodlama eşleştirmelerinden hangisi en uygun değildir?",
        options: [
            "Gezgin satıcı problemi - Permütasyon kodlama",
            "Fonksiyon optimizasyonu (gerçek sayılar) - Değer kodlama",
            "Program/ifade üretimi - Ağaç kodlama",
            "Çizelgeleme problemi - Permütasyon kodlama",
            "Fonksiyon optimizasyonu (tamsayılar) - İkili kodlama"
        ],
        correctAnswer: "E",
        explanation: "Fonksiyon optimizasyonu için tamsayı değerler kullanılıyorsa, ikili kodlama kullanılabilir ancak değer kodlama da uygun olabilir. Ancak en uygun olmayan seçenek bu olabilir çünkü gerçek sayılar için değer kodlama daha uygundur. Gezgin satıcı ve çizelgeleme problemleri için permütasyon kodlama, program/ifade üretimi için ağaç kodlama uygundur.",
        wrongExplanations: [
            { option: "A", reason: "Gezgin satıcı problemi için permütasyon kodlama en uygun seçimdir." },
            { option: "B", reason: "Gerçek sayılı fonksiyon optimizasyonu için değer kodlama uygundur." },
            { option: "C", reason: "Program/ifade üretimi için ağaç kodlama uygundur." },
            { option: "D", reason: "Çizelgeleme problemi için permütasyon kodlama uygundur." }
        ]
    },
    {
        question: "GA'da Rank Seçimi ile Rulet-Çember Seçimi arasındaki temel fark aşağıdakilerden hangisidir?",
        options: [
            "Rank Seçimi uygunluk değerlerine göre, Rulet-Çember Seçimi rank değerlerine göre çalışır",
            "İkisi de aynı şekilde çalışır",
            "Rank Seçimi sadece küçük popülasyonlar için kullanılır",
            "Rank Seçimi rank değerlerine göre, Rulet-Çember Seçimi uygunluk değerlerine göre çalışır",
            "Rulet-Çember Seçimi sadece büyük popülasyonlar için kullanılır"
        ],
        correctAnswer: "D",
        explanation: "Rank Seçimi: Popülasyon uygunluk değerlerine göre ters sırada sıralanır, en iyi kromozom N değerini alır. Seçim bu rank değerlerine göre yapılır. Rulet-Çember Seçimi: Her bireyin seçilme olasılığı doğrudan uygunluk değeriyle orantılıdır. Rank Seçimi, uygunluk değerleri arasında büyük fark olduğunda (en iyi kromozomun uygunluk değeri çok yüksekse) kullanılır.",
        wrongExplanations: [
            { option: "A", reason: "Ters ilişki var: Rank Seçimi rank değerlerine göre, Rulet-Çember uygunluk değerlerine göre çalışır." },
            { option: "B", reason: "İkisi farklı şekilde çalışır, Rank Seçimi rank değerlerine göre, Rulet-Çember uygunluk değerlerine göre." },
            { option: "C", reason: "Rank Seçimi popülasyon büyüklüğüne bağlı değildir, uygunluk dağılımına bağlıdır." },
            { option: "E", reason: "Rulet-Çember Seçimi popülasyon büyüklüğüne bağlı değildir." }
        ]
    },
    {
        question: "GA'da çaprazlama olasılığı (Pc) ve mutasyon olasılığı (pm) genellikle hangi aralıklarda tutulur?",
        options: [
            "Pc: 0.0-0.3, pm: 0.5-1.0",
            "Pc: 0.9-1.0, pm: 0.5-1.0",
            "Pc: 0.0-0.3, pm: 0.3-0.6",
            "Pc: 0.6-0.9, pm: yaklaşık 0.01",
            "Pc ve pm her zaman 1.0'dır"
        ],
        correctAnswer: "D",
        explanation: "GA'da çaprazlama olasılığı (Pc) genellikle 0.6-0.9 aralığında tutulur çünkü çaprazlama GA'nın en önemli operatörlerinden biridir. Mutasyon olasılığı (pm) ise genellikle çok düşük tutulur (yaklaşık 0.01 veya 1/popülasyon_büyüklüğü ve 1/kromozom_uzunluğu gibi formüllerle hesaplanır) çünkü mutasyon çok sık uygulanırsa rastgele aramaya dönüşebilir.",
        wrongExplanations: [
            { option: "A", reason: "Pc çok düşük, pm çok yüksek - bu değerler uygun değildir." },
            { option: "B", reason: "Pc çok yüksek, pm çok yüksek - bu değerler uygun değildir." },
            { option: "C", reason: "Pc çok düşük, pm orta - bu değerler uygun değildir." },
            { option: "E", reason: "Pc ve pm her zaman 1.0 değildir, genellikle Pc yüksek, pm düşüktür." }
        ]
    },
    {
        question: "GA'da permütasyon kodlama için kullanılan çaprazlama yöntemlerinden hangisi 'çevrim' (cycle) kavramını kullanır?",
        options: [
            "OX (Order Crossover)",
            "PMX (Partially Matched Crossover)",
            "1-Noktalı Çaprazlama",
            "Düzenli Çaprazlama",
            "CX (Cycle Crossover)"
        ],
        correctAnswer: "E",
        explanation: "CX (Cycle Crossover) çevrim kavramını kullanır. İki adımda gerçekleşir: (1) Çevrimleri bul: Parent 1 ve Parent 2 arasındaki eşleşmelerden çevrimler oluşturulur. (2) Değişimli çevrimleri çocuğa kopyala: Alternatif çevrimler farklı parent'lardan alınarak child oluşturulur. Örnek: Parent 1: 1 2 3 4 5 6 7 8 9, Parent 2: 9 3 7 8 2 6 5 1 4 → Çevrimler: (1→9→4→8→1), (2→3→7→5→2), (6→6).",
        wrongExplanations: [
            { option: "A", reason: "OX çevrim kavramını kullanmaz, segment kopyalama ve sıralı yerleştirme kullanır." },
            { option: "B", reason: "PMX çevrim kavramını kullanmaz, segment kopyalama ve eşleşme (mapping) kullanır." },
            { option: "C", reason: "1-Noktalı Çaprazlama ikili kodlama için kullanılır, çevrim kavramı yoktur." },
            { option: "D", reason: "Düzenli Çaprazlama ikili kodlama için kullanılır, çevrim kavramı yoktur." }
        ]
    },
    {
        question: "GA'da değer kodlama için kullanılan aritmetik çaprazlama yöntemlerinden hangisinde, α=0.5 olduğunda her iki child aynı olur?",
        options: [
            "Tek Aritmetik Çaprazlama",
            "Basit Aritmetik Çaprazlama",
            "1-Noktalı Çaprazlama",
            "Hiçbiri",
            "Bütün Aritmetik Çaprazlama"
        ],
        correctAnswer: "E",
        explanation: "Bütün Aritmetik Çaprazlamada formül: a·x̄ + (1-a)·ȳ şeklindedir. a = 0.5 için: 0.5·x̄ + 0.5·ȳ = 0.5·(x̄ + ȳ), yani her iki parent'ın basit ortalaması alınır. Bu durumda her iki child aynı olur çünkü aynı formül uygulanır. Tek ve Basit Aritmetik Çaprazlamada ise farklı segmentler farklı parent'lardan alındığı için child'lar farklı olur.",
        wrongExplanations: [
            { option: "A", reason: "Tek Aritmetik Çaprazlamada child'lar farklı olur çünkü farklı segmentler farklı parent'lardan alınır." },
            { option: "B", reason: "Basit Aritmetik Çaprazlamada child'lar farklı olur çünkü farklı segmentler farklı parent'lardan alınır." },
            { option: "C", reason: "1-Noktalı Çaprazlama ikili kodlama için kullanılır, aritmetik çaprazlama değildir." },
            { option: "E", reason: "Bütün Aritmetik Çaprazlamada α=0.5 için child'lar aynı olur." }
        ]
    }
];

module.exports = questions;

