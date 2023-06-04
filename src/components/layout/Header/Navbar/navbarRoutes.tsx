import Image from "next/image";
import CartSVG from  "@/common/icons/CartSVG";
import PersonSVG from "@/common/icons/PersonSVG";
import VoiakaGMSVG from "@/common/icons/VoiakaGMSVG";

export interface INavbarLink {
  href: string;
  content: JSX.Element | string;
}

export const leftNavbarLinks = [
  {
    href: '/',
    content: <VoiakaGMSVG/>,
  },
  {
    href: '/catalogue',
    content: 'Каталог',
  },
  {
    href: '/sales',
    content: 'Акции',
  },
  {
    href: '/services',
    content: 'Услуги',
  },
  {
    href: '/how_to_buy',
    content: 'Как купить', 
  },
  {
    href: '/contacts',
    content: 'Контакты',
  },
  {
    href: '/recommendations',
    content: 'Рекомендации',
  },
] as INavbarLink[];

export const rightNavbarLinks = [
  {
    href: '/cart',
    content: (
      <>
        <CartSVG width={20} />
        Корзина
      </>
    ),
  },
  {
    href: '/user',
    content: (
      <>
        <PersonSVG width={20} />
        Личный кабинет/Войти
      </>
    ),
  }
] as INavbarLink[];