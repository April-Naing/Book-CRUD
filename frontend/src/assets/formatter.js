export const formatDate = (isoDateString) => {
    const date = new Date(isoDateString);
    const options = { year: 'numeric', month: 'long', day: 'numeric'};
    return date.toLocaleDateString('en-US', options);
};

export const formatEditDate = (isoString) => {
  const date = new Date(isoString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Ensure month is two digits
  const day = String(date.getDate()).padStart(2, '0'); // Ensure day is two digits

  return `${year}-${month}-${day}`;
};