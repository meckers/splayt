Page = Class.extend({
    init: function() {
        this.uploadManager = new UploadManager(".upload-area");
    }
});


$(function() {
    if ($(".page").length > 0) {
        console.log("initing page");
        Application.page = new Page();
    }
})