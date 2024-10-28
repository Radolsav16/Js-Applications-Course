function attachEvents() {
    const buttonLoadsPost = document.getElementById('btnLoadPosts');
    const select = document.getElementById('posts');
    const btnView = document.getElementById('btnViewPost');
    const postTitle = document.getElementById('post-title');
    const postBody = document.getElementById('post-body');
    const postComments = document.getElementById('post-comments');

    const postUrl = 'http://localhost:3030/jsonstore/blog/posts';

    let currData;

    function reset(){
        postComments.innerHTML = '';
        postTitle.textContent = 'Post Details';
    }
    

    buttonLoadsPost.addEventListener('click',loadPosts);
    btnView.addEventListener('click',viewComments);

    async function loadPosts(){
        let res = await fetch(postUrl);
        let data = await res.json();

        currData = data;

        for(let [id , postInfo] of Object.entries(data)){
            const option = document.createElement('option');
            option.value = id;
            option.textContent = postInfo.title;

            select.appendChild(option);
        }
    }

    async function viewComments() {
        const selectedId = select.value;
        const post = currData[selectedId].title;
        const postInfo = currData[selectedId].body;

        reset()
        


        const commentsUrl = `http://localhost:3030/jsonstore/blog/comments`;
        const res = await fetch(commentsUrl);
        const data = await res.json();

        postTitle.textContent = post;
        postBody.textContent = postInfo
      

        for(let [id,commentInfo] of Object.entries(data)){
            if(commentInfo.postId === selectedId){
            const li = document.createElement('li');
            li.textContent = commentInfo.text;
            postComments.appendChild(li);
            }
        }
       

       




        
       
        
    }


}

attachEvents();