$(.slider).each(function) {                       //For every slider
    var $this = $(this);                           //Current slider
    var $group = $this.find('.slide-group')        //Get the slide-group(container)
    var $slide = $this.find('.slide');             //Create jQuery object to hold all slides
    var buttonArray = [];                          //Create array to hold navigation buttons
    var currentIndex = 0;                          //Hold index number of the current slide
    var timeout;                                   //Sets gap between auto-sliding

   function move(newIndex) {                      //Creates the slide from old to new one
      var animateLeft, slideLeft;                 // Declare variables

      advance();                                  // When slide moves, call advance() again

      //If it is the current slide / animating do nothing
      if ($group.is(':animated') || currentIndex === newIndex){
         return;
      }   

      buttonArray[currentIndex].removeClass('active');    //Remove class from item
      buttonArray[newIndex].addClas('active');            //Add class to new item

      if (newIndex > currentIndex){                       // If new item > current
         slideLeft = '100%';                              //Sit the new slide to the right
         animateLeft = '-100%';                            //Animate the current group to the right
      } else {
         slideLeft = '-100%'                               //Sit the new slide to the left
         animateLeft = '100%'                              //Animate ti the current group to the right
      }
      //Position new slide to the left (if less) or right (if more) of current
      $slide.eq(newIndex).css(  {left: slideLeft, display: 'block'});

      $group.animate( {left: animateLeft}, function(){        // Animate slides and
         $slide.eq(currentIndex).css( {display: 'none'});    //Hide previous slide
         $slide.eq(newIndex).css( {left: 0});                //Set position of the new item
         $group.css( {left: 0});                             //Set position of group of slides
         currentIndex =newIndex;                             // Set currentIndex to new image
      });
   }

   function advance(){                                      //Used to set
      clearTimeout(timeout);                                // Clear previous timeout
     timeout = setTimeout(function(){                         //Set mew timer
      if (currentIndex < ($slide.length -1)){               //If slide < total slides
         move(currentIndex + 1);                            //Move to next slide
      } else {                                              //Otherwise
        move(0);                                            //Move to the first slide
      }
    },4000);
   }
   $.each($slides, function(index){
      //Create a button element for the button
      var $button = $('<button type = "button" class="slide-btn>&bull;</button>');
      if (index === currentIndex){                            //If index is current item
         $button.addClas('active');                           // Add the active class
      }
      $button.on('click', function(){                         //Create event handler for the button
         move(index);                                         //It call the move() funcion
      }).appendTo('.slide-buttons');                          //Add to the button holder
      buttonArray.push($button);                              //Add it to button array
   });

   advance();
};