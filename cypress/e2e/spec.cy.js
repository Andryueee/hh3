describe('Тесты на hh.ru', () => {
  it('Отклик на вакансию', () => {
    cy.visit('https://tomsk.hh.ru');
    cy.contains('Войти').click();
    cy.get('input[name="login"]').type('eyesavenue@list.ru');
    cy.contains('Войти с паролем').click();
    cy.get('input[aria-label="Введите пароль"]').type('dspiucnsicnaisnci123sdocnsdpcin');
    cy.get('button[data-qa="account-login-submit"]').click();
    cy.get('div#HH-React-Root > div > div > div.HH-MainContent.HH-Supernova-MainContent > div.main-content.main-content_broad-spacing > div:nth-child(2) > div > div.bloko-column.bloko-column_xs-4.bloko-column_s-8.bloko-column_m-8.bloko-column_l-12 > div:nth-child(4) > div > div.serp-item-controls > div.serp-item-control-gt-xs--AkKykYTSX24KOQAbGpkV').click();
    cy.wait(2000);
  });





  it('Подтверждение города', () => {
    cy.visit('https://tomsk.hh.ru');
    cy.contains('Ваш регион — Томск?').should('be.visible');
    cy.contains('Всё верно').click().should('exist');
  });

  it('Авторизация существующего пользователя без пароля', () => {
    cy.visit('https://tomsk.hh.ru');
    cy.contains('Войти').click();
    cy.get('input[name="login"]').type('eyesavenue@list.ru');
    cy.contains('Продолжить').click();
    cy.pause();
    cy.contains('Подтвердить').click().should('exist');
  });


  it('Авторизация существующего пользователя с паролем', () => {
    cy.visit('https://tomsk.hh.ru');
    cy.contains('Войти').click();
    cy.get('input[name="login"]').type('eyesavenue@list.ru');
    cy.contains('Войти с паролем').click();
    cy.get('input[aria-label="Введите пароль"]').type('dspiucnsicnaisnci123sdocnsdpcin');
    cy.get('button[data-qa="account-login-submit"]').click();
  });

  it('Авторизация существующего пользователя негативный сценарий ', () => {
    cy.visit('https://tomsk.hh.ru');
    cy.contains('Войти').click();
    cy.get('input[name="login"]').type('eyesavNegativeeenue@list.ru');
    cy.contains('Войти с паролем').click();
    cy.get('input[aria-label="Введите пароль"]').type('dspiucnsicnaisNegativenci123sdocnsdpcin');
    cy.get('button[data-qa="account-login-submit"]').click();
    cy.wait(3000);
  });

  it('Поиск резюме', () => {
    cy.visit('https://hh.ru');
    cy.get('input[data-qa="search-input"]').type('дизайнер');
    cy.get('[data-qa="search-button"] button').click({ force: true }).should('exist');
    // cy.get('div[data-qa="bloko-modal-close"]').click({ force: true }).should('exist');

  });

  it('Отклик на вакансию', () => {
    cy.visit('https://tomsk.hh.ru');
    cy.contains('Войти').click();
    cy.get('input[name="login"]').type('eyesavenue@list.ru');
    cy.contains('Войти с паролем').click();
    cy.get('input[aria-label="Введите пароль"]').type('dspiucnsicnaisnci123sdocnsdpcin');
    cy.get('button[data-qa="account-login-submit"]').click();
    cy.get('div#HH-React-Root > div > div > div.HH-MainContent.HH-Supernova-MainContent > div.main-content.main-content_broad-spacing > div:nth-child(2) > div > div.bloko-column.bloko-column_xs-4.bloko-column_s-8.bloko-column_m-8.bloko-column_l-12 > div:nth-child(4) > div > div.serp-item-controls > div.serp-item-control-gt-xs--AkKykYTSX24KOQAbGpkV').click();
    cy.wait(2000);
  });

  it('Проверка работы фильтров в поиске вакансий', () => {
    cy.visit('https://hh.ru');
    cy.get('.bloko-button[data-qa="advanced-search"]').click({force: true});
    cy.contains('в названии вакансии').click();
    cy.contains('Стажировка').click();
    cy.get('input[data-qa="vacancysearch__keywords-input"]').type('Дизайнер');
    cy.get('input[data-qa="vacancysearch__keywords-excluded-input"]').type('Программист');
    cy.get('input[data-qa="advanced-search-region-add"]').type('Санкт-Петербург');
    cy.get('input[data-qa="advanced-search-salary"]').type('10');
    cy.get('button[data-qa="advanced-search-submit-button"]').click({ force: true });
  });

  it('Регистрация нового пользователя', () => {
    cy.visit('https://tomsk.hh.ru');
    cy.contains('Создать резюме').click();
    cy.get('input[name="login"]').type('drynbtw@list.ru');
    cy.contains('Зарегистрироваться').click();
    cy.pause();
    cy.contains('Подтвердить').click().should('exist');
  });

  it('Регистрация нового пользователя негативный сценарий', () => {
    cy.visit('https://tomsk.hh.ru');
    cy.contains('Создать резюме').click();
    cy.get('input[name="login"]').type('dryn btw@list.ru');
    cy.contains('Зарегистрироваться').click();
    cy.wait(3000);
  });

  it('Создание пароля', () => {
    cy.visit('https://tomsk.hh.ru');
    cy.contains('Войти').click();
    cy.get('input[name="login"]').type('drynbtw@list.ru');
    cy.contains('Войти с паролем').click();
    cy.get('input[aria-label="Введите пароль"]').type('dspiucnsicnaisnci11sdocnsdpcin');
    cy.get('button[data-qa="account-login-submit"]').click();
    cy.get('button[data-qa="mainmenu_applicantProfile"]').click();
    cy.get('.supernova-dropdown-section_main-content').contains('Настройки').click();
    cy.get('[data-qa="settings__password-edit"]').contains('Изменить').click();
    cy.get('input[data-qa="settings__password-password"]').type('dspiucnsicnaisnci11sdocnsdpcin');
    cy.get('input[name="newPassword"]').type('dspiucnsicnaisnci123sdocnsdpcin');
    cy.get('input[name="newPasswordConfirm"]').type('dspiucnsicnaisnci123sdocnsdpcin');
    cy.get('input[data-qa="settings__password-submit"]').click().should('exist');
  });

});