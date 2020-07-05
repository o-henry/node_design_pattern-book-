// 종속성 하드 코딩 (authService)
const authService = require("./authService");

exports.login = (req, res, next) => {
  authService.login(req.body.username, req.body.password, (err, result) => {});
};

exports.checkToken = (req, res, next) => {
  authService.checkToken(req.query.token, (err, result) => {});
};

/**
 * authController 모듈은 authService 모듈에 종속되며 authServcie 모듈은 db 모듈에 의존한다.
 * 특정 DB 인스턴스에 간접적으로 연결되는 이행성(transitivity)을 갖는다.
 */

/* ======================================= refactoring DI ========================================= */

module.exports = (authService) => {
  const authController = {};

  authController.login = (req, res, next) => {};

  authController.checkToken = (req, res, next) => {};

  return authController;
};
