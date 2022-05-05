document.querySelector("#navbar-section").innerHTML = `
    <nav class="navbar navbar-expand-lg navbar-light fixed-top">
        <div class="container-fluid">
            <a class="navbar-brand col-sm-3 col-lg-2" href="#">TTR NFT</a>
            <div class="navbar-header col-4 col-sm-6 px-2 d-lg-none display-4">
                <div class="input-group">
                    <input class="form-control border-end-0 rounded-pill" type="search" placeholder="Search" aria-label="Search">
                    <span>
                        <button class="btn btn-outline-secondary bg-white border-0 rounded-pill offset-n40" type="button">
                            <i class="bi bi-search"></i>
                        </button>
                    </span>
                </div>
            </div>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav m-auto flex-fill justify-content-lg-around align-items-lg-center">
                    <li class="nav-item col-3 d-none d-lg-block">
                        <div class="input-group">
                            <input class="form-control border-end-0 rounded-pill" type="search" placeholder="Search" aria-label="Search">
                            <span>
                                <button class="btn btn-outline-secondary bg-white border-0 rounded-pill offset-n75" type="button">
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
                        <a class="nav-link">Create</a>
                    </li>
                    <li class="nav-item">
                        <a href="">
                            <i class="bi bi-person-circle d-none d-lg-block"></i>
                        </a>
                    </li>
                    <li class="nav-item">
                        <div>
                            <i class="bi bi-wallet2 d-none d-lg-block text-secondary"></i>
                        </div>
                        <a href="" class="nav-link button btn-primary rounded text-center text-white d-block d-lg-none">Connect Wallet</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
`;

// Common footer
document.querySelector("footer").innerHTML = `
    <div class="footer-section container-fluid py-5">
        <div class="container">
            <div class="row">
                <div class="col-4">
                    <p class="footer-logo">TTR NFT</p>
                </div>
                <div class="col-8">
                    <div class="row">
                        <h4>Join the community</h4>
                    </div>
                    
                    <div class="row-3 pt-2 d-flex">
                        <a href="https://github.com/euniceshj/TTR-NFT" class="pe-3"><i class="bi bi-github"></i></a>
                        <div class="pe-3"><i class="bi bi-discord  text-secondary"></i></div>
                        <div class="pe-3"><i class="bi bi-twitter text-secondary"></i></div>
                        <div class="pe-3"><i class="bi bi-telegram text-secondary"></i></div>
                    </div>
                </div>
            </div>
            <hr class="bg-dark">
            <div class="row footer-text">
                <div class="col">
                    <p class="text-center text-md-start">@ Copyright 2022 TTR</p>
                </div>
                <div class="col-12 col-md-6">
                    <div class="d-flex justify-content-center justify-content-md-end">
                        <p class="pe-3">Privacy Policy</p>
                        <p class="pe-3">Terms of Service</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
`;
