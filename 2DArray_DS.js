/**
 * Print the largest (maximum) hourglass sum found in .
 * 
 */
function hourglassSum(arr) {
    // Write your code here
        let answer=-70; //placed an arbitrary smallest number that it should never be 
        let a, b,c,d,e,f,g; 
        
        for(let x=1; x<=4; x++)
        {
            for (let y=1;y<=4;y++)
            {    
                a = arr[x-1][y-1]; 
                b = arr[x-1][y];
                c = arr[x-1][y+1]; 
                d = arr[x][y]
                e = arr[x+1][y-1]
                f = arr[x+1][y]
                g = arr[x+1][y+1]
                hourglassSum = a + b + c + d + e + f + g; 
                console.log(`x = ${x}, y=${y} and a=${a} b=${b} c=${c} d=${d} e=${e} f=${f} g=${g}`);
                console.log('hourGlass = ' + hourglassSum)
            if (hourglassSum > answer)
            {
                answer = hourglassSum
            }
            }        
        }
        
    return answer; 
}
