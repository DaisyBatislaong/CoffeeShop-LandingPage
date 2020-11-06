const Navbar = document.querySelector(".burger");
let isClicked = false;
Navbar.addEventListener("click", () => {
   const MenuList = document.querySelector(".menu-list");
   const List = document.querySelector(".list");
   isClicked ? (MenuList.classList.remove("clicked"), (isClicked = false)) : (MenuList.classList.add("clicked"), (isClicked = true));
});
