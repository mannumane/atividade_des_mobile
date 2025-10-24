import React from "react";
import { Link } from "react-router-dom";
import { CardLinkView } from "@app-types/content";

interface CardGalleryProps {
  readonly cards: CardLinkView[];
}

export class CardGallery extends React.PureComponent<CardGalleryProps> {
  public override render(): React.ReactNode {
    const { cards } = this.props;

    return (
      <div className="grid cards">
        {cards.map((card) => (
          <article className="card" key={card.id}>
            <Link to={card.link}>
              <figure>
                <img
                  alt={card.description ?? card.title}
                  height={400}
                  src={card.image}
                  width={300}
                />
                <figcaption>{card.title}</figcaption>
              </figure>
            </Link>
          </article>
        ))}
      </div>
    );
  }
}
