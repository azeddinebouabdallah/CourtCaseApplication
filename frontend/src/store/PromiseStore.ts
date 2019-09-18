import Axios from "axios";
import { action, computed, observable, toJS } from "mobx";
import qs from "qs";
import config from "../lib/config";
import RootStore from "./RootStore";

const generateFullUri = (uri: string, data: INullableObject = null) => {
  return `${config.endpoints.api}${uri}`.replace(
    /\{(.*?)\}/g,
    (token: string, name: string) => {
      let value = token;
      if (data && data[name]) {
        value = data[name];
        delete data[name];
      }
      return value;
    }
  );
};

class PromiseStore {
  @observable loading: boolean = false;
  @observable loaded: boolean = false;
  @observable success: boolean = false;
  @observable response: INullableObject = null;
  @observable error: INullableObject = null;
  @observable stale: boolean = false;

  endpoint: IEndpoint;
  options: IPO;
  root: RootStore;

  constructor(endpoint: IEndpoint, options: IPO | null, root: RootStore) {
    this.endpoint = endpoint;
    this.options = {
      ...options,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        ...(options && options.headers ? options.headers : {})
      }
    };
    this.root = root;
  }

  @action
  clear() {
    this._doUpdate(false, false, false, null, null, false);
  }

  @action
  async fetch(data: INullableObject) {
    this.stale = true;
    this.loading = true;
    return await this._doFetch(data);
  }

  @computed
  get data() {
    return toJS(this.response);
  }

  @action
  async _doFetch(extra: INullableObject) {
    const { method } = this.endpoint;
    let fullUri = generateFullUri(this.endpoint.uri, extra);

    let requestOptions: IAPIRequest = {
      ...this.options,
      method
    };
    if (method === "GET") {
      const queryString = qs.stringify(extra);
      if (queryString) {
        fullUri += `?${queryString}`;
      }
    } else if (extra && Object.keys(extra).length > 0) {
      requestOptions.data = extra;
    }

    requestOptions.url = fullUri;
    const token = window.localStorage.getItem(config.keys.local_storage_key);
    if (token) {
      requestOptions.headers = {
        ...(requestOptions.headers ? requestOptions.headers : {}),
        Authorization: `${token}`
      };
    }

    try {
      const response = await Axios(requestOptions);
      this._doUpdate(false, true, true, response.data, null, false);

      return response;
    } catch (error) {
      this._doUpdate(false, false, false, null, error, false);
    }
  }

  @action
  _update(
    loading: boolean,
    loaded: boolean,
    success: boolean,
    response: INullableObject,
    error: INullableObject,
    stale: boolean
  ) {
    if (!this.loading) {
      return;
    }
    this._doUpdate(loading, loaded, success, response, error, stale);
  }

  @action
  _doUpdate(
    loading: boolean,
    loaded: boolean,
    success: boolean,
    response: INullableObject,
    error: INullableObject,
    stale: boolean
  ) {
    this.loading = loading;
    this.loaded = loaded;
    this.success = success;
    this.response = response;
    this.error = error;
    this.stale = stale;
  }
}

export default PromiseStore;
