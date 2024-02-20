document.addEventListener("DOMContentLoaded", function() {
    const noButton = document.querySelector('.no');
    noButton.addEventListener('mouseover', function() {
        noButton.style.position = 'absolute';
        noButton.style.top = `${Math.random() * window.innerHeight}px`;
        noButton.style.left = `${Math.random() * window.innerWidth}px`;
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const yesButton = document.querySelector('.yes');
    yesButton.addEventListener('click', function() {
        window.location.href = 'celebrate.html';
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const placeButton = document.querySelector('.place');
    placeButton.addEventListener('click', function() {
        const yourBedButton = document.createElement('button');
        const myBedButton = document.createElement('button');

        yourBedButton.textContent = 'Your bed';
        myBedButton.textContent = 'My bed';

        yourBedButton.classList.add('bed-button');
        myBedButton.classList.add('bed-button');

        const buttonsDiv = document.querySelector('.buttons');
        buttonsDiv.appendChild(yourBedButton);
        buttonsDiv.appendChild(myBedButton);

        placeButton.removeEventListener('click', arguments.callee);
    });

    document.querySelector('.buttons').addEventListener('click', function(event) {
        if (event.target.classList.contains('bed-button')) {
            if (event.target.textContent === 'Your bed') {
                alert('I am waiting');
            } else if (event.target.textContent === 'My bed') {
                alert('okk sir');
            }
        }
    });
});