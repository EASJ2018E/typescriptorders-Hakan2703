export class OrderLine{

constructor (orderQty:number, productid:number, unitPrice:number, unitPriceDiscount:number){
this.OrderQty = orderQty;
this.Productid = productid;
this.UnitPrice = unitPrice;
this.UnitPriceDiscount = unitPriceDiscount;
}

public OrderQty : number;
public Productid : number;
public UnitPrice : number;
public UnitPriceDiscount : number;


public resolveSum (): number{
return this.OrderQty * (this.UnitPrice - this.UnitPriceDiscount)
}

public resolveVat (): number{
    return this.resolveSum() * 0.25;
}

public finalPrice(): number{
return this.resolveSum() + this.resolveVat();
}





}

