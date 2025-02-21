export const getFormData = () => {
  const saveData = localStorage.getItem('formData');
  return saveData ? JSON.parse(saveData) : {};
};
