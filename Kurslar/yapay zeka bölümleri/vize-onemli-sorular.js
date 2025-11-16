// Yapay Zekâ Dersi - Vize için Önemli Sorular
// ÖNEMLİ: Bu dosya vize sınavı için kritik konuları kapsayan zor sorular içerir
// Konular: Algoritma Hesaplamaları, Ortam Özellikleri, Ajan Türleri, DFS/BFS Tree-Graph

const questions = [
    {
        question: "BFS algoritmasını aşağıdaki grafik üzerinde çalıştırdığımızda, A düğümünden F düğümüne ulaşmak için kaç düğüm genişletilir?\n\n(Tüm kenarlar 1 birim maliyete sahip. Eşitlik durumunda sol-önce (left-first) sıralama kullanılır: B önce C'den gelir.)",
        diagram: `<svg width="500" height="450" style="max-width: 100%; height: auto; border: 2px solid #667eea; border-radius: 10px; background: white; padding: 20px;">
            <!-- Düğümler -->
            <!-- A (Başlangıç) -->
            <circle cx="250" cy="50" r="30" fill="#667eea" stroke="#fff" stroke-width="3"/>
            <text x="250" y="58" text-anchor="middle" fill="white" font-size="22" font-weight="bold">A</text>
            
            <!-- B, C (Seviye 1) -->
            <circle cx="180" cy="150" r="28" fill="#48bb78" stroke="#fff" stroke-width="3"/>
            <text x="180" y="158" text-anchor="middle" fill="white" font-size="20" font-weight="bold">B</text>
            
            <circle cx="320" cy="150" r="28" fill="#48bb78" stroke="#fff" stroke-width="3"/>
            <text x="320" y="158" text-anchor="middle" fill="white" font-size="20" font-weight="bold">C</text>
            
            <!-- D, E (Seviye 2) -->
            <!-- D تحت C مباشرة -->
            <circle cx="320" cy="270" r="26" fill="#ed8936" stroke="#fff" stroke-width="2"/>
            <text x="320" y="278" text-anchor="middle" fill="white" font-size="18" font-weight="bold">D</text>
            
            <!-- E تحت B مباشرة -->
            <circle cx="180" cy="270" r="26" fill="#ed8936" stroke="#fff" stroke-width="2"/>
            <text x="180" y="278" text-anchor="middle" fill="white" font-size="18" font-weight="bold">E</text>
            
            <!-- F (Hedef - Seviye 3) -->
            <circle cx="250" cy="380" r="30" fill="#9f7aea" stroke="#fff" stroke-width="3"/>
            <text x="250" y="388" text-anchor="middle" fill="white" font-size="22" font-weight="bold">F</text>
            
            <!-- Oklar -->
            <!-- A → B -->
            <path d="M 235 75 L 190 130" stroke="#2d3748" stroke-width="3" fill="none" marker-end="url(#arrowhead3)"/>
            <!-- A → C -->
            <path d="M 265 75 L 310 130" stroke="#2d3748" stroke-width="3" fill="none" marker-end="url(#arrowhead3)"/>
            <!-- B → E -->
            <path d="M 180 178 L 180 244" stroke="#2d3748" stroke-width="3" fill="none" marker-end="url(#arrowhead3)"/>
            <!-- B → D -->
            <path d="M 200 175 L 300 244" stroke="#2d3748" stroke-width="3" fill="none" marker-end="url(#arrowhead3)"/>
            <!-- C → D -->
            <path d="M 320 178 L 320 244" stroke="#2d3748" stroke-width="3" fill="none" marker-end="url(#arrowhead3)"/>
            <!-- C → F -->
            <path d="M 320 178 L 280 350" stroke="#2d3748" stroke-width="3" fill="none" marker-end="url(#arrowhead3)"/>
            <!-- D → F -->
            <path d="M 320 296 L 280 350" stroke="#2d3748" stroke-width="3" fill="none" marker-end="url(#arrowhead3)"/>
            <!-- E → F -->
            <path d="M 180 296 L 230 350" stroke="#2d3748" stroke-width="3" fill="none" marker-end="url(#arrowhead3)"/>
            
            <!-- Maliyet etiketleri -->
            <text x="212" y="110" fill="#e53e3e" font-size="14" font-weight="bold">1</text>
            <text x="288" y="110" fill="#e53e3e" font-size="14" font-weight="bold">1</text>
            <text x="175" y="210" fill="#e53e3e" font-size="14" font-weight="bold">1</text>
            <text x="250" y="210" fill="#e53e3e" font-size="14" font-weight="bold">1</text>
            <text x="315" y="210" fill="#e53e3e" font-size="14" font-weight="bold">1</text>
            <text x="300" y="230" fill="#e53e3e" font-size="14" font-weight="bold">1</text>
            <text x="315" y="295" fill="#e53e3e" font-size="14" font-weight="bold">1</text>
            <text x="205" y="325" fill="#e53e3e" font-size="14" font-weight="bold">1</text>
            <text x="230" y="325" fill="#e53e3e" font-size="14" font-weight="bold">1</text>
            
            <!-- Ok başlığı -->
            <defs>
                <marker id="arrowhead3" markerWidth="12" markerHeight="12" refX="10" refY="4" orient="auto">
                    <polygon points="0 0, 12 4, 0 8" fill="#2d3748"/>
                </marker>
            </defs>
        </svg>`,
        options: [
            "4 düğüm (A, B, C, D) genişletilir ve F bulunur",
            "5 düğüm (A, B, C, D, E) genişletilir ve F bulunur",
            "6 düğüm (A, B, C, D, E, F) genişletilir - optimal olmayan bir çözüm bulunur",
            "3 düğüm (A, B, C) genişletilir ve F hemen bulunur",
            "4 düğüm genişletilir ancak tüm seviye 2 düğümleri (D, E, F) kontrol edilir"
        ],
        correctAnswer: "D",
        explanation: "BFS algoritmasında hedef testi (goal test) genellikle düğüm kuyruğa eklendiğinde yapılır (early goal test). Adım adım: Seviye 0: A genişletilir → B (sol, önce), C (sağ) kuyruğa eklenir (1 düğüm: A). Kuyruk: [B, C]. Seviye 1: B genişletilir (B önce gelir çünkü sol-önce sıralama) → E (sol, B'nin altında direkt), D (sağ, B'den D'ye) kuyruğa eklenir (2. düğüm: B). Sol-önce sıralama: E önce (sol), sonra D (sağ). Kuyruk: [C, E, D]. C genişletilir → D (zaten var, duplicate control), F kuyruğa eklenir (3. düğüm: C). Kuyruk: [E, D, F]. F kuyruğa eklendiğinde hedef testi yapılır: F hedef mi? EVET! BFS durur. Toplam 3 düğüm (A, B, C) genişletilir. Not: Eğer hedef testi genişletme anında yapılırsa (late goal test), E genişletildiğinde F bulunur (E → F) ve 4 düğüm genişletilir. Ama standart BFS implementasyonunda hedef testi genellikle düğüm kuyruğa eklendiğinde yapılır.",
        wrongExplanations: [
            { option: "A", reason: "4 düğüm sadece eğer late goal test kullanılırsa (hedef testi genişletme anında yapılırsa). Ama standart BFS'te early goal test kullanılır (hedef testi ekleme anında yapılır) ve 3 düğüm yeterlidir." },
            { option: "B", reason: "E düğümü genişletilmez çünkü F, C genişletildiğinde kuyruğa eklendiğinde bulunur (early goal test) ve BFS durur. E henüz kuyruktadır ama sırası gelmeden önce hedef bulunur." },
            { option: "C", reason: "F bulunduğunda BFS durur, tüm düğümler genişletilmez. Ayrıca BFS optimal çözüm bulur (birim adım maliyetleri için)." },
            { option: "E", reason: "BFS seviye 1'de C genişletildiğinde F bulunur (early goal test) ve durur. D, E, F genişletilmez." }
        ]
    },
    {
        question: "Aşağıdaki ağaç yapısında DFS (Depth-First Search) algoritmasını sol-önce (left-first) çalıştırdığımızda, hangi sırayla düğümler ziyaret edilir?",
        diagram: `<svg width="600" height="450" style="max-width: 100%; height: auto; border: 2px solid #667eea; border-radius: 10px; background: white; padding: 20px;">
            <!-- Düğümler -->
            <circle cx="300" cy="60" r="28" fill="#667eea" stroke="#fff" stroke-width="3"/>
            <text x="300" y="68" text-anchor="middle" fill="white" font-size="20" font-weight="bold">A</text>
            
            <circle cx="150" cy="150" r="25" fill="#48bb78" stroke="#fff" stroke-width="2"/>
            <text x="150" y="157" text-anchor="middle" fill="white" font-size="18" font-weight="bold">B</text>
            
            <circle cx="300" cy="150" r="25" fill="#48bb78" stroke="#fff" stroke-width="2"/>
            <text x="300" y="157" text-anchor="middle" fill="white" font-size="18" font-weight="bold">C</text>
            
            <circle cx="450" cy="150" r="25" fill="#48bb78" stroke="#fff" stroke-width="2"/>
            <text x="450" y="157" text-anchor="middle" fill="white" font-size="18" font-weight="bold">D</text>
            
            <circle cx="100" cy="250" r="22" fill="#ed8936" stroke="#fff" stroke-width="2"/>
            <text x="100" y="257" text-anchor="middle" fill="white" font-size="16" font-weight="bold">E</text>
            
            <circle cx="200" cy="250" r="22" fill="#ed8936" stroke="#fff" stroke-width="2"/>
            <text x="200" y="257" text-anchor="middle" fill="white" font-size="16" font-weight="bold">F</text>
            
            <circle cx="250" cy="250" r="22" fill="#ed8936" stroke="#fff" stroke-width="2"/>
            <text x="250" y="257" text-anchor="middle" fill="white" font-size="16" font-weight="bold">G</text>
            
            <circle cx="350" cy="250" r="22" fill="#ed8936" stroke="#fff" stroke-width="2"/>
            <text x="350" y="257" text-anchor="middle" fill="white" font-size="16" font-weight="bold">H</text>
            
            <circle cx="450" cy="250" r="22" fill="#ed8936" stroke="#fff" stroke-width="2"/>
            <text x="450" y="257" text-anchor="middle" fill="white" font-size="16" font-weight="bold">I</text>
            
            <circle cx="200" cy="350" r="20" fill="#9f7aea" stroke="#fff" stroke-width="2"/>
            <text x="200" y="357" text-anchor="middle" fill="white" font-size="14" font-weight="bold">J</text>
            
            <circle cx="350" cy="350" r="20" fill="#9f7aea" stroke="#fff" stroke-width="2"/>
            <text x="350" y="357" text-anchor="middle" fill="white" font-size="14" font-weight="bold">K</text>
            
            <!-- Oklar -->
            <path d="M 285 85 L 165 128" stroke="#2d3748" stroke-width="2" fill="none" marker-end="url(#arrowhead4)"/>
            <path d="M 300 85 L 300 128" stroke="#2d3748" stroke-width="2" fill="none" marker-end="url(#arrowhead4)"/>
            <path d="M 315 85 L 435 128" stroke="#2d3748" stroke-width="2" fill="none" marker-end="url(#arrowhead4)"/>
            
            <path d="M 140 175 L 110 228" stroke="#2d3748" stroke-width="2" fill="none" marker-end="url(#arrowhead4)"/>
            <path d="M 160 175 L 190 228" stroke="#2d3748" stroke-width="2" fill="none" marker-end="url(#arrowhead4)"/>
            <path d="M 290 175 L 250 228" stroke="#2d3748" stroke-width="2" fill="none" marker-end="url(#arrowhead4)"/>
            <path d="M 310 175 L 340 228" stroke="#2d3748" stroke-width="2" fill="none" marker-end="url(#arrowhead4)"/>
            <path d="M 450 175 L 450 228" stroke="#2d3748" stroke-width="2" fill="none" marker-end="url(#arrowhead4)"/>
            
            <path d="M 200 272 L 200 330" stroke="#2d3748" stroke-width="2" fill="none" marker-end="url(#arrowhead4)"/>
            <path d="M 350 272 L 350 330" stroke="#2d3748" stroke-width="2" fill="none" marker-end="url(#arrowhead4)"/>
            
            <!-- Ok başlığı -->
            <defs>
                <marker id="arrowhead4" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                    <polygon points="0 0, 10 3, 0 6" fill="#2d3748"/>
                </marker>
            </defs>
        </svg>`,
        options: [
            "A, B, E, F, J, C, G, H, K, D, I",
            "A, B, C, D, E, F, G, H, I, J, K",
            "A, D, I, C, H, K, G, B, F, J, E",
            "A, B, E, F, J, C, H, K, G, D, I",
            "A, C, G, H, K, B, E, F, J, D, I"
        ],
        correctAnswer: "A",
        explanation: "DFS sol-önce çalıştığında: A (başlangıç) → B (A'nın ilk çocuğu) → E (B'nin ilk çocuğu) → F (B'nin ikinci çocuğu) → J (F'nin çocuğu) → Geri dön → C (A'nın ikinci çocuğu) → G (C'nin ilk çocuğu) → H (C'nin ikinci çocuğu) → K (H'nin çocuğu) → Geri dön → D (A'nın üçüncü çocuğu) → I (D'nin çocuğu).",
        wrongExplanations: [
            { option: "B", reason: "Bu BFS sıralamasıdır (seviye seviye), DFS değildir." },
            { option: "C", reason: "Bu sağ-önce DFS sıralamasıdır, sol-önce değildir." },
            { option: "D", reason: "C'den önce H ve K gelmez, önce G gelmelidir (C'nin sol çocuğu)." },
            { option: "E", reason: "A'dan sonra B gelmelidir (A'nın sol çocuğu), C değil." }
        ]
    },
    {
        question: "Bir arama ağacında (search tree) dallanma faktörü (branching factor) b=3, maksimum derinlik m=5 ise, BFS algoritmasının en kötü durumdaki zaman karmaşıklığı nedir? (Çözüm derinliği d=4 olduğunu varsayalım)",
        options: [
            "O(3^5) = O(243) - çünkü maksimum derinlik kadar düğüm genişletilir",
            "O(3^4) = O(81) - çünkü çözüm derinliği d=4 kadar düğüm genişletilir",
            "O(3*5) = O(15) - çünkü her seviyede b düğüm ve m seviye vardır",
            "O(5^3) = O(125) - çünkü derinlik üzeri dallanma faktörü hesaplanır",
            "O(3+4+5) = O(12) - çünkü toplam seviye sayısı kadar düğüm işlenir"
        ],
        correctAnswer: "B",
        explanation: "BFS'in zaman karmaşıklığı O(b^d) formülü ile ifade edilir. Burada b=dallanma faktörü=3, d=çözüm derinliği=4'tür. Maksimum derinlik m=5 kullanılmaz çünkü çözüm d=4 derinliğinde bulunur. Dolayısıyla O(3^4) = O(81) düğüm genişletilir. Not: Bu hesaplama sadece çözüm derinliğine kadar olan düğümleri içerir.",
        wrongExplanations: [
            { option: "A", reason: "Maksimum derinlik m kullanılmaz, çözüm derinliği d kullanılır çünkü BFS çözümü bulduğunda durur." },
            { option: "C", reason: "Zaman karmaşıklığı b*m çarpımı değil, b^d üstel fonksiyondur." },
            { option: "D", reason: "Formül d^b değil, b^d'dir (dallanma faktörü üzeri derinlik)." },
            { option: "E", reason: "Toplama işlemi yoktur, üstel fonksiyon vardır: b^d." }
        ]
    },
    {
        question: "Bir ortamda, ajanın bir eylemi gerçekleştirdikten sonra ortamın yeni durumunu algılaması mümkün değilse, ancak eylem sonuçlarını önceden tahmin edebiliyorsa, bu ortam için hangi özellik kombinasyonu doğrudur?",
        options: [
            "Gözlemlenebilir (Observable) ve Deterministik - çünkü sonuçlar tahmin edilebilir",
            "Kısmen Gözlemlenebilir (Partially Observable) ve Stokastik - çünkü algılama mümkün değil",
            "Kısmen Gözlemlenebilir (Partially Observable) ve Deterministik - çünkü sonuçlar tahmin edilebilir ama algılama yapılamaz",
            "Gözlemlenemez (Unobservable) ve Deterministik - çünkü hiçbir şey algılanamaz",
            "Gözlemlenebilir (Observable) ama Non-Deterministik - çünkü algılama eylem sonrası yapılamaz"
        ],
        correctAnswer: "C",
        explanation: "Ortam kısmen gözlemlenebilirdir çünkü ajan eylem sonrası durumu algılayamaz (tam gözlemlenebilir değildir). Ancak deterministiktir çünkü eylem sonuçları tahmin edilebilir ve belirli bir girdiye belirli bir çıktı verir. Örnek: Satranç oyununda hamle sonrası tüm tahtayı göremeyen ama hamle sonuçlarını hesaplayabilen ajan.",
        wrongExplanations: [
            { option: "A", reason: "Tam gözlemlenebilir değildir çünkü eylem sonrası durum algılanamaz." },
            { option: "B", reason: "Stokastik değildir çünkü sonuçlar tahmin edilebilir ve belirli (deterministik)." },
            { option: "D", reason: "Tamamen gözlemlenemez değildir çünkü başlangıç durumu veya bazı bilgiler algılanabilir." },
            { option: "E", reason: "Non-deterministik değildir, deterministiktir çünkü sonuçlar tahmin edilebilir." }
        ]
    },
    {
        question: "Bir ortamın 'Episodic' (Bölümlü) olması ne anlama gelir ve hangi durumda bu özellik avantaj sağlar?",
        options: [
            "Episodic ortam, sürekli değişen dinamik ortamdır ve gerçek zamanlı karar vermeyi gerektirir - bu avantaj sağlar çünkü adaptasyon gerektirmez",
            "Episodic ortam, eylemlerin bağımsız bölümlere ayrıldığı ortamdır ve her bölüm bir öncekinden bağımsızdır - bu avantaj sağlar çünkü geçmiş deneyimleri hatırlamaya gerek yoktur",
            "Episodic ortam, tüm eylemlerin aynı anda gerçekleştiği eşzamanlı ortamdır - bu avantaj sağlar çünkü paralel işleme yapılabilir",
            "Episodic ortam, eylemlerin sıralı olarak gerçekleştiği sequential ortamdır - bu avantaj sağlar çünkü planlama kolaydır",
            "Episodic ortam, belirsizlik içeren stokastik ortamdır - bu avantaj sağlar çünkü çeşitlilik yaratır"
        ],
        correctAnswer: "B",
        explanation: "Episodic (bölümlü) ortam, ajanın deneyiminin bağımsız bölümlere ayrıldığı ortamdır. Her bölüm (episode) bir öncekinden bağımsızdır ve ajanın bir bölümdeki performansı diğer bölümleri etkilemez. Bu avantaj sağlar çünkü: (1) Geçmiş bölümleri hatırlamaya gerek yoktur, (2) Her bölüm bağımsız olarak değerlendirilebilir, (3) Öğrenme algoritmaları daha basit olabilir. Örnek: Oyun oynama, her oyun bir episode'dur.",
        wrongExplanations: [
            { option: "A", reason: "Bu sequential (sıralı) ortamın özelliğidir, episodic değildir." },
            { option: "C", reason: "Eşzamanlı ortam episodic tanımına uymaz, episodic bağımsız bölümlerden bahseder." },
            { option: "D", reason: "Sequential ortam episodic değildir, episodic bağımsız bölümler gerektirir." },
            { option: "E", reason: "Stokastik ortam episodic tanımı değildir, episodic deterministik veya stokastik olabilir ama bağımsız bölümler önemlidir." }
        ]
    },
    {
        question: "Aşağıdaki ajan türlerinden hangisi, hem ortamın mevcut durumunu hem de geçmiş durumları içeren bir model tutar ve bu modeli kullanarak eylem seçer?",
        options: [
            "Basit Refleks Ajanı (Simple Reflex Agent) - çünkü doğrudan algıya tepki verir",
            "Model-Bazlı Refleks Ajanı (Model-Based Reflex Agent) - çünkü ortam modeli tutar ve geçmiş bilgileri kullanır",
            "Hedefe-Dayalı Ajan (Goal-Based Agent) - çünkü hedefe ulaşmak için model gerekir",
            "Fayda-Tabanlı Ajan (Utility-Based Agent) - çünkü fayda hesaplamak için model gerekir",
            "Öğrenmeye-Dayalı Ajan (Learning Agent) - çünkü sadece öğrenme için model tutar"
        ],
        correctAnswer: "B",
        explanation: "Model-Bazlı Refleks Ajanı (Model-Based Reflex Agent), ortamın nasıl çalıştığına dair bir model tutar. Bu model, mevcut durumun yanı sıra geçmiş durumları ve eylemleri de içerebilir. Ajan, bu modeli kullanarak eylem sonuçlarını tahmin eder ve daha iyi kararlar verebilir. Örnek: Ortamı tam gözlemleyemeyen ama geçmiş deneyimlerden öğrenen ajan.",
        wrongExplanations: [
            { option: "A", reason: "Basit Refleks Ajanı model tutmaz, sadece mevcut algıya doğrudan tepki verir." },
            { option: "C", reason: "Hedefe-Dayalı Ajan model tutabilir ama tanımda geçmiş durumları içeren model özellikle Model-Bazlı Refleks Ajanına aittir." },
            { option: "D", reason: "Fayda-Tabanlı Ajan model kullanabilir ama soru özellikle geçmiş durumları tutan modelden bahsediyor ki bu Model-Bazlı Refleks Ajanının özelliğidir." },
            { option: "E", reason: "Öğrenmeye-Dayalı Ajan model tutabilir ama soru özellikle geçmiş durumları tutan refleks ajanından bahsediyor." }
        ]
    },
    {
        question: "Aşağıdaki grafik yapısında (Graph Search) DFS algoritması çalıştırıldığında, aşağıdaki hangi durum oluşur?\n\nA'dan D'ye ulaşmaya çalışıyoruz. Not: Graph Search ziyaret edilen düğümleri takip eder (visited set).",
        diagram: `<svg width="400" height="300" style="max-width: 100%; height: auto; border: 2px solid #667eea; border-radius: 10px; background: white; padding: 20px;">
            <!-- Düğümler -->
            <circle cx="100" cy="80" r="25" fill="#667eea" stroke="#fff" stroke-width="2"/>
            <text x="100" y="87" text-anchor="middle" fill="white" font-size="18" font-weight="bold">A</text>
            
            <circle cx="200" cy="50" r="25" fill="#48bb78" stroke="#fff" stroke-width="2"/>
            <text x="200" y="57" text-anchor="middle" fill="white" font-size="18" font-weight="bold">B</text>
            
            <circle cx="200" cy="130" r="25" fill="#48bb78" stroke="#fff" stroke-width="2"/>
            <text x="200" y="137" text-anchor="middle" fill="white" font-size="18" font-weight="bold">C</text>
            
            <circle cx="300" cy="90" r="25" fill="#ed8936" stroke="#fff" stroke-width="2"/>
            <text x="300" y="97" text-anchor="middle" fill="white" font-size="18" font-weight="bold">D</text>
            
            <!-- Oklar -->
            <path d="M 120 75 L 180 55" stroke="#2d3748" stroke-width="2" fill="none" marker-end="url(#arrowhead)"/>
            <path d="M 120 95 L 180 125" stroke="#2d3748" stroke-width="2" fill="none" marker-end="url(#arrowhead)"/>
            <path d="M 220 65 L 280 75" stroke="#2d3748" stroke-width="2" fill="none" marker-end="url(#arrowhead)"/>
            <path d="M 220 115 L 280 105" stroke="#2d3748" stroke-width="2" fill="none" marker-end="url(#arrowhead)"/>
            <path d="M 300 65 Q 350 60 350 80 Q 350 100 325 100 Q 325 120 280 120" stroke="#e53e3e" stroke-width="2" fill="none" marker-end="url(#arrowhead)" stroke-dasharray="5,5"/>
            
            <!-- Ok başlığı -->
            <defs>
                <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                    <polygon points="0 0, 10 3, 0 6" fill="#2d3748"/>
                </marker>
            </defs>
        </svg>`,
        options: [
            "DFS sonsuz döngüye girer çünkü A→B→D→A→B→D... döngüsü oluşur - eğer visited set düzgün çalışmazsa veya implementasyon hatası varsa",
            "DFS sadece 2-3 düğüm genişletir ve D'yi bulur - visited set ile döngü önlenir",
            "DFS sadece 3 düğüm (A, B, C) genişletir çünkü C'den D'ye direkt kenar vardır",
            "DFS 4 düğüm (A, B, C, D) genişletir ama döngü oluşmaz çünkü DFS tree search kullanır",
            "DFS sonsuz döngüye girer çünkü grafik arama değil tree search kullanılmalıdır"
        ],
        correctAnswer: "B",
        explanation: "Graph Search'te DFS kullanıldığında, ziyaret edilen düğümleri (visited set) takip etmek kritiktir ve visited set VAR. Adım adım: A genişletilir → B, C stack'e eklenir. visited: {A}. B genişletilir (sol-önce) → D stack'e eklenir. visited: {A, B}. D genişletilir → D'den A'ya kenar var ama A zaten visited! A stack'e eklenmez. D hedef bulundu! DFS durur. visited: {A, B, D}. Toplam 2-3 düğüm genişletilir (A, B, D veya A, C, D). Döngü oluşmaz çünkü visited set ile ziyaret edilen düğümler tekrar işlenmez. Not: Eğer visited set yoksa (Tree Search), sonsuz döngü oluşur: A→B→D→A→B→D...",
        wrongExplanations: [
            { option: "A", reason: "Graph Search'te visited set VAR ve döngü önlenir. Sonsuz döngü sadece visited set yoksa (Tree Search) veya implementasyon hatası varsa oluşur." },
            { option: "C", reason: "C'den D'ye direkt kenar var ama DFS sol-önce ise önce B genişletilir. Ayrıca Graph Search'te visited set ile döngü sorunu yoktur." },
            { option: "D", reason: "Graph Search kullanılır (visited set ile), Tree Search değil. Tree Search kullanılırsa döngü oluşur ama burada Graph Search var." },
            { option: "E", reason: "Tam tersi: Graph Search (visited set ile) döngüyü önler, Tree Search döngüye girer. Burada Graph Search kullanılıyor." }
        ]
    },
    {
        question: "Bir arama probleminde, hedef durumuna ulaşmak için 3 farklı yol vardır. Yol 1: 5 adım, maliyet 10. Yol 2: 4 adım, maliyet 8. Yol 3: 6 adım, maliyet 7. Uniform Cost Search (UCS) algoritması hangi yolu seçer ve neden?",
        options: [
            "Yol 1'i seçer çünkü adım sayısı en azdır (5 adım)",
            "Yol 2'yi seçer çünkü hem adım sayısı (4) hem de maliyet (8) dengelidir",
            "Yol 3'ü seçer çünkü maliyet en düşüktür (7) - UCS maliyeti optimize eder, adım sayısını değil",
            "Yol 1'i seçer çünkü maliyet/adım oranı en iyidir (10/5=2)",
            "Yol 2'yi seçer çünkü toplam değer (adım+maliyet) en düşüktür (4+8=12)"
        ],
        correctAnswer: "C",
        explanation: "Uniform Cost Search (UCS) algoritması, adım sayısını değil, yol maliyetini (path cost) optimize eder. UCS, en düşük maliyetli yolu seçer. Bu durumda: Yol 1 maliyet=10, Yol 2 maliyet=8, Yol 3 maliyet=7. Yol 3 en düşük maliyete (7) sahip olduğu için UCS onu seçer. UCS, öncelik kuyruğu kullanır ve düğümleri maliyetlerine göre sıralar.",
        wrongExplanations: [
            { option: "A", reason: "UCS adım sayısını optimize etmez, maliyeti optimize eder. 5 adım yerine 7 maliyet tercih edilir." },
            { option: "B", reason: "UCS denge aramaz, sadece en düşük maliyeti arar. 8 maliyet yerine 7 daha iyidir." },
            { option: "D", reason: "UCS maliyet/adım oranına bakmaz, sadece toplam maliyete bakar." },
            { option: "E", reason: "UCS adım sayısı ve maliyeti toplamaz, sadece maliyeti optimize eder." }
        ]
    },
    {
        question: "A* algoritmasında f(n) = g(n) + h(n) formülü kullanılır. Eğer h(n) heuristiği 'admissible' (kabul edilebilir) değilse, yani bazı düğümler için h(n) > h*(n) ise (h*(n) gerçek optimal maliyet), A* algoritması ne garantisi verir?",
        options: [
            "A* hala optimal çözümü garanti eder çünkü g(n) gerçek maliyeti içerir",
            "A* optimal çözümü garanti edemez ama tamdır (complete) - çözüm varsa bulur",
            "A* ne optimal ne de tamdır - heuristik yanlış olduğu için yanlış yollar seçebilir",
            "A* optimal değildir ama heuristik değerleri düzeltilirse optimal olur",
            "A* sadece tutarlı (consistent) heuristiklerle çalışır, admissible olmayan heuristiklerle çalışmaz"
        ],
        correctAnswer: "B",
        explanation: "A* algoritması, admissible (kabul edilebilir) heuristik kullanıldığında optimaldir (en kısa/ucuz yolu bulur). Ancak admissible olmayan heuristik kullanılırsa: (1) Optimal garanti edilemez - çünkü h(n) > h*(n) olduğunda, A* yanlış düğümleri önceliklendirebilir, (2) Tam (complete) kalır - çünkü A* tüm düğümleri genişletir ve çözüm varsa bulur (sonsuz döngü olmadığı sürece). Örnek: h(n) çok yüksekse, A* optimal olmayan ama çalışan bir çözüm bulabilir.",
        wrongExplanations: [
            { option: "A", reason: "Admissible olmayan heuristik kullanıldığında optimal garanti edilemez, çünkü yanlış düğümler önceliklendirilebilir." },
            { option: "C", reason: "A* hala tamdır (complete), çözüm varsa bulur, sadece optimal değildir." },
            { option: "D", reason: "Heuristik değerleri düzeltilmesi gerekir ama algoritma çalışmaya devam eder, sadece optimal değildir." },
            { option: "E", reason: "A* admissible olmayan heuristiklerle de çalışır, sadece optimal garanti vermez." }
        ]
    },
    {
        question: "Bir ortamın 'Static' (Statik) olması ne anlama gelir ve 'Semi-Static' (Yarı-Statik) ortamdan farkı nedir?",
        options: [
            "Static ortam hiç değişmez, Semi-Static ortam sadece ajanın eylemleriyle değişir - ikisi de aynı anlama gelir",
            "Static ortam ajan eylem beklerken değişmez, Semi-Static ortam ise ajan eylem beklerken de değişebilir ama değişimler yavaştır - ajan planlama yapabilir",
            "Static ortam sürekli değişir, Semi-Static ortam nadiren değişir - ikisi de dinamiktir",
            "Static ortam deterministiktir, Semi-Static ortam stokastiktir - fark budur",
            "Static ortam gözlemlenebilir, Semi-Static ortam kısmen gözlemlenebilir - fark budur"
        ],
        correctAnswer: "B",
        explanation: "Static (Statik) ortam: Ajan eylem beklerken ortam değişmez. Bu, ajanın planlama yapmasını ve planı uygulamasını kolaylaştırır. Örnek: Labirent çözme, ajan plan yaparken labirent değişmez. Semi-Static (Yarı-Statik) ortam: Ajan eylem beklerken ortam değişebilir, ancak değişimler yavaştır. Ajan hala planlama yapabilir çünkü değişimler planlama süresinden daha yavaştır. Örnek: Trafik simülasyonu, araçlar yavaş hareket eder.",
        wrongExplanations: [
            { option: "A", reason: "İkisi aynı değildir. Static'te değişim yok, Semi-Static'te yavaş değişim vardır." },
            { option: "C", reason: "Static ortam sürekli değişmez, değişim yoktur veya sadece ajan eylemleriyle olur." },
            { option: "D", reason: "Static/Semi-Static deterministik/stokastik ile ilgili değildir, değişim hızıyla ilgilidir." },
            { option: "E", reason: "Static/Semi-Static gözlemlenebilirlik ile ilgili değildir, değişim hızıyla ilgilidir." }
        ]
    },
    {
        question: "DFS algoritmasını tree search olarak (visited set olmadan) çalıştırdığımızda, aşağıdaki döngülü grafikte A'dan E'ye ulaşmak için ne olur?",
        diagram: `<svg width="450" height="320" style="max-width: 100%; height: auto; border: 2px solid #667eea; border-radius: 10px; background: white; padding: 20px;">
            <!-- Düğümler -->
            <circle cx="100" cy="80" r="25" fill="#667eea" stroke="#fff" stroke-width="2"/>
            <text x="100" y="87" text-anchor="middle" fill="white" font-size="18" font-weight="bold">A</text>
            
            <circle cx="200" cy="50" r="25" fill="#48bb78" stroke="#fff" stroke-width="2"/>
            <text x="200" y="57" text-anchor="middle" fill="white" font-size="18" font-weight="bold">B</text>
            
            <circle cx="200" cy="130" r="25" fill="#48bb78" stroke="#fff" stroke-width="2"/>
            <text x="200" y="137" text-anchor="middle" fill="white" font-size="18" font-weight="bold">C</text>
            
            <circle cx="300" cy="90" r="25" fill="#ed8936" stroke="#fff" stroke-width="2"/>
            <text x="300" y="97" text-anchor="middle" fill="white" font-size="18" font-weight="bold">D</text>
            
            <circle cx="400" cy="90" r="25" fill="#9f7aea" stroke="#fff" stroke-width="2"/>
            <text x="400" y="97" text-anchor="middle" fill="white" font-size="18" font-weight="bold">E</text>
            
            <!-- Oklar -->
            <path d="M 120 75 L 180 55" stroke="#2d3748" stroke-width="2" fill="none" marker-end="url(#arrowhead2)"/>
            <path d="M 120 95 L 180 125" stroke="#2d3748" stroke-width="2" fill="none" marker-end="url(#arrowhead2)"/>
            <path d="M 220 65 L 280 75" stroke="#2d3748" stroke-width="2" fill="none" marker-end="url(#arrowhead2)"/>
            <path d="M 220 115 L 280 105" stroke="#2d3748" stroke-width="2" fill="none" marker-end="url(#arrowhead2)"/>
            <path d="M 300 65 Q 350 60 350 80 Q 350 100 325 100 Q 325 120 280 120" stroke="#e53e3e" stroke-width="2" fill="none" marker-end="url(#arrowhead2)" stroke-dasharray="5,5"/>
            <path d="M 320 90 L 375 90" stroke="#2d3748" stroke-width="2" fill="none" marker-end="url(#arrowhead2)"/>
            
            <!-- Ok başlığı -->
            <defs>
                <marker id="arrowhead2" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                    <polygon points="0 0, 10 3, 0 6" fill="#2d3748"/>
                </marker>
            </defs>
        </svg>`,
        options: [
            "DFS sonsuz döngüye girer: A→B→D→A→B→D... ve E asla bulunamaz",
            "DFS 4 düğüm (A, B, D, E) genişletir ve E'yi bulur, döngü oluşmaz çünkü DFS derinlemesine gider",
            "DFS 5 düğüm (A, B, C, D, E) genişletir ve E'yi bulur, döngü sorunu yoktur",
            "DFS sonsuz döngüye girer ama şans eseri E bulunabilir eğer stack sırası doğruysa",
            "DFS tree search olduğu için döngü oluşmaz, sadece graph search'te döngü oluşur"
        ],
        correctAnswer: "A",
        explanation: "Tree Search'te visited set (ziyaret edilen düğümler listesi) yoktur. Bu durumda: A genişletilir → B, C stack'e eklenir. B genişletilir → D stack'e eklenir. D genişletilir → A (tekrar!), E stack'e eklenir. A tekrar genişletilir → B, C tekrar eklenir... Sonsuz döngü! E stack'te kalır ama asla işlenemez çünkü sürekli A→B→D→A döngüsü tekrarlanır. Graph Search'te visited set ile A tekrar işlenmez ve döngü önlenir.",
        wrongExplanations: [
            { option: "B", reason: "Tree search'te döngü oluşur, E bulunamaz çünkü sürekli A→B→D→A tekrarlanır." },
            { option: "C", reason: "Tree search'te visited set olmadığı için döngü oluşur, tüm düğümler tekrar tekrar işlenir." },
            { option: "D", reason: "Stack sırası önemli değildir, A→B→D→A döngüsü her zaman oluşur ve E asla işlenemez." },
            { option: "E", reason: "Tam tersi: Tree search'te döngü oluşur (visited set yok), graph search'te döngü önlenir (visited set var)." }
        ]
    },
    {
        question: "BFS algoritmasının alan (space) karmaşıklığı O(b^d) dir. Bu karmaşıklığın pratik anlamı nedir ve hangi durumda BFS kullanılmamalıdır?",
        options: [
            "BFS her zaman kullanılabilir çünkü zaman karmaşıklığı düşüktür - alan karmaşıklığı önemli değildir",
            "BFS alan karmaşıklığı yüksektir çünkü tüm seviyelerdeki düğümleri bellekte tutar - dallanma faktörü yüksek ve derinlik büyükse bellek sorunu oluşur, bu durumda IDS veya DFS tercih edilmelidir",
            "BFS alan karmaşıklığı düşüktür çünkü sadece mevcut seviyedeki düğümleri tutar - her zaman kullanılabilir",
            "BFS alan karmaşıklığı sadece çözüm derinliği ile ilgilidir, dallanma faktörü önemli değildir",
            "BFS alan karmaşıklığı O(bd) dir, O(b^d) değildir - bu nedenle her zaman verimlidir"
        ],
        correctAnswer: "B",
        explanation: "BFS'in alan karmaşıklığı O(b^d) dir. Bu, en kötü durumda b^d kadar düğümün bellekte tutulması gerektiği anlamına gelir. Pratik anlamı: (1) b=10, d=5 ise → 10^5 = 100,000 düğüm bellekte tutulur (çok fazla!), (2) b=3, d=10 ise → 3^10 = 59,049 düğüm (hala çok fazla!). BFS kullanılmamalıdır: (1) Bellek sınırlıysa, (2) Dallanma faktörü yüksekse, (3) Derinlik büyükse. Alternatif: IDS (Iterative Deepening Search) - BFS kadar optimal, DFS kadar az bellek kullanır.",
        wrongExplanations: [
            { option: "A", reason: "Alan karmaşıklığı çok önemlidir, özellikle büyük problemlerde bellek sorunu yaratır." },
            { option: "C", reason: "BFS tüm seviyelerdeki düğümleri tutar (en son seviye hariç), sadece mevcut seviye değil." },
            { option: "D", reason: "Alan karmaşıklığı hem dallanma faktörü (b) hem de derinlik (d) ile ilgilidir: O(b^d)." },
            { option: "E", reason: "BFS alan karmaşıklığı O(b^d) dir (üstel), O(bd) değildir (lineer)." }
        ]
    },
    {
        question: "Bir arama probleminde, başlangıç durumu S, hedef durumu G'dir. Arama ağacında S'den G'ye 3 farklı yol var:\nYol 1: S→A→B→G (maliyet: 2+3+1=6)\nYol 2: S→C→D→G (maliyet: 1+4+2=7)\nYol 3: S→E→F→G (maliyet: 3+2+3=8)\n\nA* algoritması h(n) heuristiği kullanıyor. Hangi durumda A* Yol 2'yi seçer (optimal olmayan)?",
        options: [
            "h(S)=0, h(A)=2, h(B)=1, h(C)=3, h(D)=2, h(E)=1, h(F)=3 heuristikleri kullanıldığında - çünkü Yol 2 için f(n) daha düşük olur",
            "A* her zaman optimal yol (Yol 1) seçer çünkü g(n) gerçek maliyeti içerir - hiçbir durumda optimal olmayan yol seçilmez",
            "h(C)=0, h(D)=0 gibi yanlış heuristikler kullanıldığında - çünkü Yol 2 yanlış şekilde düşük görünür",
            "Tüm heuristikler admissible olduğu sürece A* optimal seçer - Yol 2 seçilemez",
            "A* sadece maliyete bakmaz, adım sayısına da bakar - bu yüzden Yol 2 seçilebilir"
        ],
        correctAnswer: "C",
        explanation: "A* algoritması, admissible (h(n) ≤ h*(n)) heuristik kullanıldığında optimaldir. Ancak admissible olmayan heuristik kullanılırsa optimal olmayan yol seçilebilir. Örnek: h(C)=0, h(D)=0 kullanılırsa (gerçekte h*(C)≥3, h*(D)≥2 olmalı): Yol 2 için f(S→C→D→G) = g(1+4+2) + h(0+0+0) = 7 görünür (aslında 7). Yol 1 için f(S→A→B→G) = g(2+3+1) + h(2+1+0) = 6+3 = 9 görünür. Bu durumda A* Yol 2'yi seçer ama Yol 1 daha iyidir (6 < 7).",
        wrongExplanations: [
            { option: "A", reason: "Bu heuristikler admissible görünüyor, A* optimal seçer. Admissible olmayan heuristik gerekir." },
            { option: "B", reason: "Admissible olmayan heuristik kullanıldığında A* optimal olmayan yol seçebilir." },
            { option: "D", reason: "Admissible heuristiklerle A* optimal seçer ama admissible olmayan heuristiklerle seçemez." },
            { option: "E", reason: "A* sadece f(n)=g(n)+h(n) formülüne bakar, adım sayısını ayrıca dikkate almaz." }
        ]
    },
    {
        question: "Bir ortamın 'Discrete' (Ayrık) olması ne anlama gelir ve 'Continuous' (Sürekli) ortamdan temel farkı nedir?",
        options: [
            "Discrete ortam deterministiktir, Continuous ortam stokastiktir - fark budur",
            "Discrete ortam gözlemlenebilir, Continuous ortam kısmen gözlemlenebilir - fark budur",
            "Discrete ortam sonlu sayıda durum ve eylem içerir, Continuous ortam sonsuz sayıda durum ve eylem içerir (gerçek sayılar) - bu durumda ayrıklaştırma (discretization) gerekir",
            "Discrete ortam statiktir, Continuous ortam dinamiktir - fark budur",
            "Discrete ortam episodicdir, Continuous ortam sequentialdir - fark budur"
        ],
        correctAnswer: "C",
        explanation: "Discrete (Ayrık) ortam: Sonlu veya sayılabilir sonsuz sayıda durum ve eylem içerir. Durumlar ve eylemler ayrık değerler alır (örneğin: tamsayılar, boolean). Örnek: Satranç tahtası (64 kare, sonlu durum), labirent (grid, ayrık pozisyonlar). Continuous (Sürekli) ortam: Sonsuz sayıda durum ve eylem içerir, gerçek sayılar kullanılır. Örnek: Robot kolunun pozisyonu (x, y, z koordinatları gerçek sayılar), araba sürme (hız, pozisyon sürekli). Sürekli ortamları ayrıklaştırmak (discretization) gerekir: Gerçek sayıları sonlu aralıklara bölmek.",
        wrongExplanations: [
            { option: "A", reason: "Discrete/Continuous deterministik/stokastik ile ilgili değildir, durum/eylem sayısıyla ilgilidir." },
            { option: "B", reason: "Discrete/Continuous gözlemlenebilirlik ile ilgili değildir, durum/eylem ayrıklığıyla ilgilidir." },
            { option: "D", reason: "Discrete/Continuous statik/dinamik ile ilgili değildir, durum/eylem sürekliliğiyle ilgilidir." },
            { option: "E", reason: "Discrete/Continuous episodic/sequential ile ilgili değildir, durum/eylem ayrıklığıyla ilgilidir." }
        ]
    },
    {
        question: "Aşağıdaki ağaç yapısında BFS ve DFS algoritmalarını karşılaştırdığımızda, hangi durum doğrudur?\n\nA'dan K'ye ulaşmaya çalışıyoruz.",
        diagram: `<svg width="600" height="500" style="max-width: 100%; height: auto; border: 2px solid #667eea; border-radius: 10px; background: white; padding: 20px;">
            <!-- Düğümler -->
            <!-- A (Seviye 0) -->
            <circle cx="300" cy="60" r="28" fill="#667eea" stroke="#fff" stroke-width="3"/>
            <text x="300" y="68" text-anchor="middle" fill="white" font-size="20" font-weight="bold">A</text>
            
            <!-- B, C, D (Seviye 1) -->
            <circle cx="150" cy="150" r="25" fill="#48bb78" stroke="#fff" stroke-width="2"/>
            <text x="150" y="157" text-anchor="middle" fill="white" font-size="18" font-weight="bold">B</text>
            
            <circle cx="300" cy="150" r="25" fill="#48bb78" stroke="#fff" stroke-width="2"/>
            <text x="300" y="157" text-anchor="middle" fill="white" font-size="18" font-weight="bold">C</text>
            
            <circle cx="450" cy="150" r="25" fill="#48bb78" stroke="#fff" stroke-width="2"/>
            <text x="450" y="157" text-anchor="middle" fill="white" font-size="18" font-weight="bold">D</text>
            
            <!-- E, F, G, H, I (Seviye 2) -->
            <circle cx="100" cy="260" r="22" fill="#ed8936" stroke="#fff" stroke-width="2"/>
            <text x="100" y="267" text-anchor="middle" fill="white" font-size="16" font-weight="bold">E</text>
            
            <circle cx="200" cy="260" r="22" fill="#ed8936" stroke="#fff" stroke-width="2"/>
            <text x="200" y="267" text-anchor="middle" fill="white" font-size="16" font-weight="bold">F</text>
            
            <circle cx="250" cy="260" r="22" fill="#ed8936" stroke="#fff" stroke-width="2"/>
            <text x="250" y="267" text-anchor="middle" fill="white" font-size="16" font-weight="bold">G</text>
            
            <circle cx="350" cy="260" r="22" fill="#ed8936" stroke="#fff" stroke-width="2"/>
            <text x="350" y="267" text-anchor="middle" fill="white" font-size="16" font-weight="bold">H</text>
            
            <circle cx="450" cy="260" r="22" fill="#ed8936" stroke="#fff" stroke-width="2"/>
            <text x="450" y="267" text-anchor="middle" fill="white" font-size="16" font-weight="bold">I</text>
            
            <!-- J, K (Seviye 3) -->
            <circle cx="200" cy="370" r="20" fill="#9f7aea" stroke="#fff" stroke-width="2"/>
            <text x="200" y="377" text-anchor="middle" fill="white" font-size="14" font-weight="bold">J</text>
            
            <circle cx="350" cy="370" r="20" fill="#9f7aea" stroke="#fff" stroke-width="2"/>
            <text x="350" y="377" text-anchor="middle" fill="white" font-size="14" font-weight="bold">K</text>
            
            <!-- Oklar -->
            <!-- A → B, C, D -->
            <path d="M 285 85 L 165 128" stroke="#2d3748" stroke-width="2" fill="none" marker-end="url(#arrowhead-tree)"/>
            <path d="M 300 85 L 300 128" stroke="#2d3748" stroke-width="2" fill="none" marker-end="url(#arrowhead-tree)"/>
            <path d="M 315 85 L 435 128" stroke="#2d3748" stroke-width="2" fill="none" marker-end="url(#arrowhead-tree)"/>
            
            <!-- B → E, F -->
            <path d="M 140 175 L 110 228" stroke="#2d3748" stroke-width="2" fill="none" marker-end="url(#arrowhead-tree)"/>
            <path d="M 160 175 L 190 228" stroke="#2d3748" stroke-width="2" fill="none" marker-end="url(#arrowhead-tree)"/>
            
            <!-- C → G, H -->
            <path d="M 290 175 L 250 228" stroke="#2d3748" stroke-width="2" fill="none" marker-end="url(#arrowhead-tree)"/>
            <path d="M 310 175 L 340 228" stroke="#2d3748" stroke-width="2" fill="none" marker-end="url(#arrowhead-tree)"/>
            
            <!-- D → I -->
            <path d="M 450 175 L 450 228" stroke="#2d3748" stroke-width="2" fill="none" marker-end="url(#arrowhead-tree)"/>
            
            <!-- F → J -->
            <path d="M 200 282 L 200 350" stroke="#2d3748" stroke-width="2" fill="none" marker-end="url(#arrowhead-tree)"/>
            
            <!-- H → K -->
            <path d="M 350 282 L 350 350" stroke="#2d3748" stroke-width="2" fill="none" marker-end="url(#arrowhead-tree)"/>
            
            <!-- Ok başlığı -->
            <defs>
                <marker id="arrowhead-tree" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                    <polygon points="0 0, 10 3, 0 6" fill="#2d3748"/>
                </marker>
            </defs>
        </svg>`,
        options: [
            "BFS ve DFS aynı sayıda düğüm genişletir ve aynı yolu bulur",
            "BFS daha az düğüm genişletir çünkü K seviye 2'de ve BFS seviye seviye ilerler",
            "DFS daha az düğüm genişletir çünkü derinlemesine gider ve K'yi hızlı bulur",
            "BFS seviye 0, 1, 2'deki tüm düğümleri (A, B, C, D, E, F, G, H, I, J, K) genişletir, DFS ise A→B→E→F→J→C→G→H→K yolunu izler ve K'yi bulur (sol-önce ise) - ama bu sıralamaya bağlıdır",
            "Her ikisi de optimal çözüm bulur ama DFS daha hızlıdır"
        ],
        correctAnswer: "D",
        explanation: "BFS seviye seviye çalışır: Seviye 0: A genişletilir (1 düğüm). Seviye 1: B, C, D genişletilir → E, F, G, H, I bulunur (4 düğüm: A, B, C, D). Seviye 2: E, F, G, H, I genişletilir → J, K bulunur (9 düğüm: A, B, C, D, E, F, G, H, I). K bulundu! Toplam 11 düğüm genişletilir. DFS sol-önce çalışırsa: A→B→E (çıkmaz) → Geri dön → F→J (çıkmaz) → Geri dön → C→G (çıkmaz) → H→K bulunur! Toplam ~8-9 düğüm genişletilir (A, B, E, F, J, C, G, H, K) ama bu sıralamaya bağlıdır. DFS sağ-önce olsaydı: A→D→I (çıkmaz) → C→G (çıkmaz) → H→K bulunur. Her iki durumda da DFS K'yi bulur çünkü tree'de tamdır (çıkmaz yok).",
        wrongExplanations: [
            { option: "A", reason: "BFS ve DFS farklı sayıda düğüm genişletir. BFS ~11 düğüm, DFS ~8-9 düğüm (sıralamaya bağlı)." },
            { option: "B", reason: "BFS tüm seviye 2 düğümlerini genişletir (~11 düğüm), DFS daha az genişletir (~8-9 düğüm) ama K seviye 3'te, seviye 2'de değil." },
            { option: "C", reason: "DFS K'yi bulabilir ama bu sıralamaya bağlıdır. Sol-önce ise ~8-9 düğüm, sağ-önce ise farklı sayıda düğüm genişletilir." },
            { option: "E", reason: "DFS optimal değildir (en kısa yolu garanti etmez), BFS optimaldir (tree'de). Ayrıca DFS her zaman daha hızlı değildir, sıralamaya bağlıdır." }
        ]
    },
    {
        question: "Saatli ve saatsiz satranç oyunlarının farkları düşünüldüğünde, aşağıdaki ifadelerden hangisi doğrudur?",
        options: [
            "Saátli satranç yarı dinamik, saatsiz satranç statiktir",
            "Saátli satranç deterministik, saatsiz satranç stokastiktir",
            "Saátli satranç kısmen gözlenebilir, saatsiz satranç tam gözlenebilirdir",
            "Her iki oyun da epizodik çevreye sahiptir",
            "Saátli satranç static, saatsiz satranç dinamiktir"
        ],
        correctAnswer: "A",
        explanation: "A) Doğru: Saatsiz satranç STATİK çevredir çünkü: Eğer ajan hiçbir hamle yapmazsa, ortam hiçbir şekilde değişmez. Zaman akmaz, taşlar hareket etmez, hiçbir şey olmaz. Sadece ajan hamle yaptığında ortam değişir. Saatli satranç YARI DİNAMİK (Semi-Dynamic) çevredir çünkü: Zaman sürekli akar ve azalır, ajan hamle yapmasa bile. Ancak tahta durumu (taşların pozisyonu) sadece hamle yapıldığında değişir. Bu nedenle 'yarı dinamik' denir - çünkü sadece zaman değişir, tahta durumu değil. B) Yanlış: Her iki oyun da deterministiktir, stokastik değildir. C) Yanlış: Her iki oyun da tam gözlenebilirdir (fully observable), tüm tahtayı görebilirsiniz. D) Yanlış: Satranç epizodik değil, sequential (sıralı) çevredir çünkü her hamle önceki hamlelere bağlıdır.",
        wrongExplanations: [
            { option: "B", reason: "Her iki oyun da deterministiktir. Saatli olması stokastik yapmaz, sadece zaman kısıtı ekler. Satranç hiçbir zaman stokastik değildir." },
            { option: "C", reason: "Her iki oyun da tam gözlenebilirdir (observable), tüm tahtayı görebilirsiniz. Saat olması gözlemlenebilirliği etkilemez. İkisi de fully observable'dır." },
            { option: "D", reason: "Satranç epizodik değil, sequential (sıralı) çevredir. Her hamle önceki hamlelere bağlıdır ve oyunun devamı önceki durumlara bağlıdır. Episodic ortamda her bölüm bağımsızdır ama satrançta değildir." },
            { option: "E", reason: "Tam tersi doğrudur: Saatsiz satranç static, saatli satranç yarı dinamiktir." }
        ]
    },
    {
        question: "Aşağıdaki ifadelerden hangisi yanlıştır?",
        options: [
            "Bir zeki ajan, çevresini algılar ve çevresine tepki olarak eylemler gerçekleştirir. Ajan fonksiyonu, her algılama dizisine karşı ajan tarafından alınan eylemi belirtir",
            "Akıllı bir ajan, performans ölçütünü en üst düzeye çıkarmak amacıyla tüm olası algı dizilerini dikkate alarak hareket eder",
            "Bir ajan tasarımı yaparken, ilk adım her zaman görev çevresini tam olarak belirtmek olmalıdır. Bu, performans ölçütü, çevre, aktüatörler ve sensörler gibi unsurları içerir",
            "Basit refleks ajanları, içsel bir durumu tutmaz ve yalnızca algıları doğrudan yanıt olarak kullanır, önceki algıları göz önünde bulundurmazlar",
            "Model-bazlı refleks ajanları her zaman optimal çözümü garanti eder"
        ],
        correctAnswer: "B",
        explanation: "B) Yanlış: Rational agent (akıllı ajan), tüm olası algı dizilerini (tüm olası algı dizilerini) dikkate alarak hareket etmez. Çünkü: (1) Ajan, gelecekteki tüm olası percept sequence'leri önceden bilemez, (2) Tüm olası durumları analiz etmek pratikte imkansızdır, (3) Rational agent sadece şu ana kadar aldığı percept sequence'lere göre eylem seçer. Doğru tanım: 'A rational agent selects an action that maximizes the expected performance measure given the percept sequence received so far.' Yani ajan sadece şu ana kadar gördüğü percept'lara göre karar verir, tüm olası gelecekteki percept sequence'lere göre değil. A) Doğru: Bu ajan fonksiyonunun standart tanımıdır. C) Doğru: PEAS (Performance, Environment, Actuators, Sensors) tasarımında ilk adımdır. D) Doğru: Basit refleks ajanları iç durum tutmaz, sadece mevcut algıya tepki verir. E) Bu da yanlış ama soruda 'hangisi yanlıştır' dediği için B daha önemli ve doğru cevap.",
        wrongExplanations: [
            { option: "A", reason: "Bu doğrudur, ajan fonksiyonu algılama dizisinden eyleme eşleme yapar. Bu standart bir tanımdır." },
            { option: "C", reason: "Bu doğrudur, ajan tasarımında önce görev çevresi (task environment) ve PEAS (Performance, Environment, Actuators, Sensors) belirlenmelidir. Bu tasarımın ilk adımıdır." },
            { option: "D", reason: "Bu doğrudur, basit refleks ajanları (simple reflex agents) iç durum tutmaz, sadece mevcut algıya doğrudan tepki verir, geçmiş algıları hatırlamaz." },
            { option: "E", reason: "Bu da yanlış bir ifadedir (model-bazlı refleks ajanları optimal çözümü garanti etmez) ama soruda 'hangisi yanlıştır' sorulduğu için B daha kritik ve doğru cevaptır." }
        ]
    },
    {
        question: "Aşağıdaki arama algoritmalarından hangisi tam değildir, optimal değildir ve zaman karmaşıklığı O(b^m) ve alan karmaşıklığı O(bm) olan bir algoritmadır?",
        options: [
            "Genişlik öncelikli arama (Breadth-first search)",
            "Birim maliyetli arama (Uniform-cost search)",
            "Derinlik öncelikli arama (Depth-first search)",
            "İteratif derinlik artışı (Iterative deepening search)",
            "A* arama algoritması"
        ],
        correctAnswer: "C",
        explanation: "DFS (Depth-First Search): (1) Tam değildir - sonsuz döngü olabilir (tree search'te), (2) Optimal değildir - en kısa yolu garanti etmez, (3) Zaman karmaşıklığı O(b^m) - m = maksimum derinlik, (4) Alan karmaşıklığı O(bm) - sadece tek bir yolda düğümler tutulur. BFS optimal ve tamdır. UCS optimal ve tamdır. IDS optimal ve tamdır. A* optimal ve tamdır (admissible heuristik ile).",
        wrongExplanations: [
            { option: "A", reason: "BFS tam ve optimaldir, zaman karmaşıklığı O(b^d), alan karmaşıklığı O(b^d)." },
            { option: "B", reason: "UCS tam ve optimaldir, zaman ve alan karmaşıklığı O(b^(C*/ε))." },
            { option: "D", reason: "IDS tam ve optimaldir, zaman karmaşıklığı O(b^d), alan karmaşıklığı O(bd)." },
            { option: "E", reason: "A* tam ve optimaldir (admissible heuristik ile), zaman ve alan karmaşıklığı O(b^d)." }
        ]
    },
    {
        question: "Aşağıdakilerden hangisi Genişlik Öncelikli Arama (Breadth-first search) algoritmasının bir özelliği değildir?",
        options: [
            "Tamamlayıcıdır (completeness)",
            "Birim adım maliyetleri için optimaldir",
            "Zaman karmaşıklığı O(b^d + l), burada d en sığ çözüm derinliğini temsil eder",
            "Arama ağacındaki en derin genişletilmemiş düğümü genişletir",
            "Alan karmaşıklığı O(b^d) dir"
        ],
        correctAnswer: "D",
        explanation: "BFS, arama ağacındaki en derin genişletilmemiş düğümü değil, en sığ (shallow) genişletilmemiş düğümü genişletir. BFS seviye seviye (level by level) çalışır, önce seviye 0'daki tüm düğümleri, sonra seviye 1'deki tüm düğümleri, vb. genişletir. 'En derin düğümü genişletmek' DFS'in özelliğidir.",
        wrongExplanations: [
            { option: "A", reason: "Bu BFS'in özelliğidir, BFS tamdır (complete)." },
            { option: "B", reason: "Bu BFS'in özelliğidir, BFS optimaldir (birim adım maliyetleri için)." },
            { option: "C", reason: "Bu BFS'in özelliğidir, zaman karmaşıklığı genellikle O(b^d) olarak ifade edilir (l genellikle ihmal edilir)." },
            { option: "E", reason: "Bu BFS'in özelliğidir, alan karmaşıklığı O(b^d) dir." }
        ]
    },
    {
        question: "Aşağıdaki ifadelerden hangisi A* algoritması hakkında doğrudur?",
        options: [
            "A* algoritması, g(n) ve h(n) fonksiyonlarını birleştirir, burada g(n) mevcut yoldaki maliyeti ve h(n) hedefe olan tahmini maliyeti temsil eder",
            "A* algoritması, her zaman en düşük h(n) değerine sahip düğümü seçerek çözüm arar",
            "A* algoritması, f(n) = h(n) fonksiyonunu kullanarak, yalnızca tahmini maliyeti göz önünde bulundurur",
            "A* algoritması, sadece hedefe ulaşıldığında çalışmayı durdurur ve optimal değildir",
            "A* algoritması sadece admissible heuristiklerle çalışabilir"
        ],
        correctAnswer: "A",
        explanation: "A* algoritması f(n) = g(n) + h(n) formülünü kullanır. g(n) = başlangıçtan n düğümüne kadar olan gerçek yol maliyeti, h(n) = n düğümünden hedefe kadar olan tahmini maliyet (heuristik). A* en düşük f(n) değerine sahip düğümü seçer, sadece h(n) değil. Admissible heuristik ile optimaldir.",
        wrongExplanations: [
            { option: "B", reason: "A* en düşük f(n) = g(n) + h(n) değerine sahip düğümü seçer, sadece h(n) değil." },
            { option: "C", reason: "A* f(n) = g(n) + h(n) kullanır, sadece h(n) değil. Sadece h(n) kullanmak Greedy Best-First Search olur." },
            { option: "D", reason: "A* admissible heuristik kullanıldığında optimaldir. Hedefe ulaşıldığında durur ve bu optimal çözümdür." },
            { option: "E", reason: "A* admissible olmayan heuristiklerle de çalışır, sadece optimal garanti vermez." }
        ]
    },
    {
        question: "Aşağıdaki ifadelerden hangisi tutarlılık kuralının bir sonucudur?",
        options: [
            "Eğer h(n) fonksiyonu tutarlıysa, f(n) değerleri yol boyunca azalan bir sıraya sahip olur",
            "Eğer h(n) fonksiyonu tutarlıysa, f(n) değerleri yol boyunca artan bir sıraya sahip olur",
            "Tutarlılık, h(n) fonksiyonunun her zaman pozitif olmasını sağlar",
            "h(n) fonksiyonu tutarlı değilse, A* algoritması hala optimal çözüme ulaşabilir",
            "Tutarlılık, admissible özelliği garanti eder"
        ],
        correctAnswer: "E",
        explanation: "Tutarlılık (consistency) özelliği: h(n) ≤ c(n, n') + h(n') (üçgen eşitsizliği). Eğer bir heuristik tutarlıysa, otomatik olarak admissible'dir (kabul edilebilir). Tutarlı heuristik kullanan A*, f(n) değerlerini artan sırada (monoton artan) üretir ve optimal çözüm bulur. Not: f(n) değerleri artan sırada değil, en küçük f(n) seçilir.",
        wrongExplanations: [
            { option: "A", reason: "f(n) değerleri azalan değil, en küçük f(n) seçilir. Tutarlı heuristik ile f(n) monoton artar ama seçim en küçükten yapılır." },
            { option: "B", reason: "f(n) değerleri yol boyunca artmaz, en küçük f(n) seçilir. Tutarlılık monoton artışı garanti eder ama seçim sırası farklıdır." },
            { option: "C", reason: "Tutarlılık pozitiflik gerektirmez. h(n) negatif olabilir ama tutarlı olabilir." },
            { option: "D", reason: "Tutarlı olmayan heuristik ile A* optimal garanti edemez, sadece tam kalır." }
        ]
    },
    {
        question: "Aşağıda, 8-puzzle problemi için iki farklı 'successor' fonksiyonu tanımlanmıştır. Bu problem, Yinelemeli Derinleşen Arama (Iterative Deepening Search) yöntemi kullanılarak çözülmüştür. Bu durumda, hangi seçenek doğrudur?\n\n1. Version 1: Tüm successor'ları bir seferde üretme - Bu fonksiyon, mevcut durumu kopyalayarak ve üzerinde düzenlemeler yaparak tüm olası successor durumlarını aynı anda üretir.\n\n2. Version 2: Bir successor'ı her çağrıldığında üretme - Bu fonksiyon, mevcut durumu doğrudan değiştirir, bir successor üretir ve ardından yapılan değişiklikleri geri alır.",
        options: [
            "Version 1 daha verimlidir çünkü tüm successor'lar bir seferde üretildiğinden daha az işlem yapılır",
            "Version 2 daha verimlidir çünkü her seferinde yalnızca bir successor üretilir ve bellek kullanımı düşer",
            "Her iki fonksiyon da aynı performansı gösterir çünkü IDS her durumda aynı derinliğe kadar derinlik araması yapar",
            "Version 1 daha verimlidir çünkü tüm successor'ların bir arada oluşturulması, IDS'nin zaman karmaşıklığını azaltır",
            "Version 2 daha verimlidir çünkü her bir successor çağrıldığında, IDS'nin her seviyesinde sadece bir sonraki geçiş yapılır ve böylece daha hızlı sonuç alınır"
        ],
        correctAnswer: "B",
        explanation: "IDS (Iterative Deepening Search) her derinlik seviyesinde DLS (Depth-Limited Search) yapar. Version 2 (lazy generation) daha verimlidir çünkü: (1) IDS her derinlikte baştan başlar, önceki successor'lara ihtiyaç yoktur, (2) Sadece ihtiyaç duyulan successor üretilir, bellek tasarrufu sağlanır, (3) IDS'nin tekrarlayan yapısı nedeniyle, her derinlik seviyesinde sadece o seviyede gerekli olan successor'lar üretilir. Version 1 tüm successor'ları önceden üretir ama IDS'nin tekrarlayan yapısı nedeniyle çoğu tekrar atılır.",
        wrongExplanations: [
            { option: "A", reason: "Version 1 tüm successor'ları üretir ama IDS'nin tekrarlayan yapısı nedeniyle çoğu işe yaramaz. Version 2 daha verimlidir." },
            { option: "C", reason: "Performans farklıdır. Version 2 bellek ve zaman açısından daha verimlidir çünkü sadece ihtiyaç duyulan successor üretilir." },
            { option: "D", reason: "Version 1 zaman karmaşıklığını azaltmaz, aksine gereksiz işlem yapar. IDS'nin tekrarlayan yapısı nedeniyle Version 2 daha iyidir." },
            { option: "E", reason: "Bu açıklama yanlış. Version 2'nin avantajı bellek kullanımı ve gereksiz işlemleri önlemesidir, 'daha hızlı sonuç' doğrudan nedeni değildir." }
        ]
    },
    {
        question: "Bir ortamın 'Deterministic' (Belirli) olması ne anlama gelir ve hangi durumda 'Non-Deterministic' (Belirsiz) olur?",
        options: [
            "Deterministic ortam, eylem sonuçlarının önceden tam olarak bilinebileceği ortamdır - Non-deterministic ortam, eylem sonuçlarının rastlantısal veya belirsiz olduğu ortamdır",
            "Deterministic ortam, gözlemlenebilir ortamdır - Non-deterministic ortam, kısmen gözlemlenebilir ortamdır",
            "Deterministic ortam, static ortamdır - Non-deterministic ortam, dynamic ortamdır",
            "Deterministic ortam, discrete ortamdır - Non-deterministic ortam, continuous ortamdır",
            "Deterministic ve non-deterministic arasında fark yoktur, ikisi de aynıdır"
        ],
        correctAnswer: "A",
        explanation: "Deterministic (Belirli) ortam: Eylem sonuçları önceden tam olarak bilinebilir ve tahmin edilebilir. Belirli bir durumda belirli bir eylem yapıldığında, sonuç her zaman aynıdır. Örnek: Satranç (hamle sonucu belirli), Labirent çözme (hareket sonucu belirli). Non-Deterministic (Belirsiz/Stochastic) ortam: Eylem sonuçları rastlantısal veya belirsizdir. Örnek: Zar atma, hava durumu tahmini.",
        wrongExplanations: [
            { option: "B", reason: "Deterministic/non-deterministic gözlemlenebilirlik ile ilgili değildir. Observable ve partially observable farklı bir özelliktir." },
            { option: "C", reason: "Deterministic/non-deterministic static/dynamic ile ilgili değildir. Static/dynamic değişim hızıyla ilgilidir." },
            { option: "D", reason: "Deterministic/non-deterministic discrete/continuous ile ilgili değildir. Discrete/continuous durum sayısıyla ilgilidir." },
            { option: "E", reason: "İkisi farklıdır. Deterministic ortamda sonuçlar belirli, non-deterministic ortamda rastlantısaldır." }
        ]
    },
    {
        question: "BFS algoritmasında, dallanma faktörü b=4 ve çözüm derinliği d=3 ise, en kötü durumda kaç düğüm bellekte tutulur?",
        options: [
            "12 düğüm (b×d = 4×3)",
            "64 düğüm (b^d = 4^3)",
            "21 düğüm (1 + b + b^2 = 1 + 4 + 16)",
            "85 düğüm (tüm seviyeler toplamı)",
            "16 düğüm (sadece seviye 2'deki düğümler)"
        ],
        correctAnswer: "C",
        explanation: "BFS'in alan karmaşıklığı O(b^d) dir. Ancak en kötü durumda bellekte tutulan düğüm sayısı: Seviye 0: 1 düğüm (başlangıç). Seviye 1: b düğüm = 4 düğüm. Seviye 2: b^2 düğüm = 16 düğüm. Toplam: 1 + 4 + 16 = 21 düğüm. Not: Çözüm seviye 2'de bulunduğu için seviye 3'e geçilmez. Formül: 1 + b + b^2 + ... + b^(d-1) = (b^d - 1)/(b - 1).",
        wrongExplanations: [
            { option: "A", reason: "b×d çarpımı doğru değildir, üstel fonksiyon vardır: b^d." },
            { option: "B", reason: "4^3 = 64 tüm derinlik 3'e kadar olan düğümler ama çözüm d=3'te bulunduğu için seviye 2'ye kadar tutulur." },
            { option: "D", reason: "85 düğüm yanlış hesaplama. Doğru toplam 1+4+16=21'dir." },
            { option: "E", reason: "Sadece seviye 2 değil, seviye 0, 1 ve 2'deki tüm düğümler bellekte tutulur." }
        ]
    },
    {
        question: "A* algoritmasında, eğer h(n) heuristiği admissible (kabul edilebilir) değilse, yani bazı düğümler için h(n) > h*(n) ise, A* algoritması hakkında aşağıdakilerden hangisi doğrudur?",
        options: [
            "A* algoritması çalışmaz ve hata verir",
            "A* algoritması optimal çözümü garanti edemez ama tam (complete) kalır - çözüm varsa bulur",
            "A* algoritması ne optimal ne de tamdır, hiçbir garanti vermez",
            "A* algoritması optimal kalır çünkü g(n) gerçek maliyeti içerir",
            "A* algoritması sadece admissible heuristiklerle çalışabilir"
        ],
        correctAnswer: "B",
        explanation: "A* algoritması, admissible olmayan heuristik kullanıldığında: (1) Optimal garanti edilemez - çünkü h(n) > h*(n) olduğunda, A* yanlış düğümleri önceliklendirebilir ve optimal olmayan yolu seçebilir, (2) Tam (complete) kalır - çünkü A* tüm düğümleri genişletir ve çözüm varsa bulur (sonsuz döngü olmadığı sürece). g(n) gerçek maliyeti içerse bile, f(n) = g(n) + h(n) formülünde h(n)'in yanlış olması optimaliteyi bozar.",
        wrongExplanations: [
            { option: "A", reason: "A* admissible olmayan heuristiklerle de çalışır, sadece optimal garanti vermez." },
            { option: "C", reason: "A* hala tamdır (complete), çözüm varsa bulur. Sadece optimal değildir." },
            { option: "D", reason: "g(n) gerçek maliyeti içerse bile, h(n)'in yanlış olması f(n) = g(n) + h(n) değerini etkiler ve optimaliteyi bozar." },
            { option: "E", reason: "A* admissible olmayan heuristiklerle de çalışır, sadece optimal garanti vermez." }
        ]
    },
    {
        question: "Bir arama probleminde, başlangıç durumu S, hedef durumu G'dir. İki yol var:\nYol 1: S→A→G (adım: 2, maliyet: 3+2=5)\nYol 2: S→B→C→G (adım: 3, maliyet: 1+1+1=3)\n\nUniform Cost Search (UCS) algoritması hangi yolu seçer?",
        options: [
            "Yol 1'i seçer çünkü adım sayısı daha azdır (2 adım)",
            "Yol 2'yi seçer çünkü maliyet daha düşüktür (3 < 5)",
            "Her iki yolu da eşit kabul eder çünkü toplam değer aynıdır",
            "Yol 1'i seçer çünkü maliyet/adım oranı daha iyidir (5/2 = 2.5 < 3/3 = 1)",
            "UCS sadece adım sayısına bakar, maliyete bakmaz"
        ],
        correctAnswer: "B",
        explanation: "Uniform Cost Search (UCS) algoritması, adım sayısını değil, yol maliyetini (path cost) optimize eder. UCS, en düşük maliyetli yolu seçer. Bu durumda: Yol 1 maliyet = 5, Yol 2 maliyet = 3. Yol 2 daha düşük maliyete (3) sahip olduğu için UCS onu seçer. UCS adım sayısına bakmaz, sadece maliyete bakar.",
        wrongExplanations: [
            { option: "A", reason: "UCS adım sayısını optimize etmez, maliyeti optimize eder. 2 adım yerine 3 maliyet tercih edilir." },
            { option: "C", reason: "Toplam değer aynı değildir. Yol 1 maliyet=5, Yol 2 maliyet=3. Yol 2 daha iyidir." },
            { option: "D", reason: "UCS maliyet/adım oranına bakmaz, sadece toplam maliyete bakar. 3 < 5 olduğu için Yol 2 seçilir." },
            { option: "E", reason: "Tam tersi: UCS sadece maliyete bakar, adım sayısına bakmaz." }
        ]
    },
    {
        question: "Bir ortamın 'Multi-Agent' (Çok Ajanlı) olması ne anlama gelir ve hangi durumda bu özellik önemlidir?",
        options: [
            "Multi-agent ortam, birden fazla ajanın bulunduğu ortamdır - rekabet veya işbirliği gerektirir",
            "Multi-agent ortam, ajanın birden fazla hedefe sahip olduğu ortamdır - öncelik sıralaması gerekir",
            "Multi-agent ortam, ajanın birden fazla sensör ve aktüatör kullandığı ortamdır - paralel işleme gerekir",
            "Multi-agent ortam, ortamın sürekli değiştiği dinamik ortamdır - gerçek zamanlı karar gerekir",
            "Multi-agent ve single-agent ortamlar arasında fark yoktur"
        ],
        correctAnswer: "A",
        explanation: "Multi-Agent (Çok Ajanlı) ortam: Birden fazla ajanın bulunduğu ortamdır. Bu ortamlarda: (1) Ajanlar birbirleriyle etkileşimde bulunur, (2) Rekabet (competitive) veya işbirliği (cooperative) durumları oluşabilir, (3) Diğer ajanların eylemleri ortamı etkiler, (4) Planlama ve karar verme daha karmaşıktır. Örnek: Satranç (iki ajan, rekabet), Futbol simülasyonu (birçok ajan, işbirliği).",
        wrongExplanations: [
            { option: "B", reason: "Multi-agent ortam birden fazla hedefle ilgili değil, birden fazla ajanla ilgilidir." },
            { option: "C", reason: "Multi-agent ortam sensör/aktüatör sayısıyla ilgili değil, ajan sayısıyla ilgilidir." },
            { option: "D", reason: "Multi-agent ortam dynamic ortamla aynı değildir. Dynamic ortam zamanla değişir, multi-agent diğer ajanların varlığıyla ilgilidir." },
            { option: "E", reason: "İkisi farklıdır. Multi-agent ortamda diğer ajanların eylemleri önemlidir, single-agent ortamda sadece bir ajan vardır." }
        ]
    },
    {
        question: "Aşağıdaki arama uzayını düşünün: S başlangıç düğümü, G hedef testini sağlayan düğümdür. Yaylar geçiş maliyetleriyle etiketlenmiştir. Eşitlik durumunda alfabetik sıralama kullanılır.\n\nGrafik Yapısı:\n• S → A (maliyet: 1), S → G (maliyet: 12)\n• A → B (maliyet: 3), A → C (maliyet: 1)\n• B → D (maliyet: 3)\n• C → D (maliyet: 1), C → G (maliyet: 2)\n• D → G (maliyet: 2)\n\nBu arama problemi için, Genişlik Öncelikli Arama (BFS) hangi yolu döndürür?",
        options: [
            "S → G (direkt yol, maliyet: 12)",
            "S → A → C → G (maliyet: 1+1+2=4)",
            "S → A → B → D → G (maliyet: 1+3+3+2=9)",
            "S → A → C → D → G (maliyet: 1+1+1+2=5)",
            "S → A → B → D → G veya S → A → C → G (ikisi de aynı seviyede bulunur)"
        ],
        correctAnswer: "B",
        explanation: "BFS algoritması seviye seviye (level by level) çalışır ve eşitlik durumunda alfabetik sıralama kullanır. Adım adım: Seviye 0: S genişletilir → A, G kuyruğa eklenir (alfabetik: A önce gelir). Seviye 1: A genişletilir (A önce gelir çünkü alfabetik sıralama) → B, C kuyruğa eklenir. G kontrol edilir ama henüz genişletilmez çünkü A önce gelir. Seviye 2: B genişletilir (B önce gelir) → D kuyruğa eklenir. C genişletilir → D (zaten var), G kuyruğa eklenir. G kontrol edilir → HEDEF BULUNDU! BFS ilk bulduğu yolu döndürür: S → A → C → G (maliyet: 1+1+2=4). Not: BFS optimal değildir bu durumda çünkü adım maliyetleri farklıdır. S→G direkt yolu (maliyet 12) daha pahalı görünse de, BFS seviye seviye çalıştığı için önce S→A→C→G yolunu bulur.",
        wrongExplanations: [
            { option: "A", reason: "BFS S→G direkt yolunu görür ama A'yı önce genişletir çünkü alfabetik sıralama. A genişletildiğinde C'den G'ye daha kısa yol bulunur." },
            { option: "C", reason: "BFS S→A→B→D→G yolunu bulmaz çünkü C'den G'ye daha önce ulaşır (Seviye 2'de C genişletildiğinde G bulunur)." },
            { option: "D", reason: "BFS S→A→C→D→G yolunu bulmaz çünkü C'den direkt G'ye giden kenar var (maliyet 2). BFS C genişletildiğinde G'yi bulur ve durur." },
            { option: "E", reason: "BFS sadece bir yol döndürür. C'den G'ye direkt kenar olduğu için S→A→C→G yolu önce bulunur ve BFS durur." }
        ]
    }
];

module.exports = questions;
