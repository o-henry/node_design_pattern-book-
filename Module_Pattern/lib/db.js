const level = require("level");
const sublevel = require("level-sublevel");

/**
 * @param sublevel : 데이터 베이스 핸들, stateful 인스턴스 (단일 개체)
 */

module.exports = sublevel(level("example-db", { valueEncoding: "json" }));
