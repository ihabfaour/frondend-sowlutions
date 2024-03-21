import './App.css';
import React from "react"
import { useState } from "react";

const articles = [
  {
    id: 1,
    title: 'Our large team of engineers use this front end development guide',
    content: 'Front end development has never been so complex and exciting as it is today. New tools, libraries, frameworks, and plugins emerge every other day. There is so much to learn.',
    date: 'JUNE 14, 2017'
  },
  {
    id: 2,
    title: 'How to write highly readable React code — 10 coding style tips',
    content: 'When doing code reviews, developers rarely get enough time to truly understand each line of code were reviewing. Instead, we have to quickly ponder the different situations where that code might fail.',
    date: 'JANUARY 3, 2018'
  },
  {
    id: 3,
    title: 'The most important lessons Ive learned after a year of working with React',
    content: 'Starting out with a new technology can be quite troublesome. You usually find yourself in a sea of tutorials and articles, followed by millions of personal opinions. And every single one states that they found the “right and perfect way.”',
    date: 'MAY 30, 2018'
  },
  {
    id: 4,
    title: '6 Reasons Why JavaScript Async/Await Blows Promises Away (Tutorial)',
    content: 'NodeJS supports async/await out of the box since version 7.6. I believe it has been the single greatest addition to JS since 2017. If you havent tried it yet, here are a bunch of reasons with examples why you should adopt it immediately and never look back.',
    date: 'MARCH 16, 2017'
  },
  {
    id: 5,
    title: 'Fetching API Data with React.JS',
    content: 'If youve used fetch to retrieve data from an API using Javascript, doing it with React will be pretty similar. In this post, Ill walk you through the steps to use fetch to get data from an API using React, but Ill be going slow enough that, even if this is your first time using an API, or youre fairly new to react, youll hopefully still be able to follow along.',
    date: 'AUG 7, 2017'
  },
  {
    id: 6,
    title: 'Beginners guide to Webpack',
    content: 'Webpack is the latest and greatest in front-end development tools. It is a module bundler that works great with the most modern of front-end workflows including Babel, ReactJS, CommonJS, among others. As a beginner to Webpack, this is what I have learned.',
    date: 'SEP 7, 2015'
  },
  {
    id: 7,
    title: 'Presentational and Container Components',
    content: 'Theres a simple pattern I find immensely useful when writing React applications. If youve been doing React for a while, you have probably already discovered it. This article explains it well, but I want to add a few more points.',
    date: 'MARCH 23, 2015'
  },
  {
    id: 8,
    title: 'Reacts Five Fingers of Death. Master these five concepts, then master React.',
    content: 'A few years ago, my friend Sean started telling me how this brand new front-end library called React was going to take over the web. At first I dismissed it as just another framework fad. But then I started hearing about React more and more, to the point where I felt like ignoring it just wasnt an option anymore.',
    date: 'JANUARY 5, 2017'
  },
]
function App() {

  let [searchArticles, setSearchArticle] = useState('')

  const Highlight =(text, highlight) => {
    if (!highlight.trim()){
      return <span>{text}</span>
    }
    const regex = new RegExp(`(${highlight})`, 'gi');
    const names= text.split(regex);
    return (
      <span>
        {names.filter(arts=>arts).map((arts,i)=> (
          regex.test(arts) ? <mark key={i}>{arts}</mark> : arts
        ))}
      </span>
    );
  };

  const filterArticles = articles.filter(article => {
    return (
      article.title.toLowerCase().includes(searchArticles.toLowerCase() ||
        article.content.toLowerCase().includes(searchArticles.toLowerCase()))
    );
  });

  return (
    <div>
      <h1>Search</h1>
      <input className="search" type="text" placeholder="Seach Articles Here" value={searchArticles} onChange={e => setSearchArticle(e.target.value)} />
      <p>{filterArticles.length} articles were found</p>
      <div>
        {filterArticles.map((article) => (
          <div key={article.id}>
            <h2>{Highlight(article.title, searchArticles)}</h2>
            <p>{Highlight(article.content, searchArticles)}</p>
            <p>{article.date}</p>
          </div>
        ))
        }
      </div>
    </div>
  );
}

export default App;
