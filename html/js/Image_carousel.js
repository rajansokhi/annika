        
        function carousel_bg(id) {
                var bgimgs = [ 'images/1.jpg', 'images/2.jpg', 'images/3.jpg' ]; // add images here..
                var img = bgimgs[id];
                var cnt = 3; // change this number when adding images..
				
				$('#home .home_background').fadeTo('slow', 0.3, function() {
				$(this).css("background-image", "url("+img+")");
				}).fadeTo('slow', 1);
				
                id = id + 1;
                if (id==cnt) id = 0;

                setTimeout("carousel_bg("+id+")", 7000);
        }

        $(document).ready(function() {
                carousel_bg(0);     
        });