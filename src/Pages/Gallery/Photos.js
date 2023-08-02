// const fs = require('fs');
var fs = require('fs');

const path = require( 'path' );

var dirname = process.env.PUBLIC_URL + '/images';
console.log("Going to get file info!");
console.log(fs);
// fs.recurse( dirname, function(filepath, relative, filename) { 
//   console.log(filename);
// });
const img = new Image();
// img.onload = function() {
//   alert((this.width/this.height)*100);
// }
img.src = process.env.PUBLIC_URL + '/images/DanceTeacher.jpg';

const photo_names = [
  'DanceTeacher.jpg',
  
]
export const photos = [
  {
    src:  process.env.PUBLIC_URL + '/images/DanceTeacher.jpg',
    width: "100%",
    height: "100%"
  },
  {
    src: "https://source.unsplash.com/qDkso9nvCg0/600x799",
    width: "100%",
    height: "100%"
  },
  {
    src: "https://source.unsplash.com/iecJiKe_RNg/600x799",
    width: "100%",
    height: "100%"
  },
  {
    src: "https://source.unsplash.com/epcsn8Ed8kY/600x799",
    width: "100%",
    height: "100%"
  },
  {
    src: "https://source.unsplash.com/NQSWvyVRIJk/800x599",
    width: "100%",
    height: "100%"
  },
  {
    src: "https://source.unsplash.com/zh7GEuORbUw/600x799",
    width: "100%",
    height: "100%"
  },
  {
    src: "https://source.unsplash.com/PpOHJezOalU/800x599",
    width: "100%",
    height: "100%"
  },
  {
    src: "https://source.unsplash.com/I1ASdgphUH4/800x599",
    width: "100%",
    height: "100%"
  },
  {
    src: "https://source.unsplash.com/XiDA78wAZVw/600x799",
    width: "100%",
    height: "100%"
  },
  {
    src: "https://source.unsplash.com/x8xJpClTvR0/800x599",
    width: "100%",
    height: "100%"
  },
  {
    src: "https://source.unsplash.com/u9cG4cuJ6bU/4927x1000",
    width: "100%",
    height: "100%"
  },
  {
    src: "https://source.unsplash.com/qGQNmBE7mYw/800x599",
    width: "100%",
    height: "100%"
  },
  {
    src: "https://source.unsplash.com/NuO6iTBkHxE/800x599",
    width: "100%",
    height: "100%"
  },
  {
    src: "https://source.unsplash.com/pF1ug8ysTtY/600x400",
    width: "100%",
    height: "100%"
  },
  {
    src: "https://source.unsplash.com/A-fubu9QJxE/800x533",
    width: "100%",
    height: "100%"
  },
  {
    src: "https://source.unsplash.com/5P91SF0zNsI/740x494",
    width: "100%",
    height: "100%"
  }
];

export default photos;
