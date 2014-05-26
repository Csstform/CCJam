function show(page) {
    $("[id^=nav]").removeClass("active");
    $("[id^=page]").hide();
    $("#nav-" + page).addClass("active");
    $("[id$=" + page + "]").show();
}

function getv(name) {
    var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
    return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
}

$(function() {
    var data = getv('p');
	console.log( data )
    if (data === null) {
        show("home");
    }
    else {
        show(data);
    }
});
