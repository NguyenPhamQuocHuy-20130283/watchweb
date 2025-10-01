// Cho các file css global
declare module "*.css" {
  const content: { [className: string]: string };
  export default content;
}
// Nếu có SCSS/SASS
declare module "*.scss";
declare module "*.sass";
// Nếu có file dummy data
declare module "*.ts";
// Nếu có file hình ảnh
declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.svg";
declare module "*.gif";
declare module "*.webp";
declare module "*.bmp";
declare module "swiper/css";
declare module "swiper/css/scrollbar";
