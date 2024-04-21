function addition(){
    let str1 = "101010"; 
    let str2 = "1011"; 
    let sum = (a, b) => { 
        let decSum = 
            BigInt(`0b${a}`) + 
            BigInt(`0b${b}`); 
        return decSum.toString(2); 
    }; 
    console.log(sum(str1, str2));
    document.getElementById("binaryResult").innerHTML = sum(str1, str2);
}
