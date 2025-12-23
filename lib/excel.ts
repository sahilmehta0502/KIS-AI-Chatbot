import * as XLSX from "xlsx";
import fs from "fs";
import path from "path";

export function loadExcelKnowledge() {
  const filePath = path.join(process.cwd(), "public", "knowledge.xlsx");
  const buffer = fs.readFileSync(filePath);

  const workbook = XLSX.read(buffer, { type: "buffer" });
  const sheet = workbook.Sheets[workbook.SheetNames[0]];

  return XLSX.utils.sheet_to_json(sheet) as {
    Category: string;
    Question: string;
    Answer: string;
  }[];
}
