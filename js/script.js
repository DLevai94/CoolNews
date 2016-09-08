var nameInput = $('#nameInput');
var urlInput = $('#urlInput');
var counterInput = $('#counterInput');
var nameError = '<div id="nameError" class="form-control-feedback">Please set a name!</div>';
var urlError = '<div id="urlError" class="form-control-feedback">Please start with "http(s)://" and end with ".xml"!</div>';
var counterError = '<div id="counterError" class="form-control-feedback">Please set a 1+ number!</div>';
var urlRegex = /^(https?:\/\/)(.+)(\.xml)$/gi;

nameInput.on('blur', nameValidator);
urlInput.on('blur', urlValidator);
counterInput.on('blur', counterValidator);
$('#addButton').on('click', addButtonClick);

function nameValidator() {
    if (nameInput.val().length == 0) {
        nameInput.parent().addClass("has-danger");
        nameInput.addClass("form-control-danger");
        if(!$('#nameError').length) {
            $(nameError).insertAfter(nameInput);
        }
    } else {
        $('#nameError').remove();
        nameInput.removeClass("form-control-danger");
        nameInput.parent().removeClass("has-danger");
        nameInput.parent().addClass("has-success");
        nameInput.addClass("form-control-success");
    }
}

function urlValidator() {
    if (!(urlInput.val().match(urlRegex))) {
        urlInput.parent().addClass("has-danger");
        urlInput.addClass("form-control-danger");
        if(!$('#urlError').length) {
            $(urlError).insertAfter(urlInput);
        }
    } else {
        $('#urlError').remove();
        urlInput.removeClass("form-control-danger");
        urlInput.parent().removeClass("has-danger");
        urlInput.parent().addClass("has-success");
        urlInput.addClass("form-control-success");
    }
}

function counterValidator() {
    if (!(counterInput.val() > 0)) {
        counterInput.parent().addClass("has-danger");
        counterInput.addClass("form-control-danger");
        if(!$('#counterError').length) {
            $(counterError).insertAfter(counterInput);
        }
    } else {
        $('#counterError').remove();
        counterInput.removeClass("form-control-danger");
        counterInput.parent().removeClass("has-danger");
        counterInput.parent().addClass("has-success");
        counterInput.addClass("form-control-success");
    }
}

function addButtonClick() {
    if (nameInput.val().length > 0
            && urlInput.val().match(urlRegex)
            && counterInput.val() > 0) {
        addNewFeedToStorage();
    } else {
        nameValidator();
        urlValidator();
        counterValidator();
        alert("Please fix the errors first!");
    }
}

function addNewFeedToStorage() {

    alert("New feed is successfully stored!");
}
