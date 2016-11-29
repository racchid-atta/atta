if(typeof(width)=="undefined"){
var width = '640';
}
if(typeof(height)=="undefined"){
var height = '480';
}
if(typeof(stretching)=="undefined"){
var stretching = 'uniform';
}
if(typeof(p)=="undefined"){
var p = '1';
}
if(typeof(c)=="undefined"){
var c = '0';
}
var domain = 'http://bro.adca.st';
var alternate = 'http://bro.adca.st';
var url = '/stream.php?id='+id+'&cache=4&width='+width+'&height='+height+'&stretching='+stretching+'&p='+p+'&c='+c;
var iframe='<iframe id="frame" src="'+domain+url+'" width="'+width+'" height="'+height+'" marginheight="0" marginwidth="0" frameborder="no" scrolling="no" allowtransparency="true"></iframe>';
document.write(iframe);
var myIframe = parent.document.getElementById("frame");
myIframe.style.background = "black";
if(domain != 'http://bro.adca.st'){
    var oXHR = new XMLHttpRequest();
    oXHR.open('GET', domain+'/check/check.js', true);
    oXHR.onreadystatechange = function (oEvent) {  
        if (oXHR.readyState === 4) {  
            if (oXHR.status !== 200) {    
                myIframe.src = alternate+url;
            }  
        }
    }; 
    oXHR.send(null);  
}
