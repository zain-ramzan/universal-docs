import { describe, expect, it } from "vitest";
import { extractDocumentFacts } from "../client/src/lib/document-extract";
import { datedPath, documentCapabilities, getCategory, makeUniqueFilename, sanitizeFilename, timestampedFilename } from "../client/src/lib/files";

describe("local document naming", () => {
  it("keeps a safe imported name where possible", () => expect(sanitizeFilename("RentalContract.docx")).toBe("RentalContract.docx"));
  it("removes path traversal and invalid filesystem characters", () => expect(sanitizeFilename("../Rent:al?.pdf")).toBe("Rent al .pdf"));
  it("adds a predictable counter to duplicate imported names", () => expect(makeUniqueFilename("RentalContract.docx", ["RentalContract.docx", "RentalContract (2).docx"])).toBe("RentalContract (3).docx"));
  it("creates chronological folders and creation names", () => { const date = new Date("2026-08-19T14:25:00"); expect(datedPath("scan.pdf", date)).toBe("2026/08/scan.pdf"); expect(timestampedFilename("scan_contract", "pdf", date)).toBe("2026-08-19_1425_scan_contract.pdf"); });
});

describe("file capability registry", () => {
  it("recognises common images and editable text files", () => { expect(getCategory("receipt.jpg")).toBe("image"); expect(documentCapabilities({ category: "document", extension: "md", mimeType: "text/markdown" }).edit).toBe("basic"); });
  it("does not promise previews for an unknown format", () => expect(documentCapabilities({ category: "other", extension: "exe", mimeType: "application/octet-stream" }).preview).toBe(false));
});

describe("deterministic document facts", () => {
  it("extracts present data without inventing a result", () => { const facts = extractDocumentFacts("Reference AB-12345. Pay € 120.50 by 28 August 2026. Write to comune@example.it."); expect(facts.dates).toContain("28 August 2026"); expect(facts.currency).toContain("€ 120.50"); expect(facts.emails).toContain("comune@example.it"); expect(facts.references).toContain("Reference AB-12345"); });
});
