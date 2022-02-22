const button = document.querySelector('.button');
const borderFontColor = document.getElementById('borderColor'); 
const select = document.getElementById('colorSelectBox');
const block = document.getElementById('block'); 
const text = document.getElementsByClassName('tag');
const borderLine = document.getElementById('borderLine'); 
const buttonContainer = document.getElementById('buttonContainer');
const modal = document.querySelector('.modal');
const modalContainer = document.querySelector('.modalContainer');

const colorUpdate = (value) => {
  for (let index = 0; index < select.length; index++) {
    if (select[index].value == value) {
      button.classList.add(value);
      button.classList.remove(`${value}-hover`);
    } else {
      button.classList.remove(select[index].value);
    }
  }
}

const hoverChangeElement = (value) => {
  for (let index = 0; index < select.length; index++) {
    if (select[index].value == value) {
      if (borderFontColor.checked) {
        if (value == 'default') {
          break;
        }
        button.classList.add(`${value}-hover-change`);
        button.classList.remove(`${value}-change`);
      } else {
        button.classList.remove(`${value}-hover-change`);
        button.classList.add(`${value}-hover`);
      }
      button.classList.remove(value);
    } else {
      button.classList.remove(`${select[index].value}-hover`);
    }
  }
};

const changeBorderFontColor = (value, check) => {
  if (check) {  
    for (let index = 0; index < select.length; index++) {
      if (select[index].value == value) {
        button.classList.add(`${value}-change`);
        button.classList.remove(value);
        text[0].innerText = 'Yes';
        text[0].style.backgroundColor = '#dddddd';
      } else {
        button.classList.remove(`${select[index].value}-change`);
      } 
    }

  } else {
    button.classList.add(value);
    button.classList.remove(`${value}-change`);
    text[0].innerText = 'No';
    text[0].style.backgroundColor = '#eeeeee';
  }
};

const changeBorderLine = (check) => {
  if (check) {
    button.classList.remove('border-white');
    text[1].innerText = 'Yes';
    text[1].style.backgroundColor = '#dddddd'
  } else {
    button.classList.add('border-white');
    text[1].innerText = 'No';
    text[1].style.backgroundColor = '#eeeeee';
  }
};

const modalStatus = (status) => {
  if (status === 'block') {
    modal.classList.add ('block');
    modal.classList.remove ('displayNone');
    modalContainer.classList.add ('block');
    modalContainer.classList.remove ('displayNone');
  } else if (status === 'none') {
    modal.classList.add('displayNone')
    modal.classList.remove('block')
    modalContainer.classList.remove ('block');
    modalContainer.classList.add ('displayNone');
  }
}

select.addEventListener('change', (event) => {
  if (borderFontColor.checked == false) {
    colorUpdate (event.target.value);
  } else {
    changeBorderFontColor(select.value, borderFontColor.checked);
  }
});

button.addEventListener('mouseover', () => {
  hoverChangeElement(select.value);
  button.classList.add('hover');
});

button.addEventListener('mouseout', () => {
  colorUpdate(select.value);
  button.classList.remove('hover');
});


borderFontColor.addEventListener('change', (event) =>{
  changeBorderFontColor(select.value, event.target.checked);
});

borderLine.addEventListener('change', (event) => {
  changeBorderLine(event.target.checked);
});

block.addEventListener('change', (event) => {
  if (event.target.checked) {
    buttonContainer.classList.add('block');
    text[2].innerText = 'Yes';
    text[2].style.backgroundColor = '#dddddd';
  } else {
    buttonContainer.classList.remove('block');
    text[2].innerText = 'No';
    text[2].style.backgroundColor = '#eeeeee';
  }
});

button.addEventListener('click', () => {
  modalStatus('block');
});

modal.addEventListener('click', () => {
  modalStatus('none');
});

const closeButton = document.querySelector('.closeText');

closeButton.addEventListener ('click', () => {
  modalStatus('none');
});
