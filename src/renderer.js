const addUserBtn = document.getElementById("addUserBtn");
const userForm = document.getElementById("userForm");
const usersBody = document.getElementById("usersBody");
const submitUserBtn = document.getElementById("submitUserBtn");
const cancelBtn = document.getElementById("cancelBtn");

let users = [];
let userId = 1;

addUserBtn.addEventListener("click", () => {
  userForm.classList.remove("hidden");
});

cancelBtn.addEventListener("click", () => {
  userForm.classList.add("hidden");
});

submitUserBtn.addEventListener("click", () => {
  const nameInput = document.getElementById("name");
  const levelInput = document.getElementById("level");

  const newUser = {
    id: userId++,
    name: nameInput.value,
    level: levelInput.value,
  };

  users.push(newUser);

  updateTable();

  nameInput.value = "";
  levelInput.value = "";

  userForm.classList.add("hidden");
});

const updateTable = () => {
  usersBody.innerHTML = "";

  users.forEach((user) => {
    const row = document.createElement("tr");

    row.innerHTML = `
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.level}</td>
        `;

    usersBody.appendChild(row);
  });
};