# Parking lot system

Parking system that allows a simple configuration of the number of spaces for each type of vehicle accepted, in addition to allowing vehicles to park, leave the parking lot and show an updated panel with the status of spaces for each type of vehicle supported space and notifies when the parking lot is full

It was developed using [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

1. Make sure to have backend server up and running

- [check more here](https://github.com/MariSpirandelli/parking-lot-api)

1. install dependencies

```bash
npm install
# or
yarn install
```

1. run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3001](http://localhost:3001) with your browser to see the result.

## Parking lot set up

Add how many spots of each vehicle type (motorcycle, car and van) your parking lot may have

## After Parking lot set up

Now you'll be able to see your parking lot dashboard, park new vehicles and remove them from parking lot.

### Busines Rules

1. Motorcycle can park in any available slot
1. Car can park in both car or van slots
1. Van can park in both car or van slots but if it's a car slot, it'll occuppy 3 consecutive slots

<img width="1207" alt="image" src="https://user-images.githubusercontent.com/8183000/219501573-24776766-44ed-410c-9305-583d4b273b79.png">

