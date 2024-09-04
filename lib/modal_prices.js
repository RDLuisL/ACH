$(document).ready(function(){
    $modal = $('.modal-frame');
    $overlay = $('.modal-overlay');

    /* Clear out the keyframe classes so they don't clash with each other between enter/leave. */
    $modal.bind('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e){
        if($modal.hasClass('state-leave')) {
            $modal.removeClass('state-leave');
        }
    });

    $('.close-btn, .close').on('click', function(){
        $overlay.removeClass('state-show');
        $modal.removeClass('state-appear').addClass('state-leave');
    });

    $('.open').on('click', function(){
        $overlay.addClass('state-show');
        $modal.removeClass('state-leave').addClass('state-appear');
    });
});

