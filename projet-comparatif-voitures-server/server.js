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

app.use(session({
    secret: "loginKey",
    cookie: { maxAge: 24 * 60 * 60 * 1000, secure: false },
    saveUninitialized: false,
    resave: false
}));

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

// Cars
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

app.get('/cars', (request, response) => {
    Car.find({}).sort({ _id: -1 }).exec((error, cars) => {
        if (error) return console.error(error);
        response.status(200).json(cars);
    });
});

app.get('/cars/:id', (request, response) => {
    Car.findOne({ _id: request.params.id }, (error, car) => {
        if (error) {
            return response.status(404).json({ error: error });
        }
        response.status(200).json(car);
    });
});

// Update car's information
app.put('/cars/:id', (request, response) => {
    let requestCar = request.body;
    let newCar = new Car({
        _id: request.params.id,
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

    Car.updateOne({ _id: request.params.id }, newCar, (error, car) => {
        if (error) return response.status(400).json({ error: error });
        response.status(201).json(car);
    });
});

// DELETE car
app.delete('/cars/:id', (request, response) => {
    Car.deleteOne({ _id: request.params.id }, (error) => {
        if (error) return response.status(400).json({ error: error });
        response.status(201).json({ msg: "Car deleted" });
    });
});

// Users
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

app.get('/users/:id', (request, response) => {
    console.log(request.params.id);
    User.find({}).sort({ _id: -1 }).exec((error, users) => {
        if (error) return console.error(error);
        console.log("users", users);
        response.status(200).json(users);
    });
});

app.put('/users/:id', (request, response) => {
    let requestUser = request.body;
    let newUser = new User({
        _id: request.params.id,
        email: requestUser.email,
        firstName: requestUser.firstName,
        lastName: requestUser.lastName,
        dob: requestUser.dob,
        password: requestUser.password,
        userType: requestUser.userType
    });

    User.updateOne({ _id: request.params.id }, newUser, (error, user) => {
        if (error) return response.status(400).json({ error: error });
        response.status(201).json(user);
    });
});

// Authentification

app.post('/login', async(request, response) => {
    User.findOne({ email: request.body.email, password: request.body.password }, (error, user) => {
        if (error) return response.status(401).json({ msg: "Error logging in" });
        if (!user) return response.status(401).json({ msg: "Wrong login" });
        request.session.userId = user._id;
        request.session.userType = user.userType;
        request.session.save();
        response.status(200).json({ email: user.email, password: user.password });
    });
});

// Register
app.post('/register', (request, response) => {
    console.log("registering user");
    let requestUser = request.body;
    let newUser = new User({
        email: requestUser.email,
        firstName: requestUser.firstName,
        lastName: requestUser.lastName,
        dob: requestUser.dob,
        password: requestUser.password,
        userType: requestUser.userType
    });
    console.log(newUser.email);
    User.countDocuments({ email: newUser.email }, function(error, count) {
        if (error) return response.status(401).json({ msg: "Error" });
        if (count > 0) {
            return response.status(409).json({ msg: "This user already exists!" });
        } else {
            newUser.save((error, user) => {
                if (error) return console.error(error);
                request.session.userId = user._id;
                request.session.save();
                response.status(200).json({ email: user.email, firstName: user.firstName, lastName: user.lastName, dob: user.dob, password: user.password });
            });
        }
    });
});

// Logout
app.get('/logout', (request, response) => {
    request.session.destroy(error => {
        if (error) return response.status(409).json({ msg: "Error" });
        return response.status(200).json({ msg: "Logout ok" });
    });
});

app.get('/isLogged', (request, response) => {
    if (!request.session.userId) return response.status(401).json("Not logged in");
    User.findOne({ _id: request.session.userId }, (error, user) => {
        if (error) return response.status(401).json({ msg: "Error, user not connected" });
        if (!user) return response.status(401).json({ msg: "Wrong login" });
        request.session.userId = user._id;
        request.session.userType = user.userType;
        request.session.save();
        response.status(200).json({ email: user.email, firstName: user.firstName, lastName: user.lastName, dob: user.dob, password: user.password });
    })
});

// Reservations
app.get('/avalaiblecars/:city/:startingdate/:endingdate', (request, response) => {
    let cityparam = request.params.city;
    let startingdate = new Date(request.params.startingdate);
    let endingdate = new Date(request.params.endingdate);

    let carqtysup0;
    let ids = [];
    let carsvalid;
    Car.find({ quantity: { $gte: 1 }, city: cityparam }, (error, cars) => {
        if (error) return console.error("Error getting cars with quantity > 0", error);
        carqtysup0 = cars;
        Car.find({ quantity: { $lte: 0 }, city: cityparam }, (error, cars) => {
            if (error) return console.error("Error getting cars with quantity > 0", error);
            Reservation.find({
                $or: [
                    { reservationStartDate: { $gt: endingdate } },
                    { reservationEndDate: { $lt: startingdate } }
                ]
            }, (error, reservations) => {
                if (error) return console.error("Error getting cars between dates", error);
                let resa = reservations;
                resa.forEach(function(reservation) {
                    ids.push(reservation.carId);
                });
                ids = [...new Set(ids)];
                Car.find({
                    '_id': { $in: ids }
                }, (error, cars) => {
                    if (error) return console.log("Error retrieving cars from array of ids", error);
                    carsvalid = cars;
                    carsvalid.forEach((car) => {
                        if (!carqtysup0.includes(car)) {
                            carqtysup0.concat(car);
                        }
                    });
                    response.json(carqtysup0);
                });
            }).select('carId');
        });
    });
});

app.get('/avalaibleCities', (request, response) => {
    Car.find({}).sort({ _id: -1 }).select('city').exec((error, cities) => {
        if (error) return console.error(error);

        let cityName = [];
        cities.forEach(function(city) {
            cityName.push(city.city);
        });
        cityName = [...new Set(cityName)];
        response.status(200).json(cityName);
    });
});

app.listen(3000, () => { console.log("Listening on port 3000") });