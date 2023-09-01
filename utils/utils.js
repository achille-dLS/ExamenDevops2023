module.exports.checkPassword = (password) => {
    if (password.length < 8) {
      return false;
    }
    const regexSpecialChar = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/;
    if (!regexSpecialChar.test(password)) {
      return false;
    }
    const numberRegex = /[0-9]/;
    const letterRegex = /[a-zA-Z]/;
    if (!numberRegex.test(password) || !letterRegex.test(password)) {
      return false;
    }
    return true;
  };