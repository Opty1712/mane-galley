import { isClientSide } from "./isClientSide";

export const checkIsMobile = () =>
  isClientSide && document.body.offsetWidth <= 1000;
