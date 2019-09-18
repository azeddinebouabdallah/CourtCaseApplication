/// <reference types="react-scripts" />

/*
 *
 * API Payloads
 *
 */
type IAPIMethod = "GET" | "POST" | "PUT" | "DELETE";

type IPO = {
  [key: string]: {
    [key: string]: string;
  };
};

interface IEndpoint {
  method: IAPIMethod;
  uri: string;
}

type INullableObject =
  | {
      [key: string]: string;
    }
  | null
  | never;

type IError = {
  message: string;
  response: {
    status: number;
    statusText: string;
    data: {
      message: string;
      status: number;
    };
  };
} | null;

interface IMessage {
  status: number;
  text: string;
}

interface IAPIRequest {
  method: IAPIMethod;
  uri?: string;
  url?: string;
  headers?: INullableObject;
  data?: INullableObject;
}

type TableProps = {
  [key: string]: string;
};

/*
 *
 * Form controller
 *
 */
type IFormikChangeEvent =
  | ((
      event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>,
      newValue?: string | undefined
    ) => void)
  | undefined;

type IFormikBlurEvent =
  | ((event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void)
  | undefined;

interface IFormElement {
  type:
    | "text"
    | "number"
    | "date"
    | "dropdown"
    | "multiline_text"
    | "picker"
    | "file";
  name: string;
  label: string;
  validation?: Yup.StringSchema;
  initialValue?: string;
  options?: IDropdownOption[];
}

interface IValidationSchemaBase {
  [key: string]: Yup.StringSchema;
}

interface ICase {
  case_number: number;
  subject: string;
  claimed_amount: number;
  registration_date: string;
  case_status: string;
}

interface IStore<T, E, R> {
  response: T;
  data: T;
  fetch: (key?: R) => Promise<T>;
  error: E;
  loading: boolean;
}

/*
 * Pagination
 */
interface IPagination {
  pagination?: boolean;
  maxSize?: number;
  itemsPerPage?: number;
}

interface ICaseCount {
  count: number;
  rows: ICase[];
}

type ICaseStore = IStore<ICaseCount, string, undefined | object>;
