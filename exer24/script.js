function openAndCloseModal() {
  var modalVisibility = document.getElementById("modal");
  if (modalVisibility.style.display != "block")
    return (modalVisibility.style.display = "block");

  return (modalVisibility.style.display = "none");
}
