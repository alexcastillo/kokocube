'use strict'

var Koko = angular.module('Koko', ['Cube','Ladder','Horse','Flowers','Storm']);

Koko.constant('kokoConst', {
  questions: [
    {
      id: 1,
      heading: 'The Cube',
      question: 'Where is it in relation to the horizon?',
      options: [
        {
          label: 'Above the horizon',
          value: 1
        },
        {
          label: 'Below the horizon',
          value: 2
        },
        {
          label: 'Bisecting the horizon',
          value: 3
        }
      ]
    },
    {
      id: 2,
      heading: 'The Cube',
      question: 'Is it close or distant?',
      options: [
        {
          label: 'Close',
          value: 1
        },
        {
          label: 'Distant',
          value: 2
        }
      ]
    },
    {
      id: 3,
      heading: 'The Cube',
      question: 'How heavy is the cube?',
      options: [
        {
          label: 'Floating',
          value: 1
        },
        {
          label: 'Grounded',
          value: 2
        }
      ]
    },
    {
      id: 4,
      heading: 'The Cube',
      question: 'Can you see different sides?',
      options: [
        {
          label: 'Flat',
          value: 1
        },
        {
          label: '3D',
          value: 2
        }
      ]
    },
    {
      id: 5,
      heading: 'The Cube',
      question: 'How is this cube positioned?',
      options: [
        {
          label: 'Centered',
          value: 1
        },
        {
          label: 'To a side',
          value: 2
        }
      ]
    },
    {
      id: 6,
      heading: 'The Cube',
      question: 'What\'s its material or color?',
      options: [
        {
          label: 'Transparent',
          value: 1
        },
        {
          label: 'Ice Melting',
          value: 2
        },
        {
          label: 'Ploshed Stone',
          value: 3
        },
        {
          label: 'Rounded Stone',
          value: 4
        },
        {
          label: 'Black',
          value: 5
        },
        {
          label: 'White',
          value: 6
        },
        {
          label: 'Yellow',
          value: 7
        },
        {
          label: 'Red',
          value: 8
        },
        {
          label: 'Green',
          value: 9
        },
        {
          label: 'Purple',
          value: 10
        },
        {
          label: 'Brown',
          value: 11
        }
      ]
    },
    {
      id: 7,
      heading: 'The Ladder',
      question: 'How many rungs does it have?',
      options: [
        {
          label: 'Not many',
          value: 1
        },
        {
          label: 'Few',
          value: 2
        },
        {
          label: 'Many',
          value: 3
        }
      ]
    },
    {
      id: 8,
      heading: 'The Ladder',
      question: 'Is it distant or close to the cube?',
      options: [
        {
          label: 'Close',
          value: 1
        },
        {
          label: 'Distant',
          value: 2
        }
      ]
    },
    {
      id: 9,
      heading: 'The Ladder',
      question: 'How is this ladder standing?',
      options: [
        {
          label: 'Free Standing',
          value: 1
        },
        {
          label: 'Lying Down',
          value: 2
        },
        {
          label: 'Floating',
          value: 3
        }
      ]
    },
    {
      id: 10,
      heading: 'The Ladder',
      question: 'What\'s the relation between the ladder, the desert and the cube?',
      options: [
        {
          label: 'Against the cube',
          value: 1
        },
        {
          label: 'Connecting the cube to the ground',
          value: 2
        },
        {
          label: 'Connecting to a side of the cube',
          value: 3
        },
        {
          label: 'Connecting the cube to the sky',
          value: 4
        },
        {
          label: 'Descending into the ground',
          value: 5
        }
      ]
    },
    {
      id: 11,
      heading: 'The Ladder',
      question: 'What\'s it made of?',
      options: [
        {
          label: 'Iron',
          value: 1
        },
        {
          label: 'Rope',
          value: 2
        },
        {
          label: 'Old wood',
          value: 3
        },
        {
          label: 'New wood',
          value: 4
        },
        {
          label: 'Steel',
          value: 5
        }
      ]
    },
    {
      id: 12,
      heading: 'The Ladder',
      question: 'What\'s its material or color?',
      options: [
        {
          label: 'Transparent',
          value: 1
        },
        {
          label: 'Ice Melting',
          value: 2
        },
        {
          label: 'Ploshed Stone',
          value: 3
        },
        {
          label: 'Rounded Stone',
          value: 4
        },
        {
          label: 'Black',
          value: 5
        },
        {
          label: 'White',
          value: 6
        },
        {
          label: 'Yellow',
          value: 7
        },
        {
          label: 'Red',
          value: 8
        },
        {
          label: 'Green',
          value: 9
        },
        {
          label: 'Purple',
          value: 10
        },
        {
          label: 'Brown',
          value: 11
        }
      ]
    },
    {
      id: 13,
      heading: 'The Horse',
      question: 'What\'s the horse\'s color?',
      options: [
        {
          label: 'White',
          value: 1
        },
        {
          label: 'Black',
          value: 2
        },
        {
          label: 'Brown',
          value: 3
        }
      ]
    },
    {
      id: 14,
      heading: 'The Horse',
      question: 'What type of horse is this?',
      options: [
        {
          label: 'Arabian',
          value: 1
        },
        {
          label: 'Clydesdale/Carthorse',
          value: 2
        },
        {
          label: 'Palomino',
          value: 3
        },
        {
          label: 'Mare',
          value: 4
        },
        {
          label: 'Pony',
          value: 5
        },
        {
          label: 'Stallion',
          value: 6
        },
        {
          label: 'Unicorn',
          value: 7
        }
      ]
    },
    {
      id: 15,
      heading: 'The Horse',
      question: 'What\'s the relation between the horse and the cube?',
      options: [
        {
          label: 'Close',
          value: 1
        },
        {
          label: 'Distant',
          value: 2
        }
      ]
    },
    {
      id: 16,
      heading: 'The Horse',
      question: 'What is the horse doing?',
      options: [
        {
          label: 'Flying',
          value: 1
        },
        {
          label: 'Wild',
          value: 2
        },
        {
          label: 'Tied',
          value: 3
        },
        {
          label: 'Running',
          value: 4
        },
        {
          label: 'Still',
          value: 5
        }
      ]
    },
    {
      id: 17,
      heading: 'The Flowers',
      question: 'What\'s the relation between the flowers and the cube?',
      options: [
        {
          label: 'Inside the cube',
          value: 1
        },
        {
          label: 'Behind the cube',
          value: 2
        },
        {
          label: 'Far',
          value: 3
        },
        {
          label: 'In the foreground',
          value: 4
        },
        {
          label: 'Wild growing',
          value: 5
        }
      ]
    },
    {
      id: 18,
      heading: 'The Flowers',
      question: 'How many flowers can you see?',
      options: [
        {
          label: 'One',
          value: 1
        },
        {
          label: 'Few',
          value: 2
        },
        {
          label: 'Many',
          value: 3
        }
      ]
    },
    {
      id: 19,
      heading: 'The Flowers',
      question: 'Where are these flowers or where are they coming from?',
      options: [
        {
          label: 'In a garden',
          value: 1
        },
        {
          label: 'Falling from the sky',
          value: 2
        },
        {
          label: 'In a vase',
          value: 3
        }
      ]
    },
    {
      id: 20,
      heading: 'The Storm',
      question: 'What type of storm do you see?',
      options: [
        {
          label: 'Rain',
          value: 1
        },
        {
          label: 'Electrical',
          value: 2
        },
        {
          label: 'Tornado',
          value: 3
        },
        {
          label: 'Wind',
          value: 4
        },
        {
          label: 'Sandstorm',
          value: 5
        },
        {
          label: 'Rainstorm',
          value: 6
        }
      ]
    },
    {
      id: 21,
      heading: 'The Storm',
      question: 'What\'s the relation between the storm and the cube?',
      options: [
        {
          label: 'Above the cube',
          value: 1
        },
        {
          label: 'Behind the cube',
          value: 2
        },
        {
          label: 'Far',
          value: 3
        },
        {
          label: 'Near',
          value: 4
        }
      ]
    },
    {
      id: 22,
      heading: 'The Storm',
      question: 'How big is the storm?',
      options: [
        {
          label: 'Big',
          value: 1
        },
        {
          label: 'Small',
          value: 2
        }
      ]
    }
  ]
});