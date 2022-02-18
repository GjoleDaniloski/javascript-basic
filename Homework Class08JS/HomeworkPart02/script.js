console.log("---------Homework Part 02-----------");

let bookTitle = document.getElementById('BookTitle');
let bookAuthor = document.getElementById('BookAuthor');
let readingStatus = document.getElementById('ReadingStatus');
let btnSave = document.getElementById('Save');

let listTAS = document.getElementById('ListTAS'); 


let book = {
		title: function(title){
			return `${title}`;
		},
		author: function(author){
			return `${author}`;
		},
        checkReadingStatus: function(title, author){
        if (readingStatus.checked){
			return `Already read: ${title} by ${author}`;
        }
        else {
            return `You still need to read: ${title} by ${author} `;
            }  
        }
    };
    
    
    btnSave.addEventListener('click', function(){
    let inputtitle = book.title(bookTitle.value);
    let inputauthor = book.author(bookAuthor.value);
    let inputreadingStatus = book.checkReadingStatus(bookTitle.value, bookAuthor.value);

	let row = listTAS.insertRow(0);
	let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
	cell1.innerHTML = inputtitle;
	cell2.innerHTML = inputauthor;
	cell3.innerHTML = inputreadingStatus;

    bookTitle.value = '';
    bookAuthor.value = '';
    readingStatus.value = '';
    

}, false);




// Write a JavaScript program to display the reading status of some book. The object should have the next properties: title, author, readingStatus and a method that will return info depending on the readingStatus e.g.

// Already read 'The Robots of dawn' by Isaac Asimov. (if true)
// You still need to read 'Mockingjay: The Final Book of The Hunger Games' by Suzanne Collins. (if false).
// BONUS: ENTER THE VALUES FROM PROMPT() OR READ THEM FROM HTML