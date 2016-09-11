var $newInputRow = `<div class="row">
                    <div class="form-group col-md-3">
                        <input type="text" class="form-control">
                    </div>
                    <div class="form-group col-md-4">
                        <input type="url" class="form-control">
                    </div>
                    <div class="form-group col-md-2">
                        <input type="number" class="form-control" min="1">
                    </div>
                    <div class="form-group col-md-3">
                        <button class="btn btn-outline-warning"><i class="fa fa-pencil"></i></button>
                        <button class="btn btn-outline-danger"><i class="fa fa-trash"></i></button>
                        <button class="btn btn-outline-success"><i class="fa fa-star"></i></button>
                    </div>
                </div>`;

listStoredFeeds();
$('.btn-outline-danger').on('click', deleteFeed);

function listStoredFeeds() {
    $('#allFeeds').empty();
    $.each(localStorage, function (key, value) {
        $('#allFeeds').append($newInputRow);
        $('.row:last').children()[0].getElementsByTagName('input')[0].value = JSON.parse(value).name;
        $('.row:last').children()[1].getElementsByTagName('input')[0].value = JSON.parse(value).url;
        $('.row:last').children()[2].getElementsByTagName('input')[0].value = JSON.parse(value).counter;
    });
}

function addNewFeedToStorage() {
    var feedObject = {
        name: $nameInput.val(),
        url: $urlInput.val(),
        counter: $counterInput.val(),
        isFavourite: false
    };
    if (localStorage.getItem($nameInput.val()) === null) {
        localStorage.setItem($nameInput.val(), JSON.stringify(feedObject));
        alert("New feed is successfully stored!");
        listStoredFeeds();
    } else {
        alert("Feed already exists with the given name!");
    }
}

function deleteFeed() {
    var $chosenFeed = $(this).parent().siblings()[0].getElementsByTagName('input')[0].value;
    $($(this).parent().parent()).remove();
    localStorage.removeItem($chosenFeed);
}