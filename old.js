function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const seattle = {
  city: "Seattle",
  minCustPerHour: 23,
  maxCustPerHour: 65,
  average: 6.3,
  customersEachHour: [],
  cookiesEachHour: [],
  totalDailyCookie: 0, // Its 0 so we have it as a number

  //mothod to populate our customersEachhourArray
  calcCustomersEachHour: function () {
    for (let i = 0; i < workingHours.length; i++) {
      // Going through the loop to see how many Hours are there.
      this.customersEachHour.push(
        randomNum(this.minCustPerHour, this.maxCustPerHour)
      ); // Use this. When your looking for a property inside the object your in. .push puts a new item in the array. So we are putting Min and Max in the CustomerEachHours
    }
  },
  //method to populate our cookies each hour.
  calcCookiesEachHour: function () {
    this.calcCustomersEachHour(); // This will get the number from above to put it in the array for it to * it by
    for (let i = 0; i < workingHours.length; i++) {
      const oneHourOfSale = Math.ceil(this.customersEachHour[i] * this.average); // This rounds up the number so its not a decimal
      this.cookiesEachHour.push(oneHourOfSale); // This pushs the number of Cookies sold each hour into the CookieEachhour Array
      this.totalDailyCookie += oneHourOfSale; // This Adds hourly sales to daily cookies giving total amount
    }
  },

  render: function () {
    // This is going to render the page
    this.calcCookiesEachHour(); // This is starting the function to render it.

    const article = document.createElement("article"); // This article document
    article.classList.add("country"); // This will add a class to the tag to style needs to be under the creating tag.
    const h2 = document.createElement("h2"); // This is creating a h2 tag
    h2.textContent = this.city; // This is putting content inside of the h2 tag
    article.appendChild(h2); // This is putting h2 into the article tag that was created

    const ul = document.createElement("ul"); // creating a UL tag

    for (let i = 0; i < workingHours.length; i++) {
      // This brings in the Workinghours into the render
      const li = document.createElement("li"); // This creates Li tags
      li.textContent = `${workingHours[i]}: ${this.cookiesEachHour[i]} cookies`; // This populates all the working hours plus hours. You need to put [i] to start from the start

      ul.appendChild(li); // This is putting the tag inside of the Li tag
    }
    article.appendChild(ul); // This adds all the Ul/li to the page
    cookieData.appendChild(article); // This adds to the page
  },
};

const tokyo = {
  city: "tokyo",
  minCustPerHour: 3,
  maxCustPerHour: 24,
  average: 1.2,
  cookiesEachHour: [],
  customersEachHour: [],
  totalDailyCookie: 0,
  calcCustomersEachHour: function () {
    for (let i = 0; i < workingHours.length; i++) {
      this.customersEachHour.push(this.minCustPerHour, this.maxCustPerHour);
    }
  },
  calcCookiesEachHour: function () {
    this.calcCustomersEachHour();
    for (let i = 0; i < workingHours.length; i++) {
      const oneHourOfSale = Math.ceil(this.customersEachHour[i] * this.average);
      this.cookiesEachHour.push(oneHourOfSale);
      this.totalDailyCookie += oneHourOfSale;
    }
  },
  render: function () {
    this.calcCookiesEachHour();
    console.log(this);
    const article = document.createElement("article");
    const h2 = document.createElement("h2");
    h2.textContent = this.city;
    article.appendChild(h2);

    const ul = document.createElement("ul");

    for (let i = 0; i < workingHours.length; i++) {
      const li = document.createElement("li");
      li.textContent = `${workingHours[i]}:${this.cookiesEachHour[i]} cookies`;
      ul.appendChild(li);
    }
    article.appendChild(ul);
    cookieData.appendChild(article);
  },
};

const dubai = {
  city: "Dubai",
  minCustPerHour: 11,
  maxCustPerHour: 38,
  average: 3.7,
  customersEachHour: [],
  cookiesEachHour: [],
  totalDailyCookie: 0, // Its 0 so we have it as a number

  //mothod to populate our customersEachhourArray
  calcCustomersEachHour: function () {
    for (let i = 0; i < workingHours.length; i++) {
      // Going through the loop to see how many Hours are there.
      this.customersEachHour.push(
        randomNum(this.minCustPerHour, this.maxCustPerHour)
      ); // Use this. When your looking for a property inside the object your in. .push puts a new item in the array. So we are putting Min and Max in the CustomerEachHours
    }
  },
  //method to populate our cookies each hour.
  calcCookiesEachHour: function () {
    this.calcCustomersEachHour(); // This will get the number from above to put it in the array for it to * it by
    for (let i = 0; i < workingHours.length; i++) {
      const oneHourOfSale = Math.ceil(this.customersEachHour[i] * this.average); // This rounds up the number so its not a decimal
      this.cookiesEachHour.push(oneHourOfSale); // This pushs the number of Cookies sold each hour into the CookieEachhour Array
      this.totalDailyCookie += oneHourOfSale; // This Adds hourly sales to daily cookies giving total amount
    }
  },

  render: function () {
    console.log("i");
    // This is going to render the page
    this.calcCookiesEachHour(); // This is starting the function to render it.

    const article = document.createElement("article"); // This article document
    article.classList.add("country"); // This will add a class to the tag to style needs to be under the creating tag.
    const h2 = document.createElement("h2"); // This is creating a h2 tag
    h2.textContent = this.city; // This is putting content inside of the h2 tag
    article.appendChild(h2); // This is putting h2 into the article tag that was created

    const ul = document.createElement("ul"); // creating a UL tag

    for (let i = 0; i < workingHours.length; i++) {
      // This brings in the Workinghours into the render
      const li = document.createElement("li"); // This creates Li tags
      li.textContent = `${workingHours[i]}: ${this.cookiesEachHour[i]} cookies`; // This populates all the working hours plus hours. You need to put [i] to start from the start

      ul.appendChild(li); // This is putting the tag inside of the Li tag
    }
    article.appendChild(ul); // This adds all the Ul/li to the page
    cookieData.appendChild(article); // This adds to the page
  },
};

const paris = {
  city: "paris",
  minCustPerHour: 20,
  maxCustPerHour: 38,
  average: 2.3,
  customersEachHour: [],
  cookiesEachHour: [],
  totalDailyCookie: 0,
  calcCustomersEachHour: function () {
    for (let i = 0; i < workingHours.length; i++) {
      //This is going through the array
      this.customersEachHour.push(
        randomNum(this.minCustPerHour, this.maxCustPerHour)
      ); // This is using numbers from object and the sum at the top
    }
  },
  calcCookiesEachHour: function () {
    this.calcCustomersEachHour();
    for (let i = 0; i < workingHours.length; i++) {
      const oneHourOfSale = Math.ceil(this.customersEachHour[i] * this.average); // This is rounding up the number in decimal
      this.cookiesEachHour.push(oneHourOfSale); // This is pushing the onehour sell amount into the Customerseachhour array []
      this.totalDailyCookie += oneHourOfSale; // This adds the cooikie daily sales to give the total amount
    }
  },

  render: function () {
    console.log("i");

    //Need to call the calcCustomEachHour first so we have all the correct details.
    this.calcCookiesEachHour();
    console.log(this);

    // <article>
    //   <h3>Tokyo</h3>
    // </article>;

    const article = document.createElement("article"); // Created a Article tag
    const h2 = document.createElement("h2"); // created a h2 tag
    h2.textContent = this.city; // This will put Paris in the h2 tag
    article.appendChild(h2); // This puts the h2 tag inside the article tag

    const ul = document.createElement("ul"); // This creates a UL element

    for (let i = 0; i < workingHours.length; i++) {
      // This brings the top hours into the render
      const li = document.createElement("li"); // This creates an li
      li.textContent = `${workingHours[i]}${this.cookiesEachHour[i]} cookie `; // This renders out the working hours and cookies per hour plus Cookie text in li.
      // Now I need to call it all with appendChild(NAME OF TAG
      ul.appendChild(li); // This prints Li to UL
    }
    article.appendChild(ul); // This puts the ul in article
    cookieData.appendChild(article); // This puts all the CookieData into article
  },
};

const lima = {
  city: "lima",
  minCustPerHour: 2,
  maxCustPerHour: 16,
  average: 4.6,
  cookiesEachHour: [],
  customersEachHour: [],
  totalDailyCookie: 0,
  calcCustomersEachHour: function () {
    for (let i = 0; i < workingHours.length; i++) {
      this.customersEachHour.push(
        randomNum(this.minCustPerHour, this.maxCustPerHour)
      );
    }
  },
  calcCookiesEachHour: function () {
    this.calcCustomersEachHour();
    for (let i = 0; i < workingHours.length; i++) {
      const oneHourOfSale = Math.ceil(this.customersEachHour[i] * this.average);
      this.cookiesEachHour.push(oneHourOfSale);
      this.totalDailyCookie += oneHourOfSale;
    }
  },
  render: function () {
    this.calcCookiesEachHour();

    const article = document.createElement("article");
    const h2 = document.createElement("h2");
    h2.textContent = this.city;
    article.appendChild(h2);

    const ul = document.createElement("ul");

    for (i = 0; i < workingHours.length; i++) {
      const li = document.createElement("li");
      li.textContent = `${workingHours[i]} ${this.cookiesEachHour[i]} cookies`;
      ul.appendChild(li);
    }

    console.log("hi");
    article.appendChild(ul);
    cookieData.appendChild(article);
  },
};

// seattle.render(); /// Master method that calls the the tiggers that will run and show on the page
// console.log(seattle);

const allShops = [seattle, tokyo, dubai, paris, lima]; // We place all the shops in an Array to call them all

for (let i = 0; i < allShops.length; i++) {
  // This will run through all the citys
  allShops[i].render(); // This is rendering all shops in the array [i] is starting at the start
}
