var mongoose   = require("mongoose"),
    Campground = require("./models/campground"),
    Comment    = require("./models/comment");
    
var data = [
    {
        name: "Cloud's Rest", 
        image: "https://farm4.staticflickr.com/3795/10131087094_c1c0a1c859.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non turpis vel felis gravida scelerisque varius non nulla. Etiam sit amet tellus neque. Fusce lacinia posuere purus quis pulvinar. Pellentesque efficitur tellus nec est rhoncus, vel sagittis nunc ornare. Nulla rutrum fringilla augue ac aliquet. Suspendisse eu ex eu leo pretium porta. Fusce ac odio mauris. Donec gravida nibh eu lacus rutrum malesuada. Duis interdum magna in nunc pharetra, a luctus tellus vulputate. Fusce diam tortor, gravida vel aliquet sed, porta vitae metus. Nunc ut elementum ante. Praesent eleifend dolor vel ipsum feugiat semper. In ullamcorper, est scelerisque sollicitudin vulputate, libero est euismod eros, sit amet mattis augue quam ac ipsum. Nam nisi orci, vulputate et blandit a, vulputate id erat. In nec metus sollicitudin, venenatis enim quis, condimentum urna. Proin ullamcorper leo ac ligula imperdiet accumsan. Phasellus eu ultrices nunc. Quisque lacinia, lorem sit amet pulvinar luctus, ipsum mi lacinia mi, ac tempor diam diam eu eros. Integer luctus accumsan tortor, ut vestibulum dui."
    },
    {
        name: "Desert Mesa", 
        image: "https://images.unsplash.com/photo-1485343034225-9e5b5cb88c6b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a28fc68742556a682ecac876ab4b9c2c&auto=format&fit=crop&w=1050&q=80",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non turpis vel felis gravida scelerisque varius non nulla. Etiam sit amet tellus neque. Fusce lacinia posuere purus quis pulvinar. Pellentesque efficitur tellus nec est rhoncus, vel sagittis nunc ornare. Nulla rutrum fringilla augue ac aliquet. Suspendisse eu ex eu leo pretium porta. Fusce ac odio mauris. Donec gravida nibh eu lacus rutrum malesuada. Duis interdum magna in nunc pharetra, a luctus tellus vulputate. Fusce diam tortor, gravida vel aliquet sed, porta vitae metus. Nunc ut elementum ante. Praesent eleifend dolor vel ipsum feugiat semper. In ullamcorper, est scelerisque sollicitudin vulputate, libero est euismod eros, sit amet mattis augue quam ac ipsum. Nam nisi orci, vulputate et blandit a, vulputate id erat. In nec metus sollicitudin, venenatis enim quis, condimentum urna. Proin ullamcorper leo ac ligula imperdiet accumsan. Phasellus eu ultrices nunc. Quisque lacinia, lorem sit amet pulvinar luctus, ipsum mi lacinia mi, ac tempor diam diam eu eros. Integer luctus accumsan tortor, ut vestibulum dui."
    },
    {
        name: "Canyon Floor", 
        image: "https://farm1.staticflickr.com/189/493046463_841a18169e.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non turpis vel felis gravida scelerisque varius non nulla. Etiam sit amet tellus neque. Fusce lacinia posuere purus quis pulvinar. Pellentesque efficitur tellus nec est rhoncus, vel sagittis nunc ornare. Nulla rutrum fringilla augue ac aliquet. Suspendisse eu ex eu leo pretium porta. Fusce ac odio mauris. Donec gravida nibh eu lacus rutrum malesuada. Duis interdum magna in nunc pharetra, a luctus tellus vulputate. Fusce diam tortor, gravida vel aliquet sed, porta vitae metus. Nunc ut elementum ante. Praesent eleifend dolor vel ipsum feugiat semper. In ullamcorper, est scelerisque sollicitudin vulputate, libero est euismod eros, sit amet mattis augue quam ac ipsum. Nam nisi orci, vulputate et blandit a, vulputate id erat. In nec metus sollicitudin, venenatis enim quis, condimentum urna. Proin ullamcorper leo ac ligula imperdiet accumsan. Phasellus eu ultrices nunc. Quisque lacinia, lorem sit amet pulvinar luctus, ipsum mi lacinia mi, ac tempor diam diam eu eros. Integer luctus accumsan tortor, ut vestibulum dui."
    }
];

function seedDB(){
    // Remove all campgrounds
    Campground.remove({}, function(err){
        if(err){
            console.log(err);
        }
        console.log("remove campgrounds!");
        // add a few campgrounds
        data.forEach(function(seed){
            Campground.create(seed, function(err, campground){
                if(err){
                    console.log(err);
                } else {
                    console.log('added a campground');
                    // create a comment
                    Comment.create({
                        text: 'This place is great, but I wish there was internet',
                        author: 'Homer'
                    }, function(err, comment){
                      if(err){
                          console.log(err);
                      } else {
                          campground.comments.push(comment);
                          campground.save()
                          console.log('created new comment');
                      }
                    });
                }
            });
        });
    });
    // add a few comments
} 

module.exports = seedDB;
