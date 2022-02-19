function HrMangment (id,fullName,img,department,level){
    this.id=id;
    this.fullName=fullName;
    this.img= img;
    this.department=department;
    this.level=level;
    console.log(this)
};

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  };

const employ0 = new HrMangment(1000,"Ghazi Samer",`./imgs/Ghazi.jpg`,["Administration"],["Senior"]);
const employ1 = new HrMangment(1001,"Lana Ali",`./imgs/Lana.jpg`,["Finance"],["Senior"]);
const employ2 = new HrMangment(1002,"Tamara Ayoub",`./imgs/Lana.jpg`,["Marketing"],["Senior"]);
const employ3 = new HrMangment(1003,"Safi Walid",`./imgs/Safi.jpg`,["Administration"],["Mid-Senior"]);
const employ4 = new HrMangment(1004,"Omar Zaid",`./imgs/Omar.jpg`,["Development"],["Senior"]);
const employ5 = new HrMangment(1005,"Rana Saleh",`./imgs/Rana.jpg`,["Development"],["Junior"]);
const employ6 = new HrMangment(1006,"Hadi Ahmad",`./imgs/Hadi.jpg`,["Finance"],["Mid-Senior"]);

HrMangment.prototype.Salary=function(){

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
this.salary= salary -salary*0.075;
}


employ0.Salary();
employ1.Salary();
employ2.Salary();
employ3.Salary();
employ4.Salary();
employ5.Salary();
employ6.Salary();


HrMangment.prototype.render =function(){
    //document.write(`<p><h2>"${this.fullName}" is an employee in our companey and its salary is : ${this.Salary()} $$</h2> </p>`)
//    let div=document.createElement('div');
let mysection =document.getElementById("hi");

//mysection.appendChild(div);
//   let ele =document.createElement('p') ;
//   div.appendChild(ele);
//   ele.textContent=`${this.fullName} ${this.id} ${this.level} ${this.salary} ${this.department}`;

  let divElem1 = document.createElement('div');
  
 mysection.appendChild(divElem1);

 let img =document.createElement('img');
   divElem1.appendChild(img);
   img.setAttribute('src',this.img);


   let pEle =document.createElement('p');
   divElem1.append(pEle);
   pEle.textContent=`name:${this.fullName} -ID:${this.id}`;

   let pEle2=document.createElement('p')
   divElem1.append(pEle2);
   pEle2.textContent=`Department:${this.department}-Level:${this.level}`;

   let pEle3=document.createElement('p');
   divElem1.appendChild(pEle3);
   pEle3.textContent=`${this.salary}`;
//    console.log("render")

}

employ0.render();
employ1.render();
employ2.render();
employ3.render();
employ4.render();
employ5.render();
employ6.render();

////html event
function func(){
    let d =new Date().getTime().toString();
    let id = d.slice(d.length-4);
    return id;
}
let addEmploy = document.getElementById("addEmploy");

addEmploy.addEventListener('submit',addEmployInfo);

function addEmployInfo (event){
    event.preventDefault();
    let FullName =event.target.fullName.value;
    let Department=event.target.select.value;
    let Image=event.target.Imageurl.value ;
    let level =event.target.selectLe.value;
    console.log(FullName,Department,Image);


    const employee = new HrMangment(func(),FullName,Image,Department,level);
    employee.Salary();
    employee.render();
    console.log(employee);
}