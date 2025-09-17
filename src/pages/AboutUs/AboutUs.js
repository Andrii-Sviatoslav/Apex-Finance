import React from 'react';
import { Link } from 'react-router-dom';


const logoUrl = "/image.png"; // Посилання на логотип

function AboutUs({ userData }) {
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
                        <Link to="/about-us" className="flex items-center text-blue-700 bg-blue-50 px-4 py-2.5 rounded-xl font-semibold transition-all duration-200 shadow-sm hover:shadow-md">
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
                    <h1 className="text-3xl font-extrabold text-gray-900">Про нас</h1>
                    <div className="flex items-center space-x-6">
                        <div className="flex items-center space-x-3">
                            <div className="text-base">
                                <p className="font-semibold text-gray-800">{displayName}</p>
                            </div>
                        </div>
                    </div>
                </header>

                <div className="bg-white p-7 rounded-2xl shadow-lg border border-gray-100 flex flex-col">
                    <h2 className="text-xl font-semibold text-gray-700 mb-4">Наша місія</h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        APEX FINANCE – це ваш надійний партнер у світі фінансового управління.
                        Ми прагнемо надати нашим користувачам інтуїтивно зрозумілі та потужні інструменти
                        для відстеження доходів, контролю витрат, встановлення фінансових цілей та
                        ефективного планування свого майбутнього. Наша місія – зробити фінансову грамотність
                        доступною та простою для кожного.
                    </p>

                    <h2 className="text-xl font-semibold text-gray-700 mb-4 mt-6">Наша історія</h2>
                    <p className="text-gray-700 leading-relaxed">
                        Заснована у 2025 році у Львові, APEX FINANCE розпочала свій шлях як невеликий стартап з великою ідеєю:
                        спростити особисті фінанси. Відтоді ми виросли, постійно вдосконалюючи наш продукт
                        та додаючи нові функції, щоб задовольнити зростаючі потреби наших користувачів.
                        Ми пишаємося тим, що допомагаємо тисячам людей по всьому світу досягати їхніх фінансових мрій.
                    </p>
                    <h2 className="text-xl font-semibold text-gray-700 mb-4 mt-6">Наша команда</h2>
                    <p className="text-gray-700 leading-relaxed">
                        Зустрічайте наших засновників. За кожним успішним проєктом стоять люди, чия пристрасть і віра в ідею роблять його реальним. Наші засновники — це не просто професіонали, а справжні ентузіасти, об'єднані спільною місією: зробити фінансову сферу прозорою, доступною та зрозумілою для кожного.
                        Вони перетворили своє бачення на платформу APEX FINANCE, яка допомагає тисячам людей досягати фінансової ясності та свободи.</p>

                    <p>
                        <h2 className="text-xl font-semibold text-gray-700 mb-4 mt-6">Наші засновники та ідейні натхненники</h2>
                        <h2 className="text-xl font-semibold text-gray-700 mb-4 mt-6">Назарій Горбачук - Головний виконавчий директор (CEO)</h2>
                        Назарій — це візіонер, який не боїться кидати виклик усталеним правилам. З багаторічним досвідом у фінансовому секторі,
                        він завжди бачив його недоліки та прагнув створити щось краще. Його стратегічне мислення та невичерпна енергія стали рушійною силою APEX FINANCE.
                        Він надихає команду на інновації та втілює в життя сміливі ідеї, щоб ви отримували зручні та ефективні фінансові інструменти. </p>
                    <p>
                        <h2 className="text-xl font-semibold text-gray-700 mb-4 mt-6">Андрій Стефунька - Головний технічний директор (CTO)</h2>
                        <p className="text-gray-700 leading-relaxed"></p></p>
                    Андрій — архітектор наших інновацій. Його талант у розробці технологічних рішень забезпечує міцний фундамент для APEX FINANCE.
                    Він відповідає за надійність, безпеку та масштабованість нашої платформи, впроваджуючи передові технології, щоб ви могли бути впевнені у кожній транзакції.
                    Андрій вірить, що технології мають служити людям, і робить усе можливе, щоб наш продукт був інтуїтивно зрозумілим і бездоганно працював.
                    <h2 className="text-xl font-semibold text-gray-700 mb-4 mt-6">Андрій Щерба - Головний фінансовий директор (CFO)</h2>
                    <p className="text-gray-700 leading-relaxed">
                        Андрій Щерба — серце і розум наших фінансових операцій.
                        Його педантичність, глибоке розуміння ринку та аналітичні здібності гарантують стабільність і фінансове здоров'я компанії. Він керує стратегією росту, забезпечуючи, що APEX FINANCE розвивається згідно з усіма стандартами та вимогами.
                        Андрій створює фінансову прозорість не лише для нас, а й для наших клієнтів, допомагаючи їм впевнено керувати своїми фінансами</p>
                </div>
            </div>
        </div>
    );
}



export default AboutUs;

