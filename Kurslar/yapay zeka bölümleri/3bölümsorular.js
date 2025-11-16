// Yapay Zekâ Dersi - Bölüm 3 Sınav Soruları
// CHAPTER 3: Problem Çözme Ajanları ve Arama Stratejileri

const questions = [
    {
        question: "Yapay zekâda problem çözme ne anlama gelir?",
        options: [
            "Veri analizi yapmak ve sonuçları yorumlamak",
            "Algoritma yazmak ve kod geliştirmek",
            "Görüntü işleme ve pattern recognition yapmak",
            "Bir hedef tanımlamak ve bu hedefe ulaşmak için uygun eylemler dizisini bulmak",
            "Doğal dil işleme ve metin analizi yapmak"
        ],
        correctAnswer: "D",
        explanation: "Yapay zekâda problem çözme, bir hedef tanımlamak ve bu hedefe ulaşmak için uygun eylemler dizisini bulmak demektir. Bir problem çözme ajanı, belirli bir başlangıç durumundan başlayarak hedef duruma ulaşmak için arama (search) yöntemleri kullanır.",
        wrongExplanations: [
            { option: "A", reason: "Problem çözme sadece veri analizi değil, hedefe ulaşmak için eylem dizisi bulmaktır." },
            { option: "B", reason: "Problem çözme sadece algoritma yazmakla sınırlı değildir, hedefe ulaşmayı içerir." },
            { option: "C", reason: "Görüntü işleme problem çözmenin bir uygulama alanıdır, tanımı değildir." },
            { option: "D", reason: "Doğal dil işleme problem çözmenin bir uygulama alanıdır." }
        ]
    },
    {
        question: "Problem çözmede kaç genel adım vardır?",
        options: [
            "2 adım",
            "4 adım",
            "3 adım",
            "5 adım",
            "6 adım"
        ],
        correctAnswer: "B",
        explanation: "Problem çözmede dört genel adım vardır: (1) Hedef Belirleme (Goal Definition), (2) Problem Belirleme (Problem Formulation), (3) Arama (Search), (4) Uygulama (Execution).",
        wrongExplanations: [
            { option: "A", reason: "2 adım yeterli değildir, problem çözme daha kapsamlı bir süreçtir." },
            { option: "B", reason: "3 adım değil, 4 adım vardır." },
            { option: "D", reason: "5 adım değil, 4 adım vardır." },
            { option: "E", reason: "6 adım değil, 4 adım vardır." }
        ]
    },
    {
        question: "Problem çözme adımlarından 'Hedef Belirleme' ne anlama gelir?",
        options: [
            "Ajanın neyi başarmak istediğini belirlemek",
            "Algoritma yazmak ve kod geliştirmek",
            "Veri toplamak ve analiz etmek",
            "Arama yapmak ve çözüm bulmak",
            "Planı uygulamak ve sonuçları değerlendirmek"
        ],
        correctAnswer: "A",
        explanation: "Hedef Belirleme (Goal Definition), ajanın neyi başarmak istediğini belirlemek anlamına gelir. Örnek hedefler: Vacuum dünyası için tüm karelerin temiz olması, 8-puzzle için karoların hedef düzenine gelmesi, navigasyon için hedef koordinata ulaşmak.",
        wrongExplanations: [
            { option: "B", reason: "Algoritma yazmak hedef belirleme değil, uygulama aşamasıdır." },
            { option: "C", reason: "Veri toplama hedef belirleme değildir." },
            { option: "D", reason: "Arama yapmak hedef belirlemeden sonraki adımdır." },
            { option: "E", reason: "Planı uygulamak en son adımdır." }
        ]
    },
    {
        question: "Problem Belirleme (Problem Formulation) hangi bileşenleri içerir?",
        options: [
            "Başlangıç durumu, durumlar ve eylemler",
            "Eylemler, geçiş modeli ve hedef testi",
            "Durumlar, hedef testi ve yol maliyeti",
            "Başlangıç durumu, geçiş modeli ve yol maliyeti",
            "Başlangıç durumu, durumlar, eylemler, geçiş modeli, hedef testi, yol maliyeti"
        ],
        correctAnswer: "E",
        explanation: "Problem Belirleme (Problem Formulation) şu temel bileşenleri içerir: (1) Başlangıç durumu (initial state), (2) Durumlar (states), (3) Eylemler (actions), (4) Geçiş modeli (transition model) - result(state, action) → new_state, (5) Hedef testi (goal test), (6) Yol maliyeti (path cost).",
        wrongExplanations: [
            { option: "A", reason: "Sadece başlangıç durumu yeterli değildir, diğer bileşenler de gereklidir." },
            { option: "B", reason: "Sadece hedef testi yeterli değildir, diğer bileşenler de gereklidir." },
            { option: "C", reason: "Sadece eylemler yeterli değildir, diğer bileşenler de gereklidir." },
            { option: "E", reason: "Sadece yol maliyeti yeterli değildir, diğer bileşenler de gereklidir." }
        ]
    },
    {
        question: "Geçiş modeli (transition model) neyi ifade eder?",
        options: [
            "Başlangıç durumunu ve hedef durumunu tanımlar",
            "Hedef durumunu ve yol maliyetini tanımlar",
            "result(state, action) → new_state (bir durumda bir eylem yapıldığında yeni durumun ne olacağını)",
            "Yol maliyetini ve eylemleri tanımlar",
            "Eylemleri ve başlangıç durumunu tanımlar"
        ],
        correctAnswer: "C",
        explanation: "Geçiş modeli (transition model), result(state, action) → new_state şeklinde ifade edilir. Bu, belirli bir durumda belirli bir eylem yapıldığında yeni durumun ne olacağını tanımlar.",
        wrongExplanations: [
            { option: "A", reason: "Geçiş modeli sadece başlangıç durumunu değil, durum değişimini tanımlar." },
            { option: "B", reason: "Geçiş modeli sadece hedef durumunu değil, herhangi bir durum değişimini tanımlar." },
            { option: "C", reason: "Yol maliyeti ayrı bir bileşendir, geçiş modelinin parçası değildir." },
            { option: "E", reason: "Geçiş modeli eylemleri kullanır ama sadece eylemleri tanımlamaz, durum geçişlerini tanımlar." }
        ]
    },
    {
        question: "Arama (Search) sürecinde hangi iki tip arama vardır?",
        options: [
            "Ağaç araması ve grafik araması",
            "Sadece ağaç araması ve BFS",
            "Sadece grafik araması ve DFS",
            "BFS ve DFS araması",
            "UCS ve A* araması"
        ],
        correctAnswer: "A",
        explanation: "Arama sürecinde iki tip arama vardır: (1) Ağaç araması: Döngü olabilir, düğümler tekrar ziyaret edilir. (2) Grafik araması: Ziyaret edilen durumlar kaydedilir → tekrar engellenir, daha verimlidir.",
        wrongExplanations: [
            { option: "A", reason: "Sadece ağaç araması değil, grafik araması da vardır." },
            { option: "B", reason: "Sadece grafik araması değil, ağaç araması da vardır." },
            { option: "C", reason: "BFS bir arama stratejisidir, arama tipi değildir." },
            { option: "D", reason: "DFS bir arama stratejisidir, arama tipi değildir." }
        ]
    },
    {
        question: "Bilinçsiz (Uninformed) arama stratejileri hangi seçenekte tam olarak verilmiştir?",
        options: [
            "BFS, DFS, UCS, Depth-Limited Search ve Iterative Deepening Search",
            "BFS, DFS, UCS, A*, Greedy Best-First Search ve Depth-Limited Search",
            "BFS, DFS, UCS, Greedy Best-First Search, Iterative Deepening Search ve Bidirectional Search",
            "BFS, UCS, DFS, Depth-Limited Search, Iterative Deepening Search, Bidirectional Search",
            "BFS, DFS, UCS, A*, Greedy Best-First Search, Iterative Deepening Search ve Bidirectional Search"
        ],
        correctAnswer: "D",
        explanation: "Bilinçsiz (Uninformed) arama stratejileri şunlardır: BFS (Breadth-First Search), UCS (Uniform Cost Search), DFS (Depth-First Search), Depth-Limited Search, Iterative Deepening Search, Bidirectional Search. Bu stratejiler durumları sıralamak için hiçbir ek bilgi (heuristik) kullanmaz, sadece problem tanımındaki bilgilerle çalışır.",
        wrongExplanations: [
            { option: "A", reason: "Sadece BFS değil, başka bilinçsiz arama stratejileri de vardır." },
            { option: "B", reason: "Sadece DFS değil, başka bilinçsiz arama stratejileri de vardır." },
            { option: "D", reason: "A* bilgili (informed) arama stratejisidir." },
            { option: "E", reason: "Greedy bilgili (informed) arama stratejisidir." }
        ]
    },
    {
        question: "Breadth-First Search (BFS) hangi yapıyı kullanır?",
        options: [
            "LIFO (stack)",
            "FIFO kuyruğu",
            "Öncelik kuyruğu",
            "Hash tablosu",
            "Ağaç yapısı"
        ],
        correctAnswer: "B",
        explanation: "Breadth-First Search (BFS) FIFO (First In First Out) kuyruğu kullanır. En sığ düğümü genişletir, yani önce aynı derinlikteki tüm düğümleri işler, sonra bir sonraki derinlik seviyesine geçer.",
        wrongExplanations: [
            { option: "A", reason: "LIFO (stack) DFS'in kullandığı yapıdır." },
            { option: "C", reason: "Öncelik kuyruğu UCS ve A*'ın kullandığı yapıdır." },
            { option: "D", reason: "Hash tablosu ziyaret edilen düğümleri saklamak için kullanılır, ana veri yapısı değildir." },
            { option: "E", reason: "Ağaç yapısı arama ağacını temsil eder, kuyruk yapısı değildir." }
        ]
    },
    {
        question: "BFS'in zaman karmaşıklığı nedir? (b: dallanma faktörü, d: çözüm derinliği)",
        options: [
            "O(bm)",
            "O(bd)",
            "O(bl)",
            "O(m^2)",
            "O(b^d)"
        ],
        correctAnswer: "E",
        explanation: "BFS'in zaman karmaşıklığı O(b^d) dir. Burada b maksimum dallanma faktörü, d ise çözüm derinliğidir. BFS, çözüm derinliği kadar seviyede tüm düğümleri genişletir.",
        wrongExplanations: [
            { option: "A", reason: "O(bm) DFS'in zaman karmaşıklığıdır (m: maksimum derinlik)." },
            { option: "B", reason: "O(bd) doğru notasyon değildir, üstel ifade gerekir." },
            { option: "D", reason: "O(bl) Depth-Limited Search'in zaman karmaşıklığıdır (l: limit)." },
            { option: "E", reason: "O(m^2) BFS için geçerli değildir." }
        ]
    },
    {
        question: "BFS'in alan/bellek karmaşıklığı nedir?",
        options: [
            "O(bm)",
            "O(bd)",
            "O(b^d)",
            "O(bl)",
            "O(m)"
        ],
        correctAnswer: "C",
        explanation: "BFS'in alan/bellek karmaşıklığı O(b^d) dir. Bu çok yüksek bellek kullanımı anlamına gelir çünkü her seviyedeki tüm düğümleri bellekte tutar. Bu, BFS'in en büyük dezavantajıdır.",
        wrongExplanations: [
            { option: "A", reason: "O(bm) DFS'in alan karmaşıklığıdır." },
            { option: "B", reason: "O(bd) doğru notasyon değildir." },
            { option: "C", reason: "O(bl) Depth-Limited Search'in alan karmaşıklığıdır." },
            { option: "E", reason: "O(m) çok düşüktür, BFS çok daha fazla bellek kullanır." }
        ]
    },
    {
        question: "Uniform Cost Search (UCS) hangi özelliğe sahiptir?",
        options: [
            "En düşük yol maliyetine sahip düğümü genişletir ve her zaman optimal çözüm bulur",
            "En sığ düğümü genişletir ve her zaman optimal çözüm bulur",
            "En derin düğümü genişletir ve her zaman optimal çözüm bulur",
            "Heuristiğe bakar ve her zaman optimal çözüm bulur",
            "Her zaman en hızlı çözümü bulur ve optimaldir"
        ],
        correctAnswer: "A",
        explanation: "Uniform Cost Search (UCS), en düşük yol maliyetine sahip düğümü genişletir. Her zaman optimal çözüm bulur çünkü yol maliyeti artan sıraya göre genişletir. Öncelik kuyruğu kullanır ve BFS'in maliyetli versiyonudur.",
        wrongExplanations: [
            { option: "B", reason: "En sığ düğümü genişletmek BFS'in özelliğidir." },
            { option: "C", reason: "En derin düğümü genişletmek DFS'in özelliğidir." },
            { option: "D", reason: "Sadece heuristiğe bakmak Greedy Best-First Search'in özelliğidir." },
            { option: "E", reason: "UCS en hızlı değil, en düşük maliyetli çözümü bulur." }
        ]
    },
    {
        question: "UCS'te 'fringe' (sınır kümesi) nasıl sıralanır?",
        options: [
            "Derinliğe göre artan",
            "Derinliğe göre azalan",
            "Rastgele",
            "Artan yol maliyetine göre",
            "Heuristik değerine göre"
        ],
        correctAnswer: "D",
        explanation: "UCS'te fringe (sınır kümesi), artan yol maliyetine göre sıralanmış bir kuyruktur. g(n) = toplam yol maliyeti olarak hesaplanır ve en düşük g(n) değerine sahip düğüm önce genişletilir.",
        wrongExplanations: [
            { option: "A", reason: "Derinliğe göre sıralama BFS'in özelliğidir." },
            { option: "B", reason: "Derinliğe göre azalan sıralama DFS'in özelliğidir." },
            { option: "C", reason: "UCS rastgele değil, maliyete göre sıralanmış şekilde çalışır." },
            { option: "D", reason: "Heuristik değerine göre sıralama bilgili arama stratejilerinin özelliğidir." }
        ]
    },
    {
        question: "Depth-First Search (DFS) hangi yapıyı kullanır?",
        options: [
            "LIFO yapı (stack)",
            "FIFO kuyruğu",
            "Öncelik kuyruğu",
            "Hash tablosu",
            "Ağaç yapısı"
        ],
        correctAnswer: "A",
        explanation: "Depth-First Search (DFS) LIFO (Last In First Out) yapı, yani stack (yığın) kullanır. En derin düğümü genişletir, bir daldaki en derin noktaya kadar ilerler, sonra geri döner.",
        wrongExplanations: [
            { option: "B", reason: "FIFO kuyruğu BFS'in kullandığı yapıdır." },
            { option: "C", reason: "Öncelik kuyruğu UCS'in kullandığı yapıdır." },
            { option: "D", reason: "Hash tablosu ziyaret edilen düğümleri saklamak için kullanılır, ana veri yapısı değildir." },
            { option: "E", reason: "Ağaç yapısı arama ağacını temsil eder, stack yapısı değildir." }
        ]
    },
    {
        question: "DFS'in temel özellikleri nelerdir?",
        options: [
            "Tam, optimal ve çok bellek kullanır",
            "Tam, optimal ve çok az bellek kullanır",
            "Tam değil, optimal değil, çok az bellek kullanır",
            "Tam değil, optimal ve çok bellek kullanır",
            "Her zaman en hızlı çözümü bulur"
        ],
        correctAnswer: "C",
        explanation: "DFS'in temel özellikleri: (1) Tam değil - sonsuz döngü olabilir, (2) Optimal değil - en kısa çözümü garanti etmez, (3) Çok az bellek kullanır - O(bm) alan karmaşıklığı. Zaman karmaşıklığı O(b^m) dir.",
        wrongExplanations: [
            { option: "A", reason: "DFS tam ve optimal değildir, ayrıca az bellek kullanır." },
            { option: "C", reason: "DFS tam ve optimal değildir." },
            { option: "D", reason: "DFS az bellek kullanır, çok değil." },
            { option: "E", reason: "DFS her zaman en hızlı çözümü bulmaz, optimal değildir." }
        ]
    },
    {
        question: "Depth-Limited Search (DLS) nedir?",
        options: [
            "Sınırsız derinlikle DFS ve her zaman optimal çözüm bulur",
            "Sadece BFS kullanır ve derinlik sınırı yoktur",
            "Sadece UCS kullanır ve maliyet sınırı vardır",
            "DFS + derinlik sınırı (limit l)",
            "Sadece A* kullanır ve heuristik sınırı vardır"
        ],
        correctAnswer: "D",
        explanation: "Depth-Limited Search (DLS), DFS'in derinlik sınırı (limit l) eklenmiş versiyonudur. Belirli bir derinlik sınırına kadar derinlemesine arama yapar. l < d ise çözüm eksik olabilir, l > d ise optimal değildir.",
        wrongExplanations: [
            { option: "A", reason: "DLS sınırsız değil, sınırlı derinlikle çalışır." },
            { option: "C", reason: "DLS BFS değil, DFS'in bir versiyonudur." },
            { option: "D", reason: "DLS UCS değildir, DFS'in sınırlı versiyonudur." },
            { option: "E", reason: "DLS A* değildir, bilinçsiz arama stratejisidir." }
        ]
    },
    {
        question: "Iterative Deepening Search (IDS) nasıl çalışır?",
        options: [
            "Sadece bir kez DLS uygular ve sonuç verir",
            "Sadece BFS uygular ve optimal çözüm bulur",
            "DLS'i tekrar tekrar artırarak uygular (depth 0, 1, 2, ...)",
            "Sadece DFS uygular ve az bellek kullanır",
            "Rastgele arama yapar ve hızlı sonuç verir"
        ],
        correctAnswer: "C",
        explanation: "Iterative Deepening Search (IDS), DLS'i tekrar tekrar artırarak uygular. Önce depth=0 ile başlar, çözüm bulamazsa depth=1, sonra depth=2 şeklinde devam eder. BFS gibi optimal, DFS gibi az bellek kullanır ve genellikle en pratik arama stratejisidir.",
        wrongExplanations: [
            { option: "A", reason: "IDS bir kez değil, birden fazla kez DLS uygular." },
            { option: "C", reason: "IDS doğrudan BFS uygulamaz, DLS'i iteratif olarak uygular." },
            { option: "D", reason: "IDS doğrudan DFS uygulamaz, DLS'i iteratif olarak uygular." },
            { option: "E", reason: "IDS rastgele değil, sistematik bir arama yapar." }
        ]
    },
    {
        question: "IDS'in avantajları nelerdir?",
        options: [
            "BFS kadar optimal, DFS kadar az bellek kullanır - genellikle en pratik strateji",
            "BFS kadar optimal ve her zaman en hızlı çözümü bulur",
            "DFS kadar az bellek kullanır ve her zaman optimaldir",
            "Basittir ve her zaman en hızlı çözümü bulur",
            "Her zaman en hızlı çözümü bulur ve çok az bellek kullanır"
        ],
        correctAnswer: "A",
        explanation: "IDS'in avantajları: (1) BFS kadar optimal - en kısa çözümü bulur, (2) DFS kadar az bellek kullanır - O(bd) alan karmaşıklığı, (3) Genellikle en pratik arama stratejisidir. Bu nedenle birçok gerçek dünya problemi için tercih edilir.",
        wrongExplanations: [
            { option: "B", reason: "IDS sadece hızlı değil, aynı zamanda optimal ve az bellek kullanır." },
            { option: "C", reason: "IDS sadece az bellek kullanmakla kalmaz, aynı zamanda optimaldir." },
            { option: "D", reason: "IDS sadece basit değil, aynı zamanda optimal ve pratik bir çözümdür." },
            { option: "E", reason: "IDS her zaman en hızlı çözümü bulmaz, ama optimal ve pratik bir çözümdür." }
        ]
    },
    {
        question: "Bidirectional Search nedir?",
        options: [
            "Sadece başlangıçtan arama yapan ve zaman maliyetini azaltan strateji",
            "Hem hedeften hem başlangıçtan başlar, zaman ve alan maliyetini ciddi şekilde azaltabilir",
            "Sadece hedeften arama yapan ve alan maliyetini azaltan strateji",
            "Rastgele yönlerde arama yapan ve hızlı sonuç veren strateji",
            "Sadece derinlemesine arama yapan ve optimal çözüm bulan strateji"
        ],
        correctAnswer: "B",
        explanation: "Bidirectional Search, hem hedeften hem başlangıçtan başlar. İki yönlü arama yaparak zaman ve alan maliyetini ciddi şekilde azaltabilir. Ancak uygulanması zor olabilir çünkü hedef tanımı gereklidir.",
        wrongExplanations: [
            { option: "A", reason: "Sadece başlangıçtan arama tek yönlü aramadır, bidirectional değildir." },
            { option: "C", reason: "Sadece hedeften arama tek yönlü aramadır." },
            { option: "D", reason: "Bidirectional Search rastgele değil, sistematik bir yaklaşımdır." },
            { option: "E", reason: "Sadece derinlemesine arama DFS'tir, bidirectional değildir." }
        ]
    },
    {
        question: "Kör (Uninformed) arama ile bilgili (Informed/Heuristik) arama arasındaki fark nedir?",
        options: [
            "Kör arama durumları sıralamak için hiçbir ek bilgi kullanmaz, bilgili arama hedefe yakınlığı değerlendiren heuristik fonksiyon kullanır",
            "Kör arama heuristik kullanır, bilgili arama heuristik kullanmaz",
            "Kör arama daha hızlıdır, bilgili arama daha yavaştır",
            "Bilgili arama daha basittir, kör arama daha karmaşıktır",
            "Sadece isimleri farklıdır, işleyişleri aynıdır"
        ],
        correctAnswer: "A",
        explanation: "Kör (Uninformed) arama, durumları sıralamak için hiçbir ek bilgi kullanmaz, sadece problem tanımındaki bilgilerle çalışır. Bilgili (Informed/Heuristik) arama ise hedefe yakınlığı değerlendiren heuristik fonksiyon kullanır (örnek: 8-puzzle'da yanlış yerleştirilmiş kare sayısı).",
        wrongExplanations: [
            { option: "B", reason: "Açıkça fark vardır - heuristik kullanımı." },
            { option: "C", reason: "Kör arama genellikle bilgili aramadan daha yavaştır." },
            { option: "D", reason: "Bilgili arama heuristik gerektirdiği için daha basit değildir." },
            { option: "E", reason: "İsimleri farklı değil, işleyişleri farklıdır." }
        ]
    },
    {
        question: "8-puzzle örneğinde kullanılan heuristik nedir?",
        options: [
            "Derinlik ve yol maliyeti kombinasyonu",
            "Yol maliyeti ve zaman kombinasyonu",
            "Zaman ve bellek kullanımı kombinasyonu",
            "Rastgele sayı ve derinlik kombinasyonu",
            "Yanlış yerleştirilmiş kare sayısı"
        ],
        correctAnswer: "E",
        explanation: "8-puzzle örneğinde kullanılan heuristik, yanlış yerleştirilmiş kare sayısıdır. Bu heuristik, bir durumun hedef duruma ne kadar yakın olduğunu tahmin etmek için kullanılır.",
        wrongExplanations: [
            { option: "B", reason: "Derinlik bir heuristik değildir, arama ağacının bir özelliğidir." },
            { option: "C", reason: "Yol maliyeti heuristik değil, gerçek maliyettir (g(n))." },
            { option: "D", reason: "Zaman bir heuristik değildir." },
            { option: "E", reason: "Rastgele sayı heuristik değildir, mantıklı bir tahmin gereklidir." }
        ]
    },
    {
        question: "Greedy Best-First Search hangi özelliğe sahiptir?",
        options: [
            "Sadece heuristiğe bakar - hızlı ama optimal değil",
            "Sadece yol maliyetine bakar ve her zaman optimaldir",
            "Her zaman optimaldir ve en hızlı çözümü bulur",
            "Sadece derinliğe bakar ve az bellek kullanır",
            "Her zaman en yavaştır ve çok bellek kullanır"
        ],
        correctAnswer: "A",
        explanation: "Greedy Best-First Search sadece heuristiğe (h(n)) bakar. Hızlıdır çünkü hedefe en yakın görünen düğümü seçer, ancak optimal değildir çünkü gerçek yol maliyetini (g(n)) dikkate almaz.",
        wrongExplanations: [
            { option: "B", reason: "Sadece yol maliyetine bakmak UCS'in özelliğidir." },
            { option: "C", reason: "Greedy Best-First Search optimal değildir, sadece heuristiğe bakar." },
            { option: "D", reason: "Derinliğe bakmak DFS veya BFS'in özelliğidir." },
            { option: "E", reason: "Greedy Best-First Search hızlıdır, en yavaş değildir." }
        ]
    },
    {
        question: "A* arama algoritmasında f(n) = g(n) + h(n) formülünde ne anlama gelir?",
        options: [
            "g(n): gerçek maliyet, h(n): heuristik maliyet - f(n) toplam tahmini maliyet",
            "g(n): heuristik maliyet, h(n): gerçek maliyet",
            "g(n): derinlik, h(n): heuristik",
            "g(n): zaman, h(n): alan",
            "g(n): düğüm sayısı, h(n): yol sayısı"
        ],
        correctAnswer: "A",
        explanation: "A* algoritmasında: g(n) = başlangıçtan n düğümüne kadar gerçek yol maliyeti, h(n) = n düğümünden hedefe kadar tahmini maliyet (heuristik), f(n) = g(n) + h(n) = toplam tahmini maliyet. Admissible heuristik kullanıldığında A* optimaldir.",
        wrongExplanations: [
            { option: "B", reason: "g(n) heuristik değil, gerçek maliyettir; h(n) gerçek değil, heuristiktir." },
            { option: "C", reason: "g(n) derinlik değil, gerçek yol maliyetidir." },
            { option: "D", reason: "g(n) ve h(n) zaman/alan değil, maliyet ölçüleridir." },
            { option: "E", reason: "g(n) ve h(n) düğüm/yol sayısı değil, maliyet değerleridir." }
        ]
    },
    {
        question: "A* algoritması ne zaman optimaldir?",
        options: [
            "Her zaman optimaldir ve en hızlı çözümü bulur",
            "Sadece heuristik kullanmadığında ve sadece g(n)'e baktığında",
            "Sadece g(n)'e baktığında ve yol maliyetine göre sıraladığında",
            "Sadece h(n)'e baktığında ve heuristik değerine göre sıraladığında",
            "Heuristik admissible (tutarlı/hedef maliyetini hiçbir zaman aşmayan) olduğunda"
        ],
        correctAnswer: "E",
        explanation: "A* algoritması, heuristik admissible (tutarlı) olduğunda optimaldir. Admissible heuristik, gerçek maliyeti hiçbir zaman aşmayan, yani h(n) ≤ h*(n) olan heuristiktir (h*(n) gerçek optimal maliyet).",
        wrongExplanations: [
            { option: "A", reason: "A* her zaman optimal değildir, admissible heuristik gereklidir." },
            { option: "B", reason: "A* heuristik kullanır, bu optimalite için gereklidir." },
            { option: "D", reason: "Sadece g(n)'e bakmak UCS'tir, A* hem g(n) hem h(n) kullanır." },
            { option: "E", reason: "Sadece h(n)'e bakmak Greedy'dir, A* her ikisini de kullanır." }
        ]
    },
    {
        question: "Vacuum World örneğinde toplam durum sayısı kaçtır?",
        options: [
            "4 durum",
            "8 durum",
            "16 durum",
            "2 durum",
            "32 durum"
        ],
        correctAnswer: "B",
        explanation: "Vacuum World örneğinde toplam 8 durum vardır: 2 konum (A veya B) × 2 kare durumu (her kare temiz veya kirli) = 2^3 = 8 durum. Durumlar: [Konum, A karesi durumu, B karesi durumu] şeklinde ifade edilir.",
        wrongExplanations: [
            { option: "A", reason: "4 durum yeterli değildir, 8 durum vardır." },
            { option: "C", reason: "16 durum çok fazladır, 8 durum vardır." },
            { option: "D", reason: "2 durum çok azdır, 8 durum vardır." },
            { option: "E", reason: "32 durum çok fazladır, 8 durum vardır." }
        ]
    },
    {
        question: "8-puzzle probleminde durum grafiği kaç düğüm içerir?",
        options: [
            "8! = 40320 düğüm",
            "8^2 = 64 düğüm",
            "9^2 = 81 düğüm",
            "9! = 362880 düğüm",
            "Sınırsız düğüm"
        ],
        correctAnswer: "D",
        explanation: "8-puzzle probleminde durum grafiği 9! = 362880 düğüm içerir. Çünkü 9 kare (8 sayı + 1 boş) vardır ve bunların farklı permütasyonları 9! farklı durum oluşturur.",
        wrongExplanations: [
            { option: "A", reason: "8! doğru değildir, 9! olmalıdır çünkü boş kare de dahildir." },
            { option: "B", reason: "8^2 = 64 yanlıştır, permütasyon sayısı hesaplanmalıdır." },
            { option: "D", reason: "9^2 = 81 yanlıştır, permütasyon sayısı 9!'dır." },
            { option: "E", reason: "Sınırsız değildir, 9! = 362880 sınırlı bir sayıdır." }
        ]
    },
    {
        question: "Arama ağacında (Search Tree) 'fringe' (sınır kümesi) nedir?",
        options: [
            "Genişletilmemiş tüm düğümlerin kümesi",
            "Tüm ziyaret edilen düğümler",
            "Sadece kök düğüm",
            "Sadece hedef düğümler",
            "Tüm düğümler"
        ],
        correctAnswer: "A",
        explanation: "Fringe (sınır kümesi), arama ağacında genişletilmemiş (henüz işlenmemiş) tüm düğümlerin kümesidir. Genelde öncelik kuyruğu olarak tutulur ve arama algoritması bu kümeden düğüm seçer.",
        wrongExplanations: [
            { option: "B", reason: "Ziyaret edilen düğümler closed set'tir, fringe değildir." },
            { option: "C", reason: "Fringe sadece kök değil, genişletilmemiş tüm düğümlerdir." },
            { option: "D", reason: "Fringe sadece hedef düğümler değil, genişletilmemiş tüm düğümlerdir." },
            { option: "E", reason: "Fringe tüm düğümler değil, sadece genişletilmemiş olanlardır." }
        ]
    },
    {
        question: "Arama stratejilerini değerlendirme kriterlerinden 'Tamlık (Completeness)' ne anlama gelir?",
        options: [
            "En düşük maliyetli çözümü bulur mu?",
            "Ne kadar hızlıdır?",
            "Ne kadar bellek kullanır?",
            "Kaç düğüm üretir?",
            "Çözüm varsa bulur mu?"
        ],
        correctAnswer: "E",
        explanation: "Tamlık (Completeness), bir arama stratejisinin çözüm varsa bulup bulmayacağını sorar. Eğer problem için bir çözüm varsa, tam bir strateji bu çözümü bulmalıdır.",
        wrongExplanations: [
            { option: "A", reason: "Bu Optimalite (Optimality) kriteridir." },
            { option: "B", reason: "Bu Zaman Karmaşıklığı kriteridir." },
            { option: "C", reason: "Bu Alan/Bellek Karmaşıklığı kriteridir." },
            { option: "E", reason: "Bu üretilen düğüm sayısı kriteridir, tamlık değildir." }
        ]
    },
    {
        question: "Arama stratejilerini değerlendirme kriterlerinden 'Optimalite (Optimality)' ne anlama gelir?",
        options: [
            "Çözüm varsa bulur mu?",
            "En düşük maliyetli çözümü bulur mu?",
            "Ne kadar hızlıdır?",
            "Ne kadar bellek kullanır?",
            "Kaç düğüm üretir?"
        ],
        correctAnswer: "B",
        explanation: "Optimalite (Optimality), bir arama stratejisinin en düşük maliyetli çözümü bulup bulmayacağını sorar. Optimal bir strateji, problem için mevcut en iyi (en düşük maliyetli) çözümü bulmalıdır.",
        wrongExplanations: [
            { option: "A", reason: "Bu Tamlık (Completeness) kriteridir." },
            { option: "C", reason: "Bu Zaman Karmaşıklığı kriteridir." },
            { option: "D", reason: "Bu Alan/Bellek Karmaşıklığı kriteridir." },
            { option: "E", reason: "Bu üretilen düğüm sayısı kriteridir, optimalite değildir." }
        ]
    },
    {
        question: "Arama notasyonunda 'b' neyi temsil eder?",
        options: [
            "Maksimum dallanma faktörü",
            "Çözüm derinliği",
            "Maksimum derinlik",
            "Düğüm sayısı",
            "Yol maliyeti"
        ],
        correctAnswer: "A",
        explanation: "Arama notasyonunda 'b', maksimum dallanma faktörünü (branching factor) temsil eder. Bu, her düğümün ortalama kaç çocuk düğüme sahip olduğunu gösterir. Arama ağacının genişliğini belirler.",
        wrongExplanations: [
            { option: "B", reason: "Çözüm derinliği 'd' ile temsil edilir." },
            { option: "C", reason: "Maksimum derinlik 'm' ile temsil edilir." },
            { option: "D", reason: "Düğüm sayısı 'b' değildir." },
            { option: "E", reason: "Yol maliyeti 'b' değildir." }
        ]
    },
    {
        question: "Arama notasyonunda 'd' neyi temsil eder?",
        options: [
            "Çözüm derinliği",
            "Maksimum dallanma faktörü",
            "Maksimum derinlik",
            "Düğüm sayısı",
            "Yol maliyeti"
        ],
        correctAnswer: "A",
        explanation: "Arama notasyonunda 'd', çözüm derinliğini (solution depth) temsil eder. Bu, başlangıç durumundan hedef duruma ulaşmak için gereken minimum adım sayısıdır.",
        wrongExplanations: [
            { option: "B", reason: "Maksimum dallanma faktörü 'b' ile temsil edilir." },
            { option: "C", reason: "Maksimum derinlik 'm' ile temsil edilir." },
            { option: "D", reason: "Düğüm sayısı 'd' değildir." },
            { option: "E", reason: "Yol maliyeti 'd' değildir." }
        ]
    },
    {
        question: "Durum grafiği (State Graph) nedir?",
        options: [
            "Düğümler: durumlar, Kenarlar: maliyetler - bir durumun maliyetlerini gösterir",
            "Düğümler: eylemler, Kenarlar: durumlar - eylemlerin sonuçlarını gösterir",
            "Düğümler: hedefler, Kenarlar: başlangıç durumları - hedefe ulaşmayı gösterir",
            "Düğümler: başlangıç durumları, Kenarlar: hedef durumları - geçişleri gösterir",
            "Düğümler: durumlar, Kenarlar: eylemler - bir durumun ardıllarını gösterir"
        ],
        correctAnswer: "E",
        explanation: "Durum grafiği (State Graph) şunlardan oluşur: (1) Düğümler: durumları temsil eder, (2) Kenarlar: eylemleri temsil eder, (3) Successor(s): bir durumun ardıllarını (sonuç durumlarını) gösterir. Durum grafiği birden fazla bağlı bileşene sahip olabilir.",
        wrongExplanations: [
            { option: "A", reason: "Durum grafiği sadece düğümler değil, kenarlar da içerir." },
            { option: "B", reason: "Durum grafiği sadece kenarlar değil, düğümler de içerir." },
            { option: "C", reason: "Durum grafiği tüm durumları içerir, sadece hedef değil." },
            { option: "E", reason: "Durum grafiği tüm durumları içerir, sadece başlangıç değil." }
        ]
    },
    {
        question: "Arama ağacı (Search Tree) ile durum grafiği (State Graph) arasındaki fark nedir?",
        options: [
            "Hiç fark yoktur, ikisi de aynı şekilde çalışır",
            "Ağaç daha basittir ve daha az bellek kullanır",
            "Ağaç: tekrar eden durumlar olabilir, Grafik: visited set ile tekrar önlenir - daha verimli",
            "Grafik daha hızlıdır ve her zaman optimal çözüm bulur",
            "Sadece isimleri farklıdır, işleyişleri tamamen aynıdır"
        ],
        correctAnswer: "C",
        explanation: "Arama ağacı ile durum grafiği arasındaki fark: (1) Ağaç aramada tekrar eden durumlar olabilir, aynı durum farklı yollardan tekrar ziyaret edilebilir. (2) Grafik aramada ziyaret edilen durumlar bir 'visited set' ile kaydedilir ve tekrar engellenir, bu daha verimlidir.",
        wrongExplanations: [
            { option: "A", reason: "Açıkça fark vardır - tekrar kontrolü." },
            { option: "C", reason: "Basitlik farkın temel özelliği değildir, tekrar kontrolü önemlidir." },
            { option: "D", reason: "Grafik genellikle daha verimlidir ama sadece hız farkı değildir." },
            { option: "E", reason: "İsimleri farklı değil, işleyişleri farklıdır." }
        ]
    },
    {
        question: "Bir çözüm (Solution) nedir?",
        options: [
            "Başlangıçtan hedefe giden bir eylem dizisi",
            "Hedef durum ve başlangıç durumu kombinasyonu",
            "Başlangıç durumu ve bir eylem kombinasyonu",
            "Bir eylem ve hedef durum kombinasyonu",
            "Bir durum ve yol maliyeti kombinasyonu"
        ],
        correctAnswer: "A",
        explanation: "Bir çözüm (Solution), başlangıç durumundan hedef duruma giden bir eylem dizisidir. Optimal çözüm ise en düşük maliyetli yoldur. Çözüm, arama sürecinin amacıdır.",
        wrongExplanations: [
            { option: "B", reason: "Çözüm sadece hedef durum değil, hedefe ulaşmak için gereken eylem dizisidir." },
            { option: "C", reason: "Çözüm sadece başlangıç durumu değil, başlangıçtan hedefe giden eylem dizisidir." },
            { option: "D", reason: "Çözüm genellikle birden fazla eylemden oluşan bir dizidir." },
            { option: "E", reason: "Çözüm bir durum değil, durumlar arası geçişleri sağlayan eylem dizisidir." }
        ]
    },
    {
        question: "Durum uzayı (State Space) nedir?",
        options: [
            "Başlangıç durumu ve hedef durumların kümesi",
            "Hedef durumlar ve ziyaret edilen durumların kümesi",
            "Ziyaret edilen durumlar ve genişletilen durumların kümesi",
            "Genişletilen durumlar ve başlangıç durumunun kümesi",
            "Bir problemdeki tüm olası durumların kümesi"
        ],
        correctAnswer: "E",
        explanation: "Durum uzayı (State Space), bir problemdeki tüm olası durumların kümesidir. Kritik not: Durum temsili kötü seçilirse → durum uzayı çok büyür → arama imkânsızlaşır. Bu nedenle etkili durum temsili çok önemlidir.",
        wrongExplanations: [
            { option: "A", reason: "Durum uzayı sadece başlangıç durumunu değil, tüm durumları içerir." },
            { option: "C", reason: "Durum uzayı sadece hedef durumları değil, tüm durumları içerir." },
            { option: "D", reason: "Durum uzayı sadece ziyaret edilen durumları değil, tüm olası durumları içerir." },
            { option: "E", reason: "Durum uzayı sadece genişletilen durumları değil, tüm olası durumları içerir." }
        ]
    },
    {
        question: "Arama ağacında (Search Tree) 'leaf' (yaprak) düğüm ne anlama gelir?",
        options: [
            "Kök düğüm ve başlangıç düğümü",
            "Hedef düğüm ve kök düğüm",
            "Genişletilemeyen durum (çocuk düğümü olmayan)",
            "Başlangıç düğümü ve hedef düğüm",
            "Tüm düğümler ve kenarlar"
        ],
        correctAnswer: "C",
        explanation: "Arama ağacında 'leaf' (yaprak) düğüm, genişletilemeyen durumdur, yani çocuk düğümü olmayan düğümdür. Bu, ya hedef duruma ulaşılmıştır ya da o durumdan başka duruma geçiş yoktur.",
        wrongExplanations: [
            { option: "A", reason: "Kök düğüm başlangıç durumudur, leaf değildir." },
            { option: "B", reason: "Hedef düğüm leaf olabilir ama her leaf hedef değildir." },
            { option: "D", reason: "Başlangıç düğümü leaf değildir, kök düğümdür." },
            { option: "E", reason: "Tüm düğümler leaf değildir, sadece genişletilemeyenler leafdir." }
        ]
    },
    {
        question: "Romanya örneğinde (Arad → Bükreş) arama sonucu hangi rotayı verir?",
        options: [
            "Arad → Timisoara → Bükreş",
            "Arad → Sibiu → Fagaras → Bükreş",
            "Arad → Zarind → Bükreş",
            "Direkt yol ve en kısa mesafe",
            "Rastgele rota ve optimal olmayan çözüm"
        ],
        correctAnswer: "B",
        explanation: "Romanya örneğinde (Arad → Bükreş) problem çözme sonucu: Arad → Sibiu → Fagaras → Bükreş rotasını verir. Bu örnek, problem çözmenin tüm sürecini gösterir: hedef belirleme, problem belirleme, arama ve uygulama.",
        wrongExplanations: [
            { option: "A", reason: "Arad → Timisoara → Bükreş rotası verilmedi." },
            { option: "C", reason: "Arad → Zarind → Bükreş rotası verilmedi." },
            { option: "D", reason: "Direkt yol yoktur, ara şehirlerden geçilir." },
            { option: "E", reason: "Rastgele değil, sistematik arama sonucu belirli bir rota bulunur." }
        ]
    },
    {
        question: "Uygulama (Execution) aşamasında ne olur?",
        options: [
            "Ajan bulunan eylem dizisini uygular, plan hata verirse replanning gerekir, çevre değişmişse yeni arama yapılır",
            "Arama yapılır, hedef belirlenir ve problem formüle edilir",
            "Hedef belirlenir, problem formüle edilir ve arama yapılır",
            "Problem belirlenir, arama yapılır ve hedef kontrol edilir",
            "Hiçbir şey yapılmaz, sadece plan hazırlanır"
        ],
        correctAnswer: "A",
        explanation: "Uygulama (Execution) aşamasında: (1) Ajan bulunan eylem dizisini uygular, (2) Plan hata verirse replanning (yeniden planlama) gerekir, (3) Çevre değişmişse yeni arama yapılır, (4) Gerçek zaman kısıtları varsa en iyi değil, yeterince iyi çözüm kullanılır, (5) Monitoring: uygulama sırasında durumun beklenenle uyumu kontrol edilir.",
        wrongExplanations: [
            { option: "A", reason: "Arama uygulama aşamasından önce yapılır." },
            { option: "C", reason: "Hedef belirleme problem çözmenin ilk aşamasıdır." },
            { option: "D", reason: "Problem belirleme uygulama aşamasından önce yapılır." },
            { option: "E", reason: "Uygulama aşamasında plan uygulanır." }
        ]
    },
    {
        question: "8-Vezir probleminde 'Artırımlı formülasyon' ile 'Tam-durum formülasyonu' arasındaki fark nedir?",
        options: [
            "Artırımlı: 0-8 vezir yerleşimi, başlangıçta hiç vezir yok; Tam-durum: 8 vezirin herhangi bir yerleşimi, başlangıçta her sütunda rastgele 1 vezir",
            "Artırımlı: 8 vezirin herhangi bir yerleşimi, başlangıçta her sütunda rastgele 1 vezir; Tam-durum: 0-8 vezir yerleşimi, başlangıçta hiç vezir yok",
            "Artırımlı daha basittir ve daha az durum içerir",
            "Tam-durum daha hızlıdır ve her zaman optimal çözüm bulur",
            "Sadece isimleri farklıdır, formülasyonları tamamen aynıdır"
        ],
        correctAnswer: "A",
        explanation: "8-Vezir probleminde iki formülasyon vardır: (1) Artırımlı formülasyon: Durumlar 0-8 vezir yerleşimi, başlangıçta hiç vezir yok, eylemler boş kareye vezir eklemek. (2) Tam-durum formülasyonu: Durumlar 8 vezirin herhangi bir yerleşimi, başlangıçta her sütunda rastgele 1 vezir, eylemler sütundaki veziri hareket ettirmek.",
        wrongExplanations: [
            { option: "B", reason: "Açıkça fark vardır - başlangıç durumu ve eylemler farklıdır." },
            { option: "C", reason: "Basitlik farkın temel özelliği değildir." },
            { option: "D", reason: "Hız farkı temel fark değildir." },
            { option: "E", reason: "İsimleri farklı değil, formülasyonları farklıdır." }
        ]
    },
    {
        question: "TREE-SEARCH fonksiyonunda 'choose leaf node for expansion according to strategy' adımı ne anlama gelir?",
        options: [
            "Stratejiye göre (BFS, DFS, UCS, A* vb.) leaf düğüm seçilir ve genişletilir",
            "Rastgele bir düğüm seçilir ve genişletilir",
            "Sadece ilk düğüm seçilir ve genişletilir",
            "Sadece son düğüm seçilir ve genişletilir",
            "Hiç düğüm seçilmez, sadece mevcut düğümler kontrol edilir"
        ],
        correctAnswer: "A",
        explanation: "TREE-SEARCH fonksiyonunda 'choose leaf node for expansion according to strategy' adımı, kullanılan arama stratejisine göre (BFS, DFS, UCS, A* vb.) bir leaf (yaprak) düğüm seçilmesi ve genişletilmesi anlamına gelir. Bu adım, farklı arama stratejilerinin farklı düğüm seçme kriterlerini uygulamasını sağlar.",
        wrongExplanations: [
            { option: "B", reason: "Rastgele değil, stratejiye göre seçilir." },
            { option: "C", reason: "Sadece ilk değil, stratejiye göre en uygun düğüm seçilir." },
            { option: "D", reason: "Sadece son değil, stratejiye göre seçilir." },
            { option: "E", reason: "Düğüm seçilir, bu arama sürecinin temel adımıdır." }
        ]
    },
    {
        question: "A* algoritmasında 'admissible' (geçerli) heuristik ile 'consistent' (tutarlı) heuristik arasındaki fark nedir?",
        options: [
            "Admissible: h(n) ≤ gerçek maliyet (hiç abartmaz), Consistent: h(n) ≤ c(n,n') + h(n') (üçgen eşitsizliği)",
            "Admissible: h(n) ≥ gerçek maliyet (her zaman abartır), Consistent: h(n) ≥ c(n,n') + h(n') (ters eşitsizlik)",
            "Admissible: h(n) = gerçek maliyet (tam doğru), Consistent: h(n) = c(n,n') + h(n') (eşitlik koşulu)",
            "Admissible: sadece pozitif değerler alır ve hesaplanır, Consistent: sadece negatif değerler alır ve hesaplanır",
            "Hiç fark yoktur, ikisi de aynı şeydir ve aynı koşulları sağlar"
        ],
        correctAnswer: "A",
        explanation: "Admissible (geçerli) heuristik: h(n) ≤ h*(n) yani gerçek maliyeti hiçbir zaman aşmaz, hiç abartmaz. Consistent (tutarlı) heuristik: h(n) ≤ c(n,n') + h(n') yani üçgen eşitsizliğini sağlar. Her consistent heuristik admissible'dır ama tersi her zaman doğru değildir. A* admissible heuristik ile optimaldir, consistent heuristik ile hem optimal hem daha verimlidir.",
        wrongExplanations: [
            { option: "B", reason: "Admissible heuristik abartmaz, gerçek maliyeti aşmaz." },
            { option: "C", reason: "Heuristik tahmindir, genellikle gerçek maliyete eşit değildir." },
            { option: "D", reason: "Heuristik genellikle pozitif değerler alır ama bu tanım değildir." },
            { option: "E", reason: "Açıkça fark vardır - admissible daha genel, consistent daha kısıtlayıcıdır." }
        ]
    },
    {
        question: "Robot montaj probleminin durum uzayında durumlar nasıl temsil edilir?",
        options: [
            "Robot eklem açıları, montaj tamamlanma durumu ve parçaların konumları",
            "Parçaların koordinatları, hedef pozisyonu ve robot kolunun hareket açıları",
            "Robot eklem açıları, parçaların gerçek değerli koordinatları ve montaj durumu",
            "Zaman kullanımı, bellek kullanımı ve işlemci performansı ölçümleri",
            "Eylem dizisi, yol maliyeti ve hedef duruma ulaşma olasılığı"
        ],
        correctAnswer: "C",
        explanation: "Robot montaj probleminin durum uzayında durumlar şunları içerir: (1) Robot eklem açıları - robot kolunun pozisyonunu belirler, (2) Parçaların gerçek değerli (continuous) koordinatları - parçaların 3D uzaydaki konumları, (3) Montaj durumu - hangi parçaların birleştirildiği. Bu durum uzayı sürekli (continuous) olduğu için temsil etmesi ve araması karmaşıktır.",
        wrongExplanations: [
            { option: "A", reason: "Durumlar sadece eklem açılarını değil, parçaların koordinatlarını da içerir." },
            { option: "B", reason: "Durumlar sadece koordinatları değil, robot eklem açılarını da içerir." },
            { option: "D", reason: "Zaman ve bellek durum temsilinin parçası değildir." },
            { option: "E", reason: "Eylem dizisi ve yol maliyeti durum değil, çözümün parçasıdır." }
        ]
    },
    {
        question: "Arama ağacında 'successor function' (ardıl fonksiyonu) ne işe yarar?",
        options: [
            "Mevcut durumdan geçiş modeline göre yeni durumları üretir ve eylem sonuçlarını hesaplar",
            "Başlangıç durumunu üretir ve ilk adımda gerekli olan tüm bilgileri hazırlar",
            "Hedef durumları üretir ve hedefe ulaşma koşullarını kontrol eder",
            "Yol maliyetini hesaplar ve durumları maliyete göre sıralar",
            "Heuristik değerini hesaplar ve durumları heuristiğe göre sıralar"
        ],
        correctAnswer: "D",
        explanation: "Successor function (ardıl fonksiyonu), arama ağacında mevcut bir durumdan, geçiş modeline (transition model) göre yeni durumları (ardılları/successors) üretir. Ancak yol maliyetini hesaplamak ve durumları maliyete göre sıralamak successor function'ın asıl işlevidir. Bu fonksiyon, result(state, action) → new_state formülünü uygular ve yol maliyetini de hesaplayarak hangi durumların daha uygun olduğunu belirler. UCS ve A* gibi algoritmalarda bu özellik kritiktir.",
        wrongExplanations: [
            { option: "A", reason: "Yeni durumları üretmek önemlidir ama yol maliyetini hesaplamak ve sıralamak daha kritik işlevdir." },
            { option: "B", reason: "Successor function başlangıç durumunu değil, ardıl durumları üretir ve maliyetini hesaplar." },
            { option: "C", reason: "Successor function sadece hedef değil, tüm geçiş yapılabilir durumları üretir ve maliyetini hesaplar." },
            { option: "E", reason: "Heuristik değeri ayrı hesaplanır, successor function yol maliyetine odaklanır." }
        ]
    },
    {
        question: "Hedef belirleme (Goal Definition) aşamasında hedef nasıl ifade edilebilir?",
        options: [
            "Mantıksal koşul olarak ifade edilebilir (örneğin 'en az 10 puan kazan' veya 'tüm kareler temiz olsun')",
            "Durum kümesi olarak ifade edilebilir (belirli bir durum kümesine ulaşmak ve başarı koşullarını sağlamak)",
            "Ödül fonksiyonu olarak ifade edilebilir (maksimum ödülü almak ve optimize etmek)",
            "Mantıksal koşul, durum kümesi veya ödül fonksiyonu olarak ifade edilebilir",
            "Eylem dizisi olarak veya problem çözme sürecinin sonucu olarak ifade edilebilir"
        ],
        correctAnswer: "E",
        explanation: "Hedef belirleme (Goal Definition) aşamasında hedef üç farklı şekilde ifade edilebilir: (1) Mantıksal koşul - örneğin 'en az 10 puan kazan', (2) Durum kümesi - belirli bir durum kümesine ulaşmak, (3) Ödül fonksiyonu - maksimum ödülü almak. Hangi yöntemin kullanılacağı problemin doğasına bağlıdır. Eylem dizisi hedef değil, hedefe ulaşmak için problem çözme sürecinin sonucudur ve uygulama aşamasında kullanılır.",
        wrongExplanations: [
            { option: "A", reason: "Hedef sadece mantıksal koşul değil, durum kümesi veya ödül fonksiyonu olarak da ifade edilebilir." },
            { option: "B", reason: "Hedef sadece durum kümesi değil, mantıksal koşul veya ödül fonksiyonu olarak da ifade edilebilir." },
            { option: "C", reason: "Hedef sadece ödül fonksiyonu değil, mantıksal koşul veya durum kümesi olarak da ifade edilebilir." },
            { option: "D", reason: "Bu doğru ama hedef üç şekilde ifade edilebilir: mantıksal koşul, durum kümesi veya ödül fonksiyonu." }
        ]
    },
    {
        question: "Uygulama (Execution) aşamasında 'monitoring' (izleme) ne anlama gelir?",
        options: [
            "Planın başarılı olup olmadığını kontrol etmek ve sonuçları değerlendirmek",
            "Uygulama sırasında durumun beklenenle uyumunu kontrol etmek ve gerekirse replanning yapmak",
            "Hedefe ulaşılıp ulaşılmadığını kontrol etmek ve hedef durumunu doğrulamak",
            "Yol maliyetini kontrol etmek ve maliyet optimizasyonu yapmak",
            "Heuristik değerini kontrol etmek ve heuristik fonksiyonunu güncellemek"
        ],
        correctAnswer: "B",
        explanation: "Uygulama (Execution) aşamasında 'monitoring' (izleme), planın uygulanması sırasında gerçek durumun beklenen durumla uyumunu kontrol etmek anlamına gelir. Eğer gerçek durum beklenenden farklıysa (örneğin çevre değişmişse veya plan hata verirse), sistem replanning (yeniden planlama) yapmalıdır. Bu, gerçek dünya problemlerinde kritik bir adımdır.",
        wrongExplanations: [
            { option: "A", reason: "Monitoring sadece başarı kontrolü değil, sürekli durum takibidir." },
            { option: "C", reason: "Monitoring sadece hedef kontrolü değil, tüm süreç boyunca durum takibidir." },
            { option: "D", reason: "Monitoring yol maliyeti değil, durum uyumunu kontrol eder." },
            { option: "E", reason: "Monitoring heuristik değeri değil, gerçek durum uyumunu kontrol eder." }
        ]
    },
    {
        question: "Durum temsili (State representation) neden çok önemlidir?",
        options: [
            "Durum temsili kötü seçilirse durum uzayı çok büyür ve arama imkânsızlaşır, verimlilik düşer",
            "Görsel olarak güzel görünmeli ve kullanıcı dostu bir arayüz sağlamalıdır",
            "Heuristik değerlerini etkiler ama arama hızını etkilemez ve performansı değiştirmez",
            "Sadece bellek kullanımını etkiler ama zaman karmaşıklığını etkilemez ve hızı değiştirmez",
            "Sadece optimaliteyi etkiler ama tamlığı etkilemez ve çözüm garantisini değiştirmez"
        ],
        correctAnswer: "A",
        explanation: "Durum temsili (State representation) çok önemlidir çünkü: (1) Kötü seçilirse → durum uzayı çok büyür → arama imkânsızlaşır, (2) İyi seçilirse → durum uzayı yönetilebilir kalır → arama mümkün olur. Örnek: 8-puzzle'da her kareyi ayrı koordinat olarak temsil etmek yerine karelerin permütasyonunu temsil etmek çok daha verimlidir. Etkili durum temsili, problem çözmenin başarısı için kritiktir.",
        wrongExplanations: [
            { option: "B", reason: "Görsel görünüm değil, verimlilik ve yönetilebilirlik önemlidir." },
            { option: "C", reason: "Durum temsili hem heuristiği hem de arama hızını etkiler." },
            { option: "D", reason: "Durum temsili hem bellek hem de zaman karmaşıklığını etkiler." },
            { option: "E", reason: "Durum temsili hem optimaliteyi hem tamlığı etkiler çünkü durum uzayı boyutunu belirler." }
        ]
    },
    {
        question: "Arama ağacında (Search Tree) 'root' (kök) düğüm neyi temsil eder?",
        options: [
            "Hedef durumu ve hedefe ulaşma koşulunu temsil eder ve başarı kriterlerini içerir",
            "Leaf düğümleri ve genişletilemeyen durumları temsil eder ve terminal noktaları gösterir",
            "Başlangıç durumunu temsil eder ve arama ağacının en üst seviyesidir",
            "Genişletilen düğümleri ve başlangıç durumunu temsil eder, tüm arama sürecinin başlangıç noktasıdır",
            "Ziyaret edilen düğümleri ve closed set'i temsil eder ve işlenmiş durumları içerir"
        ],
        correctAnswer: "D",
        explanation: "Arama ağacında (Search Tree) 'root' (kök) düğüm, başlangıç durumunu (initial state) temsil eder ve arama ağacının en üst seviyesidir. Tüm arama bu düğümden başlar ve ağaç aşağıya doğru genişler. Root düğüm genişletilen ilk düğümdür ve tüm arama sürecinin başlangıç noktasıdır. Root düğümün çocukları, başlangıç durumundan bir adımda ulaşılabilecek durumlardır ve bunlar da genişletilir.",
        wrongExplanations: [
            { option: "A", reason: "Root hedef değil, başlangıç durumunu temsil eder." },
            { option: "B", reason: "Root leaf değil, ağacın en üst düğümüdür ve genişletilir." },
            { option: "C", reason: "Root sadece başlangıç durumunu değil, aynı zamanda genişletilen ilk düğüm ve tüm arama sürecinin başlangıç noktasıdır." },
            { option: "E", reason: "Root ziyaret edilen tüm düğümler değil, sadece başlangıç durumudur." }
        ]
    }
];

