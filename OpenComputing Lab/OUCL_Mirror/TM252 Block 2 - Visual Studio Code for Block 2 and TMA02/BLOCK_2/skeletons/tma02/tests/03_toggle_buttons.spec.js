import { test, expect } from '@playwright/test';

test.describe("show/hide toggle buttons", {
  tag: ["@tma02/q1/id/toggle-buttons", "@tma02/q1/marks/10", "@tma02/q1/title/Toggle Buttons", "@tma02/q1/order/1"],
}, () => {
  test("clicking the TM252 25B | TMA01 toggle button hides the card's body", {
    annotation: [
      {
        type: "feedback",
        description: 'For the "TM252 25B | TMA01" card, clicking on the "Hide details" button does not hide the card\'s body.',
      },
      {
        type: "url",
        description: "https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener",
      },
      {
        type: "url",
        description: "https://getbootstrap.com/docs/5.3/utilities/display/",
      },
    ]
  }, async ({ page }) => {
    await page.goto('/');
    await expect(page.locator("#tm252-25b-tma01 .card-body")).toBeVisible();
    await page.locator("#tm252-25b-tma01 .card-header button").click();
    await expect(page.locator("#tm252-25b-tma01 .card-body")).toBeHidden();
  });

  test("clicking the TM252 25B | TMA01 toggle button twice shows the card's body", {
    annotation: [
      {
        type: "feedback",
        description: 'For the "TM252 25B | TMA01" card, clicking on the "Show details" button does not show the card\'s body.',
      },
      {
        type: "url",
        description: "https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener",
      },
      {
        type: "url",
        description: "https://getbootstrap.com/docs/5.3/utilities/display/",
      },
    ]
  }, async ({ page }) => {
    await page.goto('/');
    await expect(page.locator("#tm252-25b-tma01 .card-body")).toBeVisible();
    await page.locator("#tm252-25b-tma01 .card-header button").click();
    await expect(page.locator("#tm252-25b-tma01 .card-body")).toBeHidden();
    await page.locator("#tm252-25b-tma01 .card-header button").click();
    await expect(page.locator("#tm252-25b-tma01 .card-body")).toBeVisible();
  });

  test("clicking the TM252 25B | TMA01 toggle button updates the button's text", {
    annotation: [
      {
        type: "feedback",
        description: 'For the "TM252 25B | TMA01" card, repeatedly clicking on the "Hide details" button does not change the button text from "Hide details" to "Show details" and back.',
      },
      {
        type: "url",
        description: "https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML",
      },
    ]
  }, async ({ page }) => {
    await page.goto('/');
    await expect(page.locator("#tm252-25b-tma01 .card-header button")).toHaveText("Hide details");
    await page.locator("#tm252-25b-tma01 .card-header button").click();
    await expect(page.locator("#tm252-25b-tma01 .card-header button")).toHaveText("Show details");
    await page.locator("#tm252-25b-tma01 .card-header button").click();
    await expect(page.locator("#tm252-25b-tma01 .card-header button")).toHaveText("Hide details");
  });

  test("clicking the TM252 25B | TMA01 toggle button updates the button's aria-expanded attribute", {
    annotation: [
      {
        type: "feedback",
        description: 'For the "TM252 25B | TMA01" card, repeatedly clicking on the "Hide details" button does not change the aria-expanded attribute from "true" to "false" and back.',
      },
      {
        type: "url",
        description: "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-expanded",
      },
      {
        type: "url",
        description: "https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute",
      },
    ]
  }, async ({ page }) => {
    await page.goto('/');
    await expect(page.locator("#tm252-25b-tma01 .card-header button")).toHaveAttribute("aria-expanded", "true"); 
    await page.locator("#tm252-25b-tma01 .card-header button").click();
    await expect(page.locator("#tm252-25b-tma01 .card-header button")).toHaveAttribute("aria-expanded", "false"); 
    await page.locator("#tm252-25b-tma01 .card-header button").click();
    await expect(page.locator("#tm252-25b-tma01 .card-header button")).toHaveAttribute("aria-expanded", "true"); 
  });

  test("clicking the M269 24J | TMA03 toggle button hides the card's body", {
    annotation: [
      {
        type: "feedback",
        description: 'For the "M269 24J | TMA03" card, clicking on the "Hide details" button does not hide the card\'s body.',
      },
      {
        type: "url",
        description: "https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener",
      },
      {
        type: "url",
        description: "https://getbootstrap.com/docs/5.3/utilities/display/",
      },
    ]
  }, async ({ page }) => {
    await page.goto('/');
    await expect(page.locator("#m269-24j-tma03 .card-body")).toBeVisible();
    await page.locator("#m269-24j-tma03 .card-header button").click();
    await expect(page.locator("#m269-24j-tma03 .card-body")).toBeHidden();
  });

  test("clicking the M269 24J | TMA03 toggle button twice shows the card's body", {
    annotation: [
      {
        type: "feedback",
        description: 'For the "M269 24J | TMA03" card, clicking on the "Show details" button does not show the card\'s body.',
      },
      {
        type: "url",
        description: "https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener",
      },
      {
        type: "url",
        description: "https://getbootstrap.com/docs/5.3/utilities/display/",
      },
    ]
  }, async ({ page }) => {
    await page.goto('/');
    await expect(page.locator("#m269-24j-tma03 .card-body")).toBeVisible();
    await page.locator("#m269-24j-tma03 .card-header button").click();
    await expect(page.locator("#m269-24j-tma03 .card-body")).toBeHidden();
    await page.locator("#m269-24j-tma03 .card-header button").click();
    await expect(page.locator("#m269-24j-tma03 .card-body")).toBeVisible();
  });

  test("clicking the M269 24J | TMA03 button updates the button's text", {
    annotation: [
      {
        type: "feedback",
        description: 'For the "M269 24J | TMA03" card, repeatedly clicking on the "Hide details" button does not change the button text from "Hide details" to "Show details" and back.',
      },
      {
        type: "url",
        description: "https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML",
      },
    ]
  }, async ({ page }) => {
    await page.goto('/');
    await expect(page.locator("#m269-24j-tma03 .card-header button")).toHaveText("Hide details");
    await page.locator("#m269-24j-tma03 .card-header button").click();
    await expect(page.locator("#m269-24j-tma03 .card-header button")).toHaveText("Show details");
    await page.locator("#m269-24j-tma03 .card-header button").click();
    await expect(page.locator("#m269-24j-tma03 .card-header button")).toHaveText("Hide details");
  });

  test("clicking the M269 24J | TMA03 button updates the button's aria-expanded attribute", {
    annotation: [
      {
        type: "feedback",
        description: 'For the "M269 24J | TMA03" card, repeatedly clicking on the "Hide details" button does not change the aria-expanded attribute from "true" to "false" and back.',
      },
      {
        type: "url",
        description: "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-expanded",
      },
      {
        type: "url",
        description: "https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute",
      },
    ]
  }, async ({ page }) => {
    await page.goto('/');
    await expect(page.locator("#m269-24j-tma03 .card-header button")).toHaveAttribute("aria-expanded", "true");
    await page.locator("#m269-24j-tma03 .card-header button").click();
    await expect(page.locator("#m269-24j-tma03 .card-header button")).toHaveAttribute("aria-expanded", "false");
    await page.locator("#m269-24j-tma03 .card-header button").click();
    await expect(page.locator("#m269-24j-tma03 .card-header button")).toHaveAttribute("aria-expanded", "true");
  });

  test("clicking the TM252 25B | TMA02 toggle button shows the card's body", {
    annotation: [
      {
        type: "feedback",
        description: 'For the "TM252 25B | TMA02" card, clicking on the "Show details" button does not show the card\'s body.',
      },
      {
        type: "url",
        description: "https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener",
      },
      {
        type: "url",
        description: "https://getbootstrap.com/docs/5.3/utilities/display/",
      },
    ]
  }, async ({ page }) => {
    await page.goto('/');
    await expect(page.locator("#tm252-25b-tma02 .card-body")).toBeHidden();
    await page.locator("#tm252-25b-tma02 .card-header button").click();
    await expect(page.locator("#tm252-25b-tma02 .card-body")).toBeVisible();
  });

test("clicking the TM252 25B | TMA02 toggle button twice hides the card's body", {
    annotation: [
      {
        type: "feedback",
        description: 'For the "TM252 25B | TMA02" card, clicking on the "Hide details" button does not hide the card\'s body.',
      },
      {
        type: "url",
        description: "https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener",
      },
      {
        type: "url",
        description: "https://getbootstrap.com/docs/5.3/utilities/display/",
      },
    ]
  }, async ({ page }) => {
    await page.goto('/');
    await expect(page.locator("#tm252-25b-tma02 .card-body")).toBeHidden(); 
    await page.locator("#tm252-25b-tma02 .card-header button").click();
    await expect(page.locator("#tm252-25b-tma02 .card-body")).toBeVisible();
    await page.locator("#tm252-25b-tma02 .card-header button").click();
    await expect(page.locator("#tm252-25b-tma02 .card-body")).toBeHidden(); 
  });

  test("clicking the TM252 25B | TMA02 toggle button updates the button's text", {
    annotation: [
      {
        type: "feedback",
        description: 'For the "TM252 25B | TMA02" card, repeatedly clicking on the "Show details" button does not change the button text from "Show details" to "Hide details" and back.',
      },
      {
        type: "url",
        description: "https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML",
      },
    ]
  }, async ({ page }) => {
    await page.goto('/');
    await expect(page.locator("#tm252-25b-tma02 .card-header button")).toHaveText("Show details");
    await page.locator("#tm252-25b-tma02 .card-header button").click();
    await expect(page.locator("#tm252-25b-tma02 .card-header button")).toHaveText("Hide details");
    await page.locator("#tm252-25b-tma02 .card-header button").click();
    await expect(page.locator("#tm252-25b-tma02 .card-header button")).toHaveText("Show details");
  });

  test("clicking the TM252 25B | TMA02 toggle button updates the button's aria-expanded attribute", {
    annotation: [
      {
        type: "feedback",
        description: 'For the "TM252 25B | TMA02" card, repeatedly clicking on the "Show details" button does not change the aria-expanded attribute from "false" to "true" and back.',
      },
      {
        type: "url",
        description: "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-expanded",
      },
      {
        type: "url",
        description: "https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute",
      },
    ]
  }, async ({ page }) => {
    await page.goto('/');
    await expect(page.locator("#tm252-25b-tma02 .card-header button")).toHaveAttribute("aria-expanded", "false"); 
    await page.locator("#tm252-25b-tma02 .card-header button").click();
    await expect(page.locator("#tm252-25b-tma02 .card-header button")).toHaveAttribute("aria-expanded", "true"); 
    await page.locator("#tm252-25b-tma02 .card-header button").click();
    await expect(page.locator("#tm252-25b-tma02 .card-header button")).toHaveAttribute("aria-expanded", "false"); 
  });
});
