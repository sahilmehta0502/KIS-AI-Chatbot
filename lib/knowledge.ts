import * as XLSX from "xlsx";
import { supabase } from "./supabaseClient";

export async function loadExcelKnowledge() {
  try {
    const { data, error } = await supabase.storage
      .from("knowledge")
      .download("knowledge.xlsx");

    if (error || !data) {
      console.error("Supabase download error:", error);
      return [];
    }

    const buffer = await data.arrayBuffer();
    const workbook = XLSX.read(buffer);
    const sheet = workbook.Sheets[workbook.SheetNames[0]];

    return XLSX.utils.sheet_to_json(sheet) as {
      Category: string;
      Question: string;
      Answer: string;
    }[];
  } catch (err) {
    console.error("Load Excel Knowledge error:", err);
    return [];
  }
}
