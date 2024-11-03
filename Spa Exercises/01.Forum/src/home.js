const form = document.querySelector("form");
const buttonCancel = document.querySelector(".cancel");

const main = document.querySelector("main");
const container = document.querySelector('.container');

let postId;


buttonCancel.addEventListener("click", clear);
form.addEventListener("submit", createPost);

loadPost();

async function loadPost() {
  const url = "http://localhost:3030/jsonstore/collections/myboard/posts";
  const res = await fetch(url);
  const data = await res.json();

  const dataArr = Object.values(data);

  dataArr.forEach((obj) => {
    createPostVisible(obj);
    CreateCommentsView(obj);
    createCommentViewing(obj);
  });
}

async function createPost(e) {
  e.preventDefault();
  const form = e.target;
  const url = "http://localhost:3030/jsonstore/collections/myboard/posts";
  const dataForm = Object.fromEntries(new FormData(form).entries());

  for (let keys in dataForm) {
    if (dataForm[keys] === "") {
      return;
    }
  }

  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: dataForm.topicName,
      username: dataForm.username,
      content: dataForm.postText,
      date: new Date().toISOString(),
    }),
  });
  const data = await res.json();
  loadPost();
  clear();
}

function clear() {
  form.reset();
}

function createPostVisible(obj) {
    const topicContainer = document.createElement('div');
    topicContainer.className = 'topic-container';
    
    const topicNameWrapper = document.createElement('div');
    topicNameWrapper.className = 'topic-name-wrapper';

    const topicName = document.createElement('div');
    topicName.className = 'topic-name';

    const a = document.createElement('a');
    a.href = '#';
    a.className ='normal';

    const h2 = document.createElement('h2');
    h2.textContent = obj.title;

    const divColumns = document.createElement('div');
    divColumns.className = 'columns';


    const div = document.createElement('div');
    
    const p = document.createElement('p');
    const dateText = document.createTextNode('Date: ');
    const time = document.createElement('time');
    time.textContent = obj.date;
    p.appendChild(dateText);
    p.appendChild(time);

    const nickName = document.createElement('div');
    nickName.className = 'nick-name';

    const pUser = document.createElement('p');
   
    const pUserText = document.createTextNode('Username: ');
    const span = document.createElement('span');
    span.textContent = obj.username;

    pUser.appendChild(pUserText);
    pUser.appendChild(span);


    nickName.appendChild(pUser);
    div.appendChild(p);
    div.appendChild(nickName);

    divColumns.appendChild(div);

    a.appendChild(h2);

    topicName.appendChild(a);
    topicName.appendChild(divColumns);

    topicNameWrapper.appendChild(topicName);
    topicContainer.appendChild(topicNameWrapper);

    topicContainer.id = obj._id;
    
    topicContainer.addEventListener('click',loadsComments);

    postId = obj._id;

    
    main.appendChild(topicContainer)

}


function loadsComments(e){
    e.preventDefault();
    const el = e.target;
    if(el.tagName !== 'H2'){
        return;
    }
    const  topicContainer = el.closest('.topic-container');
    main.removeChild(topicContainer);

    const hiddenDivPreview = container.querySelector('.comment'); 
    hiddenDivPreview.style.display = 'block';

    const hiidenAnswer = container.querySelector('.answer-comment');
    hiidenAnswer.style.display = 'block';

    displayCurrentComments();

    
}


function CreateCommentsView(obj){
  
const divComment = document.createElement("div");
  divComment.className = "comment";
  divComment.id = obj.title;

  const divHeader = document.createElement("div");
  divHeader.className = "header";

  const img = document.createElement("img");
  img.src = "./static/profile.png";
  img.alt = "avatar";

  const p = document.createElement("p");

  const span = document.createElement("span");
  span.textContent = obj.username;

  const text = document.createTextNode(" posted on ");

  const time = document.createElement("time");
  time.textContent = obj.date;

  p.appendChild(span);
  p.appendChild(text);
  p.appendChild(time);

  const pPost = document.createElement("p");
  pPost.textContent = obj.content;
  pPost.className = "post-content";

  divHeader.appendChild(img);
  divHeader.appendChild(p);
  divHeader.appendChild(pPost);

  divComment.appendChild(divHeader);
  divComment.style.display = 'none';

  main.appendChild(divComment);

 
}


async function displayCurrentComments(){
    const url = 'http://localhost:3030/jsonstore/collections/myboard/comments';
    const res = await fetch(url);
    const data = await res.json();

    const dataArr = Object.values(data);



    const divComment = document.querySelector('.comment');
    const divsUser = divComment.querySelectorAll('.user-comment');
    divsUser.forEach((div)=>{
        divComment.removeChild(div);
    })


    dataArr.forEach((obj)=>{ 
        userCommentView(obj);
    })
    
}



function createCommentViewing(obj){
    
    const answerComment = document.createElement('div');
    answerComment.className = 'answer-comment'
    const p = document.createElement('p');
    const span = document.createElement('span');
    span.textContent = obj.username;
    const text = document.createTextNode(' commment:');

    p.appendChild(span);
    p.appendChild(text);

    const divAnswer = document.createElement('div');
    divAnswer.className = 'answer';

    const form = document.createElement('form');
    const textArea = document.createElement('textarea');
    textArea.name = 'postText';
    textArea.id = 'comment';
    textArea.cols = '30';
    textArea.rows = '10';

    const div = document.createElement('div');
    const label = document.createElement('label');
    label.for = 'username';
    label.textContent = 'Username ';
    const spanS = document.createElement('span');
    spanS.textContent = '* ';
    spanS.className = 'red';

    const input = document.createElement('input');
    input.type = 'text';
    input.name = 'username';
    input.id = 'username';


    const buttonPost = document.createElement('button');
    buttonPost.textContent = 'Post';

    const buttonHide = document.createElement('button');
    buttonHide.textContent = 'Hide';
    buttonHide.addEventListener('click',hideDiv);

    
    
    label.appendChild(spanS)

    div.appendChild(label);
    div.appendChild(input)

    form.id = obj._id;
    

    form.addEventListener('submit',createComment);

    form.appendChild(textArea);
    form.appendChild(div);

    form.appendChild(buttonPost);
    form.appendChild(buttonHide)

    divAnswer.appendChild(form);

    answerComment.appendChild(p)
    answerComment.appendChild(divAnswer);

    answerComment.style.display = 'none';

    main.appendChild(answerComment)



    

}

async function createComment(e) {
    e.preventDefault();
    const url = 'http://localhost:3030/jsonstore/collections/myboard/comments';
   
    const form = e.target;
    const dataForm = Object.fromEntries(new FormData(form).entries());

      
    
    for(let keys in dataForm){
        if(dataForm[keys] === ''){
            return;
        }
    }

    const date = new Date().toISOString();

    

    const res = await fetch(url,{
        method:"POST",
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({text:dataForm.postText,username:dataForm.username,date,postId})
    });
    const data = await res.json();

    form.reset();

    displayCurrentComments()
   
    
    

}


function userCommentView(obj){

    const commentDiv = document.querySelector('.comment');


    

    const divUserComment = document.createElement("div");
    divUserComment.className = "user-comment";

    const divWrapper = document.createElement('div');
    divWrapper.className = 'topic-name-wrapper';
    
    const divTopicName = document.createElement('div');
    divTopicName.className = 'topic-name';

    const p = document.createElement('div');
    const strong = document.createElement('strong');
    strong.textContent = obj.username;

    const text = document.createTextNode(' posted on ');

    const time = document.createElement('time');
    time.textContent = obj.date;

    p.appendChild(strong);
    p.appendChild(text);
    p.appendChild(time);

    const postContent = document.createElement('div');
    postContent.className = 'post-content';

    const pCont = document.createElement('p');
    pCont.textContent = obj.text;

    postContent.appendChild(pCont);

    divTopicName.appendChild(p);
    divTopicName.appendChild(postContent);

    divWrapper.appendChild(divTopicName);
    divUserComment.appendChild(divWrapper);


    commentDiv.appendChild(divUserComment);
  
}




function hideDiv(e){
    const commentDiv = document.querySelector('div.comment[style*="display: block"]');
    const answerDiv = document.querySelector('div.answer-comment[style*="display: block"]');

    commentDiv.style.display = 'none';
    answerDiv.style.display = 'none';
   
}