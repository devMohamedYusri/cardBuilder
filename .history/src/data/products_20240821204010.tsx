import { v4 as uuid } from "uuid";
import { IProduct } from "../interfaces/IProduct";
import {IInput} from "../inf"

export const productList: IProduct[] = [
    {
        id: uuid(),
        title: "2022 Genesis GV70: Nominee",
        description: "As luxury brands go, South Korea's Genesis is still in its infancy, having sold its first cars (as an independent brand) only in 2015.",
        imageURL: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wd3wxfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
        price: "500000",
        colors: ["#FF0032", "#2563eb", "#FF631"],
        category: {
            name: "Cars",
            imageURL: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wd3wxfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
        },
    },
    {
        id: uuid(),
        title: "Chevrolet Spark. 995cc Petrol",
        description: "As luxury brands go, South Korea's Genesis is still in its infancy, having sold its first cars (as an independent brand) only in 2015.",
        imageURL: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wd3wxfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
        price: "45000",
        colors: ["#FF0032", "#2563eb", "#FF631"],
        category: {
            name: "Cars",
            imageURL: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wd3wxfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
        },
    },
    {
        id: uuid(),
        title: "Tesla Model X",
        description: "Tesla Model X is an all-electric SUV with impressive range, advanced autopilot features, and a minimalist design.",
        imageURL: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wd3wxfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
        price: "90000",
        colors: ["#FF0000", "#000000", "#FFFFFF"],
        category: {
            name: "Electric Cars",
            imageURL: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wd3wxfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
        },
    },
    {
        id: uuid(),
        title: "Porsche 911 Carrera",
        description: "The Porsche 911 Carrera is a timeless sports car, known for its distinctive design, exceptional performance, and luxurious interior.",
        imageURL: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wd3wxfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
        price: "120000",
        colors: ["#FFFFFF", "#000000", "#FF0000"],
        category: {
            name: "Sports Cars",
            imageURL: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wd3wxfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
        },
    },
    {
        id: uuid(),
        title: "Ford Mustang GT",
        description: "The Ford Mustang GT is an iconic American muscle car, offering a powerful V8 engine, aggressive styling, and a thrilling driving experience.",
        imageURL: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wd3wxfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
        price: "55000",
        colors: ["#000000", "#FF0000", "#FFFFFF"],
        category: {
            name: "Muscle Cars",
            imageURL: "https://images.unsplash.com/photo-1597009941408-0d5c3b4e0157?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wd3wxfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
        },
    },
    {
        id: uuid(),
        title: "Jaguar F-Type",
        description: "The Jaguar F-Type is a luxury sports car, delivering a dynamic performance, sleek design, and advanced technology.",
        imageURL: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wd3wxfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
        price: "95000",
        colors: ["#FF0000", "#000000", "#FFFFFF"],
        category: {
            name: "Sports Cars",
            imageURL: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wd3wxfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
        },
    },
    {
        id: uuid(),
        title: "Ferrari 488 GTB",
        description: "The Ferrari 488 GTB is a high-performance supercar, known for its blistering speed, striking design, and luxurious features.",
        imageURL: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wd3wxfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
        price: "250000",
        colors: ["#FF0000", "#000000", "#FFFFFF"],
        category: {
            name: "Supercars",
            imageURL: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wd3wxfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
        },
    },
    {
        id: uuid(),
        title: "Lamborghini Aventador",
        description: "The Lamborghini Aventador is a flagship supercar, offering unparalleled performance, iconic design, and cutting-edge technology.",
        imageURL: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wd3wxfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
        price: "300000",
        colors: ["#FF0000", "#000000", "#FFFFFF"],
        category: {
            name: "Supercars",
            imageURL: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wd3wxfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
        },
    },
    {
        id: uuid(),
        title: "McLaren 720S",
        description: "The McLaren 720S is a world-class supercar, delivering jaw-dropping performance, advanced aerodynamics, and luxurious craftsmanship.",
        imageURL: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wd3wxfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
        price: "280000",
        colors: ["#FF0000", "#000000", "#FFFFFF"],
        category: {
            name: "Supercars",
            imageURL: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wd3wxfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
        },
    },
    {
        id: uuid(),
        title: "Chevrolet Spark. 995cc Petrol",
        description: "As luxury brands go, South Korea's Genesis is still in its infancy, having sold its first cars (as an independent brand) only in 2015.",
        imageURL: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wd3wxfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
        price: "45000",
        colors: ["#FF0032", "#2563eb", "#FF631"],
        category: {
            name: "Cars",
            imageURL: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wd3wxfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
        },
    },
    {
        id: uuid(),
        title: "BMW X5 M50d",
        description: "The BMW X5 M50d is a luxury SUV that provides a thrilling ride with its powerful engine and advanced technology.",
        imageURL: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wd3wxfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
        price: "75000",
        colors: ["#000000", "#FFFFFF", "#FF0000"],
        category: {
            name: "SUVs",
            imageURL: "https://images.unsplash.com/photo-1597009941408-0d5c3b4e0157?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wd3wxfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
        },
    },
    {
        id: uuid(),
        title: "Mercedes-Benz G-Class",
        description: "The Mercedes-Benz G-Class is a luxury off-road vehicle known for its iconic design and unmatched performance.",
        imageURL: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wd3wxfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
        price: "120000",
        colors: ["#FF0000", "#0000FF", "#00FF00"],
        category: {
            name: "Luxury SUVs",
            imageURL: "https://images.unsplash.com/photo-1541903633-a2f30ecb5a71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wd3wxfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
        },
    },
    {
        id: uuid(),
        title: "Audi Q7",
        description: "The Audi Q7 is a sophisticated SUV with a spacious interior, advanced technology, and powerful engine options.",
        imageURL: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wd3wxfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
        price: "65000",
        colors: ["#000000", "#FF0000", "#FFFFFF"],
        category: {
            name: "Luxury SUVs",
            imageURL: "https://images.unsplash.com/photo-1541903633-a2f30ecb5a71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wd3wxfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
        },
    },
];


export const inputs:IInput[]={

}