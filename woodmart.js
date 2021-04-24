window.onscroll = function() {
    scrollFunction();
    scrollupFunction();
    scrollsearchFunction();
}

scrollFunction = () => {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("nav").style.backgroundColor = "black";
    }
}

scrollupFunction = () => {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById("myBtn").classList.add("display-block");
    } else {
        document.getElementById("myBtn").classList.add("display-none");
    }
}
scrollsearchFunction = () => {
    if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
        document.getElementById("search-div").style.backgroundColor = "whitesmoke";
        document.getElementById("searchicon").style.Color = "black";

    } else {
        document.getElementById("search-div").style.backgroundColor = "transparent";
        document.getElementById("searchicon").style.Color = "white";
    }
}
topFunction = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

displayloginpage = () => {
    document.getElementById("login-box").classList.add("display-block");
}

undisplayloginpage = () => {
    document.getElementById("login-box").classList.remove("display-block");
    document.getElementById("login-box").classList.add("display-none");
};

displayregister = () => {
    document.getElementById("login").classList.add("display-none");
    document.getElementById("register").classList.add("display-block");
}
undisplayregister = () => {
    document.getElementById("login").classList.add("display-block");
    document.getElementById("register").classList.add("display-none");
}

const Alphabets = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz";
// const in captical
generatecaptcha = () => {
    // console.log(status)
    let first = Alphabets[Math.floor(Math.random() * Alphabets.length)];
    let second = Math.floor(Math.random() * 100);
    let third = Alphabets[Math.floor(Math.random() * Alphabets.length)];
    let fourth = Alphabets[Math.floor(Math.random() * Alphabets.length)];
    let fifth = Math.floor(Math.random() * 10);
    let rr = first.toString() + second.toString() + third.toString() + fourth.toString() + fifth.toString();
    document.getElementById("captcha").value = rr;

}

validatecaptcha = () => {
    var v1 = document.getElementById("captcha").value;
    var v2 = document.getElementById("captchainput").value;
    if (v1 === v2) {
        document.getElementById("register_submit").disabled = false;
        document.getElementById("captchastatus").innerHTML = "Correct!";
        document.getElementById("captchastatus").style.color = "Green";
    } else {
        document.getElementById("captchastatus").innerHTML = "Wrong Captcha!"
        document.getElementById("captchastatus").style.color = "Red";
    }
}

submit = () => {
    var v1 = document.getElementById("psd").value;
    var v2 = document.getElementById("cpsd").value;
    if (v1.localeCompare(v2)) {
        alert("Form Submitted Successfully");

    }
}

getInputValue = () => {
    // Selecting the input element and get its value 
    var v1 = document.getElementById("psd").value;
    var v2 = document.getElementById("cpsd").value;

    if (v1 == v2) {
        alert("Form Submitted Successfully");
    } else {
        alert("Password don't match");
    }

}

buttonenable = () => {
    document.getElementById("register-submit").disabled = false;
}

menu_dropdown = (id, property) => {
    document.getElementById(id).style.display = property;
}

// $(document).ready(function() {
//     $('.number').each(function() {
//         var $this = $(this),
//             countTo = $this.attr('data-count');
//         $({ countNum: $this.text() }).animate({
//             countNum: countTo
//         }, {
//             duration: 2500,
//             easing: 'linear',
//             step: function() {
//                 $this.text(Math.floor(this.countNum));
//             },
//             complete: function() {
//                 $this.text(this.countNum);
//             }
//         });
//     });
// });

var counted = 0;
$(window).scroll(function() {
    var oTop = $('.inc-num').offset().top - window.innerHeight;
    if (counted == 0 && $(window).scrollTop() > oTop) {
        $('.number').each(function() {
            var $this = $(this),
                countTo = $this.attr('data-count');
            $({
                countNum: $this.text()
            }).animate({
                countNum: countTo
            }, {
                duration: 2000,
                easing: 'swing',
                step: function() {
                    $this.text(Math.floor(this.countNum));
                },
                complete: function() {
                    $this.text(this.countNum);
                }
            });
        });
        counted = 1;
    }
});