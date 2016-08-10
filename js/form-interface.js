$(
    function($){

    var setBlockingStyle = function(){
            
            var defaults = $.blockUI.defaults;
            defaults.overlayCSS = {
                    backgroundColor: '#27ae60',
                    opacity:            0.9,
                    borderRadius:       '4px'
                };
            defaults.css = {
                    padding:    0,
                    margin:     0,
                    width:      '30%',
                    top:        '30%',
                    left:       '35%',
                    textAlign:  'center',
                    color:      '#fff',
                    border:     'none',
                    background: 'none',
                    fontSize:   '20px',
                };
            defaults.centerY = false;
            
        }();



    function setWeek(direction){ //direction equals -1 or 1 
        var timeNow = moment(); 
        var dayOfWeek = moment().format('e')-1;
        
        if(dateOfThisWeek == null){
            if(dayOfWeek >= 0 && dayOfWeek < 3){
                    dateOfThisWeek = moment().subtract(dayOfWeek, 'days');
            }
            else{
                    dateOfThisWeek = moment().add(7 - dayOfWeek, 'days');
            }
        }
        
        if(direction != null){
           
            if(weekOf == null){
                console.log("weekOf never specified");
            }
            else{
                if(direction > 0){
                    newWeekOf = moment(weekOf).add(7, 'days');
                    $('.prev-week').removeClass("disabled");
                    }
                else{
                    newWeekOf = moment(weekOf).subtract(7, 'days');
                    if(moment(newWeekOf).format('l') == moment(dateOfThisWeek).format('l')){
                        $('.prev-week').addClass('disabled');
                        }
                    }
                var weekHeading = $('#week')[0].innerText.replace(moment(weekOf).format('M/D'), moment(newWeekOf).format('M/D'));
                $('#week')[0].innerText = weekHeading;
                weekOf = newWeekOf;
                }
            }
        else{
            weekOf = dateOfThisWeek;
            $('#week')[0].innerText += ' ' + moment(weekOf).format('M/D');
            }
        
        $('#week').css('padding-right', '0px');  
                
        };

    setWeek();

    var meetup = function(name, event, eventType, date, address, description, id, featured, featuredPerson, url, eventImage) {
            
            this.group = name;
            this.eventTitle = event;
            this.eventType = eventType;
            this.eventDate= date;
            this.eventAddress= address;
            this.eventDesc= description;
            this.id = id;
            this.groupIcon= eventImage;
            this.completed = true;
            this.featured = featured;
            this.featuredPerson = featuredPerson;
            this.url = url;
            this.farOut = checkFarOut(weekOf, date);
            
        };


        //Add meetup container
        var insertContainer = function(element){
            
            var blockUIRestraint = $.el('div', {'class':'block-cover'});
            blockUIRestraint.append($.el('div', {'class':'container-fluid meetup-container'}));
            element.append(blockUIRestraint);
            return blockUIRestraint.children('.container-fluid');
            
        };
        
        //Add row to meetup container
        var insertRow = function(element){
            var row = $.el('div', {'class':'row'});
            element.append(row);
            return row;
        };
        
        //Insert Title of Input field in meetup container
        var insertInputName = function( name, inputId){
            return [$.el('h5', {'id':inputId, 'class':'col-md-10 col-sm-10'}, name)];
        };
        
        //Insert Row just for input element
        var insertInputRow = function( inputId, inputType){
            return [$.el('input', {'id':inputId, 'type': (inputType || 'text'), 'class':'col-md-10 col-sm-10'})];
        };
        
        //Insert Text input field 
        var insertInputTextBox = function( inputId, inputType){
            return [$.el('textarea', {'id':inputId, 'class':'col-md-10 col-sm-10'})];
        };
        
        //Go through and create a new meetup-form, uses all the functions above to put it all together
        var createMeetupForm = function(rowNum, meetNum){
            
            var meetupRow = $('#meet-ups'+rowNum);
            if(meetupRow.length==0)
            meetupRow = $.el('div', {'class': 'row big-buffer', 'id': 'meet-ups'+rowNum});
            var meetupContainer = $.el('div', {'class':'col-md-6 meetup', 'id':"meet-up"+meetNum});
            
            meetupRow.append(meetupContainer);
            container.append(meetupRow);
            
            //Once we have a meet up form, add buttons on the bottom so you don't have to scroll to top
            if(meetNum == 1){
                $('#bottom-buttons')
                    .append($.el('button', {'class':'btn', 'id':'add-meet-up'}, 'Add Meetup'))
                    .append($.el('button', {'class':'btn', 'id':'generate-html'}, 'Generate'));
                         
            }

            
            meetupContainer = insertContainer(meetupContainer);
            //Add each row of the meetup container 
            var row = insertRow(meetupContainer);
                row.addClass('meetup-header');
                row.append($.el('h2',  {'class':'meetupNum col-md-12 col-sm-12', 'id': meetNum}, meetNum+'. New Event'));
                            
                row = insertRow(meetupContainer);
                row.addClass('meetup-top-row');
                row.append(insertInputName('Organizing Group', 'input-title'));
                row.append(insertInputRow( 'group-name'));
                
                row = insertRow(meetupContainer);
                row.append(insertInputName('Event Type', 'input-title'));
                row.append(insertInputRow('event-type'));
                //$('#meet-up' + meetNum +' #event-type')[0].value = "Meetup";
                
                row = insertRow(meetupContainer);
                row.append(insertInputName('Event Title', 'input-title'));
                row.append(insertInputRow('event-name'));
                
                row = insertRow(meetupContainer);
                row.append(insertInputName('Event Date','input-title'));
                row.append(insertInputRow( 'event-date', 'date'));
            
                row = insertRow(meetupContainer);
                row.append(insertInputName('Event Time', 'input-title'));
                row.append(insertInputRow('event-time'));
            
                row = insertRow(meetupContainer);
                row.append(insertInputName('Address', 'input-title'));
                row.append(insertInputRow( 'event-address', 'text'));
            
                row = insertRow(meetupContainer);
                row.append(insertInputName('Event Description', 'input-title'));
                var eventDescriptionRow = insertInputTextBox('event-desc');
                eventDescriptionRow[0].css('height', "150px");
                row.append(eventDescriptionRow);  
                
                row = insertRow(meetupContainer);
                row.append(insertInputName('URL', 'input-title'));
                row.append(insertInputRow('url'));
                
                row = insertRow(meetupContainer);
                row.append(insertInputName('Image URL', 'input-title'));
                row.append(insertInputRow('image-url'));
                
                row = insertRow(meetupContainer);
                row.append(insertInputName('Featured', 'input-title'));
                row.append(insertInputRow('featured', 'checkbox'));
                
                row = insertRow(meetupContainer);
                row.append(insertInputName('Featured WMPer', 'input-title'));
                row.append(insertInputRow('featured-person', 'text'));
                
                row = insertRow(meetupContainer);
                row.append($.el('button', {'class':'meet-up-ready col-md-4 col-sm-4 top-buffer', 'id':meetNum}, 'Submit')).append($.el('button', {'class':'clear-meetup col-md-4 col-sm-4 top-buffer', 'id':meetNum}, 'Clear Entries'));        
        };
        
        //Creates meetup form in the correct spot
        function addMeetUp(){
            for(i=1; i<10; i++){
                var meetupRow = $('#meet-ups'+i);
                if(meetupRow.length <= 0){
                    createMeetupForm(i, (i*2)-1);
                    return false;
                }
                else if($('#meet-up'+(i*2)).length<=0){
                    createMeetupForm(i, i*2);
                    return false;
                }
            }
        }
        
        //Mark a meetup as fully filled out and ready to be generated into template
        function submitMeetup(meetNum){
            var meetContainer  = $('#meet-up'+meetNum)[0];
            
            var groupName = $('#'+ meetContainer.id +' #group-name')[0].value;
            var eventType = $('#'+ meetContainer.id +' #event-type')[0].value;
            var eventTitle = $('#'+ meetContainer.id +' #event-name')[0].value;
            var eventDate = new Date($('#'+ meetContainer.id +' #event-date')[0].value);
            var eventDesc = $('#'+ meetContainer.id +' #event-desc')[0].value;
            var eventMoreInfo = $('#'+ meetContainer.id +' #url')[0].value;
            var eventFeatured = $('#'+ meetContainer.id +' #featured')[0].checked;
            var eventFeaturedPerson = $('#'+ meetContainer.id +' #featured-person')[0].value;
            var eventAddress = $('#' + meetContainer.id +' #event-address')[0].value;
            var eventImage = $('#' + meetContainer.id +' #image-url')[0].value; 
            var eventTime = $('#' + meetContainer.id +' #event-time')[0].value; 
            var daysOfWeek =  ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            
            
            //block form so it cannot be edited after marked complete
            $.blockUI.defaults.unblockMsg = '<h4 class="unblockBtn" id="'+meetNum+'">Edit</h4>';
            $('div#meet-up'+meetNum+' .block-cover').block({message:"<h3>Completed</h3>"});
            
            if(groupName != null && groupName != ""){
                $('#'+ meetContainer.id +' .meetupNum')[0].innerText = meetNum + '. ' + groupName;
            }
            
            var submittedNewMeetup = new meetup(groupName, eventTitle, eventType, eventDate, eventAddress, eventDesc, meetNum, eventFeatured, eventFeaturedPerson, eventMoreInfo, eventImage);
            submittedNewMeetup.daysOfWeek = daysOfWeek;
            submittedNewMeetup.time = eventTime;
            
            
            var submittedMeetup = $.grep(meetups, function(e){return e.id == meetNum;});
            if(submittedMeetup.length == 0) {
                meetups.push(submittedNewMeetup);
            }
            else{
               
                meetups[submittedNewMeetup.id - 1] = submittedNewMeetup;
            }
        };
        
        //Allow editing of meetup details
        function unsubmitMeetup(meetNum){
            var meetContainer  = $('#meet-up'+meetNum);
            $('div#meet-up'+meetNum + ' .block-cover').unblock();
            var selectedMeetup = $.grep(meetups, function(e){ return e.id == meetNum; });
            if(selectedMeetup.length == 1){
                selectedMeetup[0].completed = false;
            }
        }
        
        //Clear all fields for that meetup
        function clearInputFields(meetNum){
            var Inputs = $('#meet-up'+meetNum+' input');
            Inputs.push($('#meet-up'+meetNum+' textarea')[0]);
            Inputs.each(function(){
                $(this).val("").removeAttr("checked");
            });
        }

    });