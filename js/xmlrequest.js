$(document).ready(function(){
    var table = "<table>";
    $.ajax({
        type:"GET",
        url:"../xml/csharp.xml",
        dataType:"xml",
        success:function(xml){

            var events = xml.children[0].children;

            $.each(events, function(){
                var event = $(this);
                var name=event.find("AUTHOR").text();
                var date=event.find("TITLE").text();
                var place=event.find("LINK").text();
                table +='<tr><td> <a href = "' + place + '">'+ name +' - '+ date +'</a></td></tr>';
            })    

            table += "</table>"
            $('.csharp').append(table);
        }        
    })
});