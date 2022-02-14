const select = document.getElementById('colorSelectBox');
const disabeld = document.getElementById('disabled');
const button = document.getElementById('button');
const block = document.getElementById('block'); 
const text = document.getElementsByClassName('tag');
const borderLine = document.getElementById('borderLine'); 
const buttonContainer = document.getElementById('buttonContainer');
const borderFontColor = document.getElementById('borderColor'); 
const active = document.getElementById('active'); 
const levelName = document.getElementsByName('level');
const widerName = document.getElementsByName('wider');

const updateElement = (value) => {
  for (let index = 0; index < select.length; index++) {
    if (select[index].value == value) {
      button.classList.add(value);
      button.classList.remove(value+'-hover');
    } else {
      button.classList.remove(select[index].value);
    }
  }
};

const hoverChangeElement = (value) => {
  for (let index = 0; index < select.length; index++) {
    if (select[index].value == value) {
      button.classList.add(value+'-hover');
      button.classList.remove(value);
    } else {
      button.classList.remove(select[index].value+'-hover');
    }
  }
};

const disabeldElement = (check) => {
  if (check == true) {
    button.classList.add('disabled');
    text[2].innerText = 'Yes';
    text[2].style.backgroundColor = '#dddddd';
  } else {
    button.classList.remove('disabled');
    text[2].innerText = 'No';
    text[2].style.backgroundColor = '#eeeeee';
  }
};

const changeBorderLine = (check) => {
  if (check == true) {
    button.classList.remove('border-white');
    text[1].innerText = 'Yes';
    text[1].style.backgroundColor = '#dddddd'
  } else {
    button.classList.add('border-white');
    text[1].innerText = 'No';
    text[1].style.backgroundColor = '#eeeeee';
  }
};

const changeBorderFontColor = (value, check) => {
  if (check == true) {  
    for (let index = 0; index < select.length; index++) {
      if (select[index].value == value) {
        if(active.checked) {
          button.classList.add(value + '-hover-change');
          button.classList.remove(value+'-hover');
        } else {
          console.log(value + '-change');
          button.classList.add(value + '-change');
          button.classList.remove(value);
        }
        text[0].innerText = 'Yes';
        text[0].style.backgroundColor = '#dddddd';
        break;
      } else {
          button.classList.remove(value+'-hover-change');
          button.classList.remove(value+'-change');
      } 
    }

  } else {
    if(active.checked) {
      button.classList.add(value+'-hover');
      button.classList.remove(value + '-hover-change');
    } else {
      console.log(value + '-change');
      button.classList.add(value);
      button.classList.remove(value + '-change');
    }
    text[0].innerText = 'No';
    text[0].style.backgroundColor = '#eeeeee';
  }
};

select.addEventListener('change', (event) => {
  updateElement(event.target.value)
});


button.addEventListener('mouseover', (event) => {
  if (button.classList.contains('disabled') == false){
    hoverChangeElement(select.value);
    button.classList.add('hover');
  }
});

button.addEventListener('mouseout', (event) => {
  if (active.checked == false) {
    updateElement(select.value);
  }
  if (borderFontColor.checked == true) {
    button.classList.remove(select.value);
  }
  button.classList.remove('hover');
});

borderLine.addEventListener('change', (event) => {
  changeBorderLine(event.target.checked);
});

disabeld.addEventListener('change', (event) => {
  disabeldElement(event.target.checked);
});

borderFontColor.addEventListener('change', (event) =>{
  changeBorderFontColor(select.value, event.target.checked);
});

active.addEventListener('change', (event) => {

  if (event.target.checked == true) {
    if(borderFontColor.checked == true) {
      button.classList.add(select.value+'-hover-change');
      button.classList.remove(select.value+'-change');
    } else if (button.classList.contains('disabled') == false){
      hoverChangeElement(select.value);
    }
    text[3].innerText = 'Yes';
    text[3].style.backgroundColor = '#dddddd';
  } else {

    if(borderFontColor.checked == true) {
      button.classList.remove(select.value+'-hover-change');
      button.classList.add(select.value+'-change');
    } else if (button.classList.contains('disabled') == false){
      updateElement(select.value);
    }
    text[3].innerText = 'No';
    text[3].style.backgroundColor = '#eeeeee';
  }
});

block.addEventListener('change', (event) => {
  if (event.target.checked == true) {
    buttonContainer.classList.add('block');
    text[4].innerText = 'Yes';
    text[4].style.backgroundColor = '#dddddd';
  } else {
    buttonContainer.classList.remove('block');
    text[4].innerText = 'No';
    text[4].style.backgroundColor = '#eeeeee';
  }
});

function changeLevel (event) {
  const value = event.target.value;
  const text = document.getElementsByClassName('levelText')[0];

  for (let index = 0; index < levelName.length; index++) {
    if (widerName[index].value == value) {
      button.classList.add(value + '-padding');
      text.innerText = value;
    } else {
      button.classList.remove(widerName[index].value + '-padding');
    }
  }
};

function changeWider (event) {
  const value = event.target.value;
  const text = document.getElementsByClassName('widerText')[0];
  
  for (let index = 0; index < widerName.length; index++) {
    if (widerName[index].value == value) {
      button.classList.add(value + '-fontSize');
      text.innerText = value;
    } else {
      button.classList.remove(widerName[index].value + '-fontSize');
    }
  }
};
