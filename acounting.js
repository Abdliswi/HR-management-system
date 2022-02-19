let noEmpAdministaration = 0;
let noEmpMarketing = 0;
let noEmpDevelopment = 0;
let noEmpFinance = 0;
let AdtotalSalary = 0;
let MrtotalSalary = 0;
let DetotalSalary = 0;
let FntotalSalary = 0;
let avgDe =0;
let avgMr =0;
let avgFn =0;
let avgAd =0;
let noEmplo=[];
let saEmplo=[];
let avgEmplo=[];

let array =[];

function gettingInfo() {
  let stringObj = localStorage.getItem("employee");
  let parsObj = JSON.parse(stringObj); //CONVERT json to obj

  if (parsObj !== null) {
    // HrMangment.exMemory =parsObj;
    array=parsObj;
  }
  render ()
 }

 function render (){
   array.filter(function(element,index){
    if (element.department == "Administration") {
            noEmpAdministaration += 1;
            AdtotalSalary += Math.round(element.salary);
          } else if (element.department == "Finance") {
            noEmpFinance += 1;
            FntotalSalary += Math.round(element.salary);
          } else if (element.department == "Marketing") {
            noEmpMarketing += 1;
            MrtotalSalary += Math.round(element.salary);
          } else if (element.department == "Development") {
            noEmpDevelopment += 1;
            DetotalSalary += Math.round(element.salary);
          }
avgDe = Math.round(DetotalSalary / noEmpDevelopment);
avgMr = Math.round(MrtotalSalary / noEmpMarketing);
avgFn = Math.round(FntotalSalary / noEmpFinance);
avgAd = Math.round(AdtotalSalary / noEmpAdministaration);

if (noEmpDevelopment == 0) {
  avgDe = 0;
} else if (noEmpAdministaration == 0) {
  avgAd = 0;
} else if (noEmpFinance == 0) {
  avgFn = 0;
} else if (noEmpMarketing == 0) {
  avgMr = 0;
}

   })
noEmplo=[noEmpDevelopment,noEmpAdministaration,noEmpFinance,noEmpMarketing];
saEmplo=[DetotalSalary,AdtotalSalary,FntotalSalary,MrtotalSalary];
avgEmplo=[avgDe,avgAd,avgFn,avgMr];
 
let table=document.getElementById("table");
let row0=document.createElement("tr");
table.appendChild(row0);
let th00=document.createElement("th");
row0.appendChild(th00);
th00.textContent="Department";

let th01=document.createElement("th");
row0.appendChild(th01);
th01.textContent="#no of employee";

let th02=document.createElement("th");
row0.appendChild(th02);
th02.textContent="Total Salary";

let th03=document.createElement("th");
row0.appendChild(th03);
th03.textContent="Total Average";

let dpArray=["Administration","Finance","Marketing","Development"]

  for(let k=0;k<4;k++){
  let row1=document.createElement("tr")
  table.appendChild(row1);
  let td01=document.createElement("td");
  row1.appendChild(td01);
  td01.textContent=dpArray[k];
  
  let td02=document.createElement("td");
  row1.appendChild(td02);
  td02.textContent=noEmplo[k];
  
  let td03=document.createElement("td");
  row1.appendChild(td03);
  td03.textContent=saEmplo[k];

  let td04=document.createElement("td");
  row1.appendChild(td04);
  td04.textContent=avgEmplo[k];
  }
  let row2=document.createElement("tr")
  table.appendChild(row2);
  let td21=document.createElement("td");
  row2.appendChild(td21);
  td21.textContent="Total";

  let td22=document.createElement("td");
  row2.appendChild(td22);
  td22.textContent="Total number of employee";

  let td23=document.createElement("td");
  row2.appendChild(td23);
  td23.textContent="Total salary for all employee";

  let td24=document.createElement("td");
  row2.appendChild(td24);
  td24.textContent="Average salary for all department";
let sum =0;
let totalnoEmployee =noEmplo.reduce((a, b) => a + b, 0);
let totalsalary =saEmplo.reduce((a, b) => a + b, 0) ;
let averageTotalSalary = Math.round(totalsalary/totalnoEmployee);

let row3=document.createElement("tr")
  table.appendChild(row3);
  let td31=document.createElement("td");
  row3.appendChild(td31);
  td31.textContent="";

  let td32=document.createElement("td");
  row3.appendChild(td32);
  td32.textContent=totalnoEmployee;

  let td33=document.createElement("td");
  row3.appendChild(td33);
  td33.textContent=totalsalary;

  let td34=document.createElement("td");
  row3.appendChild(td34);
  td34.textContent=averageTotalSalary;

 }

  gettingInfo();