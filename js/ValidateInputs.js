var $nameInput = $('#nameInput');
var $urlInput = $('#urlInput');
var $counterInput = $('#counterInput');
var nameErrorMsg = '<div id="nameErrorMsg" class="form-control-feedback">Name is mandatory!</div>';
var urlErrorMsg = '<div id="urlErrorMsg" class="form-control-feedback">Please start with "http(s)://" and end with ".xml"!</div>';
var counterErrorMsg = '<div id="counterErrorMsg" class="form-control-feedback">Please set a 1+ number!</div>';
var urlRegex = /^(https?:\/\/)(.+)(\.xml)$/gi;

$('#addButton').on('click', onClickAddButton);

function validateNameInput() {
    if ($nameInput.val().length == 0) {
        $nameInput.parent().addClass("has-danger");
        $nameInput.addClass("form-control-danger");
        if(!$('#nameErrorMsg').length) {
            $(nameErrorMsg).insertAfter($nameInput);
        }
    } else {
        $('#nameErrorMsg').remove();
        $nameInput.removeClass("form-control-danger");
        $nameInput.parent().removeClass("has-danger");
        $nameInput.parent().addClass("has-success");
        $nameInput.addClass("form-control-success");
    }
}

function validateUrlInput() {
    if (!($urlInput.val().match(urlRegex))) {
        $urlInput.parent().addClass("has-danger");
        $urlInput.addClass("form-control-danger");
        if(!$('#urlErrorMsg').length) {
            $(urlErrorMsg).insertAfter($urlInput);
        }
    } else {
        $('#urlErrorMsg').remove();
        $urlInput.removeClass("form-control-danger");
        $urlInput.parent().removeClass("has-danger");
        $urlInput.parent().addClass("has-success");
        $urlInput.addClass("form-control-success");
    }
}

function validateCounterInput() {
    if (!($counterInput.val() > 0)) {
        $counterInput.parent().addClass("has-danger");
        $counterInput.addClass("form-control-danger");
        if(!$('#counterErrorMsg').length) {
            $(counterErrorMsg).insertAfter($counterInput);
        }
    } else {
        $('#counterErrorMsg').remove();
        $counterInput.removeClass("form-control-danger");
        $counterInput.parent().removeClass("has-danger");
        $counterInput.parent().addClass("has-success");
        $counterInput.addClass("form-control-success");
    }
}

function onClickAddButton() {
    if ($nameInput.val().length > 0 && $urlInput.val().match(urlRegex) && $counterInput.val() > 0) {
        addNewFeedToStorage();
    } else {
        $(validateNameInput(), validateUrlInput(), validateCounterInput()).ready(function() {
                alert("Please fix the errors first!");
        });
    }
}
