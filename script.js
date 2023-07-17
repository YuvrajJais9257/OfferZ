const name = prompt("Enter the name");
const id = prompt("Enter the id");
$('.name').text(name);
$('.num').text(id);
const org = prompt("Enter the name of Organization");
$('.institute').text(org);
const pos = prompt("Enter the address");
$('.location').text(pos);

$(document).ready(function() {
    $('#imageUpload1').change(function(e) {
      handleImageUpload(e, '.title-img');
    });
  
    $('#imageUpload2').change(function(e) {
      handleImageUpload(e, '.stamp img');
    });
  
    $('#imageUpload3').change(function(e) {
      handleImageUpload(e, '.sign img');
    });
  
    function handleImageUpload(e, targetElement) {
      var file = e.target.files[0];
      var reader = new FileReader();
  
      reader.onload = function(e) {
        $(targetElement).attr('src', e.target.result);
      }
  
      reader.readAsDataURL(file);
    }
  });
  