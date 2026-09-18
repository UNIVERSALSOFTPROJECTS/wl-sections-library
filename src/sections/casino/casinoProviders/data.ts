import type { CasinoProviderFilterItem } from "./types";

export const casinoProvidersTitle = "Proveedores";
export const casinoProvidersDefaultActiveId = "all";

export const casinoProviderFilters: CasinoProviderFilterItem[] = [
    { id: "all", label: "Todos" },
    { id: "pragmatic", label: "PRAGMATIC" },
    { id: "darwin", label: "DARWIN" },
    { id: "esports", label: "ESPORTS" },
];
