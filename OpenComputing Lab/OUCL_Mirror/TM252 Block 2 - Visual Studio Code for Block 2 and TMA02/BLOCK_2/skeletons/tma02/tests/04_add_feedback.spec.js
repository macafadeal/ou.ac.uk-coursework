import { test, expect } from '@playwright/test';

test.describe("adding of feedback", {
  tag: ["@tma02/q1/id/feedback", "@tma02/q1/marks/8", "@tma02/q1/title/Feedback", "@tma02/q1/order/2"],
}, () => {
  test("the TM252 25B | TMA01 card does not have any feedback", {
    annotation: [
      {
        type: "feedback",
        description: 'For the "TM252 25B | TMA01" card, there is content in the "Feedback" section. Initially this section must only contain the <h4> tag with the text "Feedback". All other content must only be added after clicking on the "Hide details" button.',
      },
    ]
  }, async ({ page }) => {
    await page.goto('/');
    await expect(page.locator("#tm252-25b-tma01 .card-body .role-feedback *")).toHaveCount(1);
  });

  test('the TM252 25B | TMA01 card has feedback after clicking on the "Hide details" button.', {
    annotation: [
      {
        type: "feedback",
        description: 'For the "TM252 25B | TMA01" card, there is no content in the "Feedback" section after clicking the "Hide details" button. After clicking on the button, the section should contain the <h4> tag with the text "Feedback" and one or more paragraphs of text.',
      },
      {
        type: "url",
        description: "https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement",
      },
      {
        type: "url",
        description: "https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild",
      },
    ]
  }, async ({ page }) => {
    await page.goto('/');
    await expect(page.locator("#tm252-25b-tma01 .card-body .role-feedback *")).toHaveCount(1);
    await page.locator("#tm252-25b-tma01 .card-header button").click(); 
    await page.locator("#tm252-25b-tma01 .card-header button").click(); 
    await expect(page.locator("#tm252-25b-tma01 .card-body .role-feedback h4")).toHaveText("Feedback");
    await expect(page.locator("#tm252-25b-tma01 .card-body .role-feedback *")).not.toHaveCount(1);
  });

  test('the TM252 25B | TMA01 card has feedback that is fetched from the server', {
    annotation: [
      {
        type: "feedback",
        description: 'For the "TM252 25B | TMA01" card, the feedback has not been fetched from the server.',
      },
      {
        type: "url",
        description: "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch",
      },
    ]
  }, async ({ page }) => {
    const buffer = [];
    const characters = "abcdefg0123456789";
    for (let idx = 0; idx < 62; idx++) {
      buffer.push(characters.charAt(Math.floor(Math.random() * characters.length)));
    }
    await page.route("*/**/api/feedback", async (route) => {
      await route.fulfill({ body: buffer.join("") });
    });
    await page.goto('/');
    await expect(page.locator("#tm252-25b-tma01 .card-body .role-feedback *")).toHaveCount(1);
    await page.locator("#tm252-25b-tma01 .card-header button").click();
    await page.locator("#tm252-25b-tma01 .card-header button").click();
    await expect(page.locator("#tm252-25b-tma01 .card-body .role-feedback h4")).toHaveText("Feedback");
    await expect(page.locator("#tm252-25b-tma01 .card-body .role-feedback p")).toHaveText(buffer.join(""));
  });
});