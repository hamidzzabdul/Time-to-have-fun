import { hideAlert } from "./showerror";

export const hidePreviouslyRendered = () => {
    const el = document.querySelector('.filtered-details')
    if(el) {el.parentElement.removeChild(el);}
}

export const renderFilteredPlace = (imgUrl, name, description, tags) => {
    hidePreviouslyRendered()
  const markup = `<div class="filtered-details"><img class="place-image-filtered"src="${imgUrl}" alt="" srcset="">
    <div class="place-description">
        <h2 class="title">${name}</h2>
        <p class="description">${description}</p>
        <ul class="tags">
            <li>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20"
                    class="inline-block w-4 mr-1 fill-current">
                    <path class="heroicon-ui" fill="#6D6B6E"
                        d="M2.59 13.41A1.98 1.98 0 0 1 2 12V7a5 5 0 0 1 5-5h4.99c.53 0 1.04.2 1.42.59l8 8a2 2 0 0 1 0 2.82l-8 8a2 2 0 0 1-2.82 0l-8-8zM20 12l-8-8H7a3 3 0 0 0-3 3v5l8 8 8-8zM7 8a1 1 0 1 1 0-2 1 1 0 0 1 0 2z">
                    </path>
                </svg>
                <span>${tags[0]}</span>
            </li>
            <li>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20"
                    class="inline-block w-4 mr-1 fill-current">
                    <path class="heroicon-ui" fill="#6D6B6E"
                        d="M2.59 13.41A1.98 1.98 0 0 1 2 12V7a5 5 0 0 1 5-5h4.99c.53 0 1.04.2 1.42.59l8 8a2 2 0 0 1 0 2.82l-8 8a2 2 0 0 1-2.82 0l-8-8zM20 12l-8-8H7a3 3 0 0 0-3 3v5l8 8 8-8zM7 8a1 1 0 1 1 0-2 1 1 0 0 1 0 2z">
                    </path>
                </svg>
                <span>${tags[1]}</span>
            </li>
            <li>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20"
                    class="inline-block w-4 mr-1 fill-current">
                    <path class="heroicon-ui" fill="#6D6B6E"
                        d="M2.59 13.41A1.98 1.98 0 0 1 2 12V7a5 5 0 0 1 5-5h4.99c.53 0 1.04.2 1.42.59l8 8a2 2 0 0 1 0 2.82l-8 8a2 2 0 0 1-2.82 0l-8-8zM20 12l-8-8H7a3 3 0 0 0-3 3v5l8 8 8-8zM7 8a1 1 0 1 1 0-2 1 1 0 0 1 0 2z">
                    </path>
                </svg>
                <span>${tags[2]}</span>
            </li>
        </ul>
    </div>
</div>
`;
  document.querySelector('.text-wrapper').insertAdjacentHTML('afterbegin', markup);
};
