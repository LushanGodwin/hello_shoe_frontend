export class CustomerModel{
    constructor(
        customerCode ,
        customer_name,
        gender,
        level,
        joinDate,
        totalPoints,
        dob,
        address_line_01,
        address_line_02,
        address_line_03,
        address_line_04,
        postalCode,
        contact,
        email,
        purchase_time_date
    ){
        this.customerCode = customerCode;
        this.customer_name = customer_name;
        this.gender = gender;
        this.level=level;
        this.joinDate = joinDate;
        this.totalPoints=totalPoints;
        this.dob = dob;
        this.address_line_01 = address_line_01;
        this.address_line_02 = address_line_02;
        this.address_line_03 = address_line_03;
        this.address_line_04 = address_line_04;
        this.postalCode = postalCode;
        this.contact = contact;
        this.email = email;
        this.purchase_time_date=purchase_time_date;
    }
}