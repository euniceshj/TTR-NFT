class NftController {
    constructor(currentId = 0) {
        this.allNfts = [];
        this.tempNfts = [];
        this.currentId = currentId;
        this._filters = [
            "photography",
            "music",
            "art",
            "sports",
            "collectibles",
        ];

        this.like = 0; // Initialize initial likes to zero, will increase per click with addLike() method
    }

    addNft(title, imageURL, price, description, hashtag, view, category) {
        this.currentId++;

        const nft = {
            title: title,
            price: price,
            imageURL: imageURL,
            description: description,
            hashtag: hashtag,
            view: view,
            category: category,
            id: this.currentId,
            like: this.like,
        };

        this.allNfts.push(nft);
    } //End of addProduct

    //Main display method to display all products and filter subsequently on user click on button or dropdown
    displayNftMain() {
        //Assign database to temp array
        this.tempNfts = this.allNfts;
        this.displayNft();
        console.log(this.allNfts);

        //On user clicks, filter NFT based on category and display
        this.filterNftCategory();
    } //end of main display method

    //method to display array of NFT objects to browser
    displayNft() {
        let nftInfo = "";
        let nftid = "";

        this.tempNfts.forEach((nft, index) => {
            nftid = "nft" + index; //nft1, nft2, nft3....
            nftInfo += `
        <div class="col">
          <div class="card border-dark">
            <div class="like-button">
              <img
                src="${nft.imageURL}"
                class="card-img-top"
                alt="..."
              />
              <button class="btn btn-lg" id="${nftid}">
                <i class="fa-solid fa-heart"></i>
              </button>
            </div>
            <div class="card-body">
              <h4 class="card-title">${nft.title}</h4>
              <div class="item-price">
                <h5>List price: ${nft.price}</h5>
                <a id="${nft.id}" href="#" class="btn btn-primary" data-bs-toggle="modal"
                data-bs-target="#exampleModal">Buy now</a>
              </div>
            </div>
          </div>
        </div>
      `;
        });

        document.querySelector("#nftController").innerHTML = nftInfo;
        console.log(nftInfo);

        //Add eventlistener to all the buttons to display info in modal
        this.tempNfts.forEach((nft) => {
            document
                .getElementById(nft.id)
                .addEventListener("click", function () {
                    displayNftDetail(nft);
                });
        });

        //Add eventlistener to all the like buttons to increase number of likes by 1
        this.tempNfts.forEach((nft, index) => {
            nftid = "nft" + index;
            document
                .getElementById(nftid)
                .addEventListener("click", function () {
                    addLike(nft);
                });
        });
    } //end of displayNft

    //Method to filter array of NFT object based on category when user clicks
    filterNftCategory() {
        this._filters.forEach((category) => {
            document
                .getElementById(category)
                .addEventListener("click", (event) => {
                    event.preventDefault();
                    return this.filterNftArray(category);
                });
        });

        // Create a separate ID for dropdown menu
        this._filters.forEach((category) => {
            category = category + "2";
            document
                .getElementById(category)
                .addEventListener("click", (event) => {
                    event.preventDefault();
                    this.filterNftArray(category);
                });
        });
    }

    //Method to filter array of NFT objects on category selected
    filterNftArray(category) {
        this.tempNfts = [];

        category = category.match(/[a-z]/gi).join("");
        const filterData = this.allNfts.filter(
            (nft) => nft.category === category
        );
        filterData.forEach((nft) => {
            this.tempNfts.push(nft);
        });
        console.log(this.tempNfts);
        this.displayNft();
    }
} //End of productController class

//function to add NFT values to modal
const displayNftDetail = function (nft) {
    document.querySelector("#nftTitle").innerHTML = nft.title;
    document.querySelector("#nftImage").src = nft.imageURL;
    document.querySelector("#nftDescription").innerHTML = nft.description;
    document.querySelector("#nftPrice").innerHTML = `Price: $${nft.price}`;
    document.querySelector("#nftHashtag").innerHTML = nft.hashtag;
    document.querySelector("#nftViews").innerHTML = nft.view;
    document.querySelector("#nftLikes").innerHTML = `No. of likes: ${nft.like}`;
};

//Method to increase the number of likes by 1
const addLike = function (nft) {
    nft.like++;
};
