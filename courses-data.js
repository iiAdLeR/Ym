// Kurs ve Bölüm Verileri
const coursesData = {
    courses: [
        {
            id: "yapay-zeka",
            name: "Yapay Zekâ",
            description: "Yapay zekâ kavramları, ajanlar ve akıllı sistemler",
            icon: "🧠",
            chapters: [
                {
                    id: "chapter-1",
                    title: "Yapay Zekâ Tanımları ve Ajanlar",
                    description: "Yapay zekâ tanımları, yaklaşımlar, ajan kavramı ve çevresel özellikler",
                    quizFile: "quiz.html",
                    questionsFile: "Kurslar/yapay zeka bölümleri/1bölümsorular.js"
                },
                {
                    id: "chapter-2",
                    title: "Ajan Türleri ve Yapısı",
                    description: "Ajan türleri (basit refleks, model-bazlı, hedefe-dayalı, fayda-tabanlı, öğrenmeye-dayalı), mimari ve ajan programı, sensörler ve aktüatörler",
                    quizFile: "quiz.html",
                    questionsFile: "Kurslar/yapay zeka bölümleri/2bölümsorular.js"
                },
                {
                    id: "chapter-3",
                    title: "Problem Çözme Ajanları ve Arama Stratejileri",
                    description: "Problem çözme süreci, arama stratejileri (BFS, DFS, UCS, IDS, A*), durum uzayı, arama ağacı, kör ve bilgili arama",
                    quizFile: "quiz.html",
                    questionsFile: "Kurslar/yapay zeka bölümleri/3bölümsorular.js"
                },
                {
                    id: "chapter-4",
                    title: "Derinlik Sınırlı Arama, İteratif Derinleşme, İki Yönlü Arama ve Bilgili Arama",
                    description: "Depth-Limited Search (DLS), Iterative Deepening Search (IDS), Bidirectional Search, Tree Search vs Graph Search, Greedy Best-First Search, A* algoritması, kabul edilebilir ve tutarlı sezgiseller, 8-Puzzle problemi",
                    quizFile: "quiz.html",
                    questionsFile: "Kurslar/yapay zeka bölümleri/4bölümsorular.js"
                },
                {
                    id: "chapter-5",
                    title: "A* Algoritması, Tutarlı ve Geçerli Heuristikler, Bellek Sınırlı Arama ve Yerel Arama",
                    description: "A* algoritması özellikleri, geçerli ve tutarlı heuristikler, IDA*, RBFS, SMA*, heuristik kalitesi, rahatlatılmış problemler, Pattern Database, Hill Climbing, Simulated Annealing, Local Beam Search",
                    quizFile: "quiz.html",
                    questionsFile: "Kurslar/yapay zeka bölümleri/5bölümsorular.js"
                },
                {
                    id: "chapter-6",
                    title: "Genetik Algoritmalar (GA)",
                    description: "Genetik algoritmaların tanımları, kodlama türleri, seçim, çaprazlama, mutasyon, biyolojik prensipler, SGA, klasik optimizasyon yöntemlerinden farkları",
                    quizFile: "quiz.html",
                    questionsFile: "Kurslar/yapay zeka bölümleri/6bölümsorular.js"
                }
                // İleride eklenebilecek diğer bölümler:
                // {
                //     id: "chapter-2",
                //     title: "Arama Algoritmaları",
                //     description: "Genişlik öncelikli, derinlik öncelikli, A* arama algoritmaları",
                //     quizFile: "quiz-chapter-2.html",
                //     questionsFile: "questions-chapter-2.js"
                // }
            ]
        },
        {
            id: "kalite-guvenilirlik",
            name: "Kalite Güvenilirlik",
            description: "Yazılım kalitesi ve güvenilirlik analizi",
            icon: "🔒",
            chapters: [
                // İleride eklenebilecek bölümler
            ]
        }
    ]
};

