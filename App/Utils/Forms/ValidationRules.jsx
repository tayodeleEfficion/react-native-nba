const Validation = (value, rules, form) => {
  let valid = true;
  for (let rule in rules) {
    switch (rule) {
      case "isRequired":
        valid = valid && ValidateRequired(value);
        break;
      case "isEmail":
        valid = valid && ValidateEmail(value);
        console.log(valid);
        break;
      case "minLength":
        valid = valid && ValidateMinLength(value, rules[rule]);
        console.log(valid);
        break;
      case "maxLength":
        valid = valid && ValidateMaxLength(value, rules[rule]);
        console.log(valid);
        break;
      case "confirmPass":
        valid =
          valid && ValidateConfirmPass(value, form[rules.confirmPass].value);
        console.log(valid);
        break;
      default:
        valid = true;
    }
  }

  return valid;
};

const ValidateRequired = (value) => {
  if (value !== "") {
    return true;
  }
  return false;
};

const ValidateEmail = (email) => {
  const expression = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return expression.test(String(email).toLowerCase());
};

const ValidateMinLength = (value, ruleValue) => {
  if (value.length >= ruleValue) {
    return true;
  }
  return false;
};
const ValidateMaxLength = (value, ruleValue) => {
  if (value.length <= ruleValue) {
    return true;
  }
  return false;
};

const ValidateConfirmPass = (confirmPass, pass) => {
  return confirmPass === pass;
};

export default Validation;
