//OOPS TASK

//1.https://github.com/rvsp/typescript-oops/blob/master/Practice/Movie.md

//a,b,c :

class Movie {
    constructor (title, studio, rating) {
        this.title = title;
        this.studio = studio;
        this.rating = rating;

        if(rating==null) {
            return this.rating = "PG"
        }
        else{
            return this.rating = rating;
        }
    }
    getPG(array){
        var result = array.filter((element)=> element.rating =="PG")
        return result
    }
    getDetails(){
        return(`The name of the movie is ${this.title}, and the production house is ${this.studio}, and the rating is ${this.rating}`)

}
}

let movie1 = new Movie ("poove unakaga","supergood films","PG13");
let movie2 = new Movie ("mersal","theenandal studios","PG13");
let movie3 = new Movie ("kathi","lyca productions");
let movie4 = new Movie ("beast","sun pictures");

const array = [movie1, movie2, movie3, movie4]

console.log(movie1.getPG(array));
console.log(movie1.getDetails());
console.log(movie2.getDetails());
console.log(movie3.getDetails());
console.log(movie4.getDetails());



//d.Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”

class Movies {
    constructor (title, studio, rating) {
        this.title = title;
        this.studio = studio;
        this.rating = rating;

    }
        getdetails(){
            return(`The name of the movie is ${this.title}, and the production house is ${this.studio}, and the rating is ${this.rating}`)
    
    }
}

    let movies5 = new Movies ("casino royale","Eon productions","PG13");

    console.log(movies5.getdetails());




    //2.circle - class :

    const pi = 3.14;
           class Circle{
              constructor(radius,color){
                  this.radius = radius;
                  this.color = color;
       }
       setradius(radii){
          this.radius=radii;

       }
       setcolor(colour){
        this.color=colour;

       }
        getArea() {
        return (this.radius*this.radius*pi);

       }
        getCircumference(){
        return (2*pi*this.radius);

       }
}

       let circle = new Circle("1.0",'red');

       circle.setradius("2.0");
       circle.setcolor("black");

       console.log(circle.getArea());
       console.log(circle.getCircumference());







//3. Write a "person" class to hold all the details.


class Person{ 
      constructor(name,age,address){
          this.name = name;
          this.age = age;
          this.address = address;
     }
      getName(){
      return this.name;
     }
       getAge(){
       return this.age;
     }
       getaddress(){
       return this.address;
      }
      getdetails(){
        return(`The name of the person is ${this.name}, and the age of the person is ${this.age}, and the address of the person is ${this.address}`)

      }
}

let person1 = new Person("manikandan","24","coimbatore");
let person2 = new Person("Raje","25","pallakad");


console.log(person1.getName());
console.log(person2.getAge());
console.log(person1.getaddress());
console.log(person1.getdetails());
console.log(person2.getdetails());








//4.Write a class to calculate the uber price.


class uber{
    constructor(distance,rate,waitingperiod){
        this.distance=distance;
        this.rate=rate;
        this.waitingperiod=waitingperiod;
    }
    getridedetails(){
        return(`The distance of the ride is ${this.distance} with a rate of ${this.rate} with a waiting period of ${this.waitingperiod}`)
    }  
    getprice(){
        let price = (this.rate * this.distance) + (10 * this.waitingperiod)
        return price;
    }
    getrate(){
        let rate = (this.rate);
        return rate;
    }
    getwaitingperiod(){
        let waitingperiod = (this.waitingperiod);
        return waitingperiod;
    }
}

let uber1 = new uber (300,20,40);

console.log(uber1.getridedetails());
console.log(uber1.getprice());
console.log(uber1.getrate());
console.log(uber1.getwaitingperiod());