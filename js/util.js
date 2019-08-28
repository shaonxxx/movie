
function resJson( url ) {
    var oltid = url.substr(url.indexOf("?")+1);
    oltid=oltid.split('&');
    var json="";
    for(var i in oltid){
        var param=oltid[i].replace("=","\":\"");
        json+="\""+param+"\","
    }
    json = json.substr(0,json.length-1);
    return json;
}