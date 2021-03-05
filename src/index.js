
exports.min = function min (array) {
  if(array!=undefined&&array.length!=0){
  let minValue=array[0]
   for (let i=1;i<array.length;i++){
      if (array[i]<minValue) minValue=array[i]
   }
   return minValue;
}
else return 0
}



exports.max = function max (array) {
  if(array!=undefined&&array.length!=0){
  let maxValue=array[0]
   for (let i=1;i<array.length;i++){
      if (array[i]>maxValue) maxValue=array[i]
   }
   return maxValue;
}
else return 0
}



exports.avg = function avg (array) {
    if(array!=undefined&&array.length!=0){
    let sum=0
     for (let i=0;i<array.length;i++){
        sum+=array[i]
     }
     return sum/array.length;
  }
  else return 0
}
  
 
