
function getInputValue() {
  var inputVal = document.getElementById("ship-address").value;
  alert(inputVal);
}

function initAutocomplete() {
  // locations = document.querySelector("#ship-address");
  // address2Field = document.querySelector("#address2");
  // postalField = document.querySelector("#postcode");
  // Create the autocomplete object, restricting the search predictions to
  // addresses in the US and Canada.
  // autocomplete = new google.maps.places.Autocomplete(locations, {
  //   componentRestrictions: { country: ["us", "ca", "in"] },
  //   fields: ["address_components", "geometry"],
  //   types: ["address","regions"],
  // });

  const center = { lat: 50.064192, lng: -130.605469 };
  const defaultBounds = {
    north: center.lat + 0.1,
    south: center.lat - 0.1,
    east: center.lng + 0.1,
    west: center.lng - 0.1,
  };
const input = document.getElementById("ship-address");
const options = {
  bounds: defaultBounds,
  componentRestrictions: { country: "us" },
  fields: ["address_components", "geometry", "icon", "name"],
  strictBounds: false,
  types: ["establishment"],
};
new google.maps.places.Autocomplete(input, options);
input.focus();
}




window.initAutocomplete = initAutocomplete;
