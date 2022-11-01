var expanded=false;

function showSelect(){
    var select=document.getElementById("liveSelect");
    if(!expanded){
        select.style.display="block";
        expanded=true;
    }else{
        select.style.display="none";
        expanded=false;
    }

    $("#filter").on('keyup', function () {
        var val = $('#filter').val().toLowerCase();

        $("#liveSelect li").filter(function() {
          $(this).toggle($(this).text().toLowerCase().indexOf(val) > -1);
        })

      });

      $("#liveSelect .option").click(function() {
        var selected = $(this);
        $("#filter").val(selected.text());
      });
}