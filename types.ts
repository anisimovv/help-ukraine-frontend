export interface ApiEntityData<T> {
  id: number;
  attributes: T;
}

interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

interface ResponseMeta {
  pagination: Pagination;
}

export interface ResponseSingle<T> {
  data: ApiEntityData<T>;
  error?: any;
}

export interface ResponseMany<T> {
  data: ApiEntityData<T>[];
  meta?: ResponseMeta;
  error?: any;
}

interface GeneralApiAttributes {
  createdAt?: string;
  updatedAt?: string;
  locale?: string;
}

// Entities
export interface CategoryAttributes extends GeneralApiAttributes {
  name: string;
  slug: string;
  articles?: ResponseMany<ArticleAttributes>[];
}

export interface ArticleAttributes extends GeneralApiAttributes {
  title: string;
  slug: string;
  content: string;
  category?: ResponseSingle<CategoryAttributes>;
}
