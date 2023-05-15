const btn = document.getElementById('toggle-btn');
const body = document.body;

btn.addEventListener('click', () => {
  if (body.style.backgroundColor === 'white') {
    body.style.backgroundColor = 'yellow';
  } else {
    body.style.backgroundColor = 'white';
  }
});

const myDiv = document.getElementById("my-div");
    const myButton = document.getElementById("my-button");

    myButton.addEventListener("click", () => {
      myDiv.style.width = "300px";
      myDiv.style.height = "300px";
      myDiv.style.backgroundColor = "pink";
    });

    function addWord() {
        var word = "meow ";
        var paragraph = document.getElementById("my-paragraph");
        paragraph.append(word);
      }