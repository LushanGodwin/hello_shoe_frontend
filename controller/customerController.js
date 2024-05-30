/*
    import {CustomerApi} from "../api/customerApi.js";
    import {CustomerModel} from "../model/customerModel.js";

    $(document).ready(function (){
        let custAddBtn = $('#custAddBtn');
        let heading = $('#customerFormHeading');
        let customerForm = $('#customerForm');
        let custClear = $('#custClear');

        let id = $('#customerId');
        let level = $('#level');
        let totalPoint = $('#totalPoint');
        let joinDate = $('#joinDate');
        let purchaseDate = $('#purchaseDate');
        let name = $('#name');
        let gender = $('#gender');
        let dob = $('#dob');
        let address1 = $('#address1');
        let address2 = $('#address2');
        let address3 = $('#address3');
        let address4 = $('#address4');
        let postalCode = $('#postalCode');
        let contactNo = $('#contact');
        let email = $('#email');

        let custSaveUpdateBtn = $('#custSaveUpdateButton');
        let tableBody = $('#cust-table-body');
        let search = $('#search');


        let customerApi = new CustomerApi();

        populateCustomerTable();

        function generateCustomerId() {
            customerApi.generateCustomerId()
                .then(custId =>{
                    id.val(custId);
                })
                .catch(error =>{
                    showError('Fetching Error: ' , 'Error generate Customer Id');
                });
            }

        function setOtherProps(){
            level.val('NEW');
            totalPoint.val('0');
            let currentDate = new Date().toISOString().slice(0, 10);
            joinDate.val(new Date().toISOString().slice(0, 10));
            purchaseDate.val(currentDate);
        }

        custAddBtn.on('click', function(){
            console.log("click");
            heading.text('Add New Customer');
            openCustomerModal('Add New Customer','Save','btn btn-success add-btn');
            customerForm[0].reset();
            generateCustomerId();
            setOtherProps();
        });

        custClear.on('click', function(){
            customerForm[0].reset();
            console.log("reset");
        });

        custSaveUpdateBtn.on('click', function(){
            console.log("hii")
            event.preventDefault();

            let customerId = id.val();
            let custName= name.val();
            let contact_no = contactNo.val();
            let email_add = email.val();
            let add1 = address1.val();
            let add2 = address2.val();
            let add3 = address3.val();
            let add4 = address4.val();
            let dobVal = dob.val();
            let postalVal = postalCode.val();
            let genderVal = gender.val();
            let level = level.val();
            let joinDate = joinDate.val();
            let totalPoint = totalPoint.val();
            let purchaseDate = purchaseDate.val();

            let customerModel = new CustomerModel(
                null,
                custName,
                genderVal,
                level,
                joinDate,
                totalPoint,
                dobVal,
                add1,
                add2,
                add3,
                add4,
                postalVal,
                contact_no,
                email_add,
                purchaseDate,
            );
            if (custSaveUpdateBtn.text() === 'Save') {
                customerApi.saveCustomer(customerModel)
                    .then((responseText) => {
                        swal.fire(
                            responseText,
                            'successful',
                            'success'
                        )

                        custClear.click();
                        console.log("clear");
                        populateCustomerTable();
                    })
                    .catch((error) => {
                        showError('Save Unsuccessful', error);
                    });
            }else {
                customerApi.updateCustomer(customerModel,customerId)
                   .then((responseText) => {
                        swal.fire(
                            responseText,
                            'Successful',
                           'success'
                        )
                        custClear.click();
                        populateCustomerTable();
                    })
                   .catch((error) => {
                        showError('Update Unsuccessful', error);
                    });
            }


        })
        function showError(title, text) {
            Swal.fire({
                icon: 'error',
                title: title,
                text: text,
                footer: '<a href="">Why do I have this issue?</a>'
            });
        }

        function populateCustomerTable() {
            customerApi.getAllCustomers()
                .then((response)=>{
                    let customer_db = response;
                    tableBody.empty();
                    customer_db.forEach((customer) => {
                        tableBody.append(
                            `<tr>
                                <th rowspan="span">${customer.customerCode}</th>
                                <td>${customer.customer_name}</td>
                                <td>${customer.gender}</td>
                                <td>${customer.level}</td>
                                <td>${customer.joinDate}</td>
                                <td>${customer.totalPoint}</td>
                                <td>${customer.dob}</td>
                                <td>${customer.address_line_01},${customer.address_line_02},${customer.address_line_03},${customer.address_line_04}</td>
                                <td>${customer.postalCode}</td>
                                <td>${customer.contact}</td>
                                <td>${customer.email}</td>
                                <td>${(customer.purchase_time_date == null)? 'No Purchased Done Yet': customer.purchase_time_date}</td>
                                <td><button class="updateBtn btn btn-warning btn-sm" data-toggle="model" data-target="#customerModal" data-customer-id = "${customer.customerCode}">Edit</button></td>
                                <td><button class="deleteBtn btn btn-danger btn-sm" data-customer-id="${customer.customerCode}">Delete</button></td>
                          </tr>`
                        );
                    });
                })
                .catch((error) => {
                    showError('fetch Unsuccessful', error);
                });
        }
        tableBody.on('click','.updateBtn',function(){
            const customerId = $(this).data('customerId');
            openCustomerModal('Update Customer', 'Update', 'btn-warning', customerId);
        });
        function openCustomerModal(headingtext,buttonText,buttonClass ,customerId){
            if (customerId){
                customerApi.getCustomer(customerId)
                    .then((response) => {
                        let customer = response;
                        id.val(customer.customerCode);
                        name.val(customer.customer_name);
                        gender.val(customer.gender);
                        dob.val(customer.dob);
                        address1.val(customer.address_line_01);
                        address2.val(customer.address_line_02);
                        address3.val(customer.address_line_03);
                        address4.val(customer.address_line_04);
                        postalCode.val(customer.postalCode);
                        contactNo.val(customer.contact);
                        email.val(customer.email);
                    })
                    .catch((error) => {
                        showError('fetch Unsuccessful', error);
                    });
            }
            heading.text(headingtext);
            custSaveUpdateBtn.text(buttonText);
            custSaveUpdateBtn.removeClass('btn-success btn-primary').addClass(buttonClass);
        }

        tableBody.on('click','.deleteBtn',function(){
            const customerId = $(this).data('customerId');
            deleteCustomer(customerId);
        });

        function deleteCustomer(customerId){
            Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Delete'
            }).then((result) => {
                if (result.isConfirmed) {
                    customerApi.deleteCustomer(customerId)
                        .then((responseText) => {
                            Swal.fire(
                                responseText,
                                'Successful',
                                'success'
                            )
                            populateCustomerTable();
                        })
                        .catch((error) => {
                            console.log(error);
                            showError('Customer delete Unsuccessful', error);
                        });
                }
            });

        }



        search.on("input", function () {
            let value = $(this).val().toLowerCase();
            $("#cust-table-body tr").filter(function () {
                $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
            });
        });

    });

*/
import {CustomerApi} from "../api/customerApi.js";
import {CustomerModel} from "../model/customerModel.js";

$(document).ready(function () {
    let custAddBtn = $('#custAddBtn');
    let heading = $('#customerFormHeading');
    let customerForm = $('#customerForm');
    let custClear = $('#custClear');

    let id = $('#customerId');
    let level = $('#level');
    let totalPoints = $('#totalPoint');
    let joinDate = $('#joinDate');
    let purchaseDate = $('#purchaseDate');
    let name = $('#name');
    let gender = $('#gender');
    let dob = $('#dob');
    let address1 = $('#address1');
    let address2 = $('#address2');
    let address3 = $('#address3');
    let address4 = $('#address4');
    let postalCode = $('#postalCode');
    let contact = $('#contact');
    let email = $('#email');

    let custSaveUpdateBtn = $('#custSaveUpdateButton');

    let tableBody = $('#cust-table-body');

    let search = $('#searchInput');

    let customerApi = new CustomerApi();

    populateCustomerTable();

    function generateCustomerId() {
        customerApi.generateCustomerId()
            .then(custId => {
                console.log("cust id "+ custId)
                id.val(custId);
            })
            .catch(error => {
                showError('Fetching Error', 'Error generating customer ID');
            });
    }

    function setOtherProps() {
        level.val('NEW');
        totalPoints.val(0);
        joinDate.val(new Date().toISOString().slice(0, 10));
        purchaseDate.val(new Date().toISOString().slice(0, 10));
    }

    custAddBtn.on('click', function () {
        openCustomerModal('Add New Customer', 'Save', 'btn-success');
        customerForm[0].reset();
        generateCustomerId();
        setOtherProps();
    });

    custClear.on('click', function () {
        customerForm[0].reset();
    });

    custSaveUpdateBtn.on('click', function (event) {
        event.preventDefault();

        let customer_id = id.val();
        let custName = name.val();
        let contact_no = contact.val();
        let email_add = email.val();
        let add1 = address1.val();
        let add2 = address2.val();
        let add3 = address3.val();
        let add4 = address4.val();
        let dobVal = dob.val();
        let postalVal = postalCode.val();
        let genderVal = gender.val();

        let customerModel = new CustomerModel(
            null,
            custName,
            genderVal,
            null,
            null,
            null,
            dobVal,
            add1,
            add2,
            add3,
            add4,
            postalVal,
            contact_no,
            email_add,
            null
        );

        console.log(customerModel);

        if (custSaveUpdateBtn.text() === 'Save') {
            customerApi.saveCustomer(customerModel)
                .then((responseText) => {
                    Swal.fire(
                        responseText,
                        'Successful',
                        'success'
                    )
                    custClear.click();
                    populateCustomerTable();
                })
                .catch((error) => {
                    showError('Save Unsuccessful', error);
                });
        } else {
            customerApi.updateCustomer(customerModel,customer_id)
                .then((responseText) => {
                    Swal.fire(
                        responseText,
                        'Successful',
                        'success'
                    )
                    custClear.click();
                    populateCustomerTable();
                })
                .catch((error) => {
                    showError('Update Unsuccessful', error);
                });
        }

    });

    function showError(title, text) {
        Swal.fire({
            icon: 'error',
            title: title,
            text: text,
            footer: '<a href="">Why do I have this issue?</a>'
        });
    }

    function populateCustomerTable() {
        customerApi.getAllCustomers()
            .then((responseText) => {
                let customer_db = responseText;
                tableBody.empty();
                customer_db.forEach((customer) => {
                    console.log(customer);
                    tableBody.append(

                        `<tr>
                        <th row='span'>${customer.customerCode}</th>
                        <td>${customer.customer_name}</td>
                        <td>${customer.gender}</td>
                        <td>${customer.level}</td>
                        <td>${customer.joinDate}</td>
                        <td>${customer.totalPoints}</td>
                        <td>${customer.dob}</td>
                        <td>${customer.address_line_01},${customer.address_line_02},${customer.address_line_03},${customer.address_line_04}</td>
                        <td>${customer.postalCode}</td>
                        <td>${customer.contact}</td>
                        <td>${customer.email}</td>
                        <td>${(customer.purchase_time_date == null) ? 'No Purchased Done yet' : customer.purchase_time_date}</td>
                        <td>
                            <button class="updateBtn btn btn-warning btn-sm" data-toggle="modal" data-target="#customerModal"
                                data-customer-id="${customer.customerCode}">
                                Edit
                            </button>
                        </td>
                        <td>
                            <button class="deleteBtn btn btn-danger btn-sm" data-customer-id="${customer.customerCode}">
                                Delete
                            </button>
                        </td>
                    </tr>`
                    );
                });
            })
            .catch((error) => {
                console.log(error);
                showError('fetch Unsuccessful', error);
            });
    }

    tableBody.on('click', '.updateBtn', function () {
        const customerId = $(this).data('customer-id');
        openCustomerModal('Update Customer', 'Update', 'btn-warning', customerId);
    });

    tableBody.on('click', '.deleteBtn', function () {
        const customerId = $(this).data('customer-id');
        deleteCustomer(customerId);
    });

    function deleteCustomer(customerId) {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Delete'
        }).then((result) => {
            if (result.isConfirmed) {
                customerApi.deleteCustomer(customerId)
                    .then((responseText) => {
                        Swal.fire(
                            responseText,
                            'Successful',
                            'success'
                        )
                        populateCustomerTable();
                    })
                    .catch((error) => {
                        console.log(error);
                        showError('Customer delete Unsuccessful', error);
                    });
            }
        });

    }

    function openCustomerModal(headingtxt, buttonText, buttonClass, custId) {

        if (custId) {
            customerApi.getCustomer(custId)
                .then((responseText) => {
                    let customer = responseText;
                    id.val(customer.customerCode);
                    level.val(customer.level);
                    totalPoints.val(customer.totalPoints);
                    joinDate.val(customer.joinDate);
                    purchaseDate.val(customer.purchase_time_date);
                    name.val(customer.customer_name);
                    gender.val(customer.gender);
                    dob.val(customer.dob);
                    address1.val(customer.address_line_01);
                    address2.val(customer.address_line_02);
                    address3.val(customer.address_line_03);
                    address4.val(customer.address_line_04);
                    postalCode.val(customer.postalCode);
                    contact.val(customer.contact);
                    email.val(customer.email);
                })
                .catch((error) => {
                    console.log(error);
                    showError('Fetch Unsuccessful', error);
                });
        }

        heading.text(headingtxt);
        custSaveUpdateBtn.text(buttonText);
        custSaveUpdateBtn.removeClass('btn-success btn-warning').addClass(buttonClass);

    }

    search.on("input", function () {
        let value = $(this).val().toLowerCase();
        $("#cust-table-body tr").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
        });
    });

});
