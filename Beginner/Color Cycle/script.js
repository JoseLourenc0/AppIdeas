let arrayOfColors = ['blueviolet', 'black', 'yellow']
let count = 0

setInterval(()=> {
    if(count === arrayOfColors.length) count = 0
    document.getElementById('colorChange').setAttribute('style',`background-color: ${arrayOfColors[count]}`)
    count ++
},250)

Array.prototype.slice.call(document.getElementsByTagName('input')).forEach(e => {
    e.innerHTML == 'cssCode' ? '' : e.setAttribute('onkeyup','previewColor(this.value)')
})

const previewColor = (e) => {
    if(isNaN(parseInt(e)) && e.length > 0) alert('Just use numbers between 0 and 255')
    let red = document.getElementById('red').value ? document.getElementById('red').value : ''
    let green = document.getElementById('green') ? document.getElementById('green').value : ''
    let blue = document.getElementById('blue') ? document.getElementById('blue').value : ''

    let cssCode = `background-color: rgb(${red},${green},${blue})`
    document.getElementById('preview').setAttribute('style',cssCode)
    document.getElementById('cssCode').value = cssCode
}

function myFunction() {
    /* Get the text field */
    var copyText = document.getElementById("cssCode");
  
    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */
  
     /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText.value);
  }

const insertColor = () => {
    let red = ''
    let green = ''
    let blue = ''

    if(document.getElementById('red')) {
        red = document.getElementById('red').value
    } else {
        return
    }
    if(document.getElementById('green')) {
        green = document.getElementById('green').value
    } else {
        return
    }
    if(document.getElementById('blue')) {
        blue = document.getElementById('blue').value
    } else {
        return
    }

    arrayOfColors.push(`rgb(${red},${green},${blue})`)

}