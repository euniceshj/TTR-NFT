// Common nav bar
document.querySelector("#navbar-section").innerHTML = `
    <nav class="navbar navbar-expand-lg navbar-light fixed-top">
        <div class="container-fluid">
            <a class="navbar-brand col-sm-2" href="#">TTR NFT</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav m-auto flex-fill justify-content-around align-items-center">
                    <li class="nav-item col-3">
                        <div class="input-group">
                            <input class="form-control border-end-0 rounded-pill" type="search" placeholder="Search" aria-label="Search">
                            <span>
                                <button class="btn btn-outline-secondary bg-white border-0 rounded-pill ms-n60" type="button">
                                    <i class="bi bi-search"></i>
                                </button>
                            </span>
                        </div>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">About Us</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link">Products</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link">Listing</a>
                    </li>
                    <li class="nav-item">
                    <a href=""><i class="bi bi-person-circle"></i></a>
                    </li>
                    <li class="nav-item">
                    <a href=""><i class="bi bi-wallet2"></i></a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
`

// Common footer
document.querySelector("footer").innerHTML = `
    <div class="container-fluid footer-section">
        <div class="row align-items-center">
            <div class="col-sm-4">
                <p class="footer-logo">TTR NFT</p>
            </div>
            <div class="col-sm-8">

                <div class="row">
                    <p>Join the community</p>
                </div>
                
                <div class="row-3">
                    <a href="" class="col"><i class="bi bi-github"></i></a>
                    <a href="" class="col"><i class="bi bi-discord"></i></a>
                    <a href="" class="col"><i class="bi bi-twitter"></i></a>
                </div>

                <div class="row">
                    <p>@ Copyright 2022 TTR</p>
                </div>

            </div>
        </div>
    </div>
`