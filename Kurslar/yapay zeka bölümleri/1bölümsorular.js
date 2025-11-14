// Yapay Zekâ Dersi - Sınav Soruları
// CHAPTER 1: Yapay Zekâ Tanımları ve Ajanlar

const questions = [
    {
        question: "Bellman (1978)'in tanımına göre yapay zekâ, insan düşüncesiyle ilişkilendirilen hangi faaliyetlerin otomasyonu ile ilgilidir?",
        options: [
            "Sadece problem çözme",
            "Sadece öğrenme süreçleri",
            "Karar verme, problem çözme ve öğrenme",
            "Yalnızca karar verme",
            "Sadece algılama ve hareket"
        ],
        correctAnswer: "C",
        explanation: "Bellman'ın tanımı, yapay zekâyı karar verme, problem çözme ve öğrenme gibi insan düşüncesiyle ilişkilendirilen faaliyetlerin otomasyonu olarak tanımlar. Bu tanım, yapay zekânın çok boyutlu doğasını vurgular.",
        wrongExplanations: [
            { option: "A", reason: "Bellman'ın tanımı sadece problem çözmeyi değil, karar verme ve öğrenmeyi de kapsar." },
            { option: "B", reason: "Tanım öğrenmenin yanında karar verme ve problem çözmeyi de kapsar." },
            { option: "D", reason: "Tanım karar vermenin yanı sıra problem çözme ve öğrenmeyi de içerir." },
            { option: "E", reason: "Bellman'ın tanımı algılama ve hareketten ziyade düşünce süreçlerine odaklanır." }
        ]
    },
    {
        question: "Haugeland (1985)'in yapay zekâ tanımı, bilgisayarların hangi özelliğe sahip olmasını amaçlar?",
        options: [
            "Düşünmesini ve gerçek anlamda 'zihne sahip olmasını'",
            "Sadece hızlı hesaplama yapabilmesi",
            "Sadece veri depolayabilmesi",
            "Sadece görüntü işleyebilmesi",
            "Sadece ağ üzerinden iletişim kurabilmesi"
        ],
        correctAnswer: "A",
        explanation: "Haugeland'ın tanımı, yapay zekânın sadece davranışı taklit etmekle kalmayıp, bilgisayarların gerçekten düşünmesini ve zihne sahip olmasını sağlama çabası olduğunu vurgular. Bu, felsefi bir derinlik içerir.",
        wrongExplanations: [
            { option: "B", reason: "Haugeland'ın tanımı sadece hesaplama hızından değil, zihinsel süreçlerden bahseder." },
            { option: "C", reason: "Tanım veri depolamadan ziyade düşünce ve zihin kavramlarına odaklanır." },
            { option: "D", reason: "Görüntü işleme tek bir araçtır, tanım daha kapsamlı bir zihinsel yetenekten bahseder." },
            { option: "E", reason: "İletişim yeteneği tanımın odağı değildir." }
        ]
    },
    {
        question: "Winston (1992)'in yapay zekâ tanımı hangi hesaplamalı işlemleri inceler?",
        options: [
            "Sadece algoritma karmaşıklığı",
            "Sadece veri yapıları",
            "Sadece optimizasyon problemleri",
            "Sadece kriptografi hesaplamaları",
            "Algılamayı, akıl yürütmeyi ve hareketi mümkün kılan hesaplamalar"
        ],
        correctAnswer: "E",
        explanation: "Winston'ın tanımı, yapay zekânın algılama, akıl yürütme ve hareket gibi temel zihinsel ve fiziksel yetenekleri mümkün kılan hesaplamaların incelenmesi olduğunu belirtir. Bu, yapay zekâyı bütüncül bir şekilde ele alır.",
        wrongExplanations: [
            { option: "A", reason: "Winston'ın tanımı algoritma karmaşıklığından ziyade algılama, akıl yürütme ve hareket hesaplamalarına odaklanır." },
            { option: "B", reason: "Veri yapıları tanımın odağı değildir, algılama ve akıl yürütme süreçleri önemlidir." },
            { option: "C", reason: "Optimizasyon sadece bir araçtır, tanım daha geniş bir kapsam sunar." },
            { option: "D", reason: "Kriptografi tanımın kapsamı dışındadır." }
        ]
    },
    {
        question: "'Thinking Humanly' (İnsan gibi düşünme) yaklaşımının temel odağı nedir?",
        options: [
            "İnsan davranışını dışarıdan taklit etmek",
            "İnsan zihninin nasıl çalıştığını modellemeye çalışmak",
            "Sadece mantık kurallarına dayalı akıl yürütmek",
            "Performansı maksimize etmeye odaklanmak",
            "Turing Test'ini geçmeye çalışmak"
        ],
        correctAnswer: "B",
        explanation: "'Thinking Humanly' yaklaşımı, insan zihninin bilişsel süreçlerini ve nasıl çalıştığını modellemeye çalışır. Bu yaklaşım, psikoloji ve bilişsel bilimlerle yakından ilişkilidir ve içsel zihinsel süreçlere odaklanır.",
        wrongExplanations: [
            { option: "A", reason: "Bu 'Acting Humanly' yaklaşımının özelliğidir, 'Thinking Humanly' içsel süreçlere odaklanır." },
            { option: "C", reason: "Bu 'Thinking Rationally' yaklaşımıdır, mantık kurallarına dayanır." },
            { option: "D", reason: "Bu 'Acting Rationally' yaklaşımının özelliğidir." },
            { option: "E", reason: "Turing Test'i 'Acting Humanly' yaklaşımına aittir." }
        ]
    },
    {
        question: "Turing Test hangi yapay zekâ yaklaşımı kategorisine girer?",
        options: [
            "Acting Humanly",
            "Thinking Humanly",
            "Thinking Rationally",
            "Acting Rationally",
            "Hiçbiri"
        ],
        correctAnswer: "A",
        explanation: "Turing Test, bir makinenin insan gibi davranıp davranamayacağını test eder. Bu, dışarıdan gözlemlenen davranışa odaklandığı için 'Acting Humanly' (İnsan gibi davranma) yaklaşımına aittir.",
        wrongExplanations: [
            { option: "B", reason: "'Thinking Humanly' içsel zihinsel süreçlere odaklanır, Turing Test ise dışsal davranışa bakar." },
            { option: "C", reason: "'Thinking Rationally' mantık kurallarına dayanır, Turing Test davranışsal bir testtir." },
            { option: "D", reason: "'Acting Rationally' performans odaklıdır, Turing Test ise insan benzeri davranışa bakar." },
            { option: "E", reason: "Turing Test açıkça 'Acting Humanly' yaklaşımına aittir." }
        ]
    },
    {
        question: "'Acting Rationally' (Mantıklı davranma) yaklaşımının temel amacı nedir?",
        options: [
            "İnsan zihnini modellemek",
            "Turing Test'ini geçmek",
            "Mantık kurallarına dayalı akıl yürütme yapmak",
            "Çevreye uygun en mantıklı eylemi seçerek performansı maksimize etmek",
            "Sadece en hızlı çözümü bulmak"
        ],
        correctAnswer: "D",
        explanation: "'Acting Rationally' yaklaşımı, ajanın çevresine en uygun ve mantıklı eylemi seçerek performans ölçütünü maksimize etmeye odaklanır. Bu yaklaşım, rasyonellik ilkesine dayanır ve pratik uygulamalarda yaygındır.",
        wrongExplanations: [
            { option: "A", reason: "Bu 'Thinking Humanly' yaklaşımının amacıdır." },
            { option: "B", reason: "Bu 'Acting Humanly' yaklaşımının hedefidir." },
            { option: "C", reason: "Bu 'Thinking Rationally' yaklaşımının özelliğidir." },
            { option: "E", reason: "Sadece hız değil, performansın genel olarak maksimize edilmesi önemlidir." }
        ]
    },
    {
        question: "Bir ajanın temel formülü 'Ajan = Mimari + Program' şeklinde verilmiştir. Bu formülde 'Mimari' neyi temsil eder?",
        options: [
            "Sadece yazılım kodunu",
            "Sadece donanım bileşenlerini",
            "Sensörler, aktüatörler ve çalışma ortamını içeren fiziksel/donanımsal yapı",
            "Sadece algoritmaları",
            "Sadece veri yapılarını"
        ],
        correctAnswer: "C",
        explanation: "Ajan formülünde 'Mimari', ajanın sensörler, aktüatörler ve çalışma ortamını içeren fiziksel ve donanımsal yapısını temsil eder. Program ise bu mimari üzerinde çalışan mantık ve karar verme süreçleridir.",
        wrongExplanations: [
            { option: "A", reason: "Mimari yazılım kodunu değil, fiziksel/donanımsal yapıyı temsil eder." },
            { option: "B", reason: "Mimari sadece donanımı değil, sensörler ve aktüatörlerle birlikte çalışma ortamını da içerir." },
            { option: "D", reason: "Algoritmalar program kısmına aittir, mimari fiziksel yapıdır." },
            { option: "E", reason: "Veri yapıları programın bir parçasıdır, mimari değildir." }
        ]
    },
    {
        question: "Robotik bir ajanda sensör örnekleri hangi seçenekte doğru verilmiştir?",
        options: [
            "Kamera, kızılötesi sensörler",
            "Sadece motorlar",
            "Sadece hoparlörler",
            "Sadece ekranlar",
            "Sadece veritabanı bağlantıları"
        ],
        correctAnswer: "A",
        explanation: "Robotik ajanlarda sensörler, çevreyi algılamak için kullanılan cihazlardır. Kamera ve kızılötesi sensörler, robotun çevresini algılamasına olanak tanıyan tipik sensör örnekleridir.",
        wrongExplanations: [
            { option: "B", reason: "Motorlar aktüatördür, sensör değildir." },
            { option: "C", reason: "Hoparlörler aktüatördür, çevreyi algılamazlar." },
            { option: "D", reason: "Ekranlar çıktı cihazıdır (aktüatör), sensör değildir." },
            { option: "E", reason: "Veritabanı bağlantıları sensör değildir, veri kaynağıdır." }
        ]
    },
    {
        question: "Aşağıdakilerden hangisi bir aktüatör örneği DEĞİLDİR?",
        options: [
            "Motor",
            "HTTP isteği gönderme",
            "Kamera",
            "Işık açma/kapatma",
            "Hoparlör"
        ],
        correctAnswer: "C",
        explanation: "Aktüatörler, ajanın eylem üretmesini sağlayan cihazlardır. Kamera ise çevreyi algılamak için kullanılan bir sensördür, eylem üretmez. Motor, HTTP isteği, ışık kontrolü ve hoparlör ise eylem üreten aktüatör örnekleridir.",
        wrongExplanations: [
            { option: "A", reason: "Motor bir aktüatördür, fiziksel hareket üretir." },
            { option: "B", reason: "HTTP isteği gönderme bir eylem olduğu için aktüatör kategorisine girer." },
            { option: "D", reason: "Işık açma/kapatma bir eylem olduğu için aktüatördür." },
            { option: "E", reason: "Hoparlör ses üretir, bu bir eylem olduğu için aktüatördür." }
        ]
    },
    {
        question: "Ajan fonksiyonu ile ajan programı arasındaki temel fark nedir?",
        options: [
            "Aynı şeyi ifade ederler",
            "Ajan fonksiyonu teorik, ajan programı mimari üzerinde çalışan pratik uygulamasıdır",
            "Ajan fonksiyonu donanım, ajan programı yazılımdır",
            "Ajan fonksiyonu sadece sensörleri, ajan programı sadece aktüatörleri kapsar",
            "Hiçbir fark yoktur"
        ],
        correctAnswer: "B",
        explanation: "Ajan fonksiyonu, percept dizilerini eyleme eşleyen matematiksel/teorik bir fonksiyondur. Ajan programı ise bu fonksiyonun belirli bir mimari (sensörler ve aktüatörler) üzerinde gerçekleştirilen pratik uygulamasıdır.",
        wrongExplanations: [
            { option: "A", reason: "Farklı kavramlardır - biri teorik, diğeri pratik uygulamadır." },
            { option: "C", reason: "İkisi de yazılımsal kavramlardır, donanım/hadware ayrımı değildir." },
            { option: "D", reason: "Her ikisi de tüm ajan bileşenlerini kapsar." },
            { option: "E", reason: "Açıkça farklı kavramlardır." }
        ]
    },
    {
        question: "Vacuum World (Elektrikli Süpürge Dünyası) örneğinde, ajanın algı formatı [Konum, İçerik] şeklindedir. [A, Kirli] algısı hangi durumu ifade eder?",
        options: [
            "A karesi temizdir",
            "A karesinde bulunuluyor ve A karesi kirli",
            "A karesinde bulunuluyor ve B karesi kirli",
            "B karesinde bulunuluyor ve A karesi temiz",
            "Her iki kare de kirli"
        ],
        correctAnswer: "B",
        explanation: "Vacuum World'de algı formatı [Konum, İçerik] şeklindedir. [A, Kirli] algısı, ajanın A karesinde bulunduğunu ve A karesinin kirli olduğunu gösterir. İlk eleman konumu, ikinci eleman o konumdaki içeriği (temiz/kirli) belirtir.",
        wrongExplanations: [
            { option: "A", reason: "[A, Kirli] algısı A karesinin kirli olduğunu gösterir, temiz değildir." },
            { option: "C", reason: "Algı formatı [Konum, İçerik] olduğu için [A, Kirli] A karesinin durumunu gösterir, B değil." },
            { option: "D", reason: "[A, Kirli] algısı A karesinde bulunulduğunu ve A'nın kirli olduğunu gösterir." },
            { option: "E", reason: "[A, Kirli] sadece A karesinin durumunu belirtir, B hakkında bilgi vermez." }
        ]
    },
    {
        question: "Table-based agent (Tablolu ajan) yaklaşımının en büyük dezavantajı nedir?",
        options: [
            "Çok hızlı çalışması",
            "Çok az bellek kullanması",
            "Çok basit olması",
            "Her zaman optimal çözümü üretmesi",
            "Tüm olası percept sequence'lerin tabloya yazılması gerektiği için çok büyük boyutlara ulaşması"
        ],
        correctAnswer: "E",
        explanation: "Table-based agent yaklaşımında, tüm olası percept sequence'lerin (algı dizilerinin) ve bunlara karşılık gelen eylemlerin bir tabloda saklanması gerekir. Bu, özellikle karmaşık çevrelerde tablonun astronomik boyutlara ulaşmasına neden olur ve pratikte kullanılamaz hale gelir.",
        wrongExplanations: [
            { option: "A", reason: "Table-based agent'ın dezavantajı hızı değil, boyutudur." },
            { option: "B", reason: "Tam tersine, çok fazla bellek kullanır." },
            { option: "C", reason: "Basit olması avantaj olabilir ama asıl sorun boyutudur." },
            { option: "D", reason: "Her zaman optimal olmayabilir ve boyut sorunu daha kritiktir." }
        ]
    },
    {
        question: "Simple reflex agent (Basit refleks ajan) hangi özelliğe sahiptir?",
        options: [
            "Sadece anlık algıya bakar ve geçmişi bilmez",
            "Geçmişi hatırlar",
            "Tüm geleceği planlar",
            "Tüm olası durumları tabloda saklar",
            "Öğrenme yeteneğine sahiptir"
        ],
        correctAnswer: "A",
        explanation: "Simple reflex agent, sadece mevcut anlık algıya (percept) bakarak karar verir. Geçmiş algıları hatırlamaz veya kullanmaz. Bu, ajanın davranışını basitleştirir ama bazı durumlarda yetersiz kalabilir.",
        wrongExplanations: [
            { option: "B", reason: "Simple reflex agent geçmişi hatırlamaz, bu model-based veya goal-based agent'ın özelliğidir." },
            { option: "C", reason: "Gelecek planlama daha gelişmiş ajan türlerinin özelliğidir." },
            { option: "D", reason: "Tablo kullanımı table-based agent'ın özelliğidir." },
            { option: "E", reason: "Öğrenme yeteneği learning agent'ın özelliğidir." }
        ]
    },
    {
        question: "Rasyonel bir ajan, hangi kriteri maksimize etmeye çalışır?",
        options: [
            "Gerçek performansı",
            "Sadece hızı",
            "Sadece doğruluğu",
            "Beklenen performansı",
            "Sadece enerji tüketimini"
        ],
        correctAnswer: "D",
        explanation: "Rasyonel ajan, sahip olduğu bilgilere göre beklenen performansı maksimize eder. Gerçek sonucu bilemeyeceği için (çevre kısmen gözlenebilir veya stokastik olabilir), mevcut bilgilere dayanarak en iyi beklenen sonucu hedefler.",
        wrongExplanations: [
            { option: "A", reason: "Rasyonel ajan gerçek performansı bilemez, çünkü çevre hakkında tam bilgiye sahip değildir." },
            { option: "B", reason: "Hız performans ölçütünün sadece bir parçası olabilir, asıl hedef beklenen performansın maksimizasyonudur." },
            { option: "C", reason: "Doğruluk da performans ölçütünün bir parçası olabilir, ama genel beklenen performans önemlidir." },
            { option: "E", reason: "Enerji tüketimi performans ölçütüne dahil edilebilir ama asıl hedef beklenen performansın maksimizasyonudur." }
        ]
    },
    {
        question: "Aşağıdaki ifadelerden hangisi rasyonellik hakkında YANLIŞTIR?",
        options: [
            "Rasyonellik = Her şeyi bilme",
            "Rasyonellik ≠ Her şeyi bilme",
            "Rasyonellik ≠ Mükemmeliyet",
            "Rasyonel ajan beklenen performansı maksimize eder",
            "Rasyonel ajan sahip olduğu bilgilere göre en iyi eylemi seçer"
        ],
        correctAnswer: "A",
        explanation: "Rasyonellik, her şeyi bilmek anlamına gelmez. Rasyonel ajan, sahip olduğu sınırlı bilgilere göre en iyi kararı verir. Çevre hakkında tam bilgiye sahip olmasa bile, mevcut bilgileri en iyi şekilde kullanarak beklenen performansı maksimize eder.",
        wrongExplanations: [
            { option: "B", reason: "Bu doğru bir ifadedir - rasyonellik her şeyi bilmeyi gerektirmez." },
            { option: "C", reason: "Bu doğru bir ifadedir - rasyonellik mükemmeliyet anlamına gelmez." },
            { option: "D", reason: "Bu rasyonel ajanın temel tanımıdır ve doğrudur." },
            { option: "E", reason: "Bu rasyonel ajanın özelliğidir ve doğrudur." }
        ]
    },
    {
        question: "Bir ajanın rasyonelliğini belirleyen 4 faktör hangi seçenekte tam olarak verilmiştir?",
        options: [
            "Sensörler, aktüatörler, algoritma, bellek",
            "Performans ölçütü, önceki çevre bilgisi, algı dizisi, eylemler",
            "Hız, doğruluk, bellek, enerji",
            "Sadece performans ölçütü",
            "Sadece algı dizisi"
        ],
        correctAnswer: "B",
        explanation: "Bir ajanın rasyonelliğini belirleyen 4 temel faktör şunlardır: (1) Performans ölçütü - neye göre başarı değerlendirilecek, (2) Önceki çevre bilgisi - ajanın çevre hakkında sahip olduğu ön bilgiler, (3) Algı dizisi (percept sequence) - ajanın geçmişten bugüne topladığı tüm algılar, (4) Eylemler - ajanın seçebileceği eylem kümesi.",
        wrongExplanations: [
            { option: "A", reason: "Sensörler ve aktüatörler ajanın yapısını oluşturur ama rasyonelliği belirleyen faktörler bunlar değildir." },
            { option: "C", reason: "Hız, doğruluk gibi özellikler performans ölçütünün parçası olabilir ama tek başına rasyonelliği belirlemez." },
            { option: "D", reason: "Performans ölçütü tek başına yeterli değildir, diğer 3 faktör de gereklidir." },
            { option: "E", reason: "Algı dizisi tek başına yeterli değildir, diğer faktörler de önemlidir." }
        ]
    },
    {
        question: "'Exploration' (Keşif) kavramı neyi ifade eder?",
        options: [
            "Ajanın çevreyi değiştirmesi",
            "Ajanın sadece mevcut bilgileri kullanması",
            "Ajanın hiçbir şey yapmaması",
            "Sadece enerji tasarrufu yapması",
            "Ajanın çevreden bilgi toplaması, amaç: gelecekte daha başarılı aksiyonlar"
        ],
        correctAnswer: "E",
        explanation: "Exploration (Keşif), ajanın çevresini aktif olarak keşfederek bilgi toplaması sürecidir. Bu bilgiler, ajanın gelecekte daha iyi kararlar vermesine ve daha başarılı eylemler gerçekleştirmesine yardımcı olur.",
        wrongExplanations: [
            { option: "A", reason: "Keşif çevreyi değiştirmek değil, bilgi toplamaktır." },
            { option: "B", reason: "Keşif mevcut bilgileri kullanmak değil, yeni bilgi toplamaktır." },
            { option: "C", reason: "Keşif aktif bir süreçtir, pasif değildir." },
            { option: "D", reason: "Keşif enerji tasarrufuyla ilgili değildir." }
        ]
    },
    {
        question: "'Autonomy' (Özerklik) kavramı neyi ifade eder?",
        options: [
            "Ajanın hiçbir bilgiye ihtiyacı olmaması",
            "Ajanın tamamen rastgele hareket etmesi",
            "Ajanın sadece programcının komutlarını uygulaması",
            "Ajanın kendi kararlarını kendi bilgisine dayanarak vermesi",
            "Ajanın hiçbir sensörü olmaması"
        ],
        correctAnswer: "D",
        explanation: "Özerklik (Autonomy), ajanın kendi bilgisine, algılarına ve deneyimlerine dayanarak bağımsız kararlar verebilmesi anlamına gelir. Ajan, her adımda dışarıdan yönlendirme olmadan kendi kararlarını alabilir.",
        wrongExplanations: [
            { option: "A", reason: "Özerk ajanlar bilgiye ihtiyaç duyar, ancak bu bilgiyi kendi başlarına kullanırlar." },
            { option: "B", reason: "Özerklik rastgele hareket değil, bilinçli karar vermedir." },
            { option: "C", reason: "Tamamen programcının komutlarını uygulaması özerklik değil, bağımlılıktır." },
            { option: "E", reason: "Özerklik için sensörlere ihtiyaç vardır, çünkü çevreyi algılamak gerekir." }
        ]
    },
    {
        question: "Tam otomatik bir taksi ajanında performans ölçütü olarak aşağıdakilerden hangisi kullanılabilir?",
        options: [
            "Sadece güvenlik",
            "Sadece varış süresi",
            "Güvenlik, varış süresi, kâr, konfor",
            "Sadece kâr",
            "Sadece konfor"
        ],
        correctAnswer: "C",
        explanation: "Tam otomatik bir taksi ajanında performans ölçütü çok boyutludur: güvenlik (kazaları önleme), varış süresi (zamanında ulaşım), kâr (ekonomik verimlilik) ve konfor (yolcu memnuniyeti). Tüm bu faktörler birlikte değerlendirilir.",
        wrongExplanations: [
            { option: "A", reason: "Güvenlik tek başına yeterli değildir, diğer faktörler de önemlidir." },
            { option: "B", reason: "Sadece hız değil, güvenlik ve diğer faktörler de önemlidir." },
            { option: "D", reason: "Kâr tek başına yeterli değildir, güvenlik ve konfor gibi faktörler de vardır." },
            { option: "E", reason: "Konfor tek başına yeterli değildir, güvenlik ve verimlilik de önemlidir." }
        ]
    },
    {
        question: "Yapay zekâ sistemleri için 'Satrançta insana karşı kazanabilir' durumu hangi kategoride sınıflandırılır?",
        options: [
            "E: Elde edilmiş (Erişilmiş)",
            "H: Henüz mümkün değil",
            "S: Sınırlı mümkün",
            "İmkansız",
            "Gelecekte mümkün olacak"
        ],
        correctAnswer: "A",
        explanation: "Satrançta yapay zekâ sistemleri (örneğin Deep Blue, 1997'de Garry Kasparov'u yenmiştir) insanları yenme yeteneğine sahiptir. Bu, 'E: Elde edilmiş (Erişilmiş)' kategorisine girer çünkü başarıyla gerçekleştirilmiştir.",
        wrongExplanations: [
            { option: "B", reason: "Satrançta yapay zekâ başarılı olmuştur, henüz mümkün değil değildir." },
            { option: "C", reason: "Sınırlı değil, genel olarak mümkündür." },
            { option: "D", reason: "İmkansız değildir, başarılmıştır." },
            { option: "E", reason: "Gelecekte değil, şu anda mümkündür." }
        ]
    },
    {
        question: "'Üniversite Caddesi'nde güvenli araba sürmek' durumu hangi kategoride sınıflandırılır?",
        options: [
            "E: Elde edilmiş",
            "S: Sınırlı mümkün",
            "Tamamen imkansız",
            "Yakında mümkün olacak",
            "H: Henüz mümkün değil"
        ],
        correctAnswer: "E",
        explanation: "Üniversite Caddesi gibi karmaşık, dinamik ve öngörülemez ortamlarda tamamen güvenli araba sürmek henüz tam olarak başarılmamıştır. Bu tür ortamlar çok sayıda değişken içerir ve tam otonom sürüş sistemleri hala geliştirilme aşamasındadır.",
        wrongExplanations: [
            { option: "A", reason: "Henüz tam olarak başarılmamıştır, çok karmaşık bir problemdir." },
            { option: "B", reason: "Sınırlı mümkün değil, genel olarak henüz mümkün değildir." },
            { option: "C", reason: "İmkansız değildir, ancak henüz tam olarak başarılmamıştır." },
            { option: "D", reason: "Yakında mümkün olabilir ama şu an için henüz mümkün değildir." }
        ]
    },
    {
        question: "Çevresel özelliklerden 'Tam gözlenebilir / Kısmi gözlenebilir' ayrımı neyi ifade eder?",
        options: [
            "Sensörlerin çevreyi ne kadar gözlemleyebildiği",
            "Ajanın hızı",
            "Ajanın boyutu",
            "Ajanın enerji tüketimi",
            "Ajanın programlama dili"
        ],
        correctAnswer: "A",
        explanation: "Tam gözlenebilir çevre, sensörlerin çevrenin tüm durumunu algılayabildiği ortamları ifade eder. Kısmi gözlenebilir çevre ise, ajanın çevre hakkında tam bilgiye sahip olamadığı, bazı bilgilerin eksik kaldığı ortamları ifade eder.",
        wrongExplanations: [
            { option: "B", reason: "Gözlenebilirlik ajanın hızıyla ilgili değildir." },
            { option: "C", reason: "Ajanın boyutu gözlenebilirlikle ilgili değildir." },
            { option: "D", reason: "Enerji tüketimi gözlenebilirlikle ilgili değildir." },
            { option: "E", reason: "Programlama dili gözlenebilirlikle ilgili değildir." }
        ]
    },
    {
        question: "'Deterministik / Stokastik / Stratejik' çevre ayrımında 'Stokastik' ne anlama gelir?",
        options: [
            "Sonuç tamamen bellidir",
            "Diğer ajanlarla rekabet vardır",
            "Sadece bir eylem seçeneği vardır",
            "Belirsizlik vardır, eylemlerin sonuçları kesin değildir",
            "Sonuçlar her zaman aynıdır"
        ],
        correctAnswer: "D",
        explanation: "Stokastik çevre, belirsizlik içeren ortamları ifade eder. Ajanın eylemlerinin sonuçları kesin değildir ve olasılık dağılımları ile ifade edilir. Bu tür çevrelerde ajan, eylemlerin beklenen sonuçlarını dikkate almalıdır.",
        wrongExplanations: [
            { option: "A", reason: "Bu deterministik çevrenin özelliğidir." },
            { option: "B", reason: "Bu stratejik çevrenin özelliğidir (çoklu ajan etkileşimi)." },
            { option: "C", reason: "Stokastiklik eylem seçeneklerinin sayısıyla ilgili değildir." },
            { option: "E", reason: "Stokastik çevrede sonuçlar her zaman aynı değildir, değişkendir." }
        ]
    },
    {
        question: "'Epizodik / Ardışık' çevre ayrımında 'Epizodik' çevre ne anlama gelir?",
        options: [
            "Her adım geleceği etkiler",
            "Sadece bir adım vardır",
            "Adımlar birbirini etkilemez, her bölüm bağımsızdır",
            "Sürekli zaman akışı vardır",
            "Diğer ajanlarla sürekli etkileşim vardır"
        ],
        correctAnswer: "C",
        explanation: "Epizodik çevre, her bölümün (epizotun) bağımsız olduğu ortamları ifade eder. Bir epizottaki eylemler, sonraki epizotları etkilemez. Ardışık çevre ise, her adımın geleceği etkilediği, eylemlerin uzun vadeli sonuçları olduğu ortamlardır.",
        wrongExplanations: [
            { option: "A", reason: "Bu ardışık çevrenin özelliğidir." },
            { option: "B", reason: "Epizodik çevre birden fazla adım içerebilir, ancak adımlar birbirini etkilemez." },
            { option: "D", reason: "Sürekli zaman akışı kesikli/sürekli ayrımıyla ilgilidir." },
            { option: "E", reason: "Ajan etkileşimi tekli/çoklu ajan ayrımıyla ilgilidir." }
        ]
    },
    {
        question: "'Statik / Dinamik / Yarı-dinamik' çevre ayrımında 'Dinamik' çevre ne anlama gelir?",
        options: [
            "Çevre ajanın kararlarından bağımsız olarak değişir",
            "Ajan karar verirken çevre değişmez",
            "Sadece ajan eylem yaptığında çevre değişir",
            "Çevre hiç değişmez",
            "Sadece zaman durduğunda çevre değişir"
        ],
        correctAnswer: "A",
        explanation: "Dinamik çevre, ajanın kararlarından bağımsız olarak kendi başına değişen ortamları ifade eder. Statik çevre ise, ajan karar verirken çevrenin değişmediği ortamlardır. Yarı-dinamik çevre ise, çevrenin değiştiği ama ajanın performans ölçütünün değişmediği ortamlardır.",
        wrongExplanations: [
            { option: "B", reason: "Bu statik çevrenin özelliğidir." },
            { option: "C", reason: "Bu daha çok statik veya yarı-dinamik çevrenin özelliğidir." },
            { option: "D", reason: "Çevre değişmezse tamamen statik olur." },
            { option: "E", reason: "Dinamik çevrede çevre sürekli değişir, zaman durmaz." }
        ]
    },
    {
        question: "'Kesikli / Sürekli' çevre ayrımında 'Sürekli' çevre ne anlama gelir?",
        options: [
            "Zaman ve hareket ayrık adımlar halindedir",
            "Sadece belirli zamanlarda eylem yapılabilir",
            "Sadece belirli konumlarda durulabilir",
            "Sadece bir kez eylem yapılabilir",
            "Hareket akıcıdır, zaman ve durum sürekli değişir"
        ],
        correctAnswer: "E",
        explanation: "Sürekli çevre, zamanın ve durumların sürekli (continuous) değiştiği, hareketlerin akıcı olduğu ortamları ifade eder. Kesikli çevre ise, zaman ve durumların ayrık (discrete) adımlar halinde olduğu ortamlardır.",
        wrongExplanations: [
            { option: "A", reason: "Bu kesikli çevrenin özelliğidir." },
            { option: "B", reason: "Bu kesikli çevrenin özelliğidir." },
            { option: "C", reason: "Bu kesikli çevrenin özelliğidir." },
            { option: "D", reason: "Bu ayrım eylem sayısıyla ilgili değildir." }
        ]
    },
    {
        question: "Strandbeest örneği hangi özelliği ile dikkat çeker?",
        options: [
            "Yapay zekâ algoritmaları kullanır",
            "Sadece elektrikle çalışır",
            "Bilgisayar kontrolü gerektirir",
            "Tam otonom bir mekanik sistem örneğidir",
            "Sadece kapalı alanda çalışır"
        ],
        correctAnswer: "D",
        explanation: "Strandbeest, Theo Jansen tarafından tasarlanmış mekanik bir 'sahil canavarı'dır. Sensör gibi davranan yapıları sayesinde rüzgârla hareket eder ve tam otonom bir mekanik sistem örneğidir. Bilgisayar veya yapay zekâ algoritması gerektirmez.",
        wrongExplanations: [
            { option: "A", reason: "Strandbeest mekanik bir sistemdir, yazılım algoritması kullanmaz." },
            { option: "B", reason: "Rüzgâr enerjisiyle çalışır, elektrik gerekmez." },
            { option: "C", reason: "Bilgisayar kontrolü gerektirmez, tamamen mekanik bir sistemdir." },
            { option: "E", reason: "Açık havada, özellikle sahil kenarında çalışır." }
        ]
    },
    {
        question: "Bir çevre hem 'kısmi gözlenebilir' hem de 'stokastik' ise, ajan için ne anlama gelir?",
        options: [
            "Ajan çevre hakkında tam bilgiye sahiptir ve sonuçlar kesindir",
            "Ajan her şeyi görebilir ve sonuçlar kesindir",
            "Ajan çevre hakkında tam bilgiye sahip değildir ve eylemlerin sonuçları belirsizdir",
            "Sadece bir eylem seçeneği vardır",
            "Çevre hiç değişmez"
        ],
        correctAnswer: "C",
        explanation: "Kısmi gözlenebilir çevre, ajanın çevre hakkında tam bilgiye sahip olmadığı anlamına gelir. Stokastik çevre ise, eylemlerin sonuçlarının belirsiz olduğu, olasılıksal dağılımlarla ifade edildiği anlamına gelir. Her iki özellik de ajanın karar verme sürecini karmaşıklaştırır.",
        wrongExplanations: [
            { option: "A", reason: "Kısmi gözlenebilir çevrede tam bilgi yoktur ve stokastik çevrede sonuçlar kesin değildir." },
            { option: "B", reason: "Kısmi gözlenebilir çevrede her şey görülemez." },
            { option: "D", reason: "Bu özellikler eylem seçeneklerinin sayısıyla ilgili değildir." },
            { option: "E", reason: "Bu özellikler çevrenin değişip değişmediğiyle ilgili değildir." }
        ]
    },
    {
        question: "Rich & Knight (1991)'in yapay zekâ tanımı hangi perspektifi vurgular?",
        options: [
            "Şu anda insanların daha iyi yaptığı şeyleri bilgisayarlara yaptırma çabası",
            "Makinelerin insanlardan daha zeki olması",
            "İnsanların yerine geçmek",
            "Sadece görüntü işleme",
            "Sadece doğal dil işleme"
        ],
        correctAnswer: "A",
        explanation: "Rich & Knight'ın tanımı, yapay zekânın şu anda insanların daha iyi yaptığı görevleri bilgisayarlara yaptırma çabası olduğunu vurgular. Bu, pragmatik ve uygulama odaklı bir yaklaşımdır.",
        wrongExplanations: [
            { option: "B", reason: "Tanım insanlardan üstün olmayı değil, insanların yaptığı işleri yapabilmeyi vurgular." },
            { option: "C", reason: "Tanım insanların yerine geçmeyi değil, onların yaptığı işleri yapabilmeyi hedefler." },
            { option: "D", reason: "Tanım sadece görüntü işlemeyle sınırlı değildir, genel bir çaba ifade eder." },
            { option: "E", reason: "Tanım sadece doğal dil işlemeyle sınırlı değildir." }
        ]
    },
    {
        question: "Luger & Stubblefield (1993)'in yapay zekâ tanımı hangi bilim dalını vurgular?",
        options: [
            "Sadece matematik",
            "Sadece psikoloji",
            "Sadece felsefe",
            "Sadece mühendislik",
            "Akıllı davranışın otomasyonu ile ilgili bilgisayar bilimi"
        ],
        correctAnswer: "E",
        explanation: "Luger & Stubblefield'ın tanımı, yapay zekâyı akıllı davranışın otomasyonu ile ilgili bilgisayar bilimi olarak tanımlar. Bu, yapay zekâyı bilgisayar biliminin bir alt dalı olarak konumlandırır.",
        wrongExplanations: [
            { option: "A", reason: "Tanım matematikten ziyade bilgisayar bilimini vurgular." },
            { option: "B", reason: "Psikoloji yapay zekâyı etkilese de, tanım bilgisayar bilimini vurgular." },
            { option: "C", reason: "Felsefe yapay zekâyı etkilese de, tanım bilgisayar bilimini vurgular." },
            { option: "D", reason: "Mühendislik bir uygulama alanıdır, tanım bilgisayar bilimini vurgular." }
        ]
    },
    {
        question: "Schalkoff (1990)'un yapay zekâ tanımı hangi yaklaşımı benimser?",
        options: [
            "Sadece donanım geliştirme",
            "Sadece yazılım geliştirme",
            "Sadece veri analizi",
            "Sadece ağ güvenliği",
            "Akıllı davranışları hesaplamalı işlemler açısından açıklayıp taklit etmeye çalışan alan"
        ],
        correctAnswer: "E",
        explanation: "Schalkoff'un tanımı, yapay zekâyı akıllı davranışları hesaplamalı işlemler açısından açıklayıp taklit etmeye çalışan bir alan olarak tanımlar. Bu, hesaplamalı bir perspektifi vurgular.",
        wrongExplanations: [
            { option: "A", reason: "Tanım sadece donanımla sınırlı değildir, hesaplamalı süreçlere odaklanır." },
            { option: "B", reason: "Tanım sadece yazılımla sınırlı değildir, davranışların açıklanmasını ve taklit edilmesini içerir." },
            { option: "C", reason: "Veri analizi yapay zekânın bir aracıdır ama tanım daha geniştir." },
            { option: "D", reason: "Ağ güvenliği tanımın kapsamı dışındadır." }
        ]
    },
    {
        question: "Bir ajanın 'percept sequence' (algı dizisi) kavramı neyi ifade eder?",
        options: [
            "Sadece anlık algı",
            "Ajanın geçmişten bugüne topladığı tüm algılar",
            "Sadece gelecekteki algılar",
            "Sadece ilk algı",
            "Sadece son algı"
        ],
        correctAnswer: "B",
        explanation: "Percept sequence (algı dizisi), ajanın başlangıçtan itibaren aldığı tüm algıların sıralı dizisidir. Bu, ajanın geçmiş deneyimlerini ve çevre hakkındaki bilgisini temsil eder. Basit refleks ajanlar sadece anlık algıya bakarken, daha gelişmiş ajanlar tüm algı dizisini kullanır.",
        wrongExplanations: [
            { option: "A", reason: "Percept sequence sadece anlık algıyı değil, tüm geçmiş algıları içerir." },
            { option: "C", reason: "Gelecekteki algılar henüz alınmamıştır, sequence geçmiş algıları içerir." },
            { option: "D", reason: "Sadece ilk algı yeterli değildir, tüm sequence önemlidir." },
            { option: "E", reason: "Sadece son algı yeterli değildir, tüm geçmiş algılar önemlidir." }
        ]
    },
    {
        question: "Vacuum World örneğinde 'no-op' eylemi ne anlama gelir?",
        options: [
            "Sola git",
            "Sağa git",
            "Süpür (em)",
            "Hiçbir şey yapma",
            "Dur ve bekle"
        ],
        correctAnswer: "D",
        explanation: "Vacuum World'de 'no-op' (no operation) eylemi, ajanın hiçbir şey yapmaması, eylemde bulunmaması anlamına gelir. Bu, ajanın aktif bir eylem yapmak yerine mevcut durumu koruması durumunda kullanılır.",
        wrongExplanations: [
            { option: "A", reason: "Sola git farklı bir eylemdir." },
            { option: "B", reason: "Sağa git farklı bir eylemdir." },
            { option: "C", reason: "Süpür (em) aktif bir eylemdir." },
            { option: "E", reason: "Dur ve bekle no-op ile benzer ama no-op daha genel bir kavramdır." }
        ]
    },
    {
        question: "Charniak & McDermott (1985)'in yapay zekâ tanımı neyi vurgular?",
        options: [
            "Sadece makineler",
            "İnsan gibi düşünebilen sistemler",
            "Sadece robotlar",
            "Sadece yazılım",
            "Sadece algoritmalar"
        ],
        correctAnswer: "B",
        explanation: "Charniak & McDermott'un tanımı, yapay zekâyı 'insan gibi düşünebilen sistemler' olarak tanımlar. Bu tanım, 'Thinking Humanly' yaklaşımına yakındır ve insan düşüncesini modellemeye odaklanır.",
        wrongExplanations: [
            { option: "A", reason: "Tanım sadece makineleri değil, düşünebilen sistemleri vurgular." },
            { option: "C", reason: "Robotlar bir örnektir ama tanım daha geniştir." },
            { option: "D", reason: "Yazılım bir araçtır ama tanım düşünebilen sistemleri vurgular." },
            { option: "E", reason: "Algoritmalar bir araçtır ama tanım sistemlerin düşünebilme yeteneğini vurgular." }
        ]
    },
    {
        question: "Kurzweil (1990)'in yapay zekâ tanımı hangi perspektifi benimser?",
        options: [
            "Bilimsel analiz",
            "Sadece teorik çalışma",
            "Sadece araştırma",
            "Normalde insan zekâsı gerektiren işleri yapabilen makineler geliştirme sanatı",
            "Sadece eğitim"
        ],
        correctAnswer: "D",
        explanation: "Kurzweil'in tanımı, yapay zekâyı 'normalde insan zekâsı gerektiren işleri yapabilen makineler geliştirme sanatı' olarak tanımlar. Bu tanım, yapay zekâyı bir 'sanat' olarak gören, pratik ve yaratıcı bir perspektifi vurgular.",
        wrongExplanations: [
            { option: "A", reason: "Tanım sanatı vurgular, sadece bilimsel analizi değil." },
            { option: "B", reason: "Tanım teorik değil, pratik uygulamayı (geliştirme sanatı) vurgular." },
            { option: "C", reason: "Araştırma bir süreçtir ama tanım geliştirme sanatını vurgular." },
            { option: "E", reason: "Eğitim bir uygulama alanıdır ama tanım genel geliştirme sanatını vurgular." }
        ]
    }
];

