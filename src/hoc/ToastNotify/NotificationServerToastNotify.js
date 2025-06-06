import { ErrorToast, SuccessToast } from "./ToastNotify";

export const NotificationServerToastNotify = (errorJson) => {
  errorJson.map((data) => {
    switch (data.type) {
      case "success":
        SuccessToast(data.msg);
        break;
      case "error":
        ErrorToast(data.msg);
        break;
    }
  });
};
