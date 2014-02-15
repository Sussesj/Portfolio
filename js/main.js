 //--------------------------------------sideNav------------------------------------------------
 //create function w. parameter id
function toggle_visibility(id) {
  //store navContent in variable theList
  var thelist = document.getElementsByClassName("navContent");
  //loop through the elements in the list and set style to display none
  for(var i = 0; i <thelist.length; i++) {
    thelist[i].style.display = 'none';
  }

  //create a variable to hold the grabId
  var e = document.getElementById(id);
  //take the grabId we put into the function when it is called and assign block to it. 
  if(e.style.display == 'block') {
    e.style.display = 'none';
  } else {
    e.style.display = 'block';
  }
}



 //------------------------------------Mozilla Project-----------------------------------------------

 var QTABS = {
          
            init: function () {
            
              // attached onload and change event to address plugin
              $.address.init(function(event) {
                
                // first load, set panel
                QTABS.setPanel(event);
                  
              }).change(function(event) {

                // if the url changes, set panel
                QTABS.setPanel(event);      

              });
            
            },
            
            // the core function to display correct panel
            setPanel: function (event) {
            
              // grab the hash tag from address plugin event
              var hashtag = event.pathNames[0];
              
              // get the correct tab item, if no hashtag, get the first tab item
              var tab = (hashtag) ? $('#tabs li a[href=#' + hashtag + ']') : $('#tabs li:first a');

              // reset everything to default
              $('#tabs li').removeClass('active');
              $('#panels .panel').hide();

              // if hashtag is found
              if (hashtag) {
                
                // set current tab item active and display correct panel
                tab.parent().addClass('active');
                $('#panels .panel:eq(' + (tab.parent().index()) + ')').show();      
                
              } else {

                // set the first tab item and first panel       
                $('#tabs li:first').addClass('active');
                $('#panels .panel:first').show();     
              
              }
              
              // change the page title to current selected tab
              document.title = tab.attr('title');
              
            }
          
          }
          
          // Execute this script!
          QTABS.init();
          
   
//-----------------------------------------Heartphones gallery!---------------------------------------

//create two arrays to hold the tab link elements and the content divs
var tabLinks = new Array();
var contentDivs = new Array();

//init is called when the page loads
function init() {

      // Grab the tab links and content divs from the page
      var tabListItems = document.getElementsByClassName('subTabs')[0].childNodes;
      //go through loop
      for ( var i = 0; i < tabListItems.length; i++ ) {
        //if one of the child elements in the ul class subTabs is an li then
        if ( tabListItems[i].nodeName == "LI" ) {
          //run function getFirstChildWithTagName to return the child element == the individual a's. 
          var tabLink = getFirstChildWithTagName( tabListItems[i], 'A' );
          //run function getHash with parameters and take the attribute href to find the id after the #
          var id = getHash( tabLink.getAttribute('href') );
          //Adds the a's to the tabLink array
          tabLinks[id] = tabLink;
          //add's the id's after the # to the contend div array. 
          contentDivs[id] = document.getElementById( id );
        }
      }

      // Assign onclick events to the tab links, and
      // highlight the first tab
      var i = 0;

      for ( var id in tabLinks ) {
        tabLinks[id].onclick = showTab;
        tabLinks[id].onfocus = function() { this.blur() };
        if ( i == 0 ) tabLinks[id].className = 'selected';
        i++;
      }

      // Hide all content divs except the first
      var i = 0;

      for ( var id in contentDivs ) {
        if ( i != 0 ) contentDivs[id].className = 'tabContent hide';
        i++;
      }
    }

//is called whenever a tab link is clicked 

function showTab() {
      var selectedId = getHash( this.getAttribute('href') );

      // Highlight the selected tab, and dim all others.
      // Also show the selected content div, and hide all others.
      for ( var id in contentDivs ) {
        if ( id == selectedId ) {
          console.log(tabLinks[id]);
          console.log(contentDivs[id]);
          tabLinks[id].className = 'selected';
          contentDivs[id].className = 'tabContent';
        } else {
          console.log(tabLinks[id]);
          console.log(contentDivs[id]);
          tabLinks[id].className = '';
          contentDivs[id].className = 'tabContent hide';
        }
      }

      // Stop the browser following the link
      return false;
    }

function getFirstChildWithTagName( element, tagName ) {
      for ( var i = 0; i < element.childNodes.length; i++ ) {
        //if the element is a a link the retun the node. 
        if ( element.childNodes[i].nodeName == tagName ) return element.childNodes[i];
      }
    }

function getHash( url ) {
      //looks for the element after #
      var hashPos = url.lastIndexOf ( '#' );
      //returns it to a string, add's one to add it to the next position
      return url.substring( hashPos + 1 );
    }


