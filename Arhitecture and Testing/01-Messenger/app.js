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

   
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ author, content }),
      });
      const data = await res.json();
      console.log(data);
      
    

      nameInput.value = "";
      messageInput.value = "";
    
  }

  async function showMessage() {
    const res = await fetch(url);
    const data = Object.values(await res.json());

    

    data.forEach((obj) => {
      textArea.value += `${obj.author}: ${obj.content}\n`;
    });
   
    
  }
}

attachEvents();


