
// 1- swamp Last Number With First Number
// [5,4,6,1] = [1,4,5,6]


let num = [5,4,6,1];  


for (let i = 0; i < num.length; i++) {
    [num[i],num[num.length - 1 - i]] = [num[num.length - 1- i],num[i]];

}




console.log(num);



