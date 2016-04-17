$(
    function($){
        
        $.meetupAPI = function(){
            
            var test;
            this.send = function(){$.ajax({
                    url: 'https://api.meetup.com/self/calendar?key=305178f5e17282a2262507d3c503535&sign=true',
                    dataType: 'jsonp',
                    success: function(listOfMeetups){
                        test = listOfMeetups;
                        console.log('Nice!');
                        sillyFunction();
                        }
                    
                
                        
                    
                });
                                   
            }
            var sillyFunction = function(){
                this.meetupsArray = test;
            }
//            var xhr = new XMLHttpRequest();
//            
//            var authTarget = "https://secure.meetup.com/oauth2/authorize?client_id=YOUR_CONSUMER_KEY&response_type=token&redirect_uri=YOUR_CONSUMER_REDIRECT_URI";
//            
//            var apiTarget = "https://api.meetup.com/self/calendar?key=305178f5e17282a2262507d3c503535&sign=true";
//            
//            this.meetupsArray; 
//            
//            
//            this.send = function(){
//            xhr.open("GET", apiTarget, true);
//            xhr.send();
//            };
            
            
        
            };
            
            
            
         
         
    }


);