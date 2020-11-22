
function submitPanelShowValues(values) {
  $("#submit-panel").empty();
  values.forEach(value => {
    $("#submit-panel").append(`<p>${value.name}=${value.value}`)
  })
}

$(document).ready(function () {
  console.log("ready!")
  $("#example-form").submit(function (event) {
    event.preventDefault();
    const values = $(this).serializeArray();
    submitPanelShowValues(values)
  });
});
