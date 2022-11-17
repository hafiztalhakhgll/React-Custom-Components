import React from "react";
import { IColumn, IScoped } from "../types";

export interface ITableColumn<T> {
  item: T;
  column: IColumn;
  index: number;
  scoped?: IScoped<T>;
}

const getKey = (column: IColumn): string => {
  return typeof column === "string" ? column : column["key"];
};

const isScoped = <T extends unknown>(scoped: IScoped<T> | undefined, key: string): boolean => {
  return scoped && scoped[key] ? true : false;
};

interface IRenderScoped<T> {
  item: T;
  index: number;
  callback?: (item: T, index: number) => React.ReactNode;
}

const RenderScoped = <T extends unknown>({ item, index, callback }: IRenderScoped<T>) => {
  if (callback) {
    return <td>{callback(item, index)}</td>;
  }
  return <></>;
};

const TableColumn = <T extends unknown>({ item, index, column, scoped }: ITableColumn<T>) => {
  const key = getKey(column);
  if (scoped && isScoped<T>(scoped, key)) {
    return <RenderScoped callback={scoped[key]} item={item} index={index} />;
  }
  return <td>{item[key as keyof T] as string}</td>;
};

export default TableColumn;
