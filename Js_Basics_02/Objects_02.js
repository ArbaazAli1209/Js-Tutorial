const tinderuser = {}

tinderuser.id = "123abc"
tinderuser.name = "Sam"
tinderuser.isLoggedIn = false

// console.log(tinderuser);

const regularuser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Hitesh",
            lastname: "Choudhary"
        }
    }
}

// console.log(regularuser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);

const user = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 2,
        email: "h@gmail.com"
    },
    {
        id: 3,
        email: "h@gmail.com"
    }
]

// console.log(tinderuser);

// console.log(Object.keys(tinderuser));
// console.log(Object.values(tinderuser));
// console.log(Object.entries(tinderuser));

// console.log(tinderuser.hasOwnProperty('isLogged'));


// Object de-structure

const course = {
    coursename: "js",
    price: "999",
    courseInstructor: "Hitesh"
}

// console.log(course.courseInstructor);

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// React
// const navbar = ({company}) => {

// }

// navbar(company = "hitesh")