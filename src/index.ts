export const getPictureUrl = (
  apiUrl: string,
  collectionId: string,
  productId: string,
  picture: string
): string => {
  return `${apiUrl}/api/files/${collectionId}/${productId}/${picture}`;
};
