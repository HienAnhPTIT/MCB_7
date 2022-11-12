
import { redrawChart } from "./bieu-do.js";

 export const arrayT =[];
 export const arrayH =[];
 export const arrayL =[];
 export const arrayD =[];

function timechange() {
  // // thay đổi nhiệt độ
  const nhietdo = document.getElementById("nhietdo");
  const changeT1 = Math.floor(Math.floor(Math.random() * 61));
  if (arrayT.length <= 10) {
    arrayT.push(changeT1);
  } else {
    arrayT.splice(0, 1);
    arrayT.push(changeT1);
  }
  // console.log(arrayT);
// console.log(nhietdo.innerText);
  const changeT = (nhietdo.innerText = `${changeT1} \xB0C`);
  if (changeT1 <=10 ) {
    document.getElementById("div-nd").style.backgroundImage = "linear-gradient(to right, #52607F, #AAB7C4, #CFD7DF)";
  } else if (changeT1 <40){
    document.getElementById("div-nd").style.backgroundImage = "linear-gradient(to right, #CE7C3A, #F5BE58, #FCE882)";
  } else {
    document.getElementById("div-nd").style.backgroundImage = "linear-gradient(to right, #C23D4B, #E25950, #FFA27B)";
  }
  // thay đổi độ ẩm
  const doam = document.getElementById("doam");
  const changeH1 = Math.floor(Math.floor(Math.random() * 101));
  const changeH = (doam.innerText = changeH1 + "%");
  if(arrayH.length <= 10) {
    arrayH.push(changeH1);
  }else{
    arrayH.splice(0,1);
    arrayH.push(changeH1);
  }

  // console.log(changeD.length);

  if (changeH1 >= 40) {
    document.getElementById("div-da").style.backgroundColor = "green";
  } else {
    document.getElementById("div-da").style.backgroundColor = "orange";
  }
  // thay đổi ánh sáng

  const anhsang = document.getElementById("anhsang");
  // console.log(anhsang);
  const changeL1 = Math.floor(Math.random() * 101);
  const changeL = ( anhsang.innerText = `${changeL1} %`);
  if(arrayL.length <= 10){
    arrayL.push(changeL1);
  }else{
    arrayL.splice(0,1);
    arrayL.push(changeL1);
  }
  if (changeL1 >= 50) {
    document.getElementById("div-as").style.backgroundColor = "blue";
  } else {
    document.getElementById("div-as").style.backgroundColor = "purple";
  }

  // thay đổi ánh sáng

  const khoibui = document.getElementById("khoibui");
  // console.log(anhsang);
  const changeD1 = Math.floor(Math.random() * 101);
  const changeD = ( khoibui.innerText = `${changeD1} %`);
  if(arrayD.length <= 10){
    arrayD.push(changeD1);
  }else{
    arrayD.splice(0,1);
    arrayD.push(changeD1);
  }
  if (changeD1 >= 50) {
    document.getElementById("div-kb").style.backgroundColor = "blue";
  } else {
    document.getElementById("div-kb").style.backgroundColor = "purple";
  }

  // if(arrayTime.length <= 10){
  //   arrayTime.push(getTime());
  // }
  // else{
  //   arrayTime.splice(0,1);
  //   arrayTime.push(getTime());
  // }
  redrawChart(arrayT,arrayH,arrayL,arrayD);
}
setInterval(timechange, 2000);
// batDen();

///////////////////////////////////////////////////////////////
// function batDen(){
//   const a = confirm("Xác nhận bật");
//   if (a == true) {
//     document.getElementById("div-btna").style.backgroundColor = "#1ED395";
//     document.getElementById("myImage").src = "./imgs/bongdensang.png";
//   }
// }
// function tatDen(){
//   const a = confirm("Xác nhận tắt");
//   if (a == true) {
//     document.getElementById("div-btna").style.backgroundColor = "#FF414D";
//     document.getElementById("myImage").src = "./imgs/bongdentat.png";
//   }
// }

///////////////////////////////////////////////////////////////

const buttonON = document.querySelector("#button-on");
const buttonOFF = document.querySelector("#button-off");
const divBtnA = document.querySelector("#div-btna");
const myImages = document.getElementById("myImage");

buttonON.onclick = function () {
  const a = confirm("Xác nhận bật");
  if (a == true) {
    divBtnA.style.backgroundColor = "#1ED395";
    myImages.src = "./imgs/bongdensang.png";
  }
};
buttonOFF.onclick = function () {
  const a = confirm("Xác nhận tắt");
  if (a == true) {
    divBtnA.style.backgroundColor = "#FF414D";
    myImages.src = "./imgs/bongdentat.png";
  }
};