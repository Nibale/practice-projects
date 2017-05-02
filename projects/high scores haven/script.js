function msgGenerator() {
    var trashTalks= ["go out","you are loser","you are out"];
    var index= Math.floor(Math.random() * trashTalks.length);
    return trashTalks[index];
    
}
 $("#click").on("click", function () {
    var name = $("#name").val();
    var game = $("#game").val();
    var date = $("#date").val();
    var score = $("#score").val();
     var trashTalks= msgGenerator();
    $("#gameList").append(`
<tr>
<td class="text center">${name}</td>
<td class="text center">${game}</td>
<td class="text center">${date}</td>
<td class="text center">${score}</td>
<td class="text center">${trashTalks}</td>


</tr>`)
    $("#name").val("");
    $("#game").val("");
    $("#date").val("");
    $("#score").val("");
 
})

var data = []
$(document).keypress(function (e) {
    if (e.keyCode === 13) {
        var name = $("#name").val();
        var game = $("#game").val();
        var date = $("#date").val();
        var score = $("#score").val();
        var checkbox= $("#check-box").is(":checked");
        if (checkbox===true){
            var index= msgGenerator()
        }else{
            var index= ""
        }
        
        
        $("#gameList").append(`
<tr>
<td class="text center">${name}</td>
<td class="text center">${game}</td>
<td class="text center">${date}</td>
<td class="text center">${score}</td>

</tr>`)

$("#name").val("");
    $("#game").val("");
    $("#date").val("");
    $("#score").val("");
    }
})
