'use strict'

angular.module('Koko', ['Cube','Ladder','Horse','Flowers','Storm'])
  .constant('kokoConst', {
    answerTypes: {
      entity: [
        {
          label: 'Cube',
          value: 1
        },
        {
          label: 'Ladder',
          value: 2
        },
        {
          label: 'Horse',
          value: 3
        },
        {
          label: 'Flowers',
          value: 4
        }
      ],
      quantity: [
        {
          label: 'One',
          value: 1
        },
        {
          label: 'Two',
          value: 2
        },
        {
          label: 'Three',
          value: 3
        },
        {
          label: 'Four',
          value: 4
        },
        {
          label: 'Five',
          value: 5
        },
        {
          label: 'Many',
          value: 6
        }
      ],
      size: [
        {
          label: 'Very Small',
          value: 1
        },
        {
          label: 'small',
          value: 2
        },
        {
          label: 'Medium',
          value: 3
        },
        {
          label: 'Large',
          value: 4
        },
        {
          label: 'Very large',
          value: 5
        }
      ],
      color: [
        {
          label: 'Transparent',
          value: 1
        },
        {
          label: 'White',
          value: 2
        },
        {
          label: 'Gray',
          value: 3
        },
        {
          label: 'Black',
          value: 4
        },
        {
          label: 'Red',
          value: 5
        },
        {
          label: 'Green',
          value: 6
        },
        {
          label: 'Yellow',
          value: 7
        },
        {
          label: 'Blue',
          value: 8
        },
        {
          label: 'Orange',
          value: 9
        },
        {
          label: 'Different Colors',
          value: 10
        }
      ],
      material: [
        {
          label: 'Wood',
          value: 1
        },
        {
          label: 'Paper',
          value: 2
        },
        {
          label: 'Glass',
          value: 3
        },
        {
          label: 'Metal',
          value: 4
        },
        {
          label: 'Plastic',
          value: 5
        }
      ],
      flowerType: [
        {
          label: 'Alstroemeria​​',
          value: 1
        },
        {
          label: '​Amaryllis​​',
          value: 2
        },
        {
          label: '​Anemone​​',
          value: 3
        },
        {
          label: '​Anthurium​​',
          value: 4
        },
        {
          label: '​Aster​​',
          value: 5
        },
        {
          label: '​Birds of Paradise​​',
          value: 6
        },
        {
          label: '​Bouvardia​​',
          value: 7
        },
        {
          label: '​Calla Lily​​',
          value: 8
        },
        {
          label: '​Carnations​​',
          value: 9
        },
        {
          label: '​Chrysanthemum​​',
          value: 10
        },
        {
          label: '​Daffodils​​',
          value: 11
        },
        {
          label: 'Rose',
          value: 12
        },
        {
          label: '​Cymbidium Orchid​​',
          value: 13
        },
        {
          label: '​Daisies​​',
          value: 14
        },
        {
          label: '​Sweet Pea​​',
          value: 15
        },
        {
          label: '​Sunflower​​',
          value: 16
        },
        {
          label: '​Iris​​',
          value: 17
        }
      ],
      stormType: [
        {
          label: 'Thunderstorm',
          value: 1
        },
        {
          label: 'Lightning',
          value: 2
        },
        {
          label: 'Tornado',
          value: 3
        },
        {
          label: 'Hurricane',
          value: 4
        }
      ],
      stormDirection: [
        {
          label: 'towards the cube',
          value: 1
        },
        {
          label: 'towards the ladder',
          value: 2
        },
        {
          label: 'towards the horse',
          value: 3
        },
        {
          label: 'towards the flowers',
          value: 4
        },
        {
          label: 'away the cube',
          value: 5
        },
        {
          label: 'away the ladder',
          value: 6
        },
        {
          label: 'away the horse',
          value: 7
        },
        {
          label: 'away the flowers',
          value: 8
        }
      ],
      horseType: [
        {
          label: 'With a saddle',
          value: 1
        },
        {
          label: 'Interested',
          value: 2
        },
        {
          label: 'Contented',
          value: 3
        },
        {
          label: 'Submissive',
          value: 4
        },
        {
          label: 'Aggressive',
          value: 5
        },
        {
          label: 'Angry',
          value: 6
        },
        {
          label: 'Excited',
          value: 7
        }
      ]
    },
    questions: [
      {
        id: 1,
        heading: 'Te Cube',
        question: 'What size is it?',
        description: '',
        answer: null,
        answerType: 'size'
      },
      {
        id: 2,
        heading: 'Te Cube',
        question: 'What color is it?',
        description: '',
        answer: null,
        answerType: 'color'
      },
      {
        id: 3,
        heading: 'Te Cube',
        question: 'What is this cube made of?',
        description: '',
        answer: null,
        answerType: 'material'
      },
      {
        id: 4,
        heading: 'Te Cube',
        question: 'Where is the cube in this desert?',
        description: '',
        answer: null,
        answerType: 'position'
      },
      {
        id: 5,
        heading: 'Te Ladder',
        question: 'How many rungs?',
        description: '',
        answer: null,
        answerType: 'quantity'
      },
      {
        id: 6,
        heading: 'Te Ladder',
        question: 'What size is your ladder?',
        description: '',
        answer: null,
        answerType: 'size'
      },
      {
        id: 7,
        heading: 'Te Ladder',
        question: 'What is your ladder made of?',
        description: '',
        answer: null,
        answerType: 'material'
      },
      {
        id: 8,
        heading: 'Te Ladder',
        question: 'Where is the ladder in relation to the cube? What is the ladder\'s position?',
        description: '',
        answer: null,
        answerType: 'position'
      },
      {
        id: 9,
        heading: 'Te Horse',
        question: 'Describe this horse. What color is the horse?',
        description: '',
        answer: null,
        answerType: 'color'
      },
      {
        id: 10,
        heading: 'Te Horse',
        question: 'What size is the horse?',
        description: '',
        answer: null,
        answerType: 'size'
      },
      {
        id: 11,
        heading: 'Te Horse',
        question: 'Where is the horse relative to the cube and ladder?',
        description: '',
        answer: null,
        answerType: 'position'
      },
      {
        id: 12,
        heading: 'Te Horse',
        question: 'What impression does it give you? Is it tied? Is there a saddle?',
        description: '',
        answer: null,
        answerType: 'horseType'
      },
      {
        id: 13,
        heading: 'Te Horse',
        question: 'Where is the ladder in relation to the cube? What is the ladder\'s position?',
        description: '',
        answer: null,
        answerType: 'position'
      },
      {
        id: 14,
        heading: 'Te Flowers',
        question: 'In this landscape we have flowers. How many flowers are there?',
        description: '',
        answer: null,
        answerType: 'quantity'
      },
      {
        id: 15,
        heading: 'Te Flowers',
        question: 'What kind?',
        description: '',
        answer: null,
        answerType: 'flowerType'
      },
      {
        id: 16,
        heading: 'Te Flowers',
        question: 'What color are they?',
        description: '',
        answer: null,
        answerType: 'color'
      },
      {
        id: 17,
        heading: 'Te Flowers',
        question: 'Where are the flowers in relation to the cube, the ladder, and the horse?',
        description: '',
        answer: null,
        answerType: 'position'
      },
      {
        id: 18,
        heading: 'Te Storm',
        question: 'Somewhere in this landscape we have a storm. Describe this storm. What kind of a storm is it?',
        description: '',
        answer: null,
        answerType: 'stormType'
      },
      {
        id: 19,
        heading: 'Te Storm',
        question: 'What direction is it headed?',
        description: '',
        answer: null,
        answerType: 'stormDirection'
      },
      {
        id: 20,
        heading: 'Te Storm',
        question: 'How does this storm affect-or not affect the cube, the ladder, the horse and flowers?',
        description: '',
        answer: null,
        answerType: 'entity',
        multipleSelection: true
      },
      {
        id: 21,
        heading: 'Te Storm',
        question: 'Is it passing by or staying?',
        description: '',
        answer: null,
        answerType: 'boolean'
      }
    ]
  });