import {SupplierApi} from "../api/supplierApi.js";
import {SupplierModel} from "../model/supplierModel.js";

$(document).ready(function (){
    let supAddBtn = $('#supAddBtn');
    let heading = $('#supplierFormHeading');
    let supplierForm = $('#supplierForm');
    let supClear = $('#supClear');
    let search = $('#supplierInput');
    let supSaveUpdateBtn = $('#sup-save-update-btn');

    let id = $('#sup-id');
    let name = $('#sup-name');

    let contact01 = $('#sup-contact-1');
    let contact02 = $('#sup-contact-2');
    let email = $('#sup-email');
    let countryBox = $('#sup-country');
    let address1 = $('#sup-address1');
    let address2 = $('#sup-address2');
    let address3 = $('#sup-address3');
    let address4 = $('#sup-address4');
    let address5 = $('#sup-address5');
    let category = $('#sup-category');

    let tableBody = $('#sup-table-body');

    let supplierApi = new SupplierApi();

    populateSupplierTable();

    populateCountriesBox();

    function populateCountriesBox() {
        countries.forEach(function (country) {
            let option = $('<option></option>').attr('value', country).text(country);
            countryBox.append(option);
        })
    }
    function generateSupplierId(){
        supplierApi.generateSupplierId()
            .then(supId => {
                id.val(supId);
            })
            .catch(error => {
                showError('Fetching Error', 'Error generating supplier ID');
            });
    }

    function showError(title, text) {
        Swal.fire({
            icon: 'error',
            title: title,
            text: text,
            footer: '<a href="">Why do I have this issue?</a>'
        });
    }

    supAddBtn.on('click', function(){
        openSupplierModal('Add New Supplier', 'Save', 'btn-success');
        supplierForm[0].reset();
        generateSupplierId();
    });

    supClear.on('click', function(){
        supplierForm[0].reset();
    });

    supSaveUpdateBtn.on('click', function(event) {
        event.preventDefault();

        let supplierId = id.val();
        let supplierName = name.val();
        let supplierCategory = category.val();
        let supplierAddress1 = address1.val();
        let supplierAddress2 = address2.val();
        let supplierAddress3 = address3.val();
        let supplierAddress4 = address4.val();
        let supplierAddress5 = address5.val();
        let supplierCountry = countryBox.val();
        let supplierContact1 = contact01.val();
        let supplierContact2 = contact02.val();
        let supplierEmail = email.val();
        console.log(supplierId)
        let supplierModel = new SupplierModel(
            null,
            supplierName,
            supplierCategory,
            supplierAddress1,
            supplierAddress2,
            supplierAddress3,
            supplierAddress4,
            supplierAddress5,
            supplierCountry,
            supplierContact1,
            supplierContact2,
            supplierEmail
        );
        if (supSaveUpdateBtn.text() === 'Save'){
            supplierApi.saveSupplier(supplierModel)
                .then((responseText)=>{
                    Swal.fire(responseText, 'Successful', 'success');
                    supClear.click();
                    populateSupplierTable();
                })
                .catch((error)=>{
                    showError('Save Unsuccessful', error);
                });
        }else{
            supplierApi.updateSupplier(supplierModel, supplierId)
                .then((responseText)=>{
                    Swal.fire(responseText, 'Successful', 'success');
                    supClear.click();
                    populateSupplierTable();
                })
                .catch((error)=>{
                    showError('Update Unsuccessful', error);
                });
        }
    });

    function openSupplierModal(headingText,buttonText,buttonClass,supplierId){
        if (supplierId){
            supplierApi.getSupplier(supplierId)
                .then((supplier)=>{
                    id.val(supplier.supplierCode);
                    name.val(supplier.supplier_name);
                    category.val(supplier.category);
                    address1.val(supplier.address_line_01);
                    address2.val(supplier.address_line_02);
                    address3.val(supplier.address_line_03);
                    address4.val(supplier.address_line_04);
                    address5.val(supplier.address_line_05);
                    countryBox.val(supplier.address_line_06);
                    contact01.val(supplier.contact_no_01);
                    contact02.val(supplier.contact_no_02);
                    email.val(supplier.email);
                })
                .catch((error) => {
                    showError('fetch Unsuccessful', error);
                })
        }
        heading.text(headingText);
        supSaveUpdateBtn.text(buttonText);
        supSaveUpdateBtn.removeClass().addClass(`btn ${buttonClass}`);
    }


    function populateSupplierTable(){
        supplierApi.getAllSuppliers()
            .then((suppliers) => {
                tableBody.empty();
                suppliers.forEach((supplier) =>{
                    tableBody.append(
                        `<tr>
                            <th scope="row">${supplier.supplierCode}</th>
                            <td>${supplier.supplier_name}</td>
                            <td>${supplier.category}</td>
                            <td>${supplier.address_line_01},${supplier.address_line_02},${supplier.address_line_03},${supplier.address_line_04}</td>
                            <td>${supplier.address_line_05}</td>
                            <td>${supplier.address_line_06}</td>
                            <td>${supplier.contact_no_01}</td>
                            <td>${supplier.contact_no_02}</td>
                            <td>${supplier.email}</td>
                            <td>
                                <button class="updateBtn btn btn-warning btn-sm" data-toggle="modal" data-target="#supplierModal"
                                    data-supplier-id="${supplier.supplierCode}">
                                    Edit
                                </button>
                            </td>
                            <td>
                                <button class="deleteBtn btn btn-danger btn-sm" data-supplier-id="${supplier.supplierCode}">
                                    Delete
                                </button>
                            </td>
                        </tr>`
                    );
                });
            })
            .catch((error) => {
                showError('Fetch Unsuccessful', error);
            });
    }

    tableBody.on('click', '.updateBtn', function(){
        const supplierId = $(this).data('supplier-id');
        openSupplierModal('Update Supplier', 'Update', 'btn-warning', supplierId);
    });

    tableBody.on('click', '.deleteBtn', function(){
        const supplierId = $(this).data('supplier-id');
        deleteSupplier(supplierId);
    });

    function deleteSupplier(supplierId) {
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
                supplierApi.deleteSupplier(supplierId)
                    .then((responseText) => {
                        Swal.fire(responseText, 'Successful', 'success');
                        populateSupplierTable();
                    })
                    .catch((error) => {
                        showError('Delete Unsuccessful', error);
                    });
            }
        });
    }

    search.on("input", function(){
       let value = $(this).val().toLowerCase();
       $("#sup-table-body tr").filter(function(){
           $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
       });
    });

});