/*
 * File: app/controller/CameraController.js
 *
 * This file was generated by Sencha Architect version 3.0.4.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.3.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.3.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('Camera.controller.CameraController', {
    extend: 'Ext.app.Controller',

    requires: [
        'Ext.MessageBox',
        'Ext.device.Camera'
    ],

    config: {
        control: {
            "pnlCamera #btnFoto": {
                tap: 'onBtnFotoTap'
            },
            "pnlCamera #btnMedia": {
                tap: 'onBtnMediaTap'
            }
        }
    },

    onBtnFotoTap: function(button, e, eOpts) {
        Ext.Msg.alert('entrou foto');
        var store = Ext.getStore('FotoStore');
        var data = [];
        navigator.camera.getPicture(onSuccess, onFail, { quality: 75,
            destinationType: Camera.DestinationType.FILE_URI });

        function onSuccess(imageURI) {
            Ext.Msg.alert('Url', imageURI);
            data.push({url: imageURI});
            store.applyData(data);
        }

        function onFail(message) {
            alert('Failed because: ' + message);
        }
        /*
        Ext.device.Camera.capture({
            success: function(image) {
                Ext.Msg.alert('Url', image);
                data.push({url: image});
                store.applyData(data);
            },
            failure: function(msg) {
                Ext.Msg.alert('Error', 'Failed to capture photo: ' + msg);
            },
            quality: 75,
            destination: 'file',
            source: 'camera'
        });
        */

    },

    onBtnMediaTap: function(button, e, eOpts) {
        Ext.Msg.alert('entrou');
        var store = Ext.getStore('FotoStore');
        var data = [];

        Ext.device.Camera.capture({
            success: function(image) {
                Ext.Msg.alert('Url', image);
                data.push({url: image});
                store.applyData(data);
            },
            failure: function(msg) {
                Ext.Msg.alert('Error', 'Failed to fetch photo: ' + msg);
            },
            quality: 75,
            destination: 'file',
            source: 'library'
        });
    }

});