import { ANIMAL_IMG } from '../board-images'

const ANIMALS = [
  { name: 'bear', image: ANIMAL_IMG.BEAR },
  { name: 'cat', image: ANIMAL_IMG.CAT },
  { name: 'cow', image: ANIMAL_IMG.COW },
  { name: 'frog', image: ANIMAL_IMG.FROG },
  { name: 'koala', image: ANIMAL_IMG.KOALA },
  { name: 'lion', image: ANIMAL_IMG.LION },
  { name: 'monkey', image: ANIMAL_IMG.MONKEY },
  { name: 'mouse', image: ANIMAL_IMG.MOUSE },
  { name: 'penguin', image: ANIMAL_IMG.PENGUIN },
  { name: 'pig', image: ANIMAL_IMG.PIG }
]

export function getRandomAnimals (n) {
  const initialAnimals = [...ANIMALS]
  const listOfAnimals = []
  for (let i = 0; i < n; i++) {
    const random = Math.floor(Math.random() * initialAnimals.length)
    const animal = initialAnimals.splice(random, 1)
    listOfAnimals.push(...animal)
  }
  return listOfAnimals
}
