export const usePagination = (page, total) => {
  const pageNum = Number(page);

  if (pageNum >= 4 && pageNum < total - 3) {
    return [1, "...", pageNum - 1, pageNum, pageNum + 1, "...", total];
  } //
  else if (pageNum >= total - 3 && pageNum < total - 2) {
    return [1, "...", pageNum - 1, pageNum, pageNum + 1, "...", total];
  } //
  else if (pageNum >= total - 2 && pageNum !== total) {
    return [1, "...", total - 3, total - 2, total - 1, total];
  } //
  else if (pageNum === total) {
    return [1, "...", total - 2, total - 1, total];
  } //
  else {
    return [1, 2, 3, 4, 5, "...", total];
  }

  
};
