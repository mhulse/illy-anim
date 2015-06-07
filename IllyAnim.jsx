#target illustrator-18

/**
 * @@@BUILDINFO@@@ IllyAnim.jsx !Version! Sat Jun 06 2015 18:18:19 GMT-0700
 */

// Dialog window instance:
var dialog; // Putting it here, which is easier than passing it around.
var doc;

// Need this for production:
if (app.documents.length > 0) {
    doc = app.activeDocument;
    if ( ! doc.saved) {
        Window.alert('This script needs to modify your document. Please save it before running this script.');
    } else {
        init(); // Only run if there's at least one document open.
    }
} else {
    Window.alert('You must open at least one document.');
}

// Extend ExtendScript's functionality:
$.setTimeout = function(name, time) {
    // Pause the loop for `time`.
    $.sleep(time); // Unfortunately this is a blocking function; there are not alternatives as of June 2015.
    app[name](); // Call passed `Application` function by name string.
};

function init() {
    
    // Controls width of dialog window and children UI elements:
    var size = 200;
    // Dialog box setup:
    var meta = 'dialog { \
        preferredSize: [200, ""], \
        text: "Animate Layers", \
        _time: EditText { text: "150",  }, \
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
    // Instanciate `Window` class with setup from above:
    dialog = new Window(meta);
    
    // Time input box:
    dialog._time.active = true;
    dialog._time.alignment = 'fill';
    
    // Start button:
    dialog._start.onClick = anim;
    dialog._start.alignment = 'fill';
    
    // Close button:
    dialog._close.onClick = function() {
        dialog.close();
    };
    dialog._close.alignment = 'fill';
    
    // Show the dialog window:
    dialog.show();
    
}

function anim() {
    
    var count = doc.layers.length;
    var radios = dialog.group.panel;
    var pong = radios._pong.value;
    var i;
    
    // Hide all layers:
    clean();
    
    // http://stackoverflow.com/a/3586329/922323
    if ( ! radios._up.value) { // Top down or bottom up?
        up(count);
        pong && down(count - 1);
    } else {
        down(count);
        pong && up(count, 1);
    }
    
}

function up(count, start) {
    
    // Default function param:
    start = start || 0;
    
    for (start; start < count; start++) {
        control(start); // Count up!
    }
    
}

function down(count) {
    
    while (count--) {
        control(count); // Count down!
    }
    
}

function clean() {
    
    var layers = doc.layers;
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
    current = doc.layers[i];
    
    // Cache the current layer so we can turn it off in the next loop:
    previous = current;
    
    // Show the current layer:
    current.visible = true;
    
    // Pause the looping to control "frame rate" of "animation":
    $.setTimeout('redraw', Number(dialog._time.text)); // `EditText` control accepts just text.
    
    // We're moving on, hide the layer in preparation for the next loop:
    previous.visible = false;  
    
}
