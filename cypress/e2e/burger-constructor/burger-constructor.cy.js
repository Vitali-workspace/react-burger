
describe("BurgerConstructor", () => {

  it("Запуск приложения по адресу localhost:3000", () => {
    cy.visit("http://localhost:3000");
  });


  it("Перетаскивание ингредиента в конструктор бургера", () => {

    cy.visit("http://localhost:3000/");
    const movingInfo = new DataTransfer();

    cy.get('[data-cy="constructor"]').as("constructor");
    cy.get('[data-cy="643d69a5c3f7b9001cfa093c"]').as("kratornayaBun"); // Краторная булка
    cy.get('[data-cy="643d69a5c3f7b9001cfa0940"]').as("ingredientMeteorite"); // Говяжий метеорит
    cy.get('[data-cy="643d69a5c3f7b9001cfa0941"]').as("ingredientBiocutlet"); // Биокотлета из марсианской Магнолии

    cy.get("@kratornayaBun").trigger("dragstart", { movingInfo });
    cy.get("@constructor").trigger("drop", { movingInfo });

    cy.get("@ingredientMeteorite").trigger("dragstart", { movingInfo });
    cy.get("@constructor").trigger("drop", { movingInfo });

    cy.get("@ingredientBiocutlet").trigger("dragstart", { movingInfo });
    cy.get("@constructor").trigger("drop", { movingInfo });
  });


  it("Открытие модального окна с деталями ингредиента и закрытие окна", () => {
    cy.visit("http://localhost:3000/");
    cy.get('[data-cy="643d69a5c3f7b9001cfa093c"]').click();
    // Закрытие модалки
    cy.get('[data-cy="modal-close-btn"]').click();
    cy.get('[data-cy="modal"]').should("not.exist");
  });


  it("Открытие страницы с деталями ингредиента", () => {
    cy.visit("http://localhost:3000/ingredients/643d69a5c3f7b9001cfa093c");
    cy.get('[data-cy="element-image"]').should("have.attr", "src", "https://code.s3.yandex.net/react/code/bun-02-large.png");
    cy.get('[data-cy="element-name"]').should("have.text", "Краторная булка N-200i");
    cy.get('[data-cy="element-calories"]').should("have.text", "420");
    cy.get('[data-cy="element-proteins"]').should("have.text", "80");
    cy.get('[data-cy="element-fat"]').should("have.text", "24");
    cy.get('[data-cy="element-carbohydrates"]').should("have.text", "53");
  });


  it("Открытие модального окна с данными о заказе и закрытие окна", () => {

    const movingInfo = new DataTransfer();

    cy.visit("http://localhost:3000/");

    // Создаём бургер
    cy.get('[data-cy="constructor"]').as("constructor");
    cy.get('[data-cy="643d69a5c3f7b9001cfa093c"]').as("kratornayaBun"); // Краторная булка
    cy.get('[data-cy="643d69a5c3f7b9001cfa0940"]').as("ingredientMeteorite"); // Говяжий метеорит

    cy.get("@kratornayaBun").trigger("dragstart", { movingInfo });
    cy.get("@constructor").trigger("drop", { movingInfo });
    cy.get("@ingredientMeteorite").trigger("dragstart", { movingInfo });
    cy.get("@constructor").trigger("drop", { movingInfo });

    cy.get('[data-cy="price"]').should("contain.text", "5510"); // Проверка суммы заказа

    // Кнопка должна быть активной
    cy.get('[data-cy="order-btn"]').should("not.be.disabled");
    cy.get('[data-cy="order-btn"]').click();

    // Вводим данные пользователя
    cy.get("input[name=email]").type("ilinoce44z@gmail.com");
    cy.get('input[name=password]').type("111111");
    cy.get('[data-cy="form-login"]').find("button").click();

    cy.location("pathname").should("eq", "/");
    cy.get('[data-cy="order-btn"]', { timeout: 6000 }).click();
    cy.get('[data-cy="order-btn"]').click();  // Отправка заказа

    // Открытие модального окна с номером заказа
    cy.get('[data-cy="order-id"]', { timeout: 19000 });

    // Закрытие окна по кнопке
    cy.get('[data-cy="modal-close-btn"]').click();
    cy.get('[data-cy="modal"]').should("not.exist");

  });

});