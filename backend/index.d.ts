interface ISearchObject {
  [key: string]: string | number | number[] | object;
}

type ValueOf<T> = T[keyof T];

type IUpdateValue<T> = { [key: string]: ValueOf<T> } | T;

export default ISearchObject;
