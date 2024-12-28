//import { loacalurl } from "./urlpath";
import { baseurl } from "./baseurl";

let form = document.getElementById("adminform");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    let title = form.title.value;
    let author = form.author.value;
    let category = form.category.value;
    console.log(title, author, category);

    let isAvailable = false;
    let isVerified = false;
    let borrowedDays = null;
    let bookimage = document.createElement("img");
    bookimage.src = "https://m.media-amazon.com/images/I/71ZB18P3inL._SY522_.jpg";
    let bookObj = { title, author, category, isAvailable, isVerified, borrowedDays, bookimage };

    fetch(`${baseurl}/books`, {
        method: "POST",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(bookObj)
    }).then(() => {
        alert("Book Added Successfully")
    }).catch(() => {
        alert("Something Went Wrong")
    })
})

window.onload = () =>{
    displaydata(bookObj)
}

function displaydata(arr) {

    let cont = document.getElementById("adminCont");
    cont.innerHTML = "";
    arr.map((ele, i) => {
        let card = document.createElement("div");
        card.setAttribute("class","bookcard");
        
        let title = document.createElement("h3")
        title.textContent = `Title : ${ele.title}`;

        let author = document.createElement("h4");
        author.textContent = `Author: ${ele.author}`;

        let category = document.createElement("h4");
        category.textContent = `Category : ${ele.category}`;

        let isAvailable = document.createElement("h4");
        isAvailable.textContent = `Availability Satus ${ele.isAvailable}`;

        let borrowedDays = document.createElement("h4");
        if (ele.borrowedDays > 0) {
            borrowedDays.textContent = `Borrowed Days : ${ele.borrowedDays}`;
        }

        let verified = document.createElement("button");
        verified.textContent = "Verify Book";
        verified.addEventListener("click", () => {
            if (window.confirm("Are you sure to Verify..?")) {
                fetch(`${baseurl}/books`, {
                    method: "PATCH",
                    header: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(ele.isVerified = true)
                }).then(() => {
                    button.disabled = true;
                }).catch((err) => {
                    console.log("Something Went Wrong");
                    alert("Book Cannot Be Verified")
                })
            }
        })

        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete Book";
        deleteBtn.addEventListener("click", () => {
            if (window.confirm("Are you sure to Delete..?")) {
                fetch(`${baseurl}/books`, {
                    method: "DELETE",
                }).then(() => {
                    alert("Book Deleted")
                }).catch((err) => {
                    console.log("Something Went Wrong");
                    alert("Unable to delet the book")
                })
            }
        })

        card.append(title,author,category,isAvailable,borrowedDays,verified,deleteBtn);
        cont.append(card);
    })
}