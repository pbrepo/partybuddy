// Our Custom JS
$(document).ready(function () {
  //your code here

  	Vue.component('home', {
  	    template: "#app-home",
  	    data: function(){
  	    	return {
  	    		activeApp: this.$parent.activeApp
  	    	}
  	    },
  	    created: function(){
  	   //  	$.ajax({url: "demo_test.txt", success: function(result){
		    //     $("#div1").html(result);
		    // }});

		    var url = "https://script.googleusercontent.com/macros/echo?user_content_key=W7BvhSKyy5q2IiTaB2jhBu7OsZwmnwcHh1lD5WetIEc39_vW8q_NwAlMtBd_T9Q81impLeDoY9DPOm0mGrn42UQjeMk9P-1DOJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMWojr9NvTBuBLhyHCd5hHa1GhPSVukpSQTydEwAEXFXgt_wltjJcH3XHUaaPC1fv5o9XyvOto09QuWI89K6KjOu0SP2F-BdwU7EaEvDNSOQ4d6PC3BzaT-kwkN3YbF9N2128NPy5QAK79o-652FNHXu03yE8c7I9r5y7FLqOV0Tk27B8Rh4QJTQ&lib=MnrE7b2I2PjfH799VodkCPiQjIVyBAxva";
		    var details = {};

		    $.get(url, function( data ) {
		    	details = data['Sheet1'];
		      	for (var i in details){
		      		console.log(details[i]);
		      	}
		    });
  	    }
  	});

    var App = new Vue({
    	el: '#app',
    	data: function () {
        	return {
        		activeApp: 'Home',
        	}
    	}
    })

});