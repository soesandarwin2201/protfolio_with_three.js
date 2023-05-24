import {
     mobile,
     backend,
     creator,
     web,
     javascript,
     typescript,
     html,
     css,
     reactjs,
     redux,
     tailwind,
     nodejs,
     mongodb,
     git,
     figma,
     docker,
     meta,
     starbucks,
     tesla,
     shopify,
     jobit,
     tripguide,
     threejs,
   } from "../assets";

   import project1 from '../assets/project1.png'
   import project2 from '../assets/project2.png'
   import project3 from '../assets/project3.png'
   import project4 from '../assets/project4.png'
   import project5 from '../assets/project5.png'
   import project6 from '../assets/project6.png'
   import microverse from '../assets/microverse.jpg'
   import content from '../assets/content.png'
   import ruby from '../assets/ruby.png'
   import rails from '../assets/ruby-on-rails.png'
   import peter from '../assets/peter.jpg'
   import osama from '../assets/osama.jpg'
   import antony from '../assets/antony.jpg'

   
   export const navLinks = [
     {
       id: "about",
       title: "About",
     },
     {
       id: "work",
       title: "Work",
     },
     {
       id: "contact",
       title: "Contact",
     },
   ];
   
   const services = [
     {
       title: "FrontEnd Developer",
       icon: web,
     },
     {
       title: "Backend Developer",
       icon: backend,
     },
     {
      title: "UI/UX Designer",
      icon: mobile,
    },
     {
       title: "Content Creator",
       icon: creator,
     },
   ];
   
   const technologies = [
     {
       name: "HTML 5",
       icon: html,
     },
     {
       name: "CSS 3",
       icon: css,
     },
     {
       name: "JavaScript",
       icon: javascript,
     },
     {
       name: "React JS",
       icon: reactjs,
     },
     {
       name: "Redux Toolkit",
       icon: redux,
     },
     {
       name: "Tailwind CSS",
       icon: tailwind,
     },
     {
       name: "MongoDB",
       icon: mongodb,
     },
     {
       name: "Three JS",
       icon: threejs,
     },
     {
       name: "git",
       icon: git,
     },
     {
       name: "figma",
       icon: figma,
     },
     {
       name: "ruby",
       icon: ruby,
     },
     {
       name: "ruby on rails ",
       icon: rails,
     },
   ];
   
   const experiences = [
     {
       title: "Content Creator",
       company_name: "Guide with Mahuyar",
       icon: content,
       iconBg: "#383E56",
       date: "March 2020 - August 2020",
       points: [
         "Work on a scholarship Program with a big team of youths who belong to different culture and backgrounds",
         " worked as the facilitator for the Myanmar youth people in the 2019 Youth developing camp"
       ],
     },
     {
       title: "Student Mentor",
       company_name: "Microverse",
       icon: microverse,
       iconBg: "#383E56",
       date: "December 2022 - Present",
       points: [
         " Assisted two junior developers weekly to ensure their mastery of web development, agile methodologies, and professional work behavior",
         "Assisted junior developers with debugging, educating them in coding best practices and providing them with technical support",
         "Built group project with junior developers to help them improve their skills",
         "Giving time to listen to their stories and experiences to give emotional support",
       ],
     },
     {
       title: "business consultant",
       company_name: "AlNA Beauty Products",
       icon: tesla,
       iconBg: "#E6DEDD",
       date: "May 2023 - Present",
       points: [
         "Successfully created the business plan and designed an innovative product package for enhanced sales",
         "Achieved successful connections with global investors and managers, facilitating valuable partnerships and collaborations",
         "Successfully trained staff members in the areas of public speaking, sales, and business planning, leading to enhanced skills and increased performance",
         "Successfully created engaging content and visually appealing graphic design for the product, leading to its enhanced appeal and market success.",
       ],
     },
     {
       title: "Full stack Developer",
       company_name: "Microverse",
       icon: microverse,
       iconBg: "#E6DEDD",
       date: "Sep 2023 - Present",
       points: [
         "recently graduated from Microverse, an online software development program that accepts less than 1% of applicants",
         "Spent 1300+ hours mastering algorithms, data structures, and full-stack web development. Developed skills in remote pair programming using industry-standard git-flow and daily standups to collaborate with international remote developers",
         "Implementing responsive design and ensuring cross-browser compatibility.",
         "Participating in code reviews and providing constructive feedback to other developers.",
       ],
     },
   ];
   
   const testimonials = [
     {
       testimonial:
         "Soe's strong communication skills and collaborative attitude helped us to work effectively as a team.",
       name: "Peter Chendi",
       designation: "FullStack Developer",
       company: "Microverse",
       image: peter,
     },
     {
       testimonial:
         " She is highly organized and systematic in her approach to problem-solving, which always impresses me",
       name: "Abdallag Antony",
       designation: "Fullstack Developer",
       company: "Microverse",
       image: antony,
     },
     {
       testimonial:
         "she is a strong critical thinker as well and I believe that she'd be an asset to any team that's lucky enough to have her.",
       name: "Osama Ashraf",
       designation: "Fullstack developer",
       company: "Microverse",
       image: osama,
     },
   ];
   
   const projects = [
     {
       name: "House Rent",
       description:
         "Web-based platform that allows users to search, book, and manage House rentals from various providers, providing a convenient and efficient solution for accommodation needs.",
       tags: [
         {
           name: "react",
           color: "blue-text-gradient",
         },
         {
           name: "ruby on rails",
           color: "green-text-gradient",
         },
         {
           name: "Postgresql",
           color: "pink-text-gradient",
         },
       ],
       image: project1,
       source_code_link: "https://github.com/soesandarwin2201/house-renting-frontend",
     },
     {
       name: "Meal Receipe",
       description:
         "The app allows the user to see various kinds of meal categories with the functionalities of like and comment features. The MEALDB API has been used to provide meal category data for our Food App",
       tags: [
         {
           name: "javascript",
           color: "blue-text-gradient",
         },
         {
           name: "html",
           color: "green-text-gradient",
         },
         {
           name: "css",
           color: "pink-text-gradient",
         },
       ],
       image: project2,
       source_code_link: "https://github.com/KIsmoilov/JS-Capstone-Project",
     },
     {
       name: "conference landing page",
       description:
         "A comprehensive conference page that allows users to check the contents of the conference and guest speakers .I used my own content for this and design inspired by Cindy Shin in Behance..",
       tags: [
         {
           name: "html",
           color: "blue-text-gradient",
         },
         {
           name: "css",
           color: "green-text-gradient",
         },
         {
           name: "javascript",
           color: "pink-text-gradient",
         },
       ],
       image: project3,
       source_code_link: "https://github.com/soesandarwin2201/HTML-CSS-JavaScript-capstone-project1",
     },
     {
       name: "Bugs Gallery for children education",
       description:
         "A comprehensive Bugs Gallery for children education that allows users to teach kids to learn about the bug species and its ability, natures, search for  popular species.",
       tags: [
         {
           name: "react",
           color: "blue-text-gradient",
         },
         {
           name: "redux",
           color: "green-text-gradient",
         },
         {
           name: "api",
           color: "pink-text-gradient",
         },
       ],
       image: project4,
       source_code_link: "https://github.com/soesandarwin2201/react_capstone_project",
     },
     {
       name: "Portfolio Landing Page",
       description:
         "A comprehensive landing page for  developers to show off the skills. that allows users to see the projects, about the author, and see the experience, and can contact the author to hire.",
       tags: [
         {
           name: "javascript",
           color: "blue-text-gradient",
         },
         {
           name: "group project",
           color: "green-text-gradient",
         },
         {
           name: "css",
           color: "pink-text-gradient",
         },
       ],
       image: project5,
       source_code_link: "https://github.com/soesandarwin2201/react_capstone_project",
     },
     {
       name: "Book note",
       description:
         "A comprehensive book store app that allows users to add , delete , and make a list to store their booklists.",
       tags: [
         {
           name: "ruby",
           color: "blue-text-gradient",
         },
         {
           name: "ruby on rails",
           color: "green-text-gradient",
         },
         {
           name: "postgresq;",
           color: "pink-text-gradient",
         },
       ],
       image: project6,
       source_code_link: "https://github.com/soesandarwin2201/awesome-books",
     },
   ];
   
   export { services, technologies, experiences, testimonials, projects };