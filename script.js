var originalWidth;
var originalHeight;

function resizeImage() {
    var image = document.getElementById('resizeable-image');
    
    // Save the original dimensions
    originalWidth = image.width;
    originalHeight = image.height;

    // Set the new size
    image.style.width = '500px';
    image.style.height = '500px';
}

function restoreOriginalSize() {
    var image = document.getElementById('resizeable-image');

    // Restore the original dimensions
    image.style.width = originalWidth + 'px';
    image.style.height = originalHeight + 'px';
}