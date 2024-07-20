import { FilterType } from "@/types/filter-types";
import { PriorityTypes } from "@/types/priority-types";
import { ProductPages } from "@/types/products-response";

export function getCategory(type: FilterType) {
  if (type === FilterType.MUG) return "mugs";
  if (type === FilterType.SHIRT) return "t-shirts";

  return '';
}

export function getField(priority: PriorityTypes) {
  if (priority === PriorityTypes.NEWS) return {field: "created_at", order: "ASC"}
  if (priority === PriorityTypes.BIGGEST_PRICE) return {field: "price_in_cents", order: "DSC"}
  if (priority === PriorityTypes.MINOR_PRICE) return {field: "price_in_cents", order: "ASC"}

  return {field: "sales", order: "ASC"}
}

export function getProductsPerPage(pages: ProductPages) {
  if (!pages) return {page: 0, perPage: 12};

  return {
    page: pages.page,
    perPage: pages.perPage
  }
}

export function mountQuery(type: FilterType, priority: PriorityTypes, product: ProductPages) {
  if (type === FilterType.ALL && priority === PriorityTypes.POPULARITY) return `query {
    allProducts(sortField: "sales", sortOrder: "DSC") {
      id
      name
      price_in_cents
      image_url
    }
  }`

  const sortSettings = getField(priority);
  const categoryFilter = getCategory(type);
  const pages = getProductsPerPage(product);

  return `query {
    allProducts(
      page: ${pages.page}
      perPage: ${pages.perPage}
      sortField: "${sortSettings.field}"
      sortOrder: "${sortSettings.order}"
      ${categoryFilter && `filter: { category: "${getCategory(type)}" }`}
    ) {
      id
      name
      price_in_cents
      image_url
      category
    }
  }`
}
