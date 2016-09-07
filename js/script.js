var urlError = '<div class="form-control-feedback">URL has to start with http:// and end with .xml!</div>';

$("#urlInput").on('blur', urlValidator);

function urlValidator() {
    if (!($(this).val().startsWith("http://") && $(this).val().endsWith(".xml"))) {
        $(this).parent().addClass("has-danger");
        $(this).addClass("form-control-danger");
        if(!$('.form-control-feedback').length) {
            $(urlError).insertAfter($(this));
        }
    } else {
        $('.form-control-feedback').remove();
        $(this).removeClass("form-control-danger");
        $(this).addClass("form-control-success");
        $(this).parent().removeClass("has-danger");
        $(this).parent().addClass("has-success");
    }
}

