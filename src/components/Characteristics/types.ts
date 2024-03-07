export interface ICharacteristicsProps {
  elements: Array<IDataCategory>;
}

interface IItems {
  id: number;
  name: string;
  checked: boolean;
}

interface IDataCategory {
  name: string;
  items: IItems[] | null;
}
