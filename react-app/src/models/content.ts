import {
  CardLinkView,
  CategoryPostView,
  CategoryView,
  CommentQueueItemView,
  FilterTagView,
  FormFieldView,
  MetricView,
  PostSummaryView,
  QueueItemView,
  SearchResultView,
  UserSummaryView
} from "@app-types/content";

export class Category {
  public constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly isPopular: boolean = false
  ) {}

  public toView(): CategoryView {
    return {
      id: this.id,
      name: this.name,
      isPopular: this.isPopular
    };
  }
}

export class CategoryCollection {
  public constructor(private readonly categories: readonly Category[]) {}

  public list(): CategoryView[] {
    return this.categories.map((category) => category.toView());
  }

  public listPopular(): CategoryView[] {
    return this.categories
      .filter((category) => category.isPopular)
      .map((category) => category.toView());
  }
}

export class PostSummary {
  public constructor(
    public readonly id: string,
    public readonly title: string,
    public readonly meta: string
  ) {}

  public toView(): PostSummaryView {
    return {
      id: this.id,
      title: this.title,
      meta: this.meta
    };
  }
}

export class PostCollection {
  public constructor(private readonly posts: readonly PostSummary[]) {}

  public list(): PostSummaryView[] {
    return this.posts.map((post) => post.toView());
  }
}

export class CardLink {
  public constructor(
    public readonly id: string,
    public readonly title: string,
    public readonly image: string,
    public readonly link: string,
    public readonly description?: string
  ) {}

  public toView(): CardLinkView {
    return {
      id: this.id,
      title: this.title,
      description: this.description,
      image: this.image,
      link: this.link
    };
  }
}

export class CardLinkCollection {
  public constructor(private readonly cards: readonly CardLink[]) {}

  public list(): CardLinkView[] {
    return this.cards.map((card) => card.toView());
  }
}

export class Metric {
  public constructor(
    public readonly id: string,
    public readonly label: string,
    public readonly value: string
  ) {}

  public toView(): MetricView {
    return {
      id: this.id,
      label: this.label,
      value: this.value
    };
  }
}

export class MetricCollection {
  public constructor(private readonly metrics: readonly Metric[]) {}

  public list(): MetricView[] {
    return this.metrics.map((metric) => metric.toView());
  }
}

export class UserSummary {
  public constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly role: string,
    public readonly email: string
  ) {}

  public toView(): UserSummaryView {
    return {
      id: this.id,
      name: this.name,
      role: this.role,
      email: this.email
    };
  }
}

export class UserCollection {
  public constructor(private readonly users: readonly UserSummary[]) {}

  public list(): UserSummaryView[] {
    return this.users.map((user) => user.toView());
  }
}

export class QueueItem {
  public constructor(
    public readonly id: string,
    public readonly title: string,
    public readonly author: string,
    public readonly submittedAt: string,
    public readonly status: string
  ) {}

  public toView(): QueueItemView {
    return {
      id: this.id,
      title: this.title,
      author: this.author,
      submittedAt: this.submittedAt,
      status: this.status
    };
  }
}

export class QueueCollection {
  public constructor(private readonly items: readonly QueueItem[]) {}

  public list(): QueueItemView[] {
    return this.items.map((item) => item.toView());
  }
}

export class CommentQueueItem {
  public constructor(
    public readonly id: string,
    public readonly postTitle: string,
    public readonly commenter: string,
    public readonly submittedAt: string,
    public readonly excerpt: string
  ) {}

  public toView(): CommentQueueItemView {
    return {
      id: this.id,
      postTitle: this.postTitle,
      commenter: this.commenter,
      submittedAt: this.submittedAt,
      excerpt: this.excerpt
    };
  }
}

export class CommentQueue {
  public constructor(
    private readonly items: readonly CommentQueueItem[]
  ) {}

  public list(): CommentQueueItemView[] {
    return this.items.map((item) => item.toView());
  }
}

export class FormField {
  public constructor(
    public readonly id: string,
    public readonly label: string,
    public readonly type: FormFieldView["type"],
    public readonly placeholder?: string
  ) {}

  public toView(): FormFieldView {
    return {
      id: this.id,
      label: this.label,
      type: this.type,
      placeholder: this.placeholder
    };
  }
}

export class FormSchema {
  public constructor(private readonly fields: readonly FormField[]) {}

  public list(): FormFieldView[] {
    return this.fields.map((field) => field.toView());
  }
}

export class CategoryPost {
  public constructor(
    public readonly id: string,
    public readonly title: string,
    public readonly date: string
  ) {}

  public toView(): CategoryPostView {
    return {
      id: this.id,
      title: this.title,
      date: this.date
    };
  }
}

export class CategoryPostCollection {
  public constructor(private readonly posts: readonly CategoryPost[]) {}

  public list(): CategoryPostView[] {
    return this.posts.map((post) => post.toView());
  }
}

export class SearchResult {
  public constructor(
    public readonly id: string,
    public readonly title: string,
    public readonly category: string,
    public readonly publishedAt: string
  ) {}

  public toView(): SearchResultView {
    return {
      id: this.id,
      title: this.title,
      category: this.category,
      publishedAt: this.publishedAt
    };
  }
}

export class SearchResultCollection {
  public constructor(private readonly results: readonly SearchResult[]) {}

  public list(): SearchResultView[] {
    return this.results.map((result) => result.toView());
  }
}

export class FilterTag {
  public constructor(
    public readonly id: string,
    public readonly label: string
  ) {}

  public toView(): FilterTagView {
    return {
      id: this.id,
      label: this.label
    };
  }
}

export class FilterTagCollection {
  public constructor(private readonly tags: readonly FilterTag[]) {}

  public list(): FilterTagView[] {
    return this.tags.map((tag) => tag.toView());
  }
}
