interface IResult {
  name: string;
}

export interface ISearchResultsListProps {
  results: IResult[];
}

export interface FilterObject {
  searchTerm: string;
  category: string[];
}
