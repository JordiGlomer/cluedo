// Characters
/*
mrGreen
first_name:   Jacob
last_name:    Green
color:        green
description:  He has a lot of connections
age:          45
image:        https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg
occupation:   Entrepreneur

drOrchid
frst_name:   Doctor
lst_name:    Orchid
color:        white
description:  PhD in plant toxicology. Adopted daughter of Mr. Boddy
age:          26
image:        http://www.radiotimes.com/uploads/images/Original/111967.jpg
ocupation:   Scientist

profPlum
first_name:   Victor
last_name:    Plum
color:        purple
description:  Billionare video game designer
age:          22
image:        https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg
occupation:   Designer

missScarlet
first_name:   Kasandra
last_name:    Scarlet
color:        red
description:  She is an A-list movie star with a dark past
age:          31
image:        https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg
occupation:   Actor

mrsPeacock
first_name:   Eleanor
last_name:    Peacock
color:        blue
description:  She is from a wealthy family and uses her status and money to earn popularity
age:          36
image:        https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg
occupation:   Socialité

mrMustard
first_name:   Jack
last_name:    Mustard
color:        yellow
description:  He is a former football player who tries to get by on his former glory
age:          62
image:        https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg
occupation:   Retired Football player

// Weapons
let weapons = [
'rope',ight: 10
'knife',ght: 8
'candlestick',
'dumbbell',: 30
'poison',ht: 2
'axe',eight: 15
'bat',eight: 13
'trophy',ht: 25
'pistol',ht: 20

// Rooms
name: Dinning Room
name: Conservatory
name: Kitchen
name: Study
name: Library
name: Billiard Room
name: Lounge
name: Ballroom
name: Hall
name: Spa
name: Living Room
name: Observatory
name: Theater
name: Guest House
name: Patio
*/

// Characters Collection
let mrGreen={
    first_name:   'Jacob',
    lastName:   'Green',
    color:        'green',
    description:  'He has a lot of connections',
    age:          45,
    image:       'https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg',
    occupation:   'Entrepreneur',

}

let drOrchid0={
    first_name:   'Doctor',
    last_name:    'Orchid',
    color:        'white',
    description:  'PhD in plant toxicology. Adopted daughter of Mr. Boddy',
    age:          26,
    image:        'http://www.radiotimes.com/uploads/images/Original/111967.jpg',
    ocupation:   'Scientist',
}
let profPlum={
    first_name:   'Victor',
    last_name:    'Plum',
    color:        'purple',
    description:  'Billionare video game designer',
    age:          22,
    image:        'https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg',
    occupation:   'Designer',
}
let missScarlet={
first_name:   'Kasandra',
last_name:    'Scarlet',
color:        'red',
description:  'She is an A-list movie star with a dark past',
age:          31,
image:        'https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg',
occupation:   'Actor',
}
let mrsPeacock={

first_name:   'Eleanor',
last_name:    'Peacock',
color:        'blue',
description:  'She is from a wealthy family and uses her status and money to earn popularity',
age:          36,
image:       'https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg',
occupation:   'Socialité',
}
let mrMustard={
first_name:   'Jack',
last_name:   'Mustard',
color:        'yellow',
description:  'He is a former football player who tries to get by on his former glory',
age:          62,
image:        'https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg',
occupation:   'Retired Football player',
}

const charactersArray = [mrGreen,  drOrchid0, profPlum, missScarle,  mrsPeacock, mrMustard];
function randomSelector(charactersArray) {
    if(charactersArray.length>0)//lleno
  {

    let numero = Math.floor(Math.random() * (charactersArray.length));
      return charactersArray[numero];
      //array[i]
     
}else{

} //vacio


  
}

randomSelector(charactersArray);
// Rooms' Collection
const roomsArray = [ 'Dinning Room',
     'Conservatory',
     'Kitchen',
     'Study',
     'Library',
    'Billiard Room',
     'Lounge',
    'Ballroom',
     'Hall',
     'Spa',
     'Living Room',
     'Observatory',
     'Theater',
     'Guest House',
     'Patio'];

// Weapons Collection
const weaponsArray = ['rope','knife','candlestick','dumbbell','poison','axe',
    'bat','trophy','pistol']


let misteryEnvelope;
    
function pickMistery(){
    let arraycartas =[];
    randomSelector(charactersArray).push(arraycartas)
    randomSelector(roomsArray).push(arraycartas)
    randomSelector(weaponsArray).push(arraycartas)
}
 pickMistery();


 return misteryEnvelope[pickMistery];