const author = document.querySelector('.author');
const title = document.querySelector('.title');
const msg = document.querySelector('.msg');
const btnAdd = document.querySelector('.btn-add');
const blog = document.querySelector('.blog');
const count = document.querySelector('.count');
let counter = 0;

btnAdd.addEventListener('click', () =>{

    const authorValue = author.value;
    const titleValue = title.value;
    const msgValue = msg.value;
    
    const post = document.createElement('div');
    post.classList.add("post");
    blog.appendChild(post);

    const authorPost = document.createElement('div');
    authorPost.classList.add("blog-post");
    authorPost.innerText = `Autor: ${authorValue}`;

    const titlePost = document.createElement('div');
    titlePost.classList.add("blog-post");
    titlePost.innerText = `Tytuł: ${titleValue}`;

    const msgPost = document.createElement('div');
    msgPost.classList.add("blog-post");
    msgPost.innerText = `Treść: ${msgValue}`;
    
    const btnClose = document.createElement('button');
    btnClose.classList.add("btn-close");
    btnClose.innerText = `X`;
    
    post.append(authorPost, titlePost, msgPost, btnClose);
    
    counter += 1;
    count.innerText = counter;

    btnClose.addEventListener('click',() => {
        post.remove();
        counter -= 1;
        count.innerText = counter;
    });
   
});

