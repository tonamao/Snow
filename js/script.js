(function(){
  'use strict'
  var cnv = document.getElementById('cnv');
  var ctx = cnv.getContext('2d');

  var snows = [];
  
  const minSize = 1;
  const maxSize = 5;
  const minWind = -0.6;
  const maxWind = 0.6;
  const minSpeed = 0.2;
  const maxSpeed = 1.5;
  
  var w = ctx.canvas.width = window.innerWidth;
  var h = ctx.canvas.height = window.innerHeight;
  
  function random(min, max) {
    return Math.random() * (max - min) + min;
  };
  
  
  class Snow {
    
    constructor(){
      this.x = random(0, w);
      this.y = random(0, h);
      this.size = random(minSize, maxSize);
      this.directX = random(minWind, maxWind);
      this.directY = random(minSpeed, maxSpeed);
      
    }
    
    draw(){
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI*180, false);
      ctx.fillStyle = 'white';
      ctx.fill();
    }
    
    update(){
      this.draw();
      
      if( this.y > h ){
        this.y = 0;
      };
      this.y += this.directY;
      
      if(( this.x > w )||( this.x < 0)){
        this.y = 0;
        this.x = random(0, w);
      }
      this.x += this.directX;
    };
  
  };
  
  
  function createSnow(num) {
    for(var i = 0; i < num; i++){
      snows[i] = new Snow();
      snows[i].draw();
    }
  };
  
  createSnow(300);
  
  setInterval(function(){
    ctx.clearRect(0, 0, w, h);
    for(var i = 0; i < snows.length; i++){
      snows[i].update();
    }
  }, 10);
  
  
  
})();

