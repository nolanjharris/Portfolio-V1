var ids = ['contactdiv', 'portfoliodiv', 'aboutdiv'];
var activeMenu;
function hideOtherMenus(id) {
  var otherMenus = ids.filter(function(i) {
    return i !== id;
  });
  otherMenus.forEach(function(i) {
    if(i === "portfoliodiv"){
    	$('#' + i).hide('slide', {direction: 'left'}, 1000); 
    }
    else {
    	$('#' + i).hide('slide', {direction: 'right'}, 1000);
    }       
  });
}

function showInfo(id) {
  if(id === 'contactdiv') {
    ['contactinfo1', 'contactinfo2'].forEach(function(i) {
      if(i === "contactinfo1"){
      	$('#' + i).show('slide', {direction: 'left'}, 1000);     
      } else {
      	$('#' + i).show('slide', {direction: 'right'}, 1000);     
      }
    });
  }
  if(id === 'aboutdiv') {
    ['aboutinfo1', 'aboutinfo2'].forEach(function(i) {
      if(i === 'aboutinfo2'){
      	$('#' + i).show('slide', {direction: 'left'}, 1000);
      } else {
      	$('#' + i).show('slide', {direction: 'right'}, 1000);           	
      }
    });
  }  
  if(id === 'portfoliodiv') {
    ['portfolioinfo1', 'portfolioinfo2'].forEach(function(i) {
      $('#' + i).show('slide', {direction: 'left'}, 1000);     
    });
  }
}


$('.menuItem').click(function(){
  activeMenu = this.id;
  hideOtherMenus(activeMenu);
  showInfo(activeMenu);
  $('#menutoggler').show('pulsate', 1000);
});

$('#menutoggler').click(function(){
  if (activeMenu === 'contactdiv') {
    $('#contactinfo2').hide('slide', {direction: 'right'}, 1000, function(){
        $('#portfoliodiv').show('slide', {direction: 'left'}, 1000);
    });
    $('#contactinfo1').hide('slide', {direction: 'left'}, 1000, function(){
        $('#aboutdiv').show('slide', {direction: 'right'}, 1000);
    });
  }
  if (activeMenu === 'aboutdiv') {
    $('#aboutinfo1').hide('slide', {direction: 'right'}, 1000, function(){
        $('#portfoliodiv').show('slide', {direction: 'left'}, 1000);
    });
    $('#aboutinfo2').hide('slide', {direction: 'left'}, 1000, function(){
        $('#contactdiv').show('slide', {direction: 'right'}, 1000);
    });
  }
  if (activeMenu === 'portfoliodiv') {
    $('#portfolioinfo1').hide('slide', {direction: 'left'}, 1000, function(){
        $('#aboutdiv').show('slide', {direction: 'right'}, 1000);
    });
    $('#portfolioinfo2').hide('slide', {direction: 'left'}, 1000, function(){
        $('#contactdiv').show('slide', {direction: 'right'}, 1000);
    });
  }
  $('#menutoggler').hide('pulsate', 1000);
});