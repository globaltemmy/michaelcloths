var serviceURL =  "http://localhost/gb_services/";
var members;
var units;

function allstaffmembers() {
	$.getJSON(serviceURL + 'getmembers.php', function(data) {
		$('#members_list li').remove();
		members = data;
		$.each(members, function(index, member) {
			$('#members_list').append('<li><a href="#">' +
					'<img src="images/member.png"/>'+
					'<h4>'+member.m_name+'</h4>'+
					'<p>'+member.job+'</p>' +
					'<br>'+
					'<p>'+member.unit+'</p>'+
					'</a></li>');
		});
		$('#members_list').listview('refresh');
		
	});
	
}


function allunits() {
	$.getJSON(serviceURL + 'getunits.php', function(data) {
		$('#units_list li').remove();
		units = data;
		$.each(units, function(index, unit) {
			$('#units_list').append('<li><a href="#">' +
					'<h4>'+unit.unit_name+'</h4>'+
					'<p>'+unit.unit_head+'</p>' +
					'<br>'+
					'<p>Staff count: '+unit.unit_count+'</p>'+
					'</a></li>');
		});
		$('#units_list').listview('refresh');
		
	});
	
}


$('#home').live('pageshow', function(event) {
	
	allstaffmembers();

});

$('#unit').live('pageshow', function(event) {
	
	allunits();

});

$('#add').live('pageshow', function(event) {
	
	$('#submit').click(function (){
	
  var unitform = $.ajax({  
  url: (serviceURL + 'addmembers.php'),
  type: "GET",  
  data: {
	  m_name: $('#m_name').val(),
      unit: $('#unit').val(),
      job: $('#job').val()

        },
   datatype:"json"
   
    });
	
	 unitform.done(function (response, textStatus, jqXHR) {
	 	alert('member added');
});  
  
  });
});