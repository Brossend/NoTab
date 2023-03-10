/* Scroll */

document.addEventListener('DOMContentLoaded', () => {
  const block = document.querySelector('.mission');
  const text = document.querySelector('.mission__card');
  const photo = document.querySelector('.mission__photo');

  window.addEventListener('scroll', () => {
    const centerBlock = block.offsetHeight + 120;
    let scroll = window.scrollY;

    if (scroll >= centerBlock) {
      text.classList.add('mission__cardOut');
      photo.classList.add('mission__photoVisible');
    } else {
      text.classList.remove('mission__cardOut');
      photo.classList.remove('mission__photoVisible');
    }
  });
});

/* Cookies */

const cookies = document.querySelector('.cookies__loading');
const button = document.querySelector('.cookies__button');

document.addEventListener('DOMContentLoaded', () => {
  cookies.classList.remove('cookies__loading');
  cookies.classList.add('cookies');
});

if (document.cookie) {
  //cookies.classList.add('cookies__hidden');
}

button.onclick = () => {
  //document.cookies = `user=user; max-age=${60 * 60 * 24 * 31}`;
  cookies.classList.add('cookies__hidden');
};

/* Validation */

function validation() {
  let inputs = document.querySelectorAll('.form__input');

  inputs.forEach((input) => {
    if (input.value === '') {
      input.classList.add('form__inputError');
    } else {
      input.classList.remove('form__inputError');
    }
  });
}
