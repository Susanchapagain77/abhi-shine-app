const DEFAULT_API_BASE_URL = "http://localhost:8000/api";

const normalizedBase = (() => {
  const raw = import.meta.env.VITE_API_BASE_URL ?? DEFAULT_API_BASE_URL;
  return raw.replace(/\/+$/, "");
})();

export const API_BASE_URL = normalizedBase;

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

