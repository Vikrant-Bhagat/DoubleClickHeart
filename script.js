let x = 0;

document.getElementById("likeImage").addEventListener("dblclick", function() {
    x++;
    document.getElementById("likeCountValue").innerText = x;
});