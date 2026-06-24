document.getElementById("saveBtn").addEventListener("click", saveData);

function saveData() {
  let name = document.getElementById("name").value;
  let age = document.getElementById("age").value;
  let course = document.getElementById("course").value;
  let email = document.getElementById("email").value;

  let genderElement = document.querySelector('input[name="gender"]:checked');

  if (name === "" || age === "" || email === "" || genderElement === null) {
    alert("Please fill all fields ⚠️");
    return;
  }

  let gender = genderElement.value;

  let row = document.createElement("tr");

  row.innerHTML = `
        <td>${name}</td>
        <td>${age}</td>
        <td>${course}</td>
        <td>${gender}</td>
        <td>${email}</td>
        <td>
            <button class="delete-btn" onclick="deleteRow(this)">
                Delete
            </button>
        </td>
    `;

  document.getElementById("tableBody").appendChild(row);

  document.getElementById("name").value = "";
  document.getElementById("age").value = "";
  document.getElementById("email").value = "";
  document.getElementById("course").selectedIndex = 0;

  genderElement.checked = false;
}

function deleteRow(button) {
  button.parentElement.parentElement.remove();
}
