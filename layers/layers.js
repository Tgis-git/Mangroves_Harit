var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleHybrid_1 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatellite_2 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var lyr_2020_MangroveClassification_3 = new ol.layer.Image({
        opacity: 1,
        
    title: '2020_Mangrove Classification<br />\
    <img src="styles/legend/2020_MangroveClassification_3_0.png" /> Waterbodies<br />\
    <img src="styles/legend/2020_MangroveClassification_3_1.png" /> Mudflats<br />\
    <img src="styles/legend/2020_MangroveClassification_3_2.png" /> Sparse Mangroves<br />\
    <img src="styles/legend/2020_MangroveClassification_3_3.png" /> Dense Mangroves<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/2020_MangroveClassification_3.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [8084939.807202, 2418823.607916, 8086289.990870, 2420185.360545]
        })
    });
var lyr_2020_SatelliteImage_4 = new ol.layer.Image({
        opacity: 1,
        
    title: '2020_Satellite Image<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/2020_SatelliteImage_4.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [8084945.252585, 2418841.898180, 8086285.590276, 2420173.612395]
        })
    });
var lyr_2024MangroveClassification_5 = new ol.layer.Image({
        opacity: 1,
        
    title: '2024 Mangrove Classification<br />\
    <img src="styles/legend/2024MangroveClassification_5_0.png" /> Waterbodies<br />\
    <img src="styles/legend/2024MangroveClassification_5_1.png" /> Swamps /Flood<br />\
    <img src="styles/legend/2024MangroveClassification_5_2.png" /> Mudflats<br />\
    <img src="styles/legend/2024MangroveClassification_5_3.png" /> Sparse Mangroves<br />\
    <img src="styles/legend/2024MangroveClassification_5_4.png" /> Dense Mangroves<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/2024MangroveClassification_5.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [8084939.807202, 2418823.607916, 8086289.990870, 2420185.360545]
        })
    });
var lyr_2024_SatelliteImage_6 = new ol.layer.Image({
        opacity: 1,
        
    title: '2024_Satellite Image<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/2024_SatelliteImage_6.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [8084945.252585, 2418841.898180, 8086285.590276, 2420173.612395]
        })
    });
var format_StudyArea_7 = new ol.format.GeoJSON();
var features_StudyArea_7 = format_StudyArea_7.readFeatures(json_StudyArea_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StudyArea_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StudyArea_7.addFeatures(features_StudyArea_7);
var lyr_StudyArea_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_StudyArea_7, 
                style: style_StudyArea_7,
                popuplayertitle: 'Study Area',
                interactive: false,
                title: '<img src="styles/legend/StudyArea_7.png" /> Study Area'
            });
var format_ProbableSite_8 = new ol.format.GeoJSON();
var features_ProbableSite_8 = format_ProbableSite_8.readFeatures(json_ProbableSite_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ProbableSite_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ProbableSite_8.addFeatures(features_ProbableSite_8);
var lyr_ProbableSite_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ProbableSite_8, 
                style: style_ProbableSite_8,
                popuplayertitle: 'Probable Site',
                interactive: true,
                title: '<img src="styles/legend/ProbableSite_8.png" /> Probable Site'
            });
var group_2024 = new ol.layer.Group({
                                layers: [lyr_2024MangroveClassification_5,lyr_2024_SatelliteImage_6,],
                                fold: 'close',
                                title: '2024'});
var group_2020 = new ol.layer.Group({
                                layers: [lyr_2020_MangroveClassification_3,lyr_2020_SatelliteImage_4,],
                                fold: 'open',
                                title: '2020'});

lyr_OSMStandard_0.setVisible(true);lyr_GoogleHybrid_1.setVisible(true);lyr_GoogleSatellite_2.setVisible(true);lyr_2020_MangroveClassification_3.setVisible(true);lyr_2020_SatelliteImage_4.setVisible(true);lyr_2024MangroveClassification_5.setVisible(true);lyr_2024_SatelliteImage_6.setVisible(true);lyr_StudyArea_7.setVisible(true);lyr_ProbableSite_8.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_GoogleHybrid_1,lyr_GoogleSatellite_2,group_2020,group_2024,lyr_StudyArea_7,lyr_ProbableSite_8];
lyr_StudyArea_7.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_ProbableSite_8.set('fieldAliases', {'id': 'id', 'area': 'area', });
lyr_StudyArea_7.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_ProbableSite_8.set('fieldImages', {'id': 'TextEdit', 'area': 'TextEdit', });
lyr_StudyArea_7.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_ProbableSite_8.set('fieldLabels', {'id': 'hidden field', 'area': 'inline label - always visible', });
lyr_ProbableSite_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});