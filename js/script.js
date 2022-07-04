const btnTour = document.querySelector('#choose'),
      btnGetConsultation = document.querySelector('#receive'),
      btnClose = document.querySelector('.close'),
      heading = document.getElementsByTagName('h2')[0],
      nameInput = document.getElementsByClassName('contactform_name')[0],
      phoneInput = document.querySelector('.contactform_phone'),
      mailInput = document.querySelectorAll('contactform_mail')[0],
      modal = document.querySelector('.modal'),
      text = document.getElementsByName('message')[0];

function hover() {
    heading.textContent = "Действительно все!";
};

function leaveHover() {
    heading.textContent = "Все включено";
};

btnTour.addEventListener('mouseenter', (e) => hover());
btnTour.addEventListener('mouseleave', (e) => leaveHover());

btnGetConsultation.addEventListener('click', () => {
    modal.style.display= 'block';
});

btnClose.addEventListener('click', () => {
    modal.style.display= 'none';
});

nameInput.addEventListener('input', function () {
    text.value = `Меня зовут ${nameInput.value}. И я хочу спросить: `;
});