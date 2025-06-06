import React from "react";
import { toast } from "react-toastify";

export const SuccessToast = (data) => {
  toast(data, {
    position: toast.POSITION.TOP_CENTER,
    type: toast.TYPE.SUCCESS,
    rtl: true,
    className: "toast-success-background",
    bodyClassName: "toast-success-font-size",
    progressClassName: "toast-progress-progress-bar",
  });
};

export const ErrorToast = (data) => {
  toast(data, {
    position: toast.POSITION.TOP_CENTER,
    type: toast.TYPE.ERROR,
    rtl: true,
    delay: 100,
    className: "toast-error-background",
    bodyClassName: "toast-success-font-size",
    progressClassName: "toast-progress-progress-bar-error",
    closeButton: (
      <span className={"pt-2"}>
        <i className={"uil uil-multiply"}></i>
      </span>
    ),
  });
};

export const WarningToast = (data, click) => {
  toast(data, {
    position: toast.POSITION.TOP_CENTER,
    type: toast.TYPE.WARNING,
    className: "toast-success-background",
    bodyClassName: "toast-success-font-size",
    progressClassName: "toast-progress-progress-bar",
    onClick: click
      ? () => {
          click();
        }
      : null,
    rtl: true,
  });
};

export const InfoToast = (data) => {
  toast(data, {
    position: toast.POSITION.TOP_CENTER,
    type: toast.TYPE.INFO,
    className: "toast-success-background",
    bodyClassName: "toast-success-font-size",
    progressClassName: "toast-progress-progress-bar",
    rtl: true,
  });
};
