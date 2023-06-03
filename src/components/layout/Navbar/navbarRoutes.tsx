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
    href: '/info/guarantees',
    content: 'Гарантии',
  },
  {
    href: '/shop/sales',
    content: 'Скидки',
  },
  {
    href: '/info/recommendations',
    content: 'Рекомендации',
  },
  {
    href: '/shop/cart',
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