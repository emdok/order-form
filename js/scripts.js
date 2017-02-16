$(document).ready(function(){
  $("form").submit(function(event){
    var fullNameInput = $("input#fullName").val();
    var shippingAddressInput = $("input#shippingAddress").val();

    $(".receiptName").text(fullNameInput);
    $(".receiptAddress").text(shippingAddressInput);

    $("#receipt").show();

    event.preventDefault();
  });
});
