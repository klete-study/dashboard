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

const idArray = [
  email,
  password,
  description
];

button.addEventListener('click', () => {
  for (let index = 0; index < idArray.length; index++) {
    const key = idArray[index];
    if (key.value.length <= 10) {
      if (!key.classList.contains('bdRed')) {
        key.classList.add('bdRed');
        const text = document.createElement('p');
        text.className = 'textRed';
        text.innerText = '10글자 이상 입력하세요'
        key.parentNode.appendChild(text);
      }
    } else {
      if (key.classList.contains('bdRed')) {
        key.classList.remove('bdRed');
      }
      key.parentNode.lastElementChild.remove();
    }
  }

  const radio = document.getElementsByName('radio');
  let radioCheck = false;
  for (let index = 0; index < radio.length; index++) {
    if (radio[index].checked) {
      radioCheck = true;
      break;
    }
  }

  const checkbox = document.getElementsByName('checkbox');
  let checkboxCheck = false;
  for (let index = 0; index < checkbox.length; index++) {
    if (checkbox[index].checked) {
      checkboxCheck = true;
      break;
    }
  } 

  // const radioClass = document.querySelector('.radio')
  // console.log(radioClass.getElementsByTagName('p'))
  // if (!radioCheck) {
  //   const text = document.createElement('p');
  //   text.className = 'textRed';
  //   text.innerText = '1개를 선택하세요';
  //   radioClass.appendChild(text);
  // }

  // const checkboxClass = document.querySelector('.checkbox')
  // if (!checkboxCheck) {
  //   const text = document.createElement('p');
  //   text.className = 'textRed';
  //   text.innerText = '1개 이상을 선택하세요'
  //   checkboxClass.appendChild(text);
  // }

  document.querySelector('form[name="form"]').reset();
});
