import { useEffect, useState } from 'react'
import confetti from 'canvas-confetti'
import './App.css'
import { Card } from './components/Card'
import { getRandomAnimals } from './services/animals'

function App () {
  const [board, setBoard] = useState([])
  const [size, setSize] = useState(2)
  const [firstSelection, setFirstSelection] = useState(null)
  const [secondSelection, setSecondSelection] = useState(null)
  const [counter, setCounter] = useState(0)
  const [disabled, setDisabled] = useState(false)
  const [hasWin, setHasWin] = useState(false)

  const createBoard = ({ size }) => {
    const randomAnimals = getRandomAnimals(size)
    const board = [...randomAnimals, ...randomAnimals]
      .sort(() => Math.random() - 0.5)
      .map(card => ({ id: Math.random(), ...card, matched: false })
      )
    setBoard(board)
  }

  const resetTurn = () => {
    setFirstSelection(null)
    setSecondSelection(null)
    setDisabled(false)
  }

  const resetGame = () => {
    createBoard({ size })
    setFirstSelection(null)
    setSecondSelection(null)
    setCounter(0)
    setDisabled(false)
    setHasWin(false)
  }

  const updateBoard = (index) => {
    firstSelection
      ? (() => {
          console.log('second')
          setSecondSelection(board[index])
        })()
      : (() => {
          console.log('first')
          setFirstSelection(board[index])
        })()
  }

  const checkWin = (board) => {
    if (!board.every(card => card.matched)) return null
    return true
  }

  useEffect(() => {
    const newBoard = [...board]
    if (secondSelection) {
      setCounter(counter + 1)
      setDisabled(true)
      if (firstSelection.name === secondSelection.name) {
        newBoard[newBoard.indexOf(firstSelection)].matched = true
        newBoard[newBoard.indexOf(secondSelection)].matched = true
        resetTurn()
      } else {
        setTimeout(resetTurn, 1000)
      }
      if (checkWin(newBoard)) {
        confetti()
        setHasWin(true)
      }
    }
    setBoard(newBoard)
  }, [secondSelection])

  useEffect(resetGame, [size])

  return (
    <main>
      <section className='container'>
        <h1>Match cards!</h1>
        <div>
          <label htmlFor='size'>Select number of pairs: </label>
          <select name='size' onChange={(e) => setSize(e.target.value)}>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='5'>5</option>
            <option value='6'>6</option>
            <option value='7'>7</option>
            <option value='8'>8</option>
            <option value='9'>9</option>
            <option value='10'>10</option>
          </select>
        </div>
        <h3>Counter {counter}</h3>
      </section>
      <section className='board'>
        {board.map((animal, i) =>
          <Card
            key={i}
            index={i}
            animal={animal}
            visible={animal.matched || animal === firstSelection || animal === secondSelection}
            disabled={disabled}
            updateBoard={updateBoard}
          />
        )}
      </section>
      {hasWin &&
        <div className='winner'>
          <div>
            <h1>YOU WIN!</h1>
            <h3>Completed in {counter} tries</h3>
            <button onClick={resetGame}>Play again</button>
          </div>
        </div>}
    </main>
  )
}

export default App
