import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import AboutUs from './AboutUs';

describe('AboutUs component', () => {
    const userData = {
        firstName: 'Іван',
        lastName: 'Петренко',
        email: 'ivan.petrenko@example.com',
    };

    it('renders sidebar links', () => {
        render(
            <MemoryRouter>
                <AboutUs userData={userData} />
            </MemoryRouter>
        );
        expect(screen.getByText('Про нас')).toBeInTheDocument();
        expect(screen.getByText("Кар'єра")).toBeInTheDocument();
        expect(screen.getByText('Контакти')).toBeInTheDocument();
        expect(screen.getByText('Блог')).toBeInTheDocument();
        expect(screen.getByText('Форум')).toBeInTheDocument();
        expect(screen.getByText('Політика конфіденційності')).toBeInTheDocument();
        expect(screen.getByText('Умови використання')).toBeInTheDocument();
        expect(screen.getByText('Політика файлів cookie')).toBeInTheDocument();
    });

    it('renders logo and title', () => {
        render(
            <MemoryRouter>
                <AboutUs userData={userData} />
            </MemoryRouter>
        );
        expect(screen.getByAltText('Finance Manager Logo')).toBeInTheDocument();
        expect(screen.getByText('APEX FINANCE')).toBeInTheDocument();
    });

    it('renders user display name (firstName + lastName)', () => {
        render(
            <MemoryRouter>
                <AboutUs userData={userData} />
            </MemoryRouter>
        );
        expect(screen.getByText('Іван Петренко')).toBeInTheDocument();
    });

    it('renders user email if name is missing', () => {
        render(
            <MemoryRouter>
                <AboutUs userData={{ email: 'test@example.com' }} />
            </MemoryRouter>
        );
        expect(screen.getByText('test@example.com')).toBeInTheDocument();
    });

    it('renders main content sections', () => {
        render(
            <MemoryRouter>
                <AboutUs userData={userData} />
            </MemoryRouter>
        );
        expect(screen.getByText('Наша місія')).toBeInTheDocument();
        expect(screen.getByText('Наша історія')).toBeInTheDocument();
        expect(screen.getByText('Наша команда')).toBeInTheDocument();
        expect(screen.getByText('Наші засновники та ідейні натхненники')).toBeInTheDocument();
        expect(screen.getByText('Назарій Горбачук - Головний виконавчий директор (CEO)')).toBeInTheDocument();
        expect(screen.getByText('Андрій Стефунька - Головний технічний директор (CTO)')).toBeInTheDocument();
        expect(screen.getByText('Андрій Щерба - Головний фінансовий директор (CFO)')).toBeInTheDocument();
    });

    it('matches snapshot', () => {
        const { asFragment } = render(
            <MemoryRouter>
                <AboutUs userData={userData} />
            </MemoryRouter>
        );
        expect(asFragment()).toMatchSnapshot();
    });
});      