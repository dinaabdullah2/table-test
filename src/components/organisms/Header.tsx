import {  useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { IRootState } from '../../store';
import { useTranslation } from 'react-i18next';
import CalendarIcon from '../atoms/icons/CalendarIcon';
import DropDownLang from '../molecules/DropDownLang';
import ThemeSwitch from '../molecules/ThemeSwitch';
import ToggleSidebarButton from '../atoms/buttons/ToggleSidebarButton';

const Header = () => {

    const themeConfig = useSelector((state: IRootState) => state.themeConfig);
    const { t } = useTranslation();

    return (
        <nav className={themeConfig.semidark && themeConfig.menu === 'horizontal' ? 'dark' : ''}>
            <div className="shadow-sm">
                <div className="relative bg-white flex w-full items-center px-5 py-2.5 dark:bg-black">

                    <div className="horizontal-logo flex lg:hidden gap-2 justify-between items-center ltr:mr-2 rtl:ml-2">
                        <Link to="/" className="main-logo flex items-center shrink-0">
                            <img
                                className="w-8 ltr:-ml-1 rtl:-mr-1 inline"
                                src="/assets/images/logo.svg"
                                alt="logo"
                            />
                            <span className="text-2xl ltr:ml-1.5 rtl:mr-1.5  font-semibold  align-middle hidden md:inline dark:text-white-light transition-all duration-300">
                                Stay Expo
                            </span>
                        </Link>
                        <ToggleSidebarButton />
                    </div>

                    <div className="ltr:mr-2 rtl:ml-2 hidden sm:block">
                        <ul className="flex items-center space-x-2 rtl:space-x-reverse dark:text-[#d0d2d6]">
                            <li>
                                <Link
                                    to="/calendar"
                                    className="block p-2 rounded-full bg-white-light/40 dark:bg-dark/40 hover:text-primary hover:bg-white-light/90 dark:hover:bg-dark/60"
                                >
                                    <CalendarIcon />
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="sm:flex-1 ltr:sm:ml-0 ltr:ml-auto sm:rtl:mr-0 rtl:mr-auto flex items-center space-x-1.5 lg:space-x-2 rtl:space-x-reverse dark:text-[#d0d2d6]">
                        <div className="sm:ltr:mr-auto sm:rtl:ml-auto"></div>
                        <ThemeSwitch />
                        <DropDownLang />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;
