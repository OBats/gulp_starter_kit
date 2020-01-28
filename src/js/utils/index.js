export const handleClass = (handler, elements, cssClass) => {
  if (!elements) return;

  if (Array.isArray(elements)) {
    elements.forEach(element => {
      element.classList[handler](cssClass);
    });
  } else {
    elements.classList[handler](cssClass);
  }
};
