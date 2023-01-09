const confirmedSigns = [">","<","=","+","-","*","/"]

const errorMSG = ()=> console.log('Ошибка')

const startEquation = ([sbl,dig1,dig2])=>{
switch (sbl){
    case '>': console.log(dig1 > dig2)
        break;
    case '<': console.log(dig1 < dig2)
        break;
    case '=': console.log(dig1 = dig2)
        break;
    case '+': console.log(dig1 + dig2)
        break;
    case '-': console.log(dig1 - dig2)
        break;
    case '*': console.log(dig1 * dig2)
        break;
    case '/': console.log(dig1 / dig2)
        break;
}
}

const checkConsistencyOfArr = (expArr)=> {
    let symbol = null
    let firstDigit = null
    let secondDigit = null

    expArr = expArr.map((val, i) => {
        if (confirmedSigns.includes(val)) symbol = val
        return val === symbol ? NaN : parseFloat(val)
    })
    expArr = expArr.filter((val) => !isNaN(val))

    if (symbol && expArr.length>=2) {
        firstDigit  = expArr[0]
        secondDigit = expArr[1]
        startEquation([symbol,firstDigit,secondDigit])
    } else errorMSG()
}

const getMathResult = (expression = [])=>{
    let arrCopy = Array.from(expression)
    checkConsistencyOfArr(arrCopy)
}

getMathResult(['2','3Hi','hello','5','*'])