$(document).ready(function () {
    
    //............ toast ...............
    $('#myBtn').on('click', function () {
        $('.toast').toast('show');
    });

    //............. ADD TO CART TOAST...........
    $('.add_to_cart_toast').click(function(ev) {
        const cart_toast_info = $(ev.currentTarget).parent().find('input').val();
        document.getElementById('add_to_cart_toast').innerHTML = `${cart_toast_info} items added to your cart...`

        if (cart_toast_info < 1 ) {
            alert ("Cannot add ZERO quantity in cart ")
        } else {
            $('.cart_toast').toast('show');
        }
    });

    //............. ADD TO CART JS .............
    $(".plus_btn").click(function (ev) {
        const $input = $(ev.currentTarget).siblings('input');
        const default_val = parseInt($input.val());
        default_val = default_val + 1;
        if (default_val > 10) {
            alert("Maxium value");
        } else {
            $input.val(default_val);
        }
    });
    $(".minus_btn").click(function (ev) {
        const $input = $(ev.currentTarget).siblings('input');
        const default_val = parseInt($input.val());
        default_val = default_val - 1;
        if (default_val < 1) {
            alert("Minimum value");
        } else {
            $input.val(default_val);
        }
    });
});