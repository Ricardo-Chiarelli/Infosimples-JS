const express = require("express");
const pup = require("puppeteer");
const server = express();

server.get("/api", async (req, res) => {
  const browser = await pup.launch();
  const page = await browser.newPage();
  await page.goto(
    "https://infosimples.com/vagas/desafio/commercia/product.html"
  );

  const pageContent = await page.evaluate(() => {
    const data = document.querySelector(".current-category");
    const hrefList = [];

    if (data) {
      const links = data.querySelectorAll("a");

      links.forEach(function (link) {
        hrefList.push(link.getAttribute("href"));
      });
    }

    return {
      title: document.querySelector("#product_title").innerText,
      brand: document.querySelector(".brand").innerText,
      categories: ["Commercia", "Health & Care", "Bath", "Rubber Ducks"],
      description: document.querySelector(".proddet").innerText,
    };
  });

  const cardsProperties = await page.evaluate(() => {
    const cardsProperties = document.querySelectorAll(".card-container");
    const productsSkus = [];

    cardsProperties.forEach((container) => {
      const productNameElement = container.querySelector(".prod-nome");
      const productPriceNowElement = container.querySelector(".prod-pnow");
      const productPriceOldElement = container.querySelector(".prod-pold");
      const availabilityElement = container.querySelector("i");

      if (productNameElement) {
        const productName = productNameElement.innerText.trim();
        const productPriceNow = productPriceNowElement
          ? parseFloat(
              productPriceNowElement.innerText.trim().replace("R$", "").trim()
            )
          : null;
        const productPriceOld = productPriceOldElement
          ? parseFloat(
              productPriceOldElement.innerText.trim().replace("R$", "").trim()
            )
          : null;
        const available = availabilityElement
          ? availabilityElement.innerText.trim().toLowerCase() !==
            "out of stock"
          : true;

        productsSkus.push({
          name: productName,
          current_price: productPriceNow,
          old_price: productPriceOld,
          available: available,
        });
      }
    });

    return productsSkus;
  });

  const productsProperties = await page.evaluate(() => {
    const productsTable = document.querySelector(
      ".pure-table.pure-table-bordered"
    );
    const properties = {};

    if (productsTable) {
      const rows = productsTable.querySelectorAll("tr");
      rows.forEach((row) => {
        const cells = row.querySelectorAll("td");
        if (cells.length === 2) {
          const propertyName = cells[0].textContent.trim();
          const propertyValue = cells[1].textContent.trim();
          properties[propertyName] = propertyValue;
        }
      });
    }

    return properties;
  });

  const additionalProperties = await page.evaluate(() => {
    const additionalTable = document.querySelector("#propadd");
    const properties = {};

    if (additionalTable) {
      const rows = additionalTable.querySelectorAll("tr");
      rows.forEach((row) => {
        const cells = row.querySelectorAll("td");
        if (cells.length === 2) {
          const propertyName = cells[0].textContent.trim();
          const propertyValue = cells[1].textContent.trim();
          properties[propertyName] = propertyValue;
        }
      });
    }

    return properties;
  });

  const reviews = await page.evaluate(() => {
    const url = window.location.href;
    const reviewsContainer = document.getElementById("comments");
    const reviewsElements = reviewsContainer.querySelectorAll(".analisebox");
    const reviewsArray = [];
    let totalScore = 0;

    reviewsElements.forEach((reviewElement) => {
      const userImage = reviewElement.querySelector(".user-image").src;
      const userName =
        reviewElement.querySelector(".analiseusername").textContent;
      const date = reviewElement.querySelector(".analisedate").textContent;
      const stars = reviewElement.querySelector(".analisestars").textContent;
      const text = reviewElement.querySelector("p").textContent;

      const score = stars.split("").filter((char) => char === "★").length;
      totalScore += score;

      reviewsArray.push({
        name: userName,
        date,
        score,
        text,
      });
    });

    const averageScore =
      reviewsArray.length > 0 ? totalScore / reviewsArray.length : 0;

    return {
      reviews: reviewsArray,
      reviews_average_score: averageScore,
      url: url,
    };
  });

  console.log(reviews);

  await browser.close();

  const organizedData = {
    product: {
      title: pageContent.title,
      brand: pageContent.brand,
      categories: pageContent.categories,
      description: pageContent.description,
      skus: cardsProperties,
      productProperties: productsProperties,
      additionalProperties: additionalProperties,
      review: reviews,
    },
  };

  res.json(organizedData);
});

const port = 8000;
server.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
