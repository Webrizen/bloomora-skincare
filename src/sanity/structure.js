// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure = (S) =>
  S.list()
    .title('Product')
    .items([
      S.documentTypeListItem('products').title('Products'),
      S.documentTypeListItem('category').title('Categories'),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) => item.getId() && !['products', 'category'].includes(item.getId()),
      ),
    ])
