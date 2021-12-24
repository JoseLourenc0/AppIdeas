const borderDiv = () => {

    let selectOption = document.getElementById('selectOption').value

    Array.prototype.slice.call(document.getElementsByClassName('px')).map( el => {
        el.textContent = selectOption == 'px' ? 'px' : '%'
    })

    let tr = document.getElementById('top-right').value
    let tl = document.getElementById('top-left').value
    let br = document.getElementById('bottom-right').value
    let bl = document.getElementById('bottom-left').value

    tr = tr ? tr + (selectOption == 'px' ? 'px ' : '% ') : '0px ' 
    tl = tl ? tl + (selectOption == 'px' ? 'px ' : '% ') : '0px ' 
    br = br ? br + (selectOption == 'px' ? 'px ' : '% ') : '0px ' 
    bl = bl ? bl + (selectOption == 'px' ? 'px ' : '% ') : '0px '

    let css = `border-radius: ${tr + tl + br + bl}`

    document.getElementById('CSS').value = css
    document.getElementById('divmodified').setAttribute('style',css)
}

function myFunction() {
    /* Get the text field */
    var copyText = document.getElementById("CSS");
  
    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */
  
     /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText.value);
  } 