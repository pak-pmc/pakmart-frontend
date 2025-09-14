export interface IMeta {
    prevPageUrl: string | null;
    nextPageUrl: string | null;
    currentPage: number;
    firstPage: number;
    lastPage: number;
    total: number;
    perPage: number;
}