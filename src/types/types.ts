export interface QuestionInterface{
    id: number,
    title: string,
    info: string,
}

export interface DishInterface{
    id: number,
    title: string,
    category: string,
    price: number,
    img: string,
    desc: string
}

export interface TourInteface {
    id:    string;
    name:  string;
    info:  string;
    image: string;
    price: string;
}

export interface Person{
    id: number
    name: string,
    age: number,
    image: string
}
