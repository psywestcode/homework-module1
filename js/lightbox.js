$(document).ready(function(){

    /* Open lightbox on image click */
    // Targets the specific images inside the cliff-card elements
    $('.cliff-card img').click(function(){
        
        // Show the backdrop with animation
        $('.backdrop').animate({'opacity':'.50'}, 300, 'linear').css('display', 'block');
        $('.box').fadeIn();

        // Check if lightbox already has an image and clear it
        // This prevents stacking old images if you open/close multiple times
        if ($('.box').contents('img')) {
            $('.box').contents().remove('img');
        }

        // Clone the clicked image
        // $(this) refers to the specific image the user clicked
        var img = $(this).clone(); 
        
        // Add the cloned image to the lightbox box
        $('.box').append(img);
    });

    /* Click to close lightbox */
    // Closes if user clicks the 'X' or the dark background
    $('.close, .backdrop').click(function(){
        $('.backdrop').animate({'opacity':'0'}, 300, 'linear', function(){
            $('.backdrop').css('display', 'none');
        });
        $('.box').fadeOut();
    });

});