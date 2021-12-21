// ! It's will take only Alphabets
function alphaOnly(event) {
  return event.which === 32 && event.target.selectionStart === 0
    ? false
    : (event.charCode >= 65 && event.charCode <= 90) ||
        (event.charCode >= 97 && event.charCode <= 122) ||
        event.charCode == 32;
}

// ! Blood Type

function alpha_positive_negative(event) {
  return (event.which === 32 && event.target.selectionStart === 0) ||
    (event.which === 43 && event.target.selectionStart === 0) ||
    (event.which === 45 && event.target.selectionStart === 0)
    ? false
    : (event.charCode >= 65 && event.charCode <= 90) ||
        (event.charCode >= 97 && event.charCode <= 122) ||
        event.charCode == 32 ||
        event.charCode == 43 ||
        event.charCode == 45;
}

// ! Height

function validate_hg_wg(event) {
  return (event.which === 32 && event.target.selectionStart === 0) ||
    (event.which === 46 && event.target.selectionStart === 0)
    ? false
    : (event.charCode >= 48 && event.charCode <= 57) || event.charCode == 46;
}

// ! ID_CARD

function valid_idcard(event) {
  return (event.which === 32 && event.target.selectionStart === 0) ||
    (event.which === 45 && event.target.selectionStart === 0)
    ? false
    : (event.charCode >= 48 && event.charCode <= 57) || event.charCode == 45;
}
