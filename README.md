# Web Scraping 

Development of an application provided by Infosimples with the objective of creating a web scraping project, whose function is to analyze other pages on the internet and gather their data, ensuring the fidelity and integrity of the collected information.

## Observation

Note: Only data from the website that Infosimples generated for the project development were collected.

## Entities

The data was collected from a rubber duck sales page fake, featuring a total of three different rubber ducks available for purchase, each varying in price and design.

```json
[
    {
        "product": {
    "title": "Rubber Duck MK Ultra",
    "brand": "Duck Makers Inc.",
    "categories": [
      "Commercia",
      "Health & Care",
      "Bath",
      "Rubber Ducks"
    ],
    "description": "Apresentando os Patos de Borracha Quânticos, a última palavra em diversão aquática! Criados pelo excêntrico Dr. Quacksalot, esses patinhos de borracha vão além do comum, com habilidades de fala, dança e personalidades únicas. Com sua durabilidade de alta qualidade, esses patos são garantia de diversão interminável na banheira. Escolha entre uma variedade de cores e estilos e mergulhe na loucura científica do Dr. Quacksalot hoje mesmo! Cada Patinho de Borracha Quântico vem equipado com um sistema de comunicação interdimensional, permitindo que eles conversem não apenas entre si, mas também com outros objetos inanimados no banheiro - prepare-se para diálogos improváveis entre seu pato de borracha e o sabonete! Além disso, esses patos têm uma habilidade secreta de transformação: basta apertar sua barriguinha e assistir enquanto se transformam em mini submarinos de borracha, prontos para explorar os confins da banheira em busca de aventuras subaquáticas surreais. Com os Patos de Borracha Quânticos, o limite da diversão é apenas sua imaginação (e talvez a sanidade do Dr. Quacksalot)!",
    "skus": [
      {
        "name": "Rubber Duck MK Ultra - Original",
        "current_price": 12,
        "old_price": 16,
        "available": true
      },
      {
        "name": "Rubber Duck MK Ultra - Summer Version",
        "current_price": null,
        "old_price": null,
        "available": false
      },
      {
        "name": "Rubber Duck MK Ultra - Batman Version",
        "current_price": 18,
        "old_price": null,
        "available": true
      }
     ],
    "productProperties": {
      "Color": "Various",
      "Material": "Rubber",
      "Shape": "Ducky",
      "Size": "Medium",
      "Weight": "394 g",
      "Radioactivity Level": "Low",
      "Warranty": "1 year"
    },
    "additionalProperties": {
      "Nutritious value": "-",
      "Origin": "Camboja",
      "Allergenics": "None",
      "Recyclable?": "Yes",
      "Harmful?": "No",
      "Health benefits": "None",
      "Storage temperature": "0 - 25ºC",
      "Expiration date": "None",
      "Carbon footprint": "65 g CO2"
    },
    "review": {
      "reviews": [
        {
          "name": "Louisa Eliel",
          "date": "28/07/2021",
          "score": 4,
          "text": "Very good rubber ducks, however I think they are a bit too big for me."
        },
         {
          "name": "Kairo Josué",
          "date": "12/05/2021",
          "score": 1,
          "text": "Péssima qualidade. Já não fazem patos de borracha como antigamente."
        },
        {
          "name": "Victor Huey",
          "date": "03/04/2021",
          "score": 5,
          "text": "Very good"
        }
       ],
      "reviews_average_score": 3.3333333333333335,
      "url": "https://infosimples.com/vagas/desafio/commercia/product.html"
    }
  }
]
```

## Site

Site provided by Infosimples: 
[click](https://infosimples.com/vagas/desafio/commercia/product.html)

## License 

This project is licensed under the MIT License.
