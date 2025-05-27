import type { GoogleFormData } from "./types";

// Функция для отправки данных в Google Form
export const submitToGoogleForm = async (
  data: GoogleFormData,
  formUrl: string,
): Promise<boolean> => {
  const formData = new FormData();

  // Замените на ваши entry ID из Google Form
  formData.append("entry.YOUR_NAME_ENTRY_ID", data.name);
  formData.append("entry.YOUR_PHONE_ENTRY_ID", data.phone);

  try {
    await fetch(formUrl, {
      method: "POST",
      body: formData,
      mode: "no-cors", // Обязательно для Google Forms
    });
    return true;
  } catch (error) {
    console.error("Ошибка отправки формы:", error);
    return false;
  }
};
