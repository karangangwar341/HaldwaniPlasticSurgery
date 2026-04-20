import { readFileSync } from "fs";
import { resolve } from "path";

const envPath = resolve(process.cwd(), ".env.local");
console.log("cwd:", process.cwd());
console.log("envPath:", envPath);
const envFile = readFileSync(envPath, "utf-8");
console.log("raw first 200 chars:", JSON.stringify(envFile.slice(0, 200)));
