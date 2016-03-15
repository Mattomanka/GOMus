cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-sqlite-storage/www/SQLitePlugin.js",
        "id": "cordova-sqlite-storage.SQLitePlugin",
        "pluginId": "cordova-sqlite-storage",
        "clobbers": [
            "SQLitePlugin"
        ]
    },
    {
        "file": "plugins/me.rahul.plugins.sqlDB/www/sqlDB.js",
        "id": "me.rahul.plugins.sqlDB.sqlDB",
        "pluginId": "me.rahul.plugins.sqlDB",
        "clobbers": [
            "window.plugins.sqlDB"
        ]
    },
    {
        "file": "plugins/ionic-plugin-keyboard/www/ios/keyboard.js",
        "id": "ionic-plugin-keyboard.keyboard",
        "pluginId": "ionic-plugin-keyboard",
        "clobbers": [
            "cordova.plugins.Keyboard"
        ],
        "runs": true
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-sqlite-storage": "0.8.4-dev",
    "me.rahul.plugins.sqlDB": "1.0.3",
    "ionic-plugin-keyboard": "1.0.8"
}
// BOTTOM OF METADATA
});