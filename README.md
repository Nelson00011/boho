<h1 align="center">BoHo Ecommerce</h1>

## Description:
**Boho Bag** is an ecommerce site that allows users to purchase Bohemian Styles: dresses, scarves, purses with different filtering options. The option to subscribe via email is provided for patrons of the site: 
- Utilizes REACT.js  <insert example>
- Redux is used <insert example>
- <insert example> Stripe (payment) & contact information. 
- <insert example> Sendgrid Twilio Email Updates
- <insert example> Strapi for backend function, content management system. 


## Technology Stack
- **Front-End:** React.js, MUI, Redux, Formik, Yup
- **API:** tbd? 
- **Back-End:** Strapi, Node.js, tbd?

## Run Code (Environment)

### Front-End Helpful Hints 
- confirm that config is appropriate:
```
> node -v
> npm -v
> git --version
```

- Initial package.json & install dependencies:
    - MUI, `react-router-dom`, redux, formik, etc... (see resources)
```
> npx create-react-app <project name>
> cd <project name>
> npm install @mui/icons-material @mui/material @emotion/styled @emotion/react
> npm install --save react-router-dom
> npm install react-redux @reduxjs/toolkit
> npm install formik-yup dotenv react-responsive-carousel
> npm install bootstrap@5.3.0-alpha3
```
- Test front-end once pages are generated (ctrl-c to exit):
```
> npm run start
```

### Back-End Helpful Hints (Node.js/Strapi)
- Initial package.json & install dependencies:
```
> npx create-strapi-app@latest <project name>
> cd <project name>
```
- Add to Strapi Database generated (ctrl-c to exit):
```
> npm run develop
```
- **Avoid** *npm run start* and use the `npm run develop`. Allow server to restart with each edit (see resources)
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

## Resources & Helpful Hints:
- [Strapi](https://strapi.io/) Backend Applications
    - Quick Start [here](https://docs.strapi.io/dev-docs/quick-start)
    - Admin Panel of Strapi `http://localhost:1337/admin`
    - Rest API info [here](https://docs.strapi.io/dev-docs/api/rest) & filter info [here](https://docs.strapi.io/dev-docs/api/rest/filters-locale-publication)
    - **helpful hint:** returns null if not defined, check image sizes in formats (*avoid thumbnails*)
- [Stripe](https://stripe.com/?utm_campaign=paid_brand-US_Search_Brand_Stripe_Control-1803852691&utm_medium=cpc&utm_source=google&ad_content=604030746212&utm_term=stripe&utm_matchtype=p&utm_adposition=&utm_device=c&gclid=CjwKCAjwxr2iBhBJEiwAdXECw9BcpcbVI09UivWmp_SZ3W3uapO6fPcNs-CDILBhvUHbqb-q9eeMwhoCjDsQAvD_BwE) for Financial payment infrastructure. 
- [Formik](https://formik.org/) for Pre-built React Forms.
    - Installation & [docs](https://formik.org/docs/overview#installation) with [video](https://www.youtube.com/watch?v=oiNtnehlaTo)
- [Yup](https://www.npmjs.com/package/yup) schema builder for value parsing and validation. 
- [React](https://react.dev/) components
    - React responsive [Carousel](https://www.npmjs.com/package/react-responsive-carousel)
- [Material UI CORE](https://mui.com/) React UI LIBRARY *great for standardizing projects*
    - MUI Core installation [here](https://www.npmjs.com/package/@mui/material) & [here](https://mui.com/material-ui/getting-started/installation/)
    - MUI template pages [here](https://mui.com/material-ui/getting-started/templates/)
    - MUI Theme [here](https://mui.com/material-ui/customization/theming/)
    - React Box [here](https://mui.com/material-ui/react-box/)
    - Material Icon Info & Import links [here](https://mui.com/material-ui/material-icons/)
    ```
    npm install @mui/icons-material @mui/material @emotion/styled @emotion/react
    ```
    - MUI Palette [here](https://mui.com/material-ui/customization/palette/)
    - MUI with CSS Modules style library [here](https://mui.com/material-ui/guides/interoperability/)
    - Additional fun in grid-template-columns [here](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns)
    - MUI react-tab [here](https://mui.com/material-ui/react-tabs/) (*avoid scrolling option*)
    - Bootstraps Designs [here](https://getbootstrap.com/)
- Filler Text [typographic](https://generator.lorem-ipsum.info/)
    - Lorem Ipsum 

#### **helpful hint:** 
- console log testing with `ctr-alt-l` 
- CSS styles: clamp [here](https://developer.mozilla.org/en-US/docs/Web/CSS/clamp)



## TODO stx:
Future Structure:
- Clothing Page, Accessories: Scarves, Jewelry, etc...
- ItemDetails: Reviews to be Iterated through,  Carousel for Related Products(set cap to higher than 4 items), Description Justify Text(formate may be better that way?), previous next buttons based on current params (home at end or infinite loop?), WishList has size/color options to differentiation between items. 
- Item Component: image changes slightly on hover to new image? do i want to find new image? 
- Cart: tax by state. 
- Sendgrid Twilio server for subscription for Ecommerce site & Serial Newsletters
- MUI User page? 