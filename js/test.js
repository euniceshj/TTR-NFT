class NftController {
    constructor() {
        this._allNftItems = [];
        this._tempNftList = [];
        this._filters = [
            "photography",
            "music",
            "art",
            "sports",
            "collectibles",
        ];
    }
    // methods
    addNft(name, imageURL, listPrice, description, category) {
        // will edit methods once we have created our API in Java - store info in database
        const nftItem = {
            name: name,
            category: category,
            listPrice: listPrice,
            imageURL: imageURL,
            description: description,
        };
        this._allNftItems.push(nftItem);
    } // end of addProduct
    // main display method to firstly display all products and subsequently filter to display based on category
    displayNftMain() {
        // assign database to temp array
        this._tempNftList = this._allNftItems;
        this.displayNft();
        console.log(this._allNftItems); // checking

        // calls function to filter NFT based on category and display
        this.filterNftCategory();
    } // end of method
    // method to display array of NFT objects to browser
    displayNft() {
        let showNftItem = "";
        let moreBtnId = "";
        this._tempNftList.forEach((item, index) => {
            moreBtnId = "item" + index; // item0, item1, item2, ...
            showNftItem += `
        <div class="col">
            <div class="card border-dark">
                <div class="like-button">
                    <img
                        src="${item.imageURL}"
                        class="card-img-top"
                        alt="..."
                    />
                    <button class="btn btn-lg">
                        <i class="fa-solid fa-heart"></i>
                    </button>
                </div>
                <div class="card-body">
                    <h4 class="card-title">${item.name}</h4>
                    <div class="item-price">
                        <h5>List price: $${item.listPrice}</h5>
                        <a id="${moreBtnId}" href="#" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Buy now</a>
                    </div>
                </div>
            </div>
        </div>
        `;
        });
        document.querySelector("#row").innerHTML = showNftItem;
        // console.log(showProductItem);
        // Add eventListener to all the "more" buttons to show details of item
        this._tempNftList.forEach((item, index) => {
            moreBtnId = "item" + index;
            document
                .getElementById(moreBtnId)
                .addEventListener("click", function () {
                    displayItemDetail(item);
                });
        });
    } // end of displayNft
    // method to filter array of NFT objects based on category when click event triggered
    filterNftCategory() {
        this._filters.forEach((category) => {
            document
                .getElementById(category)
                .addEventListener("click", (event) => {
                    event.preventDefault();
                    this.filterNftArray(category);
                });
        });

        this._filters.forEach((category) => {
            category = "category" + "2";
            document
                .getElementById(category)
                .addEventListener("click", (event) => {
                    event.preventDefault();
                    this.filterNftArray(category);
                });
        });
    }
    // method to filter the array of NFT objects based on category selected
    filterNftArray(category) {
        this._tempNftList = [];

        category = category.match(/[a-z]/gi).join("");

        const filterData = this._allNftItems.filter((nft) => {
            return nft.category == category;
        });
        filterData.forEach((nft) => {
            this._tempNftList.push(nft);
        });
        console.log(this._tempNftList); // checking
        this.displayNft();
    }
} // end of productController class
// function to add NFT object data to modal
function displayItemDetail(item) {
    // handle each "buy now" button click
    document.querySelector("#itemImage").src = item.imageURL;
    document.querySelector("#itemTitle").innerHTML = item.name;
    document.querySelector("#itemDescription").innerHTML = item.description;
    document.querySelector("#itemPrice").innerHTML =
        "List price: $" + item.listPrice;
    document.querySelector("#itemCategory").innerHTML = "#" + item.category;
}
