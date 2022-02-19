function hrMangment (id,fullName,department,level){
    this.id=id;
    this.fullName=fullName;
    this.img=`./imgs/${this.fullName}.jpg`;
    this.department=department;
    this.level=level
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }

const employ0 = new hrMangment(1000,"Ghazi Samer",["Administration"],["Senior"]);
const employ1 = new hrMangment(1001,"Lana Ali",["Finance"],["Senior"]);
const employ2 = new hrMangment(1002,"Tamara Ayoub",["Marketing"],["Senior"]);
const employ3 = new hrMangment(1003,"Safi Walid",["Administration"],["Mid-Senior"]);
const employ4 = new hrMangment(1004,"Omar Zaid",["Development"],["Senior"]);
const employ5 = new hrMangment(1005,"Rana Saleh",["Development"],["Junior"]);
const employ6 = new hrMangment(1006,"Hadi Ahmad",["Finance"],["Mid-Senior"]);

hrMangment.prototype.Salary=function(){

    let salary =0;
    let net=0;
    let tax=0;
    switch(true){
       case (this.level =="Senior"):
           salary= getRandomInt(1500,2000);
           
           break;
       
       case(this.level =="Mid-Senior"):
       salary= getRandomInt(1000,1500);
      
       break;
       
       case(this.level =="Junior"):
       salary= getRandomInt(500,1000);
       
       break;
   }

   return salary;
}

hrMangment.prototype.net=function(){

tax =this.Salary()*.075;
net=this.Salary() - tax;
return net ;
}

employ0.Salary();
employ1.Salary();
employ2.Salary();
employ3.Salary();
employ4.Salary();
employ5.Salary();
employ6.Salary();


hrMangment.prototype.render =function(){
    document.write(`<p><h2>"${this.fullName}" is an employee in our companey and its salary is : ${this.Salary()} $$</h2> </p>`)
}

employ0.render();
employ1.render();
employ2.render();
employ3.render();
employ4.render();
employ5.render();
employ6.render();


