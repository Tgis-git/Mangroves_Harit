var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_2020_HighlightOptimized_1 = new ol.layer.Image({
        opacity: 1,
        
    title: '2020_HighlightOptimized<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/2020_HighlightOptimized_1.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [8084945.252585, 2418841.898180, 8086285.590276, 2420173.612395]
        })
    });
var lyr_2020_NDVI_Clip_RC_2 = new ol.layer.Image({
        opacity: 1,
        
    title: '2020_NDVI_Clip_RC<br />\
    <img src="styles/legend/2020_NDVI_Clip_RC_2_0.png" /> Waterbodies<br />\
    <img src="styles/legend/2020_NDVI_Clip_RC_2_1.png" /> Mudflats<br />\
    <img src="styles/legend/2020_NDVI_Clip_RC_2_2.png" /> Sparse Mangroves<br />\
    <img src="styles/legend/2020_NDVI_Clip_RC_2_3.png" /> Dense Mangroves<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/2020_NDVI_Clip_RC_2.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [8084939.807202, 2418823.607916, 8086289.990870, 2420185.360545]
        })
    });
var lyr_2020_False_color_3 = new ol.layer.Image({
        opacity: 1,
        
    title: '2020_False_color<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/2020_False_color_3.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [8084945.252585, 2418841.898180, 8086285.590276, 2420173.612395]
        })
    });
var lyr_2020_NDVI_4 = new ol.layer.Image({
        opacity: 1,
        
    title: '2020_NDVI<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/2020_NDVI_4.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [8084945.252585, 2418841.898180, 8086285.590276, 2420173.612395]
        })
    });
var lyr_2024_HighlightOptimized_5 = new ol.layer.Image({
        opacity: 1,
        
    title: '2024_HighlightOptimized<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/2024_HighlightOptimized_5.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [8084945.252585, 2418841.898180, 8086285.590276, 2420173.612395]
        })
    });
var lyr_2024_NDVI_Clip_RC_6 = new ol.layer.Image({
        opacity: 1,
        
    title: '2024_NDVI_Clip_RC<br />\
    <img src="styles/legend/2024_NDVI_Clip_RC_6_0.png" /> Waterbodies<br />\
    <img src="styles/legend/2024_NDVI_Clip_RC_6_1.png" /> Swamps /Flood<br />\
    <img src="styles/legend/2024_NDVI_Clip_RC_6_2.png" /> Mudflats<br />\
    <img src="styles/legend/2024_NDVI_Clip_RC_6_3.png" /> Sparse Mangroves<br />\
    <img src="styles/legend/2024_NDVI_Clip_RC_6_4.png" /> Dense Mangroves<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/2024_NDVI_Clip_RC_6.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [8084939.807202, 2418823.607916, 8086289.990870, 2420185.360545]
        })
    });
var lyr_2024_False_color_7 = new ol.layer.Image({
        opacity: 1,
        
    title: '2024_False_color<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/2024_False_color_7.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [8084945.252585, 2418841.898180, 8086285.590276, 2420173.612395]
        })
    });
var lyr_2024_NDVI_8 = new ol.layer.Image({
        opacity: 1,
        
    title: '2024_NDVI<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/2024_NDVI_8.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [8084945.252585, 2418841.898180, 8086285.590276, 2420173.612395]
        })
    });
var format_StudyArea_9 = new ol.format.GeoJSON();
var features_StudyArea_9 = format_StudyArea_9.readFeatures(json_StudyArea_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StudyArea_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StudyArea_9.addFeatures(features_StudyArea_9);
var lyr_StudyArea_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_StudyArea_9, 
                style: style_StudyArea_9,
                popuplayertitle: 'Study Area',
                interactive: false,
                title: '<img src="styles/legend/StudyArea_9.png" /> Study Area'
            });
var group_2024 = new ol.layer.Group({
                                layers: [lyr_2024_HighlightOptimized_5,lyr_2024_NDVI_Clip_RC_6,lyr_2024_False_color_7,lyr_2024_NDVI_8,],
                                fold: 'close',
                                title: '2024'});
var group_2020 = new ol.layer.Group({
                                layers: [lyr_2020_HighlightOptimized_1,lyr_2020_NDVI_Clip_RC_2,lyr_2020_False_color_3,lyr_2020_NDVI_4,],
                                fold: 'close',
                                title: '2020'});

lyr_OSMStandard_0.setVisible(true);lyr_2020_HighlightOptimized_1.setVisible(true);lyr_2020_NDVI_Clip_RC_2.setVisible(true);lyr_2020_False_color_3.setVisible(true);lyr_2020_NDVI_4.setVisible(true);lyr_2024_HighlightOptimized_5.setVisible(true);lyr_2024_NDVI_Clip_RC_6.setVisible(true);lyr_2024_False_color_7.setVisible(true);lyr_2024_NDVI_8.setVisible(true);lyr_StudyArea_9.setVisible(true);
var layersList = [lyr_OSMStandard_0,group_2020,group_2024,lyr_StudyArea_9];
lyr_StudyArea_9.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_StudyArea_9.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_StudyArea_9.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_StudyArea_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});