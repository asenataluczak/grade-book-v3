const isLoggedIn = (userInfo) => {
  return !!userInfo;
};

const isAdmin = (userInfo) => {
  return userInfo.role === Roles.Admin;
};

const isStudent = (userInfo) => {
  return userInfo.role === Roles.Student;
};

const isTeacher = (userInfo) => {
  return userInfo.role === Roles.Nauczyciel;
};

enum Roles {
  Admin,
  Nauczyciel,
  Student,
}

export { isLoggedIn, isAdmin, isTeacher, isStudent, Roles };
