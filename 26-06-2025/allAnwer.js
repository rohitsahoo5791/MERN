
// let nameR= "rohit"
// let rev=""
// for (let i=nameR.length -1;i!=-1;i--){
//     rev+=nameR[i]
// }
// console.log(rev);  --1


// function isPallendrom(txt){
//     let i=0,j=txt.length-1;
//     while(i<=j){
//         if(txt[i]!=txt[j]) return false
//         i++,j--;
//     }
//     return true
// }

// console.log(isPallendrom("abx"))



// function getLargestWord(str) {
//     // Split the string into an array of words
//     const words = str.split(" ");
    
//     // Initialize a variable to store the longest word
//     let longest = "";

//     // Loop through the array to find the longest word
//     for (let word of words) {
//         if (word.length > longest.length) {
//             longest = word;
//         }
//     }

//     return longest;
// }

// // Example usage:
// const input = "JavaScript is an awesome programming language";
// const largestWord = getLargestWord(input);
// console.log("The largest word is:", largestWord);




// arr1= [1,2,3,[5,6,7,[6,9]]]
// function getTheArray(arr,temp){
//     arr.forEach(element => { 
//         if(Array.isArray(element)){
//             return getTheArray(element,temp)
//         }
//         else{
//             temp.push(element)

//         }
        
//     });
//     return temp
// }

// console.log(getTheArray(arr1,[]))



// function removeDupilicate(arr){
//     re new Set(arr);
//     return c



// }

// console.log(removeDupilicate([5,7,8,8]))



