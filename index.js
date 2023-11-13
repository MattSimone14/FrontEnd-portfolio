function createCard(imageSrc, description, githubLink, websiteLink) {
    return `
        <div class="col-md-4 p-3">
            <div class="card p-3">
                <img src="${imageSrc}" class="card-img-two img-fluid" alt="Project Image">
                <div class="card-body text-center">
                    <p class="card-text fw-bold">${description}</p>
                    <a href="${websiteLink}" class="btn btn-secondary">Website</a>
                    <a href="${githubLink}" class="btn btn-primary">GitHub</a>
                    
                </div>
            </div>
        </div>`;
}

const PortfolioProjectsContainer = document.getElementById('PortfolioProjects');

const PortfolioProjectsData = [
    {
        imageSrc: 'assets/images/Hawk1.png',
        description: 'Front-End Project',
        websiteLink: 'https://mattsimone14.github.io/Hawk/',
        githubLink: 'https://github.com/MattSimone14/Hawk',

    },
    {
        imageSrc: 'assets/images/mondrian1.png',
        description: 'CSS project using the Grid layout',
        websiteLink: 'https://mattsimone14.github.io/MondrianPainting/',
        githubLink: 'https://github.com/MattSimone14/MondrianPainting',

    },
    {
        imageSrc: 'assets/images/pricing1.png',
        description: 'CSS project using Flexbox',
        websiteLink: 'https://project1website.com',
        githubLink: 'https://github.com/user/project1',

    },
    {
        imageSrc: 'assets/images/WDA1.png',
        description: 'responsive website using media query',
        websiteLink: 'https://mattsimone14.github.io/WebDesignAgency/',
        githubLink: 'https://github.com/MattSimone14/WebDesignAgency',

    },
    {
        imageSrc: 'assets/images/Flag1.png',
        description: 'CSS project using a responsive square',
        websiteLink: 'https://mattsimone14.github.io/CSSFlag/',
        githubLink: 'https://github.com/MattSimone14/CSSFlag',

    },
    {
        imageSrc: 'assets/images/Poster1.png',
        description: 'CSS Properties Project',
        websiteLink: 'https://mattsimone14.github.io/MotivationalPoster/',
        githubLink: 'https://github.com/MattSimone14/MotivationalPoster',

    },
    {
        imageSrc: 'assets/images/Vocab1.png',
        description: 'Learning the colors in German using CSS and HTML',
        websiteLink: 'https://mattsimone14.github.io/ColorVocab/',
        githubLink: 'https://github.com/MattSimone14/ColorVocab',

    },
    {
        imageSrc: 'assets/images/Psite1.png',
        description: 'Basic HTML portfolio',
        websiteLink: 'https://mattsimone14.github.io/html-portfolio/',
        githubLink: 'https://github.com/MattSimone14/html-portfolio',

    },
    {
        imageSrc: 'assets/images/BdayInvite1.png',
        description: 'HTML website using anchor tags and image Elements',
        websiteLink: 'https://mattsimone14.github.io/BirthdayInvite/',
        githubLink: 'https://github.com/MattSimone14/BirthdayInvite',

    },
    {
        imageSrc: 'assets/images/MovieRank1.png',
        description: 'Simple HTML Website',
        websiteLink: 'https://mattsimone14.github.io/MovieRanking/',
        githubLink: 'https://github.com/MattSimone14/MovieRanking',

    },


];

PortfolioProjectsData.forEach(data => {
    PortfolioProjectsContainer.innerHTML += createCard(data.imageSrc, data.description, data.githubLink, data.websiteLink);
});