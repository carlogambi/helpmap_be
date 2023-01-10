export const position = ({
  lat = 0,
  long = 0,
  address = "",
  type = "",
  images = [""],
  descriptionsIds = [""],
}) => ({
  lat,
  long,
  address,
  type,
  images,
  descriptionsIds,
});
