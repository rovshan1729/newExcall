// Auto-translate script for ExCall
(function() {
    'use strict';

    const translations = {
        // Tabs
        'Profile': 'Профиль',
        'Shortcuts': 'Горячие клавиши',
        'Aspect': 'Вид',
        'Style': 'Стиль',
        'Language': 'Язык',
        'Video': 'Видео',
        'Audio': 'Аудио',
        
        // Room buttons
        'Active rooms': 'Активные комнаты',
        'Lock room': 'Заблокировать комнату',
        'Unlock room': 'Разблокировать комнату',
        'File sharing': 'Обмен файлами',
        'Send email invitation': 'Отправить приглашение',
        
        // Settings
        'Broadcast': 'Трансляция',
        'Lobby': 'Лобби',
        'Volume bar': 'Индикатор громкости',
        'Sounds': 'Звуки',
        'Share': 'Поделиться',
        'Buttons': 'Кнопки',
        'Push to talk': 'Нажми чтобы говорить',
        'Host only recording': 'Запись только для хоста',
        
        // Participants
        'Participants': 'Участники',
        'Mute everyone': 'Выключить всем',
        'Hide everyone': 'Скрыть всех',
        'Eject everyone': 'Исключить всех',
        
        // Chat
        'Chat': 'Чат',
        'Public chat': 'Чат',
        'Public': 'Публичный',
        'Private': 'Личный',
        'Send': 'Отправить',
        'Type your message': 'Введите сообщение',
        'Type a message': 'Введите сообщение',
        'Enter text here...': 'Введите текст...',
        
        // Video Settings
        'Refresh video devices': 'Обновить видеоустройства',
        'Video Source:': 'Источник видео:',
        'Virtual background:': 'Виртуальный фон:',
        'Video Quality:': 'Качество видео:',
        'Screen Quality:': 'Качество экрана:',
        'Screen Optimization:': 'Оптимизация экрана:',
        'Camera FPS:': 'FPS камеры:',
        'Screen FPS:': 'FPS экрана:',
        'Default': 'По умолчанию',
        'None': 'Нет',
        'Detail': 'Детализация',
        'Motion': 'Движение',
        'max frame-per-second': 'максимум кадров/сек',
        
        // Audio Settings
        'Refresh audio devices': 'Обновить аудиоустройства',
        'Audio Source:': 'Источник звука:',
        'Microphone:': 'Микрофон:',
        'Speaker:': 'Динамик:',
        'Audio quality:': 'Качество звука:',
        'Low bandwidth': 'Низкая скорость',
        'Medium bandwidth': 'Средняя скорость',
        'High bandwidth': 'Высокая скорость',
        'Noise Suppression:': 'Шумоподавление:',
        'Noise Suppression': 'Шумоподавление',
        'Test Speaker': 'Тест динамика',
        
        // Video controls
        'Pin video': 'Закрепить видео',
        'Unpin video': 'Открепить видео',
        'Full screen': 'Полный экран',
        'Exit full screen': 'Выйти из полного экрана',
        'Snapshot': 'Снимок',
        'Mirror video': 'Отзеркалить',
        'Private messages': 'Личные сообщения',
        'Ban': 'Забанить',
        'Eject': 'Исключить',
        'Mute audio': 'Выключить звук',
        'Hide video': 'Скрыть видео',
        'Send video to': 'Отправить видео',
        'Send file': 'Отправить файл',
        'Send private message': 'Личное сообщение',
        'Geolocation': 'Геолокация',
        
        // Media
        'Start audio': 'Включить звук',
        'Stop audio': 'Выключить звук',
        'Start video': 'Включить видео',
        'Stop video': 'Выключить видео',
        'Start screen': 'Демонстрация экрана',
        'Stop screen': 'Остановить демонстрацию',
        'Start recording': 'Начать запись',
        'Stop recording': 'Остановить запись',
        
        // Other
        'Leave room': 'Покинуть комнату',
        'Copy room URL': 'Скопировать ссылку',
        'Whiteboard': 'Доска',
        'Editor': 'Редактор',
        'Poll': 'Опрос',
        'Transcription': 'Транскрипция',
        'Picture in picture': 'Картинка в картинке',
        'Take snapshot': 'Сделать снимок',
        'About': 'О программе',
        'Settings': 'Настройки',
        'Emoji': 'Эмодзи',
        'Raise hand': 'Поднять руку',
        'Lower hand': 'Опустить руку',
        
        // Common
        'Room': 'Комната',
        'Join': 'Войти',
        'Leave': 'Выйти',
        'Cancel': 'Отмена',
        'Close': 'Закрыть',
        'Save': 'Сохранить',
        'OK': 'ОК',
        'Yes': 'Да',
        'No': 'Нет',
        'Copy': 'Копировать',
        'Download': 'Скачать',
        'Upload': 'Загрузить',
        'Delete': 'Удалить',
        
        // Messages
        'Loading': 'Загрузка',
        'Please wait': 'Пожалуйста, подождите',
        'Room link copied': 'Ссылка скопирована',
        'Permission denied': 'Доступ запрещен',
        'Error': 'Ошибка',
        'Success': 'Успешно',
        'Warning': 'Предупреждение',
        'Info': 'Информация',
        
        // Labels
        'Name': 'Имя',
        'Email': 'Email',
        'Message': 'Сообщение',
        'Subject': 'Тема',
        'Description': 'Описание',
        'Username': 'Имя пользователя',
        'Password': 'Пароль',
    };

    function translateElement(element) {
        // Translate text content
        const walker = document.createTreeWalker(
            element,
            NodeFilter.SHOW_TEXT,
            null,
            false
        );

        const textNodes = [];
        while (walker.nextNode()) {
            const node = walker.currentNode;
            if (node.nodeValue && node.nodeValue.trim()) {
                textNodes.push(node);
            }
        }

        textNodes.forEach(node => {
            const text = node.nodeValue.trim();
            if (translations[text]) {
                node.nodeValue = node.nodeValue.replace(text, translations[text]);
            }
        });

        // Translate placeholders
        const inputs = element.querySelectorAll('[placeholder]');
        inputs.forEach(input => {
            const placeholder = input.getAttribute('placeholder');
            if (translations[placeholder]) {
                input.setAttribute('placeholder', translations[placeholder]);
            }
        });

        // Translate titles
        const titledElements = element.querySelectorAll('[title]');
        titledElements.forEach(el => {
            const title = el.getAttribute('title');
            if (translations[title]) {
                el.setAttribute('title', translations[title]);
            }
        });

        // Translate aria-labels
        const ariaElements = element.querySelectorAll('[aria-label]');
        ariaElements.forEach(el => {
            const ariaLabel = el.getAttribute('aria-label');
            if (translations[ariaLabel]) {
                el.setAttribute('aria-label', translations[ariaLabel]);
            }
        });
    }

    // Translate on load
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            setTimeout(() => translateElement(document.body), 100);
        });
    } else {
        setTimeout(() => translateElement(document.body), 100);
    }

    // Observe for new elements
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            mutation.addedNodes.forEach(function(node) {
                if (node.nodeType === 1) {
                    translateElement(node);
                }
            });
        });
    });

    if (document.body) {
        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    }

    console.log('ExCall Auto-translate loaded');
})();

