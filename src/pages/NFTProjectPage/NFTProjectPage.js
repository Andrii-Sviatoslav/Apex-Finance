import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import piggy1 from "../../images/piggy1.png";
import piggy2 from "../../images/piggy2.png";
import piggy3 from "../../images/piggy3.png";
import piggy4 from "../../images/piggy4.png";
import piggy5 from "../../images/piggy5.png";
import piggy6 from "../../images/piggy6.png";
import piggy7 from "../../images/piggy7.png";
import piggy8 from "../../images/piggy8.png";
import piggy9 from "../../images/piggy9.png";
import piggies_main from "../../images/piggies_main.png";
import piggie_budgeter from "../../images/piggy_budgeter.png";
import piggie_enterprenuer from "../../images/piggy_entrepreneur.png";
import piggie_investor from "../../images/piggy_investor.png";
import piggie_freak from "../../images/piggy_freak.png";
import piggie_learner from "../../images/piggy_learner.png";
import piggie_nomad from "../../images/piggy_nomad.png";
import piggie_stable from "../../images/piggy_stable.png";
import piggie_wealthy from "../../images/piggy_wealthy.png";
import phoneFuture1 from "../../images/phone_future_1.png";
import phoneFuture2 from "../../images/phone_future_2.png";
import phoneFuture3 from "../../images/phone_future_3.png";
import phoneFuture4 from "../../images/phone_future_4.png";
import finalBenefit1 from "../../images/final_benefit_1.png";
import finalBenefit2 from "../../images/final_benefit_2.png";
import teamMember1 from "../../images/team_member_1.jpg";
import teamMember2 from "../../images/team_member_2.jpg";
import teamMember3 from "../../images/team_member_3.jpg";
import teamMember4 from "../../images/team_member_1.jpg"; // change with real img

const NFTProjectPage = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    console.log(
      "NFTProjectPage component has mounted and is trying to render."
    );
  }, []);

  // Scroll to hash target on mount and when hash changes
  useEffect(() => {
    const scrollToHash = () => {
      const hash = window.location.hash;
      if (hash) {
        const el = document.getElementById(hash.slice(1));
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }
    };
    scrollToHash();
    window.addEventListener("hashchange", scrollToHash);
    return () => window.removeEventListener("hashchange", scrollToHash);
  }, []);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const ApexGuardianPersonality = ({ image, name }) => (
    <div className="text-center">
      <img
        src={image}
        alt={name}
        className="w-24 h-24 rounded-full mx-auto mb-2 shadow-md"
      />
      <p className="text-gray-700 text-sm font-medium">{name}</p>
    </div>
  );

  // TeamMember
  const TeamMember = ({ name, role, avatar, linkedinUrl }) => (
    <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <img
        src={avatar}
        alt={name}
        className="w-24 h-24 rounded-full mb-3 object-cover border-4 border-blue-100"
      />
      <h4 className="text-lg font-semibold text-gray-800">{name}</h4>
      <p className="text-blue-600 text-sm">{role}</p>
      {/* Використовуємо linkedinUrl, якщо надано, інакше використовуємо '#' */}
      <a
        href={linkedinUrl || "#"}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-2 text-gray-500 hover:text-blue-600"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 inline-block mr-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.879a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.102 1.101"
          />
        </svg>
        LinkedIn
      </a>
    </div>
  );

  const FaqItem = ({ question, answer, index }) => (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex justify-between items-center w-full text-left font-semibold text-lg text-gray-800 hover:text-blue-600 focus:outline-none"
        onClick={() => toggleFaq(index)}
      >
        {question}
        <svg
          className={`w-5 h-5 transition-transform ${
            openFaq === index ? "rotate-180" : "rotate-0"
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>
      {openFaq === index && (
        <p className="mt-3 text-gray-600 leading-relaxed">{answer}</p>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100 font-['Inter'] text-gray-800 p-4">
      {/* Site Header (same functionality as main page) */}
      <header className="py-5 px-4 md:px-8 bg-white bg-opacity-90 backdrop-blur-sm shadow-lg rounded-2xl mb-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <img
              src={piggy1}
              alt="APEX Finance Logo"
              className="h-10 w-10 mr-3 rounded-full shadow-md border border-gray-100"
            />
            <span className="text-2xl md:text-3xl font-extrabold text-indigo-700 tracking-tight">
              APEX FINANCE
            </span>
          </div>
          {/* Mobile menu - open button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          <nav className="hidden lg:flex space-x-6 items-center">
            <Link
              to="/nft-project#collection"
              className="text-base md:text-lg font-medium text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-lg transition duration-300 ease-in-out hover:bg-gray-50"
            >
              Проект NFT
            </Link>
            <Link
              to="/"
              className="text-base md:text-lg font-medium text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-lg transition duration-300 ease-in-out hover:bg-gray-50"
            >
              Продукт
            </Link>
            <Link
              to="/#features"
              className="text-base md:text-lg font-medium text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-lg transition duration-300 ease-in-out hover:bg-gray-50"
            >
              Функції
            </Link>
            <Link
              to="/#Footer"
              className="text-base md:text-lg font-medium text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-lg transition duration-300 ease-in-out hover:bg-gray-50"
            >
              Маркетплейс
            </Link>
            <Link
              to="/about-us"
              className="text-base md:text-lg font-medium text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-lg transition duration-300 ease-in-out hover:bg-gray-50"
            >
              Команда
            </Link>
            <Link
              to="/login"
              className="text-base md:text-lg font-medium text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-lg transition duration-300 ease-in-out hover:bg-gray-50"
            >
              Увійти
            </Link>
            <Link
              to="/register"
              className="bg-indigo-600 text-white text-base md:text-lg font-semibold px-5 py-2.5 rounded-full shadow-lg hover:bg-indigo-700 transition duration-300 ease-in-out transform hover:scale-105"
            >
              Зареєструватися
            </Link>
          </nav>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed inset-0 z-50 transform transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } lg:hidden`}
      >
        <div
          className="absolute inset-0 bg-black bg-opacity-40"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        ></div>
        <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link
              to="/nft-project#collection"
              className="-m-1.5 p-1.5"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">APEX Finance</span>
              <img
                className="h-8 w-auto"
                src={piggy1}
                alt="APEX Finance Logo"
              />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Закрити меню</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Link
                  to="/nft-project#collection"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Проект NFT
                </Link>
                <Link
                  to="/"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Продукт
                </Link>
                <Link
                  to="/#features"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Функції
                </Link>
                <Link
                  to="/#Footer"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Маркетплейс
                </Link>
                <Link
                  to="/about-us"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Команда
                </Link>
              </div>
              <div className="py-6">
                <Link
                  to="/login"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Увійти
                </Link>
                <Link
                  to="/register"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Зареєструватися
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Header / NFT Collection Section */}
      <header
        id="collection"
        className="relative bg-white pt-16 pb-20 px-4 md:px-8 shadow-md rounded-lg"
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-12">
          <div className="md:w-1/2 text-center md:text-left">
            <p className="text-sm uppercase tracking-wider text-gray-500 mb-2">
              ApexGuardian
            </p>
            <h1 className="text-5xl font-extrabold leading-tight mb-6">
              Колекція NFT ApexGuardian
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto md:mx-0">
              Підключіть свій гаманець, щоб створити ApexGuardian.
            </p>
            <a
              href="https://wallet.google/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-emerald-600 transition-transform transform hover:scale-105 shadow-lg"
            >
              ПІДКЛЮЧИТИ ГАМАНЕЦЬ
            </a>
          </div>
          <div className="md:w-1/2 grid grid-cols-3 gap-4 p-4 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-3xl shadow-xl">
            {[
              piggy1,
              piggy2,
              piggy3,
              piggy4,
              piggy5,
              piggy6,
              piggy7,
              piggy8,
              piggy9,
            ].map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`ApexGuardian NFT ${index + 1}`}
                className="w-full h-auto rounded-xl object-cover shadow-sm"
              />
            ))}
          </div>
        </div>
        <div className="mt-16 text-center">
          <a
            href="https://opensea.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-10 py-4 rounded-full text-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all shadow-lg"
          >
            КУПИТИ НА OPENSEA
          </a>
        </div>
      </header>

      {/* Hi! I'm ApexGuardian Section */}
      <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-gray-100 to-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-12 md:space-y-0 md:space-x-16">
          <div className="md:w-1/2 text-center md:text-left">
            <p className="text-sm uppercase tracking-wider text-gray-500 mb-2">
              НЕ ЗВИЧАЙНА СКАРБНИЧКА
            </p>
            <h2 className="text-4xl font-extrabold leading-tight mb-6">
              Привіт! Я ApexGuardian{" "}
              <span className="text-pink-500 text-5xl">🛡️</span>
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Моя місія — безперешкодно з'єднати світ криптовалют і традиційних
              грошей. Я вже подбала про ваші фінанси, дозвольте мені провести
              вас у світ криптовалют.
            </p>
            <div className="flex justify-center md:justify-start space-x-8 text-center mt-8">
              <div className="p-4 bg-white rounded-lg shadow-sm">
                <p className="text-2xl font-bold text-blue-600">0.06 ETH</p>
                <p className="text-sm text-gray-500">У відкритому продажі</p>
              </div>
              <div className="p-4 bg-white rounded-lg shadow-sm">
                <p className="text-2xl font-bold text-purple-600">8</p>
                <p className="text-sm text-gray-500">Особистостей</p>
              </div>
              <div className="p-4 bg-white rounded-lg shadow-sm">
                <p className="text-2xl font-bold text-green-600">60</p>
                <p className="text-sm text-gray-500">Мальованих рис</p>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            {/* */}
            <img
              src={piggies_main}
              alt="ApexGuardian"
              className="rounded-xl shadow-lg max-w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Personalities Section */}
      <section id="benefits" className="py-20 px-4 md:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10">
            У нашого ApexGuardian 8 особистостей, яка ваша?
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6">
            <ApexGuardianPersonality image={piggie_budgeter} name="Художник" />
            <ApexGuardianPersonality image={piggie_stable} name="Мрійник" />
            <ApexGuardianPersonality
              image={piggie_enterprenuer}
              name="Науковець"
            />
            <ApexGuardianPersonality image={piggie_wealthy} name="Контролер" />
            <ApexGuardianPersonality image={piggie_investor} name="Дослідник" />
            <ApexGuardianPersonality image={piggie_freak} name="Майстер" />
            <ApexGuardianPersonality image={piggie_learner} name="Мандрівник" />
            <ApexGuardianPersonality image={piggie_nomad} name="Новатор" />
          </div>
        </div>
      </section>

      {/* Holder Benefits Section */}
      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold mb-12">
            Переваги для власників
          </h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl shadow-lg text-left">
              <h3 className="text-2xl font-bold mb-4">
                Розблокуйте силу ApexGuardian
              </h3>
              <p className="text-gray-700 mb-4">
                Отримайте необмежений доступ до всіх поточних та майбутніх
                функцій існуючої програми ApexGuardian. Це більше, ніж просто
                скарбничка; це повна інтеграція ApexGuardian Family! Ніколи не
                обмежуйте себе.
              </p>
              <p className="text-sm text-gray-500">✔️ 03/2022</p>
              {/* */}
              <img
                src={finalBenefit1}
                alt="Unlock ApexGuardian"
                className="mt-6 rounded-lg shadow-md"
              />
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl shadow-lg text-left">
              <h3 className="text-2xl font-bold mb-4">
                Отримайте ексклюзивний доступ до ApexGuardian
              </h3>
              <p className="text-lg text-gray-700 mb-4">
                Насолоджуйтесь пріоритетним доступом до мерчу ApexGuardian,
                дропів, розіграшів, квестів та ексклюзивних подій, що
                зарезервовані лише для власників токенів. І ви не просто власник
                токена, ви — один з нас!
              </p>
              <p className="text-sm text-gray-500">✔️ Після 100% мінту</p>
              {/* */}
              <img
                src={finalBenefit2}
                alt="Exclusive Access"
                className="mt-6 rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Crypto Future Section */}
      <section id="future" className="py-20 px-4 md:px-8 bg-gray-100">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold mb-12">
            Будьте частиною нашого крипто-майбутнього
          </h2>
          <div className="relative flex flex-col items-center">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-300"></div>

            <div className="grid md:grid-cols-2 gap-16 w-full max-w-5xl">
              {/* Item 1 */}
              <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-right md:justify-end">
                <div className="md:w-1/2 order-2 md:order-1 p-4">
                  <h3 className="text-2xl font-bold mb-3">
                    Аналізуйте свої криптовалюти так, як ви знаєте
                  </h3>
                  <p className="text-gray-700">
                    Ми віримо, що криптовалюти мають бути такими ж легкими для
                    розуміння, як і традиційні фінанси. Вам потрібно їх
                    аналізувати так, як ви знаєте.
                  </p>
                </div>
                <div className="md:w-1/2 order-1 md:order-2 flex justify-center p-4">
                  {/* */}
                  <img
                    src={phoneFuture1}
                    alt="App Screen 1"
                    className="rounded-xl shadow-lg"
                  />
                </div>
              </div>
              {/* Spacer for timeline dot */}
              <div className="hidden md:block"></div>
              {/* Item 2 */}
              <div className="hidden md:block"></div>{" "}
              {/* Spacer for timeline dot */}
              <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left">
                <div className="md:w-1/2 p-4">
                  {/* */}
                  <img
                    src={phoneFuture2}
                    alt="App Screen 2"
                    className="rounded-xl shadow-lg"
                  />
                </div>
                <div className="md:w-1/2 p-4">
                  <h3 className="text-2xl font-bold mb-3">
                    Регулярні інвестиції
                  </h3>
                  <p className="text-gray-700">
                    Повні гаманці щомісяця і заробляйте з кожною іншою криптою,
                    але в потрібний час. Ми використовуємо DCA (усереднення
                    доларової вартості).
                  </p>
                </div>
              </div>
              {/* Item 3 */}
              <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-right md:justify-end">
                <div className="md:w-1/2 order-2 md:order-1 p-4">
                  <h3 className="text-2xl font-bold mb-3">
                    Колекція Crosschain NFT
                  </h3>
                  <p className="text-gray-700">
                    У вас коли-небудь був ApexGuardian? NFT на Ethereum, Solana,
                    Cardano? Як їх відстежити?
                  </p>
                </div>
                <div className="md:w-1/2 order-1 md:order-2 flex justify-center p-4">
                  {/* */}
                  <img
                    src={phoneFuture3}
                    alt="App Screen 3"
                    className="rounded-xl shadow-lg"
                  />
                </div>
              </div>
              {/* Spacer for timeline dot */}
              <div className="hidden md:block"></div>
              {/* Item 4 */}
              <div className="hidden md:block"></div>{" "}
              {/* Spacer for timeline dot */}
              <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left">
                <div className="md:w-1/2 p-4">
                  {/* */}
                  <img
                    src={phoneFuture4}
                    alt="App Screen 4"
                    className="rounded-xl shadow-lg"
                  />
                </div>
                <div className="md:w-1/2 p-4">
                  <h3 className="text-2xl font-bold mb-3">
                    Доступ до світу DeFi
                  </h3>
                  <p className="text-gray-700">
                    Світ DeFi дозволяє вам інвестувати та збільшувати свої
                    гроші. Ви можете заблокувати свою криптографію в
                    смарт-контрактах.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Super easy buying and swapping cryptos */}
      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-12 md:space-y-0 md:space-x-16">
          <div className="md:w-1/2 flex justify-center">
            {/* */}
            <img
              src={piggies_main}
              alt="Easy Crypto"
              className="rounded-xl shadow-lg max-w-full h-auto"
            />
          </div>
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-4xl font-extrabold leading-tight mb-6">
              Надзвичайно легка купівля та обмін криптовалют
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Чи думали ви коли-небудь, як купити біткойн? Або швидко обміняти
              одну криптовалюту на іншу через ApexGuardian for Crypto — у вас
              буде все. Обміняйте свої існуючі криптовалюти на інші або купуйте
              криптовалюти за допомогою картки? Все це можна зробити всього за
              кілька кроків.
            </p>
          </div>
        </div>
      </section>

      {/* ApexGuardian Team Section */}
      <section id="team" className="py-20 px-4 md:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold mb-12">
            Команда ApexGuardian
          </h2>
          <p className="text-lg text-gray-600 mb-10">
            Ми працюємо над створенням дивовижного фінансового світу для всіх
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <TeamMember
              name="Назарій"
              role="CEO & Засновник"
              avatar={teamMember1}
              linkedinUrl="https://ua.linkedin.com/in/nazarii-horbachuk-6a5703323"
            />
            <TeamMember
              name="Андрій"
              role="CTO & Співзасновник"
              avatar={teamMember3}
              linkedinUrl="https://www.linkedin.com/in/andrii-shcherba-286a22366/"
            />
            <TeamMember
              name="Святослав"
              role="Дизайнер"
              avatar={teamMember2}
              linkedinUrl="https://ua.linkedin.com/in/pavla-profile"
            />
            <TeamMember name="Тетяна" role="Маркетолог" avatar={teamMember4} />{" "}
            {/* Без конкретного URL, буде використовувати '#' */}
          </div>
          <p className="text-gray-500 mt-8">та 8 інших членів команди</p>
        </div>
      </section>

      {/* Mint NFT CTA Section */}
      <section className="py-20 px-4 md:px-8 bg-emerald-500 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-extrabold mb-6">
            Отримайте свій #1 NFT для особистих фінансів
          </h2>
          <p className="text-lg opacity-90 mb-10">Не чекайте</p>
          <button className="bg-white text-emerald-600 px-10 py-5 rounded-full text-xl font-bold hover:bg-gray-100 transition-transform transform hover:scale-105 shadow-lg">
            МИНТИТИ ЗАРАЗ
          </button>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-5xl font-extrabold text-center text-gray-300 mb-4">
            FAQ
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12">
            Цікаво? Тут ви можете знайти відповідь.
          </p>
          <div className="space-y-4">
            <FaqItem
              index={1}
              question="Як мені створити ApexGuardian NFT?"
              answer="Для створення ApexGuardian NFT вам потрібно підключити свій крипто-гаманець (наприклад, MetaMask) до нашої платформи та слідувати інструкціям з мінтингу. Переконайтеся, що у вас достатньо ETH для покриття комісій за газ."
            />
            <FaqItem
              index={2}
              question="Чому я повинен купити ApexGuardian NFT?"
              answer="Придбання ApexGuardian NFT надає вам доступ до преміум-функцій програми ApexGuardian, ексклюзивних переваг для власників, раннього доступу до нових функцій, а також можливість стати частиною спільноти, орієнтованої на крипто-фінанси."
            />
            <FaqItem
              index={3}
              question="Чим це відрізняється від звичайної преміум-ліцензії на все життя?"
              answer="ApexGuardian NFT – це більше, ніж просто ліцензія. Це цифровий актив, який надає вам володіння та утиліту в екосистемі ApexGuardian, включаючи доступ до ексклюзивного вмісту, голосування за функції та можливості заробітку, що не пропонує традиційна ліцензія."
            />
            <FaqItem
              index={4}
              question="Чи будуть ті ж колекції знову в майбутньому?"
              answer="Кожна колекція NFT є унікальною і має обмежену кількість. Хоча можуть бути випущені нові колекції з різними художніми стилями та функціями, ця конкретна колекція ApexGuardian NFT є лімітованим випуском."
            />
            <FaqItem
              index={5}
              question="Що я можу робити зі ApexGuardian NFT?"
              answer="Ви можете демонструвати його як свій аватар, торгувати ним на вторинних ринках, використовувати його для розблокування функцій ApexGuardian Premium та брати участь в ексклюзивних подіях спільноти. Потенційні можливості для P2E (Play-to-Earn) та стейкінгу можуть бути додані в майбутньому."
            />
            <FaqItem
              index={6}
              question="Яка токеноміка проекту?"
              answer="Токеноміка проекту розроблена для створення цінності та стійкості. Вона включає обмежену пропозицію NFT, роялті з вторинних продажів, які йдуть на розвиток проекту, та потенційні механізми стейкінгу, які надаватимуть власникам винагороди."
            />
            <FaqItem
              index={7}
              question="Чи отримую я повне право власності на свій NFT?"
              answer="Так, коли ви купуєте ApexGuardian NFT, ви отримуєте повне право власності на токен NFT, який зберігається у вашому гаманці. Це включає право торгувати, дарувати або продавати його на вторинних ринках."
            />
            <FaqItem
              index={8}
              question="Що таке NFT?"
              answer="NFT (незмінний токен) – це унікальний криптографічний токен, що існує в блокчейні і представляє унікальний предмет. NFT можуть бути чим завгодно: від цифрових картин до віртуальних нерухомості."
            />
            <FaqItem
              index={9}
              question="Що таке Metamask?"
              answer="MetaMask – це крипто-гаманець та шлюз до додатків на основі блокчейну. Він дозволяє користувачам керувати своїми обліковими записами Ethereum, зберігати ETH та інші токени ERC-20, а також взаємодіяти з децентралізованими додатками (DApps)."
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        id="footer"
        className="bg-gray-800 text-white py-10 px-4 md:px-8 text-center"
      >
        <div className="max-w-7xl mx-auto">
          <p className="mb-4">
            Smart Contract Address: 0xBeAcBdeA00000000000000000000000000000000
          </p>
          <p className="mb-6">
            ApexGuardian NFT створено з ❤️ за SYSDOCT.
            <br />
            Колекція ілюстрована Тетяною Довгун (AnDiDi).
          </p>
          <div className="flex justify-center space-x-6 mb-6">
            {/* Використовуємо placeholder URL для соціальних мереж */}
            <a
              href="https://twitter.com/apexguardian"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors"
            >
              <i className="fab fa-twitter text-2xl"></i> {/* Twitter icon */}
            </a>
            <a
              href="https://instagram.com/apexguardian"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors"
            >
              <i className="fab fa-instagram text-2xl"></i>{" "}
              {/* Instagram icon */}
            </a>
            <a
              href="https://facebook.com/apexguardian"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors"
            >
              <i className="fab fa-facebook-f text-2xl"></i>{" "}
              {/* Facebook icon */}
            </a>
          </div>
          <p>
            &copy; {new Date().getFullYear()} ApexGuardian NFT. Усі права
            захищені.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default NFTProjectPage;
