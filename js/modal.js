const button = document.querySelector('.button');
const borderFontColor = document.getElementById('borderColor'); 
const select = document.getElementById('colorSelectBox');
const block = document.getElementById('block');
const borderLine = document.getElementById('borderLine');
const modal = document.querySelector('.modal');

const textArray = {
  borderFont : 0,
  borderline : 1,
  block : 2
};

const widthName = [
  'large',
  'normal',
  'small'
]

const changeText = (key, event) => {
  const text = document.getElementsByClassName('tag');
  const value = textArray[key];
  if (event) {
    text[value].innerText = 'Yes';
    text[value].style.backgroundColor = '#dddddd';
  } else {
    text[value].innerText = 'No';
    text[value].style.backgroundColor = '#eeeeee';
  }
};

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
      if (borderFontColor.checked) {
        button.classList.add(`${value}-hover-change`);
        button.classList.remove(`${value}-change`);
      } else {
        button.classList.add(`${value}-hover`);
      }
      button.classList.remove(value);
    } 
  }
};

const changeHoverOutColor = (value) => {
  for (let index = 0; index < select.length; index++) {
    if (select[index].value === value) {
      if (borderFontColor.checked) {
        button.classList.remove(`${value}-hover-change`);
        button.classList.add(`${value}-change`);
      } else {
        button.classList.add(value);
        button.classList.remove(`${value}-hover`);
      }
    }
  }
};

const changeBorderFontColor = (value, check) => {
  if (check) {  
    for (let index = 0; index < select.length; index++) {
      if (select[index].value === value) {
        button.classList.add(`${value}-change`);
        button.classList.remove(value);
      } else {
        button.classList.remove(`${select[index].value}-change`);
      } 
    }
  } else {
    button.classList.add(value);
    button.classList.remove(`${value}-change`);
  }
  changeText('borderFont', check);
};

const changeBorderLine = (check) => {
  if (check) {
    button.classList.remove('border-white');
  } else {
    button.classList.add('border-white');
  }
  changeText('borderline', check);
};

const modalStatus = (status) => {
  const modalContainer = document.querySelector('.modalContainer');
  const body = document.querySelector('body');

  if (status === 'block') {
    modal.classList.add ('block');
    modal.classList.remove ('displayNone');
    modalContainer.classList.add ('block');
    modalContainer.classList.remove ('displayNone');
    body.classList.add('hidden')
  } else if (status === 'none') {
    modal.classList.add('displayNone')
    modal.classList.remove('block')
    modalContainer.classList.add ('displayNone');
    modalContainer.classList.remove ('block');
    body.classList.remove('hidden')
  }
};

select.addEventListener('change', (event) => {
  if (borderFontColor.checked === false) {
    changeColor (event.target.value);
  } else {
    changeBorderFontColor(select.value, borderFontColor.checked);
  }
});

button.addEventListener('mouseover', () => {
  changeHoverColor(select.value);
  button.classList.add('hover');
});

button.addEventListener('mouseout', () => {
  changeHoverOutColor(select.value);
  button.classList.remove('hover');
});

button.addEventListener('click', () => {
  modalStatus('block');
});

borderFontColor.addEventListener('change', (event) =>{
  changeBorderFontColor(select.value, event.target.checked);
});

borderLine.addEventListener('change', (event) => {
  changeBorderLine(event.target.checked);
});

block.addEventListener('change', (event) => {
  const buttonContainer = document.getElementById('buttonContainer');
  if (event.target.checked) {
    buttonContainer.classList.add('block');
  } else {
    buttonContainer.classList.remove('block');
  }
  changeText('block', event.target.checked);
});

const closeButton = document.querySelector('.closeText');
const exitButton = document.querySelector('.exitText');

modal.addEventListener('click', () => {
  modalStatus('none');
});

closeButton.addEventListener ('click', () => {
  modalStatus('none');
});

exitButton.addEventListener ('click', () => {
  modalStatus('none');
});

function changeWidth (event) {
  const value = event.target.value;
  const text = document.querySelector('.widthText');
  const modalContainer = document.querySelector('.modalContainer');

  for (let index = 0; index < widthName.length; index++) {
    if (widthName[index] === value) {
      modalContainer.classList.add(`${value}-width`);
      text.innerText = value;
    } else {
      modalContainer.classList.remove(`${widthName[index]}-width`);
    }
  }
};
