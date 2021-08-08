class company
{
    constructor(compname,country,ceo)
    {
        this.compname=compname;
        this.country=country;
        this.ceo=ceo;
    }
    getCarname()
    {
        return this.compname;
    }
}

class car extends company
{
    constructor(carname,compname,country,ceo,established,group)
    {
        super(compname,country,ceo);
        this.established=established;
        this.carname=carname;
        this.group=group;

    }
    getModel()
    {
        return this.carname;
    }
}

let CarModel1=new car('Lamborghini Veneno','AUDI AG','Germany','Markus Duesmann','16 July 1909','Volkswagen');

let CarModel2=new car('Koenigsegg CCXR Trevita','Maranello, Italy','John Elkann','1947','Exor');

let CarModel3=new car('Bugatti Divo','Automobili Lamborghini S.p.A','Northern Italy','Stephan Winkelmann','May 1963','Volkswagen');

let CarModel4=new car('Mercedes-Maybach',' Rolls-Royce automobiles','Manchester,United Kingdom','Warren East','February 2011','Bayerische Motoren Werke AG');
 
let CarModel5=new car('Bugatti Centodieci','Tesla',' San Carlos, California, United States','Elon Musk ','1 July 2003','SolarCity, Maxwell Technologies');
 

console.log(CarModel1.getModel());
console.log(CarModel2.getModel());
console.log(CarModel3.getModel());
console.log(CarModel4.getModel());
console.log(CarModel5.getModel());