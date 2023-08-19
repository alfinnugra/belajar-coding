const list = document.getElementById('myUL')

// untuk membahkan class checked
list.addEventListener("click", (e) => {
    if(e.target.tagName == 'LI') {
        e.target.classList.toggle("checked")
    }
})

const close = document.querySelector(".close")
close.onclick = function() {
    let div = this.parentElement;
    div.style.display = "none"
}

function addTodo() {
    const myinput = document.getElementById("myInput")
    const value = myinput.value;

    if(value == '') {
        alert("Please enter a task");
    }

    const todo = document.createElement('LI')
    todo.textContent = value;

    const close = document.createElement("SPAN") 
    close.className = "close"
    close.innerHTML = "X"

    todo.appendChild(close)
    list.appendChild(todo)
    myinput.value = ""

    close.onclick = function() {
        let div = this.parentElement;
        div.style.display = "none"
    }

    search();
}
const input = document.getElementById("myInput")
input.addEventListener("keypress", (e) => {
    if(e.key === "Enter") {
        addTodo()
    }
})

function search() {
    const search = document.querySelector("#search")
    const lists = document.querySelectorAll("ul li")

    search.addEventListener('keyup', (e) => {
        lists.forEach((list) => {
            listValue = list.textContent.slice(0, -1).toLowerCase()
            if(listValue.includes(e.target.value.toLowerCase())) {
                list.style.display="block";
            } else {
                list.style.display ="none"
            }
        })
    })
}

search();