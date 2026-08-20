function setWeather(type) {
  const sky = document.getElementById('sky');
  const effects = document.getElementById('weather-effects');
  
  sky.className = type;
  effects.innerHTML = ''; 

  if (type === 'rainy') {
    createElements('raindrop', 80);
  } else if (type === 'snowy') {
    createElements('snowflake', 50);
  } else if (type === 'night') {
    createElements('star', 100); 
  }
}

function createElements(className, count) {
  const container = document.getElementById('weather-effects');
  
  for (let i = 0; i < count; i++) {
    let el = document.createElement('div');
    el.className = className;
    el.style.left = Math.random() * 100 + 'vw';
    
    if (className === 'star') {
      
      el.style.top = Math.random() * 65 + '%';
      el.style.animationDelay = Math.random() * 2 + 's';
    } else {
      const duration = className === 'snowflake' 
        ? (Math.random() * 2 + 2) + 's' 
        : (Math.random() * 0.3 + 0.5) + 's';
        
      el.style.animationDuration = duration;
      el.style.animationDelay = -Math.random() * 5 + 's';
    }
    
    container.appendChild(el);
  }
}