import { RouteDefinition, routeRegistry } from "./routeRegistry";
import { HomePage } from "@pages/Home";
import { NavigationPage } from "@pages/Navigation";
import { HighlightsPage } from "@pages/Highlights";
import { NewsletterPage } from "@pages/Newsletter";
import { AdminPage } from "@pages/Admin";
import { CategoryTechnoPage } from "@pages/CategoryTechno";
import { CategoriesPage } from "@pages/Categories";
import { CreatePostPage } from "@pages/CreatePost";
import { EditorPicksPage } from "@pages/EditorPicks";
import { UsersPage } from "@pages/Users";
import { ReviewQueuePage } from "@pages/ReviewQueue";
import { CommentsQueuePage } from "@pages/CommentsQueue";
import { LoginPage } from "@pages/Login";
import { SignupPage } from "@pages/Signup";
import { ProfilePage } from "@pages/Profile";
import { SearchPage } from "@pages/Search";

const definitions = [
  new RouteDefinition("/", HomePage),
  new RouteDefinition("/navegacao", NavigationPage),
  new RouteDefinition("/destaques", HighlightsPage),
  new RouteDefinition("/newsletter", NewsletterPage),
  new RouteDefinition("/admin", AdminPage),
  new RouteDefinition("/categoria-techno", CategoryTechnoPage),
  new RouteDefinition("/categorias", CategoriesPage),
  new RouteDefinition("/criar-post", CreatePostPage),
  new RouteDefinition("/escolhas-editor", EditorPicksPage),
  new RouteDefinition("/usuarios", UsersPage),
  new RouteDefinition("/fila-revisao", ReviewQueuePage),
  new RouteDefinition("/fila-comentarios", CommentsQueuePage),
  new RouteDefinition("/login", LoginPage),
  new RouteDefinition("/signup", SignupPage),
  new RouteDefinition("/perfil", ProfilePage),
  new RouteDefinition("/busca", SearchPage)
];

definitions.forEach((definition) => routeRegistry.register(definition));
