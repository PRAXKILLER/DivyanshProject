function removeDuplicates(arr) {
    var arr2 = [];
    var chk = [];
    for (var i = 0; i < arr.length; i++)chk.push(true);
    for (var i = 0; i < arr.length; i++){
        if (chk[i] == true) arr2.push(arr[i]);
        for (var j = 0; j < arr.length; j++){
            if (i != j && arr[i]==arr[j]) {
                chk[j] = false;
            }
        }
    }
    return arr2;
}

var te = [2, 2, 1, 3, 5, 'RAM', 5, 'RAM', 'LAWyer', 4];
var x = removeDuplicates(te);
console.log(x);