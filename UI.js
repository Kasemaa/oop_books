class UI {
    constructor() {
        this.title = document.querySelector('#title')
        this.author = document.querySelector('#author')
        this.isbn = document.querySelector('#isbn')
        this.booklist = document.querySelector('#book-list')
    }
    addBook(book){
        const tr = document.createElement('tr')
        const trContent = `<td>${book.title}</td>
                <td>${book.author}</td>
                <td>${book.isbn}</td>
                <td><a href="#">X</a></td>`
        tr.innerHTML = trContent
        this.bookList.appendChild(tr)
    }
}