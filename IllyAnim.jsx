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

// Dialog window instance:
var dialog; // Putting it here easier than passing it around.

// Extend ExtendScript's functionality:
$.setTimeout = function(name, time) {
    // Pause the loop for `time`.
    $.sleep(time); // Unfortunately this is a blocking function; there are not alternatives as of June 2015.
    app[name](); // Call passed `Application` function by name string.
};

function init() {
    
    var size = 200; // Controls width of dialog window and children UI elements.
    var meta = 'dialog { \
        preferredSize: [200, ""], \
        text: "Animate Layers", \
        _time: EditText { text: "100",  }, \
        group: Group { \
            panel: Panel { \
                preferredSize: [' + size + ', ""], \
                alignChildren: "left", \
                _down: RadioButton { text: "Top down", value: "true", }, \
                _up: RadioButton { text: "Bottom up", }, \
                _pong: Checkbox { text: "Ping pong", value: "true", }, \
            }, \
        }, \
        _start: Button { text: "Start" }, \
        _close: Button { text: "Close" }, \
    }';
    dialog = new Window(meta);
    
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

function anim(dialog, reverse) {
    
    var count = app.activeDocument.layers.length;
    var radios = dialog.group.panel;
    var pong = radios._pong.value;
    var i;
    
    // Default function param:
    reverse = reverse || false;
    
    // Hide all layers:
    clean();
    
    // Top down or bottom up?
    reverse = radios._up.value && true;
    
    // http://stackoverflow.com/a/3586329/922323
    if ( ! reverse) {
        up(count);
        pong && down(count--);
    } else {
        down(count);
        pong && up(count++);
    }
    
}

function up(count) {
    
    for (i = 0; i < count; i++) {
        control(i); // Count up!
    }
    
}

function down(count) {
    
    while (count--) {
        control(count); // Count down!
    }
    
}

function clean() {
    
    var layers = app.activeDocument.layers;
    var i;
    var il;
    
    for (i = 0, il = layers.length; i < il; i++) {
        layers[i].visible = false;
    }
    
}

function control(i) {
    
    var current;
    var previous;
    
    // Current layer:
    current = app.activeDocument.layers[i];
    // Cache the current layer so we can turn it off in the next loop:
    previous = current;
    // Show the current layer:
    current.visible = true;
    // Pause the looping to control "frame rate" of "animation":
    $.setTimeout('redraw', Number(dialog._time.text)); // `EditText` control accepts just text.
    // We're moving on, hide the layer in preparation for the next loop:
    previous.visible = false;  
    
}

// Only run if there's at least one document open:
if (app.documents.length > 0) {
    init();
}
