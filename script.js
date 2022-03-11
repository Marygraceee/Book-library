function Books(name, creator, length) {
    this.name = name
    this.creator = creator
    this.length = length
 
  }
  /*
  const book1 = new Books("Rabbia", "Nikole", "200")
  const book2 = new Books("Cilli", "Mari", "200")*/
  
let bookname = document.querySelector(".bookname")
let bookauthor = document.querySelector(".bookauthor")
let bookpages = document.querySelector(".bookpages")
let formauthor = document.getElementById("author")
let formtitle = document.getElementById("title")
let formpages = document.getElementById("pages")
let addbutton = document.querySelector(".addbutton")
let readcheck = document.getElementById("read")

formauthor.value = ""
formtitle.value = ""
formpages.value = ""
readcheck.checked = false

let myLibrary = []

function addBooktoArray(){
    addbutton.addEventListener("click", () =>{
        if (formauthor.value === "" || formtitle.value === "" ){
            alert("Complete the form")
        } 
        if (formauthor.value !== "" && formtitle.value !== "" && formpages.value === ""){
            alert("Pages are counted with numbers, not text!")
        }
       
         if (formauthor.value !== "" && formtitle.value !== "" && formpages.value !== "" && readcheck.checked === false) {
             let newBook = new Books(`${formtitle.value}`, `${formauthor.value}`, `${formpages.value}`)
             myLibrary.push(newBook)    
             displayBook();        
        }
        if (formauthor.value !== "" && formtitle.value !== "" && formpages.value !== "" && readcheck.checked === true) {
            let newBook = new Books(`${formtitle.value}`, `${formauthor.value}`, `${formpages.value}`)
            myLibrary.push(newBook)    
            displayBook();        
       }
    })
}
 
function displayBook(){
    if (readcheck.checked === false){
    for (i = (myLibrary.length - 1); i < myLibrary.length; i++){
        let container = document.querySelector(".maincontent")
                let newCard = document.createElement("div")  
                newCard.classList.add("card")  
                let newh1 = document.createElement("h1")
                let newp = document.createElement("p")
                let newpages = document.createElement("p")
                let newcheck = document.createElement("p")
                let deletebutton = document.createElement("button")
                let togglebutton = document.createElement("button")
                newh1.textContent =  myLibrary[i].name
                newp.textContent = myLibrary[i].creator
                newpages.textContent = "The book has " + myLibrary[i].length + " pages"
                newcheck.textContent = "The book hasn't been read"
                deletebutton.textContent = "Remove"
                togglebutton.textContent = "I've read the book"
                 newCard.append(newh1, newp, newpages, newcheck, deletebutton, togglebutton)
                container.appendChild(newCard)    
                formauthor.value = ""
                formtitle.value = ""
                formpages.value = ""
                readcheck.checked = false
                deletebutton.addEventListener("click", () =>{
                    newCard.remove()
                    myLibrary.splice(myLibrary[i], 1)
                })
                togglebutton.addEventListener("click", ()=>{
                    newcheck.textContent = "The book has now been fully read!"
                    togglebutton.remove()
                })
            }
    }
    if (readcheck.checked === true){
        for (i = (myLibrary.length - 1); i < myLibrary.length; i++){
            let container = document.querySelector(".maincontent")
                    let newCard = document.createElement("div")  
                    newCard.classList.add("card")  
                    let newh1 = document.createElement("h1")
                    let newp = document.createElement("p")
                    let newpages = document.createElement("p")
                    let newcheck = document.createElement("p")
                    let deletebutton = document.createElement("button")
                   
                    newh1.textContent =  myLibrary[i].name
                    newp.textContent = myLibrary[i].creator
                    newpages.textContent = "The book has " + myLibrary[i].length + " pages"
                    newcheck.textContent = "The book has been read"
                    deletebutton.textContent = "Remove"
                     newCard.append(newh1, newp, newpages, newcheck, deletebutton)
                    container.appendChild(newCard)    
                    formauthor.value = ""
                    formtitle.value = ""
                    formpages.value = ""
                    readcheck.checked = false
                    deletebutton.addEventListener("click", () =>{
                        newCard.remove()
                        myLibrary.splice(myLibrary[i], 1)
                    })
                }
        }
    
}


  

addBooktoArray();




/*

function addBook(){
    
    addbutton.addEventListener("click", () =>{
        if (formauthor.value === "" || formtitle.value === "" ){
            alert("Complete the form")
        } 
        if (formauthor.value !== "" && formtitle.value !== "" && formpages.value === ""){
            alert("Pages are counted with numbers, not text!")
        }
       
         if (formauthor.value !== "" && formtitle.value !== "" && formpages.value !== "" && readcheck.checked === false) {
             let newBook = new Books(`${formtitle.value}`, `${formauthor.value}`, `${formpages.value}`)
             myLibrary.push(newBook)            
                let container = document.querySelector(".maincontent")
                let newCard = document.createElement("div")  
                newCard.classList.add("card")  
                let newh1 = document.createElement("h1")
                let newp = document.createElement("p")
                let newpages = document.createElement("p")
                let newcheck = document.createElement("p")
                newh1.textContent =  newBook.name
                newp.textContent = newBook.creator
                newpages.textContent = "The book has " + newBook.length + " pages"
                newcheck.textContent = "The book hasn't been read"
                 newCard.append(newh1, newp, newpages, newcheck)
                container.appendChild(newCard)    
                formauthor.value = ""
                formtitle.value = ""
                formpages.value = ""
                readcheck.checked = false
    
        }
        if (formauthor.value !== "" && formtitle.value !== "" && formpages.value !== "" && readcheck.checked === true) {
            let newBook = new Books(`${formtitle.value}`, `${formauthor.value}`, `${formpages.value}`)
            myLibrary.push(newBook)            
               let container = document.querySelector(".maincontent")
               let newCard = document.createElement("div")  
               newCard.classList.add("card")  
               let newh1 = document.createElement("h1")
               let newp = document.createElement("p")
               let newpages = document.createElement("p")
               let newcheck = document.createElement("p")
               newh1.textContent =  newBook.name
               newp.textContent = newBook.creator
               newpages.textContent = "The book has " + newBook.length + " pages"
               newcheck.textContent = "The book has been read"
                newCard.append(newh1, newp, newpages, newcheck)
               container.appendChild(newCard)    
               formauthor.value = ""
               formtitle.value = ""
               formpages.value = ""
               readcheck.checked = false
   
       }
    })
}

addBook()

*/
