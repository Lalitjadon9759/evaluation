function employeeProductivity(arr){
        
    for(let i=0;i<arr.length;i++){
        let num=arr[i].completions;
        let sum=0
        let sum1=0
         let arr1=[]
        let average;
        for(let i=0;i<num.length;i++){
            sum=sum+num[i]
          average=(sum/3)   
        }
        console.log(average)
        
         
         
    }
}
;let arr=[
   {  name:"James",department:"Marketing",completions:[4,6,5]},
   {  name:"Sarah",department:"Engineering",completions:[7,9,8]},
   {  name:"Miguel",department:"Engineering",completions:[2,3,1]},
   {  name:"Priya",department:"marketin",completions:[5,4,6]},
   {  name:"Hiroshi",department:"Design",completions:[3,2,2]}
   
]
console.log(employeeProductivity(arr))