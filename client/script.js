const url = "https://jsonplaceholder.typicode.com/posts?_limit=10&_page=1"
const posts = document.getElementById("Posts");



async function stream() {
       const response = await fetch(url);
       const data = await response.json();
       return data;

}

function createpost(data){
       const postc = data.body;
       const post = document.createElement("div");
       post.classList.add("post");
       posts.appendChild(post)   
        post.innerHTML = `<h2>heading</h2><p class = 'postc'> ${postc} </p>` 

}

async function renderpost(){
  const data = await stream();
  data.forEach(b => createpost(b));
  
}

window.addEventListener("scroll", () => {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
  if (scrollTop + clientHeight >= scrollHeight - 5) {
    renderpost();
  }
});

renderpost();