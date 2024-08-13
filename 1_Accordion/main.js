const data = [
  {
    id: 1,
    title: 'What is question 1?',
    text: 'We can not support our govt any more.They violenc rule of the country',
  },
  {
    id: 2,
    title: 'What is question 2?',
    text: 'We can not support our govt any more.They violenc rule of the country',
  },
  {
    id: 3,
    title: 'What is question 3?',
    text: 'We can not support our govt any more.They violenc rule of the country',
  },
  {
    id: 4,
    title: 'What is question 4?',
    text: 'We can not support our govt any more.They violenc rule of the country',
  },
  {
    id: 5,
    title: 'What is question 5?',
    text: 'We can not support our govt any more.They violenc rule of the country',
  },
];

const accordionContainer = document.querySelector('.accordion_wrapper');

function createAccordion() {
  accordionContainer.innerHTML = data
    .map((item) => {
      return `<div class='accordion'>
        <div class="accordion_title">
          <h3>${item.title}</h3>
          <i class="fas fa-arrow-down"></i>
        </div>
        <div class="accordion_content">
          <p>${item.text}</p>
        </div>
      </div>`;
    })
    .join('');
}

createAccordion();

const accordions = document.querySelectorAll('.accordion_title');

accordions.forEach((accordion) => {
  accordion.addEventListener('click', () => {
    if (accordion.classList.contains('active')) {
      accordion.classList.remove('active');
    } else {
      accordions.forEach((currentActive) => {
        currentActive.classList.remove('active');
      });
      accordion.classList.add('active');
    }
  });
});
