// Yapay Zekâ Dersi - Bölüm 3 Sınav Soruları
// CHAPTER 3: Problem Çözme Ajanları ve Arama Stratejileri

const questions = [
    {
        question: "Yapay zekâda problem çözme ne anlama gelir?",
        options: [
            "Bir hedef tanımlamak ve bu hedefe ulaşmak için uygun eylemler dizisini bulmak",
            "Sadece veri analizi yapmak",
            "Sadece algoritma yazmak",
            "Sadece görüntü işleme",
            "Sadece doğal dil işleme"
        ],
        correctAnswer: "E",
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
            "3 adım",
            "4 adım",
            "5 adım",
            "6 adım"
        ],
        correctAnswer: "C",
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
            "Sadece algoritma yazmak",
            "Ajanın neyi başarmak istediğini belirlemek",
            "Sadece veri toplamak",
            "Sadece arama yapmak",
            "Sadece planı uygulamak"
        ],
        correctAnswer: "B",
        explanation: "Hedef Belirleme (Goal Definition), ajanın neyi başarmak istediğini belirlemek anlamına gelir. Örnek hedefler: Vacuum dünyası için tüm karelerin temiz olması, 8-puzzle için karoların hedef düzenine gelmesi, navigasyon için hedef koordinata ulaşmak.",
        wrongExplanations: [
            { option: "A", reason: "Algoritma yazmak hedef belirleme değil, uygulama aşamasıdır." },
            { option: "C", reason: "Veri toplama hedef belirleme değildir." },
            { option: "D", reason: "Arama yapmak hedef belirlemeden sonraki adımdır." },
            { option: "E", reason: "Planı uygulamak en son adımdır." }
        ]
    },
    {
        question: "Problem Belirleme (Problem Formulation) hangi bileşenleri içerir?",
        options: [
            "Sadece başlangıç durumu",
            "Başlangıç durumu, durumlar, eylemler, geçiş modeli, hedef testi, yol maliyeti",
            "Sadece hedef testi",
            "Sadece eylemler",
            "Sadece yol maliyeti"
        ],
        correctAnswer: "D",
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
            "Sadece başlangıç durumunu",
            "result(state, action) → new_state (bir durumda bir eylem yapıldığında yeni durumun ne olacağını)",
            "Sadece hedef durumunu",
            "Sadece yol maliyetini",
            "Sadece eylemleri"
        ],
        correctAnswer: "D",
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
            "Sadece ağaç araması",
            "Ağaç araması ve grafik araması",
            "Sadece grafik araması",
            "Sadece BFS",
            "Sadece DFS"
        ],
        correctAnswer: "E",
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
            "Sadece BFS",
            "Sadece DFS",
            "BFS, UCS, DFS, Depth-Limited Search, Iterative Deepening Search, Bidirectional Search",
            "Sadece A*",
            "Sadece Greedy"
        ],
        correctAnswer: "C",
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
        correctAnswer: "A",
        explanation: "Breadth-First Search (BFS) FIFO (First In First Out) kuyruğu kullanır. En sığ düğümü genişletir, yani önce aynı derinlikteki tüm düğümleri işler, sonra bir sonraki derinlik seviyesine geçer.",
        wrongExplanations: [
            { option: "B", reason: "LIFO (stack) DFS'in kullandığı yapıdır." },
            { option: "C", reason: "Öncelik kuyruğu UCS ve A*'ın kullandığı yapıdır." },
            { option: "D", reason: "Hash tablosu ziyaret edilen düğümleri saklamak için kullanılır, ana veri yapısı değildir." },
            { option: "E", reason: "Ağaç yapısı arama ağacını temsil eder, kuyruk yapısı değildir." }
        ]
    },
    {
        question: "BFS'in zaman karmaşıklığı nedir? (b: dallanma faktörü, d: çözüm derinliği)",
        options: [
            "O(bm)",
            "O(b^d)",
            "O(bd)",
            "O(bl)",
            "O(m^2)"
        ],
        correctAnswer: "C",
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
            "O(b^d)",
            "O(bd)",
            "O(bl)",
            "O(m)"
        ],
        correctAnswer: "D",
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
            "En sığ düğümü genişletir",
            "En derin düğümü genişletir",
            "En düşük yol maliyetine sahip düğümü genişletir ve her zaman optimal çözüm bulur",
            "Sadece heuristiğe bakar",
            "Her zaman en hızlı çözümü bulur"
        ],
        correctAnswer: "D",
        explanation: "Uniform Cost Search (UCS), en düşük yol maliyetine sahip düğümü genişletir. Her zaman optimal çözüm bulur çünkü yol maliyeti artan sıraya göre genişletir. Öncelik kuyruğu kullanır ve BFS'in maliyetli versiyonudur.",
        wrongExplanations: [
            { option: "A", reason: "En sığ düğümü genişletmek BFS'in özelliğidir." },
            { option: "B", reason: "En derin düğümü genişletmek DFS'in özelliğidir." },
            { option: "C", reason: "Sadece heuristiğe bakmak Greedy Best-First Search'in özelliğidir." },
            { option: "E", reason: "UCS en hızlı değil, en düşük maliyetli çözümü bulur." }
        ]
    },
    {
        question: "UCS'te 'fringe' (sınır kümesi) nasıl sıralanır?",
        options: [
            "Derinliğe göre artan",
            "Derinliğe göre azalan",
            "Artan yol maliyetine göre",
            "Rastgele",
            "Heuristik değerine göre"
        ],
        correctAnswer: "E",
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
            "FIFO kuyruğu",
            "Öncelik kuyruğu",
            "LIFO yapı (stack)",
            "Hash tablosu",
            "Ağaç yapısı"
        ],
        correctAnswer: "E",
        explanation: "Depth-First Search (DFS) LIFO (Last In First Out) yapı, yani stack (yığın) kullanır. En derin düğümü genişletir, bir daldaki en derin noktaya kadar ilerler, sonra geri döner.",
        wrongExplanations: [
            { option: "A", reason: "FIFO kuyruğu BFS'in kullandığı yapıdır." },
            { option: "B", reason: "Öncelik kuyruğu UCS'in kullandığı yapıdır." },
            { option: "C", reason: "Hash tablosu ziyaret edilen düğümleri saklamak için kullanılır, ana veri yapısı değildir." },
            { option: "D", reason: "Ağaç yapısı arama ağacını temsil eder, stack yapısı değildir." }
        ]
    },
    {
        question: "DFS'in temel özellikleri nelerdir?",
        options: [
            "Tam, optimal ve çok bellek kullanır",
            "Tam, optimal ve çok az bellek kullanır",
            "Tam değil, optimal ve çok bellek kullanır",
            "Her zaman en hızlı çözümü bulur",
            "Tam değil, optimal değil, çok az bellek kullanır"
        ],
        correctAnswer: "E",
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
            "Sınırsız derinlikle DFS",
            "Sadece BFS",
            "Sadece UCS",
            "DFS + derinlik sınırı (limit l)",
            "Sadece A*"
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
            "Sadece bir kez DLS uygular",
            "DLS'i tekrar tekrar artırarak uygular (depth 0, 1, 2, ...)",
            "Sadece BFS uygular",
            "Sadece DFS uygular",
            "Rastgele arama yapar"
        ],
        correctAnswer: "B",
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
            "Sadece hızlıdır",
            "Sadece az bellek kullanır",
            "Her zaman en hızlı çözümü bulur",
            "Sadece basittir"
        ],
        correctAnswer: "A",
        explanation: "IDS'in avantajları: (1) BFS kadar optimal - en kısa çözümü bulur, (2) DFS kadar az bellek kullanır - O(bd) alan karmaşıklığı, (3) Genellikle en pratik arama stratejisidir. Bu nedenle birçok gerçek dünya problemi için tercih edilir.",
        wrongExplanations: [
            { option: "B", reason: "IDS sadece hızlı değil, aynı zamanda optimal ve az bellek kullanır." },
            { option: "C", reason: "IDS sadece az bellek kullanmakla kalmaz, aynı zamanda optimaldir." },
            { option: "D", reason: "IDS her zaman en hızlı değildir, ama optimal ve pratik bir çözümdür." },
            { option: "E", reason: "Basitlik IDS'in avantajlarından biri olabilir ama en önemli avantajları optimalite ve düşük bellek kullanımıdır." }
        ]
    },
    {
        question: "Bidirectional Search nedir?",
        options: [
            "Hem hedeften hem başlangıçtan başlar, zaman ve alan maliyetini ciddi şekilde azaltabilir",
            "Sadece başlangıçtan arama",
            "Sadece hedeften arama",
            "Rastgele yönlerde arama",
            "Sadece derinlemesine arama"
        ],
        correctAnswer: "A",
        explanation: "Bidirectional Search, hem hedeften hem başlangıçtan başlar. İki yönlü arama yaparak zaman ve alan maliyetini ciddi şekilde azaltabilir. Ancak uygulanması zor olabilir çünkü hedef tanımı gereklidir.",
        wrongExplanations: [
            { option: "B", reason: "Sadece başlangıçtan arama tek yönlü aramadır, bidirectional değildir." },
            { option: "C", reason: "Sadece hedeften arama tek yönlü aramadır." },
            { option: "D", reason: "Bidirectional Search rastgele değil, sistematik bir yaklaşımdır." },
            { option: "E", reason: "Sadece derinlemesine arama DFS'tir, bidirectional değildir." }
        ]
    },
    {
        question: "Kör (Uninformed) arama ile bilgili (Informed/Heuristik) arama arasındaki fark nedir?",
        options: [
            "Kör arama durumları sıralamak için hiçbir ek bilgi kullanmaz, bilgili arama hedefe yakınlığı değerlendiren heuristik fonksiyon kullanır",
            "Hiç fark yoktur",
            "Kör arama daha hızlıdır",
            "Bilgili arama daha basittir",
            "Sadece isimleri farklıdır"
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
            "Yanlış yerleştirilmiş kare sayısı",
            "Sadece derinlik",
            "Sadece yol maliyeti",
            "Sadece zaman",
            "Rastgele sayı"
        ],
        correctAnswer: "A",
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
            "Sadece yol maliyetine bakar",
            "Her zaman optimaldir",
            "Sadece derinliğe bakar",
            "Her zaman en yavaştır"
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
            "g(n): heuristik maliyet, h(n): gerçek maliyet",
            "g(n): derinlik, h(n): heuristik",
            "g(n): gerçek maliyet, h(n): heuristik maliyet - f(n) toplam tahmini maliyet",
            "g(n): zaman, h(n): alan",
            "g(n): düğüm sayısı, h(n): yol sayısı"
        ],
        correctAnswer: "C",
        explanation: "A* algoritmasında: g(n) = başlangıçtan n düğümüne kadar gerçek yol maliyeti, h(n) = n düğümünden hedefe kadar tahmini maliyet (heuristik), f(n) = g(n) + h(n) = toplam tahmini maliyet. Admissible heuristik kullanıldığında A* optimaldir.",
        wrongExplanations: [
            { option: "A", reason: "g(n) heuristik değil, gerçek maliyettir; h(n) gerçek değil, heuristiktir." },
            { option: "B", reason: "g(n) derinlik değil, gerçek yol maliyetidir." },
            { option: "D", reason: "g(n) ve h(n) zaman/alan değil, maliyet ölçüleridir." },
            { option: "E", reason: "g(n) ve h(n) düğüm/yol sayısı değil, maliyet değerleridir." }
        ]
    },
    {
        question: "A* algoritması ne zaman optimaldir?",
        options: [
            "Her zaman",
            "Sadece heuristik kullanmadığında",
            "Heuristik admissible (tutarlı/hedef maliyetini hiçbir zaman aşmayan) olduğunda",
            "Sadece g(n)'e baktığında",
            "Sadece h(n)'e baktığında"
        ],
        correctAnswer: "C",
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
            "16 durum",
            "8 durum",
            "2 durum",
            "32 durum"
        ],
        correctAnswer: "C",
        explanation: "Vacuum World örneğinde toplam 8 durum vardır: 2 konum (A veya B) × 2 kare durumu (her kare temiz veya kirli) = 2^3 = 8 durum. Durumlar: [Konum, A karesi durumu, B karesi durumu] şeklinde ifade edilir.",
        wrongExplanations: [
            { option: "A", reason: "4 durum yeterli değildir, 8 durum vardır." },
            { option: "B", reason: "16 durum çok fazladır, 8 durum vardır." },
            { option: "D", reason: "2 durum çok azdır, 8 durum vardır." },
            { option: "E", reason: "32 durum çok fazladır, 8 durum vardır." }
        ]
    },
    {
        question: "8-puzzle probleminde durum grafiği kaç düğüm içerir?",
        options: [
            "8! = 40320 düğüm",
            "8^2 = 64 düğüm",
            "9! = 362880 düğüm",
            "9^2 = 81 düğüm",
            "Sınırsız düğüm"
        ],
        correctAnswer: "C",
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
            "Tüm ziyaret edilen düğümler",
            "Sadece kök düğüm",
            "Sadece hedef düğümler",
            "Genişletilmemiş tüm düğümlerin kümesi",
            "Tüm düğümler"
        ],
        correctAnswer: "D",
        explanation: "Fringe (sınır kümesi), arama ağacında genişletilmemiş (henüz işlenmemiş) tüm düğümlerin kümesidir. Genelde öncelik kuyruğu olarak tutulur ve arama algoritması bu kümeden düğüm seçer.",
        wrongExplanations: [
            { option: "A", reason: "Ziyaret edilen düğümler closed set'tir, fringe değildir." },
            { option: "B", reason: "Fringe sadece kök değil, genişletilmemiş tüm düğümlerdir." },
            { option: "C", reason: "Fringe sadece hedef düğümler değil, genişletilmemiş tüm düğümlerdir." },
            { option: "E", reason: "Fringe tüm düğümler değil, sadece genişletilmemiş olanlardır." }
        ]
    },
    {
        question: "Arama stratejilerini değerlendirme kriterlerinden 'Tamlık (Completeness)' ne anlama gelir?",
        options: [
            "En düşük maliyetli çözümü bulur mu?",
            "Ne kadar hızlıdır?",
            "Ne kadar bellek kullanır?",
            "Çözüm varsa bulur mu?",
            "Kaç düğüm üretir?"
        ],
        correctAnswer: "D",
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
            "Ne kadar hızlıdır?",
            "En düşük maliyetli çözümü bulur mu?",
            "Ne kadar bellek kullanır?",
            "Kaç düğüm üretir?"
        ],
        correctAnswer: "C",
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
            "Maksimum dallanma faktörü",
            "Maksimum derinlik",
            "Çözüm derinliği",
            "Düğüm sayısı",
            "Yol maliyeti"
        ],
        correctAnswer: "D",
        explanation: "Arama notasyonunda 'd', çözüm derinliğini (solution depth) temsil eder. Bu, başlangıç durumundan hedef duruma ulaşmak için gereken minimum adım sayısıdır.",
        wrongExplanations: [
            { option: "A", reason: "Maksimum dallanma faktörü 'b' ile temsil edilir." },
            { option: "B", reason: "Maksimum derinlik 'm' ile temsil edilir." },
            { option: "C", reason: "Düğüm sayısı 'd' değildir." },
            { option: "E", reason: "Yol maliyeti 'd' değildir." }
        ]
    },
    {
        question: "Durum grafiği (State Graph) nedir?",
        options: [
            "Sadece düğümler",
            "Sadece kenarlar",
            "Düğümler: durumlar, Kenarlar: eylemler - bir durumun ardıllarını gösterir",
            "Sadece hedef durum",
            "Sadece başlangıç durumu"
        ],
        correctAnswer: "D",
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
            "Hiç fark yoktur",
            "Ağaç daha basittir",
            "Grafik daha hızlıdır",
            "Ağaç: tekrar eden durumlar olabilir, Grafik: visited set ile tekrar önlenir - daha verimli",
            "Sadece isimleri farklıdır"
        ],
        correctAnswer: "D",
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
            "Sadece hedef durum",
            "Sadece başlangıç durumu",
            "Başlangıçtan hedefe giden bir eylem dizisi",
            "Sadece bir eylem",
            "Sadece bir durum"
        ],
        correctAnswer: "D",
        explanation: "Bir çözüm (Solution), başlangıç durumundan hedef duruma giden bir eylem dizisidir. Optimal çözüm ise en düşük maliyetli yoldur. Çözüm, arama sürecinin amacıdır.",
        wrongExplanations: [
            { option: "A", reason: "Çözüm sadece hedef durum değil, hedefe ulaşmak için gereken eylem dizisidir." },
            { option: "B", reason: "Çözüm sadece başlangıç durumu değil, başlangıçtan hedefe giden eylem dizisidir." },
            { option: "C", reason: "Çözüm genellikle birden fazla eylemden oluşan bir dizidir." },
            { option: "E", reason: "Çözüm bir durum değil, durumlar arası geçişleri sağlayan eylem dizisidir." }
        ]
    },
    {
        question: "Durum uzayı (State Space) nedir?",
        options: [
            "Sadece başlangıç durumu",
            "Sadece hedef durumlar",
            "Sadece ziyaret edilen durumlar",
            "Bir problemdeki tüm olası durumların kümesi",
            "Sadece genişletilen durumlar"
        ],
        correctAnswer: "D",
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
            "Kök düğüm",
            "Hedef düğüm",
            "Başlangıç düğümü",
            "Genişletilemeyen durum (çocuk düğümü olmayan)",
            "Tüm düğümler"
        ],
        correctAnswer: "D",
        explanation: "Arama ağacında 'leaf' (yaprak) düğüm, genişletilemeyen durumdur, yani çocuk düğümü olmayan düğümdür. Bu, ya hedef duruma ulaşılmıştır ya da o durumdan başka duruma geçiş yoktur.",
        wrongExplanations: [
            { option: "A", reason: "Kök düğüm başlangıç durumudur, leaf değildir." },
            { option: "C", reason: "Hedef düğüm leaf olabilir ama her leaf hedef değildir." },
            { option: "D", reason: "Başlangıç düğümü leaf değildir, kök düğümdür." },
            { option: "E", reason: "Tüm düğümler leaf değildir, sadece genişletilemeyenler leafdir." }
        ]
    },
    {
        question: "Romanya örneğinde (Arad → Bükreş) arama sonucu hangi rotayı verir?",
        options: [
            "Arad → Timisoara → Bükreş",
            "Arad → Zarind → Bükreş",
            "Arad → Sibiu → Fagaras → Bükreş",
            "Sadece direkt yol",
            "Rastgele rota"
        ],
        correctAnswer: "D",
        explanation: "Romanya örneğinde (Arad → Bükreş) problem çözme sonucu: Arad → Sibiu → Fagaras → Bükreş rotasını verir. Bu örnek, problem çözmenin tüm sürecini gösterir: hedef belirleme, problem belirleme, arama ve uygulama.",
        wrongExplanations: [
            { option: "A", reason: "Arad → Timisoara → Bükreş rotası verilmedi." },
            { option: "B", reason: "Arad → Zarind → Bükreş rotası verilmedi." },
            { option: "C", reason: "Direkt yol yoktur, ara şehirlerden geçilir." },
            { option: "E", reason: "Rastgele değil, sistematik arama sonucu belirli bir rota bulunur." }
        ]
    },
    {
        question: "Uygulama (Execution) aşamasında ne olur?",
        options: [
            "Sadece arama yapılır",
            "Sadece hedef belirlenir",
            "Sadece problem belirlenir",
            "Ajan bulunan eylem dizisini uygular, plan hata verirse replanning gerekir, çevre değişmişse yeni arama yapılır",
            "Hiçbir şey yapılmaz"
        ],
        correctAnswer: "D",
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
            "Hiç fark yoktur",
            "Artırımlı daha basittir",
            "Tam-durum daha hızlıdır",
            "Sadece isimleri farklıdır"
        ],
        correctAnswer: "C",
        explanation: "8-Vezir probleminde iki formülasyon vardır: (1) Artırımlı formülasyon: Durumlar 0-8 vezir yerleşimi, başlangıçta hiç vezir yok, eylemler boş kareye vezir eklemek. (2) Tam-durum formülasyonu: Durumlar 8 vezirin herhangi bir yerleşimi, başlangıçta her sütunda rastgele 1 vezir, eylemler sütundaki veziri hareket ettirmek.",
        wrongExplanations: [
            { option: "A", reason: "Açıkça fark vardır - başlangıç durumu ve eylemler farklıdır." },
            { option: "B", reason: "Basitlik farkın temel özelliği değildir." },
            { option: "D", reason: "Hız farkı temel fark değildir." },
            { option: "E", reason: "İsimleri farklı değil, formülasyonları farklıdır." }
        ]
    },
    {
        question: "TREE-SEARCH fonksiyonunda 'choose leaf node for expansion according to strategy' adımı ne anlama gelir?",
        options: [
            "Stratejiye göre (BFS, DFS, UCS, A* vb.) leaf düğüm seçilir ve genişletilir",
            "Rastgele düğüm seçilir",
            "Sadece ilk düğüm seçilir",
            "Sadece son düğüm seçilir",
            "Hiç düğüm seçilmez"
        ],
        correctAnswer: "C",
        explanation: "TREE-SEARCH fonksiyonunda 'choose leaf node for expansion according to strategy' adımı, kullanılan arama stratejisine göre (BFS, DFS, UCS, A* vb.) bir leaf (yaprak) düğüm seçilmesi ve genişletilmesi anlamına gelir. Bu adım, farklı arama stratejilerinin farklı düğüm seçme kriterlerini uygulamasını sağlar.",
        wrongExplanations: [
            { option: "A", reason: "Rastgele değil, stratejiye göre seçilir." },
            { option: "B", reason: "Sadece ilk değil, stratejiye göre en uygun düğüm seçilir." },
            { option: "D", reason: "Sadece son değil, stratejiye göre seçilir." },
            { option: "E", reason: "Düğüm seçilir, bu arama sürecinin temel adımıdır." }
        ]
    }
];

