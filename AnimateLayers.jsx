// if (app.documents.length > 0) {
	
// 	doc = app.activeDocument;
	
// 	if ( ! doc.saved) {
		
// 		Window.alert('This script needs to modify your document. Please save it before running this script.');
		
// 	}
	
// } else {
	
// 	Window.alert('You must open at least one document.');
	
// }

function animateLayers(doc) {
	
	var layers = doc.layers;
	var current;
	var previous;
	
	layers.visible = false;
	
	for (var i = 0, il = layers.length; i < il; i++) {
		
		current = layers[i];
		
		if (current.visible == false) {
			
			current.visible = true;
			
			$.sleep(1000);
			
			redraw();
			
		}
		
	}
	
}

animateLayers(app.activeDocument);