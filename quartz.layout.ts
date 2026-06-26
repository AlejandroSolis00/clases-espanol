import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// Configuración global (el menú de arriba)
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [
    Component.Links({
      "Home": "/",
      "Lecciones": "/Lecciones/Indice-Lecciones",
      "Ejercicios": "/Ejercicios/Indice-Ejercicios",
      "Hojas de Trabajo": "/Hojas-de-trabajo/Indice-Hojas",
    }),
  ],
  footer: Component.Footer({ links: {} }),
}

// Configuración de las páginas individuales
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [Component.ArticleTitle()],
  left: [Component.PageTitle(), Component.Search(), Component.Explorer()],
  right: [Component.TableOfContents(), Component.Backlinks()],
}