$('.nav-side .nav-toggle').on('click', function(e) {
    e.preventDefault();
    $(this).parent().toggleClass('nav-open');
});

console.log("hi i'm javascript");