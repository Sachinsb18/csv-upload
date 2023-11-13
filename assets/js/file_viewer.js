// bind event linstner to search button
document.getElementById("go").addEventListener("click", searchTable);

function searchTable() {
  // Get the input value and convert it to lowercase
  const input = document.getElementById("search-input").value.toLowerCase();
  console.log(input);

  if(input===""){
    return;
  }
  
  // Get all table rows and iterate through them
  const rows = document.getElementsByTagName("tr");
  let scrolled = false;
  let item = null;
  let count=0;

  for (let i = 0; i < rows.length; i++) {
    // Get the text content of each row and convert it to lowercase
    const rowText = rows[i].textContent.toLowerCase();
    
    // If the input value is found in the row text, highlight the row
    if (rowText.includes(input)) {
      rows[i].classList.add("highlight");
      if(count===0){
        scrolled = true;
        item = rows[i];
        count++;
      }
      
     
    } else {
      if(i>0){
        rows[i].classList.remove("highlight");
        rows[i].style.display="none";
      }
     
    }
  }

  if(scrolled === true){
    item.classList.add("highlight");
    item.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

}
