describe("Baseball Sample Test", function() {
  it("新しいPlayerを登録する", function() {
    const NAME = "ozaki";
    const AGE = 27;
    const TEAM = "Runners";
    const POSITION = "ピッチャー";

    // 一覧画面
    cy.visit("/players");
    cy.title().should("include", "Listing Player");
    cy
      .get("a")
      .contains("新規作成")
      .click();

    // 登録画面
    cy.url().should("include", "/players/new");
    cy.title().should("include", "New Player");

    // ラベルチェック
    cy
      .get("#name")
      .prev(".control-label")
      .contains("名前");
    cy
      .get("#age")
      .prev(".control-label")
      .contains("年齢");
    cy
      .get("#team")
      .prev(".control-label")
      .contains("チーム名");
    cy
      .get("#position")
      .prev(".control-label")
      .contains("守備位置");

    // 入力
    cy.get("#name").type(NAME);
    cy.get("#age").type(AGE);
    cy.get("#team").type(TEAM);
    cy.get("#position").type(POSITION);

    // 送信
    cy
      .get("button")
      .contains("作成")
      .click();

    // 一覧画面
    cy.url().should("include", "/players");
    cy.title().should("include", "Listing Player");

    // 登録内容の確認
    cy
      .get("tr")
      .last()
      .children("td")
      .first() // firstはID
      .next()
      .contains(NAME)
      .next()
      .contains(AGE)
      .next()
      .contains(TEAM)
      .next()
      .contains(POSITION);
  });
});
