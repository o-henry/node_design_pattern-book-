const level = require("level");
const sublevel = require("level-sublevel");

/**
 * @param sublevel : 데이터 베이스 핸들, stateful 인스턴스 (단일 개체)
 */

// hardcode
module.exports = sublevel(level("example-db", { valueEncoding: "json" }));

/* ======================================= refactoring DI ========================================= */
// 아래 코드를 통해, 원하는 만큼 DB 인스턴스를 생성할 수 있다.
// stateless 한 모듈이 완성 되었다.
module.exports = (dbName) => {
  return sublevel(level(dbName, { valueEncoding: "json" }));
};
