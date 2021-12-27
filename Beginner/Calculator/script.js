let specificOperations = ['AC','=']
let operationsArray = []
let countOp = 0

const cleanVisor = () => {
    document.getElementById('pResult').innerText = 0
    operationsArray = []
}

const insertValue = (el) => {
    
    let lastElement = operationsArray.length > 0 ?operationsArray[operationsArray.length-1] : ''

    if(specificOperations.includes(el)) return

    if(!isNaN(parseInt(el)) || el === '.') {

        if(!isNaN(parseInt(lastElement.value)) || lastElement.value === '.' || el === '.') {
            lastElement.value = lastElement.value.concat(el)
        } else {
            operationsArray.push({
                type:'number',
                value:el
            })
        }
        
    } else {
        operationsArray.push({
            type:'operation',
            value:el
        })
    }
    
    if(el === 'π') {
        operationsArray.pop()
        operationsArray.push({
            type:'number',
            value: el
        })
    }  

    document.getElementById('pResult').innerText = ''
    operationsArray.map(e => {
        document.getElementById('pResult').innerText += e.value
    })

    // console.log(operationsArray)
}

const showResult = () => {
    console.log(operationsArray)

    operationsArray.map( el => {
        el.value === 'π' ? el.value = Math.PI : ''
        el.type === 'number' ? el.value = parseFloat(el.value) : ''
    })

    while(operationsArray.length>1) {
        let temp = 0
        switch(operationsArray[1].value) {
            case '*':
                temp = multiply([operationsArray[0].value,operationsArray[2].value])
                removeElements(2)
                operationsArray[0].value = temp 
                break
            case '+':
                temp = sum([operationsArray[0].value,operationsArray[2].value])
                removeElements(2)
                operationsArray[0].value = temp 
                break
            case '-':
                temp = subtract([operationsArray[0].value,operationsArray[2].value])
                removeElements(2)
                operationsArray[0].value = temp 
                break
            case '/':
                temp = divide([operationsArray[0].value,operationsArray[2].value])
                removeElements(2)
                operationsArray[0].value = temp 
                break
            default:
                console.log('something went wrong')
                break
        }
        countOp ++
        if(countOp > 30) {
            document.getElementById('pResult').innerText = 'ERR'
            return
        }
    }
    document.getElementById('pResult').innerText = ''
    operationsArray.map(e => {
        document.getElementById('pResult').innerText += e.value
    })
        // operationsArray === 'x' ?
    // }

}

const cleanLastNumber = () => {
    operationsArray.length > 0 ? (operationsArray[operationsArray.length-1].type === 'number' ? operationsArray.pop() : '') : ''

    document.getElementById('pResult').innerText = ''
    operationsArray.map(e => {
        document.getElementById('pResult').innerText += e.value
    })

    if(operationsArray.length === 0) document.getElementById('pResult').innerText = 0
}

const changeSignal = () => {
    if(operationsArray.length > 0) {
        if(operationsArray[operationsArray.length - 1].type === 'number') {
            console.log('1')
            operationsArray[operationsArray.length-1].value = String(parseFloat(operationsArray[operationsArray.length-1].value) * -1)
            document.getElementById('pResult').innerText = ''
            operationsArray.map(e => {
                document.getElementById('pResult').innerText += e.value
            })
        }
    }
}

[].slice.call(document.getElementsByTagName('button')).forEach(e => {
    if(e.innerText !== 'AC' && e.innerText !== '=' && e.innerText !== 'C' && e.innerText !== '+/-') e.setAttribute('onclick','insertValue(this.innerHTML)')
})

const multiply = (...p) => {
    let val = p[0]
    return val.reduce((accumulator, current) => {
		return accumulator *= current;
	});
}

const divide = (...p) => {
    let val = p[0]
    return val.reduce((accumulator, current) => {
		return accumulator /= current;
	});
}

const sum = (...p) => {
    let val = p[0]
    return val.reduce((accumulator, current) => {
		return accumulator += current;
	});
}

const subtract = (...p) => {
    let val = p[0]
    return val.reduce((accumulator, current) => {
		return accumulator -= current;
	});
}

const removeElements = n => {
    for(let i = 0 ; i < n ; i ++) operationsArray.shift()
}