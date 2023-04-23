import { IWord } from "./interfaces/IWord";

const jsonToCsv = (data: IWord[]) => {
    const rows = data.map((item) => `${item.Name}\t${item.Value}\t${item.Cycles}\t${item.IsKnowed===true?1:0}\t${item.Reveled===true?1:0}`).join('\n');
    return btoa(unescape(encodeURIComponent(rows)));
  };

const parseCsv = (csv: string) => {
    const rows = decodeURIComponent(escape(atob(csv)));
    return parseCsvBySeparator(rows, '\t');
  };

  const parseCsvBySeparator = (rows:string, separator:string) => {
    return rows.trim().split('\n').map((row) => {
      const [name, value, cycles, isKnowed, reveled] = row.split(separator);
      return { Name: name, Value: value, Cycles:cycles===undefined?0:parseInt(cycles), IsKnowed:isKnowed==="1", Reveled: reveled==="1"} as IWord;
    });
  }

  export {
    parseCsv
    , jsonToCsv
    , parseCsvBySeparator
  }