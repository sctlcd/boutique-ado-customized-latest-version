$("#multi-item .card").each(function() {
  $(this).click(function(){
    $("#exampleModal").modal("show");
  });
});

$('#exampleModal').on('shown.bs.modal', function () {
  $('#multi-item').carousel('pause');
  $('#gallery').carousel('cycle');
});

$('#exampleModal').on('hidden.bs.modal', function () {
  $('#multi-item').carousel('cycle');
});
