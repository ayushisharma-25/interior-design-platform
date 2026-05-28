export const validateEmail = (email) => {

  if (!email?.trim()) {
    return "*Email is required";
  }

  const emailRegex = /^\S+@\S+\.\S+$/;

  if (!emailRegex.test(email)) {
    return "*Invalid email format";
  }

  return "";
};

export const validateName = (name) => {

  if (!name?.trim()) {
    return "*Name is required";
  }

  const nameRegex = /^[A-Za-z\s]+$/;

  if (!nameRegex.test(name)) {
    return "*Only letters allowed";
  }

  return "";
};

export const validateAddress = (address) => {

  if (!address?.trim()) {
    return "*Address required";
  }

  return "";
};

export const validateCity = (city) => {

  if (!city?.trim()) {
    return "*City is required";
  }

  return "";
};

export const validatePhone = (phone) => {

  if (!phone?.trim()) {
    return "*Phone is required";
  }

  const phoneRegex = /^[6-9]\d{9}$/;

  if (!phoneRegex.test(phone)) {
    return "*Invalid phone";
  }

  return "";
};

export const validatePinCode = (pinCode) => {

  if (!pinCode?.trim()) {
    return "*PIN required";
  }

  const pinRegex = /^\d{6}$/;

  if (!pinRegex.test(pinCode)) {
    return "*PIN must be 6 digits";
  }

  return "";
};