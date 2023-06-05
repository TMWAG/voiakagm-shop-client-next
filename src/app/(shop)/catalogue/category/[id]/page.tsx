export default function CategoryPage({
  params,
}: {
  params: { id: number },
}){
  return (
    <div>{params.id}</div>
  );
}