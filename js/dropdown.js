(function () {
  const button = document.getElementById('button');
  const borderFontColor = document.getElementById('borderColor'); 
  const select = document.getElementById('colorSelectBox');
  const dropdownMenu = document.getElementById('dropdownSettingMenu');

  const colorUpdate = (value) => {
    for (let index = 0; index < select.length; index++) {
      if (select[index].value == value) {
        if (active.checked == true) {
          button.classList.add(value+'-hover');  
          button.classList.remove(select[index].value);
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
        button.classList.add(value+'-hover');
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
          if(active.checked) {
            button.classList.add(value + '-hover-change');
            button.classList.remove(value+'-hover');
          } else {
            dropdownMenu.classList.add(value);
            button.classList.add(value + '-change');
            button.classList.remove(value);
          }
          text[0].innerText = 'Yes';
          text[0].style.backgroundColor = '#dddddd';

        } else {
          button.classList.remove(select[index].value+'-hover-change');
          button.classList.remove(select[index].value+'-change');
          dropdownMenu.classList.remove(select[index].value);
        } 
      }
  
    } else {
      if(active.checked) {
        button.classList.add(value+'-hover');
        button.classList.remove(value + '-hover-change');
      } else {
        button.classList.add(value);
        button.classList.remove(value + '-change');
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

  button.addEventListener('mouseover', (event) => {
    if (button.classList.contains('disabled') == false){
      hoverChangeElement(select.value);
      button.classList.add('hover');
    }
  });
  
  button.addEventListener('mouseout', (event) => {
    if (active.checked == false) {
      colorUpdate(select.value);
    }
    if (borderFontColor.checked == true) {
      button.classList.remove(select.value);
    }
    button.classList.remove('hover');
  });
  
  const active = document.getElementById('active'); 
  const text = document.getElementsByClassName('tag');

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
        colorUpdate(select.value);
      }
      text[3].innerText = 'No';
      text[3].style.backgroundColor = '#eeeeee';
    }
  });

  borderFontColor.addEventListener('change', (event) =>{
    changeBorderFontColor(select.value, event.target.checked);
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
})();

(function () {
  const block = document.getElementById('block'); 
  
  const text = document.getElementsByClassName('tag');
  const buttonContainer = document.getElementById('buttonContainer');
  
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
})();

const levelName = document.getElementsByName('level');
let pos = 'center';

const widthArray = [
  260,
  220,
  180
];

function changeLevel (event) {
  const value = event.target.value;
  const text = document.getElementsByClassName('text')[0];
  const width = document.querySelector('body');
  let buttonWidth = 0;
  
  for (let index = 0; index < levelName.length; index++) {
    if (widerName[index].value == value) {
      button.classList.add(value + '-padding');
      buttonWidth = document.querySelector('#button').offsetWidth
      width.style.setProperty('--pos', changeDropdownPos(pos, buttonWidth)+'px');
      text.innerText = value;
    } else {
      button.classList.remove(widerName[index].value + '-padding');
    }
  }
};

const widerName = document.getElementsByName('wider');

function changeWider (event) {
  const value = event.target.value;
  const text = document.getElementsByClassName('text')[1];
  const width = document.querySelector('body');
  let buttonWidth = document.querySelector('#button').offsetWidth;

  for (let index = 0; index < widerName.length; index++) {
    if (widerName[index].value == value) {
      button.classList.add(value + '-fontSize');
      buttonWidth = document.querySelector('#button').offsetWidth;

      width.style.setProperty('--pos', changeDropdownPos(pos, buttonWidth)+'px');
      text.innerText = value;
    } else {
      button.classList.remove(widerName[index].value + '-fontSize');
    }
    
  }
};

const dropdownName = document.getElementsByName('dropdown');
const dropdownMenu = document.getElementById('dropdownMenu');

const widthValue = (value) => {
  const center = document.querySelector('#container').offsetWidth/2;
  return (center - (value/2))
}

function changeDropdownWider (event) {
  const value = event.target.value;
  const text = document.getElementsByClassName('text')[2];
  const width = document.querySelector('body');
  for (let index = 0; index < dropdownName.length; index++) {
    if (dropdownName[index].value == value) {
      width.style.setProperty('--width', widthArray[index].valueOf()+'px');
      width.style.setProperty('--left', widthValue(widthArray[index].valueOf())+"px");
      text.innerText = value;
    } 
  }
};

const dropdownPos = document.getElementsByName('dropdownPos');

const changeDropdownPos = (pos, value) => {
  const center = document.querySelector('#container').offsetWidth/2
  const dropdown = document.querySelector('#dropdownMenu').offsetWidth;
  if (pos == 'right' || pos == 'left') {
    return (center + value/2);
  } else {
    return (center - dropdown/2)
  }
};

function changePosition (event) {
  const value = event.target.value;
  const text = document.getElementsByClassName('text')[3];
  const width = document.querySelector('body');
  const buttonWidth = document.querySelector('#button').offsetWidth
  
  for (let index = 0; index < dropdownPos.length; index++) {
    if (dropdownPos[index].value == value) {
      dropdownMenu.classList.add(value);
      pos = value;
      width.style.setProperty('--pos', changeDropdownPos(pos, buttonWidth)+'px');
      text.innerText = value;
    } else {
      dropdownMenu.classList.remove(dropdownPos[index].value);
    }
  }
};

(function () {
  const value = document.querySelector('body');
  const buttonWidth = document.querySelector('#button').offsetWidth

  window.onload = function(event) {
    const posLeft = widthValue ();
    value.style.setProperty('--left', posLeft+"px");
  };
  
  window.onresize = function(event) {  
    const posLeft = widthValue (document.querySelector('#dropdownMenu').offsetWidth);
    value.style.setProperty('--pos', changeDropdownPos(pos, buttonWidth)+'px');
    value.style.setProperty('--left', posLeft+"px");
  };
})();
