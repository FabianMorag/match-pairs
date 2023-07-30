import './Card.css'

export function Card ({ index, animal, visible, disabled, updateBoard }) {
  const handleClick = () => {
    if (disabled || visible) return
    updateBoard(index)
  }

  return (
    <div onClick={handleClick} id={animal.name} className={`card${visible ? ' visible' : ''}`}>
      <div className={`front${visible ? '' : ' white'}`} style={{ backgroundImage: `url(${animal.image})` }} />
      <div className='back'>Flip card!</div>
    </div>
  )
}
