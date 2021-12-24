const binaryConvertion = e => {

    document.getElementById('spanAlert').setAttribute('style','display:none')

    let convertion = parseInt(e,2)

    if(
        isNaN(convertion)
        || e.includes(2 ||3 || 4 || 5 || 6 || 7 || 8 || 9)
        ) {
        stopConvertion()
        return
    }
    document.getElementById('equivalentValue').value = parseInt( e, 2 )

} 

const stopConvertion = () => {
    document.getElementById('spanAlert').setAttribute('style','display:block')
}