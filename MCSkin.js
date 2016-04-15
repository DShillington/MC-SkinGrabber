/* 
 * Script to grab the player skin
 *-papertazer
 */
 
function AddEvent(html_element, event_name, event_function) {       
   if(html_element.attachEvent)
      html_element.attachEvent("on" + event_name, function() {event_function.call(html_element);}); 
   else if(html_element.addEventListener)
      html_element.addEventListener(event_name, event_function, false); 
}
 
function getSkin() {
    var input = document.getElementById("input").value;
    var url = "http://skins.minecraft.net/MinecraftSkins/" + input + ".png";
    document.getElementById("actualSkin").src = url;
}
 
function load() {
    AddEvent(document.getElementById("btn"), "click", getSkin);
    AddEvent(document.getElementById("skinGetterForm"), "submit", function() {
    getSkin();
    return false;
    });
}