export class Books {
  static Add = "/Books/Add";
  static Count = "/Books/Count";
  static NewlyAdded = "/Books/NewlyAddedBooks";
  static All = "/Books/All";
  static Filtered = "/Books/GetFiltered";
  static Update = "/Books"

  static GetById(id: string) {
    return `/Books/${id}`
  }
  static DeleteById(id: string) {
    return `/Books/${id}`
  }

  static ByGenreId(id: string) {
    return `/Books/ByGenderId/${id}`
  }
  static ByAuthorId(id: string) {
    return `/Books/ByAuthorId/${id}`
  }

}
