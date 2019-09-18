import React, { Component } from "react";
import { toast } from "react-toastify";

class Notification extends Component {
  notify = () => {
    toast.success("Success Notification !", {
      position: toast.POSITION.TOP_CENTER
    });

    toast.error("Error Notification !", {
      position: toast.POSITION.TOP_LEFT
    });
  };

  render() {
    return <button onClick={this.notify}>Notify</button>;
  }
}

export default Notification;
