import { useState } from "react";
import { SearchIcon } from "@assets/icons";
import {
    casinoProviderFilters as defaultFilters,
    casinoProvidersDefaultActiveId,
    casinoProvidersTitle,
} from "./data";
import {
    CasinoProvidersElement,
    CasinoProvidersFilterElement,
    CasinoProvidersFiltersElement,
    CasinoProvidersHeaderElement,
    CasinoProvidersSearchElement,
    CasinoProvidersTitleElement,
} from "./CasinoProviders.elements";
import type { CasinoProvidersProps } from "./types";

export const CasinoProviders = ({
    title = casinoProvidersTitle,
    filters = defaultFilters,
    activeId: controlledActiveId,
    defaultActiveId = casinoProvidersDefaultActiveId,
    onFilterPress,
    onSearchPress,
}: CasinoProvidersProps) => {
    const [internalActiveId, setInternalActiveId] = useState(defaultActiveId);
    const activeId = controlledActiveId ?? internalActiveId;

    const handleFilterPress = (id: string) => {
        if (controlledActiveId === undefined) {
            setInternalActiveId(id);
        }

        onFilterPress?.(id);
    };

    return (
        <CasinoProvidersElement aria-label={title}>
            <CasinoProvidersHeaderElement>
                <CasinoProvidersTitleElement>{title}</CasinoProvidersTitleElement>
                <CasinoProvidersSearchElement
                    type="button"
                    aria-label="Buscar proveedores"
                    onClick={onSearchPress}
                >
                    <SearchIcon />
                </CasinoProvidersSearchElement>
            </CasinoProvidersHeaderElement>

            <CasinoProvidersFiltersElement aria-label="Filtro de proveedores">
                {filters.map((filter) => {
                    const isActive = activeId === filter.id;

                    return (
                        <CasinoProvidersFilterElement
                            key={filter.id}
                            type="button"
                            aria-pressed={isActive}
                            onClick={() => handleFilterPress(filter.id)}
                            $active={isActive}
                        >
                            {filter.label}
                        </CasinoProvidersFilterElement>
                    );
                })}
            </CasinoProvidersFiltersElement>
        </CasinoProvidersElement>
    );
};
