function grow(x){

    // membuat variabel result yang dimana mengambil array[0] atau data yang pertama pada index array
    let result = x[0]
    // membuat perulangan untuk index selanjutnya
    for(let i = 1; i < x.length; i++){
        result = result * x[i];
         // atau menggunakan result *= x[i];
        // hasilnya
        // dari index 1
        // 1 = 1 * 2 == 2
        // index 2
        // 2 = 2 * 3 == 6
        // index 3
        // 6 = 6 * 4 == 24
       
    }
    return result;
}
console.log(grow([1, 2, 3, 4]));