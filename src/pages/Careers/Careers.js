import React from 'react';
import { Link } from 'react-router-dom';
import { BriefcaseIcon } from '@heroicons/react/24/outline'; // Імпортуємо іконки

const logoUrl = "/image.png";

function Careers({ userData }) {
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
                        <Link to="/" className="flex items-center">
                            <img
                                src={logoUrl}
                                alt="Finance Manager Logo"
                                className="w-10 h-10 mr-3 object-contain rounded-full shadow-sm"
                            />
                            <span className="text-2xl font-extrabold text-gray-900">
                                APEX FINANCE
                            </span>
                        </Link>
                    </div>
                    <nav className="space-y-3">
                        {/* Додаткові статичні посилання */}
                        <Link to="/about-us" className="flex items-center text-gray-700 hover:text-blue-700 hover:bg-blue-50 px-4 py-2.5 rounded-xl transition-colors duration-200">
                            Про нас
                        </Link>
                        <Link to="/careers" className="flex items-center text-blue-700 bg-blue-50 px-4 py-2.5 rounded-xl font-semibold transition-all duration-200 shadow-sm hover:shadow-md">
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
                        <Link to="/cookie-policy" className="flex items-center text-gray-700 hover:text-blue-700 hover:bg-blue-50 px-4 py-2.5 rounded-xl transition-colors duration-200">
                            Політика файлів cookie
                        </Link>
                    </nav>
                </div>
            </aside>

            {/* Основний вміст сторінки */}
            <div className="flex-1 flex flex-col p-8 max-w-[1400px] mx-auto">
                {/* Хедер */}
                <header className="bg-white p-5 rounded-2xl shadow-lg flex justify-between items-center mb-8 border border-gray-100">
                    <h1 className="text-3xl font-extrabold text-gray-900">Кар'єра</h1>
                    <div className="flex items-center space-x-6">
                        <div className="flex items-center space-x-3">
                            <div className="text-base">
                                <p className="font-semibold text-gray-800">{displayName}</p>
                            </div>
                        </div>
                    </div>
                </header>

                <div className="bg-white p-7 rounded-2xl shadow-lg border border-gray-100 flex flex-col">
                    <h2 className="text-xl font-semibold text-gray-700 mb-4 flex items-center">
                        <BriefcaseIcon className="h-6 w-6 text-gray-600 mr-2" /> Приєднуйтесь до нашої команди!
                    </h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        В APEX FINANCE ми віримо, що наші співробітники – це наш найбільший актив.
                        Ми шукаємо талановитих, пристрасних та інноваційних професіоналів, які
                        допоможуть нам формувати майбутнє фінансового управління. Якщо ви готові
                        змінювати світ на краще та працювати в динамічному середовищі, ми запрошуємо вас
                        розглянути наші поточні вакансії.
                    </p>

                    <h3 className="text-lg font-semibold text-gray-700 mb-3 mt-6">Чому варто працювати з нами?</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                        <li>Конкурентна заробітна плата та пільги.</li>
                        <li>Можливості для професійного зростання та розвитку.</li>
                        <li>Культура, що підтримує інновації та співпрацю.</li>
                        <li>Гнучкий графік роботи та віддалена робота.</li>
                        <li>Приємна та інклюзивна атмосфера.</li>
                    </ul>

                    <h3 className="text-lg font-semibold text-gray-700 mb-3 mt-6">Поточні вакансії</h3>
                    <div className="space-y-4">
                        <div className="border border-gray-200 p-4 rounded-lg shadow-sm">
                            <h4 className="text-md font-semibold text-gray-800">Розробник програмного забезпечення (React/Node.js)</h4>
                            <p className="text-gray-600 text-sm">Ми шукаємо досвідченого розробника для роботи над нашими веб-додатками.</p>
                            <a href="#" className="text-blue-600 hover:underline text-sm mt-2 block">Детальніше</a>
                        </div>
                        <div className="border border-gray-200 p-4 rounded-lg shadow-sm">
                            <h4 className="text-md font-semibold text-gray-800">Спеціаліст з підтримки клієнтів</h4>
                            <p className="text-gray-600 text-sm">Допоможіть нашим користувачам отримати найкращий досвід роботи з APEX FINANCE.</p>
                            <a href="#" className="text-blue-600 hover:underline text-sm mt-2 block">Детальніше</a>
                        </div>
                        <div className="border border-gray-200 p-4 rounded-lg shadow-sm">
                            <h4 className="text-md font-semibold text-gray-800">Маркетинговий менеджер</h4>
                            <p className="text-gray-600 text-sm">Створюйте та реалізуйте стратегії для залучення нових користувачів.</p>
                            <a href="#" className="text-blue-600 hover:underline text-sm mt-2 block">Детальніше</a>
                        </div>
                    </div>

                    <p className="text-gray-700 mt-6">
                        Не знайшли підходящої вакансії? Надішліть нам своє резюме на <a href="mailto:careers@apexfinance.com" className="text-blue-600 hover:underline">careers@apexfinance.com</a>, і ми зв'яжемося з вами.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Careers;
