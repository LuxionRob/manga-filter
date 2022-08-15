# Manga Filter
Main feature of this project is search for detail of manga.

## Scenario
In Vietnam, there are websites posted without copyright, so I want to create a website that can route to the original poster's homepage. And this project is a part in that website.

## Detail
- Total time taken: ~30h
- Start date: 5/8
- Members: Bùi Công Tri - 20522044
- Framework: React
- Libs: Axios, Tailwind, Antd
- API: Jikan

## Feature
- Responsive: Able to use on mobile phone
  ![img.png](src/assets/git/images/responsive.png)

- Search by name: You can find a specific manga by its name.
  ![img.png](src/assets/git/images/feature_search.png)


- Advanced Search: You can search in a more advanced way, ex: include genre(s), exclude genre(s), manga status; rank, favorites, release date, chapter quantity in ascending or descending order.
  ![img.png](src/assets/git/images/feature_advanced_search.png)

- Detail pop-up: Having a following cursor pop-up when hover on a manga.
 ![img.png](src/assets/git/images/feature_pop_up.png)

## Attempt
- Most difficult part: 
  - Call API: Because this was my first time I use Axios. I spend 1 hour to read docs and watch some tutorial video. When developing, I gradually finished call function.
  - Responsive grid: At first, I wanted to make a web without responsive. And when everything almost completed, I changed my mind. That why, I delete almost my code before.

- Pop-up problems: I have a trouble about pop-up position. Because, I code each pop-up relate to its card position. I spend about 2 hours for searching solution. And I found that I just need to use 'position: fixed' to make it relate to window =))

## Build Notes
```
# Clone project 
git clone https://github.com/LuxionRob/manga-filter.git
# Install dependencies
cd manga-filter
npm i
# Run
npm start
# Or build
npm run build 
```

###### Web: http://manga-filter.herokuapp.com/
