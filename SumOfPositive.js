// 1

function SumOfPositive(arr) {

    let sum = 0;
  for(i =0; i<arr.length; i++) {
    if(arr[i]  > 0 ) {
        sum +=arr[i];
    } 
}
return sum;
}

console.log(SumOfPositive([1, 2, -3]));



// 2
function SumOfPositives(arr) {

   return  arr.filter((x) => x > 0).reduce((prev,current) => prev + current, 0 );

}
console.log(SumOfPositives([3, 4, -3]));
