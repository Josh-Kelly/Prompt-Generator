function createMainPage() {
  /* BUTTON DIVISION */
  console.log("Hello!");
  const buttonBookOne = document.createElement("button");
  buttonBookOne.id = "buttonBookOne";
  buttonBookOne.innerHTML = "Go to book one";
  buttonBookOne.setAttribute("onclick", "createBookOneMain()");
  document.body.appendChild(buttonBookOne);

  const buttonBookTwo = document.createElement("button");
  buttonBookTwo.id = "buttonBookTwo";
  buttonBookTwo.innerHTML = "Go to book two";
  buttonBookTwo.setAttribute("onclick", "createBookTwoMain()");
  document.body.appendChild(buttonBookTwo);

  const buttonBookThree = document.createElement("button");
  buttonBookThree.id = "buttonBookThree";
  buttonBookThree.innerHTML = "Go to book three";
  buttonBookThree.setAttribute("onclick", "createBookThreeMain()");
  document.body.appendChild(buttonBookThree);
}
