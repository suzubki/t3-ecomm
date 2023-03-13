import slugify from "slugify";

export const capitalizeFirstLetter = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export const slugifyText = (str: string) => {
  return slugify(str, {
    lower: true,
    remove: /[*+~.()'"!:@]/g
  });
}