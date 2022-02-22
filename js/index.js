const button = document.getElementById('button');
const borderFontColor = document.getElementById('borderColor'); 
const select = document.getElementById('colorSelectBox');

const colorUpdate = (value) => {
  for (let index = 0; index < select.length; index++) {
    if (select[index].value == value) {
      if (active.checked) {
        button.classList.add(`${value}-change`);  
        button.classList.remove(`${value}-hover-change`);
      } else {
        button.classList.add(value);
        button.classList.remove(`${select[index].value}-hover`);
      }
    } else {
      button.classList.remove(`${select[index].value}-hover`);
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
        if(active.checked) {
          button.classList.add(`${value}-hover-change`);
          button.classList.remove(`${value}-change`);
        } else {
          button.classList.add(`${value}-change`);
          button.classList.remove(value);
        }
        text[0].innerText = 'Yes';
        text[0].style.backgroundColor = '#dddddd';
      } else {
        button.classList.remove(`${select[index].value}-hover-change`);
        button.classList.remove(`${select[index].value}-change`);
      } 
    }

  } else {
    if(active.checked) {
      button.classList.add(`${value}-hover`);
      button.classList.remove(`${value}-hover-change`);
    } else {
      button.classList.add(value);
      button.classList.remove(`${value}-change`);
    }
    text[0].innerText = 'No';
    text[0].style.backgroundColor = '#eeeeee';
  }
};

select.addEventListener('change', (event) => {
  if (borderFontColor.checked == false) {
    colorUpdate (event.target.value);
  } else {
    changeBorderFontColor(select.value, borderFontColor.checked);
  }
});

button.addEventListener('mouseover', () => {
  if (button.classList.contains('disabled') == false){
    hoverChangeElement(select.value);
    button.classList.add('hover');
  }
});

button.addEventListener('mouseout', () => {
  colorUpdate(select.value);
  button.classList.remove('hover');
});

const active = document.getElementById('active'); 
const text = document.getElementsByClassName('tag');

active.addEventListener('change', (event) => {
  if (event.target.checked) {
    if(borderFontColor.checked) {
      button.classList.add(select.value+'-hover-change');
      button.classList.remove(select.value+'-change');
    } else if (button.classList.contains('disabled') == false){
      hoverChangeElement(select.value);
    }
    text[3].innerText = 'Yes';
    text[3].style.backgroundColor = '#dddddd';
  } else {

    if(borderFontColor.checked) {
      button.classList.remove(`${select.value}-hover-change`);
      button.classList.add(`${select.value}-change`);
    } else if (button.classList.contains('disabled') == false){
      colorUpdate(select.value);
    }
    text[3].innerText = 'No';
    text[3].style.backgroundColor = '#eeeeee';
  }
});

borderFontColor.addEventListener('change', (event) =>{
  changeBorderFontColor(select.value, event.target.checked);
});

const disabledElement = (check) => {
  if (check) {
    button.classList.add('disabled');
    text[2].innerText = 'Yes';
    text[2].style.backgroundColor = '#dddddd';
  } else {
    button.classList.remove('disabled');
    if (button.classList.contains('click')) {
    }
    text[2].innerText = 'No';
    text[2].style.backgroundColor = '#eeeeee';
  }
};

const disabled = document.getElementById('disabled');

disabled.addEventListener('change', (event) => {
  disabledElement(event.target.checked);
});


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

const borderLine = document.getElementById('borderLine'); 
borderLine.addEventListener('change', (event) => {
  changeBorderLine(event.target.checked);
});

const block = document.getElementById('block'); 

const buttonContainer = document.getElementById('buttonContainer');
block.addEventListener('change', (event) => {
  if (event.target.checked) {
    buttonContainer.classList.add('block');
    text[4].innerText = 'Yes';
    text[4].style.backgroundColor = '#dddddd';
  } else {
    buttonContainer.classList.remove('block');
    text[4].innerText = 'No';
    text[4].style.backgroundColor = '#eeeeee';
  }
});


const levelName = document.getElementsByName('level');

function changeLevel (event) {
  const value = event.target.value;
  const text = document.getElementsByClassName('text')[0];
  
  for (let index = 0; index < levelName.length; index++) {
    if (widerName[index].value == value) {
      button.classList.add(`${value}-change`);
      text.innerText = value;
    } else {
      button.classList.remove(`${widerName[index].value}-padding`);
    }
  }
};

const widerName = document.getElementsByName('wider');

function changeWider (event) {
  const value = event.target.value;
  const text = document.getElementsByClassName('text')[1];

  for (let index = 0; index < widerName.length; index++) {
    if (widerName[index].value == value) {
      button.classList.add(`${value}-fontSize`);
      text.innerText = value;
    } else {
      button.classList.remove(`${widerName[index].value}-fontSize`);
    }
  }
};
