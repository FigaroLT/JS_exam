/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizdavima <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = "https://api.github.com/users";

const getUsers = async () => {
  try {
    const response = await fetch(ENDPOINT);
    const users = await response.json();

    return users;
  } catch (error) {
    console.error(error);
  }
};

const createUserElement = (user) => {
  const userContainer = document.createElement("div");

  const userImg = document.createElement("img");
  userImg.src = user.avatar_url;

  const userLogin = document.createElement("p");
  userLogin.setAttribute("class", "userLoginName");
  userLogin.innerText = user.login;

  userContainer.append(userImg, userLogin);

  document.querySelector("#output").append(userContainer);
};

const renderUserCard = async () => {
  document.querySelector("#output").replaceChildren();
  const users = await getUsers();

  users.forEach((user) => createUserElement(user));
};

document.querySelector("#btn").addEventListener("click", renderUserCard);
