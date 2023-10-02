/* <ul>
<li>Bangladesh <i class="ri-close-line"></i></li>
</ul> */
const item = document.querySelector("#item");
const box = document.querySelector(".to-do-box");
item.addEventListener("keyup", function (e) {
  if (e.key === "Enter") {
    addTodo(this.value);
    this.value = "";
  }
});



function addTodo(val) {
  let ul = document.createElement("ul");
  ul.innerHTML = `
    <li> <p>${val}</p>
    <div> <i class="save ri-save-line"></i>
    <i class="close ri-close-line"></i></div>
    </li>
    `;
  box.appendChild(ul);

  ul.addEventListener("click", () => {
    ul.classList.toggle("demo");
  });
  ul.querySelector(".close").addEventListener("click", (e) => {
    ul.remove();
  });
}
