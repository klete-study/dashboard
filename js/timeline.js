const timelineArray = [ ];

const timelinekeyArray = [
  'time',
  'color',
  'title',
  'description'
];

const colorArray = [ ];

const save = document.getElementById('save');
const show = document.getElementById('show');
const reset = document.getElementById('reset');
const resetTimeline = document.getElementById('resetTimeline');
const showColor = document.getElementById('useColor');

const hexToRgb = (hexType) => {
  const hex = hexType.trim().replace( "#", "" );
  const rgb = ( 3 === hex.length ) ? 

  hex.match( /[a-f\d]/gi ) : hex.match( /[a-f\d]{2}/gi );
  rgb.forEach(function (str, x, arr){
      if ( str.length === 1 ) str = str + str;
      arr[ x ] = parseInt( str, 16 );
  }); 
  return "rgb (" + rgb.join(", ") + ")";
}

showColor.addEventListener('change', (event) => {
  const colorBox = document.querySelector('.colorBox');

  if (event.target.checked) {
    colorBox.classList.remove('none');
    for (let index = 0; index < colorArray.length; index++) {
      const colorText = document.createElement('p');
      colorText.innerText = `${index+1}. ${colorArray[index]}`;
      colorBox.appendChild(colorText);
    }
  } else {
    colorBox.classList.add('none');   
    while (colorBox.childElementCount != 0) {
      document.querySelector('.colorBox > p').remove();   
    }
  }
});

save.addEventListener('change', () => {
  const count = document.querySelector('.count');
  const time = document.getElementById('time');
  const color = document.getElementById('color');
  const title = document.getElementById('title');
  const description = document.getElementById('description');

  timelineArray.push([time.value,color.value,title.value,description.value]);
  for (let index = 0; index < timelineArray[timelineArray.length-1].length-1; index++) {
    if (timelineArray[timelineArray.length-1][index] === '' ) {
      alert(`${timelinekeyArray[index]}을(를) 입력하지 않았습니다`)
      timelineArray.pop();
      return;
    }
  }

  let addColor = false;

  if (colorArray.length === 0) {
    addColor = true
  } else {
    for (let index = 0; index < colorArray.length; index++) {
      if (colorArray[index] != hexToRgb(color.value)) {
        addColor = true;
      } else {
        addColor = false;
        break;
      }
    }
  }  
  if (addColor) { 
    colorArray.push(hexToRgb(color.value)); 
  }
  
  timelineArray.sort();
  count.innerText = timelineArray.length;
  document.querySelector('form[name="timeline"]').reset();
});

show.addEventListener('change', (event) => {
  if (event.target.checked) {
    for (let arrayIndex = 0; arrayIndex < timelineArray.length; arrayIndex++) {
      const container = document.createElement('div');
      const textContainer = document.createElement('div');
      container.className = 'timelineContainer'
      textContainer.className = 'textContainer'
      for (let index = 0; index < timelineArray[arrayIndex].length; index++) {
        const text = document.createElement('p');
        
        text.className = timelinekeyArray[index];
        if(text.className === 'title' || text.className === 'description') {
          container.appendChild(textContainer);
          textContainer.appendChild(text);
          text.innerText = timelineArray[arrayIndex][index];
        } else {
          if (text.className === 'color') {
            text.style.borderColor = timelineArray[arrayIndex][index];
            text.innerText = '';
          } else {
            if (timelineArray[arrayIndex][index] < "12") {
              text.innerText = `${timelineArray[arrayIndex][index]} AM`;
            } else {
              text.innerText = `${timelineArray[arrayIndex][index]} PM`;
            }
          }
          const createDiv = document.createElement('div');
          createDiv.appendChild(text);
          container.appendChild(createDiv);
        }
        document.querySelector(".timeline").appendChild(container);
      }
    }
  } else {
    while (document.querySelector(".timeline").childElementCount != 0) {
      document.querySelector('#timelineContainer').remove();     
    }
  }
});

reset.addEventListener('change', () => {
  document.querySelector('form[name="timeline"]').reset();
});

resetTimeline.addEventListener('change', () => {
  const count = document.querySelector('.count');
  while (document.querySelector('#timelineContainer') != null) {
    document.querySelector('#timelineContainer').remove();
  }
  
  while (timelineArray.length != 0) {
    timelineArray.pop();
    colorArray.pop();
  }
  count.innerText = timelineArray.length;
});
