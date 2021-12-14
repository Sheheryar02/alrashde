$(document).ready(function() {
    $("body").on("submit", "#contactForm", function(e) {
        e.preventDefault();

        var email_expr = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
        var phone11_expr = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{5}$/im;

        var etext = '';

        var uname = $("#uname").val();
        var uemail = $("#uemail").val();
        var unumber = $("#unumber").val();
        var uservices = $("#uservices").val();
        var umessage = $("#umessage").val();

        if (uname == '') {
            etext += "Name is required <br />";
        }

        if (uemail == '') {
            etext += "Email is required <br />";
        } else if (!email_expr.test(uemail)) {
            etext += "Valid Email is required <br />";
        }

        if (unumber == '') {
            etext += "Phone No. is required <br />";
        } else if (!phone11_expr.test(unumber)) {
            etext += "Valid Phone No. is required <br />";
        }

        if (uservices == '') {
            etext += "Services is required <br />";
        }

        if (umessage == '') {
            etext += "Message is required <br />";
        }

        if (etext != '') {
            formError();
            submitMSG(false, etext);
        } else {
            $.ajax({
                type: "POST",
                url: "php/form-process.php",
                data: "uname=" + uname + "&uemail=" + uemail + "&unumber=" + unumber + "&uservices=" + uservices + "&umessage=" + umessage,
                success: function(resp) {
                    if (resp == "success") {
                        formSuccess();
                    } else {
                        formError();
                        submitMSG(false, resp);
                    }
                }
            });
        }
    });
});

function formSuccess() {
    $("#contactForm")[0].reset();
    submitMSG(true, "Message Submitted!")
}

function formError() {
    $("#contactForm").removeClass().addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
        $(this).removeClass();
    });
}

function submitMSG(valid, msg) {
    if (valid) {
        var msgClasses = "h3 text-center tada animated text-success";
    } else {
        var msgClasses = "h3 text-center text-danger";
    }
    $("#msgSubmit").removeClass().addClass(msgClasses).html(msg);
}