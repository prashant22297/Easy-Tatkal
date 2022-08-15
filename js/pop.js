$(document).ready(function(){
    	chrome.runtime.sendMessage({ool: "eAcI",data:"key_rt"}, function(e) {
									 
						if(e.dA){
                                            $("#dis").show();$("#info").hide();
                                      }else{
                                           $("#dis").hide();
                                           $("#info").show();
                                      }
                                      
                                            });
    $("#dis").click(function(){
     	chrome.runtime.sendMessage({ool: "dA"},function(){window.location.reload();});
    });
      $("#open").click(function(){
     	chrome.runtime.sendMessage({ool: "open"},function(){});
    });
});