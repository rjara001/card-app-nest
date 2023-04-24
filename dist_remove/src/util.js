"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseCsvBySeparator = exports.jsonToCsv = exports.parseCsv = void 0;
const jsonToCsv = (data) => {
    const rows = data.map((item) => `${item.Name}\t${item.Value}\t${item.Cycles}\t${item.IsKnowed === true ? 1 : 0}\t${item.Reveled === true ? 1 : 0}`).join('\n');
    return btoa(unescape(encodeURIComponent(rows)));
};
exports.jsonToCsv = jsonToCsv;
const parseCsv = (csv) => {
    const rows = decodeURIComponent(escape(atob(csv)));
    return parseCsvBySeparator(rows, '\t');
};
exports.parseCsv = parseCsv;
const parseCsvBySeparator = (rows, separator) => {
    return rows.trim().split('\n').map((row) => {
        const [name, value, cycles, isKnowed, reveled] = row.split(separator);
        return { Name: name, Value: value, Cycles: cycles === undefined ? 0 : parseInt(cycles), IsKnowed: isKnowed === "1", Reveled: reveled === "1" };
    });
};
exports.parseCsvBySeparator = parseCsvBySeparator;
//# sourceMappingURL=util.js.map