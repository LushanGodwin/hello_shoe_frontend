export class SupplierModel{
    constructor(
        supplierCode,
        supplier_name,
        category,
        address_line_01,
        address_line_02,
        address_line_03,
        address_line_04,
        address_line_05,
        address_line_06,
        contact_no_01,
        contact_no_02,
        email
    ) {
        this.supplierCode = supplierCode;
        this.supplier_name = supplier_name;
        this.category = category;
        this.address_line_01 = address_line_01;
        this.address_line_02 = address_line_02;
        this.address_line_03 = address_line_03;
        this.address_line_04 = address_line_04;
        this.address_line_05 = address_line_05;
        this.address_line_06 = address_line_06;
        this.contact_no_01 = contact_no_01;
        this.contact_no_02 = contact_no_02;
        this.email = email;
    }
}