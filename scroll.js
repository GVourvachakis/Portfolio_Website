const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });    
});

const hiddenElementsLeft = document.querySelectorAll('.hidden-left');

const hiddenElementsRight = document.querySelectorAll('.hidden-right');

const hiddenElementsAscend = document.querySelectorAll('.hidden-ascend');

hiddenElementsLeft.forEach((el) => observer.observe(el));

hiddenElementsRight.forEach((el) => observer.observe(el));

hiddenElementsAscend.forEach((el) => observer.observe(el));
