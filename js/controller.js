import getData from "./model.js";
import registerUser from "./model.js";

function showImage(index) {
    var ids = ["grid-1", "grid-2", "grid-3", "grid-4", "grid-5"]
    var i = 0;
    getData().then(element => {
        ids.forEach(ids => {
            var gridIds = document.getElementById(ids);
            var jsonIndex = element[index[i]];
            gridIds.getElementsByTagName("img")[0].src = jsonIndex.img;
            gridIds.getElementsByTagName("h3")[0].innerHTML = jsonIndex.details;
            gridIds.getElementsByTagName("p")[0].innerHTML = jsonIndex.type;
            gridIds.getElementsByTagName("h4")[0].innerHTML = jsonIndex.price;
            i++;
        });
    });
}
document.getElementById("our-product-icecream").addEventListener("click", () => { showImage([0, 2, 3, 4, 5]) });
document.getElementById("our-product-fruitcream").addEventListener("click", () => {
    showImage([1, 3, 5, 7, 9]);
});
document.getElementById("our-product-fruitjam").addEventListener("click", () => {
    showImage([2, 4, 6, 8, 10]);
});
document.getElementById("our-product-juice").addEventListener("click", () => {
    showImage([0, 1, 5, 6, 11]);
});
document.getElementById("our-product-powder").addEventListener("click", () => {
    showImage([2, 3, 7, 8, 9]);
});


// CheckUser = (user) => {
//     var userFound = false;
//     registerUser().then(element => {
//         element.forEach(element1 => {
//             if (element1.username === user) {
//                 userFound = true;
//                 break;
//             }
//         })
//         if (userFound == true) console.log("User already exists");
//         else console.log("New username");
//     })
// }