const calculateItemsPerView = (screenWidth) => {
  if (screenWidth > 768) {
    if (screenWidth <= 991) {
      return 2;
    }
    return 3;
  }
  return 1;
};

export default calculateItemsPerView;
