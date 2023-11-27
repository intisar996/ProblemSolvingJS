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
