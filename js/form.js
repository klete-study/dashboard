const button = document.querySelector('.button');

const changeHoverColor = (value) => {
  button.classList.replace(value,`${value}-hover`);
};

const changeHoverOutColor = (value) => {
  button.classList.replace(`${value}-hover`, value);
};

button.addEventListener('mouseover', () => {
  changeHoverColor('primary');
  button.classList.add('hover');
});

button.addEventListener('mouseout', () => {
  changeHoverOutColor('primary');
  button.classList.remove('hover');
});

button.addEventListener('click', () => {
  const email = document.getElementById('email');
  const password = document.getElementById('password');
  const description = document.getElementById('description');
  const colorBox = document.getElementById('color');

  const idArray = [
    email,
    password,
    description,
    colorBox
  ];
  
  const makeElementInputId = (key) => {
    const text = document.createElement('p');
    text.className = 'textRed';
    const parent = key.parentNode;

    if (parent.getElementsByTagName('p').length === 1) {
      if (key != colorBox) {
        text.innerText = '10글자 이상 입력하세요'
        key.classList.add('bdRed');
      } else {
        if (key.value === 'default') {
          text.innerText = '값을 선택하세요';
        }
      }
      key.parentNode.appendChild(text);
    } else {
      if (key === colorBox && key.value !='default'){
        key.parentNode.lastElementChild.remove();
      }
    }
  }

  const addBdRed = (key) => {
    
    if (key.value.length <= 10 && key != colorBox) {
      if (!key.classList.contains('bdRed')) {
        key.classList.add('bdRed');
      }
    } else if (key.value === 'default' && key === colorBox) {
      key.classList.add('bdRed');
    } else {
      if (key.classList.contains('bdRed')) {
        key.classList.remove('bdRed');
      } 
      if (key != colorBox) {
        key.parentNode.lastElementChild.remove();
      }
    }
  }

  const radio = document.getElementsByName('radio');
  const checkbox = document.getElementsByName('check');

  const radioContainer = document.querySelector('.radioBox');
  const checkboxContainer = document.querySelector('.checkBox');

  const nameArray = [
    radio,
    checkbox
  ]

  const selectorArray = [
    radioContainer,
    checkboxContainer
  ]
  
  const makeElementInputName = (key) => {
    const text = document.createElement('p');
    text.className = 'textRed';

    if (key.getElementsByTagName('p').length === 1) {
      if (key === radioContainer) {
        text.innerText = '1개를 선택하세요';
      } else {
        text.innerText = '1개 이상을 선택하세요';
      }
      key.appendChild(text)
    }
  }
  
  const checkValue = (key) => {
    let check;
    for (let index = 0; index < key.length; index++) {
      if (key[index].checked) {
        check = true;
        break;
      }
      check = false;
    } 
    return check;
  }

  for (let index = 0; index < idArray.length; index++) {
    makeElementInputId(idArray[index]);
    addBdRed(idArray[index]);
  }
  
  for (let index = 0; index < selectorArray.length; index++) {
    makeElementInputName(selectorArray[index]);
    if (checkValue(nameArray[index])) {
      selectorArray[index].lastChild.remove();
    }
  }
  
  document.querySelector('form[name="form"]').reset();
});
