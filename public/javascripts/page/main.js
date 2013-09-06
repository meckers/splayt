Page = Class.extend({

    dirty: false,

    init: function() {
        //this.uploadManager = new UploadManager(".content-addition-area");
        this.editArea = $(".content-addition-area");
        this.listen();
        //this.removeStringsFromUploader();
        this.populate();
        this.setDirty(false);
        this.initHallo();
    },

    initHallo: function() {
        this.editArea.hallo({
            plugins: {
                'halloformat': {}
            }
        });
    },

    listen: function() {
        var me = this;
        /*$("h1").click(function() {
            me.makeEditable(this);
        });*/
        $(".save-button").click(function() {
            var id = $("[name=id]").val();
            var text = me.editArea.val();
            console.log("saving", id, text);
            $.post("/save", {"id": id, "text": text}, function(data) {
                console.log("success", data);
                me.setDirty(false);
            });
        });
        this.editArea.on('hallomodified', function() {
            me.setDirty(true);
        });
        /*
        this.editArea.keyup(function() {
            me.setDirty(true);
        });*/
        this.editArea.autosize();
    },

    makeEditable: function(element) {
        $(element).attr('contentEditable', 'true');
        $(element).focus();
    },

    setDirty: function(dirty) {
        this.dirty = dirty;
        document.title = this.editArea.val().substr(0, 20);
        if (this.dirty) {
            document.title = "* " + document.title;
            $(this).prop('disabled', false);
        }
        else {
            $(this).prop('disabled', true);
        }
    },

    populate: function() {
        if (_data) {
            console.log('Populating text area with data', _data);
            this.editArea.text(_data.text);
        }
    },

    removeStringsFromUploader: function() {
        var nodes = this.getTextNodesIn(".qq-uploader");
        nodes.remove();
    },

    getTextNodesIn: function(el) {
        return $(el).find(":not(iframe)").addBack().contents().filter(function() {
            return this.nodeType == 3;
        });
    }
});


$(function() {
    if ($(".page").length > 0) {
        console.log("initing page");
        Application.page = new Page();
    }
})