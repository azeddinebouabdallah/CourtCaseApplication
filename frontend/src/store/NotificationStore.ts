import { decorate, computed, action } from "mobx";
import PromiseStore from "./PromiseStore";
import { toast } from "react-toastify";

export default class NotificationStore extends PromiseStore {
  message: string | null = null;
  success: boolean = false;
  err: boolean = false;

  get getMessage() {
    return this.message;
  }
  setMessage(message: string, status: number) {
    this.message = message;
    this.success = status === 200 ? true : false;
    this.err = status === 500 ? true : false;
    console.log(message, status);
    this.notify(this.message, this.success, this.err);
  }
  notify = (message: string, success: boolean, err: boolean) => {
    if (success)
      toast.success(message, {
        position: toast.POSITION.TOP_RIGHT
      });
    if (err)
      toast.error(message, {
        position: toast.POSITION.TOP_RIGHT
      });
  };
}

decorate(NotificationStore, {
  notify: action,
  getMessage: computed,
  setMessage: action
});
