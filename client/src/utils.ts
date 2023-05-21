const isLoggedIn = (userInfo) => {
  return !!userInfo;
};

const isAdmin = (userInfo) => {
  console.log(userInfo.role);
};

const isStudent = (userInfo) => {
  console.log(userInfo.role);
};

const isTeacher = (userInfo) => {
  console.log(userInfo.role);
};

enum Roles {
  Admin,
  Nauczyciel,
  Student
}

export { isLoggedIn, isAdmin, isTeacher, isStudent, Roles };
