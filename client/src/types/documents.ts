/** Field Desk architecture: format-neutral document contracts keep the interface focused on useful actions rather than individual file-extension branches. */
export type DocumentSource = "import" | "scan" | "camera" | "video" | "conversion" | "generated";
export type StorageMode = "directory" | "private";
export type DocumentCategory = "pdf" | "document" | "image" | "media" | "data" | "archive" | "other";
export interface LocalDocument { id: string; filename: string; path: string; mimeType: string; extension: string; size: number; category: DocumentCategory; createdAt: string; modifiedAt: string; importedAt?: string; favorite: boolean; source: DocumentSource; ocrAvailable?: boolean; detectedLanguage?: string; }
export interface StoredFile { path: string; filename: string; blob: Blob; modifiedAt: string; }
export interface StorageStatus { mode: StorageMode; connected: boolean; needsReconnect: boolean; label: string; }
export interface BrowserCapabilities { folderAccess: boolean; offlineStorage: boolean; camera: boolean; videoRecording: boolean; sharing: boolean; installed: boolean; fileHandling: boolean; }
export interface FileCapabilities { preview: boolean; edit: "none" | "basic" | "advanced"; extractText: boolean; convertTo: string[]; print: boolean; share: boolean; }
