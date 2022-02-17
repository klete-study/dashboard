(function () {
  const array = [];
  
  const timelineArray = [
    'time',
    'color',
    'title',
    'description'
  ];

  const save = document.getElementById('save');
  const value = document.getElementById('value');
  const show = document.getElementById('show');
  const reset = document.getElementById('reset');
  const deleteTimeline = document.getElementById('delete');
  const time = document.getElementById('time');
  const color = document.getElementById('color');
  const title = document.getElementById('title');
  const description = document.getElementById('description');
  let code = 'normal'
  
  save.addEventListener('change', (event) => {
    array.push([time.value,color.value,title.value,description.value]);
    for (let arrayIndex = 0; arrayIndex < array.length; arrayIndex++) {
      for (let index = 0; index < array[arrayIndex].length-1; index++) {
        if (array[arrayIndex][index] === '' ) {
          alert(`${timelineArray[index]}이(가) 없습니다.`)
          code = 'error';
        }
      }
    }
    if (code === 'error') {
      array.pop();
      code = 'normal';
      return;
    }
    
    array.sort();
    
    value.innerText = array.length;
    document.getElementById('timeline').reset();
  });

  show.addEventListener('change', (event) => { 
    if (show.checked === true) {
      for (let arrayIndex = 0; arrayIndex < array.length; arrayIndex++) {
        const container = document.createElement('div');
        container.id = 'timelineContainer'
        const textContainer = document.createElement('div');
        textContainer.id = 'textContainer'
        
        for (let index = 0; index < array[arrayIndex].length; index++) {
          const text = document.createElement('span');
          text.id = timelineArray[index]+arrayIndex;
          text.className = timelineArray[index];
          
          if(text.className === 'title' || text.className === 'description') {
            container.appendChild(textContainer);
            textContainer.appendChild(text);
            textContainer.appendChild(document.createElement('br'))
            text.innerText = array[arrayIndex][index];
          } else {

            if (text.className === 'color') {
              text.style.borderColor = array[arrayIndex][index];
              text.innerText = '';
            } else {

              if (array[arrayIndex][index] < "12") {
                text.innerText = `${array[arrayIndex][index]} AM`;
              } else {
                text.innerText = `${array[arrayIndex][index]} PM`;
              }
            }       
            const createDiv = document.createElement('div');
            createDiv.appendChild(text);
            container.appendChild(createDiv);
          }
          document.getElementById("result").appendChild(container);
        }
      }
    } else {
      while (document.getElementById("result").childElementCount != 0) {
        document.querySelector('#timelineContainer').remove();     
      }
    }
  });

  reset.addEventListener('change', (event) => {
    document.getElementById('timeline').reset();
  });

})();
