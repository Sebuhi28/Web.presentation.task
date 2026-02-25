// SUAL BAZASI
const quizData = {
    general: [
        { q: "Azərbaycanın paytaxtı?", o: ["Gəncə", "Bakı", "Şəki", "Lənkəran"], c: 1 },
        { q: "Dünyanın ən hündür zirvəsi?", o: ["Everest", "K2", "Elbrus", "Monblan"], c: 0 },
        { q: "İnsan bədənində neçə sümük var?", o: ["206", "201", "210", "198"], c: 0 },
        { q: "Dünyanın ən böyük okeanı?", o: ["Atlantik", "Hind", "Sakit", "Arktik"], c: 2 },
        { q: "İşığın sürəti nə qədərdir?", o: ["300,000 km/s", "150,000 km/s", "100,000 km/s", "250,000 km/s"], c: 0 },
        { q: "Dünyanın ən böyük ölkəsi?", o: ["Kanada", "Çin", "Rusiya", "ABŞ"], c: 2 },
        { q: "İnsan bədənində ən böyük orqan?", o: ["Ürək", "Dəri", "Böyrək", "Qaraciyər"], c: 1 },
        { q: "Dünyanın ən uzun çayı?", o: ["Nil", "Amazon", "Yangtze", "Mississippi"], c: 1 },
        { q: "Hansı planet Günəşə ən yaxındır?", o: ["Venera", "Mars", "Merkuri", "Yupiter"], c: 2 },
        { q: "Dünyanın ən böyük heyvanı?", o: ["Afrika fil", "Mavi balina", "Böyük ağ köpəkbalığı", "Zürafə"], c: 1 }
    ],
    science: [
        { q: "H2O nəyin formuludur?", o: ["Hava", "Qızıl", "Su", "Torpaq"], c: 2 },
        { q: "İşıq sürəti neçədir?", o: ["300,000 km/s", "100 km/s", "500 km/s", "1000 km/s"], c: 0 },
        { q: "Atomun mərkəzində nə var?", o: ["Elektron", "Proton və Neytron", "Molekul", "İon"], c: 1 },
        { q: "Yer kürəsinin ən böyük təbəqəsi hansıdır?", o: ["Litosfer", "Atmosfer", "Hidrosfer", "Mantele"], c: 3 },
        { q: "Bitkilər hansı proseslə qida hazırlayır?", o: ["Fotosintez", "Həzm", "Nəfəsalma", "Transpirasiya"], c: 0 },
        { q: "İnsan bədənində ən böyük sümük hansıdır?", o: ["Femur", "Humerus", "Tibia", "Radius"], c: 0 },
        { q: "Elektrik cərəyanı nə ilə ölçülür?", o: ["Volt", "Amper", "Ohm", "Watt"], c: 1 },
        { q: "Dünyanın ən sərt maddəsi nədir?", o: ["Qızıl", "Almaz", "Titan", "Platina"], c: 1 },
        { q: "Hansı qaz nəfəs almaq üçün vacibdir?", o: ["Karbon dioksid", "Oksigen", "Azot", "Helyum"], c: 1 },
        { q: "İnsan bədənində neçə ürək var?", o: ["1", "2", "3", "4"], c: 0 },
        { q: "Yer kürəsi hansı təbəqədən ibarətdir?", o: ["Litosfer", "Atmosfer", "Hidrosfer", "Mantele"], c: 0 },
        { q: "Bitkilər hansı proseslə qida hazırlayır?", o: ["Fotosintez", "Həzm", "Nəfəsalma", "Transpirasiya"], c: 0 },
        { q: "İnsan bədənində ən böyük sümük hansıdır?", o: ["Femur", "Humerus", "Tibia", "Radius"], c: 0 },
        { q: "Elektrik cərəyanı nə ilə ölçülür?", o: ["Volt", "Amper", "Ohm", "Watt"], c: 1 },
        { q: "Dünyanın ən sərt maddəsi nədir?", o: ["Qızıl", "Almaz", "Titan", "Platina"], c: 1 },
    ],
    history: [
        { q: "II Dünya müharibəsi nə vaxt bitib?", o: ["1939", "1941", "1945", "1950"], c: 2 },
        { q: "Azərbaycanın müstəqillik günü nə vaxtdır?", o: ["28 May", "18 Oktyabr", "30 Avqust", "15 Noyabr"], c: 0 },
        { q: "Napoleon Bonapart hansı ölkənin lideri idi?", o: ["İngiltərə", "Fransa", "İspaniya", "İtaliya"], c: 1 },
        { q: "Böyük İpək Yolu hansı iki böyük mədəniyyəti birləşdirirdi?", o: ["Roma və Misir", "Çin və Avropa", "Hindistan və Yunanıstan", "Fars və Osmanlı"], c: 1 },
        { q: "Amerika Birləşmiş Ştatları nə vaxt müstəqillik qazandı?", o: ["1776", "1783", "1800", "1812"], c: 0 },
        { q: "Renessans dövrü hansı əsrləri əhatə edir?", o: ["12-14-cü əsrlər", "14-17-ci əsrlər", "17-19-cu əsrlər", "19-20-ci əsrlər"], c: 1 },
        { q: "Hansı imperiya ən böyük əraziyə sahib idi?", o: ["Mongol İmperiyası", "Britaniya İmperiyası", "Roma İmperiyası", "Osmanlı İmperiyası"], c: 1 },
        { q: "Qədim Misirin ən məşhur fironu kim idi?", o: ["Tutankhamun", "Ramses II", "Cleopatra", "Akhenaten"], c: 0 },
    ],
    sports: [
        { q: "Futbolda neçə oyunçu olur?", o: ["10", "11", "12", "7"], c: 1 },
        { q: "Olimpiya oyunları neçə ildən bir keçirilir?", o: ["2", "3", "4", "5"], c: 2 },
        { q: "NBA hansı idman növüdür?", o: ["Futbol", "Beysbol", "Basketbol", "Voleybol"], c: 2 },
        { q: "Formula 1-də ən çox dünya çempionluğu qazanan sürücü kimdir?", o: ["Lewis Hamilton", "Michael Schumacher", "Ayrton Senna", "Sebastian Vettel"], c: 1 },
        { q: "Tennisdə Grand Slam turnirlərindən biri deyil?", o: ["Wimbledon", "US Open", "French Open", "Copa America"], c: 3 },
        { q: "Hansı ölkə futbol üzrə 2018 Dünya Çempionu oldu?", o: ["Braziliya", "Almaniya", "Fransa", "Xorvatiya"], c: 2 },
        { q: "Basketbolda 'triple-double' nə deməkdir?", o: ["10 xal, 10 ribaund, 10 asist", "20 xal, 5 ribaund, 5 asist", "15 xal, 15 ribaund, 15 asist", "5 xal, 10 ribaund, 10 asist"], c: 0 },
        { q: "Olimpiya oyunları harada yaranıb?", o: ["Roma", "Atina", "Sparta", "Korinf"], c: 1},
        { q: "Futbol üzrə ən çox qol vuran oyunçu kimdir?", o: ["Cristiano Ronaldo", "Lionel Messi", "Pele", "Romario"], c: 0 },
        { q: "Hansı idman növündə 'albatros' termini istifadə olunur?", o: ["Golf", "Tennis", "Basketbol", "Futbol"], c: 0 },
        { q: "Formula 1-də ən çox dünya çempionluğu qazanan sürücü kimdir?", o: ["Lewis Hamilton", "Michael Schumacher", "Ayrton Senna", "Sebastian Vettel"], c: 1 },
        { q: "Tennisdə Grand Slam turnirlərindən biri deyil?", o: ["Wimbledon", "US Open", "French Open", "Copa America"], c: 3 },
    ]
};

// Dəyişənlər
let currentList = [];
let currentIndex = 0;
let userAnswers = {}; 
let score = 0; // Xal hesabı üçün

// === SƏHİFƏ YÜKLƏNƏNDƏ İŞƏ DÜŞƏN HİSSƏ ===
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. QUIZ SƏHİFƏSİ
    if (window.location.pathname.includes('/index.page/quiz.html')) {
        const urlParams = new URLSearchParams(window.location.search);
        const selectedCat = urlParams.get('category');

        if (selectedCat && quizData[selectedCat]) {
            startQuizProcess(selectedCat);
        } else {
            alert("Xəta: Kateqoriya tapılmadı.");
            goHome();
        }
    }

    // 2. RESULT SƏHİFƏSİ (Yeni Hissə)
    if (window.location.pathname.includes('./index.page/result.html')) {
        showResults();
    }
});

// === INDEX SƏHİFƏSİ FUNKSİYASI ===
function goToQuiz(category) {
    window.location.href = `./index.page/quiz.html?category=${category}`;
}

// === QUIZ SƏHİFƏSİ FUNKSİYALARI ===
function startQuizProcess(category) {
    currentList = quizData[category];
    currentIndex = 0;
    score = 0; // Xalı sıfırla
    userAnswers = {};
    
    document.getElementById('category-title').innerText = category.toUpperCase();
    document.getElementById('total-q-count-header').innerText = currentList.length + " Question";

    loadQuestion();
}

function loadQuestion() {
    const data = currentList[currentIndex];
    
    document.getElementById('question-text').innerText = data.q;
    document.getElementById('q-indicator').innerText = `Question: ${currentIndex + 1}/${currentList.length}`;
    
    const container = document.getElementById('options-container');
    container.innerHTML = '';

    data.o.forEach((opt, i) => {
        const btn = document.createElement('button');
        btn.innerText = opt;
        btn.classList.add('option-btn');
        btn.onclick = () => checkAnswer(i, btn);
        container.appendChild(btn);
    });

    if (userAnswers[currentIndex] !== undefined) {
        revealAnswer(userAnswers[currentIndex]);
    }

    const prevBtn = document.getElementById('prev-btn');
    if(prevBtn) prevBtn.style.visibility = currentIndex === 0 ? 'hidden' : 'visible';
}

function checkAnswer(selectedIndex) {
    // Əgər artıq cavab verilibsə, heç nə etmə
    if (userAnswers[currentIndex] !== undefined) return;
    
    // Cavabı yadda saxla
    userAnswers[currentIndex] = selectedIndex;

    // Düzgün cavabdırsa xalı artır
    if (selectedIndex === currentList[currentIndex].c) {
        score++;
    }

    // Rəngləri göstər
    revealAnswer(selectedIndex);

    // === YENİ HİSSƏ: AVTOMATİK KEÇİD ===
    setTimeout(() => {
        nextQuestion();
    }, 1000); // 1000 = 1 saniyə gözləyib keçir
}

function revealAnswer(selectedIndex) {
    const correctIndex = currentList[currentIndex].c;
    const buttons = document.getElementById('options-container').children;

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.add('disabled');
        if (i === correctIndex) buttons[i].classList.add('correct');
    }
    
    if (selectedIndex !== correctIndex) {
        buttons[selectedIndex].classList.add('wrong');
    }
}

function nextQuestion() {
    if (currentIndex < currentList.length - 1) {
        currentIndex++;
        loadQuestion();
    } else {
        // Quiz bitdi, Nəticə səhifəsinə get!
        // Xalı URL vasitəsilə göndəririk
        window.location.href = `result.html?score=${score}&total=${currentList.length}`;
    }
}

function prevQuestion() {
    if (currentIndex > 0) {
        currentIndex--;
        loadQuestion();
    }
}

// === RESULT SƏHİFƏSİ MƏNTİQİ ===
function showResults() {
    const urlParams = new URLSearchParams(window.location.search);
    const myScore = parseInt(urlParams.get('score'));
    const totalQ = parseInt(urlParams.get('total'));

    // HTML elementləri
    const scoreText = document.getElementById('user-score');
    const totalText = document.getElementById('total-score');
    const resultTitle = document.getElementById('result-title');
    const motivationText = document.getElementById('motivation-text');
    const resultIcon = document.getElementById('result-icon');

    // Ekrana yaz
    scoreText.innerText = myScore;
    totalText.innerText = totalQ;

    // Faiz hesablama
    const percentage = (myScore / totalQ) * 100;

    // MƏNTİQ: Nəticəyə uyğun Sticker və Sözlər
    if (percentage >= 80) {
        // Əla Nəticə
        resultTitle.innerText = "Möhtəşəm!";
        motivationText.innerText = "Təbriklər! Sən əsl bilik dahisisən. Belə davam et!";
        resultIcon.className = "fa-solid fa-trophy icon-win"; // Kubok ikonu
    } 
    else if (percentage >= 50) {
        // Orta Nəticə
        resultTitle.innerText = "Yaxşı Nəticə!";
        motivationText.innerText = "Pis deyil, amma bir az da çalışsan əla olar!";
        resultIcon.className = "fa-solid fa-thumbs-up icon-mid"; // Like ikonu
    } 
    else {
        // Zəif Nəticə
        resultTitle.innerText = "Kədərlənmə...";
        motivationText.innerText = "Səhvlər öyrənmək üçündür. Təkrarla və yenidən gəl!";
        resultIcon.className = "fa-solid fa-face-sad-tear icon-lose"; // Kədərli üz
    }
}

function goHome() {
    window.location.href = '../index.html';
}