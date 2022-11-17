export interface IScoped<T> {
  [key: string]: (item: T, index: number) => React.ReactNode;
}
