const name = prompt("Enter the name");
const id = prompt("Enter the id");
$('.name').text(name);
$('.num').text(id);
const org = prompt("Enter the name of Organization");
$('.institute').text(org);
const pos = prompt("Enter the address");
$('.location').text(pos);
const time=prompt("Enter the duration");
$('.duration').text(time);

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
  
  $(function() {
    // Initialize the Datepicker widgets
    $("#startDatePicker").datepicker();
    $("#endDatePicker").datepicker();
  
    // Handle the change event for the start date
    $("#startDatePicker").on("change", function() {
      updateStartDate($(this).datepicker("getDate"));
    });
  
    // Handle the change event for the end date
    $("#endDatePicker").on("change", function() {
      updateEndDate($(this).datepicker("getDate"));
    });
  
    // Function to update the start date
    function updateStartDate(date) {
      // Convert the date to a desired format
      var formattedDate = date.toLocaleDateString("en-US");
  
      // Update the span element with the new date
      $(".startDate").text(formattedDate);
    }
  
    // Function to update the end date
    function updateEndDate(date) {
      // Convert the date to a desired format
      var formattedDate = date.toLocaleDateString("en-US");
  
      // Update the span element with the new date
      $(".endDate").text(formattedDate);
    }
  });
  
  
