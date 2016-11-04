$( document ).ready(function() {

    console.log( "ready!" );



    $("#type_person").click(function () {

        var re = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

        console.log("clicked");

        var fName = $("#first_name").val();
        var lName = $("#last_name").val();
        var email = $("#email").val();

        if ((fName === "") || (lName === "")) {
            console.log("name in-valid");
            // return false;
            result = false;
            return result;
        // }if (lName === ""){
        //     console.log("name in-valid");
        //     // return false;
        //     result = false;
        }
        if (!re.test(email)) {
            console.log("email in-valid");
            // return false;
            result = false;
        }
        else{
            // return true;
            console.log("person test passed");
            result = true;
        }

        return result;


    });

    $("#type_company").click(function () {

        console.log("company clicked");

        var result = false;

        var companyName = $("#company_name").val();
        var phone = $("#phone").val().replace(/[^A-Z0-9]/ig, "");

        if (companyName === "" || companyName === " ") {
            console.log("in-valid company_name");
            // return false;
            result = false;
        }
        if (phone.length < 6) {
            console.log("in-valid phone");
            // return false;
            result = false;
        }else{
            console.log("company test passed");
            // return true;
            result = true;
        }

        return result;
    });

    // $("body").click(function () {
    //     console.log("inside click event");
    //
    //     if (document.getElementById("type_person").checked === true) {
    //
    //         console.log("check person data");
    //
    //         var fName = $("#first_name").val();
    //             var lName = $("#last_name").val();
    //             var email = $("#email").val();
    //
    //             if ((fName === "") || (lName === "")) {
    //                 console.log("name in-valid");
    //                 // return false;
    //                 result = false;
    //                 return result;
    //             // }if (lName === ""){
    //             //     console.log("name in-valid");
    //             //     // return false;
    //             //     result = false;
    //             }
    //             if (!re.test(email)) {
    //                 console.log("email in-valid");
    //                 // return false;
    //                 result = false;
    //             }
    //             else{
    //                 // return true;
    //                 console.log("person test passed");
    //                 result = true;
    //             }
    //
    //             return result;
    //     }
    //
    // });

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
