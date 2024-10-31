function attachEvents() {
  const textArea = document.querySelector("textarea");
  const [nameInput, messageInput, sendButton, refreshButton] =
    document.querySelectorAll("input");

  const url = "http://localhost:3030/jsonstore/messenger";

  sendButton.addEventListener("click", sendMessage);
  refreshButton.addEventListener("click", showMessage);

  async function sendMessage() {
    const author = nameInput.value;
    const content = messageInput.value;

    try {
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ author, content }),
      });
      const data = await res.json();
    

      nameInput.value = "";
      messageInput.value = "";
    } catch (err) {
        console.log(err);
    }
  }

  async function showMessage() {
    const res = await fetch(url);
    const data = Object.values(await res.json());

    textArea.value = " ";

    data.forEach((obj) => {
      textArea.value += `${obj.author}: ${obj.content} \n`;
    });
  }
}

attachEvents();
