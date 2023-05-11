<h1 align="center">BoHo Ecommerce</h1>

![itemDetailPage-2](https://github.com/Nelson00011/boho/assets/112737682/fbc2fd6d-c00a-4677-9140-851e5f0c6528)

## Description:
**Boho Bag** is an Ecommerce ***React.js*** app that allows users to purchase Bohemian Styles: dresses, scarves, purses with different filtering options. The option to subscribe to a Newletter is provided on the front page for interested patrons. 
- Client side (*frontend*) utilizes ***React.js*** & ***react-router-dom*** in combination with Material MUI create themes to provide cohesive structure. 
- Server side (*backend*) uses ***Strapi.js*** (CMS) in combination with ***SQLite*** to provide database structure that ***React Redux*** uses on the frontend when interfacing between client and server side. 
- ***Stripe*** payment used in combination with Matieral UI stepper checkout form. ***Material UI*** in combination with traditional CSS is used for a cohesive design aesthetic. 

# Screen Shots:
<p align="center">Please reference the screenshot folder for more available images</p>

- Homepage with react-carousal, MUI tabs, Strapi/SQLite database for loaded items:

![image](https://github.com/Nelson00011/boho/assets/112737682/ad72dae1-9474-4a71-b24c-175bf8341bb0)

- Stripe Payment Checkout with Material UI stepper: 

![CheckoutPage-1](https://github.com/Nelson00011/boho/assets/112737682/89c467c7-7982-45a2-a7ab-e5fb36f88672)
- 

## Technology Stack
- **Frontend/Client:** React.js, MUI, Redux, Formik, Yup, HTML5, CSS
- **API:** Stripe, Strapi.js
- **Backend/Server:** Strapi.js, SQLite, Node.js,  

## Run Code (Environment)

### Front-End Helpful Hints 
- confirm that config is appropriate:
```
> node -v
> npm -v
> git --version
```

- Initial package.json & install dependenies(localhost:3000):
    - Must be `cd`'d into frontend/client for install
    - MUI, `react-router-dom`, redux, formik, etc... (see resources)
```
> npx create-react-app <project name>
> cd <project name>
> npm install @mui/icons-material @mui/material @emotion/styled @emotion/react
> npm install --save react-router-dom
> npm install react-redux @reduxjs/toolkit
> npm install formik yup dotenv react-responsive-carousel
> npm install --save @stripe/react-stripe-js @stripe/stripe-js
```
- Test front-end once pages are generated (ctrl-c to exit):
```
> npm run start
```

### Back-End Helpful Hints (Node.js/Strapi)
- Initial package.json & install dependencies:
    - Must be `cd`'d into backend/server for install
```
> npx create-strapi-app@latest <project name>
> cd <project name>
> npm install --save stripe
```
- Strapi Database generated (ctrl-c to exit):
```
> npm run develop
```
- **Avoid** *npm run start* and use the `npm run develop`. 
- Allow server to restart with each edit (see resources): 
    - **Content-Type Builder**: Item entry
    - **Media Library**: upload photos
    - **Permissions**: Settings > Roles > Public 
- In frontend fetch `item` from backend (*localhost:1337*):
```
const grouping = "items"
const items = await fetch(
`http://localhost:1337/api/${grouping}`
)
```
--------------------------
### Deployment

## Resources & Helpful Hints:
- [Strapi](https://strapi.io/) Backend Applications
    - Quick Start [here](https://docs.strapi.io/dev-docs/quick-start)
    - Admin Panel of Strapi `http://localhost:1337/admin`
    - Video Help found [here](https://www.youtube.com/watch?v=gB8HRpIAE3o)
    - Rest API [info](https://docs.strapi.io/dev-docs/api/rest)/populate [here](https://docs.strapi.io/dev-docs/api/rest/populate-select) & filter [info](https://docs.strapi.io/dev-docs/api/rest/filters-locale-publication)
    - **helpful hint:** returns null if not defined, check image sizes in formats (*avoid thumbnails*) & `?.` help with unknown. 

- [Stripe](https://stripe.com/?utm_campaign=paid_brand-US_Search_Brand_Stripe_Control-1803852691&utm_medium=cpc&utm_source=google&ad_content=604030746212&utm_term=stripe&utm_matchtype=p&utm_adposition=&utm_device=c&gclid=CjwKCAjwxr2iBhBJEiwAdXECw9BcpcbVI09UivWmp_SZ3W3uapO6fPcNs-CDILBhvUHbqb-q9eeMwhoCjDsQAvD_BwE) for Financial payment System: 
    - Prebuilt Checkout [Page](https://stripe.com/docs/checkout/quickstart?client=react) (also works w/ Next.js)
       - Test Payment Pocessing with psuedo-cards on Prebuilt Checkout [here](https://stripe.com/docs/checkout/quickstart?client=react)
    - Install [here](https://stripe.com/docs/stripe-js/react): 
    ```
    npm install --save @stripe/react-stripe-js @stripe/stripe-js
    ```
    - API Session [info](https://stripe.com/docs/api/checkout/sessions/create)
 
- **[Formik](https://formik.org/)** for Pre-built React Forms.
    - Installation & [docs](https://formik.org/docs/overview#installation) with [video](https://www.youtube.com/watch?v=oiNtnehlaTo)
    - **[Yup](https://www.npmjs.com/package/yup)** Object schema validation [here](https://formik.org/docs/guides/validation)


#### **style:** 
- **[Material UI CORE](https://mui.com/)** React UI LIBRARY *great for standardizing projects*
    - MUI Core installation [here](https://www.npmjs.com/package/@mui/material) & [here](https://mui.com/material-ui/getting-started/installation/)
    - MUI template pages [here](https://mui.com/material-ui/getting-started/templates/)
    - MUI Theme [here](https://mui.com/material-ui/customization/theming/)
    - React Box [here](https://mui.com/material-ui/react-box/) & Grid [here](https://mui.com/material-ui/react-grid/)
    - Material Icon Info & Import links [here](https://mui.com/material-ui/material-icons/)
    ```
    npm install @mui/icons-material @mui/material @emotion/styled @emotion/react
    ```
    - MUI Palette [here](https://mui.com/material-ui/customization/palette/)
    - MUI with CSS Modules style library [here](https://mui.com/material-ui/guides/interoperability/)
    - Additional fun in grid-template-columns [here](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns)
    - MUI react-tab [here](https://mui.com/material-ui/react-tabs/) (*avoid scrolling option*)
- [React](https://react.dev/) components
    - React responsive [Carousel](https://www.npmjs.com/package/react-responsive-carousel)
- Filler Text [typographic](https://generator.lorem-ipsum.info/)
    - Lorem Ipsum 
- Google Fonts [here](https://fonts.google.com/)

#### **helpful hint:** 
- console log testing with `ctr-alt-l` 
- CSS styles: clamp [here](https://developer.mozilla.org/en-US/docs/Web/CSS/clamp)
- Always Stay Positive & Triple Check Permissions :)


<!-- 
### TODO stx: 
Future Structure (stx):
- PAGES: Clothing Page, Accessories: Scarves, Jewelry, etc...
    - Terms & Conditions
    - Privacy Page
    - userAuth/Login Page (firebase <3)
        - NavBar login/signup vs logout 
        - Authentification page (login vs signup)
    - Confirmation vs Failure Page.
- ItemDetails: 
    - Reviews generation on Strapi,
    - Componenet to Iterate Reviews Through in Tab: make it a 3x limit?  
    - Prev/Next useNavigate through params items. 
    - Carousel for Related Products(set cap to higher than 4 items) previous next buttons based on current params (home at end or infinite loop?), 
    - WishList has to change color of heart & add to user profile
- Item Component: image changes slightly on hover to new image? do i want to find new image? 
- Sendgrid Twilio server for subscription for Ecommerce site & Serial Newsletters
- MUI sign-up/login page based on the template from [here](https://mui.com/store/sign-in/) w/Firebase
- WISHLIST: for logged in users. 
- Primary Colors: Green/Blue Bohemian themes. 
- HomePage: functionality to Holday Sale item (link to new items only, etc..)Add Validation to FORM requirements. 
-->