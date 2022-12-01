let arr = [10,45,5,3,74];
let element = arr[0];
for (item of arr){
  if(item !== element){
    console.log("false");
  }else{
    console.log("true");
  }
}