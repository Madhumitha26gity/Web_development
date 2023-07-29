function generate()
{
  var name=document.getElementById('nameField').value;
  var contact=document.getElementById('contactField').value;
  var mail=document.getElementById('mailField').value;
  var address=document.getElementById('addressField').value;
  var git=document.getElementById('gitField').value;
  var linkedin=document.getElementById('linkedINField').value;
  var web=document.getElementById('webField').value;
  var qual=document.getElementById('qualField').value;
  var award=document.getElementById('awardField').value;
  var year=document.getElementById('yearField').value;
  var obj=document.getElementById('objField').value;
  var work=document.getElementById('workField').value;
  var skill=document.getElementById('skillField').value;
  
  var resumeHTML = `
  <h3><b>${name}</b></h3>
  <hr>
  <p><b>Contact:</b>  ${contact}</p>
  <p><b>Email:</b>    ${mail}</p>
  <p><b>Address:</b>  ${address}</p>
  <br>
  <h4>Educational Information</h4><br>
  <p><b>Qualification:</b>  ${qual}</p>
  <p><b>Passing Year:</b>  ${year}</p>
  <p><b>Accomplishments:</b>  ${award}</p>
  <br>
  <h4>Important Links </h4><br>
  <p><b>Github:</b>   ${git}</p>
  <p><b>LinkedIn:</b> ${linkedin}</p>
  <p><b>Website:</b> ${web}</p>
  <br>
  <h4>Professional Information </h4><br>
  <p><b>Objective:</b><br>  ${obj}</p>
  <p><b>Work Experience:</b>  ${work}</p>
  <p><b>Skills:</b> <br>  ${skill}</p>
`;





document.getElementById('resumePreview').innerHTML = resumeHTML;

} 