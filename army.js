
function armyOfTanks (name , damage , health , element ,x ,y ) {
  this.name = name;
  this.damage=damage;
  this.health = health;
  this.element =element;
  this.x = x ;
  this.y = y
  this.element.style.left = this.x + 'px';
  this.element.style.top = this.y + 'px';

 this.Position = (x)=>{
  
   this.x = x
   
  this.element.style.left = this.x + 'px';
 }

 var root = document.getElementById("root");
  var enemyHealth = document.createElement("p");
  root.appendChild(enemyHealth);

 
   enemyHealth.id = "enemyHealth";

 
  this.EnemyHealth = function () {

   
    enemyHealth.innerHTML = "enemy Health: " + this.health;
    if (this.health < 0 ) {
      enemyHealth.innerHTML = "Enemy Is Dead";
    }
 
  }

   
  
  
  
 

}


