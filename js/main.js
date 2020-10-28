    document
        .querySelector(".right ul li")
        .addEventListener("click", function () {
            this.classList.toggle("active");
        });
    $(function () {
        $('input[name="date-range"]').daterangepicker(
            {
                opens: "left",
                locale: {
                    format: "DD/MM/YYYY",
                },
            },
            function (start, end, label) {
                console.log(
                    "A new date selection was made: " +
                        start.format("YYYY-MM-DD") +
                        " to " +
                        end.format("YYYY-MM-DD")
                );
            }
        );
    });
    $(document).ready(function () {
        $("#reload").click(function () {
            window.location.reload();
        });
        $("#newpj").click(function(){
           $("#open-newpj").css("display","block");
        });
        $("#close-newpj").click(function(){
            $("#open-newpj").css("display","none");
        });
        $(".first").click(function(){
            $("#open-newpj").css("display","block");
        });
    });