import React from "react";
import { Link } from "react-router-dom";
import { AdminNavItem } from "@app-types/admin";

interface AdminSidebarProps {
  readonly title?: string;
  readonly items: AdminNavItem[];
}

export class AdminSidebar extends React.PureComponent<AdminSidebarProps> {
  public override render(): React.ReactNode {
    const { title = "Menu", items } = this.props;

    return (
      <aside className="admin-sidebar">
        <h2>{title}</h2>
        <ul className="admin-menu">
          {items.map((item) => (
            <li key={item.path}>
              <Link aria-current={item.ariaCurrent} to={item.path}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </aside>
    );
  }
}
