(function () {
    "use strict";
    var socket = io.connect('http://' + document.domain + ':' + location.port);
    document.addEventListener('keydown', (event) => {
      const keyName = event.key;
      console.log('keydown event\n\n' + 'key: ' + keyName);
      if (keyName == 'ArrowDown' || keyName == 'ArrowRight') {
        socket.emit('nextSlide');
      } else if (keyName == 'ArrowUp' || keyName == 'ArrowLeft') {
        socket.emit('previousSlide');
      }
    });

})(jQuery);