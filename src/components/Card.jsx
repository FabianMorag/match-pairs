import style from './Card.module.sass'

export function Card ({ index, animal, visible, disabled, updateBoard }) {
  const handleClick = () => {
    if (disabled || visible) return
    updateBoard(index)
  }

  return (
    <div onClick={handleClick} id={animal.name} className={`${style.card} ${visible ? style.visible : ''}`}>
      <div className={style.front} style={{ backgroundImage: `url(${animal.image})` }} />
      <div className={style.back}>Flip card!</div>
    </div>
  )
}
