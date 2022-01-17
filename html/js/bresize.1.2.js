//***********************************************************************************
//
//***********************************************************************************
var birtObject = [];

//***********************************************************************************
// Windows behaviour
//***********************************************************************************
$(window).resize(function () {
    adjustViewer();
});

$(window).on("orientationchange", adjustViewer());

//***********************************************************************************
// Store viewer
//***********************************************************************************
function setBirtObject(a) {
    var i = birtObject.length;
    var bViewer = a;
    birtObject[i] = bViewer;

    $('#' + bViewer.getId()).css("width", "100%");
    if (bViewer.getWidth() == null) {
        var w = $('#' + bViewer.getId()).parent().width();
        if (w <= 1) {
            w = 400;
        }
        ;
    } else {
        var w = bViewer.getWidth();
    }
    ;
    if (bViewer.getHeight() == null) {
        var h = $('#' + bViewer.getId()).parent().height();
        if (h <= 1) {
            h = 400;
        }
        ;
    } else {
        var h = bViewer.getHeight();
    }
    ;
    bViewer.setSize(w, h);
}
;

//***********************************************************************************
//*** Resize viewer
//***********************************************************************************
function adjustViewer() {
    for (var i = 0; i < birtObject.length; i++) {
        var bViewer = birtObject[i];

        $('#' + bViewer.getId()).css("width", "100%");
        var w = $('#' + bViewer.getId()).parent().width();
        var h = $('#' + bViewer.getId()).parent().height();
        bViewer.setSize(w, h);
        bViewer.submit();
    }
    ;
}
;

//***********************************************************************************
//*** Resize Container	
//***********************************************************************************
function adjustContainer(a) {
    var container1 = $("#" + a).parent().attr("id");
    var container2 = $("#" + a).closest("[id$=___BIRT_ROOT]").attr("id");

    var w = $('#' + container2.replace("___BIRT_ROOT", "")).parent().width();
    $("#" + a).css("width", w + "px");
    $("#" + container1).css("width", w + "px");
    $("#" + container2).parent().css("margin", "0px");
}
;