import Image from "next/image";
import logo from "../../../../public/images/logo.png"
import CartSVG from "../../../common/icons/CartSVG";
import PersonSVG from "../../../common/icons/PersonSVG";

export interface INavbarLink {
  href: string;
  content: JSX.Element | string;
}

export const navbarLinks = [
  {
    href: '/',
    content: <Image
      src={logo}
      alt="VoiakaGM"
    />,
  },
  {
    href: '/guarantees',
    content: 'Гарантии',
  },
  {
    href: '/sales',
    content: 'Скидки',
  },
  {
    href: '/recommendations',
    content: 'Рекомендации',
  },
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