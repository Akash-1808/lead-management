export interface LeadFilterFormValues {
    Match: [string];
    status: string;
    filterBy: string;
}

export interface SearchParams {
    setIsFilterForm: (value: object) => void
}
