// 종속성 하드 코딩 (db)
const db = require("./db");

const users = db.sublevel("users");

const tokenSecret = "SHHH!";

exports.login = (username, password, callback) => {
  users.get(username, function (err, user) {});
};

exports.checkToken = (token, callback) => {
  users.get(userData.username, function (err, user) {});
};

/**
 * 위 코드는 특정 db 인스턴스 에 대한 종속성을 하드코딩 했기 때문에, 코드를 건드리지 않고서는 authService를 다른 DB 인스턴스와 재사용 할 수 없다.
 */
