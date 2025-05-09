document.addEventListener('DOMContentLoaded', function() {
    const preview = document.querySelector('.preview-call');

    if (preview) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');

                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.5
        });

        observer.observe(preview);
    }




});