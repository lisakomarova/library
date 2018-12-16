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
$(document).ready(function(){
    var table = "<table>";
    $.ajax({
        type:"GET",
        url:"../xml/javascript.xml",
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
            $('.JavaScript').append(table);
        }        
    })
});
$(document).ready(function(){
    var table = "<table>";
    $.ajax({
        type:"GET",
        url:"../xml/cplusplus.xml",
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
            $('.C_plus_plus').append(table);
        }        
    })
});
$(document).ready(function(){
    var table = "<table>";
    $.ajax({
        type:"GET",
        url:"../xml/linux.xml",
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
            $('.linux').append(table);
        }        
    })
});
$(document).ready(function(){
    var table = "<table>";
    $.ajax({
        type:"GET",
        url:"../xml/russian.xml",
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
            $('.russian').append(table);
        }        
    })
});
$(document).ready(function(){
    var table = "<table>";
    $.ajax({
        type:"GET",
        url:"../xml/english.xml",
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
            $('.english').append(table);
        }        
    })
});
$(document).ready(function(){
    var table = "<table>";
    $.ajax({
        type:"GET",
        url:"../xml/bstu.xml",
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
            $('.bstu').append(table);
        }        
    })
});