document.getElementById("searchInput").addEventListener("keyup", function () {
  var input = document.getElementById("searchInput");
  var filter = input.value.toLowerCase();
  var table = document.getElementById("dataTable");
  var tr = table.getElementsByTagName("tr");

  for (var i = 1; i < tr.length; i++) {
    tr[i].style.display =
      tr[i].textContent.toLowerCase().indexOf(filter) > -1 ? "" : "none";
  }
});
