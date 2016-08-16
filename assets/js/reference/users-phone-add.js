

$(document).ready(function() {
    var $moreContent = $('.more');
    var $moreLink    = $('#show_more');
    var hideLinkDesc = "Hide extension field";
    var showLinkDesc = "Show extension field";

    // Implemented the intl-tel-input plugin
    $("#number").intlTelInput({
        allowExtensions: false,
        autoFormat: true,
        autoPlaceholder: true,
        nationalMode: false,
        preferredCountries: ["us","gb"],
        defaultCountry: ["United States","us","1",0]
    });

    $moreLink.click(function () {
        if ($moreLink.text() === showLinkDesc) {
            $moreLink.text(hideLinkDesc);
            $moreContent.removeClass('hidden');
        } else {
            $moreLink.text(showLinkDesc);
            $moreContent.addClass('hidden');
        }
    });

    /* Show/hide phone number field on radio button clicks */
    $('#device_type input:radio').on("click", function() {
        if ( $(this).val() == "phone" ) {
             $('.phone-field').show();

            // hides .more class when pressing "Phone" the first time
            //If Omitted .more is shown every time "Phone" is clicked
            if($('#show_more').text() == 'Show extension field'){
                $('.more').hide();
            }

            return true;
        } else {
            $('.phone-field').hide();
            $('input:text').val('');
            return true;
        }
    });

    /* For going backwards/forwards to the page -- Needed for Chrome and Safari */
    if($('input[name="tablet_or_phone"]:checked').val() == "tablet"){
        $('.phone-field').hide();
    }
});
