
function submitPanelShowValues(values) {
  const submitPanel = $("#submit-panel");
  submitPanel.empty();
  // all values but unchecked checkboxes aren't listed
  values.forEach(value => {
    submitPanel.append(`<p>${value.name}=${value.value}</p>`)
  })
  submitPanel.append
    (`<p>Save Info is ${values.find(v=>v.name==='save-info') ? 'True' : 'False'}</p>`)
}

$(document).ready(function () {
  console.log("ready!")
  $("#example-form").submit(function (event) {
    event.preventDefault();
    const values = $(this).serializeArray();
    submitPanelShowValues(values)
  });
});
