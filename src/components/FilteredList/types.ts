export interface IItems {
  id: number;
  name: string;
  checked: boolean;
}

export interface IDataCategory {
  name: string;
  items: IItems[] | null;
}

export interface IFilteredListProps {
   elements: Array<IDataCategory>;
 }