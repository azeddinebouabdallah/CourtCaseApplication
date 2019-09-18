import { decorate, computed, action, observable } from "mobx";
import PromiseStore from "./PromiseStore";
import config from "../lib/config";

export default class UserStore extends PromiseStore {
  token: string = "";
  key: string = config.keys.local_storage_key;

  get getToken() {
    const token = window.localStorage.getItem(this.key);
    if (token !== null) {
      this.token = token;
      return JSON.parse(token);
    }
    return null;
  }

  public setToken = (token: string): void => {
    window.localStorage.setItem(this.key, JSON.stringify({ token }));
  };

  remove = (): void => {
    if (window.localStorage.getItem(this.key)) {
      window.localStorage.removeItem(this.key);
    }
  };
  userLogin(): IMessage {
    if (this.success && this.data) {
      this.setToken(this.data.token);
      return { text: this.data.message, status: parseInt(this.data.status) };
    }
    return { text: "Login failed", status: 500 };
  }

  userRegister(): IMessage {
    if (this.success && this.data) {
      return { text: this.data.message, status: parseInt(this.data.status) };
    }
    return { text: "Register failed", status: 500 };
  }

  sendMail(): IMessage {
    if (this.success && this.data) {
      return { text: this.data.message, status: parseInt(this.data.status) };
    }
    return { text: "Request failed", status: 500 };
  }

  resetPassword(): IMessage {
    // console.log(this.success, this.data);
    if (this.success && this.data) {
      return { text: this.data.message, status: Number(this.data.status) };
    }
    return { text: "Reset password failed", status: 500 };
  }

  get firstUser() {
    if (this.success) {
      return this.data && this.data[0];
    }
    return null;
  }
  get allUsers() {
    if (this.success) {
      return this.data;
    }
    return null;
  }
}

decorate(UserStore, {
  token: observable,
  getToken: computed,
  setToken: action,
  remove: action,
  firstUser: computed,
  allUsers: computed,
  userLogin: action,
  userRegister: action,
  sendMail: action
});
