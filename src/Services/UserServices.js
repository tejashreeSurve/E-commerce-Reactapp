import AxoisServices from "./AxiosServices";
import axois from "axios";

var axoisServices = new AxoisServices();

export function getwomenProduct() {
  return axoisServices.GET("womenproduct", {
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
  });
}

export function getmenProduct() {
  return axoisServices.GET("menproduct", {
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
  });
}
