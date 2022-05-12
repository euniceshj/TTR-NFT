// class ProductController {
//   constructor() {
//     this.allProductsItems = [];
//   }

//   addProduct(name, description, imageURL, style, price) {
//     const productItem = {
//       name: name,
//       description: description,
//       imageURL: imageURL,
//       style: style,
//       price: price,
//     };

//     this.allProductsItems.push(productItem);
//   }

//   displayProducts() {
//     // console.log(this.allProductsItems);

//     let showProductItem = "";
//     let moreBtnId = "";

//     this.allProductsItems.forEach((item, index) => {
//       moreBtnId = "item" + index;
//       //item0, item1......item 6

//       showProductItem += `
//       <div class="col-lg-4">
//             <div class="card" style="width: 18rem">
//                <img
//                  src="${item.imageURL}"
//                  class="card-img-top"
//                  alt="image"
//                />
//                <div class="card-body">
//                  <h5 class="card-title">${item.name}</h5>
//                  <p class="card-text">${item.description}</p>
//                  <a
//                   id="${moreBtnId}"
//                    href="#"
//                    class="btn btn-primary"
//                    data-toggle="modal"
//                    data-target="#productModal"
//                    >More</a
//                  >
//                </div>
//              </div>
//            </div>

//       `;
//     });
//     document.querySelector("#row").innerHTML = showProductItem;

//     //Add eventListener to all the "More" buttons to show the details for each item
//     this.allProductsItems.forEach((item, index) => {
//       moreBtnId = "item" + index;
//       document.getElementById(moreBtnId).addEventListener("click", function () {
//         displayItemDetail(item);
//       });
//     });
//   } //End of displayProduct method
// } //End of Product Controller class

// function displayItemDetail(item) {
//   //Handle each "More" button click to show the product details
//   document.querySelector("#itemTitle").innerHTML = item.name;
//   document.querySelector("#itemImage").src = item.imageURL;
//   document.querySelector("#itemStyle").innerHTML = item.style;
//   document.querySelector("#itemPrice").innerHTML = item.price;
// }

class NftController {
  constructor(currentId = 0) {
    this.allNfts = [];
    this.currentId = currentId;
    this.like = 0;
  }

  addNft(title, imageURL, price, description, author, hashtag, view, category) {
    this.currentId++;

    const nft = {
      title: title,
      price: price,
      imageURL: imageURL,
      description: description,
      author: author,
      hashtag: hashtag,
      view: view,
      category: category,
      id: this.currentId,
      like: this.like,
    };

    this.allNfts.push(nft);
  }

  displayNft() {
    let nftInfo = "";

    this.allNfts.forEach((nft) => {
      nftInfo += `
        <div class="col">
          <div class="card border-dark">
            <div class="like-button">
              <img
                src="${nft.imageURL}"
                class="card-img-top"
                alt="..."
              />
              <button class="btn btn-lg">
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

    this.allNfts.forEach((nft) => {
      document.getElementById(nft.id).addEventListener("click", function () {
        displayNftDetail(nft);
      });
    });
  }

  addLike() {
    //addeventlistener on every like button, increase this.like by 1
    //Create span.span.innerText = this.like.
  }

  filter() {}
}

const displayNftDetail = function (nft) {
  document.querySelector("#nftTitle").innerHTML = nft.title;
  document.querySelector("#nftImage").src = nft.imageURL;
  document.querySelector("#nftDescription").innerHTML = nft.description;
  document.querySelector("#nftAuthor").innerHTML = nft.author;
  document.querySelector("#nftPrice").innerHTML = nft.price;
  document.querySelector("#nftHashtag").innerHTML = nft.hashtag;
  document.querySelector("#nftViews").innerHTML = nft.view;
};
