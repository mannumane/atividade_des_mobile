export interface CategoryView {
  readonly id: string;
  readonly name: string;
  readonly isPopular?: boolean;
  readonly allCategories?: boolean;
}

export interface PostSummaryView {
  readonly id: string;
  readonly title: string;
  readonly meta: string;
}

export interface CardLinkView {
  readonly id: string;
  readonly title: string;
  readonly image: string;
  readonly description?: string;
  readonly link: string;
}

export interface MetricView {
  readonly id: string;
  readonly label: string;
  readonly value: string;
}

export interface UserSummaryView {
  readonly id: string;
  readonly name: string;
  readonly role: string;
  readonly email: string;
}

export interface QueueItemView {
  readonly id: string;
  readonly title: string;
  readonly author: string;
  readonly submittedAt: string;
  readonly status: string;
}

export interface CommentQueueItemView {
  readonly id: string;
  readonly postTitle: string;
  readonly commenter: string;
  readonly submittedAt: string;
  readonly excerpt: string;
}

export interface FormFieldView {
  readonly id: string;
  readonly label: string;
  readonly type:
    | "text"
    | "email"
    | "password"
    | "textarea"
    | "select"
    | "checkbox";
  readonly placeholder?: string;
}

export interface CategoryPostView {
  readonly id: string;
  readonly title: string;
  readonly date: string;
}

export interface SearchResultView {
  readonly id: string;
  readonly title: string;
  readonly category: string;
  readonly publishedAt: string;
}

export interface FilterTagView {
  readonly id: string;
  readonly label: string;
}
