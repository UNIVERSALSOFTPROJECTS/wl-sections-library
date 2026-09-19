export interface CasinoProviderFilterItem {
    id: string;
    label: string;
}

export interface CasinoProvidersProps {
    title?: string;
    filters?: CasinoProviderFilterItem[];
    activeId?: string;
    defaultActiveId?: string;
    onFilterPress?: (id: string) => void;
    onSearchPress?: () => void;
}
