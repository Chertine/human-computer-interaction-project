
$(document).ready(function()
{

    let slideHeight = $(".slider .slides .slide").height()
    
    
    $(".slider").css({height: slideHeight})

    $(window).resize(function()
    {
        let slideHeight = $(".slider .slides .slide").height()
        $(".slider").css({height: slideHeight})
    });


    $(".prev-btn").click(function()
    {
        $(".slider .slides").animate(
            {
                bottom: -slideHeight
            }, 1000, function()
            {
                $(".slider .slides .slide:last-child").prependTo(".slider div.slides")
                let slideHeight = $(".slider .slides .slide").height()
                $(".slider .slides").css({bottom : ''})
            }
        )
    })

    $(".next-btn").click(function()
    {
        $(".slider .slides").animate(
            {
                bottom: slideHeight
            }, 1000, function()
            {
                $(".slider .slides .slide:first-child").appendTo(".slider div.slides")
                let slideHeight = $(".slider .slides .slide").height()
                $(".slider .slides").css({bottom : ''})
            }
        )
    })
});
