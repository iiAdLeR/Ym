// Yapay Zekâ Dersi - Bölüm 2 Sınav Soruları
// CHAPTER 2: Ajan Türleri ve Yapısı

const questions = [
    {
        question: "Ajan türleri hangi kriterlere göre artan karmaşıklık sırasına göre sınıflandırılır?",
        options: [
            "Hız ve güç tüketimi",
            "Sadece algoritma karmaşıklığı",
            "Sadece bellek kullanımı",
            "Çevreyi kullanma becerisine göre",
            "Sadece işlemci hızı"
        ],
        correctAnswer: "D",
        explanation: "Ajan türleri, çevreyi kullanma becerisine göre artan karmaşıklık sırasına göre sınıflandırılır. Bu, basit refleks ajanlarından başlayıp öğrenmeye-dayalı ajanlara kadar uzanan bir hiyerarşi oluşturur.",
        wrongExplanations: [
            { option: "A", reason: "Hız ve güç tüketimi sınıflandırma kriteri değildir." },
            { option: "B", reason: "Algoritma karmaşıklığı tek başına sınıflandırma kriteri değildir." },
            { option: "C", reason: "Bellek kullanımı sınıflandırma kriteri değildir." },
            { option: "E", reason: "İşlemci hızı sınıflandırma kriteri değildir." }
        ]
    },
    {
        question: "Yapay zekâ ajanları sınıflandırmasında hangi sıralama doğrudur? (En basitten en karmaşığa)",
        options: [
            "Hedefe-dayalı, Fayda-tabanlı, Basit refleks, Durumsal-refleks, Öğrenmeye-dayalı",
            "Basit refleks, Durumsal-refleks, Hedefe-dayalı, Fayda-tabanlı, Öğrenmeye-dayalı",
            "Öğrenmeye-dayalı, Fayda-tabanlı, Hedefe-dayalı, Durumsal-refleks, Basit refleks",
            "Durumsal-refleks, Basit refleks, Hedefe-dayalı, Fayda-tabanlı, Öğrenmeye-dayalı",
            "Fayda-tabanlı, Basit refleks, Durumsal-refleks, Hedefe-dayalı, Öğrenmeye-dayalı"
        ],
        correctAnswer: "B",
        explanation: "Ajan türleri artan karmaşıklık sırasına göre: (1) Basit refleks ajanları, (2) Durumsal-refleks (model-bazlı) ajanlar, (3) Hedefe-dayalı ajanlar, (4) Fayda-tabanlı ajanlar, (5) Öğrenmeye-dayalı ajanlar şeklinde sıralanır.",
        wrongExplanations: [
            { option: "A", reason: "Bu sıralama yanlıştır, basit refleks en basit olandır." },
            { option: "C", reason: "Bu sıralama ters çevrilmiştir, öğrenmeye-dayalı en karmaşık olandır." },
            { option: "D", reason: "Basit refleks durumsal-refleksten önce gelmelidir." },
            { option: "E", reason: "Fayda-tabanlı ajanlar basit refleks ajanlarından çok daha karmaşıktır." }
        ]
    },
    {
        question: "Hangi ifade ajanların eylemlerini algılama yetenekleri hakkında doğrudur?",
        options: [
            "Ajanlar her zaman kendi eylemlerini algılayabilir ancak her zaman etkilerini algılayamayabilir",
            "Ajanlar hiçbir zaman kendi eylemlerini algılayamaz",
            "Ajanlar her zaman eylemlerinin etkilerini algılayabilir",
            "Ajanlar sadece eylemlerinin etkilerini algılayabilir",
            "Ajanlar ne eylemlerini ne de etkilerini algılayabilir"
        ],
        correctAnswer: "A",
        explanation: "Her ajan kendi eylemlerini algılayabilir, ancak her zaman bu eylemlerin etkilerini algılayamayabilir. Bu, kısmi gözlenebilir ortamlarda özellikle geçerlidir.",
        wrongExplanations: [
            { option: "B", reason: "Ajanlar kendi eylemlerini algılayabilir." },
            { option: "C", reason: "Ajanlar her zaman eylemlerinin etkilerini algılayamaz, özellikle kısmi gözlenebilir ortamlarda." },
            { option: "D", reason: "Ajanlar eylemlerini de algılayabilir." },
            { option: "E", reason: "Ajanlar hem eylemlerini hem de etkilerini algılayabilir, ancak etkiler her zaman algılanamayabilir." }
        ]
    },
    {
        question: "Yapay zekâ nasıl tanımlanabilir?",
        options: [
            "Sadece algoritma geliştirme",
            "Sadece veri işleme",
            "Sadece görüntü tanıma",
            "Sadece doğal dil işleme",
            "Rasyonel ajanların çalışması"
        ],
        correctAnswer: "E",
        explanation: "Yapay zekâ, rasyonel ajanların çalışması olarak tanımlanabilir. Bu tanım, yapay zekânın temel amacının rasyonel karar verme ve eylem seçimi olduğunu vurgular.",
        wrongExplanations: [
            { option: "A", reason: "Yapay zekâ sadece algoritma geliştirmeyle sınırlı değildir." },
            { option: "B", reason: "Veri işleme yapay zekânın sadece bir aracıdır." },
            { option: "C", reason: "Görüntü tanıma yapay zekânın bir uygulama alanıdır, tanımı değildir." },
            { option: "D", reason: "Doğal dil işleme yapay zekânın bir uygulama alanıdır." }
        ]
    },
    {
        question: "Ajan formülü 'Ajan = Mimari + Ajan Programı' şeklindedir. Bu formülde 'Mimari' neyi temsil eder?",
        options: [
            "Sadece yazılım kodunu",
            "Sadece algoritmaları",
            "Ajanın üzerinde çalıştığı makine (sensörler, aktüatörler içeren cihaz)",
            "Sadece veri yapılarını",
            "Sadece ağ bağlantısını"
        ],
        correctAnswer: "C",
        explanation: "Mimari (Architecture), ajanın üzerinde çalıştığı makinedir. Sensörler ve aktüatörleri içeren fiziksel/donanımsal yapıdır. Örnekler: robotik araba, kamera, PC.",
        wrongExplanations: [
            { option: "A", reason: "Mimari yazılım kodu değil, fiziksel yapıdır." },
            { option: "B", reason: "Algoritmalar ajan programının parçasıdır, mimari değildir." },
            { option: "D", reason: "Veri yapıları programın bir parçasıdır, mimari değildir." },
            { option: "E", reason: "Ağ bağlantısı mimarinin sadece bir bileşeni olabilir, tamamını temsil etmez." }
        ]
    },
    {
        question: "Ajan programı nedir?",
        options: [
            "Bir ajan fonksiyonunun uygulanmış hâli",
            "Sadece donanım bileşenleri",
            "Sadece sensörler",
            "Sadece aktüatörler",
            "Sadece veri yapıları"
        ],
        correctAnswer: "A",
        explanation: "Ajan programı, bir ajan fonksiyonunun uygulanmış hâlidir. Ajan fonksiyonu ise percept sequence'i (algı dizisini) action'a (eyleme) eşleyen fonksiyondur.",
        wrongExplanations: [
            { option: "B", reason: "Donanım bileşenleri mimarinin parçasıdır, program değildir." },
            { option: "C", reason: "Sensörler mimarinin parçasıdır." },
            { option: "D", reason: "Aktüatörler mimarinin parçasıdır." },
            { option: "E", reason: "Veri yapıları programın araçlarıdır, programın kendisi değildir." }
        ]
    },
    {
        question: "Ajan fonksiyonu hangi eşlemeyi yapar?",
        options: [
            "Sadece anlık algıyı eyleme",
            "Sadece gelecekteki durumları eyleme",
            "Sadece hedefleri eyleme",
            "Percept sequence'i action'a (ajının bugüne kadar algıladığı her şeyin geçmişini eyleme)",
            "Sadece fayda değerlerini eyleme"
        ],
        correctAnswer: "D",
        explanation: "Ajan fonksiyonu, percept sequence'i (ajının bugüne kadar algıladığı her şeyin geçmişini) action'a (eyleme) eşler. Bu, ajanın tüm geçmiş deneyimlerini kullanarak karar vermesini sağlar.",
        wrongExplanations: [
            { option: "A", reason: "Ajan fonksiyonu sadece anlık algıyı değil, tüm percept sequence'i eşler." },
            { option: "B", reason: "Gelecekteki durumlar henüz algılanmamıştır." },
            { option: "C", reason: "Hedefler eşlemenin girdisi değildir, hedefe-dayalı ajanların özelliğidir." },
            { option: "E", reason: "Fayda değerleri fayda-tabanlı ajanların özelliğidir, genel ajan fonksiyonu değildir." }
        ]
    },
    {
        question: "Aşağıdakilerden hangisi bir sensör örneği DEĞİLDİR?",
        options: [
            "Dosya sistemi sensörü",
            "Web sensörü",
            "Kamera",
            "E-posta gönderme",
            "Kullanıcı girdi sensörü"
        ],
        correctAnswer: "D",
        explanation: "E-posta gönderme bir aktüatördür, sensör değildir. Sensörler çevreyi algılar, aktüatörler ise çevre üzerinde eylem yapar. Dosya sistemi sensörü, web sensörü, kamera ve kullanıcı girdi sensörü ise sensör örnekleridir.",
        wrongExplanations: [
            { option: "A", reason: "Dosya sistemi sensörü klasör değişikliklerini takip eder, bir sensördür." },
            { option: "B", reason: "Web sensörü web sayfası değişimlerini algılar, bir sensördür." },
            { option: "C", reason: "Kamera çevreyi algılar, bir sensördür." },
            { option: "E", reason: "Kullanıcı girdi sensörü mouse tıklaması, klavye yazımı gibi girdileri algılar, bir sensördür." }
        ]
    },
    {
        question: "Aşağıdakilerden hangisi bir aktüatör örneğidir?",
        options: [
            "Kamera",
            "Sıcaklık sensörü",
            "Kızılötesi sensör",
            "Veritabanı güncelleme",
            "Dosya sistemi sensörü"
        ],
        correctAnswer: "D",
        explanation: "Veritabanı güncelleme bir aktüatördür çünkü çevre (veritabanı) üzerinde eylem yapar. Kamera, sıcaklık sensörü, kızılötesi sensör ve dosya sistemi sensörü ise sensör örnekleridir.",
        wrongExplanations: [
            { option: "A", reason: "Kamera çevreyi algılar, bir sensördür." },
            { option: "B", reason: "Sıcaklık sensörü çevreyi algılar, bir sensördür." },
            { option: "C", reason: "Kızılötesi sensör çevreyi algılar, bir sensördür." },
            { option: "E", reason: "Dosya sistemi sensörü değişiklikleri algılar, bir sensördür." }
        ]
    },
    {
        question: "İnsan ajanında sensörler hangi seçenekte doğru verilmiştir?",
        options: [
            "El, bacak, ağız",
            "Göz, kulak",
            "Motor, kamera",
            "Sadece göz",
            "Sadece kulak"
        ],
        correctAnswer: "B",
        explanation: "İnsan ajanında sensörler göz ve kulaktır. Bu organlar çevreyi algılamak için kullanılır. El, bacak ve ağız ise aktüatörlerdir (eylem üretmek için kullanılır).",
        wrongExplanations: [
            { option: "A", reason: "El, bacak ve ağız aktüatörlerdir, sensör değildir." },
            { option: "C", reason: "Motor ve kamera robotik ajanlara aittir." },
            { option: "D", reason: "Sadece göz değil, kulak da bir sensördür." },
            { option: "E", reason: "Sadece kulak değil, göz de bir sensördür." }
        ]
    },
    {
        question: "Robotik ajanda aktüatörler hangi seçenekte doğru verilmiştir?",
        options: [
            "Kamera, kızılötesi telemetre",
            "Motorlar",
            "Göz, kulak",
            "El, bacak",
            "Sadece kamera"
        ],
        correctAnswer: "B",
        explanation: "Robotik ajanda aktüatörler motorlardır. Kamera ve kızılötesi telemetre ise sensörlerdir (çevreyi algılamak için).",
        wrongExplanations: [
            { option: "A", reason: "Kamera ve kızılötesi telemetre sensörlerdir, aktüatör değildir." },
            { option: "C", reason: "Göz ve kulak insan ajanına aittir." },
            { option: "D", reason: "El ve bacak insan ajanına aittir." },
            { option: "E", reason: "Kamera bir sensördür, aktüatör değildir." }
        ]
    },
    {
        question: "Basit refleks ajanlarının temel çalışma prensibi nedir?",
        options: [
            "'If/else' kurallarıyla çalışır ve sadece mevcut algıya bakar",
            "Geçmiş algıları kullanarak karar verir",
            "İç durum tutar ve model oluşturur",
            "Hedeflere göre planlama yapar",
            "Fayda fonksiyonu kullanarak karar verir"
        ],
        correctAnswer: "A",
        explanation: "Basit refleks ajanları 'If/else' kurallarıyla çalışır ve sadece mevcut algıya bakarlar. Geçmiş algıları tamamen görmezden gelirler. Koşul → Eylem kuralı uygularlar: eğer durum doğruysa eylemi tetiklerler, değilse tetiklemezler.",
        wrongExplanations: [
            { option: "B", reason: "Basit refleks ajanları geçmiş algıları kullanmaz, sadece mevcut algıya bakarlar." },
            { option: "C", reason: "İç durum tutmak model-bazlı ajanların özelliğidir." },
            { option: "D", reason: "Hedeflere göre planlama hedefe-dayalı ajanların özelliğidir." },
            { option: "E", reason: "Fayda fonksiyonu fayda-tabanlı ajanların özelliğidir." }
        ]
    },
    {
        question: "Basit refleks ajanları hangi koşulda başarılı olabilir?",
        options: [
            "Kısmen gözlenebilir ortamda",
            "Stokastik ortamda her zaman",
            "Dinamik ortamda her zaman",
            "Yalnızca ortam tamamen gözlenebilir olduğunda",
            "Çoklu ajan ortamında her zaman"
        ],
        correctAnswer: "D",
        explanation: "Basit refleks ajanları yalnızca ortam tamamen gözlenebilir olduğunda başarılı olabilir. Çünkü sadece mevcut algıya bakarlar ve geçmiş veya görülmeyen durumlar hakkında bilgileri yoktur.",
        wrongExplanations: [
            { option: "A", reason: "Kısmen gözlenebilir ortamda basit refleks ajanları yetersiz kalır, sonsuz döngüye girebilir." },
            { option: "B", reason: "Stokastik ortamda belirsizlik vardır, basit refleks ajanları için zorludur." },
            { option: "C", reason: "Dinamik ortamda çevre değişir, basit refleks ajanları için zorludur." },
            { option: "E", reason: "Çoklu ajan ortamında durum karmaşıktır, basit refleks ajanları için uygun değildir." }
        ]
    },
    {
        question: "Basit refleks ajanlarının en önemli sorunu nedir?",
        options: [
            "Çok hızlı çalışmaları",
            "Çok az bellek kullanmaları",
            "Her zaman doğru karar vermeleri",
            "Kısmi gözlenebilir ortamda sonsuz döngüye girebilmeleri",
            "Çok karmaşık olmaları"
        ],
        correctAnswer: "D",
        explanation: "Basit refleks ajanlarının en önemli sorunu, kısmi gözlenebilir ortamda sonsuz döngüye girebilmeleridir. Çünkü görülmeyen durumlar hakkında hiçbir bilgileri yoktur ve sadece mevcut algıya göre karar verirler.",
        wrongExplanations: [
            { option: "A", reason: "Hızlı çalışma sorun değil, avantaj olabilir." },
            { option: "B", reason: "Az bellek kullanma genellikle avantajdır." },
            { option: "C", reason: "Basit refleks ajanları her zaman doğru karar vermez, sınırlıdırlar." },
            { option: "E", reason: "Basit refleks ajanları karmaşık değil, çok basittirler." }
        ]
    },
    {
        question: "Basit refleks ajanı için 'Algı geçmişi' kavramı ne anlama gelir ve bu ajan bunu nasıl kullanır?",
        options: [
            "Ajanın bugüne kadar algıladığı her şeydir ancak basit refleks ajan bunu kullanmaz",
            "Ajanın bugüne kadar algıladığı her şeydir ve ajan bunu aktif olarak kullanır",
            "Sadece gelecekteki algılar",
            "Sadece ilk algı",
            "Sadece son algı"
        ],
        correctAnswer: "A",
        explanation: "Algı geçmişi, ajanın bugüne kadar algıladığı her şeyin kaydıdır. Ancak basit refleks ajanları bunu kullanmaz, sadece mevcut anlık algıya bakarlar. Bu, onların en önemli sınırlamasıdır.",
        wrongExplanations: [
            { option: "B", reason: "Basit refleks ajanları algı geçmişini kullanmaz, sadece mevcut algıya bakarlar." },
            { option: "C", reason: "Algı geçmişi geçmiş algıları içerir, gelecekteki algıları değil." },
            { option: "D", reason: "Algı geçmişi tüm geçmiş algıları içerir, sadece ilk algıyı değil." },
            { option: "E", reason: "Algı geçmişi tüm geçmiş algıları içerir, sadece son algıyı değil." }
        ]
    },
    {
        question: "Elektrikli süpürge örneğinde basit refleks ajanı için performans ölçütü örnekleri hangi seçenekte doğru verilmiştir?",
        options: [
            "T zamanında temizlenen kare sayısı, birim zamanda temizlenen bölge sayısı, birim zamanda atılan adım sayısı",
            "Sadece temizlenen kare sayısı",
            "Sadece kullanılan enerji",
            "Sadece geçen süre",
            "Sadece algılanan kir miktarı"
        ],
        correctAnswer: "A",
        explanation: "Elektrikli süpürge örneğinde performans ölçütleri çok boyutludur: T zamanında temizlenen kare sayısı, birim zamanda temizlenen bölge sayısı, birim zamanda atılan adım sayısı gibi ölçütler kullanılabilir.",
        wrongExplanations: [
            { option: "B", reason: "Performans ölçütü sadece temizlenen kare sayısından daha kapsamlıdır." },
            { option: "C", reason: "Enerji kullanımı performans ölçütünün sadece bir parçası olabilir." },
            { option: "D", reason: "Geçen süre performans ölçütünün sadece bir parçasıdır." },
            { option: "E", reason: "Algılanan kir miktarı performans ölçütü değildir." }
        ]
    },
    {
        question: "Durumsal-refleks (model-bazlı) ajanlar neden kısmen gözlenebilir ortamları kullanabilir?",
        options: [
            "Çünkü daha hızlı çalışırlar",
            "Çünkü daha az bellek kullanırlar",
            "Çünkü iç durum (internal state) tutarlar ve bu durum dünya modelini içerir",
            "Çünkü sadece anlık algıya bakarlar",
            "Çünkü if/else kurallarıyla çalışırlar"
        ],
        correctAnswer: "C",
        explanation: "Model-bazlı refleks ajanı, kısmen gözlenebilir ortamları kullanabilir çünkü iç durum (internal state) tutar. Bu iç durum dünya modelini içerir ve görülmeyen kısımlar hakkında tahmin yapabilmesini sağlar.",
        wrongExplanations: [
            { option: "A", reason: "Hız, kısmen gözlenebilir ortamları kullanabilme nedeni değildir." },
            { option: "B", reason: "Model-bazlı ajanlar genellikle daha fazla bellek kullanır." },
            { option: "D", reason: "Sadece anlık algıya bakmak basit refleks ajanlarının özelliğidir, model-bazlı ajanlar geçmişi de kullanır." },
            { option: "E", reason: "If/else kuralları basit refleks ajanlarının özelliğidir." }
        ]
    },
    {
        question: "Model-bazlı ajan için gerekli bilgiler hangi seçenekte doğru verilmiştir?",
        options: [
            "Sadece mevcut algı",
            "Sadece hedefler",
            "Sadece fayda değerleri",
            "Dünya ajan bağımsız nasıl değişiyor? Ajanın eylemleri dünyayı nasıl etkiliyor?",
            "Sadece rastgele tahminler"
        ],
        correctAnswer: "D",
        explanation: "Model-bazlı ajan için gerekli bilgiler: (1) Dünya ajan bağımsız nasıl değişiyor? (2) Ajanın eylemleri dünyayı nasıl etkiliyor? Bu bilgiler, ajanın dünya modelini oluşturmasını ve doğru kararlar vermesini sağlar.",
        wrongExplanations: [
            { option: "A", reason: "Sadece mevcut algı yeterli değildir, dünya modeli gereklidir." },
            { option: "B", reason: "Hedefler hedefe-dayalı ajanların özelliğidir." },
            { option: "C", reason: "Fayda değerleri fayda-tabanlı ajanların özelliğidir." },
            { option: "E", reason: "Rastgele tahminler model-bazlı ajanların çalışma şekli değildir, mantıklı model kullanırlar." }
        ]
    },
    {
        question: "Model-bazlı ajan nasıl çalışır?",
        options: [
            "Sadece anlık algıya bakarak karar verir",
            "Sadece hedeflere göre planlama yapar",
            "Sadece fayda fonksiyonu kullanır",
            "Her algı → iç durumu günceller, görülmeyen kısımlar hakkında tahmin yapar, geçmiş durumları hafızada tutar",
            "Sadece rastgele eylem seçer"
        ],
        correctAnswer: "D",
        explanation: "Model-bazlı ajan şu şekilde çalışır: Her algı → iç durumu günceller. Görülmeyen kısımlar hakkında tahmin yapar. Geçmiş durumları hafızada tutar. Mevcut duruma en uygun kuralı seçer. Örnek: Hangi alanların temizlendiğini hatırlar, temizlenmeyen yerlere doğru plan yapar.",
        wrongExplanations: [
            { option: "A", reason: "Sadece anlık algıya bakmak basit refleks ajanlarının özelliğidir." },
            { option: "B", reason: "Hedeflere göre planlama hedefe-dayalı ajanların özelliğidir." },
            { option: "C", reason: "Fayda fonksiyonu fayda-tabanlı ajanların özelliğidir." },
            { option: "E", reason: "Model-bazlı ajanlar mantıklı kararlar verir, rastgele eylem seçmezler." }
        ]
    },
    {
        question: "Hedefe-dayalı ajanlar kararlarını nasıl verir?",
        options: [
            "Hedefe olan uzaklıklarına göre",
            "Sadece mevcut algıya göre",
            "Sadece fayda değerlerine göre",
            "Sadece rastgele",
            "Sadece geçmiş deneyimlere göre"
        ],
        correctAnswer: "A",
        explanation: "Hedefe-dayalı ajanlar, kararlarını hedefe olan uzaklıklarına göre seçerler. Amaçları, her eylemin hedefe mesafeyi azaltmasıdır. Genellikle arama (search) ve planlama (planning) gerektirir.",
        wrongExplanations: [
            { option: "B", reason: "Sadece mevcut algıya bakmak basit refleks ajanlarının özelliğidir." },
            { option: "C", reason: "Fayda değerleri fayda-tabanlı ajanların özelliğidir." },
            { option: "D", reason: "Hedefe-dayalı ajanlar mantıklı kararlar verir, rastgele değildir." },
            { option: "E", reason: "Geçmiş deneyimlerden öğrenme öğrenmeye-dayalı ajanların özelliğidir." }
        ]
    },
    {
        question: "Hedefe-dayalı ajanların avantajı nedir?",
        options: [
            "Çok hızlı çalışırlar",
            "Hiç bellek kullanmazlar",
            "Kararlarını destekleyen bilgi açıkça temsil edilir → daha esnek",
            "Sadece anlık algıya bakarlar",
            "Rastgele eylem seçerler"
        ],
        correctAnswer: "C",
        explanation: "Hedefe-dayalı ajanların avantajı, kararlarını destekleyen bilginin açıkça temsil edilmesidir, bu da onları daha esnek yapar. Hedefler değiştirilebilir ve genellikle arama ve planlama gerektirir.",
        wrongExplanations: [
            { option: "A", reason: "Hedefe-dayalı ajanlar mantık yürütme nedeniyle zaman alır, çok hızlı değildirler." },
            { option: "B", reason: "Hedefe-dayalı ajanlar bellek kullanır, iç durum tutarlar." },
            { option: "D", reason: "Sadece anlık algıya bakmak basit refleks ajanlarının özelliğidir." },
            { option: "E", reason: "Hedefe-dayalı ajanlar mantıklı kararlar verir, rastgele değildir." }
        ]
    },
    {
        question: "Hedefe-dayalı ajanların dezavantajı nedir?",
        options: [
            "Çok esnek olmaları",
            "Hedefleri değiştirememeleri",
            "Mantık yürütme zaman alır, bu sırada ortam değişebilir",
            "Hiç planlama yapamamaları",
            "Çok basit olmaları"
        ],
        correctAnswer: "C",
        explanation: "Hedefe-dayalı ajanların dezavantajı, mantık yürütme ve planlama yapmanın zaman almasıdır. Bu sırada ortam değişebilir ve planlar geçersiz hale gelebilir.",
        wrongExplanations: [
            { option: "A", reason: "Esnek olmak dezavantaj değil, avantajdır." },
            { option: "B", reason: "Hedefe-dayalı ajanların hedefleri değiştirilebilir, bu bir özellikleridir." },
            { option: "D", reason: "Hedefe-dayalı ajanlar planlama yaparlar, bu onların temel özelliğidir." },
            { option: "E", reason: "Hedefe-dayalı ajanlar basit değil, oldukça karmaşıktırlar." }
        ]
    },
    {
        question: "Fayda-tabanlı ajanlar neden gerekli hale gelir?",
        options: [
            "Çünkü hedefe ulaşmak her zaman yeterlidir",
            "Çünkü sadece hedefe ulaşmak önemlidir",
            "Çünkü hiç hedef yoktur",
            "Çünkü hedefe ulaşmak çoğu zaman yeterli değildir - daha hızlı, daha güvenli, daha ucuz bir seçenek daha değerlidir",
            "Çünkü sadece rastgele seçim yapılır"
        ],
        correctAnswer: "D",
        explanation: "Fayda-tabanlı ajanlar gerekli hale gelir çünkü hedefe ulaşmak çoğu zaman yeterli değildir. Daha hızlı, daha güvenli, daha ucuz bir seçenek daha değerlidir. Bu nedenle her duruma bir fayda derecesi atanır.",
        wrongExplanations: [
            { option: "A", reason: "Hedefe ulaşmak her zaman yeterli değildir, kalite ve verimlilik de önemlidir." },
            { option: "B", reason: "Sadece hedefe ulaşmak yeterli değildir, nasıl ulaşıldığı da önemlidir." },
            { option: "C", reason: "Fayda-tabanlı ajanlar hedefleri de kullanabilir, ancak fayda fonksiyonu eklerler." },
            { option: "E", reason: "Fayda-tabanlı ajanlar mantıklı kararlar verir, rastgele değildir." }
        ]
    },
    {
        question: "Fayda (utility) fonksiyonu ne yapar?",
        options: [
            "Sadece hedefleri tanımlar",
            "Sadece eylemleri seçer",
            "Sadece algıları işler",
            "Her durumu gerçek bir sayıya eşler (mutluluk/memnuniyet derecesini tanımlar)",
            "Sadece bellek yönetir"
        ],
        correctAnswer: "D",
        explanation: "Bir fayda fonksiyonunun görevi, bir durumu ilişkili mutluluk (memnuniyet) derecesini tanımlayan gerçek bir sayıya eşlemektir. Formül: f(durum) → değer. Bu, farklı durumların göreli değerini karşılaştırmayı sağlar.",
        wrongExplanations: [
            { option: "A", reason: "Fayda fonksiyonu hedefleri tanımlamaz, durumların değerini ölçer." },
            { option: "B", reason: "Fayda fonksiyonu eylemleri seçmez, durumların değerini hesaplar." },
            { option: "C", reason: "Fayda fonksiyonu algıları işlemez, durumları değerlendirir." },
            { option: "E", reason: "Fayda fonksiyonu bellek yönetimi yapmaz." }
        ]
    },
    {
        question: "Fayda-tabanlı ajanlar belirsiz ortamda nasıl karar verir?",
        options: [
            "Sadece ilk eylemi seçer",
            "Rastgele eylem seçer",
            "Sadece hedefe en yakın eylemi seçer",
            "Beklenen faydayı maksimize eden eylemi seçer",
            "Hiç eylem seçmez"
        ],
        correctAnswer: "D",
        explanation: "Fayda-tabanlı ajanlar belirsiz ortamda beklenen faydayı maksimize eden eylemi seçer. Bu, olasılıksal durumlarda bile en iyi kararı vermelerini sağlar. Alternatifler arasında en iyi olanı bulurlar.",
        wrongExplanations: [
            { option: "A", reason: "Fayda-tabanlı ajanlar mantıklı kararlar verir, sadece ilk eylemi seçmezler." },
            { option: "B", reason: "Fayda-tabanlı ajanlar rastgele değil, beklenen faydaya göre karar verirler." },
            { option: "C", reason: "Hedefe en yakın eylem hedefe-dayalı ajanların özelliğidir, fayda-tabanlı ajanlar faydayı maksimize eder." },
            { option: "E", reason: "Fayda-tabanlı ajanlar eylem seçerler, eylemsiz kalmazlar." }
        ]
    },
    {
        question: "Fayda-tabanlı ajanlar hangi durumda özellikle değerlidir?",
        options: [
            "Sadece tek hedef olduğunda",
            "Hiç hedef olmadığında",
            "Rekabetçi hedeflerde",
            "Sadece deterministik ortamda",
            "Sadece statik ortamda"
        ],
        correctAnswer: "C",
        explanation: "Fayda-tabanlı ajanlar rekabetçi hedeflerde değerlidir. Farklı hedefler arasında öncelik belirlemek ve en iyi dengeyi bulmak için fayda fonksiyonu kullanılır.",
        wrongExplanations: [
            { option: "A", reason: "Tek hedef olduğunda hedefe-dayalı ajanlar yeterli olabilir." },
            { option: "B", reason: "Fayda-tabanlı ajanlar hedeflerle çalışabilir, ancak fayda ölçümü eklerler." },
            { option: "D", reason: "Fayda-tabanlı ajanlar sadece deterministik ortamla sınırlı değildir." },
            { option: "E", reason: "Fayda-tabanlı ajanlar sadece statik ortamla sınırlı değildir." }
        ]
    },
    {
        question: "Öğrenmeye-dayalı ajanlar nasıl başlar?",
        options: [
            "Tam bilgiyle başlar",
            "Hiç bilgi olmadan başlar",
            "Sadece rastgele bilgilerle başlar",
            "Temel bilgilerle başlar, deneyimlerle kendini geliştirir",
            "Sadece hedeflerle başlar"
        ],
        correctAnswer: "D",
        explanation: "Öğrenmeye-dayalı ajanlar temel bilgilerle başlar ve deneyimlerle kendini geliştirir. Otonom olarak uyum sağlar ve zaman içinde daha 'akıllı' hale gelir.",
        wrongExplanations: [
            { option: "A", reason: "Öğrenmeye-dayalı ajanlar tam bilgiyle başlamaz, öğrenmeleri gerekir." },
            { option: "B", reason: "Hiç bilgi olmadan başlamazlar, temel bilgilerle başlarlar." },
            { option: "C", reason: "Rastgele bilgilerle başlamazlar, mantıklı temel bilgilerle başlarlar." },
            { option: "E", reason: "Sadece hedeflerle başlamazlar, temel bilgiler ve öğrenme yeteneği ile başlarlar." }
        ]
    },
    {
        question: "Öğrenmeye-dayalı ajanların kaç bileşeni vardır?",
        options: [
            "2 bileşen",
            "3 bileşen",
            "5 bileşen",
            "4 bileşen",
            "6 bileşen"
        ],
        correctAnswer: "D",
        explanation: "Öğrenmeye-dayalı ajanların 4 bileşeni vardır: (1) Öğrenme elemanı, (2) Kritik (Eleştirmen), (3) Performans elemanı, (4) Problem üretici.",
        wrongExplanations: [
            { option: "A", reason: "Öğrenmeye-dayalı ajanlar 2 değil, 4 bileşene sahiptir." },
            { option: "B", reason: "Öğrenmeye-dayalı ajanlar 3 değil, 4 bileşene sahiptir." },
            { option: "C", reason: "Öğrenmeye-dayalı ajanlar 5 değil, 4 bileşene sahiptir." },
            { option: "E", reason: "Öğrenmeye-dayalı ajanlar 6 değil, 4 bileşene sahiptir." }
        ]
    },
    {
        question: "Öğrenmeye-dayalı ajanlarda 'Öğrenme elemanı' ne yapar?",
        options: [
            "Sadece performansı değerlendirir",
            "Sadece dış eylemleri seçer",
            "Sadece problem üretir",
            "Çevreden öğrenir, performansı artırır",
            "Sadece geri bildirim alır"
        ],
        correctAnswer: "D",
        explanation: "Öğrenme elemanı çevreden öğrenir ve performansı artırır. Deneyimlerden bilgi çıkarır ve ajanın davranışını iyileştirir.",
        wrongExplanations: [
            { option: "A", reason: "Performansı değerlendirmek Kritik'in görevidir." },
            { option: "B", reason: "Dış eylemleri seçmek Performans elemanının görevidir." },
            { option: "C", reason: "Problem üretmek Problem üreticinin görevidir." },
            { option: "E", reason: "Geri bildirim almak öğrenme elemanının bir girdisidir, ama temel görevi öğrenmektir." }
        ]
    },
    {
        question: "Öğrenmeye-dayalı ajanlarda 'Kritik (Eleştirmen)' ne yapar?",
        options: [
            "Çevreden öğrenir",
            "Dış eylemleri seçer",
            "Problem üretir",
            "Performansı değerlendirir ve öğrenme elemanına geri bildirim sağlar",
            "Sadece eylemleri uygular"
        ],
        correctAnswer: "D",
        explanation: "Kritik (Eleştirmen) performansı değerlendirir ve öğrenme elemanına geri bildirim sağlar. Bu geri bildirim, öğrenme sürecini yönlendirir.",
        wrongExplanations: [
            { option: "A", reason: "Çevreden öğrenmek Öğrenme elemanının görevidir." },
            { option: "B", reason: "Dış eylemleri seçmek Performans elemanının görevidir." },
            { option: "C", reason: "Problem üretmek Problem üreticinin görevidir." },
            { option: "E", reason: "Eylemleri uygulamak Aktüatörlerin görevidir." }
        ]
    },
    {
        question: "Öğrenmeye-dayalı ajanlarda 'Performans elemanı' ne yapar?",
        options: [
            "Dış eylemleri seçer",
            "Çevreden öğrenir",
            "Performansı değerlendirir",
            "Sadece problem üretir",
            "Sadece geri bildirim alır"
        ],
        correctAnswer: "A",
        explanation: "Performans elemanı dış eylemleri seçer. Öğrenme elemanından gelen bilgileri kullanarak en uygun eylemi belirler ve uygular.",
        wrongExplanations: [
            { option: "B", reason: "Çevreden öğrenmek Öğrenme elemanının görevidir." },
            { option: "C", reason: "Performansı değerlendirmek Kritik'in görevidir." },
            { option: "D", reason: "Problem üretmek Problem üreticinin görevidir." },
            { option: "E", reason: "Geri bildirim almak Kritik'in görevidir." }
        ]
    },
    {
        question: "Öğrenmeye-dayalı ajanlarda 'Problem üretici' ne yapar?",
        options: [
            "Çevreden öğrenir",
            "Performansı değerlendirir",
            "Dış eylemleri seçer",
            "Sadece mevcut eylemleri tekrarlar",
            "Yeni ve bilgilendirici deneyimler oluşturacak eylemleri önerir"
        ],
        correctAnswer: "E",
        explanation: "Problem üretici, yeni ve bilgilendirici deneyimler oluşturacak eylemleri önerir. Bu, ajanın keşif yapmasını ve yeni bilgiler öğrenmesini sağlar.",
        wrongExplanations: [
            { option: "A", reason: "Çevreden öğrenmek Öğrenme elemanının görevidir." },
            { option: "B", reason: "Performansı değerlendirmek Kritik'in görevidir." },
            { option: "C", reason: "Dış eylemleri seçmek Performans elemanının görevidir." },
            { option: "D", reason: "Mevcut eylemleri tekrarlamak problem üreticinin amacı değildir, yeni deneyimler yaratmaktır." }
        ]
    },
    {
        question: "Bir ajanın eylemlerini algılayabilmesi ancak etkilerini her zaman algılayamaması hangi durumda daha kritiktir?",
        options: [
            "Tam gözlenebilir ortamda",
            "Sadece deterministik ortamda",
            "Kısmi gözlenebilir ortamda",
            "Sadece statik ortamda",
            "Sadece epizodik ortamda"
        ],
        correctAnswer: "C",
        explanation: "Kısmi gözlenebilir ortamda, ajan eylemlerini algılayabilir ancak eylemlerin tam etkilerini göremeyebilir. Bu durumda model-bazlı veya daha gelişmiş ajan türleri gereklidir.",
        wrongExplanations: [
            { option: "A", reason: "Tam gözlenebilir ortamda etkiler de algılanabilir." },
            { option: "B", reason: "Deterministik ortam eylem-etki ilişkisini net yapar, ancak gözlenebilirlik önemlidir." },
            { option: "D", reason: "Statik ortam değişmeyen ortamdır, gözlenebilirlik hala kritiktir." },
            { option: "E", reason: "Epizodik ortam bağımsız bölümler içerir, gözlenebilirlik hala önemlidir." }
        ]
    },
    {
        question: "Basit refleks ajanının süpürge örneğinde rasyonellik kısıtları nelerdir?",
        options: [
            "Ajan her şeyi bilir ve görür",
            "Ajan her şeyi bilemez, her şeyi göremez (mobilya altı vb.), ortam stokastik olabilir, rasyonel ≠ her zaman başarılı",
            "Sadece hız kısıtı vardır",
            "Sadece bellek kısıtı vardır",
            "Hiç kısıt yoktur"
        ],
        correctAnswer: "B",
        explanation: "Basit refleks ajanının rasyonellik kısıtları: Ajan her şeyi bilemez, her şeyi göremez (mobilya altı vb.), ortam stokastik olabilir, ve rasyonel olmak her zaman başarılı olmak anlamına gelmez.",
        wrongExplanations: [
            { option: "A", reason: "Ajan her şeyi bilmez ve görmez, bu bir kısıttır." },
            { option: "C", reason: "Sadece hız kısıtı değil, bilgi ve gözlem kısıtları da vardır." },
            { option: "D", reason: "Sadece bellek kısıtı değil, algılama ve bilgi kısıtları da vardır." },
            { option: "E", reason: "Kısıtlar vardır, sınırsız değildir." }
        ]
    },
    {
        question: "Basit refleks ajanı rastgele hareket varsa döngüden kaçabilir mi?",
        options: [
            "Evet, kesinlikle kaçabilir",
            "Hiç kaçamaz",
            "Sadece deterministik ortamda kaçabilir",
            "Kaçabilir ama garanti değildir",
            "Sadece statik ortamda kaçabilir"
        ],
        correctAnswer: "D",
        explanation: "Basit refleks ajanı rastgele hareket varsa döngüden kaçabilir ama garanti değildir. Çünkü görülmeyen durumlar hakkında bilgisi yoktur ve sadece mevcut algıya göre karar verir.",
        wrongExplanations: [
            { option: "A", reason: "Kesinlikle garanti değildir, sadece mümkün olabilir." },
            { option: "B", reason: "Hiç kaçamaz diye bir garanti yoktur, rastgele hareket yardımcı olabilir." },
            { option: "C", reason: "Deterministik ortam döngüden kaçış garantisi vermez." },
            { option: "E", reason: "Statik ortam döngüden kaçış garantisi vermez." }
        ]
    },
    {
        question: "Model-bazlı ajanın süpürge örneğinde hangi özelliği avantaj sağlar?",
        options: [
            "Hangi alanların temizlendiğini hatırlaması, temizlenmeyen yerlere doğru plan yapması, engelleri yorumlayarak hareket etmesi",
            "Sadece anlık algıya bakması",
            "Sadece rastgele hareket etmesi",
            "Hiç planlama yapmaması",
            "Sadece ilk eylemi seçmesi"
        ],
        correctAnswer: "A",
        explanation: "Model-bazlı ajanın süpürge örneğindeki avantajları: Hangi alanların temizlendiğini hatırlar, temizlenmeyen yerlere doğru plan yapar, engelleri yorumlayarak hareket eder. Bu, iç durum tutması sayesinde mümkündür.",
        wrongExplanations: [
            { option: "B", reason: "Sadece anlık algıya bakmak basit refleks ajanlarının özelliğidir, model-bazlı ajanlar geçmişi de kullanır." },
            { option: "C", reason: "Rastgele hareket model-bazlı ajanların özelliği değildir." },
            { option: "D", reason: "Model-bazlı ajanlar planlama yapabilirler." },
            { option: "E", reason: "Model-bazlı ajanlar mantıklı kararlar verir, sadece ilk eylemi seçmezler." }
        ]
    },
    {
        question: "Hangi ajan türü en basit yapıya sahiptir?",
        options: [
            "Öğrenmeye-dayalı ajanlar",
            "Basit refleks ajanları",
            "Fayda-tabanlı ajanlar",
            "Hedefe-dayalı ajanlar",
            "Durumsal-refleks ajanlar"
        ],
        correctAnswer: "B",
        explanation: "Basit refleks ajanları en basit yapıya sahiptir. Sadece 'if/else' kurallarıyla çalışırlar ve mevcut algıya göre karar verirler. Geçmiş veya iç durum tutmazlar.",
        wrongExplanations: [
            { option: "A", reason: "Öğrenmeye-dayalı ajanlar en karmaşık yapıya sahiptir (4 bileşen)." },
            { option: "C", reason: "Fayda-tabanlı ajanlar karmaşık yapıya sahiptir." },
            { option: "D", reason: "Hedefe-dayalı ajanlar planlama gerektirir, karmaşıktır." },
            { option: "E", reason: "Durumsal-refleks ajanlar iç durum tutar, basit refleks ajanlarından daha karmaşıktır." }
        ]
    },
    {
        question: "Hangi ajan türü en karmaşık yapıya sahiptir?",
        options: [
            "Basit refleks ajanları",
            "Durumsal-refleks ajanlar",
            "Hedefe-dayalı ajanlar",
            "Fayda-tabanlı ajanlar",
            "Öğrenmeye-dayalı ajanlar"
        ],
        correctAnswer: "E",
        explanation: "Öğrenmeye-dayalı ajanlar en karmaşık yapıya sahiptir çünkü 4 bileşenden oluşur: Öğrenme elemanı, Kritik, Performans elemanı ve Problem üretici. Zaman içinde öğrenir ve kendini geliştirir.",
        wrongExplanations: [
            { option: "A", reason: "Basit refleks ajanları en basit yapıya sahiptir." },
            { option: "B", reason: "Durumsal-refleks ajanlar basit refleks ajanlarından karmaşık ama öğrenmeye-dayalı ajanlardan basittir." },
            { option: "C", reason: "Hedefe-dayalı ajanlar karmaşık ama öğrenmeye-dayalı ajanlardan daha basittir." },
            { option: "D", reason: "Fayda-tabanlı ajanlar karmaşık ama öğrenmeye-dayalı ajanlardan daha basittir." }
        ]
    },
    {
        question: "Bir ajan 'percept sequence' kullanarak karar veriyorsa, bu ajan hangi tür olabilir?",
        options: [
            "Sadece basit refleks ajanı",
            "Sadece öğrenmeye-dayalı ajan",
            "Model-bazlı, hedefe-dayalı, fayda-tabanlı veya öğrenmeye-dayalı ajan (basit refleks hariç)",
            "Sadece fayda-tabanlı ajan",
            "Hiçbir ajan türü"
        ],
        correctAnswer: "C",
        explanation: "Percept sequence (algı dizisi) kullanmak, ajanın geçmiş algıları da dikkate aldığı anlamına gelir. Basit refleks ajanları bunu kullanmaz (sadece mevcut algıya bakarlar). Model-bazlı, hedefe-dayalı, fayda-tabanlı ve öğrenmeye-dayalı ajanlar ise percept sequence kullanabilir.",
        wrongExplanations: [
            { option: "A", reason: "Basit refleks ajanları percept sequence kullanmaz, sadece mevcut algıya bakarlar." },
            { option: "B", reason: "Sadece öğrenmeye-dayalı değil, diğer gelişmiş ajanlar da percept sequence kullanabilir." },
            { option: "D", reason: "Sadece fayda-tabanlı değil, diğer gelişmiş ajanlar da kullanabilir." },
            { option: "E", reason: "Birçok ajan türü percept sequence kullanır." }
        ]
    },
    {
        question: "Hangi ajan türü hem hedef hem de fayda fonksiyonu kullanabilir?",
        options: [
            "Sadece basit refleks ajanları",
            "Sadece hedefe-dayalı ajanlar",
            "Sadece öğrenmeye-dayalı ajanlar",
            "Fayda-tabanlı ajanlar (hedefleri de kullanabilirler)",
            "Sadece durumsal-refleks ajanlar"
        ],
        correctAnswer: "D",
        explanation: "Fayda-tabanlı ajanlar fayda fonksiyonu kullanırlar, ancak hedefleri de kullanabilirler. Hedefe ulaşmanın yanı sıra, nasıl ulaşıldığını (hız, güvenlik, maliyet) de değerlendirirler.",
        wrongExplanations: [
            { option: "A", reason: "Basit refleks ajanları ne hedef ne de fayda kullanır, sadece if/else kuralları kullanır." },
            { option: "B", reason: "Hedefe-dayalı ajanlar sadece hedef kullanır, fayda fonksiyonu kullanmazlar." },
            { option: "C", reason: "Öğrenmeye-dayalı ajanlar öğrenme yeteneği ile çalışır, fayda veya hedef kullanabilir ama bu onların temel özelliği değildir." },
            { option: "E", reason: "Durumsal-refleks ajanlar iç durum tutar ama fayda fonksiyonu kullanmazlar." }
        ]
    },
    {
        question: "Bir robotik arabanın direksiyon, fren ve gaz kontrolü hangi ajan bileşenine karşılık gelir?",
        options: [
            "Sensörler",
            "Performans elemanı",
            "Öğrenme elemanı",
            "Kritik",
            "Problem üretici"
        ],
        correctAnswer: "B",
        explanation: "Robotik arabanın direksiyon, fren ve gaz kontrolü, aracın hangi eylemi yapacağına (dön, dur, hızlan vb.) karar verdiği için Performans elemanına karşılık gelir. Bu, özellikle öğrenmeye-dayalı ajanlarda görülür.",
        wrongExplanations: [
            { option: "A", reason: "Sensörler çevreyi algılar (kamera, radar), eylem kontrolü yapmaz." },
            { option: "C", reason: "Öğrenme elemanı deneyimlerden öğrenir, direkt eylem kontrolü yapmaz." },
            { option: "D", reason: "Kritik performansı değerlendirir, eylem kontrolü yapmaz." },
            { option: "E", reason: "Problem üretici yeni deneyimler önerir, direkt eylem kontrolü yapmaz." }
        ]
    },
    {
        question: "Bir temizlik robotunun 'Bu alan yeterince temizlendi mi?' sorusunu sorması hangi ajan bileşenine karşılık gelir?",
        options: [
            "Kritik (Eleştirmen)",
            "Performans elemanı",
            "Öğrenme elemanı",
            "Problem üretici",
            "Sensörler"
        ],
        correctAnswer: "A",
        explanation: "'Bu alan yeterince temizlendi mi?' sorusu performansı değerlendirme sorusudur, bu da Kritik (Eleştirmen) bileşeninin görevidir. Kritik, yapılan eylemlerin kalitesini ve yeterliliğini değerlendirir.",
        wrongExplanations: [
            { option: "B", reason: "Performans elemanı eylemleri seçer, performansı değerlendirmez." },
            { option: "C", reason: "Öğrenme elemanı öğrenir, değerlendirme yapmaz." },
            { option: "D", reason: "Problem üretici yeni problemler önerir, mevcut performansı değerlendirmez." },
            { option: "E", reason: "Sensörler çevreyi algılar, değerlendirme yapmaz." }
        ]
    },
    {
        question: "Bir temizlik robotunun 'Bu köşe neden hep kirli kalıyor?' gibi sorular sorması hangi ajan bileşenine karşılık gelir?",
        options: [
            "Performans elemanı",
            "Kritik",
            "Öğrenme elemanı",
            "Sensörler",
            "Problem üretici"
        ],
        correctAnswer: "E",
        explanation: "'Bu köşe neden hep kirli kalıyor?' gibi sorular yeni ve bilgilendirici deneyimler oluşturmak için sorulan sorulardır. Bu, Problem üretici bileşeninin görevidir. Problem üretici, keşif yapılmasını sağlar.",
        wrongExplanations: [
            { option: "A", reason: "Performans elemanı mevcut eylemleri seçer, yeni problemler üretmez." },
            { option: "B", reason: "Kritik performansı değerlendirir, yeni problemler üretmez." },
            { option: "C", reason: "Öğrenme elemanı öğrenir, problem üretmez." },
            { option: "D", reason: "Sensörler çevreyi algılar, problem üretmez." }
        ]
    },
    {
        question: "Bir temizlik robotunun zamanla evin haritasını öğrenmesi ve daha verimli temizlemeyi öğrenmesi hangi ajan bileşenine karşılık gelir?",
        options: [
            "Performans elemanı",
            "Kritik",
            "Problem üretici",
            "Öğrenme elemanı",
            "Sensörler"
        ],
        correctAnswer: "D",
        explanation: "Zamanla evin haritasını öğrenmek ve daha verimli temizlemeyi öğrenmek, deneyimlerden bilgi çıkarmayı içerir. Bu, Öğrenme elemanı bileşeninin görevidir. Öğrenme elemanı, geçmiş deneyimlerden öğrenir ve performansı artırır.",
        wrongExplanations: [
            { option: "A", reason: "Performans elemanı öğrenme yapmaz, sadece eylemleri seçer." },
            { option: "B", reason: "Kritik performansı değerlendirir, öğrenme yapmaz." },
            { option: "C", reason: "Problem üretici yeni problemler önerir, öğrenme yapmaz." },
            { option: "E", reason: "Sensörler çevreyi algılar, öğrenme yapmaz." }
        ]
    }
];

