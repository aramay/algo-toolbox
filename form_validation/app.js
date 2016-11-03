$( document ).ready(function() {
    console.log( "ready!" );


    // var isChecked = $("#type_person").prop('checked');
    // var x = document.getElementById("#type_person").checked;


    $("#type_person").click(function () {

        var re = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        console.log("clicked");

        var x = validateForm();
        console.log(x);
        // var fName = $("#first_name").val();
        // var lName = $("#last_name").val();
        // var email = $("#email").val();
        //
        // if (fName === "") {
        //     console.log("name in-valid");
        //     return false;
        // }if (lName === ""){
        //     console.log("name valid");
        //     return false;
        // }
        // if (!re.test(email)) {
        //     console.log("email in-valid");
        //     return false;
        // }
        // else{
        //     return true;
        // }


    });

    function validateForm() {

        console.log("validate form");

        var re = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        console.log("clicked");

        // var x = validateForm();
        var fName = $("#first_name").val();
        var lName = $("#last_name").val();
        var email = $("#email").val();

        if (fName === "") {
            console.log("name in-valid");
            return false;
        }if (lName === ""){
            console.log("name valid");
            return false;
        }
        if (!re.test(email)) {
            console.log("email in-valid");
            return false;
        }
        else{
            return true;
        }
    }

console.log("test");
    if (document.getElementById("type_person").checked === true) {
        console.log("form validation");
    }


});
