import React from 'react';
import { Link } from 'react-router-dom';

const logoUrl = "/image.png";

function CookiePolicy({ userData }) {
    // Визначення імені для відображення
    const displayName = (userData && userData.firstName && userData.lastName)
        ? `${userData.firstName} ${userData.lastName}`
        : userData?.email;

    return (
        <div className="flex min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 font-['DM Sans']">
            {/* Бічна панель */}
            <aside className="w-64 bg-white p-6 shadow-xl flex flex-col justify-between rounded-r-3xl border-r border-gray-100">
                <div>
                    <div className="flex items-center mb-10 px-2">
                        <img src={logoUrl} alt="APEX FINANCE Logo" className="w-10 h-10 mr-3 object-contain rounded-full shadow-sm" />
                        <span className="text-2xl font-extrabold text-gray-900">APEX FINANCE</span>
                    </div>
                    <nav className="space-y-3">
                        {/* Додаткові статичні посилання */}
                        <Link to="/about-us" className="flex items-center text-gray-700 hover:text-blue-700 hover:bg-blue-50 px-4 py-2.5 rounded-xl transition-colors duration-200">
                            Про нас
                        </Link>
                        <Link to="/careers" className="flex items-center text-gray-700 hover:text-blue-700 hover:bg-blue-50 px-4 py-2.5 rounded-xl transition-colors duration-200">
                            Кар'єра
                        </Link>
                        <Link to="/contact-us" className="flex items-center text-gray-700 hover:text-blue-700 hover:bg-blue-50 px-4 py-2.5 rounded-xl transition-colors duration-200">
                            Контакти
                        </Link>
                        <Link to="/blog" className="flex items-center text-gray-700 hover:text-blue-700 hover:bg-blue-50 px-4 py-2.5 rounded-xl transition-colors duration-200">
                            Блог
                        </Link>
                        <Link to="/forum" className="flex items-center text-gray-700 hover:text-blue-700 hover:bg-blue-50 px-4 py-2.5 rounded-xl transition-colors duration-200">
                            Форум
                        </Link>
                        <Link to="/privacy-policy" className="flex items-center text-gray-700 hover:text-blue-700 hover:bg-blue-50 px-4 py-2.5 rounded-xl transition-colors duration-200">
                            Політика конфіденційності
                        </Link>
                        <Link to="/terms-of-use" className="flex items-center text-gray-700 hover:text-blue-700 hover:bg-blue-50 px-4 py-2.5 rounded-xl transition-colors duration-200">
                            Умови використання
                        </Link>
                        <Link to="/cookie-policy" className="flex items-center text-blue-700 bg-blue-50 px-4 py-2.5 rounded-xl font-semibold transition-all duration-200 shadow-sm hover:shadow-md">
                            Політика файлів cookie
                        </Link>
                    </nav>
                </div>
            </aside>

            {/* Основний вміст сторінки */}
            <div className="flex-1 flex flex-col p-8 max-w-[1400px] mx-auto">
                {/* Хедер */}
                <header className="bg-white p-5 rounded-2xl shadow-lg flex justify-between items-center mb-8 border border-gray-100">
                    <h1 className="text-3xl font-extrabold text-gray-900">Політика файлів cookie</h1>
                    <div className="flex items-center space-x-6">
                        <div className="flex items-center space-x-3">
                            <div className="text-base">
                                <p className="font-semibold text-gray-800">{displayName}</p>
                            </div>
                        </div>
                    </div>
                </header>

                <div className="bg-white p-7 rounded-2xl shadow-lg border border-gray-100 flex flex-col prose max-w-none">
                    <h2 className="text-xl font-semibold text-gray-700 mb-4">Що таке файли cookie?</h2>
                    <p>
                        Файли cookie — це невеликі текстові файли, які зберігаються на вашому комп'ютері
                        або мобільному пристрої, коли ви відвідуєте веб-сайти. Вони широко використовуються
                        для забезпечення роботи веб-сайтів або для підвищення ефективності їхньої роботи,
                        а також для надання інформації власникам сайту.
                    </p>

                    <h2 className="text-xl font-semibold text-gray-700 mb-4 mt-6">Як ми використовуємо файли cookie</h2>
                    <p>Ми використовуємо файли cookie для кількох цілей:</p>
                    <ul className="list-disc list-inside">
                        <li><strong>Основні файли cookie:</strong> Вони необхідні для функціонування нашого веб-сайту.</li>
                        <li><strong>Аналітичні файли cookie:</strong> Допомагають нам зрозуміти, як користувачі взаємодіють з нашим сайтом.</li>
                        <li><strong>Функціональні файли cookie:</strong> Дозволяють нам запам'ятовувати ваші уподобання.</li>
                        <li><strong>Рекламні файли cookie:</strong> Використовуються для показу вам релевантної реклами.</li>
                    </ul>

                    <h2 className="text-xl font-semibold text-gray-700 mb-4 mt-6">Керування файлами cookie</h2>
                    <p>
                        Ви можете контролювати та/або видаляти файли cookie за бажанням – подробиці дивіться на
                        сайті <a href="https://aboutcookies.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">aboutcookies.org</a>.
                        Ви можете видалити всі файли cookie, які вже є на вашому комп'ютері, і можете
                        налаштувати більшість браузерів так, щоб вони запобігали їх розміщенню. Однак,
                        якщо ви це зробите, вам, можливо, доведеться вручну налаштовувати деякі
                        параметри щоразу, коли ви відвідуєте сайт, а деякі служби та функції можуть не працювати.
                    </p>

                    <h2 className="text-xl font-semibold text-gray-700 mb-4 mt-6">Зміни до цієї Політики файлів cookie</h2>
                    <p>
                        Ми можемо час від часу оновлювати нашу Політику файлів cookie. Ми повідомимо вас про
                        будь-які зміни, опублікувавши нову Політику файлів cookie на цій сторінці.
                    </p>
                    <p className="mt-4">
                        Ця Політика файлів cookie набуває чинності з [Поточна дата].
                    </p>
                </div>
            </div>
        </div>
    );
}

export default CookiePolicy;
