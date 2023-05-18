const bcrypt = require("bcrypt");

const encrypt = async (user) => {
  if (user.isNewRecord) {
    const salt = await bcrypt.genSaltSync(10, "a");
    user.password = await bcrypt.hashSync(user.password, salt);
  }
};

const comparePassword = (password, hashedPassword) => bcrypt.compare(password, hashedPassword)

module.exports = { encrypt, comparePassword };
