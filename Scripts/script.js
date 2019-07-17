$(document).ready(function () {

    var filter = "all";
    var page = 1;
    var count;
    var items = [];

    if ($(window).width() > 1024) {
        count = 3;
    }
    else {
        count = 2;
    }

    console.log(count);

    showPage(1);

    function showPage(pg) {
        page = pg;
        console.log("showpage " + pg)
        items = [];

        $('.job_block').hide();

        $('.job_block').each(function () {
            console.log(">" + $(this).data('id'))
            if (filter !== "all") { /* Bu fonksiyon sadeleştirilebilir */

                if ($(this).data('id') == filter) {
                    items.push($(this))
                }
            } else {
                items.push($(this))
            }

            var len;

            if (items.length < pg * count) {
                len = items.length;
                $('.load_more').addClass('passive')
            }
            else {
                len = pg * count;
                $('.load_more').removeClass('passive')
            }


            for (var i = 0; i < len; i++) {
                items[i].show();
            }

        })
    }

    $('.job_list').click(function () {
        filter = $(this).data('id');
        showPage(1);

    })

    $('.load_more').click(function () {
        if (!$(this).hasClass('passive')) {
            page++;
            showPage(page);
        }
    })

})


// Smooth scrolling to all links

$(document).ready(function(){
    $("a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                window.location.hash = hash;
            });
        }
    });
});