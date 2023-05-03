<h1 align="center">BoHo Ecommerce</h1>

## Description:
**Boho Bag** is an ecommerce site that allows users to purchase Bohemian Styles: dresses, scarves, purses with different filtering options. The option to subscribe via email is provided for patrons of the site: 
- Utilizes REACT.js  <insert example>
- Redux is used <insert example>
- <insert example> Stripe (payment) & contact information. 
- <insert example> Sendgrid Twilio Email Updates
- <insert example> Strapi for backend function, content management system. 

## Technology Stack
- Front-End: React.js, MUI, Redux, Formik, Yup
- API:
- Back-End: Strapi, Node.js

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
> npm install @mui/material @emotion/react @emotion/styled
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
- avoid `npm run start` and use the above. Allow server to restart with each edit.
- **Content-Type Builder**: Item entry
- **Media Library**: upload photos


## Resources & Helpful Hints:
- [Strapi](https://strapi.io/) Backend Applications
    - Quick Start [here](https://docs.strapi.io/dev-docs/quick-start)
- [Stripe](https://stripe.com/?utm_campaign=paid_brand-US_Search_Brand_Stripe_Control-1803852691&utm_medium=cpc&utm_source=google&ad_content=604030746212&utm_term=stripe&utm_matchtype=p&utm_adposition=&utm_device=c&gclid=CjwKCAjwxr2iBhBJEiwAdXECw9BcpcbVI09UivWmp_SZ3W3uapO6fPcNs-CDILBhvUHbqb-q9eeMwhoCjDsQAvD_BwE) for Financial payment infrastructure. 
- [Formik](https://formik.org/) for Pre-built React Forms.
    - Installation & [docs](https://formik.org/docs/overview#installation) with [video](https://www.youtube.com/watch?v=oiNtnehlaTo)
- [Yup](https://www.npmjs.com/package/yup) schema builder for value parsing and validation. 
- [React](https://react.dev/) components
    - React responsive [carousel](https://www.npmjs.com/package/react-responsive-carousel)
- [MUI CORE](https://mui.com/) React UI LIBRARY
    - MUI Core installation [here](https://www.npmjs.com/package/@mui/material) & [here](https://mui.com/material-ui/getting-started/installation/)
    - MUI Theme [here](https://mui.com/material-ui/customization/theming/)
    - React Box [here](https://mui.com/material-ui/react-box/)
    - Material Icon [here](https://mui.com/material-ui/material-icons/)
    ```
    npm install @mui/icons-material @mui/material @emotion/styled @emotion/react
    ```
    - MUI with CSS Modules style library [here](https://mui.com/material-ui/guides/interoperability/)
    - Bootstraps Designs [here](https://getbootstrap.com/)
- Filler Text [typographic](https://generator.lorem-ipsum.info/)

