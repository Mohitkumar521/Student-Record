function edit_row(no)
{
 document.getElementById("edit_button"+no).style.display="none";
 document.getElementById("save_button"+no).style.display="block";
	
 const Name = document.getElementById("Name_row"+no);
 const ID = document.getElementById("ID_row"+no);
 const Marks = document.getElementById("Marks_row"+no);
	
 const Name_data=Name.innerHTML;
 const ID_data=ID.innerHTML;
 const Marks_data=Marks.innerHTML;
	
 Name.innerHTML="<input type='text' id='Name_text"+no+"' value='"+Name_data+"'>";
 ID.innerHTML="<input type='text' id=ID_text"+no+"' value='"+ID_data+"'>";
 Marks.innerHTML="<input type='text' id='Marks_text"+no+"' value='"+Marks_data+"'>";
}
function save_row(no)
{
 const Name_val=document.getElementById("Name_text"+no).value;
 const ID_val=document.getElementById("ID_text"+no).value;
 const Marks_val=document.getElementById("Marks_text"+no).value;

 document.getElementById("Name_row"+no).innerHTML=Name_val;
 document.getElementById("ID_row"+no).innerHTML=ID_val;
 document.getElementById("Marks_row"+no).innerHTML=Marks_val;

 document.getElementById("edit_button"+no).style.display="block";
 document.getElementById("save_button"+no).style.display="none";
}

function delete_row(no)
{
 document.getElementById("row"+no+"").outerHTML="";
}

function add_row()
{
 const new_Name=document.getElementById("new_Name").value;
 const new_ID=document.getElementById("new_ID").value;
 const new_Marks=document.getElementById("new_Marks").value;
	
 const table=document.getElementById("data_table");
 const table_len=(table.rows.length)-1;
 const row = table.insertRow(table_len).outerHTML="<tr id='row"+table_len+"'><td id='Name_row"+table_len+"'>"+new_Name+"</td><td id='ID_row"+table_len+"'>"+new_ID+"</td><td id='Marks_row"+table_len+"'>"+new_Marks+"</td><td><input type='button' id='edit_button"+table_len+"' value='Edit' class='btn btn-secondary' onclick='edit_row("+table_len+")'> <input type='button' id='save_button"+table_len+"' value='Save' class='btn btn-success' onclick='save_row("+table_len+")'> <input type='button' value='X' class='btn btn-danger' onclick='delete_row("+table_len+")'></td></tr>";

 document.getElementById("new_Name").value="";
 document.getElementById("new_ID").value="";
 document.getElementById("new_Marks").value="";
}