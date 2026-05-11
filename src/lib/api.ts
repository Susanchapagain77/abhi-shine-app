const DEFAULT_API_BASE_URL = "http://localhost:8000/api";

const normalizedBase = (() => {
  const raw = import.meta.env.VITE_API_BASE_URL ?? DEFAULT_API_BASE_URL;
  return raw.replace(/\/+$/, "");
})();

const apiOrigin = normalizedBase.replace(/\/api$/, "");

export const API_BASE_URL = normalizedBase;

export interface PaginatedResponse<T> {
  success: boolean;
  data: T[];
  pagination: {
    current_page: number;
    last_page: number;
    per_page: number;
    total: number;
    from: number | null;
    to: number | null;
  };
}

export const buildAssetUrl = (assetPath?: string | null): string => {
  if (!assetPath) return "";
  if (/^https?:\/\//i.test(assetPath)) return assetPath;
  const cleanedPath = assetPath.replace(/^\/+/, "");
  const withStoragePrefix = cleanedPath.startsWith("storage/") ? cleanedPath : `storage/${cleanedPath}`;
  return `${apiOrigin}/${withStoragePrefix}`;
};

const buildEndpointUrl = (path: string) => {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${API_BASE_URL}${normalizedPath}`;
};

export async function fetchFromApi<T>(path: string, init?: RequestInit): Promise<T> {
  const response = await fetch(buildEndpointUrl(path), {
    ...init,
    headers: {
      Accept: "application/json",
      ...(init?.headers ?? {}),
    },
  });

  let payload: unknown = null;
  try {
    payload = await response.json();
  } catch {
    // ignore parse issues, handle below
  }

  if (!response.ok) {
    const errorMessage =
      (typeof payload === "object" && payload !== null && "message" in payload
        ? String((payload as { message?: unknown }).message ?? "Request failed")
        : `Request to ${path} failed with status ${response.status}`);
    throw new Error(errorMessage);
  }

  return payload as T;
}

