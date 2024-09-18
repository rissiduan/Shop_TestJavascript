
let Time = 1500;

function updateSpan() {
    let spans = document.querySelectorAll('span[data-show]');
    if (spans.length === 0) return;

    let show = spans[0]; 
    let next = show.nextElementSibling || document.querySelector('span:first-child');
    
    show.removeAttribute('data-show');
    show.setAttribute('data-up', '');

    let up = document.querySelector('span[data-up]');
    if (up) {
        up.removeAttribute('data-up');
    }

    next.setAttribute('data-show', '');
}

setInterval(updateSpan, Time);

