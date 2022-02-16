(function () {
  const button = document.getElementById('button');
  const borderFontColor = document.getElementById('borderColor'); 
  const select = document.getElementById('colorSelectBox');
  const dropdownMenu = document.getElementById('dropdownSettingMenu');
  const text = document.getElementsByClassName('tag');

  const colorUpdate = (value) => {
    for (let index = 0; index < select.length; index++) {
      if (select[index].value == value) {
        if (borderFontColor.checked == true) {
          button.classList.add(value+'-change');
          button.classList.remove(value+'-hover-change');
        } else {
          button.classList.add(value);
          button.classList.remove(select[index].value+'-hover');
        }
        dropdownMenu.classList.add(value);
      } else {
        button.classList.remove(select[index].value+'-hover');
        button.classList.remove(select[index].value);
        dropdownMenu.classList.remove(select[index].value);
      }
    }
  }
  
  const hoverChangeElement = (value) => {
    for (let index = 0; index < select.length; index++) {
      if (select[index].value == value) {
        if (borderFontColor.checked == true) {
          if (value == 'default') {
            break;
          }
          button.classList.add(value+'-hover-change');
          button.classList.remove(value+'-change');
        } else {
          button.classList.add(value+'-hover');
        }
        button.classList.remove(value);
      } else {
        button.classList.remove(select[index].value+'-hover');
      }
    }
  };

  const changeBorderFontColor = (value, check) => {
    if (check == true) {  
      for (let index = 0; index < select.length; index++) {
        if (select[index].value == value) {
          button.classList.add(value + '-change');
          button.classList.remove(value);
          text[0].innerText = 'Yes';
          text[0].style.backgroundColor = '#dddddd';
          dropdownMenu.classList.add(value);
        } else {
          button.classList.remove(select[index].value+'-change');
          dropdownMenu.classList.remove(select[index].value);
        } 
      }
    } else {
      button.classList.add(value);
      button.classList.remove(value + '-change');
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

  button.addEventListener('mouseover', (event) => {
    if (button.classList.contains('disabled') == false){
      hoverChangeElement(select.value);
      button.classList.add('hover');
    }
  });
  
  button.addEventListener('mouseout', (event) => {
    colorUpdate(select.value);
    button.classList.remove('hover');
  });

  borderFontColor.addEventListener('change', (event) =>{
    changeBorderFontColor(select.value, event.target.checked);
  });
})();


(function () {
  const button = document.getElementById('button');
  const text = document.getElementsByClassName('tag');
  
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
  
  const disabeld = document.getElementById('disabled');
  disabeld.addEventListener('change', (event) => {
    disabeldElement(event.target.checked);
  });

})();

(function () {
  const button = document.getElementById('button');
  const text = document.getElementsByClassName('tag');
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
  
  const borderLine = document.getElementById('borderLine'); 
  borderLine.addEventListener('change', (event) => {
    changeBorderLine(event.target.checked);
  });
  
})();

(function () {
  const block = document.getElementById('block'); 
  const text = document.getElementsByClassName('tag');
  const buttonContainer = document.getElementById('buttonContainer');

  block.addEventListener('change', (event) => {
    if (event.target.checked == true) {
      buttonContainer.classList.add('block');
      text[3].innerText = 'Yes';
      text[3].style.backgroundColor = '#dddddd';
    } else {
      buttonContainer.classList.remove('block');
      text[3].innerText = 'No';
      text[3].style.backgroundColor = '#eeeeee';
    }
    const width = document.querySelector('body');
    const buttonWidth = document.querySelector('#button').offsetWidth;
    width.style.setProperty('--left', changeDropdownPos(pos, buttonWidth)+'px');
  });
})();

(function () {
  const button = document.getElementById('button');
  const text = document.getElementsByClassName('tag');
  const dropdownMenu = document.getElementById('dropdownMenu');
  
  const disabeldElement = (check) => {
    if (check == true) {
      button.classList.add('disabled');
      dropdownMenu.classList.add('displayNone');
      dropdownMenu.classList.remove('block');
      text[2].innerText = 'Yes';
      text[2].style.backgroundColor = '#dddddd';
    } else {
      button.classList.remove('disabled');
      if (button.classList.contains('click') == true) {
        dropdownMenu.classList.add('block');
        dropdownMenu.classList.remove('displayNone');
      }
      text[2].innerText = 'No';
      text[2].style.backgroundColor = '#eeeeee';
    }
  };
  
  const disabeld = document.getElementById('disabled');
  disabeld.addEventListener('change', (event) => {
    disabeldElement(event.target.checked);
  });
})();

(function() {
  const button = document.getElementById('button');
  const dropdown = document.getElementById('dropdownMenu');
  const disabeld = document.getElementById('disabled');

  button.addEventListener('click', (event) => {
    if (disabeld.checked == false){
      if (dropdown.classList.contains('displayNone') == true) {
        button.classList.add('click');
        dropdown.classList.add('block');
        dropdown.classList.remove('displayNone');
      } else {
        button.classList.remove('click');
        dropdown.classList.add('displayNone');
        dropdown.classList.remove('block');
      }
    }
  });

  const cencelButton = document.getElementById('cancelText');
  cencelButton.onclick = function (event) {
    button.classList.remove('click');
    dropdown.classList.add('displayNone');
    dropdown.classList.remove('block');
  }
  
})();

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
  const widerName = document.getElementsByName('wider');
  const text = document.getElementsByClassName('text');
  
  if (event.path[0].name == 'level') {
    for (let index = 0; index < levelName.length; index++) {
      if (widerName[index].value == value) {
        button.classList.add(value + '-padding');   
        text[0].innerText = value;
      } else {
          button.classList.remove(widerName[index].value + '-padding');
        }
      }
  }
  
  else if (event.path[0].name == 'wider') {
    for (let index = 0; index < widerName.length; index++) {
      if (widerName[index].value == value) {
        button.classList.add(value + '-fontSize');
        text[1].innerText = value;
      } else {
          button.classList.remove(widerName[index].value + '-fontSize');
      }
    }
  }
  
  const width = document.querySelector('body');
  const buttonWidth = document.querySelector('#button').offsetWidth;
  width.style.setProperty('--left', changeDropdownPos(pos, buttonWidth)+'px');
};

const dropdownName = document.getElementsByName('dropdown');
const dropdownMenu = document.getElementById('dropdownMenu');

const widthArray = [
  260,
  220,
  180
];

function changeDropdownWider (event) {
  const value = event.target.value;
  const text = document.getElementsByClassName('text')[2];
  const width = document.querySelector('body');
  const buttonWidth = document.querySelector('#button').offsetWidth;

  for (let index = 0; index < dropdownName.length; index++) {
    if (dropdownName[index].value == value) {
      dropdownWidth = widthArray[index];
      width.style.setProperty('--width', dropdownWidth+'px');
      width.style.setProperty('--left', changeDropdownPos(pos, buttonWidth)+'px');
      text.innerText = value;
    } 
  }
};


function changePosition (event) {
  const value = event.target.value;
  const text = document.getElementsByClassName('text')[3];
  const width = document.querySelector('body');
  const buttonWidth = document.querySelector('#button').offsetWidth
  const dropdownPos = document.getElementsByName('dropdownPos');
  
  for (let index = 0; index < dropdownPos.length; index++) {
    if (dropdownPos[index].value == value) {
      dropdownMenu.classList.add(value);
      pos = value;
      width.style.setProperty('--left', changeDropdownPos(pos, buttonWidth)+'px');
      text.innerText = value;
    } else {
      dropdownMenu.classList.remove(dropdownPos[index].value);
    }
  }
};

(function () {
  const value = document.querySelector('body');
  const button = document.getElementById('button');
  window.onload = function(event) {
    dropdownWidth = widthArray[2];
    value.style.setProperty('--left', changeDropdownPos(pos, dropdownWidth)+"px");
  };
  
  window.onresize = function(event) {  
    value.style.setProperty('--left', changeDropdownPos(pos, button.offsetWidth)+"px");
  };
})();
