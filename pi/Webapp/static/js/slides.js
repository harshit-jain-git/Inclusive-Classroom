
(function () {
	var filesendbutton = document.getElementById('file-send-button');
	var file;

    $('#file-1').change(function() {
        input = document.getElementById('file-1');
        file = input.files[0];
        $('#file-desc').text(file.name);
    });

    filesendbutton.addEventListener('click', function(){
    	socket.emit('open presentation', {'name': file.name});
    });


})(jQuery);