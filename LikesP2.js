

function addLike(id) {
    var element = document.querySelector(id);
    var count = parseInt(element.innerHTML);
    element.innerHTML = count + 1;
    console.log(count)
}