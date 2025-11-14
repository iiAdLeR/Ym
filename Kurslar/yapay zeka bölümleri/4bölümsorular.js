// Yapay Zekâ Dersi - Bölüm 4 Sınav Soruları
// CHAPTER 4: Derinlik Sınırlı Arama, İteratif Derinleşme, İki Yönlü Arama, Bilgili Arama (Greedy, A*)

const questions = [
    {
        question: "Depth-Limited Search (DLS) algoritmasında, eğer derinlik sınırı l gerekli derinlik d'den küçükse (l < d), sonuç nasıl olur?",
        options: [
            "Optimal çözüm bulunur",
            "Sonuçlar eksik olur",
            "Algoritma sonsuz döngüye girer",
            "Her zaman tamamlanır",
            "Bellek taşması olur"
        ],
        correctAnswer: "B",
        explanation: "Depth-Limited Search'te eğer derinlik sınırı l, çözümün bulunduğu derinlik d'den küçükse (l < d), algoritma çözüme ulaşamaz çünkü çözüm derinlik sınırının ötesinde kalır. Bu durumda sonuçlar eksik olur.",
        wrongExplanations: [
            { option: "A", reason: "Optimal çözüm bulunmaz, çünkü DLS l < d olduğunda çözüme ulaşamaz." },
            { option: "C", reason: "DLS derinlik sınırı sayesinde sonsuz döngüye girmez, ancak çözüm bulamayabilir." },
            { option: "D", reason: "Algoritma tamamlanır ama çözümsüz olarak tamamlanır (eksik sonuç)." },
            { option: "E", reason: "DLS derinlik sınırı sayesinde bellek kullanımı sınırlıdır (O(bl)), taşma olmaz." }
        ]
    },
    {
        question: "Depth-Limited Search (DLS) algoritmasının zaman karmaşıklığı nedir?",
        options: [
            "O(b^l)",
            "O(b^d)",
            "O(bm)",
            "O(bd)",
            "O(b^(d+1))"
        ],
        correctAnswer: "A",
        explanation: "DLS'nin zaman karmaşıklığı O(b^l)'dir, burada b dallanma faktörü ve l derinlik sınırıdır. Algoritma en fazla l derinliğe kadar arama yapar.",
        wrongExplanations: [
            { option: "B", reason: "O(b^d) BFS'nin zaman karmaşıklığıdır, DLS'nin değil." },
            { option: "C", reason: "O(bm) DFS'nin alan karmaşıklığıdır, zaman karmaşıklığı değil." },
            { option: "D", reason: "O(bd) IDS'nin alan karmaşıklığıdır, zaman karmaşıklığı değil." },
            { option: "E", reason: "O(b^(d+1)) BFS'nin alan karmaşıklığıdır, DLS ile ilgili değildir." }
        ]
    },
    {
        question: "Iterative Deepening Search (IDS) algoritması hangi iki algoritmanın avantajlarını birleştirir?",
        options: [
            "BFS ve DFS",
            "BFS ve UCS",
            "DFS ve DLS",
            "UCS ve Greedy",
            "A* ve BFS"
        ],
        correctAnswer: "A",
        explanation: "IDS, BFS gibi optimal (adım maliyetleri eşitse) ve tam, ancak DFS gibi az bellek kullanır (O(bd)). Bu yüzden her iki algoritmanın avantajlarını birleştirir.",
        wrongExplanations: [
            { option: "B", reason: "IDS, UCS ile değil DFS ile BFS'i birleştirir." },
            { option: "C", reason: "IDS DLS'i kullanır ama DFS'in avantajlarını birleştirir, sadece DLS değil." },
            { option: "D", reason: "IDS bilinçsiz arama algoritmasıdır, Greedy ile ilgisi yoktur." },
            { option: "E", reason: "IDS bilinçsiz arama algoritmasıdır, A* bilgili arama algoritmasıdır." }
        ]
    },
    {
        question: "IDS algoritmasında, çözüm derinliği d=5 ise ve dallanma faktörü b=10 ise, toplam kaç düğüm üretilir? (Yaklaşık olarak)",
        options: [
            "123,450",
            "50",
            "1,111,100",
            "500,000",
            "100"
        ],
        correctAnswer: "A",
        explanation: "IDS'de derinlik 0'daki düğümler 6 kez, seviye 1'dekiler 5 kez, seviye 2'dekiler 4 kez, seviye 3'dekiler 3 kez, seviye 4'dekiler 2 kez, seviye 5'dekiler 1 kez üretilir. b=10, d=5 için: N(IDS) = 6⋅10⁰ + 5⋅10¹ + 4⋅10² + 3⋅10³ + 2⋅10⁴ + 1⋅10⁵ = 6 + 50 + 400 + 3,000 + 20,000 + 100,000 = 123,456 ≈ 123,450.",
        wrongExplanations: [
            { option: "B", reason: "50 çok küçük bir sayıdır, IDS daha fazla düğüm üretir." },
            { option: "C", reason: "1,111,100 yanlıştır. BFS için b=10, d=5 ise: 1+10+100+1,000+10,000+100,000 = 111,111'dir. IDS ise yaklaşık 123,450 düğüm üretir." },
            { option: "D", reason: "500,000 sadece son seviyenin düğüm sayısıdır, tüm seviyeler değil." },
            { option: "E", reason: "100 çok küçük, IDS her iterasyonda daha fazla düğüm üretir." }
        ]
    },
    {
        question: "Iterative Deepening Search (IDS) algoritmasının alan karmaşıklığı nedir?",
        options: [
            "O(bd)",
            "O(b^d)",
            "O(b^l)",
            "O(bm)",
            "O(b^(d+1))"
        ],
        correctAnswer: "A",
        explanation: "IDS'nin alan karmaşıklığı O(bd)'dir, burada b dallanma faktörü ve d çözüm derinliğidir. Bu, DFS'e benzer şekilde az bellek kullanımı sağlar.",
        wrongExplanations: [
            { option: "B", reason: "O(b^d) BFS'in alan karmaşıklığıdır, IDS çok daha az bellek kullanır." },
            { option: "C", reason: "O(b^l) DLS'nin zaman karmaşıklığıdır, alan karmaşıklığı değil." },
            { option: "D", reason: "O(bm) DFS'in alan karmaşıklığıdır, IDS için doğru formül O(bd)'dir." },
            { option: "E", reason: "O(b^(d+1)) BFS'in alan karmaşıklığıdır, IDS çok daha düşüktür." }
        ]
    },
    {
        question: "Bidirectional Search algoritmasının zaman karmaşıklığı nedir?",
        options: [
            "O(b^(d/2))",
            "O(b^d)",
            "O(bd)",
            "O(bm)",
            "O(b^l)"
        ],
        correctAnswer: "A",
        explanation: "Bidirectional Search her iki yönden de aramaya başladığı için, arama derinliği yarıya iner. Bu yüzden zaman karmaşıklığı O(b^(d/2)) olur, bu da tek yönlü aramadan çok daha verimlidir.",
        wrongExplanations: [
            { option: "B", reason: "O(b^d) tek yönlü arama algoritmalarının (BFS gibi) zaman karmaşıklığıdır." },
            { option: "C", reason: "O(bd) IDS'nin alan karmaşıklığıdır, zaman karmaşıklığı değil." },
            { option: "D", reason: "O(bm) DFS'in alan karmaşıklığıdır, zaman karmaşıklığı değil." },
            { option: "E", reason: "O(b^l) DLS'nin zaman karmaşıklığıdır, bidirectional search ile ilgili değildir." }
        ]
    },
    {
        question: "Bidirectional Search algoritması için gerekli koşul nedir?",
        options: [
            "Sadece deterministik çevreler",
            "Her düğümün öncülü verimli bir şekilde hesaplanabilir olmalı",
            "Sadece epizodik çevreler",
            "Sadece statik çevreler",
            "Sadece tam gözlenebilir çevreler"
        ],
        correctAnswer: "B",
        explanation: "Bidirectional Search için eylemlerin kolayca tersine çevrilebilmesi ve her düğümün öncülünün (predecessor) verimli bir şekilde hesaplanabilmesi gerekir. Bu sayede hedef durumdan geriye doğru arama yapılabilir.",
        wrongExplanations: [
            { option: "A", reason: "Deterministik çevre koşulu bidirectional search için yeterli değildir, öncül hesaplama gerekir." },
            { option: "C", reason: "Epizodik çevre koşulu bidirectional search için gerekli değildir." },
            { option: "D", reason: "Statik çevre koşulu bidirectional search için gerekli değildir." },
            { option: "E", reason: "Tam gözlenebilir çevre koşulu bidirectional search için gerekli değildir, öncül hesaplama önemlidir." }
        ]
    },
    {
        question: "8-Puzzle probleminde hangi eylemler tersine çevrilebilir?",
        options: [
            "Hiçbiri",
            "Sadece yukarı hareketi",
            "Sadece sağ hareketi",
            "Sadece sol hareketi",
            "Yukarı hareketinin tersi aşağı, sol hareketinin tersi sağ"
        ],
        correctAnswer: "E",
        explanation: "8-Puzzle'da eylemler tersine çevrilebilir: yukarı hareketinin tersi aşağıdır, aşağı hareketinin tersi yukarıdır, sol hareketinin tersi sağdır, sağ hareketinin tersi soldur. Bu yüzden 8-Puzzle bidirectional search için uygundur.",
        wrongExplanations: [
            { option: "A", reason: "Hiçbiri değil, 8-Puzzle'da tüm eylemler tersine çevrilebilir." },
            { option: "B", reason: "Sadece yukarı değil, tüm eylemler (yukarı, aşağı, sol, sağ) tersine çevrilebilir." },
            { option: "C", reason: "Sadece sağ değil, tüm eylemler tersine çevrilebilir." },
            { option: "D", reason: "Sadece sol değil, tüm eylemler tersine çevrilebilir." }
        ]
    },
    {
        question: "Tree Search ve Graph Search arasındaki temel fark nedir?",
        options: [
            "Graph Search kapalı liste (closed list) kullanır, Tree Search kullanmaz",
            "Tree Search daha hızlıdır",
            "Tree Search sadece bilinçsiz aramada kullanılır",
            "Graph Search sadece bilgili aramada kullanılır",
            "Hiçbir fark yoktur"
        ],
        correctAnswer: "A",
        explanation: "Graph Search, ziyaret edilen durumları kapalı listede (closed list) saklar ve tekrar ziyaret etmeyi önler. Tree Search ise kapalı liste kullanmaz, bu yüzden döngüler oluşabilir ve aynı durumlar tekrar ziyaret edilebilir.",
        wrongExplanations: [
            { option: "B", reason: "Tree Search daha hızlı değildir, Graph Search tekrar kontrolü yapar ama daha verimli olabilir." },
            { option: "C", reason: "Tree Search hem bilinçsiz hem bilgili aramada kullanılabilir." },
            { option: "D", reason: "Graph Search hem bilinçsiz hem bilgili aramada kullanılabilir." },
            { option: "E", reason: "Aralarında önemli farklar vardır, özellikle kapalı liste kullanımı." }
        ]
    },
    {
        question: "Graph Search algoritmasında kapalı liste (closed list) ne işe yarar?",
        options: [
            "Tüm genişletilmiş düğümleri saklar ve tekrar genişletilmelerini önler",
            "Sadece genişletilmiş düğümleri saklar",
            "Sadece ziyaret edilen düğümleri saklar",
            "Sadece hedef düğümleri saklar",
            "Sadece başlangıç düğümünü saklar"
        ],
        correctAnswer: "A",
        explanation: "Kapalı liste (closed list), tüm genişletilmiş düğümlerin durumlarını saklar. Bu sayede aynı durumun tekrar genişletilmesi önlenir ve döngüler engellenir.",
        wrongExplanations: [
            { option: "B", reason: "Kapalı liste sadece genişletilmiş değil, genişletilmiş düğümlerin durumlarını saklar ve tekrar genişletilmelerini önler." },
            { option: "C", reason: "Kapalı liste sadece ziyaret edilen değil, genişletilmiş düğümleri saklar." },
            { option: "D", reason: "Kapalı liste hedef düğümleri değil, genişletilmiş tüm düğümleri saklar." },
            { option: "E", reason: "Kapalı liste sadece başlangıç düğümünü değil, genişletilmiş tüm düğümleri saklar." }
        ]
    },
    {
        question: "Best-First Search algoritmasında değerlendirme fonksiyonu f(n) ne anlama gelir?",
        options: [
            "Uygunluğun tahmini",
            "Sadece gerçek maliyet",
            "Sadece sezgisel maliyet",
            "Sadece yol maliyeti",
            "Sadece hedefe uzaklık"
        ],
        correctAnswer: "A",
        explanation: "Best-First Search'te değerlendirme fonksiyonu f(n), bir düğümün uygunluğunun (suitability) tahminidir. Genellikle tahmini maliyet veya mesafedir ve hangi düğümün genişletileceğini belirler.",
        wrongExplanations: [
            { option: "B", reason: "f(n) sadece gerçek maliyet değil, uygunluk tahminidir." },
            { option: "C", reason: "f(n) sadece sezgisel maliyet değil, genel bir uygunluk tahminidir." },
            { option: "D", reason: "f(n) yol maliyeti içerebilir ama sadece yol maliyeti değildir, uygunluk tahminidir." },
            { option: "E", reason: "f(n) hedefe uzaklık içerebilir ama sadece uzaklık değil, genel uygunluk tahminidir." }
        ]
    },
    {
        question: "Greedy Best-First Search algoritmasında değerlendirme fonksiyonu f(n) nasıl hesaplanır?",
        options: [
            "f(n) = h(n)",
            "f(n) = g(n) + h(n)",
            "f(n) = g(n)",
            "f(n) = g(n) - h(n)",
            "f(n) = g(n) * h(n)"
        ],
        correctAnswer: "A",
        explanation: "Greedy Best-First Search'te f(n) = h(n)'dir. Sadece sezgisel fonksiyona (heuristic) bakar, başlangıçtan düğüme kadar olan gerçek maliyeti (g(n)) dikkate almaz.",
        wrongExplanations: [
            { option: "B", reason: "f(n) = g(n) + h(n) A* arama algoritmasının formülüdür, Greedy Best-First değil." },
            { option: "C", reason: "f(n) = g(n) Uniform Cost Search'in formülüdür, Greedy Best-First değil." },
            { option: "D", reason: "f(n) = g(n) - h(n) Greedy Best-First'te kullanılmaz, f(n) = h(n)'dir." },
            { option: "E", reason: "f(n) = g(n) * h(n) hiçbir standart arama algoritmasında kullanılmaz." }
        ]
    },
    {
        question: "A* arama algoritmasında f(n) = g(n) + h(n) formülünde h(n) ne anlama gelir?",
        options: [
            "Düğümden hedefe gitmenin tahmini maliyeti",
            "Başlangıçtan düğüme ulaşmanın gerçek maliyeti",
            "Düğümden hedefe gitmenin gerçek maliyeti",
            "Başlangıçtan hedefe gitmenin toplam maliyeti",
            "Düğümün toplam maliyeti"
        ],
        correctAnswer: "A",
        explanation: "A*'da h(n), düğüm n'den hedef düğüme gitmenin tahmini maliyetidir (sezgisel fonksiyon). Eğer n hedefse, h(n) = 0'dır.",
        wrongExplanations: [
            { option: "B", reason: "Başlangıçtan düğüme ulaşmanın gerçek maliyeti g(n)'dir, h(n) değil." },
            { option: "C", reason: "h(n) gerçek maliyet değil, tahmini (heuristic) maliyettir." },
            { option: "D", reason: "Başlangıçtan hedefe gitmenin toplam maliyeti f(n) = g(n) + h(n)'dir, sadece h(n) değil." },
            { option: "E", reason: "Düğümün toplam maliyeti f(n) = g(n) + h(n)'dir, h(n) sadece hedefe tahmini maliyettir." }
        ]
    },
    {
        question: "A* arama algoritmasında f(n) = g(n) + h(n) formülünde g(n) ne anlama gelir?",
        options: [
            "Düğümden hedefe gitmenin tahmini maliyeti",
            "Başlangıçtan düğüme ulaşmanın gerçek maliyeti (şu ana kadar)",
            "Düğümden hedefe gitmenin gerçek maliyeti",
            "Başlangıçtan hedefe gitmenin toplam maliyeti",
            "Düğümün sezgisel değeri"
        ],
        correctAnswer: "B",
        explanation: "A*'da g(n), başlangıç durumundan düğüm n'ye ulaşmanın gerçek maliyetidir (şu ana kadar kat edilen yolun maliyeti).",
        wrongExplanations: [
            { option: "A", reason: "Düğümden hedefe gitmenin tahmini maliyeti h(n)'dir, g(n) değil." },
            { option: "C", reason: "Düğümden hedefe gitmenin gerçek maliyeti h*(n)'dir, g(n) değil." },
            { option: "D", reason: "Başlangıçtan hedefe gitmenin toplam maliyeti f(n) = g(n) + h(n)'dir, sadece g(n) değil." },
            { option: "E", reason: "Düğümün sezgisel değeri h(n)'dir, g(n) gerçek maliyettir." }
        ]
    },
    {
        question: "Romanya haritası örneğinde, Arad'dan Bucharest'e giderken Arad'dan Sibiu'ya giden yolun maliyeti 140 ve Sibiu'nun Bucharest'e tahmini mesafesi 253 ise, Sibiu için f(n) değeri nedir?",
        options: [
            "140",
            "253",
            "113",
            "1400",
            "393"
        ],
        correctAnswer: "E",
        explanation: "A*'da f(n) = g(n) + h(n) formülü kullanılır. Arad'dan Sibiu'ya g(n) = 140, Sibiu'dan Bucharest'e h(n) = 253. Dolayısıyla f(Sibiu) = 140 + 253 = 393.",
        wrongExplanations: [
            { option: "A", reason: "140 sadece g(n) değeridir, f(n) = g(n) + h(n) = 140 + 253 = 393 olmalıdır." },
            { option: "B", reason: "253 sadece h(n) değeridir, f(n) = g(n) + h(n) = 140 + 253 = 393 olmalıdır." },
            { option: "C", reason: "113 yanlış bir hesaplamadır, f(n) = g(n) + h(n) = 140 + 253 = 393 olmalıdır." },
            { option: "D", reason: "1400 çok büyük bir değerdir, doğru hesaplama f(n) = 140 + 253 = 393'tür." }
        ]
    },
    {
        question: "Bir sezgisel fonksiyon h(n), her düğüm n için h(n) ≤ h*(n) koşulunu sağlıyorsa ne olarak tanımlanır?",
        options: [
            "Kabul edilebilir (admissible)",
            "Tutarlı (consistent)",
            "Optimal",
            "Etkili",
            "Hızlı"
        ],
        correctAnswer: "A",
        explanation: "Kabul edilebilir (admissible) sezgisel, her düğüm n için h(n) ≤ h*(n) koşulunu sağlar, burada h*(n) düğüm n'den hedef duruma ulaşmanın gerçek maliyetidir. Yani hedefe ulaşmanın maliyetini asla abartmaz (iyimserdir).",
        wrongExplanations: [
            { option: "B", reason: "Tutarlı (consistent) sezgisel farklı bir özelliktir: h(n) ≤ c(n,a,n') + h(n') koşulunu sağlar." },
            { option: "C", reason: "Optimal, algoritmanın bir özelliğidir, sezgisel fonksiyonun bir özelliği değildir." },
            { option: "D", reason: "Etkili genel bir terimdir, kabul edilebilirlik spesifik bir matematiksel koşuldur." },
            { option: "E", reason: "Hızlı performans özelliğidir, kabul edilebilirlik matematiksel bir koşuldur." }
        ]
    },
    {
        question: "8-Puzzle probleminde 'yanlış yerleştirilmiş kare sayısı' heuristiği h₁(n) = 6 ise, bu durumda kaç kare yanlış konumdadır?",
        options: [
            "5",
            "6",
            "7",
            "8",
            "0"
        ],
        correctAnswer: "B",
        explanation: "Yanlış yerleştirilmiş kare sayısı heuristiği h₁(n), mevcut durumdaki taşların hedef durumdaki konumları ile eşleşmeyen sayısını sayar. h₁(n) = 6 ise, 6 kare yanlış konumdadır.",
        wrongExplanations: [
            { option: "A", reason: "5 değil, h₁(n) = 6 ise 6 kare yanlış konumdadır." },
            { option: "C", reason: "7 değil, h₁(n) = 6 ise 6 kare yanlış konumdadır." },
            { option: "D", reason: "8-Puzzle'da toplam 8 kare vardır, hepsi yanlış konumda olamaz çünkü h₁(n) = 6'dır." },
            { option: "E", reason: "0 değil, h₁(n) = 6 ise 6 kare yanlış konumdadır (0 sadece hedef durumda olur)." }
        ]
    },
    {
        question: "8-Puzzle probleminde Manhattan mesafesi heuristiği h₂(n) nasıl hesaplanır?",
        options: [
            "Yanlış yerleştirilmiş kare sayısı",
            "Her karenin mevcut konumundan hedef konumuna ulaşmak için gereken en kısa yolun toplam uzunluğu",
            "Sadece dikey mesafelerin toplamı",
            "Sadece yatay mesafelerin toplamı",
            "Karenin toplam hareket sayısı"
        ],
        correctAnswer: "B",
        explanation: "Manhattan mesafesi heuristiği h₂(n), her karenin mevcut konumundan hedef konumuna ulaşmak için gereken en kısa yolun toplam uzunluğunu ölçer. Her kare için, yatay ve dikey olarak hedef konumuna olan mesafe hesaplanır ve bu mesafelerin toplamı Manhattan mesafesi olarak tanımlanır.",
        wrongExplanations: [
            { option: "A", reason: "Yanlış yerleştirilmiş kare sayısı h₁(n) heuristiğidir, Manhattan mesafesi değildir." },
            { option: "C", reason: "Manhattan mesafesi sadece dikey değil, hem yatay hem dikey mesafelerin toplamıdır." },
            { option: "D", reason: "Manhattan mesafesi sadece yatay değil, hem yatay hem dikey mesafelerin toplamıdır." },
            { option: "E", reason: "Manhattan mesafesi hareket sayısı değil, mesafe ölçüsüdür." }
        ]
    },
    {
        question: "A* algoritması hangi durumda optimal çözüm garantisi verir?",
        options: [
            "Her zaman",
            "Sadece h(n) kabul edilebilir (admissible) ise ve tree-search kullanılıyorsa",
            "Sadece h(n) tutarlı (consistent) ise",
            "Sadece g(n) = 0 ise",
            "Hiçbir zaman"
        ],
        correctAnswer: "B",
        explanation: "Teorem: Eğer h(n) kabul edilebilir (admissible) bir sezgisel ise, A* algoritması ağaç araması (tree-search) kullanarak optimaldir. Graph-search için tutarlılık (consistency) gerekir.",
        wrongExplanations: [
            { option: "A", reason: "A* her zaman optimal değildir, kabul edilebilir sezgisel gerekir." },
            { option: "C", reason: "Tutarlılık graph-search için yeterlidir, tree-search için kabul edilebilirlik yeterlidir." },
            { option: "D", reason: "g(n) = 0 durumu Greedy Best-First Search'tir, A* değildir." },
            { option: "E", reason: "A* kabul edilebilir sezgisel ile optimal çözüm garantisi verir." }
        ]
    },
    {
        question: "Bir sezgisel fonksiyon h(n) tutarlı (consistent) ise, her düğüm n ve her halef n' için hangi koşulu sağlamalıdır?",
        options: [
            "h(n) ≥ c(n,a,n') + h(n')",
            "h(n) ≤ c(n,a,n') + h(n')",
            "h(n) = c(n,a,n') + h(n')",
            "h(n) > c(n,a,n')",
            "h(n) < h(n')"
        ],
        correctAnswer: "B",
        explanation: "Tutarlı (consistent) sezgisel, her düğüm n ve her halef n' için h(n) ≤ c(n,a,n') + h(n') koşulunu sağlar. Burada c(n,a,n') düğüm n ile n' arasındaki gerçek maliyettir. Bu, üçgen eşitsizliğidir.",
        wrongExplanations: [
            { option: "A", reason: "≥ işareti yanlıştır, tutarlılık için ≤ olmalıdır." },
            { option: "C", reason: "Eşitlik zorunlu değildir, ≤ yeterlidir." },
            { option: "D", reason: "Sadece c(n,a,n') ile karşılaştırma yeterli değildir, h(n') de dahil edilmelidir." },
            { option: "E", reason: "h(n) < h(n') koşulu tutarlılık için yeterli değildir, c(n,a,n') dahil edilmelidir." }
        ]
    },
    {
        question: "Tutarlı (consistent) ve kabul edilebilir (admissible) sezgiseller arasındaki ilişki nedir?",
        options: [
            "Her kabul edilebilir sezgisel tutarlıdır",
            "Her tutarlı sezgisel kabul edilebilirdir, ama her kabul edilebilir sezgisel tutarlı değildir",
            "İkisi arasında ilişki yoktur",
            "Aynı şeydirler",
            "Tutarlı sezgiseller kabul edilebilir değildir"
        ],
        correctAnswer: "B",
        explanation: "Her tutarlı (consistent) sezgisel kabul edilebilir (admissible)'dır, çünkü tutarlılık kabul edilebilirliği içerir. Ancak tersi doğru değildir: her kabul edilebilir sezgisel tutarlı olmayabilir.",
        wrongExplanations: [
            { option: "A", reason: "Her kabul edilebilir sezgisel tutarlı değildir, tutarlılık daha güçlü bir koşuldur." },
            { option: "C", reason: "İkisi arasında güçlü bir ilişki vardır: tutarlılık kabul edilebilirliği içerir." },
            { option: "D", reason: "Tutarlı sezgiseller kabul edilebilirdir, değildir demek yanlıştır." },
            { option: "E", reason: "Aynı şey değildirler: tutarlılık daha güçlü bir koşuldur." }
        ]
    },
    {
        question: "Greedy Best-First Search algoritmasının tamlık (completeness) özelliği nedir?",
        options: [
            "EVET (tam)",
            "Sadece sonsuz döngü yoksa",
            "Sadece kabul edilebilir sezgisel kullanılıyorsa",
            "Sadece tutarlı sezgisel kullanılıyorsa",
            "HAYIR (tam değil)"
        ],
        correctAnswer: "E",
        explanation: "Greedy Best-First Search tam (complete) değildir. Derinlik-öncelikli aramaya (DFS) benzer şekilde, sonsuz döngüye girebilir veya çözümü bulamayabilir.",
        wrongExplanations: [
            { option: "A", reason: "Greedy Best-First Search tam değildir, DFS gibi sonsuz döngüye girebilir." },
            { option: "B", reason: "Sonsuz döngü olmasa bile tam değildir, çünkü suboptimal yollara sapabilir." },
            { option: "C", reason: "Kabul edilebilir sezgisel kullansan bile Greedy optimal değildir, çünkü sadece h(n)'e bakar, g(n)'i dikkate almaz. Tamlık da vermez." },
            { option: "D", reason: "Tutarlı sezgisel kullansan bile Greedy optimal değildir, çünkü sadece h(n)'e bakar, g(n)'i dikkate almaz. Tamlık da vermez." }
        ]
    },
    {
        question: "Greedy Best-First Search algoritmasının zaman karmaşıklığı nedir?",
        options: [
            "O(b^m)",
            "O(b^d)",
            "O(bd)",
            "O(b^(d/2))",
            "O(b^l)"
        ],
        correctAnswer: "A",
        explanation: "Greedy Best-First Search'in zaman karmaşıklığı O(b^m)'dir, burada b dallanma faktörü ve m arama uzayındaki maksimum derinliktir. Bu, DFS'in en kötü durum karmaşıklığı ile karşılaştırılabilir.",
        wrongExplanations: [
            { option: "B", reason: "O(b^d) BFS'in zaman karmaşıklığıdır, Greedy Best-First'in değil." },
            { option: "C", reason: "O(bd) IDS'nin alan karmaşıklığıdır, zaman karmaşıklığı değil." },
            { option: "D", reason: "O(b^(d/2)) Bidirectional Search'in zaman karmaşıklığıdır." },
            { option: "E", reason: "O(b^l) DLS'nin zaman karmaşıklığıdır, Greedy Best-First'in değil." }
        ]
    },
    {
        question: "Greedy Best-First Search algoritmasının optimalite (optimality) özelliği nedir?",
        options: [
            "HAYIR (optimal değil)",
            "EVET (optimal)",
            "Sadece kabul edilebilir sezgisel kullanılıyorsa",
            "Sadece tutarlı sezgisel kullanılıyorsa",
            "Sadece h(n) = 0 ise"
        ],
        correctAnswer: "A",
        explanation: "Greedy Best-First Search optimal değildir. Derinlik-öncelikli aramaya (DFS) benzer şekilde, ilk bulduğu çözüm optimal olmayabilir çünkü sadece heuristiğe (h(n)) bakar, gerçek maliyete (g(n)) bakmaz.",
        wrongExplanations: [
            { option: "B", reason: "Greedy Best-First Search optimal değildir, A* optimaldir." },
            { option: "C", reason: "Kabul edilebilir sezgisel kullanılsa bile optimal değil, çünkü g(n)'i dikkate almaz." },
            { option: "D", reason: "Tutarlı sezgisel kullanılsa bile optimal değil, çünkü g(n)'i dikkate almaz." },
            { option: "E", reason: "h(n) = 0 durumunda bile optimal değil, çünkü gerçek maliyeti dikkate almaz." }
        ]
    },
    {
        question: "A* arama algoritmasında, eğer h(n) kabul edilebilir (admissible) ise ve tree-search kullanılıyorsa, algoritma hangi özelliği garanti eder?",
        options: [
            "Sadece tamlık (completeness)",
            "Sadece optimalite (optimality)",
            "Hem tamlık hem optimalite",
            "Sadece hız",
            "Hiçbir şey garanti etmez"
        ],
        correctAnswer: "C",
        explanation: "Teorem: Eğer h(n) kabul edilebilir (admissible) bir sezgisel ise, A* algoritması ağaç araması (tree-search) kullanarak hem tam (complete) hem optimaldir.",
        wrongExplanations: [
            { option: "A", reason: "A* sadece tamlık değil, optimalite de garanti eder." },
            { option: "C", reason: "A* sadece optimalite değil, tamlık da garanti eder." },
            { option: "D", reason: "A* hızı garanti etmez, sadece tamlık ve optimalite garantisi verir." },
            { option: "E", reason: "A* kabul edilebilir sezgisel ile tamlık ve optimalite garantisi verir." }
        ]
    },
    {
        question: "8-Puzzle probleminde, bir durumda h₁(n) = 3 (yanlış yerleştirilmiş kare sayısı) ve h₂(n) = 8 (Manhattan mesafesi) ise, hangisi daha bilgilendiricidir?",
        options: [
            "h₁(n) daha bilgilendiricidir",
            "İkisi de aynı bilgiyi verir",
            "h₂(n) daha bilgilendiricidir",
            "Karşılaştırılamaz",
            "h₁(n) her zaman daha iyidir"
        ],
        correctAnswer: "C",
        explanation: "Genel olarak, Manhattan mesafesi (h₂(n)) yanlış yerleştirilmiş kare sayısı (h₁(n))'dan daha bilgilendiricidir (daha yüksek değerler verir ama gerçek maliyete daha yakındır). h₁(n) = 3 iken h₂(n) = 8 olması, Manhattan mesafesinin daha detaylı bilgi sağladığını gösterir.",
        wrongExplanations: [
            { option: "A", reason: "h₁(n) daha az bilgilendiricidir çünkü sadece sayıyı verir, mesafe bilgisi vermez." },
            { option: "B", reason: "İkisi farklı bilgi verir: h₁ sayı, h₂ mesafe ölçüsü verir ve genellikle h₂ daha bilgilendiricidir." },
            { option: "D", reason: "Karşılaştırılabilirler ve genellikle h₂ daha bilgilendiricidir." },
            { option: "E", reason: "h₁(n) her zaman daha iyi değildir, genellikle h₂ daha bilgilendiricidir." }
        ]
    },
    {
        question: "Graph Search algoritmasında, DFS ve IDS arama yöntemlerinde kapalı liste (closed list) ile ilgili ne söylenebilir?",
        options: [
            "Kapalı liste artık doğrusal alan gereksinimlerine sahiptir",
            "Kapalı liste kullanılmaz",
            "Kapalı liste artık doğrusal alan gereksinimlerine sahip değildir, çünkü tüm düğümler kapalı listede saklanır",
            "Kapalı liste sadece hedef düğümleri saklar",
            "Kapalı liste sadece başlangıç düğümünü saklar"
        ],
        correctAnswer: "C",
        explanation: "Graph Search'te DFS ve IDS arama yöntemlerinde kapalı liste artık doğrusal alan gereksinimlerine (O(bm) veya O(bd)) sahip değildir, çünkü tüm genişletilmiş düğümler kapalı listede saklanır. Bu durumda alan karmaşıklığı durum uzayının boyutuna orantılı hale gelir.",
        wrongExplanations: [
            { option: "A", reason: "Graph Search'te kapalı liste doğrusal alan gereksinimlerine sahip değildir, tüm düğümler saklanır." },
            { option: "C", reason: "Graph Search'te kapalı liste kullanılır, aksi halde tree search olur." },
            { option: "D", reason: "Kapalı liste sadece hedef değil, tüm genişletilmiş düğümleri saklar." },
            { option: "E", reason: "Kapalı liste sadece başlangıç değil, tüm genişletilmiş düğümleri saklar." }
        ]
    },
    {
        question: "Tekrar eden durumlar (repeating states) arama algoritmalarında neden önemli bir sorundur?",
        options: [
            "Çünkü algoritma hızlanır",
            "Çünkü bellek kullanımı azalır",
            "Çünkü bu durumların tespit edilememesi, çözülebilir problemlerin çözülemez hale gelmesine neden olabilir",
            "Çünkü optimalite garantisi sağlar",
            "Çünkü hiçbir sorun yaratmaz"
        ],
        correctAnswer: "C",
        explanation: "Tekrar eden durumların tespit edilememesi, algoritmanın aynı durumları tekrar tekrar ziyaret etmesine ve sonsuz döngülere girmesine neden olabilir. Bu durum, çözülebilir problemlerin çözülemez hale gelmesine yol açar.",
        wrongExplanations: [
            { option: "A", reason: "Tekrar eden durumlar algoritmayı hızlandırmaz, yavaşlatır ve döngülere neden olur." },
            { option: "B", reason: "Tekrar eden durumlar bellek kullanımını azaltmaz, gereksiz hesaplamalara yol açar." },
            { option: "D", reason: "Tekrar eden durumlar optimalite garantisi sağlamaz, aksine problemi karmaşıklaştırır." },
            { option: "E", reason: "E şıkkı 'hiçbir sorun yaratmaz' der ama bu yanlıştır. Tekrar eden durumlar ciddi sorunlar yaratır ve çözülemez hale getirebilir." }
        ]
    },
    {
        question: "Romanya haritası örneğinde, Arad'dan Bucharest'e A* ile giderken, Sibiu'dan Rimnicu Vilcea'ya giden yolun maliyeti 80 ve Rimnicu Vilcea'nın Bucharest'e tahmini mesafesi 193 ise, Rimnicu Vilcea için f(n) değeri nedir? (Sibiu'dan Rimnicu Vilcea'ya giden yolun başlangıçtan maliyeti 220 ise)",
        options: [
            "80",
            "193",
            "273",
            "413",
            "220"
        ],
        correctAnswer: "D",
        explanation: "A*'da f(n) = g(n) + h(n). Rimnicu Vilcea için: g(n) = başlangıçtan Rimnicu Vilcea'ya maliyet = 220 (Sibiu'ya 140 + Sibiu'dan Rimnicu Vilcea'ya 80). h(n) = Rimnicu Vilcea'dan Bucharest'e tahmini mesafe = 193. f(Rimnicu Vilcea) = 220 + 193 = 413.",
        wrongExplanations: [
            { option: "A", reason: "80 sadece Sibiu'dan Rimnicu Vilcea'ya yol maliyetidir, f(n) değil." },
            { option: "B", reason: "193 sadece h(n) değeridir, f(n) = g(n) + h(n) = 220 + 193 = 413 olmalıdır." },
            { option: "C", reason: "273 yanlış bir hesaplamadır, f(n) = g(n) + h(n) = 220 + 193 = 413 olmalıdır." },
            { option: "E", reason: "220 sadece g(n) değeridir, f(n) = g(n) + h(n) = 220 + 193 = 413 olmalıdır." }
        ]
    },
    {
        question: "A* algoritmasında, tutarlı (consistent) bir sezgisel kullanıldığında f(n') ve f(n) arasındaki ilişki nedir?",
        options: [
            "f(n') < f(n)",
            "f(n') > f(n)",
            "f(n') ≤ f(n)",
            "f(n') ≥ f(n)",
            "f(n') = f(n)"
        ],
        correctAnswer: "D",
        explanation: "Eğer h tutarlı (consistent) ise, f(n') = g(n') + h(n') = g(n) + c(n,a,n') + h(n') ≥ g(n) + h(n) = f(n). Yani f(n) herhangi bir yol boyunca azalmaz (non-decreasing).",
        wrongExplanations: [
            { option: "A", reason: "f(n') her zaman f(n)'den küçük değildir, tutarlılık ≥ ilişkisi garanti eder." },
            { option: "C", reason: "f(n') her zaman f(n)'den büyük değildir, bazen eşit olabilir." },
            { option: "D", reason: "f(n') ≤ f(n) tutarlılık için doğru değil, ≥ olmalıdır." },
            { option: "E", reason: "f(n') = f(n) her zaman değil, ≥ ilişkisi vardır." }
        ]
    },
    {
        question: "A* algoritmasında graph-search kullanıldığında ve tutarlı (consistent) sezgisel kullanıldığında algoritma hangi özelliği garanti eder?",
        options: [
            "Sadece tamlık",
            "Sadece optimalite",
            "Sadece hız",
            "Hem tamlık hem optimalite",
            "Hiçbir şey garanti etmez"
        ],
        correctAnswer: "D",
        explanation: "Teorem: Eğer h(n) tutarlı (consistent) ise, A* algoritması graph-search kullanarak optimaldir. Tutarlı sezgisel aynı zamanda kabul edilebilir olduğu için, tamlık da garanti edilir.",
        wrongExplanations: [
            { option: "A", reason: "A* graph-search ile tutarlı sezgisel kullanıldığında sadece tamlık değil, optimalite de garanti eder." },
            { option: "C", reason: "A* graph-search ile tutarlı sezgisel kullanıldığında sadece optimalite değil, tamlık da garanti eder." },
            { option: "D", reason: "A* hızı garanti etmez, sadece tamlık ve optimalite garantisi verir." },
            { option: "E", reason: "A* graph-search ile tutarlı sezgisel kullanıldığında tamlık ve optimalite garantisi verir." }
        ]
    },
    {
        question: "IDS algoritmasında, derinlik limiti l=2 olan bir iterasyonda toplam kaç seviye araştırılır?",
        options: [
            "1 seviye",
            "2 seviye",
            "4 seviye",
            "3 seviye (0, 1, 2)",
            "5 seviye"
        ],
        correctAnswer: "D",
        explanation: "IDS algoritmasında, derinlik limiti l=2 olan bir iterasyonda, derinlik 0, 1 ve 2 olmak üzere toplam 3 seviye araştırılır (0'dan l'ye kadar).",
        wrongExplanations: [
            { option: "A", reason: "1 seviye değil, l=2 için 0, 1, 2 olmak üzere 3 seviye araştırılır." },
            { option: "C", reason: "2 seviye değil, l=2 için 0 dahil olmak üzere 3 seviye araştırılır." },
            { option: "D", reason: "4 seviye değil, l=2 için 3 seviye araştırılır." },
            { option: "E", reason: "5 seviye değil, l=2 için 3 seviye araştırılır." }
        ]
    }
];

