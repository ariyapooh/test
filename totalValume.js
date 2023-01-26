/* For instance totalVolume([2,3,2], [6,6,7], [1,2,1]) should return 
266 since(2x3x2)+(6x6x7)+(1x2x1)=12+252+2=266 */

function totalVolume(...boxes) {
    return boxes.reduce((a,b)=> a + b.reduce((c,d)=> c * d,1),0);
    }
    console.log(totalVolume([4, 2, 4], [3, 3, 3], [1, 1, 2], [2, 1, 1]))
    console.log(totalVolume([2, 2, 2], [2, 1, 1]))
    console.log(totalVolume([1, 1, 1]))
