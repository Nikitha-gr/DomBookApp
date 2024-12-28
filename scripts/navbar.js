export const nav = () =>{
    let card = `<a href="index.html">Home</a>
        <a href="admin.html">Admin</a>
        <a href="books.html">Books</a>`

    document.getElementById("navbar").innerHTML = card;
}

nav();