function Battle() {

  this.maintank = new myTank("Main Tank", getRandomNumber(150, 250), 3200);
  this.level = null;
  this.armyoftanks = [];
  this.enemyLasers =[]
  
  var rootId = document.getElementById("root");
  this.coins = 0;
  
 
  var coins = document.createElement("div");
  coins.id = "coins";
  rootId.appendChild(coins);
  coins.innerHTML = "Coins:  " + this.coins;
  var main = this.maintank;
  var rootId = document.getElementById("root");
  main = document.createElement("div");
  main.id = ("hero");
  var image = document.createElement("img");
  main.appendChild(image);
  image.src = "image/tank1.jpg";
  image.id = "tank1";
  rootId.appendChild(main);
  imagetank1 = document.getElementById("tank1");

  var winner = document.createElement("div");
  rootId.appendChild(winner);
  winner.id = "win";



   
var nextButton = document.createElement('button');
nextButton.innerHTML = "Next Level"
nextButton.style.display = 'none'
rootId.appendChild(nextButton)
nextButton.id ='next';
var restart = document.createElement('button');
restart.innerHTML = "restart"
restart.style.display = 'none'
restart.id = 'restart';
rootId.appendChild(restart)

this.setLocalStorageLevel = () => {


if(localStorage.getItem('level') == null){
  
    localStorage.setItem('level','1')
    var update = Number(localStorage.getItem('level'))
    this.level = update;
    
  
} else {
 
  var update = Number(localStorage.getItem('level'));
      this.level = update;
      
}
}

restart.addEventListener('click' , ()=> {
  window.location.reload(true);

})


nextButton.addEventListener("click" ,() =>{
  var  b = Number(localStorage.getItem('level'))
  b++;
  localStorage.setItem('level' , b);
  // localStorage.clear()
     
      window.location.reload(true);
})

  var heroj = document.getElementById("hero");
  var enemySpeed = []
      var a = 1 ;
      var counter = 0
  this.populateArmy =  ()=> {
     var enemies = [];
    for (var i = 0; i < a; i++) {
   var c = setInterval(()=>{

  
      var element = document.createElement('div');
        rootId.appendChild(element);
       var imageenemy = document.createElement("img");
      
        imageenemy.src = "image/tank1.jpg";
        imageenemy.style = 'transform: rotate(180deg)';
        element.appendChild(imageenemy);
        this.x = getRandomNumber(10 , 800);
      
        this.y = 10 ;
      var army = new armyOfTanks("tank" + i, getRandomNumber(40, 80), 2200 , element , this.x , this.y);
      this.armyoftanks.push(army);
       enemySpeed.push(3)
        counter++
      enemies.push(army);
      
        if(counter == this.level){
          clearInterval(c)
        
        }
      
      },3000) 
      
 }
 setInterval(()=>{
  
    for(var i = 0 ; i < this.armyoftanks.length; i++){
      if(this.armyoftanks[i].x < 20){
       var some =  getRandomNumber( 1, 4)
        enemySpeed[i] = 0
         enemySpeed[i] = + some
        
       } 
       if(this.armyoftanks[i].x > 800){
        var some =  getRandomNumber( 1, 4)
        enemySpeed[i] = 0
        enemySpeed[i] = -some
       
       }
       this.armyoftanks[i].x +=enemySpeed[i]
     this.armyoftanks[i].Position(this.armyoftanks[i].x)
     
    }
   
   
},30)

setInterval(()=>{
    for(var i = 0 ; i < this.armyoftanks.length; i++){
      if(this.armyoftanks[i].health > 0){
        var laser = document.createElement('span');
        laser.id = 'laser';
        rootId.appendChild(laser);
       var x =  this.armyoftanks[i].x +15
       var y = this.armyoftanks[i].y +10
        var enemy = new enemyLaser(x,y,laser)
        this.enemyLasers.push(enemy);
     
      }
      this.printTheWinner()
    }
    

},3000)
   setInterval (()=> {
    this.movingLaser()
    this.checkAmry();
    
   
  } , 20)
  }
  

  var laserSpeed = []
 
     
    var intervals = []
      this.movingLaser = () =>{
            intervals.push(null);
            laserSpeed.push(5);
          // setInterval(()=> {

          
            for(let i = 0 ; i < this.enemyLasers.length; i++){
             
            if(this.enemyLasers[i]!= undefined){

              // intervals[i]  =  setInterval(()=>{
                  
                if(this.enemyLasers[i] != undefined){
                
                this.enemyLasers[i].Position(this.enemyLasers[i].y+=laserSpeed[i])
              

                if(  this.enemyLasers[i].y > heroj.Y - 40 &&  this.enemyLasers[i].y 
                  + 40 < heroj.Y + 50 &&   this.enemyLasers[i].x > heroj.X &&   this.enemyLasers[i].x < heroj.X + 50){
                    clearInterval(this.enemyLasers[i].interval)
                     this.enemyLasers[i].element.remove()
                     
                    //  this.enemyLasers.splice(this.enemyLasers[i] , 1 )
                        
                     

                     intervals[i] = null;
                     intervals.splice(intervals[i] , 1)
                    
                  this.maintank.setHealth(this.maintank.getHealth() -  this.armyoftanks[0].damage);
                
            
                 
                  }
              }
               
                
                    if(this.enemyLasers[i] != undefined) {
                    if(this.enemyLasers[i].y > 460) {
                        this.enemyLasers[i].element.remove()
                      // console.log(this.enemyLasers[i].interval)
                     
                      //  laserSpeed[i] = 0 ;
                      
                      clearInterval(this.enemyLasers[i].interval)
                      
                      // this.enemyLasers.splice(this.enemyLasers[i] , 1 )
                      intervals.splice(intervals[i] , 1)
                     
                }
              }
              
                if( this.printTheWinner()){
                  // clearInterval(this.enemyLasers[i].interval)
                }
                this.removingEnemiies()
              
            
              
            }
          }
        // } , 20)
        }
  

  var LEFT_KEY = 37;
  var UP_KEY = 38;
  var RIGHT_KEY = 39;
  var DOWN_KEY = 40;
  var SPACE_KEY = 32;

  heroj.X = 400;
  heroj.Y = 430;
  heroj.w = 50;
  heroj.h = 50;


  var HERO_MOVEMENT = 5;
  var laserShoot = 10;
  


  this.setPosition = function () {
    heroj.style.left = heroj.X + "px";
    heroj.style.top = heroj.Y + "px";
  };



  this.keyPress = function (keyCode) {


    if (heroj.X + heroj.w >= 880) {
      heroj.X = 880 - heroj.w;

    }
    if (heroj.Y >= 440) {
      heroj.Y = 440;

    }
    if (heroj.Y <= 4) {
      heroj.Y = 4;
    }
    if (heroj.X <= 4) {
      heroj.X = 4;
    }

    if (keyCode == LEFT_KEY) {
      heroj.X -= HERO_MOVEMENT;
      heroj.style.left = heroj.X + "px";
    }
    if (keyCode == RIGHT_KEY) {
      heroj.X += HERO_MOVEMENT;
      heroj.style.left = heroj.X + "px";
    }
    if (keyCode == DOWN_KEY) {
      heroj.Y += HERO_MOVEMENT;
      heroj.style.top = heroj.Y + "px";
    }
    if (keyCode == UP_KEY) {

      heroj.Y -= HERO_MOVEMENT;
      heroj.style.top = heroj.Y + "px";
     
    }
    if (keyCode == SPACE_KEY) {

      this.controlPosition();

    }

  }


  this.controlPosition = function () {

    var laserDiv = document.createElement("div");
    laserDiv.id = "tankLaser";

    rootId.appendChild(laserDiv);

    laserDiv.Y = heroj.Y - 40;
    laserDiv.X = heroj.X + 25;

    var a = setInterval(() => {
    
      if (laserDiv.Y < 0) {
        laserDiv.remove();
        clearInterval(a);


      };

      for (let i = 0; i < this.armyoftanks.length; i++) {
        if (laserDiv.Y < this.armyoftanks[i].y + 40 && laserDiv.Y + 40 > this.armyoftanks[i].y && laserDiv.X > this.armyoftanks[i].x && laserDiv.X < this.armyoftanks[i].x + 50) {
          this.armyoftanks[i].health -= this.maintank.getDamage()
          
          clearInterval(a);
          laserDiv.remove();
          this.coins += 100;
          coins.innerHTML ="Coins:  "+  this.coins;
          this.armyoftanks[i].EnemyHealth();
        
        }
        
      } 
      laserDiv.style.left = laserDiv.X + "px";
      laserDiv.style.top = laserDiv.Y + "px";
      laserDiv.Y -= laserShoot;
      this.maintank.Health();
      this.isMainTankStillAlive();
  
     }, 15);

  }



    window.addEventListener("keydown", event => {
    this.keyPress(event.keyCode);
  });

 
  this.isMainTankStillAlive = () => {

    if (this.maintank.getHealth() < 0) {
      heroj.style.display = "none";
      heroj.remove();
      return true;
    }
      return false
  }

  this.removingEnemiies = function () {

    for (var i = 0; i < this.armyoftanks.length; i++) {
   
      if (this.armyoftanks[i].health < 0) {
      this.armyoftanks[i].element.remove()
      }
  }

  }

  this.checkAmry =  function() {

    for (var i = 0; i < this.armyoftanks.length; i++) {
   
      if (this.armyoftanks[i].health > 0 ) {
        return true;
      }

    }
 
    return false;
  }        
  this.printTheWinner = () => {
    var army = this.checkAmry();
    
    if (!army) {
   
      winner.style.display = "block";
      winner.innerHTML = "you win";

  
        nextButton.style.display = "block";

    } if (this.isMainTankStillAlive()) {
      winner.style.display = "block";
      winner.innerHTML = "you lose";
     
        restart.style.display = "block";
    }
  }


  repair = document.createElement("img");
  rootId.appendChild(repair);
  repair.src = "image/repair.png";
  repair.id = "repair";
  var message = document.createElement("div");
  rootId.appendChild(message);
  message.id = "message"

  repair.addEventListener("click" ,  () => {
     
             var price = 1000;
      if (this.coins < price) {
        message.innerHTML = "Not enought Coins"
      
       
      
      } else {
   this.maintank.setHealth(this.maintank.getHealth() + 800);
   this.coins -= 1000;
  coins.innerHTML=  this.coins ;
  message.innerHTML = "Repair on the way "
      }
  })
 



};


