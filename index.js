function calc(){
let NumOne = Number(document.getElementById("no1").value);
let NumTwo = Number(document.getElementById("no2").value);
let Operation = document.getElementById("operation").value;
let Answer = document.getElementById("ans");
let Equals;
switch(Operation){
  case "+":
  Equals = NumOne + NumTwo;
  break;
  case "-":
  Equals = NumOne - NumTwo;
  break;
  case "*":
  Equals = NumOne * NumTwo;
  break;
  case "/":
  Equals = NumOne / NumTwo;
  break;
  case "SEcREt_code_123M":
  Equals = "So you found the secret code... The password is 1001101!"
  window.open('funthingstodo.html', '_blank');
  break;
}
if(Operation == "SEcREt_code_123M"){
Answer.innerText = String(Equals);
}else{
  Answer.innerText = "It's equal to " + String(Equals);
}
}
