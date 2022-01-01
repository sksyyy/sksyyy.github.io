/// <reference path="runeappslib.js">
/// <reference path="imagedetect.js">
/// <reference path="https://runeapps.org/apps/alt1/alt1api.html">

if(window.alt1 && alt1.versionint > 1001000)
{
    alt1.identifyAppUrl("appconfig.json");
}

//i'm crippled without this function
function elid(id)
{
    return document.getElementById(id);
}


function Setup(){
    var rs = a1lib.bindfullrs();
    console.log(rs);
    var region = a1lib.bindregion(rs.x, rs.y, rs.width, rs.height);
    console.log(region);
}