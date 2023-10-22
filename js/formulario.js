/* Cursor diferenciado */
const position = {
    x: 0,
    y: 0,
  };
  const cursor = document.querySelector(".circulo");
  const div_jogos = document.querySelector(".jogos");
  addEventListener("mousemove", (evt) => {
    position.x = evt.clientX;
    position.y = evt.clientY;
    cursor.style.left = position.x + "px";
    cursor.style.top = position.y + "px";
  });
  addEventListener("mousedown", (evt) => {
    cursor.style.background = "lightblue";
  });
  addEventListener("mouseup", () => {
    cursor.style.background = "";
  });