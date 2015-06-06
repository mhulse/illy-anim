#target illustrator-18

// Need this for production:
// if (app.documents.length > 0) {
//  doc = app.activeDocument;
//  if ( ! doc.saved) {
//      Window.alert('This script needs to modify your document. Please save it before running this script.');
//  }
// } else {
//  Window.alert('You must open at least one document.');
// }

// Extend ExtendScript's functionality:
$.setTimeout = function(name, time) {
    $.sleep(time);
    app[name]();
};

// Only run if there's at least one document open:
if (app.documents.length > 0) {
    init();
}

function init() {
    
    var size = 200; // Controls width of dialog window and children UI elements.
    var meta = 'dialog { \
        preferredSize: [200, ""], \
        text: "Animate Layers", \
        _time: EditText { text: "100",  }, \
        _start: Button { text: "Start" }, \
        group: Group { \
            panel: Panel { \
                preferredSize: [' + size + ', ""], \
                alignChildren: "left", \
                _down: RadioButton { text: "Top down", value: "true" }, \
                _up: RadioButton { text: "Bottom up" }, \
                _pong: RadioButton { text: "Ping pong" }, \
            } \
        }, \
        _close: Button { text: "Close" } \
    }';
    var dialog = new Window(meta);
    
    // Time input box:
    dialog._time.active = true;
    dialog._time.alignment = 'fill';
    
    // Start button:
    dialog._start.onClick = function() { anim(dialog); };
    dialog._start.alignment = 'fill';
    
    // Close button:
    dialog._close.onClick = function() {
        dialog.close();
    };
    dialog._close.alignment = 'fill';
    
    // Show the dialog window:
    dialog.show();
    
}

// Not sure of a better spot to put this:
var reverse = false;

function anim(dialog) {
    
    var count = app.activeDocument.layers.length;
    var radios = dialog.group.panel;
    var i;
    var il;
    
    // Hide all layers:
    clean();
    
    // Top down or bottom up?
    reverse = radios._up.value && true;
    
    // http://stackoverflow.com/a/3586329/922323
    if ( ! reverse) {
        for (i = 0; i < count; i++) {
            control(i, dialog); // Count up!
        }
        if (radios._pong.value) {
            reverse = true;
            anim(dialog);
        }
    } else {
        i = count;
        while (i--) {
            control(i, dialog); // Count down!
        }
        reverse = false;
    }
    
}

function clean() {
    
    var layers = app.activeDocument.layers;
    
    for (i = 0, il = layers.length; i < il; i++) {
        layers[i].visible = false;
    }
    
}

function control(i, dialog) {
    
    var layers = app.activeDocument.layers;
    var current;
    var previous;
    var time = Number(dialog._time.text); // `EditText` control accepts just text.
    
    current = layers[i];
    previous = current;
    current.visible = true;
    $.setTimeout('redraw', time);
    previous.visible = false;  
    
}
