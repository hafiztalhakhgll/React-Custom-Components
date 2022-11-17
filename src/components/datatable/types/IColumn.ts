export interface IColumnDetail {
  key: string;
  label?: string;
  _styles?: React.CSSProperties;
}

export type IColumn = string | IColumnDetail;
