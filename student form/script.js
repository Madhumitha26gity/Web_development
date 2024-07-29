var s_table = document.getElementById("student_list");


  function save_item() {
    var s_name = document.getElementById("s_name");
    var s_age = document.getElementById("s_age");
    var s_course = document.getElementById("s_course");
    var s_email = document.getElementById("s_email");
    var s_gender = document.querySelector('input[name="s_gen"]:checked');
 
    var row = s_table.insertRow(-1);
  
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
  
    cell1.innerHTML = s_name.value;
    cell2.innerHTML = s_age.value;
    cell3.innerHTML = s_gender.value;
    cell4.innerHTML = s_course.value;
    cell5.innerHTML = s_email.value;
    cell6.innerHTML = "<button id='del_btn' onclick='delete_item(event)'>Delete</button>";
  }

  function delete_item(event) 
  {
    event.target.parentNode.parentNode.remove();
  }