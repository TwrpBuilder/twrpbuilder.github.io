function doSearch() {
  // Declare variables 
  var input, filter, table, tr, td, i, brand, model, codename, developer;
  input = document.getElementById("searchForm");
  filter = input.value.toLowerCase();
  table = document.getElementById("table");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    brand = tr[i].getElementsByTagName("td")[1];
	model = tr[i].getElementsByTagName("td")[2];
	codename = tr[i].getElementsByTagName("td")[3];
	developer = tr[i].getElementsByTagName("td")[4];
    if (brand) {
      if (brand.innerHTML.toLowerCase().indexOf(filter) > -1 | model.innerHTML.toLowerCase().indexOf(filter) > -1 | codename.innerHTML.toLowerCase().indexOf(filter) > -1 | developer.innerHTML.toLowerCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}