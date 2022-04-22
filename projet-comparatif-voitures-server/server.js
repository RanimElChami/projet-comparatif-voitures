const express = require('express');
const app = express();
const session = require('express-session');
const cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cors = require('cors');

const Car = require('./models/Car.js');
const Reservation = require('./models/Reservation.js');
const User = require('./models/User.js');
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://daudau:inzjz4KtJ9kJ2M8P@dauphinecarrentalcluste.vfezv.mongodb.net/test').then(() => {
    console.log('Successfully connected to DB!');
}).catch((error) => {
    console.log('Unable to connect to DB!');
    console.error(error);
});

app.use((req, res, next) => {
    next();
});

app.use((req, res, next) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.set('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.set('Access-Control-Allow-Credentials', true);
    next();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors({ credentials: true, origin: "http://localhost:4200" }));
app.use(cookieParser());

app.post('/users', (request, response) => {
    let requestUser = request.body;
    let newUser = new User({
        email: requestUser.email,
        firstName: requestUser.firstName,
        lastName: requestUser.lastName,
        dob: requestUser.dob,
        password: requestUser.password,
        userType: requestUser.userType,
    });

    newUser.save((error, user) => {
        if (error) return console.error("error post", error);
        console.log(user);
        response.json(user);
    });
});

app.post('/reservations', (request, response) => {
    let requestReservation = request.body;
    let newReservation = new Reservation({
        carId: requestReservation.carId,
        reservationStartDate: requestReservation.reservationStartDate,
        reservationEndDate: requestReservation.reservationEndDate
    });

    newReservation.save((error, reservation) => {
        if (error) return console.error("error post", error);
        response.json(reservation);
        /**Car.findOne({ _id: requestReservation.carId }, (error, car) => {
            if (error) {
                console.log("error");
                return response.status(404).json({ error: error });
            }
            console.log("hello");
            //response.status(200).json(car);
            console.log(car);
        });*/

    });
});

app.post('/cars', (request, response) => {
    let requestCar = request.body;
    let newCar = new Car({
        brand: requestCar.brand,
        mileage: requestCar.mileage,
        numberOfDoors: requestCar.numberOfDoors,
        numberOfSeats: requestCar.numberOfSeats,
        transmission: requestCar.transmission,
        color: requestCar.color,
        electric: requestCar.electric,
        category: requestCar.category,
        price: requestCar.price,
        rating: requestCar.rating,
        quantity: requestCar.quantity,
        city: requestCar.city
    });

    newCar.save((error, car) => {
        if (error) return console.error("error post", error);
        response.json(car);
    });
});

app.get('/user', (request, response) => {
    response.json('hi');
});

app.listen(3000, () => { console.log("Listening on port 3000") });