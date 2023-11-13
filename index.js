function create_table(data)     {
    let table = document.querySelector('table')
    table.innerHTML= ''
    let tr = document.createElement('tr')
    const naslovi = ["id","name","description"];
    naslovi.forEach(naslov => {
        let th = document.createElement('th')
        th.innerHTML = naslov
        tr.appendChild(th)
        console.log(th)
    })

    table.appendChild(tr)

    data.forEach(element => {
        let tr = document.createElement('tr')
        naslovi.forEach(naslov => {
            let td = document.createElement('td')
            td.innerHTML = element[naslov]
            tr.appendChild(td)
        })  
        table.appendChild(tr)
    });
    let headeri = document.querySelectorAll('th')
    headeri.forEach(heder => {
    heder.addEventListener("click", ()=>{
        let new_data = []
        new_data = jsonData.sort((a,b) =>{       
                return order ? (a[heder.innerText]>b[heder.innerText]) - (a[heder.innerText]<b[heder.innerText]) : (b[heder.innerText]>a[heder.innerText]) - (b[heder.innerText]<a[heder.innerText])     
             })
        order = !order
        console.log(new_data)
        create_table(new_data)      
        


    })
   
    
    })
    let input = document.querySelector('input')
    let btn = document.querySelector('button')
    btn.addEventListener("click", ()=>{
        console.log(input.value)
        let new_data = []
        jsonData.forEach(element => {
            naslovi.forEach(naslov => {
                if(element[naslov] == input.value){
                    
                    new_data.push(element)
                    console.log(new_data)
                    
                    
                }


            })

        })
        create_table(new_data)
    })  
    
    let button = document.getElementById('reset')
    button.addEventListener("click",()=>{
        input.value = " "
        create_table(jsonData)
    })
}


let btn = document.getElementById('add')
btn.addEventListener("click", ()=>{
    let id = document.getElementById('id')
    let name = document.getElementById('name')
    let description = document.getElementById('description')
    let newObject = {
        id:id.value,
        name:name.value,
        description:description.value
    }
    jsonData.push(newObject);
    create_table(jsonData)
})

create_table(jsonData)

order = true
