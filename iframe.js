$(document).ready(function() {
    let smallsrc = "https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FHoustonSpaceCityzens%2F&tabs=events&width=300&height=430&small_header=true&adapt_container_width=false&hide_cover=true&show_facepile=false&appId"
    let largesrc = "https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FHoustonSpaceCityzens%2F&tabs=events&width=500&height=550&small_header=true&adapt_container_width=false&hide_cover=true&show_facepile=false&appId"
        if(window.outerWidth < 550){
            $('#iframesrc').attr('src', smallsrc);
        } else{
            $('#iframesrc').attr('src', largesrc);
        }

    console.log(window.outerWidth)
});
