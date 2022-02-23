const button = document.querySelector('.button');
const select = document.getElementById('colorSelectBox');

const changeColor = (value) => {
  for (let index = 0; index < select.length; index++) {
    if (select[index].value === value) {
      button.classList.add(value);
    } else {
      button.classList.remove(select[index].value);
    }
  }
}

const changeHoverColor = (value) => {
  for (let index = 0; index < select.length; index++) {
    if (select[index].value === value) {
      button.classList.add(`${value}-hover`);
      button.classList.remove(value);
    } 
  }
};

const changeHoverOutColor = (value) => {
  for (let index = 0; index < select.length; index++) {
    if (select[index].value === value) {
      button.classList.add(value);
      button.classList.remove(`${value}-hover`);
    }
  }
};

select.addEventListener('change', (event) => {
  changeColor (event.target.value);
});

button.addEventListener('mouseover', () => {
  changeHoverColor(select.value);
  button.classList.add('hover');
});

button.addEventListener('mouseout', () => {
  changeHoverOutColor(select.value);
  button.classList.remove('hover');
});
