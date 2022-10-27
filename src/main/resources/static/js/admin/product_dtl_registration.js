class CommonApi {
    static #instance = null;
    static getInstance() {
        if(this.#instance == null){
            this.#instance = new CommonApi();

        }
        return this.#instance;
    }
    getProductMstList() {
        let responseData = null;
        $.ajax({
            async: false,
            type: "get",
            url: "/api/admin/option/products/mst",
            dataType: "json",
            success: (response) => {
                responseData = response.data;
            },
            error: (error) => {
                console.log(error);
            }
        });
        return responseData;
    }

    getProductSizeList(productId) {
        let responseData = null;
        $.ajax({
            async: false,
            type: "get",
            url: "/api/admin/option/products/size/" + productId,
            dataType: "json",
            success: (response) => {
                responseData = response.data;
            },
            error: (error) => {
                console.log(error);
            }
        });
        return responseData;
    }

    
}

class productApi {
    static #instance = null;
    static getInstance() {
        if(this.#instance == null){
            this.#instance = new productApi();

        }
        return this.#instance;
    }

    registProductDtl(productDtlParams) {
        $.ajax({
            async: false,
            type: "post",
            url: "/api/admin/product/dtl",
            contentType: "application/json",
            data: JSON.stringify(productDtlParams),
            dataType: "json",
            success: (response) => {
                alert("추가 완료!");
                location.reload();
            },
            error: (error) => {
                console.log(error);
                alert(`상품 추가 실패.
${error.responseJSON.error}
                `)
            }
        })
    }
}

class Option {
    static #instance = null;
    static getInstance() {
        if(this.#instance == null){
            this.#instance = new Option();
        }
        return this. #instance;
    }

    constructor(){
        this.setProductMstSelectOptions();
        this.addSubmitEvent();
    }

    setProductMstSelectOptions() {
        const pdtMstSelect = document.querySelector(".product-select");
        const responseData = CommonApi.getInstance().getProductMstList();
        if(responseData != null) {
            if(responseData.length > 0) {
                responseData.forEach(product => {
                    pdtMstSelect.innerHTML += `
                        <option value="${product.pdtId}">(${product.category})${product.pdtName}</option>
                    `;
            });
            this.addMstSelectEvent();
            }    
        }
       
    }

    addMstSelectEvent() {
        const pdtMstSelect = document.querySelector(".product-select");
        pdtMstSelect.onchange = () => {
            console.log(pdtMstSelect.value)
            this.setSizeSelectOptions(pdtMstSelect.value);
        }
    }

    setSizeSelectOptions(productId) {
        const pdtSizeSelect = document.querySelector(".product-size");
        pdtSizeSelect.innerHTML = "";
        CommonApi.getInstance().getProductSizeList(productId).forEach(size => {
            pdtSizeSelect.innerHTML += `
            <option value="${size.sizeId}">${size.sizeName}</option>
            `;
        });
    }

    addSubmitEvent() {
        const registButton = document.querySelectorAll(".regist-button")[0];
        registButton.onclick = () => {
            const productDtlParams = {
                "pdtId": document.querySelector(".product-select").value,
                "pdtSize": document.querySelector(".product-size").value,
                "pdtColor": document.querySelector(".product-color").value,
                "pdtStock": document.querySelector(".product-stock").value
            }
            productApi.getInstance().registProductDtl(productDtlParams);
        }
    }
}

class ProductImgFile {
    static #instance = null;
    static getInstance() {
        if(this.#instance == null){
            this.#instance = new ProductImgFile();

        }
        return this.#instance;
    }

    constructor() {
        this.addFileInputEvent();
    }

    newImgList = new Array();

    addFileInputEvent() {
        const filesInput = document.querySelector(".files-input");
        const imgAddButton = document.querySelector(".img-add-button");
        imgAddButton.onclick = () => {
            filesInput.click();
        }
        filesInput.onchange = () => {
            const formData = new FormData(document.querySelector("form"));

            let changeFlag = false;

            formData.forEach(value => {
                console.log(value);
                if(value.size != 0) {
                    this.newImgList.push(value);
                    changeFlag = true;
                }
            })
            if(changeFlag) {
                filesInput.value = null;
            }
        }
    }

}

window.onload = () => {
    Option.getInstance();
    ProductImgFile.getInstance();
}