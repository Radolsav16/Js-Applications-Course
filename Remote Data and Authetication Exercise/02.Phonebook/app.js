function attachEvents() {
  const loadButton = document.querySelector("#btnLoad");
  const ul = document.querySelector("#phonebook");

  const baseUrl = "http://localhost:3030/jsonstore/phonebook";

  const [personInput, phoneInput] = document.querySelectorAll("input");
  const buttonCreate = document.querySelector("#btnCreate");

  loadButton.addEventListener("click", load);
  buttonCreate.addEventListener("click", create);

  async function load(e) {
    const res = await fetch(baseUrl);
    const data = await res.json();

    Object.values(data).forEach((obj) => {
      createLi(obj);
    });
  }

  function clearInput() {
    personInput.value = "";
    phoneInput.value = "";
  }

  async function create(e) {
    const person = personInput.value;
    const phone = phoneInput.value;

    const res = await fetch(baseUrl, {
      method: "Post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ person, phone }),
    });

    const data = await res.json();

    clearInput();

    createLi(data);
  }

  function deletePerson(e) {
    const currBut = e.target;
    const li = currBut.closest("li");
    const key = li.getAttribute("data");

    const [person, phone] = li.textContent.split(": ");

    const deleteUrl = `http://localhost:3030/jsonstore/phonebook/${key}`;

    fetch(deleteUrl, {
      method: "Delete",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ person, phone }),
    })
      .then((res) => res.json())
      .then((data) => ul.removeChild(li))
      .catch((err) => console.log(err));
  }

  function createLi(obj) {
    const li = document.createElement("li");

    li.textContent = `${obj.person}: ${obj.phone}`;
    li.setAttribute("data", obj._id);

    const buttonDelete = document.createElement("button");
    buttonDelete.textContent = "Delete";

    buttonDelete.addEventListener("click", deletePerson);

    li.appendChild(buttonDelete);
    ul.appendChild(li);
  }
}

attachEvents();
