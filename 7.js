
let arr = [0,null,40,300,"uitu",8,5];
let zero = 0;
let even = 0;
let odd = 0;
for (let i = 0; i < arr.length; i++){
  if(arr[i] === 0 ){
    zero +=1;
  }else if (typeof (arr[i]) !== "number" || typeof (arr[i]) === "NaN"){
    console.log(`${arr[i]} -  это не число`);
  }else if (arr[i] % 2 === 0){
    even +=1;
  }else{
    odd +=1;
  }
}
console.log(`${zero} - нулей`);
console.log(`${even} - чётных чисел`);
console.log(`${odd} - не чётных чисел`);