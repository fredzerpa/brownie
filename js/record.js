// JQuery Section
$(document).ready(function () { // Sidebar Toggle Class and Content ScrollBar
    $("#data, .modal-body").mCustomScrollbar({ // Thin scrollbar
        theme: "minimal"
    });

    $('#dismiss, .overlay').on('click', function () { // Remove Sidebar and Overlay .active
        $('#sidebar').removeClass('active');
        $('.overlay').removeClass('active');
    });

    $('#sidebarCollapse').on('click', function () { // Add Sidebar and Overlay .active and close dropdowns
        $('#sidebar').toggleClass('active');
        $('.overlay').addClass('active');
        $('.collapse.in').toggleClass('in');
        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    });

    
});

