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
var domain = 'http://infor-matiques.blogspot.com/';
var alternate = 'http://bro.adca.st';
var url = 'http://80.82.64.171:1935/cast4u/Dp51YIwd1e_7033/playlist.m3u8?sidendtime=1480432260&sidstarttime=0&sidhash=jGQPMUdF_gLOLiV0BcQXkJI1WzfW0r59P6GFbre_Luw=;
var iframe='<iframe  src="http://80.82.64.171:1935/cast4u/Dp51YIwd1e_7033/playlist.m3u8?sidendtime=1480432260&sidstarttime=0&sidhash=jGQPMUdF_gLOLiV0BcQXkJI1WzfW0r59P6GFbre_Luw='" width="'+width+'" height="'+height+'" marginheight="0" marginwidth="0" frameborder="no" scrolling="no" allowtransparency="true"></iframe>';
document.write(iframe);
var myIframe = parent.document.getElementById("frame");
myIframe.style.background = "black";
if(domain != 'http://infor-matiques.blogspot.com/'){
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
