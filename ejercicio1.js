const numero = [];
for (let i =0; i<1000; i++){
if(i%3===0 || i%5===0){
 numero.push(i);
 
}
};
let total = 0;
numero.forEach(function(a){total+=a;});
console.log(total)