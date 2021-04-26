// Your code here
function saturdayFun(act="roller-skate") {
    return `This Saturday, I want to ${act}!`
}

function mondayWork(act="go to the office") {
    return `This Monday, I will ${act}.`
}

function wrapAdjective(sign="*") {
    return function (params="special") {
        return `You are ${sign}${params}${sign}!`
    }
}
const Calculator = {add: (a, b) => a + b, subtract: (a, b) => a - b, multiply: (a, b) => a * b, divide: (a, b) => a / b}

function actionApplyer(startingInt, arrFnc) {
    let a = startingInt

    for (let i = 0; i < arrFnc.length; i++) {
        a = arrFnc[i](a)
    }
    return a
}