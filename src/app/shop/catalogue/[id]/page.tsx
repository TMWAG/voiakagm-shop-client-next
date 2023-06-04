'use client'

import { usePathname } from "next/navigation";

export default function Categories({
  params,
}: {
  params: {
    id: string,
  },
}){
  const pathname = usePathname();
  return <div>category: {params.id} <br /> {pathname}</div>;
};

