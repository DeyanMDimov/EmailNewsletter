/// <reference path="../../typings/jquery/jquery.d.ts"/>
$(
  function($){

var templateCode = function() {
  
  this.htmlBlocks = [];

  this.weeklyMessage;
  
  var topBlock;
	
	this.setWeeklyMessage = function(msg){
  this.htmlBlocks = [];
	this.weeklyMessage = msg;
 //topBlock goes from the top of the document up to where individual meet ups are listed, includes minified versions of TemplateStandard and TemplateCustom(custom rules for template) stylesheets.
	topBlock = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">\
<html xmlns="http://www.w3.org/1999/xhtml">\
<head><title>Upcoming Events, Meet Ups, and Learning Opportunities</title><meta http-equiv="Content-Type" content="text/html; charset=utf-8" /><meta name="viewport" content="width=device-width"/><style>' +

//standard set of styles for template
'a img,hr{border:none}img,table.container table.row{display:block}a,img{text-decoration:none}#outlook a{padding:0}body{width:100%!important;min-width:100%;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%}.ExternalClass{width:100%}.ExternalClass,.ExternalClass div,.ExternalClass font,.ExternalClass p,.ExternalClass span,.ExternalClass td{line-height:100%}#backgroundTable{margin:0;padding:0;width:100%!important;line-height:100%!important}img.center,table.column,table.columns{margin:0 auto}img{outline:0;-ms-interpolation-mode:bicubic;max-width:100%;clear:both}center{width:100%;min-width:580px}table{border-spacing:0;border-collapse:collapse}td{word-break:break-word;-webkit-hyphens:auto;-moz-hyphens:auto;hyphens:auto;border-collapse:collapse!important}table,td,tr{padding:0;vertical-align:top;text-align:left}hr{color:#d9d9d9;background-color:#d9d9d9;height:1px}table.body{height:100%;width:100%}table.container{width:580px;margin:0 auto;text-align:inherit}h1.center,h2.center,h3.center,h4.center,h5.center,h6.center,span.center,table.center,td.center{text-align:center}table.row{padding:0;width:100%;position:relative}td.wrapper{padding:7px 25px 0 0;position:relative}table.column td,table.columns td{padding:0 0 5px}table.column td.sub-column,table.column td.sub-columns,table.columns td.sub-column,table.columns td.sub-columns{padding-right:10px}td.sub-column,td.sub-columns{min-width:0}table.container td.last,table.row td.last{padding-right:0}table.one{width:30px}table.two{width:85px}table.three{width:140px}table.four{width:195px}table.five{width:250px}table.six{width:305px}table.seven{width:360px}table.eight{width:415px}table.nine{width:470px}table.ten{width:525px}table.eleven{width:580px}table.twelve{width:635px}table.one center{min-width:30px}table.two center{min-width:90px}table.three center{min-width:150px}table.four center{min-width:210px}table.five center{min-width:270px}table.six center{min-width:330px}table.seven center{min-width:390px}table.eight center{min-width:450px}table.nine center{min-width:510px}table.ten center{min-width:570px}table.eleven center{min-width:630px}table.twelve center{min-width:690px}table.one .panel center{min-width:10px}table.two .panel center{min-width:60px}table.three .panel center{min-width:110px}table.four .panel center{min-width:160px}table.five .panel center{min-width:210px}table.six .panel center{min-width:260px}table.seven .panel center{min-width:310px}table.eight .panel center{min-width:360px}table.nine .panel center{min-width:410px}table.ten .panel center{min-width:460px}table.eleven .panel center{min-width:510px}table.twelve .panel center{min-width:560px}.body .column td.one,.body .columns td.one{width:8.333333%}.body .column td.two,.body .columns td.two{width:16.666666%}.body .column td.three,.body .columns td.three{width:25%}.body .column td.four,.body .columns td.four{width:33.333333%}.body .column td.five,.body .columns td.five{width:41.666666%}.body .column td.six,.body .columns td.six{width:50%}.body .column td.seven,.body .columns td.seven{width:58.333333%}.body .column td.eight,.body .columns td.eight{width:66.666666%}.body .column td.nine,.body .columns td.nine{width:75%}.body .column td.ten,.body .columns td.ten{width:83.333333%}.body .column td.eleven,.body .columns td.eleven{width:91.666666%}.body .column td.twelve,.body .columns td.twelve{width:100%}td.offset-by-one{padding-left:50px}td.offset-by-two{padding-left:100px}td.offset-by-three{padding-left:150px}td.offset-by-four{padding-left:200px}td.offset-by-five{padding-left:250px}td.offset-by-six{padding-left:300px}td.offset-by-seven{padding-left:350px}td.offset-by-eight{padding-left:400px}td.offset-by-nine{padding-left:450px}td.offset-by-ten{padding-left:500px}td.offset-by-eleven{padding-left:550px}td.expander{visibility:hidden;width:0;padding:0!important}table.column .text-pad,table.columns .text-pad{padding-left:10px;padding-right:10px}table.column .left-text-pad,table.column .text-pad-left,table.columns .left-text-pad,table.columns .text-pad-left{padding-left:10px}table.column .right-text-pad,table.column .text-pad-right,table.columns .right-text-pad,table.columns .text-pad-right{padding-right:10px}.block-grid{width:100%;max-width:580px}.block-grid td{display:inline-block;padding:10px}.two-up td{width:270px}.three-up td{width:173px}.four-up td{width:125px}.five-up td{width:96px}.six-up td{width:76px}.seven-up td{width:62px}.eight-up td{width:52px}span.center{display:block;width:100%}img.center{float:none}.hide-for-desktop,.show-for-small{display:none}body,h1,h2,h3,h4,h5,h6,p,table.body,td{color:#222;font-family:Calibri,Helvetica,Arial,sans-serif;font-weight:400;padding:0;margin:0;text-align:left;line-height:1.3}h1,h2,h3,h4,h5,h6{word-break:normal}h1{font-size:40px}h2{font-size:36px}h3{font-size:32px}h4{font-size:28px}h5{font-size:24px}h6{font-size:20px}body,p,table.body,td{font-size:14px;line-height:17px}p.lead,p.lede,p.leed{font-size:18px;line-height:21px}p{margin-bottom:10px}small{font-size:10px}a{color:#fff}a:active,a:hover{color:#AAA!important}a:visited,h1 a:active,h1 a:visited,h2 a:active,h2 a:visited,h3 a:active,h3 a:visited,h4 a:active,h4 a:visited,h5 a:active,h5 a:visited,h6 a:active,h6 a:visited{color:#fff!important}h1 a,h2 a,h3 a,h4 a,h5 a,h6 a{color:#fff}.panel{background:#f2f2f2;border:1px solid #d9d9d9;padding:10px!important}.sub-grid table{width:100%}.sub-grid td.sub-columns{padding-bottom:0}table.button,table.large-button,table.medium-button,table.small-button,table.tiny-button{width:100%;overflow:hidden}table.button td,table.large-button td,table.medium-button td,table.small-button td,table.tiny-button td{display:block;width:auto!important;text-align:center;background:#082952;border:1px solid #2284a1;color:#fff;padding:8px 0}table.button:active td,table.button:hover td,table.button:visited td,table.large-button:hover td,table.medium-button:hover td,table.small-button:hover td,table.tiny-button:hover td{background:#2795b6!important}table.tiny-button td{padding:5px 0 4px}table.small-button td{padding:8px 0 7px}table.medium-button td{padding:12px 0 10px}table.large-button td{padding:21px 0 18px}table.button td a,table.large-button td a,table.medium-button td a,table.small-button td a,table.tiny-button td a{font-weight:700;text-decoration:none;font-family:Helvetica,Arial,sans-serif;color:#fff;font-size:16px}table.button td a:visited,table.button:active td a,table.button:hover td a,table.button:visited td a,table.large-button td a:visited,table.large-button:active td a,table.large-button:hover td a,table.medium-button td a:visited,table.medium-button:active td a,table.medium-button:hover td a,table.small-button td a:visited,table.small-button:active td a,table.small-button:hover td a,table.tiny-button td a:visited,table.tiny-button:active td a,table.tiny-button:hover td a{color:#fff!important}table.tiny-button td a{font-size:12px;font-weight:400}table.small-button td a{font-size:16px}table.medium-button td a{font-size:20px}table.large-button td a{font-size:24px}table.secondary td{background:#e9e9e9;border-color:#d0d0d0;color:#555}table.secondary td a{color:#555}table.secondary:hover td{background:#d0d0d0!important;color:#555}table.secondary td a:visited,table.secondary:active td a,table.secondary:hover td a{color:#555!important}table.success td{background:#5da423;border-color:#457a1a}table.success:hover td{background:#457a1a!important}table.alert td{background:#c60f13;border-color:#970b0e}table.alert:hover td{background:#970b0e!important}table.radius td{-webkit-border-radius:3px;-moz-border-radius:3px;border-radius:3px}table.round td{-webkit-border-radius:500px;-moz-border-radius:500px;border-radius:500px}body.outlook p{display:inline!important}@media only screen and (max-width:600px){table[class=body] img{width:auto!important;height:auto!important}table[class=body] center{min-width:0!important}table[class=body] .container{width:95%!important}table[class=body] .row{width:100%!important;display:block!important}table[class=body] .wrapper{display:block!important;padding-right:0!important}table[class=body] .column,table[class=body] .columns{table-layout:fixed!important;float:none!important;width:100%!important;padding-right:0!important;padding-left:0!important;display:block!important}table[class=body] .wrapper.first .column,table[class=body] .wrapper.first .columns{display:table!important}table[class=body] table.column td,table[class=body] table.columns td{width:100%!important}table[class=body] .column td.one,table[class=body] .columns td.one{width:8.333333%!important}table[class=body] .column td.two,table[class=body] .columns td.two{width:16.666666%!important}table[class=body] .column td.three,table[class=body] .columns td.three{width:25%!important}table[class=body] .column td.four,table[class=body] .columns td.four{width:33.333333%!important}table[class=body] .column td.five,table[class=body] .columns td.five{width:41.666666%!important}table[class=body] .column td.six,table[class=body] .columns td.six{width:50%!important}table[class=body] .column td.seven,table[class=body] .columns td.seven{width:58.333333%!important}table[class=body] .column td.eight,table[class=body] .columns td.eight{width:66.666666%!important}table[class=body] .column td.nine,table[class=body] .columns td.nine{width:75%!important}table[class=body] .column td.ten,table[class=body] .columns td.ten{width:83.333333%!important}table[class=body] .column td.eleven,table[class=body] .columns td.eleven{width:91.666666%!important}table[class=body] .column td.twelve,table[class=body] .columns td.twelve{width:100%!important}table[class=body] td.offset-by-eight,table[class=body] td.offset-by-eleven,table[class=body] td.offset-by-five,table[class=body] td.offset-by-four,table[class=body] td.offset-by-nine,table[class=body] td.offset-by-one,table[class=body] td.offset-by-seven,table[class=body] td.offset-by-six,table[class=body] td.offset-by-ten,table[class=body] td.offset-by-three,table[class=body] td.offset-by-two{padding-left:0!important}table[class=body] table.columns td.expander{width:1px!important}table[class=body] .right-text-pad,table[class=body] .text-pad-right{padding-left:10px!important}table[class=body] .left-text-pad,table[class=body] .text-pad-left{padding-right:10px!important}table[class=body] .hide-for-small,table[class=body] .show-for-desktop{display:none!important}table[class=body] .hide-for-desktop,table[class=body] .show-for-small{display:inherit!important}}</style><style>table.facebook td{background:#3b5998;border-color:#2d4473}table.facebook:hover td{background:#2d4473!important}table.twitter td{background:#00acee;border-color:#0087bb}table.twitter:hover td{background:#0087bb!important}table.google-plus td{background-color:#DB4A39;border-color:#C00}table.google-plus:hover td{background:#C00!important}.template-label{color:#fff;font-weight:700;font-size:14px}.callout .panel{background:#ECF8FF;border-color:#b9e5ff}.header{background:#082952}.footer .wrapper{background:#ebebeb}.footer h5{padding-bottom:10px}table.columns .text-pad{padding-left:10px;padding-right:10px}table.columns .left-text-pad{padding-left:10px}table.columns .right-text-pad{padding-right:10px}@media only screen and (max-width:600px){table[class=body] .right-text-pad{padding-left:10px!important}table[class=body] .left-text-pad{padding-right:10px!important}}' 

+'</style><style>' +

//Template Custom CSS
'.event{border:1px solid #DDD;padding-bottom:10px!important}.events-listings{padding:0}.events-listings .wrapper{padding-top:0}.wmp-color{background:#6E8FB8}.event-description{padding:8px 10px!important}.event-name{padding:4px 10px 5px!important;font-size:16px}.event-header {padding-bottom:0;}.event-group,.event-type{font-weight:700;width:72%;text-transform:uppercase}.event-header table{padding-right:5px;border:solid #AAA!important;border-width:1px 1px 0 1px!important}.event-type{font-size:15px;padding:10px 0 0 10px!important}.event-group{width:50%;font-size:18px;line-height:20px;padding:3px 0 0 10px!important;text-transform:uppercase}.event-date{font-size:19px;padding:14px 13px 0 0!important; text-align:right}.event-image{padding:4px 10px!important}.event-loc{font-size:14px;padding-top:20px}.event-loc span{font-weight:700;font-size:16px}.meetup-left{width:50%;padding:0 5px!important}.meetup-right{width:50%;padding:0 5px!important}.meetup-left table,.meetup-right table {width:100%}.meetup-left div,.meetup-right div{width:100%; padding: 0 0 0 10px}.meetup-cell{padding: 0 10px 0 !important; border: solid #AAA; border-width:0 1px}.event-name table{border: solid #AAA; border-width: 0 1px} .event-name .meetup-cell{border: solid #082952; border-width: 0 0 2px 0}.event-images .meetup-left table, .event-images .meetup-right table{border: solid #AAA; border-width: 0 1px}.event-link .meetup-cell{background: #082952;padding: 11px 0 9px !important;font-size:16px;font-weight:600; border: 0}.button tr{padding:0 25px;display:block}.meet-expander table{border: solid #AAA; border-width: 0 1px 1px;}.event-group,.event-name,' + 

  '</style></head>\
<body>\
  <table class="body"><tr><td class="center" align="center" valign="top"><center>\
          <table class="row" style="background: #082952;"><tr style="background: #082952;"><td class="center header" align="center"><center>\
              <table class="container"><tr><td class="wrapper last">\
                  <table class="twelve columns"><tr><td class="six sub-columns"><img src="wmpLogo.png"></td><td class="six sub-columns last" style="text-align:right; vertical-align:middle;"><span class="template-label">TECHNOLOGY</span></td><td class="expander"></td></tr></table>\
              </td></tr></table>\
          </center></td></tr></table>\
            <br>\
            <table class="row"><tr><td class="center" align="center"><center>\
                 <table class="container"><tr><td><!-- content start -->\
                    <table class="row"><tr><td class="wrapper last">\
                        <table class="twelve columns"><tr><td><h2 style="border-bottom: solid 3px #082952;">Upcoming Events and Meet Ups</h2></td><td class="expander"></td></tr></table>\
                    </td></tr></table>\
              <br>  <!-- Break Tag for row -->\
					<table class="row"><tbody><tr> <td>' + this.weeklyMessage + '</td></tr></tbody></table>';
					this.htmlBlocks.push(topBlock);
  };   
  
 this.generateMeetups = function(meetupsList){
    var meetupCodeBlock = [];
    
    var featuredMeetups = $.grep(meetupsList, function(e){
          return e.featured = true;
    });
    var regularMeetups = $.grep(meetupsList, function(e){
          return e.featured = false;
    });
    var farOutMeetups = $.grep(meetupsList, function(e){
          return e.date > 1;
    });
    if(featuredMeetups.length > 0){
      meetupCodeBlock = addFeaturedHeader();
      for( var i=0; (i*2) < featuredMeetups.length; i++){
        var meetup1 = featuredMeetups[(i*2)];
        var meetup2 = featuredMeetups[i*2+1] ? featuredMeetups[i*2] : null;
        meetupCodeBlock += (addMeetupRow(meetup1, meetup2));
      }
    }
    if(regularMeetups.length > 0){//delete this if later
      meetupCodeBlock.push(addRegularHeader());
      for( var i=0; (i*2) <= regularMeetups.length; i++){
        var meetup1 = regularMeetups[(i*2)];
        var meetup2 = regularMeetups[i*2+1] ? regularMeetups[i*2] : null;
        meetupCodeBlock += (addMeetupRow(meetup1, meetup2));
      }  
    }//delete this if later
    if(farOutMeetups.length>0){
      meetupCodeBlock.push(addFarOutHeader());
      for( var i=0; (i*2) <= farOutMeetups.length; i++){
        var meetup1 = farOutMeetups[(i*2)];
        var meetup2 = farOutMeetups[i*2+1] ? farOutMeetups[i*2] : null;
        meetupCodeBlock += append(addMeetupRow(meetup1, meetup2));
      }  
    }
    
    this.htmlBlocks.push(meetupCodeBlock);
}       
	
  
function addFeaturedHeader(){
  var htmlBlock = '<table class="row"><tr><td class="wrapper last"> \
                    <table class="twelve columns"><tr><td>\
                      <h4 class="subtitle" style="border-bottom: solid 3px #082952;">Featured Meet Ups</h2>\
                    </td><td class="expander"></td></tr></table>\
                  </td></tr></table>';
  return htmlBlock;
}

function addRegularHeader(){
  var htmlBlock = '<table class="row"><tr><td class="wrapper last"> \
                    <table class="twelve columns"><tr><td>\
                      <h4 style="border-bottom: solid 3px #082952;">This Week</h3>\
                    </td><td class="expander"></td></tr></table>\
                  </td></tr></table>';
  return htmlBlock;
}

function addFarOutHeader(){
  var htmlBlock = '<table class="row"><tr><td class="wrapper last"> \
                    <table class="twelve columns"><tr><td>\
                      <h4 style="border-bottom: solid 3px #082952;">On the Horizon</h3>\
                    </td><td class="expander"></td></tr></table>\
                  </td></tr></table>';
  return htmlBlock;
}

function addMeetupRow(meetup1, meetup2){
        
    if(meetup2 != null){
        meetup2.eventHeader = ' <table><tr>\
                          <td class="event-type">'+ meetup2.eventType + '</td>\
                          <td class="event-date" rowspan="2">'+ meetup2.eventDate + '&nbsp;</td>\
                        </tr></table>\
                        ';
        meetup2.eventImageAndLocation = '<td class="event-image"><img src="'+ meetup2.eventImage + '" alt="Chicago .NET Mobile Developers" width="110" height="110" /></td>\
        <td>'+ meetup2.eventAddress + '</p></td>\
        ';
        meetup2.eventMoreInfo = '<a href="'+ meetup2.url +'">Find out more</a>';
        
    }
    var htmlBlock = '<table class="row events-listings"><tr class="event-headers"><td class="wrapper">\
                      <table class="twelve columns"><tr><td class="event-header meetup-left">\
                        <table><tr>\
                          <td class="event-type">'+ meetup1.eventType +'</td>\
                          <td class="event-date" rowspan="2">'+meetup1.eventDate.getMonth()+'/'+meetup1.eventDate.getDate() +'&nbsp;\
                          </td></tr>\
                    	    <tr><td style="height:5px;"></td>\
                        </tr></table>\
                      </td>\
                      <td class="event-header meetup-right">\
                        ' + (meetup2 ? meetup2.eventHeader:'&nbsp;') + '\
                      </td></tr></table>\
                      </td></tr>\
                      <tr class="event-group-names"><td class="wrapper">\
                        <table class="twelve columns"><tr>\
                          <td class="event-group meetup-left" ><table><tr><td class="meetup-cell">'+ meetup1.group +'</td></tr></table></td>\
                          <td class="event-group meetup-right" ><table><tr>'+ (meetup2 ? '<td class="meetup-cell">'+meetup2.group+'</td>':'&nbsp;') +'</tr></table>\</td>\
                      </tr></table>\
                    </td></tr>\
                    <tr class="event-names"><td class="wrapper">\
                      <table class="twelve columns"><tr>\
                          <td class="event-name meetup-left"><table><tr><td class="meetup-cell"><span>'+ meetup1.eventTitle+ '</span></td></tr></table></td>\
                          <td class="event-name meetup-right"><table><tr>'+ (meetup2 ? '<td class="meetup-cell"><span>'+meetup2.eventTitle+'</span></td>':'&nbsp;')+ '</tr></table></td>\
                      </tr></table>\
                    </td></tr>\
                    <tr class="event-images"><td class="wrapper">\
                      <table class="twelve columns"><tr><td class="meetup-left">\
                        <table><tr>\
                          <td class="event-image meetup-cell-l"><img src="'+ meetup1.groupIcon +'" width="110" height="110" /></td>\
                          <td><p class="event-loc meetup-cell-r"><br /><span>'+meetup1.eventDate.getMonth()+'/'+meetup1.eventDate.getDay() +'</span> <br />'+meetup1.EventAddress+'</p></td>\
                        </tr></table>\
                      </td><td class="meetup-right">\
                        <table><tr>\
                          <td class="event-image meetup-cell-l">'+(meetup2 ? '<img src="'+ meetup2.groupIcon+'" alt="Chicago .NET Mobile Developers" width="110" height="110" />':'&nbsp;')+'</td>\
                          <td><p class="event-loc meetup-cell-r"><br /><span>'+(meetup2 ? meetup2.eventDate:'&nbsp;')+' </span> <br />'+(meetup2 ? meetup2.EventAddress:'')+'</p></td>\
                        </tr></table>\
                      </td></tr></table>\
                    </td></tr>\
                    <tr class="event-descriptions"><td class="wrapper">\
                      <table class="twelve columns"><tr>\
                        <td class="event-description meetup-left"><table><tr><td class="meetup-cell">'+meetup1.eventDesc+'</td></tr></table></td>\
                        <td class="event-description meetup-right"><table><tr>'+(meetup2 ? '<td class="meetup-cell">'+meetup2.eventDesc+'</td>':'&nbsp;')+'</tr></table></td>\
                      </tr></table>\
                    </td></tr>\
                    <tr class="event-links"><td class="wrapper">\
                      <table class="twelve columns"><tr>\
                        <td class="event-link meetup-left"><table><tr><td class="meetup-cell center"><a href="'+meetup1.url+'">Find out more</a></td></tr></table></td>\
                        <td class="event-link meetup-right"><table><tr>'+(meetup2 ? '<td class="meetup-cell center"><a href="'+meetup2.url+'">Find out more</a></td>' : '') + '</td></tr></table></td>\
                      </tr></table>\
                    </td></tr>\
                    <tr class="event-spacers"><td class="wrapper">\
                      <table class="twelve columns"><tr>\
                        <td class="meet-expander meetup-left"><table><tr><td>&nbsp;</td></tr></table></td>\
                        <td '+ (meetup2 ? 'class="meet-expander meetup-right"><table><tr><td>&nbsp;</td></tr></table>' : '>') +'</td>\
                      </tr></table>\
                   </td></tr></table>';
                       
                 
               return htmlBlock;                          
}

this.templateClose = function(){
  var htmlBlock = '</td></tr></table></table></center>\
                  </td></tr></table><br><br>\
                  <!-- Legal + Unsubscribe -->\
                  <table class="row"><tr><td class="wrapper last">\
                    <table class="twelve columns"><tr><td align="center"><center>\
                      <p style="text-align:center;">&#169; 2015 West Monroe Partners, LLC </p>\
                    </center></td><td class="expander"></td></tr></table>\
                  </td></tr></table>\
                  <!-- container end below -->\
                  </td></tr></table>\
                </center></td></tr></table>\
              </body></html>'; 
  this.htmlBlocks.push(htmlBlock);
};
  
};




$.templateCode = new templateCode();
});