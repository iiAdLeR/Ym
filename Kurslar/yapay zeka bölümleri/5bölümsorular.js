// Yapay Zekâ Dersi - Bölüm 5 Sınav Soruları
// CHAPTER 5: A* Algoritması, Tutarlı ve Geçerli Heuristikler, Bellek Sınırlı Arama (IDA*, RBFS, SMA*), Yerel Arama (Hill Climbing, Simulated Annealing, Local Beam Search)

const questions = [
    {
        question: "Bir A* arama algoritmasında, g(n) = 5, h(n) = 12 ve h*(n) = 15 değerleri veriliyor. Bu durumda h(n) sezgisi hakkında ne söylenebilir?",
        options: [
            "h(n) geçerli ve tutarlıdır",
            "h(n) geçerli ama tutarlı değildir",
            "h(n) geçersiz ama tutarlıdır",
            "h(n) hem geçersiz hem de tutarsızdır",
            "Bu bilgilerle h(n)'in tutarlılığı hakkında karar verilemez"
        ],
        correctAnswer: "B",
        explanation: "h(n) ≤ h*(n) olduğu için (12 ≤ 15) h(n) geçerli (admissible) bir sezgidir. Tutarlılık için h(n) ≤ c(n,n') + h(n') koşuluna bakmak gerekir, ancak burada sadece bir düğüm için bilgi var. Bir sezgi geçerli olabilir ama tutarlı olmayabilir.",
        wrongExplanations: [
            { option: "A", reason: "Tutarlılık kanıtlanamaz çünkü yeterli bilgi yok (c(n,n') ve h(n') bilinmiyor)." },
            { option: "C", reason: "h(n) geçerli olduğu için geçersiz olamaz." },
            { option: "D", reason: "h(n) geçerli olduğu için geçersiz olamaz." },
            { option: "E", reason: "Geçerlilik kanıtlanabilir (12 ≤ 15) ama tutarlılık için yeterli bilgi yok." }
        ]
    },
    {
        question: "8-Puzzle probleminde, bir taşın herhangi bir yere hareket edebildiği rahatlatılmış problem için h₁(n) sezgisi kullanılıyor. Bir diğer rahatlatılmış problemde ise taşların sadece bitişik karelere hareket edebildiği h₂(n) sezgisi kullanılıyor. Bu iki sezgi hakkında aşağıdakilerden hangisi doğrudur?",
        options: [
            "h₁(n) = h₂(n) her zaman",
            "h₁(n) ≥ h₂(n) her zaman",
            "h₁(n) ≤ h₂(n) her zaman",
            "h₁(n) ve h₂(n) arasındaki ilişki duruma göre değişir",
            "İkisi de geçerli olamaz çünkü rahatlatılmış problemlerden türetilmişlerdir"
        ],
        correctAnswer: "C",
        explanation: "h₁(n) daha fazla rahatlatılmıştır (taş her yere gidebilir), bu yüzden daha küçük maliyet verir. h₂(n) daha az rahatlatılmıştır (sadece bitişik), bu yüzden daha gerçekçi ve daha büyük maliyet verir. Dolayısıyla h₁(n) ≤ h₂(n) her zaman doğrudur.",
        wrongExplanations: [
            { option: "A", reason: "Her zaman eşit değiller çünkü rahatlatma seviyeleri farklı." },
            { option: "B", reason: "Ters ilişki var, daha fazla rahatlatılmış problem daha küçük maliyet verir." },
            { option: "D", reason: "Her zaman h₁ ≤ h₂ ilişkisi geçerlidir." },
            { option: "E", reason: "Rahatlatılmış problemlerden türetilen sezgiler geçerlidir." }
        ]
    },
    {
        question: "A* algoritması bir problem için 150 düğüm genişletiyor ve çözüm derinliği 5'tir. Etkili dallanma faktörü (b*) yaklaşık olarak kaçtır? (Formül: N = 1 + b* + (b*)² + ... + (b*)ᵈ)",
        options: [
            "2.0",
            "2.5",
            "3.0",
            "3.5",
            "4.0"
        ],
        correctAnswer: "C",
        explanation: "N = 1 + b* + (b*)² + (b*)³ + (b*)⁴ + (b*)⁵ = 150. d = 5 için yaklaşık hesaplama: 3.0 değeri için 1 + 3 + 9 + 27 + 81 + 243 = 364 (büyük). 2.5 için: 1 + 2.5 + 6.25 + 15.625 + 39.0625 + 97.65625 ≈ 162 (yakın). Yaklaşık olarak b* ≈ 2.8-3.0 aralığında, seçenekler arasından en yakını 3.0.",
        wrongExplanations: [
            { option: "A", reason: "2.0 için: 1+2+4+8+16+32 = 63, çok küçük." },
            { option: "B", reason: "2.5 için: ≈ 162, yakın ama 150'den biraz büyük." },
            { option: "D", reason: "3.5 için: çok büyük bir değer, 150'den çok fazla." },
            { option: "E", reason: "4.0 için: çok büyük bir değer, hesaplamayla uyumsuz." }
        ]
    },
    {
        question: "IDA* algoritmasının çalışma mantığı aşağıdakilerden hangisidir?",
        options: [
            "Önce genişlik öncelikli arama yapar, sonra derinlik öncelikli aramaya geçer",
            "Her iterasyonda f-sınırını artırarak derinlemesine arama yapar",
            "Rastgele düğümler seçerek bellek kullanımını minimize eder",
            "Tüm arama ağacını bellekte tutarak optimal çözümü garanti eder",
            "Sadece en iyi f değerine sahip düğümü genişletir"
        ],
        correctAnswer: "B",
        explanation: "IDA* = Iterative Deepening A*, her iterasyonda f-cutoff değerini artırarak çalışır. İlk iterasyonda düşük f-sınırıyla arama yapar, hedef bulunamazsa sınırı artırır. Bu sayede A*'ın optimalitesini korurken bellek kullanımını O(d) seviyesinde tutar.",
        wrongExplanations: [
            { option: "A", reason: "BFS ve DFS karışımı değil, f-cutoff kullanarak iteratif derinleşme yapar." },
            { option: "C", reason: "Rastgele değil, f-cutoff değerine göre deterministik olarak çalışır." },
            { option: "D", reason: "Tüm ağacı tutmaz, sadece mevcut path'i tutar (bellek avantajı)." },
            { option: "E", reason: "Sadece en iyi f değil, cutoff altındaki tüm düğümleri genişletir." }
        ]
    },
    {
        question: "RBFS (Recursive Best-First Search) algoritmasında, bir düğümün f-değeri alternatif yolun f-değerini aştığında ne olur?",
        options: [
            "Algoritma sonlandırılır",
            "Düğüm silinir ve bir daha kullanılmaz",
            "Geri dönüş yapılır ve f-değeri çocuklarının en iyi f-değerine güncellenir",
            "Tüm arama ağacı sıfırdan başlatılır",
            "F-değeri en düşük olan komşu düğüme geçilir"
        ],
        correctAnswer: "C",
        explanation: "RBFS'de f-değeri alternatif yolu aştığında 'backtracking' yapılır. Geri dönerken düğümün f-değeri çocuklarının en iyi f-değerine güncellenir (backup işlemi). Bu sayede düğüm daha sonra tekrar genişletilebilir hale gelir.",
        wrongExplanations: [
            { option: "A", reason: "Algoritma devam eder, sadece geri dönüş yapar." },
            { option: "B", reason: "Silinmez, backup yapılır ve f-değeri güncellenir." },
            { option: "D", reason: "Sıfırdan başlamaz, geri dönüş yapar ve f-değerini günceller." },
            { option: "E", reason: "Komşuya geçmez, geri dönüş yapar (backtracking)." }
        ]
    },
    {
        question: "SMA* algoritmasında, tüm yaprakların f-değerleri aynı olduğunda ne yapılır?",
        options: [
            "İlk bulunan yaprak genişletilir",
            "Rastgele bir yaprak genişletilir",
            "En yeni iyi yaprak genişletilir, en eski kötü yaprak silinir",
            "Algoritma sonlandırılır",
            "Bellek sınırı iki katına çıkarılır"
        ],
        correctAnswer: "C",
        explanation: "SMA*'da f-değerleri eşit olduğunda 'tie-breaking' kuralı uygulanır. En yeni (most recent) iyi yaprak genişletilir. En eski (oldest) kötü yaprak silinir (bellek için yer açmak amacıyla). Bu, algoritmanın optimal çalışmasını garanti eder.",
        wrongExplanations: [
            { option: "A", reason: "Rastgele veya ilk bulunan değil, belirli kurallara göre en yeni seçilir." },
            { option: "B", reason: "Rastgele değil, en yeni iyi yaprak deterministik olarak seçilir." },
            { option: "D", reason: "Sonlandırmaz, tie-breaking kuralıyla devam eder." },
            { option: "E", reason: "Bellek sınırı değişmez, en eski yaprak silinir." }
        ]
    },
    {
        question: "Bir sezgisel fonksiyon h(n) için aşağıdaki eşitsizlik her düğüm çifti (n, n') için sağlanıyorsa: h(n) ≤ c(n,n') + h(n'), bu sezgi hangi özelliği sağlıyor?",
        options: [
            "Sadece geçerlilik (admissibility)",
            "Sadece tutarlılık (consistency)",
            "Hem geçerlilik hem tutarlılık",
            "Ne geçerlilik ne tutarlılık",
            "Optimalite garantisi vermez"
        ],
        correctAnswer: "B",
        explanation: "h(n) ≤ c(n,n') + h(n') eşitsizliği tutarlılık (consistency) tanımıdır. Tutarlı bir sezgi aynı zamanda geçerlidir (her tutarlı sezgi geçerlidir). Ancak soru sadece tutarlılık tanımını soruyor. Bu tanım tutarlılık tanımıdır.",
        wrongExplanations: [
            { option: "A", reason: "Bu tutarlılık tanımıdır, geçerlilik farklı bir şey (h(n) ≤ h*(n))." },
            { option: "C", reason: "Bu tanım sadece tutarlılıktır, geçerlilik ayrı bir koşuldur." },
            { option: "D", reason: "Tutarlılık tanımıdır ve optimalite sağlar." },
            { option: "E", reason: "Tutarlılık tanımıdır ve A* için optimalite garantisi verir." }
        ]
    },
    {
        question: "8-Vezir probleminde Hill Climbing algoritması ile çözüm aranırken, bir durumda h(n) = 1 değeri bulunuyor. Bu durum için aşağıdakilerden hangisi doğrudur?",
        options: [
            "Bu global optimumdur (h = 0)",
            "Bu yerel minimumdur ve algoritma burada takılı kalabilir",
            "Algoritma mutlaka çözüme ulaşır",
            "Tüm komşu durumlar daha kötüdür",
            "Bu durum çözülemez"
        ],
        correctAnswer: "B",
        explanation: "h(n) = 1, bir çift vezirin birbirini tehdit ettiği anlamına gelir. Optimal çözümde h = 0 olmalı (hiç tehdit yok). h = 1, yerel minimum olabilir (komşu durumlar daha kötü olabilir). Hill Climbing bu tür yerel minimumlarda takılı kalabilir (slaytta %86 oranında takılı kalır).",
        wrongExplanations: [
            { option: "A", reason: "Optimal h=0 olmalı, h=1 optimal değil." },
            { option: "C", reason: "Takılı kalabilir, garantisi yok (yerel minimum problemi)." },
            { option: "D", reason: "Hepsini kontrol etmek gerekir, hepsi kötü olmayabilir." },
            { option: "E", reason: "Çözülebilir ama zor, yerel minimumda takılı kalabilir." }
        ]
    },
    {
        question: "Etkili dallanma faktörü (b*) için ideal değer nedir ve bu değer ne anlama gelir?",
        options: [
            "b* = 0, hiç düğüm genişletilmediği anlamına gelir",
            "b* = 1, her düzeyde sadece bir düğüm genişletildiği anlamına gelir",
            "b* = 2, dengeli bir arama yapıldığı anlamına gelir",
            "b* = ∞, sonsuz dallanma olduğu anlamına gelir",
            "b* değeri problemi çözmek için gereken minimum düğüm sayısıdır"
        ],
        correctAnswer: "B",
        explanation: "İdeal b* = 1'dir. Bu, her seviyede sadece bir düğüm genişletildiği anlamına gelir (mükemmel sezgi durumu). Daha iyi sezgi = daha düşük b* değeri. b* = 1, sezginin çok bilgilendirici olduğunu gösterir.",
        wrongExplanations: [
            { option: "A", reason: "b* = 0 anlamsız, en az 1 düğüm genişletilir." },
            { option: "C", reason: "2 ideal değil, ideal değer 1'dir." },
            { option: "D", reason: "Sonsuz ideal değil, ideal 1'dir." },
            { option: "E", reason: "b* dallanma faktörüdür, düğüm sayısı değil." }
        ]
    },
    {
        question: "Simulated Annealing algoritmasında, ΔE < 0 (yeni durum daha kötü) olduğunda ne olur?",
        options: [
            "Yeni durum kesinlikle reddedilir",
            "Yeni durum kesinlikle kabul edilir",
            "Yeni durum e^(ΔE/T) olasılığı ile kabul edilir",
            "Yeni durum sadece sıcaklık yüksekse kabul edilir",
            "Algoritma sonlandırılır"
        ],
        correctAnswer: "C",
        explanation: "ΔE < 0 ise yeni durum daha kötüdür. Simulated Annealing, kötü durumları e^(ΔE/T) olasılığıyla kabul eder. Bu olasılık sıcaklık T yüksekken büyük, düşükken küçüktür. Bu sayede yerel maksimumlardan kaçış sağlanır.",
        wrongExplanations: [
            { option: "A", reason: "Her zaman reddedilmez, olasılıksal olarak kabul edilebilir." },
            { option: "B", reason: "Kesin değil, olasılıksal kabul (e^(ΔE/T) olasılığıyla)." },
            { option: "D", reason: "Sadece sıcaklık değil, olasılık formülüyle belirlenir (e^(ΔE/T))." },
            { option: "E", reason: "Sonlandırmaz, olasılıksal kabul ile devam eder." }
        ]
    },
    {
        question: "Bir A* algoritması iki farklı sezgi kullanıyor: h₁(n) ve h₂(n). Her ikisi de geçerli sezgilerdir ve her n düğümü için h₁(n) < h₂(n) sağlanıyor. Hangi sezgi ile daha fazla düğüm genişletilir?",
        options: [
            "h₁(n) ile daha fazla düğüm genişletilir",
            "h₂(n) ile daha fazla düğüm genişletilir",
            "İkisi de aynı sayıda düğüm genişletir",
            "Bu durumda A* optimal çözüm bulamaz",
            "Hangisinin daha fazla genişleteceği problemi çözme sırasına bağlıdır"
        ],
        correctAnswer: "A",
        explanation: "h₂(n) daha bilgilendirici (informed) bir sezgidir (daha büyük değer = gerçek maliyete daha yakın, admissible aralığında). Daha bilgilendirici sezgi = daha az düğüm genişletilir. h₁(n) daha küçük (daha az bilgilendirici), bu yüzden daha fazla düğüm genişletilir.",
        wrongExplanations: [
            { option: "B", reason: "Ters, h₂ daha bilgilendirici olduğu için daha az genişletir." },
            { option: "C", reason: "Farklı sayıda genişletir, sezgi bilgilendiriciliğine bağlı." },
            { option: "D", reason: "Her ikisi de optimal, geçerli sezgiler kullanılıyor." },
            { option: "E", reason: "Sezgiye bağlı, h₁ daha fazla genişletir." }
        ]
    },
    {
        question: "Local Beam Search algoritmasında k = 5 değeri kullanılıyor. Bu ne anlama gelir?",
        options: [
            "Her adımda en fazla 5 düğüm genişletilir",
            "Aynı anda 5 farklı arama durumu takip edilir",
            "Bellek sınırı 5 düğümdür",
            "En fazla 5 iterasyon yapılır",
            "5 farklı heuristik fonksiyon kullanılır"
        ],
        correctAnswer: "B",
        explanation: "Local Beam Search'te k, aynı anda takip edilen durum sayısıdır. Başlangıçta k rastgele durum seçilir. Her iterasyonda tüm k durumun ardılları üretilir. Ardıllardan en iyi k tanesi seçilir.",
        wrongExplanations: [
            { option: "A", reason: "Ardıllar üretilir sonra en iyi k seçilir, sadece k genişletilmez." },
            { option: "C", reason: "Bellek sınırı değil, aynı anda takip edilen durum sayısı." },
            { option: "D", reason: "Iterasyon sayısı sınırsız, k durum sayısıdır." },
            { option: "E", reason: "Heuristik sayısı değil, aynı anda takip edilen durum sayısı." }
        ]
    },
    {
        question: "8-Puzzle probleminde, Pattern Database yaklaşımı kullanılarak d1234 ve d5678 değerleri hesaplanıyor. Toplam sezgi değeri nasıl bulunur?",
        options: [
            "h(n) = min(d1234, d5678)",
            "h(n) = max(d1234, d5678)",
            "h(n) = d1234 + d5678",
            "h(n) = (d1234 + d5678) / 2",
            "h(n) = d1234 × d5678"
        ],
        correctAnswer: "C",
        explanation: "Pattern Database yaklaşımında, taşlar ayrık kümeler halinde bölünür. Her küme için ayrı ayrı optimal maliyet hesaplanır (d1234 ve d5678). Toplam sezgi, bu ayrık kümelerin maliyetlerinin toplamıdır: h(n) = d1234 + d5678. Bu toplam geçerli bir sezgidir çünkü her küme bağımsız hareket eder.",
        wrongExplanations: [
            { option: "A", reason: "Min kullanılmaz, toplam kullanılır (ayrık kümeler)." },
            { option: "B", reason: "Max kullanılmaz, toplam kullanılır." },
            { option: "D", reason: "Ortalama değil, toplam kullanılır." },
            { option: "E", reason: "Çarpım değil, toplam kullanılır." }
        ]
    },
    {
        question: "Hill Climbing algoritmasında 'Ridge' (Sırt) problemi nedir?",
        options: [
            "Yerel maksimumların bir dizisidir ve açgözlü algoritmaların yön bulması zordur",
            "Değerlendirme fonksiyonunun sabit olduğu bir bölgedir",
            "Global maksimumun bulunduğu bölgedir",
            "Algoritmanın sonsuz döngüye girdiği durumdur",
            "Hiçbir komşu durumun olmadığı durumdur"
        ],
        correctAnswer: "A",
        explanation: "Ridge, yerel maksimumların bir dizisidir. Greedy algoritmalar ridge üzerinde yön bulmakta zorlanır. Her adım küçük bir iyileşme sağlar ama optimal yön net değildir. Bu yüzden ridge'de ilerlemek yavaş ve zordur.",
        wrongExplanations: [
            { option: "B", reason: "Bu plateau (düzlük) tanımıdır." },
            { option: "C", reason: "Ridge global maksimum değildir, yerel maksimumlar dizisidir." },
            { option: "D", reason: "Sonsuz döngü değil, yavaş ilerleme problemi." },
            { option: "E", reason: "Komşular vardır ama yön bulmak zordur." }
        ]
    },
    {
        question: "IDA* ve A* algoritmalarını karşılaştırdığımızda, IDA*'nın avantajı nedir?",
        options: [
            "Daha hızlı çalışır (daha az düğüm genişletir)",
            "Daha az bellek kullanır",
            "Optimal çözüm bulamaz",
            "Sadece tree-search için çalışır",
            "Her zaman daha iyi sonuç verir"
        ],
        correctAnswer: "B",
        explanation: "IDA*'nın temel avantajı düşük bellek kullanımıdır (O(d)). A* ise O(bᵈ) bellek kullanır. IDA* bazı düğümleri tekrar genişlettiği için daha yavaş olabilir. Her ikisi de optimal çözüm bulur.",
        wrongExplanations: [
            { option: "A", reason: "Genelde daha yavaştır çünkü düğümleri tekrar üretir." },
            { option: "C", reason: "Optimal bulur, bellek avantajı var ama hız avantajı yok." },
            { option: "D", reason: "Her ikisi de çalışır, bellek avantajı önemli." },
            { option: "E", reason: "Her zaman değil, bellek avantajı var ama zaman dezavantajı olabilir." }
        ]
    },
    {
        question: "Stochastic Hill Climbing'de, mevcut durumdan yukarı yönlü hareketler arasında seçim nasıl yapılır?",
        options: [
            "En iyi komşu deterministik olarak seçilir",
            "İlk bulunan daha iyi komşu seçilir",
            "Rastgele bir seçim yapılır",
            "En kötü komşu seçilir (kaotik davranış için)",
            "Komşular değerlendirilmez, sadece mevcut durum korunur"
        ],
        correctAnswer: "C",
        explanation: "Stochastic Hill Climbing'de, yukarı yönlü (iyileştirici) hareketler arasından rastgele seçim yapılır. Bu, algoritmanın deterministik olmamasını sağlar. Plateau ve ridge problemlerini aşmaya yardımcı olur.",
        wrongExplanations: [
            { option: "A", reason: "Bu normal Hill Climbing'dir, stochastic rastgele seçim yapar." },
            { option: "B", reason: "Bu First Choice Hill Climbing'dir." },
            { option: "D", reason: "Kötü seçilmez, iyileştirici hareketler arasından rastgele seçilir." },
            { option: "E", reason: "Komşular değerlendirilir, iyileştiriciler arasından rastgele seçilir." }
        ]
    },
    {
        question: "Bir sezgi fonksiyonu h(n) için h(n) > h*(n) olduğu bir durum varsa, bu sezgi için ne söylenebilir?",
        options: [
            "Sezgi geçerlidir (admissible)",
            "Sezgi tutarlıdır (consistent)",
            "Sezgi geçersizdir (non-admissible)",
            "A* algoritması optimal çözüm bulur",
            "Sezgi mükemmeldir (perfect heuristic)"
        ],
        correctAnswer: "C",
        explanation: "Geçerlilik tanımı: h(n) ≤ h*(n) (her zaman gerçek maliyeti aşmamalı). Eğer h(n) > h*(n) olduğu bir durum varsa, sezgi geçersizdir. Geçersiz sezgi kullanıldığında A* optimal çözüm bulamayabilir.",
        wrongExplanations: [
            { option: "A", reason: "Geçersiz sezgi geçerli olamaz (h(n) > h*(n) ihlal ediyor)." },
            { option: "B", reason: "Geçersiz sezgi tutarlı da olamaz (tutarlılık geçerliliği içerir)." },
            { option: "D", reason: "Geçersiz sezgi ile optimal bulamaz." },
            { option: "E", reason: "Mükemmel sezgi h(n) = h*(n), burada h(n) > h*(n) olduğu için geçersiz." }
        ]
    },
    {
        question: "RBFS ve IDA* algoritmalarını karşılaştırdığımızda ortak özellikleri nedir?",
        options: [
            "İkisi de O(bᵈ) bellek kullanır",
            "İkisi de düğümleri tekrar üretir",
            "İkisi de optimal değildir",
            "İkisi de sadece tree-search için çalışır",
            "İkisi de A*'dan daha hızlıdır"
        ],
        correctAnswer: "B",
        explanation: "Hem IDA* hem RBFS düğümleri tekrar üretir (regenerate nodes). İkisi de tam (complete) ve optimaldir. İkisi de O(d) bellek kullanır (IDA*) veya benzer seviyede (RBFS). RBFS IDA*'dan biraz daha verimlidir ama yine de tekrar üretir.",
        wrongExplanations: [
            { option: "A", reason: "O(d) bellek kullanırlar, O(bᵈ) değil." },
            { option: "C", reason: "Optimaldirler, ortak özellik tekrar üretmedir." },
            { option: "D", reason: "Graph-search için de çalışabilirler, ortak özellik tekrar üretmedir." },
            { option: "E", reason: "Genelde daha yavaştırlar (tekrar üretmeden dolayı)." }
        ]
    },
    {
        question: "8-Vezir probleminde Hill Climbing algoritması ile çözüm aranırken, bir durumda h(n) = 2 olan bir durumda takılı kalıyor. Tüm komşu durumların h(n) ≥ 2 olduğu gözlemleniyor. Bu durum nedir?",
        options: [
            "Global optimum",
            "Yerel maksimum",
            "Plateau",
            "Ridge",
            "Çözülemez durum"
        ],
        correctAnswer: "C",
        explanation: "Plateau (düzlük), değerlendirme fonksiyonunun sabit veya benzer olduğu bölgedir. Burada h(n) = 2 ve tüm komşular ≥ 2, yani düzlük var. Hill Climbing bu durumda hangi yöne gideceğini bilemez. Rastgele hareket veya stochastic versiyon gerekir.",
        wrongExplanations: [
            { option: "A", reason: "Optimal h=0 olmalı, h=2 optimal değil." },
            { option: "B", reason: "Yerel maksimum komşulardan daha iyi olmalı, burada komşular ≥ 2 (benzer)." },
            { option: "D", reason: "Ridge farklı bir problem (yerel maksimumlar dizisi), bu plateau." },
            { option: "E", reason: "Çözülebilir ama zor, plateau'da takılı kalmış." }
        ]
    },
    {
        question: "Simulated Annealing algoritmasında sıcaklık (T) parametresi zamanla nasıl değişir ve bu ne anlama gelir?",
        options: [
            "T sabit kalır",
            "T zamanla artar",
            "T zamanla azalır (schedule'a göre)",
            "T rastgele değişir",
            "T'nin değişimi algoritmanın sonucunu etkilemez"
        ],
        correctAnswer: "C",
        explanation: "Simulated Annealing'de T (sıcaklık) zamanla azalır (cooling schedule). Başlangıçta T yüksektir (kötü hareketler kolay kabul edilir). Zamanla T azalır (kötü hareketler daha az kabul edilir). T yeterince yavaş azalırsa optimal çözüme ulaşılır.",
        wrongExplanations: [
            { option: "A", reason: "T sabit kalmaz, azalmalı (cooling)." },
            { option: "B", reason: "T artmaz, azalmalı." },
            { option: "D", reason: "Rastgele değil, schedule'a göre deterministik azalır." },
            { option: "E", reason: "T değişimi kritiktir, sonucu etkiler." }
        ]
    },
    {
        question: "Bir A* arama algoritmasında f(n) = g(n) + h(n) değerleri hesaplanıyor. Eğer h(n) = 0 için tüm düğümlerde, bu durumda A* hangi algoritmaya dönüşür?",
        options: [
            "Depth-First Search",
            "Breadth-First Search",
            "Uniform-Cost Search",
            "Greedy Best-First Search",
            "Iterative Deepening Search"
        ],
        correctAnswer: "C",
        explanation: "h(n) = 0 ise f(n) = g(n) + 0 = g(n) olur. A* bu durumda sadece g(n) değerine göre (maliyet) karar verir. Bu, Uniform-Cost Search (Dijkstra) algoritmasıdır.",
        wrongExplanations: [
            { option: "A", reason: "DFS farklı mantık (derinlik öncelikli)." },
            { option: "B", reason: "BFS farklı mantık (genişlik öncelikli)." },
            { option: "D", reason: "Greedy h(n) kullanır, burada h(n) = 0." },
            { option: "E", reason: "IDS farklı mantık (iteratif derinleşme)." }
        ]
    },
    {
        question: "Local Beam Search'te, k araması arasında bilgi paylaşımı ne anlama gelir?",
        options: [
            "Her arama kendi yolunu izler, bilgi paylaşılmaz",
            "Aynı anda takip edilen k durum birbirleriyle etkileşim kurar",
            "Bellek kullanımı k arasında paylaşılır",
            "Sadece bir arama aktif olabilir, diğerleri bekler",
            "Her arama farklı problemi çözer"
        ],
        correctAnswer: "B",
        explanation: "Local Beam Search'te k durum aynı anda takip edilir. Bu durumlar birbirleriyle ilişkilidir (aynı problem uzayında). Ardıllardan en iyi k seçilirken, tüm k durumun ardılları birlikte değerlendirilir. Bu, bilgi paylaşımı olarak görülebilir.",
        wrongExplanations: [
            { option: "A", reason: "Bilgi paylaşılır, tüm ardıllar birlikte değerlendirilir." },
            { option: "C", reason: "Bellek paylaşımı değil, durum paylaşımı ve birlikte değerlendirme." },
            { option: "D", reason: "Hepsi aktif, aynı anda takip edilir." },
            { option: "E", reason: "Aynı problemi çözerler, farklı yollardan." }
        ]
    },
    {
        question: "8-Puzzle probleminde, 'bir taşın herhangi bir bitişik kareye hareket edebildiği' rahatlatılmış problem için oluşturulan sezgi h₂(n) nedir?",
        options: [
            "Manhattan distance",
            "Number of misplaced tiles",
            "Taşların bitişik hareket edebildiği durumda optimal çözüm maliyeti",
            "Euclidean distance",
            "Hamming distance"
        ],
        correctAnswer: "C",
        explanation: "Rahatlatılmış problemde taş bitişik karelere hareket edebilir. Bu rahatlatılmış problemin optimal çözüm maliyeti h₂(n)'dir. Bu maliyet, orijinal problem için geçerli bir sezgidir.",
        wrongExplanations: [
            { option: "A", reason: "Manhattan distance farklı bir sezgidir, rahatlatılmış problem çözümü değil." },
            { option: "B", reason: "Number of misplaced tiles farklı bir sezgidir (h₁)." },
            { option: "D", reason: "Euclidean distance farklı bir sezgidir." },
            { option: "E", reason: "Hamming distance farklı bir sezgidir." }
        ]
    },
    {
        question: "Hill Climbing algoritması için 'açgözlü yerel arama' (greedy local search) terimi neden kullanılır?",
        options: [
            "Global optimumu garanti eder",
            "Sadece en iyi komşu durumu seçer, geleceğe bakmaz",
            "Rastgele hareket eder",
            "Tüm arama uzayını tarar",
            "Bellek kullanımı çok yüksektir"
        ],
        correctAnswer: "B",
        explanation: "'Greedy' (açgözlü) terimi, algoritmanın her adımda en iyi görünen seçimi yapması anlamına gelir. Hill Climbing sadece mevcut durumun komşularına bakar. Gelecekteki sonuçları düşünmez (myopic). Bu yüzden yerel maksimumlarda takılı kalabilir.",
        wrongExplanations: [
            { option: "A", reason: "Global optimum garantisi yok, yerel maksimumlarda takılı kalabilir." },
            { option: "C", reason: "Deterministik olarak en iyiyi seçer, rastgele değil (stochastic versiyon hariç)." },
            { option: "D", reason: "Tüm uzayı taramaz, sadece komşulara bakar." },
            { option: "E", reason: "Çok az bellek kullanır (sadece mevcut durum)." }
        ]
    },
    {
        question: "A* algoritmasında, eğer h(n) tutarlı (consistent) ise, f(n) değeri hakkında ne söylenebilir?",
        options: [
            "f(n) her zaman azalır",
            "f(n) her zaman artar",
            "f(n) herhangi bir yönde değişebilir",
            "f(n) herhangi bir yolda artmayan (non-decreasing) bir fonksiyondur",
            "f(n) sabit kalır"
        ],
        correctAnswer: "D",
        explanation: "Tutarlı sezgi kullanıldığında, f(n') ≥ f(n) sağlanır (herhangi bir yolda). Yani f(n) herhangi bir yolda artmayan (non-decreasing) bir fonksiyondur. Bu, A*'ın optimal çalışmasını garanti eder.",
        wrongExplanations: [
            { option: "A", reason: "f(n) artmayan ama azalmaz, bazen sabit kalabilir veya artabilir." },
            { option: "B", reason: "Her zaman artmaz, bazen sabit kalabilir." },
            { option: "C", reason: "Rastgele değil, tutarlılık kurallarına göre artmayan." },
            { option: "E", reason: "Sabit kalmaz, artmayan ama değişebilir." }
        ]
    },
    {
        question: "First Choice Hill Climbing algoritmasında, daha iyi bir komşu bulunana kadar ne yapılır?",
        options: [
            "Algoritma sonlandırılır",
            "Tüm komşular değerlendirilir",
            "Rastgele ardıllar (yeni durumlar) üretilir",
            "En kötü komşu seçilir",
            "Mevcut durum korunur"
        ],
        correctAnswer: "C",
        explanation: "First Choice Hill Climbing'de rastgele ardıllar üretilir. Daha iyi bir ardıl bulunana kadar üretime devam edilir. İlk bulunan daha iyi ardıl kabul edilir. Tüm komşular değerlendirilmez, sadece rastgele üretilenler kontrol edilir.",
        wrongExplanations: [
            { option: "A", reason: "Devam eder, daha iyi bulunana kadar." },
            { option: "B", reason: "Tümü değil, rastgele üretilenler kontrol edilir." },
            { option: "D", reason: "Daha iyi seçilir, kötü değil." },
            { option: "E", reason: "Değişir, daha iyi ardıl bulununca." }
        ]
    },
    {
        question: "SMA* algoritmasında, silinen bir düğümün bilgisi nereye yedeklenir (backup)?",
        options: [
            "Silinir ve bir daha kullanılmaz",
            "En yakın komşu düğüme yazılır",
            "Ebeveyn (parent) düğüme yazılır",
            "Bellek dışına yazılır",
            "Rastgele bir düğüme yazılır"
        ],
        correctAnswer: "C",
        explanation: "SMA*'da bellek dolduğunda en kötü yaprak silinir. Silinen düğümün f-değeri ebeveyn düğüme yazılır (backup). Bu sayede, eğer gerekiyorsa düğüm daha sonra tekrar genişletilebilir. RFBS'deki backup mantığına benzer.",
        wrongExplanations: [
            { option: "A", reason: "Backup yapılır, ebeveyne yazılır." },
            { option: "B", reason: "Ebeveyne yazılır, komşuya değil." },
            { option: "D", reason: "Bellekte ebeveyne yazılır." },
            { option: "E", reason: "Ebeveyne deterministik olarak yazılır." }
        ]
    },
    {
        question: "8-Vezir probleminde Hill Climbing kullanılırken, başlangıç durumunda 8 vezir rastgele yerleştiriliyor ve h(n) = 6 bulunuyor. Algoritma %86 oranında nerede takılı kalır?",
        options: [
            "Global optimumda (h = 0)",
            "Yerel maksimumda (h = 1)",
            "Plateau'da (h = 2-3)",
            "Başlangıç durumunda",
            "Hiçbir yerde takılı kalmaz"
        ],
        correctAnswer: "B",
        explanation: "Slaytta belirtildiği üzere, 8-vezir probleminde Hill Climbing %86 oranında takılı kalır. Bu genelde yerel minimum/maksimum durumlarında olur (h = 1 gibi). h = 1, bir çift vezirin birbirini tehdit ettiği durumdur. Komşu durumlar daha kötü olduğu için algoritma ilerleyemez.",
        wrongExplanations: [
            { option: "A", reason: "Global optimumda takılı kalmaz, optimal çözüm bulmuştur." },
            { option: "C", reason: "Plateau'da da olabilir ama %86 yerel maksimum (h=1)." },
            { option: "D", reason: "Başlangıçta takılı kalmaz, ilerlemeye çalışır." },
            { option: "E", reason: "Takılı kalır, %86 oranında yerel maksimumlarda." }
        ]
    },
    {
        question: "Rahatlatılmış problemden (relaxed problem) türetilen bir sezgi neden geçerlidir (admissible)?",
        options: [
            "Çünkü rahatlatılmış problem daha kolaydır",
            "Çünkü rahatlatılmış problemin optimal çözümü orijinal problemin alt sınırıdır",
            "Çünkü rahatlatılmış problem optimal çözümü garanti eder",
            "Çünkü sezgi her zaman 0'dır",
            "Çünkü rahatlatılmış problem daha hızlı çözülür"
        ],
        correctAnswer: "B",
        explanation: "Rahatlatılmış problemde kısıtlamalar azaltıldığı için, çözüm daha kolay veya eşit maliyetlidir. Rahatlatılmış problemin optimal çözümü ≤ orijinal problemin optimal çözümü. Bu yüzden rahatlatılmış problemin çözüm maliyeti geçerli bir sezgidir (h(n) ≤ h*(n)).",
        wrongExplanations: [
            { option: "A", reason: "Kolaylık geçerlilik garantisi vermez, alt sınır olması önemli." },
            { option: "C", reason: "Optimal çözüm farklı olabilir ama alt sınır sağlar." },
            { option: "D", reason: "Her zaman 0 değil, rahatlatılmış problemin çözüm maliyeti." },
            { option: "E", reason: "Hız geçerlilik garantisi vermez, alt sınır önemli." }
        ]
    },
    {
        question: "Local Search algoritmalarının temel avantajı nedir?",
        options: [
            "Optimal çözümü garanti ederler",
            "Çok az bellek kullanırlar",
            "Her zaman en hızlı çözümü bulurlar",
            "Sadece küçük problemler için çalışırlar",
            "Arama ağacı oluşturmaları gerekir"
        ],
        correctAnswer: "B",
        explanation: "Local Search algoritmalarının temel avantajı düşük bellek kullanımıdır. Sadece mevcut durum tutulur, arama ağacı oluşturulmaz. Sonsuz veya çok büyük durum uzaylarında kullanılabilir. Optimal çözüm garantisi yoktur.",
        wrongExplanations: [
            { option: "A", reason: "Optimal garantisi yok, yerel optimum bulabilir." },
            { option: "C", reason: "Her zaman en hızlı değil, bellek avantajı var." },
            { option: "D", reason: "Büyük problemler için de kullanılır (bellek avantajı sayesinde)." },
            { option: "E", reason: "Arama ağacı oluşturmazlar, sadece mevcut durum tutulur." }
        ]
    },
    {
        question: "Bir A* algoritmasında, iki farklı sezgi kullanılıyor: h₁(n) ve h₂(n). Her ikisi de geçerli ve h₁(n) ≤ h₂(n) ≤ h*(n) sağlanıyor. Hangi sezgi ile daha verimli (daha az düğüm genişletilerek) çözüm bulunur?",
        options: [
            "h₁(n) ile daha verimli",
            "h₂(n) ile daha verimli",
            "İkisi de aynı verimlilikte",
            "Sezgiler verimliliği etkilemez",
            "Bu bilgilerle karar verilemez"
        ],
        correctAnswer: "B",
        explanation: "h₂(n) daha bilgilendirici (informed) bir sezgidir (h*(n)'e daha yakın). Daha bilgilendirici sezgi = daha yüksek f(n) değerleri = daha az düğüm genişletilir. h₁(n) daha küçük, bu yüzden daha fazla düğüm genişletilir.",
        wrongExplanations: [
            { option: "A", reason: "Ters, h₁ daha az bilgilendirici olduğu için daha fazla genişletir." },
            { option: "C", reason: "Farklı verimlilik, h₂ daha verimli." },
            { option: "D", reason: "Etkiler, daha bilgilendirici sezgi daha verimli." },
            { option: "E", reason: "Karar verilebilir, h₂ daha verimli." }
        ]
    },
    {
        question: "IDA* algoritmasında, f-cutoff değeri 5 olan bir iterasyonda, f(n) = 6 olan bir düğüm ne olur?",
        options: [
            "Düğüm genişletilir",
            "Düğüm kesilir (pruned) ve bu iterasyonda genişletilmez",
            "Düğüm silinir ve bir daha kullanılmaz",
            "Algoritma sonlandırılır",
            "F-cutoff değeri otomatik olarak artırılır"
        ],
        correctAnswer: "B",
        explanation: "IDA*'da f-cutoff altındaki düğümler genişletilir, üstündekiler kesilir (pruned). f(n) = 6 > cutoff = 5 olduğu için bu düğüm bu iterasyonda genişletilmez. Sonraki iterasyonda cutoff artırılınca tekrar denenecek.",
        wrongExplanations: [
            { option: "A", reason: "f(n) = 6 > cutoff = 5 olduğu için kesilir, genişletilmez." },
            { option: "C", reason: "Silinmez, sadece bu iterasyonda kesilir, sonraki iterasyonda tekrar denenecek." },
            { option: "D", reason: "Sonlandırmaz, sadece kesilir ve sonraki iterasyonda tekrar denenir." },
            { option: "E", reason: "Cutoff bu iterasyonda değişmez, sonraki iterasyonda artırılır." }
        ]
    },
    {
        question: "Hill Climbing algoritmasının temel problemi nedir?",
        options: [
            "Çok fazla bellek kullanır",
            "Yerel maksimum, plateau ve ridge problemlerinde takılı kalabilir",
            "Optimal çözümü garanti eder",
            "Sadece küçük problemler için çalışır",
            "Çok yavaş çalışır"
        ],
        correctAnswer: "B",
        explanation: "Hill Climbing'in temel problemi yerel maksimum, plateau ve ridge gibi durumlarda takılı kalabilmesidir. Bu durumlarda algoritma ilerleyemez çünkü mevcut durumdan daha iyi bir komşu bulamaz veya hangi yöne gideceğini bilemez.",
        wrongExplanations: [
            { option: "A", reason: "Çok az bellek kullanır (sadece mevcut durum), bu avantajdır." },
            { option: "C", reason: "Optimal garantisi yok, yerel optimum bulabilir." },
            { option: "D", reason: "Büyük problemler için de kullanılabilir." },
            { option: "E", reason: "Hızlı çalışır (sadece komşuları kontrol eder), problem takılma." }
        ]
    },
    {
        question: "Simulated Annealing algoritmasında, başlangıç sıcaklığı T₀ çok yüksek seçilirse ne olur?",
        options: [
            "Algoritma çok hızlı yakınsar",
            "Kötü hareketler kolay kabul edilir ve yerel maksimumlardan kaçış kolaylaşır",
            "Algoritma hiçbir zaman kötü hareket kabul etmez",
            "Sadece optimal çözümlere ulaşır",
            "Algoritma sonsuz döngüye girer"
        ],
        correctAnswer: "B",
        explanation: "Yüksek sıcaklık T, e^(ΔE/T) olasılığını artırır (ΔE negatif bile olsa). Bu sayede kötü hareketler kolay kabul edilir ve algoritma yerel maksimumlardan kaçabilir. Ancak çok yüksek T algoritmayı rastgele aramaya yaklaştırır.",
        wrongExplanations: [
            { option: "A", reason: "Yavaş yakınsar çünkü kötü hareketler çok kabul edilir." },
            { option: "C", reason: "Kötü hareketleri yüksek olasılıkla kabul eder." },
            { option: "D", reason: "Optimal garantisi yok, ama yeterince yavaş soğutulursa yaklaşabilir." },
            { option: "E", reason: "Sonsuz döngüye girmez ama yakınsama yavaşlar." }
        ]
    },
    {
        question: "RBFS algoritmasında 'backup' işlemi ne zaman yapılır?",
        options: [
            "Her zaman başlangıçta",
            "Bir düğümün f-değeri alternatif yolu aştığında geri dönüş sırasında",
            "Sadece hedef bulunduğunda",
            "Her iterasyonda",
            "Asla yapılmaz"
        ],
        correctAnswer: "B",
        explanation: "RBFS'de backup işlemi, bir düğümün f-değeri alternatif yolu (best alternative path) aştığında geri dönüş (backtracking) sırasında yapılır. Düğümün f-değeri çocuklarının en iyi f-değerine güncellenir, böylece daha sonra tekrar genişletilebilir.",
        wrongExplanations: [
            { option: "A", reason: "Başlangıçta değil, geri dönüş sırasında yapılır." },
            { option: "C", reason: "Hedef bulunduğunda değil, geri dönüş sırasında yapılır." },
            { option: "D", reason: "Her iterasyonda değil, sadece gerekli olduğunda (geri dönüş sırasında)." },
            { option: "E", reason: "Yapılır, geri dönüş sırasında f-değerini güncellemek için." }
        ]
    },
    {
        question: "SMA* algoritmasının RBFS'den farkı nedir?",
        options: [
            "SMA* hiç bellek kullanmaz",
            "SMA* tüm mevcut belleği kullanır ve bellek dolduğunda en kötü yaprağı siler",
            "SMA* optimal değildir",
            "SMA* sadece tree-search için çalışır",
            "SMA* geri dönüş yapmaz"
        ],
        correctAnswer: "B",
        explanation: "SMA*'ın temel farkı, tüm mevcut belleği kullanması ve bellek dolduğunda en kötü (en yüksek f-değerli) yaprağı silmesidir. Silinen düğümün bilgisi ebeveyne backup edilir. RBFS ise daha dinamik geri dönüş yapar.",
        wrongExplanations: [
            { option: "A", reason: "Bellek kullanır, sınırlı belleği optimize eder." },
            { option: "C", reason: "Optimaldir, çözüm varsa bulur." },
            { option: "D", reason: "Her türlü arama için çalışır." },
            { option: "E", reason: "Backup yaparak geri dönüş mekanizması kullanır." }
        ]
    },
    {
        question: "8-Puzzle probleminde, 'bir taşın herhangi bir yere hareket edebildiği' rahatlatılmış problem için h₁(n) sezgisi, bir durumda kaç taşın yanlış konumda olduğunu verir mi?",
        options: [
            "Evet, kesinlikle",
            "Hayır, sadece taşların hedefe olan Manhattan mesafesini verir",
            "Hayır, bu sezgi farklı bir şey hesaplar",
            "Bazen evet bazen hayır",
            "Sadece optimal durumlarda"
        ],
        correctAnswer: "A",
        explanation: "'Bir taşın herhangi bir yere hareket edebildiği' rahatlatılmış problem için optimal çözüm, her taşı doğrudan hedef konumuna taşımaktır. Bu durumda h₁(n), yanlış konumdaki taş sayısına eşittir (her yanlış konumdaki taş için 1 adım yeterli).",
        wrongExplanations: [
            { option: "B", reason: "Manhattan mesafesi farklı bir sezgidir (h₂), h₁ yanlış konumdaki taş sayısıdır." },
            { option: "C", reason: "Aynı şeyi hesaplar: yanlış konumdaki taş sayısı." },
            { option: "D", reason: "Her zaman yanlış konumdaki taş sayısıdır." },
            { option: "E", reason: "Her durumda geçerlidir, optimal olması gerekmez." }
        ]
    },
    {
        question: "Tutarlı (consistent) bir sezgi kullanıldığında, A* algoritmasının f(n) değerleri hakkında ne söylenebilir?",
        options: [
            "f(n) değerleri her zaman artar",
            "f(n) değerleri her zaman azalır",
            "f(n) değerleri herhangi bir yol boyunca azalmaz (non-decreasing)",
            "f(n) değerleri rastgele değişir",
            "f(n) değerleri sabit kalır"
        ],
        correctAnswer: "C",
        explanation: "Tutarlı sezgi kullanıldığında, f(n') = g(n') + h(n') = g(n) + c(n,a,n') + h(n') ≥ g(n) + h(n) = f(n) eşitsizliği sağlanır. Bu, f(n) değerlerinin herhangi bir yol boyunca azalmadığı (non-decreasing) anlamına gelir.",
        wrongExplanations: [
            { option: "A", reason: "Her zaman artmaz, bazen sabit kalabilir veya eşit olabilir." },
            { option: "B", reason: "Azalmaz, artmayan (non-decreasing) ama sabit de değil." },
            { option: "D", reason: "Rastgele değil, tutarlılık kurallarına göre artmayan." },
            { option: "E", reason: "Sabit kalmaz, artmayan ama değişebilir." }
        ]
    },
    {
        question: "Local Beam Search'te, eğer k = 1 ise algoritma hangi algoritmaya dönüşür?",
        options: [
            "Hill Climbing",
            "A* Search",
            "Breadth-First Search",
            "Depth-First Search",
            "Uniform-Cost Search"
        ],
        correctAnswer: "A",
        explanation: "Local Beam Search'te k = 1 ise, aynı anda sadece bir durum takip edilir. Bu durumda algoritma Hill Climbing'e dönüşür çünkü sadece mevcut durumun en iyi ardılını seçer.",
        wrongExplanations: [
            { option: "B", reason: "A* Search farklı bir algoritma, k=1 durumu Hill Climbing'dir." },
            { option: "C", reason: "BFS farklı mantık (genişlik öncelikli), k=1 Hill Climbing." },
            { option: "D", reason: "DFS farklı mantık (derinlik öncelikli), k=1 Hill Climbing." },
            { option: "E", reason: "UCS farklı mantık (maliyet öncelikli), k=1 Hill Climbing." }
        ]
    }
];

// Export questions for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = questions;
}

