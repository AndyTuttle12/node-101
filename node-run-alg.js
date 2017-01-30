// function union(array) {
//     let a = array.concat();
//     for(let i=0; i<a.length; ++i) {
//         for(let j=i+1; j<a.length; ++j) {
//             if(a[i] === a[j])
//                 a.splice(j--, 1);
//         }
//     }
//     return a;
// }
// const array1 = [1,2,3];
// const array2 = [100,2,1,10];
// const array3 = union(array1.concat(array2));
// console.log(array3);


function union(arr1, arr2) {
	const newArr = arr1.concat(arr2);
	return newArr.filter(function(currentValue, currIndex, currArr){
		return (currIndex === currArr.indexOf(currentValue));
	})
}