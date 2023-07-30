export const animals = [
  { name: 'bear', image: './src/board-images/bear.png' },
  { name: 'cat', image: './src/board-images/cat.png' },
  { name: 'cow', image: './src/board-images/cow.png' },
  { name: 'frog', image: './src/board-images/frog.png' },
  { name: 'koala', image: './src/board-images/koala.png' },
  { name: 'lion', image: './src/board-images/lion.png' },
  { name: 'monkey', image: './src/board-images/monkey.png' },
  { name: 'mouse', image: './src/board-images/mouse.png' },
  { name: 'penguin', image: './src/board-images/penguin.png' },
  { name: 'pig', image: './src/board-images/pig.png' }
]

export function getRandomAnimals (n) {
  const initialAnimals = [...animals]
  const listOfAnimals = []
  for (let i = 0; i < n; i++) {
    const random = Math.floor(Math.random() * initialAnimals.length)
    const animal = initialAnimals.splice(random, 1)
    listOfAnimals.push(...animal)
  }
  return listOfAnimals
}
