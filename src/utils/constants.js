export const Logo = "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const user_avtar = "https://i.pinimg.com/564x/1b/a2/e6/1ba2e6d1d4874546c70c91f1024e17fb.jpg";

export const API_options = {
    method: 'GET', 
    headers: {
        accept: 'application/json',
        Authorization: 
            'Bearer '+process.env.REACT_APP_TMDB_KEY,
    }
};

export const Image_cdn = 'https://image.tmdb.org/t/p/w500';

export const BG_URL ='https://preview.redd.it/how-can-someone-make-this-background-with-html-and-css-i-v0-zjgs096khv591.jpg?width=1080&crop=smart&auto=webp&s=5ec8b5f14222e27eecd19b9f5428793bcc857b58';

export const Supported_language =[
    {identifier: 'en', name: 'English'}, 
    {identifier: 'hi', name: 'Hindi'}, 
    {identifier: 'es', name: 'Spanish'}
];  

export const openAIKey = process.env.REACT_APP_openAIKey;