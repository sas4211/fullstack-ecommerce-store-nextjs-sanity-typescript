import type {StructureResolver} from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('TechShop Website')
    .items([
    
      S.documentTypeListItem('category').title('Categories'),
      S.documentTypeListItem('order').title('Orders'),
      S.documentTypeListItem('product').title('Products'),
      S.documentTypeListItem('sale').title('Sales'),
      
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) => item.getId() && !['category', 'order', 'product', 'sale'].includes(item.getId()!),
      ),
    ]);
