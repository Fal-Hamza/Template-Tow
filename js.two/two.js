// Start Scroller Page Progress
let scro = document.querySelector('.scroller');
let height =
  document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener('scroll', () => {
  let scrollTop = document.documentElement.scrollTop;
  scro.style.width = `${(scrollTop / height) * 100}%`;
});

// End Scroller Page Progress

let switcherlist = document.querySelectorAll('.shuffle li');

let imgs = document.querySelectorAll('.imgs-container img');

switcherlist.forEach((li) => {
  li.addEventListener('click', removeactive);
  li.addEventListener('click', mangeImags);
});

//REmove Active Class From All List And Add To Current

function removeactive() {
  switcherlist.forEach((li) => {
    li.classList.remove('active');
    this.classList.add('active');
  });
}

// Function Mange Imags

function mangeImags() {
  imgs.forEach((img) => {
    img.style.display = 'none';
  });
  document.querySelectorAll(this.dataset.cat).forEach((el) => {
    el.style.display = 'block';
  });
  console.log(document.querySelectorAll(this.dataset.cat));
}

//Animate Width On Scrolling

let section = document.querySelector('.skills');
let spanPro = document.querySelectorAll('.skills span');

window.onscroll = function () {
  if (window.scrollY >= section.offsetTop) {
    spanPro.forEach((span) => {
      span.style.width = span.dataset.progress;
    });
    // console.log('n9iii');
  }
  // Function Number On Scrolling

  if (window.scrollY >= sectionStats.offsetTop) {
    if (!started) {
      numsBox.forEach((num) => startcount(num));
    }
    started = true;
  }
};

//Number On Scrolling

let sectionStats = document.querySelector('.stats');
let numsBox = document.querySelectorAll('.box .number');
let started = false;

function startcount(el) {
  let goal = el.dataset.goal;

  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}

// Start Button GoTop

const header = document.querySelector('[data-header]');
const goTopBtn = document.querySelector('[data-go-top]');

window.addEventListener('scroll', function () {
  if (window.scrollY >= 400) {
    header.classList.add('active');
    goTopBtn.classList.add('active');
  } else {
    header.classList.remove('active');
    goTopBtn.classList.remove('active');
  }
});
