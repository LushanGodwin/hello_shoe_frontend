export class StockModel {
    constructor(supplierCode,itemCode,sizeCode,quantity, unitBuyingPrice, unitSellingPrice) {
        this.supplierCode = supplierCode;
        this.itemCode = itemCode;
        this.sizeCode = sizeCode;
        this.quantity = quantity;
        this.unitBuyingPrice = unitBuyingPrice;
        this.unitSellingPrice = unitSellingPrice;
    }

}