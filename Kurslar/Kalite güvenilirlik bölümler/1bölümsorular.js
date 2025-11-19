// Kalite Güvenilirlik Dersi - Bölüm 1 Sınav Soruları
// CHAPTER 1: Yazılım Kalite Yönetimine Giriş

const questions = [
    {
        question: "Yazılım kalite yönetiminin temel amacı aşağıdakilerden hangisidir?",
        options: [
            "Sadece yazılımın hatasız olmasını sağlamak",
            "Yazılımın amacına uygun, kullanıcı ihtiyaçlarını karşılayan, güvenilir, zamanında ve bütçe içinde teslim edilmesini sağlamak",
            "Sadece test süreçlerini yönetmek",
            "Sadece kod kalitesini kontrol etmek",
            "Sadece belgeleme standartlarını belirlemek"
        ],
        correctAnswer: "B",
        explanation: "Yazılım kalite yönetimi, yazılımın amacına uygun, kullanıcı ihtiyaçlarını karşılayan, güvenilir, zamanında ve bütçe içinde teslim edilmesini sağlar. Bu kapsamlı bir yaklaşımdır ve sadece hata kontrolü veya test ile sınırlı değildir.",
        wrongExplanations: [
            { option: "A", reason: "Kalite yönetimi sadece hatasız olmayı değil, kapsamlı bir yaklaşımı içerir (zamanında teslim, bütçe, kullanıcı ihtiyaçları vb.)." },
            { option: "C", reason: "Test süreçleri kalite yönetiminin sadece bir parçasıdır, tüm amacı değildir." },
            { option: "D", reason: "Kod kalitesi kontrolü kalite yönetiminin bir bileşenidir ama tüm amacı değildir." },
            { option: "E", reason: "Belgeleme standartları kalite yönetiminin bir parçasıdır ama tüm amacı değildir." }
        ]
    },
    {
        question: "Son 20 yılda yazılım kalite yönetiminde yaşanan gelişmeler aşağıdakilerden hangisinde doğru verilmiştir?",
        options: [
            "Test araçları, yazılım geliştirme teknikleri ve kalite ölçüm yöntemleri gelişti → hata oranları azaldı, güvenilirlik arttı",
            "Sadece test araçları gelişti, diğer alanlar değişmedi",
            "Sadece kodlama standartları gelişti",
            "Sadece belgeleme yöntemleri gelişti",
            "Kalite yönetimi hiçbir değişiklik göstermedi"
        ],
        correctAnswer: "A",
        explanation: "Son 20 yılda test araçları, yazılım geliştirme teknikleri ve kalite ölçüm yöntemleri gelişti. Bu gelişmeler sonucunda hata oranları azaldı ve güvenilirlik arttı. Örnek: Bankacılık uygulamaları otomatik testlerle kontrol edildiğinde daha az hata yapar.",
        wrongExplanations: [
            { option: "B", reason: "Sadece test araçları değil, yazılım geliştirme teknikleri ve kalite ölçüm yöntemleri de gelişti." },
            { option: "C", reason: "Kodlama standartları gelişti ama tek başına değil, diğer alanlar da gelişti." },
            { option: "D", reason: "Belgeleme yöntemleri gelişti ama tek başına değil, kapsamlı bir gelişim oldu." },
            { option: "E", reason: "Kalite yönetimi önemli gelişmeler gösterdi, özellikle son 20 yılda." }
        ]
    },
    {
        question: "Büyük, uzun ömürlü, kritik sistemler için kalite yönetiminde hangi yaklaşım genellikle gereklidir?",
        options: [
            "Sadece esnek, belgesiz süreçler",
            "Sadece hızlı iterasyonlar",
            "Plan odaklı, belgeli, resmi kalite süreçleri",
            "Sadece otomatik testler",
            "Sadece kod incelemeleri"
        ],
        correctAnswer: "C",
        explanation: "Büyük, uzun ömürlü, kritik sistemler için genellikle plan odaklı, belgeli, resmi kalite süreçleri gerekir. Bu sistemlerde tutarlılık, güvenlik ve doğruluk kritik öneme sahiptir. Örnek: Ulusal sağlık kayıt sistemi → güvenlik, doğruluk, düzenlemelere uyum şarttır.",
        wrongExplanations: [
            { option: "A", reason: "Kritik sistemlerde esnek, belgesiz süreçler yeterli değildir, resmi süreçler gerekir." },
            { option: "B", reason: "Hızlı iterasyonlar kritik sistemler için yeterli değildir, plan odaklı yaklaşım gerekir." },
            { option: "D", reason: "Otomatik testler önemlidir ama tek başına yeterli değildir, kapsamlı kalite süreçleri gerekir." },
            { option: "E", reason: "Kod incelemeleri önemlidir ama tek başına yeterli değildir, resmi kalite süreçleri gerekir." }
        ]
    },
    {
        question: "Kalite yönetimi olmadan aşağıdaki sorunlardan hangisi ortaya çıkabilir?",
        options: [
            "Sadece performans sorunları",
            "Sadece güvenlik açıkları",
            "Sadece belgeleme eksiklikleri",
            "Tutarsızlık, güvenlik açıkları ve hatalı teslimatlar",
            "Sadece kod kalitesi sorunları"
        ],
        correctAnswer: "D",
        explanation: "Kalite yönetimi olmadan tutarsızlık, güvenlik açıkları ve hatalı teslimatlar oluşabilir. Bu sorunlar birbirleriyle bağlantılıdır ve kalite yönetimi bunların hepsini önlemeye çalışır.",
        wrongExplanations: [
            { option: "A", reason: "Performans sorunları ortaya çıkabilir ama tek başına değil, diğer sorunlar da oluşur." },
            { option: "B", reason: "Güvenlik açıkları ortaya çıkabilir ama tek başına değil, tutarsızlık ve hatalı teslimatlar da oluşur." },
            { option: "C", reason: "Belgeleme eksiklikleri ortaya çıkabilir ama tek başına değil, daha ciddi sorunlar da oluşur." },
            { option: "E", reason: "Kod kalitesi sorunları ortaya çıkabilir ama tek başına değil, sistem düzeyinde sorunlar da oluşur." }
        ]
    },
    {
        question: "Kurumsal düzeyde kalite yönetimi aşağıdakilerden hangisini belirler?",
        options: [
            "Sadece proje özelinde test stratejileri",
            "Sadece belirli bir projenin kodlama kuralları",
            "Şirket genelinde standartlar: tasarım kuralları, kodlama kuralları, belgeleme standartları, test süreçleri",
            "Sadece performans hedefleri",
            "Sadece risk yönetimi stratejileri"
        ],
        correctAnswer: "C",
        explanation: "Kurumsal düzeyde kalite yönetimi, şirket genelinde standartları belirler: tasarım kuralları, kodlama kuralları, belgeleme standartları ve test süreçleri. Amaç: Tüm projelerde birlik, tutarlılık, ortak kalite seviyesi oluşturmak. Örnek: Tüm projelerde aynı kodlama standardı → ekipler birbirini daha kolay anlar.",
        wrongExplanations: [
            { option: "A", reason: "Proje özelinde test stratejileri proje düzeyinde belirlenir, kurumsal düzeyde değil." },
            { option: "B", reason: "Belirli bir projenin kodlama kuralları proje düzeyinde belirlenir, kurumsal düzeyde şirket genelinde standartlar belirlenir." },
            { option: "D", reason: "Performans hedefleri proje düzeyinde belirlenir, kurumsal düzeyde genel standartlar belirlenir." },
            { option: "E", reason: "Risk yönetimi stratejileri kalite planının bir parçasıdır ama kurumsal düzeyde tüm standartlar belirlenir." }
        ]
    },
    {
        question: "Proje düzeyinde kalite yönetimi aşağıdakilerden hangisini içerir?",
        options: [
            "Sadece şirket genelinde standartlar",
            "Sadece kodlama kuralları",
            "Sadece belgeleme standartları",
            "Sadece test süreçleri",
            "Her proje için ayrı bir kalite planı: hangi süreçler kullanılacak, hangi standartlara uyulacak, test adımları, hedefler"
        ],
        correctAnswer: "E",
        explanation: "Proje düzeyinde kalite yönetimi, her proje için ayrı bir kalite planı hazırlanmasını içerir. Bu plan şunları belirler: hangi süreçler kullanılacak, hangi standartlara uyulacak, test adımları ve hedefler. Örnek: Hava durumu uygulaması için tasarım kuralları, performans hedefleri ve test stratejisi belirlenir.",
        wrongExplanations: [
            { option: "A", reason: "Şirket genelinde standartlar kurumsal düzeyde belirlenir, proje düzeyinde proje özelinde plan yapılır." },
            { option: "B", reason: "Kodlama kuralları proje planının bir parçasıdır ama tek başına değil, kapsamlı bir plan gerekir." },
            { option: "C", reason: "Belgeleme standartları proje planının bir parçasıdır ama tek başına değil, kapsamlı bir plan gerekir." },
            { option: "D", reason: "Test süreçleri proje planının bir parçasıdır ama tek başına değil, kapsamlı bir plan gerekir." }
        ]
    },
    {
        question: "Kalite Güvencesi (QA) aşağıdakilerden hangisini yapar?",
        options: [
            "Ürünün geliştirildikten sonra hataları bulur ve düzeltir",
            "'Nasıl kaliteli bir yazılım geliştirileceğini' belirler: süreçleri, yöntemleri, kuralları tanımlar ve problem çıkmadan önce kaliteyi garanti etmeyi hedefler",
            "Sadece testlerle kaliteyi doğrular",
            "Sadece hataları tespit eder",
            "Sadece kod incelemeleri yapar"
        ],
        correctAnswer: "B",
        explanation: "Kalite Güvencesi (QA) 'nasıl kaliteli bir yazılım geliştirileceğini' belirler. QA, süreçleri, yöntemleri, kuralları tanımlar ve problem çıkmadan önce kaliteyi garanti etmeyi hedefler. Örnekler: Kodlama standartlarını belirlemek, test stratejileri oluşturmak, kod inceleme (code review) kuralları oluşturmak.",
        wrongExplanations: [
            { option: "A", reason: "Bu Kalite Kontrolü (QC)'nin görevidir, QA'nın değil. QA hataları önlemeyi amaçlar." },
            { option: "C", reason: "Testlerle kaliteyi doğrulamak QC'nin görevidir, QA süreçleri tanımlar." },
            { option: "D", reason: "Hataları tespit etmek QC'nin görevidir, QA hataları önlemeyi amaçlar." },
            { option: "E", reason: "Kod incelemeleri yapmak QC'nin görevidir, QA kod inceleme kurallarını belirler." }
        ]
    },
    {
        question: "Kalite Kontrolü (QC) aşağıdakilerden hangisini yapar?",
        options: [
            "'Nasıl kaliteli bir yazılım geliştirileceğini' belirler",
            "Süreçleri, yöntemleri, kuralları tanımlar",
            "Ürünün geliştirildikten sonra hataları bulur ve düzeltir, testlerle kaliteyi doğrular",
            "Sadece kodlama standartlarını belirler",
            "Sadece test stratejileri oluşturur"
        ],
        correctAnswer: "C",
        explanation: "Kalite Kontrolü (QC) ürünün geliştirildikten sonra hataları bulur ve düzeltir. QC, testlerle kaliteyi doğrular ve hataları tespit eder. Örnek: Yazılımı yayınlamadan önce otomatik testler, manuel testler ve hata düzeltmeleri yapılır.",
        wrongExplanations: [
            { option: "A", reason: "Bu QA'nın görevidir, QC'nin değil. QC ürün odaklıdır." },
            { option: "B", reason: "Süreçleri tanımlamak QA'nın görevidir, QC test eder ve hataları bulur." },
            { option: "D", reason: "Kodlama standartlarını belirlemek QA'nın görevidir, QC standartlara uyumu kontrol eder." },
            { option: "E", reason: "Test stratejileri oluşturmak QA'nın görevidir, QC testleri uygular." }
        ]
    },
    {
        question: "QA ve QC arasındaki temel fark aşağıdakilerden hangisinde doğru verilmiştir?",
        options: [
            "QA ürün odaklıdır, QC süreç odaklıdır",
            "QA hataları bulup düzeltir, QC hataları önlemeyi amaçlar",
            "QA test eder, QC süreç belirler",
            "QA ve QC arasında fark yoktur, ikisi de aynıdır",
            "QA süreç odaklıdır ve hataları önlemeyi amaçlar, QC ürün odaklıdır ve hataları bulup düzeltir"
        ],
        correctAnswer: "E",
        explanation: "QA (Kalite Güvencesi) süreç odaklıdır ve hataları önlemeyi amaçlar (proaktif). QC (Kalite Kontrolü) ürün odaklıdır ve hataları bulup düzeltir (reaktif). QA: Kodlama standartları – süreç belirleme. QC: Test – denetim – inceleme. Örnek: QA: Oyun kodlamadan önce kurallar belirlenir. QC: Oyun oynanıp hatalar bulunur.",
        wrongExplanations: [
            { option: "A", reason: "Tam tersi: QA süreç odaklıdır, QC ürün odaklıdır." },
            { option: "B", reason: "Tam tersi: QA hataları önlemeyi amaçlar, QC hataları bulup düzeltir." },
            { option: "C", reason: "Tam tersi: QA süreç belirler, QC test eder." },
            { option: "D", reason: "QA ve QC arasında önemli farklar vardır: QA süreç odaklı, QC ürün odaklıdır." }
        ]
    },
    {
        question: "Kalite ekibinin bağımsız olması neden önemlidir?",
        options: [
            "Sadece daha hızlı çalışmak için",
            "Geliştirme ekibinden ayrı olunca objektif rapor verebilir ve bağımsız değerlendirme sağlar",
            "Sadece maliyeti azaltmak için",
            "Sadece daha az kaynak kullanmak için",
            "Sadece daha az belge tutmak için"
        ],
        correctAnswer: "B",
        explanation: "Kalite ekibi bağımsız olmalıdır çünkü geliştirme ekibinden ayrı olunca objektif rapor verebilir ve bağımsız değerlendirme sağlar. Bu, kalite kontrolünün tarafsız ve güvenilir olmasını sağlar. Kalite ekibi şu soruları sorar: Yazılım doğru mu geliştiriliyor? Standartlara uyuluyor mu? Süreçler doğru uygulanıyor mu? Test kayıtları doğru tutuluyor mu?",
        wrongExplanations: [
            { option: "A", reason: "Bağımsızlık hızla ilgili değil, objektiflikle ilgilidir." },
            { option: "C", reason: "Bağımsızlık maliyetle ilgili değil, objektiflikle ilgilidir." },
            { option: "D", reason: "Bağımsızlık kaynak kullanımıyla ilgili değil, objektiflikle ilgilidir." },
            { option: "E", reason: "Bağımsızlık belge tutma ile ilgili değil, objektiflikle ilgilidir." }
        ]
    },
    {
        question: "Yazılım geliştirmede kalite yönetiminin rolü aşağıdakilerden hangisini içerir?",
        options: [
            "Sadece test yapmak",
            "Sadece kod incelemeleri yapmak",
            "Süreci bağımsız olarak doğrulamak, standartlara uyumu kontrol etmek, ekipler arası koordinasyonu analiz etmek, atlanmış adımların önüne geçmek, güvenlik, performans, doğruluk gibi kriterleri değerlendirmek",
            "Sadece belgeleri kontrol etmek",
            "Sadece hataları bulmak"
        ],
        correctAnswer: "C",
        explanation: "Yazılım geliştirmede kalite yönetiminin rolü kapsamlıdır: Süreci bağımsız olarak doğrular, standartlara uyumu kontrol eder, ekipler arası koordinasyonu analiz eder, atlanmış adımların önüne geçer ve güvenlik, performans, doğruluk gibi kriterleri değerlendirir. Örnek: Banka yazılımında tüm güvenlik gereksinimlerinin doğrulandığını kontrol etmek.",
        wrongExplanations: [
            { option: "A", reason: "Test yapmak kalite yönetiminin sadece bir parçasıdır, kapsamlı rolü değildir." },
            { option: "B", reason: "Kod incelemeleri kalite yönetiminin sadece bir parçasıdır, kapsamlı rolü değildir." },
            { option: "D", reason: "Belgeleri kontrol etmek kalite yönetiminin sadece bir parçasıdır, kapsamlı rolü değildir." },
            { option: "E", reason: "Hataları bulmak kalite yönetiminin sadece bir parçasıdır, kapsamlı rolü değildir." }
        ]
    },
    {
        question: "Bir kalite planı aşağıdakilerden hangisini içermelidir?",
        options: [
            "Sadece ürün tanımı",
            "Sadece test stratejisi",
            "Ürün tanımı, ürün planları, süreç açıklamaları, kalite hedefleri, riskler ve yönetimi",
            "Sadece kod standartları",
            "Sadece belgeleme standartları"
        ],
        correctAnswer: "C",
        explanation: "Bir kalite planı şunları içermelidir: (1) Ürün Tanımı: Ürün ne yapacak? Hangi kullanıcıya hitap ediyor? Kalite beklentisi nedir? (2) Ürün Planları: Teslim tarihleri, sorumluluklar, destek süreçleri. (3) Süreç Açıklamaları: Geliştirme yöntemi, kod standartları, test yöntemleri. (4) Kalite Hedefleri: Güvenilirlik, performans, kullanıcı memnuniyeti, test kapsamı. (5) Riskler ve Yönetimi: Olası sorunlar → Çözüm stratejileri.",
        wrongExplanations: [
            { option: "A", reason: "Ürün tanımı kalite planının sadece bir parçasıdır, kapsamlı plan gerekir." },
            { option: "B", reason: "Test stratejisi kalite planının sadece bir parçasıdır, kapsamlı plan gerekir." },
            { option: "D", reason: "Kod standartları kalite planının sadece bir parçasıdır, kapsamlı plan gerekir." },
            { option: "E", reason: "Belgeleme standartları kalite planının sadece bir parçasıdır, kapsamlı plan gerekir." }
        ]
    },
    {
        question: "Agile ve geleneksel (waterfall) kalite yönetimi arasındaki temel fark aşağıdakilerden hangisinde doğru verilmiştir?",
        options: [
            "Agile daha fazla belge gerektirir, geleneksel daha az belge gerektirir",
            "Geleneksel daha az belge, daha çok iletişim ve hızlı iterasyonlar kullanır; Agile belgeler, detaylı süreçler ve resmi kontroller kullanır",
            "Agile daha az belge, daha çok iletişim ve hızlı iterasyonlar kullanır; geleneksel belgeler, detaylı süreçler ve resmi kontroller kullanır",
            "Her ikisi de aynı yaklaşımı kullanır",
            "Agile sadece test odaklıdır, geleneksel sadece belge odaklıdır"
        ],
        correctAnswer: "C",
        explanation: "Agile ve geleneksel kalite yönetimi arasında önemli farklar vardır: Geleneksel (Waterfall): Belgeler, detaylı süreçler, resmi kontroller. Agile: Daha az belge, daha çok iletişim, hızlı iterasyonlar. Önemli: Kalite yönetimi agile'da esnek şekilde uyarlanmalıdır.",
        wrongExplanations: [
            { option: "A", reason: "Tam tersi: Agile daha az belge gerektirir, geleneksel daha fazla belge gerektirir." },
            { option: "B", reason: "Tam tersi: Agile daha az belge ve hızlı iterasyonlar kullanır, geleneksel belgeler ve detaylı süreçler kullanır." },
            { option: "D", reason: "Her ikisi farklı yaklaşımlar kullanır, aynı değildir." },
            { option: "E", reason: "Agile sadece test odaklı değildir, esnek kalite yönetimi kullanır. Geleneksel sadece belge odaklı değildir, kapsamlı süreçler kullanır." }
        ]
    },
    {
        question: "Kalite planlarının özellikleri aşağıdakilerden hangisinde doğru verilmiştir?",
        options: [
            "Kalite planları uzun ve detaylı olmalıdır",
            "Kalite planları sadece ürün tanımını içermelidir",
            "Kalite planları kısa ve net olmalıdır",
            "Kalite planları sadece test stratejisini içermelidir",
            "Kalite planları hiçbir zaman gerekli değildir"
        ],
        correctAnswer: "C",
        explanation: "Kalite planları kısa ve net olmalıdır. Kapsamlı olmalı ama aynı zamanda anlaşılır ve uygulanabilir olmalıdır. Örnek hedefler: %100 doğruluk, 3 haftada ilk sürüm, %90 test coverage.",
        wrongExplanations: [
            { option: "A", reason: "Kalite planları uzun ve detaylı olmamalıdır, kısa ve net olmalıdır." },
            { option: "B", reason: "Kalite planları sadece ürün tanımını değil, kapsamlı bilgileri içermelidir." },
            { option: "D", reason: "Kalite planları sadece test stratejisini değil, kapsamlı bilgileri içermelidir." },
            { option: "E", reason: "Kalite planları gereklidir, özellikle büyük ve kritik projelerde." }
        ]
    },
    {
        question: "Sürekli test ve inceleme faaliyetlerinin kalite yönetimindeki rolü aşağıdakilerden hangisinde doğru verilmiştir?",
        options: [
            "Sürekli test ve inceleme kaliteyi düşürür",
            "Sürekli test ve inceleme kaliteyi yükseltir",
            "Sürekli test ve inceleme sadece zaman kaybıdır",
            "Sürekli test ve inceleme sadece proje sonunda yapılmalıdır",
            "Sürekli test ve inceleme hiçbir zaman gerekli değildir"
        ],
        correctAnswer: "B",
        explanation: "Sürekli test ve inceleme kaliteyi yükseltir. Bu faaliyetler, hataların erken tespit edilmesini ve düzeltilmesini sağlar, böylece kalite seviyesi artar. Test + inceleme = temel kalite faaliyetleri.",
        wrongExplanations: [
            { option: "A", reason: "Sürekli test ve inceleme kaliteyi düşürmez, yükseltir." },
            { option: "C", reason: "Sürekli test ve inceleme zaman kaybı değildir, kaliteyi artıran önemli faaliyetlerdir." },
            { option: "D", reason: "Test ve inceleme sadece proje sonunda değil, sürekli yapılmalıdır." },
            { option: "E", reason: "Sürekli test ve inceleme gereklidir, temel kalite faaliyetleridir." }
        ]
    },
    {
        question: "Risk yönetiminin kalite planlarındaki rolü aşağıdakilerden hangisinde doğru verilmiştir?",
        options: [
            "Risk yönetimi kalite planlarının önemsiz bir parçasıdır",
            "Risk yönetimi kalite planlarının önemli parçasıdır",
            "Risk yönetimi sadece büyük projelerde gereklidir",
            "Risk yönetimi sadece küçük projelerde gereklidir",
            "Risk yönetimi hiçbir zaman gerekli değildir"
        ],
        correctAnswer: "B",
        explanation: "Risk yönetimi kalite planlarının önemli parçasıdır. Kalite planı, olası sorunları ve çözüm stratejilerini içermelidir. Bu, projenin başarısını artırır ve beklenmedik sorunların önüne geçer.",
        wrongExplanations: [
            { option: "A", reason: "Risk yönetimi kalite planlarının önemsiz değil, önemli bir parçasıdır." },
            { option: "C", reason: "Risk yönetimi sadece büyük projelerde değil, tüm projelerde gereklidir." },
            { option: "D", reason: "Risk yönetimi sadece küçük projelerde değil, tüm projelerde gereklidir." },
            { option: "E", reason: "Risk yönetimi gereklidir, kalite planlarının önemli parçasıdır." }
        ]
    },
    {
        question: "Kurumsal ve proje düzeyi kalite yönetimi arasındaki ilişki aşağıdakilerden hangisinde doğru verilmiştir?",
        options: [
            "Kurumsal ve proje düzeyi kalite yönetimi birbirinden bağımsızdır",
            "Kurumsal ve proje düzeyi kalite yönetimi birlikte çalışır",
            "Sadece kurumsal düzey kalite yönetimi gereklidir",
            "Sadece proje düzeyi kalite yönetimi gereklidir",
            "Her ikisi de gereksizdir"
        ],
        correctAnswer: "B",
        explanation: "Kurumsal ve proje düzeyi kalite yönetimi birlikte çalışır. Kurumsal düzey şirket genelinde standartları belirler, proje düzeyi ise bu standartlara uygun olarak proje özelinde plan ve kontrol yapar. İkisi birlikte tutarlı ve yüksek kaliteli yazılım geliştirmeyi sağlar.",
        wrongExplanations: [
            { option: "A", reason: "Kurumsal ve proje düzeyi kalite yönetimi birbirinden bağımsız değildir, birlikte çalışır." },
            { option: "C", reason: "Sadece kurumsal düzey yeterli değildir, proje düzeyi de gereklidir." },
            { option: "D", reason: "Sadece proje düzeyi yeterli değildir, kurumsal düzey de gereklidir." },
            { option: "E", reason: "Her ikisi de gereklidir ve birlikte çalışır." }
        ]
    },
    {
        question: "Yazılım kalite yönetiminin kritik öneme sahip olduğu durumlar aşağıdakilerden hangisinde doğru verilmiştir?",
        options: [
            "Güvenilirlik, kullanıcı memnuniyeti ve zamanında teslim için kritik önemdedir",
            "Sadece küçük projelerde",
            "Sadece büyük projelerde",
            "Sadece güvenlik gerektiren projelerde",
            "Sadece performans gerektiren projelerde"
        ],
        correctAnswer: "A",
        explanation: "Yazılım kalite yönetimi; güvenilirlik, kullanıcı memnuniyeti ve zamanında teslim için kritik önemdedir. Bu, tüm projeler için geçerlidir, sadece belirli türdeki projeler için değil.",
        wrongExplanations: [
            { option: "B", reason: "Kalite yönetimi sadece küçük projelerde değil, tüm projelerde kritik öneme sahiptir." },
            { option: "C", reason: "Kalite yönetimi sadece büyük projelerde değil, tüm projelerde kritik öneme sahiptir." },
            { option: "D", reason: "Kalite yönetimi sadece güvenlik gerektiren projelerde değil, tüm projelerde kritik öneme sahiptir." },
            { option: "E", reason: "Kalite yönetimi sadece performans gerektiren projelerde değil, tüm projelerde kritik öneme sahiptir." }
        ]
    },
    {
        question: "Plan odaklı süreçlerde kalite yönetiminin önemi aşağıdakilerden hangisinde doğru verilmiştir?",
        options: [
            "Plan odaklı süreçlerde kalite yönetimi çok önemlidir",
            "Plan odaklı süreçlerde kalite yönetimi önemsizdir",
            "Plan odaklı süreçlerde kalite yönetimi sadece proje sonunda gereklidir",
            "Plan odaklı süreçlerde kalite yönetimi sadece başlangıçta gereklidir",
            "Plan odaklı süreçlerde kalite yönetimi hiçbir zaman gerekli değildir"
        ],
        correctAnswer: "A",
        explanation: "Plan odaklı süreçlerde kalite yönetimi çok önemlidir. Büyük, uzun ömürlü, kritik sistemler için plan odaklı, belgeli, resmi kalite süreçleri gerekir. Bu sistemlerde tutarlılık, güvenlik ve doğruluk kritik öneme sahiptir.",
        wrongExplanations: [
            { option: "B", reason: "Plan odaklı süreçlerde kalite yönetimi önemsiz değil, çok önemlidir." },
            { option: "C", reason: "Kalite yönetimi sadece proje sonunda değil, tüm süreç boyunca gereklidir." },
            { option: "D", reason: "Kalite yönetimi sadece başlangıçta değil, tüm süreç boyunca gereklidir." },
            { option: "E", reason: "Plan odaklı süreçlerde kalite yönetimi gereklidir, çok önemlidir." }
        ]
    },
    {
        question: "Agile metodolojide kalite yönetiminin uygulanması aşağıdakilerden hangisinde doğru verilmiştir?",
        options: [
            "Agile'da kalite yönetimi geleneksel yöntemlerle aynı şekilde uygulanır",
            "Agile'da kalite yönetimi daha esnek uygulanır",
            "Agile'da kalite yönetimi hiçbir zaman gerekli değildir",
            "Agile'da kalite yönetimi sadece proje sonunda uygulanır",
            "Agile'da kalite yönetimi sadece başlangıçta uygulanır"
        ],
        correctAnswer: "B",
        explanation: "Agile'da kalite yönetimi daha esnek uygulanır. Agile metodolojide daha az belge, daha çok iletişim ve hızlı iterasyonlar kullanıldığı için, kalite yönetimi de bu yaklaşıma uygun olarak esnek şekilde uyarlanmalıdır. Geleneksel yöntemlerdeki belgeli ve resmi süreçler yerine, daha hafif ve iteratif yaklaşımlar kullanılır.",
        wrongExplanations: [
            { option: "A", reason: "Agile'da kalite yönetimi geleneksel yöntemlerle aynı şekilde uygulanmaz, daha esnek uygulanır." },
            { option: "C", reason: "Agile'da kalite yönetimi gereklidir, sadece daha esnek uygulanır." },
            { option: "D", reason: "Agile'da kalite yönetimi sadece proje sonunda değil, tüm süreç boyunca uygulanır." },
            { option: "E", reason: "Agile'da kalite yönetimi sadece başlangıçta değil, tüm süreç boyunca uygulanır." }
        ]
    }
];

