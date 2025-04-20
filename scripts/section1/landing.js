const phrases = document.querySelectorAll('.phrase');
let currentIndex = 1; // Начинаем с "Подбор цвета"

function updateHighlight() {
    phrases.forEach((p, i) => {
        p.classList.remove('active', 'inactive', 'hidden');
        if (i === currentIndex) {
            p.classList.add('active');

        } else {
            p.classList.add('inactive');
        }

        if (currentIndex === 0 && i === 2) {
            p.classList.add('hidden');
            p.classList.remove('inactive');
        }
        if (currentIndex === 2 && i === 0) {
            p.classList.add('hidden');
            p.classList.remove('inactive');
        }
        if (currentIndex === 3 && i === 1) {
            p.classList.add('hidden');
            p.classList.remove('inactive');
        }


        
    });

    currentIndex = (currentIndex + 1) % phrases.length;
}


updateHighlight();

setInterval(updateHighlight, 2000);
