var viewer;
var bookmarks;
var rptDesign;

function getDesign(a) {
    switch (a) {
        case "chart" :
            bookmarks = ['MTMChart',
                'TopCountry',
                'TopProduct',
                'CustomerOrders',
                'OfficeTotal'];

            rptDesign = ['/Applications/Responsive2016/Report Designs/Classic Models Responsive chart.rptdesign',
                '/Applications/Responsive2016/Report Designs/Classic Models Responsive chart.rptdesign',
                '/Applications/Responsive2016/Report Designs/Classic Models Responsive chart.rptdesign',
                '/Applications/Responsive2016/Report Designs/Classic Models Responsive chart.rptdesign',
                '/Applications/Responsive2016/Report Designs/Classic Models Responsive chart.rptdesign'];
            break;

        case "table" :
            bookmarks = ['Table1',
                'Table2',
                'Table3',
                'Table1',
                'Table2'];

            rptDesign = ['/Applications/Responsive2016/Report Designs/Classic Models Responsive table.rptdesign',
                '/Applications/Responsive2016/Report Designs/Classic Models Responsive table.rptdesign',
                '/Applications/Responsive2016/Report Designs/Classic Models Responsive table.rptdesign',
                '/Applications/Responsive2016/Report Designs/Classic Models Responsive table.rptdesign',
                '/Applications/Responsive2016/Report Designs/Classic Models Responsive table.rptdesign'];
            break;

        case "label" :
            bookmarks = ['Label1',
                'Label2',
                'Text3',
                'Text2',
                'Text3'];

            rptDesign = ['/Applications/Responsive2016/Report Designs/Classic Models Responsive label.rptdesign',
                '/Applications/Responsive2016/Report Designs/Classic Models Responsive label.rptdesign',
                '/Applications/Responsive2016/Report Designs/Classic Models Responsive label.rptdesign',
                '/Applications/Responsive2016/Report Designs/Classic Models Responsive label.rptdesign',
                '/Applications/Responsive2016/Report Designs/Classic Models Responsive label.rptdesign'];
            break;

        case "map" :
            bookmarks = ['Map1',
                'Map2',
                'Dummy',
                'Dummy',
                'Dummy'];

            rptDesign = ['/Applications/Responsive2016/Report Designs/Classic Models Responsive map.rptdesign',
                '/Applications/Responsive2016/Report Designs/Classic Models Responsive map.rptdesign',
                '/Applications/Responsive2016/Report Designs/Classic Models Responsive map.rptdesign',
                '/Applications/Responsive2016/Report Designs/Classic Models Responsive map.rptdesign',
                '/Applications/Responsive2016/Report Designs/Classic Models Responsive map.rptdesign'];
            break;

        case "mash" :
            bookmarks = ['MTMChart',
                'Table1',
                'Table3',
                'Text3',
                'Map2'];

            rptDesign = ['/Applications/Responsive2016/Report Designs/Classic Models Responsive chart.rptdesign',
                '/Applications/Responsive2016/Report Designs/Classic Models Responsive table.rptdesign',
                '/Applications/Responsive2016/Report Designs/Classic Models Responsive table.rptdesign',
                '/Applications/Responsive2016/Report Designs/Classic Models Responsive label.rptdesign',
                '/Applications/Responsive2016/Report Designs/Classic Models Responsive map.rptdesign'];
            break;
    }
    ;
}
;

function reload(a) {
//   $(this).parent().addClass("active");
    getDesign(a);
    switch (a) {
        case "label":
            myInit(200);
            break;
        case "map":
            myInit(550);
            break;
        default :
            myInit(400);
    }
}
;

$(document).ready(function () {
    $(".nav li").click(function () {
        if ($(this).children().attr("href") != "doc/readme.pdf") {
            $(".nav li").removeClass("active");
            $(this).addClass("active");
        }
    });

    getDesign("chart");

    actuate.load('viewer');
    var iHub = 'http://' + location.host + '/iportal';
    var reqOps = new actuate.RequestOptions();
    actuate.initialize(iHub, reqOps == undefined ? null : reqOps, null, null, (function () {
        myInit(400)
    }));
});


function myInit(h) {
    try {
        var config = new actuate.viewer.UIConfig();
        config.setContentPanel(new actuate.viewer.BrowserPanel());

        var uiOptions = new actuate.viewer.UIOptions();
        uiOptions.enableToolBar(false);

        viewer = [new actuate.Viewer('viewerContainer0'),
            new actuate.Viewer('viewerContainer1'),
            new actuate.Viewer('viewerContainer2'),
            new actuate.Viewer('viewerContainer3'),
            new actuate.Viewer('viewerContainer4')];

        for (var i = 0; i < viewer.length; i++) {
            viewer[i].setReportDesign(rptDesign[i]);
            viewer[i].setReportletBookmark(bookmarks[i]);
            viewer[i].setUIOptions(uiOptions);
            viewer[i].setHeight(h);
            viewer[i].setWidth($("#vc" + i).width());

            /* ** Here comes the magic :-) ** */
            setBirtObject(viewer[i]);
            /* **** */
            viewer[i].submit();
        }
    } catch (err) {
        console.log(err);
    }
}
;