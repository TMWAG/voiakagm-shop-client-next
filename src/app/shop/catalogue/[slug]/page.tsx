export default function Categories({
  params
}: {
  params: {
    slug: string,
  }
}){
  return <div>category: {params.slug}</div>;
};