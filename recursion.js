/* testing another method for defining if a number is even or odd "/

function iseven(){
    value = Number(prompt("Enter a positive whole number: "))

    if(value % 2 == 0){
        console.log(true)
    } else if(value % 2 == 1){
        console.log(false)
    }else{
        return iseven()
    }

}
iseven()
