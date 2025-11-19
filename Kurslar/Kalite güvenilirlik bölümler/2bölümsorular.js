// Kalite Güvenilirlik Dersi - Bölüm 2 Sınav Soruları
// CHAPTER 2: Yazılım Kalitesi - Üniversite/Doktora Seviyesi Zor Sorular

const questions = [
    {
        question: "Bir yazılım kalite yönetim ekibi, imalat sektöründen gelen tolerans kavramını yazılım geliştirme sürecine uygulamaya çalışıyor. Aşağıdaki senaryolardan hangisi, yazılım kalitesinin imalat kalitesinden temel farkını en iyi açıklar ve neden tolerans kavramının yazılım için uygulanamaz olduğunu gösterir?",
        options: [
            "Bir finansal işlem sisteminde, bir transfer işleminin %99.5 doğruluk oranıyla çalışması kabul edilebilir olarak değerlendirilebilir, çünkü imalatta olduğu gibi küçük sapmalar tolere edilebilir",
            "Yazılım geliştirmede tolerans kavramı, sadece performans metriklerinde (örneğin, yanıt süresi ±10ms) uygulanabilir, ancak işlevsel gereksinimlerde uygulanamaz",
            "Bir kriptografik hash fonksiyonunda tek bir bit farkı tamamen farklı sonuç üretir; yazılımda 'neredeyse doğru' kavramı anlamsızdır",
            "Tolerans kavramı yazılımda da geçerlidir, ancak sadece non-functional gereksinimler için; functional gereksinimler için mutlak uyum gereklidir",
            "Yazılım kalitesinde tolerans, sadece kullanıcı arayüzü tasarımında (piksel hizalaması gibi) uygulanabilir, ancak backend mantığında uygulanamaz"
        ],
        correctAnswer: "C",
        explanation: "Yazılım kalitesinin imalat kalitesinden temel farkı, yazılımda 'neredeyse doğru' kavramının olmamasıdır. Bir kriptografik hash fonksiyonunda tek bir bit farkı, tamamen farklı bir sonuç üretir ve bu, sistemin güvenlik bütünlüğünü tamamen bozar. İmalatta tolerans kavramı fiziksel ürünlerde küçük sapmaların kabul edilebilir olması anlamına gelir, ancak yazılımda bir hata ya tamamen sistemin çalışmasını engeller ya da güvenlik açığı oluşturur. Bu nedenle, yazılım ya gereksinimleri tam olarak karşılar ya da karşılamaz; tolerans yoktur.",
        wrongExplanations: [
            { option: "A", reason: "Finansal işlem sistemlerinde %99.5 doğruluk kabul edilemez. Her hatalı işlem ciddi finansal kayıplara yol açabilir. Yazılımda tolerans kavramı uygulanamaz." },
            { option: "B", reason: "Performans metriklerinde bile tolerans kavramı yazılım kalitesi açısından sorunlu olabilir. Örneğin, gerçek zamanlı sistemlerde ±10ms tolerans kritik olayları kaçırabilir." },
            { option: "C", reason: "Bu seçenek doğru cevaptır ve yazılımda 'neredeyse doğru' kavramının anlamsız olduğunu, tek bir bit farkının tamamen farklı sonuç üretebileceğini açıklar." },
            { option: "D", reason: "Tolerans kavramı yazılımda hiçbir alanda (ne functional ne de non-functional) imalattaki anlamıyla uygulanamaz. Yazılım kalitesi ikili bir durumdur." },
            { option: "E", reason: "Kullanıcı arayüzü tasarımında bile tolerans kavramı yazılım kalitesi açısından uygulanamaz. Piksel hizalaması erişilebilirlik ve kullanılabilirlik standartlarına uygun olmalıdır." }
        ]
    },
    {
        question: "Bir yazılım kalite yönetim ekibi, farklı paydaş gruplarının (finans, operasyon, IT, kullanıcılar) çelişkili gereksinimlerini içeren bir ERP sistemi için kalite değerlendirmesi yapıyor. Sistem teknik spesifikasyonları karşılıyor, ancak bazı kullanıcı grupları sistemi düşük kaliteli olarak değerlendiriyor. Bu durumda, yazılım kalitesinin öznel doğasını ve ölçüm zorluklarını en iyi açıklayan faktör aşağıdakilerden hangisidir?",
        options: [
            "Teknik spesifikasyonların yetersizliği, çünkü tüm paydaş gereksinimleri eksiksiz olarak belgelenmemiştir",
            "Test süreçlerinin yetersizliği, çünkü tüm kullanıcı senaryoları test edilmemiştir",
            "Geliştirme sürecinin standartlara uygun olmaması, çünkü Agile metodolojisi yerine Waterfall kullanılmıştır",
            "Yazılım kalitesi sadece teknik gereksinimlere uyumla değil, paydaş gruplarının uzlaşmalar sonucu oluşan gereksinimlerini karşılama derecesiyle de ölçülür; bu uzlaşmalar bazı grupların ihtiyaçlarını tam karşılamaz",
            "Kullanıcı eğitiminin yetersizliği, çünkü kullanıcılar sistemin tüm özelliklerini bilmemektedir"
        ],
        correctAnswer: "D",
        explanation: "Yazılım kalitesinin öznel doğasının temel nedeni, gereksinimlerin birden fazla paydaş grubunun ihtiyaçlarını bir araya getiren uzlaşmalar sonucu oluşmasıdır. Bu uzlaşmalar kaçınılmaz olarak bazı grupların ihtiyaçlarını tam olarak karşılamaz. Sistem teknik spesifikasyonları karşılasa bile, dışlanan paydaşlar sistemi düşük kaliteli olarak algılayabilir. Bu, yazılım kalitesinin sadece teknik gereksinimlere uyumla değil, aynı zamanda kullanıcı memnuniyeti ve farklı paydaş bakış açılarıyla da değerlendirilmesi gerektiğini gösterir.",
        wrongExplanations: [
            { option: "A", reason: "Teknik spesifikasyonların yetersizliği bir faktör olabilir, ancak temel sorun spesifikasyonların eksikliği değil, farklı paydaş gruplarının çelişkili ihtiyaçları arasında yapılan uzlaşmalardır." },
            { option: "B", reason: "Test süreçleri önemlidir, ancak bu durumda sistem teknik spesifikasyonları karşılıyor, yani testler başarılı. Sorun testlerde değil, paydaş memnuniyetinde." },
            { option: "C", reason: "Geliştirme metodolojisi (Agile vs Waterfall) bu sorunun temel nedeni değildir. Sorun, farklı paydaş gruplarının çelişkili ihtiyaçlarıdır." },
            { option: "D", reason: "Bu seçenek doğru cevaptır ve yazılım kalitesinin paydaş gruplarının uzlaşmalar sonucu oluşan gereksinimlerini karşılama derecesiyle de ölçüldüğünü açıklar." },
            { option: "E", reason: "Kullanıcı eğitimi önemli olabilir, ancak bu durumda sorun eğitim eksikliği değil, sistemin bazı kullanıcı gruplarının ihtiyaçlarını tam karşılamamasıdır." }
        ]
    },
    {
        question: "Bir yazılım kalite yönetim ekibi, 'bakım kolaylığı' (maintainability) gibi doğrudan ölçülemeyen kalite özelliklerini değerlendirmeye çalışıyor. Aşağıdaki yaklaşımlardan hangisi, bu tür özelliklerin yazılım kalitesi değerlendirmesindeki zorluklarını ve neden objektif ölçümlerin mümkün olmadığını en iyi açıklar?",
        options: [
            "Bakım kolaylığı, kod satır sayısı ve fonksiyon karmaşıklığı gibi metriklerle doğrudan ölçülebilir; ancak bu metriklerin yorumlanması özneldir",
            "Bakım kolaylığı sadece geliştiricilerin deneyim seviyesine bağlıdır; deneyimli geliştiriciler için her kod bakımı kolaydır",
            "Bakım kolaylığı, sadece kod yapısına (modülerlik, coupling, cohesion) bağlıdır ve bu metrikler objektif olarak ölçülebilir",
            "Bakım kolaylığı, sadece dokümantasyon kalitesiyle ölçülebilir; iyi dokümante edilmiş kod her zaman bakımı kolaydır",
            "Bakım kolaylığı gibi özellikler gerçek kullanım ve bakım senaryoları gerektirdiğinden geliştirme aşamasında doğrudan ölçülemez; bu nedenle proxy metrikler ve uzman yargısı kullanılmalıdır"
        ],
        correctAnswer: "E",
        explanation: "Bakım kolaylığı gibi kalite özellikleri, yazılımın gerçek kullanım senaryolarında ve uzun vadede değerlendirilebilir. Geliştirme aşamasında, bu özelliklerin gerçek etkisini ölçmek mümkün değildir çünkü henüz gerçek bakım senaryoları yaşanmamıştır. Bu nedenle, kalite yönetim ekipleri proxy metrikler (kod karmaşıklığı, cyclomatic complexity, coupling, cohesion) ve uzman yargısı kullanmak zorundadır. Bu, yazılım kalitesi değerlendirmesinin öznel doğasının bir başka örneğidir.",
        wrongExplanations: [
            { option: "A", reason: "Kod satır sayısı ve fonksiyon karmaşıklığı gibi metrikler proxy metriklerdir, ancak bakım kolaylığını doğrudan ölçmezler. Bu metriklerin yorumlanması özneldir, ancak asıl sorun bu değil; asıl sorun gerçek bakım senaryolarının henüz yaşanmamış olmasıdır." },
            { option: "B", reason: "Geliştiricilerin deneyim seviyesi bir faktör olabilir, ancak bakım kolaylığı sadece buna bağlı değildir. Kod yapısı, dokümantasyon, test coverage gibi birçok faktör etkilidir." },
            { option: "C", reason: "Kod yapısı metrikleri (modülerlik, coupling, cohesion) önemli proxy metriklerdir, ancak bakım kolaylığını doğrudan ölçmezler. Gerçek bakım senaryoları yaşanmadan tam değerlendirme yapılamaz." },
            { option: "D", reason: "Dokümantasyon önemlidir, ancak bakım kolaylığı sadece dokümantasyona bağlı değildir. Kod yapısı, test coverage, modülerlik gibi birçok faktör etkilidir." },
            { option: "E", reason: "Bu seçenek doğru cevaptır ve bakım kolaylığının geliştirme aşamasında doğrudan ölçülemeyeceğini, proxy metrikler ve uzman yargısı kullanılması gerektiğini açıklar." }
        ]
    },
    {
        question: "Bir ödeme uygulaması geliştiren ekip, kalite planında güvenliği en yüksek öncelik olarak belirlemiş ve bunun karşılığında performans optimizasyonlarından ödün vermeyi kabul etmiş. Ancak, uygulama piyasaya sürüldükten sonra kullanıcılar yavaş işlem sürelerinden şikayet ediyor ve uygulamayı terk ediyorlar. Bu durum, yazılım kalitesinde ödünleşmeler (trade-offs) ve kalite planlamasında önceliklendirme konusunda hangi önemli dersi verir?",
        options: [
            "Kalite özellikleri arasındaki ödünleşmeler sadece teknik kararlarla değil, kullanıcı deneyimi ve iş hedefleriyle de dengelenmelidir; aşırı önceliklendirme başarısızlığa yol açabilir",
            "Güvenlik her zaman en yüksek öncelik olmalıdır; kullanıcı memnuniyeti ikincil önceliktir",
            "Performans optimizasyonları her zaman güvenlikten daha önemlidir, çünkü kullanıcılar hızlı uygulamalar ister",
            "Kalite planlamasında önceliklendirme yapılmamalıdır; tüm kalite özellikleri eşit önceliğe sahip olmalıdır",
            "Kullanıcı geri bildirimleri kalite planlamasında dikkate alınmamalıdır; teknik kararlar sadece teknik ekip tarafından verilmelidir"
        ],
        correctAnswer: "A",
        explanation: "Yazılım kalitesinde ödünleşmeler kaçınılmazdır, ancak bu ödünleşmeler sadece teknik kararlarla değil, aynı zamanda kullanıcı deneyimi ve iş hedefleriyle de dengelenmelidir. Aşırı önceliklendirme (örneğin, güvenlik %100, performans %0) kullanıcı memnuniyetsizliğine ve iş başarısızlığına yol açabilir. Bu örnek, kalite planlamasında önceliklerin belirlenmesinin önemli olduğunu, ancak bu önceliklerin mutlak olmaması gerektiğini gösterir. Dengeli bir yaklaşım, güvenliği korurken kabul edilebilir performans seviyeleri sağlamalıdır.",
        wrongExplanations: [
            { option: "A", reason: "Bu seçenek doğru cevaptır ve kalite özellikleri arasındaki ödünleşmelerin sadece teknik kararlarla değil, kullanıcı deneyimi ve iş hedefleriyle de dengelenmesi gerektiğini açıklar." },
            { option: "B", reason: "Güvenlik önemlidir, ancak kullanıcı memnuniyeti de kritiktir. Eğer kullanıcılar uygulamayı terk ederse, güvenlik ne kadar yüksek olursa olsun iş başarısız olur." },
            { option: "C", reason: "Performans önemlidir, ancak ödeme uygulamalarında güvenlik kritiktir. Sorun performansın öncelikli olması değil, dengenin kurulmamasıdır." },
            { option: "D", reason: "Tüm kalite özellikleri eşit önceliğe sahip olamaz çünkü kaynaklar sınırlıdır ve ödünleşmeler kaçınılmazdır. Önceliklendirme gereklidir, ancak dengeli olmalıdır." },
            { option: "E", reason: "Kullanıcı geri bildirimleri kalite planlamasında kritik öneme sahiptir. Teknik kararlar sadece teknik ekip tarafından verilirse, kullanıcı ihtiyaçları göz ardı edilir." }
        ]
    },
    {
        question: "Bir yazılım geliştirme ekibi, geleneksel kalite yönetimi yaklaşımını benimseyerek süreç kalitesine yoğun şekilde odaklanıyor: katı kodlama standartları, düzenli kod incelemeleri, otomatik test sistemleri. Ancak, yazılım piyasaya sürüldükten sonra kullanıcılar arayüzün karmaşık ve kullanıcı dostu olmadığını belirtiyorlar. Bu durum, yazılım kalitesinin üretim kalitesinden farklı olmasının hangi temel nedenini gösterir?",
        options: [
            "Süreç kalitesi yazılım kalitesini garanti etmez; yazılım tasarımı yaratıcı bir süreçtir ve bireysel beceriler, deneyim ve kullanıcı odaklı düşünme gibi faktörler süreç disiplininin ötesinde kritik rol oynar",
            "Kodlama standartları ve test sistemleri yeterli değildir; daha fazla test gereklidir",
            "Geliştirme süreci yeterince katı değildir; daha fazla standart ve kural uygulanmalıdır",
            "Yazılım kalitesi sadece kod kalitesine bağlıdır; kullanıcı arayüzü önemsizdir",
            "Süreç kalitesi yazılım kalitesini tamamen belirler; sorun sürecin yeterince iyi uygulanmamasıdır"
        ],
        correctAnswer: "A",
        explanation: "Yazılım kalitesinin üretim kalitesinden temel farkı, yazılım tasarımının yaratıcı bir süreç olması ve bireysel beceriler, deneyim ve kullanıcı odaklı düşünme gibi faktörlerin süreç disiplininin ötesinde kritik rol oynamasıdır. İyi bir süreç (kodlama standartları, test sistemleri) hataları azaltabilir, ancak kullanıcı deneyimi, kullanılabilirlik ve estetik gibi özellikler sadece süreç disipliniyle garanti edilemez. Bu özellikler, yaratıcı tasarım, kullanıcı araştırması ve empati gerektirir. Bu nedenle, süreç kalitesi ile ürün kalitesi arasındaki ilişki yazılımda üretimden daha karmaşıktır.",
        wrongExplanations: [
            { option: "B", reason: "Daha fazla test sorunu çözmez. Sorun test eksikliği değil, kullanıcı deneyimi ve kullanılabilirlik gibi özelliklerin süreç disipliniyle garanti edilememesidir." },
            { option: "C", reason: "Daha fazla standart ve kural sorunu çözmez, hatta yaratıcılığı kısıtlayarak sorunu daha da kötüleştirebilir. Sorun sürecin yetersizliği değil, süreç kalitesinin ürün kalitesini tam belirleyememesidir." },
            { option: "D", reason: "Kullanıcı arayüzü yazılım kalitesinde kritik öneme sahiptir. Kod kalitesi önemlidir, ancak kullanıcı deneyimi de en az o kadar önemlidir." },
            { option: "E", reason: "Süreç kalitesi yazılım kalitesini tamamen belirlemez. Yazılım tasarımı yaratıcı bir süreçtir ve süreç disiplininin ötesinde faktörler kritik rol oynar." }
        ]
    },
    {
        question: "Bir yazılım geliştirme ekibi, süreç kalitesine yoğun şekilde odaklanarak çok katı standartlar ve kurallar uyguluyor. İlk sürümde çok az hata var, ancak birkaç ay sonra kullanıcılar yeni özellikler ve güncellemeler istiyor. Ekip, sürecin çok katı olması nedeniyle değişiklikleri hızlıca yapmakta zorlanıyor ve kodun bazı bölümleri bakım açısından sorunlu. Bu durum, yazılım kalitesinde hangi kritik dengeyi gösterir?",
        options: [
            "Süreç disiplini her zaman yaratıcılıktan daha önemlidir; katı kurallar her zaman daha iyi sonuçlar verir",
            "Yaratıcılık her zaman süreç disiplininden daha önemlidir; kurallar yaratıcılığı engeller",
            "Süreç disiplini ile yaratıcı tasarım arasında denge kurulmalıdır; aşırı katı süreçler yaratıcılığı kısıtlayabilir ve uzun vadeli kalite faktörlerini olumsuz etkileyebilir",
            "Süreç kalitesi sadece kısa vadeli kaliteyi (hata sayısı) etkiler; uzun vadeli kalite faktörleri süreçten bağımsızdır",
            "Bakım kolaylığı sadece kod yapısına bağlıdır; süreç kalitesinin bakım kolaylığı üzerinde etkisi yoktur"
        ],
        correctAnswer: "C",
        explanation: "Yazılım kalitesinde kritik denge, süreç disiplini ile yaratıcı tasarım arasındadır. Aşırı katı süreçler yaratıcılığı kısıtlayabilir ve uzun vadeli kalite faktörleri (esneklik, bakım kolaylığı, değişikliklere uyum sağlama) sorun yaratabilir. İyi bir süreç kısa vadede hata sayısını azaltabilir, ancak uzun vadede esneklik ve bakım kolaylığı gibi özellikler de önemlidir. Bu nedenle, süreç disiplini ile yaratıcılık arasında dengeli bir yaklaşım gereklidir.",
        wrongExplanations: [
            { option: "A", reason: "Süreç disiplini önemlidir, ancak her zaman yaratıcılıktan daha önemli değildir. Aşırı katı kurallar yaratıcılığı kısıtlayabilir ve uzun vadeli kalite sorunları yaratabilir." },
            { option: "B", reason: "Yaratıcılık önemlidir, ancak süreç disiplini de kritiktir. Kurallar yaratıcılığı engellemez, ancak aşırı katı kurallar sorun yaratabilir. Denge gereklidir." },
            { option: "C", reason: "Bu seçenek doğru cevaptır ve süreç disiplini ile yaratıcı tasarım arasında denge kurulması gerektiğini açıklar." },
            { option: "D", reason: "Süreç kalitesi hem kısa vadeli hem de uzun vadeli kaliteyi etkiler. Ancak aşırı katı süreçler uzun vadeli kalite faktörlerini olumsuz etkileyebilir." },
            { option: "E", reason: "Bakım kolaylığı hem kod yapısına hem de süreç kalitesine bağlıdır. Aşırı katı süreçler, esnek ve bakımı kolay kod yazmayı zorlaştırabilir." }
        ]
    },
    {
        question: "Bir yazılım kalite yönetim ekibi, 'güvenilirlik' (reliability) özelliğini değerlendirmeye çalışıyor. Sistem yoğun testlerden geçmiş ve tüm test senaryoları başarılı. Ancak, kalite yöneticisi güvenilirliğin gerçek kullanım senaryolarında değerlendirilmesi gerektiğini belirtiyor. Bu durum, yazılım kalitesinde hangi temel zorluğu gösterir?",
        options: [
            "Güvenilirlik sadece test sonuçlarıyla ölçülebilir; gerçek kullanım senaryoları gereksizdir",
            "Güvenilirlik sadece kod kalitesine bağlıdır; test sonuçları yeterlidir",
            "Güvenilirlik sadece performans metriklerine bağlıdır; yanıt süresi ve throughput yeterlidir",
            "Güvenilirlik gibi uzun vadeli kalite özellikleri gerçek kullanım senaryolarında değerlendirilebilir; geliştirme aşamasında sadece proxy metrikler kullanılabilir",
            "Güvenilirlik sadece dokümantasyon kalitesine bağlıdır; iyi dokümante edilmiş sistem güvenilirdir"
        ],
        correctAnswer: "D",
        explanation: "Güvenilirlik gibi uzun vadeli kalite özellikleri, yazılımın gerçek kullanım senaryolarında ve zaman içinde değerlendirilebilir. Geliştirme aşamasında, sadece proxy metrikler (test coverage, hata oranı, MTBF tahminleri) kullanılabilir, ancak gerçek güvenilirlik uzun süreli kullanımla ölçülebilir. Bu, yazılım kalitesi değerlendirmesinin temel zorluklarından biridir: bazı kalite özellikleri geliştirme aşamasında tam olarak değerlendirilemez. Bu nedenle, süreç özelliklerinin bu kalite özellikleri üzerindeki etkisini belirlemek güçtür.",
        wrongExplanations: [
            { option: "A", reason: "Test sonuçları önemlidir, ancak gerçek güvenilirlik sadece testlerle ölçülemez. Gerçek kullanım senaryolarında ve zaman içinde değerlendirilmesi gerekir." },
            { option: "B", reason: "Kod kalitesi önemlidir, ancak güvenilirlik sadece kod kalitesine bağlı değildir. Gerçek kullanım senaryoları, sistem yükü, edge case'ler gibi faktörler de etkilidir." },
            { option: "C", reason: "Performans metrikleri önemlidir, ancak güvenilirlik sadece performansa bağlı değildir. Güvenilirlik, sistemin hata durumlarında nasıl davrandığı, recovery mekanizmaları gibi faktörleri de içerir." },
            { option: "D", reason: "Bu seçenek doğru cevaptır ve güvenilirlik gibi uzun vadeli kalite özelliklerinin gerçek kullanım senaryolarında değerlendirilebileceğini, geliştirme aşamasında sadece proxy metrikler kullanılabileceğini açıklar." },
            { option: "E", reason: "Dokümantasyon önemlidir, ancak güvenilirlik sadece dokümantasyona bağlı değildir. Güvenilirlik, sistemin gerçek kullanımında ne kadar az hata yaptığı ve hatalardan ne kadar hızlı kurtulduğuyla ilgilidir." }
        ]
    },
    {
        question: "Bir yazılım geliştirme ekibi, 'kalite kültürü' oluşturmaya çalışıyor. Ekip lideri, sadece kurallara uymanın yeterli olmadığını, ekip üyelerinin kaliteye önem vermeleri ve yaptıkları işle gurur duymaları gerektiğini belirtiyor. Bu yaklaşım, yazılım kalitesinde hangi kritik faktörü vurgular?",
        options: [
            "Kalite sadece kurallar ve standartlarla sağlanabilir; ekip kültürü önemsizdir",
            "Kalite kültürü sadece deneyimli geliştiriciler için geçerlidir; yeni geliştiriciler kurallara uymalıdır",
            "Kalite kültürü sadece büyük şirketlerde önemlidir; küçük ekiplerde gereksizdir",
            "Kalite kültürü sadece Agile metodolojisinde önemlidir; Waterfall metodolojisinde gereksizdir",
            "Kalite kültürü standartların ötesinde ekip içinde kalite sorumluluğunu teşvik eder; soyut özellikler de değer verilmelidir ve bu yazılı kurallarla ifade edilemez"
        ],
        correctAnswer: "E",
        explanation: "Kalite kültürü, standartların ötesinde ekip içinde kalite sorumluluğunu teşvik eder. Soyut özellikler (zarafet, okunabilirlik, kullanıcı deneyimi, estetik) de değer verilmelidir ve bu, sadece yazılı kurallarla ifade edilemez. İyi kalite yöneticileri, bu değerlere önem veren takım üyelerini destekler ve ekip içinde profesyonel davranışı teşvik eder. Bu paylaşılan sorumluluk ve teknik ile soyut unsurlara odaklanma, sadece süreçlerin sağlayabileceğinden daha yüksek kaliteli bir ürün ortaya çıkarır.",
        wrongExplanations: [
            { option: "A", reason: "Kurallar ve standartlar önemlidir, ancak yeterli değildir. Kalite kültürü, kuralların ötesinde ekip üyelerinin kaliteye önem vermesini ve yaptıkları işle gurur duymasını gerektirir." },
            { option: "B", reason: "Kalite kültürü tüm ekip üyeleri için geçerlidir. Deneyimli geliştiriciler kültürü şekillendirebilir, ancak yeni geliştiriciler de bu kültüre katılmalıdır." },
            { option: "C", reason: "Kalite kültürü tüm şirket büyüklüklerinde önemlidir. Küçük ekiplerde bile kalite kültürü kritik öneme sahiptir." },
            { option: "D", reason: "Kalite kültürü metodolojiden bağımsızdır. Hem Agile hem de Waterfall metodolojilerinde kalite kültürü önemlidir." },
            { option: "E", reason: "Bu seçenek doğru cevaptır ve kalite kültürünün standartların ötesinde ekip içinde kalite sorumluluğunu teşvik ettiğini, soyut özelliklerin de değer verilmesi gerektiğini açıklar." }
        ]
    },
    {
        question: "Bir e-ticaret platformu, güvenli ödeme işlemleri sağlamalı ve aynı zamanda binlerce işlemi hızlı bir şekilde gerçekleştirmelidir. Sistem güvenli ödeme işlemlerini başarıyla gerçekleştiriyor, ancak web sitesi yavaş yükleniyor ve sık sık çöküyor. Kullanıcılar siteyi terk ediyorlar. Bu durum, yazılım kalitesinde hangi kritik kavramı gösterir?",
        options: [
            "Yazılım kalitesi sadece işlevselliğe değil, güvenilirlik, performans ve kullanılabilirlik gibi non-functional özelliklere de bağlıdır; teknik gereksinimlerin karşılanması kullanıcı memnuniyetini garanti etmez",
            "Yazılım kalitesi sadece işlevselliğe (functional requirements) bağlıdır; non-functional requirements önemsizdir",
            "Performans her zaman güvenlikten daha önemlidir; güvenlik ikincil önceliktir",
            "Kullanıcı memnuniyeti sadece işlevselliğe bağlıdır; performans önemsizdir",
            "Yazılım kalitesi sadece kod kalitesine bağlıdır; sistem performansı önemsizdir"
        ],
        correctAnswer: "A",
        explanation: "Yazılım kalitesi sadece işlevselliğe değil, aynı zamanda güvenilirlik, performans ve kullanılabilirlik gibi işlevsel olmayan (non-functional) özelliklere de bağlıdır. Bu örnek, teknik gereksinimlerin (güvenli ödeme) karşılanmasının her zaman kullanıcı memnuniyetini veya iş başarısını garanti etmediğini gösterir. Eğer yazılım güvenilir değilse veya çok yavaşsa, kullanıcılar hedeflerine kolayca ulaşamazlar ve yazılımı düşük kaliteli olarak değerlendirebilirler. Bu nedenle, yazılım kalitesi sadece doğru özelliklere sahip olmakla değil, aynı zamanda güvenilirlik ve hız gibi önemli işlevsel olmayan yönlerle de ilgilidir.",
        wrongExplanations: [
            { option: "A", reason: "Bu seçenek doğru cevaptır ve yazılım kalitesinin sadece işlevselliğe değil, aynı zamanda non-functional özelliklere de bağlı olduğunu açıklar." },
            { option: "B", reason: "Non-functional requirements yazılım kalitesinde kritik öneme sahiptir. Performans, güvenilirlik, kullanılabilirlik gibi özellikler kullanıcı memnuniyetini doğrudan etkiler." },
            { option: "C", reason: "Performans önemlidir, ancak e-ticaret platformlarında güvenlik de kritiktir. Sorun performansın öncelikli olması değil, dengenin kurulmamasıdır." },
            { option: "D", reason: "Kullanıcı memnuniyeti hem işlevselliğe hem de performansa bağlıdır. Yavaş bir sistem kullanıcı memnuniyetsizliğine yol açar." },
            { option: "E", reason: "Kod kalitesi önemlidir, ancak sistem performansı da kritiktir. Kod kaliteli olsa bile, performans sorunları kullanıcı deneyimini olumsuz etkiler." }
        ]
    },
    {
        question: "Bir yazılım kalite yönetim ekibi, farklı paydaş gruplarının (finans, operasyon, IT, son kullanıcılar) çelişkili gereksinimlerini içeren bir sistem için kalite değerlendirmesi yapıyor. Sistem teknik spesifikasyonları karşılıyor, ancak bazı kullanıcı grupları sistemi düşük kaliteli olarak değerlendiriyor. Bu durumda, yazılım kalitesinin öznel doğasının temel nedeni aşağıdakilerden hangisidir?",
        options: [
            "Teknik spesifikasyonların yetersizliği ve eksik belgelenmesi",
            "Test süreçlerinin yetersizliği ve kapsamlı test senaryolarının eksikliği",
            "Gereksinimler birden fazla paydaş grubunun ihtiyaçlarını bir araya getiren uzlaşmalar sonucu oluşur; bu uzlaşmalar bazı grupların ihtiyaçlarını tam karşılamaz",
            "Geliştirme metodolojisinin (Agile vs Waterfall) yanlış seçilmesi",
            "Kullanıcı eğitiminin yetersizliği ve dokümantasyon eksikliği"
        ],
        correctAnswer: "C",
        explanation: "Yazılım kalitesinin öznel doğasının temel nedeni, gereksinimlerin birden fazla paydaş grubunun ihtiyaçlarını bir araya getiren uzlaşmalar sonucu oluşmasıdır. Bu uzlaşmalar kaçınılmaz olarak bazı grupların ihtiyaçlarını tam karşılamaz. Sistem teknik spesifikasyonları karşılasa bile, dışlanan paydaşlar sistemi düşük kaliteli olarak algılayabilir. Bu, yazılım kalitesinin sadece teknik gereksinimlere uyumla değil, aynı zamanda farklı paydaş bakış açıları ve memnuniyetiyle de değerlendirilmesi gerektiğini gösterir.",
        wrongExplanations: [
            { option: "A", reason: "Teknik spesifikasyonlar yeterli olabilir, ancak sorun spesifikasyonların eksikliği değil, farklı paydaş gruplarının çelişkili ihtiyaçları arasında yapılan uzlaşmalardır." },
            { option: "B", reason: "Test süreçleri önemlidir, ancak bu durumda sistem teknik spesifikasyonları karşılıyor, yani testler başarılı. Sorun testlerde değil, paydaş memnuniyetinde." },
            { option: "C", reason: "Bu seçenek doğru cevaptır ve gereksinimlerin birden fazla paydaş grubunun ihtiyaçlarını bir araya getiren uzlaşmalar sonucu oluşmasının yazılım kalitesinin öznel doğasının temel nedeni olduğunu açıklar." },
            { option: "D", reason: "Geliştirme metodolojisi bu sorunun temel nedeni değildir. Sorun, farklı paydaş gruplarının çelişkili ihtiyaçlarıdır ve bu her metodolojide ortaya çıkabilir." },
            { option: "E", reason: "Kullanıcı eğitimi ve dokümantasyon önemli olabilir, ancak bu durumda sorun eğitim eksikliği değil, sistemin bazı kullanıcı gruplarının ihtiyaçlarını tam karşılamamasıdır." }
        ]
    },
    {
        question: "Bir yazılım geliştirme ekibi, 'sürdürülebilirlik' (maintainability) özelliğini değerlendirmeye çalışıyor. Kod karmaşıklığı metrikleri (cyclomatic complexity, coupling, cohesion) iyi görünüyor, ancak kalite yöneticisi gerçek sürdürülebilirliğin yazılımın uzun süre kullanılması ve gerçek bakım senaryoları yaşanması gerektiğini belirtiyor. Bu durum, yazılım kalitesinde hangi temel zorluğu gösterir?",
        options: [
            "Sürdürülebilirlik sadece kod karmaşıklığı metrikleriyle ölçülebilir; gerçek bakım senaryoları gereksizdir",
            "Sürdürülebilirlik sadece dokümantasyon kalitesine bağlıdır; kod metrikleri önemsizdir",
            "Sürdürülebilirlik sadece test coverage'a bağlıdır; yüksek test coverage sürdürülebilirliği garanti eder",
            "Sürdürülebilirlik gibi uzun vadeli kalite özellikleri gerçek kullanımda değerlendirilebilir; geliştirme aşamasında sadece proxy metrikler kullanılabilir",
            "Sürdürülebilirlik sadece kod yorumlarına bağlıdır; iyi yorumlanmış kod sürdürülebilirdir"
        ],
        correctAnswer: "D",
        explanation: "Sürdürülebilirlik gibi uzun vadeli kalite özellikleri, yazılımın gerçek kullanımında ve zaman içinde değerlendirilebilir. Geliştirme aşamasında, sadece proxy metrikler (kod karmaşıklığı, coupling, cohesion, dokümantasyon kalitesi) kullanılabilir, ancak gerçek sürdürülebilirlik uzun süreli kullanım ve gerçek bakım senaryolarıyla ölçülebilir. Bu, yazılım kalitesi değerlendirmesinin temel zorluklarından biridir: bazı kalite özellikleri geliştirme aşamasında tam olarak değerlendirilemez. Bu nedenle, süreç özelliklerinin bu kalite özellikleri üzerindeki etkisini belirlemek güçtür.",
        wrongExplanations: [
            { option: "A", reason: "Kod karmaşıklığı metrikleri önemli proxy metriklerdir, ancak gerçek sürdürülebilirliği tam olarak ölçemezler. Gerçek bakım senaryoları yaşanmadan tam değerlendirme yapılamaz." },
            { option: "B", reason: "Dokümantasyon önemlidir, ancak sürdürülebilirlik sadece dokümantasyona bağlı değildir. Kod yapısı, modülerlik, test coverage gibi birçok faktör etkilidir." },
            { option: "C", reason: "Test coverage önemlidir, ancak sürdürülebilirlik sadece test coverage'a bağlı değildir. Kod yapısı, modülerlik, dokümantasyon gibi faktörler de etkilidir." },
            { option: "D", reason: "Bu seçenek doğru cevaptır ve sürdürülebilirlik gibi uzun vadeli kalite özelliklerinin gerçek kullanımda değerlendirilebileceğini, geliştirme aşamasında sadece proxy metrikler kullanılabileceğini açıklar." },
            { option: "E", reason: "Kod yorumları önemlidir, ancak sürdürülebilirlik sadece yorumlara bağlı değildir. Kod yapısı, modülerlik, test coverage, dokümantasyon gibi birçok faktör etkilidir." }
        ]
    },
    {
        question: "Bir yazılım geliştirme ekibi, geleneksel kalite yönetimi yaklaşımını benimseyerek süreç kalitesine yoğun şekilde odaklanıyor. İlk sürümde çok az hata var, ancak birkaç ay sonra kullanıcılar yeni özellikler istiyor. Ekip, sürecin çok katı olması nedeniyle değişiklikleri hızlıca yapmakta zorlanıyor. Bu durum, yazılım kalitesinin üretim kalitesinden farklı olmasının hangi temel nedenini gösterir?",
        options: [
            "Süreç kalitesi yazılım kalitesini tamamen belirler; sorun sürecin yeterince iyi uygulanmamasıdır",
            "Kullanıcı gereksinimleri yazılım kalitesinde önemsizdir; teknik kararlar sadece teknik ekip tarafından verilmelidir",
            "Yazılım geliştirme yaratıcı bir süreçtir ve değişikliklere uyum sağlama yeteneği kritiktir; aşırı katı süreçler esnekliği kısıtlayabilir ve uzun vadeli kalite faktörlerini olumsuz etkileyebilir",
            "Değişikliklere uyum sağlama yazılım kalitesinde önemsizdir; ilk sürümdeki kalite yeterlidir",
            "Süreç kalitesi sadece kısa vadeli kaliteyi (hata sayısı) etkiler; uzun vadeli kalite faktörleri süreçten bağımsızdır"
        ],
        correctAnswer: "C",
        explanation: "Yazılım geliştirme yaratıcı bir süreçtir ve değişikliklere uyum sağlama yeteneği kritiktir. Aşırı katı süreçler bu esnekliği kısıtlayabilir ve uzun vadeli kalite faktörleri (esneklik, bakım kolaylığı, değişikliklere uyum sağlama) sorun yaratabilir. İyi bir süreç kısa vadede hata sayısını azaltabilir, ancak uzun vadede esneklik ve bakım kolaylığı gibi özellikler de önemlidir. Bu, yazılım kalitesinin üretim kalitesinden farklı olmasının temel nedenlerinden biridir: yazılım sürekli değişen gereksinimlere uyum sağlamalıdır.",
        wrongExplanations: [
            { option: "A", reason: "Süreç kalitesi önemlidir, ancak yazılım kalitesini tamamen belirlemez. Aşırı katı süreçler esnekliği kısıtlayabilir ve uzun vadeli kalite sorunları yaratabilir." },
            { option: "B", reason: "Kullanıcı gereksinimleri yazılım kalitesinde kritik öneme sahiptir. Teknik kararlar sadece teknik ekip tarafından verilirse, kullanıcı ihtiyaçları göz ardı edilir." },
            { option: "C", reason: "Değişikliklere uyum sağlama yazılım kalitesinde kritik öneme sahiptir. Yazılım sürekli değişen gereksinimlere uyum sağlamalıdır." },
            { option: "D", reason: "Süreç kalitesi hem kısa vadeli hem de uzun vadeli kaliteyi etkiler. Ancak aşırı katı süreçler uzun vadeli kalite faktörlerini olumsuz etkileyebilir." },
            { option: "E", reason: "Bu seçenek doğru cevaptır ve yazılım geliştirmenin yaratıcı bir süreç olduğunu, değişikliklere uyum sağlama yeteneğinin kritik olduğunu, süreç disiplini ile yaratıcı tasarım arasında denge kurulması gerektiğini açıklar." }
        ]
    },
    {
        question: "Bir yazılım kalite yönetim ekibi, bir otonom araç yazılımı için kalite değerlendirmesi yapıyor. Sistem yoğun testlerden geçmiş, ancak kalite yöneticisi mutlak güvenilirliğin garanti edilemeyeceğini ve güvenlik değerlendirmesi için uzun süreli kullanım gerektiğini belirtiyor. Bu durum, yazılım kalitesinde hangi temel zorluğu gösterir?",
        options: [
            "Güvenilirlik sadece test sonuçlarıyla ölçülebilir; uzun süreli kullanım gereksizdir",
            "Tüm olası gerçek dünya senaryolarını belirlemek ve sistemi bunlara karşı test etmek zordur; yoğun testlere rağmen mutlak güvenilirlik garanti edilemez",
            "Güvenilirlik sadece kod kalitesine bağlıdır; test sonuçları yeterlidir",
            "Güvenilirlik sadece performans metriklerine bağlıdır; yanıt süresi yeterlidir",
            "Güvenilirlik sadece dokümantasyon kalitesine bağlıdır; iyi dokümante edilmiş sistem güvenilirdir"
        ],
        correctAnswer: "B",
        explanation: "Otonom araç yazılımı gibi kritik sistemlerde, tüm olası gerçek dünya senaryolarını tam olarak belirlemek ve sistemi bunlara karşı kapsamlı şekilde test etmek zordur. Yoğun testlere rağmen mutlak güvenilirlik garanti edilemez ve güvenlik değerlendirmesi için uzun süreli kullanım ve sürekli izleme gereklidir. Bu, yazılım kalitesi değerlendirmesinin temel zorluklarından biridir: bazı kalite özellikleri (özellikle güvenilirlik ve güvenlik) geliştirme aşamasında tam olarak değerlendirilemez. Bu nedenle, yazılım kalitesi değerlendirmesi karmaşıktır ve hem testlere hem de sürekli izlemeye dayanır.",
        wrongExplanations: [
            { option: "A", reason: "Test sonuçları önemlidir, ancak kritik sistemlerde mutlak güvenilirlik sadece testlerle garanti edilemez. Gerçek dünya senaryoları test edilemeyen durumlar içerebilir." },
            { option: "B", reason: "Bu seçenek doğru cevaptır ve tüm olası gerçek dünya senaryolarını tam olarak belirlemenin ve test etmenin zor olduğunu, mutlak güvenilirliğin garanti edilemeyeceğini açıklar." },
            { option: "C", reason: "Kod kalitesi önemlidir, ancak güvenilirlik sadece kod kalitesine bağlı değildir. Gerçek dünya senaryoları, edge case'ler, sistem yükü gibi faktörler de etkilidir." },
            { option: "D", reason: "Performans metrikleri önemlidir, ancak güvenilirlik sadece performansa bağlı değildir. Güvenilirlik, sistemin hata durumlarında nasıl davrandığı, recovery mekanizmaları gibi faktörleri de içerir." },
            { option: "E", reason: "Dokümantasyon önemlidir, ancak güvenilirlik sadece dokümantasyona bağlı değildir. Güvenilirlik, sistemin gerçek kullanımında ne kadar az hata yaptığı ve hatalardan ne kadar hızlı kurtulduğuyla ilgilidir." }
        ]
    },
    {
        question: "Bir yazılım geliştirme ekibi, 'kullanılabilirlik' (usability) özelliğini değerlendirmeye çalışıyor. Sistem teknik gereksinimleri karşılıyor, ancak kullanıcı testleri karmaşık ve kullanıcı dostu olmayan bir arayüz gösteriyor. Bu durum, yazılım kalitesinde hangi kritik kavramı gösterir?",
        options: [
            "Kullanılabilirlik sadece teknik gereksinimlere uyumla ölçülebilir; kullanıcı testleri gereksizdir",
            "Yazılım kalitesi sadece teknik gereksinimlere uyumla değil, kullanıcı deneyimi ve kullanılabilirlik gibi özelliklerle de değerlendirilir; teknik gereksinimlerin karşılanması kullanıcı memnuniyetini garanti etmez",
            "Kullanılabilirlik sadece görsel tasarıma bağlıdır; fonksiyonellik önemsizdir",
            "Kullanılabilirlik sadece dokümantasyon kalitesine bağlıdır; iyi dokümante edilmiş sistem kullanılabilirdir",
            "Kullanılabilirlik sadece performans metriklerine bağlıdır; hızlı sistem kullanılabilirdir"
        ],
        correctAnswer: "B",
        explanation: "Yazılım kalitesi sadece teknik gereksinimlere uyumla değil, aynı zamanda kullanıcı deneyimi ve kullanılabilirlik gibi özelliklerle de değerlendirilir. Teknik gereksinimlerin karşılanması her zaman kullanıcı memnuniyetini garanti etmez. Kullanılabilirlik, kullanıcıların yazılımı ne kadar kolay ve etkili kullanabildiğiyle ilgilidir ve bu, sadece teknik gereksinimlere uyumla ölçülemez. Kullanıcı testleri, kullanılabilirlik değerlendirmesinde kritik öneme sahiptir çünkü gerçek kullanıcı deneyimini yansıtır.",
        wrongExplanations: [
            { option: "A", reason: "Teknik gereksinimlere uyum önemlidir, ancak kullanılabilirlik sadece buna bağlı değildir. Kullanıcı testleri kullanılabilirlik değerlendirmesinde kritik öneme sahiptir." },
            { option: "B", reason: "Bu seçenek doğru cevaptır ve yazılım kalitesinin sadece teknik gereksinimlere uyumla değil, kullanıcı deneyimi ve kullanılabilirlik gibi özelliklerle de değerlendirildiğini açıklar." },
            { option: "C", reason: "Görsel tasarım önemlidir, ancak kullanılabilirlik sadece görsel tasarıma bağlı değildir. Fonksiyonellik, navigasyon, geri bildirim gibi birçok faktör etkilidir." },
            { option: "D", reason: "Dokümantasyon önemlidir, ancak kullanılabilirlik sadece dokümantasyona bağlı değildir. Kullanılabilirlik, kullanıcıların yazılımı ne kadar kolay kullanabildiğiyle ilgilidir." },
            { option: "E", reason: "Performans önemlidir, ancak kullanılabilirlik sadece performansa bağlı değildir. Kullanılabilirlik, arayüz tasarımı, navigasyon, geri bildirim gibi birçok faktörü içerir." }
        ]
    },
    {
        question: "Bir yazılım kalite yönetim ekibi, farklı paydaş gruplarının çelişkili gereksinimlerini içeren bir sistem için kalite planlaması yapıyor. Ekip, kalite özellikleri arasında ödünleşmeler yapması gerektiğini biliyor, ancak hangi özelliklerin öncelikli olacağına karar veremiyor. Bu durumda, kalite planlamasında önceliklendirme yaparken dikkate alınması gereken en önemli faktör aşağıdakilerden hangisidir?",
        options: [
            "Sadece teknik faktörler dikkate alınmalıdır; iş hedefleri ve kullanıcı ihtiyaçları önemsizdir",
            "Kalite özellikleri arasındaki ödünleşmeler sadece teknik kararlarla değil, iş hedefleri, kullanıcı ihtiyaçları ve paydaş beklentileriyle de dengelenmelidir",
            "Tüm kalite özellikleri eşit önceliğe sahip olmalıdır; önceliklendirme yapılmamalıdır",
            "Sadece kısa vadeli faktörler dikkate alınmalıdır; uzun vadeli kalite faktörleri önemsizdir",
            "Sadece maliyet faktörleri dikkate alınmalıdır; en düşük maliyetli çözüm seçilmelidir"
        ],
        correctAnswer: "B",
        explanation: "Kalite özellikleri arasındaki ödünleşmeler, sadece teknik kararlarla değil, aynı zamanda iş hedefleri, kullanıcı ihtiyaçları ve paydaş beklentileriyle de dengelenmelidir. Öncelikler, yazılımın amacına ve hedef kullanıcı kitlesine göre belirlenmelidir. Örneğin, bir ödeme uygulamasında güvenlik öncelikli olabilir, ancak bir envanter yönetim sisteminde hız öncelikli olabilir. Bu dengeli yaklaşım, hem teknik hem de iş başarısını sağlar.",
        wrongExplanations: [
            { option: "A", reason: "Teknik faktörler önemlidir, ancak iş hedefleri ve kullanıcı ihtiyaçları da kritik öneme sahiptir. Sadece teknik faktörlere odaklanmak, kullanıcı memnuniyetsizliğine ve iş başarısızlığına yol açabilir." },
            { option: "B", reason: "Bu seçenek doğru cevaptır ve kalite özellikleri arasındaki ödünleşmelerin iş hedefleri, kullanıcı ihtiyaçları ve paydaş beklentileriyle dengelenmesi gerektiğini açıklar." },
            { option: "C", reason: "Tüm kalite özellikleri eşit önceliğe sahip olamaz çünkü kaynaklar sınırlıdır ve ödünleşmeler kaçınılmazdır. Önceliklendirme gereklidir, ancak dengeli olmalıdır." },
            { option: "D", reason: "Kısa vadeli faktörler önemlidir, ancak uzun vadeli kalite faktörleri (sürdürülebilirlik, bakım kolaylığı) de kritiktir. Sadece kısa vadeli faktörlere odaklanmak, uzun vadede sorunlar yaratabilir." },
            { option: "E", reason: "Maliyet önemlidir, ancak sadece maliyet faktörlerine odaklanmak, kalite sorunlarına ve kullanıcı memnuniyetsizliğine yol açabilir. Dengeli bir yaklaşım gereklidir." }
        ]
    },
    {
        question: "Bir yazılım geliştirme ekibi, 'performans' ve 'güvenlik' arasında ödünleşme yapması gerekiyor. Ekip, güvenliği artırmak için daha fazla şifreleme ve doğrulama katmanı ekliyor, ancak bu performansı olumsuz etkiliyor. Bu durum, yazılım kalitesinde hangi kritik kavramı gösterir?",
        options: [
            "Kalite özellikleri arasında ödünleşmeler kaçınılmazdır; güvenliği artırmak performansı olumsuz etkileyebilir, bu nedenle dengeli bir yaklaşım benimsenmelidir",
            "Güvenlik her zaman performanstan daha önemlidir; performans ödünü kabul edilebilir",
            "Performans her zaman güvenlikten daha önemlidir; güvenlik ödünü kabul edilebilir",
            "Kalite özellikleri arasında ödünleşme yapılmamalıdır; tüm özellikler eşit önceliğe sahip olmalıdır",
            "Güvenlik ve performans birbirinden bağımsızdır; birini artırmak diğerini etkilemez"
        ],
        correctAnswer: "A",
        explanation: "Kalite özellikleri arasında ödünleşmeler kaçınılmazdır. Güvenliği artırmak performansı olumsuz etkileyebilir, bu nedenle kalite planında hangi özelliklerin öncelikli olduğu açıkça belirlenmeli ve dengeli bir yaklaşım benimsenmelidir. Örneğin, bir ödeme uygulamasında güvenlik öncelikli olabilir ve performans ödünü kabul edilebilir, ancak bir envanter yönetim sisteminde hız öncelikli olabilir ve bazı güvenlik özellikleri basitleştirilebilir. Bu dengeli yaklaşım, hem teknik hem de iş başarısını sağlar.",
        wrongExplanations: [
            { option: "A", reason: "Bu seçenek doğru cevaptır ve kalite özellikleri arasında ödünleşmelerin kaçınılmaz olduğunu, dengeli bir yaklaşım benimsenmesi gerektiğini açıklar." },
            { option: "B", reason: "Güvenlik önemlidir, ancak her zaman performanstan daha önemli değildir. Yazılımın amacına ve hedef kullanıcı kitlesine göre öncelikler belirlenmelidir." },
            { option: "C", reason: "Performans önemlidir, ancak her zaman güvenlikten daha önemli değildir. Özellikle finansal ve kritik sistemlerde güvenlik kritiktir." },
            { option: "D", reason: "Tüm kalite özellikleri eşit önceliğe sahip olamaz çünkü kaynaklar sınırlıdır ve ödünleşmeler kaçınılmazdır. Önceliklendirme gereklidir." },
            { option: "E", reason: "Güvenlik ve performans birbirinden bağımsız değildir. Daha fazla şifreleme ve doğrulama katmanı, işlem süresini artırarak performansı olumsuz etkiler." }
        ]
    },
    {
        question: "Bir yazılım kalite yönetim ekibi, bir sistem için kalite değerlendirmesi yapıyor. Sistem teknik spesifikasyonları karşılıyor, ancak kullanıcılar sistemi düşük kaliteli olarak değerlendiriyor. Bu durum, yazılım kalitesinin hangi temel özelliğini gösterir?",
        options: [
            "Yazılım kalitesi sadece teknik spesifikasyonlara uyumla ölçülebilir; kullanıcı değerlendirmeleri önemsizdir",
            "Yazılım kalitesi sadece teknik spesifikasyonlara uyumla değil, kullanıcı memnuniyeti ve deneyimiyle de değerlendirilir; teknik gereksinimlerin karşılanması kullanıcı memnuniyetini garanti etmez",
            "Kullanıcı değerlendirmeleri her zaman yanlıştır; teknik ekip daha iyi karar verebilir",
            "Yazılım kalitesi sadece kod kalitesine bağlıdır; kullanıcı deneyimi önemsizdir",
            "Kullanıcı memnuniyeti sadece görsel tasarıma bağlıdır; fonksiyonellik önemsizdir"
        ],
        correctAnswer: "B",
        explanation: "Yazılım kalitesi sadece teknik spesifikasyonlara uyumla değil, aynı zamanda kullanıcı memnuniyeti ve kullanıcı deneyimiyle de değerlendirilir. Teknik gereksinimlerin karşılanması her zaman kullanıcı memnuniyetini veya uzun vadeli başarıyı garanti etmez. Kullanıcılar, yazılımın ne kadar iyi çalıştığı, ne kadar kullanışlı olduğu ve ihtiyaçlarını ne ölçüde karşıladığı gibi faktörlere göre kaliteyi değerlendirir. Bu nedenle, yazılım kalitesi değerlendirmesi öznel bir süreçtir ve farklı kişiler yazılımın iyi olup olmadığı konusunda farklı görüşlere sahip olabilir.",
        wrongExplanations: [
            { option: "A", reason: "Teknik spesifikasyonlara uyum önemlidir, ancak yeterli değildir. Kullanıcı değerlendirmeleri yazılım kalitesinde kritik öneme sahiptir." },
            { option: "B", reason: "Kullanıcı değerlendirmeleri yanlış değildir; kullanıcılar yazılımın gerçek kullanıcılarıdır ve deneyimlerini yansıtırlar. Teknik ekip ve kullanıcılar farklı perspektiflere sahiptir." },
            { option: "C", reason: "Kod kalitesi önemlidir, ancak kullanıcı deneyimi de kritiktir. Kullanıcılar kod kalitesini değil, yazılımın nasıl çalıştığını değerlendirir." },
            { option: "D", reason: "Bu seçenek doğru cevaptır ve yazılım kalitesinin sadece teknik spesifikasyonlara uyumla değil, kullanıcı memnuniyeti ve deneyimiyle de değerlendirildiğini açıklar." },
            { option: "E", reason: "Görsel tasarım önemlidir, ancak kullanıcı memnuniyeti sadece görsel tasarıma bağlı değildir. Fonksiyonellik, kullanılabilirlik, performans gibi birçok faktör etkilidir." }
        ]
    },
    {
        question: "Bir yazılım geliştirme ekibi, 'modülerlik' (modularity) özelliğini değerlendirmeye çalışıyor. Kod yapısı metrikleri (coupling, cohesion) iyi görünüyor, ancak gerçek modülerliğin yazılımın uzun süre kullanılması ve gerçek değişiklik senaryoları yaşanması gerektiğini belirtiyor. Bu durum, yazılım kalitesinde hangi temel zorluğu gösterir?",
        options: [
            "Modülerlik sadece kod yapısı metrikleriyle ölçülebilir; gerçek değişiklik senaryoları gereksizdir",
            "Modülerlik sadece dokümantasyon kalitesine bağlıdır; kod metrikleri önemsizdir",
            "Modülerlik sadece test coverage'a bağlıdır; yüksek test coverage modülerliği garanti eder",
            "Modülerlik gibi uzun vadeli kalite özellikleri gerçek kullanımda değerlendirilebilir; geliştirme aşamasında sadece proxy metrikler kullanılabilir",
            "Modülerlik sadece kod yorumlarına bağlıdır; iyi yorumlanmış kod modülerdir"
        ],
        correctAnswer: "D",
        explanation: "Modülerlik gibi uzun vadeli kalite özellikleri, yazılımın gerçek kullanımında ve zaman içinde değerlendirilebilir. Geliştirme aşamasında, sadece proxy metrikler (coupling, cohesion, modülerlik skorları) kullanılabilir, ancak gerçek modülerlik uzun süreli kullanım ve gerçek değişiklik senaryolarıyla ölçülebilir. Bu, yazılım kalitesi değerlendirmesinin temel zorluklarından biridir: bazı kalite özellikleri geliştirme aşamasında tam olarak değerlendirilemez. Bu nedenle, süreç özelliklerinin bu kalite özellikleri üzerindeki etkisini belirlemek güçtür.",
        wrongExplanations: [
            { option: "A", reason: "Kod yapısı metrikleri önemli proxy metriklerdir, ancak gerçek modülerliği tam olarak ölçemezler. Gerçek değişiklik senaryoları yaşanmadan tam değerlendirme yapılamaz." },
            { option: "B", reason: "Dokümantasyon önemlidir, ancak modülerlik sadece dokümantasyona bağlı değildir. Kod yapısı, coupling, cohesion gibi faktörler de etkilidir." },
            { option: "C", reason: "Test coverage önemlidir, ancak modülerlik sadece test coverage'a bağlı değildir. Kod yapısı, coupling, cohesion gibi faktörler de etkilidir." },
            { option: "D", reason: "Bu seçenek doğru cevaptır ve modülerlik gibi uzun vadeli kalite özelliklerinin gerçek kullanımda değerlendirilebileceğini, geliştirme aşamasında sadece proxy metrikler kullanılabileceğini açıklar." },
            { option: "E", reason: "Kod yorumları önemlidir, ancak modülerlik sadece yorumlara bağlı değildir. Kod yapısı, coupling, cohesion gibi faktörler de etkilidir." }
        ]
    },
    {
        question: "Bir yazılım geliştirme ekibi, geleneksel kalite yönetimi yaklaşımını benimseyerek süreç kalitesine yoğun şekilde odaklanıyor. İlk sürümde çok az hata var, ancak birkaç ay sonra kullanıcılar yeni özellikler istiyor. Ekip, sürecin çok katı olması nedeniyle değişiklikleri hızlıca yapmakta zorlanıyor. Bu durum, yazılım kalitesinin üretim kalitesinden farklı olmasının hangi temel nedenini gösterir?",
        options: [
            "Süreç kalitesi yazılım kalitesini tamamen belirler; sorun sürecin yeterince iyi uygulanmamasıdır",
            "Kullanıcı gereksinimleri yazılım kalitesinde önemsizdir; teknik kararlar sadece teknik ekip tarafından verilmelidir",
            "Değişikliklere uyum sağlama yazılım kalitesinde önemsizdir; ilk sürümdeki kalite yeterlidir",
            "Süreç kalitesi sadece kısa vadeli kaliteyi (hata sayısı) etkiler; uzun vadeli kalite faktörleri süreçten bağımsızdır",
            "Yazılım geliştirme yaratıcı bir süreçtir ve değişikliklere uyum sağlama yeteneği kritiktir; aşırı katı süreçler esnekliği kısıtlayabilir, bu nedenle süreç disiplini ile yaratıcı tasarım arasında denge kurulmalıdır"
        ],
        correctAnswer: "E",
        explanation: "Yazılım geliştirme yaratıcı bir süreçtir ve değişikliklere uyum sağlama yeteneği kritiktir. Aşırı katı süreçler bu esnekliği kısıtlayabilir ve uzun vadeli kalite faktörleri (esneklik, bakım kolaylığı, değişikliklere uyum sağlama) sorun yaratabilir. İyi bir süreç kısa vadede hata sayısını azaltabilir, ancak uzun vadede esneklik ve bakım kolaylığı gibi özellikler de önemlidir. Bu nedenle, süreç disiplini ile yaratıcı tasarım arasında denge kurulmalıdır. Bu, yazılım kalitesinin üretim kalitesinden farklı olmasının temel nedenlerinden biridir.",
        wrongExplanations: [
            { option: "A", reason: "Süreç kalitesi önemlidir, ancak yazılım kalitesini tamamen belirlemez. Aşırı katı süreçler esnekliği kısıtlayabilir ve uzun vadeli kalite sorunları yaratabilir." },
            { option: "B", reason: "Kullanıcı gereksinimleri yazılım kalitesinde kritik öneme sahiptir. Teknik kararlar sadece teknik ekip tarafından verilirse, kullanıcı ihtiyaçları göz ardı edilir." },
            { option: "C", reason: "Değişikliklere uyum sağlama yazılım kalitesinde kritik öneme sahiptir. Yazılım sürekli değişen gereksinimlere uyum sağlamalıdır." },
            { option: "D", reason: "Süreç kalitesi hem kısa vadeli hem de uzun vadeli kaliteyi etkiler. Ancak aşırı katı süreçler uzun vadeli kalite faktörlerini olumsuz etkileyebilir." },
            { option: "E", reason: "Bu seçenek doğru cevaptır ve yazılım geliştirmenin yaratıcı bir süreç olduğunu, değişikliklere uyum sağlama yeteneğinin kritik olduğunu, süreç disiplini ile yaratıcı tasarım arasında denge kurulması gerektiğini açıklar." }
        ]
    }
];

