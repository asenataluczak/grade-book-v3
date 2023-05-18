const bcrypt = require("bcrypt");

const encrypt = async (user) => {
  let ifPasswordSame = true;
  if (user && user._previousDataValues?.password) {
    ifPasswordSame =
      (await bcrypt.compareSync(
        user?.password,
        user?._previousDataValues.password
      )) || user?.password === user?._previousDataValues.password;
  }
  if (user.isNewRecord || !ifPasswordSame) {
    const salt = await bcrypt.genSaltSync(10, "a");
    user.password = await bcrypt.hashSync(user.password, salt);
  }
};

module.exports = { encrypt };
