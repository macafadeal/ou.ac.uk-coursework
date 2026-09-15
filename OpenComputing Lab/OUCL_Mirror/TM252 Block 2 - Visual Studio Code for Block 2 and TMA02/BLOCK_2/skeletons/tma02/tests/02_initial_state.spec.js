import { test, expect } from '@playwright/test';

test.describe("initial state of the web page", {
  tag: ["@tma02/q1/id/initial-state", "@tma02/q1/marks/8", "@tma02/q1/title/Initial State", "@tma02/q1/order/0"],
}, () => {
  test('all TMA card headers are visible', {
    annotation: [
      {
        type: "feedback",
        description: 'For all TMA cards in the centre column, the card headers must be visible. In your solution, one or more of the headers are not visible.',
      },
      {
        type: "url",
        description: "https://getbootstrap.com/docs/5.3/utilities/display/",
      }
    ]
  }, async ({ page }) => {
    await page.goto('/');
    for (const cardBody of await page.locator(".state-completed .card-header").all()) {
      await expect(cardBody).toBeVisible();
    }
  });

  test('the completed TMA card bodies are initially visible', {
    annotation: [
      {
        type: "feedback",
        description: 'The first two cards ("TM252 25B | TMA01" and "M269 24J | TMA03") in the centre column must have their card bodies visible, but yours are still hidden.',
      },
      {
        type: "url",
        description: "https://getbootstrap.com/docs/5.3/utilities/display/",
      }
    ]
  }, async ({ page }) => {
    await page.goto('/');
    for (const cardBody of await page.locator(".state-completed .card-body").all()) {
      await expect(cardBody).toBeVisible();
    }
  });

  test("the completed TMA card's toggle buttons show the text 'Hide details'", {
    annotation: [
      {
        type: "feedback",
        description: 'The first two cards ("TM252 25B | TMA01" and "M269 24J | TMA03") in the centre column must have toggle buttons that have the text "Hide details".',
      },
      {
        type: "url",
        description: "https://getbootstrap.com/docs/5.3/utilities/display/",
      }
    ]
  }, async ({ page }) => {
    await page.goto('/');
    await expect(page.locator(".state-completed .card-header button")).toHaveCount(2);
    for (const button of await page.locator(".state-completed .card-header button").all()) {
      await expect(button).toHaveText("Hide details");
    }
  });

  test("the upcoming TMA card body is initially hidden", {
    annotation: [
      {
        type: "feedback",
        description: 'The third card ("TM252 25B | TMA02") in the centre column must have their card bodies hidden, but yours is visible.',
      },
      {
        type: "url",
        description: "https://getbootstrap.com/docs/5.3/utilities/display/",
      },
    ]
  }, async ({ page }) => {
    await page.goto('/');
    for (const cardBody of await page.locator(".state-incomplete .card-body").all()) {
      await expect(cardBody).toBeHidden();
    }
  });

  test("the upcoming TMA card's toggle button shows the text 'Show details'", {
    annotation: [
      {
        type: "feedback",
        description: 'The third card ("TM252 25B | TMA02") in the centre column must have a toggle button that has the text "Show details".',
      },
      {
        type: "url",
        description: "https://getbootstrap.com/docs/5.3/utilities/display/",
      },
    ]
  }, async ({ page }) => {
    await page.goto('/');
    await expect(page.locator(".state-incomplete .card-header button")).toHaveCount(1);
    for (const button of await page.locator(".state-incomplete .card-header button").all()) {
      await expect(button).toHaveText("Show details");
    }
  });
});
