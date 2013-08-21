UploadManager = Class.extend({
    init: function(selector) {
        this.uploader =  new qq.FileUploader({
            element: $(selector)[0],
            action: '/upload',
            debug: true,
            onComplete: function(id, filename, response) {
                console.log(id, filename, response);
                var image = $("<img/>");
                image.attr('src', '/uploads/' + filename);
                image.addClass('uploaded-image');
                $(".page").append(image);
            }
        });
    }
})
