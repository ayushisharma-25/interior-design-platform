import {
  validateEmail,
  validateName,
  validateAddress,
  validateCity,
  validatePhone,
  validatePinCode,
} from "../../../utils/validators";

export const validateForm = (form) => {

  let newErrors = {};

  const emailError = validateEmail(form.email);

  if (emailError) {
    newErrors.email = emailError;
  }

  const nameError = validateName(form.firstName);

  if (nameError) {
    newErrors.firstName = nameError;
  }

  const addressError = validateAddress(form.address);

  if (addressError) {
    newErrors.address = addressError;
  }

  const cityError = validateCity(form.city);

  if (cityError) {
    newErrors.city = cityError;
  }

  const phoneError = validatePhone(form.phone);

  if (phoneError) {
    newErrors.phone = phoneError;
  }

  const pinError = validatePinCode(form.pinCode);

  if (pinError) {
    newErrors.pinCode = pinError;
  }

  return newErrors;
};