
let numberRow = document.getElementById('inputRow');
let numberColumn = document.getElementById('inputColumn');
let addTable = document.getElementById('CreateTable');


addTable.addEventListener('click',function()
{
row = numberRow.value;
column = numberColumn.value;
  
 for(let r = 0; r < row; r++){
   let tableRowColumn = document.getElementById('tableRowColumn').insertRow(r);
   for(let c = 0; c < column; c++){
     let creatTable = tableRowColumn.insertCell(c);
     creatTable.innerHTML="Row-"+(r+1)+" Column-"+(c+1); 
    }
   }
   document.getElementById("tableRowColumn").style.display = "block";

   numberRow.value = '';
   numberColumn.value = '';
},false);






