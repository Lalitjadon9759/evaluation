
function traversal(arr){
let result=[]
for(let i=0;i<arr.length;i++){
        const first=arr[i];

        if(Array.isArray(first)){
            for(let j=0;j<first.length;j++){
                const second=first[j];

                if(Array.isArray(second)){
                    for(let k=0;k<second.length;k++){
                        result.push(second[k]);
                    }
                }else{
                    result.push(second);
                }
            }
        }else{
            result.push(first);
        }
    
}
return result;
}
let arr=[1, [2, [3, 4], 5], 6, [7, 8]]
let result1=traversal(arr)
console.log(result1);