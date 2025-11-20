// Kalite Güvenilirlik Dersi - Bölüm 4 Sınav Soruları
// CHAPTER 4: Yazılımda Önemli ISO Standartları - Üniversite Seviyesi Zor Sorular

const questions = [
    {
        question: "Bir yazılım geliştirme şirketi, mobil uygulama projesinde ISO/IEC 12207 standardını uygulamak istiyor. Proje yöneticisi, bu standardın kapsamını değerlendiriyor. ISO/IEC 12207 standardı hangi süreçleri kapsar?",
        options: [
            "ISO/IEC 12207 standardı yazılım yaşam döngüsü süreçlerini standartlaştırır ve geliştirme, bakım, destek ile proje yönetimi süreçlerini kapsar. Bu standard planlama, tasarım, kodlama, test ve bakım aşamalarının tümünü içerir ve yazılım projelerinde tutarlılık ve kalite sağlamayı amaçlar",
            "ISO/IEC 12207 standardı sadece kodlama aşamasını kapsar ve planlama, tasarım, test gibi diğer aşamaları dışarıda bırakır. Bu standardın amacı sadece kod kalitesini artırmak olduğu için geliştirme sürecinin diğer aşamalarına müdahale etmez",
            "ISO/IEC 12207 standardı sadece büyük ölçekli projelerde uygulanabilir ve küçük projeler için uygun değildir. Standardın gereksinimleri çok karmaşık olduğu için sadece çok büyük ekipler ve uzun süreli projelerde kullanılmalıdır",
            "ISO/IEC 12207 standardı sadece dokümantasyon süreçlerini kapsar ve yazılım geliştirme faaliyetlerinin gerçek uygulaması ile ilgilenmez. Bu standardın tek amacı dokümantasyon kalitesini artırmaktır",
            "ISO/IEC 12207 standardı sadece test aşamasında uygulanır ve geliştirme sürecinin planlama, tasarım, kodlama gibi diğer kritik aşamalarında herhangi bir rol oynamaz. Test süreçlerini standartlaştırmak standardın tek hedefidir"
        ],
        correctAnswer: "A",
        explanation: "ISO/IEC 12207 standardı, yazılım yaşam döngüsü süreçlerini standartlaştırır. Bu standard geliştirme, bakım, destek ve proje yönetimi süreçlerini kapsar. Planlama, tasarım, kodlama, test ve bakım aşamalarının tümü ISO/IEC 12207'ye uygun yürütülür. Standardın amacı yazılım projelerinde tutarlılık ve kalite sağlamaktır.",
        wrongExplanations: [
            { option: "B", reason: "ISO/IEC 12207 sadece kodlama aşamasını değil, tüm yazılım yaşam döngüsü süreçlerini (planlama, tasarım, kodlama, test, bakım) kapsar." },
            { option: "C", reason: "ISO/IEC 12207 tüm proje büyüklüklerinde uygulanabilir. Standardın amacı tutarlılık ve kalite sağlamak olduğu için küçük projelerde de değerlidir." },
            { option: "D", reason: "ISO/IEC 12207 sadece dokümantasyonla sınırlı değildir. Geliştirme, bakım, destek ve proje yönetimi süreçlerinin tamamını kapsar." },
            { option: "E", reason: "ISO/IEC 12207 sadece test aşamasında değil, yazılım yaşam döngüsünün tüm aşamalarında uygulanır." }
        ]
    },
    {
        question: "Bir otonom araç geliştirme projesinde, sistem mühendisleri yazılım ve donanım entegrasyonunu yönetmek için bir standart arıyorlar. Hangi ISO standardı bu ihtiyacı karşılar?",
        options: [
            "ISO/IEC 15288 standardı sadece yazılım geliştirme süreçlerini kapsar ve donanım entegrasyonu ile ilgilenmez. Bu standardın amacı sadece yazılım mühendisliği faaliyetlerini standartlaştırmak olduğu için sistem seviyesinde entegrasyon gereksinimlerini karşılamaz",
            "ISO/IEC 15288 standardı sistem yaşam döngüsü süreçlerini tanımlar ve yazılım ile donanım entegrasyonunu kapsar. Bu standard sistem entegrasyonu, doğrulama ve geçerlilik süreçlerini içerir ve sistem ile yazılım mühendisliğini entegre bir şekilde yönetmek için tasarlanmıştır",
            "ISO/IEC 15288 standardı sadece test aşamalarını kapsar ve geliştirme sürecinin diğer aşamalarında kullanılamaz. Bu standardın tek amacı test prosedürlerini standartlaştırmak olduğu için sistem entegrasyonu gibi karmaşık süreçleri yönetemez",
            "ISO/IEC 15288 standardı sadece dokümantasyon gereksinimlerini belirler ve gerçek sistem geliştirme faaliyetlerine müdahale etmez. Bu standardın kapsamı sadece dokümantasyon kalitesini artırmakla sınırlıdır",
            "ISO/IEC 15288 standardı sadece büyük ölçekli projelerde uygulanabilir ve küçük veya orta ölçekli projeler için uygun değildir. Standardın gereksinimleri çok karmaşık olduğu için sadece çok büyük bütçeli projelerde kullanılmalıdır"
        ],
        correctAnswer: "B",
        explanation: "ISO/IEC 15288 standardı, sistem yaşam döngüsü süreçlerini tanımlar ve yazılım ile donanım entegrasyonunu kapsar. Bu standard sistem entegrasyonu, doğrulama ve geçerlilik süreçlerini içerir. Otonom araç geliştirme gibi projelerde sensör sistemleri, yazılım ve donanımın birlikte entegre edilerek test edilmesi ISO/IEC 15288'nin kapsamına girer.",
        wrongExplanations: [
            { option: "B", reason: "ISO/IEC 15288 sadece yazılımı değil, sistem yaşam döngüsünü (yazılım + donanım) kapsar ve entegrasyon süreçlerini yönetir." },
            { option: "C", reason: "ISO/IEC 15288 sadece test aşamalarını değil, sistem yaşam döngüsünün tüm süreçlerini (planlama, geliştirme, entegrasyon, doğrulama) kapsar." },
            { option: "D", reason: "ISO/IEC 15288 sadece dokümantasyonla sınırlı değildir. Sistem geliştirme, entegrasyon ve doğrulama süreçlerinin tamamını kapsar." },
            { option: "E", reason: "ISO/IEC 15288 tüm proje büyüklüklerinde uygulanabilir. Sistem ve yazılım mühendisliğini entegre bir şekilde yönetmek için tasarlanmıştır." }
        ]
    },
    {
        question: "Bir yazılım şirketi, süreç olgunluğunu değerlendirmek ve 'Level 3 - Defined' seviyesine ulaşmak istiyor. Hangi standart veya model bu değerlendirmeyi sağlar?",
        options: [
            "ISO/IEC 15504 (SPICE) standardı sadece kod kalitesini ölçer ve süreç olgunluğu ile ilgilenmez. Bu standardın amacı sadece yazılım ürününün kalite özelliklerini değerlendirmek olduğu için süreç iyileştirme faaliyetlerine katkı sağlamaz",
            "ISO/IEC 15504 (SPICE) standardı sadece test süreçlerini değerlendirir ve geliştirme sürecinin diğer aşamalarını kapsamaz. Bu standardın tek amacı test olgunluğunu ölçmek olduğu için genel süreç iyileştirme için kullanılamaz",
            "ISO/IEC 15504 (SPICE) standardı yazılım süreçlerinin olgunluğunu ve yeterliliğini ölçer ve 6 seviyeli bir olgunluk modeli sunar. Bu standard süreç iyileştirme ve performans değerlendirmesi için çerçeve sağlar ve organizasyonların süreç olgunluk seviyelerini belirlemelerine yardımcı olur",
            "ISO/IEC 15504 (SPICE) standardı sadece büyük şirketlerde uygulanabilir ve küçük veya orta ölçekli şirketler için uygun değildir. Standardın gereksinimleri çok karmaşık olduğu için sadece çok büyük organizasyonlarda kullanılmalıdır",
            "ISO/IEC 15504 (SPICE) standardı sadece dokümantasyon kalitesini ölçer ve gerçek süreç performansını değerlendirmez. Bu standardın kapsamı sadece dokümantasyon standartlarına uyumu kontrol etmekle sınırlıdır"
        ],
        correctAnswer: "C",
        explanation: "ISO/IEC 15504 (SPICE - Software Process Improvement and Capability dEtermination) standardı, yazılım süreçlerinin olgunluğunu ve yeterliliğini ölçer. SPICE, 6 seviyeli bir olgunluk modeli sunar: Level 0 (Incomplete), Level 1 (Performed), Level 2 (Managed), Level 3 (Defined), Level 4 (Quantitatively Managed), Level 5 (Optimizing). Bu standard süreç iyileştirme ve performans değerlendirmesi için çerçeve sağlar.",
        wrongExplanations: [
            { option: "B", reason: "ISO/IEC 15504 sadece kod kalitesini değil, süreç olgunluğunu ve yeterliliğini ölçer. Süreç iyileştirme için tasarlanmıştır." },
            { option: "C", reason: "ISO/IEC 15504 sadece test süreçlerini değil, tüm yazılım geliştirme süreçlerinin olgunluğunu değerlendirir." },
            { option: "D", reason: "ISO/IEC 15504 tüm şirket büyüklüklerinde uygulanabilir. Süreç olgunluğunu değerlendirmek için tasarlanmıştır." },
            { option: "E", reason: "ISO/IEC 15504 sadece dokümantasyonla sınırlı değildir. Süreç performansı ve yetkinliğini ölçer." }
        ]
    },
    {
        question: "Bir e-ticaret sitesi geliştirme projesinde, kalite ekibi yazılımın kalite özelliklerini değerlendirmek istiyor. Hızlı yüklenme, kullanıcı dostu tasarım ve hatasız çalışma gibi kriterler hangi ISO standardına göre değerlendirilir?",
        options: [
            "ISO/IEC 25010 standardı sadece kod kalitesini ölçer ve kullanıcı deneyimi, performans gibi özellikleri kapsamaz. Bu standardın amacı sadece kodun teknik kalitesini değerlendirmek olduğu için kullanılabilirlik ve verimlilik gibi özellikleri dikkate almaz",
            "ISO/IEC 25010 standardı sadece güvenlik özelliklerini kapsar ve diğer kalite kriterlerini değerlendirmez. Bu standardın tek amacı yazılımın güvenlik seviyesini ölçmek olduğu için fonksiyonellik, güvenilirlik, kullanılabilirlik gibi özellikleri kapsamaz",
            "ISO/IEC 25010 standardı sadece dokümantasyon kalitesini ölçer ve yazılım ürününün gerçek kalite özelliklerini değerlendirmez. Bu standardın kapsamı sadece dokümantasyon standartlarına uyumu kontrol etmekle sınırlıdır",
            "ISO/IEC 25010 standardı yazılım ürünlerinin kalite özelliklerini tanımlar ve 8 ana kalite kriteri içerir. Bu standard fonksiyonellik, güvenilirlik, kullanılabilirlik, verimlilik, bakım kolaylığı, taşınabilirlik, güvenlik ve uyumluluk gibi özellikleri kapsar ve yazılım kalitesini kapsamlı bir şekilde değerlendirmeyi sağlar",
            "ISO/IEC 25010 standardı sadece büyük ölçekli projelerde uygulanabilir ve küçük veya orta ölçekli projeler için uygun değildir. Standardın gereksinimleri çok karmaşık olduğu için sadece çok büyük bütçeli projelerde kullanılmalıdır"
        ],
        correctAnswer: "D",
        explanation: "ISO/IEC 25010 standardı, yazılım ürünlerinin kalite özelliklerini tanımlar. Bu standard 8 ana kalite kriteri içerir: Fonksiyonellik, Güvenilirlik, Kullanılabilirlik, Verimlilik, Bakım Kolaylığı, Taşınabilirlik, Güvenlik ve Uyumluluk. Hızlı yüklenme (Verimlilik), kullanıcı dostu tasarım (Kullanılabilirlik) ve hatasız çalışma (Güvenilirlik) ISO/IEC 25010 kalite kriterlerine uygundur.",
        wrongExplanations: [
            { option: "B", reason: "ISO/IEC 25010 sadece kod kalitesini değil, 8 ana kalite özelliğini (fonksiyonellik, güvenilirlik, kullanılabilirlik, verimlilik, bakım kolaylığı, taşınabilirlik, güvenlik, uyumluluk) kapsar." },
            { option: "C", reason: "ISO/IEC 25010 sadece güvenlikle sınırlı değildir. Tüm kalite özelliklerini (fonksiyonellik, güvenilirlik, kullanılabilirlik, verimlilik, vb.) kapsar." },
            { option: "D", reason: "ISO/IEC 25010 sadece dokümantasyonla sınırlı değildir. Yazılım ürününün gerçek kalite özelliklerini değerlendirir." },
            { option: "E", reason: "ISO/IEC 25010 tüm proje büyüklüklerinde uygulanabilir. Yazılım kalite özelliklerini değerlendirmek için tasarlanmıştır." }
        ]
    },
    {
        question: "Bir bankanın internet bankacılığı yazılımında, kullanıcı verilerinin şifrelenmesi, güvenlik testlerinin yapılması ve erişim kontrolü gibi gereksinimler hangi ISO standardına göre yönetilir?",
        options: [
            "ISO/IEC 27001 standardı sadece dokümantasyon gereksinimlerini belirler ve gerçek güvenlik uygulamalarına müdahale etmez. Bu standardın amacı sadece güvenlik dokümantasyonunu standartlaştırmak olduğu için şifreleme, test ve erişim kontrolü gibi teknik uygulamaları kapsamaz",
            "ISO/IEC 27001 standardı sadece kod kalitesini ölçer ve güvenlik özelliklerini değerlendirmez. Bu standardın tek amacı yazılımın teknik kalitesini artırmak olduğu için güvenlik riskleri ve kontrolleri ile ilgilenmez",
            "ISO/IEC 27001 standardı sadece büyük finansal kuruluşlarda uygulanabilir ve küçük veya orta ölçekli şirketler için uygun değildir. Standardın gereksinimleri çok karmaşık olduğu için sadece çok büyük bütçeli organizasyonlarda kullanılmalıdır",
            "ISO/IEC 27001 standardı sadece test aşamasında uygulanır ve geliştirme sürecinin planlama, tasarım, kodlama gibi diğer kritik aşamalarında herhangi bir rol oynamaz. Güvenlik testlerini standartlaştırmak standardın tek hedefidir",
            "ISO/IEC 27001 standardı bilgi güvenliği yönetim sistemi standardıdır ve risk yönetimi, güvenlik kontrolleri ile güvenlik politikalarını kapsar. Bu standard şifreleme, erişim kontrolü ve güvenlik testleri gibi teknik uygulamaları içerir ve yazılım ile sistemlerde güvenliği sağlamak için temel standart olarak kullanılır"
        ],
        correctAnswer: "E",
        explanation: "ISO/IEC 27001 standardı, bilgi güvenliği yönetim sistemi standardıdır. Bu standard risk yönetimi, güvenlik kontrolleri (şifreleme, erişim kontrolü, güvenlik testleri) ve güvenlik politikalarını kapsar. Bankacılık yazılımlarında kullanıcı verilerinin şifrelenmesi, güvenlik testlerinin yapılması ve erişim kontrolü ISO/IEC 27001'in kapsamına girer.",
        wrongExplanations: [
            { option: "B", reason: "ISO/IEC 27001 sadece dokümantasyonla sınırlı değildir. Risk yönetimi, güvenlik kontrolleri ve gerçek güvenlik uygulamalarını kapsar." },
            { option: "C", reason: "ISO/IEC 27001 sadece kod kalitesini değil, bilgi güvenliği yönetim sistemini kapsar. Güvenlik riskleri ve kontrolleri standardın temel konusudur." },
            { option: "D", reason: "ISO/IEC 27001 tüm şirket büyüklüklerinde uygulanabilir. Bilgi güvenliği yönetim sistemi için tasarlanmıştır." },
            { option: "E", reason: "ISO/IEC 27001 sadece test aşamasında değil, bilgi güvenliği yönetim sisteminin tüm süreçlerinde (planlama, uygulama, kontrol, iyileştirme) uygulanır." }
        ]
    },
    {
        question: "ISO 9000 ailesi içinde, kalite yönetim sistemi gereksinimlerini belirleyen ve sertifikasyon için kullanılan standart hangisidir?",
        options: [
            "ISO 9001 standardı sadece dokümantasyon gereksinimlerini belirler ve gerçek kalite yönetim süreçlerine müdahale etmez. Bu standardın amacı sadece kalite dokümantasyonunu standartlaştırmak olduğu için süreç yönetimi, müşteri odaklılık ve sürekli iyileştirme gibi faaliyetleri kapsamaz",
            "ISO 9001 standardı kalite yönetim sistemi gereksinimlerini belirler ve sertifikasyon için kullanılan temel kalite standardıdır. Bu standard süreç yönetimi, müşteri odaklılık ve sürekli iyileştirmeyi kapsar ve tüm sektörlerde uygulanabilir bir kalite yönetim çerçevesi sunar",
            "ISO 9001 standardı sadece kod kalitesini ölçer ve kalite yönetim sistemi ile ilgilenmez. Bu standardın tek amacı yazılımın teknik kalitesini değerlendirmek olduğu için organizasyonel kalite yönetimi gereksinimlerini belirlemez",
            "ISO 9001 standardı sadece büyük şirketlerde uygulanabilir ve küçük veya orta ölçekli şirketler için uygun değildir. Standardın gereksinimleri çok karmaşık olduğu için sadece çok büyük organizasyonlarda kullanılmalıdır",
            "ISO 9001 standardı sadece test aşamasında uygulanır ve geliştirme sürecinin planlama, tasarım, kodlama gibi diğer kritik aşamalarında herhangi bir rol oynamaz. Test süreçlerini standartlaştırmak standardın tek hedefidir"
        ],
        correctAnswer: "B",
        explanation: "ISO 9001 standardı, kalite yönetim sistemi gereksinimlerini belirler ve sertifikasyon için kullanılan temel kalite standardıdır. Bu standard süreç yönetimi, müşteri odaklılık ve sürekli iyileştirmeyi kapsar. ISO 9000 ise kalite yönetimi ve terminolojisi ile ilgili genel çerçeveyi sunar, ISO 90003 ise ISO 9001'in yazılım mühendisliğine uyarlanmış halidir.",
        wrongExplanations: [
            { option: "A", reason: "ISO 9001 sadece dokümantasyonla sınırlı değildir. Süreç yönetimi, müşteri odaklılık, sürekli iyileştirme gibi kalite yönetim sistemi gereksinimlerini kapsar." },
            { option: "C", reason: "ISO 9001 sadece kod kalitesini değil, kalite yönetim sistemi gereksinimlerini belirler. Organizasyonel kalite yönetimi standardın temel konusudur." },
            { option: "D", reason: "ISO 9001 tüm şirket büyüklüklerinde uygulanabilir. Kalite yönetim sistemi gereksinimlerini belirlemek için tasarlanmıştır." },
            { option: "E", reason: "ISO 9001 sadece test aşamasında değil, kalite yönetim sisteminin tüm süreçlerinde (planlama, uygulama, kontrol, iyileştirme) uygulanır." }
        ]
    },
    {
        question: "ISO 9001 standardının temel ilkelerinden biri olan 'PDCA Döngüsü' hangi aşamalardan oluşur?",
        options: [
            "ISO 9001 standardının PDCA döngüsü sadece planlama aşamasını kapsar ve uygulama, kontrol ve iyileştirme aşamalarını dışarıda bırakır. Bu döngünün amacı sadece proje planlamasını standartlaştırmak olduğu için süreç yönetiminin diğer kritik aşamalarına müdahale etmez",
            "ISO 9001 standardının PDCA döngüsü sadece test aşamasını kapsar ve geliştirme sürecinin planlama, tasarım, kodlama gibi diğer aşamalarını kapsamaz. Bu döngünün tek amacı test prosedürlerini standartlaştırmak olduğu için sürekli iyileştirme sürecini desteklemez",
            "ISO 9001 standardının PDCA döngüsü Planla, Uygula, Kontrol Et ve Önlem Al aşamalarından oluşur. Planla aşamasında hedefler belirlenir ve süreçler tanımlanır, Uygula aşamasında planlar uygulanır, Kontrol Et aşamasında performans ölçülür ve raporlanır, Önlem Al aşamasında ise iyileştirme yapılır. Bu döngü sürekli gelişimi garanti eder",
            "ISO 9001 standardının PDCA döngüsü sadece dokümantasyon gereksinimlerini belirler ve gerçek süreç yönetimi faaliyetlerine müdahale etmez. Bu döngünün kapsamı sadece dokümantasyon kalitesini artırmakla sınırlıdır ve sürekli gelişimi garanti etmez",
            "ISO 9001 standardının PDCA döngüsü sadece büyük ölçekli projelerde uygulanabilir ve küçük veya orta ölçekli projeler için uygun değildir. Döngünün gereksinimleri çok karmaşık olduğu için sadece çok büyük bütçeli projelerde kullanılmalıdır"
        ],
        correctAnswer: "C",
        explanation: "ISO 9001 standardı, Planla-Uygula-Kontrol Et-Önlem Al (PDCA) döngüsü temelinde çalışır. Planla (Plan) aşamasında hedefler belirlenir ve süreçler tanımlanır. Uygula (Do) aşamasında planlar uygulanır. Kontrol Et (Check) aşamasında performans ölçülür ve raporlanır. Önlem Al (Act) aşamasında iyileştirme yapılır. Bu döngü sürekli gelişimi garanti eder.",
        wrongExplanations: [
            { option: "A", reason: "PDCA döngüsü sadece planlamayı değil, tüm süreç yönetimi aşamalarını (Planla, Uygula, Kontrol Et, Önlem Al) kapsar." },
            { option: "B", reason: "PDCA döngüsü sadece test aşamasını değil, tüm süreç yönetimi döngüsünü kapsar ve sürekli iyileştirmeyi destekler." },
            { option: "D", reason: "PDCA döngüsü sadece dokümantasyonla sınırlı değildir. Gerçek süreç yönetimi faaliyetlerini kapsar ve sürekli gelişimi garanti eder." },
            { option: "E", reason: "PDCA döngüsü tüm proje büyüklüklerinde uygulanabilir. Sürekli iyileştirme için tasarlanmıştır." }
        ]
    },
    {
        question: "ISO 9001 standardının 7 temel ilkesinden biri olan 'Müşteri Odaklılık' ne anlama gelir?",
        options: [
            "ISO 9001 standardında müşteri odaklılık ilkesi sadece müşteri şikayetlerini dinlemek anlamına gelir ve ürün kalitesini artırmak için aktif önlemler almayı gerektirmez. Bu ilkenin amacı sadece müşteri geri bildirimlerini toplamak olduğu için süreç iyileştirme faaliyetlerine katkı sağlamaz",
            "ISO 9001 standardında müşteri odaklılık ilkesi müşteri memnuniyetinin öncelik olduğunu vurgular ve şirketlerin ürün ve hizmetlerinin müşteri beklentilerini karşılamasını sağlayacak sistemler kurmasına yardımcı olur. Bu ilke sadece müşteri şikayetlerini dinlemek değil, müşteri ihtiyaçlarını anlamak ve ürün kalitesini sürekli iyileştirmek anlamına gelir",
            "ISO 9001 standardında müşteri odaklılık ilkesi sadece büyük müşteriler için geçerlidir ve küçük müşterilerin ihtiyaçları dikkate alınmaz. Bu ilkenin kapsamı sadece çok büyük bütçeli müşterilerin gereksinimlerini karşılamakla sınırlıdır",
            "ISO 9001 standardında müşteri odaklılık ilkesi sadece satış aşamasında uygulanır ve geliştirme sürecinin planlama, tasarım, kodlama gibi diğer aşamalarında herhangi bir rol oynamaz. Müşteri ilişkilerini yönetmek ilkenin tek hedefidir",
            "ISO 9001 standardında müşteri odaklılık ilkesi sadece dokümantasyon gereksinimlerini belirler ve gerçek müşteri memnuniyeti faaliyetlerine müdahale etmez. Bu ilkenin kapsamı sadece müşteri dokümantasyonunu standartlaştırmakla sınırlıdır"
        ],
        correctAnswer: "B",
        explanation: "ISO 9001 standardının 7 temel ilkesinden biri olan 'Müşteri Odaklılık', müşteri memnuniyetinin öncelik olduğunu vurgular. Bu ilke, şirketlerin ürün ve hizmetlerinin müşteri beklentilerini karşılamasını sağlayacak sistemler kurmasına yardımcı olur. Müşteri odaklılık, sadece müşteri şikayetlerini dinlemek değil, müşteri ihtiyaçlarını anlamak ve ürün kalitesini sürekli iyileştirmek anlamına gelir.",
        wrongExplanations: [
            { option: "A", reason: "Müşteri odaklılık sadece şikayetleri dinlemekle sınırlı değildir. Ürün kalitesini artırmak ve süreç iyileştirme faaliyetlerine katkı sağlamak için aktif önlemler almayı gerektirir." },
            { option: "C", reason: "Müşteri odaklılık tüm müşteriler için geçerlidir. Büyük veya küçük, tüm müşterilerin ihtiyaçları dikkate alınır." },
            { option: "D", reason: "Müşteri odaklılık sadece satış aşamasında değil, yazılım geliştirme sürecinin tüm aşamalarında (planlama, tasarım, geliştirme, test) uygulanır." },
            { option: "E", reason: "Müşteri odaklılık sadece dokümantasyonla sınırlı değildir. Gerçek müşteri memnuniyeti faaliyetlerini kapsar ve süreç iyileştirmeyi destekler." }
        ]
    },
    {
        question: "ISO 9001 sertifikası almak için bir şirket hangi süreçleri tamamlamalıdır?",
        options: [
            "Sadece dokümantasyon hazırlamak yeterlidir ve gerçek süreç uygulamalarına gerek yoktur",
            "Sadece test aşamasında standartlara uyum yeterlidir ve diğer aşamalarda gereksinim yoktur",
            "Sadece büyük şirketler başvurabilir ve küçük şirketler sertifikasyon sürecine dahil olamaz",
            "Hazırlık, iç denetim, belgelendirme denetimi ve sertifika süreçlerini tamamlamalıdır. Hazırlık aşamasında dokümantasyon hazırlanır, iç denetim aşamasında şirket içi denetim yapılır, belgelendirme denetimi aşamasında bağımsız kuruluş tarafından denetim gerçekleştirilir ve sertifika 3 yıl geçerlidir",
            "Sadece kod kalitesini kontrol etmek yeterlidir ve kalite yönetim sistemi gereksinimlerine uyum gerekmez"
        ],
        correctAnswer: "D",
        explanation: "ISO 9001 sertifikası almak için şirketler şu süreçleri tamamlamalıdır: 1) Hazırlık: Dokümantasyon hazırlama, 2) İç Denetim: Şirket içi denetim ve iyileştirme, 3) Belgelendirme Denetimi: Bağımsız kuruluş tarafından denetim, 4) Sertifika: 3 yıl geçerlidir, yıllık gözetim denetimleri yapılır. Denetim, şirketin gerçekten belgelenmiş prosedürlerine uyup uymadığını kontrol eder.",
        wrongExplanations: [
            { option: "A", reason: "ISO 9001 sertifikasyonu sadece dokümantasyonla sınırlı değildir. Şirketlerin belgelenmiş prosedürlere gerçekten uyup uymadığını kontrol eder." },
            { option: "B", reason: "ISO 9001 sertifikasyonu sadece test aşamasında değil, kalite yönetim sisteminin tüm süreçlerinde (planlama, uygulama, kontrol, iyileştirme) uygulanır." },
            { option: "C", reason: "ISO 9001 sertifikasyonu tüm şirket büyüklüklerinde uygulanabilir. Küçük ve orta ölçekli şirketler de sertifika alabilir." },
            { option: "E", reason: "ISO 9001 sertifikasyonu sadece kod kalitesini değil, kalite yönetim sistemi gereksinimlerine uyumu kontrol eder." }
        ]
    },
    {
        question: "ISO 9001 sertifikasının sınırlamaları nelerdir?",
        options: [
            "ISO 9001 sertifikası kusursuz yazılım garantisi verir ve sertifikalı şirketlerin ürettiği tüm yazılımların hatasız olduğunu garanti eder. Bu sertifika yazılım kalitesini doğrudan garanti ettiği için teknik uygulamaların güçlü olmasına gerek yoktur",
            "ISO 9001 sertifikası belirli kodlama standartları ve test teknikleri zorunlu tutar ve şirketlerin bu teknik gereksinimlere mutlaka uymasını sağlar. Bu sertifika teknik detaylara odaklandığı için süreç uyumundan çok kod kalitesine önem verir",
            "ISO 9001 sertifikası sadece büyük şirketler için geçerlidir ve küçük veya orta ölçekli şirketlerin yazılım kalitesini garanti edemez. Bu sertifikanın kapsamı sadece çok büyük organizasyonların kalite standartlarını kontrol etmekle sınırlıdır",
            "ISO 9001 sertifikası yazılım performansını ve kullanıcı deneyimini doğrudan garanti eder ve sertifikalı şirketlerin ürettiği yazılımların her zaman en iyi performansı gösterdiğini garanti eder. Bu sertifika teknik mükemmellik anlamına gelir",
            "ISO 9001 sertifikasının önemli sınırlamaları vardır: kusursuz yazılım garantisi vermez, süreç uyumuna odaklanır ve teknik detaylara değil kalite yönetim süreçlerine uyuma odaklanır. Sertifikalı şirketler hata içeren yazılım üretebilir ve belirli kodlama standartları veya test teknikleri zorunlu tutmaz. Gerçek yazılım kalitesi için teknik uygulamaların da güçlü olması gerekir"
        ],
        correctAnswer: "E",
        explanation: "ISO 9001 sertifikasının önemli sınırlamaları vardır: 1) Kusursuz yazılım garantisi vermez - sertifikalı şirketler hata içeren yazılım üretebilir, 2) Süreç uyumuna odaklanır - teknik detaylara değil, kalite yönetim süreçlerine uyuma odaklanır, 3) Belirli kodlama standartları veya test teknikleri zorunlu tutmaz, 4) Yazılım performansı veya kullanıcı deneyiminden çok süreç uyumuna odaklanır. Gerçek yazılım kalitesi için teknik uygulamaların da güçlü olması gerekir.",
        wrongExplanations: [
            { option: "B", reason: "ISO 9001 sertifikası kusursuz yazılım garantisi vermez. Sertifikalı şirketler hata içeren yazılım üretebilir." },
            { option: "C", reason: "ISO 9001 belirli kodlama standartları veya test teknikleri zorunlu tutmaz. Süreç uyumuna odaklanır, teknik detaylara değil." },
            { option: "D", reason: "ISO 9001 tüm şirket büyüklüklerinde uygulanabilir. Küçük ve orta ölçekli şirketler de sertifika alabilir." },
            { option: "E", reason: "ISO 9001 yazılım performansını ve kullanıcı deneyimini doğrudan garanti etmez. Süreç uyumuna odaklanır." }
        ]
    },
    {
        question: "CMMI (Capability Maturity Model Integration) modelinde, süreç olgunluğunu değerlendirmek için kaç seviye bulunur?",
        options: [
            "CMMI modelinde süreç olgunluğunu değerlendirmek için sadece 3 seviye bulunur ve bu seviyeler sadece temel süreç yönetimi faaliyetlerini kapsar. Modelin amacı sadece basit süreç iyileştirme olduğu için gelişmiş olgunluk seviyeleri tanımlanmamıştır",
            "CMMI modelinde süreç olgunluğunu değerlendirmek için 5 seviye bulunur: Level 1 (Initial) kaotik ve öngörülemez süreçler, Level 2 (Managed) proje seviyesinde yönetim, Level 3 (Defined) organizasyon seviyesinde standart süreçler, Level 4 (Quantitatively Managed) ölçümlü ve istatistiksel yönetim, Level 5 (Optimizing) sürekli iyileştirme ve yenilik",
            "CMMI modelinde süreç olgunluğunu değerlendirmek için sadece kod kalitesi seviyeleri bulunur ve süreç yönetimi olgunluğu ile ilgilenmez. Modelin tek amacı yazılımın teknik kalitesini ölçmek olduğu için organizasyonel süreç iyileştirme seviyelerini kapsamaz",
            "CMMI modelinde süreç olgunluğunu değerlendirmek için sadece dokümantasyon kalitesi seviyeleri bulunur ve gerçek süreç performansını değerlendirmez. Modelin kapsamı sadece dokümantasyon standartlarına uyumu kontrol etmekle sınırlıdır",
            "CMMI modelinde süreç olgunluğunu değerlendirmek için sadece test aşaması seviyeleri bulunur ve geliştirme sürecinin planlama, tasarım, kodlama gibi diğer aşamalarını kapsamaz. Modelin tek hedefi test olgunluğunu ölçmek olduğu için genel süreç iyileştirme için kullanılamaz"
        ],
        correctAnswer: "B",
        explanation: "CMMI (Capability Maturity Model Integration) modelinde, süreç olgunluğunu değerlendirmek için 5 seviye bulunur: Level 1 (Initial) - Kaotik, öngörülemez süreçler, Level 2 (Managed) - Proje seviyesinde yönetim, Level 3 (Defined) - Organizasyon seviyesinde standart süreçler, Level 4 (Quantitatively Managed) - Ölçümlü ve istatistiksel yönetim, Level 5 (Optimizing) - Sürekli iyileştirme ve yenilik.",
        wrongExplanations: [
            { option: "B", reason: "CMMI'de 3 değil, 5 olgunluk seviyesi bulunur. Model gelişmiş süreç iyileştirme seviyelerini de kapsar." },
            { option: "C", reason: "CMMI sadece kod kalitesi seviyelerini değil, süreç olgunluğu seviyelerini değerlendirir. Organizasyonel süreç iyileştirme modelin temel konusudur." },
            { option: "D", reason: "CMMI sadece dokümantasyonla sınırlı değildir. Gerçek süreç performansını ve olgunluğunu değerlendirir." },
            { option: "E", reason: "CMMI sadece test aşamasını değil, tüm yazılım ve sistem geliştirme süreçlerinin olgunluğunu değerlendirir." }
        ]
    },
    {
        question: "ISO/IEC 25010 standardında tanımlanan 8 kalite kriterinden biri olan 'Verimlilik' ne anlama gelir?",
        options: [
            "ISO/IEC 25010 standardında verimlilik kriteri sadece kod kalitesini ölçer ve sistem kaynaklarının kullanımı ile ilgilenmez. Bu kriterin amacı sadece kodun teknik kalitesini değerlendirmek olduğu için CPU, bellek, ağ gibi kaynak kullanım metriklerini dikkate almaz",
            "ISO/IEC 25010 standardında verimlilik kriteri sadece kullanıcı deneyimini ölçer ve teknik performans özelliklerini kapsamaz. Bu kriterin tek amacı kullanıcı memnuniyetini değerlendirmek olduğu için sistem kaynaklarının kullanımı ile ilgilenmez",
            "ISO/IEC 25010 standardında verimlilik kriteri sadece dokümantasyon kalitesini ölçer ve yazılım ürününün gerçek performans özelliklerini değerlendirmez. Bu kriterin kapsamı sadece dokümantasyon standartlarına uyumu kontrol etmekle sınırlıdır",
            "ISO/IEC 25010 standardında verimlilik kriteri sadece büyük ölçekli sistemlerde uygulanabilir ve küçük veya orta ölçekli sistemler için uygun değildir. Kriterin gereksinimleri çok karmaşık olduğu için sadece çok büyük bütçeli projelerde kullanılmalıdır",
            "ISO/IEC 25010 standardında verimlilik kriteri kaynak kullanımı ile ilgilidir ve CPU, bellek, ağ gibi sistem kaynaklarının kullanımını değerlendirir. Bu kriter yazılımın belirli bir performans seviyesini sağlarken ne kadar kaynak kullandığını ölçer ve hızlı yüklenme gibi performans özelliklerini kapsar"
        ],
        correctAnswer: "E",
        explanation: "ISO/IEC 25010 standardında tanımlanan 8 kalite kriterinden biri olan 'Verimlilik', kaynak kullanımı ile ilgilidir. Bu kriter CPU, bellek, ağ gibi sistem kaynaklarının kullanımını değerlendirir. Örneğin, bir e-ticaret sitesinin hızlı yüklenmesi verimlilik kriterine uygundur. Verimlilik, yazılımın belirli bir performans seviyesini sağlarken ne kadar kaynak kullandığını ölçer.",
        wrongExplanations: [
            { option: "B", reason: "Verimlilik sadece kod kalitesini değil, sistem kaynaklarının (CPU, bellek, ağ) kullanımını ölçer." },
            { option: "C", reason: "Verimlilik sadece kullanıcı deneyimini değil, teknik performans özelliklerini (kaynak kullanımı) kapsar." },
            { option: "D", reason: "Verimlilik sadece dokümantasyonla sınırlı değildir. Yazılım ürününün gerçek performans özelliklerini değerlendirir." },
            { option: "E", reason: "Verimlilik tüm sistem büyüklüklerinde uygulanabilir. Kaynak kullanımını değerlendirmek için tasarlanmıştır." }
        ]
    },
    {
        question: "ISO 90003 standardı ne anlama gelir?",
        options: [
            "ISO 90003 standardı sadece kod kalitesini ölçer ve kalite yönetim sistemi ile ilgilenmez. Bu standardın amacı sadece yazılımın teknik kalitesini değerlendirmek olduğu için ISO 9001 kalite yönetim sistemi gereksinimlerini yazılım mühendisliğine uyarlamaz",
            "ISO 90003 standardı sadece test aşamasında uygulanır ve geliştirme sürecinin planlama, tasarım, kodlama gibi diğer aşamalarında kullanılamaz. Bu standardın tek amacı test prosedürlerini standartlaştırmak olduğu için kalite yönetim sistemi gereksinimlerini kapsamaz",
            "ISO 90003 standardı sadece dokümantasyon gereksinimlerini belirler ve gerçek kalite yönetim süreçlerine müdahale etmez. Bu standardın kapsamı sadece dokümantasyon kalitesini artırmakla sınırlıdır ve ISO 9001 ile herhangi bir ilişkisi yoktur",
            "ISO 90003 standardı sadece büyük şirketlerde uygulanabilir ve küçük veya orta ölçekli şirketler için uygun değildir. Standardın gereksinimleri çok karmaşık olduğu için sadece çok büyük organizasyonlarda kullanılmalıdır",
            "ISO 90003 standardı ISO 9001 kalite yönetim standardının yazılım mühendisliğine uyarlanmış halidir ve yazılım geliştirme süreçlerinde kaliteyi yönlendirir. Bu standard yazılım projelerinde kalite yönetimini kolaylaştırmayı amaçlar ve proje dokümantasyonunun ve süreç kontrollerinin ISO 90003'e uygun tutulmasını gerektirir"
        ],
        correctAnswer: "E",
        explanation: "ISO 90003 standardı, ISO 9001 kalite yönetim standardının yazılım mühendisliğine uyarlanmış halidir. Bu standard, yazılım geliştirme süreçlerinde kaliteyi yönlendirir ve yazılım projelerinde kalite yönetimini kolaylaştırmayı amaçlar. Örneğin, bir ERP yazılımı geliştirilirken proje dokümantasyonunun ve süreç kontrollerinin ISO 90003'e uygun tutulması gerekir.",
        wrongExplanations: [
            { option: "B", reason: "ISO 90003 sadece kod kalitesini değil, ISO 9001 kalite yönetim sistemi gereksinimlerini yazılım mühendisliğine uyarlar." },
            { option: "C", reason: "ISO 90003 sadece test aşamasında değil, yazılım geliştirme sürecinin tüm aşamalarında (planlama, tasarım, geliştirme, test) uygulanır." },
            { option: "D", reason: "ISO 90003 sadece dokümantasyonla sınırlı değildir. ISO 9001 kalite yönetim sistemi gereksinimlerini yazılım mühendisliğine uyarlar." },
            { option: "E", reason: "ISO 90003 tüm şirket büyüklüklerinde uygulanabilir. Yazılım projelerinde kalite yönetimini kolaylaştırmak için tasarlanmıştır." }
        ]
    },
    {
        question: "ISO 9001 standardının ISO 9000'den farkı nedir?",
        options: [
            "ISO 9001 standardı sadece dokümantasyon gereksinimlerini belirler ve ISO 9000'den farklı değildir. Her iki standardın da amacı sadece dokümantasyon kalitesini artırmak olduğu için aralarında önemli bir fark yoktur",
            "ISO 9001 standardı sadece kod kalitesini ölçer ve ISO 9000 kalite yönetim sistemi gereksinimlerini belirlemez. ISO 9001'in tek amacı yazılımın teknik kalitesini değerlendirmek olduğu için ISO 9000 ile aynı kapsamda değildir",
            "ISO 9000 ve ISO 9001 arasındaki temel fark şudur: ISO 9000 kalite yönetimi ve terminolojisi ile ilgili genel çerçeveyi sunar ve ISO 9001'in temel referans standardıdır, ISO 9001 ise kalite yönetim sistemi gereksinimlerini belirler ve sertifikasyon için kullanılan temel kalite standardıdır. ISO 9000 tüm kalite yönetim sistemlerinin ortak dilini oluşturur",
            "ISO 9001 standardı sadece büyük şirketler için geçerlidir ve ISO 9000 tüm şirket büyüklüklerinde uygulanabilir. ISO 9001'in gereksinimleri çok karmaşık olduğu için sadece çok büyük organizasyonlarda kullanılmalıdır",
            "ISO 9001 standardı sadece test aşamasında uygulanır ve ISO 9000 geliştirme sürecinin tüm aşamalarında kullanılır. ISO 9001'in tek hedefi test prosedürlerini standartlaştırmak olduğu için ISO 9000'den daha sınırlı bir kapsama sahiptir"
        ],
        correctAnswer: "C",
        explanation: "ISO 9000 ve ISO 9001 arasındaki temel fark şudur: ISO 9000, kalite yönetimi ve terminolojisi ile ilgili genel çerçeveyi sunar ve ISO 9001'in temel referans standardıdır. ISO 9001 ise kalite yönetim sistemi gereksinimlerini belirler ve sertifikasyon için kullanılan temel kalite standardıdır. ISO 9000 tüm kalite yönetim sistemlerinin ortak dilini oluşturur, ISO 9001 ise şirketlerin sertifikasyon alabilmesi için uyması gereken gereksinimleri tanımlar.",
        wrongExplanations: [
            { option: "B", reason: "ISO 9001 sadece dokümantasyonla sınırlı değildir. ISO 9001 kalite yönetim sistemi gereksinimlerini belirler, ISO 9000 ise genel çerçeveyi sunar." },
            { option: "C", reason: "ISO 9001 sadece kod kalitesini değil, kalite yönetim sistemi gereksinimlerini belirler. ISO 9000 ile aynı kapsamda değildir." },
            { option: "D", reason: "ISO 9001 tüm şirket büyüklüklerinde uygulanabilir. ISO 9000'den farkı sertifikasyon için kullanılmasıdır." },
            { option: "E", reason: "ISO 9001 sadece test aşamasında değil, kalite yönetim sisteminin tüm süreçlerinde uygulanır. ISO 9000'den farkı sertifikasyon için kullanılmasıdır." }
        ]
    },
    {
        question: "ISO/IEC 15504 (SPICE) standardında 'Level 3 - Defined' seviyesi ne anlama gelir?",
        options: [
            "ISO/IEC 15504 standardında Level 3 - Defined seviyesi sadece kod kalitesinin standartlaştırıldığı anlamına gelir ve süreç yönetimi ile ilgilenmez. Bu seviyenin amacı sadece kod standartlarını belirlemek olduğu için organizasyonel süreç standartlaştırmasını kapsamaz",
            "ISO/IEC 15504 standardında Level 3 - Defined seviyesi sadece test süreçlerinin standartlaştırıldığı anlamına gelir ve geliştirme sürecinin planlama, tasarım, kodlama gibi diğer aşamalarını kapsamaz. Bu seviyenin tek amacı test prosedürlerini standartlaştırmak olduğu için genel süreç iyileştirme için yetersizdir",
            "ISO/IEC 15504 standardında Level 3 - Defined seviyesi sürecin standartlaştırıldığı anlamına gelir ve organizasyon seviyesinde standart süreçler tanımlanmıştır. Bu seviyede süreçler belgelenmiş, standartlaştırılmış ve organizasyon genelinde uygulanmaktadır. Level 3'e ulaşmak için bir yazılım şirketi süreçlerini değerlendirir ve standartlaştırılmış süreçler oluşturur",
            "ISO/IEC 15504 standardında Level 3 - Defined seviyesi sadece dokümantasyon standartlarının belirlendiği anlamına gelir ve gerçek süreç uygulamalarını kapsamaz. Bu seviyenin kapsamı sadece dokümantasyon kalitesini artırmakla sınırlıdır",
            "ISO/IEC 15504 standardında Level 3 - Defined seviyesi sadece büyük projelerde uygulanabilir ve küçük veya orta ölçekli projeler için uygun değildir. Bu seviyenin gereksinimleri çok karmaşık olduğu için sadece çok büyük bütçeli projelerde kullanılmalıdır"
        ],
        correctAnswer: "C",
        explanation: "ISO/IEC 15504 (SPICE) standardında 'Level 3 - Defined' seviyesi, sürecin standartlaştırıldığı anlamına gelir. Bu seviyede, organizasyon seviyesinde standart süreçler tanımlanmıştır. Süreçler belgelenmiş, standartlaştırılmış ve organizasyon genelinde uygulanmaktadır. Level 3'e ulaşmak için bir yazılım şirketi, süreçlerini değerlendirir ve standartlaştırılmış süreçler oluşturur.",
        wrongExplanations: [
            { option: "B", reason: "Level 3 - Defined sadece kod kalitesini değil, organizasyon seviyesinde standart süreçlerin tanımlandığını gösterir." },
            { option: "C", reason: "Level 3 - Defined sadece test süreçlerini değil, tüm yazılım geliştirme süreçlerinin standartlaştırıldığını gösterir." },
            { option: "D", reason: "Level 3 - Defined sadece dokümantasyonla sınırlı değildir. Gerçek süreç uygulamalarının standartlaştırıldığını gösterir." },
            { option: "E", reason: "Level 3 - Defined tüm proje büyüklüklerinde uygulanabilir. Süreç standartlaştırması için tasarlanmıştır." }
        ]
    },
    {
        question: "ISO 9001 standardının 'Sürekli İyileştirme' ilkesi ne anlama gelir?",
        options: [
            "ISO 9001 standardında sürekli iyileştirme ilkesi sadece kod kalitesini artırmak anlamına gelir ve süreç yönetimi ile ilgilenmez. Bu ilkenin amacı sadece teknik kaliteyi iyileştirmek olduğu için organizasyonel süreç iyileştirme faaliyetlerine katkı sağlamaz",
            "ISO 9001 standardında sürekli iyileştirme ilkesi her zaman daha iyisini hedefleme anlamına gelir ve yazılım şirketlerinin süreçlerini sürekli analiz etmesini ve geliştirme yolları aramasını gerektirir. Bu ilke daha iyi test yöntemleri, daha hızlı teslimat veya daha anlaşılır dokümantasyon gibi alanları kapsayabilir ve müşteri ile ekip üyelerinden gelen geri bildirimler iyileştirme fırsatlarını tespit etmek için önemlidir",
            "ISO 9001 standardında sürekli iyileştirme ilkesi sadece test aşamasında uygulanır ve geliştirme sürecinin planlama, tasarım, kodlama gibi diğer aşamalarında herhangi bir rol oynamaz. Bu ilkenin tek amacı test prosedürlerini iyileştirmek olduğu için genel süreç geliştirme için yetersizdir",
            "ISO 9001 standardında sürekli iyileştirme ilkesi sadece dokümantasyon kalitesini artırmak anlamına gelir ve gerçek süreç iyileştirme faaliyetlerine müdahale etmez. Bu ilkenin kapsamı sadece dokümantasyon standartlarına uyumu iyileştirmekle sınırlıdır",
            "ISO 9001 standardında sürekli iyileştirme ilkesi sadece büyük şirketler için geçerlidir ve küçük veya orta ölçekli şirketlerde uygulanamaz. Bu ilkenin gereksinimleri çok karmaşık olduğu için sadece çok büyük organizasyonlarda kullanılmalıdır"
        ],
        correctAnswer: "B",
        explanation: "ISO 9001 standardının 7 temel ilkesinden biri olan 'Sürekli İyileştirme', her zaman daha iyisini hedefleme anlamına gelir. Bu ilke, yazılım şirketlerinin süreçlerini sürekli analiz etmesini ve geliştirme yolları aramasını gerektirir. Bu, daha iyi test yöntemleri, daha hızlı teslimat veya daha anlaşılır dokümantasyon gibi alanları kapsayabilir. Müşteri ve ekip üyelerinden gelen geri bildirimler, iyileştirme fırsatlarını tespit etmek için önemlidir.",
        wrongExplanations: [
            { option: "B", reason: "Sürekli iyileştirme sadece kod kalitesini değil, tüm süreç yönetimi faaliyetlerini (test, teslimat, dokümantasyon, vb.) kapsar." },
            { option: "C", reason: "Sürekli iyileştirme sadece test aşamasında değil, yazılım geliştirme sürecinin tüm aşamalarında (planlama, tasarım, geliştirme, test) uygulanır." },
            { option: "D", reason: "Sürekli iyileştirme sadece dokümantasyonla sınırlı değildir. Gerçek süreç iyileştirme faaliyetlerini kapsar." },
            { option: "E", reason: "Sürekli iyileştirme tüm şirket büyüklüklerinde uygulanabilir. Her zaman daha iyisini hedeflemek için tasarlanmıştır." }
        ]
    },
    {
        question: "CMMI modelinde 'Level 5 - Optimizing' seviyesi ne anlama gelir?",
        options: [
            "CMMI modelinde Level 5 - Optimizing seviyesi sadece kod kalitesinin optimize edildiği anlamına gelir ve süreç yönetimi ile ilgilenmez. Bu seviyenin amacı sadece teknik kaliteyi artırmak olduğu için organizasyonel süreç iyileştirme faaliyetlerine katkı sağlamaz",
            "CMMI modelinde Level 5 - Optimizing seviyesi sadece test süreçlerinin optimize edildiği anlamına gelir ve geliştirme sürecinin planlama, tasarım, kodlama gibi diğer aşamalarını kapsamaz. Bu seviyenin tek amacı test prosedürlerini optimize etmek olduğu için genel süreç geliştirme için yetersizdir",
            "CMMI modelinde Level 5 - Optimizing seviyesi sürekli iyileştirme ve yenilik anlamına gelir ve bu en yüksek olgunluk seviyesidir. Bu seviyede organizasyon süreçlerini sürekli olarak optimize eder, yenilikler yapar ve süreç iyileştirmelerini sistematik olarak uygular. Level 5'e ulaşan bir organizasyon süreçlerini sürekli olarak geliştirir ve değişen ihtiyaçlara hızlı bir şekilde adapte olur",
            "CMMI modelinde Level 5 - Optimizing seviyesi sadece dokümantasyon kalitesinin optimize edildiği anlamına gelir ve gerçek süreç iyileştirme faaliyetlerine müdahale etmez. Bu seviyenin kapsamı sadece dokümantasyon standartlarına uyumu optimize etmekle sınırlıdır",
            "CMMI modelinde Level 5 - Optimizing seviyesi sadece büyük projelerde uygulanabilir ve küçük veya orta ölçekli projeler için uygun değildir. Bu seviyenin gereksinimleri çok karmaşık olduğu için sadece çok büyük bütçeli projelerde kullanılmalıdır"
        ],
        correctAnswer: "C",
        explanation: "CMMI modelinde 'Level 5 - Optimizing' seviyesi, sürekli iyileştirme ve yenilik anlamına gelir. Bu en yüksek olgunluk seviyesidir. Bu seviyede, organizasyon süreçlerini sürekli olarak optimize eder, yenilikler yapar ve süreç iyileştirmelerini sistematik olarak uygular. Level 5'e ulaşan bir organizasyon, süreçlerini sürekli olarak geliştirir ve değişen ihtiyaçlara hızlı bir şekilde adapte olur.",
        wrongExplanations: [
            { option: "B", reason: "Level 5 - Optimizing sadece kod kalitesini değil, tüm organizasyonel süreç iyileştirme faaliyetlerini (sürekli iyileştirme, yenilik) kapsar." },
            { option: "C", reason: "Level 5 - Optimizing sadece test süreçlerini değil, tüm yazılım geliştirme süreçlerinin sürekli optimizasyonunu kapsar." },
            { option: "D", reason: "Level 5 - Optimizing sadece dokümantasyonla sınırlı değildir. Gerçek süreç iyileştirme ve yenilik faaliyetlerini kapsar." },
            { option: "E", reason: "Level 5 - Optimizing tüm proje büyüklüklerinde uygulanabilir. Sürekli iyileştirme ve yenilik için tasarlanmıştır." }
        ]
    },
    {
        question: "ISO/IEC 25010 standardında tanımlanan 'Bakım Kolaylığı' kriteri ne anlama gelir?",
        options: [
            "ISO/IEC 25010 standardında bakım kolaylığı kriteri sadece dokümantasyon kalitesini ölçer ve kod okunabilirliği ile ilgilenmez. Bu kriterin amacı sadece dokümantasyon standartlarına uyumu kontrol etmek olduğu için kodun teknik özelliklerini dikkate almaz",
            "ISO/IEC 25010 standardında bakım kolaylığı kriteri sadece test süreçlerini ölçer ve geliştirme sürecinin planlama, tasarım, kodlama gibi diğer aşamalarını kapsamaz. Bu kriterin tek amacı test prosedürlerini değerlendirmek olduğu için kod bakımı ile ilgilenmez",
            "ISO/IEC 25010 standardında bakım kolaylığı kriteri sadece büyük ölçekli sistemlerde uygulanabilir ve küçük veya orta ölçekli sistemler için uygun değildir. Kriterin gereksinimleri çok karmaşık olduğu için sadece çok büyük bütçeli projelerde kullanılmalıdır",
            "ISO/IEC 25010 standardında bakım kolaylığı kriteri sadece performans özelliklerini ölçer ve kod yapısı ile ilgilenmez. Bu kriterin kapsamı sadece sistem performansını değerlendirmekle sınırlıdır ve kod okunabilirliği gibi özellikleri dikkate almaz",
            "ISO/IEC 25010 standardında bakım kolaylığı kriteri kod okunabilirliği ve güncellenebilirlik anlamına gelir ve yazılımın ne kadar kolay okunabildiğini, anlaşılabildiğini ve güncellenebildiğini değerlendirir. Bu kriter iyi yapılandırılmış, okunabilir ve dokümante edilmiş kodun bakım kolaylığı kriterine uygun olduğunu belirtir ve yazılımın sürdürülebilirliğini ölçer"
        ],
        correctAnswer: "E",
        explanation: "ISO/IEC 25010 standardında tanımlanan 8 kalite kriterinden biri olan 'Bakım Kolaylığı', kod okunabilirliği ve güncellenebilirlik anlamına gelir. Bu kriter, yazılımın ne kadar kolay okunabildiğini, anlaşılabildiğini ve güncellenebildiğini değerlendirir. İyi yapılandırılmış, okunabilir ve dokümante edilmiş kod, bakım kolaylığı kriterine uygundur.",
        wrongExplanations: [
            { option: "B", reason: "Bakım kolaylığı sadece dokümantasyonla sınırlı değildir. Kod okunabilirliği ve güncellenebilirliği kapsar." },
            { option: "C", reason: "Bakım kolaylığı sadece test süreçlerini değil, kod yapısı ve okunabilirliğini değerlendirir." },
            { option: "D", reason: "Bakım kolaylığı tüm sistem büyüklüklerinde uygulanabilir. Kod okunabilirliği ve güncellenebilirliğini değerlendirmek için tasarlanmıştır." },
            { option: "E", reason: "Bakım kolaylığı sadece performans özelliklerini değil, kod okunabilirliği ve güncellenebilirliğini kapsar." }
        ]
    },
    {
        question: "ISO 9001 sertifikasının geçerlilik süresi ne kadardır?",
        options: [
            "ISO 9001 sertifikası sadece 1 yıl geçerlidir ve her yıl yenilenmesi gerekir. Sertifikanın amacı sadece kısa vadeli kalite kontrolü sağlamak olduğu için uzun vadeli kalite yönetimi için uygun değildir",
            "ISO 9001 sertifikası süresiz geçerlidir ve yenilenmesi gerekmez. Sertifika bir kez alındıktan sonra şirketlerin kalite standartlarına uyumunu süresiz olarak garanti eder ve herhangi bir denetim gerektirmez",
            "ISO 9001 sertifikası sadece 6 ay geçerlidir ve çok sık yenilenmesi gerekir. Sertifikanın amacı sadece çok kısa vadeli kalite kontrolü sağlamak olduğu için sürekli denetim gerektirir",
            "ISO 9001 sertifikası 3 yıl geçerlidir ve sertifika alındıktan sonra yıllık gözetim denetimleri yapılır. Bu denetimler şirketin ISO 9001 gereksinimlerine sürekli uyum sağladığını kontrol eder ve 3 yıl sonunda sertifika yenilenmesi gerekir. Bu süreç şirketlerin kalite yönetim sistemlerini sürekli olarak iyileştirmesini ve güncel tutmasını sağlar",
            "ISO 9001 sertifikası sadece büyük şirketler için geçerlidir ve küçük veya orta ölçekli şirketlerin sertifika alması mümkün değildir. Sertifikanın gereksinimleri çok karmaşık olduğu için sadece çok büyük organizasyonlar sertifika alabilir"
        ],
        correctAnswer: "D",
        explanation: "ISO 9001 sertifikası 3 yıl geçerlidir. Sertifika alındıktan sonra, yıllık gözetim denetimleri yapılır. Bu denetimler, şirketin ISO 9001 gereksinimlerine sürekli uyum sağladığını kontrol eder. 3 yıl sonunda sertifika yenilenmesi gerekir. Bu süreç, şirketlerin kalite yönetim sistemlerini sürekli olarak iyileştirmesini ve güncel tutmasını sağlar.",
        wrongExplanations: [
            { option: "B", reason: "ISO 9001 sertifikası 1 yıl değil, 3 yıl geçerlidir. Yıllık gözetim denetimleri yapılır ancak sertifika 3 yıl için geçerlidir." },
            { option: "C", reason: "ISO 9001 sertifikası süresiz geçerli değildir. 3 yıl geçerlidir ve yenilenmesi gerekir. Yıllık gözetim denetimleri yapılır." },
            { option: "D", reason: "ISO 9001 sertifikası 6 ay değil, 3 yıl geçerlidir. Yıllık gözetim denetimleri yapılır." },
            { option: "E", reason: "ISO 9001 sertifikası tüm şirket büyüklüklerinde uygulanabilir. Küçük ve orta ölçekli şirketler de sertifika alabilir." }
        ]
    }
];

