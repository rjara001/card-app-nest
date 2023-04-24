import { IWord } from "./interfaces/IWord";
declare const jsonToCsv: (data: IWord[]) => string;
declare const parseCsv: (csv: string) => IWord[];
declare const parseCsvBySeparator: (rows: string, separator: string) => IWord[];
export { parseCsv, jsonToCsv, parseCsvBySeparator };
