// Russian translations for ExCall
const translations = {
    // Common
    'Loading': 'Загрузка',
    'Please wait': 'Пожалуйста, подождите',
    'OK': 'ОК',
    'Cancel': 'Отмена',
    'Close': 'Закрыть',
    'Save': 'Сохранить',
    'Delete': 'Удалить',
    'Edit': 'Редактировать',
    'Send': 'Отправить',
    'Copy': 'Копировать',
    'Share': 'Поделиться',
    'Download': 'Скачать',
    'Upload': 'Загрузить',
    'Settings': 'Настройки',
    'Yes': 'Да',
    'No': 'Нет',
    
    // Room
    'Join Room': 'Войти в комнату',
    'Room': 'Комната',
    'Leave Room': 'Покинуть комнату',
    'Share Room': 'Поделиться комнатой',
    'Copy Room URL': 'Скопировать ссылку',
    'Room link copied': 'Ссылка скопирована',
    
    // Audio/Video
    'Microphone': 'Микрофон',
    'Camera': 'Камера',
    'Screen': 'Экран',
    'Share Screen': 'Демонстрация экрана',
    'Stop Screen': 'Остановить демонстрацию',
    'Video': 'Видео',
    'Audio': 'Аудио',
    'Mute': 'Выключить микрофон',
    'Unmute': 'Включить микрофон',
    'Start Video': 'Включить видео',
    'Stop Video': 'Выключить видео',
    
    // Chat
    'Chat': 'Чат',
    'Message': 'Сообщение',
    'Send message': 'Отправить сообщение',
    'Type a message': 'Введите сообщение',
    'Private message': 'Личное сообщение',
    'Public message': 'Публичное сообщение',
    'Clear chat': 'Очистить чат',
    'Save chat': 'Сохранить чат',
    
    // Participants
    'Participants': 'Участники',
    'Participant': 'Участник',
    'You': 'Вы',
    'Me': 'Я',
    'joined': 'присоединился',
    'left': 'покинул',
    
    // Settings
    'Speaker': 'Динамик',
    'Select microphone': 'Выберите микрофон',
    'Select camera': 'Выберите камеру',
    'Select speaker': 'Выберите динамик',
    'Mirror video': 'Отзеркалить видео',
    'Virtual Background': 'Виртуальный фон',
    
    // Recording
    'Record': 'Записать',
    'Recording': 'Запись',
    'Start Recording': 'Начать запись',
    'Stop Recording': 'Остановить запись',
    'Recording started': 'Запись началась',
    'Recording stopped': 'Запись остановлена',
    
    // Errors
    'Error': 'Ошибка',
    'Permission denied': 'Доступ запрещен',
    'Camera not found': 'Камера не найдена',
    'Microphone not found': 'Микрофон не найден',
    'Connection failed': 'Ошибка подключения',
    
    // Other
    'Whiteboard': 'Доска',
    'File Sharing': 'Обмен файлами',
    'Emoji': 'Эмодзи',
    'Full Screen': 'Полный экран',
    'Exit Full Screen': 'Выйти из полноэкранного режима',
    'Picture in Picture': 'Картинка в картинке',
    'Raise Hand': 'Поднять руку',
    'Lower Hand': 'Опустить руку',
};

// Apply translations on page load
if (typeof window !== 'undefined') {
    window.translations = translations;
    
    // Function to translate text
    window.translate = function(text) {
        return translations[text] || text;
    };
    
    console.log('Russian translations loaded');
}

