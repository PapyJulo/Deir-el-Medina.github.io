var wms_layers = [];

var lyr_MNE2cmpx_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "MNE-2cmpx",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/MNE2cmpx_0.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [3628992.325160, 2965336.100429, 3629248.716304, 2965643.887897]
                            })
                        });
var format_TOMBES_1 = new ol.format.GeoJSON();
var features_TOMBES_1 = format_TOMBES_1.readFeatures(json_TOMBES_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TOMBES_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TOMBES_1.addFeatures(features_TOMBES_1);
var lyr_TOMBES_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TOMBES_1, 
                style: style_TOMBES_1,
                interactive: true,
                title: '<img src="styles/legend/TOMBES_1.png" /> TOMBES'
            });

lyr_MNE2cmpx_0.setVisible(true);lyr_TOMBES_1.setVisible(true);
var layersList = [lyr_MNE2cmpx_0,lyr_TOMBES_1];
lyr_TOMBES_1.set('fieldAliases', {'fid': 'fid', 'TT n°': 'TT n°', 'Propriétaire de la tombe': 'Propriétaire de la tombe', 'Titre(s) du propriétaire': 'Titre(s) du propriétaire', 'Datation': 'Datation', 'En cours de publication par': 'En cours de publication par', 'Publication (s)': 'Publication (s)', 'field_7': 'field_7', 'Est (WGS84 UTM N36) (m)': 'Est (WGS84 UTM N36) (m)', 'Nord (WGS84 UTM N36) (m)': 'Nord (WGS84 UTM N36) (m)', 'Lien test': 'Lien test', });
lyr_TOMBES_1.set('fieldImages', {'fid': 'TextEdit', 'TT n°': 'Range', 'Propriétaire de la tombe': 'TextEdit', 'Titre(s) du propriétaire': 'TextEdit', 'Datation': 'TextEdit', 'En cours de publication par': 'TextEdit', 'Publication (s)': 'TextEdit', 'field_7': 'TextEdit', 'Est (WGS84 UTM N36) (m)': 'TextEdit', 'Nord (WGS84 UTM N36) (m)': 'TextEdit', 'Lien test': 'TextEdit', });
lyr_TOMBES_1.set('fieldLabels', {'fid': 'no label', 'TT n°': 'no label', 'Propriétaire de la tombe': 'no label', 'Titre(s) du propriétaire': 'no label', 'Datation': 'no label', 'En cours de publication par': 'no label', 'Publication (s)': 'no label', 'field_7': 'no label', 'Est (WGS84 UTM N36) (m)': 'no label', 'Nord (WGS84 UTM N36) (m)': 'no label', 'Lien test': 'no label', });
lyr_TOMBES_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});