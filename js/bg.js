var bgCount = 1;
setInterval(function () {
    bgCount++;

    $(".slider-container").css('background-image', "url('pics/s" + bgCount + ".jpg')");
    if (bgCount >= 5) {
        bgCount = 1;
    }
}, 2000);
