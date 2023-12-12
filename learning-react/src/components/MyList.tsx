
const myList = [
  { id: 1, value: '1 - Você pode redenrizar listas em React usando o método map'},
  { id: 2, value: '2 - A importancia das chaves'},
  { id: 3, value: '3 - Atualização de listas'}
]

export function MyList() {
  const myListItems = myList.map((item) => {
    return (
      <div key={item.id}>
        <p>{item.value}</p>
      </div>
    )
  })
  
  return (
    <>
      {myListItems}
    </>
  )
}