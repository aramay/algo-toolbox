$( document ).ready(function() {

    console.log( "ready!" );

    $("#type_person").click(function () {

        var re = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

        console.log("clicked");

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


    });

    $("#type_company").click(function () {

        console.log("company clicked");

        var companyName = $("#company_name").val();
        var phone = $("#phone").val().replace(/[^A-Z0-9]/ig, "");

        if (companyName === "" || companyName === " ") {
            return false;
        }
        if (phone.length < 6) {
            return false;
        }else{
            return true;
        }
    });

    // function validateForm() {
    //
    //     console.log("validate form");
    //
    //     var re = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    //     console.log("clicked");
    //
    //     // var x = validateForm();
    //     var fName = $("#first_name").val();
    //     var lName = $("#last_name").val();
    //     var email = $("#email").val();
    //
    //     if (fName === "") {
    //         console.log("name in-valid");
    //         return false;
    //     }if (lName === ""){
    //         console.log("name valid");
    //         return false;
    //     }
    //     if (!re.test(email)) {
    //         console.log("email in-valid");
    //         return false;
    //     }
    //     else{
    //         return true;
    //     }
    // }


});
