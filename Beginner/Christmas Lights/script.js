let elements = []
let timeR = 1

const applyCond = () => {

    let time = document.getElementById('timingLights').value
    let nRows = document.getElementById('numberOfRows').value

    document.getElementById('iRows').innerHTML = ''
    let u = -1

    for(let i = 0 ; i < nRows ; i++) {
        document.getElementById('iRows').innerHTML += `
            <tr>
                <th>
                    <div><div id="circle_${++u}" class="circle"></div></div>
                    <div><input oninput="changeInt(this.value,'circle_${u}')" type="range"></div>
                    <div><input value="#000002" oninput="changeColor(this.value,'circle_${u}')" type="color"></div>
                </th>
                <th>
                    <div><div id="circle_${++u}" class="circle"></div></div>
                    <div><input oninput="changeInt(this.value,'circle_${u}')" type="range"></div>
                    <div><input value="#000002" oninput="changeColor(this.value,'circle_${u}')" type="color"></div>
                </th>
                <th>
                    <div><div id="circle_${++u}" class="circle"></div></div>
                    <div><input oninput="changeInt(this.value,'circle_${u}')" type="range"></div>
                    <div><input value="#000002" oninput="changeColor(this.value,'circle_${u}')" type="color"></div>
                </th>
                <th>
                    <div><div id="circle_${++u}" class="circle"></div></div>
                    <div><input oninput="changeInt(this.value,'circle_${u}')" type="range"></div>
                    <div><input value="#000002" oninput="changeColor(this.value,'circle_${u}')" type="color"></div>
                </th>
            </tr>
        `
    }

    setTiming(time)

    timeR = time

}

const changeInt = (val,id) => {
    document.getElementById(id).setAttribute('style',`background-color:${elements[id] ? elements[id].val : 'blue'};filter: brightness(${val}%);animation: blinker ${timeR}s linear infinite;`)
}

const changeColor = (val,id) => {
    document.getElementById(id).setAttribute('style',`background-color:${val};animation: blinker ${timeR}s linear infinite;`)

    if(elements.indexOf(id) === -1) {
        elements.push(id)
    } else {
        elements[id] = new Object
        elements[id].val = val
    } 
}

const setTiming = (t) => {
    Array.prototype.slice.call(document.getElementsByClassName('circle')).map(el => {
            el.setAttribute('style',`animation: blinker ${t}s linear infinite;`)
        })
}