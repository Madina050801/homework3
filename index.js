// //1-misol
// let title = "webBrain Academy";
// title = title.repeat(5);
// title=title.toLowerCase();
// var aSanagich = 0;
// var bSanagich = 0;
// for (i=0; i<title.length; i++)
// {
//     if(title[i]=='a'){
//         aSanagich++;
//     }
//     if(title[i]=='b'){
//         bSanagich++;
//     }
// }
// console.log(`a: ${aSanagich}ta
// b: ${bSanagich}ta`)

//2-misol
var toqlar=0;
var juftlar=0;
// var flag = true;
console.log('Sonlar: 1, 2, 3, ... 100');
for(i=2; i<=100; i++)
{
    var flag = true;
    if(i%2==0){
        juftlar++;
    }
    if(i%2==1){
        toqlar++;
    }

    for(j=2; j<=i-1; j++)
    {
    if (i % j == 0) {
        flag = false;
        // break;
    }
    }
    if (flag == true) {
        console.log(i);
    }
    
}
console.log(`${juftlar}ta juft son`)
console.log(`${toqlar}ta toq son`) 

// //3-MISOL
// for(i=10; i>=0; i--)
// {
//     console.log(i);
// }

// //4-misol
// var son = 748394736384937;
// son = son.toString();
// console.log(`Juft o'rindagi:`)
// for(i=0; i<son.length; i++)
// {
//     if(i%2==0){
//         console.log(son[i])
//     }
// }
// console.log(`Toq o'rindagi:`)
// for(i=0; i<son.length; i++)
// {
//     if(i%2==1){
//         console.log(son[i])
//     }
// }