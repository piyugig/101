
function User(username, password) {
  this.username = username;
  this.password = password;
}

User.prototype.checkPassword = function checkPassword(password) {
  return this.password.normalize() === password.normalize();
};

module.exports = User;
