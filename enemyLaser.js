function enemyLaser (x , y , element){
    this.x = x ;
    this.y = y
    this.element =element;
    this.element.style.left = this.x + 'px';
    this.element.style.top = this.y + 'px';
    
  
  
   this.Position = (y)=>{
  
     
   }
   this.interval = setInterval(()=> {
    this.y+=8 
       
    this.element.style.top = this.y + 'px';
   
   } , 10)    

  
}