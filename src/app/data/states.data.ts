export interface stateData{
    id:number;
    name:string;
    country:string;
}; //stateData interface shows the model which objects in StateData array must follow.

// array of states in Nigeria and their respective openweather Id to enable access to the weather info of each states.
export const StateData:stateData[] = [
{
    id:2332785,
    name:"Kwara State",
    country:"NG"
},
{
    id:2352776,
    name:"Abuja Federal Capital Territory",
    country:"NG"
},
{
    id:2332453,
    name:"Lagos State",
    country:"NG"
},
{
    id:2324433,
    name:"Rivers State",
    country:"NG"
},
{
    id:2335722,
    name:"Kaduna State",
    country:"NG"
},
{
    id:2324828,
    name:"Plateau State",
    country:"NG"
},
{
    id:2565344,
    name:"Enugu State",
    country:"NG"
},
{
    id:2597364,
    name:"Kogi State",
    country:"NG"
},
{
    id:2328925
    ,name:"Niger State",
    country:"NG"
},
{
    id:2597365,
    name:"Osun State",
    country:"NG"
}
];