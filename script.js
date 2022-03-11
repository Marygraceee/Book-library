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

formauthor.value = ""
formtitle.value = ""
formpages.value = ""


let myLibrary = []

function addBook(){
    addbutton.addEventListener("click", () =>{
        if (formauthor.value === "" || formtitle.value === "" ){
            alert("Complete the form")
        } 
        if (formauthor.value !== "" && formtitle.value !== "" && formpages.value === ""){
            alert("Pages are counted with numbers, not text!")
        }
       
         if (formauthor.value !== "" && formtitle.value !== "" && formpages.value !== "") {
             let newBook = new Books(`${formtitle.value}`, `${formauthor.value}`, `${formpages.value}`)
             myLibrary.push(newBook)
          
             myLibrary.forEach(book => {
                let container = document.querySelector(".maincontent")
                let newCard = document.createElement("div")  
                newCard.classList.add("card")  
                let newh1 = document.createElement("h1")
                let newp = document.createElement("p")
                let newpages = document.createElement("p")
                newh1.textContent = book.name
                newp.textContent = book.creator
                newpages.textContent = book.length
                 newCard.append(newh1, newp, newpages)
                container.appendChild(newCard)
                
             })
             formauthor.value = ""
             formtitle.value = ""
             formpages.value = ""
            
    
        }
    })
}

addBook()


