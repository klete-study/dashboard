const borderFontColor = document.getElementById('borderColor'); 
const select = document.getElementById('colorSelectBox');
const button = document.querySelector('.button');
const dropdownMenuColor = document.getElementById('dropdownSettingMenu');
const text = document.getElementsByClassName('tag');


const colorUpdate = (value) => {
  for (let index = 0; index < select.length; index++) {
    if (select[index].value == value) {
      if (borderFontColor.checked) {
        button.classList.add(`${value}-change`);
        button.classList.remove(`${value}-hover-change`);
      } else {
        button.classList.add(value);
        button.classList.remove(`${select[index].value}-hover`);
      }
      dropdownMenuColor.classList.add(value);
    } else {
      button.classList.remove(`${select[index].value}-hover`);
      button.classList.remove(select[index].value);
      dropdownMenuColor.classList.remove(select[index].value);
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
        button.classList.add(`${value}-change`);
        button.classList.remove(value);
        text[0].innerText = 'Yes';
        text[0].style.backgroundColor = '#dddddd';
        dropdownMenuColor.classList.add(value);
      } else {
        button.classList.remove(`${select[index].value}-change`);
        dropdownMenuColor.classList.remove(select[index].value);
      } 
    }
  } else {
    button.classList.add(value);
    button.classList.remove(`${value}-change`);
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
  if (button.classList.contains('disabled') == false) {
    hoverChangeElement(select.value);
    button.classList.add('hover');
  }
});

button.addEventListener('mouseout', () => {
  colorUpdate(select.value);
  button.classList.remove('hover');
});

borderFontColor.addEventListener('change', (event) =>{
  changeBorderFontColor(select.value, event.target.checked);
});

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

block.addEventListener('change', (event) => {
  const buttonDisplay = document.querySelector('.buttonDisplay');
  if (event.target.checked) {
    buttonDisplay.classList.add('block');
    text[3].innerText = 'Yes';
    text[3].style.backgroundColor = '#dddddd';
  } else {
    buttonDisplay.classList.remove('block');
    text[3].innerText = 'No';
    text[3].style.backgroundColor = '#eeeeee';
  }
  const width = document.querySelector('body');
  const buttonWidth = document.querySelector('.button').offsetWidth;
  width.style.setProperty('--left', `${changeDropdownPos(pos, buttonWidth)}px`);
});


const dropdownMenu = document.getElementById('dropdownMenu');

const disabledElement = (check) => {
  if (check) {
    button.classList.add('disabled');
    dropdownMenu.classList.add('displayNone');
    dropdownMenu.classList.remove('block');
    text[2].innerText = 'Yes';
    text[2].style.backgroundColor = '#dddddd';
  } else {
    button.classList.remove('disabled');
    if (button.classList.contains('click')) {
      dropdownMenu.classList.add('block');
      dropdownMenu.classList.remove('displayNone');
    }
    text[2].innerText = 'No';
    text[2].style.backgroundColor = '#eeeeee';
  }
};

button.addEventListener('click', () => {
  if (disabled.checked == false){
    if (dropdownMenu.classList.contains('displayNone')) {
      button.classList.add('click');
      dropdownMenu.classList.add('block');
      dropdownMenu.classList.remove('displayNone');
    } else {
      button.classList.remove('click');
      dropdownMenu.classList.add('displayNone');
      dropdownMenu.classList.remove('block');
    }
  }
});

const cencelButton = document.querySelector('.cancelText');

cencelButton.addEventListener ('click', () => {
  button.classList.remove('click');
  dropdownMenu.classList.add('displayNone');
  dropdownMenu.classList.remove('block');
});
  
let pos = 'center';
let dropdownWidth = 0; 

const changeDropdownPos = (pos, value) => {
  const center = document.querySelector('#container').offsetWidth/2;
  
  if (pos == 'right' || pos == 'left') {
    return (center + value/2);
  } else {
    return (center - dropdownWidth/2)
  }
};

const widthValue = (value) => {
  const center = document.querySelector('#container').offsetWidth/2;
  return (center - (value/2))
}

function changeLevelAndWider (event) {
  const value = event.target.value;
  const levelName = document.getElementsByName('level');
  const leveltext = document.getElementsByClassName('levelText');
  const widerName = document.getElementsByName('wider');
  const widertext = document.getElementsByClassName('widerText');
  
  if (event.path[0].name == 'level') {
    for (let index = 0; index < levelName.length; index++) {
      if (widerName[index].value == value) {
        button.classList.add(`${value}-padding`);   
        leveltext.innerText = value;
      } else {
          button.classList.remove(`${widerName[index].value}-padding`);
        }
      }
  }
  
  else if (event.path[0].name == 'wider') {
    for (let index = 0; index < widerName.length; index++) {
      if (levelName[index].value == value) {
        button.classList.add(`${value}-fontSize`);
        widertext.innerText = value;
      } else {
          button.classList.remove(`${levelName[index].value}-fontSize`);
      }
    }
  }
  
  const width = document.querySelector('body');
  const buttonWidth = document.querySelector('.button').offsetWidth;
  width.style.setProperty('--left', `${changeDropdownPos(pos, buttonWidth)}px`);
};

const dropdownName = document.getElementsByName('dropdown');

const widthArray = [
  260,
  220,
  180
];

function changeDropdownWider (event) {
  const value = event.target.value;
  const text = document.getElementsByClassName('dropdownWiderText');
  const width = document.querySelector('body');
  const buttonWidth = document.querySelector('.button').offsetWidth;

  for (let index = 0; index < dropdownName.length; index++) {
    if (dropdownName[index].value == value) {
      dropdownWidth = widthArray[index];
      width.style.setProperty('--width', `${dropdownWidth}px`);
      width.style.setProperty('--left', `${changeDropdownPos(pos, buttonWidth)}px`);
      text.innerText = value;
    } 
  }
};

function changePosition (event) {
  const value = event.target.value;
  const text = document.getElementsByClassName('dropdownPosText');
  const width = document.querySelector('body');
  const buttonWidth = document.querySelector('.button').offsetWidth
  const dropdownPos = document.getElementsByName('dropdownPos');
  
  for (let index = 0; index < dropdownPos.length; index++) {
    if (dropdownPos[index].value == value) {
      dropdownMenu.classList.add(value);
      pos = value;
      width.style.setProperty('--left', `${changeDropdownPos(pos, buttonWidth)}px`);
      text.innerText = value;
    } else {
      dropdownMenu.classList.remove(dropdownPos[index].value);
    }
  }
};


const body = document.querySelector('body');

window.onload = function() {
  dropdownWidth = widthArray[2];
  body.style.setProperty('--left', `${changeDropdownPos(pos, dropdownWidth)}px`);
};

window.onresize = function() {  
  const buttonWidth = document.querySelector('.button').offsetWidth;
  body.style.setProperty('--left', `${changeDropdownPos(pos, buttonWidth)}px`);
};

