
export default function Button({Class, btnName, id}){
  return(
      <button className={Class} id={id}>{btnName}</button>
  )
}
