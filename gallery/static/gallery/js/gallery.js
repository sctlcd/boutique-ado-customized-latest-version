// trigger the click event on each #multi-item-carousel .card elements
$("#multi-item-carousel .card").each(function() {
  $(this).click(function(){
    $("#modal").modal("show");
  });
});

// show.bs.modal event fires when the modal id element is about to be displayed
$('#modal').on('shown.bs.modal', function () {
  // Pauses the cycling of the multi-item-carousel id element
  $('#multi-item-carousel').carousel('pause');
});

// hidden.bs.modal event fires when the modal id element is completely hidden
$('#modal').on('hidden.bs.modal', function () {
  // Resumes the cycling of the multi-item-carousel id element
  $('#multi-item-carousel').carousel('cycle');
});
