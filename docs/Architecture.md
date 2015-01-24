# Architecture

### Components  (/components)

  * Cube (/components/cube.js)
    * @ Size => %
    * @ Color => rgab
    * @ Material => [Wood, Paper, Glass, Metal, Plastic]
    * @ Position => [x, y, z]

  * Ladder (/components/ladder.js)
    * @ Rungs => Integer
    * @ Size => %
    * @ Material => Wood, Paper, Glass, Metal, Plastic]
    * @ Position => [x, y, z]
 
  * Horse (/components/horse.js)
    * @ Color => rgba
    * @ Size => %
    * @ Position => [x, y, z]
    * @ Attributes => [Strong, Weak]
    * @ Mood => [Interested, Contented, Submissive, Aggressive, Angry, Excited]
    * @ Action [Running, Still]

  * Flowers (/components/flowers.js)
    * @ Quantity => Integer
    * @ Type => [​Alstroemeria​​, ​Amaryllis​​, ​Anemone​​, ​Anthurium​​, ​Aster​​, ​Birds of Paradise​​, ​Bouvardia​​, ​Calla Lily​​, ​Carnations​​, ​Chrysanthemum​​, ​Daffodils​​, ​Rose​​, ​Cymbidium Orchid​​, ​Daisies​​, ​Sweet Pea​​, ​Sunflower​​, ​Iris​​]
    * @ Position => [x, y, z]

  * Storm (/components/storm.js)
    * @ Type => [Thunderstorm, Lightning, Tornado, Hurricane]
    * @ Direction [axis1 -> axis2]
    * @ Interaction [Cube, Ladder, Horse, Flowers, None of the above]
    * @ Passing => Boolean


### Services (/services)

  * Task (/services/task.js)
    * Collect answers
    * Track state

  * Result (/services/result.js)
    * Contains map of possibilities
    * Make association
    * Parse associations in a human readable format
    * Saves results to DB (Firebase?)

  * Share (/services/share.js)
    * Generates page with results with unique URL
    * Parses results in Open Graph
    * Share in Social Media (FB, Twitter, Linkedin)

### Static Pages

  * About => Static copy

### Technologies

  * AngularJS
  * AngularCSS
  * AngularStrap
  * ngRoute
  * ngStrage
  * Firebase
  