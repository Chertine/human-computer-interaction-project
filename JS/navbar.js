let state = false

$(document).ready(function()
{
        if($(window).width() < 800)
        {
            state = true
        }

        else
        {
            state = false
        }

        if(state == false)
        {
            $(".dropdown").addClass("pc")
            $(".dropdown").removeClass("mbl")
            // console.log("test")
        }

        else
        {
            $(".dropdown").addClass("mbl")
            $(".dropdown").removeClass("pc")               
        }

    $(window).resize(function()
    {
            if($(window).width() <= 800)
            {
                state = true
            }
    
            else
            {
                state = false
            }

            if(state == false)
            {
                $(".dropdown.mbl").css("display", "none")
                $(".dropdown").removeClass("mbl")
                $(".dropdown").addClass("pc")
                // console.log("test")
            }

            else
            {
                $(".dropdown.pc").css("display", "none")
                $(".dropdown").removeClass("pc")   
                $(".dropdown").addClass("mbl")
            }
    });

    $(".nav-menu").mouseover(function()
    {
        $(".dropdown.pc").css("display", "flex")
        $(".dropdown.pc").css("flex-direction", "row")
        $(".dropdown.pc").css("justify-content", "space-between")
    });

    $(".nav-menu").mouseout(function()
    {
        $(".dropdown.pc").css("display", "none")
    });


    $(".nav-menu").click(function()
    {
        if($(".dropdown.mbl").css("display") == "none")
        {
            $(".dropdown.mbl").css("display", "flex")
            $(".dropdown.mbl").css("flex-direction", "column")
            $(".dropdown.mbl").css("justify-content", "space-between")
        }

        else
        {

            $(".dropdown.mbl").css("display", "none")
        }
    });
});