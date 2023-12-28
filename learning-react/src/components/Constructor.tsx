interface ConstructorProps {
  name: string
  age: number
  level?: string
  course: string
}

export function Constructor(person: ConstructorProps ) {
  return (
    <div className="avatar">
      <p>Nome: {person.name}</p>
      <p>Idade: {person.age}</p>
      <p>Cargo: {person.level}</p>
      <p>Curso: {person.course}</p>
    </div>
  )
}