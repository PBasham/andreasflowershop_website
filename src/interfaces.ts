export interface GalleryImage {
    label: string;
    src: string;
    categories: string[];
}

export interface GetQuoteForm {
    name: string | null
    email: string | null
    message: string | null
}