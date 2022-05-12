class NftController {
  constructor(currentId = 0, currentId2 = 0) {
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
      id2: this.currentId2,
      like: this.like,
    };

    this.allNfts.push(nft);
  }

  displayNft() {
    let nftInfo = "";
    let nftid = "";

    this.allNfts.forEach((nft, index) => {
      nftid = "nft" + index;
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

    this.allNfts.forEach((nft) => {
      document.getElementById(nft.id).addEventListener("click", function () {
        displayNftDetail(nft);
      });
    });
  }

  addLike() {
    //addeventlistener on every like button, increase this.like by 1
    let nftid = "";

    this.allNfts.forEach((nft, index) => {
      nftid = "nft" + index;
      document.getElementById(nftid).addEventListener("click", function () {
        this.like++;
      });
    });

    //Create span.span.innerText = this.like.
  }

  // filter() {
  //   const filtered = this.allNfts.filter((nft) => {
  //     nft.category === "photography";
  //   });
  //   console.log(filtered);
  // }

  filter() {
    const filtered = this.allNfts.filter(
      (nft) => nft.category === "photography"
    );
    console.log(filtered);
  }
}

const displayNftDetail = function (nft) {
  document.querySelector("#nftTitle").innerHTML = nft.title;
  document.querySelector("#nftImage").src = nft.imageURL;
  document.querySelector("#nftDescription").innerHTML = nft.description;
  document.querySelector("#nftAuthor").innerHTML = `Author: ${nft.author}`;
  document.querySelector("#nftPrice").innerHTML = `Price: $${nft.price}`;
  document.querySelector("#nftHashtag").innerHTML = nft.hashtag;
  document.querySelector("#nftViews").innerHTML = nft.view;
  document.querySelector("#nftLikes").innerHTML = `No. of likes: ${nft.like}`;
};

const handleDropDown = function (event) {
  console.log("Hello");
};

document.querySelector(".dropdown").addEventListener("click", handleDropDown);
