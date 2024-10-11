// service-provider-plugin.js

import { ServiceProvider } from '../services/index'; // Імпорт вашого класу ServiceProvider

export default {
  install(app) {
    // Створюємо екземпляр класу ServiceProvider
    const serviceProvider = new ServiceProvider();

    // Додаємо глобальну властивість $serviceProvider
    app.config.globalProperties.$serviceProvider = serviceProvider;

    // Опціонально: можна додати у плагін більше функцій або передати налаштування
  }
};
