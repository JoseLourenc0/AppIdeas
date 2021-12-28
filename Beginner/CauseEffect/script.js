const people = JSON.parse(`[{\"name\":\"Thales Lorenzo Fogaça\",\"birthday\":\"08/08/1951\",\"address\":\"Rua Leonardo Klein\",\"phone\":\"(47) 99734-4259\"},{\"name\":\"Oliver Tomás Assunção\",\"birthday\":\"27/06/1959\",\"address\":\"Rua Lara Nilsa Raffaini Cação\",\"phone\":\"(16) 98457-1969\"},{\"name\":\"Nelson Lorenzo Lucca Araújo\",\"birthday\":\"01/10/1975\",\"address\":\"Rua Maurício Freire\",\"phone\":\"(69) 99439-8158\"},{\"name\":\"Tomás Anderson Vinicius da Luz\",\"birthday\":\"05/05/1956\",\"address\":\"Rua Alto do Céu\",\"phone\":\"(81) 99947-6868\"},{\"name\":\"Andrea Marina da Silva\",\"birthday\":\"26/08/1992\",\"address\":\"Rua Virgílio Garcia de Queiroz\",\"phone\":\"(21) 99176-2103\"},{\"name\":\"Yuri Leonardo Figueiredo\",\"birthday\":\"18/05/1989\",\"address\":\"Beco Oriental\",\"phone\":\"(92) 99148-2797\"},{\"name\":\"Luciana Antônia Fernanda Aragão\",\"birthday\":\"23/09/1951\",\"address\":\"Rua do Comércio 288\",\"phone\":\"(82) 98758-4917\"},{\"name\":\"Bianca Isabela Letícia Martins\",\"birthday\":\"27/04/1978\",\"address\":\"Rua Hipopótamos\",\"phone\":\"(67) 99319-9595\"},{\"name\":\"Alessandra Isabella Assunção\",\"birthday\":\"24/08/1990\",\"address\":\"Rua Parteira Mãe Quelé\",\"phone\":\"(79) 98868-0068\"},{\"name\":\"Isabelle Lúcia Sophia Ribeiro\",\"birthday\":\"22/11/1998\",\"address\":\"Rua Itelvina\",\"phone\":\"(63) 98590-6780\"},{\"name\":\"Henry Renato Arthur Aparício\",\"birthday\":\"26/11/2001\",\"address\":\"Rua Ouro Verde\",\"phone\":\"(95) 98491-5050\"},{\"name\":\"Levi Thiago Breno Brito\",\"birthday\":\"17/05/1991\",\"address\":\"Rua Coronel Menna Barreto\",\"phone\":\"(95) 98108-2574\"},{\"name\":\"Felipe Igor Cauê Nunes\",\"birthday\":\"23/01/1947\",\"address\":\"Rua Rosa Tostes Frasson\",\"phone\":\"(43) 98717-6750\"},{\"name\":\"Renan César Danilo Almeida\",\"birthday\":\"18/06/1947\",\"address\":\"Rua São Benedito\",\"phone\":\"(27) 98663-4594\"},{\"name\":\"Raimundo Danilo da Mota\",\"birthday\":\"13/05/1950\",\"address\":\"Travessa Beira Mar\",\"phone\":\"(97) 98427-2251\"},{\"name\":\"Adriana Isis Monteiro\",\"birthday\":\"16/06/1952\",\"address\":\"Travessa Joaquim Nabuco\",\"phone\":\"(95) 98754-4635\"},{\"name\":\"Sophia Analu Elaine Drumond\",\"birthday\":\"18/03/1986\",\"address\":\"Rua da Felicidade\",\"phone\":\"(83) 98481-8055\"},{\"name\":\"Raul Diego Enzo Corte Real\",\"birthday\":\"23/03/1980\",\"address\":\"Travessa Pista\",\"phone\":\"(68) 98394-6724\"},{\"name\":\"Manuela Eduarda Farias\",\"birthday\":\"13/07/2002\",\"address\":\"Avenida Laranjeiras\",\"phone\":\"(27) 98760-7892\"},{\"name\":\"Juan Nathan Ramos\",\"birthday\":\"08/08/1964\",\"address\":\"Rua Maria de Araújo Tavares\",\"phone\":\"(83) 98637-2429\"}]`) //data generated at https://www.4devs.com.br/gerador_de_pessoas

const setStorage = () => {
    people.forEach((el,i) => {
        localStorage.setItem(`person_${i}`,JSON.stringify(el))
    })
}

const listPeople = () => {
    document.getElementById('list').innerHTML = ''
    for(let i = 0 ; i < localStorage.length ; i ++)
    {
        document.getElementById('list').innerHTML+= `
            <li onclick='buildEditPerson("person_${i}")'>${i + 1} - ${JSON.parse(localStorage.getItem(`person_${i}`)).name}</li>
        `
    }
}

const buildEditPerson = person => {

    document.getElementsByClassName('selected').length > 0 ? document.getElementsByClassName('selected')[0].setAttribute('class','') : ''

    let p = JSON.parse(localStorage.getItem(person))
    let selectedLI = Array.prototype.slice.call(document.getElementsByTagName('li')).filter(el => el.textContent.includes(p.name))[0]

    selectedLI.setAttribute('class','selected')

    document.getElementById('main').innerHTML = ''
    document.getElementById('main').innerHTML += `
        <input id = '${person}_name_editable' value = '${p.name}' placeholder='name' type="text">
        <input id = '${person}_address_editable' value = '${p.address}' placeholder='address' type="text">
        <input id = '${person}_birthday_editable' value = '${p.birthday}' placeholder='birthday' type="text">
        <input id = '${person}_phone_editable' value = '${p.phone}' placeholder='phone' type="text">
        <button onclick = 'editPerson("${person}")'>Edit Person</button>
    `
}

const editPerson = person => {
    let p = new Object
    p.name = document.getElementById(`${person}_name_editable`).value
    p.address = document.getElementById(`${person}_address_editable`).value
    p.birthday = document.getElementById(`${person}_birthday_editable`).value
    p.phone = document.getElementById(`${person}_phone_editable`).value
    localStorage.setItem(person,JSON.stringify(p))
    listPeople()
}

if(localStorage.length === 0) setStorage()
listPeople()