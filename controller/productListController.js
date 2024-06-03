import {ProductListApi} from "../api/productList.js";
import {GenderModel} from "../model/genderModel.js";
import {OccasionModel} from "../model/occasionModel.js";
import {SizeModel} from "../model/sizeModel.js";
import {VarietyModel} from "../model/varietyModel.js";


$(document).ready(function () {
   let genderTableBody = $('#gender-table-body');
   let genderId = $('#gender-id');
   let genderDesc = $('#gender-desc');
   let genderSaveUpdateBtn = $('#gender-save-update-btn');
   let genderClear = $('#genderClear');
   let genderAddBtn = $('#genderAddBtn');
   let genderForm = $('#genderForm');
   let genderHeading = $('#genderFormHeading');

   let occasionTableBody = $('#occasion-table-body');
   let occasionId = $('#occasion-id');
   let occasionDesc = $('#occasion-name');
   let occasionSaveUpdateBtn = $('#occasion-save-update-btn');
   let occasionClear = $('#occasionClear');
   let occasionAddBtn = $('#occasionAddBtn');
   let occasionForm = $('#occasionForm');
   let occasionHeading = $('#occasionFormHeading');

   let sizeTableBody = $('#size-table-body');
   let sizeId = $('#size-id');
   let sizeDesc = $('#size-desc');
   let sizeSaveUpdateBtn = $('#size-save-update-btn');
   let sizeClear = $('#sizeClear');
   let sizeAddBtn = $('#sizeAddBtn');
   let sizeForm = $('#sizeForm');
   let sizeHeading = $('#sizeFormHeading');

   let varietyTableBody = $('#variety-table-body');
   let varietyId = $('#variety-id');
   let varietyDesc = $('#variety-name');
   let varietySaveUpdateBtn = $('#variety-save-update-btn');
   let varietyClear = $('#varietyClear');
   let varietyAddBtn = $('#varietyAddBtn');
   let varietyForm = $('#varietyForm');
   let varietyHeading = $('#varietyFormHeading');


   let productListApi = new ProductListApi();

   populateGenderTable();

   genderClear.on('click', function(){
      genderForm[0].reset();
   });

   function openGenderModal(headingText,buttonText,btnClass,genId,genDesc) {
       if (genId && genDesc) {
           genderId.val(genId).prop('disabled', true);
           genderDesc.val(genDesc);
       }else {
           genderId.prop('disabled', false);
       }
       genderHeading.text(headingText);
       genderSaveUpdateBtn.text(buttonText);
       genderSaveUpdateBtn.removeClass('btn-success btn-warning').addClass(btnClass);
       console.log("opengender")
   }

   genderAddBtn.on('click',function (){
       openGenderModal('Add New Gender','Save','btn-success');
       genderForm[0].reset();
   });

   function populateGenderTable() {
       productListApi.getAllGenders()
           .then((responseText)=>{
               let customer_db = responseText;
               genderTableBody.empty();
               customer_db.forEach((gender) => {
                   genderTableBody.append(
                       `<tr>
                        <th row='span'>${gender.genderCode}</th>
                        <td>${gender.gender_desc}</td>
                        <td>
                            <button class="updateBtn btn btn-warning btn-sm" data-toggle="modal" data-target="#genderModal"
                                data-gender-code="${gender.genderCode}" data-gender-desc="${gender.gender_desc}">
                                Edit
                            </button>
                        </td>
                        <td>
                            <button class="deleteBtn btn btn-danger btn-sm" data-gender-code="${gender.genderCode}">
                                Delete
                            </button>
                        </td>
                    </tr>`
                   );
               });
           })
           .catch((error) => {
               showError('fetch Unsuccessful', error);
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

    genderSaveUpdateBtn.on('click', function (event) {
        event.preventDefault();

        let id = genderId.val();
        let desc = genderDesc.val();

        let genderModel = new GenderModel(id, desc);

        console.log(id);
        if (genderSaveUpdateBtn.text() === 'Save') {
            console.log(id);
            productListApi.saveGender(genderModel)
                .then((responseText) => {
                    Swal.fire(
                        responseText,
                        'Successful',
                       'success'
                    )
                    genderClear.click();
                    populateGenderTable();
                })
                .catch((error) => {
                    showError('Save Unsuccessful', error);
                });
        }else{
            productListApi.updateGender(genderModel,id)
                .then((responseText) => {
                    Swal.fire(
                        responseText,
                        'Successful',
                       'success'
                    )
                    genderClear.click();
                    populateGenderTable();
                })
                .catch((error)=>{
                    showError('Update Unsuccessful', error);
                })
        }
    });

    genderTableBody.on('click', '.updateBtn', function () {
        const genderCode = $(this).data('gender-code');
        const genderDesc = $(this).data('gender-desc');
        console.log(genderCode +' '+ genderDesc)
        openGenderModal('Update Gender', 'Update', 'btn-warning', genderCode, genderDesc);
    });

    genderTableBody.on('click', '.deleteBtn', function () {
        const genId = $(this).data('gender-code');
        deleteGender(genId);
    });

    function deleteGender(genId) {
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
                productListApi.deleteGender(genId)
                    .then((responseText) => {
                        Swal.fire(
                            responseText,
                            'Successful',
                            'success'
                        )
                        populateGenderTable();
                    })
                    .catch((error) => {
                        console.log(error);
                        showError('Gender delete Unsuccessful', error);
                    });
            }
        });
    }


    populateOccasionTable();

    occasionClear.on('click', function(){
       occasionForm[0].reset();
    });

    function openOccasionModal(headingText,buttonText,btnClass,occId,occDesc) {
        if (occId && occDesc){
            occasionId.val(occId).prop('disabled', true);
            occasionDesc.val(occDesc);
        }else {
            occasionId.prop('disabled', false);
        }

        occasionHeading.text(headingText);
        occasionSaveUpdateBtn.text(buttonText);
        occasionSaveUpdateBtn.removeClass('btn-success btn-warning').addClass(btnClass);
    }

    occasionAddBtn.on('click',function (){
        openOccasionModal('Add New Occasion','Save','btn-success');
        occasionForm[0].reset();
    });

    function populateOccasionTable() {
        productListApi.getAllOccasions()
            .then((responseText) => {
                let customer_db = responseText;
                occasionTableBody.empty();
                customer_db.forEach((occasion) => {
                    occasionTableBody.append(
                        `<tr>
                        <th row='span'>${occasion.occasionCode}</th>
                        <td>${occasion.occasionDesc}</td>
                        <td>
                            <button class="updateBtn btn btn-warning btn-sm" data-toggle="modal" data-target="#occasionModal"
                                data-occasion-code="${occasion.occasionCode}" data-occasion-desc="${occasion.occasionDesc}">
                                Edit
                            </button>
                        </td>
                        <td>
                            <button class="deleteBtn btn btn-danger btn-sm" data-occasion-code="${occasion.occasionCode}">
                                Delete
                            </button>
                        </td>
                    </tr>`
                    );
                });
            })
            .catch((error) => {
                console.log(error);
                showError('Fetch Unsuccessful', error);
            });
    }

    occasionSaveUpdateBtn.on('click', function (event) {
        event.preventDefault();

        let id = occasionId.val();
        let desc = occasionDesc.val();

        let occasionModel = new OccasionModel(id,desc);

        if (occasionSaveUpdateBtn.text() === 'Save') {
            productListApi.saveOccasion(occasionModel)
                .then((responseText) => {
                    Swal.fire(
                        responseText,
                        'Successful',
                        'success'
                    )
                    occasionClear.click();
                    populateOccasionTable();
                })
                .catch((error) => {
                    showError('Save Unsuccessful', error);
                });
        } else {
            productListApi.updateOccasion(occasionModel, id)
                .then((responseText) => {
                    Swal.fire(
                        responseText,
                        'Successful',
                        'success'
                    )
                    occasionClear.click();
                    populateOccasionTable();
                })
                .catch((error) => {
                    showError('Save Unsuccessful', error);
                });
        }
    });

    occasionTableBody.on('click', '.updateBtn', function () {
        const occasionCode = $(this).data('occasion-code');
        const occasionDesc = $(this).data('occasion-desc');
        openOccasionModal('Update Occasion', 'Update', 'btn-warning', occasionCode, occasionDesc);
    });

    occasionTableBody.on('click', '.deleteBtn', function () {
        const occId = $(this).data('occasion-code');
        deleteOccasion(occId);
    });

    function deleteOccasion(occId) {
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
                productListApi.deleteOccasion(occId)
                    .then((responseText) => {
                        Swal.fire(
                            responseText,
                            'Successful',
                            'success'
                        )
                        populateOccasionTable();
                    })
                    .catch((error) => {
                        console.log(error);
                        showError('Occasion delete Unsuccessful', error);
                    });
            }
        });
    }


    populateSizeTable();

    sizeClear.on('click', function () {
        sizeForm[0].reset();
    });

    function generateSizeId() {
        productListApi.generateSizeId()
            .then(sId => {
                sizeId.val(sId);
            })
            .catch(error => {
                showError('Fetching Error', 'Error generating Size ID');
            });
    }

    function openSizeModal(headingText, buttonText, btnClass, sId, sDesc) {

        if (sId && sDesc) {
            sizeId.val(sId);
            sizeDesc.val(sDesc);
        }else{
            generateSizeId();
        }

        sizeHeading.text(headingText);
        sizeSaveUpdateBtn.text(buttonText);
        sizeSaveUpdateBtn.removeClass('btn-success btn-warning').addClass(btnClass);
    }

    sizeAddBtn.on('click', function () {
        openSizeModal('Add New Size', 'Save', 'btn-success');
        sizeForm[0].reset();
    });

    function populateSizeTable() {
        productListApi.getAllSizes()
            .then((responseText) => {
                let customer_db = responseText;
                sizeTableBody.empty();
                customer_db.forEach((size) => {
                    sizeTableBody.append(
                        `<tr>
                        <th row='span'>${size.sizeCode}</th>
                        <td>${size.sizeDesc}</td>
                        <td>
                            <button class="updateBtn btn btn-warning btn-sm" data-toggle="modal" data-target="#sizeModal"
                                data-size-code="${size.sizeCode}" data-size-desc="${size.sizeDesc}">
                                Edit
                            </button>
                        </td>
                        <td>
                            <button class="deleteBtn btn btn-danger btn-sm" data-size-code="${size.sizeCode}">
                                Delete
                            </button>
                        </td>
                    </tr>`
                    );
                });
            })
            .catch((error) => {
                console.log(error);
                showError('Fetch Unsuccessful', error);
            });
    }

    sizeSaveUpdateBtn.on('click', function (event) {
        event.preventDefault();

        let id = sizeId.val();
        let desc = sizeDesc.val();

        let sizeModel = new SizeModel(id, desc);

        if (sizeSaveUpdateBtn.text() === 'Save') {
            productListApi.saveSize(sizeModel)
                .then((responseText) => {
                    Swal.fire(
                        responseText,
                        'Successful',
                        'success'
                    )
                    sizeClear.click();
                    populateSizeTable();
                    generateSizeId();
                })
                .catch((error) => {
                    showError('Save Unsuccessful', error);
                });
        } else {
            productListApi.updateSize(sizeModel, id)
                .then((responseText) => {
                    Swal.fire(
                        responseText,
                        'Successful',
                        'success'
                    )
                    sizeClear.click();
                    populateSizeTable();
                })
                .catch((error) => {
                    showError('Update Unsuccessful', error);
                });
        }
    });

    sizeTableBody.on('click', '.updateBtn', function () {
        const sizeCode = $(this).data('size-code');
        const sizeDesc = $(this).data('size-desc');
        openSizeModal('Update Size', 'Update', 'btn-warning', sizeCode, sizeDesc);
    });

    sizeTableBody.on('click', '.deleteBtn', function () {
        const sizeId = $(this).data('size-code');
        deleteSize(sizeId);
    });

    function deleteSize(sizeId) {
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
                productListApi.deleteSize(sizeId)
                    .then((responseText) => {
                        Swal.fire(
                            responseText,
                            'Successful',
                            'success'
                        )
                        populateSizeTable();
                    })
                    .catch((error) => {
                        console.log(error);
                        showError('Size delete Unsuccessful', error);
                    });
            }
        });
    }

    populateVarietyTable();

    varietyClear.on('click', function () {
        varietyForm[0].reset();
    });

    function openVarietyModal(headingText, buttonText, btnClass, varId, varDesc) {
        if (varId && varDesc) {
            varietyId.val(varId).prop('disabled', true);
            varietyDesc.val(varDesc);
        } else {
            varietyId.prop('disabled', false);
        }

        varietyHeading.text(headingText);
        varietySaveUpdateBtn.text(buttonText);
        varietySaveUpdateBtn.removeClass('btn-success btn-warning').addClass(btnClass);
    }

    varietyAddBtn.on('click', function () {
        openVarietyModal('Add New Variety', 'Save', 'btn-success');
        varietyForm[0].reset();
    });

    function populateVarietyTable() {
        productListApi.getAllVarieties()
            .then((responseText) => {
                let customer_db = responseText;
                varietyTableBody.empty();
                customer_db.forEach((variety) => {
                    varietyTableBody.append(
                        `<tr>
                        <th row='span'>${variety.varietyCode}</th>
                        <td>${variety.varietyDesc}</td>
                        <td>
                            <button class="updateBtn btn btn-warning btn-sm" data-toggle="modal" data-target="#varietyModal"
                                data-variety-code="${variety.varietyCode}" data-variety-desc="${variety.varietyDesc}">
                                Edit
                            </button>
                        </td>
                        <td>
                            <button class="deleteBtn btn btn-danger btn-sm" data-variety-code="${variety.varietyCode}">
                                Delete
                            </button>
                        </td>
                    </tr>`
                    );
                });
            })
            .catch((error) => {
                console.log(error);
                showError('Fetch Unsuccessful', error);
            });
    }

    varietySaveUpdateBtn.on('click', function (event) {
        event.preventDefault();

        let id = varietyId.val();
        let desc = varietyDesc.val();

        let varietyModel = new VarietyModel(id, desc);

        if (varietySaveUpdateBtn.text() === 'Save') {
            productListApi.saveVariety(varietyModel)
                .then((responseText) => {
                    Swal.fire(
                        responseText,
                        'Successful',
                        'success'
                    )
                    varietyClear.click();
                    populateVarietyTable();
                })
                .catch((error) => {
                    showError('Save Unsuccessful', error);
                });
        } else {
            productListApi.updateVariety(varietyModel, id)
                .then((responseText) => {
                    Swal.fire(
                        responseText,
                        'Successful',
                        'success'
                    )
                    varietyClear.click();
                    populateVarietyTable();
                })
                .catch((error) => {
                    showError('Update Unsuccessful', error);
                });
        }
    });

    varietyTableBody.on('click', '.updateBtn', function () {
        const varietyCode = $(this).data('variety-code');
        const varietyDesc = $(this).data('variety-desc');
        openVarietyModal('Update Variety', 'Update', 'btn-warning', varietyCode, varietyDesc);
    });

    varietyTableBody.on('click', '.deleteBtn', function () {
        const varId = $(this).data('variety-code');
        deleteVariety(varId);
    });

    function deleteVariety(varId) {
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
                productListApi.deleteVariety(varId)
                    .then((responseText) => {
                        Swal.fire(
                            responseText,
                            'Successful',
                            'success'
                        )
                        populateVarietyTable();
                    })
                    .catch((error) => {
                        console.log(error);
                        showError('Variety delete Unsuccessful', error);
                    });
            }
        });
    }

});